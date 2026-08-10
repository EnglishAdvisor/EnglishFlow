/* ENGLISH FLOW — week/plan-og1-05.js
   OIL & GAS 1 · UNIT 5 "Finding Oil and Gas" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Os diagramas de oil trap, o texto sobre
                      sísmica, o listening/reading do geotécnico, o pair work
                      "Discussing specifications", o "Communication" de mapa.
                      É o que só existe com outra pessoa junto.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Por isso nenhum personagem, texto ou exercício do livro aparece aqui. O
   universo do app continua a NORTH STAR RIG (ESFERA-PEDAGOGIA item 20) — a
   mesma tripulação inventada de sempre: Erik (Norwegian), Fatima (Kuwaiti),
   Priya (Indian), Tomás (Brazilian), Sofia (Mexican, a geologist da equipe,
   já estabelecida na Unit 2) e Kwame (Ghanaian, driller). Esta unidade é
   sobre geologia/exploração, então Sofia protagoniza — nenhum personagem
   novo foi necessário, o elenco já cobre o papel de geóloga.

   ═══ NÍVEL ═══
   OG1 = A1/A2 (elementar). Instruções em PT-BR, frases curtas e diretas.

   ═══ ESTRUTURA ═══
   1 unidade = 1 mês = 4 semanas = 4 aulas ao vivo. Divisão já acertada com
   o cliente (não é para ser rediscutida — só implementada):

     Semana 1 · Ciência da exploração ... geologia/física/geofísica, sísmica,
                                           reading novo sobre um survey na rig
     Semana 2 · Word order + frequency ... ordem de palavras (SVO, lugar-tempo)
                adverbs                    e advérbios de frequência — semana
                                           pesada de gramática, + sentence stress
     Semana 3 · GPS + coordinates ....... latitude/longitude/bearing/heading,
                                           listening de instruções passo a passo,
                                           "Discussing specs" solo
     Semana 4 · Review + Key Words ...... revisão geral + self-check + versão
                                           solo do "Communication" de mapa

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
    DF.WGEN.POOLS.og1ExplTerm = ['geology', 'physics', 'geophysics', 'a reservoir',
                                 'a rock layer', 'a seismic wave', 'a survey'];
    DF.WGEN.POOLS.og1GpsTerm = ['the latitude', 'the longitude', 'the coordinates',
                                'the bearing', 'the heading', 'the waypoint',
                                'the satellite signal'];
    DF.WGEN.POOLS.og1PlaceTime = ['to the platform yesterday', 'to the lab this morning',
                                  'to the site last week', 'to the office on Monday',
                                  'to the rig two hours ago'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  // As palavras são o tema do livro (exploração, sísmica, GPS); definições e
  // TODOS os exemplos abaixo são autorais, escritos no universo North Star Rig.
  const WORDS = [
    { en: 'reservoir', pt: 'reservatório (de petróleo/gás)',
      def: 'a layer of porous rock where oil or gas collects underground',
      ex: 'Sofia says the reservoir under Block 12 is very deep.' },
    { en: 'porous', pt: 'poroso',
      def: 'rock with small holes that can hold liquid or gas',
      ex: 'Oil collects in porous rock, not in solid rock.' },
    { en: 'seismic', pt: 'sísmico',
      def: 'related to vibrations or waves that travel through the ground',
      ex: 'The seismic survey shows three rock layers under the seabed.' },
    { en: 'vibration', pt: 'vibração',
      def: 'a fast, small shaking movement',
      ex: 'The truck sends a vibration into the ground.' },
    { en: 'reflection', pt: 'reflexão (de onda)',
      def: 'a wave that bounces back after it hits something',
      ex: 'Geophones record the reflection of the seismic wave.' },
    { en: 'geophone', pt: 'geofone',
      def: 'an instrument that detects vibrations in the ground',
      ex: 'The team placed forty geophones along the survey line.' },
    { en: 'survey', pt: 'levantamento / pesquisa de campo',
      def: 'a careful study of an area, usually to collect data',
      ex: 'Sofia is planning a new survey for next month.' },
    { en: 'coordinates', pt: 'coordenadas',
      def: 'numbers (latitude and longitude) that give an exact position',
      ex: 'Send me the coordinates of the new drilling site.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'hydrophone ·+', pt: 'hidrofone',
      def: 'an instrument that detects sound or vibration underwater',
      ex: 'In marine surveys, hydrophones replace geophones.' },
    { en: 'trap ·+', pt: 'armadilha geológica',
      def: 'a rock formation that stops oil or gas from moving, so it collects there',
      ex: 'Non-porous rock on top of porous rock can form a trap.' },
    { en: 'waypoint ·+', pt: 'ponto de referência (GPS)',
      def: 'a specific point on a route, marked with GPS coordinates',
      ex: 'Set a waypoint at the entrance of the site.' },
    { en: 'bearing ·+', pt: 'rumo / direção (em graus)',
      def: 'the direction you are travelling in, measured in degrees',
      ex: 'Our bearing is zero-nine-zero — due east.' },
    { en: 'remote ·+', pt: 'remoto / isolado',
      def: 'far from towns or cities, hard to reach',
      ex: 'Sofia works in remote locations — desert one month, offshore the next.' }
  ];

  DF.PLAN.og1[5] = {
    unit: 5,
    title: 'Finding Oil and Gas',
    subtitle: 'A ciência de encontrar petróleo',
    icon: '🧭',

    mindmap: {
      center: 'Finding Oil and Gas',
      sub: 'Da rocha porosa ao ponto no mapa',
      branches: [
        {
          icon: '🔬', name: 'Geology, physics, geophysics',
          leaves: WORDS.filter(function (w) { return ['reservoir', 'porous'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat([
              { en: 'geology', pt: 'estudo das rochas' },
              { en: 'physics', pt: 'estudo da matéria e energia' },
              { en: 'geophysics', pt: 'física aplicada à Terra' }
            ]),
          note: 'São TRÊS ciências diferentes que trabalham juntas: geologia estuda a ' +
                'rocha, física estuda a energia, geofísica junta as duas para "ver" o ' +
                'que tem embaixo da terra.'
        },
        {
          icon: '📡', name: 'Seismic surveying',
          leaves: WORDS.filter(function (w) { return ['seismic', 'vibration', 'reflection', 'geophone', 'survey'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) { return w.en.indexOf('hydrophone') >= 0 || w.en.indexOf('trap') >= 0; })
              .map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'O caminho: vibrator truck gera a onda → onda desce e volta (reflection) → ' +
                'geophone/hydrophone detecta → computador monta um mapa 3D das camadas.'
        },
        {
          icon: '🔀', name: 'Word order',
          leaves: [
            { en: 'Subject + Verb + Object', pt: 'ordem básica: sujeito + verbo + objeto' },
            { en: 'She checks the data every day.', pt: 'nunca separe o verbo do objeto' },
            { en: 'NOT: She checks every day the data.', pt: 'errado — advérbio quebrou verbo+objeto' },
            { en: 'We went to the site last night.', pt: 'lugar antes de tempo' }
          ],
          note: 'Duas regras fixas em inglês: <b>1)</b> nada separa o verbo do seu objeto ' +
                'direto — <b>não</b> "checks always the data". <b>2)</b> lugar vem antes de ' +
                'tempo — <b>"to the site last night"</b>, nunca o contrário.'
        },
        {
          icon: '⏱️', name: 'Frequency adverbs',
          leaves: [
            { en: 'always / usually / often / sometimes / never', pt: 'antes do verbo principal' },
            { en: "She's always on time.", pt: 'depois de am/is/are/was/were' },
            { en: 'also / still / just', pt: 'mesma posição — antes do verbo principal' },
            { en: 'both / all', pt: 'antes do verbo, ou depois de am/is/are' }
          ],
          note: 'Regra de posição: advérbio de frequência vai ANTES do verbo principal ' +
                '(<b>"I always check"</b>), mas DEPOIS de am/is/are/was/were ' +
                '(<b>"I am always here"</b>).'
        },
        {
          icon: '🛰️', name: 'GPS & coordinates',
          leaves: WORDS.filter(function (w) { return w.en === 'coordinates'; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) { return ['waypoint ·+', 'bearing ·+'].indexOf(w.en) >= 0; })
              .map(function (w) { return { en: w.en.replace(' ·+', ''), pt: w.pt }; }))
            .concat([
              { en: 'latitude / longitude', pt: 'linhas que dão a posição exata' },
              { en: 'satellite', pt: 'satélite — dá o sinal do GPS' }
            ]),
          note: 'Coordenadas se leem número a número, como um número de referência no rádio.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'exploration', icon: '🔬',
        title: 'What Is Down There?',
        goal: 'Entender e usar o vocabulário da ciência de exploração (geologia, física, ' +
              'geofísica, reservatório, sísmica) e ler um texto novo sobre um survey na rig.',
        comp: 'Você explica com suas palavras como a sísmica encontra petróleo, e lê um ' +
              'texto novo sobre um survey sem travar no vocabulário técnico.',
        live: [
          'Diagramas de oil trap — rocha porosa vs não-porosa, reservatório',
          'Kick-off: geologia, física e geofísica como ciências diferentes',
          'Fundamentos de seismic surveying',
          'Reading: como a sísmica encontra oil traps'
        ],
        bridge: 'Na aula vocês viram os diagramas de oil trap do livro e leram sobre como a ' +
                'sísmica os encontra. Aqui o vocabulário é o mesmo, mas o survey é NOVO — um ' +
                'cenário inédito na North Star Rig, com a Sofia liderando o levantamento.',
        nextLive: 'Semana 2 · Word order + frequency adverbs — ordem de palavras e advérbios ' +
                  'de frequência, com prática de sentence stress.',
        ican: [
          'I can name geology, physics and geophysics as three different fields.',
          'I can explain the basic idea of seismic surveying.',
          'I can read a new text about a seismic survey without stopping at every word.',
          'I can use the unit vocabulary to talk about exploration.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u5w1:cards:core',
                title: '📇 As oito palavras da unidade',
                sub: 'Definições e exemplos da North Star Rig — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u5w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'science', icon: '🔬', name: 'Três ciências, um objetivo', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u5w1:read:sci',
                title: '🔬 Geology, physics, geophysics',
                textTitle: 'Three fields, one goal',
                readAloud: false,
                text:
                  'GEOLOGY studies the rock itself — its type, its age, its layers.\n\n' +
                  'PHYSICS studies energy and movement — how waves travel, how pressure works.\n\n' +
                  'GEOPHYSICS combines the two: it uses physics to study the Earth\'s rock, ' +
                  'without digging.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: em português "geofísica" soa como um detalhe da ' +
                  'geologia. Em inglês são TRÊS campos distintos — um geólogo (geologist) e um ' +
                  'geofísico (geophysicist) são profissões diferentes.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u5w1:sci:1',
                title: '🔬 Qual ciência estuda o tipo e a idade da rocha?',
                options: DF.shuffle([
                  { label: 'Geology', correct: true }, { label: 'Physics' },
                  { label: 'Chemistry' }, { label: 'Geography' }
                ]),
                expl: 'Geology = geologia, o estudo da rocha.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u5w1:sci:2',
                title: '🔬 Qual ciência estuda ondas e energia?',
                options: DF.shuffle([
                  { label: 'Physics', correct: true }, { label: 'Geology' },
                  { label: 'Biology' }, { label: 'Geophysics' }
                ]),
                expl: 'Physics = física, o estudo de energia e movimento.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u5w1:sci:3',
                title: '🔬 Sofia é a geologist da North Star. O que ela estuda?',
                main: 'Sofia studies the ___ under the rig.',
                options: DF.shuffle([
                  { label: 'rock', correct: true }, { label: 'weather' },
                  { label: 'crew schedule' }, { label: 'budget' }
                ]),
                expl: 'A geologist studies rock.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u5w1:match:sci',
                title: '🔗 Ligue o termo ao significado:',
                pairs: [
                  ['reservoir', 'where oil or gas collects'],
                  ['porous', 'rock with small holes'],
                  ['seismic', 'related to ground vibrations'],
                  ['survey', 'a careful study of an area']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u5w1:type:res',
                title: '⌨️ Complete a palavra:', main: 'Oil collects in a r _ _ _ _ v _ i r.',
                answers: ['reservoir', 'Reservoir'], expl: 'reservoir = reservatório.' }
            ]
          },

          {
            id: 'seismic', icon: '📡', name: 'Como a sísmica funciona', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u5w1:read:seis',
                title: '📡 The seismic survey, step by step',
                textTitle: 'Vibration → reflection → map',
                readAloud: false,
                text:
                  'STEP 1 — A vibrator truck sends a vibration into the ground.\n\n' +
                  'STEP 2 — The vibration travels down and hits different rock layers. Part ' +
                  'of it comes back up — this is the reflection.\n\n' +
                  'STEP 3 — Geophones (on land) or hydrophones (at sea) detect the reflection.\n\n' +
                  'STEP 4 — A computer processes all the data into a 3D map of the rock ' +
                  'layers underground.',
                nextLabel: 'Entendi ▸' },
              { ui: 'order', cat: 'voc', srsId: 'og1u5w1:ord:seis',
                title: '🧩 Monte a frase:', answer: 'The truck sends a vibration into the ground',
                expl: 'Sujeito + verbo + objeto + complemento.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u5w1:seis:1',
                title: '📡 O que detecta a reflexão da onda no mar?',
                options: DF.shuffle([
                  { label: 'hydrophones', correct: true }, { label: 'geophones' },
                  { label: 'satellites' }, { label: 'gauges' }
                ]),
                expl: 'No mar, hidrofones (hydrophones) fazem o trabalho dos geofones.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u5w1:seis:2',
                title: '📡 O que transforma os dados em um mapa 3D?',
                options: DF.shuffle([
                  { label: 'a computer', correct: true }, { label: 'the truck' },
                  { label: 'the geologist alone' }, { label: 'the crew radio' }
                ]),
                expl: 'Um computador processa os dados dos geofones/hidrofones.' }
            ]
          },

          {
            id: 'reading', icon: '📖', name: 'Survey na North Star', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u5w1:dlg:1',
                title: '📡 Planejando um novo survey',
                sub: 'Situação nova — não é o texto da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Sofia', en: 'We need a seismic survey of Block 9 before we drill.' },
                  { who: 'Erik', en: 'How does it work, exactly?' },
                  { who: 'Sofia', en: 'A truck sends vibrations into the ground. Geophones ' +
                    'detect the reflection.' },
                  { who: 'Erik', en: 'And that shows us the rock layers?' },
                  { who: 'Sofia', en: 'Yes. The computer builds a 3D map from the data.' }
                ],
                question: 'Segundo Sofia, o que detecta a reflexão da vibração?',
                options: DF.shuffle([
                  { label: 'Geophones', correct: true }, { label: 'The computer' },
                  { label: 'The truck' }, { label: 'Erik' }
                ]),
                expl: '"Geophones detect the reflection." — é a resposta direta de Sofia.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u5w1:dlg:2',
                title: '📡 Resultado do survey',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Sofia', en: 'The survey found a large reservoir under Block 9.' },
                  { who: 'Kwame', en: 'Is the rock porous there?' },
                  { who: 'Sofia', en: 'Yes, very porous. That is why the oil is there.' },
                  { who: 'Kwame', en: 'Good. Let\'s plan the next step.' }
                ],
                question: 'Por que o petróleo está no Block 9, segundo Sofia?',
                options: DF.shuffle([
                  { label: 'a rocha é muito porosa', correct: true },
                  { label: 'a rocha é muito dura' },
                  { label: 'o survey usou hydrophones' },
                  { label: 'Kwame perfurou lá antes' }
                ]),
                expl: '"Yes, very porous. That is why the oil is there." — rocha porosa é onde ' +
                      'o óleo se acumula.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u5w1:build:explain', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Explique a sísmica com suas palavras',
                prompt: 'Diga, em duas ou três frases, como o survey sísmico encontra petróleo.',
                example: 'A truck sends a vibration. Geophones detect the reflection. The ' +
                         'computer makes a map.',
                mustUse: ['vibration'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia.' },
              { ui: 'build', cat: 'voc', srsId: 'og1u5w1:build:sci', unit: 5, waSec: 'Sua vez',
                title: '🗣️ As três ciências',
                prompt: 'Diga o que geology, physics e geophysics estudam, cada uma.',
                example: 'Geology studies rock. Physics studies energy. Geophysics combines ' +
                         'both.',
                mustUse: ['geology'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u5w1+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Descreva um reservatório inventado',
                prompt: 'Invente um bloco de exploração e descreva o reservatório: profundo ' +
                        'ou raso, rocha porosa ou não, grande ou pequeno.',
                example: 'The reservoir under Block 14 is deep. The rock is very porous.',
                mustUse: ['reservoir'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de exploração', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The survey found ___.', pool: 'og1ExplTerm', focus: 'vocabulário',
                  ptHint: 'O survey encontrou ___.', n: 5 }
              ],
              backchain: [
                { text: 'Sofia is studying the {og1ExplTerm} of Block 9.',
                  ptHint: 'Sofia está estudando…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'wordorder', icon: '🔀',
        title: 'Say It in the Right Order',
        goal: 'Usar a ordem correta das palavras em inglês (sujeito-verbo-objeto, lugar antes ' +
              'de tempo) e posicionar advérbios de frequência corretamente.',
        comp: 'Você monta frases sem separar o verbo do objeto, coloca lugar antes de tempo, ' +
              'e posiciona always/usually/often/sometimes/never no lugar certo — antes do ' +
              'verbo principal, depois de am/is/are/was/were.',
        live: [
          'Reading/listening: o dia de trabalho de um geotécnico e o uso de GPS',
          'Sentence stress — prática de pronúncia',
          'Word order: sujeito-verbo-objeto, o verbo nunca se separa do objeto',
          'Lugar antes de tempo ("went to a party last night")',
          'Advérbios de frequência — posição na frase'
        ],
        bridge: 'Na aula vocês viram a ordem das palavras e os advérbios de frequência com o ' +
                'texto do geotécnico. Aqui é a semana mais pesada de gramática: frases NOVAS ' +
                'da North Star Rig para fixar as duas regras de ordem e a posição dos ' +
                'advérbios, mais um drill de sentence stress com frases inéditas.',
        nextLive: 'Semana 3 · GPS + coordinates — latitude/longitude, um listening de ' +
                  'instruções, e o pair work "Discussing specifications".',
        ican: [
          'I can put subject, verb and object in the correct order.',
          'I can put place before time in a sentence.',
          'I can position frequency adverbs correctly.',
          'I can stress the right syllable in longer sentences.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'order', icon: '🔀', name: 'Word order — a regra num relance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u5w2:read:order',
                title: '🔀 Duas regras fixas',
                textTitle: 'Subject – Verb – Object, and place before time',
                readAloud: false,
                text:
                  'REGRA 1 — Verbo e objeto NUNCA se separam.\n\n' +
                  'Sofia checks the data every day. (certo)\n' +
                  'Sofia checks every day the data. (ERRADO — o advérbio quebrou o verbo e ' +
                  'o objeto)\n\n' +
                  'REGRA 2 — Lugar vem antes de tempo.\n\n' +
                  'We went to the site last night. (certo — lugar, depois tempo)\n' +
                  'We went last night to the site. (soa estranho em inglês)\n\n' +
                  'A ARMADILHA DO BRASILEIRO: em português dá para colocar o advérbio no ' +
                  'meio do verbo e do objeto ("ela checa sempre os dados"). Em inglês, ' +
                  'NUNCA — o advérbio vai antes do verbo inteiro, ou a frase muda de lugar.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u5w2:ord:1',
                title: '🔀 Qual frase está certa?',
                options: DF.shuffle([
                  { label: 'Sofia checks the readings every morning.', correct: true },
                  { label: 'Sofia checks every morning the readings.', trap: true },
                  { label: 'Every morning Sofia the readings checks.' },
                  { label: 'Sofia the readings checks every morning.' }
                ]),
                trapNote: 'Caiu na armadilha — o advérbio de tempo separou o verbo do objeto.',
                expl: 'Verbo (checks) e objeto (the readings) ficam juntos; o tempo vai no fim.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u5w2:ord:2',
                title: '🔀 Qual frase está certa?',
                options: DF.shuffle([
                  { label: 'We went to the platform last night.', correct: true },
                  { label: 'We went last night to the platform.', trap: true },
                  { label: 'Last night we the platform went.' },
                  { label: 'We to the platform went last night.' }
                ]),
                trapNote: 'Caiu na armadilha — lugar vem antes de tempo, não o contrário.',
                expl: 'Place then time: "to the platform" (lugar) antes de "last night" (tempo).' },
              { ui: 'order', cat: 'gra', srsId: 'og1u5w2:ord:3',
                title: '🧩 Monte a frase:', answer: 'The geologist studies the samples carefully',
                expl: 'Sujeito + verbo + objeto + advérbio de modo no fim.' },
              { ui: 'order', cat: 'gra', srsId: 'og1u5w2:ord:4',
                title: '🧩 Monte a frase (lugar antes de tempo):',
                answer: 'Kwame arrived at the site this morning',
                expl: '"at the site" (lugar) vem antes de "this morning" (tempo).' },
              { ui: 'type', cat: 'gra', srsId: 'og1u5w2:type:order',
                title: '⌨️ Corrija a frase:', main: 'Sofia reads every day the reports. → ___',
                answers: ['Sofia reads the reports every day.', 'sofia reads the reports every day.'],
                expl: 'O objeto (the reports) fica colado ao verbo (reads); "every day" vai ' +
                      'para o fim.' }
            ]
          },

          {
            id: 'freq', icon: '⏱️', name: 'Frequency adverbs', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u5w2:read:freq',
                title: '⏱️ Onde colocar always, usually, never…',
                textTitle: 'Before the verb — except with to be',
                readAloud: false,
                text:
                  'Com verbo comum: o advérbio vai ANTES do verbo principal.\n' +
                  'She always checks the equipment. Kwame never forgets his helmet.\n\n' +
                  'Com am/is/are/was/were: o advérbio vai DEPOIS.\n' +
                  'She is always on time. They were never late.\n\n' +
                  'ALSO, STILL, JUST seguem a mesma regra de posição.\n' +
                  'He also works offshore. Sofia is still in the field.\n\n' +
                  'BOTH e ALL vão antes do verbo comum, ou depois de am/is/are.\n' +
                  'Both geologists study the samples. They are all ready.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u5w2:freq:1',
                title: '⏱️ Onde vai "always"?', main: 'Sofia ___ checks the samples first.',
                options: DF.shuffle([
                  { label: 'always', correct: true }
                ].concat(['checks always', 'the always', 'always the'].map(function (l) { return { label: l }; }))),
                expl: 'Verbo comum → o advérbio vai ANTES: "Sofia always checks".' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u5w2:freq:2',
                title: '⏱️ Complete:', main: 'Kwame ___ late for his shift.',
                options: DF.shuffle([
                  { label: "isn't ever", correct: false }, { label: 'is never', correct: true },
                  { label: 'never is' }, { label: 'is not always' }
                ]),
                expl: 'Com to be, o advérbio fica DEPOIS: "is never".' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u5w2:freq:3',
                title: '⚠️ A armadilha — qual está certa?',
                main: 'Erik ___ works on the night shift.',
                options: DF.shuffle([
                  { label: 'sometimes', correct: true },
                  { label: 'works sometimes', trap: true },
                  { label: 'sometimes is' }, { label: 'is sometimes works' }
                ]),
                trapNote: 'Caiu na armadilha — "sometimes" não pode vir depois do verbo comum.',
                expl: 'Verbo comum → advérbio ANTES: "Erik sometimes works".' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u5w2:freq:4',
                title: '⏱️ Complete com "also" ou "still":',
                main: 'The reservoir is ___ under study — the team is not finished yet.',
                options: DF.shuffle([
                  { label: 'still', correct: true }, { label: 'also' },
                  { label: 'never' }, { label: 'both' }
                ]),
                expl: '"still" = ainda; combina com "not finished yet".' },
              { ui: 'match', cat: 'gra', srsId: 'og1u5w2:match:freq',
                title: '🔗 Ligue a frase à posição do advérbio:',
                pairs: [
                  ['She always checks the data.', 'antes do verbo comum'],
                  ['She is always on time.', 'depois de is'],
                  ['They are both ready.', 'depois de are'],
                  ['Both engineers agree.', 'antes do verbo comum']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u5w2:ord:freq1',
                title: '🧩 Monte a frase:', answer: 'The team usually works offshore',
                expl: 'Verbo comum → advérbio antes do verbo.' },
              { ui: 'order', cat: 'gra', srsId: 'og1u5w2:ord:freq2',
                title: '🧩 Monte a frase:', answer: 'Fatima is usually in the control room',
                expl: 'Com is → advérbio depois do verbo to be.' }
            ]
          },

          {
            id: 'stress', icon: '🥁', name: 'Sentence stress', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'og1u5w2:read:stress',
                title: '🥁 A força na frase, não só na palavra',
                textTitle: 'Which words get the stress?',
                readAloud: false,
                text:
                  'Em inglês, as palavras de CONTEÚDO (verbos, substantivos, adjetivos) ' +
                  'recebem mais força na frase. Palavras pequenas de gramática (is, the, a, ' +
                  'to) ficam mais fracas e rápidas.\n\n' +
                  'SOfia CHECKS the SAMples EVery MORning.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: falar cada palavra com o mesmo peso deixa a ' +
                  'frase "robótica". O ritmo natural do inglês sobe e desce nas palavras de ' +
                  'conteúdo.',
                nextLabel: 'Entendi ▸' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u5w2:str:geoph', word: 'geophysics',
                pattern: 'ooOo', decoys: ['Oooo', 'oOoo'], syl: 'gee-oh-FI-zics' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u5w2:str:vib', word: 'vibration',
                pattern: 'ooOo', decoys: ['Oooo', 'oOoo'], syl: 'vi-BRA-tion' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u5w2:str:reflect', word: 'reflection',
                pattern: 'ooOo', decoys: ['Oooo', 'oOoo'], syl: 're-FLEC-tion' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u5w2:str:reserv', word: 'reservoir',
                pattern: 'Oooo', decoys: ['oOoo', 'ooOo'], syl: 'RE-ser-voir' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u5w2:str:usually', word: 'usually',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'U-su-ally' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u5w2:drl:freq', unit: 5, waSec: 'Drill · frequency',
                title: '🔁 Drill 1 — o advérbio troca', focus: 'frequency adverbs',
                frame: 'Sofia ___ checks the reservoir data.', ptHint: 'Sofia ___ checa os dados.',
                slots: ['always', 'usually', 'often', 'sometimes', 'never'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u5w2:drl:order', unit: 5, waSec: 'Drill · word order',
                title: '🔁 Drill 2 — lugar e tempo', focus: 'place before time',
                frame: 'The crew went ___.', ptHint: 'A equipe foi ___.',
                slots: ['to the platform yesterday', 'to the lab this morning',
                        'to the site last week', 'to the office on Monday',
                        'to the rig two hours ago'] }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'og1u5w2:tf:1',
                title: '🔀 Reordene com o advérbio de frequência',
                rounds: [
                  { base: 'Sofia checks the samples. (always)',
                    answers: ['Sofia always checks the samples.'] },
                  { base: 'Kwame is late. (never)',
                    answers: ['Kwame is never late.'] },
                  { base: 'They work offshore. (usually)',
                    answers: ['They usually work offshore.'] },
                  { base: 'Erik is in the control room. (often)',
                    answers: ['Erik is often in the control room.'] },
                  { base: 'The team finishes on time. (sometimes)',
                    answers: ['The team sometimes finishes on time.'] }
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u5w2:build:freq', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Fale sobre sua rotina com um advérbio de frequência',
                prompt: 'Diga uma coisa que você sempre, geralmente ou nunca faz no trabalho ' +
                        'ou nos estudos, com o advérbio na posição certa.',
                example: 'I always check my email in the morning.',
                mustUse: ['always'] },
              { ui: 'build', cat: 'gra', srsId: 'og1u5w2:build:order', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Lugar antes de tempo',
                prompt: 'Diga onde você foi e quando, na ordem certa: lugar, depois tempo.',
                example: 'I went to the gym yesterday.',
                mustUse: ['went'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u5w2+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Três frases com três advérbios diferentes',
                prompt: 'Fale três frases seguidas sobre a equipe da rig, cada uma com um ' +
                        'advérbio de frequência diferente.',
                example: 'Kwame always wears his helmet. Fatima is often in the lab. Erik is ' +
                         'never late.',
                mustUse: ['always'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de frequência', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Sofia ___ studies the rock samples.', pool: 'og1Freq',
                  focus: 'frequency adverbs', ptHint: 'Sofia ___ estuda as amostras.', n: 5 }
              ],
              backchain: [
                { text: 'The crew went {og1PlaceTime}.', ptHint: 'A equipe foi…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'gps', icon: '🛰️',
        title: 'Locating the Site',
        goal: 'Usar vocabulário de GPS e coordenadas (latitude, longitude, bearing, heading, ' +
              'waypoint), seguir instruções faladas passo a passo, e comparar especificações ' +
              'técnicas de dois equipamentos.',
        comp: 'Você lê e diz coordenadas em voz alta, segue uma sequência de instruções ' +
              'faladas para operar um equipamento, e escolhe o equipamento certo para uma ' +
              'situação comparando as especificações técnicas.',
        live: [
          'Vocabulário de GPS e coordenadas — number-talk',
          'Listening: instruções faladas de como usar um dispositivo GPS',
          'Pair work "Discussing specifications": comparar especificações de dois ' +
          'dispositivos e recomendar um para uma situação'
        ],
        bridge: 'Na aula vocês ouviram as instruções do GPS e fizeram o "Discussing ' +
                'specifications" EM DUPLA, cada um com metade da informação. Aqui é uma ' +
                'versão SOLO da mesma habilidade: você recebe a especificação completa de um ' +
                'equipamento e decide sozinho — mais coordenadas NOVAS e um exercício de ' +
                'seguir instruções passo a passo diferente do da aula.',
        nextLive: 'Semana 4 · Revisão + Key Words — fecha o mês com o "Communication" de ' +
                  'coordenadas no mapa.',
        ican: [
          'I can say latitude, longitude, bearing and heading in English.',
          'I can follow a sequence of spoken instructions.',
          'I can compare technical specifications and recommend a device.',
          'I can read coordinates digit by digit.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'gps', icon: '🛰️', name: 'GPS & coordinates', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u5w3:read:gps',
                title: '🛰️ The words of positioning',
                textTitle: 'Latitude, longitude, bearing, heading',
                readAloud: false,
                text:
                  'LATITUDE — how far north or south you are.\n' +
                  'LONGITUDE — how far east or west you are.\n' +
                  'COORDINATES — latitude and longitude together; they give an exact position.\n' +
                  'BEARING — the direction you need to travel, in degrees (e.g. zero-nine-zero ' +
                  '= due east).\n' +
                  'HEADING — the direction you are currently facing or moving.\n' +
                  'WAYPOINT — a saved point on your route.\n\n' +
                  'Coordenadas se leem número a número, como um número de referência no rádio.',
                nextLabel: 'Entendi ▸' },
              { ui: 'cards', cat: 'voc', srsId: 'og1u5w3:cards:gps',
                title: '🛰️ Vocabulário de GPS',
                sub: 'Palavras que a aula introduziu — revisão em flashcard.',
                cards: [
                  { en: 'latitude', pt: 'latitude', def: 'how far north or south a position is', tts: 'latitude' },
                  { en: 'longitude', pt: 'longitude', def: 'how far east or west a position is', tts: 'longitude' },
                  { en: 'bearing', pt: 'rumo (direção em graus)', def: 'the direction to travel, in degrees', tts: 'bearing' },
                  { en: 'heading', pt: 'direção atual', def: 'the direction you are currently moving', tts: 'heading' },
                  { en: 'waypoint', pt: 'ponto de referência', def: 'a saved point on a route', tts: 'waypoint' },
                  { en: 'satellite', pt: 'satélite', def: 'gives the signal that GPS devices use', tts: 'satellite' }
                ] },
              { ui: 'choice', cat: 'voc', srsId: 'og1u5w3:gps:1',
                title: '🛰️ Complete:', main: 'Our ___ is zero-nine-zero — due east.',
                options: DF.shuffle([
                  { label: 'bearing', correct: true }, { label: 'latitude' },
                  { label: 'waypoint' }, { label: 'satellite' }
                ]),
                expl: 'bearing = a direção em graus para onde você precisa ir.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u5w3:gps:2',
                title: '🛰️ Complete:', main: 'Save this position as a new ___.',
                options: DF.shuffle([
                  { label: 'waypoint', correct: true }, { label: 'heading' },
                  { label: 'longitude', }, { label: 'reflection' }
                ]),
                expl: 'waypoint = ponto salvo na rota.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u5w3:match:gps',
                title: '🔗 Ligue o termo GPS ao significado:',
                pairs: [
                  ['latitude', 'how far north or south'],
                  ['longitude', 'how far east or west'],
                  ['heading', 'the direction you are moving now'],
                  ['satellite', 'gives the GPS signal']
                ] },
              { ui: 'type', cat: 'spl', srsId: 'og1u5w3:type:coord',
                title: '🔢 Ouça e escreva as coordenadas:',
                tts: 'One. Four. Point. Two. Six.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: '1 - 4 - . - 2 - 6',
                answers: ['14.26', '14,26'], expl: '"one four point two six" = 14.26.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u5w3:type:coord2',
                title: '🔢 Outra coordenada:',
                tts: 'Zero. Nine. Point. Five. One.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: '0 - 9 - . - 5 - 1',
                answers: ['09.51', '9.51', '09,51', '9,51'],
                expl: '"zero nine point five one" = 09.51.' }
            ]
          },

          {
            id: 'instructions', icon: '👂', name: 'Siga as instruções', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u5w3:dlg:steps',
                title: '👂 Como operar o rádio de campo',
                sub: 'Sem texto na tela. Anote a ordem dos passos antes de responder.',
                hideText: true,
                lines: [
                  { who: 'Sofia', en: 'First, turn on the device and wait for the satellite signal.' },
                  { who: 'Sofia', en: 'Next, enter the coordinates of the site.' },
                  { who: 'Sofia', en: 'Then, check the bearing on the screen.' },
                  { who: 'Sofia', en: 'Finally, save the position as a waypoint.' }
                ],
                question: 'Qual é o segundo passo?',
                options: DF.shuffle([
                  { label: 'enter the coordinates', correct: true },
                  { label: 'turn on the device' }, { label: 'check the bearing' },
                  { label: 'save the waypoint' }
                ]),
                expl: '"Next, enter the coordinates" — é o segundo passo, depois de ligar o ' +
                      'aparelho.'
              },
              { ui: 'order', cat: 'fun', srsId: 'og1u5w3:ord:steps',
                title: '🧩 Monte a sequência (primeiro passo):',
                answer: 'Turn on the device and wait for the signal',
                expl: 'É o primeiro passo da sequência de instruções.' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u5w3:steps:last',
                title: '👂 Qual é o ÚLTIMO passo da sequência?',
                options: DF.shuffle([
                  { label: 'save the position as a waypoint', correct: true },
                  { label: 'turn on the device' }, { label: 'enter the coordinates' },
                  { label: 'check the bearing' }
                ]),
                expl: '"Finally, save the position as a waypoint." — "finally" marca o ' +
                      'último passo.' }
            ]
          },

          {
            id: 'specs', icon: '📋', name: 'Discussing specs — versão solo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u5w3:read:specs',
                title: '📋 Duas rádios de campo',
                textTitle: 'Radio A vs Radio B — specifications',
                text:
                  'RADIO A: weight 450g · battery life 20 hours · water resistant (splash ' +
                  'only) · not shock resistant.\n\n' +
                  'RADIO B: weight 600g · battery life 35 hours · fully waterproof ' +
                  '(underwater) · shock resistant.\n\n' +
                  'CENÁRIO: Kwame precisa de um rádio que funcione debaixo d\'água e dure ' +
                  'mais de 30 horas, para um turno longo offshore.\n\n' +
                  'Compare as duas especificações antes de responder.',
                nextLabel: 'Pronto para comparar ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u5w3:specs:1',
                title: '📋 Qual rádio serve para o Kwame?',
                options: DF.shuffle([
                  { label: 'Radio B — waterproof and 35 hours of battery', correct: true },
                  { label: 'Radio A — lighter and cheaper' },
                  { label: 'Radio A — splash resistant is enough' },
                  { label: 'Nenhum dos dois serve' }
                ]),
                expl: 'Radio B é totalmente à prova d\'água (underwater) e tem 35 horas de ' +
                      'bateria — atende os dois requisitos do Kwame.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u5w3:build:specs', unit: 5, waSec: 'Discussing specs',
                title: '🗣️ Justifique sua escolha',
                prompt: 'Diga qual rádio você recomenda para o Kwame e por quê, comparando as ' +
                        'duas especificações.',
                example: 'I recommend Radio B. It is waterproof and it has 35 hours of ' +
                         'battery life. Radio A is not enough for a long offshore shift.',
                mustUse: ['recommend'],
                expl: 'Esta é a versão SOLO do "Discussing specifications" da aula — lá é em ' +
                      'dupla com informação incompleta, aqui você vê tudo e decide sozinho.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Mais uma comparação, sem ajuda', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u5w3+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Invente duas especificações e escolha',
                prompt: 'Invente as specs de dois GPS diferentes e um cenário, e diga qual ' +
                        'você escolhe e por quê.',
                example: 'GPS A has 10 hours of battery. GPS B has 25 hours. For a long survey, ' +
                         'I recommend GPS B.',
                mustUse: ['recommend'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de GPS', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Check ___ before you move.', pool: 'og1GpsTerm', focus: 'GPS',
                  ptHint: 'Confira ___ antes de se mover.', n: 5 }
              ],
              numbers: [
                { digits: 4, oh: true, label: '🔢 Ouça e escreva as coordenadas:' },
                { digits: 4, oh: true, label: '🔢 Mais uma coordenada:' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Ready to Explore',
        goal: 'Revisar word order, frequency adverbs e vocabulário de GPS/coordenadas, e se ' +
              'autoavaliar com um checklist.',
        comp: 'Numa revisão geral, você mistura ordem de palavras, advérbios de frequência e ' +
              'vocabulário de GPS sem errar, e descreve uma posição no mapa em frases ' +
              'completas.',
        live: [
          'Escrever notas curtas com avisos, usando this/these',
          'Checklist de autoavaliação',
          'Key words da unidade',
          'Language test — classes de palavras, tipo de frase, word order, pronomes',
          'Communication — pair work trocando coordenadas, waypoints e headings no mapa'
        ],
        bridge: 'Na aula vocês fizeram o "Communication" em dupla, trocando coordenadas no ' +
                'mapa. Aqui é uma revisão SOLO no espírito de teste — frases novas, não as da ' +
                'aula — mais o flashcard das Key Words, um checklist "eu consigo…", e uma ' +
                'versão SOLO do "Communication": você descreve uma posição num mapa sozinho, ' +
                'em vez de trocar perguntas com um colega.',
        nextLive: 'Unit 6 — começa na segunda-feira seguinte.',
        ican: [
          'I can use word order and frequency adverbs together without stopping to think.',
          'I can use GPS and coordinates vocabulary from this unit.',
          'I can describe a position, a heading and a waypoint in full sentences.',
          'I can honestly say what I can and cannot do yet.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u5w4:cards:review',
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
              { ui: 'choice', cat: 'gra', srsId: 'og1u5w4:mix:1',
                title: '📝 Qual frase está certa?',
                options: DF.shuffle([
                  { label: 'Fatima always checks the reports.', correct: true },
                  { label: 'Fatima checks always the reports.', trap: true },
                  { label: 'Always Fatima checks the reports.' },
                  { label: 'Fatima checks the reports always.' }
                ]),
                trapNote: 'Caiu na armadilha — o advérbio não pode separar verbo e objeto.',
                expl: 'Verbo comum → advérbio ANTES: "always checks".' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u5w4:mix:2',
                title: '📝 Qual frase está certa?',
                options: DF.shuffle([
                  { label: 'We arrived at the rig this morning.', correct: true },
                  { label: 'We arrived this morning at the rig.', trap: true },
                  { label: 'This morning at the rig we arrived.' },
                  { label: 'At the rig arrived we this morning.' }
                ]),
                trapNote: 'Caiu na armadilha — lugar vem antes de tempo.',
                expl: 'Place then time: "at the rig" antes de "this morning".' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u5w4:mix:gps',
                title: '📝 Complete:', main: 'Send me the ___ of the new site — I need the exact position.',
                options: DF.shuffle([
                  { label: 'coordinates', correct: true }, { label: 'reflection' },
                  { label: 'vibration' }, { label: 'crew' }
                ]),
                expl: 'coordinates = latitude + longitude, dá a posição exata.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u5w4:mix:coord',
                title: '🔢 Ouça e escreva as coordenadas:',
                tts: 'Two. Three. Point. Zero. Eight.', showIfNoTTS: '2 - 3 - . - 0 - 8',
                answers: ['23.08', '23,08'], expl: '"two three point zero eight" = 23.08.' },
              { ui: 'match', cat: 'fun', srsId: 'og1u5w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['reservoir', 'where oil or gas collects'],
                  ['seismic', 'related to ground vibrations'],
                  ['bearing', 'direction in degrees'],
                  ['waypoint', 'a saved point on a route']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u5w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'The team usually finds the reservoir quickly',
                expl: 'Sujeito + advérbio de frequência + verbo + objeto + advérbio de modo.' }
            ]
          },

          {
            id: 'communication', icon: '🛰️', name: 'Communication — versão solo', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u5w4:read:comm',
                title: '🛰️ Sua posição no mapa',
                textTitle: 'Describe your position',
                text:
                  'Você está na equipe de campo. O GPS mostra: latitude 14.26, longitude ' +
                  '09.51, bearing zero-nine-zero (due east), waypoint "Camp 3".\n\n' +
                  'Descreva sua posição para o Control usando essas informações, em frases ' +
                  'completas.',
                nextLabel: 'Pronto para descrever ▸' },
              { ui: 'build', cat: 'fun', srsId: 'og1u5w4:build:comm', unit: 5, waSec: 'Communication',
                title: '🗣️ Descreva sua posição',
                prompt: 'Diga a latitude, a longitude, o bearing e o waypoint em frases ' +
                        'completas, como se estivesse no rádio falando com o Control.',
                example: 'My latitude is one four point two six. My longitude is zero nine ' +
                         'point five one. My bearing is zero-nine-zero, due east. My waypoint ' +
                         'is Camp 3.',
                mustUse: ['latitude'],
                expl: 'Esta é a versão SOLO do "Communication" da aula — lá é em dupla, ' +
                      'trocando coordenadas com um colega; aqui você descreve sozinho.' }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 5, idx: 0,
                statement: 'I can explain how seismic surveying finds oil and gas.',
                ptHint: 'Eu consigo explicar como a sísmica encontra óleo e gás.' },
              { ui: 'selfcheck', cat: 'fun', unit: 5, idx: 1,
                statement: 'I can put subject, verb and object in the correct order.',
                ptHint: 'Eu consigo colocar sujeito, verbo e objeto na ordem certa.' },
              { ui: 'selfcheck', cat: 'fun', unit: 5, idx: 2,
                statement: 'I can position frequency adverbs correctly.',
                ptHint: 'Eu consigo posicionar advérbios de frequência corretamente.' },
              { ui: 'selfcheck', cat: 'fun', unit: 5, idx: 3,
                statement: 'I can say and understand latitude, longitude, bearing and heading.',
                ptHint: 'Eu consigo dizer e entender latitude, longitude, bearing e heading.' },
              { ui: 'selfcheck', cat: 'fun', unit: 5, idx: 4,
                statement: 'I can compare specifications and recommend the right device.',
                ptHint: 'Eu consigo comparar especificações e recomendar o equipamento certo.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Ensaio de fala — tudo junto', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u5w4:st:1', unit: 5, waSec: 'Revisão',
                title: '🏆 O relatório completo',
                prompt: 'Fale por um minuto: descreva um survey sísmico, o que ele encontrou, ' +
                        'com que frequência a equipe verifica os dados, e a posição do site em ' +
                        'coordenadas.',
                example: "The team always checks the seismic data. Sofia found a large " +
                         "reservoir. The site coordinates are one four point two six, zero " +
                         "nine point five one.",
                mustUse: ['always'],
                expl: 'Mande o áudio — o professor confere pronúncia e as formas gramaticais ' +
                      'do mês inteiro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Revisão sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u5w4+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre um survey de exploração (real ou ' +
                        'inventado): o que a equipe encontrou, como isso foi encontrado, e ' +
                        'onde fica, em coordenadas.',
                example: "The geophysics team found a reservoir under Block 9. They always " +
                         "check the seismic data first. The coordinates are one four point " +
                         "two six, zero nine point five one.",
                expl: 'É o resumo falado de tudo que a unidade ensinou.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
