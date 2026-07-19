/* LIFE FLOW — street.js
   O mapa vertical do bairro: entrada → rua residencial ao entardecer →
   praça final. HUD de parada, trilha lateral, 12 casas (units) e placas
   de review (checkpoints). */
(function (root) {
  const DF = root.DF = root.DF || {};
  const STR = DF.STR = {};

  const PX_PER_M = 190;        // escala vertical (1 "parada" = 190px)
  const TOP_PAD = 460;         // entrada do bairro antes da casa 1
  const BOTTOM_PAD = 560;      // praça final

  function y(m) { return TOP_PAD + m * PX_PER_M; }

  // ---------------- SVGs inline ----------------
  function svgHouseRow(lit) {
    let s = '<rect x="0" y="40" width="1200" height="90" fill="#0f2035"/>';
    const houses = [
      [20, 90, '#22405e'], [140, 70, '#1a3049'], [250, 100, '#22405e'],
      [390, 80, '#1a3049'], [510, 95, '#22405e'], [650, 75, '#1a3049'],
      [770, 100, '#22405e'], [910, 85, '#1a3049'], [1040, 95, '#22405e']
    ];
    houses.forEach(function (h, i) {
      const x = h[0], w = h[1], c = h[2];
      s += '<rect x="' + x + '" y="' + (130 - w * 0.6) + '" width="' + w + '" height="' + (w * 0.6) + '" fill="' + c + '"/>';
      s += '<polygon points="' + (x - 6) + ',' + (130 - w * 0.6) + ' ' + (x + w / 2) + ',' + (130 - w * 0.6 - 26) + ' ' + (x + w + 6) + ',' + (130 - w * 0.6) + '" fill="#16283f"/>';
      const winLit = lit && Math.random() < 0.5;
      s += '<rect class="win' + (winLit ? ' lit' : '') + '" x="' + (x + w * 0.22) + '" y="' + (130 - w * 0.42) + '" width="' + (w * 0.18) + '" height="' + (w * 0.2) + '" fill="' + (winLit ? '#fbe08a' : '#0d1b2c') + '"/>';
      s += '<rect class="win' + (winLit ? ' lit' : '') + '" x="' + (x + w * 0.6) + '" y="' + (130 - w * 0.42) + '" width="' + (w * 0.18) + '" height="' + (w * 0.2) + '" fill="' + (winLit ? '#fbe08a' : '#0d1b2c') + '"/>';
    });
    return '<svg viewBox="0 0 1200 140" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
  }
  function svgLamp() {
    return '<svg width="26" height="70" viewBox="0 0 26 70" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="11" y="14" width="4" height="56" fill="#0f2035"/>' +
      '<circle cx="13" cy="10" r="10" fill="#fbe08a" opacity=".85"/>' +
      '<circle cx="13" cy="10" r="16" fill="rgba(251,224,138,.25)"/></svg>';
  }
  function svgKite() {
    return '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">' +
      '<polygon points="20,2 38,20 20,38 2,20" fill="#c8e63c" opacity=".85"/>' +
      '<line x1="20" y1="20" x2="20" y2="60" stroke="rgba(255,255,255,.3)" stroke-width="1"/></svg>';
  }
  function svgSquare() {
    return '<svg viewBox="0 0 700 200" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">' +
      '<ellipse cx="350" cy="170" rx="320" ry="26" fill="#0f2035"/>' +
      '<circle cx="350" cy="110" r="46" fill="none" stroke="rgba(200,230,60,.5)" stroke-width="3"/>' +
      '<circle cx="350" cy="110" r="6" fill="#c8e63c"/>' +
      '<rect x="200" y="150" width="14" height="30" fill="#22405e"/>' +
      '<rect x="486" y="150" width="14" height="30" fill="#22405e"/>' +
      '<circle cx="207" cy="140" r="10" fill="#c8e63c" opacity=".8"/>' +
      '<circle cx="493" cy="140" r="10" fill="#c8e63c" opacity=".8"/>' +
      '<text x="350" y="196" font-size="15" fill="#7ec8d4" font-family="Arial Narrow, Arial" letter-spacing="3" text-anchor="middle">ENGLISHFLOW</text>' +
      '</svg>';
  }

  // ---------------- construção do mundo ----------------
  STR.build = function () {
    const world = DF.$('#map-world');
    if (!world) return;
    world.innerHTML = '';
    const nUnits = Object.keys(DF.UNITS).length;
    const H = y(nUnits) + BOTTOM_PAD;
    world.style.height = H + 'px';

    const sky = DF.el('div', 'ly-sky');
    sky.innerHTML = '<div class="sun-disc"></div><div id="heli">' + svgKite() + '</div>';
    world.appendChild(sky);

    for (let i = 0; i < 3; i++) {
      const ray = DF.el('div', 'ray r' + (i + 1));
      ray.style.top = (TOP_PAD - 40) + 'px';
      world.appendChild(ray);
    }

    [[260, 30], [820, 40]].forEach(function (f) {
      const bird = DF.el('div', 'bird');
      bird.style.top = f[0] + 'px';
      bird.style.animationDuration = f[1] + 's';
      bird.textContent = '🐦';
      world.appendChild(bird);
    });

    // fileira de casas decorativa a cada ~1.5 "quarteirão"
    for (let i = 0; i < Math.ceil(nUnits / 2) + 1; i++) {
      const row = DF.el('div', 'ly-houses');
      row.style.top = (TOP_PAD - 40 + i * (PX_PER_M * 2)) + 'px';
      row.innerHTML = svgHouseRow(i > 0);
      world.appendChild(row);
    }

    // postes de luz
    for (let i = 0; i < nUnits; i++) {
      const lamp = DF.el('div', 'lamp');
      lamp.style.cssText = 'position:absolute;left:' + (i % 2 === 0 ? '78%' : '14%') + ';top:' + (y(i + 0.5) - 40) + 'px;pointer-events:none;';
      lamp.innerHTML = svgLamp();
      world.appendChild(lamp);
    }

    // praça final
    const square = DF.el('div', 'ly-square');
    square.style.top = (y(nUnits) + 120) + 'px';
    square.innerHTML = svgSquare();
    world.appendChild(square);

    const glow = DF.el('div', 'gold-glow');
    glow.style.top = (y(nUnits) + 80) + 'px';
    world.appendChild(glow);

    // casas (units)
    Object.keys(DF.UNITS).forEach(function (k) {
      const u = DF.UNITS[k];
      world.appendChild(houseNode(u, k % 2 === 0));
    });
    // placas de review (checkpoints)
    DF.CHECKPOINTS.forEach(function (cp) {
      world.appendChild(signNode(cp));
    });

    STR.refresh();
  };

  function houseNode(u, right) {
    const unlocked = DF.isUnlocked(u.n);
    const prog = DF.unitDone(u.n);
    const node = DF.el('button', 'station' + (right ? ' right' : '') +
      (unlocked ? ' open' : ' locked') + (prog.pct >= 100 ? ' complete' : ''));
    node.id = 'station-' + u.n;
    node.style.top = y(u.depth) + 'px';
    node.style.setProperty('--ua', u.ac);
    node.style.setProperty('--ua2', u.ac2);
    node.innerHTML =
      '<span class="st-depth">parada ' + u.depth + '</span>' +
      '<span class="st-icon">' + (unlocked ? u.icon : '🔒') + '</span>' +
      '<span class="st-info"><b>UNIT ' + u.n + '</b><span class="st-name">' + DF.esc(u.name) + '</span>' +
      '<span class="st-state">' + (unlocked
        ? (prog.pct >= 100 ? '⭐ concluída' : prog.done + '/' + prog.total + ' missões')
        : 'bloqueada — peça o código ao mentor') + '</span></span>';
    node.onclick = function () {
      if (!DF.isUnlocked(u.n)) {
        if (DF.AU) DF.AU.sfx('bad');
        DF.modal({
          title: '🔒 Unit ' + u.n + ' — ' + u.name,
          html: 'Esta casa ainda está com a porta trancada.<br><br>Peça ao seu mentor o <b>código de desbloqueio (UNL…)</b> pelo WhatsApp e cole em <b>Códigos</b>.',
          buttons: [
            { label: 'Fechar', cls: 'ghost' },
            {
              label: '💬 Pedir ao mentor', cls: 'wa', cb: function () {
                window.open(DF.WA.link('🏘️ LIFE FLOW: professor, pode liberar meu acesso à Unit ' + u.n + ' — ' + u.name + '? Aluno: ' + (DF.state.name || '—')), '_blank');
              }
            },
            { label: '🔑 Inserir código', cls: 'primary', cb: function () { DF.renderCodes(); } }
          ]
        });
        return;
      }
      if (DF.AU) DF.AU.sfx('sonar');
      DF.MIS.renderUnit(u.n);
    };
    return node;
  }

  function signNode(cp) {
    const node = DF.el('div', 'airlock');
    node.style.top = y(cp.depth) + 'px';
    const isFin = cp.id === 'fin';
    node.innerHTML =
      '<div class="al-line"></div>' +
      '<div class="al-badge">' + (isFin ? '🏆' : '🚨') + ' ' + cp.name +
      '<small>' + (isFin ? 'todo o bairro · via código do mentor' : 'Units ' + cp.units.join('-') + ' · via código do mentor') + '</small></div>' +
      '<div class="al-line"></div>';
    node.onclick = function () {
      DF.modal({
        title: (isFin ? '🏆 ' : '🚨 ') + cp.name,
        html: (isFin
          ? 'A prova final do bairro: mistura todas as 12 casas num cenário de certificação.'
          : 'Situações do dia a dia misturando as Units ' + cp.units.join(', ') + '.') +
          '<br><br>O mentor emite a ordem de teste (<b>TST…</b>) quando você estiver pronto. Cole o código em <b>Códigos</b>.',
        buttons: [{ label: 'Entendi', cls: 'primary' }]
      });
    };
    return node;
  }

  // ---------------- HUD ----------------
  STR.refresh = function () {
    Object.keys(DF.UNITS).forEach(function (k) {
      const u = DF.UNITS[k];
      const node = DF.$('#station-' + u.n);
      if (!node) return;
      const unlocked = DF.isUnlocked(u.n);
      const prog = DF.unitDone(u.n);
      node.className = 'station' + (u.n % 2 === 0 ? ' right' : '') +
        (unlocked ? ' open' : ' locked') + (prog.pct >= 100 ? ' complete' : '');
      DF.$('.st-icon', node).textContent = unlocked ? u.icon : '🔒';
      DF.$('.st-state', node).textContent = unlocked
        ? (prog.pct >= 100 ? '⭐ concluída' : prog.done + '/' + prog.total + ' missões')
        : 'bloqueada — peça o código ao mentor';
    });
    const ncBtn = DF.$('#hud-nc');
    if (ncBtn) {
      const n = DF.SRS.ncs().length;
      ncBtn.textContent = '🛠️ ' + n;
      ncBtn.classList.toggle('has', n > 0);
    }
  };

  STR.onScroll = function () {
    const scr = DF.$('#s-map');
    if (!scr || !scr.classList.contains('active')) return;
    const st = scr.scrollTop;
    const vh = scr.clientHeight;
    const nUnits = Object.keys(DF.UNITS).length;
    const m = DF.clamp(Math.round((st + vh * 0.42 - TOP_PAD) / PX_PER_M), 0, nUnits);
    const dv = DF.$('#hud-depth .dv');
    if (dv) dv.textContent = (m <= 0 ? 'Entrada' : 'parada ' + m);
    const cap = DF.$('#riser .cap');
    if (cap) {
      const total = y(nUnits) + BOTTOM_PAD - vh;
      cap.style.top = DF.clamp(100 * st / Math.max(1, total), 0, 100) + '%';
    }
  };

  STR.scrollToUnit = function (n) {
    const scr = DF.$('#s-map');
    const node = DF.$('#station-' + n);
    if (scr && node) {
      scr.scrollTop = Math.max(0, node.offsetTop - scr.clientHeight * 0.4);
    }
  };

  // primeira unit desbloqueada e não concluída (para foco inicial)
  STR.focusUnit = function () {
    let best = null;
    Object.keys(DF.UNITS).forEach(function (k) {
      const n = +k;
      if (DF.isUnlocked(n)) {
        const p = DF.unitDone(n);
        if (p.pct < 100 && (best == null || n < best)) best = n;
      }
    });
    return best;
  };
})(typeof window !== 'undefined' ? window : globalThis);
