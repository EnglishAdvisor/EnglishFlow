/* A Maldição da Cuca — audio.js
   Tudo sintetizado em tempo real com Web Audio: efeitos, música em sequenciador,
   além de voz (TTS) e reconhecimento de fala para os desafios de pronúncia. */
(function (root) {
  const G = root.G = root.G || {};
  const AU = G.AU = {};

  let ctx = null, master = null, sfxBus = null, musBus = null, noiseBuf = null;
  let pendMusic = null;

  AU.ready = function () { return !!ctx; };

  AU.init = function () {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -18; comp.ratio.value = 6;
      master = ctx.createGain(); master.gain.value = 0.85;
      master.connect(comp); comp.connect(ctx.destination);
      sfxBus = ctx.createGain(); sfxBus.gain.value = 0.55; sfxBus.connect(master);
      musBus = ctx.createGain(); musBus.gain.value = 0.30; musBus.connect(master);
      const len = ctx.sampleRate * 1.2, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      noiseBuf = buf;
      if (pendMusic) { AU.music(pendMusic.mode, pendMusic.region); pendMusic = null; }
    } catch (e) { ctx = null; }
  };

  function sfxOn() { return ctx && (!G.state || !G.state.set || G.state.set.sfx); }
  function musOn() { return ctx && (!G.state || !G.state.set || G.state.set.music); }

  // ---------- primitivas de síntese ----------
  function tone(o) {
    // o: {f, f2, dur, type, vol, at, delay}
    if (!ctx) return;
    const t0 = ctx.currentTime + (o.delay || 0);
    const osc = ctx.createOscillator(), g = ctx.createGain();
    osc.type = o.type || 'square';
    osc.frequency.setValueAtTime(o.f, t0);
    if (o.f2) osc.frequency.exponentialRampToValueAtTime(Math.max(20, o.f2), t0 + o.dur);
    const at = o.at || 0.004;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(o.vol || 0.2, t0 + at);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + o.dur);
    osc.connect(g); g.connect(o.bus || sfxBus);
    osc.start(t0); osc.stop(t0 + o.dur + 0.05);
  }
  function noise(o) {
    // o: {dur, vol, hp, lp, delay}
    if (!ctx) return;
    const t0 = ctx.currentTime + (o.delay || 0);
    const src = ctx.createBufferSource(); src.buffer = noiseBuf;
    let node = src;
    if (o.hp) { const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = o.hp; node.connect(f); node = f; }
    if (o.lp) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = o.lp; node.connect(f); node = f; }
    const g = ctx.createGain();
    g.gain.setValueAtTime(o.vol || 0.2, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + o.dur);
    node.connect(g); g.connect(o.bus || sfxBus);
    src.start(t0); src.stop(t0 + o.dur + 0.05);
  }

  // ---------- efeitos ----------
  const SFX = {
    click: function () { tone({ f: 660, dur: 0.06, type: 'triangle', vol: 0.12 }); },
    blip: function () { tone({ f: 880 + Math.random() * 220, dur: 0.03, type: 'square', vol: 0.03 }); },
    good: function () { [523, 659, 784].forEach(function (f, i) { tone({ f: f, dur: 0.12, type: 'triangle', vol: 0.16, delay: i * 0.07 }); }); },
    crit: function () {
      [659, 830, 988, 1318].forEach(function (f, i) { tone({ f: f, dur: 0.1, type: 'square', vol: 0.12, delay: i * 0.05 }); });
      noise({ dur: 0.25, vol: 0.08, hp: 5000, delay: 0.12 });
    },
    bad: function () { tone({ f: 180, f2: 90, dur: 0.3, type: 'sawtooth', vol: 0.16 }); tone({ f: 185, f2: 88, dur: 0.32, type: 'square', vol: 0.1 }); },
    hit: function () { tone({ f: 200, f2: 60, dur: 0.12, type: 'sine', vol: 0.4 }); noise({ dur: 0.1, vol: 0.15, hp: 1200 }); },
    hurt: function () { tone({ f: 140, f2: 50, dur: 0.25, type: 'sawtooth', vol: 0.25 }); noise({ dur: 0.2, vol: 0.12, lp: 800 }); },
    coin: function () { tone({ f: 988, dur: 0.06, type: 'square', vol: 0.1 }); tone({ f: 1319, dur: 0.14, type: 'square', vol: 0.1, delay: 0.06 }); },
    levelup: function () { [523, 659, 784, 1047].forEach(function (f, i) { tone({ f: f, dur: 0.16, type: 'triangle', vol: 0.2, delay: i * 0.09 }); }); },
    item: function () { tone({ f: 440, f2: 880, dur: 0.15, type: 'triangle', vol: 0.15 }); },
    boss: function () { tone({ f: 80, f2: 45, dur: 0.9, type: 'sawtooth', vol: 0.28 }); noise({ dur: 0.7, vol: 0.14, lp: 400 }); },
    ghost: function () { tone({ f: 600, f2: 1400, dur: 0.5, type: 'sine', vol: 0.08 }); noise({ dur: 0.5, vol: 0.05, hp: 3000 }); },
    letter: function () { [784, 988, 1175, 1568, 1976].forEach(function (f, i) { tone({ f: f, dur: 0.22, type: 'sine', vol: 0.14, delay: i * 0.1 }); }); },
    tick: function () { tone({ f: 990, dur: 0.03, type: 'sine', vol: 0.06 }); },
    fanfare: function () {
      [523, 523, 523, 659, 784, 1047].forEach(function (f, i) { tone({ f: f, dur: i === 5 ? 0.5 : 0.14, type: 'square', vol: 0.14, delay: i * 0.12 }); });
      noise({ dur: 0.4, vol: 0.06, hp: 6000, delay: 0.6 });
    },
    swoosh: function () { noise({ dur: 0.25, vol: 0.1, hp: 800, lp: 4000 }); }
  };
  AU.sfx = function (name, arg) {
    if (!sfxOn()) return;
    if (name === 'combo') { tone({ f: 660 * Math.pow(1.12, Math.min(arg || 0, 10)), dur: 0.08, type: 'square', vol: 0.1 }); return; }
    if (SFX[name]) SFX[name]();
  };

  // ---------- música (sequenciador de 16 passos) ----------
  const MODES = {
    title: { bpm: 84, kick: [], snare: [], hat: [], bassSteps: [0, 8], lead: 0.30, leadType: 'triangle', leadVol: 0.10 },
    map: { bpm: 96, kick: [0, 8], snare: [], hat: [4, 12], bassSteps: [0, 4, 8, 12], lead: 0.28, leadType: 'triangle', leadVol: 0.09 },
    battle: { bpm: 132, kick: [0, 8, 10], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14], bassSteps: [0, 3, 4, 7, 8, 11, 12, 14], lead: 0.42, leadType: 'square', leadVol: 0.07 },
    boss: { bpm: 148, kick: [0, 4, 8, 12], snare: [4, 12, 15], hat: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], bassSteps: [0, 2, 4, 6, 8, 10, 12, 14], lead: 0.5, leadType: 'square', leadVol: 0.08 },
    final: { bpm: 100, kick: [0, 8], snare: [4, 12], hat: [2, 6, 10, 14], bassSteps: [0, 4, 8, 12], lead: 0.4, leadType: 'triangle', leadVol: 0.11 }
  };
  const PENTA = [0, 3, 5, 7, 10, 12, 15];
  const MAJOR = [0, 2, 4, 5, 7, 9, 12];
  let seq = null;

  function midiF(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  AU.music = function (mode, region) {
    region = region | 0;
    if (!ctx) { pendMusic = { mode: mode, region: region }; return; }
    if (!musOn()) { pendMusic = { mode: mode, region: region }; AU.stopMusic(); return; }
    if (seq && seq.mode === mode && seq.region === region) return;
    AU.stopMusic();
    const cfg = MODES[mode] || MODES.map;
    const rnd = G.mulberry(G.hashStr('music:' + mode + ':' + region));
    const scale = mode === 'final' ? MAJOR : PENTA;
    const rootMidi = 45 + [0, 2, 3, 5, 7, 8, 10][region % 7];
    const leadPat = [];
    for (let i = 0; i < 16; i++) {
      leadPat.push(rnd() < cfg.lead ? scale[Math.floor(rnd() * scale.length)] + 12 : null);
    }
    seq = {
      mode: mode, region: region, cfg: cfg, step: 0,
      root: rootMidi, leadPat: leadPat, scale: scale,
      spb: 60 / cfg.bpm / 4, nextT: ctx.currentTime + 0.08,
      timer: setInterval(schedule, 25)
    };
  };
  function schedule() {
    if (!seq || !ctx) return;
    if (!musOn()) return;
    while (seq.nextT < ctx.currentTime + 0.12) {
      playStep(seq.step, seq.nextT);
      seq.nextT += seq.spb;
      seq.step = (seq.step + 1) % 16;
    }
  }
  function playStep(st, t) {
    const c = seq.cfg, dl = Math.max(0, t - ctx.currentTime);
    if (c.kick.indexOf(st) >= 0) tone({ f: 150, f2: 42, dur: 0.16, type: 'sine', vol: 0.5, delay: dl, bus: musBus });
    if (c.snare.indexOf(st) >= 0) { noise({ dur: 0.12, vol: 0.22, hp: 1500, delay: dl, bus: musBus }); tone({ f: 190, dur: 0.08, type: 'triangle', vol: 0.12, delay: dl, bus: musBus }); }
    if (c.hat.indexOf(st) >= 0) noise({ dur: 0.04, vol: st % 4 === 0 ? 0.07 : 0.045, hp: 7000, delay: dl, bus: musBus });
    if (c.bassSteps.indexOf(st) >= 0) {
      const off = (st === 8 || st === 11) ? 3 : (st === 12 || st === 14) ? -2 : 0;
      tone({ f: midiF(seq.root - 12 + off), dur: seq.spb * 1.8, type: 'triangle', vol: 0.20, delay: dl, bus: musBus });
    }
    const ln = seq.leadPat[st];
    if (ln != null) tone({ f: midiF(seq.root + ln), dur: seq.spb * 1.4, type: c.leadType, vol: c.leadVol, delay: dl, bus: musBus, at: 0.01 });
  }
  AU.stopMusic = function () {
    if (seq) { clearInterval(seq.timer); seq = null; }
  };
  AU.refreshMusic = function () {
    // chamada quando o usuário liga/desliga música nas configurações
    if (G.state && G.state.set && !G.state.set.music) { if (seq) pendMusic = { mode: seq.mode, region: seq.region }; AU.stopMusic(); }
    else if (pendMusic) { const p = pendMusic; pendMusic = null; AU.music(p.mode, p.region); }
  };

  // ---------- voz (TTS) ----------
  let enVoices = [];
  function loadVoices() {
    try {
      enVoices = speechSynthesis.getVoices().filter(function (v) { return /^en/i.test(v.lang); });
      enVoices.sort(function (a, b) {
        function score(v) { return (/natural/i.test(v.name) ? 4 : 0) + (/en[-_]US/i.test(v.lang) ? 2 : 0) + (v.localService ? 1 : 0); }
        return score(b) - score(a);
      });
    } catch (e) { enVoices = []; }
  }
  if (typeof speechSynthesis !== 'undefined') {
    loadVoices();
    try { speechSynthesis.onvoiceschanged = loadVoices; } catch (e) { /* ignore */ }
  }
  AU.hasTTS = function () { return typeof speechSynthesis !== 'undefined' && (enVoices.length > 0 || speechSynthesis.getVoices().length === 0); };
  AU.enVoices = function () { return enVoices; };
  AU.speak = function (text, opts) {
    if (typeof speechSynthesis === 'undefined') return false;
    opts = opts || {};
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = opts.rate || 0.95;
      u.pitch = opts.pitch || 1;
      if (!enVoices.length) loadVoices();
      const savedUri = G.state && G.state.set && G.state.set.voice;
      let v = null;
      if (savedUri) v = enVoices.find(function (x) { return x.voiceURI === savedUri; });
      if (!v) v = enVoices[0];
      if (v) u.voice = v;
      if (opts.onend) u.onend = opts.onend;
      speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  };
  AU.stopSpeak = function () { try { speechSynthesis.cancel(); } catch (e) { /* ignore */ } };

  // ---------- reconhecimento de fala (opcional) ----------
  let curRec = null;
  AU.recSupported = function () { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); };
  AU.listen = function (opts) {
    opts = opts || {};
    return new Promise(function (res) {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) { res({ ok: false, err: 'unsupported' }); return; }
      let done = false;
      function fin(r) { if (!done) { done = true; curRec = null; res(r); } }
      try {
        const rec = new SR();
        curRec = rec;
        rec.lang = 'en-US';
        rec.interimResults = false;
        rec.maxAlternatives = 5;
        rec.onresult = function (e) {
          const alts = [];
          const r0 = e.results[0];
          for (let i = 0; i < r0.length; i++) alts.push({ t: r0[i].transcript, c: r0[i].confidence || 0.5 });
          fin({ ok: true, alts: alts });
        };
        rec.onerror = function (e) { fin({ ok: false, err: e.error }); };
        rec.onend = function () { fin({ ok: false, err: 'silence' }); };
        rec.start();
        setTimeout(function () { try { rec.stop(); } catch (e) { /* ignore */ } }, opts.timeout || 7000);
      } catch (e) { fin({ ok: false, err: 'start-failed' }); }
    });
  };
  AU.stopListen = function () { if (curRec) { try { curRec.abort(); } catch (e) { /* ignore */ } curRec = null; } };
})(typeof window !== 'undefined' ? window : globalThis);
