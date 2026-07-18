/* DEEP FLOW — units/unit14.js
   UNIT 14 — Emergencies (2750 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U14 (p.94-99) — objetivos, nada
   copiado; gramática = if/when/in case (LANG1) e Past Continuous (LANG2)
   EGU Units 25/38, adaptada; pronúncia = /v/ × /w/. Personagem autoral:
   Rafa Coelho (oil field medic). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'emergency', pt: 'emergência', def: 'a dangerous situation that needs fast action.' },
    { en: 'first aid kit', pt: 'kit de primeiros socorros', def: 'the box with basic medical supplies.' },
    { en: 'stretcher', pt: 'maca', def: 'used to carry an injured person.' },
    { en: 'ambulance', pt: 'ambulância', def: 'the vehicle that takes injured people to hospital.' },
    { en: 'fire engine', pt: 'caminhão de bombeiros', def: 'the vehicle for fighting fires.' },
    { en: 'fire extinguisher', pt: 'extintor', def: 'used to put out a small fire.' },
    { en: 'medical oxygen', pt: 'oxigênio medicinal', def: 'given to someone who can\'t breathe well.' },
    { en: 'defibrillator', pt: 'desfibrilador', def: 'restarts the heart with an electric shock.' },
    { en: 'SCBA', pt: 'equipamento autônomo de respiração', def: 'self-contained breathing apparatus.' },
    { en: 'assess', pt: 'avaliar', def: 'judge the situation quickly and calmly.' },
    { en: 'evacuate', pt: 'evacuar', def: 'get everyone out of the area safely.' },
    { en: 'activate', pt: 'acionar', def: 'activate the fire alarm.' },
    { en: 'ensure', pt: 'garantir', def: 'make sure something happens.' },
    { en: 'deal with', pt: 'lidar com', def: 'handle a problem.' },
    { en: 'react', pt: 'reagir', def: 'do something when something happens.' }
  ];

  const TOOLS = [
    { en: 'injury', pt: 'ferimento / lesão' },
    { en: 'burn', pt: 'queimadura / queimar' },
    { en: 'bleeding', pt: 'sangramento' },
    { en: 'broken leg', pt: 'perna quebrada' },
    { en: 'electric shock', pt: 'choque elétrico' },
    { en: 'conscious', pt: 'consciente' },
    { en: 'unconscious', pt: 'inconsciente' },
    { en: 'fumes', pt: 'vapores / fumaça' },
    { en: 'bandage', pt: 'atadura / bandagem' },
    { en: 'vital signs', pt: 'sinais vitais' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: if / when / in case ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:iw1',
      title: '🔧 Situação esperada:', main: '___ new employees start work, I train them.',
      options: opts('When', ['In case', 'Because', 'So']),
      expl: 'Situação que sempre acontece → When.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:iw2',
      title: '🔧 Preparação para possível emergência:', main: 'We have a first aid kit ___ someone gets hurt.',
      options: opts('in case', ['when', 'because', 'so that not']),
      expl: 'Preparação/precaução → in case.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:iw3',
      title: '🔧 Condição:', main: '___ there\'s an accident, we complete a report.',
      options: opts('If', ['In case', 'Because', 'But']),
      expl: 'Condição possível → If.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:iw4',
      title: '🔧 Complete:', main: '___ the fire alarm rings, we evacuate immediately.',
      options: opts('When', ['In case', 'Because', 'So']),
      expl: 'Sempre que tocar → When.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:iw5',
      title: '🔧 Complete:', main: 'We always have a fire extinguisher nearby ___ there\'s a fire.',
      options: opts('in case', ['when', 'because', 'so']),
      expl: 'Preparação → in case.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:iw6',
      title: '🔧 Complete:', main: 'I carry my mobile phone ___ I need to call for help.',
      options: opts('in case', ['when', 'because', 'but']),
      expl: 'Precaução → in case.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u14:g:ord1',
      title: '🔧 Monte a frase:', answer: 'If someone is badly injured I arrange evacuation',
      expl: 'If + situação + ação.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: Past Continuous ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:pc1',
      title: '🔧 Ação em andamento no passado:', main: 'We ___ when the fire started.',
      options: opts('were welding', ['welded', 'are welding', 'weld']),
      expl: 'was/were + verbo-ing (contínua) + when + Past Simple.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:pc2',
      title: '🔧 Complete:', main: 'I ___ on the ladder this morning.',
      options: opts('was working', ['worked', 'am working', 'work']),
      expl: 'I was working.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:pc3',
      title: '🔧 Negativa:', main: 'I ___ my goggles when I hurt my eye.',
      options: opts("wasn't wearing", ["didn't wearing", "weren't wear", "not wearing"]),
      expl: 'wasn\'t wearing.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:pc4',
      title: '🔧 Pergunta:', main: '___ you welding when the fire started?',
      options: opts('Were', ['Did', 'Was', 'Are']),
      expl: 'Were you …-ing?'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:pc5',
      title: '🔧 Complete:', main: 'It ___ a strange noise, so we turned it off.',
      options: opts('was making', ['made was', 'is making', 'make']),
      expl: 'was making (ação em curso) + Past Simple.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u14:g:ord2',
      title: '🔧 Monte a frase:', answer: 'He was carrying a large piece of wood',
      expl: 'was + carrying.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u14:g:pc6',
      title: '🔧 Escolha certo:', main: null,
      options: opts('We were using the saw when it happened.', ['We was using the saw.', 'We were use the saw.', 'We using were the saw.']),
      expl: 'we → were + using.'
    }
  ];

  // ---------- LISTENING: entendendo o que houve (autoral) ----------
  const SCRIPT =
    'Three emergencies\n\n' +
    'Situation 1\n' +
    'A: A man has broken his hand. It happened in the workshop — we were moving a heavy motor. The area is safe now. It\'s not very serious.\n\n' +
    'Situation 2\n' +
    'A: A pipe fell on his head. He\'s unconscious and can\'t talk. It happened near the well head. Telephone an ambulance now!\n\n' +
    'Situation 3\n' +
    'A: He burned his arm with hot metal in the process area. He used the emergency shower. It\'s a minor injury.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 440 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u14:l:em1',
      title: '🎧 Situação 1 — o que o homem quebrou?',
      tts: dlg(['A man has broken his hand. It happened in the workshop.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“A man has broken his hand. It happened in the workshop.”',
      options: opts('a mão', ['a perna', 'a cabeça', 'o braço']),
      expl: 'broken his hand.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u14:l:em2',
      title: '🎧 Situação 2 — o homem está…',
      tts: dlg(["A pipe fell on his head. He's unconscious and can't talk."]),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“He\'s unconscious and can\'t talk.”',
      options: opts('inconsciente (não fala)', ['consciente e bem', 'dormindo', 'trabalhando']),
      expl: 'unconscious = inconsciente.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u14:l:em3',
      title: '🎧 Situação 2 — o que fazer AGORA?',
      tts: dlg(['Telephone an ambulance now!']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Telephone an ambulance now!”',
      options: opts('chamar uma ambulância', ['esperar', 'dar água', 'ir almoçar']),
      expl: 'Ferimento grave → ambulância imediata.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u14:l:em4',
      title: '🎧 Situação 3 — o que ele usou para a queimadura?',
      tts: dlg(['He burned his arm. He used the emergency shower.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“He used the emergency shower.”',
      options: opts('o chuveiro de emergência', ['o extintor', 'o rádio', 'a maca']),
      expl: 'Emergency shower para queimadura.'
    }
  ];

  // ---------- READING: lidando com acidentes (autoral) ----------
  const READ_TEXT =
    'When there\'s an accident — four steps\n\n' +
    '1. Assess the situation. Understand what happened, quickly and calmly. Check for danger: if something injured someone, will it injure you too?\n\n' +
    '2. Make the area safe. Protect the injured person from more danger. Be careful.\n\n' +
    '3. Give emergency first aid. Assess each person; help the worst injuries first. Only treat someone if you are competent to do so.\n\n' +
    '4. Get help. Call emergency services, or make sure someone has called them.\n\n' +
    'Golden rule: never do something that will injure you. If you do, there will be two injured people, not one.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u14:r:acc1',
      title: '📖 What is step 1?', main: null,
      options: opts('Assess the situation', ['Call your family', 'Take a photo', 'Go home']),
      expl: 'Primeiro: avaliar.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u14:r:acc2',
      title: '📖 Why check for danger first?', main: null,
      options: opts("So the hazard doesn't injure you too", ['To take your time', 'To find your phone', 'It is not needed']),
      expl: 'Nunca vire a segunda vítima.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u14:r:acc3',
      title: '📖 Who do you help first?', main: null,
      options: opts('The people with the worst injuries', ['Your friends', 'The manager', 'The youngest']),
      expl: 'Worst injuries first.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u14:r:acc4',
      title: '📖 When should you treat an injured person?', main: null,
      options: opts('Only if you are competent to do so', ['Always', 'Never', 'Only if they ask twice']),
      expl: 'Só se você for competente.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u14:r:acc5',
      title: '📖 What is the golden rule?', main: null,
      options: opts("Never do something that will injure you", ['Always run', 'Never call for help', 'Move fast, not safe']),
      expl: 'Não vire a segunda vítima.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u14:f:1',
      title: '🧰 Alguém respira mal por fumaça. O que fazer?', main: null,
      options: opts('Gently move him to fresh air.', ['Give him coffee.', 'Shake him hard.', 'Leave him there.']),
      expl: 'Ar fresco para problemas de respiração.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u14:f:2',
      title: '🧰 Antes de tocar em quem levou choque, você deve…', main: null,
      options: opts('garantir que a eletricidade está desligada', ['puxá-lo rápido', 'jogar água', 'não fazer nada']),
      expl: 'Make sure the electricity is off first.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u14:f:3',
      title: '🧰 Para reportar: “I need to report an ___.”', main: null,
      options: opts('accident', ['accidently', 'accidence', 'occident']),
      expl: 'accident = acidente.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'pro', srsId: 'u14:s:vw1',
      title: '🗣️ /v/ ou /w/? Você ouve “Do you know where it ___?”',
      main: null, tts: 'Do you know where it went?', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“…where it went?”',
      options: opts('went (/w/)', ['vent (/v/)', 'want', 'wind']),
      expl: 'went (/w/) × vent (/v/): /v/ usa os dentes.', feedbackTts: 'went'
    },
    {
      ui: 'choice', cat: 'pro', srsId: 'u14:s:vw2',
      title: '🗣️ Complete com V ou W: e__acuate', main: null,
      options: opts('v → evacuate', ['w → ewacuate', 'nada', 'vv → evvacuate']),
      expl: 'evacuate = evacuar (/v/).'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u14:s:nato1',
      title: '📻 Rádio NATO: “Foxtrot · India · Romeo · Echo” soletra…', main: null,
      options: opts('FIRE', ['FIVE', 'FIRM', 'FIND']),
      expl: 'F-I-R-E = fire.'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '2.750 m. Quando cada segundo conta: emergências. Reagir com calma, em inglês — porque hesitar custa vidas.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — o vocabulário que salva:',
          cards: [
            { en: 'emergency', pt: 'emergência', def: 'Act now — fast and calm.' },
            { en: 'first aid kit', pt: 'kit de primeiros socorros', def: 'The first help for an injured person.', tts: 'first aid kit' },
            { en: 'stretcher', pt: 'maca', def: 'To carry an injured person.' },
            { en: 'evacuate', pt: 'evacuar', def: 'Get everyone out safely.' },
            { en: 'assess', pt: 'avaliar', def: 'Understand what happened, quickly and calmly.' },
            { en: 'conscious / unconscious', pt: 'consciente / inconsciente', def: 'Awake / not awake.', tts: 'conscious. unconscious.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🚨 Calma salva',
          textTitle: 'Emergencies',
          text: 'On a rig or in a refinery, an emergency can be a fire, a fall, a burn, an electric shock, or someone who can\'t breathe.\n\nThe language of emergencies must be fast and clear. You assess, you make the area safe, you give first aid, and you get help.\n\nThis station teaches the words, the grammar of "if / when / in case", and how to report an accident calmly — even when your heart is racing.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u14:v:assess',
          sp: { g: 'venpt', en: 'assess', u: 14 },
          title: '📦 “Assess” a situação significa…', main: null,
          options: opts('avaliar / julgar', ['ignorar', 'gritar', 'fotografar']),
          expl: 'assess = avaliar com calma.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u14:r:bg1',
          title: '🚨 Alguém desmaiado está…', main: null,
          options: opts('unconscious', ['conscious', 'careful', 'competent']),
          expl: 'unconscious = inconsciente.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u14:v:evac',
          sp: { g: 'venpt', en: 'evacuate', u: 14 },
          title: '📦 “Evacuate” significa…', main: null,
          options: opts('retirar todos com segurança', ['limpar o chão', 'ligar o alarme só', 'encher o tanque']),
          expl: 'evacuate = evacuar.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave os 4 passos de um acidente em inglês: "Assess. Make the area safe. Give first aid. Get help."',
        waText: 'Registro: os 4 passos de emergência.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: acidentes e emergências, if/when/in case, veículos e equipamentos de emergência, Past Continuous e reportar acidentes.',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u14:v:ko1',
          title: '🚨 Ligue a lesão à descrição:',
          pairs: [['broken leg', "can't walk"], ['burn', 'hot metal'], ['bleeding', 'a cut'], ['electric shock', 'a cable']],
          expl: 'Cada lesão, sua causa.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u14:v:ko2',
          title: '🚨 Queimadura: qual o conselho?', main: null,
          options: opts('Pour cold water on it and call emergency services.', ['Put oil on it.', 'Ignore it.', 'Cover it with sand.']),
          expl: 'Água fria + serviços de emergência.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u14:v:ko3',
          title: '🚨 Perna quebrada: o conselho é…', main: null,
          options: opts("Stop his leg from moving. Call emergency services.", ['Make him run.', 'Massage the leg.', 'Give him water only.']),
          expl: 'Imobilizar e chamar ajuda.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u14:g:ko4',
          title: '🔧 Monte a frase:', answer: 'Call emergency services now',
          expl: 'Imperativa de emergência.'
        }
      ]
    },

    read1: {
      brief: 'Lidando com acidentes: os quatro passos e a regra de ouro (nunca vire a segunda vítima). Leia com atenção.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia o protocolo:',
          textTitle: 'Dealing with accidents',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    job: {
      brief: "It's my job: Rafa Coelho é medic de plataforma. Cuida de doentes e feridos, treina a equipe e organiza evacuações.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Rafa Coelho — oil field medic',
          text: "I'm Rafa Coelho, an oil field medic. When someone is sick or injured, I take care of them. If someone is badly injured or very sick, I arrange evacuation — sometimes by helicopter.\n\nWhen new employees arrive, I give them basic health and safety training. If there's a fire, we activate a fire-fighting plan. We also have an evacuation plan, in case we need to get everyone off the rig quickly.\n\nAnd if there are problems with noise or waste management, I deal with them too. On a rig, the medic is more than a nurse — I'm part of the safety system."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u14:r:job1',
          title: '👷 What does Rafa do when someone is injured?', main: null,
          options: opts('Takes care of them (and arranges evacuation if serious)', ['Nothing', 'Calls their family only', 'Sends an email']),
          expl: 'Cuida e, se grave, evacua.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u14:r:job2',
          title: '👷 What does he give new employees?', main: null,
          options: opts('Basic health and safety training', ['A helicopter', 'A day off', 'A radio']),
          expl: 'Treinamento básico de saúde e segurança.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u14:r:job3',
          title: '👷 Why is there an evacuation plan?', main: null,
          options: opts('In case they need to get everyone off the rig quickly', ['For fun', 'To sell tickets', 'There isn\'t one']),
          expl: 'in case = precaução.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u14:r:job4',
          title: '👷 What happens if there\'s a fire?', main: null,
          options: opts('They activate a fire-fighting plan', ['They wait', 'They go home', 'Nothing']),
          expl: 'Activate the fire-fighting plan.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave 3 frases com if/when/in case sobre segurança: "If there\'s a fire, I… When the alarm rings, we… I carry a radio in case…"',
        waText: 'Registro: 3 frases com if/when/in case.'
      }
    },

    lang1: { brief: 'if / when / in case: condição, situação esperada e precaução. A gramática que organiza os planos de emergência.\n\n(Formatos: EGU Unit 25 e afins — adaptados.)', items: LANG1 },

    vocab1: {
      brief: 'Veículos e equipamentos de emergência: ambulance, stretcher, defibrillator, SCBA — e quando usar cada um.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Equipamento de emergência:',
            cards: [
              { en: 'fire extinguisher', pt: 'extintor', def: 'For a small fire.', tts: 'fire extinguisher' },
              { en: 'first aid kit', pt: 'kit de primeiros socorros', def: 'For minor injuries.', tts: 'first aid kit' },
              { en: 'stretcher', pt: 'maca', def: 'To carry an injured person.' },
              { en: 'defibrillator', pt: 'desfibrilador', def: 'Restarts the heart.' },
              { en: 'medical oxygen', pt: 'oxigênio medicinal', def: 'For breathing problems.', tts: 'medical oxygen' },
              { en: 'SCBA', pt: 'respiração autônoma', def: 'Self-contained breathing apparatus.', tts: 'S C B A' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u14:v:eq1',
            title: '📦 Ligue o equipamento à situação:',
            pairs: [['fire extinguisher', 'a small fire'], ['stretcher', 'a broken leg'], ['medical oxygen', 'breathing problems'], ['first aid kit', 'a small cut']],
            expl: 'Cada equipamento, seu uso.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u14:v:eq2',
            title: '📦 Para reiniciar o coração, usa-se o…', main: null,
            options: opts('defibrillator', ['fire engine', 'stretcher', 'bandage']),
            expl: 'Desfibrilador reinicia o coração.'
          }
        ];
        DF.pickN(GLOSSARY.slice(0, 9), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 14));
        });
        DF.pickN(TOOLS, 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 14));
        });
        return items;
      }
    },

    listen1: {
      brief: 'Entendendo o que houve: três emergências narradas ao rádio. Ouça o quê, onde e o quão grave.',
      items: LISTEN1,
      script: SCRIPT
    },

    lang2: { brief: 'Past Continuous: o que estava acontecendo quando o acidente ocorreu. "We were welding when the fire started."\n\n(Formatos: EGU Unit 38 — adaptados.)', items: LANG2 },

    pron: {
      brief: 'Os sons /v/ e /w/: vent × went, veal × wheel. Um usa os dentes, o outro os lábios.',
      items: [
        {
          ui: 'cards', cat: 'pro',
          title: '🗣️ /v/ (dentes) × /w/ (lábios):',
          cards: [
            { en: 'vent / went', pt: 'respiro / foi', def: 'V uses your teeth; W rounds your lips.', tts: 'vent. went.' },
            { en: 'veal / wheel', pt: 'vitela / roda', def: 'Feel the difference.', tts: 'veal. wheel.' },
            { en: 'vehicle · evacuate · worst', pt: 'palavras da unidade', def: 'V in vehicle/evacuate; W in worst.', tts: 'vehicle. evacuate. worst.' }
          ]
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u14:p:vw1',
          title: '🗣️ Ouça: qual palavra?',
          tts: 'wheel', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“wheel”',
          options: opts('wheel (/w/)', ['veal (/v/)']),
          expl: 'wheel = roda (/w/).', feedbackTts: 'wheel'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u14:sp:pron1', unit: 14, waSec: 'Pronunciation',
          title: '🎤 Fale distinguindo /v/ e /w/:',
          target: 'Evacuate the vehicle — this is the worst.',
          ptHint: 'V em evacuate/vehicle; W em worst.'
        }
      ]
    },

    speak: {
      brief: 'Explicando um acidente: onde, o quê, quem, os ferimentos e quando. A ligação para o medic.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '💬 As perguntas do medic',
          textTitle: 'Explaining an accident',
          text: 'When you report an accident, the medic asks:\nWhere did it happen?\nWhat happened?\nWho was there?\nWhat are the injuries?\nWhen did it happen?\n\nBegin with: "I need to report an accident."',
          readAloud: true
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u14:r:spk1',
          title: '💬 “What are the injuries?” pergunta sobre…', main: null,
          options: opts('os ferimentos', ['o horário', 'o nome do chefe', 'o clima']),
          expl: 'injuries = ferimentos.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u14:sp:speak1', unit: 14, waSec: 'Speaking',
          title: '🎤 Abra a ligação:',
          target: 'I need to report an accident.',
          ptHint: 'Preciso reportar um acidente.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u14:sp:speak2', unit: 14, waSec: 'Speaking',
          title: '🎤 Descreva o ferimento:',
          target: 'He has a broken leg. He is conscious but in a lot of pain.',
          ptHint: 'Perna quebrada, consciente, com muita dor.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave o report de um acidente (2 papéis): where, what, who, injuries, when.',
        waText: 'Registro: report de acidente (2 papéis).'
      }
    },

    write: {
      brief: 'Relatório de acidente: tipo de lesão, atividade, local, data/hora e descrição. Documentar para prevenir.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ O relatório de acidente',
          textTitle: 'An accident report',
          text: 'An accident report records:\n\nInjury type · Work activity · Location\nDate and time of incident\nDescription of incident (what was happening, and what went wrong)\n\nUse the Past Continuous + Past Simple: "John was carrying a large piece of wood. He didn\'t see the open roof space. He fell and broke his leg."',
          nextLabel: 'Continuar ▸'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u14:g:wr1',
          title: '✍️ Complete:', main: 'John ___ a large piece of wood when he fell.',
          options: opts('was carrying', ['carried', 'carries', 'is carrying']),
          expl: 'was carrying (ação em curso) + fell.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u14:r:wr2',
          title: '✍️ “Injury type: broken leg” informa…', main: null,
          options: opts('o tipo de ferimento', ['o horário', 'o local', 'a testemunha']),
          expl: 'injury type = tipo de lesão.'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u14:sp:wr3',
          title: '🔤 Qual está correta?', main: null,
          options: opts('emergency', ['emergancy', 'emergensy', 'imergency']),
          expl: 'emergency.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Accident report',
        brief: 'Preencha um relatório de acidente em inglês (use Past Continuous + Past Simple na descrição):',
        btn: '✍️ Preencher e enviar',
        fields: [
          { label: 'Injury type', ph: 'ex.: broken leg' },
          { label: 'Work activity', ph: 'ex.: air conditioning repair' },
          { label: 'Location', ph: 'ex.: roof of the admin block' },
          { label: 'Date and time', ph: 'ex.: 20 July, 10:00' },
          { label: 'Description', ph: 'ex.: He was carrying wood when he fell…', rows: 3 }
        ]
      }
    },

    num: {
      brief: 'Sinais vitais: os números que dizem como está o paciente — temperatura, pulso, respiração e pressão.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 Vital signs:',
            cards: [
              { en: 'fever = above 38.5 °C', pt: 'febre', def: 'A fever is a temperature above 38.5°C.', tts: 'a fever is above thirty-eight point five degrees' },
              { en: 'pulse 60-100 / min', pt: 'pulso', def: 'A normal resting pulse.', tts: 'sixty to one hundred beats per minute' },
              { en: 'breathing 12-20 / min', pt: 'respiração', def: 'A normal resting breathing rate.', tts: 'twelve to twenty breaths per minute' },
              { en: 'blood pressure 120/80', pt: 'pressão', def: '85/55 is low, 150/100 is high.', tts: 'one hundred and twenty over eighty' }
            ]
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u14:n:v1',
            title: '🔢 Uma febre é uma temperatura acima de…', main: null,
            options: opts('38.5 °C', ['30 °C', '50 °C', '20 °C']),
            expl: 'Febre > 38,5 °C.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u14:n:v2',
            title: '🔢 “120/80” (pressão) lê-se…', main: null,
            options: opts('one hundred and twenty over eighty', ['one twenty eighty', 'twelve over eight', 'a hundred twenty eighty']),
            expl: 'over = "por" na pressão.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u14:n:v3',
            title: '🔢 Pulso normal em repouso:', main: null,
            options: opts('60-100 batidas por minuto', ['10-20 bpm', '150-200 bpm', '5 bpm']),
            expl: '60-100 beats per minute.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'phone', 'qty'], max: 999, rnd: rnd, diff: 2 }));
        }
        return items;
      }
    },

    check: { brief: 'Autoavaliação da estação Emergencies.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 14 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 14:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u14:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 14 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 14));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I can deal with accidents and emergencies.',
    'I can use if / when / in case.',
    'I can understand what\'s wrong.',
    'I can use the Past Continuous.',
    'I can explain and report an accident.',
    'I can write an accident report.',
    'I can understand vital signs.'
  ];

  DF.UNIT_DATA[14] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'phone', 'qty'], max: 999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
