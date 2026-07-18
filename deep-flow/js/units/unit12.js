/* DEEP FLOW — units/unit12.js
   UNIT 12 — Repairs and Maintenance (2200 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U12 (p.82-87) — objetivos, nada
   copiado; gramática = "will" (decisões e futuro) EGU Units 21-22, adaptada;
   pronúncia = /b/ × /p/. Personagem autoral: Val Ribeiro (electrician). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'maintenance', pt: 'manutenção', def: 'the work that keeps equipment running well.' },
    { en: 'troubleshooting', pt: 'diagnóstico de falhas', def: 'finding and correcting problems in a system.' },
    { en: 'belt', pt: 'correia', def: 'a loop that transfers movement — it can be worn or loose.' },
    { en: 'bolt', pt: 'parafuso', def: 'a metal fastener — it can be loose.' },
    { en: 'gear', pt: 'engrenagem', def: 'a toothed wheel — it can be worn.' },
    { en: 'install', pt: 'instalar', def: 'put in and set up new equipment.' },
    { en: 'reinstall', pt: 'reinstalar', def: 'install again after removing.' },
    { en: 'remove', pt: 'remover / retirar', def: 'take out a part.' },
    { en: 'bent', pt: 'torto / dobrado', def: 'not straight.' },
    { en: 'corroded', pt: 'corroído', def: 'damaged by chemical reaction (like rust).' },
    { en: 'damaged', pt: 'danificado', def: 'harmed — there\'s a dent in it.' },
    { en: 'frozen', pt: 'travado / emperrado', def: 'can\'t move.' },
    { en: 'jammed', pt: 'emperrado / travado', def: 'stuck — the system is down.' },
    { en: 'rusted', pt: 'enferrujado', def: 'covered in rust.' },
    { en: 'worn', pt: 'gasto / desgastado', def: 'old and used — the belt is worn out.' }
  ];

  const TOOLS = [
    { en: 'split', pt: 'rachado' },
    { en: 'loose', pt: 'solto / frouxo' },
    { en: 'leaking', pt: 'vazando' },
    { en: 'spare part', pt: 'peça sobressalente' },
    { en: 'generator', pt: 'gerador' },
    { en: 'spark plug', pt: 'vela de ignição' },
    { en: 'air filter', pt: 'filtro de ar' },
    { en: 'engine oil', pt: 'óleo do motor' },
    { en: 'hour meter', pt: 'horímetro' },
    { en: 'electrician', pt: 'eletricista' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: will (decisões) ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w1',
      title: '🔧 Decisão na hora:', main: 'A: The belt is broken.\nB: I ___ replace it.',
      options: opts("'ll", ['will to', 'am', 'going']),
      expl: 'Decisão espontânea → I\'ll (I will).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w2',
      title: '🔧 Futuro (pergunta):', main: '___ you finish the job today?',
      options: opts('Will', ['Do', 'Are', 'Did']),
      expl: 'Will + sujeito + verbo base.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w3',
      title: '🔧 Negativa:', main: 'We ___ finish before midnight.',
      options: opts("won't", ["willn't", "don't", "aren't"]),
      expl: 'will not = won\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w4',
      title: '🔧 Decisão:', main: "A: I can't lift this box.\nB: I ___ help you.",
      options: opts("'ll", ['am help', 'will helping', 'do']),
      expl: 'Oferecer ajuda → I\'ll help.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w5',
      title: '🔧 Resposta curta:', main: 'Will Khalid be here tomorrow? — No, he ___.',
      options: opts("won't", ["willn't", "doesn't", "isn't"]),
      expl: 'No, he won\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w6',
      title: '🔧 Decisão:', main: "A: The gasket's damaged.\nB: We ___ replace it.",
      options: opts("'ll", ['willing', 'are will', 'do will']),
      expl: 'We\'ll replace it.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u12:g:ord1',
      title: '🔧 Monte a frase:', answer: 'I will check it tomorrow',
      expl: 'will + verbo base + quando.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: will (situações) ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w7',
      title: '🔧 Reaja: “The belt\'s worn out.”', main: null,
      options: opts("I'll replace it.", ["I replace it now past.", "I replacing it will.", "I am replace it."]),
      expl: 'Decisão: I\'ll replace it.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w8',
      title: '🔧 Reaja: “I can\'t find my goggles.”', main: null,
      options: opts("I'll get you some.", ["I get you some past.", "I will getting some.", "You will find will."]),
      expl: 'I\'ll get you some.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w9',
      title: '🔧 Reaja: “The batteries need replacing.”', main: null,
      options: opts("I'll change them.", ["I changing them will.", "I change will them.", "Them I will change is."]),
      expl: 'I\'ll change them.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w10',
      title: '🔧 Complete:', main: '___ we have time tomorrow? — No, we won\'t.',
      options: opts('Will', ['Do', 'Are', 'Did']),
      expl: 'Will we…?'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w11',
      title: '🔧 Reaja: “The system is down.”', main: null,
      options: opts("I'll re-start it.", ["I re-start it did.", "I am re-starting will.", "Re-start will I it."]),
      expl: 'I\'ll re-start it.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u12:g:ord2',
      title: '🔧 Monte a frase:', answer: 'Tomorrow I will change the oil',
      expl: 'Tempo + will + verbo.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u12:g:w12',
      title: '🔧 Escolha certo:', main: null,
      options: opts("He'll be here on Tuesday.", ["He'll to be here.", "He will being here.", "He'll is here Tuesday."]),
      expl: "He'll be (will + base)."
    }
  ];

  // ---------- LISTENING: planejando o dia (autoral) ----------
  const SCRIPT =
    'Planning the day\'s work — Frank with his team\n\n' +
    'Frank: The front office reported a problem — the photocopier is jammed. Carl, that\'s electrical. Can you look at it this morning?\n' +
    'Carl: Sure. If I need help, I\'ll ask Eric.\n' +
    'Frank: Bill, the portable generator won\'t start. That\'s mechanical — please check it. When did you finish the pump repair?\n' +
    'Bill: I finished the pump yesterday. I\'ll start on the generator now.\n' +
    'Frank: Good. The new lights for the loading area arrived on Monday — please install them this afternoon.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 430 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u12:l:pl1',
      title: '🎧 Qual o problema da copiadora?',
      tts: dlg(['The photocopier is jammed. Carl, that\'s electrical.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The photocopier is jammed.”',
      options: opts('está travada (jammed)', ['está sem tinta', 'está molhada', 'foi roubada']),
      expl: 'jammed = emperrada/travada.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u12:l:pl2',
      title: '🎧 Quem cuida do gerador que não liga?',
      tts: dlg(["The portable generator won't start. That's mechanical — Bill, please check it."]),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The generator won\'t start. Bill, please check it.”',
      options: opts('Bill (mecânico)', ['Carl (eletricista)', 'Eric', 'Frank']),
      expl: 'Mecânico → Bill.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u12:l:pl3',
      title: '🎧 Quando o Bill terminou o reparo da bomba?',
      tts: dlg(['I finished the pump yesterday.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“I finished the pump yesterday.”',
      options: opts('ontem', ['hoje de manhã', 'na segunda', 'ainda não']),
      expl: 'yesterday = ontem.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u12:l:pl4',
      title: '🎧 Quando chegaram as novas luzes?',
      tts: dlg(['The new lights for the loading area arrived on Monday.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The new lights arrived on Monday.”',
      options: opts('na segunda-feira', ['no domingo', 'hoje', 'não chegaram']),
      expl: 'arrived on Monday.'
    }
  ];

  // ---------- READING: manutenção de rotina (autoral) ----------
  const READ_TEXT =
    'Routine maintenance keeps machines alive\n\n' +
    'A portable electric generator needs routine maintenance for safe operation and a long life — especially in hot, dusty places.\n\n' +
    'The hour meter shows how many hours the generator has run. The maintenance schedule sets the frequency of each job:\n\n' +
    'Every day (or 8 hours): a general inspection and check the engine oil level.\nEvery month (or 20 hours): clean and check the battery.\nEvery 6 months (or 200 hours): change the engine oil and replace the air filter.\nEvery 12 months (or 300 hours): replace the spark plug and the fuel filter.\n\nGood maintenance reduces accidents, saves money, and makes a machine work well for many years.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u12:r:rm1',
      title: '📖 What does the hour meter show?', main: null,
      options: opts('How many hours the generator has run', ['The time of day', 'The temperature', 'The price']),
      expl: 'hour meter = horímetro.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u12:r:rm2',
      title: '📖 What do you do every day (or 8 hours)?', main: null,
      options: opts('General inspection + check the oil level', ['Replace the spark plug', 'Change the air filter', 'Nothing']),
      expl: 'Diário: inspeção + nível de óleo.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u12:r:rm3',
      title: '📖 When do you replace the air filter?', main: null,
      options: opts('Every 6 months (or 200 hours)', ['Every day', 'Every 5 years', 'Never']),
      expl: '200h → trocar filtro de ar.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u12:r:rm4',
      title: '📖 Why is routine maintenance important?', main: null,
      options: opts('It reduces accidents, saves money, and extends life', ['It makes noise', 'It uses more fuel', 'It wastes time']),
      expl: 'Menos acidentes, menos custo, mais vida útil.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u12:r:rm5',
      title: '📖 Maintenance is extra important in…', main: null,
      options: opts('hot and dusty environments', ['cold offices', 'clean labs', 'the sea only']),
      expl: 'Calor e poeira exigem mais manutenção.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u12:f:1',
      title: '🧰 “The pump won\'t start.” — won\'t aqui indica…', main: null,
      options: opts('recusa/não funciona (won\'t = will not)', ['quer começar', 'já começou', 'vai parar']),
      expl: 'won\'t start = não quer/consegue iniciar.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u12:f:2',
      title: '🧰 Descreva o defeito: “The gear ___.”', main: null,
      options: opts('is worn', ['is worning', 'wears is', 'has wear']),
      expl: 'worn = gasta (particípio de wear).'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u12:f:3',
      title: '🧰 “There\'s a big dent in it” quer dizer que está…', main: null,
      options: opts('amassado / danificado', ['limpo', 'novo', 'pintado']),
      expl: 'dent = amassado → damaged.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'pro', srsId: 'u12:s:bp1',
      title: '🗣️ /b/ ou /p/? Você ouve “Turn the ___.”',
      main: null, tts: 'Turn the cap.', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Turn the cap.”',
      options: opts('cap (/p/)', ['cab (/b/)', 'cat', 'car']),
      expl: 'cap × cab: /p/ é surdo, /b/ é sonoro.', feedbackTts: 'cap'
    },
    {
      ui: 'choice', cat: 'pro', srsId: 'u12:s:bp2',
      title: '🗣️ Complete com P ou B: __olt (parafuso)', main: null,
      options: opts('b → bolt', ['p → polt', 'nada', 'pp → ppolt']),
      expl: 'bolt = parafuso.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u12:s:nato1',
      title: '📻 Rádio NATO: “Bravo · Echo · Lima · Tango” soletra…', main: null,
      options: opts('BELT', ['BOLT', 'BELL', 'BEAT']),
      expl: 'B-E-L-T = belt (correia).'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '2.200 m. Nada dura para sempre — mas boa manutenção prolonga a vida de tudo. Diagnóstico de falhas, reparos e o futuro com "will".',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — o mundo do reparo:',
          cards: [
            { en: 'maintenance', pt: 'manutenção', def: 'Keeps equipment running.' },
            { en: 'troubleshooting', pt: 'diagnóstico de falhas', def: 'Find the problem, then fix it.' },
            { en: 'install / remove', pt: 'instalar / remover', def: 'Put in; take out.', tts: 'install. remove.' },
            { en: 'worn / bent / jammed', pt: 'gasto / torto / travado', def: 'Common faults.', tts: 'worn. bent. jammed.' },
            { en: 'spare part', pt: 'peça sobressalente', def: 'A replacement in the store.', tts: 'spare part' },
            { en: 'will', pt: 'futuro / decisão', def: '"I\'ll replace it."' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🛠️ Antes que quebre',
          textTitle: 'Repairs and maintenance',
          text: 'There are two kinds of work here. Maintenance is planned: you clean, oil, and check equipment before it breaks. Repair is when something has already broken and you fix it.\n\nGood technicians troubleshoot: they find the cause, then decide the action. And they talk about that decision with one little word — "will": "It\'s leaking." "I\'ll check it."\n\nThis station gives you the language of faults, fixes, and plans.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u12:v:maint',
          sp: { g: 'venpt', en: 'maintenance', u: 12 },
          title: '📦 “Maintenance” é…', main: null,
          options: opts('manutenção (cuidado planejado)', ['conserto de emergência', 'compra de peças', 'demissão']),
          expl: 'Maintenance = manutenção preventiva.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u12:r:bg1',
          title: '🛠️ Diferença: maintenance × repair?', main: null,
          options: opts('manutenção é planejada; reparo é depois de quebrar', ['são iguais', 'reparo é planejado', 'manutenção é só limpar o chão']),
          expl: 'Prevenir × consertar.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u12:v:trouble',
          sp: { g: 'venpt', en: 'troubleshooting', u: 12 },
          title: '📦 “Troubleshooting” é…', main: null,
          options: opts('encontrar e corrigir problemas', ['atirar em algo', 'criar problemas', 'ignorar falhas']),
          expl: 'Diagnóstico de falhas.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 reações com "will" a problemas: "The belt is broken — I\'ll replace it." (invente 3).',
        waText: 'Registro: 3 reações com will.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: problemas e soluções, o futuro com "will", manutenção de rotina, planejar o dia e registrar reparos.',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u12:v:ko1',
          title: '🛠️ Ligue a ação de manutenção:',
          pairs: [['install', 'the pump'], ['remove', 'the pump'], ['replace', 'the bearing'], ['repair', 'the hose']],
          expl: 'Verbos de reparo.'
        },
        {
          ui: 'match', cat: 'voc', srsId: 'u12:v:ko2',
          title: '🛠️ Ligue o problema ao estado:',
          pairs: [['wires', 'corroded'], ['tank', 'leaking'], ['gear', 'worn'], ['belt', 'loose']],
          expl: 'Cada peça, seu defeito.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u12:v:ko3',
          title: '🛠️ Uma engrenagem “frozen” está…', main: null,
          options: opts('travada (não gira)', ['congelada de gelo', 'nova', 'quente']),
          expl: 'frozen (aqui) = emperrada, não gira.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u12:g:ko4',
          title: '🔧 Monte a frase:', answer: 'The pump stopped working',
          expl: 'Past Simple: stopped.'
        }
      ]
    },

    vocab1: {
      brief: 'Descrevendo defeitos: worn, bent, corroded, jammed, loose, leaking. As palavras que abrem toda ordem de serviço.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Estados de um defeito:',
            cards: [
              { en: 'worn', pt: 'gasto', def: 'Old and used — the belt is worn.' },
              { en: 'bent', pt: 'torto', def: 'Not straight.' },
              { en: 'corroded / rusted', pt: 'corroído / enferrujado', def: 'Damaged by chemicals / rust.', tts: 'corroded. rusted.' },
              { en: 'jammed / frozen', pt: 'travado / emperrado', def: "Can't move; system is down.", tts: 'jammed. frozen.' },
              { en: 'loose', pt: 'solto', def: 'Not tight — tighten it.' },
              { en: 'leaking', pt: 'vazando', def: 'Liquid escaping.' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u12:v:def1',
            title: '📦 Ligue o defeito à tradução:',
            pairs: [['worn', 'gasto'], ['bent', 'torto'], ['corroded', 'corroído'], ['jammed', 'travado']],
            expl: 'Vocabulário de falhas.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u12:v:def2',
            title: '📦 O parafuso está “loose”. Você deve…', main: null,
            options: opts('tighten it (apertar)', ['remove the tank', 'paint it', 'ignore it']),
            expl: 'loose → tighten.'
          }
        ];
        DF.pickN(GLOSSARY.slice(8), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 12));
        });
        DF.pickN(GLOSSARY.slice(0, 8), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 12));
        });
        return items;
      }
    },

    lang1: { brief: 'O futuro com "will": decisões na hora ("I\'ll check it") e previsões ("We won\'t finish today").\n\n(Formatos: EGU Units 21-22 — adaptados.)', items: LANG1 },

    pron: {
      brief: 'Os sons /b/ e /p/: cab × cap, rib × rip. Um é sonoro, o outro surdo — e mudam a palavra.',
      items: [
        {
          ui: 'cards', cat: 'pro',
          title: '🗣️ /b/ (sonoro) × /p/ (surdo):',
          cards: [
            { en: 'cab / cap', pt: 'táxi / tampa', def: 'Turn the cab? Turn the cap?', tts: 'cab. cap.' },
            { en: 'rib / rip', pt: 'costela / rasgo', def: 'Repair the rib? Repair the rip?', tts: 'rib. rip.' },
            { en: 'tab / tap', pt: 'aba / torneira', def: 'Pull the tab? Pull the tap?', tts: 'tab. tap.' }
          ]
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u12:p:bp1',
          title: '🗣️ Ouça: qual palavra?',
          tts: 'Repair the rip.', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Repair the rip.”',
          options: opts('rip (/p/)', ['rib (/b/)']),
          expl: 'rip = rasgo (/p/ surdo).', feedbackTts: 'rip'
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u12:p:bp2',
          title: '🗣️ Complete com P ou B: re__air (consertar)', main: null,
          options: opts('p → repair', ['b → rebair', 'pp → reppair', 'bb → rebbair']),
          expl: 'repair.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u12:sp:pron1', unit: 12, waSec: 'Pronunciation',
          title: '🎤 Fale distinguindo /b/ e /p/:',
          target: "I'll repair the pump and the belt.",
          ptHint: 'P em pump/repair; B em belt.'
        }
      ]
    },

    read1: {
      brief: 'Manutenção de rotina: o cronograma que mantém um gerador vivo por anos. Leia e responda.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia o manual:',
          textTitle: 'Routine maintenance',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    lang2: { brief: 'Mais "will": reagindo a problemas com ofertas e decisões — "I\'ll get it", "We\'ll replace it".\n\n(Formatos: EGU Units 21-22 — adaptados.)', items: LANG2 },

    listen1: {
      brief: 'Planejando o dia de trabalho: Frank distribui tarefas entre eletricista e mecânico. Ouça quem faz o quê e quando.',
      items: LISTEN1,
      script: SCRIPT
    },

    job: {
      brief: "It's my job: Val Ribeiro é eletricista na indústria do petróleo. Instala, mantém e faz troubleshooting — sempre de olho no choque e na faísca.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Val Ribeiro — electrician',
          text: "I'm Val Ribeiro, an electrician. I work on everything electrical in the oil industry: I install, maintain, and repair electrical wiring, fixtures, and control equipment. This includes troubleshooting when things go wrong.\n\nA lot of my work is outdoors, in all kinds of weather, sometimes in high places. I use all my PPE — hard hat, safety glasses, gloves, hearing protection, and a safety harness. I also stand on insulating rubber matting to reduce the risk of shock.\n\nElectricity has two big hazards: electrocution and sparks. A spark near flammable gas can cause an explosion. So I work very carefully, check everything, and other electricians check my work too. We look out for each other."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u12:r:job1',
          title: '👷 What does Val work on?', main: null,
          options: opts('Everything electrical', ['Only pipes', 'Only helicopters', 'Only the kitchen']),
          expl: 'Wiring, fixtures, control equipment.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u12:r:job2',
          title: '👷 What are electricity\'s two big hazards?', main: null,
          options: opts('Electrocution and sparks', ['Rain and wind', 'Noise and dust', 'Heat and cold']),
          expl: 'Choque (electrocution) e faíscas.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u12:r:job3',
          title: '👷 Why is a spark dangerous near gas?', main: null,
          options: opts('It can cause an explosion', ['It looks bad', 'It is cold', 'It smells']),
          expl: 'Faísca + gás inflamável = explosão.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u12:r:job4',
          title: '👷 What does he stand on to reduce shock?', main: null,
          options: opts('Insulating rubber matting', ['A metal plate', 'Water', 'A wooden chair']),
          expl: 'Tapete de borracha isolante.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: você gostaria do trabalho do Val? Diga 2 EPIs que o eletricista usa e por quê ("He wears… to protect…").',
        waText: 'Registro: EPI do eletricista + porquê.'
      }
    },

    write: {
      brief: 'Registrando reparos: problema, causa e solução no repair record. O documento que ensina a próxima equipe.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ O registro de reparo',
          textTitle: 'Recording repairs',
          text: 'A repair record has three key parts:\n\nProblem: what was wrong? (e.g. "Compressor making a strange noise")\nCause: why? (e.g. "Loose belt")\nRepair: what you did (e.g. "Checked belt tension; tightened belt")\n\nWrite it clearly — the next technician will read it.',
          nextLabel: 'Continuar ▸'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u12:r:wr1',
          title: '✍️ “Compressor making a strange noise” é o campo…', main: null,
          options: opts('Problem', ['Cause', 'Repair', 'Date']),
          expl: 'O sintoma = problema.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u12:r:wr2',
          title: '✍️ “Loose belt” é o campo…', main: null,
          options: opts('Cause', ['Problem', 'Repair', 'Signature']),
          expl: 'A causa do problema.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u12:r:wr3',
          title: '✍️ “Tightened belt” é o campo…', main: null,
          options: opts('Repair', ['Problem', 'Cause', 'Date']),
          expl: 'O que foi feito = repair.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Repair record',
        brief: 'Preencha um registro de reparo em inglês (real ou de treino):',
        btn: '✍️ Preencher e enviar',
        fields: [
          { label: 'Item to repair', ph: 'ex.: portable generator' },
          { label: 'Problem', ph: 'ex.: won\'t start', rows: 2 },
          { label: 'Cause', ph: 'ex.: dirty spark plug', rows: 2 },
          { label: 'Repair', ph: 'ex.: cleaned the spark plug', rows: 2 }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Repairs and Maintenance.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 12 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 12:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u12:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 12 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 12));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I can talk about problems and solutions.',
    'I can use will to talk about the future and decisions.',
    'I can understand routine maintenance.',
    'I can plan a day\'s work.',
    'I can record repairs.',
    'I can pronounce /b/ and /p/ correctly.'
  ];

  DF.UNIT_DATA[12] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'part', 'qty'], max: 9999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
