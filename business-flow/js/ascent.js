/* BUSINESS FLOW — ascent.js
   O mapa vertical da subida: recepção → fachada da torre → andares
   corporativos → cobertura/boardroom. HUD de andar, elevador lateral,
   andares (units) e portões de Viewpoint/Final Test. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const ASC = DF.ASC = {};

  const PX_PER_M = 90;         // escala vertical (1 "andar" = 90px)
  const TOP_PAD = 480;         // recepção antes do andar 1
  const BOTTOM_PAD = 560;      // cobertura / boardroom

  function y(floor) { return TOP_PAD + floor * PX_PER_M; }
  function maxFloor() {
    const trail = DF.TRAILS[DF.state.trail || 'starter'];
    return trail ? Math.max.apply(null, Object.keys(trail.units).map(Number)) : 8;
  }

  // ---------------- SVGs inline ----------------
  function svgSkyline() {
    return '<svg viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">' +
      '<g fill="#241d3a">' +
      '<rect x="0" y="120" width="90" height="100"/><rect x="100" y="80" width="70" height="140"/>' +
      '<rect x="180" y="140" width="110" height="80"/><rect x="300" y="60" width="60" height="160"/>' +
      '<rect x="370" y="110" width="95" height="110"/><rect x="475" y="150" width="120" height="70"/>' +
      '<rect x="605" y="90" width="70" height="130"/><rect x="685" y="130" width="105" height="90"/>' +
      '<rect x="800" y="70" width="64" height="150"/><rect x="874" y="120" width="110" height="100"/>' +
      '<rect x="994" y="100" width="80" height="120"/><rect x="1084" y="150" width="116" height="70"/>' +
      '</g></svg>';
  }
  function svgDrone() {
    return '<svg width="70" height="26" viewBox="0 0 70 26" xmlns="http://www.w3.org/2000/svg">' +
      '<rect class="rotor" x="8" y="4" width="22" height="2" rx="1" fill="#2a2440"/>' +
      '<rect class="rotor" x="40" y="4" width="22" height="2" rx="1" fill="#2a2440"/>' +
      '<rect x="16" y="6" width="2" height="8" fill="#2a2440"/><rect x="52" y="6" width="2" height="8" fill="#2a2440"/>' +
      '<rect x="18" y="12" width="34" height="7" rx="3" fill="#2a2440"/>' +
      '<circle cx="35" cy="15" r="2" fill="#a78bfa"/></svg>';
  }
  function svgTowerFacade(rows) {
    const W = 300, cols = 6, pad = 20, gap = 6;
    const cw = (W - pad * 2 - gap * (cols - 1)) / cols, ch = 18;
    let s = '<rect x="10" y="0" width="280" height="' + (rows * (ch + 6) + 20) + '" fill="#1a1430"/>';
    s += '<rect x="10" y="0" width="280" height="' + (rows * (ch + 6) + 20) + '" fill="none" stroke="rgba(167,139,250,.15)" stroke-width="1"/>';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = pad + c * (cw + gap), yy = 14 + r * (ch + 6);
        const lit = Math.random() < 0.42;
        const fill = lit ? '#fbe08a' : '#241d3a';
        s += '<rect class="win' + (lit ? ' lit' : '') + '" x="' + x.toFixed(1) + '" y="' + yy + '" width="' + cw.toFixed(1) + '" height="' + ch + '" rx="1.5" fill="' + fill + '"/>';
      }
    }
    return '<svg viewBox="0 0 300 ' + (rows * (ch + 6) + 20) + '" preserveAspectRatio="xMidYMin meet" xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
  }
  function svgBoardroom() {
    return '<svg viewBox="0 0 760 240" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="150" y="150" width="460" height="90" fill="#1c1630"/>' +
      '<rect x="150" y="150" width="460" height="10" fill="#2a2240"/>' +
      '<rect x="250" y="70" width="260" height="82" rx="4" fill="rgba(167,139,250,.12)" stroke="rgba(167,139,250,.5)" stroke-width="1.5"/>' +
      '<ellipse cx="380" cy="120" rx="80" ry="15" fill="#2a2240"/>' +
      '<ellipse cx="380" cy="116" rx="80" ry="13" fill="#3a3055"/>' +
      '<g fill="#4a3f68"><circle cx="320" cy="108" r="7"/><circle cx="350" cy="102" r="7"/><circle cx="410" cy="102" r="7"/><circle cx="440" cy="108" r="7"/><circle cx="380" cy="100" r="7"/></g>' +
      '<circle cx="380" cy="132" r="8" fill="#a78bfa"/>' +
      '<circle cx="600" cy="196" r="30" fill="none" stroke="rgba(251,191,36,.6)" stroke-width="3"/>' +
      '<text x="600" y="206" font-size="26" fill="#fbbf24" font-family="Arial" font-weight="bold" text-anchor="middle">H</text>' +
      '<line x1="200" y1="150" x2="200" y2="90" stroke="#2a2240" stroke-width="4"/>' +
      '<circle cx="200" cy="88" r="4" fill="#fbbf24"/></svg>';
  }

  // ---------------- construção do mundo ----------------
  ASC.build = function () {
    const world = DF.$('#map-world');
    if (!world) return;
    world.innerHTML = '';
    const top = maxFloor();
    const H = y(top) + BOTTOM_PAD;
    world.style.height = H + 'px';

    const sky = DF.el('div', 'ly-sky');
    sky.innerHTML = '<div class="sun-disc"></div><div id="heli">' + svgDrone() + '</div>';
    world.appendChild(sky);

    // raios de luz
    for (let i = 0; i < 3; i++) {
      const ray = DF.el('div', 'ray r' + (i + 1));
      ray.style.top = (TOP_PAD - 40) + 'px';
      world.appendChild(ray);
    }

    // pássaros
    [[260, 32], [820, 44]].forEach(function (f, i) {
      const bird = DF.el('div', 'bird');
      bird.style.top = f[0] + 'px';
      bird.style.animationDuration = f[1] + 's';
      bird.textContent = '🐦';
      world.appendChild(bird);
    });

    // skyline base (recepção)
    const skyline = DF.el('div', 'ly-skyline');
    skyline.style.top = (TOP_PAD - 110) + 'px';
    skyline.innerHTML = svgSkyline();
    world.appendChild(skyline);

    // fachada da torre (janelas)
    const tower = DF.el('div', 'ly-tower');
    tower.style.top = (TOP_PAD - 60) + 'px';
    tower.innerHTML = svgTowerFacade(Math.round((y(top) - TOP_PAD + 200) / 24));
    world.appendChild(tower);

    // cobertura / boardroom no topo
    const roof = DF.el('div', 'ly-roof');
    roof.style.top = (y(top) + 140) + 'px';
    roof.innerHTML = svgBoardroom();
    world.appendChild(roof);

    const glow = DF.el('div', 'gold-glow');
    glow.style.top = (y(top) + 100) + 'px';
    world.appendChild(glow);

    // andares (units)
    Object.keys(DF.UNITS).forEach(function (k) {
      const u = DF.UNITS[k];
      world.appendChild(floorNode(u, k % 2 === 0));
    });
    // portões (checkpoints)
    DF.CHECKPOINTS.forEach(function (cp) {
      world.appendChild(gateNode(cp));
    });

    ASC.refresh();
  };

  function floorNode(u, right) {
    const unlocked = DF.isUnlocked(u.n);
    const prog = DF.unitDone(u.n);
    const node = DF.el('button', 'station' + (right ? ' right' : '') +
      (unlocked ? ' open' : ' locked') + (prog.pct >= 100 ? ' complete' : ''));
    node.id = 'station-' + u.n;
    node.style.top = y(u.depth) + 'px';
    node.style.setProperty('--ua', u.ac);
    node.style.setProperty('--ua2', u.ac2);
    node.innerHTML =
      '<span class="st-depth">' + u.depth + 'º andar</span>' +
      '<span class="st-icon">' + (unlocked ? u.icon : '🔒') + '</span>' +
      '<span class="st-info"><b>UNIT ' + u.n + '</b><span class="st-name">' + DF.esc(u.name) + '</span>' +
      '<span class="st-state">' + (unlocked
        ? (prog.pct >= 100 ? '⭐ concluída' : prog.done + '/' + prog.total + ' missões')
        : 'bloqueado — peça o código ao mentor') + '</span></span>';
    node.onclick = function () {
      if (!DF.isUnlocked(u.n)) {
        if (DF.AU) DF.AU.sfx('bad');
        DF.modal({
          title: '🔒 Unit ' + u.n + ' — ' + u.name,
          html: 'Este andar ainda está com o acesso restrito.<br><br>Peça ao seu mentor o <b>código de desbloqueio (UNL…)</b> pelo WhatsApp e cole em <b>Códigos</b>.',
          buttons: [
            { label: 'Fechar', cls: 'ghost' },
            {
              label: '💬 Pedir ao mentor', cls: 'wa', cb: function () {
                window.open(DF.WA.link('🏢 BUSINESS FLOW: professor, pode liberar meu acesso à Unit ' + u.n + ' — ' + u.name + '? Aluno: ' + (DF.state.name || '—')), '_blank');
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

  function gateNode(cp) {
    const node = DF.el('div', 'airlock');
    node.style.top = y(cp.depth) + 'px';
    const isFin = cp.id === 'fin';
    node.innerHTML =
      '<div class="al-line"></div>' +
      '<div class="al-badge">' + (isFin ? '🏆' : '🚨') + ' ' + cp.name +
      '<small>' + (isFin ? 'toda a trilha · via código do mentor' : 'Units ' + cp.units.join('-') + ' · via código do mentor') + '</small></div>' +
      '<div class="al-line"></div>';
    node.onclick = function () {
      DF.modal({
        title: (isFin ? '🏆 ' : '🚨 ') + cp.name,
        html: (isFin
          ? 'A prova final da trilha: mistura todas as units num cenário de certificação corporativa.'
          : 'Simulação corporativa misturando as Units ' + cp.units.join(', ') + '.') +
          '<br><br>O mentor emite a ordem de teste (<b>TST…</b>) quando você estiver pronto. Cole o código em <b>Códigos</b>.',
        buttons: [{ label: 'Entendi', cls: 'primary' }]
      });
    };
    return node;
  }

  // ---------------- HUD ----------------
  ASC.refresh = function () {
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
        : 'bloqueado — peça o código ao mentor';
    });
    const ncBtn = DF.$('#hud-nc');
    if (ncBtn) {
      const n = DF.SRS.ncs().length;
      ncBtn.textContent = '🛠️ ' + n;
      ncBtn.classList.toggle('has', n > 0);
    }
  };

  ASC.onScroll = function () {
    const scr = DF.$('#s-map');
    if (!scr || !scr.classList.contains('active')) return;
    const st = scr.scrollTop;
    const vh = scr.clientHeight;
    const top = maxFloor();
    const fl = DF.clamp(Math.round((st + vh * 0.42 - TOP_PAD) / PX_PER_M), 0, top);
    const dv = DF.$('#hud-depth .dv');
    if (dv) dv.textContent = (fl <= 0 ? 'Térreo' : fl + 'º andar');
    const cap = DF.$('#riser .cap');
    if (cap) {
      const total = y(top) + BOTTOM_PAD - vh;
      cap.style.top = DF.clamp(100 * st / Math.max(1, total), 0, 100) + '%';
    }
  };

  ASC.scrollToUnit = function (n) {
    const scr = DF.$('#s-map');
    const node = DF.$('#station-' + n);
    if (scr && node) {
      scr.scrollTop = Math.max(0, node.offsetTop - scr.clientHeight * 0.4);
    }
  };

  // primeira unit desbloqueada e não concluída (para foco inicial)
  ASC.focusUnit = function () {
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
