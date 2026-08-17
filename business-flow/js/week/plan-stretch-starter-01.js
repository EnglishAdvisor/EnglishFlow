/* ENGLISH FLOW — week/plan-stretch-starter-01.js
   STRETCH STARTER · UNIT 1 "Meeting people" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Stretch Starter, 2nd Edition, Oxford). As fotos,
                      os textos, os diálogos e os exercícios do livro. Pair work,
                      correção de pronúncia na hora. É o que só existe com outra
                      pessoa.
     APP           →  o que a aula não consegue: repetição infinita sem cansar
                      ninguém, situações NOVAS com a mesma competência, feedback
                      imediato 24/7.

   Por isso nenhum personagem, texto ou exercício do livro aparece aqui. O
   universo do app é "MAPLE STREET" — uma rua fictícia de vizinhos, 100% autoral
   (ESFERA-PEDAGOGIA item 20). Trilha FOR LIFE (não Business/O&G): o contexto é a
   vida cotidiana — conhecer pessoas, casa, família — não escritório nem
   plataforma de trabalho.

   ═══ ESTRUTURA ═══
   1 unidade = 4 semanas. Cada semana é uma coluna do livro (Stretch Starter,
   Unit 1 "Meeting people"):

     Semana 1 · Vocabulary & Listening ... nome, endereço, telefone, email
     Semana 2 · Grammar ................. verb be, subject pronouns, possessive adj.
     Semana 3 · Practice + Presenting .... asking for repetition + apresentação
     Semana 4 · Unit Test ............... teste da unidade, sem ajuda

   ═══ PESO ═══
   Trilha For Life = 80% dos itens em SPEAKING (repeat/backchain/dialogue/build),
   20% em escrita (choice/match/order) — diferente do peso mais escrito das
   trilhas Business. Campos de cada semana: goal/comp/live/bridge/steps/ican/more
   (mesmo contrato das outras trilhas). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || {};
  DF.PLAN['stretch-starter'] = DF.PLAN['stretch-starter'] || {};

  // Vizinhos de Maple Street — elenco autoral do app, sem relação com o livro
  const NEIGHBORS = [
    { first: 'Sofia', last: 'Reyes', nick: 'Sofi', addr: '12 Maple Street', apt: null, phone: '555-201-4478', email: 'sofia.reyes@mailbox.com' },
    { first: 'Marcus', last: 'Bell', nick: 'Marc', addr: '14 Maple Street', apt: '3B', phone: '555-201-9012', email: 'marcusbell@quickmail.com' },
    { first: 'Amara', last: 'Nwosu', nick: null, addr: '16 Maple Street', apt: '2A', phone: '555-201-3345', email: 'amara.n@postbox.com' },
    { first: 'Leo', last: 'Tanaka', nick: 'Leo', addr: '18 Maple Street', apt: null, phone: '555-201-7789', email: 'leotanaka@mailbox.com' }
  ];

  function personRadar(p, pool) {
    const others = DF.shuffle(pool.filter(function (x) { return x.first !== p.first; })).slice(0, 3);
    return {
      ui: 'choice', cat: 'voc', srsId: 'sst1w1:radar:' + p.first,
      title: '📡 Que nome você ouviu?',
      tts: p.first, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: p.first,
      options: DF.shuffle([{ label: p.first, correct: true }].concat(
        others.map(function (o) { return { label: o.first }; }))),
      expl: p.first + (p.nick ? ' — apelido: ' + p.nick : ''), feedbackTts: p.first
    };
  }

  DF.PLAN['stretch-starter'][1] = {
    unit: 1,
    title: 'Meeting people',
    subtitle: 'Nome, endereço e como pedir pra repetir',
    icon: '👋',

    mindmap: {
      center: 'Meeting people',
      sub: 'Quem você é e onde você mora',
      branches: [
        {
          icon: '🪪', name: 'Personal info — informação pessoal',
          leaves: [
            { en: 'first name', pt: 'primeiro nome' },
            { en: 'last name', pt: 'sobrenome' },
            { en: 'nickname', pt: 'apelido' },
            { en: 'address', pt: 'endereço' },
            { en: 'apartment number', pt: 'número do apartamento' },
            { en: 'phone number', pt: 'número de telefone' },
            { en: 'email address', pt: 'endereço de e-mail' }
          ],
          note: 'Em inglês, <b>first name</b> vem antes de <b>last name</b> — o contrário ' +
                'do que muita gente espera (nome, depois sobrenome).'
        },
        {
          icon: '🤝', name: 'Introducing yourself',
          leaves: [
            { en: "Hi, I'm Sofia.", pt: 'informal, o mais comum' },
            { en: "My name's Sofia Reyes.", pt: 'formal, nome completo' },
            { en: "What's your name?", pt: 'Qual é o seu nome?' },
            { en: "Nice to meet you.", pt: 'Prazer em conhecer você.' }
          ],
          note: '<b>Nice to meet you</b> só na <b>primeira</b> vez que você vê a pessoa.'
        },
        {
          icon: '🔧', name: 'To be — I / you',
          leaves: [
            { en: "I'm from Maple Street.", pt: 'afirmativa' },
            { en: "I'm not new here.", pt: 'negativa' },
            { en: "Are you new here?", pt: 'pergunta' },
            { en: "Yes, I am. / No, I'm not.", pt: 'respostas curtas' }
          ],
          note: '<b>Nunca</b> "Yes, I\'m." sozinho — a resposta curta positiva não contrai: ' +
                '<b>Yes, I am.</b>'
        },
        {
          icon: '🔁', name: 'Asking for repetition',
          leaves: [
            { en: 'Could you repeat that?', pt: 'formal, educado' },
            { en: 'Excuse me?', pt: 'rápido, quando não ouviu' },
            { en: 'Sorry, what was that?', pt: 'informal' }
          ],
          note: 'Use quando você não entendeu — é normal e educado pedir pra repetir.'
        }
      ]
    },

    // ══════════════════════ SEMANA 1 ══════════════════════
    weeks: [
      {
        n: 1, key: 'vocab', icon: '🔤',
        title: 'Vocabulary & Listening',
        goal: 'Reconhecer e usar as palavras de informação pessoal.',
        comp: 'Você entende e usa name, address, phone number e email address ' +
              'de ouvido, sem precisar ver escrito.',
        live: [
          'As fotos e os textos do livro (listen and check)',
          'As 8 palavras de informação pessoal',
          'Listen and number — o áudio do livro',
          'Last names — nota de intercultural competence'
        ],
        bridge: 'Na aula você viu as 8 palavras com as fotos do livro. Aqui você treina ' +
                'o ouvido em situações NOVAS — vizinhos de Maple Street que a aula não usa.',
        nextLive: 'Semana 2 · Grammar — the verb be, subject pronouns, possessive adjectives.',
        ican: [
          'I can recognize personal information words.',
          'I can say my name, address, and phone number.',
          'I can understand a simple listening about personal info.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '👂', name: 'Nomes — só de ouvido', tag: 'listening',
            items: NEIGHBORS.map(function (p) { return personRadar(p, NEIGHBORS); })
          },

          {
            id: 'say', icon: '🎤', name: 'Ouça e repita', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'voc', srsId: 'sst1w1:rep:name', unit: 1, waSec: 'Vocabulary',
                title: '🎤 Ouça e repita 2x:', target: "What's your first name?", ptHint: 'Qual é o seu primeiro nome?' },
              { ui: 'repeat', cat: 'voc', srsId: 'sst1w1:rep:addr', unit: 1, waSec: 'Vocabulary',
                title: '🎤 Agora:', target: "What's your address?", ptHint: 'Qual é o seu endereço?' },
              { ui: 'repeat', cat: 'voc', srsId: 'sst1w1:rep:phone', unit: 1, waSec: 'Vocabulary',
                title: '🎤 E agora:', target: "What's your phone number?", ptHint: 'Qual é o seu número de telefone?' },
              { ui: 'repeat', cat: 'voc', srsId: 'sst1w1:rep:email', unit: 1, waSec: 'Vocabulary',
                title: '🎤 Última:', target: "What's your email address?", ptHint: 'Qual é o seu e-mail?' }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'voc', srsId: 'sst1w1:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 O endereço da Sofia', ptHint: 'Ela mora na Rua Maple, 12.',
                chain: ['Street', 'Maple Street', 'on Maple Street',
                        'lives on Maple Street', 'She lives on Maple Street.'] },
              { ui: 'backchain', cat: 'voc', srsId: 'sst1w1:bc:2', unit: 1, waSec: 'Backchain',
                title: '🧱 O apelido do Marcus', ptHint: 'O apelido dele é Marc.',
                chain: ['Marc', "is Marc", 'nickname is Marc',
                        "His nickname is Marc."] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Situações novas', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'sst1w1:dlg:1',
                title: '🎧 Na porta de Maple Street 14',
                sub: 'Situação nova — não é o diálogo da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Sofia', en: "Hi! Are you new here?" },
                  { who: 'Marcus', en: "Yes, I am. I'm Marcus. My nickname's Marc." },
                  { who: 'Sofia', en: "Nice to meet you, Marc. I'm Sofia." },
                  { who: 'Marcus', en: 'Nice to meet you too.' }
                ],
                question: 'Qual é o apelido do Marcus?',
                options: DF.shuffle([
                  { label: 'Marc', correct: true }, { label: 'Marcus' },
                  { label: 'Sofia' }, { label: 'não tem apelido' }
                ]),
                expl: 'Ele diz "My nickname\'s Marc."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'sst1w1:dlg:2',
                title: '🎧 Trocando telefones',
                sub: 'Repare no número.',
                lines: [
                  { who: 'Amara', en: "What's your phone number?" },
                  { who: 'Leo', en: "It's five-five-five, two-oh-one, seven-seven-eight-nine." },
                  { who: 'Amara', en: "Sorry, could you repeat that?" },
                  { who: 'Leo', en: "Sure. Five-five-five, two-oh-one, seven-seven-eight-nine." }
                ],
                question: 'O que a Amara faz quando não entende?',
                options: DF.shuffle([
                  { label: 'Pede pra repetir', correct: true }, { label: 'Desiste' },
                  { label: 'Muda de assunto' }, { label: 'Pede o email' }
                ]),
                expl: 'Ela usa "Could you repeat that?" — o foco da Semana 3.'
              }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'sst1w1:match:info',
                title: '🔗 Ligue a palavra ao exemplo:',
                pairs: [
                  ['first name', 'Sofia'],
                  ['last name', 'Reyes'],
                  ['address', '12 Maple Street'],
                  ['phone number', '555-201-4478']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'sst1w1:ord:1',
                title: '🧩 Monte a pergunta:', answer: "What is your email address",
                expl: 'What + is + your + palavra.' }
            ]
          }
        ],

        more: [
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de vocabulário', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "What's your ___?", pool: 'personalInfo', focus: 'informação pessoal',
                  ptHint: 'Qual é o seu ___?', n: 5 }
              ],
              backchain: [
                { text: 'My {personalInfo} is {value}.', ptHint: 'Meu/minha ___ é ___.' }
              ]
            }
          },
          { id: 'more-video', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'grammar', icon: '📐',
        title: 'Grammar',
        goal: 'Usar o verbo be (am/is/are), subject pronouns e possessive adjectives.',
        comp: 'Você fala sobre você e sobre outras pessoas usando am/is/are e my/your/his/her ' +
              'sem parar pra pensar na regra.',
        live: [
          'A caixa de gramática do livro (the verb be; subject pronouns; possessive adjectives)',
          'Listen and complete',
          'Work in pairs: perguntar e responder sobre a outra pessoa'
        ],
        bridge: 'Na aula o professor montou a regra com você. Aqui você trava a armadilha ' +
                'nº1 do brasileiro ("Yes, I\'m" ❌) com repetição, em situações novas.',
        nextLive: 'Semana 3 · Practice + Presenting — pedir repetição e se apresentar.',
        ican: [
          "I can use am/is/are correctly.",
          'I can use subject pronouns (I, you, he, she).',
          'I can use possessive adjectives (my, your, his, her).',
          "I can give short answers: Yes, I am. / No, I'm not."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — abra "To be"', tag: 'estudo', mindmap: true },

          {
            id: 'point', icon: '📐', name: 'A regra num relance', tag: 'estudo',
            items: [
              {
                ui: 'read', cat: 'gra', info: true,
                title: '📐 To be — I / you / he / she',
                textTitle: 'As formas',
                text: 'POSITIVO\nI am → I\'m Sofia.\nYou are → You\'re my neighbor.\n' +
                      'He/She is → He\'s Leo. She\'s Amara.\n\n' +
                      'NEGATIVO\nI am not → I\'m not new here.\nHe is not → He isn\'t home.\n\n' +
                      'PERGUNTA\nAre you…? → Are you Marcus?\n\n' +
                      'RESPOSTA CURTA\nYes, I am. (nunca "Yes, I\'m.")\nNo, I\'m not.',
                readAloud: false
              },
              { ui: 'choice', cat: 'gra', srsId: 'sst1w2:g:short',
                title: '⚠️ A armadilha nº1 — qual está certa?', main: 'Are you Sofia?',
                options: DF.shuffle([
                  { label: 'Yes, I am.', correct: true }, { label: "Yes, I'm.", trap: true },
                  { label: 'Yes, I do.' }, { label: 'Yes, am I.' }
                ]),
                trapNote: 'Caiu na armadilha — é exatamente esta que o brasileiro erra.',
                expl: "Yes, I am. — a positiva curta NUNCA contrai. A negativa sim: No, I'm not." },
              { ui: 'choice', cat: 'gra', srsId: 'sst1w2:g:poss',
                title: '🔧 Complete:', main: "___ name is Leo. (falando dele)",
                options: DF.shuffle([{ label: 'His', correct: true }, { label: 'Her' }, { label: 'Your' }, { label: 'My' }]),
                expl: 'He → His (possessive adjective).' },
              { ui: 'choice', cat: 'gra', srsId: 'sst1w2:g:be2',
                title: '🔧 Complete:', main: "You ___ my new neighbor.",
                options: DF.shuffle([{ label: "'re", correct: true }, { label: "'m" }, { label: "'s" }, { label: 'be' }]),
                expl: "you → are / you're." }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Ouça e repita', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'gra', srsId: 'sst1w2:rep:1', unit: 1, waSec: 'Grammar',
                title: '🎤 Ouça e repita 2x:', target: "Are you new here?", ptHint: 'Você é novo(a) aqui?' },
              { ui: 'repeat', cat: 'gra', srsId: 'sst1w2:rep:2', unit: 1, waSec: 'Grammar',
                title: '🎤 A resposta certa:', target: "Yes, I am.", ptHint: 'Sim, sou.' },
              { ui: 'repeat', cat: 'gra', srsId: 'sst1w2:rep:3', unit: 1, waSec: 'Grammar',
                title: '🎤 Falando de outra pessoa:', target: "She's my neighbor.", ptHint: 'Ela é minha vizinha.' }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'sst1w2:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 Negando direito', ptHint: 'Ela não é nova aqui.',
                chain: ['here', 'new here', "isn't new here", "She isn't new here."] },
              { ui: 'backchain', cat: 'gra', srsId: 'sst1w2:bc:2', unit: 1, waSec: 'Backchain',
                title: '🧱 Pergunta completa', ptHint: 'Você é o novo vizinho?',
                chain: ['neighbor', 'new neighbor', 'the new neighbor', 'Are you the new neighbor?'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Perguntas em contexto', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'gra', srsId: 'sst1w2:dlg:1',
                title: '🎧 Na entrada do prédio — alguém se confunde',
                lines: [
                  { who: 'Amara', en: 'Good morning. Are you the new tenant in 3B?' },
                  { who: 'Marcus', en: "Yes, I am. I'm Marcus." },
                  { who: 'Amara', en: 'Are you from here?' },
                  { who: 'Marcus', en: "No, I'm not. I'm from Chicago." }
                ],
                question: 'Quantas vezes o Marcus usa uma resposta CURTA?',
                options: DF.shuffle([
                  { label: '2 — uma positiva e uma negativa', correct: true },
                  { label: '1' }, { label: '3' }, { label: 'nenhuma' }
                ]),
                expl: '"Yes, I am." e "No, I\'m not." — as duas formas na mesma conversa.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'sst1w2:build:me', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Fale sobre VOCÊ',
                prompt: 'Diga seu nome verdadeiro e de onde você é, em inglês.',
                example: "I'm Ana. I'm from Belém.",
                mustUse: ["I'm"] },
              { ui: 'build', cat: 'fun', srsId: 'sst1w2:build:ask', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Agora pergunte',
                prompt: 'Pergunte a alguém se essa pessoa é nova na cidade.',
                example: 'Are you new here?',
                mustUse: ['are', 'you'] }
            ]
          }
        ],

        more: [
          { id: 'more-video', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'practice', icon: '🎤',
        title: 'Practice + Presenting',
        goal: 'Pedir para repetir e se apresentar numa fala curta.',
        comp: 'Você usa "Could you repeat that?" quando não entende, e faz uma apresentação ' +
              'de si mesmo com nome, idade, e mais informações.',
        live: [
          'Asking for repetition — Could you repeat that? / Excuse me?',
          'Understanding informal texts with emojis',
          'Model presentation: introduce yourself',
          'Focus a presentation — treinar cada parte'
        ],
        bridge: 'Na aula você viu o modelo de apresentação do livro. Aqui você monta a SUA ' +
                'apresentação real e treina pedir repetição em situações que a aula não cobre.',
        nextLive: 'Semana 4 · Unit Test — revisão de tudo, sem ajuda.',
        ican: [
          'I can ask someone to repeat what they said.',
          'I can understand simple informal texts with emojis.',
          'I can give a short presentation about myself.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'say', icon: '🎤', name: 'Ouça e repita', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'sst1w3:rep:1', unit: 1, waSec: 'Asking for repetition',
                title: '🎤 A frase mais educada:', target: "Could you repeat that?", ptHint: 'Você poderia repetir?' },
              { ui: 'repeat', cat: 'pro', srsId: 'sst1w3:rep:2', unit: 1, waSec: 'Asking for repetition',
                title: '🎤 A mais rápida:', target: "Excuse me?", ptHint: 'Como?' },
              { ui: 'repeat', cat: 'pro', srsId: 'sst1w3:rep:3', unit: 1, waSec: 'Asking for repetition',
                title: '🎤 Informal:', target: "Sorry, what was that?", ptHint: 'Desculpa, o quê?' }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'sst1w3:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 Pedindo com educação', ptHint: 'Você poderia repetir isso, por favor?',
                chain: ['that', 'repeat that', 'could you repeat that', 'Could you repeat that, please?'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Situações novas', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'sst1w3:dlg:1',
                title: '🎧 Barulho na rua',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Leo', en: "My phone number's five-five-five, two-oh-one, seven-seven-eight-nine." },
                  { who: 'Sofia', en: "Sorry, could you repeat that? It's noisy here." },
                  { who: 'Leo', en: "Sure! Five-five-five, two-oh-one, seven-seven-eight-nine." },
                  { who: 'Sofia', en: 'Thanks!' }
                ],
                question: 'Por que a Sofia pede pra repetir?',
                options: DF.shuffle([
                  { label: 'Está barulhento', correct: true }, { label: 'Ela não gosta do Leo' },
                  { label: 'Ela quer o email' }, { label: 'Ela está com pressa' }
                ]),
                expl: 'Ela diz "It\'s noisy here."'
              }
            ]
          },

          {
            id: 'present', icon: '🗺️', name: 'Monte sua apresentação', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'sst1w3:present:1', unit: 1, waSec: 'Presenting',
                title: '🗣️ Ponto 1 — nome e idade',
                prompt: 'Diga seu nome e sua idade, em inglês.',
                example: "Hi, I'm Ana. I'm 24 years old.",
                mustUse: ["I'm"] },
              { ui: 'build', cat: 'fun', srsId: 'sst1w3:present:2', unit: 1, waSec: 'Presenting',
                title: '🗣️ Ponto 2 — de onde você é',
                prompt: 'Diga de onde você é.',
                example: "I'm from Belém.",
                mustUse: ['from'] },
              { ui: 'build', cat: 'fun', srsId: 'sst1w3:present:3', unit: 1, waSec: 'Presenting',
                title: '🗣️ Apresentação completa',
                prompt: 'Agora junte tudo: nome, idade e de onde você é, numa fala só.',
                example: "Hi, I'm Ana. I'm 24 years old. I'm from Belém.",
                mustUse: ["I'm"] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'lea', srsId: 'sst1w3:read:emoji',
                title: '💬 O que essa mensagem quer dizer?', main: '"See you soon! 😊"',
                options: DF.shuffle([
                  { label: 'Uma despedida amigável', correct: true }, { label: 'Um pedido de desculpas' },
                  { label: 'Uma reclamação' }, { label: 'Uma pergunta' }
                ]),
                expl: 'O emoji 😊 reforça o tom amigável da despedida.' },
              { ui: 'order', cat: 'pro', srsId: 'sst1w3:ord:1',
                title: '🧩 Monte a frase:', answer: 'Could you repeat that please',
                expl: 'Could + you + repeat + that + please.' }
            ]
          }
        ],

        more: [
          { id: 'more-video', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'test', icon: '🏁',
        title: 'Unit Test',
        goal: 'Mostrar tudo o que você aprendeu na unidade, sem ajuda.',
        comp: 'Você faz o teste da unidade (listening, vocabulary, grammar, reading) sozinho, ' +
              'sem consultar o mapa mental.',
        live: [
          'Nenhuma aula nova — semana de revisão e teste'
        ],
        bridge: 'Diferente das outras semanas, aqui o mapa mental e as dicas ficam escondidos. ' +
                'É pra valer — mostra o que ficou.',
        nextLive: 'Unit 2 · Countries and nationalities.',
        ican: [
          'I completed the Unit 1 test on my own.'
        ],

        steps: [
          {
            id: 'test', icon: '🏁', name: 'Teste da unidade', tag: 'teste', noMindmapHint: true,
            items: [
              {
                ui: 'dialogue', cat: 'gra', srsId: 'sst1w4:test:listen',
                title: '🎧 Listening — na porta de Maple Street 18',
                hideText: true,
                lines: [
                  { who: 'Leo', en: "Hi, I'm Leo. What's your name?" },
                  { who: 'Priya', en: "I'm Priya. Nice to meet you." },
                  { who: 'Leo', en: "Are you new here?" },
                  { who: 'Priya', en: "Yes, I am. I'm from Toronto." }
                ],
                question: 'De onde a Priya é?',
                options: DF.shuffle([
                  { label: 'Toronto', correct: true }, { label: 'Maple Street' },
                  { label: 'Chicago', }, { label: 'Não diz' }
                ]),
                expl: 'Ela diz "I\'m from Toronto."'
              },
              { ui: 'choice', cat: 'voc', srsId: 'sst1w4:test:voc1',
                title: '🔤 Vocabulary', main: 'The word for "onde você mora" is:',
                options: DF.shuffle([{ label: 'address', correct: true }, { label: 'nickname' }, { label: 'phone number' }, { label: 'last name' }]) },
              { ui: 'choice', cat: 'voc', srsId: 'sst1w4:test:voc2',
                title: '🔤 Vocabulary', main: 'Her ___ is Reyes.',
                options: DF.shuffle([{ label: 'last name', correct: true }, { label: 'first name' }, { label: 'nickname' }, { label: 'address' }]) },
              { ui: 'choice', cat: 'gra', srsId: 'sst1w4:test:gra1',
                title: '📐 Grammar', main: '___ you the new neighbor?',
                options: DF.shuffle([{ label: 'Are', correct: true }, { label: 'Is' }, { label: 'Am' }, { label: 'Be' }]) },
              { ui: 'choice', cat: 'gra', srsId: 'sst1w4:test:gra2',
                title: '📐 Grammar', main: 'Yes, I ___.',
                options: DF.shuffle([{ label: 'am', correct: true }, { label: "'m" }, { label: 'is' }, { label: 'are' }]) },
              { ui: 'choice', cat: 'gra', srsId: 'sst1w4:test:gra3',
                title: '📐 Grammar', main: "___ name is Leo. (falando dele)",
                options: DF.shuffle([{ label: 'His', correct: true }, { label: 'Her' }, { label: 'Your' }, { label: 'My' }]) },
              {
                ui: 'dialogue', cat: 'lea', srsId: 'sst1w4:test:read',
                title: '📖 Reading',
                hideText: false,
                lines: [
                  { who: 'Amara', en: "Hi! I'm Amara. My nickname's Ama. I live at 16 Maple Street, apartment 2A. My email is amara.n@postbox.com" }
                ],
                question: "What is Amara's nickname?",
                options: DF.shuffle([
                  { label: 'Ama', correct: true }, { label: 'Amara' },
                  { label: 'Nwosu' }, { label: 'Não diz' }
                ])
              },
              { ui: 'order', cat: 'pro', srsId: 'sst1w4:test:speak',
                title: '🗣️ Speaking', main: 'Monte a frase:', answer: 'Could you repeat that please' }
            ]
          }
        ],

        more: []
      }
    ]
  };
})(window);
