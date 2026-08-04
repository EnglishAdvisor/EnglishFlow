/* ENGLISH FLOW — week/plan-starter-04.js
   BUSINESS STARTER · UNIT 4 "Departments"

   Numeração corrida do Felipe: Unit 4 = semanas 13–16.
     semana 13 = U4 W1 · Working with words (verbos + departamentos + plurais)
     semana 14 = U4 W2 · Language at work (present simple I/you/we/they)
     semana 15 = U4 W3 · Practically speaking + Business communication
     semana 16 = U4 W4 · Talking point + teste

   Regra de sempre: O APP NÃO REPETE A AULA. Universo autoral Marcom Global. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const DEPTS = [
    { en: 'Sales', pt: 'Vendas', does: 'meets customers and sells the products' },
    { en: 'Finance', pt: 'Financeiro', does: 'manages the money' },
    { en: 'IT', pt: 'TI', does: 'manages the computer systems' },
    { en: 'Logistics', pt: 'Logística', does: 'manages transport' },
    { en: 'Production', pt: 'Produção', does: 'makes the products' },
    { en: 'Human Resources', pt: 'Recursos Humanos', does: 'meets new employees' }
  ];
  const EXTRA_DEPTS = [
    { en: 'Marketing', pt: 'Marketing', does: 'promotes the products' },
    { en: 'Legal', pt: 'Jurídico', does: 'checks the contracts' },
    { en: 'Maintenance', pt: 'Manutenção', does: 'repairs the machines' }
  ];

  function radar(d, pool) {
    const others = DF.shuffle(pool.filter(function (x) { return x.en !== d.en; })).slice(0, 3);
    return {
      ui: 'choice', cat: 'pro', srsId: 'bs4w1:radar:' + d.en,
      title: '🏢 Que departamento você ouviu?',
      tts: d.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: d.en,
      options: DF.shuffle([{ label: d.en, correct: true }].concat(
        others.map(function (o) { return { label: o.en }; }))),
      expl: d.en + ' = ' + d.pt, feedbackTts: d.en
    };
  }

  DF.PLAN.starter[4] = {
    unit: 4,
    title: 'Departments',
    subtitle: 'Quem faz o quê na Marcom Global',
    icon: '🏢',

    mindmap: {
      center: 'Departments',
      sub: 'O que eu faço e com quem eu trabalho',
      branches: [
        {
          icon: '🏢', name: 'Departments',
          leaves: DEPTS.map(function (d) { return { en: d.en, pt: d.pt }; })
            .concat(EXTRA_DEPTS.map(function (d) { return { en: d.en + ' ·+', pt: d.pt }; })),
          note: '<b>IT</b> lê-se letra por letra ("ai-ti"). <b>HR</b> também ' +
                '("eitch-ar") — mas por extenso é <b>Human Resources</b>. ' +
                'Marcados <b>·+</b> são extras do app.'
        },
        {
          icon: '⚙️', name: 'Os 7 verbos do trabalho',
          leaves: [
            { en: 'work', pt: 'trabalhar — I work for Marcom Global.' },
            { en: 'live', pt: 'morar — I live in Macaé.' },
            { en: 'make', pt: 'fabricar — We make the products.' },
            { en: 'manage', pt: 'gerenciar — I manage a team.' },
            { en: 'meet', pt: 'encontrar — I meet customers.' },
            { en: 'sell', pt: 'vender — We sell to schools.' },
            { en: 'have', pt: 'ter — I have eight people in my team.' }
          ],
          note: 'Cuidado com <b>work for</b> (empresa) e <b>work in</b> (lugar ou ' +
                'departamento): I work <b>for</b> Aurora, <b>in</b> the Sales Department.'
        },
        {
          icon: '➕', name: 'Plurais — as três regras',
          leaves: [
            { en: 'department → departments', pt: 'regra geral: + s' },
            { en: 'product → products', pt: 'regra geral: + s' },
            { en: 'company → companies', pt: 'consoante + y → ies' },
            { en: 'factory → factories', pt: 'consoante + y → ies' },
            { en: 'country → countries', pt: 'consoante + y → ies' },
            { en: 'person → people', pt: '⚠️ irregular' },
            { en: 'employee → employees', pt: 'vogal + e → só + s' }
          ],
          note: 'A regra do <b>-ies</b> só vale com <b>consoante antes do y</b>: ' +
                'compan<b>y</b> → companies, mas d<b>ay</b> → days. ' +
                'E <b>person → people</b> não segue regra nenhuma: decora.'
        },
        {
          icon: '🔢', name: 'Números grandes',
          leaves: [
            { en: '300 = three hundred', pt: 'trezentos' },
            { en: 'over 300 / more than 300', pt: 'mais de 300' },
            { en: 'under 300 / less than 300', pt: 'menos de 300' }
          ],
          note: '<b>hundred</b> nunca leva -s quando tem número na frente: ' +
                'three <b>hundred</b>, não "three hundreds".'
        },
        {
          icon: '👥', name: 'Falando da equipe',
          leaves: [
            { en: 'I work in a team.', pt: 'trabalho em equipe' },
            { en: 'I work on my own.', pt: 'trabalho sozinho' },
            { en: 'I have eight people in my team.', pt: 'tenho oito pessoas na equipe' },
            { en: 'We have three people in the department.', pt: 'somos três no departamento' }
          ],
          note: '<b>on my own</b> = sozinho. Não é "alone" no contexto de trabalho — ' +
                '"alone" soa solitário; "on my own" é neutro, profissional.'
        }
      ]
    },

    weeks: [

      // ══════════════════ SEMANA 1 (a "semana 13" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🏢',
        title: 'Working with words',
        goal: 'Dizer em que departamento você está e o que a sua equipe faz.',
        comp: 'Você diz seu departamento, o que você faz com os verbos do trabalho, ' +
              'e quantas pessoas tem na equipe — com o plural correto.',
        live: [
          'Listen and read — dois profissionais falam do trabalho deles',
          'Complete the table: nome, país, cargo, o que faz, tamanho da equipe',
          'Os 7 verbos: work, live, make, manage, meet, have, sell',
          'O organograma: os 6 departamentos',
          'Tip: plural forms (-s · -ies · person → people)',
          'Tip: big numbers (over / under 300)',
          'Work in pairs: desenhar a estrutura da sua empresa'
        ],
        bridge: 'Na aula você leu os textos, viu o organograma e montou a estrutura ' +
                'da sua empresa em dupla. Aqui você drilla os <b>plurais</b> até a ' +
                'regra do -ies sair sozinha, treina 3 departamentos que o livro não ' +
                'traz, e monta a SUA descrição de equipe.',
        nextLive: 'Semana 2 · Language at work — present simple: como falar do que ' +
                  'você faz todo dia.',
        ican: [
          'I can say which department I work in.',
          'I can say what my team does, using work, make, manage, meet and sell.',
          'I can say how many people are in my team.',
          'I can make plurals with -s, -ies and person → people.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '👂', name: 'Departamentos — só de ouvido', tag: 'listening',
            items: DEPTS.map(function (d) { return radar(d, DEPTS.concat(EXTRA_DEPTS)); })
          },

          {
            id: 'radar2', icon: '➕', name: '3 departamentos que o livro não traz', tag: 'listening',
            items: EXTRA_DEPTS.map(function (d) { return radar(d, DEPTS.concat(EXTRA_DEPTS)); })
          },

          {
            id: 'stress', icon: '🥁', name: 'A força da palavra', tag: 'pronúncia',
            items: [
              { ui: 'stress', cat: 'pro', srsId: 'bs4w1:str:log', word: 'Logistics',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'lo-GIS-tics' },
              { ui: 'stress', cat: 'pro', srsId: 'bs4w1:str:prod', word: 'Production',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'pro-DUC-tion' },
              { ui: 'stress', cat: 'pro', srsId: 'bs4w1:str:fin', word: 'Finance',
                pattern: 'Oo', decoys: ['oO'], syl: 'FI-nance',
                expl: 'O substantivo é FI-nance. (O verbo "to finance" é fi-NANCE.)' },
              { ui: 'stress', cat: 'pro', srsId: 'bs4w1:str:dept', word: 'department',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'de-PART-ment' },
              { ui: 'stress', cat: 'pro', srsId: 'bs4w1:str:cust', word: 'customer',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'CUS-to-mer' },
              { ui: 'stress', cat: 'pro', srsId: 'bs4w1:str:emp', word: 'employee',
                pattern: 'ooO', decoys: ['Ooo', 'oOo'], syl: 'em-ploy-EE',
                expl: 'A força vai no FIM: em-ploy-EE. Compare com em-PLOY-er (o patrão).' }
            ]
          },

          // TRANSFORMATION DRILL — os plurais
          {
            id: 'transform', icon: '🔀', name: 'Drill de plural', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs4w1:tf:1', unit: 4, waSec: 'Drill · plural',
                title: '🔀 Passe para o plural',
                rounds: [
                  { base: 'department', cmd: 'Plural', answer: 'departments' },
                  { base: 'company', cmd: 'Plural', answer: 'companies' },
                  { base: 'customer', cmd: 'Plural', answer: 'customers' },
                  { base: 'factory', cmd: 'Plural', answer: 'factories' },
                  { base: 'person', cmd: 'Plural', answer: 'people' },
                  { base: 'country', cmd: 'Plural', answer: 'countries' },
                  { base: 'employee', cmd: 'Plural', answer: 'employees' },
                  { base: 'office', cmd: 'Plural', answer: 'offices' }
                ] }
            ]
          },

          // DRILL de vocabulário (o foco da coluna Working with words)
          {
            id: 'drill', icon: '🔁', name: 'Drill de vocabulário', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs4w1:drl:dept', unit: 4, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 1 — o departamento troca', focus: 'departamento',
                frame: 'I work in the ___ Department.', ptHint: 'Trabalho no departamento de ___.',
                slots: ['Sales', 'Finance', 'Logistics', 'Production', 'Marketing'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs4w1:drl:verb', unit: 4, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 2 — o que a equipe faz', focus: 'ação',
                frame: 'We ___ the products.', ptHint: 'Nós ___ os produtos.',
                slots: ['make', 'sell', 'transport', 'check'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs4w1:drl:team', unit: 4, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 3 — o tamanho da equipe', focus: 'número',
                frame: 'I have ___ people in my team.', ptHint: 'Tenho ___ pessoas na equipe.',
                slots: ['three', 'five', 'eight', 'twelve', 'over twenty'] }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w1:bc:1', unit: 4, waSec: 'Backchain',
                title: '🧱 A equipe', ptHint: 'Tenho oito pessoas na minha equipe.',
                chain: ['team', 'my team', 'in my team', 'eight people in my team',
                        'I have eight people in my team.'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w1:bc:2', unit: 4, waSec: 'Backchain',
                title: '🧱 O que o departamento faz', ptHint: 'Encontro clientes e vendo os produtos.',
                chain: ['products', 'the products', 'sell the products',
                        'and sell the products', 'I meet customers and sell the products.'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w1:bc:3', unit: 4, waSec: 'Backchain',
                title: '🧱 A empresa global', ptHint: 'Temos mais de 300 escritórios em 40 países.',
                chain: ['countries', 'in 40 countries', 'offices in 40 countries',
                        'over 300 offices in 40 countries',
                        'We have over 300 offices in 40 countries.'] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Ouça e repita', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w1:rep:1', unit: 4, waSec: 'Working with words',
                title: '🎤 O departamento:', target: 'I work in the Sales Department.',
                ptHint: 'Trabalho no departamento de vendas.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w1:rep:2', unit: 4, waSec: 'Working with words',
                title: '🎤 O que você faz:', target: 'I manage a team of IT technicians.',
                ptHint: 'Gerencio uma equipe de técnicos de TI.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w1:rep:3', unit: 4, waSec: 'Working with words', reps: 3,
                title: '🎤 O plural difícil — 3x:', target: 'We have offices in many countries.',
                ptHint: 'Temos escritórios em vários países.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w1:rep:4', unit: 4, waSec: 'Working with words',
                title: '🎤 Sozinho ou em equipe:', target: 'I work on my own.',
                ptHint: 'Trabalho sozinho.' }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Situações novas', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w1:dlg:1',
                title: '🎧 Explicando o organograma',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Beatriz', en: 'We have six departments here in Rio.' },
                  { who: 'Hendrik', en: 'And which one is yours?' },
                  { who: 'Beatriz', en: "I'm in Logistics. We manage transport." },
                  { who: 'Hendrik', en: "I'm in Finance. I manage the money — on my own." }
                ],
                question: 'O que o departamento da Beatriz faz?',
                options: DF.shuffle([
                  { label: 'Gerencia o transporte', correct: true },
                  { label: 'Gerencia o dinheiro' }, { label: 'Faz os produtos' },
                  { label: 'Vende para clientes' }
                ]),
                expl: '"I\'m in Logistics. We manage transport."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w1:dlg:2',
                title: '🎧 O tamanho da equipe',
                lines: [
                  { who: 'Yuki', en: 'How many people are in your team?' },
                  { who: 'Tom', en: 'I have twelve people. We manage the computer systems.' },
                  { who: 'Yuki', en: 'Twelve! My team is small — only three people.' },
                  { who: 'Tom', en: 'But you have customers in over forty countries.' }
                ],
                question: 'Quantas pessoas o Tom tem na equipe?',
                options: DF.shuffle([
                  { label: '12', correct: true }, { label: '3' },
                  { label: '40' }, { label: 'ele não disse' }
                ]),
                expl: '"I have twelve people."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w1:dlg:3',
                title: '🎧 Três departamentos, três funções',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Camila', en: "I'm in Sales. I meet customers and sell the products." },
                  { who: 'Aisha', en: "I'm in Production. We make the products in Lagos." },
                  { who: 'Tom', en: "And I'm in IT. I manage the computer systems." }
                ],
                question: 'Quem trabalha na fábrica de Lagos?',
                options: DF.shuffle([
                  { label: 'Aisha (Production)', correct: true },
                  { label: 'Camila (Sales)' }, { label: 'Tom (IT)' }, { label: 'os três' }
                ]),
                expl: '"I\'m in Production. We make the products in Lagos."'
              }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'bs4w1:match:dept',
                title: '🔗 Ligue o departamento ao que ele faz:',
                pairs: DEPTS.slice(0, 5).map(function (d) { return [d.en, d.does]; }) },
              { ui: 'type', cat: 'gra', srsId: 'bs4w1:pl:1',
                title: '➕ Escreva o plural:', main: 'company',
                answers: ['companies'], expl: 'consoante + y → ies.', feedbackTts: 'companies' },
              { ui: 'type', cat: 'gra', srsId: 'bs4w1:pl:2',
                title: '➕ Escreva o plural:', main: 'person',
                answers: ['people'], expl: '⚠️ irregular: person → people.', feedbackTts: 'people' },
              { ui: 'type', cat: 'gra', srsId: 'bs4w1:pl:3',
                title: '➕ Escreva o plural:', main: 'factory',
                answers: ['factories'], expl: 'consoante + y → ies.', feedbackTts: 'factories' },
              { ui: 'type', cat: 'gra', srsId: 'bs4w1:pl:4',
                title: '➕ Cuidado — este NÃO leva -ies:', main: 'employee',
                answers: ['employees'], expl: 'termina em vogal + e → só + s.', feedbackTts: 'employees' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w1:c:1',
                title: '🔧 Escolha a preposição:', main: 'I work ___ the Sales Department.',
                options: DF.shuffle([
                  { label: 'in', correct: true }, { label: 'for', trap: true },
                  { label: 'at' }, { label: 'to' }
                ]),
                trapNote: 'work FOR é para a empresa; work IN é para o departamento.',
                expl: 'work in + departamento · work for + empresa.' },
              { ui: 'choice', cat: 'voc', srsId: 'bs4w1:c:2',
                title: '🔢 Como se diz "mais de 300"?',
                options: DF.shuffle([
                  { label: 'over 300', correct: true }, { label: 'more 300' },
                  { label: 'up 300' }, { label: 'three hundreds' }
                ]),
                expl: 'over 300 = more than 300. E nunca "hundreds" com número na frente.' },
              { ui: 'order', cat: 'gra', srsId: 'bs4w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'I have eight people in my team',
                expl: 'I have + número + people in my team.' },
              { ui: 'order', cat: 'gra', srsId: 'bs4w1:ord:2',
                title: '🧩 Monte a frase:', answer: 'We make the products in Lagos',
                expl: 'sujeito + verbo + objeto + lugar.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua equipe de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs4w1:build:me', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Seu departamento de verdade',
                prompt: 'Diga em que departamento você trabalha e o que vocês fazem.',
                example: "I work in the Sales Department. We meet customers and sell the products.",
                mustUse: ['work'],
                expl: 'Mande o áudio — o professor confere os verbos e a preposição.' },
              { ui: 'build', cat: 'fun', srsId: 'bs4w1:build:team', unit: 4, waSec: 'Sua vez',
                title: '🗣️ O tamanho da sua equipe',
                prompt: 'Diga quantas pessoas tem na sua equipe — ou que você trabalha sozinho.',
                example: 'I have four people in my team. / I work on my own.',
                mustUse: ['team'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A apresentação completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs4w1+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Nome, empresa, departamento e equipe',
                prompt: 'Junte tudo: quem você é, onde mora, para quem trabalha, ' +
                        'seu departamento e o tamanho da equipe.',
                example: "My name's Felipe. I live in Macaé. I work for EnglishFlow. " +
                         "I'm in the Sales Department and I work on my own.",
                mustUse: ['work', 'live'] },
              { ui: 'build', cat: 'fun', srsId: 'bs4w1+:b2', unit: 4, waSec: 'Praticar mais',
                title: '🔥 A empresa em números',
                prompt: 'Descreva uma empresa grande usando "over" e um plural.',
                example: 'We have over 300 offices in more than 40 countries.',
                mustUse: ['over'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de plurais', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 Plurais — palavras novas a cada rodada',
                templates: ['company', 'customer', 'person', 'office', 'department',
                            'country', 'employee', 'factory', 'product', 'technician'],
                cmds: ['Plural'],
                n: 8
              },
              drills: [
                { frame: 'I work in the ___ Department.', pool: 'dept', focus: 'departamento',
                  ptHint: 'Trabalho no departamento de ___.', n: 5 },
                { frame: 'We ___ the products.', pool: ['make', 'sell', 'transport', 'check'],
                  focus: 'ação', ptHint: 'Nós ___ os produtos.', n: 4 }
              ],
              backchain: [
                { text: 'I work in the {dept} Department.', ptHint: 'Trabalho no departamento de…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANAS 2–4 (destravam nas próximas lives) ══════════════════
      // ══════════════════ SEMANA 2 (a "semana 14" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '🔧',
        title: 'Language at work',
        goal: 'Present simple: falar do que você e sua equipe fazem.',
        comp: 'Você faz e responde perguntas com "Do you…?" sobre o trabalho, ' +
              'e usa "don\'t" para dizer o que NÃO faz.',
        live: [
          'Listen — a gerente e os dois funcionários novos',
          'Language point: positivo, negativo (don\'t), pergunta (Do…?) e resposta curta',
          'Tip: What do you do? = What\'s your job?',
          'Make six questions — a tabela do "Do you…?"',
          'Complete with Who, What or Where',
          'Stand up: perguntar e responder com outras pessoas'
        ],
        bridge: 'Na aula vocês montaram a tabela e fizeram as perguntas em dupla. ' +
                'Aqui você drilla o <b>do/don\'t</b> — que não existe em português e ' +
                'por isso some da fala do brasileiro — até virar automático.',
        nextLive: 'Semana 3 · Practically speaking — there is / there are — e ' +
                  'Business communication: anotar e deixar recado.',
        ican: [
          'I can say what I do at work, in the present simple.',
          "I can use don't to say what I don't do.",
          'I can ask "Do you…?" questions.',
          'I can answer: Yes, I do. / No, I don\'t.',
          'I can ask "What do you do?" to know someone\'s job.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — present simple', tag: 'estudo', mindmap: true },

          {
            id: 'point', icon: '📐', name: 'A regra num relance', tag: 'estudo',
            items: [
              {
                ui: 'read', cat: 'gra', info: true,
                title: '📐 Present simple — I / you / we / they',
                textTitle: 'As quatro formas',
                text: 'POSITIVO\nI work in Sales.\nWe make the products.\nThey live in Lisbon.\n\n' +
                      'NEGATIVO — entra o "don\'t"\nI don\'t work in Finance.\n' +
                      'We don\'t make computers.\n\n' +
                      'PERGUNTA — entra o "do"\nDo you work in Sales?\nDo they live in Brazil?\n\n' +
                      'RESPOSTA CURTA\nYes, I do. / No, I don\'t.\nYes, they do. / No, they don\'t.',
                readAloud: false
              },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w2:g:neg1',
                title: '⚠️ A armadilha do brasileiro:', main: 'Eu não trabalho em Vendas.',
                options: DF.shuffle([
                  { label: "I don't work in Sales.", correct: true },
                  { label: 'I not work in Sales.', trap: true },
                  { label: "I don't works in Sales." }, { label: 'I no work in Sales.' }
                ]),
                trapNote: 'O "don\'t" não existe em português — por isso ele some da sua fala.',
                expl: 'Negativo no presente = <b>don\'t</b> + verbo.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w2:g:q1',
                title: '⚠️ E a pergunta?', main: 'Você trabalha em Vendas?',
                options: DF.shuffle([
                  { label: 'Do you work in Sales?', correct: true },
                  { label: 'You work in Sales?', trap: true },
                  { label: 'Are you work in Sales?' }, { label: 'Do you works in Sales?' }
                ]),
                trapNote: 'Só levantar a voz não basta em inglês — a pergunta precisa do "Do".',
                expl: 'Pergunta no presente = <b>Do</b> + sujeito + verbo.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w2:g:short',
                title: '🔧 A resposta curta:', main: 'Do you manage a team?',
                options: DF.shuffle([
                  { label: 'Yes, I do.', correct: true }, { label: 'Yes, I am.', trap: true },
                  { label: 'Yes, I manage.' }, { label: 'Yes, do I.' }
                ]),
                trapNote: 'A pergunta veio com "Do", então a resposta volta com "do" — não "am".',
                expl: 'Do you…? → Yes, I do. / No, I don\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w2:g:whatdo',
                title: '❓ Como se pergunta o cargo de alguém?',
                options: DF.shuffle([
                  { label: 'What do you do?', correct: true },
                  { label: 'What you do?' }, { label: 'What are you do?' },
                  { label: 'How do you do?' }
                ]),
                expl: '<b>What do you do?</b> = What\'s your job? ' +
                      '("How do you do?" é um cumprimento antigo, não pergunta cargo.)' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w2:g:where',
                title: '❓ Complete com Who, What ou Where:', main: '___ do you work for? — Aurora Systems.',
                options: DF.shuffle([
                  { label: 'Who', correct: true }, { label: 'What' }, { label: 'Where' }
                ]),
                expl: 'work <b>for</b> + empresa/pessoa → Who do you work for?' }
            ]
          },

          {
            id: 'dlg', icon: '🎧', name: 'O que cada um faz', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs4w2:dlg:1',
                title: '🎧 A gerente recebe os novatos',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Beatriz', en: 'Welcome! What do you do, Tom?' },
                  { who: 'Tom', en: "I'm an IT technician. I manage the computer systems." },
                  { who: 'Beatriz', en: 'And do you work in a team?' },
                  { who: 'Tom', en: "No, I don't. I work on my own." }
                ],
                question: 'O Tom trabalha em equipe?',
                options: DF.shuffle([
                  { label: 'Não — trabalha sozinho', correct: true },
                  { label: 'Sim, numa equipe grande' }, { label: 'Sim, com a Beatriz' },
                  { label: 'Ele não respondeu' }
                ]),
                expl: '"No, I don\'t. I work on my own."'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs4w2:dlg:2',
                title: '🎧 Corrigindo uma suposição',
                lines: [
                  { who: 'Hendrik', en: 'Do you live in Lisbon, Camila?' },
                  { who: 'Camila', en: "No, I don't. I live in Porto, but I work in Lisbon." },
                  { who: 'Hendrik', en: 'And do you meet customers?' },
                  { who: 'Camila', en: 'Yes, I do. I meet them every week.' }
                ],
                question: 'Onde a Camila mora?',
                options: DF.shuffle([
                  { label: 'Porto', correct: true }, { label: 'Lisboa' },
                  { label: 'Ela mora e trabalha em Lisboa' }, { label: 'Ela não disse' }
                ]),
                expl: '"I live in Porto, but I work in Lisbon." — morar ≠ trabalhar.'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs4w2:dlg:3',
                title: '🎧 Três pessoas, três rotinas',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Aisha', en: "We make the products, but we don't sell them." },
                  { who: 'Camila', en: 'We sell them. We meet customers all over Europe.' },
                  { who: 'Tom', en: "And I don't meet customers. I manage the computers." }
                ],
                question: 'Quem NÃO encontra clientes?',
                options: DF.shuffle([
                  { label: 'Tom', correct: true }, { label: 'Camila' },
                  { label: 'Aisha' }, { label: 'os três' }
                ]),
                expl: '"And I don\'t meet customers." — Tom é de TI.'
              }
            ]
          },

          // TRANSFORMATION DRILL — o ponto gramatical da unidade
          {
            id: 'transform', icon: '🔀', name: 'Drill de transformação', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs4w2:tf:1', unit: 4, waSec: 'Drill · transformação',
                title: "🔀 Negative — entra o don't",
                rounds: [
                  { base: 'I work in Sales.', cmd: 'Negative', answer: "I don't work in Sales." },
                  { base: 'We make the products.', cmd: 'Negative', answer: "We don't make the products." },
                  { base: 'They live in Brazil.', cmd: 'Negative', answer: "They don't live in Brazil." },
                  { base: 'I manage a team.', cmd: 'Negative', answer: "I don't manage a team." },
                  { base: 'We sell computers.', cmd: 'Negative', answer: "We don't sell computers." }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs4w2:tf:2', unit: 4, waSec: 'Drill · transformação',
                title: '🔀 Question — entra o Do',
                rounds: [
                  { base: 'You work in Finance.', cmd: 'Question', answer: 'Do you work in Finance?' },
                  { base: 'They make the products.', cmd: 'Question', answer: 'Do they make the products?' },
                  { base: 'You live in Macaé.', cmd: 'Question', answer: 'Do you live in Macaé?' },
                  { base: 'We meet customers.', cmd: 'Question', answer: 'Do we meet customers?' },
                  { base: 'They sell to schools.', cmd: 'Question', answer: 'Do they sell to schools?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs4w2:tf:3', unit: 4, waSec: 'Drill · transformação',
                title: '🔀 A resposta curta',
                rounds: [
                  { base: 'Do you work in Sales?', cmd: 'Short answer', answer: 'Yes, I do.' },
                  { base: 'Do they live in Lisbon?', cmd: 'Short answer', answer: "No, they don't." },
                  { base: 'Do you manage a team?', cmd: 'Short answer', answer: 'Yes, I do.' },
                  { base: 'Do they make computers?', cmd: 'Short answer', answer: "No, they don't." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de substituição', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'bs4w2:drl:q', unit: 4, waSec: 'Drill · gramática',
                title: '🔁 Drill 1 — a pergunta se repete', focus: 'verbo',
                frame: 'Do you ___ here?', ptHint: 'Você ___ aqui?',
                slots: ['work', 'live', 'manage a team', 'meet customers', 'make the products'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs4w2:drl:neg', unit: 4, waSec: 'Drill · gramática',
                title: "🔁 Drill 2 — o que você NÃO faz", focus: 'ação',
                frame: "I don't ___.", ptHint: 'Eu não ___.',
                slots: ['sell the products', 'manage the money', 'meet customers',
                        'work in Logistics', 'live in São Paulo'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs4w2:drl:dept', unit: 4, waSec: 'Drill · gramática',
                title: '🔁 Drill 3 — perguntando o departamento', focus: 'departamento',
                frame: 'Do you work in ___?', ptHint: 'Você trabalha em ___?',
                slots: ['Sales', 'Finance', 'IT', 'Logistics', 'Production'] }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w2:bc:1', unit: 4, waSec: 'Backchain',
                title: '🧱 A negativa completa', ptHint: 'Não, não trabalho. Trabalho no financeiro.',
                chain: ['Finance', 'in Finance', 'work in Finance', 'I work in Finance',
                        "No, I don't. I work in Finance."] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w2:bc:2', unit: 4, waSec: 'Backchain',
                title: '🧱 A rotina da equipe', ptHint: 'Nós fabricamos os produtos, mas não vendemos.',
                chain: ['them', 'sell them', "don't sell them", "but we don't sell them",
                        "We make the products, but we don't sell them."] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w2:bc:3', unit: 4, waSec: 'Backchain',
                title: '🧱 A pergunta do cargo', ptHint: 'O que você faz na Marcom Global?',
                chain: ['Global', 'Marcom Global', 'at Marcom Global',
                        'do you do at Marcom Global', 'What do you do at Marcom Global?'] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Até sair automático', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w2:rep:1', unit: 4, waSec: 'Language at work', reps: 3,
                title: '🎤 A pergunta-chave — 3x:', target: 'What do you do?',
                ptHint: 'O que você faz? (= qual é seu cargo?)' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w2:rep:2', unit: 4, waSec: 'Language at work',
                title: '🎤 A pergunta com Do:', target: 'Do you work in a team?',
                ptHint: 'Você trabalha em equipe?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w2:rep:3', unit: 4, waSec: 'Language at work', reps: 3,
                title: "🎤 A negativa — 3x, com o don't bem marcado:",
                target: "No, I don't. I work on my own.",
                ptHint: 'Não. Trabalho sozinho.' },
              { ui: 'build', cat: 'gra', srsId: 'bs4w2:build:1', unit: 4, waSec: 'Language at work',
                title: '🗣️ Diga o que você NÃO faz no trabalho',
                prompt: 'Use "I don\'t" para dizer uma coisa que não é da sua função.',
                example: "I don't manage the money. I manage a team.",
                mustUse: ["don't"] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs4w2:p:1',
                title: '🔧 Complete:', main: "I'm from Switzerland, but I ___ live there.",
                options: DF.shuffle([
                  { label: "don't", correct: true }, { label: 'not' },
                  { label: "doesn't" }, { label: 'no' }
                ]),
                expl: "I don't live there." },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w2:p:2',
                title: '🔧 Complete a pergunta:', main: '___ you work in Sales?',
                options: DF.shuffle([
                  { label: 'Do', correct: true }, { label: 'Are' }, { label: 'Does' }, { label: 'Is' }
                ]),
                expl: 'you → Do you…?' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w2:p:3',
                title: '🔧 Complete a resposta:', main: 'Do you live in Canada? — No, I ___.',
                options: DF.shuffle([
                  { label: "don't", correct: true }, { label: "am not" },
                  { label: "aren't" }, { label: "doesn't" }
                ]),
                expl: "No, I don't." },
              { ui: 'match', cat: 'gra', srsId: 'bs4w2:match:qa',
                title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Where do you live?', 'I live in China.'],
                  ['Who do you work for?', 'I work for Aurora.'],
                  ['What do you do?', "I'm a production manager."],
                  ['Do you work in Sales?', "No, I don't."]
                ] },
              { ui: 'order', cat: 'gra', srsId: 'bs4w2:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Do you manage a department',
                expl: 'Do + you + verbo + objeto?' },
              { ui: 'order', cat: 'gra', srsId: 'bs4w2:ord:2',
                title: '🧩 Monte a negativa:', answer: "We don't sell the products",
                expl: "We + don't + verbo + objeto." },
              { ui: 'order', cat: 'gra', srsId: 'bs4w2:ord:3',
                title: '🧩 Monte a pergunta do cargo:', answer: 'What do you do',
                expl: 'What + do + you + do?' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Pergunte e responda', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'gra', srsId: 'bs4w2+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Quatro perguntas seguidas',
                prompt: 'Entreviste alguém: o que faz, onde mora, para quem trabalha e se gerencia equipe.',
                example: "What do you do? Where do you live? Who do you work for? Do you manage a team?",
                mustUse: ['what do you', 'do you'] },
              { ui: 'build', cat: 'gra', srsId: 'bs4w2+:b2', unit: 4, waSec: 'Praticar mais',
                title: '🔥 O contraste faço / não faço',
                prompt: 'Diga duas coisas que você faz e uma que não faz, numa fala só.',
                example: "I meet customers and I manage a team, but I don't manage the money.",
                mustUse: ["don't", 'and'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de present simple', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Do you work in ___?', pool: 'dept', focus: 'departamento',
                  ptHint: 'Você trabalha em ___?', n: 5 },
                { frame: "I don't ___.", pool: ['sell the products', 'manage the money',
                  'meet customers', 'make computers', 'work in Logistics'],
                  focus: 'ação', ptHint: 'Eu não ___.', n: 5 },
                { frame: 'We ___ the products.', pool: ['make', 'sell', 'transport', 'check'],
                  focus: 'verbo', ptHint: 'Nós ___ os produtos.', n: 4 }
              ],
              backchain: [
                { text: "I don't work in {dept}.", ptHint: 'Eu não trabalho em…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },
      // ══════════════════ SEMANA 3 (a "semana 15" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📞',
        title: 'Practically speaking',
        goal: 'Descrever a empresa com there is / there are e anotar um recado.',
        comp: 'Você descreve seu departamento com there is/are e conduz um recado ' +
              'de telefone inteiro: anota, pede repetição, confirma o número e encerra.',
        live: [
          'Read about a department — there is / there are',
          'Complete the table: is (\'s) para singular, are para plural',
          'Work in pairs: falar da sua empresa com there is / there are',
          'Listen — a ligação com recado, preenchendo o formulário',
          'Key expressions: anotar, deixar, pedir repetição, encerrar',
          'Work in pairs: duas ligações completas com recado'
        ],
        bridge: 'Na aula você preencheu o formulário de recado e praticou em dupla. ' +
                'Aqui você treina o <b>"So that\'s…"</b> — repetir o número pra ' +
                'confirmar — que é o que evita anotar errado na vida real, e drilla ' +
                'o there is/are até parar de traduzir "tem" na cabeça.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 4.',
        ican: [
          "I can say what there is and what there are in my company.",
          'I can answer the phone and offer to take a message.',
          'I can leave a message and give my number.',
          "I can say I don't understand and ask someone to repeat.",
          'I can check a number by repeating it back.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — there is/are e recado', tag: 'estudo', mindmap: true },

          {
            id: 'point', icon: '📐', name: 'A regra num relance', tag: 'estudo',
            items: [
              {
                ui: 'read', cat: 'gra', info: true,
                title: '📐 There is / There are',
                textTitle: 'Uma coisa ou várias',
                text: 'UM (singular)\nThere is → There\'s a manager.\n' +
                      'There\'s an assistant.\nThere\'s one project manager.\n\n' +
                      'VÁRIOS (plural)\nThere are two IT technicians.\n' +
                      'There are four people.\nThere are 200 offices.\n\n' +
                      'O QUE MANDA é o que vem DEPOIS:\n' +
                      'a / an / one → there IS\nqualquer número maior → there ARE',
                readAloud: false
              },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w3:g:1',
                title: '🔧 Complete:', main: 'There ___ 200 offices in 30 countries.',
                options: DF.shuffle([
                  { label: 'are', correct: true }, { label: "'s", trap: true },
                  { label: 'is' }, { label: 'have' }
                ]),
                trapNote: '200 é plural → there ARE.',
                expl: 'O que manda é o que vem depois: 200 offices → are.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w3:g:2',
                title: '🔧 Complete:', main: 'There ___ an office in London.',
                options: DF.shuffle([
                  { label: "'s", correct: true }, { label: 'are' }, { label: 'have' }
                ]),
                expl: 'an office = um só → there\'s.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w3:g:3',
                title: '⚠️ Cuidado — "one" é singular:', main: 'There ___ one project manager.',
                options: DF.shuffle([
                  { label: "'s", correct: true }, { label: 'are', trap: true }, { label: 'have' }
                ]),
                trapNote: '"one" parece número, mas é UM só → there is.',
                expl: 'one = singular → there\'s one project manager.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w3:g:4',
                title: '⚠️ A armadilha do "tem":', main: 'No meu departamento tem quatro pessoas.',
                options: DF.shuffle([
                  { label: 'There are four people in my department.', correct: true },
                  { label: 'Have four people in my department.', trap: true },
                  { label: 'Has four people in my department.' },
                  { label: 'It has four people in my department.' }
                ]),
                trapNote: 'O "tem" do português vira <b>there is/are</b>, não "have".',
                expl: 'existência = there is / there are. "have" é posse.' }
            ]
          },

          // TRANSFORMATION DRILL — singular → plural
          {
            id: 'transform', icon: '🔀', name: 'Drill singular → plural', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs4w3:tf:1', unit: 4, waSec: 'Drill · there are',
                title: '🔀 De um para dois',
                rounds: [
                  { base: "There's a manager.", cmd: 'There are', answer: 'There are two managers.' },
                  { base: "There's an assistant.", cmd: 'There are', answer: 'There are two assistants.' },
                  { base: "There's an IT technician.", cmd: 'There are', answer: 'There are two IT technicians.' },
                  { base: "There's a factory.", cmd: 'There are', answer: 'There are two factories.' },
                  { base: "There's a company.", cmd: 'There are', answer: 'There are two companies.' },
                  { base: "There's a person.", cmd: 'There are', answer: 'There are two people.' }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de expressões', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'bs4w3:drl:there', unit: 4, waSec: 'Drill · there is/are',
                title: '🔁 Drill 1 — o que existe na empresa', focus: 'o que existe',
                frame: "There's ___ here.", ptHint: 'Aqui tem ___.',
                slots: ['a cafeteria', 'a warehouse', 'an assistant', 'a meeting room', 'a car park'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs4w3:drl:take', unit: 4, waSec: 'Drill · expressões',
                title: '🔁 Drill 2 — atendendo e anotando', focus: 'expressão',
                frame: "I'm sorry, he's out. ___", ptHint: 'Sinto muito, ele saiu. ___',
                slots: ['Can I take a message?', 'Can I help you?', 'Is there anything else?'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs4w3:drl:about', unit: 4, waSec: 'Drill · expressões',
                title: '🔁 Drill 3 — o motivo da ligação', focus: 'assunto',
                frame: "I'm calling about ___.", ptHint: 'Estou ligando sobre ___.',
                slots: ['the new website', 'the sales report', 'the new product',
                        'the meeting', 'the two new employees'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs4w3:drl:repeat', unit: 4, waSec: 'Drill · expressões',
                title: '🔁 Drill 4 — quando você não entendeu', focus: 'pedido',
                frame: "Sorry, ___", ptHint: 'Desculpe, ___',
                slots: ["I don't understand.", 'can you repeat that?',
                        'can you say that again?', 'one moment.'] }
            ]
          },

          {
            id: 'who', icon: '👂', name: 'Quem fala: quem liga ou quem atende?', tag: 'listening',
            items: [
              { ui: 'choice', cat: 'fun', srsId: 'bs4w3:who:1',
                title: '👂 Quem diz isso?',
                tts: 'Can I take a message?', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'Can I take a message?',
                options: DF.shuffle([
                  { label: 'Quem ATENDE', correct: true }, { label: 'Quem LIGA' }
                ]),
                expl: 'Quem atende se oferece para anotar.', feedbackTts: 'Can I take a message?' },
              { ui: 'choice', cat: 'fun', srsId: 'bs4w3:who:2',
                title: '👂 Quem diz isso?',
                tts: "I'm calling about the new product.", ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: "I'm calling about the new product.",
                options: DF.shuffle([
                  { label: 'Quem LIGA', correct: true }, { label: 'Quem ATENDE' }
                ]),
                expl: 'Quem liga diz o motivo.', feedbackTts: "I'm calling about the new product." },
              { ui: 'choice', cat: 'fun', srsId: 'bs4w3:who:3',
                title: '👂 Quem diz isso?',
                tts: 'Please call me back as soon as possible.', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'Please call me back as soon as possible.',
                options: DF.shuffle([
                  { label: 'Quem LIGA', correct: true }, { label: 'Quem ATENDE' }
                ]),
                expl: 'É o pedido de retorno — de quem liga.',
                feedbackTts: 'Please call me back as soon as possible.' },
              { ui: 'choice', cat: 'fun', srsId: 'bs4w3:who:4',
                title: '👂 Quem diz isso?',
                tts: "I'll give Camila your message.", ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: "I'll give Camila your message.",
                options: DF.shuffle([
                  { label: 'Quem ATENDE', correct: true }, { label: 'Quem LIGA' }
                ]),
                expl: 'Quem atende promete entregar o recado.',
                feedbackTts: "I'll give Camila your message." },
              { ui: 'choice', cat: 'fun', srsId: 'bs4w3:who:5',
                title: '👂 Quem diz isso?',
                tts: 'Go ahead.', ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: 'Go ahead.',
                options: DF.shuffle([
                  { label: 'Quem ATENDE', correct: true }, { label: 'Quem LIGA' }
                ]),
                expl: '"Go ahead" = pode falar, estou pronto pra anotar.', feedbackTts: 'Go ahead.' }
            ]
          },

          {
            id: 'calls', icon: '🎧', name: 'Ligações com recado', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w3:dlg:1',
                title: '🎧 A pessoa saiu — anotando o recado',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Camila', en: 'Sales. Hello?' },
                  { who: 'Tom', en: 'Hi. Is Beatriz there?' },
                  { who: 'Camila', en: "No, I'm sorry, she's out. Can I take a message?" },
                  { who: 'Tom', en: "Yes, it's Tom in IT. I'm calling about the new website." },
                  { who: 'Camila', en: 'OK. Go ahead.' }
                ],
                question: 'O que a Camila fez quando a Beatriz não estava?',
                options: DF.shuffle([
                  { label: 'Ofereceu anotar um recado', correct: true },
                  { label: 'Pediu para ligar depois' }, { label: 'Passou o celular dela' },
                  { label: 'Desligou' }
                ]),
                expl: '"Can I take a message?" — a oferta padrão de quem atende.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w3:dlg:2',
                title: '🎧 Confirmando o número',
                sub: 'Repare no "So that\'s…" — é o que evita anotar errado.',
                lines: [
                  { who: 'Tom', en: 'Please call me back as soon as possible. My number is 0-7-7-0-0-8-9-7.' },
                  { who: 'Camila', en: "Sorry, I don't understand. Can you repeat that?" },
                  { who: 'Tom', en: 'Zero seven seven zero zero eight nine seven.' },
                  { who: 'Camila', en: "So that's 07700897." },
                  { who: 'Tom', en: "That's right." }
                ],
                question: 'Como a Camila confirmou que anotou certo?',
                options: DF.shuffle([
                  { label: 'Repetiu o número com "So that\'s…"', correct: true },
                  { label: 'Mandou por e-mail' }, { label: 'Não confirmou' },
                  { label: 'Pediu pra ele escrever' }
                ]),
                expl: '"So that\'s…" + o número. Sempre repita — é o que evita erro.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w3:dlg:3',
                title: '🎧 Encerrando a ligação',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Camila', en: 'OK. Is there anything else?' },
                  { who: 'Tom', en: "No, that's all. Thanks, Camila." },
                  { who: 'Camila', en: "I'll give Beatriz your message." },
                  { who: 'Tom', en: 'Thank you. Goodbye.' }
                ],
                question: 'O que a Camila promete no final?',
                options: DF.shuffle([
                  { label: 'Entregar o recado à Beatriz', correct: true },
                  { label: 'Ligar de volta' }, { label: 'Mandar um e-mail' },
                  { label: 'Nada' }
                ]),
                expl: '"I\'ll give Beatriz your message." — o fecho de quem anota.'
              }
            ]
          },

          {
            id: 'number', icon: '🔢', name: 'Anote e confirme o número', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'bs4w3:n:1', exact: true,
                title: '🔢 Ouça o número do recado e escreva:',
                tts: 'oh. 7. 7. oh. oh. 8. 9. 7.', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: '0 - 7 - 7 - 0 - 0 - 8 - 9 - 7',
                answers: ['07700897'], expl: 'O "oh" é zero → 07700897.',
                feedbackTts: 'oh. 7. 7. oh. oh. 8. 9. 7.' },
              { ui: 'type', cat: 'spl', srsId: 'bs4w3:n:2', exact: true,
                title: '🔢 Agora um celular completo:',
                tts: '9. 8. 2. 4. 1. 5. 6. 3.', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: '9 - 8 - 2 - 4 - 1 - 5 - 6 - 3',
                answers: ['98241563'], expl: '98241563.',
                feedbackTts: '9. 8. 2. 4. 1. 5. 6. 3.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w3:rep:conf', unit: 4, waSec: 'Practically Speaking', reps: 3,
                title: '🎤 A confirmação — 3x:', target: "So that's 98241563. Is that right?",
                ptHint: 'Então é 98241563. Está certo?' }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w3:bc:1', unit: 4, waSec: 'Backchain',
                title: '🧱 O pedido de retorno', ptHint: 'Por favor, me retorne assim que possível.',
                chain: ['possible', 'as soon as possible', 'back as soon as possible',
                        'call me back as soon as possible',
                        'Please call me back as soon as possible.'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w3:bc:2', unit: 4, waSec: 'Backchain',
                title: '🧱 A oferta de anotar', ptHint: 'Sinto muito, ela saiu. Posso anotar um recado?',
                chain: ['message', 'a message', 'take a message', 'Can I take a message?',
                        "I'm sorry, she's out. Can I take a message?"] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs4w3:bc:3', unit: 4, waSec: 'Backchain',
                title: '🧱 Descrevendo o departamento', ptHint: 'Tem quatro pessoas no meu departamento.',
                chain: ['department', 'my department', 'in my department',
                        'four people in my department',
                        'There are four people in my department.'] }
            ]
          },

          {
            id: 'expr', icon: '💬', name: 'Key expressions', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w3:rep:1', unit: 4, waSec: 'Business Communication',
                title: '🎤 Oferecendo anotar:', target: 'Can I take a message?',
                ptHint: 'Posso anotar um recado?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w3:rep:2', unit: 4, waSec: 'Business Communication',
                title: '🎤 O motivo da ligação:', target: "I'm calling about the new website.",
                ptHint: 'Estou ligando sobre o site novo.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w3:rep:3', unit: 4, waSec: 'Business Communication',
                title: '🎤 Pedindo repetição:', target: "Sorry, I don't understand. Can you repeat that?",
                ptHint: 'Desculpe, não entendi. Pode repetir?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs4w3:rep:4', unit: 4, waSec: 'Business Communication',
                title: '🎤 Encerrando:', target: "Is there anything else? I'll give her your message.",
                ptHint: 'Mais alguma coisa? Vou passar o recado pra ela.' },
              { ui: 'build', cat: 'fun', srsId: 'bs4w3:build:take', unit: 4, waSec: 'Business Communication',
                title: '📞 Atenda e ofereça anotar',
                prompt: 'A pessoa procurada saiu. Diga isso e ofereça anotar o recado.',
                example: "I'm sorry, he's out. Can I take a message?",
                mustUse: ['message'] },
              { ui: 'build', cat: 'fun', srsId: 'bs4w3:build:leave', unit: 4, waSec: 'Business Communication',
                title: '📞 Deixe o recado',
                prompt: 'Diga quem você é, o motivo da ligação e peça retorno.',
                example: "It's Tom in IT. I'm calling about the website. Please call me back as soon as possible.",
                mustUse: ['calling about'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs4w3:p:1',
                title: "🔧 there's ou there are?", main: 'There ___ five people in my department.',
                options: DF.shuffle([{ label: 'are', correct: true }, { label: "'s" }]),
                expl: 'five people = plural → are.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w3:p:2',
                title: "🔧 there's ou there are?", main: 'There ___ a Logistics Department.',
                options: DF.shuffle([{ label: "'s", correct: true }, { label: 'are' }]),
                expl: 'a Logistics Department = um só → there\'s.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w3:p:3',
                title: "🔧 there's ou there are?", main: 'There ___ seven departments.',
                options: DF.shuffle([{ label: 'are', correct: true }, { label: "'s" }]),
                expl: 'seven departments = plural → are.' },
              { ui: 'match', cat: 'fun', srsId: 'bs4w3:match:call',
                title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Can I take a message?', 'Yes, please. It\'s about the website.'],
                  ['Can you repeat that?', 'Sure. Zero seven seven zero zero.'],
                  ['Is there anything else?', "No, that's all. Thanks."],
                  ["So that's 07700897?", "That's right."]
                ] },
              { ui: 'order', cat: 'fun', srsId: 'bs4w3:ord:1',
                title: '🧩 Monte a oferta:', answer: 'Can I take a message',
                expl: 'Can I take a message?' },
              { ui: 'order', cat: 'fun', srsId: 'bs4w3:ord:2',
                title: '🧩 Monte o pedido:', answer: 'Please call me back as soon as possible',
                expl: 'Please call me back as soon as possible.' },
              { ui: 'order', cat: 'gra', srsId: 'bs4w3:ord:3',
                title: '🧩 Monte a frase:', answer: 'There are two IT technicians in my team',
                expl: 'There are + plural.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'gra', srsId: 'bs4w3:build:me', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Descreva SEU departamento',
                prompt: 'Use there is / there are para dizer o que tem no seu trabalho.',
                example: "There are six people in my department and there's one manager.",
                mustUse: ['there'],
                expl: 'Mande o áudio — o professor confere o is/are.' },
              { ui: 'build', cat: 'fun', srsId: 'bs4w3:build:msg', unit: 4, waSec: 'Sua vez',
                title: '📞 Deixe um recado com o SEU número',
                prompt: 'Diga seu nome, o motivo e seu número de telefone real, dígito por dígito.',
                example: "It's Felipe from EnglishFlow. Please call me back. My number is nine nine...",
                mustUse: ['number'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A ligação inteira', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs4w3+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis do recado',
                prompt: 'Grave a ligação completa: quem atende oferece anotar, quem liga ' +
                        'dá o motivo, o número, e quem atende confirma e encerra.',
                example: "Sales. Hello? — Hi, is Beatriz there? — I'm sorry, she's out. " +
                         "Can I take a message? — Yes, it's Tom. Please call me back. " +
                         "My number is 07700897. — So that's 07700897. I'll give her your message.",
                mustUse: ['message'] },
              { ui: 'build', cat: 'gra', srsId: 'bs4w3+:b2', unit: 4, waSec: 'Praticar mais',
                title: '🔥 A empresa em there is / there are',
                prompt: 'Descreva a empresa inteira: escritórios, departamentos e pessoas.',
                example: "There are 200 offices in 30 countries. There's a head office in Dublin " +
                         'and there are six departments here.',
                mustUse: ['there are', "there's"] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de recado', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              numbers: [
                { digits: 8, oh: true, label: '🔢 Anote o número do recado:' },
                { digits: 6, label: '🔢 Mais um número:' }
              ],
              transform: {
                title: '🔀 De um para dois',
                templates: ["There's a {placeBare}.", "There's a {noun}."],
                cmds: ['There are'],
                n: 6
              },
              drills: [
                { frame: "I'm calling about ___.",
                  pool: ['the new website', 'the sales report', 'the meeting', 'the new product'],
                  focus: 'assunto', ptHint: 'Estou ligando sobre ___.', n: 4 },
                { frame: "There's ___ here.", pool: 'place', focus: 'o que existe',
                  ptHint: 'Aqui tem ___.', n: 4 }
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
        goal: 'Fechar a unidade: ouvir recados na caixa postal e conduzir a ligação inteira.',
        comp: 'Você ouve um recado, anota quem ligou e o motivo, decide para qual ' +
              'departamento encaminhar, e conduz os 5 itens do speaking test.',
        live: [
          'Talking point: voicemail messages — ouvir três recados e preencher',
          'A tabela de ramais: para quem vai cada recado e por quê',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (dois role-plays de telefone)'
        ],
        bridge: 'Na aula você ouviu os recados e discutiu o encaminhamento em dupla. ' +
                'Aqui você ensaia os <b>5 itens exatos do speaking test</b> — começar, ' +
                'deixar, anotar, conferir o número e encerrar — em ligações novas.',
        nextLive: 'Viewpoint 1 · People in business — semana de vídeo, sem conteúdo novo. ' +
                  'Você revisa as Units 1–4 e faz a avaliação em vídeo.',
        ican: [
          'I can listen to a voicemail and write down who called and why.',
          'I can decide which department a message goes to.',
          'I can start a call and leave a message with my number.',
          'I can take a message and check the number.',
          'I can end a call politely.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'voicemail', icon: '📼', name: 'Caixa postal — três recados', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w4:vm:1',
                title: '📼 Recado 1', sub: 'Ouça e descubra o motivo da ligação.',
                hideText: true,
                lines: [
                  { who: 'Recado', en: "Hello, this is Aisha in Production. I'm calling about the new products for the Lagos factory. Please call me back as soon as possible. My number is 0-9-9-6-4-5-6." }
                ],
                question: 'Sobre o que a Aisha está ligando?',
                options: DF.shuffle([
                  { label: 'Os produtos novos da fábrica', correct: true },
                  { label: 'Um funcionário novo' }, { label: 'O transporte' },
                  { label: 'O pagamento' }
                ]),
                expl: '"I\'m calling about the new products for the Lagos factory."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w4:vm:2',
                title: '📼 Recado 2', sub: 'Sem texto. Ouça quantas vezes precisar.',
                hideText: true,
                lines: [
                  { who: 'Recado', en: "Hi, it's Tom in IT. There's a problem with the computer system in reception. Can you call me back today? My extension is 1-0-2." }
                ],
                question: 'Qual é o problema?',
                options: DF.shuffle([
                  { label: 'O sistema de computador da recepção', correct: true },
                  { label: 'O telefone da recepção' }, { label: 'O site da empresa' },
                  { label: 'A impressora da fábrica' }
                ]),
                expl: '"There\'s a problem with the computer system in reception."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs4w4:vm:3',
                title: '📼 Recado 3', sub: 'Este é sobre pessoas.',
                hideText: true,
                lines: [
                  { who: 'Recado', en: "Good morning, this is Camila in Sales. We need two new sales assistants for the Lisbon office. Please call me back. My mobile is 0-7-7-0-0-8-9-7." }
                ],
                question: 'O que a Camila precisa?',
                options: DF.shuffle([
                  { label: 'Dois assistentes de vendas novos', correct: true },
                  { label: 'Dois computadores novos' }, { label: 'Um escritório novo' },
                  { label: 'Dois clientes novos' }
                ]),
                expl: '"We need two new sales assistants for the Lisbon office."'
              }
            ]
          },

          {
            id: 'route', icon: '🎯', name: 'Para qual departamento?', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'fun', srsId: 'bs4w4:rt:1',
                title: '🎯 O recado é sobre PRODUTOS NOVOS. Para quem vai?',
                options: DF.shuffle([
                  { label: 'Production', correct: true }, { label: 'Finance' },
                  { label: 'Human Resources' }, { label: 'Logistics' }
                ]),
                expl: 'Production faz os produtos.' },
              { ui: 'choice', cat: 'fun', srsId: 'bs4w4:rt:2',
                title: '🎯 O recado é sobre um PROBLEMA NO COMPUTADOR. Para quem vai?',
                options: DF.shuffle([
                  { label: 'IT', correct: true }, { label: 'Production' },
                  { label: 'Sales' }, { label: 'Finance' }
                ]),
                expl: 'IT gerencia os sistemas de computador.' },
              { ui: 'choice', cat: 'fun', srsId: 'bs4w4:rt:3',
                title: '🎯 O recado é sobre CONTRATAR DUAS PESSOAS. Para quem vai?',
                options: DF.shuffle([
                  { label: 'Human Resources', correct: true }, { label: 'Sales' },
                  { label: 'Production' }, { label: 'IT' }
                ]),
                expl: 'HR cuida das pessoas — inclusive contratação.' },
              { ui: 'match', cat: 'fun', srsId: 'bs4w4:rt:4',
                title: '🔗 Ligue o assunto ao departamento:',
                pairs: [
                  ['transport of the products', 'Logistics'],
                  ['the money and the invoices', 'Finance'],
                  ['a new employee', 'Human Resources'],
                  ['a customer order', 'Sales']
                ] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'bs4w4:pt:1',
                title: '🔗 Complete as frases — ligue as metades:',
                pairs: [
                  ['I work', 'for a global company.'],
                  ['We live in', 'New York.'],
                  ['They make', 'parts for cars.'],
                  ['We meet', 'customers in our sales office.']
                ] },
              { ui: 'choice', cat: 'voc', srsId: 'bs4w4:pt:2',
                title: '🏢 Quem gerencia o DINHEIRO?',
                options: DF.shuffle([
                  { label: 'Finance', correct: true }, { label: 'Logistics' },
                  { label: 'Production' }, { label: 'IT' }
                ]),
                expl: 'Finance = o dinheiro.' },
              { ui: 'choice', cat: 'voc', srsId: 'bs4w4:pt:3',
                title: '🏢 Quem gerencia o TRANSPORTE?',
                options: DF.shuffle([
                  { label: 'Logistics', correct: true }, { label: 'Finance' },
                  { label: 'Human Resources' }, { label: 'Sales' }
                ]),
                expl: 'Logistics = transporte.' },
              { ui: 'type', cat: 'gra', srsId: 'bs4w4:pt:4',
                title: '➕ Complete o plural:', main: 'We have three department___ in our company.',
                answers: ['departments'], expl: 'departments.', feedbackTts: 'departments' },
              { ui: 'type', cat: 'gra', srsId: 'bs4w4:pt:5',
                title: '➕ Complete o plural:', main: 'I sell software to compan___ in Europe.',
                answers: ['companies'], expl: 'consoante + y → ies.', feedbackTts: 'companies' },
              { ui: 'type', cat: 'gra', srsId: 'bs4w4:pt:6',
                title: '➕ Complete o plural:', main: 'Six peopl___ are in my team.',
                answers: ['people'], expl: '⚠️ irregular: person → people.', feedbackTts: 'people' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w4:pt:7',
                title: "🔧 do ou don't?", main: 'What ___ you do?',
                options: DF.shuffle([{ label: 'do', correct: true }, { label: "don't" }]),
                expl: 'Pergunta → do.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs4w4:pt:8',
                title: "🔧 do ou don't?", main: 'Do you have a sales office? — No, we ___.',
                options: DF.shuffle([{ label: "don't", correct: true }, { label: 'do' }]),
                expl: "Resposta negativa → No, we don't." },
              { ui: 'order', cat: 'fun', srsId: 'bs4w4:pt:9',
                title: '🧩 Monte a expressão:', answer: "He's out Can I take a message",
                expl: "He's out. Can I take a message?" },
              { ui: 'order', cat: 'fun', srsId: 'bs4w4:pt:10',
                title: '🧩 Monte a expressão:', answer: 'Please call me back as soon as possible',
                expl: 'Please call me back as soon as possible.' },
              { ui: 'match', cat: 'fun', srsId: 'bs4w4:pt:11',
                title: '🔗 Ligue a fala à resposta certa:',
                pairs: [
                  ['Can I take a message?', "Yes, please. It's Aisha in Production."],
                  ["Can you repeat that?", "Sure. It's 0778 878 643."],
                  ["I'll give her your message.", 'Thanks very much.'],
                  ['Please call me back.', "What's your number?"]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs4w4:st:1', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 1 de 5 — start the call',
                prompt: 'Você é de Logística e liga para a Produção. Diga quem é e de onde.',
                example: "Hello, this is Felipe in Logistics.", mustUse: ['this is'] },
              { ui: 'build', cat: 'fun', srsId: 'bs4w4:st:2', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 2 de 5 — leave a message',
                prompt: 'A pessoa não está. Diga o motivo da ligação e peça retorno com seu número.',
                example: "I'm calling about the new products. Please call me back. My mobile is 0768 963 625.",
                mustUse: ['calling about', 'call me back'] },
              { ui: 'build', cat: 'fun', srsId: 'bs4w4:st:3', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 3 de 5 — take a message',
                prompt: 'Agora você atende. Sua gerente saiu. Ofereça anotar.',
                example: "I'm sorry, she's out. Can I take a message?",
                mustUse: ['message'] },
              { ui: 'build', cat: 'fun', srsId: 'bs4w4:st:4', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 4 de 5 — check the number',
                prompt: 'Você não entendeu o número. Peça repetição e depois confirme.',
                example: "Sorry, can you repeat that? ... So that's 0996 456 2887.",
                mustUse: ['repeat', "so that's"] },
              { ui: 'build', cat: 'fun', srsId: 'bs4w4:st:5', unit: 4, waSec: 'Speaking Test',
                title: '🏆 Item 5 de 5 — end the call',
                prompt: 'Encerre educadamente, prometendo entregar o recado.',
                example: "Is there anything else? OK, I'll give her your message. Goodbye.",
                mustUse: ['message'],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Os dois role-plays', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs4w4+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Role-play 1 — você liga',
                prompt: 'Ligue para a Produção querendo informação sobre produtos novos. ' +
                        'A pessoa não está: deixe recado com seu número e encerre.',
                example: "Hello, this is Felipe in Logistics. I'm calling about the new products. " +
                         "Please call me back. My mobile is 0768 963 625. Thanks. Goodbye.",
                mustUse: ['calling about'] },
              { ui: 'build', cat: 'fun', srsId: 'bs4w4+:b2', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Role-play 2 — você atende',
                prompt: 'Você é do RH. Seu gerente saiu. Atenda, anote o recado, ' +
                        'confira o número e encerre.',
                example: "Human Resources, hello? ... I'm sorry, he's out. Can I take a message? " +
                         "... So that's 0996 456 2887. I'll give him your message.",
                mustUse: ['message', "so that's"],
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 4', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              numbers: [
                { digits: 8, oh: true, label: '🔢 Anote o número do recado:' },
                { digits: 6, label: '🔢 Confira este também:' }
              ],
              transform: {
                title: '🔀 Plurais',
                templates: ['company', 'customer', 'person', 'office', 'department',
                            'country', 'employee', 'factory'],
                cmds: ['Plural'],
                n: 6
              },
              drills: [
                { frame: 'I work in the ___ Department.', pool: 'dept', focus: 'departamento',
                  ptHint: 'Trabalho no departamento de ___.', n: 4 },
                { frame: "I'm calling about ___.",
                  pool: ['the new products', 'the transport', 'the new employee', 'the invoice'],
                  focus: 'assunto', ptHint: 'Estou ligando sobre ___.', n: 4 },
                { frame: 'Do you ___ here?', pool: 'verb', focus: 'verbo',
                  ptHint: 'Você ___ aqui?', n: 4 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
