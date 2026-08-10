/* ENGLISH FLOW — week/plan-og1-07.js
   OIL & GAS 1 · UNIT 7 "Pipes and Pipelines" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Os personagens, as empresas e os textos do
                      livro, o pair work "Describing a pipeline" no mapa, o
                      listening "day in the life" do soldador, o listening de
                      hazards, a dictation de cálculo em dupla, o "Communication"
                      final. É o que só existe com outra pessoa junto.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Por isso nenhum personagem, texto ou exercício do livro aparece aqui. O
   universo do app é a NORTH STAR RIG — plataforma offshore + Downstream Plant,
   100% autoral (ESFERA-PEDAGOGIA item 20), com a mesma tripulação inventada
   das unidades anteriores: Erik (Norwegian), Fatima (Kuwaiti), Priya (Indian),
   Tomás (Brazilian welder — protagonista natural desta unidade de solda e
   tubulação), Sofia (Mexican geologist), Kwame (Ghanaian driller) e Amara
   Chukwu (Nigerian safety officer, estabelecida na Unit 4).

   ═══ REBUILD DE 09-10/08/2026 — SPEAKING-FIRST ═══
   Prioridade do cliente para o dia off: 1) SPEAKING, 2) LISTENING, 3) leitura/
   escrita por último. Gramática e vocabulário são MEIO, não fim — o critério
   de sucesso é o aluno CONSEGUIR FAZER a tarefa real (reportar um problema,
   descrever uma localização, ditar uma medida por rádio/telefone), não só
   acertar uma questão de gramática.

   Toda semana agora fecha com 1-2 passos de SPEAKING formando uma MISSÃO
   funcional coesa, com premissa de cenário curta — no espírito de como o
   DEEP FLOW e o RIG encerram unidades em missões temáticas com entregável
   (só a moldura é inspirada, nunca o conteúdo). Toda atividade do livro que
   só existe em dupla (pair work) permanece descrita apenas em `live` — as
   missões SOLO abaixo são redesenhos autorais, não reproduções.

   ═══ NÍVEL ═══
   OG1 = A1/A2 (elementar). Instruções em PT-BR, frases curtas e diretas.

   ═══ ESTRUTURA — mesmo escopo de conteúdo da Unit 7, camada speaking-first ═══
     Semana 1 · Pipe parts + inspection ... vocabulário de peças + inspeção/
                                             limpeza (pigs), fecha com Tomás
                                             reportando um vazamento pelo rádio
     Semana 2 · Welding hazards + solo route .. riscos de solda + matching
                                             hazard→precaução, fecha com uma
                                             versão SOLO falada de "Describing
                                             a pipeline" + aviso de segurança
     Semana 3 · Countable/uncountable + measuring .. a/an, some/much/many,
                                             "a piece of...", medição e volume,
                                             fecha com ditado de cálculo SOLO
                                             falado em voz alta
     Semana 4 · Review + Key Words ........ revisão mista, flashcards,
                                             self-check, fecha com relatório
                                             falado de inspeção + EPI usado

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
    DF.WGEN.POOLS.og1PipePart = ['a flanged joint', 'a tee', 'a valve', 'an elbow',
                                 'a pipe support', 'a flow meter', 'a section of pipe',
                                 'an underground pipeline'];
    DF.WGEN.POOLS.og1WeldHazard = ['arc rays', 'sparks', 'smoke', 'electric shock',
                                   'gas cylinders', 'trips and falls'];
    DF.WGEN.POOLS.og1Uncountable = ['water', 'information', 'advice', 'furniture', 'news'];
    DF.WGEN.POOLS.og1UncountUnit = ['a piece of information', 'a bottle of water',
                                    'a piece of advice', 'a piece of furniture',
                                    'a piece of news'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  // As palavras são o tema do livro (peças de tubulação); as definições e
  // TODOS os exemplos abaixo são autorais, escritos no universo North Star Rig.
  const WORDS = [
    { en: 'flanged joint', pt: 'junta flangeada',
      def: 'a joint where two pipe ends are bolted together using flanges',
      ex: 'The flanged joint near the pump needs a new gasket.' },
    { en: 'tee', pt: 'conexão em T',
      def: 'a T-shaped fitting that joins three sections of pipe',
      ex: 'The tee splits the flow to two different tanks.' },
    { en: 'elbow', pt: 'cotovelo (conexão)',
      def: 'a fitting that changes the direction of a pipe, usually ninety degrees',
      ex: 'There is an elbow where the pipeline turns towards the plant.' },
    { en: 'pipe support', pt: 'suporte de tubulação',
      def: 'a structure that holds a pipe in place above the ground',
      ex: 'A pipe support holds the line every few metres.' },
    { en: 'flow meter', pt: 'medidor de vazão',
      def: 'a device that measures how much liquid or gas passes through a pipe',
      ex: 'The flow meter shows how much oil moves through the line every hour.' },
    { en: 'section of pipe', pt: 'trecho de tubo',
      def: 'one straight piece of pipe, joined to others to form a pipeline',
      ex: 'Each section of pipe is about twelve metres long.' },
    { en: 'underground pipeline', pt: 'oleoduto subterrâneo',
      def: 'a pipeline that runs below the surface of the ground',
      ex: 'The underground pipeline is safer from damage and weather.' },
    { en: 'valve', pt: 'válvula',
      def: 'a device that opens, closes or controls the flow inside a pipe',
      ex: 'Close the valve before you disconnect the section of pipe.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'pig ·+', pt: 'pig (dispositivo de limpeza)',
      def: 'a device sent through a pipeline to clean deposits from the inside',
      ex: 'The team sends a pig through the line once a month.' },
    { en: 'deposit ·+', pt: 'depósito/resíduo',
      def: 'a layer of material, like rust or wax, that builds up inside a pipe',
      ex: 'The pig removes deposits from inside the pipeline.' },
    { en: 'pipe-fitter ·+', pt: 'montador de tubulação',
      def: 'a worker who assembles, fits and installs pipe systems',
      ex: 'The pipe-fitter checks every joint before the welder starts.' },
    { en: 'corrosion ·+', pt: 'corrosão',
      def: 'damage to metal caused by a chemical reaction, such as rust',
      ex: 'Corrosion is one of the main reasons pipelines need inspection.' },
    { en: 'inspection ·+', pt: 'inspeção',
      def: 'a careful check to find damage or problems before they get worse',
      ex: 'The pipeline inspection happens every three months at North Star.' }
  ];

  DF.PLAN.og1[7] = {
    unit: 7,
    title: 'Pipes and Pipelines',
    subtitle: 'Tubos, solda e medidas',
    icon: '🔧',

    mindmap: {
      center: 'Pipes and Pipelines',
      sub: 'Do tubo no chão até o cálculo do volume',
      branches: [
        {
          icon: '🔩', name: 'Pipe parts',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; }),
          note: 'Cada peça tem um nome próprio — <b>elbow</b> não é "curva", é a peça ' +
                'específica que muda a direção do tubo.'
        },
        {
          icon: '🧹', name: 'Inspection & cleaning',
          leaves: EXTRA_WORDS.filter(function (w) {
            return ['pig ·+', 'deposit ·+', 'corrosion ·+', 'inspection ·+'].indexOf(w.en) >= 0;
          }).map(function (w) { return { en: w.en, pt: w.pt }; }),
          note: 'Um <b>pig</b> não é o animal — é o dispositivo que "corre" dentro do tubo ' +
                'para tirar resíduos e corrosão de dentro.'
        },
        {
          icon: '🔥', name: 'Welding hazards',
          leaves: [
            { en: 'arc rays', pt: 'raios do arco (queimam a pele e os olhos)' },
            { en: 'sparks', pt: 'faíscas' },
            { en: 'smoke', pt: 'fumaça' },
            { en: 'electric shock', pt: 'choque elétrico' },
            { en: 'gas cylinders', pt: 'cilindros de gás' },
            { en: 'trips and falls', pt: 'tropeços e quedas' }
          ],
          note: 'Cada risco tem uma precaução: <b>cover up skin and eyes</b> (arc rays), ' +
                '<b>weld dry</b> (electric shock), <b>keep the work area clean</b> ' +
                '(trips and falls).'
        },
        {
          icon: '🧮', name: 'Countable vs uncountable',
          leaves: [
            { en: 'a pipe / three pipes', pt: 'contável — usa a/an e número' },
            { en: 'some water / much water', pt: 'incontável — nunca "a water"' },
            { en: 'a piece of information', pt: 'incontável precisa de unidade' },
            { en: 'a bottle of water', pt: 'incontável precisa de unidade' },
            { en: 'How much / How many', pt: 'much = incontável, many = contável' }
          ],
          note: 'Água, informação, conselho, móveis e notícia são <b>incontáveis</b> em ' +
                'inglês — nunca "an information" ou "two furnitures".'
        },
        {
          icon: '📏', name: 'Measuring pipes',
          leaves: [
            { en: 'diameter', pt: 'diâmetro' },
            { en: 'radius', pt: 'raio' },
            { en: 'length', pt: 'comprimento' },
            { en: 'thickness', pt: 'espessura' },
            { en: 'circumference', pt: 'circunferência' },
            { en: 'V = πr² × L', pt: 'fórmula do volume do tubo' }
          ],
          note: 'O raio é metade do diâmetro. A fórmula <b>V = πr² × L</b> dá o volume ' +
                'interno do tubo — área do círculo vezes o comprimento.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'pipeparts', icon: '🔩',
        title: 'Every Pipe Has a Name',
        goal: 'Nomear as peças de um sistema de tubulação, entender como funciona a inspeção ' +
              'e limpeza de um oleoduto, e reportar um problema encontrado numa inspeção pelo ' +
              'rádio.',
        comp: 'Você nomeia peças de tubulação (flange, tee, elbow, valve...), explica o que ' +
              'um "pig" faz dentro de um oleoduto, e reporta pelo rádio a localização e o ' +
              'problema de uma seção de pipeline, como Tomás faria de verdade.',
        live: [
          'Kick-off com o diagrama de peças de tubulação',
          'Leitura sobre serviços de inspeção e limpeza de pipeline',
          'Background sobre construção de pipeline — solda, flanges, fittings',
        ],
        bridge: 'Na aula vocês viram o diagrama do livro e leram sobre um serviço de ' +
                'inspeção genérico. Aqui você treina as MESMAS peças em frases novas, lê um ' +
                'texto 100% novo sobre uma inspeção real na North Star Rig, e fecha reportando ' +
                'um problema pelo rádio — a missão final da semana.',
        nextLive: 'Semana 2 · Describing a pipeline + welding — o pair work do mapa e o ' +
                  'listening do soldador.',
        ican: [
          'I can name the parts of a pipe system.',
          'I can explain what a pipeline pig does.',
          'I can understand a short text about pipeline inspection.',
          'I can report a pipeline problem by radio, with the part and the location.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u7w1:cards:core',
                title: '📇 As oito peças da unidade',
                sub: 'Definições e exemplos da North Star Rig — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u7w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app — inspeção e limpeza.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'parts', icon: '🔩', name: 'Que peça é essa?', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w1:parts:1',
                title: '🔩 Complete:', main: 'The pipe changes direction here. This is ___.',
                options: DF.shuffle([
                  { label: 'an elbow', correct: true }, { label: 'a tee' },
                  { label: 'a flanged joint' }, { label: 'a flow meter' }
                ]),
                expl: 'elbow = a peça que muda a direção do tubo.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w1:parts:2',
                title: '🔩 Complete:', main: 'This fitting joins three sections of pipe. This is ___.',
                options: DF.shuffle([
                  { label: 'a tee', correct: true }, { label: 'an elbow' },
                  { label: 'a pipe support' }, { label: 'a valve' }
                ]),
                expl: 'tee = conexão em T, junta três trechos.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w1:parts:3',
                title: '🔩 A pegadinha:', main: 'This device measures how much oil passes through the line. It is ___.',
                options: DF.shuffle([
                  { label: 'a flow meter', correct: true }, { label: 'a pipe support' },
                  { label: 'a flanged joint' }, { label: 'an underground pipeline' }
                ]),
                expl: 'flow meter = medidor de vazão — mede, não segura nem une.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u7w1:match:parts',
                title: '🔗 Ligue a peça à função:',
                pairs: [
                  ['valve', 'controls the flow inside the pipe'],
                  ['pipe support', 'holds the pipe in place'],
                  ['flanged joint', 'bolts two pipe ends together'],
                  ['section of pipe', 'one straight length of the line'],
                  ['underground pipeline', 'runs below the surface of the ground']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u7w1:type:elbow',
                title: '⌨️ Escreva a peça:', main: 'A fitting that turns the pipe ninety degrees → ___',
                answers: ['elbow', 'an elbow'], expl: 'elbow = cotovelo (conexão).' }
            ]
          },

          {
            id: 'inspect', icon: '🧹', name: 'Pigs e inspeção', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u7w1:read:pig',
                title: '🧹 O que é um "pig"?',
                textTitle: 'Pipeline pigs',
                readAloud: false,
                text:
                  'Um "pig" não é o animal — é um dispositivo que a equipe envia PARA DENTRO ' +
                  'do tubo. Ele viaja com o fluxo e limpa deposits (resíduos, ferrugem, cera) ' +
                  'de dentro da parede do tubo.\n\n' +
                  'Sem inspeção e limpeza regular, corrosion cresce por dentro do tubo e pode ' +
                  'causar um vazamento (leak). Por isso pipelines têm inspection programada, ' +
                  'não só quando algo já deu errado.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w1:insp:1',
                title: '🧹 Complete:', main: 'The team sends a ___ through the line to remove deposits.',
                options: DF.shuffle([
                  { label: 'pig', correct: true }, { label: 'valve' },
                  { label: 'flange' }, { label: 'meter' }
                ]),
                expl: 'pig = dispositivo de limpeza interna do tubo.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w1:insp:2',
                title: '🧹 Complete:', main: 'Rust building up inside a metal pipe is called ___.',
                options: DF.shuffle([
                  { label: 'corrosion', correct: true }, { label: 'inspection' },
                  { label: 'a deposit' }, { label: 'a joint' }
                ]),
                expl: 'corrosion = corrosão, o próprio dano por ferrugem.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u7w1:match:insp',
                title: '🔗 Ligue a palavra ao significado:',
                pairs: [
                  ['pig', 'device that cleans the inside of a pipe'],
                  ['deposit', 'material that builds up inside a pipe'],
                  ['corrosion', 'damage to metal, like rust'],
                  ['inspection', 'a careful check for damage']
                ] }
            ]
          },

          {
            id: 'reading', icon: '📖', name: 'Inspeção na North Star Rig', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u7w1:read:scenario',
                title: '📖 A weekly pipeline inspection',
                textTitle: 'Checking the line before the storm',
                text:
                  'Every month, Tomás and Erik check the pipeline that connects the rig to the ' +
                  'Downstream Plant. This week, Control asks them to check it early — a storm ' +
                  'is coming.\n\n' +
                  'First, they send a pig through the underground section. It finds a small ' +
                  'deposit of corrosion near an old flanged joint.\n\n' +
                  'Next, Tomás checks the flow meter. The numbers are normal, so the flow is not ' +
                  'the problem — only the joint needs attention.\n\n' +
                  'Finally, Erik reports the joint to the maintenance team. They will fix it ' +
                  'before the storm arrives, not after.',
                nextLabel: 'Li o texto ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u7w1:read:q1',
                title: '📖 Por que a inspeção acontece mais cedo esta semana?',
                options: DF.shuffle([
                  { label: 'A storm is coming', correct: true },
                  { label: 'The flow meter is broken' },
                  { label: 'The pig is missing' },
                  { label: 'It is the end of the month' }
                ]),
                expl: '"Control asks them to check it early — a storm is coming."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u7w1:read:q2',
                title: '📖 O que o pig encontra?',
                options: DF.shuffle([
                  { label: 'A deposit of corrosion near a flanged joint', correct: true },
                  { label: 'A broken flow meter' },
                  { label: 'A missing valve' },
                  { label: 'A new section of pipe' }
                ]),
                expl: '"It finds a small deposit of corrosion near an old flanged joint."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u7w1:read:q3',
                title: '📖 O que acontece com o joint no fim da história?',
                options: DF.shuffle([
                  { label: 'The maintenance team will fix it before the storm', correct: true },
                  { label: 'Tomás fixes it immediately, alone' },
                  { label: 'They replace the whole pipeline' },
                  { label: 'Nothing — it is not a problem' }
                ]),
                expl: '"Erik reports the joint to the maintenance team. They will fix it ' +
                      'before the storm arrives."' }
            ]
          },

          {
            id: 'radio', icon: '👂', name: 'Ouça o rádio antes de reportar', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u7w1:dlg:radio',
                title: '👂 Como soa um report de verdade',
                sub: 'Situação nova — não é o listening da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Kwame', en: 'Control, this is Kwame. I found a deposit near a flanged joint.' },
                  { who: 'Control', en: 'Copy that. What section?' },
                  { who: 'Kwame', en: 'The underground section, near the second pipe support.' },
                  { who: 'Control', en: 'Understood. Sending maintenance now.' }
                ],
                question: 'Onde fica o problema que Kwame encontrou?',
                options: DF.shuffle([
                  { label: 'Near the second pipe support, in the underground section', correct: true },
                  { label: 'Near the flow meter, above ground' },
                  { label: 'At the entrance of the Downstream Plant' },
                  { label: 'Inside the pig itself' }
                ]),
                expl: '"The underground section, near the second pipe support."'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Missão: reporte pelo rádio', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u7w1:build:parts', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Descreva uma peça de tubulação',
                prompt: 'Escolha uma peça da unidade e diga para que ela serve.',
                example: 'A valve controls the flow inside the pipe.',
                mustUse: ['pipe'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u7w1:build:report', unit: 7, waSec: 'Reporte · rádio',
                title: '🏆 MISSÃO — Tomás encontra um risco de vazamento',
                prompt: 'Cenário: você é Tomás, inspecionando o trecho subterrâneo do ' +
                        'pipeline. Você encontra um deposit de corrosão perto de uma flanged ' +
                        'joint, perto de um pipe support. Chame o Control pelo rádio: diga ' +
                        'quem você é, o que encontrou, e onde exatamente é.',
                example: 'Control, this is Tomás. I found a deposit of corrosion near a ' +
                         'flanged joint, near a pipe support, in the underground section.',
                mustUse: ['found'],
                expl: 'É a missão que fecha a semana — nomear a peça certa e dizer a ' +
                      'localização certa é o que faz o Control entender o problema.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u7w1+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Narre a inspeção inteira',
                prompt: 'Conte a história da inspeção da North Star Rig com suas próprias ' +
                        'palavras, do começo ao fim.',
                example: 'First, they send a pig through the line. Next, they find corrosion ' +
                         'near a joint. Finally, they report it to maintenance.',
                mustUse: ['first'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de peças', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Check ___ before you start the pump.', pool: 'og1PipePart',
                  focus: 'peças de tubulação', ptHint: 'Confira ___ antes de ligar a bomba.', n: 5 }
              ],
              backchain: [
                { text: 'The pig cleans deposits from {og1PipePart}.', ptHint: 'O pig limpa resíduos de…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'welding', icon: '🔥',
        title: 'Weld Safe, Route Sure',
        goal: 'Reconhecer riscos de solda e as precauções certas para cada um, e descrever em ' +
              'voz alta a rota de um pipeline para um colega imaginário seguir.',
        comp: 'Você liga cada risco de solda à precaução certa, entende placas de segurança ' +
              'de solda, e narra em voz alta a rota completa de um trecho de pipeline como se ' +
              'estivesse guiando alguém que vai percorrer a linha.',
        live: [
          'Pair work "Describing a pipeline": um aluno descreve a rota no mapa, o outro ' +
          'desenha',
          'Listening "day in the life" de um soldador — vocabulário de solda',
          'Listening sobre riscos e precauções de solda, com matching de equipamentos e placas'
        ],
        bridge: 'Na aula, "Describing a pipeline" foi em DUPLA — um aluno fala, o outro ' +
                'desenha. Aqui é uma versão SOLO diferente: você recebe uma rota nova e narra ' +
                'ela em voz alta, como direção para alguém andar — mais o vocabulário de ' +
                'riscos de solda com situações NOVAS, não as do listening da aula.',
        nextLive: 'Semana 3 · Countable/uncountable + medição — a gramática de much/many e a ' +
                  'fórmula do volume do tubo, com dictation de cálculo em dupla.',
        ican: [
          'I can match welding hazards to the correct precaution.',
          'I can understand welding safety signs.',
          'I can describe a pipeline route out loud, step by step.',
          'I can give a short safety warning about a hazard I notice nearby.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'weldvoc', icon: '🔥', name: 'Riscos da solda', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u7w2:read:hazards',
                title: '🔥 Seis riscos de quem solda',
                textTitle: 'Welding hazards',
                readAloud: false,
                text:
                  'arc rays — a luz do arco de solda queima pele e olhos sem proteção.\n\n' +
                  'sparks — faíscas quentes podem cair na roupa ou em material inflamável.\n\n' +
                  'smoke — a fumaça da solda pode ser tóxica se respirada por muito tempo.\n\n' +
                  'electric shock — o equipamento é elétrico; água perto dele é perigo real.\n\n' +
                  'gas cylinders — cilindros de gás podem vazar ou explodir se manuseados errado.\n\n' +
                  'trips and falls — cabos e mangueiras no chão são o risco mais comum, e o ' +
                  'mais esquecido.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u7w2:radar:arc',
                title: '🔊 Que risco você ouviu?',
                tts: 'arc rays', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'arc rays',
                options: DF.shuffle([{ label: 'arc rays', correct: true }, { label: 'sparks' },
                  { label: 'smoke' }, { label: 'electric shock' }]),
                expl: 'arc rays = raios do arco de solda.', feedbackTts: 'arc rays' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u7w2:radar:cyl',
                title: '🔊 E agora?',
                tts: 'gas cylinders', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'gas cylinders',
                options: DF.shuffle([{ label: 'gas cylinders', correct: true }, { label: 'trips and falls' },
                  { label: 'sparks' }, { label: 'smoke' }]),
                expl: 'gas cylinders = cilindros de gás.', feedbackTts: 'gas cylinders' },
              { ui: 'match', cat: 'voc', srsId: 'og1u7w2:match:hazprec',
                title: '🔗 Ligue o risco à precaução certa:',
                pairs: [
                  ['arc rays', 'cover up skin and eyes'],
                  ['electric shock', 'weld dry'],
                  ['trips and falls', 'keep the work area clean'],
                  ['smoke', 'work in a ventilated area'],
                  ['gas cylinders', 'store them upright and secure']
                ] },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w2:hazprec:1',
                title: '⚠️ A pegadinha:', main: 'Water on the floor near a welder is dangerous mainly because of ___.',
                options: DF.shuffle([
                  { label: 'electric shock', correct: true }, { label: 'smoke' },
                  { label: 'arc rays' }, { label: 'trips and falls' }
                ]),
                expl: 'Equipamento elétrico + água = risco de choque, não de fumaça.' }
            ]
          },

          {
            id: 'signs', icon: '🚧', name: 'Placas de segurança', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w2:sign:1',
                title: '🚧 O que essa placa significa?',
                main: 'A yellow triangle with a flame symbol, near the welding area.',
                options: DF.shuffle([
                  { label: 'Fire hazard — flammable material nearby', correct: true },
                  { label: 'No entry for visitors' },
                  { label: 'Wear a helmet at all times' },
                  { label: 'Emergency exit' }
                ]),
                expl: 'Triângulo amarelo com chama = risco de incêndio, material inflamável.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w2:sign:2',
                title: '🚧 O que essa placa significa?',
                main: 'A blue circle with a face wearing dark goggles.',
                options: DF.shuffle([
                  { label: 'Eye protection must be worn', correct: true },
                  { label: 'No smoking' },
                  { label: 'High voltage' },
                  { label: 'Wet floor' }
                ]),
                expl: 'Círculo azul = obrigatoriedade — aqui, de proteção para os olhos.' },
              { ui: 'type', cat: 'voc', srsId: 'og1u7w2:type:precaution',
                title: '⌨️ Complete a precaução:', main: 'Never weld near a flammable liquid — weld ___.',
                answers: ['dry', 'weld dry'], expl: '"weld dry" também vale para longe de líquidos.' }
            ]
          },

          {
            id: 'route', icon: '🗺️', name: 'A rota do novo trecho', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u7w2:read:route',
                title: '🗺️ Estude a rota antes de narrar',
                textTitle: 'North Star Rig to the Downstream Plant',
                text:
                  'The new pipeline goes underground for the first two kilometres.\n\n' +
                  'Then it comes up and runs through the forest, in a straight section, for ' +
                  'about one kilometre.\n\n' +
                  'At the edge of the forest, there is an elbow — the line turns and goes near ' +
                  'the river for half a kilometre.\n\n' +
                  'Finally, it goes underground again, right up to the entrance of the ' +
                  'Downstream Plant.\n\n' +
                  'Leia com atenção — na próxima etapa você narra essa rota de cabeça, em voz ' +
                  'alta, como se estivesse guiando um colega que vai andar por ela.',
                nextLabel: 'Li a rota ▸' },
              { ui: 'order', cat: 'fun', srsId: 'og1u7w2:ord:route1',
                title: '🧩 Coloque a rota na ordem certa:',
                answer: 'underground then forest then near the river then underground',
                expl: 'underground (2 km) → forest (1 km) → near the river (0,5 km) → ' +
                      'underground até o Plant.' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u7w2:route:1',
                title: '🗺️ Onde fica o elbow?',
                options: DF.shuffle([
                  { label: 'At the edge of the forest', correct: true },
                  { label: 'At the entrance of the Downstream Plant' },
                  { label: 'In the middle of the river' },
                  { label: 'Two kilometres underground' }
                ]),
                expl: '"At the edge of the forest, there is an elbow."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u7w2:route:2',
                title: '🗺️ Que trecho tem exatamente 1 km e é reto?',
                options: DF.shuffle([
                  { label: 'The section through the forest', correct: true },
                  { label: 'The underground section at the start' },
                  { label: 'The section near the river' },
                  { label: 'The section at the plant entrance' }
                ]),
                expl: '"it runs through the forest, in a straight section, for about one ' +
                      'kilometre."' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Missão: guie o colega pela rota', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u7w2:build:route', unit: 7, waSec: 'Describing · solo',
                title: '🏆 MISSÃO — Descreva a rota inteira, como uma direção',
                prompt: 'Cenário: um colega novo vai caminhar essa rota pela primeira vez e ' +
                        'não tem o mapa. Narre a rota do início ao fim, em ordem, como se ' +
                        'estivesse guiando ele: "go straight, then...".',
                example: 'Go straight underground for two kilometres. Then it comes up and ' +
                         'goes through the forest for one kilometre. Then there is an elbow, ' +
                         'and it goes near the river. Finally, it goes underground again to ' +
                         'the plant.',
                mustUse: ['then'],
                expl: 'É a versão SOLO de "Describing a pipeline" — na aula é em dupla, aqui ' +
                      'você faz o papel dos dois lados, sozinho.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u7w2:build:warn', unit: 7, waSec: 'Aviso · solo',
                title: '🗣️ Feche com um aviso de segurança',
                prompt: 'Enquanto caminha perto da rota, você vê um soldador trabalhando sem ' +
                        'proteção para os olhos. Dê um aviso curto sobre o risco e a precaução.',
                example: 'Careful — arc rays can burn your eyes. You need to cover up your ' +
                         'skin and eyes before you weld.',
                mustUse: ['arc rays'],
                expl: 'É o fechamento funcional da missão: descrever a rota E notar um risco ' +
                      'real no caminho, como um trabalhador de verdade faria.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u7w2+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Todos os riscos, de cabeça',
                prompt: 'Diga os seis riscos de solda e uma precaução para cada um, sem olhar ' +
                        'o material.',
                example: 'Arc rays — cover up. Sparks — keep the area clean. Smoke — work in a ' +
                         'ventilated area...',
                mustUse: ['arc rays'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de riscos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Be careful — ___ is a real risk here.', pool: 'og1WeldHazard',
                  focus: 'riscos de solda', ptHint: 'Cuidado — ___ é um risco real aqui.', n: 5 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'measuring', icon: '📏',
        title: 'How Much, How Many',
        goal: 'Diferenciar substantivos contáveis e incontáveis com a/an, some/much/many e ' +
              '"a piece of.../a bottle of...", e ditar em voz alta uma medida de tubo com o ' +
              'cálculo de volume, como faria pelo rádio.',
        comp: 'Você escolhe a/an, some, much ou many corretamente, usa "a piece of" e "a ' +
              'bottle of" com substantivos incontáveis, e dita uma medida de tubo (raio, ' +
              'comprimento) em voz alta, com clareza suficiente para alguém anotar do outro ' +
              'lado da linha.',
        live: [
          'Countable e uncountable nouns — explicação e prática com much/many',
          '"Measuring pipes" — vocabulário de números e a fórmula V = πr² × L',
          'Pair work: um aluno dita um cálculo, o outro escreve'
        ],
        bridge: 'Na aula vocês fizeram a dictation de cálculo EM DUPLA. Aqui é a versão SOLO ' +
                '— primeiro você escreve os números de um cálculo que ouve, depois faz o ' +
                'caminho inverso: dita um cálculo novo em voz alta, com números novos. Mais ' +
                'uma prática funda de countable/uncountable com situações da North Star Rig.',
        nextLive: 'Semana 4 · Revisão + Key Words — isometric drawings, MTOs e o ' +
                  '"Communication" final em dupla.',
        ican: [
          'I can use a, an, some, much and many correctly.',
          "I can say 'a piece of' and 'a bottle of' with uncountable nouns.",
          'I can dictate a pipe measurement and a volume calculation clearly, out loud.',
          'I can write numbers I hear spoken as words, and the other way round.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'countable', icon: '🧮', name: 'Countable vs uncountable', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u7w3:read:count',
                title: '🧮 A regra num relance',
                textTitle: 'Countable e uncountable',
                readAloud: false,
                text:
                  'CONTÁVEL — você pode contar: a pipe, two pipes, three valves. Usa a/an no ' +
                  'singular, e number + plural.\n\n' +
                  'INCONTÁVEL — não dá para contar direto: water, information, advice, ' +
                  'furniture, news. NUNCA "an information" ou "two furnitures".\n\n' +
                  'Para quantidade incontável, usa some (afirmativa/oferta), any (negativa/' +
                  'pergunta), ou much (com incontável): some water, not much water.\n\n' +
                  'Para quantidade contável, usa many: many pipes, not many valves.\n\n' +
                  'Para DAR UMA UNIDADE ao incontável: a piece of information, a bottle of ' +
                  'water, a piece of advice, a piece of furniture, a piece of news.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: "informação", "conselho", "móvel" e "notícia" ' +
                  'soam contáveis em português ("uma informação"), mas em inglês são ' +
                  'INCONTÁVEIS — por isso precisam de "a piece of".',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u7w3:cnt:1',
                title: '🧮 Complete:', main: 'How ___ pipes do we need for this section?',
                options: DF.shuffle([
                  { label: 'many', correct: true }, { label: 'much' }, { label: 'a' }, { label: 'some' }
                ]),
                expl: 'pipes é contável (plural) → many.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u7w3:cnt:2',
                title: '🧮 Complete:', main: 'How ___ water is in the tank?',
                options: DF.shuffle([
                  { label: 'much', correct: true }, { label: 'many' }, { label: 'a' }, { label: 'an' }
                ]),
                expl: 'water é incontável → much.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u7w3:cnt:3',
                title: '⚠️ A armadilha nº1:', main: 'Erik gave the new welder ___.',
                options: DF.shuffle([
                  { label: 'a piece of advice', correct: true }, { label: 'an advice', trap: true },
                  { label: 'a advice' }, { label: 'advices' }
                ]),
                trapNote: 'Caiu na armadilha — "advice" é incontável, não existe "an advice".',
                expl: '"advice" é incontável em inglês → a piece of advice.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u7w3:cnt:4',
                title: '🧮 Complete:', main: 'There is ___ furniture in the new office.',
                options: DF.shuffle([
                  { label: 'some', correct: true }, { label: 'a' }, { label: 'many' }, { label: 'an' }
                ]),
                expl: 'furniture é incontável → some, nunca "a furniture".' },
              { ui: 'match', cat: 'gra', srsId: 'og1u7w3:match:unit',
                title: '🔗 Ligue o incontável à sua unidade:',
                pairs: [
                  ['water', 'a bottle of water'],
                  ['information', 'a piece of information'],
                  ['advice', 'a piece of advice'],
                  ['furniture', 'a piece of furniture'],
                  ['news', 'a piece of news']
                ] },
              { ui: 'type', cat: 'gra', srsId: 'og1u7w3:type:piece',
                title: '⌨️ Complete:', main: 'Tomás has ___ (uma informação) about the flanged joint.',
                answers: ['a piece of information', 'a piece of information.'],
                expl: 'information é incontável → a piece of information.' }
            ]
          },

          {
            id: 'measure', icon: '📏', name: 'Measuring pipes', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u7w3:read:measure',
                title: '📏 As medidas de um tubo',
                textTitle: 'Diameter, radius, length, thickness',
                readAloud: false,
                text:
                  'diameter — a distância de um lado ao outro do tubo, passando pelo centro.\n\n' +
                  'radius — a metade do diâmetro, do centro até a borda.\n\n' +
                  'length — o comprimento do tubo, de uma ponta à outra.\n\n' +
                  'thickness — a espessura da parede do tubo.\n\n' +
                  'circumference — o perímetro do círculo, a "volta" do tubo.\n\n' +
                  'Para calcular o volume interno de um tubo: V = πr² × L — pi vezes o raio ' +
                  'ao quadrado, vezes o comprimento.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w3:meas:1',
                title: '📏 Complete:', main: 'The radius is half of the ___.',
                options: DF.shuffle([
                  { label: 'diameter', correct: true }, { label: 'length' },
                  { label: 'thickness' }, { label: 'circumference' }
                ]),
                expl: 'raio é metade do diâmetro.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w3:meas:2',
                title: '📏 Complete:', main: 'The formula for pipe volume is V = ___.',
                options: DF.shuffle([
                  { label: 'πr² × L', correct: true }, { label: 'π × L' },
                  { label: '2πr' }, { label: 'r × L' }
                ]),
                expl: 'V = πr² × L — área do círculo (πr²) vezes o comprimento (L).' }
            ]
          },

          {
            id: 'dictation', icon: '🔁', name: 'Cálculo — ouça e escreva', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'og1u7w3:dict:1',
                title: '🔁 Escreva o cálculo por extenso como números:',
                sub: 'Radius is three metres, length is twelve metres.',
                main: 'r = ___, L = ___ (só os dois números, separados por vírgula)',
                answers: ['3, 12', '3,12', '3 , 12'], exact: false,
                expl: 'radius three = r=3, length twelve = L=12.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u7w3:dict:2',
                title: '🔁 E este:',
                sub: 'Diameter is eight metres, thickness is two centimetres.',
                main: 'diameter = ___ metres, thickness = ___ centimetres',
                answers: ['8, 2', '8,2', '8 , 2'], exact: false,
                expl: 'diameter eight = 8, thickness two = 2.' },
              { ui: 'type', cat: 'voc', srsId: 'og1u7w3:type:volread',
                title: '⌨️ Leia em voz alta e depois escreva:',
                sub: 'A pipe has a radius of two metres and a length of ten metres.',
                main: 'V = π × 2² × 10. Escreva o valor de r² × L (sem o π): ___',
                answers: ['40', 'r² × L = 40'], exact: false,
                expl: '2² × 10 = 4 × 10 = 40. O volume é π × 40 metros cúbicos.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Missão: dite o cálculo pelo rádio', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'spl', srsId: 'og1u7w3:build:saynum', unit: 7, waSec: 'Cálculo · solo',
                title: '🏆 MISSÃO — Dite a medida para o Control anotar',
                prompt: 'Cenário: você acabou de medir um tubo novo. O radius é 5 metres e o ' +
                        'length é 20 metres. Chame o Control pelo rádio e dite a medida ' +
                        'completa, por extenso, com clareza — alguém do outro lado vai ' +
                        'escrever exatamente o que você disser.',
                example: 'Control, this is a measurement for the log. The radius is five ' +
                         'metres and the length is twenty metres.',
                mustUse: ['radius'],
                expl: 'É a versão SOLO da dictation — na aula é em dupla (um dita, o outro ' +
                      'escreve); aqui você faz o lado de quem dita, com clareza de rádio.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u7w3:build:advice', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Peça um conselho, corretamente',
                prompt: 'Depois de medir o tubo, peça um "piece of advice" a um colega sobre ' +
                        'o resultado.',
                example: 'Can you give me a piece of advice about this measurement?',
                mustUse: ['a piece of'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u7w3+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Um cálculo completo, falado',
                prompt: 'Invente um radius e um length, e diga a frase completa com a fórmula ' +
                        'V = πr² × L em palavras.',
                example: 'The radius is four metres and the length is fifteen metres, so the ' +
                         'volume is pi times four squared times fifteen.',
                mustUse: ['radius'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de countable/uncountable', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Can I have ___?', pool: 'og1UncountUnit', focus: 'incontáveis com unidade',
                  ptHint: 'Posso ter ___?', n: 5 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Read the Line, Know the Risk',
        goal: 'Revisar peças de tubulação, riscos de solda e countable/uncountable, se ' +
              'autoavaliar com um checklist, e reportar em voz alta uma inspeção completa a ' +
              'um supervisor.',
        comp: 'Numa revisão geral, você mistura a/an, much/many, vocabulário de tubulação e ' +
              'de solda sem errar, e fecha o mês reportando verbalmente uma inspeção completa ' +
              '— o que encontrou e qual EPI usou — como faria de verdade para um supervisor.',
        live: [
          'Leitura sobre isometric drawings e MTOs (Material Take-Off)',
          'Checklist de autoavaliação + Key Words',
          '"Language test" misturando a/an e much/many',
          'Communication — pair work de fechamento, imagens de EPI'
        ],
        bridge: 'Na aula vocês leram sobre isometric drawings/MTOs e fizeram o ' +
                '"Communication" em dupla, ligando imagens de EPI a descrições. Aqui é uma ' +
                'revisão SOLO no espírito de teste — frases novas, não as da aula — mais o ' +
                'flashcard das Key Words, um checklist "eu consigo…", e a missão final: um ' +
                'relatório verbal completo de inspeção, com EPI, para o supervisor.',
        nextLive: 'Unit 8. Começa na segunda-feira seguinte.',
        ican: [
          'I can use a/an and much/many together without stopping to think.',
          'I can name pipe parts and welding hazards from this unit.',
          'I can match safety equipment to its description.',
          'I can give a verbal inspection report, including the PPE I used.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u7w4:cards:review',
                title: '🔑 Revisão — as treze palavras do mês',
                sub: 'Flashcard de revisão: as oito principais + as cinco extras.',
                cards: WORDS.concat(EXTRA_WORDS).map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'mto', icon: '📐', name: 'Isometric drawings e MTOs', tag: 'estudo',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u7w4:read:mto',
                title: '📐 O que é um MTO?',
                textTitle: 'Isometric drawings and MTOs',
                readAloud: false,
                text:
                  'Um isometric drawing é um desenho técnico em 3D simplificado que mostra ' +
                  'como os tubos, flanges, tees e elbows se conectam.\n\n' +
                  'Um MTO (Material Take-Off) é a lista que sai desse desenho: quantas peças, ' +
                  'de qual tipo, e de qual tamanho são necessárias para construir a linha.\n\n' +
                  'Ler um MTO é comparar o desenho com a lista — exatamente como o "Checking" ' +
                  'que você já treinou em unidades anteriores, mas agora com peças de ' +
                  'tubulação.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u7w4:mto:1',
                title: '📐 O que um MTO mostra?',
                options: DF.shuffle([
                  { label: 'The quantity, type and size of parts needed', correct: true },
                  { label: 'The salary of the pipe-fitters' },
                  { label: 'The weather forecast for the site' },
                  { label: 'The colour of the pipeline' }
                ]),
                expl: 'MTO = lista de material: quantidade, tipo e tamanho.' }
            ]
          },

          {
            id: 'mix', icon: '📝', name: 'Revisão geral', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'og1u7w4:mix:1',
                title: '📝 Complete:', main: 'There is ___ elbow near the tank, and ___ water on the floor.',
                options: DF.shuffle([
                  { label: 'an / some', correct: true }, { label: 'a / much' },
                  { label: 'an / a' }, { label: 'a / many' }
                ]),
                expl: 'elbow (som de vogal) → an. water (incontável, afirmativa) → some.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u7w4:mix:2',
                title: '📝 Complete:', main: 'How ___ sections of pipe do we need for this job?',
                options: DF.shuffle([
                  { label: 'many', correct: true }, { label: 'much' }, { label: 'a' }, { label: 'an' }
                ]),
                expl: 'sections é contável (plural) → many.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w4:mix:hazard',
                title: '📝 Complete:', main: 'Cover up your skin and eyes to protect against ___.',
                options: DF.shuffle([
                  { label: 'arc rays', correct: true }, { label: 'trips and falls' },
                  { label: 'gas cylinders' }, { label: 'a flanged joint' }
                ]),
                expl: 'arc rays queimam pele e olhos — a precaução é cobrir-se.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w4:mix:pipe',
                title: '📝 Complete:', main: 'The ___ measures how much oil passes through the line every hour.',
                options: DF.shuffle([
                  { label: 'flow meter', correct: true }, { label: 'pipe support' },
                  { label: 'pig' }, { label: 'tee' }
                ]),
                expl: 'flow meter = medidor de vazão.' },
              { ui: 'match', cat: 'fun', srsId: 'og1u7w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['pig', 'device that cleans deposits inside a pipe'],
                  ['corrosion', 'damage to metal, like rust'],
                  ['a piece of advice', 'the correct unit for uncountable "advice"'],
                  ['V = πr² × L', 'the formula for pipe volume']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u7w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'There is not much information about the leak',
                expl: 'There is not much + incontável.' }
            ]
          },

          {
            id: 'comm', icon: '🦺', name: 'EPI para o relatório', tag: 'vocabulário',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'og1u7w4:match:ppe',
                title: '🦺 Ligue o item de EPI à descrição:',
                sub: 'Itens novos — não são os mesmos da aula.',
                pairs: [
                  ['welding gloves', 'thick gloves that protect the hands from heat and sparks'],
                  ['face shield', 'covers the whole face against arc rays and sparks'],
                  ['fire-resistant jacket', 'a jacket that does not burn easily near welding work'],
                  ['leather apron', 'protects the chest and legs from sparks and heat'],
                  ['safety boots', 'steel-toe boots that protect the feet from falling objects']
                ] },
              { ui: 'choice', cat: 'voc', srsId: 'og1u7w4:ppe:1',
                title: '🦺 Qual item protege contra arc rays no rosto inteiro?',
                options: DF.shuffle([
                  { label: 'face shield', correct: true }, { label: 'welding gloves' },
                  { label: 'safety boots' }, { label: 'leather apron' }
                ]),
                expl: 'face shield cobre o rosto inteiro contra arc rays e faíscas.' }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 7, idx: 0,
                statement: 'I can name pipe parts, like a flange, a tee, an elbow or a valve.',
                ptHint: 'Eu consigo nomear peças de tubulação.' },
              { ui: 'selfcheck', cat: 'fun', unit: 7, idx: 1,
                statement: 'I can match welding hazards to the correct precaution.',
                ptHint: 'Eu consigo ligar riscos de solda à precaução certa.' },
              { ui: 'selfcheck', cat: 'fun', unit: 7, idx: 2,
                statement: 'I can use a, an, some, much and many correctly.',
                ptHint: 'Eu consigo usar a, an, some, much e many corretamente.' },
              { ui: 'selfcheck', cat: 'fun', unit: 7, idx: 3,
                statement: "I can say 'a piece of' and 'a bottle of' with uncountable nouns.",
                ptHint: 'Eu consigo dizer "a piece of" e "a bottle of" com incontáveis.' },
              { ui: 'selfcheck', cat: 'fun', unit: 7, idx: 4,
                statement: 'I can give a verbal inspection report, including the PPE I used.',
                ptHint: 'Eu consigo dar um relatório verbal de inspeção, incluindo o EPI que usei.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Missão: relatório final para Amara', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u7w4:st:1', unit: 7, waSec: 'Revisão',
                title: '🏆 MISSÃO — Reporte a inspeção completa',
                prompt: 'Cenário: você acabou de terminar uma inspeção de pipeline e encontra ' +
                        'Amara Chukwu, a safety officer, no corredor. Reporte para ela: o que ' +
                        'você inspecionou (uma peça), um risco de solda que você notou perto ' +
                        'da área, o EPI que você usou, e a medida do tubo.',
                example: "I inspected the tee near Section 3. I noticed arc rays were a risk " +
                         "close by, so I wore a face shield. The pipe has a radius of three " +
                         "metres and a length of ten metres.",
                mustUse: ['I inspected'],
                expl: 'É o fechamento da unidade inteira: nomear peça, risco, EPI e medida, ' +
                      'tudo numa fala só, como um relatório real. Mande o áudio — o professor ' +
                      'confere pronúncia e gramática do mês inteiro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Revisão sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u7w4+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre um trecho de pipeline inventado: as peças, ' +
                        'os riscos durante a construção, e a medida do tubo.',
                example: "This pipeline has an elbow and two flanged joints. During welding, " +
                         "arc rays and sparks are the main risks. The pipe has a radius of " +
                         "two metres.",
                expl: 'É o resumo falado de tudo que a unidade ensinou.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
