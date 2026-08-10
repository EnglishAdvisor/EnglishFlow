/* ENGLISH FLOW — week/plan-og1-01.js
   OIL & GAS 1 · UNIT 1 "An International Industry" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Os personagens, as empresas e os textos do
                      livro, o warm-up do mapa-múndi, o listening do técnico,
                      o pair work "Checking". É o que só existe com outra
                      pessoa junto.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Por isso nenhum personagem, texto ou exercício do livro aparece aqui. O
   universo do app é a NORTH STAR RIG — uma plataforma fictícia offshore
   100% autoral (ESFERA-PEDAGOGIA item 20), com uma equipe internacional
   inventada do zero. Ele sustenta os temas da unidade sem tocar no conteúdo
   do livro:

     tema 1 (countries/nationalities of the industry) → a tripulação da rig
     tema 2 (verb to be)                              → apresentar a equipe
     tema 3 (a/an/the)                                → o equipamento a bordo
     tema 4 (spelling + numbers)                      → o rádio da plataforma
     tema 5 (tools & hardware)                        → o inventário do galpão
     tema 6 (job/registration form)                   → a ficha de embarque

   ═══ NÍVEL ═══
   OG1 = A1/A2 (elementar), igual ao Business Starter — não é o B2 do World
   Class 1. Por isso as instruções vão em PT-BR (ESFERA-PEDAGOGIA item 21) e
   as frases são curtas e diretas.

   ═══ ESTRUTURA ═══
   1 unidade = 1 mês = 4 semanas = 4 aulas ao vivo. A divisão já foi acertada
   com o cliente (não é para ser rediscutida — só implementada):

     Semana 1 · Geography + alphabet .... países/nacionalidades do O&G, soletrar
     Semana 2 · a/an/the + numbers ....... artigos, números 1-199, listening
     Semana 3 · Tools + verb be .......... ferramentas, to be, "Checking" solo
     Semana 4 · Review + Key Words ....... revisão geral + self-check

   Campos de cada semana:
     goal / comp — a COMPETÊNCIA que o aluno sai sabendo fazer
     live        — o que o professor cobre na aula (o app só exibe)
     bridge      — "na aula X · aqui Y": deixa a complementaridade visível
     steps       — o que o aluno faz sozinho depois que o professor destrava
     ican        — o debrief, aparece quando a semana fecha
     more        — aprofundamento paralelo: nunca destrava nem trava nada */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.og1 = DF.PLAN.og1 || {};

  // ── pools do universo North Star Rig (o gerador usa em "treino infinito") ──
  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.og1Country = ['Brazil', 'Norway', 'Nigeria', 'Kuwait', 'the UK',
                                'the USA', 'Angola', 'Malaysia', 'Qatar', 'Mexico'];
    DF.WGEN.POOLS.og1Nat = ['Brazilian', 'Norwegian', 'Nigerian', 'Kuwaiti', 'British',
                            'American', 'Angolan', 'Malaysian', 'Qatari', 'Mexican'];
    DF.WGEN.POOLS.og1Job = ['a driller', 'an engineer', 'a technician', 'a welder',
                            'a crane operator', 'a medic', 'a cook', 'a safety officer'];
    DF.WGEN.POOLS.og1Tool = ['a wrench', 'a hammer', 'a valve', 'a pump', 'a helmet',
                             'a torch', 'a drill bit', 'a hose', 'a gauge', 'a ladder'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  // As palavras são o tema do livro (países, nacionalidades, ferramentas); as
  // definições e TODOS os exemplos abaixo são autorais, escritos no universo
  // North Star Rig.
  const WORDS = [
    { en: 'crew', pt: 'tripulação / equipe',
      def: 'the group of people who work together on a rig or a ship',
      ex: 'The North Star crew has people from six different countries.' },
    { en: 'wrench', pt: 'chave de boca/inglesa',
      def: 'a tool used to turn nuts and bolts',
      ex: 'Pass me the wrench, please.' },
    { en: 'valve', pt: 'válvula',
      def: 'a device that controls the flow of liquid or gas through a pipe',
      ex: 'The valve is new. It is not old.' },
    { en: 'helmet', pt: 'capacete',
      def: 'a hard hat worn to protect the head',
      ex: 'Every worker on the rig wears a helmet.' },
    { en: 'shift', pt: 'turno',
      def: 'a fixed period of work time',
      ex: 'Are you on the morning shift or the night shift?' },
    { en: 'nationality', pt: 'nacionalidade',
      def: 'the country a person legally belongs to',
      ex: 'What is your nationality? — I am Brazilian.' },
    { en: 'register', pt: 'registrar-se / cadastrar-se',
      def: 'to record your name and details officially',
      ex: 'Please register at the office before your first shift.' },
    { en: 'reference number', pt: 'número de referência',
      def: 'a number used to identify a document or a person in a system',
      ex: 'Your reference number is one one three.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'gauge ·+', pt: 'medidor',
      def: 'an instrument that measures pressure, level or amount',
      ex: 'Check the gauge before you start the pump.' },
    { en: 'torch ·+', pt: 'lanterna',
      def: 'a small portable light powered by batteries',
      ex: 'Take a torch — it is dark inside the tank.' },
    { en: 'hose ·+', pt: 'mangueira',
      def: 'a flexible tube that carries liquid or gas',
      ex: 'The hose is twenty metres long.' },
    { en: 'offshore ·+', pt: 'no mar (longe da costa)',
      def: 'located in the sea, away from land',
      ex: 'The North Star Rig is offshore, one hundred kilometres from the coast.' },
    { en: 'onshore ·+', pt: 'em terra',
      def: 'located on land',
      ex: 'The head office is onshore, in the city.' }
  ];

  DF.PLAN.og1[1] = {
    unit: 1,
    title: 'An International Industry',
    subtitle: 'Seu primeiro mês',
    icon: '🛢️',

    mindmap: {
      center: 'An International Industry',
      sub: 'Uma equipe do mundo inteiro, numa plataforma só',
      branches: [
        {
          icon: '🌍', name: 'Countries & nationalities',
          leaves: WORDS.filter(function (w) { return w.en === 'nationality'; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat([
              { en: 'Brazil → Brazilian', pt: 'país → nacionalidade' },
              { en: 'Norway → Norwegian', pt: 'país → nacionalidade' },
              { en: 'Kuwait → Kuwaiti', pt: 'país → nacionalidade' },
              { en: 'the UK → British', pt: 'país → nacionalidade (irregular)' }
            ]),
          note: 'Nacionalidade não segue uma regra única — <b>Brazil → Brazilian</b> mas ' +
                '<b>the UK → British</b>. É vocabulário fechado, não sufixo.'
        },
        {
          icon: '🧰', name: 'Tools & hardware',
          leaves: WORDS.filter(function (w) { return ['wrench', 'valve', 'helmet'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> não estão no Word Bank da aula — vêm do vocabulário ' +
                'extra do app.'
        },
        {
          icon: '🔧', name: 'Verb to be',
          leaves: [
            { en: "I'm a driller.", pt: 'afirmativa' },
            { en: "I'm not the safety officer.", pt: 'negativa' },
            { en: "She's the crane operator.", pt: 'afirmativa (ela)' },
            { en: 'Are you on this shift?', pt: 'pergunta' },
            { en: "Yes, I am. / No, I'm not.", pt: 'respostas curtas' }
          ],
          note: '<b>Nunca</b> "Yes, I\'m." sozinho — a resposta curta positiva não contrai: ' +
                '<b>Yes, I am.</b> A negativa sim: <b>No, I\'m not.</b>'
        },
        {
          icon: '🔤', name: 'a / an / the',
          leaves: [
            { en: 'a wrench', pt: 'som de consoante → a' },
            { en: 'an engineer', pt: 'som de vogal → an' },
            { en: 'an hour', pt: 'H mudo → an' },
            { en: 'the crew', pt: 'algo específico/já falado → the' }
          ],
          note: 'A regra de a/an é de <b>som</b>, não de letra. <b>The</b> entra quando o ' +
                'ouvinte já sabe do que se fala.'
        },
        {
          icon: '📻', name: 'Spelling & numbers',
          leaves: [
            { en: 'A H J K', pt: 'rimam com "ei"' },
            { en: 'B C D E G P T V', pt: 'rimam com "i"' },
            { en: 'one one three (113)', pt: 'número de referência, dígito a dígito' },
            { en: 'How do you spell that?', pt: 'pedir soletração' }
          ],
          note: 'No rádio da plataforma, número de referência se lê <b>dígito a dígito</b> — ' +
                '113 é "one one three", não "one hundred and thirteen".'
        },
        {
          icon: '📋', name: 'Registration form',
          leaves: [
            { en: 'Full name', pt: 'nome completo' },
            { en: 'Nationality', pt: 'nacionalidade' },
            { en: 'Job title', pt: 'cargo' },
            { en: 'Reference number', pt: 'número de referência' }
          ],
          note: 'É a ficha que todo trabalhador preenche antes do primeiro turno na rig.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'geography', icon: '🌍',
        title: 'A Crew from Everywhere',
        goal: 'Falar sobre países e nacionalidades da indústria de óleo e gás, e soletrar ' +
              'nomes e países em inglês.',
        comp: 'Você diz de que país é alguém e qual é a nacionalidade da pessoa, e soletra ' +
              'nomes próprios sem travar.',
        live: [
          'Discussão sobre a indústria de óleo e gás no mundo',
          'Warm-up com o mapa-múndi: que países têm óleo e gás',
          'Listening: o dia de trabalho de um técnico',
          'O alfabeto — listen and repeat, pronúncia'
        ],
        bridge: 'Na aula você viu o mapa-múndi do livro e ouviu o técnico. Aqui você treina ' +
                'países e nacionalidades NOVOS (não os do mapa da aula), soletra nomes ' +
                'difíceis da tripulação da North Star Rig, e no fim soletra o SEU nome.',
        nextLive: 'Semana 2 · a/an/the + números — os artigos e os números de 1 a 199, com ' +
                  'um listening em dupla.',
        ican: [
          'I can say where someone is from and their nationality.',
          'I can spell names and countries in English.',
          'I can recognise the alphabet by ear (letters that rhyme).',
          'I can use the unit vocabulary to talk about a work team.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u1w1:cards:core',
                title: '📇 As oito palavras da unidade',
                sub: 'Definições e exemplos da North Star Rig — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u1w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'nat', icon: '🌍', name: 'Country → nationality', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'og1u1w1:nat:1',
                title: '🌍 Complete:', main: 'She is from Brazil. She is ___.',
                options: DF.shuffle([
                  { label: 'Brazilian', correct: true }, { label: 'Brazil' },
                  { label: 'Brazily' }, { label: 'Braziliam' }
                ]),
                expl: 'país → nacionalidade: Brazil → Brazilian.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u1w1:nat:2',
                title: '🌍 Complete:', main: 'He is from Kuwait. He is ___.',
                options: DF.shuffle([
                  { label: 'Kuwaiti', correct: true }, { label: 'Kuwaitian' },
                  { label: 'Kuwaity' }, { label: 'Kuwait' }
                ]),
                expl: 'Kuwait → Kuwaiti — não segue o padrão de "-ian".' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u1w1:nat:3',
                title: '🌍 A pegadinha:', main: 'She is from the United Kingdom. She is ___.',
                options: DF.shuffle([
                  { label: 'British', correct: true }, { label: 'Kingdomian' },
                  { label: 'Unitedish' }, { label: 'UK-ian' }
                ]),
                expl: 'the UK → British. Nacionalidade é vocabulário fechado, não uma regra ' +
                      'de sufixo — não dá para "inventar" a partir do nome do país.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u1w1:match:nat',
                title: '🔗 Ligue o país à nacionalidade:',
                pairs: [
                  ['Norway', 'Norwegian'], ['Nigeria', 'Nigerian'],
                  ['Mexico', 'Mexican'], ['Angola', 'Angolan'],
                  ['Qatar', 'Qatari']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u1w1:type:nat1',
                title: '⌨️ Escreva a nacionalidade:', main: 'Malaysia → ___',
                answers: ['Malaysian', 'malaysian'], expl: 'Malaysia → Malaysian.' }
            ]
          },

          {
            id: 'stress', icon: '🥁', name: 'Onde cai a força', tag: 'pronúncia',
            items: [
              { ui: 'stress', cat: 'pro', srsId: 'og1u1w1:str:nat', word: 'nationality',
                pattern: 'ooOoo', decoys: ['Ooooo', 'oOooo'], syl: 'na-tio-NA-li-ty' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u1w1:str:eng', word: 'engineer',
                pattern: 'ooO', decoys: ['Ooo', 'oOo'], syl: 'en-gi-NEER',
                expl: 'A força vai no FIM — é a que o brasileiro mais erra.' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u1w1:str:bra', word: 'Brazilian',
                pattern: 'ooOo', decoys: ['Oooo', 'oOoo'], syl: 'bra-ZI-lian' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u1w1:str:kuw', word: 'Kuwaiti',
                pattern: 'ooO', decoys: ['Ooo', 'oOo'], syl: 'ku-WAI-ti' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u1w1:str:reg', word: 'register',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'RE-gis-ter' }
            ]
          },

          {
            id: 'abc', icon: '🔠', name: 'O alfabeto — o par G e J', tag: 'listening',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'og1u1w1:read:abc',
                title: '🔠 Agrupe as letras por som',
                textTitle: 'The alphabet, in groups',
                readAloud: false,
                text:
                  'A H J K — rimam com "ei".\n\n' +
                  'B C D E G P T V — rimam com "i".\n\n' +
                  'F L M N S X Z — começam com "é".\n\n' +
                  'I Y — rimam com "ai".\n\n' +
                  'Q U W — rimam com "iu".\n\n' +
                  'A ARMADILHA DO BRASILEIRO: G soa "dji" e J soa "djei" — e é o par que ' +
                  'mais confunde. Ouvir o grupo (A, H, J, K) ajuda a fixar o som certo de cada letra.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u1w1:abc:g',
                title: '👂 Que letra você ouviu?',
                tts: 'G', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'G',
                options: DF.shuffle([{ label: 'G', correct: true }, { label: 'J' }, { label: 'E' }, { label: 'A' }]),
                expl: 'G = "dji". Rima com o grupo B C D E P T V.', feedbackTts: 'G' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u1w1:abc:j',
                title: '👂 E agora?',
                tts: 'J', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'J',
                options: DF.shuffle([{ label: 'J', correct: true }, { label: 'G' }, { label: 'K' }, { label: 'I' }]),
                expl: 'J = "djei". Rima com A H K.', feedbackTts: 'J' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u1w1:abc:i',
                title: '👂 E ou I?',
                tts: 'I', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'I',
                options: DF.shuffle([{ label: 'I', correct: true }, { label: 'E' }, { label: 'Y' }, { label: 'A' }]),
                expl: 'I = "ai" · E = "i". Em português é o contrário.', feedbackTts: 'I' }
            ]
          },

          {
            id: 'spell', icon: '🔤', name: 'Soletrando a tripulação', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'og1u1w1:sp:1',
                title: '🔤 Ouça a soletração e escreva:',
                tts: 'V. A. N. G. E. N.', ttsLabel: '🔊 Ouvir a soletração',
                showIfNoTTS: 'V - A - N - G - E - N',
                answers: ['Vangen', 'vangen'], expl: 'V-A-N-G-E-N = Vangen.', feedbackTts: 'Vangen' },
              { ui: 'type', cat: 'spl', srsId: 'og1u1w1:sp:2',
                title: '🔤 Este tem o par G e J:',
                tts: 'J. E. G. E. D. E.', ttsLabel: '🔊 Ouvir a soletração',
                showIfNoTTS: 'J - E - G - E - D - E',
                answers: ['Jegede', 'jegede'], expl: 'J-E-G-E-D-E = Jegede.', feedbackTts: 'Jegede' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u1w1:sp:ask',
                title: '🔤 Para pedir a soletração, você pergunta:',
                options: DF.shuffle([
                  { label: 'How do you spell that?', correct: true },
                  { label: 'How do you write that?' }, { label: 'What is the letters?' },
                  { label: 'Spell to me.' }
                ]),
                expl: '"How do you spell that?" é a pergunta padrão.', feedbackTts: 'How do you spell that?' }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Na North Star Rig', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u1w1:dlg:1',
                title: '🎧 Chegando na plataforma',
                sub: 'Situação nova — não é o diálogo da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Erik', en: 'Hi, are you the new engineer?' },
                  { who: 'Fatima', en: "Yes, I am. I'm Fatima. I'm from Kuwait." },
                  { who: 'Erik', en: "Nice to meet you. I'm Erik. I'm Norwegian." },
                  { who: 'Fatima', en: 'Nice to meet you too, Erik.' }
                ],
                question: 'Qual é a nacionalidade da Fatima?',
                options: DF.shuffle([
                  { label: 'Kuwaiti', correct: true }, { label: 'Norwegian' },
                  { label: 'Brazilian', }, { label: 'Nigerian' }
                ]),
                expl: 'Ela é "from Kuwait" — logo, Kuwaiti.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u1w1:dlg:2',
                title: '🎧 No refeitório da plataforma',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: "Hi, I'm Priya. I'm from India." },
                  { who: 'Tomás', en: "I'm Tomás. I'm Brazilian." },
                  { who: 'Priya', en: 'Are you a driller?' },
                  { who: 'Tomás', en: "No, I'm not. I'm a welder." }
                ],
                question: 'Qual é o cargo do Tomás?',
                options: DF.shuffle([
                  { label: 'welder', correct: true }, { label: 'driller' },
                  { label: 'engineer', }, { label: 'crane operator' }
                ]),
                expl: '"No, I\'m not. I\'m a welder." — ele nega o cargo errado e diz o certo.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u1w1:build:me', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Fale sobre VOCÊ',
                prompt: 'Diga de que país você é e a sua nacionalidade.',
                example: "I'm from Brazil. I'm Brazilian.",
                mustUse: ['from'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia.' },
              { ui: 'build', cat: 'spl', srsId: 'og1u1w1:build:spell', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Soletre o seu sobrenome',
                prompt: 'Diga seu sobrenome e soletre em inglês, letra por letra.',
                example: 'My surname is Tavares. T-A-V-A-R-E-S.',
                expl: 'Soletrar é o que mais trava brasileiro ao telefone/rádio.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u1w1+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Apresente-se por completo',
                prompt: 'Diga seu nome, soletre e diga sua nacionalidade — tudo numa fala só.',
                example: "Hi, I'm Felipe. F-E-L-I-P-E. I'm Brazilian.",
                mustUse: ['hi'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de países', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm from ___.", pool: 'og1Country', focus: 'país',
                  ptHint: 'Eu sou de ___.', n: 5 },
                { frame: "I'm ___.", pool: 'og1Nat', focus: 'nacionalidade',
                  ptHint: 'Eu sou ___ (nacionalidade).', n: 5 }
              ],
              backchain: [
                { text: "I'm from {og1Country}, and I'm {og1Nat}.", ptHint: 'Eu sou de… e sou…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'articles', icon: '🔤',
        title: 'Every Piece Counts',
        goal: 'Usar a/an/the corretamente e dizer números e números de referência de 1 a 199.',
        comp: 'Você escolhe entre a/an/the diante de um substantivo, e diz um número de ' +
              'telefone ou de referência sem travar, dígito a dígito.',
        live: [
          'a/an/the — explicação e prática',
          'Números e números de referência 1-199',
          'Listening em dupla: ouvir e anotar informações',
          'Pair work: comparar o que cada um anotou'
        ],
        bridge: 'Na aula vocês praticaram a/an/the e números em dupla, com o listening do ' +
                'livro. Aqui é sozinho: novos substantivos para a/an/the, números NOVOS ' +
                '(não os do listening da aula), e um exercício de escuta solo com dados ' +
                'diferentes.',
        nextLive: 'Semana 3 · Ferramentas + verb be — vocabulário de hardware, o pair work ' +
                  '"Checking" e a gramática do to be.',
        ican: [
          'I can choose a, an or the correctly.',
          'I can say numbers from 1 to 199.',
          'I can say a reference number digit by digit.',
          'I can take notes while listening to spoken numbers.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'articles', icon: '🔤', name: 'a / an / the', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u1w2:read:art',
                title: '🔤 A regra num relance',
                textTitle: 'a, an ou the?',
                readAloud: false,
                text:
                  'A / AN — a primeira vez que algo aparece, e a regra é de SOM, não de letra.\n\n' +
                  'a wrench (som de consoante) · an engineer (som de vogal) · an hour (H mudo).\n\n' +
                  'THE — quando o ouvinte já sabe do que você fala, ou só existe um.\n\n' +
                  'Pass me the wrench. (a que já foi mencionada)\n' +
                  'The crew is ready. (a equipe, específica, desta rig)\n\n' +
                  'A ARMADILHA DO BRASILEIRO: em português não existe "um/uma" antes do ' +
                  'cargo em "eu sou engenheiro" — mas em inglês SEMPRE tem artigo: ' +
                  '"I am an engineer", nunca "I am engineer".',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w2:art:1',
                title: '🔤 Complete com a / an:', main: 'She is ___ welder.',
                options: DF.shuffle([{ label: 'a', correct: true }, { label: 'an' }]),
                expl: 'welder começa com som de consoante → a welder.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w2:art:2',
                title: '🔤 Complete com a / an:', main: 'He is ___ engineer.',
                options: DF.shuffle([{ label: 'an', correct: true }, { label: 'a' }]),
                expl: 'engineer começa com som de vogal → an engineer.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w2:art:3',
                title: '🔤 Complete com a / an:', main: 'Wait ___ hour, please.',
                options: DF.shuffle([{ label: 'an', correct: true }, { label: 'a' }]),
                expl: 'hour tem H mudo — som de vogal → an hour.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w2:art:4',
                title: '🔤 a, an ou the?', main: 'Pass me ___ wrench — the big one on the table.',
                options: DF.shuffle([
                  { label: 'the', correct: true }, { label: 'a' }, { label: 'an' }
                ]),
                expl: 'Já foi mencionada e é específica ("the big one") → the.' },
              { ui: 'match', cat: 'gra', srsId: 'og1u1w2:match:art',
                title: '🔗 Ligue a palavra ao artigo certo:',
                pairs: [
                  ['___ helmet', 'a'], ['___ IT technician', 'an'],
                  ['___ hour', 'an'], ['___ valve', 'a']
                ] }
            ]
          },

          {
            id: 'numbers', icon: '🔢', name: 'Números 1-199', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'og1u1w2:num:1',
                title: '🔢 Ouça e escreva o número:',
                tts: 'Forty-seven.', ttsLabel: '🔊 Ouvir', showIfNoTTS: 'forty-seven',
                answers: ['47'], exact: true, expl: 'forty-seven = 47.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u1w2:num:2',
                title: '🔢 Ouça e escreva o número:',
                tts: 'One hundred and thirteen.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: 'one hundred and thirteen',
                answers: ['113'], exact: true, expl: 'one hundred and thirteen = 113.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u1w2:num:ref1',
                title: '📻 Número de referência — dígito a dígito:',
                tts: 'One. One. Three.', ttsLabel: '🔊 Ouvir', showIfNoTTS: '1 - 1 - 3',
                answers: ['113'], exact: true,
                expl: 'No rádio, número de referência se lê dígito a dígito: "one one three".' },
              { ui: 'type', cat: 'spl', srsId: 'og1u1w2:num:ref2',
                title: '📻 Outro número de referência:',
                tts: 'Zero. Seven. Nine.', ttsLabel: '🔊 Ouvir', showIfNoTTS: '0 - 7 - 9',
                answers: ['079'], exact: true, expl: '"zero seven nine" = 079.' },
              { ui: 'choice', cat: 'spl', srsId: 'og1u1w2:num:ask',
                title: '📻 Para pedir o número de referência, você pergunta:',
                options: DF.shuffle([
                  { label: "What's your reference number?", correct: true },
                  { label: 'What number are you?' }, { label: 'Say me your number.' },
                  { label: 'Which is your number?' }
                ]),
                expl: '"What\'s your reference number?" é a pergunta padrão.' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u1w2:drl:art', unit: 1, waSec: 'Drill · a/an',
                title: '🔁 Drill 1 — a ou an', focus: 'a / an',
                frame: "I need ___.", ptHint: 'Eu preciso de ___.',
                slots: ['a wrench', 'an hour', 'a helmet', 'an engineer', 'a torch', 'an hose'] },
              { ui: 'drill', cat: 'spl', srsId: 'og1u1w2:drl:num', unit: 1, waSec: 'Drill · números',
                title: '🔁 Drill 2 — o número troca', focus: 'números',
                frame: 'My reference number is ___.', ptHint: 'Meu número de referência é ___.',
                slots: ['one one three', 'zero seven nine', 'one four two',
                        'zero zero six', 'one nine nine'] }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'Ouça e anote sozinho', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u1w2:dlg:radio',
                title: '👂 Chamada no rádio da plataforma',
                sub: 'Sem texto na tela. Anote o número antes de responder.',
                hideText: true,
                lines: [
                  { who: 'Control', en: 'North Star, this is Control. What is your reference number?' },
                  { who: 'Erik', en: 'This is North Star. My reference number is one four two.' },
                  { who: 'Control', en: 'Confirmed, one four two. What is your nationality?' },
                  { who: 'Erik', en: "I'm Norwegian." }
                ],
                question: 'Qual é o número de referência do Erik?',
                options: DF.shuffle([
                  { label: '142', correct: true }, { label: '124' },
                  { label: '412' }, { label: '241' }
                ]),
                expl: '"one four two" = 1, 4, 2 → 142, dígito a dígito.'
              },
              { ui: 'type', cat: 'spl', srsId: 'og1u1w2:type:conf',
                title: '👂 E o número que o Control confirmou?',
                sub: 'Só o número.',
                tts: 'Confirmed, one four two.', answers: ['142'], exact: true,
                expl: '"one four two" = 142.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u1w2:build:ref', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Diga um número de referência inventado',
                prompt: 'Invente um número de três dígitos e diga dígito a dígito.',
                example: 'My reference number is zero eight five.',
                mustUse: ['reference'] },
              { ui: 'build', cat: 'fun', srsId: 'og1u1w2:build:art', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Descreva uma ferramenta',
                prompt: 'Diga uma ferramenta que você usa em casa ou no trabalho, com o ' +
                        'artigo certo (a ou an).',
                example: 'I have a hammer at home.',
                mustUse: ['have'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Números rápidos', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u1w2+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Três números seguidos',
                prompt: 'Diga três números de referência diferentes, um atrás do outro, sem pausa.',
                example: 'One one three. Zero seven nine. One nine nine.',
                expl: 'É exatamente o ritmo do rádio real da plataforma.' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de números e artigos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I need ___.', pool: 'placeArticle', focus: 'a / an',
                  ptHint: 'Eu preciso de ___.', n: 5 }
              ],
              numbers: [
                { digits: 3, oh: true, label: '📻 Ouça e escreva o número de referência:' },
                { digits: 3, oh: true, label: '📻 Mais um número de referência:' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'tools', icon: '🧰',
        title: 'What Is Missing?',
        goal: 'Reconhecer ferramentas e equipamentos, usar o verbo to be em todas as formas, ' +
              'e comparar duas listas para achar o que está errado ou faltando.',
        comp: 'Você nomeia ferramentas, usa am/is/are (afirmativa, negativa, pergunta) sem ' +
              'travar, e compara uma lista com uma foto para dizer o que está faltando ou errado.',
        live: [
          'Vocabulário de ferramentas e hardware',
          'Pair work "Checking": um aluno tem a lista, o outro tem a foto — acham as ' +
          'diferenças perguntando um ao outro',
          'Leitura sobre empregadores da indústria',
          'Projeto em pequeno grupo',
          'Verbo to be — explicação e prática'
        ],
        bridge: 'Na aula vocês fizeram o "Checking" em DUPLA, um perguntando ao outro. Aqui ' +
                'você faz uma versão SOLO da mesma habilidade — compara uma foto do galpão ' +
                'com a lista de inventário sozinho e aponta o que não bate — mais o vocabulário ' +
                'de ferramentas novo e o to be até sair automático.',
        nextLive: 'Semana 4 · Revisão + Key Words — fecha o mês com o "Communication" em ' +
                  'dupla e a ficha de embarque.',
        ican: [
          'I can name tools and hardware.',
          "I can use am/is/are — positive, negative and question.",
          'I can compare two lists and say what is missing or wrong.',
          'I can give short answers with the verb to be.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'tools', icon: '🧰', name: 'Ferramentas — só de ouvido', tag: 'listening',
            items: [
              { ui: 'choice', cat: 'pro', srsId: 'og1u1w3:radar:wrench',
                title: '🔊 Que ferramenta você ouviu?',
                tts: 'wrench', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'wrench',
                options: DF.shuffle([{ label: 'wrench', correct: true }, { label: 'hammer' },
                  { label: 'hose' }, { label: 'valve' }]),
                expl: 'wrench = chave de boca.', feedbackTts: 'wrench' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u1w3:radar:valve',
                title: '🔊 E agora?',
                tts: 'valve', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'valve',
                options: DF.shuffle([{ label: 'valve', correct: true }, { label: 'gauge' },
                  { label: 'ladder' }, { label: 'wrench' }]),
                expl: 'valve = válvula.', feedbackTts: 'valve' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u1w3:radar:helmet',
                title: '🔊 E esta?',
                tts: 'helmet', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'helmet',
                options: DF.shuffle([{ label: 'helmet', correct: true }, { label: 'hammer' },
                  { label: 'drill bit' }, { label: 'torch' }]),
                expl: 'helmet = capacete.', feedbackTts: 'helmet' },
              { ui: 'match', cat: 'voc', srsId: 'og1u1w3:match:tools',
                title: '🔗 Ligue a ferramenta ao uso:',
                pairs: [
                  ['wrench', 'turns nuts and bolts'],
                  ['hammer', 'hits nails'],
                  ['torch', 'gives light in the dark'],
                  ['gauge', 'measures pressure'],
                  ['ladder', 'helps you climb up']
                ] }
            ]
          },

          {
            id: 'point', icon: '📐', name: 'To be — a regra num relance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u1w3:read:be',
                title: '📐 To be — am / is / are',
                textTitle: 'As quatro formas',
                readAloud: false,
                text:
                  'POSITIVO\nI am → I\'m a driller.\nYou/We/They are → They\'re on the night shift.\n' +
                  'He/She/It is → She\'s the crane operator.\n\n' +
                  'NEGATIVO\nI am not → I\'m not the welder.\nYou/We/They are not → We aren\'t ready.\n' +
                  'He/She/It is not → It isn\'t new.\n\n' +
                  'PERGUNTA\nAre you…? → Are you the new technician?\nIs she…? → Is she Kuwaiti?\n\n' +
                  'RESPOSTA CURTA\nYes, I am. (nunca "Yes, I\'m.")\nNo, I\'m not.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w3:be:short',
                title: '⚠️ A armadilha nº1 — qual está certa?', main: 'Are you the medic?',
                options: DF.shuffle([
                  { label: 'Yes, I am.', correct: true }, { label: "Yes, I'm.", trap: true },
                  { label: 'Yes, I do.' }, { label: 'Yes, am I.' }
                ]),
                trapNote: 'Caiu na armadilha — a positiva curta NUNCA contrai.',
                expl: 'Yes, I am. A negativa sim: No, I\'m not.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w3:be:1',
                title: '🔧 Complete:', main: 'She ___ the crane operator.',
                options: DF.shuffle([{ label: 'is', correct: true }, { label: 'are' }, { label: 'am' }, { label: 'be' }]),
                expl: 'she → is.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w3:be:2',
                title: '🔧 Complete:', main: 'We ___ ready for the shift.',
                options: DF.shuffle([{ label: 'are', correct: true }, { label: 'is' }, { label: 'am' }, { label: 'be' }]),
                expl: 'we → are.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w3:be:3',
                title: '🔧 Negue:', main: 'The valve ___ new.',
                options: DF.shuffle([{ label: "isn't", correct: true }, { label: "aren't" }, { label: "amn't" }, { label: "don't" }]),
                expl: 'it → isn\'t. "amn\'t" não existe.' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de substituição', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u1w3:drl:iam', unit: 1, waSec: 'Drill · to be',
                title: '🔁 Drill 1 — o cargo troca', focus: 'cargo',
                frame: "I'm ___.", ptHint: 'Eu sou ___.',
                slots: ['a driller', 'an engineer', 'a technician', 'a welder',
                        'a crane operator', 'a medic', 'a safety officer'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u1w3:drl:neg', unit: 1, waSec: 'Drill · to be',
                title: '🔁 Drill 2 — negativa + correção', focus: 'cargo',
                frame: "No, I'm not. I'm ___.", ptHint: 'Não, não sou. Sou ___.',
                slots: ['a welder', 'a medic', 'an engineer', 'a driller', 'a cook'] },
              { ui: 'drill', cat: 'voc', srsId: 'og1u1w3:drl:tool', unit: 1, waSec: 'Drill · ferramentas',
                title: '🔁 Drill 3 — a ferramenta troca', focus: 'vocabulário',
                frame: 'Pass me the ___, please.', ptHint: 'Me passa o(a) ___, por favor.',
                slots: ['wrench', 'hammer', 'torch', 'gauge', 'hose'] }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'og1u1w3:tf:1',
                title: '🔀 Transformação com to be',
                rounds: [
                  { base: 'I am the technician.', cmd: 'Negative',
                    answers: ['I am not the technician.'] },
                  { base: 'I am the technician.', cmd: 'Question',
                    answers: ['Am I the technician?'] },
                  { base: 'They are on the morning shift.', cmd: 'Negative',
                    answers: ['They are not on the morning shift.', "They aren't on the morning shift."] },
                  { base: 'She is Kuwaiti.', cmd: 'Question',
                    answers: ['Is she Kuwaiti?'] },
                  { base: 'Is he the driller?', cmd: 'Short answer',
                    answers: ['Yes, he is.', 'No, he is not.', "No, he isn't."] }
                ] }
            ]
          },

          {
            id: 'checking', icon: '🔍', name: 'Checking — versão solo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u1w3:read:check',
                title: '🔍 Compare o inventário',
                textTitle: 'Warehouse inventory — Shelf 4',
                text:
                  'A lista oficial do galpão diz: 3 wrenches, 2 hammers, 5 helmets, 1 ladder, ' +
                  '4 torches.\n\n' +
                  'Você conta o que está na foto da prateleira 4: 3 wrenches, 2 hammers, ' +
                  '4 helmets, 1 ladder, 4 torches.\n\n' +
                  'Compare os dois números item por item antes de responder.',
                nextLabel: 'Pronto para comparar ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u1w3:check:1',
                title: '🔍 O que está diferente?',
                main: 'Qual item tem uma quantidade errada?',
                options: DF.shuffle([
                  { label: 'helmets — a lista diz 5, a foto tem 4', correct: true },
                  { label: 'wrenches — a lista diz 3, a foto tem 4' },
                  { label: 'ladder — a lista diz 2, a foto tem 1' },
                  { label: 'torches — a lista diz 5, a foto tem 4' }
                ]),
                expl: 'Comparando item por item: helmets é o único número que não bate ' +
                      '(5 na lista, 4 na foto) — falta 1 helmet.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u1w3:build:check', unit: 1, waSec: 'Checking',
                title: '🗣️ Diga o que está faltando',
                prompt: 'Fale a frase que aponta a diferença que você encontrou.',
                example: "One helmet is missing. The list says five, but there are only four.",
                mustUse: ['missing'],
                expl: 'Esta é a versão SOLO do "Checking" da aula — lá é em dupla, aqui é ' +
                      'você sozinho comparando lista e foto.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Mais uma comparação, sem ajuda', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u1w3+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Descreva um erro no inventário',
                prompt: 'Invente uma ferramenta e uma quantidade errada, e diga a frase completa.',
                example: "Two gauges are missing. The list says six, but there are only four.",
                mustUse: ['missing'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de ferramentas', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Pass me the ___, please.', pool: 'og1Tool', focus: 'vocabulário',
                  ptHint: 'Me passa o(a) ___.', n: 5 },
                { frame: "I'm ___.", pool: 'og1Job', focus: 'cargo', ptHint: 'Eu sou ___.', n: 5 }
              ],
              backchain: [
                { text: 'The {og1Tool} is on the shelf.', ptHint: 'A ferramenta está na prateleira…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Ready for the Rig',
        goal: 'Revisar to be, a/an/the, números e ferramentas, e se autoavaliar com um checklist.',
        comp: 'Numa revisão geral, você mistura to be, artigos, números e vocabulário de ' +
              'ferramentas sem errar, e diz com sinceridade o que já consegue fazer sozinho.',
        live: [
          'Communication — pair work de fechamento',
          'Preenchimento da ficha de embarque (job/registration form)',
          'Revisão geral da unidade'
        ],
        bridge: 'Na aula vocês fizeram o "Communication" em dupla e preencheram a ficha ' +
                'juntos. Aqui é uma revisão SOLO no espírito de teste — frases novas, não as ' +
                'da aula — mais o flashcard das Key Words e um checklist "eu consigo…" para ' +
                'você mesmo avaliar o mês.',
        nextLive: 'Unit 2 — Company. Começa na segunda-feira seguinte.',
        ican: [
          'I can use to be, a/an/the and numbers together without stopping to think.',
          'I can name the tools and hardware from this unit.',
          'I can fill in a simple registration form.',
          'I can honestly say what I can and cannot do yet.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u1w4:cards:review',
                title: '🔑 Revisão — as treze palavras do mês',
                sub: 'Flashcard de revisão: as oito principais + as cinco extras.',
                cards: WORDS.concat(EXTRA_WORDS).map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'mix', icon: '📝', name: 'Revisão geral', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w4:mix:1',
                title: '📝 Complete:', main: 'He ___ from Angola. He ___ Angolan.',
                options: DF.shuffle([
                  { label: "is / is", correct: true }, { label: "is / are" },
                  { label: "am / is" }, { label: "are / is" }
                ]),
                expl: 'he → is, nas duas partes.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u1w4:mix:2',
                title: '📝 a, an ou the?', main: 'She is ___ safety officer on ___ North Star Rig.',
                options: DF.shuffle([
                  { label: 'a / the', correct: true }, { label: 'an / a' },
                  { label: 'the / an' }, { label: 'a / a' }
                ]),
                expl: 'safety (som de consoante) → a. North Star Rig é específica, já ' +
                      'conhecida → the.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u1w4:mix:num',
                title: '📻 Ouça e escreva o número de referência:',
                tts: 'One. Six. Five.', showIfNoTTS: '1 - 6 - 5',
                answers: ['165'], exact: true, expl: '"one six five" = 165.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u1w4:mix:tool',
                title: '📝 Complete:', main: 'Check the ___ before you start the pump.',
                options: DF.shuffle([
                  { label: 'gauge', correct: true }, { label: 'ladder' },
                  { label: 'helmet', }, { label: 'crew' }
                ]),
                expl: 'gauge = medidor — é o que se checa antes de ligar a bomba.' },
              { ui: 'match', cat: 'fun', srsId: 'og1u1w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['crew', 'group of people who work together'],
                  ['shift', 'a fixed period of work time'],
                  ['offshore', 'in the sea, away from land'],
                  ['reference number', 'a number that identifies a person in a system']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u1w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'She is not the new technician',
                expl: 'She is not + artigo + cargo.' }
            ]
          },

          {
            id: 'form', icon: '📋', name: 'Ensaio da ficha de embarque', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'voc', srsId: 'og1u1w4:form:1', unit: 1, waSec: 'Ficha de embarque',
                title: '📋 Preencha em voz alta: Full name',
                prompt: 'Diga "My full name is..." e o seu nome completo.',
                example: "My full name is Felipe Tavares.",
                mustUse: ['my full name'],
                expl: 'É o campo "Full name" da ficha real — o app não sabe o seu nome, ' +
                      'mande o áudio.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u1w4:form:2',
                title: '📋 Qual campo pede a nacionalidade?',
                options: DF.shuffle([
                  { label: 'Nationality', correct: true }, { label: 'Job title' },
                  { label: 'Reference number' }, { label: 'Shift' }
                ]),
                expl: 'Nationality = nacionalidade, o campo certo.' }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 1, idx: 0,
                statement: 'I can say where I am from and my nationality.',
                ptHint: 'Eu consigo dizer de onde eu sou e minha nacionalidade.' },
              { ui: 'selfcheck', cat: 'fun', unit: 1, idx: 1,
                statement: 'I can use am/is/are correctly, in positive, negative and question.',
                ptHint: 'Eu consigo usar am/is/are certo, no afirmativo, negativo e pergunta.' },
              { ui: 'selfcheck', cat: 'fun', unit: 1, idx: 2,
                statement: 'I can choose a, an or the without stopping to think.',
                ptHint: 'Eu consigo escolher a, an ou the sem parar pra pensar.' },
              { ui: 'selfcheck', cat: 'fun', unit: 1, idx: 3,
                statement: 'I can say numbers and reference numbers digit by digit.',
                ptHint: 'Eu consigo dizer números e números de referência dígito a dígito.' },
              { ui: 'selfcheck', cat: 'fun', unit: 1, idx: 4,
                statement: 'I can name the tools and hardware from this unit.',
                ptHint: 'Eu consigo nomear as ferramentas e equipamentos desta unidade.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Ensaio de fala — tudo junto', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u1w4:st:1', unit: 1, waSec: 'Revisão',
                title: '🏆 A apresentação completa',
                prompt: 'Cumprimente, diga seu nome, soletre, diga de onde você é e sua ' +
                        'nacionalidade, e diga seu cargo — tudo numa fala só.',
                example: "Hi, I'm Felipe. F-E-L-I-P-E. I'm from Brazil. I'm Brazilian. " +
                         "I'm an English teacher.",
                mustUse: ['hi'],
                expl: 'Mande o áudio — o professor confere pronúncia e as formas gramaticais ' +
                      'do mês inteiro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Revisão sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u1w4+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre a sua equipe de trabalho (real ou ' +
                        'inventada): nomes, cargos, nacionalidades e uma ferramenta que ' +
                        'cada um usa.',
                example: "My colleague is Ana. She's Brazilian. She's an engineer. She uses a gauge.",
                expl: 'É o resumo falado de tudo que a unidade ensinou.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
