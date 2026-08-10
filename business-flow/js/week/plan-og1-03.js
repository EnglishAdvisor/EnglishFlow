/* ENGLISH FLOW — week/plan-og1-03.js
   OIL & GAS 1 · UNIT 3 "Downstream" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Personagens, textos e diálogos do livro
                      nunca aparecem aqui.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Universo: NORTH STAR RIG, a mesma plataforma offshore fictícia das Units
   1 e 2 — mesma tripulação internacional (Erik, Fatima, Priya, Tomás, e o
   time de Control), agora com uma extensão para o setor DOWNSTREAM: a
   planta petroquímica onshore ligada à rig, "North Star Downstream Plant".

     tema 1 (downstream sector, produtos do petróleo) → a planta petroquímica
     tema 2 (present continuous)                      → "o que todo mundo
                                                          está fazendo agora"
     tema 3 (telefone / recados)                       → a central de recados
                                                          da planta
     tema 4 (tendências de mercado, IT email)           → relatórios e e-mails
                                                          da planta
     tema 5 (matemática básica / calculadora)           → números de produção

   ═══ NÍVEL ═══
   OG1 = A1/A2 (elementar). Instruções em PT-BR, frases curtas e diretas.

   ═══ ESTRUTURA ═══
     Semana 1 · Downstream vocabulary ... produtos do petróleo, reading novo
     Semana 2 · Present continuous ....... afirmativa/negativa/pergunta, painel
     Semana 3 · Messages + pronúncia ..... recados, word stress, e-mail de TI
     Semana 4 · Review + Key Words ....... revisão + matemática + self-check */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.og1 = DF.PLAN.og1 || {};

  // ── pools do universo North Star Rig / Downstream Plant ──
  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.og1PresCont = ['checking the gauges', 'reading the control panel',
      'writing a report', 'answering the phone', 'fixing a valve', 'talking to Control',
      'taking a message', 'restarting the computer'];
    DF.WGEN.POOLS.og1Product = ['plastic', 'asphalt', 'propane', 'diesel', 'a tyre',
      'a chemical', 'jet fuel', 'wax'];
    DF.WGEN.POOLS.og1CrewName = ['Erik', 'Fatima', 'Priya', 'Tomás', 'the new operator',
      'the Control team'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  const WORDS = [
    { en: 'refine', pt: 'refinar',
      def: 'to make crude oil pure or usable by removing unwanted parts',
      ex: 'The plant refines crude oil into diesel and other products.' },
    { en: 'distillation', pt: 'destilação',
      def: 'the process of heating oil to separate it into different products',
      ex: 'Distillation is the first step in the downstream process.' },
    { en: 'reserve', pt: 'reserva (estoque estratégico)',
      def: 'an amount of oil or fuel kept and stored for future use',
      ex: 'The country keeps a strategic reserve in case of an emergency.' },
    { en: 'control panel', pt: 'painel de controle',
      def: 'a board with switches and screens used to operate machines',
      ex: 'Fatima checks the control panel every hour.' },
    { en: 'screen', pt: 'tela',
      def: 'the flat surface of a computer or monitor that shows information',
      ex: 'The pressure number is on the screen, top left.' },
    { en: 'output', pt: 'produção (saída)',
      def: 'the amount a plant or machine produces',
      ex: 'The plant\'s output is going up this month.' },
    { en: 'demand', pt: 'demanda',
      def: 'how much people want to buy a product',
      ex: 'Demand for diesel is higher in winter.' },
    { en: 'message', pt: 'recado',
      def: 'a short piece of information given to someone, often by phone',
      ex: 'Can you take a message for Erik? He\'s not at his desk.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'asphalt ·+', pt: 'asfalto',
      def: 'a black material made from oil, used to build roads',
      ex: 'Asphalt comes from the heaviest part of the crude oil.' },
    { en: 'propane ·+', pt: 'propano',
      def: 'a gas made from oil, used for cooking and heating',
      ex: 'The kitchen on the rig uses propane for cooking.' },
    { en: 'keyboard ·+', pt: 'teclado',
      def: 'the part of a computer with keys, used to type',
      ex: 'My keyboard isn\'t working — three keys are stuck.' },
    { en: 'crash ·+', pt: 'travar / falhar (sistema)',
      def: 'when a computer or program suddenly stops working',
      ex: 'The system crashed twice this morning.' },
    { en: 'callback number ·+', pt: 'número para retorno',
      def: 'the phone number someone should call back',
      ex: 'Please leave your callback number after the message.' }
  ];

  DF.PLAN.og1[3] = {
    unit: 3,
    title: 'Downstream',
    subtitle: 'Da rig até o produto final',
    icon: '⚗️',

    mindmap: {
      center: 'Downstream',
      sub: 'Da rig à planta: refino, produtos, telefone e números',
      branches: [
        {
          icon: '⚗️', name: 'Downstream & products',
          leaves: WORDS.filter(function (w) { return ['refine', 'distillation', 'reserve'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) { return w.en.indexOf('asphalt') >= 0 || w.en.indexOf('propane') >= 0; })
              .map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'Downstream é a etapa DEPOIS da extração: refinar o petróleo bruto e ' +
                'transformá-lo em produtos como <b>plastic</b>, <b>asphalt</b> e <b>propane</b>.'
        },
        {
          icon: '⏳', name: 'Present continuous',
          leaves: [
            { en: "I'm checking the gauges.", pt: 'afirmativa' },
            { en: "She isn't answering the phone.", pt: 'negativa' },
            { en: 'Are you reading the panel?', pt: 'pergunta' },
            { en: 'What is he doing right now?', pt: 'pergunta com wh-' },
            { en: 'writing → writing (não *writeing)', pt: 'regra de ortografia do -ing' }
          ],
          note: 'Present continuous = AGORA, neste momento. Cuidado com a ortografia do ' +
                '-ing: <b>write → writing</b> (tira o e), <b>run → running</b> (dobra a ' +
                'consoante).'
        },
        {
          icon: '💻', name: 'Control panel vocabulary',
          leaves: WORDS.filter(function (w) { return ['control panel', 'screen'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) { return w.en.indexOf('keyboard') >= 0 || w.en.indexOf('crash') >= 0; })
              .map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'Vocabulário de painel de controle — o que você usa para relatar um ' +
                'problema de TI.'
        },
        {
          icon: '📞', name: 'Messages & callback',
          leaves: WORDS.filter(function (w) { return w.en === 'message'; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) { return w.en.indexOf('callback') >= 0; })
              .map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'Uma mensagem telefônica completa tem: quem ligou, para quem, o recado, e ' +
                'o <b>callback number</b>.'
        },
        {
          icon: '📈', name: 'Trends',
          leaves: WORDS.filter(function (w) { return ['output', 'demand'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat([
              { en: 'is going up', pt: 'está subindo' },
              { en: 'is going down', pt: 'está caindo' },
              { en: 'is planning to...', pt: 'está planejando...' }
            ]),
          note: 'Present continuous também descreve TENDÊNCIAS atuais e planos próximos: ' +
                '<b>Demand is going up.</b> / <b>The company is planning to expand.</b>'
        },
        {
          icon: '🔢', name: 'Math & numbers',
          leaves: [
            { en: '+ plus', pt: 'mais' },
            { en: '- minus', pt: 'menos' },
            { en: '× times', pt: 'vezes' },
            { en: '÷ divided by', pt: 'dividido por' },
            { en: '= equals', pt: 'é igual a' },
            { en: '% per cent', pt: 'por cento' },
            { en: '. point', pt: 'vírgula/ponto decimal' },
            { en: '√ square root', pt: 'raiz quadrada' }
          ],
          note: 'Vocabulário de calculadora para falar de números de produção: ' +
                '<b>Output is up ten per cent.</b>'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'downstream', icon: '⚗️',
        title: 'From Crude to Product',
        goal: 'Falar sobre o setor downstream e os produtos feitos a partir do petróleo, e ' +
              'entender um texto sobre o dia a dia de uma sala de controle.',
        comp: 'Você nomeia produtos derivados do petróleo, explica o que é downstream em uma ' +
              'frase simples, e entende um texto curto sobre a sala de controle da planta.',
        live: [
          'Contexto do setor downstream: refino, preço de produtos, reservas estratégicas',
          'Exercício de associação: produtos que vêm do petróleo',
          'Leitura: o dia de trabalho de um operador de sala de controle petroquímica'
        ],
        bridge: 'Na aula vocês viram a associação de produtos e leram sobre o operador do ' +
                'livro. Aqui você treina produtos NOVOS (não os da aula) e lê um texto sobre ' +
                'a sala de controle da North Star Downstream Plant — situação diferente, ' +
                'mesma habilidade de leitura.',
        nextLive: 'Semana 2 · Present continuous — a gramática, prática de telefone e ' +
                  'vocabulário de painel de controle.',
        ican: [
          'I can name products made from crude oil.',
          'I can explain what "downstream" means in one simple sentence.',
          'I can understand a short text about a control-room worker.',
          'I can use the unit vocabulary to talk about refining and products.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u3w1:cards:core',
                title: '📇 As oito palavras da unidade',
                sub: 'Definições e exemplos da North Star Rig/Plant — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u3w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'products', icon: '🧴', name: 'What comes from oil?', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u3w1:read:downstream',
                title: '⚗️ Downstream, em uma frase',
                textTitle: 'What is downstream?',
                readAloud: false,
                text:
                  'UPSTREAM é encontrar e extrair o petróleo (a rig faz isso).\n\n' +
                  'DOWNSTREAM é o que acontece DEPOIS: refinar o petróleo bruto (crude oil) ' +
                  'e transformá-lo em produtos que a gente usa todo dia.\n\n' +
                  'O processo de refino se chama DISTILLATION — o petróleo é aquecido e ' +
                  'separado em partes diferentes, cada parte vira um produto diferente.\n\n' +
                  'Do petróleo bruto saem: plástico, asfalto, propano, diesel, pneus e ' +
                  'muitos produtos químicos.',
                nextLabel: 'Entendi ▸' },
              { ui: 'match', cat: 'voc', srsId: 'og1u3w1:match:products',
                title: '🔗 Ligue o produto ao uso:',
                pairs: [
                  ['asphalt', 'builds roads'],
                  ['propane', 'cooking and heating gas'],
                  ['plastic', 'bottles, bags, toys'],
                  ['a tyre', 'goes on a car or truck'],
                  ['jet fuel', 'powers an airplane']
                ] },
              { ui: 'choice', cat: 'voc', srsId: 'og1u3w1:ch:1',
                title: '⚗️ Complete:', main: 'The process of heating oil to separate it is called ___.',
                options: DF.shuffle([
                  { label: 'distillation', correct: true }, { label: 'refinery' },
                  { label: 'reserve' }, { label: 'output' }
                ]),
                expl: 'distillation = destilação, o processo de separar o petróleo em partes.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u3w1:ch:2',
                title: '⚗️ Qual NÃO vem do petróleo?',
                main: 'Which one is NOT usually made from crude oil?',
                options: DF.shuffle([
                  { label: 'cotton', correct: true }, { label: 'plastic' },
                  { label: 'asphalt' }, { label: 'wax' }
                ]),
                expl: 'Cotton (algodão) vem de uma planta, não do petróleo.' },
              { ui: 'type', cat: 'voc', srsId: 'og1u3w1:type:reserve',
                title: '⌨️ Complete a frase:',
                main: 'The government keeps a strategic ___ of oil for emergencies.',
                answers: ['reserve', 'reserves'], expl: 'strategic reserve = reserva estratégica.' }
            ]
          },

          {
            id: 'reading', icon: '📖', name: 'A sala de controle da planta', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u3w1:read:control',
                title: '📖 A day at the North Star Downstream Plant',
                sub: 'Situação nova — não é o texto da aula.',
                textTitle: 'A Day at the Control Room',
                text:
                  'Priya works at the North Star Downstream Plant, onshore. She is a control ' +
                  'room operator.\n\n' +
                  'Every morning, Priya checks the control panel and the screens. She looks ' +
                  'at the numbers for pressure, temperature and output.\n\n' +
                  'At nine o\'clock, she writes a short report for her manager. If a number is ' +
                  'wrong, she calls the maintenance team.\n\n' +
                  'Priya likes her job because every day is a little different — but the ' +
                  'safety checks are always the same.',
                nextLabel: 'Pronto para responder ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u3w1:rc:1',
                title: '📖 Onde a Priya trabalha?',
                options: DF.shuffle([
                  { label: 'North Star Downstream Plant, onshore', correct: true },
                  { label: 'North Star Rig, offshore' },
                  { label: 'The head office' }, { label: 'A ship' }
                ]),
                expl: 'O texto diz "at the North Star Downstream Plant, onshore".' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u3w1:rc:2',
                title: '📖 O que a Priya faz às nove horas?',
                options: DF.shuffle([
                  { label: 'She writes a short report.', correct: true },
                  { label: 'She calls her family.' },
                  { label: 'She has lunch.' }, { label: 'She goes home.' }
                ]),
                expl: '"At nine o\'clock, she writes a short report for her manager."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u3w1:rc:3',
                title: '📖 O que ela faz se um número estiver errado?',
                options: DF.shuffle([
                  { label: 'She calls the maintenance team.', correct: true },
                  { label: 'She ignores it.' },
                  { label: 'She writes a new report.' }, { label: 'She stops the plant.' }
                ]),
                expl: '"If a number is wrong, she calls the maintenance team."' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u3w1:build:products', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Nomeie três produtos do petróleo',
                prompt: 'Diga três produtos que vêm do petróleo, com "comes from oil".',
                example: 'Plastic comes from oil. Asphalt comes from oil. Propane comes from oil.',
                mustUse: ['comes from oil'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u3w1:build:job', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Explique o trabalho da Priya',
                prompt: 'Em uma frase, diga o que a Priya faz todo dia.',
                example: 'Priya checks the control panel every morning.',
                mustUse: ['checks'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u3w1+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Explique downstream com suas palavras',
                prompt: 'Explique o que é "downstream" em inglês, sem olhar a definição.',
                example: 'Downstream is refining crude oil into products like plastic and diesel.',
                mustUse: ['downstream'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de produtos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___ comes from oil.', pool: 'og1Product', focus: 'produto',
                  ptHint: '___ vem do petróleo.', n: 5 }
              ],
              backchain: [
                { text: 'The plant refines crude oil into {og1Product}.', ptHint: 'A planta refina o petróleo bruto em…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'continuous', icon: '⏳',
        title: 'Right Now, on the Rig',
        goal: 'Usar o present continuous em todas as formas (afirmativa, negativa, pergunta) ' +
              'e nomear vocabulário de painel de controle.',
        comp: 'Você diz o que está acontecendo agora, faz e responde perguntas no present ' +
              'continuous sem travar, e nomeia as partes de um painel de controle.',
        live: [
          'Present continuous — explicação e prática (afirmativa, negativa, pergunta)',
          'Prática de conversa telefônica usando o present continuous',
          'Vocabulário de computador e painel de controle',
          'Listening: chamadas telefônicas e recados'
        ],
        bridge: 'Na aula vocês praticaram o present continuous ao telefone com o livro. Aqui ' +
                'é sozinho: cenários NOVOS da tripulação da North Star Rig — "o que cada um ' +
                'está fazendo agora" — mais o vocabulário de painel de controle amplo, com ' +
                'todas as formas da gramática, uma por uma.',
        nextLive: 'Semana 3 · Recados + pronúncia — anotar recados, roleplay de telefone em ' +
                  'dupla, leitura de tendências de mercado, e o e-mail de problema de TI.',
        ican: [
          'I can say what is happening right now, in the affirmative.',
          'I can make the present continuous negative.',
          'I can ask and answer yes/no and wh- questions in the present continuous.',
          'I can name computer and control-panel vocabulary.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'grammar', icon: '⏳', name: 'Present continuous — a regra', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u3w2:read:pc',
                title: '⏳ Present continuous — am/is/are + -ing',
                textTitle: 'As quatro formas',
                readAloud: false,
                text:
                  'AFIRMATIVA\nI am + -ing → I\'m checking the gauges.\n' +
                  'He/She/It is + -ing → She\'s reading the panel.\n' +
                  'You/We/They are + -ing → They\'re answering the phone.\n\n' +
                  'NEGATIVA\nI\'m not writing the report.\nHe isn\'t fixing the valve.\n' +
                  'We aren\'t taking a break.\n\n' +
                  'PERGUNTA (SIM/NÃO)\nAre you checking the panel?\nIs she answering the phone?\n\n' +
                  'PERGUNTA (WH-)\nWhat are you doing?\nWho is he talking to?\n\n' +
                  'RESPOSTA CURTA\nYes, I am. / No, I\'m not.\n\n' +
                  'ORTOGRAFIA DO -ING\nwrite → writing (tira o e mudo)\n' +
                  'run → running (consoante final dobra depois de vogal curta)\n' +
                  'check → checking (normal, só soma -ing)',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u3w2:pc:1',
                title: '⏳ Complete:', main: 'Erik ___ (check) the gauges right now.',
                options: DF.shuffle([
                  { label: 'is checking', correct: true }, { label: 'checking' },
                  { label: 'checks' }, { label: 'are checking' }
                ]),
                expl: 'he → is + checking.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u3w2:pc:2',
                title: '⏳ Negue:', main: 'They ___ (not/answer) the phone at the moment.',
                options: DF.shuffle([
                  { label: "aren't answering", correct: true }, { label: "isn't answering" },
                  { label: "don't answering" }, { label: "not are answering" }
                ]),
                expl: 'they → aren\'t + answering.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u3w2:pc:3',
                title: '⏳ A armadilha da ortografia:', main: 'She is ___ (write) a report.',
                options: DF.shuffle([
                  { label: 'writing', correct: true }, { label: 'writeing', trap: true },
                  { label: 'writting' }, { label: 'writen' }
                ]),
                trapNote: 'Caiu na armadilha do -e mudo — write perde o "e" antes de -ing.',
                expl: 'write → writing (tira o e).' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u3w2:pc:4',
                title: '⏳ Transforme em pergunta:', main: 'You are fixing the valve.',
                options: DF.shuffle([
                  { label: 'Are you fixing the valve?', correct: true },
                  { label: 'Do you fixing the valve?' },
                  { label: 'You are fixing the valve?', trap: true },
                  { label: 'Is you fixing the valve?' }
                ]),
                trapNote: 'Isso é só entonação, não é a forma escrita certa da pergunta.',
                expl: 'Inverte: Are you + -ing?' },
              { ui: 'match', cat: 'gra', srsId: 'og1u3w2:match:pc',
                title: '🔗 Ligue o sujeito à forma do verbo to be:',
                pairs: [
                  ['I', 'am'], ['She', 'is'], ['They', 'are'], ['We', 'are'], ['It', 'is']
                ] }
            ]
          },

          {
            id: 'panel', icon: '💻', name: 'Control panel vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'og1u3w2:panel:1',
                title: '💻 Complete:', main: 'The pressure number is on the ___, top left.',
                options: DF.shuffle([
                  { label: 'screen', correct: true }, { label: 'keyboard' },
                  { label: 'reserve' }, { label: 'output' }
                ]),
                expl: 'screen = tela.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u3w2:panel:2',
                title: '💻 Complete:', main: 'Three keys on my ___ aren\'t working.',
                options: DF.shuffle([
                  { label: 'keyboard', correct: true }, { label: 'screen' },
                  { label: 'panel' }, { label: 'output' }
                ]),
                expl: 'keyboard = teclado.' },
              { ui: 'type', cat: 'voc', srsId: 'og1u3w2:type:crash',
                title: '⌨️ Escreva a palavra:',
                main: 'When a computer suddenly stops working, it ___ (verbo).',
                answers: ['crashes', 'crash'], expl: 'crash = travar/falhar.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u3w2:match:panel',
                title: '🔗 Ligue a palavra ao significado:',
                pairs: [
                  ['control panel', 'a board with switches and screens'],
                  ['screen', 'shows information'],
                  ['keyboard', 'has keys, used to type'],
                  ['crash', 'a computer suddenly stops working']
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u3w2:drl:pc', unit: 3, waSec: 'Drill · present continuous',
                title: '🔁 Drill 1 — o que ele está fazendo agora', focus: 'present continuous',
                frame: "He's ___.", ptHint: 'Ele está ___.',
                slots: ['checking the gauges', 'reading the control panel', 'writing a report',
                        'answering the phone', 'fixing a valve', 'taking a message'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u3w2:drl:q', unit: 3, waSec: 'Drill · perguntas',
                title: '🔁 Drill 2 — pergunte', focus: 'present continuous · pergunta',
                frame: 'What are you ___?', ptHint: 'O que você está ___?',
                slots: ['doing right now', 'reading', 'writing', 'checking', 'fixing'] }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'og1u3w2:tf:1',
                title: '🔀 Transformação com present continuous',
                rounds: [
                  { base: 'I am checking the panel.', cmd: 'Negative',
                    answers: ['I am not checking the panel.', "I'm not checking the panel."] },
                  { base: 'I am checking the panel.', cmd: 'Question',
                    answers: ['Am I checking the panel?'] },
                  { base: 'She is answering the phone.', cmd: 'Negative',
                    answers: ['She is not answering the phone.', "She isn't answering the phone."] },
                  { base: 'They are taking a break.', cmd: 'Question',
                    answers: ['Are they taking a break?'] },
                  { base: 'Is he fixing the valve?', cmd: 'Short answer',
                    answers: ['Yes, he is.', 'No, he is not.', "No, he isn't."] }
                ] }
            ]
          },

          {
            id: 'onrig', icon: '📻', name: 'What is everyone doing?', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u3w2:dlg:1',
                title: '📻 Chamada de status na planta',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Control', en: 'Priya, what is Erik doing right now?' },
                  { who: 'Priya', en: "He's checking the gauges in Section 3." },
                  { who: 'Control', en: 'And is Fatima answering the phone?' },
                  { who: 'Priya', en: "No, she isn't. She's writing a report." }
                ],
                question: 'O que a Fatima está fazendo?',
                options: DF.shuffle([
                  { label: 'writing a report', correct: true }, { label: 'answering the phone' },
                  { label: 'checking the gauges' }, { label: 'fixing a valve' }
                ]),
                expl: '"She\'s writing a report." — não é ela quem está no telefone.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u3w2:dlg:2',
                title: '📻 Outra chamada de status',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Control', en: 'Tomás, are you fixing the pump?' },
                  { who: 'Tomás', en: "No, I'm not. I'm taking a message for the manager." },
                  { who: 'Control', en: 'OK. Who is fixing the pump, then?' },
                  { who: 'Tomás', en: "Erik is. He's working on it now." }
                ],
                question: 'Quem está consertando a bomba (pump)?',
                options: DF.shuffle([
                  { label: 'Erik', correct: true }, { label: 'Tomás' },
                  { label: 'Fatima' }, { label: 'Priya' }
                ]),
                expl: '"Erik is. He\'s working on it now."'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u3w2:build:now', unit: 3, waSec: 'Sua vez',
                title: '🗣️ O que você está fazendo agora?',
                prompt: 'Diga uma frase no present continuous sobre o que você está fazendo ' +
                        'neste exato momento.',
                example: "I'm doing my English practice right now.",
                mustUse: ['right now'] },
              { ui: 'build', cat: 'fun', srsId: 'og1u3w2:build:crew', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Invente o que a tripulação está fazendo',
                prompt: 'Invente uma frase sobre o que dois membros da tripulação (Erik, ' +
                        'Fatima, Priya ou Tomás) estão fazendo agora.',
                example: "Erik is fixing a valve, and Priya is reading the control panel.",
                mustUse: ['is'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Perguntas sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u3w2+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Três perguntas seguidas',
                prompt: 'Faça três perguntas diferentes no present continuous, uma atrás da outra.',
                example: 'Are you checking the panel? What is she doing? Is he answering the phone?',
                expl: 'É o ritmo real de uma checagem de status pelo rádio.' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito do present continuous', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '{og1CrewName} is ___.', pool: 'og1PresCont', focus: 'present continuous',
                  ptHint: '___ está ___.', n: 5 }
              ],
              backchain: [
                { text: 'Right now, {og1CrewName} is {og1PresCont}.', ptHint: 'Agora, … está …' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'messages', icon: '📞',
        title: 'Taking the Call',
        goal: 'Anotar recados telefônicos corretamente, pronunciar palavras de 2 e 3 sílabas ' +
              'com o acento certo, e escrever um e-mail simples relatando um problema de TI.',
        comp: 'Você ouve um recado telefônico e preenche uma ficha de recado completa, ' +
              'reconhece o acento de palavras compostas, e escreve um e-mail curto sobre um ' +
              'problema de computador.',
        live: [
          'Prática escrita de anotação de recados',
          'Pair work "Making and taking calls" — um aluno liga, o outro anota',
          'Leitura sobre tendências do mercado de petroquímicos e gás, usando present ' +
          'continuous para planos e tendências',
          'Pronúncia: acento de palavras de 2 e 3 partes',
          'Modelo de escrita: e-mail relatando um problema de TI'
        ],
        bridge: 'Na aula vocês fizeram o roleplay de telefone em DUPLA — um liga, o outro ' +
                'anota. Aqui é a versão SOLO da mesma habilidade: você ouve (ou lê) um recado ' +
                'e preenche a ficha sozinho — mais um exercício NOVO de acento de palavras e ' +
                'um e-mail de TI com um cenário diferente do da aula.',
        nextLive: 'Semana 4 · Revisão + Key Words — calculadora, checklist e o ' +
                  '"Communication" final combinando recado e cálculo.',
        ican: [
          'I can take a phone message and fill in every field correctly.',
          'I can hear the stress in two-part and three-part words.',
          'I can write a short email reporting an IT problem.',
          'I can understand a text about market trends using the present continuous.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'message', icon: '📞', name: 'Message slip — versão solo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u3w3:read:slip',
                title: '📞 Como preencher uma ficha de recado',
                textTitle: 'The message slip',
                readAloud: false,
                text:
                  'Uma ficha de recado completa tem cinco campos: quem ligou (caller), para ' +
                  'quem é o recado (recipient), o departamento (department), o recado em si ' +
                  '(message), e o número para retorno (callback number).\n\n' +
                  'Ouça a ligação com atenção antes de responder — cada resposta é UM campo ' +
                  'da ficha.',
                nextLabel: 'Ouvir a ligação ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u3w3:dlg:call',
                title: '📞 A ligação',
                sub: 'Anote os cinco campos antes de responder.',
                hideText: true,
                lines: [
                  { who: 'Caller', en: "Hello, this is Marcus from the Maintenance department." },
                  { who: 'Caller', en: 'Can I leave a message for Fatima?' },
                  { who: 'Caller', en: 'The pump in Section 3 needs a new part.' },
                  { who: 'Caller', en: "Please tell her to call me back at zero nine one four." }
                ],
                nextLabel: 'Preencher a ficha ▸'
              },
              { ui: 'choice', cat: 'fun', srsId: 'og1u3w3:slip:recipient',
                title: '📞 Recipient (para quem é o recado)?',
                options: DF.shuffle([
                  { label: 'Fatima', correct: true }, { label: 'Marcus' },
                  { label: 'Erik' }, { label: 'Priya' }
                ]),
                expl: '"Can I leave a message for Fatima?" — o recado é para ela.' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u3w3:slip:caller',
                title: '📞 Caller (quem ligou)?',
                options: DF.shuffle([
                  { label: 'Marcus', correct: true }, { label: 'Fatima' },
                  { label: 'Control' }, { label: 'Tomás' }
                ]),
                expl: '"This is Marcus from the Maintenance department."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u3w3:slip:dept',
                title: '📞 Department (departamento)?',
                options: DF.shuffle([
                  { label: 'Maintenance', correct: true }, { label: 'Control' },
                  { label: 'Downstream Plant' }, { label: 'Safety' }
                ]),
                expl: '"Marcus from the Maintenance department."' },
              { ui: 'type', cat: 'fun', srsId: 'og1u3w3:slip:callback',
                title: '📞 Callback number (dígito a dígito):',
                main: 'Escreva só o número.',
                answers: ['0914', '09 14', '0 9 1 4'], exact: false,
                expl: '"zero nine one four" = 0914.' },
              { ui: 'type', cat: 'fun', srsId: 'og1u3w3:slip:message',
                title: '📞 Message (o recado, resumido em suas palavras):',
                main: 'Complete: "The pump in Section 3 needs a ___."',
                answers: ['new part', 'a new part'],
                expl: '"The pump in Section 3 needs a new part."' }
            ]
          },

          {
            id: 'stress', icon: '🥁', name: 'Word stress — 2 vs 3 partes', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'og1u3w3:read:stress',
                title: '🥁 Palavras de 2 e 3 partes',
                textTitle: 'Two-part vs three-part words',
                readAloud: false,
                text:
                  'Palavras de DUAS partes normalmente têm força numa das duas sílabas: ' +
                  'REfine, disTIL, outPUT.\n\n' +
                  'Palavras de TRÊS partes têm força numa das três: REservoir, MAINtenance, ' +
                  'compUTer.\n\n' +
                  'Não existe uma regra fixa única — a estratégia é ouvir e marcar onde a ' +
                  'força cai, sílaba por sílaba.',
                nextLabel: 'Entendi ▸' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u3w3:str:refine', word: 'refine',
                pattern: 'oO', decoys: ['Oo'], syl: 're-FINE' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u3w3:str:output', word: 'output',
                pattern: 'Oo', decoys: ['oO'], syl: 'OUT-put' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u3w3:str:maintenance', word: 'maintenance',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'MAIN-te-nance' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u3w3:str:computer', word: 'computer',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'com-PU-ter' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u3w3:str:distillation', word: 'distillation',
                pattern: 'oooOo', decoys: ['Ooooo', 'ooOoo'], syl: 'dis-til-LA-tion',
                expl: 'Palavra longa — quatro partes, mas a força cai numa só.' }
            ]
          },

          {
            id: 'trends', icon: '📈', name: 'Market trends', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u3w3:read:trends',
                title: '📈 Petrochemical market trends',
                sub: 'Texto novo — não é o texto da aula. Note o present continuous.',
                textTitle: 'This Month in the Petrochemical Market',
                text:
                  'Demand for plastic is going up in Asia this year. Companies are building ' +
                  'new plants to keep up.\n\n' +
                  'At the same time, demand for diesel is going down in Europe, because more ' +
                  'people are buying electric cars.\n\n' +
                  'The North Star Downstream Plant is planning to increase its propane ' +
                  'output next quarter.\n\n' +
                  'Prices are changing fast this month — the market is watching closely.',
                nextLabel: 'Pronto para responder ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u3w3:tr:1',
                title: '📈 O que está acontecendo com a demanda de plástico na Ásia?',
                options: DF.shuffle([
                  { label: 'It is going up.', correct: true }, { label: 'It is going down.' },
                  { label: 'It is stopping.', }, { label: 'It is the same.' }
                ]),
                expl: '"Demand for plastic is going up in Asia this year."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u3w3:tr:2',
                title: '📈 O que a planta está planejando fazer?',
                options: DF.shuffle([
                  { label: 'increase its propane output', correct: true },
                  { label: 'stop making propane' }, { label: 'build a new rig' },
                  { label: 'close for the quarter' }
                ]),
                expl: '"The North Star Downstream Plant is planning to increase its propane output."' }
            ]
          },

          {
            id: 'email', icon: '✉️', name: 'Reportando um problema de TI', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u3w3:read:emailbank',
                title: '✉️ Banco de frases para o e-mail',
                textTitle: 'Writing bank — IT problem',
                readAloud: false,
                text:
                  'ABRIR\nI am writing to report a problem with...\n\n' +
                  'DESCREVER O PROBLEMA\nThe screen is not working.\nMy keyboard is crashing ' +
                  'every few minutes.\n\n' +
                  'DIZER QUANDO COMEÇOU\nThe problem started this morning.\n\n' +
                  'PEDIR AJUDA\nCan someone look at it today, please?\n\n' +
                  'FECHAR\nThank you for your help.',
                nextLabel: 'Entendi ▸' },
              { ui: 'build', cat: 'gra', srsId: 'og1u3w3:build:email', unit: 3, waSec: 'Sua vez',
                title: '✉️ Escreva/fale sua linha de abertura',
                prompt: 'Cenário: o painel de controle da sua estação está travando ' +
                        '(crashing) a cada dez minutos. Escreva ou fale a frase de abertura ' +
                        'do e-mail relatando o problema.',
                example: 'I am writing to report a problem with my control panel — it is crashing every ten minutes.',
                mustUse: ['I am writing to report'],
                expl: 'Mande o áudio ou o texto — o professor confere.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u3w3:build:message', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Deixe um recado completo',
                prompt: 'Invente um recado completo: quem liga, para quem, o recado, e o ' +
                        'número para retorno.',
                example: "This is Ana from Control. Can I leave a message for Erik? Call me back at zero five two two.",
                mustUse: ['leave a message'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Recado sem ajuda', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u3w3+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Recado rápido, sem modelo',
                prompt: 'Invente um recado inteiro de cabeça, sem olhar exemplos, com todos ' +
                        'os cinco campos.',
                example: "This is Priya from the Downstream Plant. Message for Tomás: the delivery is late. Call me back at zero seven seven one.",
                mustUse: ['message for'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de números para retorno', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              numbers: [
                { digits: 4, oh: true, label: '📞 Ouça e escreva o callback number:' },
                { digits: 4, oh: true, label: '📞 Mais um callback number:' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Numbers and News',
        goal: 'Revisar present continuous, present simple, e vocabulário de matemática, e se ' +
              'autoavaliar com um checklist.',
        comp: 'Numa revisão geral, você mistura present continuous e present simple sem errar, ' +
              'fala números de produção com vocabulário de calculadora, e diz com sinceridade ' +
              'o que já consegue fazer sozinho.',
        live: [
          'Vocabulário de calculadora e prática de cálculo',
          'Checklist de autoavaliação',
          'Key Words da unidade',
          '"Language test" misturando present continuous e present simple',
          'Communication — pair work combinando recado telefônico com ditado de cálculo'
        ],
        bridge: 'Na aula vocês fizeram o "Communication" em dupla, combinando recado ' +
                'telefônico com ditado de números. Aqui é uma revisão SOLO no espírito de ' +
                'teste — frases novas, não as da aula — mais o flashcard das Key Words, o ' +
                'checklist "eu consigo…", e uma versão solo do "Communication": você recebe ' +
                'um número de produção e precisa falar/escrever o cálculo certo.',
        nextLive: 'Unit 4. Começa na segunda-feira seguinte.',
        ican: [
          'I can use present continuous and present simple together without stopping to think.',
          'I can say basic calculations using math vocabulary.',
          'I can take a phone message and report an IT problem in writing.',
          'I can honestly say what I can and cannot do yet.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u3w4:cards:review',
                title: '🔑 Revisão — as treze palavras do mês',
                sub: 'Flashcard de revisão: as oito principais + as cinco extras.',
                cards: WORDS.concat(EXTRA_WORDS).map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'math', icon: '🔢', name: 'Calculadora — vocabulário e cálculo', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u3w4:read:math',
                title: '🔢 Falando de números de produção',
                textTitle: 'Calculator vocabulary',
                readAloud: false,
                text:
                  '+ plus · - minus · × times · ÷ divided by · = equals\n\n' +
                  '% per cent · . point · √ square root\n\n' +
                  'Exemplo: "Ten plus five equals fifteen." (10 + 5 = 15)\n' +
                  'Exemplo: "Output is up ten per cent." (a produção subiu 10%)\n' +
                  'Exemplo: "Two point five." (2.5 — o ponto vira "point")',
                nextLabel: 'Entendi ▸' },
              { ui: 'type', cat: 'voc', srsId: 'og1u3w4:math:1',
                title: '🔢 Diga em números: "Twelve plus eight equals ___."',
                answers: ['20', 'twenty'], expl: '12 + 8 = 20.' },
              { ui: 'type', cat: 'voc', srsId: 'og1u3w4:math:2',
                title: '🔢 Diga em números: "One hundred divided by four equals ___."',
                answers: ['25', 'twenty-five', 'twenty five'], expl: '100 ÷ 4 = 25.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u3w4:math:3',
                title: '🔢 Como se diz 7 × 6 = 42 em inglês?',
                options: DF.shuffle([
                  { label: 'Seven times six equals forty-two.', correct: true },
                  { label: 'Seven plus six equals forty-two.' },
                  { label: 'Seven divided by six equals forty-two.' },
                  { label: 'Seven minus six equals forty-two.' }
                ]),
                expl: '× = times.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u3w4:math:4',
                title: '🔢 Como se diz "output is up 15%"?',
                options: DF.shuffle([
                  { label: 'Output is up fifteen per cent.', correct: true },
                  { label: 'Output is up fifteen point.' },
                  { label: 'Output is up fifteen times.' },
                  { label: 'Output is up fifteen square.' }
                ]),
                expl: '% = per cent.' }
            ]
          },

          {
            id: 'mix', icon: '📝', name: 'Revisão geral', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'og1u3w4:mix:1',
                title: '📝 Present continuous ou simple?',
                main: 'Erik ___ (work) at the plant every day, but right now he ___ (talk) to Control.',
                options: DF.shuffle([
                  { label: 'works / is talking', correct: true },
                  { label: 'is working / talks' }, { label: 'work / talk' },
                  { label: 'is working / is talking' }
                ]),
                expl: 'Rotina = present simple (works). Agora = present continuous (is talking).' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u3w4:mix:2',
                title: '📝 Complete:', main: 'Demand for diesel ___ (go) down this year.',
                options: DF.shuffle([
                  { label: 'is going', correct: true }, { label: 'go' },
                  { label: 'goes' }, { label: 'going' }
                ]),
                expl: 'Tendência atual → present continuous: is going down.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u3w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['distillation', 'the process that separates crude oil into products'],
                  ['output', 'the amount a plant produces'],
                  ['control panel', 'a board with switches and screens'],
                  ['callback number', 'the number someone should call back']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u3w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'She is writing a report right now',
                expl: 'She is + verbo -ing + right now.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u3w4:mix:num',
                title: '🔢 Ouça e escreva:', tts: 'Ninety-two point five per cent.',
                showIfNoTTS: 'ninety-two point five per cent',
                answers: ['92.5%', '92.5 per cent', '92,5%'], expl: '92.5% = ninety-two point five per cent.' }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 3, idx: 0,
                statement: 'I can say what is happening right now, using the present continuous.',
                ptHint: 'Eu consigo dizer o que está acontecendo agora, no present continuous.' },
              { ui: 'selfcheck', cat: 'fun', unit: 3, idx: 1,
                statement: 'I can name products made from crude oil.',
                ptHint: 'Eu consigo nomear produtos feitos a partir do petróleo.' },
              { ui: 'selfcheck', cat: 'fun', unit: 3, idx: 2,
                statement: 'I can take a phone message with all the fields.',
                ptHint: 'Eu consigo anotar um recado telefônico com todos os campos.' },
              { ui: 'selfcheck', cat: 'fun', unit: 3, idx: 3,
                statement: 'I can say basic calculations using math vocabulary.',
                ptHint: 'Eu consigo falar cálculos básicos com vocabulário de matemática.' },
              { ui: 'selfcheck', cat: 'fun', unit: 3, idx: 4,
                statement: 'I can write a short email reporting an IT problem.',
                ptHint: 'Eu consigo escrever um e-mail curto relatando um problema de TI.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Communication — versão solo', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u3w4:comm:1', unit: 3, waSec: 'Communication',
                title: '🗣️ O cálculo de produção',
                prompt: 'Cenário: a rig produziu 80 barris ontem e hoje está produzindo 100. ' +
                        'Diga a frase comparando os dois números, com o cálculo certo.',
                example: "The rig is producing one hundred barrels today. That is twenty more than yesterday.",
                mustUse: ['that is'],
                expl: 'Esta é a versão SOLO do "Communication" da aula — lá é em dupla ' +
                      '(recado + ditado), aqui é você sozinho dizendo o número certo.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u3w4:st:1', unit: 3, waSec: 'Revisão',
                title: '🏆 O relatório completo',
                prompt: 'Diga o que a equipe está fazendo agora, um produto do petróleo, e um ' +
                        'número de produção com o cálculo — tudo numa fala só.',
                example: "Right now, Fatima is checking the panel. The plant makes propane. Output is up ten per cent this month.",
                mustUse: ['right now'],
                expl: 'Mande o áudio — o professor confere pronúncia e as formas gramaticais ' +
                      'do mês inteiro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Revisão sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u3w4+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre a North Star Downstream Plant: o que a ' +
                        'equipe está fazendo agora, um produto que a planta faz, e um número ' +
                        'de produção inventado.',
                example: "The North Star Downstream Plant makes propane and diesel. Right now, Priya is checking the panel. Output is up fifteen per cent this month.",
                expl: 'É o resumo falado de tudo que a unidade ensinou.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
