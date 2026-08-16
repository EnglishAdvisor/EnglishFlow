/* ENGLISH FLOW — week/plan-elementary-11.js
   BUSINESS ELEMENTARY · UNIT 11 "Travel"

   Numeração corrida do Felipe: Unit 11 = semanas 41–44.
     semana 41 = U11 W1 · Working with words (staying at a hotel)
     semana 42 = U11 W2 · Language at work (going to + infinitive of purpose)
     semana 43 = U11 W3 · Practically speaking (talking about money) +
                 Business communication (eating out)
     semana 44 = U11 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Hotel, dinheiro e comida
   são conhecimento geral, mas a reserva, os planos e os pedidos são
   autorais — universo Whiterock Consultancy, nunca Jenny Chiang/Metro Hotel do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const HOTELVOC = [
    { en: 'single room', pt: 'quarto de solteiro' },
    { en: 'double room', pt: 'quarto de casal' },
    { en: 'reservation', pt: 'reserva' },
    { en: 'vacancy', pt: 'vaga/disponibilidade' },
    { en: 'wake-up call', pt: 'ligação pra acordar' },
    { en: 'room service', pt: 'serviço de quarto' },
    { en: 'check-in', pt: 'registro de entrada' }
  ];
  const EATOUT = [
    'Are you ready to order?', 'Would you like a side dish?', "I'll have the...",
    'Could I have the bill, please?', 'How was your meal?'
  ];

  DF.PLAN.elementary[11] = {
    unit: 11,
    title: 'Travel',
    subtitle: 'Reservar hotel, planejar a viagem, e comer fora',
    icon: '🧳',

    mindmap: {
      center: 'Travel',
      sub: 'Reservar hotel, falar de planos, dinheiro e restaurante',
      branches: [
        {
          icon: '🏨', name: 'Staying at a hotel',
          leaves: HOTELVOC.map(function (h) { return { en: h.en, pt: h.pt }; }),
          note: '"Does that include breakfast?" é a pergunta mais útil pra fechar reserva ' +
                'sem surpresa na conta.'
        },
        {
          icon: '📅', name: 'Going to + infinitive of purpose',
          leaves: [
            { en: "I'm going to visit customers.", pt: 'plano futuro' },
            { en: "We're going to Paris to meet clients.", pt: 'to + verbo = "pra fazer algo"' },
            { en: "Are you going to fly there?", pt: 'pergunta' }
          ],
          note: '"going to" = plano já decidido. "to + verbo" no final explica o motivo — ' +
                '"to meet clients" = "pra encontrar clientes".'
        },
        {
          icon: '💰', name: 'Talking about money',
          leaves: [
            { en: 'How much is that?', pt: 'quanto custa' },
            { en: "What's the exchange rate?", pt: 'câmbio' },
            { en: 'Can I pay by credit card?', pt: 'forma de pagamento' },
            { en: 'Keep the change.', pt: 'fica com o troco' }
          ],
          note: '"bureau de change" (ou "currency exchange") é onde você troca dinheiro no ' +
                'aeroporto.'
        },
        {
          icon: '🍽️', name: 'Eating out',
          leaves: EATOUT.map(function (e) { return { en: e, pt: '' }; }),
          note: '"I\'ll have the..." é o jeito padrão de pedir num restaurante — não "I want".'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 41" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🏨',
        title: 'Working with words',
        goal: 'Reservar um quarto de hotel e pedir informações.',
        comp: 'Você reserva um quarto por telefone, confirma detalhes (preço, café da ' +
              'manhã, cartão) e pede informações sobre os serviços do hotel.',
        live: ['Staying at a hotel', 'Making a reservation', 'Hotel services'],
        nextLive: 'Semana 2 · Language at work — going to + infinitive of purpose.',
        bridge: 'Na aula vocês praticaram reserva de hotel com o exemplo do livro. Aqui o ' +
                'hotel é outro — mas "Do you have any vacancies?" é a mesma pergunta.',
        ican: [
          'I can book a hotel room.',
          'I can ask if breakfast is included.',
          'I can ask about hotel services.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — staying at a hotel', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o item', tag: 'listening',
            items: HOTELVOC.slice(0, 4).map(function (h) {
              var others = DF.shuffle(HOTELVOC.filter(function (o) { return o.en !== h.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be11w1:radar:' + h.en,
                title: '🏨 O que você ouviu?',
                tts: h.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: h.en,
                options: DF.shuffle([{ label: h.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: h.en + ' = ' + h.pt, feedbackTts: h.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: reservando o quarto', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be11w1:drl:1', unit: 11, waSec: 'Drill · Booking',
                title: '🔁 Drill 1 — a reserva', focus: 'reserva',
                frame: "I'd like to book a ___.", ptHint: 'Eu gostaria de reservar um(a) ___.',
                slots: ['single room', 'double room', 'room for two nights', 'room with breakfast'] },
              { ui: 'drill', cat: 'pro', srsId: 'be11w1:drl:2', unit: 11, waSec: 'Drill · Asking',
                title: '🔁 Drill 2 — perguntando', focus: 'pergunta',
                frame: 'Do you have any ___?', ptHint: 'Vocês têm ___?',
                slots: ['vacancies', 'rooms with a view', 'rooms for tonight'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Reservando por telefone', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be11w1:dlg:1',
                title: '🎧 Priya reserva um quarto',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Priya', en: "I'd like to book a double room for tonight, please." },
                  { who: 'Receptionist', en: 'Certainly. Does that include breakfast?' },
                  { who: 'Priya', en: "Yes, please. What time is check-in?" },
                  { who: 'Receptionist', en: "You can check in from two o'clock." }
                ],
                question: 'A partir de que horas dá pra fazer check-in?',
                options: DF.shuffle([
                  { label: 'A partir das duas', correct: true },
                  { label: 'A partir das três' }, { label: 'A qualquer hora' }, { label: 'Não disse' }
                ]),
                expl: "\"You can check in from two o'clock.\""
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be11w1:dlg:2',
                title: '🎧 Pedindo o wake-up call',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'Can I have a wake-up call at six a.m., please?' },
                  { who: 'Receptionist', en: 'Of course. Room number, please?' },
                  { who: 'Kenji', en: "Room 305. Also, is there room service?" },
                  { who: 'Receptionist', en: 'Yes, 24 hours a day.' }
                ],
                question: 'A que horas o Kenji quer a ligação de despertar?',
                options: DF.shuffle([
                  { label: 'Seis da manhã', correct: true }, { label: 'Sete da manhã' },
                  { label: 'Meia-noite' }, { label: 'Não disse' }
                ]),
                expl: '"Can I have a wake-up call at six a.m., please?"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be11w1:bc:1', unit: 11, waSec: 'Backchain',
                title: '🧱 A reserva', ptHint: 'Eu gostaria de reservar um quarto de casal pra hoje à noite.',
                chain: ['tonight', 'for tonight', 'a double room for tonight',
                        'book a double room for tonight',
                        "I'd like to book a double room for tonight."] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be11w1:c1', title: '🏨 Qual palavra?',
                main: 'A room for one person.',
                options: DF.shuffle([{ label: 'single room', correct: true }, { label: 'double room' }]),
                expl: 'single room = quarto de solteiro.' },
              { ui: 'order', cat: 'fun', srsId: 'be11w1:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Does that include breakfast',
                expl: 'Does that include breakfast?' },
              { ui: 'order', cat: 'fun', srsId: 'be11w1:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'Do you have any vacancies',
                expl: 'Do you have any vacancies?' },
              { ui: 'match', cat: 'fun', srsId: 'be11w1:match:1', title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Do you have any vacancies?', 'Yes, we have a double room.'],
                  ['Does that include breakfast?', "Yes, it's included."],
                  ['What time is check-in?', "From two o'clock."]
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Reserve um quarto de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be11w1:build:1', unit: 11, waSec: 'Sua vez',
                title: '🗣️ Reserve um quarto e pergunte sobre o café da manhã',
                prompt: 'Use "I\'d like to book" e "Does that include...?"',
                example: "I'd like to book a single room for two nights. Does that include breakfast?",
                mustUse: ["I'd like to book"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A reserva completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be11w1+:b1', unit: 11, waSec: 'Praticar mais',
                title: '🔥 Reserve, confirme o café da manhã e pergunte o check-in',
                prompt: 'Grave a reserva inteira numa gravação só.',
                example: "I'd like to book a double room for tonight. Does that include " +
                         "breakfast? What time is check-in?",
                mustUse: ["I'd like to book"] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de hotel', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'd like to book a ___.",
                  pool: ['single room', 'double room', 'room for two nights', 'room with breakfast'],
                  focus: 'reserva', ptHint: 'Eu gostaria de reservar um(a) ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 42" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '📅',
        title: 'Language at work',
        goal: 'Falar dos seus planos de viagem — going to + infinitive of purpose.',
        comp: 'Você usa "going to" pra dizer o que já decidiu fazer, e "to + verbo" pra ' +
              'explicar o motivo de uma viagem ou reunião.',
        live: ['Going to for plans', 'Infinitive of purpose (to + verb)', 'Talking about a business trip'],
        nextLive: 'Semana 3 · Practically speaking — talking about money, e Business ' +
                   'communication — eating out.',
        bridge: 'Na aula vocês praticaram going to com o roteiro de viagem do livro. Aqui a ' +
                'viagem é outra — mas "going to" e "to + verbo" não mudam.',
        ican: [
          'I can talk about my plans using "going to".',
          'I can make negative sentences and questions with "going to".',
          'I can explain why using "to + verb" (infinitive of purpose).'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — going to & purpose', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be11w2:tf:1', unit: 11, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I am going to visit Paris."',
                ptHint: 'Eu vou visitar Paris.',
                rounds: [
                  { base: 'I am going to visit Paris.', cmd: 'Negative', answer: "I'm not going to visit Paris." },
                  { base: 'I am going to visit Paris.', cmd: 'Question', answer: 'Are you going to visit Paris?' },
                  { base: 'She is going to fly tomorrow.', cmd: 'Negative', answer: "She isn't going to fly tomorrow." },
                  { base: 'She is going to fly tomorrow.', cmd: 'Question', answer: 'Is she going to fly tomorrow?' }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: o motivo da viagem', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be11w2:drl:1', unit: 11, waSec: 'Drill · Purpose',
                title: '🔁 Drill — pra que você vai', focus: 'propósito',
                frame: "I'm going to London to ___.", ptHint: 'Eu vou pra Londres pra ___.',
                slots: ['meet clients', 'visit suppliers', 'attend a conference', 'sign the contract'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Planejando a viagem', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be11w2:dlg:1',
                title: '🎧 Elena conta os planos do Noah',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Priya', en: 'Is Noah going on a business trip?' },
                  { who: 'Elena', en: "Yes, he's going to Berlin to meet new suppliers." },
                  { who: 'Priya', en: 'When is he leaving?' },
                  { who: 'Elena', en: "He's going to fly on Monday morning." }
                ],
                question: 'Por que o Noah vai pra Berlim?',
                options: DF.shuffle([
                  { label: 'Pra encontrar novos fornecedores', correct: true },
                  { label: 'Pra visitar um cliente' }, { label: 'De férias' }, { label: 'Não disse' }
                ]),
                expl: '"He\'s going to Berlin to meet new suppliers."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be11w2:dlg:2',
                title: '🎧 Confirmando o roteiro',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'Are you going to visit the factory this week?' },
                  { who: 'Sara', en: "Yes, I'm going there to check the new production line." },
                  { who: 'Kenji', en: "Are you going to stay overnight?" },
                  { who: 'Sara', en: "No, I'm going to come back the same day." }
                ],
                question: 'A Sara vai passar a noite fora?',
                options: DF.shuffle([
                  { label: 'Não, volta no mesmo dia', correct: true },
                  { label: 'Sim' }, { label: 'Não disse' }, { label: 'Fica uma semana' }
                ]),
                expl: "\"No, I'm going to come back the same day.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be11w2:bc:1', unit: 11, waSec: 'Backchain',
                title: '🧱 O motivo da viagem', ptHint: 'Eu vou pra Berlim pra encontrar novos fornecedores.',
                chain: ['suppliers', 'new suppliers', 'meet new suppliers',
                        "going to Berlin to meet new suppliers",
                        "I'm going to Berlin to meet new suppliers."] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be11w2:t1', title: '🔧 Complete:',
                main: 'We ___ (going to/visit) the client tomorrow.', answers: ['are going to visit'],
                expl: 'we → are going to visit.' },
              { ui: 'choice', cat: 'gra', srsId: 'be11w2:c1', title: '🔧 Negativa correta:',
                main: 'She ___ going to fly today.',
                options: DF.shuffle([{ label: "isn't", correct: true }, { label: "doesn't" }]),
                expl: 'she → isn\'t going to.' },
              { ui: 'order', cat: 'fun', srsId: 'be11w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'Are you going to fly there',
                expl: 'Are you going to fly there?' },
              { ui: 'order', cat: 'fun', srsId: 'be11w2:ord:2',
                title: '🧩 Monte a frase (propósito):', answer: 'I am going to Rome to meet clients',
                expl: "I'm going to Rome to meet clients." },
              { ui: 'match', cat: 'fun', srsId: 'be11w2:match:1', title: '🔗 Ligue o plano ao motivo:',
                pairs: [
                  ["I'm going to Tokyo", 'to visit the factory'],
                  ["I'm going to the airport", 'to catch my flight'],
                  ["I'm going to the meeting", 'to present the plan']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale dos seus planos', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be11w2:build:1', unit: 11, waSec: 'Sua vez',
                title: '🗣️ Diga um plano seu e o motivo',
                prompt: 'Use "going to" + "to + verbo".',
                example: "I'm going to São Paulo to meet a client.", mustUse: ['going to'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de going to', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be11w2+:tf1', unit: 11, waSec: 'Praticar mais',
                title: '🔥 Frase base: "They are going to sign the contract."',
                ptHint: 'Eles vão assinar o contrato.',
                rounds: [
                  { base: 'They are going to sign the contract.', cmd: 'Negative', answer: "They aren't going to sign the contract." },
                  { base: 'They are going to sign the contract.', cmd: 'Question', answer: 'Are they going to sign the contract?' },
                  { base: 'He is going to call the client.', cmd: 'Negative', answer: "He isn't going to call the client." },
                  { base: 'He is going to call the client.', cmd: 'Question', answer: 'Is he going to call the client?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de planos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm going to London to ___.",
                  pool: ['meet clients', 'visit suppliers', 'attend a conference', 'sign the contract'],
                  focus: 'propósito', ptHint: 'Eu vou pra Londres pra ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 43" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '💰',
        title: 'Practically speaking',
        goal: 'Falar de dinheiro em viagem, e pedir comida num restaurante.',
        comp: 'Você troca dinheiro, pergunta preço e câmbio, e conduz um pedido de ' +
              'restaurante do início ao fim.',
        live: [
          "Talking about money",
          "Business communication: eating out",
          'Key expressions: ordering, asking for the bill'
        ],
        bridge: 'Na aula vocês praticaram dinheiro e o restaurante do aeroporto do livro. ' +
                'Aqui o restaurante é outro — mas "Are you ready to order?" é a mesma pergunta.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 11.',
        ican: [
          'I can ask about prices and exchange rates.',
          'I can pay and ask for change.',
          'I can order food in a restaurant.',
          'I can ask for the bill.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — money & eating out', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: dinheiro e pedido', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be11w3:drl:money', unit: 11, waSec: 'Drill · Money',
                title: '🔁 Drill 1 — falando de dinheiro', focus: 'dinheiro',
                frame: '___', ptHint: '___',
                slots: ['How much is that?', "What's the exchange rate?",
                        'Can I pay by credit card?', 'Keep the change.'] },
              { ui: 'drill', cat: 'pro', srsId: 'be11w3:drl:order', unit: 11, waSec: 'Drill · Ordering',
                title: '🔁 Drill 2 — pedindo comida', focus: 'pedido',
                frame: "I'll have the ___.", ptHint: 'Eu vou querer o(a) ___.',
                slots: ['chicken salad', 'steak and fries', 'fish pie', 'vegetable risotto'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'No restaurante', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be11w3:dlg:1',
                title: '🎧 Priya pede o almoço',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Waiter', en: 'Are you ready to order?' },
                  { who: 'Priya', en: "Yes, I'll have the chicken salad, please." },
                  { who: 'Waiter', en: 'Would you like a side dish?' },
                  { who: 'Priya', en: 'No, thanks. Just the salad.' }
                ],
                question: 'A Priya quer acompanhamento?',
                options: DF.shuffle([
                  { label: 'Não', correct: true }, { label: 'Sim' },
                  { label: 'Não disse' }, { label: 'Pede dois' }
                ]),
                expl: '"No, thanks. Just the salad."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be11w3:dlg:2',
                title: '🎧 Trocando dinheiro',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: "What's the exchange rate today?" },
                  { who: 'Cashier', en: 'One dollar is zero point ninety euros.' },
                  { who: 'Kenji', en: "Can I pay by credit card?" },
                  { who: 'Cashier', en: "I'm sorry, cash only." }
                ],
                question: 'O Kenji pode pagar com cartão de crédito?',
                options: DF.shuffle([
                  { label: 'Não, só dinheiro', correct: true }, { label: 'Sim' },
                  { label: 'Não disse' }, { label: 'Só com cheque' }
                ]),
                expl: '"I\'m sorry, cash only."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be11w3:bc:1', unit: 11, waSec: 'Backchain',
                title: '🧱 Pedindo a conta', ptHint: 'Eu poderia ter a conta, por favor?',
                chain: ['please', 'the bill, please', 'have the bill, please',
                        'Could I have the bill, please?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be11w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Are you ready to order',
                expl: 'Are you ready to order?' },
              { ui: 'order', cat: 'fun', srsId: 'be11w3:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'Could I have the bill please',
                expl: 'Could I have the bill, please?' },
              { ui: 'match', cat: 'fun', srsId: 'be11w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Are you ready to order?', "Yes, I'll have the fish pie."],
                  ['Would you like a dessert?', "No, thanks. Just the bill."],
                  ["What's the exchange rate?", "One dollar is 0.9 euros."]
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Faça um pedido de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be11w3:build:1', unit: 11, waSec: 'Sua vez',
                title: '🗣️ Peça uma refeição e a conta',
                prompt: 'Use "I\'ll have..." e "Could I have the bill?"',
                example: "I'll have the steak and fries, please. Could I have the bill, please?",
                mustUse: ["I'll have"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'O jantar inteiro, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be11w3+:b1', unit: 11, waSec: 'Praticar mais',
                title: '🔥 Peça, recuse acompanhamento, e feche a conta',
                prompt: 'Grave o pedido inteiro numa gravação só.',
                example: "I'll have the chicken salad, please. No side dish, thanks. Could I " +
                         "have the bill, please?",
                mustUse: ["I'll have"] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de restaurante', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'll have the ___.",
                  pool: ['chicken salad', 'steak and fries', 'fish pie', 'vegetable risotto'],
                  focus: 'pedido', ptHint: 'Eu vou querer o(a) ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 44" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: reservar um hotel do início ao fim, com detalhes e preço.',
        comp: 'Você reserva um quarto, confirma preço e o que está incluso, e dá seus ' +
              'dados de pagamento — os itens do speaking test.',
        live: [
          'Talking point: more efficient business trips',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (reservar um quarto de hotel)'
        ],
        bridge: 'Na aula vocês discutiram viagens de negócio mais eficientes e o professor ' +
                'aplicou o teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — ' +
                'reservar, confirmar preço, e dar seus dados.',
        nextLive: 'Próxima unidade. Começa na segunda-feira seguinte.',
        ican: [
          'I can book a hotel room and ask about price.',
          'I can ask what is included.',
          "I can give my name and payment details.",
          'I can confirm a reservation.',
          'I can complete the Unit 11 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'Viagem mais eficiente', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be11w4:g:1', unit: 11, waSec: 'Talking Point',
                title: '🎲 Diga um plano de viagem e o motivo',
                prompt: 'Use "going to" + "to + verbo".',
                example: "I'm going to Lisbon to meet a new customer.", mustUse: ['going to'] },
              { ui: 'build', cat: 'fun', srsId: 'be11w4:g:2', unit: 11, waSec: 'Talking Point',
                title: '🎲 Reserve um quarto',
                prompt: 'Peça pra reservar um quarto e pergunte o preço.',
                example: "I'd like to book a room. How much is that?", mustUse: ["I'd like to book"] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be11w4:pt:1', title: '🏨 Qual palavra?',
                main: 'A room for two people.',
                options: DF.shuffle([{ label: 'double room', correct: true }, { label: 'single room' }]),
                expl: 'double room = quarto de casal.' },
              { ui: 'choice', cat: 'gra', srsId: 'be11w4:pt:2', title: '🔧 Going to correto:',
                main: 'We ___ (going to/visit) the factory tomorrow.',
                options: DF.shuffle([{ label: 'are going to visit', correct: true }, { label: 'going to visit' }]),
                expl: 'We → are going to visit.' },
              { ui: 'choice', cat: 'gra', srsId: 'be11w4:pt:3', title: '🔧 Propósito:',
                main: "I'm going to Rome ___ meet clients.",
                options: DF.shuffle([{ label: 'to', correct: true }, { label: 'for' }]),
                expl: 'to + verbo = infinitivo de propósito.' },
              { ui: 'order', cat: 'fun', srsId: 'be11w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'Do you have any vacancies',
                expl: 'Do you have any vacancies?' },
              { ui: 'match', cat: 'fun', srsId: 'be11w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Does that include breakfast?', 'Yes, it does.'],
                  ['Are you ready to order?', "Yes, I'll have the steak."],
                  ['Could I have the bill?', 'Of course.']
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be11w4:st:1', unit: 11, waSec: 'Speaking Test',
                title: '🏆 Item 1 — book a room',
                prompt: 'Reserve um quarto de hotel por duas noites.',
                example: "I'd like to book a double room for two nights.", mustUse: ["I'd like to book"] },
              { ui: 'build', cat: 'fun', srsId: 'be11w4:st:2', unit: 11, waSec: 'Speaking Test',
                title: '🏆 Item 2 — ask about price',
                prompt: 'Pergunte o preço e se o café da manhã está incluso.',
                example: 'How much is that? Does it include breakfast?', mustUse: ['How much'] },
              { ui: 'build', cat: 'fun', srsId: 'be11w4:st:3', unit: 11, waSec: 'Speaking Test',
                title: '🏆 Item 3 — give payment details',
                prompt: 'Diga que vai pagar com cartão de crédito.',
                example: "I'll pay by credit card.", mustUse: ['credit card'] },
              { ui: 'build', cat: 'fun', srsId: 'be11w4:st:4', unit: 11, waSec: 'Speaking Test',
                title: '🏆 Item 4 — confirm the reservation',
                prompt: 'Confirme a reserva.',
                example: "That's great, thank you. See you then.", mustUse: ['thank you'],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A reserva inteira numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be11w4+:b1', unit: 11, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave tudo: reserve, pergunte o preço, dê os dados de pagamento e confirme.',
                example: "I'd like to book a double room for two nights. How much is that? " +
                         "Does it include breakfast? I'll pay by credit card. Thank you.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 11', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'd like to book a ___.",
                  pool: ['single room', 'double room', 'room for two nights', 'room with breakfast'],
                  focus: 'reserva', ptHint: 'Eu gostaria de reservar um(a) ___.', n: 3 },
                { frame: "I'm going to London to ___.",
                  pool: ['meet clients', 'visit suppliers', 'attend a conference', 'sign the contract'],
                  focus: 'propósito', ptHint: 'Eu vou pra Londres pra ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
