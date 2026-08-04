/* ENGLISH FLOW — week/plan-starter-08.js
   BUSINESS STARTER · UNIT 8 "Travel"

   Numeração corrida do Felipe: Unit 8 = semanas 30–33, + Semana 34 de preparo.
     semana 30 = U8 W1 · Working with words (transport & travel)
     semana 31 = U8 W2 · Language at work (was/were)
     semana 32 = U8 W3 · Practically speaking (months & dates) + Business
                 communication (arranging a meeting)
     semana 33 = U8 W4 · Talking point + teste (fecha a unidade)
     semana 34 = U8 W5 · Preparo — Viewpoint 2 & revisão final (NÃO é aula ao
                 vivo do livro: o Viewpoint 2 e o teste final acontecem na
                 aula, ao vivo, com o professor. Esta semana treina as
                 habilidades que essas aulas vão cobrar — descrever um
                 negócio, revisar a gramática das 8 units — sem repetir o
                 vídeo ou o teste em si.)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Aeroportos, voos, datas e
   reuniões são autorais — nunca a viagem exata do livro (Donald Jones,
   TDI Annual Sales Conference, Muscat/Barcelona). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const TRANSPORT = [
    { en: 'car', pt: 'carro' },
    { en: 'bus', pt: 'ônibus' },
    { en: 'train', pt: 'trem' },
    { en: 'taxi', pt: 'táxi' },
    { en: 'plane', pt: 'avião' },
    { en: 'bicycle', pt: 'bicicleta' },
    { en: 'motorcycle', pt: 'moto' }
  ];
  const AIRPORT = [
    { en: 'terminal', pt: 'terminal' },
    { en: 'boarding gate', pt: 'portão de embarque' },
    { en: 'passport', pt: 'passaporte' },
    { en: 'e-ticket', pt: 'passagem eletrônica' },
    { en: 'receipt', pt: 'recibo' },
    { en: 'bag', pt: 'bagagem' }
  ];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  DF.PLAN.starter[8] = {
    unit: 8,
    title: 'Travel',
    subtitle: 'Transporte, datas e marcar uma reunião',
    icon: '✈️',

    mindmap: {
      center: 'Travel',
      sub: 'Falar de transporte, contar do passado e marcar uma reunião',
      branches: [
        {
          icon: '🚗', name: 'Transport',
          leaves: TRANSPORT.map(function (t) { return { en: t.en, pt: t.pt }; }),
          note: '<b>go by</b> + transporte: go by car, go by train. Exceção: <b>walk</b> ' +
                '(sem "by").'
        },
        {
          icon: '🎫', name: 'At the airport',
          leaves: AIRPORT.map(function (a) { return { en: a.en, pt: a.pt }; }),
          note: 'check in (verbo, 2 palavras) vs check-in (substantivo, com hífen).'
        },
        {
          icon: '⏳', name: 'was / were',
          leaves: [
            { en: 'I was in Dubai yesterday.', pt: 'passado do "am/is"' },
            { en: 'We were in Tokyo last week.', pt: 'passado do "are"' },
            { en: "I wasn't there.", pt: 'negativa' },
            { en: 'Were you busy?', pt: 'pergunta' }
          ],
          note: 'was = I/he/she/it. were = you/we/they. É o único verbo irregular no ' +
                'passado logo no Starter — sem "did".'
        },
        {
          icon: '📅', name: 'Months & dates',
          leaves: MONTHS.slice(0, 6).map(function (m) { return { en: m, pt: '' }; }),
          note: 'Data se fala com ordinal: 3rd September (the third of September), nunca ' +
                '"three September".'
        },
        {
          icon: '🤝', name: 'Arranging a meeting',
          leaves: [
            { en: "I'd like to arrange a meeting.", pt: 'propor reunião' },
            { en: 'Can we meet on Tuesday at 2pm?', pt: 'propor dia/hora' },
            { en: "I'm busy on Monday. How about Wednesday?", pt: 'recusar e sugerir outro' },
            { en: "That's fine for me.", pt: 'confirmar' }
          ],
          note: 'O mesmo miolo do convite (Unit 6), mas em contexto formal de reunião — ' +
                '"arrange", não "invite".'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 30" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '✈️',
        title: 'Working with words',
        goal: 'Falar de meios de transporte e do que você faz no aeroporto.',
        comp: 'Você diz como vai pro trabalho, entende os avisos do aeroporto e passa ' +
              'pelo check-in usando os verbos certos.',
        live: ['Transport vocabulary — go by...', 'At the airport vocabulary', 'Check-in dialogue'],
        nextLive: 'Semana 2 · Language at work — was/were.',
        bridge: 'Na aula vocês viram os meios de transporte e um diálogo de check-in. ' +
                'Aqui o aeroporto é outro e o voo é outro — mas o vocabulário é o mesmo.',
        ican: [
          'I can say how I travel to work.',
          'I can name things at the airport.',
          'I can understand and use check-in vocabulary.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — transport & airport', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o transporte', tag: 'listening',
            items: TRANSPORT.slice(0, 4).map(function (t) {
              var others = DF.shuffle(TRANSPORT.filter(function (x) { return x.en !== t.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'bs8w1:radar:' + t.en,
                title: '🚗 Que transporte você ouviu?',
                tts: t.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: t.en,
                options: DF.shuffle([{ label: t.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: t.en + ' = ' + t.pt, feedbackTts: t.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: como você viaja', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs8w1:drl:1', unit: 8, waSec: 'Drill · Transport',
                title: '🔁 Drill 1 — como você vai', focus: 'transporte',
                frame: 'I go to work by ___.', ptHint: 'Eu vou pro trabalho de ___.',
                slots: TRANSPORT.map(function (t) { return t.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'bs8w1:drl:2', unit: 8, waSec: 'Drill · Airport',
                title: '🔁 Drill 2 — no check-in', focus: 'aeroporto',
                frame: 'Can I have your ___, please?', ptHint: 'Posso ver seu(sua) ___, por favor?',
                slots: AIRPORT.map(function (a) { return a.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'No check-in', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs8w1:dlg:1',
                title: '🎧 Hendrik faz o check-in',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Agent', en: 'Good morning. Can I have your passport and e-ticket, please?' },
                  { who: 'Hendrik', en: 'Here you are. Do you have any bags to check in?' },
                  { who: 'Agent', en: 'Yes, one bag. Which terminal do you want?' }
                ],
                question: 'O que o agente pede primeiro?',
                options: DF.shuffle([
                  { label: 'Passaporte e passagem eletrônica', correct: true },
                  { label: 'Bagagem' }, { label: 'Recibo' }, { label: 'Terminal' }
                ]),
                expl: '"Can I have your passport and e-ticket, please?"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs8w1:dlg:2',
                title: '🎧 O portão de embarque',
                lines: [
                  { who: 'Agent', en: 'Your flight leaves at one o\'clock. Please go to the boarding gate at twelve fifteen.' },
                  { who: 'Beatriz', en: 'Which terminal is it?' },
                  { who: 'Agent', en: "Terminal 2." }
                ],
                question: 'A que horas o voo sai?',
                options: DF.shuffle([
                  { label: 'Uma hora', correct: true },
                  { label: 'Doze e quinze' }, { label: 'Duas horas' }, { label: 'Não diz' }
                ]),
                expl: '"Your flight leaves at one o\'clock."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs8w1:dlg:3',
                title: '🎧 Indo pro aeroporto',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Tom', en: 'How do you go to work?' },
                  { who: 'Camila', en: 'I go by train. It takes twenty minutes.' },
                  { who: 'Tom', en: 'I go by car, but I want to take the bus.' }
                ],
                question: 'Como a Camila vai pro trabalho?',
                options: DF.shuffle([
                  { label: 'De trem', correct: true }, { label: 'De carro' },
                  { label: 'De ônibus' }, { label: 'A pé' }
                ]),
                expl: '"I go by train."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs8w1:bc:1', unit: 8, waSec: 'Backchain',
                title: '🧱 O check-in', ptHint: 'Posso ver seu passaporte e sua passagem, por favor?',
                chain: ['ticket', 'e-ticket', 'and e-ticket', 'passport and e-ticket',
                        'your passport and e-ticket',
                        'Can I have your passport and e-ticket, please?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs8w1:c1', title: '🚗 by ou sem by?',
                main: 'I go to work ___.',
                options: DF.shuffle([{ label: 'by bicycle', correct: true }, { label: 'bicycle' }]),
                expl: 'go by + transporte, exceto "walk" (sem by).' },
              { ui: 'type', cat: 'voc', srsId: 'bs8w1:t1', title: '🔧 Complete a palavra:',
                main: 'b_ _ r_ _ _g g_te (onde você embarca)', answers: ['boarding gate'],
                expl: 'boarding gate = portão de embarque.' },
              { ui: 'order', cat: 'fun', srsId: 'bs8w1:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Do you have any bags to check in',
                expl: 'Do you have any bags to check in?' },
              { ui: 'match', cat: 'fun', srsId: 'bs8w1:match:1', title: '🔗 Ligue a palavra ao lugar:',
                pairs: [
                  ['passport', 'checked at the gate'], ['e-ticket', 'shown at check-in'],
                  ['bag', 'checked in'], ['receipt', 'proof of payment']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale de como você viaja', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w1:build:1', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Diga como você vai pro trabalho e quanto tempo leva',
                prompt: 'Use "I go by..." ou "I walk" e diga o tempo.',
                example: 'I go by car. It takes thirty minutes.', mustUse: ['I go'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'O check-in inteiro', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w1+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis do check-in',
                prompt: 'Grave os dois lados: o agente pede passaporte e bagagem, o passageiro ' +
                        'responde e pergunta o terminal.',
                example: 'Can I have your passport and e-ticket, please? Here you are. Do you ' +
                         'have any bags to check in? Yes, one bag. Which terminal is it?',
                mustUse: ['passport'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de transporte', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I go to work by ___.', pool: TRANSPORT.map(function (t) { return t.en; }),
                  focus: 'transporte', ptHint: 'Eu vou pro trabalho de ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 31" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '⏳',
        title: 'Language at work',
        goal: 'Contar onde você estava no passado, usando was/were.',
        comp: 'Você usa was/were pra dizer onde esteve, faz perguntas e respostas curtas ' +
              'sobre uma viagem de negócios passada.',
        live: ["was/were — positive, negative, question", 'Short answers', 'Talking about a business trip'],
        nextLive: 'Semana 3 · Practically speaking — months & dates, e Business ' +
                   'communication — arranging a meeting.',
        bridge: 'Na aula vocês praticaram was/were com a viagem de negócios do livro. ' +
                'Aqui a viagem é outra — mas was (I/he/she/it) e were (you/we/they) não mudam.',
        ican: [
          'I can use was/were to talk about the past.',
          'I can make negative sentences with was/were.',
          'I can ask and answer questions with was/were.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — was/were', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs8w2:tf:1', unit: 8, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I was in Dubai."',
                ptHint: 'Eu estava em Dubai.',
                rounds: [
                  { base: 'I was in Dubai.', cmd: 'Negative', answer: "I wasn't in Dubai." },
                  { base: 'I was in Dubai.', cmd: 'Question', answer: 'Was I in Dubai?' },
                  { base: 'They were in Tokyo.', cmd: 'Negative', answer: "They weren't in Tokyo." },
                  { base: 'They were in Tokyo.', cmd: 'Question', answer: 'Were they in Tokyo?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs8w2:tf:2', unit: 8, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "She was busy yesterday."',
                ptHint: 'Ela estava ocupada ontem.',
                rounds: [
                  { base: 'Was she busy yesterday?', cmd: 'Short answer — yes', answer: 'Yes, she was.' },
                  { base: 'Was she busy yesterday?', cmd: 'Short answer — no', answer: "No, she wasn't." },
                  { base: 'Were you busy last week?', cmd: 'Short answer — yes', answer: 'Yes, I was.' },
                  { base: 'Were you busy last week?', cmd: 'Short answer — no', answer: "No, I wasn't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: onde você estava', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs8w2:drl:1', unit: 8, waSec: 'Drill · was/were',
                title: '🔁 Drill — a viagem', focus: 'lugar',
                frame: 'I was in ___ last week.', ptHint: 'Eu estava em ___ semana passada.',
                slots: ['Tokyo', 'Dubai', 'Lisbon', 'Cape Town', 'Singapore'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'A viagem de negócios', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs8w2:dlg:1',
                title: '🎧 Camila pergunta sobre a viagem do Tom',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Camila', en: 'Hi Tom. Where were you last week?' },
                  { who: 'Tom', en: 'I was in Singapore for a conference.' },
                  { who: 'Camila', en: 'Was it useful?' },
                  { who: 'Tom', en: 'Yes, it was. The clients were very happy.' }
                ],
                question: 'Onde o Tom estava?',
                options: DF.shuffle([
                  { label: 'Em Cingapura', correct: true }, { label: 'Em Dubai' },
                  { label: 'Em Tóquio' }, { label: 'Não disse' }
                ]),
                expl: '"I was in Singapore for a conference."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs8w2:dlg:2',
                title: '🎧 Ontem no escritório',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Aisha', en: 'Were you at the office yesterday?' },
                  { who: 'Yuki', en: "No, I wasn't. I was on holiday." },
                  { who: 'Aisha', en: 'Was Hendrik there?' },
                  { who: 'Yuki', en: "Yes, he was. He was very busy." }
                ],
                question: 'Onde a Yuki estava ontem?',
                options: DF.shuffle([
                  { label: 'De férias', correct: true }, { label: 'No escritório' },
                  { label: 'Numa conferência' }, { label: 'Não disse' }
                ]),
                expl: "\"No, I wasn't. I was on holiday.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs8w2:bc:1', unit: 8, waSec: 'Backchain',
                title: '🧱 Onde você estava', ptHint: 'Onde você estava semana passada?',
                chain: ['week', 'last week', 'you last week', 'were you last week',
                        'Where were you last week?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'bs8w2:t1', title: '🔧 Complete:',
                main: 'She ___ (was/were) in Dubai on Monday.', answers: ['was'],
                expl: 'She → was.', feedbackTts: 'was' },
              { ui: 'type', cat: 'gra', srsId: 'bs8w2:t2', title: '🔧 Complete:',
                main: 'We ___ (was/were) at the conference all week.', answers: ['were'],
                expl: 'We → were.', feedbackTts: 'were' },
              { ui: 'choice', cat: 'gra', srsId: 'bs8w2:c1', title: '🔧 Negativa correta:',
                main: 'I ___ there yesterday.',
                options: DF.shuffle([{ label: "wasn't", correct: true }, { label: "weren't" }, { label: "isn't" }]),
                expl: 'I → wasn\'t.' },
              { ui: 'order', cat: 'fun', srsId: 'bs8w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'Where were you yesterday',
                expl: 'Where were you yesterday?' },
              { ui: 'match', cat: 'fun', srsId: 'bs8w2:match:1', title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Was he in Dubai?', 'Yes, he was.'],
                  ['Were they busy?', "No, they weren't."],
                  ['Where were you?', 'I was in Tokyo.']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale de onde você estava', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w2:build:1', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Diga onde você estava ontem e semana passada',
                prompt: 'Use was/were pra falar de dois lugares diferentes.',
                example: 'I was at the office yesterday. I was in São Paulo last week.',
                mustUse: ['was'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de was/were', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs8w2+:tf1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Frase base: "The meeting was useful."',
                ptHint: 'A reunião foi útil.',
                rounds: [
                  { base: 'The meeting was useful.', cmd: 'Negative', answer: "The meeting wasn't useful." },
                  { base: 'The meeting was useful.', cmd: 'Question', answer: 'Was the meeting useful?' },
                  { base: 'The clients were happy.', cmd: 'Negative', answer: "The clients weren't happy." },
                  { base: 'The clients were happy.', cmd: 'Question', answer: 'Were the clients happy?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de was/were', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I was in ___ last week.', pool: 'city', focus: 'lugar',
                  ptHint: 'Eu estava em ___ semana passada.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 32" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📅',
        title: 'Practically speaking',
        goal: 'Dizer meses e datas, e marcar uma reunião.',
        comp: 'Você diz uma data por extenso (ordinal), propõe uma reunião, recusa uma ' +
              'data e sugere outra, e confirma dia e hora.',
        live: [
          'Months of the year',
          'Saying dates — ordinals (1st, 2nd, 3rd...)',
          'Business communication: arranging a meeting',
          'Key expressions: propor, recusar, confirmar'
        ],
        bridge: 'Na aula vocês praticaram datas e marcaram uma reunião com o e-mail do ' +
                'livro. Aqui a reunião é outra — mas o ordinal da data (the third of ' +
                'September) é o mesmo.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 8.',
        ican: [
          'I can say the months and dates.',
          "I can say and write a date with an ordinal number.",
          'I can arrange a meeting.',
          'I can decline a date and suggest another.',
          'I can confirm a day and time for a meeting.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — months, dates & meetings', tag: 'estudo', mindmap: true },

          {
            id: 'dates', icon: '📅', name: 'Ouça e escreva a data', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'bs8w3:d:1', exact: true,
                title: '📅 Ouça e escreva a data:', tts: 'The third of September.',
                ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: 'third of September',
                answers: ['3rd September', '3/9', 'September 3rd'], expl: '3rd September = the third of September.',
                feedbackTts: 'third of September' },
              { ui: 'type', cat: 'spl', srsId: 'bs8w3:d:2', exact: true,
                title: '📅 E esta:', tts: 'The twenty-first of November.',
                ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: 'twenty-first of November',
                answers: ['21st November', '21/11', 'November 21st'], expl: '21st November.',
                feedbackTts: 'twenty-first of November' },
              { ui: 'type', cat: 'spl', srsId: 'bs8w3:d:3', exact: true,
                title: '📅 A mais difícil:', tts: 'The thirty-first of May.',
                ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: 'thirty-first of May',
                answers: ['31st May', '31/5', 'May 31st'], expl: '31st May.',
                feedbackTts: 'thirty-first of May' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: marcar reunião', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs8w3:drl:arrange', unit: 8, waSec: 'Drill · Arranging',
                title: '🔁 Drill 1 — propor', focus: 'proposta',
                frame: 'Can we meet on ___?', ptHint: 'Podemos nos encontrar ___?',
                slots: ['3rd September', 'Monday morning', '21st November at 2pm', 'Wednesday afternoon'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs8w3:drl:decline', unit: 8, waSec: 'Drill · Declining',
                title: '🔁 Drill 2 — recusando', focus: 'recusa',
                frame: "I'm sorry, I can't meet on ___.", ptHint: 'Desculpe, não posso me encontrar ___.',
                slots: ['Tuesday', 'the 5th', 'Monday morning', 'Friday afternoon'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs8w3:drl:confirm', unit: 8, waSec: 'Drill · Confirming',
                title: '🔁 Drill 3 — confirmando', focus: 'confirmação',
                frame: '___ is fine for me.', ptHint: '___ está bom pra mim.',
                slots: ['Wednesday at 2pm', 'Thursday morning', '9th October', 'Friday at 10am'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Marcando a reunião', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs8w3:dlg:1',
                title: '🎧 Beatriz tenta marcar com o Hendrik',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Beatriz', en: "I'd like to arrange a meeting. Can we meet on the 3rd of September?" },
                  { who: 'Hendrik', en: "I'm sorry, I can't meet that day. How about the 5th?" },
                  { who: 'Beatriz', en: 'Is ten thirty OK?' },
                  { who: 'Hendrik', en: "Yes, that's fine for me." }
                ],
                question: 'Que dia eles combinam no fim?',
                options: DF.shuffle([
                  { label: 'Dia 5', correct: true }, { label: 'Dia 3' },
                  { label: 'Dia 10' }, { label: 'Não combinaram' }
                ]),
                expl: '"How about the 5th? ... Yes, that\'s fine for me."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs8w3:dlg:2',
                title: '🎧 A reunião de vendas',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Camila', en: "Can we meet on Monday 21st November at 2pm?" },
                  { who: 'Yuki', en: "Sorry, I'm busy on Monday. I'm visiting a client." },
                  { who: 'Camila', en: 'How about Tuesday morning?' },
                  { who: 'Yuki', en: "That works. Nine thirty is good for me." }
                ],
                question: 'Por que a Yuki não pode na segunda?',
                options: DF.shuffle([
                  { label: 'Ela vai visitar um cliente', correct: true },
                  { label: 'Ela está de férias' }, { label: 'Ela não trabalha às segundas' },
                  { label: 'Não disse' }
                ]),
                expl: "\"I'm busy on Monday. I'm visiting a client.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs8w3:bc:1', unit: 8, waSec: 'Backchain',
                title: '🧱 Propor a reunião', ptHint: 'Podemos nos encontrar no dia 9 de outubro?',
                chain: ['October', '9th October', 'on 9th October', 'meet on 9th October',
                        'we meet on 9th October', 'Can we meet on 9th October?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'bs8w3:ord:1',
                title: '🧩 Monte a proposta:', answer: 'I would like to arrange a meeting',
                expl: "I'd like to arrange a meeting." },
              { ui: 'order', cat: 'fun', srsId: 'bs8w3:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'Are you free on Thursday morning',
                expl: 'Are you free on Thursday morning?' },
              { ui: 'match', cat: 'fun', srsId: 'bs8w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["I'd like to arrange a meeting.", 'Sure. When?'],
                  ['Can we meet on Friday?', "Sorry, I'm busy."],
                  ['How about Monday?', "That's fine for me."],
                  ['Is 3pm OK?', 'Yes, that works.']
                ] },
              { ui: 'type', cat: 'spl', srsId: 'bs8w3:pt:1', title: '📅 Escreva por extenso:',
                main: '5/2 →', answers: ['5th February', 'the fifth of February'],
                expl: '5th February = the fifth of February.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Marque uma reunião de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w3:build:1', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Proponha, recuse e confirme',
                prompt: 'Grave: proponha uma data, recuse a primeira sugestão, e confirme outra.',
                example: "Can we meet on 3rd September? I'm sorry, I can't. How about the 5th? " +
                         "That's fine for me.",
                mustUse: ['Can we meet'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A reunião inteira, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w3+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis da reunião',
                prompt: 'Grave os dois lados: quem propõe sugere data/hora, quem recebe ' +
                        'recusa uma vez e os dois fecham em outra data.',
                example: "I'd like to arrange a meeting. Can we meet on 21st November? Sorry, " +
                         "I'm busy that day. How about the 23rd? That's fine for me.",
                mustUse: ['arrange a meeting'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de reuniões', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Can we meet on ___?',
                  pool: ['Monday morning', 'Tuesday afternoon', '3rd September', '21st November'],
                  focus: 'proposta', ptHint: 'Podemos nos encontrar ___?', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 33" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: falar de uma viagem passada e marcar a próxima reunião.',
        comp: 'Você conta de uma viagem de negócios passada (onde, quanto tempo) e ' +
              'marca uma nova reunião — os 5 itens do speaking test.',
        live: [
          'Talking point: "When can we meet?" — planejar uma viagem em duplas',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (viagem passada + marcar reunião)'
        ],
        bridge: 'Na aula vocês jogaram "When can we meet?" e o professor aplicou o teste. ' +
                'Aqui você ensaia os <b>5 itens exatos do speaking test</b> — contar a ' +
                'viagem, dizer quanto tempo, marcar reunião, recusar e confirmar.',
        nextLive: 'Semana de preparo — Viewpoint 2 e revisão final, na aula ao vivo.',
        ican: [
          'I can ask and answer about a past business trip.',
          'I can say how long I was somewhere.',
          'I can arrange a meeting for next week.',
          'I can decline and suggest another day or time.',
          'I can complete the Unit 8 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'When can we meet?', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w4:g:1', unit: 8, waSec: 'Talking Point',
                title: '🎲 Sobre uma viagem passada',
                prompt: 'Responda: onde você esteve na última viagem de trabalho e por quanto tempo?',
                example: 'I was in São Paulo for three days.', mustUse: ['was'] },
              { ui: 'build', cat: 'fun', srsId: 'bs8w4:g:2', unit: 8, waSec: 'Talking Point',
                title: '🎲 Marcando a próxima reunião',
                prompt: 'Proponha uma data pra próxima reunião.',
                example: 'Can we meet on the 10th of next month?', mustUse: ['Can we meet'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs8w4:pt:1', title: '🔧 was ou were?',
                main: 'They ___ at the conference all week.',
                options: DF.shuffle([{ label: 'were', correct: true }, { label: 'was' }]),
                expl: 'They → were.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs8w4:pt:2', title: '🔧 Negativa correta:',
                main: 'She ___ busy yesterday.',
                options: DF.shuffle([{ label: "wasn't", correct: true }, { label: "weren't" }]),
                expl: 'She → wasn\'t.' },
              { ui: 'type', cat: 'voc', srsId: 'bs8w4:pt:3', title: '🔧 Complete a palavra:',
                main: 'b_ _ r_ _ _g g_te', answers: ['boarding gate'], expl: 'boarding gate.' },
              { ui: 'order', cat: 'fun', srsId: 'bs8w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'Can we meet on Friday',
                expl: 'Can we meet on Friday?' },
              { ui: 'match', cat: 'fun', srsId: 'bs8w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Where were you last week?', 'I was in Dubai.'],
                  ['Can we meet on Monday?', "Sorry, I'm busy."],
                  ['How about Tuesday?', "That's fine for me."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w4:st:1', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 1 de 5 — say where you were',
                prompt: 'Diga onde você esteve na última viagem.',
                example: 'I was in Lisbon last week.', mustUse: ['was'] },
              { ui: 'build', cat: 'fun', srsId: 'bs8w4:st:2', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 2 de 5 — say how long',
                prompt: 'Diga quanto tempo você ficou.',
                example: 'I was there for four days.', mustUse: ['for'] },
              { ui: 'build', cat: 'fun', srsId: 'bs8w4:st:3', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 3 de 5 — arrange a meeting',
                prompt: 'Proponha uma data pra reunião.',
                example: 'Can we meet on the 15th?', mustUse: ['Can we meet'] },
              { ui: 'build', cat: 'fun', srsId: 'bs8w4:st:4', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 4 de 5 — decline and suggest',
                prompt: "Recuse e sugira outro dia.",
                example: "I'm sorry, I can't. How about the 17th?", mustUse: ['How about'] },
              { ui: 'build', cat: 'fun', srsId: 'bs8w4:st:5', unit: 8, waSec: 'Speaking Test',
                title: '🏆 Item 5 de 5 — confirm',
                prompt: 'Confirme o dia e a hora.',
                example: "That's fine for me. See you on the 17th.", mustUse: ["fine for me"],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A viagem e a reunião numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w4+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Os 5 itens numa gravação só',
                prompt: 'Grave tudo: diga onde esteve e por quanto tempo, proponha uma reunião, ' +
                        'recuse a primeira data e confirme outra.',
                example: 'I was in Lisbon for four days. Can we meet on the 15th? ' +
                         "I'm sorry, I can't. How about the 17th? That's fine for me.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 8', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I was in ___ last week.', pool: 'city', focus: 'lugar',
                  ptHint: 'Eu estava em ___ semana passada.', n: 3 },
                { frame: 'Can we meet on ___?',
                  pool: ['Monday morning', 'Tuesday afternoon', '3rd September', '21st November'],
                  focus: 'proposta', ptHint: 'Podemos nos encontrar ___?', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ═══════════ SEMANA 5 (a "semana 34" do ano) — PREPARO, não aula do livro ═══════════
      {
        n: 5, key: 'prep', icon: '🎯',
        title: 'Preparo: Viewpoint 2 & revisão final',
        goal: 'Chegar pronto pra aula ao vivo do Viewpoint 2 (descrever um negócio) e pro ' +
              'teste final — sem repetir o vídeo ou o teste em si, que são só na aula.',
        comp: 'Você descreve um negócio/organização (tipo, produtos, tamanho, clientes) ' +
              'usando a gramática das 8 units, pronto pra discutir isso ao vivo com o professor.',
        live: [
          'Viewpoint 2: Describing businesses (vídeo + discussão) — SÓ na aula ao vivo',
          'Teste final — SÓ na aula ao vivo'
        ],
        bridge: 'O Viewpoint 2 e o teste final acontecem com o professor, ao vivo — não tem ' +
                'vídeo nem prova aqui no app. Esta semana treina o que você vai precisar ' +
                'usar nessas duas aulas: descrever um negócio e revisar a gramática de ' +
                'todas as 8 units.',
        nextLive: 'Viewpoint 2 — descrevendo negócios — e o teste final. Ao vivo, com o professor.',
        ican: [
          'I can describe the type, size and products of a business.',
          "I can say who a company's clients are.",
          'I can use present simple, can/can\'t, possessives and was/were together.',
          "I'm ready for the Viewpoint 2 class and the final test."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — descrever um negócio', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: descrever um negócio', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs8w5:drl:type', unit: 8, waSec: 'Drill · Business',
                title: '🔁 Drill 1 — tipo de negócio', focus: 'tipo',
                frame: "It's ___.", ptHint: 'É um(a) ___.',
                slots: ['a small business', 'a large organization', 'an international company',
                        'a family business', 'a charity'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs8w5:drl:activity', unit: 8, waSec: 'Drill · Business',
                title: '🔁 Drill 2 — o que a empresa faz', focus: 'atividade',
                frame: 'We ___.', ptHint: 'Nós ___.',
                slots: ['sell products online', 'export to other countries', 'design websites',
                        'manage projects', 'work with clients face-to-face'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Revisão mista — as 8 units', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs8w5:c1', title: '🔧 Presente simples:',
                main: 'The company ___ (export) to 40 countries.',
                options: DF.shuffle([{ label: 'exports', correct: true }, { label: 'export' }]),
                expl: 'it → exports.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs8w5:c2', title: '🔧 can/can\'t:',
                main: 'We ___ deliver in 24 hours.',
                options: DF.shuffle([{ label: 'can', correct: true }, { label: 'does' }]),
                expl: 'can + verbo base.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs8w5:c3', title: '🔧 Possessivo:',
                main: 'The company changed ___ logo last year.',
                options: DF.shuffle([{ label: 'its', correct: true }, { label: "it's" }]),
                expl: 'its = possessivo de "it".' },
              { ui: 'choice', cat: 'gra', srsId: 'bs8w5:c4', title: '🔧 was/were:',
                main: 'The company ___ small in 2015. Now it\'s big.',
                options: DF.shuffle([{ label: 'was', correct: true }, { label: 'is' }]),
                expl: 'passado = was.' },
              { ui: 'order', cat: 'fun', srsId: 'bs8w5:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'What does your company sell',
                expl: 'What does your company sell?' },
              { ui: 'order', cat: 'fun', srsId: 'bs8w5:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'How many people work in your office',
                expl: 'How many people work in your office?' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Descreva um negócio de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs8w5:build:1', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Descreva sua empresa (ou uma que você conhece)',
                prompt: 'Diga o tipo, o que ela vende ou faz, e quem são os clientes. Isso é ' +
                        'exatamente o que o Viewpoint 2 vai pedir na aula.',
                example: "It's a retail company. We sell clothes online. Our clients are in " +
                         'Brazil and Portugal.',
                mustUse: ["It's"] }
            ]
          }
        ],

        more: [
          {
            id: 'gen-w5', icon: '♾️', name: 'Revisão infinita — gramática misturada', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 Presente, can e passado, misturados',
                templates: ['Brazil', 'Japan', 'the UK', 'sell', 'design', 'export'],
                cmds: ['Nationality', 'Third person'],
                n: 6
              },
              drills: [
                { frame: "It's ___.",
                  pool: ['a small business', 'a large organization', 'an international company'],
                  focus: 'tipo', ptHint: 'É um(a) ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-5', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
