/* ENGLISH FLOW — week/plan-elementary-10.js
   BUSINESS ELEMENTARY · UNIT 10 "Teamwork"

   Numeração corrida do Felipe: Unit 10 = semanas 37–40.
     semana 37 = U10 W1 · Working with words (working in teams)
     semana 38 = U10 W2 · Language at work (superlatives)
     semana 39 = U10 W3 · Practically speaking (responding to news) +
                 Business communication (giving opinions)
     semana 40 = U10 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Colocações de trabalho em
   equipe e gramática são conhecimento geral, mas as reuniões e situações
   são autorais — universo Marcom Global, nunca W.L. Gore/Recife/McLaren
   do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const TEAMCOLL = [
    { en: 'attend meetings', pt: 'participar de reuniões' },
    { en: 'plan projects', pt: 'planejar projetos' },
    { en: 'make decisions', pt: 'tomar decisões' },
    { en: 'work in a team', pt: 'trabalhar em equipe' },
    { en: 'develop ideas', pt: 'desenvolver ideias' },
    { en: 'find solutions', pt: 'encontrar soluções' },
    { en: 'solve problems', pt: 'resolver problemas' }
  ];
  const NEWSRESP = [
    { en: 'Really? How amazing!', type: 'good' },
    { en: "Great, that's fantastic!", type: 'good' },
    { en: "Good, that's excellent news!", type: 'good' },
    { en: "Oh no, that's terrible.", type: 'bad' },
    { en: "I'm sorry, how disappointing.", type: 'bad' },
    { en: "Wow, that's surprising!", type: 'surprise' }
  ];
  const OPINION = [
    "What's your opinion?", 'Do you think...?', 'In my opinion...', 'I think...',
    'Yes, I agree.', "I'm not so sure.", 'I disagree.'
  ];

  DF.PLAN.elementary[10] = {
    unit: 10,
    title: 'Teamwork',
    subtitle: 'Trabalhar em equipe, comparar o melhor, e dar opinião',
    icon: '🤝',

    mindmap: {
      center: 'Teamwork',
      sub: 'Trabalhar em equipe, reagir a notícias, e dar opinião',
      branches: [
        {
          icon: '👥', name: 'Working in teams',
          leaves: TEAMCOLL.map(function (t) { return { en: t.en, pt: t.pt }; }),
          note: '"team" pode ser singular ou plural: "The team is/are planning the project" ' +
                '— os dois estão certos.'
        },
        {
          icon: '🏆', name: 'Superlatives',
          leaves: [
            { en: 'fast → the fastest', pt: 'curto → the + -est' },
            { en: 'expensive → the most expensive', pt: 'longo → the most + adjetivo' },
            { en: 'easy → the easiest', pt: 'termina em -y → the + -iest' },
            { en: 'good → the best / bad → the worst', pt: 'irregulares' }
          ],
          note: 'Superlativo sempre com "the" na frente — "the best", "the biggest".'
        },
        {
          icon: '😲', name: 'Responding to news',
          leaves: NEWSRESP.map(function (n) { return { en: n.en, pt: n.type }; }),
          note: 'Boa notícia, má notícia ou surpresa — cada uma tem sua própria reação. ' +
                'Reagir "sem graça" soa estranho em inglês, mais que em português.'
        },
        {
          icon: '💬', name: 'Giving opinions',
          leaves: OPINION.map(function (o) { return { en: o, pt: '' }; }),
          note: '"I\'m not so sure" é um jeito educado de discordar sem ser direto demais.'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 37" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🤝',
        title: 'Working with words',
        goal: 'Falar do que a equipe faz — colocações de trabalho em equipe.',
        comp: 'Você usa as colocações certas (attend meetings, make decisions, solve ' +
              'problems) pra descrever como uma equipe trabalha.',
        live: ['Working in teams', 'Team collocations', 'Teamwork culture'],
        nextLive: 'Semana 2 · Language at work — superlatives.',
        bridge: 'Na aula vocês viram as colocações com o exemplo de empresa do livro. Aqui a ' +
                'equipe é outra — mas "make decisions", "solve problems" são as mesmas.',
        ican: [
          'I can use collocations about teamwork.',
          "I can describe how a team works.",
          'I can talk about team culture.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — teamwork', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique a colocação', tag: 'listening',
            items: TEAMCOLL.slice(0, 4).map(function (t) {
              var others = DF.shuffle(TEAMCOLL.filter(function (o) { return o.en !== t.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be10w1:radar:' + t.en,
                title: '🤝 O que você ouviu?',
                tts: t.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: t.en,
                options: DF.shuffle([{ label: t.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: t.en + ' = ' + t.pt, feedbackTts: t.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: como a equipe trabalha', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be10w1:drl:1', unit: 10, waSec: 'Drill · Teamwork',
                title: '🔁 Drill — a equipe faz', focus: 'colocação',
                frame: 'Our team ___ every week.', ptHint: 'Nossa equipe ___ toda semana.',
                slots: ['attends meetings', 'plans projects', 'makes decisions', 'develops ideas'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Como a equipe trabalha', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be10w1:dlg:1',
                title: '🎧 Elena descreve a cultura de equipe',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Noah', en: 'How does your team work?' },
                  { who: 'Elena', en: "We attend meetings every Tuesday and make decisions together." },
                  { who: 'Noah', en: 'Do you have a manager?' },
                  { who: 'Elena', en: "No, everyone in the group develops ideas and finds solutions." }
                ],
                question: 'Quando a equipe se reúne?',
                options: DF.shuffle([
                  { label: 'Toda terça-feira', correct: true }, { label: 'Toda sexta' },
                  { label: 'Uma vez por mês' }, { label: 'Não disse' }
                ]),
                expl: '"We attend meetings every Tuesday."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be10w1:dlg:2',
                title: '🎧 Resolvendo um problema técnico',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: 'Our team has a technical problem with the system.' },
                  { who: 'Kenji', en: "Let's find a solution together." },
                  { who: 'Priya', en: 'Good idea. We work better as a team anyway.' }
                ],
                question: 'Que tipo de problema a equipe tem?',
                options: DF.shuffle([
                  { label: 'Técnico, com o sistema', correct: true },
                  { label: 'De comunicação' }, { label: 'Financeiro' }, { label: 'Não disse' }
                ]),
                expl: '"Our team has a technical problem with the system."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be10w1:bc:1', unit: 10, waSec: 'Backchain',
                title: '🧱 Como a equipe trabalha', ptHint: 'Nós participamos de reuniões toda terça e tomamos decisões juntos.',
                chain: ['together', 'decisions together', 'and make decisions together',
                        'meetings every Tuesday and make decisions together',
                        'We attend meetings every Tuesday and make decisions together.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be10w1:c1', title: '🤝 Qual colocação?',
                main: 'To think of ways of fixing a problem.',
                options: DF.shuffle([{ label: 'find solutions', correct: true }, { label: 'attend meetings' }]),
                expl: 'find solutions = encontrar soluções.' },
              { ui: 'type', cat: 'voc', srsId: 'be10w1:t1', title: '🔧 Complete a colocação:',
                main: 'make ___ (decidir o que fazer)', answers: ['decisions'], expl: 'make decisions.' },
              { ui: 'order', cat: 'fun', srsId: 'be10w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'We solve problems together',
                expl: 'We solve problems together.' },
              { ui: 'match', cat: 'fun', srsId: 'be10w1:match:1', title: '🔗 Ligue verbo e substantivo:',
                pairs: [['attend', 'meetings'], ['make', 'decisions'],
                        ['develop', 'ideas'], ['solve', 'problems']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale da sua equipe', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w1:build:1', unit: 10, waSec: 'Sua vez',
                title: '🗣️ Diga como sua equipe trabalha',
                prompt: 'Use duas colocações de trabalho em equipe.',
                example: 'We attend meetings every week and we solve problems together.',
                mustUse: ['attend meetings'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A cultura de equipe completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w1+:b1', unit: 10, waSec: 'Praticar mais',
                title: '🔥 Descreva a cultura da sua equipe em 3 frases',
                prompt: 'Grave três frases usando colocações diferentes.',
                example: 'We attend meetings every Monday. We make decisions together. We ' +
                         'develop new ideas as a team.',
                mustUse: ['attend meetings'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de teamwork', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Our team ___ every week.',
                  pool: ['attends meetings', 'plans projects', 'makes decisions', 'develops ideas'],
                  focus: 'colocação', ptHint: 'Nossa equipe ___ toda semana.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 38" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '🏆',
        title: 'Language at work',
        goal: 'Dizer qual é o melhor, o maior, o mais barato — superlatives.',
        comp: 'Você forma superlativos corretamente (the fastest, the most expensive, the ' +
              'best/worst) pra falar do máximo ou mínimo entre três ou mais coisas.',
        live: ['Superlatives — short adjectives (the +est)', 'Superlatives — long adjectives (the most + adj)', 'Irregular superlatives'],
        nextLive: 'Semana 3 · Practically speaking — responding to news, e Business ' +
                   'communication — giving opinions.',
        bridge: 'Na aula vocês praticaram superlativos com as fábricas do livro. Aqui a ' +
                'comparação é outra — mas a regra do "the" + -est/most não muda.',
        ican: [
          'I can form superlative adjectives correctly.',
          'I can use "the" before superlatives.',
          'I can use irregular superlatives (the best, the worst).'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — superlatives', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: o melhor, o maior', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be10w2:drl:1', unit: 10, waSec: 'Drill · Superlatives',
                title: '🔁 Drill — o superlativo', focus: 'superlativo',
                frame: 'This is ___ solution.', ptHint: 'Essa é ___ solução.',
                slots: ['the best', 'the easiest', 'the most expensive', 'the worst'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Comparando as três equipes', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be10w2:dlg:1',
                title: '🎧 Sara escolhe o melhor candidato',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Sara', en: 'Who is the best candidate for team leader?' },
                  { who: 'Marco', en: 'I think Priya is the most experienced.' },
                  { who: 'Sara', en: 'And who has the best ideas?' },
                  { who: 'Marco', en: 'Kenji, definitely. He has the most imaginative solutions.' }
                ],
                question: 'Quem tem as ideias mais imaginativas?',
                options: DF.shuffle([
                  { label: 'Kenji', correct: true }, { label: 'Priya' },
                  { label: 'Marco' }, { label: 'Não disse' }
                ]),
                expl: '"He has the most imaginative solutions."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be10w2:dlg:2',
                title: '🎧 A pior situação',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Elena', en: "This is the worst problem we've had this year." },
                  { who: 'Noah', en: 'What is the fastest solution?' },
                  { who: 'Elena', en: 'The fastest solution is to call the supplier now.' }
                ],
                question: 'Qual é a solução mais rápida, segundo a Elena?',
                options: DF.shuffle([
                  { label: 'Ligar pro fornecedor agora', correct: true },
                  { label: 'Esperar até amanhã' }, { label: 'Mudar de fornecedor' }, { label: 'Não disse' }
                ]),
                expl: '"The fastest solution is to call the supplier now."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be10w2:bc:1', unit: 10, waSec: 'Backchain',
                title: '🧱 O melhor candidato', ptHint: 'Priya é a mais experiente da equipe.',
                chain: ['team', 'in the team', 'experienced in the team',
                        'the most experienced in the team', 'Priya is the most experienced in the team.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be10w2:t1', title: '🔧 Superlativo:',
                main: 'fast → the ___', answers: ['fastest'], expl: 'curto → the + -est.', feedbackTts: 'fastest' },
              { ui: 'type', cat: 'gra', srsId: 'be10w2:t2', title: '🔧 Superlativo:',
                main: 'expensive → the most ___', answers: ['expensive'], expl: 'longo → the most + adjetivo.' },
              { ui: 'type', cat: 'gra', srsId: 'be10w2:t3', title: '🔧 Irregular:',
                main: 'bad → the ___', answers: ['worst'], expl: 'bad → the worst.' },
              { ui: 'choice', cat: 'gra', srsId: 'be10w2:c1', title: '🔧 -y → -iest:',
                main: 'easy → the ___',
                options: DF.shuffle([{ label: 'easiest', correct: true }, { label: 'most easy' }]),
                expl: 'termina em -y → the + -iest.' },
              { ui: 'order', cat: 'fun', srsId: 'be10w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'This is the best solution',
                expl: 'This is the best solution.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale do melhor/pior da sua equipe', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w2:build:1', unit: 10, waSec: 'Sua vez',
                title: '🗣️ Use um superlativo pra falar da sua equipe',
                prompt: 'Use "the best" ou "the most..." pra descrever alguém ou algo.',
                example: "She's the most experienced person on my team.", mustUse: ['the most'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de superlativos', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w2+:b1', unit: 10, waSec: 'Praticar mais',
                title: '🔥 Descreva três coisas com superlativos diferentes',
                prompt: 'Grave três frases com the best/the worst/the most.',
                example: 'This is the best idea. That is the worst problem. She is the most experienced.',
                mustUse: ['the best'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de superlativos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'This is ___ solution.',
                  pool: ['the best', 'the easiest', 'the most expensive', 'the worst'],
                  focus: 'superlativo', ptHint: 'Essa é ___ solução.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 39" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '😲',
        title: 'Practically speaking',
        goal: 'Reagir a notícias, e dar sua opinião de forma educada.',
        comp: 'Você reage a notícias boas, ruins ou surpreendentes de forma natural, e dá ' +
              'sua opinião, concordando ou discordando educadamente.',
        live: [
          "How to respond to news",
          "Business communication: giving opinions",
          'Key expressions: agreeing and disagreeing'
        ],
        bridge: 'Na aula vocês praticaram reações a notícias e opiniões com o relatório do ' +
                'livro. Aqui a notícia é outra — mas "In my opinion..." é a mesma expressão.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 10.',
        ican: [
          'I can respond naturally to good, bad or surprising news.',
          "I can ask for someone's opinion.",
          'I can give my opinion.',
          'I can agree or disagree politely.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — news & opinions', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: reagindo e opinando', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be10w3:drl:news', unit: 10, waSec: 'Drill · News',
                title: '🔁 Drill 1 — reagindo', focus: 'reação',
                frame: '___', ptHint: '___',
                slots: NEWSRESP.map(function (n) { return n.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'be10w3:drl:opinion', unit: 10, waSec: 'Drill · Opinion',
                title: '🔁 Drill 2 — dando opinião', focus: 'opinião',
                frame: 'In my opinion, ___.', ptHint: 'Na minha opinião, ___.',
                slots: ["it's a good idea", "we should try it", "it's too risky", "we need more time"] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Reunião de equipe', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be10w3:dlg:1',
                title: '🎧 Notícia boa na reunião',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Priya', en: 'We won the new contract!' },
                  { who: 'Kenji', en: "Really? That's fantastic!" },
                  { who: 'Priya', en: 'What do you think we should do first?' },
                  { who: 'Kenji', en: 'In my opinion, we should call the client today.' }
                ],
                question: 'Como o Kenji reage à notícia?',
                options: DF.shuffle([
                  { label: '"That\'s fantastic!"', correct: true },
                  { label: '"That\'s terrible!"' }, { label: 'Não reage' }, { label: 'Fica em silêncio' }
                ]),
                expl: '"Really? That\'s fantastic!"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be10w3:dlg:2',
                title: '🎧 Discordando educadamente',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Elena', en: "I think we should increase the budget." },
                  { who: 'Noah', en: "I'm not so sure. It's already very high." },
                  { who: 'Elena', en: 'What do you suggest instead?' },
                  { who: 'Noah', en: "In my opinion, we should train the team instead." }
                ],
                question: 'Noah concorda em aumentar o orçamento?',
                options: DF.shuffle([
                  { label: 'Não, não tem tanta certeza', correct: true },
                  { label: 'Sim' }, { label: 'Não disse' }, { label: 'Concorda em parte' }
                ]),
                expl: "\"I'm not so sure.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be10w3:bc:1', unit: 10, waSec: 'Backchain',
                title: '🧱 Dando a opinião', ptHint: 'Na minha opinião, devemos ligar pro cliente hoje.',
                chain: ['today', 'client today', 'call the client today',
                        'we should call the client today',
                        'In my opinion, we should call the client today.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'be10w3:c1', title: '😲 Reação certa:',
                main: 'We lost the contract. Como reagir?',
                options: DF.shuffle([{ label: "Oh no, that's terrible.", correct: true },
                  { label: "That's fantastic!" }]),
                expl: 'Notícia ruim → reação de pesar.' },
              { ui: 'order', cat: 'fun', srsId: 'be10w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'What is your opinion',
                expl: "What's your opinion?" },
              { ui: 'match', cat: 'fun', srsId: 'be10w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["I got a promotion!", 'Wow, congratulations!'],
                  ["We lost the client.", "Oh no, that's terrible."],
                  ['What do you think?', "In my opinion, it's a good idea."]
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Reaja e opine de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w3:build:1', unit: 10, waSec: 'Sua vez',
                title: '🗣️ Reaja a uma notícia e dê sua opinião',
                prompt: 'Use uma reação e "In my opinion...".',
                example: "That's fantastic! In my opinion, we should celebrate.", mustUse: ['In my opinion'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A conversa completa, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w3+:b1', unit: 10, waSec: 'Praticar mais',
                title: '🔥 Reaja, dê opinião e discorde',
                prompt: 'Grave: uma reação a notícia, sua opinião, e uma discordância educada.',
                example: "That's great news! In my opinion, we should move fast. I'm not so " +
                         "sure about the budget though.",
                mustUse: ['In my opinion'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de reações', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'In my opinion, ___.',
                  pool: ["it's a good idea", "we should try it", "it's too risky", "we need more time"],
                  focus: 'opinião', ptHint: 'Na minha opinião, ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 40" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: discutir um problema em equipe, do início ao fim.',
        comp: 'Você apresenta um problema, pede e dá opiniões, concorda/discorda, e chega a ' +
              'uma solução — os itens do speaking test.',
        live: [
          'Talking point: teamwork and personality types',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (reunião de equipe pra resolver um problema)'
        ],
        bridge: 'Na aula vocês discutiram tipos de personalidade em equipe e o professor ' +
                'aplicou o teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — ' +
                'apresentar um problema, pedir opiniões e encontrar uma solução.',
        nextLive: 'Unit 11 — Travel. Começa na segunda-feira seguinte.',
        ican: [
          'I can present and explain a problem.',
          'I can ask for opinions.',
          'I can give my opinion.',
          'I can agree, disagree, and find a solution.',
          'I can complete the Unit 10 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'Reunião de equipe', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w4:g:1', unit: 10, waSec: 'Talking Point',
                title: '🎲 Apresente um problema de equipe',
                prompt: 'Descreva um problema simples de trabalho.',
                example: 'We have a problem — the team is too busy this month.', mustUse: ['problem'] },
              { ui: 'build', cat: 'fun', srsId: 'be10w4:g:2', unit: 10, waSec: 'Talking Point',
                title: '🎲 Peça e dê opiniões',
                prompt: 'Pergunte a opinião de alguém e depois dê a sua.',
                example: "What's your opinion? In my opinion, we should hire more people.",
                mustUse: ['In my opinion'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be10w4:pt:1', title: '🤝 Qual colocação?',
                main: 'To decide what will be done.',
                options: DF.shuffle([{ label: 'make decisions', correct: true }, { label: 'attend meetings' }]),
                expl: 'make decisions = tomar decisões.' },
              { ui: 'choice', cat: 'gra', srsId: 'be10w4:pt:2', title: '🔧 Superlativo:',
                main: 'This is ___ (good) idea we\'ve had.',
                options: DF.shuffle([{ label: 'the best', correct: true }, { label: 'the goodest' }]),
                expl: 'good → the best.' },
              { ui: 'choice', cat: 'gra', srsId: 'be10w4:pt:3', title: '😲 Reação certa:',
                main: 'I got a promotion!',
                options: DF.shuffle([{ label: 'Really? How amazing!', correct: true },
                  { label: "Oh no, that's terrible." }]),
                expl: 'Notícia boa → reação positiva.' },
              { ui: 'order', cat: 'fun', srsId: 'be10w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'What do you think',
                expl: 'What do you think?' },
              { ui: 'match', cat: 'fun', srsId: 'be10w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['What do you think?', 'In my opinion, yes.'],
                  ['Do you agree?', "I'm not so sure."],
                  ['We won the contract!', "That's fantastic!"]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w4:st:1', unit: 10, waSec: 'Speaking Test',
                title: '🏆 Item 1 — present the problem',
                prompt: 'Apresente e explique um problema.',
                example: 'We have a problem with our delivery times.', mustUse: ['problem'] },
              { ui: 'build', cat: 'fun', srsId: 'be10w4:st:2', unit: 10, waSec: 'Speaking Test',
                title: '🏆 Item 2 — ask for opinions',
                prompt: 'Peça a opinião de alguém.',
                example: "What's your opinion?", mustUse: ['opinion'] },
              { ui: 'build', cat: 'fun', srsId: 'be10w4:st:3', unit: 10, waSec: 'Speaking Test',
                title: '🏆 Item 3 — give your opinion',
                prompt: 'Dê sua opinião.',
                example: "In my opinion, we should hire more staff.", mustUse: ['In my opinion'] },
              { ui: 'build', cat: 'fun', srsId: 'be10w4:st:4', unit: 10, waSec: 'Speaking Test',
                title: '🏆 Item 4 — find a solution',
                prompt: 'Proponha uma solução final.',
                example: "Let's find a solution together — we can hire a freelancer.",
                mustUse: ["Let's"],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A reunião completa numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be10w4+:b1', unit: 10, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave tudo: apresente o problema, peça opinião, dê a sua, e proponha solução.',
                example: "We have a problem with our delivery times. What's your opinion? In " +
                         "my opinion, we should hire more staff. Let's find a solution together.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 10', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Our team ___ every week.',
                  pool: ['attends meetings', 'plans projects', 'makes decisions', 'develops ideas'],
                  focus: 'colocação', ptHint: 'Nossa equipe ___ toda semana.', n: 3 },
                { frame: 'In my opinion, ___.',
                  pool: ["it's a good idea", "we should try it", "it's too risky", "we need more time"],
                  focus: 'opinião', ptHint: 'Na minha opinião, ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
