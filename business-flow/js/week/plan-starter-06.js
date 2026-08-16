/* ENGLISH FLOW — week/plan-starter-06.js
   BUSINESS STARTER · UNIT 6 "Entertaining"

   Numeração corrida do Felipe: Unit 6 = semanas 21–24.
     semana 21 = U6 W1 · Working with words (food and drink)
     semana 22 = U6 W2 · Language at work (can/can't)
     semana 23 = U6 W3 · Practically speaking (days & time) + Business communication
                 (inviting, accepting, declining)
     semana 25 = U6 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. O menu, os personagens e
   os preços do restaurante são autorais (universo Whiterock Consultancy) — nunca o
   menu/preços exatos do livro (que usa "Mr Shimura"/"Mr Jarvis" e uma
   história real de fábrica cantando "EE"/Merthyr Tydfil). Vocabulário de
   comida/bebida é conhecimento geral, então repete — a situação, não. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const FOOD = [
    { en: 'grilled fish', pt: 'peixe grelhado', veg: false },
    { en: 'roast chicken', pt: 'frango assado', veg: false },
    { en: 'beef stew', pt: 'ensopado de carne', veg: false },
    { en: 'vegetable curry', pt: 'curry de legumes', veg: true },
    { en: 'mushroom risotto', pt: 'risoto de cogumelos', veg: true },
    { en: 'lentil soup', pt: 'sopa de lentilha', veg: true }
  ];
  const DESSERTS = [
    { en: 'chocolate cake', pt: 'bolo de chocolate' },
    { en: 'fruit salad', pt: 'salada de frutas' },
    { en: 'apple pie', pt: 'torta de maçã' }
  ];
  const DRINKS = [
    { en: 'sparkling water', pt: 'água com gás' },
    { en: 'orange juice', pt: 'suco de laranja' },
    { en: 'iced tea', pt: 'chá gelado' },
    { en: 'coffee', pt: 'café' }
  ];
  const ABILITIES = [
    { en: 'play the guitar', pt: 'tocar violão' },
    { en: 'speak Mandarin', pt: 'falar mandarim' },
    { en: 'cook Italian food', pt: 'cozinhar comida italiana' },
    { en: 'swim', pt: 'nadar' },
    { en: 'drive', pt: 'dirigir' },
    { en: 'play chess', pt: 'jogar xadrez' }
  ];

  DF.PLAN.starter[6] = {
    unit: 6,
    title: 'Entertaining',
    subtitle: 'Recebendo clientes: comida, bebida e o que você sabe fazer',
    icon: '🍽️',

    mindmap: {
      center: 'Entertaining',
      sub: 'Pedir comida e falar do que você é capaz de fazer',
      branches: [
        {
          icon: '🍽️', name: 'Food and drink',
          leaves: FOOD.map(function (f) { return { en: f.en, pt: f.pt + (f.veg ? ' · veg' : '') }; })
            .concat(DESSERTS.map(function (d) { return { en: d.en, pt: d.pt + ' (dessert)' }; }))
            .concat(DRINKS.map(function (d) { return { en: d.en, pt: d.pt + ' (drink)' }; })),
          note: 'Separe por categoria: main course, dessert, drink. Um prato "veg" é ' +
                'vegetariano — útil pra perguntar antes de pedir por outra pessoa.'
        },
        {
          icon: '💬', name: "I'd like vs I like",
          leaves: [
            { en: "I'd like the fish, please.", pt: 'pedido — educado, no restaurante' },
            { en: 'I like fish.', pt: 'gosto — fala geral, não é pedido' },
            { en: "What would you like?", pt: 'pergunta do garçom' },
            { en: "I'd like to try the risotto.", pt: "I'd like + to + verbo" }
          ],
          note: '<b>I\'d like</b> = I would like — é o pedido educado no restaurante. ' +
                '<b>I like</b> sem o \'d é só gosto pessoal, não serve pra pedir.'
        },
        {
          icon: '💪', name: 'Can — habilidade',
          leaves: ABILITIES.map(function (a) { return { en: 'can ' + a.en, pt: a.pt }; }),
          note: '<b>can</b> não muda com he/she/it: "She can cook." (nunca "cooks"). ' +
                'O verbo depois do can fica sempre na forma base.'
        },
        {
          icon: '❌', name: "Can't — negativa",
          leaves: [
            { en: "I can't swim.", pt: 'não sei nadar' },
            { en: "He can't speak French.", pt: 'ele não sabe falar francês' },
            { en: "can't = cannot", pt: 'contração — uma palavra só' }
          ],
          note: "<b>can't</b> se escreve junto, com apóstrofo antes do t — não é \"can not\" " +
                'separado (isso existe, mas soa mais formal/enfático).'
        },
        {
          icon: '❓', name: 'Can — pergunta e resposta curta',
          leaves: [
            { en: 'Can you drive?', pt: 'Você sabe dirigir?' },
            { en: "Yes, I can. / No, I can't.", pt: 'resposta curta' },
            { en: 'What can you cook?', pt: 'O que você sabe cozinhar?' },
            { en: 'Who can speak Spanish?', pt: 'Quem sabe falar espanhol?' }
          ],
          note: 'Can vai pro início da pergunta, igual do/does — mas sem mudar forma ' +
                'nenhuma depois (nem do verbo principal, nem do "can" em si).'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 21" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🍽️',
        title: 'Working with words',
        goal: 'Falar de comida e bebida, e pedir num restaurante.',
        comp: 'Você lê um cardápio, entende os pratos e faz um pedido educado usando ' +
              "I'd like.",
        live: ['Food and drink vocabulary', "I'd like / I like", 'Ordering in a restaurant'],
        nextLive: 'Semana 2 · Language at work — can/can\'t.',
        bridge: 'Na aula vocês viram o vocabulário de comida e um diálogo de restaurante. ' +
                'Aqui o cardápio é outro, os pratos são outros — mas o pedido é igual.',
        ican: [
          'I can name common dishes, desserts and drinks.',
          "I can say I'd like something, politely.",
          'I can order a meal in a restaurant.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — food and drink', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o prato', tag: 'listening',
            items: FOOD.slice(0, 4).map(function (f) {
              var others = DF.shuffle(FOOD.filter(function (x) { return x.en !== f.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'bs6w1:radar:' + f.en,
                title: '🍽️ Que prato você ouviu?',
                tts: f.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: f.en,
                options: DF.shuffle([{ label: f.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: f.en + ' = ' + f.pt, feedbackTts: f.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: "Drill: I'd like", tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs6w1:drl:1', unit: 6, waSec: "I'd like",
                title: "🔁 Drill — o pedido educado", focus: 'prato',
                frame: "I'd like the ___, please.", ptHint: 'Eu gostaria d(o/a) ___, por favor.',
                slots: FOOD.slice(0, 5).map(function (f) { return f.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'bs6w1:drl:2', unit: 6, waSec: "I'd like",
                title: '🔁 Drill — e pra sobremesa', focus: 'sobremesa',
                frame: "I'd like the ___ for dessert.", ptHint: 'Eu gostaria d(o/a) ___ de sobremesa.',
                slots: DESSERTS.map(function (d) { return d.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'bs6w1:drl:3', unit: 6, waSec: "I'd like",
                title: '🔁 Drill — e pra beber', focus: 'bebida',
                frame: "And ___ to drink, please.", ptHint: 'E ___ pra beber, por favor.',
                slots: DRINKS.map(function (d) { return d.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'No restaurante', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs6w1:dlg:1',
                title: '🎧 Tom convida um cliente pra almoçar',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Waiter', en: 'Good afternoon. What would you like?' },
                  { who: 'Tom', en: "I'd like the grilled fish, please." },
                  { who: 'Aisha', en: "And I'd like the vegetable curry. Is it vegetarian?" },
                  { who: 'Waiter', en: 'Yes, it is. Anything to drink?' },
                  { who: 'Aisha', en: 'Sparkling water for me, please.' }
                ],
                question: 'O que a Aisha pergunta sobre o prato?',
                options: DF.shuffle([
                  { label: 'Se é vegetariano', correct: true },
                  { label: 'O preço' }, { label: 'Se é picante' }, { label: 'O tamanho' }
                ]),
                expl: '"Is it vegetarian?"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs6w1:dlg:2',
                title: '🎧 A sobremesa',
                lines: [
                  { who: 'Waiter', en: 'Would you like a dessert?' },
                  { who: 'Tom', en: "Yes, I'd like the chocolate cake." },
                  { who: 'Aisha', en: "Nothing for me, thanks. Just coffee." }
                ],
                question: 'O que a Aisha pede no final?',
                options: DF.shuffle([
                  { label: 'Só café, sem sobremesa', correct: true },
                  { label: 'Bolo de chocolate' }, { label: 'Torta de maçã' }, { label: 'Nada' }
                ]),
                expl: '"Nothing for me, thanks. Just coffee."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs6w1:dlg:3',
                title: '🎧 Outra mesa, outro pedido',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Waiter', en: 'What would you like?' },
                  { who: 'Hendrik', en: "I'd like the mushroom risotto, please." },
                  { who: 'Waiter', en: 'And to drink?' },
                  { who: 'Hendrik', en: "Iced tea, please." }
                ],
                question: 'O que o Hendrik pede pra beber?',
                options: DF.shuffle([
                  { label: 'Chá gelado', correct: true },
                  { label: 'Suco de laranja' }, { label: 'Café' }, { label: 'Água com gás' }
                ]),
                expl: '"Iced tea, please."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs6w1:bc:1', unit: 6, waSec: 'Backchain',
                title: '🧱 O pedido educado', ptHint: 'Eu gostaria do frango assado, por favor.',
                chain: ['chicken', 'roast chicken', 'the roast chicken',
                        "like the roast chicken", "I'd like the roast chicken, please."] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs6w1:c1', title: '💬 Pedido ou gosto pessoal?',
                main: '"I like fish." é...',
                options: DF.shuffle([{ label: 'gosto pessoal, não é um pedido', correct: true },
                  { label: 'um pedido no restaurante' }]),
                expl: '"I like" = gosto. Pra pedir, use "I\'d like".' },
              { ui: 'order', cat: 'fun', srsId: 'bs6w1:ord:1',
                title: '🧩 Monte o pedido:', answer: "I'd like the beef stew please",
                expl: "I'd like the beef stew, please." },
              { ui: 'order', cat: 'fun', srsId: 'bs6w1:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'Is it vegetarian',
                expl: 'Is it vegetarian?' },
              { ui: 'match', cat: 'fun', srsId: 'bs6w1:match:1', title: '🔗 Ligue prato à categoria:',
                pairs: [
                  ['grilled fish', 'main course'], ['chocolate cake', 'dessert'],
                  ['sparkling water', 'drink'], ['vegetable curry', 'main course (veg)']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Faça seu próprio pedido', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs6w1:build:1', unit: 6, waSec: 'Sua vez',
                title: '🗣️ Peça um prato, uma sobremesa e uma bebida',
                prompt: 'Use "I\'d like" três vezes seguidas: prato principal, sobremesa e bebida.',
                example: "I'd like the mushroom risotto, the fruit salad and coffee, please.",
                mustUse: ["I'd like"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'O pedido inteiro em diálogo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs6w1+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 O garçom e o cliente',
                prompt: 'Grave os dois papéis: o garçom pergunta "What would you like?" e ' +
                        'você responde com prato, pergunta se é vegetariano, e pede bebida.',
                example: "What would you like? — I'd like the lentil soup. Is it vegetarian? — Yes, it is. And sparkling water, please.",
                mustUse: ["I'd like"] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de pedidos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'd like the ___, please.", pool: 'product', focus: 'prato',
                  ptHint: 'Eu gostaria d(o/a) ___, por favor.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 22" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '💪',
        title: 'Language at work',
        goal: 'Falar do que você sabe e não sabe fazer.',
        comp: 'Você usa can/can\'t pra falar de habilidades, faz e responde perguntas ' +
              'com can, incluindo Wh-questions.',
        live: ["Can/can't for abilities", 'Question formation with can', 'Wh-questions with can'],
        nextLive: 'Semana 3 · Practically speaking — days & time, e Business communication — convidar, aceitar e recusar.',
        bridge: 'Na aula vocês praticaram can/can\'t com esportes, idiomas e instrumentos. ' +
                'Aqui as habilidades são outras — mas a estrutura é a mesma.',
        ican: [
          "I can say what I can and can't do.",
          'I can ask yes/no questions with can.',
          'I can answer with short answers.',
          'I can ask Wh-questions with can.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — can/can\'t', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique a habilidade', tag: 'listening',
            items: ABILITIES.slice(0, 4).map(function (a) {
              var others = DF.shuffle(ABILITIES.filter(function (x) { return x.en !== a.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'bs6w2:radar:' + a.en,
                title: '💪 Que habilidade você ouviu?',
                tts: 'can ' + a.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'can ' + a.en,
                options: DF.shuffle([{ label: a.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: 'can ' + a.en + ' = ' + a.pt, feedbackTts: 'can ' + a.en
              };
            })
          },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs6w2:tf:1', unit: 6, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I can cook."',
                ptHint: 'Eu sei cozinhar.',
                rounds: [
                  { base: 'I can cook.', cmd: 'Negative', answer: "I can't cook." },
                  { base: 'I can cook.', cmd: 'Question', answer: 'Can I cook?' },
                  { base: 'She can cook.', cmd: 'Negative', answer: "She can't cook." },
                  { base: 'She can cook.', cmd: 'Question', answer: 'Can she cook?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs6w2:tf:2', unit: 6, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "He can play the guitar."',
                ptHint: 'Ele sabe tocar violão.',
                rounds: [
                  { base: 'He can play the guitar.', cmd: 'Negative', answer: "He can't play the guitar." },
                  { base: 'He can play the guitar.', cmd: 'Question', answer: 'Can he play the guitar?' },
                  { base: 'Can he play the guitar?', cmd: 'Short answer — yes', answer: 'Yes, he can.' },
                  { base: 'Can he play the guitar?', cmd: 'Short answer — no', answer: "No, he can't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de habilidades', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs6w2:drl:1', unit: 6, waSec: 'Drill · can',
                title: '🔁 Drill — o que você sabe fazer', focus: 'habilidade',
                frame: 'I can ___.', ptHint: 'Eu sei ___.',
                slots: ABILITIES.map(function (a) { return a.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'bs6w2:drl:2', unit: 6, waSec: 'Drill · can',
                title: '🔁 Drill — perguntando', focus: 'pergunta',
                frame: 'Can you ___?', ptHint: 'Você sabe ___?',
                slots: ABILITIES.map(function (a) { return a.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Quem sabe fazer o quê', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs6w2:dlg:1',
                title: '🎧 Planejando o evento da empresa',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Camila', en: 'Can you play an instrument, Yuki?' },
                  { who: 'Yuki', en: 'Yes, I can. I can play the guitar.' },
                  { who: 'Camila', en: 'Great! Can Hendrik sing?' },
                  { who: 'Yuki', en: "No, he can't. But he can cook Italian food!" }
                ],
                question: 'O que o Hendrik sabe fazer?',
                options: DF.shuffle([
                  { label: 'Cozinhar comida italiana', correct: true },
                  { label: 'Cantar' }, { label: 'Tocar violão' }, { label: 'Nada' }
                ]),
                expl: '"He can cook Italian food!"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs6w2:dlg:2',
                title: '🎧 Perguntas Wh-',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Camila', en: 'What can you cook?' },
                  { who: 'Hendrik', en: 'I can cook pasta and risotto.' },
                  { who: 'Camila', en: 'Who can speak Mandarin?' },
                  { who: 'Yuki', en: 'I can! I can speak Mandarin and Japanese.' }
                ],
                question: 'Quem sabe falar mandarim?',
                options: DF.shuffle([
                  { label: 'Yuki', correct: true }, { label: 'Hendrik' },
                  { label: 'Camila' }, { label: 'Ninguém' }
                ]),
                expl: '"I can! I can speak Mandarin and Japanese."'
              }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'bs6w2:t1', title: '🔧 Complete:', main: 'She ___ (can/swim) very well.',
                answers: ['can swim'], expl: 'can + verbo na forma base, sem -s.', feedbackTts: 'can swim' },
              { ui: 'choice', cat: 'gra', srsId: 'bs6w2:c1', title: '🔧 Escolha a negativa correta:',
                main: 'He ___ speak French.',
                options: DF.shuffle([{ label: "can't", correct: true }, { label: "don't can" }, { label: "doesn't can" }]),
                expl: "can't = cannot." },
              { ui: 'order', cat: 'fun', srsId: 'bs6w2:ord:1', title: '🧩 Ponha em ordem:',
                answer: 'What can you cook', expl: 'What can you cook?' },
              { ui: 'order', cat: 'fun', srsId: 'bs6w2:ord:2', title: '🧩 Ponha em ordem:',
                answer: 'Can you speak Mandarin', expl: 'Can you speak Mandarin?' },
              { ui: 'match', cat: 'fun', srsId: 'bs6w2:match:1', title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Can you drive?', 'Yes, I can.'],
                  ['Can she swim?', "No, she can't."],
                  ['What can you cook?', 'I can cook pasta.'],
                  ['Who can play chess?', 'Tom can.']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale das suas habilidades', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs6w2:build:1', unit: 6, waSec: 'Sua vez',
                title: '🗣️ O que você sabe e não sabe fazer',
                prompt: 'Diga uma coisa que você sabe fazer e uma que você não sabe.',
                example: "I can speak Spanish, but I can't play the guitar.",
                mustUse: ['can'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de transformation drill', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs6w2+:tf1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Frase base: "They can travel a lot."',
                ptHint: 'Eles sabem viajar bastante.',
                rounds: [
                  { base: 'They can travel a lot.', cmd: 'Negative', answer: "They can't travel a lot." },
                  { base: 'They can travel a lot.', cmd: 'Question', answer: 'Can they travel a lot?' },
                  { base: 'He can travel a lot.', cmd: 'Negative', answer: "He can't travel a lot." },
                  { base: 'He can travel a lot.', cmd: 'Question', answer: 'Can he travel a lot?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de habilidades', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I can ___.', pool: 'verb', focus: 'habilidade', ptHint: 'Eu sei ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 23" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📅',
        title: 'Practically speaking',
        goal: 'Falar de dias e horários, e convidar, aceitar ou recusar um convite.',
        comp: 'Você diz que dia e que horas faz algo, lê um aviso da empresa, e conduz um ' +
              'convite do início ao fim — convida, aceita ou recusa, e combina outro dia/hora.',
        live: [
          'Days of the week — listen and repeat',
          'Telling the time — o\'clock, fifteen, thirty, forty-five',
          'Reading company notices — day and time',
          'Business communication: inviting, accepting and declining',
          'Key expressions: convite, aceitar, recusar, marcar outro dia/hora'
        ],
        bridge: 'Na aula vocês praticaram dias, horas e os dois avisos da empresa do livro. ' +
                'Aqui os avisos são outros e o convite é outro — mas "on + dia" e "at + hora" ' +
                'são as mesmas regras.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 6.',
        ican: [
          'I can say the days of the week.',
          'I can tell the time.',
          'I can read a company notice for day and time.',
          'I can invite someone to do something.',
          'I can accept or decline an invitation, and suggest another day or time.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — days, time & convites', tag: 'estudo', mindmap: true },

          {
            id: 'time', icon: '🕐', name: 'Ouça e escreva a hora', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'bs6w3:t:1', exact: true,
                title: '🕐 Ouça e escreva a hora:', tts: "It's nine o'clock.", ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: "nine o'clock",
                answers: ['9:00', '09:00'], expl: "9:00 = nine o'clock.", feedbackTts: "nine o'clock" },
              { ui: 'type', cat: 'spl', srsId: 'bs6w3:t:2', exact: true,
                title: '🕐 E esta:', tts: "It's two fifteen.", ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'two fifteen',
                answers: ['2:15'], expl: '2:15 = two fifteen.', feedbackTts: 'two fifteen' },
              { ui: 'type', cat: 'spl', srsId: 'bs6w3:t:3', exact: true,
                title: '🕐 Repare no "thirty":', tts: "It's six thirty.", ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'six thirty',
                answers: ['6:30'], expl: '6:30 = six thirty.', feedbackTts: 'six thirty' },
              { ui: 'type', cat: 'spl', srsId: 'bs6w3:t:4', exact: true,
                title: '🕐 A mais longa:', tts: "It's ten forty-five.", ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'ten forty-five',
                answers: ['10:45'], expl: '10:45 = ten forty-five.', feedbackTts: 'ten forty-five' }
            ]
          },

          {
            id: 'notices', icon: '📌', name: 'Avisos da empresa', tag: 'listening',
            items: [
              { ui: 'choice', cat: 'fun', srsId: 'bs6w3:notice:1',
                title: '📌 Leia o aviso:',
                main: '<b>Yoga class on Tuesday!</b><br>12:30 – 1:00, room 2B.<br>' +
                      'Ask Farah in reception for a mat.<br>All employees welcome.',
                question: 'Que dia é a aula de yoga?',
                options: DF.shuffle([{ label: 'Tuesday', correct: true },
                  { label: 'Monday' }, { label: 'Thursday' }, { label: 'Friday' }]),
                expl: '"Yoga class on Tuesday!"' },
              { ui: 'choice', cat: 'fun', srsId: 'bs6w3:notice:2',
                title: '📌 O mesmo aviso — a que horas termina?',
                main: '<b>Yoga class on Tuesday!</b><br>12:30 – 1:00, room 2B.<br>' +
                      'Ask Farah in reception for a mat.<br>All employees welcome.',
                question: 'A que horas a aula de yoga termina?',
                options: DF.shuffle([{ label: '1:00', correct: true },
                  { label: '12:30' }, { label: '2:00' }, { label: 'não diz' }]),
                expl: '"12:30 – 1:00" — termina à 1:00.' },
              { ui: 'choice', cat: 'fun', srsId: 'bs6w3:notice:3',
                title: '📌 Outro aviso:',
                main: '<b>Running club — meet on Thursday!</b><br>After work, at six o\'clock, ' +
                      'by the front door.<br>New runners welcome, any speed.',
                question: 'Que horas o grupo de corrida se encontra?',
                options: DF.shuffle([{ label: 'Seis horas', correct: true },
                  { label: 'Meio-dia' }, { label: 'Sete e meia' }, { label: 'não diz' }]),
                expl: '"After work, at six o\'clock."' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: convidar e responder', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs6w3:drl:invite', unit: 6, waSec: 'Drill · Inviting',
                title: '🔁 Drill 1 — o convite', focus: 'convite',
                frame: 'Would you like to ___?', ptHint: 'Você gostaria de ___?',
                slots: ['have lunch on Monday', 'play tennis after work', 'go for a coffee on Friday',
                        'have dinner on Thursday', 'go to the gym at six'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs6w3:drl:accept', unit: 6, waSec: 'Drill · Accepting',
                title: '🔁 Drill 2 — aceitando', focus: 'aceite',
                frame: '___', ptHint: '___',
                slots: ["Yes, I'd love to.", "That'd be great.", "Yes, please. That would be nice.",
                        "I'd love to. See you on Thursday."] },
              { ui: 'drill', cat: 'pro', srsId: 'bs6w3:drl:decline', unit: 6, waSec: 'Drill · Declining',
                title: '🔁 Drill 3 — recusando e marcando outro dia', focus: 'recusa',
                frame: "I'd love to, but ___.", ptHint: 'Eu adoraria, mas ___.',
                slots: ["I can't on Tuesday", "I'm busy at six", "I'm afraid I'm busy that day",
                        "I can't today — is Friday OK?"] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Convidando um colega', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs6w3:dlg:1',
                title: '🎧 Aisha convida o Tom pra almoçar',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Aisha', en: 'Would you like to have lunch on Monday?' },
                  { who: 'Tom', en: "I'd love to. What time?" },
                  { who: 'Aisha', en: 'Is twelve thirty OK?' },
                  { who: 'Tom', en: "That'd be great. See you at reception." }
                ],
                question: 'Que dia é o almoço?',
                options: DF.shuffle([{ label: 'Monday', correct: true },
                  { label: 'Tuesday' }, { label: 'Friday' }, { label: 'não diz' }]),
                expl: '"Would you like to have lunch on Monday?"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs6w3:dlg:2',
                title: '🎧 Yuki recusa e marca outro dia',
                lines: [
                  { who: 'Camila', en: 'Do you want to play tennis after work?' },
                  { who: 'Yuki', en: "I'd love to, but I'm busy at six." },
                  { who: 'Camila', en: 'What day can you play?' },
                  { who: 'Yuki', en: "Is Thursday OK?" },
                  { who: 'Camila', en: "Yes, that's great. See you on Thursday." }
                ],
                question: 'Por que a Yuki não pode jogar hoje?',
                options: DF.shuffle([{ label: 'Ela está ocupada às seis', correct: true },
                  { label: 'Ela não gosta de tênis' }, { label: 'Ela está de férias' },
                  { label: 'Não disse' }]),
                expl: '"I\'d love to, but I\'m busy at six."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs6w3:dlg:3',
                title: '🎧 Outro convite',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Hendrik', en: 'Would you like to go for a coffee after this?' },
                  { who: 'Beatriz', en: "I'm afraid I'm busy today. Is tomorrow OK?" },
                  { who: 'Hendrik', en: 'Yes, that works. What time?' },
                  { who: 'Beatriz', en: 'Is nine thirty OK?' }
                ],
                question: 'Quando eles vão tomar café?',
                options: DF.shuffle([{ label: 'Amanhã, às 9:30', correct: true },
                  { label: 'Hoje, às 9:30' }, { label: 'Amanhã, às 6:00' }, { label: 'Não vão' }]),
                expl: '"Is tomorrow OK? ... Is nine thirty OK?"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs6w3:bc:1', unit: 6, waSec: 'Backchain',
                title: '🧱 O convite', ptHint: 'Você gostaria de jantar na quinta-feira?',
                chain: ['dinner', 'have dinner', 'to have dinner', 'like to have dinner',
                        'Would you like to have dinner', 'Would you like to have dinner on Thursday?'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs6w3:bc:2', unit: 6, waSec: 'Backchain',
                title: '🧱 A recusa educada', ptHint: 'Eu adoraria, mas estou ocupado às seis.',
                chain: ['busy', 'busy at six', "I'm busy at six", "but I'm busy at six",
                        "I'd love to, but I'm busy at six."] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'bs6w3:ord:1',
                title: '🧩 Monte o convite:', answer: 'Would you like to have dinner on Tuesday',
                expl: 'Would you like to have dinner on Tuesday?' },
              { ui: 'order', cat: 'fun', srsId: 'bs6w3:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'What time can you meet',
                expl: 'What time can you meet?' },
              { ui: 'order', cat: 'fun', srsId: 'bs6w3:ord:3',
                title: '🧩 Monte a pergunta:', answer: 'Do you want to play tennis on Wednesday',
                expl: 'Do you want to play tennis on Wednesday?' },
              { ui: 'match', cat: 'fun', srsId: 'bs6w3:match:1', title: '🔗 Ligue o convite à resposta:',
                pairs: [
                  ['Would you like to have dinner?', "I'd love to, but I can't."],
                  ['Do you want to play tennis?', 'Yes, that would be great.'],
                  ["What day can you play?", 'On Thursday.'],
                  ['Is six thirty OK?', "I'm afraid I'm busy at six."]
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'bs6w3:c1', title: '📅 Preposição correta:',
                main: 'The meeting is ___ Monday, ___ three o\'clock.',
                options: DF.shuffle([{ label: 'on / at', correct: true },
                  { label: 'at / on' }, { label: 'in / on' }]),
                expl: 'on + dia (on Monday), at + hora (at three o\'clock).' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Convide alguém de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs6w3:build:1', unit: 6, waSec: 'Sua vez',
                title: '🗣️ Convide, aceite ou recuse, e marque um dia/hora',
                prompt: 'Grave um convite (dia e horário), depois aceite OU recuse e sugira ' +
                        'outro dia/hora.',
                example: "Would you like to have lunch on Friday? — I'd love to, but I'm busy " +
                         "on Friday. Is Monday OK?",
                mustUse: ['Would you like'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'O convite inteiro, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs6w3+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis do convite',
                prompt: 'Grave os dois lados: quem convida propõe dia/hora, quem recebe recusa ' +
                        'a primeira vez e os dois combinam outro dia/hora até fechar.',
                example: 'Would you like to play tennis on Tuesday? — I\'d love to, but I\'m busy ' +
                         'on Tuesday. What about Thursday? — Is six OK? — Yes, that\'d be great.',
                mustUse: ['Would you like'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de convites', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Would you like to ___?', pool: 'verb', focus: 'convite',
                  ptHint: 'Você gostaria de ___?', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 25" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: falar de comida, do que você sabe fazer, e convidar alguém ' +
              'pra jantar do início ao fim.',
        comp: 'Você conduz um convite completo — convida pra jantar, diz o que sabe cozinhar, ' +
              'aceita ou recusa e marca dia/hora — os 5 itens do speaking test.',
        live: [
          'Talking point: o jogo de tabuleiro do restaurante — três blocos (Comida / Habilidades / Convites)',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (convite pra jantar por telefone)'
        ],
        bridge: 'Na aula vocês jogaram o tabuleiro do restaurante e o professor aplicou o ' +
                'teste. Aqui você ensaia os <b>5 itens exatos do speaking test</b> — convidar, ' +
                'dizer o que sabe fazer, aceitar/recusar, marcar dia/hora e encerrar — numa ' +
                'ligação nova.',
        nextLive: 'Unit 7 — Technology. Começa na segunda-feira seguinte.',
        ican: [
          'I can talk about food, drink and abilities.',
          "I can invite someone and say what I can/can't do.",
          'I can accept or decline, and agree on a day and time.',
          'I can end the call politely.',
          'I can complete the Unit 6 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'O jogo do restaurante', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs6w4:g:1', unit: 6, waSec: 'Talking Point',
                title: '🎲 Sobre comida',
                prompt: 'Responda: o que você gostaria de pedir e de sobremesa?',
                example: "I'd like the grilled fish and the fruit salad for dessert.",
                mustUse: ["I'd like"] },
              { ui: 'build', cat: 'fun', srsId: 'bs6w4:g:2', unit: 6, waSec: 'Talking Point',
                title: '🎲 Sobre habilidades',
                prompt: 'Responda: o que você sabe e não sabe fazer?',
                example: "I can cook Italian food, but I can't play the guitar.",
                mustUse: ['can'] },
              { ui: 'build', cat: 'fun', srsId: 'bs6w4:g:3', unit: 6, waSec: 'Talking Point',
                title: '🎲 Sobre convites',
                prompt: 'Convide alguém pra fazer algo num dia específico.',
                example: 'Would you like to play tennis on Saturday?', mustUse: ['Would you like'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'bs6w4:pt:1',
                title: '🍽️ Complete a categoria:', main: 'Chocolate cake and apple pie are ___.',
                options: DF.shuffle([{ label: 'desserts', correct: true }, { label: 'drinks' }]),
                expl: 'dessert = sobremesa.' },
              { ui: 'choice', cat: 'voc', srsId: 'bs6w4:pt:2',
                title: '🥤 Complete a categoria:', main: 'Orange juice and iced tea are ___.',
                options: DF.shuffle([{ label: 'drinks', correct: true }, { label: 'main courses' }]),
                expl: 'drink = bebida.' },
              { ui: 'type', cat: 'gra', srsId: 'bs6w4:pt:3',
                title: '🔧 Complete com can:', main: 'She ___ (can/speak) three languages.',
                answers: ['can speak'], expl: 'can + verbo na forma base.', feedbackTts: 'can speak' },
              { ui: 'choice', cat: 'gra', srsId: 'bs6w4:pt:4',
                title: '🔧 Negativa correta:', main: 'He ___ cook Japanese food.',
                options: DF.shuffle([{ label: "can't", correct: true }, { label: "doesn't can" }]),
                expl: "can't = cannot." },
              { ui: 'choice', cat: 'gra', srsId: 'bs6w4:pt:5',
                title: '📅 Preposição correta:', main: 'The dinner is ___ Thursday, ___ seven o\'clock.',
                options: DF.shuffle([{ label: 'on / at', correct: true }, { label: 'at / on' }, { label: 'in / at' }]),
                expl: 'on + dia, at + hora.' },
              { ui: 'order', cat: 'fun', srsId: 'bs6w4:pt:6',
                title: '🧩 Ponse em ordem:', answer: 'Would you like to have dinner',
                expl: 'Would you like to have dinner?' },
              { ui: 'order', cat: 'fun', srsId: 'bs6w4:pt:7',
                title: '🧩 Ponha em ordem:', answer: 'What can you cook',
                expl: 'What can you cook?' },
              { ui: 'match', cat: 'fun', srsId: 'bs6w4:pt:8',
                title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Would you like to have dinner?', "I'd love to, but I'm busy."],
                  ['What day can you meet?', 'On Friday.'],
                  ['Can you cook?', "Yes, I can cook Italian food."],
                  ['Is seven thirty OK?', "Yes, that'd be great."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs6w4:st:1', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 1 de 5 — invite',
                prompt: 'Convide um colega pra jantar numa sexta-feira.',
                example: 'Would you like to have dinner on Friday?', mustUse: ['Would you like'] },
              { ui: 'build', cat: 'fun', srsId: 'bs6w4:st:2', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 2 de 5 — say what you can cook',
                prompt: 'Diga o que você sabe cozinhar.',
                example: 'I can cook Italian food.', mustUse: ['can'] },
              { ui: 'build', cat: 'fun', srsId: 'bs6w4:st:3', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 3 de 5 — accept or decline',
                prompt: 'Recuse a primeira data e sugira outra.',
                example: "I'd love to, but I'm busy on Friday. Is Saturday OK?", mustUse: ["I'd love to"] },
              { ui: 'build', cat: 'fun', srsId: 'bs6w4:st:4', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 4 de 5 — agree on a day and time',
                prompt: 'Confirme o dia e o horário.',
                example: "Saturday at seven thirty is great. See you then.", mustUse: ['Saturday'] },
              { ui: 'build', cat: 'fun', srsId: 'bs6w4:st:5', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 5 de 5 — end the call',
                prompt: 'Agradeça e encerre.',
                example: 'Great, thanks. See you on Saturday. Goodbye.', mustUse: ['thanks'],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'O convite inteiro numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs6w4+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Os 5 itens numa gravação só',
                prompt: 'Grave a ligação inteira: convide, diga o que sabe cozinhar, recuse e ' +
                        'sugira outra data, confirme e encerre.',
                example: 'Would you like to have dinner on Friday? I can cook Italian food. ' +
                         "I'd love to, but I'm busy on Friday. Is Saturday OK? Saturday at seven " +
                         'thirty is great. Thanks. Goodbye.',
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 6', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'd like the ___, please.", pool: 'product', focus: 'prato',
                  ptHint: 'Eu gostaria d(o/a) ___, por favor.', n: 3 },
                { frame: 'I can ___.', pool: 'verb', focus: 'habilidade', ptHint: 'Eu sei ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
