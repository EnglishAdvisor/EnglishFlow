/* DEEP FLOW — units/unit03.js
   UNIT 3 — Downstream (400 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U3 (p.16-21) — objetivos, nada
   copiado; gramática WB-1 (EGU Units 3-4 e 8: Present Continuous ×
   Present Simple), adaptada; PT técnico: OFFSHORE2. Personagem autoral:
   Luana Ferreira (operadora de sala de controle em planta petroquímica). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  // fonte: keywords SB-1 U3; definições autorais
  const GLOSSARY = [
    { en: 'refinery', pt: 'refinaria', def: 'a plant that separates crude oil into products.' },
    { en: 'petrochemical', pt: 'petroquímico', def: 'a chemical made from hydrocarbons.' },
    { en: 'processing plant', pt: 'planta de processamento', def: 'it separates the different gases in natural gas.' },
    { en: 'product', pt: 'produto', def: 'what the plant makes: petrol, plastics, chemicals.' },
    { en: 'chemical', pt: 'produto químico', def: 'ethylene, for example — the mother of plastics.' },
    { en: 'light', pt: 'leve (produto claro)', def: 'light products: petrol, jet fuel.' },
    { en: 'heavy', pt: 'pesado (produto escuro)', def: 'heavy products: asphalt, fuel oil.' },
    { en: 'shift', pt: 'turno', def: 'a work period: day shift, night shift.' },
    { en: 'department', pt: 'departamento', def: 'a section of a company: HR, Technical Support.' },
    { en: 'Human Resources', pt: 'Recursos Humanos (RH)', def: 'the people department: HR.' },
    { en: 'Technical Support', pt: 'Suporte Técnico', def: 'they fix your computer and systems.' },
    { en: 'valve', pt: 'válvula', def: 'it opens and closes the flow.' },
    { en: 'load', pt: 'carregar', def: 'to put product INTO a tanker or ship.' },
    { en: 'unload', pt: 'descarregar', def: 'to take product OUT of a tanker.' },
    { en: 'separate', pt: 'separar', def: 'refineries separate crude oil into light and heavy products.' }
  ];

  const TOOLS = [
    { en: 'control panel', pt: 'painel de controle' },
    { en: 'screen', pt: 'tela' },
    { en: 'gauge', pt: 'manômetro / indicador' },
    { en: 'switch', pt: 'interruptor / chave' },
    { en: 'knob', pt: 'botão giratório' },
    { en: 'keyboard', pt: 'teclado' },
    { en: 'button', pt: 'botão' },
    { en: 'petrol station', pt: 'posto de combustível' },
    { en: 'tanker', pt: 'caminhão-tanque' },
    { en: 'message', pt: 'mensagem / recado' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: Present Continuous ----------
  // fonte: objetivo SB-1 U3; formatos WB-1 (EGU Units 3-4), adaptados
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:pc1',
      title: '🔧 Complete (agora):', main: 'Right now he ___ petrol at the station.',
      options: opts('is unloading', ['unloads', 'unload', 'is unload']),
      expl: 'Ação em andamento AGORA → is/are + verbo-ing.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:pc2',
      title: '🔧 Complete:', main: 'A: Are you driving?\nB: No, I ___ lunch.',
      options: opts("'m having", ['have', 'has', 'having']),
      expl: 'I\'m having lunch = estou almoçando (agora).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:pc3',
      title: '🔧 Rotina ou agora?', main: 'He ___ a petrol tanker every day, but right now he ___ .',
      options: opts('drives · is having a break', ['is driving · has a break', 'drive · is breaking', 'drives · has breaking']),
      expl: 'Rotina = Present Simple (drives) · agora = Continuous (is having).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:pc4',
      title: '🔧 Monte a pergunta:', main: '___ they collecting data at the plant?',
      options: opts('Are', ['Do', 'Does', 'Is']),
      expl: 'they + -ing → ARE they …-ing?'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:pc5',
      title: '🔧 Complete a negativa:', main: 'The screen ___ working properly.',
      options: opts("isn't", ["doesn't", "aren't", 'not']),
      expl: 'the screen (it) + -ing → isn\'t working. Frase nº 1 do Suporte Técnico!'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:pc6',
      title: '🔧 Complete:', main: 'Look! The red light ___ .',
      options: opts('is flashing', ['flashes', 'flash', 'is flash']),
      expl: 'Look! (agora) → is flashing (está piscando).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:pc7',
      title: '🔧 Saudação de progresso — o que responder?', main: '“How\'s it going?”',
      options: opts("OK, but I'm having trouble with the gauge.", ['Yes, I go.', 'It is gone.', 'The going is it.']),
      expl: '“How\'s it going?” = como está indo? Resposta com progresso.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u3:g:ord1',
      title: '🔧 Monte a frase:', answer: 'They are testing the pipes now',
      expl: 'are + testing (agora).'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u3:g:ord2',
      title: '🔧 Monte a pergunta:', answer: 'What are you doing right now',
      expl: 'Wh- + are + you + -ing.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:pc8',
      title: '🔧 Escolha a frase correta:', main: null,
      options: opts("She's waiting for the manager.", ["She waiting for the manager.", "She's wait for the manager.", 'She is waits for the manager.']),
      expl: 'be + verbo-ing: is waiting.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: Simple × Continuous + problemas ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:mix1',
      title: '🔧 Rotina ou agora?', main: 'The plant ___ 24 hours a day.',
      options: opts('works', ['is working', 'work', 'is work']),
      expl: 'Fato/rotina permanente → Present Simple.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:mix2',
      title: '🔧 Rotina ou agora?', main: 'This week she ___ night shifts.',
      options: opts('is working', ['works every', 'work', 'worked always']),
      expl: 'This week (período atual, temporário) → is working.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:mix3',
      title: '🔧 Descreva o problema:', main: 'The computer ___ a strange noise.',
      options: opts('is making', ['makes always', 'make', 'is make']),
      expl: 'Problema acontecendo agora → is making.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:mix4',
      title: '🔧 Descreva o problema:', main: 'Some of the keys ___ .',
      options: opts("aren't working", ["isn't working", "don't working", 'not work']),
      expl: 'keys (plural) → aren\'t working.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:mix5',
      title: '🔧 Complete o telefonema:', main: "He can't talk now. He ___ to the manager.",
      options: opts('is talking', ['talks', 'talk', 'is talk']),
      expl: 'Agora → is talking. “Can I take a message?”'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:mix6',
      title: '🔧 Qual frase descreve uma FOTO (agora)?', main: null,
      options: opts('The men are opening a valve.', ['The men open valves every day.', 'The men opened a valve in 2020.', 'Valves are opened by men.']),
      expl: 'Foto = momento → Present Continuous.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u3:g:ord3',
      title: '🔧 Monte a frase do relatório:', answer: 'The gauge is not working properly',
      expl: 'A frase mais escrita nos e-mails de manutenção.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u3:g:mix7',
      title: '🔧 Complete:', main: "I'm hoping ___ a job in the downstream sector.",
      options: opts('to get', ['getting', 'get', 'for get']),
      expl: 'hope + to + verbo: I\'m hoping to get…'
    }
  ];

  // ---------- LISTENING: telefonemas (autoral) ----------
  const SCRIPT =
    'Call 1\n' +
    'A: Hello, Technical Support.\n' +
    'B: Hi. Is that George?\n' +
    'A: No, this is Ali speaking. George is talking to the manager right now. Can I take a message?\n' +
    'B: Yes, please. This is Andrea Watts at Human Resources. I want to talk to George about the new computers. My number is three-seven-four-five.\n' +
    'A: Andrea Watts, HR, three-seven-four-five. OK, I\'ll give him the message.\n\n' +
    'Call 2\n' +
    'A: Control room.\n' +
    'B: Hi, this is Renata in Human Resources. Please ask the shift supervisor to call me about the new technicians — today if possible. My number is two-two-three-three.\n' +
    'A: Two-two-three-three. I\'ll tell him. Thanks, Renata.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u3:l:call1',
      title: '🎧 Ligação 1 — George pode atender?',
      tts: dlg(['Hello, Technical Support.', 'Hi. Is that George?', 'No, this is Ali speaking. George is talking to the manager right now. Can I take a message?']),
      ttsLabel: '🔊 Ouvir a ligação',
      showIfNoTTS: 'A: Hello, Technical Support. — B: Is that George? — A: No, this is Ali. George is talking to the manager right now. Can I take a message?',
      options: opts('No — he is talking to the manager', ['Yes, he answers the phone', 'No — he is having lunch', 'No — he is not working today']),
      expl: '"George is talking to the manager right now."'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u3:l:call2',
      title: '🎧 Anote o número da Andrea:',
      tts: dlg(['This is Andrea Watts at Human Resources.', 'My number is three, seven, four, five.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“My number is three-seven-four-five.”',
      answers: ['3745'], placeholder: 'só números',
      expl: 'three-seven-four-five → 3745.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u3:l:call3',
      title: '🎧 De que departamento é a Andrea?',
      tts: dlg(['This is Andrea Watts at Human Resources.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“This is Andrea Watts at Human Resources.”',
      options: opts('Human Resources (HR)', ['Technical Support', 'The control room', 'The refinery lab']),
      expl: 'HR = Human Resources = RH.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u3:l:call4',
      title: '🎧 Ligação 2 — o recado escrito diz “nº 2223”. O áudio diz…',
      tts: dlg(['My number is two, two, three, three.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“My number is two-two-three-three.”',
      options: opts('2233 — o recado está ERRADO', ['2223 — o recado está certo', '3322 — tudo errado', '2222']),
      expl: 'Áudio: 2233. Conferir número é regra de ouro do recado!'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u3:f:msg1',
      title: '🧰 A pessoa não pode atender. O que você diz?', main: null,
      options: opts('Can I take a message?', ['What you want?', 'Call more late!', 'He no here.']),
      expl: '“Can I take a message?” — a frase que salva o recado.',
      feedbackTts: 'Can I take a message?'
    }
  ];

  // ---------- READING: notícia autoral ----------
  const READ_TEXT =
    'Gas — going up\n\n' +
    'World gas production is growing fast. Big producers are increasing their production, and new plants are opening in Asia and the Middle East.\n\n' +
    'Why is this happening? Petrochemical plants use a lot of gas, and that industry is growing. And many power stations are changing their fuel from coal to gas, because gas produces less CO2 than coal.\n\n' +
    'Downstream is changing too: petrochemicals sell at higher prices than crude oil, so producing countries are building their own plants — and creating new jobs for young people.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u3:r:news1',
      title: '📖 What is going up?', main: null,
      options: opts('World gas production', ['The price of coffee', 'The number of coal plants', 'Nothing']),
      expl: '"World gas production is growing fast."'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u3:r:news2',
      title: '📖 Why are power stations changing from coal to gas?', main: null,
      options: opts('Because gas produces less CO2', ['Because coal is cleaner', 'Because gas is prettier', 'Because coal is free']),
      expl: 'Menos CO2 → melhor para o ambiente.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u3:r:news3',
      title: '📖 Petrochemicals sell at ___ prices than crude oil.', main: null,
      options: opts('higher', ['lower', 'the same', 'no']),
      expl: 'Por isso países produtores constroem suas próprias plantas.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u3:r:news4',
      title: '📖 True or false?', main: '“New petrochemical plants are opening in Asia and the Middle East.”',
      options: opts('True', ['False']),
      expl: 'Verdadeiro — o texto diz exatamente isso.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u3:f:phone1',
      title: '🧰 Para pedir alguém ao telefone:', main: null,
      options: opts('Can I speak to George, please?', ['Give me George!', 'George is where?', 'I want George now.']),
      expl: 'Educado e direto: “Can I speak to…, please?”',
      feedbackTts: 'Can I speak to George, please?'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u3:f:phone2',
      title: '🧰 Para se identificar ao telefone:', main: null,
      options: opts('This is Ali speaking.', ['I am talking Ali.', 'Here talks Ali.', 'Me Ali.']),
      expl: 'Ao telefone: “This is … (speaking)”, nunca “I am…”.',
      feedbackTts: 'This is Ali speaking.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u3:f:phone3',
      title: '🧰 “How are you getting on?” pergunta sobre…', main: null,
      options: opts('o progresso do trabalho/aprendizado', ['o meio de transporte', 'a família', 'o clima']),
      expl: 'Saudação de progresso. Resposta: “OK, but I\'m having trouble with…”.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u3:s:stress1',
      title: '🗣️ Onde cai a força (stress) em REFINERY?', main: 're-FI-ne-ry',
      options: opts('na 2ª parte: reFInery', ['na 1ª: REfinery', 'na 3ª: refiNEry', 'na última: refineRY']),
      expl: 'reFInery. Errar o stress confunde o ouvinte!'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u3:s:stress2',
      title: '🗣️ Onde cai a força em PETROCHEMICAL?', main: 'pe-tro-CHE-mi-cal',
      options: opts('petroCHEmical', ['PEtrochemical', 'petrochemiCAL', 'peTROchemical']),
      expl: 'petroCHEmical — força no CHE.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u3:s:nato1',
      title: '📻 Rádio NATO: “Victor · Alpha · Lima · Victor · Echo” soletra…', main: null,
      options: opts('VALVE', ['VOLVO', 'LEVEL', 'VAPOR']),
      expl: 'V-A-L-V-E = valve.'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '400 m. Agora o outro lado da cadeia: transformar o cru em produto — refinaria, petroquímica e a sala de controle que nunca dorme.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — as palavras da estação:',
          cards: [
            { en: 'refinery', pt: 'refinaria', def: 'It separates crude oil into products.' },
            { en: 'light products', pt: 'produtos leves', def: 'Petrol, jet fuel — light and valuable.', tts: 'light products' },
            { en: 'heavy products', pt: 'produtos pesados', def: 'Asphalt, fuel oil — dark and heavy.', tts: 'heavy products' },
            { en: 'petrochemical', pt: 'petroquímico', def: 'Chemicals from hydrocarbons — like ethylene.' },
            { en: 'shift', pt: 'turno', def: 'The plant works 24/7 — people work in shifts.' },
            { en: 'valve', pt: 'válvula', def: 'Open it, close it — control the flow.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '⛽ Do poço ao posto',
          textTitle: 'The downstream journey',
          text: 'Crude oil goes from the well to a refinery. The refinery separates it into light products (like petrol) and heavy products (like asphalt).\n\nGas goes to processing plants, and petrochemical plants make chemicals — the mother of plastics, detergents, and tyres.\n\nThen tankers, ships, and pipelines carry the products to petrol stations and factories. That is the downstream sector: make it, move it, sell it.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u3:v:refinery',
          sp: { g: 'venpt', en: 'refinery', u: 3 },
          title: '📦 O que a refinaria faz?', main: null,
          options: opts('Separa o cru em produtos leves e pesados', ['Perfura poços novos', 'Estuda rochas', 'Vende crude direto ao posto']),
          expl: 'Refinery separates crude oil into light and heavy products.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u3:r:bg1',
          title: '⛽ Qual destes é um produto LEVE (light)?', main: null,
          options: opts('petrol', ['asphalt', 'fuel oil', 'crude oil']),
          expl: 'Light: petrol, jet fuel · Heavy: asphalt, fuel oil.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u3:v:shift',
          sp: { g: 'venpt', en: 'shift', u: 3 },
          title: '📦 “Night shift” é…', main: null,
          options: opts('turno da noite', ['mudança de casa', 'câmbio do carro', 'férias noturnas']),
          expl: 'shift = turno. A planta trabalha 24h → turnos.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases sobre o downstream. Modelo: "The refinery separates crude oil. Petrol is a light product. I work the night shift."',
        waText: 'Registro: 3 sentences — downstream.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: vocabulário downstream e de computadores, Present Continuous, telefonemas e recados, word stress e cálculos. Aquecimento: o que vem do petróleo?',
      items: [
        {
          ui: 'choice', cat: 'rea', srsId: 'u3:r:ko1',
          title: '⛽ Qual grupo vem TODO do petróleo/gás?', main: null,
          options: opts('petrol · plastic bags · asphalt', ['wood · glass · wool', 'water · salt · sand', 'cotton · paper · leather']),
          expl: 'Petrol, plásticos, asfalto, detergentes, pneus… tudo da cadeia.'
        },
        {
          ui: 'match', cat: 'voc', srsId: 'u3:v:ko2',
          title: '⛽ Ligue o produto ao uso:',
          pairs: [
            ['petrol', 'fuel for cars'],
            ['asphalt', 'roads'],
            ['ethylene', 'plastics'],
            ['propane', 'cooking gas']
          ],
          expl: 'Produtos e seus destinos.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u3:v:ko3',
          title: '🇬🇧×🇺🇸 “Petrol” (BrE) nos EUA é…', main: null,
          options: opts('gasoline', ['petroleum jelly', 'diesel', 'benzine']),
          expl: 'BrE petrol = AmE gasoline (gas).'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u3:g:ko4',
          title: '🔧 Monte a frase:', answer: 'The driver is unloading petrol now',
          expl: 'is + unloading (agora).'
        }
      ]
    },

    lang1: { brief: 'O tempo do AGORA: Present Continuous — o que está acontecendo neste momento na planta.\n\n(Formatos: Essential Grammar in Use, Units 3-4 — adaptados.)', items: LANG1 },

    job: {
      brief: "It's my job: Luana Ferreira controla uma planta petroquímica da sala de controle. Leia e responda.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Luana Ferreira — control room operator',
          text: "I'm Luana Ferreira, and I work at a big petrochemical plant. We get light hydrocarbons from a refinery and produce ethylene — industries use it to make plastics, detergents, and car tyres.\n\nWe control everything from this room, with computers. But computers can't do everything: we often call a technician by radio to open or close a valve.\n\nThe plant works 24 hours a day, 365 days a year. I work seven twelve-hour shifts every two weeks — four day shifts and three night shifts. This week I'm working nights."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u3:r:job1',
          title: '👷 What does the plant produce?', main: null,
          options: opts('Ethylene (for plastics, detergents, tyres)', ['Crude oil', 'Coffee', 'Steel pipes']),
          expl: 'Ethylene — matéria-prima de plásticos e mais.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u3:r:job2',
          title: '👷 Why do they call technicians by radio?', main: null,
          options: opts("Because computers can't do everything", ['Because the phone is broken', 'Because they are bored', 'Because the radio is new']),
          expl: 'Abrir/fechar válvula no campo = trabalho humano.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u3:r:job3',
          title: '👷 How many shifts does she work every two weeks?', main: null,
          options: opts('Seven twelve-hour shifts', ['Five eight-hour shifts', 'Fourteen shifts', 'Two shifts']),
          expl: '4 de dia + 3 de noite = 7 turnos de 12h.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u3:r:job4',
          title: '👷 What is she doing THIS week?', main: null,
          options: opts("She's working night shifts", ['She works day shifts forever', "She's on holiday", "She's studying rocks"]),
          expl: '"This week I\'m working nights" — Present Continuous!'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: "This week I\'m…" + 2 frases sobre o que você está fazendo/estudando nesta semana.',
        waText: 'Registro: This week I\'m… (3 frases).'
      }
    },

    vocab1: {
      brief: 'O painel de controle em inglês: tela, manômetro, chave, teclado — e como DESCREVER o defeito.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Computadores e painéis:',
            cards: [
              { en: 'control panel', pt: 'painel de controle', def: 'All the buttons and screens together.' },
              { en: 'gauge', pt: 'manômetro / indicador', def: 'It shows pressure or level.' },
              { en: 'screen', pt: 'tela', def: 'It shows the data — or an error message!' },
              { en: 'switch', pt: 'interruptor', def: 'On / off.' },
              { en: 'knob', pt: 'botão giratório', def: 'Turn it to adjust.' },
              { en: 'keyboard', pt: 'teclado', def: 'For typing commands.' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u3:v:panel1',
            title: '📦 Ligue o equipamento à tradução:',
            pairs: [['gauge', 'manômetro'], ['switch', 'interruptor'], ['knob', 'botão giratório'], ['screen', 'tela']],
            expl: 'O painel em PT-EN.'
          },
          {
            ui: 'choice', cat: 'gra', srsId: 'u3:g:panel2',
            title: '🔧 Descreva o defeito:', main: 'The screen ___ an error message.',
            options: opts('is showing', ['show', 'is show', 'showing is']),
            expl: 'Defeito agora → is showing.'
          },
          {
            ui: 'choice', cat: 'gra', srsId: 'u3:g:panel3',
            title: '🔧 Descreva o defeito:', main: 'The gauge ___ properly.',
            options: opts("isn't working", ["doesn't working", 'not works', "isn't work"]),
            expl: 'isn\'t + working. A frase mais usada no Suporte.'
          }
        ];
        DF.pickN(TOOLS.slice(0, 7), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 3));
        });
        DF.pickN(TOOLS.slice(0, 7), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 3));
        });
        return items;
      }
    },

    lang2: { brief: 'Simple × Continuous lado a lado: rotina da planta vs. o que está acontecendo agora — a escolha que muda o sentido.\n\n(Formatos: EGU Unit 8 — comparação, adaptada.)', items: LANG2 },

    listen1: {
      brief: 'Dois telefonemas de trabalho: recado, nome, departamento e número. Um dos recados escritos tem erro — ache!',
      items: LISTEN1,
      script: SCRIPT
    },

    write: {
      brief: 'O recado perfeito: To, From, Of, Message — e a mudança de pronomes (I→he, me→him). Pequeno e vital.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ Como transformar fala em recado',
          textTitle: 'Messages: the golden rule',
          text: 'Fala: "Please tell George I want to talk to him about the new computers."\n\nRecado escrito:\nMessage from: Mark\nTo: George\nMessage: He wants to talk to YOU about the new computers.\n\nRepare: I → he · him → you. Quem escreve o recado muda o ponto de vista.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u3:g:msg1',
          title: '✍️ Fala: “Please send me file A407.” (de Renata para o Faisal)\nO recado correto para o Faisal é…', main: null,
          options: opts('She wants you to send her file A407.', ['I want me to send my file.', 'He wants him to send it to they.', 'Send she the file for I.']),
          expl: 'me → her · (você lê) → you.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u3:g:msg2',
          title: '✍️ Fala: “I can\'t meet him today.” (de Omar sobre o gerente)\nRecado:', main: null,
          options: opts("He can't meet him today.", ["I can't meet I today.", "He can't meets he.", "Him can't meet he today."]),
          expl: 'I → He. O resto mantém.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u3:r:msg3',
          title: '✍️ Num recado, o campo “Of:” pede…', main: null,
          options: opts('a empresa/departamento de quem ligou', ['a hora do almoço', 'o assunto secreto', 'o nome do seu chefe']),
          expl: 'Of: company/department — ex.: HR.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Writing — o recado',
        brief: 'Alguém ligou para seu supervisor. Escreva o recado completo em inglês:',
        btn: '✍️ Escrever e enviar',
        fields: [
          { label: 'To:', ph: 'ex.: The shift supervisor' },
          { label: 'From:', ph: 'ex.: Renata Lopes' },
          { label: 'Of (company/department):', ph: 'ex.: HR' },
          { label: 'Message:', ph: 'ex.: Please call her about… today if possible.', rows: 3 },
          { label: "Caller's number:", ph: 'ex.: 2233' }
        ]
      }
    },

    speak: {
      brief: 'Fazendo e atendendo ligações: o script completo — de "Hello, Technical Support" a "I\'ll give him the message".',
      items: [
        {
          ui: 'choice', cat: 'fun', srsId: 'u3:f:spk1',
          title: '💬 Atendendo o telefone do setor:', main: null,
          options: opts('Hello, Technical Support.', ['Goodbye, Technical Support.', 'Who is it?!', 'Talk!']),
          expl: 'Atenda com Hello + nome do setor.',
          feedbackTts: 'Hello, Technical Support.'
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u3:f:spk2',
          title: '💬 Para confirmar quem atendeu:', main: null,
          options: opts('Is that George?', ['Is it George there him?', 'George is?', 'Are you being George?']),
          expl: 'Ao telefone: “Is that…?” — e a resposta: “This is Ali speaking.”',
          feedbackTts: 'Is that George?'
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u3:f:spk3',
          title: '💬 Fechando o recado:', main: null,
          options: opts("OK. I'll give him the message.", ['OK. I give him message now past.', 'OK. Message is gived.', 'OK. Him get message.']),
          expl: '“I\'ll give him the message.” — promessa com will.',
          feedbackTts: "I'll give him the message."
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u3:sp:speak1', unit: 3, waSec: 'Speaking',
          title: '🎤 Sua vez — peça para falar com alguém:',
          target: 'Can I speak to George, please?',
          ptHint: 'Posso falar com o George, por favor?'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u3:sp:speak2', unit: 3, waSec: 'Speaking',
          title: '🎤 Agora ofereça o recado:',
          target: 'Can I take a message?',
          ptHint: 'Quer deixar recado?'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave a ligação completa fazendo os DOIS papéis: atender, identificar-se, pedir alguém, anotar recado com número.',
        waText: 'Registro: telefonema completo (2 papéis).'
      }
    },

    read1: {
      brief: 'Notícia do setor: o gás em alta e a petroquímica mudando de endereço. Leia como quem lê a Upstream Online.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia a notícia:',
          textTitle: 'Sector news',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    pron: {
      brief: 'Word stress: a sílaba forte que faz "refinery" soar profissional. Ouça e marque.',
      items: [
        {
          ui: 'cards', cat: 'pro',
          title: '🗣️ A força das palavras:',
          cards: [
            { en: 'COMpany', pt: 'força na 1ª sílaba', def: 'COM-pa-ny', tts: 'company' },
            { en: 'reFInery', pt: 'força na 2ª', def: 're-FI-ne-ry', tts: 'refinery' },
            { en: 'imPORtant', pt: 'força na 2ª', def: 'im-POR-tant', tts: 'important' },
            { en: 'petroCHEmical', pt: 'força no CHE', def: 'pe-tro-CHE-mi-cal', tts: 'petrochemical' }
          ]
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u3:p:st1',
          title: '🗣️ Ouça: onde está a força?',
          tts: 'business', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“BUSIness”',
          options: opts('BUSIness (1ª)', ['busiNESS (última)', 'buSIness (2ª)']),
          expl: 'BUSIness — força no começo.', feedbackTts: 'business'
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u3:p:st2',
          title: '🗣️ Ouça: onde está a força?',
          tts: 'producer', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“proDUcer”',
          options: opts('proDUcer (2ª)', ['PROducer (1ª)', 'produCER (última)']),
          expl: 'proDUcer.', feedbackTts: 'producer'
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u3:p:st3',
          title: '🗣️ Ouça: onde está a força?',
          tts: 'employment', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“emPLOYment”',
          options: opts('emPLOYment (2ª)', ['EMployment (1ª)', 'employMENT (última)']),
          expl: 'emPLOYment.', feedbackTts: 'employment'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u3:sp:pron1', unit: 3, waSec: 'Pronunciation',
          title: '🎤 Fale com o stress certo:',
          target: 'The refinery is very important for the company.',
          ptHint: 'reFInery · imPORtant · COMpany'
        }
      ]
    },

    num: {
      brief: 'Calculando em inglês: plus, minus, times, divided by — as contas faladas da sala de controle.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 A calculadora falada:',
            cards: [
              { en: 'plus (+) · minus (−)', pt: 'mais · menos', def: '7 plus 3 is 10 · 7 minus 3 is 4', tts: 'seven plus three is ten. seven minus three is four.' },
              { en: 'times (×) · divided by (÷)', pt: 'vezes · dividido por', def: '6 times 2 is 12 · 6 divided by 2 is 3', tts: 'six times two is twelve. six divided by two is three.' },
              { en: 'point (.) · per cent (%)', pt: 'vírgula decimal · por cento', def: '7.25 = seven point two five', tts: 'seven point two five. fifty per cent.' }
            ]
          },
          {
            ui: 'type', cat: 'num', srsId: 'u3:n:calc1',
            title: '🎧 Resolva a conta falada (só o resultado):',
            tts: "What's seven point five times two?",
            ttsLabel: '🔊 Ouvir', showIfNoTTS: '“What\'s seven point five times two?”',
            answers: ['15'], placeholder: 'resultado',
            expl: '7.5 × 2 = 15.'
          },
          {
            ui: 'type', cat: 'num', srsId: 'u3:n:calc2',
            title: '🎧 Resolva a conta falada:',
            tts: "What's ninety divided by three?",
            ttsLabel: '🔊 Ouvir', showIfNoTTS: '“What\'s ninety divided by three?”',
            answers: ['30'], placeholder: 'resultado',
            expl: '90 ÷ 3 = 30.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u3:n:calc3',
            title: '🔢 Luana trabalha 3 turnos de 12 horas esta semana. Total?', main: null,
            options: opts('36 hours — three times twelve', ['15 hours', '312 hours', '4 hours']),
            expl: '3 × 12 = 36. “Three times twelve is thirty-six.”'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u3:n:calc4',
            title: '🔢 O tanque leva 30,000 L; já tem 18,500 L. Cabe mais…', main: null,
            options: opts('11,500 litres', ['12,500 litres', '48,500 litres', '1,150 litres']),
            expl: '30,000 − 18,500 = 11,500. “minus”.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 9999, rnd: rnd, diff: 1 }));
        }
        return items;
      }
    },

    check: { brief: 'Autoavaliação da estação Downstream.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 3 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 3:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u3:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 3 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 3));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I know key words for the downstream sector, computers, and control equipment.',
    'I can use the Present Continuous.',
    'I can describe problems with equipment ("The gauge isn\'t working").',
    'I can make and answer phone calls.',
    'I can take a written message correctly.',
    'I can use word stress correctly.',
    'I can talk about calculations in English.'
  ];

  DF.UNIT_DATA[3] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'phone', 'qty'], max: 99999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
