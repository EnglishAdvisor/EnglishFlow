/* ENGLISH FLOW — week/plan-starter-07.js
   BUSINESS STARTER · UNIT 7 "Technology"

   Numeração corrida do Felipe: Unit 7 = semanas 26–29.
     semana 26 = U7 W1 · Working with words (office technology)
     semana 27 = U7 W2 · Language at work (possessive adjectives)
     semana 28 = U7 W3 · Practically speaking (this/that/these/those) + Business
                 communication (giving instructions)
     semana 29 = U7 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Os equipamentos são de uso
   geral (conhecimento comum), mas as situações, e-mails e diálogos são
   autorais — nunca a história exata do livro (Mustafa/Julie/Andrea, IUG,
   Felipe Gonzales). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const GEAR = [
    { en: 'printer', pt: 'impressora' },
    { en: 'USB stick', pt: 'pen drive' },
    { en: 'digital camera', pt: 'câmera digital' },
    { en: 'webcam', pt: 'webcam' },
    { en: 'headset', pt: 'fone com microfone' },
    { en: 'laptop', pt: 'notebook' },
    { en: 'tablet', pt: 'tablet' },
    { en: 'projector', pt: 'projetor' },
    { en: 'smartphone', pt: 'smartphone' },
    { en: 'desktop computer', pt: 'computador de mesa' }
  ];
  const TECH_VERBS = [
    { en: 'click the link', pt: 'clicar no link' },
    { en: 'enter your password', pt: 'digitar sua senha' },
    { en: 'download the file', pt: 'baixar o arquivo' },
    { en: 'scan the document', pt: 'escanear o documento' },
    { en: 'save it on a USB stick', pt: 'salvar num pen drive' },
    { en: 'switch on the projector', pt: 'ligar o projetor' },
    { en: 'connect the laptop', pt: 'conectar o notebook' }
  ];

  DF.PLAN.starter[7] = {
    unit: 7,
    title: 'Technology',
    subtitle: 'Equipamentos de escritório e como resolver um problema técnico',
    icon: '💻',

    mindmap: {
      center: 'Technology',
      sub: 'Nomear equipamentos e pedir/dar instrução técnica',
      branches: [
        {
          icon: '💻', name: 'Office technology',
          leaves: GEAR.map(function (g) { return { en: g.en, pt: g.pt }; }),
          note: 'Equipamento de escritório — vocabulário de conhecimento geral, ' +
                'igual em qualquer empresa.'
        },
        {
          icon: '🖱️', name: 'Verbos técnicos',
          leaves: TECH_VERBS.map(function (v) { return { en: v.en, pt: v.pt }; }),
          note: 'click, enter, download, scan, save, switch on, connect — os verbos ' +
                'que aparecem em quase todo e-mail ou instrução técnica.'
        },
        {
          icon: '👤', name: 'Possessive adjectives',
          leaves: [
            { en: 'my / your / his / her / its / our / their', pt: 'meu, seu, dele, dela, dele/dela(coisa), nosso, deles' },
            { en: "It's my laptop.", pt: 'É o meu notebook.' },
            { en: "Is this her office?", pt: 'Esse é o escritório dela?' }
          ],
          note: 'Vem sempre antes de um substantivo: <b>my</b> laptop, <b>her</b> office ' +
                '— nunca sozinho (isso é o "mine/hers", outra unidade).'
        },
        {
          icon: '📌', name: "Possessive 's",
          leaves: [
            { en: "Nigel's office", pt: 'o escritório do Nigel' },
            { en: "Atif and Giulio's office", pt: 'o escritório do Atif e do Giulio (compartilhado)' },
            { en: "Ben's car / Ben's in the car", pt: "'s = posse OU 's = is, contexto decide" }
          ],
          note: 'Nome de pessoa + \'s = posse. Repare: "Ben\'s car" (carro do Ben) vs ' +
                '"Ben\'s in the car" (Ben está no carro) — o \'s aqui é "is".'
        },
        {
          icon: '👉', name: 'this / that / these / those',
          leaves: [
            { en: 'This is my laptop.', pt: 'perto, singular' },
            { en: "That's your USB stick.", pt: 'longe, singular' },
            { en: 'These are my documents.', pt: 'perto, plural' },
            { en: 'Those are your keys.', pt: 'longe, plural' }
          ],
          note: 'perto vs longe, singular vs plural — os quatro combinam essas duas escolhas.'
        },
        {
          icon: '🧭', name: 'Giving instructions',
          leaves: [
            { en: "What's the problem?", pt: 'pergunta pra entender o problema' },
            { en: "I don't know how to use this.", pt: 'pedir ajuda' },
            { en: 'First, you need to...', pt: 'sequenciar — primeiro' },
            { en: 'Next, ... Then, ...', pt: 'sequenciar — depois' }
          ],
          note: 'First / Next / Then organizam uma instrução em passos — essencial ' +
                'pra explicar qualquer coisa técnica por telefone ou chat.'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 26" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '💻',
        title: 'Working with words',
        goal: 'Nomear equipamentos de escritório e entender um e-mail técnico.',
        comp: 'Você identifica o equipamento pelo nome, lê um e-mail com instruções ' +
              'técnicas e entende os verbos (click, download, scan, save, connect).',
        live: ['Office technology vocabulary', 'Reading a technical email', 'Key tech verbs'],
        nextLive: 'Semana 2 · Language at work — possessive adjectives.',
        bridge: 'Na aula vocês viram o vocabulário de equipamentos e um e-mail técnico. ' +
                'Aqui o e-mail é outro e os equipamentos aparecem em ordem diferente — mas ' +
                'os verbos são os mesmos.',
        ican: [
          'I can name common office technology.',
          'I can understand a short technical email.',
          'I can use verbs like click, download, scan, save and connect.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — office technology', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o equipamento', tag: 'listening',
            items: GEAR.slice(0, 4).map(function (g) {
              var others = DF.shuffle(GEAR.filter(function (x) { return x.en !== g.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'bs7w1:radar:' + g.en,
                title: '💻 Que equipamento você ouviu?',
                tts: g.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: g.en,
                options: DF.shuffle([{ label: g.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: g.en + ' = ' + g.pt, feedbackTts: g.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: pedir e dar instrução', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs7w1:drl:1', unit: 7, waSec: 'Drill · Office tech',
                title: '🔁 Drill 1 — o que você usa', focus: 'equipamento',
                frame: 'I use a ___.', ptHint: 'Eu uso um(a) ___.',
                slots: GEAR.slice(0, 6).map(function (g) { return g.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'bs7w1:drl:2', unit: 7, waSec: 'Drill · Tech verbs',
                title: '🔁 Drill 2 — o pedido', focus: 'verbo',
                frame: 'Can you ___?', ptHint: 'Você pode ___?',
                slots: TECH_VERBS.map(function (v) { return v.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'O e-mail técnico', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs7w1:dlg:1',
                title: '🎧 Beatriz pede ajuda com a apresentação',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Beatriz', en: 'Hi Tom, can you scan the report and email it to me?' },
                  { who: 'Tom', en: "Sure. Can I save it on a USB stick instead?" },
                  { who: 'Beatriz', en: "Yes, that's fine. I'm in the office on Thursday." }
                ],
                question: 'O que a Beatriz pede primeiro?',
                options: DF.shuffle([
                  { label: 'Escanear o relatório', correct: true },
                  { label: 'Baixar um arquivo' }, { label: 'Conectar o projetor' }, { label: 'Ligar o notebook' }
                ]),
                expl: '"Can you scan the report and email it to me?"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs7w1:dlg:2',
                title: '🎧 Problema com a senha',
                lines: [
                  { who: 'Yuki', en: "I can't open the file. Please click the link and enter your password." },
                  { who: 'Hendrik', en: "OK, I clicked it. It's asking for a password." },
                  { who: 'Yuki', en: "Enter the one I sent you by email." }
                ],
                question: 'O que o Hendrik precisa digitar?',
                options: DF.shuffle([
                  { label: 'A senha', correct: true },
                  { label: 'O e-mail' }, { label: 'O link' }, { label: 'O nome do arquivo' }
                ]),
                expl: '"Enter the one I sent you by email." (a senha)'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs7w1:dlg:3',
                title: '🎧 Baixando o arquivo',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Aisha', en: 'Can you download the presentation from the website?' },
                  { who: 'Camila', en: "Yes, I'm downloading it now." },
                  { who: 'Aisha', en: 'Great. Can you save it on the desktop computer?' },
                  { who: 'Camila', en: 'Sure, no problem.' }
                ],
                question: 'Onde a Camila vai salvar a apresentação?',
                options: DF.shuffle([
                  { label: 'No computador de mesa', correct: true },
                  { label: 'No pen drive' }, { label: 'No tablet' }, { label: 'No smartphone' }
                ]),
                expl: '"Can you save it on the desktop computer?"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs7w1:bc:1', unit: 7, waSec: 'Backchain',
                title: '🧱 O pedido técnico', ptHint: 'Você pode escanear o documento e me mandar por e-mail?',
                chain: ['it', 'email it', 'and email it', 'document and email it',
                        'scan the document and email it',
                        'Can you scan the document and email it to me?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'voc', srsId: 'bs7w1:t1', title: '🔧 Complete a palavra:',
                main: 'p_ _ _ _ _r (imprime documentos)', answers: ['printer'], expl: 'printer = impressora.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs7w1:c1', title: '🔧 Verbo correto:',
                main: 'Please ___ the link and then enter your password.',
                options: DF.shuffle([{ label: 'click', correct: true }, { label: 'scan' }, { label: 'save' }]),
                expl: 'click the link = clicar no link.' },
              { ui: 'order', cat: 'fun', srsId: 'bs7w1:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Can you connect the projector',
                expl: 'Can you connect the projector?' },
              { ui: 'match', cat: 'fun', srsId: 'bs7w1:match:1', title: '🔗 Ligue o verbo ao uso:',
                pairs: [
                  ['scan', 'the document'], ['download', 'the file'],
                  ['save', 'it on a USB stick'], ['connect', 'the laptop']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale do seu equipamento', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs7w1:build:1', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Diga três equipamentos que você usa no trabalho',
                prompt: 'Use "I use a/an ___" três vezes.',
                example: 'I use a laptop, a smartphone and a headset.', mustUse: ['I use'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'O e-mail técnico inteiro', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs7w1+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Peça e confirme',
                prompt: 'Grave: peça pra alguém escanear um documento, baixar um arquivo e ' +
                        'salvar num pen drive.',
                example: 'Can you scan the document, download the file and save it on a USB stick?',
                mustUse: ['Can you'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de equipamentos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I use a ___.', pool: GEAR.map(function (g) { return g.en; }),
                  focus: 'equipamento', ptHint: 'Eu uso um(a) ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 27" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '👤',
        title: 'Language at work',
        goal: 'Falar de posse: de quem é o quê no escritório.',
        comp: 'Você usa possessive adjectives (my/your/his/her/its/our/their) e o ' +
              "possessive 's pra dizer de quem é um objeto ou escritório.",
        live: ['Possessive adjectives', "Possessive 's", 'Whose is it?'],
        nextLive: 'Semana 3 · Practically speaking — this/that/these/those, e Business ' +
                   'communication — giving instructions.',
        bridge: 'Na aula vocês praticaram possessive adjectives com a equipe do escritório ' +
                'do livro. Aqui a equipe é outra — mas my/your/his/her/its/our/their não mudam.',
        ican: [
          'I can use possessive adjectives (my, your, his, her, its, our, their).',
          "I can use possessive 's to say who owns something.",
          'I can ask and answer "Whose is it?"'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — possessive adjectives', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill de posse', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'bs7w2:drl:1', unit: 7, waSec: 'Drill · Possessives',
                title: '🔁 Drill 1 — de quem é', focus: 'possessivo',
                frame: '___ office is on the third floor.', ptHint: '___ escritório fica no terceiro andar.',
                slots: ['My', 'Your', 'His', 'Her', 'Our', 'Their'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs7w2:drl:2', unit: 7, waSec: 'Drill · Possessive s',
                title: "🔁 Drill 2 — o 's", focus: 'possessivo',
                frame: "___ office is over there.", ptHint: 'O escritório d(o/a) ___ é ali.',
                slots: ["Camila's", "Hendrik's", "Aisha and Tom's", "the manager's"] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'De quem é isso?', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs7w2:dlg:1',
                title: '🎧 O laptop perdido',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Camila', en: "I can't find my laptop. Is it on your desk?" },
                  { who: 'Hendrik', en: "No, it isn't. Is it in Yuki's office?" },
                  { who: 'Camila', en: "Yes, it is! Thanks." }
                ],
                question: 'Onde estava o laptop da Camila?',
                options: DF.shuffle([
                  { label: 'No escritório da Yuki', correct: true },
                  { label: 'Na mesa do Hendrik' }, { label: 'Na sala de reunião' }, { label: 'Não acharam' }
                ]),
                expl: "\"Is it in Yuki's office?\" — \"Yes, it is!\""
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs7w2:dlg:2',
                title: '🎧 A nova gerente',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Tom', en: "This is Aisha. She's our new marketing manager." },
                  { who: 'Beatriz', en: "Nice to meet you. What's her email?" },
                  { who: 'Tom', en: "It's aisha@whiterockconsultancy.com. Her office is next to mine." }
                ],
                question: 'Onde fica o escritório da Aisha?',
                options: DF.shuffle([
                  { label: 'Do lado do escritório do Tom', correct: true },
                  { label: 'No terceiro andar' }, { label: 'Perto da recepção' }, { label: 'Não disse' }
                ]),
                expl: '"Her office is next to mine."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs7w2:bc:1', unit: 7, waSec: 'Backchain',
                title: '🧱 A pergunta de posse', ptHint: 'É o escritório dela ou o escritório deles?',
                chain: ['office', 'their office', 'or their office', 'office or their office',
                        'her office or their office', 'Is it her office or their office?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'bs7w2:t1', title: '🔧 Complete:',
                main: "I'm the new manager. ___ name's Camila. (I)",
                answers: ['My'], expl: 'I → my.', feedbackTts: 'My' },
              { ui: 'type', cat: 'gra', srsId: 'bs7w2:t2', title: '🔧 Complete:',
                main: "We're from Brazil, but ___ office is in Lisbon. (we)",
                answers: ['our'], expl: 'we → our.', feedbackTts: 'our' },
              { ui: 'choice', cat: 'gra', srsId: 'bs7w2:c1', title: "🔧 its ou it's?",
                main: 'Oxford is famous for ___ university.',
                options: DF.shuffle([{ label: 'its', correct: true }, { label: "it's" }]),
                expl: "its = possessivo. it's = it is." },
              { ui: 'choice', cat: 'gra', srsId: 'bs7w2:c2', title: '🔧 Escolha certo:',
                main: 'Is this ___ (Nigel) laptop?',
                options: DF.shuffle([{ label: "Nigel's", correct: true }, { label: "Nigels" }, { label: "Nigel" }]),
                expl: "Nome + 's = posse." },
              { ui: 'order', cat: 'fun', srsId: 'bs7w2:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Whose office is this',
                expl: 'Whose office is this?' },
              { ui: 'match', cat: 'fun', srsId: 'bs7w2:match:1', title: '🔗 Ligue o pronome ao possessivo:',
                pairs: [['I', 'my'], ['we', 'our'], ['he', 'his'], ['they', 'their']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale da sua equipe', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs7w2:build:1', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Apresente um colega',
                prompt: 'Diga o nome de um colega, o cargo dele/dela, e onde fica o escritório.',
                example: "This is Marcos. He's the sales manager. His office is on the second floor.",
                mustUse: ['His', "Her"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de posse', tag: 'difícil',
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'bs7w2+:drl1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Todos os possessivos, sem parar', focus: 'possessivo',
                frame: '___ presentation is ready.', ptHint: '___ apresentação está pronta.',
                slots: ['My', 'Your', 'His', 'Her', 'Its', 'Our', 'Their'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de posse', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___ laptop is on the desk.',
                  pool: ['My', 'Your', 'His', 'Her', 'Our', 'Their'], focus: 'possessivo',
                  ptHint: '___ laptop está na mesa.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 28" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '👉',
        title: 'Practically speaking',
        goal: 'Apontar objetos (this/that/these/those) e dar instrução técnica passo a passo.',
        comp: 'Você diz o que é isso/aquilo, pede ajuda com um problema técnico e dá ' +
              'instruções em ordem — First, Next, Then.',
        live: [
          'this / that / these / those',
          'Asking for help: "What\'s the problem?"',
          'Giving instructions: First, Next, Then',
          'Checking equipment: "Do you have a...? Is the... on?"'
        ],
        bridge: 'Na aula vocês praticaram this/that/these/those com objetos da mesa, e ' +
                'deram instrução por vídeo-chamada. Aqui os objetos e o problema técnico ' +
                'são outros — mas a estrutura da instrução é a mesma.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 7.',
        ican: [
          'I can say this/that/these/those correctly.',
          "I can ask what's the problem and ask for help.",
          'I can give instructions in order using First, Next, Then.',
          'I can check if equipment is working.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — this/that + instruções', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: apontar e instruir', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs7w3:drl:this', unit: 7, waSec: 'Drill · this/that',
                title: '🔁 Drill 1 — perto, singular', focus: 'objeto',
                frame: 'This is my ___.', ptHint: 'Isto é o meu ___.',
                slots: GEAR.slice(0, 5).map(function (g) { return g.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'bs7w3:drl:these', unit: 7, waSec: 'Drill · this/that',
                title: '🔁 Drill 2 — perto, plural', focus: 'objeto',
                frame: 'These are my ___.', ptHint: 'Estes são os meus ___.',
                slots: ['documents', 'headphones', 'keys', 'photos'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs7w3:drl:steps', unit: 7, waSec: 'Drill · Instructions',
                title: '🔁 Drill 3 — dando instrução', focus: 'instrução',
                frame: 'First, you need to ___.', ptHint: 'Primeiro, você precisa ___.',
                slots: TECH_VERBS.map(function (v) { return v.en; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Problema na videochamada', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs7w3:dlg:1',
                title: '🎧 Yuki ajuda o Hendrik com o projetor',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Hendrik', en: "I don't know how to use this projector. What's the problem?" },
                  { who: 'Yuki', en: 'First, you need to switch it on. Then, connect your laptop.' },
                  { who: 'Hendrik', en: 'OK, I connected it. How does it work now?' },
                  { who: 'Yuki', en: 'Next, click the blue button on the screen.' }
                ],
                question: 'O que o Hendrik faz primeiro?',
                options: DF.shuffle([
                  { label: 'Liga o projetor', correct: true },
                  { label: 'Conecta o laptop' }, { label: 'Clica no botão azul' }, { label: 'Nada' }
                ]),
                expl: '"First, you need to switch it on."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs7w3:dlg:2',
                title: '🎧 A câmera não liga',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Aisha', en: "Is this the right button? I can't hear you." },
                  { who: 'Camila', en: 'Do you have a headset? Is the microphone on?' },
                  { who: 'Aisha', en: "I don't have one. Just a moment." }
                ],
                question: 'O que a Camila pergunta?',
                options: DF.shuffle([
                  { label: 'Se ela tem um headset e se o microfone está ligado', correct: true },
                  { label: 'Se ela tem um laptop' }, { label: 'Se ela sabe a senha' }, { label: 'Nada' }
                ]),
                expl: '"Do you have a headset? Is the microphone on?"'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs7w3:bc:1', unit: 7, waSec: 'Backchain',
                title: '🧱 A instrução em ordem', ptHint: 'Primeiro, ligue. Depois, conecte o laptop.',
                chain: ['laptop', 'connect your laptop', 'then connect your laptop',
                        'switch it on, then connect your laptop',
                        'First, switch it on. Then, connect your laptop.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs7w3:c1', title: '👉 Perto ou longe?',
                main: '___ is my USB stick. (você segura na mão)',
                options: DF.shuffle([{ label: 'This', correct: true }, { label: 'That' }]),
                expl: 'Perto e singular = this.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs7w3:c2', title: '👉 Perto ou longe, plural?',
                main: '___ are your documents, over there.',
                options: DF.shuffle([{ label: 'Those', correct: true }, { label: 'These' }]),
                expl: 'Longe e plural = those.' },
              { ui: 'order', cat: 'fun', srsId: 'bs7w3:ord:1',
                title: '🧩 Monte a instrução:', answer: 'First you need to enter your password',
                expl: 'First, you need to enter your password.' },
              { ui: 'order', cat: 'fun', srsId: 'bs7w3:ord:2',
                title: '🧩 Monte a pergunta:', answer: "What's the problem",
                expl: "What's the problem?" },
              { ui: 'match', cat: 'fun', srsId: 'bs7w3:match:1', title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ["What's the problem?", "I don't know how to use this."],
                  ['How does it work?', 'First, switch it on.'],
                  ['Do you have a headset?', "Yes, I do."],
                  ['Is the microphone on?', 'I think so.']
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Dê uma instrução de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs7w3:build:1', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Explique como usar um equipamento em 3 passos',
                prompt: 'Use First, Next e Then pra explicar como ligar/usar um aparelho.',
                example: 'First, switch it on. Next, enter your password. Then, click the link.',
                mustUse: ['First'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'O suporte técnico inteiro', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs7w3+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis da chamada de suporte',
                prompt: 'Grave os dois lados: quem pede ajuda pergunta o que fazer, quem ajuda ' +
                        'dá 3 instruções em ordem.',
                example: "What's the problem? I don't know how to use this. First, switch it on. " +
                         'Next, connect your laptop. Then, click the link.',
                mustUse: ['First'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de instruções', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'First, you need to ___.', pool: TECH_VERBS.map(function (v) { return v.en; }),
                  focus: 'instrução', ptHint: 'Primeiro, você precisa ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 29" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: descrever equipamento, dizer de quem é, e dar suporte ' +
              'técnico do início ao fim.',
        comp: 'Você identifica um equipamento sem dizer o nome, diz de quem é um objeto, e ' +
              'conduz uma chamada de suporte técnico — os 5 itens do speaking test.',
        live: [
          'Talking point: guess the technology — descrever sem falar o nome',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (suporte técnico por telefone)'
        ],
        bridge: 'Na aula vocês jogaram "guess the technology" e o professor aplicou o ' +
                'teste. Aqui você ensaia os <b>5 itens exatos do speaking test</b> — pedir ' +
                'ajuda, checar o equipamento, dar 3 instruções — numa chamada nova.',
        nextLive: 'Unit 8 — Travel. Começa na segunda-feira seguinte.',
        ican: [
          'I can describe technology without saying its name.',
          "I can say who something belongs to.",
          'I can ask for help and check equipment.',
          'I can give three instructions in order.',
          'I can complete the Unit 7 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'Guess the technology', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs7w4:g:1', unit: 7, waSec: 'Talking Point',
                title: '🎲 Descreva sem falar o nome',
                prompt: 'Escolha um equipamento e descreva pra que serve, sem dizer a palavra.',
                example: 'You use it to take photos. It\'s small and you carry it.',
                mustUse: ['use'] },
              { ui: 'build', cat: 'fun', srsId: 'bs7w4:g:2', unit: 7, waSec: 'Talking Point',
                title: '🎲 De quem é?',
                prompt: 'Diga de quem é um objeto na sua mesa.',
                example: "This is my laptop. That's my colleague's mouse.", mustUse: ['This is'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'voc', srsId: 'bs7w4:pt:1', title: '🔧 Complete a palavra:',
                main: 'w_ _ c_ _ (câmera pra vídeo-chamada)', answers: ['webcam'], expl: 'webcam.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs7w4:pt:2', title: '🔧 Verbo certo:',
                main: 'Please ___ the document and email it to me.',
                options: DF.shuffle([{ label: 'scan', correct: true }, { label: 'switch on' }]),
                expl: 'scan the document = escanear.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs7w4:pt:3', title: '🔧 Possessivo certo:',
                main: 'This is Camila. ___ office is upstairs.',
                options: DF.shuffle([{ label: 'Her', correct: true }, { label: 'She' }, { label: 'His' }]),
                expl: 'Camila (she) → her.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs7w4:pt:4', title: '👉 this ou these?',
                main: '___ are my documents.',
                options: DF.shuffle([{ label: 'These', correct: true }, { label: 'This' }]),
                expl: 'Plural e perto = these.' },
              { ui: 'order', cat: 'fun', srsId: 'bs7w4:pt:5',
                title: '🧩 Ponha em ordem:', answer: 'What is the problem',
                expl: "What's the problem?" },
              { ui: 'match', cat: 'fun', srsId: 'bs7w4:pt:6', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["What's the problem?", "I don't know how to use it."],
                  ['Do you have a headset?', "Yes, I do."],
                  ['Is this your laptop?', "No, it's Tom's."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs7w4:st:1', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 1 de 5 — ask for help',
                prompt: 'Diga que não sabe usar o equipamento e pergunte qual é o problema.',
                example: "I don't know how to use this. What's the problem?", mustUse: ["I don't know"] },
              { ui: 'build', cat: 'fun', srsId: 'bs7w4:st:2', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 2 de 5 — check equipment',
                prompt: 'Pergunte se a pessoa tem um headset e se o microfone está funcionando.',
                example: 'Do you have a headset? Does it work now?', mustUse: ['Do you have'] },
              { ui: 'build', cat: 'fun', srsId: 'bs7w4:st:3', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 3 de 5 — give the first instruction',
                prompt: 'Dê a primeira instrução.',
                example: 'First, switch it on.', mustUse: ['First'] },
              { ui: 'build', cat: 'fun', srsId: 'bs7w4:st:4', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 4 de 5 — give the second instruction',
                prompt: 'Dê a segunda instrução.',
                example: 'Next, connect your laptop.', mustUse: ['Next'] },
              { ui: 'build', cat: 'fun', srsId: 'bs7w4:st:5', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 5 de 5 — give the third instruction',
                prompt: 'Dê a terceira instrução e encerre.',
                example: 'Then, click the green button. Good luck!', mustUse: ['Then'],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A chamada de suporte inteira', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs7w4+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Os 5 itens numa gravação só',
                prompt: 'Grave a ligação inteira: peça ajuda, cheque o equipamento e dê as ' +
                        '3 instruções em ordem.',
                example: "I don't know how to use this. What's the problem? Do you have a " +
                         'headset? First, switch it on. Next, connect your laptop. Then, click ' +
                         'the green button.',
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 7', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I use a ___.', pool: GEAR.map(function (g) { return g.en; }),
                  focus: 'equipamento', ptHint: 'Eu uso um(a) ___.', n: 3 },
                { frame: '___ office is on the third floor.',
                  pool: ['My', 'Your', 'His', 'Her', 'Our', 'Their'], focus: 'possessivo',
                  ptHint: '___ escritório fica no terceiro andar.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
