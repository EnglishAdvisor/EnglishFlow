/* ENGLISH FLOW — week/plan-wc1-02.js
   WORLD CLASS ONE · UNIT 2 "The World Awaits" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver o cabeçalho de plan-wc1-01.js e a régua de
   fatiamento day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: Symi, o tour de Beijing, a entrevista do Jason
                    Mraz, Las Ramblas. Pair work e correção na hora.
     APP          → THE SLOW ROUTE, um coletivo fictício que publica roteiros
                    a pé escritos por quem MORA no lugar, não por turistas.
                    100% autoral (item 20).

   Por que este cenário: a unidade 2 cobra descrever lugares, recomendar
   viagem e dar/aceitar/questionar conselho. Um coletivo que recebe roteiros
   de colaboradores e devolve crítica hospeda os quatro outcomes sem tocar em
   nada do livro.

     outcome 1 (descriptive language)      → descrever a sua rua pra quem nunca viu
     outcome 2 (gerunds and infinitives)   → contar experiências de viagem
     outcome 3 (travel recommendations)    → o roteiro que você publica
     outcome 4 (give/accept/question advice) → a revisão entre colaboradores

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl`.

   ═══ ESTRUTURA ═══
   Mesmo corte de semanas da unidade 1 (estrutura-wc1.txt):
     Semana 1 · Overview + Vocabulary + Grammar (Infinitives and Gerunds)
     Semana 2 · Listening + Pronunciation (stress shift) + Video
     Semana 3 · Reading + Connections
     Semana 4 · Writing + Speaking + Outcomes + Expanding Your Fluency */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.placeAdj = ['breathtaking', 'picturesque', 'tranquil', 'luxurious',
                              'accessible', 'diverse', 'remote', 'spectacular'];
    DF.WGEN.POOLS.travelAct = ['hiking along the coast', 'eating at street stalls',
                               'getting lost on purpose', 'talking to shopkeepers',
                               'walking before sunrise', 'taking the slow train'];
    DF.WGEN.POOLS.spot = ['a fishing village', 'an old market', 'a mountain trail',
                          'a quiet harbour', 'a rooftop garden', 'a night market'];
  }

  // Word Bank da unidade — definições e exemplos autorais (universo Slow Route)
  const WORDS = [
    { en: 'accessible', pt: 'acessível / fácil de chegar',
      def: 'easy to reach or get into',
      ex: 'The harbour is accessible on foot from almost anywhere in town.' },
    { en: 'adventurous', pt: 'aventureiro',
      def: 'willing to take risks and have new experiences',
      ex: 'If you are feeling adventurous, take the unmarked path.' },
    { en: 'breathtaking', pt: 'de tirar o fôlego',
      def: 'very beautiful or amazing',
      ex: 'The view from the last bend is breathtaking, and it is free.' },
    { en: 'charm', pt: 'charme / encanto',
      def: 'the quality of being pleasant and attractive',
      ex: 'Half the charm of this street is that nobody photographs it.' },
    { en: 'convenience', pt: 'conveniência / comodidade',
      def: 'ease; suitability',
      ex: 'For convenience, start the route at the bus station.' },
    { en: 'destination', pt: 'destino',
      def: 'the place you are going to',
      ex: 'Our final destination is a bakery that opens at five in the morning.' },
    { en: 'diverse', pt: 'diverso / variado',
      def: 'varied or different',
      ex: 'The food here is more diverse than in any capital city.' },
    { en: 'get away', pt: 'dar uma escapada',
      def: 'to go away on vacation',
      ex: 'People come here to get away from noise, not to find more of it.' },
    { en: 'luxurious', pt: 'luxuoso',
      def: 'comfortable and expensive',
      ex: 'Nothing here is luxurious, and that is the point.' },
    { en: 'picturesque', pt: 'pitoresco',
      def: 'attractive, especially in an old-fashioned way',
      ex: 'The picturesque part is small — about four streets.' },
    { en: 'remote', pt: 'remoto / distante',
      def: 'far away',
      ex: 'The village is remote, so bring cash and patience.' },
    { en: 'spot', pt: 'ponto / lugar',
      def: 'a place or location',
      ex: 'This is the best spot to watch the boats come back.' },
    { en: 'tranquil', pt: 'tranquilo',
      def: 'calm and peaceful',
      ex: 'By nine at night the whole square is tranquil again.' }
  ];

  const EXTRA_WORDS = [
    { en: 'atmosphere ·+', pt: 'atmosfera / clima do lugar',
      def: 'the character or feeling of a place',
      ex: 'The atmosphere changes completely when the fishermen return.' },
    { en: 'end up ·+', pt: 'acabar (em algum lugar/situação)',
      def: 'to arrive at a place or condition, often unplanned',
      ex: 'Most people end up staying two days longer than they planned.' },
    { en: 'landmark ·+', pt: 'ponto de referência',
      def: 'a well-known building or place',
      ex: 'There is no famous landmark here, which keeps the buses away.' },
    { en: 'outsider ·+', pt: 'forasteiro',
      def: 'a stranger; someone who does not belong to a group',
      ex: 'You will feel like an outsider for about an hour.' },
    { en: 'perspective ·+', pt: 'perspectiva / ponto de vista',
      def: 'a point of view',
      ex: 'A local guide gives you a perspective no guidebook has.' },
    { en: 'solitude ·+', pt: 'solidão (boa)',
      def: 'the state of being alone, usually by choice',
      ex: 'If you want solitude, walk north; if you want people, walk south.' },
    { en: 'spontaneous ·+', pt: 'espontâneo / sem planejar',
      def: 'coming from an impulse; unplanned',
      ex: 'The best evenings here are spontaneous.' },
    { en: 'timid ·+', pt: 'tímido / receoso',
      def: 'lacking confidence; shy',
      ex: 'Do not be timid about asking — everyone gives directions.' }
  ];

  DF.PLAN.wc1[2] = {
    unit: 2,
    title: 'The World Awaits',
    subtitle: 'Seu segundo mês',
    icon: '🧭',

    mindmap: {
      center: 'The World Awaits',
      sub: 'Descrever lugares, recomendar e aconselhar',
      branches: [
        {
          icon: '🗺️', name: 'Describing a place',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary, não do Word Bank da aula. ' +
                '<b>Armadilha:</b> <b>picturesque</b> e <b>luxurious</b> não são sinônimos de ' +
                '"bonito" e "caro" — picturesque carrega um tom de <i>antiquado e charmoso</i>, ' +
                'e chamar um hotel simples de luxurious soa irônico.'
        },
        {
          icon: '🎯', name: 'Infinitive — the six uses',
          leaves: [
            { en: 'I went overseas to study English.', pt: '1 · propósito (para quê)' },
            { en: 'It was great to live abroad.', pt: '2 · it + be + adjetivo + infinitivo' },
            { en: 'It was too hard to communicate.', pt: '3 · too + adjetivo + infinitivo' },
            { en: 'I decided to stay another week.', pt: 'verbo + infinitivo' },
            { en: 'I want you to see this place.', pt: 'verbo + objeto + infinitivo' }
          ],
          note: 'O <b>to</b> de propósito responde "<b>para quê?</b>". Português usa "para" — ' +
                'e o brasileiro às vezes escreve <i>for study</i>. Nunca: é <b>to study</b>.'
        },
        {
          icon: '🔄', name: 'Gerund — when -ing wins',
          leaves: [
            { en: 'Learning the language was essential.', pt: '4 · gerúndio como SUJEITO' },
            { en: 'famous for skiing in the winter', pt: '5 · adjetivo + preposição + gerúndio' },
            { en: 'I look forward to going back.', pt: '6 · verbo + preposição + gerúndio' },
            { en: 'I am interested in walking, not driving.', pt: 'interested IN + -ing' },
            { en: 'I am used to getting lost.', pt: 'used TO + -ing' }
          ],
          note: '<b>A armadilha número um deste nível:</b> depois de PREPOSIÇÃO vem sempre ' +
                '<b>-ing</b>. Em <i>look forward <b>to</b> going</i>, o <b>to</b> é preposição, ' +
                'não infinitivo. Por isso <i>look forward to go</i> está errado. Teste: se dá ' +
                'pra trocar por um substantivo (<i>look forward to the trip</i>), é preposição.'
        },
        {
          icon: '🥁', name: 'Stress shift with suffixes',
          leaves: [
            { en: 'PHOtograph → photoGRAPHic', pt: '-ic puxa a força' },
            { en: 'PUBlic → pubLIcity', pt: '-ity puxa a força' },
            { en: 'anTIcipate → anticiPAtion', pt: '-ion puxa a força' },
            { en: 'PLAY → PLAYing', pt: '-ing NÃO muda nada' },
            { en: 'HEro → heROic', pt: '-ic de novo' }
          ],
          note: 'Os sufixos <b>-ic · -ity · -ion · -ical</b> jogam a força para a sílaba ' +
                '<b>imediatamente anterior</b> a eles. Já <b>-ing · -ly · -ness · -ment</b> ' +
                'não mexem em nada.'
        },
        {
          icon: '💬', name: 'Advice — the four moves',
          leaves: [
            { en: 'How about taking the night train?', pt: 'SUGERIR — How about + -ing' },
            { en: 'One thing you could do is walk it.', pt: 'SUGERIR — could do is + infinitivo' },
            { en: "That's a good idea. I'll give it a shot.", pt: 'ACEITAR' },
            { en: 'One problem with that is the cost.', pt: 'QUESTIONAR' },
            { en: "I'm not sure that would work for me.", pt: 'RECUSAR (sem ofender)' }
          ],
          note: 'Repare que a própria estratégia treina a gramática da unidade: ' +
                '<b>How about</b> e <b>Have you thought about</b> pedem <b>-ing</b>; ' +
                '<b>One thing you could do is</b> pede <b>infinitivo sem to</b>.'
        },
        {
          icon: '✍️', name: 'Show, don\'t tell',
          leaves: [
            { en: 'The streets are nice.', pt: '❌ não mostra nada' },
            { en: 'The wide streets are lined with trees.', pt: '✅ o leitor vê' },
            { en: 'The place is lively.', pt: '❌ genérico' },
            { en: 'Diverse groups of performers fill the streets.', pt: '✅ concreto' }
          ],
          note: 'A régua da unidade: <b>não diga que é bonito — faça o leitor ver</b>. ' +
                'Troque o adjetivo genérico por um detalhe que só existe naquele lugar.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🧭',
        title: 'Overview · Vocabulary · Grammar',
        goal: 'Describe a place so the listener can see it, using gerunds and infinitives.',
        comp: 'Você descreve um lugar com detalhe concreto (não com adjetivo genérico) e ' +
              'escolhe entre -ing e to sem travar depois de preposição.',
        live: [
          'The unit opener: the Greek island photo and the three warm-up questions',
          'Vocabulary page: the four vacation places and the Word Bank',
          'Grammar page: the six uses of infinitives and gerunds',
          'The Italy / Rio paragraph completion',
          'Pair work: describing a place you visited recently'
        ],
        bridge: 'Na aula você viu os seis usos na tabela e completou os parágrafos do livro. ' +
                'Aqui a decisão -ing × to vira drill sob pressão, você ganha 8 palavras que o ' +
                'Word Bank não traz, e descreve um lugar SEU pro Slow Route.',
        nextLive: 'Semana 2 · Listening + Pronunciation — o tour a pé e o deslocamento da ' +
                  'sílaba tônica com sufixos.',
        ican: [
          'I can describe a place with concrete detail instead of empty adjectives.',
          'I can use -ing after a preposition without hesitating.',
          'I can use the purpose infinitive to say why I went somewhere.',
          'I can use the unit vocabulary to compare two places.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u2w1:cards:core',
                title: '📇 Thirteen words for describing places',
                sub: 'Exemplos do Slow Route — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u2w1:cards:extra',
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
              { ui: 'choice', cat: 'voc', srsId: 'wc1u2w1:wf:1',
                title: '🔤 Which word fits?',
                main: 'The village is only ___ by boat — there is no road.',
                options: DF.shuffle([
                  { label: 'accessible', correct: true }, { label: 'convenient' },
                  { label: 'remote' }, { label: 'diverse' }
                ]),
                expl: 'accessible = dá pra chegar. remote = fica longe. Uma coisa pode ser ' +
                      'remote E accessible ao mesmo tempo.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u2w1:wf:2',
                title: '🔤 Which word fits?',
                main: 'Half the ___ of the town is that the buildings have not changed.',
                options: DF.shuffle([
                  { label: 'charm', correct: true }, { label: 'atmosphere' },
                  { label: 'landmark' }, { label: 'perspective' }
                ]),
                expl: 'charm = o encanto (o que faz gostar). atmosphere = o clima que se sente.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u2w1:wf:3',
                title: '🔤 Complete:',
                main: 'We planned two days and ___ staying a week.',
                options: DF.shuffle([
                  { label: 'ended up', correct: true }, { label: 'got away' },
                  { label: 'ended' }, { label: 'ended up to' }
                ]),
                expl: 'end up + <b>-ing</b> = acabar fazendo. Nunca "ended up to stay".' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u2w1:wf:4',
                title: '🔤 Which is the noun form?',
                main: 'The hotel offers every modern ___.',
                options: DF.shuffle([
                  { label: 'convenience', correct: true }, { label: 'convenient' },
                  { label: 'conveniently' }, { label: 'inconvenient' }
                ]),
                expl: 'convenience = substantivo · convenient = adjetivo.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u2w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['tranquil', 'calm and peaceful'],
                  ['picturesque', 'attractive in an old-fashioned way'],
                  ['solitude', 'being alone, usually by choice'],
                  ['outsider', 'someone who does not belong'],
                  ['spontaneous', 'unplanned, on impulse']
                ] }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Gerund or infinitive?', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u2w1:read:glance',
                title: '🔍 One decision, six situations',
                textTitle: 'When -ing, when to',
                readAloud: false,
                text:
                  'INFINITIVE (to + verb)\n\n' +
                  '1. PURPOSE — answers "what for?"\n' +
                  'I went to Lisbon to see my cousin.\n\n' +
                  '2. IT + BE + ADJECTIVE + INFINITIVE\n' +
                  'It was easy to find the harbour.\n\n' +
                  '3. TOO + ADJECTIVE + INFINITIVE\n' +
                  'The path was too steep to climb in sandals.\n\n' +
                  'GERUND (verb + -ing)\n\n' +
                  '4. AS THE SUBJECT of the sentence\n' +
                  'Walking is the only way to see this street.\n\n' +
                  '5. AFTER ADJECTIVE + PREPOSITION\n' +
                  'The town is famous for making cheese.\n\n' +
                  '6. AFTER VERB + PREPOSITION\n' +
                  'I look forward to coming back.\n\n' +
                  'A ARMADILHA NUMERO UM: depois de PREPOSICAO vem sempre -ing. Em "look ' +
                  'forward TO coming", o TO e preposicao, nao infinitivo — por isso "look ' +
                  'forward to come" esta errado. O teste: se da pra trocar por um substantivo ' +
                  '("look forward to the trip"), entao e preposicao, e o verbo vira -ing.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w1:gi:1',
                title: '🎯 Choose the correct form:',
                main: "I'm looking forward to ___ the coast road.",
                options: DF.shuffle([
                  { label: 'driving', correct: true }, { label: 'drive' },
                  { label: 'to drive' }, { label: 'drove' }
                ]),
                expl: 'look forward <b>to</b> é preposição → -ing. É o erro mais comum do ' +
                      'brasileiro nesta unidade.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w1:gi:2',
                title: '🎯 Choose the correct form:',
                main: 'I went back in October ___ the crowds.',
                options: DF.shuffle([
                  { label: 'to avoid', correct: true }, { label: 'for avoid' },
                  { label: 'avoiding' }, { label: 'for avoiding' }
                ]),
                expl: 'Propósito ("para quê?") → infinitivo com to. Nunca "for + verbo".' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w1:gi:3',
                title: '🎯 Choose the correct form:',
                main: '___ early is the only way to have the square to yourself.',
                options: DF.shuffle([
                  { label: 'Waking up', correct: true }, { label: 'To wake up' },
                  { label: 'Wake up' }, { label: 'Woken up' }
                ]),
                expl: 'Sujeito da frase → gerúndio. "To wake up" no início existe, mas soa ' +
                      'formal e raro; o natural é -ing.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w1:gi:4',
                title: '🎯 Choose the correct form:',
                main: 'The island is famous for ___ the best bread in the region.',
                options: DF.shuffle([
                  { label: 'making', correct: true }, { label: 'make' },
                  { label: 'to make' }, { label: 'made' }
                ]),
                expl: 'famous <b>for</b> = adjetivo + preposição → -ing.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w1:gi:5',
                title: '🎯 Choose the correct form:',
                main: 'The water was too cold ___ in.',
                options: DF.shuffle([
                  { label: 'to swim', correct: true }, { label: 'swimming' },
                  { label: 'for swim' }, { label: 'to swimming' }
                ]),
                expl: 'too + adjetivo + <b>to</b> + verbo. Estrutura fixa.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w1:gi:6',
                title: '🎯 Which sentence is WRONG?',
                main: 'Only one breaks the preposition rule.',
                options: DF.shuffle([
                  { label: "I'm used to walk everywhere.", correct: true },
                  { label: "I'm used to walking everywhere." },
                  { label: 'I used to walk everywhere.' },
                  { label: 'I want to walk everywhere.' }
                ]),
                expl: '<b>be used TO + -ing</b> (estar acostumado) × <b>used to + verbo</b> ' +
                      '(costumava). Duas estruturas diferentes que o brasileiro funde.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w1:gi:7',
                title: '🎯 Choose the correct form:',
                main: 'It was great ___ somewhere with no schedule.',
                options: DF.shuffle([
                  { label: 'to go', correct: true }, { label: 'going' },
                  { label: 'go' }, { label: 'for going' }
                ]),
                expl: 'It + be + adjetivo → infinitivo com to.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u2w1:tf:1',
                title: '🔀 Travel talk transformation',
                rounds: [
                  { base: 'She is interested in walking the coast.', cmd: 'Question',
                    answers: ['Is she interested in walking the coast?'] },
                  { base: 'They decided to stay another night.', cmd: 'Negative',
                    answers: ["They didn't decide to stay another night.",
                              'They did not decide to stay another night.'] },
                  { base: 'He is looking forward to going back.', cmd: 'Question',
                    answers: ['Is he looking forward to going back?'] },
                  { base: 'We are used to getting lost.', cmd: 'Negative',
                    answers: ["We aren't used to getting lost.",
                              'We are not used to getting lost.'] },
                  { base: 'Do you enjoy travelling alone?', cmd: 'Short answer',
                    answers: ['Yes, I do.', 'No, I do not.', "No, I don't."] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u2w1:drl:fwd', unit: 2, waSec: 'Drill · gerúndio',
                title: '🔁 Drill 1 — the activity changes', focus: 'preposição + -ing',
                frame: "I'm looking forward to ___.", ptHint: 'Estou ansioso para ___.',
                slots: ['hiking along the coast', 'eating at street stalls',
                        'getting lost on purpose', 'walking before sunrise',
                        'taking the slow train'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u2w1:drl:purpose', unit: 2, waSec: 'Drill · infinitivo',
                title: '🔁 Drill 2 — the purpose changes', focus: 'infinitivo de propósito',
                frame: 'I went back ___.', ptHint: 'Voltei lá para ___.',
                slots: ['to see the harbour again', 'to avoid the crowds',
                        'to visit my cousin', 'to finish the walk', 'to take better photos'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u2w1:drl:adj', unit: 2, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 3 — the adjective changes', focus: 'descrever lugar',
                frame: 'The view from the top is ___.', ptHint: 'A vista lá de cima é ___.',
                slots: ['breathtaking', 'picturesque', 'tranquil', 'spectacular', 'diverse'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u2w1:drl:famous', unit: 2, waSec: 'Drill · gerúndio',
                title: '🔁 Drill 4 — what the place is known for', focus: 'famous for + -ing',
                frame: 'The town is famous for ___.', ptHint: 'A cidade é famosa por ___.',
                slots: ['making cheese', 'building boats', 'growing coffee',
                        'hosting a winter festival', 'selling fish at dawn'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u2w1:bc:1', unit: 2, waSec: 'Backchain',
                title: '🧱 The preposition trap, spoken',
                ptHint: 'Estou ansioso para voltar lá no ano que vem.',
                chain: ['next year', 'going back next year', 'to going back next year',
                        "I'm looking forward to going back next year."] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u2w1:bc:2', unit: 2, waSec: 'Backchain',
                title: '🧱 Purpose, at length',
                ptHint: 'Peguei o trem noturno para evitar as multidões de verão.',
                chain: ['the summer crowds', 'to avoid the summer crowds',
                        'the night train to avoid the summer crowds',
                        'I took the night train to avoid the summer crowds.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u2w1:bc:3', unit: 2, waSec: 'Backchain',
                title: '🧱 The gerund subject',
                ptHint: 'Andar devagar é a única forma de ver essa rua de verdade.',
                chain: ['this street', 'to really see this street',
                        'the only way to really see this street',
                        'Walking slowly is the only way to really see this street.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u2w1:dlg:1',
                title: '🎧 Two contributors compare routes',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'So why did you go back in November?' },
                  { who: 'Elias', en: 'To avoid the crowds. In August it is impossible to walk.' },
                  { who: 'Nadia', en: 'Were you not worried about the rain?' },
                  { who: 'Elias', en: 'I am used to walking in the rain. It makes it tranquil.' }
                ],
                question: 'Why did Elias travel in November?',
                options: DF.shuffle([
                  { label: 'To avoid the crowds', correct: true },
                  { label: 'Because he likes rain more than sun' },
                  { label: 'Because August is too expensive' },
                  { label: 'To meet Nadia there' }
                ]),
                expl: 'Ele responde com o infinitivo de propósito: "To avoid the crowds."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u2w1:dlg:2',
                title: '🎧 A correction between colleagues',
                sub: 'Repare exatamente o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'I look forward to visit the island again.' },
                  { who: 'Tomás', en: 'To visiting. After "forward to" you need the -ing.' },
                  { who: 'Priya', en: 'Right — I look forward to visiting it again.' },
                  { who: 'Tomás', en: 'Exactly. That "to" is a preposition, not an infinitive.' }
                ],
                question: 'Why is it "visiting" and not "visit"?',
                options: DF.shuffle([
                  { label: 'The "to" in "look forward to" is a preposition', correct: true },
                  { label: 'Because the sentence is in the past' },
                  { label: 'Because "visit" has no infinitive form' },
                  { label: 'Because the subject is plural' }
                ]),
                expl: 'Mesma regra da tela anterior, agora ouvida numa conversa.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u2w1:dlg:3',
                title: '🎧 Three contributors, no text on screen',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Amara', en: 'I prefer remote places. Solitude is the point for me.' },
                  { who: 'Kenji', en: 'Not me. I end up looking for the busiest market.' },
                  { who: 'Larissa', en: 'I want both — a tranquil morning and a diverse evening.' }
                ],
                question: 'Who wants two different things in the same trip?',
                options: DF.shuffle([
                  { label: 'Larissa', correct: true }, { label: 'Amara' },
                  { label: 'Kenji' }, { label: 'All three' }
                ]),
                expl: '"a tranquil morning AND a diverse evening" — as duas pontas.'
              }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'gra', srsId: 'wc1u2w1:ord:1',
                title: '🧩 Build the sentence:',
                answer: 'Getting up early is the best way to avoid the crowds',
                expl: 'Gerúndio como sujeito + infinitivo de propósito, na mesma frase.' },
              { ui: 'type', cat: 'gra', srsId: 'wc1u2w1:type:1',
                title: '✍️ Complete with ONE word:',
                main: "I'm interested ___ learning the local recipes.",
                answers: ['in'],
                expl: 'interested <b>in</b> + -ing. A preposição certa é parte do vocabulário.' },
              { ui: 'type', cat: 'gra', srsId: 'wc1u2w1:type:2',
                title: '✍️ Complete with ONE word:',
                main: 'The path was ___ narrow to walk side by side.',
                answers: ['too'],
                expl: 'too + adjetivo + to + verbo.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u2w1:match:six',
                title: '🔗 Match each example to its use:',
                pairs: [
                  ['I went there to study.', 'purpose'],
                  ['Walking is free.', 'gerund as subject'],
                  ['famous for making bread', 'adjective + preposition'],
                  ['too cold to swim', 'too + adjective'],
                  ['look forward to going', 'verb + preposition']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w1:bld:1', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Your street, in three details',
                prompt: 'Describe the street where you live — but no generic adjectives. ' +
                        'Give three things a visitor would actually see.',
                example: 'My street has a bakery that opens at five, a mango tree that ruins ' +
                         'every car parked under it, and dogs that know everyone.',
                mustUse: ['street'],
                expl: 'Este é o outcome 1 — descriptive language. "Nice" e "beautiful" não ' +
                      'contam.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w1:bld:2', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Why you went',
                prompt: 'Think of a trip you took. Say where you went and WHY, using the ' +
                        'purpose infinitive.',
                example: 'I went to Salvador to see the old city and to eat properly for once.',
                mustUse: ['to'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w1:bld:3', unit: 2, waSec: 'Sua vez',
                title: '🗣️ What you look forward to',
                prompt: 'Say one thing you are looking forward to doing this year. ' +
                        'Watch the -ing.',
                example: "I'm looking forward to taking my daughter to the beach in December.",
                mustUse: ['forward'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w1:bld:4', unit: 2, waSec: 'Sua vez',
                title: '🗣️ What your town is famous for',
                prompt: 'Complete and expand: "My town is famous for ___". Use -ing.',
                example: 'My town is famous for producing oil — and for having the worst ' +
                         'traffic in the state.',
                mustUse: ['famous'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w1+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Sixty seconds on a place you love',
                prompt: 'Describe a place you love for one minute. Use at least two gerunds ' +
                        'and two infinitives.',
                example: '(1 minuto, sem parar)',
                expl: 'Grave e mande — o professor conta os gerúndios e infinitivos.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w1+:b2', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Fix it out loud',
                prompt: 'This is wrong: "I look forward to meet you." Say it correctly and ' +
                        'explain why in English.',
                example: 'I look forward to meeting you — because "to" there is a preposition, ' +
                         'so the verb takes -ing.',
                mustUse: ['meeting'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de gerúndio', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm looking forward to ___.", pool: 'travelAct',
                  focus: 'preposição + -ing', ptHint: 'Estou ansioso para ___.', n: 5 },
                { frame: 'The view from there is ___.', pool: 'placeAdj',
                  focus: 'descrever lugar', ptHint: 'A vista de lá é ___.', n: 5 },
                { frame: 'The best part of the route is ___.', pool: 'spot',
                  focus: 'vocabulário', ptHint: 'A melhor parte do roteiro é ___.', n: 5 }
              ],
              backchain: [
                { text: "I'm looking forward to {travelAct}.", ptHint: 'Estou ansioso para…' },
                { text: 'We ended up at {spot}.', ptHint: 'Acabamos em…' }
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
        goal: 'Take usable notes on a spoken tour, and move the stress when a suffix demands it.',
        comp: 'Você ouve alguém descrevendo um percurso, anota o essencial em abreviação, e ' +
              'pronuncia photograph → photographic sem deixar a força no lugar errado.',
        live: [
          'Listening: the walking tour of Beijing, eight stops on a map',
          'The TIP on abbreviations and symbols for fast note-taking',
          'Pronunciation: stress changes with prefixes and suffixes (p.145)',
          'Video: street life in Barcelona — five speakers',
          'Pair work: telling a partner about each place on the tour'
        ],
        bridge: 'Na aula você marcou o mapa do livro. Aqui o tour é outro, do Slow Route, e a ' +
                'anotação vira exercício de decisão: o que cabe e o que não cabe na nota. ' +
                'E o deslocamento da tônica sai da tabela e vira ouvido.',
        nextLive: 'Semana 3 · Reading + Connections — a entrevista e o seu próprio roteiro a pé.',
        ican: [
          'I can note the key fact about each stop while someone is still talking.',
          'I can hear which syllable carries the stress after a suffix is added.',
          'I can say photographic, publicity and anticipation with the right stress.',
          'I can describe a route in the order it happens.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'suffix', icon: '🥁', name: 'The suffix that moves the stress', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'wc1u2w2:read:suffix',
                title: '🥁 Which suffixes move the stress',
                textTitle: 'Stress shift',
                readAloud: false,
                text:
                  'THESE MOVE IT — the stress jumps to the syllable right before the suffix:\n\n' +
                  '-ic      PHOtograph -> photoGRAPHic\n' +
                  '-ity     PUBlic -> pubLIcity\n' +
                  '-ion     anTIcipate -> anticiPAtion\n' +
                  '-ical    PHIlosophy -> philoSOPHical\n' +
                  '-graphy  PHOto -> phoTOgraphy\n\n' +
                  'THESE DO NOT MOVE IT — the word keeps its original stress:\n\n' +
                  '-ing     PLAY -> PLAYing\n' +
                  '-ly      IMmediate -> IMmediately\n' +
                  '-ness    HAPpy -> HAPpiness\n' +
                  '-ment    goVERN -> goVERNment\n' +
                  '-ful     CHEER -> CHEERful\n\n' +
                  'POR QUE ISSO IMPORTA: em ingles a silaba tonica errada e mais grave do que ' +
                  'o som errado. Quem fala "PHOtographic" costuma nao ser entendido, mesmo com ' +
                  'todos os fonemas certos — o ouvinte procura a palavra pelo ritmo antes de ' +
                  'procurar pelos sons.',
                nextLabel: 'Got it ▸' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u2w2:str:1', word: 'photographic',
                pattern: 'ooOo', decoys: ['Oooo', 'oOoo'], syl: 'pho-to-GRAPH-ic',
                expl: 'A raiz é PHOtograph, mas -ic puxa a força pra antes dele.' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u2w2:str:2', word: 'publicity',
                pattern: 'oOoo', decoys: ['Oooo', 'ooOo'], syl: 'pu-BLI-ci-ty' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u2w2:str:3', word: 'anticipation',
                pattern: 'ooOoo', decoys: ['Ooooo', 'oOooo'], syl: 'an-ti-ci-PA-tion' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u2w2:str:4', word: 'philosophical',
                pattern: 'ooOoo', decoys: ['Ooooo', 'oooOo'], syl: 'phi-lo-SO-phi-cal' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u2w2:str:5', word: 'immediately',
                pattern: 'oOooo', decoys: ['Ooooo', 'ooOoo'], syl: 'i-MME-di-ate-ly',
                expl: '-ly NÃO move nada: imMEdiate → imMEdiately.' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u2w2:str:6', word: 'picturesque',
                pattern: 'ooO', decoys: ['Ooo', 'oOo'], syl: 'pic-tu-RESQUE',
                expl: 'Palavra da unidade, e a força vai no FIM — o brasileiro quase sempre ' +
                      'põe em PICture.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u2w2:sfx:1',
                title: '🥁 Does the stress move?', main: 'energy → energetic',
                options: DF.shuffle([
                  { label: 'Yes — it moves', correct: true }, { label: 'No — it stays' }
                ]),
                expl: 'ENergy → enerGEtic. O -ic move.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u2w2:sfx:2',
                title: '🥁 Does the stress move?', main: 'care → careful',
                options: DF.shuffle([
                  { label: 'No — it stays', correct: true }, { label: 'Yes — it moves' }
                ]),
                expl: '-ful não move: CARE → CAREful.' }
            ]
          },

          {
            id: 'say-sfx', icon: '🎤', name: 'Say the pair', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u2w2:rep:1', unit: 2, waSec: 'Stress shift',
                title: '🎤 Say both, hear the jump:', target: 'photograph — photographic',
                ptHint: 'fotografia — fotográfico' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u2w2:rep:2', unit: 2, waSec: 'Stress shift',
                title: '🎤 Say both:', target: 'public — publicity',
                ptHint: 'público — publicidade' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u2w2:rep:3', unit: 2, waSec: 'Stress shift',
                title: '🎤 The one from this unit:', target: 'This village is picturesque.',
                ptHint: 'Esta vila é pitoresca.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u2w2:rep:4', unit: 2, waSec: 'Stress shift',
                title: '🎤 Three unit words in one sentence:',
                target: 'The remote, tranquil harbour is completely accessible on foot.',
                ptHint: 'O porto remoto e tranquilo é totalmente acessível a pé.' }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'The Slow Route tour', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u2w2:dlg:tour',
                title: '👂 Stop 1 and 2 of the route',
                sub: 'Sem texto na tela. Anote mentalmente: onde, e o que se faz lá.',
                hideText: true,
                lines: [
                  { who: 'Guide', en: 'We start at the fish market, which opens at four in ' +
                                      'the morning and is empty by nine.' },
                  { who: 'Guide', en: 'Do not buy anything yet. Just watch how they shout ' +
                                      'the prices.' },
                  { who: 'Guide', en: 'Our second stop is the old tile factory. It closed in ' +
                                      'the eighties, but the ovens are still there.' }
                ],
                question: 'What are you told NOT to do at the first stop?',
                options: DF.shuffle([
                  { label: 'Buy anything', correct: true },
                  { label: 'Take photographs' },
                  { label: 'Talk to the sellers' },
                  { label: 'Arrive before nine' }
                ]),
                expl: 'A instrução negativa é fácil de perder quando vem no meio. ' +
                      '"Do not buy anything yet."'
              },
              { ui: 'type', cat: 'fun', srsId: 'wc1u2w2:type:1',
                title: '👂 What time does the fish market open?',
                sub: 'Só o número da hora.',
                tts: 'We start at the fish market, which opens at four in the morning.',
                answers: ['4'], exact: true,
                expl: 'four in the morning = 4.' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u2w2:dlg:tour2',
                title: '👂 Stops 3, 4 and 5',
                sub: 'Três paradas seguidas. A última tem um detalhe que muda tudo.',
                hideText: true,
                lines: [
                  { who: 'Guide', en: 'Third, the bookshop on the corner. The owner speaks ' +
                                      'four languages and will test all of them on you.' },
                  { who: 'Guide', en: 'Fourth, a staircase with no name. It is steep, so it ' +
                                      'is too hard to climb with heavy bags.' },
                  { who: 'Guide', en: 'And fifth, the terrace at the top — which is closed ' +
                                      'on Mondays.' }
                ],
                question: 'What is the practical warning about the fifth stop?',
                options: DF.shuffle([
                  { label: 'It is closed on Mondays', correct: true },
                  { label: 'It is too steep to climb' },
                  { label: 'The owner only speaks four languages' },
                  { label: 'It opens at four in the morning' }
                ]),
                expl: 'O aviso vem no fim, quase de passagem — é exatamente onde o ouvinte ' +
                      'relaxa e perde a informação.'
              },
              { ui: 'order', cat: 'fun', srsId: 'wc1u2w2:ord:route',
                title: '🧩 Put the route in order:',
                answer: 'We start at the fish market then we walk to the old tile factory ' +
                        'after that we stop at the bookshop and we finish on the terrace',
                expl: 'start → then → after that → finish. São as palavras que organizam ' +
                      'qualquer descrição de percurso.' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u2w2:match:notes',
                title: '🔗 Match each stop to its one useful note:',
                pairs: [
                  ['fish market', 'opens 4am, empty by 9'],
                  ['tile factory', 'closed since the 80s, ovens remain'],
                  ['bookshop', 'owner speaks 4 languages'],
                  ['staircase', 'steep — no heavy bags'],
                  ['terrace', 'closed Mondays']
                ] }
            ]
          },

          {
            id: 'describe', icon: '🗣️', name: 'Tell the route back', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'fun', srsId: 'wc1u2w2:bc:1', unit: 2, waSec: 'Backchain',
                title: '🧱 The warning sentence',
                ptHint: 'É íngreme demais para subir com bagagem pesada.',
                chain: ['with heavy bags', 'to climb with heavy bags',
                        'too steep to climb with heavy bags',
                        'It is too steep to climb with heavy bags.'] },
              { ui: 'backchain', cat: 'fun', srsId: 'wc1u2w2:bc:2', unit: 2, waSec: 'Backchain',
                title: '🧱 The opening sentence of any tour',
                ptHint: 'Começamos no mercado de peixe, que abre às quatro da manhã.',
                chain: ['at four in the morning', 'which opens at four in the morning',
                        'the fish market, which opens at four in the morning',
                        'We start at the fish market, which opens at four in the morning.'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w2:bld:1', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Retell the route',
                prompt: 'From memory, describe the five stops in order. One sentence each.',
                example: '(5 frases, na ordem)',
                expl: 'Sem olhar de novo. Se você não lembra de uma parada, é sinal de que a ' +
                      'nota mental não pegou o essencial.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w2:bld:2', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Your own first stop',
                prompt: 'If you designed a walking tour of YOUR area, what would stop number ' +
                        'one be, and why?',
                example: 'Stop one would be the fish market at the port, because it is the ' +
                         'only place where the town still behaves like it did fifty years ago.',
                mustUse: ['because'] }
            ]
          },

          {
            id: 'practice-w2', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u2w2:wr:1',
                title: '📝 Complete:',
                main: 'The old quarter has an ___ you cannot photograph.',
                options: DF.shuffle([
                  { label: 'atmosphere', correct: true }, { label: 'accessible' },
                  { label: 'destination' }, { label: 'landmark' }
                ]),
                expl: 'atmosphere = o clima do lugar, justamente o que a foto não pega.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w2:wr:2',
                title: '📝 Complete:',
                main: 'The terrace is worth ___ even if you arrive late.',
                options: DF.shuffle([
                  { label: 'visiting', correct: true }, { label: 'to visit' },
                  { label: 'visit' }, { label: 'for visiting' }
                ]),
                expl: '<b>worth + -ing</b> é estrutura fixa. "worth to visit" não existe.' },
              { ui: 'type', cat: 'pro', srsId: 'wc1u2w2:wr:3',
                title: '✍️ Write the noun form of "anticipate":',
                answers: ['anticipation'],
                expl: 'E a força muda: anTIcipate → anticiPAtion.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w2+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 The whole route in one breath',
                prompt: 'Describe all five stops in a single continuous take, with no pauses ' +
                        'longer than two seconds.',
                example: '(60 a 90 segundos)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w2+:b2', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Five stress pairs in a row',
                prompt: 'Say these five pairs out loud, one after the other: photograph/' +
                        'photographic, public/publicity, energy/energetic, hero/heroic, ' +
                        'philosophy/philosophical.',
                expl: 'O professor ouve só se a força pula no lugar certo nas cinco.' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de descrição', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The best stop on the route is ___.', pool: 'spot',
                  focus: 'descrever percurso', ptHint: 'A melhor parada do roteiro é ___.', n: 5 },
                { frame: 'The whole place feels ___.', pool: 'placeAdj',
                  focus: 'adjetivos', ptHint: 'O lugar inteiro parece ___.', n: 5 }
              ],
              backchain: [
                { text: 'We start at {spot} and we finish before dark.',
                  ptHint: 'Começamos em… e terminamos antes de escurecer.' }
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
        goal: 'Read a personal interview for attitude, and build a route you would defend.',
        comp: 'Você identifica o que um viajante realmente pensa (não só o que ele faz), e ' +
              'monta e justifica um roteiro seu.',
        live: [
          'Reading: the interview with the singer-songwriter',
          'Matching the six statements to what he actually says',
          'Finding the word in the paragraph that means X',
          'Connections: designing your own walking tour with a partner',
          'Role-play: tour guide and tourist with the maps'
        ],
        bridge: 'Na aula você leu a entrevista do livro e montou um roteiro em dupla. Aqui a ' +
                'entrevista é outra — uma colaboradora do Slow Route — e o roteiro passa a ' +
                'ser defendido: por que ESTA parada e não outra.',
        nextLive: 'Semana 4 · Writing + Speaking — o parágrafo descritivo e a lista do que ' +
                  'você quer fazer na vida.',
        ican: [
          'I can tell what a writer believes from how they describe things.',
          'I can find the word in a text that matches a definition.',
          'I can justify why a place belongs on a route.',
          'I can recommend a place to a specific kind of traveller.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: Nobody Photographs This Street', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u2w3:read:text',
                title: '📖 An interview, new text',
                textTitle: 'Nobody Photographs This Street — an interview with Amara Reis',
                text:
                  'Amara Reis has written forty-one walking routes for The Slow Route. She has ' +
                  'never written one for a capital city.\n\n' +
                  '"People ask me for the best spot, and I always give them the wrong answer ' +
                  'on purpose. The best spot is wherever you are standing when you stop ' +
                  'checking your phone. I cannot put that on a map."\n\n' +
                  'She works slowly. A single route takes her three or four visits, always at ' +
                  'different hours. "A street at seven in the morning and the same street at ' +
                  'seven at night are two different streets. Most guidebooks only know one of ' +
                  'them, usually the afternoon one, which is the least interesting."\n\n' +
                  'She is suspicious of the word picturesque. "It means somebody already ' +
                  'decided the place was beautiful, and now you are just confirming it. I ' +
                  'would rather send you somewhere ordinary and let you be surprised. Being ' +
                  'surprised is the whole reason to travel."\n\n' +
                  'Her routes never include the famous landmark of a town, though she insists ' +
                  'this is not a rule. "If the landmark is genuinely good, I put it in. It is ' +
                  'just that most of them are not. They are simply old and photographed."\n\n' +
                  'She has one piece of advice for new contributors. "Write about what you ' +
                  'can hear, not only what you can see. Anyone can describe a building. ' +
                  'Almost nobody describes the sound of a place, and that is what people ' +
                  'actually remember."',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u2w3:q:1',
                title: '📖 Which statement applies to Amara?',
                main: 'Based on what she actually says.',
                options: DF.shuffle([
                  { label: 'She visits a street several times before writing about it',
                    correct: true },
                  { label: 'She writes each route in a single afternoon' },
                  { label: 'She refuses to include any famous landmark, ever' },
                  { label: 'She believes capital cities are the best subject' }
                ]),
                expl: '"three or four visits, always at different hours".' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u2w3:q:2',
                title: '📖 Why is she suspicious of "picturesque"?',
                main: 'Find her reason.',
                options: DF.shuffle([
                  { label: 'It means the judgement was already made for you', correct: true },
                  { label: 'It is too difficult a word for readers' },
                  { label: 'It only applies to old buildings' },
                  { label: 'It is not used by real travellers' }
                ]),
                expl: '"somebody already decided the place was beautiful, and now you are just ' +
                      'confirming it."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u2w3:q:3',
                title: '📖 True or false: she has a rule against landmarks.',
                main: 'Read the fifth paragraph carefully.',
                options: DF.shuffle([
                  { label: 'False — she says it is not a rule', correct: true },
                  { label: 'True — she never includes them' },
                  { label: 'True — but only in capital cities' },
                  { label: 'The text does not say' }
                ]),
                expl: '"though she insists this is not a rule" — e ela explica quando inclui. ' +
                      'Ler só a primeira metade da frase te faz errar.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u2w3:q:4',
                title: '📖 What is her advice to new writers?',
                main: '',
                options: DF.shuffle([
                  { label: 'Describe what you hear, not only what you see', correct: true },
                  { label: 'Always visit in the afternoon' },
                  { label: 'Never use adjectives' },
                  { label: 'Start with the most famous building' }
                ]),
                expl: 'É também a régua do writing da semana 4.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1u2w3:word:1',
                title: '📖 Find the word in the text that means "on purpose, not by accident":',
                sub: 'Uma palavra só, como aparece no texto.',
                answers: ['deliberately', 'on purpose'],
                expl: 'Está no segundo parágrafo: "I always give them the wrong answer <b>on ' +
                      'purpose</b>."' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u2w3:word:2',
                title: '🔗 Match the definition to the word from the text:',
                pairs: [
                  ['not trusting something', 'suspicious'],
                  ['normal, with nothing special', 'ordinary'],
                  ['a well-known building', 'landmark'],
                  ['to say firmly, again', 'insist'],
                  ['a person who writes for a publication', 'contributor']
                ] }
            ]
          },

          {
            id: 'advice', icon: '💬', name: 'Give, accept, question advice', tag: 'speaking',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u2w3:read:advice',
                title: '💬 The four moves of an advice conversation',
                textTitle: 'Advice, in four moves',
                readAloud: false,
                text:
                  'GIVING / SUGGESTING\n' +
                  'How about taking the early bus? (How about + -ing)\n' +
                  'Have you thought about going in winter? (thought about + -ing)\n' +
                  'One thing you could do is walk it. (could do is + bare infinitive)\n' +
                  'Another thing you could do is ask at the bakery.\n\n' +
                  'ACCEPTING\n' +
                  "Thanks, that's a good idea.\n" +
                  "OK, I'll give it a shot.\n" +
                  'That makes sense.\n\n' +
                  'QUESTIONING — you are not refusing, you are testing it\n' +
                  'I thought about doing that, but the buses stop at six.\n' +
                  'One problem with that is the cost.\n\n' +
                  'REFUSING — softly\n' +
                  "I'm not sure that would work for me.\n\n" +
                  'REPARE: a propria estrategia treina a gramatica desta unidade. How about e ' +
                  'Have you thought about pedem -ing porque about e preposicao. Ja One thing ' +
                  'you could do IS pede o verbo puro, sem to: "is WALK it", nao "is to walk".',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w3:ad:1',
                title: '💬 Complete the suggestion:',
                main: 'How about ___ the coast road instead?',
                options: DF.shuffle([
                  { label: 'taking', correct: true }, { label: 'to take' },
                  { label: 'take' }, { label: 'you take' }
                ]),
                expl: 'How <b>about</b> = preposição → -ing.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w3:ad:2',
                title: '💬 Complete the suggestion:',
                main: 'One thing you could do is ___ the guide directly.',
                options: DF.shuffle([
                  { label: 'ask', correct: true }, { label: 'asking' },
                  { label: 'to asking' }, { label: 'asked' }
                ]),
                expl: 'Depois de "could do is" vem o verbo puro. É a exceção que confunde.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u2w3:ad:3',
                title: '💬 Which one QUESTIONS the advice without refusing it?',
                main: 'Someone suggests taking the night train.',
                options: DF.shuffle([
                  { label: 'I thought about doing that, but it arrives at 4 a.m.',
                    correct: true },
                  { label: "No, I'm not doing that." },
                  { label: "OK, I'll give it a shot." },
                  { label: 'That makes sense.' }
                ]),
                expl: 'Questionar = mostrar que você considerou E levantar o obstáculo. ' +
                      'É a diferença entre discutir e recusar.' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u2w3:ad:4',
                title: '🔗 Match the phrase to its move:',
                pairs: [
                  ['Have you thought about…?', 'suggesting'],
                  ["OK, I'll give it a shot.", 'accepting'],
                  ['One problem with that is…', 'questioning'],
                  ["I'm not sure that would work for me.", 'refusing']
                ] },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u2w3:dlg:1',
                title: '💬 A route gets reviewed',
                sub: 'As quatro jogadas acontecem nesta ordem. Consegue ouvir?',
                lines: [
                  { who: 'Kenji', en: 'How about starting the route at the station instead?' },
                  { who: 'Amara', en: 'I thought about doing that, but the station is ugly ' +
                                      'at seven in the morning.' },
                  { who: 'Kenji', en: 'Another thing you could do is start at the bakery.' },
                  { who: 'Amara', en: "That makes sense. I'll give it a shot." }
                ],
                question: 'What does Amara do with the FIRST suggestion?',
                options: DF.shuffle([
                  { label: 'She questions it, giving a reason', correct: true },
                  { label: 'She accepts it immediately' },
                  { label: 'She refuses it rudely' },
                  { label: 'She ignores it' }
                ]),
                expl: '"I thought about doing that, but…" — questionar, não recusar. E aceita ' +
                      'a segunda.'
              }
            ]
          },

          {
            id: 'route', icon: '🧭', name: 'Build your own route', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w3:rt:1', unit: 2, waSec: 'Your route',
                title: '🧭 Stop 1 — and why',
                prompt: 'Name the first stop of your own walking tour and justify it in one ' +
                        'sentence.',
                example: 'Stop one is the fish market, because it is the only hour of the day ' +
                         'when the town is completely itself.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w3:rt:2', unit: 2, waSec: 'Your route',
                title: '🧭 Stop 2 — what you HEAR there',
                prompt: 'Describe your second stop using sound, following Amara advice.',
                example: 'The second stop is the square at six, when you can hear dominoes ' +
                         'hitting the tables and nothing else.',
                mustUse: ['hear'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w3:rt:3', unit: 2, waSec: 'Your route',
                title: '🧭 The stop you left OUT',
                prompt: 'Name the famous place in your town that you would NOT include, and ' +
                        'explain why not.',
                example: 'I would leave out the new shopping centre. It is impressive, but it ' +
                         'could be in any city in the world.',
                mustUse: ['would'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w3:rt:4', unit: 2, waSec: 'Your route',
                title: '💬 Now advise a traveller',
                prompt: 'A friend has one day in your town and hates crowds. Give two ' +
                        'suggestions using How about and One thing you could do is.',
                example: 'How about walking the seafront before eight? One thing you could do ' +
                         'is skip the centre completely and eat at the port.',
                mustUse: ['how about'],
                expl: 'Este é o outcome 4. As duas estruturas têm que aparecer na gravação.' }
            ]
          },

          {
            id: 'practice-w3', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'gra', srsId: 'wc1u2w3:ord:1',
                title: '🧩 Build the suggestion:',
                answer: 'Have you thought about going there before the season starts',
                expl: 'thought about + -ing.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w3:wr:1',
                title: '📝 Complete:', main: 'I would rather ___ somewhere ordinary.',
                options: DF.shuffle([
                  { label: 'go', correct: true }, { label: 'going' },
                  { label: 'to go' }, { label: 'went' }
                ]),
                expl: '<b>would rather + verbo puro</b>. Sem to, sem -ing.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u2w3:wr:2',
                title: '📝 Complete:', main: 'She is ___ of any place that calls itself charming.',
                options: DF.shuffle([
                  { label: 'suspicious', correct: true }, { label: 'timid' },
                  { label: 'spontaneous' }, { label: 'adventurous' }
                ]),
                expl: 'suspicious <b>of</b> — a preposição faz parte da palavra.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w3+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Disagree with Amara',
                prompt: 'Amara says most landmarks are "simply old and photographed". ' +
                        'Argue against her, with an example.',
                example: 'I disagree. The Cristo is photographed constantly and it is still ' +
                         'worth seeing, because the scale only works in person.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w3+:b2', unit: 2, waSec: 'Praticar mais',
                title: '🔥 The full route, defended',
                prompt: 'Present your five-stop route and defend every single choice. ' +
                        'No notes.',
                example: '(2 minutos)' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de conselho', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'How about ___?', pool: 'travelAct', focus: 'sugerir com -ing',
                  ptHint: 'Que tal ___?', n: 5 },
                { frame: 'Have you thought about ___?', pool: 'travelAct',
                  focus: 'sugerir com -ing', ptHint: 'Você já pensou em ___?', n: 5 }
              ],
              backchain: [
                { text: 'How about {travelAct} instead?', ptHint: 'Que tal… em vez disso?' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '✍️',
        title: 'Writing · Speaking · Outcomes',
        goal: 'Write so the reader can see it, and talk about what you want to do with your life.',
        comp: 'Você troca adjetivo genérico por detalhe concreto na escrita, e conversa sobre ' +
              'planos de vida dando e recebendo conselho.',
        live: [
          'Writing: the descriptive blog post and the Writing Strategy',
          'Create a mental image — show, do not tell',
          'Speaking: your bucket list, in four categories',
          'The Speaking Strategy: suggesting, accepting, questioning, refusing advice',
          'Expanding Your Fluency: the concierge role-play + Check What You Know'
        ],
        bridge: 'Na aula você escreveu o parágrafo e trocou com um colega. Aqui a régra ' +
                '"mostre, não conte" vira exercício de decisão frase a frase — e a sua lista ' +
                'de vida vira conversa gravada, com conselho de verdade.',
        nextLive: 'Unidade 3 · The Great Energy Challenge — as formas do futuro e como ' +
                  'convencer alguém a mudar.',
        ican: [
          'I can replace a vague adjective with a detail the reader can picture.',
          'I can write a description that appeals to more than one sense.',
          'I can talk about my goals using gerunds and infinitives correctly.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'showtell', icon: '👁️', name: 'Show, don\'t tell', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u2w4:read:show',
                title: '👁️ The one rule of descriptive writing',
                textTitle: 'Create a mental image',
                readAloud: false,
                text:
                  'TELLING — the reader learns your opinion and sees nothing.\n' +
                  'The streets are beautiful. The area is lively. The food is great.\n\n' +
                  'SHOWING — the reader builds the picture themselves.\n' +
                  'The wide streets are lined with trees and buildings that are hundreds of ' +
                  'years old.\n' +
                  'Diverse groups of performers fill the streets day and night.\n' +
                  'The bread comes out at five and is gone by seven.\n\n' +
                  'HOW TO CONVERT ONE INTO THE OTHER — ask "how do I know?"\n' +
                  'The market is busy.  ->  How do I know?  ->  You have to turn sideways to ' +
                  'get through the market.\n\n' +
                  'USE MORE THAN THE EYES. Almost every student describes only what is ' +
                  'visible. Sound, smell and temperature are free, and nobody uses them.\n' +
                  'It smells of diesel and grilled fish at the same time.\n\n' +
                  'A ARMADILHA: empilhar adjetivos nao e descrever. "A beautiful, charming, ' +
                  'picturesque, lovely village" diz menos do que "a village where every house ' +
                  'is painted the same blue".',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u2w4:sh:1',
                title: '👁️ Which sentence SHOWS?',
                main: 'Both are about the same square.',
                options: DF.shuffle([
                  { label: 'By seven the square smells of coffee and wet stone.',
                    correct: true },
                  { label: 'The square is very pleasant in the morning.' },
                  { label: 'The square is one of the most beautiful in the region.' },
                  { label: 'The square is a lovely and charming place.' }
                ]),
                expl: 'Cheiro e textura. As outras três dão a sua opinião, não a imagem.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u2w4:sh:2',
                title: '👁️ Convert it: "The restaurant is popular."',
                main: 'Which version shows it?',
                options: DF.shuffle([
                  { label: 'There are eleven people waiting outside before it opens.',
                    correct: true },
                  { label: 'The restaurant is extremely popular with everyone.' },
                  { label: 'The restaurant is famous and well known.' },
                  { label: 'Many people like the restaurant a lot.' }
                ]),
                expl: 'Um número concreto prova sem afirmar.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u2w4:sh:3',
                title: '👁️ Which sense is almost always forgotten?',
                main: '',
                options: DF.shuffle([
                  { label: 'Sound', correct: true }, { label: 'Sight' },
                  { label: 'Colour' }, { label: 'Size' }
                ]),
                expl: 'É exatamente o conselho da Amara na semana 3: "describe the sound of a ' +
                      'place, and that is what people actually remember".' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u2w4:sh:4',
                title: '🔗 Match the telling to its showing:',
                pairs: [
                  ['The street is old.', 'The stones are worn smooth in the middle.'],
                  ['The market is busy.', 'You have to turn sideways to get through.'],
                  ['It is quiet at night.', 'You can hear the sea from the main square.'],
                  ['The food is fresh.', 'The menu changes depending on what came in.']
                ] }
            ]
          },

          {
            id: 'writing', icon: '✍️', name: 'Write the paragraph', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:wr:1', unit: 2, waSec: 'Writing',
                title: '✍️ Sentence 1 — what you SEE',
                prompt: 'Pick a place you know well. Write one sentence about what a visitor ' +
                        'would see. No opinion adjectives.',
                example: 'The road ends at a wall of containers, painted orange, that hides ' +
                         'the sea until the last second.',
                mustUse: ['the'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:wr:2', unit: 2, waSec: 'Writing',
                title: '✍️ Sentence 2 — what you HEAR',
                prompt: 'Same place. One sentence about sound.',
                example: 'From six in the morning you hear the cranes, and you stop noticing ' +
                         'them by eight.',
                mustUse: ['hear'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:wr:3', unit: 2, waSec: 'Writing',
                title: '✍️ Sentence 3 — the honest drawback',
                prompt: 'Every good description admits one problem. What is the drawback of ' +
                        'your place?',
                example: 'There is nowhere to sit, and the only café closes at four.',
                mustUse: ['but'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:wr:4', unit: 2, waSec: 'Writing',
                title: '✍️ Sentence 4 — the recommendation',
                prompt: 'Close with who should go there, and when.',
                example: 'Go on a Tuesday, early, and only if you like places that are not ' +
                         'trying to impress you.',
                mustUse: ['go'],
                expl: 'Mande as quatro frases juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'bucket', icon: '🎯', name: 'Your bucket list', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u2w4:rep:1', unit: 2, waSec: 'Bucket list',
                title: '🎤 The frame you will reuse:',
                target: 'I really want to learn to sail before I turn fifty.',
                ptHint: 'Eu quero muito aprender a velejar antes dos cinquenta.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u2w4:rep:2', unit: 2, waSec: 'Bucket list',
                title: '🎤 The gerund version:',
                target: "I've always been interested in learning another language.",
                ptHint: 'Sempre me interessei por aprender outro idioma.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:bk:1', unit: 2, waSec: 'Bucket list',
                title: '🎯 Travel',
                prompt: 'One travel goal, and how you plan to accomplish it.',
                example: 'I want to walk part of a long trail in Portugal. I plan to save a ' +
                         'little every month starting in January.',
                mustUse: ['want'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:bk:2', unit: 2, waSec: 'Bucket list',
                title: '🎯 Hobbies and interests',
                prompt: 'One goal, using a gerund after a preposition.',
                example: "I'm interested in learning to cook properly, not just surviving.",
                mustUse: ['ing'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:bk:3', unit: 2, waSec: 'Bucket list',
                title: '🎯 Education and career',
                prompt: 'One goal, and say what you would need to do first.',
                example: 'I want to lead a team. To get there I need to fix my English first.',
                mustUse: ['to'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:bk:4', unit: 2, waSec: 'Bucket list',
                title: '🎯 Personal life',
                prompt: 'One personal goal, and why it matters to you.',
                example: 'I want to take my mother somewhere she has never been, because she ' +
                         'has never left the state.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:bk:5', unit: 2, waSec: 'Bucket list',
                title: '💬 Now advise yourself',
                prompt: 'Pick the goal you are least likely to achieve. Give yourself two ' +
                        'suggestions, then question one of them honestly.',
                example: 'How about starting with one weekend instead of two weeks? One thing ' +
                         'I could do is book it now. But one problem with that is money.',
                mustUse: ['how about'] }
            ]
          },

          {
            id: 'concierge', icon: '🛎️', name: 'The concierge round', tag: 'speaking', sp: true,
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u2w4:dlg:1',
                title: '🛎️ A guest with two days',
                sub: 'Repare como o concierge descreve, e não só lista.',
                lines: [
                  { who: 'Guest', en: 'Good afternoon. I have two days and I hate queues.' },
                  { who: 'Concierge', en: 'Then how about starting at the covered market ' +
                                          'before eight? It is empty and it smells of bread.' },
                  { who: 'Guest', en: 'I thought about doing that, but I am not an early riser.' },
                  { who: 'Concierge', en: 'One thing you could do is go on Sunday instead. ' +
                                          'It stays quiet until eleven.' }
                ],
                question: 'How does the concierge respond when the guest pushes back?',
                options: DF.shuffle([
                  { label: 'With a second suggestion that solves the objection', correct: true },
                  { label: 'By repeating the same suggestion' },
                  { label: 'By refusing to help further' },
                  { label: 'By agreeing that the guest should stay in the hotel' }
                ]),
                expl: 'Questionar não encerra a conversa — abre a próxima sugestão. É o ciclo ' +
                      'completo dos quatro movimentos.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:cg:1', unit: 2, waSec: 'Concierge',
                title: '🛎️ You are the concierge',
                prompt: 'A guest has one day and wants solitude. Suggest two things, ' +
                        'describing each one so they can picture it.',
                example: 'How about walking north along the seawall? After the second bridge ' +
                         'there is nobody, and you can hear the water hitting the stones.',
                mustUse: ['how about'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4:cg:2', unit: 2, waSec: 'Concierge',
                title: '🛎️ Now you are the guest',
                prompt: 'Someone suggests an expensive boat tour. Question it politely, then ' +
                        'ask for an alternative.',
                example: 'I thought about doing that, but one problem with that is the price. ' +
                         'Is there something similar I could do on foot?',
                mustUse: ['problem'] }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u2w4:chk:1', unit: 2, idx: 0,
                statement: 'I can use descriptive language effectively.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u2w4:chk:2', unit: 2, idx: 1,
                statement: 'I can use gerund and infinitive structures to describe experiences.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u2w4:chk:3', unit: 2, idx: 2,
                statement: 'I can make travel recommendations.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u2w4:chk:4', unit: 2, idx: 3,
                statement: 'I can give, accept, and question advice.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w4:pt:1',
                title: '📝 Complete:', main: "I'm looking forward to ___ you next month.",
                options: DF.shuffle([
                  { label: 'seeing', correct: true }, { label: 'see' },
                  { label: 'to see' }, { label: 'saw' }
                ]),
                expl: 'to = preposição → -ing.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w4:pt:2',
                title: '📝 Complete:', main: 'We stopped at the top ___ the view.',
                options: DF.shuffle([
                  { label: 'to photograph', correct: true }, { label: 'for photograph' },
                  { label: 'photographing' }, { label: 'for photographing' }
                ]),
                expl: 'Propósito → infinitivo com to.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u2w4:pt:3',
                title: '📝 Which is WRONG?',
                main: 'Only one breaks a rule from this unit.',
                options: DF.shuffle([
                  { label: 'How about to take the ferry?', correct: true },
                  { label: 'How about taking the ferry?' },
                  { label: 'One thing you could do is take the ferry.' },
                  { label: 'Have you thought about taking the ferry?' }
                ]),
                expl: 'How about + -ing, sempre.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u2w4:pt:4',
                title: '📝 Where is the stress in "publicity"?',
                main: '',
                options: DF.shuffle([
                  { label: 'pu-BLI-ci-ty', correct: true }, { label: 'PU-bli-ci-ty' },
                  { label: 'pu-bli-CI-ty' }, { label: 'pu-bli-ci-TY' }
                ]),
                expl: '-ity puxa a força pra sílaba anterior a ele.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u2w4:pt:5',
                title: '📝 Complete:', main: 'We planned one night and ___ staying four.',
                options: DF.shuffle([
                  { label: 'ended up', correct: true }, { label: 'got away' },
                  { label: 'ended up to' }, { label: 'end up' }
                ]),
                expl: 'end up + -ing, no passado.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u2w4:pt:6',
                title: '🔗 Match the halves:',
                pairs: [
                  ['The town is famous', 'for making cheese.'],
                  ['It was too cold', 'to swim.'],
                  ['Walking early', 'is the only way.'],
                  ['I went there', 'to see my cousin.'],
                  ["I'm used to", 'getting lost.']
                ] },
              { ui: 'order', cat: 'fun', srsId: 'wc1u2w4:pt:7',
                title: '🧩 Put the advice exchange in order:',
                answer: 'How about taking the early bus I thought about doing that but it ' +
                        'leaves at five one thing you could do is go on Sunday',
                expl: 'sugerir → questionar → sugerir de novo.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full description', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Two minutes, no generic adjectives',
                prompt: 'Describe your town for two minutes. If you say beautiful, nice, ' +
                        'lovely or amazing, start again.',
                example: '(2 minutos)',
                expl: 'A regra é dura de propósito — é o que força o detalhe concreto.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u2w4+:b2', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Sell the place you dislike',
                prompt: 'Pick a place you honestly do not like. Now recommend it convincingly ' +
                        'to someone who would.',
                example: '(60 segundos)',
                expl: 'Separar "eu gosto" de "isso é bom pra alguém" é competência de B2.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de recomendação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'One thing you could do is visit ___.', pool: 'spot',
                  focus: 'recomendar', ptHint: 'Uma coisa que você poderia fazer é visitar ___.', n: 5 },
                { frame: 'Have you thought about ___?', pool: 'travelAct',
                  focus: 'sugerir', ptHint: 'Você já pensou em ___?', n: 5 }
              ],
              backchain: [
                { text: 'The most {placeAdj} part is the walk back.',
                  ptHint: 'A parte mais… é a volta a pé.' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
