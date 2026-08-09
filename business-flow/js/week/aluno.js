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
  // link de PRÉVIA — mesma assinatura, mas abre com "?preview=" em vez de
  // "?unlock=". O app (ver app.js) sabe a diferença: preview mostra o
  // tópico sem gravar nada no aparelho, então testar não destrava de
  // verdade. Nunca leva ?dates= — é só uma conferência, não o aviso real.
  function linkPreview(a, u, n) {
    return linkFixo(a) + '&preview=' + u + '.' + n + '&k=' + DF.WK.weekKey(a.nome, a.trilha, u, n);
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
  // A ARMADILHA QUE ISSO EVITA (achado 10/08/2026, relatado pelo Felipe):
  // a versão anterior "lembrava" a última unidade/semana escolhida no
  // seletor, pra sobreviver ao re-render automático depois de copiar um
  // link. Só que essa memória era uma variável só pro painel inteiro, sem
  // dono — navegar pra uma unidade avançada só pra CONFERIR o conteúdo
  // (ou reabrir a mesma unidade depois de já ter passado por uma semana
  // adiantada) deixava o dropdown de semana silenciosamente preso naquele
  // valor. Quem olhasse só o seletor de Unit — sem reparar que o de Semana
  // não tinha voltado pra 1 — destravava e mandava uma semana bem mais
  // adiantada do que pretendia. ("Pedi a semana 5, cliquei e fui pra 8.")
  //
  // A correção: NENHUMA memória entre interações. Cada vez que o painel
  // pinta, e cada vez que a unidade muda no seletor, a semana sugerida é
  // sempre recalculada — a primeira ainda travada NAQUELA unidade (ou a
  // primeira de todas, se a unidade inteira já foi destravada). Nunca herda
  // valor de uma escolha anterior, seja de teste, seja de outro aluno.
  function primeiraTravadaNaUnidade(plano, u, rec) {
    const semanas = (plano[u] || {}).weeks || [];
    for (let j = 0; j < semanas.length; j++) {
      if (!estaAberta(rec, u, semanas[j].n)) return semanas[j].n;
    }
    return semanas.length ? semanas[0].n : 1;
  }
  function proximaSemanaSugerida(plano, units, rec) {
    for (let i = 0; i < units.length; i++) {
      const u = units[i];
      const semanas = plano[u].weeks || [];
      for (let j = 0; j < semanas.length; j++) {
        if (!estaAberta(rec, u, semanas[j].n)) return { u: u, n: semanas[j].n };
      }
    }
    // tudo já destravado — sugere a última semana da última unidade
    const ultU = units[units.length - 1];
    const semanasUlt = (plano[ultU] || {}).weeks || [];
    return { u: ultU, n: semanasUlt.length ? semanasUlt[semanasUlt.length - 1].n : 1 };
  }

  function paintDestrava(c, a) {
    const plano = DF.PLAN[a.trilha] || {};
    const units = Object.keys(plano).map(Number).sort(function (x, y) { return x - y; });
    const sugestao = units.length ? proximaSemanaSugerida(plano, units, registro(a)) : null;

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
    if (sugestao) selU.value = sugestao.u;
    const selW = DF.el('select', 'inp');
    // toda vez que a unidade muda — inclusive ao pintar o painel pela
    // primeira vez — a semana recalcula do zero: a primeira ainda travada
    // NESSA unidade. Nunca herda o que estava selecionado antes.
    function fillW() {
      selW.innerHTML = '';
      const p = plano[selU.value];
      (p ? p.weeks : []).forEach(function (w) {
        const pronta = (w.steps || []).length;
        const o = DF.el('option', '', w.title + (pronta ? '' : ' (sem conteúdo ainda)'));
        o.value = w.n; selW.appendChild(o);
      });
      selW.value = primeiraTravadaNaUnidade(plano, +selU.value, registro(a));
    }
    selU.onchange = fillW;
    fillW();
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

    // gerar o link É o ato de destravar — copiar ou compartilhar já atualiza
    // a evolução sozinho, sem precisar de um segundo clique separado
    // (achado 04/08/2026: os dois botões desencontrados confundiram o Felipe
    // testando o Gleydson — "Testar" mostrava uma unidade, "Evolução" outra).
    function marcarDestravado(u, n) {
      const rec = registro(a);
      rec.ate = { u: u, n: n };
      saveNotas();
    }

    const row = DF.el('div', 'row gap');
    const cpL = DF.el('button', 'btn small primary', '📋 Copiar link');
    cpL.onclick = function () {
      const u = +selU.value, n = +selW.value;
      marcarDestravado(u, n);
      copiar(linkLiberacao(a, u, n, datasFuturas(a)), cpL, '✅ Copiado e evolução atualizada!');
      setTimeout(function () { A.render(a); }, 1700);
    };
    row.appendChild(cpL);
    // compartilhar (não wa.me fixo): você escolhe o app e o grupo/contato
    // na hora — o número de destino não é decidido pelo código
    const wa = DF.el('button', 'btn small wa', '📤 Compartilhar');
    wa.type = 'button';
    wa.onclick = function () {
      const u = +selU.value, n = +selW.value;
      marcarDestravado(u, n);
      const p = plano[selU.value];
      const w = p && p.weeks.find(function (x) { return x.n === n; });
      const link = linkLiberacao(a, u, n, datasFuturas(a));
      const texto = '🔓 ' + a.nome + ', seu app está liberado até aqui!\n' +
        (w ? w.title + '\n' : '') +
        (prox ? '📅 Próxima aula: ' + fmtISO(prox) + '\n' : '') + link;
      const depoisDeCompartilhar = function () { A.render(a); };
      if (navigator.share) {
        navigator.share({ text: texto, title: 'ENGLISH FLOW · ' + a.nome })
          .catch(function () { /* cancelou */ }).then(depoisDeCompartilhar);
      } else {
        window.open('https://wa.me/?text=' + encodeURIComponent(texto), '_blank');
        depoisDeCompartilhar();
      }
    };
    row.appendChild(wa);
    const test = DF.el('a', 'btn small ghost', '🧪 Testar');
    test.target = '_blank';
    // achado 10/08/2026: até aqui "Testar" abria o MESMO link real
    // (?unlock=), então conferir uma semana avançada destravava ela de
    // verdade — o texto "não muda nada" mentia. Agora usa ?preview=, que o
    // app mostra sem gravar (ver a checagem de "pv" em app.js WK.boot).
    test.onclick = function () { test.href = linkPreview(a, +selU.value, +selW.value); };
    row.appendChild(test);
    c.appendChild(row);
    c.appendChild(DF.el('p', 'muted small',
      '📋 e 📤 destravam de verdade e já atualizam a evolução. 🧪 só mostra a semana pra você ' +
      'conferir — não grava nada no aparelho, nem pra este aluno nem pra nenhum outro.'));
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
