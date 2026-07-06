/* A Maldição da Cuca — monster.js
   Monstros 100% procedurais em canvas: os capangas nascem de uma semente
   (corpo-bolha, olhos, chifres, tentáculos), e cada lenda tem desenho próprio.
   Estados: idle (respira, pisca), hurt (clarão), attack (bote), die (dissolve). */
(function (root) {
  const G = root.G = root.G || {};
  const MON = G.MON = {};

  function hexRGB(h) {
    h = String(h).replace('#', '');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function mixc(h1, h2, t) {
    const a = hexRGB(h1), b = hexRGB(h2);
    return 'rgb(' + Math.round(G.lerp(a[0], b[0], t)) + ',' + Math.round(G.lerp(a[1], b[1], t)) + ',' + Math.round(G.lerp(a[2], b[2], t)) + ')';
  }

  // caminho de bolha orgânica suavizada
  function blobPath(ctx, pts, R, sqx, sqy) {
    const n = pts.length, P = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      const r = R * pts[i];
      P.push([Math.cos(a) * r * sqx, Math.sin(a) * r * sqy]);
    }
    ctx.beginPath();
    ctx.moveTo((P[n - 1][0] + P[0][0]) / 2, (P[n - 1][1] + P[0][1]) / 2);
    for (let i = 0; i < n; i++) {
      const p = P[i], q = P[(i + 1) % n];
      ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
    }
    ctx.closePath();
  }

  function eye(ctx, x, y, r, blink, opts) {
    opts = opts || {};
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, blink ? 0.12 : 1);
    ctx.fillStyle = opts.sclera || '#fff';
    ctx.beginPath(); ctx.ellipse(0, 0, r, r * 1.05, 0, 0, 6.28); ctx.fill();
    if (!blink) {
      ctx.fillStyle = opts.pupil || '#1a1226';
      const px = opts.lookX == null ? -r * 0.18 : opts.lookX, py = opts.lookY == null ? r * 0.22 : opts.lookY;
      if (opts.slit) {
        ctx.save(); ctx.translate(px, py);
        ctx.beginPath(); ctx.ellipse(0, 0, r * 0.16, r * 0.62, 0, 0, 6.28); ctx.fill();
        ctx.restore();
      } else {
        ctx.beginPath(); ctx.arc(px, py, r * (opts.pr || 0.42), 0, 6.28); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.beginPath(); ctx.arc(px + r * 0.12, py - r * 0.14, r * 0.12, 0, 6.28); ctx.fill();
      }
    }
    ctx.restore();
    if (opts.brow) {
      ctx.strokeStyle = opts.pupil || '#1a1226';
      ctx.lineWidth = 3; ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x - r * 0.9, y - r * (opts.brow === 2 ? 0.7 : 1.25));
      ctx.lineTo(x + r * 0.9, y - r * (opts.brow === 2 ? 1.25 : 0.7));
      ctx.stroke();
    }
  }

  function flame(ctx, x, y, w, h, t, seed, cA, cB) {
    // chama viva com camadas
    for (let L = 0; L < 3; L++) {
      const f = 1 - L * 0.3;
      ctx.fillStyle = L === 2 ? '#fff6d8' : L === 1 ? (cB || '#ffb35c') : (cA || '#ff6a2a');
      ctx.beginPath();
      ctx.moveTo(x - w * f / 2, y);
      const n = 5;
      for (let i = 0; i <= n; i++) {
        const fx = x - w * f / 2 + (w * f) * (i / n);
        const wob = Math.sin(t * 9 + seed + i * 2.1) * h * 0.09;
        const fy = y - Math.sin((i / n) * Math.PI) * h * f - (i === Math.floor(n / 2) ? h * f * 0.25 + wob : wob * 0.6);
        ctx.lineTo(fx, fy);
      }
      ctx.closePath(); ctx.fill();
    }
  }

  function crown(ctx, x, y, w) {
    ctx.fillStyle = '#ffd75c';
    ctx.beginPath();
    ctx.moveTo(x - w / 2, y);
    ctx.lineTo(x - w / 2, y - w * 0.32);
    ctx.lineTo(x - w * 0.25, y - w * 0.14);
    ctx.lineTo(x, y - w * 0.42);
    ctx.lineTo(x + w * 0.25, y - w * 0.14);
    ctx.lineTo(x + w / 2, y - w * 0.32);
    ctx.lineTo(x + w / 2, y);
    ctx.closePath(); ctx.fill();
  }

  // ============================================================
  MON.make = function (spec) {
    spec = spec || {};
    const rnd = G.mulberry((spec.seed || 1) >>> 0);
    const glow = spec.glow || '#9d7bff';
    const tint = G.pick(['#ff6b6b', '#6bd4ff', '#ffe66b', '#b06bff', '#6bff9e', '#ff9d5c'], rnd);
    const baseCol = spec.ghost ? '#cfe4ff' : mixc(glow, tint, 0.4);
    const F = {
      pts: [], eyes: 1 + Math.floor(rnd() * 3),
      mouth: Math.floor(rnd() * 3),
      spikes: rnd() < 0.45, horn: Math.floor(rnd() * 3),
      tents: 2 + Math.floor(rnd() * 3),
      blinkOff: rnd() * 10,
      light: spec.ghost ? '#f4faff' : mixc(baseCol, '#ffffff', 0.4),
      dark: spec.ghost ? '#7ba7d9' : mixc(baseCol, '#04040a', 0.45),
      mid: baseCol
    };
    for (let i = 0; i < 14; i++) F.pts.push(0.78 + rnd() * 0.44);

    const M = {
      spec: spec, phase: 0,
      t0: (typeof performance !== 'undefined' ? performance.now() : 0) - rnd() * 4000,
      hurtT: -9, atkT: -9, dieT: -9, dead: false
    };
    M.hurt = function () { M.hurtT = performance.now(); };
    M.attack = function () { M.atkT = performance.now(); };
    M.die = function (cb) {
      M.dieT = performance.now();
      setTimeout(function () { M.dead = true; if (cb) cb(); }, 750);
    };
    M.setPhase = function (p) { M.phase = p; };

    M.draw = function (ctx, w, h) {
      const now = performance.now();
      const t = (now - M.t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      if (M.dead) return;

      const dieP = M.dieT > 0 ? G.clamp((now - M.dieT) / 750, 0, 1) : 0;
      const hurtP = G.clamp(1 - (now - M.hurtT) / 280, 0, 1);
      const atkP = G.clamp((now - M.atkT) / 420, 0, 1);
      const atkS = atkP < 1 ? Math.sin(atkP * Math.PI) : 0;

      const s = (Math.min(w, h) / 270) * (spec.boss ? 1.32 : 1.02) * (spec.elite ? 1.14 : 1);
      ctx.save();
      ctx.translate(w / 2 + (hurtP > 0 ? (Math.random() - 0.5) * 10 : 0),
        h * 0.54 + (hurtP > 0 ? (Math.random() - 0.5) * 8 : 0));
      ctx.scale(s * (1 + atkS * 0.22), s * (1 + atkS * 0.22));
      if (dieP > 0) {
        ctx.globalAlpha = 1 - dieP;
        ctx.translate((Math.random() - 0.5) * 20 * dieP, (Math.random() - 0.5) * 20 * dieP);
        ctx.scale(1 + dieP * 0.15, 1 - dieP * 0.1);
      }

      // sombra no chão
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.beginPath(); ctx.ellipse(0, 108, 70, 14, 0, 0, 6.28); ctx.fill();

      const bob = Math.sin(t * 2.1) * (spec.ghost ? 10 : 5);
      ctx.translate(0, bob + atkS * -14);

      if (spec.boss && BOSS[spec.boss]) {
        BOSS[spec.boss](ctx, t, M.phase, F, rnd);
      } else {
        drawBlob(ctx, t, F, spec);
      }

      // clarão de dano (tinge só os pixels já desenhados)
      if (hurtP > 0) {
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle = 'rgba(255,255,255,' + (hurtP * 0.75).toFixed(2) + ')';
        ctx.fillRect(-w, -h, w * 2, h * 2);
        ctx.globalCompositeOperation = 'source-over';
      }
      ctx.restore();
    };
    return M;
  };

  // ---------- capanga genérico ----------
  function drawBlob(ctx, t, F, spec) {
    const sq = 1 + 0.035 * Math.sin(t * 3.2);
    const blink = Math.sin(t * 0.9 + F.blinkOff) > 0.965;

    // tentáculos ou rabinhos de fantasma
    ctx.strokeStyle = F.dark;
    ctx.lineWidth = spec.ghost ? 7 : 9;
    ctx.lineCap = 'round';
    const nT = spec.ghost ? 3 : F.tents;
    for (let i = 0; i < nT; i++) {
      const bx = -40 + (80 / Math.max(1, nT - 1)) * i;
      const sw = Math.sin(t * 2.6 + i * 1.7) * 12;
      ctx.beginPath();
      ctx.moveTo(bx, 55);
      ctx.quadraticCurveTo(bx + sw, 85, bx + sw * 1.6, spec.ghost ? 96 : 104);
      ctx.stroke();
    }

    // corpo
    if (spec.ghost) ctx.globalAlpha *= 0.85;
    const gr = ctx.createRadialGradient(-18, -30, 8, 0, 0, 95);
    gr.addColorStop(0, F.light); gr.addColorStop(0.55, F.mid); gr.addColorStop(1, F.dark);
    ctx.fillStyle = gr;
    blobPath(ctx, F.pts, 66, sq, 2 - sq);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.lineWidth = 3; ctx.stroke();

    // espinhos
    if (F.spikes && !spec.ghost) {
      ctx.fillStyle = F.dark;
      for (let i = 0; i < 7; i++) {
        const a = -2.5 + i * 0.32;
        const r = 66 * F.pts[(i + 2) % F.pts.length];
        const x = Math.cos(a) * r * sq, y = Math.sin(a) * r * (2 - sq);
        ctx.save(); ctx.translate(x, y); ctx.rotate(a + Math.PI / 2);
        ctx.beginPath(); ctx.moveTo(-6, 0); ctx.lineTo(0, -16); ctx.lineTo(6, 0); ctx.closePath(); ctx.fill();
        ctx.restore();
      }
    }
    // chifres / orelhas
    if (F.horn === 1 && !spec.ghost) {
      ctx.fillStyle = mixc(F.dark, '#fff', 0.25);
      [-1, 1].forEach(function (d) {
        ctx.beginPath();
        ctx.moveTo(d * 26, -52); ctx.quadraticCurveTo(d * 44, -78, d * 30, -88);
        ctx.quadraticCurveTo(d * 34, -66, d * 14, -58);
        ctx.closePath(); ctx.fill();
      });
    } else if (F.horn === 2) {
      ctx.fillStyle = F.mid;
      [-1, 1].forEach(function (d) {
        ctx.beginPath(); ctx.ellipse(d * 38, -58, 13, 20, d * 0.5, 0, 6.28); ctx.fill();
      });
    }

    // olhos
    const er = F.eyes === 1 ? 17 : 11;
    const exs = F.eyes === 1 ? [0] : F.eyes === 2 ? [-20, 20] : [-26, 0, 26];
    exs.forEach(function (ex, i) {
      eye(ctx, ex, -18 - (F.eyes === 3 && i === 1 ? 10 : 0), er, blink,
        spec.ghost ? { sclera: '#eaf4ff', pupil: '#26365c', brow: 2 } : { brow: F.spikes ? 1 : 0 });
    });

    // boca
    ctx.strokeStyle = spec.ghost ? '#26365c' : '#1a1226';
    ctx.fillStyle = ctx.strokeStyle;
    ctx.lineWidth = 4; ctx.lineCap = 'round';
    if (spec.ghost) {
      ctx.beginPath(); ctx.ellipse(0, 20, 9, 12 + 3 * Math.sin(t * 3), 0, 0, 6.28); ctx.fill();
    } else if (F.mouth === 0) {
      ctx.beginPath(); ctx.arc(0, 12, 24, 0.25, Math.PI - 0.25); ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.moveTo(-12, 24); ctx.lineTo(-6, 33); ctx.lineTo(0, 24); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(4, 25); ctx.lineTo(10, 33); ctx.lineTo(16, 24); ctx.closePath(); ctx.fill();
    } else if (F.mouth === 1) {
      ctx.beginPath(); ctx.moveTo(-24, 22);
      for (let i = 1; i <= 6; i++) ctx.lineTo(-24 + i * 8, 22 + (i % 2 ? 7 : 0));
      ctx.stroke();
    } else {
      ctx.beginPath(); ctx.ellipse(0, 22, 10, 13, 0, 0, 6.28); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.fillRect(-6, 14, 12, 5);
    }

    if (spec.elite) crown(ctx, 0, -70, 46);
    if (spec.ghost) ctx.globalAlpha = 1;
  }

  // ---------- chefes (lendas) ----------
  const BOSS = {};

  BOSS.saci = function (ctx, t, ph) {
    const hop = -Math.abs(Math.sin(t * 3)) * 10;
    ctx.save(); ctx.translate(0, hop);
    // redemoinho
    ctx.save(); ctx.translate(0, 88 - hop);
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = 'rgba(230,210,180,' + (0.5 - i * 0.09) + ')';
      ctx.lineWidth = 5 - i;
      ctx.beginPath();
      ctx.ellipse(0, i * 9, 46 - i * 9, 8 - i, Math.sin(t * 6 + i) * 0.15, t * 5 + i, t * 5 + i + 4.6);
      ctx.stroke();
    }
    ctx.restore();
    // perna única
    ctx.strokeStyle = '#4a2c17'; ctx.lineWidth = 13; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(0, 40); ctx.lineTo(0, 84); ctx.stroke();
    ctx.fillStyle = '#3a2210';
    ctx.beginPath(); ctx.ellipse(8, 86, 17, 8, 0, 0, 6.28); ctx.fill();
    // shortinho vermelho
    ctx.fillStyle = '#c0392b';
    ctx.beginPath(); ctx.ellipse(0, 36, 24, 16, 0, 0, 6.28); ctx.fill();
    // corpo
    const gr = ctx.createRadialGradient(-10, -20, 5, 0, 0, 70);
    gr.addColorStop(0, '#7a4a24'); gr.addColorStop(1, '#3d2410');
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.ellipse(0, 8, 30, 34, 0, 0, 6.28); ctx.fill();
    // cabeça
    ctx.beginPath(); ctx.arc(0, -42, 34, 0, 6.28); ctx.fill();
    // orelhas
    ctx.beginPath(); ctx.ellipse(-32, -46, 8, 12, -0.3, 0, 6.28); ctx.fill();
    ctx.beginPath(); ctx.ellipse(32, -46, 8, 12, 0.3, 0, 6.28); ctx.fill();
    // gorro vermelho
    ctx.fillStyle = ph >= 1 ? '#ff5c4d' : '#d63c2a';
    ctx.beginPath();
    ctx.moveTo(-30, -62); ctx.quadraticCurveTo(0, -84, 30, -62);
    ctx.quadraticCurveTo(34, -88, 52, -92);
    ctx.quadraticCurveTo(30, -96, 8, -84);
    ctx.quadraticCurveTo(-14, -92, -30, -62);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(54, -92, 6 + Math.sin(t * 4) * 1.2, 0, 6.28); ctx.fill();
    if (ph >= 1) {
      ctx.fillStyle = 'rgba(255,120,80,0.25)';
      ctx.beginPath(); ctx.arc(0, -76, 46, 0, 6.28); ctx.fill();
    }
    // olhos marotos
    const wink = Math.sin(t * 1.4) > 0.93;
    eye(ctx, -13, -46, 9, false, { brow: 1 });
    eye(ctx, 13, -46, 9, wink, { brow: 2 });
    // sorriso
    ctx.strokeStyle = '#1a0d05'; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(2, -34, 15, 0.3, Math.PI - 0.5); ctx.stroke();
    // cachimbo
    ctx.strokeStyle = '#2a1608'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-14, -28); ctx.lineTo(-30, -18); ctx.stroke();
    ctx.fillStyle = '#2a1608';
    ctx.beginPath(); ctx.ellipse(-33, -20, 6, 7, 0, 0, 6.28); ctx.fill();
    // fumaça
    for (let i = 0; i < 3; i++) {
      const sp = (t * 0.5 + i * 0.33) % 1;
      ctx.fillStyle = 'rgba(220,220,230,' + (0.4 * (1 - sp)) + ')';
      ctx.beginPath(); ctx.arc(-34 - sp * 10, -28 - sp * 34, 4 + sp * 7, 0, 6.28); ctx.fill();
    }
    ctx.restore();
  };

  BOSS.curupira = function (ctx, t, ph) {
    // pés ao contrário (calcanhar pra frente) + setas
    ctx.fillStyle = '#5a3a1e';
    [-18, 18].forEach(function (fx, i) {
      const step = Math.sin(t * 2.4 + i * Math.PI) * 3;
      ctx.save(); ctx.translate(fx, 92 + step);
      ctx.beginPath(); ctx.ellipse(0, 0, 15, 7, 0, 0, 6.28); ctx.fill();
      ctx.beginPath(); ctx.arc(i === 0 ? 11 : -11, -2, 6, 0, 6.28); ctx.fill();
      ctx.restore();
    });
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 2;
    [-18, 18].forEach(function (fx) {
      ctx.beginPath(); ctx.moveTo(fx - 6, 104); ctx.lineTo(fx + 6, 104);
      ctx.moveTo(fx + 6, 104); ctx.lineTo(fx + 2, 100);
      ctx.moveTo(fx + 6, 104); ctx.lineTo(fx + 2, 108);
      ctx.stroke();
    });
    // pernas
    ctx.strokeStyle = '#6b4326'; ctx.lineWidth = 11; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-14, 52); ctx.lineTo(-18, 86); ctx.moveTo(14, 52); ctx.lineTo(18, 86); ctx.stroke();
    // corpo
    const gr = ctx.createRadialGradient(-8, -10, 5, 0, 10, 75);
    gr.addColorStop(0, '#5fae5a'); gr.addColorStop(1, '#1e5c2f');
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.ellipse(0, 18, 34, 40, 0, 0, 6.28); ctx.fill();
    // braços cruzados
    ctx.strokeStyle = '#2e7a3e'; ctx.lineWidth = 12;
    ctx.beginPath(); ctx.moveTo(-30, 4); ctx.quadraticCurveTo(0, 22, 28, 8); ctx.stroke();
    // cabeça
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.arc(0, -34, 32, 0, 6.28); ctx.fill();
    // cabelo de fogo
    flame(ctx, 0, -52, 62, 44 + (ph >= 1 ? 16 : 0) , t, 1.7, ph >= 1 ? '#ff3d2a' : '#ff6a2a', '#ffb35c');
    // olhos
    eye(ctx, -12, -36, 9.5, Math.sin(t + 2) > 0.96, { brow: ph >= 1 ? 1 : 0 });
    eye(ctx, 12, -36, 9.5, Math.sin(t + 2) > 0.96, { brow: ph >= 1 ? 2 : 0 });
    // sorriso com presinhas
    ctx.strokeStyle = '#0d2a14'; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.arc(0, -24, 14, 0.4, Math.PI - 0.4); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.moveTo(-9, -18); ctx.lineTo(-5, -11); ctx.lineTo(-1, -18); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(3, -18); ctx.lineTo(7, -11); ctx.lineTo(11, -18); ctx.closePath(); ctx.fill();
  };

  BOSS.iara = function (ctx, t, ph) {
    // água
    ctx.fillStyle = 'rgba(30,120,150,0.75)';
    ctx.beginPath();
    ctx.moveTo(-95, 70);
    for (let x = -95; x <= 95; x += 10) ctx.lineTo(x, 70 + Math.sin(x * 0.08 + t * 2.4) * 4);
    ctx.lineTo(95, 110); ctx.lineTo(-95, 110);
    ctx.closePath(); ctx.fill();
    // cauda
    ctx.strokeStyle = '#1e8a7a'; ctx.lineWidth = 16; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(30, 72); ctx.quadraticCurveTo(66, 58 + Math.sin(t * 2) * 6, 62, 34); ctx.stroke();
    ctx.fillStyle = '#2aa38f';
    ctx.save(); ctx.translate(62, 30); ctx.rotate(Math.sin(t * 2) * 0.2);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-13, -22); ctx.lineTo(0, -13); ctx.lineTo(13, -22); ctx.closePath(); ctx.fill();
    ctx.restore();
    // torso
    const gr = ctx.createLinearGradient(0, -70, 0, 70);
    gr.addColorStop(0, '#8fd9c8'); gr.addColorStop(1, '#2a7a8f');
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.ellipse(-6, 34, 24, 42, 0.1, 0, 6.28); ctx.fill();
    // cabeça
    ctx.beginPath(); ctx.arc(-6, -18, 27, 0, 6.28); ctx.fill();
    // cabelo longo ondulante
    ctx.strokeStyle = ph >= 1 ? '#0d4a3e' : '#0d3a34';
    ctx.lineWidth = 9; ctx.lineCap = 'round';
    for (let i = 0; i < 5; i++) {
      const hx = -30 + i * 12;
      ctx.beginPath();
      ctx.moveTo(hx * 0.6 - 6, -40);
      ctx.quadraticCurveTo(hx - 10 + Math.sin(t * 1.8 + i) * 10, 10, hx - 4 + Math.sin(t * 1.8 + i + 1) * 14, 66 - (ph >= 1 ? 18 : 0));
      ctx.stroke();
    }
    // flor no cabelo
    ctx.fillStyle = '#ff8ad4';
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * 6.28;
      ctx.beginPath(); ctx.arc(-26 + Math.cos(a) * 5, -38 + Math.sin(a) * 5, 4, 0, 6.28); ctx.fill();
    }
    ctx.fillStyle = '#ffd75c';
    ctx.beginPath(); ctx.arc(-26, -38, 3, 0, 6.28); ctx.fill();
    // rosto
    eye(ctx, -15, -20, 7.5, Math.sin(t * 0.8) > 0.94, { pr: 0.5 });
    eye(ctx, 5, -20, 7.5, Math.sin(t * 0.8) > 0.94, { pr: 0.5 });
    ctx.strokeStyle = '#0d2a2e'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(-5, -8, 7, 0.4, Math.PI - 0.4); ctx.stroke();
    // notas musicais subindo
    ctx.fillStyle = 'rgba(220,255,250,0.9)';
    ctx.font = '20px serif';
    for (let i = 0; i < 3; i++) {
      const np = ((t * (ph >= 1 ? 0.6 : 0.35)) + i * 0.33) % 1;
      ctx.globalAlpha = 1 - np;
      ctx.fillText(i % 2 ? '♪' : '♫', 18 + i * 16 + Math.sin(np * 8) * 6, -20 - np * 70);
    }
    ctx.globalAlpha = 1;
  };

  BOSS.boto = function (ctx, t, ph) {
    const sway = Math.sin(t * 1.6) * 0.05;
    ctx.save(); ctx.rotate(sway);
    // cauda
    ctx.fillStyle = '#e87ab0';
    ctx.beginPath(); ctx.moveTo(0, 78); ctx.lineTo(-26, 102); ctx.lineTo(0, 92); ctx.lineTo(26, 102); ctx.closePath(); ctx.fill();
    // corpo capsular
    const gr = ctx.createLinearGradient(-40, 0, 50, 0);
    gr.addColorStop(0, '#ff9ec4'); gr.addColorStop(1, '#d15a92');
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.ellipse(0, 14, 40, 68, 0, 0, 6.28); ctx.fill();
    // barriga
    ctx.fillStyle = 'rgba(255,235,244,0.75)';
    ctx.beginPath(); ctx.ellipse(-4, 26, 24, 46, 0, 0, 6.28); ctx.fill();
    // nadadeira dorsal
    ctx.fillStyle = '#c04a80';
    ctx.beginPath(); ctx.moveTo(34, -6); ctx.quadraticCurveTo(58, -18, 44, 12); ctx.closePath(); ctx.fill();
    // nadadeira acenando
    ctx.save(); ctx.translate(-34, 22); ctx.rotate(-0.5 + Math.sin(t * 3.2) * 0.45);
    ctx.fillStyle = '#e87ab0';
    ctx.beginPath(); ctx.ellipse(0, -14, 9, 20, 0, 0, 6.28); ctx.fill();
    ctx.restore();
    // focinho longo
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.ellipse(-8, -52, 30, 26, 0, 0, 6.28); ctx.fill();
    ctx.beginPath(); ctx.ellipse(-30, -42, 20, 10, -0.35, 0, 6.28); ctx.fill();
    // sorriso
    ctx.strokeStyle = '#7a2a52'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(-22, -44, 14, 0.5, 1.9); ctx.stroke();
    // olho charmoso (meia pálpebra)
    eye(ctx, 2, -56, 9, false, { pr: 0.5 });
    ctx.fillStyle = '#d15a92';
    ctx.beginPath(); ctx.rect(-8, -68, 20, 7); ctx.fill();
    // CHAPÉU branco de malandro
    ctx.save(); ctx.translate(4, -74); ctx.rotate(-0.12 + Math.sin(t * 1.2) * 0.05 + (ph >= 1 ? -0.14 : 0));
    ctx.fillStyle = '#f6f2ea';
    ctx.beginPath(); ctx.ellipse(0, 0, 38, 9, 0, 0, 6.28); ctx.fill();
    ctx.beginPath(); ctx.ellipse(0, -12, 22, 14, 0, 0, 6.28); ctx.fill();
    ctx.fillStyle = '#1a1226';
    ctx.fillRect(-22, -8, 44, 6);
    ctx.restore();
    // brilho
    const tw = (t * 0.8) % 1;
    ctx.fillStyle = 'rgba(255,255,255,' + (0.9 * (1 - tw)) + ')';
    ctx.save(); ctx.translate(34, -84); ctx.rotate(tw * 3);
    ctx.beginPath();
    for (let i = 0; i < 4; i++) { ctx.rotate(Math.PI / 2); ctx.lineTo(0, -7 * (1 - tw)); ctx.lineTo(2, -2); }
    ctx.closePath(); ctx.fill();
    ctx.restore();
    ctx.restore();
  };

  BOSS.mula = function (ctx, t, ph) {
    const gal = Math.sin(t * 3.4);
    // corpo de égua
    const gr = ctx.createLinearGradient(0, -40, 0, 60);
    gr.addColorStop(0, '#4a3226'); gr.addColorStop(1, '#241610');
    // pernas
    ctx.strokeStyle = '#241610'; ctx.lineWidth = 11; ctx.lineCap = 'round';
    [[-38, -20], [-16, 6], [16, -6], [38, 20]].forEach(function (L, i) {
      ctx.beginPath();
      ctx.moveTo(L[0], 42);
      ctx.lineTo(L[0] + Math.sin(t * 3.4 + i * 1.6) * 6, 88);
      ctx.stroke();
    });
    // cascos
    ctx.fillStyle = '#585868';
    [[-38, 0], [-16, 1.6], [16, 3.2], [38, 4.8]].forEach(function (L) {
      ctx.beginPath(); ctx.ellipse(L[0] + Math.sin(t * 3.4 + L[1]) * 6, 90, 7, 5, 0, 0, 6.28); ctx.fill();
    });
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.ellipse(0, 22 + gal * 2, 58, 34, 0, 0, 6.28); ctx.fill();
    // pescoço (toco) — sem cabeça
    ctx.beginPath(); ctx.ellipse(-40, -8 + gal * 2, 20, 26, -0.5, 0, 6.28); ctx.fill();
    // FOGO no lugar da cabeça
    flame(ctx, -50, -22 + gal * 2, 52, 70 + (ph >= 1 ? 22 : 0), t, 4.2, '#ff4a1e', '#ffb35c');
    // crina de fogo
    flame(ctx, -8, -6 + gal * 2, 60, 26, t, 8.9, '#ff6a2a', '#ffd75c');
    // rabo de fogo
    flame(ctx, 56, 10 + gal * 2, 24, 42, t, 6.1, '#ff6a2a', '#ffb35c');
    // brasas subindo
    for (let i = 0; i < 4; i++) {
      const p = ((t * 0.7) + i * 0.25) % 1;
      ctx.fillStyle = 'rgba(255,170,90,' + (0.8 * (1 - p)) + ')';
      ctx.beginPath(); ctx.arc(-50 + Math.sin(p * 9 + i) * 14, -30 - p * 60, 2.5, 0, 6.28); ctx.fill();
    }
    if (ph >= 1) {
      ctx.fillStyle = 'rgba(255,80,30,0.18)';
      ctx.beginPath(); ctx.arc(-46, -30, 70, 0, 6.28); ctx.fill();
    }
  };

  BOSS.lobisomem = function (ctx, t, ph) {
    // lua atrás (fase da lua = fase da batalha)
    ctx.save();
    ctx.translate(-62, -78);
    ctx.fillStyle = '#e8eeff';
    ctx.beginPath(); ctx.arc(0, 0, 26, 0, 6.28); ctx.fill();
    if (ph < 2) {
      ctx.fillStyle = '#151d3d';
      ctx.beginPath(); ctx.arc(ph === 0 ? 12 : 20, 0, 24, 0, 6.28); ctx.fill();
    } else {
      ctx.fillStyle = 'rgba(232,238,255,0.25)';
      ctx.beginPath(); ctx.arc(0, 0, 38 + Math.sin(t * 3) * 3, 0, 6.28); ctx.fill();
    }
    ctx.restore();
    const breathe = 1 + 0.03 * Math.sin(t * 2.6);
    // corpo peludo curvado
    const gr = ctx.createRadialGradient(0, -10, 10, 0, 10, 90);
    gr.addColorStop(0, '#7d87a8'); gr.addColorStop(1, '#2c3452');
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.ellipse(4, 18, 52 * breathe, 58, 0.15, 0, 6.28); ctx.fill();
    // pelos (traços na silhueta)
    ctx.strokeStyle = '#232a45'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
    for (let i = 0; i < 26; i++) {
      const a = -2.9 + i * 0.23;
      const r = 55 * breathe;
      const x = 4 + Math.cos(a) * r, y = 18 + Math.sin(a) * (r + 6);
      const wig = Math.sin(t * 5 + i) * 1.5;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(a) * (9 + wig), y + Math.sin(a) * (9 + wig));
      ctx.stroke();
    }
    // cabeça
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.ellipse(0, -40, 34, 30, 0, 0, 6.28); ctx.fill();
    // orelhas
    ctx.fillStyle = '#2c3452';
    ctx.beginPath(); ctx.moveTo(-28, -58); ctx.lineTo(-36, -86); ctx.lineTo(-12, -66); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(28, -58); ctx.lineTo(36, -86); ctx.lineTo(12, -66); ctx.closePath(); ctx.fill();
    // focinho
    ctx.fillStyle = '#a8b0c8';
    ctx.beginPath(); ctx.ellipse(0, -26, 17, 13, 0, 0, 6.28); ctx.fill();
    ctx.fillStyle = '#151d3d';
    ctx.beginPath(); ctx.ellipse(0, -32, 6, 4.5, 0, 0, 6.28); ctx.fill();
    // presas
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.moveTo(-10, -20); ctx.lineTo(-7, -11); ctx.lineTo(-4, -20); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(4, -20); ctx.lineTo(7, -11); ctx.lineTo(10, -20); ctx.closePath(); ctx.fill();
    // olhos
    const ec = ph >= 2 ? '#ff5d5d' : '#ffd75c';
    eye(ctx, -14, -46, 8, Math.sin(t * 0.85) > 0.96, { sclera: ec, pupil: '#151d3d', slit: true, brow: 1 });
    eye(ctx, 14, -46, 8, Math.sin(t * 0.85) > 0.96, { sclera: ec, pupil: '#151d3d', slit: true, brow: 2 });
    // garras
    ctx.fillStyle = '#e8eeff';
    [-1, 1].forEach(function (d) {
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(d * (34 + i * 8), 58);
        ctx.lineTo(d * (37 + i * 8), 74);
        ctx.lineTo(d * (40 + i * 8), 58);
        ctx.closePath(); ctx.fill();
      }
    });
  };

  BOSS.cuca = function (ctx, t, ph) {
    ctx.save(); ctx.scale(1.12, 1.12);
    // aura do pesadelo
    if (ph >= 1) {
      ctx.fillStyle = 'rgba(157,255,122,' + (0.08 + 0.05 * Math.sin(t * 4)) + ')';
      ctx.beginPath(); ctx.arc(0, -10, 105, 0, 6.28); ctx.fill();
    }
    // corpo/manto roxo
    const gr = ctx.createLinearGradient(0, -40, 0, 80);
    gr.addColorStop(0, '#7a4aa8'); gr.addColorStop(1, '#2c1245');
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.moveTo(-52, 78);
    ctx.quadraticCurveTo(-58, -8, -30, -32);
    ctx.quadraticCurveTo(0, -46, 30, -32);
    ctx.quadraticCurveTo(58, -8, 52, 78);
    ctx.closePath(); ctx.fill();
    // cabeça de jacaré
    const gg = ctx.createLinearGradient(0, -100, 0, -20);
    gg.addColorStop(0, '#5fae5a'); gg.addColorStop(1, '#2a6e35');
    ctx.fillStyle = gg;
    ctx.beginPath(); ctx.ellipse(0, -66, 40, 30, 0, 0, 6.28); ctx.fill();
    // focinho
    ctx.beginPath(); ctx.ellipse(0, -42, 30, 18, 0, 0, 6.28); ctx.fill();
    // narinas
    ctx.fillStyle = '#12331a';
    ctx.beginPath(); ctx.ellipse(-8, -48, 3, 4, 0, 0, 6.28); ctx.fill();
    ctx.beginPath(); ctx.ellipse(8, -48, 3, 4, 0, 0, 6.28); ctx.fill();
    // boca larga com dentes
    ctx.strokeStyle = '#12331a'; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.arc(0, -40, 24, 0.35, Math.PI - 0.35); ctx.stroke();
    ctx.fillStyle = '#fff';
    for (let i = 0; i < 5; i++) {
      const tx = -16 + i * 8;
      ctx.beginPath(); ctx.moveTo(tx, -29 + Math.abs(i - 2)); ctx.lineTo(tx + 3, -22 + Math.abs(i - 2)); ctx.lineTo(tx + 6, -29 + Math.abs(i - 2)); ctx.closePath(); ctx.fill();
    }
    // cabelo loiro desgrenhado
    ctx.strokeStyle = '#e8c04a'; ctx.lineWidth = 7; ctx.lineCap = 'round';
    for (let i = 0; i < 9; i++) {
      const a = -2.75 + i * 0.31;
      const wild = ph >= 1 ? 14 : 8;
      const wig = Math.sin(t * 2.2 + i * 1.9) * wild;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 34, -66 + Math.sin(a) * 26);
      ctx.quadraticCurveTo(Math.cos(a) * 60 + wig, -66 + Math.sin(a) * 52,
        Math.cos(a) * 52 + wig * 1.4, -66 + Math.sin(a) * 66 + 10);
      ctx.stroke();
    }
    // olhos amarelos de pálpebra pesada
    const ec = ph >= 2 ? '#ff5d5d' : '#ffd75c';
    const sleepy = Math.sin(t * 0.55) > 0.9;
    eye(ctx, -16, -70, 10.5, sleepy, { sclera: ec, pupil: '#12331a', slit: true });
    eye(ctx, 16, -70, 10.5, sleepy, { sclera: ec, pupil: '#12331a', slit: true });
    ctx.fillStyle = '#2a6e35';
    ctx.beginPath(); ctx.rect(-27, -84, 22, 7); ctx.fill();
    ctx.beginPath(); ctx.rect(5, -84, 22, 7); ctx.fill();
    // brincos
    ctx.strokeStyle = '#ffd75c'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(-42, -58, 6, 0, 6.28); ctx.stroke();
    ctx.beginPath(); ctx.arc(42, -58, 6, 0, 6.28); ctx.stroke();
    // caldeirão
    ctx.fillStyle = '#1a1226';
    ctx.beginPath(); ctx.ellipse(0, 74, 46, 18, 0, 0, Math.PI); ctx.fill();
    ctx.beginPath(); ctx.rect(-46, 60, 92, 15); ctx.fill();
    ctx.fillStyle = '#26183a';
    ctx.beginPath(); ctx.ellipse(0, 60, 46, 12, 0, 0, 6.28); ctx.fill();
    // líquido verde
    ctx.fillStyle = '#6ee85f';
    ctx.beginPath(); ctx.ellipse(0, 60, 38, 8, 0, 0, 6.28); ctx.fill();
    // bolhas
    const speed = ph >= 2 ? 1.3 : ph >= 1 ? 0.9 : 0.55;
    for (let i = 0; i < 5; i++) {
      const p = ((t * speed) + i * 0.2) % 1;
      ctx.fillStyle = 'rgba(157,255,122,' + (0.85 * (1 - p)) + ')';
      ctx.beginPath();
      ctx.arc(-26 + i * 13 + Math.sin(p * 7 + i) * 5, 56 - p * 34, 2.5 + p * 4, 0, 6.28);
      ctx.fill();
    }
    ctx.restore();
  };

  // fantasminha da Cuca para o Desafio Diário
  BOSS.sombra = function (ctx, t, ph, F) {
    ctx.globalAlpha *= 0.9;
    BOSS.cuca(ctx, t, 0, F);
    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = 'rgba(60,30,110,0.55)';
    ctx.fillRect(-200, -200, 400, 400);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
  };
})(typeof window !== 'undefined' ? window : globalThis);
