/* FIRST OIL — scene.js
   As "criaturas" deste jogo são instalações: 7 cenas industriais procedurais e
   animadas em canvas (sísmica, sonda com circulação de lama, FPSO, separador
   trifásico, duto com PIG, torre de destilação, sala de controle da auditoria).
   API compatível com a batalha: make() → draw / hurt / attack / die / setPhase. */
(function (root) {
  const G = root.G = root.G || {};
  const MON = G.MON = {};

  // espaço virtual: 440 x 250, origem no centro
  const VW = 440, VH = 250;

  function hexRGB(h) {
    h = String(h).replace('#', '');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function rgba(hex, a) {
    const c = hexRGB(hex);
    return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')';
  }

  // ---------- primitivas industriais ----------
  function flame(ctx, x, y, w, h, t, seed) {
    for (let L = 0; L < 3; L++) {
      const f = 1 - L * 0.3;
      ctx.fillStyle = L === 2 ? '#fff3c9' : L === 1 ? '#ffb35c' : '#ff6a2a';
      ctx.beginPath();
      ctx.moveTo(x - w * f / 2, y);
      for (let i = 0; i <= 5; i++) {
        const fx = x - w * f / 2 + (w * f) * (i / 5);
        const wob = Math.sin(t * 9 + seed + i * 2.1) * h * 0.1;
        ctx.lineTo(fx, y - Math.sin((i / 5) * Math.PI) * h * f - (i === 2 ? h * f * 0.3 + wob : wob * 0.5));
      }
      ctx.closePath(); ctx.fill();
    }
  }
  function pipe(ctx, pts, t, color, speed, width) {
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#20283a';
    ctx.lineWidth = (width || 6) + 3;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.lineWidth = width || 6;
    ctx.setLineDash([7, 9]);
    ctx.lineDashOffset = -t * (speed || 26);
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  function beacon(ctx, x, y, t, off, color) {
    const bl = 0.5 + 0.5 * Math.sin(t * 5 + (off || 0));
    ctx.fillStyle = rgba(color || '#ff4646', 0.25 + bl * 0.75);
    ctx.beginPath(); ctx.arc(x, y, 3, 0, 6.28); ctx.fill();
    ctx.fillStyle = rgba(color || '#ff4646', bl * 0.2);
    ctx.beginPath(); ctx.arc(x, y, 8, 0, 6.28); ctx.fill();
  }
  function tank(ctx, x, y, w, h, color) {
    ctx.fillStyle = color || '#2c3a52';
    ctx.beginPath();
    ctx.moveTo(x, y); ctx.lineTo(x, y - h + 5);
    ctx.quadraticCurveTo(x + w / 2, y - h - 7, x + w, y - h + 5);
    ctx.lineTo(x + w, y); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 3; i++) {
      ctx.beginPath(); ctx.moveTo(x, y - (h - 8) * i / 3); ctx.lineTo(x + w, y - (h - 8) * i / 3); ctx.stroke();
    }
  }
  function seaBand(ctx, y, t) {
    ctx.fillStyle = 'rgba(16,48,80,0.85)';
    ctx.beginPath();
    ctx.moveTo(-VW / 2, y);
    for (let x = -VW / 2; x <= VW / 2; x += 12) {
      ctx.lineTo(x, y + Math.sin(x * 0.05 + t * 2.2) * 3);
    }
    ctx.lineTo(VW / 2, VH / 2); ctx.lineTo(-VW / 2, VH / 2);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(160,220,255,0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = -VW / 2; x <= VW / 2; x += 12) {
      ctx.lineTo(x, y + Math.sin(x * 0.05 + t * 2.2) * 3);
    }
    ctx.stroke();
  }
  function strata(ctx, y) {
    const cols = ['#3a3020', '#2c2418', '#241c12', '#1a140c'];
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = cols[i];
      ctx.fillRect(-VW / 2, y + i * 16, VW, 16);
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    for (let i = 0; i <= 4; i++) {
      ctx.beginPath(); ctx.moveTo(-VW / 2, y + i * 16); ctx.lineTo(VW / 2, y + i * 16); ctx.stroke();
    }
  }
  function gauge(ctx, x, y, r, frac, t) {
    // manômetro de severidade da crise
    ctx.fillStyle = '#101624';
    ctx.beginPath(); ctx.arc(x, y, r + 5, 0, 6.28); ctx.fill();
    ctx.strokeStyle = '#4a5a78'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(x, y, r + 5, 0, 6.28); ctx.stroke();
    const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#2c8f4a';
    ctx.beginPath(); ctx.arc(x, y, r, a0, a0 + (a1 - a0) * 0.55); ctx.stroke();
    ctx.strokeStyle = '#c9a227';
    ctx.beginPath(); ctx.arc(x, y, r, a0 + (a1 - a0) * 0.55, a0 + (a1 - a0) * 0.8); ctx.stroke();
    ctx.strokeStyle = '#c0392b';
    ctx.beginPath(); ctx.arc(x, y, r, a0 + (a1 - a0) * 0.8, a1); ctx.stroke();
    const wob = frac > 0.6 ? Math.sin(t * 18) * 0.04 : 0;
    const na = a0 + (a1 - a0) * G.clamp(frac + wob, 0, 1);
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(na) * r * 0.85, y + Math.sin(na) * r * 0.85);
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(x, y, 2.5, 0, 6.28); ctx.fill();
  }
  function label(ctx, x, y, txt, color) {
    ctx.font = '700 9px "Bahnschrift", "Segoe UI", sans-serif';
    ctx.fillStyle = color || 'rgba(220,230,255,0.75)';
    ctx.fillText(txt, x, y);
  }

  // ============================================================
  const SCENES = {};

  // 1 — navio sísmico + subsuperfície com trapa
  SCENES.explor = function (ctx, t, ph, S) {
    seaBand(ctx, -18, t);
    strata(ctx, 26);
    // anticlinal com lente de óleo
    ctx.fillStyle = '#2c2418';
    ctx.beginPath();
    ctx.moveTo(-40, 58); ctx.quadraticCurveTo(60, 8, 160, 58);
    ctx.lineTo(160, 74); ctx.lineTo(-40, 74); ctx.closePath(); ctx.fill();
    const pulse = 0.5 + 0.4 * Math.sin(t * 2.4);
    ctx.fillStyle = rgba('#ffc400', 0.25 + pulse * 0.4);
    ctx.beginPath(); ctx.ellipse(60, 46, 52, 10, 0, 0, 6.28); ctx.fill();
    label(ctx, 30, 44, 'RESERVOIR?', '#ffe9a3');
    // navio sísmico
    const bob = Math.sin(t * 1.6) * 3;
    ctx.save(); ctx.translate(-120, -22 + bob);
    ctx.fillStyle = '#d94f30';
    ctx.beginPath();
    ctx.moveTo(-38, 0); ctx.lineTo(34, 0); ctx.lineTo(26, 10); ctx.lineTo(-32, 10); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#e8ecf4';
    ctx.fillRect(-30, -12, 22, 12);
    ctx.fillRect(-24, -18, 10, 6);
    beacon(ctx, -19, -21, t, 1);
    // streamers
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(34, 6);
    ctx.quadraticCurveTo(110, 12 + Math.sin(t * 1.2) * 4, 200, 10);
    ctx.stroke();
    for (let i = 1; i <= 6; i++) {
      ctx.fillStyle = '#ffc400';
      ctx.beginPath(); ctx.arc(34 + i * 27, 8 + Math.sin(t * 1.2 + i) * 2, 2, 0, 6.28); ctx.fill();
    }
    ctx.restore();
    // ondas acústicas descendo
    for (let i = 0; i < 3; i++) {
      const p = ((t * 0.35) + i * 0.33) % 1;
      ctx.strokeStyle = rgba('#57c7ff', 0.55 * (1 - p));
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(-120, -12 + bob, 10 + p * 85, 0.35, Math.PI - 0.35);
      ctx.stroke();
    }
  };

  // 2 — sonda: torre, coluna, broca e circulação de lama
  SCENES.drill = function (ctx, t, ph, S) {
    seaBand(ctx, -34, t);
    strata(ctx, 10);
    // plataforma e torre
    ctx.fillStyle = '#25304a';
    ctx.fillRect(-70, -46, 140, 12);
    ctx.strokeStyle = '#4a5a78'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-40, -46); ctx.lineTo(0, -118); ctx.lineTo(40, -46);
    ctx.moveTo(-28, -66) ; ctx.lineTo(28, -66);
    ctx.moveTo(-18, -90); ctx.lineTo(18, -90);
    ctx.moveTo(-28, -66); ctx.lineTo(18, -90);
    ctx.moveTo(28, -66); ctx.lineTo(-18, -90);
    ctx.stroke();
    beacon(ctx, 0, -122, t, 0);
    // riser/coluna
    const kick = S.crisis && ph >= 1;
    ctx.strokeStyle = '#8a94ad'; ctx.lineWidth = 7;
    ctx.beginPath(); ctx.moveTo(0, -46); ctx.lineTo(0, 78); ctx.stroke();
    // broca girando
    ctx.save(); ctx.translate(0, 82); ctx.rotate(t * 6);
    ctx.fillStyle = '#c9d2e8';
    for (let i = 0; i < 3; i++) {
      ctx.rotate(Math.PI * 2 / 3);
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-5, 9); ctx.lineTo(5, 9); ctx.closePath(); ctx.fill();
    }
    ctx.restore();
    // circulação: lama desce dentro, retorna pelo anular
    for (let i = 0; i < 6; i++) {
      const p = ((t * 0.5) + i / 6) % 1;
      ctx.fillStyle = rgba('#ffc400', 0.85);
      ctx.beginPath(); ctx.arc(0, -40 + p * 118, 1.8, 0, 6.28); ctx.fill();
      const up = kick ? p * 1.6 % 1 : p;
      ctx.fillStyle = kick ? rgba('#3a2c18', 0.95) : rgba('#a8845a', 0.8);
      ctx.beginPath(); ctx.arc(-7, 78 - up * 118, 2, 0, 6.28); ctx.fill();
      ctx.beginPath(); ctx.arc(7, 78 - up * 118, 2, 0, 6.28); ctx.fill();
    }
    // BOP
    ctx.fillStyle = '#c0392b';
    ctx.fillRect(-10, -6, 20, 16);
    label(ctx, -10, -10, 'BOP');
    if (S.crisis) gauge(ctx, 168, -86, 22, S.severity, t);
  };

  // 3 — FPSO com flare, risers e barco de apoio
  SCENES.fpso = function (ctx, t, ph, S) {
    seaBand(ctx, 6, t);
    strata(ctx, 64);
    const bob = Math.sin(t * 1.1) * 2;
    ctx.save(); ctx.translate(0, bob);
    // casco
    ctx.fillStyle = '#8f2c2c';
    ctx.beginPath();
    ctx.moveTo(-150, 6); ctx.lineTo(150, 6); ctx.lineTo(138, 26); ctx.lineTo(-142, 26);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#c9d2e8';
    ctx.fillRect(-150, -2, 300, 9);
    // módulos de processo
    ctx.fillStyle = '#3a4a66';
    [[-120, 26, 14], [-96, 20, 18], [-64, 30, 12], [-20, 24, 16], [16, 18, 20], [56, 28, 13]].forEach(function (m) {
      ctx.fillRect(m[0], -2 - m[2], m[1], m[2]);
    });
    // acomodações + heliponto
    ctx.fillStyle = '#e8ecf4';
    ctx.fillRect(96, -34, 34, 32);
    ctx.strokeStyle = '#ffc400'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(113, -40, 14, 0, 6.28); ctx.stroke();
    ctx.font = '700 11px "Segoe UI"'; ctx.fillStyle = '#ffc400';
    ctx.fillText('H', 109, -36);
    // flare
    ctx.strokeStyle = '#4a5a78'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(-150, -2); ctx.lineTo(-186, -44); ctx.stroke();
    flame(ctx, -186, -44, 16 + (S.crisis ? 8 : 0), 26 + (S.crisis ? 14 : 0) + Math.sin(t * 7) * 3, t, 2.2);
    // alarme geral (crise): beacons ao longo do convés
    if (S.crisis) {
      [-100, -40, 20, 80].forEach(function (bx, i) { beacon(ctx, bx, -8, t, i * 1.4); });
      // baleeira em destaque
      ctx.fillStyle = '#ff7a1a';
      ctx.beginPath(); ctx.ellipse(70, 32, 16, 6, 0, 0, 6.28); ctx.fill();
      label(ctx, 56, 46, 'LIFEBOAT', '#ffb35c');
    }
    ctx.restore();
    // risers em catenária até as ANMs
    ctx.strokeStyle = 'rgba(160,180,220,0.6)'; ctx.lineWidth = 2.5;
    [[-60, -122], [30, 96]].forEach(function (r) {
      ctx.beginPath();
      ctx.moveTo(r[0], 26 + bob);
      ctx.quadraticCurveTo(r[0] + (r[1] - r[0]) * 0.4, 78, r[1], 62);
      ctx.stroke();
      ctx.fillStyle = '#2c8f4a';
      ctx.fillRect(r[1] - 5, 58, 10, 10);
    });
    // barco de apoio
    const bob2 = Math.sin(t * 1.5 + 2) * 3;
    ctx.fillStyle = '#d97c30';
    ctx.beginPath();
    ctx.moveTo(-210, 14 + bob2); ctx.lineTo(-166, 14 + bob2); ctx.lineTo(-172, 24 + bob2); ctx.lineTo(-206, 24 + bob2);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#e8ecf4';
    ctx.fillRect(-206, 4 + bob2, 14, 10);
    if (S.crisis) gauge(ctx, 178, -92, 22, S.severity, t);
  };

  // 4 — separador trifásico com níveis animados
  SCENES.plant = function (ctx, t, ph, S) {
    ctx.fillStyle = '#161c2c';
    ctx.fillRect(-VW / 2, 64, VW, 60);
    // vaso separador (corte)
    const vx = -80, vy = -40, vw = 190, vh = 74;
    ctx.fillStyle = '#25304a';
    ctx.beginPath();
    ctx.moveTo(vx, vy);
    ctx.lineTo(vx + vw, vy);
    ctx.arc(vx + vw, vy + vh / 2, vh / 2, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(vx, vy + vh);
    ctx.arc(vx, vy + vh / 2, vh / 2, Math.PI / 2, -Math.PI / 2);
    ctx.closePath(); ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.rect(vx - vh / 2 + 6, vy + 6, vw + vh - 12, vh - 12);
    ctx.clip();
    // fases: água / óleo / gás
    const wl = vy + vh - 22 + Math.sin(t * 1.8) * 1.5;
    const ol = vy + 26 + Math.sin(t * 1.4 + 1) * 1.5;
    ctx.fillStyle = '#1e4a66';
    ctx.fillRect(vx - 40, wl, vw + 80, 40);
    ctx.fillStyle = '#7a5218';
    ctx.fillRect(vx - 40, ol, vw + 80, wl - ol);
    ctx.fillStyle = 'rgba(200,220,255,0.16)';
    ctx.fillRect(vx - 40, vy, vw + 80, ol - vy);
    // bolhas de gás saindo do óleo
    for (let i = 0; i < 5; i++) {
      const p = ((t * 0.7) + i * 0.2) % 1;
      ctx.fillStyle = 'rgba(220,235,255,' + (0.5 * (1 - p)) + ')';
      ctx.beginPath();
      ctx.arc(vx + 24 + i * 32 + Math.sin(p * 6 + i) * 4, ol - p * 14, 1.6 + p * 2, 0, 6.28);
      ctx.fill();
    }
    ctx.restore();
    label(ctx, vx + 6, vy + 16, 'GAS');
    label(ctx, vx + 6, ol + 14, 'OIL', '#ffc27a');
    label(ctx, vx + 6, wl + 13, 'WATER', '#8fd0ff');
    // tubulações: entrada, gás, óleo, água
    pipe(ctx, [[-198, -6], [vx - vh / 2, -6]], t, '#a8845a', 30, 6);
    pipe(ctx, [[vx + vw * 0.6, vy], [vx + vw * 0.6, -92], [178, -92]], t, '#9adcff', 34, 4);
    pipe(ctx, [[vx + vw + vh / 2, vy + vh / 2], [178, vy + vh / 2]], t, '#ffc27a', 22, 5);
    pipe(ctx, [[vx + vw * 0.5, vy + vh], [vx + vw * 0.5, 88], [150, 88]], t, '#57a7e8', 18, 4);
    // PSV no topo
    ctx.fillStyle = '#c0392b';
    ctx.fillRect(vx + vw * 0.3 - 4, vy - 14, 8, 14);
    label(ctx, vx + vw * 0.3 - 10, vy - 18, 'PSV');
    if (S.crisis && ph >= 1) {
      // PSV aliviando (vapor)
      for (let i = 0; i < 4; i++) {
        const p = ((t * 1.4) + i * 0.25) % 1;
        ctx.fillStyle = 'rgba(230,240,255,' + (0.5 * (1 - p)) + ')';
        ctx.beginPath();
        ctx.arc(vx + vw * 0.3 + p * 10, vy - 18 - p * 26, 2 + p * 5, 0, 6.28);
        ctx.fill();
      }
    }
    // bomba com rotor girando
    ctx.fillStyle = '#3a4a66';
    ctx.fillRect(120, 74, 34, 18);
    ctx.beginPath(); ctx.arc(137, 70, 12, 0, 6.28); ctx.fill();
    ctx.save(); ctx.translate(137, 70); ctx.rotate(t * 5);
    ctx.strokeStyle = '#9adcff'; ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) { ctx.rotate(Math.PI * 2 / 3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -9); ctx.stroke(); }
    ctx.restore();
    if (S.crisis) gauge(ctx, 178, -40, 22, S.severity, t);
  };

  // 5 — duto com PIG, tanques e navio no píer
  SCENES.mid = function (ctx, t, ph, S) {
    ctx.fillStyle = '#141c18';
    ctx.fillRect(-VW / 2, 58, VW, 70);
    // tancagem
    tank(ctx, -200, 54, 52, 64, '#2c3a2c');
    tank(ctx, -140, 54, 44, 50, '#2c3a2c');
    beacon(ctx, -174, -14, t, 0.5);
    // navio no píer
    const bob = Math.sin(t * 1.3) * 2;
    ctx.fillStyle = '#1a3a52';
    ctx.fillRect(60, 36, 160, 8);
    ctx.fillStyle = '#3a3a44';
    ctx.beginPath();
    ctx.moveTo(80, 34 + bob); ctx.lineTo(214, 34 + bob); ctx.lineTo(206, 14 + bob); ctx.lineTo(92, 14 + bob);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#e8ecf4';
    ctx.fillRect(184, -6 + bob, 20, 20);
    beacon(ctx, 194, -12 + bob, t, 2);
    // braço de carregamento
    ctx.strokeStyle = '#6bffb0'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(96, 36);
    ctx.lineTo(104, 8 + Math.sin(t * 0.8) * 3);
    ctx.lineTo(122, 16 + bob);
    ctx.stroke();
    // duto em corte com PIG viajando
    const py = 96;
    ctx.strokeStyle = '#20283a'; ctx.lineWidth = 16;
    ctx.beginPath(); ctx.moveTo(-VW / 2, py); ctx.lineTo(VW / 2, py); ctx.stroke();
    pipe(ctx, [[-VW / 2, py], [VW / 2, py]], t, '#6bffb0', 30, 10);
    const pigX = -VW / 2 + ((t * 40) % VW);
    ctx.fillStyle = '#ffc400';
    ctx.beginPath();
    ctx.moveTo(pigX - 12, py - 7); ctx.lineTo(pigX + 8, py - 7);
    ctx.arc(pigX + 8, py, 7, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(pigX - 12, py + 7);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#20283a';
    ctx.fillRect(pigX - 10, py - 5, 3, 10);
    label(ctx, pigX - 8, py - 12, 'PIG', '#ffe9a3');
    if (S.crisis) {
      label(ctx, 60, -40, 'CUSTODY TRANSFER IN PROGRESS', '#ffd75c');
      gauge(ctx, -10, -60, 22, S.severity, t);
    }
  };

  // 6 — torre de destilação com frações e flare
  SCENES.refino = function (ctx, t, ph, S) {
    ctx.fillStyle = '#1a1210';
    ctx.fillRect(-VW / 2, 76, VW, 60);
    // torre em corte
    const cx = -60, cw = 56, cy = -116, chh = 196;
    ctx.fillStyle = '#33262c';
    ctx.beginPath();
    ctx.moveTo(cx, cy + 10);
    ctx.quadraticCurveTo(cx + cw / 2, cy - 10, cx + cw, cy + 10);
    ctx.lineTo(cx + cw, cy + chh); ctx.lineTo(cx, cy + chh);
    ctx.closePath(); ctx.fill();
    // pratos + bolhas
    const fracs = [['LPG', '#9adcff'], ['NAPHTHA', '#ffe9a3'], ['JET FUEL', '#ffc27a'], ['DIESEL', '#ff9d5c'], ['FUEL OIL', '#c96a3a'], ['RESIDUE', '#7a4a2c']];
    for (let i = 0; i < 6; i++) {
      const ty = cy + 22 + i * 28;
      ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cx + 4, ty); ctx.lineTo(cx + cw - 4, ty); ctx.stroke();
      for (let b = 0; b < 3; b++) {
        const p = ((t * 0.8) + b * 0.33 + i * 0.17) % 1;
        ctx.fillStyle = 'rgba(255,220,160,' + (0.5 * (1 - p)) + ')';
        ctx.beginPath();
        ctx.arc(cx + 12 + b * 16 + Math.sin(p * 7) * 3, ty - 3 - p * 18, 1.5 + p * 2, 0, 6.28);
        ctx.fill();
      }
      // retirada lateral com produto
      pipe(ctx, [[cx + cw, ty], [cx + cw + 42, ty]], t, fracs[i][1], 14 + i * 2, 3);
      label(ctx, cx + cw + 48, ty + 3, fracs[i][0], fracs[i][1]);
    }
    // forno na base
    ctx.fillStyle = '#3a2c22';
    ctx.fillRect(cx - 66, 46, 44, 34);
    flame(ctx, cx - 44, 78, 20, 20 + Math.sin(t * 8) * 3, t, 5.5);
    pipe(ctx, [[cx - 22, 62], [cx, 62]], t, '#a8845a', 20, 5);
    label(ctx, cx - 66, 40, 'FURNACE');
    // flare
    ctx.strokeStyle = '#4a5a78'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(150, 76); ctx.lineTo(150, -80); ctx.stroke();
    const surge = S.crisis ? 26 : 0;
    flame(ctx, 150, -80, 18 + surge, 30 + surge + Math.sin(t * 7) * 4, t, 3.1);
    beacon(ctx, 150, -60, t, 1.2);
    label(ctx, 136, 90, 'FLARE');
    if (S.crisis) gauge(ctx, -170, -80, 22, S.severity, t);
  };

  // 7 — sala de controle da auditoria + Ms. Sterling
  SCENES.cert = function (ctx, t, ph, S) {
    // telão com a cadeia de valor
    ctx.fillStyle = '#101a2e';
    ctx.fillRect(-190, -110, 280, 110);
    ctx.strokeStyle = '#3a4a66'; ctx.lineWidth = 2;
    ctx.strokeRect(-190, -110, 280, 110);
    label(ctx, -182, -96, 'AURORA FIELD — FULL VALUE CHAIN', '#8fb8e8');
    const icons = 7;
    for (let i = 0; i < icons; i++) {
      const ix = -168 + i * 41, iy = -52;
      ctx.fillStyle = i <= ph * 3 ? '#2c8f4a' : '#3a4a66';
      ctx.beginPath(); ctx.arc(ix, iy, 9, 0, 6.28); ctx.fill();
      if (i < icons - 1) pipe(ctx, [[ix + 9, iy], [ix + 32, iy]], t, '#6bffb0', 22, 3);
    }
    // fileiras de indicadores piscando
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 14; c++) {
        const st = Math.sin(t * 1.2 + r * 3 + c * 1.7);
        const red = S.crisis && ph >= 2 ? st > 0.2 : st > 0.85;
        ctx.fillStyle = red ? 'rgba(255,80,80,0.9)' : 'rgba(107,255,176,0.5)';
        ctx.fillRect(-182 + c * 19, -30 + r * 9, 6, 4);
      }
    }
    // consoles
    ctx.fillStyle = '#1c2436';
    ctx.beginPath();
    ctx.moveTo(-200, 70); ctx.lineTo(-40, 70); ctx.lineTo(-56, 30); ctx.lineTo(-184, 30);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#25304a';
    ctx.fillRect(-176, 36, 40, 12);
    ctx.fillRect(-126, 36, 40, 12);
    // caneca de café com vapor
    ctx.fillStyle = '#e8ecf4';
    ctx.fillRect(-70, 22, 10, 10);
    for (let i = 0; i < 2; i++) {
      const p = ((t * 0.6) + i * 0.5) % 1;
      ctx.strokeStyle = 'rgba(230,240,255,' + (0.4 * (1 - p)) + ')';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-65 + Math.sin(p * 8) * 3, 20 - p * 14);
      ctx.quadraticCurveTo(-63, 16 - p * 16, -65 + Math.sin(p * 8 + 2) * 3, 12 - p * 18);
      ctx.stroke();
    }
    // Ms. Sterling (silhueta profissional com tablet)
    ctx.save(); ctx.translate(130, 8);
    const breathe = Math.sin(t * 1.4) * 1.2;
    ctx.fillStyle = '#1a2030';
    ctx.beginPath(); // terno
    ctx.moveTo(-20, 82); ctx.lineTo(-16, 6 + breathe); ctx.quadraticCurveTo(0, -6 + breathe, 16, 6 + breathe);
    ctx.lineTo(20, 82); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#c9a888';
    ctx.beginPath(); ctx.arc(0, -16 + breathe, 14, 0, 6.28); ctx.fill();
    ctx.fillStyle = '#3a2c22'; // coque
    ctx.beginPath(); ctx.arc(0, -26 + breathe, 9, Math.PI, 0); ctx.fill();
    ctx.beginPath(); ctx.arc(9, -28 + breathe, 5, 0, 6.28); ctx.fill();
    // óculos
    ctx.strokeStyle = '#101018'; ctx.lineWidth = 1.8;
    ctx.beginPath(); ctx.arc(-5, -17 + breathe, 4, 0, 6.28); ctx.stroke();
    ctx.beginPath(); ctx.arc(5, -17 + breathe, 4, 0, 6.28); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-1, -17 + breathe); ctx.lineTo(1, -17 + breathe); ctx.stroke();
    // tablet
    ctx.fillStyle = '#25304a';
    ctx.save(); ctx.rotate(-0.15);
    ctx.fillRect(-34, 24, 26, 34);
    ctx.strokeStyle = '#57c7ff'; ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath(); ctx.moveTo(-30, 32 + i * 6); ctx.lineTo(-12, 32 + i * 6); ctx.stroke();
    }
    ctx.restore();
    ctx.restore();
    if (S.crisis) gauge(ctx, 180, -86, 22, S.severity, t);
  };

  // ============================================================
  MON.make = function (spec) {
    spec = spec || {};
    const M = {
      spec: spec, phase: 0, severity: 1, dead: false,
      t0: (typeof performance !== 'undefined' ? performance.now() : 0) - (G.hashStr(spec.name || 'x') % 4000),
      hurtT: -9, atkT: -9, doneT: -9
    };
    M.hurt = function () { M.hurtT = performance.now(); };
    M.attack = function () { M.atkT = performance.now(); };
    M.die = function (cb) {
      M.doneT = performance.now();
      setTimeout(function () { M.dead = true; if (cb) cb(); }, 750);
    };
    M.setPhase = function (p) { M.phase = p; };
    M.setSeverity = function (f) { M.severity = G.clamp(f, 0, 1); };

    M.draw = function (ctx, w, h) {
      const now = performance.now();
      const t = (now - M.t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      if (M.dead) return;
      const s = Math.min(w / VW, h / VH);
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.scale(s, s);

      const fn = SCENES[spec.scene] || SCENES.plant;
      fn(ctx, t, M.phase, { crisis: !!spec.crisis, nc: !!spec.nc, severity: M.severity });

      // variante NC: prancheta de auditoria sobreposta
      if (spec.nc) {
        ctx.fillStyle = 'rgba(20,14,4,0.35)';
        ctx.fillRect(-VW / 2, -VH / 2, VW, VH);
        ctx.save(); ctx.translate(150, -50); ctx.rotate(0.06 + Math.sin(t * 1.2) * 0.02);
        ctx.fillStyle = '#e8e2d0';
        ctx.fillRect(-30, -40, 60, 80);
        ctx.fillStyle = '#8a94ad';
        ctx.fillRect(-12, -46, 24, 10);
        ctx.strokeStyle = '#7a7462'; ctx.lineWidth = 1.5;
        for (let i = 0; i < 5; i++) {
          ctx.beginPath(); ctx.moveTo(-22, -22 + i * 12); ctx.lineTo(22, -22 + i * 12); ctx.stroke();
        }
        ctx.strokeStyle = '#c0392b'; ctx.lineWidth = 3;
        ctx.strokeRect(-26, -36, 52, 72);
        ctx.font = '900 16px "Arial Black"';
        ctx.fillStyle = '#c0392b';
        ctx.fillText('NC', -12, 8);
        ctx.restore();
      }

      // alarme durante "ataque" (incidente)
      const atkP = G.clamp(1 - (now - M.atkT) / 500, 0, 1);
      if (atkP > 0) {
        ctx.fillStyle = 'rgba(255,40,40,' + (atkP * 0.22).toFixed(2) + ')';
        ctx.fillRect(-VW / 2, -VH / 2, VW, VH);
        const sweep = ((now - M.atkT) / 500) * Math.PI * 2;
        ctx.fillStyle = 'rgba(255,60,60,0.28)';
        ctx.beginPath();
        ctx.moveTo(0, -VH / 2 + 20);
        ctx.arc(0, -VH / 2 + 20, VW, sweep, sweep + 0.5);
        ctx.closePath(); ctx.fill();
      }

      // tarefa concluída: carimbo verde
      if (M.doneT > 0) {
        const dp = G.clamp((now - M.doneT) / 300, 0, 1);
        ctx.save();
        ctx.translate(0, 0); ctx.rotate(-0.15);
        ctx.globalAlpha = dp;
        ctx.scale(1.6 - dp * 0.6, 1.6 - dp * 0.6);
        ctx.strokeStyle = '#2ecc71'; ctx.lineWidth = 5;
        ctx.strokeRect(-92, -30, 184, 60);
        ctx.font = '900 26px "Arial Black"';
        ctx.fillStyle = '#2ecc71';
        ctx.fillText(spec.crisis ? 'UNDER CONTROL' : 'COMPLETED', spec.crisis ? -88 : -76, 10);
        ctx.restore();
        ctx.globalAlpha = 1;
      }

      // clarão de acerto
      const hurtP = G.clamp(1 - (now - M.hurtT) / 240, 0, 1);
      if (hurtP > 0) {
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle = 'rgba(255,255,255,' + (hurtP * 0.4).toFixed(2) + ')';
        ctx.fillRect(-VW / 2, -VH / 2, VW, VH);
        ctx.globalCompositeOperation = 'source-over';
      }
      ctx.restore();
    };
    return M;
  };
})(typeof window !== 'undefined' ? window : globalThis);
