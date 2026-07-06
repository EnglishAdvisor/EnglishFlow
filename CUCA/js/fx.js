/* A Maldição da Cuca — fx.js
   Cenários vivos (gradiente + silhuetas + partículas por bioma), explosões de
   partículas, confete, números flutuantes, tremor de tela e vinheta de dano. */
(function (root) {
  const G = root.G = root.G || {};
  const FX = G.FX = {};

  let bgC = null, bgX = null, fxC = null, fxX = null;
  let W = 0, H = 0, DPR = 1;
  let theme = { a: '#0a0d24', b: '#123324', glow: '#ffe08a', deco: 'moon' };
  let prevTheme = null, themeT = 1;
  let motes = [], sparks = [], confs = [];
  let stars = [];
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
    const srnd = G.mulberry(777);
    stars = [];
    for (let i = 0; i < 60; i++) stars.push({ x: srnd(), y: srnd() * 0.55, s: 0.5 + srnd() * 1.4, p: srnd() * 6.28 });
    seedMotes();
    if (!running) { running = true; requestAnimationFrame(loop); }
  };

  FX.setTheme = function (t) {
    if (!t) return;
    if (theme && t.a === theme.a && t.deco === theme.deco) return;
    prevTheme = theme; themeT = 0;
    theme = { a: t.a, b: t.b, glow: t.glow, deco: t.deco || 'motes' };
    seedMotes();
  };

  function seedMotes() {
    motes = [];
    const n = 34;
    for (let i = 0; i < n; i++) {
      motes.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00016,
        vy: -(0.00006 + Math.random() * 0.00028),
        s: 1 + Math.random() * 2.6,
        p: Math.random() * 6.28
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

    // estrelas + lua
    if (th.deco === 'moon' || th.deco === 'motes') {
      bgX.save();
      stars.forEach(function (s) {
        bgX.globalAlpha = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(t * 0.001 + s.p));
        bgX.fillStyle = '#ffffff';
        bgX.fillRect(s.x * W, s.y * H, s.s, s.s);
      });
      bgX.restore();
    }
    if (th.deco === 'moon') {
      const mx = W * 0.78, my = H * 0.18, mr = Math.min(W, H) * 0.09;
      const gl = bgX.createRadialGradient(mx, my, mr * 0.3, mx, my, mr * 3.2);
      gl.addColorStop(0, 'rgba(230,238,255,0.45)'); gl.addColorStop(1, 'rgba(230,238,255,0)');
      bgX.fillStyle = gl; bgX.fillRect(0, 0, W, H);
      bgX.fillStyle = '#e8eeff';
      bgX.beginPath(); bgX.arc(mx, my, mr, 0, 6.28); bgX.fill();
      bgX.fillStyle = 'rgba(160,170,200,0.5)';
      bgX.beginPath(); bgX.arc(mx - mr * 0.3, my - mr * 0.15, mr * 0.16, 0, 6.28); bgX.fill();
      bgX.beginPath(); bgX.arc(mx + mr * 0.25, my + mr * 0.28, mr * 0.11, 0, 6.28); bgX.fill();
    }

    // morros em silhueta (2 camadas)
    for (let L = 0; L < 2; L++) {
      const base = H * (0.72 + L * 0.13);
      const amp = 26 - L * 8;
      bgX.fillStyle = shade(b, 0.55 + L * 0.2);
      bgX.beginPath();
      bgX.moveTo(0, H);
      for (let x = 0; x <= W; x += 16) {
        bgX.lineTo(x, base + Math.sin(x * 0.006 + L * 9 + t * 0.00004) * amp + Math.sin(x * 0.019 + L * 3) * amp * 0.4);
      }
      bgX.lineTo(W, H);
      bgX.closePath(); bgX.fill();
    }

    // partículas do bioma
    const gc = hexRGB(th.glow);
    motes.forEach(function (m) {
      m.x += m.vx * W * 0.06; m.y += m.vy * (th.deco === 'embers' ? 2.2 : 1);
      m.p += 0.02;
      if (m.y < -0.05) { m.y = 1.05; m.x = Math.random(); }
      if (m.x < -0.05) m.x = 1.05;
      if (m.x > 1.05) m.x = -0.05;
      const px = m.x * W + Math.sin(m.p) * 8, py = m.y * H;
      let al = 0.25 + 0.3 * (0.5 + 0.5 * Math.sin(m.p * 2));
      bgX.fillStyle = 'rgba(' + gc[0] + ',' + gc[1] + ',' + gc[2] + ',' + al.toFixed(2) + ')';
      bgX.beginPath();
      if (th.deco === 'bubbles') {
        bgX.arc(px, py, m.s + 1.5, 0, 6.28);
        bgX.strokeStyle = bgX.fillStyle; bgX.lineWidth = 1; bgX.stroke();
      } else {
        bgX.arc(px, py, th.deco === 'embers' ? m.s * 0.8 : m.s, 0, 6.28);
        bgX.fill();
      }
    });

    // leve escurecida geral para legibilidade
    bgX.fillStyle = 'rgba(4,6,16,0.25)';
    bgX.fillRect(0, 0, W, H);
  }

  // ---------- camada de efeitos ----------
  FX.burst = function (x, y, opts) {
    opts = opts || {};
    const n = opts.n || 18;
    const cols = opts.colors || ['#ffd75c', '#ff9d5c', '#fff'];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.28, sp = (opts.speed || 3.2) * (0.4 + Math.random());
      sparks.push({
        x: x, y: y,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - (opts.up || 1),
        g: opts.grav == null ? 0.12 : opts.grav,
        life: 1, dec: 0.02 + Math.random() * 0.02,
        s: (opts.size || 3) * (0.5 + Math.random()),
        c: cols[Math.floor(Math.random() * cols.length)]
      });
    }
  };
  FX.confetti = function (n) {
    const cols = ['#ffd75c', '#5dff8f', '#5ce8ff', '#ff8ad4', '#9d7bff', '#ff9d5c'];
    for (let i = 0; i < (n || 90); i++) {
      confs.push({
        x: Math.random() * W, y: -20 - Math.random() * H * 0.4,
        vx: (Math.random() - 0.5) * 1.6, vy: 1.6 + Math.random() * 2.4,
        w: 5 + Math.random() * 5, h: 3 + Math.random() * 4,
        r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.25,
        c: cols[Math.floor(Math.random() * cols.length)], life: 1
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
    if (bgX) {
      if (!document.hidden) { drawBg(t); drawFx(); }
    }
    requestAnimationFrame(loop);
  }

  // ---------- números flutuantes (DOM) ----------
  FX.floatText = function (x, y, txt, cls) {
    const layer = G.$('#float-layer');
    if (!layer) return;
    const d = G.el('div', 'float-txt ' + (cls || ''), txt);
    d.style.left = x + 'px'; d.style.top = y + 'px';
    layer.appendChild(d);
    setTimeout(function () { d.remove(); }, 1300);
  };

  // ---------- tremor e vinheta ----------
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
