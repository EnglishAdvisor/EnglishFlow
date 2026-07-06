/* A Maldição da Cuca — battle.js
   Máquina de batalha: perguntas com timer, combo, críticos por velocidade,
   itens, fases de chefe com mecânicas próprias e diálogos. Também roda os
   modos de contagem fixa (missões do mentor e desafio diário). */
(function (root) {
  const G = root.G = root.G || {};
  const B = G.BATTLE = {};

  let S = null;          // estado da batalha
  let ctx = null, cw = 0, chh = 0;
  let rafId = 0;
  let keysBound = false;

  // ---------------- ciclo de vida ----------------
  B.start = function (cfg) {
    B.stop();
    S = {
      cfg: cfg, mode: cfg.mode || 'adventure',
      enemies: cfg.enemies.slice(), ei: 0,
      enemy: null, mon: null,
      hp: G.hpMax(), hpMax: G.hpMax(),
      combo: 0, bestCombo: 0,
      qi: 0, okN: 0, closeN: 0, wrongN: 0,
      scoreSum: 0, grid: '',
      t0: performance.now(),
      qStart: 0, tLimit: 1, waiting: false, over: false,
      timeMult: 1, rateBoost: 0,
      armCrit: false, hintUsed: false,
      phaseQueue: null, mechTimer: 0,
      feedbackTimer: 0
    };
    G.go('s-battle');
    G.$('#b-feedback').classList.add('hidden');
    G.$('#b-dlg').classList.add('hidden');
    sizeCanvas();
    renderItems();
    updateHud();
    if (!keysBound) { document.addEventListener('keydown', onKey); keysBound = true; }
    G.AU.music(anyBoss() ? 'boss' : 'battle', cfg.regionIdx || 0);
    rafId = requestAnimationFrame(loop);
    nextEnemy();
  };

  B.stop = function () {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    if (S) {
      clearTimeout(S.mechTimer);
      clearTimeout(S.feedbackTimer);
    }
    G.AU.stopSpeak();
    G.AU.stopListen();
    S = null;
  };

  function anyBoss() {
    return S.enemies.some(function (e) { return !!e.boss; });
  }
  function fixedMode() { return S.mode === 'mission' || S.mode === 'daily'; }
  function fixedList() { return S.cfg.list || []; }

  function sizeCanvas() {
    const cv = G.$('#b-canvas');
    const r = cv.parentElement.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cw = Math.max(10, r.width); chh = Math.max(10, r.height);
    cv.width = Math.floor(cw * dpr); cv.height = Math.floor(chh * dpr);
    cv.style.width = cw + 'px'; cv.style.height = chh + 'px';
    ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function loop() {
    if (!S) return;
    if (S.mon && ctx) S.mon.draw(ctx, cw, chh);
    // timer
    if (S.waiting) {
      const el = performance.now() - S.qStart;
      const rem = G.clamp(1 - el / S.tLimit, 0, 1);
      const f = G.$('#b-timerfill');
      f.style.width = (rem * 100) + '%';
      f.style.background = rem > 0.5 ? 'var(--good)' : rem > 0.25 ? 'var(--gold)' : 'var(--bad)';
      if (rem <= 0.25 && rem > 0) {
        const sec = Math.floor(el / 1000);
        if (sec !== S.lastTick) { S.lastTick = sec; G.AU.sfx('tick'); }
      }
      if (rem <= 0) resolve({ ok: false, close: false, timeout: true });
    }
    rafId = requestAnimationFrame(loop);
  }

  function enemyCenter() {
    const r = G.$('#b-canvas').getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height * 0.5 };
  }

  // ---------------- inimigos ----------------
  function nextEnemy() {
    const spec = S.enemies[S.ei];
    S.enemy = { spec: spec, hp: spec.hp, max: spec.hp };
    S.phase = 0;
    S.mon = G.MON.make(spec);
    G.$('#b-ename').innerHTML = '';
    const nm = G.el('span', spec.boss ? 'boss-name' : '', '');
    nm.textContent = (spec.ghost ? '👻 ' : '') + spec.name + (spec.elite ? ' ★' : '');
    G.$('#b-ename').appendChild(nm);
    if (spec.title) {
      const tt = G.el('div', 'boss-title', '');
      tt.textContent = spec.title;
      G.$('#b-ename').appendChild(tt);
    }
    drawEnemyHp();
    if (spec.boss) { G.AU.sfx('boss'); G.FX.shake(true); }
    else if (spec.ghost) G.AU.sfx('ghost');
    const lines = spec.intro && spec.intro.length ? spec.intro : null;
    if (lines) showDialogue(spec.name, lines, ask);
    else ask();
  }

  function drawEnemyHp() {
    if (fixedMode()) {
      G.$('#b-ehpwrap').style.visibility = 'hidden';
      return;
    }
    G.$('#b-ehpwrap').style.visibility = 'visible';
    const pct = G.clamp(S.enemy.hp / S.enemy.max, 0, 1) * 100;
    G.$('#b-ehp').style.width = pct + '%';
  }

  // ---------------- diálogo ----------------
  function showDialogue(name, lines, done) {
    const dlg = G.$('#b-dlg');
    const txt = G.$('#b-dlg-text');
    G.$('#b-dlg-name').textContent = name;
    dlg.classList.remove('hidden');
    let i = 0, tw = null;
    function next() {
      if (i >= lines.length) {
        dlg.classList.add('hidden');
        dlg.onclick = null;
        done();
        return;
      }
      let line = lines[i].replace(/\{name\}/g, G.state.name || 'estudante');
      i++;
      tw = G.typeText(txt, line);
    }
    dlg.onclick = function () {
      if (tw && !tw.isDone()) tw.skip();
      else next();
    };
    next();
  }

  // ---------------- perguntas ----------------
  function ask() {
    if (!S || S.over) return;
    if (fixedMode()) {
      if (S.qi >= fixedList().length) { finishFixed(); return; }
      S.ch = fixedList()[S.qi];
      G.$('#b-progress').textContent = (S.qi + 1) + '/' + fixedList().length;
    } else {
      S.ch = G.CH.forBattle(S.enemy.spec, S.cfg.diff || 1);
      G.$('#b-progress').textContent = '';
      if (S.ch.isReview) G.toast('👻 Uma palavra que você errou voltou para te assombrar!', { once: 'review' });
    }
    S.qi++;
    renderChallenge(S.ch);
    const ngMult = G.state.ngplus ? 0.85 : 1;
    S.tLimit = S.ch.time * 1000 * S.timeMult * ngMult;
    S.qStart = performance.now();
    S.lastTick = -1;
    S.waiting = true;
    S.hintUsed = false;
    renderItems();
    // mecânica do Saci: embaralha as opções no meio da pergunta
    if (S.enemy.spec.mech === 'saci' && S.phase >= 1 && S.ch.ui === 'choice') {
      S.mechTimer = setTimeout(function () {
        if (!S || !S.waiting) return;
        const area = G.$('#b-area');
        const btns = G.$$('.opt', area);
        area.classList.add('spin');
        setTimeout(function () { area.classList.remove('spin'); }, 600);
        G.shuffle(btns).forEach(function (b) { area.appendChild(b); });
        G.AU.sfx('swoosh');
      }, S.tLimit * 0.45);
    }
  }

  function renderChallenge(ch) {
    G.$('#b-feedback').classList.add('hidden');
    const tEl = G.$('#b-title'), mEl = G.$('#b-main'), sEl = G.$('#b-sub'), area = G.$('#b-area');
    tEl.textContent = ch.title || '';
    mEl.textContent = ch.main || '';
    mEl.style.display = ch.main ? '' : 'none';
    sEl.textContent = ch.sub || '';
    sEl.style.display = ch.sub ? '' : 'none';
    area.innerHTML = '';
    area.className = '';

    // botão de ouvir (desafios de listening)
    if (ch.listenOnly && ch.tts) {
      const play = G.el('button', 'btn listen-btn', '🔊 Ouvir');
      play.onclick = function () { speakTts(ch); };
      area.appendChild(play);
      setTimeout(function () { if (S && S.ch === ch) speakTts(ch); }, 400);
    }

    if (ch.ui === 'choice') {
      const wrap = G.el('div', 'opts');
      ch.options.forEach(function (op, i) {
        const b = G.el('button', 'opt', '');
        b.dataset.i = i;
        b.innerHTML = '<kbd>' + (i + 1) + '</kbd> ';
        b.appendChild(document.createTextNode(op.label));
        b.onclick = function () {
          if (!S || !S.waiting) return;
          markChoice(b, op);
          resolve({ ok: !!op.correct, close: false, trap: !!op.trap });
        };
        wrap.appendChild(b);
      });
      area.appendChild(wrap);
    } else if (ch.ui === 'type') {
      const inp = G.el('input', 'inp type-inp');
      inp.placeholder = 'digite em inglês...';
      inp.autocapitalize = 'off'; inp.autocomplete = 'off'; inp.spellcheck = false;
      inp.onkeydown = function (e) { if (e.key === 'Enter') submit(); };
      const btn = G.el('button', 'btn primary', 'Responder ⚡');
      function submit() {
        if (!S || !S.waiting) return;
        const r = ch.check(inp.value);
        resolve({ ok: r.ok, close: r.close, input: inp.value });
      }
      btn.onclick = submit;
      area.appendChild(inp);
      area.appendChild(btn);
      setTimeout(function () { try { inp.focus(); } catch (e) { } }, 120);
    } else if (ch.ui === 'tiles') {
      const built = G.el('div', 'tile-built');
      const pool = G.el('div', 'tile-pool');
      const placed = [];
      function refresh() {
        built.innerHTML = '';
        if (!placed.length) built.appendChild(G.el('span', 'tile-hint', 'toque nas palavras na ordem certa'));
        placed.forEach(function (w, i) {
          const t = G.el('button', 'tile placed', '');
          t.textContent = w;
          t.onclick = function () {
            placed.splice(i, 1);
            const back = G.el('button', 'tile', '');
            back.textContent = w;
            back.onclick = poolClick(back, w);
            pool.appendChild(back);
            refresh();
          };
          built.appendChild(t);
        });
      }
      function poolClick(el, w) {
        return function () {
          if (!S || !S.waiting) return;
          placed.push(w);
          el.remove();
          refresh();
          G.AU.sfx('click');
          if (!pool.children.length) {
            setTimeout(function () {
              if (!S || !S.waiting) return;
              const r = ch.check(placed.join(' '));
              resolve({ ok: r.ok, close: r.close, input: placed.join(' ') });
            }, 260);
          }
        };
      }
      ch.tiles.forEach(function (w) {
        const t = G.el('button', 'tile', '');
        t.textContent = w;
        t.onclick = poolClick(t, w);
        pool.appendChild(t);
      });
      refresh();
      area.appendChild(built);
      area.appendChild(pool);
    } else if (ch.ui === 'speak') {
      const hear = G.el('button', 'btn listen-btn', '🔊 Ouvir exemplo');
      hear.onclick = function () { speakTts(ch); };
      const mic = G.el('button', 'btn mic-btn', '🎤 Toque e fale');
      const status = G.el('div', 'mic-status muted', '');
      let tries = 0;
      mic.onclick = async function () {
        if (!S || !S.waiting) return;
        mic.disabled = true; mic.textContent = '🎙️ Ouvindo...';
        status.textContent = 'Fale agora: "' + ch.speakTarget + '"';
        const r = await G.AU.listen({ timeout: 6000 });
        if (!S || !S.waiting) return;
        mic.disabled = false; mic.textContent = '🎤 Toque e fale';
        if (r.ok) {
          const target = G.norm(ch.speakTarget);
          const hitAlt = r.alts.find(function (a) {
            const t2 = G.norm(a.t);
            return t2 === target || t2.indexOf(target) >= 0 || G.lev(t2, target) <= 1;
          });
          if (hitAlt) { resolve({ ok: true, close: false, input: hitAlt.t }); return; }
          tries++;
          status.textContent = 'Entendi "' + r.alts[0].t + '"... tente de novo! (' + tries + '/3)';
          G.AU.sfx('bad');
          if (tries >= 3) resolve({ ok: false, close: false, input: r.alts[0].t });
        } else {
          status.textContent = r.err === 'not-allowed'
            ? 'Microfone bloqueado — permita o acesso no navegador.'
            : 'Não ouvi nada... tente de novo.';
        }
      };
      area.appendChild(hear);
      area.appendChild(mic);
      area.appendChild(status);
    }
  }

  function speakTts(ch) {
    let rate = ch.ttsRate || 0.95;
    if (S && S.enemy.spec.mech === 'iara' && S.phase >= 1) rate = 1.15;
    G.AU.speak(ch.tts, { rate: rate });
  }

  function markChoice(btn, op) {
    G.$$('.opt', G.$('#b-area')).forEach(function (b) { b.disabled = true; });
    btn.classList.add(op.correct ? 'right' : 'wrong');
    if (!op.correct) {
      G.$$('.opt', G.$('#b-area')).forEach(function (b) {
        const o = S.ch.options[parseInt(b.dataset.i, 10)];
        if (o && o.correct) b.classList.add('right');
      });
    }
  }

  // ---------------- resolução ----------------
  function resolve(res) {
    if (!S || !S.waiting) return;
    S.waiting = false;
    clearTimeout(S.mechTimer);
    G.AU.stopListen();
    const ch = S.ch;
    const remFrac = G.clamp(1 - (performance.now() - S.qStart) / S.tLimit, 0, 1);
    const fast = res.ok && !res.close && remFrac >= 0.55;
    const q = !res.ok ? 0 : res.close ? 2 : fast ? 5 : 4;
    if (ch.srsId) G.SRS.record(ch.srsId, ch.kind, q);
    G.state.stats.ans++;
    if (res.ok) G.state.stats.ok++;
    S.scoreSum += res.ok ? (res.close ? 30 : Math.round(60 + 40 * remFrac)) : 0;
    S.grid += res.ok ? (res.close ? '1' : '2') : '0';
    if (res.ok) { if (res.close) S.closeN++; else S.okN++; } else S.wrongN++;

    if (res.ok) {
      S.combo++;
      S.bestCombo = Math.max(S.bestCombo, S.combo);
      G.state.stats.bestCombo = Math.max(G.state.stats.bestCombo || 0, S.combo);
      const crit = fast || S.armCrit;
      let dmg = (16 + G.state.lvl * 2) * (1 + 0.05 * Math.min(S.combo - 1, 10));
      if (S.armCrit) { dmg *= 2; S.armCrit = false; }
      else if (crit) dmg *= 1.7;
      if (res.close) dmg *= 0.6;
      if (S.enemy.spec.ghost) dmg *= 1.25;
      dmg = Math.round(dmg);
      S.enemy.hp = Math.max(0, S.enemy.hp - dmg);
      drawEnemyHp();
      const c = enemyCenter();
      G.FX.burst(c.x, c.y, { n: crit ? 30 : 16, colors: crit ? ['#fff', '#ffd75c', '#ff9d5c'] : ['#ffd75c', '#9d7bff', '#fff'], speed: crit ? 4.5 : 3 });
      G.FX.floatText(c.x, c.y - 30, '-' + dmg + (crit ? ' 💥' : ''), crit ? 'crit' : 'dmg');
      S.mon.hurt();
      G.AU.sfx(crit ? 'crit' : 'hit');
      if (S.combo >= 2) G.AU.sfx('combo', S.combo);
      G.vibrate(20);
      if (S.combo === 3) G.toast('🔥 Combo x3! Acertos seguidos aumentam seu dano.', { once: 'combo' });
    } else {
      S.combo = 0;
      S.mon.attack();
      const spec = S.enemy.spec;
      setTimeout(function () {
        if (!S) return;
        G.FX.shake(!!spec.boss);
        G.FX.vignette();
        G.AU.sfx('hurt');
        G.vibrate([40, 40, 40]);
        if (!fixedMode()) {
          let edmg = 9 + (S.cfg.regionIdx || 0) * 3 + (spec.boss ? 4 : 0);
          if (res.trap) { edmg = Math.round(edmg * 1.5); }
          S.hp = Math.max(0, S.hp - edmg);
          const pr = G.$('#b-php').getBoundingClientRect();
          G.FX.floatText(pr.left + 40, pr.top - 10, '-' + edmg, 'phurt');
          updateHud();
          if (S.hp <= 0) { onPlayerDown(); return; }
        }
      }, 280);
    }
    updateHud();
    showFeedback(res, fast);
  }

  function showFeedback(res, fast) {
    const ch = S.ch, fb = G.$('#b-feedback');
    fb.classList.remove('hidden', 'good', 'bad', 'close');
    fb.classList.add(res.ok ? (res.close ? 'close' : 'good') : 'bad');
    let head;
    if (res.ok && res.close) head = '😬 QUASE! (aceitei com errinho de digitação)';
    else if (res.ok && fast) head = '⚡ ACERTOU — CRÍTICO DE VELOCIDADE!';
    else if (res.ok) head = '✔ ACERTOU!';
    else if (res.timeout) head = '⏰ TEMPO ESGOTADO!';
    else if (res.trap) head = '🎭 ' + (ch.trapNote || 'CAIU NA PEGADINHA!');
    else head = '✘ ERROU!';
    fb.innerHTML = '';
    fb.appendChild(G.el('div', 'fb-head', head));
    if (ch.answerText) {
      const a = G.el('div', 'fb-answer', '');
      a.textContent = ch.answerText;
      fb.appendChild(a);
    }
    if (ch.ptText) {
      const p2 = G.el('div', 'fb-pt', '');
      p2.textContent = ch.ptText;
      fb.appendChild(p2);
    }
    if (ch.note && !res.trap) {
      const n = G.el('div', 'fb-note', '');
      n.textContent = '💡 ' + ch.note;
      fb.appendChild(n);
    }
    fb.appendChild(G.el('div', 'fb-tap muted', 'toque para continuar ▸'));
    const spoken = ch.feedbackTts || ch.tts;
    if (spoken) setTimeout(function () { G.AU.speak(spoken, { rate: 0.95 }); }, 350);
    G.AU.sfx(res.ok ? 'good' : 'bad');

    const delay = res.ok && !res.close ? 1600 : res.ok ? 2600 : 3400;
    let advanced = false;
    function advance() {
      if (advanced || !S) return;
      advanced = true;
      fb.onclick = null;
      clearTimeout(S.feedbackTimer);
      fb.classList.add('hidden');
      afterFeedback();
    }
    fb.onclick = advance;
    S.feedbackTimer = setTimeout(advance, delay);
  }

  function afterFeedback() {
    if (!S) return;
    if (!fixedMode() && S.enemy.hp <= 0) { onEnemyDead(); return; }
    // fase de chefe
    if (!fixedMode() && S.enemy.spec.boss) {
      const frac = S.enemy.hp / S.enemy.max;
      const lines = S.enemy.spec.phaseLines || [];
      if (S.phase === 0 && frac <= 0.66 && lines[0]) { enterPhase(1, lines[0]); return; }
      if (S.phase === 1 && frac <= 0.33 && lines[1]) { enterPhase(2, lines[1]); return; }
      if (S.phase === 1 && frac <= 0.33 && !lines[1]) S.phase = 2;
    }
    ask();
  }

  function enterPhase(p, line) {
    S.phase = p;
    S.mon.setPhase(p);
    G.FX.shake(true);
    G.AU.sfx('boss');
    if (S.enemy.spec.mech === 'cuca') {
      S.timeMult = p === 1 ? 0.85 : 0.72;
      G.toast('🎶 A cantiga da Cuca acelera o tempo!');
    }
    showDialogue(S.enemy.spec.name, [line], ask);
  }

  // ---------------- morte do inimigo / vitória ----------------
  function onEnemyDead() {
    S.over = false;
    const spec = S.enemy.spec;
    const c = enemyCenter();
    G.FX.burst(c.x, c.y, { n: 40, colors: ['#ffd75c', '#fff', '#9d7bff', '#5dff8f'], speed: 5 });
    G.AU.sfx(spec.boss ? 'fanfare' : 'coin');
    S.mon.die(function () {
      if (!S) return;
      if (S.ei < S.enemies.length - 1) {
        S.ei++;
        G.toast('⚔️ Mais um se aproxima...');
        setTimeout(function () { if (S) nextEnemy(); }, 500);
      } else {
        victory();
      }
    });
    if (spec.defeatLine) {
      // fala de derrota do chefe aparece na tela de vitória
      S.defeatLine = spec.defeatLine;
    }
  }

  function victory() {
    S.over = true;
    G.state.stats.battles++;
    G.SRS.tick();
    const r = S.cfg.regionIdx || 0;
    const ng = G.state.ngplus ? 2 : 1;
    let coins = 0, xp = 0;
    S.enemies.forEach(function (spec) {
      if (spec.boss) { coins += 45 + r * 12; xp += 60 + r * 18; G.state.stats.bosses++; }
      else if (spec.ghost) { coins += 14 + r * 3; xp += 20 + r * 4; }
      else if (spec.elite) { coins += (10 + r * 4) * 2; xp += Math.round((16 + r * 6) * 1.8); }
      else { coins += 10 + r * 4; xp += 16 + r * 6; }
    });
    coins = Math.round(coins * (0.9 + Math.random() * 0.25)) * ng;
    xp = xp * ng;
    const acc = S.qi ? Math.round(100 * (S.okN + S.closeN) / S.qi) : 0;
    if (acc >= 90) { coins = Math.round(coins * 1.3); }
    G.gainCoins(coins);
    const lvls = G.gainXp(xp);
    let drop = null;
    const bossSpec = S.enemies.find(function (e) { return e.boss; });
    const eliteSpec = S.enemies.find(function (e) { return e.elite; });
    if (bossSpec || (eliteSpec && Math.random() < 0.5)) {
      drop = G.grantItem();
    }
    G.save();

    const ov = G.el('div', 'victory-ov');
    const box = G.el('div', 'victory-box panel');
    box.appendChild(G.el('div', 'v-title', bossSpec ? '🏆 LENDA DERROTADA!' : '✨ VITÓRIA!'));
    if (S.defeatLine) {
      const dl = G.el('p', 'v-quote', '');
      dl.textContent = '“' + S.defeatLine + '”';
      box.appendChild(dl);
    }
    const stats = G.el('div', 'v-stats');
    stats.innerHTML =
      '<div>🪙 +' + coins + ' moedas</div>' +
      '<div>⭐ +' + xp + ' XP' + (lvls ? ' — <b>SUBIU PARA O NÍVEL ' + G.state.lvl + '!</b>' : '') + '</div>' +
      '<div>🎯 ' + acc + '% de acerto' + (acc >= 90 ? ' — bônus de precisão!' : '') + '</div>' +
      '<div>🔥 Melhor combo: x' + S.bestCombo + '</div>' +
      (drop ? '<div>🎁 Achou: ' + G.DATA.ITEMS[drop].e + ' ' + G.DATA.ITEMS[drop].name + '</div>' : '');
    box.appendChild(stats);
    const btn = G.el('button', 'btn primary wide', 'Continuar ▸');
    btn.onclick = function () {
      ov.remove();
      const cb = S.cfg.onEnd;
      const result = { win: true, boss: !!bossSpec };
      B.stop();
      if (cb) cb(result);
    };
    box.appendChild(btn);
    ov.appendChild(box);
    G.$('#s-battle').appendChild(ov);
    if (bossSpec) G.FX.confetti();
    if (lvls) G.AU.sfx('levelup');
  }

  // ---------------- derrota ----------------
  function onPlayerDown() {
    if (G.state.inv.patua > 0) {
      G.state.inv.patua--;
      S.hp = Math.round(S.hpMax / 2);
      updateHud();
      renderItems();
      G.FX.flash('#9d7bff');
      G.AU.sfx('letter');
      G.toast('🧿 O Patuá te protegeu! Levantou com ' + S.hp + ' de HP.');
      G.save();
      return;
    }
    S.over = true;
    G.AU.sfx('hurt');
    const lost = Math.round(G.state.coins * 0.25);
    G.state.coins -= lost;
    G.state.stats.battles++;
    G.SRS.tick();
    G.save();
    const ov = G.el('div', 'victory-ov');
    const box = G.el('div', 'victory-box panel defeat');
    box.appendChild(G.el('div', 'v-title', '💀 Você foi embaralhado...'));
    box.appendChild(G.el('p', 'v-quote', 'A lenda venceu desta vez. Você perdeu ' + lost + ' moedas na fuga — mas o que aprendeu, ninguém tira.'));
    const btn = G.el('button', 'btn primary wide', 'Voltar ao mapa');
    btn.onclick = function () {
      ov.remove();
      const cb = S.cfg.onEnd;
      B.stop();
      if (cb) cb({ win: false });
    };
    box.appendChild(btn);
    ov.appendChild(box);
    G.$('#s-battle').appendChild(ov);
  }

  // ---------------- fim de modo fixo (missão / diário) ----------------
  function finishFixed() {
    S.over = true;
    const n = fixedList().length;
    const stats = {
      n: n,
      score: Math.round(S.scoreSum / Math.max(1, n) * 10),
      acc: Math.round(100 * (S.okN + S.closeN) / Math.max(1, n)),
      grid: S.grid,
      time: (performance.now() - S.t0) / 1000,
      bestCombo: S.bestCombo
    };
    G.state.stats.battles++;
    G.SRS.tick();
    G.save();
    const mode = S.mode, mission = S.cfg.mission;
    B.stop();
    if (mode === 'mission') G.MENTOR.finishMission(mission, stats);
    else G.finishDaily(stats);
  }

  // ---------------- HUD / itens ----------------
  function updateHud() {
    if (!S) return;
    const wrap = G.$('#b-php-wrap');
    if (fixedMode()) { wrap.style.display = 'none'; }
    else {
      wrap.style.display = '';
      G.$('#b-php').style.width = (100 * S.hp / S.hpMax) + '%';
      G.$('#b-php-label').textContent = (G.state.name || 'Você') + ' · Nv ' + G.state.lvl + ' · ' + S.hp + '/' + S.hpMax;
    }
    const cb = G.$('#b-combo');
    if (S.combo >= 2) {
      cb.textContent = '🔥 x' + S.combo;
      cb.classList.add('hot');
    } else {
      cb.textContent = '';
      cb.classList.remove('hot');
    }
  }

  function renderItems() {
    const bar = G.$('#b-items');
    bar.innerHTML = '';
    if (fixedMode()) return;
    G.DATA.ITEM_ORDER.forEach(function (id) {
      const count = G.state.inv[id] || 0;
      if (!count) return;
      const it = G.DATA.ITEMS[id];
      const b = G.el('button', 'item-slot', '');
      b.innerHTML = '<span class="ie">' + it.e + '</span><span class="ic">' + count + '</span>';
      b.title = it.name + ' — ' + it.desc;
      if (id === 'patua') { b.classList.add('passive'); b.disabled = true; }
      else b.onclick = function () { useItem(id); };
      bar.appendChild(b);
    });
  }

  function useItem(id) {
    if (!S || !S.waiting || (G.state.inv[id] || 0) <= 0) return;
    const ch = S.ch;
    if (id === 'cafezinho' || id === 'paodequeijo') {
      const heal = id === 'cafezinho' ? 35 : 18;
      if (S.hp >= S.hpMax) { G.toast('HP já está cheio!'); return; }
      S.hp = Math.min(S.hpMax, S.hp + heal);
      G.FX.floatText(window.innerWidth / 2, window.innerHeight - 130, '+' + heal + ' ❤️', 'heal');
    } else if (id === 'dicionario') {
      if (S.hintUsed) { G.toast('Você já usou uma dica nesta pergunta.'); return; }
      if (ch.ui === 'choice') {
        const btns = G.$$('.opt', G.$('#b-area')).filter(function (b) { return !b.disabled; });
        if (btns.length <= 2) { G.toast('Só restam duas opções — se vira! 😄'); return; }
        let removed = 0;
        G.shuffle(btns).forEach(function (b) {
          if (removed >= 2 || btns.length - removed <= 2) return;
          const op = ch.options[parseInt(b.dataset.i, 10)];
          if (op && !op.correct) { b.disabled = true; b.classList.add('dim'); removed++; }
        });
        if (!removed) { G.toast('A dica falhou desta vez...'); return; }
      } else if (ch.ui === 'type' || ch.ui === 'tiles') {
        const ans = ch.answerText || '';
        const reveal = ans.slice(0, Math.ceil(ans.length / 2));
        const sEl = G.$('#b-sub');
        sEl.style.display = '';
        sEl.textContent = '💡 Começa com: “' + reveal + '...”';
      } else { G.toast('A dica não funciona aqui.'); return; }
      S.hintUsed = true;
    } else if (id === 'chinelo') {
      if (S.armCrit) { G.toast('O chinelo já está armado!'); return; }
      S.armCrit = true;
      G.toast('🩴 Chinelo armado: próximo acerto causa dano DOBRADO!');
    } else if (id === 'ampulheta') {
      S.qStart += 8000;
      if (S.qStart > performance.now()) S.qStart = performance.now();
      G.toast('⏳ +8 segundos!');
    } else return;
    G.state.inv[id]--;
    G.AU.sfx('item');
    G.save();
    renderItems();
    updateHud();
  }

  // ---------------- teclado ----------------
  function onKey(e) {
    if (!S) return;
    const fb = G.$('#b-feedback');
    if (fb && !fb.classList.contains('hidden') && (e.key === 'Enter' || e.key === ' ')) {
      fb.click();
      e.preventDefault();
      return;
    }
    if (!S.waiting) return;
    if (S.ch && S.ch.ui === 'choice' && /^[1-9]$/.test(e.key)) {
      const idx = parseInt(e.key, 10) - 1;
      const btns = G.$$('.opt', G.$('#b-area')).filter(function (b) { return !b.classList.contains('dim'); });
      if (btns[idx] && !btns[idx].disabled) btns[idx].click();
    }
  }

  // fugir
  document.addEventListener('DOMContentLoaded', function () {
    const flee = G.$('#b-flee');
    if (flee) flee.onclick = function () {
      if (!S) return;
      G.modal({
        title: 'Fugir da batalha?',
        html: 'Você não perde nada, mas a lenda continua no caminho.',
        buttons: [
          { label: 'Continuar lutando', cls: 'primary' },
          {
            label: '🏳️ Fugir', cls: 'ghost', cb: function () {
              const cb = S && S.cfg.onEnd;
              B.stop();
              if (cb) cb({ win: false, fled: true });
            }
          }
        ]
      });
    };
  });
  window.addEventListener('resize', function () { if (S) sizeCanvas(); });
})(typeof window !== 'undefined' ? window : globalThis);
