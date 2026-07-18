/* DEEP FLOW — units/unit09.js
   UNIT 9 — Natural Gas (1600 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U9 (p.64-69) — objetivos, nada
   copiado; gramática = Past Simple de "be" (was/were) EGU Unit 10, adaptada;
   PT técnico: OFFSHORE2. Personagem autoral: Kemi Adeyemi (biogas technician,
   projeto comunitário). Reading autoral inspirado em cadeias de GNL. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'methane', pt: 'metano (CH₄)', def: 'natural gas is mostly methane.' },
    { en: 'LNG', pt: 'GNL (gás natural liquefeito)', def: 'liquefied natural gas — very cold, for ships.' },
    { en: 'vapour', pt: 'vapor', def: 'gas in gas form, before it is liquefied.' },
    { en: 'ammonia', pt: 'amônia (NH₃)', def: 'made from gas, used for fertilizer.' },
    { en: 'liquefy', pt: 'liquefazer', def: 'turn gas into liquid by cooling it.' },
    { en: 'vaporize', pt: 'vaporizar', def: 'turn liquid gas back into vapour.' },
    { en: 'consume', pt: 'consumir', def: 'homes and power stations consume gas.' },
    { en: 'liquid', pt: 'líquido', def: 'in the tanker, LNG is liquid.' },
    { en: 'vertical', pt: 'vertical', def: 'up and down — a vertical tank.' },
    { en: 'horizontal', pt: 'horizontal', def: 'flat — a horizontal cylinder.' },
    { en: 'cylindrical', pt: 'cilíndrico', def: 'shaped like a cylinder.' },
    { en: 'spherical', pt: 'esférico', def: 'shaped like a ball.' },
    { en: 'cuboid', pt: 'em forma de caixa', def: 'shaped like a box.' },
    { en: 'above-ground', pt: 'acima do solo', def: 'not buried.' },
    { en: 'underground', pt: 'subterrâneo', def: 'buried below the surface.' }
  ];

  const TOOLS = [
    { en: 'production', pt: 'produção' },
    { en: 'liquefaction', pt: 'liquefação' },
    { en: 'vaporization', pt: 'vaporização' },
    { en: 'storage', pt: 'armazenamento' },
    { en: 'transportation', pt: 'transporte' },
    { en: 'consumption', pt: 'consumo' },
    { en: 'reserves', pt: 'reservas' },
    { en: 'biogas', pt: 'biogás' },
    { en: 'power station', pt: 'usina de energia' },
    { en: 'fertilizer', pt: 'fertilizante' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: Past Simple be ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pb1',
      title: '🔧 Passado de "be":', main: 'Consumption ___ one trillion cubic metres in 1970.',
      options: opts('was', ['were', 'is', 'be']),
      expl: 'singular → was.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pb2',
      title: '🔧 Passado de "be":', main: 'They ___ in China last month.',
      options: opts('were', ['was', 'are', 'be']),
      expl: 'they → were.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pb3',
      title: '🔧 Negativa:', main: 'I ___ at work last week.',
      options: opts("wasn't", ["weren't", "am not", "isn't"]),
      expl: 'I wasn\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pb4',
      title: '🔧 Negativa:', main: 'We ___ busy yesterday.',
      options: opts("weren't", ["wasn't", "aren't", "not were"]),
      expl: 'we → weren\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pb5',
      title: '🔧 Pergunta:', main: '___ the ship late?',
      options: opts('Was', ['Were', 'Did', 'Is']),
      expl: 'the ship (it) → Was.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pb6',
      title: '🔧 Pergunta:', main: '___ you a student last year?',
      options: opts('Were', ['Was', 'Did', 'Are']),
      expl: 'you → Were.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u9:g:ord1',
      title: '🔧 Monte a frase:', answer: 'The gas was stored in tanks',
      expl: 'was + particípio (passiva no passado).'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: passado × presente ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pp1',
      title: '🔧 Passado ou presente?', main: 'There ___ a meeting yesterday.',
      options: opts('was', ['is', 'were', 'are']),
      expl: 'yesterday + singular → was.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pp2',
      title: '🔧 Complete:', main: 'We ___ busy now, but we ___ busy last week.',
      options: opts("are · weren't", ["were · aren't", "was · are", "are · wasn't"]),
      expl: 'now → are · last week → weren\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pp3',
      title: '🔧 Complete:', main: 'The level gauge ___ faulty this morning.',
      options: opts('was', ['is', 'were', 'be']),
      expl: 'this morning (passado) + it → was.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pp4',
      title: '🔧 Complete:', main: 'The cable trays ___ ready last Friday.',
      options: opts('were', ['was', 'are', 'be']),
      expl: 'trays (plural) + last Friday → were.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pp5',
      title: '🔧 Complete:', main: 'He ___ at Ras Tanura from 2000 to 2008.',
      options: opts('was', ['were', 'is', 'been']),
      expl: 'he + período passado → was.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u9:g:ord2',
      title: '🔧 Monte a pergunta:', answer: 'When were you ten years old',
      expl: 'When + were + you.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u9:g:pp6',
      title: '🔧 Resposta curta:', main: 'Were you at the library last night? — No, I ___.',
      options: opts("wasn't", ["weren't", "didn't", "am not"]),
      expl: 'No, I wasn\'t.'
    }
  ];

  // ---------- LISTENING: passado × presente (autoral) ----------
  const SCRIPT =
    'Three short conversations\n\n' +
    'Conversation 1\n' +
    'A: Was the new operations manager at the meeting yesterday?\n' +
    'B: No, he wasn\'t. He was at the Ras Tanura refinery.\n\n' +
    'Conversation 2\n' +
    'A: Are you busy?\n' +
    'B: Yes, we are. There was a big problem this morning — the level gauge was faulty.\n\n' +
    'Conversation 3\n' +
    'A: Are the cable trays ready?\n' +
    'B: They were ready last Friday, but they weren\'t on the materials report.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 430 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u9:l:pp1',
      title: '🎧 O novo gerente estava na reunião ontem?',
      tts: dlg(['Was the new operations manager at the meeting yesterday?', "No, he wasn't. He was at the Ras Tanura refinery."]),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Was the manager at the meeting? No, he wasn\'t — he was at the refinery.”',
      options: opts('Não — estava na refinaria', ['Sim, estava', 'Não — estava doente', 'Sim, mas saiu cedo']),
      expl: 'He wasn\'t at the meeting; he was at Ras Tanura.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u9:l:pp2',
      title: '🎧 Qual foi o problema da manhã?',
      tts: dlg(['There was a big problem this morning — the level gauge was faulty.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“There was a big problem — the level gauge was faulty.”',
      options: opts('O medidor de nível estava com defeito', ['Faltou café', 'A bomba explodiu', 'O rádio quebrou']),
      expl: 'The level gauge was faulty.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u9:l:pp3',
      title: '🎧 As calhas de cabo estavam prontas?',
      tts: dlg(['They were ready last Friday, but they weren\'t on the materials report.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“They were ready last Friday, but they weren\'t on the report.”',
      options: opts('Prontas, mas fora do relatório de materiais', ['Nunca ficaram prontas', 'Prontas e no relatório', 'Perdidas no mar']),
      expl: 'Ready, but not on the report — o clássico furo de registro.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u9:l:pp4',
      title: '🎧 Complete: "He ___ at the meeting." (negativa)',
      tts: dlg(["No, he wasn't."]),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“No, he wasn\'t.”',
      answers: ["wasn't", 'was not'], placeholder: 'was…',
      expl: 'wasn\'t = was not.'
    }
  ];

  // ---------- READING: a cadeia do GNL (autoral) ----------
  const READ_TEXT =
    'The LNG journey — from field to home\n\n' +
    'Natural gas is mostly methane. To send it across the sea, we make it very cold — about minus 165 degrees Celsius — until it becomes a liquid. This is LNG, liquefied natural gas. As a liquid, it takes much less space.\n\n' +
    'In the producing region, the gas field produces the gas; a liquefaction facility liquefies it; and tanks store it. Then tankers transport the LNG across the ocean.\n\n' +
    'In the consuming region, the LNG goes into storage tanks. Vaporizers turn it back into vapour, and a pipeline system distributes the gas to homes, businesses, and power stations. They consume it for cooking, heating, and electricity.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u9:r:lng1',
      title: '📖 Natural gas is mostly…', main: null,
      options: opts('methane', ['ammonia', 'petrol', 'water']),
      expl: 'Gás natural = principalmente metano.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u9:r:lng2',
      title: '📖 Why do we liquefy the gas?', main: null,
      options: opts('So it takes less space to transport by ship', ['To make it hot', 'To colour it', 'To make fertilizer']),
      expl: 'Líquido ocupa muito menos espaço.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u9:r:lng3',
      title: '📖 What do vaporizers do in the consuming region?', main: null,
      options: opts('Turn the LNG back into vapour', ['Liquefy the gas', 'Store the gas', 'Sell the gas']),
      expl: 'Vaporizers = líquido → vapor de novo.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u9:r:lng4',
      title: '📖 Who consumes the gas at the end?', main: null,
      options: opts('Homes, businesses, and power stations', ['Only the tanker crew', 'The gas field', 'The liquefaction facility']),
      expl: 'Consumidores finais: casas, empresas, usinas.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u9:r:lng5',
      title: '📖 The storage temperature of LNG is about…', main: null,
      options: opts('-165 °C', ['+165 °C', '0 °C', '-16 °C']),
      expl: 'Frio extremo: cerca de -165 °C.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u9:f:sh1',
      title: '🧰 Descreva a forma: um tanque como uma bola é…', main: null,
      options: opts('spherical', ['cylindrical', 'cuboid', 'vertical']),
      expl: 'sphere → spherical.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u9:f:sh2',
      title: '🧰 Um tanque em pé é…', main: null,
      options: opts('vertical', ['horizontal', 'spherical', 'underground']),
      expl: 'vertical = em pé.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u9:f:sh3',
      title: '🧰 Um duto enterrado é…', main: null,
      options: opts('underground', ['above-ground', 'cuboid', 'on wheels']),
      expl: 'underground = subterrâneo.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u9:s:1',
      title: '🔤 Qual está correta?', main: null,
      options: opts('methane', ['methan', 'methanne', 'metane']),
      expl: 'methane.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u9:s:2',
      title: '🔤 Qual está correta?', main: null,
      options: opts('liquefy', ['liquify', 'liqefy', 'liquefie']),
      expl: 'liquefy (atenção: liquEfy).'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u9:s:nato1',
      title: '📻 Rádio NATO: “Lima · November · Golf” soletra a sigla…', main: null,
      options: opts('LNG', ['LMG', 'LNC', 'RNG']),
      expl: 'L-N-G = liquefied natural gas.'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '1.600 m. O combustível mais limpo da cadeia: o gás natural. Da produção ao fogão da sua casa — passando por navios a -165 °C.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — o mundo do gás:',
          cards: [
            { en: 'methane (CH₄)', pt: 'metano', def: 'Natural gas is mostly methane.', tts: 'methane' },
            { en: 'LNG', pt: 'gás natural liquefeito', def: 'Cold liquid gas — for ships.', tts: 'L N G' },
            { en: 'liquefy / vaporize', pt: 'liquefazer / vaporizar', def: 'Cool it to liquid; warm it to vapour.', tts: 'liquefy. vaporize.' },
            { en: 'consume', pt: 'consumir', def: 'Homes and power stations consume gas.' },
            { en: 'ammonia (NH₃)', pt: 'amônia', def: 'Made from gas — for fertilizer.', tts: 'ammonia' },
            { en: 'reserves', pt: 'reservas', def: 'Gas in the ground.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🔥 Por que gás?',
          textTitle: 'The clean fuel',
          text: 'Gas burns cleanly, so it is a good fuel for homes, buses, power stations — even some planes.\n\nGas-fired power stations generate electricity. Homes use gas for cooking and heating. And natural gas is used to make ammonia for fertilizer — food for plants.\n\nGas is mostly methane (CH₄). To send it far, we turn it into a very cold liquid: LNG.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u9:v:methane',
          sp: { g: 'venpt', en: 'methane', u: 9 },
          title: '📦 Gás natural é principalmente…', main: null,
          options: opts('metano', ['amônia', 'oxigênio', 'água']),
          expl: 'Mostly methane (CH₄).'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u9:r:bg1',
          title: '🔥 Por que o gás é bom combustível?', main: null,
          options: opts('porque queima de forma limpa', ['porque é colorido', 'porque é sólido', 'porque é barato de pintar']),
          expl: 'It burns cleanly.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u9:v:lng',
          sp: { g: 'venpt', en: 'LNG', u: 9 },
          title: '📦 “LNG” é…', main: null,
          options: opts('gás natural liquefeito', ['gás de cozinha comum', 'gasolina leve', 'nitrogênio']),
          expl: 'LNG = liquefied natural gas.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases sobre o gás. Modelo: "Natural gas is mostly methane. Homes use gas for cooking. LNG is very cold."',
        waText: 'Registro: 3 sentences — natural gas.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: produção e distribuição de gás, gráfico de barras, Past Simple de "be", o projeto Sakhalin II e descrição de equipamento.',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u9:v:ko1',
          title: '🔥 Ligue o uso do gás à imagem:',
          pairs: [['power station', 'electricity'], ['home', 'cooking'], ['bus', 'clean transport'], ['fertilizer', 'plants']],
          expl: 'Onde o gás entra no dia a dia.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u9:v:ko2',
          title: '🔥 A sigla CH₄ representa…', main: null,
          options: opts('methane (metano)', ['ammonia', 'LNG', 'oxygen']),
          expl: 'CH₄ = metano.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u9:v:ko3',
          title: '🔥 NH₃ é o símbolo de…', main: null,
          options: opts('ammonia (amônia)', ['methane', 'nitrogen gas only', 'water']),
          expl: 'NH₃ = amônia (para fertilizante).'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u9:g:ko4',
          title: '🔧 Monte a frase:', answer: 'Homes use gas for cooking and heating',
          expl: 'sujeito + verbo + uso.'
        }
      ]
    },

    vocab1: {
      brief: 'Produção e distribuição: os 6 passos do gás — produce, liquefy, store, transport, vaporize, consume.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 A cadeia do gás (verbo → processo):',
            cards: [
              { en: 'produce → production', pt: 'produzir → produção', def: 'The gas field produces gas.', tts: 'produce. production.' },
              { en: 'liquefy → liquefaction', pt: 'liquefazer → liquefação', def: 'The facility liquefies the gas.', tts: 'liquefy. liquefaction.' },
              { en: 'store → storage', pt: 'armazenar → armazenamento', def: 'Tanks store the LNG.', tts: 'store. storage.' },
              { en: 'transport → transportation', pt: 'transportar → transporte', def: 'Tankers transport the LNG.', tts: 'transport. transportation.' },
              { en: 'vaporize → vaporization', pt: 'vaporizar → vaporização', def: 'Vaporizers vaporize the LNG.', tts: 'vaporize. vaporization.' },
              { en: 'consume → consumption', pt: 'consumir → consumo', def: 'Homes consume the gas.', tts: 'consume. consumption.' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u9:v:chain1',
            title: '📦 Ligue o verbo ao substantivo:',
            pairs: [['produce', 'production'], ['store', 'storage'], ['transport', 'transportation'], ['consume', 'consumption']],
            expl: 'Verbo → nome do processo.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u9:v:chain2',
            title: '📦 O que acontece na região CONSUMIDORA?', main: null,
            options: opts('vaporização e consumo', ['liquefação e produção', 'perfuração', 'exploração']),
            expl: 'Consuming region: vaporize + consume.'
          }
        ];
        DF.pickN(GLOSSARY.slice(0, 8), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 9));
        });
        DF.pickN(TOOLS.slice(0, 6), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 9));
        });
        return items;
      }
    },

    num: {
      brief: 'Falando de um gráfico de barras: anos, trilhões e bilhões de m³ — os números do consumo mundial de gás.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 Números do gráfico:',
            cards: [
              { en: '1970 / 2002 (years)', pt: 'anos', def: 'nineteen seventy · two thousand and two', tts: 'nineteen seventy. two thousand and two.' },
              { en: '1.5 trillion m³', pt: '1,5 trilhão', def: 'one point five trillion cubic metres.', tts: 'one point five trillion cubic metres' },
              { en: '2,000,000,000 m³', pt: '2 bilhões', def: 'two billion cubic metres.', tts: 'two billion cubic metres' }
            ]
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u9:n:yr1',
            title: '🔢 O ano 1970 lê-se…', main: null,
            options: opts('nineteen seventy', ['one thousand nine hundred seventy', 'nineteen and seventy', 'one nine seven zero']),
            expl: 'Anos em pares: nineteen / seventy.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u9:n:yr2',
            title: '🔢 O ano 2002 lê-se…', main: null,
            options: opts('two thousand and two', ['twenty oh two years', 'two zero zero two', 'double two']),
            expl: 'BrE: two thousand and two.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u9:n:big1',
            title: '🔢 1.5 trillion escreve-se…', main: null,
            options: opts('one point five trillion', ['fifteen trillion', 'one and five trillions', 'one trillion five']),
            expl: 'Decimal com point.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 999999, rnd: rnd, diff: 2 }));
        }
        return items;
      }
    },

    lang1: { brief: 'O passado do verbo "be": was (singular) e were (plural), afirmativa, negativa e pergunta.\n\n(Formatos: EGU Unit 10 — adaptados.)', items: LANG1 },

    listen1: {
      brief: 'Passado × presente: três conversas de trabalho. Ouça e distinga is/are de was/were.',
      items: LISTEN1,
      script: SCRIPT
    },

    read1: {
      brief: 'A jornada do GNL: do campo à sua casa, passando pelo navio a -165 °C. Leia e siga a cadeia.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia a cadeia:',
          textTitle: 'The LNG journey',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    lang2: { brief: 'Passado × presente lado a lado: quando usar is/are e quando usar was/were.\n\n(Formatos: EGU Unit 10 — adaptados.)', items: LANG2 },

    speak: {
      brief: 'Descrevendo equipamento: forma (cylindrical, spherical, cuboid), orientação (vertical, horizontal) e local (above-ground, underground).',
      items: [
        {
          ui: 'choice', cat: 'fun', srsId: 'u9:f:spk1',
          title: '💬 Um tanque cilíndrico e deitado é…', main: null,
          options: opts("It's cylindrical and horizontal.", ['It cylinder and lay down.', 'It horizontal cylinder is being.', 'Cylinder it horizontal.']),
          expl: 'shape + orientation.',
          feedbackTts: "It's cylindrical and horizontal."
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u9:f:spk2',
          title: '💬 Um tanque esférico acima do solo:', main: null,
          options: opts("It's spherical and above-ground.", ['It ball on the ground up.', 'Sphere above it ground the.', 'It is spherical grounded above.']),
          expl: 'spherical + above-ground.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u9:sp:speak1', unit: 9, waSec: 'Speaking',
          title: '🎤 Descreva o equipamento:',
          target: "It's a vertical cylindrical tank, above-ground.",
          ptHint: 'Tanque cilíndrico, vertical, acima do solo.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u9:sp:speak2', unit: 9, waSec: 'Speaking',
          title: '🎤 Outra forma:',
          target: "The pipeline is horizontal and underground.",
          ptHint: 'O duto é horizontal e subterrâneo.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave a descrição de 3 equipamentos: forma + orientação + local (ex.: "It\'s a spherical tank, above-ground").',
        waText: 'Registro: descrição de 3 equipamentos.'
      }
    },

    write: {
      brief: 'Descrevendo equipamento por escrito: juntar forma, orientação e local numa frase clara.',
      items: [
        {
          ui: 'choice', cat: 'gra', srsId: 'u9:g:wr1',
          title: '✍️ Ordem correta dos adjetivos:', main: null,
          options: opts('a large vertical steel tank', ['a vertical large steel tank', 'a steel large vertical tank', 'a tank vertical large steel']),
          expl: 'Ordem: tamanho → forma/orientação → material → substantivo.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u9:g:wr2',
          title: '✍️ Complete:', main: 'The inner tank ___ steel and the outer tank ___ concrete. (past)',
          options: opts('was · was', ['were · were', 'is · is', 'was · were']),
          expl: 'Cada tanque (singular) → was.'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u9:sp:wr3',
          title: '🔤 Qual está correta?', main: null,
          options: opts('cylindrical', ['cilindrical', 'cylindricall', 'cylindracal']),
          expl: 'cylindrical.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Writing — descreva um equipamento',
        brief: 'Descreva um tanque ou vaso em 3 frases: forma, orientação, local — e uma no passado ("It was installed in…").',
        btn: '✍️ Escrever e enviar',
        fields: [
          { label: 'Shape + orientation', ph: 'ex.: It\'s a spherical tank.', rows: 2 },
          { label: 'Location', ph: 'ex.: It\'s above-ground, near the jetty.', rows: 2 },
          { label: 'One sentence in the past', ph: 'ex.: It was built in 2019.', rows: 2 }
        ]
      }
    },

    job: {
      brief: "It's my job: Kemi Adeyemi produz biogás para a comunidade — energia limpa a partir de resíduos, transformando vidas.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Kemi Adeyemi — biogas technician',
          text: "I'm Kemi Adeyemi, and I build small biogas plants. Biogas comes from organic matter — rotting plants and animal waste. When these things rot without oxygen, they make methane.\n\nI work in a rural area where most people have no gas and no electricity. But most families have cows, so we have plenty of animal waste. The dung from two or three cows is enough to make gas for cooking and lighting for one house.\n\nWe now have more than 300 small biogas plants, and we're building more. I'm happy: we're making life better with waste. Amazing."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u9:r:job1',
          title: '👷 Where does biogas come from?', main: null,
          options: opts('Organic matter — rotting plants and animal waste', ['Underground reserves', 'The sea', 'A refinery']),
          expl: 'Matéria orgânica em decomposição → metano.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u9:r:job2',
          title: '👷 Biogas is mostly…', main: null,
          options: opts('methane', ['ammonia', 'oxygen', 'water']),
          expl: 'Como o gás natural, biogás é metano.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u9:r:job3',
          title: '👷 What is enough to make gas for one house?', main: null,
          options: opts('The dung from two or three cows', ['One hundred cows', 'A large gas field', 'A tanker of LNG']),
          expl: '2-3 vacas bastam para cozinhar e iluminar uma casa.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u9:r:job4',
          title: '👷 How many biogas plants are there now?', main: null,
          options: opts('More than 300', ['Only 3', 'Exactly 30', 'None yet']),
          expl: 'More than 300, and growing.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: você gostaria do trabalho da Kemi? O biogás funcionaria na sua região? ("Biogas can/can\'t work here because…")',
        waText: 'Registro: opinião sobre biogás.'
      }
    },

    project: {
      brief: 'Missão de pesquisa: fontes de energia que NÃO vêm do petróleo. Descubra alternativas e registre.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧪 Project — Energy beyond petroleum',
          textTitle: 'Sua missão',
          text: 'O biogás é uma fonte de energia que não vem do petróleo. Pesquise outras (pode ser em português) e escreva em inglês simples:\n\n1. Name two energy sources that are not petroleum.\n2. One sentence about each: what is it, and where is it used?\n\nEx.: "Solar power comes from the sun. It is used on rooftops."',
          nextLabel: 'Preencher a entrega ▸'
        }
      ],
      task: {
        type: 'project',
        title: '🧪 Entrega do Project',
        brief: 'Preencha e envie ao mentor:',
        btn: '🧪 Preencher e enviar no WhatsApp',
        fields: [
          { label: 'Energy source 1', ph: 'ex.: Solar power — comes from the sun', rows: 2 },
          { label: 'Energy source 2', ph: 'ex.: Wind power — …', rows: 2 }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Natural Gas.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 9 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 9:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u9:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 9 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 9));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I can talk about gas production and distribution.',
    'I can talk about a bar chart.',
    'I can use the Past Simple of be (was/were).',
    'I can understand the difference between past and present.',
    'I can describe equipment (shape, orientation, location).'
  ];

  DF.UNIT_DATA[9] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'qty'], max: 999999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
