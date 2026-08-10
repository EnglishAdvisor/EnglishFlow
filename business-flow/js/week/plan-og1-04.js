/* ENGLISH FLOW — week/plan-og1-04.js
   OIL & GAS 1 · UNIT 4 "Safety First" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Personagens, textos, sinais e diálogos do
                      livro nunca aparecem aqui.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Universo: NORTH STAR RIG + North Star Downstream Plant, a mesma tripulação
   das Units 1-3 (Erik/Norwegian, Fatima/Kuwaiti, Priya/Indian, Tomás/
   Brazilian, Sofia/Mexican geologist, Kwame/Ghanaian driller, Marcus/
   Maintenance). Esta unidade é sobre SEGURANÇA — nenhuma unidade anterior
   tinha um cargo de segurança nomeado, então o app apresenta AMARA CHUKWU,
   nigeriana, a safety officer da North Star Rig (o cargo "a safety officer"
   já existia na lista de cargos genéricos da Unit 1, mas nunca tinha um nome
   — agora ganha um).

   ═══ NÍVEL ═══ OG1 = A1/A2. Instruções em PT-BR, frases curtas e diretas.

   ═══ ESTRUTURA ═══
     Semana 1 · PPE + safety signs .......... equipamento de proteção,
                                              categorias de sinais (novos)
     Semana 2 · Weights & measures + signs solo  unidades, estimativa,
                                              "What does it mean?" solo
     Semana 3 · Word forms + CAN + MUST ...... gramática pesada da unidade
     Semana 4 · Review + Key Words ........... revisão geral + self-check   */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.og1 = DF.PLAN.og1 || {};

  // ── pools do universo North Star Rig (o gerador usa em "treino infinito") ──
  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.og1PPE = ['a hard hat', 'ear protectors', 'a face guard', 'safety boots',
      'goggles', 'gloves', 'a safety harness', 'a respirator'];
    DF.WGEN.POOLS.og1CanAbility = ['lift twenty-five tonnes', 'reach thirty metres',
      'carry two tonnes', 'lift ten tonnes', 'hold five hundred kilos', 'lift one tonne'];
    DF.WGEN.POOLS.og1MustRule = ['wear a hard hat', 'wear ear protectors', 'use the harness',
      'report a hazard', 'follow the safety sign', 'wear goggles near the tank'];
    DF.WGEN.POOLS.og1Hazard = ['a spill', 'a loose cable', 'a wet floor', 'a falling object',
      'a gas leak', 'a blocked exit'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  const WORDS = [
    { en: 'hazard', pt: 'perigo / risco',
      def: 'something that can cause harm or an accident',
      ex: 'A wet floor is a hazard — report it to Amara.' },
    { en: 'protect', pt: 'proteger',
      def: 'to keep someone or something safe from harm',
      ex: 'A hard hat protects your head.' },
    { en: 'harness', pt: 'cinto de segurança (arnês)',
      def: 'straps worn to stop a person falling from a height',
      ex: 'Wear your harness before you climb the tower.' },
    { en: 'respirator', pt: 'respirador',
      def: 'a mask that protects your lungs from bad air or gas',
      ex: 'Put on a respirator before you enter the tank.' },
    { en: 'mandatory', pt: 'obrigatório',
      def: 'required by a rule — you must do it',
      ex: 'A hard hat is mandatory on the whole rig.' },
    { en: 'prohibited', pt: 'proibido',
      def: 'not allowed by a rule',
      ex: 'Smoking is prohibited near the fuel tanks.' },
    { en: 'warning', pt: 'aviso / alerta',
      def: 'a sign or message that tells you about a possible danger',
      ex: 'The warning sign shows a falling object.' },
    { en: 'obligation', pt: 'obrigação',
      def: 'something you must do because of a rule',
      ex: 'Wearing PPE is every worker\'s obligation.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'goggles ·+', pt: 'óculos de proteção',
      def: 'glasses that protect your eyes from dust, chemicals or sparks',
      ex: 'Put on your goggles before you use the grinder.' },
    { en: 'ear protectors ·+', pt: 'protetores auriculares',
      def: 'equipment worn over the ears to protect your hearing',
      ex: 'The pump room is loud — wear ear protectors.' },
    { en: 'fire extinguisher ·+', pt: 'extintor de incêndio',
      def: 'equipment used to put out a small fire',
      ex: 'There is a fire extinguisher next to every door.' },
    { en: 'hand signal ·+', pt: 'sinal manual',
      def: 'a hand movement used to give an instruction, often near loud machines',
      ex: 'The rigger uses a hand signal to tell the crane operator to stop.' },
    { en: 'toolbox talk ·+', pt: 'reunião rápida de segurança',
      def: 'a short safety meeting before a shift starts',
      ex: 'Amara gives a toolbox talk every morning before the shift.' }
  ];

  DF.PLAN.og1[4] = {
    unit: 4,
    title: 'Safety First',
    subtitle: 'Proteger a equipe, todos os dias',
    icon: '🦺',

    mindmap: {
      center: 'Safety First',
      sub: 'Equipamento, sinais, medidas e as regras que protegem a equipe',
      branches: [
        {
          icon: '🪖', name: 'PPE & body parts',
          leaves: WORDS.filter(function (w) { return ['harness', 'respirator'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) { return w.en.indexOf('goggles') >= 0 || w.en.indexOf('ear protectors') >= 0; })
              .map(function (w) { return { en: w.en, pt: w.pt }; }))
            .concat([
              { en: 'a hard hat → head', pt: 'protege a cabeça' },
              { en: 'safety boots → feet', pt: 'protege os pés' },
              { en: 'gloves → hands', pt: 'protege as mãos' }
            ]),
          note: 'Cada item de PPE protege uma parte do corpo específica — o vocabulário anda ' +
                'sempre em par: <b>equipamento → parte do corpo</b>.'
        },
        {
          icon: '🚧', name: 'Safety signs',
          leaves: WORDS.filter(function (w) { return ['prohibited', 'warning', 'mandatory'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat([
              { en: 'triangle + yellow', pt: 'warning sign' },
              { en: 'circle + red band', pt: 'prohibition sign' },
              { en: 'circle + blue', pt: 'mandatory sign' },
              { en: 'square + green', pt: 'information sign' }
            ]),
          note: 'Cor e forma têm significado fixo: <b>amarelo/triângulo</b> = aviso, ' +
                '<b>vermelho/círculo</b> = proibido, <b>azul/círculo</b> = obrigatório, ' +
                '<b>verde/quadrado</b> = informação.'
        },
        {
          icon: '📏', name: 'Weights & measures',
          leaves: [
            { en: 'g / kg / tonne', pt: 'grama / quilo / tonelada' },
            { en: 'mm / cm / m / km', pt: 'milímetro / centímetro / metro / quilômetro' },
            { en: 'length, width, height, depth', pt: 'comprimento, largura, altura, profundidade' },
            { en: 'weight, speed', pt: 'peso, velocidade' }
          ],
          note: 'O número sempre vem ANTES da unidade: <b>five tonnes</b>, não "tonnes five".'
        },
        {
          icon: '🅲', name: 'CAN',
          leaves: [
            { en: 'The crane can lift 25 tonnes.', pt: 'capacidade' },
            { en: "It can't lift 40 tonnes.", pt: 'capacidade — negativa' },
            { en: 'Can I come in?', pt: 'pedir permissão' },
            { en: 'Can you pass me that hammer?', pt: 'pedido educado' }
          ],
          note: '<b>CAN</b> tem dois usos bem diferentes: capacidade (o que uma coisa consegue ' +
                'fazer) e permissão/pedido (o que uma pessoa pode fazer ou pede a outra).'
        },
        {
          icon: '⛔', name: 'MUST / MUSTN\'T',
          leaves: [
            { en: 'You must wear a hard hat.', pt: 'obrigação' },
            { en: "You mustn't touch these switches.", pt: 'proibição' },
            { en: 'must ≠ mustn\'t', pt: 'obrigação ≠ proibição, não confundir' }
          ],
          note: '<b>Must</b> = é obrigatório fazer. <b>Mustn\'t</b> = é proibido fazer — os dois ' +
                'são fortes, mas com sentidos opostos.'
        },
        {
          icon: '✉️', name: 'Polite IT request',
          leaves: [
            { en: 'Could you please...?', pt: 'pedido educado por e-mail' },
            { en: 'protect → protection', pt: 'verbo → substantivo' },
            { en: 'hazard → hazardous', pt: 'substantivo → adjetivo' }
          ],
          note: '"Could you please...?" é mais educado que "Can you...?" — bom para e-mails ' +
                'formais pedindo ajuda de TI.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'ppe-signs', icon: '🪖',
        title: 'Gear Up, North Star',
        goal: 'Nomear os equipamentos de proteção individual (PPE) e a parte do corpo que cada ' +
              'um protege, e reconhecer as quatro categorias de sinais de segurança.',
        comp: 'Você nomeia um PPE e diz o que ele protege, e classifica um sinal novo pela cor ' +
              'e forma (warning, prohibition, mandatory, information).',
        live: [
          'Vocabulário de PPE e partes do corpo que cada equipamento protege',
          'Leitura sobre as quatro categorias de sinais de segurança: o que cor e forma ' +
          'significam',
          'Contexto geral de segurança no trabalho'
        ],
        bridge: 'Na aula vocês viram os PPE e os oito sinais do livro. Aqui você treina PPE em ' +
                'pares NOVOS equipamento→parte do corpo, e classifica sinais INVENTADOS da ' +
                'North Star Rig (não os oito da aula) só pela cor e pela forma.',
        nextLive: 'Semana 2 · Sinais em dupla + pesos e medidas — o info-gap "What does it ' +
                  'mean?" e o listening sobre um rigger.',
        ican: [
          'I can name PPE items and the body part each one protects.',
          'I can classify a new safety sign by its colour and shape.',
          'I can explain what warning, prohibition, mandatory and information signs mean.',
          'I can use the unit vocabulary to talk about safety equipment.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u4w1:cards:core',
                title: '📇 As oito palavras da unidade',
                sub: 'Definições e exemplos da North Star Rig — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u4w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'ppe', icon: '🪖', name: 'PPE → body part', tag: 'vocabulário',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'og1u4w1:match:ppe',
                title: '🔗 Ligue o equipamento à parte do corpo:',
                pairs: [
                  ['a hard hat', 'head'], ['ear protectors', 'ears'],
                  ['goggles', 'eyes'], ['gloves', 'hands'],
                  ['safety boots', 'feet'], ['a respirator', 'lungs']
                ] },
              { ui: 'choice', cat: 'voc', srsId: 'og1u4w1:ppe:1',
                title: '🪖 Complete:', main: 'A hard hat protects your ___.',
                options: DF.shuffle([
                  { label: 'head', correct: true }, { label: 'hands' },
                  { label: 'feet' }, { label: 'ears' }
                ]),
                expl: 'hard hat = capacete → protege a cabeça.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u4w1:ppe:2',
                title: '🪖 Complete:', main: 'You need a ___ to protect your lungs in the tank.',
                options: DF.shuffle([
                  { label: 'respirator', correct: true }, { label: 'harness' },
                  { label: 'hard hat' }, { label: 'goggles' }
                ]),
                expl: 'respirator = respirador → protege os pulmões.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u4w1:ppe:3',
                title: '🪖 A pegadinha:', main: 'You need a ___ when you work at height.',
                options: DF.shuffle([
                  { label: 'safety harness', correct: true }, { label: 'ear protectors' },
                  { label: 'gloves' }, { label: 'goggles' }
                ]),
                expl: 'harness = cinto de segurança/arnês, usado contra quedas de altura.' },
              { ui: 'type', cat: 'voc', srsId: 'og1u4w1:type:ppe',
                title: '⌨️ Escreva o equipamento:',
                main: 'Glasses that protect your eyes from sparks and dust: g _ _ _ _ e s',
                answers: ['goggles', 'Goggles'], expl: 'goggles.' }
            ]
          },

          {
            id: 'signs', icon: '🚧', name: 'As quatro categorias de sinais', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u4w1:read:signs',
                title: '🚧 Cor e forma têm significado',
                textTitle: 'The four sign categories',
                readAloud: false,
                text:
                  'WARNING SIGN — triângulo amarelo com borda preta. Avisa de um perigo ' +
                  'possível.\n\n' +
                  'PROHIBITION SIGN — círculo branco com borda e faixa VERMELHA. Diz o que é ' +
                  'proibido.\n\n' +
                  'MANDATORY SIGN — círculo AZUL. Diz o que você deve fazer sempre.\n\n' +
                  'INFORMATION SIGN — quadrado ou retângulo VERDE. Dá uma informação útil, ' +
                  'sem perigo.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: em português a gente costuma ler só o texto do ' +
                  'sinal — em inglês, cor e forma já dizem a categoria antes mesmo de você ler.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w1:sign:1',
                title: '🚧 Um sinal amarelo, forma de triângulo, com um objeto caindo. Categoria?',
                options: DF.shuffle([
                  { label: 'Warning sign', correct: true }, { label: 'Prohibition sign' },
                  { label: 'Mandatory sign' }, { label: 'Information sign' }
                ]),
                expl: 'Amarelo + triângulo = warning sign (aviso de perigo).' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w1:sign:2',
                title: '🚧 Um círculo branco com uma faixa vermelha e um cigarro riscado. Categoria?',
                options: DF.shuffle([
                  { label: 'Prohibition sign', correct: true }, { label: 'Warning sign' },
                  { label: 'Mandatory sign' }, { label: 'Information sign' }
                ]),
                expl: 'Círculo + faixa vermelha = prohibition sign (proibido).' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w1:sign:3',
                title: '🚧 Um círculo azul com o desenho de um respirador. Categoria?',
                options: DF.shuffle([
                  { label: 'Mandatory sign', correct: true }, { label: 'Warning sign' },
                  { label: 'Prohibition sign' }, { label: 'Information sign' }
                ]),
                expl: 'Círculo azul = mandatory sign (você deve usar o respirador aqui).' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w1:sign:4',
                title: '🚧 Um quadrado verde com uma cruz branca (primeiros socorros). Categoria?',
                options: DF.shuffle([
                  { label: 'Information sign', correct: true }, { label: 'Warning sign' },
                  { label: 'Prohibition sign' }, { label: 'Mandatory sign' }
                ]),
                expl: 'Verde + quadrado = information sign — não indica perigo, só orienta.' },
              { ui: 'match', cat: 'gra', srsId: 'og1u4w1:match:signs',
                title: '🔗 Ligue a cor/forma à categoria:',
                pairs: [
                  ['yellow triangle', 'warning'], ['red circle band', 'prohibition'],
                  ['blue circle', 'mandatory'], ['green square', 'information']
                ] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Na North Star Rig', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u4w1:dlg:1',
                title: '🎧 A ronda de segurança de Amara',
                sub: 'Situação nova — não é o diálogo da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Amara', en: "Tomás, where is your harness? You need it up there." },
                  { who: 'Tomás', en: "Sorry, Amara. I'm putting it on now." },
                  { who: 'Amara', en: "Good. And always wear your goggles near the grinder." },
                  { who: 'Tomás', en: 'Understood. Thanks for checking.' }
                ],
                question: 'Qual é o cargo da Amara?',
                options: DF.shuffle([
                  { label: 'safety officer', correct: true }, { label: 'driller' },
                  { label: 'geologist' }, { label: 'crane operator' }
                ]),
                expl: 'Amara é quem checa PPE e faz a ronda de segurança — a safety officer.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u4w1:dlg:2',
                title: '🎧 Um sinal novo no corredor',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Erik', en: "There's a new sign by the tank — a yellow triangle with a slippery floor." },
                  { who: 'Fatima', en: "That's a warning sign, right?" },
                  { who: 'Erik', en: "Yes. It means: be careful, don't run there." }
                ],
                question: 'Que categoria de sinal é o novo sinal do corredor?',
                options: DF.shuffle([
                  { label: 'warning sign', correct: true }, { label: 'prohibition sign' },
                  { label: 'mandatory sign' }, { label: 'information sign' }
                ]),
                expl: '"A yellow triangle" — warning sign.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u4w1:build:ppe', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Descreva um PPE e o que ele protege',
                prompt: 'Escolha um equipamento de proteção e diga o que ele protege.',
                example: 'A hard hat protects your head.',
                mustUse: ['protects'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u4w1:build:sign', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Invente um sinal e classifique',
                prompt: 'Descreva um sinal inventado (cor, forma, o que ele mostra) e diga a ' +
                        'categoria.',
                example: "It's a blue circle with a hard hat. It's a mandatory sign.",
                mustUse: ['sign'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u4w1+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Explique as quatro categorias, de cabeça',
                prompt: 'Explique as quatro categorias de sinais de segurança sem olhar a ' +
                        'lição, com um exemplo de cada.',
                example: 'Warning is yellow. Prohibition is red. Mandatory is blue. ' +
                         'Information is green.',
                mustUse: ['warning'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de PPE', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'You need ___.', pool: 'og1PPE', focus: 'PPE',
                  ptHint: 'Você precisa de ___.', n: 5 }
              ],
              backchain: [
                { text: 'Always wear {og1PPE} on the rig.', ptHint: 'Sempre use ___ na rig.' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'measures-signs-solo', icon: '📏',
        title: 'Every Metre Matters',
        goal: 'Falar pesos e medidas com a unidade certa e estimar dimensões, e identificar o ' +
              'significado de sinais de segurança sozinho.',
        comp: 'Você diz e escreve pesos e medidas com a abreviação certa, estima uma dimensão a ' +
              'partir de uma descrição, e explica o significado de um sinal sem a ajuda de um ' +
              'colega.',
        live: [
          'Pair work "What does it mean?": um aluno descreve um sinal que só ele vê, o ' +
          'outro adivinha o significado',
          'Listening: o dia de trabalho e os hábitos de segurança de um rigger/crane operator',
          'Pesos e medidas: unidades e abreviações, estimar dimensões'
        ],
        bridge: 'Na aula vocês fizeram o "What does it mean?" em DUPLA — um descreve, o outro ' +
                'adivinha. Aqui é a versão SOLO da mesma habilidade: você recebe a descrição do ' +
                'sinal e identifica o significado sozinho — mais pesos e medidas NOVOS e um ' +
                'listening diferente do da aula.',
        nextLive: 'Semana 3 · Word forms + CAN + MUST — a gramática pesada do mês, vocabulário ' +
                  'de família de palavras e o e-mail educado de TI.',
        ican: [
          'I can say and write weights and measures with the correct unit.',
          'I can estimate a dimension from a description.',
          'I can identify the meaning of a safety sign on my own.',
          'I can understand a listening about a rigger\'s safety habits.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'measures', icon: '📏', name: 'Pesos e medidas', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u4w2:read:measures',
                title: '📏 As unidades e as abreviações',
                textTitle: 'Weights and measures',
                readAloud: false,
                text:
                  'PESO\ngrams (g) · kilos/kilograms (kg) · tonnes (t)\n\n' +
                  'DISTÂNCIA/DIMENSÃO\nmillimetres (mm) · centimetres (cm) · metres (m) · ' +
                  'kilometres (km)\n\n' +
                  'DESCREVENDO UM OBJETO\nlength (comprimento) · width (largura) · height ' +
                  '(altura) · depth (profundidade) · weight (peso) · speed (velocidade)\n\n' +
                  'Exemplo: "The crate is two metres long, one metre wide, and it weighs ' +
                  'three hundred kilos."',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u4w2:unit:1',
                title: '📏 Qual unidade combina?', main: 'The crane can lift up to twenty-five ___.',
                options: DF.shuffle([
                  { label: 'tonnes', correct: true }, { label: 'grams' },
                  { label: 'millimetres', }, { label: 'litres' }
                ]),
                expl: 'Carga pesada de guindaste se mede em tonnes.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u4w2:unit:2',
                title: '📏 Qual unidade combina?', main: 'The bolt is only eight ___ long.',
                options: DF.shuffle([
                  { label: 'millimetres', correct: true }, { label: 'kilometres' },
                  { label: 'tonnes' }, { label: 'kilos' }
                ]),
                expl: 'Objeto pequeno, medida curta → millimetres.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u4w2:num:1',
                title: '📏 Ouça e escreva com a unidade:',
                tts: 'The tank is four metres deep.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: 'the tank is four metres deep',
                answers: ['4 metres', '4m', 'four metres'], expl: 'four metres = 4 metres.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u4w2:match:dim',
                title: '🔗 Ligue a palavra à dimensão:',
                pairs: [
                  ['length', 'how long something is'],
                  ['width', 'how wide something is'],
                  ['height', 'how tall something is'],
                  ['depth', 'how deep something is']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w2:est:1',
                title: '📏 Estime: "The pipe is about as long as two cars." Qual é a estimativa mais razoável?',
                options: DF.shuffle([
                  { label: 'about 9 metres', correct: true }, { label: 'about 90 metres' },
                  { label: 'about 9 millimetres' }, { label: 'about 900 kilometres' }
                ]),
                expl: 'Dois carros lado a lado dão perto de 9 metros — a unidade certa é metres, ' +
                      'não millimetres nem kilometres.' }
            ]
          },

          {
            id: 'signs-solo', icon: '🔍', name: 'What does it mean? — versão solo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u4w2:read:solo',
                title: '🔍 Descrição de um sinal',
                textTitle: 'A new sign near Section 5',
                text:
                  'Description: a yellow triangle with a picture of a hand near moving gears.\n\n' +
                  'Pense na cor e na forma antes de escolher o significado.',
                nextLabel: 'Pronto para responder ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u4w2:solo:1',
                title: '🔍 O que este sinal significa?',
                options: DF.shuffle([
                  { label: 'Warning: keep your hands away from moving parts', correct: true },
                  { label: 'You must wear gloves here' },
                  { label: 'Hand washing is not allowed here' },
                  { label: 'This is the exit for this section' }
                ]),
                expl: 'Amarelo + triângulo = warning — aviso de perigo, não obrigação nem proibição.' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u4w2:solo:2',
                title: '🔍 Novo sinal: círculo azul com o desenho de botas. Significado?',
                options: DF.shuffle([
                  { label: 'You must wear safety boots here', correct: true },
                  { label: 'Boots are prohibited here' },
                  { label: 'Warning: falling boots' },
                  { label: 'This area has extra boots for visitors' }
                ]),
                expl: 'Círculo azul = mandatory — é obrigação, não aviso nem informação.' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u4w2:solo:3',
                title: '🔍 Novo sinal: círculo branco, faixa vermelha, um telefone riscado. Significado?',
                options: DF.shuffle([
                  { label: 'Mobile phones are prohibited here', correct: true },
                  { label: 'You must use your phone here' },
                  { label: 'Warning: phone signal is weak' },
                  { label: 'This is the phone information desk' }
                ]),
                expl: 'Círculo + faixa vermelha = prohibition — é proibido usar o celular ali.' },
              { ui: 'match', cat: 'fun', srsId: 'og1u4w2:match:solo',
                title: '🔗 Ligue a descrição do sinal ao significado:',
                pairs: [
                  ['green square, first aid cross', 'first aid station'],
                  ['blue circle, ear protectors', 'you must wear ear protection'],
                  ['red circle band, cigarette', 'smoking is prohibited'],
                  ['yellow triangle, exclamation mark', 'general warning — be careful']
                ] }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'O dia de um rigger', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u4w2:dlg:rigger',
                title: '👂 Entrevista com Kwame sobre segurança',
                sub: 'Situação nova — não é o listening da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Interviewer', en: "What safety habits do you have as a driller?" },
                  { who: 'Kwame', en: "I always check my harness before I climb. I never skip that." },
                  { who: 'Interviewer', en: 'And what about the crane hand signals?' },
                  { who: 'Kwame', en: "I watch the crane operator's hand signals — a closed fist means stop." }
                ],
                question: 'O que Kwame nunca pula (skip)?',
                options: DF.shuffle([
                  { label: 'checking his harness', correct: true }, { label: 'wearing gloves' },
                  { label: 'watching the weather' }, { label: 'writing the log' }
                ]),
                expl: '"I always check my harness before I climb. I never skip that."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u4w2:dlg:crane',
                title: '👂 Sinais de mão do guindaste',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Amara', en: "Kwame, what does an open hand, moving up and down, mean?" },
                  { who: 'Kwame', en: "That means 'lower the load slowly'." },
                  { who: 'Amara', en: "Good. And a closed fist?" },
                  { who: 'Kwame', en: "Stop. Everyone stops immediately." }
                ],
                question: 'O que significa um punho fechado (closed fist)?',
                options: DF.shuffle([
                  { label: 'stop', correct: true }, { label: 'lower the load slowly' },
                  { label: 'lift the load' }, { label: 'move left' }
                ]),
                expl: '"Stop. Everyone stops immediately."'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u4w2:build:dim', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Estime uma dimensão',
                prompt: 'Descreva um objeto real perto de você e estime seu comprimento ou ' +
                        'altura, com a unidade certa.',
                example: 'My table is about one metre long.',
                mustUse: ['about'] },
              { ui: 'build', cat: 'fun', srsId: 'og1u4w2:build:signexpl', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Explique um sinal sozinho',
                prompt: 'Descreva um sinal (cor, forma, imagem) e explique o que ele significa, ' +
                        'sem ninguém te perguntar.',
                example: "It's a red circle with a band and a cigarette. It means smoking is prohibited.",
                mustUse: ['means'],
                expl: 'Esta é a versão SOLO do "What does it mean?" da aula — lá é em dupla, ' +
                      'aqui você descreve e explica sozinho.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Medidas rápidas', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u4w2+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Descreva um objeto com três medidas',
                prompt: 'Invente um objeto e diga comprimento, largura e peso, tudo numa fala só.',
                example: "The crate is two metres long, one metre wide, and it weighs three hundred kilos.",
                expl: 'É o ritmo real de um relatório de carga na plataforma.' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de medidas', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The crane can ___.', pool: 'og1CanAbility', focus: 'capacidade',
                  ptHint: 'O guindaste consegue ___.', n: 5 }
              ],
              numbers: [
                { digits: 3, oh: false, label: '📏 Ouça e escreva o peso em kilos:' },
                { digits: 3, oh: false, label: '📏 Mais uma medida:' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'can-must', icon: '⛔',
        title: 'You Must, You Can',
        goal: 'Usar CAN para capacidade e pedidos/permissão, e MUST/MUSTN\'T para obrigação e ' +
              'proibição, e ampliar vocabulário de família de palavras (substantivo/verbo/' +
              'adjetivo).',
        comp: 'Você diz o que algo consegue ou não consegue fazer com can/can\'t, pede ' +
              'permissão ou algo educadamente com can, diz o que é obrigatório ou proibido com ' +
              'must/mustn\'t, e escreve um e-mail educado pedindo ajuda de TI com "Could you ' +
              'please...?".',
        live: [
          'Vocabulário de família de palavras: substantivo/verbo/adjetivo (hazard/' +
          'hazardous, protect/protection)',
          'Listening: toolbox safety talk — riscos e sinais de mão de guindaste',
          'Banco de frases para e-mail: pedido educado de TI ("Could you please...?")',
          'Modal CAN — capacidade e pedidos/permissão',
          'Modal MUST/MUSTN\'T — obrigação e proibição'
        ],
        bridge: 'Na aula vocês viram o toolbox talk do livro e a gramática completa. Aqui é a ' +
                'semana mais gramatical do mês: CAN e MUST/MUSTN\'T em profundidade, com ' +
                'cenários NOVOS da North Star Rig, vocabulário de família de palavras novo, e ' +
                'um e-mail educado de TI com um cenário diferente do da aula.',
        nextLive: 'Semana 4 · Revisão + Key Words — a "language test" misturando can/must e o ' +
                  '"Communication" comparando dimensões de veículos com placas de limite.',
        ican: [
          "I can use can/can't to talk about ability and capacity.",
          'I can use Can I...? and Can you...? for permission and polite requests.',
          "I can use must and mustn't for obligation and prohibition.",
          'I can write a polite email asking for IT help with Could you please...?'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'wordforms', icon: '🔤', name: 'Word forms', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u4w3:read:wf',
                title: '🔤 Substantivo, verbo, adjetivo',
                textTitle: 'Same family, different jobs',
                readAloud: false,
                text:
                  'hazard (substantivo, perigo) → hazardous (adjetivo, perigoso)\n\n' +
                  'protect (verbo, proteger) → protection (substantivo, proteção)\n\n' +
                  'danger (substantivo, perigo) → dangerous (adjetivo, perigoso)\n\n' +
                  'obligate (verbo, obrigar) → obligation (substantivo, obrigação) → ' +
                  'obligatory (adjetivo, obrigatório)\n\n' +
                  'Muitos adjetivos de segurança terminam em <b>-ous</b>: hazardous, dangerous.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u4w3:wf:1',
                title: '🔤 Complete:', main: 'A loose cable is ___ — it can cause an accident.',
                options: DF.shuffle([
                  { label: 'hazardous', correct: true }, { label: 'hazard' },
                  { label: 'protection' }, { label: 'protect' }
                ]),
                expl: 'Aqui precisa do adjetivo → hazardous.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u4w3:wf:2',
                title: '🔤 Complete:', main: 'This helmet gives good ___ against falling objects.',
                options: DF.shuffle([
                  { label: 'protection', correct: true }, { label: 'protect' },
                  { label: 'protective', }, { label: 'protects' }
                ]),
                expl: 'Depois de "good" precisa do substantivo → protection.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u4w3:match:wf',
                title: '🔗 Ligue a palavra à família certa:',
                pairs: [
                  ['hazard', 'noun'], ['hazardous', 'adjective'],
                  ['protect', 'verb'], ['protection', 'noun'],
                  ['dangerous', 'adjective']
                ] }
            ]
          },

          {
            id: 'toolbox', icon: '🧰', name: 'Toolbox safety talk', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u4w3:dlg:toolbox',
                title: '🧰 O toolbox talk de Amara',
                sub: 'Situação nova — não é o listening da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Amara', en: "Good morning, everyone. Today's hazards are a wet deck and a loose cable near Section 2." },
                  { who: 'Amara', en: "You must wear your boots and check the cable before you walk there." },
                  { who: 'Erik', en: "Understood. Can I report it to Control after the meeting?" },
                  { who: 'Amara', en: "Yes, you can. Thanks, Erik." }
                ],
                question: 'Quais são os dois riscos que Amara menciona?',
                options: DF.shuffle([
                  { label: 'a wet deck and a loose cable', correct: true },
                  { label: 'a gas leak and a fire' },
                  { label: 'a blocked exit and a spill' },
                  { label: 'a falling object and a crash' }
                ]),
                expl: '"Today\'s hazards are a wet deck and a loose cable near Section 2."'
              }
            ]
          },

          {
            id: 'can', icon: '🅲', name: 'CAN — a regra num relance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u4w3:read:can',
                title: '🅲 CAN — capacidade e pedidos',
                textTitle: 'Two very different jobs',
                readAloud: false,
                text:
                  'CAPACIDADE — o que uma coisa consegue fazer.\nThe crane can lift 25 tonnes.\n' +
                  "It can't lift 40 tonnes.\n\n" +
                  'PERMISSÃO — pedir para fazer algo.\nCan I come in?\nYes, you can. / No, you can\'t.\n\n' +
                  'PEDIDO EDUCADO — pedir para outra pessoa fazer algo.\nCan you pass me that hammer?\n\n' +
                  'A ARMADILHA DO BRASILEIRO: "can" não muda de forma — nunca "he cans", ' +
                  'sempre "he can".',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w3:can:1',
                title: '🅲 Capacidade — complete:', main: 'The crane ___ lift twenty-five tonnes.',
                options: DF.shuffle([
                  { label: 'can', correct: true }, { label: 'cans' },
                  { label: 'is can' }, { label: 'must' }
                ]),
                expl: 'can não muda de forma na 3ª pessoa — sem -s.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w3:can:2',
                title: '🅲 Negativa de capacidade:', main: 'This small crane ___ lift forty tonnes.',
                options: DF.shuffle([
                  { label: "can't", correct: true }, { label: "don't can" },
                  { label: "not can" }, { label: "mustn't" }
                ]),
                expl: 'can\'t = capacidade negativa. mustn\'t seria proibição, não capacidade.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w3:can:3',
                title: '🅲 Pedido educado — qual é o certo?', main: 'Você quer pedir a ferramenta a um colega.',
                options: DF.shuffle([
                  { label: 'Can you pass me that hammer?', correct: true },
                  { label: 'You can pass me that hammer?' },
                  { label: 'Can pass you me that hammer?' },
                  { label: 'Must you pass me that hammer?' }
                ]),
                expl: '"Can you...?" é o pedido educado padrão.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w3:can:4',
                title: '🅲 Permissão — a resposta curta certa:', main: 'Can I use the crane today?',
                options: DF.shuffle([
                  { label: 'Yes, you can.', correct: true }, { label: 'Yes, you do.' },
                  { label: 'Yes, you must.' }, { label: 'Yes, you are.' }
                ]),
                expl: 'A resposta curta de "Can...?" usa can/can\'t, não do/be.' }
            ]
          },

          {
            id: 'must', icon: '⛔', name: 'MUST / MUSTN\'T — a regra num relance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u4w3:read:must',
                title: '⛔ MUST / MUSTN\'T — obrigação e proibição',
                textTitle: 'Opposite meanings',
                readAloud: false,
                text:
                  'MUST — obrigação. É preciso fazer.\nYou must wear a hard hat.\n\n' +
                  'MUSTN\'T — proibição. Não pode fazer.\nYou mustn\'t touch these switches.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: "must" e "mustn\'t" são quase iguais na escrita, ' +
                  'mas têm sentido OPOSTO — não confunda um pelo outro ao ler rápido.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w3:must:1',
                title: '⛔ Obrigação — complete:', main: 'You ___ wear a hard hat on the deck.',
                options: DF.shuffle([
                  { label: 'must', correct: true }, { label: "mustn't" },
                  { label: 'can' }, { label: "can't" }
                ]),
                expl: 'É obrigatório usar o capacete → must.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w3:must:2',
                title: '⛔ Proibição — complete:', main: 'You ___ touch these switches — they are dangerous.',
                options: DF.shuffle([
                  { label: "mustn't", correct: true }, { label: 'must' },
                  { label: "don't must" }, { label: 'not must' }
                ]),
                expl: 'É proibido mexer nos interruptores → mustn\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w3:must:3',
                title: '⛔ A pegadinha:', main: 'A prohibition sign with a red band means you ___ do it.',
                options: DF.shuffle([
                  { label: "mustn't", correct: true }, { label: 'must' },
                  { label: 'can' }, { label: 'usually' }
                ]),
                trapNote: 'Sinal de proibição = mustn\'t, não must.',
                expl: 'Faixa vermelha = proibição → mustn\'t.' },
              { ui: 'match', cat: 'gra', srsId: 'og1u4w3:match:notice',
                title: '🔗 Ligue o sinal ao aviso em inglês:',
                pairs: [
                  ['mandatory sign, hard hat', 'You must wear a hard hat.'],
                  ['prohibition sign, phone', 'You mustn\'t use your phone here.'],
                  ['warning sign, wet floor', 'Be careful, the floor is wet.']
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u4w3:drl:can', unit: 4, waSec: 'Drill · can',
                title: '🔁 Drill 1 — a capacidade troca', focus: 'can · capacidade',
                frame: 'The crane can ___.', ptHint: 'O guindaste consegue ___.',
                slots: ['lift twenty-five tonnes', 'reach thirty metres', 'carry two tonnes',
                        'lift ten tonnes', 'hold five hundred kilos'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u4w3:drl:must', unit: 4, waSec: 'Drill · must',
                title: '🔁 Drill 2 — a regra troca', focus: 'must · obrigação',
                frame: 'You must ___.', ptHint: 'Você deve ___.',
                slots: ['wear a hard hat', 'wear ear protectors', 'use the harness',
                        'report a hazard', 'follow the safety sign'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u4w3:drl:mustnt', unit: 4, waSec: 'Drill · mustn\'t',
                title: '🔁 Drill 3 — a proibição troca', focus: 'mustn\'t · proibição',
                frame: "You mustn't ___.", ptHint: 'Você não pode ___.',
                slots: ['touch these switches', 'smoke near the tanks', 'run on the deck',
                        'use your phone here', 'remove your harness'] }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'og1u4w3:tf:1',
                title: '🔀 Transformação com can/must',
                rounds: [
                  { base: 'The crane can lift 25 tonnes.', cmd: 'Negative',
                    answers: ["The crane can't lift 25 tonnes.", 'The crane cannot lift 25 tonnes.'] },
                  { base: 'The crane can lift 25 tonnes.', cmd: 'Question',
                    answers: ['Can the crane lift 25 tonnes?'] },
                  { base: 'You must wear a hard hat.', cmd: 'Prohibition',
                    answers: ["You mustn't wear a hard hat."] },
                  { base: 'Can you pass me the hammer?', cmd: 'Short answer',
                    answers: ['Yes, I can.', 'No, I can\'t.', 'No, I cannot.'] },
                  { base: 'You mustn\'t touch the switches.', cmd: 'Question',
                    answers: ['Must I touch the switches?'] }
                ] }
            ]
          },

          {
            id: 'email', icon: '✉️', name: 'Pedido educado de TI', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u4w3:read:email',
                title: '✉️ Could you please...?',
                textTitle: 'A polite IT request',
                readAloud: false,
                text:
                  'ABRIR\nHi Priya,\n\n' +
                  'PEDIR EDUCADAMENTE\nCould you please check my keyboard? Three keys aren\'t ' +
                  'working.\nCould you please reset my password?\n\n' +
                  '"Could you please...?" soa mais educado que "Can you...?" — bom para pedidos ' +
                  'de TI por e-mail.\n\n' +
                  'FECHAR\nThank you, / Erik',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w3:email:1',
                title: '✉️ Qual é o pedido mais educado por e-mail?',
                main: 'Você quer pedir para reiniciarem o seu computador.',
                options: DF.shuffle([
                  { label: 'Could you please restart my computer?', correct: true },
                  { label: 'Restart my computer.' },
                  { label: 'You must restart my computer.' },
                  { label: 'Can restart you my computer?' }
                ]),
                expl: '"Could you please...?" é o padrão educado para pedidos de TI.' },
              { ui: 'build', cat: 'gra', srsId: 'og1u4w3:build:email', unit: 4, waSec: 'Sua vez',
                title: '✉️ Escreva/fale seu pedido de TI',
                prompt: 'Cenário: o painel de controle da sua estação não liga esta manhã. ' +
                        'Escreva ou fale um pedido educado usando "Could you please...?".',
                example: 'Hi Priya, could you please check my control panel? It isn\'t turning on this morning.',
                mustUse: ['could you please'],
                expl: 'Cenário totalmente novo — não é o e-mail da aula.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u4w3:build:canmust', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Uma frase com can, uma com must',
                prompt: 'Diga uma frase sobre a capacidade de algo (com can) e uma sobre uma ' +
                        'regra de segurança (com must).',
                example: 'The pump can move a thousand litres an hour. You must wear gloves near it.',
                mustUse: ['can'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u4w3+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Regras de segurança, de cabeça',
                prompt: 'Diga três regras de segurança da North Star Rig: uma com must, uma ' +
                        'com mustn\'t, e uma com can\'t (capacidade).',
                example: "You must wear a hard hat. You mustn't smoke near the tanks. This small crane can't lift heavy loads.",
                mustUse: ['must'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de can/must', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The crane can ___.', pool: 'og1CanAbility', focus: 'can',
                  ptHint: 'O guindaste consegue ___.', n: 4 },
                { frame: 'You must ___.', pool: 'og1MustRule', focus: 'must',
                  ptHint: 'Você deve ___.', n: 4 }
              ],
              backchain: [
                { text: 'You must {og1MustRule} because there is {og1Hazard}.',
                  ptHint: 'Você deve ___ porque há ___.' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Ready and Safe',
        goal: 'Revisar can/could/must, pesos e medidas, e vocabulário de PPE, e se autoavaliar ' +
              'com um checklist.',
        comp: 'Numa revisão geral, você mistura can/could/must, medidas e vocabulário de ' +
              'segurança sem errar, decide se um veículo ou carga pode passar num limite usando ' +
              'can/can\'t, e diz com sinceridade o que já consegue fazer sozinho.',
        live: [
          'Prática de escrita e spelling da unidade',
          'Checklist de autoavaliação e Key Words',
          '"Language test" misturando can/must e explicação de avisos de segurança',
          'Communication — pair work comparando as dimensões de dois veículos com os ' +
          'limites de peso/altura/largura de placas de trânsito, usando can/can\'t'
        ],
        bridge: 'Na aula vocês fizeram o "Communication" em dupla, comparando dois veículos com ' +
                'as placas de limite. Aqui é uma revisão SOLO no espírito de teste — frases ' +
                'novas, não as da aula — mais o flashcard das Key Words, o checklist "eu ' +
                'consigo…", e uma versão SOLO do "Communication": você recebe as medidas de UM ' +
                'veículo/carga e um conjunto de placas com limites, e decide sozinho se ele pode ' +
                'passar, usando can/can\'t.',
        nextLive: 'Unit 5 — começa na segunda-feira seguinte.',
        ican: [
          'I can use can/could and must/mustn\'t together without stopping to think.',
          'I can say weights and measures with the correct unit.',
          'I can name PPE items and explain what a safety sign means.',
          'I can honestly say what I can and cannot do yet.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u4w4:cards:review',
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
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w4:mix:1',
                title: '📝 Complete:', main: 'This crane ___ lift 10 tonnes, but it ___ lift 40 tonnes.',
                options: DF.shuffle([
                  { label: "can / can't", correct: true }, { label: "must / mustn't" },
                  { label: "can / mustn't" }, { label: "must / can't" }
                ]),
                expl: 'Capacidade positiva e negativa: can / can\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u4w4:mix:2',
                title: '📝 Complete:', main: 'You ___ wear a hard hat, and you ___ touch these switches.',
                options: DF.shuffle([
                  { label: "must / mustn't", correct: true }, { label: "can / can't" },
                  { label: "mustn't / must" }, { label: "must / must" }
                ]),
                expl: 'Obrigação (must) e proibição (mustn\'t).' },
              { ui: 'type', cat: 'spl', srsId: 'og1u4w4:mix:num',
                title: '📏 Ouça e escreva a medida:',
                tts: 'The pipe is six metres long.', showIfNoTTS: 'the pipe is six metres long',
                answers: ['6 metres', '6m', 'six metres'], expl: 'six metres = 6 metres.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u4w4:mix:ppe',
                title: '📝 Complete:', main: 'Wear ___ before you use the grinder — sparks can hurt your eyes.',
                options: DF.shuffle([
                  { label: 'goggles', correct: true }, { label: 'a harness' },
                  { label: 'a respirator' }, { label: 'a hard hat' }
                ]),
                expl: 'goggles = óculos de proteção, contra faíscas nos olhos.' },
              { ui: 'match', cat: 'fun', srsId: 'og1u4w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['hazard', 'something that can cause harm'],
                  ['mandatory', 'required by a rule'],
                  ['prohibited', 'not allowed by a rule'],
                  ['obligation', 'something you must do']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u4w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'You must wear a hard hat here',
                expl: 'You must + verbo + objeto + lugar.' }
            ]
          },

          {
            id: 'vehicles', icon: '🚚', name: 'Communication — versão solo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u4w4:read:vehicles',
                title: '🚚 One truck, three signs',
                textTitle: 'Can this truck pass?',
                text:
                  'The North Star supply truck is 3.5 metres high and weighs 12 tonnes when ' +
                  'full.\n\n' +
                  'Sign A (mandatory-shape, blue): maximum height 4 metres.\n' +
                  'Sign B (prohibition-shape, red band): maximum weight 10 tonnes.\n' +
                  'Sign C (prohibition-shape, red band): maximum width 3 metres.\n\n' +
                  'Compare a altura e o peso do caminhão com cada placa antes de responder.',
                nextLabel: 'Pronto para decidir ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u4w4:vehicles:q1',
                title: '🚚 Can the truck pass under Sign A (max height 4 metres)?',
                options: DF.shuffle([
                  { label: 'Yes, it can — 3.5 metres is under the 4-metre limit.', correct: true },
                  { label: "No, it can't — it is too tall." },
                  { label: 'The text doesn\'t say.' },
                  { label: 'Yes, but only at night.' }
                ]),
                expl: '3.5 metres < 4 metres, então cabe embaixo da placa.' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u4w4:vehicles:q2',
                title: '🚚 Can the truck pass Sign B (max weight 10 tonnes)?',
                options: DF.shuffle([
                  { label: "No, it can't — 12 tonnes is over the 10-tonne limit.", correct: true },
                  { label: 'Yes, it can — 12 tonnes is under the limit.' },
                  { label: 'The text doesn\'t say.' },
                  { label: 'Yes, but only if it is empty.' }
                ]),
                expl: '12 tonnes é maior que o limite de 10 tonnes — não pode passar cheio.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u4w4:build:vehicles', unit: 4, waSec: 'Communication',
                title: '🗣️ Diga se o caminhão pode passar',
                prompt: 'Fale uma frase com can ou can\'t sobre o caminhão e uma das placas.',
                example: "The truck can't pass Sign B — it's too heavy.",
                mustUse: ['can'],
                expl: 'Esta é a versão SOLO do "Communication" da aula — lá é em dupla ' +
                      'comparando dois veículos, aqui você decide sozinho com um veículo e ' +
                      'três placas.' }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 4, idx: 0,
                statement: 'I can name PPE items and what they protect.',
                ptHint: 'Eu consigo nomear os equipamentos de proteção e o que eles protegem.' },
              { ui: 'selfcheck', cat: 'fun', unit: 4, idx: 1,
                statement: 'I can classify a safety sign by its colour and shape.',
                ptHint: 'Eu consigo classificar um sinal de segurança pela cor e pela forma.' },
              { ui: 'selfcheck', cat: 'fun', unit: 4, idx: 2,
                statement: 'I can use can/can\'t for ability and for polite requests.',
                ptHint: 'Eu consigo usar can/can\'t para capacidade e para pedidos educados.' },
              { ui: 'selfcheck', cat: 'fun', unit: 4, idx: 3,
                statement: 'I can use must and mustn\'t for obligation and prohibition.',
                ptHint: 'Eu consigo usar must e mustn\'t para obrigação e proibição.' },
              { ui: 'selfcheck', cat: 'fun', unit: 4, idx: 4,
                statement: 'I can say weights and measures with the correct unit.',
                ptHint: 'Eu consigo dizer pesos e medidas com a unidade certa.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Ensaio de fala — tudo junto', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u4w4:st:1', unit: 4, waSec: 'Revisão',
                title: '🏆 O resumo completo de segurança',
                prompt: 'Fale sobre um PPE, uma regra com must/mustn\'t, e a capacidade de um ' +
                        'equipamento com can — tudo numa fala só.',
                example: "You must wear a hard hat. You mustn't touch the switches. The crane can lift twenty-five tonnes.",
                mustUse: ['must'],
                expl: 'Mande o áudio — o professor confere pronúncia e as formas gramaticais ' +
                      'do mês inteiro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Revisão sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u4w4+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre segurança na North Star Rig: um PPE, um ' +
                        'sinal, uma regra com must/mustn\'t, e uma capacidade com can.',
                example: "Everyone must wear a hard hat. There's a mandatory sign near the tank. You mustn't smoke there. The crane can lift twenty-five tonnes.",
                expl: 'É o resumo falado de tudo que a unidade ensinou.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
