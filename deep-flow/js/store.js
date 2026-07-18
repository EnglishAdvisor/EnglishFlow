/* DEEP FLOW — store.js
   Estado do aluno: localStorage + código de save exportável/importável (SAV…). */
(function (root) {
  const DF = root.DF = root.DF || {};
  const KEY = 'deepflow_og1_v1';

  function fresh() {
    return {
      v: 1,
      name: '',
      createdAt: DF.todayKey(),
      settings: { rate: 0.9, sfx: true, voiceURI: '' },
      unlocked: {},          // { "1": { d:'2026-07-16', mn:'Felipe' } }
      prog: {},              // { "1": { "0": { sc: 87, tries: 2 } } }  (por índice de missão)
      srs: { counter: 0, items: {} },
      check: {},             // { "1": [2,1,0,...] } autoavaliação can-do
      tests: [],             // histórico de TST/BLK/FIN executados
      live: [],              // registros de aula ao vivo (Unit Review / Progress Test)
      hints: {}
    };
  }

  DF.state = null;

  DF.load = function () {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const st = JSON.parse(raw);
        if (st && st.v === 1) { DF.state = Object.assign(fresh(), st); return DF.state; }
      }
    } catch (e) { /* corrompido → recomeça */ }
    DF.state = fresh();
    return DF.state;
  };

  DF.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(DF.state)); } catch (e) { /* cheio/indisponível */ }
  };

  DF.reset = function () {
    DF.state = fresh();
    DF.save();
  };

  // ---------- save exportável ----------
  DF.exportSave = async function () {
    const st = DF.state;
    const payload = { v: 1, t: 'sav', d: DF.todayKey(), s: st };
    payload.sig = DF.sign(DF.canon(payload));
    return DF.pack(payload, 'SAV');
  };

  DF.importSave = async function (code) {
    const p = await DF.unpack(code, 'SAV');
    if (p.t !== 'sav' || !p.s || p.s.v !== 1) throw new Error('bad-save');
    const ok = p.sig === DF.sign(DF.canon(p));
    if (!ok) throw new Error('bad-sig');
    DF.state = Object.assign(fresh(), p.s);
    DF.save();
    return DF.state;
  };

  // ---------- progresso ----------
  DF.isUnlocked = function (u) { return !!(DF.state.unlocked[u]); };
  DF.unlock = function (u, mn) {
    DF.state.unlocked[u] = { d: DF.todayKey(), mn: mn || '' };
    DF.save();
  };

  DF.missionProg = function (u, idx) {
    const p = DF.state.prog[u];
    return p ? p[idx] : null;
  };
  DF.setMissionProg = function (u, idx, sc) {
    const p = DF.state.prog[u] = DF.state.prog[u] || {};
    const cur = p[idx] || { sc: 0, tries: 0 };
    cur.tries++;
    cur.sc = Math.max(cur.sc, sc);
    p[idx] = cur;
    DF.save();
  };
  DF.unitDone = function (u) {
    const meta = DF.UNITS && DF.UNITS[u];
    if (!meta) return { done: 0, total: 0, pct: 0 };
    const p = DF.state.prog[u] || {};
    let done = 0, sum = 0;
    meta.secs.forEach(function (_, i) {
      if (p[i] && p[i].sc >= 60) { done++; sum += p[i].sc; }
    });
    return {
      done: done, total: meta.secs.length,
      pct: meta.secs.length ? Math.round(100 * done / meta.secs.length) : 0,
      avg: done ? Math.round(sum / done) : 0
    };
  };
})(typeof window !== 'undefined' ? window : globalThis);
