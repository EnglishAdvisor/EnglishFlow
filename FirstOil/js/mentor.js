/* FIRST OIL — mentor.js
   Modo Instrutor: Ordens de Serviço (missões) por código compactado, resultados
   assinados e Relatório de Competência por categoria. Tudo offline, via WhatsApp. */
(function (root) {
  const G = root.G = root.G || {};
  const M = G.MENTOR = {};

  // ---------------- codec ----------------
  async function pack(obj, prefix) {
    const json = JSON.stringify(obj);
    let body = null, mode = 'P';
    if (typeof CompressionStream !== 'undefined') {
      try {
        const cs = new CompressionStream('deflate-raw');
        const stream = new Blob([new TextEncoder().encode(json)]).stream().pipeThrough(cs);
        const buf = await new Response(stream).arrayBuffer();
        body = G.bytesB64(new Uint8Array(buf)); mode = 'C';
      } catch (e) { body = null; }
    }
    if (!body) body = G.b64e(json);
    return prefix + '.' + mode + '.' + body;
  }
  async function unpack(code, prefix) {
    code = String(code || '').trim().replace(/\s+/g, '');
    const parts = code.split('.');
    if (parts[0] !== prefix || parts.length < 3) throw new Error('bad-format');
    const mode = parts[1], body = parts.slice(2).join('.');
    let json;
    if (mode === 'C') {
      const ds = new DecompressionStream('deflate-raw');
      const stream = new Blob([G.b64Bytes(body)]).stream().pipeThrough(ds);
      json = await new Response(stream).text();
    } else {
      json = G.b64d(body);
    }
    return JSON.parse(json);
  }
  function cut(s, n) { return String(s == null ? '' : s).slice(0, n); }
  function canon(payload) {
    const keys = Object.keys(payload).filter(function (k) { return k !== 'sig'; }).sort();
    return keys.map(function (k) { return k + '=' + JSON.stringify(payload[k]); }).join('&');
  }

  // ---------------- Ordens de Serviço ----------------
  M.encodeMission = function (m) { return pack(m, 'OS1'); };
  M.decodeMission = async function (code) {
    const m = await unpack(code, 'OS1');
    if (m.v !== 1 || !m.id) throw new Error('bad-mission');
    m.n = G.clamp(parseInt(m.n, 10) || 8, 1, 30);
    m.diff = G.clamp(parseInt(m.diff, 10) || 1, 1, 3);
    m.mn = cut(m.mn || 'Instrutor', 24);
    m.t = cut(m.t || 'Ordem de Serviço', 40);
    m.msg = cut(m.msg || '', 140);
    if (!Array.isArray(m.kinds)) m.kinds = ['venpt', 'vpten'];
    m.kinds = m.kinds.filter(function (k) { return G.DATA.KIND_INFO[k]; }).slice(0, 14);
    if (!m.kinds.length) m.kinds = ['venpt'];
    m.custom = m.custom || {};
    ['vocab', 'sentences'].forEach(function (f) {
      if (!Array.isArray(m.custom[f])) { m.custom[f] = []; return; }
      m.custom[f] = m.custom[f].filter(function (p) {
        return Array.isArray(p) && typeof p[0] === 'string' && typeof p[1] === 'string';
      }).map(function (p) { return [cut(p[0], 80), cut(p[1], 80)]; }).slice(0, 40);
    });
    return m;
  };

  M.makeResult = function (payload) {
    payload.sig = G.sign(canon(payload));
    return pack(payload, 'REL1');
  };
  M.verifyResult = async function (code) {
    const r = await unpack(code, 'REL1');
    return { verified: r.sig === G.sign(canon(r)), data: r };
  };

  M.makeReport = function () {
    const st = G.state;
    const cs = G.SRS.catStats();
    const cats = {};
    Object.keys(cs).forEach(function (k) { cats[k] = [cs[k].ok, cs[k].total]; });
    const cnt = G.SRS.counts();
    const payload = {
      v: 1, st: cut(st.name || 'Profissional', 24), d: G.todayKey(),
      lvl: st.lvl, bat: st.stats.battles, boss: st.stats.bosses,
      mast: cnt.mast, seen: cnt.seen, cats: cats
    };
    payload.sig = G.sign(canon(payload));
    return pack(payload, 'COMP1');
  };
  M.verifyReport = async function (code) {
    const r = await unpack(code, 'COMP1');
    return { verified: r.sig === G.sign(canon(r)), data: r };
  };

  M.gridEmoji = function (g) {
    return String(g || '').split('').map(function (c) {
      return c === '2' ? '🟩' : c === '1' ? '🟨' : '🟥';
    }).join('');
  };

  // ============================================================
  const MISSION_KINDS = ['venpt', 'vpten', 'abbr', 'ff', 'build', 'order', 'ltype', 'lpair', 'num', 'radio', 'ed', 'irr', 'prep', 'phg', 'read'];

  M.renderMentor = function () {
    const c = G.$('#s-mentor .content');
    c.innerHTML = '';
    c.appendChild(G.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="G.go(\'s-map\')">← Voltar</button><h2>📋 Modo Instrutor</h2>'));
    const tabs = G.el('div', 'tabs');
    const panels = G.el('div', '');
    const defs = [
      { id: 'criar', label: '✏️ Criar O.S.', render: renderCreate },
      { id: 'result', label: '🏆 Resultados', render: renderResults },
      { id: 'comp', label: '📊 Competência', render: renderReports }
    ];
    defs.forEach(function (d, i) {
      const b = G.el('button', 'tab' + (i === 0 ? ' on' : ''), d.label);
      b.onclick = function () {
        G.$$('.tab', tabs).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        panels.innerHTML = '';
        d.render(panels);
        if (G.AU) G.AU.sfx('click');
      };
      tabs.appendChild(b);
    });
    c.appendChild(tabs);
    c.appendChild(panels);
    defs[0].render(panels);
  };

  function parsePairs(text) {
    const out = [];
    String(text || '').split(/\r?\n/).forEach(function (line) {
      const m2 = line.split('=');
      if (m2.length >= 2) {
        const a = m2[0].trim(), b = m2.slice(1).join('=').trim();
        if (a && b) out.push([a, b]);
      }
    });
    return out.slice(0, 40);
  }

  function renderCreate(panel) {
    const st = G.state;
    const p = G.el('div', 'panel');
    p.appendChild(G.el('p', 'muted', 'Monte uma Ordem de Serviço de inglês técnico e envie o código à sua equipe. As perguntas são idênticas para todos — resultados comparáveis.'));
    p.appendChild(G.el('label', 'lbl', 'Seu nome (instrutor / coordenador)'));
    const inName = G.el('input', 'inp'); inName.maxLength = 24; inName.value = st.mentorName || '';
    inName.placeholder = 'Eng. Ricardo — Treinamento'; p.appendChild(inName);

    p.appendChild(G.el('label', 'lbl', 'Título da O.S.'));
    const inTitle = G.el('input', 'inp'); inTitle.maxLength = 40; inTitle.placeholder = 'Inglês técnico — turma sonda NS-42';
    p.appendChild(inTitle);

    p.appendChild(G.el('label', 'lbl', 'Instrução para a equipe (opcional)'));
    const inMsg = G.el('input', 'inp'); inMsg.maxLength = 140; inMsg.placeholder = 'Prazo: sexta-feira. Vale presença no treinamento.';
    p.appendChild(inMsg);

    const row = G.el('div', 'row gap');
    const col1 = G.el('div', 'col');
    col1.appendChild(G.el('label', 'lbl', 'Perguntas'));
    const selN = G.el('select', 'inp');
    [5, 8, 10, 15, 20].forEach(function (n) { selN.appendChild(new Option(n + ' perguntas', n)); });
    selN.value = '10';
    col1.appendChild(selN);
    const col2 = G.el('div', 'col');
    col2.appendChild(G.el('label', 'lbl', 'Nível'));
    const selD = G.el('select', 'inp');
    [['1', 'Básico'], ['2', 'Intermediário'], ['3', 'Avançado']].forEach(function (d) { selD.appendChild(new Option(d[1], d[0])); });
    col2.appendChild(selD);
    row.appendChild(col1); row.appendChild(col2);
    p.appendChild(row);

    p.appendChild(G.el('label', 'lbl', 'Competências avaliadas'));
    const kwrap = G.el('div', 'kind-grid');
    const checks = {};
    MISSION_KINDS.forEach(function (k) {
      const info = G.DATA.KIND_INFO[k];
      const b = G.el('button', 'chip', info.e + ' ' + info.label);
      b.onclick = function () { b.classList.toggle('on'); if (G.AU) G.AU.sfx('click'); };
      checks[k] = b;
      kwrap.appendChild(b);
    });
    checks.venpt.classList.add('on');
    checks.abbr.classList.add('on');
    p.appendChild(kwrap);

    p.appendChild(G.el('label', 'lbl', '📚 Glossário próprio (opcional) — uma linha por termo: english term = termo em português'));
    const taV = G.el('textarea', 'inp'); taV.rows = 4; taV.placeholder = 'slop tank = tanque de resíduos\nswivel joint = junta rotativa';
    p.appendChild(taV);

    p.appendChild(G.el('label', 'lbl', '✍️ Frases próprias (opcional) — English sentence = tradução'));
    const taS = G.el('textarea', 'inp'); taS.rows = 3; taS.placeholder = 'The vessel must be purged before entry = O vaso deve ser inertizado antes da entrada';
    p.appendChild(taS);

    const go = G.el('button', 'btn primary wide', '📋 Gerar código da O.S.');
    go.onclick = async function () {
      const kinds = MISSION_KINDS.filter(function (k) { return checks[k].classList.contains('on'); });
      if (!kinds.length) { G.toast('Selecione ao menos uma competência.'); return; }
      st.mentorName = inName.value.trim() || 'Instrutor';
      G.save();
      const m = {
        v: 1, id: Math.random().toString(36).slice(2, 8),
        mn: st.mentorName, t: inTitle.value.trim() || 'Ordem de Serviço — Inglês Técnico',
        msg: inMsg.value.trim(),
        n: parseInt(selN.value, 10), diff: parseInt(selD.value, 10),
        kinds: kinds, seed: Math.floor(Math.random() * 1e9),
        custom: { vocab: parsePairs(taV.value), sentences: parsePairs(taS.value) }
      };
      go.disabled = true; go.textContent = 'Gerando...';
      const code = await M.encodeMission(m);
      go.disabled = false; go.textContent = '📋 Gerar código da O.S.';
      if (G.AU) G.AU.sfx('letter');
      const wa = '🛢️ Ordem de Serviço de inglês técnico: "' + m.t + '" — de ' + m.mn +
        '\nAbra o FIRST OIL, toque em ORDENS DE SERVIÇO e cole o código:\n\n' + code;
      G.modal({
        title: '📨 O.S. emitida',
        html: (function () {
          const d = G.el('div');
          d.appendChild(G.el('p', 'muted', 'Envie o código à equipe. Ao concluir, cada um devolve um código de comprovação — verifique na aba Resultados.'));
          d.appendChild(G.codeBox(code, { wa: wa, rows: 5 }));
          return d;
        })(),
        buttons: [{ label: 'Fechar', cls: 'ghost' }]
      });
    };
    p.appendChild(go);
    panel.appendChild(p);
  }

  function renderResults(panel) {
    const p = G.el('div', 'panel');
    p.appendChild(G.el('label', 'lbl', 'Cole o código de comprovação do profissional (REL1...)'));
    const ta = G.el('textarea', 'inp'); ta.rows = 4; ta.placeholder = 'REL1.C.xxxxx...';
    p.appendChild(ta);
    const btn = G.el('button', 'btn primary wide', '🔎 Verificar assinatura');
    const out = G.el('div', '');
    btn.onclick = async function () {
      out.innerHTML = '';
      try {
        const r = await M.verifyResult(ta.value);
        const d = r.data;
        const card = G.el('div', 'panel result-card');
        const badge = r.verified
          ? '<span class="badge ok">✔ AUTÊNTICO</span>'
          : '<span class="badge bad">⚠ ADULTERADO</span>';
        card.innerHTML =
          '<div class="row spread"><b class="big"></b>' + badge + '</div>' +
          '<div class="muted mission-line"></div>' +
          '<div class="score-line"><span class="score"></span> <span class="muted"></span></div>' +
          '<div class="grid-line"></div>';
        G.$('.big', card).textContent = d.st || '?';
        G.$('.mission-line', card).textContent = (d.mt || 'O.S.') + ' · ' + (d.d || '');
        G.$('.score', card).textContent = (d.sc || 0) + '/1000';
        G.$('.score-line .muted', card).textContent = (d.ac || 0) + '% de acerto · ' + (d.n || '?') + ' perguntas';
        G.$('.grid-line', card).textContent = M.gridEmoji(d.g);
        if (r.verified) {
          const save = G.el('button', 'btn ghost', '💾 Salvar no ranking da equipe');
          save.onclick = function () {
            const st = G.state;
            st.roster = st.roster || [];
            const key = (d.mid || '') + '|' + (d.st || '');
            const ex = st.roster.findIndex(function (x) { return x.key === key; });
            const entry = { key: key, st: d.st, mt: d.mt, sc: d.sc, ac: d.ac, d: d.d };
            if (ex >= 0) { if (st.roster[ex].sc < d.sc) st.roster[ex] = entry; }
            else st.roster.push(entry);
            G.save();
            G.toast('Registrado no ranking. 🏆');
            drawRoster();
          };
          card.appendChild(save);
        }
        out.appendChild(card);
        if (G.AU) G.AU.sfx(r.verified ? 'good' : 'bad');
      } catch (e) {
        out.appendChild(G.el('p', 'warn', '❌ Código ilegível. Confira se copiou tudo (começa com REL1).'));
      }
    };
    p.appendChild(btn);
    p.appendChild(out);
    panel.appendChild(p);

    const rp = G.el('div', 'panel');
    rp.appendChild(G.el('h3', '', '🏆 Ranking da equipe'));
    const list = G.el('div', '');
    rp.appendChild(list);
    function drawRoster() {
      list.innerHTML = '';
      const roster = (G.state.roster || []).slice().sort(function (a, b) { return b.sc - a.sc; });
      if (!roster.length) {
        list.appendChild(G.el('p', 'muted', 'Nenhum resultado registrado ainda.'));
        return;
      }
      roster.forEach(function (r, i) {
        const row = G.el('div', 'roster-row');
        const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1) + 'º';
        row.innerHTML = '<span class="pos">' + medal + '</span><span class="nm"></span><span class="mt muted"></span><b>' + r.sc + '</b>';
        G.$('.nm', row).textContent = r.st;
        G.$('.mt', row).textContent = r.mt || '';
        list.appendChild(row);
      });
      const clear = G.el('button', 'btn danger small', 'Limpar ranking');
      clear.onclick = function () {
        G.modal({
          title: 'Limpar ranking?', html: 'Todos os resultados salvos serão removidos.',
          buttons: [
            { label: 'Cancelar', cls: 'ghost' },
            { label: 'Remover', cls: 'danger', cb: function () { G.state.roster = []; G.save(); drawRoster(); } }
          ]
        });
      };
      list.appendChild(clear);
    }
    drawRoster();
  }

  function renderReports(panel) {
    const p = G.el('div', 'panel');
    p.appendChild(G.el('p', 'muted', 'O profissional gera o Relatório de Competência em Ajustes e envia a você. Aqui aparece a precisão dele por categoria — a base para a próxima O.S.'));
    p.appendChild(G.el('label', 'lbl', 'Cole o relatório (COMP1...)'));
    const ta = G.el('textarea', 'inp'); ta.rows = 4; ta.placeholder = 'COMP1.C.xxxxx...';
    p.appendChild(ta);
    const btn = G.el('button', 'btn primary wide', '📖 Analisar competências');
    const out = G.el('div', '');
    btn.onclick = async function () {
      out.innerHTML = '';
      try {
        const r = await M.verifyReport(ta.value);
        const d = r.data;
        const card = G.el('div', 'panel result-card');
        const badge = r.verified
          ? '<span class="badge ok">✔ AUTÊNTICO</span>'
          : '<span class="badge bad">⚠ ADULTERADO</span>';
        card.innerHTML =
          '<div class="row spread"><b class="big"></b>' + badge + '</div>' +
          '<div class="muted head-line"></div><div class="cats"></div>';
        G.$('.big', card).textContent = d.st || '?';
        G.$('.head-line', card).textContent =
          G.DATA.rank(d.lvl || 1) + ' · ' + (d.bat || 0) + ' tarefas · ' + (d.boss || 0) + ' crises · ' +
          (d.mast || 0) + '/' + (d.seen || 0) + ' termos dominados · ' + (d.d || '');
        const cats = G.$('.cats', card);
        let weakest = null;
        Object.keys(d.cats || {}).forEach(function (k) {
          const v = d.cats[k];
          if (!v || !v[1]) return;
          const pct = Math.round(100 * v[0] / v[1]);
          const info = G.DATA.KIND_INFO[k] || { label: k, e: '❔' };
          if (v[1] >= 5 && (!weakest || pct < weakest.pct)) weakest = { label: info.label, pct: pct };
          const row = G.el('div', 'cat-row');
          row.innerHTML =
            '<span class="cat-lbl">' + info.e + ' ' + info.label + '</span>' +
            '<div class="bar"><div class="fill" style="width:' + pct + '%;background:' +
            (pct >= 75 ? 'var(--good)' : pct >= 50 ? 'var(--gold)' : 'var(--bad)') + '"></div></div>' +
            '<span class="cat-pct">' + pct + '%</span>';
          cats.appendChild(row);
        });
        if (weakest && weakest.pct < 70) {
          cats.appendChild(G.el('p', 'warn', '💡 Recomendação: emitir uma O.S. focada em "' + weakest.label + '" (' + weakest.pct + '%).'));
        }
        out.appendChild(card);
        if (G.AU) G.AU.sfx(r.verified ? 'good' : 'bad');
      } catch (e) {
        out.appendChild(G.el('p', 'warn', '❌ Código ilegível. Confira se copiou tudo (começa com COMP1).'));
      }
    };
    p.appendChild(btn);
    p.appendChild(out);
    panel.appendChild(p);
  }

  // ---------------- tela do profissional: Ordens de Serviço ----------------
  M.renderMissions = function () {
    const c = G.$('#s-missions .content');
    c.innerHTML = '';
    c.appendChild(G.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="G.go(\'s-map\')">← Voltar</button><h2>📨 Ordens de Serviço</h2>'));

    const p = G.el('div', 'panel');
    p.appendChild(G.el('label', 'lbl', 'Recebeu uma O.S. do seu instrutor? Cole o código:'));
    const ta = G.el('textarea', 'inp'); ta.rows = 4; ta.placeholder = 'OS1.C.xxxxx...';
    p.appendChild(ta);
    const btn = G.el('button', 'btn primary wide', '📬 Carregar O.S.');
    const preview = G.el('div', '');
    btn.onclick = async function () {
      preview.innerHTML = '';
      try {
        const m = await M.decodeMission(ta.value);
        const card = G.el('div', 'panel mission-card');
        card.innerHTML =
          '<h3 class="mtitle"></h3><div class="muted mfrom"></div><p class="mmsg"></p>' +
          '<div class="chips"></div>';
        G.$('.mtitle', card).textContent = '📋 ' + m.t;
        G.$('.mfrom', card).textContent = 'Emitida por: ' + m.mn + ' · ' + m.n + ' perguntas · nível ' +
          ['', 'básico', 'intermediário', 'avançado'][m.diff];
        G.$('.mmsg', card).textContent = m.msg ? '“' + m.msg + '”' : '';
        const chips = G.$('.chips', card);
        m.kinds.forEach(function (k) {
          const info = G.DATA.KIND_INFO[k];
          if (info) chips.appendChild(G.el('span', 'chip mini', info.e + ' ' + info.label));
        });
        const start = G.el('button', 'btn primary wide', '▶️ Executar O.S.');
        start.onclick = function () { G.startMission(m); };
        card.appendChild(start);
        preview.appendChild(card);
        if (G.AU) G.AU.sfx('good');
      } catch (e) {
        preview.appendChild(G.el('p', 'warn', '❌ Código inválido. Confira se copiou tudo (começa com OS1).'));
        if (G.AU) G.AU.sfx('bad');
      }
    };
    p.appendChild(btn);
    p.appendChild(preview);
    c.appendChild(p);

    const hist = G.state.myMissions || [];
    if (hist.length) {
      const hp = G.el('div', 'panel');
      hp.appendChild(G.el('h3', '', '🗂️ O.S. concluídas'));
      hist.slice().reverse().forEach(function (h) {
        const row = G.el('div', 'roster-row');
        row.innerHTML = '<span class="nm"></span><span class="mt muted"></span><b>' + h.sc + '</b>';
        G.$('.nm', row).textContent = h.t;
        G.$('.mt', row).textContent = 'de ' + h.mn + ' · ' + h.d;
        const re = G.el('button', 'btn ghost small', '📋 Código');
        re.onclick = function () {
          G.modal({
            title: 'Comprovação — ' + h.t,
            html: G.codeBox(h.code, { wa: waResultText(h.t, h.sc, h.ac, h.code), rows: 5 }),
            buttons: [{ label: 'Fechar', cls: 'ghost' }]
          });
        };
        row.appendChild(re);
        hp.appendChild(row);
      });
      c.appendChild(hp);
    }
  };

  function waResultText(t, sc, ac, code) {
    return '🛢️ O.S. "' + t + '" concluída: ' + sc + '/1000 (' + ac + '% de acerto)\nCódigo de comprovação:\n\n' + code;
  }

  M.finishMission = async function (mission, stats) {
    const st = G.state;
    const payload = {
      v: 1, mid: mission.id, mt: mission.t,
      st: st.name || 'Profissional',
      sc: stats.score, ac: stats.acc, n: stats.n,
      g: stats.grid, d: G.todayKey(), tm: Math.round(stats.time)
    };
    const code = await M.makeResult(payload);
    st.myMissions = st.myMissions || [];
    st.myMissions.push({ mid: mission.id, t: mission.t, mn: mission.mn, sc: stats.score, ac: stats.acc, d: G.fmtDate(), code: code });
    if (st.myMissions.length > 30) st.myMissions = st.myMissions.slice(-30);
    G.save();
    const d = G.el('div');
    d.appendChild(G.el('div', 'grid-line center', M.gridEmoji(stats.grid)));
    d.appendChild(G.el('p', 'center big-score', stats.score + '/1000 · ' + stats.acc + '% de acerto'));
    d.appendChild(G.el('p', 'muted', 'Envie o código a ' + mission.mn + ' para comprovar a execução:'));
    d.appendChild(G.codeBox(code, { wa: waResultText(mission.t, stats.score, stats.acc, code), rows: 5 }));
    G.modal({
      title: '✅ O.S. concluída',
      html: d, locked: true,
      buttons: [{ label: 'Voltar ao ativo', cls: 'primary', cb: function () { G.go('s-map'); } }]
    });
  };
})(typeof window !== 'undefined' ? window : globalThis);
