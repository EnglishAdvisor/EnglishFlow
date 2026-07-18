/* DEEP FLOW — units/unit02.js
   UNIT 2 — Upstream (200 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U2 (p.10-15) — objetivos, nada
   copiado; formatos de gramática WB-1 (EGU Units 6-7 do/does; 44-47 questions),
   adaptados; PT técnico conferido no OFFSHORE2. Personagens e textos autorais:
   Rodrigo Nunes (well test operator), Marta Silveira (driller). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  // fonte: keywords SB-1 U2; definições autorais
  const GLOSSARY = [
    { en: 'upstream', pt: 'setor upstream (E&P)', def: 'the sector that finds and produces oil and gas.' },
    { en: 'downstream', pt: 'setor downstream', def: 'the sector that makes and sells useful products.' },
    { en: 'exploration', pt: 'exploração', def: 'looking for oil and gas below the surface.' },
    { en: 'development', pt: 'desenvolvimento', def: 'preparing a field for production.' },
    { en: 'production', pt: 'produção', def: 'when oil and gas flow from the well.' },
    { en: 'hydrocarbons', pt: 'hidrocarbonetos', def: 'oil and gas — made of hydrogen and carbon.' },
    { en: 'crude oil', pt: 'petróleo cru', def: 'oil from the well, before the refinery.' },
    { en: 'barrel', pt: 'barril (159 litros)', def: 'a common measure for oil: bbl.' },
    { en: 'cubic metre', pt: 'metro cúbico (m³)', def: 'a measure for gas and liquids: 1 m³ = 1,000 litres.' },
    { en: 'pipeline', pt: 'duto / oleoduto', def: 'a long line of pipes that transports oil or gas.' },
    { en: 'rock', pt: 'rocha', def: 'hydrocarbons live inside porous rock.' },
    { en: 'fuel', pt: 'combustível', def: 'energy for cars and planes — petrol, diesel, jet fuel.' },
    { en: 'driller', pt: 'sondador', def: 'the person who supervises a drilling crew.' },
    { en: 'roughneck', pt: 'plataformista', def: 'a member of the drilling crew, under the driller.' },
    { en: 'geologist', pt: 'geólogo(a)', def: 'a scientist who studies rocks.' }
  ];

  const TOOLS = [
    { en: 'crane operator', pt: 'operador de guindaste' },
    { en: 'well test operator', pt: 'operador de teste de poço' },
    { en: 'pipe-fitter', pt: 'montador de tubulação' },
    { en: 'geotechnician', pt: 'geotécnico' },
    { en: 'maintenance technician', pt: 'técnico de manutenção' },
    { en: 'production operator', pt: 'operador de produção' },
    { en: 'sector', pt: 'setor' },
    { en: 'data', pt: 'dados' },
    { en: 'record', pt: 'registrar (dados)' },
    { en: 'skills', pt: 'habilidades' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: do / does ----------
  // fonte: objetivo SB-1 U2; formatos WB-1 (EGU Units 6-7), adaptados; frases autorais
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:do1',
      title: '🔧 Do ou Does?', main: '___ roughnecks work in offices?',
      options: opts('Do', ['Does', 'Is', 'Are']),
      expl: 'they (roughnecks, plural) → DO. Resposta: No, they don\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:do2',
      title: '🔧 Do ou Does?', main: '___ a driller supervise the crew?',
      options: opts('Does', ['Do', 'Is', 'Are']),
      expl: 'he/she/it (a driller) → DOES. Resposta: Yes, he does.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:do3',
      title: '🔧 Complete a negativa:', main: "A geologist ___ test wells. She studies rocks.",
      options: opts("doesn't", ["don't", 'not', "isn't"]),
      expl: 'she → doesn\'t + verbo base.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:do4',
      title: '🔧 Complete a negativa:', main: "I ___ like working in an office.",
      options: opts("don't", ["doesn't", 'not', "amn't"]),
      expl: 'I → don\'t. (EGU: I/you/we/they don\'t · he/she/it doesn\'t.)'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:do5',
      title: '🔧 Resposta curta:', main: 'Does a production operator check equipment? — Yes, he ___.',
      options: opts('does', ['do', 'is', 'checks']),
      expl: 'Resposta curta repete o auxiliar: Yes, he does.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:do6',
      title: '🔧 Escolha a frase correta:', main: null,
      options: opts('She doesn\'t work at night.', ['She doesn\'t works at night.', 'She don\'t work at night.', 'She not work at night.']),
      expl: 'Depois de doesn\'t, o verbo fica na forma base (work, sem -s).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:wh1',
      title: '🔧 Complete a pergunta:', main: '___ does Rodrigo work? — In different places in Brazil.',
      options: opts('Where', ['Who', 'When', 'What']),
      expl: 'Resposta de lugar → WHERE.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:wh2',
      title: '🔧 Complete a pergunta:', main: '___ do you work for? — A service company.',
      options: opts('Who', ['Where', 'Why', 'How']),
      expl: '“Who do you work for?” = para quem você trabalha.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:wh3',
      title: '🔧 Complete a pergunta:', main: 'How ___ hours per day do you work?',
      options: opts('many', ['much', 'long', 'often']),
      expl: 'hours é contável → HOW MANY. (How long = quanto tempo.)'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u2:g:ord1',
      title: '🔧 Monte a pergunta:', answer: 'What does a geologist do',
      expl: 'Wh- + does + sujeito + verbo base.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: Wh- questions no diálogo ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:whd1',
      title: '🔧 Complete o diálogo:', main: 'A: ___ time do you start?\nB: At seven o\'clock.',
      options: opts('What', ['Which hour', 'How', 'When time']),
      expl: '“What time do you start?” — hora exata.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:whd2',
      title: '🔧 Complete o diálogo:', main: 'A: ___ do they like the job?\nB: Because the money is good.',
      options: opts('Why', ['Who', 'Where', 'What']),
      expl: 'Resposta com because → pergunta com WHY.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:whd3',
      title: '🔧 Complete o diálogo:', main: 'A: How ___ oil companies find hydrocarbons?\nB: They drill wells.',
      options: opts('do', ['does', 'is', 'are']),
      expl: 'they (companies) → do.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:whd4',
      title: '🔧 Complete o diálogo:', main: 'A: ___ does she work in?\nB: She works in Kazakhstan.',
      options: opts('Which country', ['Which city is', 'What place does', 'Where country']),
      expl: 'Which country does she work in? — preposição fica no fim.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:whd5',
      title: '🔧 Qual pergunta combina com a resposta?', main: '“He tests wells before production starts.”',
      options: opts('What does he do?', ['Where is he?', 'Who is he with?', 'How many wells are there?']),
      expl: '“What does he do?” pergunta a função/trabalho.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u2:g:ord2',
      title: '🔧 Monte a pergunta:', answer: 'Where does the crew work',
      expl: 'Wh- + does + sujeito + verbo.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u2:g:ord3',
      title: '🔧 Monte a frase:', answer: 'Drillers sometimes find hydrocarbons',
      expl: 'Advérbio de frequência antes do verbo principal.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u2:g:whd6',
      title: '🔧 Escolha a pergunta correta:', main: null,
      options: opts('Does production start immediately?', ['Does production starts immediately?', 'Do production start immediately?', 'Production does start immediately?']),
      expl: 'Does + sujeito + verbo base (start, sem -s).'
    }
  ];

  // ---------- LISTENING: grandes números (autoral) ----------
  const SCRIPT =
    'Facts and figures — upstream\n' +
    '1. The world uses about ninety million barrels of oil per day.\n' +
    '2. This offshore field produces six hundred thousand barrels per day.\n' +
    '3. The biggest field is about two hundred and eighty kilometres long.\n' +
    '4. The gas plant processes twenty-five million cubic metres per day.';

  const LISTEN1 = [
    {
      ui: 'type', cat: 'lis', srsId: 'u2:l:big1',
      title: '🎧 Quantos barris por dia o mundo usa? (só o número, em milhões)',
      tts: 'The world uses about ninety million barrels of oil per day.',
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The world uses about ninety million barrels of oil per day.”',
      answers: ['90'], placeholder: 'em milhões',
      expl: 'ninety million = 90 milhões de bbl/d.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u2:l:big2',
      title: '🎧 Qual é a produção do campo?',
      tts: 'This offshore field produces six hundred thousand barrels per day.',
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“This offshore field produces six hundred thousand barrels per day.”',
      options: opts('600,000 bbl/d', ['6,000 bbl/d', '60,000 bbl/d', '6,000,000 bbl/d']),
      expl: 'six hundred thousand = 600.000.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u2:l:big3',
      title: '🎧 Qual o comprimento do campo? (km, só o número)',
      tts: 'The biggest field is about two hundred and eighty kilometres long.',
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The biggest field is about two hundred and eighty kilometres long.”',
      answers: ['280'], placeholder: 'km',
      expl: 'two hundred and eighty = 280 km.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u2:l:big4',
      title: '🎧 Quanto gás a planta processa por dia?',
      tts: 'The gas plant processes twenty-five million cubic metres per day.',
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The gas plant processes twenty-five million cubic metres per day.”',
      options: opts('25,000,000 m³/d', ['25,000 m³/d', '2,500,000 m³/d', '250,000 m³/d']),
      expl: 'twenty-five million = 25 milhões (m³/d).'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u2:f:and',
      title: '🧰 No inglês BRITÂNICO, 209 é…', main: null,
      options: opts('two hundred and nine', ['two hundred nine', 'two-oh-nine hundred', 'twenty and nine']),
      expl: 'BrE usa AND: two hundred AND nine. AmE às vezes omite.'
    }
  ];

  // ---------- READING: o processo upstream (autoral) ----------
  const READ_TEXT =
    'From rocks to flowing oil — the four steps\n\n' +
    'Step 1 is exploration. Scientists study rocks and do tests. They look for rocks that can hold hydrocarbons.\n\n' +
    'Step 2 is drilling. Drillers drill a well — and they sometimes find hydrocarbons. Not always!\n\n' +
    'Step 3 is development. The company does more tests and asks: how much oil is there? Are there any problems? If the answers are good, they prepare for production — for example, they build a pipeline to transport the oil.\n\n' +
    'Step 4 is production. Crude oil and gas flow from the well and along the pipeline. Now the field is alive.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u2:r:up1',
      title: '📖 Qual é a ordem correta dos 4 passos?', main: null,
      options: opts('exploration → drilling → development → production',
        ['drilling → exploration → production → development',
          'production → development → drilling → exploration',
          'exploration → development → drilling → production']),
      expl: 'Explorar → perfurar → desenvolver → produzir.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u2:r:up2',
      title: '📖 Do drillers always find hydrocarbons?', main: null,
      options: opts("No, they sometimes find them", ['Yes, always', 'No, they never find them', 'Only in Brazil']),
      expl: '"they sometimes find hydrocarbons. Not always!"'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u2:r:up3',
      title: '📖 Why do companies build pipelines?', main: null,
      options: opts('To transport the oil', ['To find more rocks', 'To study the well', 'To protect the workers']),
      expl: 'transport = transportar, levar para outro lugar.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u2:r:up4',
      title: '📖 No texto, “flow” significa…', main: null,
      options: opts('mover continuamente (escoar)', ['explodir', 'parar', 'medir']),
      expl: '"Crude oil and gas FLOW from the well" — escoam do poço.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u2:r:up5',
      title: '📖 O que acontece no development?', main: null,
      options: opts('Mais testes + preparação para produzir', ['A primeira perfuração', 'A venda do combustível', 'O estudo inicial das rochas']),
      expl: 'Development = testar quanto óleo há e preparar a produção.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u2:f:workfor',
      title: '🧰 Para perguntar a empresa de alguém:', main: null,
      options: opts('Who do you work for?', ['Who is your work?', 'For who works you?', 'Where do you work who?']),
      expl: '“Who do you work for?” — “A drilling company.”',
      feedbackTts: 'Who do you work for?'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u2:f:whatdo',
      title: '🧰 Para perguntar a função de alguém:', main: null,
      options: opts('What do you do?', ['What is your do?', 'What work you?', 'Who do you do?']),
      expl: '“What do you do?” — “I\'m a well test operator.”',
      feedbackTts: 'What do you do?'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u2:f:typical',
      title: '🧰 “On a typical day, I…” significa:', main: null,
      options: opts('Num dia típico/normal, eu…', ['Num dia de folga, eu…', 'Uma vez por ano, eu…', 'No meu primeiro dia, eu…']),
      expl: 'Frase-chave para descrever a rotina de trabalho.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u2:s:e1',
      title: '🔤 Qual palavra está escrita CORRETAMENTE?', main: null,
      options: opts('pipeline', ['pipelin', 'pipline', 'pypeline']),
      expl: 'pipeline — com E no final.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u2:s:e2',
      title: '🔤 Complete: upstr__m', main: null,
      options: opts('ea (upstream)', ['ee (upstreem)', 'ie (upstriem)', 'a (upstram)']),
      expl: 'upstrEAm — como “stream” (corrente).'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u2:s:e3',
      title: '🔤 Qual precisa de E no final?', main: null,
      options: opts('writ_ (escrever)', ['problem_', 'operator_', 'record_']),
      expl: 'write leva E; problem, operator e record não.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u2:s:nato1',
      title: '📻 Rádio NATO: “Whiskey · Echo · Lima · Lima” soletra…', main: null,
      options: opts('WELL', ['WALL', 'WILL', 'WHEEL']),
      expl: 'W-E-L-L = well (poço).'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: 'Descemos a 200 m. Aqui começa a cadeia: o setor que ENCONTRA e PRODUZ — upstream. Panorama antes de mergulhar nas rochas.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — as palavras da estação:',
          cards: [
            { en: 'upstream', pt: 'setor de exploração e produção', def: 'Find it, drill it, produce it.' },
            { en: 'downstream', pt: 'setor de refino e venda', def: 'Make useful products and sell them.' },
            { en: 'crude oil', pt: 'petróleo cru', def: 'Straight from the well — before the refinery.' },
            { en: 'hydrocarbons', pt: 'hidrocarbonetos', def: 'Hydrogen + carbon = oil and gas.' },
            { en: 'fuel', pt: 'combustível', def: 'Energy for cars, ships, and planes.' },
            { en: 'sector', pt: 'setor', def: 'A part of an industry.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🛢️ Dois setores, uma cadeia',
          textTitle: 'Upstream and downstream',
          text: 'The oil and gas industry has two sectors.\n\nWorkers in the upstream sector find and produce crude oil and natural gas — offshore and onshore.\n\nWorkers in the downstream sector make useful products from crude oil, like fuel for cars and planes, and sell them.\n\nIn Brazil, the upstream heart beats offshore: the big fields of the pré-sal.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u2:v:upstream',
          sp: { g: 'venpt', en: 'upstream', u: 2 },
          title: '📦 Quem ENCONTRA e PRODUZ óleo e gás é o setor…', main: null,
          options: opts('upstream', ['downstream', 'midstream office', 'HR']),
          expl: 'upstream = exploração e produção (E&P).'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u2:r:bg1',
          title: '🛢️ Complete:', main: 'Workers in the downstream sector ___ useful products from crude oil.',
          options: opts('make', ['find', 'drill', 'dig']),
          expl: 'Downstream produz (make) e vende produtos úteis.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u2:v:crude',
          sp: { g: 'venpt', en: 'crude oil', u: 2 },
          title: '📦 “Crude oil” é…', main: null,
          options: opts('o petróleo antes da refinaria', ['a gasolina pronta', 'o gás de cozinha', 'óleo de cozinha usado']),
          expl: 'crude = cru. Do poço direto, sem refino.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases: uma sobre o upstream, uma sobre o downstream e uma sobre o Brasil. Modelo: "The upstream sector finds and produces oil."',
        waText: 'Registro: 3 sentences — upstream, downstream, Brazil.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: vocabulário upstream, do/does e perguntas Wh-, medidas de óleo e gás, grandes números e a letra E. Primeiro: quem é quem na cadeia.',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u2:v:ko1',
          title: '🛢️ Ligue a palavra à explicação:',
          pairs: [
            ['crude oil', 'oil under the ground'],
            ['fuel', 'petrol and diesel, for example'],
            ['produce', 'bring out or make'],
            ['sectors', 'parts of an industry']
          ],
          expl: 'Vocabulário-chave do kickoff.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u2:v:ko2',
          title: '🛢️ “The part that gets oil and gas out of the ground” é o…', main: null,
          options: opts('upstream sector', ['downstream sector', 'sales department', 'refinery shop']),
          expl: 'Tirar do subsolo = upstream.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u2:v:ko3',
          title: '🛢️ “The part that makes and sells useful products” é o…', main: null,
          options: opts('downstream sector', ['upstream sector', 'exploration crew', 'drilling sector']),
          expl: 'Fazer e vender produtos = downstream.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u2:g:ko4',
          title: '🔧 Monte a frase:', answer: 'The industry has two sectors',
          expl: 'Sujeito + verbo + objeto.'
        }
      ]
    },

    read1: {
      brief: 'O processo upstream em 4 passos — da rocha ao óleo escoando. Leia e prove que entendeu o fluxo.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia com calma:',
          textTitle: 'The upstream process',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    job: {
      brief: "It's my job: Rodrigo Nunes testa poços antes da produção começar. Leia o perfil e responda — atenção nos do/does!",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Rodrigo Nunes — well test operator',
          text: "I'm Rodrigo Nunes, from Vitória. I work for a service company, and I test wells before production starts.\n\nMy questions are: what is in with the oil — water? gas? sand? How fast does the oil flow up from the well?\n\nI work in different places in Brazil. On a typical day, I prepare the test equipment, do three or four tests, and record the data on my computer.\n\nI work twelve hours a day for two weeks — then two weeks at home. I like seeing new places, and I love numbers. You need good computer skills in this job."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u2:r:job1',
          title: '👷 Who does Rodrigo work for?', main: null,
          options: opts('A service company', ['A national oil company', 'A refinery', 'Human Resources']),
          expl: '"I work for a service company."'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u2:r:job2',
          title: '👷 What does he do?', main: null,
          options: opts('He tests wells before production starts', ['He drills the wells', 'He sells crude oil', 'He flies helicopters']),
          expl: 'Well test operator = testa o poço antes de produzir.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u2:r:job3',
          title: '👷 What does he record?', main: null,
          options: opts('The data, on his computer', ['The music', 'His lunch', 'The weather only']),
          expl: '"record the data on my computer" — registrar dados.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u2:r:job4',
          title: '👷 How many hours a day does he work?', main: null,
          options: opts('Twelve', ['Eight', 'Six', 'Twenty-four']),
          expl: '"I work twelve hours a day for two weeks."'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u2:r:job5',
          title: '👷 What skills does he need?', main: null,
          options: opts('Good computer skills (and numbers)', ['Cooking skills', 'Painting skills', 'No skills']),
          expl: '"You need good computer skills in this job."'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Responda em voz alta, no estilo entrevista: What do you do? Who do you work for? (ou o trabalho dos seus sonhos na indústria).',
        waText: 'Registro: What do you do? / Who do you work for?'
      }
    },

    vocab1: {
      brief: 'Oito funções do upstream — quem faz o quê na cadeia. Do geólogo ao plataformista.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Upstream jobs:',
            cards: [
              { en: 'geologist', pt: 'geólogo(a)', def: 'Studies rocks.' },
              { en: 'driller', pt: 'sondador', def: 'Supervises the drilling crew.' },
              { en: 'roughneck', pt: 'plataformista', def: 'Works in the crew, under the driller.' },
              { en: 'crane operator', pt: 'operador de guindaste', def: 'Lifts and moves heavy things.' },
              { en: 'pipe-fitter', pt: 'montador de tubulação', def: 'Fits pipes to make a pipeline.' },
              { en: 'production operator', pt: 'operador de produção', def: 'Checks and operates production equipment.' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u2:v:jobs1',
            title: '📦 Ligue a função à descrição:',
            pairs: [
              ['geologist', 'studies rocks'],
              ['driller', 'supervises the crew'],
              ['crane operator', 'lifts heavy things'],
              ['pipe-fitter', 'fits pipes']
            ],
            expl: 'Quem faz o quê no upstream.'
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u2:v:jobs2',
            title: '📦 Mais funções:',
            pairs: [
              ['roughneck', 'works under the driller'],
              ['maintenance technician', 'repairs machines'],
              ['well test operator', 'tests wells'],
              ['production operator', 'operates production equipment']
            ],
            expl: 'maintenance = manutenção · well test = teste de poço.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u2:v:jobs3',
            title: '📦 Quem trabalha na etapa de EXPLORATION?', main: null,
            options: opts('The geologist', ['The pipe-fitter', 'The production operator', 'The crane operator']),
            expl: 'Exploração = estudar rochas = geólogo.'
          }
        ];
        const pool2 = GLOSSARY.concat(TOOLS);
        DF.pickN(TOOLS.slice(0, 6), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, pool2, rnd, 2));
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, pool2, rnd, 2));
        });
        return items;
      }
    },

    lang1: { brief: 'A dupla do presente simples: do/does em perguntas, negativas e respostas curtas — o inglês das entrevistas de rotina.\n\n(Formatos: Essential Grammar in Use, Units 6-7 — adaptados para o offshore.)', items: LANG1 },

    speak: {
      brief: 'Fale sobre trabalhos: leia a ficha da sondadora Marta e responda como num rádio-check. Depois, grave você falando.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '💬 A ficha da profissional',
          textTitle: 'Marta Silveira — driller',
          text: 'Company: a Brazilian drilling company\nJob: driller\nWhere: Santos Basin, offshore\nA typical day: supervise the drilling crew\nHours per day: 12\nStart and finish: 7 a.m. to 7 p.m.\nLikes: the team — "my crew is my family offshore".'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u2:r:spk1',
          title: '💬 What does Marta do on a typical day?', main: null,
          options: opts('She supervises the drilling crew', ['She fits pipes', 'She sells fuel', 'She studies rocks']),
          expl: 'Driller = supervisiona a equipe de perfuração.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u2:r:spk2',
          title: '💬 What time does she start and finish?', main: null,
          options: opts('7 a.m. to 7 p.m.', ['9 a.m. to 5 p.m.', '7 p.m. to 7 a.m.', '6 a.m. to noon']),
          expl: 'Turno clássico de 12h: 7 às 19.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u2:sp:speak1', unit: 2, waSec: 'Speaking',
          title: '🎤 Apresente a Marta:',
          target: 'She works for a Brazilian drilling company.',
          ptHint: 'Ela trabalha para uma empresa de perfuração brasileira.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u2:sp:speak2', unit: 2, waSec: 'Speaking',
          title: '🎤 Agora a rotina dela:',
          target: 'On a typical day, she supervises the drilling crew.',
          ptHint: 'Num dia típico, ela supervisiona a equipe de perfuração.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave 30-40 segundos apresentando um trabalho (o seu ou o dos sonhos): company, job, where, a typical day, hours, likes.',
        waText: 'Registro: apresentação de um trabalho (modelo Marta Silveira).'
      }
    },

    num: {
      brief: 'Medindo óleo e gás: m³, litros, barris — e os números grandes que aparecem nas reuniões de produção.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 As medidas do petróleo:',
            cards: [
              { en: '1 m³ = 1,000 litres', pt: 'metro cúbico', def: 'We measure gas in cubic metres: m³/d.', tts: 'one cubic metre is one thousand litres' },
              { en: '1 barrel = 159 litres', pt: 'barril (bbl)', def: 'This field produces 600,000 bbl/d.', tts: 'one barrel is one hundred and fifty-nine litres' },
              { en: 'bbl/d — barrels per day', pt: 'barris por dia', def: 'The famous bpd of the news.', tts: 'barrels per day' }
            ]
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u2:n:conv1',
            title: '🔢 1 barril tem aproximadamente…', main: null,
            options: opts('159 litres', ['1,000 litres', '59 litres', '15 litres']),
            expl: '1 bbl ≈ 159 L.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u2:n:conv2',
            title: '🔢 Como se diz 560,000?', main: null,
            options: opts('five hundred and sixty thousand', ['five sixty thousands', 'five hundred sixty hundred', 'fifty-six millions']),
            expl: '560,000 = five hundred and sixty thousand (BrE com and).'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u2:n:conv3',
            title: '🔢 Como se diz 7,000,000,000?', main: null,
            options: opts('seven billion', ['seven million', 'seventy billion', 'seven thousand million and one']),
            expl: '7 bi = seven billion.'
          }
        ];
        for (let i = 0; i < 6; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty', 'qty'], max: 999999, rnd: rnd, diff: 1 }));
        }
        return items;
      }
    },

    lang2: { brief: 'Segunda dose de Language Spot: as perguntas Wh- em diálogos reais de plataforma.\n\n(Formatos: Essential Grammar in Use, Units 44-47 — adaptados.)', items: LANG2 },

    listen1: {
      brief: 'Números grandes no ouvido: produção, campos gigantes e o consumo do mundo. Anote como um operador de sala de controle.',
      items: LISTEN1,
      script: SCRIPT
    },

    project: {
      brief: 'Missão de pesquisa: os campos de óleo e gás do Brasil. Descubra os números e registre em inglês simples.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧪 Project — Oil and gas fields in Brazil',
          textTitle: 'Sua missão',
          text: 'Pesquise (pode ser em português) e responda em inglês simples:\n\n1. Which is the biggest oil field in Brazil?\n2. Where is it?\n3. How much oil does it produce per day? (aproximado)\n\nExemplo de frase: "It produces about … barrels per day."',
          nextLabel: 'Preencher a entrega ▸'
        }
      ],
      task: {
        type: 'project',
        title: '🧪 Entrega do Project',
        brief: 'Preencha e envie ao mentor:',
        btn: '🧪 Preencher e enviar no WhatsApp',
        fields: [
          { label: 'Biggest field — name', ph: 'ex.: …' },
          { label: 'Where is it?', ph: 'ex.: Santos Basin, offshore' },
          { label: 'Production per day (about)', ph: 'ex.: about … bbl/d', rows: 2 }
        ]
      }
    },

    write: {
      brief: 'A letra E é a mais comum do inglês — e a que mais some nos e-mails. Treine as palavras da unidade.',
      items: [
        {
          ui: 'choice', cat: 'spl', srsId: 'u2:sp:e1',
          title: '✍️ Qual palavra precisa de E no final?', main: 'writ_ · problem_ · record_',
          options: opts('writ_ → write', ['problem_ → probleme', 'record_ → recorde', 'todas precisam']),
          expl: 'write leva E final; problem e record não.'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u2:sp:e2',
          title: '✍️ produc__ → produces. O que entra antes do S?', main: null,
          options: opts('e (produces)', ['nada (producs)', 'i (producis)', 'a (producas)']),
          expl: 'produce + s = produces.'
        },
        {
          ui: 'type', cat: 'spl', srsId: 'u2:sp:e3',
          title: '✍️ Complete com EE ou EA e escreva a palavra inteira:', main: 'betw__n',
          answers: ['between'], placeholder: 'palavra completa',
          expl: 'betwEEn — duplo E.', feedbackTts: 'between'
        },
        {
          ui: 'type', cat: 'spl', srsId: 'u2:sp:e4',
          title: '✍️ Complete com EE ou EA e escreva a palavra inteira:', main: 'upstr__m',
          answers: ['upstream'], placeholder: 'palavra completa',
          expl: 'upstrEAm — como stream.', feedbackTts: 'upstream'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u2:sp:e5',
          title: '✍️ Onde falta o E em “xploration”?', main: null,
          options: opts('No começo: Exploration', ['No fim: xploratione', 'Depois do X: xEploration', 'Não falta E']),
          expl: 'Exploration começa com E.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Writing — 3 frases do upstream',
        brief: 'Escreva 3 frases suas usando: produce, pipeline, exploration (uma palavra por frase). Capriche nos Es!',
        btn: '✍️ Escrever e enviar',
        fields: [
          { label: 'Sentence 1 (produce)', ph: 'ex.: This field produces…', rows: 2 },
          { label: 'Sentence 2 (pipeline)', ph: '…', rows: 2 },
          { label: 'Sentence 3 (exploration)', ph: '…', rows: 2 }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Upstream.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 2 entram para o Glossário. Revise e prove o domínio.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 2:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u2:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 2 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 2));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I know key words for the upstream sector.',
    'I understand the four steps: exploration, drilling, development, production.',
    'I can use do and does in questions and negatives.',
    'I can use Wh- question words.',
    'I can ask and answer about jobs.',
    'I can talk about oil and gas quantities and large numbers.',
    'I can spell words with the letter e correctly.'
  ];

  DF.UNIT_DATA[2] = {
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
