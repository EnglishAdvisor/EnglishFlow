/* A Maldição da Cuca — challenges.js
   Gerador dos 13 tipos de desafio. Sem DOM: devolve objetos que a batalha renderiza.
   Suporta rnd semeado (missões do mentor são idênticas para todos os alunos). */
(function (root) {
  const G = root.G = root.G || {};
  const CH = G.CH = {};
  const D = function () { return G.DATA; };

  function baseTime(ui, diff) {
    const f = 1 - (diff - 1) * 0.12;
    if (ui === 'tiles') return 30 * f;
    if (ui === 'type') return 24 * f;
    if (ui === 'speak') return 20;
    return 16 * f;
  }

  function mkOptions(correct, decoys, rnd, trapLabel) {
    const seen = { }; seen[correct] = 1;
    const opts = [{ label: correct, correct: true }];
    if (trapLabel && trapLabel !== correct) {
      opts.push({ label: trapLabel, trap: true });
      seen[trapLabel] = 1;
    }
    for (let i = 0; i < decoys.length && opts.length < 4; i++) {
      const d = decoys[i];
      if (!seen[d]) { seen[d] = 1; opts.push({ label: d }); }
    }
    return G.shuffle(opts, rnd);
  }

  function typeCheck(answers) {
    // answers: array de respostas aceitas
    return function (input) {
      const a = G.norm(input);
      if (!a) return { ok: false, close: false };
      for (let i = 0; i < answers.length; i++) {
        const b = G.norm(answers[i]);
        if (a === b) return { ok: true, close: false };
      }
      for (let i = 0; i < answers.length; i++) {
        const b = G.norm(answers[i]);
        const tol = b.length > 5 ? 2 : 1;
        if (G.lev(a, b) <= tol) return { ok: true, close: true };
      }
      return { ok: false, close: false };
    };
  }

  // ---------------- geradores ----------------
  const GEN = {};

  GEN.venpt = function (o) {
    const it = o.fixed || G.pick(o.customVocab || D().VOCAB_ALL, o.rnd);
    const en = it[0], pt = it[1], theme = it[2];
    let pool = [];
    if (theme && D().THEMES[theme]) pool = D().THEMES[theme].words.filter(function (w) { return w[0] !== en; }).map(function (w) { return w[1]; });
    if (o.customVocab) pool = pool.concat(o.customVocab.filter(function (w) { return w[0] !== en; }).map(function (w) { return w[1]; }));
    pool = pool.concat(G.pickN(D().VOCAB_ALL, 8, o.rnd).filter(function (w) { return w[0] !== en; }).map(function (w) { return w[1]; }));
    return {
      kind: 'venpt', ui: 'choice', srsId: o.noSrs ? null : 'v:' + en,
      time: baseTime('choice', o.diff),
      title: 'O que significa:', main: en, sub: null,
      tts: en, options: mkOptions(pt, G.shuffle(pool, o.rnd), o.rnd),
      answerText: en + ' = ' + pt, ptText: null, note: null
    };
  };

  GEN.vpten = function (o) {
    const it = o.fixed || G.pick(o.customVocab || D().VOCAB_ALL, o.rnd);
    const en = it[0], pt = it[1], theme = it[2];
    let pool = [];
    if (theme && D().THEMES[theme]) pool = D().THEMES[theme].words.filter(function (w) { return w[0] !== en; }).map(function (w) { return w[0]; });
    if (o.customVocab) pool = pool.concat(o.customVocab.filter(function (w) { return w[0] !== en; }).map(function (w) { return w[0]; }));
    pool = pool.concat(G.pickN(D().VOCAB_ALL, 8, o.rnd).filter(function (w) { return w[0] !== en; }).map(function (w) { return w[0]; }));
    return {
      kind: 'vpten', ui: 'choice', srsId: o.noSrs ? null : 'v:' + en,
      time: baseTime('choice', o.diff),
      title: 'Como se diz em inglês:', main: pt, sub: null,
      tts: null, options: mkOptions(en, G.shuffle(pool, o.rnd), o.rnd),
      answerText: pt + ' = ' + en, ptText: null, note: null, feedbackTts: en
    };
  };

  GEN.ff = function (o) {
    const it = o.fixed || G.pick(D().FF, o.rnd);
    const pool = G.pickN(D().FF.filter(function (f) { return f.w !== it.w; }), 6, o.rnd).map(function (f) { return f.real; });
    return {
      kind: 'ff', ui: 'choice', srsId: 'ff:' + it.w,
      time: baseTime('choice', o.diff) + 2,
      title: '🎭 Cuidado com o falso amigo:', main: it.w,
      sub: '“' + it.ex + '”',
      tts: it.w, options: mkOptions(it.real, pool, o.rnd, it.trap),
      answerText: it.w + ' = ' + it.real, ptText: null, note: it.note, trapNote: 'CAIU NA PEGADINHA! ' + it.note
    };
  };

  GEN.odd = function (o) {
    const keys = Object.keys(D().THEMES);
    const tA = o.rnd ? G.pick(keys, o.rnd) : G.pick(keys);
    let tB = G.pick(keys, o.rnd);
    while (tB === tA) tB = G.pick(keys, o.rnd);
    const grupo = G.pickN(D().THEMES[tA].words, 3, o.rnd);
    const intr = G.pick(D().THEMES[tB].words, o.rnd);
    const opts = G.shuffle(
      grupo.map(function (w) { return { label: w[0] }; }).concat([{ label: intr[0], correct: true }]),
      o.rnd
    );
    return {
      kind: 'odd', ui: 'choice', srsId: 'v:' + intr[0],
      time: baseTime('choice', o.diff) + 2,
      title: '🕵️ Quem NÃO pertence ao grupo?', main: null, sub: null,
      tts: null, options: opts,
      answerText: intr[0] + ' (' + intr[1] + ')',
      ptText: 'O grupo era ' + D().THEMES[tA].pt.toLowerCase() + '; o intruso vem de ' + D().THEMES[tB].pt.toLowerCase() + '.',
      note: null
    };
  };

  GEN.build = function (o) {
    let it = o.fixed;
    if (!it) {
      const lv = Math.min(3, o.diff);
      const cands = (o.customSent || D().SENTENCES).filter(function (s) { return !o.customSent ? s.lv <= lv && s.lv >= Math.max(1, lv - 1) : true; });
      it = G.pick(cands.length ? cands : D().SENTENCES, o.rnd);
    }
    const words = it.en.replace(/\s+/g, ' ').trim().split(' ');
    let tiles = G.shuffle(words, o.rnd);
    if (tiles.join(' ') === words.join(' ') && words.length > 2) tiles = G.shuffle(words, o.rnd).reverse();
    const idx = D().SENTENCES.indexOf(it);
    return {
      kind: 'build', ui: 'tiles', srsId: o.noSrs || idx < 0 ? null : 'sn:' + idx,
      time: 16 + words.length * 2.6,
      title: '🧩 Monte a frase:', main: null,
      sub: '“' + it.pt + '”',
      tts: null, tiles: tiles,
      check: typeCheck([it.en]),
      answerText: it.en, ptText: it.pt, note: null, feedbackTts: it.en
    };
  };

  GEN.ltype = function (o) {
    let target, pt, srsId;
    if (o.fixed) {
      target = o.fixed.en || o.fixed[0]; pt = o.fixed.pt || o.fixed[1]; srsId = o.fixed.srsId || null;
    } else if (o.diff <= 1 || (o.rnd || Math.random)() < 0.45) {
      const it = G.pick(o.customVocab || D().VOCAB_ALL, o.rnd);
      target = it[0]; pt = it[1]; srsId = 'v:' + it[0];
    } else {
      const cands = D().SENTENCES.filter(function (s) { return s.lv <= (o.diff >= 3 ? 2 : 1); });
      const it = G.pick(cands, o.rnd);
      target = it.en; pt = it.pt; srsId = 'sn:' + D().SENTENCES.indexOf(it);
    }
    return {
      kind: 'ltype', ui: 'type', srsId: o.noSrs ? null : srsId,
      time: 20 + Math.min(14, target.length * 0.45),
      title: '🎧 Ouça e escreva em inglês:', main: null, sub: null,
      tts: target, ttsRate: o.ttsRate || 0.92, listenOnly: true,
      check: typeCheck([target]),
      answerText: target, ptText: pt, note: null, feedbackTts: target
    };
  };

  GEN.lpair = function (o) {
    const it = o.fixed || G.pick(D().MINPAIRS, o.rnd);
    const spoken = (o.rnd || Math.random)() < 0.5 ? 'a' : 'b';
    const w = it[spoken], correct = w + '  ·  ' + (spoken === 'a' ? it.apt : it.bpt);
    const other = spoken === 'a' ? it.b + '  ·  ' + it.bpt : it.a + '  ·  ' + it.apt;
    return {
      kind: 'lpair', ui: 'choice', srsId: 'mp:' + it.a,
      time: 14,
      title: '👂 Qual palavra você ouviu?', main: null, sub: 'Sons parecidos, sentidos diferentes!',
      tts: w, ttsRate: o.ttsRate || 0.9, listenOnly: true,
      options: G.shuffle([{ label: correct, correct: true }, { label: other }], o.rnd),
      answerText: w,
      ptText: it.a + ' = ' + it.apt + '  |  ' + it.b + ' = ' + it.bpt,
      note: null, feedbackTts: it.a + '. ' + it.b + '.'
    };
  };

  GEN.speak = function (o) {
    const it = o.fixed || G.pick(o.customVocab || D().VOCAB_ALL, o.rnd);
    const en = it[0], pt = it[1];
    return {
      kind: 'speak', ui: 'speak', srsId: o.noSrs ? null : 'v:' + en,
      time: 22,
      title: '🎤 Pronuncie em voz alta:', main: en, sub: '(' + pt + ')',
      tts: en, speakTarget: en,
      answerText: en, ptText: pt, note: null, feedbackTts: en
    };
  };

  GEN.ed = function (o) {
    const it = o.fixed || G.pick(D().ED, o.rnd);
    const opts = [
      { label: '/t/ — seco, sem vogal', correct: it.s === 't' },
      { label: '/d/ — vibrado, sem vogal', correct: it.s === 'd' },
      { label: '/ɪd/ — sílaba extra "id"', correct: it.s === 'id' }
    ];
    return {
      kind: 'ed', ui: 'choice', srsId: 'ed:' + it.w,
      time: 14,
      title: '🔚 Como soa o -ED de:', main: it.w, sub: '(' + it.pt + ')',
      tts: null, options: opts,
      answerText: it.w + ' → /' + (it.s === 'id' ? 'ɪd' : it.s) + '/',
      ptText: it.pt, note: null, feedbackTts: it.w
    };
  };

  GEN.irr = function (o) {
    const it = o.fixed || G.pick(D().IRREG, o.rnd);
    const askPP = o.diff >= 3 && (o.rnd || Math.random)() < 0.5;
    const ans = askPP ? it.pp : it.p;
    return {
      kind: 'irr', ui: 'type', srsId: 'ir:' + it.b,
      time: baseTime('type', o.diff),
      title: askPP ? '🌕 Qual é o PARTICÍPIO de:' : '🌗 Qual é o PASSADO de:',
      main: it.b, sub: '(' + it.pt + ')',
      tts: it.b,
      check: typeCheck(ans.split('/')),
      answerText: it.b + ' → ' + ans, ptText: it.pt, note: null, feedbackTts: ans.split('/')[0]
    };
  };

  GEN.prep = function (o) {
    const it = o.fixed || G.pick(D().PREP, o.rnd);
    const full = it.s.replace('___', it.a);
    return {
      kind: 'prep', ui: 'choice', srsId: 'pp:' + it.s,
      time: 13,
      title: '📍 Complete: IN, ON ou AT?', main: it.s, sub: '(' + it.pt + ')',
      tts: null,
      options: G.shuffle([
        { label: 'in', correct: it.a === 'in' },
        { label: 'on', correct: it.a === 'on' },
        { label: 'at', correct: it.a === 'at' }
      ], o.rnd),
      answerText: full, ptText: it.pt, note: null, feedbackTts: full
    };
  };

  GEN.phg = function (o) {
    const it = o.fixed || G.pick(D().PHRASAL, o.rnd);
    const pool = G.shuffle(D().PARTICLES.filter(function (p) { return p !== it.part; }), o.rnd);
    return {
      kind: 'phg', ui: 'choice', srsId: 'ph:' + it.v,
      time: baseTime('choice', o.diff) + 1,
      title: '🐬 Complete o phrasal verb:', main: it.gap,
      sub: o.diff <= 1 ? '(' + it.pt + ')' : null,
      tts: null, options: mkOptions(it.part, pool, o.rnd),
      answerText: it.v + ' = ' + it.pt, ptText: '“' + it.gap.replace('___', it.part.toUpperCase()) + '”',
      note: null, feedbackTts: it.gap.replace('___', it.part)
    };
  };

  GEN.phm = function (o) {
    const it = o.fixed || G.pick(D().PHRASAL, o.rnd);
    const pool = G.pickN(D().PHRASAL.filter(function (p) { return p.v !== it.v; }), 6, o.rnd).map(function (p) { return p.pt; });
    return {
      kind: 'phm', ui: 'choice', srsId: 'ph:' + it.v,
      time: baseTime('choice', o.diff),
      title: '💬 O que significa:', main: it.v, sub: null,
      tts: it.v, options: mkOptions(it.pt, pool, o.rnd),
      answerText: it.v + ' = ' + it.pt, ptText: '“' + it.gap.replace('___', it.part) + '”',
      note: null, feedbackTts: it.v
    };
  };

  // ---------------- API ----------------
  CH.gen = function (kind, opts) {
    opts = opts || {};
    opts.diff = opts.diff || 1;
    let k = kind;
    // sem TTS disponível, troca desafios de ouvido por vocabulário
    const ttsOk = !G.AU || G.AU.hasTTS();
    if (!ttsOk && (k === 'ltype' || k === 'lpair')) k = 'venpt';
    if (!GEN[k]) k = 'venpt';
    const ch = GEN[k](opts);
    ch.diff = opts.diff;
    return ch;
  };

  // regenera um desafio a partir de um id do SRS (assombrações)
  CH.genFromId = function (id, opts) {
    opts = opts || {}; opts.diff = opts.diff || 1;
    const p = id.split(':'), pre = p[0], key = p.slice(1).join(':');
    const r = opts.rnd || Math.random;
    try {
      if (pre === 'v') {
        const it = G.DATA.vocabByEn(key);
        if (it) return CH.gen(r() < 0.5 ? 'venpt' : 'vpten', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ff') {
        const it = G.DATA.ffByWord(key);
        if (it) return CH.gen('ff', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ph') {
        const it = G.DATA.phByV(key);
        if (it) return CH.gen(r() < 0.5 ? 'phg' : 'phm', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ir') {
        const it = G.DATA.irByB(key);
        if (it) return CH.gen('irr', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ed') {
        const it = G.DATA.edByW(key);
        if (it) return CH.gen('ed', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'mp') {
        const it = G.DATA.mpByWord(key);
        if (it) return CH.gen('lpair', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'pp') {
        for (let i = 0; i < G.DATA.PREP.length; i++) {
          if (G.DATA.PREP[i].s === key) return CH.gen('prep', Object.assign({}, opts, { fixed: G.DATA.PREP[i] }));
        }
      } else if (pre === 'sn') {
        const it = G.DATA.SENTENCES[parseInt(key, 10)];
        if (it) return CH.gen('build', Object.assign({}, opts, { fixed: it }));
      }
    } catch (e) { /* cai no fallback */ }
    return CH.gen('venpt', opts);
  };

  // desafio para um inimigo de batalha (assombração puxa itens do SRS)
  CH.forBattle = function (enemySpec, diff) {
    if (enemySpec.ghost) {
      const due = G.SRS.due(12);
      if (due.length) return CH.genFromId(G.pick(due), { diff: diff });
    }
    // 12% de chance de revisão espontânea
    if (!enemySpec.boss && Math.random() < 0.12) {
      const due = G.SRS.due(12);
      if (due.length) {
        const ch = CH.genFromId(G.pick(due), { diff: diff });
        ch.isReview = true;
        return ch;
      }
    }
    let kinds = enemySpec.kinds && enemySpec.kinds.length ? enemySpec.kinds : ['venpt'];
    // pronúncia com microfone: aparece de vez em quando se estiver ligada
    if (G.state && G.state.set && G.state.set.mic && G.AU && G.AU.recSupported() && Math.random() < 0.14) {
      return CH.gen('speak', { diff: diff });
    }
    return CH.gen(G.pick(kinds), { diff: diff });
  };

  // compila as perguntas de uma missão de mentor (determinístico via seed)
  CH.compileMission = function (m) {
    const rnd = G.mulberry(G.hashStr('mission:' + m.seed));
    const list = [];
    const kinds = m.kinds && m.kinds.length ? m.kinds : ['venpt', 'vpten'];
    const customVocab = (m.custom && m.custom.vocab && m.custom.vocab.length >= 4) ? m.custom.vocab : null;
    const customSent = (m.custom && m.custom.sentences && m.custom.sentences.length >= 1)
      ? m.custom.sentences.map(function (s) { return { en: s[0], pt: s[1], lv: 2 }; })
      : null;
    const order = [];
    for (let i = 0; i < m.n; i++) order.push(kinds[i % kinds.length]);
    const shuffled = G.shuffle(order, rnd);
    let vi = 0, si = 0;
    for (let i = 0; i < m.n; i++) {
      let k = shuffled[i];
      const opts = { diff: m.diff || 1, rnd: rnd, noSrs: false };
      if (customVocab && (k === 'venpt' || k === 'vpten' || k === 'ltype' || k === 'speak')) {
        opts.customVocab = customVocab;
        opts.fixed = customVocab[vi % customVocab.length]; vi++;
        opts.noSrs = true;
      }
      if (customSent && k === 'build') {
        opts.customSent = customSent;
        opts.fixed = customSent[si % customSent.length]; si++;
        opts.noSrs = true;
      }
      if (customSent && k === 'ltype' && !customVocab) {
        opts.fixed = customSent[si % customSent.length]; si++;
        opts.noSrs = true;
      }
      list.push(CH.gen(k, opts));
    }
    return list;
  };

  // perguntas do desafio diário (seed = data)
  CH.compileDaily = function (dateKey) {
    const rnd = G.mulberry(G.hashStr('daily:' + dateKey));
    const plan = ['venpt', 'vpten', 'ff', 'phg', 'irr', 'ed', 'prep', 'build', 'ltype', 'lpair'];
    return plan.map(function (k) { return CH.gen(k, { diff: 2, rnd: rnd }); });
  };
})(typeof window !== 'undefined' ? window : globalThis);
