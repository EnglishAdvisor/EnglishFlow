/* ENGLISH FLOW — week/plan-starter-01.js
   BUSINESS STARTER · UNIT 1 "You" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro. Os personagens, os diálogos e os exercícios do
                      Business Result. Pair work, correção de pronúncia na hora,
                      tira-dúvidas. É o que só existe com outra pessoa junto.
     APP           →  o que a aula não consegue fazer: repetição infinita sem
                      cansar ninguém, situações NOVAS com a mesma competência,
                      o cargo e o nome REAIS do aluno, feedback imediato 24/7.

   Por isso nenhum personagem, nome ou diálogo do livro aparece aqui. O universo
   do app é o escritório fictício "Marcom Global", 100% autoral — o que também
   cumpre a ESFERA-PEDAGOGIA item 20 (nada copiado do livro).

   ═══ ESTRUTURA ═══
   1 unidade = 1 mês = 4 semanas = 4 aulas ao vivo. Cada semana é uma coluna do
   livro (Business Result 2nd Ed. Starter, Unit 1 "You"):

     Semana 1 · Working with words ...... jobs, introducing yourself, a/an
     Semana 2 · Language at work ........ I'm / you're / Are you…?
     Semana 3 · Practically speaking .... spelling + meeting people
     Semana 4 · Talking point + teste ... progress test + speaking test

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

  // Equipe da Marcom Global — elenco autoral do app, sem relação com o livro
  const JOBS = [
    { say: 'IT technician', art: 'an', pt: 'técnico de TI', does: 'fixes computers' },
    { say: 'finance director', art: 'a', pt: 'diretora financeira', does: 'manages the money' },
    { say: 'office assistant', art: 'an', pt: 'assistente administrativo', does: 'helps in the office' },
    { say: 'sales representative', art: 'a', pt: 'representante de vendas', does: 'sells the products' },
    { say: 'engineer', art: 'an', pt: 'engenheiro', does: 'designs and builds' },
    { say: 'human resources manager', art: 'a', pt: 'gerente de RH', does: 'manages the people' }
  ];

  // cargos que NÃO estão no livro — o app amplia o vocabulário, não repete
  const EXTRA_JOBS = [
    { say: 'accountant', pt: 'contador(a)' },
    { say: 'receptionist', pt: 'recepcionista' },
    { say: 'marketing manager', pt: 'gerente de marketing' },
    { say: 'project coordinator', pt: 'coordenador(a) de projetos' }
  ];

  function jobRadar(j, pool) {
    const others = DF.shuffle(pool.filter(function (x) { return x.say !== j.say; })).slice(0, 3);
    return {
      ui: 'choice', cat: 'pro', srsId: 'bs1w1:radar:' + j.say,
      title: '📡 Que cargo você ouviu?',
      tts: j.say, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: j.say,
      options: DF.shuffle([{ label: j.say, correct: true }].concat(
        others.map(function (o) { return { label: o.say }; }))),
      expl: j.say + ' = ' + j.pt, feedbackTts: j.say
    };
  }

  DF.PLAN.starter[1] = {
    unit: 1,
    title: 'You',
    subtitle: 'Seu primeiro mês',
    icon: '👋',

    mindmap: {
      center: 'You',
      sub: 'Quem eu sou e o que eu faço',
      branches: [
        {
          icon: '💼', name: 'Jobs — cargos',
          leaves: JOBS.map(function (j) { return { en: j.say, pt: j.pt }; })
            .concat(EXTRA_JOBS.map(function (j) { return { en: j.say + ' ·+', pt: j.pt }; })),
          note: 'Em inglês o cargo vem <b>depois</b> do verbo be: <b>I am an engineer</b>. ' +
                'Não se diz "I work as engineer". Os marcados <b>·+</b> não estão no livro — ' +
                'são extras do app.'
        },
        {
          icon: '🤝', name: 'Introducing yourself',
          leaves: [
            { en: "I'm Beatriz.", pt: 'informal, o mais comum' },
            { en: "My name's Beatriz Lima.", pt: 'formal, nome completo' },
            { en: "What's your name?", pt: 'Qual é o seu nome?' },
            { en: "What's your job?", pt: 'Qual é o seu cargo?' },
            { en: 'Nice to meet you.', pt: 'Prazer em conhecer você.' }
          ],
          note: '<b>Armadilha do brasileiro:</b> no dia a dia é <b>I\'m Beatriz</b> — ' +
                'o nome completo só em contexto formal.'
        },
        {
          icon: '🔤', name: 'a / an',
          leaves: [
            { en: 'a manager', pt: 'som de consoante → a' },
            { en: 'an accountant', pt: 'som de vogal → an' },
            { en: 'an engineer', pt: 'som de vogal → an' },
            { en: 'an IT technician', pt: 'lê-se "ai-ti" → an' },
            { en: 'a human resources manager', pt: 'H aspirado → a' }
          ],
          note: 'A regra é de <b>som</b>, não de letra. Por isso <b>an</b> IT technician ' +
                '(o I soa "ai") e <b>a</b> human resources manager (o H é aspirado).'
        },
        {
          icon: '🔧', name: 'To be — I / you',
          leaves: [
            { en: "I'm an engineer.", pt: 'afirmativa' },
            { en: "I'm not a manager.", pt: 'negativa' },
            { en: "You're the new director.", pt: 'afirmativa (você)' },
            { en: 'Are you Beatriz?', pt: 'pergunta' },
            { en: "Yes, I am. / No, I'm not.", pt: 'respostas curtas' }
          ],
          note: '<b>Nunca</b> "Yes, I\'m." sozinho — a resposta curta positiva não contrai: ' +
                '<b>Yes, I am.</b> A negativa sim: <b>No, I\'m not.</b>'
        },
        {
          icon: '🔠', name: 'Spelling — o alfabeto',
          leaves: [
            { en: 'A H J K', pt: 'rimam com "ei"' },
            { en: 'B C D E G P T V', pt: 'rimam com "i"' },
            { en: 'F L M N S X Z', pt: 'começam com "é"' },
            { en: 'I Y', pt: 'rimam com "ai"' },
            { en: 'Q U W', pt: 'rimam com "iu"' }
          ],
          note: 'Agrupar por <b>som</b> é o que faz lembrar. <b>G</b> ("dji") e <b>J</b> ' +
                '("djei") são os que mais confundem brasileiro ao soletrar.'
        },
        {
          icon: '👋', name: 'Meeting people',
          leaves: [
            { en: 'Good morning / afternoon / evening.', pt: 'manhã / tarde / noite' },
            { en: 'Nice to meet you.', pt: 'primeira vez' },
            { en: 'This is my colleague, Aisha.', pt: 'apresentar outra pessoa' },
            { en: 'It was nice meeting you.', pt: 'despedida do primeiro encontro' },
            { en: 'See you soon.', pt: 'até logo' }
          ],
          note: '<b>Nice to meet you</b> só na <b>primeira</b> vez. Reencontrando alguém, ' +
                'é "Nice to see you again".'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'words', icon: '💼',
        title: 'Working with words',
        goal: 'Apresentar-se e dizer o seu cargo em inglês.',
        comp: 'Você se apresenta (nome + cargo) e pergunta o mesmo a alguém, ' +
              'sem travar e com a sílaba tônica correta.',
        live: [
          'Os diálogos de apresentação do livro (listen and read)',
          'Os 6 cargos da unidade, com as fotos',
          'Listen and repeat — a sílaba tônica',
          'Tip a / an',
          'Work in pairs: apresentar-se com o cargo real'
        ],
        bridge: 'Na aula você viu os 6 cargos do livro e praticou em dupla. ' +
                'Aqui você treina o ouvido (reconhecer sem ver escrito), ganha 4 cargos ' +
                'que não estão no livro, e monta a SUA apresentação real.',
        nextLive: 'Semana 2 · Language at work — a gramática por trás disso: ' +
                  "I'm / you're / Are you…?",
        ican: [
          'I can introduce myself in English.',
          'I can say my job title with the right stress.',
          'I can ask someone their name and job.',
          'I can use a / an correctly with job titles.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '👂', name: 'Cargos — só de ouvido', tag: 'listening',
            items: JOBS.map(function (j) { return jobRadar(j, JOBS.concat(EXTRA_JOBS)); })
          },

          {
            id: 'radar2', icon: '➕', name: '4 cargos que o livro não traz', tag: 'listening',
            items: EXTRA_JOBS.map(function (j) { return jobRadar(j, JOBS.concat(EXTRA_JOBS)); })
          },

          {
            id: 'stress', icon: '🥁', name: 'A força da palavra', tag: 'pronúncia',
            items: [
              { ui: 'stress', cat: 'pro', srsId: 'bs1w1:str:tech', word: 'technician',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'tech-NI-cian' },
              { ui: 'stress', cat: 'pro', srsId: 'bs1w1:str:dir', word: 'director',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'di-REC-tor' },
              { ui: 'stress', cat: 'pro', srsId: 'bs1w1:str:asst', word: 'assistant',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'a-SSIS-tant' },
              { ui: 'stress', cat: 'pro', srsId: 'bs1w1:str:mgr', word: 'manager',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'MA-na-ger' },
              { ui: 'stress', cat: 'pro', srsId: 'bs1w1:str:eng', word: 'engineer',
                pattern: 'ooO', decoys: ['Ooo', 'oOo'], syl: 'en-gi-NEER',
                expl: 'Esta é a que o brasileiro mais erra — a força vai no FIM.' },
              { ui: 'stress', cat: 'pro', srsId: 'bs1w1:str:acc', word: 'accountant',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'a-COUN-tant' },
              { ui: 'stress', cat: 'pro', srsId: 'bs1w1:str:rep', word: 'representative',
                pattern: 'ooOoo', decoys: ['Ooooo', 'oooOo'], syl: 're-pre-SEN-ta-tive' }
            ]
          },

          // DRILL da Working with words → foco em VOCABULÁRIO (o cargo troca)
          {
            id: 'drill', icon: '🔁', name: 'Drill de vocabulário', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs1w1:drl:iam', unit: 1, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 1 — o cargo troca', focus: 'cargo',
                frame: "I'm ___.", ptHint: 'Eu sou ___.',
                slots: ['an engineer', 'an accountant', 'a receptionist',
                        'an IT technician', 'a marketing manager', 'a project coordinator'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs1w1:drl:she', unit: 1, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 2 — o lugar troca', focus: 'lugar',
                frame: 'She works in ___.', ptHint: 'Ela trabalha em ___.',
                slots: ['an office', 'a factory', 'the head office', 'a hotel', 'a bank'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs1w1:drl:dept', unit: 1, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 3 — o departamento troca', focus: 'departamento',
                frame: "He's from the ___ department.", ptHint: 'Ele é do departamento de ___.',
                slots: ['Sales', 'Finance', 'IT', 'Marketing', 'Human Resources'] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Ouça e repita', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w1:rep:it', unit: 1, waSec: 'Working with words',
                title: '🎤 Ouça e repita 2x:', target: "I'm an IT technician.", ptHint: 'Eu sou técnico de TI.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w1:rep:acc', unit: 1, waSec: 'Working with words',
                title: '🎤 Um cargo novo:', target: "She's an accountant.", ptHint: 'Ela é contadora.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w1:rep:ask', unit: 1, waSec: 'Working with words',
                title: '🎤 A pergunta que você mais vai usar:', target: "What's your job?", ptHint: 'Qual é o seu cargo?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w1:rep:eng', unit: 1, waSec: 'Working with words',
                title: '🎤 Cuidado com a tônica:', target: "He's an engineer.", ptHint: 'Ele é engenheiro.' }
            ]
          },

          // BACKCHAIN: as duas frases longas da semana 1
          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs1w1:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 Onde ela trabalha', ptHint: 'Ela trabalha num escritório.',
                chain: ['office', 'an office', 'in an office',
                        'works in an office', 'She works in an office.'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs1w1:bc:2', unit: 1, waSec: 'Backchain',
                title: '🧱 O cargo mais longo da unidade', ptHint: 'Eu sou representante de vendas.',
                chain: ['representative', 'sales representative', 'a sales representative',
                        "I'm a sales representative."] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs1w1:bc:3', unit: 1, waSec: 'Backchain',
                title: '🧱 Apresentação completa', ptHint: 'Olá, sou o Tom. Sou técnico de TI.',
                chain: ['technician', 'IT technician', 'an IT technician',
                        "I'm an IT technician", "Hello, I'm Tom. I'm an IT technician."] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Situações novas', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs1w1:dlg:1',
                title: '🎧 No elevador da Marcom Global',
                sub: 'Situação nova — não é o diálogo da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Beatriz', en: "Morning. Are you new here?" },
                  { who: 'Tom', en: "Yes, I am. I'm Tom. I'm the new IT technician." },
                  { who: 'Beatriz', en: "I'm Beatriz, office assistant. Nice to meet you." },
                  { who: 'Tom', en: 'Nice to meet you too.' }
                ],
                question: 'Qual é o cargo da Beatriz?',
                options: DF.shuffle([
                  { label: 'office assistant', correct: true }, { label: 'IT technician' },
                  { label: 'accountant' }, { label: 'engineer' }
                ]),
                expl: 'Ela diz "I\'m Beatriz, office assistant".'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs1w1:dlg:2',
                title: '🎧 Numa videochamada',
                sub: 'Repare: aqui alguém CORRIGE o cargo.',
                lines: [
                  { who: 'Aisha', en: "Hi, I'm Aisha Rahman." },
                  { who: 'Hendrik', en: "Hello Aisha. Are you the marketing manager?" },
                  { who: 'Aisha', en: "No, I'm not. I'm an engineer." },
                  { who: 'Hendrik', en: "Sorry! I'm Hendrik, the finance director." }
                ],
                question: 'O que a Aisha faz?',
                options: DF.shuffle([
                  { label: 'engineer', correct: true }, { label: 'marketing manager' },
                  { label: 'finance director' }, { label: 'receptionist' }
                ]),
                expl: 'Ela corrige: "No, I\'m not. I\'m an engineer."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs1w1:dlg:3',
                title: '🎧 Na cafeteria — três pessoas',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Camila', en: "Hi! I'm Camila, sales representative." },
                  { who: 'Yuki', en: "I'm Yuki. I'm the human resources manager." },
                  { who: 'Tom', en: "And I'm Tom, IT technician. Nice to meet you both." }
                ],
                question: 'Quem trabalha com pessoas (RH)?',
                options: DF.shuffle([
                  { label: 'Yuki', correct: true }, { label: 'Camila' },
                  { label: 'Tom' }, { label: 'ninguém' }
                ]),
                expl: 'Yuki: "I\'m the human resources manager."'
              }
            ]
          },

          {
            id: 'badges', icon: '🪪', name: 'Crachás da Marcom Global', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs1w1:badge:1', unit: 1, waSec: 'Crachás',
                title: '🪪 Aisha Rahman · Engineer',
                prompt: 'Você é a Aisha. Apresente-se com nome e cargo.',
                example: "Hello, I'm Aisha Rahman. I'm an engineer.",
                mustUse: ['aisha', 'engineer'] },
              { ui: 'build', cat: 'fun', srsId: 'bs1w1:badge:2', unit: 1, waSec: 'Crachás',
                title: '🪪 Tom Okafor · IT Technician',
                prompt: 'Agora você é o Tom. Atenção ao artigo antes de IT.',
                example: "Hi, I'm Tom Okafor. I'm an IT technician.",
                mustUse: ['tom', 'technician'] },
              { ui: 'build', cat: 'fun', srsId: 'bs1w1:badge:3', unit: 1, waSec: 'Crachás',
                title: '🪪 Camila Reis · Sales Representative',
                prompt: 'Apresente-se e pergunte o cargo da outra pessoa.',
                example: "My name's Camila Reis. I'm a sales representative. What's your job?",
                mustUse: ['camila', 'sales'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs1w1:art:acc',
                title: '🔤 Complete com a / an:', main: 'Hendrik is ___ accountant.',
                options: DF.shuffle([{ label: 'an', correct: true }, { label: 'a' }]),
                expl: 'accountant começa com som de vogal → an accountant.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs1w1:art:hr',
                title: '🔤 Complete com a / an:', main: 'Yuki is ___ human resources manager.',
                options: DF.shuffle([{ label: 'a', correct: true }, { label: 'an' }]),
                expl: 'human tem H aspirado (som de consoante) → a human resources manager.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs1w1:art:it',
                title: '🔤 Complete com a / an:', main: 'Tom is ___ IT technician.',
                options: DF.shuffle([{ label: 'an', correct: true }, { label: 'a' }]),
                expl: 'IT lê-se "ai-ti" — som de vogal → an IT technician.' },
              { ui: 'match', cat: 'voc', srsId: 'bs1w1:match:jobs',
                title: '🔗 Ligue o cargo ao que a pessoa faz:',
                pairs: JOBS.slice(0, 4).map(function (j) { return [j.say, j.does]; }) },
              { ui: 'order', cat: 'gra', srsId: 'bs1w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'I am the new project coordinator',
                expl: 'I am + artigo + cargo.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs1w1:build:me', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Fale sobre VOCÊ',
                prompt: 'Diga seu nome e o seu cargo real, em inglês.',
                example: "Hello, I'm Felipe. I'm an English teacher.",
                mustUse: ["I'm"],
                expl: 'Esta é a frase que você vai usar de verdade. O app não tem como saber ' +
                      'o seu cargo — mande o áudio e o professor confere a pronúncia.' },
              { ui: 'build', cat: 'fun', srsId: 'bs1w1:build:ask', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Agora pergunte',
                prompt: 'Pergunte a alguém o nome e o cargo, numa fala só.',
                example: "What's your name? And what's your job?",
                mustUse: ['what', 'your'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-speak', icon: '🔥', name: 'Fale sem o modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs1w1+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Sem modelo na tela',
                prompt: 'Apresente-se e diga de que departamento você é.',
                example: "I'm Camila. I'm a sales representative in the Sales department.",
                mustUse: ["I'm", 'department'] },
              { ui: 'build', cat: 'fun', srsId: 'bs1w1+:b2', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Corrija alguém',
                prompt: 'Alguém errou o seu cargo. Negue e diga o certo.',
                example: "No, I'm not. I'm a project coordinator.",
                mustUse: ['not'] }
            ]
          },
          // GERADO: bateria nova a cada vez que abre — o treino não acaba
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de vocabulário', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm ___.", pool: 'job', focus: 'cargo', ptHint: 'Eu sou ___.', n: 5 },
                { frame: 'She works in ___.', pool: 'placeArticle', focus: 'lugar', ptHint: 'Ela trabalha em ___.', n: 5 },
                { frame: "He's from the ___ department.", pool: 'deptU1', focus: 'departamento',
                  ptHint: 'Ele é do departamento de ___.', n: 5 }
              ],
              backchain: [
                { text: 'She works in {placeArticle}.', ptHint: 'Ela trabalha em…' },
                { text: "I'm {job} in the {deptU1} department.", ptHint: 'Eu sou… no departamento de…' }
              ]
            }
          },
          { id: 'more-video', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'grammar', icon: '🔧',
        title: 'Language at work',
        goal: "Usar I'm / you're / Are you…? em afirmativa, negativa e pergunta.",
        comp: 'Você pergunta "Are you…?" e responde com a resposta curta certa ' +
              '(Yes, I am. / No, I\'m not.) sem pensar na regra.',
        live: [
          'Listen and read — o diálogo do livro',
          'Language point: positivo, negativo, pergunta e resposta curta',
          'Tip: I\'m = I am · you\'re = you are',
          'Listen and complete',
          'Work in pairs: escolha um cargo, pergunte e responda'
        ],
        bridge: 'Na aula o professor montou a regra com você e vocês praticaram em dupla. ' +
                'Aqui você trava a armadilha nº1 do brasileiro ("Yes, I\'m" ❌) com ' +
                'repetição até sair automático, em situações que a aula não cobriu.',
        nextLive: 'Semana 3 · Practically speaking — soletrar — e Business communication: ' +
                  'conhecer pessoas.',
        ican: [
          "I can use I'm and you're correctly.",
          'I can ask "Are you…?" questions.',
          "I can give short answers: Yes, I am. / No, I'm not.",
          'I can say what I am NOT.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — abra "To be"', tag: 'estudo', mindmap: true },

          {
            id: 'point', icon: '📐', name: 'A regra num relance', tag: 'estudo',
            items: [
              {
                ui: 'read', cat: 'gra', info: true,
                title: '📐 To be — I / you',
                textTitle: 'As quatro formas',
                text: 'POSITIVO\nI am → I\'m an engineer.\nYou are → You\'re the new director.\n\n' +
                      'NEGATIVO\nI am not → I\'m not a manager.\nYou are not → You aren\'t Beatriz.\n\n' +
                      'PERGUNTA\nAre you…? → Are you the finance director?\n\n' +
                      'RESPOSTA CURTA\nYes, I am. (nunca "Yes, I\'m.")\nNo, I\'m not.',
                readAloud: false
              },
              { ui: 'choice', cat: 'gra', srsId: 'bs1w2:g:short',
                title: '⚠️ A armadilha nº1 — qual está certa?', main: 'Are you the manager?',
                options: DF.shuffle([
                  { label: 'Yes, I am.', correct: true }, { label: "Yes, I'm.", trap: true },
                  { label: 'Yes, I do.' }, { label: 'Yes, am I.' }
                ]),
                trapNote: 'Caiu na armadilha — é exatamente esta que o brasileiro erra.',
                expl: 'Yes, I am. — a positiva curta NUNCA contrai. A negativa sim: No, I\'m not.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs1w2:g:neg2',
                title: '⚠️ E a negativa curta?', main: 'Are you an engineer?',
                options: DF.shuffle([
                  { label: "No, I'm not.", correct: true }, { label: "No, I amn't.", trap: true },
                  { label: 'No, I not.' }, { label: "No, I don't." }
                ]),
                trapNote: '"amn\'t" não existe em inglês.',
                expl: "No, I'm not. — a negativa contrai normalmente." },
              { ui: 'choice', cat: 'gra', srsId: 'bs1w2:g:be2',
                title: '🔧 Complete:', main: "You ___ the new project coordinator.",
                options: DF.shuffle([{ label: "'re", correct: true }, { label: "'m" }, { label: "'s" }, { label: 'be' }]),
                expl: "you → are / you're." }
            ]
          },

          {
            id: 'dlg', icon: '🎧', name: 'Perguntas em contexto', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs1w2:dlg:1',
                title: '🎧 Na portaria — alguém se confunde',
                lines: [
                  { who: 'Recepção', en: 'Good morning. Are you the new office manager?' },
                  { who: 'Tom', en: "No, I'm not. I'm the new IT technician." },
                  { who: 'Recepção', en: 'Sorry! Are you Tom Okafor?' },
                  { who: 'Tom', en: 'Yes, I am.' }
                ],
                question: 'Quantas vezes o Tom usa uma resposta CURTA?',
                options: DF.shuffle([
                  { label: '2 — uma negativa e uma positiva', correct: true },
                  { label: '1' }, { label: '3' }, { label: 'nenhuma' }
                ]),
                expl: '"No, I\'m not." e "Yes, I am." — as duas formas na mesma conversa.'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs1w2:dlg:2',
                title: '🎧 Reunião online — confirmando quem é quem',
                hideText: true,
                lines: [
                  { who: 'Yuki', en: 'Excuse me, are you Hendrik?' },
                  { who: 'Hendrik', en: "Yes, I am. And you're Yuki, right?" },
                  { who: 'Yuki', en: "Yes, I am. Are you the marketing manager?" },
                  { who: 'Hendrik', en: "No, I'm not. I'm the finance director." }
                ],
                question: 'O Hendrik é gerente de marketing?',
                options: DF.shuffle([
                  { label: 'Não — ele é diretor financeiro', correct: true },
                  { label: 'Sim' }, { label: 'Ele não respondeu' }, { label: 'Ele é engenheiro' }
                ]),
                expl: '"No, I\'m not. I\'m the finance director."'
              }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'Ouça e escreva', tag: 'listening',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'bs1w2:t:1',
                title: '👂 Ouça a resposta e escreva:',
                tts: 'Yes, I am.', ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Yes, ___ ___',
                main: 'Are you the finance director?',
                answers: ['Yes, I am', 'Yes I am'], expl: 'Yes, I am.', feedbackTts: 'Yes, I am.' },
              { ui: 'type', cat: 'gra', srsId: 'bs1w2:t:2',
                title: '👂 Ouça a resposta e escreva:',
                tts: "No, I'm not.", ttsLabel: '🔊 Ouvir', showIfNoTTS: 'No, ___ ___',
                main: 'Are you an accountant?',
                answers: ["No, I'm not", 'No I am not', 'No, I am not'], expl: "No, I'm not.", feedbackTts: "No, I'm not." },
              { ui: 'order', cat: 'gra', srsId: 'bs1w2:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Are you from the marketing department',
                expl: 'Are you from + departamento?' },
              { ui: 'order', cat: 'gra', srsId: 'bs1w2:ord:2',
                title: '🧩 Monte a negativa:', answer: 'I am not the office manager',
                expl: "I am not = I'm not." }
            ]
          },

          // TRANSFORMATION DRILL → o app dá a deixa, o aluno transforma
          {
            id: 'transform', icon: '🔀', name: 'Drill de transformação', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs1w2:tf:1', unit: 1, waSec: 'Drill · transformação',
                title: '🔀 Negative e Question',
                rounds: [
                  { base: 'I am Roberto.', cmd: 'Negative', answer: 'I am not Roberto.' },
                  { base: 'I am Roberto.', cmd: 'Question', answer: 'Am I Roberto?' },
                  { base: 'You are the manager.', cmd: 'Negative', answer: 'You are not the manager.' },
                  { base: 'You are the manager.', cmd: 'Question', answer: 'Are you the manager?' },
                  { base: 'I am an engineer.', cmd: 'Negative', answer: 'I am not an engineer.' },
                  { base: 'You are from Sales.', cmd: 'Question', answer: 'Are you from Sales?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs1w2:tf:2', unit: 1, waSec: 'Drill · transformação',
                title: '🔀 Agora a resposta curta',
                rounds: [
                  { base: 'Are you the director?', cmd: 'Short answer', answer: 'Yes, I am.' },
                  { base: 'Are you an accountant?', cmd: 'Short answer', answer: "No, I'm not." },
                  { base: 'Are you Beatriz?', cmd: 'Short answer', answer: 'Yes, I am.' },
                  { base: 'Are you the new manager?', cmd: 'Short answer', answer: "No, I'm not." }
                ] }
            ]
          },

          // CONTRACTION DRILL → forma cheia vira forma contraída
          {
            id: 'contract', icon: '✂️', name: 'Drill de contração', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs1w2:ct:1', unit: 1, waSec: 'Drill · contração',
                title: '✂️ Contraia a frase',
                rounds: [
                  { base: 'You are Jorge.', cmd: 'Contraction', answer: "You're Jorge." },
                  { base: 'She is Marta.', cmd: 'Contraction', answer: "She's Marta." },
                  { base: 'I am an engineer.', cmd: 'Contraction', answer: "I'm an engineer." },
                  { base: 'He is the director.', cmd: 'Contraction', answer: "He's the director." },
                  { base: 'I am not the manager.', cmd: 'Contraction', answer: "I'm not the manager." },
                  { base: 'You are not Beatriz.', cmd: 'Contraction', answer: "You aren't Beatriz." }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs1w2:ct:2', unit: 1, waSec: 'Drill · contração',
                title: '✂️ E agora o contrário — abra a contração',
                rounds: [
                  { base: "I'm Tom.", cmd: 'Affirmative', answer: 'I am Tom.' },
                  { base: "You're the new coordinator.", cmd: 'Affirmative', answer: 'You are the new coordinator.' },
                  { base: "She's an accountant.", cmd: 'Affirmative', answer: 'She is an accountant.' }
                ] }
            ]
          },

          // DRILL da Language at work → foco no PONTO GRAMATICAL (to be)
          {
            id: 'drill', icon: '🔁', name: 'Drill de substituição', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'bs1w2:drl:q', unit: 1, waSec: 'Drill · gramática',
                title: '🔁 Drill 1 — a pergunta se repete', focus: 'cargo dentro da pergunta',
                frame: 'Are you ___?', ptHint: 'Você é ___?',
                slots: ['the manager', 'an engineer', 'the finance director',
                        'an accountant', 'the new coordinator'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs1w2:drl:neg', unit: 1, waSec: 'Drill · gramática',
                title: "🔁 Drill 2 — a negativa + correção", focus: 'cargo',
                frame: "No, I'm not. I'm ___.", ptHint: 'Não, não sou. Sou ___.',
                slots: ['an engineer', 'a receptionist', 'an IT technician',
                        'a sales representative', 'an accountant'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs1w2:drl:you', unit: 1, waSec: 'Drill · gramática',
                title: "🔁 Drill 3 — you're + cargo", focus: 'cargo',
                frame: "You're the new ___.", ptHint: 'Você é o novo ___.',
                slots: ['engineer', 'office assistant', 'marketing manager',
                        'IT technician', 'finance director'] }
            ]
          },

          {
            id: 'saygram', icon: '🎤', name: 'Até sair automático', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w2:rep:q1', unit: 1, waSec: 'Language at work',
                title: '🎤 A pergunta:', target: 'Are you the sales representative?', ptHint: 'Você é o representante de vendas?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w2:rep:a1', unit: 1, waSec: 'Language at work', reps: 3,
                title: '🎤 A positiva — 3x, sem contrair:', target: 'Yes, I am.', ptHint: 'Sim, sou.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w2:rep:a2', unit: 1, waSec: 'Language at work',
                title: '🎤 A negativa completa:', target: "No, I'm not. I'm an engineer.", ptHint: 'Não, não sou. Sou engenheiro.' },
              { ui: 'build', cat: 'gra', srsId: 'bs1w2:build:1', unit: 1, waSec: 'Language at work',
                title: '🗣️ Diga o que você NÃO é',
                prompt: 'Diga um cargo que você não tem, e depois o que você é.',
                example: "I'm not a finance director. I'm an English teacher.",
                mustUse: ['not'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Perguntas encadeadas', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'gra', srsId: 'bs1w2+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Três perguntas seguidas',
                prompt: 'Pergunte o nome, o cargo e se a pessoa é de um departamento.',
                example: "What's your name? What's your job? Are you from the Sales department?",
                mustUse: ['what', 'are you'] }
            ]
          },
          // GERADO: transformações novas toda vez, com nomes e cargos diferentes
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de gramática', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 Transforme — deixas novas a cada rodada',
                templates: ['I am {name}.', 'You are {job}.', 'She is {name}.',
                            'He is {job}.', 'I am {job}.', 'You are {name}.'],
                cmds: ['Negative', 'Question', 'Contraction'],
                n: 8
              },
              drills: [
                { frame: 'Are you ___?', pool: 'job', focus: 'cargo', ptHint: 'Você é ___?', n: 5 },
                { frame: "No, I'm not. I'm ___.", pool: 'job', focus: 'cargo',
                  ptHint: 'Não, não sou. Sou ___.', n: 5 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'speaking', icon: '🔠',
        title: 'Practically speaking',
        goal: 'Soletrar nomes em voz alta e conhecer pessoas em contexto de trabalho.',
        comp: 'Você soletra seu nome e sobrenome ao telefone, e cumprimenta, ' +
              'apresenta alguém e se despede numa reunião.',
        live: [
          'O alfabeto — listen and repeat',
          'Letras que rimam (agrupamento por som)',
          'Listen and complete — nome e sobrenome',
          'Business communication: as três conversas + key expressions',
          'Stand up: cumprimentar, apresentar e se despedir'
        ],
        bridge: 'Na aula você viu o alfabeto e praticou de pé com o professor. ' +
                'Aqui você enfrenta o par G/J (o que mais derruba brasileiro), soletra ' +
                'nomes difíceis de ouvido e treina o SEU sobrenome.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha o mês.',
        ican: [
          'I can say the English alphabet.',
          'I can spell my name and surname aloud.',
          'I can ask "How do you spell that?"',
          'I can greet, introduce someone and say goodbye politely.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — Spelling e Meeting people', tag: 'estudo', mindmap: true },

          {
            id: 'abc', icon: '🔠', name: 'O par que derruba: G e J', tag: 'listening',
            items: [
              { ui: 'choice', cat: 'pro', srsId: 'bs1w3:abc:g1',
                title: '👂 Que letra você ouviu?',
                tts: 'G', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'G',
                options: DF.shuffle([{ label: 'G', correct: true }, { label: 'J' }, { label: 'A' }, { label: 'E' }]),
                expl: '⚠️ G = "dji" · J = "djei". É o par que mais confunde brasileiro.', feedbackTts: 'G' },
              { ui: 'choice', cat: 'pro', srsId: 'bs1w3:abc:j1',
                title: '👂 E agora?',
                tts: 'J', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'J',
                options: DF.shuffle([{ label: 'J', correct: true }, { label: 'G' }, { label: 'I' }, { label: 'K' }]),
                expl: 'J = "djei" (rima com A, H, K).', feedbackTts: 'J' },
              { ui: 'choice', cat: 'pro', srsId: 'bs1w3:abc:e1',
                title: '👂 Outro par difícil — E ou I?',
                tts: 'E', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'E',
                options: DF.shuffle([{ label: 'E', correct: true }, { label: 'I' }, { label: 'A' }, { label: 'Y' }]),
                expl: 'E = "i" · I = "ai". Em português é o contrário — por isso confunde.', feedbackTts: 'E' },
              { ui: 'choice', cat: 'pro', srsId: 'bs1w3:abc:w1',
                title: '👂 Que letra você ouviu?',
                tts: 'W', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'W',
                options: DF.shuffle([{ label: 'W', correct: true }, { label: 'U' }, { label: 'Y' }, { label: 'V' }]),
                expl: 'W = "dábliu". Q U W rimam com "iu".', feedbackTts: 'W' },
              { ui: 'choice', cat: 'pro', srsId: 'bs1w3:abc:grp',
                title: '🔠 Qual letra completa o grupo A H J?',
                tts: 'A. H. J.', ttsLabel: '🔊 Ouvir o grupo', showIfNoTTS: 'A H J',
                options: DF.shuffle([{ label: 'K', correct: true }, { label: 'B' }, { label: 'F' }, { label: 'O' }]),
                expl: 'A H J K — todas rimam com "ei".', feedbackTts: 'A. H. J. K.' }
            ]
          },

          {
            id: 'spell', icon: '🔤', name: 'Sobrenomes difíceis', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'bs1w3:sp:1',
                title: '🔤 Ouça a soletração e escreva:',
                tts: 'O. K. A. F. O. R.', ttsLabel: '🔊 Ouvir a soletração',
                showIfNoTTS: 'O - K - A - F - O - R',
                answers: ['Okafor', 'okafor'], expl: 'O-K-A-F-O-R = Okafor.', feedbackTts: 'Okafor' },
              { ui: 'type', cat: 'spl', srsId: 'bs1w3:sp:2',
                title: '🔤 Este tem o G e o J juntos:',
                tts: 'G. J. E. R. D. E.', ttsLabel: '🔊 Ouvir a soletração',
                showIfNoTTS: 'G - J - E - R - D - E',
                answers: ['Gjerde', 'gjerde'], expl: 'G-J-E-R-D-E = Gjerde. O teste do par G/J.', feedbackTts: 'Gjerde' },
              { ui: 'type', cat: 'spl', srsId: 'bs1w3:sp:3',
                title: '🔤 Ouça e escreva:',
                tts: 'R. A. H. M. A. N.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: 'R - A - H - M - A - N',
                answers: ['Rahman', 'rahman'], expl: 'R-A-H-M-A-N = Rahman.', feedbackTts: 'Rahman' },
              { ui: 'choice', cat: 'fun', srsId: 'bs1w3:sp:ask',
                title: '🔤 Para pedir a soletração, você pergunta:',
                options: DF.shuffle([
                  { label: 'How do you spell that?', correct: true },
                  { label: 'How do you write that?' }, { label: 'What is the letters?' }, { label: 'Spell to me.' }
                ]),
                expl: '"How do you spell that?" — ou "Can you spell your surname?"',
                feedbackTts: 'How do you spell that?' }
            ]
          },

          {
            id: 'spellme', icon: '🎤', name: 'Soletre o SEU sobrenome', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w3:rep:ask', unit: 1, waSec: 'Practically Speaking',
                title: '🎤 A pergunta:', target: 'Can you spell your surname?', ptHint: 'Pode soletrar seu sobrenome?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w3:rep:ask2', unit: 1, waSec: 'Practically Speaking',
                title: '🎤 Quando você não entendeu:', target: 'Sorry, how do you spell that?', ptHint: 'Desculpe, como se soletra?' },
              { ui: 'build', cat: 'spl', srsId: 'bs1w3:build:me', unit: 1, waSec: 'Practically Speaking',
                title: '🗣️ O seu sobrenome, letra por letra',
                prompt: 'Diga seu sobrenome e soletre em inglês.',
                example: 'My surname is Tavares. T-A-V-A-R-E-S.',
                expl: 'Soletrar é o que mais trava brasileiro ao telefone. Mande o áudio.' }
            ]
          },

          {
            id: 'meeting', icon: '🤝', name: 'Cumprimentar e despedir', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs1w3:dlg:1',
                title: '🎧 Chegando numa reunião de manhã',
                lines: [
                  { who: 'Camila', en: 'Good morning. Are you Yuki?' },
                  { who: 'Yuki', en: 'Yes, I am. Nice to meet you.' },
                  { who: 'Camila', en: "I'm Camila. Nice to meet you too." }
                ],
                question: 'Que hora do dia é essa conversa?',
                options: DF.shuffle([
                  { label: 'de manhã', correct: true }, { label: 'à tarde' },
                  { label: 'à noite' }, { label: 'não dá pra saber' }
                ]),
                expl: 'Good morning = manhã · Good afternoon = tarde · Good evening = noite (chegando).'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs1w3:dlg:2',
                title: '🎧 Apresentando um colega',
                lines: [
                  { who: 'Beatriz', en: "I'm Beatriz, and this is my colleague Aisha." },
                  { who: 'Hendrik', en: 'Nice to meet you, Aisha.' },
                  { who: 'Aisha', en: 'Nice to meet you too.' }
                ],
                question: 'Como se apresenta uma terceira pessoa?',
                options: DF.shuffle([
                  { label: 'This is + nome', correct: true }, { label: 'Here is + nome' },
                  { label: 'He is called + nome' }, { label: 'That one is + nome' }
                ]),
                expl: '"This is my colleague, Aisha." — o jeito padrão.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs1w3:dlg:3',
                title: '🎧 A despedida — repare na diferença',
                hideText: true,
                lines: [
                  { who: 'Hendrik', en: 'See you soon, Beatriz.' },
                  { who: 'Beatriz', en: 'Yes, see you soon. And it was nice meeting you, Aisha.' },
                  { who: 'Aisha', en: 'You too. Goodbye.' }
                ],
                question: 'Qual expressão fecha um PRIMEIRO encontro?',
                options: DF.shuffle([
                  { label: 'It was nice meeting you.', correct: true },
                  { label: 'Nice to meet you.' }, { label: 'I go now.' }, { label: 'Good night.' }
                ]),
                expl: 'No começo: "Nice to meet you." No fim: "It was nice meeting you."'
              }
            ]
          },

          // DRILL da Practically speaking / Business comm → foco em EXPRESSÕES ÚTEIS
          {
            id: 'drill', icon: '🔁', name: 'Drill de expressões', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs1w3:drl:greet', unit: 1, waSec: 'Drill · expressões',
                title: '🔁 Drill 1 — o cumprimento troca', focus: 'período do dia',
                frame: 'Good ___. Nice to meet you.', ptHint: 'Bom(a) ___. Prazer.',
                slots: ['morning', 'afternoon', 'evening'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs1w3:drl:intro', unit: 1, waSec: 'Drill · expressões',
                title: '🔁 Drill 2 — quem você apresenta troca', focus: 'pessoa',
                frame: 'This is my ___.', ptHint: 'Este(a) é meu(minha) ___.',
                slots: ['colleague', 'assistant', 'manager', 'client'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs1w3:drl:bye', unit: 1, waSec: 'Drill · expressões',
                title: '🔁 Drill 3 — a despedida troca', focus: 'expressão de despedida',
                frame: '___ Goodbye.', ptHint: '___ Tchau.',
                slots: ['See you soon.', 'See you tomorrow.', 'It was nice meeting you.'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs1w3:drl:spell', unit: 1, waSec: 'Drill · expressões',
                title: '🔁 Drill 4 — pedindo soletração', focus: 'o que você pede',
                frame: 'Can you spell your ___, please?', ptHint: 'Pode soletrar seu(sua) ___, por favor?',
                slots: ['surname', 'first name', 'company name', 'email address'] }
            ]
          },

          // BACKCHAIN nas frases longas — as que travam o brasileiro no meio
          {
            id: 'bc', icon: '🧱', name: 'Frases longas, pedaço por pedaço', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs1w3:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 A despedida completa', ptHint: 'Foi um prazer conhecer você.',
                chain: ['you', 'meeting you', 'nice meeting you',
                        'was nice meeting you', 'It was nice meeting you.'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs1w3:bc:2', unit: 1, waSec: 'Backchain',
                title: '🧱 Pedindo a soletração', ptHint: 'Pode soletrar seu sobrenome, por favor?',
                chain: ['please', 'your surname, please', 'spell your surname, please',
                        'Can you spell your surname, please?'] }
            ]
          },

          {
            id: 'expr', icon: '💬', name: 'Key expressions', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w3:rep:hello', unit: 1, waSec: 'Business Communication',
                title: '🎤 Cumprimentar:', target: 'Good morning. Nice to meet you.', ptHint: 'Bom dia. Prazer em conhecer você.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w3:rep:intro', unit: 1, waSec: 'Business Communication',
                title: '🎤 Apresentar um colega:', target: 'This is my colleague, Aisha.', ptHint: 'Esta é minha colega, Aisha.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w3:rep:bye', unit: 1, waSec: 'Business Communication',
                title: '🎤 Despedir:', target: 'It was nice meeting you. See you soon.', ptHint: 'Foi um prazer. Até logo.' },
              { ui: 'choice', cat: 'fun', srsId: 'bs1w3:fix:1',
                title: '🔍 Ache o erro:', main: '"Nice to meet you." — dito no FIM de uma reunião.',
                options: DF.shuffle([
                  { label: 'Errado — no fim é "It was nice meeting you."', correct: true },
                  { label: 'Certo, pode usar sempre' }, { label: 'Errado — o certo é "Nice to see you."' },
                  { label: 'Errado — o certo é "Good night."' }
                ]),
                expl: '"Nice to meet you" abre. "It was nice meeting you" fecha.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Soletração rápida', tag: 'difícil',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'bs1w3+:t1',
                title: '🔥 Ouça uma vez só e escreva:',
                tts: 'S. Z. C. Z. E. P. A. N. S. K. I.', ttsLabel: '🔊 Ouvir (uma vez)',
                showIfNoTTS: 'S - Z - C - Z - E - P - A - N - S - K - I',
                answers: ['Szczepanski', 'szczepanski'], expl: 'O sobrenome mais difícil da unidade.' },
              { ui: 'build', cat: 'spl', srsId: 'bs1w3+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Nome completo + empresa',
                prompt: 'Diga seu nome completo, soletre o sobrenome e diga onde trabalha.',
                example: "I'm Felipe Tavares. T-A-V-A-R-E-S. I'm from EnglishFlow." }
            ]
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: o teste escrito e o teste oral.',
        comp: 'Numa situação real você cumprimenta, se apresenta, soletra seu sobrenome, ' +
              'diz seu cargo e se despede — os 5 itens do speaking test.',
        live: [
          'Talking point do livro: a conferência, em grupos de três',
          'Troca de papéis e repetição',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (role cards A e B)'
        ],
        bridge: 'Na aula você fez o Talking point da conferência em trio e o professor ' +
                'aplicou o teste. Aqui você ensaia os mesmos 5 itens numa situação ' +
                'DIFERENTE — a visita de um cliente — pra provar que não decorou o roteiro.',
        nextLive: 'Unit 2 — Company. Começa na segunda-feira seguinte.',
        ican: [
          'I can meet someone new in a work situation.',
          'I can introduce myself and a colleague.',
          'I can spell my surname when asked.',
          'I can complete the Unit 1 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'client', icon: '🎤', name: 'A visita do cliente', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w4:rep:1', unit: 1, waSec: 'Talking Point',
                title: '🎤 Um cliente chega na recepção:', target: "Good afternoon. Welcome to Marcom Global.", ptHint: 'Boa tarde. Bem-vindo à Marcom Global.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w4:rep:2', unit: 1, waSec: 'Talking Point',
                title: '🎤 Você pede a soletração:', target: 'Can you spell your surname, please?', ptHint: 'Pode soletrar seu sobrenome, por favor?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w4:rep:3', unit: 1, waSec: 'Talking Point',
                title: '🎤 Você apresenta a colega:', target: 'This is Aisha, our engineer.', ptHint: 'Esta é a Aisha, nossa engenheira.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs1w4:rep:4', unit: 1, waSec: 'Talking Point',
                title: '🎤 Você se despede:', target: 'It was nice meeting you. Goodbye!', ptHint: 'Foi um prazer. Tchau!' }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'voc', srsId: 'bs1w4:pt:1',
                title: '📝 Complete o cumprimento informal:', main: "H___ , my name's Camila.",
                answers: ['Hi', 'hi'], expl: 'Hi = cumprimento informal.' },
              { ui: 'choice', cat: 'voc', srsId: 'bs1w4:pt:2',
                title: '📝 Escolha a palavra certa:', main: "What's your ___ ? — I'm Beatriz.",
                options: DF.shuffle([{ label: 'name', correct: true }, { label: 'job' }]),
                expl: 'A resposta é um nome → "What\'s your name?".' },
              { ui: 'choice', cat: 'voc', srsId: 'bs1w4:pt:3',
                title: '📝 Escolha a palavra certa:', main: "I'm an IT ___ .",
                options: DF.shuffle([{ label: 'technician', correct: true }, { label: 'finance' }]),
                expl: 'IT technician.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs1w4:pt:4',
                title: '📝 Complete:', main: "___ you a manager? — No, I'm not.",
                options: DF.shuffle([{ label: 'Are', correct: true }, { label: 'Am' }, { label: 'Is' }, { label: 'Be' }]),
                expl: 'Are you…? — pergunta com you.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs1w4:pt:5',
                title: '📝 Marque a resposta certa:', main: "You're not Yuki. — ___",
                options: DF.shuffle([
                  { label: "No, I'm not. I'm Camila.", correct: true }, { label: "No, I amn't." },
                  { label: 'No, I not.' }, { label: "Yes, I'm not." }
                ]),
                expl: "No, I'm not. — nunca \"amn't\"." },
              { ui: 'match', cat: 'fun', srsId: 'bs1w4:pt:6',
                title: '🔗 Ligue as metades:',
                pairs: [
                  ['Good…', 'afternoon.'], ['Nice to…', 'meet you.'],
                  ['See…', 'you soon.'], ['It was nice…', 'meeting you.'],
                  ['This is…', 'my assistant.']
                ] },
              { ui: 'order', cat: 'fun', srsId: 'bs1w4:pt:7',
                title: '🧩 Ponha a conversa em ordem:', answer: 'Good morning Are you Hendrik Yes I am',
                expl: 'Cumprimento → pergunta de identificação → resposta curta.' }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs1w4:st:1', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 1 de 5 — say hello',
                prompt: 'Um cliente chega à tarde. Cumprimente.',
                example: 'Good afternoon!', mustUse: ['good'] },
              { ui: 'build', cat: 'fun', srsId: 'bs1w4:st:2', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 2 de 5 — introduce yourself',
                prompt: 'Apresente-se com o seu nome real.',
                example: "My name's Felipe.", mustUse: ['name'] },
              { ui: 'build', cat: 'fun', srsId: 'bs1w4:st:3', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 3 de 5 — ask to spell',
                prompt: 'Peça para o cliente soletrar o sobrenome.',
                example: 'Can you spell your surname?', mustUse: ['spell'] },
              { ui: 'build', cat: 'fun', srsId: 'bs1w4:st:4', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 4 de 5 — ask the job',
                prompt: 'Pergunte o cargo do cliente.',
                example: "What's your job?", mustUse: ['job'] },
              { ui: 'build', cat: 'fun', srsId: 'bs1w4:st:5', unit: 1, waSec: 'Speaking Test',
                title: '🏆 Item 5 de 5 — say goodbye',
                prompt: 'Despeça-se educadamente.',
                example: 'It was nice meeting you. Goodbye.', mustUse: ['goodbye'],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Os 5 itens de uma vez', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs1w4+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 A conversa inteira, sem parar',
                prompt: 'Grave tudo: cumprimente, apresente-se, soletre seu sobrenome, diga seu cargo e despeça-se.',
                example: "Good afternoon. My name's Felipe Tavares — T-A-V-A-R-E-S. I'm an English teacher. It was nice meeting you.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
