/* LIFE FLOW — speech.js
   Voz (TTS) e reconhecimento de fala (ASR) com degradação graciosa.
   Sem TTS: o texto do áudio aparece escrito. Sem ASR: autoavaliação + WhatsApp. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const SP = DF.SP = {};

  // ---------------- TTS ----------------
  let voices = [];
  function loadVoices() {
    try { voices = speechSynthesis.getVoices() || []; } catch (e) { voices = []; }
  }
  if (typeof speechSynthesis !== 'undefined') {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  SP.ttsAvailable = function () {
    return typeof speechSynthesis !== 'undefined' && typeof SpeechSynthesisUtterance !== 'undefined';
  };

  SP.enVoices = function () {
    return voices.filter(function (v) { return /^en[-_]/i.test(v.lang) || v.lang === 'en'; });
  };

  function pickVoice() {
    const want = DF.state && DF.state.settings.voiceURI;
    const en = SP.enVoices();
    if (want) {
      const v = en.find(function (x) { return x.voiceURI === want; });
      if (v) return v;
    }
    // preferência: en-GB, depois en-US, depois qualquer en
    return en.find(function (v) { return /en[-_]GB/i.test(v.lang); }) ||
      en.find(function (v) { return /en[-_]US/i.test(v.lang); }) || en[0] || null;
  }

  SP.stop = function () {
    try { speechSynthesis.cancel(); } catch (e) { /* ignore */ }
  };

  // fala um texto; opts: { rate, onend }
  SP.speak = function (text, opts) {
    opts = opts || {};
    if (!SP.ttsAvailable()) { if (opts.onend) opts.onend(false); return false; }
    try {
      SP.stop();
      const u = new SpeechSynthesisUtterance(String(text));
      const v = pickVoice();
      if (v) u.voice = v;
      u.lang = (v && v.lang) || 'en-GB';
      u.rate = opts.rate || (DF.state ? DF.state.settings.rate : 0.9);
      u.pitch = 1;
      if (opts.onend) u.onend = function () { opts.onend(true); };
      speechSynthesis.speak(u);
      return true;
    } catch (e) { if (opts.onend) opts.onend(false); return false; }
  };

  // fala uma sequência de falas [{t:'texto', rate}], com pausas
  SP.speakSeq = function (lines, opts) {
    opts = opts || {};
    if (!SP.ttsAvailable() || !lines.length) { if (opts.onend) opts.onend(false); return false; }
    let i = 0;
    let cancelled = false;
    function next() {
      if (cancelled) return;
      if (i >= lines.length) { if (opts.onend) opts.onend(true); return; }
      const ln = lines[i++];
      SP.speak(ln.t, {
        rate: ln.rate || opts.rate,
        onend: function () { setTimeout(next, ln.pause == null ? 350 : ln.pause); }
      });
    }
    next();
    return { cancel: function () { cancelled = true; SP.stop(); } };
  };

  // botão de ouvir padrão
  SP.listenBtn = function (text, opts) {
    opts = opts || {};
    const b = DF.el('button', 'btn ghost tts-btn', opts.label || '🔊 Ouvir');
    if (!SP.ttsAvailable()) {
      b.disabled = true;
      b.textContent = '🔇 Sem voz neste aparelho';
      return b;
    }
    b.onclick = function () {
      if (Array.isArray(text)) SP.speakSeq(text, { rate: opts.rate });
      else SP.speak(text, { rate: opts.rate });
    };
    return b;
  };

  // ---------------- ASR (reconhecimento de fala) ----------------
  const Rec = (typeof window !== 'undefined') &&
    (window.SpeechRecognition || window.webkitSpeechRecognition) || null;

  SP.asrAvailable = function () { return !!Rec; };

  // ouve uma vez; devolve Promise<transcript|null>
  SP.listenOnce = function (opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      if (!Rec) { resolve(null); return; }
      let done = false;
      let rec;
      try { rec = new Rec(); } catch (e) { resolve(null); return; }
      rec.lang = opts.lang || 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 3;
      const to = setTimeout(function () {
        if (!done) { done = true; try { rec.abort(); } catch (e) { } resolve(null); }
      }, opts.timeout || 9000);
      rec.onresult = function (ev) {
        if (done) return;
        done = true; clearTimeout(to);
        const alts = [];
        try {
          const rs = ev.results[0];
          for (let i = 0; i < rs.length; i++) alts.push(rs[i].transcript);
        } catch (e) { /* ignore */ }
        resolve(alts.length ? alts : null);
      };
      rec.onerror = function () {
        if (done) return;
        done = true; clearTimeout(to); resolve(null);
      };
      rec.onend = function () {
        if (done) return;
        done = true; clearTimeout(to); resolve(null);
      };
      try { rec.start(); } catch (e) { done = true; clearTimeout(to); resolve(null); }
    });
  };

  // compara transcrição com alvo (tolerante)
  SP.matchTarget = function (alts, target) {
    if (!alts || !alts.length) return false;
    const tgt = DF.norm(target);
    const tw = tgt.split(' ').filter(Boolean);
    for (let i = 0; i < alts.length; i++) {
      const a = DF.norm(alts[i]);
      if (!a) continue;
      if (a === tgt) return true;
      const tol = Math.max(1, Math.floor(tgt.length * 0.22));
      if (DF.lev(a, tgt) <= tol) return true;
      // cobertura de palavras (≥ 70% das palavras do alvo presentes)
      const aw = a.split(' ');
      let hit = 0;
      tw.forEach(function (w) {
        if (aw.some(function (x) { return x === w || (w.length > 3 && DF.lev(x, w) <= 1); })) hit++;
      });
      if (tw.length && hit / tw.length >= 0.7) return true;
    }
    return false;
  };
})(typeof window !== 'undefined' ? window : globalThis);
