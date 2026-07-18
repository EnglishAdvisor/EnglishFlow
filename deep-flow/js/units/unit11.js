/* DEEP FLOW — units/unit11.js
   UNIT 11 — Workshop Operations (2000 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U11 (p.76-81) — objetivos, nada
   copiado; gramática = Present Perfect (have/has + done) EGU Units 15-18,
   adaptada; PT técnico: OFFSHORE2. Personagem/cenário autorais. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'workbench', pt: 'bancada', def: 'the work surface — keep it clean and clear.' },
    { en: 'budget', pt: 'orçamento', def: 'the money available for repairs.' },
    { en: 'schedule', pt: 'cronograma / agenda', def: 'the plan of times and dates.' },
    { en: 'responsibility', pt: 'responsabilidade', def: 'a duty you take care of.' },
    { en: 'containment', pt: 'bacia de contenção', def: 'a structure that holds a spill around a tank.' },
    { en: 'micron', pt: 'micron (µm)', def: '1 µm = 0.001 mm — very precise.' },
    { en: 'precision', pt: 'precisão', def: 'exactness in measurement.' },
    { en: 'tidy', pt: 'organizado / arrumado', def: 'a tidy workshop is a safe workshop.' },
    { en: 'messy', pt: 'bagunçado', def: 'the opposite of tidy.' },
    { en: 'cluttered', pt: 'atravancado', def: 'full of things in the way.' },
    { en: 'broken', pt: 'quebrado', def: 'not working — needs repair.' },
    { en: 'maintain', pt: 'manter / conservar', def: 'take care of machines, e.g. oiling them.' },
    { en: 'manage', pt: 'gerenciar', def: 'organize people, equipment, and jobs.' },
    { en: 'organize', pt: 'organizar', def: 'put things in good order.' },
    { en: 'replace', pt: 'substituir', def: 'take out an old part and put in a new one.' }
  ];

  const TOOLS = [
    { en: 'grinder', pt: 'esmerilhadeira' },
    { en: 'lathe', pt: 'torno' },
    { en: 'drill press', pt: 'furadeira de bancada' },
    { en: 'saw', pt: 'serra' },
    { en: 'guard', pt: 'proteção (da ferramenta)' },
    { en: 'safety zone', pt: 'zona de segurança' },
    { en: 'job card', pt: 'ordem de serviço (cartão)' },
    { en: 'calliper', pt: 'paquímetro' },
    { en: 'tolerance', pt: 'tolerância' },
    { en: 'power tool', pt: 'ferramenta elétrica' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: Present Perfect ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp1',
      title: '🔧 Present Perfect:', main: 'A: Have you finished the work?\nB: Yes, we ___ replaced the gaskets.',
      options: opts("'ve (have)", ["has", "did", "was"]),
      expl: 'we/you/they → have. we\'ve replaced.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp2',
      title: '🔧 Present Perfect:', main: 'A: ___ Ahmed phoned?\nB: No, he hasn\'t.',
      options: opts('Has', ['Have', 'Did', 'Was']),
      expl: 'he/she/it → has.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp3',
      title: '🔧 Complete a negativa:', main: 'We\'ve replaced the gaskets, but we ___ put the new bearings in.',
      options: opts("haven't", ["hasn't", "didn't", "aren't"]),
      expl: 'we → haven\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp4',
      title: '🔧 Particípio de "do":', main: 'Have you ___ the grinding?',
      options: opts('done', ['did', 'doed', 'doing']),
      expl: 'do → did → done (particípio).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp5',
      title: '🔧 Experiência de vida:', main: 'A: Have you ever ___ a drill press?\nB: No, I\'ve never used one.',
      options: opts('used', ['use', 'using', 'uses']),
      expl: 'ever/never + particípio: used.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp6',
      title: '🔧 Particípio de "build":', main: 'They\'ve ___ the base, but they haven\'t finished it.',
      options: opts('built', ['builded', 'build', 'building']),
      expl: 'build → built.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u11:g:ord1',
      title: '🔧 Monte a frase:', answer: 'We have replaced the gaskets',
      expl: 'have + particípio.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: Present Perfect (mais) ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp7',
      title: '🔧 Complete:', main: 'They ___ the inside of the tank yet? (check)',
      options: opts('Have they checked', ['Has they checked', 'Did they checked', 'Have they check']),
      expl: 'Have + they + particípio.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp8',
      title: '🔧 Complete a negativa:', main: 'We ___ the valve. (not repair)',
      options: opts("haven't repaired", ["hasn't repaired", "didn't repaired", "not have repaired"]),
      expl: 'haven\'t + particípio.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp9',
      title: '🔧 Resposta curta:', main: 'Has Simon checked inside? — Yes, he ___.',
      options: opts('has', ['have', 'did', 'is']),
      expl: 'Yes, he has.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp10',
      title: '🔧 Particípio de "put":', main: 'Have you ___ the tank on the truck?',
      options: opts('put', ['putted', 'puted', 'putting']),
      expl: 'put → put → put (não muda!).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp11',
      title: '🔧 Complete:', main: 'I ___ used a lathe. (never)',
      options: opts("have never", ['has never', 'never did', 'am never']),
      expl: 'have never + particípio.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u11:g:ord2',
      title: '🔧 Monte a pergunta:', answer: 'Have you attached the cover',
      expl: 'Have + you + particípio.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u11:g:pp12',
      title: '🔧 Escolha certo:', main: null,
      options: opts("She has done the grinding.", ["She has did the grinding.", "She have done the grinding.", "She has doing the grinding."]),
      expl: 'has + done (particípio).'
    }
  ];

  // ---------- LISTENING: responsabilidades da oficina (autoral) ----------
  const SCRIPT =
    'Workshop responsibilities — six short conversations\n\n' +
    '1. "Have you dealt with the invoice?" — money.\n' +
    '2. "Have you fixed the dates for the delivery?" — scheduling.\n' +
    '3. "Have you repaired the pump yet?" — making broken things work.\n' +
    '4. "Have you oiled the machines this week?" — maintenance.\n' +
    '5. "Have you organized the crew and the jobs?" — managing.\n' +
    '6. "Have you replaced the broken guard?" — replacing damaged parts.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u11:l:resp1',
      title: '🎧 “Have you oiled the machines this week?” — qual responsabilidade?',
      tts: dlg(['Have you oiled the machines this week?']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Have you oiled the machines this week?”',
      options: opts('maintenance (manutenção)', ['dealing with money', 'scheduling', 'managing people']),
      expl: 'Oiling = maintenance.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u11:l:resp2',
      title: '🎧 “Have you replaced the broken guard?” — qual responsabilidade?',
      tts: dlg(['Have you replaced the broken guard?']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Have you replaced the broken guard?”',
      options: opts('trocar peças danificadas', ['organizar datas', 'lidar com dinheiro', 'treinar equipe']),
      expl: 'Replace = substituir peça quebrada.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u11:l:resp3',
      title: '🎧 “Have you organized the crew and the jobs?” — qual responsabilidade?',
      tts: dlg(['Have you organized the crew and the jobs?']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Have you organized the crew and the jobs?”',
      options: opts('managing (gerenciar)', ['maintenance', 'money', 'welding']),
      expl: 'Organizar pessoas e trabalhos = managing.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u11:l:resp4',
      title: '🎧 Complete a pergunta: "Have you ___ the pump yet?"',
      tts: dlg(['Have you repaired the pump yet?']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Have you repaired the pump yet?”',
      answers: ['repaired'], placeholder: 'particípio',
      expl: 'repair → repaired.'
    }
  ];

  // ---------- READING: gestão de oficina (autoral) ----------
  const READ_TEXT =
    'Smart workshop management\n\n' +
    'A workshop manager\'s day is full of problems: broken equipment, expensive repairs on small budgets, people working closely with powerful tools. But smart management makes work easier, quicker, and safer.\n\n' +
    'Ten top tips, in short:\n\n' +
    'Keep the workbenches clean and clear — a clean workshop is safer and more productive. Keep the floors clean and dry. Create safety zones around large tools: only the operator stays inside the line. Use good lighting. Always put tools away after using them. Use guards on tools, and make sure workers use their PPE. Give clear instructions. Maintain all machines, and stop using unsafe ones.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u11:r:mg1',
      title: '📖 Why keep the workbenches clean and clear?', main: null,
      options: opts('It is safer and more productive', ['It looks pretty only', 'The boss likes white', 'To save water']),
      expl: 'Limpo = mais seguro e produtivo.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u11:r:mg2',
      title: '📖 Who can stay inside the safety zone of a big tool?', main: null,
      options: opts('Only the person using the tool', ['Everybody', 'Visitors', 'Nobody']),
      expl: 'Só o operador fica dentro da linha.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u11:r:mg3',
      title: '📖 What should you do after using tools?', main: null,
      options: opts('Put them away', ['Leave them on the floor', 'Sell them', 'Break them']),
      expl: 'Sempre guardar as ferramentas.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u11:r:mg4',
      title: '📖 What should you do with unsafe machines?', main: null,
      options: opts('Stop using them', ['Use them faster', 'Sell them cheap', 'Paint them red']),
      expl: 'Máquina insegura → parar de usar.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u11:r:mg5',
      title: '📖 A “cluttered” workbench is…', main: null,
      options: opts('full of things in the way (messy)', ['clean and clear', 'brand new', 'empty']),
      expl: 'cluttered = atravancado.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u11:f:1',
      title: '🧰 Provérbio da oficina: “Measure twice, cut once.” Ensina a…', main: null,
      options: opts('conferir antes de agir', ['cortar rápido', 'medir só uma vez', 'nunca medir']),
      expl: 'Meça duas vezes, corte uma só — precisão evita retrabalho.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u11:f:2',
      title: '🧰 “Have you finished yet?” — “yet” aqui indica…', main: null,
      options: opts('até agora / já (pergunta/negativa)', ['nunca', 'ontem', 'amanhã']),
      expl: 'yet = já/ainda, em perguntas e negativas do Present Perfect.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u11:f:3',
      title: '🧰 “I\'ve already done it.” — “already” indica…', main: null,
      options: opts('já feito (antes do esperado)', ['ainda não', 'talvez', 'nunca']),
      expl: 'already = já (afirmativa).'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u11:s:1',
      title: '🔤 Qual está correta?', main: null,
      options: opts('schedule', ['schedual', 'shedule', 'skedule']),
      expl: 'schedule (BrE: “shedule”, AmE: “skedule”).'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u11:s:2',
      title: '🔤 Qual está correta?', main: null,
      options: opts('responsibility', ['responsability', 'responsibilty', 'responisbility']),
      expl: 'responsibility.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u11:s:nato1',
      title: '📻 Rádio NATO: “Sierra · Alpha · Whiskey” soletra…', main: null,
      options: opts('SAW', ['SAY', 'SAD', 'SAT']),
      expl: 'S-A-W = saw (serra).'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '2.000 m. O coração que conserta a operação: a oficina. Ordem, ferramentas elétricas, precisão em mícrons e o Present Perfect.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — a oficina:',
          cards: [
            { en: 'workbench', pt: 'bancada', def: 'Keep it clean and clear.' },
            { en: 'tidy / messy', pt: 'organizado / bagunçado', def: 'A tidy workshop is a safe workshop.', tts: 'tidy. messy.' },
            { en: 'power tool', pt: 'ferramenta elétrica', def: 'A tool with a motor.', tts: 'power tool' },
            { en: 'guard', pt: 'proteção da ferramenta', def: 'Protects fingers, hands, and eyes.' },
            { en: 'schedule', pt: 'cronograma', def: 'The plan of times and dates.' },
            { en: 'precision', pt: 'precisão', def: 'Measured in microns — very exact.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🔧 A oficina que sustenta tudo',
          textTitle: 'Where things get fixed',
          text: 'Every platform and refinery has a workshop. It is where broken things become working things again.\n\nA good workshop is tidy: clean benches, dry floors, tools put away, guards on the machines. Managing it well makes work easier, quicker, and safer.\n\nHere you measure in microns, you write job cards, and you report progress with a special tense — the Present Perfect: "We\'ve replaced the gasket, but we haven\'t finished."'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u11:v:tidy',
          sp: { g: 'venpt', en: 'tidy', u: 11 },
          title: '📦 “A tidy workshop” é uma oficina…', main: null,
          options: opts('organizada', ['bagunçada', 'grande', 'nova']),
          expl: 'tidy = arrumada; messy = bagunçada.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u11:r:bg1',
          title: '🔧 Por que a oficina existe?', main: null,
          options: opts('consertar o que quebrou', ['vender óleo', 'perfurar poços', 'cozinhar']),
          expl: 'Onde as coisas voltam a funcionar.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u11:v:precision',
          sp: { g: 'venpt', en: 'precision', u: 11 },
          title: '📦 “Precision” é…', main: null,
          options: opts('precisão / exatidão', ['pressão', 'preço', 'pressa']),
          expl: 'Cuidado com os falsos parecidos: precision = precisão.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases sobre a oficina no Present Perfect: "I\'ve cleaned the bench. I\'ve put the tools away. I haven\'t finished the pump."',
        waText: 'Registro: 3 sentences — the workshop (Present Perfect).'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: regras e responsabilidades, gestão, ferramentas elétricas, "o que já foi feito", precisão e ordem de serviço.',
      items: [
        {
          ui: 'read', cat: 'rea', srsId: 'u11:r:ko1',
          title: '🔧 Qual oficina é mais SEGURA?', main: null,
          options: opts('a organizada e limpa (tidy)', ['a bagunçada (messy)', 'a mais escura', 'a mais cheia']),
          expl: 'Tidy = safer.'
        },
        {
          ui: 'match', cat: 'voc', srsId: 'u11:v:ko2',
          title: '🔧 Ligue a regra da oficina:',
          pairs: [['floors', 'clean and dry'], ['tools', 'put away'], ['exit', 'don\'t block'], ['lights', 'turn off when you leave']],
          expl: 'As regras básicas.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u11:v:ko3',
          title: '🔧 “Put tools away when you\'ve finished” significa…', main: null,
          options: opts('guardar as ferramentas ao terminar', ['jogar as ferramentas fora', 'deixar no chão', 'emprestar as ferramentas']),
          expl: 'put away = guardar.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u11:g:ko4',
          title: '🔧 Monte a frase:', answer: 'Keep the workbenches clean and clear',
          expl: 'Imperativa de regra.'
        }
      ]
    },

    listen1: {
      brief: 'Responsabilidades da oficina: dinheiro, agenda, reparos, manutenção, gestão e troca de peças. Ouça e classifique.',
      items: LISTEN1,
      script: SCRIPT
    },

    read1: {
      brief: 'Gestão inteligente de oficina: dez dicas para trabalhar mais fácil, rápido e seguro. Leia e responda.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia as dicas:',
          textTitle: 'Managing the workshop',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    vocab1: {
      brief: 'Ferramentas elétricas e suas funções: grinding, cutting, drilling, shaping — cada tool, seu trabalho.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Ferramentas elétricas × função:',
            cards: [
              { en: 'grinder → grinding', pt: 'esmerilhadeira → esmerilhar', def: 'Grinds and smooths metal.', tts: 'grinder. grinding.' },
              { en: 'saw → cutting', pt: 'serra → cortar', def: 'Cuts wood and metal.', tts: 'saw. cutting.' },
              { en: 'lathe → shaping', pt: 'torno → tornear', def: 'Turns and shapes metal.', tts: 'lathe. shaping.' },
              { en: 'drill press → drilling', pt: 'furadeira de bancada → furar', def: 'Makes precise holes.', tts: 'drill press. drilling.' },
              { en: 'MIG equipment → welding', pt: 'equipamento MIG → soldar', def: 'Cutting and welding jobs.', tts: 'MIG equipment. welding.' },
              { en: 'guard', pt: 'proteção', def: 'Keeps fingers safe on a power tool.' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u11:v:tools1',
            title: '📦 Ligue a ferramenta à função:',
            pairs: [['grinder', 'grinding'], ['saw', 'cutting'], ['lathe', 'shaping'], ['drill press', 'drilling']],
            expl: 'Cada power tool, seu verbo.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u11:v:tools2',
            title: '📦 Para tornear e dar forma ao metal, use o…', main: null,
            options: opts('lathe (torno)', ['saw', 'grinder', 'drill press']),
            expl: 'lathe = torno.'
          }
        ];
        DF.pickN(TOOLS.slice(0, 5), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 11));
        });
        DF.pickN(GLOSSARY.slice(10), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 11));
        });
        return items;
      }
    },

    lang1: { brief: 'Present Perfect: have/has + particípio — para ações recentes e experiências de vida. "Já fez? Ainda não."\n\n(Formatos: EGU Units 15-18 — adaptados.)', items: LANG1 },

    speak: {
      brief: 'Dizendo o que já foi feito: seu gerente liga e pergunta o progresso do projeto. Responda em Present Perfect.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '💬 O status do projeto (terça-feira)',
          textTitle: 'Containment project — progress',
          text: 'You are building an oil tank containment.\n\n✔ build base — DONE\n✔ assemble containment — DONE\n✗ put tank in containment — NOT YET\n✗ weld containment — NOT YET\n\nAnswer your manager in full Present Perfect sentences.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u11:r:spk1',
          title: '💬 “Have you built the base?”', main: null,
          options: opts("Yes, we've built the base.", ["Yes, we build the base.", "Yes, we building base.", "Yes, we has build base."]),
          expl: 'we\'ve built (particípio).'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u11:r:spk2',
          title: '💬 “Have you welded the containment?”', main: null,
          options: opts("No, we haven't welded it yet.", ["No, we didn't welded it.", "No, we haven't weld yet.", "No, we not welded."]),
          expl: 'haven\'t + welded + yet.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u11:sp:speak1', unit: 11, waSec: 'Speaking',
          title: '🎤 Reporte o que já foi feito:',
          target: "We've assembled the containment.",
          ptHint: 'Já montamos a bacia de contenção.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u11:sp:speak2', unit: 11, waSec: 'Speaking',
          title: '🎤 Reporte o que falta:',
          target: "We haven't put the tank in yet.",
          ptHint: 'Ainda não colocamos o tanque.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave o relatório de progresso: 3 coisas que você JÁ fez ("I\'ve…") e 2 que NÃO fez ("I haven\'t… yet").',
        waText: 'Registro: progresso em Present Perfect.'
      }
    },

    num: {
      brief: 'Medidas de precisão: milímetros e mícrons. 1 µm = 0.001 mm — o mundo do paquímetro.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 Precisão em mícrons:',
            cards: [
              { en: '1 mm = 1,000 µm', pt: 'milímetro / micron', def: '1 micron = 0.001 mm.', tts: 'one millimetre is one thousand microns' },
              { en: '± = plus or minus', pt: 'mais ou menos', def: 'A tolerance of ± 25 µm.', tts: 'plus or minus twenty-five microns' },
              { en: '0.025 mm', pt: 'ponto zero dois cinco', def: 'point oh two five millimetres.', tts: 'point oh two five millimetres' }
            ]
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u11:n:p1',
            title: '🔢 1 micron equivale a…', main: null,
            options: opts('0.001 mm', ['1 mm', '1,000 mm', '0.1 mm']),
            expl: '1 µm = 0.001 mm.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u11:n:p2',
            title: '🔢 “± 25 µm” lê-se…', main: null,
            options: opts('plus or minus twenty-five microns', ['more or less 25 mm', 'twenty-five plus microns only', 'minus 25 millimetres']),
            expl: '± = plus or minus.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u11:n:p3',
            title: '🔢 A largura de um fio de cabelo é ~100 µm. Em mm é…', main: null,
            options: opts('0.1 mm', ['1 mm', '10 mm', '100 mm']),
            expl: '100 µm = 0.1 mm.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 999, rnd: rnd, diff: 3 }));
        }
        return items;
      }
    },

    lang2: { brief: 'Mais Present Perfect: perguntas com yet, respostas curtas e particípios irregulares (put, built, done).\n\n(Formatos: EGU Units 15-18 — adaptados.)', items: LANG2 },

    write: {
      brief: 'A ordem de serviço (job card): número, área, tarefa, materiais, datas e assinatura. O documento que organiza cada reparo.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ O job card',
          textTitle: 'Writing a job card',
          text: 'A job card records a repair task:\n\nJob card number · Area/location · Tasks\nMaterials required\nScheduled start (date, time) · Scheduled finish\nRisk assessment: yes/no · Permit to work: yes/no\nApproval (signature, date) · Assigned to\n\nExample task: "Check valve on discharge hose. Material: spare valve. Start: Wed 12 April, 8:00. Finish by 11:00."',
          nextLabel: 'Continuar ▸'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u11:r:wr1',
          title: '✍️ No job card, “Assigned to” indica…', main: null,
          options: opts('quem vai fazer o serviço', ['o preço', 'a cor da peça', 'a temperatura']),
          expl: 'assigned to = designado para.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u11:r:wr2',
          title: '✍️ “Scheduled finish: 11:00” significa…', main: null,
          options: opts('previsão de término às 11h', ['início às 11h', 'almoço às 11h', 'o número do cartão']),
          expl: 'scheduled finish = término previsto.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u11:g:wr3',
          title: '✍️ São 8:10 de quarta. “Has Simon started the job?”', main: null,
          options: opts("Yes, he has (start was 8:00).", ["No, he hasn't.", "Yes, he did yesterday.", "He will start."]),
          expl: 'Começou às 8:00 → já começou.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Job card',
        brief: 'Preencha uma ordem de serviço em inglês:',
        btn: '✍️ Preencher e enviar',
        fields: [
          { label: 'Area/location', ph: 'ex.: Bulk tanker, bay 3' },
          { label: 'Task', ph: 'ex.: check valve on discharge hose' },
          { label: 'Material required', ph: 'ex.: spare valve' },
          { label: 'Scheduled start / finish', ph: 'ex.: Wed 8:00 → 11:00' },
          { label: 'Assigned to', ph: 'ex.: (your name)' }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Workshop Operations.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 11 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 11:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u11:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 11 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 11));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I can talk about workshop rules and responsibilities.',
    'I can talk about workshop management.',
    'I can understand tools and their functions.',
    'I can say what\'s been done (Present Perfect).',
    'I can talk about precision measurements.',
    'I can write a job card.'
  ];

  DF.UNIT_DATA[11] = {
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
