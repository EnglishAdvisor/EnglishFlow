/* DEEP FLOW — codes.js
   Elo aluno↔mentor sem servidor: códigos assinados trocados por WhatsApp.
   UNL = desbloqueio de unidade · TST = ordem de teste (determinística por seed)
   BLK/FIN dentro de TST (t:'blk'|'fin') · REL = relatório assinado anti-fraude. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const C = DF.CODES = {};

  function cut(s, n) { return String(s == null ? '' : s).slice(0, n); }
  function id6() { return Math.random().toString(36).slice(2, 8); }

  function signPayload(p) {
    p.sig = DF.sign(DF.canon(p));
    return p;
  }
  function verified(p) { return p.sig === DF.sign(DF.canon(p)); }

  // ---------------- UNL: desbloqueio ----------------
  // us: [números de unidade] · sn: nome do aluno (opcional, trava o código)
  C.makeUnlock = function (opts) {
    const p = signPayload({
      v: 1, t: 'unl', id: id6(), d: DF.todayKey(),
      us: (opts.us || []).slice(0, 15),
      mn: cut(opts.mn || 'Mentor', 24),
      sn: cut(opts.sn || '', 24)
    });
    return DF.pack(p, 'UNL');
  };
  C.readUnlock = async function (code) {
    const p = await DF.unpack(code, 'UNL');
    if (p.t !== 'unl' || !Array.isArray(p.us) || !p.us.length) throw new Error('bad-unl');
    return { ok: verified(p), data: p };
  };

  // ---------------- TST: ordem de teste ----------------
  // t: 'tst' (unidade) | 'blk' (block exam) | 'fin' (final)
  C.makeTest = function (opts) {
    const p = signPayload({
      v: 1, t: opts.t || 'tst', id: id6(), d: DF.todayKey(),
      us: (opts.us || []).slice(0, 15),
      cats: (opts.cats || []).slice(0, 8),
      n: DF.clamp(parseInt(opts.n, 10) || 10, 5, 30),
      diff: DF.clamp(parseInt(opts.diff, 10) || 1, 1, 3),
      seed: opts.seed || Math.floor(Math.random() * 1e9),
      mn: cut(opts.mn || 'Mentor', 24),
      msg: cut(opts.msg || '', 140),
      sn: cut(opts.sn || '', 24)
    });
    return DF.pack(p, 'TST');
  };
  C.readTest = async function (code) {
    const p = await DF.unpack(code, 'TST');
    if (['tst', 'blk', 'fin'].indexOf(p.t) < 0 || !Array.isArray(p.us) || !p.us.length) throw new Error('bad-tst');
    if (!Array.isArray(p.cats) || !p.cats.length) p.cats = ['voc', 'gra'];
    return { ok: verified(p), data: p };
  };

  // ---------------- REL: relatório assinado ----------------
  // k: 'tst'|'blk'|'fin'|'unit' · cats: {cat:[ok,total]} · g: grade emoji
  C.makeReport = function (opts) {
    const p = signPayload({
      v: 1, t: 'rel', k: opts.k, id: id6(), d: DF.todayKey(),
      tid: cut(opts.tid || '', 8),
      st: cut(opts.st || 'Aluno', 24),
      us: (opts.us || []).slice(0, 15),
      sc: DF.clamp(Math.round(opts.sc || 0), 0, 1000),
      ac: DF.clamp(Math.round(opts.ac || 0), 0, 100),
      n: DF.clamp(parseInt(opts.n, 10) || 0, 0, 99),
      g: cut(opts.g || '', 30),
      cats: opts.cats || {}
    });
    return DF.pack(p, 'REL');
  };
  C.readReport = async function (code) {
    const p = await DF.unpack(code, 'REL');
    if (p.t !== 'rel') throw new Error('bad-rel');
    return { ok: verified(p), data: p };
  };

  // ---------------- aplicação no jogo do aluno ----------------
  // devolve { type, msg } ou lança erro
  C.applyCode = async function (raw) {
    const code = String(raw || '').trim().replace(/\s+/g, '');
    const prefix = code.split('.')[0];
    if (prefix === 'UNL') {
      const r = await C.readUnlock(code);
      if (!r.ok) throw new Error('sig');
      const p = r.data;
      if (p.sn && DF.norm(p.sn) !== DF.norm(DF.state.name)) throw new Error('wrong-student');
      const news = [];
      p.us.forEach(function (u) {
        if (!DF.isUnlocked(u)) { DF.unlock(u, p.mn); news.push(u); }
      });
      return { type: 'unl', units: p.us, news: news, mn: p.mn };
    }
    if (prefix === 'TST') {
      const r = await C.readTest(code);
      if (!r.ok) throw new Error('sig');
      const p = r.data;
      if (p.sn && DF.norm(p.sn) !== DF.norm(DF.state.name)) throw new Error('wrong-student');
      return { type: p.t, test: p };
    }
    if (prefix === 'SAV') {
      await DF.importSave(code);
      return { type: 'sav' };
    }
    throw new Error('unknown');
  };

  C.errMsg = function (e) {
    const m = String(e && e.message || e);
    if (m === 'sig') return '⚠️ Assinatura inválida — código adulterado ou incompleto.';
    if (m === 'wrong-student') return '⚠️ Este código foi emitido para outro aluno.';
    if (m === 'bad-save') return '⚠️ Código de save inválido.';
    if (m === 'bad-sig') return '⚠️ Save corrompido — assinatura não confere.';
    return '❌ Código ilegível. Confira se copiou tudo (UNL…, TST… ou SAV…).';
  };
})(typeof window !== 'undefined' ? window : globalThis);
