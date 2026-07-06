/* A Maldição da Cuca — game.js
   Estado global, save, roteador de telas, mapa das lendas, vendinha,
   grimório, desafio diário, ajustes e o final do jogo. */
(function (root) {
  const G = root.G = root.G || {};
  const SAVE_KEY = 'cuca_save_1';

  // ---------------- estado ----------------
  function defaultState() {
    return {
      v: 1, name: '', mentorName: '', created: Date.now(),
      lvl: 1, xp: 0, coins: 30,
      letters: [], doneNodes: {},
      inv: { cafezinho: 1, dicionario: 1 },
      srs: null, hints: {},
      set: { music: 1, sfx: 1, mic: 0, voice: '' },
      daily: { last: '', streak: 0, hist: {} },
      myMissions: [], roster: [],
      stats: { ans: 0, ok: 0, bestCombo: 0, battles: 0, bosses: 0 },
      ngplus: 0, storySeen: 0
    };
  }

  G.load = function () {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const st = JSON.parse(raw);
        if (st && st.v === 1) { G.state = Object.assign(defaultState(), st); return; }
      }
    } catch (e) { /* save corrompido: recomeça */ }
    G.state = defaultState();
  };
  G.save = function () {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(G.state)); } catch (e) { /* sem espaço */ }
  };

  G.hpMax = function () { return 88 + G.state.lvl * 12; };
  G.xpNeed = function () { return 45 + G.state.lvl * 35; };
  G.gainXp = function (xp) {
    const st = G.state;
    st.xp += xp;
    let ups = 0;
    while (st.xp >= G.xpNeed()) { st.xp -= G.xpNeed(); st.lvl++; ups++; }
    return ups;
  };
  G.gainCoins = function (n) { G.state.coins = Math.max(0, G.state.coins + n); };
  G.grantItem = function () {
    const ids = G.DATA.ITEM_ORDER.filter(function (id) { return (G.state.inv[id] || 0) < 3; });
    if (!ids.length) { G.gainCoins(15); return null; }
    const id = G.pick(ids);
    G.state.inv[id] = (G.state.inv[id] || 0) + 1;
    return id;
  };

  // ---------------- roteador ----------------
  let cur = 's-title';
  let mapRaf = 0, mapThumbs = [];

  G.go = function (id) {
    if (cur === 's-battle' && id !== 's-battle' && G.BATTLE) G.BATTLE.stop();
    if (mapRaf) { cancelAnimationFrame(mapRaf); mapRaf = 0; mapThumbs = []; }
    G.$$('.screen').forEach(function (s) { s.classList.toggle('active', s.id === id); });
    cur = id;
    if (id === 's-title') { renderTitle(); G.FX.setTheme({ a: '#0a0d24', b: '#123324', glow: '#ffe08a', deco: 'moon' }); G.AU.music('title', 0); }
    else if (id === 's-map') { renderMap(); const r = curRegionIdx(); G.FX.setTheme(G.DATA.REGIONS[r].pal); G.AU.music('map', r); }
    else if (id === 's-story') renderStory();
    else if (id === 's-shop') renderShop();
    else if (id === 's-grimoire') renderGrimoire();
    else if (id === 's-mentor') G.MENTOR.renderMentor();
    else if (id === 's-missions') G.MENTOR.renderMissions();
    else if (id === 's-settings') renderSettings();
    else if (id === 's-final') renderFinal();
    window.scrollTo(0, 0);
  };

  function curRegionIdx() { return Math.min(G.state.letters.length, G.DATA.REGIONS.length - 1); }

  // ---------------- título ----------------
  function renderTitle() {
    const st = G.state;
    const cont = G.$('#t-play .t-sub');
    if (cont) {
      cont.textContent = st.storySeen
        ? (st.name ? st.name + ' · Nv ' + st.lvl + ' · ' + st.letters.length + '/7 letras' : 'Continuar')
        : 'Nova aventura';
    }
  }

  // ---------------- história ----------------
  function renderStory() {
    const c = G.$('#s-story .content');
    c.innerHTML = '';
    const box = G.el('div', 'story-box panel');
    const txt = G.el('div', 'story-text');
    const tap = G.el('div', 'fb-tap muted', 'toque para continuar ▸');
    const skip = G.el('button', 'btn ghost small story-skip', 'Pular ▸▸');
    box.appendChild(txt); box.appendChild(tap);
    c.appendChild(box); c.appendChild(skip);
    let i = 0, tw = null;
    function askName() {
      const d = G.el('div');
      d.appendChild(G.el('p', '', 'Como as lendas devem te chamar?'));
      const inp = G.el('input', 'inp');
      inp.maxLength = 18; inp.placeholder = 'Seu nome ou apelido';
      d.appendChild(inp);
      G.modal({
        title: '📖 O Grimório quer saber...',
        html: d, locked: true,
        buttons: [{
          label: 'Começar a aventura ⚔️', cls: 'primary', cb: function () {
            G.state.name = inp.value.trim() || 'Viajante';
            G.state.storySeen = 1;
            G.save();
            G.go('s-map');
            G.toast('⏱️ Responda rápido para causar dano CRÍTICO!', { once: 'crit', ms: 4200 });
          }
        }]
      });
      setTimeout(function () { try { inp.focus(); } catch (e) { } }, 300);
    }
    function next() {
      if (i >= G.DATA.STORY.length) { askName(); return; }
      tw = G.typeText(txt, G.DATA.STORY[i]);
      i++;
    }
    box.onclick = function () {
      if (tw && !tw.isDone()) tw.skip();
      else next();
    };
    skip.onclick = askName;
    next();
  }

  // ---------------- mapa ----------------
  function renderMap() {
    const st = G.state;
    const c = G.$('#s-map .content');
    c.innerHTML = '';

    // cabeçalho do jogador
    const head = G.el('div', 'panel map-head');
    const xpPct = Math.round(100 * st.xp / G.xpNeed());
    head.innerHTML =
      '<div class="row spread">' +
      '<div><b class="pname"></b><div class="muted small-line">Nível ' + st.lvl + (st.ngplus ? ' · 🌙 Pesadelo' : '') + '</div></div>' +
      '<div class="coins">🪙 ' + st.coins + '</div>' +
      '</div>' +
      '<div class="bar xp"><div class="fill" style="width:' + xpPct + '%"></div></div>';
    G.$('.pname', head).textContent = st.name || 'Viajante';
    c.appendChild(head);

    // letras do contra-feitiço
    const lets = G.el('div', 'letters');
    'ENGLISH'.split('').forEach(function (L, i) {
      const got = st.letters.length > i;
      lets.appendChild(G.el('span', 'letter' + (got ? ' got' : ''), got ? L : '?'));
    });
    c.appendChild(lets);

    // desafio diário
    const key = G.todayKey();
    const done = st.daily.hist[key];
    const daily = G.el('div', 'panel daily-card');
    daily.innerHTML =
      '<div class="row spread"><b>📅 Desafio Diário</b>' +
      (st.daily.streak > 1 ? '<span class="streak">🔥 ' + st.daily.streak + ' dias</span>' : '') + '</div>' +
      '<div class="muted small-line">' + (done ? 'Feito hoje: ' + done.sc + '/1000 · pode treinar de novo' : '10 perguntas, iguais para o Brasil inteiro. Compartilhável!') + '</div>';
    const db = G.el('button', 'btn ' + (done ? 'ghost' : 'primary') + ' wide', done ? '🔁 Treinar de novo' : '⚡ Jogar o diário');
    db.onclick = function () { G.startDaily(); };
    daily.appendChild(db);
    c.appendChild(daily);

    // navegação
    const nav = G.el('div', 'map-nav');
    [['📖', 'Grimório', 's-grimoire'], ['🐸', 'Vendinha', 's-shop'], ['✉️', 'Missões', 's-missions'], ['🎓', 'Mentor', 's-mentor'], ['⚙️', 'Ajustes', 's-settings']].forEach(function (n) {
      const b = G.el('button', 'nav-btn', '<span>' + n[0] + '</span>' + n[1]);
      b.onclick = function () { G.AU.sfx('click'); G.go(n[2]); };
      nav.appendChild(b);
    });
    c.appendChild(nav);

    // regiões
    G.DATA.REGIONS.forEach(function (rg, r) {
      const unlocked = r === 0 || st.letters.length >= r;
      const card = G.el('div', 'region-card' + (unlocked ? '' : ' locked'));
      card.style.background = 'linear-gradient(135deg, ' + rg.pal.a + ', ' + rg.pal.b + ')';
      const info = G.el('div', 'region-info');
      info.appendChild(G.el('div', 'region-name', (r + 1) + '. ' + rg.name + ' <span class="rletter">' + rg.letter + '</span>'));
      info.appendChild(G.el('div', 'region-desc muted', rg.desc));
      const nodes = G.el('div', 'nodes');
      for (let n = 0; n < 4; n++) {
        const isBoss = n === 3;
        const state2 = nodeState(r, n);
        const b = G.el('button', 'node' + (isBoss ? ' bossnode' : '') + ' ' + state2);
        b.innerHTML = state2 === 'done' ? '✓' : state2 === 'locked' ? '🔒' : isBoss ? '👑' : n === 2 ? '⚔️⚔️' : '⚔️';
        if (state2 !== 'locked') {
          b.onclick = function () { G.AU.sfx('click'); G.startNode(r, n); };
        }
        if (isBoss) b.title = rg.boss.name;
        nodes.appendChild(b);
      }
      info.appendChild(nodes);
      card.appendChild(info);
      // retrato do chefe (procedural, animado)
      const th = G.el('canvas', 'boss-thumb');
      th.width = 150; th.height = 150;
      card.appendChild(th);
      if (unlocked) {
        mapThumbs.push({
          cv: th,
          mon: G.MON.make({ seed: G.hashStr('boss:' + rg.key), glow: rg.pal.glow, boss: rg.boss.key, name: rg.boss.name })
        });
      } else {
        th.classList.add('dark');
        mapThumbs.push({
          cv: th,
          mon: G.MON.make({ seed: G.hashStr('boss:' + rg.key), glow: rg.pal.glow, boss: rg.boss.key, name: '?' })
        });
        const lk = G.el('div', 'region-lock', '🔒 Derrote ' + (r > 0 ? G.DATA.REGIONS[r - 1].boss.name : '?') + ' para abrir');
        card.appendChild(lk);
      }
      c.appendChild(card);
    });

    c.appendChild(G.el('p', 'muted center foot', 'A Maldição da Cuca v' + G.VERSION + ' · um RPG de inglês 100% offline'));

    function thumbLoop() {
      mapThumbs.forEach(function (t) {
        const x = t.cv.getContext('2d');
        x.setTransform(1, 0, 0, 1, 0, 0);
        t.mon.draw(x, 150, 150);
      });
      mapRaf = requestAnimationFrame(thumbLoop);
    }
    if (mapThumbs.length) thumbLoop();
  }

  function nodeState(r, n) {
    const st = G.state;
    if (st.doneNodes[r + '-' + n]) return 'done';
    if (!(r === 0 || st.letters.length >= r)) return 'locked';
    for (let m = 0; m < n; m++) if (!st.doneNodes[r + '-' + m]) return 'locked';
    return 'open';
  }

  // ---------------- batalhas de aventura ----------------
  function minionSpec(r, n, elite, idx) {
    const rg = G.DATA.REGIONS[r];
    const ng = G.state.ngplus ? 1.6 : 1;
    const name = rg.minions[(n * 2 + r + (idx || 0)) % rg.minions.length];
    return {
      name: name,
      seed: G.hashStr(rg.key + ':' + n + ':' + name + ':' + (idx || 0)),
      glow: rg.pal.glow, kinds: rg.kinds,
      hp: Math.round((58 + r * 24) * (elite ? 1.5 : 1) * ng),
      elite: !!elite,
      intro: (idx === 0 && Math.random() < 0.45) ? [G.pick(G.DATA.MINION_TAUNTS)] : null
    };
  }
  function ghostSpec(r) {
    const ng = G.state.ngplus ? 1.6 : 1;
    return {
      name: 'Assombração', ghost: true,
      seed: (Math.random() * 1e9) | 0,
      glow: '#aee4ff', kinds: [],
      hp: Math.round((70 + r * 18) * ng),
      intro: [G.pick(G.DATA.GHOST_INTRO)]
    };
  }

  G.startNode = function (r, n) {
    const rg = G.DATA.REGIONS[r];
    const isBoss = n === 3;
    const diff = r < 2 ? 1 : r < 5 ? 2 : 3;
    const ng = G.state.ngplus ? 1.6 : 1;
    let enemies;
    if (isBoss) {
      const bs = rg.boss;
      enemies = [{
        name: bs.name, title: bs.title, boss: bs.key,
        seed: G.hashStr('boss:' + rg.key),
        glow: rg.pal.glow, kinds: bs.kinds.concat(rg.kinds.slice(0, 1)),
        hp: Math.round((240 + r * 70) * ng),
        intro: bs.intro, phaseLines: bs.phase, defeatLine: bs.defeat, mech: bs.mech
      }];
    } else if (G.SRS.haunted().length >= 3 && Math.random() < 0.35) {
      enemies = [ghostSpec(r)];
      G.toast('👻 Assombrações! Palavras que você errou querem revanche.', { once: 'ghosts' });
    } else if (n === 2) {
      enemies = [minionSpec(r, n, false, 0), minionSpec(r, n, true, 1)];
    } else {
      enemies = [minionSpec(r, n, false, 0)];
    }
    G.FX.setTheme(rg.pal);
    G.BATTLE.start({
      mode: 'adventure', regionIdx: r, diff: diff, enemies: enemies,
      onEnd: function (res) {
        if (res.win) {
          G.state.doneNodes[r + '-' + n] = 1;
          if (isBoss && G.state.letters.length === r) {
            G.state.letters.push(rg.letter);
            G.save();
            letterCeremony(rg, function () {
              if (G.state.letters.length >= 7) G.go('s-final');
              else G.go('s-map');
            });
            return;
          }
          G.save();
        }
        G.go('s-map');
      }
    });
    G.toast('🎒 Toque num item lá embaixo para usá-lo na batalha.', { once: 'items', ms: 4200 });
  };

  function letterCeremony(rg, done) {
    G.AU.sfx('letter');
    G.FX.confetti(120);
    const d = G.el('div', 'letter-cere');
    d.innerHTML =
      '<div class="big-letter">' + rg.letter + '</div>' +
      '<p>Você libertou a letra <b>' + rg.letter + '</b> do contra-feitiço!</p>' +
      '<div class="letters small">' +
      'ENGLISH'.split('').map(function (L, i) {
        return '<span class="letter' + (G.state.letters.length > i ? ' got' : '') + '">' + (G.state.letters.length > i ? L : '?') + '</span>';
      }).join('') + '</div>';
    G.modal({
      title: '✨ Letra conquistada!',
      html: d, locked: true,
      buttons: [{ label: 'Continuar ▸', cls: 'primary', cb: done }]
    });
  }

  // ---------------- desafio diário ----------------
  G.startDaily = function () {
    const key = G.todayKey();
    const list = G.CH.compileDaily(key);
    G.FX.setTheme({ a: '#170826', b: '#2c1245', glow: '#9d7bff', deco: 'motes' });
    G.BATTLE.start({
      mode: 'daily', regionIdx: 3, diff: 2, list: list,
      enemies: [{
        name: 'Sombra da Cuca', boss: 'sombra',
        seed: G.hashStr('daily:' + key), glow: '#9d7bff', hp: 1, kinds: []
      }]
    });
  };

  G.finishDaily = function (stats) {
    const st = G.state, key = G.todayKey();
    const first = !st.daily.hist[key];
    if (first) {
      const y = new Date(); y.setDate(y.getDate() - 1);
      const yKey = y.getFullYear() + '-' + String(y.getMonth() + 1).padStart(2, '0') + '-' + String(y.getDate()).padStart(2, '0');
      st.daily.streak = st.daily.last === yKey ? (st.daily.streak || 0) + 1 : 1;
      st.daily.last = key;
      st.daily.hist[key] = { sc: stats.score, ac: stats.acc, g: stats.grid };
      const reward = 15 + Math.round(stats.score / 40);
      G.gainCoins(reward);
      G.toast('🪙 +' + reward + ' moedas pelo diário!');
    }
    G.save();
    const share =
      '🐊 Desafio Diário — A Maldição da Cuca\n' +
      G.fmtDate() + ' · ' + stats.score + '/1000' +
      (st.daily.streak > 1 ? ' · 🔥' + st.daily.streak + ' dias' : '') + '\n' +
      G.MENTOR.gridEmoji(stats.grid);
    const d = G.el('div');
    d.appendChild(G.el('div', 'grid-line center', G.MENTOR.gridEmoji(stats.grid)));
    d.appendChild(G.el('p', 'center big-score', stats.score + '/1000 · ' + stats.acc + '% de acerto'));
    if (!first) d.appendChild(G.el('p', 'muted center', '(treino — o resultado oficial de hoje já foi registrado)'));
    const row = G.el('div', 'row gap center');
    const cp = G.el('button', 'btn primary', '📋 Copiar resultado');
    cp.onclick = async function () {
      const ok = await G.copyText(share);
      cp.textContent = ok ? '✅ Copiado!' : '⚠️ Falhou';
      setTimeout(function () { cp.textContent = '📋 Copiar resultado'; }, 1800);
    };
    const wa = G.el('a', 'btn ghost', '💬 WhatsApp');
    wa.href = 'https://wa.me/?text=' + encodeURIComponent(share);
    wa.target = '_blank';
    row.appendChild(cp); row.appendChild(wa);
    d.appendChild(row);
    const proof = G.el('button', 'btn ghost wide', '🎓 Código para o mentor');
    proof.onclick = async function () {
      const code = await G.MENTOR.makeResult({
        v: 1, mid: 'daily-' + key, mt: 'Desafio Diário ' + G.fmtDate(),
        st: st.name || 'Estudante', sc: stats.score, ac: stats.acc,
        n: stats.n, g: stats.grid, d: key, tm: Math.round(stats.time)
      });
      G.modal({
        title: 'Comprovação do diário',
        html: G.codeBox(code, { rows: 5, wa: '🐊 Meu Desafio Diário: ' + stats.score + '/1000\n' + code }),
        buttons: [{ label: 'Fechar', cls: 'ghost' }]
      });
    };
    d.appendChild(proof);
    G.modal({
      title: '📅 Desafio Diário concluído!',
      html: d, locked: true,
      buttons: [{ label: 'Voltar ao mapa', cls: 'primary', cb: function () { G.go('s-map'); } }]
    });
    G.FX.confetti(60);
    G.AU.sfx('fanfare');
  };

  // ---------------- missão do mentor ----------------
  G.startMission = function (m) {
    const list = G.CH.compileMission(m);
    G.FX.setTheme({ a: '#032433', b: '#0a6d80', glow: '#5ce8ff', deco: 'bubbles' });
    G.BATTLE.start({
      mode: 'mission', mission: m, regionIdx: 2, diff: m.diff, list: list,
      enemies: [{
        name: 'Desafio de ' + m.mn, ghost: true,
        seed: G.hashStr('mission:' + m.id), glow: '#5ce8ff', hp: 1, kinds: [],
        intro: m.msg ? ['📜 Recado de ' + m.mn + ': "' + m.msg + '"'] : null
      }]
    });
  };

  // ---------------- vendinha ----------------
  function renderShop() {
    const st = G.state;
    const c = G.$('#s-shop .content');
    c.innerHTML = '';
    c.appendChild(G.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="G.go(\'s-map\')">← Voltar</button><h2>🐸 Vendinha do Cururu</h2>'));
    const talk = G.el('div', 'panel shop-talk');
    talk.innerHTML = '<span class="shop-frog">🐸</span><em>“' + G.pick(G.DATA.SHOPLINES) + '”</em>';
    c.appendChild(talk);
    c.appendChild(G.el('div', 'coins center big-coins', '🪙 ' + st.coins));
    G.DATA.ITEM_ORDER.forEach(function (id) {
      const it = G.DATA.ITEMS[id];
      const have = st.inv[id] || 0;
      const row = G.el('div', 'panel shop-row');
      row.innerHTML =
        '<span class="shop-e">' + it.e + '</span>' +
        '<div class="shop-mid"><b>' + it.name + '</b><div class="muted small-line">' + it.desc + '</div>' +
        '<div class="muted small-line">Você tem: ' + have + '/3</div></div>';
      const buy = G.el('button', 'btn primary', '🪙 ' + it.price);
      buy.disabled = st.coins < it.price || have >= 3;
      buy.onclick = function () {
        st.coins -= it.price;
        st.inv[id] = have + 1;
        G.save();
        G.AU.sfx('coin');
        G.FX.burst(window.innerWidth / 2, window.innerHeight / 2, { n: 10, colors: ['#ffd75c'] });
        renderShop();
      };
      row.appendChild(buy);
      c.appendChild(row);
    });
  }

  // ---------------- grimório ----------------
  const GRIM_FILTERS = [
    ['all', '📖 Tudo'], ['v', '🇺🇸 Vocabulário'], ['ff', '🎭 Falsos Amigos'],
    ['ph', '🐬 Phrasal Verbs'], ['ir', '🌕 Verbos'], ['snd', '👂 Pronúncia'],
    ['pp', '📍 Preposições'], ['sn', '🧩 Frases']
  ];
  let grimFilter = 'all';

  function grimLookup(id) {
    const p = id.split(':'), pre = p[0], key = p.slice(1).join(':');
    const D = G.DATA;
    try {
      if (pre === 'v') { const it = D.vocabByEn(key); if (it) return { en: it[0], pt: it[1], tts: it[0] }; }
      if (pre === 'ff') { const it = D.ffByWord(key); if (it) return { en: it.w, pt: it.real + ' (não é "' + it.trap + '"!)', tts: it.w }; }
      if (pre === 'ph') { const it = D.phByV(key); if (it) return { en: it.v, pt: it.pt, tts: it.v }; }
      if (pre === 'ir') { const it = D.irByB(key); if (it) return { en: it.b + ' → ' + it.p + ' → ' + it.pp, pt: it.pt, tts: it.b + ', ' + it.p.split('/')[0] + ', ' + it.pp.split('/')[0] }; }
      if (pre === 'ed') { const it = D.edByW(key); if (it) return { en: it.w + '  /' + (it.s === 'id' ? 'ɪd' : it.s) + '/', pt: it.pt, tts: it.w }; }
      if (pre === 'mp') { const it = D.mpByWord(key); if (it) return { en: it.a + ' × ' + it.b, pt: it.apt + ' × ' + it.bpt, tts: it.a + '. ' + it.b }; }
      if (pre === 'pp') return { en: key, pt: '', tts: null };
      if (pre === 'sn') { const it = D.SENTENCES[parseInt(key, 10)]; if (it) return { en: it.en, pt: it.pt, tts: it.en }; }
    } catch (e) { /* ignora */ }
    return { en: key, pt: '', tts: null };
  }
  function grimCat(id) {
    const pre = id.split(':')[0];
    if (pre === 'ed' || pre === 'mp') return 'snd';
    return pre;
  }

  function renderGrimoire() {
    const c = G.$('#s-grimoire .content');
    c.innerHTML = '';
    c.appendChild(G.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="G.go(\'s-map\')">← Voltar</button><h2>📖 Grimório</h2>'));
    const st = G.state;
    const cnt = G.SRS.counts();
    const acc = st.stats.ans ? Math.round(100 * st.stats.ok / st.stats.ans) : 0;
    const head = G.el('div', 'panel grim-stats');
    head.innerHTML =
      '<div><b>' + cnt.mast + '</b><span>dominadas</span></div>' +
      '<div><b>' + cnt.seen + '</b><span>estudadas</span></div>' +
      '<div><b>' + cnt.ghosts + '</b><span>👻 assombrando</span></div>' +
      '<div><b>' + acc + '%</b><span>precisão</span></div>';
    c.appendChild(head);

    const chips = G.el('div', 'chips scroll-x');
    GRIM_FILTERS.forEach(function (f) {
      const b = G.el('button', 'chip' + (grimFilter === f[0] ? ' on' : ''), f[1]);
      b.onclick = function () { grimFilter = f[0]; renderGrimoire(); };
      chips.appendChild(b);
    });
    c.appendChild(chips);

    const items = G.state.srs && G.state.srs.items ? G.state.srs.items : {};
    const haunted = {};
    G.SRS.haunted().forEach(function (id) { haunted[id] = 1; });
    let ids = Object.keys(items).filter(function (id) { return items[id].seen > 0; });
    if (grimFilter !== 'all') ids = ids.filter(function (id) { return grimCat(id) === grimFilter; });
    ids.sort(function (a, b) {
      const ha = haunted[a] ? 0 : 1, hb = haunted[b] ? 0 : 1;
      if (ha !== hb) return ha - hb;
      return G.SRS.mastery(a) - G.SRS.mastery(b);
    });
    const list = G.el('div', 'grim-list');
    if (!ids.length) {
      list.appendChild(G.el('p', 'muted center', 'Nada aqui ainda. Cada palavra que aparecer em batalha é registrada no Grimório.'));
    }
    ids.slice(0, 400).forEach(function (id) {
      const info = grimLookup(id);
      const m = G.SRS.mastery(id);
      const row = G.el('div', 'grim-row' + (haunted[id] ? ' haunt' : ''));
      const stars = '★★★★★'.slice(0, m) + '☆☆☆☆☆'.slice(0, 5 - m);
      row.innerHTML =
        (haunted[id] ? '<span class="gh">👻</span>' : '') +
        '<div class="grim-mid"><b class="gen"></b><div class="muted small-line gpt"></div></div>' +
        '<span class="stars">' + stars + '</span>';
      G.$('.gen', row).textContent = info.en;
      G.$('.gpt', row).textContent = info.pt;
      if (info.tts && G.AU.hasTTS()) {
        row.classList.add('speakable');
        row.onclick = function () { G.AU.speak(info.tts, { rate: 0.9 }); G.AU.sfx('click'); };
      }
      list.appendChild(row);
    });
    c.appendChild(list);
    c.appendChild(G.el('p', 'muted center foot', '👻 = palavra vencida te assombrando · derrote-a 2x em batalha para dominá-la. Toque numa linha para ouvir.'));
  }

  // ---------------- ajustes ----------------
  function renderSettings() {
    const st = G.state;
    const c = G.$('#s-settings .content');
    c.innerHTML = '';
    c.appendChild(G.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="G.go(\'s-map\')">← Voltar</button><h2>⚙️ Ajustes</h2>'));

    const p = G.el('div', 'panel');
    p.appendChild(G.el('label', 'lbl', 'Seu nome'));
    const inName = G.el('input', 'inp');
    inName.maxLength = 18; inName.value = st.name || '';
    inName.onchange = function () { st.name = inName.value.trim() || 'Viajante'; G.save(); };
    p.appendChild(inName);

    function mkToggle(label, key, extra) {
      const row = G.el('div', 'row spread set-row');
      row.appendChild(G.el('span', '', label));
      const b = G.el('button', 'btn small ' + (st.set[key] ? 'primary' : 'ghost'), st.set[key] ? 'Ligado' : 'Desligado');
      b.onclick = function () {
        st.set[key] = st.set[key] ? 0 : 1;
        G.save();
        b.className = 'btn small ' + (st.set[key] ? 'primary' : 'ghost');
        b.textContent = st.set[key] ? 'Ligado' : 'Desligado';
        if (extra) extra(st.set[key]);
      };
      row.appendChild(b);
      p.appendChild(row);
    }
    mkToggle('🎵 Música', 'music', function () { G.AU.refreshMusic(); if (st.set.music) G.AU.music('map', curRegionIdx()); });
    mkToggle('🔊 Efeitos sonoros', 'sfx');
    if (G.AU.recSupported()) {
      mkToggle('🎤 Desafios de pronúncia (microfone)', 'mic', function (on) {
        if (on) G.toast('🎤 Desafios de fala vão aparecer nas batalhas. O navegador vai pedir permissão do microfone.');
      });
    }

    // voz do inglês
    const voices = G.AU.enVoices();
    if (voices.length) {
      p.appendChild(G.el('label', 'lbl', '🗣️ Voz do inglês'));
      const sel = G.el('select', 'inp');
      voices.forEach(function (v) {
        const o = new Option(v.name.replace(/Microsoft |Online |\(Natural\)/g, '').trim() + ' (' + v.lang + ')', v.voiceURI);
        sel.appendChild(o);
      });
      if (st.set.voice) sel.value = st.set.voice;
      sel.onchange = function () { st.set.voice = sel.value; G.save(); };
      p.appendChild(sel);
      const test = G.el('button', 'btn ghost small', '🔊 Testar voz');
      test.onclick = function () { G.AU.speak('The Cuca will never catch my English!', { rate: 0.95 }); };
      p.appendChild(test);
    }
    c.appendChild(p);

    // boletim + save
    const p2 = G.el('div', 'panel');
    p2.appendChild(G.el('h3', '', '📊 Para o mentor'));
    const bol = G.el('button', 'btn primary wide', '📊 Gerar boletim de progresso');
    bol.onclick = async function () {
      const code = await G.MENTOR.makeReport();
      G.modal({
        title: 'Seu boletim',
        html: (function () {
          const d = G.el('div');
          d.appendChild(G.el('p', 'muted', 'Envie para seu mentor ver seus pontos fortes e fracos por categoria.'));
          d.appendChild(G.codeBox(code, { rows: 5, wa: '🐊 Meu boletim de inglês (A Maldição da Cuca):\n\n' + code }));
          return d;
        })(),
        buttons: [{ label: 'Fechar', cls: 'ghost' }]
      });
    };
    p2.appendChild(bol);
    c.appendChild(p2);

    const p3 = G.el('div', 'panel');
    p3.appendChild(G.el('h3', '', '💾 Progresso'));
    const exp = G.el('button', 'btn ghost wide', '⬆️ Exportar progresso (código)');
    exp.onclick = function () {
      const code = 'SAVE1.P.' + G.b64e(JSON.stringify(st));
      G.modal({ title: 'Seu progresso', html: G.codeBox(code, { rows: 6 }), buttons: [{ label: 'Fechar', cls: 'ghost' }] });
    };
    p3.appendChild(exp);
    const impWrap = G.el('div');
    const impTa = G.el('textarea', 'inp'); impTa.rows = 3; impTa.placeholder = 'SAVE1.P.xxxxx — cole aqui para restaurar';
    const imp = G.el('button', 'btn ghost wide', '⬇️ Importar progresso');
    imp.onclick = function () {
      try {
        const raw = impTa.value.trim().replace(/\s+/g, '');
        if (raw.indexOf('SAVE1.P.') !== 0) throw new Error('bad');
        const parsed = JSON.parse(G.b64d(raw.slice(8)));
        if (!parsed || parsed.v !== 1) throw new Error('bad');
        G.modal({
          title: 'Substituir progresso?',
          html: 'Seu progresso atual será trocado pelo importado (' + (parsed.name || '?') + ', nível ' + (parsed.lvl || 1) + ').',
          buttons: [
            { label: 'Cancelar', cls: 'ghost' },
            {
              label: 'Importar', cls: 'danger', cb: function () {
                G.state = Object.assign(defaultState(), parsed);
                G.save();
                G.toast('Progresso importado! ✅');
                G.go('s-map');
              }
            }
          ]
        });
      } catch (e) { G.toast('❌ Código de progresso inválido.'); }
    };
    impWrap.appendChild(impTa); impWrap.appendChild(imp);
    p3.appendChild(impWrap);
    const reset = G.el('button', 'btn danger wide', '🗑️ Apagar tudo e recomeçar');
    reset.onclick = function () {
      G.modal({
        title: 'Apagar TUDO?',
        html: 'Todo o progresso, grimório e ranking serão perdidos para sempre.',
        buttons: [
          { label: 'Cancelar', cls: 'primary' },
          {
            label: 'Apagar tudo', cls: 'danger', cb: function () {
              localStorage.removeItem(SAVE_KEY);
              location.reload();
            }
          }
        ]
      });
    };
    p3.appendChild(reset);
    c.appendChild(p3);

    c.appendChild(G.el('p', 'muted center foot',
      'A Maldição da Cuca v' + G.VERSION + '<br>Feito com 💜 — sem servidor, sem cadastro, sem anúncio.<br>Monstros, música e sons são gerados por código em tempo real.'));
  }

  // ---------------- final ----------------
  function renderFinal() {
    const c = G.$('#s-final .content');
    c.innerHTML = '';
    G.AU.music('final', 0);
    G.FX.setTheme({ a: '#0a0d24', b: '#2c1245', glow: '#ffd75c', deco: 'moon' });
    const st = G.state;
    const cnt = G.SRS.counts();
    const acc = st.stats.ans ? Math.round(100 * st.stats.ok / st.stats.ans) : 0;

    const word = G.el('div', 'final-word');
    'ENGLISH'.split('').forEach(function (L, i) {
      const s = G.el('span', 'final-letter', L);
      s.style.animationDelay = (i * 0.28) + 's';
      word.appendChild(s);
    });
    c.appendChild(word);
    c.appendChild(G.el('p', 'final-quote',
      'O contra-feitiço ecoa pelo Brasil. As palavras voltam a brilhar nos letreiros, nas músicas, nas legendas.<br><b>' +
      (st.name || 'Viajante') + ', você desencantou o inglês.</b>'));

    const stats = G.el('div', 'panel v-stats final-stats');
    stats.innerHTML =
      '<div>📖 ' + cnt.mast + ' palavras dominadas (' + cnt.seen + ' estudadas)</div>' +
      '<div>🎯 ' + acc + '% de precisão em ' + st.stats.ans + ' respostas</div>' +
      '<div>⚔️ ' + st.stats.battles + ' batalhas · ' + st.stats.bosses + ' lendas derrotadas</div>' +
      '<div>🔥 Melhor combo: x' + (st.stats.bestCombo || 0) + '</div>' +
      '<div>⭐ Nível ' + st.lvl + '</div>';
    c.appendChild(stats);

    if (!st.ngplus) {
      const ng = G.el('button', 'btn primary wide', '🌙 Modo Pesadelo (Novo Jogo+)');
      ng.onclick = function () {
        G.modal({
          title: '🌙 Modo Pesadelo',
          html: 'As lendas voltam mais fortes: inimigos com mais vida, menos tempo para responder — e recompensas em dobro. Seu nível, moedas e Grimório continuam.',
          buttons: [
            { label: 'Ainda não', cls: 'ghost' },
            {
              label: 'Aceitar o pesadelo', cls: 'danger', cb: function () {
                st.ngplus = 1; st.letters = []; st.doneNodes = {};
                G.save();
                G.go('s-map');
                G.toast('🌙 O pesadelo começou. Boa sorte.');
              }
            }
          ]
        });
      };
      c.appendChild(ng);
    }
    const back = G.el('button', 'btn ghost wide', '🏠 Voltar ao título');
    back.onclick = function () { G.go('s-title'); };
    c.appendChild(back);

    let burst = 0;
    const iv = setInterval(function () {
      G.FX.confetti(60);
      G.AU.sfx('letter');
      if (++burst >= 3) clearInterval(iv);
    }, 900);
  }
})(typeof window !== 'undefined' ? window : globalThis);
