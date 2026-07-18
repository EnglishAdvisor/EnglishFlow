/* DEEP FLOW — glossary.js
   Glossário consultável: acumula as keywords das estações desbloqueadas.
   Definições autorais em inglês + tradução PT (apoio: dicionário offshore). */
(function (root) {
  const DF = root.DF = root.DF || {};
  const GL = DF.GLOS = {};

  GL.entries = function () {
    const out = [];
    Object.keys(DF.UNITS).forEach(function (k) {
      const n = +k;
      if (!DF.isUnlocked(n)) return;
      const data = DF.UNIT_DATA[n];
      if (!data || !data.glossary) return;
      data.glossary.forEach(function (g) {
        out.push(Object.assign({ u: n }, g));
      });
    });
    out.sort(function (a, b) { return a.en.localeCompare(b.en); });
    return out;
  };

  GL.render = function () {
    const c = DF.$('#s-glossary .content');
    c.innerHTML = '';
    c.appendChild(DF.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="DF.go(\'s-map\')">← Mapa</button><h2>🗝️ Glossário</h2>'));

    const inp = DF.el('input', 'inp glos-search');
    inp.placeholder = '🔎 Buscar termo (EN ou PT)…';
    c.appendChild(inp);

    const list = DF.el('div', 'glos-list');
    c.appendChild(list);

    const all = GL.entries();
    function draw(q) {
      list.innerHTML = '';
      const nq = DF.norm(q || '');
      const shown = all.filter(function (g) {
        if (!nq) return true;
        return DF.norm(g.en).indexOf(nq) >= 0 || DF.norm(g.pt).indexOf(nq) >= 0 ||
          DF.norm(g.def || '').indexOf(nq) >= 0;
      });
      if (!all.length) {
        list.appendChild(DF.el('p', 'muted center',
          'O glossário cresce com a descida:<br>desbloqueie estações para acumular keywords. 🌊'));
        return;
      }
      if (!shown.length) {
        list.appendChild(DF.el('p', 'muted center', 'Nenhum termo encontrado para “' + DF.esc(q) + '”.'));
        return;
      }
      shown.forEach(function (g) {
        const uMeta = DF.UNITS[g.u];
        const row = DF.el('div', 'glos-row');
        row.innerHTML =
          '<div class="glos-head"><b>' + DF.esc(g.en) + '</b>' +
          '<span class="glos-unit" style="color:' + uMeta.ac + '">U' + g.u + '</span></div>' +
          '<div class="glos-pt">🇧🇷 ' + DF.esc(g.pt) + '</div>' +
          (g.def ? '<div class="glos-def">' + DF.esc(g.def) + '</div>' : '');
        if (DF.SP.ttsAvailable()) {
          row.appendChild(DF.SP.listenBtn(g.en, { label: '🔊' }));
        }
        list.appendChild(row);
      });
    }
    inp.addEventListener('input', function () { draw(inp.value); });
    draw('');
    DF.go('s-glossary');
  };
})(typeof window !== 'undefined' ? window : globalThis);
