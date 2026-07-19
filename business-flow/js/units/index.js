/* BUSINESS FLOW — units/index.js
   Registro das duas trilhas (dois "prédios"): Business Starter (8 unidades)
   e Business Elementary (6 unidades) — estrutura oficial de Business Result
   2nd Edition (sumário real, não inventado): 5 colunas fixas por unidade
   (Working with Words · Language at Work · Practically Speaking ·
   Business Communication · Talking Point) + Outcomes como autoavaliação.
   Viewpoint (vídeo) vira checkpoint de avaliação — igual Block Exam do OG1. */
(function (root) {
  const DF = root.DF = root.DF || {};

  function S(key, icon, name, tag) { return { key: key, icon: icon, name: name, tag: tag || '' }; }
  const cover = function () { return S('cover', '🏁', 'Capa da Unidade', 'apresentação'); };
  const words = function () { return S('words', '💬', 'Working with Words', 'vocabulário'); };
  const grammar = function (tag) { return S('grammar', '🔧', 'Language at Work', tag || 'gramática'); };
  const speaking = function (tag) { return S('speaking', '🗣️', 'Practically Speaking', tag || 'inglês do dia a dia'); };
  const comm = function (tag) { return S('comm', '🤝', 'Business Communication', tag || 'expressões-chave'); };
  const talk = function () { return S('talk', '🎯', 'Talking Point', 'fluência / jogo'); };
  const check = function () { return S('check', '☑️', 'Outcomes', 'autoavaliação'); };

  function secs(grammarTag, speakingTag, commTag) {
    return [cover(), words(), grammar(grammarTag), speaking(speakingTag), comm(commTag), talk(), check()];
  }

  // ---------------- BUSINESS STARTER (A1) — 8 unidades reais ----------------
  const STARTER_UNITS = {
    1: { n: 1, name: 'You', pt: 'Você', depth: 1, ac: '#a78bfa', ac2: '#c4b5fd', icon: '🙋', secs: secs("I'm / you're / Are you...?", 'Spelling', 'Meeting people') },
    2: { n: 2, name: 'Company', pt: 'A empresa', depth: 2, ac: '#a78bfa', ac2: '#c4b5fd', icon: '🏢', secs: secs("is / isn't", 'Numbers 0-9', 'Starting a phone call') },
    3: { n: 3, name: 'Workplace', pt: 'O local de trabalho', depth: 3, ac: '#a78bfa', ac2: '#c4b5fd', icon: '🖥️', secs: secs('We / They are · Wh- questions', 'Email and website addresses', 'Sending email requests') },
    4: { n: 4, name: 'Departments', pt: 'Departamentos', depth: 4, ac: '#a78bfa', ac2: '#c4b5fd', icon: '🗂️', secs: secs('Present simple: I / you / we / they', 'there is / there are', 'Taking and leaving a message') },
    5: { n: 5, name: 'Products', pt: 'Produtos', depth: 5, ac: '#a78bfa', ac2: '#c4b5fd', icon: '📦', secs: secs('Present simple: he / she / it', 'Big numbers', 'Ordering') },
    6: { n: 6, name: 'Entertaining', pt: 'Recepcionando clientes', depth: 6, ac: '#a78bfa', ac2: '#c4b5fd', icon: '🍽️', secs: secs("can / can't", 'Days and times', 'Inviting, accepting, declining') },
    7: { n: 7, name: 'Technology', pt: 'Tecnologia', depth: 7, ac: '#a78bfa', ac2: '#c4b5fd', icon: '💻', secs: secs('Possessive adjectives', 'this / that / these / those', 'Giving instructions') },
    8: { n: 8, name: 'Travel', pt: 'Viagens', depth: 8, ac: '#a78bfa', ac2: '#c4b5fd', icon: '✈️', secs: secs('was / were', 'Months and dates', 'Arranging a meeting') }
  };
  const STARTER_CHECKPOINTS = [
    { id: 'vp1', after: 4, depth: 4.5, name: 'VIEWPOINT 1 — PEOPLE IN BUSINESS', units: [1, 2, 3, 4] },
    { id: 'fin', after: 8, depth: 8.6, name: 'FINAL TEST — BUSINESS STARTER', units: [1, 2, 3, 4, 5, 6, 7, 8] }
  ];

  // ---------------- BUSINESS ELEMENTARY (A2) — 6 unidades reais ----------------
  const ELEMENTARY_UNITS = {
    1: { n: 1, name: 'Jobs', pt: 'Profissões', depth: 1, ac: '#fb923c', ac2: '#fed7aa', icon: '👔', secs: secs('Present simple · Possessives', 'How to spell', 'Saying hello and goodbye') },
    2: { n: 2, name: 'Products & Services', pt: 'Produtos e serviços', depth: 2, ac: '#fb923c', ac2: '#fed7aa', icon: '📦', secs: secs('Present simple', 'How to say numbers', 'Making phone calls') },
    3: { n: 3, name: 'Location', pt: 'Localização', depth: 3, ac: '#fb923c', ac2: '#fed7aa', icon: '📍', secs: secs('There is/are · Some/any', 'Saying email and postal addresses', 'Ordering by phone') },
    4: { n: 4, name: 'Technology', pt: 'Tecnologia', depth: 4, ac: '#fb923c', ac2: '#fed7aa', icon: '💻', secs: secs('Adverbs of frequency · Questions', 'How to use sequencing words', 'Asking for and offering help') },
    5: { n: 5, name: 'Communication', pt: 'Comunicação', depth: 5, ac: '#fb923c', ac2: '#fed7aa', icon: '✉️', secs: secs('Past simple: be and regular verbs', 'How to apologize', 'Solving problems') },
    6: { n: 6, name: 'Networking', pt: 'Networking', depth: 6, ac: '#fb923c', ac2: '#fed7aa', icon: '🤝', secs: secs('Past simple: irregular verbs · Time expressions', 'How to describe a trip', 'Making conversation') }
  };
  const ELEMENTARY_CHECKPOINTS = [
    { id: 'vp1', after: 3, depth: 3.5, name: 'VIEWPOINT 1 — PLACES OF WORK', units: [1, 2, 3] },
    { id: 'fin', after: 6, depth: 6.6, name: 'FINAL TEST — BUSINESS ELEMENTARY', units: [1, 2, 3, 4, 5, 6] }
  ];

  DF.TRAILS = {
    starter: { id: 'starter', label: 'Business Starter', level: 'A1', ac: '#a78bfa', ac2: '#8b5cf6', badge: '#2e1065', icon: '🙋', units: STARTER_UNITS, checkpoints: STARTER_CHECKPOINTS },
    elementary: { id: 'elementary', label: 'Business Elementary', level: 'A2', ac: '#fb923c', ac2: '#f59e0b', badge: '#431407', icon: '👔', units: ELEMENTARY_UNITS, checkpoints: ELEMENTARY_CHECKPOINTS }
  };

  // conteúdo de cada trilha fica isolado — unitNN.js registra aqui, não em DF.UNIT_DATA direto
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };

  // aliases ativos (o resto do engine só enxerga DF.UNITS / DF.CHECKPOINTS / DF.UNIT_DATA)
  DF.setTrail = function (id) {
    const t = DF.TRAILS[id];
    if (!t) return false;
    DF.state.trail = id;
    DF.UNITS = t.units;
    DF.CHECKPOINTS = t.checkpoints;
    DF.UNIT_DATA = DF.TRAIL_DATA[id];
    if (DF._applyTrailAlias) DF._applyTrailAlias();
    DF.save();
    return true;
  };
})(typeof window !== 'undefined' ? window : globalThis);
