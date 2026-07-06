/* FIRST OIL — game.js
   Estado global, save, roteador, mapa da cadeia de valor (com fluxo animado),
   Suprimentos, Data Book, DDS diário, ajustes e a certificação final. */
(function (root) {
  const G = root.G = root.G || {};
  const SAVE_KEY = 'firstoil_save_1';

  // ---------------- estado ----------------
  function defaultState() {
    return {
      v: 1, name: '', mentorName: '', created: Date.now(),
      lvl: 1, xp: 0, coins: 40,
      chain: 0, doneNodes: {},
      inv: { cafe: 1, dicionario: 1 },
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
    } catch (e) { /* save corrompido */ }
    G.state = defaultState();
  };
  G.save = function () {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(G.state)); } catch (e) { /* cheio */ }
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
  let mapRaf = 0, mapThumbs = [], chainCv = null;

  G.go = function (id) {
    if (cur === 's-battle' && id !== 's-battle' && G.BATTLE) G.BATTLE.stop();
    if (mapRaf) { cancelAnimationFrame(mapRaf); mapRaf = 0; mapThumbs = []; chainCv = null; }
    G.$$('.screen').forEach(function (s) { s.classList.toggle('active', s.id === id); });
    cur = id;
    if (id === 's-title') { renderTitle(); G.FX.setTheme({ a: '#0a0f1e', b: '#14507a', glow: '#ffc400', deco: 'sea' }); G.AU.music('title', 0); }
    else if (id === 's-map') { renderMap(); const r = curUnitIdx(); G.FX.setTheme(G.DATA.UNITS[r].pal); G.AU.music('map', r); }
    else if (id === 's-story') renderStory();
    else if (id === 's-shop') renderShop();
    else if (id === 's-grimoire') renderGrimoire();
    else if (id === 's-mentor') G.MENTOR.renderMentor();
    else if (id === 's-missions') G.MENTOR.renderMissions();
    else if (id === 's-settings') renderSettings();
    else if (id === 's-final') renderFinal();
    window.scrollTo(0, 0);
  };

  function curUnitIdx() { return Math.min(G.state.chain, G.DATA.UNITS.length - 1); }

  function renderTitle() {
    const st = G.state;
    const cont = G.$('#t-play .t-sub');
    if (cont) {
      cont.textContent = st.storySeen
        ? (st.name ? st.name + ' · ' + G.DATA.rank(st.lvl) + ' · trecho ' + st.chain + '/7' : 'Continuar')
        : 'Iniciar carreira';
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
      d.appendChild(G.el('p', '', 'Como devemos te registrar no POB (Personnel On Board)?'));
      const inp = G.el('input', 'inp');
      inp.maxLength = 18; inp.placeholder = 'Nome ou apelido de rádio';
      d.appendChild(inp);
      G.modal({
        title: '🪪 Registro de embarque',
        html: d, locked: true,
        buttons: [{
          label: 'Embarcar ▸', cls: 'primary', cb: function () {
            G.state.name = inp.value.trim() || 'Trainee';
            G.state.storySeen = 1;
            G.save();
            G.go('s-map');
            G.toast('⚡ Responder rápido conta como execução exemplar — avanço em dobro.', { once: 'crit', ms: 4200 });
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

  // ---------------- mapa da cadeia ----------------
  function renderMap() {
    const st = G.state;
    const c = G.$('#s-map .content');
    c.innerHTML = '';

    const head = G.el('div', 'panel map-head');
    const xpPct = Math.round(100 * st.xp / G.xpNeed());
    head.innerHTML =
      '<div class="row spread">' +
      '<div><b class="pname"></b><div class="muted small-line">' + G.DATA.rank(st.lvl) + ' · Atlântica Energia' + (st.ngplus ? ' · 🌙 Turno Noturno' : '') + '</div></div>' +
      '<div class="coins">💵 US$ ' + st.coins + '</div>' +
      '</div>' +
      '<div class="bar xp"><div class="fill" style="width:' + xpPct + '%"></div></div>';
    G.$('.pname', head).textContent = st.name || 'Trainee';
    c.appendChild(head);

    // diagrama da cadeia de valor (canvas animado)
    const chainWrap = G.el('div', 'panel chain-wrap');
    chainWrap.appendChild(G.el('div', 'chain-title', 'CAMPO AURORA — CADEIA DE VALOR'));
    chainCv = G.el('canvas', 'chain-canvas');
    chainWrap.appendChild(chainCv);
    c.appendChild(chainWrap);

    // DDS diário
    const key = G.todayKey();
    const done = st.daily.hist[key];
    const daily = G.el('div', 'panel daily-card');
    daily.innerHTML =
      '<div class="row spread"><b>📢 DDS Diário</b>' +
      (st.daily.streak > 1 ? '<span class="streak">🔥 ' + st.daily.streak + ' dias</span>' : '') + '</div>' +
      '<div class="muted small-line">' + (done ? 'Registrado hoje: ' + done.sc + '/1000 · pode treinar de novo' : '10 perguntas, iguais para toda a indústria hoje. Compartilhável.') + '</div>';
    const db = G.el('button', 'btn ' + (done ? 'ghost' : 'primary') + ' wide', done ? '🔁 Treinar de novo' : '📢 Participar do DDS');
    db.onclick = function () { G.startDaily(); };
    daily.appendChild(db);
    c.appendChild(daily);

    const nav = G.el('div', 'map-nav');
    [['📓', 'Data Book', 's-grimoire'], ['📦', 'Suprimentos', 's-shop'], ['📨', 'O.S.', 's-missions'], ['📋', 'Instrutor', 's-mentor'], ['⚙️', 'Ajustes', 's-settings']].forEach(function (n) {
      const b = G.el('button', 'nav-btn', '<span>' + n[0] + '</span>' + n[1]);
      b.onclick = function () { G.AU.sfx('click'); G.go(n[2]); };
      nav.appendChild(b);
    });
    c.appendChild(nav);

    // unidades
    G.DATA.UNITS.forEach(function (u, r) {
      const unlocked = r === 0 || st.chain >= r;
      const card = G.el('div', 'region-card' + (unlocked ? '' : ' locked'));
      card.style.background = 'linear-gradient(135deg, ' + u.pal.a + ', ' + u.pal.b + ')';
      const info = G.el('div', 'region-info');
      info.appendChild(G.el('div', 'region-stage', u.stage));
      info.appendChild(G.el('div', 'region-name', (r + 1) + '. ' + u.name));
      info.appendChild(G.el('div', 'region-desc muted', u.desc));
      const nodes = G.el('div', 'nodes');
      for (let n = 0; n < 4; n++) {
        const isCrisis = n === 3;
        const state2 = nodeState(r, n);
        const b = G.el('button', 'node' + (isCrisis ? ' bossnode' : '') + ' ' + state2);
        b.innerHTML = state2 === 'done' ? '✓' : state2 === 'locked' ? '🔒' : isCrisis ? '🚨' : n === 2 ? '🔧🔧' : '🔧';
        if (state2 !== 'locked') {
          b.onclick = function () { G.AU.sfx('click'); G.startNode(r, n); };
        }
        if (isCrisis) b.title = u.boss.title;
        nodes.appendChild(b);
      }
      info.appendChild(nodes);
      card.appendChild(info);
      const th = G.el('canvas', 'boss-thumb');
      th.width = 200; th.height = 120;
      card.appendChild(th);
      mapThumbs.push({ cv: th, mon: G.MON.make({ scene: u.key, name: u.key }) });
      if (!unlocked) {
        th.classList.add('dark');
        card.appendChild(G.el('div', 'region-lock', '🔒 Resolva "' + G.DATA.UNITS[r - 1].boss.title + '" para liberar'));
      }
      c.appendChild(card);
    });

    c.appendChild(G.el('p', 'muted center foot', 'FIRST OIL v' + G.VERSION + ' · inglês técnico para O&G · 100% offline'));

    function drawChain(t) {
      if (!chainCv) return;
      const rW = chainCv.parentElement.getBoundingClientRect().width - 28;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const cH = 64;
      if (chainCv.width !== Math.floor(rW * dpr)) {
        chainCv.width = Math.floor(rW * dpr); chainCv.height = cH * dpr;
        chainCv.style.width = rW + 'px'; chainCv.style.height = cH + 'px';
      }
      const x = chainCv.getContext('2d');
      x.setTransform(dpr, 0, 0, dpr, 0, 0);
      x.clearRect(0, 0, rW, cH);
      const n = 7, pad = 22, cy = 26;
      const gap = (rW - pad * 2) / (n - 1);
      for (let i = 0; i < n - 1; i++) {
        const x0 = pad + i * gap + 11, x1 = pad + (i + 1) * gap - 11;
        x.lineCap = 'round';
        x.strokeStyle = '#242e44'; x.lineWidth = 8;
        x.setLineDash([]);
        x.beginPath(); x.moveTo(x0, cy); x.lineTo(x1, cy); x.stroke();
        if (i < st.chain) {
          x.strokeStyle = '#ffc400'; x.lineWidth = 4;
          x.setLineDash([6, 8]);
          x.lineDashOffset = -(t / 40);
          x.beginPath(); x.moveTo(x0, cy); x.lineTo(x1, cy); x.stroke();
          x.setLineDash([]);
        }
      }
      const labels = ['EXP', 'DRL', 'PRD', 'PRC', 'MID', 'REF', 'CRT'];
      for (let i = 0; i < n; i++) {
        const cx = pad + i * gap;
        const doneU = i < st.chain;
        const curU = i === st.chain;
        const pulse = curU ? 1 + 0.12 * Math.sin(t / 220) : 1;
        x.fillStyle = doneU ? '#1f7a3d' : curU ? '#8a5a10' : '#242e44';
        x.beginPath(); x.arc(cx, cy, 11 * pulse, 0, 6.28); x.fill();
        x.strokeStyle = doneU ? '#6bffb0' : curU ? '#ffc400' : '#3a4a66';
        x.lineWidth = 2;
        x.beginPath(); x.arc(cx, cy, 11 * pulse, 0, 6.28); x.stroke();
        x.font = '700 8px "Bahnschrift", "Segoe UI", sans-serif';
        x.fillStyle = doneU ? '#6bffb0' : curU ? '#ffc400' : '#5a6a88';
        x.textAlign = 'center';
        x.fillText(labels[i], cx, cy + 26);
        if (doneU) {
          x.fillStyle = '#fff';
          x.font = '700 11px "Segoe UI"';
          x.fillText('✓', cx, cy + 4);
        }
      }
      x.textAlign = 'left';
    }

    function thumbLoop(t) {
      drawChain(t || 0);
      mapThumbs.forEach(function (th2) {
        const x = th2.cv.getContext('2d');
        x.setTransform(1, 0, 0, 1, 0, 0);
        th2.mon.draw(x, 200, 120);
      });
      mapRaf = requestAnimationFrame(thumbLoop);
    }
    thumbLoop(0);
  }

  function nodeState(r, n) {
    const st = G.state;
    if (st.doneNodes[r + '-' + n]) return 'done';
    if (!(r === 0 || st.chain >= r)) return 'locked';
    for (let m = 0; m < n; m++) if (!st.doneNodes[r + '-' + m]) return 'locked';
    return 'open';
  }

  // ---------------- tarefas de campo ----------------
  function taskSpec(r, n, elite, idx) {
    const u = G.DATA.UNITS[r];
    const ng = G.state.ngplus ? 1.6 : 1;
    const task = u.tasks[(n * 2 + r + (idx || 0)) % u.tasks.length];
    return {
      name: 'OS-' + (2040 + r * 100 + n * 10 + (idx || 0)) + ' · ' + task,
      scene: u.key, kinds: u.kinds, themes: u.themes,
      hp: Math.round((58 + r * 24) * (elite ? 1.5 : 1) * ng),
      elite: !!elite,
      intro: (idx === 0 && Math.random() < 0.4) ? [G.pick(G.DATA.TASK_INTROS)] : null
    };
  }
  function ncSpec(r) {
    const u = G.DATA.UNITS[r];
    const ng = G.state.ngplus ? 1.6 : 1;
    return {
      name: 'Fechamento de NCs', nc: true,
      scene: u.key, kinds: [], themes: u.themes,
      hp: Math.round((70 + r * 18) * ng),
      intro: [G.pick(G.DATA.NC_INTRO)]
    };
  }

  G.startNode = function (r, n) {
    const u = G.DATA.UNITS[r];
    const isCrisis = n === 3;
    const diff = r < 2 ? 1 : r < 5 ? 2 : 3;
    const ng = G.state.ngplus ? 1.6 : 1;
    let enemies;
    if (isCrisis) {
      const bs = u.boss;
      enemies = [{
        name: bs.name, title: bs.title, crisis: true,
        scene: u.key, kinds: bs.kinds, themes: u.themes,
        hp: Math.round((240 + r * 70) * ng),
        intro: bs.intro, phaseLines: bs.phase, defeatLine: bs.defeat, mech: bs.mech
      }];
    } else if (G.SRS.haunted().length >= 3 && Math.random() < 0.35) {
      enemies = [ncSpec(r)];
      G.toast('⚠ Auditoria interna: NCs abertas precisam ser fechadas.', { once: 'ghosts' });
    } else if (n === 2) {
      enemies = [taskSpec(r, n, false, 0), taskSpec(r, n, true, 1)];
    } else {
      enemies = [taskSpec(r, n, false, 0)];
    }
    G.FX.setTheme(u.pal);
    G.BATTLE.start({
      mode: 'adventure', regionIdx: r, diff: diff, enemies: enemies,
      onEnd: function (res) {
        if (res.win) {
          G.state.doneNodes[r + '-' + n] = 1;
          if (isCrisis && G.state.chain === r) {
            G.state.chain++;
            G.save();
            chainCeremony(u, function () {
              if (G.state.chain >= 7) G.go('s-final');
              else G.go('s-map');
            });
            return;
          }
          G.save();
        }
        G.go('s-map');
      }
    });
    G.toast('📦 Toque num item do almoxarifado (embaixo) para usá-lo durante a tarefa.', { once: 'items', ms: 4200 });
  };

  function chainCeremony(u, done) {
    G.AU.sfx('letter');
    G.FX.confetti(120);
    const st = G.state;
    const d = G.el('div', 'letter-cere');
    d.innerHTML =
      '<div class="big-letter">' + st.chain + '/7</div>' +
      '<p><b>' + u.name + '</b> integrada à cadeia. O óleo avança mais um trecho rumo ao produto final.</p>' +
      '<div class="chain-mini">' +
      ['EXP', 'DRL', 'PRD', 'PRC', 'MID', 'REF', 'CRT'].map(function (L, i) {
        return '<span class="letter' + (st.chain > i ? ' got' : '') + '">' + L + '</span>';
      }).join('') + '</div>';
    G.modal({
      title: '🔗 Trecho conectado!',
      html: d, locked: true,
      buttons: [{ label: 'Continuar ▸', cls: 'primary', cb: done }]
    });
  }

  // ---------------- DDS diário ----------------
  G.startDaily = function () {
    const key = G.todayKey();
    const tip = G.DATA.TIPS[G.hashStr('tip:' + key) % G.DATA.TIPS.length];
    const d = G.el('div');
    d.appendChild(G.el('p', 'tip-en', '“' + tip.en + '”'));
    d.appendChild(G.el('p', 'muted', tip.pt));
    d.appendChild(G.el('p', 'small-line muted', '10 perguntas de inglês técnico — as mesmas para todo mundo hoje.'));
    G.modal({
      title: '📢 DDS — Momento de Segurança',
      html: d,
      buttons: [
        { label: 'Agora não', cls: 'ghost' },
        {
          label: '▶️ Iniciar DDS', cls: 'primary', cb: function () {
            const list = G.CH.compileDaily(key);
            G.FX.setTheme({ a: '#0a0f1e', b: '#1a2a4a', glow: '#ffc400', deco: 'plant' });
            G.BATTLE.start({
              mode: 'daily', regionIdx: 3, diff: 2, list: list,
              enemies: [{
                name: 'DDS ' + G.fmtDate(), scene: 'cert',
                hp: 1, kinds: [], themes: []
              }]
            });
          }
        }
      ]
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
      G.toast('💵 +US$ ' + reward + ' pelo DDS.');
    }
    G.save();
    const share =
      '🛢️ DDS Diário — FIRST OIL (inglês técnico O&G)\n' +
      G.fmtDate() + ' · ' + stats.score + '/1000' +
      (st.daily.streak > 1 ? ' · 🔥' + st.daily.streak + ' dias' : '') + '\n' +
      G.MENTOR.gridEmoji(stats.grid);
    const d = G.el('div');
    d.appendChild(G.el('div', 'grid-line center', G.MENTOR.gridEmoji(stats.grid)));
    d.appendChild(G.el('p', 'center big-score', stats.score + '/1000 · ' + stats.acc + '% de acerto'));
    if (!first) d.appendChild(G.el('p', 'muted center', '(treino — o registro oficial de hoje já foi feito)'));
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
    const proof = G.el('button', 'btn ghost wide', '📋 Comprovação para o instrutor');
    proof.onclick = async function () {
      const code = await G.MENTOR.makeResult({
        v: 1, mid: 'dds-' + key, mt: 'DDS Diário ' + G.fmtDate(),
        st: st.name || 'Profissional', sc: stats.score, ac: stats.acc,
        n: stats.n, g: stats.grid, d: key, tm: Math.round(stats.time)
      });
      G.modal({
        title: 'Comprovação do DDS',
        html: G.codeBox(code, { rows: 5, wa: '🛢️ Meu DDS Diário: ' + stats.score + '/1000\n' + code }),
        buttons: [{ label: 'Fechar', cls: 'ghost' }]
      });
    };
    d.appendChild(proof);
    G.modal({
      title: '📢 DDS concluído',
      html: d, locked: true,
      buttons: [{ label: 'Voltar ao ativo', cls: 'primary', cb: function () { G.go('s-map'); } }]
    });
    G.FX.confetti(60);
    G.AU.sfx('fanfare');
  };

  // ---------------- Ordem de Serviço do instrutor ----------------
  G.startMission = function (m) {
    const list = G.CH.compileMission(m);
    G.FX.setTheme({ a: '#0a1a33', b: '#14507a', glow: '#57c7ff', deco: 'sea' });
    G.BATTLE.start({
      mode: 'mission', mission: m, regionIdx: 2, diff: m.diff, list: list,
      enemies: [{
        name: 'O.S. de ' + m.mn, scene: 'cert',
        hp: 1, kinds: [], themes: [],
        intro: m.msg ? ['📋 Instrução de ' + m.mn + ': "' + m.msg + '"'] : null
      }]
    });
  };

  // ---------------- suprimentos ----------------
  function renderShop() {
    const st = G.state;
    const c = G.$('#s-shop .content');
    c.innerHTML = '';
    c.appendChild(G.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="G.go(\'s-map\')">← Voltar</button><h2>📦 Suprimentos — Seu Osmar</h2>'));
    const talk = G.el('div', 'panel shop-talk');
    talk.innerHTML = '<span class="shop-frog">👷</span><em>“' + G.pick(G.DATA.SHOPLINES) + '”</em>';
    c.appendChild(talk);
    c.appendChild(G.el('div', 'coins center big-coins', '💵 US$ ' + st.coins));
    G.DATA.ITEM_ORDER.forEach(function (id) {
      const it = G.DATA.ITEMS[id];
      const have = st.inv[id] || 0;
      const row = G.el('div', 'panel shop-row');
      row.innerHTML =
        '<span class="shop-e">' + it.e + '</span>' +
        '<div class="shop-mid"><b>' + it.name + '</b><div class="muted small-line">' + it.desc + '</div>' +
        '<div class="muted small-line">Em estoque com você: ' + have + '/3</div></div>';
      const buy = G.el('button', 'btn primary', 'US$ ' + it.price);
      buy.disabled = st.coins < it.price || have >= 3;
      buy.onclick = function () {
        st.coins -= it.price;
        st.inv[id] = have + 1;
        G.save();
        G.AU.sfx('coin');
        renderShop();
      };
      row.appendChild(buy);
      c.appendChild(row);
    });
  }

  // ---------------- Data Book (glossário + SRS) ----------------
  const GRIM_FILTERS = [
    ['all', '📓 Tudo'], ['v', '🛢️ Vocabulário'], ['ab', '🔤 Siglas'], ['ff', '🚩 Falsos Amigos'],
    ['ph', '⚙️ Phrasal Verbs'], ['ir', '📝 Verbos'], ['snd', '📻 Pronúncia & Rádio'],
    ['pp', '📍 Preposições'], ['doc', '📄 Frases & Docs']
  ];
  let grimFilter = 'all';

  function grimCat(id) {
    const pre = id.split(':')[0];
    if (pre === 'ed' || pre === 'mp' || pre === 'na' || pre === 'nm') return 'snd';
    if (pre === 'sn' || pre === 'or' || pre === 'rd') return 'doc';
    return pre;
  }
  function grimLookup(id) {
    const p = id.split(':'), pre = p[0], key = p.slice(1).join(':');
    const D = G.DATA;
    try {
      if (pre === 'v') { const it = D.vocabByEn(key); if (it) return { en: it[0], pt: it[1], tts: it[0] }; }
      if (pre === 'ab') { const it = D.abbrByA(key); if (it) return { en: it.a + ' = ' + it.full, pt: it.pt, tts: it.full }; }
      if (pre === 'ff') { const it = D.ffByWord(key); if (it) return { en: it.w, pt: it.real + ' (não é "' + it.trap + '"!)', tts: it.w }; }
      if (pre === 'ph') { const it = D.phByV(key); if (it) return { en: it.v, pt: it.pt, tts: it.v }; }
      if (pre === 'ir') { const it = D.irByB(key); if (it) return { en: it.b + ' → ' + it.p + ' → ' + it.pp, pt: it.pt, tts: it.b + ', ' + it.p.split('/')[0] + ', ' + it.pp.split('/')[0] }; }
      if (pre === 'ed') { const it = D.edByW(key); if (it) return { en: it.w + '  /' + (it.s === 'id' ? 'ɪd' : it.s) + '/', pt: it.pt, tts: it.w }; }
      if (pre === 'mp') { const it = D.mpByWord(key); if (it) return { en: it.a + ' × ' + it.b, pt: it.apt + ' × ' + it.bpt, tts: it.a + '. ' + it.b }; }
      if (pre === 'na') { if (D.NATO[key]) return { en: key + ' = ' + D.NATO[key], pt: 'alfabeto fonético NATO', tts: D.NATO[key] }; }
      if (pre === 'nm') { return { en: 'Números em ' + key, pt: 'listening de valores e unidades', tts: null }; }
      if (pre === 'pp') return { en: key, pt: '', tts: null };
      if (pre === 'sn') { const it = D.SENTENCES[parseInt(key, 10)]; if (it) return { en: it.en, pt: it.pt, tts: it.en }; }
      if (pre === 'or') { const it = D.ORDER[parseInt(key, 10)]; if (it) return { en: 'Sequência: ' + it.ctx, pt: it.steps.join(' → '), tts: null }; }
      if (pre === 'rd') { const it = D.READ[parseInt(key, 10)]; if (it) return { en: 'Leitura: ' + it.q, pt: it.pt, tts: null }; }
    } catch (e) { /* ignora */ }
    return { en: key, pt: '', tts: null };
  }

  function renderGrimoire() {
    const c = G.$('#s-grimoire .content');
    c.innerHTML = '';
    c.appendChild(G.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="G.go(\'s-map\')">← Voltar</button><h2>📓 Data Book</h2>'));
    const st = G.state;
    const cnt = G.SRS.counts();
    const acc = st.stats.ans ? Math.round(100 * st.stats.ok / st.stats.ans) : 0;
    const head = G.el('div', 'panel grim-stats');
    head.innerHTML =
      '<div><b>' + cnt.mast + '</b><span>dominados</span></div>' +
      '<div><b>' + cnt.seen + '</b><span>estudados</span></div>' +
      '<div><b>' + cnt.ghosts + '</b><span>⚠ NCs abertas</span></div>' +
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
      list.appendChild(G.el('p', 'muted center', 'Vazio por enquanto. Cada termo que aparecer nas tarefas entra no seu Data Book.'));
    }
    ids.slice(0, 400).forEach(function (id) {
      const info = grimLookup(id);
      const m = G.SRS.mastery(id);
      const row = G.el('div', 'grim-row' + (haunted[id] ? ' haunt' : ''));
      const stars = '★★★★★'.slice(0, m) + '☆☆☆☆☆'.slice(0, 5 - m);
      row.innerHTML =
        (haunted[id] ? '<span class="gh">⚠</span>' : '') +
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
    c.appendChild(G.el('p', 'muted center foot', '⚠ = NC aberta (termo errado te aguarda em auditoria) · feche-a acertando 2x. Toque numa linha para ouvir.'));
  }

  // ---------------- ajustes ----------------
  function renderSettings() {
    const st = G.state;
    const c = G.$('#s-settings .content');
    c.innerHTML = '';
    c.appendChild(G.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="G.go(\'s-map\')">← Voltar</button><h2>⚙️ Ajustes</h2>'));

    const p = G.el('div', 'panel');
    p.appendChild(G.el('label', 'lbl', 'Seu nome (POB)'));
    const inName = G.el('input', 'inp');
    inName.maxLength = 18; inName.value = st.name || '';
    inName.onchange = function () { st.name = inName.value.trim() || 'Trainee'; G.save(); };
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
    mkToggle('🎵 Trilha sonora', 'music', function () { G.AU.refreshMusic(); if (st.set.music) G.AU.music('map', curUnitIdx()); });
    mkToggle('🔊 Efeitos sonoros', 'sfx');
    if (G.AU.recSupported()) {
      mkToggle('🎤 Desafios de rádio com microfone', 'mic', function (on) {
        if (on) G.toast('🎤 Transmissões faladas vão aparecer nas tarefas. O navegador pedirá o microfone.');
      });
    }

    const voices = G.AU.enVoices();
    if (voices.length) {
      p.appendChild(G.el('label', 'lbl', '🗣️ Voz do inglês (rádio e listening)'));
      const sel = G.el('select', 'inp');
      voices.forEach(function (v) {
        sel.appendChild(new Option(v.name.replace(/Microsoft |Online |\(Natural\)/g, '').trim() + ' (' + v.lang + ')', v.voiceURI));
      });
      if (st.set.voice) sel.value = st.set.voice;
      sel.onchange = function () { st.set.voice = sel.value; G.save(); };
      p.appendChild(sel);
      const test = G.el('button', 'btn ghost small', '🔊 Testar voz');
      test.onclick = function () { G.AU.speak('Control room, radio check. Loud and clear.', { rate: 0.95 }); };
      p.appendChild(test);
    }
    c.appendChild(p);

    const p2 = G.el('div', 'panel');
    p2.appendChild(G.el('h3', '', '📊 Para o instrutor'));
    const bol = G.el('button', 'btn primary wide', '📊 Gerar Relatório de Competência');
    bol.onclick = async function () {
      const code = await G.MENTOR.makeReport();
      G.modal({
        title: 'Relatório de Competência',
        html: (function () {
          const d = G.el('div');
          d.appendChild(G.el('p', 'muted', 'Envie ao seu instrutor: mostra sua precisão por categoria, assinada digitalmente.'));
          d.appendChild(G.codeBox(code, { rows: 5, wa: '🛢️ Meu Relatório de Competência (FIRST OIL):\n\n' + code }));
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
      const code = 'SAVEOG1.P.' + G.b64e(JSON.stringify(st));
      G.modal({ title: 'Seu progresso', html: G.codeBox(code, { rows: 6 }), buttons: [{ label: 'Fechar', cls: 'ghost' }] });
    };
    p3.appendChild(exp);
    const impTa = G.el('textarea', 'inp'); impTa.rows = 3; impTa.placeholder = 'SAVEOG1.P.xxxxx — cole aqui para restaurar';
    const imp = G.el('button', 'btn ghost wide', '⬇️ Importar progresso');
    imp.onclick = function () {
      try {
        const raw = impTa.value.trim().replace(/\s+/g, '');
        if (raw.indexOf('SAVEOG1.P.') !== 0) throw new Error('bad');
        const parsed = JSON.parse(G.b64d(raw.slice(10)));
        if (!parsed || parsed.v !== 1) throw new Error('bad');
        G.modal({
          title: 'Substituir progresso?',
          html: 'Seu progresso atual será trocado pelo importado (' + (parsed.name || '?') + ', ' + G.DATA.rank(parsed.lvl || 1) + ').',
          buttons: [
            { label: 'Cancelar', cls: 'ghost' },
            {
              label: 'Importar', cls: 'danger', cb: function () {
                G.state = Object.assign(defaultState(), parsed);
                G.save();
                G.toast('Progresso importado. ✅');
                G.go('s-map');
              }
            }
          ]
        });
      } catch (e) { G.toast('❌ Código de progresso inválido.'); }
    };
    p3.appendChild(impTa); p3.appendChild(imp);
    const reset = G.el('button', 'btn danger wide', '🗑️ Apagar tudo e recomeçar');
    reset.onclick = function () {
      G.modal({
        title: 'Apagar TUDO?',
        html: 'Todo o progresso, Data Book e ranking serão perdidos definitivamente.',
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
      'FIRST OIL v' + G.VERSION + '<br>Inglês técnico para profissionais de óleo & gás.<br>Sem servidor, sem cadastro. Cenas, trilha e sons gerados por código em tempo real.'));
  }

  // ---------------- certificação final ----------------
  function renderFinal() {
    const c = G.$('#s-final .content');
    c.innerHTML = '';
    G.AU.music('final', 0);
    G.FX.setTheme({ a: '#0a0f1e', b: '#1a2a4a', glow: '#ffd75c', deco: 'plant' });
    const st = G.state;
    const cnt = G.SRS.counts();
    const acc = st.stats.ans ? Math.round(100 * st.stats.ok / st.stats.ans) : 0;

    const word = G.el('div', 'final-word');
    'CERTIFIED'.split('').forEach(function (L, i) {
      const s = G.el('span', 'final-letter', L);
      s.style.animationDelay = (i * 0.22) + 's';
      word.appendChild(s);
    });
    c.appendChild(word);
    c.appendChild(G.el('p', 'final-quote',
      'Da onda sísmica à bomba do posto: a cadeia inteira passou pelas suas mãos — em inglês.<br>' +
      '<b>' + (st.name || 'Trainee') + ', a Auditoria Internacional aprovou a operação do Campo Aurora.</b>'));

    const stats = G.el('div', 'panel v-stats final-stats');
    stats.innerHTML =
      '<div>📓 ' + cnt.mast + ' termos dominados (' + cnt.seen + ' estudados)</div>' +
      '<div>🎯 ' + acc + '% de precisão em ' + st.stats.ans + ' respostas</div>' +
      '<div>🔧 ' + st.stats.battles + ' tarefas · ' + st.stats.bosses + ' crises controladas</div>' +
      '<div>📈 Melhor uptime: x' + (st.stats.bestCombo || 0) + '</div>' +
      '<div>🪪 Cargo final: ' + G.DATA.rank(st.lvl) + '</div>';
    c.appendChild(stats);

    if (!st.ngplus) {
      const ng = G.el('button', 'btn primary wide', '🌙 Turno Noturno (Novo Jogo+)');
      ng.onclick = function () {
        G.modal({
          title: '🌙 Turno Noturno',
          html: 'A cadeia reinicia no regime mais duro: crises mais severas, menos tempo de resposta — e bônus em dobro. Cargo, orçamento e Data Book continuam.',
          buttons: [
            { label: 'Ainda não', cls: 'ghost' },
            {
              label: 'Assumir o turno', cls: 'danger', cb: function () {
                st.ngplus = 1; st.chain = 0; st.doneNodes = {};
                G.save();
                G.go('s-map');
                G.toast('🌙 Turno noturno iniciado. Café na mão.');
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
