/* ENGLISH FLOW — week/plan-wc1-03.js
   WORLD CLASS ONE · UNIT 3 "The Great Energy Challenge" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: a Golden Gate na abertura, o desafio das três
                    famílias, o texto do solar, a Lauren do Greenpeace.
     APP          → PORTO VERDE, uma cidade costeira fictícia que vai votar se
                    troca o gerador a diesel por uma usina solar. 100% autoral
                    (item 20).

   Por que este cenário: a unidade cobra futuro, prós e contras, opinião com
   exemplo e persuasão. Uma cidade decidindo o próprio futuro energético
   hospeda os quatro outcomes ao mesmo tempo — e o contexto costeiro/energia
   conversa com o perfil real de aluno da mentoria, sem virar Oil & Gas.

     outcome 1 (future tenses)          → o que VAI acontecer se votarem sim
     outcome 2 (pros and cons)          → o debate na câmara
     outcome 3 (opinion + examples)     → a carta dos moradores
     outcome 4 (persuade to change)     → o anúncio de utilidade pública

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl`.

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (Review of Future Forms)
     Semana 2 · Listening + Pronunciation (heteronyms) + Video
     Semana 3 · Reading + Connections
     Semana 4 · Writing + Speaking + Outcomes + Expanding Your Fluency

   ═══ NOTA PRO PROFESSOR ═══
   O livro traz um Review Puzzle de Units 1–3 no fim desta unidade. O motor
   semanal não tem checkpoint de bloco (isso existe só na torre antiga, em
   units/index.js). Registrado como pendência — não foi implementado aqui. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.energyAct = ['taking the bus', 'unplugging the chargers',
                               'hanging clothes to dry', 'buying local produce',
                               'cutting back on air travel', 'sharing a ride to work'];
    DF.WGEN.POOLS.energySrc = ['solar power', 'wind power', 'natural gas',
                               'coal', 'hydroelectric power', 'diesel generators'];
    DF.WGEN.POOLS.futureYear = ['by 2030', 'by 2040', 'within ten years',
                                'in fifty years', 'by the end of the decade'];
  }

  const WORDS = [
    { en: 'consume', pt: 'consumir',
      def: 'to use, especially in large amounts',
      ex: 'The port consumes more electricity than the rest of the town together.' },
    { en: 'generate', pt: 'gerar / produzir',
      def: 'to make or produce',
      ex: 'The new field would generate enough power for four thousand homes.' },
    { en: 'reduce', pt: 'reduzir',
      def: 'to make smaller in amount or number',
      ex: 'The council promised to reduce the bill, not the service.' },
    { en: 'rely on', pt: 'depender de',
      def: 'to depend on or use',
      ex: 'Porto Verde still relies on a generator built in 1978.' },
    { en: 'run out', pt: 'acabar / esgotar',
      def: 'to use something completely',
      ex: 'When the diesel runs out, the hospital has four hours of backup.' },
    { en: 'sustainable', pt: 'sustentável',
      def: 'long-lasting or good for the environment',
      ex: 'Nothing about the current system is sustainable, and everyone knows it.' },
    { en: 'eliminate', pt: 'eliminar',
      def: 'to remove something entirely',
      ex: 'Solar would not eliminate the generator — it would make it a backup.' },
    { en: 'cut back on', pt: 'cortar / reduzir o uso de',
      def: 'to reduce the amount of something',
      ex: 'Residents were asked to cut back on air conditioning between two and five.' },
    { en: 'reverse', pt: 'reverter / inverter',
      def: 'to cause something to move in the opposite direction',
      ex: 'A single decision will not reverse thirty years of habit.' },
    { en: 'project', pt: 'projetar / prever  (verbo: proJECT)',
      def: 'to predict',
      ex: 'Engineers project that demand will double by 2040.' },
    { en: 'residents', pt: 'moradores',
      def: 'the people who live in a certain place',
      ex: 'Two thousand residents will vote on this in March.' },
    { en: 'supply', pt: 'fornecimento / fornecer',
      def: 'to give an amount; provide',
      ex: 'One field cannot supply the whole coast, and nobody claims it can.' }
  ];

  const EXTRA_WORDS = [
    { en: 'contribute ·+', pt: 'contribuir',
      def: 'to be one of the causes of something',
      ex: 'The old generator contributes more pollution than every car in town.' },
    { en: 'convert ·+', pt: 'converter',
      def: 'to change something into something else',
      ex: 'Panels convert sunlight into electricity with no moving parts.' },
    { en: 'impact ·+', pt: 'impacto / impactar',
      def: 'a strong effect',
      ex: 'The impact on the fishing families is the part nobody discusses.' },
    { en: 'injustice ·+', pt: 'injustiça',
      def: 'a lack of fairness in a situation',
      ex: 'Paying the highest rate for the dirtiest power is an injustice.' },
    { en: 'roadblock ·+', pt: 'obstáculo / entrave',
      def: 'a situation that prevents further progress',
      ex: 'The only real roadblock is who pays for the cabling.' },
    { en: 'pollute ·+', pt: 'poluir',
      def: 'to contaminate',
      ex: 'It pollutes quietly, which is why it lasted so long.' },
    { en: 'entire ·+', pt: 'inteiro / todo',
      def: 'the whole of something',
      ex: 'The entire coast runs on the same three cables.' },
    { en: 'give up ·+', pt: 'desistir de / abrir mão de',
      def: 'to quit doing something',
      ex: 'Nobody is asking anyone to give up their car.' }
  ];

  DF.PLAN.wc1[3] = {
    unit: 3,
    title: 'The Great Energy Challenge',
    subtitle: 'Seu terceiro mês',
    icon: '⚡',

    mindmap: {
      center: 'The Great Energy Challenge',
      sub: 'Futuro, prós e contras, e convencer alguém a mudar',
      branches: [
        {
          icon: '🔌', name: 'Energy vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>rely on</b>, <b>run out</b>, <b>cut back on</b> e <b>give up</b> são ' +
                'phrasal verbs — a preposição faz parte do significado e não pode sumir. ' +
                '"rely the generator" não existe.'
        },
        {
          icon: '📅', name: 'Definite plans',
          leaves: [
            { en: "I'm going to take the exam next Saturday.", pt: 'plano já decidido' },
            { en: "I'm taking the exam next Saturday.", pt: 'present continuous = agendado' },
            { en: 'The vote is happening in March.', pt: 'data marcada, quase certa' }
          ],
          note: '<b>going to</b> e <b>present continuous</b> quase se equivalem para planos. ' +
                'O continuous soa mais firme — sugere que já está na agenda, com hora marcada.'
        },
        {
          icon: '🔮', name: 'Predictions',
          leaves: [
            { en: 'By 2040, there will be ten billion people.', pt: 'previsão neutra' },
            { en: 'Demand is going to double.', pt: 'previsão com evidência atual' },
            { en: 'Look at that queue — it is going to rain.', pt: 'evidência VISÍVEL agora' },
            { en: 'I think prices will fall.', pt: 'opinião → will' }
          ],
          note: '<b>A diferença que importa:</b> use <b>going to</b> quando a evidência está ' +
                'na sua frente agora (nuvem preta, fila enorme). Use <b>will</b> quando é ' +
                'opinião, cálculo ou estatística.'
        },
        {
          icon: '🤝', name: 'Promises and instant decisions',
          leaves: [
            { en: "I'll call you tonight. I won't forget.", pt: 'promessa → will' },
            { en: "That's heavy — I'll help you.", pt: 'decisão tomada AGORA' },
            { en: "I'll never vote for that again.", pt: 'compromisso pessoal' }
          ],
          note: '<b>Armadilha do brasileiro:</b> decisão tomada na hora é <b>will</b>, nunca ' +
                '<i>going to</i>. Se alguém derruba algo e você se oferece pra ajudar, é ' +
                '"I\'ll help" — "I\'m going to help" soa como se você já tivesse planejado.'
        },
        {
          icon: '⏳', name: 'Ongoing future actions',
          leaves: [
            { en: 'By 2035 we will be using mostly solar.', pt: 'em curso naquele momento' },
            { en: 'This time next year I will be living abroad.', pt: 'situação futura contínua' },
            { en: 'They will be voting all day Sunday.', pt: 'duração no futuro' }
          ],
          note: '<b>will be + -ing</b> descreve o que estará ACONTECENDO num ponto do futuro, ' +
                'não o que vai começar ou terminar. É a forma que dá a sensação de "já será ' +
                'normal naquela época".'
        },
        {
          icon: '🥁', name: 'Heteronyms — noun × verb',
          leaves: [
            { en: 'a PROject × to proJECT', pt: 'substantivo 1ª · verbo 2ª' },
            { en: 'a SURvey × to surVEY', pt: 'mesma regra' },
            { en: 'a REcord × to reCORD', pt: 'mesma regra' },
            { en: 'an INcrease × to inCREASE', pt: 'mesma regra' },
            { en: 'a PERmit × to perMIT', pt: 'mesma regra' }
          ],
          note: 'Em palavras de <b>duas sílabas</b> que são substantivo E verbo, o ' +
                '<b>substantivo puxa a força pra primeira</b> sílaba e o <b>verbo pra ' +
                'segunda</b>. Não vale para todas (<i>reSPECT</i> é sempre na segunda), mas ' +
                'resolve a maioria.'
        },
        {
          icon: '🎯', name: 'Persuading',
          leaves: [
            { en: 'Instead of driving, take the bus.', pt: 'Instead of + -ing' },
            { en: 'Rather than buying new, repair it.', pt: 'Rather than + -ing' },
            { en: 'By unplugging chargers, you save energy.', pt: 'By + -ing = o meio' },
            { en: 'According to the town report, …', pt: 'citar a fonte dá autoridade' },
            { en: 'For one thing… In addition… However…', pt: 'a espinha do parágrafo' }
          ],
          note: 'As três estruturas pedem <b>-ing</b>, porque <b>of</b>, <b>than</b> e ' +
                '<b>by</b> funcionam como preposição aqui. É a mesma regra da unidade 2 ' +
                'voltando com outra roupa.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '⚡',
        title: 'Overview · Vocabulary · Grammar',
        goal: 'Choose the right future form for a plan, a prediction and a promise.',
        comp: 'Você fala sobre o futuro escolhendo entre will, going to, present continuous e ' +
              'will be + -ing conforme a INTENÇÃO, não por sorte.',
        live: [
          'The unit opener: the bridge at night and the three warm-up questions',
          'Vocabulary page: the energy quiz and the Word Bank',
          'The Did you know? statistics box',
          'Grammar page: Review of Future Forms — the four columns',
          'Pair work: your predictions for your own country'
        ],
        bridge: 'Na aula você viu as quatro formas na tabela e discutiu as previsões do livro. ' +
                'Aqui a escolha vira decisão sob pressão, num caso novo — Porto Verde vai ' +
                'votar em março — e você ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Pronunciation — as famílias do desafio e os ' +
                  'heterônimos (PROject × proJECT).',
        ican: [
          'I can tell a plan from a prediction and use the right form for each.',
          'I can use will for promises and decisions made on the spot.',
          'I can describe what will be happening at a point in the future.',
          'I can use the unit vocabulary to talk about energy use.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u3w1:cards:core',
                title: '📇 Twelve words for the energy debate',
                sub: 'Exemplos de Porto Verde — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u3w1:cards:extra',
                title: '➕ Eight the Word Bank does not give you',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'phrasal', icon: '🔗', name: 'The phrasal verbs of this unit', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u3w1:pv:1',
                title: '🔗 Complete:', main: 'The town still ___ a generator from 1978.',
                options: DF.shuffle([
                  { label: 'relies on', correct: true }, { label: 'relies' },
                  { label: 'rely on' }, { label: 'relies of' }
                ]),
                expl: 'rely <b>on</b> — a preposição é obrigatória, e o sujeito é singular ' +
                      '(the town) → relies.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u3w1:pv:2',
                title: '🔗 Complete:', main: 'We were asked to ___ air conditioning in the afternoon.',
                options: DF.shuffle([
                  { label: 'cut back on', correct: true }, { label: 'cut back' },
                  { label: 'cut down on to' }, { label: 'give up on' }
                ]),
                expl: 'cut back <b>on</b> + substantivo. Sem o "on" a frase fica sem objeto.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u3w1:pv:3',
                title: '🔗 What is the difference?',
                main: '"eliminate" and "cut back on" are not the same. Which is stronger?',
                options: DF.shuffle([
                  { label: 'eliminate — it removes completely', correct: true },
                  { label: 'cut back on — it removes completely' },
                  { label: 'They mean exactly the same' },
                  { label: 'cut back on is more formal' }
                ]),
                expl: 'eliminate = tirar 100%. cut back on = reduzir. Confundir os dois muda ' +
                      'o compromisso que você está assumindo.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u3w1:pv:4',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['generate', 'to make or produce'],
                  ['convert', 'to change into something else'],
                  ['roadblock', 'something that prevents progress'],
                  ['residents', 'the people who live there'],
                  ['sustainable', 'long-lasting, good for the environment']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'wc1u3w1:pv:5',
                title: '✍️ Complete with ONE word:',
                main: 'When the diesel ___ out, the hospital has four hours of backup.',
                answers: ['runs'],
                expl: 'run out = esgotar. Sujeito singular (the diesel) → runs out.' }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Future forms at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u3w1:read:glance',
                title: '🔍 Four futures, four intentions',
                textTitle: 'Which future do I use?',
                readAloud: false,
                text:
                  'DEFINITE PLAN — you already decided.\n' +
                  "I'm going to vote on Sunday.\n" +
                  "I'm voting on Sunday.  (present continuous = it is in the diary)\n\n" +
                  'PREDICTION — you think it will happen.\n' +
                  'Demand will double by 2040.  (opinion, calculation, statistics)\n' +
                  'Demand is going to double.  (there is evidence right now)\n\n' +
                  'PROMISE or DECISION MADE THIS SECOND — always will.\n' +
                  "I'll send you the report tonight. I won't forget.\n" +
                  "That box looks heavy — I'll help you.\n\n" +
                  'ONGOING FUTURE ACTION — what will be in progress at that moment.\n' +
                  'By 2035 the town will be running mostly on solar.\n\n' +
                  'A DECISAO EM UMA PERGUNTA: quando voce decidiu?\n' +
                  '  Antes de agora ................ going to / present continuous\n' +
                  '  Agora, neste segundo .......... will\n' +
                  '  Nao e decisao, e palpite ...... will (ou going to, se ha evidencia)\n\n' +
                  'A ARMADILHA DO BRASILEIRO: usar WILL para tudo. Em portugues "vou fazer" e ' +
                  '"farei" quase se equivalem, entao o aluno traduz sempre para will — e soa ' +
                  'estranho ao dizer "I will travel next week" sobre uma viagem ja comprada. ' +
                  'Passagem comprada e plano: "I am travelling next week".',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w1:fu:1',
                title: '🎯 Choose the natural form:',
                main: '"Why are you carrying that folder?" — "I ___ the proposal to the council."',
                options: DF.shuffle([
                  { label: "'m taking", correct: true }, { label: 'will take' },
                  { label: 'take' }, { label: 'will be taken' }
                ]),
                expl: 'Já está com a pasta na mão — é plano em andamento → present continuous.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w1:fu:2',
                title: '🎯 Choose the natural form:',
                main: '"The bag is heavy." — "___ carry it for you."',
                options: DF.shuffle([
                  { label: "I'll", correct: true }, { label: "I'm going to" },
                  { label: "I'm" }, { label: 'I will be' }
                ]),
                expl: 'Decisão tomada AGORA, ao ouvir → will. "I\'m going to carry it" ' +
                      'sugeriria que você já tinha planejado.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w1:fu:3',
                title: '🎯 Choose the natural form:',
                main: 'Look at those clouds. The vote ___ be a wet one.',
                options: DF.shuffle([
                  { label: 'is going to', correct: true }, { label: 'will' },
                  { label: 'is', }, { label: 'will be being' }
                ]),
                expl: 'Evidência visível AGORA (as nuvens) → going to. É a distinção que o ' +
                      'livro cobra.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w1:fu:4',
                title: '🎯 Choose the natural form:',
                main: 'Engineers project that demand ___ double within ten years.',
                options: DF.shuffle([
                  { label: 'will', correct: true }, { label: 'is going to be' },
                  { label: 'is', }, { label: 'will be' }
                ]),
                expl: 'Previsão baseada em cálculo/estatística → will.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w1:fu:5',
                title: '🎯 Choose the natural form:',
                main: 'This time next year the town ___ on solar power.',
                options: DF.shuffle([
                  { label: 'will be running', correct: true }, { label: 'will run' },
                  { label: 'is running' }, { label: 'runs' }
                ]),
                expl: '"This time next year" pede a ação EM CURSO naquele momento → ' +
                      'will be + -ing.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w1:fu:6',
                title: '🎯 Which is a PROMISE?',
                main: 'Only one commits the speaker.',
                options: DF.shuffle([
                  { label: "I'll read the report before Friday. I won't forget.",
                    correct: true },
                  { label: 'I am reading the report on Friday.' },
                  { label: 'The report is going to be long.' },
                  { label: 'I will be reading the report on Friday.' }
                ]),
                expl: 'won\'t forget é a marca da promessa. As outras são agenda, previsão e ' +
                      'ação em curso.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w1:fu:7',
                title: '🎯 Which sounds WRONG to a native ear?',
                main: 'The speaker already has the tickets.',
                options: DF.shuffle([
                  { label: 'I will travel next week.', correct: true },
                  { label: "I'm travelling next week." },
                  { label: "I'm going to travel next week." },
                  { label: 'I leave next week.' }
                ]),
                expl: 'Passagem comprada = plano. "I will travel" soa como decisão de agora — ' +
                      'exatamente o erro que o brasileiro comete por traduzir "vou viajar".' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u3w1:tf:1',
                title: '🔀 Future transformation',
                rounds: [
                  { base: 'They are going to build the solar field.', cmd: 'Question',
                    answers: ['Are they going to build the solar field?'] },
                  { base: 'The council will approve the plan.', cmd: 'Negative',
                    answers: ["The council won't approve the plan.",
                              'The council will not approve the plan.'] },
                  { base: 'She is voting on Sunday.', cmd: 'Question',
                    answers: ['Is she voting on Sunday?'] },
                  { base: 'We will be using solar by 2035.', cmd: 'Negative',
                    answers: ["We won't be using solar by 2035.",
                              'We will not be using solar by 2035.'] },
                  { base: 'Will the residents accept it?', cmd: 'Short answer',
                    answers: ['Yes, they will.', 'No, they will not.', "No, they won't."] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u3w1:drl:pred', unit: 3, waSec: 'Drill · futuro',
                title: '🔁 Drill 1 — the year changes', focus: 'previsão com will',
                frame: '___, most of the coast will run on solar.',
                ptHint: '___, a maior parte da costa vai funcionar com energia solar.',
                slots: ['By 2030', 'By 2040', 'Within ten years', 'In fifty years',
                        'By the end of the decade'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u3w1:drl:plan', unit: 3, waSec: 'Drill · futuro',
                title: '🔁 Drill 2 — the plan changes', focus: 'plano com going to',
                frame: "I'm going to start ___ this month.",
                ptHint: 'Vou começar a ___ este mês.',
                slots: ['taking the bus', 'unplugging the chargers', 'hanging clothes to dry',
                        'buying local produce', 'sharing a ride to work'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u3w1:drl:ong', unit: 3, waSec: 'Drill · futuro',
                title: '🔁 Drill 3 — the ongoing future', focus: 'will be + -ing',
                frame: 'This time next year I will be ___.',
                ptHint: 'Nesta época, no ano que vem, eu estarei ___.',
                slots: ['paying half of what I pay now', 'living somewhere quieter',
                        'working from home', 'driving an electric car',
                        'using half the energy'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u3w1:drl:src', unit: 3, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 4 — the source changes', focus: 'vocabulário',
                frame: 'The town still relies on ___.',
                ptHint: 'A cidade ainda depende de ___.',
                slots: ['diesel generators', 'coal', 'natural gas', 'hydroelectric power',
                        'solar power'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u3w1:bc:1', unit: 3, waSec: 'Backchain',
                title: '🧱 The prediction',
                ptHint: 'Os engenheiros preveem que a demanda vai dobrar em dez anos.',
                chain: ['within ten years', 'double within ten years',
                        'that demand will double within ten years',
                        'Engineers project that demand will double within ten years.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u3w1:bc:2', unit: 3, waSec: 'Backchain',
                title: '🧱 The ongoing future',
                ptHint: 'Nesta época, no ano que vem, a cidade estará funcionando com solar.',
                chain: ['on solar power', 'running on solar power',
                        'the town will be running on solar power',
                        'This time next year the town will be running on solar power.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u3w1:bc:3', unit: 3, waSec: 'Backchain',
                title: '🧱 The promise',
                ptHint: 'Eu leio o relatório antes de sexta. Não vou esquecer.',
                chain: ["I won't forget", 'before Friday',
                        "I'll read the report before Friday",
                        "I'll read the report before Friday. I won't forget."] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u3w1:dlg:1',
                title: '🎧 Two residents before the vote',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'Are you voting on Sunday?' },
                  { who: 'Elias', en: "I'm voting, yes. I've already read the whole proposal." },
                  { who: 'Nadia', en: 'And do you think it will pass?' },
                  { who: 'Elias', en: 'Honestly? No. Too many people rely on the port jobs.' }
                ],
                question: 'Which of these is a PLAN, not a prediction?',
                options: DF.shuffle([
                  { label: '"I\'m voting, yes."', correct: true },
                  { label: '"Do you think it will pass?"' },
                  { label: '"Honestly? No."' },
                  { label: '"Too many people rely on the port jobs."' }
                ]),
                expl: 'Present continuous = já decidido, já na agenda. O resto é previsão e ' +
                      'razão.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u3w1:dlg:2',
                title: '🎧 A decision made on the spot',
                sub: 'Escute em que momento exato a decisão acontece.',
                lines: [
                  { who: 'Priya', en: 'Nobody has translated the proposal into Spanish.' },
                  { who: 'Tomás', en: "Really? OK — I'll do it. I have the weekend free." },
                  { who: 'Priya', en: 'Are you sure? It is forty pages.' },
                  { who: 'Tomás', en: "I'm sure. I'll send it to you Monday morning." }
                ],
                question: 'Why does Tomás say "I\'ll do it" and not "I\'m going to do it"?',
                options: DF.shuffle([
                  { label: 'He decided at that exact moment', correct: true },
                  { label: 'Because it is a prediction about the weekend' },
                  { label: 'Because the action is ongoing' },
                  { label: 'Both would be equally natural' }
                ]),
                expl: 'Ele ouve o problema e decide na hora → will. É a distinção que o ' +
                      'brasileiro perde.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u3w1:dlg:3',
                title: '🎧 Three predictions, no text on screen',
                sub: 'Sem texto na tela. Quem está mais seguro?',
                hideText: true,
                lines: [
                  { who: 'Amara', en: 'By 2040 nobody here will be paying for electricity ' +
                                      'at all.' },
                  { who: 'Kenji', en: 'That is optimistic. I think prices will fall, but slowly.' },
                  { who: 'Larissa', en: 'Look at the cost curve — it is going to happen faster ' +
                                        'than both of you think.' }
                ],
                question: 'Who bases the prediction on evidence they can point at?',
                options: DF.shuffle([
                  { label: 'Larissa', correct: true }, { label: 'Amara' },
                  { label: 'Kenji' }, { label: 'None of them' }
                ]),
                expl: '"Look at the cost curve" + <b>going to</b>. Evidência presente pede ' +
                      'going to; opinião pede will.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w1:bld:1', unit: 3, waSec: 'Sua vez',
                title: '🗣️ A definite plan',
                prompt: 'Say one thing you have already decided to do in the next month. ' +
                        'Use going to or the present continuous.',
                example: "I'm starting a course in September — I've already paid for it.",
                mustUse: ['ing'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w1:bld:2', unit: 3, waSec: 'Sua vez',
                title: '🗣️ A prediction about your country',
                prompt: 'Make one prediction about energy in Brazil in the next twenty years. ' +
                        'Give a reason.',
                example: 'I think solar will become the main source in the northeast, because ' +
                         'the sun there is constant and the land is cheap.',
                mustUse: ['will'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w1:bld:3', unit: 3, waSec: 'Sua vez',
                title: '🗣️ A promise to yourself',
                prompt: 'Make one promise about your English. Use will and won\'t.',
                example: "I'll do at least ten minutes a day, and I won't skip the speaking " +
                         'ones because they are harder.',
                mustUse: ["won't"] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w1:bld:4', unit: 3, waSec: 'Sua vez',
                title: '🗣️ This time next year',
                prompt: 'Complete out loud: "This time next year I will be ___". Then add why.',
                example: 'This time next year I will be working offshore on a different rig, ' +
                         'because my contract ends in June.',
                mustUse: ['will be'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w1+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Four futures in sixty seconds',
                prompt: 'Talk for one minute about your next year. Use all four forms: a ' +
                        'plan, a prediction, a promise, and an ongoing future action.',
                example: '(1 minuto)',
                expl: 'O professor ouve se as quatro aparecem — e se cada uma está no lugar ' +
                      'certo.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w1+:b2', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Fix it out loud',
                prompt: 'Someone with tickets already bought says "I will travel next week." ' +
                        'Correct them and explain why in English.',
                example: "You're travelling next week — the ticket is bought, so it is a plan, " +
                         'not a decision you are making now.',
                mustUse: ['plan'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de futuro', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___, most of the coast will run on solar.', pool: 'futureYear',
                  focus: 'previsão', ptHint: '___, a costa vai funcionar com solar.', n: 5 },
                { frame: "I'm going to start ___ this month.", pool: 'energyAct',
                  focus: 'plano', ptHint: 'Vou começar a ___ este mês.', n: 5 },
                { frame: 'The town still relies on ___.', pool: 'energySrc',
                  focus: 'vocabulário', ptHint: 'A cidade ainda depende de ___.', n: 5 }
              ],
              backchain: [
                { text: '{futureYear}, the town will be running on {energySrc}.',
                  ptHint: '…, a cidade estará funcionando com…' },
                { text: "I'm going to start {energyAct}.", ptHint: 'Vou começar a…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'Listening · Pronunciation · Video',
        goal: 'Hear what someone refuses to change, and stress a heteronym correctly.',
        comp: 'Você ouve alguém relatando o que conseguiu e o que NÃO conseguiu mudar, e ' +
              'distingue a PROject do to proJECT pela sílaba tônica.',
        live: [
          'Listening: the three families in the energy challenge',
          'Checking which actions each family is and is not taking',
          'Pronunciation: heteronyms and stress shift (p.146)',
          'Video: the activist at the coal plant',
          'Pair work: counting the appliances in your own home'
        ],
        bridge: 'Na aula você marcou o quadro das três famílias. Aqui as famílias são outras, ' +
                'de Porto Verde, e o foco vira o que elas se RECUSAM a mudar — que é sempre a ' +
                'parte mais informativa. E o heterônimo sai da tabela e vira ouvido.',
        nextLive: 'Semana 3 · Reading + Connections — o texto sobre solar e a sua própria ' +
                  'dieta de energia.',
        ican: [
          'I can hear the difference between a noun and a verb that are spelled the same.',
          'I can identify what someone is NOT willing to change, and why.',
          'I can report someone else\'s reasons in my own words.',
          'I can pronounce project, survey, record and increase correctly in context.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'hetero', icon: '🥁', name: 'Same spelling, two stresses', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'wc1u3w2:read:het',
                title: '🥁 Noun first, verb second',
                textTitle: 'Heteronyms',
                readAloud: false,
                text:
                  'Some two-syllable words are both a noun and a verb, spelled identically. ' +
                  'The stress tells you which one you are hearing.\n\n' +
                  'NOUN — stress on the FIRST syllable\n' +
                  'a PROject   ·   a SURvey   ·   a REcord   ·   an INcrease   ·   a PERmit\n' +
                  'The PROject starts in March.\n\n' +
                  'VERB — stress on the SECOND syllable\n' +
                  'to proJECT   ·   to surVEY   ·   to reCORD   ·   to inCREASE   ·   to perMIT\n' +
                  'Engineers proJECT a sharp rise.\n\n' +
                  'MORE PAIRS: CONduct / conDUCT · OBject / obJECT · SUSpect / susPECT · ' +
                  'COMpound / comPOUND · CONtrast / conTRAST · PREsent / preSENT\n\n' +
                  'A REGRA NAO E ABSOLUTA. Palavras como reSPECT e reGRET tem a forca na ' +
                  'segunda silaba sendo substantivo E verbo. Mas o padrao noun-first / ' +
                  'verb-second cobre a grande maioria dos pares de duas silabas.\n\n' +
                  'POR QUE IMPORTA AQUI: esta unidade usa project como verbo o tempo todo ' +
                  '("engineers project that demand will double"). Dizer PROject ali faz o ' +
                  'ouvinte procurar um substantivo e perder a frase.',
                nextLabel: 'Got it ▸' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u3w2:str:1', word: 'project (noun)',
                pattern: 'Oo', decoys: ['oO'], syl: 'PRO-ject',
                expl: 'Substantivo: "the PROject starts in March".' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u3w2:str:2', word: 'project (verb)',
                pattern: 'oO', decoys: ['Oo'], syl: 'pro-JECT',
                expl: 'Verbo: "engineers proJECT a rise".' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u3w2:str:3', word: 'increase (noun)',
                pattern: 'Oo', decoys: ['oO'], syl: 'IN-crease' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u3w2:str:4', word: 'increase (verb)',
                pattern: 'oO', decoys: ['Oo'], syl: 'in-CREASE' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u3w2:str:5', word: 'survey (noun)',
                pattern: 'Oo', decoys: ['oO'], syl: 'SUR-vey' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u3w2:str:6', word: 'permit (verb)',
                pattern: 'oO', decoys: ['Oo'], syl: 'per-MIT' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u3w2:het:1',
                title: '🥁 Noun or verb? Listen to the stress.',
                main: 'The police will conDUCT a full review.',
                options: DF.shuffle([
                  { label: 'Verb — stress on the second syllable', correct: true },
                  { label: 'Noun — stress on the first syllable' }
                ]),
                expl: 'conDUCT = realizar. CONduct = comportamento.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u3w2:het:2',
                title: '🥁 Which is correct here?',
                main: 'We need a ___ before the vote. (survey)',
                options: DF.shuffle([
                  { label: 'SUR-vey (noun)', correct: true }, { label: 'sur-VEY (verb)' }
                ]),
                expl: 'Depois de "a" vem substantivo → força na primeira.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u3w2:het:3',
                title: '🥁 Which is correct here?',
                main: 'The council will ___ the residents next month. (survey)',
                options: DF.shuffle([
                  { label: 'sur-VEY (verb)', correct: true }, { label: 'SUR-vey (noun)' }
                ]),
                expl: 'Depois de "will" vem verbo → força na segunda.' },
              { ui: 'match', cat: 'pro', srsId: 'wc1u3w2:het:4',
                title: '🔗 Match each to its part of speech:',
                pairs: [
                  ['a PROject', 'noun'],
                  ['to proJECT', 'verb'],
                  ['an INcrease', 'noun'],
                  ['to inCREASE', 'verb'],
                  ['to obJECT', 'verb']
                ] }
            ]
          },

          {
            id: 'say-het', icon: '🎤', name: 'Say the pair in context', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u3w2:rep:1', unit: 3, waSec: 'Heteronyms',
                title: '🎤 Both in one sentence:',
                target: 'The project will project savings of thirty per cent.',
                ptHint: 'O projeto vai projetar uma economia de trinta por cento.',
                expl: 'PROject … proJECT. Se as duas saírem iguais, a frase perde o sentido.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u3w2:rep:2', unit: 3, waSec: 'Heteronyms',
                title: '🎤 Both again:',
                target: 'We recorded an increase, and the bills will increase again.',
                ptHint: 'Registramos um aumento, e as contas vão aumentar de novo.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u3w2:rep:3', unit: 3, waSec: 'Heteronyms',
                title: '🎤 A full unit sentence:',
                target: 'Residents object to the increase, but nobody objects to the project.',
                ptHint: 'Os moradores se opõem ao aumento, mas ninguém se opõe ao projeto.' }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'Three households report back', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u3w2:dlg:1',
                title: '👂 Household 1 — the easy wins',
                sub: 'Sem texto na tela. Ouça o que ela CONSEGUIU e o que não.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'So, how has the first month gone?' },
                  { who: 'Marta', en: 'Better than I expected. We stopped using the dryer ' +
                                      'completely — everything hangs outside now.' },
                  { who: 'Host', en: 'And the harder ones?' },
                  { who: 'Marta', en: 'The car. I said I would take the bus, and I have taken ' +
                                      'it twice. I am not going to pretend otherwise.' }
                ],
                question: 'What has Marta NOT managed to change?',
                options: DF.shuffle([
                  { label: 'Using the car instead of the bus', correct: true },
                  { label: 'Using the dryer' },
                  { label: 'Hanging clothes outside' },
                  { label: 'She has changed everything' }
                ]),
                expl: '"I have taken it twice" — em um mês. A honestidade dela é o dado.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u3w2:dlg:2',
                title: '👂 Household 2 — the refusal with a reason',
                sub: 'Sem texto na tela. Por que ele se recusa?',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'And you, Joaquim? Anything you refuse to give up?' },
                  { who: 'Joaquim', en: 'The freezer. I fish, and I sell what I do not eat.' },
                  { who: 'Host', en: 'So it is work, not comfort.' },
                  { who: 'Joaquim', en: 'Exactly. Cut my freezer and you cut my income. ' +
                                        'I will change anything else.' }
                ],
                question: 'Why does Joaquim refuse to change the freezer?',
                options: DF.shuffle([
                  { label: 'It is part of how he earns money', correct: true },
                  { label: 'He does not believe in saving energy' },
                  { label: 'It is too old to replace' },
                  { label: 'He was not asked to' }
                ]),
                expl: 'A recusa com razão econômica é diferente da recusa por conforto — e é ' +
                      'a que muda o debate.'
              },
              { ui: 'type', cat: 'fun', srsId: 'wc1u3w2:type:1',
                title: '👂 How many times did Marta take the bus?',
                sub: 'Só o número.',
                tts: 'I said I would take the bus, and I have taken it twice.',
                answers: ['2'], exact: true,
                expl: 'twice = 2.' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u3w2:dlg:3',
                title: '👂 Household 3 — the surprise',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'Dora, you had the biggest reduction of the three.' },
                  { who: 'Dora', en: 'And I did almost nothing. I unplugged everything that ' +
                                     'was not being used.' },
                  { who: 'Host', en: 'That was all?' },
                  { who: 'Dora', en: 'That was all. Seventeen per cent. I could not believe it ' +
                                     'either.' }
                ],
                question: 'What single action produced Dora\'s reduction?',
                options: DF.shuffle([
                  { label: 'Unplugging appliances that were not in use', correct: true },
                  { label: 'Installing solar panels' },
                  { label: 'Selling her car' },
                  { label: 'Hanging clothes to dry' }
                ]),
                expl: 'Uma ação só, 17%. É exatamente o tipo de exemplo concreto que a ' +
                      'semana 4 vai pedir pra persuadir alguém.'
              },
              { ui: 'match', cat: 'fun', srsId: 'wc1u3w2:match:house',
                title: '🔗 Match each household to what defines it:',
                pairs: [
                  ['Marta', 'honest about the car'],
                  ['Joaquim', 'refuses for income reasons'],
                  ['Dora', 'biggest cut, smallest effort']
                ] }
            ]
          },

          {
            id: 'report', icon: '🗣️', name: 'Report it back', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'fun', srsId: 'wc1u3w2:bc:1', unit: 3, waSec: 'Backchain',
                title: '🧱 Reporting a refusal',
                ptHint: 'Ele se recusa a abrir mão do freezer porque é o ganha-pão dele.',
                chain: ['his income', 'because it is his income',
                        'to give up the freezer because it is his income',
                        'He refuses to give up the freezer because it is his income.'] },
              { ui: 'backchain', cat: 'fun', srsId: 'wc1u3w2:bc:2', unit: 3, waSec: 'Backchain',
                title: '🧱 Reporting a result',
                ptHint: 'Ela cortou dezessete por cento só desligando os aparelhos da tomada.',
                chain: ['from the wall', 'by unplugging things from the wall',
                        'seventeen per cent by unplugging things from the wall',
                        'She cut seventeen per cent by unplugging things from the wall.'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w2:bld:1', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Summarize the three households',
                prompt: 'In three sentences, one per household, say what each one did or ' +
                        'refused to do.',
                example: '(3 frases)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w2:bld:2', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Your own refusal',
                prompt: 'What is the ONE thing you would refuse to give up, and why? ' +
                        'Be honest.',
                example: 'I would not give up hot showers. I work outdoors and it is the only ' +
                         'thing that makes the day end properly.',
                mustUse: ['because'],
                expl: 'A resposta honesta vale mais que a resposta certa — e é o que faz a ' +
                      'aula ao vivo render.' }
            ]
          },

          {
            id: 'practice-w2', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u3w2:wr:1',
                title: '📝 Complete:', main: 'The old plant ___ more than every car in town.',
                options: DF.shuffle([
                  { label: 'pollutes', correct: true }, { label: 'polluted' },
                  { label: 'pollution' }, { label: 'polluting' }
                ]),
                expl: 'Verbo no presente, sujeito singular → pollutes.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w2:wr:2',
                title: '📝 Complete:', main: 'She cut her bill ___ unplugging everything.',
                options: DF.shuffle([
                  { label: 'by', correct: true }, { label: 'for' },
                  { label: 'with' }, { label: 'to' }
                ]),
                expl: '<b>by + -ing</b> = o MEIO pelo qual algo aconteceu. Volta na semana 4, ' +
                      'na escrita persuasiva.' },
              { ui: 'type', cat: 'pro', srsId: 'wc1u3w2:wr:3',
                title: '✍️ Noun or verb? Type "noun" or "verb":',
                main: 'The council will proJECT the costs for ten years.',
                answers: ['verb'],
                expl: 'Força na segunda sílaba → verbo.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w2+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Six heteronyms in a row',
                prompt: 'Say these six pairs, noun then verb: project, survey, record, ' +
                        'increase, permit, object.',
                expl: 'O professor ouve só se a força pula nas doze.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w2+:b2', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Defend the refusal you disagree with',
                prompt: 'You probably disagree with one of the three households. Argue THEIR ' +
                        'side convincingly for thirty seconds.',
                expl: 'Defender o lado que você não escolheu é o treino direto do outcome 2 ' +
                      '(pros and cons).' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'She cut her bill by ___.', pool: 'energyAct', focus: 'by + -ing',
                  ptHint: 'Ela cortou a conta ___.', n: 5 },
                { frame: 'The town still relies on ___.', pool: 'energySrc',
                  focus: 'vocabulário', ptHint: 'A cidade ainda depende de ___.', n: 5 }
              ],
              backchain: [
                { text: 'She cut her bill by {energyAct}.', ptHint: 'Ela cortou a conta…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'Reading · Connections',
        goal: 'Separate the advantages from the drawbacks, and commit to something yourself.',
        comp: 'Você lê um texto que compara duas soluções e monta o quadro de prós e contras ' +
              'de cada uma — depois assume um compromisso próprio e o justifica.',
        live: [
          'Reading: why we do not use more solar power',
          'The Reading Strategy: identifying key details (advantage, drawback, however)',
          'Listing two advantages and two drawbacks of each method',
          'Connections: the energy diet survey, twelve items',
          'Role-play: convincing the mayor to invest'
        ],
        bridge: 'Na aula você fez o quadro de prós e contras do texto do livro. Aqui o texto é ' +
                'outro — a decisão de Porto Verde — e o quadro passa a ter consequência: você ' +
                'vai ter que escolher um lado e defender na semana 4.',
        ican: [
          'I can spot the signal words that introduce a drawback.',
          'I can build a pros and cons table from a text that does not label them.',
          'I can state an opinion and support it with a specific example.',
          'I can commit to a change and say when I will start.'
        ],
        nextLive: 'Semana 4 · Writing + Speaking — o parágrafo persuasivo e o anúncio de ' +
                  'utilidade pública.',

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'signals', icon: '🚦', name: 'The words that flag a drawback', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u3w3:read:sig',
                title: '🚦 Read for the turn, not the topic',
                textTitle: 'Signal words',
                readAloud: false,
                text:
                  'A text comparing two options rarely writes "advantage" and "drawback". ' +
                  'It signals them.\n\n' +
                  'ADDING AN ADVANTAGE\n' +
                  'In addition · Moreover · What is more · Another benefit is\n\n' +
                  'INTRODUCING A DRAWBACK — this is where readers stop paying attention, ' +
                  'and it is where the real information is\n' +
                  'However · Although · On the other hand · Despite · The problem is · ' +
                  'One drawback is\n\n' +
                  'CONCEDING, THEN TURNING — the strongest move in argument\n' +
                  'Although the panels are expensive, they last twenty-five years.\n' +
                  'The first half sounds like a con. The sentence is actually a PRO.\n\n' +
                  'A ARMADILHA: "Although X, Y" — a opiniao do autor esta em Y, nunca em X. ' +
                  'Quem le so a primeira metade entende o contrario do que foi dito. Em prova ' +
                  'de leitura, e o erro que mais custa ponto.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:sig:1',
                title: '🚦 What does the writer actually think?',
                main: 'Although the panels are expensive, they last twenty-five years.',
                options: DF.shuffle([
                  { label: 'They are worth buying', correct: true },
                  { label: 'They are too expensive to buy' },
                  { label: 'They only last a short time' },
                  { label: 'The writer gives no opinion' }
                ]),
                expl: 'Em "Although X, Y", a posição do autor está em <b>Y</b>. A primeira ' +
                      'metade é a concessão.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:sig:2',
                title: '🚦 Which word introduces a DRAWBACK?',
                main: '',
                options: DF.shuffle([
                  { label: 'However', correct: true }, { label: 'Moreover' },
                  { label: 'In addition' }, { label: 'What is more' }
                ]),
                expl: 'As outras três acrescentam algo na mesma direção.' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u3w3:sig:3',
                title: '🔗 Match the signal to what it introduces:',
                pairs: [
                  ['However,', 'a drawback'],
                  ['In addition,', 'another advantage'],
                  ['Although X, Y', 'a concession, then the real point'],
                  ['On the other hand,', 'the opposite side'],
                  ['According to X,', 'a source']
                ] }
            ]
          },

          {
            id: 'text', icon: '📖', name: 'Read: The Vote in Porto Verde', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u3w3:read:text',
                title: '📖 A new text, the same skill',
                textTitle: 'The Vote in Porto Verde',
                text:
                  'In March, two thousand residents of Porto Verde will decide whether to ' +
                  'replace the town generator with a solar field on the hill behind the ' +
                  'cemetery. The generator was installed in 1978 and now runs about nineteen ' +
                  'hours a day.\n\n' +
                  'The case for solar is mostly arithmetic. The field would generate enough ' +
                  'power for roughly four thousand homes, and the town has three thousand. ' +
                  'Sunlight here is reliable for eight months of the year. In addition, the ' +
                  'panels have no moving parts, so maintenance is close to nothing once they ' +
                  'are installed. Engineers project that bills would fall by about a third ' +
                  'within four years.\n\n' +
                  'However, the four years are the problem. The town has to borrow to build, ' +
                  'and the loan is paid by everyone, including the households that already ' +
                  'use almost no electricity. The fishing families in the lower town would ' +
                  'pay the same rate as the hotels on the seafront. Several residents have ' +
                  'called this an injustice, and it is difficult to argue with them.\n\n' +
                  'There is also the question of the other four months. Between June and ' +
                  'September the coast is covered for days at a time, and the field would ' +
                  'produce very little. The generator would therefore stay, as a backup. ' +
                  'Nobody who supports the project pretends otherwise, though the campaign ' +
                  'posters do not mention it.\n\n' +
                  'The mayor argues that the decision is not really about money. "In fifteen ' +
                  'years the diesel will be unaffordable whether we like it or not," she said ' +
                  'last month. "We are choosing when to change, not whether."\n\n' +
                  'Although the opposition disputes almost every number in the report, even ' +
                  'they accept that the generator cannot run for another decade. What they ' +
                  'want is a smaller field, built without a loan, over twelve years. That ' +
                  'plan would work. It would also mean nothing changes for most of the ' +
                  'people voting.',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:q:1',
                title: '📖 Which is an ADVANTAGE of the solar field?',
                main: '',
                options: DF.shuffle([
                  { label: 'Almost no maintenance is needed', correct: true },
                  { label: 'It removes the need for the generator entirely' },
                  { label: 'It produces well for twelve months a year' },
                  { label: 'It requires no loan' }
                ]),
                expl: '"the panels have no moving parts, so maintenance is close to nothing". ' +
                      'As outras três são contrariadas pelo texto.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:q:2',
                title: '📖 Which is a DRAWBACK?',
                main: '',
                options: DF.shuffle([
                  { label: 'Low-use households pay the same as hotels', correct: true },
                  { label: 'The field cannot power four thousand homes' },
                  { label: 'Sunlight is unreliable all year' },
                  { label: 'The generator is only two years old' }
                ]),
                expl: 'É o parágrafo do "However" — e o texto chama isso de injustice.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:q:3',
                title: '📖 Does the generator disappear if the vote passes?',
                main: '',
                options: DF.shuffle([
                  { label: 'No — it stays as a backup', correct: true },
                  { label: 'Yes — it is removed immediately' },
                  { label: 'Yes — but only after four years' },
                  { label: 'The text does not say' }
                ]),
                expl: '"The generator would therefore stay, as a backup." Repare que os ' +
                      'cartazes da campanha omitem isso — detalhe que separa leitura atenta ' +
                      'de leitura rápida.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:q:4',
                title: '📖 What is the mayor\'s actual argument?',
                main: '',
                options: DF.shuffle([
                  { label: 'The change is inevitable, so the choice is only about timing',
                    correct: true },
                  { label: 'Solar power is cheaper than diesel today' },
                  { label: 'The opposition numbers are all wrong' },
                  { label: 'The town cannot afford to borrow' }
                ]),
                expl: '"We are choosing when to change, not whether." É um argumento de ' +
                      'moldura — muda a pergunta em vez de responder a pergunta.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:q:5',
                title: '📖 The last sentence is a criticism of the opposition plan. Why?',
                main: '"It would also mean nothing changes for most of the people voting."',
                options: DF.shuffle([
                  { label: 'Because twelve years is slow enough to have no real effect',
                    correct: true },
                  { label: 'Because their plan is technically impossible' },
                  { label: 'Because they refuse to accept the generator is old' },
                  { label: 'Because their plan costs more' }
                ]),
                expl: 'O texto até concede "That plan would work" — e aí vira. É a estrutura ' +
                      'de concessão que você viu na tela anterior.' },
              { ui: 'type', cat: 'fun', srsId: 'wc1u3w3:num:1',
                title: '📖 How many hours a day does the generator run?',
                sub: 'Só o número.',
                answers: ['19'], exact: true,
                expl: '"runs about nineteen hours a day".' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u3w3:proscons',
                title: '🔗 Pros and cons — match each fact to its column:',
                pairs: [
                  ['Enough power for 4,000 homes', 'pro'],
                  ['Almost no maintenance', 'pro'],
                  ['Everyone repays the loan equally', 'con'],
                  ['Produces little for four months', 'con'],
                  ['Diesel will be unaffordable anyway', 'pro']
                ] }
            ]
          },

          {
            id: 'opinion', icon: '💭', name: 'Opinion + example', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u3w3:read:op',
                title: '💭 An opinion without an example is just noise',
                textTitle: 'The shape of a supported opinion',
                readAloud: false,
                text:
                  'THE FRAME\n' +
                  'In my opinion, X. For example, Y. That is why Z.\n\n' +
                  'WEAK — opinion only\n' +
                  'I think the solar field is a good idea because it is better for the ' +
                  'environment.\n\n' +
                  'STRONG — opinion plus a specific example\n' +
                  'I think the field is worth it. One household in the challenge cut ' +
                  'seventeen per cent just by unplugging things — if one family can do that ' +
                  'with no money at all, a whole town with a solar field can do far more.\n\n' +
                  'USEFUL OPENERS\n' +
                  'In my opinion, … · The way I see it, … · What convinces me is … · ' +
                  'For one thing, … · According to the report, …\n\n' +
                  'A ARMADILHA: "because it is better for the environment" nao e exemplo, e ' +
                  'outra opiniao. Exemplo tem numero, nome, data ou caso. Se a sua frase ' +
                  'depois de "for example" pudesse abrir um debate, ela nao e um exemplo.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:op:1',
                title: '💭 Which one gives a real EXAMPLE?',
                main: '',
                options: DF.shuffle([
                  { label: 'One family cut seventeen per cent by unplugging appliances.',
                    correct: true },
                  { label: 'It is much better for the environment.' },
                  { label: 'Everybody knows solar is the future.' },
                  { label: 'It is the right thing to do.' }
                ]),
                expl: 'Número + caso concreto. As outras três são opiniões disfarçadas.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w3:op:2', unit: 3, waSec: 'Opinion',
                title: '💭 Which side are you on?',
                prompt: 'Say whether you would vote yes or no in Porto Verde, and support it ' +
                        'with ONE specific example from the text.',
                example: 'I would vote yes. The generator already runs nineteen hours a day, ' +
                         'and a machine from 1978 running nineteen hours a day is not a plan, ' +
                         'it is a countdown.',
                mustUse: ['because'],
                expl: 'Este é o outcome 3. O exemplo tem que ser do texto, não uma segunda ' +
                      'opinião.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w3:op:3', unit: 3, waSec: 'Opinion',
                title: '💭 Now argue the other side',
                prompt: 'Whichever side you chose, argue the opposite for thirty seconds. ' +
                        'Use one fact from the text.',
                example: '(30 segundos)',
                expl: 'É o outcome 2 na prática: você só entende os prós e contras quando ' +
                      'consegue defender os dois.' }
            ]
          },

          {
            id: 'diet', icon: '🍽️', name: 'Your own energy diet', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w3:dt:1',
                title: '🍽️ Which of these is realistic for most people?',
                main: 'Be honest, not virtuous.',
                options: DF.shuffle([
                  { label: 'Unplugging chargers when they are not in use', correct: true },
                  { label: 'Giving up the car completely' },
                  { label: 'Never using hot water again' },
                  { label: 'Growing all your own food' }
                ]),
                expl: 'A mudança que gruda é a de custo quase zero. As outras três são a ' +
                      'razão pela qual desafios de energia fracassam.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w3:dt:2', unit: 3, waSec: 'Energy diet',
                title: '🍽️ One change you will make',
                prompt: 'Name ONE change you will actually make, and say when you will start. ' +
                        'Use will.',
                example: 'Starting this weekend, I will unplug the TV and the microwave at ' +
                         'night. I will not pretend I am going to sell the car.',
                mustUse: ['will'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w3:dt:3', unit: 3, waSec: 'Energy diet',
                title: '🍽️ One you already do',
                prompt: 'Name something you already do, and how long you have been doing it.',
                example: "I've been hanging clothes outside for years — in this climate a " +
                         'dryer makes no sense anyway.',
                mustUse: ['have'],
                expl: 'Repare: aqui volta o present perfect da unidade 1. As unidades não são ' +
                      'compartimentos.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w3:dt:4', unit: 3, waSec: 'Energy diet',
                title: '🍽️ One that seems impossible',
                prompt: 'Name one item on any energy list that you honestly cannot do, and ' +
                        'explain the real reason.',
                example: 'I cannot use public transport. There is one bus an hour and my ' +
                         'shift starts at five.',
                mustUse: ['cannot'] }
            ]
          },

          {
            id: 'practice-w3', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'gra', srsId: 'wc1u3w3:ord:1',
                title: '🧩 Build the concession:',
                answer: 'Although the panels are expensive they last for twenty five years',
                expl: 'Although + concessão, vírgula, e o ponto real depois.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w3:wr:1',
                title: '📝 Complete:', main: '___ the report, bills will fall by a third.',
                options: DF.shuffle([
                  { label: 'According to', correct: true }, { label: 'According' },
                  { label: 'In according to' }, { label: 'Accordingly to' }
                ]),
                expl: '<b>According to</b> + fonte. É como se cita sem parecer arrogante.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u3w3:wr:2',
                title: '📝 Complete:', main: 'The only real ___ is who pays for the cabling.',
                options: DF.shuffle([
                  { label: 'roadblock', correct: true }, { label: 'injustice' },
                  { label: 'impact' }, { label: 'source' }
                ]),
                expl: 'roadblock = o entrave que trava o progresso.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w3+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 The full pros and cons, out loud',
                prompt: 'Give two advantages and two drawbacks of the Porto Verde plan, ' +
                        'using However and In addition.',
                example: '(60 segundos)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w3+:b2', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Answer the fishing families',
                prompt: 'A fishing family says the loan is unfair to them. You support the ' +
                        'project. Answer them WITHOUT dismissing the point.',
                example: 'You are right that the rate is the same, and that is a real ' +
                         'problem. What I would argue is…',
                mustUse: ['right'],
                expl: 'Conceder antes de virar é a jogada mais forte de argumentação — e a ' +
                      'que quase ninguém treina.' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de opinião', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'In my opinion, we should invest in ___.', pool: 'energySrc',
                  focus: 'opinião', ptHint: 'Na minha opinião, deveríamos investir em ___.', n: 5 },
                { frame: 'I will start ___ this month.', pool: 'energyAct',
                  focus: 'compromisso', ptHint: 'Vou começar a ___ este mês.', n: 5 }
              ],
              backchain: [
                { text: 'In my opinion, we should invest in {energySrc}.',
                  ptHint: 'Na minha opinião…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Writing · Speaking · Outcomes',
        goal: 'Persuade someone to change one thing, in writing and in sixty seconds of speech.',
        comp: 'Você escreve um parágrafo persuasivo com fonte citada e grava um anúncio de ' +
              'utilidade pública que faz alguém mudar de comportamento.',
        live: [
          'Writing: the persuasive paragraph and the Writing Strategy',
          'Instead of / Rather than / By + gerund',
          'The TIP on citing a source with "according to"',
          'Speaking: creating a 45–60 second public service announcement',
          'Expanding Your Fluency: the -ion suffix chart + Check What You Know'
        ],
        bridge: 'Na aula você escreveu o parágrafo e apresentou o anúncio pra turma. Aqui as ' +
                'três estruturas persuasivas viram drill, o anúncio ganha cronômetro, e o ' +
                'sufixo -ion reencontra a regra de tônica da unidade 2.',
        nextLive: 'Unidade 4 · The World\'s a Stage — complementos com infinitivo, e analisar ' +
                  'um contrato.',
        ican: [
          'I can use Instead of, Rather than and By with the correct verb form.',
          'I can cite a source to make a claim harder to dismiss.',
          'I can write a paragraph that asks for one specific change.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'persuade', icon: '🎯', name: 'The three persuasive structures', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u3w4:read:pers',
                title: '🎯 Instead of · Rather than · By',
                textTitle: 'Being persuasive',
                readAloud: false,
                text:
                  'THE THREE STRUCTURES — all three take -ing.\n\n' +
                  'INSTEAD OF + -ing — replace one thing with another\n' +
                  'Instead of driving to work, take the bus twice a week.\n\n' +
                  'RATHER THAN + -ing — same idea, slightly more formal\n' +
                  'Rather than buying a new one, repair the one you have.\n\n' +
                  'BY + -ing — the MEANS, how the result happens\n' +
                  'By unplugging your chargers, you will save more than you expect.\n\n' +
                  'THE SKELETON OF THE PARAGRAPH\n' +
                  'For one thing, …   (first reason)\n' +
                  'In addition, …      (second reason)\n' +
                  'However, …          (the honest drawback — this is what makes you credible)\n' +
                  'So remember: …      (the single action you want)\n\n' +
                  'CITE YOUR SOURCE. "According to the town report, bills fell by a third" is ' +
                  'far harder to argue with than "bills fell a lot".\n\n' +
                  'A ARMADILHA: as tres estruturas pedem -ing porque OF, THAN e BY funcionam ' +
                  'como preposicao. "Instead of to drive" e "By unplug" estao errados. E a ' +
                  'mesma regra da unidade 2 (look forward TO going) com outra roupa.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w4:ps:1',
                title: '🎯 Complete:', main: 'Instead of ___ everywhere, walk when you can.',
                options: DF.shuffle([
                  { label: 'driving', correct: true }, { label: 'to drive' },
                  { label: 'drive' }, { label: 'you drive' }
                ]),
                expl: 'Instead <b>of</b> = preposição → -ing.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w4:ps:2',
                title: '🎯 Complete:', main: '___ recycling paper, you reduce demand for new trees.',
                options: DF.shuffle([
                  { label: 'By', correct: true }, { label: 'For' },
                  { label: 'With' }, { label: 'To' }
                ]),
                expl: 'By + -ing = o meio pelo qual o resultado acontece.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w4:ps:3',
                title: '🎯 Which is WRONG?',
                main: 'Only one breaks the preposition rule.',
                options: DF.shuffle([
                  { label: 'Rather than to buy new, repair it.', correct: true },
                  { label: 'Rather than buying new, repair it.' },
                  { label: 'Instead of buying new, repair it.' },
                  { label: 'By repairing it, you save money.' }
                ]),
                expl: 'Rather <b>than</b> + -ing. Nunca "than to buy".' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w4:ps:4',
                title: '🎯 Which sentence is more persuasive?',
                main: 'Both are true.',
                options: DF.shuffle([
                  { label: 'According to the town report, bills fell by a third.',
                    correct: true },
                  { label: 'Bills fell a lot after the change.' },
                  { label: 'Everyone says bills went down.' },
                  { label: 'I believe bills probably went down.' }
                ]),
                expl: 'Fonte + número. As outras três podem ser negadas sem custo nenhum.' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u3w4:ps:5',
                title: '🔗 Match each connector to its job:',
                pairs: [
                  ['For one thing,', 'the first reason'],
                  ['In addition,', 'the second reason'],
                  ['However,', 'the honest drawback'],
                  ['So remember:', 'the single action you want'],
                  ['According to,', 'the source']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u3w4:ps:6',
                title: '🧩 Build the persuasive sentence:',
                answer: 'By unplugging your chargers at night you will save more than you expect',
                expl: 'By + -ing, e o resultado com will.' }
            ]
          },

          {
            id: 'writing', icon: '✍️', name: 'Write the persuasive paragraph', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4:wr:1', unit: 3, waSec: 'Writing',
                title: '✍️ Sentence 1 — name the change',
                prompt: 'State clearly the ONE change you want people to make. One sentence, ' +
                        'no warm-up.',
                example: 'Unplug the appliances you are not using before you go to bed.',
                mustUse: ['the'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4:wr:2', unit: 3, waSec: 'Writing',
                title: '✍️ Sentence 2 — reason one, with a source',
                prompt: 'Give your first reason and cite where the fact comes from.',
                example: 'For one thing, according to the energy challenge, one household cut ' +
                         'seventeen per cent doing only this.',
                mustUse: ['according to'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4:wr:3', unit: 3, waSec: 'Writing',
                title: '✍️ Sentence 3 — reason two, using By + -ing',
                prompt: 'Give a second reason, and use By + -ing.',
                example: 'In addition, by unplugging things at night you also protect them ' +
                         'from the power cuts we get every summer.',
                mustUse: ['by'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4:wr:4', unit: 3, waSec: 'Writing',
                title: '✍️ Sentence 4 — the honest drawback',
                prompt: 'Admit one real inconvenience. Use However.',
                example: 'However, it does mean resetting the microwave clock every morning, ' +
                         'which is genuinely annoying.',
                mustUse: ['however'],
                expl: 'Admitir o inconveniente é o que torna o resto crível. Texto persuasivo ' +
                      'sem contrapartida soa a propaganda.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4:wr:5', unit: 3, waSec: 'Writing',
                title: '✍️ Sentence 5 — close with the action',
                prompt: 'Close with the single thing you want them to do. Use So remember.',
                example: 'So remember: one minute at night, and the difference shows up on ' +
                         'the bill you get in sixty days.',
                mustUse: ['remember'],
                expl: 'Mande as cinco frases juntas por escrito — este é o entregável escrito ' +
                      'da unidade.' }
            ]
          },

          {
            id: 'psa', icon: '📢', name: 'The public service announcement', tag: 'speaking', sp: true,
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u3w4:dlg:1',
                title: '📢 A PSA that works, and why',
                sub: 'Sessenta segundos. Repare na ordem das jogadas.',
                lines: [
                  { who: 'Voice', en: 'Your microwave is using power right now. So is your ' +
                                      'television, and it is switched off.' },
                  { who: 'Voice', en: 'According to the town survey, standby power is eleven ' +
                                      'per cent of an average bill here.' },
                  { who: 'Voice', en: 'Instead of leaving everything plugged in, use one power ' +
                                      'strip and switch it off at night.' },
                  { who: 'Voice', en: 'However, it will not fix your bill on its own. Nothing ' +
                                      'will. It is just the cheapest place to start.' },
                  { who: 'Voice', en: 'One switch. Every night. Start tonight.' }
                ],
                question: 'Why does the announcement admit it will not fix the bill?',
                options: DF.shuffle([
                  { label: 'Admitting the limit makes the rest believable', correct: true },
                  { label: 'To discourage people from trying' },
                  { label: 'Because the survey was unreliable' },
                  { label: 'To fill the sixty seconds' }
                ]),
                expl: 'Exagerar é o que faz o ouvinte desligar. A contrapartida honesta compra ' +
                      'credibilidade — e é a jogada "However" da tela anterior.'
              },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u3w4:rep:1', unit: 3, waSec: 'PSA',
                title: '🎤 The hook — a fact about the listener:',
                target: 'Your television is using power right now, and it is switched off.',
                ptHint: 'Sua TV está gastando energia agora, e está desligada.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u3w4:rep:2', unit: 3, waSec: 'PSA',
                title: '🎤 The instead-of move:',
                target: 'Instead of leaving everything plugged in, use one power strip.',
                ptHint: 'Em vez de deixar tudo na tomada, use um filtro de linha só.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u3w4:rep:3', unit: 3, waSec: 'PSA',
                title: '🎤 The close — short, and dated:',
                target: 'One switch. Every night. Start tonight.',
                ptHint: 'Um botão. Toda noite. Comece hoje.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4:psa:1', unit: 3, waSec: 'PSA',
                title: '📢 Your hook',
                prompt: 'Open your own PSA with a fact about the listener, not about the ' +
                        'planet.',
                example: 'You paid for eleven per cent of your last bill without using ' +
                         'anything.',
                mustUse: ['you'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4:psa:2', unit: 3, waSec: 'PSA',
                title: '📢 Your full announcement — 45 to 60 seconds',
                prompt: 'Record the whole thing: hook, the change, two reasons with a source, ' +
                        'one honest drawback, and a short close.',
                example: '(45 a 60 segundos, sem cortes)',
                mustUse: ['instead of'],
                expl: 'Este é o outcome 4 da unidade e o entregável falado. O professor ' +
                      'cronometra: menos de 45 ou mais de 60 já perde ponto.' }
            ]
          },

          {
            id: 'suffix', icon: '🔤', name: 'The -ion suffix', tag: 'vocabulário',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'wc1u3w4:sfx:1',
                title: '🔗 Match the verb to its noun:',
                pairs: [
                  ['consume', 'consumption'],
                  ['convert', 'conversion'],
                  ['eliminate', 'elimination'],
                  ['generate', 'generation'],
                  ['pollute', 'pollution']
                ] },
              { ui: 'match', cat: 'voc', srsId: 'wc1u3w4:sfx:2',
                title: '🔗 Match the verb to its noun:',
                pairs: [
                  ['prevent', 'prevention'],
                  ['produce', 'production'],
                  ['project', 'projection'],
                  ['reduce', 'reduction'],
                  ['transmit', 'transmission']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'wc1u3w4:sfx:3',
                title: '✍️ Write the noun form of "consume":',
                answers: ['consumption'],
                expl: 'Irregular: consume → consumption (não "consumation").' },
              { ui: 'type', cat: 'voc', srsId: 'wc1u3w4:sfx:4',
                title: '✍️ Write the noun form of "reduce":',
                answers: ['reduction'],
                expl: 'reduce → reduction. O -ce vira -ction.' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u3w4:sfx:5', word: 'consumption',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'con-SUMP-tion',
                expl: 'O -ion puxa a força pra sílaba anterior — exatamente a regra da ' +
                      'unidade 2.' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u3w4:sfx:6', word: 'transmission',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'trans-MI-ssion' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u3w4:sfx:7',
                title: '🔤 Complete:', main: 'Should we completely eliminate cars, or just cut ' +
                       'back on ___?',
                options: DF.shuffle([
                  { label: 'consumption', correct: true }, { label: 'consume' },
                  { label: 'consuming', }, { label: 'consumed' }
                ]),
                expl: 'Depois de "on" precisa de substantivo → consumption.' }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u3w4:chk:1', unit: 3, idx: 0,
                statement: 'I can refine my use of future tenses.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u3w4:chk:2', unit: 3, idx: 1,
                statement: 'I can identify the pros and cons of an issue.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u3w4:chk:3', unit: 3, idx: 2,
                statement: 'I can express an opinion and give examples to support it.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u3w4:chk:4', unit: 3, idx: 3,
                statement: 'I can persuade an audience to make a change.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w4:pt:1',
                title: '📝 Complete:', main: '"The bag is heavy." — "___ carry it."',
                options: DF.shuffle([
                  { label: "I'll", correct: true }, { label: "I'm going to" },
                  { label: 'I am' }, { label: 'I will be' }
                ]),
                expl: 'Decisão tomada agora → will.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w4:pt:2',
                title: '📝 Complete:', main: 'This time next year we ___ on solar power.',
                options: DF.shuffle([
                  { label: 'will be running', correct: true }, { label: 'will run' },
                  { label: 'run' }, { label: 'are running' }
                ]),
                expl: 'Ação em curso num ponto do futuro → will be + -ing.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u3w4:pt:3',
                title: '📝 Which is WRONG?',
                main: '',
                options: DF.shuffle([
                  { label: 'Instead of to drive, take the bus.', correct: true },
                  { label: 'Instead of driving, take the bus.' },
                  { label: 'Rather than driving, take the bus.' },
                  { label: 'By taking the bus, you save money.' }
                ]),
                expl: 'Instead <b>of</b> + -ing.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u3w4:pt:4',
                title: '📝 Noun or verb?', main: 'Engineers proJECT a sharp rise.',
                options: DF.shuffle([
                  { label: 'Verb', correct: true }, { label: 'Noun' }
                ]),
                expl: 'Força na segunda sílaba → verbo.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u3w4:pt:5',
                title: '📝 In "Although the panels are expensive, they last decades", what does ' +
                       'the writer think?',
                main: '',
                options: DF.shuffle([
                  { label: 'They are worth it', correct: true },
                  { label: 'They are not worth it' },
                  { label: 'They break quickly' },
                  { label: 'No opinion is given' }
                ]),
                expl: 'A opinião mora na segunda metade, sempre.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u3w4:pt:6',
                title: '📝 Complete:', main: 'The town still ___ a generator from 1978.',
                options: DF.shuffle([
                  { label: 'relies on', correct: true }, { label: 'relies' },
                  { label: 'rely on' }, { label: 'is relying' }
                ]),
                expl: 'rely on, terceira pessoa.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u3w4:pt:7',
                title: '🔗 Match the form to its use:',
                pairs: [
                  ["I'm voting on Sunday.", 'definite plan'],
                  ['Demand will double by 2040.', 'prediction'],
                  ["I'll send it tonight.", 'promise'],
                  ['We will be using solar.', 'ongoing future'],
                  ['Look — it is going to rain.', 'evidence right now']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u3w4:pt:8',
                title: '🧩 Build the persuasive close:',
                answer: 'So remember by unplugging your chargers you will save more than you expect',
                expl: 'So remember + By + -ing + resultado com will.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full announcement', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Sixty seconds, no notes, no second take',
                prompt: 'Record your PSA again — one take, no script in front of you.',
                example: '(45 a 60 segundos)',
                expl: 'A primeira gravação você leu. Esta é a que mede a competência.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u3w4+:b2', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Persuade someone who disagrees',
                prompt: 'Someone tells you individual changes are pointless because industry ' +
                        'causes most emissions. Answer without dismissing them.',
                example: 'You are right that industry is the bigger share. What I would say ' +
                         'is…',
                mustUse: ['right'] }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de persuasão', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Instead of driving, try ___.', pool: 'energyAct',
                  focus: 'Instead of + -ing', ptHint: 'Em vez de dirigir, tente ___.', n: 5 },
                { frame: 'By ___, you will save more than you expect.', pool: 'energyAct',
                  focus: 'By + -ing', ptHint: '___, você vai economizar mais do que imagina.', n: 5 }
              ],
              backchain: [
                { text: 'By {energyAct}, you will save more than you expect.',
                  ptHint: '…, você vai economizar mais do que imagina.' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
