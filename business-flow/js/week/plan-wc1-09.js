/* ENGLISH FLOW — week/plan-wc1-09.js
   WORLD CLASS ONE · UNIT 9 "In the Wild" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: o Spirit Bear, o geo-fencing dos elefantes, o
                    folheto do koala, o debate sobre zoológicos, os bonobos.
     APP          → THE FIELD LEDGER, projeto fictício de monitoramento de
                    fauna que marca e rastreia animais e publica campanhas de
                    conscientização. 100% autoral (item 20).

   Por que este cenário: a unidade cobra voz passiva (o animal É marcado, FOI
   solto, TEM SIDO rastreado — a passiva é a voz natural de um relatório de
   campo), outline pra resumir, conscientizar sobre uma causa, e escrever
   frases de abertura fortes. Um projeto de monitoramento que publica
   relatórios e campanhas hospeda os quatro outcomes sem tocar no Spirit Bear
   nem no koala do livro.

     outcome 1 (passive voice)         → o relatório de campo
     outcome 2 (outline to summarize)  → a estrutura do relatório anual
     outcome 3 (raise awareness)       → a campanha publicada
     outcome 4 (strong opening lines)  → a manchete que faz o leitor parar

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026).

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (Review of Passive Voice)
     Semana 2 · Listening (detecting uncertainty) + Connections
     Semana 3 · Reading + Video + Speaking
     Semana 4 · Writing + Expanding Your Fluency + Outcomes

   Fonte completa: s33 a s36 (a s34 chegou depois das outras e confirmou o
   conteúdo da semana 2 — Listening sobre bonobos com a Strategy "Listening
   for probability", e Connections sobre clonagem e dilemas éticos). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.wildAnimal = ['the jaguar', 'the sea turtle', 'the golden lion tamarin',
                                'the maned wolf', 'the harpy eagle', 'the river dolphin'];
    DF.WGEN.POOLS.fieldAction = ['tagged', 'released', 'tracked', 'photographed',
                                 'weighed and measured', 'fitted with a collar'];
    DF.WGEN.POOLS.threat = ['habitat loss', 'illegal hunting', 'pesticide use',
                            'road construction', 'the illegal pet trade', 'water pollution'];
  }

  const WORDS = [
    { en: 'attack', pt: 'atacar',
      def: 'to try to hurt someone with physical violence',
      ex: 'The collar was damaged when the animal was attacked by another male.' },
    { en: 'capture', pt: 'capturar',
      def: 'to catch a person or animal and confine it',
      ex: 'Two adults were captured, measured, and released within forty minutes.' },
    { en: 'cruel', pt: 'cruel',
      def: 'very mean or unkind',
      ex: 'Keeping a wild bird in a cage that size is simply cruel.' },
    { en: 'domesticated', pt: 'domesticado',
      def: 'raised by people for agricultural purposes or as household pets',
      ex: 'Dogs were domesticated at least fifteen thousand years ago.' },
    { en: 'endangered', pt: 'em perigo de extinção',
      def: 'in danger of dying out completely',
      ex: 'The species was listed as endangered three years before the project started.' },
    { en: 'evolve', pt: 'evoluir',
      def: 'to slowly change and develop over time into a different form',
      ex: 'The population has evolved a smaller body size in the last century.' },
    { en: 'hunt', pt: 'caçar',
      def: 'to chase and kill an animal, usually for food',
      ex: 'The animals are still hunted illegally, despite the ban.' },
    { en: 'species', pt: 'espécie',
      def: 'a class of plants or animals that have the same characteristics',
      ex: 'Four species were recorded in the same valley for the first time.' },
    { en: 'train', pt: 'treinar / adestrar',
      def: 'to teach a person or animal how to do something',
      ex: 'The dogs are trained to detect the scent without disturbing the nests.' },
    { en: 'treat', pt: 'tratar',
      def: 'to behave in a certain way toward someone',
      ex: 'The animals were treated well, which is more than the previous facility managed.' },
    { en: 'wild', pt: 'selvagem',
      def: 'free, untamed, not taken care of by people',
      ex: 'Only about four hundred remain in the wild, according to the last count.' }
  ];

  const EXTRA_WORDS = [
    { en: 'alert ·+', pt: 'alerta',
      def: 'a warning or alarm',
      ex: 'An alert is sent automatically when a collar stops moving for six hours.' },
    { en: 'clone ·+', pt: 'clone',
      def: 'a genetic copy of an animal made in a lab using another animal\'s DNA',
      ex: 'Cloning was discussed as an option and rejected by the committee.' },
    { en: 'collar ·+', pt: 'coleira',
      def: 'an item an animal wears around its neck',
      ex: 'The collar was fitted loosely enough to allow for growth.' },
    { en: 'intercept ·+', pt: 'interceptar',
      def: 'to interrupt and stop something from happening',
      ex: 'The herd was intercepted before it reached the farmland.' },
    { en: 'pesticide ·+', pt: 'pesticida / agrotóxico',
      def: 'chemicals put on plants to kill insects',
      ex: 'Pesticide use is suspected, but it has not been confirmed.' },
    { en: 'tag ·+', pt: 'marcar / etiqueta de rastreio',
      def: 'a device attached to an animal that sends a signal',
      ex: 'Every animal in the study is tagged before release.' },
    { en: 'habitat ·+', pt: 'habitat',
      def: 'the natural environment where an animal lives',
      ex: 'Most of the original habitat has been converted to pasture.' },
    { en: 'poacher ·+', pt: 'caçador ilegal',
      def: 'someone who hunts illegally',
      ex: 'Two poachers were arrested after the alert was triggered.' }
  ];

  DF.PLAN.wc1[9] = {
    unit: 9,
    title: 'In the Wild',
    subtitle: 'Seu nono mês',
    icon: '🐆',

    mindmap: {
      center: 'In the Wild',
      sub: 'Relatar com voz passiva, resumir com outline, e fazer alguém se importar',
      branches: [
        {
          icon: '🐾', name: 'Wildlife vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>species</b> é igual no singular e no plural — "one species", "four ' +
                'species". "One specie" não existe.'
        },
        {
          icon: '🔄', name: 'Passive voice — how to build it',
          leaves: [
            { en: 'The animals are kept in tiny cages.', pt: 'simple present: am/is/are + particípio' },
            { en: 'Dogs were domesticated 15,000 years ago.', pt: 'simple past: was/were + particípio' },
            { en: 'They have been trained to do rescue work.', pt: 'present perfect: have been + particípio' },
            { en: 'The cat is being cared for by a volunteer.', pt: 'present continuous: is being + particípio' },
            { en: 'The cat will be returned tomorrow.', pt: 'simple future: will be + particípio' },
            { en: 'Parrots can be taught to speak.', pt: 'com modal: modal + be + particípio' }
          ],
          note: 'A fórmula é sempre a mesma: <b>uma forma de BE + o particípio passado</b>. ' +
                'O que muda é só o tempo do verbo "be". Domine isso e você domina todas as seis.'
        },
        {
          icon: '❓', name: 'When to use the passive',
          leaves: [
            { en: 'Parrots can be taught to speak.', pt: 'quem faz é ÓBVIO (nós, humanos)' },
            { en: 'The boy was bitten by a spider.', pt: 'a AÇÃO importa mais que quem fez' },
            { en: 'Two adults were captured and released.', pt: 'relatório: o agente é irrelevante' }
          ],
          note: 'Use a passiva quando <b>quem fez a ação é óbvio, genérico ou irrelevante</b>. ' +
                'É por isso que relatórios científicos e de campo são cheios de passiva — o ' +
                'foco é o que aconteceu, não quem fez.'
        },
        {
          icon: '👤', name: 'by + noun: when to include it',
          leaves: [
            { en: 'The lost cat was found by a neighbor.', pt: 'inclui — a informação importa' },
            { en: 'Parrots can be taught to speak.', pt: 'omite — óbvio que é por humanos' },
            { en: 'The herd was intercepted before dawn.', pt: 'omite — irrelevante quem interceptou' }
          ],
          note: '<b>Armadilha:</b> só inclua <b>by + alguém</b> se essa informação realmente ' +
                'acrescenta algo. "Parrots can be taught by humans to speak" soa redundante — ' +
                'por quem mais seriam ensinados?'
        },
        {
          icon: '📋', name: 'The outline that summarizes',
          leaves: [
            { en: 'I. Intro — main idea', pt: 'a tese em uma frase' },
            { en: '   A. supporting point', pt: 'primeiro apoio' },
            { en: 'II. Body — main idea', pt: 'o argumento central' },
            { en: 'III. Conclusion — main idea', pt: 'o fecho' }
          ],
          note: 'O outline não é rascunho — é a <b>estrutura</b>. Se você não consegue escrever ' +
                'a ideia principal de cada bloco em uma frase, o texto ainda não está pronto ' +
                'pra ser escrito.'
        },
        {
          icon: '🎯', name: 'Getting a reader\'s attention',
          leaves: [
            { en: 'Does having a pet make you healthier?', pt: 'pergunta que faz pensar' },
            { en: 'In the last twenty years, 96% of these bees have vanished.', pt: 'fato surpreendente' },
            { en: 'Adopt a dog. Save a life.', pt: 'apelo emocional, curto' }
          ],
          note: 'Três aberturas que funcionam: <b>pergunta</b>, <b>número surpreendente</b>, ou ' +
                '<b>apelo emocional curto</b>. O que NÃO funciona é começar explicando o que ' +
                'você vai explicar.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🐆',
        title: 'Mastering the Passive',
        goal: 'Use all six forms of the passive voice, and know when the passive is the right choice.',
        comp: 'Você relata fatos usando a voz passiva nos seis tempos, e decide quando incluir ' +
              'ou omitir o "by + agente".',
        live: [
          'The unit opener: the snow monkeys photo and warm-up questions',
          'Vocabulary: matching animals to facts about domestication',
          'Grammar: Review of Passive Voice — the six-row chart',
          'Rewriting active sentences in the passive',
          'Pair work: what should be done about the issues in the exercise'
        ],
        bridge: 'Na aula você completou a tabela das seis formas e reescreveu as frases do ' +
                'livro. Aqui a passiva vira relatório de campo do Field Ledger — que é o ' +
                'contexto onde ela realmente é usada — e você ganha 8 palavras que o Word Bank ' +
                'não traz.',
        nextLive: 'Semana 2 · Listening + Connections — detectar incerteza na fala de um ' +
                  'especialista.',
        ican: [
          'I can form the passive in six different tenses.',
          'I can decide when the passive is a better choice than the active.',
          'I can decide when to include or omit "by + agent".',
          'I can use the unit vocabulary to describe wildlife issues.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u9w1:cards:core',
                title: '📇 Eleven words for the wild',
                sub: 'Exemplos do Field Ledger — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u9w1:cards:extra',
                title: '➕ Eight the Word Bank does not give you',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'wordform', icon: '🔤', name: 'Precision, not synonyms', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u9w1:wf:1',
                title: '🔤 Which is correct?',
                main: 'Four ___ were recorded in the same valley.',
                options: DF.shuffle([
                  { label: 'species', correct: true }, { label: 'specie' },
                  { label: 'specieses' }, { label: 'specy' }
                ]),
                expl: 'species é igual no singular e plural. "specie" não existe em inglês.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u9w1:wf:2',
                title: '🔤 Which word fits?',
                main: 'The species was listed as ___ three years ago.',
                options: DF.shuffle([
                  { label: 'endangered', correct: true }, { label: 'domesticated' },
                  { label: 'wild' }, { label: 'cruel' }
                ]),
                expl: 'endangered = em risco de extinção.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u9w1:wf:3',
                title: '🔤 Which is the noun form?',
                main: 'The ___ of dogs began at least fifteen thousand years ago.',
                options: DF.shuffle([
                  { label: 'domestication', correct: true }, { label: 'domesticated' },
                  { label: 'domestic' }, { label: 'domesticate' }
                ]),
                expl: 'domestication = substantivo.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u9w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['evolve', 'to change slowly over time'],
                  ['intercept', 'to stop something from happening'],
                  ['pesticide', 'chemicals used to kill insects'],
                  ['habitat', 'the natural environment of an animal'],
                  ['poacher', 'someone who hunts illegally']
                ] }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Passive voice at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u9w1:read:glance',
                title: '🔍 One formula, six tenses',
                textTitle: 'Review of the passive voice',
                readAloud: false,
                text:
                  'THE FORMULA IS ALWAYS THE SAME: a form of BE + the past participle.\n' +
                  'Only the tense of "be" changes.\n\n' +
                  'SIMPLE PRESENT    The animals ARE kept in tiny cages.\n' +
                  'SIMPLE PAST       Dogs WERE domesticated 15,000 years ago.\n' +
                  'PRESENT PERFECT   They HAVE BEEN trained to do rescue work.\n' +
                  'PRESENT CONT.     The cat IS BEING cared for by a volunteer.\n' +
                  'SIMPLE FUTURE     The cat WILL BE returned tomorrow.\n' +
                  'WITH A MODAL      Parrots CAN BE taught to speak.\n\n' +
                  'WHEN TO USE THE PASSIVE\n' +
                  '- when who did it is OBVIOUS: Parrots can be taught to speak. (by humans, ' +
                  'clearly)\n' +
                  '- when who did it is a GENERAL group: Cats are kept as pets.\n' +
                  '- when the ACTION matters more than the agent: The boy was bitten by a ' +
                  'spider.\n\n' +
                  'BY + NOUN: only include it if it adds real information.\n' +
                  'The lost cat was found BY A NEIGHBOR. (useful — include it)\n' +
                  'Parrots can be taught to speak. (by whom else? — omit it)\n\n' +
                  'A ARMADILHA DO BRASILEIRO: o particípio passado dos verbos irregulares. ' +
                  '"The bird was BITTEN" (nao "bited"), "the collar was PUT on" (nao "putted"), ' +
                  '"two adults were TAKEN" (nao "taked"). A passiva expoe todo erro de ' +
                  'participio irregular — nao ha como esconder.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w1:pv:1',
                title: '🎯 Choose the correct passive form:',
                main: 'Every year, thousands of cats and dogs ___ by their owners. (simple present)',
                options: DF.shuffle([
                  { label: 'are abandoned', correct: true }, { label: 'is abandoned' },
                  { label: 'were abandoned' }, { label: 'have abandoned' }
                ]),
                expl: 'simple present, sujeito plural → are + particípio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w1:pv:2',
                title: '🎯 Choose the correct passive form:',
                main: 'In the last forty years, almost 20% of the rain forest ___. (present perfect)',
                options: DF.shuffle([
                  { label: 'has been cut down', correct: true }, { label: 'was cut down' },
                  { label: 'is cut down' }, { label: 'have been cut down' }
                ]),
                expl: 'present perfect, sujeito singular (20% of the forest) → has been + ' +
                      'particípio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w1:pv:3',
                title: '🎯 Choose the correct passive form:',
                main: 'The animal shelter ___ the cat to its owner tomorrow. Rewrite as passive:',
                options: DF.shuffle([
                  { label: 'The cat will be returned to its owner tomorrow.', correct: true },
                  { label: 'The cat will return to its owner tomorrow.' },
                  { label: 'The cat is returned to its owner tomorrow.' },
                  { label: 'The cat has been returned to its owner tomorrow.' }
                ]),
                expl: 'simple future passivo → will be + particípio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w1:pv:4',
                title: '🎯 Choose the correct passive form:',
                main: 'Dogs ___ on a leash in this park. (with modal: should)',
                options: DF.shuffle([
                  { label: 'should be kept', correct: true }, { label: 'should kept' },
                  { label: 'should be keep' }, { label: 'should being kept' }
                ]),
                expl: 'modal + BE + particípio. Sempre "be" entre o modal e o particípio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w1:pv:5',
                title: '🎯 Should "by + agent" be included here?',
                main: 'Parrots can be taught to speak (by humans).',
                options: DF.shuffle([
                  { label: 'No — it is obvious who teaches them', correct: true },
                  { label: 'Yes — it adds important information' }
                ]),
                expl: 'Por quem mais seriam ensinados? Omitir.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w1:pv:6',
                title: '🎯 Which irregular participle is correct?',
                main: 'The researcher was ___ by a spider during the survey.',
                options: DF.shuffle([
                  { label: 'bitten', correct: true }, { label: 'bited' },
                  { label: 'bite' }, { label: 'biting' }
                ]),
                expl: 'bite → bit → <b>bitten</b>. A passiva sempre pede o particípio.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u9w1:pv:7',
                title: '🧩 Build the passive sentence:',
                answer: 'Two adults were captured measured and released within forty minutes',
                expl: 'simple past passivo, três particípios em série.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Active to passive', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u9w1:tf:1',
                title: '🔀 Passive transformation',
                rounds: [
                  { base: 'The animals are kept in cages.', cmd: 'Question',
                    answers: ['Are the animals kept in cages?'] },
                  { base: 'The collar was fitted correctly.', cmd: 'Negative',
                    answers: ["The collar wasn't fitted correctly.",
                              'The collar was not fitted correctly.'] },
                  { base: 'The herd has been tracked for months.', cmd: 'Question',
                    answers: ['Has the herd been tracked for months?'] },
                  { base: 'Parrots can be taught to speak.', cmd: 'Negative',
                    answers: ["Parrots can't be taught to speak.",
                              'Parrots cannot be taught to speak.'] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u9w1:drl:animal', unit: 9, waSec: 'Drill · passiva',
                title: '🔁 Drill 1 — the animal changes', focus: 'passiva no passado',
                frame: '___ was tagged and released this morning.',
                ptHint: '___ foi marcado e solto hoje de manhã.',
                slots: ['The jaguar', 'The sea turtle', 'The maned wolf', 'The harpy eagle',
                        'The river dolphin'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u9w1:drl:action', unit: 9, waSec: 'Drill · passiva',
                title: '🔁 Drill 2 — the action changes', focus: 'particípio passado',
                frame: 'Every animal in the study is ___.',
                ptHint: 'Todo animal do estudo é ___.',
                slots: ['tagged', 'tracked', 'photographed', 'weighed and measured',
                        'fitted with a collar'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u9w1:drl:threat', unit: 9, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 3 — the threat changes', focus: 'vocabulário',
                frame: 'The population is threatened by ___.',
                ptHint: 'A população está ameaçada por ___.',
                slots: ['habitat loss', 'illegal hunting', 'pesticide use',
                        'road construction', 'water pollution'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u9w1:bc:1', unit: 9, waSec: 'Backchain',
                title: '🧱 The field report sentence',
                ptHint: 'Dois adultos foram capturados, medidos e soltos em quarenta minutos.',
                chain: ['in forty minutes', 'released in forty minutes',
                        'captured, measured, and released in forty minutes',
                        'Two adults were captured, measured, and released in forty minutes.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u9w1:bc:2', unit: 9, waSec: 'Backchain',
                title: '🧱 The present perfect passive',
                ptHint: 'Quase vinte por cento da floresta foi derrubada nos últimos quarenta anos.',
                chain: ['forty years', 'in the last forty years',
                        'has been cut down in the last forty years',
                        'Almost twenty per cent of the forest has been cut down in the last ' +
                        'forty years.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u9w1:dlg:1',
                title: '🎧 A field report by radio',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'Two adults were captured this morning. Both were tagged ' +
                                      'and released.' },
                  { who: 'Elias', en: 'Were they weighed as well?' },
                  { who: 'Nadia', en: 'Only one. The second was released early — she was getting ' +
                                      'stressed.' },
                  { who: 'Elias', en: 'Good call. Was the collar fitted properly on the first one?' }
                ],
                question: 'Why was the second animal released early?',
                options: DF.shuffle([
                  { label: 'She was getting stressed', correct: true },
                  { label: 'The collar did not fit' },
                  { label: 'She was already tagged' },
                  { label: 'The team ran out of time' }
                ]),
                expl: '"she was getting stressed" — e repare que o relato inteiro está na ' +
                      'passiva, porque quem fez a ação é a equipe (óbvio).'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u9w1:dlg:2',
                title: '🎧 A correction in the field',
                sub: 'Repare o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'The researcher was bited by a spider.' },
                  { who: 'Tomás', en: 'Bitten — bite, bit, bitten.' },
                  { who: 'Priya', en: 'Right. She was bitten by a spider, but she\'s fine.' },
                  { who: 'Tomás', en: 'Good. The passive always needs the participle.' }
                ],
                question: 'What is the past participle of "bite"?',
                options: DF.shuffle([
                  { label: 'bitten', correct: true }, { label: 'bited' },
                  { label: 'bit' }, { label: 'biting' }
                ]),
                expl: 'bite → bit → bitten. Verbo irregular.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w1:bld:1', unit: 9, waSec: 'Sua vez',
                title: '🗣️ Something in your city, in the passive',
                prompt: 'Describe something that is done regularly in your city, using the ' +
                        'passive.',
                example: 'The streets are cleaned every Tuesday, but the beach is only cleaned ' +
                         'before the holidays.',
                mustUse: ['are'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w1:bld:2', unit: 9, waSec: 'Sua vez',
                title: '🗣️ Something that has changed',
                prompt: 'Say something that has been built, changed or removed where you live, ' +
                        'using the present perfect passive.',
                example: 'A whole block of old houses has been demolished near the port.',
                mustUse: ['has been'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w1:bld:3', unit: 9, waSec: 'Sua vez',
                title: '🗣️ What should be done',
                prompt: 'Name one animal issue in your country and say what should be done, ' +
                        'using a modal + passive.',
                example: 'The illegal pet trade should be punished much more seriously than it ' +
                         'is now.',
                mustUse: ['should be'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w1+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Six passive tenses in sixty seconds',
                prompt: 'Give a field report on an invented animal study, using all six passive ' +
                        'forms.',
                example: '(1 minuto)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w1+:b2', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Fix it out loud',
                prompt: 'This is wrong: "The bird was bited." Correct it and give two more ' +
                        'irregular participles.',
                example: 'The bird was bitten. Also: was taken, not taked; was put, not putted.',
                mustUse: ['bitten'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de passiva', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___ was tagged and released this morning.', pool: 'wildAnimal',
                  focus: 'passiva no passado', ptHint: '___ foi marcado e solto hoje.', n: 5 },
                { frame: 'The population is threatened by ___.', pool: 'threat',
                  focus: 'vocabulário', ptHint: 'A população é ameaçada por ___.', n: 5 }
              ],
              backchain: [
                { text: '{wildAnimal} was {fieldAction} this morning.',
                  ptHint: '… foi … hoje de manhã.' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'What the Science Really Shows',
        goal: 'Hear the difference between what a scientist knows and what they only suspect.',
        comp: 'Você ouve um especialista falando e distingue o que ele afirma com certeza do ' +
              'que ele apenas suspeita — e toma posição em dilemas éticos sobre animais.',
        live: [
          'Listening: the interview with Dr. Stern about Kanzi the bonobo',
          'The Listening Strategy: listening for probability',
          'Completing the Bonobo Fact Sheet and the Kanzi summary',
          'Connections: three ethical situations, including cloning extinct animals',
          'The yes/no card game: state your answer and give a reason'
        ],
        bridge: 'Na aula você ouviu o Dr. Stern e jogou o jogo das cartas com os três dilemas. ' +
                'Aqui o especialista é do Field Ledger, detectar incerteza vira exercício de ' +
                'decisão (ele SABE ou está SUPONDO?), e os dilemas ganham resposta gravada.',
        nextLive: 'Semana 3 · Reading + Video + Speaking — o urso branco, o geo-fencing e as ' +
                  'espécies ameaçadas.',
        ican: [
          'I can hear when a speaker is uncertain about a claim.',
          'I can tell a stated fact from a hedged guess.',
          'I can argue for and against keeping animals in captivity.',
          'I can report what an expert said without overstating their certainty.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'hedging', icon: '🌡️', name: 'The language of uncertainty', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u9w2:read:hedge',
                title: '🌡️ How a scientist signals doubt',
                textTitle: 'Detecting uncertainty',
                readAloud: false,
                text:
                  'CERTAIN — the speaker states it flatly\n' +
                  'The population has dropped by ninety per cent. We measured it.\n' +
                  'Markers: we know, we measured, the data shows, it is confirmed\n\n' +
                  'UNCERTAIN — the speaker hedges\n' +
                  'It may be pesticides. It could be climate. Honestly, nobody is sure yet.\n' +
                  'Markers: may, might, could, possibly, we suspect, it appears, ' +
                  'scientists are not sure, as far as we know\n\n' +
                  'THE TRICKY ONE — sounding certain while hedging\n' +
                  'We are fairly confident it is habitat loss. ("fairly" is the hedge)\n' +
                  'The evidence strongly suggests pesticides. ("suggests" is the hedge)\n\n' +
                  'POR QUE ISSO IMPORTA: reportar uma suspeita como se fosse fato e o erro mais ' +
                  'comum de quem resume uma entrevista cientifica. Se o especialista disse ' +
                  '"could be", voce nao pode escrever "is" — a paráfrase mudou o significado, ' +
                  'e a unidade 4 ja ensinou que isso invalida a parafrase.',
                nextLabel: 'Got it ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u9w2:dlg:1',
                title: '👂 An expert on a population drop',
                sub: 'Sem texto na tela. Ouça o que ela SABE e o que ela SUSPEITA.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'How big is the decline?' },
                  { who: 'Dr. Reis', en: 'Almost ninety per cent in twenty years. That part we ' +
                                         'have measured directly.' },
                  { who: 'Host', en: 'And the cause?' },
                  { who: 'Dr. Reis', en: 'That is much less clear. It could be pesticides, it ' +
                                         'could be climate — or something we have not identified ' +
                                         'yet. We are not sure.' }
                ],
                question: 'Which part is she CERTAIN about?',
                options: DF.shuffle([
                  { label: 'The size of the decline', correct: true },
                  { label: 'That pesticides are the cause' },
                  { label: 'That climate is the cause' },
                  { label: 'She is certain about everything' }
                ]),
                expl: '"That part we have measured directly" = certeza. A causa vem com ' +
                      '"could be" e "we are not sure" = incerteza.'
              },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u9w2:hd:1',
                title: '🌡️ Certain or uncertain?',
                main: '"The evidence strongly suggests pesticide use."',
                options: DF.shuffle([
                  { label: 'Uncertain — "suggests" is a hedge', correct: true },
                  { label: 'Certain — "strongly" makes it definite' }
                ]),
                expl: '"strongly" soa firme, mas "suggests" ainda é hedge. Sugerir não é provar.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u9w2:hd:2',
                title: '🌡️ Which report is FAITHFUL to "It could be pesticides"?',
                main: '',
                options: DF.shuffle([
                  { label: 'She said pesticides may be responsible.', correct: true },
                  { label: 'She said pesticides are responsible.' },
                  { label: 'She confirmed pesticides caused it.' },
                  { label: 'She proved it was pesticides.' }
                ]),
                expl: 'Só a primeira preserva a incerteza original. As outras três transformam ' +
                      'suspeita em fato.' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u9w2:hd:3',
                title: '🔗 Match each phrase to what it signals:',
                pairs: [
                  ['We measured it directly.', 'certainty'],
                  ['It could be pesticides.', 'uncertainty'],
                  ['The data shows a 90% drop.', 'certainty'],
                  ['Scientists are not sure.', 'uncertainty'],
                  ['We are fairly confident.', 'hedged confidence']
                ] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w2:hd:4', unit: 9, waSec: 'Sua vez',
                title: '🗣️ Report the expert faithfully',
                prompt: 'Report what Dr. Reis said, keeping her certainty and uncertainty ' +
                        'exactly as they were.',
                example: 'She said the population has dropped almost ninety per cent, which ' +
                         'they measured. She said the cause may be pesticides or climate, but ' +
                         'nobody is sure yet.',
                mustUse: ['may'] }
            ]
          },

          {
            id: 'dilemmas', icon: '⚖️', name: 'Three ethical situations', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u9w2:read:dil',
                title: '⚖️ Yes or no — and why',
                textTitle: 'Three situations',
                text:
                  'ONE. A colleague is moving abroad and can\'t take her dog. The dog will go to ' +
                  'a shelter unless someone takes him. You have been thinking about getting a ' +
                  'dog — but you live alone in a small apartment and work long days, so the ' +
                  'animal would be alone most of the time. Should you take him?\n\n' +
                  'TWO. A friend watched a documentary about how animals are raised for food. ' +
                  'Because of it, she is thinking about becoming a vegetarian. Should she?\n\n' +
                  'THREE. Using cloning technology, scientists say it is possible to bring back ' +
                  'animals that died out recently, and even some that vanished thousands of ' +
                  'years ago. Some would be kept in zoos; others would be released into the ' +
                  'wild. Should scientists do it?\n\n' +
                  'For each one: state your answer, then give ONE reason that supports it. The ' +
                  'reason is what counts — anyone can say yes or no.',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w2:dl:1', unit: 9, waSec: 'Dilemmas',
                title: '⚖️ Situation one — the dog',
                prompt: 'Answer yes or no, and give one reason. Use a passive if it fits.',
                example: 'No, he shouldn\'t be taken. It\'s cruel for a pet to be left alone all ' +
                         'day in a small apartment.',
                mustUse: ['be'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w2:dl:2', unit: 9, waSec: 'Dilemmas',
                title: '⚖️ Situation two — vegetarianism',
                prompt: 'Answer yes or no, and give one reason.',
                example: 'Yes, but only if she plans it properly, because people who cut out ' +
                         'meat without a plan usually end up feeling worse.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w2:dl:3', unit: 9, waSec: 'Dilemmas',
                title: '⚖️ Situation three — cloning extinct animals',
                prompt: 'Answer yes or no, and give one reason. Use the passive.',
                example: 'No. If the habitat has already been destroyed, the animal would just ' +
                         'be brought back into a world that can\'t support it.',
                mustUse: ['been'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w2:dl:4', unit: 9, waSec: 'Dilemmas',
                title: '⚖️ Now argue the opposite of your own answer',
                prompt: 'Pick the situation you felt strongest about and argue the OTHER side ' +
                        'for thirty seconds.',
                example: '(30 segundos)',
                expl: 'É a mesma régua das unidades 3 e 6: você só entende um dilema quando ' +
                      'consegue defender os dois lados.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w2+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Hedge everything, then commit',
                prompt: 'Describe a problem you are NOT sure about using three hedges, then ' +
                        'state one thing you ARE sure about.',
                example: '(45 segundos)' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de incerteza', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'It could be ___, but nobody is sure.', pool: 'threat',
                  focus: 'incerteza', ptHint: 'Pode ser ___, mas ninguém tem certeza.', n: 5 }
              ],
              backchain: [
                { text: 'The population is threatened by {threat}.',
                  ptHint: 'A população é ameaçada por…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'The Case for the Species',
        goal: 'Read for an outline, follow a technical process, and make a case for one species.',
        comp: 'Você lê um texto e extrai o outline dele, acompanha um processo técnico em ' +
              'ordem, e defende qual espécie deve receber financiamento.',
        live: [
          'Reading: Spirit Bear, and Orphan Elephants (the Sheldrick Trust in Kenya)',
          'Completing the WHAT IT DOES / HISTORY / HOW IT WORKS / BENEFITS outline',
          'Video: Great Migrations — collaring an elephant and geo-fencing',
          'Numbering the video events in order',
          'Speaking: three endangered species and who gets the funding'
        ],
        bridge: 'Na aula você fez o outline do Spirit Bear e viu o geo-fencing. Aqui o texto é ' +
                'do Field Ledger, e a pergunta muda: qual é a ideia principal de cada parágrafo?',
        nextLive: 'Semana 4 · Writing + Expanding — o folheto de conscientização e a entrevista ' +
                  'de TV.',
        ican: [
          'I can extract an outline from a text I have just read.',
          'I can follow a technical process and put its steps in order.',
          'I can present a species\' status and why it matters.',
          'I can decide between competing causes and justify the choice.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: The Bear That Isn\'t There', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u9w3:read:text',
                title: '📖 A new text, the same skill',
                textTitle: 'The Bear That Isn\'t There',
                text:
                  'For eleven years, the Field Ledger has recorded a jaguar that almost nobody ' +
                  'has seen. It is known only from camera traps, tracks, and one blurred ' +
                  'photograph taken in 2019.\n\n' +
                  'The animal is unusual because of its size. Adult male jaguars in this region ' +
                  'average about seventy kilograms. This one has been estimated, from track ' +
                  'depth and stride length, at well over a hundred. No one has ever weighed ' +
                  'him, so the figure remains an estimate.\n\n' +
                  'Local farmers have hunted jaguars here for generations, mostly to protect ' +
                  'cattle. But this particular animal has never been reported as a problem. In ' +
                  'eleven years, not a single livestock death in the valley has been attributed ' +
                  'to him — which is itself strange, given his size.\n\n' +
                  'One theory is that he avoids farmland entirely and hunts only in the deep ' +
                  'forest. Another is that farmers who have seen him have simply chosen not to ' +
                  'report it. Both explanations are possible; neither has been confirmed.\n\n' +
                  'The project has deliberately not tried to capture or collar him. "We were ' +
                  'asked not to," says the field lead. "The families who live here consider him ' +
                  'theirs. If we tagged him, we would be taking something from them, and the ' +
                  'data isn\'t worth that." So the largest jaguar ever suspected in this valley ' +
                  'has never been touched, weighed, or officially confirmed to exist.',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u9w3:q:1',
                title: '📖 Why is the animal\'s weight only an estimate?',
                main: '',
                options: DF.shuffle([
                  { label: 'He has never been weighed', correct: true },
                  { label: 'The scale was broken' },
                  { label: 'He is too small to measure' },
                  { label: 'The text does not explain' }
                ]),
                expl: '"No one has ever weighed him, so the figure remains an estimate."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u9w3:q:2',
                title: '📖 Why has the project NOT collared him?',
                main: '',
                options: DF.shuffle([
                  { label: 'The local families asked them not to', correct: true },
                  { label: 'He is too dangerous to approach' },
                  { label: 'They could not find him' },
                  { label: 'Collaring is illegal in that region' }
                ]),
                expl: '"We were asked not to... The families who live here consider him theirs."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u9w3:q:3',
                title: '📖 Are the two theories confirmed?',
                main: '',
                options: DF.shuffle([
                  { label: 'No — both are possible, neither confirmed', correct: true },
                  { label: 'Yes — both have been confirmed' },
                  { label: 'The first is confirmed, the second is not' },
                  { label: 'The text gives no theories' }
                ]),
                expl: '"Both explanations are possible; neither has been confirmed." Repare no ' +
                      'hedge — é a competência da semana 2 voltando.' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u9w3:outline',
                title: '🔗 Match each paragraph to its main idea (the outline):',
                pairs: [
                  ['Paragraph 1', 'the animal is known only indirectly'],
                  ['Paragraph 2', 'his size is estimated, not measured'],
                  ['Paragraph 3', 'no livestock deaths attributed to him'],
                  ['Paragraph 4', 'two unconfirmed theories'],
                  ['Paragraph 5', 'why the project chose not to collar him']
                ] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w3:out:1', unit: 9, waSec: 'Outline',
                title: '📋 Write the outline out loud',
                prompt: 'State the main idea of the whole text in one sentence, then the main ' +
                        'idea of the final paragraph.',
                example: 'The main idea is that the biggest jaguar in the valley has never been ' +
                         'confirmed. The last paragraph explains that the project chose the ' +
                         'community over the data.',
                mustUse: ['main idea'] }
            ]
          },

          {
            id: 'video', icon: '🎬', name: 'How geo-fencing works', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u9w3:dlg:1',
                title: '🎬 The collaring process, narrated',
                sub: 'Sem texto na tela. Ouça a ordem dos passos.',
                hideText: true,
                lines: [
                  { who: 'Narrator', en: 'A researcher searches for the herd from the air, while ' +
                                         'the ground team waits nearby.' },
                  { who: 'Narrator', en: 'A female is identified and shot with a tranquilizer ' +
                                         'gun.' },
                  { who: 'Narrator', en: 'Once she is unconscious, the team has only twenty ' +
                                         'minutes to attach the collar.' },
                  { who: 'Narrator', en: 'When the animal later crosses a virtual fence line, ' +
                                         'the GPS unit sends a text message to a server.' },
                  { who: 'Narrator', en: 'The server then alerts people who can stop the herd ' +
                                         'before it reaches farmland.' }
                ],
                question: 'What triggers the alert?',
                options: DF.shuffle([
                  { label: 'The animal crossing a virtual fence line', correct: true },
                  { label: 'The collar being attached' },
                  { label: 'The tranquilizer wearing off' },
                  { label: 'A researcher pressing a button' }
                ]),
                expl: '"When the animal later crosses a virtual fence line, the GPS unit sends ' +
                      'a text message."'
              },
              { ui: 'order', cat: 'fun', srsId: 'wc1u9w3:ord:1',
                title: '🧩 Put the geo-fencing process in order:',
                answer: 'A researcher searches for the herd from the air a female is identified ' +
                        'and tranquilized the team attaches the collar in twenty minutes the ' +
                        'animal crosses a virtual fence line the server alerts people who can ' +
                        'stop the herd',
                expl: 'busca → identificação → coleira → cruzamento da cerca → alerta.' },
              { ui: 'type', cat: 'fun', srsId: 'wc1u9w3:type:1',
                title: '🎬 How many minutes does the team have to attach the collar?',
                sub: 'Só o número.',
                tts: 'the team has only twenty minutes to attach the collar.',
                answers: ['20', 'twenty'], exact: false,
                expl: 'twenty minutes.' }
            ]
          },

          {
            id: 'funding', icon: '💰', name: 'Who gets the funding?', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u9w3:read:fund',
                title: '💰 Three species, one grant',
                textTitle: 'The decision',
                text:
                  'THE HARPY EAGLE — Status: fewer than a hundred breeding pairs left in the ' +
                  'region. Why it matters: it is the top predator; without it, prey populations ' +
                  'grow unchecked and damage the forest.\n\n' +
                  'THE STINGLESS BEE — Status: colonies have dropped by roughly seventy per cent ' +
                  'in fifteen years. Why it matters: it pollinates crops that feed the region. ' +
                  'Fewer bees mean less food and higher prices.\n\n' +
                  'THE RIVER DOLPHIN — Status: not officially listed as endangered, but numbers ' +
                  'are falling. Why it matters: it is hunted for bait and dies in fishing nets. ' +
                  'Studies suggest it is highly intelligent.\n\n' +
                  'Your organization can fund only ONE. Which one, and why?',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w3:fd:1', unit: 9, waSec: 'Funding',
                title: '💰 Present one species',
                prompt: 'Choose one species and present its status and why people should care, ' +
                        'using the passive.',
                example: 'The stingless bee should be funded first. Seventy per cent of the ' +
                         'colonies have been lost, and the crops that feed this whole region ' +
                         'are pollinated by them.',
                mustUse: ['been'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w3:fd:2', unit: 9, waSec: 'Funding',
                title: '💰 Argue against your own choice',
                prompt: 'Now argue why one of the OTHER two deserves the money more.',
                example: '(30 segundos)',
                expl: 'Defender o lado que você não escolheu é o treino que a unidade 3 já ' +
                      'começou — e continua valendo.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w3+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Defend the decision not to collar',
                prompt: 'The project chose community trust over scientific data. Defend that ' +
                        'choice, then argue against it.',
                example: '(60 segundos, os dois lados)' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de relatório', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Every animal in the study is ___.', pool: 'fieldAction',
                  focus: 'passiva', ptHint: 'Todo animal do estudo é ___.', n: 5 }
              ],
              backchain: [
                { text: '{wildAnimal} was {fieldAction} before dawn.',
                  ptHint: '… foi … antes do amanhecer.' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Making People Care',
        goal: 'Write a campaign that makes someone care, and give a one-minute TV interview.',
        comp: 'Você escreve uma campanha de conscientização com abertura forte e chamada pra ' +
              'ação, e dá uma entrevista de TV de um minuto.',
        live: [
          'Writing: Create an Informational Brochure about an animal issue',
          'The Writing Strategy: getting a reader\'s attention',
          'Building an outline before writing the essay about zoos',
          'Expanding Your Fluency: the one-minute TV interview role-play',
          'Check What You Know'
        ],
        bridge: 'Na aula você fez o folheto do koala e a entrevista com um colega. Aqui a ' +
                'campanha é do Field Ledger, a abertura vira exercício de decisão frase a ' +
                'frase, e a entrevista ganha cronômetro.',
        nextLive: 'Bloco 7-9 fecha aqui — revisão acumulada antes da Unidade 10.',
        ican: [
          'I can open a text with a question, a surprising fact, or an emotional appeal.',
          'I can write a clear call to action.',
          'I can build an outline before writing.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'attention', icon: '🎯', name: 'Getting attention in one line', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u9w4:read:att',
                title: '🎯 Three openings that work',
                textTitle: 'Getting a reader\'s attention',
                readAloud: false,
                text:
                  'A QUESTION THAT MAKES YOU THINK\n' +
                  'Does having a pet actually make you healthier?\n\n' +
                  'A SURPRISING OR SHOCKING FACT\n' +
                  'In the last twenty years, ninety-six per cent of these bees have vanished.\n\n' +
                  'AN EMOTIONAL APPEAL — short, direct\n' +
                  'Adopt a dog. Save a life.\n\n' +
                  'WHAT DOES NOT WORK\n' +
                  '"In this brochure, we will discuss the problem of endangered species."\n' +
                  'The reader already knows they are reading a brochure. You just spent your ' +
                  'best sentence explaining that.\n\n' +
                  'AND THE CALL TO ACTION — tell the reader exactly what to do\n' +
                  'Weak: Something must be done.\n' +
                  'Strong: Support an organization like the WWF. Visit the site to learn more.\n\n' +
                  'A ARMADILHA: "something must be done" e passiva sem agente na pior hora ' +
                  'possivel — na chamada pra acao, o leitor precisa saber QUEM faz O QUE. Este ' +
                  'e o unico lugar do texto onde a passiva atrapalha.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u9w4:at:1',
                title: '🎯 Which opening grabs attention?',
                main: '',
                options: DF.shuffle([
                  { label: 'In fifteen years, seventy per cent of these colonies have ' +
                           'disappeared.', correct: true },
                  { label: 'In this brochure, we will discuss bees.' },
                  { label: 'Bees are an important insect.' },
                  { label: 'This text is about the problem of bees.' }
                ]),
                expl: 'Número surpreendente. As outras três explicam o que o leitor já sabe.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u9w4:at:2',
                title: '🎯 Which is a real call to action?',
                main: '',
                options: DF.shuffle([
                  { label: 'Plant one native flowering tree in your yard this year.',
                    correct: true },
                  { label: 'Something must be done about this problem.' },
                  { label: 'Bees deserve our attention.' },
                  { label: 'This is a serious issue for everyone.' }
                ]),
                expl: 'Uma ação concreta e específica que o leitor pode fazer hoje.' },
              { ui: 'order', cat: 'fun', srsId: 'wc1u9w4:at:3',
                title: '🧩 Build the strong opening:',
                answer: 'In fifteen years seventy per cent of these colonies have been lost',
                expl: 'Número + prazo + present perfect passivo.' }
            ]
          },

          {
            id: 'outline', icon: '📋', name: 'The outline before the essay', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u9w4:read:outl',
                title: '📋 Two columns, then a structure',
                textTitle: 'Should a new zoo be built near you?',
                text:
                  'IN FAVOR: Many endangered species are protected by zoos. Zoos help us ' +
                  'understand and study animals. In a zoo, animals are fed well and cared for ' +
                  'by keepers. Zoos are educational — children learn about conservation there.\n\n' +
                  'AGAINST: By nature, animals are wild; they should live in the wild. ' +
                  'Scientists can study animals in the wild — we have better technology now. ' +
                  'Animals can hunt and defend themselves in the wild. Because the zoo setting ' +
                  'is artificial, children don\'t really see what the natural environment is ' +
                  'like.\n\n' +
                  'THE OUTLINE YOU BUILD BEFORE WRITING\n' +
                  'I. Intro — your position in one sentence\n' +
                  '   A. first supporting point\n' +
                  '   B. second supporting point\n' +
                  'II. Body — the strongest argument, developed\n' +
                  'III. Conclusion — restate and close\n\n' +
                  'A REGRA: se voce nao consegue escrever a ideia principal de cada bloco em ' +
                  'UMA frase, o texto ainda nao esta pronto pra ser escrito. O outline nao e ' +
                  'rascunho — e o teste de que voce sabe o que quer dizer.',
                nextLabel: 'Got it ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:ol:1', unit: 9, waSec: 'Outline',
                title: '📋 Your intro — one sentence',
                prompt: 'State your position on a new zoo near you, in one sentence.',
                example: 'A new zoo would only make sense here if it were limited to local ' +
                         'species that are already being rescued.',
                mustUse: ['zoo'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:ol:2', unit: 9, waSec: 'Outline',
                title: '📋 Your two supporting points',
                prompt: 'Give the two points that support your position, one sentence each.',
                example: 'First, local animals are already being rescued and have nowhere to ' +
                         'go. Second, importing animals from other climates is where most of ' +
                         'the cruelty happens.',
                mustUse: ['first'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:ol:3', unit: 9, waSec: 'Outline',
                title: '📋 Your conclusion — one sentence',
                prompt: 'Close by restating your position in different words.',
                example: 'A rescue centre that calls itself a zoo would help; a zoo that buys ' +
                         'animals abroad would not.',
                mustUse: ['would'],
                expl: 'Este é o outcome 2 — "use an outline to summarize ideas". Mande as ' +
                      'três partes juntas por escrito.' }
            ]
          },

          {
            id: 'brochure', icon: '📄', name: 'Write the campaign', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:br:1', unit: 9, waSec: 'Brochure',
                title: '📄 Line 1 — the headline',
                prompt: 'Choose an animal issue. Write an attention-grabbing headline using a ' +
                        'question, a fact, or an emotional appeal.',
                example: 'Seventy per cent of them are already gone. Did you notice?',
                mustUse: ['?'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:br:2', unit: 9, waSec: 'Brochure',
                title: '📄 Line 2 — the background, in the passive',
                prompt: 'Explain what the problem is, using the passive voice.',
                example: 'Most of the original habitat has been cleared for pasture, and the ' +
                         'remaining forest is divided into fragments too small to sustain a ' +
                         'population.',
                mustUse: ['been'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:br:3', unit: 9, waSec: 'Brochure',
                title: '📄 Line 3 — two facts that make people care',
                prompt: 'Give two brief facts that would make a stranger care about this.',
                example: 'They pollinate a third of the fruit grown in this state. Without ' +
                         'them, the price of everything in that list goes up.',
                mustUse: ['them'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:br:4', unit: 9, waSec: 'Brochure',
                title: '📄 Line 4 — the call to action',
                prompt: 'Close with one specific thing the reader can do. No passive here.',
                example: 'Plant one native flowering tree this year, and don\'t spray anything ' +
                         'while it blooms.',
                mustUse: ['plant'],
                expl: 'Mande as quatro linhas juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'interview', icon: '📺', name: 'The one-minute TV interview', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u9w4:read:int',
                title: '📺 Three headlines to choose from',
                textTitle: 'Pick your story',
                text:
                  '"Monkey freed from zoo by keeper, still hunted by police"\n\n' +
                  '"Drowning surfer rescued by dolphins, happy to be alive"\n\n' +
                  '"Critics and supporters battle as bullfighting banned in Barcelona"\n\n' +
                  'You are the person from one of these stories, being interviewed on TV. ' +
                  'Invent your account — but make it believable.',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:iv:1', unit: 9, waSec: 'TV interview',
                title: '📺 Your opening answer',
                prompt: 'The reporter asks: "Can you tell us what happened?" Answer in three ' +
                        'sentences, using at least one passive.',
                example: 'I was pulled under twice before I saw them. Then I was pushed toward ' +
                         'the shore — I still don\'t know how they knew.',
                mustUse: ['was'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4:iv:2', unit: 9, waSec: 'TV interview',
                title: '📺 The full minute, one take',
                prompt: 'Give the whole interview yourself: the reporter\'s question and your ' +
                        'answer, for one full minute.',
                example: '(1 minuto)',
                expl: 'Este é o entregável falado da unidade. Mande o áudio pro professor.' }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u9w4:chk:1', unit: 9, idx: 0,
                statement: 'I can use different forms of the passive voice.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u9w4:chk:2', unit: 9, idx: 1,
                statement: 'I can use an outline to summarize ideas.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u9w4:chk:3', unit: 9, idx: 2,
                statement: 'I can raise people\'s awareness about an issue.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u9w4:chk:4', unit: 9, idx: 3,
                statement: 'I can write strong sentences to capture my readers\' attention.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w4:pt:1',
                title: '📝 Complete:', main: 'Dogs ___ fifteen thousand years ago.',
                options: DF.shuffle([
                  { label: 'were domesticated', correct: true }, { label: 'was domesticated' },
                  { label: 'are domesticated' }, { label: 'have domesticated' }
                ]),
                expl: 'simple past passivo, plural → were + particípio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w4:pt:2',
                title: '📝 Complete:', main: 'Parrots ___ to speak.',
                options: DF.shuffle([
                  { label: 'can be taught', correct: true }, { label: 'can taught' },
                  { label: 'can be teach' }, { label: 'can being taught' }
                ]),
                expl: 'modal + be + particípio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u9w4:pt:3',
                title: '📝 Which participle is correct?',
                main: 'The researcher was ___ by a spider.',
                options: DF.shuffle([
                  { label: 'bitten', correct: true }, { label: 'bited' },
                  { label: 'bit' }, { label: 'biting' }
                ]),
                expl: 'bite → bit → bitten.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u9w4:pt:4',
                title: '📝 Which opening grabs attention?',
                main: '',
                options: DF.shuffle([
                  { label: 'Ninety-six per cent of them have vanished in twenty years.',
                    correct: true },
                  { label: 'This brochure is about an important animal.' },
                  { label: 'We will now discuss the topic of bees.' },
                  { label: 'Bees are insects that are quite useful.' }
                ]),
                expl: 'Fato surpreendente com número.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u9w4:pt:5',
                title: '📝 Which is correct?',
                main: 'Four ___ were recorded in the valley.',
                options: DF.shuffle([
                  { label: 'species', correct: true }, { label: 'specie' },
                  { label: 'specieses' }, { label: 'species\'s' }
                ]),
                expl: 'species é invariável.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u9w4:pt:6',
                title: '🔗 Match the passive form to its tense:',
                pairs: [
                  ['are kept', 'simple present'],
                  ['were domesticated', 'simple past'],
                  ['have been trained', 'present perfect'],
                  ['is being cared for', 'present continuous'],
                  ['will be returned', 'simple future']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u9w4:pt:7',
                title: '🧩 Build the sentence:',
                answer: 'Almost twenty per cent of the forest has been cut down',
                expl: 'present perfect passivo, sujeito singular.' }
            ]
          }
        ],

        more: [
          // ═══ REVIEW PUZZLE — Units 7-9 (fechamento de bloco) ═══
          // Terceiro checkpoint, mesma opção B das unidades 3 e 6 (ver
          // block-review-1 em plan-wc1-03.js e block-review-2 em
          // plan-wc1-06.js): manter a FUNÇÃO do Review Puzzle do livro,
          // trocar o FORMATO pelas mecânicas que já existem. O livro confirma
          // o bloco com "7-9 Review" e "Review Puzzle Units 7-9".
          {
            id: 'block-review-3', icon: '🧩', name: 'Review Puzzle — Units 7–9', tag: 'revisão',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'wc1blk3:m1',
                title: '🧩 Unit 7 — match the word to its meaning:',
                pairs: [
                  ['commute', 'the daily journey to work or school'],
                  ['cramped', 'not big enough for the people in it'],
                  ['punctual', 'on time, not late'],
                  ['reliable', 'trusted to work well'],
                  ['rush hour', 'a period of heavy traffic']
                ] },
              { ui: 'match', cat: 'voc', srsId: 'wc1blk3:m2',
                title: '🧩 Unit 8 — match the word to its meaning:',
                pairs: [
                  ['consequences', 'the results of an action'],
                  ['disruptive', 'causing trouble, stopping the usual'],
                  ['get away with', 'to do wrong without being caught'],
                  ['regulation', 'an official rule'],
                  ['surveillance', 'careful watching by authorities']
                ] },
              { ui: 'match', cat: 'voc', srsId: 'wc1blk3:m3',
                title: '🧩 Unit 9 — match the word to its meaning:',
                pairs: [
                  ['endangered', 'in danger of dying out'],
                  ['domesticated', 'raised by people'],
                  ['evolve', 'to change slowly over time'],
                  ['species', 'a class of plants or animals'],
                  ['habitat', 'the natural environment of an animal']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk3:g1',
                title: '🧩 Unit 7 grammar — choose the correct form:',
                main: 'The express line makes ___ stops than the local.',
                options: DF.shuffle([
                  { label: 'fewer', correct: true }, { label: 'less' },
                  { label: 'more few' }, { label: 'as few' }
                ]),
                expl: 'stops é contável → fewer.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk3:g2',
                title: '🧩 Unit 8 grammar — choose the correct form:',
                main: 'She ___ been texting. She lost her phone last week.',
                options: DF.shuffle([
                  { label: "couldn't have", correct: true }, { label: 'must have' },
                  { label: 'should have' }, { label: 'might have' }
                ]),
                expl: 'Impossibilidade → couldn\'t have.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk3:g3',
                title: '🧩 Unit 9 grammar — choose the correct form:',
                main: 'Dogs ___ on a leash in this park.',
                options: DF.shuffle([
                  { label: 'should be kept', correct: true }, { label: 'should kept' },
                  { label: 'should be keep' }, { label: 'should keeping' }
                ]),
                expl: 'modal + be + particípio.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk3:t1',
                title: '✍️ Unit 7 — complete with ONE word:',
                main: 'The train broke down. ___ a result, service was delayed.',
                answers: ['As', 'as'],
                expl: 'As a result — conector de causa e efeito.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk3:t2',
                title: '✍️ Unit 8 — complete with ONE word:',
                main: 'He should ___ told someone immediately.',
                answers: ['have'],
                expl: 'should HAVE, nunca "should of".' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk3:t3',
                title: '✍️ Unit 9 — complete with ONE word:',
                main: 'The researcher was ___ by a spider.',
                answers: ['bitten'],
                expl: 'bite → bit → bitten.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk3:o1',
                title: '🧩 Build the sentence (Unit 7 grammar):',
                answer: 'The new line is not as crowded as the old one',
                expl: 'not as + adjetivo + as.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk3:o2',
                title: '🧩 Build the sentence (Unit 8 grammar):',
                answer: 'It must have been something important',
                expl: 'must have + particípio = conclusão lógica.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk3:o3',
                title: '🧩 Build the sentence (Unit 9 grammar):',
                answer: 'Two adults were captured and released this morning',
                expl: 'simple past passivo.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk3:cross1',
                title: '🧩 Which unit does this word belong to?',
                main: 'commute',
                options: DF.shuffle([
                  { label: 'Unit 7 — On the Move', correct: true },
                  { label: 'Unit 8 — Think Twice' },
                  { label: 'Unit 9 — In the Wild' }
                ]) },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk3:cross2',
                title: '🧩 Which unit does this word belong to?',
                main: 'surveillance',
                options: DF.shuffle([
                  { label: 'Unit 8 — Think Twice', correct: true },
                  { label: 'Unit 7 — On the Move' },
                  { label: 'Unit 9 — In the Wild' }
                ]) },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk3:cross3',
                title: '🧩 Which unit does this word belong to?',
                main: 'endangered',
                options: DF.shuffle([
                  { label: 'Unit 9 — In the Wild', correct: true },
                  { label: 'Unit 7 — On the Move' },
                  { label: 'Unit 8 — Think Twice' }
                ]) },
              { ui: 'build', cat: 'fun', srsId: 'wc1blk3:build', unit: 9, waSec: 'Review Puzzle',
                title: '🗣️ Close the block in one breath',
                prompt: 'In one minute, use one word from each unit (7, 8, and 9) in three ' +
                        'different sentences about your own life.',
                example: 'My commute takes an hour. I should have moved closer years ago. ' +
                         'The forest near my town is endangered.',
                mustUse: ['commute', 'should have', 'endangered'] }
            ]
          },
          {
            id: 'more-w4', icon: '🔥', name: 'The full campaign, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u9w4+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Pitch the campaign out loud',
                prompt: 'Deliver your whole awareness campaign as a spoken pitch, in under a ' +
                        'minute, with no notes.',
                example: '(45 a 60 segundos)' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de campanha', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The population is threatened by ___.', pool: 'threat',
                  focus: 'vocabulário', ptHint: 'A população é ameaçada por ___.', n: 5 }
              ],
              backchain: [
                { text: '{wildAnimal} is threatened by {threat}.',
                  ptHint: '… é ameaçado por…' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
