/* ENGLISH FLOW — week/plan-wc1-07.js
   WORLD CLASS ONE · UNIT 7 "On the Move" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: o Capital Bikeshare, a carta de reclamação da
                    Joanna, os ônibus coloridos da Guatemala, o caso do
                    Amadou.
     APP          → TRANSIT COMPASS, ONG fictícia de mobilidade urbana que
                    compara opções de transporte, recebe reclamações, e
                    defende políticas de transporte com fatos. 100% autoral
                    (item 20).

   Por que este cenário: a unidade cobra comparação, causa-e-efeito,
   reclamação com solução, e defesa de posição com fatos. Uma ONG que
   compara rotas, recebe reclamações sobre o sistema e precisa defender
   decisões de política pública hospeda os quatro outcomes sem tocar no
   Capital Bikeshare nem no caso do Amadou do livro.

     outcome 1 (make comparisons)         → comparar rotas e modos de transporte
     outcome 2 (cause-and-effect)         → por que o atraso aconteceu
     outcome 3 (complaint + solution)     → a reclamação recebida pela ONG
     outcome 4 (facts and evidence)       → a audiência pública sobre a nova rota

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026).

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (Comparative Forms)
     Semana 2 · Listening + Video
     Semana 3 · Connections + Reading (duas)
     Semana 4 · Writing + Speaking + Expanding Your Fluency + Outcomes

   ═══ NOTA PRO PROFESSOR ═══
   O Review Puzzle desta vez é "Units 7-9" (achado nas fotos) — o checkpoint
   de bloco vai no fim da Unidade 9, não aqui. Confirma que o padrão do livro
   é revisar a cada 3 unidades (ver block-review-1 em plan-wc1-03.js e
   block-review-2 em plan-wc1-06.js). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.transitMode = ['the subway', 'the bus', 'a bike', 'a taxi', 'the train',
                                 'walking'];
    DF.WGEN.POOLS.commuteProblem = ['the bus was delayed', 'the train was overcrowded',
                                    'the app showed the wrong schedule',
                                    'the bike station had no bikes left',
                                    'the driver skipped my stop', 'the fare machine broke'];
    DF.WGEN.POOLS.transitFix = ['adding more buses at rush hour', 'fixing the broken schedule app',
                                'redistributing bikes more often', 'training new drivers',
                                'building a new subway line'];
  }

  const WORDS = [
    { en: 'commute', pt: 'trajeto diário casa-trabalho',
      def: 'the daily journey you make between your home and work or school',
      ex: 'Her commute takes forty minutes each way, mostly by bus.' },
    { en: 'cramped', pt: 'apertado',
      def: 'not big enough for the number of people or things in it',
      ex: 'The 8:15 train is always cramped, but the 7:45 has plenty of room.' },
    { en: 'delay', pt: 'atraso',
      def: 'when you have to wait longer than expected for something to happen',
      ex: 'A ten-minute delay on one line can cause delays across the whole network.' },
    { en: 'fit in', pt: 'encaixar / caber',
      def: 'to feel that you belong to a particular group',
      ex: 'New riders often fit in within a week once they learn the routine.' },
    { en: 'keep in mind', pt: 'ter em mente',
      def: 'to remember something important, often a warning or advice',
      ex: 'Keep in mind that the express train skips the last three stops.' },
    { en: 'option', pt: 'opção',
      def: 'something you can choose from a group of alternatives',
      ex: 'The bike option is faster, but only when it isn\'t raining.' },
    { en: 'overwhelming', pt: 'avassalador / difícil de lidar',
      def: 'difficult to fight against; too much to handle',
      ex: 'The demand for bikes on Monday mornings is overwhelming for the current fleet.' },
    { en: 'punctual', pt: 'pontual',
      def: 'on time; not late',
      ex: 'The new schedule made the line far more punctual than it used to be.' },
    { en: 'reliable', pt: 'confiável',
      def: 'trusted to work or behave well',
      ex: 'Riders describe the express bus as more reliable than the local one.' },
    { en: 'rush hour', pt: 'horário de pico',
      def: 'a period of heavy traffic when people are traveling to and from work',
      ex: 'During rush hour, the platform fills up within two minutes of a train leaving.' },
    { en: 'tend', pt: 'tender / costumar',
      def: 'to be likely to behave in a particular way',
      ex: 'Commuters tend to switch to bikes once the weather improves.' },
    { en: 'transfer', pt: 'baldeação / transferir',
      def: 'to go or move something from one place to another',
      ex: 'The transfer between the bus and the subway takes about six minutes on foot.' }
  ];

  const EXTRA_WORDS = [
    { en: 'availability ·+', pt: 'disponibilidade',
      def: 'the fact that something can be used or reached',
      ex: 'You can check bike availability at any station from the app.' },
    { en: 'bottom line ·+', pt: 'resultado final / o que importa no fim',
      def: 'the total amount of money a service has made or lost, or the essential point',
      ex: 'The bottom line is that riders want reliability more than speed.' },
    { en: 'perfect match ·+', pt: 'combinação perfeita',
      def: 'two things that go or work together successfully',
      ex: 'A dense downtown area is a perfect match for a bikeshare system.' },
    { en: 'alleviate ·+', pt: 'aliviar',
      def: 'to make a problem less severe',
      ex: 'A second bus line would alleviate most of the rush-hour crowding.' },
    { en: 'constructive ·+', pt: 'construtivo',
      def: 'helpful and useful, aimed at improvement',
      ex: 'More people using transit is constructive for the whole city\'s economy.' },
    { en: 'mobility ·+', pt: 'mobilidade',
      def: 'the ability to move or be moved freely and easily',
      ex: 'Improving mobility for everyone was the whole point of the pilot program.' },
    { en: 'radius ·+', pt: 'raio (distância)',
      def: 'the distance from a central point',
      ex: 'Within a two-mile radius, almost anywhere is reachable in fifteen minutes.' },
    { en: 'redistribute ·+', pt: 'redistribuir',
      def: 'to move things so they are shared more evenly',
      ex: 'The van redistributes bikes from full stations to empty ones every morning.' }
  ];

  DF.PLAN.wc1[7] = {
    unit: 7,
    title: 'On the Move',
    subtitle: 'Seu sétimo mês',
    icon: '🚌',

    mindmap: {
      center: 'On the Move',
      sub: 'Comparar, explicar causa e efeito, reclamar com solução, e defender com fatos',
      branches: [
        {
          icon: '🚏', name: 'Transit vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>reliable</b> descreve o SISTEMA (confiável); <b>punctual</b> descreve o ' +
                'HORÁRIO (pontual). Um trem pode ser reliable mesmo tendo sido punctual só ' +
                'noventa por cento das vezes.'
        },
        {
          icon: '📊', name: 'Comparative forms — the four columns',
          leaves: [
            { en: 'The bus is faster than the subway.', pt: 'adjetivo curto: -er + than' },
            { en: 'The express train is more reliable than the local.', pt: 'adjetivo longo: more + than' },
            { en: 'The trains run less frequently on weekends.', pt: 'advérbio: less + than' },
            { en: 'The old subway line has fewer stops than the new one.', pt: 'contável: fewer' },
            { en: 'I spend as much time waiting as riding.', pt: 'igualdade: as much as' }
          ],
          note: '<b>Armadilha do brasileiro:</b> não existe "less fast" pra adjetivo de uma ' +
                'sílaba — é sempre <b>not as fast as</b>. "Less" combina mal com adjetivos ' +
                'curtos, mesmo sendo gramaticalmente possível.'
        },
        {
          icon: '⚖️', name: 'as ... as (equality and inequality)',
          leaves: [
            { en: 'The bus is not as fast as the train.', pt: '= o trem é mais rápido' },
            { en: 'It is almost as expensive as owning a car.', pt: 'quase igual' },
            { en: 'I don\'t go out as much as you.', pt: 'quantidade' }
          ],
          note: '<b>not as ... as</b> é frequentemente mais natural que o comparativo direto — ' +
                '"The bus isn\'t as fast as the train" soa tão comum quanto "The train is ' +
                'faster than the bus".'
        },
        {
          icon: '🔗', name: 'Cause-and-effect connectors',
          leaves: [
            { en: 'The train broke down. As a result, service was delayed.', pt: 'as a result' },
            { en: 'Ridership increased. Because of that, we added more buses.', pt: 'because of that' },
            { en: 'Fares went up. That means fewer people can afford transit.', pt: 'that means' },
            { en: 'When that happens, we notify riders immediately.', pt: 'when that happens' }
          ],
          note: 'Esses conectores fazem o mesmo trabalho de "because"/"so", mas entre DUAS ' +
                'frases separadas, não dentro de uma oração só — é o formato natural de um ' +
                'relato falado ou de notícia.'
        },
        {
          icon: '📝', name: 'A complaint that gets results',
          leaves: [
            { en: 'I\'m writing to ask that you support this.', pt: 'pedido direto, logo no início' },
            { en: 'As a result, there have been transportation cuts.', pt: 'causa e efeito' },
            { en: 'This would not only be good for X, but also Y.', pt: 'solução com dois benefícios' }
          ],
          note: 'Uma boa reclamação tem três partes: <b>declarar o pedido logo de cara</b>, ' +
                '<b>explicar o problema e a causa</b>, e <b>propor uma solução concreta</b>.'
        },
        {
          icon: '⚖️', name: 'Presenting facts and evidence',
          leaves: [
            { en: 'Considering that the data shows a 40% increase, …', pt: 'considering that' },
            { en: 'Keeping in mind that the budget is limited, …', pt: 'keeping in mind that' },
            { en: 'After weighing all the options, I have decided…', pt: 'fechamento' }
          ],
          note: 'Uma decisão defendida com fatos sempre nomeia o DADO antes da OPINIÃO — ' +
                '"considering that the data shows X" vem antes de "I believe Y".'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🚌',
        title: 'Which Way Is Better?',
        goal: 'Compare two transportation options using the right comparative form.',
        comp: 'Você compara dois meios de transporte escolhendo entre -er/more, less, fewer e ' +
              'as...as, sem misturar as formas.',
        live: [
          'The unit opener: the train on the bridge and warm-up questions',
          'Vocabulary: Vanessa\'s tips about getting around her city',
          'Grammar: Comparative Forms — adjectives, adverbs, count and noncount nouns',
          'Comparing two subway lines using a data chart',
          'Pair work: comparing your city to Vanessa\'s'
        ],
        bridge: 'Na aula você comparou as duas linhas de metrô do livro. Aqui a comparação é ' +
                'de rotas da Transit Compass, e você ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Video — a pesquisa sobre tempo de commute e o ' +
                  'Capital Bikeshare.',
        ican: [
          'I can compare two things using -er/more, less, fewer and as...as correctly.',
          'I can compare adjectives, adverbs, and count/noncount nouns.',
          'I can use not as...as as a natural alternative to a direct comparative.',
          'I can use the unit vocabulary to describe a commute.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u7w1:cards:core',
                title: '📇 Twelve words for getting around',
                sub: 'Exemplos da Transit Compass — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u7w1:cards:extra',
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
              { ui: 'choice', cat: 'voc', srsId: 'wc1u7w1:wf:1',
                title: '🔤 Which word fits?',
                main: 'The 8:15 train is always ___ — you\'ll be standing the whole ride.',
                options: DF.shuffle([
                  { label: 'cramped', correct: true }, { label: 'punctual' },
                  { label: 'reliable', }, { label: 'overwhelming' }
                ]),
                expl: 'cramped = apertado, sem espaço.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u7w1:wf:2',
                title: '🔤 Which word fits?',
                main: 'The express bus is more ___ than the local one — it\'s almost never late.',
                options: DF.shuffle([
                  { label: 'reliable', correct: true }, { label: 'cramped' },
                  { label: 'overwhelming' }, { label: 'transfer' }
                ]),
                expl: 'reliable = confiável, se pode contar com.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u7w1:wf:3',
                title: '🔤 Complete:',
                main: '___ that the last train leaves at midnight.',
                options: DF.shuffle([
                  { label: 'Keep in mind', correct: true }, { label: 'Fit in' },
                  { label: 'Tend' }, { label: 'Transfer' }
                ]),
                expl: 'keep in mind = lembre-se, tenha em mente (aviso).' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u7w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['rush hour', 'a period of heavy traffic'],
                  ['delay', 'waiting longer than expected'],
                  ['option', 'something you can choose'],
                  ['availability', 'the fact something can be reached'],
                  ['mobility', 'the ability to move easily']
                ] }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Comparatives at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u7w1:read:glance',
                title: '🔍 Four columns, one decision',
                textTitle: 'Comparative forms',
                readAloud: false,
                text:
                  'ADJECTIVES\n' +
                  'Short: faster than, cheaper than\n' +
                  'Long: more reliable than, more expensive than\n\n' +
                  'ADVERBS\n' +
                  'The trains run less frequently on weekends.\n\n' +
                  'NONCOUNT NOUNS\n' +
                  'I spend more time waiting than riding.\n\n' +
                  'COUNT NOUNS\n' +
                  'The express train makes fewer stops than the local.\n\n' +
                  'EQUALITY / INEQUALITY\n' +
                  'as ... as: It is almost as expensive as driving.\n' +
                  'not as ... as: The bus is not as fast as the train.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: nao existe "less fast" para adjetivos curtos de ' +
                  'uma silaba — a forma natural e sempre "not as fast as". "Less" soa estranho ' +
                  'com adjetivos curtos, mesmo sendo tecnicamente possivel. E "fewer" e so para ' +
                  'coisas CONTAVEIS (fewer stops); "less" e para nao-contaveis (less time).',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w1:cp:1',
                title: '🎯 Choose the correct form:',
                main: 'The subway is ___ than driving during rush hour.',
                options: DF.shuffle([
                  { label: 'faster', correct: true }, { label: 'more fast' },
                  { label: 'fastest' }, { label: 'as fast' }
                ]),
                expl: 'fast é curto (1 sílaba) → -er.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w1:cp:2',
                title: '🎯 Choose the correct form:',
                main: 'The new line is ___ than the old one.',
                options: DF.shuffle([
                  { label: 'more reliable', correct: true }, { label: 'reliabler' },
                  { label: 'more reliabler' }, { label: 'as reliable' }
                ]),
                expl: 'reliable é longo (3 sílabas) → more + adjetivo.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w1:cp:3',
                title: '🎯 Choose the correct form:',
                main: 'The express train makes ___ stops than the local.',
                options: DF.shuffle([
                  { label: 'fewer', correct: true }, { label: 'less' },
                  { label: 'more few' }, { label: 'as few' }
                ]),
                expl: 'stops é contável → fewer, nunca less.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w1:cp:4',
                title: '🎯 Choose the correct form:',
                main: 'I have ___ patience for delays than I used to.',
                options: DF.shuffle([
                  { label: 'less', correct: true }, { label: 'fewer' },
                  { label: 'more few' }, { label: 'lesser' }
                ]),
                expl: 'patience é não-contável → less.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w1:cp:5',
                title: '🎯 Which is the natural way to say it?',
                main: 'The bus is slower than the subway. (say it the OTHER way)',
                options: DF.shuffle([
                  { label: 'The subway is not as slow as the bus.', correct: true },
                  { label: 'The subway is less slow than the bus.' },
                  { label: 'The subway is more fast than the bus.' },
                  { label: 'The subway is as slow as the bus.' }
                ]),
                expl: 'Nem sempre — mas aqui "not as slow as" soa mais natural que "less slow".' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u7w1:cp:6',
                title: '🧩 Build the sentence:',
                answer: 'The express bus is not as crowded as the local one',
                expl: 'not as + adjetivo + as, comparando dois ônibus.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u7w1:tf:1',
                title: '🔀 Comparative transformation',
                rounds: [
                  { base: 'The bus is faster than the subway.', cmd: 'Question',
                    answers: ['Is the bus faster than the subway?'] },
                  { base: 'The new line is more reliable than the old one.', cmd: 'Negative',
                    answers: ["The new line isn't more reliable than the old one.",
                              'The new line is not more reliable than the old one.'] },
                  { base: 'The express train makes fewer stops.', cmd: 'Question',
                    answers: ['Does the express train make fewer stops?'] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u7w1:drl:mode', unit: 7, waSec: 'Drill · comparação',
                title: '🔁 Drill 1 — the mode changes', focus: 'comparativo',
                frame: 'The subway is faster than ___.', ptHint: 'O metrô é mais rápido que ___.',
                slots: ['the bus', 'a bike', 'a taxi', 'the train', 'walking'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u7w1:drl:problem', unit: 7, waSec: 'Drill · causa',
                title: '🔁 Drill 2 — the problem changes', focus: 'causa e efeito',
                frame: 'As a result of the delay, ___.', ptHint: 'Como resultado do atraso, ___.',
                slots: ['the bus was delayed', 'the train was overcrowded',
                        'the app showed the wrong schedule', 'the bike station had no bikes left',
                        'the driver skipped my stop'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u7w1:drl:fix', unit: 7, waSec: 'Drill · solução',
                title: '🔁 Drill 3 — the fix changes', focus: 'propor solução',
                frame: 'One solution is ___.', ptHint: 'Uma solução é ___.',
                slots: ['adding more buses at rush hour', 'fixing the broken schedule app',
                        'redistributing bikes more often', 'training new drivers',
                        'building a new subway line'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u7w1:bc:1', unit: 7, waSec: 'Backchain',
                title: '🧱 The comparative, spoken',
                ptHint: 'A nova linha é muito mais confiável do que a antiga costumava ser.',
                chain: ['used to be', 'the old one used to be',
                        'more reliable than the old one used to be',
                        'The new line is much more reliable than the old one used to be.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u7w1:bc:2', unit: 7, waSec: 'Backchain',
                title: '🧱 The cause-and-effect sentence',
                ptHint: 'O trem quebrou. Como resultado, o serviço atrasou por uma hora.',
                chain: ['for an hour', 'service was delayed for an hour',
                        'As a result, service was delayed for an hour.',
                        'The train broke down. As a result, service was delayed for an hour.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u7w1:dlg:1',
                title: '🎧 Comparing two routes',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'Which route do you take, the bus or the subway?' },
                  { who: 'Elias', en: 'The subway. It\'s not as cheap, but it\'s way more reliable.' },
                  { who: 'Nadia', en: 'Is it faster too?' },
                  { who: 'Elias', en: 'A bit. But honestly, the reliability matters more to me.' }
                ],
                question: 'Why does Elias prefer the subway?',
                options: DF.shuffle([
                  { label: 'It is more reliable, which matters most to him', correct: true },
                  { label: 'It is cheaper than the bus' },
                  { label: 'It is much faster' },
                  { label: 'It has more stops' }
                ]),
                expl: '"the reliability matters more to me" — o critério, não só o fato.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u7w1:dlg:2',
                title: '🎧 A correction at the office',
                sub: 'Repare o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'The new bus has less stops than the old route.' },
                  { who: 'Tomás', en: 'Fewer stops — stops are countable.' },
                  { who: 'Priya', en: 'Right. Fewer stops than the old route.' },
                  { who: 'Tomás', en: 'Exactly. Less is only for things you can\'t count.' }
                ],
                question: 'What rule is being corrected?',
                options: DF.shuffle([
                  { label: 'Fewer is for countable nouns, less is not', correct: true },
                  { label: 'Stops should be capitalized' },
                  { label: 'The verb tense was wrong' },
                  { label: 'Less needed a "than" after it' }
                ]),
                expl: 'stops é contável → fewer, nunca less.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w1:bld:1', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Compare two ways you travel',
                prompt: 'Compare two ways you get around, using a comparative form.',
                example: 'The bus is cheaper than a taxi, but it takes twice as long.',
                mustUse: ['than'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w1:bld:2', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Use not as ... as',
                prompt: 'Compare two things using not as ... as.',
                example: 'My neighbourhood is not as noisy as it used to be.',
                mustUse: ['not as'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w1+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Four comparisons in sixty seconds',
                prompt: 'Compare four things in your life for one minute, using different ' +
                        'comparative forms each time.',
                example: '(1 minuto)' }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de comparação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The subway is faster than ___.', pool: 'transitMode',
                  focus: 'comparativo', ptHint: 'O metrô é mais rápido que ___.', n: 5 },
                { frame: 'One solution is ___.', pool: 'transitFix',
                  focus: 'solução', ptHint: 'Uma solução é ___.', n: 5 }
              ],
              backchain: [
                { text: 'The subway is faster than {transitMode}.',
                  ptHint: 'O metrô é mais rápido que…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'The Daily Commute',
        goal: 'Follow a report on commute times, and understand real testimonials about a service.',
        comp: 'Você acompanha um relato sobre tempo de commute usando conectores de causa e ' +
              'efeito, e entende depoimentos reais sobre um serviço de transporte.',
        live: [
          'Listening: a news broadcast about commuting times',
          'Marking answers and cause-and-effect relationships',
          'Video: Capital Bikeshare, five real testimonials',
          'Completing sentences from what each speaker says',
          'Pair work: would you use bikeshare?'
        ],
        bridge: 'Na aula você ouviu o relato do Jeremy Wexler e viu os testemunhos do ' +
                'Bikeshare. Aqui o relato é da Transit Compass, e os conectores de causa e ' +
                'efeito viram exercício de decisão.',
        nextLive: 'Semana 3 · Connections + Reading — o debate sobre bikeshare e duas leituras ' +
                  'sobre transporte.',
        ican: [
          'I can follow a spoken report using cause-and-effect connectors.',
          'I can identify what caused a delay and what its effect was.',
          'I can understand real testimonials about a transit service.',
          'I can summarize a spoken report in my own words.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'listen', icon: '👂', name: 'A Transit Compass report', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u7w2:dlg:1',
                title: '👂 A report on commute times',
                sub: 'Sem texto na tela. Ouça a causa e o efeito.',
                hideText: true,
                lines: [
                  { who: 'Reporter', en: 'Our survey found that average commute times have ' +
                                         'increased across the city this year.' },
                  { who: 'Reporter', en: 'The main cause is construction on two major roads. As ' +
                                         'a result, buses are running fifteen minutes behind ' +
                                         'schedule on average.' },
                  { who: 'Reporter', en: 'Because of that, ridership on the subway has actually ' +
                                         'increased, as commuters look for a more reliable option.' }
                ],
                question: 'What effect did the road construction have on ridership?',
                options: DF.shuffle([
                  { label: 'Subway ridership increased', correct: true },
                  { label: 'Subway ridership decreased' },
                  { label: 'It had no effect on the subway' },
                  { label: 'Bus ridership increased' }
                ]),
                expl: '"Because of that, ridership on the subway has actually increased" — ' +
                      'efeito em cadeia: obra → atraso de ônibus → mais gente no metrô.'
              },
              { ui: 'type', cat: 'fun', srsId: 'wc1u7w2:type:1',
                title: '👂 How many minutes behind schedule are the buses?',
                sub: 'Só o número.',
                tts: 'buses are running fifteen minutes behind schedule on average.',
                answers: ['15', 'fifteen'], exact: false,
                expl: 'fifteen minutes.' },
              { ui: 'order', cat: 'fun', srsId: 'wc1u7w2:ord:1',
                title: '🧩 Put the cause-and-effect chain in order:',
                answer: 'Construction started on two major roads buses started running behind ' +
                        'schedule ridership on the subway increased',
                expl: 'causa → primeiro efeito → segundo efeito, em cadeia.' }
            ]
          },

          {
            id: 'video', icon: '🎬', name: 'Real testimonials', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u7w2:dlg:2',
                title: '🎬 What riders actually say',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Rider 1', en: 'I use it because I can\'t keep a bike at the office. I ' +
                                        'just go from the train station straight to work.' },
                  { who: 'Rider 2', en: 'It saves me the metro transfer. I eliminate one whole ' +
                                        'leg of my commute.' },
                  { who: 'Rider 3', en: 'Honestly, it\'s good for my legs and my energy for the ' +
                                        'actual work day.' }
                ],
                question: 'What does Rider 2 mean by "eliminate one whole leg"?',
                options: DF.shuffle([
                  { label: 'They skip one part of their usual route', correct: true },
                  { label: 'They walk instead of using any transport' },
                  { label: 'They stopped commuting entirely' },
                  { label: 'They now take two transfers instead of one' }
                ]),
                expl: '"leg" aqui = uma etapa de um trajeto — não a perna do corpo.'
              },
              { ui: 'match', cat: 'fun', srsId: 'wc1u7w2:match:riders',
                title: '🔗 Match each rider to their main reason:',
                pairs: [
                  ['Rider 1', 'can\'t keep a bike at the office'],
                  ['Rider 2', 'eliminates a transfer'],
                  ['Rider 3', 'good for health and energy']
                ] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w2:bld:1', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Summarize the report',
                prompt: 'In two sentences, summarize the cause-and-effect chain from the ' +
                        'report you heard.',
                example: 'Construction caused buses to run late. As a result, more people ' +
                         'switched to the subway.',
                mustUse: ['as a result'] }
            ]
          },

          {
            id: 'practice-w2', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w2:wr:1',
                title: '📝 Complete:', main: 'Ridership dropped. ___, the city added new routes.',
                options: DF.shuffle([
                  { label: 'Because of that', correct: true }, { label: 'Even though' },
                  { label: 'Which', correct: false }, { label: 'So that' }
                ]),
                expl: '"Because of that" conecta a causa ao efeito entre duas frases.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u7w2:wr:2',
                title: '📝 Complete:', main: 'The city van ___ bikes from full stations every ' +
                       'morning.',
                options: DF.shuffle([
                  { label: 'redistributes', correct: true }, { label: 'alleviates' },
                  { label: 'transfers', }, { label: 'tends' }
                ]),
                expl: 'redistribute = mover pra equilibrar.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w2+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 A cause-and-effect chain, three links',
                prompt: 'Describe a real chain of cause and effect from your own commute, with ' +
                        'at least three links.',
                example: '(60 segundos)' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de causa e efeito', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'As a result of the delay, ___.', pool: 'commuteProblem',
                  focus: 'causa e efeito', ptHint: 'Como resultado do atraso, ___.', n: 5 }
              ],
              backchain: [
                { text: 'One solution is {transitFix}.', ptHint: 'Uma solução é…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'Debating the Proposal',
        goal: 'Debate a transit proposal with facts, and read two accounts for cause and effect.',
        comp: 'Você debate uma proposta de transporte usando fatos, e lê dois relatos ' +
              'identificando o que causou o quê.',
        live: [
          'Connections: the debate over a bikesharing proposal, Henry vs. Giovanni',
          'Role-play: arguing for or against the proposal',
          'Reading: One Foot on the Gas — teen driving culture',
          'Reading: Riding Guatemala\'s Colorful Buses',
          'Comparing the Guatemalan bus to a form of transport you know'
        ],
        bridge: 'Na aula você debateu bikesharing e leu os dois textos do livro. Aqui o debate ' +
                'é sobre uma proposta da Transit Compass, e as leituras são novas — mas a ' +
                'pergunta continua sendo "o que causou o quê".',
        nextLive: 'Semana 4 · Writing + Speaking — a carta de reclamação e a audiência pública.',
        ican: [
          'I can argue for or against a transit proposal using facts.',
          'I can identify cause-and-effect relationships in a reading.',
          'I can compare two systems using information from a text.',
          'I can react to an opposing argument with a counterpoint.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'debate', icon: '⚖️', name: 'The bikeshare proposal debate', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u7w3:read:debate',
                title: '⚖️ Two sides, same facts',
                textTitle: 'The Proposal',
                text:
                  'Transit Compass is reviewing a proposal for a new bikeshare system downtown. ' +
                  'Membership would cost $90 a year. Helmets would not be provided. Five ' +
                  'hundred single-speed bikes would be available at launch.\n\n' +
                  'SUPPORTERS say the system gives people an easy, reliable way to get around, ' +
                  'promotes sustainable transportation, and is a good backup when the subway is ' +
                  'delayed.\n\n' +
                  'OPPONENTS say it would take taxpayer money away from other transportation ' +
                  'projects, would not provide helmets, and is not suitable for long trips or ' +
                  'for people who cannot afford the annual fee.',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w3:db:1', unit: 7, waSec: 'Debate',
                title: '⚖️ Support the proposal',
                prompt: 'Argue in favor of the proposal, using one fact from the text.',
                example: 'I support this. It is a reliable backup when the subway is delayed, ' +
                         'which happens more often than the city admits.',
                mustUse: ['reliable'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w3:db:2', unit: 7, waSec: 'Debate',
                title: '⚖️ Oppose the proposal',
                prompt: 'Argue against the proposal, using one fact from the text.',
                example: 'I\'m against this. Ninety dollars a year is not affordable for a lot ' +
                         'of the people who need transit the most.',
                mustUse: ['against'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w3:db:3', unit: 7, waSec: 'Debate',
                title: '⚖️ Counter an argument',
                prompt: 'Someone says the system is a waste of taxpayer money. Counter it with ' +
                        'a fact.',
                example: 'Keep in mind that it also alleviates rush-hour crowding on other ' +
                         'lines, so the money isn\'t wasted, it\'s redirected.',
                mustUse: ['keep in mind'] }
            ]
          },

          {
            id: 'text1', icon: '📖', name: 'Read: The Long Commute Home', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u7w3:read:text1',
                title: '📖 A new account, the same skill',
                textTitle: 'The Long Commute Home',
                text:
                  'Rina is seventeen and takes three different buses to get home from school. ' +
                  'The trip should take forty minutes. Most days, it takes closer to ninety.\n\n' +
                  'The cause is not a single accident or a single bad day. It is the schedule ' +
                  'itself: her second bus only comes every forty minutes, and it does not ' +
                  'connect well with the first. If she misses it by even a minute, she waits ' +
                  'almost the whole interval for the next one.\n\n' +
                  'As a result, Rina has stopped joining after-school clubs. She used to play ' +
                  'volleyball, but practice ended fifteen minutes after her connecting bus left, ' +
                  'which meant a ninety-minute wait for the next one. Because of that, she quit ' +
                  'the team in October.\n\n' +
                  'Her mother wrote to the transit authority twice. Both times, the reply said ' +
                  'the schedule reflected "current demand data" and could not be changed until ' +
                  'the next annual review. That means Rina\'s situation will not improve until ' +
                  'at least next year.',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u7w3:q:1',
                title: '📖 What actually causes Rina\'s long commute?',
                main: '',
                options: DF.shuffle([
                  { label: 'A schedule that does not connect well between buses', correct: true },
                  { label: 'A single accident that happened once' },
                  { label: 'She lives unusually far from school' },
                  { label: 'She always leaves school late' }
                ]),
                expl: '"The cause is not a single accident... It is the schedule itself."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u7w3:q:2',
                title: '📖 What was the effect of the schedule on Rina\'s life?',
                main: '',
                options: DF.shuffle([
                  { label: 'She had to quit the volleyball team', correct: true },
                  { label: 'She started driving to school' },
                  { label: 'She moved closer to school' },
                  { label: 'She switched schools' }
                ]),
                expl: '"Because of that, she quit the team in October."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u7w3:q:3',
                title: '📖 According to the transit authority\'s reply, when might things change?',
                main: '',
                options: DF.shuffle([
                  { label: 'Not until the next annual review', correct: true },
                  { label: 'Immediately' },
                  { label: 'Within one week' },
                  { label: 'The text does not say' }
                ]),
                expl: '"could not be changed until the next annual review."' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u7w3:match:ce',
                title: '🔗 Match each cause to its effect:',
                pairs: [
                  ['The buses don\'t connect well', 'Rina waits almost 40 minutes'],
                  ['Practice ended after her bus left', 'She quit the team'],
                  ['The schedule reflects "current demand"', 'It won\'t change until next year']
                ] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w3+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Argue Rina\'s case to the transit authority',
                prompt: 'Present Rina\'s case to the transit authority in under a minute, using ' +
                        'facts from the text.',
                example: '(45 a 60 segundos)' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de comparação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'One solution is ___.', pool: 'transitFix',
                  focus: 'solução', ptHint: 'Uma solução é ___.', n: 5 }
              ],
              backchain: [
                { text: 'As a result of the delay, {commuteProblem}.',
                  ptHint: 'Como resultado do atraso,…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'The Complaint That Gets Heard',
        goal: 'Write a complaint with a solution, and defend a decision with facts in a hearing.',
        comp: 'Você escreve uma reclamação com solução proposta, e defende uma decisão numa ' +
              'audiência pública usando fatos.',
        live: [
          'Writing: A Letter of Complaint, following the Writing Checklist',
          'The Writing Strategy: state the request, explain cause and effect, offer a solution',
          'Speaking: the Amadou case, attorneys and judges',
          'The Speaking Strategy: presenting facts and evidence',
          'Expanding Your Fluency: talk for a minute + Check What You Know'
        ],
        bridge: 'Na aula você escreveu a carta de reclamação e fez o role-play do caso do ' +
                'Amadou. Aqui a carta é sobre um problema real da Transit Compass, e a ' +
                'audiência pública ganha um caso novo pra defender com fatos.',
        nextLive: 'Unidade 8 · Think Twice — modais no passado, e privacidade online.',
        ican: [
          'I can write a complaint that states a request, explains the cause, and proposes a solution.',
          'I can defend a decision using facts and evidence, not just opinion.',
          'I can present a case clearly with an opening, arguments, and a decision.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'complaint', icon: '📝', name: 'A complaint that gets results', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u7w4:read:cmp',
                title: '📝 Request, cause, solution',
                textTitle: 'The shape of an effective complaint',
                readAloud: false,
                text:
                  'STATE YOUR REQUEST UP FRONT\n' +
                  'I\'m writing to ask that you extend the express line to our neighbourhood.\n\n' +
                  'EXPLAIN THE PROBLEM AND ITS CAUSE\n' +
                  'Because the only bus stopped running last year, my commute now takes twice ' +
                  'as long.\n\n' +
                  'OFFER A SOLUTION\n' +
                  'This would not only cut my commute in half, but it would also reduce traffic ' +
                  'on the main road.\n\n' +
                  'A ARMADILHA: uma reclamacao sem solucao vira desabafo, nao pedido acionavel. ' +
                  'O leitor de uma carta oficial responde muito mais rapido a "aqui esta o que ' +
                  'resolveria isso" do que a "isso e um problema".',
                nextLabel: 'Got it ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w4:cp:1', unit: 7, waSec: 'Complaint',
                title: '📝 State your request',
                prompt: 'State a transit request up front, one sentence.',
                example: 'I\'m writing to ask that the city add a bus stop near the community ' +
                         'centre.',
                mustUse: ["I'm writing to ask"] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w4:cp:2', unit: 7, waSec: 'Complaint',
                title: '📝 Explain the cause',
                prompt: 'Explain the problem and its cause.',
                example: 'Because the nearest stop is a fifteen-minute walk, elderly residents ' +
                         'rarely use the bus at all.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w4:cp:3', unit: 7, waSec: 'Complaint',
                title: '📝 Offer a solution',
                prompt: 'Offer a solution with two benefits, using not only... but also.',
                example: 'This would not only make the bus more accessible, but it would also ' +
                         'reduce isolation for older residents.',
                mustUse: ['not only'],
                expl: 'Mande as três frases juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'hearing', icon: '⚖️', name: 'The public hearing', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u7w4:read:hear',
                title: '⚖️ Presenting facts and evidence',
                textTitle: 'The hearing phrases',
                readAloud: false,
                text:
                  'PRESENTING FACTS\n' +
                  'Considering that ridership dropped 20%, we recommend a fare reduction.\n' +
                  'Keeping in mind that the budget is limited, the plan focuses on one route.\n\n' +
                  'ANNOUNCING A DECISION\n' +
                  'After weighing all the options, I have decided to approve the new route.\n' +
                  'After much consideration, the committee has decided against the proposal.\n\n' +
                  'A ARMADILHA: uma decisao sem citar o dado que a sustenta soa arbitraria. ' +
                  '"Considering that X, we recommend Y" e muito mais dificil de contestar do ' +
                  'que "We recommend Y" sozinho.',
                nextLabel: 'Got it ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u7w4:dlg:1',
                title: '⚖️ A hearing on a new route',
                sub: 'Repare como o dado vem antes da decisão.',
                lines: [
                  { who: 'Advocate', en: 'Considering that ridership on this corridor tripled ' +
                                         'in three years, the current buses are simply too small.' },
                  { who: 'Official', en: 'Keeping in mind the budget, we can\'t buy new buses ' +
                                         'this year.' },
                  { who: 'Advocate', en: 'Understood. Could you consider adding a second bus at ' +
                                         'peak times instead?' },
                  { who: 'Official', en: 'After weighing the options, I\'ve decided to approve ' +
                                         'that for a six-month trial.' }
                ],
                question: 'What decision does the official make, and based on what?',
                options: DF.shuffle([
                  { label: 'A six-month trial of a second bus, weighing the budget and the data',
                    correct: true },
                  { label: 'Buying entirely new buses immediately' },
                  { label: 'Rejecting the proposal completely' },
                  { label: 'No decision was made' }
                ]),
                expl: '"After weighing the options, I\'ve decided to approve that for a ' +
                      'six-month trial" — decisão citando dado e restrição juntos.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w4:hr:1', unit: 7, waSec: 'Hearing',
                title: '⚖️ Present a fact',
                prompt: 'Present one fact to support a transit proposal, using considering that.',
                example: 'Considering that half the riders on this route are students, a ' +
                         'discounted fare makes sense.',
                mustUse: ['considering that'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w4:hr:2', unit: 7, waSec: 'Hearing',
                title: '⚖️ Announce a decision',
                prompt: 'Announce a decision based on the facts you just presented.',
                example: 'After much consideration, the committee has decided to approve a ' +
                         'discounted student fare for a one-year trial.',
                mustUse: ['after much consideration'],
                expl: 'Este é o outcome 4 — mande o áudio pro professor.' }
            ]
          },

          {
            id: 'talkfor1', icon: '🎙️', name: 'Talk for a minute', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w4:tf1:1', unit: 7, waSec: 'Talk for a minute',
                title: '🎙️ The worst commute you ever had',
                prompt: 'Talk about the worst commute you ever had, without stopping, for one ' +
                        'minute.',
                example: '(1 minuto)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w4:tf1:2', unit: 7, waSec: 'Talk for a minute',
                title: '🎙️ Your favourite car and why',
                prompt: 'Talk about your favourite car (or a car you would like to have) for ' +
                        'one minute, without stopping.',
                example: '(1 minuto)' }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u7w4:chk:1', unit: 7, idx: 0,
                statement: 'I can make comparisons.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u7w4:chk:2', unit: 7, idx: 1,
                statement: 'I can recognize cause-and-effect relationships.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u7w4:chk:3', unit: 7, idx: 2,
                statement: 'I can make a complaint and propose a solution.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u7w4:chk:4', unit: 7, idx: 3,
                statement: 'I can use facts and evidence to defend a position.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w4:pt:1',
                title: '📝 Complete:', main: 'The bus is ___ than the subway.',
                options: DF.shuffle([
                  { label: 'slower', correct: true }, { label: 'more slow' },
                  { label: 'as slow' }, { label: 'slowest' }
                ]),
                expl: 'slow é curto → -er.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w4:pt:2',
                title: '📝 Complete:', main: 'The express line makes ___ stops than the local.',
                options: DF.shuffle([
                  { label: 'fewer', correct: true }, { label: 'less' },
                  { label: 'more few' }, { label: 'as few' }
                ]),
                expl: 'stops é contável → fewer.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u7w4:pt:3',
                title: '📝 Which connects cause to effect?',
                main: '',
                options: DF.shuffle([
                  { label: 'As a result,', correct: true }, { label: 'Although' },
                  { label: 'Which' }, { label: 'So that' }
                ]),
                expl: 'As a result conecta causa e efeito entre duas frases.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u7w4:pt:4',
                title: '📝 Complete:', main: 'A second bus line would ___ most of the rush-hour ' +
                       'crowding.',
                options: DF.shuffle([
                  { label: 'alleviate', correct: true }, { label: 'redistribute' },
                  { label: 'transfer' }, { label: 'tend' }
                ]),
                expl: 'alleviate = tornar o problema menos grave.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u7w4:pt:5',
                title: '🔗 Match the phrase to its use:',
                pairs: [
                  ["I'm writing to ask that…", 'request'],
                  ['Because the bus stopped running…', 'cause'],
                  ['This would not only X, but also Y', 'solution'],
                  ['Considering that…', 'fact'],
                  ['After weighing the options,…', 'decision']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u7w4:pt:6',
                title: '🧩 Build the sentence:',
                answer: 'The new line is not as crowded as the old one used to be',
                expl: 'not as + adjetivo + as.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full hearing, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u7w4+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Present and decide, no script',
                prompt: 'Present a fact and announce a decision, back to back, with no notes.',
                example: '(45 a 60 segundos)' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de reclamação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'One solution is ___.', pool: 'transitFix',
                  focus: 'solução', ptHint: 'Uma solução é ___.', n: 5 }
              ],
              backchain: [
                { text: "I'm writing to ask that you fix {commuteProblem}.",
                  ptHint: 'Escrevo para pedir que consertem…' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
