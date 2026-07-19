/* LIFE FLOW — units/index.js
   Registro das 12 unidades de World Class 1 (National Geographic Learning) —
   nomes reais extraídos do sumário do WB-1.pdf. Estrutura de missão por
   unidade (Kickoff/Vocabulary/Grammar/Listening/Reading/Speaking/Writing/
   Checklist) é uma composição autoral alinhada ao que o Workbook e a cápsula
   real capsule-44-listening-wc1.html já mostram (Vocabulary and Grammar,
   Listening/Video, Writing — mais Reading/Speaking, previstos no SB).
   Os 4 blocos de revisão (1-3 / 4-6 / 7-9 / 10-12) são nativos do livro —
   não inventados — e viram os checkpoints do jogo. */
(function (root) {
  const DF = root.DF = root.DF || {};

  function S(key, icon, name, tag) { return { key: key, icon: icon, name: name, tag: tag || '' }; }
  const kickoff = function () { return S('kickoff', '🏁', 'Kick Off', 'apresentação da unidade'); };
  const vocab = function () { return S('vocab', '📦', 'Vocabulary', 'palavras-chave'); };
  const grammar = function (tag) { return S('grammar', '🔧', 'Grammar', tag || 'gramática'); };
  const listen = function () { return S('listen', '🎧', 'Listening', 'ouvir e entender'); };
  const read = function () { return S('read', '📖', 'Reading', 'leitura (National Geographic)'); };
  const speak = function () { return S('speak', '🗣️', 'Speaking', 'conversa'); };
  const write = function () { return S('write', '✍️', 'Writing', 'produção escrita'); };
  const check = function () { return S('check', '☑️', 'Outcomes', 'autoavaliação'); };

  function secs(grammarTag) {
    return [kickoff(), vocab(), grammar(grammarTag), listen(), read(), speak(), write(), check()];
  }

  const UNITS = {
    1: { n: 1, name: 'Who We Are', pt: 'Quem somos', depth: 1, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🧑‍🤝‍🧑', secs: secs('Past tenses — memorable life events') },
    2: { n: 2, name: 'The World Awaits', pt: 'O mundo espera', depth: 2, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🌍', secs: secs('Future plans') },
    3: { n: 3, name: 'The Great Energy Challenge', pt: 'O grande desafio da energia', depth: 3, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '⚡', secs: secs('Comparisons') },
    4: { n: 4, name: "The World's a Stage", pt: 'O mundo é um palco', depth: 4, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🎭', secs: secs('Present perfect') },
    5: { n: 5, name: 'No Need to Panic', pt: 'Sem motivo para pânico', depth: 5, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '😮‍💨', secs: secs('Modals of advice') },
    6: { n: 6, name: 'In Style', pt: 'No estilo', depth: 6, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '👗', secs: secs('Passive voice') },
    7: { n: 7, name: 'On the Move', pt: 'Em movimento', depth: 7, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🚌', secs: secs('Conditionals') },
    8: { n: 8, name: 'Think Twice', pt: 'Pense duas vezes', depth: 8, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🤔', secs: secs('Modals of possibility') },
    9: { n: 9, name: 'In the Wild', pt: 'Na natureza', depth: 9, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🐾', secs: secs('Relative clauses') },
    10: { n: 10, name: 'Decisions, Decisions', pt: 'Decisões, decisões', depth: 10, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🧭', secs: secs('Reported speech') },
    11: { n: 11, name: 'Rain or Shine', pt: 'Faça chuva ou sol', depth: 11, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🌦️', secs: secs('Future forms') },
    12: { n: 12, name: "What's Your Game?", pt: 'Qual é o seu jogo?', depth: 12, ac: '#7ec8d4', ac2: '#5ab0c0', icon: '🎮', secs: secs('Review of tenses') }
  };

  // checkpoints nativos do livro — cada um cobre só o seu bloco (não é cumulativo)
  DF.CHECKPOINTS = [
    { id: 'rev1', after: 3, depth: 3.5, name: 'REVIEW 1-3', units: [1, 2, 3] },
    { id: 'rev2', after: 6, depth: 6.5, name: 'REVIEW 4-6', units: [4, 5, 6] },
    { id: 'rev3', after: 9, depth: 9.5, name: 'REVIEW 7-9', units: [7, 8, 9] },
    { id: 'fin', after: 12, depth: 12.6, name: 'REVIEW 10-12 · FINAL TEST', units: [10, 11, 12] }
  ];

  DF.UNITS = UNITS;
  DF.UNIT_DATA = DF.UNIT_DATA || {};
})(typeof window !== 'undefined' ? window : globalThis);
