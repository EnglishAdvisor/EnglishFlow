/* DEEP FLOW — missions.js
   Tela da estação (unidade), corredor de missões, execução de missão,
   Manutenção de NCs e relatório REL da unidade. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const MI = DF.MIS = {};

  // ---------------- helpers de dados ----------------
  MI.missionDef = function (u, idx) {
    const meta = DF.UNITS[u];
    const sec = meta.secs[idx];
    const data = DF.UNIT_DATA[u] || {};
    const def = (data.missions || {})[sec.key];
    return { meta: meta, sec: sec, def: def, data: data };
  };

  function resolveItems(u, def, sec) {
    const rnd = Math.random;
    let items = [];
    if (def && def.checklist) {
      const stmts = (DF.UNIT_DATA[u] && DF.UNIT_DATA[u].checklist) || [];
      items = stmts.map(function (s, i) {
        return {
          ui: 'selfcheck', cat: 'rea', info: true, unit: u, idx: i,
          title: '☑️ Autoavaliação ' + (i + 1) + ' / ' + stmts.length + ' — você já consegue?',
          statement: s
        };
      });
    }
    else if (def && typeof def.build === 'function') items = def.build(rnd, 1) || [];
    else if (def && Array.isArray(def.items)) items = def.items.slice();
    if (!items.length) {
      // placeholder: conteúdo em produção, mas testável
      const data = DF.UNIT_DATA[u] || {};
      const pool = (data.glossary || []).concat(data.extraVocab || []);
      items.push({
        ui: 'read', cat: 'rea', info: true,
        title: '🚧 ' + sec.name,
        text: 'Esta missão está em produção e chega numa próxima fase do DEEP FLOW.\n\nEnquanto isso, revise o vocabulário da estação abaixo.',
        readAloud: false, nextLabel: 'Continuar ▸'
      });
      DF.pickN(pool, Math.min(3, pool.length), rnd).forEach(function (v) {
        items.push(DF.MECH.GEN.venpt(v, pool, rnd, u));
      });
    }
    return items;
  }

  // ---------------- tela da unidade ----------------
  MI.renderUnit = function (u) {
    const meta = DF.UNITS[u];
    const scr = DF.$('#s-unit .content');
    scr.innerHTML = '';
    document.body.style.setProperty('--ua', meta.ac);
    document.body.style.setProperty('--ua2', meta.ac2);

    const head = DF.el('div', 'unit-head');
    head.appendChild(DF.el('button', 'btn ghost small back-btn', '← Mapa'));
    DF.$('.back-btn', head).onclick = function () { DF.go('s-map'); };
    head.appendChild(DF.el('div', 'unit-title',
      '<span class="u-chip" style="background:' + meta.ac + '22;color:' + meta.ac + ';border-color:' + meta.ac + '55">UNIT ' + u + ' · ' + meta.depth + ' m</span>' +
      '<h2>' + DF.esc(meta.name) + '</h2><div class="u-sub">' + DF.esc(meta.pt) + '</div>'));
    scr.appendChild(head);

    const prog = DF.unitDone(u);
    const bar = DF.el('div', 'unit-prog');
    bar.innerHTML = '<div class="xpbar"><div style="width:' + prog.pct + '%"></div></div>' +
      '<div class="unit-prog-lbl">' + prog.done + ' de ' + prog.total + ' missões concluídas</div>';
    scr.appendChild(bar);

    const list = DF.el('div', 'mission-list');
    meta.secs.forEach(function (sec, i) {
      const mp = DF.missionProg(u, i);
      const row = DF.el('button', 'mission-row' + (mp && mp.sc >= 60 ? ' done' : ''));
      const st = mp ? (mp.sc >= 100 ? '⭐' : mp.sc >= 60 ? '✔' : mp.sc + '%') : '';
      row.innerHTML =
        '<span class="m-num">' + (i + 1) + '</span>' +
        '<span class="m-icon">' + sec.icon + '</span>' +
        '<span class="m-name">' + DF.esc(sec.name) + '<small>' + DF.esc(sec.tag || '') + '</small></span>' +
        '<span class="m-state">' + st + '</span>';
      row.onclick = function () { MI.startMission(u, i); };
      list.appendChild(row);
    });
    scr.appendChild(list);

    // relatório da unidade
    const relBox = DF.el('div', 'panel rel-box');
    if (prog.done >= prog.total && prog.total > 0) {
      relBox.appendChild(DF.el('p', '', '🏁 <b>Estação concluída!</b> Gere seu relatório assinado e envie ao mentor:'));
      const b = DF.el('button', 'btn primary wide', '📜 Gerar relatório da unidade (REL)');
      b.onclick = function () { MI.unitReport(u); };
      relBox.appendChild(b);
    } else {
      relBox.appendChild(DF.el('p', 'muted', '📜 Conclua todas as missões para gerar o relatório da estação (REL) e enviá-lo ao mentor.'));
    }
    scr.appendChild(relBox);
    DF.go('s-unit');
  };

  // ---------------- execução de missão ----------------
  let RUN = null;

  MI.startMission = function (u, idx) {
    const md = MI.missionDef(u, idx);
    const items = resolveItems(u, md.def, md.sec);
    RUN = {
      u: u, idx: idx, sec: md.sec, def: md.def || {},
      items: items, at: -1, hits: 0, near: 0, total: 0, grid: ''
    };
    const scr = DF.$('#s-mission .content');
    scr.innerHTML = '';
    const head = missionHeader(md);
    scr.appendChild(head);

    const intro = DF.el('div', 'panel mission-intro');
    intro.appendChild(DF.el('div', 'mi-icon', md.sec.icon));
    intro.appendChild(DF.el('h3', '', DF.esc(md.sec.name)));
    if (md.def && md.def.brief) intro.appendChild(DF.el('p', 'mi-brief', md.def.brief));
    const scored = items.filter(function (x) { return !x.info && x.ui !== 'cards' && x.ui !== 'read'; }).length;
    intro.appendChild(DF.el('p', 'muted', scored
      ? scored + ' exercícios · erros viram NCs e voltam na Manutenção'
      : 'Missão de leitura/estudo'));
    const start = DF.el('button', 'btn primary wide', '▶️ Iniciar missão');
    start.onclick = function () { nextItem(); };
    intro.appendChild(start);
    scr.appendChild(intro);
    DF.go('s-mission');
  };

  function missionHeader(md) {
    const head = DF.el('div', 'mission-head');
    const back = DF.el('button', 'btn ghost small', '✖');
    back.onclick = function () {
      DF.SP.stop();
      DF.modal({
        title: 'Abandonar a missão?',
        html: 'O progresso desta tentativa será perdido.',
        buttons: [
          { label: 'Continuar aqui', cls: 'ghost' },
          { label: 'Sair', cls: 'danger', cb: function () { MI.renderUnit(md.meta.n); } }
        ]
      });
    };
    head.appendChild(back);
    head.appendChild(DF.el('div', 'mh-title',
      DF.esc(md.sec.name) + '<small>Unit ' + md.meta.n + ' — ' + DF.esc(md.meta.name) + '</small>'));
    head.appendChild(DF.el('div', 'mh-progress', ''));
    return head;
  }

  function nextItem() {
    const r = RUN;
    r.at++;
    DF.SP.stop();
    if (r.at >= r.items.length) { finishMission(); return; }
    const scr = DF.$('#s-mission .content');
    const old = DF.$('.q-box', scr);
    if (old) old.remove();
    const oldIntro = DF.$('.mission-intro', scr);
    if (oldIntro) oldIntro.remove();

    const mh = DF.$('.mh-progress', scr);
    if (mh) {
      mh.innerHTML = '';
      r.items.forEach(function (it, i) {
        mh.appendChild(DF.el('span', 'dot' + (i < r.at ? ' past' : i === r.at ? ' now' : '')));
      });
    }

    const box = DF.el('div', 'q-box panel');
    scr.appendChild(box);
    const item = r.items[r.at];
    DF.MECH.render(item, box, function (res) {
      const q = res.q;
      const scoredItem = !item.info && !res.info && item.ui !== 'cards' && item.ui !== 'read';
      if (scoredItem) {
        r.total++;
        if (q >= 4) { r.hits++; r.grid += '2'; }
        else if (q >= 2) { r.near++; r.grid += '1'; }
        else r.grid += '0';
        if (item.srsId) {
          DF.SRS.record(item.srsId, item.cat || '?', q,
            item.sp || { g: 'fixed', item: stripItem(item) });
        }
      }
      nextItem();
    });
  }

  function stripItem(item) {
    const c = {};
    ['ui', 'cat', 'srsId', 'title', 'main', 'sub', 'tts', 'ttsLabel', 'showIfNoTTS',
      'options', 'answers', 'expl', 'feedbackTts', 'pairs', 'answer', 'placeholder'].forEach(function (k) {
        if (item[k] !== undefined) c[k] = item[k];
      });
    return c;
  }

  function finishMission() {
    const r = RUN;
    DF.SRS.tick();
    const pct = r.total ? Math.round(100 * (r.hits + 0.6 * r.near) / r.total) : 100;
    DF.setMissionProg(r.u, r.idx, pct);

    const scr = DF.$('#s-mission .content');
    const old = DF.$('.q-box', scr);
    if (old) old.remove();

    const res = DF.el('div', 'panel mission-result');
    res.appendChild(DF.el('div', 'mr-icon', pct >= 100 ? '⭐' : pct >= 60 ? '✅' : '🛠️'));
    res.appendChild(DF.el('h3', '', pct >= 60 ? 'Missão concluída!' : 'Missão registrada'));
    if (r.total) {
      res.appendChild(DF.el('div', 'mr-score', pct + '%'));
      res.appendChild(DF.el('div', 'grid-line', r.grid.split('').map(function (c) {
        return c === '2' ? '🟩' : c === '1' ? '🟨' : '🟥';
      }).join('')));
      const ncs = r.grid.split('').filter(function (c) { return c === '0'; }).length;
      if (ncs) res.appendChild(DF.el('p', 'muted', '🛠️ ' + ncs + ' NC(s) registradas — elas voltam na Manutenção até o domínio.'));
      if (pct < 60) res.appendChild(DF.el('p', 'muted', 'Refaça a missão para concluí-la (mínimo 60%).'));
    }

    // tarefa final (WhatsApp) da missão
    const task = r.def.task;
    if (task) {
      const tb = DF.el('div', 'task-box');
      tb.appendChild(DF.el('div', 'task-title', task.title || '🎯 Tarefa com o mentor'));
      if (task.brief) tb.appendChild(DF.el('p', 'task-brief', task.brief));
      if (task.type === 'writing' || task.type === 'project') {
        const b = DF.el('button', 'btn wa wide', task.btn || '✍️ Preencher e enviar no WhatsApp');
        b.onclick = function () {
          DF.WA.writingModal({
            title: task.title, brief: task.modalBrief || task.brief,
            secName: r.sec.name, unit: r.u, fields: task.fields || []
          });
        };
        tb.appendChild(b);
      } else { // audio
        tb.appendChild(DF.WA.btn(task.btn || '🎙️ Enviar áudio no WhatsApp',
          DF.WA.header(r.sec.name, r.u) + '\nAluno: ' + (DF.state.name || '—') +
          (task.waText ? '\n' + task.waText : '\n🎙️ (áudio a caminho)')));
        tb.appendChild(DF.el('p', 'wa-note', 'Grave seu áudio no WhatsApp logo após abrir a conversa.'));
      }
      res.appendChild(tb);
    }

    // script de listening (consulta pós-missão)
    if (r.def.script) {
      const sb = DF.el('details', 'script-box');
      sb.innerHTML = '<summary>📄 Ver o script do áudio</summary>';
      sb.appendChild(DF.el('pre', 'script-text', DF.esc(r.def.script)));
      res.appendChild(sb);
    }

    const done = DF.el('button', 'btn primary wide', 'Voltar à estação ▸');
    done.onclick = function () {
      if (DF.AU) DF.AU.sfx(pct >= 60 ? 'unlock' : 'click');
      MI.renderUnit(r.u);
    };
    res.appendChild(done);
    scr.appendChild(res);
    if (DF.AU) DF.AU.sfx(pct >= 60 ? 'great' : 'good');
  }

  // ---------------- Manutenção de NCs (SRS) ----------------
  MI.startReview = function () {
    const due = DF.SRS.due(10);
    const items = [];
    due.forEach(function (id) {
      const it = DF.SRS.get(id);
      const q = DF.MECH.fromSpec(it && it.sp);
      if (q) { q.srsId = id; items.push(q); }
    });
    if (!items.length) {
      DF.modal({
        title: '🛠️ Manutenção',
        html: 'Nenhuma NC pendente. Tudo conforme! ✅<br><br>Erre menos, desça mais. 🌊',
        buttons: [{ label: 'Fechar', cls: 'primary' }]
      });
      return;
    }
    RUN = {
      u: 0, idx: -1, sec: { name: 'Manutenção de NCs', icon: '🛠️' },
      def: { brief: 'Suas não conformidades voltaram para inspeção. Feche-as com acerto para liberar a descida.' },
      items: items, at: -1, hits: 0, near: 0, total: 0, grid: '', review: true
    };
    const scr = DF.$('#s-mission .content');
    scr.innerHTML = '';
    const head = DF.el('div', 'mission-head');
    const back = DF.el('button', 'btn ghost small', '✖');
    back.onclick = function () { DF.SP.stop(); DF.go('s-map'); };
    head.appendChild(back);
    head.appendChild(DF.el('div', 'mh-title', '🛠️ Manutenção de NCs<small>' + items.length + ' pendências</small>'));
    head.appendChild(DF.el('div', 'mh-progress', ''));
    scr.appendChild(head);

    const intro = DF.el('div', 'panel mission-intro');
    intro.appendChild(DF.el('div', 'mi-icon', '🛠️'));
    intro.appendChild(DF.el('h3', '', 'Manutenção de NCs'));
    intro.appendChild(DF.el('p', 'mi-brief', RUN.def.brief));
    const start = DF.el('button', 'btn primary wide', '▶️ Iniciar manutenção');
    start.onclick = function () { nextReviewItem(); };
    intro.appendChild(start);
    scr.appendChild(intro);
    DF.go('s-mission');
  };

  function nextReviewItem() {
    const r = RUN;
    r.at++;
    DF.SP.stop();
    const scr = DF.$('#s-mission .content');
    const old = DF.$('.q-box', scr); if (old) old.remove();
    const oldIntro = DF.$('.mission-intro', scr); if (oldIntro) oldIntro.remove();
    if (r.at >= r.items.length) {
      DF.SRS.tick();
      const res = DF.el('div', 'panel mission-result');
      const pct = r.total ? Math.round(100 * (r.hits + 0.6 * r.near) / r.total) : 100;
      res.appendChild(DF.el('div', 'mr-icon', '🛠️'));
      res.appendChild(DF.el('h3', '', 'Manutenção encerrada'));
      res.appendChild(DF.el('div', 'mr-score', pct + '%'));
      res.appendChild(DF.el('p', 'muted', DF.SRS.ncs().length + ' NC(s) ainda em aberto.'));
      const done = DF.el('button', 'btn primary wide', 'Voltar ao mapa ▸');
      done.onclick = function () { DF.go('s-map'); DF.DES.refresh(); };
      res.appendChild(done);
      scr.appendChild(res);
      return;
    }
    const mh = DF.$('.mh-progress', scr);
    if (mh) {
      mh.innerHTML = '';
      r.items.forEach(function (it, i) {
        mh.appendChild(DF.el('span', 'dot' + (i < r.at ? ' past' : i === r.at ? ' now' : '')));
      });
    }
    const box = DF.el('div', 'q-box panel');
    scr.appendChild(box);
    const item = r.items[r.at];
    DF.MECH.render(item, box, function (res2) {
      const q = res2.q;
      r.total++;
      if (q >= 4) { r.hits++; r.grid += '2'; }
      else if (q >= 2) { r.near++; r.grid += '1'; }
      else r.grid += '0';
      if (item.srsId) {
        const cur = DF.SRS.get(item.srsId);
        DF.SRS.record(item.srsId, (cur && cur.k) || item.cat || '?', q);
      }
      nextReviewItem();
    });
  }

  // ---------------- relatório da unidade ----------------
  function unitCatStats(u) {
    const out = {};
    const s = DF.state.srs;
    Object.keys(s.items).forEach(function (id) {
      if (id.indexOf('u' + u + ':') !== 0) return;
      const it = s.items[id];
      if (!it.seen) return;
      out[it.k] = out[it.k] || [0, 0];
      out[it.k][0] += it.ok;
      out[it.k][1] += it.seen;
    });
    return out;
  }

  MI.unitReport = async function (u) {
    const prog = DF.unitDone(u);
    const cats = unitCatStats(u);
    let ok = 0, tot = 0;
    Object.keys(cats).forEach(function (k) { ok += cats[k][0]; tot += cats[k][1]; });
    const ac = tot ? Math.round(100 * ok / tot) : prog.avg;
    const sc = Math.round(600 * (prog.avg / 100) + 400 * (ac / 100));
    const code = await DF.CODES.makeReport({
      k: 'unit', st: DF.state.name, us: [u], sc: sc, ac: ac,
      n: prog.total, g: '', cats: cats, tid: 'unit' + u
    });
    const meta = DF.UNITS[u];
    const wa = '🌊 DEEP FLOW · Relatório da Unit ' + u + ' — ' + meta.name +
      '\nAluno: ' + (DF.state.name || '—') + ' · ' + prog.avg + '% média das missões' +
      '\nCódigo assinado:\n\n' + code;
    const d = DF.el('div');
    d.appendChild(DF.el('p', 'muted', 'Envie este código ao mentor. Ele valida a assinatura e vê seu domínio por competência.'));
    d.appendChild(DF.codeBox(code, { wa: wa, waTo: DF.WHATSAPP, rows: 6 }));
    DF.modal({ title: '📜 Relatório — Unit ' + u, html: d, buttons: [{ label: 'Fechar', cls: 'ghost' }] });
    if (DF.AU) DF.AU.sfx('code');
  };
})(typeof window !== 'undefined' ? window : globalThis);
