/* DEEP FLOW — units/unit15.js
   UNIT 15 — Petrochemicals (3000 m · reservatório) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U15 (p.100-105) — objetivos,
   nada copiado; gramática = conectivos and/but/because (EGU Unit 96 e afins),
   adaptada; PT técnico: OFFSHORE2. Personagem autoral: Manu Castro (test
   technician). Textos autorais sobre a história e as fábricas petroquímicas. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'petrochemical', pt: 'petroquímico', def: 'a chemical made from petroleum or petroleum gas.' },
    { en: 'polymer', pt: 'polímero', def: 'many single molecules joined into a chain.' },
    { en: 'monomer', pt: 'monômero', def: 'a single molecule — the building block.' },
    { en: 'molecule', pt: 'molécula', def: 'a tiny piece of a substance.' },
    { en: 'plastics', pt: 'plásticos', def: 'the most famous petrochemical products.' },
    { en: 'polyethylene', pt: 'polietileno', def: 'a polymer used for packaging and bottles.' },
    { en: 'carbon black', pt: 'negro de fumo', def: 'a colouring — now used mostly in car tyres.' },
    { en: 'synthetic', pt: 'sintético (feito pelo homem)', def: 'man-made, not natural.' },
    { en: 'man-made', pt: 'artificial', def: 'made by people, like nylon.' },
    { en: 'plentiful', pt: 'abundante', def: 'easy to find, in large amounts.' },
    { en: 'inexpensive', pt: 'barato', def: 'low in price.' },
    { en: 'prehistoric', pt: 'pré-histórico', def: 'from a very long time ago.' },
    { en: 'supplier', pt: 'fornecedor', def: 'a company that sells you materials.' },
    { en: 'requisition', pt: 'requisição', def: 'a form to ask the buyer for materials.' },
    { en: 'package', pt: 'embalar', def: 'put a product into bags or boxes.' }
  ];

  const TOOLS = [
    { en: 'nylon', pt: 'náilon' },
    { en: 'PVC', pt: 'PVC' },
    { en: 'polystyrene', pt: 'poliestireno' },
    { en: 'rubber', pt: 'borracha' },
    { en: 'resin', pt: 'resina' },
    { en: 'fibre', pt: 'fibra' },
    { en: 'specialize', pt: 'especializar-se' },
    { en: 'tensile test', pt: 'ensaio de tração' },
    { en: 'impact test', pt: 'ensaio de impacto' },
    { en: 'bend test', pt: 'ensaio de dobra' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: and / but / because ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c1',
      title: '🔧 Informação adicional (+):', main: 'The factory was built in 1872, ___ it made carbon black.',
      options: opts('and', ['but', 'because', 'so not']),
      expl: 'and = informação adicional.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c2',
      title: '🔧 Causa/razão:', main: 'People throw away a lot of plastic ___ it is inexpensive.',
      options: opts('because', ['and', 'but', 'so']),
      expl: 'because = razão.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c3',
      title: '🔧 Contraste (inesperado):', main: 'Plastics are very useful, ___ they also have problems.',
      options: opts('but', ['and', 'because', 'so']),
      expl: 'but = contraste.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c4',
      title: '🔧 Complete:', main: 'I was late this morning ___ I had a problem with my car.',
      options: opts('because', ['and', 'but', 'or']),
      expl: 'razão do atraso → because.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c5',
      title: '🔧 Complete:', main: 'We started at 9.00 ___ we finished at 4.00.',
      options: opts('and', ['but', 'because', 'so not']),
      expl: 'Duas informações em sequência → and.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c6',
      title: '🔧 Complete:', main: 'I want to go to the meeting, ___ I really don\'t have time.',
      options: opts('but', ['and', 'because', 'so']),
      expl: 'Contraste → but.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u15:g:ord1',
      title: '🔧 Monte a frase:', answer: 'Carbon black is cheap because gas is plentiful',
      expl: 'because = razão.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: and / but / because (mais) ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c7',
      title: '🔧 Complete:', main: 'We replaced the gasket ___ it\'s running much better.',
      options: opts('and', ['but', 'because', 'or']),
      expl: 'Resultado positivo em sequência → and.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c8',
      title: '🔧 Complete:', main: 'We cleaned the spark plug, ___ it\'s still making a funny noise.',
      options: opts('but', ['and', 'because', 'so']),
      expl: 'Resultado inesperado → but.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c9',
      title: '🔧 Complete:', main: 'We aren\'t using this tank ___ it\'s damaged.',
      options: opts('because', ['and', 'but', 'so']),
      expl: 'Razão → because.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c10',
      title: '🔧 Complete:', main: 'I can\'t replace the lamp today ___ I haven\'t got a new one.',
      options: opts('because', ['and', 'but', 'or']),
      expl: 'Razão → because.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c11',
      title: '🔧 Complete:', main: 'We\'ll tidy up the workshop today ___ start the repair tomorrow.',
      options: opts('and', ['but', 'because', 'so not']),
      expl: 'Duas ações em sequência → and.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u15:g:ord2',
      title: '🔧 Monte a frase:', answer: 'Plastics are useful but they pollute the oceans',
      expl: 'but = contraste inesperado.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u15:g:c12',
      title: '🔧 Escolha o conector certo:', main: 'Carbon black wasn\'t new, ___ using a factory was a new way of making it.',
      options: opts('but', ['and', 'because', 'or']),
      expl: 'Contraste → but.'
    }
  ];

  // ---------- LISTENING: fábrica e produto (autoral) ----------
  const SCRIPT =
    'Factory and product description\n\n' +
    'Company: Costa Verde Petrochemicals.\n' +
    'Plant: the Riomar Factory, near the coast.\n' +
    'Main products: polyethylene and polypropylene.\n\n' +
    'Polyethylene: about eighteen million tonnes per year — used as packaging material.\n' +
    'Polypropylene: about fifteen million tonnes per year — used for ropes, car parts, and containers.\n\n' +
    'The company specializes in spunbond composite fibre, which is used to make floor carpets for cars, medical packaging, and very strong envelopes.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 440 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u15:l:fac1',
      title: '🎧 Quais são os produtos principais?',
      tts: dlg(['Main products: polyethylene and polypropylene.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Main products: polyethylene and polypropylene.”',
      options: opts('polietileno e polipropileno', ['gasolina e diesel', 'aço e vidro', 'algodão e lã']),
      expl: 'Polyethylene + polypropylene.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u15:l:fac2',
      title: '🎧 Quantos milhões de toneladas de polietileno por ano? (só o número)',
      tts: dlg(['Polyethylene: about eighteen million tonnes per year.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Polyethylene: about eighteen million tonnes per year.”',
      answers: ['18'], placeholder: 'milhões',
      expl: 'eighteen million = 18.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u15:l:fac3',
      title: '🎧 Para que serve o polipropileno?',
      tts: dlg(['Polypropylene is used for ropes, car parts, and containers.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Polypropylene is used for ropes, car parts, and containers.”',
      options: opts('cordas, peças de carro e recipientes', ['comida e água', 'medicamentos apenas', 'combustível de avião']),
      expl: 'ropes, car parts, containers.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u15:l:fac4',
      title: '🎧 Em que a empresa se especializa?',
      tts: dlg(['The company specializes in spunbond composite fibre.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The company specializes in spunbond composite fibre.”',
      options: opts('fibra composta spunbond', ['gás natural', 'petróleo cru', 'asfalto']),
      expl: 'specialize in = especializar-se em.'
    }
  ];

  // ---------- READING: história dos petroquímicos (autoral) ----------
  const READ_TEXT =
    'From natural to synthetic\n\n' +
    'Before oil and gas were freely available, people made things from natural materials. Clothes came from cotton, wool, and leather. Containers came from metal, glass, and clay. Paints and cosmetics came from plants and minerals.\n\n' +
    'The first petrochemical factory was built in 1872, and it made carbon black from natural gas. Carbon black was not new, but using a factory was a new way of making it — cheaply, because natural gas was plentiful and inexpensive.\n\n' +
    'In the early 1900s the business grew. Refineries created chemical by-products, and companies learned to change the hydrocarbon molecules. From the 1920s to the 1940s, man-made products like nylon, polystyrene, and PVC were developed.\n\n' +
    'Today petrochemicals are everywhere. They are very useful, but they also have problems: plastics don\'t rot like natural materials, and plastic bags pollute the oceans and kill wildlife.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u15:r:h1',
      title: '📖 What did people make clothes from before oil and gas?', main: null,
      options: opts('Cotton, wool, and leather', ['Nylon and PVC', 'Metal and glass', 'Plastic bags']),
      expl: 'Materiais naturais: algodão, lã, couro.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u15:r:h2',
      title: '📖 What did the first petrochemical factory make?', main: null,
      options: opts('Carbon black', ['Nylon', 'Petrol', 'Glass']),
      expl: '1872: carbon black a partir do gás natural.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u15:r:h3',
      title: '📖 Why was it cheap to make?', main: null,
      options: opts('Because natural gas was plentiful and inexpensive', ['Because it was rare', 'Because it was gold', 'It wasn\'t cheap']),
      expl: 'Gás abundante e barato → produto barato.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u15:r:h4',
      title: '📖 When were nylon, polystyrene, and PVC developed?', main: null,
      options: opts('From the 1920s to the 1940s', ['In prehistoric times', 'In 1872', 'Last year']),
      expl: 'Décadas de 1920-1940.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u15:r:h5',
      title: '📖 What is one problem with plastics?', main: null,
      options: opts("They don't rot and they pollute the oceans", ['They cost too much', 'They are too heavy', 'They are natural']),
      expl: 'Não apodrecem; poluem o mar.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u15:f:1',
      title: '🧰 “Poly” em polymer significa…', main: null,
      options: opts('muitos', ['pouco', 'plástico', 'petróleo']),
      expl: 'poly = muitos; mer = parte. Polímero = muitas partes.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u15:f:2',
      title: '🧰 “Specialize in” significa…', main: null,
      options: opts('especializar-se em', ['vender barato', 'fechar a fábrica', 'importar tudo']),
      expl: 'specialize in = foco/especialidade.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u15:f:3',
      title: '🧰 Num ensaio de tração (tensile test), o material é…', main: null,
      options: opts('puxado (pulled)', ['dobrado', 'martelado', 'queimado']),
      expl: 'tensile = tração (puxar). bend = dobrar. impact = martelar.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u15:s:1',
      title: '🔤 Qual está correta?', main: null,
      options: opts('synthetic', ['sintetic', 'synthetick', 'sinthetic']),
      expl: 'synthetic.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u15:s:2',
      title: '🔤 Qual está correta?', main: null,
      options: opts('polymer', ['polimer', 'pollymer', 'polymmer']),
      expl: 'polymer.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u15:s:nato1',
      title: '📻 Rádio NATO: “Papa · Victor · Charlie” soletra…', main: null,
      options: opts('PVC', ['PBC', 'PVS', 'BVC']),
      expl: 'P-V-C = polyvinyl chloride.'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '3.000 m — o reservatório, o fundo da descida. E a última transformação do petróleo: virar tudo. Plástico, roupa, remédio, tinta. Bem-vindo à petroquímica.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — o mundo petroquímico:',
          cards: [
            { en: 'petrochemical', pt: 'petroquímico', def: 'A chemical from petroleum.' },
            { en: 'polymer', pt: 'polímero', def: 'Many molecules in a chain — like plastic.' },
            { en: 'plastics', pt: 'plásticos', def: 'The most famous petrochemical.' },
            { en: 'synthetic / man-made', pt: 'sintético / artificial', def: 'Not natural — nylon, PVC.', tts: 'synthetic. man-made.' },
            { en: 'supplier', pt: 'fornecedor', def: 'Sells you the materials.' },
            { en: 'requisition', pt: 'requisição', def: 'A form to order materials.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧪 O petróleo em tudo',
          textTitle: 'Petrochemicals everywhere',
          text: 'You reached the reservoir — the end of the descent. But the oil\'s journey ends somewhere surprising: in your clothes, your phone, your medicine, your car tyres.\n\nPetrochemicals are chemicals made from petroleum and gas. From them we make plastics, adhesives, paints, cosmetics, fertilizers, rubber, and medications.\n\nThis final station connects it all with three little words — and, but, because — and shows how a dark liquid becomes almost everything around you.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u15:v:petro',
          sp: { g: 'venpt', en: 'petrochemical', u: 15 },
          title: '📦 “Petrochemical” é…', main: null,
          options: opts('produto químico feito de petróleo/gás', ['um posto de gasolina', 'um tipo de rocha', 'uma refinaria']),
          expl: 'Químico feito de petróleo.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u15:r:bg1',
          title: '🧪 Qual destes vem da petroquímica?', main: null,
          options: opts('plásticos', ['algodão', 'lã', 'madeira']),
          expl: 'Plásticos, náilon, PVC… tudo petroquímico.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u15:v:poly',
          sp: { g: 'venpt', en: 'polymer', u: 15 },
          title: '📦 Um “polymer” é…', main: null,
          options: opts('muitas moléculas em cadeia', ['uma única molécula', 'um tipo de forno', 'um combustível']),
          expl: 'poly = muitos. Polímero = cadeia de monômeros.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases sobre petroquímicos com and/but/because: "Plastics are useful, but they pollute. We use them because they are cheap."',
        waText: 'Registro: 3 sentences — petrochemicals (and/but/because).'
      }
    },

    kickoff: {
      brief: 'Nesta unidade (a última!): a história dos petroquímicos, and/but/because, descrição de fábrica e produto, e a requisição de materiais.',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u15:v:ko1',
          title: '🧪 Ligue o produto ao petroquímico:',
          pairs: [['bottles', 'polyethylene'], ['pipes', 'PVC'], ['clothes', 'nylon'], ['car tyres', 'rubber + carbon black']],
          expl: 'Produtos do dia a dia e suas origens.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u15:v:ko2',
          title: '🧪 Qual destes NÃO é petroquímico?', main: null,
          options: opts('cotton (algodão)', ['nylon', 'PVC', 'polystyrene']),
          expl: 'Algodão é natural (planta).'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u15:v:ko3',
          title: '🧪 “Synthetic” é o oposto de…', main: null,
          options: opts('natural', ['barato', 'forte', 'novo']),
          expl: 'synthetic (artificial) × natural.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u15:g:ko4',
          title: '🔧 Monte a frase:', answer: 'Most plastics are made from petroleum',
          expl: 'Passiva: are made from.'
        }
      ]
    },

    read1: {
      brief: 'A história dos petroquímicos: do negro de fumo de 1872 ao náilon dos anos 1940 — e o problema do plástico hoje. Leia e responda.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia a história:',
          textTitle: 'From carbon black to PVC',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    lang1: { brief: 'Os três conectivos: and (adiciona), but (contrasta), because (explica). O que junta ideias em inglês.\n\n(Formatos: EGU Unit 96 e afins — adaptados.)', items: LANG1 },

    listen1: {
      brief: 'Descrição de fábrica e produto: empresa, planta, produtos e usos. Ouça e anote os números.',
      items: LISTEN1,
      script: SCRIPT
    },

    speak: {
      brief: 'Descrevendo uma fábrica e seu produto: empresa, planta, local, produto e uso — em frases completas.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '💬 A ficha da fábrica',
          textTitle: 'A petrochemical factory',
          text: 'Company: Arg-Nyl\nPlant: San Lorenzo\nLocation: near Buenos Aires, Argentina\nMain product: nylon fabric\nUsed for: clothing, shoes, camping tents\n\nUseful language:\n"… manufactures …"\n"… is used to make …"',
          readAloud: true
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u15:r:spk1',
          title: '💬 Para que serve o náilon da Arg-Nyl?', main: null,
          options: opts('roupas, sapatos e barracas', ['comida', 'combustível', 'remédios']),
          expl: 'clothing, shoes, camping tents.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u15:sp:speak1', unit: 15, waSec: 'Speaking',
          title: '🎤 Apresente a fábrica:',
          target: 'The San Lorenzo plant manufactures nylon fabric.',
          ptHint: 'A planta San Lorenzo fabrica tecido de náilon.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u15:sp:speak2', unit: 15, waSec: 'Speaking',
          title: '🎤 Diga o uso:',
          target: 'The nylon fabric is used to make clothing and tents.',
          ptHint: 'O tecido é usado para fazer roupas e barracas.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave a descrição de uma fábrica (real ou inventada): company, plant, location, product, e "… is used to make …".',
        waText: 'Registro: descrição de fábrica e produto.'
      }
    },

    job: {
      brief: "It's my job: Manu Castro é técnica de ensaios numa fábrica de plásticos especiais. Testa a resistência de tudo — dobra, puxa, martela e queima.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Manu Castro — test technician',
          text: "I'm Manu Castro, a test technician for a special plastics company. I work in the test department. I've been here since I left school, and I've been trained to use most of the test equipment.\n\nWe test all our materials for strength. We bend them in the bend test, we pull them in the tensile test, and we hit them with a hammer in the impact test. We test at different temperatures, and with different chemicals — for example, some plastics become weak in sea water.\n\nMy company supplies plastics for aerospace, oil and gas, and home appliance companies. This morning I tested a resin used with carbon fibre to make aircraft wings. That quality must be very high."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u15:r:job1',
          title: '👷 Which department does Manu work in?', main: null,
          options: opts('The test department', ['Sales', 'Human Resources', 'The kitchen']),
          expl: 'Test technician → departamento de ensaios.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u15:r:job2',
          title: '👷 Match: what do they do in each test?', main: 'They ___ in the tensile test.',
          options: opts('pull the material', ['bend it', 'hit it', 'paint it']),
          expl: 'tensile = tração (pull).'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u15:r:job3',
          title: '👷 What happens to some plastics in sea water?', main: null,
          options: opts('They become weak', ['They become gold', 'Nothing', 'They grow']),
          expl: 'Água do mar enfraquece alguns plásticos.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u15:r:job4',
          title: '👷 Why must the aircraft resin be very high quality?', main: null,
          options: opts('It is used to make aircraft wings', ['It is cheap', 'It is a toy', 'It is food']),
          expl: 'Asas de avião → qualidade máxima.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: os 3 testes de resistência (bend, tensile, impact) e o que cada um faz ("In the … test, we …").',
        waText: 'Registro: os 3 testes de resistência.'
      }
    },

    write: {
      brief: 'Requisição de materiais: o formulário que pede ao comprador exatamente o que você precisa — material, quantidade, embalagem, prazo.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ A requisição de materiais',
          textTitle: 'Materials requisition',
          text: 'A materials requisition asks the buyer to purchase what you need:\n\nMaterial · Reference number · Quantity\nPackaging · Delivery date · Delivery location\nPreferred suppliers · Requested by · Phone extension\n\nExample: "500 kg of PC 180 polycarbonate pellets, in 20 kg bags, delivered 9 April to the Teesside lab."',
          nextLabel: 'Continuar ▸'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u15:r:wr1',
          title: '✍️ “Quantity: 500 kg” informa…', main: null,
          options: opts('quanto material pedir', ['o preço', 'o fornecedor', 'a data']),
          expl: 'quantity = quantidade.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u15:r:wr2',
          title: '✍️ “Preferred suppliers” são…', main: null,
          options: opts('os fornecedores de preferência', ['os clientes', 'os produtos', 'os testes']),
          expl: 'supplier = fornecedor.'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u15:sp:wr3',
          title: '🔤 Qual está correta?', main: null,
          options: opts('requisition', ['requisiton', 'reqisition', 'requisistion']),
          expl: 'requisition.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Materials requisition',
        brief: 'Preencha uma requisição de materiais em inglês:',
        btn: '✍️ Preencher e enviar',
        fields: [
          { label: 'Material + reference', ph: 'ex.: polycarbonate pellets, PC 180' },
          { label: 'Quantity', ph: 'ex.: 500 kg' },
          { label: 'Packaging', ph: 'ex.: 20 kg bags' },
          { label: 'Delivery date + location', ph: 'ex.: 9 April, Teesside lab' },
          { label: 'Preferred suppliers', ph: 'ex.: Plasco, Hitrust', rows: 2 }
        ]
      }
    },

    project: {
      brief: 'Missão final: os petroquímicos na sua vida. Liste as coisas que você usa todo dia e que vêm do petróleo.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧪 Project — Petrochemicals in my day',
          textTitle: 'Sua missão',
          text: 'Todo dia você usa produtos que contêm petroquímicos. Faça uma lista em inglês (seja específico):\n\n• clothing (roupas)\n• food storage (armazenar comida)\n• transport\n• electronics\n• home decoration\n\nEscolha 5 itens e diga de que material petroquímico cada um é feito.',
          nextLabel: 'Preencher a entrega ▸'
        }
      ],
      task: {
        type: 'project',
        title: '🧪 Entrega do Project (final da trilha!)',
        brief: 'Preencha e envie ao mentor:',
        btn: '🧪 Preencher e enviar no WhatsApp',
        fields: [
          { label: '5 petrochemical products in my day', ph: 'ex.: my phone case (plastic), my jacket (nylon)…', rows: 4 }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Petrochemicals — a última da descida! 🏁', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 15 entram para o Glossário — completando o vocabulário da trilha OG-1! 🎉',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 15:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u15:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 15 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 15));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I can talk about the history of petrochemicals.',
    'I can use and, but, and because.',
    'I can describe a factory and its products.',
    'I can write a materials requisition.',
    'I can talk about petrochemicals in everyday life.'
  ];

  DF.UNIT_DATA[15] = {
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
