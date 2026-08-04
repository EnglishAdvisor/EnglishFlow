/* ENGLISH FLOW — week/painel.js
   HUB DO PROFESSOR (uso interno do Felipe — não é tela de aluno).

   Uma página só: a lista de alunos (clique → aluno.html, tela privada de
   evolução/calendário/destrava) + os jogos e projetos que já funcionam hoje.

   ⚠️ PRIVACIDADE: os nomes dos alunos ficam SÓ no localStorage desta máquina.
   Nada de nome de aluno neste arquivo — ele vai pro Git e é publicado no
   GitHub Pages. A lista de alunos é confidencial (EMPRESA/ALUNOS/ é privado). */
(function (root) {
  const DF = root.DF = root.DF || {};
  const P = DF.PAINEL = {};

  const KEY = 'englishflow_alunos_v1';
  const NKEY = 'englishflow_aluno_notas_v1'; // mesma chave que aluno.js usa pro calendário
  // og1/wc1 são só opções de cadastro por enquanto — sem plano ainda, então
  // o app do aluno cai na tela "em preparação". Mesmo caminho que Elementary
  // já usa hoje quando não tem conteúdo escrito.
  const TRAILS = {
    starter: 'Business Starter', elementary: 'Business Elementary',
    og1: 'Oil and Gas One', wc1: 'World Class One'
  };
  const TRAIL_ICON = { starter: '🌱', elementary: '🌿', og1: '🌊', wc1: '🏘️' };

  let alunos = [];
  function load() {
    try { alunos = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { alunos = []; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(alunos)); } catch (e) { /* cheio */ }
  }
  function loadNotas() {
    try { return JSON.parse(localStorage.getItem(NKEY)) || {}; } catch (e) { return {}; }
  }
  function saveNotasGlobal(notas) {
    try { localStorage.setItem(NKEY, JSON.stringify(notas)); } catch (e) { /* cheio */ }
  }
  // mesmo storage que aluno.js usa — editar aqui reflete lá, e vice-versa,
  // porque é o mesmo local, não uma cópia
  function registroDe(notas, a) {
    const k = a.nome + '|' + a.trilha;
    notas[k] = notas[k] || { texto: '', aulas: [], ate: null };
    return notas[k];
  }

  function base() {
    return location.href.replace(/[^/]*$/, '') + 'semana.html';
  }
  P.linkFixo = function (a) {
    return base() + '?a=' + encodeURIComponent(a.nome) + '&t=' + a.trilha;
  };
  P.linkLiberacao = function (a, u, n) {
    return P.linkFixo(a) + '&unlock=' + u + '.' + n +
      '&k=' + DF.WK.weekKey(a.trilha, u, n);
  };
  P.linkAluno = function (a) {
    return location.href.replace(/[^/]*$/, '') + 'aluno.html?a=' +
      encodeURIComponent(a.nome) + '&t=' + a.trilha;
  };
  // link pro aluno offshore avisar embarque/desembarque (manda WhatsApp pro
  // professor — não sincroniza sozinho, ver offshore.html)
  P.linkOffshore = function (a) {
    return location.href.replace(/[^/]*$/, '') + 'offshore.html?a=' + encodeURIComponent(a.nome);
  };

  // jogos e projetos que já funcionam hoje (edite aqui quando publicar algo novo)
  // Só UM produto fica ativo pra valer: o painel semanal (link do grupo de
  // inscrição é o linkFixo do semana.html). Os outros são protótipos —
  // ficam listados, mas marcados inativos, pra retomar no futuro.
  const PROJETOS = [
    { icon: '🎧', nome: 'ENGLISH FLOW — painel semanal (Business)',
      desc: 'O produto ativo — é este link que vai no grupo de inscrição do aluno',
      href: 'semana.html?a=Demo&t=starter', tag: 'ativo' },
    { icon: '🌊', nome: 'Deep Flow — Oil & Gas', desc: 'Protótipo — jogo da torre, trilha O&G',
      href: '../../1 - OIL & GAS/og-1/deep-flow/index.html', tag: 'inativo' },
    { icon: '🏘️', nome: 'Life Flow — For Life', desc: 'Protótipo — jogo da torre, trilha For Life',
      href: '../../3 - FOR LIFE/wc-1/life-flow/index.html', tag: 'inativo' },
    { icon: '🌳', nome: 'Árvore de cápsulas — OG1', desc: 'Protótipo — navegação das cápsulas por unidade',
      href: '../../1 - OIL & GAS/og-1/capsules/arvore-de-capsulas.html', tag: 'inativo' },
    { icon: '🏢', nome: 'Business Flow (antigo)', desc: 'Protótipo — torre Business, substituída pelo painel semanal',
      href: 'index.html', tag: 'inativo' }
  ];

  function copiar(txt, btn, okLabel) {
    DF.copyText(txt).then(function (ok) {
      const antes = btn.textContent;
      btn.textContent = ok ? (okLabel || '✅ Copiado!') : '⚠️ Copie manualmente';
      setTimeout(function () { btn.textContent = antes; }, 1800);
    });
  }

  P.render = function (filtro) {
    const c = DF.$('#s-painel .content');
    c.innerHTML = '';

    c.appendChild(brand());
    c.appendChild(DF.el('div', 'wk-unit', 'Painel do professor'));
    c.appendChild(DF.el('div', 'wk-hello', 'Uso interno · nada aqui é publicado'));

    // ── calendário-mestre: o mês inteiro, todos os alunos ──
    c.appendChild(DF.el('div', 'pnl-section-h', '📅 Este mês — todos os alunos'));
    paintCalMestre(c);

    // ── alunos ──
    c.appendChild(DF.el('div', 'pnl-section-h', '👥 Alunos'));

    const busca = DF.el('input', 'inp');
    busca.placeholder = '🔎 Buscar aluno pelo nome…';
    busca.value = filtro || '';
    busca.oninput = function () { P.render(busca.value); };
    c.appendChild(busca);

    const q = DF.norm(filtro || '');
    const lista = alunos.filter(function (a) { return !q || DF.norm(a.nome).indexOf(q) >= 0; });

    if (!alunos.length) {
      c.appendChild(DF.el('div', 'panel',
        '<h3>Nenhum aluno ainda</h3>' +
        '<p class="muted">Os nomes ficam guardados <b>só neste aparelho</b>. ' +
        'Adicione o primeiro abaixo.</p>'));
    } else if (!lista.length) {
      c.appendChild(DF.el('p', 'muted', 'Nenhum aluno com esse nome.'));
    }

    lista.forEach(function (a) {
      const isOG = a.trilha === 'og1';
      // div, não button — evita botão dentro de botão (o toggle offshore é um botão interno)
      const card = DF.el('div', 'tp open aluno-card' + (isOG && a.offshore ? ' offshore' : ''));
      card.setAttribute('role', 'button'); card.tabIndex = 0;
      const head = DF.el('div', 'tp-head');
      head.appendChild(DF.el('span', 'tp-ic', TRAIL_ICON[a.trilha] || '📘'));
      head.appendChild(DF.el('div', 'tp-name', DF.esc(a.nome)));
      head.appendChild(DF.el('span', 'st-tag', TRAILS[a.trilha] || a.trilha));
      if (isOG) {
        const tg = DF.el('button', 'offshore-toggle' + (a.offshore ? ' on' : ''),
          a.offshore ? '⚓ offshore' : '⚓ marcar offshore');
        tg.type = 'button';
        tg.onclick = function (e) {
          e.stopPropagation();
          a.offshore = !a.offshore;
          save(); P.render(filtro);
        };
        head.appendChild(tg);
        const cp = DF.el('button', 'offshore-toggle', '📤 link');
        cp.type = 'button';
        cp.title = 'Copiar link pro aluno avisar embarque/desembarque';
        cp.onclick = function (e) { e.stopPropagation(); copiar(P.linkOffshore(a), cp, '✅ copiado'); };
        head.appendChild(cp);
      }
      const rm = DF.el('button', 'aluno-rm', '🗑️');
      rm.type = 'button';
      rm.title = 'Remover aluno';
      rm.onclick = function (e) {
        e.stopPropagation();
        if (!confirm('Remover "' + a.nome + '" da lista? Isso apaga o cadastro e as notas/' +
          'calendário dele — não dá pra desfazer.')) return;
        const i = alunos.indexOf(a);
        if (i >= 0) alunos.splice(i, 1);
        save();
        const notas = loadNotas();
        delete notas[a.nome + '|' + a.trilha];
        saveNotasGlobal(notas);
        P.render(filtro);
        DF.toast('Aluno removido.');
      };
      head.appendChild(rm);
      head.appendChild(DF.el('span', 'aluno-arrow', '›'));
      card.appendChild(head);
      // anotação rápida do que o aluno avisou (via WhatsApp, link acima) —
      // texto livre, o professor digita o que o aluno mandou, não sincroniza sozinho
      if (isOG) {
        const mov = DF.el('div', 'aluno-mov');
        mov.appendChild(DF.el('span', 'aluno-mov-ic', '📅'));
        mov.appendChild(DF.el('span', 'aluno-mov-tx', a.proxMov ? DF.esc(a.proxMov) : 'Sem próximo movimento anotado'));
        const ed = DF.el('button', 'aluno-mov-ed', '✏️');
        ed.type = 'button';
        ed.onclick = function (e) {
          e.stopPropagation();
          const novo = prompt('Próximo movimento (ex.: "Desembarca 06/08"):', a.proxMov || '');
          if (novo === null) return;
          a.proxMov = novo.trim();
          save(); P.render(filtro);
        };
        mov.appendChild(ed);
        card.appendChild(mov);
      }
      const abrir = function () { location.href = 'aluno.html?a=' +
        encodeURIComponent(a.nome) + '&t=' + a.trilha; };
      card.onclick = abrir;
      card.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); } };
      c.appendChild(card);
    });

    // ── adicionar aluno ──
    const add = DF.el('div', 'panel');
    add.appendChild(DF.el('h3', '', '➕ Adicionar aluno'));
    add.appendChild(DF.el('label', 'lbl', 'Nome (como o aluno se reconhece)'));
    const inp = DF.el('input', 'inp');
    inp.placeholder = 'ex.: Ingrid';
    add.appendChild(inp);
    add.appendChild(DF.el('label', 'lbl', 'Trilha'));
    const sel = DF.el('select', 'inp');
    Object.keys(TRAILS).forEach(function (k) {
      const o = DF.el('option', '', TRAILS[k]); o.value = k; sel.appendChild(o);
    });
    add.appendChild(sel);

    // nem todo aluno de Oil & Gas é offshore — só pergunta quando a trilha é O&G
    const offWrap = DF.el('label', 'lbl offshore-check', '');
    offWrap.style.display = 'none';
    const offChk = DF.el('input', ''); offChk.type = 'checkbox';
    offWrap.appendChild(offChk);
    offWrap.appendChild(document.createTextNode(' ⚓ Regime offshore? (não cumulativo, janela de ~2 semanas)'));
    add.appendChild(offWrap);
    sel.onchange = function () { offWrap.style.display = sel.value === 'og1' ? 'flex' : 'none'; };

    const go = DF.el('button', 'btn primary wide', 'Adicionar');
    go.onclick = function () {
      const nome = inp.value.trim();
      if (!nome) { DF.toast('Digite o nome do aluno.'); return; }
      if (alunos.some(function (x) { return DF.norm(x.nome) === DF.norm(nome); })) {
        DF.toast('Já existe um aluno com esse nome.'); return;
      }
      alunos.push({ nome: nome, trilha: sel.value, offshore: sel.value === 'og1' && offChk.checked });
      save(); P.render('');
      DF.toast('Aluno adicionado. Clique no nome pra abrir o painel dele. ✅');
    };
    add.appendChild(go);
    c.appendChild(add);

    c.appendChild(DF.el('p', 'muted small center',
      '🔒 A lista fica só neste aparelho. Clique num aluno pra ver evolução, ' +
      'calendário e gerar os links de liberação.'));

    // ── nossos jogos e projetos ──
    c.appendChild(DF.el('div', 'pnl-section-h', '🗂️ Nossos jogos e projetos'));
    c.appendChild(DF.el('p', 'muted small',
      'Só o painel semanal está ativo — os outros são protótipos, guardados pro futuro.'));
    PROJETOS.forEach(function (p) {
      const row = DF.el('a', 'proj-row' + (p.tag === 'inativo' ? ' proj-off' : ''));
      row.href = p.href; row.target = '_blank';
      row.innerHTML =
        '<span class="tp-ic">' + p.icon + '</span>' +
        '<span class="proj-info"><b>' + DF.esc(p.nome) + '</b>' +
        '<small>' + DF.esc(p.desc) + '</small></span>' +
        '<span class="st-tag' + (p.tag === 'ativo' ? ' sp' : '') + '">' + p.tag + '</span>';
      c.appendChild(row);
    });
  };

  // ── calendário-mestre: mês corrido, todos os alunos, quem tem aula quando ──
  let mesAtual = new Date().getMonth(), anoAtual = new Date().getFullYear();
  const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  function paintCalMestre(c) {
    if (!alunos.length) {
      c.appendChild(DF.el('p', 'muted small',
        'Cadastre um aluno abaixo pra ver as aulas marcadas aqui.'));
      return;
    }
    const notas = loadNotas();
    // mapa dia → [{ nome, offshore }]
    const porDia = {};
    alunos.forEach(function (a) {
      const rec = notas[a.nome + '|' + a.trilha];
      (rec && rec.aulas || []).forEach(function (d) {
        (porDia[d] = porDia[d] || []).push({
          nome: a.nome.split(' ')[0],
          offshore: a.trilha === 'og1' && !!a.offshore
        });
      });
    });

    const nav = DF.el('div', 'cal-nav');
    const prev = DF.el('button', 'btn ghost small', '◂');
    const label = DF.el('div', 'cal-label');
    const next = DF.el('button', 'btn ghost small', '▸');
    prev.onclick = function () { mesAtual--; if (mesAtual < 0) { mesAtual = 11; anoAtual--; } P.render(''); };
    next.onclick = function () { mesAtual++; if (mesAtual > 11) { mesAtual = 0; anoAtual++; } P.render(''); };
    nav.appendChild(prev); nav.appendChild(label); nav.appendChild(next);
    c.appendChild(nav);
    label.textContent = MESES[mesAtual] + ' ' + anoAtual;

    const grid = DF.el('div', 'cal-grid');
    ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].forEach(function (d) {
      grid.appendChild(DF.el('div', 'cal-dow', d));
    });
    const first = new Date(anoAtual, mesAtual, 1);
    const startPad = first.getDay();
    const daysInMonth = new Date(anoAtual, mesAtual + 1, 0).getDate();
    const todayKey = DF.todayKey();
    let totalAulas = 0;

    for (let i = 0; i < startPad; i++) grid.appendChild(DF.el('div', 'cal-day empty'));
    for (let d = 1; d <= daysInMonth; d++) {
      const key = anoAtual + '-' + String(mesAtual + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
      const nomes = porDia[key] || [];
      if (nomes.length) totalAulas++;
      const cell = DF.el('button', 'mcal-day' + (nomes.length ? ' on' : '') + (key === todayKey ? ' today' : ''));
      cell.type = 'button';
      cell.appendChild(DF.el('span', 'mcal-n', String(d)));
      if (nomes.length) {
        const names = DF.el('div', 'mcal-names');
        nomes.slice(0, 3).forEach(function (p) {
          names.appendChild(DF.el('span', 'mcal-tag' + (p.offshore ? ' offshore' : ''), p.nome));
        });
        if (nomes.length > 3) names.appendChild(DF.el('span', 'mcal-tag', '+' + (nomes.length - 3)));
        cell.appendChild(names);
      }
      cell.onclick = function () { editarDia(key); };
      grid.appendChild(cell);
    }
    c.appendChild(grid);
    c.appendChild(DF.el('p', 'muted small',
      (totalAulas ? totalAulas + ' dia(s) com aula marcada este mês. '
                  : 'Nenhuma aula marcada este mês ainda. ') +
      'Clique num dia pra marcar, remover ou trocar quem tem aula.'));
  }

  // editor de um dia: quem tem aula, adicionar/remover — grava direto no
  // storage que aluno.html lê, então reflete lá na hora (mesmo local, não cópia).
  // Cada edição re-renderiza a página inteira e reabre o modal fresco — mais
  // simples e sem risco de o grid de trás ficar desatualizado.
  function editarDia(key) {
    const d = new Date(key + 'T00:00:00');
    const DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    const dataFmt = DF.fmtDate(d) + ' · ' + DIAS[d.getDay()];

    const notas = loadNotas();
    const wrap = DF.el('div');
    const marcados = alunos.filter(function (a) {
      const rec = notas[a.nome + '|' + a.trilha];
      return rec && rec.aulas.indexOf(key) >= 0;
    });
    const livres = alunos.filter(function (a) { return marcados.indexOf(a) < 0; });

    wrap.appendChild(DF.el('div', 'pnl-lbl', 'Já marcados neste dia'));
    if (!marcados.length) wrap.appendChild(DF.el('p', 'muted small', 'Ninguém ainda.'));
    marcados.forEach(function (a) {
      const row = DF.el('div', 'row gap');
      row.style.marginBottom = '7px';
      row.appendChild(DF.el('span', '', '📅 ' + DF.esc(a.nome)));
      const rm = DF.el('button', 'btn small danger', '✕ Remover');
      rm.onclick = function () {
        const notas2 = loadNotas();
        const rec = registroDe(notas2, a);
        rec.aulas = rec.aulas.filter(function (x) { return x !== key; });
        saveNotasGlobal(notas2);
        P.render('');
        modal.close();
        editarDia(key);
      };
      row.appendChild(rm);
      wrap.appendChild(row);
    });

    if (livres.length) {
      wrap.appendChild(DF.el('div', 'pnl-lbl', 'Marcar outro aluno neste dia'));
      const row = DF.el('div', 'row gap');
      const sel = DF.el('select', 'inp');
      livres.forEach(function (a) {
        const o = DF.el('option', '', a.nome); o.value = a.nome + '|' + a.trilha; sel.appendChild(o);
      });
      row.appendChild(sel);
      const add = DF.el('button', 'btn small primary', '+ Marcar');
      add.onclick = function () {
        const notas2 = loadNotas();
        const a = livres.find(function (x) { return (x.nome + '|' + x.trilha) === sel.value; });
        const rec = registroDe(notas2, a);
        if (rec.aulas.indexOf(key) < 0) rec.aulas.push(key);
        saveNotasGlobal(notas2);
        P.render('');
        modal.close();
        editarDia(key);
      };
      row.appendChild(add);
      wrap.appendChild(row);
    }

    const modal = DF.modal({
      title: '📅 ' + dataFmt, html: wrap,
      buttons: [{ label: 'Fechar', cls: 'primary', cb: function () { P.render(''); } }]
    });
  }

  function brand() {
    const b = DF.el('div', 'ef-brand');
    b.innerHTML =
      '<svg class="ef-wave" viewBox="0 0 40 40" aria-hidden="true">' +
      '<path d="M2 15c6-6 12-6 18 0s12 6 18 0" fill="none" stroke="#2898d0" stroke-width="4.5" stroke-linecap="round"/>' +
      '<path d="M2 25c6-6 12-6 18 0s12 6 18 0" fill="none" stroke="#30a8e0" stroke-width="4.5" stroke-linecap="round" opacity=".55"/>' +
      '</svg>' +
      '<div class="ef-name">English<em>Flow</em></div>';
    return b;
  }

  P.boot = function () {
    DF.load();
    load();
    if (!DF.state.trail) DF.state.trail = 'starter';
    DF._applyTrailAlias();
    DF.$$('.screen').forEach(function (s) { s.classList.toggle('active', s.id === 's-painel'); });
    P.render('');
  };
})(typeof window !== 'undefined' ? window : globalThis);
