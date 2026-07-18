/* DEEP FLOW — units/unit08.js
   UNIT 8 — Working Offshore (1400 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U8 (p.46-51) — objetivos, nada
   copiado; gramática = comparativos (as…as / than / irregulares) EGU 87-91,
   adaptada; enriquecimento OFFSHORE1 (rádio/plataforma), reescrito.
   Personagem autoral: Igor Menezes (instrument technician). PT: OFFSHORE2. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'platform', pt: 'plataforma', def: 'an offshore structure for drilling or production.' },
    { en: 'well head', pt: 'cabeça de poço', def: 'the area and equipment at the top of a well.' },
    { en: 'area', pt: 'área', def: 'a part of the platform: accommodation, process, utilities.' },
    { en: 'training', pt: 'treinamento', def: 'even day visitors need safety training offshore.' },
    { en: 'instrument', pt: 'instrumento', def: 'a device that measures a variable.' },
    { en: 'gauge', pt: 'medidor / manômetro', def: 'it shows pressure, level, or temperature.' },
    { en: 'variable', pt: 'variável', def: 'a value that changes: pressure, temperature, level, flow.' },
    { en: 'pressure', pt: 'pressão', def: 'measured in bar or kilopascals (kPa).' },
    { en: 'level', pt: 'nível', def: 'how full a tank is: per cent or metres.' },
    { en: 'circuit', pt: 'circuito', def: 'a path for electric current — must be complete.' },
    { en: 'wire', pt: 'fio', def: 'it carries electricity in a circuit.' },
    { en: 'adjust', pt: 'ajustar', def: 'change a value to the right level.' },
    { en: 'increase', pt: 'aumentar', def: 'increase the pressure to 20 bar.' },
    { en: 'stand by', pt: 'aguardar (no rádio)', def: 'wait — I will be back on the radio.' },
    { en: 'go ahead', pt: 'pode falar (no rádio)', def: 'I am ready — say your message.' }
  ];

  const TOOLS = [
    { en: 'accommodation area', pt: 'área de acomodação' },
    { en: 'process area', pt: 'área de processo' },
    { en: 'utilities area', pt: 'área de utilidades' },
    { en: 'generator', pt: 'gerador' },
    { en: 'lifeboat', pt: 'baleeira / bote salva-vidas' },
    { en: 'flare', pt: 'flare (queimador de gás)' },
    { en: 'multimeter', pt: 'multímetro' },
    { en: 'current', pt: 'corrente (elétrica)' },
    { en: 'voltage', pt: 'tensão' },
    { en: 'resistance', pt: 'resistência' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: comparativos (than / as…as) ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp1',
      title: '🔧 A > B — complete:', main: 'Offshore work is more hazardous ___ onshore work.',
      options: opts('than', ['as', 'that', 'then']),
      expl: 'Comparativo de superioridade: more … THAN.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp2',
      title: '🔧 A = B — complete:', main: 'The platform is ___ big ___ a football field.',
      options: opts('as … as', ['more … than', 'so … that', 'as … than']),
      expl: 'Igualdade: as big as.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp3',
      title: '🔧 A < B — complete:', main: 'Drilling platforms are ___ big ___ production platforms.',
      options: opts('not as … as', ['more … than', 'as … than', 'not more … as']),
      expl: 'Inferioridade: NOT as big as.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp4',
      title: '🔧 Complete:', main: 'The top of the derrick is ___ than a twenty-storey building.',
      options: opts('higher', ['high', 'as high', 'more high']),
      expl: 'high → higher (curto).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp5',
      title: '🔧 Compare (fast):', main: 'Boats are not ___ helicopters.',
      options: opts('as fast as', ['faster as', 'so fast than', 'as fast than']),
      expl: 'not as fast as = menos rápido que.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp6',
      title: '🔧 Irregular — good:', main: 'Office work is ___ than physical work, in my opinion.',
      options: opts('better', ['gooder', 'more good', 'best']),
      expl: 'good → better → best (irregular).'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u8:g:ord1',
      title: '🔧 Monte a frase:', answer: 'Safety is more important than speed',
      expl: 'more important than.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: mais comparativos + variáveis ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp7',
      title: '🔧 Irregular — bad:', main: 'Today the weather is ___ than yesterday.',
      options: opts('worse', ['badder', 'more bad', 'worst']),
      expl: 'bad → worse → worst.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp8',
      title: '🔧 Complete:', main: 'Crude oil is ___ than petrol.',
      options: opts('heavier', ['more heavy', 'heavy', 'as heavy']),
      expl: 'heavy → heavier.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp9',
      title: '🔧 Igualdade:', main: 'The accommodation area is ___ comfortable ___ a hotel.',
      options: opts('as … as', ['more … than', 'so … as', 'as … than']),
      expl: 'as comfortable as.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:var1',
      title: '⚙️ Instrução de ajuste (15 bar → 20 bar):', main: null,
      options: opts('Increase the pressure to 20 bar.', ['Reduce the pressure to 20 bar.', 'Increase 20 to the pressure bar.', 'Pressure increase 15 down.']),
      expl: 'Subir → Increase. Descer → Reduce.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:var2',
      title: '⚙️ Instrução (70% → 30%):', main: null,
      options: opts('Reduce the level to 30 per cent.', ['Increase the level to 30 per cent.', 'Reduce 30 the level up.', 'Level reduce to 70.']),
      expl: 'De 70 para 30 → Reduce.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u8:g:ord2',
      title: '🔧 Monte a instrução:', answer: 'Increase the temperature to sixty degrees',
      expl: 'Increase + variável + to + valor.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u8:g:comp10',
      title: '🔧 Escolha certo:', main: 'Gas is ___ oil for some engines.',
      options: opts('better than', ['more good than', 'as better as', 'gooder than']),
      expl: 'better than (irregular).'
    }
  ];

  // ---------- LISTENING: rádio (autoral) ----------
  const SCRIPT =
    'Radio conversation — Martin (control room) and Igor (technician)\n\n' +
    'Martin: Igor, do you read? Over.\n' +
    'Igor: This is Igor. Go ahead. Over.\n' +
    'Martin: I need a reading. Go to the process area and find gauge PD24. Over.\n' +
    'Igor: PD24 in the process area. Stand by. … The gauge reads five bar. Over.\n' +
    'Martin: Five bar. That\'s correct — but the control room reads nine bar. The gauge is faulty. We\'ll diagnose the problem. Out.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 450 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u8:l:radio1',
      title: '🎧 Em qual área está o Igor?',
      tts: dlg(['Go to the process area and find gauge PD24.', 'PD24 in the process area. Stand by.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Go to the process area and find gauge PD24.”',
      options: opts('process area', ['accommodation area', 'utilities area', 'helideck']),
      expl: 'Ele vai à área de processo.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u8:l:radio2',
      title: '🎧 Qual manômetro ele deve achar? (ex.: AB12)',
      tts: dlg(['Find gauge P D two four.', 'P D twenty-four.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Find gauge PD24.”',
      answers: ['PD24'], placeholder: 'letras+números',
      expl: 'PD24.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u8:l:radio3',
      title: '🎧 Quanto o manômetro do campo marca?',
      tts: dlg(['The gauge reads five bar.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The gauge reads five bar.”',
      options: opts('5 bar', ['9 bar', '3 bar', '15 bar']),
      expl: 'O do campo: 5 bar. O da sala: 9 bar → defeito.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u8:f:radio4',
      title: '📻 No rádio, “Go ahead” significa…', main: null,
      options: opts('pode falar', ['siga em frente andando', 'vá para casa', 'está errado']),
      expl: 'Go ahead = estou pronto, fale. Stand by = aguarde. Out = fim.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u8:f:radio5',
      title: '📻 “Affirmative” e “Negative” querem dizer…', main: null,
      options: opts('sim e não', ['talvez e nunca', 'pare e vá', 'perto e longe']),
      expl: 'Palavras fáceis de ouvir no rádio: Affirmative = Yes, Negative = No.'
    }
  ];

  // ---------- READING: uma plataforma de produção (autoral) ----------
  const READ_TEXT =
    'Going offshore\n\n' +
    'You arrive by helicopter — but first, you receive safety training. Even day visitors must have it, because offshore work is more hazardous than onshore work.\n\n' +
    'You step out and hold on to your hat. The platform is as big as a football field, and the top of the derrick is higher than a twenty-storey building.\n\n' +
    'A production platform has four main areas: the accommodation area (workers eat and sleep), the well head area (derrick and drilling equipment), the process area (separates oil from gas and water), and the utilities area (a generator makes electricity; there is heating, ventilation, and water).';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u8:r:plat1',
      title: '📖 Who needs safety training?', main: null,
      options: opts('Everybody — even day visitors', ['Only the manager', 'Only new workers', 'Nobody']),
      expl: 'Even day visitors — offshore é mais perigoso.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u8:r:plat2',
      title: '📖 The platform is as big as…', main: null,
      options: opts('a football field', ['a car', 'a house', 'a boat']),
      expl: 'as big as a football field.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u8:r:plat3',
      title: '📖 Where do workers eat and sleep?', main: null,
      options: opts('The accommodation area', ['The process area', 'The well head area', 'The utilities area']),
      expl: 'Accommodation = onde se come e dorme.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u8:r:plat4',
      title: '📖 What separates oil from gas and water?', main: null,
      options: opts('The process area', ['The accommodation area', 'The generator', 'The helideck']),
      expl: 'Process area separa óleo, gás e água.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u8:r:plat5',
      title: '📖 What makes electricity?', main: null,
      options: opts('A generator (in the utilities area)', ['The derrick', 'The lifeboat', 'The hat']),
      expl: 'Generator na utilities area.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u8:f:p1',
      title: '📻 Para chamar alguém no rádio:', main: null,
      options: opts('Igor, do you read? Over.', ['Igor, are you reading a book?', 'Hey Igor talk now go.', 'Igor listen me please.']),
      expl: '“Do you read?” = está me ouvindo? Termine com “Over”.',
      feedbackTts: 'Igor, do you read? Over.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u8:f:p2',
      title: '📻 Para pedir que repitam:', main: null,
      options: opts('Say again.', ['Speak two times.', 'Repeat all fast.', 'What what?']),
      expl: '“Say again.” — repita a mensagem.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u8:f:p3',
      title: '📻 “Stand by” pede para você…', main: null,
      options: opts('aguardar um instante', ['ficar de pé', 'sair do lado', 'correr']),
      expl: 'Stand by = aguarde na escuta.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'pro', srsId: 'u8:s:cl1',
      title: '🗣️ Consonant cluster — “instrument” tem o grupo…', main: null,
      options: opts('str (in-STR-ument)', ['xtr', 'spl', 'thr']),
      expl: 'Clusters: str, ct, xtr — difíceis, sem vogal extra.'
    },
    {
      ui: 'choice', cat: 'pro', srsId: 'u8:s:cl2',
      title: '🗣️ Qual palavra tem o cluster “ct”?', main: null,
      options: opts('inspect', ['platform', 'offshore', 'volts']),
      expl: 'inspe-CT.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u8:s:nato1',
      title: '📻 Rádio NATO: soletre a sigla PD24 corretamente:', main: null,
      options: opts('Papa · Delta · two · four', ['Papa · David · twenty-four', 'P · D · twenty-four only', 'Peter · Dog · 24']),
      expl: 'PD24 = Papa, Delta, two, four.'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '1.400 m — o coração da mentoria offshore. A vida na plataforma: áreas, variáveis, rádio e o alfabeto que salva a comunicação.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — a plataforma:',
          cards: [
            { en: 'platform', pt: 'plataforma', def: 'As big as a football field.' },
            { en: 'accommodation area', pt: 'área de acomodação', def: 'Eat and sleep here.', tts: 'accommodation area' },
            { en: 'process area', pt: 'área de processo', def: 'Separates oil, gas, and water.', tts: 'process area' },
            { en: 'well head', pt: 'cabeça de poço', def: 'Top of the well, with the derrick.', tts: 'well head' },
            { en: 'flare', pt: 'flare', def: 'Burns extra gas safely.' },
            { en: 'lifeboat', pt: 'baleeira', def: 'For escape in an emergency.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🌊 Chegando à plataforma',
          textTitle: 'Life above the water',
          text: 'Offshore is a world of its own. You arrive by helicopter, and everything runs by radio.\n\nThe platform has areas for living, drilling, processing, and utilities. Everywhere there are gauges and instruments showing variables — pressure, temperature, level, flow.\n\nThis station gives you the words to live and work above the water: comparisons, variables, circuits, and the international radio alphabet.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u8:v:platform',
          sp: { g: 'venpt', en: 'platform', u: 8 },
          title: '📦 “Platform” é…', main: null,
          options: opts('plataforma (estrutura no mar)', ['plataforma de trem', 'sapato', 'programa']),
          expl: 'Cuidado com o falso amigo: aqui é a plataforma offshore.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:bg1',
          title: '🌊 Como se chega à plataforma?', main: null,
          options: opts('de helicóptero', ['de bicicleta', 'a pé', 'de trem']),
          expl: 'You arrive by helicopter.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u8:v:flare',
          sp: { g: 'venpt', en: 'flare', u: 8 },
          title: '📦 O “flare” serve para…', main: null,
          options: opts('queimar o excesso de gás com segurança', ['iluminar festas', 'aquecer a comida', 'sinalizar o rádio']),
          expl: 'flare = queimador de gás.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases sobre a plataforma usando comparativos: "Offshore work is more hazardous than onshore work. The platform is as big as a football field."',
        waText: 'Registro: 3 sentences — the platform (comparativos).'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: áreas da plataforma, comparativos, variáveis e ajustes, circuitos, licença por escrito, rádio e consonant clusters.',
      items: [
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:ko1',
          title: '🌊 Onde os helicópteros pousam?', main: null,
          options: opts('on the helideck', ['in the process area', 'on the lifeboat', 'in the sea']),
          expl: 'helideck = heliponto.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:ko2',
          title: '🌊 Como escapar numa emergência?', main: null,
          options: opts('by lifeboat', ['by helicopter only', 'by swimming', 'by radio']),
          expl: 'Lifeboats/baleeiras nos dois lados.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:ko3',
          title: '🌊 Quais são os 3 maiores perigos numa plataforma? (opinião comum)', main: null,
          options: opts('gás inflamável, mau tempo, faíscas elétricas', ['barulho, comida, sono', 'sol, chuva, vento fraco', 'reuniões, e-mails, café']),
          expl: 'Flammable gas, bad weather, electrical sparks.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u8:g:ko4',
          title: '🔧 Monte a frase:', answer: 'The platform is as big as a football field',
          expl: 'as big as.'
        }
      ]
    },

    read1: {
      brief: 'Uma plataforma de produção por dentro: treinamento, tamanho e as quatro áreas. Leia e compare.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia com atenção:',
          textTitle: 'A production platform',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    lang1: { brief: 'Comparações: bigger than, as big as, not as big as — e os irregulares good/better, bad/worse.\n\n(Formatos: EGU Units 87-91 — adaptados.)', items: LANG1 },

    num: {
      brief: 'Medindo e ajustando variáveis: pressão (bar), temperatura (°C), nível (%) e vazão. E as ordens Increase / Reduce.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 As quatro variáveis:',
            cards: [
              { en: 'pressure → bar / kPa', pt: 'pressão', def: '1 bar = 100 kPa. 10 bar = 1 MPa.', tts: 'pressure, in bar' },
              { en: 'temperature → °C', pt: 'temperatura', def: 'degrees Celsius.', tts: 'temperature, degrees Celsius' },
              { en: 'level → % or m', pt: 'nível', def: 'How full the tank is.', tts: 'level, per cent or metres' },
              { en: 'flow → m³/min', pt: 'vazão', def: 'cubic metres per minute.', tts: 'flow, cubic metres per minute' }
            ]
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u8:n:var1',
            title: '🔢 O nível é 2.1 m e o tanque está 70% cheio. Qual variável?', main: null,
            options: opts('level (nível)', ['pressure', 'temperature', 'flow']),
            expl: 'Nível: metros ou por cento.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u8:n:var2',
            title: '🔢 “Increase the pressure to 20 bar” — de 15 para 20 é…', main: null,
            options: opts('aumentar', ['reduzir', 'manter', 'desligar']),
            expl: 'Increase = aumentar.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u8:n:var3',
            title: '🔢 1 bar equivale a…', main: null,
            options: opts('100 kilopascals (kPa)', ['10 kPa', '1000 kPa', '1 kPa']),
            expl: '1 bar = 100 kPa.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 999, rnd: rnd, diff: 2 }));
        }
        return items;
      }
    },

    job: {
      brief: "It's my job: Igor Menezes é técnico de instrumentação numa plataforma. Instala, calibra e conserta — e adora a vida embarcada.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Igor Menezes — instrument technician',
          text: "I'm Igor Menezes, an instrument technician on a production platform. I install, maintain, and repair the instruments — the gauges and sensors that measure pressure, level, temperature, and flow. When something is wrong, I diagnose it and solve it.\n\nLife offshore is two weeks on and two weeks off. I work twelve hours a day, seven days a week. In my free time there's a gym, a TV, and books. The accommodation is small but comfortable, and the food is good.\n\nFor me, it's better than onshore work — the money is better, and I like the team."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:job1',
          title: '👷 What does Igor install and repair?', main: null,
          options: opts('Instruments (gauges and sensors)', ['Helicopters', 'Lifeboats', 'The kitchen']),
          expl: 'Instrument technician cuida dos instrumentos.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:job2',
          title: '👷 How long is his rotation?', main: null,
          options: opts('Two weeks on, two weeks off', ['One month on', 'Every weekend off', 'One year on']),
          expl: '2 on / 2 off — ritmo offshore clássico.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:job3',
          title: '👷 What is there in his free time?', main: null,
          options: opts('A gym, a TV, and books', ['A cinema and a pool', 'Nothing', 'A beach']),
          expl: 'gym, TV, books.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:job4',
          title: '👷 What does he think about offshore work?', main: null,
          options: opts("It's better than onshore work", ['It is worse', 'It is boring', 'He hates it']),
          expl: '"For me, it\'s better than onshore work."'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: vantagens e desvantagens do trabalho offshore, na sua opinião ("Offshore work is better because… but…").',
        waText: 'Registro: prós e contras do trabalho offshore.'
      }
    },

    lang2: { brief: 'Mais comparações + as ordens de ajuste: Increase / Reduce the pressure/level/temperature.\n\n(Formatos: EGU Units 87-91 — adaptados.)', items: LANG2 },

    vocab1: {
      brief: 'Eletricidade e circuitos: current, voltage, resistance — e a lei V = I × R que o multímetro mede.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 O circuito elétrico:',
            cards: [
              { en: 'current (I) → amps', pt: 'corrente', def: 'The flow of electricity.', tts: 'current, in amps' },
              { en: 'voltage (V) → volts', pt: 'tensão', def: 'The push of electricity.', tts: 'voltage, in volts' },
              { en: 'resistance (R) → ohms', pt: 'resistência', def: 'What slows the current.', tts: 'resistance, in ohms' },
              { en: 'V = I × R', pt: 'lei de Ohm', def: 'Voltage equals current times resistance.', tts: 'V equals I times R' },
              { en: 'circuit', pt: 'circuito', def: 'Must be complete, no short circuit.' },
              { en: 'multimeter', pt: 'multímetro', def: 'Igor uses it to test circuits.' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u8:v:elec1',
            title: '📦 Ligue a variável à unidade:',
            pairs: [['current', 'amps'], ['voltage', 'volts'], ['resistance', 'ohms'], ['pressure', 'bar']],
            expl: 'Variável ↔ unidade.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u8:v:elec2',
            title: '📦 Um circuito só funciona se…', main: null,
            options: opts('estiver completo e sem curto', ['estiver molhado', 'tiver muitas cores', 'for muito longo']),
            expl: 'Complete circuit, no short circuit.'
          }
        ];
        DF.pickN(GLOSSARY.slice(0, 11), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 8));
        });
        DF.pickN(TOOLS.slice(6), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 8));
        });
        return items;
      }
    },

    write: {
      brief: 'Pedido de licença por escrito: o formulário que todo embarcado preenche para faltar com justificativa.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ O formulário de licença',
          textTitle: 'A leave request form',
          text: 'To ask for time off, you complete a leave request form:\n\nEmployee name · Department · Supervisor\nType of absence: Sick / Personal Leave / Maternity-Paternity / Other\nDates: From … to …\nReason for absence\nSignature · Date\n\n"Absence" means not being at work. Choose the right type and give the dates.',
          nextLabel: 'Continuar ▸'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:leave1',
          title: '✍️ “Absence” significa…', main: null,
          options: opts('não estar no trabalho', ['estar doente sempre', 'trabalhar em dobro', 'chegar cedo']),
          expl: 'absence = ausência.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u8:r:leave2',
          title: '✍️ Igor vai ao casamento do primo. Que tipo de licença?', main: null,
          options: opts('Personal Leave', ['Sick', 'Maternity', 'Emergency medical']),
          expl: 'Evento pessoal → Personal Leave.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u8:g:leave3',
          title: '✍️ “From 8 to 15 May” indica…', main: null,
          options: opts('as datas da ausência', ['o salário', 'o nome do chefe', 'o departamento']),
          expl: 'Dates of absence.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Leave request form',
        brief: 'Preencha um pedido de licença em inglês:',
        btn: '✍️ Preencher e enviar',
        fields: [
          { label: 'Employee name', ph: 'ex.: Igor Menezes' },
          { label: 'Department', ph: 'ex.: Maintenance' },
          { label: 'Type of absence', ph: 'ex.: Personal Leave' },
          { label: 'Dates (from … to …)', ph: 'ex.: from 8 to 15 May' },
          { label: 'Reason', ph: 'ex.: my cousin\'s wedding', rows: 2 }
        ]
      }
    },

    listen1: {
      brief: 'Conversa de rádio: leitura de manômetro, defeito e a linguagem do PTT (Over, Go ahead, Stand by, Out).',
      items: LISTEN1,
      script: SCRIPT
    },

    vocab2: {
      brief: 'O alfabeto internacional de rádio: Alpha, Bravo, Charlie… A ferramenta que faz P, B, V e E serem entendidos.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'pro',
            title: '📻 O alfabeto NATO (completo):',
            cards: [
              { en: 'A-B-C-D', pt: 'Alpha Bravo Charlie Delta', def: 'The start of the radio alphabet.', tts: 'Alpha. Bravo. Charlie. Delta.' },
              { en: 'E-F-G-H', pt: 'Echo Foxtrot Golf Hotel', def: '', tts: 'Echo. Foxtrot. Golf. Hotel.' },
              { en: 'P-B-V-E', pt: 'Papa Bravo Victor Echo', def: 'The hardest letters to hear on radio.', tts: 'Papa. Bravo. Victor. Echo.' },
              { en: 'W-X-Y-Z', pt: 'Whiskey X-ray Yankee Zulu', def: 'The end.', tts: 'Whiskey. X-ray. Yankee. Zulu.' }
            ]
          },
          {
            ui: 'choice', cat: 'spl', srsId: 'u8:v2:nato1',
            title: '📻 “Bravo · two · zero” soletra o part no.…', main: null,
            options: opts('B20', ['P20', 'V20', 'D20']),
            expl: 'B = Bravo → B20.'
          },
          {
            ui: 'choice', cat: 'spl', srsId: 'u8:v2:nato2',
            title: '📻 Soletre a empresa “AFS”:', main: null,
            options: opts('Alpha · Foxtrot · Sierra', ['Apple · Fox · Sun', 'A · F · S only', 'Alpha · Fox · Sam']),
            expl: 'A-F-S = Alpha, Foxtrot, Sierra.'
          },
          {
            ui: 'type', cat: 'spl', srsId: 'u8:v2:nato3',
            title: '📻 Ouça o rádio e escreva o código:',
            tts: 'Papa. two. four.', ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Papa - two - four',
            answers: ['P24'], placeholder: 'letra+números',
            expl: 'Papa two four → P24.', feedbackTts: 'Papa. two. four.'
          }
        ];
        return items;
      }
    },

    speak: {
      brief: 'Conversa de rádio na prática: chamar, confirmar, ler valores e encerrar — com o protocolo certo.',
      items: [
        {
          ui: 'choice', cat: 'fun', srsId: 'u8:f:spk1',
          title: '📻 Você chama o Martin. Como começa?', main: null,
          options: opts('Martin, this is Igor. Do you read? Over.', ['Hey Martin you there talk.', 'Martin! Martin! Martin!', 'Read me Martin now.']),
          expl: 'Identifique-se + “Do you read?” + “Over”.',
          feedbackTts: 'Martin, this is Igor. Do you read? Over.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u8:sp:speak1', unit: 8, waSec: 'Speaking',
          title: '🎤 Confirme a leitura:',
          target: 'The gauge reads five bar. Over.',
          ptHint: 'O manômetro marca cinco bar. Câmbio.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u8:sp:speak2', unit: 8, waSec: 'Speaking',
          title: '🎤 Peça para aguardar:',
          target: 'Stand by. I will check the process area.',
          ptHint: 'Aguarde. Vou verificar a área de processo.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave uma conversa de rádio completa (2 papéis): chamar, pedir leitura de um manômetro, responder e encerrar com "Out".',
        waText: 'Registro: conversa de rádio (2 papéis).'
      }
    },

    pron: {
      brief: 'Consonant clusters: str, ct, xtr — grupos de consoantes sem vogal no meio. O calo do brasileiro.',
      items: [
        {
          ui: 'cards', cat: 'pro',
          title: '🗣️ Grupos de consoantes:',
          cards: [
            { en: 'instrument · stand by', pt: 'grupo STR / ST', def: 'No vowel between the letters.', tts: 'instrument. stand by.' },
            { en: 'inspect · electric', pt: 'grupo CT', def: 'Say both — no "inspecti".', tts: 'inspect. electric.' },
            { en: 'platform · production', pt: 'grupo PL / PR', def: 'Not "peluh" — just pl / pr.', tts: 'platform. production.' }
          ]
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u8:p:cl1',
          title: '🗣️ Ouça e escolha o que você ouviu:',
          tts: 'instrument', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“instrument”',
          options: opts('instrument', ['inisturument', 'instrumento', 'insturment']),
          expl: 'Sem vogais extras: in-STR-ument.', feedbackTts: 'instrument'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u8:sp:pron1', unit: 8, waSec: 'Pronunciation',
          title: '🎤 Fale sem vogal extra:',
          target: "It's an electrical instrument.",
          ptHint: 'e-LEC-tri-cal in-STR-ument.'
        }
      ]
    },

    check: { brief: 'Autoavaliação da estação Working Offshore.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 8 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 8:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u8:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 8 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 8));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I know key words connected with working offshore.',
    'I can make positive, negative, and equal comparative sentences.',
    'I can talk about measurement and adjustment of variables.',
    'I can talk about electrical circuits.',
    'I can complete a leave request form.',
    'I can understand and use language for radio communications.',
    'I can pronounce consonant clusters correctly.'
  ];

  DF.UNIT_DATA[8] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'phone', 'part', 'qty'], max: 999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
