/* ENGLISH FLOW — week/mech2.js
   Mecânicas novas de LISTENING e SPEAKING (o foco do método: ~80% do app).
   Registram-se em DF.MECH, então o motor de missões despacha por item.ui igual
   às mecânicas antigas. Todas degradam graciosamente: sem TTS mostra o texto,
   sem ASR cai na autoavaliação + envio de áudio pelo WhatsApp. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const M = DF.MECH;

  // ---------- vozes por personagem ----------
  // O TTS do navegador tem uma voz só por vez; alternamos entre as vozes en
  // disponíveis para que cada personagem soe diferente. Se só houver uma,
  // variamos o rate — ainda assim o aluno distingue quem fala.
  //
  // O pitch/voz NÃO pode depender de "quem fala primeiro" num diálogo — isso
  // fazia o mesmo personagem soar diferente em exercícios diferentes, e às
  // vezes soar com o gênero errado (achado 07/08/2026: Elena masculina e
  // Kenji feminino em plan-elementary-05, porque nesse diálogo Elena falava
  // primeiro e pegava o pitch "par"). Em vez disso, o gênero é decidido pelo
  // NOME do personagem, de forma estável em qualquer diálogo do app inteiro.
  const FEMALE_NAMES = ['aisha', 'amara', 'beatriz', 'camila', 'dora', 'elena',
    'grace', 'larissa', 'marta', 'nadia', 'priya', 'sara', 'sofia', 'yuki'];
  const MALE_NAMES = ['diego', 'elias', 'hendrik', 'joaquim', 'kenji', 'luca',
    'marco', 'mateus', 'noah', 'roberto', 'tom', 'tomás', 'william'];

  function genderFor(name) {
    const n = String(name || '').toLowerCase().trim();
    if (FEMALE_NAMES.indexOf(n) >= 0) return 'f';
    if (MALE_NAMES.indexOf(n) >= 0) return 'm';
    return null; // papel genérico (Host, Guide, Waiter...) — sem gênero fixo
  }

  // hash simples e estável, só pra escolher consistentemente entre as vozes
  // disponíveis e entre o pitch alternativo quando o nome não tem gênero
  // conhecido (papéis genéricos como "Host" ou "Guide").
  function hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h;
  }

  function voiceFor(name, fallbackIdx) {
    const en = DF.SP.enVoices();
    if (!en.length) return null;
    const key = String(name || '') + '|' + fallbackIdx;
    return en[hash(key) % en.length];
  }

  function pitchFor(name, fallbackIdx) {
    const g = genderFor(name);
    if (g === 'f') return 1.18;
    if (g === 'm') return 1;
    // sem nome conhecido: alterna de forma estável por nome, não por ordem
    return hash(String(name || '') + '|' + fallbackIdx) % 2 === 0 ? 1 : 1.18;
  }

  function sayAs(text, speakerName, speakerIdx, rate, onend) {
    if (!DF.SP.ttsAvailable()) { if (onend) onend(); return; }
    try {
      const u = new SpeechSynthesisUtterance(String(text));
      const v = voiceFor(speakerName, speakerIdx);
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'en-GB'; }
      u.rate = rate || (DF.state ? DF.state.settings.rate : 0.9);
      u.pitch = pitchFor(speakerName, speakerIdx);
      u.onend = function () { if (onend) onend(); };
      u.onerror = function () { if (onend) onend(); };
      speechSynthesis.speak(u);
    } catch (e) { if (onend) onend(); }
  }

  // ══════════════════════════════════════════════════════════
  // dialogue — ouvir uma conversa e responder sobre ela
  // item: { lines:[{who,en}], question, options, hideText, expl }
  // ══════════════════════════════════════════════════════════
  M.dialogue = function (item, box, done) {
    const h = DF.el('div', 'q-head');
    h.appendChild(DF.el('div', 'q-title', item.title || '🎧 Ouça a conversa'));
    if (item.sub) h.appendChild(DF.el('div', 'q-sub', item.sub));
    box.appendChild(h);

    const lines = item.lines || [];
    const dlg = DF.el('div', 'dlg');
    const rows = [];
    const hide = item.hideText !== false && DF.SP.ttsAvailable();
    lines.forEach(function (ln) {
      const r = DF.el('div', 'dlg-line' + (hide ? ' dlg-hidden' : ''));
      r.appendChild(DF.el('b', '', DF.esc(ln.who)));
      r.appendChild(DF.el('span', '', DF.esc(ln.en)));
      dlg.appendChild(r);
      rows.push(r);
    });
    box.appendChild(dlg);

    const speakers = [];
    lines.forEach(function (ln) { if (speakers.indexOf(ln.who) < 0) speakers.push(ln.who); });

    let playing = false;
    function play(rate) {
      if (playing || !DF.SP.ttsAvailable()) return;
      playing = true;
      DF.SP.stop();
      let i = 0;
      (function next() {
        rows.forEach(function (r) { r.classList.remove('dlg-playing'); });
        if (i >= lines.length) {
          playing = false;
          btnPlay.disabled = false; btnSlow.disabled = false;
          return;
        }
        const ln = lines[i];
        rows[i].classList.add('dlg-playing');
        const idx = speakers.indexOf(ln.who);
        i++;
        sayAs(ln.en, ln.who, idx, rate, function () { setTimeout(next, 420); });
      })();
    }

    const ctr = DF.el('div', 'row gap');
    const btnPlay = DF.el('button', 'btn primary', '▶️ Ouvir');
    const btnSlow = DF.el('button', 'btn ghost', '🐢 Devagar');
    const btnText = DF.el('button', 'btn ghost', '👁️ Ver texto');
    btnPlay.onclick = function () { btnPlay.disabled = true; btnSlow.disabled = true; play(null); };
    btnSlow.onclick = function () { btnPlay.disabled = true; btnSlow.disabled = true; play(0.6); };
    btnText.onclick = function () {
      const on = rows[0] && rows[0].classList.contains('dlg-hidden');
      rows.forEach(function (r) { r.classList.toggle('dlg-hidden', !on); });
      btnText.textContent = on ? '🙈 Esconder texto' : '👁️ Ver texto';
    };
    if (DF.SP.ttsAvailable()) { ctr.appendChild(btnPlay); ctr.appendChild(btnSlow); }
    if (hide) ctr.appendChild(btnText);
    box.appendChild(ctr);

    // pergunta de compreensão
    if (!item.question) {
      const nx = DF.el('button', 'btn primary wide', 'Continuar ▸');
      nx.onclick = function () { DF.SP.stop(); done({ q: 4, info: true }); };
      box.appendChild(nx);
      if (DF.SP.ttsAvailable()) setTimeout(function () { btnPlay.click(); }, 400);
      return;
    }

    box.appendChild(DF.el('div', 'q-main', DF.esc(item.question)));
    const grid = DF.el('div', 'opt-grid');
    let answered = false;
    (item.options || []).forEach(function (o) {
      const b = DF.el('button', 'btn opt', DF.esc(o.label));
      b.onclick = function () {
        if (answered) return;
        answered = true;
        DF.SP.stop(); playing = false;
        const ok = !!o.correct;
        DF.$$('.opt', grid).forEach(function (x) { x.disabled = true; });
        b.classList.add(ok ? 'right' : 'wrong');
        if (!ok) {
          DF.$$('.opt', grid).forEach(function (x, i) {
            if (item.options[i] && item.options[i].correct) x.classList.add('right');
          });
          rows.forEach(function (r) { r.classList.remove('dlg-hidden'); });
          DF.vibrate(80);
        }
        if (DF.AU) DF.AU.sfx(ok ? 'good' : 'bad');
        M.fb(box, ok, item, function () { done({ q: ok ? 4 : 0 }); });
      };
      grid.appendChild(b);
    });
    box.appendChild(grid);
    if (DF.SP.ttsAvailable()) setTimeout(function () { btnPlay.click(); }, 400);
  };

  // ══════════════════════════════════════════════════════════
  // repeat — shadowing: ouve o modelo, repete, o ASR confere
  // item: { target, ptHint, reps (padrão 2), waSec, unit }
  // É a mecânica central do método: produção falada com correção na hora.
  // ══════════════════════════════════════════════════════════
  M.repeat = function (item, box, done) {
    const need = item.reps || 2;
    const h = DF.el('div', 'q-head');
    h.appendChild(DF.el('div', 'q-title', item.title || '🎤 Ouça e repita'));
    box.appendChild(h);

    const model = DF.el('div', 'rp-model');
    model.appendChild(DF.el('div', 'rp-t', DF.esc(item.target)));
    if (item.ptHint) model.appendChild(DF.el('div', 'rp-pt', DF.esc(item.ptHint)));
    const dots = DF.el('div', 'rp-dots');
    for (let i = 0; i < need; i++) dots.appendChild(DF.el('i'));
    model.appendChild(dots);
    box.appendChild(model);

    const heard = DF.el('div', 'rp-heard');
    box.appendChild(heard);

    const ctr = DF.el('div', 'col gap');
    box.appendChild(ctr);

    const btnHear = DF.el('button', 'btn ghost wide', '🔊 Ouvir o modelo');
    btnHear.onclick = function () { DF.SP.speak(item.target, { rate: 0.85 }); };
    const btnSlow = DF.el('button', 'btn ghost wide', '🐢 Bem devagar');
    btnSlow.onclick = function () { DF.SP.speak(item.target, { rate: 0.55 }); };
    if (DF.SP.ttsAvailable()) { ctr.appendChild(btnHear); ctr.appendChild(btnSlow); }

    let hits = 0, tries = 0;
    function markDot() {
      const ds = DF.$$('i', dots);
      if (ds[hits - 1]) ds[hits - 1].classList.add('on');
    }

    if (DF.SP.asrAvailable()) {
      const mic = DF.el('button', 'btn primary wide', '🎤 Falar (' + need + 'x)');
      mic.onclick = async function () {
        mic.disabled = true;
        heard.textContent = '🎧 Ouvindo… fale agora.';
        const alts = await DF.SP.listenOnce({ lang: 'en-US' });
        mic.disabled = false;
        if (!alts) {
          heard.textContent = '⚠️ Não consegui ouvir (microfone ou conexão).';
          if (!valve.isConnected) ctr.appendChild(valve);
          return;
        }
        tries++;
        const ok = DF.SP.matchTarget(alts, item.target);
        if (ok) {
          hits++; markDot();
          if (DF.AU) DF.AU.sfx('great');
          if (hits >= need) {
            heard.innerHTML = '✅ ' + DF.esc(alts[0]);
            M.fb(box, true, item, function () { done({ q: 5 }); });
            return;
          }
          heard.innerHTML = '✅ Boa! Mais ' + (need - hits) + 'x.';
          mic.textContent = '🎤 Falar (' + (need - hits) + 'x restante' + (need - hits > 1 ? 's' : '') + ')';
        } else {
          if (DF.AU) DF.AU.sfx('bad');
          heard.innerHTML = 'Ouvi: <i>' + DF.esc(alts[0]) + '</i><br>❌ Ainda não — ouça o modelo e tente de novo.';
          if (!valve.isConnected) ctr.appendChild(valve);
          if (tries >= need + 3) {
            M.fb(box, false, Object.assign({}, item, { answers: [item.target] }),
              function () { done({ q: 2 }); });
          }
        }
      };
      ctr.appendChild(mic);
      const valve = escapeValve(function () { done({ q: 4, self: true }); });
      const skip = DF.el('button', 'btn ghost wide', 'Pular');
      skip.onclick = function () { DF.SP.stop(); done({ q: 2, skipped: true }); };
      ctr.appendChild(skip);
    } else {
      ctr.appendChild(DF.el('p', 'muted',
        '🎤 Este aparelho não reconhece voz. Repita em voz alta ' + need +
        'x acompanhando o modelo e registre com o professor.'));
      const okb = DF.el('button', 'btn primary wide', '✔ Repeti em voz alta');
      okb.onclick = function () { DF.SP.stop(); done({ q: 4, self: true }); };
      ctr.appendChild(okb);
    }

    ctr.appendChild(DF.WA.btn('📼 Enviar áudio ao professor',
      DF.WA.header(item.waSec || 'Speaking', item.unit || 1) +
      '\nAluno: ' + (DF.state.name || '—') +
      '\nFrase: ' + item.target + '\n🎙️ (áudio a caminho)'));

    if (DF.SP.ttsAvailable()) setTimeout(function () { DF.SP.speak(item.target, { rate: 0.85 }); }, 400);
  };

  // ══════════════════════════════════════════════════════════
  // build — produção livre falada a partir de um roteiro em PT
  // item: { prompt, mustUse:[], example, waSec, unit }
  // Não há gabarito: o aluno fala, o app confere se as palavras-chave
  // apareceram, e o áudio vai pro professor.
  // ══════════════════════════════════════════════════════════
  M.build = function (item, box, done) {
    const h = DF.el('div', 'q-head');
    h.appendChild(DF.el('div', 'q-title', item.title || '🗣️ Sua vez'));
    box.appendChild(h);

    const p = DF.el('div', 'rp-model');
    p.appendChild(DF.el('div', 'rp-t', DF.esc(item.prompt)));
    if (item.example) p.appendChild(DF.el('div', 'rp-pt', 'ex.: ' + DF.esc(item.example)));
    box.appendChild(p);

    const must = item.mustUse || [];
    if (must.length) {
      const tags = DF.el('div', 'row gap', '');
      tags.style.cssText = 'flex-wrap:wrap;margin-top:11px';
      must.forEach(function (w) {
        const t = DF.el('span', 'wk-chip', DF.esc(w));
        t.dataset.w = DF.norm(w);
        tags.appendChild(t);
      });
      box.appendChild(DF.el('div', 'muted', 'Use na sua frase:'));
      box.appendChild(tags);
    }

    const heard = DF.el('div', 'rp-heard');
    box.appendChild(heard);
    const ctr = DF.el('div', 'col gap');
    box.appendChild(ctr);

    if (DF.SP.asrAvailable()) {
      const mic = DF.el('button', 'btn primary wide', '🎤 Falar agora');
      mic.onclick = async function () {
        mic.disabled = true;
        heard.textContent = '🎧 Ouvindo… fale a frase inteira.';
        const alts = await DF.SP.listenOnce({ lang: 'en-US', timeout: 12000 });
        mic.disabled = false;
        if (!alts) {
          heard.textContent = '⚠️ Não consegui ouvir (microfone ou conexão).';
          if (!valve.isConnected) ctr.appendChild(valve);
          return;
        }
        const said = DF.norm(alts[0]);
        let hit = 0;
        DF.$$('[data-w]', box).forEach(function (t) {
          const on = said.indexOf(t.dataset.w) >= 0;
          t.style.opacity = on ? '1' : '.35';
          if (on) hit++;
        });
        heard.innerHTML = 'Você disse: <i>' + DF.esc(alts[0]) + '</i>';
        const ok = !must.length || hit >= Math.ceil(must.length * 0.6);
        if (DF.AU) DF.AU.sfx(ok ? 'great' : 'good');
        if (!ok && !valve.isConnected) ctr.appendChild(valve);
        M.fb(box, ok, Object.assign({}, item, {
          expl: ok ? (item.expl || 'Frase construída. Mande o áudio pro professor ouvir a pronúncia.')
                   : 'Faltou usar as palavras marcadas. Tente montar de novo.'
        }), function () { done({ q: ok ? 5 : 2 }); });
      };
      ctr.appendChild(mic);
      const valve = escapeValve(function () { done({ q: 4, self: true }); });
    } else {
      const okb = DF.el('button', 'btn primary wide', '✔ Falei em voz alta');
      okb.onclick = function () { done({ q: 4, self: true }); };
      ctr.appendChild(okb);
    }

    ctr.appendChild(DF.WA.btn('📼 Enviar meu áudio',
      DF.WA.header(item.waSec || 'Sua vez', item.unit || 1) +
      '\nAluno: ' + (DF.state.name || '—') +
      '\nTarefa: ' + item.prompt + '\n🎙️ (áudio a caminho)'));
  };

  // ══════════════════════════════════════════════════════════
  // drill — substitution drill: a frase repete, UM elemento troca
  //   item: { frame:'She works in ___.', slots:['an office','a factory',…],
  //           focus:'vocabulário', ptHint, unit, waSec }
  // O aluno ouve → fala → acerta → a próxima variação entra sozinha.
  // O foco do que troca muda por semana:
  //   Working with words ....... vocabulário
  //   Language at work ......... o ponto gramatical da unidade
  //   Practically speaking ..... expressões úteis
  // ══════════════════════════════════════════════════════════
  M.drill = function (item, box, done) {
    const slots = item.slots || [];
    const frame = item.frame || '___';
    const sentence = function (i) { return frame.replace('___', slots[i]); };

    const h = DF.el('div', 'q-head');
    h.appendChild(DF.el('div', 'q-title', item.title || '🔁 Drill'));
    h.appendChild(DF.el('div', 'q-sub',
      'A frase se repete — só o ' + (item.focus || 'destaque') + ' muda. Ouça, fale, siga.'));
    box.appendChild(h);

    const panel = DF.el('div', 'drill');
    const line = DF.el('div', 'drill-line');
    const hint = DF.el('div', 'drill-pt');
    panel.appendChild(line);
    panel.appendChild(hint);
    const dots = DF.el('div', 'rp-dots');
    slots.forEach(function () { dots.appendChild(DF.el('i')); });
    panel.appendChild(dots);
    box.appendChild(panel);

    const heard = DF.el('div', 'rp-heard');
    box.appendChild(heard);
    const ctr = DF.el('div', 'col gap');
    box.appendChild(ctr);

    let i = 0, hits = 0, missed = 0;

    function paint() {
      const parts = frame.split('___');
      line.innerHTML = DF.esc(parts[0]) +
        '<b>' + DF.esc(slots[i]) + '</b>' + DF.esc(parts[1] || '');
      hint.textContent = item.ptHint || '';
      DF.$$('i', dots).forEach(function (d, k) { d.classList.toggle('on', k < hits); });
      if (DF.SP.ttsAvailable()) setTimeout(function () { DF.SP.speak(sentence(i), { rate: 0.88 }); }, 260);
    }

    function advance(ok) {
      if (ok) hits++; else missed++;
      i++;
      if (i >= slots.length) { finish(); return; }
      heard.textContent = '';
      valve.remove();
      paint();
    }

    function finish() {
      DF.SP.stop();
      DF.$$('i', dots).forEach(function (d, k) { d.classList.toggle('on', k < hits); });
      const pct = slots.length ? hits / slots.length : 0;
      M.fb(box, pct >= 0.6, Object.assign({}, item, {
        expl: 'Você falou ' + hits + ' de ' + slots.length + ' variações. ' +
          (pct >= 0.6 ? 'O padrão já está entrando no automático.'
                      : 'Refaça — o ganho do drill vem da repetição seguida.')
      }), function () { done({ q: pct >= 0.8 ? 5 : (pct >= 0.6 ? 4 : 2) }); });
    }

    if (DF.SP.ttsAvailable()) {
      const hear = DF.el('button', 'btn ghost wide', '🔊 Ouvir de novo');
      hear.onclick = function () { DF.SP.speak(sentence(i), { rate: 0.88 }); };
      const slow = DF.el('button', 'btn ghost wide', '🐢 Devagar');
      slow.onclick = function () { DF.SP.speak(sentence(i), { rate: 0.55 }); };
      ctr.appendChild(hear); ctr.appendChild(slow);
    }

    const valve = escapeValve(function () { advance(true); });

    if (DF.SP.asrAvailable()) {
      const mic = DF.el('button', 'btn primary wide', '🎤 Falar');
      mic.onclick = async function () {
        mic.disabled = true;
        heard.textContent = '🎧 Ouvindo…';
        const alts = await DF.SP.listenOnce({ lang: 'en-US' });
        mic.disabled = false;
        if (!alts) {
          heard.textContent = '⚠️ Não consegui ouvir (microfone ou conexão).';
          if (!valve.isConnected) ctr.appendChild(valve);
          return;
        }
        if (DF.SP.matchTarget(alts, sentence(i))) {
          if (DF.AU) DF.AU.sfx('great');
          heard.innerHTML = '✅ ' + DF.esc(alts[0]);
          setTimeout(function () { advance(true); }, 550);
        } else {
          if (DF.AU) DF.AU.sfx('bad');
          heard.innerHTML = 'Ouvi: <i>' + DF.esc(alts[0]) + '</i><br>❌ Ouça de novo e repita.';
          if (!valve.isConnected) ctr.appendChild(valve);
        }
      };
      ctr.appendChild(mic);
    } else {
      const nx = DF.el('button', 'btn primary wide', '✔ Falei — próxima');
      nx.onclick = function () { advance(true); };
      ctr.appendChild(nx);
    }

    const skip = DF.el('button', 'btn ghost wide', 'Pular esta');
    skip.onclick = function () { advance(false); };
    ctr.appendChild(skip);

    ctr.appendChild(DF.WA.btn('📼 Enviar o drill em áudio',
      DF.WA.header(item.waSec || 'Drill', item.unit || 1) +
      '\nAluno: ' + (DF.state.name || '—') +
      '\nPadrão: ' + frame + '\n🎙️ (áudio a caminho)'));

    paint();
  };

  // ══════════════════════════════════════════════════════════
  // transform — transformation drill E contraction drill
  //   O professor dá a deixa, o aluno transforma. Muda só o COMANDO:
  //     { base:'I am Roberto.',   cmd:'Negative',    answer:"I am not Roberto." }
  //     { base:'I am Roberto.',   cmd:'Question',    answer:'Am I Roberto?' }
  //     { base:'You are Jorge.',  cmd:'Contraction', answer:"You're Jorge." }
  //   item: { rounds:[…], ptHint, unit, waSec }
  // ══════════════════════════════════════════════════════════
  const CMD_PT = {
    Negative: 'passe para a negativa',
    Question: 'passe para a pergunta',
    Contraction: 'contraia',
    Affirmative: 'passe para a afirmativa',
    'Short answer': 'responda de forma curta'
  };

  M.transform = function (item, box, done) {
    const rounds = item.rounds || [];
    const h = DF.el('div', 'q-head');
    h.appendChild(DF.el('div', 'q-title', item.title || '🔀 Drill de transformação'));
    h.appendChild(DF.el('div', 'q-sub',
      'Ouça a frase, ouça o comando, e fale a frase transformada.'));
    box.appendChild(h);

    const panel = DF.el('div', 'tf');
    const baseEl = DF.el('div', 'tf-base');
    const cmdEl = DF.el('div', 'tf-cmd');
    const cmdPt = DF.el('div', 'tf-cmd-pt');
    panel.appendChild(baseEl);
    panel.appendChild(DF.el('div', 'tf-arrow', '↓'));
    panel.appendChild(cmdEl);
    panel.appendChild(cmdPt);
    const dots = DF.el('div', 'rp-dots');
    rounds.forEach(function () { dots.appendChild(DF.el('i')); });
    panel.appendChild(dots);
    box.appendChild(panel);

    const heard = DF.el('div', 'rp-heard');
    box.appendChild(heard);
    const ctr = DF.el('div', 'col gap');
    box.appendChild(ctr);

    let i = 0, hits = 0;

    function paint() {
      const r = rounds[i];
      baseEl.textContent = r.base;
      cmdEl.textContent = r.cmd;
      cmdPt.textContent = CMD_PT[r.cmd] || '';
      DF.$$('i', dots).forEach(function (d, k) { d.classList.toggle('on', k < hits); });
      // o app "dá a deixa" igual o professor: fala a base, pausa, fala o comando
      if (DF.SP.ttsAvailable()) {
        setTimeout(function () {
          DF.SP.speakSeq([
            { t: r.base, rate: 0.85, pause: 500 },
            { t: r.cmd, rate: 0.8 }
          ]);
        }, 260);
      }
    }

    function advance(ok) {
      if (ok) hits++;
      i++;
      valve.remove();
      heard.textContent = '';
      if (i >= rounds.length) { finish(); return; }
      paint();
    }

    function finish() {
      DF.SP.stop();
      DF.$$('i', dots).forEach(function (d, k) { d.classList.toggle('on', k < hits); });
      const pct = rounds.length ? hits / rounds.length : 0;
      M.fb(box, pct >= 0.6, Object.assign({}, item, {
        expl: 'Você acertou ' + hits + ' de ' + rounds.length + ' transformações. ' +
          (pct >= 0.6 ? 'A transformação já sai sem você montar a regra na cabeça.'
                      : 'Refaça — este drill é o que automatiza a gramática.')
      }), function () { done({ q: pct >= 0.8 ? 5 : (pct >= 0.6 ? 4 : 2) }); });
    }

    if (DF.SP.ttsAvailable()) {
      const again = DF.el('button', 'btn ghost wide', '🔊 Ouvir a deixa de novo');
      again.onclick = function () {
        const r = rounds[i];
        DF.SP.speakSeq([{ t: r.base, rate: 0.85, pause: 500 }, { t: r.cmd, rate: 0.8 }]);
      };
      ctr.appendChild(again);
    }

    const valve = escapeValve(function () {
      heard.innerHTML = 'Resposta: <b>' + DF.esc(rounds[i].answer) + '</b>';
      advance(true);
    });

    function reveal() {
      const r = DF.el('button', 'btn ghost wide', '👁️ Ver a resposta');
      r.style.fontSize = '13px';
      r.onclick = function () {
        heard.innerHTML = 'Resposta: <b>' + DF.esc(rounds[i].answer) + '</b>';
        if (DF.SP.ttsAvailable()) DF.SP.speak(rounds[i].answer, { rate: 0.8 });
        r.remove();
      };
      return r;
    }

    if (DF.SP.asrAvailable()) {
      const mic = DF.el('button', 'btn primary wide', '🎤 Falar a transformação');
      mic.onclick = async function () {
        mic.disabled = true;
        heard.textContent = '🎧 Ouvindo…';
        const alts = await DF.SP.listenOnce({ lang: 'en-US' });
        mic.disabled = false;
        if (!alts) {
          heard.textContent = '⚠️ Não consegui ouvir (microfone ou conexão).';
          if (!valve.isConnected) ctr.appendChild(valve);
          return;
        }
        if (DF.SP.matchTarget(alts, rounds[i].answer)) {
          if (DF.AU) DF.AU.sfx('great');
          heard.innerHTML = '✅ ' + DF.esc(alts[0]);
          setTimeout(function () { advance(true); }, 550);
        } else {
          if (DF.AU) DF.AU.sfx('bad');
          heard.innerHTML = 'Ouvi: <i>' + DF.esc(alts[0]) + '</i><br>❌ Ainda não. Ouça a deixa de novo.';
          if (!valve.isConnected) { ctr.appendChild(reveal()); ctr.appendChild(valve); }
        }
      };
      ctr.appendChild(mic);
    } else {
      ctr.appendChild(reveal());
      const nx = DF.el('button', 'btn primary wide', '✔ Falei — próxima');
      nx.onclick = function () { advance(true); };
      ctr.appendChild(nx);
    }

    ctr.appendChild(DF.WA.btn('📼 Enviar o drill em áudio',
      DF.WA.header(item.waSec || 'Drill', item.unit || 1) +
      '\nAluno: ' + (DF.state.name || '—') +
      '\nDrill: ' + (item.title || 'transformação') + '\n🎙️ (áudio a caminho)'));

    paint();
  };

  // ══════════════════════════════════════════════════════════
  // backchain — drill de trás pra frente (back-chaining)
  //   item: { chain:['office','an office','in an office',
  //                  'works in an office','She works in an office.'], ptHint }
  // Começa pelo FIM da frase e vai crescendo. É o jeito clássico de montar
  // frase longa sem travar: o pedaço difícil já está automático quando o
  // aluno chega nele, e o ritmo/entonação do fim da frase se preserva.
  // ══════════════════════════════════════════════════════════
  M.backchain = function (item, box, done) {
    const chain = item.chain || [];
    const h = DF.el('div', 'q-head');
    h.appendChild(DF.el('div', 'q-title', item.title || '🧱 Construa de trás pra frente'));
    h.appendChild(DF.el('div', 'q-sub',
      'Comece pelo fim da frase. A cada acerto ela cresce um pedaço.'));
    box.appendChild(h);

    const stack = DF.el('div', 'bc');
    box.appendChild(stack);
    const heard = DF.el('div', 'rp-heard');
    box.appendChild(heard);
    const ctr = DF.el('div', 'col gap');
    box.appendChild(ctr);

    let i = 0, hits = 0;

    function paint() {
      stack.innerHTML = '';
      chain.forEach(function (t, k) {
        if (k > i) return;
        const r = DF.el('div', 'bc-row' + (k < i ? ' past' : ' now'));
        r.appendChild(DF.el('span', 'bc-n', k === chain.length - 1 ? '🏁' : String(k + 1)));
        r.appendChild(DF.el('span', 'bc-t', DF.esc(t)));
        stack.appendChild(r);
      });
      if (i === chain.length - 1 && item.ptHint) {
        stack.appendChild(DF.el('div', 'drill-pt', DF.esc(item.ptHint)));
      }
      if (DF.SP.ttsAvailable()) {
        setTimeout(function () { DF.SP.speak(chain[i], { rate: i < 2 ? 0.75 : 0.85 }); }, 260);
      }
      DF.$$('.bc-row.now .bc-t', stack).forEach(function (e) {
        e.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    function advance(ok) {
      if (ok) hits++;
      i++;
      valve.remove();
      heard.textContent = '';
      if (i >= chain.length) { finish(); return; }
      paint();
    }

    function finish() {
      DF.SP.stop();
      const pct = chain.length ? hits / chain.length : 0;
      M.fb(box, pct >= 0.6, Object.assign({}, item, {
        expl: 'Frase montada: "' + chain[chain.length - 1] + '". ' +
          (pct >= 0.6 ? 'Agora ela sai inteira, sem travar no meio.'
                      : 'Refaça — o pulo do gato é falar cada pedaço em voz alta.'),
        feedbackTts: chain[chain.length - 1]
      }), function () { done({ q: pct >= 0.8 ? 5 : (pct >= 0.6 ? 4 : 2) }); });
    }

    if (DF.SP.ttsAvailable()) {
      const hear = DF.el('button', 'btn ghost wide', '🔊 Ouvir este pedaço');
      hear.onclick = function () { DF.SP.speak(chain[i], { rate: 0.85 }); };
      const slow = DF.el('button', 'btn ghost wide', '🐢 Devagar');
      slow.onclick = function () { DF.SP.speak(chain[i], { rate: 0.55 }); };
      ctr.appendChild(hear); ctr.appendChild(slow);
    }

    const valve = escapeValve(function () { advance(true); });

    if (DF.SP.asrAvailable()) {
      const mic = DF.el('button', 'btn primary wide', '🎤 Falar este pedaço');
      mic.onclick = async function () {
        mic.disabled = true;
        heard.textContent = '🎧 Ouvindo…';
        const alts = await DF.SP.listenOnce({ lang: 'en-US' });
        mic.disabled = false;
        if (!alts) {
          heard.textContent = '⚠️ Não consegui ouvir (microfone ou conexão).';
          if (!valve.isConnected) ctr.appendChild(valve);
          return;
        }
        if (DF.SP.matchTarget(alts, chain[i])) {
          if (DF.AU) DF.AU.sfx('great');
          heard.innerHTML = '✅ ' + DF.esc(alts[0]);
          setTimeout(function () { advance(true); }, 500);
        } else {
          if (DF.AU) DF.AU.sfx('bad');
          heard.innerHTML = 'Ouvi: <i>' + DF.esc(alts[0]) + '</i><br>❌ Ouça e repita este pedaço.';
          if (!valve.isConnected) ctr.appendChild(valve);
        }
      };
      ctr.appendChild(mic);
    } else {
      const nx = DF.el('button', 'btn primary wide', '✔ Falei — próximo pedaço');
      nx.onclick = function () { advance(true); };
      ctr.appendChild(nx);
    }

    ctr.appendChild(DF.WA.btn('📼 Enviar a frase em áudio',
      DF.WA.header(item.waSec || 'Backchain', item.unit || 1) +
      '\nAluno: ' + (DF.state.name || '—') +
      '\nFrase: ' + chain[chain.length - 1] + '\n🎙️ (áudio a caminho)'));

    paint();
  };

  // ══════════════════════════════════════════════════════════
  // stress — sílaba tônica: ouve a palavra e escolhe o padrão
  // item: { word, pattern:'oOo', decoys:['Ooo','ooO'] }
  //   'O' = sílaba forte · 'o' = sílaba fraca
  // É a competência que faz o brasileiro ser entendido: errar a tônica
  // atrapalha mais do que errar o som da vogal.
  // ══════════════════════════════════════════════════════════
  function dots(pat) {
    return pat.split('').map(function (ch) {
      return ch === 'O'
        ? '<span style="font-size:19px;color:var(--ac2)">●</span>'
        : '<span style="font-size:11px;color:var(--tx2)">●</span>';
    }).join('<span style="display:inline-block;width:7px"></span>');
  }

  M.stress = function (item, box, done) {
    const h = DF.el('div', 'q-head');
    h.appendChild(DF.el('div', 'q-title', item.title || '🥁 Onde cai a força da palavra?'));
    box.appendChild(h);

    const model = DF.el('div', 'rp-model');
    model.appendChild(DF.el('div', 'rp-t', DF.esc(item.word)));
    model.appendChild(DF.el('div', 'rp-pt', 'Ouça e escolha o ritmo certo.'));
    box.appendChild(model);

    if (DF.SP.ttsAvailable()) {
      const row = DF.el('div', 'row gap');
      row.appendChild(DF.SP.listenBtn(item.word, { label: '🔊 Ouvir' }));
      const slow = DF.el('button', 'btn ghost', '🐢 Devagar');
      slow.onclick = function () { DF.SP.speak(item.word, { rate: 0.5 }); };
      row.appendChild(slow);
      box.appendChild(row);
      setTimeout(function () { DF.SP.speak(item.word, { rate: 0.8 }); }, 400);
    }

    const opts = DF.shuffle([{ p: item.pattern, correct: true }].concat(
      (item.decoys || []).map(function (d) { return { p: d }; })));
    const grid = DF.el('div', 'opt-grid');
    let answered = false;
    opts.forEach(function (o) {
      const b = DF.el('button', 'btn opt', dots(o.p));
      b.onclick = function () {
        if (answered) return;
        answered = true;
        DF.$$('.opt', grid).forEach(function (x) { x.disabled = true; });
        b.classList.add(o.correct ? 'right' : 'wrong');
        if (!o.correct) {
          DF.$$('.opt', grid).forEach(function (x, i) { if (opts[i].correct) x.classList.add('right'); });
          DF.vibrate(80);
        }
        if (DF.AU) DF.AU.sfx(o.correct ? 'good' : 'bad');
        M.fb(box, !!o.correct, Object.assign({}, item, {
          expl: (item.expl || '') + ' Ritmo: ' + item.syl,
          feedbackTts: item.word
        }), function () { done({ q: o.correct ? 4 : 0 }); });
      };
      grid.appendChild(b);
    });
    box.appendChild(grid);
  };

  // ── VÁLVULA DE ESCAPE ──
  // O reconhecimento de fala erra com sotaque brasileiro. Barrar o aluno por
  // causa disso seria justo o medo que o método promete curar: a tolerância é
  // sempre generosa e ele sempre pode seguir. Aparece só depois de tentar.
  function escapeValve(onConfirm) {
    const b = DF.el('button', 'btn ghost wide', '🙋 O sistema não te ouviu direito? Seguir assim');
    b.style.fontSize = '13px';
    b.onclick = function () { DF.SP.stop(); onConfirm(); };
    return b;
  }
  M.escapeValve = escapeValve;

  // feedback compartilhado (mesma casca visual das mecânicas antigas)
  M.fb = function (box, ok, item, onNext) {
    const fb = DF.el('div', 'q-feedback ' + (ok ? 'ok' : 'bad'));
    fb.appendChild(DF.el('div', 'fb-line', ok ? '✅ Correto!' : '❌ Não conforme (NC registrada)'));
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
  };
})(typeof window !== 'undefined' ? window : globalThis);
