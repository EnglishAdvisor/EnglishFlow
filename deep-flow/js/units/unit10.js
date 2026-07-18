/* DEEP FLOW — units/unit10.js
   UNIT 10 — Oil and the Environment (1800 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U10 (p.70-75) — objetivos, nada
   copiado; gramática = Past Simple regular (did/-ed) EGU Units 11-12, adaptada;
   pronúncia = terminações -ed (/id/,/t/,/d/). Personagem autoral: Bia Nogueira
   (safety and environment officer). Reading autoral sobre perfuração horizontal. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'environmental', pt: 'ambiental', def: 'about the natural world — air, water, soil, wildlife.' },
    { en: 'eco-hazard', pt: 'risco ambiental', def: 'something that can harm the environment.' },
    { en: 'incident', pt: 'incidente', def: 'an event: a fire, a leak, a spill, an accident.' },
    { en: 'explosion', pt: 'explosão', def: 'a sudden violent burst — it can destroy a rig.' },
    { en: 'noise', pt: 'ruído', def: 'noisy equipment causes noise pollution.' },
    { en: 'danger', pt: 'perigo', def: 'the chance of harm.' },
    { en: 'dangerous', pt: 'perigoso', def: 'able to cause harm.' },
    { en: 'noisy', pt: 'barulhento', def: 'making a lot of noise.' },
    { en: 'contractor', pt: 'empresa contratada', def: 'a company that does jobs for other companies.' },
    { en: 'risk assessment', pt: 'análise de risco', def: 'a report about possible dangers.' },
    { en: 'enclosure', pt: 'enclausuramento', def: 'a cover to reduce noise or contain a hazard.' },
    { en: 'clean up', pt: 'limpar (uma área)', def: 'remove the spill and make the area safe.' },
    { en: 'repair', pt: 'reparar', def: 'fix broken equipment.' },
    { en: 'carefully', pt: 'com cuidado', def: 'in a careful way.' },
    { en: 'safely', pt: 'com segurança', def: 'in a way that isn\'t dangerous.' }
  ];

  const TOOLS = [
    { en: 'oil spill', pt: 'derramamento de óleo' },
    { en: 'leak', pt: 'vazamento' },
    { en: 'gas flare', pt: 'queima de gás (flare)' },
    { en: 'pollution', pt: 'poluição' },
    { en: 'soil', pt: 'solo' },
    { en: 'wildlife', pt: 'vida selvagem' },
    { en: 'hazmat suit', pt: 'roupa de proteção química' },
    { en: 'nature reserve', pt: 'reserva natural' },
    { en: 'procedure', pt: 'procedimento' },
    { en: 'technique', pt: 'técnica' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: Past Simple regular ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:ps1',
      title: '🔧 Passado (afirmativa):', main: 'We ___ cleaning up last night.',
      options: opts('started', ['start', 'did start', 'starts']),
      expl: 'Regular: start → started.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:ps2',
      title: '🔧 Passado:', main: 'The refinery fire ___ for three days.',
      options: opts('burned', ['burn', 'did burned', 'burning']),
      expl: 'burn → burned.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:ps3',
      title: '🔧 Negativa:', main: 'We ___ cleaning up last night.',
      options: opts("didn't start", ["didn't started", "not started", "wasn't start"]),
      expl: 'didn\'t + verbo BASE (start, sem -ed).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:ps4',
      title: '🔧 Pergunta:', main: '___ you start cleaning up last night?',
      options: opts('Did', ['Do', 'Was', 'Were']),
      expl: 'Did + sujeito + verbo base.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:ps5',
      title: '🔧 Complete:', main: 'When we opened the flow, we ___ a lot of problems.',
      options: opts('had', ['have', 'did have', 'haved']),
      expl: 'have → had (irregular).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:ps6',
      title: '🔧 Complete (irregular):', main: 'I ___ to college in Recife.',
      options: opts('went', ['goed', 'did go', 'gone']),
      expl: 'go → went (irregular).'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u10:g:ord1',
      title: '🔧 Monte a pergunta:', answer: 'Why did you choose the oil industry',
      expl: 'Why + did + sujeito + verbo base.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: Past Simple (mistura) ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:pm1',
      title: '🔧 Passado:', main: 'We ___ the usual procedure and ___ the spill immediately.',
      options: opts('followed · reported', ['follow · report', 'did followed · reported', 'following · reporting']),
      expl: 'follow → followed · report → reported.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:pm2',
      title: '🔧 Passado (irregular):', main: 'The rig ___ , and it ___ the equipment.',
      options: opts('exploded · destroyed', ['explode · destroy', 'exploding · destroyed', 'did explode · did destroy']),
      expl: 'explode → exploded · destroy → destroyed.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:pm3',
      title: '🔧 Complete (past de "can\'t see"):', main: 'It was behind the trees, so people ___ it easily.',
      options: opts("couldn't see", ["can't see", "don't saw", "didn't saw"]),
      expl: 'can\'t → couldn\'t (see fica na base).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:pm4',
      title: '🔧 Pergunta:', main: '___ they stop work because of the weather?',
      options: opts('Did', ['Was', 'Were', 'Do']),
      expl: 'Did + they + stop.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:pm5',
      title: '🔧 Negativa:', main: 'We ___ a phone call to head office. (make)',
      options: opts("didn't make", ["didn't made", "not make", "don't made"]),
      expl: 'didn\'t make (verbo base).'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u10:g:ord2',
      title: '🔧 Monte a frase:', answer: 'They studied the whales before they started drilling',
      expl: 'studied / started (regulares).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u10:g:pm6',
      title: '🔧 Complete:', main: 'British Gas ___ a large oilfield in 1973. (discover)',
      options: opts('discovered', ['discover', 'did discover', 'discovering']),
      expl: 'discover → discovered.'
    }
  ];

  // ---------- LISTENING: problemas e soluções ambientais (autoral) ----------
  const SCRIPT =
    'Three environmental incidents\n\n' +
    'Conversation 1 — a leak\n' +
    'A: It happened last night. We closed the main valve.\n' +
    'B: Did it work?\n' +
    'A: Yes, it worked very well.\n\n' +
    'Conversation 2 — a noisy compressor\n' +
    'A: It started two days ago. The compressor is too noisy.\n' +
    'B: What did you do?\n' +
    'A: We built an enclosure around it. Now it\'s quiet.\n\n' +
    'Conversation 3 — an oil spill\n' +
    'A: I waited all day yesterday for the report. About two hundred litres spilled, but it\'s contained.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 430 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u10:l:env1',
      title: '🎧 Conversa 1 — o que fizeram com o vazamento?',
      tts: dlg(['It happened last night. We closed the main valve.', 'Did it work?', 'Yes, it worked very well.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“It happened last night. We closed the main valve. It worked very well.”',
      options: opts('Fecharam a válvula principal', ['Ligaram a bomba', 'Chamaram a imprensa', 'Ignoraram']),
      expl: 'We closed the main valve — e funcionou.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u10:l:env2',
      title: '🎧 Conversa 2 — solução para o compressor barulhento?',
      tts: dlg(['The compressor is too noisy.', 'What did you do?', "We built an enclosure around it. Now it's quiet."]),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The compressor is too noisy. We built an enclosure around it.”',
      options: opts('Construíram um enclausuramento', ['Desligaram tudo', 'Trocaram de fábrica', 'Aumentaram o som']),
      expl: 'Enclosure = enclausuramento contra ruído.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u10:l:env3',
      title: '🎧 Quantos litros vazaram? (só o número)',
      tts: dlg(['About two hundred litres spilled, but it\'s contained.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“About two hundred litres spilled, but it\'s contained.”',
      answers: ['200'], placeholder: 'litros',
      expl: 'two hundred = 200 L (e está contido).'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u10:l:env4',
      title: '🎧 “It\'s contained” significa que o vazamento…',
      tts: dlg(["It's contained."]),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“It\'s contained.”',
      options: opts('está contido (não se espalha)', ['está se espalhando', 'sumiu sozinho', 'foi vendido']),
      expl: 'contained = contido · uncontained = espalhando.'
    }
  ];

  // ---------- READING: perfuração horizontal (autoral) ----------
  const READ_TEXT =
    'Drilling that protects nature\n\n' +
    'Sometimes there is oil under a beautiful place — a forest, a village, or even the sea. How can a company get the oil without damaging that place?\n\n' +
    'One answer is horizontal drilling (also called extended-reach drilling). Normal drilling goes straight down. Horizontal drilling starts straight down, but then it turns and goes into the oil from the side.\n\n' +
    'This way, the oil can be under a forest, but the drilling rig can be far away — sometimes more than ten kilometres away. Before they started, the engineers studied the plants and animals and made a wildlife protection programme. They planned the work very carefully, and the environmental damage was very small.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u10:r:hd1',
      title: '📖 What direction does normal drilling go?', main: null,
      options: opts('Straight down', ['Sideways only', 'Up', 'In circles']),
      expl: 'Perfuração normal: reto para baixo.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u10:r:hd2',
      title: '📖 What does horizontal drilling do?', main: null,
      options: opts('Starts down, then turns into the oil from the side', ['Goes only up', 'Never turns', 'Drills the sky']),
      expl: 'Começa vertical, depois vira.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u10:r:hd3',
      title: '📖 Why is this good for the environment?', main: null,
      options: opts('The rig can be far from the sensitive place', ['It is faster only', 'It uses no oil', 'It makes more noise']),
      expl: 'A sonda fica longe da floresta/vila.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u10:r:hd4',
      title: '📖 What did the engineers do before drilling?', main: null,
      options: opts('Studied plants and animals; made a protection programme', ['Nothing', 'Cut the forest', 'Built a hotel']),
      expl: 'Estudaram a fauna/flora e planejaram com cuidado.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u10:r:hd5',
      title: '📖 The environmental damage was…', main: null,
      options: opts('very small', ['very big', 'a disaster', 'never measured']),
      expl: 'Planejamento cuidadoso → dano mínimo.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u10:f:rep1',
      title: '🧰 Para reportar um incidente ao rádio:', main: null,
      options: opts("There's an oil spill near tank 12.", ['Oil is spilling place tank the.', 'Spill oil there tank 12 near.', 'Tank 12 oil spill has been.']),
      expl: 'There\'s + incidente + lugar.',
      feedbackTts: "There's an oil spill near tank 12."
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u10:f:rep2',
      title: '🧰 “Are there any injuries?” pergunta se há…', main: null,
      options: opts('feridos', ['vazamentos', 'ferramentas', 'placas']),
      expl: 'injuries = ferimentos em pessoas.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u10:f:rep3',
      title: '🧰 “We followed the usual procedure” significa…', main: null,
      options: opts('seguimos o procedimento padrão', ['inventamos na hora', 'ignoramos as regras', 'chamamos a polícia']),
      expl: 'procedure = procedimento (jeito correto de fazer).'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'pro', srsId: 'u10:s:ed1',
      title: '🗣️ O -ED de “started” soa como…', main: 'star-ted',
      options: opts('/id/ (uma sílaba extra)', ['/t/', '/d/', 'mudo']),
      expl: 'Depois de T/D, o -ed vira /id/: star-tid.'
    },
    {
      ui: 'choice', cat: 'pro', srsId: 'u10:s:ed2',
      title: '🗣️ O -ED de “worked” soa como…', main: 'workt',
      options: opts('/t/', ['/id/', '/d/', 'mudo']),
      expl: 'Depois de som surdo (k), o -ed vira /t/: “workt”.'
    },
    {
      ui: 'choice', cat: 'pro', srsId: 'u10:s:ed3',
      title: '🗣️ O -ED de “closed” soa como…', main: 'clozd',
      options: opts('/d/', ['/t/', '/id/', 'mudo']),
      expl: 'Depois de som sonoro, o -ed vira /d/: “clozd”.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u10:s:nato1',
      title: '📻 Rádio NATO: “Sierra · Papa · India · Lima · Lima” soletra…', main: null,
      options: opts('SPILL', ['SPELL', 'STILL', 'SPILT']),
      expl: 'S-P-I-L-L = spill (derramamento).'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '1.800 m. A responsabilidade que vem com o óleo: proteger o meio ambiente. Riscos, incidentes e prevenção — no passado e no presente.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — o vocabulário ambiental:',
          cards: [
            { en: 'eco-hazard', pt: 'risco ambiental', def: 'Anything that can harm the environment.' },
            { en: 'incident', pt: 'incidente', def: 'A fire, a leak, a spill, an accident.' },
            { en: 'oil spill', pt: 'derramamento', def: 'Oil out of place — in the sea or on land.', tts: 'oil spill' },
            { en: 'leak', pt: 'vazamento', def: 'Liquid or gas escaping from equipment.' },
            { en: 'clean up', pt: 'limpar', def: 'Remove the spill and make the area safe.', tts: 'clean up' },
            { en: 'risk assessment', pt: 'análise de risco', def: 'A report about possible dangers.', tts: 'risk assessment' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🌿 A conta que o óleo cobra',
          textTitle: 'Oil and the environment',
          text: 'Oil pays well, but it can hurt the environment: noise pollution, water pollution, soil pollution, air pollution.\n\nAn eco-hazard is anything that can harm people, plants, animals, water, earth, or air. An incident is an event: a fire, a gas leak, an oil spill, an explosion.\n\nGood companies prevent incidents with careful planning, risk assessments, and clean drilling techniques. And when something happens, they report it, contain it, and clean it up.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u10:v:spill',
          sp: { g: 'venpt', en: 'oil spill', u: 10 },
          title: '📦 “Oil spill” é…', main: null,
          options: opts('derramamento de óleo', ['torneira de óleo', 'preço do óleo', 'tanque de óleo']),
          expl: 'spill = derrame.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u10:r:bg1',
          title: '🌿 Um “eco-hazard” pode prejudicar…', main: null,
          options: opts('pessoas, plantas, animais, água, ar', ['só o lucro', 'só as máquinas', 'só o escritório']),
          expl: 'Tudo do meio ambiente.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u10:v:cleanup',
          sp: { g: 'venpt', en: 'clean up', u: 10 },
          title: '📦 “Clean up” significa…', main: null,
          options: opts('limpar a área e torná-la segura', ['fechar a empresa', 'aumentar a produção', 'pintar o tanque']),
          expl: 'clean up = limpar o incidente.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases sobre meio ambiente. Modelo: "There was an oil spill. We reported it. We cleaned it up."',
        waText: 'Registro: 3 sentences — environment.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: impacto ambiental, Past Simple, eco-riscos, reportar incidentes e o -ED. Primeiro: que problema cada situação causa?',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u10:v:ko1',
          title: '🌿 Ligue o problema ao tipo de poluição:',
          pairs: [['oil spill', 'water pollution'], ['noisy equipment', 'noise pollution'], ['gas flare', 'air pollution'], ['leak', 'soil pollution']],
          expl: 'Cada incidente, seu tipo de poluição.'
        },
        {
          ui: 'match', cat: 'voc', srsId: 'u10:v:ko2',
          title: '🌿 Ligue o problema à solução:',
          pairs: [['noise', 'reduce it'], ['spill', 'clean it up'], ['broken part', 'repair it'], ['leak', 'stop it']],
          expl: 'Problema → ação.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u10:v:ko3',
          title: '🌿 Para o compressor barulhento, a solução é um…', main: null,
          options: opts('enclosure (enclausuramento)', ['explosion', 'oil spill', 'flare']),
          expl: 'Enclosure reduz o ruído.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u10:g:ko4',
          title: '🔧 Monte a frase:', answer: 'We reported the spill immediately',
          expl: 'Past Simple: reported.'
        }
      ]
    },

    lang1: { brief: 'O Past Simple regular: -ed na afirmativa, did/didn\'t na pergunta e negativa. O tempo dos relatórios.\n\n(Formatos: EGU Units 11-12 — adaptados.)', items: LANG1 },

    job: {
      brief: "It's my job: Bia Nogueira é oficial de segurança e meio ambiente. Ajuda contratadas a trabalhar com segurança e cuida da natureza.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Bia Nogueira — safety and environment officer',
          text: "I'm Bia Nogueira, a safety and environment officer. I help contractors — companies that do jobs for us — to work safely and protect the environment.\n\nLast week I worked on a big risk assessment. I visited two construction sites. I talked to the contractors and I explained our environmental procedures: how to store waste, how to prevent leaks, how to report an incident.\n\nMy job is to prevent problems before they happen. When everyone follows the procedures, the work is safe and the environment stays clean."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u10:r:job1',
          title: '👷 What does Bia help contractors do?', main: null,
          options: opts('Work safely and protect the environment', ['Drill faster', 'Sell more oil', 'Fly helicopters']),
          expl: 'Segurança + meio ambiente.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u10:r:job2',
          title: '👷 What did she work on last week?', main: null,
          options: opts('A big risk assessment', ['A holiday', 'A new car', 'A song']),
          expl: 'risk assessment = análise de risco.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u10:r:job3',
          title: '👷 What did she visit?', main: null,
          options: opts('Two construction sites', ['Two restaurants', 'The beach', 'Head office only']),
          expl: 'construction sites = canteiros de obra.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u10:r:job4',
          title: '👷 What did she explain to the contractors?', main: null,
          options: opts('The environmental procedures', ['Her salary', 'The football scores', 'Nothing']),
          expl: 'Procedimentos ambientais.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave 3 frases no passado sobre uma semana de trabalho (real ou imaginária): "Last week I visited… I talked to… I explained…".',
        waText: 'Registro: minha semana no passado (3 frases).'
      }
    },

    vocab1: {
      brief: 'Prevenindo e lidando com eco-riscos: os incidentes (fire, spill, leak, explosion) e as prevenções.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Incidentes e prevenção:',
            cards: [
              { en: 'fire / explosion', pt: 'incêndio / explosão', def: 'The worst incidents.', tts: 'fire. explosion.' },
              { en: 'leak / oil spill', pt: 'vazamento / derrame', def: 'Report it immediately.', tts: 'leak. oil spill.' },
              { en: 'hazmat suit', pt: 'roupa química', def: 'Wear it to check a gas leak.', tts: 'hazmat suit' },
              { en: 'procedure', pt: 'procedimento', def: 'The correct way to do something.' },
              { en: 'wildlife protection programme', pt: 'programa de proteção à fauna', def: 'Study the animals before drilling.', tts: 'wildlife protection programme' },
              { en: 'special drilling techniques', pt: 'técnicas especiais de perfuração', def: 'Get the oil and protect nature.', tts: 'special drilling techniques' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u10:v:inc1',
            title: '📦 Ligue o incidente à ação:',
            pairs: [['fire', 'put it out'], ['spill', 'report it'], ['gas leak', 'close the valve'], ['noise', 'build an enclosure']],
            expl: 'Cada incidente, sua resposta.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u10:v:inc2',
            title: '📦 Para checar um vazamento de gás, você veste…', main: null,
            options: opts('a hazmat suit', ['a swimsuit', 'a football kit', 'a suit and tie']),
            expl: 'hazmat = hazardous materials.'
          }
        ];
        DF.pickN(GLOSSARY.slice(0, 11), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 10));
        });
        DF.pickN(TOOLS, 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 10));
        });
        return items;
      }
    },

    lang2: { brief: 'Mais Past Simple: verbos regulares e irregulares (went, had, couldn\'t) para contar o que aconteceu.\n\n(Formatos: EGU Units 11-12 — adaptados.)', items: LANG2 },

    read1: {
      brief: 'Perfuração que protege a natureza: como a técnica horizontal tira óleo de baixo de uma floresta sem destruí-la. Leia e responda.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia com atenção:',
          textTitle: 'Preventing environmental damage',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    listen1: {
      brief: 'Problemas e soluções ambientais: vazamento, compressor barulhento e derrame. Ouça o que fizeram — tudo no passado.',
      items: LISTEN1,
      script: SCRIPT
    },

    pron: {
      brief: 'A terminação -ED: três sons diferentes (/id/, /t/, /d/). O detalhe que revela seu nível no passado.',
      items: [
        {
          ui: 'cards', cat: 'pro',
          title: '🗣️ Os três sons do -ED:',
          cards: [
            { en: 'started · waited', pt: 'som /id/ (sílaba extra)', def: 'After t or d: star-tid, wai-tid.', tts: 'started. waited.' },
            { en: 'worked · finished', pt: 'som /t/', def: 'After voiceless: workt, finisht.', tts: 'worked. finished.' },
            { en: 'closed · happened', pt: 'som /d/', def: 'After voiced: clozd, happend.', tts: 'closed. happened.' }
          ]
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u10:p:ed1',
          title: '🗣️ Ouça: qual som tem o -ed?',
          tts: 'waited', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“wai-tid”',
          options: opts('/id/', ['/t/', '/d/']),
          expl: 'wait termina em T → /id/.', feedbackTts: 'waited'
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u10:p:ed2',
          title: '🗣️ Ouça: qual som tem o -ed?',
          tts: 'finished', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“finisht”',
          options: opts('/t/', ['/id/', '/d/']),
          expl: 'finish termina em som surdo → /t/.', feedbackTts: 'finished'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u10:sp:pron1', unit: 10, waSec: 'Pronunciation',
          title: '🎤 Fale as três terminações:',
          target: 'We started, we worked, and we closed the valve.',
          ptHint: 'star-tid · workt · clozd.'
        }
      ]
    },

    speak: {
      brief: 'Reportando um incidente: o quê, onde, feridos, volume e se está contido. A ligação que dá o alarme.',
      items: [
        {
          ui: 'choice', cat: 'fun', srsId: 'u10:f:spk1',
          title: '💬 Você reporta um derrame. Começa com:', main: null,
          options: opts("I need to report an oil spill.", ['Oil is out from the tank now down.', 'Spill happen tank near.', 'Report I want spill oil.']),
          expl: '“I need to report…” — abertura padrão.',
          feedbackTts: 'I need to report an oil spill.'
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u10:f:spk2',
          title: '💬 O operador pergunta sobre feridos. Você responde (não há):', main: null,
          options: opts("There are no injuries.", ['No people hurt is.', 'Injuries there aren\'t nobody.', 'People no injury have.']),
          expl: 'There are no injuries = sem feridos.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u10:sp:speak1', unit: 10, waSec: 'Speaking',
          title: '🎤 Reporte o local:',
          target: "The spill is between tanks ten and twelve.",
          ptHint: 'O derrame é entre os tanques 10 e 12.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u10:sp:speak2', unit: 10, waSec: 'Speaking',
          title: '🎤 Informe a situação:',
          target: "About two hundred litres spilled, but it's contained.",
          ptHint: 'Cerca de 200 litros, mas está contido.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave a ligação de report (2 papéis): quê, onde, feridos, volume, contido ou não.',
        waText: 'Registro: reportando um incidente (2 papéis).'
      }
    },

    write: {
      brief: 'Relatório de incidente ambiental: o formulário que documenta data, local, tipo, volume e risco.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ O relatório de incidente',
          textTitle: 'Environmental incident report',
          text: 'An incident report records the facts:\n\nDate of incident · Time reported · Location\nType of incident (spill / leak / fire)\nVolume of oil\nDamage to: plants / wildlife / water / soil\nRisk assessment (immediate risk?)\nPossible environmental damage\n\nWrite facts, not opinions. Clear and short.',
          nextLabel: 'Continuar ▸'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u10:r:wr1',
          title: '✍️ No relatório, “Volume of oil: 20,000 litres” informa…', main: null,
          options: opts('quanto óleo vazou', ['o preço do óleo', 'a hora do almoço', 'o nome do rio']),
          expl: 'Volume = quantidade derramada.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u10:r:wr2',
          title: '✍️ “Risk assessment: no immediate risk” significa…', main: null,
          options: opts('sem risco imediato', ['risco altíssimo agora', 'sem relatório', 'risco na próxima semana']),
          expl: 'no immediate risk = nenhum risco imediato.'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u10:sp:wr3',
          title: '🔤 Qual está correta?', main: null,
          options: opts('environmental', ['enviromental', 'environmentel', 'envaironmental']),
          expl: 'environmental — não esqueça o N do meio.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Environmental incident report',
        brief: 'Preencha um relatório de incidente ambiental em inglês:',
        btn: '✍️ Preencher e enviar',
        fields: [
          { label: 'Date / time', ph: 'ex.: 27 March, 16:30' },
          { label: 'Location', ph: 'ex.: Pipeline 32, Station 6' },
          { label: 'Type of incident', ph: 'ex.: pipeline leak' },
          { label: 'Volume of oil', ph: 'ex.: 20,000 litres' },
          { label: 'Risk assessment', ph: 'ex.: no immediate risk', rows: 2 }
        ]
      }
    },

    project: {
      brief: 'Missão de pesquisa: como a indústria protege o meio ambiente. Descubra métodos e registre.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧪 Project — Protecting the environment',
          textTitle: 'Sua missão',
          text: 'A perfuração horizontal protege o ambiente. Pesquise outras formas (pode ser em português) e escreva em inglês simples:\n\n• double-hulled tankers (navios de casco duplo)\n• re-planting after drilling\n• safe disposal of drilling mud\n\nEscolha DUAS e explique cada uma em uma frase.',
          nextLabel: 'Preencher a entrega ▸'
        }
      ],
      task: {
        type: 'project',
        title: '🧪 Entrega do Project',
        brief: 'Preencha e envie ao mentor:',
        btn: '🧪 Preencher e enviar no WhatsApp',
        fields: [
          { label: 'Method 1', ph: 'ex.: Double-hulled tankers protect the sea because…', rows: 2 },
          { label: 'Method 2', ph: 'ex.: Re-planting after drilling…', rows: 2 }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Oil and the Environment.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 10 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 10:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u10:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 10 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 10));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I can talk about environmental impact.',
    'I can use the Past Simple (regular and irregular).',
    'I can name some eco-hazards.',
    'I can report an incident.',
    'I can complete an environmental incident report.',
    'I can pronounce -ed endings correctly.'
  ];

  DF.UNIT_DATA[10] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'qty'], max: 99999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
