/* A Maldição da Cuca — srs.js
   Repetição espaçada (SM-2 simplificado). Palavras erradas voltam como "assombrações".
   Intervalos medidos em batalhas, não em dias — ritmo de jogo. */
(function (root) {
  const G = root.G = root.G || {};
  const S = G.SRS = {};

  function store() {
    const st = G.state;
    st.srs = st.srs || { counter: 0, items: {} };
    st.srs.items = st.srs.items || {};
    return st.srs;
  }

  // avança o relógio (1 tick por batalha)
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
  S.record = function (id, kind, q) {
    if (!id) return;
    const it = S.ensure(id, kind);
    const s = store();
    it.seen++;
    if (q >= 2) it.ok++;
    if (q < 3) {
      it.lap++; it.st = 0; it.iv = 1;
    } else {
      it.st++; it.rep++;
      it.e = G.clamp(it.e + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)), 1.3, 2.8);
      it.iv = it.iv <= 0 ? 2 : Math.min(50, Math.round(it.iv * it.e));
    }
    it.due = s.counter + it.iv;
  };

  // itens vencidos (aparecem de novo em batalha)
  S.due = function (limit) {
    const s = store();
    const ids = Object.keys(s.items).filter(function (id) {
      const it = s.items[id];
      return it.seen > 0 && it.due >= 0 && it.due <= s.counter && it.st < 5;
    });
    ids.sort(function (a, b) { return s.items[a].due - s.items[b].due; });
    return limit ? ids.slice(0, limit) : ids;
  };

  // só os que a pessoa errou recentemente — viram fantasmas
  S.haunted = function (limit) {
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
    return { seen: seen, mast: mast, ghosts: S.haunted().length };
  };

  // precisão por categoria (para o Boletim do mentor)
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
})(typeof window !== 'undefined' ? window : globalThis);
