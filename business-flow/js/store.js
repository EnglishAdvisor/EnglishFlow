/* BUSINESS FLOW — store.js
   Estado do aluno: localStorage + código de save exportável/importável (SAV…).
   Duas trilhas (Starter/Elementary) compartilham a mesma numeração de unidade
   (1..8 / 1..6) — por isso unlocked/prog/srs/check/tests ficam isolados por
   trilha em `byTrail`, e os campos "achatados" (DF.state.unlocked etc., que
   o resto do engine espera) são apenas um alias para a trilha ativa. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const KEY = 'businessflow_v1';

  function freshTrailState() {
    return { unlocked: {}, prog: {}, srs: { counter: 0, items: {} }, check: {}, tests: [] };
  }

  function fresh() {
    return {
      v: 1,
      name: '',
      trail: '',              // 'starter' | 'elementary'
      createdAt: DF.todayKey(),
      settings: { rate: 0.9, sfx: true, voiceURI: '' },
      byTrail: { starter: freshTrailState(), elementary: freshTrailState() },
      live: [],
      hints: {}
    };
  }

  DF.state = null;

  // religa os campos "achatados" à trilha ativa (mesmas referências de objeto,
  // então mutações em DF.state.unlocked[...] já gravam dentro de byTrail)
  DF._applyTrailAlias = function () {
    const id = DF.state.trail || 'starter';
    const t = DF.state.byTrail[id] = DF.state.byTrail[id] || freshTrailState();
    DF.state.unlocked = t.unlocked;
    DF.state.prog = t.prog;
    DF.state.srs = t.srs;
    DF.state.check = t.check;
    DF.state.tests = t.tests;
  };

  DF.load = function () {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const st = JSON.parse(raw);
        if (st && st.v === 1) {
          DF.state = Object.assign(fresh(), st);
          DF.state.byTrail = Object.assign({ starter: freshTrailState(), elementary: freshTrailState() }, st.byTrail || {});
          DF._applyTrailAlias();
          if (DF.state.trail && DF.TRAILS) DF.setTrail(DF.state.trail);
          return DF.state;
        }
      }
    } catch (e) { /* corrompido → recomeça */ }
    DF.state = fresh();
    DF._applyTrailAlias();
    return DF.state;
  };

  DF.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(DF.state)); } catch (e) { /* cheio/indisponível */ }
  };

  DF.reset = function () {
    DF.state = fresh();
    DF._applyTrailAlias();
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
    DF.state.byTrail = Object.assign({ starter: freshTrailState(), elementary: freshTrailState() }, p.s.byTrail || {});
    DF._applyTrailAlias();
    if (DF.state.trail && DF.TRAILS) DF.setTrail(DF.state.trail);
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
