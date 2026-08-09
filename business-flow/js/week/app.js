/* ENGLISH FLOW — week/app.js
   A casca semanal: dashboard do aluno, tela do tópico, mapa mental e praticar mais.

   Modelo: 1 unidade = 1 mês = 4 semanas = 4 aulas ao vivo.
   O tópico da semana só abre quando o professor destrava na aula ao vivo
   (código UNL do mentor, ou o botão do painel do professor no mesmo aparelho).
   Uma vez aberto, fica aberto — nada fecha, os tópicos vão se acumulando. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const WK = DF.WK = {};

  // Trilhas selecionáveis. og1/wc1 existem só como opção por enquanto — sem
  // plano cadastrado (DF.PLAN não tem essas chaves), então o app cai
  // graciosamente na tela "em preparação" (mesmo caminho que Elementary usa
  // hoje). Construir o conteúdo delas é trabalho futuro, não deste commit.
  const TRAIL_NAME = {
    starter: 'Business Starter', elementary: 'Business Elementary',
    og1: 'Oil and Gas One', wc1: 'World Class One'
  };

  // ── trava por semana (chave "unidade.semana", ex.: "1.1") ──
  const OPEN_KEY = 'englishflow_open_v1';
  let open = {};
  function loadOpen() {
    try { open = JSON.parse(localStorage.getItem(OPEN_KEY)) || {}; } catch (e) { open = {}; }
  }
  function saveOpen() {
    try { localStorage.setItem(OPEN_KEY, JSON.stringify(open)); } catch (e) { /* cheio */ }
  }
  // a chave leva o NOME do aluno — sem isso, dois alunos da mesma trilha
  // testados no mesmo aparelho (o computador do professor) se misturavam:
  // o "destravado" de um vazava pro outro, porque só trilha+semana não
  // distingue quem é quem (achado 04/08/2026, ver ESFERA-ARQUITETURA).
  function wkKey(u, n) {
    return (DF.state.name || 'sem-nome') + '|' + (DF.state.trail || 'starter') + ':' + u + '.' + n;
  }
  // "prévia" (link ?preview=) — feita SÓ de memória, nunca gravada em
  // localStorage. Some sozinha ao recarregar a página. É o que faz o botão
  // "🧪 Testar" mostrar uma semana sem destravar ela de verdade (achado
  // 10/08/2026 — antes "Testar" reusava o link real e destravava mesmo).
  let previewUntil = null;
  WK.isOpen = function (u, n) {
    if (open[wkKey(u, n)]) return true;
    if (previewUntil && (u < previewUntil.u || (u === previewUntil.u && n <= previewUntil.n))) {
      return true;
    }
    return false;
  };
  WK.openWeek = function (u, n) { open[wkKey(u, n)] = DF.todayKey(); saveOpen(); };
  WK.isPreviewing = function () { return !!previewUntil; };

  // Datas de aula ao vivo. Sem servidor, o único jeito de o app do aluno
  // saber isso é o professor mandar junto no link de destrava (que já muda
  // toda semana) — nunca no link fixo, que não pode mudar. Guarda a lista
  // inteira que veio (não só a próxima), pra desenhar um mini-calendário.
  const NEXT_KEY = 'englishflow_nextclass_v1'; // legado: só a próxima
  const DATES_KEY = 'englishflow_classdates_v1'; // lista inteira, CSV
  const DIAS_SEMANA = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

  WK.setClassDates = function (csv) {
    try {
      localStorage.setItem(DATES_KEY, csv);
      localStorage.setItem(NEXT_KEY, csv.split(',')[0] || '');
    } catch (e) { /* cheio */ }
  };
  // todas as datas guardadas que ainda não passaram, em ordem
  WK.classDates = function () {
    let csv;
    try { csv = localStorage.getItem(DATES_KEY); } catch (e) { csv = null; }
    if (!csv) return [];
    const hoje = DF.todayKey();
    return csv.split(',').filter(function (d) {
      return /^\d{4}-\d{2}-\d{2}$/.test(d) && d >= hoje;
    }).sort();
  };
  WK.nextClassDate = function () {
    const d = WK.classDates()[0];
    if (!d) return null;
    const dt = new Date(d + 'T00:00:00');
    return DF.fmtDate(dt) + ' (' + DIAS_SEMANA[dt.getDay()] + ')';
  };

  // ONDE O ALUNO ESTÁ = tudo até aqui está liberado.
  // O professor não manda 14 links pra quem está na semana 14 — ele diz o ponto
  // e o app abre a semana e tudo que vem antes (nesta unidade e nas anteriores).
  WK.openUpTo = function (u, n) {
    const t = DF.PLAN[DF.state.trail || 'starter'] || {};
    const hoje = DF.todayKey();
    Object.keys(t).map(Number).forEach(function (un) {
      (t[un].weeks || []).forEach(function (w) {
        if (un < u || (un === u && w.n <= n)) open[wkKey(un, w.n)] = hoje;
      });
    });
    saveOpen();
  };

  // Chave do link de destrava. Trava BRANDA: impede o aluno de simplesmente
  // trocar "unlock=1.1" por "unlock=1.4" na barra de endereço. Não é segurança
  // de verdade (o sal está no JS do cliente) — o objetivo é pedagógico:
  // a semana abre na aula, junto com o professor.
  WK.weekKey = function (nome, trail, u, n) {
    return DF.sign('week|' + (nome || 'sem-nome') + '|' + trail + '|' + u + '.' + n).slice(0, 6);
  };

  // ── progresso por passo (chave "unidade.semana.passo") ──
  function stKey(u, n, id) { return wkKey(u, n) + '.' + id; }
  WK.stepDone = function (u, n, id) { return !!open['done:' + stKey(u, n, id)]; };
  WK.markStep = function (u, n, id) { open['done:' + stKey(u, n, id)] = 1; saveOpen(); };

  function plan(u) {
    const t = DF.PLAN[DF.state.trail || 'starter'] || {};
    return t[u] || null;
  }

  // ══════════════════════════════════════════════════════════
  // DASHBOARD — a primeira tela: o que eu tenho pra fazer
  // ══════════════════════════════════════════════════════════
  WK.dash = function (u) {
    u = u || WK.currentUnit();
    const p = plan(u);
    const c = DF.$('#s-dash .content');
    c.innerHTML = '';
    if (!p) {
      c.appendChild(DF.el('div', 'panel', '<h3>Em preparação</h3>' +
        '<p class="muted">Esta unidade ainda não está disponível no app. ' +
        'Fale com o professor no grupo.</p>'));
      return;
    }

    c.appendChild(brand());

    const top = DF.el('div', 'wk-top');
    top.appendChild(DF.el('span', 'wk-trail', TRAIL_NAME[DF.state.trail] || 'English Flow'));
    const cur = p.weeks.filter(function (w) { return WK.isOpen(u, w.n); }).length;
    top.appendChild(DF.el('span', 'wk-chip', DF.esc(
      (p.weeks[Math.max(0, cur - 1)] || p.weeks[0]).title)));
    c.appendChild(top);

    c.appendChild(DF.el('div', 'wk-unit', 'Unit ' + u + ' — ' + DF.esc(p.title)));
    c.appendChild(DF.el('div', 'wk-hello',
      (DF.state.name ? 'Olá, ' + DF.esc(DF.state.name) + ' · ' : '') + DF.esc(p.subtitle || '')));

    // a escada da marca: cada semana é um degrau que acende
    const stair = DF.el('div', 'stair');
    p.weeks.forEach(function (w, i) {
      const sp = DF.el('div', 'sp');
      if (WK.isOpen(u, w.n)) sp.classList.add(WK.weekDone(u, w) ? 'done' : 'on');
      sp.appendChild(DF.el('b', '', DF.esc(w.icon)));
      if (i === p.weeks.length - 1) sp.appendChild(DF.el('span', 'flag', '🚩'));
      stair.appendChild(sp);
    });
    c.appendChild(stair);
    c.appendChild(DF.el('div', 'stair-cap', 'Small actions every day create big results.'));

    // a semana "atual" = a última destravada — fica sempre aberta na tela,
    // primeiro clique. As anteriores (já vistas) começam colapsadas.
    const curN = p.weeks.reduce(function (m, w) { return WK.isOpen(u, w.n) ? w.n : m; }, 0);
    p.weeks.forEach(function (w) { c.appendChild(topicCard(u, p, w, w.n === curN)); });

    // o gancho: o que vem na próxima aula — com data real, se o professor mandou
    const nextW = p.weeks.find(function (w) { return !WK.isOpen(u, w.n); });
    if (nextW) {
      const nl = DF.el('div', 'next-live');
      const dataFmt = WK.nextClassDate();
      nl.appendChild(DF.el('b', '', dataFmt ? '📅 Próxima aula ao vivo · ' + dataFmt
                                             : '🔒 Próxima aula ao vivo'));
      nl.appendChild(DF.el('p', '', DF.esc(
        (p.weeks[nextW.n - 2] && p.weeks[nextW.n - 2].nextLive) || nextW.title)));
      nl.appendChild(DF.el('p', 'muted',
        'O professor destrava na aula. Depois disso fica liberado pra sempre.'));
      c.appendChild(nl);
    }

    // mini-calendário: as próximas aulas marcadas pelo professor
    const datas = WK.classDates();
    if (datas.length) c.appendChild(miniCalendario(datas));

    // a janela aberta agora — o que já dá pra estudar até a próxima aula
    if (cur > 0) {
      const win = DF.el('div', 'study-window');
      win.appendChild(DF.el('b', '', '📖 Sua janela de estudo agora'));
      win.appendChild(DF.el('p', '',
        'Você tem ' + cur + ' tópico' + (cur > 1 ? 's' : '') + ' liberado' +
        (cur > 1 ? 's' : '') + ' nesta unidade — dá pra estudar à vontade até a próxima aula.'));
      c.insertBefore(win, c.querySelector('.next-live') || null);
    }

    c.appendChild(doubtBtn('Unit ' + u + ' — ' + p.title));

    // Unidade concluída fica acessível PARA SEMPRE — mas fora da frente do aluno.
    // O foco é a semana atual; rever é uma escolha dele, no rodapé, sem contagem.
    const antigas = WK.unlockedUnits().filter(function (n) { return n !== u; });
    if (antigas.length) {
      const rev = DF.el('button', 'btn ghost wide review-btn', '📚 Rever o que já estudei');
      rev.type = 'button';
      rev.onclick = function () { WK.review(u); };
      c.appendChild(rev);
    }
  };

  // mini-calendário do mês corrente, marcando os dias de aula que vieram no link
  const MESES_PT = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  function miniCalendario(datas) {
    const hoje = new Date();
    const ano = hoje.getFullYear(), mes = hoje.getMonth();
    const wrap = DF.el('div', 'study-window');
    wrap.appendChild(DF.el('b', '', '📅 Suas aulas — ' + MESES_PT[mes] + ' ' + ano));

    const grid = DF.el('div', 'cal-grid');
    ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].forEach(function (d) {
      grid.appendChild(DF.el('div', 'cal-dow', d));
    });
    const startPad = new Date(ano, mes, 1).getDay();
    const daysInMonth = new Date(ano, mes + 1, 0).getDate();
    const todayKey = DF.todayKey();
    for (let i = 0; i < startPad; i++) grid.appendChild(DF.el('div', 'cal-day empty'));
    for (let d = 1; d <= daysInMonth; d++) {
      const key = ano + '-' + String(mes + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
      const marcado = datas.indexOf(key) >= 0;
      grid.appendChild(DF.el('div',
        'cal-day' + (marcado ? ' on' : '') + (key === todayKey ? ' today' : ''), String(d)));
    }
    wrap.appendChild(grid);
    return wrap;
  }

  // todas as unidades com pelo menos uma semana destravada
  WK.unlockedUnits = function () {
    const t = DF.PLAN[DF.state.trail || 'starter'] || {};
    return Object.keys(t).map(Number).sort(function (a, b) { return a - b; })
      .filter(function (n) {
        return (t[n].weeks || []).some(function (w) { return WK.isOpen(n, w.n); });
      });
  };

  // tela de revisão: as unidades anteriores, sem virar prateleira na home
  WK.review = function (atual) {
    const t = DF.PLAN[DF.state.trail || 'starter'] || {};
    const c = DF.$('#s-step .content');
    c.innerHTML = '';
    const back = DF.el('button', 'btn ghost small', '◂ Voltar');
    back.onclick = function () { DF.go('s-dash'); WK.dash(atual); };
    const hd = DF.el('div', 'screen-head');
    hd.appendChild(back);
    hd.appendChild(DF.el('h2', '', 'Já estudado'));
    c.appendChild(hd);
    c.appendChild(DF.el('p', 'muted',
      'Tudo que você já abriu continua aqui, pra sempre. Volte quando quiser revisar.'));

    WK.unlockedUnits().forEach(function (n) {
      const p = t[n];
      const card = DF.el('button', 'tp open review-card');
      card.type = 'button';
      const head = DF.el('div', 'tp-head');
      head.appendChild(DF.el('span', 'tp-ic', n === atual ? '📍' : p.icon));
      head.appendChild(DF.el('div', 'tp-name', 'Unit ' + n + ' — ' + DF.esc(p.title)));
      card.appendChild(head);
      const feitas = (p.weeks || []).filter(function (w) { return WK.weekDone(n, w); }).length;
      const abertas = (p.weeks || []).filter(function (w) { return WK.isOpen(n, w.n); }).length;
      card.appendChild(DF.el('div', 'tp-goal',
        n === atual ? 'Você está aqui.'
                    : feitas + ' de ' + abertas + ' tópicos concluídos'));
      card.onclick = function () { DF.go('s-dash'); WK.dash(n); };
      c.appendChild(card);
    });
    DF.go('s-step');
  };

  WK.weekDone = function (u, w) {
    const steps = (w.steps || []).filter(function (s) { return !s.soon; });
    if (!steps.length) return false;
    return steps.every(function (s) { return WK.stepDone(u, w.n, s.id); });
  };

  WK.currentUnit = function () {
    const t = DF.PLAN[DF.state.trail || 'starter'] || {};
    const us = Object.keys(t).map(Number).sort(function (a, b) { return a - b; });
    // a unidade atual é a última com alguma semana aberta (ou a primeira)
    let cur = us[0] || 1;
    us.forEach(function (n) {
      if ((t[n].weeks || []).some(function (w) { return WK.isOpen(n, w.n); })) cur = n;
    });
    return cur;
  };

  function topicCard(u, p, w, isCurrent) {
    const opened = WK.isOpen(u, w.n);
    const done = WK.weekDone(u, w);
    // semana atual = sempre aberta na tela, primeiro clique. Semanas já
    // abertas mas antigas ficam colapsadas — ele clica pra rever. Travadas
    // mostram só a meta, como "próximo desafio".
    const collapsedByDefault = opened && !isCurrent;
    const card = DF.el('div', 'tp ' + (opened ? (done ? 'open done' : 'open') : 'lock') +
      (isCurrent ? ' current' : '') + (collapsedByDefault ? ' collapsed' : ''));

    const head = DF.el(collapsedByDefault ? 'button' : 'div', 'tp-head');
    if (collapsedByDefault) head.type = 'button';
    head.appendChild(DF.el('span', 'tp-ic', opened ? (done ? '✅' : w.icon) : '🔒'));
    const nm = DF.el('div', 'tp-name', DF.esc(w.title));
    head.appendChild(nm);
    if (isCurrent) head.appendChild(DF.el('span', 'tp-now', '👉 agora'));
    head.appendChild(DF.el('span', 'tp-week', 'Sem ' + w.n));
    if (collapsedByDefault) head.appendChild(DF.el('span', 'tp-caret', '▾'));
    card.appendChild(head);

    if (!opened) {
      card.appendChild(DF.el('div', 'tp-goal',
        w.n === 1 ? 'Abre na primeira aula ao vivo.' : 'Abre na aula ao vivo da semana ' + w.n + '.'));
      return card;
    }

    const body = DF.el('div', 'tp-body');
    if (collapsedByDefault) {
      head.onclick = function () { card.classList.toggle('collapsed'); };
    }

    body.appendChild(DF.el('div', 'tp-goal', '🎯 ' + DF.esc(w.goal)));

    // a ponte: o app não repete a aula, ele estende
    if (w.bridge) {
      const br = DF.el('div', 'bridge');
      br.appendChild(DF.el('b', '', '↔ Aula e app'));
      br.appendChild(DF.el('span', '', DF.esc(w.bridge)));
      body.appendChild(br);
    }

    const steps = w.steps || [];
    if (!steps.length) {
      body.appendChild(DF.el('div', 'muted', 'Conteúdo desta semana em preparação.'));
      card.appendChild(body);
      return card;
    }

    steps.forEach(function (s) {
      const ok = WK.stepDone(u, w.n, s.id);
      const r = DF.el('button', 'st' + (ok ? ' ok' : ''));
      r.type = 'button';
      r.appendChild(DF.el('span', 'st-ic', ok ? '✅' : s.icon));
      r.appendChild(DF.el('span', 'st-name', DF.esc(s.name)));
      r.appendChild(DF.el('span', 'st-tag' + (s.sp ? ' sp' : ''), DF.esc(s.tag || '')));
      r.onclick = function () { WK.runStep(u, w, s); };
      body.appendChild(r);
    });

    // semana concluída → o debrief "I can…", a prova de evolução que o aluno lê
    if (done && w.ican && w.ican.length) {
      const ic = DF.el('div', 'ican');
      ic.appendChild(DF.el('b', '', '✅ Agora você consegue'));
      w.ican.forEach(function (s) { ic.appendChild(DF.el('div', '', '• ' + DF.esc(s))); });
      body.appendChild(ic);
    } else {
      const comp = DF.el('div', 'comp');
      comp.appendChild(DF.el('b', '', '🎯 Competência da semana'));
      comp.appendChild(DF.el('span', '', DF.esc(w.comp)));
      body.appendChild(comp);
    }

    if (w.more && w.more.length) {
      const mb = DF.el('button', 'btn ghost wide', '🔥 Quer praticar mais?');
      mb.onclick = function () { WK.more(u, w); };
      body.appendChild(mb);
    }
    card.appendChild(body);
    return card;
  }

  // a marca: onda + nome + lema (arte oficial em 1-MARKETING/ENGLISH FLOW.png)
  function brand() {
    const b = DF.el('div', 'ef-brand');
    b.innerHTML =
      '<svg class="ef-wave" viewBox="0 0 40 40" aria-hidden="true">' +
      '<path d="M2 15c6-6 12-6 18 0s12 6 18 0" fill="none" stroke="#2898d0" stroke-width="4.5" stroke-linecap="round"/>' +
      '<path d="M2 25c6-6 12-6 18 0s12 6 18 0" fill="none" stroke="#30a8e0" stroke-width="4.5" stroke-linecap="round" opacity=".55"/>' +
      '</svg>' +
      '<div class="ef-name">English<em>Flow</em></div>' +
      '<div class="ef-motto"><b>Consistency</b> beats intensity.<br>Learn daily. Speak naturally.</div>';
    return b;
  }

  // botão de dúvida: o aluno chega no WhatsApp já com o tópico nomeado
  function doubtBtn(topic) {
    const wrap = DF.el('div', '');
    wrap.style.marginTop = '18px';
    const b = DF.WA.btn('💬 Tirar dúvida com o professor',
      'Olá! Tenho uma dúvida em ENGLISH FLOW.\n' +
      'Aluno: ' + (DF.state.name || '—') + '\n' +
      'Tópico: ' + topic + '\n' +
      'Minha dúvida: ');
    b.classList.add('wide');
    wrap.appendChild(b);
    wrap.appendChild(DF.el('p', 'muted center small',
      'Mande o nome do tópico ou um print. O professor responde em até 24h.'));
    return wrap;
  }

  // ══════════════════════════════════════════════════════════
  // PASSO — roda os itens do passo, um a um
  // ══════════════════════════════════════════════════════════
  WK.runStep = function (u, w, s) {
    if (s.soon) { DF.toast('Em breve. 📺'); return; }
    if (s.mindmap) { WK.mindmap(u, w); return; }

    // passo gerado: monta uma bateria nova a cada abertura (nunca repete igual)
    const items = s.gen ? DF.WGEN.session(Object.assign({ unit: u }, s.gen))
                        : (s.items || []).slice();
    if (!items.length) { DF.toast('Este passo ainda não tem conteúdo.'); return; }

    const c = DF.$('#s-step .content');
    c.innerHTML = '';
    const back = DF.el('button', 'btn ghost small', '◂ Voltar');
    back.onclick = function () { DF.SP.stop(); DF.go('s-dash'); WK.dash(u); };
    const hd = DF.el('div', 'screen-head');
    hd.appendChild(back);
    hd.appendChild(DF.el('h2', '', DF.esc(s.name)));
    c.appendChild(hd);

    const bar = DF.el('div', 'step-bar');
    items.forEach(function () { bar.appendChild(DF.el('i')); });
    c.appendChild(bar);

    const box = DF.el('div', 'panel');
    c.appendChild(box);
    DF.go('s-step');

    let i = 0, score = 0, max = 0;
    (function next() {
      DF.$$('i', bar).forEach(function (x, k) { x.classList.toggle('on', k < i); });
      if (i >= items.length) { finish(); return; }
      const it = items[i++];
      DF.MECH.render(it, box, function (res) {
        const q = (res && res.q) || 0;
        score += q; max += 5;
        if (it.srsId && DF.SRS) {
          DF.SRS.tick();
          DF.SRS.record(it.srsId, it.cat, q, it.sp || null);
        }
        DF.save();
        next();
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })();

    function finish() {
      DF.SP.stop();
      const pct = max ? Math.round(100 * score / max) : 0;
      box.innerHTML = '';
      box.appendChild(DF.el('h3', '', pct >= 60 ? '✅ Passo concluído' : '⚠️ Quase lá'));
      box.appendChild(DF.el('p', 'muted',
        'Aproveitamento: <b>' + pct + '%</b>' +
        (pct >= 60 ? '' : ' — refaça para fixar (mínimo 60%).')));
      if (pct >= 60) WK.markStep(u, w.n, s.id);

      const again = DF.el('button', 'btn ghost wide', '🔁 Refazer');
      again.onclick = function () { WK.runStep(u, w, s); };
      box.appendChild(again);
      const go = DF.el('button', 'btn primary wide', 'Voltar ao painel ▸');
      go.onclick = function () { DF.go('s-dash'); WK.dash(u); };
      box.appendChild(go);
      if (DF.AU) DF.AU.sfx(pct >= 60 ? 'great' : 'bad');
    }
  };

  // ══════════════════════════════════════════════════════════
  // PRATICAR MAIS — mesmo tópico, mais difícil
  // ══════════════════════════════════════════════════════════
  WK.more = function (u, w) {
    const c = DF.$('#s-step .content');
    c.innerHTML = '';
    const back = DF.el('button', 'btn ghost small', '◂ Voltar');
    back.onclick = function () { DF.go('s-dash'); WK.dash(u); };
    const hd = DF.el('div', 'screen-head');
    hd.appendChild(back);
    hd.appendChild(DF.el('h2', '', 'Praticar mais'));
    c.appendChild(hd);
    c.appendChild(DF.el('p', 'muted',
      'Mesmo tópico da semana, um degrau acima. Não conta pro progresso — é treino livre.'));

    (w.more || []).forEach(function (s) {
      const card = DF.el('div', 'tp' + (s.soon ? ' soon' : ' open'));
      const head = DF.el('div', 'tp-head');
      head.appendChild(DF.el('span', 'tp-ic', s.icon));
      head.appendChild(DF.el('div', 'tp-name', DF.esc(s.name)));
      head.appendChild(DF.el('span', 'st-tag' + (s.tag === 'difícil' ? ' sp' : ''), DF.esc(s.tag || '')));
      card.appendChild(head);
      if (!s.soon) card.onclick = function () { WK.runStep(u, w, s); };
      else card.appendChild(DF.el('div', 'tp-goal', 'Vídeo-aulas chegam em breve.'));
      c.appendChild(card);
    });

    c.appendChild(doubtBtn(w.title));
    DF.go('s-step');
  };

  // ══════════════════════════════════════════════════════════
  // MAPA MENTAL — o material de estudo visual da unidade
  // ══════════════════════════════════════════════════════════
  WK.mindmap = function (u, w) {
    const p = plan(u);
    const mm = p && p.mindmap;
    const c = DF.$('#s-step .content');
    c.innerHTML = '';
    const back = DF.el('button', 'btn ghost small', '◂ Voltar');
    back.onclick = function () { DF.SP.stop(); DF.go('s-dash'); WK.dash(u); };
    const hd = DF.el('div', 'screen-head');
    hd.appendChild(back);
    hd.appendChild(DF.el('h2', '', 'Mapa mental'));
    c.appendChild(hd);

    if (!mm) { c.appendChild(DF.el('p', 'muted', 'Mapa em preparação.')); DF.go('s-step'); return; }

    const center = DF.el('div', 'mm-center');
    center.appendChild(DF.el('div', 'mm-t', DF.esc(mm.center)));
    if (mm.sub) center.appendChild(DF.el('div', 'mm-s', DF.esc(mm.sub)));
    c.appendChild(center);
    c.appendChild(DF.el('div', 'mm-spine'));

    (mm.branches || []).forEach(function (br) {
      const b = DF.el('div', 'mm-br');
      const h = DF.el('button', 'mm-br-h');
      h.type = 'button';
      h.appendChild(DF.el('span', 'tp-ic', br.icon));
      h.appendChild(DF.el('span', 'mm-n', DF.esc(br.name)));
      h.appendChild(DF.el('span', 'mm-c', (br.leaves || []).length + ' ▾'));
      h.onclick = function () { b.classList.toggle('on'); };
      b.appendChild(h);

      const body = DF.el('div', 'mm-br-b');
      (br.leaves || []).forEach(function (lf) {
        const r = DF.el('div', 'mm-leaf');
        r.appendChild(DF.el('span', 'l-en', DF.esc(lf.en)));
        r.appendChild(DF.el('span', 'l-pt', DF.esc(lf.pt)));
        if (DF.SP.ttsAvailable()) {
          const sp = DF.el('button', 'l-sp', '🔊');
          sp.onclick = function (e) { e.stopPropagation(); DF.SP.speak(lf.en, { rate: 0.85 }); };
          r.appendChild(sp);
        }
        body.appendChild(r);
      });
      if (br.note) body.appendChild(DF.el('div', 'mm-note', br.note));
      b.appendChild(body);
      c.appendChild(b);
    });

    const ok = DF.el('button', 'btn primary wide', '✔ Estudei o mapa');
    ok.onclick = function () {
      DF.SP.stop();
      WK.markStep(u, w.n, 'mindmap');
      DF.toast('Mapa estudado. 🗺️');
      DF.go('s-dash'); WK.dash(u);
    };
    c.appendChild(ok);
    c.appendChild(DF.el('p', 'muted center small',
      'Em breve este mapa também vira imagem para salvar no celular.'));
    DF.go('s-step');
  };

  // ══════════════════════════════════════════════════════════
  // BOOT
  // ══════════════════════════════════════════════════════════
  DF.go = function (id) {
    DF.$$('.screen').forEach(function (s) { s.classList.toggle('active', s.id === id); });
    document.body.dataset.screen = id;
    window.scrollTo(0, 0);
  };

  WK.boot = function () {
    DF.load();
    loadOpen();

    // a marca do app é ENGLISH FLOW; a trilha é só o que o aluno vê dentro dele
    DF.WA.header = function (secName, unit) {
      const p = plan(unit);
      return '🎧 ENGLISH FLOW · ' + (TRAIL_NAME[DF.state.trail] || '') +
        '\n' + secName + ' · Unit ' + unit + (p ? ' — ' + p.title : '');
    };

    // o link do aluno traz nome e trilha: ?a=Nome&t=starter
    const q = new URLSearchParams(location.search);
    const a = q.get('a'), t = q.get('t');
    if (a) DF.state.name = a;
    if (t && TRAIL_NAME[t]) DF.state.trail = t;
    if (!DF.state.trail) DF.state.trail = 'starter';
    DF._applyTrailAlias();
    if (DF.setTrail) { try { DF.setTrail(DF.state.trail); } catch (e) { /* opcional */ } }
    DF.save();

    // Link do professor: ?unlock=4.2&k=xxxxxx — "o aluno está AQUI".
    // Cumulativo: abre esta semana e TUDO que vem antes (nesta unidade e nas
    // anteriores). O professor não precisa mandar um link por semana.
    const un = q.get('unlock');
    if (un && /^\d+\.\d+$/.test(un)) {
      const parts = un.split('.');
      const u = +parts[0], n = +parts[1];
      if (q.get('k') === WK.weekKey(DF.state.name, DF.state.trail, u, n)) {
        const novo = !WK.isOpen(u, n);
        WK.openUpTo(u, n);
        if (novo) setTimeout(function () { DF.toast('🔓 Semana liberada pelo professor!'); }, 700);
      } else {
        setTimeout(function () {
          DF.toast('Este link de liberação não é válido. Fale com o professor.');
        }, 700);
      }
    }

    // Link de PRÉVIA do professor: ?preview=4.2&k=xxxxxx — igual o de cima,
    // mas NUNCA chama openUpTo nem saveOpen. previewUntil vive só na memória
    // desta aba; fechar ou recarregar a página apaga. É o botão "🧪 Testar".
    const pv = q.get('preview');
    if (pv && /^\d+\.\d+$/.test(pv)) {
      const parts = pv.split('.');
      const u = +parts[0], n = +parts[1];
      if (q.get('k') === WK.weekKey(DF.state.name, DF.state.trail, u, n)) {
        previewUntil = { u: u, n: n };
        setTimeout(function () {
          DF.toast('🧪 Modo teste — isto NÃO destravou nada de verdade.');
        }, 700);
      } else {
        setTimeout(function () {
          DF.toast('Este link de teste não é válido.');
        }, 700);
      }
    }

    // ?dates=2026-08-10,2026-08-24 — as próximas aulas, mandadas junto no link semanal
    const datesParam = q.get('dates');
    if (datesParam && /^\d{4}-\d{2}-\d{2}(,\d{4}-\d{2}-\d{2})*$/.test(datesParam)) {
      WK.setClassDates(datesParam);
    }

    DF.$('#doubt-btn').onclick = function () {
      const u = WK.currentUnit();
      const p = plan(u);
      window.open(DF.WA.link('Olá! Tenho uma dúvida em ENGLISH FLOW.\n' +
        'Aluno: ' + (DF.state.name || '—') + '\n' +
        'Tópico: Unit ' + u + (p ? ' — ' + p.title : '') + '\n' +
        'Minha dúvida: '), '_blank');
    };
    DF.$('#home-btn').onclick = function () { DF.SP.stop(); DF.go('s-dash'); WK.dash(); };

    // faixa fixa avisando "isto é só teste" — some sozinha se recarregar
    // sem o ?preview= (fechar a aba já resolve, mas o aviso reforça
    // enquanto ela estiver aberta, pra nunca parecer destrava de verdade).
    if (WK.isPreviewing()) {
      const banner = DF.el('div', '', '🧪 MODO TESTE — nada foi destravado pra valer. ' +
        'Feche esta aba quando terminar de conferir.');
      banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;' +
        'background:#f59e0b;color:#1a1a1a;font-weight:700;font-size:.85rem;' +
        'text-align:center;padding:.5rem 1rem;';
      document.body.appendChild(banner);
      document.body.style.paddingTop = '2.4rem';
    }

    DF.go('s-dash');
    WK.dash();
  };
})(typeof window !== 'undefined' ? window : globalThis);
