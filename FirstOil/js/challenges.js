/* FIRST OIL — challenges.js
   Gerador dos 17 tipos de desafio técnico. Sem DOM. Suporta rnd semeado
   (Ordens de Serviço do instrutor são idênticas para toda a turma) e filtro
   de temas por unidade da cadeia. */
(function (root) {
  const G = root.G = root.G || {};
  const CH = G.CH = {};
  const D = function () { return G.DATA; };

  function baseTime(ui, diff) {
    const f = 1 - (diff - 1) * 0.12;
    if (ui === 'tiles') return 32 * f;
    if (ui === 'type') return 24 * f;
    if (ui === 'speak') return 20;
    return 16 * f;
  }

  function mkOptions(correct, decoys, rnd, trapLabel) {
    const seen = {}; seen[correct] = 1;
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
    return function (input) {
      const a = G.norm(input);
      if (!a) return { ok: false, close: false };
      for (let i = 0; i < answers.length; i++) {
        if (a === G.norm(answers[i])) return { ok: true, close: false };
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
    const bank = o.customVocab || D().vocabByThemes(o.themes);
    const it = o.fixed || G.pick(bank, o.rnd);
    const en = it[0], pt = it[1], theme = it[2];
    let pool = [];
    if (theme && D().THEMES[theme]) pool = D().THEMES[theme].words.filter(function (w) { return w[0] !== en; }).map(function (w) { return w[1]; });
    if (o.customVocab) pool = pool.concat(o.customVocab.filter(function (w) { return w[0] !== en; }).map(function (w) { return w[1]; }));
    pool = pool.concat(G.pickN(D().VOCAB_ALL, 8, o.rnd).filter(function (w) { return w[0] !== en; }).map(function (w) { return w[1]; }));
    return {
      kind: 'venpt', ui: 'choice', srsId: o.noSrs ? null : 'v:' + en,
      time: baseTime('choice', o.diff),
      title: '🛢️ O que significa:', main: en, sub: null,
      tts: en, options: mkOptions(pt, G.shuffle(pool, o.rnd), o.rnd),
      answerText: en + ' = ' + pt, ptText: null, note: null
    };
  };

  GEN.vpten = function (o) {
    const bank = o.customVocab || D().vocabByThemes(o.themes);
    const it = o.fixed || G.pick(bank, o.rnd);
    const en = it[0], pt = it[1], theme = it[2];
    let pool = [];
    if (theme && D().THEMES[theme]) pool = D().THEMES[theme].words.filter(function (w) { return w[0] !== en; }).map(function (w) { return w[0]; });
    if (o.customVocab) pool = pool.concat(o.customVocab.filter(function (w) { return w[0] !== en; }).map(function (w) { return w[0]; }));
    pool = pool.concat(G.pickN(D().VOCAB_ALL, 8, o.rnd).filter(function (w) { return w[0] !== en; }).map(function (w) { return w[0]; }));
    return {
      kind: 'vpten', ui: 'choice', srsId: o.noSrs ? null : 'v:' + en,
      time: baseTime('choice', o.diff),
      title: '🇧🇷 Como se diz em inglês:', main: pt, sub: null,
      tts: null, options: mkOptions(en, G.shuffle(pool, o.rnd), o.rnd),
      answerText: pt + ' = ' + en, ptText: null, note: null, feedbackTts: en
    };
  };

  GEN.abbr = function (o) {
    const it = o.fixed || G.pick(D().ABBR, o.rnd);
    const reverse = !o.fixed && o.diff >= 3 && (o.rnd || Math.random)() < 0.4;
    const others = G.pickN(D().ABBR.filter(function (x) { return x.a !== it.a; }), 6, o.rnd);
    if (reverse) {
      return {
        kind: 'abbr', ui: 'choice', srsId: 'ab:' + it.a,
        time: baseTime('choice', o.diff),
        title: '🔤 Qual sigla corresponde a:', main: it.full, sub: '(' + it.pt + ')',
        tts: it.full,
        options: mkOptions(it.a, others.map(function (x) { return x.a; }), o.rnd),
        answerText: it.a + ' = ' + it.full, ptText: it.pt, note: null
      };
    }
    return {
      kind: 'abbr', ui: 'choice', srsId: 'ab:' + it.a,
      time: baseTime('choice', o.diff) + 1,
      title: '🔤 O que significa a sigla:', main: it.a, sub: null,
      tts: null,
      options: mkOptions(it.full, others.map(function (x) { return x.full; }), o.rnd),
      answerText: it.a + ' = ' + it.full, ptText: it.pt, note: null, feedbackTts: it.full
    };
  };

  GEN.ff = function (o) {
    const it = o.fixed || G.pick(D().FF, o.rnd);
    const pool = G.pickN(D().FF.filter(function (f) { return f.w !== it.w; }), 6, o.rnd).map(function (f) { return f.real; });
    return {
      kind: 'ff', ui: 'choice', srsId: 'ff:' + it.w,
      time: baseTime('choice', o.diff) + 2,
      title: '🚩 Cuidado com o falso amigo:', main: it.w,
      sub: '“' + it.ex + '”',
      tts: it.w, options: mkOptions(it.real, pool, o.rnd, it.trap),
      answerText: it.w + ' = ' + it.real, ptText: null, note: it.note,
      trapNote: 'PEGADINHA CLÁSSICA! ' + it.note
    };
  };

  GEN.odd = function (o) {
    const keys = Object.keys(D().THEMES);
    const tA = G.pick(keys, o.rnd);
    let tB = G.pick(keys, o.rnd);
    while (tB === tA) tB = G.pick(keys, o.rnd);
    const grupo = G.pickN(D().THEMES[tA].words, 3, o.rnd);
    const intr = G.pick(D().THEMES[tB].words, o.rnd);
    return {
      kind: 'odd', ui: 'choice', srsId: 'v:' + intr[0],
      time: baseTime('choice', o.diff) + 2,
      title: '🕵️ Qual termo NÃO pertence à disciplina?', main: null, sub: null,
      tts: null,
      options: G.shuffle(grupo.map(function (w) { return { label: w[0] }; }).concat([{ label: intr[0], correct: true }]), o.rnd),
      answerText: intr[0] + ' (' + intr[1] + ')',
      ptText: 'O grupo era ' + D().THEMES[tA].pt + '; o intruso vem de ' + D().THEMES[tB].pt + '.',
      note: null
    };
  };

  GEN.build = function (o) {
    let it = o.fixed;
    if (!it) {
      const lv = Math.min(3, o.diff);
      const cands = (o.customSent || D().SENTENCES).filter(function (s) { return !o.customSent ? (s.lv <= lv && s.lv >= Math.max(1, lv - 1)) : true; });
      it = G.pick(cands.length ? cands : D().SENTENCES, o.rnd);
    }
    const words = it.en.replace(/\s+/g, ' ').trim().split(' ');
    let tiles = G.shuffle(words, o.rnd);
    if (tiles.join(' ') === words.join(' ') && words.length > 2) tiles = G.shuffle(words, o.rnd).reverse();
    const idx = D().SENTENCES.indexOf(it);
    return {
      kind: 'build', ui: 'tiles', srsId: o.noSrs || idx < 0 ? null : 'sn:' + idx,
      time: 16 + words.length * 2.6,
      title: '✍️ Monte a frase:', main: null,
      sub: '“' + it.pt + '”',
      tts: null, tiles: tiles,
      check: typeCheck([it.en]),
      answerText: it.en, ptText: it.pt, note: null, feedbackTts: it.en
    };
  };

  GEN.order = function (o) {
    let it = o.fixed, idx;
    if (!it) { idx = Math.floor((o.rnd || Math.random)() * D().ORDER.length); it = D().ORDER[idx]; }
    else idx = D().ORDER.indexOf(it);
    let tiles = G.shuffle(it.steps, o.rnd);
    if (tiles.join('|') === it.steps.join('|')) tiles = G.shuffle(it.steps, o.rnd).reverse();
    return {
      kind: 'order', ui: 'tiles', srsId: idx < 0 ? null : 'or:' + idx,
      time: 18 + it.steps.length * 7,
      title: '🔢 Coloque o processo em ordem:', main: null,
      sub: it.ctx,
      tts: null, tiles: tiles,
      check: typeCheck([it.steps.join(' ')]),
      answerText: it.steps.join(' → '), ptText: it.ctx, note: null
    };
  };

  GEN.ltype = function (o) {
    let target, pt, srsId;
    if (o.fixed) {
      target = o.fixed.en || o.fixed[0]; pt = o.fixed.pt || o.fixed[1]; srsId = o.fixed.srsId || null;
    } else if (o.diff <= 1 || (o.rnd || Math.random)() < 0.4) {
      const it = G.pick(o.customVocab || D().vocabByThemes(o.themes), o.rnd);
      target = it[0]; pt = it[1]; srsId = 'v:' + it[0];
    } else {
      const cands = D().SENTENCES.filter(function (s) { return s.lv <= (o.diff >= 3 ? 2 : 1); });
      const it = G.pick(cands, o.rnd);
      target = it.en; pt = it.pt; srsId = 'sn:' + D().SENTENCES.indexOf(it);
    }
    return {
      kind: 'ltype', ui: 'type', srsId: o.noSrs ? null : srsId,
      time: 20 + Math.min(14, target.length * 0.45),
      title: '🎧 Ouça a transmissão e escreva:', main: null, sub: null,
      tts: target, ttsRate: o.ttsRate || 0.92, listenOnly: true,
      check: typeCheck([target]),
      answerText: target, ptText: pt, note: null, feedbackTts: target
    };
  };

  GEN.lpair = function (o) {
    const it = o.fixed || G.pick(D().MINPAIRS, o.rnd);
    const spoken = (o.rnd || Math.random)() < 0.5 ? 'a' : 'b';
    const w = it[spoken];
    const correct = w + '  ·  ' + (spoken === 'a' ? it.apt : it.bpt);
    const other = spoken === 'a' ? it.b + '  ·  ' + it.bpt : it.a + '  ·  ' + it.apt;
    return {
      kind: 'lpair', ui: 'choice', srsId: 'mp:' + it.a,
      time: 14,
      title: '👂 Qual palavra veio no rádio?', main: null, sub: 'Sons parecidos causam retrabalho.',
      tts: w, ttsRate: o.ttsRate || 0.9, listenOnly: true,
      options: G.shuffle([{ label: correct, correct: true }, { label: other }], o.rnd),
      answerText: w,
      ptText: it.a + ' = ' + it.apt + '  |  ' + it.b + ' = ' + it.bpt,
      note: null, feedbackTts: it.a + '. ' + it.b + '.'
    };
  };

  GEN.num = function (o) {
    const n = o.fixed || D().genNumber(o.rnd);
    return {
      kind: 'num', ui: 'type', numeric: true, srsId: 'nm:' + n.unit,
      time: 18,
      title: '🔊 ' + n.ctx, main: null, sub: 'Ouça e digite apenas o número.',
      tts: n.say, ttsRate: o.ttsRate || 0.9, listenOnly: true,
      check: (function (val) {
        return function (input) {
          const digits = String(input || '').replace(/[^\d]/g, '');
          return { ok: digits === String(val), close: false };
        };
      })(n.val),
      answerText: n.val.toLocaleString('pt-BR') + ' ' + n.unit,
      ptText: 'Em inglês: ' + n.say, note: null, feedbackTts: n.say
    };
  };

  GEN.radio = function (o) {
    const L = o.fixed || G.pick(D().NATO_LETTERS, o.rnd);
    const word = D().NATO[L];
    const listen = !o.fixed && (o.rnd || Math.random)() < 0.5;
    if (listen) {
      const others = G.pickN(D().NATO_LETTERS.filter(function (x) { return x !== L; }), 3, o.rnd);
      return {
        kind: 'radio', ui: 'choice', srsId: 'na:' + L,
        time: 13,
        title: '📻 Que letra foi transmitida?', main: null, sub: 'Alfabeto fonético NATO',
        tts: word, ttsRate: 0.9, listenOnly: true,
        options: G.shuffle([{ label: L, correct: true }].concat(others.map(function (x) { return { label: x }; })), o.rnd),
        answerText: word + ' = ' + L, ptText: null, note: null, feedbackTts: word
      };
    }
    const decoys = G.pickN(D().NATO_LETTERS.filter(function (x) { return x !== L; }), 3, o.rnd)
      .map(function (x) { return D().NATO[x]; });
    return {
      kind: 'radio', ui: 'choice', srsId: 'na:' + L,
      time: 13,
      title: '📻 Como se transmite a letra:', main: L, sub: 'Alfabeto fonético NATO',
      tts: null,
      options: mkOptions(word, decoys, o.rnd),
      answerText: L + ' = ' + word, ptText: null, note: null, feedbackTts: word
    };
  };

  GEN.speak = function (o) {
    const it = o.fixed || G.pick(o.customVocab || D().vocabByThemes(o.themes), o.rnd);
    const en = it[0], pt = it[1];
    return {
      kind: 'speak', ui: 'speak', srsId: o.noSrs ? null : 'v:' + en,
      time: 22,
      title: '🎤 Transmita pelo rádio:', main: en, sub: '(' + pt + ')',
      tts: en, speakTarget: en,
      answerText: en, ptText: pt, note: null, feedbackTts: en
    };
  };

  GEN.ed = function (o) {
    const it = o.fixed || G.pick(D().ED, o.rnd);
    return {
      kind: 'ed', ui: 'choice', srsId: 'ed:' + it.w,
      time: 14,
      title: '🔚 Como soa o -ED de:', main: it.w, sub: '(' + it.pt + ')',
      tts: null,
      options: [
        { label: '/t/ — seco, sem vogal', correct: it.s === 't' },
        { label: '/d/ — vibrado, sem vogal', correct: it.s === 'd' },
        { label: '/ɪd/ — sílaba extra "id"', correct: it.s === 'id' }
      ],
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
      title: askPP ? '📝 Qual é o PARTICÍPIO de:' : '📝 Qual é o PASSADO de:',
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
      title: '⚙️ Complete o phrasal verb:', main: it.gap,
      sub: o.diff <= 1 ? '(' + it.pt + ')' : null,
      tts: null, options: mkOptions(it.part, pool, o.rnd),
      answerText: it.v + ' = ' + it.pt,
      ptText: '“' + it.gap.replace('___', it.part.toUpperCase()) + '”',
      note: null, feedbackTts: it.gap.replace('___', it.part)
    };
  };

  GEN.read = function (o) {
    let it = o.fixed, idx;
    if (!it) { idx = Math.floor((o.rnd || Math.random)() * D().READ.length); it = D().READ[idx]; }
    else idx = D().READ.indexOf(it);
    const opts = it.opts.map(function (op, i) { return { label: op, correct: i === it.ci }; });
    return {
      kind: 'read', ui: 'choice', srsId: idx < 0 ? null : 'rd:' + idx,
      time: 34 + (o.diff >= 3 ? 0 : 6),
      title: '📄 Leia e responda:', main: null, sub: null,
      passage: it.txt, question: it.q,
      tts: it.txt, ttsRate: 1,
      options: G.shuffle(opts, o.rnd),
      answerText: it.opts[it.ci], ptText: it.pt, note: null
    };
  };

  // ---------------- API ----------------
  CH.gen = function (kind, opts) {
    opts = opts || {};
    opts.diff = opts.diff || 1;
    let k = kind;
    const ttsOk = !G.AU || G.AU.hasTTS();
    if (!ttsOk && (k === 'ltype' || k === 'lpair' || k === 'num')) k = 'venpt';
    if (!GEN[k]) k = 'venpt';
    const ch = GEN[k](opts);
    ch.diff = opts.diff;
    return ch;
  };

  // regenera desafio a partir de um id do SRS (fechamento de NCs)
  CH.genFromId = function (id, opts) {
    opts = opts || {}; opts.diff = opts.diff || 1;
    const p = id.split(':'), pre = p[0], key = p.slice(1).join(':');
    const r = opts.rnd || Math.random;
    try {
      if (pre === 'v') {
        const it = G.DATA.vocabByEn(key);
        if (it) return CH.gen(r() < 0.5 ? 'venpt' : 'vpten', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ab') {
        const it = G.DATA.abbrByA(key);
        if (it) return CH.gen('abbr', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ff') {
        const it = G.DATA.ffByWord(key);
        if (it) return CH.gen('ff', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ph') {
        const it = G.DATA.phByV(key);
        if (it) return CH.gen('phg', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ir') {
        const it = G.DATA.irByB(key);
        if (it) return CH.gen('irr', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'ed') {
        const it = G.DATA.edByW(key);
        if (it) return CH.gen('ed', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'mp') {
        const it = G.DATA.mpByWord(key);
        if (it) return CH.gen('lpair', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'na') {
        if (G.DATA.NATO[key]) return CH.gen('radio', Object.assign({}, opts, { fixed: key }));
      } else if (pre === 'pp') {
        for (let i = 0; i < G.DATA.PREP.length; i++) {
          if (G.DATA.PREP[i].s === key) return CH.gen('prep', Object.assign({}, opts, { fixed: G.DATA.PREP[i] }));
        }
      } else if (pre === 'sn') {
        const it = G.DATA.SENTENCES[parseInt(key, 10)];
        if (it) return CH.gen('build', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'or') {
        const it = G.DATA.ORDER[parseInt(key, 10)];
        if (it) return CH.gen('order', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'rd') {
        const it = G.DATA.READ[parseInt(key, 10)];
        if (it) return CH.gen('read', Object.assign({}, opts, { fixed: it }));
      } else if (pre === 'nm') {
        return CH.gen('num', opts);
      }
    } catch (e) { /* fallback abaixo */ }
    return CH.gen('venpt', opts);
  };

  // desafio para uma tarefa/crise (NCs puxam pendências do SRS)
  CH.forBattle = function (enemySpec, diff) {
    if (enemySpec.nc) {
      const due = G.SRS.due(12);
      if (due.length) return CH.genFromId(G.pick(due), { diff: diff });
    }
    if (!enemySpec.crisis && Math.random() < 0.12) {
      const due = G.SRS.due(12);
      if (due.length) {
        const ch = CH.genFromId(G.pick(due), { diff: diff });
        ch.isReview = true;
        return ch;
      }
    }
    if (G.state && G.state.set && G.state.set.mic && G.AU && G.AU.recSupported() && Math.random() < 0.12) {
      return CH.gen('speak', { diff: diff, themes: enemySpec.themes });
    }
    const kinds = enemySpec.kinds && enemySpec.kinds.length ? enemySpec.kinds : ['venpt'];
    return CH.gen(G.pick(kinds), { diff: diff, themes: enemySpec.themes });
  };

  // compila as perguntas de uma Ordem de Serviço (determinístico via seed)
  CH.compileMission = function (m) {
    const rnd = G.mulberry(G.hashStr('os:' + m.seed));
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
      const k = shuffled[i];
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
      list.push(CH.gen(k, opts));
    }
    return list;
  };

  // DDS diário (seed = data)
  CH.compileDaily = function (dateKey) {
    const rnd = G.mulberry(G.hashStr('dds:' + dateKey));
    const plan = ['venpt', 'vpten', 'abbr', 'ff', 'phg', 'num', 'radio', 'irr', 'ltype', 'read'];
    return plan.map(function (k) { return CH.gen(k, { diff: 2, rnd: rnd }); });
  };
})(typeof window !== 'undefined' ? window : globalThis);
