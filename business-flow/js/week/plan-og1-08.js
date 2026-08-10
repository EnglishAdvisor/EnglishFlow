/* ENGLISH FLOW — week/plan-og1-08.js
   OIL & GAS 1 · UNIT 8 "Working Offshore" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Personagens, textos e diálogos do livro
                      (inclusive "Dave Bristow" e afins) nunca aparecem aqui.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Universo: NORTH STAR RIG + North Star Downstream Plant, a mesma tripulação
   das Units 1-7 — Erik (Norwegian), Fatima (Kuwaiti), Priya (Indian), Tomás
   (Brazilian welder), Sofia (Mexican geologist), Kwame (Ghanaian driller),
   Amara Chukwu (Nigerian safety officer, Unit 4). Esta unidade é sobre
   TRABALHAR OFFSHORE — chegada de helicóptero, briefing de segurança, layout
   da plataforma, medição/ajuste de variáveis, eletricidade, e sobretudo o
   alfabeto/rádio internacional — então quase todo o elenco já estabelecido
   protagoniza; nenhum personagem novo foi necessário.

   ═══ NÍVEL ═══ OG1 = A1/A2. Instruções em PT-BR, frases curtas e diretas.

   ═══ PADRÃO PEDAGÓGICO DESTA UNIDADE — prioridade do cliente ═══
   Ordem de prioridade da competência de day-off: 1) SPEAKING, 2) LISTENING,
   3) leitura/escrita por último. Gramática/vocabulário são meio, não fim —
   sucesso é o aluno CONSEGUIR fazer a tarefa real (dar/responder uma chamada
   de rádio, relatar uma medição, comparar plataformas em voz alta), não só
   passar num quiz de gramática.

   O conteúdo ao vivo desta unidade traz RADIOTELEFONIA (alfabeto fonético
   internacional + etiqueta de chamada — "over", "copy", "say again", uso do
   botão PTT) — um presente para essa pedagogia. Por isso cada semana escala
   rápido no vocabulário/gramática e fecha em 1-2 steps de SPEAKING formando
   uma missão coesa, com pelo menos um listening por semana e leitura/escrita
   em segundo plano.

     Semana 1 · Offshore hazards + safety check ... vocabulário de plataforma
                                             e riscos, MISSÃO: pre-flight radio
                                             check-in no helideck
     Semana 2 · Comparatives + gauges ........ comparativo/superlativo +
                                             as...as, pressão/temperatura/
                                             fluxo, MISSÃO: relatório de rádio
                                             de leitura anormal de medidor
     Semana 3 · THE RADIO ALPHABET (flagship) . alfabeto fonético completo +
                                             eletricidade/circuitos, MISSÃO:
                                             simulação de chamada de rádio
                                             completa — a semana mais rica
     Semana 4 · Review + Key Words ........... revisão mista + consonant
                                             clusters + MISSÃO: comparação
                                             solo de duas plataformas por rádio

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
    DF.WGEN.POOLS.og1OffshoreArea = ['the accommodation area', 'the process area',
      'the wellhead area', 'the utilities area', 'the helideck', 'the muster point'];
    DF.WGEN.POOLS.og1Hazard8 = ['a slippery deck', 'a loose cable', 'high noise levels',
      'moving machinery', 'a gas leak', 'a falling object'];
    DF.WGEN.POOLS.og1GaugeVar = ['pressure', 'temperature', 'level', 'flow'];
    DF.WGEN.POOLS.og1GaugeVerb = ['adjust', 'diagnose', 'inspect', 'maintain', 'repair', 'test'];
    DF.WGEN.POOLS.og1RadioLetter = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot',
      'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar',
      'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey',
      'X-ray', 'Yankee', 'Zulu'];
    DF.WGEN.POOLS.og1CircuitTerm = ['current', 'resistance', 'voltage', 'a switch',
      'a circuit breaker', 'a fuse'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  // As palavras são o tema do livro (plataforma offshore, medição, rádio); as
  // definições e TODOS os exemplos abaixo são autorais, escritos no universo
  // North Star Rig.
  const WORDS = [
    { en: 'accommodation area', pt: 'área de alojamento',
      def: 'the part of the platform where workers sleep and eat',
      ex: 'The accommodation area is on the top deck, away from the process area.' },
    { en: 'process area', pt: 'área de processo',
      def: 'the part of the platform where oil and gas are separated and treated',
      ex: 'Nobody enters the process area without a hard hat and ear protectors.' },
    { en: 'wellhead area', pt: 'área da cabeça de poço',
      def: 'the part of the platform where the well equipment is located',
      ex: 'The wellhead area is the noisiest part of the North Star Rig.' },
    { en: 'muster point', pt: 'ponto de encontro (emergência)',
      def: 'a safe location where workers gather in an emergency',
      ex: 'If the alarm sounds, go to the muster point immediately.' },
    { en: 'gauge', pt: 'medidor',
      def: 'an instrument that shows a reading, such as pressure or temperature',
      ex: 'Fatima checks the pressure gauge every hour in the control room.' },
    { en: 'flow', pt: 'fluxo / vazão',
      def: 'the amount of liquid or gas moving through a pipe over time',
      ex: 'The flow through the main line is normal this morning.' },
    { en: 'adjust', pt: 'ajustar',
      def: 'to change something slightly to make it correct',
      ex: 'Erik needs to adjust the valve to lower the pressure.' },
    { en: 'diagnose', pt: 'diagnosticar',
      def: 'to find out the cause of a problem',
      ex: 'Kwame diagnosed the problem in less than five minutes.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'helideck ·+', pt: 'heliponto',
      def: 'the platform area where helicopters land and take off',
      ex: 'New workers get a safety briefing before they leave the helideck.' },
    { en: 'briefing ·+', pt: 'reunião informativa (breve)',
      def: 'a short meeting that gives important information before a task',
      ex: 'Amara gives a safety briefing to every new arrival.' },
    { en: 'current ·+', pt: 'corrente (elétrica)',
      def: 'the flow of electricity through a wire or circuit',
      ex: 'Too much current can damage the control panel.' },
    { en: 'voltage ·+', pt: 'voltagem',
      def: 'the force that pushes electric current through a circuit',
      ex: 'Check the voltage before you connect a new device.' },
    { en: 'circuit breaker ·+', pt: 'disjuntor',
      def: 'a switch that stops the current automatically if there is a fault',
      ex: 'The circuit breaker tripped when the pump overloaded.' }
  ];

  DF.PLAN.og1[8] = {
    unit: 8,
    title: 'Working Offshore',
    subtitle: 'Chegar, se orientar, falar no rádio',
    icon: '📡',

    mindmap: {
      center: 'Working Offshore',
      sub: 'Do heliponto ao rádio: viver e trabalhar numa plataforma',
      branches: [
        {
          icon: '🗺️', name: 'Platform layout',
          leaves: WORDS.filter(function (w) {
            return ['accommodation area', 'process area', 'wellhead area', 'muster point'].indexOf(w.en) >= 0;
          }).map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) { return w.en.indexOf('helideck') >= 0 || w.en.indexOf('briefing') >= 0; })
              .map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'Quatro áreas fixas em toda plataforma offshore: <b>accommodation</b> ' +
                '(dormir/comer), <b>process</b> (tratar óleo/gás), <b>wellhead</b> (poço), ' +
                '<b>utilities</b> (energia/água). Saber onde fica cada uma é segurança básica.'
        },
        {
          icon: '📏', name: 'Comparatives & as...as',
          leaves: [
            { en: 'louder → the loudest', pt: 'regular curto (-er/-est)' },
            { en: 'more dangerous → the most dangerous', pt: 'longo → more/most' },
            { en: 'good → better → the best', pt: 'irregular' },
            { en: 'bad → worse → the worst', pt: 'irregular' },
            { en: 'as loud as / not as loud as', pt: 'igualdade / desigualdade' }
          ],
          note: '<b>As...as</b> compara igualdade (<b>as loud as</b>), <b>not as...as</b> ' +
                'compara desigualdade sem usar "-er" — as duas formas convivem com ' +
                'comparativo e superlativo normais.'
        },
        {
          icon: '📊', name: 'Measuring & adjusting',
          leaves: WORDS.filter(function (w) { return ['gauge', 'flow', 'adjust', 'diagnose'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat([
              { en: 'pressure (bar / kPa)', pt: 'pressão' },
              { en: 'temperature (°C)', pt: 'temperatura' },
              { en: 'level (%)', pt: 'nível' },
              { en: 'inspect / maintain / repair / test', pt: 'verbos de manutenção' }
            ]),
          note: 'Cada variável tem sua unidade: pressure em <b>bar</b>/<b>kPa</b>, ' +
                'temperature em <b>°C</b>, level em <b>%</b>. O verbo certo depende da ' +
                'situação: <b>adjust</b> corrige, <b>diagnose</b> descobre a causa, ' +
                '<b>inspect</b> verifica, <b>repair</b> conserta.'
        },
        {
          icon: '⚡', name: 'Electricity & circuits',
          leaves: EXTRA_WORDS.filter(function (w) {
            return ['current ·+', 'voltage ·+', 'circuit breaker ·+'].indexOf(w.en) >= 0;
          }).map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat([
              { en: 'resistance', pt: 'resistência' },
              { en: 'a switch', pt: 'um interruptor' },
              { en: 'a fuse', pt: 'um fusível' }
            ]),
          note: 'Vocabulário de circuito elétrico básico: <b>current</b> flui, ' +
                '<b>resistance</b> dificulta o fluxo, <b>voltage</b> empurra a corrente, e ' +
                'um <b>circuit breaker</b>/<b>fuse</b> corta tudo se algo der errado.'
        },
        {
          icon: '🔤', name: 'The radio alphabet',
          leaves: [
            { en: 'Alpha, Bravo, Charlie…', pt: 'alfabeto fonético internacional' },
            { en: 'Over', pt: 'terminei de falar, sua vez' },
            { en: 'Copy / Copy that', pt: 'recebido, entendi' },
            { en: 'Say again', pt: 'pode repetir?' },
            { en: 'Roger', pt: 'confirmado' }
          ],
          note: 'O alfabeto fonético existe para NÃO CONFUNDIR letras parecidas no rádio ' +
                '("B" e "D" soam parecido; "Bravo" e "Delta" não). "Over" passa a vez, ' +
                '"copy"/"roger" confirmam que a mensagem chegou.'
        },
        {
          icon: '🥁', name: 'Consonant clusters',
          leaves: [
            { en: 'str- (strong, structure)', pt: 'três consoantes seguidas' },
            { en: 'spl- (splash, split)', pt: 'grupo consonantal' },
            { en: 'scr- (scratch, screen)', pt: 'grupo consonantal' }
          ],
          note: 'Grupos de consoantes juntas (<b>str-</b>, <b>spl-</b>, <b>scr-</b>) não ' +
                'existem juntos assim em português — o segredo é NÃO inserir uma vogal ' +
                'entre elas.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'offshore-hazards', icon: '🗺️',
        title: 'Arriving at North Star',
        goal: 'Nomear as áreas de uma plataforma offshore e identificar riscos comuns, e dar ' +
              'uma auto-checagem de segurança verbal antes de embarcar.',
        comp: 'Você nomeia as quatro áreas de uma plataforma, identifica um risco offshore, e ' +
              'faz uma checagem de segurança falada completa antes de subir no helicóptero.',
        live: [
          'Kick-off: layout de uma plataforma de produção (accommodation, process, ' +
          'wellhead, utilities areas)',
          'Chegada de helicóptero e o briefing de segurança',
          'Leitura "Going offshore" e background de segurança offshore'
        ],
        bridge: 'Na aula vocês viram o layout do livro e o briefing padrão. Aqui você treina ' +
                'as MESMAS quatro áreas com frases novas, identifica riscos INVENTADOS da ' +
                'North Star Rig, e fecha com uma missão de fala: um check-in de rádio no ' +
                'heliponto, antes de embarcar — não é o briefing da aula.',
        nextLive: 'Semana 2 · Comparativos + medição — problemas de pressão/temperatura, ' +
                  'leitura de medidores, e o e-mail de relatório de dano.',
        ican: [
          'I can name the four areas of an offshore platform.',
          'I can identify a common offshore hazard.',
          'I can give a spoken safety self-check before boarding a helicopter.',
          'I can use the unit vocabulary to talk about life offshore.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u8w1:cards:core',
                title: '📇 As oito palavras da unidade',
                sub: 'Definições e exemplos da North Star Rig — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u8w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'layout', icon: '🗺️', name: 'As quatro áreas', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u8w1:read:layout',
                title: '🗺️ O mapa de uma plataforma',
                textTitle: 'Four fixed areas',
                readAloud: false,
                text:
                  'ACCOMMODATION AREA — onde os trabalhadores dormem, comem e descansam.\n\n' +
                  'PROCESS AREA — onde o óleo e o gás são separados e tratados. É a área mais ' +
                  'barulhenta e mais perigosa.\n\n' +
                  'WELLHEAD AREA — onde fica o equipamento do próprio poço.\n\n' +
                  'UTILITIES AREA — energia, água e os sistemas de apoio da plataforma.\n\n' +
                  'Toda plataforma de produção tem essas quatro áreas, sempre separadas.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u8w1:layout:1',
                title: '🗺️ Complete:', main: 'Workers sleep and eat in the ___.',
                options: DF.shuffle([
                  { label: 'accommodation area', correct: true }, { label: 'process area' },
                  { label: 'wellhead area' }, { label: 'utilities area' }
                ]),
                expl: 'accommodation area = onde a equipe dorme e come.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u8w1:layout:2',
                title: '🗺️ Complete:', main: 'Oil and gas are separated and treated in the ___.',
                options: DF.shuffle([
                  { label: 'process area', correct: true }, { label: 'accommodation area' },
                  { label: 'muster point' }, { label: 'helideck' }
                ]),
                expl: 'process area = onde óleo e gás são tratados.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u8w1:layout:3',
                title: '🗺️ A pegadinha:', main: 'If the alarm sounds, everyone goes to the ___.',
                options: DF.shuffle([
                  { label: 'muster point', correct: true }, { label: 'process area' },
                  { label: 'wellhead area' }, { label: 'helideck' }
                ]),
                expl: 'muster point = ponto de encontro de emergência, não a área de processo.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u8w1:match:layout',
                title: '🔗 Ligue a área à função:',
                pairs: [
                  ['accommodation area', 'sleeping and eating'],
                  ['process area', 'separating and treating oil and gas'],
                  ['wellhead area', 'the well equipment'],
                  ['utilities area', 'power and water systems']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u8w1:type:muster',
                title: '⌨️ Complete a palavra:', main: 'A safe place to gather in an emergency: m _ _ t _ r point',
                answers: ['muster', 'Muster'], expl: 'muster point.' }
            ]
          },

          {
            id: 'hazards', icon: '⚠️', name: 'Riscos offshore', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'pro', srsId: 'og1u8w1:radar:slip',
                title: '🔊 Que risco você ouviu?',
                tts: 'a slippery deck', ttsLabel: '🔊 Ouvir de novo', autoPlay: true,
                showIfNoTTS: 'a slippery deck',
                options: DF.shuffle([{ label: 'a slippery deck', correct: true },
                  { label: 'a loose cable' }, { label: 'a gas leak' }, { label: 'a falling object' }]),
                expl: 'slippery deck = convés escorregadio.', feedbackTts: 'a slippery deck' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u8w1:radar:leak',
                title: '🔊 E agora?',
                tts: 'a gas leak', ttsLabel: '🔊 Ouvir de novo', autoPlay: true,
                showIfNoTTS: 'a gas leak',
                options: DF.shuffle([{ label: 'a gas leak', correct: true },
                  { label: 'high noise levels' }, { label: 'moving machinery' }, { label: 'a slippery deck' }]),
                expl: 'gas leak = vazamento de gás.', feedbackTts: 'a gas leak' },
              { ui: 'match', cat: 'voc', srsId: 'og1u8w1:match:hazards',
                title: '🔗 Ligue o risco à precaução:',
                pairs: [
                  ['a slippery deck', 'walk carefully, do not run'],
                  ['high noise levels', 'wear ear protectors'],
                  ['moving machinery', 'keep a safe distance'],
                  ['a gas leak', 'report it and leave the area']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u8w1:type:hazard',
                title: '⌨️ Escreva o risco:',
                main: 'A cable on the floor that is not fixed properly: a l _ _ s e cable',
                answers: ['loose', 'Loose'], expl: 'loose cable = cabo solto.' }
            ]
          },

          {
            id: 'reading', icon: '📖', name: 'Chegando de helicóptero', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u8w1:dlg:1',
                title: '🚁 O briefing de Amara no heliponto',
                sub: 'Situação nova — não é o briefing da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Amara', en: "Welcome to North Star. Before you leave the helideck, listen carefully." },
                  { who: 'Amara', en: "The process area is loud — wear ear protectors there at all times." },
                  { who: 'Amara', en: "If you see a hazard, like a loose cable or a slippery deck, report it immediately." },
                  { who: 'Amara', en: "If the alarm sounds, go straight to the muster point. Any questions?" }
                ],
                question: 'Segundo Amara, o que fazer se você ver um risco?',
                options: DF.shuffle([
                  { label: 'report it immediately', correct: true },
                  { label: 'fix it yourself' }, { label: 'ignore it and continue' },
                  { label: 'wait for the next shift' }
                ]),
                expl: '"If you see a hazard... report it immediately."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u8w1:dlg:2',
                title: '🚁 Erik chega para o primeiro turno',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Erik', en: "This is my first time offshore. What should I check first?" },
                  { who: 'Amara', en: "First, find the muster point near your accommodation area." },
                  { who: 'Erik', en: "Got it. And the process area?" },
                  { who: 'Amara', en: "Ear protectors, always. It's the loudest part of the rig." }
                ],
                question: 'O que Amara diz para o Erik fazer primeiro?',
                options: DF.shuffle([
                  { label: 'find the muster point', correct: true },
                  { label: 'go to the process area' }, { label: 'go to sleep' },
                  { label: 'call Control' }
                ]),
                expl: '"First, find the muster point near your accommodation area."'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'MISSÃO — Pre-flight check-in', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u8w1:build:checkin', unit: 8, waSec: 'Missão de rádio',
                title: '🎙️ Missão: check-in no heliponto',
                prompt: 'Cenário: você acaba de chegar na North Star Rig e está prestes a ' +
                        'sair do helideck. O Control pede uma checagem verbal antes de você ' +
                        'entrar na plataforma. Diga: seu nome e cargo, que hazards você vai ' +
                        'observar, e que já fez o treinamento de segurança.',
                example: "This is the new welder. I completed my safety training. I will " +
                         "watch for loose cables and slippery decks in the process area.",
                mustUse: ['safety training'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia. É uma checagem de rádio real, no espírito do heliponto.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u8w1:build:areas', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Nomeie as quatro áreas',
                prompt: 'Diga as quatro áreas de uma plataforma offshore, em ordem, com uma ' +
                        'palavra sobre cada uma.',
                example: "The accommodation area is for sleeping. The process area treats oil " +
                         "and gas. The wellhead area has the well equipment. The utilities " +
                         "area has power and water.",
                mustUse: ['accommodation'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u8w1+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 O check-in completo, de cabeça',
                prompt: 'Faça o check-in do heliponto de novo, sem olhar o exemplo, e ' +
                        'acrescente um hazard novo que você não mencionou antes.',
                example: "This is the new technician. I completed my training. I will watch " +
                         "for gas leaks and moving machinery near the wellhead area.",
                mustUse: ['training'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de áreas e riscos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Report any hazard near ___.', pool: 'og1OffshoreArea', focus: 'áreas',
                  ptHint: 'Relate qualquer risco perto de ___.', n: 5 },
                { frame: 'Watch out for ___.', pool: 'og1Hazard8', focus: 'riscos',
                  ptHint: 'Fique atento a ___.', n: 5 }
              ],
              backchain: [
                { text: 'Before you enter {og1OffshoreArea}, check for {og1Hazard8}.',
                  ptHint: 'Antes de entrar em… confira se há…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'gauges', icon: '📊',
        title: 'Reading the Numbers',
        goal: 'Usar comparativos, superlativos e as...as/not as...as, e ler medidores de ' +
              'pressão/temperatura/nível/fluxo, para relatar uma leitura anormal por rádio.',
        comp: 'Você compara duas leituras com -er/-est, more/most e as...as, lê um medidor em ' +
              'voz alta com a unidade certa, e relata e diagnostica uma leitura anormal por ' +
              'rádio, no espírito de uma sala de controle.',
        live: [
          'Language spot: comparative sentences (-er/-est, more/most, irregulares)',
          'Number-talk: measuring and adjusting variables — pressure/temperature/level/flow',
          'Listening com um técnico de instrumentos',
          'Writing bank: relatório de dano de equipamento (equipment-damage-report email)'
        ],
        bridge: 'Na aula vocês viram os comparativos e o listening do técnico de instrumentos. ' +
                'Aqui é gramática funda com cenários NOVOS (comparar leituras, comparar ' +
                'equipamentos), mais a missão da semana: um relatório de rádio sobre uma ' +
                'leitura anormal — diferente do e-mail de dano da aula, que fica em segundo ' +
                'plano aqui.',
        nextLive: 'Semana 3 · O alfabeto de rádio — a semana mais importante do mês: ' +
                  'eletricidade/circuitos e a simulação de chamada de rádio completa.',
        ican: [
          'I can use comparative and superlative adjectives, including irregular forms.',
          'I can use as...as and not as...as to compare two things.',
          'I can read a gauge aloud with the correct unit.',
          'I can report and diagnose an abnormal reading over the radio.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'compsup', icon: '📏', name: 'Comparative, superlative & as...as', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u8w2:read:comp',
                title: '📏 A regra num relance',
                textTitle: 'Comparative, superlative, and as...as',
                readAloud: false,
                text:
                  'CURTOS (1 sílaba) → -er / the -est\nloud → louder → the loudest\n\n' +
                  'LONGOS (2+ sílabas) → more / the most\ndangerous → more dangerous → the ' +
                  'most dangerous\n\n' +
                  'IRREGULARES\ngood → better → the best\nbad → worse → the worst\n\n' +
                  'AS...AS — igualdade.\nThe pump is as loud as the generator.\n\n' +
                  'NOT AS...AS — desigualdade, sem "-er".\nThe new gauge is not as old as the ' +
                  'other one.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: "not as...as" NÃO é o mesmo que o comparativo ' +
                  'com "-er" ao contrário — são duas formas diferentes que convivem.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w2:comp:1',
                title: '📏 Complete:', main: 'Section 3 is ___ than Section 2 today. (loud)',
                options: DF.shuffle([
                  { label: 'louder', correct: true }, { label: 'more loud' },
                  { label: 'loudest' }, { label: 'as loud' }
                ]),
                expl: 'loud é curto → louder.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w2:comp:2',
                title: '📏 Complete:', main: 'A gas leak is ___ than a slippery deck. (dangerous)',
                options: DF.shuffle([
                  { label: 'more dangerous', correct: true }, { label: 'dangerouser' },
                  { label: 'the most dangerous' }, { label: 'dangerous enough' }
                ]),
                expl: 'dangerous é longo → more dangerous.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w2:comp:3',
                title: '📏 Irregular:', main: 'Today\'s reading is ___ than yesterday\'s. (bad)',
                options: DF.shuffle([
                  { label: 'worse', correct: true }, { label: 'badder' },
                  { label: 'more bad' }, { label: 'the worst' }
                ]),
                expl: 'bad → worse → the worst. Irregular.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w2:comp:asas1',
                title: '⚖️ As...as ou not as...as?',
                main: 'The new pump makes the same noise as the old one — it is ___ noisy ___ the old pump.',
                options: DF.shuffle([
                  { label: 'as / as', correct: true }, { label: 'more / than' },
                  { label: 'not as / as' }, { label: 'the / est' }
                ]),
                expl: 'Mesmo nível de barulho → igualdade: as noisy as.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w2:comp:asas2',
                title: '⚖️ A pegadinha:',
                main: 'The reading today (40 bar) is lower than yesterday (60 bar) — it is ___ high ___ yesterday.',
                options: DF.shuffle([
                  { label: 'not as / as', correct: true }, { label: 'as / as' },
                  { label: 'more / than' }, { label: 'the most / of' }
                ]),
                trapNote: 'Caiu na armadilha — os números são diferentes, então não é "as...as".',
                expl: 'Números diferentes → desigualdade: not as high as.' },
              { ui: 'match', cat: 'gra', srsId: 'og1u8w2:match:comp',
                title: '🔗 Ligue o adjetivo à forma comparativa:',
                pairs: [
                  ['high', 'higher'], ['low', 'lower'],
                  ['accurate', 'more accurate'], ['good', 'better'],
                  ['bad', 'worse']
                ] }
            ]
          },

          {
            id: 'gauges', icon: '📊', name: 'Pressure, temperature, level, flow', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u8w2:read:gauges',
                title: '📊 As quatro variáveis',
                textTitle: 'Reading the gauges',
                readAloud: false,
                text:
                  'PRESSURE — medida em bar ou kPa. "The pressure is fifty bar."\n\n' +
                  'TEMPERATURE — medida em °C. "The temperature is ninety degrees Celsius."\n\n' +
                  'LEVEL — medido em %. "The level is at seventy per cent."\n\n' +
                  'FLOW — a velocidade do fluxo. "The flow is normal today."\n\n' +
                  'VERBOS DE MANUTENÇÃO — adjust (ajustar), diagnose (diagnosticar), inspect ' +
                  '(inspecionar), maintain (manter), repair (consertar), test (testar).',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u8w2:gauge:1',
                title: '📊 Qual unidade combina?', main: 'The tank ___ is at eighty per cent.',
                options: DF.shuffle([
                  { label: 'level', correct: true }, { label: 'pressure' },
                  { label: 'temperature' }, { label: 'flow' }
                ]),
                expl: 'level se mede em % — nível do tanque.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u8w2:gauge:2',
                title: '📊 Qual verbo combina?', main: 'Fatima needs to ___ the valve to lower the pressure.',
                options: DF.shuffle([
                  { label: 'adjust', correct: true }, { label: 'diagnose' },
                  { label: 'inspect' }, { label: 'test' }
                ]),
                expl: 'adjust = ajustar, para corrigir a leitura.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u8w2:num:1',
                title: '🔢 Ouça e escreva a leitura:',
                tts: 'The pressure is fifty-five bar.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: 'the pressure is fifty-five bar',
                answers: ['55 bar', '55'], expl: 'fifty-five bar = 55 bar.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u8w2:num:2',
                title: '🔢 Ouça e escreva a leitura:',
                tts: 'The temperature is ninety degrees Celsius.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: 'the temperature is ninety degrees celsius',
                answers: ['90', '90°C', '90 degrees'], expl: 'ninety degrees = 90°C.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u8w2:match:gauge',
                title: '🔗 Ligue a variável à unidade:',
                pairs: [
                  ['pressure', 'bar / kPa'], ['temperature', '°C'],
                  ['level', '%'], ['flow', 'litres per minute']
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u8w2:drl:comp', unit: 8, waSec: 'Drill · comparativos',
                title: '🔁 Drill 1 — o adjetivo troca', focus: 'comparativo',
                frame: 'Today\'s reading is ___ than yesterday\'s.', ptHint: 'A leitura de hoje está ___ que a de ontem.',
                slots: ['higher', 'lower', 'more accurate', 'worse', 'better'] },
              { ui: 'drill', cat: 'voc', srsId: 'og1u8w2:drl:gauge', unit: 8, waSec: 'Drill · medidores',
                title: '🔁 Drill 2 — a variável troca', focus: 'medidores',
                frame: 'Check the ___ before you start.', ptHint: 'Confira o(a) ___ antes de começar.',
                slots: ['pressure', 'temperature', 'level', 'flow'] }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'Uma leitura fora do normal', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u8w2:dlg:abnormal',
                title: '👂 Fatima encontra um problema',
                sub: 'Situação nova — não é o listening da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Fatima', en: "This gauge is showing ninety bar. That's much higher than normal." },
                  { who: 'Erik', en: "Normal is around fifty. What do you think is wrong?" },
                  { who: 'Fatima', en: "The valve might be stuck. We need to adjust it now." },
                  { who: 'Erik', en: "Agreed. I'll call Control and report it." }
                ],
                question: 'Segundo Fatima, o que pode estar errado?',
                options: DF.shuffle([
                  { label: 'the valve might be stuck', correct: true },
                  { label: 'the gauge is broken' }, { label: 'the pump stopped' },
                  { label: 'there is a gas leak' }
                ]),
                expl: '"The valve might be stuck. We need to adjust it now."'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'MISSÃO — Relatório de rádio', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u8w2:build:report', unit: 8, waSec: 'Missão de rádio',
                title: '🎙️ Missão: relate a leitura anormal',
                prompt: 'Cenário: você está na sala de controle. Um medidor mostra pressure ' +
                        '= 90 bar; o normal é 50 bar. Relate essa leitura para o Control por ' +
                        'rádio, comparando com o normal, e diga o que precisa ser feito.',
                example: "Control, this is the control room. The pressure is much higher than " +
                         "normal — ninety bar instead of fifty. We need to adjust the valve.",
                mustUse: ['higher than'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia. É a versão SOLO de um relatório de rádio real.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u8w2:build:email', unit: 8, waSec: 'Sua vez',
                title: '✉️ Relatório de dano — linha de abertura',
                prompt: 'Cenário secundário: o gauge de temperature quebrou esta manhã. ' +
                        'Diga/escreva a frase de abertura de um e-mail relatando o dano.',
                example: 'I am writing to report a problem with the temperature gauge in Section 3 — it stopped working this morning.',
                mustUse: ['I am writing to report'],
                expl: 'Escrita em segundo plano nesta unidade — a prioridade é o relatório ' +
                      'falado acima.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Comparações difíceis', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u8w2+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Três leituras, três comparações',
                prompt: 'Invente três leituras de medidores e compare-as entre si, usando ' +
                        '-er/-est, more/most e as...as numa fala só.',
                example: "The pressure gauge is higher than the flow gauge. The temperature " +
                         "is the most worrying reading. The level is as normal as yesterday.",
                mustUse: ['than'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de medidores', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The ___ needs to be checked.', pool: 'og1GaugeVar', focus: 'variáveis',
                  ptHint: 'O(a) ___ precisa ser verificado(a).', n: 4 },
                { frame: 'You need to ___ it.', pool: 'og1GaugeVerb', focus: 'verbos',
                  ptHint: 'Você precisa ___ isso.', n: 6 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'radio-alphabet', icon: '🔤',
        title: 'Alpha, Bravo, Copy That',
        goal: 'Dominar o alfabeto fonético internacional e a etiqueta de chamada de rádio, e ' +
              'usar vocabulário básico de eletricidade e circuitos.',
        comp: 'Você soletra qualquer palavra usando o alfabeto fonético sem hesitar, usa ' +
              '"over"/"copy"/"say again" corretamente numa chamada, e conduz uma chamada de ' +
              'rádio completa e correta do início ao fim — sozinho.',
        live: [
          'O alfabeto fonético internacional — listen and repeat',
          'Vocabulário de eletricidade e circuitos',
          'Listening de conversas de rádio, com o alfabeto fonético',
          'Pair work "Radio conversations": trocar nome/cargo e leituras de medidor por ' +
          'rádio, em dupla'
        ],
        bridge: 'Na aula vocês praticaram o alfabeto e fizeram o "Radio conversations" em ' +
                'DUPLA, trocando informação um com o outro. Esta é a semana mais importante do ' +
                'mês: aqui você faz uma SIMULAÇÃO SOLO de chamada de rádio completa — cenário ' +
                'inteiramente novo, não o da aula — usando o alfabeto, "over"/"copy"/"say ' +
                'again", e uma leitura de medidor, tudo numa única chamada real.',
        nextLive: 'Semana 4 · Revisão + Key Words — pronúncia de consonant clusters, checklist, ' +
                  'e o "Communication" final comparando duas plataformas.',
        ican: [
          'I can say the international radio alphabet from memory.',
          'I can spell any word or code using the radio alphabet.',
          'I can use over, copy and say again correctly in a radio call.',
          'I can conduct a full radio call correctly, on my own.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'alphabet', icon: '🔤', name: 'O alfabeto fonético', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'voc', srsId: 'og1u8w3:read:alpha',
                title: '🔤 Alpha, Bravo, Charlie…',
                textTitle: 'The international radio alphabet',
                readAloud: false,
                text:
                  'Alpha · Bravo · Charlie · Delta · Echo · Foxtrot · Golf · Hotel · India · ' +
                  'Juliett · Kilo · Lima · Mike · November · Oscar · Papa · Quebec · Romeo · ' +
                  'Sierra · Tango · Uniform · Victor · Whiskey · X-ray · Yankee · Zulu.\n\n' +
                  'PARA QUE SERVE — letras que soam parecido no rádio ("B" e "D", "M" e "N") ' +
                  'ficam impossíveis de confundir quando você diz "Bravo" e "Delta" em vez de ' +
                  'só a letra.\n\n' +
                  'Para soletrar uma palavra ou um código, diga uma palavra do alfabeto para ' +
                  'cada letra: "T-O-M" = "Tango, Oscar, Mike".',
                nextLabel: 'Entendi ▸' },
              { ui: 'cards', cat: 'voc', srsId: 'og1u8w3:cards:alpha',
                title: '🔤 As 26 palavras do alfabeto',
                sub: 'Flashcard completo — ouça cada uma antes da chamada de rádio.',
                cards: [
                  'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel',
                  'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa',
                  'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey',
                  'X-ray', 'Yankee', 'Zulu'
                ].map(function (w) {
                  return { en: w, pt: w.charAt(0) + ' de ' + w, def: 'letra do alfabeto fonético', tts: w };
                }) },
              { ui: 'choice', cat: 'pro', srsId: 'og1u8w3:radar:bravo',
                title: '🔊 Que palavra do alfabeto você ouviu?',
                tts: 'Bravo', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'Bravo',
                options: DF.shuffle([{ label: 'Bravo', correct: true }, { label: 'Delta' },
                  { label: 'Victor' }, { label: 'Papa' }]),
                expl: 'Bravo = B.', feedbackTts: 'Bravo' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u8w3:radar:mike',
                title: '🔊 E esta?',
                tts: 'Mike', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'Mike',
                options: DF.shuffle([{ label: 'Mike', correct: true }, { label: 'November' },
                  { label: 'Kilo' }, { label: 'Whiskey' }]),
                expl: 'Mike = M.', feedbackTts: 'Mike' },
              { ui: 'type', cat: 'spl', srsId: 'og1u8w3:sp:tom',
                title: '🔤 Ouça a soletração e escreva a palavra:',
                tts: 'Tango. Oscar. Mike.', ttsLabel: '🔊 Ouvir a soletração',
                showIfNoTTS: 'Tango - Oscar - Mike',
                answers: ['Tom', 'tom'], expl: 'Tango-Oscar-Mike = T-O-M = Tom.', feedbackTts: 'Tom' },
              { ui: 'type', cat: 'spl', srsId: 'og1u8w3:sp:rig',
                title: '🔤 Outra soletração:',
                tts: 'Romeo. India. Golf.', ttsLabel: '🔊 Ouvir a soletração',
                showIfNoTTS: 'Romeo - India - Golf',
                answers: ['Rig', 'rig'], expl: 'Romeo-India-Golf = R-I-G = Rig.', feedbackTts: 'Rig' }
            ]
          },

          {
            id: 'etiquette', icon: '📻', name: 'Etiqueta de chamada', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u8w3:read:etiq',
                title: '📻 Over, copy, say again, roger',
                textTitle: 'Radio call etiquette',
                readAloud: false,
                text:
                  'OVER — "terminei de falar, agora é sua vez". Sempre no fim de uma fala, ' +
                  'nunca no fim da conversa inteira.\n\n' +
                  'COPY / COPY THAT — "recebi e entendi sua mensagem".\n\n' +
                  'SAY AGAIN — "pode repetir?" (nunca "repeat" — no rádio militar/aeronáutico, ' +
                  '"repeat" tem outro sentido, então "say again" é o padrão seguro).\n\n' +
                  'ROGER — "confirmado, entendido" (parecido com "copy").\n\n' +
                  'Uma chamada básica: chamar o destinatário → identificar-se → dizer a ' +
                  'mensagem → "over" → esperar resposta.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w3:etiq:1',
                title: '📻 Você terminou de falar e quer passar a vez. Você diz:',
                options: DF.shuffle([
                  { label: 'Over.', correct: true }, { label: 'Copy.' },
                  { label: 'Say again.' }, { label: 'Stop.' }
                ]),
                expl: '"Over" passa a vez para quem está do outro lado.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w3:etiq:2',
                title: '📻 Você não entendeu a mensagem. Você diz:',
                options: DF.shuffle([
                  { label: 'Say again, please.', correct: true }, { label: 'Repeat, please.', trap: true },
                  { label: 'What?' }, { label: 'Copy.' }
                ]),
                trapNote: 'No rádio, o padrão seguro é "say again" — "repeat" pode confundir.',
                expl: '"Say again" é o padrão de rádio para pedir repetição.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w3:etiq:3',
                title: '📻 Você recebeu e entendeu a mensagem. Você diz:',
                options: DF.shuffle([
                  { label: 'Copy that.', correct: true }, { label: 'Over.' },
                  { label: 'Say again.' }, { label: 'Hello?' }
                ]),
                expl: '"Copy that" confirma que a mensagem chegou e foi entendida.' },
              { ui: 'order', cat: 'gra', srsId: 'og1u8w3:ord:call',
                title: '🧩 Monte a chamada:', answer: 'Control this is North Star reading fifty bar over',
                expl: 'Chama o destinatário → identifica-se → diz a mensagem → over.' }
            ]
          },

          {
            id: 'circuits', icon: '⚡', name: 'Eletricidade e circuitos', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'og1u8w3:circ:1',
                title: '⚡ Complete:', main: 'Too much ___ can damage the control panel.',
                options: DF.shuffle([
                  { label: 'current', correct: true }, { label: 'resistance' },
                  { label: 'switch' }, { label: 'fuse' }
                ]),
                expl: 'current = corrente, o fluxo de eletricidade.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u8w3:circ:2',
                title: '⚡ Complete:', main: 'The ___ tripped when the pump overloaded.',
                options: DF.shuffle([
                  { label: 'circuit breaker', correct: true }, { label: 'voltage' },
                  { label: 'current' }, { label: 'resistance' }
                ]),
                expl: 'circuit breaker = disjuntor, desarma quando há sobrecarga.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u8w3:match:circ',
                title: '🔗 Ligue o termo ao significado:',
                pairs: [
                  ['current', 'the flow of electricity'],
                  ['voltage', 'the force that pushes current'],
                  ['resistance', 'what slows the current down'],
                  ['circuit breaker', 'stops the current if there is a fault']
                ] }
            ]
          },

          {
            id: 'radiocall', icon: '🎙️', name: 'MISSÃO — Chamada de rádio completa', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u8w3:read:scenario',
                title: '🎙️ O cenário da sua chamada',
                textTitle: 'Radio call simulation',
                text:
                  'Você é o técnico de plantão na North Star Rig. O Control pediu o número de ' +
                  'série de uma peça nova: "NS-482". Você também precisa relatar a leitura do ' +
                  'medidor de pressão: 62 bar.\n\n' +
                  'Uma chamada completa e correta tem: 1) chamar o destinatário e se ' +
                  'identificar, 2) soletrar o código usando o alfabeto fonético, 3) relatar a ' +
                  'leitura do medidor, 4) terminar com "over", 5) confirmar com "copy" quando ' +
                  'a resposta chegar.',
                nextLabel: 'Pronto para simular ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u8w3:dlg:model',
                title: '🎙️ Ouça um exemplo de chamada correta primeiro',
                sub: 'Modelo — depois você faz a sua própria versão, com dados diferentes.',
                lines: [
                  { who: 'Kwame', en: 'Control, this is North Star, radio check, over.' },
                  { who: 'Control', en: 'North Star, this is Control, reading you loud and clear, over.' },
                  { who: 'Kwame', en: 'Copy. The part number is N-S-4-8-1: November, Sierra, four, eight, one. Pressure reading is fifty-eight bar, over.' },
                  { who: 'Control', en: 'Copy that — November, Sierra, four, eight, one, fifty-eight bar. Over and out.' }
                ],
                question: 'Qual foi a resposta do Kwame quando o Control confirmou que estava ' +
                          'ouvindo com clareza?',
                options: DF.shuffle([
                  { label: 'Copy.', correct: true }, { label: 'Over.' },
                  { label: 'Say again.' }, { label: 'Roger that, out.' }
                ]),
                expl: '"Copy." confirma que Kwame recebeu a mensagem antes de continuar.'
              },
              { ui: 'build', cat: 'fun', srsId: 'og1u8w3:build:radiocall', unit: 8, waSec: 'Missão de rádio',
                title: '🎙️ Sua chamada: NS-482, pressão 62 bar',
                prompt: 'Agora faça a SUA chamada completa. Chame o Control, identifique-se, ' +
                        'soletre "NS-482" letra por letra usando o alfabeto fonético, relate a ' +
                        'pressão de 62 bar, e termine com "over".',
                example: "Control, this is North Star, over. The part number is November, " +
                         "Sierra, four, eight, two. Pressure reading is sixty-two bar, over.",
                mustUse: ['over'],
                expl: 'Este é o exercício mais completo da unidade — uma simulação real de ' +
                      'chamada de rádio, do início ao fim, sozinho. Mande o áudio para o ' +
                      'professor conferir a pronúncia do alfabeto e a etiqueta de chamada.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — mais soletração', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u8w3:build:spell', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Soletre seu próprio nome no rádio',
                prompt: 'Diga "This is..." e soletre seu nome ou sobrenome usando o alfabeto ' +
                        'fonético, letra por letra.',
                example: "This is Felipe. Foxtrot, Echo, Lima, India, Papa, Echo.",
                mustUse: ['this is'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Chamada sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u8w3+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Invente um código e uma chamada inteira',
                prompt: 'Invente um código de três letras e um número, e faça a chamada de ' +
                        'rádio inteira sozinho, sem olhar o exemplo — do "over" inicial ao ' +
                        '"copy" final.',
                example: "Control, this is North Star, over. The code is Kilo, Alpha, Papa, " +
                         "one two three. Copy?",
                mustUse: ['over'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito do alfabeto', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___', pool: 'og1RadioLetter', focus: 'alfabeto fonético',
                  ptHint: 'letra do alfabeto de rádio', n: 8 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Ready Offshore',
        goal: 'Revisar comparativos/as...as, eletricidade e o alfabeto de rádio, treinar ' +
              'consonant clusters, e se autoavaliar com um checklist.',
        comp: 'Numa revisão geral, você mistura comparativos, vocabulário de eletricidade e o ' +
              'alfabeto de rádio sem errar, pronuncia consonant clusters com clareza, e fecha ' +
              'a unidade comparando duas plataformas por rádio, sozinho.',
        live: [
          'Prática de fala com frases de rádio',
          'Pronúncia: consonant clusters (str-, spl-, scr-)',
          'Checklist de autoavaliação e Key Words',
          '"Language test" misturando comparativos e as...as',
          'Communication — pair work de fechamento comparando 2-3 plataformas fictícias ' +
          'com estatísticas'
        ],
        bridge: 'Na aula vocês fizeram o "Communication" em dupla, comparando plataformas em ' +
                'voz alta. Aqui é uma revisão SOLO no espírito de teste — frases novas, não as ' +
                'da aula — mais o flashcard das Key Words, um checklist "eu consigo…", e a ' +
                'missão final: uma versão SOLO do "Communication" — você recebe as estatísticas ' +
                'de duas plataformas e relata a comparação por rádio para um supervisor, ' +
                'fechando o arco de rádio da unidade.',
        nextLive: 'Unit 9 — começa na segunda-feira seguinte.',
        ican: [
          'I can mix comparatives and as...as without stopping to think.',
          'I can use electricity and radio-alphabet vocabulary together.',
          'I can pronounce consonant clusters clearly.',
          'I can compare two platforms out loud and report it to a supervisor.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u8w4:cards:review',
                title: '🔑 Revisão — as treze palavras do mês',
                sub: 'Flashcard de revisão: as oito principais + as cinco extras.',
                cards: WORDS.concat(EXTRA_WORDS).map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'clusters', icon: '🥁', name: 'Consonant clusters', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'og1u8w4:read:clusters',
                title: '🥁 Três consoantes juntas',
                textTitle: 'str-, spl-, scr-',
                readAloud: false,
                text:
                  'Em português, quase sempre existe uma vogal entre consoantes. Em inglês, ' +
                  'grupos de até três consoantes ficam juntos, sem vogal no meio.\n\n' +
                  'STR- → strong, structure, straight.\n' +
                  'SPL- → splash, split.\n' +
                  'SCR- → scratch, screen.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: dizer algo como "e-strong" ou "es-cratch", ' +
                  'inserindo uma vogal antes do grupo, é o erro mais comum — o grupo de ' +
                  'consoantes começa a palavra direto, sem vogal de apoio.',
                nextLabel: 'Entendi ▸' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u8w4:str:strong', word: 'strong',
                pattern: 'O', decoys: ['oO'], syl: 'STRONG (uma sílaba só)' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u8w4:str:structure', word: 'structure',
                pattern: 'Oo', decoys: ['oO'], syl: 'STRUC-ture' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u8w4:str:splash', word: 'splash',
                pattern: 'O', decoys: ['oO'], syl: 'SPLASH (uma sílaba só)' },
              { ui: 'stress', cat: 'pro', srsId: 'og1u8w4:str:screen', word: 'screen',
                pattern: 'O', decoys: ['oO'], syl: 'SCREEN (uma sílaba só)' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u8w4:cluster:1',
                title: '🥁 Qual pronúncia está certa para "strong"?',
                options: DF.shuffle([
                  { label: 'STRONG — sem vogal antes do grupo str-', correct: true },
                  { label: 'e-STRONG — com vogal antes', trap: true },
                  { label: 'se-TRONG' }, { label: 'is-TRONG' }
                ]),
                trapNote: 'Caiu na armadilha do brasileiro — nada de vogal antes do "str-".',
                expl: 'O grupo str- começa a palavra direto, sem vogal de apoio.' }
            ]
          },

          {
            id: 'mix', icon: '📝', name: 'Revisão geral (language test)', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w4:mix:1',
                title: '📝 Complete:', main: 'The wellhead area is ___ than the accommodation area. (noisy)',
                options: DF.shuffle([
                  { label: 'noisier', correct: true }, { label: 'more noisy' },
                  { label: 'noisiest' }, { label: 'as noisy' }
                ]),
                expl: 'noisy é curto (2 sílabas, termina em y) → noisier.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u8w4:mix:2',
                title: '📝 Complete:', main: 'Today\'s pressure is the same as yesterday\'s — it is ___ high ___ yesterday.',
                options: DF.shuffle([
                  { label: 'as / as', correct: true }, { label: 'more / than' },
                  { label: 'not as / as' }, { label: 'the / est' }
                ]),
                expl: 'Mesmo valor → igualdade: as high as.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u8w4:mix:elec',
                title: '📝 Complete:', main: 'The ___ pushes the current through the circuit.',
                options: DF.shuffle([
                  { label: 'voltage', correct: true }, { label: 'resistance' },
                  { label: 'fuse' }, { label: 'switch' }
                ]),
                expl: 'voltage = voltagem, empurra a corrente.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u8w4:mix:spell',
                title: '🔤 Ouça a soletração e escreva a palavra:',
                tts: 'Golf. Alpha. Sierra.', showIfNoTTS: 'Golf - Alpha - Sierra',
                answers: ['Gas', 'gas'], expl: 'Golf-Alpha-Sierra = G-A-S = Gas.' },
              { ui: 'match', cat: 'fun', srsId: 'og1u8w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['wellhead area', 'where the well equipment is'],
                  ['gauge', 'an instrument that shows a reading'],
                  ['current', 'the flow of electricity'],
                  ['copy', 'radio word for "received and understood"']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u8w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'This platform is not as loud as that one',
                expl: 'This platform is not + as + adjetivo + as + that one.' }
            ]
          },

          {
            id: 'platforms', icon: '🛢️', name: 'MISSÃO — Communication por rádio', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u8w4:read:platforms',
                title: '🛢️ Two platforms',
                textTitle: 'North Star vs Deep Horizon — quick stats',
                text:
                  'NORTH STAR: located 100 km offshore. Weight: 45,000 tonnes. Height: 90 ' +
                  'metres above sea level.\n\n' +
                  'DEEP HORIZON: located 60 km offshore. Weight: 38,000 tonnes. Height: 110 ' +
                  'metres above sea level.\n\n' +
                  'Compare as duas plataformas antes de relatar.',
                nextLabel: 'Pronto para relatar ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u8w4:platforms:q1',
                title: '🛢️ Which platform is heavier?',
                options: DF.shuffle([
                  { label: 'North Star', correct: true }, { label: 'Deep Horizon' },
                  { label: 'They weigh the same' }, { label: 'The text doesn\'t say' }
                ]),
                expl: '45,000 tonnes (North Star) > 38,000 tonnes (Deep Horizon).' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u8w4:platforms:q2',
                title: '🛢️ Which platform is taller?',
                options: DF.shuffle([
                  { label: 'Deep Horizon', correct: true }, { label: 'North Star' },
                  { label: 'They are the same height' }, { label: 'The text doesn\'t say' }
                ]),
                expl: '110 metres (Deep Horizon) > 90 metres (North Star).' },
              { ui: 'build', cat: 'fun', srsId: 'og1u8w4:build:platforms', unit: 8, waSec: 'Missão de rádio',
                title: '🎙️ Relate a comparação por rádio ao supervisor',
                prompt: 'Fale como se estivesse chamando um supervisor por rádio: compare o ' +
                        'peso e a altura das duas plataformas, usando comparativos ou as...as, ' +
                        'e feche com "over".',
                example: "Supervisor, this is Control. North Star is heavier than Deep " +
                         "Horizon, but Deep Horizon is taller. Over.",
                mustUse: ['over'],
                expl: 'Esta é a versão SOLO do "Communication" da aula — lá é em dupla, aqui é ' +
                      'você relatando sozinho por rádio, fechando o arco da unidade.' }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 8, idx: 0,
                statement: 'I can name the areas of an offshore platform and common hazards.',
                ptHint: 'Eu consigo nomear as áreas de uma plataforma offshore e riscos comuns.' },
              { ui: 'selfcheck', cat: 'fun', unit: 8, idx: 1,
                statement: 'I can use comparatives, superlatives and as...as together.',
                ptHint: 'Eu consigo usar comparativo, superlativo e as...as juntos.' },
              { ui: 'selfcheck', cat: 'fun', unit: 8, idx: 2,
                statement: 'I can read a gauge aloud and report an abnormal reading.',
                ptHint: 'Eu consigo ler um medidor em voz alta e relatar uma leitura anormal.' },
              { ui: 'selfcheck', cat: 'fun', unit: 8, idx: 3,
                statement: 'I can say the radio alphabet and spell any word with it.',
                ptHint: 'Eu consigo dizer o alfabeto de rádio e soletrar qualquer palavra com ele.' },
              { ui: 'selfcheck', cat: 'fun', unit: 8, idx: 4,
                statement: 'I can conduct a full, correct radio call on my own.',
                ptHint: 'Eu consigo conduzir uma chamada de rádio completa e correta sozinho.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Ensaio de fala — tudo junto', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u8w4:st:1', unit: 8, waSec: 'Revisão',
                title: '🏆 O relatório completo de rádio',
                prompt: 'Faça uma chamada de rádio final: identifique-se, soletre um código ' +
                        'curto com o alfabeto fonético, relate uma leitura de medidor, compare ' +
                        'com o normal, e termine com "over" — tudo numa fala só.',
                example: "Control, this is North Star, over. The code is Bravo, Romeo, one, " +
                         "two. The pressure is higher than normal — seventy bar. Over.",
                mustUse: ['over'],
                expl: 'Mande o áudio — o professor confere pronúncia, o alfabeto e a etiqueta ' +
                      'de chamada do mês inteiro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Revisão sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u8w4+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre um dia de trabalho offshore inventado: uma ' +
                        'área da plataforma, um risco, uma comparação entre dois medidores, e ' +
                        'uma chamada de rádio curta com o alfabeto.',
                example: "The process area is the loudest part of the rig. Today's pressure " +
                         "is higher than yesterday's. Control, this is North Star, Kilo, " +
                         "Alpha, Papa, over.",
                mustUse: ['over'] }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
