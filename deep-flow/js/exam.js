/* DEEP FLOW — exam.js
   Ordens de teste (TST) determinísticas por seed: a mesma prova em qualquer
   aparelho. Block Exams e Final Test em cenário de simulação de crise.
   Ao final: relatório REL assinado para o mentor. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const EX = DF.EXAM = {};

  // cenários de crise (100% autorais)
  EX.SCENARIOS = {
    blk1: {
      title: '🚨 Block Exam 1 — Partida da Estação Alfa',
      brief: 'Um campo novo entra em operação e a equipe internacional acaba de embarcar. A sala de controle pede confirmações em inglês: cadastro, materiais, setores da cadeia e rotinas da planta. Responda como se estivesse no rádio — cada erro vira NC na auditoria de partida.'
    },
    blk2: {
      title: '🚨 Block Exam 2 — Parada Não Programada na Sonda',
      brief: 'Um alarme interrompe a perfuração. Entre checagens de segurança, medições e instruções da equipe, todo o fluxo de informação é em inglês. Feche a ocorrência sem não conformidades.'
    },
    blk3: {
      title: '🚨 Block Exam 3 — Vazamento no Manifold de Gás',
      brief: 'A plataforma detecta queda de pressão num duto de gás. Isole o trecho, informe medidas e coordene com o time offshore — em inglês, com o relógio correndo.'
    },
    blk4: {
      title: '🚨 Block Exam 4 — Auditoria Ambiental e de Manutenção',
      brief: 'Uma auditoria surpresa revisa registros de manutenção, reparos e prevenção ambiental. Os auditores só falam inglês. Apresente as evidências e feche as pendências.'
    },
    fin: {
      title: '🏆 FINAL TEST — Certificação Internacional',
      brief: 'A inspetora internacional chegou ao reservatório com você. Toda a descida — 15 estações — está em jogo numa única avaliação. Conquiste a certificação DEEP FLOW OG-1.'
    }
  };

  EX.scenarioFor = function (test) {
    if (test.t === 'fin') return EX.SCENARIOS.fin;
    if (test.t === 'blk') {
      const first = test.us[0];
      if (first <= 3) return EX.SCENARIOS.blk1;
      if (first <= 6) return EX.SCENARIOS.blk2;
      if (first <= 9) return EX.SCENARIOS.blk3;
      return EX.SCENARIOS.blk4;
    }
    return null;
  };

  // ---------------- construção determinística ----------------
  function poolsFor(u) {
    const data = DF.UNIT_DATA[u] || {};
    return {
      vocab: (data.glossary || []).concat(data.extraVocab || []),
      grammar: data.grammarPool || [],
      listen: data.listenPool || [],
      read: data.readPool || [],
      phrases: data.phrasePool || [],
      spell: data.spellPool || [],
      numbers: data.numbers || { types: ['int'], max: 199 }
    };
  }

  // gera os n itens do teste — SEMPRE na mesma ordem para a mesma seed
  EX.buildItems = function (test) {
    const rnd = DF.mulberry(test.seed);
    const cats = test.cats.slice();
    const items = [];
    const perUnit = test.us.map(poolsFor);
    let guard = 0;
    while (items.length < test.n && guard++ < 400) {
      const cat = cats[items.length % cats.length];
      const ui = Math.floor(rnd() * perUnit.length);
      const u = test.us[ui];
      const P = perUnit[ui];
      let it = null;
      if (cat === 'voc' && P.vocab.length) {
        const v = DF.pick(P.vocab, rnd);
        const g = rnd() < 0.34 ? 'vpten' : rnd() < 0.5 ? 'venpt' : 'vtype';
        it = DF.MECH.GEN[g](v, P.vocab, rnd, u);
      } else if (cat === 'gra' && P.grammar.length) {
        it = clone(DF.pick(P.grammar, rnd));
        it.srsId = it.srsId || null;
      } else if (cat === 'num') {
        it = DF.NUM.genItem({ types: P.numbers.types, max: P.numbers.max, rnd: rnd, diff: test.diff });
      } else if (cat === 'lis' && P.listen.length) {
        it = clone(DF.pick(P.listen, rnd));
      } else if (cat === 'rea' && P.read.length) {
        it = clone(DF.pick(P.read, rnd));
      } else if (cat === 'fun' && P.phrases.length) {
        it = clone(DF.pick(P.phrases, rnd));
      } else if (cat === 'pro' || cat === 'spl') {
        // em prova, pronúncia entra como soletração (não depende de TTS)
        if (P.spell.length) it = clone(DF.pick(P.spell, rnd));
        else if (P.vocab.length) {
          const v = DF.pick(P.vocab, rnd);
          it = spellItem(v, P.vocab, rnd, u);
        }
      }
      if (!it && P.vocab.length) {
        it = DF.MECH.GEN.venpt(DF.pick(P.vocab, rnd), P.vocab, rnd, u);
      }
      if (it) {
        it.testCat = cat;
        items.push(it);
      }
    }
    return items;
  };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function spellItem(v, pool, rnd, u) {
    const spelled = v.en.toUpperCase().replace(/[^A-Z]/g, '').split('').join('-');
    const decoys = DF.pickN(pool.filter(function (x) { return x.en !== v.en; }), 6, rnd)
      .map(function (x) { return x.en; });
    return {
      ui: 'choice', cat: 'spl', srsId: 'u' + u + ':s:' + v.en,
      sp: { g: 'venpt', en: v.en, u: u },
      title: '🔤 Qual palavra está soletrada?', main: spelled,
      options: DF.MECH.mkOpts(v.en, decoys, rnd),
      expl: spelled + ' = ' + v.en + ' (' + v.pt + ')', feedbackTts: v.en
    };
  }

  // ---------------- runner ----------------
  let T = null;

  EX.start = function (test) {
    const items = EX.buildItems(test);
    if (!items.length) {
      DF.toast('Este teste não tem conteúdo disponível ainda.');
      return;
    }
    T = { test: test, items: items, at: -1, hits: 0, near: 0, grid: '', cats: {} };
    const scr = DF.$('#s-mission .content');
    scr.innerHTML = '';

    const head = DF.el('div', 'mission-head');
    const back = DF.el('button', 'btn ghost small', '✖');
    back.onclick = function () {
      DF.modal({
        title: 'Abandonar o teste?',
        html: 'A ordem de teste continuará válida — você pode colar o código de novo.',
        buttons: [
          { label: 'Continuar o teste', cls: 'ghost' },
          { label: 'Sair', cls: 'danger', cb: function () { DF.go('s-map'); } }
        ]
      });
    };
    head.appendChild(back);
    const kindName = test.t === 'blk' ? 'BLOCK EXAM' : test.t === 'fin' ? 'FINAL TEST' : 'Teste de competência';
    head.appendChild(DF.el('div', 'mh-title', '📋 ' + kindName +
      '<small>Unit' + (test.us.length > 1 ? 's' : '') + ' ' + test.us.join(', ') + ' · emitido por ' + DF.esc(test.mn) + '</small>'));
    head.appendChild(DF.el('div', 'mh-progress', ''));
    scr.appendChild(head);

    const sc = EX.scenarioFor(test);
    const intro = DF.el('div', 'panel mission-intro');
    intro.appendChild(DF.el('div', 'mi-icon', test.t === 'fin' ? '🏆' : test.t === 'blk' ? '🚨' : '📋'));
    intro.appendChild(DF.el('h3', '', sc ? sc.title : 'Teste de competência — Unit ' + test.us[0]));
    if (sc) intro.appendChild(DF.el('p', 'mi-brief', sc.brief));
    if (test.msg) intro.appendChild(DF.el('p', 'mentor-msg', '💬 ' + DF.esc(test.mn) + ': “' + DF.esc(test.msg) + '”'));
    intro.appendChild(DF.el('p', 'muted', test.n + ' questões · nível ' +
      ['', 'básico', 'intermediário', 'avançado'][test.diff] +
      ' · prova idêntica à emitida pelo mentor'));
    const start = DF.el('button', 'btn primary wide', '▶️ Iniciar o teste');
    start.onclick = function () { next(); };
    intro.appendChild(start);
    scr.appendChild(intro);
    DF.go('s-mission');
  };

  function next() {
    T.at++;
    DF.SP.stop();
    const scr = DF.$('#s-mission .content');
    const old = DF.$('.q-box', scr); if (old) old.remove();
    const oldIntro = DF.$('.mission-intro', scr); if (oldIntro) oldIntro.remove();
    if (T.at >= T.items.length) { finish(); return; }
    const mh = DF.$('.mh-progress', scr);
    if (mh) {
      mh.innerHTML = '';
      T.items.forEach(function (it, i) {
        mh.appendChild(DF.el('span', 'dot' + (i < T.at ? ' past' : i === T.at ? ' now' : '')));
      });
    }
    const box = DF.el('div', 'q-box panel');
    scr.appendChild(box);
    const item = T.items[T.at];
    DF.MECH.render(item, box, function (res) {
      const q = res.q;
      const cat = item.testCat || item.cat || '?';
      T.cats[cat] = T.cats[cat] || [0, 0];
      T.cats[cat][1]++;
      if (q >= 4) { T.hits++; T.grid += '2'; T.cats[cat][0]++; }
      else if (q >= 2) { T.near++; T.grid += '1'; T.cats[cat][0]++; }
      else T.grid += '0';
      if (item.srsId) DF.SRS.record(item.srsId, item.cat || '?', q, item.sp);
      next();
    });
  }

  async function finish() {
    DF.SRS.tick();
    const t = T.test;
    const n = T.items.length;
    const sc = Math.round(1000 * (T.hits + 0.6 * T.near) / n);
    const ac = Math.round(100 * (T.hits + T.near) / n);
    const code = await DF.CODES.makeReport({
      k: t.t, tid: t.id, st: DF.state.name, us: t.us,
      sc: sc, ac: ac, n: n, g: T.grid, cats: T.cats
    });
    DF.state.tests.push({ k: t.t, tid: t.id, us: t.us, sc: sc, ac: ac, d: DF.fmtDate(), code: code });
    if (DF.state.tests.length > 40) DF.state.tests = DF.state.tests.slice(-40);
    DF.save();

    const scr = DF.$('#s-mission .content');
    const res = DF.el('div', 'panel mission-result');
    res.appendChild(DF.el('div', 'mr-icon', sc >= 800 ? '🏅' : sc >= 600 ? '✅' : '🛠️'));
    res.appendChild(DF.el('h3', '', 'Teste concluído'));
    res.appendChild(DF.el('div', 'mr-score', sc + '<small>/1000</small>'));
    res.appendChild(DF.el('div', 'grid-line', T.grid.split('').map(function (c) {
      return c === '2' ? '🟩' : c === '1' ? '🟨' : '🟥';
    }).join('')));
    res.appendChild(DF.el('p', 'muted', ac + '% de acerto · ' + n + ' questões'));
    res.appendChild(DF.el('p', '', 'Envie o código assinado ao mentor <b>' + DF.esc(t.mn) + '</b>:'));
    const kindName = t.t === 'blk' ? 'BLOCK EXAM' : t.t === 'fin' ? 'FINAL TEST' : 'Teste Unit ' + t.us.join(',');
    const wa = '🌊 DEEP FLOW · ' + kindName + ' concluído: ' + sc + '/1000 (' + ac + '%)' +
      '\nAluno: ' + (DF.state.name || '—') +
      '\nCódigo de comprovação:\n\n' + code;
    res.appendChild(DF.codeBox(code, { wa: wa, waTo: DF.WHATSAPP, rows: 6 }));
    const done = DF.el('button', 'btn primary wide', 'Voltar ao mapa ▸');
    done.onclick = function () { DF.go('s-map'); DF.DES.refresh(); };
    res.appendChild(done);
    scr.appendChild(res);
    if (DF.AU) DF.AU.sfx(sc >= 600 ? 'unlock' : 'good');
  }
})(typeof window !== 'undefined' ? window : globalThis);
