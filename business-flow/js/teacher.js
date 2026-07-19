/* BUSINESS FLOW — teacher.js
   Painel do mentor (roda local, sem servidor).
   Gera UNL (desbloqueio), TST (teste/Viewpoint/Final) e certificados PDF;
   lê e valida REL (assinatura anti-fraude) e mantém o ranking local.
   Cobre as duas trilhas (Starter/Elementary) via seletor no topo. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const KEY = 'businessflow_teacher';
  let T = { mn: 'Felipe (EnglishFlow)', roster: [] };
  let TRAIL = 'starter';

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) T = Object.assign(T, JSON.parse(raw));
    } catch (e) { /* ignore */ }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(T)); } catch (e) { /* ignore */ }
  }

  const CAT_CHOICES = [
    ['voc', '📦 Vocabulário'],
    ['gra', '🔧 Gramática'],
    ['num', '🔢 Números'],
    ['rea', '📖 Leitura'],
    ['spl', '🔤 Soletração'],
    ['fun', '🧰 Frases úteis']
  ];

  function mentorField(panel) {
    panel.appendChild(DF.el('label', 'lbl', 'Seu nome (aparece no aparelho do aluno)'));
    const inp = DF.el('input', 'inp');
    inp.value = T.mn; inp.maxLength = 24;
    inp.onchange = function () { T.mn = inp.value.trim() || 'Mentor'; save(); };
    panel.appendChild(inp);
    return inp;
  }

  function studentField(panel) {
    panel.appendChild(DF.el('label', 'lbl', 'Nome do aluno (opcional — trava o código para ele)'));
    const inp = DF.el('input', 'inp');
    inp.maxLength = 24;
    inp.placeholder = 'vazio = qualquer aluno pode usar';
    panel.appendChild(inp);
    return inp;
  }

  function showCode(title, code, waText) {
    const d = DF.el('div');
    d.appendChild(DF.el('p', 'muted', 'Copie e envie ao aluno pelo WhatsApp:'));
    d.appendChild(DF.codeBox(code, { wa: waText, rows: 6 }));
    DF.modal({ title: title, html: d, buttons: [{ label: 'Fechar', cls: 'ghost' }] });
  }

  function trailInfo() { return DF.TRAILS[TRAIL]; }

  // ---------------- aba Desbloqueio ----------------
  function renderUnlock(panel) {
    const p = DF.el('div', 'panel');
    p.appendChild(DF.el('p', 'muted', 'Escolha o(s) andar(es) para acender no mapa do aluno — em qualquer ordem, no seu ritmo.'));
    mentorField(p);
    const sn = studentField(p);
    p.appendChild(DF.el('label', 'lbl', 'Unidades a desbloquear — ' + trailInfo().label));
    const grid = DF.el('div', 'kind-grid');
    const chips = {};
    Object.keys(trailInfo().units).forEach(function (k) {
      const u = trailInfo().units[k];
      const c = DF.el('span', 'chip', u.icon + ' U' + u.n);
      c.title = u.name;
      c.onclick = function () { c.classList.toggle('on'); };
      chips[u.n] = c;
      grid.appendChild(c);
    });
    p.appendChild(grid);
    const go = DF.el('button', 'btn primary wide', '🔓 Gerar código de desbloqueio (UNL)');
    go.onclick = async function () {
      const us = Object.keys(chips).filter(function (n) { return chips[n].classList.contains('on'); }).map(Number);
      if (!us.length) { DF.toast('Selecione ao menos uma unidade.'); return; }
      const code = await DF.CODES.makeUnlock({ us: us, mn: T.mn, sn: sn.value.trim() });
      const names = us.map(function (u) { return 'Unit ' + u + ' — ' + trailInfo().units[u].name; }).join('\n');
      showCode('🔓 Código de desbloqueio',
        code,
        '🏢 BUSINESS FLOW (' + trailInfo().label + ') — novo andar liberado!\n' + names +
        '\n\nAbra o jogo, toque em 🔑 CÓDIGOS e cole:\n\n' + code);
    };
    p.appendChild(go);
    panel.appendChild(p);
  }

  // ---------------- aba Teste ----------------
  function renderTest(panel) {
    const p = DF.el('div', 'panel');
    p.appendChild(DF.el('p', 'muted', 'A prova é gerada por seed: idêntica e determinística no aparelho do aluno. Ao final ele devolve um código REL assinado.'));
    mentorField(p);
    const sn = studentField(p);

    p.appendChild(DF.el('label', 'lbl', 'Unidade avaliada — ' + trailInfo().label));
    const selU = DF.el('select', 'inp');
    Object.keys(trailInfo().units).forEach(function (k) {
      const u = trailInfo().units[k];
      selU.appendChild(new Option('Unit ' + u.n + ' — ' + u.name, u.n));
    });
    p.appendChild(selU);

    p.appendChild(DF.el('label', 'lbl', 'Competências avaliadas'));
    const grid = DF.el('div', 'kind-grid');
    const chips = {};
    CAT_CHOICES.forEach(function (c) {
      const el = DF.el('span', 'chip', c[1]);
      el.onclick = function () { el.classList.toggle('on'); };
      chips[c[0]] = el;
      grid.appendChild(el);
    });
    chips.voc.classList.add('on');
    chips.gra.classList.add('on');
    p.appendChild(grid);

    const row = DF.el('div', 'row gap');
    const c1 = DF.el('div', 'col'); c1.style.flex = '1';
    c1.appendChild(DF.el('label', 'lbl', 'Questões'));
    const selN = DF.el('select', 'inp');
    [5, 8, 10, 15, 20].forEach(function (n) { selN.appendChild(new Option(n + ' questões', n)); });
    selN.value = '10';
    c1.appendChild(selN);
    const c2 = DF.el('div', 'col'); c2.style.flex = '1';
    c2.appendChild(DF.el('label', 'lbl', 'Nível'));
    const selD = DF.el('select', 'inp');
    [['1', 'Básico'], ['2', 'Intermediário'], ['3', 'Avançado']].forEach(function (d) { selD.appendChild(new Option(d[1], d[0])); });
    c2.appendChild(selD);
    row.appendChild(c1); row.appendChild(c2);
    p.appendChild(row);

    p.appendChild(DF.el('label', 'lbl', 'Recado para o aluno (opcional)'));
    const msg = DF.el('input', 'inp'); msg.maxLength = 140;
    msg.placeholder = 'ex.: Prazo: sexta. Capriche no listening!';
    p.appendChild(msg);

    const go = DF.el('button', 'btn primary wide', '📋 Gerar ordem de teste (TST)');
    go.onclick = async function () {
      const cats = Object.keys(chips).filter(function (c) { return chips[c].classList.contains('on'); });
      if (!cats.length) { DF.toast('Selecione ao menos uma competência.'); return; }
      const u = parseInt(selU.value, 10);
      const code = await DF.CODES.makeTest({
        t: 'tst', us: [u], cats: cats,
        n: selN.value, diff: selD.value, mn: T.mn, msg: msg.value.trim(), sn: sn.value.trim()
      });
      showCode('📋 Ordem de teste — Unit ' + u,
        code,
        '🏢 BUSINESS FLOW — Teste de competência: Unit ' + u + ' — ' + trailInfo().units[u].name +
        '\nDe: ' + T.mn + (msg.value.trim() ? '\n💬 ' + msg.value.trim() : '') +
        '\n\nAbra o jogo, toque em 🔑 CÓDIGOS e cole:\n\n' + code);
    };
    p.appendChild(go);
    panel.appendChild(p);
  }

  // ---------------- aba Viewpoint / Final Test ----------------
  function renderExams(panel) {
    const p = DF.el('div', 'panel');
    p.appendChild(DF.el('p', 'muted', 'Viewpoint (avaliação de bloco) e o Final Test da trilha. Emita quando o bloco estiver concluído nas aulas ao vivo.'));
    mentorField(p);
    const sn = studentField(p);

    p.appendChild(DF.el('label', 'lbl', 'Exame — ' + trailInfo().label));
    const selB = DF.el('select', 'inp');
    trailInfo().checkpoints.forEach(function (cp) {
      selB.appendChild(new Option(
        (cp.id === 'fin' ? '🏆 ' : '🚨 ') + cp.name +
        ' (Units ' + cp.units.join(', ') + ')', cp.id));
    });
    p.appendChild(selB);

    const row = DF.el('div', 'row gap');
    const c1 = DF.el('div', 'col'); c1.style.flex = '1';
    c1.appendChild(DF.el('label', 'lbl', 'Questões'));
    const selN = DF.el('select', 'inp');
    [10, 15, 20, 25, 30].forEach(function (n) { selN.appendChild(new Option(n + ' questões', n)); });
    selN.value = '15';
    c1.appendChild(selN);
    const c2 = DF.el('div', 'col'); c2.style.flex = '1';
    c2.appendChild(DF.el('label', 'lbl', 'Nível'));
    const selD = DF.el('select', 'inp');
    [['1', 'Básico'], ['2', 'Intermediário'], ['3', 'Avançado']].forEach(function (d) { selD.appendChild(new Option(d[1], d[0])); });
    selD.value = '2';
    c2.appendChild(selD);
    row.appendChild(c1); row.appendChild(c2);
    p.appendChild(row);

    const go = DF.el('button', 'btn primary wide', '🚨 Gerar código do exame');
    go.onclick = async function () {
      const cp = trailInfo().checkpoints.find(function (x) { return x.id === selB.value; });
      const code = await DF.CODES.makeTest({
        t: cp.id === 'fin' ? 'fin' : 'blk',
        us: cp.units, cats: ['voc', 'gra', 'num', 'rea', 'spl', 'fun'],
        n: selN.value, diff: selD.value, mn: T.mn, sn: sn.value.trim()
      });
      showCode((cp.id === 'fin' ? '🏆 ' : '🚨 ') + cp.name,
        code,
        '🏢 BUSINESS FLOW — ' + cp.name + '!\nDe: ' + T.mn +
        '\n\nAbra o jogo, toque em 🔑 CÓDIGOS e cole:\n\n' + code);
    };
    p.appendChild(go);
    panel.appendChild(p);
  }

  // ---------------- aba Relatórios ----------------
  function renderReports(panel) {
    const p = DF.el('div', 'panel');
    p.appendChild(DF.el('label', 'lbl', 'Cole o relatório do aluno (REL…)'));
    const ta = DF.el('textarea', 'inp'); ta.rows = 5; ta.placeholder = 'REL.C.xxxxx…';
    p.appendChild(ta);
    const btn = DF.el('button', 'btn primary wide', '🔎 Validar assinatura');
    const out = DF.el('div', '');
    btn.onclick = async function () {
      out.innerHTML = '';
      try {
        const r = await DF.CODES.readReport(ta.value);
        const d = r.data;
        const card = DF.el('div', 'panel result-card');
        const badge = r.ok
          ? '<span class="badge ok">✔ AUTÊNTICO</span>'
          : '<span class="badge bad">⚠ ADULTERADO</span>';
        const kindName = d.k === 'blk' ? '🚨 Viewpoint' : d.k === 'fin' ? '🏆 Final Test' :
          d.k === 'unit' ? '🏢 Relatório de unidade' : '📋 Teste';
        card.innerHTML =
          '<div class="row spread"><b class="big"></b>' + badge + '</div>' +
          '<div class="muted mission-line"></div>' +
          '<div class="score-line"><span class="score"></span> <span class="muted"></span></div>' +
          '<div class="grid-line"></div><div class="cats"></div>';
        DF.$('.big', card).textContent = d.st || '?';
        DF.$('.mission-line', card).textContent = kindName + ' · Unit' + (d.us.length > 1 ? 's' : '') + ' ' +
          d.us.join(', ') + ' · ' + (d.d || '');
        DF.$('.score', card).textContent = (d.sc || 0) + '/1000';
        DF.$('.score-line .muted', card).textContent = (d.ac || 0) + '% de acerto' + (d.n ? ' · ' + d.n + ' questões' : '');
        DF.$('.grid-line', card).textContent = String(d.g || '').split('').map(function (c) {
          return c === '2' ? '🟩' : c === '1' ? '🟨' : '🟥';
        }).join('');
        const cats = DF.$('.cats', card);
        let weakest = null;
        Object.keys(d.cats || {}).forEach(function (k) {
          const v = d.cats[k];
          if (!v || !v[1]) return;
          const pct = Math.round(100 * v[0] / v[1]);
          const info = { voc: '📦 Vocabulário', gra: '🔧 Gramática', num: '🔢 Números', rea: '📖 Leitura', spl: '🔤 Soletração', fun: '🧰 Frases úteis' };
          const label = info[k] || k;
          if (v[1] >= 3 && (!weakest || pct < weakest.pct)) weakest = { label: label, pct: pct };
          const row2 = DF.el('div', 'cat-row');
          row2.innerHTML =
            '<span class="cat-lbl">' + label + '</span>' +
            '<div class="bar"><div class="fill" style="width:' + pct + '%;background:' +
            (pct >= 75 ? 'var(--good)' : pct >= 50 ? 'var(--gold)' : 'var(--bad)') + '"></div></div>' +
            '<span class="cat-pct">' + pct + '%</span>';
          cats.appendChild(row2);
        });
        if (r.ok && weakest && weakest.pct < 70) {
          cats.appendChild(DF.el('p', 'warn', '💡 Sugestão: próxima O.S. focada em "' + weakest.label + '" (' + weakest.pct + '%).'));
        }
        if (!r.ok) {
          cats.appendChild(DF.el('p', 'warn', '⚠ Este código foi modificado — os dados acima NÃO são confiáveis.'));
        }
        if (r.ok) {
          const sv = DF.el('button', 'btn ghost wide', '💾 Salvar no ranking');
          sv.onclick = function () {
            const key = (d.tid || d.k) + '|' + (d.st || '');
            const entry = { key: key, st: d.st, kind: kindName, us: d.us.join(','), sc: d.sc, ac: d.ac, d: d.d };
            const ex = T.roster.findIndex(function (x) { return x.key === key; });
            if (ex >= 0) { if (T.roster[ex].sc < d.sc) T.roster[ex] = entry; }
            else T.roster.push(entry);
            save();
            DF.toast('Registrado no ranking. 🏆');
            drawRoster();
          };
          card.appendChild(sv);
        }
        out.appendChild(card);
      } catch (e) {
        out.appendChild(DF.el('p', 'warn', '❌ Código ilegível. Confira se copiou tudo (começa com REL).'));
      }
    };
    p.appendChild(btn);
    p.appendChild(out);
    panel.appendChild(p);

    const rp = DF.el('div', 'panel');
    rp.appendChild(DF.el('h3', '', '🏆 Ranking dos alunos'));
    const list = DF.el('div', '');
    rp.appendChild(list);
    panel.appendChild(rp);
    function drawRoster() {
      list.innerHTML = '';
      const roster = T.roster.slice().sort(function (a, b) { return b.sc - a.sc; });
      if (!roster.length) {
        list.appendChild(DF.el('p', 'muted', 'Nenhum resultado salvo ainda.'));
        return;
      }
      roster.forEach(function (r2, i) {
        const row = DF.el('div', 'roster-row');
        const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1) + 'º';
        row.innerHTML = '<span class="pos">' + medal + '</span><span class="nm"></span><span class="mt muted"></span><b>' + r2.sc + '</b>';
        DF.$('.nm', row).textContent = r2.st;
        DF.$('.mt', row).textContent = r2.kind + ' U' + r2.us + ' · ' + (r2.d || '');
        list.appendChild(row);
      });
      const clear = DF.el('button', 'btn danger small', 'Limpar ranking');
      clear.onclick = function () {
        DF.modal({
          title: 'Limpar ranking?', html: 'Todos os resultados salvos serão removidos.',
          buttons: [
            { label: 'Cancelar', cls: 'ghost' },
            { label: 'Remover', cls: 'danger', cb: function () { T.roster = []; save(); drawRoster(); } }
          ]
        });
      };
      list.appendChild(clear);
    }
    drawRoster();
  }

  // ---------------- aba Certificados (PDF via impressão) ----------------
  const CERT_LEVELS = [
    { id: 'unit', label: '☑️ Conclusão de unidade', kicker: 'CERTIFICADO DE CONCLUSÃO', body: 'concluiu com dedicação a unidade' },
    { id: 'block', label: '🚨 Viewpoint aprovado', kicker: 'CERTIFICADO DE APROVAÇÃO', body: 'foi aprovado(a) no Viewpoint de' },
    { id: 'trail', label: '🏆 Trilha completa', kicker: 'CERTIFICADO DE CONCLUSÃO DA TRILHA', body: 'concluiu integralmente a trilha' }
  ];

  function renderCerts(panel) {
    const p = DF.el('div', 'panel');
    p.appendChild(DF.el('p', 'muted', 'Preencha os dados e gere um certificado pronto para impressão/PDF (usa a função "Imprimir" do navegador — sem custo, sem dependências).'));

    p.appendChild(DF.el('label', 'lbl', 'Nível do certificado'));
    const selLvl = DF.el('select', 'inp');
    CERT_LEVELS.forEach(function (l) { selLvl.appendChild(new Option(l.label, l.id)); });
    p.appendChild(selLvl);

    p.appendChild(DF.el('label', 'lbl', 'Nome do aluno'));
    const inpName = DF.el('input', 'inp'); inpName.maxLength = 40; inpName.placeholder = 'ex.: João Silva';
    p.appendChild(inpName);

    p.appendChild(DF.el('label', 'lbl', 'Detalhe (unidade / bloco / trilha)'));
    const inpDetail = DF.el('input', 'inp'); inpDetail.maxLength = 60;
    inpDetail.placeholder = 'ex.: Unit 3 — Workplace · ou · Business Starter';
    p.appendChild(inpDetail);

    const mn = mentorField(p);

    const go = DF.el('button', 'btn primary wide', '🏅 Gerar certificado');
    go.onclick = function () {
      const lvl = CERT_LEVELS.find(function (l) { return l.id === selLvl.value; });
      const name = inpName.value.trim() || 'Aluno(a)';
      const detail = inpDetail.value.trim() || trailInfo().label;
      drawCert(lvl, name, detail, mn.value.trim() || T.mn);
      DF.toast('Certificado gerado — role até o final ou use "Imprimir".');
    };
    p.appendChild(go);
    panel.appendChild(p);

    const preview = DF.el('div', 'panel');
    preview.appendChild(DF.el('h3', '', '👁️ Pré-visualização'));
    preview.id = 'cert-preview-wrap';
    panel.appendChild(preview);

    const printBtn = DF.el('button', 'btn wa wide', '🖨️ Imprimir / Salvar como PDF');
    printBtn.onclick = function () { window.print(); };
    panel.appendChild(printBtn);
  }

  function drawCert(lvl, name, detail, mn) {
    const html =
      '<div class="cert-sheet">' +
      '<div class="cert-seal">🏢</div>' +
      '<div class="cert-kicker">EnglishFlow · Business Flow</div>' +
      '<div class="cert-title">' + lvl.kicker + '</div>' +
      '<div class="cert-body">Certificamos que<br>' +
      '<span class="cert-name">' + DF.esc(name) + '</span>' +
      lvl.body + ' <b>' + DF.esc(detail) + '</b>, demonstrando domínio do inglês corporativo avaliado.' +
      '<div class="cert-detail">Business Result 2nd Edition · English for Work</div></div>' +
      '<div class="cert-foot">' +
      '<div class="cert-date">Data<b>' + DF.fmtDate() + '</b></div>' +
      '<div class="cert-sig">Mentor<b>' + DF.esc(mn) + '</b></div>' +
      '</div></div>';
    DF.$('#cert-page').innerHTML = html;
    const wrap = DF.$('#cert-preview-wrap');
    if (wrap) {
      DF.$$('.cert-sheet-preview', wrap).forEach(function (n) { n.remove(); });
      const clone = DF.el('div', 'cert-sheet-preview');
      clone.style.cssText = 'transform:scale(.55);transform-origin:top left;height:340px;overflow:hidden;';
      clone.innerHTML = html;
      wrap.appendChild(clone);
    }
  }

  // ---------------- seletor de trilha ----------------
  function bindTrailSelect() {
    const sel = DF.$('#trail-select');
    Object.keys(DF.TRAILS).forEach(function (id) {
      sel.appendChild(new Option(DF.TRAILS[id].label + ' (' + DF.TRAILS[id].level + ')', id));
    });
    sel.value = TRAIL;
    sel.onchange = function () {
      TRAIL = sel.value;
      const activeTab = DF.$('.tab.on');
      renderActive(activeTab ? activeTab.dataset.i : 0);
    };
  }

  // ---------------- boot ----------------
  let DEFS = [];
  function renderActive(i) {
    const panels = DF.$('#panels');
    panels.innerHTML = '';
    DEFS[i].render(panels);
  }

  function boot() {
    load();
    bindTrailSelect();
    const tabs = DF.$('#tabs');
    DEFS = [
      { label: '🔓 Desbloqueio', render: renderUnlock },
      { label: '📋 Teste', render: renderTest },
      { label: '🚨 Exames', render: renderExams },
      { label: '🏆 Relatórios', render: renderReports },
      { label: '🏅 Certificados', render: renderCerts }
    ];
    DEFS.forEach(function (d, i) {
      const b = DF.el('button', 'tab' + (i === 0 ? ' on' : ''), d.label);
      b.dataset.i = i;
      b.onclick = function () {
        DF.$$('.tab', tabs).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        renderActive(i);
      };
      tabs.appendChild(b);
    });
    renderActive(0);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
