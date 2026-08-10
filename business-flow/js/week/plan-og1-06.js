/* ENGLISH FLOW — week/plan-og1-06.js
   OIL & GAS 1 · UNIT 6 "Drilling" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Diagrama da rig, o processo de perfuração,
                      o listening de problemas do fluido de perfuração, o
                      pair work "Giving safety advice" e o "Communication".
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Por isso nenhum personagem, texto ou exercício do livro aparece aqui. O
   universo do app continua a NORTH STAR RIG (plataforma offshore fictícia
   100% autoral) — reaproveitando a tripulação já estabelecida nas Units 1-5:
   Erik (Norwegian), Fatima (Kuwaiti), Priya (Indian), Tomás (Brazilian
   welder), Sofia (Mexican geologist), Kwame (Ghanaian driller) e Amara
   Chukwu (Nigerian safety officer, apresentada na Unit 4). Kwame é o
   protagonista natural desta unidade — Drilling é a área dele.

   ═══ REBUILD — SPEAKING > LISTENING > reading/writing ═══
   Gramática e vocabulário são ferramenta, não fim. Cada semana escala
   rápido o vocabulário/gramática básicos e CULMINA numa missão funcional de
   fala (1-2 steps `build`/`dialogue` cenário-fechado, não quiz abstrato),
   inclui pelo menos um momento de escuta ("você ouve isso pelo rádio/de um
   colega, responda"), e mantém reading/writing como a MENOR fatia da
   semana. Qualquer atividade que no livro é pair-work fica só descrita em
   `live` — nunca virou item interativo aqui.

     Semana 1 (rig parts + crew roles) → missão: orientar um roustabout
                novo, oralmente, e fechar com um radio check-in
     Semana 2 (comparatives/superlatives + enough/too) → missão: corrigir
                um problema de fluido reportado por rádio, falando com o
                mud engineer
     Semana 3 (imperative + safety advice) → missão: alerta de segurança
                em tempo real, sozinho, sobre um perigo acontecendo agora
     Semana 4 (review + Key Words) → missão: handover completo de turno,
                falado, para o próximo turno

   ═══ NÍVEL ═══
   OG1 = A1/A2 (elementar). Instruções em PT-BR, frases curtas e diretas.

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
    DF.WGEN.POOLS.og1RigPart = ['the derrick', 'the drill bit', 'the drill string',
                                'the rotary table', 'the mud pump', 'the pipe rack',
                                'the mud screen', 'the monkey board'];
    DF.WGEN.POOLS.og1CrewRole = ['a roustabout', 'a roughneck', 'a derrickman',
                                 'a driller', 'a toolpusher', 'a rig manager'];
    DF.WGEN.POOLS.og1Adj = ['thick', 'thin', 'heavy', 'light', 'fast', 'slow',
                            'senior', 'junior', 'old', 'new'];
    DF.WGEN.POOLS.og1Instruction = ['Clean the mud screen.', 'Climb the derrick.',
                                    'Tighten the bolt.', 'Unload the pipe rack.',
                                    'Connect the hose.', 'Inspect the drill bit.'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  // As palavras são o tema do livro (equipamento e funções de perfuração); as
  // definições e TODOS os exemplos abaixo são autorais, escritos no universo
  // North Star Rig.
  const WORDS = [
    { en: 'derrick', pt: 'torre de perfuração',
      def: 'the tall tower structure that supports the drilling equipment',
      ex: 'Kwame checked the derrick before the new well started.' },
    { en: 'drill bit', pt: 'broca',
      def: 'the cutting tool at the bottom of the drill string that cuts through rock',
      ex: 'The drill bit is old — it needs to be replaced soon.' },
    { en: 'drill string', pt: 'coluna de perfuração',
      def: 'the long connected pipe that turns the drill bit deep underground',
      ex: 'The drill string is over two thousand metres long.' },
    { en: 'rotary table', pt: 'mesa rotativa',
      def: 'the part of the rig that turns the drill string',
      ex: 'The rotary table turns the drill string at a steady speed.' },
    { en: 'mud pump', pt: 'bomba de lama',
      def: 'the machine that pushes drilling mud down the well',
      ex: 'The mud pump is louder than the generator.' },
    { en: 'driller', pt: 'perfurador',
      def: 'the person who controls the drilling equipment and the speed of the well',
      ex: 'Kwame is the driller — he is the most experienced person on this crew.' },
    { en: 'roughneck', pt: 'operário de perfuração',
      def: 'a rig worker who connects and disconnects the drill pipe',
      ex: 'The roughnecks work fast when a new pipe goes down.' },
    { en: 'toolpusher', pt: 'supervisor de perfuração',
      def: 'the person who supervises the whole drilling crew',
      ex: 'The toolpusher checks every report before the shift ends.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'pipe rack ·+', pt: 'estante de tubos',
      def: 'the area on the rig floor where pipes are stored before use',
      ex: 'The pipe rack is full — the new pipes arrived this morning.' },
    { en: 'mud screen ·+', pt: 'peneira de lama',
      def: 'a screen that separates rock pieces from the drilling mud',
      ex: 'Clean the mud screen every four hours.' },
    { en: 'monkey board ·+', pt: 'plataforma superior da torre',
      def: 'a small platform high on the derrick where the derrickman works',
      ex: 'The derrickman works on the monkey board, high above the rig floor.' },
    { en: 'viscosity ·+', pt: 'viscosidade',
      def: 'how thick or thin a liquid is',
      ex: 'The viscosity of the mud changed — it is too thin now.' },
    { en: 'roustabout ·+', pt: 'auxiliar de rig (função de entrada)',
      def: 'the most junior rig worker, who does general labour jobs',
      ex: 'The new roustabout is learning fast, but he is the most junior person here.' }
  ];

  DF.PLAN.og1[6] = {
    unit: 6,
    title: 'Drilling',
    subtitle: 'Perfurando um poço novo',
    icon: '⛏️',

    mindmap: {
      center: 'Drilling',
      sub: 'O processo, o equipamento e a equipe que perfura um poço',
      branches: [
        {
          icon: '🗼', name: 'Rig parts',
          leaves: WORDS.filter(function (w) {
            return ['derrick', 'drill bit', 'drill string', 'rotary table', 'mud pump'].indexOf(w.en) >= 0;
          }).map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) {
              return ['pipe rack ·+', 'mud screen ·+', 'monkey board ·+'].indexOf(w.en) >= 0;
            }).map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> não estão no Word Bank da aula — vêm do vocabulário ' +
                'extra do app.'
        },
        {
          icon: '👷', name: 'Drilling crew',
          leaves: WORDS.filter(function (w) {
            return ['driller', 'roughneck', 'toolpusher'].indexOf(w.en) >= 0;
          }).map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat([
              { en: 'roustabout', pt: 'auxiliar (mais júnior)' },
              { en: 'derrickman', pt: 'trabalha na monkey board' },
              { en: 'rig manager', pt: 'chefe geral da plataforma' }
            ]),
          note: 'Ordem de senioridade: roustabout → roughneck → derrickman → driller → ' +
                'toolpusher → rig manager.'
        },
        {
          icon: '📏', name: 'Comparatives & superlatives',
          leaves: [
            { en: 'thick → thicker → the thickest', pt: 'regular curto (-er/-est)' },
            { en: 'heavy → heavier → the heaviest', pt: 'termina em Y → -ier/-iest' },
            { en: 'experienced → more experienced → the most experienced', pt: 'longo → more/most' },
            { en: 'good → better → the best', pt: 'irregular' }
          ],
          note: 'Adjetivos curtos (1 sílaba, alguns de 2) usam <b>-er/-est</b>. Longos usam ' +
                '<b>more/most</b>. Alguns não seguem regra nenhuma — são irregulares.'
        },
        {
          icon: '⚖️', name: 'Enough & too',
          leaves: [
            { en: 'The mud is not thick enough.', pt: 'adjetivo + enough (negativo)' },
            { en: 'The pipe is heavy enough.', pt: 'adjetivo + enough (positivo)' },
            { en: 'The mud is too thin.', pt: 'too + adjetivo (demais)' },
            { en: 'There is too much water.', pt: 'too much + incontável' },
            { en: 'There are too many pipes.', pt: 'too many + contável' }
          ],
          note: '<b>Enough</b> vem DEPOIS do adjetivo. <b>Too</b> vem ANTES. <b>Too much</b> ' +
                'para incontável, <b>too many</b> para contável.'
        },
        {
          icon: '✋', name: 'Imperative verbs',
          leaves: [
            { en: 'Clean the mud screen.', pt: 'instrução direta' },
            { en: 'Climb the derrick.', pt: 'instrução direta' },
            { en: "Don't touch the drill bit.", pt: 'instrução negativa' },
            { en: 'Tighten the bolt.', pt: 'instrução direta' }
          ],
          note: 'O imperativo em inglês usa o verbo puro, sem sujeito — igual ao português ' +
                '"limpe", "suba", "aperte".'
        },
        {
          icon: '⚠️', name: 'Safety advice',
          leaves: [
            { en: 'You shouldn\'t wear loose clothes.', pt: 'conselho (should/shouldn\'t)' },
            { en: 'A machine might catch it.', pt: 'perigo possível (might)' },
            { en: 'It could be dangerous.', pt: 'perigo possível (could)' },
            { en: 'You should wear your helmet.', pt: 'conselho positivo' }
          ],
          note: '<b>Might/could</b> descrevem o perigo possível. <b>Should/shouldn\'t</b> dão ' +
                'o conselho para evitar esse perigo.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'rigparts', icon: '🗼',
        title: 'Show the New Guy Around',
        goal: 'Reconhecer as partes da rig e os cargos da equipe de perfuração, e explicar ' +
              'esse conhecimento em voz alta para um trabalhador novo.',
        comp: 'Você nomeia o equipamento e os cargos de perfuração de cabeça, e conduz uma ' +
              'orientação verbal completa para um roustabout novo, fechando com um radio ' +
              'check-in confirmando que o poço está pronto.',
        live: [
          'Diagrama da rig — kick-off com o processo de fluido de perfuração',
          'Como um poço é perfurado — background da indústria',
          'Funções da equipe de perfuração'
        ],
        bridge: 'Na aula vocês viram o diagrama do livro e o processo de fluido de ' +
                'perfuração. Aqui você treina o vocabulário rápido e depois assume o papel do ' +
                'Kwame: orientar, DE VERDADE em voz alta, um roustabout novo que acabou de ' +
                'chegar na North Star Rig — não é o diagrama da aula.',
        nextLive: 'Semana 2 · Comparativos e superlativos + enough/too — problemas do fluido ' +
                  'de perfuração, pronúncia do R e e-mail pedindo licença.',
        ican: [
          'I can name the main parts of a drilling rig and the crew roles.',
          'I can give a new worker a full verbal walkthrough of the rig.',
          'I can do a short radio check-in reporting a well is ready.',
          'I can understand a colleague describing the rig floor by radio.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u6w1:cards:core',
                title: '📇 As oito palavras da unidade',
                sub: 'Definições e exemplos da North Star Rig — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u6w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'parts', icon: '🗼', name: 'Rig parts, rápido', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'og1u6w1:parts:1',
                title: '🗼 Complete:', main: 'The ___ supports the drilling equipment above the rig floor.',
                options: DF.shuffle([
                  { label: 'derrick', correct: true }, { label: 'mud pump' },
                  { label: 'rotary table' }, { label: 'pipe rack' }
                ]),
                expl: 'derrick = torre de perfuração, a estrutura alta.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u6w1:parts:2',
                title: '🗼 Complete:', main: 'The ___ turns the drill string.',
                options: DF.shuffle([
                  { label: 'rotary table', correct: true }, { label: 'mud screen' },
                  { label: 'derrick' }, { label: 'drill bit' }
                ]),
                expl: 'rotary table = mesa rotativa, gira a coluna de perfuração.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u6w1:parts:3',
                title: '🗼 Complete:', main: 'The ___ cuts through the rock underground.',
                options: DF.shuffle([
                  { label: 'drill bit', correct: true }, { label: 'mud pump' },
                  { label: 'monkey board' }, { label: 'pipe rack' }
                ]),
                expl: 'drill bit = broca, corta a rocha.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u6w1:match:parts',
                title: '🔗 Ligue a peça à função:',
                pairs: [
                  ['mud pump', 'pushes drilling mud down the well'],
                  ['pipe rack', 'stores pipes before use'],
                  ['mud screen', 'separates rock from the mud'],
                  ['monkey board', 'high platform on the derrick'],
                  ['drill string', 'connects the rig to the drill bit']
                ] }
            ]
          },

          {
            id: 'crew', icon: '👷', name: 'Drilling crew roles, rápido', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'og1u6w1:crew:1',
                title: '👷 Quem faz o quê:', main: 'Who supervises the whole drilling crew?',
                options: DF.shuffle([
                  { label: 'the toolpusher', correct: true }, { label: 'the roustabout' },
                  { label: 'the derrickman' }, { label: 'the roughneck' }
                ]),
                expl: 'toolpusher = supervisor de perfuração.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u6w1:crew:2',
                title: '👷 Quem faz o quê:', main: 'Who is the most junior person on the drilling crew?',
                options: DF.shuffle([
                  { label: 'the roustabout', correct: true }, { label: 'the toolpusher' },
                  { label: 'the driller' }, { label: 'the rig manager' }
                ]),
                expl: 'roustabout = função de entrada, a mais júnior.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u6w1:match:crew',
                title: '🔗 Ligue o cargo à função:',
                pairs: [
                  ['driller', 'controls the drilling equipment'],
                  ['roughneck', 'connects and disconnects drill pipe'],
                  ['rig manager', 'manages the whole rig'],
                  ['roustabout', 'does general labour jobs']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u6w1:type:crew1',
                title: '⌨️ Escreva o cargo:', main: 'The most junior rig worker → ___',
                answers: ['roustabout', 'a roustabout'], expl: 'roustabout = auxiliar de entrada.' }
            ]
          },

          {
            id: 'stress', icon: '🥁', name: 'Onde cai a força', tag: 'pronúncia',
            items: [
              { ui: 'stress', cat: 'pro', srsId: 'og1u6w1:str:derrick', word: 'derrick',
                pattern: 'Oo', decoys: ['oO'], syl: 'DE-rrick' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u6w1:str:toolpusher', word: 'toolpusher',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'TOOL-push-er' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u6w1:str:roughneck', word: 'roughneck',
                pattern: 'Oo', decoys: ['oO'], syl: 'ROUGH-neck' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u6w1:str:roustabout', word: 'roustabout',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'ROUS-ta-bout' }
            ]
          },

          {
            id: 'briefing', icon: '📻', name: 'Briefing da missão', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u6w1:read:briefing',
                title: '📻 A sua missão desta semana',
                textTitle: 'New crew, new well',
                readAloud: false,
                text:
                  'Uma pessoa nova chega na North Star Rig hoje — um roustabout de primeiro ' +
                  'dia, sem experiência nenhuma em rig de perfuração. O Kwame está ocupado ' +
                  'preparando o poço novo, e pede para VOCÊ (o driller experiente da vez) ' +
                  'mostrar a rig e apresentar a equipe para o novato.\n\n' +
                  'No fim, você faz um radio check-in rápido confirmando que o poço está ' +
                  'pronto para começar (spud).\n\n' +
                  'Não existe texto pronto para decorar — os passos seguintes te dão o ' +
                  'roteiro, mas a fala é toda sua.',
                nextLabel: 'Entendi a missão ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u6w1:dlg:radiocall',
                title: '📻 Você ouve pelo rádio, antes de começar',
                sub: 'Sem texto na tela. O Kwame te chama antes de você começar a orientação.',
                hideText: true,
                lines: [
                  { who: 'Kwame', en: "Control to driller — the new roustabout just arrived at the pipe rack." },
                  { who: 'Kwame', en: "Can you show him around and explain the crew roles? I'm busy with the mud pump." },
                  { who: 'Kwame', en: "When he's ready, radio me back — we need to spud this well today." }
                ],
                question: 'O que o Kwame pede para você fazer primeiro?',
                options: DF.shuffle([
                  { label: 'Show the new roustabout around and explain the crew roles', correct: true },
                  { label: 'Fix the mud pump' }, { label: 'Check the drill bit alone' },
                  { label: 'Spud the well immediately' }
                ]),
                expl: '"Can you show him around and explain the crew roles?" — é o seu ' +
                      'primeiro passo antes do radio check-in final.'
              }
            ]
          },

          {
            id: 'mission', icon: '🗣️', name: 'Missão: orientação do novo roustabout', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u6w1:mission:greet', unit: 6, waSec: 'Missão · Sua vez',
                title: '🗣️ Passo 1 — cumprimente e se apresente',
                prompt: 'O roustabout novo está parado no pipe rack, sem saber para onde ir: ' +
                        '"Hi... I\'m new here. Where do I go?" Cumprimente-o e diga que você ' +
                        'vai mostrar a rig para ele.',
                example: "Hi, welcome to North Star. I'm the driller — I'll show you around.",
                mustUse: ['welcome'] },
              { ui: 'build', cat: 'fun', srsId: 'og1u6w1:mission:tour', unit: 6, waSec: 'Missão · Sua vez',
                title: '🗣️ Passo 2 — mostre as três peças mais importantes',
                prompt: 'Aponte três peças da rig (derrick, drill bit, rotary table, mud ' +
                        'pump...) e diga o que cada uma faz, como se estivesse andando com ' +
                        'ele pelo rig floor.',
                example: 'This is the derrick — it supports all the drilling equipment. This ' +
                         'is the drill bit — it cuts through the rock. And this is the mud ' +
                         'pump — it sends mud down the well.',
                mustUse: ['derrick'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere a ' +
                      'pronúncia.' },
              { ui: 'build', cat: 'voc', srsId: 'og1u6w1:mission:crew', unit: 6, waSec: 'Missão · Sua vez',
                title: '🗣️ Passo 3 — apresente a hierarquia da equipe',
                prompt: 'Explique para o roustabout novo quem é quem na equipe, do mais ' +
                        'júnior ao mais sênior.',
                example: 'You are the roustabout — the most junior role. Above you is the ' +
                         'roughneck, then the driller, then the toolpusher, who supervises ' +
                         'everyone.',
                mustUse: ['toolpusher'] },
              { ui: 'build', cat: 'fun', srsId: 'og1u6w1:mission:radiocheck', unit: 6, waSec: 'Missão · Radio check-in',
                title: '📻 Passo 4 — feche com o radio check-in',
                prompt: 'A orientação terminou. Chame o Kwame pelo rádio e confirme que o ' +
                        'poço está pronto para começar (ready to spud).',
                example: "Driller to Control — the new roustabout is ready. We're ready to " +
                         "spud the well.",
                mustUse: ['ready'],
                expl: 'É o fechamento da missão — o mesmo tipo de chamada real que se faz na ' +
                      'rig antes de começar um poço novo.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u6w1+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 A orientação inteira, de cabeça',
                prompt: 'Refaça a orientação completa para um roustabout novo — peças da rig ' +
                        'e hierarquia da equipe — sem olhar o mapa mental.',
                example: "The derrick supports the equipment. The rotary table turns the " +
                         "drill string. The toolpusher supervises the whole crew.",
                mustUse: ['derrick'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de equipamento e equipe', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Check ___ before you start.', pool: 'og1RigPart', focus: 'equipamento',
                  ptHint: 'Confira ___ antes de começar.', n: 5 },
                { frame: "He's ___.", pool: 'og1CrewRole', focus: 'cargo',
                  ptHint: 'Ele é ___.', n: 5 }
              ],
              backchain: [
                { text: 'The {og1CrewRole} checks {og1RigPart} every shift.', ptHint: 'O(a)… confere… todo turno.' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'comparatives', icon: '📏',
        title: 'Fix the Mud, Fast',
        goal: 'Usar comparativos e superlativos e enough/too/too much/too many, e aplicar essa ' +
              'gramática numa correção real de problema reportado por rádio.',
        comp: 'Você compara pessoas e equipamento com -er/-est ou more/most, diz se algo é ' +
              '"adjetivo enough" ou "too adjetivo", e — ouvindo um relato de rádio — instrui ' +
              'o mud engineer a corrigir o fluido de perfuração usando comparativos.',
        live: [
          'Listening: problemas do fluido de perfuração — muito fino, muito grosso',
          'Comparativos e superlativos — regular -er/-est, more/most',
          'Pronúncia do R silencioso e pronunciado',
          'Ortografia — letra única x letra dobrada',
          'Modelo de e-mail pedindo licença'
        ],
        bridge: 'Na aula vocês ouviram o listening sobre problemas do fluido e viram a ' +
                'gramática dos comparativos e o modelo de e-mail. Aqui a gramática vem rápida ' +
                'e funda — depois você assume o papel de quem RESOLVE o problema: ouve um ' +
                'relato de rádio sobre o fluido e instrui a correção em voz alta, mais um ' +
                'e-mail de licença NOVO (secundário nesta semana).',
        nextLive: 'Semana 3 · Segurança + instruções — o pair work "Giving safety advice" e o ' +
                  'vocabulário de instruções com verbos no imperativo.',
        ican: [
          'I can use comparative and superlative adjectives correctly.',
          'I can use enough, too, too much and too many correctly.',
          'I can hear a problem reported by radio and instruct a fix.',
          'I can write an email asking for leave.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'compsup', icon: '📏', name: 'Comparative & superlative, rápido', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u6w2:read:comp',
                title: '📏 A regra num relance',
                textTitle: 'Comparative e superlative',
                readAloud: false,
                text:
                  'ADJETIVOS CURTOS (1 sílaba) → -er / the -est\n' +
                  'thick → thicker → the thickest\n' +
                  'old → older → the oldest\n\n' +
                  'TERMINA EM Y → -ier / the -iest\n' +
                  'heavy → heavier → the heaviest\n\n' +
                  'ADJETIVOS LONGOS (2+ sílabas) → more / the most\n' +
                  'experienced → more experienced → the most experienced\n' +
                  'senior → more senior → the most senior\n\n' +
                  'IRREGULARES\n' +
                  'good → better → the best\n' +
                  'bad → worse → the worst\n\n' +
                  'A ARMADILHA DO BRASILEIRO: com adjetivos longos, nunca junte "-er" ao ' +
                  'adjetivo. É "more experienced", nunca "experiencier".',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w2:comp:1',
                title: '📏 Complete:', main: 'This mud is ___ than yesterday\'s. (thick)',
                options: DF.shuffle([
                  { label: 'thicker', correct: true }, { label: 'more thick' },
                  { label: 'thickest' }, { label: 'thickier' }
                ]),
                expl: 'thick é curto → thicker.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w2:comp:2',
                title: '📏 Complete:', main: 'Kwame is ___ than the new roustabout. (experienced)',
                options: DF.shuffle([
                  { label: 'more experienced', correct: true }, { label: 'experiencier' },
                  { label: 'experiencedest' }, { label: 'more experience' }
                ]),
                expl: 'experienced é longo → more experienced.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w2:comp:3',
                title: '📏 Superlativo:', main: 'The toolpusher is ___ person on this crew. (senior)',
                options: DF.shuffle([
                  { label: 'the most senior', correct: true }, { label: 'the seniorest' },
                  { label: 'more senior' }, { label: 'the senior' }
                ]),
                expl: 'senior é longo → the most senior.' },
              { ui: 'match', cat: 'gra', srsId: 'og1u6w2:match:comp',
                title: '🔗 Ligue o adjetivo à forma comparativa:',
                pairs: [
                  ['heavy', 'heavier'], ['thin', 'thinner'],
                  ['dangerous', 'more dangerous'], ['bad', 'worse'],
                  ['fast', 'faster']
                ] }
            ]
          },

          {
            id: 'enoughtoo', icon: '⚖️', name: 'Enough & too, rápido', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u6w2:read:enoughtoo',
                title: '⚖️ Enough vs. too',
                textTitle: 'Nem de menos, nem demais',
                readAloud: false,
                text:
                  'ENOUGH (o suficiente) → vem DEPOIS do adjetivo.\n' +
                  'The mud is not thick enough. (não está grosso o suficiente)\n' +
                  'The pipe is heavy enough. (está pesado o suficiente)\n\n' +
                  'TOO (demais) → vem ANTES do adjetivo.\n' +
                  'The mud is too thin. (está fino demais)\n\n' +
                  'TOO MUCH (incontável) e TOO MANY (contável)\n' +
                  'There is too much water in the mud. (água = incontável)\n' +
                  'There are too many pipes on the rack. (pipes = contável)\n\n' +
                  'A ARMADILHA DO BRASILEIRO: "enough" nunca vem antes do adjetivo em ' +
                  'inglês — é o oposto da ordem mais natural em português.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w2:et:1',
                title: '⚖️ Complete:', main: 'The mud is too ___. Add some clay.',
                options: DF.shuffle([
                  { label: 'thin', correct: true }, { label: 'thin enough' },
                  { label: 'enough thin' }, { label: 'thinly' }
                ]),
                expl: 'too vem antes do adjetivo: too thin.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w2:et:2',
                title: '⚖️ Complete:', main: 'The pipe is not strong ___ for this well.',
                options: DF.shuffle([
                  { label: 'enough', correct: true }, { label: 'too' },
                  { label: 'more' }, { label: 'most' }
                ]),
                expl: 'enough vem depois do adjetivo: strong enough.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w2:et:3',
                title: '⚖️ Much ou many?', main: 'There is too ___ water in the mud.',
                options: DF.shuffle([
                  { label: 'much', correct: true }, { label: 'many' },
                  { label: 'more' }, { label: 'a lot' }
                ]),
                expl: 'water é incontável → too much.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w2:et:4',
                title: '⚖️ Much ou many?', main: 'There are too ___ roustabouts on this shift.',
                options: DF.shuffle([
                  { label: 'many', correct: true }, { label: 'much' },
                  { label: 'enough' }, { label: 'more' }
                ]),
                expl: 'roustabouts é contável (plural) → too many.' }
            ]
          },

          {
            id: 'sound', icon: '🔤', name: 'O R e a letra dobrada', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'og1u6w2:read:r',
                title: '🔤 R silencioso x R pronunciado',
                textTitle: 'Quando o R soa e quando não soa',
                readAloud: false,
                text:
                  'Em inglês britânico, o R depois de vogal e antes de consoante (ou no fim ' +
                  'da palavra) costuma ser SILENCIOSO: derrick soa "DE-rick" com R fraco, ' +
                  'e worker termina sem o R forte do português.\n\n' +
                  'Mas quando o R vem ANTES de uma vogal, ele é pronunciado com força: ' +
                  'rotary, roughneck, rig.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u6w2:r:1',
                title: '🔤 O R desta palavra é forte ou fraco?', main: 'rotary',
                options: DF.shuffle([
                  { label: 'forte (R antes de vogal)', correct: true },
                  { label: 'fraco (R silencioso)' }
                ]),
                expl: 'rotary começa com R antes de vogal → forte.' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u6w2:r:2',
                title: '🔤 O R desta palavra é forte ou fraco?', main: 'derrick',
                options: DF.shuffle([
                  { label: 'fraco (R silencioso)', correct: true },
                  { label: 'forte (R antes de vogal)' }
                ]),
                expl: 'no derrick, o segundo R vem antes de consoante/fim — mais fraco.' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u6w2:drl:comp', unit: 6, waSec: 'Drill · comparativos',
                title: '🔁 Drill 1 — o adjetivo troca', focus: 'comparativo',
                frame: 'This one is ___ than that one.', ptHint: 'Este é ___ do que aquele.',
                slots: ['thicker', 'heavier', 'faster', 'more experienced', 'better', 'more senior'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u6w2:drl:et', unit: 6, waSec: 'Drill · enough/too',
                title: '🔁 Drill 2 — enough ou too', focus: 'enough / too',
                frame: 'The mud is ___.', ptHint: 'O fluido está ___.',
                slots: ['too thin', 'too thick', 'thick enough', 'not thin enough'] }
            ]
          },

          {
            id: 'radiobrief', icon: '📻', name: 'Você ouve pelo rádio', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u6w2:dlg:mudreport',
                title: '📻 Relato do mud pump operator',
                sub: 'Sem texto na tela — ouça (ou leia) com atenção antes de decidir a instrução.',
                hideText: true,
                lines: [
                  { who: 'Operator', en: "Driller, this is the mud pump — the mud is too thin. It's not thick enough to carry the rock up." },
                  { who: 'Operator', en: 'What do you want us to do?' }
                ],
                question: 'Qual é exatamente o problema relatado?',
                options: DF.shuffle([
                  { label: 'The mud is too thin — not thick enough', correct: true },
                  { label: 'The mud is too thick' },
                  { label: 'There is not enough mud' },
                  { label: 'The mud pump is broken' }
                ]),
                expl: '"The mud is too thin. It\'s not thick enough to carry the rock up."'
              }
            ]
          },

          {
            id: 'mission', icon: '🗣️', name: 'Missão: corrija o fluido pelo rádio', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u6w2:mission:instruct', unit: 6, waSec: 'Missão · Sua vez',
                title: '🗣️ Passo 1 — instrua o mud engineer',
                prompt: 'Você acabou de ouvir que o fluido está muito fino. Fale a instrução ' +
                        'para o mud engineer corrigir, usando um comparativo (make it ' +
                        'thicker) e dizendo o que adicionar.',
                example: 'Make the mud thicker. Add some clay — it needs to be thicker than it is now.',
                mustUse: ['thicker'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere a ' +
                      'pronúncia.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u6w2:mission:confirm', unit: 6, waSec: 'Missão · Confirmação',
                title: '🗣️ Passo 2 — confirme quando estiver corrigido',
                prompt: 'Alguns minutos depois, confirme pelo rádio que o fluido agora está ' +
                        'bom, usando "enough".',
                example: "Driller to Control — the mud is thick enough now. We can continue drilling.",
                mustUse: ['enough'],
                expl: 'É o fechamento real de um problema de fluido reportado — a mesma ' +
                      'sequência que acontece de verdade numa rig.' }
            ]
          },

          {
            id: 'email', icon: '✉️', name: 'E-mail pedindo licença', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u6w2:read:email',
                title: '✉️ O padrão do e-mail',
                textTitle: 'Asking for leave — the pattern',
                readAloud: false,
                text:
                  'Um e-mail pedindo licença segue quatro passos:\n\n' +
                  '1. Diga o TIPO de licença (sick leave, annual leave, emergency leave).\n' +
                  '2. Diga o MOTIVO.\n' +
                  '3. Dê as DATAS.\n' +
                  '4. Agradeça.\n\n' +
                  'Exemplo — Sofia pedindo emergency leave:\n\n' +
                  '"Dear Toolpusher, I am writing to ask for emergency leave. My father is in ' +
                  'hospital and I need to travel home. I need leave from 14 to 17 August. ' +
                  'Thank you for your understanding. Sofia."',
                nextLabel: 'Entendi o padrão ▸' },
              { ui: 'build', cat: 'fun', srsId: 'og1u6w2:build:email', unit: 6, waSec: 'E-mail de licença',
                title: '🗣️ Monte o seu e-mail de licença',
                prompt: 'Invente um motivo e diga em voz alta: tipo de licença, motivo, ' +
                        'datas e agradecimento — os quatro passos.',
                example: "I am writing to ask for sick leave. I have a fever and I cannot " +
                         "work. I need leave from 3 to 5 September. Thank you for your " +
                         "understanding.",
                mustUse: ['leave'],
                expl: 'É a mesma estrutura do modelo da aula, mas com um cenário seu.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Superlativos difíceis', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u6w2+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Quem é o mais sênior?',
                prompt: 'Fale sobre toda a hierarquia da equipe, do mais júnior ao mais sênior, ' +
                        'usando superlativos.',
                example: "The roustabout is the most junior. The toolpusher is the most senior.",
                mustUse: ['the most'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de comparativos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'This one is ___ than that one.', pool: 'og1Adj', focus: 'comparativo',
                  ptHint: 'Este é ___ do que aquele.', n: 5 }
              ],
              backchain: [
                { text: 'The mud is {og1Adj} today.', ptHint: 'O fluido está … hoje.' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'safety', icon: '⚠️',
        title: 'Call It Out, Now',
        goal: 'Entender e dar instruções com verbos no imperativo, e dar um alerta de ' +
              'segurança em tempo real sobre um perigo acontecendo agora, usando might/could ' +
              'e should/shouldn\'t.',
        comp: 'Você entende e dá instruções simples com verbos de ação, e — vendo um colega ' +
              'prestes a fazer algo inseguro — solta o alerta de segurança na hora certa, ' +
              'sozinho, sem esperar ninguém perguntar.',
        live: [
          'Pair work "Giving safety advice" — conselhos sobre situações perigosas no manual',
          'Vocabulário de instruções — verbos no imperativo',
          'Pair work: Student A dá instruções, Student B mima a ação',
          'Projeto — questionário sobre se perfuração é um bom trabalho para você'
        ],
        bridge: 'Na aula vocês fizeram o "Giving safety advice" em DUPLA, olhando figuras. ' +
                'Aqui é diferente: a situação está acontecendo AGORA, na sua frente, e você ' +
                'precisa gritar o alerta na hora — não é um quiz de figura, é um call-out de ' +
                'verdade — mais vocabulário de instruções novo.',
        nextLive: 'Semana 4 · Revisão + Key Words — checklist, teste de linguagem e o ' +
                  '"Communication" em dupla, casando cargos e equipamentos.',
        ican: [
          'I can understand and give simple instructions.',
          'I can use might and could to describe possible danger.',
          "I can use should and shouldn't to give safety advice.",
          'I can call out a safety warning in real time, without being asked.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'imperative', icon: '✋', name: 'Instructions — imperative verbs', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u6w3:read:imp',
                title: '✋ O imperativo em inglês',
                textTitle: 'Dando instruções',
                readAloud: false,
                text:
                  'Instruções em inglês usam o verbo puro, sem sujeito — como "limpe", ' +
                  '"suba", "aperte" em português.\n\n' +
                  'Clean the mud screen.\nClimb the derrick.\nTighten the bolt.\n' +
                  'Unload the pipe rack.\nConnect the hose.\nInspect the drill bit.\n\n' +
                  'Para instrução negativa, use Don\'t + verbo:\n' +
                  "Don't touch the drill bit. It's hot.\n" +
                  "Don't climb without a helmet.",
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w3:imp:1',
                title: '✋ Complete a instrução:', main: '___ the mud screen every four hours.',
                options: DF.shuffle([
                  { label: 'Clean', correct: true }, { label: 'Cleans' },
                  { label: 'Cleaning' }, { label: 'To clean' }
                ]),
                expl: 'imperativo = verbo puro: Clean.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w3:imp:2',
                title: '✋ Negativa:', main: "___ touch the drill bit — it's hot.",
                options: DF.shuffle([
                  { label: "Don't", correct: true }, { label: "Doesn't" },
                  { label: 'Not' }, { label: "Isn't" }
                ]),
                expl: "instrução negativa = Don't + verbo." },
              { ui: 'match', cat: 'voc', srsId: 'og1u6w3:match:imp',
                title: '🔗 Ligue a instrução ao verbo certo:',
                pairs: [
                  ['___ the pipe rack', 'Unload'], ['___ the derrick', 'Climb'],
                  ['___ the bolt', 'Tighten'], ['___ the hose', 'Connect'],
                  ['___ the drill bit', 'Inspect']
                ] }
            ]
          },

          {
            id: 'mime', icon: '🎭', name: 'Ouça e execute (mentalmente)', tag: 'listening',
            items: [
              { ui: 'choice', cat: 'fun', srsId: 'og1u6w3:mime:1',
                title: '🎭 Você ouve a instrução — o que fazer?',
                tts: 'Tighten the bolt.', ttsLabel: '🔊 Ouvir de novo', autoPlay: true,
                showIfNoTTS: 'Tighten the bolt.',
                options: DF.shuffle([
                  { label: 'apertar um parafuso', correct: true },
                  { label: 'limpar a peneira' }, { label: 'subir a torre' },
                  { label: 'conectar a mangueira' }
                ]),
                expl: 'tighten = apertar.', feedbackTts: 'Tighten the bolt.' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u6w3:mime:2',
                title: '🎭 E esta?',
                tts: 'Climb the derrick.', ttsLabel: '🔊 Ouvir de novo', autoPlay: true,
                showIfNoTTS: 'Climb the derrick.',
                options: DF.shuffle([
                  { label: 'subir a torre', correct: true },
                  { label: 'descarregar tubos' }, { label: 'apertar um parafuso' },
                  { label: 'inspecionar a broca' }
                ]),
                expl: 'climb = subir.', feedbackTts: 'Climb the derrick.' }
            ]
          },

          {
            id: 'advice', icon: '⚠️', name: 'Might / could / should', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u6w3:read:advice',
                title: '⚠️ Perigo possível x conselho',
                textTitle: 'Might/could vs. should/shouldn\'t',
                readAloud: false,
                text:
                  'MIGHT / COULD → descrevem um PERIGO POSSÍVEL (não é certo, é possível).\n' +
                  'A machine might catch loose clothes.\n' +
                  'The pipe could fall if it is not secured.\n\n' +
                  'SHOULD / SHOULDN\'T → dão o CONSELHO para evitar o perigo.\n' +
                  "You shouldn't wear loose clothes near the machines.\n" +
                  'You should wear your helmet on the rig floor.\n\n' +
                  'Num alerta em tempo real, o mais comum é ir direto ao should/shouldn\'t — ' +
                  'não há tempo para o perigo todo explicado.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w3:adv:1',
                title: '⚠️ Complete:', main: 'You ___ wear loose clothes near the rotary table.',
                options: DF.shuffle([
                  { label: "shouldn't", correct: true }, { label: 'should' },
                  { label: "isn't" }, { label: "don't" }
                ]),
                expl: "conselho negativo = shouldn't." },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w3:adv:2',
                title: '⚠️ Complete:', main: 'A loose pipe ___ fall from the pipe rack.',
                options: DF.shuffle([
                  { label: 'might', correct: true }, { label: 'should' },
                  { label: "shouldn't" }, { label: 'must' }
                ]),
                expl: 'might = perigo possível, não conselho.' }
            ]
          },

          {
            id: 'radiobrief', icon: '⚠️', name: 'Você vê acontecendo agora', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u6w3:dlg:hazardnow',
                title: '⚠️ Você está no rig floor',
                sub: 'Não é uma figura no manual — isso está acontecendo NA SUA FRENTE, agora.',
                lines: [
                  { who: 'Cena', en: 'A new roughneck is walking towards the rotary table — ' +
                        'it is turning fast — and he is not wearing gloves. He is about to reach in.' }
                ],
                question: 'Qual é o risco exato desta cena?',
                options: DF.shuffle([
                  { label: 'He is about to touch the fast-turning table without gloves', correct: true },
                  { label: 'He is carrying a heavy pipe' },
                  { label: 'He is climbing the derrick' },
                  { label: 'He is smoking near the tanks' }
                ]),
                expl: 'A mesa rotativa girando rápido + mão sem luva prestes a alcançar = o ' +
                      'perigo imediato.'
              }
            ]
          },

          {
            id: 'mission', icon: '🗣️', name: 'Missão: alerta em tempo real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u6w3:mission:callout', unit: 6, waSec: 'Missão · Call-out',
                title: '🗣️ Grite o alerta AGORA',
                prompt: 'O roughneck está a segundos de colocar a mão na mesa rotativa sem ' +
                        'luvas. Não há tempo para explicar — grite o alerta imediato, urgente, ' +
                        'usando should/shouldn\'t ou stop.',
                example: "Stop! Don't touch the table — it's turning! You shouldn't reach in without gloves!",
                mustUse: ['stop'],
                expl: 'O app não sabe a sua resposta — mande o áudio. Aqui o que importa é a ' +
                      'urgência real da fala, não uma frase decorada.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u6w3:mission:explain', unit: 6, waSec: 'Missão · Depois do alerta',
                title: '🗣️ Depois do susto, explique o porquê',
                prompt: 'O roughneck parou a tempo. Agora, calmamente, explique o perigo que ' +
                        'quase aconteceu e o que ele deveria fazer da próxima vez.',
                example: "That table could catch your hand — it's dangerous. You should always wear gloves near it.",
                mustUse: ['should'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Mais uma situação perigosa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u6w3+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Invente a situação e o call-out',
                prompt: 'Invente uma situação perigosa acontecendo AGORA na rig e grite o ' +
                        'alerta imediato, na sequência de urgência que treinou.',
                example: "Stop! A hose is leaking near the mud pump — you shouldn't work there right now!",
                mustUse: ['stop'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de instruções', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___', pool: 'og1Instruction', focus: 'instrução',
                  ptHint: 'instrução', n: 5 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Shift Handover',
        goal: 'Revisar comparativos/superlativos, enough/too e vocabulário de perfuração, e ' +
              'fechar o mês com um handover de turno falado, de verdade.',
        comp: 'Numa revisão geral, você mistura comparativos, enough/too e vocabulário de ' +
              'perfuração sem errar, e entrega um handover completo de turno em voz alta — ' +
              'cargos, equipamento e um problema resolvido.',
        live: [
          'Checklist de autoavaliação',
          'Key words da unidade',
          'Language test — comparativos, superlativos, ortografia',
          'Communication — pair work casando cargos e equipamentos com descrições'
        ],
        bridge: 'Na aula vocês fizeram o "Communication" em dupla, casando cargos e ' +
                'equipamentos com descrições. Aqui a revisão é rápida, e o fecho do mês é o ' +
                'handover de turno SOLO: você é o driller que sai, e passa a situação da rig ' +
                'para quem entra — de verdade, em voz alta, do jeito que se faz numa rig real.',
        nextLive: 'Unit 7. Começa na segunda-feira seguinte.',
        ican: [
          'I can use comparatives and superlatives together without stopping to think.',
          'I can use enough and too correctly.',
          'I can name the parts of a drilling rig and the crew roles.',
          'I can give a full spoken shift handover, on my own.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u6w4:cards:review',
                title: '🔑 Revisão — as treze palavras do mês',
                sub: 'Flashcard de revisão: as oito principais + as cinco extras.',
                cards: WORDS.concat(EXTRA_WORDS).map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'mix', icon: '📝', name: 'Revisão geral (language test)', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w4:mix:1',
                title: '📝 Complete:', main: 'Kwame is ___ than the new roustabout. (senior)',
                options: DF.shuffle([
                  { label: 'more senior', correct: true }, { label: 'seniorer' },
                  { label: 'the most senior' }, { label: 'senior enough' }
                ]),
                expl: 'senior é longo → more senior.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w4:mix:2',
                title: '📝 Complete:', main: 'This bit is not sharp ___. Replace it.',
                options: DF.shuffle([
                  { label: 'enough', correct: true }, { label: 'too' },
                  { label: 'more' }, { label: 'most' }
                ]),
                expl: 'enough vem depois do adjetivo.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u6w4:mix:3',
                title: '📝 Superlativo:', main: 'The toolpusher is ___ person on the rig. (experienced)',
                options: DF.shuffle([
                  { label: 'the most experienced', correct: true },
                  { label: 'the experiencedest' }, { label: 'more experienced' },
                  { label: 'experienced enough' }
                ]),
                expl: 'experienced é longo → the most experienced.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u6w4:mix:vocab',
                title: '📝 Complete:', main: 'The ___ pushes drilling mud down the well.',
                options: DF.shuffle([
                  { label: 'mud pump', correct: true }, { label: 'mud screen' },
                  { label: 'rotary table' }, { label: 'derrick' }
                ]),
                expl: 'mud pump = bomba de lama.' },
              { ui: 'match', cat: 'fun', srsId: 'og1u6w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['derrick', 'the tall tower that supports the equipment'],
                  ['viscosity', 'how thick or thin a liquid is'],
                  ['toolpusher', 'supervises the whole drilling crew'],
                  ['roustabout', 'the most junior rig worker']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u6w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'The mud is not thick enough',
                expl: 'The mud is not + adjetivo + enough.' }
            ]
          },

          {
            id: 'communication', icon: '🔗', name: 'Communication — versão solo', tag: 'vocabulário',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'og1u6w4:match:comm',
                title: '🔗 Ligue o cargo/equipamento à descrição (versão solo):',
                pairs: [
                  ['derrickman', 'works high on the monkey board'],
                  ['mud pump', 'sends drilling mud down the well'],
                  ['rig manager', 'manages the whole rig'],
                  ['pipe rack', 'stores pipes before they go down the well'],
                  ['roughneck', 'connects and disconnects the drill pipe']
                ] }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 6, idx: 0,
                statement: 'I can name the main parts of a drilling rig and the crew roles.',
                ptHint: 'Eu consigo nomear as principais partes da rig e os cargos da equipe.' },
              { ui: 'selfcheck', cat: 'fun', unit: 6, idx: 1,
                statement: 'I can use comparative and superlative adjectives correctly.',
                ptHint: 'Eu consigo usar comparativo e superlativo de adjetivos corretamente.' },
              { ui: 'selfcheck', cat: 'fun', unit: 6, idx: 2,
                statement: 'I can use enough, too, too much and too many correctly.',
                ptHint: 'Eu consigo usar enough, too, too much e too many corretamente.' },
              { ui: 'selfcheck', cat: 'fun', unit: 6, idx: 3,
                statement: 'I can give and understand simple instructions.',
                ptHint: 'Eu consigo dar e entender instruções simples.' },
              { ui: 'selfcheck', cat: 'fun', unit: 6, idx: 4,
                statement: "I can call out a safety warning in real time, on my own.",
                ptHint: 'Eu consigo dar um alerta de segurança em tempo real, sozinho.' }
            ]
          },

          {
            id: 'mission', icon: '🗣️', name: 'Missão: handover de turno', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u6w4:read:handover',
                title: '📻 O fecho do mês',
                textTitle: 'End of shift, North Star Rig',
                readAloud: false,
                text:
                  'Seu turno como driller está acabando. O próximo driller chega em cinco ' +
                  'minutos, e você precisa entregar a situação da drilling floor por completo: ' +
                  'quem está trabalhando, o equipamento, e qualquer problema do dia (por ' +
                  'exemplo, o fluido que ficou fino demais mais cedo).\n\n' +
                  'Não é um quiz — é um handover real de turno.',
                nextLabel: 'Pronto para o handover ▸' },
              { ui: 'build', cat: 'fun', srsId: 'og1u6w4:mission:handover', unit: 6, waSec: 'Missão · Handover',
                title: '🏆 Faça o handover completo',
                prompt: 'Fale para o próximo driller: quem está na equipe agora (cargos), o ' +
                        'equipamento em uso, um comparativo sobre a equipe, e o problema do ' +
                        'fluido que foi resolvido hoje.',
                example: "The roughnecks are working on the drill string. The mud pump is " +
                         "running fine now — the mud was too thin this morning, but it's " +
                         "thick enough now. Kwame is more experienced than the new roustabout, " +
                         "who is still learning.",
                mustUse: ['enough'],
                expl: 'Mande o áudio — o professor confere pronúncia e as formas gramaticais ' +
                      'do mês inteiro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Revisão sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u6w4+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre a equipe de perfuração da North Star Rig: ' +
                        'cargos, um comparativo entre dois deles, e um conselho de segurança.',
                example: "The driller is more senior than the roustabout. The toolpusher " +
                         "supervises everyone. You shouldn't work near the rotary table " +
                         "without gloves.",
                expl: 'É o resumo falado de tudo que a unidade ensinou.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
