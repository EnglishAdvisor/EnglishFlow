/* ENGLISH FLOW — week/plan-elementary-01.js
   BUSINESS ELEMENTARY · UNIT 1 "Jobs"

   Numeração corrida do Felipe: Unit 1 = semanas 1–4.
     semana 1 = U1 W1 · Working with words (countries, nationalities, jobs)
     semana 2 = U1 W2 · Language at work (to be + possessive adjectives)
     semana 3 = U1 W3 · Practically speaking (spelling) + Business communication
                (saying hello and goodbye)
     semana 4 = U1 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Países/nacionalidades e
   cargos são conhecimento geral (repete à vontade), mas a empresa, os
   personagens e as situações são autorais — universo Marcom Global, nunca
   a Marcegaglia/Webmex/Serena Software do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const NAT = [
    { country: 'India', en: 'Indian', pt: 'indiano(a)' },
    { country: 'Japan', en: 'Japanese', pt: 'japonês/japonesa' },
    { country: 'Poland', en: 'Polish', pt: 'polonês/polonesa' },
    { country: 'Brazil', en: 'Brazilian', pt: 'brasileiro(a)' },
    { country: 'the USA', en: 'American', pt: 'americano(a)' },
    { country: 'Italy', en: 'Italian', pt: 'italiano(a)' },
    { country: 'South Africa', en: 'South African', pt: 'sul-africano(a)' },
    { country: 'Germany', en: 'German', pt: 'alemão/alemã' }
  ];
  const JOBS = [
    { en: 'Sales Rep', pt: 'representante de vendas', def: "visits businesses to sell a company's products" },
    { en: 'Financial Director', pt: 'diretor financeiro', def: "in charge of a company's money" },
    { en: 'CEO', pt: 'diretor executivo', def: 'in charge of a company' },
    { en: 'Personal Assistant', pt: 'assistente pessoal', def: "helps somebody with their work" },
    { en: 'Technician', pt: 'técnico', def: 'keeps equipment in good condition' },
    { en: 'HR Manager', pt: 'gerente de RH', def: "in charge of employees' records" },
    { en: 'Receptionist', pt: 'recepcionista', def: 'deals with visitors and phone calls' },
    { en: 'Team Leader', pt: 'líder de equipe', def: 'in charge of a team of people at work' }
  ];

  DF.PLAN.elementary[1] = {
    unit: 1,
    title: 'Jobs',
    subtitle: 'De onde você é e o que você faz',
    icon: '🌍',

    mindmap: {
      center: 'Jobs',
      sub: 'Dizer de onde você é e o que você faz',
      branches: [
        {
          icon: '🌍', name: 'Countries & nationalities',
          leaves: NAT.map(function (x) { return { en: x.country + ' → ' + x.en, pt: x.pt }; }),
          note: 'Nacionalidade não é regra automática de sufixo — cada país tem sua forma ' +
                'própria (Japan → Japanese, Poland → Polish, France → French). Decore em tabela.'
        },
        {
          icon: '💼', name: 'Job titles',
          leaves: JOBS.map(function (j) { return { en: j.en, pt: j.pt }; }),
          note: 'Cargo sempre com artigo: "I\'m <b>a</b> Sales Rep." — nunca "I\'m Sales Rep."'
        },
        {
          icon: '🔤', name: 'Spelling the alphabet',
          leaves: [
            { en: 'A H J K', pt: 'rima com "ei"' },
            { en: 'B C D E G P T V', pt: 'rima com "i"' },
            { en: 'F L M N S X Z', pt: 'rima com "é"' },
            { en: 'I Y', pt: 'rima com "ai"' },
            { en: 'O', pt: 'sozinho' },
            { en: 'Q U W', pt: 'rima com "iú"' },
            { en: 'R', pt: 'sozinho' }
          ],
          note: 'Soletrar por grupo de som ajuda a lembrar — a letra certa costuma "rimar" ' +
                'com outra do mesmo grupo.'
        },
        {
          icon: '👋', name: 'Saying hello and goodbye',
          leaves: [
            { en: 'Hello, my name is...', pt: 'se apresentando' },
            { en: 'Pleased to meet you.', pt: 'prazer em conhecer' },
            { en: 'How do you do?', pt: 'muito formal, primeiro encontro' },
            { en: 'Nice meeting you.', pt: 'ao se despedir, primeiro encontro' },
            { en: 'See you soon. / Have a good journey.', pt: 'despedida' }
          ],
          note: '"How do you do?" só na primeira vez que você conhece alguém — não é ' +
                '"como vai" do dia a dia (isso é "How are you?").'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 ══════════════════
      {
        n: 1, key: 'words', icon: '🌍',
        title: 'Working with words',
        goal: 'Dizer de onde as pessoas são e o que elas fazem.',
        comp: 'Você diz o país e a nacionalidade de alguém, e nomeia cargos comuns de escritório.',
        live: ['Countries and nationalities', 'Job titles', 'Talking about companies'],
        nextLive: 'Semana 2 · Language at work — to be e possessive adjectives.',
        bridge: 'Na aula vocês viram países/nacionalidades e cargos com pessoas do livro. ' +
                'Aqui as pessoas são outras — mas a lista de nacionalidades é a mesma.',
        ican: [
          'I can say where someone is from and their nationality.',
          'I can name common job titles.',
          "I can say what a job title means."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — countries & jobs', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique a nacionalidade', tag: 'listening',
            items: NAT.slice(0, 4).map(function (x) {
              var others = DF.shuffle(NAT.filter(function (o) { return o.en !== x.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be1w1:radar:' + x.en,
                title: '🌍 Que nacionalidade você ouviu?',
                tts: x.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: x.en,
                options: DF.shuffle([{ label: x.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: x.en + ' = ' + x.pt, feedbackTts: x.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: de onde e o que você faz', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be1w1:drl:1', unit: 1, waSec: 'Drill · Nationality',
                title: "🔁 Drill 1 — de onde você é", focus: 'nacionalidade',
                frame: "I'm ___.", ptHint: 'Eu sou ___.',
                slots: NAT.map(function (x) { return x.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'be1w1:drl:2', unit: 1, waSec: 'Drill · Jobs',
                title: '🔁 Drill 2 — o cargo', focus: 'cargo',
                frame: "I'm a ___.", ptHint: 'Eu sou um(a) ___.',
                slots: JOBS.map(function (j) { return j.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Conhecendo a equipe', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be1w1:dlg:1',
                title: '🎧 Elena conhece o novo Técnico',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Elena', en: "Hi, I'm Elena. I'm the HR Manager." },
                  { who: 'Marco', en: "Nice to meet you. I'm Marco, the new Technician." },
                  { who: 'Elena', en: 'Where are you from, Marco?' },
                  { who: 'Marco', en: "I'm Italian, from Milan." }
                ],
                question: 'Qual é a nacionalidade do Marco?',
                options: DF.shuffle([
                  { label: 'Italiana', correct: true }, { label: 'Polonesa' },
                  { label: 'Brasileira', correct: false }, { label: 'Não disse' }
                ]),
                expl: '"I\'m Italian, from Milan."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be1w1:dlg:2',
                title: '🎧 A nova diretora financeira',
                lines: [
                  { who: 'Priya', en: "I'm Priya. I'm the new Financial Director." },
                  { who: 'Noah', en: "Where are you from?" },
                  { who: 'Priya', en: "I'm Indian, from Mumbai. And you?" },
                  { who: 'Noah', en: "I'm South African." }
                ],
                question: 'Qual é o cargo da Priya?',
                options: DF.shuffle([
                  { label: 'Diretora financeira', correct: true },
                  { label: 'Recepcionista' }, { label: 'Líder de equipe' }, { label: 'Técnica' }
                ]),
                expl: '"I\'m the new Financial Director."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be1w1:dlg:3',
                title: '🎧 Apresentando o recepcionista',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Sara', en: "This is Kenji. He's our Receptionist." },
                  { who: 'Noah', en: "Nice to meet you, Kenji. Where are you from?" },
                  { who: 'Kenji', en: "I'm Japanese, from Osaka." }
                ],
                question: 'Qual é o cargo do Kenji?',
                options: DF.shuffle([
                  { label: 'Recepcionista', correct: true },
                  { label: 'Assistente pessoal' }, { label: 'CEO' }, { label: 'Não disse' }
                ]),
                expl: '"He\'s our Receptionist."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be1w1:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 Se apresentando', ptHint: 'Eu sou o novo representante de vendas.',
                chain: ['Rep', 'Sales Rep', 'the new Sales Rep', "I'm the new Sales Rep."] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'voc', srsId: 'be1w1:t1', title: '🔧 Complete a nacionalidade:',
                main: 'Poland → ___', answers: ['Polish'], expl: 'Poland = Polish.', feedbackTts: 'Polish' },
              { ui: 'choice', cat: 'voc', srsId: 'be1w1:c1', title: '💼 Qual cargo?',
                main: 'A person whose job is to help somebody with their work.',
                options: DF.shuffle([{ label: 'Personal Assistant', correct: true },
                  { label: 'CEO' }, { label: 'Technician' }]),
                expl: 'Personal Assistant = assistente pessoal.' },
              { ui: 'order', cat: 'fun', srsId: 'be1w1:ord:1',
                title: '🧩 Monte a frase:', answer: "I'm the new HR Manager",
                expl: "I'm the new HR Manager." },
              { ui: 'match', cat: 'fun', srsId: 'be1w1:match:1', title: '🔗 Ligue o país à nacionalidade:',
                pairs: NAT.slice(0, 4).map(function (x) { return [x.country, x.en]; }) }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale de você', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be1w1:build:1', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Diga sua nacionalidade e seu cargo',
                prompt: 'Use "I\'m" duas vezes: nacionalidade e cargo.',
                example: "I'm Brazilian. I'm a Sales Rep.", mustUse: ["I'm"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Apresentação completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be1w1+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Nome, país e cargo numa gravação só',
                prompt: 'Grave: seu nome, de onde você é (nacionalidade) e seu cargo.',
                example: "I'm Ana. I'm Brazilian. I'm a Team Leader.", mustUse: ["I'm"] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de nacionalidades', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm ___.", pool: NAT.map(function (x) { return x.en; }),
                  focus: 'nacionalidade', ptHint: 'Eu sou ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 ══════════════════
      {
        n: 2, key: 'grammar', icon: '🧩',
        title: 'Language at work',
        goal: 'Usar to be (am/is/are) e possessive adjectives pra falar de você e da empresa.',
        comp: 'Você usa am/is/are nas formas positiva, negativa e de pergunta, e diz de quem ' +
              'é algo com my/your/his/her/its/our/their.',
        live: ['to be — positive, negative, questions', 'Possessive adjectives', 'Talking about a company'],
        nextLive: 'Semana 3 · Practically speaking — spelling, e Business communication — ' +
                   'saying hello and goodbye.',
        bridge: 'Na aula vocês praticaram to be com o perfil da empresa do livro. Aqui a ' +
                'empresa é outra (Aurora Systems) — mas am/is/are não mudam.',
        ican: [
          'I can use am/is/are correctly.',
          'I can make negative sentences and questions with to be.',
          'I can use possessive adjectives (my, your, his, her, its, our, their).'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — to be & possessives', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be1w2:tf:1', unit: 1, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I am the manager."',
                ptHint: 'Eu sou o gerente.',
                rounds: [
                  { base: 'I am the manager.', cmd: 'Negative', answer: "I'm not the manager." },
                  { base: 'I am the manager.', cmd: 'Question', answer: 'Am I the manager?' },
                  { base: 'She is from Brazil.', cmd: 'Negative', answer: "She isn't from Brazil." },
                  { base: 'She is from Brazil.', cmd: 'Question', answer: 'Is she from Brazil?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'be1w2:tf:2', unit: 1, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "They are technicians."',
                ptHint: 'Eles são técnicos.',
                rounds: [
                  { base: 'They are technicians.', cmd: 'Negative', answer: "They aren't technicians." },
                  { base: 'They are technicians.', cmd: 'Question', answer: 'Are they technicians?' },
                  { base: 'Is she a Team Leader?', cmd: 'Short answer — yes', answer: 'Yes, she is.' },
                  { base: 'Is she a Team Leader?', cmd: 'Short answer — no', answer: "No, she isn't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de posse', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be1w2:drl:1', unit: 1, waSec: 'Drill · Possessives',
                title: '🔁 Drill — de quem é a empresa', focus: 'possessivo',
                frame: '___ company is in Germany.', ptHint: '___ empresa fica na Alemanha.',
                slots: ['My', 'Your', 'His', 'Her', 'Our', 'Their'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'A empresa Aurora Systems', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be1w2:dlg:1',
                title: '🎧 Sara apresenta a Aurora Systems',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Sara', en: 'Is your company German?' },
                  { who: 'Noah', en: "No, it isn't. My company is American." },
                  { who: 'Sara', en: 'Is it a big company?' },
                  { who: 'Noah', en: "Yes, it is. It's a multinational. Our customers are all over the world." }
                ],
                question: 'De onde é a empresa do Noah?',
                options: DF.shuffle([
                  { label: 'Americana', correct: true }, { label: 'Alemã' },
                  { label: 'Brasileira' }, { label: 'Não disse' }
                ]),
                expl: '"My company is American."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be1w2:dlg:2',
                title: '🎧 Quem é o CEO?',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Elena', en: "Who's the CEO of Aurora Systems?" },
                  { who: 'Marco', en: "Her name is Sara. She's also a Team Leader." },
                  { who: 'Elena', en: "Is she from the USA?" },
                  { who: 'Marco', en: "No, she isn't. She's Brazilian." }
                ],
                question: 'A CEO é dos EUA?',
                options: DF.shuffle([
                  { label: 'Não, é brasileira', correct: true },
                  { label: 'Sim' }, { label: 'É alemã' }, { label: 'Não disse' }
                ]),
                expl: '"No, she isn\'t. She\'s Brazilian."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be1w2:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 A pergunta sobre a empresa', ptHint: 'A sua empresa é americana?',
                chain: ['American', 'company American', 'your company American',
                        'Is your company American?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be1w2:t1', title: '🔧 Complete:',
                main: 'My company ___ (is/are) in Poland.', answers: ['is'],
                expl: 'My company (it) → is.', feedbackTts: 'is' },
              { ui: 'choice', cat: 'gra', srsId: 'be1w2:c1', title: '🔧 Negativa correta:',
                main: 'We ___ from Japan.',
                options: DF.shuffle([{ label: "aren't", correct: true }, { label: "isn't" }, { label: "amn't" }]),
                expl: 'We → aren\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'be1w2:c2', title: '🔧 Possessivo:',
                main: 'This is Priya. ___ job is Financial Director.',
                options: DF.shuffle([{ label: 'Her', correct: true }, { label: 'She' }, { label: 'His' }]),
                expl: 'Priya (she) → her.' },
              { ui: 'order', cat: 'fun', srsId: 'be1w2:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Is your company a multinational',
                expl: 'Is your company a multinational?' },
              { ui: 'match', cat: 'fun', srsId: 'be1w2:match:1', title: '🔗 Ligue o pronome ao possessivo:',
                pairs: [['I', 'my'], ['we', 'our'], ['he', 'his'], ['they', 'their']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale da sua empresa', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be1w2:build:1', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Descreva sua empresa',
                prompt: 'Diga se é grande ou pequena, e de onde são os clientes.',
                example: "My company is small. Our customers are in Brazil.", mustUse: ['My company'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de to be', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be1w2+:tf1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Frase base: "Our office is in Tokyo."',
                ptHint: 'Nosso escritório fica em Tóquio.',
                rounds: [
                  { base: 'Our office is in Tokyo.', cmd: 'Negative', answer: "Our office isn't in Tokyo." },
                  { base: 'Our office is in Tokyo.', cmd: 'Question', answer: 'Is our office in Tokyo?' },
                  { base: 'The customers are happy.', cmd: 'Negative', answer: "The customers aren't happy." },
                  { base: 'The customers are happy.', cmd: 'Question', answer: 'Are the customers happy?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de possessivos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___ office is in Tokyo.', pool: ['My', 'Your', 'His', 'Her', 'Our', 'Their'],
                  focus: 'possessivo', ptHint: '___ escritório fica em Tóquio.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 ══════════════════
      {
        n: 3, key: 'speaking', icon: '👋',
        title: 'Practically speaking',
        goal: 'Soletrar em inglês, e dizer olá/tchau de forma profissional.',
        comp: 'Você soletra seu nome, e conduz um cumprimento completo — apresenta-se, ' +
              'apresenta um colega e se despede.',
        live: [
          'Spelling — the alphabet in groups',
          "Business communication: saying hello and goodbye",
          'Introducing yourself and someone else'
        ],
        bridge: 'Na aula vocês praticaram soletrar e o diálogo de recepção do livro. Aqui a ' +
                'situação é outra — mas as expressões de cumprimentar são as mesmas.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 1.',
        ican: [
          'I can spell my name in English.',
          'I can say hello and introduce myself.',
          'I can introduce someone else.',
          'I can say goodbye politely.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — spelling & greetings', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e escreva a letra', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'be1w3:sp:1', exact: true,
                title: '🔤 Ouça e escreva a letra:', tts: 'K', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'K', answers: ['K'], expl: 'K rima com A, H, J.', feedbackTts: 'K' },
              { ui: 'type', cat: 'spl', srsId: 'be1w3:sp:2', exact: true,
                title: '🔤 E esta:', tts: 'G', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'G', answers: ['G'], expl: 'G rima com B, C, D, E.', feedbackTts: 'G' },
              { ui: 'type', cat: 'spl', srsId: 'be1w3:sp:3', exact: true,
                title: '🔤 A mais confundida:', tts: 'Y', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'Y', answers: ['Y'], expl: 'Y rima com I.', feedbackTts: 'Y' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: cumprimentar', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be1w3:drl:hello', unit: 1, waSec: 'Drill · Hello',
                title: '🔁 Drill 1 — se apresentar', focus: 'saudação',
                frame: 'Hello, my name is ___.', ptHint: 'Olá, meu nome é ___.',
                slots: ['Elena', 'Marco', 'Priya', 'Noah', 'Sara'] },
              { ui: 'drill', cat: 'pro', srsId: 'be1w3:drl:bye', unit: 1, waSec: 'Drill · Goodbye',
                title: '🔁 Drill 2 — se despedir', focus: 'despedida',
                frame: '___', ptHint: '___',
                slots: ['Nice meeting you.', 'See you soon.', 'Have a good journey.', 'Bye, thanks.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Na recepção', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be1w3:dlg:1',
                title: '🎧 Elena recebe uma visitante',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Visitor', en: "Hello, my name is Anna Kowalski." },
                  { who: 'Elena', en: 'Pleased to meet you. How do you do?' },
                  { who: 'Visitor', en: "How do you do? Can you spell your name, please?" },
                  { who: 'Elena', en: "Yes, it's E-L-E-N-A." }
                ],
                question: 'O que a visitante pede pra Elena?',
                options: DF.shuffle([
                  { label: 'Que soletre o nome', correct: true },
                  { label: 'Que repita o nome' }, { label: 'O cargo dela' }, { label: 'Nada' }
                ]),
                expl: '"Can you spell your name, please?"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be1w3:dlg:2',
                title: '🎧 Apresentando um colega',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Noah', en: "This is my colleague, Marco Altieri." },
                  { who: 'Priya', en: "Pleased to meet you, Marco." },
                  { who: 'Marco', en: "And you. Do you know Sara?" },
                  { who: 'Priya', en: "No, I don't. Nice to meet you all." }
                ],
                question: 'A Priya já conhecia a Sara?',
                options: DF.shuffle([
                  { label: 'Não', correct: true }, { label: 'Sim' },
                  { label: 'Não disse' }, { label: 'Só de vista' }
                ]),
                expl: '"No, I don\'t."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be1w3:dlg:3',
                title: '🎧 Se despedindo',
                lines: [
                  { who: 'Kenji', en: "It's time to leave. See you soon." },
                  { who: 'Sara', en: 'Bye, Kenji. Have a good journey.' },
                  { who: 'Kenji', en: 'Thanks. Nice meeting you.' }
                ],
                question: 'O que a Sara deseja pro Kenji?',
                options: DF.shuffle([
                  { label: 'Uma boa viagem', correct: true },
                  { label: 'Um bom trabalho' }, { label: 'Boa sorte' }, { label: 'Nada' }
                ]),
                expl: '"Have a good journey."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be1w3:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 Pedir pra soletrar', ptHint: 'Você pode soletrar seu nome, por favor?',
                chain: ['name', 'your name', 'spell your name', 'you spell your name',
                        'Can you spell your name, please?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be1w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'How do you spell your name',
                expl: 'How do you spell your name?' },
              { ui: 'order', cat: 'fun', srsId: 'be1w3:ord:2',
                title: '🧩 Monte a frase:', answer: 'This is my colleague',
                expl: 'This is my colleague.' },
              { ui: 'match', cat: 'fun', srsId: 'be1w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Hello, my name is Sara.', 'Pleased to meet you.'],
                  ['How do you do?', 'How do you do?'],
                  ["It's time to leave.", 'See you soon.'],
                  ['Have a good journey.', 'Thanks. Bye.']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'be1w3:c1', title: '👋 Certo ou errado?',
                main: '"How do you do?" é usado...',
                options: DF.shuffle([{ label: 'só na primeira vez que você conhece alguém', correct: true },
                  { label: 'toda vez que você vê a pessoa' }]),
                expl: 'É formal, só pro primeiro encontro.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Cumprimente de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be1w3:build:1', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Apresente-se e soletre seu nome',
                prompt: 'Diga "Hello, my name is..." e depois soletre seu nome, letra por letra.',
                example: "Hello, my name is Ana. A-N-A.", mustUse: ['my name is'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'O cumprimento completo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be1w3+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Apresente-se, apresente um colega e se despeça',
                prompt: 'Grave os três passos numa gravação só.',
                example: "Hello, my name is Ana. This is my colleague, Bruno. Nice meeting you. See you soon.",
                mustUse: ['my name is'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de saudações', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Hello, my name is ___.', pool: 'name', focus: 'saudação',
                  ptHint: 'Olá, meu nome é ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: apresentar-se, dizer de onde você é e o que faz, do início ao fim.',
        comp: 'Você conduz uma apresentação completa numa conferência — cumprimenta, ' +
              'se apresenta, diz nacionalidade, soletra o nome e pergunta sobre a empresa ' +
              'do outro — os itens do speaking test.',
        live: [
          'Talking point: the introductions game — tabuleiro em duplas',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (encontro numa conferência)'
        ],
        bridge: 'Na aula vocês jogaram o jogo de apresentações e o professor aplicou o ' +
                'teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — cumprimentar, ' +
                'apresentar-se, soletrar e perguntar sobre a empresa — numa conversa nova.',
        nextLive: 'Unit 2. Começa na segunda-feira seguinte.',
        ican: [
          'I can greet someone at a conference.',
          'I can introduce myself and spell my name.',
          'I can say my nationality and job.',
          "I can ask about someone else's company.",
          'I can complete the Unit 1 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'O jogo das apresentações', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be1w4:g:1', unit: 1, waSec: 'Talking Point',
                title: '🎲 Apresente-se',
                prompt: 'Diga seu nome, nacionalidade e cargo.',
                example: "My name is Ana. I'm Brazilian. I'm a Sales Rep.", mustUse: ['My name is'] },
              { ui: 'build', cat: 'fun', srsId: 'be1w4:g:2', unit: 1, waSec: 'Talking Point',
                title: '🎲 Soletre seu nome',
                prompt: 'Soletre seu nome completo, letra por letra.',
                example: 'A-N-A S-I-L-V-A.', mustUse: [] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'voc', srsId: 'be1w4:pt:1', title: '🔧 Complete:',
                main: 'Japan → ___', answers: ['Japanese'], expl: 'Japan = Japanese.' },
              { ui: 'choice', cat: 'gra', srsId: 'be1w4:pt:2', title: '🔧 to be correto:',
                main: 'We ___ from Germany.',
                options: DF.shuffle([{ label: 'are', correct: true }, { label: 'is' }, { label: 'am' }]),
                expl: 'We → are.' },
              { ui: 'choice', cat: 'gra', srsId: 'be1w4:pt:3', title: '🔧 Possessivo:',
                main: '___ company is small. (I)',
                options: DF.shuffle([{ label: 'My', correct: true }, { label: 'Me' }, { label: 'I' }]),
                expl: 'I → my.' },
              { ui: 'order', cat: 'fun', srsId: 'be1w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'How do you spell your name',
                expl: 'How do you spell your name?' },
              { ui: 'match', cat: 'fun', srsId: 'be1w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Hello, my name is Tom.', 'Pleased to meet you.'],
                  ['Where are you from?', "I'm Polish."],
                  ["It's time to leave.", 'See you soon.']
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be1w4:st:1', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 1 — say hello',
                prompt: 'Cumprimente alguém que você está conhecendo pela primeira vez.',
                example: 'Hello, how do you do?', mustUse: ['Hello'] },
              { ui: 'build', cat: 'fun', srsId: 'be1w4:st:2', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 2 — introduce yourself',
                prompt: 'Diga seu nome e de onde você é.',
                example: "My name is Ana. I'm from Brazil.", mustUse: ['My name is'] },
              { ui: 'build', cat: 'fun', srsId: 'be1w4:st:3', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 3 — spell your name',
                prompt: 'Peça pra soletrar, e depois soletre o seu.',
                example: 'Can you spell your name? A-N-A.', mustUse: ['spell'] },
              { ui: 'build', cat: 'fun', srsId: 'be1w4:st:4', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 4 — ask about their company',
                prompt: 'Pergunte o nome e o país da empresa do outro.',
                example: "What's the name of your company? Is it American?", mustUse: ['company'] },
              { ui: 'build', cat: 'fun', srsId: 'be1w4:st:5', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 5 — say goodbye',
                prompt: 'Encerre a conversa educadamente.',
                example: 'Nice meeting you. Have a good journey.', mustUse: ['Nice meeting you'],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'O encontro inteiro numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be1w4+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Os 5 itens numa gravação só',
                prompt: 'Grave a conversa inteira: cumprimente, apresente-se, soletre, ' +
                        'pergunte sobre a empresa e se despeça.',
                example: "Hello, how do you do? My name is Ana, I'm from Brazil. Can you spell " +
                         "your name? A-N-A. What's the name of your company? Nice meeting you.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 1', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm ___.", pool: NAT.map(function (x) { return x.en; }),
                  focus: 'nacionalidade', ptHint: 'Eu sou ___.', n: 3 },
                { frame: "I'm a ___.", pool: JOBS.map(function (j) { return j.en; }),
                  focus: 'cargo', ptHint: 'Eu sou um(a) ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
