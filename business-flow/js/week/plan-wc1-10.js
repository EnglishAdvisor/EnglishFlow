/* ENGLISH FLOW — week/plan-wc1-10.js
   WORLD CLASS ONE · UNIT 10 "Decisions, Decisions" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: o Max e a bolsa de estudos, as três conversas de
                    reembolso, o irmão gêmeo perdendo a bolsa, as abelhas do
                    Thomas Seeley, o dilema moral do Tyler no scanner.
     APP          → THE FORK, consultoria fictícia que ajuda pessoas a
                    destravar decisões difíceis — mapeia os fatores, projeta
                    os cenários e cobra a justificativa. 100% autoral (item 20).

   Por que este cenário: a unidade cobra o condicional (prever e imaginar),
   causa e efeito, identificar os fatores que influenciam uma decisão, e
   justificar a escolha. Uma consultoria de decisão é literalmente o lugar
   onde essas quatro coisas acontecem juntas, e hospeda os outcomes sem tocar
   no Max nem no Tyler do livro.

     outcome 1 (conditional)          → projetar os cenários da decisão
     outcome 2 (cause and effect)     → o que causou o quê no histórico
     outcome 3 (factors that influence) → o mapa de fatores do cliente
     outcome 4 (justify a decision)   → a recomendação final, defendida

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026).

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (The Conditional)
     Semana 2 · Listening + Connections + Pronunciation (relative clause intonation)
     Semana 3 · Reading + Speaking (peer pressure) + Video
     Semana 4 · Writing + Expanding Your Fluency + Outcomes */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.decisionFactor = ['what my family would say', 'how much it costs',
                                    'how tired I already am', 'what my friends are doing',
                                    'how long it would take', 'whether I could undo it'];
    DF.WGEN.POOLS.hypothetical = ['won the lottery', 'lost my wallet', 'had more free time',
                                  'could start over', 'had a time machine',
                                  'were stuck in an elevator'];
    DF.WGEN.POOLS.lifeChoice = ['change careers', 'move to another city', 'go back to school',
                                'start my own business', 'learn another language'];
  }

  const WORDS = [
    { en: 'affect', pt: 'afetar / influenciar',
      def: 'to influence or cause something to happen',
      ex: 'Sleep affects your decisions far more than most people are willing to admit.' },
    { en: 'change your mind', pt: 'mudar de ideia',
      def: 'to change your decision or opinion about something',
      ex: 'She changed her mind three times before lunch, which is normal under pressure.' },
    { en: 'concentrate', pt: 'concentrar-se',
      def: 'to pay close attention to something',
      ex: 'Nobody can concentrate on a hard choice at eleven at night.' },
    { en: 'effect', pt: 'efeito',
      def: 'the result or change that one thing causes in a second thing',
      ex: 'The effect of one bad night of sleep lasts through the whole next day.' },
    { en: 'figure out', pt: 'descobrir / sacar',
      def: 'to discover an answer or a solution to a problem',
      ex: 'It took him a week to figure out what was actually bothering him.' },
    { en: 'hesitate', pt: 'hesitar',
      def: 'to not speak or act for a short time because you are uncertain',
      ex: 'He hesitated, and by the time he answered, the offer was gone.' },
    { en: 'process', pt: 'processar / analisar',
      def: 'to review and consider information in order to understand it',
      ex: 'Give yourself a night to process it before you reply.' },
    { en: 'rational', pt: 'racional',
      def: 'logical, reasonable',
      ex: 'A rational choice made while exhausted is usually neither.' },
    { en: 'react', pt: 'reagir',
      def: 'to respond or act in a certain way because of something that has happened',
      ex: 'She reacted immediately, and regretted it within an hour.' },
    { en: 'regret', pt: 'arrepender-se',
      def: 'to feel very sorry about the outcome of something',
      ex: 'Most people regret the decisions they rushed, not the ones they refused.' }
  ];

  const EXTRA_WORDS = [
    { en: 'appropriate ·+', pt: 'apropriado / adequado',
      def: 'the right or correct thing to do',
      ex: 'It was an appropriate decision, even if it was not a popular one.' },
    { en: 'eager ·+', pt: 'ansioso (por algo bom)',
      def: 'to really want to do something',
      ex: 'He was eager to accept before he had read a single clause of the contract.' },
    { en: 'intuition ·+', pt: 'intuição',
      def: 'a feeling that something is true even when you have no proof of it',
      ex: 'Intuition is fast and often right — but it is terrible at explaining itself.' },
    { en: 'keep in mind ·+', pt: 'ter em mente',
      def: 'to remember something important',
      ex: 'Keep in mind that you can change your mind later; most people forget that.' },
    { en: 'make up your mind ·+', pt: 'decidir-se',
      def: 'to decide to do something',
      ex: 'Make up your mind by Friday, or the decision will be made for you.' },
    { en: 'mature ·+', pt: 'amadurecer',
      def: 'to develop',
      ex: 'The part of the brain that weighs consequences matures last.' },
    { en: 'peer ·+', pt: 'colega / par (mesma idade)',
      def: 'someone who is your own age',
      ex: 'Peer pressure does not disappear at eighteen; it just gets quieter.' },
    { en: 'speak your mind ·+', pt: 'falar o que pensa',
      def: 'to tell others honestly how you feel',
      ex: 'If you speak your mind early, you avoid a much harder conversation later.' }
  ];

  DF.PLAN.wc1[10] = {
    unit: 10,
    title: 'Decisions, Decisions',
    subtitle: 'Seu décimo mês',
    icon: '🧭',

    mindmap: {
      center: 'Decisions, Decisions',
      sub: 'Projetar cenários, mapear fatores, e justificar a escolha',
      branches: [
        {
          icon: '🧠', name: 'Decision vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha clássica:</b> ' +
                '<b>affect</b> é VERBO (afetar), <b>effect</b> é SUBSTANTIVO (efeito). ' +
                '"Sleep AFFECTS your choices" × "the EFFECT of sleep". Errar isso é o erro de ' +
                'escrita mais comum em inglês, inclusive entre nativos.'
        },
        {
          icon: '✅', name: 'Real conditional — possible futures',
          leaves: [
            { en: 'If I do that, I will have enough money.', pt: 'if + present → will + verbo' },
            { en: "If the teacher is sick tomorrow, we won't have class.", pt: 'previsão real' },
            { en: "We'll go to the beach if the weather is nice.", pt: 'if pode vir no meio' }
          ],
          note: 'Chamado <b>first conditional</b>. Usa-se pra <b>prever</b> algo que pode ' +
                'realmente acontecer. <b>Armadilha do brasileiro:</b> nunca use "will" depois ' +
                'do <b>if</b> — é "if it <b>rains</b>", não "if it will rain".'
        },
        {
          icon: '💭', name: 'Unreal conditional — imaginary present',
          leaves: [
            { en: 'If I had a scholarship, I would have enough money.', pt: 'if + past → would + verbo' },
            { en: "I'm broke, but if I had money, I would start a business.", pt: 'situação imaginária' },
            { en: 'If I were the teacher, I would change the exam date.', pt: 'were para TODOS os sujeitos' }
          ],
          note: 'Chamado <b>second conditional</b>. O passado aqui <b>não é passado</b> — é o ' +
                'sinal de que a situação é imaginária. <b>Regra formal:</b> use <b>were</b> ' +
                'para todos os sujeitos: "If I <b>were</b> you", não "if I was you".'
        },
        {
          icon: '🔗', name: 'Showing cause and effect',
          leaves: [
            { en: 'Living in the dorm would cause me to eat out.', pt: 'cause someone to' },
            { en: 'As a result, I would spend a lot of money.', pt: 'as a result' },
            { en: 'Because of this, I would be happier.', pt: 'because of this' },
            { en: 'Consequently, I would save on food.', pt: 'consequently (formal)' }
          ],
          note: 'São os conectores que transformam uma lista de opiniões numa <b>cadeia</b>. ' +
                'A régua da unidade: toda razão que você dá precisa levar a um efeito nomeado.'
        },
        {
          icon: '🎚️', name: 'Factors that influence a decision',
          leaves: [
            { en: 'biology — sleep, hunger, decision fatigue', pt: 'o corpo decide junto' },
            { en: 'peer pressure — what the group thinks', pt: 'o grupo decide junto' },
            { en: 'societal expectations — what is "supposed" to happen', pt: 'a norma decide junto' },
            { en: 'intuition — the fast feeling with no proof', pt: 'o instinto decide junto' }
          ],
          note: '<b>Decision fatigue:</b> quanto mais decisões você já tomou no dia, pior ' +
                'você decide. Por isso "durmo e te respondo amanhã" não é enrolação — é ' +
                'método.'
        },
        {
          icon: '🎵', name: 'Intonation in relative clauses',
          leaves: [
            { en: 'My sister, / who lives in Rio, / is coming to visit.', pt: 'extra info: 3 blocos, pausa nas vírgulas' },
            { en: 'My sister who lives in Rio / is coming to visit.', pt: 'define QUAL irmã: sem pausa' }
          ],
          note: 'A vírgula não é só escrita — ela <b>soa</b>. Informação extra vira um bloco ' +
                'de entonação separado, com pausa antes e depois. Informação que define fica ' +
                'colada. É a unidade 6 (adjective clauses) voltando pelo ouvido.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🧭',
        title: 'If This, Then That',
        goal: 'Use the real and unreal conditional to predict and to imagine.',
        comp: 'Você projeta cenários usando o condicional real (o que pode acontecer) e o ' +
              'irreal (o que aconteceria se), sem misturar os dois.',
        live: [
          'The unit opener: the hedge maze photo and warm-up questions',
          'Vocabulary: what you know about the brain and decision making',
          'Grammar: The Conditional — real (possible) vs. unreal (imaginary)',
          'Choosing between will/would and is/were in the exercises',
          'Pair work: completing conditional sentences with your own ideas'
        ],
        bridge: 'Na aula você viu a tabela das duas colunas e completou as frases do livro. ' +
                'Aqui a escolha entre real e irreal vira decisão sob pressão, em casos da The ' +
                'Fork, e você ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Connections — as três conversas e o role-play do ' +
                  'irmão gêmeo.',
        ican: [
          'I can use the first conditional to predict something that might really happen.',
          'I can use the second conditional to talk about an imaginary situation.',
          'I can avoid "will" after if, and use "were" for all subjects.',
          'I can tell affect from effect.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u10w1:cards:core',
                title: '📇 Ten words about deciding',
                sub: 'Exemplos da The Fork — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u10w1:cards:extra',
                title: '➕ Eight the Word Bank does not give you',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'affecteffect', icon: '⚠️', name: 'affect × effect', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'wc1u10w1:read:ae',
                title: '⚠️ The one that catches everyone',
                textTitle: 'affect vs. effect',
                readAloud: false,
                text:
                  'AFFECT is a VERB. It means "to influence".\n' +
                  'Lack of sleep AFFECTS your ability to concentrate.\n' +
                  'The news AFFECTED her more than she expected.\n\n' +
                  'EFFECT is a NOUN. It means "the result".\n' +
                  'The EFFECT of the decision was immediate.\n' +
                  'One bad night has a real EFFECT on your judgement.\n\n' +
                  'THE TEST: can you put "the" in front of it? Then it is EFFECT.\n' +
                  'Can you put a subject in front and make it a verb? Then it is AFFECT.\n\n' +
                  'A ARMADILHA: em portugues "afetar" e "efeito" ja sao verbo e substantivo, ' +
                  'entao a logica e a mesma — o problema e so que em ingles as duas palavras ' +
                  'soam quase identicas. Escreva pensando na funcao, nao no som.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u10w1:ae:1',
                title: '⚠️ affect or effect?',
                main: 'A lack of sleep ___ your ability to concentrate.',
                options: DF.shuffle([
                  { label: 'affects', correct: true }, { label: 'effects' },
                  { label: 'effect' }, { label: 'the effect' }
                ]),
                expl: 'É o verbo → affects.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u10w1:ae:2',
                title: '⚠️ affect or effect?',
                main: 'The ___ of one bad night lasts all the next day.',
                options: DF.shuffle([
                  { label: 'effect', correct: true }, { label: 'affect' },
                  { label: 'affects' }, { label: 'effects on' }
                ]),
                expl: 'Depois de "The" vem substantivo → effect.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u10w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['hesitate', 'to pause because you are uncertain'],
                  ['rational', 'logical, reasonable'],
                  ['intuition', 'a feeling with no proof'],
                  ['peer', 'someone your own age'],
                  ['make up your mind', 'to decide']
                ] }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'The conditional at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u10w1:read:glance',
                title: '🔍 Two columns, one decision',
                textTitle: 'Real vs. unreal',
                readAloud: false,
                text:
                  'REAL (possible future) — it might actually happen\n' +
                  'IF clause: simple present     RESULT clause: will / won\'t\n' +
                  'If I get the job, I will move to Recife.\n' +
                  'If the teacher is sick tomorrow, we won\'t have class.\n\n' +
                  'UNREAL (imaginary present) — it is not true right now\n' +
                  'IF clause: simple past        RESULT clause: would / wouldn\'t\n' +
                  'If I had a scholarship, I would have enough money. (I don\'t have one)\n' +
                  'If I were the teacher, I would change the date. (I am not the teacher)\n\n' +
                  'THE TWO RULES THAT DECIDE EVERYTHING\n' +
                  '1. NEVER put "will" after if. It is "if it RAINS", not "if it will rain".\n' +
                  '2. In the unreal, use WERE for every subject: If I WERE you. If he WERE ' +
                  'the teacher. ("was" is common in speech, but "were" is the correct form.)\n\n' +
                  'A ARMADILHA DO BRASILEIRO: o passado no if do condicional irreal NAO e ' +
                  'passado — e o marcador de "isso e imaginario". "If I had money" nao fala do ' +
                  'passado, fala do presente que voce nao tem. Traduzir ao pe da letra confunde.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w1:cd:1',
                title: '🎯 Choose the correct form:',
                main: 'If the teacher is sick tomorrow, we ___ have class.',
                options: DF.shuffle([
                  { label: "won't", correct: true }, { label: "wouldn't" },
                  { label: "didn't" }, { label: "hadn't" }
                ]),
                expl: 'Situação real e possível → won\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w1:cd:2',
                title: '🎯 Choose the correct form:',
                main: "I'm broke, but if I ___ a lot of money, I would start my own business.",
                options: DF.shuffle([
                  { label: 'had', correct: true }, { label: 'have' },
                  { label: 'will have' }, { label: 'would have' }
                ]),
                expl: '"I\'m broke" = não tenho → irreal → if + past.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w1:cd:3',
                title: '🎯 Choose the correct form:',
                main: 'I ___ travel to the year 2100 if I had a time machine.',
                options: DF.shuffle([
                  { label: 'would', correct: true }, { label: 'will' },
                  { label: 'had', correct: false }, { label: 'am going to' }
                ]),
                expl: 'Máquina do tempo = imaginário → would.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w1:cd:4',
                title: '🎯 Which sentence is WRONG?',
                main: 'Only one breaks a rule of this unit.',
                options: DF.shuffle([
                  { label: 'If it will rain tomorrow, we will stay home.', correct: true },
                  { label: 'If it rains tomorrow, we will stay home.' },
                  { label: 'If it rained, we would stay home.' },
                  { label: 'We will stay home if it rains.' }
                ]),
                expl: 'Nunca "will" depois do if.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w1:cd:5',
                title: '🎯 Which is the correct formal form?',
                main: 'If I ___ you, I would wait until Monday.',
                options: DF.shuffle([
                  { label: 'were', correct: true }, { label: 'was' },
                  { label: 'am' }, { label: 'would be' }
                ]),
                expl: 'No condicional irreal, "were" vale pra todos os sujeitos. "was" aparece ' +
                      'muito na fala, mas "were" é a forma correta.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w1:cd:6',
                title: '🎯 Real or unreal?',
                main: 'If I get the promotion, I will move closer to the office.',
                options: DF.shuffle([
                  { label: 'Real — it might actually happen', correct: true },
                  { label: 'Unreal — it is imaginary' }
                ]),
                expl: 'present + will = real, possível.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u10w1:cd:7',
                title: '🧩 Build the unreal conditional:',
                answer: 'If I had more free time I would learn another language',
                expl: 'if + past → would + verbo.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u10w1:tf:1',
                title: '🔀 Conditional transformation',
                rounds: [
                  { base: 'If I get the job, I will move.', cmd: 'Question',
                    answers: ['Will you move if you get the job?',
                              'If you get the job, will you move?'] },
                  { base: 'If I had money, I would travel.', cmd: 'Negative',
                    answers: ["If I had money, I wouldn't travel.",
                              'If I had money, I would not travel.'] },
                  { base: 'She would help if she had time.', cmd: 'Question',
                    answers: ['Would she help if she had time?'] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u10w1:drl:hypo', unit: 10, waSec: 'Drill · condicional',
                title: '🔁 Drill 1 — the situation changes', focus: 'condicional irreal',
                frame: 'If I ___, I would call my brother first.',
                ptHint: 'Se eu ___, eu ligaria pro meu irmão primeiro.',
                slots: ['won the lottery', 'lost my wallet', 'had more free time',
                        'could start over', 'were stuck in an elevator'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u10w1:drl:choice', unit: 10, waSec: 'Drill · condicional',
                title: '🔁 Drill 2 — the choice changes', focus: 'condicional irreal',
                frame: 'If I had the money, I would ___.',
                ptHint: 'Se eu tivesse o dinheiro, eu ___.',
                slots: ['change careers', 'move to another city', 'go back to school',
                        'start my own business', 'learn another language'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u10w1:drl:factor', unit: 10, waSec: 'Drill · fatores',
                title: '🔁 Drill 3 — the factor changes', focus: 'fatores de decisão',
                frame: 'The main factor would be ___.',
                ptHint: 'O fator principal seria ___.',
                slots: ['what my family would say', 'how much it costs',
                        'how tired I already am', 'how long it would take',
                        'whether I could undo it'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u10w1:bc:1', unit: 10, waSec: 'Backchain',
                title: '🧱 The real conditional, spoken',
                ptHint: 'Se eu conseguir a promoção, vou me mudar pra mais perto do escritório.',
                chain: ['to the office', 'move closer to the office',
                        'I will move closer to the office',
                        'If I get the promotion, I will move closer to the office.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u10w1:bc:2', unit: 10, waSec: 'Backchain',
                title: '🧱 The unreal conditional, spoken',
                ptHint: 'Se eu tivesse mais tempo livre, eu aprenderia outro idioma.',
                chain: ['another language', 'I would learn another language',
                        'more free time, I would learn another language',
                        'If I had more free time, I would learn another language.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u10w1:dlg:1',
                title: '🎧 A first session at The Fork',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'So if you take the offer, what changes first?' },
                  { who: 'Elias', en: 'If I take it, I will have to move by March.' },
                  { who: 'Nadia', en: 'And if you had six more months to decide?' },
                  { who: 'Elias', en: 'Honestly? If I had six months, I would probably say no. ' +
                                      'The rush is doing half the persuading.' }
                ],
                question: 'What does Elias realize?',
                options: DF.shuffle([
                  { label: 'The time pressure is part of why he is tempted', correct: true },
                  { label: 'He definitely wants to take the offer' },
                  { label: 'He has already moved' },
                  { label: 'Six months would change nothing' }
                ]),
                expl: '"The rush is doing half the persuading" — e repare: primeiro ele usa o ' +
                      'real (if I take it), depois o irreal (if I had six months).'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u10w1:dlg:2',
                title: '🎧 A correction at the office',
                sub: 'Repare o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'If it will rain tomorrow, we will move the session.' },
                  { who: 'Tomás', en: 'If it rains — no "will" after if.' },
                  { who: 'Priya', en: 'Right. If it rains tomorrow, we will move it.' },
                  { who: 'Tomás', en: 'Exactly. The "will" lives in the other half only.' }
                ],
                question: 'Where does "will" belong?',
                options: DF.shuffle([
                  { label: 'Only in the result clause, never after if', correct: true },
                  { label: 'In both halves of the sentence' },
                  { label: 'Only after if' },
                  { label: 'Nowhere in a conditional' }
                ]),
                expl: 'if + present → will + verbo. O "will" fica só no resultado.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w1:bld:1', unit: 10, waSec: 'Sua vez',
                title: '🗣️ A real prediction about your year',
                prompt: 'Make one real prediction about your next few months, using the first ' +
                        'conditional.',
                example: 'If I finish this course, I will apply for the position in March.',
                mustUse: ['will'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w1:bld:2', unit: 10, waSec: 'Sua vez',
                title: '🗣️ An imaginary version of your life',
                prompt: 'Say what you would do if something imaginary were true. Use "if I ' +
                        'were" or "if I had".',
                example: 'If I had another life, I would be a mechanic — I like fixing things ' +
                         'far more than managing people.',
                mustUse: ['would'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w1:bld:3', unit: 10, waSec: 'Sua vez',
                title: '🗣️ Advice with "If I were you"',
                prompt: 'Think of a real problem someone you know has. Give advice using "If I ' +
                        'were you".',
                example: 'If I were you, I would wait until after the holidays to bring it up.',
                mustUse: ['if i were you'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w1+:b1', unit: 10, waSec: 'Praticar mais',
                title: '🔥 Both conditionals in sixty seconds',
                prompt: 'Talk for one minute about a real decision you face, using the real ' +
                        'conditional for what might happen and the unreal for what you wish.',
                example: '(1 minuto)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w1+:b2', unit: 10, waSec: 'Praticar mais',
                title: '🔥 Fix it out loud',
                prompt: 'This is wrong: "If I will have time, I would go." Correct it TWO ways ' +
                        '— once as real, once as unreal.',
                example: 'Real: If I have time, I will go. Unreal: If I had time, I would go.',
                mustUse: ['if i had'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de condicional', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'If I ___, I would call my brother first.', pool: 'hypothetical',
                  focus: 'condicional irreal', ptHint: 'Se eu ___, eu ligaria…', n: 5 },
                { frame: 'If I had the money, I would ___.', pool: 'lifeChoice',
                  focus: 'condicional irreal', ptHint: 'Se eu tivesse dinheiro, eu ___.', n: 5 }
              ],
              backchain: [
                { text: 'If I had more time, I would {lifeChoice}.',
                  ptHint: 'Se eu tivesse mais tempo, eu…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'Reading Between the Tone',
        goal: 'Hear sarcasm and hesitation, and persuade someone to change course.',
        comp: 'Você reconhece quando alguém diz "great" e quer dizer o contrário, e usa o ' +
              'condicional pra convencer alguém a mudar de rumo.',
        live: [
          'Listening: three conversations — a cooking class, a refund, a study plan',
          'Paying attention to intonation to hear what the speaker really means',
          'Connections: the twin sibling losing the scholarship, role-play',
          'Pronunciation: intonation patterns in relative clauses',
          'Practice: separating sentences into intonation chunks'
        ],
        bridge: 'Na aula você ouviu as três conversas e fez o role-play do irmão gêmeo. Aqui ' +
                'o cliente é da The Fork, e a entonação vira exercício de decisão: ele quis ' +
                'dizer isso mesmo, ou o oposto?',
        nextLive: 'Semana 3 · Reading + Speaking — as abelhas do Seeley e a pressão dos pares.',
        ican: [
          'I can hear sarcasm in someone\'s intonation.',
          'I can hear hesitation and understand it as a soft "no".',
          'I can use the conditional to persuade someone to change.',
          'I can chunk a sentence with a relative clause correctly.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'sarcasm', icon: '🎭', name: 'When "great" means terrible', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u10w2:read:sarc',
                title: '🎭 The words say yes, the voice says no',
                textTitle: 'Sarcasm and hesitation',
                readAloud: false,
                text:
                  'SARCASM — the words are positive, the intonation is flat or falling hard.\n' +
                  '"Oh, that\'s great." said flatly = that is not great at all.\n' +
                  '"I can\'t wait." said with a sigh = I am dreading it.\n\n' +
                  'HESITATION — pauses and fillers signal a soft refusal.\n' +
                  '"Uh, yeah... maybe." = probably no.\n' +
                  '"Well... I suppose so." = I do not want to.\n\n' +
                  'THE RULE OF THUMB: if someone answers an invitation with "maybe" and a ' +
                  'pause, a native speaker reads that as no. Waiting for an explicit "no" is ' +
                  'how you end up standing outside a library alone.\n\n' +
                  'A ARMADILHA CULTURAL: em portugues brasileiro, "talvez" e "vou ver" tambem ' +
                  'funcionam como nao educado — entao a logica ja e familiar. O que muda e o ' +
                  'SOM: em ingles a recusa suave vem quase toda na entonacao, com menos ' +
                  'palavras de amortecimento.',
                nextLabel: 'Got it ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u10w2:dlg:1',
                title: '👂 Two clients, one refund',
                sub: 'Sem texto na tela. Ouça o TOM, não só as palavras.',
                hideText: true,
                lines: [
                  { who: 'Agent', en: 'Without the receipt, it will take four weeks to process ' +
                                      'your request.' },
                  { who: 'Client', en: 'Oh, that\'s great.' },
                  { who: 'Agent', en: 'I\'m sorry, sir, but that\'s our policy.' },
                  { who: 'Client', en: 'Yeah. Okay.' }
                ],
                question: 'What does the client actually mean by "Oh, that\'s great"?',
                options: DF.shuffle([
                  { label: 'He is annoyed — it is sarcasm', correct: true },
                  { label: 'He is genuinely pleased' },
                  { label: 'He did not understand' },
                  { label: 'He is asking a question' }
                ]),
                expl: 'Quatro semanas de espera não é "great". A entonação plana entrega a ' +
                      'ironia.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u10w2:dlg:2',
                title: '👂 A soft no',
                sub: 'Sem texto na tela. Ele vai ou não vai?',
                hideText: true,
                lines: [
                  { who: 'Suzanne', en: 'I\'ve got class until four, so how about 4:30 in the ' +
                                        'library?' },
                  { who: 'Steven', en: 'Uh, yeah... maybe.' },
                  { who: 'Suzanne', en: 'But I thought we were going to study together today.' },
                  { who: 'Steven', en: 'Well, it\'s just... um... my friend Sam texted me ' +
                                       'earlier.' }
                ],
                question: 'Is Steven going to meet Suzanne?',
                options: DF.shuffle([
                  { label: 'Probably not — "maybe" plus hesitation is a soft no', correct: true },
                  { label: 'Yes, definitely at 4:30' },
                  { label: 'Yes, but at a different time' },
                  { label: 'He said no explicitly' }
                ]),
                expl: '"Uh, yeah... maybe" + a desculpa que vem depois. Ninguém disse "não", ' +
                      'e todo mundo entendeu.'
              },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u10w2:sc:1',
                title: '🎭 Someone says "maybe" with a long pause. You should:',
                main: '',
                options: DF.shuffle([
                  { label: 'Assume it is probably a no and offer an easy way out', correct: true },
                  { label: 'Assume it is a yes and make the plans' },
                  { label: 'Ask them to confirm three more times' },
                  { label: 'Get offended' }
                ]),
                expl: 'Dar a saída ("no worries if you can\'t") é o que um falante nativo faz — ' +
                      'e poupa os dois.' }
            ]
          },

          {
            id: 'persuade', icon: '🤝', name: 'Persuading with the conditional', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u10w2:read:pers',
                title: '🤝 The situation',
                textTitle: 'The scholarship',
                text:
                  'You and your twin attend an expensive school on a scholarship. You each have ' +
                  'to keep your grades up to stay. Your twin used to be a strong student, but ' +
                  'has started spending time with a group that does not study, and the grades ' +
                  'are slipping. You are worried the scholarship will be lost — and that your ' +
                  'parents will blame you for not helping.\n\n' +
                  'Your twin\'s side: it is true, the late nights are hurting the grades. But ' +
                  'these are the first friends who don\'t compare your twin to you — the one ' +
                  'who is good at everything. A tutor would help, but asking for one feels like ' +
                  'admitting failure.\n\n' +
                  'Persuade your twin using the conditional: predict what will happen, and ' +
                  'imagine what could be different.',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w2:ps:1', unit: 10, waSec: 'Persuade',
                title: '🤝 Predict the consequence',
                prompt: 'Make a real prediction about what happens if nothing changes.',
                example: 'If your grades drop one more term, you will lose the scholarship — ' +
                         'and that decision won\'t be ours to make.',
                mustUse: ['will'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w2:ps:2', unit: 10, waSec: 'Persuade',
                title: '🤝 Offer an imagined alternative',
                prompt: 'Suggest a solution using the unreal conditional.',
                example: 'If you had a tutor, you could still go out — you just wouldn\'t be ' +
                         'starting from zero every exam.',
                mustUse: ['would'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w2:ps:3', unit: 10, waSec: 'Persuade',
                title: '🤝 Now answer as the twin',
                prompt: 'Play the twin. Respond to those two arguments honestly — you are not ' +
                        'simply going to agree.',
                example: 'Yeah, but if I stopped seeing them, I\'d have nobody who talks to me ' +
                         'like a person instead of your brother.',
                mustUse: ["I'd"] }
            ]
          },

          {
            id: 'chunks', icon: '🎵', name: 'Intonation chunks', tag: 'pronúncia', sp: true,
            items: [
              { ui: 'choice', cat: 'pro', srsId: 'wc1u10w2:ch:1',
                title: '🎵 How many intonation chunks?',
                main: 'My sister, who lives in Rio, is coming to visit.',
                options: DF.shuffle([
                  { label: 'Three — the commas create pauses', correct: true },
                  { label: 'One — it is read straight through' },
                  { label: 'Two' }, { label: 'Four' }
                ]),
                expl: 'Informação extra vira bloco separado: "My sister / who lives in Rio / ' +
                      'is coming to visit."' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u10w2:ch:2',
                title: '🎵 How many chunks here?',
                main: 'My sister who lives in Rio is coming to visit.',
                options: DF.shuffle([
                  { label: 'Two — no pause inside the defining clause', correct: true },
                  { label: 'Three' }, { label: 'One' }, { label: 'Four' }
                ]),
                expl: 'Sem vírgula, a oração define QUAL irmã — fica colada: "My sister who ' +
                      'lives in Rio / is coming to visit."' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u10w2:rep:1', unit: 10, waSec: 'Intonation',
                title: '🎤 Extra information — pause at the commas:',
                target: 'My sister, who lives in Rio, is coming to visit.',
                ptHint: 'Minha irmã, que mora no Rio, vem visitar.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u10w2:rep:2', unit: 10, waSec: 'Intonation',
                title: '🎤 Defining — no pause:',
                target: 'The shoes that I bought yesterday are the wrong color.',
                ptHint: 'Os sapatos que comprei ontem são da cor errada.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u10w2:rep:3', unit: 10, waSec: 'Intonation',
                title: '🎤 Say both and hear the difference:',
                target: 'Cats that love water are very rare. Cats, who don\'t like water, are ' +
                        'no fun to bathe.',
                ptHint: 'Gatos que gostam de água são raros. Gatos, que não gostam de água, ' +
                        'são difíceis de banhar.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w2+:b1', unit: 10, waSec: 'Praticar mais',
                title: '🔥 Say the same sentence two ways',
                prompt: 'Say "Oh, that\'s great" twice: once genuinely, once sarcastically. ' +
                        'Make the difference audible.',
                example: '(15 segundos)' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de persuasão', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'If I had the money, I would ___.', pool: 'lifeChoice',
                  focus: 'condicional irreal', ptHint: 'Se eu tivesse dinheiro, eu ___.', n: 5 }
              ],
              backchain: [
                { text: 'If I {hypothetical}, I would call my brother first.',
                  ptHint: 'Se eu…, eu ligaria pro meu irmão primeiro.' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'How Groups Decide',
        goal: 'Read how a group decides well, and name the factors behind your own choices.',
        comp: 'Você lê sobre como um grupo toma boas decisões, e identifica quais fatores ' +
              'realmente influenciam as suas — inclusive os que você não gosta de admitir.',
        live: [
          'Reading: Thinking Like Bees — how a swarm chooses a new home',
          'Answering how bees decide and how people decide',
          'Speaking: peer pressure and three real situations',
          'The Peer Pressure Ratings: approval addict / in-and-out / independent',
          'Video: the moral dilemma and the brain scanner'
        ],
        bridge: 'Na aula você leu sobre as abelhas e se avaliou na régua de pressão dos pares. ' +
                'Aqui o texto é da The Fork, e a pergunta fica desconfortável de propósito: ' +
                'qual fator você não gosta de admitir?',
        nextLive: 'Semana 4 · Writing + Expanding — o parágrafo de causa e efeito e o jogo do ' +
                  '"e se".',
        ican: [
          'I can explain how a group can make a better decision than an individual.',
          'I can name the factors that influenced a decision I made.',
          'I can discuss peer pressure honestly.',
          'I can compare intuition and reason as ways of deciding.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: The Room Where Nobody Spoke First', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u10w3:read:text',
                title: '📖 A new text, the same skill',
                textTitle: 'The Room Where Nobody Spoke First',
                text:
                  'The Fork runs group sessions with one unusual rule: the most senior person ' +
                  'in the room speaks last. Not first, not somewhere in the middle — last.\n\n' +
                  'The reason is simple and well documented. Once a senior person states a ' +
                  'preference, most of the room quietly stops generating alternatives. People ' +
                  'do not do this consciously. They simply find that the stated option now ' +
                  'seems more reasonable than it did a minute earlier.\n\n' +
                  'In sessions run this way, groups produce roughly twice as many distinct ' +
                  'options before choosing. That number comes from the firm\'s own records, not ' +
                  'from published research, so it should be treated as an internal observation ' +
                  'rather than a finding.\n\n' +
                  'The second rule is that everyone writes their preference down before any ' +
                  'discussion begins. The written answers are read aloud without names. This ' +
                  'removes the effect of who is confident and who is quiet — which, in most ' +
                  'rooms, has nothing to do with who is right.\n\n' +
                  'None of this makes a group smarter than its members. What it does is stop ' +
                  'the group from becoming dumber than its members, which is the more common ' +
                  'failure. A group of diverse people who think independently and then combine ' +
                  'their answers tends to decide well. A group that watches one confident ' +
                  'person and agrees does not.',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u10w3:q:1',
                title: '📖 Why does the senior person speak last?',
                main: '',
                options: DF.shuffle([
                  { label: 'People stop generating alternatives once a preference is stated',
                    correct: true },
                  { label: 'Senior people usually have worse ideas' },
                  { label: 'It saves time' },
                  { label: 'It is a legal requirement' }
                ]),
                expl: '"most of the room quietly stops generating alternatives."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u10w3:q:2',
                title: '📖 How reliable is the "twice as many options" figure?',
                main: 'Read the third paragraph carefully.',
                options: DF.shuffle([
                  { label: 'It is an internal observation, not published research',
                    correct: true },
                  { label: 'It comes from a peer-reviewed study' },
                  { label: 'It is a government statistic' },
                  { label: 'The text does not say where it comes from' }
                ]),
                expl: '"from the firm\'s own records, not from published research" — é a ' +
                      'competência de detectar incerteza, da unidade 9, voltando.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u10w3:q:3',
                title: '📖 What does the process actually achieve?',
                main: '',
                options: DF.shuffle([
                  { label: 'It stops the group being dumber than its members', correct: true },
                  { label: 'It makes the group smarter than any member' },
                  { label: 'It guarantees the correct answer' },
                  { label: 'It removes the need for a decision' }
                ]),
                expl: '"None of this makes a group smarter than its members. What it does is ' +
                      'stop the group from becoming dumber."' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w3:q:4', unit: 10, waSec: 'Reading',
                title: '🗣️ Apply it',
                prompt: 'Would the "senior speaks last" rule work where you study or work? ' +
                        'Answer with the conditional.',
                example: 'If we tried that in my team, the meetings would be longer, but I ' +
                         'think we would stop agreeing with the loudest person by default.',
                mustUse: ['would'] }
            ]
          },

          {
            id: 'peer', icon: '👥', name: 'Peer pressure, honestly', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u10w3:read:peer',
                title: '👥 Three situations, no easy answer',
                textTitle: 'Where the pressure actually is',
                text:
                  'ONE. You have a close friend your other friends don\'t like. You are having ' +
                  'a party. If you invite that friend, the others will be annoyed. If you ' +
                  'don\'t, and your friend finds out, they will be hurt. What would you do?\n\n' +
                  'TWO. You are on a group project. Everyone has agreed on a topic. You had a ' +
                  'better idea. What would you do if you were new to the group — and what if ' +
                  'the idea came from the most popular person there?\n\n' +
                  'THREE. Your cousin spends money the minute he gets it. He lost his job and ' +
                  'has asked you for a loan. You have the money but don\'t want to lend it. ' +
                  'What would you do if relatives started pressuring you to change your mind?\n\n' +
                  'THE RATINGS\n' +
                  'Approval addict — your decisions are strongly influenced by the group.\n' +
                  'In-and-out crowd — sometimes influenced, sometimes not.\n' +
                  'Independent forever — you speak your mind regardless of consequences.',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w3:pr:1', unit: 10, waSec: 'Peer pressure',
                title: '👥 Situation one — the party',
                prompt: 'Say what you would do, using the conditional, and give the real reason.',
                example: 'I would invite my friend, because if I didn\'t, I would be choosing ' +
                         'comfort over loyalty and I would know it.',
                mustUse: ['would'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w3:pr:2', unit: 10, waSec: 'Peer pressure',
                title: '👥 Situation two — the better idea',
                prompt: 'Would your answer change depending on WHO suggested the original idea? ' +
                        'Be honest.',
                example: 'Honestly, yes. If the idea came from someone quiet, I would speak up. ' +
                         'If it came from the most popular person, I would probably stay quiet ' +
                         '— which I am not proud of.',
                mustUse: ['if'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w3:pr:3', unit: 10, waSec: 'Peer pressure',
                title: '👥 Rate yourself, and justify it',
                prompt: 'Which of the three ratings describes you? Give one real example that ' +
                        'proves it.',
                example: 'I\'m the in-and-out crowd. I speak my mind at work easily, but with ' +
                         'family I go quiet — and that is the room where it actually matters.',
                mustUse: ['I'] }
            ]
          },

          {
            id: 'video', icon: '🎬', name: 'Intuition versus reason', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u10w3:dlg:1',
                title: '🎬 The dilemma in the scanner',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Narrator', en: 'The subject is shown a scenario. He is walking on a ' +
                                         'country road when he finds an injured woman who needs ' +
                                         'to reach a hospital.' },
                  { who: 'Narrator', en: 'If he helps her, her blood will ruin his expensive ' +
                                         'suit. Is it appropriate to leave her?' },
                  { who: 'Narrator', en: 'Almost nobody says yes. The scan shows increased ' +
                                         'activity in the parts of the brain associated with ' +
                                         'emotion.' },
                  { who: 'Narrator', en: 'But researchers found that if the woman were far away ' +
                                         '— dying in another country — the same person might ' +
                                         'feel fine about doing nothing.' }
                ],
                question: 'What made the difference in people\'s reaction?',
                options: DF.shuffle([
                  { label: 'Whether the person in need was physically present', correct: true },
                  { label: 'The cost of the suit' },
                  { label: 'How educated the subject was' },
                  { label: 'The time of day' }
                ]),
                expl: '"if the woman were far away... the same person might feel fine about ' +
                      'doing nothing." Repare no condicional irreal narrando o experimento.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w3:vd:1', unit: 10, waSec: 'Video',
                title: '🗣️ Intuition or reason?',
                prompt: 'When do you trust your intuition over reasoning? Give one example.',
                example: 'I trust intuition about people and reason about money. If I feel ' +
                         'something is off in a conversation, I am usually right — but if I ' +
                         'feel a purchase is a good idea, I am usually wrong.',
                mustUse: ['if'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w3+:b1', unit: 10, waSec: 'Praticar mais',
                title: '🔥 The factor you don\'t like admitting',
                prompt: 'Name one factor that influences your decisions more than you would ' +
                        'like it to. Explain with the conditional.',
                example: '(45 segundos)',
                expl: 'É desconfortável de propósito — e é onde a aula ao vivo rende mais.' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de fatores', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The main factor would be ___.', pool: 'decisionFactor',
                  focus: 'fatores', ptHint: 'O fator principal seria ___.', n: 5 }
              ],
              backchain: [
                { text: 'The main factor would be {decisionFactor}.',
                  ptHint: 'O fator principal seria…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'The What-If Game',
        goal: 'Write a decision with its causes and effects, and play the "what if" game.',
        comp: 'Você escreve um parágrafo justificando uma decisão com causa e efeito ' +
              'encadeados, e responde perguntas hipotéticas sem travar.',
        live: [
          'Writing: Showing Cause and Effect — which school would you attend?',
          'The Writing Strategy: as a result, because of this, consequently',
          'Writing about a talent you would like to have',
          'Expanding Your Fluency: the "what if" guessing game',
          'Check What You Know'
        ],
        bridge: 'Na aula você escreveu a resposta sobre as duas faculdades e jogou o jogo do ' +
                '"e se". Aqui a decisão é sua de verdade, e os conectores de causa e efeito ' +
                'viram exercício de decisão frase a frase.',
        nextLive: 'Unidade 11 · Rain or Shine — phrasal verbs e o tempo que muda tudo.',
        ican: [
          'I can write a decision paragraph with two reasons and their effects.',
          'I can use as a result, because of this, and consequently correctly.',
          'I can answer a hypothetical question fluently, without preparing.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'causeeffect', icon: '🔗', name: 'Showing cause and effect', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u10w4:read:ce',
                title: '🔗 A reason is not enough — name the effect',
                textTitle: 'Showing cause and effect',
                readAloud: false,
                text:
                  'A WEAK REASON stops at the opinion.\n' +
                  'I would go to the local school because it is cheaper.\n\n' +
                  'A STRONG REASON names the chain.\n' +
                  'If I lived in the dorm, I would eat out a lot. Living in the dorm would ' +
                  'cause me to eat out. AS A RESULT, I would spend a lot of money.\n\n' +
                  'THE CONNECTORS\n' +
                  'as a result  ·  because of this  ·  consequently  ·  X would cause me to Y\n\n' +
                  'THE SHAPE OF THE PARAGRAPH\n' +
                  '1) your choice, stated plainly\n' +
                  '2) first reason -> its effect\n' +
                  '3) second reason -> its effect\n' +
                  '4) restate the choice\n\n' +
                  'A ARMADILHA: usar tres conectores diferentes na mesma frase nao deixa o ' +
                  'texto mais forte, deixa confuso. Um conector por elo da corrente e ' +
                  'suficiente — o que importa e que TODO motivo chegue a um efeito nomeado.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u10w4:ce:1',
                title: '🔗 Which version shows the chain?',
                main: '',
                options: DF.shuffle([
                  { label: 'Living in the dorm would cause me to eat out. As a result, I would ' +
                           'spend a lot of money.', correct: true },
                  { label: 'The dorm is expensive and I don\'t like it.' },
                  { label: 'I prefer the local school because it is better.' },
                  { label: 'Dorms are not good for students in general.' }
                ]),
                expl: 'Causa nomeada → efeito nomeado. As outras três param na opinião.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u10w4:ce:2',
                title: '🧩 Build the cause-and-effect sentence:',
                answer: 'Living in the dorm would cause me to eat out as a result I would spend ' +
                        'a lot of money',
                expl: 'causa → "as a result" → efeito.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w4:ce:3',
                title: '🔗 Which connector is the most formal?',
                main: '',
                options: DF.shuffle([
                  { label: 'Consequently', correct: true }, { label: 'So' },
                  { label: 'Because of this' }, { label: 'And then' }
                ]),
                expl: 'Consequently é o registro mais formal dos quatro — bom pra texto escrito, ' +
                      'pesado demais pra conversa.' }
            ]
          },

          {
            id: 'writing', icon: '✍️', name: 'Write the decision', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w4:wr:1', unit: 10, waSec: 'Writing',
                title: '✍️ Sentence 1 — your choice',
                prompt: 'Think of a real decision you face (or faced). State your choice plainly ' +
                        'in one sentence.',
                example: 'If I had to choose again, I would take the offshore job over the ' +
                         'office one.',
                mustUse: ['would'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w4:wr:2', unit: 10, waSec: 'Writing',
                title: '✍️ Sentence 2 — first reason and its effect',
                prompt: 'Give your first reason AND the effect it would have. Use a connector.',
                example: 'The schedule gives me two weeks off at a time. As a result, I would ' +
                         'actually see my daughter properly instead of for an hour a night.',
                mustUse: ['as a result'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w4:wr:3', unit: 10, waSec: 'Writing',
                title: '✍️ Sentence 3 — second reason and its effect',
                prompt: 'Give your second reason and its effect, with a different connector.',
                example: 'The pay is nearly double. Because of this, I would be able to stop ' +
                         'worrying about the mortgage every month.',
                mustUse: ['because of this'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w4:wr:4', unit: 10, waSec: 'Writing',
                title: '✍️ Sentence 4 — the honest cost',
                prompt: 'Name what you would lose by choosing this. Every real decision costs ' +
                        'something.',
                example: 'I would miss birthdays and I would be tired in a way that does not go ' +
                         'away on a weekend.',
                mustUse: ['would'],
                expl: 'Mande as quatro frases juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'whatif', icon: '🎲', name: 'The "what if" game', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w4:wi:1', unit: 10, waSec: 'What if',
                title: '🎲 What would you do if you could change one thing about yourself?',
                prompt: 'Answer with the unreal conditional. No explanation — just the answer.',
                example: 'If I could change one thing, I would be able to sleep on planes.',
                mustUse: ['would'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w4:wi:2', unit: 10, waSec: 'What if',
                title: '🎲 What talent would you want, and what would it cost you?',
                prompt: 'Name the talent, then name one downside it would bring.',
                example: 'If I could sing, I would probably perform every weekend. However, I ' +
                         'would have almost no time left for my family.',
                mustUse: ['however'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w4:wi:3', unit: 10, waSec: 'What if',
                title: '🎲 Five "what if" answers, no pauses',
                prompt: 'Answer these five in one take: what if you won the lottery, lost your ' +
                        'wallet, had a time machine, were stuck in an elevator, could start over?',
                example: '(60 segundos)',
                expl: 'É o jogo do livro com cronômetro. O objetivo é fluência, não perfeição.' }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u10w4:chk:1', unit: 10, idx: 0,
                statement: 'I can use the conditional to make predictions and talk about ' +
                           'hypothetical situations.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u10w4:chk:2', unit: 10, idx: 1,
                statement: 'I can identify cause and effect relationships.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u10w4:chk:3', unit: 10, idx: 2,
                statement: 'I can identify factors that influence decisions.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u10w4:chk:4', unit: 10, idx: 3,
                statement: 'I can give reasons to justify a decision.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w4:pt:1',
                title: '📝 Complete:', main: 'If it ___ tomorrow, we will stay home.',
                options: DF.shuffle([
                  { label: 'rains', correct: true }, { label: 'will rain' },
                  { label: 'would rain' }, { label: 'rained' }
                ]),
                expl: 'Nunca "will" depois do if.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u10w4:pt:2',
                title: '📝 Complete:', main: 'If I ___ you, I would wait.',
                options: DF.shuffle([
                  { label: 'were', correct: true }, { label: 'am' },
                  { label: 'will be' }, { label: 'would be' }
                ]),
                expl: 'Condicional irreal → were pra todos os sujeitos.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u10w4:pt:3',
                title: '📝 affect or effect?', main: 'Lack of sleep ___ your judgement.',
                options: DF.shuffle([
                  { label: 'affects', correct: true }, { label: 'effects' },
                  { label: 'effect' }, { label: 'affect' }
                ]),
                expl: 'Verbo → affects.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u10w4:pt:4',
                title: '📝 affect or effect?', main: 'The ___ was immediate.',
                options: DF.shuffle([
                  { label: 'effect', correct: true }, { label: 'affect' },
                  { label: 'affects' }, { label: 'effected' }
                ]),
                expl: 'Depois de "The" → substantivo → effect.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u10w4:pt:5',
                title: '📝 Someone answers an invitation with "Uh, yeah... maybe." This means:',
                main: '',
                options: DF.shuffle([
                  { label: 'Probably no', correct: true }, { label: 'Definitely yes' },
                  { label: 'They did not hear you' }, { label: 'They want more details' }
                ]),
                expl: 'Hesitação + "maybe" = recusa suave.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u10w4:pt:6',
                title: '🔗 Match the form to its use:',
                pairs: [
                  ['If I get the job, I will move.', 'real / possible'],
                  ['If I had money, I would travel.', 'unreal / imaginary'],
                  ['As a result,', 'cause and effect'],
                  ['If I were you,', 'giving advice']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u10w4:pt:7',
                title: '🧩 Build the sentence:',
                answer: 'If I had more free time I would learn to play the guitar',
                expl: 'if + past → would + verbo.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full decision, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u10w4+:b1', unit: 10, waSec: 'Praticar mais',
                title: '🔥 Justify a decision in ninety seconds',
                prompt: 'Present a real decision, two reasons with their effects, and the ' +
                        'honest cost — in one take, no notes.',
                example: '(90 segundos)',
                expl: 'É o outcome 4 completo. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de hipótese', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'If I ___, I would call my brother first.', pool: 'hypothetical',
                  focus: 'condicional irreal', ptHint: 'Se eu ___, eu ligaria…', n: 5 },
                { frame: 'The main factor would be ___.', pool: 'decisionFactor',
                  focus: 'fatores', ptHint: 'O fator principal seria ___.', n: 5 }
              ],
              backchain: [
                { text: 'If I had the money, I would {lifeChoice}.',
                  ptHint: 'Se eu tivesse o dinheiro, eu…' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
