/* DEEP FLOW — units/index.js
   Registro das 15 estações de profundidade.
   Ordem das seções: fiel à estrutura-og1.txt (varia por unidade — o SB-1 manda).
   Paletas por unidade: CLAUDE.md (trilha Oil & Gas 1).
   capStart: número global da primeira cápsula da unidade (1..202). */
(function (root) {
  const DF = root.DF = root.DF || {};

  // fábrica de seções
  function S(key, icon, name, tag) { return { key: key, icon: icon, name: name, tag: tag || '' }; }
  const bg = function () { return S('background', '🧭', 'Background', 'briefing + registro de áudio'); };
  const ko = function () { return S('kickoff', '🚁', 'Kick Off', 'A-B + In this Unit'); };
  const job = function () { return S('job', '👷', "It's My Job", ''); };
  const pr = function () { return S('pron', '🗣️', 'Pronunciation', ''); };
  const nt = function (tag) { return S('num', '🔢', 'Number Talk', tag); };
  const li = function (n) { return S('listen' + (n || 1), '🎧', 'Listening' + (n === 2 ? ' C-D' : ''), ''); };
  const vo = function (n) { return S('vocab' + (n || 1), '📦', 'Vocabulary' + (n === 2 ? ' C-D' : ' A-B'), ''); };
  const sp = function () { return S('speak', '💬', 'Speaking', '+ registro de áudio'); };
  const re = function (n) { return S('read' + (n || 1), '📖', 'Reading' + (n === 2 ? ' C-D' : ' A-B'), ''); };
  const pj = function () { return S('project', '🧪', 'Project', 'entrega via WhatsApp'); };
  const wr = function () { return S('write', '✍️', 'Writing', '+ writing bank'); };
  const ck = function () { return S('check', '☑️', 'Checklist', 'autoavaliação can-do'); };
  const kw = function () { return S('keywords', '🗝️', 'Key Words', 'glossário da estação'); };

  DF.UNITS = {
    1: {
      n: 1, name: 'An International Industry', pt: 'Uma indústria internacional',
      depth: 0, ac: '#f5a623', ac2: '#f5c87a', icon: '🌍', capStart: 1,
      secs: [bg(), ko(), job(), S('lang1', '🔧', 'Language Spot A-B', 'a / an / the'), pr(),
        S('num', '🔢', 'Number Talk', '1-199'), li(), vo(), sp(), re(), pj(),
        S('lang2', '🔧', 'Language Spot C-D', 'verb be · there is / there are'), wr(), ck(), kw()]
    },
    2: {
      n: 2, name: 'Upstream', pt: 'O setor upstream',
      depth: 200, ac: '#f5a623', ac2: '#f5c87a', icon: '🛢️', capStart: 16,
      secs: [bg(), ko(), re(), job(), vo(), S('lang1', '🔧', 'Language Spot A-B', 'do / does · Wh- questions'),
        sp(), nt('grandes números'), S('lang2', '🔧', 'Language Spot C-D', ''), li(), pj(), wr(), ck(), kw()]
    },
    3: {
      n: 3, name: 'Downstream', pt: 'O setor downstream',
      depth: 400, ac: '#c0392b', ac2: '#e07a74', icon: '⛽', capStart: 30,
      secs: [bg(), ko(), S('lang1', '🔧', 'Language Spot A-B', 'Present Continuous'), job(), vo(),
        S('lang2', '🔧', 'Language Spot C-D', ''), li(), wr(), sp(), re(), pr(), nt('cálculos'), ck(), kw()]
    },
    4: {
      n: 4, name: 'Safety First', pt: 'Segurança em primeiro lugar',
      depth: 600, ac: '#f1c40f', ac2: '#f5da6e', icon: '⛑️', capStart: 44,
      secs: [bg(), ko(), re(), sp(), job(), nt('pesos e medidas'), vo(), li(),
        S('lang1', '🔧', 'Language Spot A-B', 'can · must'), wr(), ck(),
        S('lang2', '🔧', 'Language Spot C-D', ''), kw()]
    },
    5: {
      n: 5, name: 'Finding Oil and Gas', pt: 'Encontrando óleo e gás',
      depth: 800, ac: '#d4a76a', ac2: '#e8ccaa', icon: '🔍', capStart: 57,
      secs: [bg(), ko(), vo(), re(), job(), pr(), S('lang1', '🔧', 'Language Spot A-B', ''),
        wr(), nt('GPS e posição'), S('lang2', '🔧', 'Language Spot C-D', ''), li(), sp(), ck(), kw()]
    },
    6: {
      n: 6, name: 'Drilling', pt: 'Perfuração',
      depth: 1000, ac: '#e67e22', ac2: '#f0ad72', icon: '🌀', capStart: 71,
      secs: [bg(), ko(), re(), li(), S('lang1', '🔧', 'Language Spot A-B', ''), pr(), wr(),
        S('lang2', '🔧', 'Language Spot C-D', ''), sp(), vo(), pj(), ck(), kw()]
    },
    7: {
      n: 7, name: 'Pipes and Pipelines', pt: 'Tubos e dutos',
      depth: 1200, ac: '#7fb3d3', ac2: '#b0d0e8', icon: '🔗', capStart: 84,
      secs: [bg(), ko(), re(), sp(), vo(), job(), li(), S('lang1', '🔧', 'Language Spot A-B', ''),
        nt('medindo tubos'), re(2), S('lang2', '🔧', 'Language Spot C-D', ''), wr(), ck(), kw()]
    },
    8: {
      n: 8, name: 'Working Offshore', pt: 'Trabalhando offshore',
      depth: 1400, ac: '#0077b6', ac2: '#90c8e0', icon: '🌊', capStart: 98,
      secs: [bg(), ko(), re(), S('lang1', '🔧', 'Language Spot A-B', ''), nt('variáveis'), job(),
        S('lang2', '🔧', 'Language Spot C-D', ''), vo(), wr(), li(), vo(2), sp(), pr(), ck(), kw()]
    },
    9: {
      n: 9, name: 'Natural Gas', pt: 'Gás natural',
      depth: 1600, ac: '#00b4d8', ac2: '#80d8ec', icon: '🔥', capStart: 113,
      secs: [bg(), ko(), vo(), nt('gráficos'), S('lang1', '🔧', 'Language Spot A-B', 'Past Simple be'), li(),
        re(), S('lang2', '🔧', 'Language Spot C-D', ''), sp(), wr(), job(), pj(), ck(), kw()]
    },
    10: {
      n: 10, name: 'Oil and the Environment', pt: 'Petróleo e meio ambiente',
      depth: 1800, ac: '#2ecc71', ac2: '#82e0aa', icon: '🌿', capStart: 127,
      secs: [bg(), ko(), S('lang1', '🔧', 'Language Spot A-B', 'Past Simple'), job(), vo(),
        S('lang2', '🔧', 'Language Spot C-D', ''), re(), li(), pr(), sp(), wr(), pj(), ck(), kw()]
    },
    11: {
      n: 11, name: 'Workshop Operations', pt: 'Operações de oficina',
      depth: 2000, ac: '#f1c40f', ac2: '#f5da6e', icon: '🔧', capStart: 141,
      secs: [bg(), ko(), li(), re(), vo(), S('lang1', '🔧', 'Language Spot A-B', 'Present Perfect'),
        sp(), nt('medidas de precisão'), S('lang2', '🔧', 'Language Spot C-D', ''), wr(), ck(), kw()]
    },
    12: {
      n: 12, name: 'Repairs and Maintenance', pt: 'Reparos e manutenção',
      depth: 2200, ac: '#e67e22', ac2: '#f0ad72', icon: '🛠️', capStart: 153,
      secs: [bg(), ko(), vo(), S('lang1', '🔧', 'Language Spot A-B', 'will'), pr(),
        S('read1', '📖', 'Reading A-B-C', ''), S('lang2', '🔧', 'Language Spot C-D', ''),
        li(), job(), wr(), ck(), kw()]
    },
    13: {
      n: 13, name: 'The Refinery', pt: 'A refinaria',
      depth: 2500, ac: '#e74c3c', ac2: '#f0958d', icon: '🏭', capStart: 165,
      secs: [bg(), ko(), li(), S('lang1', '🔧', 'Language Spot A-B', 'The Passive'), sp(),
        nt('temperaturas'), S('lang2', '🔧', 'Language Spot C-D', ''), job(), re(), wr(), pj(), ck(), kw()]
    },
    14: {
      n: 14, name: 'Emergencies', pt: 'Emergências',
      depth: 2750, ac: '#e74c3c', ac2: '#f0958d', icon: '🚨', capStart: 178,
      secs: [bg(), ko(), re(), job(), S('lang1', '🔧', 'Language Spot A-B', 'if / when / in case'), vo(),
        li(), S('lang2', '🔧', 'Language Spot C-D', 'Past Continuous'), pr(), sp(), wr(),
        nt('sinais vitais'), ck(), kw()]
    },
    15: {
      n: 15, name: 'Petrochemicals', pt: 'Petroquímicos',
      depth: 3000, ac: '#a855f7', ac2: '#cc99fb', icon: '🧪', capStart: 192,
      secs: [bg(), ko(), re(), S('lang1', '🔧', 'Language Spot A-B', 'and · but · because'), li(),
        sp(), job(), wr(), pj(), ck(), kw()]
    }
  };

  // checkpoints da descida (Block Exams + Final Test)
  DF.CHECKPOINTS = [
    { id: 'blk1', after: 3, depth: 500, name: 'BLOCK EXAM 1', units: [1, 2, 3] },
    { id: 'blk2', after: 6, depth: 1100, name: 'BLOCK EXAM 2', units: [4, 5, 6] },
    { id: 'blk3', after: 9, depth: 1700, name: 'BLOCK EXAM 3', units: [7, 8, 9] },
    { id: 'blk4', after: 12, depth: 2350, name: 'BLOCK EXAM 4', units: [10, 11, 12] },
    { id: 'fin', after: 15, depth: 3050, name: 'FINAL TEST', units: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }
  ];

  DF.UNIT_DATA = DF.UNIT_DATA || {};
})(typeof window !== 'undefined' ? window : globalThis);
