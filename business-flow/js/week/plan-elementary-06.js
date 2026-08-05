/* ENGLISH FLOW — week/plan-elementary-06.js
   BUSINESS ELEMENTARY · UNIT 6 "Networking"

   Numeração corrida do Felipe: Unit 6 = semanas 21–24.
     semana 21 = U6 W1 · Working with words (social media & networking)
     semana 22 = U6 W2 · Language at work (past simple irregular verbs +
                 time expressions)
     semana 23 = U6 W3 · Practically speaking (describing a trip) + Business
                 communication (making conversation)
     semana 24 = U6 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Redes sociais e gramática
   são conhecimento geral, mas as conversas e viagens são autorais —
   universo Marcom Global, nunca Giang/Enzo/Ho Chi Minh do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const NETVERB = [
    { en: 'join', pt: 'entrar/aderir (a um grupo/rede)' },
    { en: 'add', pt: 'adicionar (contato)' },
    { en: 'update', pt: 'atualizar (status/perfil)' },
    { en: 'follow', pt: 'seguir' },
    { en: 'search for', pt: 'procurar' },
    { en: 'comment on', pt: 'comentar em' },
    { en: 'share', pt: 'compartilhar' },
    { en: 'connect with', pt: 'se conectar com' }
  ];
  const NETNOUN = [
    { en: 'network', pt: 'rede' },
    { en: 'profile', pt: 'perfil' },
    { en: 'post', pt: 'postagem' },
    { en: 'contact', pt: 'contato' },
    { en: 'group', pt: 'grupo' },
    { en: 'status', pt: 'status' }
  ];
  const PASTIRR = [
    { base: 'go', pt: 'ir', past: 'went' },
    { base: 'come', pt: 'vir', past: 'came' },
    { base: 'have', pt: 'ter', past: 'had' },
    { base: 'take', pt: 'pegar/levar', past: 'took' },
    { base: 'leave', pt: 'sair/partir', past: 'left' },
    { base: 'meet', pt: 'encontrar', past: 'met' },
    { base: 'fly', pt: 'voar', past: 'flew' },
    { base: 'see', pt: 'ver', past: 'saw' }
  ];
  const TIMEXP = ['yesterday', 'last night', 'last week', 'two days ago', 'a year ago'];
  const TRIPADJ = [
    { en: 'nice', pt: 'bom/agradável' },
    { en: 'delicious', pt: 'delicioso (comida)' },
    { en: 'interesting', pt: 'interessante' },
    { en: 'terrible', pt: 'terrível' },
    { en: 'tiring', pt: 'cansativo' },
    { en: 'comfortable', pt: 'confortável' },
    { en: 'long', pt: 'longo' }
  ];

  DF.PLAN.elementary[6] = {
    unit: 6,
    title: 'Networking',
    subtitle: 'Redes sociais, viagens e fazer conversa',
    icon: '🤝',

    mindmap: {
      center: 'Networking',
      sub: 'Falar de redes sociais, do passado, e puxar conversa',
      branches: [
        {
          icon: '📱', name: 'Social media verbs',
          leaves: NETVERB.map(function (v) { return { en: v.en, pt: v.pt }; }),
          note: '"follow" = acompanhar postagens de alguém. "connect with" = pedido de ' +
                'rede profissional (LinkedIn) — diferente de "add" (rede pessoal).'
        },
        {
          icon: '💬', name: 'Social media nouns',
          leaves: NETNOUN.map(function (n) { return { en: n.en, pt: n.pt }; }),
          note: '"post" é verbo E substantivo: "I post" (eu posto) / "my post" (minha postagem).'
        },
        {
          icon: '⏳', name: 'Past simple — irregular verbs',
          leaves: PASTIRR.map(function (p) { return { en: p.base + ' → ' + p.past, pt: p.pt }; }),
          note: 'Verbo irregular não segue o -ed — precisa decorar cada forma. "go/went", ' +
                '"have/had" são dos mais comuns no trabalho.'
        },
        {
          icon: '📅', name: 'Time expressions',
          leaves: TIMEXP.map(function (t) { return { en: t, pt: '' }; }),
          note: 'Normalmente no final da frase ("I left yesterday"), mas pode ir no início ' +
                'pra dar ênfase ("Yesterday I was busy").'
        },
        {
          icon: '✈️', name: 'Describing a trip',
          leaves: TRIPADJ.map(function (a) { return { en: a.en, pt: a.pt }; }),
          note: '"delicious" só pra comida. "comfortable" pra hotel/voo. "tiring" pra ' +
                'viagem longa — cada adjetivo combina com um tipo de coisa.'
        },
        {
          icon: '🗣️', name: 'Making conversation',
          leaves: [
            { en: 'Can I join you? / I hear you work for...', pt: 'começar a conversa' },
            { en: 'Would you like another coffee?', pt: 'oferecer algo' },
            { en: 'Yes, please. / No, thanks, I\'m fine.', pt: 'responder à oferta' },
            { en: 'Please excuse me. / Nice talking to you.', pt: 'encerrar a conversa' }
          ],
          note: '"Please excuse me" é a forma educada de sair de uma conversa — não é pedido ' +
                'de desculpa por erro.'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 21" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🤝',
        title: 'Working with words',
        goal: 'Falar do que você faz nas redes sociais e profissionais.',
        comp: 'Você usa os verbos certos de rede social (join, follow, share, connect with) ' +
              'e nomeia as partes de um perfil (profile, post, contact, group).',
        live: ['Social media and networking', 'Social media verbs', 'Social media nouns'],
        nextLive: 'Semana 2 · Language at work — past simple (verbos irregulares) e time expressions.',
        bridge: 'Na aula vocês viram os verbos de rede social com os exemplos do livro. Aqui ' +
                'a rede é outra — mas os verbos são os mesmos.',
        ican: [
          'I can use social media verbs (join, follow, share, connect with).',
          'I can name parts of a social media profile.',
          'I can talk about how I use social media for work.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — social media', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o verbo', tag: 'listening',
            items: NETVERB.slice(0, 4).map(function (v) {
              var others = DF.shuffle(NETVERB.filter(function (o) { return o.en !== v.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be6w1:radar:' + v.en,
                title: '📱 Que ação você ouviu?',
                tts: v.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: v.en,
                options: DF.shuffle([{ label: v.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: v.en + ' = ' + v.pt, feedbackTts: v.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: usando a rede social', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be6w1:drl:1', unit: 6, waSec: 'Drill · Social verbs',
                title: '🔁 Drill 1 — o verbo certo', focus: 'verbo',
                frame: 'I ___ my professional network.', ptHint: 'Eu ___ minha rede profissional.',
                slots: ['update', 'search for', 'build'] },
              { ui: 'drill', cat: 'pro', srsId: 'be6w1:drl:2', unit: 6, waSec: 'Drill · Social nouns',
                title: '🔁 Drill 2 — o que tem no perfil', focus: 'substantivo',
                frame: 'Check your ___.', ptHint: 'Confira seu(sua) ___.',
                slots: NETNOUN.map(function (n) { return n.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Usando redes profissionais', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be6w1:dlg:1',
                title: '🎧 Priya explica pro Noah como usar a rede',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Noah', en: 'How do I build a professional network?' },
                  { who: 'Priya', en: "First, connect with your colleagues. Then, join some groups." },
                  { who: 'Noah', en: 'Should I share articles too?' },
                  { who: 'Priya', en: "Yes, and comment on other people's posts." }
                ],
                question: 'O que a Priya sugere fazer primeiro?',
                options: DF.shuffle([
                  { label: 'Conectar com colegas', correct: true },
                  { label: 'Entrar em grupos' }, { label: 'Compartilhar artigos' }, { label: 'Nada' }
                ]),
                expl: '"First, connect with your colleagues."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be6w1:dlg:2',
                title: '🎧 Seguindo a empresa',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'Do you follow our company page?' },
                  { who: 'Elena', en: "Yes, I follow it and I share the posts sometimes." },
                  { who: 'Kenji', en: 'Great, that helps a lot.' }
                ],
                question: 'O que a Elena faz com as postagens da empresa?',
                options: DF.shuffle([
                  { label: 'Compartilha', correct: true }, { label: 'Ignora' },
                  { label: 'Apaga' }, { label: 'Não disse' }
                ]),
                expl: '"I follow it and I share the posts sometimes."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be6w1:bc:1', unit: 6, waSec: 'Backchain',
                title: '🧱 Construindo a rede', ptHint: 'Primeiro, conecte-se com seus colegas.',
                chain: ['colleagues', 'your colleagues', 'connect with your colleagues',
                        'First, connect with your colleagues.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be6w1:c1', title: '📱 Qual verbo?',
                main: 'To write something online so other people can read it.',
                options: DF.shuffle([{ label: 'post', correct: true }, { label: 'follow' }]),
                expl: 'post = postar.' },
              { ui: 'type', cat: 'voc', srsId: 'be6w1:t1', title: '🔧 Complete a palavra:',
                main: 'pr_f_le (o que descreve você numa rede)', answers: ['profile'], expl: 'profile.' },
              { ui: 'order', cat: 'fun', srsId: 'be6w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'I connect with my colleagues online',
                expl: 'I connect with my colleagues online.' },
              { ui: 'match', cat: 'fun', srsId: 'be6w1:match:1', title: '🔗 Ligue o verbo ao uso:',
                pairs: [['follow', 'a company page'], ['connect with', 'a colleague'],
                        ['share', 'an article'], ['comment on', 'a post']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale do seu uso de redes sociais', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be6w1:build:1', unit: 6, waSec: 'Sua vez',
                title: '🗣️ Diga como você usa redes sociais pro trabalho',
                prompt: 'Use dois verbos de rede social.',
                example: 'I follow companies in my area and I share interesting articles.',
                mustUse: ['follow'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A estratégia de rede completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be6w1+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Explique como construir uma rede profissional',
                prompt: 'Grave 3 passos: conectar, entrar em grupos, compartilhar.',
                example: "First, connect with colleagues. Then, join professional groups. " +
                         "Finally, share and comment on posts.",
                mustUse: ['connect'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de rede social', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I ___ my professional network.',
                  pool: ['update', 'search for', 'build'], focus: 'verbo',
                  ptHint: 'Eu ___ minha rede profissional.', n: 3 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 22" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '⏳',
        title: 'Language at work',
        goal: 'Contar sua última viagem — passado irregular e expressões de tempo.',
        comp: 'Você usa verbos irregulares no passado (went, came, had, took, flew...) e ' +
              'expressões de tempo (yesterday, last week, two days ago).',
        live: ['Past simple — irregular verbs', 'Time expressions', 'Talking about a trip'],
        nextLive: 'Semana 3 · Practically speaking — describing a trip, e Business ' +
                   'communication — making conversation.',
        bridge: 'Na aula vocês praticaram passado irregular com a viagem do livro. Aqui a ' +
                'viagem é outra — mas go→went, have→had não mudam.',
        ican: [
          'I can use common irregular verbs in the past simple.',
          'I can use time expressions (yesterday, last week, two days ago).',
          'I can talk about a business trip in the past.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — irregular verbs', tag: 'estudo', mindmap: true },

          {
            id: 'transform', icon: '🔀', name: 'Transformation drill', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be6w2:tf:1', unit: 6, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "I went to Tokyo."',
                ptHint: 'Eu fui a Tóquio.',
                rounds: [
                  { base: 'I went to Tokyo.', cmd: 'Negative', answer: "I didn't go to Tokyo." },
                  { base: 'I went to Tokyo.', cmd: 'Question', answer: 'Did you go to Tokyo?' },
                  { base: 'She had a meeting.', cmd: 'Negative', answer: "She didn't have a meeting." },
                  { base: 'She had a meeting.', cmd: 'Question', answer: 'Did she have a meeting?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'be6w2:tf:2', unit: 6, waSec: 'Transformation Drill',
                title: '🔀 Frase base: "They flew to Berlin."',
                ptHint: 'Eles voaram pra Berlim.',
                rounds: [
                  { base: 'They flew to Berlin.', cmd: 'Negative', answer: "They didn't fly to Berlin." },
                  { base: 'They flew to Berlin.', cmd: 'Question', answer: 'Did they fly to Berlin?' },
                  { base: 'Did you meet the client?', cmd: 'Short answer — yes', answer: 'Yes, I did.' },
                  { base: 'Did you meet the client?', cmd: 'Short answer — no', answer: "No, I didn't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: verbos irregulares', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be6w2:drl:1', unit: 6, waSec: 'Drill · Irregular verbs',
                title: '🔁 Drill — o que aconteceu', focus: 'passado irregular',
                frame: 'I ___ to Singapore last week.', ptHint: 'Eu ___ pra Cingapura semana passada.',
                slots: ['went', 'flew', 'came back'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'A viagem de negócios', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be6w2:dlg:1',
                title: '🎧 Marco conta da viagem pra Sara',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Sara', en: 'When did you go to the conference?' },
                  { who: 'Marco', en: 'I went last week. I flew to Singapore.' },
                  { who: 'Sara', en: 'Did you meet any new clients?' },
                  { who: 'Marco', en: "Yes, I met three companies there." }
                ],
                question: 'Quantas empresas o Marco conheceu?',
                options: DF.shuffle([
                  { label: 'Três', correct: true }, { label: 'Uma' },
                  { label: 'Cinco' }, { label: 'Não disse' }
                ]),
                expl: '"I met three companies there."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be6w2:dlg:2',
                title: '🎧 Chegando tarde',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'When did you come back from your trip?' },
                  { who: 'Priya', en: 'I came back two days ago.' },
                  { who: 'Kenji', en: 'Did you have a good flight?' },
                  { who: 'Priya', en: "It was OK, but I didn't sleep much." }
                ],
                question: 'Quando a Priya voltou da viagem?',
                options: DF.shuffle([
                  { label: 'Há dois dias', correct: true }, { label: 'Ontem' },
                  { label: 'Semana passada' }, { label: 'Não disse' }
                ]),
                expl: '"I came back two days ago."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be6w2:bc:1', unit: 6, waSec: 'Backchain',
                title: '🧱 Contando a viagem', ptHint: 'Eu voei pra Cingapura semana passada.',
                chain: ['week', 'last week', 'Singapore last week', 'to Singapore last week',
                        'I flew to Singapore last week.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be6w2:t1', title: '🔧 Passado irregular:',
                main: 'I ___ (go) to the trade fair yesterday.', answers: ['went'],
                expl: 'go → went.', feedbackTts: 'went' },
              { ui: 'type', cat: 'gra', srsId: 'be6w2:t2', title: '🔧 Passado irregular:',
                main: 'We ___ (have) three meetings last week.', answers: ['had'],
                expl: 'have → had.', feedbackTts: 'had' },
              { ui: 'choice', cat: 'gra', srsId: 'be6w2:c1', title: '🔧 Posição da expressão de tempo:',
                main: 'Escolha a mais natural:',
                options: DF.shuffle([{ label: 'I left the office yesterday.', correct: true },
                  { label: 'I yesterday left the office.' }]),
                expl: 'Expressão de tempo geralmente no final da frase.' },
              { ui: 'order', cat: 'fun', srsId: 'be6w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'When did you come back',
                expl: 'When did you come back?' },
              { ui: 'match', cat: 'fun', srsId: 'be6w2:match:1', title: '🔗 Ligue ao passado:',
                pairs: PASTIRR.slice(0, 4).map(function (p) { return [p.base, p.past]; }) }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Conte sua última viagem', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be6w2:build:1', unit: 6, waSec: 'Sua vez',
                title: '🗣️ Diga onde você foi e quando',
                prompt: 'Use um verbo irregular e uma expressão de tempo.',
                example: 'I went to São Paulo last month.', mustUse: ['went'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de verbos irregulares', tag: 'difícil',
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'be6w2+:tf1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Frase base: "We met the new client."',
                ptHint: 'Nós conhecemos o novo cliente.',
                rounds: [
                  { base: 'We met the new client.', cmd: 'Negative', answer: "We didn't meet the new client." },
                  { base: 'We met the new client.', cmd: 'Question', answer: 'Did you meet the new client?' },
                  { base: 'He took a taxi.', cmd: 'Negative', answer: "He didn't take a taxi." },
                  { base: 'He took a taxi.', cmd: 'Question', answer: 'Did he take a taxi?' }
                ] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de passado', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I ___ to Singapore last week.',
                  pool: ['went', 'flew', 'came back'], focus: 'passado irregular',
                  ptHint: 'Eu ___ pra Cingapura semana passada.', n: 3 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 23" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '🗣️',
        title: 'Practically speaking',
        goal: 'Descrever uma viagem, e puxar conversa num evento.',
        comp: 'Você usa o adjetivo certo pra cada parte da viagem (hotel, voo, comida...) e ' +
              'conduz uma conversa social — começa, oferece algo, e encerra educadamente.',
        live: [
          'Describing a trip — adjectives',
          'Business communication: making conversation',
          'Key expressions: starting, offering, finishing a conversation'
        ],
        bridge: 'Na aula vocês praticaram adjetivos de viagem e a conversa do coquetel do ' +
                'livro. Aqui o evento é outro — mas "Can I join you?" é a mesma expressão.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 6.',
        ican: [
          'I can use adjectives to describe a trip.',
          'I can start a conversation with someone new.',
          'I can offer something and respond to an offer.',
          'I can finish a conversation politely.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — trip adjectives & conversation', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: descrevendo e conversando', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be6w3:drl:trip', unit: 6, waSec: 'Drill · Trip',
                title: '🔁 Drill 1 — como foi a viagem', focus: 'adjetivo',
                frame: 'The ___ was ___.', ptHint: 'O(a) ___ estava ___.',
                slots: ['flight', 'hotel', 'food', 'meeting'] },
              { ui: 'drill', cat: 'pro', srsId: 'be6w3:drl:convo', unit: 6, waSec: 'Drill · Conversation',
                title: '🔁 Drill 2 — começando a conversa', focus: 'conversa',
                frame: '___', ptHint: '___',
                slots: ['Can I join you?', 'I hear you work for Nova Energy.',
                        'Is this your first time here?', 'What do you think of the event?'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'No coquetel da conferência', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be6w3:dlg:1',
                title: '🎧 Elena puxa conversa com um visitante',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Elena', en: 'Can I join you? I hear you work for Vertex Logistics.' },
                  { who: 'Visitor', en: "Yes, that's right. Is this your first time here?" },
                  { who: 'Elena', en: 'No, I was here last year too. Would you like a coffee?' },
                  { who: 'Visitor', en: "Yes, please, thanks." }
                ],
                question: 'Essa é a primeira vez da Elena no evento?',
                options: DF.shuffle([
                  { label: 'Não, ela já foi ano passado', correct: true },
                  { label: 'Sim' }, { label: 'Não disse' }, { label: 'É a segunda vez' }
                ]),
                expl: '"No, I was here last year too."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be6w3:dlg:2',
                title: '🎧 Perguntando sobre a viagem',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Noah', en: 'How was your flight?' },
                  { who: 'Sara', en: "It was long, but comfortable." },
                  { who: 'Noah', en: 'And the hotel?' },
                  { who: 'Sara', en: "It's nice, but the food is terrible!" }
                ],
                question: 'Como a Sara descreve a comida do hotel?',
                options: DF.shuffle([
                  { label: 'Terrível', correct: true }, { label: 'Deliciosa' },
                  { label: 'Interessante' }, { label: 'Não disse' }
                ]),
                expl: '"The food is terrible!"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be6w3:bc:1', unit: 6, waSec: 'Backchain',
                title: '🧱 Encerrando a conversa', ptHint: 'Com licença, foi um prazer conversar com você.',
                chain: ['you', 'talking to you', 'Nice talking to you', 'excuse me',
                        'Please excuse me. Nice talking to you.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be6w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Is this your first time here',
                expl: 'Is this your first time here?' },
              { ui: 'order', cat: 'fun', srsId: 'be6w3:ord:2',
                title: '🧩 Monte a oferta:', answer: 'Would you like another coffee',
                expl: 'Would you like another coffee?' },
              { ui: 'match', cat: 'fun', srsId: 'be6w3:match:1', title: '🔗 Ligue o adjetivo ao uso:',
                pairs: [['delicious', 'food'], ['comfortable', 'hotel'],
                        ['tiring', 'long trip'], ['interesting', 'presentation']] },
              { ui: 'choice', cat: 'gra', srsId: 'be6w3:c1', title: '🗣️ Resposta educada:',
                main: 'Would you like a coffee? Não, obrigado.',
                options: DF.shuffle([{ label: "No, thanks. I'm fine.", correct: true },
                  { label: "No." }]),
                expl: '"No, thanks, I\'m fine" é a forma educada.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Puxe uma conversa de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be6w3:build:1', unit: 6, waSec: 'Sua vez',
                title: '🗣️ Comece, ofereça algo e encerre a conversa',
                prompt: 'Grave os três passos.',
                example: "Can I join you? Would you like a coffee? Nice talking to you.",
                mustUse: ['Can I join you'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A conversa inteira, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be6w3+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis da conversa social',
                prompt: 'Grave os dois lados: começar, perguntar sobre a viagem, oferecer, e encerrar.',
                example: "Can I join you? How was your flight? It was long but comfortable. " +
                         "Would you like a coffee? Yes, please. Nice talking to you.",
                mustUse: ['Can I join you'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de viagem', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The ___ was ___.', pool: ['flight', 'hotel', 'food', 'meeting'],
                  focus: 'adjetivo', ptHint: 'O(a) ___ estava ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 24" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: puxar conversa numa feira de negócios, do início ao fim.',
        comp: 'Você conduz uma conversa social completa — começa, fala do evento, pergunta ' +
              'sobre a empresa da pessoa, oferece algo e encerra — os itens do speaking test.',
        live: [
          'Talking point: the networking game — tabuleiro de perguntas',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (conversa no bar de uma feira)'
        ],
        bridge: 'Na aula vocês jogaram o jogo de rede de contatos e o professor aplicou o ' +
                'teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — começar a ' +
                'conversa, perguntar sobre a empresa, oferecer algo e encerrar.',
        nextLive: 'Próxima unidade. Começa na segunda-feira seguinte.',
        ican: [
          'I can start a conversation at a networking event.',
          "I can ask about someone's company.",
          'I can offer a drink or something to eat.',
          'I can end a conversation politely.',
          'I can complete the Unit 6 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'O jogo de fazer contatos', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be6w4:g:1', unit: 6, waSec: 'Talking Point',
                title: '🎲 Comece uma conversa',
                prompt: 'Puxe assunto com alguém novo num evento.',
                example: 'Can I join you? I hear you work for Aurora Systems.',
                mustUse: ['Can I join you'] },
              { ui: 'build', cat: 'fun', srsId: 'be6w4:g:2', unit: 6, waSec: 'Talking Point',
                title: '🎲 Fale de uma viagem passada',
                prompt: 'Diga onde você foi e como foi a viagem.',
                example: 'I went to Singapore last month. The flight was long, but the hotel was nice.',
                mustUse: ['went'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be6w4:pt:1', title: '📱 Qual verbo?',
                main: 'To write something online so other people can read it.',
                options: DF.shuffle([{ label: 'post', correct: true }, { label: 'follow' }]),
                expl: 'post = postar.' },
              { ui: 'choice', cat: 'gra', srsId: 'be6w4:pt:2', title: '🔧 Passado correto:',
                main: 'We ___ to Dubai last week.',
                options: DF.shuffle([{ label: 'flew', correct: true }, { label: 'flied' }]),
                expl: 'fly → flew.' },
              { ui: 'choice', cat: 'gra', srsId: 'be6w4:pt:3', title: '🔧 Adjetivo certo:',
                main: 'The food at the hotel was really ___.',
                options: DF.shuffle([{ label: 'delicious', correct: true }, { label: 'comfortable' }]),
                expl: 'delicious = pra comida.' },
              { ui: 'order', cat: 'fun', srsId: 'be6w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'Can I join you',
                expl: 'Can I join you?' },
              { ui: 'match', cat: 'fun', srsId: 'be6w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Can I join you?', 'Sure.'],
                  ['Would you like a coffee?', 'Yes, please.'],
                  ['Nice talking to you.', 'You too. Bye.']
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be6w4:st:1', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 1 — start a conversation',
                prompt: 'Comece uma conversa com alguém no evento.',
                example: 'Can I join you?', mustUse: ['join'] },
              { ui: 'build', cat: 'fun', srsId: 'be6w4:st:2', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 2 — ask about their company',
                prompt: 'Pergunte pra quem a pessoa trabalha.',
                example: 'I hear you work for Nova Energy.', mustUse: ['work for'] },
              { ui: 'build', cat: 'fun', srsId: 'be6w4:st:3', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 3 — offer a drink',
                prompt: 'Ofereça uma bebida.',
                example: 'Would you like a drink?', mustUse: ['Would you like'] },
              { ui: 'build', cat: 'fun', srsId: 'be6w4:st:4', unit: 6, waSec: 'Speaking Test',
                title: '🏆 Item 4 — end the conversation',
                prompt: 'Encerre educadamente.',
                example: 'Please excuse me. Nice talking to you.', mustUse: ['excuse me'],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A conversa completa numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be6w4+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave tudo: comece, pergunte sobre a empresa, ofereça uma bebida, e encerre.',
                example: "Can I join you? I hear you work for Nova Energy. Would you like a " +
                         "drink? Please excuse me. Nice talking to you.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 6', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I ___ to Singapore last week.',
                  pool: ['went', 'flew', 'came back'], focus: 'passado irregular',
                  ptHint: 'Eu ___ pra Cingapura semana passada.', n: 3 },
                { frame: 'The ___ was ___.', pool: ['flight', 'hotel', 'food', 'meeting'],
                  focus: 'adjetivo', ptHint: 'O(a) ___ estava ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
