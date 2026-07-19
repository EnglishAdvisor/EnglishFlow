/* LIFE FLOW — databook.js
   Data Book do aluno: domínio por competência, progresso por casa,
   checklist can-do e histórico de testes. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const DB = DF.DB = {};

  function bar(pct, color) {
    return '<div class="bar"><div class="fill" style="width:' + pct + '%;background:' +
      (color || (pct >= 75 ? 'var(--good)' : pct >= 50 ? 'var(--ac)' : 'var(--bad)')) + '"></div></div>';
  }

  DB.render = function () {
    const c = DF.$('#s-databook .content');
    c.innerHTML = '';
    c.appendChild(DF.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="DF.go(\'s-map\')">← Mapa</button><h2>📘 Data Book</h2>'));

    const cnt = DF.SRS.counts();
    const top = DF.el('div', 'panel db-top');
    top.innerHTML =
      '<div class="db-stat"><b>' + (DF.state.name || '—') + '</b><span>aluno</span></div>' +
      '<div class="db-stat"><b>' + cnt.seen + '</b><span>itens vistos</span></div>' +
      '<div class="db-stat"><b>' + cnt.mast + '</b><span>dominados</span></div>' +
      '<div class="db-stat' + (cnt.ncs ? ' warn' : '') + '"><b>' + cnt.ncs + '</b><span>NCs abertas</span></div>';
    c.appendChild(top);

    // domínio por competência
    const pc = DF.el('div', 'panel');
    pc.appendChild(DF.el('h3', '', '🎯 Domínio por competência'));
    const cs = DF.SRS.catStats();
    const keys = Object.keys(cs);
    if (!keys.length) pc.appendChild(DF.el('p', 'muted', 'Complete missões para alimentar o Data Book.'));
    keys.forEach(function (k) {
      const v = cs[k];
      const pct = v.total ? Math.round(100 * v.ok / v.total) : 0;
      const info = DF.CATS[k] || { label: k, e: '❔' };
      const row = DF.el('div', 'cat-row');
      row.innerHTML = '<span class="cat-lbl">' + info.e + ' ' + info.label + '</span>' +
        bar(pct) + '<span class="cat-pct">' + pct + '%</span>';
      pc.appendChild(row);
    });
    c.appendChild(pc);

    // progresso por casa
    const pu = DF.el('div', 'panel');
    pu.appendChild(DF.el('h3', '', '🏘️ Progresso no bairro'));
    Object.keys(DF.UNITS).forEach(function (k) {
      const u = DF.UNITS[k];
      if (!DF.isUnlocked(u.n)) return;
      const prog = DF.unitDone(u.n);
      const row = DF.el('div', 'cat-row unit-row-db');
      row.innerHTML = '<span class="cat-lbl">' + u.icon + ' U' + u.n + ' · ' + 'parada ' + u.depth + '</span>' +
        bar(prog.pct, u.ac) + '<span class="cat-pct">' + prog.done + '/' + prog.total + '</span>';
      pu.appendChild(row);
    });
    if (!Object.keys(DF.state.unlocked).length) {
      pu.appendChild(DF.el('p', 'muted', 'Nenhuma casa desbloqueada ainda.'));
    }
    c.appendChild(pu);

    // checklist can-do
    const anyCheck = Object.keys(DF.state.check || {}).length;
    if (anyCheck) {
      const pk = DF.el('div', 'panel');
      pk.appendChild(DF.el('h3', '', '☑️ Autoavaliação (Checklists)'));
      Object.keys(DF.state.check).forEach(function (u) {
        const arr = DF.state.check[u] || [];
        const data = DF.UNIT_DATA[u];
        const stmts = data && data.checklist ? data.checklist : [];
        const uMeta = DF.UNITS[u];
        pk.appendChild(DF.el('div', 'db-check-unit', (uMeta ? uMeta.icon + ' Unit ' + u : 'Unit ' + u)));
        arr.forEach(function (lvl, i) {
          const row = DF.el('div', 'db-check-row');
          const em = lvl === 2 ? '🟢' : lvl === 1 ? '🟡' : '🔴';
          row.innerHTML = em + ' <span>' + DF.esc(stmts[i] || 'item ' + (i + 1)) + '</span>';
          pk.appendChild(row);
        });
      });
      c.appendChild(pk);
    }

    // histórico de testes
    const pt = DF.el('div', 'panel');
    pt.appendChild(DF.el('h3', '', '📋 Testes e exames'));
    if (!DF.state.tests.length) {
      pt.appendChild(DF.el('p', 'muted', 'Nenhum teste executado. O mentor envia a ordem (TST…) pelo WhatsApp.'));
    }
    DF.state.tests.slice().reverse().forEach(function (t) {
      const row = DF.el('div', 'roster-row');
      const kindName = t.k === 'blk' ? '🚨 Review' : t.k === 'fin' ? '🏆 Final Test' : '📋 Unit ' + t.us.join(',');
      row.innerHTML = '<span class="nm">' + kindName + '</span><span class="mt muted">' + t.d + '</span><b>' + t.sc + '</b>';
      const re = DF.el('button', 'btn ghost small', '📋 Código');
      re.onclick = function () {
        DF.modal({
          title: 'Comprovação — ' + kindName,
          html: DF.codeBox(t.code, {
            wa: '🏘️ LIFE FLOW · comprovação ' + kindName + ' — ' + t.sc + '/1000\n\n' + t.code,
            waTo: DF.WHATSAPP, rows: 6
          }),
          buttons: [{ label: 'Fechar', cls: 'ghost' }]
        });
      };
      row.appendChild(re);
      pt.appendChild(row);
    });
    c.appendChild(pt);

    DF.go('s-databook');
  };
})(typeof window !== 'undefined' ? window : globalThis);
