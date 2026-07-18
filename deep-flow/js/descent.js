/* DEEP FLOW — descent.js
   O mapa vertical da descida: céu → FPSO → coluna d'água → leito → reservatório.
   HUD de profundidade, riser lateral, 15 estações e airlocks de Block Exam. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const DES = DF.DES = {};

  const PX_PER_M = 1.75;       // escala vertical
  const TOP_PAD = 560;         // céu + FPSO antes de 0 m
  const BOTTOM_PAD = 620;      // reservatório

  function y(m) { return TOP_PAD + m * PX_PER_M; }

  // ---------------- SVGs inline ----------------
  function svgFPSO() {
    return '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="40" y="120" width="600" height="42" rx="8" fill="#22303c"/>' +
      '<rect x="40" y="112" width="600" height="14" rx="6" fill="#2e3f4e"/>' +
      '<rect x="90" y="70" width="70" height="46" rx="4" fill="#33465a"/>' +
      '<rect x="98" y="78" width="12" height="8" fill="#ffd98a" class="win"/>' +
      '<rect x="118" y="78" width="12" height="8" fill="#ffd98a" class="win"/>' +
      '<rect x="98" y="94" width="12" height="8" fill="#ffd98a" class="win"/>' +
      '<rect x="200" y="86" width="120" height="30" fill="#3a4d61"/>' +
      '<rect x="350" y="80" width="90" height="36" fill="#31424f"/>' +
      '<circle cx="480" cy="98" r="17" fill="#31424f"/>' +
      '<rect x="560" y="30" width="8" height="88" fill="#4a5b6b"/>' +
      '<path class="flame" d="M564 30 C575 12 560 8 566 -6 C550 6 556 16 552 26 Z" fill="#f59e0b"/>' +
      '<path class="flame2" d="M564 26 C570 16 562 10 565 2 C556 10 560 18 557 24 Z" fill="#fbbf24"/>' +
      '</svg>';
  }
  function svgHeli() {
    return '<svg width="80" height="36" viewBox="0 0 80 36" xmlns="http://www.w3.org/2000/svg">' +
      '<rect class="rotor" x="4" y="4" width="40" height="3" rx="1.5" fill="#9fb4c6"/>' +
      '<ellipse cx="24" cy="18" rx="17" ry="9" fill="#22303c"/>' +
      '<rect x="38" y="14" width="24" height="5" rx="2" fill="#22303c"/>' +
      '<rect x="58" y="8" width="4" height="12" fill="#22303c"/>' +
      '<circle cx="18" cy="17" r="4" fill="#ffd98a"/>' +
      '<rect x="12" y="27" width="26" height="2.5" rx="1" fill="#40536a"/></svg>';
  }
  function svgROV() {
    return '<svg width="110" height="64" viewBox="0 0 110 64" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="16" y="16" width="62" height="34" rx="8" fill="#2b3d4d" stroke="#48607a" stroke-width="2"/>' +
      '<circle cx="34" cy="33" r="8" fill="#a8d8ff" opacity=".9"/>' +
      '<rect x="20" y="8" width="54" height="7" rx="3" fill="#f59e0b"/>' +
      '<rect x="80" y="26" width="12" height="14" rx="3" fill="#22303c"/>' +
      '<path class="cone" d="M86 33 L110 22 L110 44 Z" fill="rgba(255,235,170,.18)"/>' +
      '<circle cx="60" cy="33" r="5" fill="#48607a"/></svg>';
  }
  function svgFish(flip) {
    return '<svg viewBox="0 0 60 24" xmlns="http://www.w3.org/2000/svg"' + (flip ? ' style="transform:scaleX(-1)"' : '') + '>' +
      '<ellipse cx="26" cy="12" rx="16" ry="7" fill="#4a6b85"/>' +
      '<path d="M40 12 L54 4 L54 20 Z" fill="#3d5a70"/>' +
      '<circle cx="16" cy="10" r="2" fill="#0a1420"/></svg>';
  }
  function svgWellhead() {
    return '<svg viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M0 96 Q 90 76 190 92 T 420 90 T 700 94 L700 150 L0 150 Z" fill="#1d2a24"/>' +
      '<path d="M0 104 Q 120 90 260 100 T 700 102 L700 150 L0 150 Z" fill="#141d1a"/>' +
      '<rect x="318" y="30" width="34" height="66" rx="4" fill="#2e3f4e"/>' +
      '<rect x="308" y="22" width="54" height="12" rx="3" fill="#3a4d61"/>' +
      '<rect x="330" y="6" width="10" height="18" fill="#4a5b6b"/>' +
      '<circle cx="335" cy="60" r="9" fill="#f59e0b" opacity=".85"/>' +
      '<rect x="120" y="80" width="26" height="16" rx="3" fill="#26333f"/>' +
      '<rect x="540" y="82" width="30" height="14" rx="3" fill="#26333f"/>' +
      '<g opacity=".5"><path d="M60 96 q6 -14 0 -26" stroke="#3d5a50" stroke-width="3" fill="none"/>' +
      '<path d="M74 96 q-6 -10 0 -20" stroke="#3d5a50" stroke-width="3" fill="none"/></g></svg>';
  }
  function svgDrill() {
    return '<svg viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="52" y="0" width="16" height="110" fill="#4a5b6b"/>' +
      '<rect x="46" y="16" width="28" height="10" rx="3" fill="#5c7085"/>' +
      '<rect x="46" y="52" width="28" height="10" rx="3" fill="#5c7085"/>' +
      '<path class="bit" d="M40 110 L80 110 L72 136 L60 160 L48 136 Z" fill="#f59e0b"/>' +
      '<path d="M44 118 L76 118" stroke="#d97706" stroke-width="4"/></svg>';
  }

  // ---------------- construção do mundo ----------------
  DES.build = function () {
    const world = DF.$('#map-world');
    if (!world) return;
    world.innerHTML = '';
    const H = y(3000) + BOTTOM_PAD;
    world.style.height = H + 'px';

    // camadas decorativas
    const sky = DF.el('div', 'ly-sky');
    sky.innerHTML = '<div class="sun-disc"></div><div id="heli">' + svgHeli() + '</div>';
    world.appendChild(sky);

    const fpso = DF.el('div', 'ly-fpso');
    fpso.innerHTML = svgFPSO();
    fpso.style.top = (TOP_PAD - 235) + 'px';
    world.appendChild(fpso);

    const waves = DF.el('div', 'waveband');
    waves.style.top = (TOP_PAD - 78) + 'px';
    waves.innerHTML =
      '<svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M0 30 Q 75 8 150 30 T 300 30 T 450 30 T 600 30 T 750 30 T 900 30 T 1050 30 T 1200 30 L1200 60 L0 60 Z" fill="rgba(160,215,245,.28)"/></svg>';
    world.appendChild(waves);

    // raios de luz
    for (let i = 0; i < 3; i++) {
      const ray = DF.el('div', 'ray r' + (i + 1));
      ray.style.top = (TOP_PAD - 40) + 'px';
      world.appendChild(ray);
    }

    // peixes
    [[260, 54, 34, false], [820, 40, 46, true], [1500, 62, 40, false], [2300, 46, 52, true]].forEach(function (f, i) {
      const fish = DF.el('div', 'fish f' + (i + 1));
      fish.style.top = y(f[0]) + 'px';
      fish.style.width = f[1] + 'px';
      fish.style.animationDuration = f[2] + 's';
      fish.innerHTML = svgFish(f[3]);
      world.appendChild(fish);
    });

    // ROV acompanhando a região das units do meio
    const rov = DF.el('div', 'rov');
    rov.style.top = y(1250) + 'px';
    rov.innerHTML = svgROV();
    world.appendChild(rov);

    // leito marinho + wellhead
    const seabed = DF.el('div', 'ly-seabed');
    seabed.style.top = (y(3000) - 40) + 'px';
    seabed.innerHTML = svgWellhead();
    world.appendChild(seabed);

    // broca no reservatório
    const drill = DF.el('div', 'ly-drill');
    drill.style.top = (y(3000) + 120) + 'px';
    drill.innerHTML = svgDrill();
    world.appendChild(drill);

    const glow = DF.el('div', 'gold-glow');
    glow.style.top = (y(3000) + 60) + 'px';
    world.appendChild(glow);

    // ticks de profundidade no riser
    const riser = DF.$('#riser');
    if (riser) {
      DF.$$('.tick', riser).forEach(function (t) { t.remove(); });
    }

    // estações
    Object.keys(DF.UNITS).forEach(function (k) {
      const u = DF.UNITS[k];
      world.appendChild(stationNode(u, k % 2 === 0));
    });
    // airlocks (checkpoints)
    DF.CHECKPOINTS.forEach(function (cp) {
      world.appendChild(airlockNode(cp));
    });

    DES.refresh();
  };

  function stationNode(u, right) {
    const unlocked = DF.isUnlocked(u.n);
    const prog = DF.unitDone(u.n);
    const node = DF.el('button', 'station' + (right ? ' right' : '') +
      (unlocked ? ' open' : ' locked') + (prog.pct >= 100 ? ' complete' : ''));
    node.id = 'station-' + u.n;
    node.style.top = y(u.depth) + 'px';
    node.style.setProperty('--ua', u.ac);
    node.style.setProperty('--ua2', u.ac2);
    node.innerHTML =
      '<span class="st-depth">' + u.depth + ' m</span>' +
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
          html: 'Esta estação está na penumbra abissal.<br><br>Peça ao seu mentor o <b>código de desbloqueio (UNL…)</b> pelo WhatsApp e cole em <b>Códigos</b>.',
          buttons: [
            { label: 'Fechar', cls: 'ghost' },
            {
              label: '💬 Pedir ao mentor', cls: 'wa', cb: function () {
                window.open(DF.WA.link('🌊 DEEP FLOW: professor, pode liberar meu acesso à Unit ' + u.n + ' — ' + u.name + '? Aluno: ' + (DF.state.name || '—')), '_blank');
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

  function airlockNode(cp) {
    const node = DF.el('div', 'airlock');
    node.style.top = y(cp.depth) + 'px';
    const isFin = cp.id === 'fin';
    node.innerHTML =
      '<div class="al-line"></div>' +
      '<div class="al-badge">' + (isFin ? '🏆' : '🚨') + ' ' + cp.name +
      '<small>' + (isFin ? 'toda a descida · via código do mentor' : 'Units ' + cp.units.join('-') + ' · via código do mentor') + '</small></div>' +
      '<div class="al-line"></div>';
    node.onclick = function () {
      DF.modal({
        title: (isFin ? '🏆 ' : '🚨 ') + cp.name,
        html: (isFin
          ? 'A prova final da descida: mistura as 15 estações num cenário de certificação internacional.'
          : 'Simulação de crise misturando as Units ' + cp.units.join(', ') + '.') +
          '<br><br>O mentor emite a ordem de teste (<b>TST…</b>) quando você estiver pronto. Cole o código em <b>Códigos</b>.',
        buttons: [{ label: 'Entendi', cls: 'primary' }]
      });
    };
    return node;
  }

  // ---------------- HUD ----------------
  DES.refresh = function () {
    // reconstrução leve dos estados das estações
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

  DES.onScroll = function () {
    const scr = DF.$('#s-map');
    if (!scr || !scr.classList.contains('active')) return;
    const st = scr.scrollTop;
    const vh = scr.clientHeight;
    const m = DF.clamp(Math.round((st + vh * 0.42 - TOP_PAD) / PX_PER_M), 0, 3050);
    const dv = DF.$('#hud-depth .dv');
    if (dv) dv.textContent = (m < 0 ? 0 : m) + ' m';
    const cap = DF.$('#riser .cap');
    if (cap) {
      const total = y(3000) + BOTTOM_PAD - vh;
      cap.style.top = DF.clamp(100 * st / Math.max(1, total), 0, 100) + '%';
    }
  };

  DES.scrollToUnit = function (n) {
    const scr = DF.$('#s-map');
    const node = DF.$('#station-' + n);
    if (scr && node) {
      scr.scrollTop = Math.max(0, node.offsetTop - scr.clientHeight * 0.4);
    }
  };

  // primeira unit desbloqueada e não concluída (para foco inicial)
  DES.focusUnit = function () {
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
