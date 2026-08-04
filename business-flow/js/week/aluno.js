/* ENGLISH FLOW — week/aluno.js
   PAINEL PRIVADO DO ALUNO (uso do professor durante/entre aulas).

   Uma tela por aluno: evolução (o que já está destravado), notas de pontos
   fortes/fracos, calendário do mês com as aulas marcadas, e os controles de
   destrava + os links pra mandar no WhatsApp.

   ⚠️ Sem servidor: "onde o aluno está" é o que ESTE painel controla (você
   destrava, então é preciso). Notas e calendário são só o que VOCÊ anota
   aqui — não vêm do celular do aluno, que o app não sincroniza com nada. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const A = DF.ALUNOP = {};

  // og1/wc1 são só opções por enquanto — sem plano ainda (ver painel.js e app.js,
  // mesma lista nos três arquivos).
  const TRAILS = {
    starter: 'Business Starter', elementary: 'Business Elementary',
    og1: 'Oil and Gas One', wc1: 'World Class One'
  };
  const NKEY = 'englishflow_aluno_notas_v1';

  let aluno = null;   // { nome, trilha }
  let notas = {};      // todo o storage: { "Nome|trilha": { texto, aulas: ['2026-08-05', ...] } }

  function chave(a) { return a.nome + '|' + a.trilha; }
  function loadNotas() {
    try { notas = JSON.parse(localStorage.getItem(NKEY)) || {}; } catch (e) { notas = {}; }
  }
  function saveNotas() {
    try { localStorage.setItem(NKEY, JSON.stringify(notas)); } catch (e) { /* cheio */ }
  }
  // rec.ate = {u,n} — o ponto até onde ESTE aluno foi destravado. Fica aqui,
  // escopado por aluno, e não em DF.WK (que é estado global do navegador —
  // no aparelho do professor, dois alunos da mesma trilha se sobrescreveriam
  // se usássemos DF.WK.isOpen direto).
  function registro(a) {
    const k = chave(a);
    notas[k] = notas[k] || { texto: '', aulas: [], ate: null };
    return notas[k];
  }
  // uma semana está "aberta" se vem antes (ou é) o ponto salvo pra este aluno
  function estaAberta(rec, u, n) {
    if (!rec.ate) return false;
    return u < rec.ate.u || (u === rec.ate.u && n <= rec.ate.n);
  }

  // Garante que este aluno existe na lista do hub (englishflow_alunos_v1).
  // Sem isso, abrir aluno.html direto por um link salvo (sem passar pelo
  // painel) criaria um registro "fantasma": as notas/calendário existem,
  // mas o aluno não aparece na lista nem no calendário-mestre do professor.
  const AKEY = 'englishflow_alunos_v1';
  function garantirNoHub(a) {
    let lista;
    try { lista = JSON.parse(localStorage.getItem(AKEY)) || []; } catch (e) { lista = []; }
    const existe = lista.some(function (x) { return x.nome === a.nome && x.trilha === a.trilha; });
    if (!existe) {
      lista.push({ nome: a.nome, trilha: a.trilha });
      try { localStorage.setItem(AKEY, JSON.stringify(lista)); } catch (e) { /* cheio */ }
    }
  }

  function base() { return location.href.replace(/[^/]*$/, '') + 'semana.html'; }
  function linkFixo(a) { return base() + '?a=' + encodeURIComponent(a.nome) + '&t=' + a.trilha; }

  // todas as datas futuras marcadas (a próxima é a [0])
  function datasFuturas(a) {
    const rec = registro(a);
    const hoje = DF.todayKey();
    return (rec.aulas || []).filter(function (d) { return d >= hoje; }).sort();
  }
  function proximaAula(a) { return datasFuturas(a)[0] || null; }
  // ISO (YYYY-MM-DD) → DD/MM/AAAA sem passar pelo UTC — "2026-08-10" sem hora
  // vira meia-noite UTC, que em fuso negativo (Brasil) volta pro dia anterior.
  function fmtISO(iso) { return DF.fmtDate(iso + 'T00:00:00'); }

  // o link muda toda semana mesmo — por isso pode carregar as próximas datas
  // marcadas junto (o link fixo do grupo, esse sim, nunca leva isso)
  function linkLiberacao(a, u, n, datas) {
    let url = linkFixo(a) + '&unlock=' + u + '.' + n + '&k=' + DF.WK.weekKey(a.nome, a.trilha, u, n);
    if (datas && datas.length) url += '&dates=' + datas.slice(0, 6).join(',');
    return url;
  }
  function copiar(txt, btn, okLabel) {
    DF.copyText(txt).then(function (ok) {
      const antes = btn.textContent;
      btn.textContent = ok ? (okLabel || '✅ Copiado!') : '⚠️ Copie manualmente';
      setTimeout(function () { btn.textContent = antes; }, 1800);
    });
  }

  function brand() {
    const b = DF.el('div', 'ef-brand');
    b.innerHTML =
      '<svg class="ef-wave" viewBox="0 0 40 40" aria-hidden="true">' +
      '<path d="M2 15c6-6 12-6 18 0s12 6 18 0" fill="none" stroke="#2898d0" stroke-width="4.5" stroke-linecap="round"/>' +
      '<path d="M2 25c6-6 12-6 18 0s12 6 18 0" fill="none" stroke="#30a8e0" stroke-width="4.5" stroke-linecap="round" opacity=".55"/>' +
      '</svg><div class="ef-name">English<em>Flow</em></div>';
    return b;
  }

  // ══════════════════════════════════════════════════════════
  // EVOLUÇÃO — grade de unidades/semanas com o que está aberto/concluído
  // ══════════════════════════════════════════════════════════
  function paintEvolucao(c, a) {
    const plano = DF.PLAN[a.trilha] || {};
    const units = Object.keys(plano).map(Number).sort(function (x, y) { return x - y; });
    if (!units.length) {
      c.appendChild(DF.el('p', 'muted', 'Esta trilha ainda não tem unidades escritas no app.'));
      return;
    }
    const rec = registro(a);

    let abertas = 0, totalSemanas = 0;
    units.forEach(function (u) {
      (plano[u].weeks || []).forEach(function (w) {
        totalSemanas++;
        if (estaAberta(rec, u, w.n)) abertas++;
      });
    });

    const stats = DF.el('div', 'row gap');
    stats.appendChild(statTile('🔓', abertas, 'semanas abertas'));
    stats.appendChild(statTile('📚', totalSemanas, 'no total'));
    c.appendChild(stats);
    c.appendChild(DF.el('p', 'muted small',
      'Isto mostra até onde <b>você destravou</b> pra ' + DF.esc(a.nome) + ' — o app não ' +
      'sabe se o aluno já terminou o que foi liberado (o progresso fica só no celular dele).'));

    units.forEach(function (u) {
      const p = plano[u];
      const row = DF.el('div', 'evo-unit');
      row.appendChild(DF.el('div', 'evo-unit-h',
        p.icon + ' Unit ' + u + ' — ' + DF.esc(p.title)));
      const dots = DF.el('div', 'evo-dots');
      (p.weeks || []).forEach(function (w) {
        const open = estaAberta(rec, u, w.n);
        const d = DF.el('span', 'evo-dot' + (open ? ' open' : ''), String(w.n));
        d.title = w.title + (open ? ' · destravada' : ' · travada');
        dots.appendChild(d);
      });
      row.appendChild(dots);
      c.appendChild(row);
    });
  }
  function statTile(ic, n, label) {
    const t = DF.el('div', 'evo-stat');
    t.innerHTML = '<div class="evo-stat-n">' + ic + ' ' + n + '</div><div class="evo-stat-l">' + label + '</div>';
    return t;
  }

  // ══════════════════════════════════════════════════════════
  // DESTRAVA — onde o aluno está agora + os links
  // ══════════════════════════════════════════════════════════
  // lembra a última unidade/semana escolhida no seletor, pra não resetar
  // toda vez que a página re-renderiza (ex.: depois de "marcar destravado")
  let selecaoLembrada = null;

  function paintDestrava(c, a) {
    const plano = DF.PLAN[a.trilha] || {};
    const units = Object.keys(plano).map(Number).sort(function (x, y) { return x - y; });

    c.appendChild(DF.el('div', 'pnl-lbl', 'Link fixo — descrição do grupo (nunca muda)'));
    const url = linkFixo(a);
    c.appendChild(DF.el('div', 'pnl-url', DF.esc(url)));
    const row0 = DF.el('div', 'row gap');
    const cp0 = DF.el('button', 'btn small', '📋 Copiar');
    cp0.onclick = function () { copiar(url, cp0); };
    row0.appendChild(cp0);
    const ab0 = DF.el('a', 'btn small ghost', '↗ Abrir');
    ab0.href = url; ab0.target = '_blank';
    row0.appendChild(ab0);
    c.appendChild(row0);

    if (!units.length) {
      c.appendChild(DF.el('p', 'muted', '⚠️ Sem unidades escritas nesta trilha ainda.'));
      return;
    }

    c.appendChild(DF.el('div', 'pnl-lbl', 'Destravar até aqui (na aula)'));
    const selU = DF.el('select', 'inp');
    units.forEach(function (u) {
      const o = DF.el('option', '', 'Unit ' + u + ' — ' + plano[u].title);
      o.value = u; selU.appendChild(o);
    });
    if (selecaoLembrada && plano[selecaoLembrada.u]) selU.value = selecaoLembrada.u;
    const selW = DF.el('select', 'inp');
    function fillW() {
      selW.innerHTML = '';
      const p = plano[selU.value];
      (p ? p.weeks : []).forEach(function (w) {
        const pronta = (w.steps || []).length;
        const o = DF.el('option', '', w.title + (pronta ? '' : ' (sem conteúdo ainda)'));
        o.value = w.n; selW.appendChild(o);
      });
      if (selecaoLembrada && +selU.value === selecaoLembrada.u) selW.value = selecaoLembrada.n;
    }
    function lembrar() { selecaoLembrada = { u: +selU.value, n: +selW.value }; }
    selU.onchange = function () { fillW(); lembrar(); };
    selW.onchange = lembrar;
    fillW(); lembrar();
    const grid = DF.el('div', 'pnl-sel');
    grid.appendChild(selU); grid.appendChild(selW);
    c.appendChild(grid);
    c.appendChild(DF.el('p', 'muted small',
      '↳ Libera este tópico e tudo que vem antes — um link só.'));

    // a data que vai junto no link (a próxima marcada no calendário abaixo,
    // ou nenhuma se não houver nada marcado ainda)
    const prox = proximaAula(a);
    if (prox) {
      c.appendChild(DF.el('p', 'muted small',
        '📅 Este link também vai avisar a próxima aula pro aluno: <b>' +
        fmtISO(prox) + '</b> (a marcada no calendário abaixo).'));
    } else {
      c.appendChild(DF.el('p', 'muted small',
        '⚠️ Nenhuma aula marcada no calendário — o link não vai levar data. Marque abaixo primeiro.'));
    }

    const row = DF.el('div', 'row gap');
    const cpL = DF.el('button', 'btn small primary', '📋 Copiar link');
    cpL.onclick = function () { copiar(linkLiberacao(a, +selU.value, +selW.value, datasFuturas(a)), cpL); };
    row.appendChild(cpL);
    // compartilhar (não wa.me fixo): você escolhe o app e o grupo/contato
    // na hora — o número de destino não é decidido pelo código
    const wa = DF.el('button', 'btn small wa', '📤 Compartilhar');
    wa.type = 'button';
    wa.onclick = function () {
      const p = plano[selU.value];
      const w = p && p.weeks.find(function (x) { return x.n === +selW.value; });
      const link = linkLiberacao(a, +selU.value, +selW.value, datasFuturas(a));
      const texto = '🔓 ' + a.nome + ', seu app está liberado até aqui!\n' +
        (w ? w.title + '\n' : '') +
        (prox ? '📅 Próxima aula: ' + fmtISO(prox) + '\n' : '') + link;
      if (navigator.share) {
        navigator.share({ text: texto, title: 'ENGLISH FLOW · ' + a.nome }).catch(function () { /* cancelou */ });
      } else {
        window.open('https://wa.me/?text=' + encodeURIComponent(texto), '_blank');
      }
    };
    row.appendChild(wa);
    const test = DF.el('a', 'btn small ghost', '🧪 Testar');
    test.target = '_blank';
    test.onclick = function () { test.href = linkLiberacao(a, +selU.value, +selW.value, datasFuturas(a)); };
    row.appendChild(test);
    c.appendChild(row);

    const doApply = DF.el('button', 'btn ghost wide', '✔ Marcar como destravado (atualiza a evolução acima)');
    doApply.title = 'Só atualiza o registro deste aluno aqui no seu painel — não abre nada no celular dele';
    doApply.onclick = function () {
      const rec = registro(a);
      rec.ate = { u: +selU.value, n: +selW.value };
      saveNotas();
      DF.toast('Evolução atualizada. ✅');
      A.render(a);
    };
    c.appendChild(doApply);
  }

  // ══════════════════════════════════════════════════════════
  // RECADO RÁPIDO — escreve, aperta, escolhe o grupo no compartilhar.
  // Não fica salvo em nenhum lugar — é só um atalho pra escrever e mandar.
  // ══════════════════════════════════════════════════════════
  function paintRecado(c, a) {
    c.appendChild(DF.el('p', 'muted small',
      'Escreva o recado, aperte enviar e escolha o grupo do WhatsApp na hora.'));
    const ta = DF.el('textarea', 'inp');
    ta.rows = 3;
    ta.placeholder = 'ex.: Oi ' + a.nome.split(' ')[0] + ', hoje a aula vai começar 10 min mais tarde.';
    c.appendChild(ta);

    const send = DF.WA.shareBtn('📤 Enviar recado', '', { cls: 'wide' });
    send.disabled = false;
    send.onclick = function () {
      const texto = ta.value.trim();
      if (!texto) { DF.toast('Escreva o recado antes de enviar. ✍️'); return; }
      const msg = texto; // sem cabeçalho fixo — é uma mensagem livre, não um relatório
      if (navigator.share) {
        navigator.share({ text: msg, title: 'ENGLISH FLOW · ' + a.nome }).then(function () {
          ta.value = '';
        }).catch(function () { /* cancelou */ });
      } else {
        window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
      }
    };
    c.appendChild(send);
  }

  // ══════════════════════════════════════════════════════════
  // NOTAS — pontos fortes/fracos, escritos por você
  // ══════════════════════════════════════════════════════════
  function paintNotas(c, a) {
    const rec = registro(a);
    c.appendChild(DF.el('p', 'muted small',
      'Suas observações — não vêm do celular do aluno, o app não sincroniza nada. ' +
      'Escreva aqui o que reparar na aula.'));
    const ta = DF.el('textarea', 'inp');
    ta.rows = 5;
    ta.placeholder = 'ex.: Speaking trava em perguntas com "Wh-". Pronúncia de "th" melhorando. ' +
      'Pede pra repetir os drills de número.';
    ta.value = rec.texto || '';
    c.appendChild(ta);
    const save = DF.el('button', 'btn primary wide', '💾 Salvar notas');
    save.onclick = function () {
      rec.texto = ta.value;
      saveNotas();
      DF.toast('Notas salvas. ✅');
    };
    c.appendChild(save);
  }

  // ══════════════════════════════════════════════════════════
  // CALENDÁRIO — mês, clique no dia marca/desmarca aula ao vivo
  // ══════════════════════════════════════════════════════════
  let calMonth = new Date().getMonth(), calYear = new Date().getFullYear();

  function paintCalendario(c, a) {
    const rec = registro(a);
    const nav = DF.el('div', 'cal-nav');
    const prev = DF.el('button', 'btn ghost small', '◂');
    const label = DF.el('div', 'cal-label');
    const next = DF.el('button', 'btn ghost small', '▸');
    prev.onclick = function () { calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } A.render(a); };
    next.onclick = function () { calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } A.render(a); };
    nav.appendChild(prev); nav.appendChild(label); nav.appendChild(next);
    c.appendChild(nav);

    const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    label.textContent = MESES[calMonth] + ' ' + calYear;

    const grid = DF.el('div', 'cal-grid');
    ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].forEach(function (d) {
      grid.appendChild(DF.el('div', 'cal-dow', d));
    });
    const first = new Date(calYear, calMonth, 1);
    const startPad = first.getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const todayKey = DF.todayKey();

    for (let i = 0; i < startPad; i++) grid.appendChild(DF.el('div', 'cal-day empty'));
    for (let d = 1; d <= daysInMonth; d++) {
      const key = calYear + '-' + String(calMonth + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
      const marcado = rec.aulas.indexOf(key) >= 0;
      const cell = DF.el('button', 'cal-day' + (marcado ? ' on' : '') + (key === todayKey ? ' today' : ''), String(d));
      cell.type = 'button';
      cell.onclick = function () {
        const i = rec.aulas.indexOf(key);
        if (i >= 0) rec.aulas.splice(i, 1); else rec.aulas.push(key);
        saveNotas();
        A.render(a);
      };
      grid.appendChild(cell);
    }
    c.appendChild(grid);
    c.appendChild(DF.el('p', 'muted small',
      'Clique num dia pra marcar/desmarcar aula ao vivo. ' +
      rec.aulas.length + ' aula(s) marcada(s) ao todo.'));
  }

  // ══════════════════════════════════════════════════════════
  A.render = function (a) {
    const c = DF.$('#s-aluno .content');
    c.innerHTML = '';

    const back = DF.el('a', 'btn ghost small', '◂ Todos os alunos');
    back.href = 'painel.html';
    c.appendChild(back);

    c.appendChild(brand());
    const head = DF.el('div', 'wk-top');
    head.appendChild(DF.el('span', 'wk-trail', TRAILS[a.trilha] || a.trilha));
    head.appendChild(DF.el('span', 'wk-chip', '👁️ só você vê esta tela'));
    c.appendChild(head);
    c.appendChild(DF.el('div', 'wk-unit', DF.esc(a.nome)));

    c.appendChild(DF.el('div', 'pnl-section-h', '💬 Recado rápido'));
    paintRecado(c, a);

    c.appendChild(DF.el('div', 'pnl-section-h', '📊 Evolução'));
    paintEvolucao(c, a);

    c.appendChild(DF.el('div', 'pnl-section-h', '🔓 Destravar / links'));
    paintDestrava(c, a);

    c.appendChild(DF.el('div', 'pnl-section-h', '📝 Pontos fortes e fracos'));
    paintNotas(c, a);

    c.appendChild(DF.el('div', 'pnl-section-h', '📅 Calendário de aulas'));
    paintCalendario(c, a);
  };

  A.boot = function () {
    DF.load();
    loadNotas();
    const q = new URLSearchParams(location.search);
    const nome = q.get('a'), trilha = q.get('t') || 'starter';
    if (!nome) {
      DF.$('#s-aluno .content').innerHTML =
        '<p class="muted">Nenhum aluno especificado. <a href="painel.html">Voltar ao painel</a>.</p>';
      DF.$$('.screen').forEach(function (s) { s.classList.toggle('active', s.id === 's-aluno'); });
      return;
    }
    aluno = { nome: nome, trilha: trilha };
    garantirNoHub(aluno);
    DF.state.trail = trilha;
    DF._applyTrailAlias();
    DF.$$('.screen').forEach(function (s) { s.classList.toggle('active', s.id === 's-aluno'); });
    A.render(aluno);
  };
})(typeof window !== 'undefined' ? window : globalThis);
