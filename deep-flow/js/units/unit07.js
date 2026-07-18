/* DEEP FLOW — units/unit07.js
   UNIT 7 — Pipes and Pipelines (1200 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U7 (p.40-45) — objetivos, nada
   copiado; gramática = countable/uncountable + much/many (EGU Units 68-70),
   adaptada; enriquecimento OFFSHORE1 (frases de tubulação: flange, clamp),
   reescrito. Personagem autoral: Nando Prado (welder/soldador). PT: OFFSHORE2. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'diameter', pt: 'diâmetro', def: 'the distance across a pipe (outside or inside/bore).' },
    { en: 'radius', pt: 'raio', def: 'half of the diameter.' },
    { en: 'circumference', pt: 'circunferência', def: 'the distance around the pipe.' },
    { en: 'length', pt: 'comprimento', def: 'how long the pipe is.' },
    { en: 'thickness', pt: 'espessura', def: 'the pipe wall thickness.' },
    { en: 'volume', pt: 'volume', def: 'how much fluid a pipe can hold: V = πr²L.' },
    { en: 'flow', pt: 'fluxo / vazão', def: 'the movement of oil or gas through the pipe.' },
    { en: 'deposit', pt: 'depósito / incrustação', def: 'material inside a pipe that reduces flow.' },
    { en: 'inspection', pt: 'inspeção', def: 'a careful check of the pipe.' },
    { en: 'regulator', pt: 'regulador', def: 'it controls pressure from a gas cylinder.' },
    { en: 'block', pt: 'bloquear / entupir', def: 'deposits can block the pipeline.' },
    { en: 'cause', pt: 'causar', def: 'deposits cause problems.' },
    { en: 'design', pt: 'projetar', def: 'engineers design cleaning tools.' },
    { en: 'inspect', pt: 'inspecionar', def: 'we inspect pipes for damage.' },
    { en: 'reduce', pt: 'reduzir', def: 'deposits reduce the oil flow.' }
  ];

  const TOOLS = [
    { en: 'valve', pt: 'válvula' },
    { en: 'flange', pt: 'flange (junta flangeada)' },
    { en: 'elbow', pt: 'curva / cotovelo' },
    { en: 'tee', pt: 'tê (conexão em T)' },
    { en: 'flow meter', pt: 'medidor de vazão' },
    { en: 'pipe support', pt: 'suporte de tubo' },
    { en: 'pig', pt: 'pig (dispositivo de limpeza)' },
    { en: 'welder', pt: 'soldador(a)' },
    { en: 'spark', pt: 'faísca' },
    { en: 'smoke', pt: 'fumaça' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: countable / uncountable ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu1',
      title: '🔧 Contável (a/some/many) ou incontável (some/much)?', main: 'There\'s ___ water on the floor.',
      options: opts('some', ['a', 'many', 'a many']),
      expl: 'water = incontável → some water (não “a water”).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu2',
      title: '🔧 Complete:', main: 'How ___ cylinders are there?',
      options: opts('many', ['much', 'a', 'some of']),
      expl: 'cylinders (contável, plural) → how many.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu3',
      title: '🔧 Complete:', main: 'How ___ oxygen have we got?',
      options: opts('much', ['many', 'a', 'some']),
      expl: 'oxygen = incontável → how much.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu4',
      title: '🔧 Escolha certo:', main: 'Hot sparks can burn ___ .',
      options: opts('clothes', ['a clothes', 'a cloth much', 'clothe']),
      expl: 'clothes: sempre plural, sem “a”.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu5',
      title: '🔧 Contável ou incontável?', main: 'Smoke from welding can be dangerous.',
      options: opts('incontável (não use “a smoke”)', ['contável (a smoke)', 'sempre plural (smokes)', 'nenhum']),
      expl: 'smoke = incontável.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu6',
      title: '🔧 much ou many?', main: 'There are too ___ bolts! We only need 100.',
      options: opts('many', ['much', 'a', 'some much']),
      expl: 'bolts (contável) → too many.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u7:g:ord1',
      title: '🔧 Monte a pergunta:', answer: 'How much petrol is there',
      expl: 'How much + incontável.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: mais countable/uncountable ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu7',
      title: '🔧 Complete:', main: 'We switch off ___ equipment.',
      options: opts('the (equipment)', ['an equipment', 'many equipment', 'a equipments']),
      expl: 'equipment = incontável (não “an equipment”).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu8',
      title: '🔧 Complete:', main: 'There are six ___ for welders.',
      options: opts('hazards', ['hazard', 'a hazard', 'much hazard']),
      expl: 'six + contável plural → hazards.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu9',
      title: '🔧 Boiling water makes ___ .', main: null,
      options: opts('steam (incontável)', ['a steam', 'steams', 'many steam']),
      expl: 'steam = incontável.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu10',
      title: '🔧 Complete:', main: 'There\'s too ___ water on the floor. We can\'t weld.',
      options: opts('much', ['many', 'a', 'few']),
      expl: 'water incontável → too much.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu11',
      title: '🔧 Complete:', main: 'That\'s too ___ people for one truck.',
      options: opts('many', ['much', 'a lot', 'a many']),
      expl: 'people (contável) → too many.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u7:g:ord2',
      title: '🔧 Monte a frase:', answer: 'There are some deposits in the pipe',
      expl: 'some + contável plural.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u7:g:cu12',
      title: '🔧 Escolha certo:', main: 'I have some ___ about the leak.',
      options: opts('information (incontável)', ['informations', 'an information', 'many information']),
      expl: 'information = sempre incontável.'
    }
  ];

  // ---------- LISTENING: perigos da soldagem (autoral) ----------
  const SCRIPT =
    'Welding safety — health and safety officer\n\n' +
    'Welders, six hazards today. First, arc rays — cover your skin and eyes. Second, arc sparks — keep the work area clean and tidy, no pockets. Third, smoke — use the ventilation fan. Fourth, electric shock — always weld dry, never stand in water. Fifth, gas cylinders — move them safely, never drop them. Sixth, trips and falls — watch where you walk. Wear your helmet, leather gloves, and leather shoes.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u7:l:weld1',
      title: '🎧 Contra os arc rays (raios do arco), o que fazer?',
      tts: dlg(['Arc rays — cover your skin and eyes.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Arc rays — cover your skin and eyes.”',
      options: opts('cobrir pele e olhos', ['abrir a janela', 'usar mais água', 'gritar “fogo”']),
      expl: 'Arc rays queimam pele e olhos, como sol forte.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u7:l:weld2',
      title: '🎧 Contra o choque elétrico, a regra é…',
      tts: dlg(['Electric shock — always weld dry, never stand in water.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Always weld dry, never stand in water.”',
      options: opts('soldar seco, nunca na água', ['soldar na chuva', 'molhar as luvas', 'segurar o cabo com a mão']),
      expl: 'Weld dry! Água + eletricidade = choque.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u7:l:weld3',
      title: '🎧 Os cilindros de gás devem ser…',
      tts: dlg(['Gas cylinders — move them safely, never drop them.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Move them safely, never drop them.”',
      options: opts('movidos com cuidado, nunca derrubados', ['empilhados no fogo', 'abertos ao sol', 'usados como banco']),
      expl: 'Cilindro derrubado pode explodir.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u7:l:weld4',
      title: '🎧 Quais EPIs o soldador usa?',
      tts: dlg(['Wear your helmet, leather gloves, and leather shoes.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Wear your helmet, leather gloves, and leather shoes.”',
      options: opts('capacete + luvas e sapatos de couro', ['óculos de sol', 'boné e chinelo', 'nenhum EPI']),
      expl: 'Couro protege de faíscas e não derrete.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u7:f:clamp',
      title: '📻 Na tubulação (enriquecimento OFFSHORE1): “Tighten the clamp” pede para…', main: null,
      options: opts('apertar a braçadeira', ['soltar o tubo', 'abrir a válvula', 'chamar o guindaste']),
      expl: 'tighten = apertar · clamp = braçadeira. (Adaptado do OFFSHORE1.)',
      feedbackTts: 'Tighten the clamp.'
    }
  ];

  // ---------- READING A-B: limpeza de dutos com pig (autoral) ----------
  const READ_TEXT =
    'Cleaning a pipeline with a pig\n\n' +
    'Deposits inside a pipeline cause problems: they reduce the oil flow, and sometimes they block the pipeline completely. This slows production.\n\n' +
    'To clean the pipe, workers use a pipeline inspection gauge — often called a "pig". Here is how it works:\n\n' +
    'A launcher and a receiver are fitted to the pipeline. The pig goes into the pipe, and the oil pressure pushes it along. Discs and brushes on the pig clean the wall and push the deposits out. Finally, workers take the pig out at the receiver.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u7:r:pig1',
      title: '📖 What do deposits do to the oil flow?', main: null,
      options: opts('They reduce it (and can block the pipe)', ['They increase it', 'They clean it', 'Nothing']),
      expl: 'Deposits reduce flow → menos produção.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u7:r:pig2',
      title: '📖 What pushes the pig along the pipe?', main: null,
      options: opts('The oil pressure', ['A motor inside it', 'A worker walking', 'The wind']),
      expl: 'A pressão do óleo empurra o pig.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u7:r:pig3',
      title: '📖 What cleans the pipe wall?', main: null,
      options: opts('Discs and brushes on the pig', ['Hot water only', 'The welder', 'The flow meter']),
      expl: 'Discos e escovas raspam a parede.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u7:r:pig4',
      title: '📖 Where do workers take the pig out?', main: null,
      options: opts('At the receiver', ['At the launcher', 'At the airport', 'At the refinery gate']),
      expl: 'Launcher = entrada · receiver = saída.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u7:r:pig5',
      title: '📖 A “quotation” is…', main: null,
      options: opts('a price for a job', ['a famous sentence', 'a type of pipe', 'a cleaning brush']),
      expl: 'quotation = orçamento/preço de um serviço.'
    }
  ];

  // ---------- READING C-D: isométricos e MTO (autoral) ----------
  const READ2 = [
    {
      ui: 'read', cat: 'rea', info: true,
      title: '📖 Desenhos que engenheiros leem',
      textTitle: 'Isometrics and MTOs',
      text: 'An isometric drawing shows a pipe in three dimensions (height, width, depth) on a flat page.\n\nWith it comes a Material Take Off (MTO): a list of all the materials and parts for the pipeline — sizes, descriptions, and quantities.\n\nExample line: 2" 90° BW LR SCH 80 × 2 means two 2-inch, 90-degree elbows.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u7:r:iso1',
      title: '📖 An MTO is…', main: null,
      options: opts('a list of materials and parts', ['a type of valve', 'a cleaning pig', 'a safety helmet']),
      expl: 'Material Take Off = lista de material.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u7:r:iso2',
      title: '📖 In the MTO, the last column (TOTAL) shows…', main: null,
      options: opts('the quantity of each part', ['the colour', 'the price in dollars', 'the weight']),
      expl: 'TOTAL = quanto/quantos de cada peça.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u7:r:iso3',
      title: '📖 “4", 3", 2"” são…', main: null,
      options: opts('tamanhos (sizes) de tubo em polegadas', ['preços', 'datas', 'temperaturas']),
      expl: '" = polegada (inch); indicam o diâmetro.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u7:f:loc1',
      title: '🧰 Descrevendo o duto: “The pipeline goes ___ for about 100 metres.”', main: null,
      options: opts('south', ['souths', 'to south the', 'in the south of go']),
      expl: 'Direção: goes south / north / east / west.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u7:f:loc2',
      title: '🧰 “At the motorway, the pipe goes ___.”', main: null,
      options: opts('underground', ['under the ground floor', 'down the earth in', 'below to earth']),
      expl: 'underground = enterrado, sob a via.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u7:f:weld',
      title: '🧰 O que a soldagem produz?', main: null,
      options: opts('smoke, sparks, and arc rays', ['water and ice', 'wind and rain', 'sugar and salt']),
      expl: 'Fumaça, faíscas e raios do arco: os 3 perigos.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u7:s:1',
      title: '🔤 Qual está correta?', main: null,
      options: opts('diameter', ['diametre', 'diamiter', 'dyameter']),
      expl: 'diameter.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u7:s:2',
      title: '🔤 Qual está correta?', main: null,
      options: opts('circumference', ['circunference', 'circomference', 'circumfrence']),
      expl: 'circumference — com M antes do F.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u7:s:nato1',
      title: '📻 Rádio NATO: “Papa · India · Golf” soletra…', main: null,
      options: opts('PIG', ['PIN', 'BIG', 'PIT']),
      expl: 'P-I-G = pig (dispositivo de limpeza).'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '1.200 m. As artérias da indústria: tubos e dutos que levam óleo e gás por centenas de km. Conheça as peças e como mantê-las limpas.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — as peças da tubulação:',
          cards: [
            { en: 'valve', pt: 'válvula', def: 'Opens and closes the flow.' },
            { en: 'flange', pt: 'flange', def: 'Bolts two pipes together.' },
            { en: 'elbow', pt: 'curva', def: 'Turns the pipeline in a new direction.' },
            { en: 'tee', pt: 'tê', def: 'Splits the flow into two.' },
            { en: 'flow meter', pt: 'medidor de vazão', def: 'Measures how much passes.', tts: 'flow meter' },
            { en: 'pig', pt: 'pig de limpeza', def: 'Cleans the pipe from inside.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🔗 Por que dutos importam',
          textTitle: 'The arteries of the industry',
          text: 'Pipelines carry oil and gas from the field to the refinery, and from the refinery to the market — sometimes for thousands of kilometres.\n\nA pipeline is more than a tube: it has valves, flanges, elbows, tees, flow meters, and supports. Engineers inspect and clean them so the flow never stops.\n\nWhen deposits build up inside, a pig cleans the pipe from within.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u7:v:valve',
          sp: { g: 'venpt', en: 'valve', u: 7 },
          title: '📦 A válvula serve para…', main: null,
          options: opts('abrir e fechar o fluxo', ['medir a temperatura', 'soldar tubos', 'iluminar o duto']),
          expl: 'valve controla o fluxo.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u7:r:bg1',
          title: '🔗 O que limpa o duto por dentro?', main: null,
          options: opts('o pig', ['o flange', 'o tee', 'a fumaça']),
          expl: 'Pig = dispositivo de inspeção e limpeza.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u7:v:flange',
          sp: { g: 'venpt', en: 'flange', u: 7 },
          title: '📦 “Flange” é…', main: null,
          options: opts('a junta flangeada (une dois tubos)', ['a broca', 'a bomba', 'a torre']),
          expl: 'flange = anel de conexão parafusado.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases sobre dutos: valve, pig, flow. Modelo: "A valve controls the flow. A pig cleans the pipe. Deposits reduce the flow."',
        waText: 'Registro: 3 sentences — pipelines.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: inspeção e limpeza, localização do duto, perigos da soldagem, contáveis e incontáveis, medindo tubos e isométricos.',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u7:v:ko1',
          title: '🔗 Ligue a peça à função:',
          pairs: [['valve', 'controls flow'], ['elbow', 'turns the pipe'], ['tee', 'splits the flow'], ['flow meter', 'measures flow']],
          expl: 'As peças e seus papéis.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u7:v:ko2',
          title: '🔗 O que une dois tubos com parafusos?', main: null,
          options: opts('a flanged joint', ['an elbow', 'a flow meter', 'a pig']),
          expl: 'Flanged joint = junta flangeada.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u7:v:ko3',
          title: '🔗 Um “pipe support” serve para…', main: null,
          options: opts('sustentar o tubo', ['medir o fluxo', 'limpar por dentro', 'abrir o fluxo']),
          expl: 'support = suporte que segura o tubo.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u7:g:ko4',
          title: '🔧 Monte a frase:', answer: 'There is a valve near the tee',
          expl: 'There is + singular + lugar.'
        }
      ]
    },

    read1: {
      brief: 'Limpando o duto com um pig: como um dispositivo viaja pela pressão do óleo e raspa as incrustações. Leia e responda.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia o serviço:',
          textTitle: 'Inspection and cleaning',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    speak: {
      brief: 'Descrevendo um duto: você guia um colega pelo traçado — direção, peças e travessias.',
      items: [
        {
          ui: 'choice', cat: 'fun', srsId: 'u7:f:spk1',
          title: '💬 O duto atravessa o rio. Você diz:', main: null,
          options: opts('There\'s one section of pipe over the river.', ['Pipe is on top the water river.', 'The river has a pipe inside up.', 'Over river pipe there one.']),
          expl: 'over the river = sobre o rio.',
          feedbackTts: "There's one section of pipe over the river."
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u7:f:spk2',
          title: '💬 Há um medidor antes da floresta:', main: null,
          options: opts("There's a flow meter just before the forest.", ['Meter is forest before the flow.', 'Before forest a flowing meter is.', 'The forest meters flow before.']),
          expl: 'just before = logo antes.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u7:sp:speak1', unit: 7, waSec: 'Speaking',
          title: '🎤 Descreva o traçado:',
          target: 'The pipeline goes south for about one hundred metres.',
          ptHint: 'O duto segue ao sul por cerca de 100 metros.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u7:sp:speak2', unit: 7, waSec: 'Speaking',
          title: '🎤 Aponte uma peça:',
          target: "There's an elbow, then the pipeline goes east.",
          ptHint: 'Há uma curva, depois o duto segue a leste.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Descreva um trajeto de duto em 3-4 frases: direções, peças (valve, elbow, tee) e uma travessia (over the river / underground).',
        waText: 'Registro: descrição de um duto.'
      }
    },

    vocab1: {
      brief: 'Soldagem: unir metais com calor — e os três perigos (smoke, sparks, arc rays) e sua proteção.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 O mundo do soldador:',
            cards: [
              { en: 'welder', pt: 'soldador(a)', def: 'Joins two pieces of metal with heat.' },
              { en: 'arc', pt: 'arco (faísca quente)', def: 'The very hot spark that melts the metal.' },
              { en: 'spark', pt: 'faísca', def: 'Sparks can cause fires.' },
              { en: 'smoke', pt: 'fumaça', def: 'Can hurt eyes, nose, and breathing.' },
              { en: 'arc rays', pt: 'raios do arco', def: 'Burn skin and eyes like strong sun.', tts: 'arc rays' },
              { en: 'gas cylinder', pt: 'cilindro de gás', def: 'Move it safely — it can explode.', tts: 'gas cylinder' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u7:v:weld1',
            title: '📦 Ligue o perigo à proteção:',
            pairs: [['arc rays', 'cover skin and eyes'], ['smoke', 'use ventilation'], ['electric shock', 'weld dry'], ['sparks', 'keep area clean']],
            expl: 'Cada perigo, sua precaução.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u7:v:weld2',
            title: '📦 Por que o couro protege bem?', main: null,
            options: opts('é forte e não derrete', ['é bonito', 'é barato', 'é leve']),
            expl: 'Leather é forte e não derrete com faíscas.'
          }
        ];
        DF.pickN(GLOSSARY.slice(0, 10), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 7));
        });
        DF.pickN(GLOSSARY.slice(10), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 7));
        });
        return items;
      }
    },

    job: {
      brief: "It's my job: Nando Prado solda seções de duto — o welder da equipe de tubulação.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Nando Prado — welder',
          text: "I'm Nando Prado, a welder. I work closely with pipe-fitters. First, the pipe-fitters read the plans and prepare the pipes. Then I join the sections of pipe with heat — that's welding.\n\nAfter the welding, the fitters assemble the pipes, and inspectors inspect them. If the inspection is good, workers paint the pipes to protect them.\n\nMy job has three big hazards: arc rays, sparks, and smoke. So I always wear my helmet, leather gloves, and leather shoes. Safety is part of the craft."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u7:r:job1',
          title: '👷 Who does Nando work closely with?', main: null,
          options: opts('Pipe-fitters', ['Geologists', 'Cooks', 'Pilots']),
          expl: 'Welder + pipe-fitters trabalham juntos.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u7:r:job2',
          title: '👷 What happens after the welding?', main: null,
          options: opts('Fitters assemble and inspectors inspect', ['Nothing', 'They sell the pipe', 'They melt it again']),
          expl: 'Soldar → montar → inspecionar → pintar.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u7:r:job3',
          title: '👷 What do workers do after inspection (if good)?', main: null,
          options: opts('Paint the pipes', ['Break the pipes', 'Bury the inspectors', 'Go home']),
          expl: 'Pintam para proteger da corrosão.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u7:r:job4',
          title: '👷 What three hazards does he mention?', main: null,
          options: opts('Arc rays, sparks, smoke', ['Rain, wind, snow', 'Noise, dust, heat', 'Water, ice, fog']),
          expl: 'Os 3 perigos da soldagem.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: os passos de montar um duto, em ordem ("First the pipe-fitters… Then the welder… After that…").',
        waText: 'Registro: os passos da montagem de um duto.'
      }
    },

    listen1: {
      brief: 'DDS da soldagem: seis perigos e suas precauções. Ouça o oficial de segurança e proteja-se.',
      items: LISTEN1,
      script: SCRIPT
    },

    lang1: { brief: 'Contáveis × incontáveis: a/some/many para o que se conta; some/much para o que não se conta. Água, fumaça, informação.\n\n(Formatos: EGU Units 68-70 — adaptados.)', items: LANG1 },

    num: {
      brief: 'Medindo tubos: diâmetro, raio, espessura, volume — e a fórmula V = π r² L falada em voz alta.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 As medidas do tubo:',
            cards: [
              { en: 'diameter (D) / radius (r)', pt: 'diâmetro / raio', def: 'r = D ÷ 2.', tts: 'diameter and radius' },
              { en: 'thickness (S)', pt: 'espessura da parede', def: 'The pipe wall thickness.', tts: 'thickness' },
              { en: 'V = π r² L', pt: 'volume', def: 'pi times radius squared times length.', tts: 'V equals pi r squared times length' },
              { en: 'π = 3.14', pt: 'pi', def: 'point one four — the magic number.', tts: 'pi is three point one four' }
            ]
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u7:n:calc1',
            title: '🔢 Se D = 80 cm, quanto é o raio (r)?', main: null,
            options: opts('40 cm', ['160 cm', '80 cm', '20 cm']),
            expl: 'r = D ÷ 2 = 40 cm.'
          },
          {
            ui: 'type', cat: 'num', srsId: 'u7:n:calc2',
            title: '🎧 Calcule V: L=12, r=0.5, π=3.14 (só o número em m³):',
            tts: 'Three point one four times point five times point five times twelve.',
            ttsLabel: '🔊 Ouvir', showIfNoTTS: '3.14 × 0.5 × 0.5 × 12',
            answers: ['9.42', '9,42'], placeholder: 'm³',
            expl: '3.14 × 0.25 × 12 = 9.42 m³.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u7:n:calc3',
            title: '🔢 “296.5 cm” lê-se…', main: null,
            options: opts('two hundred and ninety-six point five', ['two ninety-six five', 'twenty-nine sixty-five', 'two hundred ninety-six comma five']),
            expl: 'Decimais com “point”.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 9999, rnd: rnd, diff: 2 }));
        }
        return items;
      }
    },

    read2: {
      brief: 'Isométricos e MTO: os desenhos 3D e as listas de material que todo tubulador aprende a ler.',
      items: READ2
    },

    lang2: { brief: 'Mais contáveis e incontáveis: equipment, information, steam — as palavras que enganam o brasileiro.\n\n(Formatos: EGU Units 68-70 — adaptados.)', items: LANG2 },

    write: {
      brief: 'Escrevendo com precisão: números decimais, unidades e a fórmula do volume por escrito.',
      items: [
        {
          ui: 'choice', cat: 'spl', srsId: 'u7:sp:w1',
          title: '✍️ “9.42 m³” escreve-se por extenso:', main: null,
          options: opts('nine point four two cubic metres', ['nine comma forty-two', 'nine and forty-two', 'ninety-four point two']),
          expl: 'Decimal com point; m³ = cubic metres.'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u7:sp:w2',
          title: '✍️ Qual está escrito corretamente?', main: null,
          options: opts('thickness', ['thikness', 'thicknes', 'thiknes']),
          expl: 'thickness — CK + NESS.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u7:r:w3',
          title: '✍️ Num MTO, “90° BW LR SCH 80 × 2” significa…', main: null,
          options: opts('duas curvas de 90 graus, tipo BW LR, SCH 80', ['90 tubos retos', 'nada', 'temperatura de 90 graus']),
          expl: '× 2 = quantidade: dois cotovelos.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Writing — medindo um tubo',
        brief: 'Escreva 3 frases sobre um tubo: comprimento, diâmetro e volume (use point para decimais).',
        btn: '✍️ Escrever e enviar',
        fields: [
          { label: 'Length', ph: 'ex.: The pipe is twelve metres long.', rows: 2 },
          { label: 'Diameter / radius', ph: 'ex.: The diameter is eighty centimetres.', rows: 2 },
          { label: 'Volume', ph: 'ex.: The volume is nine point four two cubic metres.', rows: 2 }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Pipes and Pipelines.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 7 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 7:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u7:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 7 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 7));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I can describe the location of a pipeline.',
    'I can understand welding hazards and precautions.',
    'I can use countable and uncountable nouns (much/many).',
    'I can talk about measuring pipes.',
    'I can describe a pipeline system.',
    'I can read an isometric drawing and an MTO.'
  ];

  DF.UNIT_DATA[7] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1.concat(READ2.filter(function (x) { return x.ui === 'choice'; })),
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'qty'], max: 9999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
