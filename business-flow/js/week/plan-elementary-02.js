/* ENGLISH FLOW — week/plan-elementary-02.js
   BUSINESS ELEMENTARY · UNIT 2 "Products & services"

   Numeração corrida do Felipe: Unit 2 = semanas 5–8.
     semana 5 = U2 W1 · Working with words (company types & business verbs)
     semana 6 = U2 W2 · Language at work (present simple — 3rd person, do/does)
     semana 7 = U2 W3 · Practically speaking (numbers) + Business communication
                (making phone calls)
     semana 8 = U2 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Tipos de empresa e verbos
   de negócio são conhecimento geral, mas as empresas, produtos e ligações
   telefônicas são autorais — universo Marcom Global, nunca CJ/Kikkoman/
   Netflix do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const BIZTYPE = [
    { en: 'pharmaceuticals', pt: 'farmacêutica' },
    { en: 'real estate', pt: 'imobiliária' },
    { en: 'electronics', pt: 'eletrônicos' },
    { en: 'recruitment', pt: 'recrutamento' },
    { en: 'hotel', pt: 'hotelaria' },
    { en: 'software', pt: 'software' },
    { en: 'financial services', pt: 'serviços financeiros' },
    { en: 'automobile', pt: 'automobilística' }
  ];
  const BIZVERB = [
    { en: 'employ', pt: 'empregar', def: 'to give somebody a job' },
    { en: 'export', pt: 'exportar', def: 'to sell and send goods to another country' },
    { en: 'buy', pt: 'comprar', def: 'to get something by paying money for it' },
    { en: 'produce', pt: 'produzir', def: 'to make things to be sold' },
    { en: 'sell', pt: 'vender', def: 'to give something to somebody for money' },
    { en: 'provide', pt: 'fornecer', def: 'to offer goods or a service' },
    { en: 'develop', pt: 'desenvolver', def: 'to produce a new product and make it successful' }
  ];

  DF.PLAN.elementary[2] = {
    unit: 2,
    title: 'Products & services',
    subtitle: 'O que a empresa faz e vende',
    icon: '📦',

    mindmap: {
      center: 'Products & services',
      sub: 'Falar do que a empresa faz, produz e vende',
      branches: [
        {
          icon: '🏭', name: 'Company types',
          leaves: BIZTYPE.map(function (x) { return { en: x.en, pt: x.pt }; }),
          note: '"a ___ company": a pharmaceuticals company, an electronics company.'
        },
        {
          icon: '💼', name: 'Business verbs',
          leaves: BIZVERB.map(function (v) { return { en: v.en, pt: v.pt }; }),
          note: 'employ, export, buy, produce, sell, provide, develop — o miolo de ' +
                'qualquer descrição de empresa.'
        },
        {
          icon: '🔤', name: 'Present simple — 3rd person',
          leaves: [
            { en: 'She works for Aurora Systems.', pt: 'verbo + s' },
            { en: 'The company produces electronics.', pt: 'verbo terminado em -s/-ss/-sh/-ch/-x → +es' },
            { en: 'It has a factory in Poland. (have → has)', pt: 'exceção' },
            { en: 'He doesn\'t sell software.', pt: 'negativa: does not / doesn\'t' },
            { en: 'Does it export to Europe?', pt: 'pergunta: Does + sujeito + verbo base' }
          ],
          note: 'Só na 3ª pessoa (he/she/it) o verbo ganha -s. Nas perguntas e negativas, ' +
                'quem carrega o -s é o do/does — o verbo principal volta pra forma base.'
        },
        {
          icon: '📞', name: 'Making phone calls',
          leaves: [
            { en: 'Hello, [company]. How can I help you?', pt: 'atender' },
            { en: "Is [name] there, please?", pt: 'pedir pra falar com alguém' },
            { en: "I'll put you through.", pt: 'transferir a ligação' },
            { en: "I'm calling about...", pt: 'dar o motivo da ligação' },
            { en: 'Thanks for your help. / You\'re welcome.', pt: 'agradecer e responder' }
          ],
          note: '"put somebody through" = transferir a ligação — expressão fixa, não traduz ' +
                'palavra por palavra.'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 5" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '📦',
        title: 'Working with words',
        goal: 'Falar do tipo de empresa e do que ela faz.',
        comp: 'Você diz o tipo de negócio de uma empresa e usa os verbos certos pra dizer ' +
              'o que ela produz, vende ou fornece.',
        live: ['Company types', 'Business verbs (employ, export, sell, provide...)', 'Product or service?'],
        nextLive: 'Semana 2 · Language at work — present simple (3rd person, do/does).',
        bridge: 'Na aula vocês viram tipos de empresa e verbos de negócio com exemplos do ' +
                'livro. Aqui as empresas são outras — mas os verbos são os mesmos.',
        ican: [
          'I can name common company types.',
          'I can use business verbs like employ, export, sell and provide.',
          'I can say if a company offers a product or a service.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — company types & verbs', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o tipo de empresa', tag: 'listening',
            items: BIZTYPE.slice(0, 4).map(function (x) {
              var others = DF.shuffle(BIZTYPE.filter(function (o) { return o.en !== x.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be2w1:radar:' + x.en,
                title: '🏭 Que tipo de empresa você ouviu?',
                tts: x.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: x.en,
                options: DF.shuffle([{ label: x.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: x.en + ' = ' + x.pt, feedbackTts: x.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: o que a empresa faz', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be2w1:drl:1', unit: 2, waSec: 'Drill · Company type',
                title: '🔁 Drill 1 — tipo de empresa', focus: 'tipo',
                frame: "It's a ___ company.", ptHint: 'É uma empresa de ___.',
                slots: BIZTYPE.map(function (x) { return x.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'be2w1:drl:2', unit: 2, waSec: 'Drill · Verbs',
                title: '🔁 Drill 2 — o verbo certo', focus: 'verbo',
                frame: 'We ___ products worldwide.', ptHint: 'Nós ___ produtos pro mundo todo.',
                slots: BIZVERB.map(function (v) { return v.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Que empresa é essa?', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be2w1:dlg:1',
                title: '🎧 Sara fala da Aurora Systems',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Noah', en: 'What type of company is Aurora Systems?' },
                  { who: 'Sara', en: "It's an electronics company. We produce computer parts." },
                  { who: 'Noah', en: 'Do you export them?' },
                  { who: 'Sara', en: 'Yes, we do. We export to Asia and Europe.' }
                ],
                question: 'O que a Aurora Systems produz?',
                options: DF.shuffle([
                  { label: 'Peças de computador', correct: true },
                  { label: 'Software' }, { label: 'Remédios' }, { label: 'Carros' }
                ]),
                expl: '"We produce computer parts."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be2w1:dlg:2',
                title: '🎧 Produto ou serviço?',
                lines: [
                  { who: 'Priya', en: 'Does your company sell a product or provide a service?' },
                  { who: 'Marco', en: 'Both. We develop software and we also provide training.' },
                  { who: 'Priya', en: 'Interesting. Do you employ many people?' },
                  { who: 'Marco', en: 'Yes, about 800 people.' }
                ],
                question: 'O que a empresa do Marco faz, além de desenvolver software?',
                options: DF.shuffle([
                  { label: 'Fornece treinamento', correct: true },
                  { label: 'Vende carros' }, { label: 'Exporta remédios' }, { label: 'Nada mais' }
                ]),
                expl: '"We develop software and we also provide training."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be2w1:dlg:3',
                title: '🎧 A rede de hotéis',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Elena', en: 'What does Delta Foods produce?' },
                  { who: 'Kenji', en: 'They produce meals for restaurants and hotels.' },
                  { who: 'Elena', en: 'Do they provide delivery too?' },
                  { who: 'Kenji', en: 'Yes, they do. They deliver every morning.' }
                ],
                question: 'A Delta Foods também fornece entrega?',
                options: DF.shuffle([
                  { label: 'Sim, toda manhã', correct: true },
                  { label: 'Não' }, { label: 'Só às sextas' }, { label: 'Não disse' }
                ]),
                expl: '"Yes, they do. They deliver every morning."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be2w1:bc:1', unit: 2, waSec: 'Backchain',
                title: '🧱 O que a empresa faz', ptHint: 'Nós desenvolvemos software e fornecemos treinamento.',
                chain: ['training', 'provide training', 'and provide training',
                        'develop software and provide training',
                        'We develop software and we provide training.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be2w1:c1', title: '💼 Qual verbo?',
                main: 'To sell and send goods to another country.',
                options: DF.shuffle([{ label: 'export', correct: true }, { label: 'buy' }, { label: 'employ' }]),
                expl: 'export = exportar.' },
              { ui: 'type', cat: 'voc', srsId: 'be2w1:t1', title: '🔧 Complete a palavra:',
                main: 'ph_ _ m_ c_ _ t_c_ _s (empresa que faz remédios)', answers: ['pharmaceuticals'],
                expl: 'pharmaceuticals = farmacêutica.' },
              { ui: 'order', cat: 'fun', srsId: 'be2w1:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Does your company export products',
                expl: 'Does your company export products?' },
              { ui: 'match', cat: 'fun', srsId: 'be2w1:match:1', title: '🔗 Ligue o verbo à definição:',
                pairs: BIZVERB.slice(0, 4).map(function (v) { return [v.en, v.def]; }) }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale da sua empresa', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be2w1:build:1', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Diga o tipo de empresa e o que ela faz',
                prompt: 'Use "It\'s a ___ company" e um verbo de negócio.',
                example: "It's a software company. We develop apps.", mustUse: ["It's a"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A descrição completa da empresa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be2w1+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Tipo, produto e exportação numa gravação só',
                prompt: 'Grave: tipo de empresa, o que produz/vende, e se exporta.',
                example: "It's an automobile company. We produce cars and we export to South America.",
                mustUse: ["It's a"] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de tipos de empresa', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "It's a ___ company.", pool: BIZTYPE.map(function (x) { return x.en; }),
                  focus: 'tipo', ptHint: 'É uma empresa de ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 6" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '🔤',
        title: 'Language at work',
        goal: 'Falar de rotina e fatos da empresa no presente — ele/ela/isso faz.',
        comp: 'Você usa o present simple na 3ª pessoa (he/she/it) — positiva com -s, ' +
              'negativa com doesn\'t, e pergunta com Does.',
        live: ["Present simple — 3rd person (-s)", "Negative — doesn't", 'Questions — Does...?'],
        nextLive: 'Semana 3 · Practically speaking — numbers, e Business communication — ' +
                   'making phone calls.',
        bridge: 'Na aula vocês praticaram present simple com a empresa do livro. Aqui a ' +
                'empresa é outra — mas o -s da 3ª pessoa não muda.',
        ican: [
          "I can use present simple in the 3rd person (he/she/it works).",
          "I can make negative sentences with doesn't.",
          'I can ask questions with Does...?'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — present simple (3rd person)', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be2w2:tf:1', unit: 2, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "The company sells software."',
                ptHint: 'A empresa vende software.',
                rounds: [
                  { base: 'The company sells software.', cmd: 'Negative', answer: "The company doesn't sell software." },
                  { base: 'The company sells software.', cmd: 'Question', answer: 'Does the company sell software?' },
                  { base: 'She works in Finance.', cmd: 'Negative', answer: "She doesn't work in Finance." },
                  { base: 'She works in Finance.', cmd: 'Question', answer: 'Does she work in Finance?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'be2w2:tf:2', unit: 2, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "It has a factory in Brazil."',
                ptHint: 'Tem uma fábrica no Brasil.',
                rounds: [
                  { base: 'It has a factory in Brazil.', cmd: 'Negative', answer: "It doesn't have a factory in Brazil." },
                  { base: 'It has a factory in Brazil.', cmd: 'Question', answer: 'Does it have a factory in Brazil?' },
                  { base: 'Does it export to Asia?', cmd: 'Short answer — yes', answer: 'Yes, it does.' },
                  { base: 'Does it export to Asia?', cmd: 'Short answer — no', answer: "No, it doesn't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: rotina da empresa', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be2w2:drl:1', unit: 2, waSec: 'Drill · Present simple',
                title: '🔁 Drill — o que ela faz', focus: 'verbo',
                frame: 'She ___ for the company.', ptHint: 'Ela ___ para a empresa.',
                slots: ['works', 'produces', 'sells', 'provides', 'develops'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'A rotina de trabalho', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be2w2:dlg:1',
                title: '🎧 Elena pergunta sobre o trabalho da Priya',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Elena', en: 'Where does Priya work?' },
                  { who: 'Noah', en: 'She works for Nova Energy. She develops new products.' },
                  { who: 'Elena', en: 'Does she travel a lot?' },
                  { who: 'Noah', en: "No, she doesn't. She works from the office every day." }
                ],
                question: 'A Priya viaja muito?',
                options: DF.shuffle([
                  { label: 'Não, trabalha do escritório', correct: true },
                  { label: 'Sim, toda semana' }, { label: 'Às vezes' }, { label: 'Não disse' }
                ]),
                expl: "\"No, she doesn't. She works from the office every day.\""
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be2w2:dlg:2',
                title: '🎧 A fábrica em Vertex Logistics',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'Does Vertex Logistics have offices in Asia?' },
                  { who: 'Sara', en: "Yes, it does. It has an office in Tokyo." },
                  { who: 'Kenji', en: 'Does it employ many people there?' },
                  { who: 'Sara', en: 'Yes. It employs 300 people in Tokyo.' }
                ],
                question: 'Quantas pessoas a Vertex Logistics emprega em Tóquio?',
                options: DF.shuffle([
                  { label: '300', correct: true }, { label: '30' }, { label: '3.000' }, { label: 'Não disse' }
                ]),
                expl: '"It employs 300 people in Tokyo."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be2w2:bc:1', unit: 2, waSec: 'Backchain',
                title: '🧱 A pergunta com Does', ptHint: 'Sua empresa exporta pra Ásia?',
                chain: ['Asia', 'to Asia', 'export to Asia', 'company export to Asia',
                        'Does your company export to Asia?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be2w2:t1', title: '🔧 Complete:',
                main: 'The company ___ (sell) computers. (she/it → +s)', answers: ['sells'],
                expl: 'it → sells.', feedbackTts: 'sells' },
              { ui: 'type', cat: 'gra', srsId: 'be2w2:t2', title: '🔧 Verbo irregular:',
                main: 'It ___ (have) a factory in Spain.', answers: ['has'],
                expl: 'have → has (irregular).', feedbackTts: 'has' },
              { ui: 'choice', cat: 'gra', srsId: 'be2w2:c1', title: '🔧 Negativa correta:',
                main: 'She ___ work on Saturdays.',
                options: DF.shuffle([{ label: "doesn't", correct: true }, { label: "don't" }, { label: "isn't" }]),
                expl: 'She → doesn\'t.' },
              { ui: 'order', cat: 'fun', srsId: 'be2w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'Does it export to Europe',
                expl: 'Does it export to Europe?' },
              { ui: 'match', cat: 'fun', srsId: 'be2w2:match:1', title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Does she work here?', 'Yes, she does.'],
                  ['Does it have a factory?', "No, it doesn't."],
                  ['Do they export?', 'Yes, they do.']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale da rotina de um colega', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be2w2:build:1', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Descreva o trabalho de alguém que você conhece',
                prompt: 'Use a 3ª pessoa: onde trabalha, o que faz.',
                example: 'She works for a bank. She helps customers.', mustUse: ['works'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de present simple', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be2w2+:tf1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Frase base: "He develops new products."',
                ptHint: 'Ele desenvolve novos produtos.',
                rounds: [
                  { base: 'He develops new products.', cmd: 'Negative', answer: "He doesn't develop new products." },
                  { base: 'He develops new products.', cmd: 'Question', answer: 'Does he develop new products?' },
                  { base: 'They provide training.', cmd: 'Negative', answer: "They don't provide training." },
                  { base: 'They provide training.', cmd: 'Question', answer: 'Do they provide training?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de present simple', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'She ___ for the company.',
                  pool: ['works', 'produces', 'sells', 'provides', 'develops'],
                  focus: 'verbo', ptHint: 'Ela ___ para a empresa.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 7" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📞',
        title: 'Practically speaking',
        goal: 'Dizer números (preços, anos, telefones) e fazer uma ligação de trabalho.',
        comp: 'Você diz um número em voz alta e conduz uma ligação — atende, pede pra falar ' +
              'com alguém, dá o motivo, e agradece.',
        live: [
          'Saying numbers — years, prices, phone numbers',
          "Business communication: making phone calls",
          'Key expressions: answering, asking for someone, giving a reason'
        ],
        bridge: 'Na aula vocês praticaram números e duas ligações do livro. Aqui a ligação é ' +
                'outra — mas "put you through" e "calling about" são as mesmas expressões.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 2.',
        ican: [
          'I can say years, prices and phone numbers.',
          'I can answer the phone professionally.',
          'I can ask to speak to someone and give the reason for my call.',
          'I can thank someone and end a phone call politely.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — numbers & phone calls', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e escreva o número', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'be2w3:n:1', exact: true,
                title: '🔢 Ouça e escreva o ano:', tts: 'two thousand and one',
                ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: 'two thousand and one',
                answers: ['2001'], expl: '2001 = two thousand and one.', feedbackTts: 'two thousand and one' },
              { ui: 'type', cat: 'spl', srsId: 'be2w3:n:2', exact: true,
                title: '🔢 E o preço:', tts: 'forty-five dollars sixty',
                ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: 'forty-five dollars sixty',
                answers: ['$45.60', '45.60'], expl: '$45.60 = forty-five dollars sixty.',
                feedbackTts: 'forty-five dollars sixty' },
              { ui: 'type', cat: 'spl', srsId: 'be2w3:n:3', exact: true,
                title: '🔢 O telefone:', tts: 'oh seven seven eight, four five six three six five',
                ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: '0778 456365',
                answers: ['0778456365', '0778 456365'], expl: 'Dizemos "0" como "oh".',
                feedbackTts: 'oh seven seven eight four five six three six five' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: atender e transferir', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be2w3:drl:answer', unit: 2, waSec: 'Drill · Phone',
                title: '🔁 Drill 1 — atendendo', focus: 'atendimento',
                frame: 'Hello, ___. How can I help you?', ptHint: 'Alô, ___. Como posso ajudar?',
                slots: ['Marcom Global', 'Aurora Systems', 'Nova Energy', 'Vertex Logistics'] },
              { ui: 'drill', cat: 'pro', srsId: 'be2w3:drl:reason', unit: 2, waSec: 'Drill · Phone',
                title: '🔁 Drill 2 — o motivo da ligação', focus: 'motivo',
                frame: "I'm calling about ___.", ptHint: 'Estou ligando sobre ___.',
                slots: ['the meeting', 'your order', 'the new prices', 'my appointment'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'A ligação de trabalho', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be2w3:dlg:1',
                title: '🎧 Priya liga pra Nova Energy',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Receptionist', en: 'Nova Energy. How can I help you?' },
                  { who: 'Priya', en: 'Hello, this is Priya. Is Noah there, please?' },
                  { who: 'Receptionist', en: "I'll put you through." },
                  { who: 'Noah', en: 'Hello, Priya. What can I do for you?' },
                  { who: 'Priya', en: "I'm calling about the meeting on Friday." }
                ],
                question: 'Sobre o que a Priya está ligando?',
                options: DF.shuffle([
                  { label: 'A reunião de sexta', correct: true },
                  { label: 'Um pedido' }, { label: 'Os preços' }, { label: 'Não disse' }
                ]),
                expl: '"I\'m calling about the meeting on Friday."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be2w3:dlg:2',
                title: '🎧 Deixando recado',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'Is Sara there, please?' },
                  { who: 'Receptionist', en: "I'm sorry, she isn't in the office today." },
                  { who: 'Kenji', en: 'OK, can you tell her I called?' },
                  { who: 'Receptionist', en: 'Of course. Thanks for your call.' }
                ],
                question: 'A Sara está no escritório?',
                options: DF.shuffle([
                  { label: 'Não', correct: true }, { label: 'Sim' },
                  { label: 'Está numa reunião' }, { label: 'Não disse' }
                ]),
                expl: "\"I'm sorry, she isn't in the office today.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be2w3:bc:1', unit: 2, waSec: 'Backchain',
                title: '🧱 O motivo da ligação', ptHint: 'Estou ligando sobre a reunião de sexta.',
                chain: ['Friday', 'on Friday', 'meeting on Friday', 'about the meeting on Friday',
                        "I'm calling about the meeting on Friday."] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be2w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Is Noah there please',
                expl: 'Is Noah there, please?' },
              { ui: 'order', cat: 'fun', srsId: 'be2w3:ord:2',
                title: '🧩 Monte a frase:', answer: 'I will put you through',
                expl: "I'll put you through." },
              { ui: 'match', cat: 'fun', srsId: 'be2w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['How can I help you?', "I'm calling about my order."],
                  ['Is Sara there, please?', "I'll put you through."],
                  ['Thanks for your help.', "You're welcome."]
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Faça uma ligação de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be2w3:build:1', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Atenda, pergunte por alguém e dê o motivo',
                prompt: 'Grave uma ligação: atenda, peça pra falar com alguém, e diga o motivo.',
                example: "Hello, Marcom Global. How can I help you? Is Elena there, please? I'm calling about the report.",
                mustUse: ["I'm calling about"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A ligação inteira, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be2w3+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis da ligação',
                prompt: 'Grave os dois lados: quem atende e quem liga, do início ao fim.',
                example: "Nova Energy, how can I help you? Is Noah there, please? I'll put you " +
                         "through. Hello, what can I do for you? I'm calling about the meeting.",
                mustUse: ["calling about"] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Ditado infinito de números', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              numbers: [
                { digits: 4, label: '🔢 Um ano:' },
                { digits: 3, label: '🔢 Um preço:' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 8" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: apresentar uma empresa do início ao fim.',
        comp: 'Você apresenta uma empresa — nome, país, tipo de negócio, produtos/serviços, ' +
              'número de funcionários e pra onde exporta — os itens do speaking test.',
        live: [
          'Talking point: country profile — produtos e exportação de um país',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (apresentação de uma empresa)'
        ],
        bridge: 'Na aula vocês montaram o perfil de um país e o professor aplicou o teste. ' +
                'Aqui você ensaia os <b>itens exatos do speaking test</b> — uma apresentação ' +
                'completa sobre uma empresa.',
        nextLive: 'Unit 3. Começa na segunda-feira seguinte.',
        ican: [
          'I can say the type of business a company has.',
          "I can describe a company's products or services.",
          'I can say how many people a company employs.',
          'I can say which countries a company exports to.',
          'I can complete the Unit 2 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'Perfil de empresa', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be2w4:g:1', unit: 2, waSec: 'Talking Point',
                title: '🎲 Escolha uma empresa e descreva',
                prompt: 'Diga o tipo de negócio e o que ela produz ou vende.',
                example: "It's a food company. It produces meals for restaurants.", mustUse: ["It's a"] },
              { ui: 'build', cat: 'fun', srsId: 'be2w4:g:2', unit: 2, waSec: 'Talking Point',
                title: '🎲 Pra onde ela exporta',
                prompt: 'Diga pra quais países ou continentes a empresa exporta.',
                example: 'It exports to Europe and South America.', mustUse: ['exports'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be2w4:pt:1', title: '💼 Que tipo de empresa?',
                main: 'HSBC, Credit Suisse are ___ companies.',
                options: DF.shuffle([{ label: 'financial services', correct: true }, { label: 'automobile' }]),
                expl: 'financial services = serviços financeiros.' },
              { ui: 'choice', cat: 'gra', srsId: 'be2w4:pt:2', title: '🔧 3ª pessoa correta:',
                main: 'The company develop___ new products.',
                options: DF.shuffle([{ label: 's', correct: true }, { label: 'es' }, { label: '(nada)' }]),
                expl: 'develop → develops.' },
              { ui: 'choice', cat: 'gra', srsId: 'be2w4:pt:3', title: '🔧 Negativa:',
                main: 'It ___ export to Africa.',
                options: DF.shuffle([{ label: "doesn't", correct: true }, { label: "don't" }]),
                expl: 'It → doesn\'t.' },
              { ui: 'order', cat: 'fun', srsId: 'be2w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'Can I have your name please',
                expl: 'Can I have your name, please?' },
              { ui: 'match', cat: 'fun', srsId: 'be2w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['How can I help you?', "I'm calling about my order."],
                  ['Does it export?', 'Yes, it does.'],
                  ['Thanks for your help.', "You're welcome."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be2w4:st:1', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 1 — company name and type',
                prompt: 'Diga o nome da empresa e o tipo de negócio.',
                example: "My company is Marcom Global. It's a marketing company.", mustUse: ["It's a"] },
              { ui: 'build', cat: 'fun', srsId: 'be2w4:st:2', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 2 — products or services',
                prompt: 'Diga o que a empresa produz ou fornece.',
                example: 'We provide marketing services for small businesses.', mustUse: ['provide'] },
              { ui: 'build', cat: 'fun', srsId: 'be2w4:st:3', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 3 — number of employees',
                prompt: 'Diga quantas pessoas a empresa emprega.',
                example: 'We employ 50 people.', mustUse: ['employ'] },
              { ui: 'build', cat: 'fun', srsId: 'be2w4:st:4', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 4 — countries you export to',
                prompt: 'Diga pra quais países vocês exportam ou vendem.',
                example: 'We export to Brazil and Portugal.', mustUse: ['export'],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A apresentação completa numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be2w4+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 A apresentação inteira, do início ao fim',
                prompt: 'Grave: nome e tipo da empresa, o que produz, quantos funcionários e ' +
                        'pra onde exporta.',
                example: "My company is Marcom Global. It's a marketing company. We provide " +
                         'services for small businesses. We employ 50 people. We export to Brazil and Portugal.',
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 2', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "It's a ___ company.", pool: BIZTYPE.map(function (x) { return x.en; }),
                  focus: 'tipo', ptHint: 'É uma empresa de ___.', n: 3 },
                { frame: 'She ___ for the company.',
                  pool: ['works', 'produces', 'sells', 'provides', 'develops'],
                  focus: 'verbo', ptHint: 'Ela ___ para a empresa.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
