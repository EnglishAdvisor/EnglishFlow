/* ENGLISH FLOW — week/plan-elementary-08.js
   BUSINESS ELEMENTARY · UNIT 8 "Employment"

   Numeração corrida do Felipe: Unit 8 = semanas 29–32.
     semana 29 = U8 W1 · Working with words (personal qualities & job ads)
     semana 30 = U8 W2 · Language at work (present continuous)
     semana 31 = U8 W3 · Practically speaking (telling the time) + Business
                 communication (arranging to meet)
     semana 32 = U8 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Qualidades pessoais e
   gramática são conhecimento geral, mas as vagas, agendas e situações são
   autorais — universo Marcom Global, nunca Kasia/Bruno/Dolores do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const QUAL = [
    { en: 'energetic', pt: 'enérgico', def: 'have a lot of enthusiasm and energy' },
    { en: 'imaginative', pt: 'criativo', def: 'have new and exciting ideas' },
    { en: 'practical', pt: 'prático', def: 'good at dealing with real situations' },
    { en: 'friendly', pt: 'amigável', def: 'kind and pleasant to other people' },
    { en: 'focused', pt: 'focado', def: 'a clear, determined idea of what you want' },
    { en: 'careful', pt: 'cuidadoso', def: 'a lot of thought and attention to what you do' },
    { en: 'patient', pt: 'paciente', def: 'able to wait without becoming angry' },
    { en: 'experienced', pt: 'experiente', def: 'knowledge or skill in a particular job' }
  ];
  const MEET = [
    'Can we arrange a meeting?', 'What time are you free?', 'Are you free on Monday?',
    "Sorry, I'm busy then.", 'Is Thursday OK for you?', "That's fine for me."
  ];

  DF.PLAN.elementary[8] = {
    unit: 8,
    title: 'Employment',
    subtitle: 'Qualidades pessoais, o que está acontecendo agora, e marcar reunião',
    icon: '💼',

    mindmap: {
      center: 'Employment',
      sub: 'Descrever pessoas, o que está rolando agora, e marcar um horário',
      branches: [
        {
          icon: '⭐', name: 'Personal qualities',
          leaves: QUAL.map(function (q) { return { en: q.en, pt: q.pt }; }),
          note: 'São adjetivos de personalidade pra vaga de emprego — cada um combina com ' +
                'um tipo de função (ex.: "imaginative" pra criação, "careful" pra segurança).'
        },
        {
          icon: '⏱️', name: 'Present continuous',
          leaves: [
            { en: "I'm working on it now.", pt: 'ação acontecendo agora' },
            { en: "She isn't working today.", pt: 'negativa' },
            { en: 'Are you working on any projects?', pt: 'pergunta' },
            { en: "What are you doing at the moment?", pt: 'pergunta Wh-' }
          ],
          note: 'am/is/are + verbo-ing. Usado pra agora mesmo ou "por estes dias" — não pra ' +
                'rotina fixa (isso é present simple).'
        },
        {
          icon: '🕐', name: 'Telling the time',
          leaves: [
            { en: "It's nine o'clock.", pt: 'hora cheia' },
            { en: "It's half past two.", pt: '2:30' },
            { en: "It's quarter to five.", pt: '4:45' },
            { en: "It's quarter past ten.", pt: '10:15' }
          ],
          note: '"half past" = e meia. "quarter to/past" = quinze pra/e quinze.'
        },
        {
          icon: '📅', name: 'Arranging to meet',
          leaves: MEET.map(function (m) { return { en: m, pt: '' }; }),
          note: 'Recusar sempre vem com "sorry" + sugestão de outro horário — nunca só "no".'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 29" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '💼',
        title: 'Working with words',
        goal: 'Descrever as qualidades certas pra cada tipo de vaga.',
        comp: 'Você usa adjetivos de qualidade pessoal (energetic, imaginative, careful...) ' +
              'pra descrever o perfil ideal pra uma vaga.',
        live: ['Personal qualities', 'Job adverts', 'Matching qualities to jobs'],
        nextLive: 'Semana 2 · Language at work — present continuous.',
        bridge: 'Na aula vocês viram os adjetivos com os anúncios de vaga do livro. Aqui as ' +
                'vagas são outras — mas os adjetivos são os mesmos.',
        ican: [
          'I can use adjectives to describe personal qualities.',
          'I can understand a simple job advert.',
          'I can say which qualities are needed for a job.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — personal qualities', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique a qualidade', tag: 'listening',
            items: QUAL.slice(0, 4).map(function (q) {
              var others = DF.shuffle(QUAL.filter(function (o) { return o.en !== q.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be8w1:radar:' + q.en,
                title: '⭐ Que qualidade você ouviu?',
                tts: q.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: q.en,
                options: DF.shuffle([{ label: q.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: q.en + ' = ' + q.pt, feedbackTts: q.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: descrevendo candidatos', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be8w1:drl:1', unit: 8, waSec: 'Drill · Qualities',
                title: '🔁 Drill — o candidato certo', focus: 'qualidade',
                frame: 'We need someone ___.', ptHint: 'Precisamos de alguém ___.',
                slots: QUAL.map(function (q) { return q.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'A vaga ideal', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be8w1:dlg:1',
                title: '🎧 Elena descreve o candidato ideal',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Noah', en: 'What are you looking for in this candidate?' },
                  { who: 'Elena', en: "Someone imaginative and focused for the design team." },
                  { who: 'Noah', en: 'Do they need experience?' },
                  { who: 'Elena', en: 'Yes, we need someone experienced in marketing.' }
                ],
                question: 'Que qualidades a Elena procura?',
                options: DF.shuffle([
                  { label: 'Criativo e focado', correct: true },
                  { label: 'Paciente e cuidadoso' }, { label: 'Enérgico e amigável' }, { label: 'Não disse' }
                ]),
                expl: '"Someone imaginative and focused."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be8w1:dlg:2',
                title: '🎧 O técnico de segurança',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'This job needs someone very careful.' },
                  { who: 'Priya', en: 'Why is that important?' },
                  { who: 'Kenji', en: "It's a technical job with dangerous machinery." }
                ],
                question: 'Por que a vaga precisa de alguém cuidadoso?',
                options: DF.shuffle([
                  { label: 'Trabalha com máquinas perigosas', correct: true },
                  { label: 'Lida com dinheiro' }, { label: 'Atende clientes' }, { label: 'Não disse' }
                ]),
                expl: "\"It's a technical job with dangerous machinery.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be8w1:bc:1', unit: 8, waSec: 'Backchain',
                title: '🧱 O perfil ideal', ptHint: 'Precisamos de alguém experiente em marketing.',
                chain: ['marketing', 'in marketing', 'experienced in marketing',
                        'someone experienced in marketing', 'We need someone experienced in marketing.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be8w1:c1', title: '⭐ Qual qualidade?',
                main: 'Have new and exciting ideas.',
                options: DF.shuffle([{ label: 'imaginative', correct: true }, { label: 'patient' }]),
                expl: 'imaginative = criativo.' },
              { ui: 'type', cat: 'voc', srsId: 'be8w1:t1', title: '🔧 Complete a palavra:',
                main: 'p_t__nt (não fica bravo, sabe esperar)', answers: ['patient'], expl: 'patient.' },
              { ui: 'order', cat: 'fun', srsId: 'be8w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'We need someone friendly and patient',
                expl: 'We need someone friendly and patient.' },
              { ui: 'match', cat: 'fun', srsId: 'be8w1:match:1', title: '🔗 Ligue à definição:',
                pairs: QUAL.slice(0, 4).map(function (q) { return [q.en, q.def]; }) }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Descreva suas qualidades', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be8w1:build:1', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Diga duas qualidades suas',
                prompt: 'Use "I\'m..." com dois adjetivos de qualidade.',
                example: "I'm energetic and focused.", mustUse: ["I'm"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A vaga inteira, com perfil completo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be8w1+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Descreva o candidato ideal pra 2 vagas diferentes',
                prompt: 'Grave: uma vaga técnica (careful, experienced) e uma criativa (imaginative, focused).',
                example: 'For the technical job, we need someone careful and experienced. ' +
                         'For the design job, we need someone imaginative and focused.',
                mustUse: ['need someone'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de qualidades', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'We need someone ___.', pool: QUAL.map(function (q) { return q.en; }),
                  focus: 'qualidade', ptHint: 'Precisamos de alguém ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 30" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '⏱️',
        title: 'Language at work',
        goal: 'Dizer o que está acontecendo agora — present continuous.',
        comp: 'Você usa am/is/are + verbo-ing nas formas positiva, negativa e de pergunta ' +
              'pra falar do que está acontecendo agora ou por estes dias.',
        live: ['Present continuous — positive, negative, questions', 'What are you doing at the moment?', 'Current projects'],
        nextLive: 'Semana 3 · Practically speaking — telling the time, e Business ' +
                   'communication — arranging to meet.',
        bridge: 'Na aula vocês praticaram present continuous com o escritório do livro. ' +
                'Aqui o projeto é outro — mas am/is/are + -ing não muda.',
        ican: [
          'I can use present continuous to talk about now.',
          'I can make negative sentences and questions.',
          "I can ask what someone is doing at the moment."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — present continuous', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be8w2:tf:1', unit: 8, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I am working from home."',
                ptHint: 'Eu estou trabalhando de casa.',
                rounds: [
                  { base: 'I am working from home.', cmd: 'Negative', answer: "I'm not working from home." },
                  { base: 'I am working from home.', cmd: 'Question', answer: 'Are you working from home?' },
                  { base: 'She is finishing the report.', cmd: 'Negative', answer: "She isn't finishing the report." },
                  { base: 'She is finishing the report.', cmd: 'Question', answer: 'Is she finishing the report?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'be8w2:tf:2', unit: 8, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "They are doing the training."',
                ptHint: 'Eles estão fazendo o treinamento.',
                rounds: [
                  { base: 'They are doing the training.', cmd: 'Negative', answer: "They aren't doing the training." },
                  { base: 'They are doing the training.', cmd: 'Question', answer: 'Are they doing the training?' },
                  { base: 'Is she working today?', cmd: 'Short answer — yes', answer: 'Yes, she is.' },
                  { base: 'Is she working today?', cmd: 'Short answer — no', answer: "No, she isn't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: o que está acontecendo agora', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be8w2:drl:1', unit: 8, waSec: 'Drill · Present continuous',
                title: '🔁 Drill — agora mesmo', focus: 'presente contínuo',
                frame: "I'm ___ at the moment.", ptHint: 'Eu estou ___ nesse momento.',
                slots: ['finishing the report', 'contacting a client', 'checking the emails',
                        'working on a project', 'preparing the meeting'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'O que você está fazendo', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be8w2:dlg:1',
                title: '🎧 Sara pergunta sobre o projeto',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Sara', en: 'What are you working on at the moment?' },
                  { who: 'Marco', en: "I'm designing the new website." },
                  { who: 'Sara', en: 'Are you working with anyone else?' },
                  { who: 'Marco', en: "Yes, I'm working with the marketing team." }
                ],
                question: 'No que o Marco está trabalhando?',
                options: DF.shuffle([
                  { label: 'No novo site', correct: true }, { label: 'No relatório' },
                  { label: 'Numa apresentação' }, { label: 'Não disse' }
                ]),
                expl: '"I\'m designing the new website."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be8w2:dlg:2',
                title: '🎧 Fora do escritório hoje',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: 'Is Kenji in the office today?' },
                  { who: 'Elena', en: "No, he isn't. He's working from home this week." },
                  { who: 'Priya', en: 'Is he coming to the meeting?' },
                  { who: 'Elena', en: "Yes, he's joining online." }
                ],
                question: 'Onde o Kenji está trabalhando essa semana?',
                options: DF.shuffle([
                  { label: 'De casa', correct: true }, { label: 'No escritório' },
                  { label: 'Em outra cidade' }, { label: 'Não disse' }
                ]),
                expl: "\"He's working from home this week.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be8w2:bc:1', unit: 8, waSec: 'Backchain',
                title: '🧱 O que você está fazendo', ptHint: 'O que você está fazendo nesse momento?',
                chain: ['moment', 'the moment', 'at the moment', 'doing at the moment',
                        'What are you doing at the moment?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be8w2:t1', title: '🔧 Complete:',
                main: 'She ___ (work) on a new project this week.', answers: ["is working"],
                expl: 'she → is working.', feedbackTts: 'is working' },
              { ui: 'type', cat: 'gra', srsId: 'be8w2:t2', title: '🔧 Negativa:',
                main: 'I ___ (not/watch) TV right now.', answers: ["am not watching", "'m not watching"],
                expl: 'I → am not watching.' },
              { ui: 'choice', cat: 'gra', srsId: 'be8w2:c1', title: '🔧 Continuous ou simple?',
                main: 'I ___ (work/am working) every day from 9 to 5.',
                options: DF.shuffle([{ label: 'work', correct: true }, { label: "am working" }]),
                expl: 'Rotina fixa = present simple, não continuous.' },
              { ui: 'order', cat: 'fun', srsId: 'be8w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'Are you working on any interesting projects',
                expl: 'Are you working on any interesting projects?' },
              { ui: 'match', cat: 'fun', srsId: 'be8w2:match:1', title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['What are you doing?', "I'm finishing a report."],
                  ['Is he working today?', "No, he isn't."],
                  ['Are they coming?', 'Yes, they are.']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Diga o que você está fazendo agora', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be8w2:build:1', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Diga o que você está fazendo hoje ou essa semana',
                prompt: 'Use present continuous.',
                example: "I'm studying English and I'm preparing a presentation this week.",
                mustUse: ["I'm"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de present continuous', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be8w2+:tf1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Frase base: "We are launching a new product."',
                ptHint: 'Estamos lançando um novo produto.',
                rounds: [
                  { base: 'We are launching a new product.', cmd: 'Negative', answer: "We aren't launching a new product." },
                  { base: 'We are launching a new product.', cmd: 'Question', answer: 'Are you launching a new product?' },
                  { base: 'He is training the new staff.', cmd: 'Negative', answer: "He isn't training the new staff." },
                  { base: 'He is training the new staff.', cmd: 'Question', answer: 'Is he training the new staff?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de present continuous', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm ___ at the moment.",
                  pool: ['finishing the report', 'contacting a client', 'checking the emails',
                         'working on a project', 'preparing the meeting'],
                  focus: 'presente contínuo', ptHint: 'Eu estou ___ nesse momento.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 31" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📅',
        title: 'Practically speaking',
        goal: 'Dizer as horas, e marcar uma reunião com sucesso.',
        comp: 'Você diz as horas por extenso e conduz uma negociação de horário — propõe, ' +
              'recusa educadamente e confirma um horário que funcione pros dois.',
        live: [
          "Telling the time",
          "Business communication: arranging to meet",
          'Key expressions: asking about times, saying when you are free/busy'
        ],
        bridge: 'Na aula vocês praticaram horas e a agenda do livro. Aqui a agenda é outra — ' +
                'mas "What time are you free?" é a mesma expressão.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 8.',
        ican: [
          'I can tell the time.',
          'I can ask when someone is free.',
          'I can decline a time and suggest another.',
          'I can confirm a meeting time.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — time & meetings', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🕐', name: 'Ouça e escreva a hora', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'be8w3:t:1', exact: true,
                title: '🕐 Ouça e escreva:', tts: "It's half past two.", ttsLabel: '🔊 Ouvir',
                autoPlay: true, showIfNoTTS: 'half past two', answers: ['2:30'],
                expl: '2:30 = half past two.', feedbackTts: 'half past two' },
              { ui: 'type', cat: 'spl', srsId: 'be8w3:t:2', exact: true,
                title: '🕐 E esta:', tts: "It's quarter to five.", ttsLabel: '🔊 Ouvir',
                autoPlay: true, showIfNoTTS: 'quarter to five', answers: ['4:45'],
                expl: '4:45 = quarter to five.', feedbackTts: 'quarter to five' },
              { ui: 'type', cat: 'spl', srsId: 'be8w3:t:3', exact: true,
                title: '🕐 A mais fácil:', tts: "It's nine o'clock.", ttsLabel: '🔊 Ouvir',
                autoPlay: true, showIfNoTTS: "nine o'clock", answers: ['9:00'],
                expl: "9:00 = nine o'clock.", feedbackTts: "nine o'clock" }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: marcando a reunião', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be8w3:drl:1', unit: 8, waSec: 'Drill · Meeting',
                title: '🔁 Drill 1 — propor', focus: 'proposta',
                frame: 'Are you free on ___?', ptHint: 'Você está livre ___?',
                slots: ['Monday morning', 'Tuesday at three', 'Wednesday afternoon', 'Friday at ten'] },
              { ui: 'drill', cat: 'pro', srsId: 'be8w3:drl:2', unit: 8, waSec: 'Drill · Busy',
                title: '🔁 Drill 2 — recusando', focus: 'recusa',
                frame: "I'm busy ___.", ptHint: 'Estou ocupado(a) ___.',
                slots: ['then', 'on Monday', 'in the morning', 'until 3pm'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Marcando o horário', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be8w3:dlg:1',
                title: '🎧 Priya tenta marcar com o Noah',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Priya', en: 'Can we arrange a meeting? What time are you free?' },
                  { who: 'Noah', en: "I'm busy in the morning. Are you free at two?" },
                  { who: 'Priya', en: 'Sorry, I have a call then. Is three OK?' },
                  { who: 'Noah', en: "Yes, three is fine for me." }
                ],
                question: 'A que horas eles marcam a reunião?',
                options: DF.shuffle([
                  { label: 'Três horas', correct: true }, { label: 'Duas horas' },
                  { label: 'De manhã' }, { label: 'Não marcaram' }
                ]),
                expl: '"Yes, three is fine for me."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be8w3:dlg:2',
                title: '🎧 Confirmando o horário',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'What time do you start work today?' },
                  { who: 'Sara', en: "I start at half past eight. Why?" },
                  { who: 'Kenji', en: 'Can we meet at quarter past nine?' },
                  { who: 'Sara', en: "Yes, that works for me." }
                ],
                question: 'A que horas eles vão se encontrar?',
                options: DF.shuffle([
                  { label: '9:15', correct: true }, { label: '8:30' },
                  { label: '9:30' }, { label: 'Não disse' }
                ]),
                expl: '"Can we meet at quarter past nine? Yes, that works for me."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be8w3:bc:1', unit: 8, waSec: 'Backchain',
                title: '🧱 Propor a reunião', ptHint: 'Podemos marcar uma reunião pra amanhã de manhã?',
                chain: ['morning', 'tomorrow morning', 'meeting tomorrow morning',
                        'arrange a meeting tomorrow morning',
                        'Can we arrange a meeting tomorrow morning?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be8w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'What time are you free',
                expl: 'What time are you free?' },
              { ui: 'order', cat: 'fun', srsId: 'be8w3:ord:2',
                title: '🧩 Monte a proposta:', answer: 'Can we arrange a meeting',
                expl: 'Can we arrange a meeting?' },
              { ui: 'match', cat: 'fun', srsId: 'be8w3:match:1', title: '🔗 Ligue a hora ao horário:',
                pairs: [['half past two', '2:30'], ['quarter to five', '4:45'],
                        ["nine o'clock", '9:00'], ['quarter past ten', '10:15']] },
              { ui: 'choice', cat: 'gra', srsId: 'be8w3:c1', title: '📅 Resposta educada:',
                main: 'Is Monday OK? Você não pode.',
                options: DF.shuffle([{ label: "Sorry, I'm busy then. Is Tuesday OK?", correct: true },
                  { label: 'No.' }]),
                expl: 'Recusar sempre com "sorry" + alternativa.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Marque uma reunião de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be8w3:build:1', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Proponha, recuse e confirme um horário',
                prompt: 'Grave: proponha um horário, recuse a primeira sugestão, e confirme outra.',
                example: "Can we arrange a meeting? Are you free at ten? Sorry, I'm busy then. " +
                         "Is eleven OK? Yes, that's fine.",
                mustUse: ['arrange a meeting'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A negociação de horário completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be8w3+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis da negociação',
                prompt: 'Grave os dois lados: um propõe, o outro recusa duas vezes antes de aceitar.',
                example: "Can we meet at nine? Sorry, I'm busy then. How about ten? I'm busy " +
                         "then too. Is eleven OK? Yes, that's fine for me.",
                mustUse: ['arrange a meeting'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de reuniões', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Are you free on ___?',
                  pool: ['Monday morning', 'Tuesday at three', 'Wednesday afternoon', 'Friday at ten'],
                  focus: 'proposta', ptHint: 'Você está livre ___?', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 32" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: marcar reunião pra falar de candidatos, do início ao fim.',
        comp: 'Você propõe um encontro pra discutir uma vaga, negocia o horário, e confirma ' +
              '— os itens do speaking test.',
        live: [
          'Talking point: the right person for the job — as 5 etapas',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (marcar reunião)'
        ],
        bridge: 'Na aula vocês fizeram as 5 etapas de contratar alguém e o professor aplicou ' +
                'o teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — marcar, ' +
                'recusar, e confirmar um horário — numa negociação nova.',
        nextLive: 'Próxima unidade. Começa na segunda-feira seguinte.',
        ican: [
          'I can say why I want to meet.',
          'I can suggest a day and time.',
          'I can say I am busy and suggest another time.',
          'I can agree on a final time.',
          'I can complete the Unit 8 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'A pessoa certa pra vaga', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be8w4:g:1', unit: 8, waSec: 'Talking Point',
                title: '🎲 Descreva a pessoa ideal pra uma vaga',
                prompt: 'Use duas qualidades.',
                example: 'We need someone friendly and experienced.', mustUse: ['need someone'] },
              { ui: 'build', cat: 'fun', srsId: 'be8w4:g:2', unit: 8, waSec: 'Talking Point',
                title: '🎲 Diga o que você está fazendo agora',
                prompt: 'Use present continuous.',
                example: "I'm interviewing candidates this week.", mustUse: ["I'm"] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be8w4:pt:1', title: '⭐ Qual qualidade?',
                main: 'Have a lot of enthusiasm and energy.',
                options: DF.shuffle([{ label: 'energetic', correct: true }, { label: 'patient' }]),
                expl: 'energetic = enérgico.' },
              { ui: 'choice', cat: 'gra', srsId: 'be8w4:pt:2', title: '🔧 Continuous correto:',
                main: 'They ___ (build) a new office in London.',
                options: DF.shuffle([{ label: "are building", correct: true }, { label: 'build' }]),
                expl: 'ação em andamento → present continuous.' },
              { ui: 'choice', cat: 'gra', srsId: 'be8w4:pt:3', title: '🕐 Hora certa:',
                main: '4:45 = ___.',
                options: DF.shuffle([{ label: 'quarter to five', correct: true }, { label: 'quarter past four' }]),
                expl: '4:45 = quarter to five.' },
              { ui: 'order', cat: 'fun', srsId: 'be8w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'Can we arrange a meeting',
                expl: 'Can we arrange a meeting?' },
              { ui: 'match', cat: 'fun', srsId: 'be8w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Are you free on Monday?', "Sorry, I'm busy then."],
                  ['Is three OK?', "Yes, that's fine for me."],
                  ['What are you doing?', "I'm finishing a report."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be8w4:st:1', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 1 — say you need to meet',
                prompt: 'Diga que precisa marcar uma reunião.',
                example: 'We need to meet about the interviews.', mustUse: ['need to meet'] },
              { ui: 'build', cat: 'fun', srsId: 'be8w4:st:2', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 2 — suggest a time',
                prompt: 'Sugira um dia e horário.',
                example: 'Are you free on Friday at eleven?', mustUse: ['free'] },
              { ui: 'build', cat: 'fun', srsId: 'be8w4:st:3', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 3 — decline and suggest another',
                prompt: 'Recuse e sugira outro horário.',
                example: "Sorry, I'm busy then. Is the morning OK?", mustUse: ["I'm busy"] },
              { ui: 'build', cat: 'fun', srsId: 'be8w4:st:4', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 4 — confirm',
                prompt: 'Confirme o horário final.',
                example: "Yes, that's good for me. See you then.", mustUse: ['good for me'],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A negociação inteira numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be8w4+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave tudo: diga que precisa se encontrar, sugira, recuse e confirme.',
                example: "We need to meet about the interviews. Are you free on Friday? Sorry, " +
                         "I'm busy then. Is the morning OK? Yes, that's good for me.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 8', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'We need someone ___.', pool: QUAL.map(function (q) { return q.en; }),
                  focus: 'qualidade', ptHint: 'Precisamos de alguém ___.', n: 3 },
                { frame: 'Are you free on ___?',
                  pool: ['Monday morning', 'Tuesday at three', 'Wednesday afternoon', 'Friday at ten'],
                  focus: 'proposta', ptHint: 'Você está livre ___?', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
