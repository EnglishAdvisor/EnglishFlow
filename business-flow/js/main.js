/* BUSINESS FLOW — main.js
   Boot, navegação entre telas, splash, onboarding (com seleção de trilha
   Starter/Elementary), Códigos e Ajustes. */
(function (root) {
  const DF = root.DF = root.DF || {};

  // ---------------- navegação ----------------
  DF.go = function (id) {
    DF.SP.stop();
    DF.$$('.screen').forEach(function (s) { s.classList.remove('active'); });
    const scr = DF.$('#' + id);
    if (scr) scr.classList.add('active');
    document.body.dataset.screen = id;
    if (id === 's-map') DF.ASC.onScroll();
    window.scrollTo(0, 0);
  };

  // ---------------- splash ----------------
  function renderSplash() {
    const hasSave = !!DF.state.name && !!DF.state.trail;
    const btn = DF.$('#t-play');
    btn.innerHTML = hasSave ? '🏢 CONTINUAR A SUBIDA<span class="t-sub">' + DF.esc(DF.state.name) + ' · ' + DF.TRAILS[DF.state.trail].label + '</span>' : '🏢 INICIAR A SUBIDA';
    btn.onclick = function () {
      if (DF.AU) DF.AU.sfx('click');
      if (DF.state.name && DF.state.trail) goMap();
      else if (DF.state.name) DF.go('s-trail');
      else DF.go('s-name');
    };
    DF.$('#t-import').onclick = function () { importSaveModal(); };
    DF.$('#t-codes').onclick = function () { DF.state.name ? DF.renderCodes() : DF.go('s-name'); };
  }

  function goMap() {
    DF.go('s-map');
    DF.ASC.refresh();
    const focus = DF.ASC.focusUnit();
    if (focus != null) setTimeout(function () { DF.ASC.scrollToUnit(focus); }, 60);
  }
  DF.goMap = goMap;

  function bindName() {
    const inp = DF.$('#name-inp');
    const go = DF.$('#name-go');
    go.onclick = function () {
      const v = inp.value.trim();
      if (v.length < 2) { DF.toast('Digite seu nome como o mentor te conhece. 🙂'); return; }
      DF.state.name = v.slice(0, 24);
      DF.save();
      if (DF.AU) DF.AU.sfx('click');
      DF.go('s-trail');
    };
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go.onclick(); });
  }

  // ---------------- seleção de trilha (Starter × Elementary) ----------------
  function bindTrail() {
    const wrap = DF.$('#trail-grid');
    wrap.innerHTML = '';
    Object.keys(DF.TRAILS).forEach(function (id) {
      const t = DF.TRAILS[id];
      const card = DF.el('button', 'trail-card' + (DF.state.trail === id ? ' sel' : ''));
      card.style.setProperty('--tc', t.ac);
      card.innerHTML =
        '<span class="tc-icon" style="background:' + t.ac + '22;color:' + t.ac + '">' + t.icon + '</span>' +
        '<span class="tc-info"><span class="tc-name">' + t.label + '</span>' +
        '<span class="tc-desc">Nível ' + t.level + ' · ' + Object.keys(t.units).length + ' unidades</span></span>';
      card.onclick = function () {
        DF.setTrail(id);
        DF.ASC.build();
        if (DF.AU) DF.AU.sfx('unlock');
        DF.modal({
          title: t.icon + ' Bem-vindo(a) à ' + t.label + ', ' + DF.esc(DF.state.name) + '!',
          html: 'Você vai subir a torre andar por andar — cada andar é uma unidade do livro.<br><br>' +
            'Os andares acendem quando seu mentor envia o <b>código de desbloqueio (UNL…)</b> pelo WhatsApp — cole em <b>🔑 Códigos</b>.',
          buttons: [{ label: 'Ver o mapa da torre', cls: 'primary', cb: goMap }]
        });
      };
      wrap.appendChild(card);
    });
  }

  // ---------------- tela Códigos ----------------
  DF.renderCodes = renderCodes;
  function renderCodes() {
    const c = DF.$('#s-codes .content');
    c.innerHTML = '';
    c.appendChild(DF.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="DF.go(\'s-map\')">← Mapa</button><h2>🔑 Códigos</h2>'));

    const p = DF.el('div', 'panel');
    p.appendChild(DF.el('p', 'muted', 'Cole aqui o código recebido do mentor pelo WhatsApp: <b>UNL…</b> (desbloqueio), <b>TST…</b> (teste/exame) ou <b>SAV…</b> (restaurar save).'));
    const ta = DF.el('textarea', 'inp'); ta.rows = 4; ta.placeholder = 'UNL.C.xxxxx…';
    p.appendChild(ta);
    const btn = DF.el('button', 'btn primary wide', '📬 Aplicar código');
    const out = DF.el('div', '');
    btn.onclick = async function () {
      out.innerHTML = '';
      btn.disabled = true; btn.textContent = 'Verificando…';
      try {
        const r = await DF.CODES.applyCode(ta.value);
        btn.disabled = false; btn.textContent = '📬 Aplicar código';
        if (r.type === 'unl') {
          if (DF.AU) DF.AU.sfx('unlock');
          const names = r.units.map(function (u) { return 'Unit ' + u + ' — ' + (DF.UNITS[u] ? DF.UNITS[u].name : ''); }).join('<br>');
          DF.modal({
            title: '🔓 Andar desbloqueado!',
            html: (r.news.length ? 'Novos andares acesos na torre:' : 'Andares já estavam acesos:') + '<br><br><b>' + names + '</b><br><br>— liberado por ' + DF.esc(r.mn),
            buttons: [{
              label: '🏢 Subir até lá', cls: 'primary', cb: function () {
                goMap();
                if (r.units.length) setTimeout(function () { DF.ASC.scrollToUnit(r.units[0]); }, 80);
              }
            }]
          });
          DF.ASC.refresh();
          ta.value = '';
        } else if (r.type === 'tst' || r.type === 'blk' || r.type === 'fin') {
          if (DF.AU) DF.AU.sfx('code');
          const t = r.test;
          const sc = DF.EXAM.scenarioFor(t);
          const kindName = t.t === 'blk' ? '🚨 AVALIAÇÃO DE VIEWPOINT' : t.t === 'fin' ? '🏆 FINAL TEST' : '📋 Teste de competência';
          DF.modal({
            title: kindName,
            html: (sc ? '<b>' + sc.title + '</b><br><br>' : '') +
              'Unit' + (t.us.length > 1 ? 's' : '') + ' ' + t.us.join(', ') + ' · ' + t.n + ' questões · nível ' +
              ['', 'básico', 'intermediário', 'avançado'][t.diff] + '<br>Emitido por: ' + DF.esc(t.mn) +
              (t.msg ? '<br><br>💬 “' + DF.esc(t.msg) + '”' : ''),
            buttons: [
              { label: 'Depois', cls: 'ghost' },
              { label: '▶️ Executar agora', cls: 'primary', cb: function () { DF.EXAM.start(t); } }
            ]
          });
          ta.value = '';
        } else if (r.type === 'sav') {
          if (DF.AU) DF.AU.sfx('unlock');
          DF.toast('💾 Save restaurado com sucesso!');
          setTimeout(function () { location.reload(); }, 900);
        }
      } catch (e) {
        btn.disabled = false; btn.textContent = '📬 Aplicar código';
        if (DF.AU) DF.AU.sfx('bad');
        out.appendChild(DF.el('p', 'warn', DF.CODES.errMsg(e)));
      }
    };
    p.appendChild(btn);
    p.appendChild(out);
    c.appendChild(p);

    const ps = DF.el('div', 'panel');
    ps.appendChild(DF.el('h3', '', '💾 Backup do progresso'));
    ps.appendChild(DF.el('p', 'muted', 'Gere um código de save para trocar de aparelho ou garantir backup. Guarde-o no seu WhatsApp.'));
    const bs = DF.el('button', 'btn ghost wide', '📤 Gerar código de save (SAV…)');
    bs.onclick = async function () {
      const code = await DF.exportSave();
      DF.modal({
        title: '💾 Seu código de save',
        html: DF.codeBox(code, {
          wa: '🏢 BUSINESS FLOW · backup de progresso de ' + (DF.state.name || '—') + ' (' + DF.fmtDate() + '):\n\n' + code,
          waTo: DF.WHATSAPP, rows: 7
        }),
        buttons: [{ label: 'Fechar', cls: 'ghost' }]
      });
      if (DF.AU) DF.AU.sfx('code');
    };
    ps.appendChild(bs);
    c.appendChild(ps);
    DF.go('s-codes');
  }

  function importSaveModal() {
    const wrap = DF.el('div');
    wrap.appendChild(DF.el('p', 'muted', 'Cole o código SAV… gerado no outro aparelho:'));
    const ta = DF.el('textarea', 'inp'); ta.rows = 5; ta.placeholder = 'SAV.C.xxxxx…';
    wrap.appendChild(ta);
    const st = DF.el('p', 'warn', '');
    wrap.appendChild(st);
    DF.modal({
      title: '📥 Restaurar progresso',
      html: wrap,
      buttons: [
        { label: 'Cancelar', cls: 'ghost' },
        {
          label: 'Restaurar', cls: 'primary', keep: true, cb: async function () {
            try {
              await DF.importSave(ta.value);
              DF.toast('💾 Save restaurado!');
              setTimeout(function () { location.reload(); }, 700);
            } catch (e) {
              st.textContent = DF.CODES.errMsg(e);
            }
          }
        }
      ]
    });
  }

  // ---------------- Ajustes ----------------
  function renderSettings() {
    const c = DF.$('#s-settings .content');
    c.innerHTML = '';
    c.appendChild(DF.el('div', 'screen-head',
      '<button class="btn ghost small" onclick="DF.go(\'s-map\')">← Mapa</button><h2>⚙️ Ajustes</h2>'));

    const p = DF.el('div', 'panel');
    p.appendChild(DF.el('label', 'lbl', 'Seu nome (como o mentor te conhece)'));
    const inName = DF.el('input', 'inp');
    inName.value = DF.state.name || '';
    inName.maxLength = 24;
    inName.onchange = function () {
      DF.state.name = inName.value.trim().slice(0, 24);
      DF.save();
      DF.toast('Nome atualizado.');
    };
    p.appendChild(inName);

    p.appendChild(DF.el('label', 'lbl', '🏢 Sua trilha'));
    const trailRow = DF.el('div', 'row gap');
    Object.keys(DF.TRAILS).forEach(function (id) {
      const t = DF.TRAILS[id];
      const b = DF.el('button', 'btn' + (DF.state.trail === id ? ' primary' : ' ghost') + ' small', t.icon + ' ' + t.label);
      b.onclick = function () {
        DF.modal({
          title: 'Trocar para ' + t.label + '?',
          html: 'O progresso de cada trilha fica guardado separadamente — você não perde nada ao trocar, e pode voltar depois.',
          buttons: [
            { label: 'Cancelar', cls: 'ghost' },
            { label: 'Trocar', cls: 'primary', cb: function () { DF.setTrail(id); location.reload(); } }
          ]
        });
      };
      trailRow.appendChild(b);
    });
    p.appendChild(trailRow);

    p.appendChild(DF.el('label', 'lbl', '🔊 Voz do inglês (TTS)'));
    if (DF.SP.ttsAvailable()) {
      const sel = DF.el('select', 'inp');
      sel.appendChild(new Option('Automática (recomendado)', ''));
      DF.SP.enVoices().forEach(function (v) {
        sel.appendChild(new Option(v.name + ' (' + v.lang + ')', v.voiceURI));
      });
      sel.value = DF.state.settings.voiceURI || '';
      sel.onchange = function () {
        DF.state.settings.voiceURI = sel.value;
        DF.save();
        DF.SP.speak('Welcome to Business Flow.');
      };
      p.appendChild(sel);

      p.appendChild(DF.el('label', 'lbl', '🐢 Velocidade da fala: <span id="rate-lbl">' +
        Math.round(DF.state.settings.rate * 100) + '%</span>'));
      const rate = DF.el('input', 'inp');
      rate.type = 'range'; rate.min = '60'; rate.max = '110'; rate.step = '5';
      rate.value = Math.round(DF.state.settings.rate * 100);
      rate.oninput = function () {
        DF.state.settings.rate = rate.value / 100;
        DF.$('#rate-lbl').textContent = rate.value + '%';
        DF.save();
      };
      rate.onchange = function () { DF.SP.speak('This is the speaking speed.'); };
      p.appendChild(rate);
    } else {
      p.appendChild(DF.el('p', 'warn', '🔇 Este aparelho/navegador não oferece voz sintetizada. Os áudios aparecem por escrito.'));
    }

    p.appendChild(DF.el('label', 'lbl', '🎤 Reconhecimento de voz'));
    p.appendChild(DF.el('p', 'muted', DF.SP.asrAvailable()
      ? 'Disponível neste navegador. Os desafios falados avaliam sua pronúncia.'
      : 'Indisponível neste navegador — os desafios falados usam a alternativa por WhatsApp.'));

    const sfxRow = DF.el('label', 'lbl', '🔔 Efeitos sonoros');
    p.appendChild(sfxRow);
    const sfxBtn = DF.el('button', 'btn ghost', DF.state.settings.sfx ? '🔊 Ligados' : '🔇 Desligados');
    sfxBtn.onclick = function () {
      DF.state.settings.sfx = !DF.state.settings.sfx;
      DF.save();
      sfxBtn.textContent = DF.state.settings.sfx ? '🔊 Ligados' : '🔇 Desligados';
      if (DF.AU) DF.AU.sfx('click');
    };
    p.appendChild(sfxBtn);
    c.appendChild(p);

    const pd = DF.el('div', 'panel');
    pd.appendChild(DF.el('h3', '', '⚠️ Zona de risco'));
    const reset = DF.el('button', 'btn danger wide', '🗑️ Apagar todo o progresso');
    reset.onclick = function () {
      DF.modal({
        title: 'Apagar tudo?',
        html: 'Todo o progresso deste aparelho será perdido (as duas trilhas).<br>Gere um <b>código de save</b> antes, por segurança.',
        buttons: [
          { label: 'Cancelar', cls: 'ghost' },
          { label: 'Apagar', cls: 'danger', cb: function () { DF.reset(); location.reload(); } }
        ]
      });
    };
    pd.appendChild(reset);
    c.appendChild(pd);

    c.appendChild(DF.el('p', 'muted center foot-note',
      'BUSINESS FLOW · EnglishFlow<br>v' + DF.VERSION + ' · 100% offline · mentor via WhatsApp'));
    DF.go('s-settings');
  }

  // ---------------- HUD global ----------------
  function bindHud() {
    DF.$('#hud-databook').onclick = function () { DF.DB.render(); };
    DF.$('#hud-glossary').onclick = function () { DF.GLOS.render(); };
    DF.$('#hud-codes').onclick = function () { renderCodes(); };
    DF.$('#hud-settings').onclick = function () { renderSettings(); };
    DF.$('#hud-nc').onclick = function () { DF.MIS.startReview(); };
    const map = DF.$('#s-map');
    map.addEventListener('scroll', DF.ASC.onScroll, { passive: true });
  }

  // ---------------- boot ----------------
  function boot() {
    DF.load();
    if (DF.state.trail) DF.setTrail(DF.state.trail);
    else DF.setTrail('starter'); // default até o aluno escolher explicitamente na tela s-trail
    renderSplash();
    bindName();
    bindTrail();
    bindHud();
    DF.ASC.build();
    DF.go('s-splash');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
