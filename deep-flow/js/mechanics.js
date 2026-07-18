/* DEEP FLOW — mechanics.js
   Renderizadores dos tipos de exercício. Cada item é desenhado num container
   e devolve { q } via onDone (q: 0 errou · 2 quase · 4 certo · 5 certo rápido). */
(function (root) {
  const DF = root.DF = root.DF || {};
  const M = DF.MECH = {};

  // ---------- helpers ----------
  function head(item) {
    const h = DF.el('div', 'q-head');
    if (item.title) h.appendChild(DF.el('div', 'q-title', item.title));
    if (item.main != null) h.appendChild(DF.el('div', 'q-main', DF.esc(item.main)));
    if (item.sub) h.appendChild(DF.el('div', 'q-sub', item.sub));
    return h;
  }

  function ttsRow(item) {
    if (!item.tts) return null;
    const row = DF.el('div', 'row gap tts-row');
    if (DF.SP.ttsAvailable()) {
      row.appendChild(DF.SP.listenBtn(item.tts, { label: item.ttsLabel || '🔊 Ouvir' }));
      const slow = DF.el('button', 'btn ghost tts-btn', '🐢 Devagar');
      slow.onclick = function () {
        if (Array.isArray(item.tts)) DF.SP.speakSeq(item.tts, { rate: 0.62 });
        else DF.SP.speak(item.tts, { rate: 0.62 });
      };
      row.appendChild(slow);
    } else if (item.showIfNoTTS) {
      const p = DF.el('div', 'no-tts-panel');
      p.appendChild(DF.el('div', 'no-tts-note', '🔇 Sem voz neste aparelho — leia o áudio por escrito:'));
      p.appendChild(DF.el('div', 'no-tts-text', DF.esc(item.showIfNoTTS)));
      return p;
    }
    return row;
  }

  function feedback(box, ok, item, onNext, closeNote) {
    const fb = DF.el('div', 'q-feedback ' + (ok ? 'ok' : 'bad'));
    fb.appendChild(DF.el('div', 'fb-line',
      ok ? (closeNote ? '🟡 Quase! Só um detalhe de escrita.' : '✅ Correto!') : '❌ Não conforme (NC registrada)'));
    if (item.expl) fb.appendChild(DF.el('div', 'fb-expl', item.expl));
    if (!ok && item.answers && item.answers.length) {
      fb.appendChild(DF.el('div', 'fb-ans', 'Resposta: <b>' + DF.esc(item.answers[0]) + '</b>'));
    }
    if (item.feedbackTts && DF.SP.ttsAvailable()) {
      fb.appendChild(DF.SP.listenBtn(item.feedbackTts, { label: '🔊 Ouvir de novo' }));
    }
    const next = DF.el('button', 'btn primary wide', 'Continuar ▸');
    next.onclick = onNext;
    fb.appendChild(next);
    box.appendChild(fb);
    fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // ---------- choice ----------
  M.choice = function (item, box, done) {
    box.appendChild(head(item));
    const t = ttsRow(item); if (t) box.appendChild(t);
    if (item.tts && DF.SP.ttsAvailable() && item.autoPlay !== false) {
      setTimeout(function () {
        if (Array.isArray(item.tts)) DF.SP.speakSeq(item.tts);
        else DF.SP.speak(item.tts);
      }, 350);
    }
    const grid = DF.el('div', 'opt-grid');
    let answered = false;
    (item.options || []).forEach(function (o) {
      const b = DF.el('button', 'btn opt', DF.esc(o.label));
      b.onclick = function () {
        if (answered) return;
        answered = true;
        DF.SP.stop();
        const ok = !!o.correct;
        DF.$$('.opt', grid).forEach(function (x) { x.disabled = true; });
        b.classList.add(ok ? 'right' : 'wrong');
        if (!ok) {
          DF.$$('.opt', grid).forEach(function (x, i) {
            if (item.options[i] && item.options[i].correct) x.classList.add('right');
          });
        }
        if (DF.AU) DF.AU.sfx(ok ? 'good' : 'bad');
        if (!ok) DF.vibrate(80);
        const it2 = Object.assign({}, item);
        if (!ok) it2.answers = [(item.options.find(function (x) { return x.correct; }) || {}).label];
        if (!ok && o.trap && item.trapNote) it2.expl = item.trapNote;
        feedback(box, ok, it2, function () { done({ q: ok ? 4 : 0 }); });
      };
      grid.appendChild(b);
    });
    box.appendChild(grid);
  };

  // ---------- type (digitar) ----------
  M.type = function (item, box, done) {
    box.appendChild(head(item));
    const t = ttsRow(item); if (t) box.appendChild(t);
    if (item.tts && DF.SP.ttsAvailable() && item.autoPlay !== false) {
      setTimeout(function () {
        if (Array.isArray(item.tts)) DF.SP.speakSeq(item.tts);
        else DF.SP.speak(item.tts);
      }, 350);
    }
    const row = DF.el('div', 'type-row');
    const inp = DF.el('input', 'inp type-inp');
    inp.placeholder = item.placeholder || 'Digite aqui…';
    inp.autocapitalize = 'off'; inp.autocomplete = 'off'; inp.spellcheck = false;
    const go = DF.el('button', 'btn primary', 'OK');
    row.appendChild(inp); row.appendChild(go);
    box.appendChild(row);
    let answered = false;
    function check() {
      if (answered) return;
      const val = inp.value;
      if (!val.trim()) { DF.toast('Digite a resposta. ✍️'); return; }
      answered = true;
      DF.SP.stop();
      inp.disabled = true; go.disabled = true;
      const a = DF.norm(val);
      let ok = false, close = false;
      (item.answers || []).forEach(function (ans) {
        if (a === DF.norm(ans)) ok = true;
      });
      if (!ok) {
        (item.answers || []).forEach(function (ans) {
          const b = DF.norm(ans);
          const tol = b.length > 5 ? 2 : 1;
          if (!ok && DF.lev(a, b) <= tol) { ok = true; close = true; }
        });
      }
      if (DF.AU) DF.AU.sfx(ok ? (close ? 'good' : 'great') : 'bad');
      if (!ok) DF.vibrate(80);
      feedback(box, ok, item, function () { done({ q: ok ? (close ? 2 : 4) : 0 }); }, close);
    }
    go.onclick = check;
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    setTimeout(function () { try { inp.focus(); } catch (e) { } }, 250);
  };

  // ---------- match (parear) ----------
  M.match = function (item, box, done) {
    box.appendChild(head(item));
    const pairs = item.pairs || [];
    const left = pairs.map(function (p, i) { return { t: p[0], i: i }; });
    const right = DF.shuffle(pairs.map(function (p, i) { return { t: p[1], i: i }; }));
    const grid = DF.el('div', 'match-grid');
    const colL = DF.el('div', 'match-col');
    const colR = DF.el('div', 'match-col');
    grid.appendChild(colL); grid.appendChild(colR);
    box.appendChild(grid);
    let selL = null, errors = 0, hits = 0;
    const btnsL = [], btnsR = [];
    left.forEach(function (o) {
      const b = DF.el('button', 'btn match-opt', DF.esc(o.t));
      b.dataset.i = o.i;
      b.onclick = function () {
        if (b.classList.contains('done')) return;
        btnsL.forEach(function (x) { x.classList.remove('sel'); });
        b.classList.add('sel');
        selL = b;
        if (item.ttsLeft && DF.SP.ttsAvailable()) DF.SP.speak(o.t);
        if (DF.AU) DF.AU.sfx('click');
      };
      btnsL.push(b);
      colL.appendChild(b);
    });
    right.forEach(function (o) {
      const b = DF.el('button', 'btn match-opt', DF.esc(o.t));
      b.dataset.i = o.i;
      b.onclick = function () {
        if (!selL || b.classList.contains('done')) return;
        if (b.dataset.i === selL.dataset.i) {
          b.classList.add('done'); selL.classList.add('done');
          selL.classList.remove('sel');
          selL = null; hits++;
          if (DF.AU) DF.AU.sfx('good');
          if (hits === pairs.length) {
            const ok = errors === 0;
            const q = errors === 0 ? 4 : (errors <= 1 ? 2 : 0);
            const it2 = Object.assign({}, item, { answers: null });
            feedback(box, q >= 2, it2, function () { done({ q: q }); }, q === 2);
          }
        } else {
          errors++;
          b.classList.add('shake');
          setTimeout(function () { b.classList.remove('shake'); }, 400);
          if (DF.AU) DF.AU.sfx('bad');
          DF.vibrate(60);
        }
      };
      btnsR.push(b);
      colR.appendChild(b);
    });
  };

  // ---------- order (montar frase) ----------
  M.order = function (item, box, done) {
    box.appendChild(head(item));
    const words = DF.shuffle((item.answer || '').split(' '));
    const line = DF.el('div', 'order-line');
    const pool = DF.el('div', 'order-pool');
    box.appendChild(line); box.appendChild(pool);
    const chosen = [];
    function redraw() {
      line.innerHTML = '';
      chosen.forEach(function (w, i) {
        const b = DF.el('button', 'btn tile on', DF.esc(w));
        b.onclick = function () {
          chosen.splice(i, 1);
          const pb = DF.el('button', 'btn tile', DF.esc(w));
          bindPool(pb, w);
          pool.appendChild(pb);
          redraw();
        };
        line.appendChild(b);
      });
      if (!chosen.length) line.appendChild(DF.el('span', 'order-hint', 'Toque nas palavras na ordem certa…'));
    }
    function bindPool(b, w) {
      b.onclick = function () {
        chosen.push(w);
        b.remove();
        if (DF.AU) DF.AU.sfx('click');
        redraw();
        if (!pool.children.length) checkNow();
      };
    }
    words.forEach(function (w) {
      const b = DF.el('button', 'btn tile', DF.esc(w));
      bindPool(b, w);
      pool.appendChild(b);
    });
    redraw();
    function checkNow() {
      const built = chosen.join(' ');
      const ok = DF.norm(built) === DF.norm(item.answer);
      if (DF.AU) DF.AU.sfx(ok ? 'great' : 'bad');
      const it2 = Object.assign({}, item, { answers: [item.answer] });
      if (ok && item.tts !== false && DF.SP.ttsAvailable()) DF.SP.speak(item.answer);
      feedback(box, ok, it2, function () { done({ q: ok ? 4 : 0 }); });
    }
  };

  // ---------- cards (briefing informativo) ----------
  M.cards = function (item, box, done) {
    box.appendChild(head(item));
    const wrap = DF.el('div', 'cards-wrap');
    box.appendChild(wrap);
    const cards = item.cards || [];
    let idx = 0;
    function draw() {
      wrap.innerHTML = '';
      const c = cards[idx];
      const card = DF.el('div', 'vocab-card');
      card.appendChild(DF.el('div', 'vc-count', (idx + 1) + ' / ' + cards.length));
      card.appendChild(DF.el('div', 'vc-en', DF.esc(c.en)));
      if (c.pt) card.appendChild(DF.el('div', 'vc-pt', DF.esc(c.pt)));
      if (c.def) card.appendChild(DF.el('div', 'vc-def', DF.esc(c.def)));
      if (DF.SP.ttsAvailable()) {
        card.appendChild(DF.SP.listenBtn(c.tts || c.en, { label: '🔊 Pronúncia' }));
        setTimeout(function () { DF.SP.speak(c.tts || c.en); }, 300);
      }
      wrap.appendChild(card);
      const nav = DF.el('div', 'row gap');
      if (idx > 0) {
        const back = DF.el('button', 'btn ghost', '◂ Anterior');
        back.onclick = function () { idx--; draw(); };
        nav.appendChild(back);
      }
      const nx = DF.el('button', 'btn primary', idx < cards.length - 1 ? 'Próximo ▸' : '✔ Entendi');
      nx.onclick = function () {
        if (DF.AU) DF.AU.sfx('click');
        if (idx < cards.length - 1) { idx++; draw(); }
        else done({ q: 4, info: true });
      };
      nav.appendChild(nx);
      wrap.appendChild(nav);
    }
    draw();
  };

  // ---------- read (texto + continuar) ----------
  M.read = function (item, box, done) {
    box.appendChild(head(item));
    const panel = DF.el('div', 'read-panel');
    if (item.textTitle) panel.appendChild(DF.el('div', 'read-title', DF.esc(item.textTitle)));
    String(item.text || '').split(/\n\n+/).forEach(function (par) {
      panel.appendChild(DF.el('p', 'read-p', DF.esc(par)));
    });
    box.appendChild(panel);
    if (DF.SP.ttsAvailable() && item.readAloud !== false) {
      box.appendChild(DF.SP.listenBtn(item.text.replace(/\n+/g, ' '), { label: '🔊 Ouvir o texto' }));
    }
    const nx = DF.el('button', 'btn primary wide', item.nextLabel || 'Li e entendi ▸');
    nx.onclick = function () { DF.SP.stop(); done({ q: 4, info: true }); };
    box.appendChild(nx);
  };

  // ---------- speak (desafio falado) ----------
  M.speak = function (item, box, done) {
    box.appendChild(head(item));
    const panel = DF.el('div', 'speak-panel');
    panel.appendChild(DF.el('div', 'speak-target', '“' + DF.esc(item.target) + '”'));
    if (item.ptHint) panel.appendChild(DF.el('div', 'speak-hint', DF.esc(item.ptHint)));
    box.appendChild(panel);
    if (DF.SP.ttsAvailable()) {
      box.appendChild(DF.SP.listenBtn(item.target, { label: '🔊 Ouvir o modelo' }));
    }
    const row = DF.el('div', 'col gap');
    let tries = 0;
    if (DF.SP.asrAvailable()) {
      const mic = DF.el('button', 'btn primary wide', '🎤 Falar agora');
      const status = DF.el('div', 'speak-status muted', 'Toque no microfone e fale a frase em inglês.');
      mic.onclick = async function () {
        mic.disabled = true;
        status.textContent = '🎧 Ouvindo… fale agora!';
        const alts = await DF.SP.listenOnce({ lang: 'en-US' });
        mic.disabled = false;
        if (!alts) {
          status.textContent = '⚠️ Não consegui ouvir (microfone/conexão). Tente de novo ou use a alternativa abaixo.';
          return;
        }
        tries++;
        const ok = DF.SP.matchTarget(alts, item.target);
        status.innerHTML = 'Você disse: <i>' + DF.esc(alts[0]) + '</i>';
        if (ok) {
          if (DF.AU) DF.AU.sfx('great');
          feedback(box, true, item, function () { done({ q: 5 }); });
        } else if (tries >= 3) {
          if (DF.AU) DF.AU.sfx('bad');
          feedback(box, false, Object.assign({}, item, { answers: [item.target] }),
            function () { done({ q: 2 }); });
        } else {
          if (DF.AU) DF.AU.sfx('bad');
          status.innerHTML += '<br>❌ Ainda não. Ouça o modelo e tente de novo (' + tries + '/3).';
        }
      };
      row.appendChild(mic);
      row.appendChild(status);
    } else {
      row.appendChild(DF.el('p', 'muted', '🎤 Reconhecimento de voz indisponível neste aparelho. Pratique em voz alta e registre com o mentor:'));
    }
    // caminho alternativo sempre presente: enviar áudio via WhatsApp
    const wa = DF.WA.btn('📼 Enviar áudio no WhatsApp',
      (item.waMsg || (DF.WA.header(item.waSec || 'Speaking', item.unit || 1) +
        '\nAluno: ' + (DF.state.name || '—') + '\nFrase praticada: ' + item.target +
        '\n🎙️ (áudio a caminho)')));
    row.appendChild(wa);
    if (!DF.SP.asrAvailable()) {
      const selfOk = DF.el('button', 'btn ghost wide', '✔ Pratiquei em voz alta');
      selfOk.onclick = function () { done({ q: 4, self: true }); };
      row.appendChild(selfOk);
    } else {
      const skip = DF.el('button', 'btn ghost wide', 'Pular este desafio');
      skip.onclick = function () { done({ q: 2, skipped: true }); };
      row.appendChild(skip);
    }
    box.appendChild(row);
  };

  // ---------- selfcheck (checklist can-do) ----------
  M.selfcheck = function (item, box, done) {
    box.appendChild(head(item));
    const panel = DF.el('div', 'speak-panel');
    panel.appendChild(DF.el('div', 'speak-target', '“' + DF.esc(item.statement) + '”'));
    if (item.ptHint) panel.appendChild(DF.el('div', 'speak-hint', DF.esc(item.ptHint)));
    box.appendChild(panel);
    if (DF.SP.ttsAvailable()) box.appendChild(DF.SP.listenBtn(item.statement, { label: '🔊 Ouvir' }));
    const grid = DF.el('div', 'col gap');
    [
      { lvl: 2, label: '🟢 Consigo com facilidade' },
      { lvl: 1, label: '🟡 Consigo com dificuldade' },
      { lvl: 0, label: '🔴 Ainda não consigo' }
    ].forEach(function (o) {
      const b = DF.el('button', 'btn opt', o.label);
      b.onclick = function () {
        const u = item.unit;
        DF.state.check[u] = DF.state.check[u] || [];
        DF.state.check[u][item.idx] = o.lvl;
        DF.save();
        if (DF.AU) DF.AU.sfx('click');
        done({ q: 4, info: true });
      };
      grid.appendChild(b);
    });
    box.appendChild(grid);
  };

  // ---------- render dispatch ----------
  M.render = function (item, box, done) {
    box.innerHTML = '';
    const fn = M[item.ui];
    if (!fn) { console.warn('mecânica desconhecida', item.ui); done({ q: 4, info: true }); return; }
    fn(item, box, done);
  };

  // ---------- geradores compartilhados (missão + teste) ----------
  const G = M.GEN = {};

  // vocabulário EN→PT (escolha)
  G.venpt = function (v, pool, rnd, unit) {
    const decoys = DF.pickN(pool.filter(function (x) { return x.en !== v.en; }), 6, rnd)
      .map(function (x) { return x.pt; });
    return {
      ui: 'choice', cat: 'voc', srsId: 'u' + unit + ':v:' + v.en,
      sp: { g: 'venpt', en: v.en, u: unit },
      title: '📦 O que significa:', main: v.en, tts: v.en,
      options: mkOpts(v.pt, decoys, rnd),
      expl: v.en + ' = ' + v.pt
    };
  };
  // vocabulário PT→EN (escolha)
  G.vpten = function (v, pool, rnd, unit) {
    const decoys = DF.pickN(pool.filter(function (x) { return x.en !== v.en; }), 6, rnd)
      .map(function (x) { return x.en; });
    return {
      ui: 'choice', cat: 'voc', srsId: 'u' + unit + ':v:' + v.en,
      sp: { g: 'vpten', en: v.en, u: unit },
      title: '🇧🇷 Como se diz em inglês:', main: v.pt,
      options: mkOpts(v.en, decoys, rnd),
      expl: v.pt + ' = ' + v.en, feedbackTts: v.en
    };
  };
  // radar de pronúncia: TTS fala, aluno escolhe a palavra
  G.vradar = function (v, pool, rnd, unit) {
    const decoys = DF.pickN(pool.filter(function (x) { return x.en !== v.en; }), 6, rnd)
      .map(function (x) { return x.en; });
    return {
      ui: 'choice', cat: 'pro', srsId: 'u' + unit + ':p:' + v.en,
      sp: { g: 'vradar', en: v.en, u: unit },
      title: '📡 Radar de pronúncia — que palavra você ouviu?',
      tts: v.en, ttsLabel: '🔊 Ouvir de novo',
      showIfNoTTS: null, autoPlay: true,
      options: mkOpts(v.en, decoys, rnd),
      expl: v.en + ' = ' + v.pt, feedbackTts: v.en
    };
  };
  // digitar EN a partir do PT
  G.vtype = function (v, pool, rnd, unit) {
    return {
      ui: 'type', cat: 'voc', srsId: 'u' + unit + ':v:' + v.en,
      sp: { g: 'vtype', en: v.en, u: unit },
      title: '⌨️ Escreva em inglês:', main: v.pt,
      answers: [v.en].concat(v.alt || []),
      expl: v.pt + ' = ' + v.en, feedbackTts: v.en
    };
  };

  function mkOpts(correct, decoys, rnd, trap) {
    const seen = {}; seen[correct] = 1;
    const opts = [{ label: correct, correct: true }];
    if (trap && trap !== correct) { opts.push({ label: trap, trap: true }); seen[trap] = 1; }
    for (let i = 0; i < decoys.length && opts.length < 4; i++) {
      if (!seen[decoys[i]]) { seen[decoys[i]] = 1; opts.push({ label: decoys[i] }); }
    }
    return DF.shuffle(opts, rnd);
  }
  M.mkOpts = mkOpts;

  // reconstrói item a partir do spec compacto salvo no SRS (Manutenção de NCs)
  M.fromSpec = function (sp) {
    if (!sp || !sp.g) return null;
    const unit = sp.u || 1;
    const data = DF.UNIT_DATA[unit];
    if (!data) return null;
    const pool = (data.glossary || []).concat(data.extraVocab || []);
    const v = pool.find(function (x) { return x.en === sp.en; });
    if (!v) return null;
    const rnd = Math.random;
    if (sp.g === 'venpt') return G.venpt(v, pool, rnd, unit);
    if (sp.g === 'vpten') return G.vpten(v, pool, rnd, unit);
    if (sp.g === 'vradar') return G.vradar(v, pool, rnd, unit);
    if (sp.g === 'vtype') return G.vtype(v, pool, rnd, unit);
    if (sp.g === 'fixed' && sp.item) return sp.item;
    return null;
  };
})(typeof window !== 'undefined' ? window : globalThis);
