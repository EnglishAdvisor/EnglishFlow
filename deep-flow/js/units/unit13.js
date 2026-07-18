/* DEEP FLOW — units/unit13.js
   UNIT 13 — The Refinery (2500 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U13 (p.88-93) — objetivos, nada
   copiado; gramática = a Voz Passiva (is/are + particípio) EGU Units 23-24,
   adaptada; PT técnico: OFFSHORE2. Personagem autoral: Duda Farias (process
   technician). Reading autoral sobre destilação fracionada. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'refine', pt: 'refinar', def: 'turn crude oil into useful products.' },
    { en: 'fractional distillation', pt: 'destilação fracionada', def: 'separating crude oil by boiling point.' },
    { en: 'furnace', pt: 'forno', def: 'where the crude oil is boiled.' },
    { en: 'boil', pt: 'ferver', def: 'heat a liquid until it becomes vapour.' },
    { en: 'degrees Celsius', pt: 'graus Celsius (°C)', def: 'the unit of temperature.' },
    { en: 'kerosene', pt: 'querosene', def: 'a light product — jet fuel.' },
    { en: 'petrodiesel', pt: 'óleo diesel', def: 'a fuel for trucks and engines.' },
    { en: 'fuel oil', pt: 'óleo combustível', def: 'a heavy product.' },
    { en: 'asphalt', pt: 'asfalto / betume', def: 'the heaviest product — for roads.' },
    { en: 'LPG', pt: 'GLP (gás de cozinha)', def: 'liquid petroleum gas — the lightest.' },
    { en: 'gas', pt: 'gás', def: 'petroleum gas rises to the top of the tower.' },
    { en: 'solid', pt: 'sólido', def: 'not liquid or gas — like asphalt when cold.' },
    { en: 'earth', pt: 'aterrar (BrE)', def: 'connect to the ground for safety (AmE: ground).' },
    { en: 'melt', pt: 'derreter', def: 'become liquid because of heat.' },
    { en: 'bulk tanker', pt: 'caminhão-tanque a granel', def: 'carries large volumes of product.' }
  ];

  const TOOLS = [
    { en: 'distillation tower', pt: 'torre de destilação' },
    { en: 'fraction', pt: 'fração' },
    { en: 'jetty', pt: 'píer / cais' },
    { en: 'tank farm', pt: 'parque de tanques' },
    { en: 'process technician', pt: 'técnico de processo' },
    { en: 'monitor', pt: 'monitorar' },
    { en: 'shut down', pt: 'parar (a planta)' },
    { en: 'production log', pt: 'registro de produção' },
    { en: 'boiling point', pt: 'ponto de ebulição' },
    { en: 'salt marsh', pt: 'salina / mangue salgado' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: a Voz Passiva ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pas1',
      title: '🔧 Passiva:', main: 'The crude oil ___ in the distillation towers.',
      options: opts('is refined', ['refines', 'is refining', 'refine']),
      expl: 'is + particípio: is refined.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pas2',
      title: '🔧 Ativa ou passiva?', main: 'The oil is taken from the ships by the pipes.',
      options: opts('passiva (is taken)', ['ativa', 'imperativa', 'pergunta']),
      expl: 'be + particípio + by → passiva.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pas3',
      title: '🔧 Escolha a passiva correta:', main: 'The trees ___ the refinery.',
      options: opts('hide', ['are hidden', 'is hidden', 'hides']),
      expl: 'Cuidado: aqui a ATIVA é natural (the trees hide). A passiva seria "the refinery is hidden by the trees".',
      trapNote: '“hide” (ativa) está certa aqui; “is hidden” exigiria “the refinery”.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pas4',
      title: '🔧 Passiva:', main: 'Kerosene ___ to the airport by a pipeline.',
      options: opts('is taken', ['takes', 'is taking', 'take']),
      expl: 'is taken (particípio de take).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pas5',
      title: '🔧 Passiva:', main: 'Tankers ___ their oil at the jetty.',
      options: opts('are unloaded', ['unload', 'is unloaded', 'unloading']),
      expl: 'Cuidado: se o sujeito é "tankers" que descarregam, a ativa "unload" é natural. Passiva: "the oil is unloaded".',
      trapNote: 'Aqui "unload" (ativa) é o esperado; passiva pediria "the oil".'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pas6',
      title: '🔧 Passiva:', main: 'The crude oil ___ in the tanks.',
      options: opts('is stored', ['stores', 'is storing', 'store']),
      expl: 'is stored.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u13:g:ord1',
      title: '🔧 Monte a passiva:', answer: 'The oil is refined in the tower',
      expl: 'is + particípio + lugar.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: passiva num processo ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pp1',
      title: '🔧 Processo (passiva):', main: 'First, the crude oil ___ into the furnace.',
      options: opts('is pumped', ['pumps', 'pump', 'is pumping']),
      expl: 'is pumped.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pp2',
      title: '🔧 Processo:', main: 'Next, the oil ___ in the furnace.',
      options: opts('is boiled', ['boils it', 'boil', 'is boiling it']),
      expl: 'is boiled (passiva).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pp3',
      title: '🔧 Processo:', main: 'The products ___ out of the tower.',
      options: opts('are piped', ['pipe', 'is piped', 'piping']),
      expl: 'products (plural) → are piped.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pp4',
      title: '🔧 Segurança do tanque (passiva):', main: 'First, the tanker ___ .',
      options: opts('is earthed', ['earths', 'earth', 'is earthing']),
      expl: 'is earthed = é aterrado.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pp5',
      title: '🔧 Complete a sequência:', main: 'Finally, the products ___ out of the refinery.',
      options: opts('are taken', ['take', 'is taken', 'taking']),
      expl: 'are taken (por caminhão, trem, navio).'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u13:g:ord2',
      title: '🔧 Monte a passiva:', answer: 'The pipes are connected to the tanker',
      expl: 'are + particípio.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u13:g:pp6',
      title: '🔧 Escolha a passiva correta:', main: null,
      options: opts('The gas is stored in tanks.', ['The gas stores in tanks.', 'The gas storing in tanks.', 'The gas store in tanks.']),
      expl: 'is stored.'
    }
  ];

  // ---------- LISTENING: um tour pela refinaria (autoral) ----------
  const SCRIPT =
    'A refinery tour\n\n' +
    '1. This is the jetty. Tankers bring crude oil to the refinery and unload it here.\n' +
    '2. The crude oil travels along these pipes into the tanks at the tank farm.\n' +
    '3. The crude oil is stored in these tanks until it is refined. Some are 80 metres high.\n' +
    '4. This is the main refinery. Here the oil is refined in the distillation towers.\n' +
    '5. These pipes take the products out. Some carry kerosene to the airport.\n' +
    '6. The admin block is where the offices are. The people here manage the refinery.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 430 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u13:l:tour1',
      title: '🎧 O que acontece no jetty (píer)?',
      tts: dlg(['This is the jetty. Tankers bring crude oil to the refinery and unload it here.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“This is the jetty. Tankers bring crude oil and unload it here.”',
      options: opts('os navios descarregam o petróleo cru', ['os produtos são vendidos', 'a comida é preparada', 'o gás é queimado']),
      expl: 'Jetty = onde o cru chega e é descarregado.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u13:l:tour2',
      title: '🎧 Onde o cru fica armazenado?',
      tts: dlg(['The crude oil is stored in these tanks until it is refined.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The crude oil is stored in these tanks until it is refined.”',
      options: opts('nos tanques (tank farm)', ['no escritório', 'no avião', 'no mar']),
      expl: 'Stored in the tanks até ser refinado.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u13:l:tour3',
      title: '🎧 Onde o óleo é refinado?',
      tts: dlg(['Here the oil is refined in the distillation towers.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Here the oil is refined in the distillation towers.”',
      options: opts('nas torres de destilação', ['nos caminhões', 'no jetty', 'no admin block']),
      expl: 'Distillation towers = torres de destilação.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u13:l:tour4',
      title: '🎧 O que os canos levam ao aeroporto?',
      tts: dlg(['Some pipes carry kerosene to the airport.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Some pipes carry kerosene to the airport.”',
      options: opts('querosene (jet fuel)', ['asfalto', 'água', 'gasolina de posto']),
      expl: 'Kerosene = combustível de avião.'
    }
  ];

  // ---------- READING: destilação fracionada (autoral) ----------
  const READ_TEXT =
    'How a refinery works\n\n' +
    'A refinery turns crude oil into many products: petroleum gas, petrol, kerosene, diesel, fuel oil, and asphalt.\n\n' +
    'First, the crude oil is pumped into a furnace and boiled. The boiling oil enters the bottom of the distillation tower. Boiling separates the crude oil into fractions — "fraction" means part.\n\n' +
    'Each fraction has a different boiling point. The lightest product, petroleum gas, rises to the top. The heaviest, asphalt, sinks to the bottom. After the products are separated, they are piped out, stored in tanks, and finally taken out of the refinery by tanker, rail, boat, or pipeline.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u13:r:fd1',
      title: '📖 What happens first?', main: null,
      options: opts('The crude oil is pumped into a furnace and boiled', ['The asphalt is sold', 'The gas rises', 'The tower is cleaned']),
      expl: 'Primeiro: bombear e ferver.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u13:r:fd2',
      title: '📖 What does "fraction" mean?', main: null,
      options: opts('part', ['whole', 'furnace', 'tower']),
      expl: 'fraction = parte.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u13:r:fd3',
      title: '📖 Which product rises to the TOP?', main: null,
      options: opts('Petroleum gas (the lightest)', ['Asphalt', 'Fuel oil', 'Diesel']),
      expl: 'O mais leve sobe: gás.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u13:r:fd4',
      title: '📖 Which product sinks to the BOTTOM?', main: null,
      options: opts('Asphalt (the heaviest)', ['Petrol', 'Gas', 'Kerosene']),
      expl: 'O mais pesado afunda: asfalto.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u13:r:fd5',
      title: '📖 How are products taken out of the refinery?', main: null,
      options: opts('By tanker, rail, boat, or pipeline', ['By helicopter only', 'By hand', 'They are not taken out']),
      expl: 'Caminhão, trem, navio ou duto.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u13:f:1',
      title: '🧰 Explicando um processo, começamos com…', main: null,
      options: opts('First…', ['Finally…', 'Because…', 'But…']),
      expl: 'First → Next → Then → After that → Finally.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u13:f:2',
      title: '🧰 “Shut down the plant” significa…', main: null,
      options: opts('parar a planta com segurança', ['ligar tudo', 'vender a planta', 'limpar o chão']),
      expl: 'shut down = parada programada.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u13:f:3',
      title: '🧰 “Monitor the equipment” quer dizer…', main: null,
      options: opts('acompanhar e verificar o equipamento', ['comprar telas', 'desligar tudo', 'pintar']),
      expl: 'monitor = acompanhar ao longo do tempo.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u13:s:1',
      title: '🔤 Qual está correta?', main: null,
      options: opts('kerosene', ['querosene', 'kerosine', 'kerozene']),
      expl: 'kerosene (em inglês).'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u13:s:2',
      title: '🔤 Qual está correta?', main: null,
      options: opts('furnace', ['furnice', 'fornace', 'furnase']),
      expl: 'furnace = forno.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u13:s:nato1',
      title: '📻 Rádio NATO: “Golf · Alpha · Sierra” soletra…', main: null,
      options: opts('GAS', ['GAP', 'GUS', 'GASH']),
      expl: 'G-A-S = gas.'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '2.500 m. O lugar mágico onde o cru vira mil produtos: a refinaria. Fornos, torres e a Voz Passiva que explica todo processo.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — a refinaria:',
          cards: [
            { en: 'refine', pt: 'refinar', def: 'Turn crude oil into products.' },
            { en: 'furnace', pt: 'forno', def: 'Where the crude oil is boiled.' },
            { en: 'distillation tower', pt: 'torre de destilação', def: 'Separates the oil into fractions.', tts: 'distillation tower' },
            { en: 'fraction', pt: 'fração', def: 'A product with its own boiling point.' },
            { en: 'kerosene / asphalt', pt: 'querosene / asfalto', def: 'The lightest and the heaviest.', tts: 'kerosene. asphalt.' },
            { en: 'boiling point', pt: 'ponto de ebulição', def: 'The temperature where it boils.', tts: 'boiling point' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🏭 De um líquido escuro, mil coisas',
          textTitle: 'The refinery',
          text: 'Crude oil, on its own, is not very useful. The refinery changes that.\n\nBy boiling the oil and separating it by temperature — fractional distillation — the refinery makes gas, petrol, kerosene, diesel, fuel oil, and asphalt.\n\nHere everything is explained in the Passive: "The oil is pumped into the furnace. It is boiled. The products are piped out." Learn the process, and you learn the grammar.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u13:v:refine',
          sp: { g: 'venpt', en: 'refine', u: 13 },
          title: '📦 “Refine” é…', main: null,
          options: opts('refinar (transformar cru em produtos)', ['requintar comida', 'reformar a casa', 'recusar']),
          expl: 'refine = refinar.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u13:r:bg1',
          title: '🏭 O que separa o cru em frações?', main: null,
          options: opts('a fervura por temperatura (destilação)', ['a pintura', 'o congelamento', 'a soldagem']),
          expl: 'Boiling separates the crude into fractions.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u13:v:furnace',
          sp: { g: 'venpt', en: 'furnace', u: 13 },
          title: '📦 “Furnace” é…', main: null,
          options: opts('forno (ferve o cru)', ['ventilador', 'freezer', 'móvel']),
          expl: 'furnace = forno.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases na passiva: "The oil is pumped into the furnace. It is boiled. The products are piped out."',
        waText: 'Registro: 3 sentences — the refinery (passiva).'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: tour pela refinaria, a Voz Passiva, explicar um processo, temperatura e destilação fracionada.',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u13:v:ko1',
          title: '🏭 Ligue o produto ao peso:',
          pairs: [['LPG', 'lightest gas'], ['petrol', 'light'], ['diesel', 'medium'], ['asphalt', 'heaviest']],
          expl: 'Do mais leve ao mais pesado.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u13:v:ko2',
          title: '🏭 Qual produto é SÓLIDO (quando frio)?', main: null,
          options: opts('asphalt', ['petrol', 'LPG', 'kerosene']),
          expl: 'Asphalt é o mais pesado, quase sólido.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u13:v:ko3',
          title: '🏭 Qual queima como GÁS?', main: null,
          options: opts('LPG', ['asphalt', 'fuel oil', 'diesel']),
          expl: 'LPG = liquid petroleum gas.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u13:g:ko4',
          title: '🔧 Monte a passiva:', answer: 'The crude oil is stored in tanks',
          expl: 'is + particípio.'
        }
      ]
    },

    listen1: {
      brief: 'Um tour pela refinaria: do jetty ao admin block. Ouça o guia e siga o caminho do petróleo — tudo na passiva.',
      items: LISTEN1,
      script: SCRIPT
    },

    lang1: { brief: 'A Voz Passiva: is/are + particípio. "The oil is refined." Quem faz não importa — o processo importa.\n\n(Formatos: EGU Units 23-24 — adaptados.)', items: LANG1 },

    speak: {
      brief: 'Explicando um processo: carregar um caminhão-tanque com segurança, passo a passo, na passiva.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '💬 Carregando um bulk tanker (com segurança)',
          textTitle: 'Steps in the Passive',
          text: 'First, the tanker is driven into the loading area.\nThen, the tanker is earthed (connected to the ground).\nNext, the pipes are connected.\nAfter that, the tanker is loaded.\nThen, the hoses are drained.\nFinally, the tanker is driven out of the loading area.',
          readAloud: true
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u13:r:spk1',
          title: '💬 Por que aterrar (earth) o caminhão?', main: null,
          options: opts('por segurança contra faíscas/estática', ['para pesar', 'para pintar', 'para acelerar']),
          expl: 'Aterramento evita faísca estática.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u13:sp:speak1', unit: 13, waSec: 'Speaking',
          title: '🎤 Explique um passo:',
          target: 'First, the tanker is driven into the loading area.',
          ptHint: 'Primeiro, o caminhão é conduzido à área de carga.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u13:sp:speak2', unit: 13, waSec: 'Speaking',
          title: '🎤 Outro passo:',
          target: 'Then the pipes are connected.',
          ptHint: 'Depois, os canos são conectados.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave o processo de carregar um caminhão-tanque em 4-5 passos, na passiva (First… Then… Next… Finally…).',
        waText: 'Registro: processo na passiva (carregar tanque).'
      }
    },

    num: {
      brief: 'Temperatura: graus Celsius, do gelo derretendo (0 °C) ao cru aquecido a 400 °C. Os números do calor.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 Marcos de temperatura:',
            cards: [
              { en: '0 °C', pt: 'zero graus', def: 'Ice melts. zero degrees Celsius.', tts: 'zero degrees Celsius' },
              { en: '100 °C', pt: 'cem graus', def: 'Water boils.', tts: 'one hundred degrees Celsius' },
              { en: '37 °C', pt: 'trinta e sete', def: 'Normal body temperature.', tts: 'thirty-seven degrees Celsius' },
              { en: '-42 °C / 400 °C', pt: 'menos 42 / 400', def: 'LPG boils / crude is heated.', tts: 'minus forty-two. four hundred degrees.' }
            ]
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u13:n:t1',
            title: '🔢 A água ferve a…', main: null,
            options: opts('100 °C', ['0 °C', '37 °C', '400 °C']),
            expl: 'Water boils at 100 °C.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u13:n:t2',
            title: '🔢 “-42 °C” lê-se…', main: null,
            options: opts('minus forty-two degrees Celsius', ['forty-two degrees only', 'less forty-two', 'minus twenty-four']),
            expl: 'minus = menos (temperatura negativa).'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u13:n:t3',
            title: '🔢 Na refinaria, o cru é aquecido a cerca de…', main: null,
            options: opts('400 °C', ['40 °C', '4 °C', '4000 °C']),
            expl: 'Crude oil heated to ~400 °C.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 999, rnd: rnd, diff: 2 }));
        }
        return items;
      }
    },

    lang2: { brief: 'A passiva num processo: cada etapa da refinaria descrita com is/are + particípio.\n\n(Formatos: EGU Units 23-24 — adaptados.)', items: LANG2 },

    job: {
      brief: "It's my job: Duda Farias é técnica de processo numa grande refinaria. Monitora, faz troubleshooting e planeja paradas.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Duda Farias — process technician',
          text: "I'm Duda Farias, a process technician at a big refinery — more than 300 tanks and nearly 1,000 workers. My team takes care of all the refinery equipment.\n\nWhen the refinery runs normally, we monitor everything — we check and maintain it. When there's a problem, we troubleshoot: we understand what's wrong, then repair it.\n\nSometimes we shut down part of the refinery for a big repair or maintenance job, like furnace cleaning. You can't just switch it off — we schedule a shut down a year in advance. We also test the products (petrol, kerosene) to make sure they're good, and we write in the production log."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u13:r:job1',
          title: '👷 What does Duda\'s team do when the refinery runs normally?', main: null,
          options: opts('Monitor the equipment', ['Sleep', 'Sell the oil', 'Drill wells']),
          expl: 'Monitor = check and maintain.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u13:r:job2',
          title: '👷 What is "shutting down"?', main: null,
          options: opts('Safely stopping some machines', ['Turning off the lights', 'Firing workers', 'A holiday']),
          expl: 'Parada segura para reparo/manutenção.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u13:r:job3',
          title: '👷 How far in advance do they plan a shut down?', main: null,
          options: opts('A year', ['A day', 'A week', 'Never']),
          expl: 'Um ano de antecedência.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u13:r:job4',
          title: '👷 What is the production log?', main: null,
          options: opts('A record of how much oil was processed and made', ['A tree', 'A tool', 'A safety sign']),
          expl: 'Registro de produção.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: explique em 3 frases o que um técnico de processo faz (monitor, troubleshoot, shut down).',
        waText: 'Registro: o trabalho do técnico de processo.'
      }
    },

    read1: {
      brief: 'Destilação fracionada: como o forno e a torre transformam um líquido escuro em gás, gasolina, querosene e asfalto. Leia e responda.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia o processo:',
          textTitle: 'Fractional distillation',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    write: {
      brief: 'Explicando um processo por escrito: um parágrafo com First, Next, Then, After that, Finally.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ O parágrafo de processo',
          textTitle: 'Explaining a process',
          text: 'A paragraph is a group of sentences that explain one idea.\n\nTo explain a process, use sequence words:\nFirst … Next … Then … After that … Finally …\n\nAnd use the Passive: "First, the crude oil is pumped into the furnace. Next, it is boiled. Then the fractions are separated…"',
          nextLabel: 'Continuar ▸'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u13:g:wr1',
          title: '✍️ Qual palavra encerra a sequência?', main: null,
          options: opts('Finally', ['First', 'Next', 'Then']),
          expl: 'Finally = por fim.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u13:g:wr2',
          title: '✍️ Complete na passiva:', main: 'Next, the boiling oil ___ into the tower.',
          options: opts('enters', ['is entered', 'entering', 'enter']),
          expl: '"enter" costuma ser ativo aqui (o óleo entra). A passiva completa seria "is separated".'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Writing — explique a destilação',
        brief: 'Escreva um parágrafo (4-5 frases, na passiva) explicando a destilação fracionada, com First/Next/Then/Finally.',
        btn: '✍️ Escrever e enviar',
        fields: [
          { label: 'Seu parágrafo', ph: 'First, the crude oil is pumped into the furnace…', rows: 6 }
        ]
      }
    },

    project: {
      brief: 'Missão de pesquisa: uma refinaria do seu país. Descubra localização, produção e como o cru chega e sai.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧪 Project — A refinery in my country',
          textTitle: 'Sua missão',
          text: 'Pesquise (pode ser em português) uma refinaria do Brasil e escreva em inglês simples:\n\n1. Where is it?\n2. How much oil does it process (about)?\n3. How does crude oil arrive, and how do the products leave?\n\nEx.: "Crude oil arrives by pipeline. Products leave by tanker."',
          nextLabel: 'Preencher a entrega ▸'
        }
      ],
      task: {
        type: 'project',
        title: '🧪 Entrega do Project',
        brief: 'Preencha e envie ao mentor:',
        btn: '🧪 Preencher e enviar no WhatsApp',
        fields: [
          { label: 'Refinery name + location', ph: 'ex.: … in …' },
          { label: 'Processing (about)', ph: 'ex.: about … barrels per day' },
          { label: 'How oil arrives / products leave', ph: 'ex.: arrives by pipeline; leaves by tanker', rows: 2 }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação The Refinery.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 13 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 13:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u13:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 13 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 13));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I can talk about an oil refinery.',
    'I can use the Passive.',
    'I can explain a process.',
    'I can talk about temperature.',
    'I can understand fractional distillation.'
  ];

  DF.UNIT_DATA[13] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'qty'], max: 999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
