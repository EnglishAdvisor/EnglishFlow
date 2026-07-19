/* LIFE FLOW — audio.js
   Efeitos sonoros 100% sintetizados (Web Audio): sonar, bolhas, acerto/erro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const AU = DF.AU = {};
  let ctx = null;

  function ac() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
    }
    if (ctx && ctx.state === 'suspended') { try { ctx.resume(); } catch (e) { } }
    return ctx;
  }

  function tone(freq, dur, type, gain, when, slide) {
    const c = ac(); if (!c) return;
    const t0 = c.currentTime + (when || 0);
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain || 0.12, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(c.destination);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }

  AU.sfx = function (name) {
    if (DF.state && DF.state.settings && !DF.state.settings.sfx) return;
    switch (name) {
      case 'click': tone(660, 0.06, 'triangle', 0.06); break;
      case 'good': tone(520, 0.09, 'sine', 0.10); tone(780, 0.12, 'sine', 0.10, 0.08); break;
      case 'great': tone(520, 0.08, 'sine', 0.10); tone(660, 0.08, 'sine', 0.10, 0.07); tone(880, 0.16, 'sine', 0.11, 0.14); break;
      case 'bad': tone(220, 0.18, 'sawtooth', 0.07, 0, 150); break;
      case 'sonar': tone(920, 0.5, 'sine', 0.08, 0, 860); break;
      case 'unlock': tone(392, 0.1, 'sine', 0.1); tone(523, 0.1, 'sine', 0.1, 0.1); tone(659, 0.22, 'sine', 0.12, 0.2); break;
      case 'bubble': tone(300, 0.08, 'sine', 0.05, 0, 520); break;
      case 'deep': tone(70, 0.6, 'sine', 0.08, 0, 55); break;
      case 'code': tone(700, 0.05, 'square', 0.04); tone(700, 0.05, 'square', 0.04, 0.09); break;
    }
  };

  // primeiro toque desbloqueia o contexto de áudio (política dos navegadores)
  if (typeof document !== 'undefined') {
    document.addEventListener('pointerdown', function once() {
      ac();
      document.removeEventListener('pointerdown', once);
    }, { once: true });
  }
})(typeof window !== 'undefined' ? window : globalThis);
