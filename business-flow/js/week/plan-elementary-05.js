/* ENGLISH FLOW — week/plan-elementary-05.js
   BUSINESS ELEMENTARY · UNIT 5 "Communication"

   Numeração corrida do Felipe: Unit 5 = semanas 17–20.
     semana 17 = U5 W1 · Working with words (documents & correspondence)
     semana 18 = U5 W2 · Language at work (past simple — be & regular verbs)
     semana 19 = U5 W3 · Practically speaking (how to apologize) + Business
                 communication (solving problems)
     semana 20 = U5 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Documentos e gramática são
   conhecimento geral, mas os e-mails, problemas e ligações são autorais —
   universo Whiterock Consultancy, nunca José/Gosport/Uniqlo do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const DOC = [
    { en: 'hard copy', pt: 'cópia impressa', def: 'information from a computer that has been printed out' },
    { en: 'CV', pt: 'currículo', def: 'a written record of your education and jobs' },
    { en: 'business card', pt: 'cartão de visita', def: "a card with somebody's name, job and company" },
    { en: 'invoice', pt: 'fatura', def: 'a list of goods or work, showing what somebody must pay' },
    { en: 'delivery note', pt: 'nota de entrega', def: 'a form you sign when goods are delivered' },
    { en: 'receipt', pt: 'recibo', def: 'a document that shows something has been paid for' },
    { en: 'folder', pt: 'pasta', def: 'a place for storing documents or computer files' }
  ];
  const DOCVERB = [
    { en: 'attach', pt: 'anexar', def: 'add a document to an email' },
    { en: 'print', pt: 'imprimir', def: 'make a hard copy of an electronic document' },
    { en: 'save', pt: 'salvar', def: 'make an electronic copy of a document' },
    { en: 'scan', pt: 'escanear', def: 'write your name on a document' },
    { en: 'sign', pt: 'assinar', def: 'write your name on a document' },
    { en: 'upload', pt: 'enviar/subir (arquivo)', def: 'put a document or file on an online system' },
    { en: 'fill in', pt: 'preencher', def: 'write information in a form' }
  ];

  DF.PLAN.elementary[5] = {
    unit: 5,
    title: 'Communication',
    subtitle: 'Documentos, o que aconteceu, e resolver problemas',
    icon: '📨',

    mindmap: {
      center: 'Communication',
      sub: 'Lidar com documentos, contar o que aconteceu, e resolver problemas',
      branches: [
        {
          icon: '📄', name: 'Documents',
          leaves: DOC.map(function (d) { return { en: d.en, pt: d.pt }; }),
          note: 'invoice = fatura (cobra), receipt = recibo (prova de pagamento) — não confunda.'
        },
        {
          icon: '🖨️', name: 'Document verbs',
          leaves: DOCVERB.map(function (v) { return { en: v.en, pt: v.pt }; }),
          note: 'attach = anexar num e-mail. upload = enviar pra um sistema/site — verbos ' +
                'parecidos mas usados diferente.'
        },
        {
          icon: '⏳', name: 'Past simple — be',
          leaves: [
            { en: 'I was at the meeting.', pt: 'afirmativa' },
            { en: "I wasn't at the meeting.", pt: 'negativa' },
            { en: 'Were you at the meeting?', pt: 'pergunta' },
            { en: "We weren't in the office yesterday.", pt: 'negativa plural' }
          ],
          note: 'was = I/he/she/it. were = you/we/they — igual ao presente (am/is → was, are → were).'
        },
        {
          icon: '📅', name: 'Past simple — regular verbs',
          leaves: [
            { en: 'I called the client yesterday.', pt: 'verbo + ed' },
            { en: 'She decided to wait.', pt: 'verbo terminado em -e → +d' },
            { en: 'They tried a new approach.', pt: 'consoante + y → ied' },
            { en: 'We stopped the meeting.', pt: 'CVC curta → dobra a última letra' },
            { en: "I didn't receive the email.", pt: 'negativa: did not / didn\'t + verbo base' },
            { en: 'Did you call him?', pt: 'pergunta: Did + sujeito + verbo base' }
          ],
          note: 'No passado, a pergunta e a negativa "roubam" o -ed do verbo — ele volta pra ' +
                'forma base depois do did/didn\'t.'
        },
        {
          icon: '🙏', name: 'Apologizing & solving problems',
          leaves: [
            { en: "I'm sorry, I forgot.", pt: 'pedir desculpa' },
            { en: "There's a problem with...", pt: 'explicar o problema' },
            { en: "I'll speak to... / I'll explain the situation.", pt: 'prometer ação' },
            { en: "That would be great. / No problem.", pt: 'aceitar / tranquilizar' }
          ],
          note: 'Desculpar-se bem = 3 passos: reconhecer o erro, explicar rápido, e prometer ' +
                'uma ação — não só "sorry".'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 17" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '📨',
        title: 'Working with words',
        goal: 'Falar de documentos de trabalho e o que fazer com eles.',
        comp: 'Você nomeia documentos comuns (fatura, recibo, CV...) e usa o verbo certo ' +
              'pra cada ação (anexar, imprimir, assinar, enviar).',
        live: ['Documents and correspondence', 'Document verbs', 'Sending and receiving documents'],
        nextLive: 'Semana 2 · Language at work — past simple (be e verbos regulares).',
        bridge: 'Na aula vocês viram documentos e verbos com o texto do livro sobre papel no ' +
                'escritório. Aqui a situação é outra — mas os documentos são os mesmos.',
        ican: [
          'I can name common business documents.',
          'I can use verbs like attach, print, save, scan and sign.',
          'I can talk about sending and receiving documents.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — documents & verbs', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o documento', tag: 'listening',
            items: DOC.slice(0, 4).map(function (d) {
              var others = DF.shuffle(DOC.filter(function (o) { return o.en !== d.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be5w1:radar:' + d.en,
                title: '📄 Que documento você ouviu?',
                tts: d.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: d.en,
                options: DF.shuffle([{ label: d.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: d.en + ' = ' + d.pt, feedbackTts: d.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: o que fazer com o documento', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be5w1:drl:1', unit: 5, waSec: 'Drill · Documents',
                title: '🔁 Drill 1 — o documento', focus: 'documento',
                frame: 'Can you send me the ___?', ptHint: 'Você pode me mandar o(a) ___?',
                slots: DOC.map(function (d) { return d.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'be5w1:drl:2', unit: 5, waSec: 'Drill · Verbs',
                title: '🔁 Drill 2 — o verbo', focus: 'verbo',
                frame: 'Can you ___ the document, please?', ptHint: 'Você pode ___ o documento, por favor?',
                slots: DOCVERB.map(function (v) { return v.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Trocando documentos', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be5w1:dlg:1',
                title: '🎧 Elena precisa do relatório',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Elena', en: 'Can you print a hard copy of the report?' },
                  { who: 'Kenji', en: 'Sure. Do you need me to sign it too?' },
                  { who: 'Elena', en: 'Yes, please. And can you scan the invoice?' },
                  { who: 'Kenji', en: "I can't find it. Can you send it again?" }
                ],
                question: 'O que a Elena pede primeiro?',
                options: DF.shuffle([
                  { label: 'Imprimir uma cópia do relatório', correct: true },
                  { label: 'Escanear a fatura' }, { label: 'Assinar' }, { label: 'Nada' }
                ]),
                expl: '"Can you print a hard copy of the report?"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be5w1:dlg:2',
                title: '🎧 O currículo novo',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: 'Can you attach your CV to the email?' },
                  { who: 'Marco', en: "I already did. Did you receive it?" },
                  { who: 'Priya', en: 'Not yet. Can you upload it to the folder too?' },
                  { who: 'Marco', en: 'OK, I will.' }
                ],
                question: 'O que a Priya pede além do e-mail?',
                options: DF.shuffle([
                  { label: 'Enviar pra pasta também', correct: true },
                  { label: 'Assinar o CV' }, { label: 'Imprimir' }, { label: 'Nada' }
                ]),
                expl: '"Can you upload it to the folder too?"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be5w1:bc:1', unit: 5, waSec: 'Backchain',
                title: '🧱 Pedindo um documento', ptHint: 'Você pode anexar uma cópia da fatura?',
                chain: ['invoice', 'the invoice', 'a copy of the invoice',
                        'attach a copy of the invoice', 'Can you attach a copy of the invoice?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be5w1:c1', title: '📄 Qual documento?',
                main: 'A document that shows something has been paid for.',
                options: DF.shuffle([{ label: 'receipt', correct: true }, { label: 'invoice' }]),
                expl: 'receipt = recibo.' },
              { ui: 'type', cat: 'voc', srsId: 'be5w1:t1', title: '🔧 Complete a palavra:',
                main: 'i_v_ _ce (documento que cobra pagamento)', answers: ['invoice'], expl: 'invoice.' },
              { ui: 'order', cat: 'fun', srsId: 'be5w1:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Can you attach the invoice',
                expl: 'Can you attach the invoice?' },
              { ui: 'match', cat: 'fun', srsId: 'be5w1:match:1', title: '🔗 Ligue o verbo ao uso:',
                pairs: [['attach', 'a document to an email'], ['sign', 'a contract'],
                        ['scan', 'a paper document'], ['upload', 'a file to a system']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Peça um documento de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be5w1:build:1', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Peça pra alguém mandar um documento',
                prompt: 'Use "Can you" e um verbo de documento.',
                example: 'Can you scan the receipt and email it to me?', mustUse: ['Can you'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A troca de documentos completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be5w1+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Peça três coisas numa gravação só',
                prompt: 'Grave: peça pra escanear, assinar e enviar um documento.',
                example: 'Can you scan the contract, sign it, and send it back to me?',
                mustUse: ['Can you'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de documentos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Can you send me the ___?', pool: DOC.map(function (d) { return d.en; }),
                  focus: 'documento', ptHint: 'Você pode me mandar o(a) ___?', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 18" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '⏳',
        title: 'Language at work',
        goal: 'Contar o que aconteceu — past simple com be e verbos regulares.',
        comp: 'Você usa was/were pra descrever situações passadas, e verbos regulares no ' +
              'passado (-ed) pra contar ações — nas formas positiva, negativa e de pergunta.',
        live: ["Past simple — be (was/wasn't/were/weren't)", 'Past simple — regular verbs (-ed)', 'Questions with did'],
        nextLive: 'Semana 3 · Practically speaking — como pedir desculpa, e Business ' +
                   'communication — resolver problemas.',
        bridge: 'Na aula vocês praticaram past simple com a conversa sobre o evento do ' +
                'livro. Aqui o evento é outro — mas was/were e o -ed não mudam.',
        ican: [
          "I can use was/were to talk about the past.",
          'I can use regular past simple verbs (-ed).',
          'I can make negative sentences and questions with did.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — past simple', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be5w2:tf:1', unit: 5, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I was at the meeting."',
                ptHint: 'Eu estava na reunião.',
                rounds: [
                  { base: 'I was at the meeting.', cmd: 'Negative', answer: "I wasn't at the meeting." },
                  { base: 'I was at the meeting.', cmd: 'Question', answer: 'Was I at the meeting?' },
                  { base: 'They were in the office.', cmd: 'Negative', answer: "They weren't in the office." },
                  { base: 'They were in the office.', cmd: 'Question', answer: 'Were they in the office?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'be5w2:tf:2', unit: 5, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I called the client."',
                ptHint: 'Eu liguei pro cliente.',
                rounds: [
                  { base: 'I called the client.', cmd: 'Negative', answer: "I didn't call the client." },
                  { base: 'I called the client.', cmd: 'Question', answer: 'Did you call the client?' },
                  { base: 'She received the email.', cmd: 'Negative', answer: "She didn't receive the email." },
                  { base: 'She received the email.', cmd: 'Question', answer: 'Did she receive the email?' }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: o que aconteceu', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be5w2:drl:1', unit: 5, waSec: 'Drill · Past simple',
                title: '🔁 Drill — ontem eu...', focus: 'passado',
                frame: 'Yesterday I ___.', ptHint: 'Ontem eu ___.',
                slots: ['called the client', 'received the invoice', 'signed the contract',
                        'contacted the customer', 'booked the hotel'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'O que aconteceu ontem', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be5w2:dlg:1',
                title: '🎧 Sara pergunta sobre a reunião',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Sara', en: 'Were you at the presentation yesterday?' },
                  { who: 'Noah', en: "No, I wasn't. I was busy with a client." },
                  { who: 'Sara', en: 'Did you call Priya about it?' },
                  { who: 'Noah', en: "Yes, I called her this morning." }
                ],
                question: 'Por que o Noah não foi na apresentação?',
                options: DF.shuffle([
                  { label: 'Estava ocupado com um cliente', correct: true },
                  { label: 'Esqueceu' }, { label: 'Estava doente' }, { label: 'Não disse' }
                ]),
                expl: "\"No, I wasn't. I was busy with a client.\""
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be5w2:dlg:2',
                title: '🎧 O relatório atrasado',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: "I didn't receive the report yesterday." },
                  { who: 'Elena', en: "I'm sorry. I sent it late. Did you receive it this morning?" },
                  { who: 'Kenji', en: 'Yes, thanks. I checked it already.' }
                ],
                question: 'A Elena mandou o relatório na hora certa?',
                options: DF.shuffle([
                  { label: 'Não, mandou atrasado', correct: true }, { label: 'Sim' },
                  { label: 'Não mandou' }, { label: 'Não disse' }
                ]),
                expl: '"I sent it late."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be5w2:bc:1', unit: 5, waSec: 'Backchain',
                title: '🧱 Perguntando sobre ontem', ptHint: 'Você estava na reunião ontem?',
                chain: ['yesterday', 'meeting yesterday', 'at the meeting yesterday',
                        'you at the meeting yesterday', 'Were you at the meeting yesterday?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be5w2:t1', title: '🔧 Complete:',
                main: 'She ___ (be) at the office yesterday. (negativa)', answers: ["wasn't"],
                expl: 'She → wasn\'t.', feedbackTts: "wasn't" },
              { ui: 'type', cat: 'gra', srsId: 'be5w2:t2', title: '🔧 Passado regular:',
                main: 'I ___ (decide) to wait.', answers: ['decided'],
                expl: 'decide → decided (verbo em -e, só +d).', feedbackTts: 'decided' },
              { ui: 'type', cat: 'gra', srsId: 'be5w2:t3', title: '🔧 Passado regular (irregular na escrita):',
                main: 'They ___ (try) a new approach.', answers: ['tried'],
                expl: 'consoante + y → ied.', feedbackTts: 'tried' },
              { ui: 'choice', cat: 'gra', srsId: 'be5w2:c1', title: '🔧 Pergunta correta:',
                main: 'Escolha a certa:',
                options: DF.shuffle([{ label: 'Did you call him?', correct: true },
                  { label: 'Did you called him?' }]),
                expl: 'Depois de Did, o verbo volta pra forma base.' },
              { ui: 'match', cat: 'fun', srsId: 'be5w2:match:1', title: '🔗 Ligue o presente ao passado:',
                pairs: [['call', 'called'], ['try', 'tried'], ['stop', 'stopped'], ['decide', 'decided']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Conte o que você fez ontem', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be5w2:build:1', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Diga duas coisas que você fez ontem',
                prompt: 'Use dois verbos regulares no passado.',
                example: 'I called a client and I signed a contract.', mustUse: ['ed'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de past simple', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be5w2+:tf1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Frase base: "We booked the hotel."',
                ptHint: 'Nós reservamos o hotel.',
                rounds: [
                  { base: 'We booked the hotel.', cmd: 'Negative', answer: "We didn't book the hotel." },
                  { base: 'We booked the hotel.', cmd: 'Question', answer: 'Did you book the hotel?' },
                  { base: 'He was late.', cmd: 'Negative', answer: "He wasn't late." },
                  { base: 'He was late.', cmd: 'Question', answer: 'Was he late?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de passado', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Yesterday I ___.',
                  pool: ['called the client', 'received the invoice', 'signed the contract',
                         'contacted the customer', 'booked the hotel'],
                  focus: 'passado', ptHint: 'Ontem eu ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 19" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '🙏',
        title: 'Practically speaking',
        goal: 'Pedir desculpa direito, e resolver um problema no trabalho.',
        comp: 'Você pede desculpa com uma razão e uma solução, e conduz uma ligação de ' +
              'problema — explica, promete uma ação, e tranquiliza.',
        live: [
          'How to apologize — reason + solution',
          "Business communication: solving problems",
          'Key expressions: explaining, promising action, thanking'
        ],
        bridge: 'Na aula vocês praticaram desculpas e o problema de entrega do livro. Aqui o ' +
                'problema é outro — mas "I\'m sorry" + razão + solução é a mesma estrutura.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 5.',
        ican: [
          'I can apologize with a reason.',
          'I can explain a problem at work.',
          'I can promise to fix a problem.',
          'I can respond when someone apologizes to me.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — apologizing & problems', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: desculpa e solução', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be5w3:drl:sorry', unit: 5, waSec: 'Drill · Apologize',
                title: '🔁 Drill 1 — o motivo', focus: 'desculpa',
                frame: "I'm sorry, ___.", ptHint: 'Desculpe, ___.',
                slots: ['I forgot', 'my train was late', 'I was busy', "I didn't see your message"] },
              { ui: 'drill', cat: 'pro', srsId: 'be5w3:drl:action', unit: 5, waSec: 'Drill · Promising action',
                title: '🔁 Drill 2 — prometendo resolver', focus: 'ação',
                frame: "I'll ___.", ptHint: 'Eu vou ___.',
                slots: ['speak to him', 'explain the situation', 'fix it today', 'call you back'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Resolvendo um problema', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be5w3:dlg:1',
                title: '🎧 Marco explica o atraso',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Priya', en: "There's a problem with the delivery." },
                  { who: 'Marco', en: "I'm sorry. We had a problem with the supplier." },
                  { who: 'Priya', en: 'Can you fix it today?' },
                  { who: 'Marco', en: "I'll speak to them now and call you back." }
                ],
                question: 'Por que teve problema na entrega?',
                options: DF.shuffle([
                  { label: 'Problema com o fornecedor', correct: true },
                  { label: 'Falta de funcionário' }, { label: 'Erro no sistema' }, { label: 'Não disse' }
                ]),
                expl: '"We had a problem with the supplier."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be5w3:dlg:2',
                title: '🎧 Pedindo desculpa pelo atraso',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Elena', en: "I'm sorry I'm late. My train was late." },
                  { who: 'Kenji', en: "No problem. We didn't start yet." },
                  { who: 'Elena', en: "Thanks for waiting." }
                ],
                question: 'Por que a Elena se atrasou?',
                options: DF.shuffle([
                  { label: 'O trem estava atrasado', correct: true }, { label: 'Esqueceu' },
                  { label: 'Estava doente' }, { label: 'Não disse' }
                ]),
                expl: '"My train was late."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be5w3:bc:1', unit: 5, waSec: 'Backchain',
                title: '🧱 A promessa de ação', ptHint: 'Eu vou falar com eles e te ligo de volta.',
                chain: ['back', 'you back', 'call you back', 'now and call you back',
                        "I'll speak to them now and call you back."] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be5w3:ord:1',
                title: '🧩 Monte a desculpa:', answer: 'I am sorry I forgot',
                expl: "I'm sorry, I forgot." },
              { ui: 'order', cat: 'fun', srsId: 'be5w3:ord:2',
                title: '🧩 Monte a frase:', answer: 'There is a problem with the order',
                expl: "There's a problem with the order." },
              { ui: 'match', cat: 'fun', srsId: 'be5w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["I'm sorry, I'm late.", 'No problem.'],
                  ["There's a problem with the invoice.", "I'll check it now."],
                  ['Thanks for your help.', "No problem."]
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Peça desculpa de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be5w3:build:1', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Peça desculpa com motivo e solução',
                prompt: 'Use "I\'m sorry" + motivo + "I\'ll..." pra prometer resolver.',
                example: "I'm sorry, I forgot. I'll send it right now.", mustUse: ["I'm sorry"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'O problema inteiro, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be5w3+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Explique, peça desculpa e prometa resolver',
                prompt: 'Grave: explique o problema, peça desculpa com motivo, e prometa uma ação.',
                example: "There's a problem with the delivery. I'm sorry, we had an issue with " +
                         "the supplier. I'll speak to them now and call you back.",
                mustUse: ["I'm sorry"] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de desculpas', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm sorry, ___.",
                  pool: ['I forgot', 'my train was late', 'I was busy', "I didn't see your message"],
                  focus: 'desculpa', ptHint: 'Desculpe, ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 20" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: contar o que aconteceu, pedir desculpa e resolver um problema, do início ao fim.',
        comp: 'Você diz o que fez ou não fez, pede desculpa por um erro, e promete uma ação ' +
              '— os itens do speaking test.',
        live: [
          'Talking point: English-only policy — vantagens e desvantagens',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (recado por telefone + desculpa)'
        ],
        bridge: 'Na aula vocês discutiram políticas de idioma na empresa e o professor ' +
                'aplicou o teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — ' +
                'dizer o que fez, pedir desculpa e prometer ação.',
        nextLive: 'Próxima unidade. Começa na segunda-feira seguinte.',
        ican: [
          'I can say what I did and didn\'t do.',
          'I can start and end a phone call.',
          'I can apologize for a mistake.',
          'I can promise to take action.',
          'I can complete the Unit 5 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'O que você fez ontem', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be5w4:g:1', unit: 5, waSec: 'Talking Point',
                title: '🎲 Diga o que você fez e não fez ontem',
                prompt: 'Use uma frase afirmativa e uma negativa no passado.',
                example: "I called a client, but I didn't finish the report.", mustUse: ['ed'] },
              { ui: 'build', cat: 'fun', srsId: 'be5w4:g:2', unit: 5, waSec: 'Talking Point',
                title: '🎲 Peça desculpa por algo',
                prompt: 'Peça desculpa com um motivo e uma solução.',
                example: "I'm sorry, I was busy. I'll finish it today.", mustUse: ["I'm sorry"] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be5w4:pt:1', title: '📄 Qual documento?',
                main: 'A small card with your name, job and company.',
                options: DF.shuffle([{ label: 'business card', correct: true }, { label: 'invoice' }]),
                expl: 'business card = cartão de visita.' },
              { ui: 'choice', cat: 'gra', srsId: 'be5w4:pt:2', title: '🔧 was ou were?',
                main: 'They ___ at the meeting yesterday.',
                options: DF.shuffle([{ label: 'were', correct: true }, { label: 'was' }]),
                expl: 'They → were.' },
              { ui: 'type', cat: 'gra', srsId: 'be5w4:pt:3', title: '🔧 Passado:',
                main: 'I ___ (call) the client yesterday.', answers: ['called'], expl: 'call → called.' },
              { ui: 'order', cat: 'fun', srsId: 'be5w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'I am sorry I forgot',
                expl: "I'm sorry, I forgot." },
              { ui: 'match', cat: 'fun', srsId: 'be5w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["I'm sorry, I'm late.", 'No problem.'],
                  ["There's a problem.", "I'll fix it."],
                  ['Thanks for your help.', "You're welcome."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be5w4:st:1', unit: 5, waSec: 'Speaking Test',
                title: '🏆 Item 1 — say what you did',
                prompt: 'Diga uma coisa que você fez ontem.',
                example: 'I called the client yesterday.', mustUse: ['ed'] },
              { ui: 'build', cat: 'fun', srsId: 'be5w4:st:2', unit: 5, waSec: 'Speaking Test',
                title: "🏆 Item 2 — say what you didn't do",
                prompt: 'Diga uma coisa que você não fez.',
                example: "I didn't finish the report.", mustUse: ["didn't"] },
              { ui: 'build', cat: 'fun', srsId: 'be5w4:st:3', unit: 5, waSec: 'Speaking Test',
                title: '🏆 Item 3 — apologize',
                prompt: 'Peça desculpa com um motivo.',
                example: "I'm sorry, I was busy with a client.", mustUse: ["I'm sorry"] },
              { ui: 'build', cat: 'fun', srsId: 'be5w4:st:4', unit: 5, waSec: 'Speaking Test',
                title: '🏆 Item 4 — promise action',
                prompt: 'Prometa resolver.',
                example: "I'll finish it today.", mustUse: ["I'll"],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A ligação inteira numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be5w4+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave: o que você fez, o que não fez, peça desculpa e prometa resolver.',
                example: "I called the client, but I didn't finish the report. I'm sorry, I was " +
                         "busy. I'll finish it today.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 5', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Can you send me the ___?', pool: DOC.map(function (d) { return d.en; }),
                  focus: 'documento', ptHint: 'Você pode me mandar o(a) ___?', n: 3 },
                { frame: 'Yesterday I ___.',
                  pool: ['called the client', 'received the invoice', 'signed the contract',
                         'contacted the customer', 'booked the hotel'],
                  focus: 'passado', ptHint: 'Ontem eu ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
