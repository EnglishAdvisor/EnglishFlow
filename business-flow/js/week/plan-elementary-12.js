/* ENGLISH FLOW — week/plan-elementary-12.js
   BUSINESS ELEMENTARY · UNIT 12 "Schedules"

   Numeração corrida do Felipe: Unit 12 = semanas 45–48.
     semana 45 = U12 W1 · Working with words (calendars & schedules)
     semana 46 = U12 W2 · Language at work (present perfect)
     semana 47 = U12 W3 · Practically speaking (prepositions of time) +
                 Business communication (planning a schedule)
     semana 48 = U12 W4 · Talking point + teste (fecha a unidade e a trilha)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Vocabulário de agenda e
   gramática são conhecimento geral, mas os cronogramas e reuniões são
   autorais — universo Marcom Global, nunca Original Oils/Greta Helsing
   do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const SCHEDCOLL = [
    { en: 'tight deadline', pt: 'prazo apertado' },
    { en: 'busy period', pt: 'período de muita atividade' },
    { en: 'annual leave', pt: 'férias anuais' },
    { en: 'quiet period', pt: 'período tranquilo' },
    { en: 'public holiday', pt: 'feriado nacional' },
    { en: 'time off', pt: 'folga' }
  ];
  const PREPTIME = [
    { en: 'on Monday', pt: 'dia da semana → on' },
    { en: 'in spring', pt: 'estação/mês/ano → in' },
    { en: 'at ten o\'clock', pt: 'hora → at' },
    { en: 'at the weekend', pt: 'exceção fixa → at' },
    { en: 'on public holidays', pt: 'dia específico → on' }
  ];
  const SCHEDEXPR = [
    "What's the deadline?", 'How much time do we need for...?', "Let's start...",
    'Why don\'t we...?', 'Is everyone happy with that?', 'So, to summarize...'
  ];

  DF.PLAN.elementary[12] = {
    unit: 12,
    title: 'Schedules',
    subtitle: 'Prazos, o que já foi feito, e planejar um cronograma',
    icon: '🗓️',

    mindmap: {
      center: 'Schedules',
      sub: 'Falar de prazos, o que já aconteceu, e planejar junto',
      branches: [
        {
          icon: '🗓️', name: 'Calendars & schedules',
          leaves: SCHEDCOLL.map(function (s) { return { en: s.en, pt: s.pt }; }),
          note: '"tight" = apertado (tempo), "busy"/"quiet" = cheio/tranquilo (período) — ' +
                'cada adjetivo combina com um substantivo específico.'
        },
        {
          icon: '✅', name: 'Present perfect',
          leaves: [
            { en: "I've sent the invoice.", pt: 'have/has + particípio passado' },
            { en: "I haven't received it yet.", pt: 'negativa + yet' },
            { en: 'Have you contacted the suppliers?', pt: 'pergunta' },
            { en: "I've already done it.", pt: 'já fiz (antes do esperado)' }
          ],
          note: 'Present perfect fala de uma ação passada que ainda afeta o presente — ' +
                '"I\'ve finished the report" = o relatório está pronto AGORA.'
        },
        {
          icon: '📆', name: 'Prepositions of time',
          leaves: PREPTIME.map(function (p) { return { en: p.en, pt: p.pt }; }),
          note: 'on + dia, in + período maior (mês/estação/ano), at + hora ou exceções ' +
                'fixas (at night, at the weekend).'
        },
        {
          icon: '📋', name: 'Planning a schedule',
          leaves: SCHEDEXPR.map(function (e) { return { en: e, pt: '' }; }),
          note: '"So, to summarize..." fecha a reunião confirmando o que foi combinado — ' +
                'sempre útil antes de encerrar.'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 45" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🗓️',
        title: 'Working with words',
        goal: 'Falar de prazos e períodos do calendário de trabalho.',
        comp: 'Você usa colocações como "tight deadline", "busy period" e "annual leave" ' +
              'pra descrever o calendário e os prazos do seu trabalho.',
        live: ['Calendars and schedules', 'Busy and quiet periods', 'Deadlines'],
        nextLive: 'Semana 2 · Language at work — present perfect.',
        bridge: 'Na aula vocês viram as colocações com os gráficos de negócio do livro. ' +
                'Aqui o negócio é outro — mas "tight deadline", "busy period" são as mesmas.',
        ican: [
          'I can talk about deadlines and busy periods.',
          'I can talk about annual leave and public holidays.',
          "I can describe my work calendar."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — schedules', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique a expressão', tag: 'listening',
            items: SCHEDCOLL.slice(0, 4).map(function (s) {
              var others = DF.shuffle(SCHEDCOLL.filter(function (o) { return o.en !== s.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be12w1:radar:' + s.en,
                title: '🗓️ O que você ouviu?',
                tts: s.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: s.en,
                options: DF.shuffle([{ label: s.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: s.en + ' = ' + s.pt, feedbackTts: s.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: falando do calendário', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be12w1:drl:1', unit: 12, waSec: 'Drill · Schedules',
                title: '🔁 Drill — o período do trabalho', focus: 'período',
                frame: 'December is our ___.', ptHint: 'Dezembro é nosso ___.',
                slots: SCHEDCOLL.map(function (s) { return s.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'O calendário da empresa', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be12w1:dlg:1',
                title: '🎧 Priya explica o período de trabalho',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Noah', en: 'Is this a busy period for your team?' },
                  { who: 'Priya', en: "Yes, we have a very tight deadline this month." },
                  { who: 'Noah', en: 'Have you taken any annual leave this year?' },
                  { who: 'Priya', en: "Not yet. It's too busy right now." }
                ],
                question: 'Como é o período atual da Priya?',
                options: DF.shuffle([
                  { label: 'Muito ocupado, prazo apertado', correct: true },
                  { label: 'Tranquilo' }, { label: 'De férias' }, { label: 'Não disse' }
                ]),
                expl: '"We have a very tight deadline this month."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be12w1:dlg:2',
                title: '🎧 O feriado nacional',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'Is Monday a public holiday?' },
                  { who: 'Elena', en: "Yes, it is. We're closed that day." },
                  { who: 'Kenji', en: "Great, I need some time off anyway." }
                ],
                question: 'Segunda-feira é feriado?',
                options: DF.shuffle([
                  { label: 'Sim', correct: true }, { label: 'Não' },
                  { label: 'Não disse' }, { label: 'Só de manhã' }
                ]),
                expl: '"Yes, it is. We\'re closed that day."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be12w1:bc:1', unit: 12, waSec: 'Backchain',
                title: '🧱 O prazo apertado', ptHint: 'Temos um prazo muito apertado esse mês.',
                chain: ['month', 'this month', 'deadline this month',
                        'tight deadline this month', 'We have a very tight deadline this month.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be12w1:c1', title: '🗓️ Qual expressão?',
                main: "A date by which something must be done, with not much time to do it.",
                options: DF.shuffle([{ label: 'tight deadline', correct: true }, { label: 'quiet period' }]),
                expl: 'tight deadline = prazo apertado.' },
              { ui: 'type', cat: 'voc', srsId: 'be12w1:t1', title: '🔧 Complete:',
                main: 'a___al leave (férias que você tem direito por ano)', answers: ['annual'],
                expl: 'annual leave.' },
              { ui: 'order', cat: 'fun', srsId: 'be12w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'This is a very busy period',
                expl: 'This is a very busy period.' },
              { ui: 'match', cat: 'fun', srsId: 'be12w1:match:1', title: '🔗 Ligue à tradução:',
                pairs: SCHEDCOLL.slice(0, 4).map(function (s) { return [s.en, s.pt]; }) }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale do seu calendário', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be12w1:build:1', unit: 12, waSec: 'Sua vez',
                title: '🗣️ Diga qual é o período mais ocupado do seu trabalho',
                prompt: 'Use "busy period" ou "tight deadline".',
                example: 'December is our busiest period, with very tight deadlines.',
                mustUse: ['busy'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'O calendário completo do ano', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be12w1+:b1', unit: 12, waSec: 'Praticar mais',
                title: '🔥 Descreva os períodos do ano no seu trabalho',
                prompt: 'Grave: um período ocupado, um tranquilo, e quando você tira férias.',
                example: 'December is a busy period. July is quieter. I usually take annual ' +
                         'leave in January.',
                mustUse: ['busy period'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de schedules', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'December is our ___.', pool: SCHEDCOLL.map(function (s) { return s.en; }),
                  focus: 'período', ptHint: 'Dezembro é nosso ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 46" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '✅',
        title: 'Language at work',
        goal: 'Dizer o que já foi feito e o que ainda falta — present perfect.',
        comp: 'Você usa have/has + particípio passado pra falar de ações passadas que ainda ' +
              'importam agora, e "yet" pra perguntar ou dizer o que falta.',
        live: ['Present perfect — positive, negative, questions', "yet", 'Checking progress on tasks'],
        nextLive: 'Semana 3 · Practically speaking — prepositions of time, e Business ' +
                   'communication — planning a schedule.',
        bridge: 'Na aula vocês praticaram present perfect com o pedido de sabonete do livro. ' +
                'Aqui o pedido é outro — mas have/has + particípio não muda.',
        ican: [
          'I can use present perfect to talk about completed actions.',
          "I can ask if something has been done yet.",
          'I can say what I have and haven\'t done yet.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — present perfect', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be12w2:tf:1', unit: 12, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I have sent the invoice."',
                ptHint: 'Eu enviei a fatura.',
                rounds: [
                  { base: 'I have sent the invoice.', cmd: 'Negative', answer: "I haven't sent the invoice." },
                  { base: 'I have sent the invoice.', cmd: 'Question', answer: 'Have you sent the invoice?' },
                  { base: 'She has contacted the client.', cmd: 'Negative', answer: "She hasn't contacted the client." },
                  { base: 'She has contacted the client.', cmd: 'Question', answer: 'Has she contacted the client?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'be12w2:tf:2', unit: 12, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "Have you finished the report?"',
                ptHint: 'Você terminou o relatório?',
                rounds: [
                  { base: 'Have you finished the report?', cmd: 'Short answer — yes', answer: 'Yes, I have.' },
                  { base: 'Have you finished the report?', cmd: 'Short answer — no', answer: "No, I haven't." },
                  { base: 'Has he called back?', cmd: 'Short answer — yes', answer: 'Yes, he has.' },
                  { base: 'Has he called back?', cmd: 'Short answer — no', answer: "No, he hasn't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: o que já foi feito', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be12w2:drl:1', unit: 12, waSec: 'Drill · Present perfect',
                title: '🔁 Drill — já fiz', focus: 'presente perfeito',
                frame: "I've already ___ it.", ptHint: 'Eu já ___.',
                slots: ['sent', 'checked', 'finished', 'confirmed'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Conferindo o progresso', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be12w2:dlg:1',
                title: '🎧 Sara pergunta sobre o pedido',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Sara', en: 'Have you sent the order yet?' },
                  { who: 'Marco', en: "Yes, I've already sent it." },
                  { who: 'Sara', en: 'Have you contacted the supplier?' },
                  { who: 'Marco', en: "No, I haven't contacted them yet." }
                ],
                question: 'O Marco já contatou o fornecedor?',
                options: DF.shuffle([
                  { label: 'Não, ainda não', correct: true }, { label: 'Sim' },
                  { label: 'Não disse' }, { label: 'Contatou pela metade' }
                ]),
                expl: "\"No, I haven't contacted them yet.\""
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be12w2:dlg:2',
                title: '🎧 A entrega atrasada',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: "Has the delivery arrived yet?" },
                  { who: 'Priya', en: "No, it hasn't. We've had a problem with production." },
                  { who: 'Kenji', en: 'Have you spoken to the factory?' },
                  { who: 'Priya', en: "Yes, I've already called them." }
                ],
                question: 'Por que a entrega está atrasada?',
                options: DF.shuffle([
                  { label: 'Problema na produção', correct: true },
                  { label: 'Falta de transporte' }, { label: 'Feriado' }, { label: 'Não disse' }
                ]),
                expl: "\"We've had a problem with production.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be12w2:bc:1', unit: 12, waSec: 'Backchain',
                title: '🧱 Perguntando com yet', ptHint: 'Você já mandou o pedido?',
                chain: ['yet', 'the order yet', 'sent the order yet', 'you sent the order yet',
                        'Have you sent the order yet?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be12w2:t1', title: '🔧 Complete:',
                main: 'I ___ (not/finish) the report yet.', answers: ["haven't finished"],
                expl: 'I → haven\'t finished.', feedbackTts: "haven't finished" },
              { ui: 'type', cat: 'gra', srsId: 'be12w2:t2', title: '🔧 Complete:',
                main: '___ she ___ (contact) the client? (pergunta)', answers: ['Has, contacted'],
                expl: 'she → Has she contacted?' },
              { ui: 'choice', cat: 'gra', srsId: 'be12w2:c1', title: '🔧 have ou has:',
                main: 'He ___ already sent the email.',
                options: DF.shuffle([{ label: 'has', correct: true }, { label: 'have' }]),
                expl: 'he → has.' },
              { ui: 'order', cat: 'fun', srsId: 'be12w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'Have you contacted the suppliers',
                expl: 'Have you contacted the suppliers?' },
              { ui: 'match', cat: 'fun', srsId: 'be12w2:match:1', title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Have you sent it yet?', 'Yes, I have.'],
                  ['Has she called?', "No, she hasn't."],
                  ['Have they arrived?', 'Yes, they have.']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Diga o que você já fez', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be12w2:build:1', unit: 12, waSec: 'Sua vez',
                title: '🗣️ Diga o que você já fez e o que ainda não fez',
                prompt: 'Use present perfect afirmativo e negativo com "yet".',
                example: "I've already sent the report, but I haven't called the client yet.",
                mustUse: ["I've already"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de present perfect', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be12w2+:tf1', unit: 12, waSec: 'Praticar mais',
                title: '🔥 Frase base: "We have booked the hotel."',
                ptHint: 'Nós reservamos o hotel.',
                rounds: [
                  { base: 'We have booked the hotel.', cmd: 'Negative', answer: "We haven't booked the hotel." },
                  { base: 'We have booked the hotel.', cmd: 'Question', answer: 'Have you booked the hotel?' },
                  { base: 'They have shipped the order.', cmd: 'Negative', answer: "They haven't shipped the order." },
                  { base: 'They have shipped the order.', cmd: 'Question', answer: 'Have they shipped the order?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de present perfect', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I've already ___ it.",
                  pool: ['sent', 'checked', 'finished', 'confirmed'],
                  focus: 'presente perfeito', ptHint: 'Eu já ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 47" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📆',
        title: 'Practically speaking',
        goal: 'Usar as preposições de tempo certas, e planejar um cronograma em equipe.',
        comp: 'Você usa on/in/at corretamente e conduz uma reunião de planejamento — situa o ' +
              'que precisa ser feito, pergunta prazos, propõe datas, e resume o plano.',
        live: [
          'Prepositions of time — on/in/at',
          "Business communication: planning a schedule",
          'Key expressions: stating the situation, asking about dates, summarizing'
        ],
        bridge: 'Na aula vocês praticaram preposições de tempo e o cronograma do sabonete do ' +
                'livro. Aqui o cronograma é outro — mas on/in/at não mudam.',
        ican: [
          'I can use on/in/at correctly for time.',
          'I can ask about deadlines and time needed.',
          'I can propose a plan and dates.',
          'I can summarize a plan.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — prepositions & planning', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: preposição e plano', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be12w3:drl:prep', unit: 12, waSec: 'Drill · Prepositions',
                title: '🔁 Drill 1 — a preposição certa', focus: 'preposição',
                frame: 'The deadline is ___.', ptHint: 'O prazo é ___.',
                slots: ['on Friday', 'in March', 'at midday', 'on 1st July'] },
              { ui: 'drill', cat: 'pro', srsId: 'be12w3:drl:plan', unit: 12, waSec: 'Drill · Planning',
                title: '🔁 Drill 2 — planejando junto', focus: 'planejamento',
                frame: '___', ptHint: '___',
                slots: ["What's the deadline?", 'How much time do we need for this?',
                        "Why don't we start next week?", 'Is everyone happy with that?'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Planejando o cronograma', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be12w3:dlg:1',
                title: '🎧 Elena planeja o lançamento com a equipe',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Elena', en: "What's the deadline for the launch?" },
                  { who: 'Noah', en: "It's on the 20th of January." },
                  { who: 'Elena', en: 'How much time do we need for testing?' },
                  { who: 'Noah', en: 'About two weeks, so we need to start in December.' }
                ],
                question: 'Quando é o prazo do lançamento?',
                options: DF.shuffle([
                  { label: '20 de janeiro', correct: true }, { label: '20 de dezembro' },
                  { label: '2 de janeiro' }, { label: 'Não disse' }
                ]),
                expl: '"It\'s on the 20th of January."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be12w3:dlg:2',
                title: '🎧 Fechando a reunião',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: "Why don't we start on Monday?" },
                  { who: 'Sara', en: "That works for me. Is everyone happy with that?" },
                  { who: 'Kenji', en: 'Yes. So, to summarize, we start on Monday and finish in June.' }
                ],
                question: 'Quando eles vão começar o trabalho?',
                options: DF.shuffle([
                  { label: 'Na segunda-feira', correct: true }, { label: 'Em junho' },
                  { label: 'Amanhã' }, { label: 'Não disse' }
                ]),
                expl: '"Why don\'t we start on Monday?"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be12w3:bc:1', unit: 12, waSec: 'Backchain',
                title: '🧱 Resumindo o plano', ptHint: 'Então, resumindo, começamos na segunda e terminamos em junho.',
                chain: ['June', 'finish in June', 'Monday and finish in June',
                        'start on Monday and finish in June',
                        'So, to summarize, we start on Monday and finish in June.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'be12w3:c1', title: '📆 on, in ou at?',
                main: 'The meeting is ___ Friday.',
                options: DF.shuffle([{ label: 'on', correct: true }, { label: 'in' }, { label: 'at' }]),
                expl: 'dia da semana → on.' },
              { ui: 'choice', cat: 'gra', srsId: 'be12w3:c2', title: '📆 on, in ou at?',
                main: 'We launch the product ___ spring.',
                options: DF.shuffle([{ label: 'in', correct: true }, { label: 'on' }, { label: 'at' }]),
                expl: 'estação → in.' },
              { ui: 'choice', cat: 'gra', srsId: 'be12w3:c3', title: '📆 on, in ou at?',
                main: "Let's meet ___ midday.",
                options: DF.shuffle([{ label: 'at', correct: true }, { label: 'on' }, { label: 'in' }]),
                expl: 'hora → at.' },
              { ui: 'order', cat: 'fun', srsId: 'be12w3:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'What is the deadline for this',
                expl: "What's the deadline for this?" },
              { ui: 'match', cat: 'fun', srsId: 'be12w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["What's the deadline?", "It's on Friday."],
                  ["Why don't we start next week?", "That works for me."],
                  ['Is everyone happy with that?', 'Yes, I agree.']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Planeje um cronograma de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be12w3:build:1', unit: 12, waSec: 'Sua vez',
                title: '🗣️ Proponha um prazo e resuma o plano',
                prompt: 'Use "What\'s the deadline?" e "So, to summarize...".',
                example: "What's the deadline? It's in March. So, to summarize, we start now " +
                         "and finish in March.",
                mustUse: ['deadline'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A reunião de planejamento completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be12w3+:b1', unit: 12, waSec: 'Praticar mais',
                title: '🔥 Planeje um cronograma do início ao fim',
                prompt: 'Grave: pergunte o prazo, proponha uma data pra começar, e resuma.',
                example: "What's the deadline? Why don't we start on Monday? So, to summarize, " +
                         "we start on Monday and finish by the deadline.",
                mustUse: ['deadline'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de preposições', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The deadline is ___.',
                  pool: ['on Friday', 'in March', 'at midday', 'on 1st July'],
                  focus: 'preposição', ptHint: 'O prazo é ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 48" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade e a trilha: planejar um cronograma completo, do início ao fim.',
        comp: 'Você discute um cronograma, pergunta prazos, propõe um plano, e chega a um ' +
              'acordo com datas — os itens do speaking test.',
        live: [
          'Talking point: the revision game — revisão de toda a trilha Elementary',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (planejar um cronograma)'
        ],
        bridge: 'Na aula vocês jogaram o jogo de revisão de toda a trilha e o professor ' +
                'aplicou o teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — ' +
                'discutir prazos, propor um plano e fechar as datas.',
        nextLive: 'Fim do Business Elementary! Parabéns pela trilha completa.',
        ican: [
          "I can state the current situation of a project.",
          'I can ask about deadlines.',
          'I can decide what needs to be done and propose a plan.',
          'I can agree on a final plan with dates.',
          'I can complete the Unit 12 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'O jogo de revisão', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be12w4:g:1', unit: 12, waSec: 'Talking Point',
                title: '🎲 Diga o que você já fez essa semana',
                prompt: 'Use present perfect com "already" ou "yet".',
                example: "I've already sent the report, but I haven't called the client yet.",
                mustUse: ["I've already"] },
              { ui: 'build', cat: 'fun', srsId: 'be12w4:g:2', unit: 12, waSec: 'Talking Point',
                title: '🎲 Proponha um prazo pra um projeto',
                prompt: 'Diga o prazo e proponha quando começar.',
                example: "The deadline is in March. Why don't we start in January?",
                mustUse: ['deadline'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be12w4:pt:1', title: '🗓️ Qual expressão?',
                main: 'A day when most shops, businesses and schools close.',
                options: DF.shuffle([{ label: 'public holiday', correct: true }, { label: 'quiet period' }]),
                expl: 'public holiday = feriado nacional.' },
              { ui: 'choice', cat: 'gra', srsId: 'be12w4:pt:2', title: '🔧 Present perfect:',
                main: 'She ___ (not/finish) the report yet.',
                options: DF.shuffle([{ label: "hasn't finished", correct: true }, { label: "didn't finish" }]),
                expl: 'she → hasn\'t finished.' },
              { ui: 'choice', cat: 'gra', srsId: 'be12w4:pt:3', title: '📆 Preposição:',
                main: 'The launch is ___ spring.',
                options: DF.shuffle([{ label: 'in', correct: true }, { label: 'on' }]),
                expl: 'estação → in.' },
              { ui: 'order', cat: 'fun', srsId: 'be12w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'What is the deadline',
                expl: "What's the deadline?" },
              { ui: 'match', cat: 'fun', srsId: 'be12w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Have you sent it yet?', 'Yes, I have.'],
                  ["What's the deadline?", "It's on Friday."],
                  ["Is everyone happy?", 'Yes, I agree.']
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be12w4:st:1', unit: 12, waSec: 'Speaking Test',
                title: '🏆 Item 1 — state the situation',
                prompt: 'Diga o que já está pronto e o que falta.',
                example: "I've already booked the room, but we haven't confirmed the date yet.",
                mustUse: ["I've already"] },
              { ui: 'build', cat: 'fun', srsId: 'be12w4:st:2', unit: 12, waSec: 'Speaking Test',
                title: '🏆 Item 2 — ask about the deadline',
                prompt: 'Pergunte o prazo.',
                example: "What's the deadline for this?", mustUse: ['deadline'] },
              { ui: 'build', cat: 'fun', srsId: 'be12w4:st:3', unit: 12, waSec: 'Speaking Test',
                title: '🏆 Item 3 — propose a plan',
                prompt: 'Proponha uma data pra começar.',
                example: "Why don't we start next Monday?", mustUse: ["Why don't we"] },
              { ui: 'build', cat: 'fun', srsId: 'be12w4:st:4', unit: 12, waSec: 'Speaking Test',
                title: '🏆 Item 4 — agree and summarize',
                prompt: 'Confirme e resuma o plano final.',
                example: "So, to summarize, we start on Monday and finish by the deadline.",
                mustUse: ['to summarize'],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'O planejamento completo numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be12w4+:b1', unit: 12, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave tudo: situação atual, prazo, proposta, e resumo final.',
                example: "I've already booked the room, but we haven't confirmed the date yet. " +
                         "What's the deadline? Why don't we start next Monday? So, to summarize, " +
                         "we start on Monday and finish by the deadline.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 12', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'December is our ___.', pool: SCHEDCOLL.map(function (s) { return s.en; }),
                  focus: 'período', ptHint: 'Dezembro é nosso ___.', n: 3 },
                { frame: "I've already ___ it.",
                  pool: ['sent', 'checked', 'finished', 'confirmed'],
                  focus: 'presente perfeito', ptHint: 'Eu já ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
