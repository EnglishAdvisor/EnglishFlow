/* BUSINESS FLOW — srs.js
   Repetição espaçada (SM-2 simplificado). Erros viram NCs (não conformidades)
   que reaparecem na Manutenção até o domínio. Ticks por missão, não por dia. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const S = DF.SRS = {};

  // categorias de competência (Data Book / relatórios)
  DF.CATS = {
    voc: { label: 'Vocabulário', e: '📦' },
    gra: { label: 'Gramática', e: '🔧' },
    num: { label: 'Números', e: '🔢' },
    lis: { label: 'Listening', e: '🎧' },
    rea: { label: 'Leitura', e: '📖' },
    pro: { label: 'Pronúncia', e: '🗣️' },
    spl: { label: 'Soletração', e: '🔤' },
    fun: { label: 'Frases úteis', e: '🧰' }
  };

  function store() {
    const st = DF.state;
    st.srs = st.srs || { counter: 0, items: {} };
    st.srs.items = st.srs.items || {};
    return st.srs;
  }

  S.tick = function () { store().counter++; };
  S.now = function () { return store().counter; };
  S.get = function (id) { return store().items[id]; };

  S.ensure = function (id, kind) {
    const s = store();
    if (!s.items[id]) {
      s.items[id] = { e: 2.5, iv: 0, due: -1, rep: 0, lap: 0, st: 0, seen: 0, ok: 0, k: kind || '?' };
    }
    if (kind) s.items[id].k = kind;
    return s.items[id];
  };

  // q: 0 = errou, 2 = quase (typo), 4 = certo, 5 = certo e rápido
  // sp: especificação compacta para reconstruir o exercício na Manutenção
  S.record = function (id, kind, q, sp) {
    if (!id) return;
    const it = S.ensure(id, kind);
    const s = store();
    it.seen++;
    if (sp) it.sp = sp;
    if (q >= 2) it.ok++;
    if (q < 3) {
      it.lap++; it.st = 0; it.iv = 1;
    } else {
      it.st++; it.rep++;
      it.e = DF.clamp(it.e + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)), 1.3, 2.8);
      it.iv = it.iv <= 0 ? 2 : Math.min(50, Math.round(it.iv * it.e));
    }
    it.due = s.counter + it.iv;
  };

  S.due = function (limit) {
    const s = store();
    const ids = Object.keys(s.items).filter(function (id) {
      const it = s.items[id];
      return it.seen > 0 && it.due >= 0 && it.due <= s.counter && it.st < 5;
    });
    ids.sort(function (a, b) { return s.items[a].due - s.items[b].due; });
    return limit ? ids.slice(0, limit) : ids;
  };

  // NCs: itens errados recentemente e ainda não dominados
  S.ncs = function (limit) {
    const out = S.due().filter(function (id) {
      const it = S.get(id);
      return it && it.lap > 0 && it.st < 2;
    });
    return limit ? out.slice(0, limit) : out;
  };

  S.mastery = function (id) {
    const it = S.get(id);
    if (!it || !it.seen) return 0;
    if (it.st >= 4 && it.e > 2.3) return 5;
    if (it.st >= 3) return 4;
    if (it.st >= 2) return 3;
    if (it.st >= 1) return 2;
    return 1;
  };

  S.counts = function () {
    const s = store();
    let seen = 0, mast = 0;
    Object.keys(s.items).forEach(function (id) {
      const it = s.items[id];
      if (it.seen) {
        seen++;
        if (it.st >= 4 && it.e > 2.3) mast++;
      }
    });
    return { seen: seen, mast: mast, ncs: S.ncs().length };
  };

  // precisão por categoria (Data Book / REL)
  S.catStats = function () {
    const out = {};
    const s = store();
    Object.keys(s.items).forEach(function (id) {
      const it = s.items[id];
      if (!it.seen) return;
      const k = it.k || '?';
      out[k] = out[k] || { ok: 0, total: 0 };
      out[k].ok += it.ok;
      out[k].total += it.seen;
    });
    return out;
  };

  // precisão por unidade (ids no formato "uN:...")
  S.unitStats = function () {
    const out = {};
    const s = store();
    Object.keys(s.items).forEach(function (id) {
      const m = /^u(\d+):/.exec(id);
      if (!m) return;
      const it = s.items[id];
      if (!it.seen) return;
      const u = m[1];
      out[u] = out[u] || { ok: 0, total: 0 };
      out[u].ok += it.ok;
      out[u].total += it.seen;
    });
    return out;
  };
})(typeof window !== 'undefined' ? window : globalThis);
