/* ENGLISH FLOW — week/plan-og1-02.js
   OIL & GAS 1 · UNIT 2 "Upstream" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Os personagens, textos, gráficos e o
                      pair work do livro. É o que só existe com outra pessoa
                      junto.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Universo North Star Rig — CONTINUAÇÃO da Unit 1 (mesma tripulação):
     Erik (Norwegian, engineer/technician), Fatima (Kuwaiti, engineer),
     Priya (Indian), Tomás (Brazilian, welder). Nesta unidade o app apresenta
     dois novos membros da equipe upstream — Sofia (Mexican, geologist) e
     Kwame (Ghanaian, driller) — porque a Unit 1 não tinha cargos upstream
     específicos (driller/geologist/crane operator/production operator).

   ═══ NÍVEL ═══ OG1 = A1/A2. Instruções em PT-BR, frases curtas.

   ═══ ESTRUTURA ═══
     Semana 1 · Upstream vs downstream ... vocabulário do processo, reading novo
     Semana 2 · Job roles + present simple . cargos upstream, gramática completa
     Semana 3 · Numbers + measurement + email  números grandes, e-mail informal
     Semana 4 · Review + Key Words ......... revisão geral + self-check       */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.og1 = DF.PLAN.og1 || {};

  // ── pools do universo North Star Rig (o gerador usa em "treino infinito") ──
  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.og1UpJob = ['a driller', 'a geologist', 'a crane operator',
                              'a maintenance technician', 'a production operator',
                              'a roughneck', 'a geotechnician'];
    DF.WGEN.POOLS.og1Routine = ['checks the gauges', 'reads the reports', 'operates the crane',
                                'inspects the pipes', 'tests the samples', 'starts the pump',
                                'writes the log', 'talks to Control'];
    DF.WGEN.POOLS.og1Freq = ['always', 'usually', 'often', 'sometimes', 'never'];
    DF.WGEN.POOLS.og1Unit = ['barrels', 'cubic metres', 'litres'];
    DF.WGEN.POOLS.og1Seq = ['First', 'Next', 'Then', 'Finally'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  const WORDS = [
    { en: 'upstream', pt: 'upstream (exploração e produção)',
      def: 'the part of the oil and gas industry that finds and produces oil and gas',
      ex: 'Sofia works upstream — she looks for new oil fields.' },
    { en: 'downstream', pt: 'downstream (refino e distribuição)',
      def: 'the part of the industry that refines and sells oil and gas products',
      ex: 'Downstream companies turn crude oil into fuel.' },
    { en: 'exploration', pt: 'exploração',
      def: 'the search for new oil and gas fields',
      ex: 'Exploration is the first step before drilling starts.' },
    { en: 'drilling', pt: 'perfuração',
      def: 'the process of making a deep hole to reach oil or gas',
      ex: 'Drilling starts only after the geologist confirms hydrocarbons.' },
    { en: 'hydrocarbons', pt: 'hidrocarbonetos',
      def: 'the substances (oil and gas) that form under the ground',
      ex: 'The team looks for signs of hydrocarbons under the seabed.' },
    { en: 'driller', pt: 'sondador',
      def: 'a worker who operates the drilling equipment',
      ex: 'Kwame is the driller on the night shift.' },
    { en: 'geologist', pt: 'geólogo(a)',
      def: 'a scientist who studies rock and land to find oil and gas',
      ex: "Sofia is a geologist. She studies the rock samples every day." },
    { en: 'production', pt: 'produção',
      def: 'the stage when oil or gas is brought to the surface and collected',
      ex: 'Production starts after a successful drilling stage.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'crane operator ·+', pt: 'operador(a) de guindaste',
      def: 'a worker who controls the crane that lifts heavy equipment',
      ex: 'The crane operator lifts the pipes onto the deck.' },
    { en: 'maintenance technician ·+', pt: 'técnico(a) de manutenção',
      def: 'a worker who repairs and checks machines and equipment',
      ex: 'The maintenance technician fixes the pump every week.' },
    { en: 'production operator ·+', pt: 'operador(a) de produção',
      def: 'a worker who controls the equipment during the production stage',
      ex: 'The production operator watches the flow of oil all day.' },
    { en: 'roughneck ·+', pt: 'trabalhador(a) de sonda',
      def: 'a worker who does heavy physical work on the drilling floor',
      ex: 'The roughnecks work in teams on the drilling floor.' },
    { en: 'geotechnician ·+', pt: 'geotécnico(a)',
      def: 'a technician who helps the geologist analyse samples',
      ex: 'The geotechnician tests the rock samples in the small lab.' }
  ];

  DF.PLAN.og1[2] = {
    unit: 2,
    title: 'Upstream',
    subtitle: 'Explorar, perfurar, produzir',
    icon: '⛏️',

    mindmap: {
      center: 'Upstream',
      sub: 'Do primeiro sinal de óleo até o barril pronto',
      branches: [
        {
          icon: '🔄', name: 'Upstream vs downstream',
          leaves: WORDS.filter(function (w) { return ['upstream', 'downstream'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat([
              { en: 'exploration → drilling → production', pt: 'o processo upstream' },
              { en: 'refining → distribution', pt: 'o processo downstream' }
            ]),
          note: '<b>Upstream</b> encontra e produz. <b>Downstream</b> refina e vende. É a ' +
                'primeira divisão que todo trabalhador do setor precisa saber.'
        },
        {
          icon: '🪨', name: 'Exploration → production',
          leaves: WORDS.filter(function (w) { return ['exploration', 'drilling', 'hydrocarbons', 'production'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; }),
          note: '<b>First</b> exploration, <b>next</b> a possible sign of hydrocarbons, ' +
                '<b>then</b> drilling, <b>finally</b> production.'
        },
        {
          icon: '👷', name: 'Upstream job roles',
          leaves: WORDS.filter(function (w) { return ['driller', 'geologist'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> não estão no Word Bank da aula — vêm do vocabulário ' +
                'extra do app.'
        },
        {
          icon: '⏰', name: 'Present simple',
          leaves: [
            { en: 'She checks the gauges every morning.', pt: 'afirmativa (3ª pessoa: +s)' },
            { en: "He doesn't work on Sundays.", pt: 'negativa' },
            { en: 'Does she operate the crane?', pt: 'pergunta' },
            { en: 'What time does the shift start?', pt: 'wh-question' },
            { en: 'Kwame always checks the log.', pt: 'advérbio de frequência' }
          ],
          note: 'Na 3ª pessoa do singular (he/she/it) o verbo ganha <b>-s</b> na afirmativa — ' +
                'mas na negativa e na pergunta o -s vai para o <b>does</b>, não para o verbo.'
        },
        {
          icon: '🔢', name: 'Numbers & units',
          leaves: [
            { en: 'barrels (bbl)', pt: 'barris' },
            { en: 'cubic metres (m³)', pt: 'metros cúbicos' },
            { en: 'litres', pt: 'litros' },
            { en: 'two thousand barrels', pt: 'número grande por extenso' }
          ],
          note: 'Óleo se mede em <b>barrels</b>, gás costuma se medir em <b>cubic metres</b> — ' +
                'e o número quase sempre vem antes da unidade.'
        },
        {
          icon: '✉️', name: 'Informal email',
          leaves: [
            { en: 'Hi Sofia,', pt: 'saudação informal' },
            { en: 'Are you free to help me with…?', pt: 'pergunta com Are' },
            { en: 'Do you know…? / Does the report show…?', pt: 'pergunta com Do/Does' },
            { en: 'Thanks, Erik', pt: 'despedida informal' }
          ],
          note: 'E-mail informal para um colega usa o padrão Are/Do/Does/Is para pedir ' +
                'informação — sem formalidade de "Dear Sir or Madam".'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'upstream', icon: '🔄',
        title: 'Finding the Oil',
        goal: 'Diferenciar upstream de downstream e descrever, em ordem, o processo de achar ' +
              'e produzir óleo e gás.',
        comp: 'Você diz se uma atividade é upstream ou downstream, e narra o processo de ' +
              'exploração até produção usando first/next/then/finally.',
        live: [
          'Contexto: o que é upstream e downstream na indústria',
          'Exercício de matching / kick-off sobre os dois setores',
          'Leitura com um fluxograma de 4 passos: exploration → possible ' +
          'hydrocarbons → drilling → development/production'
        ],
        bridge: 'Na aula vocês viram o fluxograma do livro. Aqui você treina vocabulário ' +
                'upstream/downstream NOVO, aprende a sequenciar um processo com first/next/' +
                'then/finally, e lê um texto NOVO sobre como a North Star Rig encontra e ' +
                'processa óleo e gás — não é o fluxograma da aula.',
        nextLive: 'Semana 2 · Cargos upstream + present simple — um listening sobre o dia de ' +
                  'um trabalhador upstream e a gramática completa do presente simples.',
        ican: [
          'I can say if an activity is upstream or downstream.',
          'I can describe a process in order with first, next, then, finally.',
          'I can talk about exploration, drilling and production.',
          'I can read a short text about finding and producing oil and gas.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u2w1:cards:core',
                title: '📇 As oito palavras da unidade',
                sub: 'Definições e exemplos da North Star Rig — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u2w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'ud', icon: '🔄', name: 'Upstream ou downstream?', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'og1u2w1:ud:1',
                title: '🔄 Classifique:', main: 'Drilling a new well is a(n) ___ activity.',
                options: DF.shuffle([
                  { label: 'upstream', correct: true }, { label: 'downstream' },
                  { label: 'midstream' }, { label: 'onshore' }
                ]),
                expl: 'Perfurar um poço é achar/produzir óleo — upstream.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u2w1:ud:2',
                title: '🔄 Classifique:', main: 'Refining crude oil into fuel is a(n) ___ activity.',
                options: DF.shuffle([
                  { label: 'downstream', correct: true }, { label: 'upstream' },
                  { label: 'exploration' }, { label: 'drilling' }
                ]),
                expl: 'Refinar e transformar em combustível é depois da produção — downstream.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u2w1:ud:3',
                title: '🔄 A pegadinha:', main: 'Selling fuel at a petrol station is ___.',
                options: DF.shuffle([
                  { label: 'downstream', correct: true }, { label: 'upstream' },
                  { label: 'production' }, { label: 'drilling' }
                ]),
                expl: 'Vender combustível ao consumidor é o fim da cadeia — downstream.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u2w1:match:ud',
                title: '🔗 Ligue a atividade ao setor:',
                pairs: [
                  ['looking for new fields', 'upstream'], ['drilling a well', 'upstream'],
                  ['refining crude oil', 'downstream'], ['selling fuel to drivers', 'downstream'],
                  ['producing gas', 'upstream']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u2w1:type:hyd',
                title: '⌨️ Complete a palavra:', main: 'The substances oil and gas are made of: h _ _ _ _ c _ _ _ _ n s',
                answers: ['hydrocarbons', 'Hydrocarbons'], expl: 'hydrocarbons.' }
            ]
          },

          {
            id: 'seq', icon: '🔢', name: 'Sequenciando o processo', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u2w1:read:seq',
                title: '🔢 First, next, then, finally',
                textTitle: 'Contando um processo em ordem',
                readAloud: false,
                text:
                  'FIRST — o primeiro passo.\nNEXT / THEN — os passos do meio, em ordem.\n' +
                  'FINALLY — o último passo.\n\n' +
                  'Exemplo: First, the team explores an area. Next, they look for signs of ' +
                  'hydrocarbons. Then, they drill a well. Finally, they start production.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: em português a gente às vezes pula essas ' +
                  'palavrinhas — em inglês elas deixam o processo muito mais claro de ouvir ' +
                  'e de ler.',
                nextLabel: 'Entendi ▸' },
              { ui: 'order', cat: 'gra', srsId: 'og1u2w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'First they explore the area',
                expl: 'First + sujeito + verbo.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w1:seq:1',
                title: '🔢 Complete a sequência:', main: '___, the geologist studies the rock samples.',
                options: DF.shuffle([
                  { label: 'First', correct: true }, { label: 'Finally' },
                  { label: 'Then, then' }, { label: 'Last week' }
                ]),
                expl: 'É o primeiro passo do processo — First.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w1:seq:2',
                title: '🔢 Complete a sequência:', main: '___, the crew starts production.',
                options: DF.shuffle([
                  { label: 'Finally', correct: true }, { label: 'First' },
                  { label: 'Next week' }, { label: 'Sometimes' }
                ]),
                expl: 'É o último passo do processo — Finally.' }
            ]
          },

          {
            id: 'reading', icon: '📖', name: 'Como a North Star Rig encontra óleo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u2w1:read:process',
                title: '📖 Finding oil at North Star',
                textTitle: 'From exploration to production',
                text:
                  'First, the North Star team explores a new area of the sea. Sofia, the ' +
                  'geologist, studies rock samples from under the seabed.\n\n' +
                  'Next, if the samples show signs of hydrocarbons, the team reports it to ' +
                  'Control. Erik checks the data twice before the next step.\n\n' +
                  'Then, Kwame and the drilling team drill a test well. It usually takes ' +
                  'several days.\n\n' +
                  'Finally, if the well is good, production starts. The crew collects oil ' +
                  'in barrels and sends daily reports to the head office.',
                nextLabel: 'Li o texto ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u2w1:read:q1',
                title: '📖 Quem estuda as amostras de rocha?',
                options: DF.shuffle([
                  { label: 'Sofia, the geologist', correct: true }, { label: 'Erik' },
                  { label: 'Kwame' }, { label: 'Control' }
                ]),
                expl: '"Sofia, the geologist, studies rock samples."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u2w1:read:q2',
                title: '📖 O que acontece depois que os sinais de hidrocarbonetos são confirmados?',
                options: DF.shuffle([
                  { label: 'The team drills a test well', correct: true },
                  { label: 'Production starts immediately' },
                  { label: 'The rig moves to a new area' },
                  { label: 'The report goes to a customer' }
                ]),
                expl: '"Then, Kwame and the drilling team drill a test well."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u2w1:read:q3',
                title: '📖 O que a equipe faz na etapa final?',
                options: DF.shuffle([
                  { label: 'Collects oil in barrels and sends reports', correct: true },
                  { label: 'Studies rock samples' },
                  { label: 'Explores a new area' },
                  { label: 'Reports signs of hydrocarbons' }
                ]),
                expl: '"Finally... the crew collects oil in barrels and sends daily reports."' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u2w1:build:process', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Narre o processo',
                prompt: 'Descreva os 4 passos de achar e produzir óleo, usando first/next/' +
                        'then/finally.',
                example: 'First, they explore the area. Next, they check for hydrocarbons. ' +
                         'Then, they drill a well. Finally, they start production.',
                mustUse: ['first'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u2w1+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Explique upstream vs downstream com suas palavras',
                prompt: 'Explique a diferença entre upstream e downstream, dando um exemplo ' +
                        'de cada.',
                example: 'Upstream is finding and producing oil. Downstream is refining and ' +
                         'selling it.',
                mustUse: ['upstream'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de sequência', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: '___, the team explores the area.', pool: 'og1Seq', focus: 'sequência',
                  ptHint: '___, a equipe explora a área.', n: 4 }
              ],
              backchain: [
                { text: 'First they explore, then they drill, and finally they produce.',
                  ptHint: 'Primeiro exploram, depois perfuram, e finalmente produzem.' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'jobs-grammar', icon: '⏰',
        title: 'A Day in the Field',
        goal: 'Nomear cargos upstream e usar o present simple completo: afirmativa, negativa, ' +
              'pergunta e advérbios de frequência.',
        comp: 'Você nomeia os cargos upstream, conjuga o presente simples em todas as formas ' +
              'na 3ª pessoa, e usa always/usually/often/sometimes/never sem travar.',
        live: [
          'Listening estilo entrevista de emprego: o dia de um trabalhador upstream',
          'Vocabulário de cargos upstream (driller, geologist, crane operator...)',
          'Present simple completo — afirmativa, negativa don\'t/doesn\'t, pergunta ' +
          'do/does, wh-questions, always/usually/often/sometimes/never'
        ],
        bridge: 'Na aula vocês ouviram a entrevista do livro e viram a gramática toda. Aqui ' +
                'você treina cargos upstream NOVOS e faz drills profundos de present simple ' +
                '— afirmativa, negativa, pergunta e frequência — com rotinas NOVAS da ' +
                'tripulação da North Star Rig.',
        nextLive: 'Semana 3 · Números grandes + e-mail — quantidades de óleo e gás e como ' +
                  'escrever um e-mail informal pedindo informação.',
        ican: [
          'I can name upstream job roles.',
          "I can use the present simple in the affirmative, negative and question forms.",
          'I can ask and answer wh-questions in the present simple.',
          'I can use always, usually, often, sometimes and never correctly.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'jobs', icon: '👷', name: 'Cargos upstream', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'pro', srsId: 'og1u2w2:radar:driller',
                title: '🔊 Que cargo você ouviu?',
                tts: 'driller', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'driller',
                options: DF.shuffle([{ label: 'driller', correct: true }, { label: 'geologist' },
                  { label: 'roughneck' }, { label: 'crane operator' }]),
                expl: 'driller = sondador.', feedbackTts: 'driller' },
              { ui: 'choice', cat: 'pro', srsId: 'og1u2w2:radar:geo',
                title: '🔊 E agora?',
                tts: 'geologist', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'geologist',
                options: DF.shuffle([{ label: 'geologist', correct: true }, { label: 'geotechnician' },
                  { label: 'driller' }, { label: 'production operator' }]),
                expl: 'geologist = geólogo(a).', feedbackTts: 'geologist' },
              { ui: 'match', cat: 'voc', srsId: 'og1u2w2:match:jobs',
                title: '🔗 Ligue o cargo à função:',
                pairs: [
                  ['driller', 'operates the drilling equipment'],
                  ['geologist', 'studies rock to find hydrocarbons'],
                  ['crane operator', 'lifts heavy equipment'],
                  ['maintenance technician', 'repairs machines'],
                  ['production operator', 'controls the flow of oil']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u2w2:type:rough',
                title: '⌨️ Escreva o cargo:', main: 'Worker who does heavy physical work on the drilling floor → ___',
                answers: ['roughneck', 'Roughneck'], expl: 'roughneck.' }
            ]
          },

          {
            id: 'present', icon: '⏰', name: 'Present simple — a regra num relance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u2w2:read:ps',
                title: '⏰ Present simple',
                textTitle: 'As quatro formas',
                readAloud: false,
                text:
                  'AFIRMATIVA\nI/You/We/They work offshore.\nHe/She/It works offshore. (3ª ' +
                  'pessoa: verbo + s)\n\n' +
                  'NEGATIVA\nI/You/We/They don\'t work on Sundays.\nHe/She/It doesn\'t work on ' +
                  'Sundays. (o -s vai para o "does", sai do verbo)\n\n' +
                  'PERGUNTA\nDo you work offshore?\nDoes she operate the crane?\n\n' +
                  'WH-QUESTIONS\nWhat time does the shift start?\nWhere does he work?\n\n' +
                  'FREQUÊNCIA\nalways (100%) · usually · often · sometimes · never (0%) — ' +
                  'ficam ANTES do verbo principal, mas DEPOIS do verbo to be.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w2:ps:aff',
                title: '⏰ Complete:', main: 'Sofia ___ the rock samples every morning.',
                options: DF.shuffle([{ label: 'studies', correct: true }, { label: 'study' },
                  { label: 'is studying' }, { label: 'studying' }]),
                expl: '3ª pessoa: study → studies (consoante + y → ies).' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w2:ps:neg',
                title: '⏰ Negue:', main: 'Kwame ___ on the day shift.',
                options: DF.shuffle([{ label: "doesn't work", correct: true }, { label: "don't works" },
                  { label: "not works" }, { label: "doesn't works" }]),
                expl: '3ª pessoa negativa: doesn\'t + verbo SEM -s.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w2:ps:q',
                title: '⏰ A pergunta certa:', main: '___ Erik check the gauges every hour?',
                options: DF.shuffle([{ label: 'Does', correct: true }, { label: 'Do' },
                  { label: 'Is' }, { label: 'Are' }]),
                trapNote: 'A armadilha: com he/she/it é sempre "Does", nunca "Do" nem "Is".',
                expl: '3ª pessoa pergunta: Does + sujeito + verbo (sem -s).' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w2:ps:wh',
                title: '⏰ Complete a wh-question:', main: '___ does the geologist work?',
                options: DF.shuffle([{ label: 'Where', correct: true }, { label: 'What' },
                  { label: 'Who' }, { label: 'Does' }]),
                expl: 'A pergunta pede lugar → Where.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w2:ps:freq1',
                title: '⏰ Onde vai o advérbio?', main: 'Priya ___ checks the report before lunch.',
                options: DF.shuffle([{ label: 'always', correct: true }]),
                expl: 'Advérbio de frequência antes do verbo principal.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w2:ps:freq2',
                title: '⏰ Complete com sentido:', main: 'The rig ___ stops production — safety comes first.',
                options: DF.shuffle([
                  { label: 'never', correct: true }, { label: 'always' },
                  { label: 'usually' }, { label: 'often' }
                ]),
                expl: 'A frase sugere que a produção pode parar por segurança, mas raramente ' +
                      '— aqui o sentido pede "never" (a plataforma não para de rotina).' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u2w2:drl:aff', unit: 2, waSec: 'Drill · present simple',
                title: '🔁 Drill 1 — a rotina troca', focus: '3ª pessoa afirmativa',
                frame: 'Sofia ___ every day.', ptHint: 'Sofia ___ todos os dias.',
                slots: ['checks the samples', 'writes a report', 'talks to Control',
                        'studies new data', 'walks the deck'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u2w2:drl:neg', unit: 2, waSec: 'Drill · present simple',
                title: '🔁 Drill 2 — negativa', focus: '3ª pessoa negativa',
                frame: "Kwame doesn't ___.", ptHint: 'Kwame não ___.',
                slots: ['work on Sundays', 'drive the crane', 'study the rocks',
                        'read the log', 'stop for lunch early'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u2w2:drl:q', unit: 2, waSec: 'Drill · present simple',
                title: '🔁 Drill 3 — pergunta', focus: '3ª pessoa pergunta',
                frame: 'Does she ___?', ptHint: 'Ela ___?',
                slots: ['operate the crane', 'work the night shift', 'check the gauges',
                        'know the answer', 'live offshore'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u2w2:drl:freq', unit: 2, waSec: 'Drill · frequência',
                title: '🔁 Drill 4 — o advérbio troca', focus: 'frequência',
                frame: 'Erik ___ checks the pump before his shift.',
                ptHint: 'Erik ___ verifica a bomba antes do turno.',
                slots: ['always', 'usually', 'often', 'sometimes', 'never'] }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'og1u2w2:tf:1',
                title: '🔀 Transformação com present simple',
                rounds: [
                  { base: 'Sofia studies rock samples.', cmd: 'Negative',
                    answers: ["Sofia doesn't study rock samples."] },
                  { base: 'Sofia studies rock samples.', cmd: 'Question',
                    answers: ['Does Sofia study rock samples?'] },
                  { base: 'They work offshore.', cmd: 'Negative',
                    answers: ["They don't work offshore."] },
                  { base: 'Kwame operates the drill.', cmd: 'Question',
                    answers: ['Does Kwame operate the drill?'] },
                  { base: 'Does he check the gauges every hour?', cmd: 'Short answer',
                    answers: ['Yes, he does.', 'No, he does not.', "No, he doesn't."] }
                ] }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'O dia de trabalho de Sofia', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u2w2:dlg:sofia',
                title: '👂 Entrevista com Sofia',
                sub: 'Situação nova — não é o listening da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Interviewer', en: 'What do you do, Sofia?' },
                  { who: 'Sofia', en: "I'm a geologist. I study rock samples every day." },
                  { who: 'Interviewer', en: 'Does your job change from day to day?' },
                  { who: 'Sofia', en: "Not really. I usually check new data in the morning, " +
                                     "and I often write reports in the afternoon." }
                ],
                question: 'Com que frequência Sofia escreve relatórios?',
                options: DF.shuffle([
                  { label: 'often, in the afternoon', correct: true },
                  { label: 'always, in the morning' }, { label: 'never' },
                  { label: 'sometimes, at night' }
                ]),
                expl: '"I often write reports in the afternoon."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u2w2:dlg:kwame',
                title: '👂 Entrevista com Kwame',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Interviewer', en: "What's your typical day like, Kwame?" },
                  { who: 'Kwame', en: "I'm a driller. I always check the equipment before I start." },
                  { who: 'Interviewer', en: 'Do you work at night?' },
                  { who: 'Kwame', en: "Sometimes. I work the night shift twice a week." }
                ],
                question: 'Com que frequência Kwame trabalha no turno da noite?',
                options: DF.shuffle([
                  { label: 'sometimes, twice a week', correct: true },
                  { label: 'always' }, { label: 'never' }, { label: 'usually' }
                ]),
                expl: '"Sometimes. I work the night shift twice a week."'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u2w2:build:job', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Descreva a sua rotina',
                prompt: 'Diga o que você faz no seu trabalho ou estudo, usando um advérbio ' +
                        'de frequência.',
                example: 'I usually check my emails in the morning.',
                mustUse: ['usually'] },
              { ui: 'build', cat: 'fun', srsId: 'og1u2w2:build:ask', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Pergunte sobre a rotina de outra pessoa',
                prompt: 'Faça uma pergunta no present simple sobre a rotina de um colega ou ' +
                        'familiar.',
                example: 'Does your brother work on weekends?',
                mustUse: ['does'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Rotina sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u2w2+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 A rotina completa',
                prompt: 'Descreva a rotina de um trabalhador upstream (real ou inventado): o ' +
                        'que ele faz, com que frequência, e o que ele nunca faz.',
                example: 'Kwame always checks the equipment. He usually works the day shift. ' +
                         'He never skips a safety check.',
                mustUse: ['always'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de present simple', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'She ___.', pool: 'og1Routine', focus: 'present simple',
                  ptHint: 'Ela ___.', n: 5 },
                { frame: 'He is ___ a driller.', pool: 'og1Freq', focus: 'frequência',
                  ptHint: 'Ele ___ é sondador.', n: 5 }
              ],
              backchain: [
                { text: 'She {og1Freq} {og1Routine} before lunch.', ptHint: 'Ela ___ faz isso antes do almoço.' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'numbers-email', icon: '🔢',
        title: 'Barrels and Numbers',
        goal: 'Falar quantidades grandes de óleo e gás com barrels/cubic metres/litres, e ' +
              'escrever um e-mail informal pedindo informação.',
        comp: 'Você diz e escreve números grandes com a unidade certa (bbl/m³/litros), e ' +
              'escreve um e-mail informal curto pedindo informação a um colega.',
        live: [
          'Pair work "Talking about jobs": cada aluno tem metade da informação sobre ' +
          'dois perfis e pergunta ao outro para completar uma tabela',
          'Números grandes e unidades de medida do setor: barrels, cubic metres, litres',
          'Listening sobre números grandes',
          'Padrão de e-mail informal pedindo informação (Are/Do/Does/Is)'
        ],
        bridge: 'Na aula vocês fizeram o "Talking about jobs" em DUPLA, perguntando um ao ' +
                'outro. Aqui você faz uma versão SOLO — lê o perfil de UM tripulante e ' +
                'responde perguntas sobre ele — mais números grandes NOVOS e um e-mail ' +
                'informal com um cenário totalmente novo.',
        nextLive: 'Semana 4 · Revisão + Key Words — fecha o mês com o "Communication" sobre ' +
                  'dois campos de petróleo e a revisão geral.',
        ican: [
          'I can say and write large numbers with barrels, cubic metres and litres.',
          'I can read a job profile and answer questions about it.',
          'I can write a short informal email asking for information.',
          "I can use Are/Do/Does/Is to start a polite question in an email."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'numbers', icon: '🔢', name: 'Barrels, cubic metres, litres', tag: 'listening',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u2w3:read:units',
                title: '🔢 As unidades do setor',
                textTitle: 'Como medimos óleo e gás',
                readAloud: false,
                text:
                  'BARRELS (bbl) — a unidade clássica de óleo. Um barril tem cerca de 159 litres.\n\n' +
                  'CUBIC METRES (m³) — usado principalmente para gás natural.\n\n' +
                  'LITRES — usado para quantidades pequenas, como combustível de um veículo.\n\n' +
                  'O número vem ANTES da unidade: "two thousand barrels", não "barrels two thousand".',
                nextLabel: 'Entendi ▸' },
              { ui: 'type', cat: 'spl', srsId: 'og1u2w3:num:1',
                title: '🔢 Ouça e escreva o número:',
                tts: 'Two thousand five hundred barrels.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: 'two thousand five hundred barrels',
                answers: ['2500', '2,500'], exact: true, expl: 'two thousand five hundred = 2500.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u2w3:num:2',
                title: '🔢 Ouça e escreva o número:',
                tts: 'Ten thousand cubic metres.', ttsLabel: '🔊 Ouvir',
                showIfNoTTS: 'ten thousand cubic metres',
                answers: ['10000', '10,000'], exact: true, expl: 'ten thousand = 10000.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u2w3:unit:1',
                title: '🔢 Qual unidade combina?', main: 'North Star Rig produces about 3,000 ___ of oil a day.',
                options: DF.shuffle([
                  { label: 'barrels', correct: true }, { label: 'litres' },
                  { label: 'kilograms' }, { label: 'metres' }
                ]),
                expl: 'Óleo, em produção diária de uma plataforma, se mede em barrels.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u2w3:unit:2',
                title: '🔢 Qual unidade combina?', main: 'The gas field produces 50,000 ___ per day.',
                options: DF.shuffle([
                  { label: 'cubic metres', correct: true }, { label: 'barrels' },
                  { label: 'litres' }, { label: 'tonnes' }
                ]),
                expl: 'Gás natural costuma se medir em cubic metres.' },
              { ui: 'match', cat: 'voc', srsId: 'og1u2w3:match:units',
                title: '🔗 Ligue a unidade ao uso comum:',
                pairs: [
                  ['barrels', 'crude oil production'],
                  ['cubic metres', 'natural gas volume'],
                  ['litres', 'fuel in a small tank']
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills — números', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'spl', srsId: 'og1u2w3:drl:num', unit: 2, waSec: 'Drill · números',
                title: '🔁 Drill — a quantidade troca', focus: 'números grandes',
                frame: 'The field produces ___ a day.', ptHint: 'O campo produz ___ por dia.',
                slots: ['two thousand barrels', 'five hundred cubic metres',
                        'ten thousand litres', 'one thousand two hundred barrels',
                        'three thousand cubic metres'] }
            ]
          },

          {
            id: 'profile', icon: '📋', name: 'Talking about jobs — versão solo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u2w3:read:profile',
                title: '📋 O perfil de Kwame',
                textTitle: 'Crew profile — Kwame Mensah',
                text:
                  'Kwame Mensah is Ghanaian. He works as a driller on the North Star Rig. ' +
                  'He usually works the day shift, from 6 a.m. to 6 p.m. He always checks ' +
                  'the drilling equipment before he starts. He doesn\'t work on his days off ' +
                  '— he calls his family instead. His team produces about 2,000 barrels of ' +
                  'oil a day.',
                nextLabel: 'Li o perfil ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u2w3:profile:q1',
                title: '📋 What is Kwame\'s job?',
                options: DF.shuffle([
                  { label: 'a driller', correct: true }, { label: 'a geologist' },
                  { label: 'a crane operator' }, { label: 'a production operator' }
                ]),
                expl: '"He works as a driller."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u2w3:profile:q2',
                title: '📋 Does Kwame work on his days off?',
                options: DF.shuffle([
                  { label: 'No, he calls his family instead', correct: true },
                  { label: 'Yes, he always works' },
                  { label: 'Yes, but only in the morning' },
                  { label: 'The text doesn\'t say' }
                ]),
                expl: '"He doesn\'t work on his days off — he calls his family instead."' },
              { ui: 'type', cat: 'fun', srsId: 'og1u2w3:profile:q3',
                title: '📋 How many barrels does his team produce a day?',
                sub: 'Só o número.',
                answers: ['2000', '2,000'], exact: true,
                expl: '"His team produces about 2,000 barrels of oil a day."' },
              { ui: 'build', cat: 'fun', srsId: 'og1u2w3:build:profile', unit: 2, waSec: 'Perfil',
                title: '🗣️ Descreva o perfil de Kwame com suas palavras',
                prompt: 'Fale três informações sobre Kwame, usando always/usually/doesn\'t.',
                example: 'Kwame always checks the equipment. He usually works the day shift. ' +
                         "He doesn't work on his days off.",
                mustUse: ['always'],
                expl: 'Esta é a versão SOLO do "Talking about jobs" da aula — lá é em dupla ' +
                      'perguntando, aqui você lê e responde sozinho.' }
            ]
          },

          {
            id: 'email', icon: '✉️', name: 'Informal email — pedindo informação', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u2w3:read:email',
                title: '✉️ O padrão do e-mail informal',
                textTitle: 'Asking a colleague for information',
                readAloud: false,
                text:
                  'SAUDAÇÃO: Hi Sofia, / Hello Erik,\n\n' +
                  'PERGUNTAS (padrão do question bank):\n' +
                  '  Are you free to help me with the report?\n' +
                  '  Do you know the new safety numbers?\n' +
                  '  Does the report show the daily production?\n' +
                  '  Is the drilling team ready for tomorrow?\n\n' +
                  'DESPEDIDA: Thanks, / Best, — e o seu nome.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w3:email:1',
                title: '✉️ Qual pergunta está certa?', main: 'Quero saber se Priya tem os dados do turno.',
                options: DF.shuffle([
                  { label: 'Do you have the shift data?', correct: true },
                  { label: 'You have the shift data?' },
                  { label: 'Have you the shift data?' },
                  { label: 'Are you have the shift data?' }
                ]),
                expl: '"Do you have...?" — pergunta simples com Do.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w3:email:2',
                title: '✉️ Qual pergunta está certa?', main: 'Quero saber se o relatório mostra a produção diária.',
                options: DF.shuffle([
                  { label: 'Does the report show the daily production?', correct: true },
                  { label: 'Does the report shows the daily production?' },
                  { label: 'Is the report show the daily production?' },
                  { label: 'Do the report show the daily production?' }
                ]),
                expl: '"report" é 3ª pessoa singular → Does + verbo sem -s.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u2w3:build:email', unit: 2, waSec: 'E-mail',
                title: '🗣️ Escreva/fale um e-mail curto',
                prompt: 'Peça a um colega da North Star Rig uma informação, usando Hi + uma ' +
                        'pergunta com Do/Does/Are/Is + Thanks.',
                example: 'Hi Sofia, do you have the new rock samples? Thanks, Erik',
                mustUse: ['hi'],
                expl: 'Cenário totalmente novo — não é o e-mail do livro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'E-mail sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u2w3+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Um e-mail com duas perguntas',
                prompt: 'Escreva/fale um e-mail informal com DUAS perguntas diferentes ' +
                        '(uma com Do/Does, uma com Are/Is), pedindo informação sobre um ' +
                        'campo de petróleo.',
                example: 'Hi Kwame, does the new well produce more than the old one? Are you ' +
                         'free to send me the numbers? Thanks, Sofia',
                mustUse: ['hi'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de números e unidades', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The field produces {n} ___ a day.', pool: 'og1Unit', focus: 'unidades',
                  ptHint: 'O campo produz {n} ___ por dia.', n: 5 }
              ],
              numbers: [
                { digits: 4, oh: false, label: '🔢 Ouça e escreva a quantidade de barris:' },
                { digits: 4, oh: false, label: '🔢 Mais uma quantidade:' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Ready for Production',
        goal: 'Revisar present simple, upstream/downstream, cargos e números grandes, e se ' +
              'autoavaliar com um checklist.',
        comp: 'Numa revisão geral, você mistura present simple, vocabulário upstream e ' +
              'números sem errar, e diz com sinceridade o que já consegue fazer sozinho.',
        live: [
          'Projeto de pesquisa sobre campos de óleo e gás reais',
          'Exercício de escrita com foco em spelling',
          'Checklist de autoavaliação e Key Words',
          '"Language test" misturando do/does/don\'t/doesn\'t/wh-questions/números',
          'Communication — pair work de fechamento sobre dois campos de petróleo ' +
          'fictícios com estatísticas de produção'
        ],
        bridge: 'Na aula vocês fizeram o "Communication" em dupla, comparando dois campos. ' +
                'Aqui é uma revisão SOLO no espírito de teste — frases novas, não as da aula ' +
                '— mais o flashcard das Key Words, um checklist "eu consigo…", e uma versão ' +
                'SOLO do "Communication": você recebe as estatísticas de UM campo e compara ' +
                'com outro.',
        nextLive: 'Unit 3 — começa na segunda-feira seguinte.',
        ican: [
          'I can use the present simple (all forms) without stopping to think.',
          'I can name upstream job roles and the exploration-to-production process.',
          'I can say and compare large numbers with the correct unit.',
          'I can honestly say what I can and cannot do yet.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u2w4:cards:review',
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
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w4:mix:1',
                title: '📝 Complete:', main: 'Sofia ___ rock samples, but she ___ not drill wells.',
                options: DF.shuffle([
                  { label: 'studies / does', correct: true }, { label: 'study / do' },
                  { label: 'studies / do' }, { label: 'study / does' }
                ]),
                expl: '3ª pessoa afirmativa: studies. 3ª pessoa negativa: does not.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u2w4:mix:2',
                title: '📝 Complete a pergunta:', main: '___ Kwame work the night shift twice a week?',
                options: DF.shuffle([
                  { label: 'Does', correct: true }, { label: 'Do' },
                  { label: 'Is' }, { label: 'Are' }
                ]),
                expl: 'Kwame → he → Does.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u2w4:mix:num',
                title: '🔢 Ouça e escreva a quantidade:',
                tts: 'Four thousand barrels.', showIfNoTTS: 'four thousand barrels',
                answers: ['4000', '4,000'], exact: true, expl: 'four thousand = 4000.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u2w4:mix:job',
                title: '📝 Complete:', main: 'The ___ lifts heavy equipment onto the deck.',
                options: DF.shuffle([
                  { label: 'crane operator', correct: true }, { label: 'geologist' },
                  { label: 'driller' }, { label: 'roughneck' }
                ]),
                expl: 'crane operator = quem opera o guindaste.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u2w4:mix:ud',
                title: '📝 Classifique:', main: 'Refining crude oil into fuel is ___.',
                options: DF.shuffle([
                  { label: 'downstream', correct: true }, { label: 'upstream' },
                  { label: 'exploration' }, { label: 'drilling' }
                ]),
                expl: 'Refinar é depois da produção → downstream.' },
              { ui: 'match', cat: 'fun', srsId: 'og1u2w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['exploration', 'the search for new oil and gas fields'],
                  ['drilling', 'making a deep hole to reach oil or gas'],
                  ['hydrocarbons', 'the substances oil and gas are made of'],
                  ['production', 'bringing oil or gas to the surface']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u2w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'She does not work on Sundays',
                expl: 'sujeito + does not + verbo (sem -s).' }
            ]
          },

          {
            id: 'fields', icon: '🛢️', name: 'Communication — versão solo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u2w4:read:fields',
                title: '🛢️ Two oilfields',
                textTitle: 'North Star Field vs Deep Horizon Field',
                text:
                  'North Star Field produces 2,500 barrels of oil a day and 8,000 cubic ' +
                  'metres of gas a day. It has 40 workers.\n\n' +
                  'Deep Horizon Field produces 3,200 barrels of oil a day and 6,000 cubic ' +
                  'metres of gas a day. It has 55 workers.\n\n' +
                  'Compare os dois campos antes de responder.',
                nextLabel: 'Pronto para comparar ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u2w4:fields:q1',
                title: '🛢️ Which field produces more oil a day?',
                options: DF.shuffle([
                  { label: 'Deep Horizon Field', correct: true }, { label: 'North Star Field' },
                  { label: 'Both produce the same' }, { label: 'The text doesn\'t say' }
                ]),
                expl: '3,200 barrels (Deep Horizon) > 2,500 barrels (North Star).' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u2w4:fields:q2',
                title: '🛢️ Which field produces more gas a day?',
                options: DF.shuffle([
                  { label: 'North Star Field', correct: true }, { label: 'Deep Horizon Field' },
                  { label: 'Both produce the same' }, { label: 'The text doesn\'t say' }
                ]),
                expl: '8,000 cubic metres (North Star) > 6,000 cubic metres (Deep Horizon).' },
              { ui: 'build', cat: 'fun', srsId: 'og1u2w4:build:fields', unit: 2, waSec: 'Communication',
                title: '🗣️ Compare os dois campos',
                prompt: 'Diga uma frase comparando a produção de óleo dos dois campos.',
                example: 'Deep Horizon Field produces more oil than North Star Field.',
                mustUse: ['more'],
                expl: 'Esta é a versão SOLO do "Communication" da aula — lá é em dupla ' +
                      'comparando estatísticas, aqui você compara sozinho.' }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 2, idx: 0,
                statement: 'I can say if an activity is upstream or downstream.',
                ptHint: 'Eu consigo dizer se uma atividade é upstream ou downstream.' },
              { ui: 'selfcheck', cat: 'fun', unit: 2, idx: 1,
                statement: 'I can use the present simple correctly, in all forms.',
                ptHint: 'Eu consigo usar o present simple certo, em todas as formas.' },
              { ui: 'selfcheck', cat: 'fun', unit: 2, idx: 2,
                statement: 'I can name upstream job roles.',
                ptHint: 'Eu consigo nomear os cargos upstream.' },
              { ui: 'selfcheck', cat: 'fun', unit: 2, idx: 3,
                statement: 'I can say large numbers with barrels, cubic metres or litres.',
                ptHint: 'Eu consigo dizer números grandes com barrels, cubic metres ou litres.' },
              { ui: 'selfcheck', cat: 'fun', unit: 2, idx: 4,
                statement: 'I can write a short informal email asking for information.',
                ptHint: 'Eu consigo escrever um e-mail informal curto pedindo informação.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Ensaio de fala — tudo junto', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u2w4:st:1', unit: 2, waSec: 'Revisão',
                title: '🏆 O resumo completo',
                prompt: 'Fale sobre um trabalhador upstream: cargo, o que ele faz (com ' +
                        'frequência), e quantos barris ou metros cúbicos o campo dele produz.',
                example: 'Kwame is a driller. He always checks the equipment. His field ' +
                         'produces two thousand barrels a day.',
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
              { ui: 'build', cat: 'fun', srsId: 'og1u2w4+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre o processo upstream (real ou inventado): ' +
                        'exploração, cargos envolvidos, e a produção diária em barris.',
                example: 'First, the geologist studies the rock. Then, the driller drills a ' +
                         'well. The field usually produces three thousand barrels a day.',
                expl: 'É o resumo falado de tudo que a unidade ensinou.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
