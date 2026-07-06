/* FIRST OIL — fx.js
   Cenários industriais vivos: céu em gradiente, skyline procedural de planta
   (tanques, torres, chaminés com beacons piscando), mar animado nas unidades
   offshore — mais partículas, confete, tremor e vinheta de alarme. */
(function (root) {
  const G = root.G = root.G || {};
  const FX = G.FX = {};

  let bgC = null, bgX = null, fxC = null, fxX = null;
  let W = 0, H = 0, DPR = 1;
  let theme = { a: '#0a0f1e', b: '#1a2a4a', glow: '#ffd75c', deco: 'plant' };
  let prevTheme = null, themeT = 1;
  let motes = [], sparks = [], confs = [], stars = [], skyline = [];
  let running = false;

  function resize() {
    if (!bgC) return;
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = Math.max(1, window.innerWidth); H = Math.max(1, window.innerHeight);
    [bgC, fxC].forEach(function (c) {
      c.width = Math.floor(W * DPR); c.height = Math.floor(H * DPR);
      c.style.width = W + 'px'; c.style.height = H + 'px';
    });
    bgX.setTransform(DPR, 0, 0, DPR, 0, 0);
    fxX.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  FX.init = function (bgCanvas, fxCanvas) {
    bgC = bgCanvas; fxC = fxCanvas;
    bgX = bgC.getContext('2d'); fxX = fxC.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    const srnd = G.mulberry(2026);
    stars = [];
    for (let i = 0; i < 70; i++) stars.push({ x: srnd(), y: srnd() * 0.5, s: 0.5 + srnd() * 1.3, p: srnd() * 6.28 });
    rebuild();
    if (!running) { running = true; requestAnimationFrame(loop); }
  };

  FX.setTheme = function (t) {
    if (!t) return;
    if (theme && t.a === theme.a && t.deco === theme.deco) return;
    prevTheme = theme; themeT = 0;
    theme = { a: t.a, b: t.b, glow: t.glow, deco: t.deco || 'plant' };
    rebuild();
  };

  function rebuild() {
    const rnd = G.mulberry(G.hashStr('sky:' + theme.a + theme.deco));
    skyline = [];
    let x = -0.04;
    while (x < 1.06) {
      const kind = Math.floor(rnd() * 5); // 0 tanque, 1 torre, 2 chaminé, 3 pipe-rack, 4 guindaste/derrick
      const w = kind === 0 ? 0.05 + rnd() * 0.05 : kind === 3 ? 0.08 + rnd() * 0.06 : 0.012 + rnd() * 0.02;
      const h = kind === 0 ? 0.05 + rnd() * 0.04 : kind === 3 ? 0.03 : 0.10 + rnd() * 0.16;
      skyline.push({ k: kind, x: x, w: w, h: h, ph: rnd() * 6.28, smoke: kind === 2 && rnd() < 0.7 });
      x += w + 0.015 + rnd() * 0.05;
    }
    motes = [];
    for (let i = 0; i < 30; i++) {
      motes.push({
        x: Math.random(), y: Math.random(),
        vy: -(0.00005 + Math.random() * 0.0002),
        s: 0.8 + Math.random() * 2, p: Math.random() * 6.28
      });
    }
  }

  function hexRGB(h) {
    h = h.replace('#', '');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function mix(h1, h2, t) {
    const a = hexRGB(h1), b = hexRGB(h2);
    return 'rgb(' + Math.round(G.lerp(a[0], b[0], t)) + ',' + Math.round(G.lerp(a[1], b[1], t)) + ',' + Math.round(G.lerp(a[2], b[2], t)) + ')';
  }
  function shade(hex, f) { return mix(hex, '#000000', f); }

  function drawBg(t) {
    if (themeT < 1) themeT = Math.min(1, themeT + 0.02);
    const th = theme;
    const a = prevTheme && themeT < 1 ? mix(prevTheme.a, th.a, themeT) : th.a;
    const b = prevTheme && themeT < 1 ? mix(prevTheme.b, th.b, themeT) : th.b;
    const gr = bgX.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, a); gr.addColorStop(1, b);
    bgX.fillStyle = gr; bgX.fillRect(0, 0, W, H);

    // estrelas
    stars.forEach(function (s) {
      bgX.globalAlpha = 0.2 + 0.3 * (0.5 + 0.5 * Math.sin(t * 0.0012 + s.p));
      bgX.fillStyle = '#ffffff';
      bgX.fillRect(s.x * W, s.y * H, s.s, s.s);
    });
    bgX.globalAlpha = 1;

    const sea = th.deco === 'sea';
    const horizon = sea ? H * 0.66 : H * 0.78;
    const sil = shade(b, 0.62);

    // skyline industrial em silhueta
    bgX.fillStyle = sil;
    skyline.forEach(function (s) {
      const sx = s.x * W, sw = s.w * W, sh = s.h * H, by = horizon;
      if (s.k === 0) { // tanque
        bgX.beginPath();
        bgX.moveTo(sx, by); bgX.lineTo(sx, by - sh + 6);
        bgX.quadraticCurveTo(sx + sw / 2, by - sh - 8, sx + sw, by - sh + 6);
        bgX.lineTo(sx + sw, by); bgX.closePath(); bgX.fill();
      } else if (s.k === 3) { // pipe-rack
        bgX.fillRect(sx, by - sh, sw, sh);
        bgX.fillRect(sx + sw * 0.15, by - sh - 5, 3, sh);
        bgX.fillRect(sx + sw * 0.75, by - sh - 5, 3, sh);
      } else if (s.k === 4) { // derrick / guindaste
        bgX.beginPath();
        bgX.moveTo(sx - sw * 2, by); bgX.lineTo(sx + sw / 2, by - sh); bgX.lineTo(sx + sw * 3, by);
        bgX.closePath(); bgX.fill();
      } else { // torre / chaminé
        bgX.fillRect(sx, by - sh, sw, sh);
      }
      // beacon vermelho piscando nas estruturas altas
      if (s.h > 0.12) {
        const bl = 0.5 + 0.5 * Math.sin(t * 0.004 + s.ph);
        bgX.fillStyle = 'rgba(255,60,60,' + (bl * 0.9).toFixed(2) + ')';
        bgX.beginPath(); bgX.arc(sx + (s.k === 4 ? s.w * W / 2 : sw / 2), horizon - s.h * H - 4, 2.4, 0, 6.28);
        bgX.fill();
        bgX.fillStyle = sil;
      }
      // fumaça preguiçosa das chaminés
      if (s.smoke) {
        for (let i = 0; i < 3; i++) {
          const p = ((t * 0.00006) + i * 0.33 + s.ph) % 1;
          bgX.fillStyle = 'rgba(200,205,220,' + (0.12 * (1 - p)).toFixed(3) + ')';
          bgX.beginPath();
          bgX.arc(sx + sw / 2 + Math.sin(p * 5 + s.ph) * 14 + p * 20, horizon - s.h * H - 8 - p * 60, 4 + p * 12, 0, 6.28);
          bgX.fill();
        }
        bgX.fillStyle = sil;
      }
    });

    if (sea) {
      // mar
      const sg = bgX.createLinearGradient(0, horizon, 0, H);
      sg.addColorStop(0, shade(b, 0.35)); sg.addColorStop(1, shade(b, 0.7));
      bgX.fillStyle = sg;
      bgX.fillRect(0, horizon, W, H - horizon);
      // linhas de onda
      bgX.strokeStyle = 'rgba(255,255,255,0.09)';
      bgX.lineWidth = 1.5;
      for (let L = 0; L < 4; L++) {
        const wy = horizon + 14 + L * (H - horizon) * 0.2;
        bgX.beginPath();
        for (let x2 = 0; x2 <= W; x2 += 14) {
          bgX.lineTo(x2, wy + Math.sin(x2 * 0.012 + t * 0.0016 + L * 2) * (3 + L));
        }
        bgX.stroke();
      }
      // reflexo da lua/glow
      const gc = hexRGB(th.glow);
      for (let i = 0; i < 10; i++) {
        const gy = horizon + 8 + (i / 10) * (H - horizon) * 0.6;
        const gw = 20 + Math.sin(t * 0.002 + i * 3) * 12;
        bgX.fillStyle = 'rgba(' + gc[0] + ',' + gc[1] + ',' + gc[2] + ',' + (0.06 * (1 - i / 10)).toFixed(3) + ')';
        bgX.fillRect(W * 0.72 - gw / 2, gy, gw, 2);
      }
    } else {
      // pátio
      bgX.fillStyle = shade(b, 0.55);
      bgX.fillRect(0, horizon, W, H - horizon);
      bgX.strokeStyle = 'rgba(255,255,255,0.05)';
      bgX.lineWidth = 1;
      for (let i = 1; i < 5; i++) {
        const gy2 = horizon + (H - horizon) * (i / 5);
        bgX.beginPath(); bgX.moveTo(0, gy2); bgX.lineTo(W, gy2); bgX.stroke();
      }
    }

    // partículas (poeira/maresia iluminada)
    const gc2 = hexRGB(th.glow);
    motes.forEach(function (m) {
      m.y += m.vy; m.p += 0.015;
      if (m.y < -0.03) { m.y = 1.03; m.x = Math.random(); }
      bgX.fillStyle = 'rgba(' + gc2[0] + ',' + gc2[1] + ',' + gc2[2] + ',' +
        (0.14 + 0.14 * (0.5 + 0.5 * Math.sin(m.p * 2))).toFixed(2) + ')';
      bgX.beginPath();
      bgX.arc(m.x * W + Math.sin(m.p) * 6, m.y * H, m.s, 0, 6.28);
      bgX.fill();
    });

    // escurecida para legibilidade
    bgX.fillStyle = 'rgba(3,5,12,0.32)';
    bgX.fillRect(0, 0, W, H);
  }

  // ---------- camada de efeitos ----------
  FX.burst = function (x, y, opts) {
    opts = opts || {};
    const n = opts.n || 18;
    const cols = opts.colors || ['#ffc400', '#ff7a1a', '#fff'];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.28, sp = (opts.speed || 3.2) * (0.4 + Math.random());
      sparks.push({
        x: x, y: y,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1,
        g: 0.12, life: 1, dec: 0.02 + Math.random() * 0.02,
        s: (opts.size || 3) * (0.5 + Math.random()),
        c: cols[Math.floor(Math.random() * cols.length)]
      });
    }
  };
  FX.confetti = function (n) {
    const cols = ['#ffc400', '#ff7a1a', '#57c7ff', '#6bffb0', '#ffffff', '#ffd75c'];
    for (let i = 0; i < (n || 90); i++) {
      confs.push({
        x: Math.random() * W, y: -20 - Math.random() * H * 0.4,
        vx: (Math.random() - 0.5) * 1.6, vy: 1.6 + Math.random() * 2.4,
        w: 5 + Math.random() * 5, h: 3 + Math.random() * 4,
        r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.25,
        c: cols[Math.floor(Math.random() * cols.length)]
      });
    }
  };

  function drawFx() {
    fxX.clearRect(0, 0, W, H);
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx; p.y += p.vy; p.vy += p.g; p.life -= p.dec;
      if (p.life <= 0) { sparks.splice(i, 1); continue; }
      fxX.globalAlpha = Math.max(0, p.life);
      fxX.fillStyle = p.c;
      fxX.beginPath(); fxX.arc(p.x, p.y, p.s * p.life, 0, 6.28); fxX.fill();
    }
    for (let i = confs.length - 1; i >= 0; i--) {
      const c = confs[i];
      c.x += c.vx + Math.sin(c.r * 3) * 0.4; c.y += c.vy; c.r += c.vr;
      if (c.y > H + 30) { confs.splice(i, 1); continue; }
      fxX.save();
      fxX.translate(c.x, c.y); fxX.rotate(c.r);
      fxX.globalAlpha = 0.95;
      fxX.fillStyle = c.c;
      fxX.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      fxX.restore();
    }
    fxX.globalAlpha = 1;
  }

  function loop(t) {
    if (bgX && !document.hidden) { drawBg(t); drawFx(); }
    requestAnimationFrame(loop);
  }

  FX.floatText = function (x, y, txt, cls) {
    const layer = G.$('#float-layer');
    if (!layer) return;
    const d = G.el('div', 'float-txt ' + (cls || ''), txt);
    d.style.left = x + 'px'; d.style.top = y + 'px';
    layer.appendChild(d);
    setTimeout(function () { d.remove(); }, 1300);
  };
  FX.shake = function (strong) {
    const app = G.$('#app');
    if (!app) return;
    app.classList.remove('shake', 'shake-hard');
    void app.offsetWidth;
    app.classList.add(strong ? 'shake-hard' : 'shake');
  };
  FX.vignette = function () {
    const v = G.$('#vignette');
    if (!v) return;
    v.classList.remove('on');
    void v.offsetWidth;
    v.classList.add('on');
  };
  FX.flash = function (color) {
    const f = G.$('#flash');
    if (!f) return;
    f.style.background = color || '#fff';
    f.classList.remove('on');
    void f.offsetWidth;
    f.classList.add('on');
  };
})(typeof window !== 'undefined' ? window : globalThis);
