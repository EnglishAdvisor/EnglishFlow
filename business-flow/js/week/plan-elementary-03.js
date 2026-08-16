/* ENGLISH FLOW — week/plan-elementary-03.js
   BUSINESS ELEMENTARY · UNIT 3 "Location"

   Numeração corrida do Felipe: Unit 3 = semanas 9–12.
     semana 9  = U3 W1 · Working with words (workplaces & regions/continents)
     semana 10 = U3 W2 · Language at work (there is/are + some/any)
     semana 11 = U3 W3 · Practically speaking (email/postal addresses) +
                 Business communication (ordering by phone)
     semana 12 = U3 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Continentes/países e a
   gramática são conhecimento geral, mas empresas, escritórios e ligações
   são autorais — universo Whiterock Consultancy, nunca LEGO/Bowler Corporation/
   Singapore do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const WORKPLACE = [
    { en: 'head office', pt: 'sede' },
    { en: 'factory', pt: 'fábrica' },
    { en: 'R&D centre', pt: 'centro de pesquisa e desenvolvimento' },
    { en: 'distribution centre', pt: 'centro de distribuição' },
    { en: 'sales office', pt: 'escritório de vendas' }
  ];
  const REGION = [
    { en: 'North America', countries: 'the USA, Canada', pt: 'América do Norte' },
    { en: 'Latin America', countries: 'Colombia, Argentina, Chile', pt: 'América Latina' },
    { en: 'Europe', countries: 'Poland, Greece, Norway', pt: 'Europa' },
    { en: 'Africa', countries: 'Nigeria, Egypt, Uganda', pt: 'África' },
    { en: 'the Middle East', countries: 'Qatar, Oman, Saudi Arabia', pt: 'Oriente Médio' },
    { en: 'Asia-Pacific', countries: 'China, Thailand, Vietnam', pt: 'Ásia-Pacífico' }
  ];

  DF.PLAN.elementary[3] = {
    unit: 3,
    title: 'Location',
    subtitle: 'Onde a empresa fica e como entrar em contato',
    icon: '📍',

    mindmap: {
      center: 'Location',
      sub: 'Falar de onde a empresa opera e trocar contato',
      branches: [
        {
          icon: '🏢', name: 'Workplaces',
          leaves: WORKPLACE.map(function (w) { return { en: w.en, pt: w.pt }; }),
          note: 'head office = onde a diretoria trabalha. R&D centre = onde se cria/testa ' +
                'produto novo. Distribution centre = de onde o produto sai pro cliente.'
        },
        {
          icon: '🌍', name: 'Regions of the world',
          leaves: REGION.map(function (r) { return { en: r.en, pt: r.countries }; }),
          note: 'Região não é só um país — é um grupo. "Latin America" inclui Colômbia, ' +
                'Argentina, Chile e outros.'
        },
        {
          icon: '📍', name: 'There is / there are',
          leaves: [
            { en: "There's a factory in Poland.", pt: 'singular' },
            { en: 'There are offices in Asia.', pt: 'plural' },
            { en: "There isn't a car park.", pt: 'negativa singular' },
            { en: "There aren't any meeting rooms.", pt: 'negativa plural' },
            { en: 'Is there a bank near here?', pt: 'pergunta singular' },
            { en: 'Are there any restaurants?', pt: 'pergunta plural' }
          ],
          note: '"There is/are" diz que algo existe num lugar — não confundir com "it is" ' +
                '(que descreve algo já mencionado).'
        },
        {
          icon: '🔢', name: 'Some / any',
          leaves: [
            { en: "There are some offices in Europe.", pt: 'some = frase positiva' },
            { en: "There aren't any offices in Africa.", pt: 'any = negativa' },
            { en: 'Are there any hotels nearby?', pt: 'any = pergunta' },
            { en: 'Would you like some coffee?', pt: 'some = oferecer, mesmo em pergunta' }
          ],
          note: '"some" na frase positiva, "any" na negativa e na pergunta — exceto quando ' +
                'você está oferecendo ou pedindo algo ("Would you like some...?").'
        },
        {
          icon: '📧', name: 'Saying email & postal addresses',
          leaves: [
            { en: '@ = at', pt: 'arroba' },
            { en: '. = dot', pt: 'ponto' },
            { en: '- = hyphen', pt: 'hífen/traço' },
            { en: '_ = underscore', pt: 'sublinhado' },
            { en: 'all one word', pt: 'sem espaço entre as partes' }
          ],
          note: 'E-mail nunca tem espaço — "all one word". Em endereço postal, "postcode" ' +
                '(BR/UK) = "zip code" (EUA).'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 9" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '📍',
        title: 'Working with words',
        goal: 'Falar de onde a empresa opera — os locais e as regiões do mundo.',
        comp: 'Você nomeia os tipos de local de trabalho de uma empresa (sede, fábrica...) ' +
              'e diz em que região do mundo ela opera.',
        live: ['Workplaces (head office, factory, R&D centre...)', 'Regions of the world', 'Company locations'],
        nextLive: 'Semana 2 · Language at work — there is/are e some/any.',
        bridge: 'Na aula vocês viram os locais de trabalho e as regiões do mundo com a ' +
                'empresa do livro. Aqui a empresa é outra — mas a lista de regiões é a mesma.',
        ican: [
          "I can name a company's workplaces (head office, factory, R&D centre...).",
          'I can name the regions of the world.',
          "I can say where a company operates."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — workplaces & regions', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o local', tag: 'listening',
            items: WORKPLACE.map(function (w) {
              var others = DF.shuffle(WORKPLACE.filter(function (o) { return o.en !== w.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be3w1:radar:' + w.en,
                title: '🏢 Que local você ouviu?',
                tts: w.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: w.en,
                options: DF.shuffle([{ label: w.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: w.en + ' = ' + w.pt, feedbackTts: w.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: onde a empresa opera', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be3w1:drl:1', unit: 3, waSec: 'Drill · Workplace',
                title: '🔁 Drill 1 — o tipo de local', focus: 'local',
                frame: 'We have a ___ in Poland.', ptHint: 'Temos um(a) ___ na Polônia.',
                slots: WORKPLACE.map(function (w) { return w.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'be3w1:drl:2', unit: 3, waSec: 'Drill · Regions',
                title: '🔁 Drill 2 — a região', focus: 'região',
                frame: 'We operate in ___.', ptHint: 'Operamos ___.',
                slots: REGION.map(function (r) { return r.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Onde a empresa fica', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be3w1:dlg:1',
                title: '🎧 Sara descreve a Aurora Systems',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Noah', en: 'Where is your head office?' },
                  { who: 'Sara', en: "Our head office is in Germany, in Europe." },
                  { who: 'Noah', en: 'Do you have factories too?' },
                  { who: 'Sara', en: 'Yes, we have a factory in Vietnam, in Asia-Pacific.' }
                ],
                question: 'Onde fica a fábrica da Aurora Systems?',
                options: DF.shuffle([
                  { label: 'No Vietnã', correct: true }, { label: 'Na Alemanha' },
                  { label: 'No Egito', correct: false }, { label: 'Não disse' }
                ]),
                expl: '"We have a factory in Vietnam, in Asia-Pacific."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be3w1:dlg:2',
                title: '🎧 O centro de distribuição',
                lines: [
                  { who: 'Priya', en: 'Where is your distribution centre?' },
                  { who: 'Marco', en: "It's in Nigeria. We deliver to all of Africa from there." },
                  { who: 'Priya', en: 'And your R&D centre?' },
                  { who: 'Marco', en: "That's in Canada, in North America." }
                ],
                question: 'De onde a empresa do Marco entrega pra África?',
                options: DF.shuffle([
                  { label: 'Da Nigéria', correct: true }, { label: 'Do Canadá' },
                  { label: 'Da China' }, { label: 'Não disse' }
                ]),
                expl: '"It\'s in Nigeria. We deliver to all of Africa from there."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be3w1:dlg:3',
                title: '🎧 O escritório de vendas',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Elena', en: 'Does the company have a sales office in Latin America?' },
                  { who: 'Kenji', en: 'Yes, in Chile. It opened last year.' },
                  { who: 'Elena', en: 'Is the factory near there too?' },
                  { who: 'Kenji', en: "No, the factory is in Argentina." }
                ],
                question: 'Onde fica a fábrica?',
                options: DF.shuffle([
                  { label: 'Na Argentina', correct: true }, { label: 'No Chile' },
                  { label: 'No Peru' }, { label: 'Não disse' }
                ]),
                expl: '"No, the factory is in Argentina."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be3w1:bc:1', unit: 3, waSec: 'Backchain',
                title: '🧱 Onde fica a sede', ptHint: 'Nossa sede fica na Alemanha, na Europa.',
                chain: ['Europe', 'in Europe', 'Germany, in Europe', 'is in Germany, in Europe',
                        'Our head office is in Germany, in Europe.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be3w1:c1', title: '🏢 Qual local?',
                main: 'Where new products are designed and tested.',
                options: DF.shuffle([{ label: 'R&D centre', correct: true },
                  { label: 'Distribution centre' }, { label: 'Sales office' }]),
                expl: 'R&D centre = pesquisa e desenvolvimento.' },
              { ui: 'type', cat: 'voc', srsId: 'be3w1:t1', title: '🔧 Complete a região:',
                main: 'Colombia, Argentina, Chile → ___ America', answers: ['Latin'],
                expl: 'Latin America.' },
              { ui: 'order', cat: 'fun', srsId: 'be3w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'Our factory is in Vietnam',
                expl: 'Our factory is in Vietnam.' },
              { ui: 'match', cat: 'fun', srsId: 'be3w1:match:1', title: '🔗 Ligue o país à região:',
                pairs: [['Qatar', 'the Middle East'], ['Nigeria', 'Africa'],
                        ['China', 'Asia-Pacific'], ['Poland', 'Europe']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale de onde sua empresa opera', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be3w1:build:1', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Diga onde fica sua sede e outro local',
                prompt: 'Diga onde fica a sede e outro tipo de local (fábrica, escritório...).',
                example: 'Our head office is in Brazil. We have a sales office in Portugal.',
                mustUse: ['is in'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A empresa nas quatro regiões', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be3w1+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Descreva uma empresa presente em 3 regiões',
                prompt: 'Grave: sede, fábrica e escritório de vendas em três regiões diferentes.',
                example: 'Our head office is in Europe. We have a factory in Asia-Pacific and a ' +
                         'sales office in North America.',
                mustUse: ['head office'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de regiões', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'We operate in ___.', pool: REGION.map(function (r) { return r.en; }),
                  focus: 'região', ptHint: 'Operamos ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 10" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '📍',
        title: 'Language at work',
        goal: 'Dizer o que tem (ou não tem) num lugar — there is/are + some/any.',
        comp: 'Você usa there is/there are nas formas positiva, negativa e de pergunta, e ' +
              'escolhe some ou any corretamente.',
        live: ['there is / there are', "there isn't / there aren't", 'some / any'],
        nextLive: 'Semana 3 · Practically speaking — endereços, e Business communication — ' +
                   'pedidos por telefone.',
        bridge: 'Na aula vocês praticaram there is/are com o escritório do livro. Aqui o ' +
                'escritório é outro — mas a estrutura não muda.',
        ican: [
          'I can say what there is/are in a place.',
          "I can make negative sentences with there isn't/aren't.",
          'I can ask questions with Is there / Are there?',
          'I can use some and any correctly.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — there is/are & some/any', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be3w2:tf:1', unit: 3, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "There is a car park."',
                ptHint: 'Tem um estacionamento.',
                rounds: [
                  { base: 'There is a car park.', cmd: 'Negative', answer: "There isn't a car park." },
                  { base: 'There is a car park.', cmd: 'Question', answer: 'Is there a car park?' },
                  { base: 'There are meeting rooms.', cmd: 'Negative', answer: "There aren't any meeting rooms." },
                  { base: 'There are meeting rooms.', cmd: 'Question', answer: 'Are there any meeting rooms?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'be3w2:tf:2', unit: 3, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "Is there a bank near here?"',
                ptHint: 'Tem um banco perto daqui?',
                rounds: [
                  { base: 'Is there a bank near here?', cmd: 'Short answer — yes', answer: 'Yes, there is.' },
                  { base: 'Is there a bank near here?', cmd: 'Short answer — no', answer: "No, there isn't." },
                  { base: 'Are there any restaurants?', cmd: 'Short answer — yes', answer: 'Yes, there are.' },
                  { base: 'Are there any restaurants?', cmd: 'Short answer — no', answer: "No, there aren't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: some ou any', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be3w2:drl:1', unit: 3, waSec: 'Drill · some/any',
                title: '🔁 Drill — there are ___', focus: 'some/any',
                frame: 'There are ___ offices in Europe.', ptHint: 'Tem ___ escritórios na Europa.',
                slots: ['some'] },
              { ui: 'drill', cat: 'gra', srsId: 'be3w2:drl:2', unit: 3, waSec: 'Drill · Facilities',
                title: '🔁 Drill — o que tem no prédio', focus: 'instalação',
                frame: "There's a ___.", ptHint: 'Tem um(a) ___.',
                slots: ['car park', 'meeting room', 'reception', 'canteen', 'gym'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'O que tem no escritório', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be3w2:dlg:1',
                title: '🎧 Kenji pergunta sobre o novo escritório',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Kenji', en: 'Is there a car park at the new office?' },
                  { who: 'Sara', en: "Yes, there is. There are also some bike racks." },
                  { who: 'Kenji', en: 'Are there any meeting rooms?' },
                  { who: 'Sara', en: 'Yes, there are three meeting rooms.' }
                ],
                question: 'Quantas salas de reunião tem o novo escritório?',
                options: DF.shuffle([
                  { label: 'Três', correct: true }, { label: 'Uma' },
                  { label: 'Cinco' }, { label: 'Não disse' }
                ]),
                expl: '"Yes, there are three meeting rooms."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be3w2:dlg:2',
                title: '🎧 Perto do hotel',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: 'Is there a restaurant near the hotel?' },
                  { who: 'Elena', en: "Yes, there's a good one across the street." },
                  { who: 'Priya', en: 'Is there any public transport?' },
                  { who: 'Elena', en: "There isn't a train station, but there are buses." }
                ],
                question: 'Tem estação de trem perto do hotel?',
                options: DF.shuffle([
                  { label: 'Não, só ônibus', correct: true }, { label: 'Sim' },
                  { label: 'Tem metrô' }, { label: 'Não disse' }
                ]),
                expl: "\"There isn't a train station, but there are buses.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be3w2:bc:1', unit: 3, waSec: 'Backchain',
                title: '🧱 A pergunta sobre instalações', ptHint: 'Tem alguma sala de reunião no escritório?',
                chain: ['office', 'in the office', 'meeting rooms in the office',
                        'any meeting rooms in the office',
                        'Are there any meeting rooms in the office?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be3w2:t1', title: '🔧 Complete:',
                main: '___ a bank near the office. (There is)', answers: ["There's"],
                expl: "There's = There is.", feedbackTts: "There's" },
              { ui: 'choice', cat: 'gra', srsId: 'be3w2:c1', title: '🔧 some ou any:',
                main: 'There aren\'t ___ parking spaces.',
                options: DF.shuffle([{ label: 'any', correct: true }, { label: 'some' }]),
                expl: 'Negativa → any.' },
              { ui: 'choice', cat: 'gra', srsId: 'be3w2:c2', title: '🔧 some ou any:',
                main: 'There are ___ good restaurants nearby.',
                options: DF.shuffle([{ label: 'some', correct: true }, { label: 'any' }]),
                expl: 'Positiva → some.' },
              { ui: 'order', cat: 'fun', srsId: 'be3w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'Are there any meeting rooms',
                expl: 'Are there any meeting rooms?' },
              { ui: 'match', cat: 'fun', srsId: 'be3w2:match:1', title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Is there a car park?', 'Yes, there is.'],
                  ['Are there any restaurants?', 'No, there aren\'t.'],
                  ["What's in the room?", "There's a projector."]
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Descreva um lugar de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be3w2:build:1', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Diga o que tem no seu escritório ou na sua casa',
                prompt: 'Use "There is/are" e "There isn\'t/aren\'t" pelo menos uma vez cada.',
                example: "There's a kitchen, but there isn't a gym.", mustUse: ['There'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de there is/are', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be3w2+:tf1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Frase base: "There are hotels in the city."',
                ptHint: 'Tem hotéis na cidade.',
                rounds: [
                  { base: 'There are hotels in the city.', cmd: 'Negative', answer: "There aren't any hotels in the city." },
                  { base: 'There are hotels in the city.', cmd: 'Question', answer: 'Are there any hotels in the city?' },
                  { base: 'There is a problem.', cmd: 'Negative', answer: "There isn't a problem." },
                  { base: 'There is a problem.', cmd: 'Question', answer: 'Is there a problem?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de instalações', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "There's a ___.",
                  pool: ['car park', 'meeting room', 'reception', 'canteen', 'gym'],
                  focus: 'instalação', ptHint: 'Tem um(a) ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 11" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📧',
        title: 'Practically speaking',
        goal: 'Dizer um e-mail ou endereço em voz alta, e fazer um pedido por telefone.',
        comp: 'Você diz um endereço de e-mail letra por letra e símbolo por símbolo, e ' +
              'conduz um pedido por telefone — item, código, entrega e confirmação.',
        live: [
          'Saying email and postal addresses',
          "Business communication: ordering by phone",
          'Key expressions: asking for repetition, confirming'
        ],
        bridge: 'Na aula vocês praticaram endereços e um pedido por telefone do livro. Aqui ' +
                'o pedido é outro — mas "Can you repeat that?" e "Can I order..." são as ' +
                'mesmas expressões.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 3.',
        ican: [
          'I can say an email address out loud.',
          'I can order a product by phone.',
          "I can ask someone to repeat or speak more slowly.",
          'I can confirm an order.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — addresses & ordering', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e escreva o e-mail', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'be3w3:e:1', exact: true,
                title: '📧 Ouça e escreva:', tts: 'noah at aurorasystems dot com',
                ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: 'noah@aurorasystems.com',
                answers: ['noah@aurorasystems.com'], expl: '@ = at, . = dot.',
                feedbackTts: 'noah at aurorasystems dot com' },
              { ui: 'type', cat: 'spl', srsId: 'be3w3:e:2', exact: true,
                title: '📧 E este:', tts: 'sara dash lima at novaenergy dot co dot uk',
                ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: 'sara-lima@novaenergy.co.uk',
                answers: ['sara-lima@novaenergy.co.uk'], expl: '- = hyphen.',
                feedbackTts: 'sara dash lima at novaenergy dot co dot uk' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: pedindo por telefone', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be3w3:drl:order', unit: 3, waSec: 'Drill · Ordering',
                title: '🔁 Drill 1 — o pedido', focus: 'pedido',
                frame: 'Can I order ___, please?', ptHint: 'Posso pedir ___, por favor?',
                slots: ['some laptops', 'ten chairs', 'a projector', 'some headsets'] },
              { ui: 'drill', cat: 'pro', srsId: 'be3w3:drl:repeat', unit: 3, waSec: 'Drill · Repetition',
                title: '🔁 Drill 2 — pedindo pra repetir', focus: 'repetição',
                frame: '___', ptHint: '___',
                slots: ['Can you repeat that, please?', 'Can you say that again?',
                        'Can you speak more slowly, please?', 'Can you spell that for me?'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'O pedido por telefone', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be3w3:dlg:1',
                title: '🎧 Priya pede material de escritório',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Priya', en: 'Can I order some office chairs, please?' },
                  { who: 'Supplier', en: 'Of course. Can you tell me the product code?' },
                  { who: 'Priya', en: "It's OC-450." },
                  { who: 'Supplier', en: "Can you deliver this week?" }
                ],
                question: 'Qual é o código do produto?',
                options: DF.shuffle([
                  { label: 'OC-450', correct: true }, { label: 'OC-045' },
                  { label: '450-OC' }, { label: 'Não disse' }
                ]),
                expl: '"It\'s OC-450."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be3w3:dlg:2',
                title: '🎧 Confirmando por e-mail',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Supplier', en: 'Can you confirm your order by email?' },
                  { who: 'Noah', en: "Sure. What's your email address?" },
                  { who: 'Supplier', en: "It's orders at deltafoods dot com." },
                  { who: 'Noah', en: 'Can you repeat that, please?' },
                  { who: 'Supplier', en: 'Of course. Orders — O-R-D-E-R-S — at deltafoods dot com.' }
                ],
                question: 'O que o Noah pede pro fornecedor repetir?',
                options: DF.shuffle([
                  { label: 'O e-mail', correct: true }, { label: 'O preço' },
                  { label: 'O código' }, { label: 'A data' }
                ]),
                expl: '"Can you repeat that, please?"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be3w3:bc:1', unit: 3, waSec: 'Backchain',
                title: '🧱 O pedido', ptHint: 'Posso pedir dez cadeiras, por favor?',
                chain: ['please', 'chairs, please', 'ten chairs, please',
                        'order ten chairs, please', 'Can I order ten chairs, please?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be3w3:ord:1',
                title: '🧩 Monte o pedido:', answer: 'Can I order some laptops please',
                expl: 'Can I order some laptops, please?' },
              { ui: 'order', cat: 'fun', srsId: 'be3w3:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'Can you confirm by email',
                expl: 'Can you confirm by email?' },
              { ui: 'match', cat: 'fun', srsId: 'be3w3:match:1', title: '🔗 Ligue o símbolo ao nome:',
                pairs: [['@', 'at'], ['.', 'dot'], ['-', 'hyphen'], ['_', 'underscore']] },
              { ui: 'choice', cat: 'gra', srsId: 'be3w3:c1', title: '📧 Certo ou errado?',
                main: 'Um e-mail em inglês...',
                options: DF.shuffle([{ label: 'nunca tem espaço — "all one word"', correct: true },
                  { label: 'pode ter espaço entre as partes' }]),
                expl: 'E-mail = tudo junto, sem espaço.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Faça um pedido de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be3w3:build:1', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Peça um produto e confirme por e-mail',
                prompt: 'Grave: peça algo, dê o código (se quiser inventar um), e peça ' +
                        'confirmação por e-mail.',
                example: "Can I order five chairs, please? The code is CH-12. Can you confirm by email?",
                mustUse: ['Can I order'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'O pedido inteiro, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be3w3+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis do pedido por telefone',
                prompt: 'Grave os dois lados: quem pede e quem atende, do início ao fim.',
                example: "Can I order some laptops, please? Can you tell me the product code? " +
                         "It's LT-200. Can you confirm by email? Sure, thanks for your order.",
                mustUse: ['Can I order'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de pedidos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Can I order ___, please?',
                  pool: ['some laptops', 'ten chairs', 'a projector', 'some headsets', 'office chairs'],
                  focus: 'pedido', ptHint: 'Posso pedir ___, por favor?', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 12" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: comparar dois lugares e deixar um recado por telefone.',
        comp: 'Você compara duas opções de local pra um evento, e conduz uma ligação — ' +
              'liga, pede pra falar com alguém, e deixa um recado — os itens do speaking test.',
        live: [
          'Talking point: qual é a melhor cidade pra uma conferência',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (deixar um recado por telefone)'
        ],
        bridge: 'Na aula vocês compararam duas cidades pra uma conferência e o professor ' +
                'aplicou o teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — ' +
                'ligar, pedir por alguém, e deixar um recado — numa ligação nova.',
        nextLive: 'Unit 4. Começa na segunda-feira seguinte.',
        ican: [
          'I can compare two locations for a business event.',
          'I can start a phone call and ask to speak to someone.',
          'I can leave a message with my name and phone number.',
          'I can take a message for someone else.',
          'I can complete the Unit 3 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'Qual é o melhor lugar?', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be3w4:g:1', unit: 3, waSec: 'Talking Point',
                title: '🎲 Compare dois lugares',
                prompt: 'Escolha duas cidades e diga o que tem em cada uma (hotéis, transporte...).',
                example: "There are a lot of hotels in Lisbon, but there aren't many in the countryside.",
                mustUse: ['There'] },
              { ui: 'build', cat: 'fun', srsId: 'be3w4:g:2', unit: 3, waSec: 'Talking Point',
                title: '🎲 Diga onde a empresa opera',
                prompt: 'Diga a região e um local (sede, fábrica...).',
                example: 'Our head office is in Europe.', mustUse: ['is in'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be3w4:pt:1', title: '🌍 Qual região?',
                main: 'Nigeria and Egypt are in ___.',
                options: DF.shuffle([{ label: 'Africa', correct: true }, { label: 'Asia-Pacific' }]),
                expl: 'Nigeria e Egito ficam na África.' },
              { ui: 'choice', cat: 'gra', srsId: 'be3w4:pt:2', title: '🔧 there is ou there are?',
                main: '___ some meeting rooms on this floor.',
                options: DF.shuffle([{ label: 'There are', correct: true }, { label: 'There is' }]),
                expl: 'meeting rooms (plural) → There are.' },
              { ui: 'choice', cat: 'gra', srsId: 'be3w4:pt:3', title: '🔧 some ou any:',
                main: 'There isn\'t ___ parking here.',
                options: DF.shuffle([{ label: 'any', correct: true }, { label: 'some' }]),
                expl: 'Negativa → any.' },
              { ui: 'order', cat: 'fun', srsId: 'be3w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'Can I leave a message',
                expl: 'Can I leave a message?' },
              { ui: 'match', cat: 'fun', srsId: 'be3w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Is there a car park?', 'Yes, there is.'],
                  ['Can you repeat that?', 'Sure.'],
                  ['Can I order this, please?', 'Of course.']
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be3w4:st:1', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 1 — start the call',
                prompt: 'Cumprimente e diga quem você é.',
                example: 'Hello, this is Ana from Whiterock Consultancy.', mustUse: ['this is'] },
              { ui: 'build', cat: 'fun', srsId: 'be3w4:st:2', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 2 — ask to speak to someone',
                prompt: 'Pergunte se pode falar com alguém.',
                example: 'Can I speak to Mr. Harper, please?', mustUse: ['speak to'] },
              { ui: 'build', cat: 'fun', srsId: 'be3w4:st:3', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 3 — leave a message',
                prompt: 'Deixe seu nome e telefone pra retornarem.',
                example: "Can you ask him to call me back? My number is 0778 456365.",
                mustUse: ['call me back'] },
              { ui: 'build', cat: 'fun', srsId: 'be3w4:st:4', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 4 — end the call',
                prompt: 'Agradeça e encerre.',
                example: 'Thanks for your help. Goodbye.', mustUse: ['Thanks'],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A ligação inteira numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be3w4+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave a ligação inteira: cumprimente, peça por alguém, deixe o ' +
                        'recado com telefone, e encerre.',
                example: "Hello, this is Ana. Can I speak to Mr. Harper, please? He isn't in " +
                         "the office. OK, can you ask him to call me back? My number is 0778 " +
                         "456365. Thanks for your help. Goodbye.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 3', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'We operate in ___.', pool: REGION.map(function (r) { return r.en; }),
                  focus: 'região', ptHint: 'Operamos ___.', n: 3 },
                { frame: "There's a ___.",
                  pool: ['car park', 'meeting room', 'reception', 'canteen', 'gym'],
                  focus: 'instalação', ptHint: 'Tem um(a) ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
