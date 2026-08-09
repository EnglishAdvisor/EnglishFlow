/* ENGLISH FLOW — week/plan-wc1-11.js
   WORLD CLASS ONE · UNIT 11 "Rain or Shine" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: a Jerri Nielsen no Polo Sul, o Tam em Bangkok,
                    os caçadores de tornado, o Sinking England, a Fiona e o
                    março que entrou como leão.
     APP          → THE FORECAST DESK, redação fictícia de meteorologia que
                    explica clima extremo pra gente comum — e precisa dos
                    phrasal verbs e das comparações justamente porque o
                    público não é técnico. 100% autoral (item 20).

   Por que este cenário: a unidade cobra phrasal verbs (a linguagem informal
   do clima: hold off, die down, break through), símiles (as cold as ice),
   inferência a partir de dado, e explicar como o clima afeta a vida. Uma
   redação de meteorologia popular hospeda os quatro outcomes sem tocar na
   Jerri Nielsen nem no Tim Samaras do livro.

     outcome 1 (weather affects your life) → a coluna sobre o dia a dia
     outcome 2 (make inferences)           → ler o dado e concluir
     outcome 3 (understand and use similes) → a imagem que faz o leitor sentir
     outcome 4 (use phrasal verbs)         → a linguagem real da previsão

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026).

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (Phrasal Verbs)
     Semana 2 · Listening + Connections + Video
     Semana 3 · Reading (duas) + Speaking
     Semana 4 · Writing + Expanding Your Fluency + Outcomes */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.weatherEvent = ['a heat wave', 'a cold spell', 'scattered showers',
                                  'pouring rain', 'snow flurries', 'a thunderstorm'];
    DF.WGEN.POOLS.weatherPhrasal = ['hold off', 'die down', 'break through', 'pick up',
                                    'come down', 'clear up'];
    DF.WGEN.POOLS.simileEnd = ['as cold as ice', 'as hot as an oven', 'like an angry lion',
                               'as loud as a train', 'like a wet blanket'];
  }

  const WORDS = [
    { en: 'assess', pt: 'avaliar',
      def: 'to judge or decide the quality or amount of something',
      ex: 'We assess the risk every six hours during a storm week.' },
    { en: 'consider', pt: 'considerar',
      def: 'to think about something carefully',
      ex: 'The city considered closing the schools, then decided against it.' },
    { en: 'cut off', pt: 'isolar / cortar',
      def: 'to disconnect',
      ex: 'The valley was cut off for two days — no road, no phone signal.' },
    { en: 'freezing', pt: 'congelante',
      def: 'very cold',
      ex: 'It was freezing on the platform, and the train was forty minutes late.' },
    { en: 'frigid', pt: 'gélido',
      def: 'extremely cold',
      ex: 'Frigid air moved down from the north overnight.' },
    { en: 'give up', pt: 'abrir mão / desistir',
      def: 'to part with; to let go of',
      ex: 'Nobody wants to give up a beach day because of a forecast that might be wrong.' },
    { en: 'intervene', pt: 'intervir',
      def: 'to become involved in a situation and try to change it',
      ex: 'The coast guard had to intervene before the boats went out.' },
    { en: 'look after', pt: 'cuidar de',
      def: 'to keep someone healthy or safe',
      ex: 'During a heat wave, the advice is simple: look after the elderly first.' },
    { en: 'mild', pt: 'ameno',
      def: 'moderately warm',
      ex: 'It has been unusually mild for February, which worries the farmers.' },
    { en: 'postpone', pt: 'adiar',
      def: 'to delay an event',
      ex: 'The match was postponed twice before they gave up on the weekend entirely.' },
    { en: 'recover', pt: 'recuperar-se',
      def: 'to become well again',
      ex: 'The region took three months to recover from the flooding.' },
    { en: 'tolerate', pt: 'tolerar / suportar',
      def: 'to accept something that you may not like',
      ex: 'I can tolerate the cold. It is the wind I cannot stand.' }
  ];

  const EXTRA_WORDS = [
    { en: 'bounce back ·+', pt: 'se recuperar',
      def: 'to recover',
      ex: 'The town bounced back faster than anyone predicted.' },
    { en: 'chill out ·+', pt: 'relaxar',
      def: 'to relax',
      ex: 'Chill out — the storm is still four hundred kilometres away.' },
    { en: 'cold spell ·+', pt: 'onda de frio',
      def: 'when the weather suddenly gets cold and stays cold for a while',
      ex: 'A cold spell in February is normal; one in April is not.' },
    { en: 'die down ·+', pt: 'diminuir / amainar',
      def: 'to become less',
      ex: 'The wind died down around midnight, and then the rain started.' },
    { en: 'freeze up ·+', pt: 'travar (de nervoso)',
      def: 'to become stuck; unable to move',
      ex: 'He froze up completely during the live broadcast.' },
    { en: 'heat wave ·+', pt: 'onda de calor',
      def: 'a period of unusually hot weather',
      ex: 'The heat wave lasted nine days and broke three local records.' },
    { en: 'hold off ·+', pt: 'segurar / não vir ainda',
      def: 'to delay, not happen immediately',
      ex: 'If the rain holds off until six, the event can still happen.' },
    { en: 'put up with ·+', pt: 'aguentar',
      def: 'to tolerate',
      ex: 'I can put up with pouring rain. Boiling heat is another matter.' }
  ];

  DF.PLAN.wc1[11] = {
    unit: 11,
    title: 'Rain or Shine',
    subtitle: 'Seu décimo primeiro mês',
    icon: '🌦️',

    mindmap: {
      center: 'Rain or Shine',
      sub: 'Phrasal verbs, símiles, inferência — e o clima que muda a rotina',
      branches: [
        {
          icon: '🌡️', name: 'Weather vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>freezing</b> e <b>frigid</b> não são intercambiáveis — freezing é o uso ' +
                'comum ("está congelando"), frigid é técnico/literário e mais forte.'
        },
        {
          icon: '✂️', name: 'Separable phrasal verbs',
          leaves: [
            { en: 'She gave up her job. / She gave her job up.', pt: 'objeto pode vir no meio' },
            { en: 'She gave it up.', pt: 'PRONOME é obrigatoriamente no meio' },
            { en: 'Other: put off · size up · think over', pt: '' }
          ],
          note: '<b>A regra que decide tudo:</b> com substantivo, os dois lugares funcionam. ' +
                'Com <b>pronome</b> (it, them, him), ele é obrigado a ficar no MEIO. ' +
                '"She gave up it" está errado — só "She gave it up".'
        },
        {
          icon: '🔒', name: 'Inseparable phrasal verbs',
          leaves: [
            { en: 'She looked after her colleagues.', pt: 'nunca separa' },
            { en: 'The doctor looked after them.', pt: 'nem com pronome' },
            { en: 'Other: find out · step in', pt: '' }
          ],
          note: 'Nestes, o objeto vem sempre DEPOIS da partícula, mesmo sendo pronome. ' +
                '"She looked them after" está errado.'
        },
        {
          icon: '🚫', name: 'Phrasal verbs without an object',
          leaves: [
            { en: 'She bounced back from her illness.', pt: 'não leva objeto direto' },
            { en: 'The plane took off on a dangerous mission.', pt: '' },
            { en: 'Other: die down · pick up · step in', pt: '' }
          ],
          note: 'Alguns phrasal verbs simplesmente não têm objeto. Tentar encaixar um é o ' +
                'erro mais comum: "The wind died down the storm" não faz sentido.'
        },
        {
          icon: '🎭', name: 'Three words, three meanings',
          leaves: [
            { en: 'My car breaks down.', pt: 'parar de funcionar' },
            { en: 'She breaks down and starts crying.', pt: 'ficar emocionado' },
            { en: 'He broke down and bought a surfboard.', pt: 'ceder, perder o controle' }
          ],
          note: '<b>Um phrasal verb pode ter três significados completamente diferentes.</b> ' +
                'Só o CONTEXTO decide. É por isso que decorar a tradução isolada não funciona ' +
                'com phrasal verb — tem que ser a frase inteira.'
        },
        {
          icon: '🎨', name: 'Similes — as ... as / like',
          leaves: [
            { en: 'I felt as cold as an ice cube.', pt: 'as + adjetivo + as' },
            { en: 'She can be as annoying as a puppy.', pt: 'as + adjetivo + as' },
            { en: 'The wind was howling like a wolf.', pt: 'like + substantivo' },
            { en: 'It felt as if I had lost ten kilos.', pt: 'as if + oração' }
          ],
          note: 'Um símile compara duas coisas de forma <b>inesperada</b>, pra criar imagem. ' +
                '"As cold as ice" já é clichê; "as cold as a hospital corridor" faz o leitor ' +
                'ver. A régua: se a comparação não surpreende, ela não está trabalhando.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🌦️',
        title: 'Overview · Vocabulary · Grammar',
        goal: 'Use phrasal verbs correctly, including where the object goes.',
        comp: 'Você usa phrasal verbs sabendo se são separáveis, inseparáveis ou sem objeto — ' +
              'e onde o pronome é obrigado a ficar.',
        live: [
          'The unit opener: the volcanic lightning photo and warm-up questions',
          'Vocabulary: Jerri Nielsen\'s story at the South Pole',
          'Grammar: Phrasal Verbs — separable, inseparable, and without an object',
          'Matching phrasal verbs in Tam\'s emails to their plain meanings',
          'Pair work: weather expressions and predictions'
        ],
        bridge: 'Na aula você viu a tabela dos três tipos e leu os e-mails do Tam. Aqui a ' +
                'posição do objeto vira decisão sob pressão, na redação do Forecast Desk, e ' +
                'você ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Connections — as quatro conversas e o telefonema de ' +
                  'costas.',
        ican: [
          'I can tell a separable phrasal verb from an inseparable one.',
          'I can place a pronoun correctly with a separable phrasal verb.',
          'I can recognize when one phrasal verb has several meanings.',
          'I can use the unit vocabulary to describe weather and its effects.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u11w1:cards:core',
                title: '📇 Twelve words for weather and its effects',
                sub: 'Exemplos do Forecast Desk — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u11w1:cards:extra',
                title: '➕ Eight the Word Bank does not give you',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Phrasal verbs at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u11w1:read:glance',
                title: '🔍 Three types, one question: where does the object go?',
                textTitle: 'Phrasal verbs',
                readAloud: false,
                text:
                  'SEPARABLE — the object can go in the middle or after\n' +
                  'She gave up her job.  /  She gave her job up.  (both fine)\n' +
                  'BUT with a pronoun, the middle is the ONLY option:\n' +
                  'She gave it up.  ("She gave up it" is wrong)\n' +
                  'Others: put off, size up, think over\n\n' +
                  'INSEPARABLE — the object always comes after the whole thing\n' +
                  'She looked after her colleagues.  /  The doctor looked after them.\n' +
                  '("She looked them after" is wrong)\n' +
                  'Others: find out, step in\n\n' +
                  'WITHOUT AN OBJECT — nothing follows\n' +
                  'She bounced back from her illness.  The plane took off.\n' +
                  'Others: die down, pick up\n\n' +
                  'THE THREE-WORD ONES are always inseparable:\n' +
                  'How much longer do we have to put up with this rain?\n\n' +
                  'A ARMADILHA DO BRASILEIRO: traduzir o phrasal verb palavra por palavra. ' +
                  '"Look after" nao e "olhar depois", e "cuidar de". "Put up with" nao e ' +
                  '"colocar acima com", e "aguentar". Decore a FRASE inteira, nunca as pecas ' +
                  'soltas — e por isso que este topico assusta e depois vira automatico.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u11w1:pv:1',
                title: '🎯 Which is correct?',
                main: 'The match was cancelled, so they ___.',
                options: DF.shuffle([
                  { label: 'called it off', correct: true }, { label: 'called off it' },
                  { label: 'called off' }, { label: 'called it off it' }
                ]),
                expl: 'call off é separável, e com PRONOME o objeto vai obrigatoriamente no ' +
                      'meio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u11w1:pv:2',
                title: '🎯 Which is correct?',
                main: 'She ___ during the storm — she never left their side.',
                options: DF.shuffle([
                  { label: 'looked after them', correct: true }, { label: 'looked them after' },
                  { label: 'looked after' }, { label: 'them looked after' }
                ]),
                expl: 'look after é INSEPARÁVEL — o objeto vem sempre depois, mesmo pronome.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u11w1:pv:3',
                title: '🎯 Which is correct?',
                main: 'The wind ___ around midnight.',
                options: DF.shuffle([
                  { label: 'died down', correct: true }, { label: 'died down the storm' },
                  { label: 'died it down' }, { label: 'down died' }
                ]),
                expl: 'die down não leva objeto — é intransitivo.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u11w1:pv:4',
                title: '🎯 Which is correct?',
                main: 'How much longer do we have to ___ this rain?',
                options: DF.shuffle([
                  { label: 'put up with', correct: true }, { label: 'put up' },
                  { label: 'put with up' }, { label: 'put it up with' }
                ]),
                expl: 'Phrasal de três palavras é sempre inseparável e completo.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u11w1:pv:5',
                title: '🎯 Which sentence is WRONG?',
                main: 'Only one breaks a rule.',
                options: DF.shuffle([
                  { label: 'She gave up it.', correct: true },
                  { label: 'She gave it up.' },
                  { label: 'She gave up her job.' },
                  { label: 'She gave her job up.' }
                ]),
                expl: 'Pronome com separável fica sempre no meio.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u11w1:pv:6',
                title: '🎭 What does "break down" mean here?',
                main: 'She read the message and broke down, right there in the office.',
                options: DF.shuffle([
                  { label: 'to become emotional, start crying', correct: true },
                  { label: 'to stop working properly' },
                  { label: 'to give in to something' },
                  { label: 'to break something into pieces' }
                ]),
                expl: 'Mesmo phrasal, três sentidos. Aqui é o emocional — só o contexto ' +
                      'entrega.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u11w1:pv:7',
                title: '🎭 And here?',
                main: 'He held out for months, then broke down and bought the surfboard.',
                options: DF.shuffle([
                  { label: 'to give in, lose control of a decision', correct: true },
                  { label: 'to stop working properly' },
                  { label: 'to start crying' },
                  { label: 'to explain in detail' }
                ]),
                expl: 'Terceiro sentido: ceder depois de resistir.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u11w1:pv:8',
                title: '🧩 Build the sentence:',
                answer: 'If the rain holds off until six the event can still happen',
                expl: 'hold off (sem objeto) + condicional real.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u11w1:tf:1',
                title: '🔀 Phrasal verb transformation',
                rounds: [
                  { base: 'They called off the match.', cmd: 'Question',
                    answers: ['Did they call off the match?'] },
                  { base: 'The wind died down.', cmd: 'Negative',
                    answers: ["The wind didn't die down.", 'The wind did not die down.'] },
                  { base: 'She looked after her colleagues.', cmd: 'Question',
                    answers: ['Did she look after her colleagues?'] },
                  { base: 'The flight took off on time.', cmd: 'Negative',
                    answers: ["The flight didn't take off on time.",
                              'The flight did not take off on time.'] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u11w1:drl:pv', unit: 11, waSec: 'Drill · phrasal',
                title: '🔁 Drill 1 — the phrasal verb changes', focus: 'phrasal verbs',
                frame: 'I hope the storm will ___.', ptHint: 'Espero que a tempestade ___.',
                slots: ['hold off', 'die down', 'clear up', 'pass quickly', 'stay offshore'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u11w1:drl:weather', unit: 11, waSec: 'Drill · clima',
                title: '🔁 Drill 2 — the weather changes', focus: 'vocabulário',
                frame: 'I can\'t put up with ___.', ptHint: 'Não aguento ___.',
                slots: ['a heat wave', 'a cold spell', 'pouring rain', 'snow flurries',
                        'boiling heat'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u11w1:drl:simile', unit: 11, waSec: 'Drill · símile',
                title: '🔁 Drill 3 — the comparison changes', focus: 'símiles',
                frame: 'The morning was ___.', ptHint: 'A manhã estava ___.',
                slots: ['as cold as ice', 'as hot as an oven', 'like an angry lion',
                        'as loud as a train', 'like a wet blanket'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u11w1:bc:1', unit: 11, waSec: 'Backchain',
                title: '🧱 The three-word phrasal',
                ptHint: 'Quanto tempo mais vamos ter que aguentar essa chuva?',
                chain: ['this rain', 'put up with this rain',
                        'do we have to put up with this rain',
                        'How much longer do we have to put up with this rain?'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u11w1:bc:2', unit: 11, waSec: 'Backchain',
                title: '🧱 The pronoun in the middle',
                ptHint: 'Eles cancelaram por causa do vento, mas não avisaram ninguém.',
                chain: ['told anyone', "but they didn't tell anyone",
                        "They called it off because of the wind, but they didn't tell anyone."] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u11w1:dlg:1',
                title: '🎧 The newsroom at six in the morning',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'Is the storm still picking up?' },
                  { who: 'Elias', en: 'It died down around three, but the rain hasn\'t held off ' +
                                      'at all.' },
                  { who: 'Nadia', en: 'Should we call the outdoor broadcast off?' },
                  { who: 'Elias', en: 'Let\'s think it over for an hour. If the sun breaks ' +
                                      'through, we keep it.' }
                ],
                question: 'What is the state of the storm?',
                options: DF.shuffle([
                  { label: 'The wind died down but the rain continues', correct: true },
                  { label: 'Both the wind and rain stopped' },
                  { label: 'The storm is getting stronger' },
                  { label: 'The broadcast was already cancelled' }
                ]),
                expl: '"It died down around three, but the rain hasn\'t held off at all." ' +
                      'Quatro phrasal verbs numa conversa de dez segundos — é assim que eles ' +
                      'aparecem de verdade.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u11w1:dlg:2',
                title: '🎧 A correction at the desk',
                sub: 'Repare o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'They called off it because of the wind.' },
                  { who: 'Tomás', en: 'Called it off — the pronoun goes in the middle.' },
                  { who: 'Priya', en: 'Right. They called it off because of the wind.' },
                  { who: 'Tomás', en: 'With a noun you could say either way. With "it", only ' +
                                      'the middle works.' }
                ],
                question: 'Where must a pronoun go with a separable phrasal verb?',
                options: DF.shuffle([
                  { label: 'In the middle, between the verb and the particle', correct: true },
                  { label: 'After the particle' },
                  { label: 'Before the whole phrasal verb' },
                  { label: 'Either place works' }
                ]),
                expl: 'Com substantivo, os dois lugares valem. Com pronome, só o meio.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w1:bld:1', unit: 11, waSec: 'Sua vez',
                title: '🗣️ The weather you can\'t stand',
                prompt: 'Say which weather you cannot tolerate, using "put up with".',
                example: "I can put up with rain all week, but I can't put up with humidity.",
                mustUse: ['put up with'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w1:bld:2', unit: 11, waSec: 'Sua vez',
                title: '🗣️ A plan the weather ruined',
                prompt: 'Describe a time weather forced you to cancel or postpone something. ' +
                        'Use a separable phrasal verb with a pronoun.',
                example: 'We planned a barbecue for my birthday and had to call it off two ' +
                         'hours before.',
                mustUse: ['it'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w1:bld:3', unit: 11, waSec: 'Sua vez',
                title: '🗣️ Someone who looked after you',
                prompt: 'Say who looked after you when you were sick or in trouble. Use "look ' +
                        'after" correctly.',
                example: 'My neighbour looked after my dog for a week when I was in hospital.',
                mustUse: ['looked after'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w1+:b1', unit: 11, waSec: 'Praticar mais',
                title: '🔥 Six phrasal verbs in sixty seconds',
                prompt: 'Describe a stormy day using at least six phrasal verbs from this unit.',
                example: '(1 minuto)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w1+:b2', unit: 11, waSec: 'Praticar mais',
                title: '🔥 One phrasal verb, three meanings',
                prompt: 'Use "break down" in three different sentences, with three different ' +
                        'meanings.',
                example: 'My car broke down. She broke down and cried. He broke down and ' +
                         'finally agreed.',
                mustUse: ['broke down'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de phrasal verbs', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I hope the storm will ___.', pool: 'weatherPhrasal',
                  focus: 'phrasal verbs', ptHint: 'Espero que a tempestade ___.', n: 5 },
                { frame: "I can't put up with ___.", pool: 'weatherEvent',
                  focus: 'vocabulário', ptHint: 'Não aguento ___.', n: 5 }
              ],
              backchain: [
                { text: "I can't put up with {weatherEvent}.", ptHint: 'Não aguento…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'Listening · Connections · Video',
        goal: 'Hear phrasal verbs in fast speech, and handle a plan that the weather ruined.',
        comp: 'Você reconhece phrasal verbs no meio de uma conversa rápida, e conduz um ' +
              'telefonema pra mudar um plano por causa do tempo.',
        live: [
          'Listening: four conversations about parties, picnics, snow and auditions',
          'Working out what storm out, hold off, freeze up mean from context',
          'Connections: the back-to-back phone call role-play',
          'Video: Sinking England — the coastline being lost to the sea',
          'Completing the chart with key words from the video'
        ],
        bridge: 'Na aula você ouviu as quatro conversas e fez o telefonema de costas. Aqui as ' +
                'conversas são do Forecast Desk, e adivinhar o phrasal verb pelo contexto vira ' +
                'exercício de decisão.',
        nextLive: 'Semana 3 · Reading + Speaking — os caçadores de tornado e as histórias ' +
                  'estranhas de clima.',
        ican: [
          'I can work out what a phrasal verb means from context alone.',
          'I can follow a fast conversation containing several phrasal verbs.',
          'I can make a phone call to change a plan because of the weather.',
          'I can follow a documentary about coastal erosion.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'listen', icon: '👂', name: 'Guess it from context', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u11w2:dlg:1',
                title: '👂 Someone left the party',
                sub: 'Sem texto na tela. O que "storm out" quer dizer?',
                hideText: true,
                lines: [
                  { who: 'Carmen', en: 'How was the party?' },
                  { who: 'Jill', en: 'Fine at first. Then two guys started yelling in the ' +
                                     'other room.' },
                  { who: 'Carmen', en: 'What happened?' },
                  { who: 'Jill', en: 'One of them shouted "I\'m leaving then!" and stormed ' +
                                     'out. He didn\'t even stay for the cake.' }
                ],
                question: 'What does "storm out" mean?',
                options: DF.shuffle([
                  { label: 'To leave angrily and suddenly', correct: true },
                  { label: 'To arrive during a storm' },
                  { label: 'To shout at everyone' },
                  { label: 'To stay until the end' }
                ]),
                expl: 'O contexto entrega: gritou, saiu, não ficou pro bolo. Nenhuma tradução ' +
                      'literal de "storm" ajudaria aqui.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u11w2:dlg:2',
                title: '👂 The picnic that might be cancelled',
                sub: 'Sem texto na tela. O que "hold off" quer dizer?',
                hideText: true,
                lines: [
                  { who: 'Bill', en: 'Over a hundred people are coming today, and the forecast ' +
                                     'says rain.' },
                  { who: 'Dan', en: 'Don\'t worry. I really don\'t think it\'s going to rain ' +
                                    'until later tonight.' },
                  { who: 'Bill', en: 'If the rain can just hold off for a few more hours, ' +
                                     'everything will be fine.' },
                  { who: 'Dan', en: 'The sun was trying to break through a few minutes ago. ' +
                                    'I can see a bit of sunlight right now.' }
                ],
                question: 'What does "hold off" mean here?',
                options: DF.shuffle([
                  { label: 'To not happen yet, to be delayed', correct: true },
                  { label: 'To hold something in your hands' },
                  { label: 'To stop completely and never return' },
                  { label: 'To get much stronger' }
                ]),
                expl: '"if the rain can just hold off for a few more hours" — segurar, não vir ' +
                      'ainda.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u11w2:dlg:3',
                title: '👂 The audition that went wrong',
                sub: 'Sem texto na tela. O que "freeze up" quer dizer?',
                hideText: true,
                lines: [
                  { who: 'Andy', en: 'At first everything was going well. Then I don\'t know ' +
                                     'what happened.' },
                  { who: 'Mr. Meyers', en: 'What do you mean?' },
                  { who: 'Andy', en: 'I just froze up. I could read the words on the paper, but ' +
                                     'my mouth wouldn\'t move.' },
                  { who: 'Mr. Meyers', en: 'Don\'t worry, Andy. They haven\'t made a decision ' +
                                           'yet.' }
                ],
                question: 'What does "freeze up" mean here?',
                options: DF.shuffle([
                  { label: 'To be unable to speak or move, from nerves', correct: true },
                  { label: 'To become physically cold' },
                  { label: 'To leave in a hurry' },
                  { label: 'To forget the words completely' }
                ]),
                expl: '"I could read the words... but my mouth wouldn\'t move." Nada a ver com ' +
                      'temperatura — mas a metáfora do frio está lá.'
              },
              { ui: 'match', cat: 'voc', srsId: 'wc1u11w2:match:pv',
                title: '🔗 Match the phrasal verb to its meaning:',
                pairs: [
                  ['storm out', 'to leave angrily'],
                  ['hold off', 'to be delayed, not happen yet'],
                  ['break through', 'to emerge, get past something'],
                  ['freeze up', 'to be unable to move or speak'],
                  ['chill out', 'to relax']
                ] }
            ]
          },

          {
            id: 'phonecall', icon: '📞', name: 'The phone call', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u11w2:read:call',
                title: '📞 The situation',
                textTitle: 'Changing plans by phone',
                text:
                  'You are on vacation somewhere with dramatic weather — a dust storm, a ' +
                  'blizzard, or a hurricane approaching. Something has happened and you now ' +
                  'have to cancel or change your plans.\n\n' +
                  'You call home. Tell your friend what has happened and what you plan to do ' +
                  'next.\n\n' +
                  'Use these where they fit: break down · call off · chill out · come down · ' +
                  'cut off · die down · hold off · put up with · size up · be snowed in · ' +
                  'take off',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w2:pc:1', unit: 11, waSec: 'Phone call',
                title: '📞 What happened',
                prompt: 'Open the call and explain what the weather has done, using two phrasal ' +
                        'verbs.',
                example: 'The road out of town is cut off and our flight didn\'t take off this ' +
                         'morning.',
                mustUse: ['cut off'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w2:pc:2', unit: 11, waSec: 'Phone call',
                title: '📞 What you plan to do',
                prompt: 'Say what you plan to do next, using at least one more phrasal verb.',
                example: 'We\'re going to wait until the snow dies down, then size up whether ' +
                         'the road is passable.',
                mustUse: ['die'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w2:pc:3', unit: 11, waSec: 'Phone call',
                title: '📞 The whole call, both sides',
                prompt: 'Play both sides of the call for one minute: you explain, your friend ' +
                        'asks questions.',
                example: '(1 minuto)',
                expl: 'É o role-play do livro, sozinho e cronometrado. Mande o áudio.' }
            ]
          },

          {
            id: 'video', icon: '🎬', name: 'A coastline disappearing', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u11w2:dlg:4',
                title: '🎬 The sea taking the land',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Narrator', en: 'Erosion of this coastline has gone on for thousands ' +
                                         'of years, but things have got much worse.' },
                  { who: 'Narrator', en: 'Tough decisions are being made: spend millions ' +
                                         'defending the coastline, or abandon huge areas to ' +
                                         'the sea.' },
                  { who: 'Official', en: 'If we didn\'t defend, nature would take its course, ' +
                                          'and we would lose significant amounts of land.' },
                  { who: 'Narrator', en: 'In some places, instead of building more sea walls, ' +
                                         'farmland is flooded and salt marshes recreated — ' +
                                         'letting nature protect the coast itself.' }
                ],
                question: 'What is the alternative to building more sea walls?',
                options: DF.shuffle([
                  { label: 'Flooding farmland to recreate salt marshes', correct: true },
                  { label: 'Building higher walls further inland' },
                  { label: 'Doing nothing at all anywhere' },
                  { label: 'Moving all the towns' }
                ]),
                expl: '"instead of building more sea walls... farmland is flooded and salt ' +
                      'marshes recreated." E repare na passiva da unidade 9 voltando.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w2:vd:1', unit: 11, waSec: 'Video',
                title: '🗣️ Somewhere disappearing near you',
                prompt: 'Do you know a place that is slowly disappearing — a beach, a river, a ' +
                        'neighbourhood? Describe it and say why.',
                example: 'The beach where I learned to swim is half the width it was twenty ' +
                         'years ago, because everyone says the new port changed the current.',
                mustUse: ['because'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w2+:b1', unit: 11, waSec: 'Praticar mais',
                title: '🔥 Guess five, explain three',
                prompt: 'Name five phrasal verbs you have heard but never looked up. Guess what ' +
                        'three of them mean from where you heard them.',
                example: '(60 segundos)' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de phrasal', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I hope the storm will ___.', pool: 'weatherPhrasal',
                  focus: 'phrasal verbs', ptHint: 'Espero que a tempestade ___.', n: 5 }
              ],
              backchain: [
                { text: 'I hope the rain will {weatherPhrasal} before the game.',
                  ptHint: 'Espero que a chuva… antes do jogo.' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'Reading · Speaking',
        goal: 'Make inferences from what a text implies, and spot the story that is false.',
        comp: 'Você tira conclusões que o texto não diz explicitamente, e avalia qual de ' +
              'quatro histórias estranhas de clima é a inventada.',
        live: [
          'Reading: Storm Chasers — Tim Samaras and the tornado',
          'The Reading Strategy: making inferences',
          'Reading: Changing Rains — climate and the fall of civilizations',
          'Speaking: four strange weather stories, one of them false',
          'Presenting your choice and your reasoning to the class'
        ],
        bridge: 'Na aula você leu sobre os caçadores de tornado e votou qual história era ' +
                'falsa. Aqui os textos são do Forecast Desk, e a inferência vira exercício de ' +
                'decisão: o que o texto PROVA e o que ele só sugere?',
        nextLive: 'Semana 4 · Writing + Expanding — a descrição vívida e os três sentidos de ' +
                  '"break down".',
        ican: [
          'I can draw a conclusion the text implies but does not state.',
          'I can explain WHY an inference is probably true.',
          'I can judge which of several accounts is invented.',
          'I can present my reasoning, not just my answer.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'inference', icon: '🔍', name: 'Making inferences', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u11w3:read:inf',
                title: '🔍 What the text implies but never says',
                textTitle: 'Making inferences',
                readAloud: false,
                text:
                  'An INFERENCE is a conclusion you draw from what you read — even when it is ' +
                  'not stated directly.\n\n' +
                  'STATEMENT (in the text): The tornado caused more than light damage.\n' +
                  'INFERENCE: On the Fujita scale, it was greater than an F0.\n' +
                  'WHY: because the text says an F0 only causes light damage.\n\n' +
                  'THE TEST OF A GOOD INFERENCE\n' +
                  'You must be able to finish this sentence: "This is probably true ' +
                  'because..." and point at something in the text.\n\n' +
                  'If you cannot point at anything, it is not an inference — it is a guess.\n\n' +
                  'A ARMADILHA: confundir inferencia com opiniao. "O caçador de tornados e ' +
                  'corajoso" e opiniao. "O caçador aceita risco fisico como parte do trabalho" ' +
                  'e inferencia, porque o texto descreve ele dirigindo na direcao do tornado. ' +
                  'A diferenca e se voce consegue apontar a linha.',
                nextLabel: 'Got it ▸' },
              { ui: 'read', cat: 'fun', srsId: 'wc1u11w3:read:text',
                title: '📖 A new text, the same skill',
                textTitle: 'The Village That Moved',
                text:
                  'For four hundred years, the village of Peniche Velho sat on a cliff above ' +
                  'the fishing grounds. Today the church tower is under eleven metres of water, ' +
                  'about two hundred metres offshore.\n\n' +
                  'The move happened gradually and then all at once. Between 1890 and 1960, the ' +
                  'cliff lost roughly half a metre a year — slow enough that each generation ' +
                  'assumed the next one would deal with it. Families rebuilt walls, moved ' +
                  'fences back, and stayed.\n\n' +
                  'In the winter of 1961, a single storm took eleven metres of cliff in one ' +
                  'night. Four houses went into the sea. Nobody was killed, because the storm ' +
                  'arrived during the annual festival and most of the village was in the square ' +
                  'on the other side of town.\n\n' +
                  'The government relocated the village the following year. Every household was ' +
                  'offered land three kilometres inland. Only nineteen of the forty-one ' +
                  'families accepted immediately; the rest waited, and most had moved within a ' +
                  'decade.\n\n' +
                  'The new village has a different name, and the old one appears on no current ' +
                  'map. But once a year, in the same week as the festival, boats go out and ' +
                  'stop above where the church used to be. Nobody organizes this. It simply ' +
                  'happens.',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u11w3:q:1',
                title: '🔍 Inference: the villagers were emotionally attached to the old village.',
                main: 'Is this probably true, and why?',
                options: DF.shuffle([
                  { label: 'Probably true — boats still gather above the church every year',
                    correct: true },
                  { label: 'Probably false — they all moved away' },
                  { label: 'The text states it directly' },
                  { label: 'There is no evidence either way' }
                ]),
                expl: '"Nobody organizes this. It simply happens." — o texto nunca diz ' +
                      '"attached", mas aponta a evidência.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u11w3:q:2',
                title: '🔍 Inference: many families did not want to leave.',
                main: 'Which line supports it?',
                options: DF.shuffle([
                  { label: 'Only nineteen of forty-one accepted immediately', correct: true },
                  { label: 'The church tower is under eleven metres of water' },
                  { label: 'The storm arrived during the festival' },
                  { label: 'The cliff lost half a metre a year' }
                ]),
                expl: 'Menos da metade aceitou de imediato — o número é a evidência.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u11w3:q:3',
                title: '🔍 Which is OPINION, not inference?',
                main: '',
                options: DF.shuffle([
                  { label: 'The villagers were foolish to stay so long.', correct: true },
                  { label: 'The erosion was gradual before 1961.' },
                  { label: 'The festival probably saved lives.' },
                  { label: 'Most families eventually moved.' }
                ]),
                expl: '"Foolish" é julgamento — não há linha no texto que sustente isso. As ' +
                      'outras três você consegue apontar.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w3:q:4', unit: 11, waSec: 'Inference',
                title: '🔍 Make your own inference',
                prompt: 'Make one inference about the villagers, and finish the sentence "This ' +
                        'is probably true because..."',
                example: 'They probably expected the sea to take the rest eventually. This is ' +
                         'probably true because the relocation was accepted by everyone within ' +
                         'a decade, not just the nineteen.',
                mustUse: ['probably true because'] }
            ]
          },

          {
            id: 'false', icon: '🕵️', name: 'Which one is false?', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u11w3:read:false',
                title: '🕵️ Four weather stories, one invented',
                textTitle: 'Only one of these is false',
                text:
                  'ONE. An octopus at a European aquarium was believed by staff to predict the ' +
                  'sea state. When it floated at the top of the tank, they said, the water ' +
                  'would soon be rough; when it sat at the bottom, calm. The aquarium once ' +
                  'postponed a boat trip based on its behaviour.\n\n' +
                  'TWO. The capital of a West African country is slowly being buried by sand ' +
                  'from a nearby desert. Residents have tried building fences and pouring ' +
                  'gasoline on the dunes; nothing has worked so far.\n\n' +
                  'THREE. In February 2008, villagers in southern India reported small moving ' +
                  'objects falling from the sky during a storm. They turned out to be fish.\n\n' +
                  'FOUR. In the summer of 2010, scientists in the Gulf created more than fifty ' +
                  'artificial rainstorms using a machine — some with hail and lightning — on ' +
                  'days when the forecast was completely clear.\n\n' +
                  'Which one do you think is false? Present your choice AND your reasoning.',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w3:fl:1', unit: 11, waSec: 'False story',
                title: '🕵️ Your choice and your reasoning',
                prompt: 'Say which story you think is false, and explain the reasoning — not ' +
                        'just the answer.',
                example: 'I think the first one is false, because an aquarium would not ' +
                         'postpone a real trip based on an octopus. The others sound strange ' +
                         'but have a mechanism I can imagine.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w3:fl:2', unit: 11, waSec: 'False story',
                title: '🕵️ Argue for a different answer',
                prompt: 'Now argue that a DIFFERENT story is the false one, as convincingly as ' +
                        'you can.',
                example: '(30 segundos)',
                expl: 'Conseguir defender a resposta que você não escolheu é o que separa ' +
                      'opinião de raciocínio.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w3+:b1', unit: 11, waSec: 'Praticar mais',
                title: '🔥 Three inferences about a stranger',
                prompt: 'Think of someone you saw today but do not know. Make three inferences ' +
                        'about them, each with "because I saw..."',
                example: '(45 segundos)' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de clima', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I can't put up with ___.", pool: 'weatherEvent',
                  focus: 'vocabulário', ptHint: 'Não aguento ___.', n: 5 }
              ],
              backchain: [
                { text: 'The morning was {simileEnd}.', ptHint: 'A manhã estava…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Writing · Expanding Your Fluency · Outcomes',
        goal: 'Write a vivid description using similes, and use one phrasal verb three ways.',
        comp: 'Você escreve uma descrição que faz o leitor SENTIR o clima, usando símiles — e ' +
              'domina os múltiplos sentidos de um mesmo phrasal verb.',
        live: [
          'Writing: A Vivid Description — how a change in weather affected daily life',
          'The Writing Strategy: using similes with like, as if, and as ... as',
          'Completing the chart comparing Aleksei\'s life to your own',
          'Expanding Your Fluency: the three meanings of "break down"',
          'Check What You Know'
        ],
        bridge: 'Na aula você leu o texto do Aleksei e escreveu o seu. Aqui o símile vira ' +
                'exercício de decisão — clichê ou imagem de verdade? — e "break down" ganha ' +
                'três cenários pra separar os sentidos.',
        nextLive: 'Unidade 12 · What\'s Your Game? — discurso indireto e o mundo do esporte.',
        ican: [
          'I can write a description that makes the reader feel the weather.',
          'I can use like, as if, and as ... as to build a simile.',
          'I can tell a fresh simile from a cliché.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'similes', icon: '🎨', name: 'Similes that work', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u11w4:read:sim',
                title: '🎨 The comparison has to surprise',
                textTitle: 'Using similes',
                readAloud: false,
                text:
                  'A SIMILE compares two things in an unexpected way, to make writing vivid.\n\n' +
                  'THE THREE STRUCTURES\n' +
                  'like + noun:        The wind was howling like a wolf.\n' +
                  'as ... as + noun:   I felt as cold as an ice cube.\n' +
                  'as if + clause:     It felt as if I had lost ten kilos.\n\n' +
                  'THE PROBLEM WITH CLICHES\n' +
                  '"as cold as ice" and "as hot as fire" are technically similes, but the ' +
                  'reader has seen them a thousand times, so nothing happens in their head.\n\n' +
                  'FRESH: The wind came off the water like someone opening a freezer door.\n' +
                  'FRESH: The heat sat on the town as if it had decided to stay.\n\n' +
                  'THE TEST: if you could have written the comparison without ever visiting ' +
                  'the place, it is a cliche. A good simile could only come from someone who ' +
                  'was actually there.\n\n' +
                  'A ARMADILHA: empilhar similes. Um por paragrafo ja e muito. Tres seguidos ' +
                  'cancelam uns aos outros e o leitor para de ver qualquer coisa.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u11w4:sm:1',
                title: '🎨 Which simile actually works?',
                main: 'Both describe the same cold morning.',
                options: DF.shuffle([
                  { label: 'The air felt like the inside of a fridge someone left open.',
                    correct: true },
                  { label: 'It was as cold as ice.' },
                  { label: 'It was as cold as the North Pole.' },
                  { label: 'It was freezing cold, like ice.' }
                ]),
                expl: 'A primeira é específica e cria imagem. As outras três são clichês que o ' +
                      'leitor pula.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u11w4:sm:2',
                title: '🎨 Which structure is this?',
                main: 'It felt as if the town had stopped breathing.',
                options: DF.shuffle([
                  { label: 'as if + clause', correct: true }, { label: 'like + noun' },
                  { label: 'as ... as + noun' }, { label: 'It is not a simile' }
                ]),
                expl: 'as if introduz uma oração completa (sujeito + verbo).' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4:sm:3', unit: 11, waSec: 'Similes',
                title: '🎨 Write a fresh simile about heat',
                prompt: 'Describe extreme heat with a simile that is NOT a cliché. Use "like" ' +
                        'or "as if".',
                example: 'The heat sat on the street like something that had no plans to leave.',
                mustUse: ['like'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4:sm:4', unit: 11, waSec: 'Similes',
                title: '🎨 Write a fresh simile about rain',
                prompt: 'Describe heavy rain with a simile that could only come from someone ' +
                        'who was there.',
                example: 'The rain came down as if someone were emptying buckets off the roof, ' +
                         'one after another.',
                mustUse: ['as if'] }
            ]
          },

          {
            id: 'writing', icon: '✍️', name: 'Write the vivid description', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4:wr:1', unit: 11, waSec: 'Writing',
                title: '✍️ Sentence 1 — the typical weather',
                prompt: 'Describe the weather where you live in a normal week. Plain, no ' +
                        'similes yet.',
                example: 'Where I live it is hot almost all year, with heavy rain from November ' +
                         'to March.',
                mustUse: ['where I live'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4:wr:2', unit: 11, waSec: 'Writing',
                title: '✍️ Sentence 2 — the change, with a simile',
                prompt: 'Describe one time the weather changed unexpectedly. Include ONE simile.',
                example: 'Last July a cold front arrived overnight and the town felt like ' +
                         'somewhere else entirely — people wore coats they had never used.',
                mustUse: ['like'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4:wr:3', unit: 11, waSec: 'Writing',
                title: '✍️ Sentence 3 — how it changed your routine',
                prompt: 'Say what you had to do differently. Use at least one phrasal verb.',
                example: 'We had to call off the weekend trip, and I put off buying the tickets ' +
                         'until the forecast settled.',
                mustUse: ['off'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4:wr:4', unit: 11, waSec: 'Writing',
                title: '✍️ Sentence 4 — how it affected your mood',
                prompt: 'Say how the weather affected how you felt. Use "as if" or "as ... as".',
                example: 'By the fourth grey day I felt as if the whole month had been ' +
                         'cancelled.',
                mustUse: ['as if'],
                expl: 'Mande as quatro frases juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'breakdown', icon: '🎭', name: 'One phrasal verb, three situations', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u11w4:read:bd',
                title: '🎭 Three situations, three meanings',
                textTitle: 'What does "break down" mean here?',
                text:
                  'ONE. You are driving in the country with a friend when your car BREAKS ' +
                  'DOWN. A thunderstorm is approaching and you realize you left your phone at ' +
                  'home — and your friend\'s phone has no reception.\n\n' +
                  'TWO. You are studying abroad and it has been a long, cold winter. You have a ' +
                  'friend from the Caribbean who is not used to cold weather. You see them at ' +
                  'school and ask "How are you?" Your friend BREAKS DOWN and starts crying.\n\n' +
                  'THREE. You lent money to a friend to repair their car windows after a storm. ' +
                  'They recently got paid and were supposed to pay you back, but instead they ' +
                  'BROKE DOWN and bought a new surfboard.\n\n' +
                  'a. to give in to something; to lose control\n' +
                  'b. to stop working properly\n' +
                  'c. to get upset, become emotional',
                nextLabel: 'Next ▸' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u11w4:bd:1',
                title: '🔗 Match each situation to the meaning:',
                pairs: [
                  ['the car breaks down', 'to stop working properly'],
                  ['your friend breaks down and cries', 'to become emotional'],
                  ['they broke down and bought a surfboard', 'to give in, lose control']
                ] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4:bd:2', unit: 11, waSec: 'Role-play',
                title: '🎭 A one-minute role-play',
                prompt: 'Choose ONE of the three situations and create a one-minute dialogue ' +
                        'about it, playing both people. Use three or four phrasal verbs from ' +
                        'this unit.',
                example: '(1 minuto)',
                expl: 'É a atividade do livro, sozinho. O professor conta os phrasal verbs.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4:bd:3', unit: 11, waSec: 'Role-play',
                title: '🎭 How did you resolve it?',
                prompt: 'Say how the situation you chose ended, in three sentences.',
                example: 'We waited for the storm to die down, then walked to a farmhouse. The ' +
                         'owner looked after us until the tow truck came.',
                mustUse: ['looked after'] }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u11w4:chk:1', unit: 11, idx: 0,
                statement: 'I can explain how weather affects my life.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u11w4:chk:2', unit: 11, idx: 1,
                statement: 'I can make inferences based on information I have learned.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u11w4:chk:3', unit: 11, idx: 2,
                statement: 'I can understand and use similes.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u11w4:chk:4', unit: 11, idx: 3,
                statement: 'I can use phrasal verbs.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u11w4:pt:1',
                title: '📝 Which is correct?', main: 'They cancelled the match, so they ___.',
                options: DF.shuffle([
                  { label: 'called it off', correct: true }, { label: 'called off it' },
                  { label: 'called off them' }, { label: 'it called off' }
                ]),
                expl: 'Pronome com separável fica no meio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u11w4:pt:2',
                title: '📝 Which is correct?', main: 'She ___ during the whole storm.',
                options: DF.shuffle([
                  { label: 'looked after them', correct: true }, { label: 'looked them after' },
                  { label: 'after looked them' }, { label: 'looked after they' }
                ]),
                expl: 'look after é inseparável.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u11w4:pt:3',
                title: '📝 Complete:', main: 'If the rain ___ until six, the event can happen.',
                options: DF.shuffle([
                  { label: 'holds off', correct: true }, { label: 'holds up' },
                  { label: 'holds on' }, { label: 'holds out' }
                ]),
                expl: 'hold off = não vir ainda, atrasar.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u11w4:pt:4',
                title: '📝 Which is a fresh simile, not a cliché?',
                main: '',
                options: DF.shuffle([
                  { label: 'The wind came off the water like a freezer door opening.',
                    correct: true },
                  { label: 'It was as cold as ice.' },
                  { label: 'It was as hot as fire.' },
                  { label: 'She was as busy as a bee.' }
                ]),
                expl: 'As outras três são clichês — o leitor não vê nada.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u11w4:pt:5',
                title: '📝 Which is an INFERENCE, not an opinion?',
                main: 'A text describes a man driving toward a tornado to photograph it.',
                options: DF.shuffle([
                  { label: 'He accepts physical risk as part of his work', correct: true },
                  { label: 'He is very brave' },
                  { label: 'He is being irresponsible' },
                  { label: 'He should find another job' }
                ]),
                expl: 'Só a primeira você consegue apontar no texto. As outras são julgamento.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u11w4:pt:6',
                title: '🔗 Match the phrasal verb type:',
                pairs: [
                  ['give up (a job / it up)', 'separable'],
                  ['look after (them)', 'inseparable'],
                  ['die down', 'no object'],
                  ['put up with', 'three-word, inseparable']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u11w4:pt:7',
                title: '🧩 Build the sentence:',
                answer: 'How much longer do we have to put up with this rain',
                expl: 'Phrasal de três palavras, sempre junto.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full description, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u11w4+:b1', unit: 11, waSec: 'Praticar mais',
                title: '🔥 Ninety seconds of weather, no clichés',
                prompt: 'Describe the most extreme weather you have experienced, for ninety ' +
                        'seconds. If you say "as cold as ice" or "as hot as fire", start again.',
                example: '(90 segundos)' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de símile', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The morning was ___.', pool: 'simileEnd',
                  focus: 'símiles', ptHint: 'A manhã estava ___.', n: 5 }
              ],
              backchain: [
                { text: "I can't put up with {weatherEvent}.", ptHint: 'Não aguento…' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
