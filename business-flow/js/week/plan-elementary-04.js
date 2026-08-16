/* ENGLISH FLOW — week/plan-elementary-04.js
   BUSINESS ELEMENTARY · UNIT 4 "Technology"

   Numeração corrida do Felipe: Unit 4 = semanas 13–16.
     semana 13 = U4 W1 · Working with words (technology & functions)
     semana 14 = U4 W2 · Language at work (adverbs of frequency + questions)
     semana 15 = U4 W3 · Practically speaking (sequencing words) + Business
                 communication (asking for and offering help)
     semana 16 = U4 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Verbos de tecnologia e
   gramática são conhecimento geral, mas os sistemas, apps e situações são
   autorais — universo Whiterock Consultancy, nunca Paym/Staples do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const TECHVERB = [
    { en: 'log in to', pt: 'entrar em (uma conta)' },
    { en: 'access', pt: 'acessar' },
    { en: 'click on', pt: 'clicar em' },
    { en: 'download', pt: 'baixar' },
    { en: 'key in', pt: 'digitar' },
    { en: 'register', pt: 'cadastrar-se' },
    { en: 'select', pt: 'selecionar' },
    { en: 'send', pt: 'enviar' }
  ];
  const TECHNOUN = [
    { en: 'password', pt: 'senha' },
    { en: 'username', pt: 'nome de usuário' },
    { en: 'battery', pt: 'bateria' },
    { en: 'screen', pt: 'tela' },
    { en: 'contact list', pt: 'lista de contatos' },
    { en: 'app', pt: 'aplicativo' }
  ];
  const ADVFREQ = [
    { en: 'always', pt: 'sempre', pct: '100%' },
    { en: 'usually', pt: 'geralmente', pct: '~80%' },
    { en: 'often', pt: 'frequentemente', pct: '~60%' },
    { en: 'sometimes', pt: 'às vezes', pct: '~40%' },
    { en: 'rarely', pt: 'raramente', pct: '~10%' },
    { en: 'never', pt: 'nunca', pct: '0%' }
  ];

  DF.PLAN.elementary[4] = {
    unit: 4,
    title: 'Technology',
    subtitle: 'Usar tecnologia e pedir ajuda',
    icon: '📱',

    mindmap: {
      center: 'Technology',
      sub: 'Descrever o uso de tecnologia e pedir/oferecer ajuda',
      branches: [
        {
          icon: '🖱️', name: 'Tech verbs',
          leaves: TECHVERB.map(function (v) { return { en: v.en, pt: v.pt }; }),
          note: '"log in to" + conta/sistema. "click on" + botão/link. Cada verbo combina ' +
                'com um substantivo específico — decore em par.'
        },
        {
          icon: '🔐', name: 'Tech nouns',
          leaves: TECHNOUN.map(function (n) { return { en: n.en, pt: n.pt }; }),
          note: 'password ≠ username — a senha é secreta, o usuário é o "nome de login".'
        },
        {
          icon: '📊', name: 'Adverbs of frequency',
          leaves: ADVFREQ.map(function (a) { return { en: a.en, pt: a.pt + ' (' + a.pct + ')' }; }),
          note: 'Advérbio de frequência vem <b>antes</b> do verbo principal ("I always work"), ' +
                'mas <b>depois</b> do verbo be ("I am always tired").'
        },
        {
          icon: '🔢', name: 'Sequencing words',
          leaves: [
            { en: 'First of all,', pt: 'primeiro' },
            { en: 'Then,', pt: 'depois' },
            { en: 'Next,', pt: 'em seguida' },
            { en: 'After that,', pt: 'depois disso' },
            { en: 'Finally,', pt: 'por fim' }
          ],
          note: 'Organiza qualquer explicação passo a passo — igual em português, mas ' +
                'sempre com vírgula depois.'
        },
        {
          icon: '🤝', name: 'Asking for and offering help',
          leaves: [
            { en: 'Can you help me? / Can you give me a hand?', pt: 'pedir ajuda' },
            { en: 'Can I help? / Do you want a hand?', pt: 'oferecer ajuda' },
            { en: 'Yes, please. / That would be great.', pt: 'aceitar' },
            { en: "You're welcome.", pt: 'responder ao agradecimento' }
          ],
          note: '"Do you want a hand?" é informal e comum — não é literal "mão", é "ajuda".'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 13" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '📱',
        title: 'Working with words',
        goal: 'Descrever ações de tecnologia — logar, acessar, baixar, cadastrar.',
        comp: 'Você entende e usa os verbos de tecnologia certos com o substantivo certo ' +
              '(log in to an account, click on a button, download an app).',
        live: ['Technology verbs', 'Technology nouns', 'Mobile banking'],
        nextLive: 'Semana 2 · Language at work — adverbs of frequency e questions.',
        bridge: 'Na aula vocês viram os verbos de tecnologia com o exemplo de mobile ' +
                'banking do livro. Aqui o app é outro — mas os verbos são os mesmos.',
        ican: [
          'I can use technology verbs like log in, access, download and register.',
          "I can name common technology nouns (password, username, battery...).",
          'I can describe a simple online action.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — tech verbs & nouns', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o verbo', tag: 'listening',
            items: TECHVERB.slice(0, 4).map(function (v) {
              var others = DF.shuffle(TECHVERB.filter(function (o) { return o.en !== v.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be4w1:radar:' + v.en,
                title: '🖱️ Que ação você ouviu?',
                tts: v.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: v.en,
                options: DF.shuffle([{ label: v.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: v.en + ' = ' + v.pt, feedbackTts: v.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: ações de tecnologia', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be4w1:drl:1', unit: 4, waSec: 'Drill · Tech verbs',
                title: '🔁 Drill 1 — o verbo certo', focus: 'verbo',
                frame: 'I need to ___ my account.', ptHint: 'Eu preciso ___ minha conta.',
                slots: ['log in to', 'access', 'register'] },
              { ui: 'drill', cat: 'pro', srsId: 'be4w1:drl:2', unit: 4, waSec: 'Drill · Tech nouns',
                title: '🔁 Drill 2 — o que você digita', focus: 'substantivo',
                frame: 'Enter your ___.', ptHint: 'Digite seu(sua) ___.',
                slots: TECHNOUN.map(function (n) { return n.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Usando o app do banco', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be4w1:dlg:1',
                title: '🎧 Elena ajuda o Marco com o app',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Marco', en: "I can't log in to the app." },
                  { who: 'Elena', en: 'Did you download it first?' },
                  { who: 'Marco', en: "Yes, I did. But I don't have a password." },
                  { who: 'Elena', en: 'You need to register first. Click on "Sign up".' }
                ],
                question: 'O que o Marco precisa fazer primeiro?',
                options: DF.shuffle([
                  { label: 'Se cadastrar', correct: true },
                  { label: 'Baixar o app de novo' }, { label: 'Trocar de celular' }, { label: 'Nada' }
                ]),
                expl: '"You need to register first."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be4w1:dlg:2',
                title: '🎧 Acessando os contatos',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: 'How do I access my contact list?' },
                  { who: 'Noah', en: "Click on the contacts icon. It's the one with a person." },
                  { who: 'Priya', en: 'OK, I can see it now. Thanks!' }
                ],
                question: 'O que a Priya quer acessar?',
                options: DF.shuffle([
                  { label: 'A lista de contatos', correct: true },
                  { label: 'A senha' }, { label: 'A bateria' }, { label: 'O app do banco' }
                ]),
                expl: '"How do I access my contact list?"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be4w1:bc:1', unit: 4, waSec: 'Backchain',
                title: '🧱 O passo a passo', ptHint: 'Você precisa se cadastrar primeiro.',
                chain: ['first', 'register first', 'need to register first',
                        'You need to register first.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be4w1:c1', title: '🔧 Verbo certo:',
                main: '___ the app to your phone before you use it.',
                options: DF.shuffle([{ label: 'Download', correct: true }, { label: 'Send' }]),
                expl: 'download = baixar.' },
              { ui: 'type', cat: 'voc', srsId: 'be4w1:t1', title: '🔧 Complete a palavra:',
                main: 'u_ _r_ _me (nome de login)', answers: ['username'], expl: 'username.' },
              { ui: 'order', cat: 'fun', srsId: 'be4w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'Click on the link to register',
                expl: 'Click on the link to register.' },
              { ui: 'match', cat: 'fun', srsId: 'be4w1:match:1', title: '🔗 Ligue o verbo ao substantivo:',
                pairs: [['log in to', 'an account'], ['click on', 'a button'],
                        ['download', 'an app'], ['enter', 'a password']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Explique um app que você usa', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w1:build:1', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Diga como você usa um app',
                prompt: 'Use pelo menos dois verbos de tecnologia.',
                example: 'I log in to my email every morning. I download files and send them to my team.',
                mustUse: ['log in'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'O passo a passo completo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w1+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Explique como fazer login num app',
                prompt: 'Grave: baixar, cadastrar, digitar senha e entrar.',
                example: "First, download the app. Then, register. Enter your password and " +
                         "click on 'Log in'.",
                mustUse: ['log in'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de tecnologia', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I need to ___ my account.', pool: ['log in to', 'access', 'register'],
                  focus: 'verbo', ptHint: 'Eu preciso ___ minha conta.', n: 3 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 14" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '📊',
        title: 'Language at work',
        goal: 'Dizer com que frequência você faz algo, e fazer perguntas com Wh-.',
        comp: 'Você usa always/usually/often/sometimes/rarely/never na posição certa, e faz ' +
              'perguntas completas com Who/What/Where/Why/How often.',
        live: ['Adverbs of frequency', 'Word order — adverb position', 'Wh- questions review'],
        nextLive: 'Semana 3 · Practically speaking — sequencing words, e Business ' +
                   'communication — asking for and offering help.',
        bridge: 'Na aula vocês praticaram advérbios de frequência com o texto dos robôs do ' +
                'livro. Aqui a rotina é outra — mas a posição do advérbio não muda.',
        ican: [
          'I can use adverbs of frequency (always, usually, often, sometimes, rarely, never).',
          'I can put the adverb in the right position in a sentence.',
          'I can ask Wh- questions about routines.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — adverbs of frequency', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: com que frequência', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be4w2:drl:1', unit: 4, waSec: 'Drill · Frequency',
                title: '🔁 Drill 1 — antes do verbo', focus: 'frequência',
                frame: 'I ___ check my email in the morning.', ptHint: 'Eu ___ confiro o e-mail de manhã.',
                slots: ADVFREQ.map(function (a) { return a.en; }) },
              { ui: 'drill', cat: 'gra', srsId: 'be4w2:drl:2', unit: 4, waSec: 'Drill · Frequency with be',
                title: '🔁 Drill 2 — depois do "be"', focus: 'frequência',
                frame: 'She is ___ late for work.', ptHint: 'Ela ___ está atrasada pro trabalho.',
                slots: ADVFREQ.map(function (a) { return a.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'A rotina no trabalho', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be4w2:dlg:1',
                title: '🎧 Kenji pergunta sobre a rotina de Sara',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Kenji', en: 'How often do you check your emails?' },
                  { who: 'Sara', en: 'I always check them first thing in the morning.' },
                  { who: 'Kenji', en: 'Do you ever work from home?' },
                  { who: 'Sara', en: "I sometimes work from home on Fridays." }
                ],
                question: 'Quando a Sara às vezes trabalha de casa?',
                options: DF.shuffle([
                  { label: 'Sextas-feiras', correct: true }, { label: 'Segundas' },
                  { label: 'Nunca' }, { label: 'Todos os dias' }
                ]),
                expl: '"I sometimes work from home on Fridays."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be4w2:dlg:2',
                title: '🎧 Nunca chega atrasado',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Elena', en: 'Is Noah usually late for meetings?' },
                  { who: 'Priya', en: "No, he's never late. He's always on time." },
                  { who: 'Elena', en: 'Does he often travel for work?' },
                  { who: 'Priya', en: 'He rarely travels. He usually works from the office.' }
                ],
                question: 'Noah costuma chegar atrasado nas reuniões?',
                options: DF.shuffle([
                  { label: 'Não, nunca', correct: true }, { label: 'Sim, sempre' },
                  { label: 'Às vezes' }, { label: 'Não disse' }
                ]),
                expl: "\"No, he's never late. He's always on time.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be4w2:bc:1', unit: 4, waSec: 'Backchain',
                title: '🧱 A pergunta de frequência', ptHint: 'Com que frequência você verifica seu e-mail?',
                chain: ['email', 'your email', 'check your email', 'do you check your email',
                        'How often do you check your email?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be4w2:t1', title: '🔧 Reescreva com o advérbio:',
                main: 'I check emails. (always) →', answers: ['I always check emails.'],
                expl: 'Advérbio antes do verbo principal.' },
              { ui: 'type', cat: 'gra', srsId: 'be4w2:t2', title: '🔧 Reescreva com o advérbio:',
                main: 'She is late. (never) →', answers: ['She is never late.'],
                expl: 'Advérbio depois do verbo "be".' },
              { ui: 'choice', cat: 'gra', srsId: 'be4w2:c1', title: '🔧 Posição correta:',
                main: 'Qual frase está certa?',
                options: DF.shuffle([{ label: 'I never work on Sundays.', correct: true },
                  { label: 'I work never on Sundays.' }]),
                expl: 'O advérbio vem antes do verbo principal.' },
              { ui: 'order', cat: 'fun', srsId: 'be4w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'How often do you take a break',
                expl: 'How often do you take a break?' },
              { ui: 'match', cat: 'fun', srsId: 'be4w2:match:1', title: '🔗 Ligue à porcentagem:',
                pairs: [['always', '100%'], ['never', '0%'], ['usually', '~80%'], ['rarely', '~10%']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale da sua rotina', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w2:build:1', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Diga com que frequência você faz algo',
                prompt: 'Use dois advérbios de frequência diferentes.',
                example: 'I always check my phone in the morning. I rarely work on weekends.',
                mustUse: ['always'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de frequência', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w2+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Sua rotina completa com 4 advérbios',
                prompt: 'Grave 4 frases, uma com cada advérbio: always, usually, sometimes, never.',
                example: 'I always check email. I usually work from the office. I sometimes ' +
                         "travel. I never miss a deadline.",
                mustUse: ['always'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de frequência', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I ___ check my email in the morning.',
                  pool: ADVFREQ.map(function (a) { return a.en; }),
                  focus: 'frequência', ptHint: 'Eu ___ confiro o e-mail de manhã.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 15" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '🤝',
        title: 'Practically speaking',
        goal: 'Explicar um passo a passo, e pedir ou oferecer ajuda.',
        comp: 'Você organiza uma explicação com palavras de sequência, e pede/oferece/aceita ' +
              'ajuda de forma natural.',
        live: [
          'Sequencing words — First of all, Then, Next, After that, Finally',
          "Business communication: asking for and offering help",
          'Key expressions: accepting and responding to thanks'
        ],
        bridge: 'Na aula vocês praticaram sequência com o processo dos robôs do livro. Aqui ' +
                'o processo é outro — mas "First of all" e "Finally" são as mesmas.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 4.',
        ican: [
          'I can explain a process step by step using sequencing words.',
          'I can ask someone for help.',
          'I can offer and accept help.',
          'I can respond politely when someone thanks me.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — sequencing & helping', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: passo a passo e ajuda', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be4w3:drl:seq', unit: 4, waSec: 'Drill · Sequencing',
                title: '🔁 Drill 1 — a ordem dos passos', focus: 'sequência',
                frame: '___,', ptHint: '___,',
                slots: ['First of all', 'Then', 'Next', 'After that', 'Finally'] },
              { ui: 'drill', cat: 'pro', srsId: 'be4w3:drl:help', unit: 4, waSec: 'Drill · Help',
                title: '🔁 Drill 2 — pedindo ajuda', focus: 'ajuda',
                frame: '___', ptHint: '___',
                slots: ['Can you help me?', 'Can you give me a hand?', "I don't know how to do this.",
                        'How do I do this?'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Pedindo ajuda com o sistema', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be4w3:dlg:1',
                title: '🎧 Marco não consegue compartilhar o arquivo',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Marco', en: "Can you help me? I can't share this file." },
                  { who: 'Elena', en: 'Sure. Do you want a hand?' },
                  { who: 'Marco', en: "Yes, please. I don't know how to do this." },
                  { who: 'Elena', en: 'First of all, click on the folder. Then, select "share".' }
                ],
                question: 'O que a Elena diz primeiro?',
                options: DF.shuffle([
                  { label: 'Clique na pasta', correct: true },
                  { label: 'Selecione compartilhar' }, { label: 'Digite a senha' }, { label: 'Nada' }
                ]),
                expl: '"First of all, click on the folder."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be4w3:dlg:2',
                title: '🎧 Agradecendo a ajuda',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'Thanks for your help.' },
                  { who: 'Priya', en: "You're welcome. Let me know if you need anything else." },
                  { who: 'Kenji', en: 'I will, thanks.' }
                ],
                question: 'O que a Priya responde ao agradecimento?',
                options: DF.shuffle([
                  { label: "You're welcome.", correct: true },
                  { label: "Thank you too." }, { label: "No problem, bye." }, { label: 'Nada' }
                ]),
                expl: "\"You're welcome.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be4w3:bc:1', unit: 4, waSec: 'Backchain',
                title: '🧱 Oferecendo ajuda', ptHint: 'Você quer uma ajuda?',
                chain: ['hand', 'a hand', 'want a hand', 'you want a hand',
                        'Do you want a hand?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be4w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Can you give me a hand',
                expl: 'Can you give me a hand?' },
              { ui: 'order', cat: 'fun', srsId: 'be4w3:ord:2',
                title: '🧩 Monte a frase:', answer: 'First of all click on the button',
                expl: 'First of all, click on the button.' },
              { ui: 'match', cat: 'fun', srsId: 'be4w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Can you help me?', 'Yes, of course.'],
                  ['Do you want a hand?', 'That would be great.'],
                  ['Thanks a lot.', "You're welcome."]
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'be4w3:c1', title: '🔢 Palavra de sequência:',
                main: '"___" vem no final de uma explicação.',
                options: DF.shuffle([{ label: 'Finally', correct: true }, { label: 'First of all' }]),
                expl: 'Finally = por fim.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Explique um processo de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w3:build:1', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Explique um processo em 3 passos',
                prompt: 'Use "First of all", "Then" e "Finally" pra explicar algo simples.',
                example: 'First of all, open the app. Then, log in. Finally, click on your account.',
                mustUse: ['First of all'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Pedir e receber ajuda, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w3+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis do pedido de ajuda',
                prompt: 'Grave os dois lados: peça ajuda, e a outra pessoa explica em 3 passos.',
                example: "Can you help me? I don't know how to do this. Sure, do you want a " +
                         "hand? First of all, click here. Then, enter your password. Finally, click submit.",
                mustUse: ['Can you help'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de sequência', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___,', pool: ['First of all', 'Then', 'Next', 'After that', 'Finally'],
                  focus: 'sequência', ptHint: '___,', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 16" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: ajudar alguém com um problema técnico, do início ao fim.',
        comp: 'Você oferece ajuda, explica um processo em passos, e conduz uma conversa sobre ' +
              'a empresa do visitante — os itens do speaking test.',
        live: [
          'Talking point: making use of technology — quão útil é cada produto',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (ajudar um visitante com uma máquina)'
        ],
        bridge: 'Na aula vocês discutiram produtos de tecnologia e o professor aplicou o ' +
                'teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — oferecer ' +
                'ajuda, explicar o processo, e perguntar sobre o visitante.',
        nextLive: 'Unit 5. Começa na segunda-feira seguinte.',
        ican: [
          'I can offer help to someone with a problem.',
          'I can explain how a machine or app works, step by step.',
          "I can ask a visitor about who they work for.",
          'I can ask how often someone does something.',
          'I can complete the Unit 4 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'Quão útil é essa tecnologia?', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w4:g:1', unit: 4, waSec: 'Talking Point',
                title: '🎲 Escolha um app ou produto e avalie',
                prompt: 'Diga se é muito útil, útil ou pouco útil, e por quê.',
                example: "My phone is very useful. I always use it for emails.", mustUse: ['useful'] },
              { ui: 'build', cat: 'fun', srsId: 'be4w4:g:2', unit: 4, waSec: 'Talking Point',
                title: '🎲 Explique como usar algo em 3 passos',
                prompt: 'Use First of all, Then e Finally.',
                example: 'First of all, open the app. Then, log in. Finally, select your account.',
                mustUse: ['First of all'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be4w4:pt:1', title: '🔧 Qual verbo?',
                main: 'You do this when you enter your username and password.',
                options: DF.shuffle([{ label: 'log in', correct: true }, { label: 'download' }]),
                expl: 'log in = entrar na conta.' },
              { ui: 'choice', cat: 'gra', srsId: 'be4w4:pt:2', title: '🔧 Posição do advérbio:',
                main: 'Escolha a frase certa.',
                options: DF.shuffle([{ label: 'She is always on time.', correct: true },
                  { label: 'She always is on time.' }]),
                expl: 'Advérbio depois do "be".' },
              { ui: 'order', cat: 'fun', srsId: 'be4w4:pt:3',
                title: '🧩 Ponha em ordem:', answer: 'How often do you check your phone',
                expl: 'How often do you check your phone?' },
              { ui: 'match', cat: 'fun', srsId: 'be4w4:pt:4', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Can you help me?', 'Yes, of course.'],
                  ['Do you want a hand?', 'That would be great.'],
                  ['Thanks a lot.', "You're welcome."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w4:st:1', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 1 — offer help',
                prompt: 'Ofereça ajuda pra alguém com um problema.',
                example: 'Do you want a hand?', mustUse: ['hand'] },
              { ui: 'build', cat: 'fun', srsId: 'be4w4:st:2', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 2 — explain how it works',
                prompt: 'Explique um processo simples em 2 ou 3 passos.',
                example: 'First of all, press the button. Then, enter your password.',
                mustUse: ['First of all'] },
              { ui: 'build', cat: 'fun', srsId: 'be4w4:st:3', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 3 — ask about their company',
                prompt: 'Pergunte pra quem a pessoa trabalha.',
                example: 'Who do you work for?', mustUse: ['work for'] },
              { ui: 'build', cat: 'fun', srsId: 'be4w4:st:4', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 4 — ask how often',
                prompt: 'Pergunte com que frequência a pessoa faz algo.',
                example: 'How often do you visit our office?', mustUse: ['How often'],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Ajudar o visitante numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be4w4+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave tudo: ofereça ajuda, explique o processo, e pergunte sobre a ' +
                        'empresa e a frequência das visitas.',
                example: "Do you want a hand? First of all, press the button. Then, enter your " +
                         "password. Who do you work for? How often do you visit our office?",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 4', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I need to ___ my account.', pool: ['log in to', 'access', 'register'],
                  focus: 'verbo', ptHint: 'Eu preciso ___ minha conta.', n: 3 },
                { frame: 'I ___ check my email in the morning.',
                  pool: ADVFREQ.map(function (a) { return a.en; }),
                  focus: 'frequência', ptHint: 'Eu ___ confiro o e-mail de manhã.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
