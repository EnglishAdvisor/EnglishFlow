/* ENGLISH FLOW — week/plan-wc1-01.js
   WORLD CLASS ONE · UNIT 1 "Who We Are" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (World Class 1, National Geographic Learning).
                      As fotos do opener, o texto da Cleopatra, o vídeo do
                      Genographic Project, a ficha da ACEX. Pair work, correção
                      de pronúncia na hora. É o que só existe com outra pessoa.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, a vida REAL do aluno,
                      feedback imediato 24/7.

   Por isso nenhum personagem, texto ou exercício do livro aparece aqui. O
   universo do app é o MEMORY BANK — um arquivo fictício de histórias de vida,
   100% autoral (ESFERA-PEDAGOGIA item 20). Ele sustenta os 4 outcomes da
   unidade sem tocar no conteúdo do livro:

     outcome 1 (past tenses / life events) → gente contando a própria história
     outcome 2 (summarize a study)         → o relatório anual do arquivo
     outcome 3 (explain qualifications)    → candidatar-se a coletor voluntário
     outcome 4 (handle hard questions)     → a entrevista de seleção

   ═══ NÍVEL ═══
   World Class 1 = B2 (high-intermediate). Por isso, e ao contrário do Business
   Starter/Elementary (A1/A2), as INSTRUÇÕES vão em inglês — ESFERA-PEDAGOGIA
   item 21 reserva o guia em PT-BR aos níveis iniciais. O PT-BR sobrevive só
   onde ele ensina: a "armadilha do brasileiro" e a explicação do erro (expl).

   ═══ ESTRUTURA ═══
   1 unidade = 1 mês = 4 semanas = 4 aulas ao vivo. A divisão das seções do
   livro por semana segue `estrutura-wc1.txt` (a ordem programática do Felipe,
   que não é a mesma do sumário do TB):

     Semana 1 · Overview + Vocabulary + Grammar (Review of Past Tenses)
     Semana 2 · Listening + Pronunciation (intonation) + Video
     Semana 3 · Reading + Connections
     Semana 4 · Writing + Speaking + Outcomes + Expanding Your Fluency */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  // ── pools do universo Memory Bank (o gerador usa em "treino infinito") ──
  // gen.js já carregou quando este arquivo roda (ordem dos <script> em
  // aluno.html/semana.html), então dá pra estender os pools sem tocar nele.
  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.wcName = ['Nadia', 'Elias', 'Priya', 'Tomás', 'Amara', 'Kenji',
                            'Larissa', 'William', 'Sofia', 'Mateus'];
    DF.WGEN.POOLS.lifeEvent = ['moved abroad', 'changed careers', 'learned to drive',
                               'met my best friend', 'started university',
                               'lost a job', 'became a parent', 'ran a marathon'];
    DF.WGEN.POOLS.period = ['for six months', 'for three years', 'since 2019',
                            'since I was a child', 'for almost a decade',
                            'since last winter'];
    DF.WGEN.POOLS.trait = ['ambitious', 'patient', 'curious', 'stubborn',
                           'generous', 'practical', 'reserved'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  // As palavras são o programa do livro (COCA); as definições e TODOS os
  // exemplos abaixo são autorais, escritos no universo Memory Bank.
  const WORDS = [
    { en: 'typical', pt: 'típico',
      def: 'showing the usual characteristics of a person or thing',
      ex: 'A typical volunteer at the archive records four stories a month.' },
    { en: 'average', pt: 'média / mediano',
      def: 'the normal amount or quality for a group of things or people',
      ex: 'The average interview lasts about ninety minutes.' },
    { en: 'trait', pt: 'traço (de personalidade)',
      def: 'a particular characteristic a person has',
      ex: 'Patience is the trait every good listener needs.' },
    { en: 'ambitious', pt: 'ambicioso',
      def: 'needing exceptional effort and resources to be carried out successfully',
      ex: 'Recording ten thousand life stories was an ambitious plan.' },
    { en: 'determine', pt: 'determinar / apurar',
      def: 'to find out or confirm certain information',
      ex: 'The team could not determine where the recording was made.' },
    { en: 'statistics', pt: 'estatísticas',
      def: 'numerical facts gathered through analyzing information',
      ex: 'The statistics show that most people talk about family first.' },
    { en: 'set out', pt: 'propor-se a / partir para',
      def: 'to start trying to do something',
      ex: 'She set out to interview every fisherman in the village.' },
    { en: 'come up with', pt: 'bolar / apresentar (uma ideia)',
      def: 'to suggest or think of an idea or plan',
      ex: 'They came up with a way to store the tapes for a century.' }
  ];

  // Palavras do Language Summary da unidade que o Word Bank da aula NÃO cobre —
  // é aqui que o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'generation ·+', pt: 'geração (~30 anos)',
      def: 'the period it takes for children to grow up and have their own families',
      ex: 'Three generations of the same family recorded stories with us.' },
    { en: 'preserve ·+', pt: 'preservar',
      def: 'to save or protect something for the future',
      ex: 'Our only job is to preserve voices that would otherwise disappear.' },
    { en: 'adapt ·+', pt: 'adaptar-se',
      def: 'to change your ideas or behavior to suit a different situation',
      ex: 'Interviewers have to adapt when someone starts to cry.' },
    { en: 'identical ·+', pt: 'idêntico',
      def: 'exactly the same',
      ex: 'No two stories are identical, even inside one family.' },
    { en: 'persuade ·+', pt: 'convencer',
      def: 'to cause someone to do something by giving good reasons',
      ex: 'It took a year to persuade him to talk about the war.' }
  ];

  DF.PLAN.wc1[1] = {
    unit: 1,
    title: 'Who We Are',
    subtitle: 'Seu primeiro mês',
    icon: '🧬',

    mindmap: {
      center: 'Who We Are',
      sub: 'Identidade, origem e as histórias que nos formam',
      branches: [
        {
          icon: '🗣️', name: 'Target vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> não estão no Word Bank da aula — vêm do Language ' +
                'Summary da unidade. <b>Armadilha:</b> <b>statistics</b> é plural em inglês ' +
                '(<i>the statistics show</i>, não <i>shows</i>), e <b>average</b> serve de ' +
                'substantivo, adjetivo e verbo.'
        },
        {
          icon: '⏪', name: 'Simple past',
          leaves: [
            { en: 'We graduated together.', pt: 'ação concluída, tempo definido' },
            { en: 'He worked here for a year.', pt: 'período que acabou' },
            { en: 'I recorded her story last winter.', pt: 'quando? — last winter' },
            { en: 'She set out to find her family.', pt: 'começo definido no passado' }
          ],
          note: 'Marcadores: <b>yesterday · last week · in 2019 · ago</b>. Se dá pra ' +
                'dizer <b>quando</b>, é simple past.'
        },
        {
          icon: '🎞️', name: 'Past continuous',
          leaves: [
            { en: 'I was working when she called.', pt: 'ação em curso interrompida' },
            { en: 'We were living in Recife at the time.', pt: 'pano de fundo' },
            { en: 'What were you doing at 8 p.m.?', pt: 'momento exato no passado' }
          ],
          note: 'É o <b>cenário</b>, não o fato. <b>Armadilha do brasileiro:</b> verbos de ' +
                'estado não entram no contínuo — <i>I was knowing</i> não existe; é ' +
                '<b>I knew</b>.'
        },
        {
          icon: '🔗', name: 'Present perfect',
          leaves: [
            { en: "I've worked here for a year.", pt: 'começou antes, continua agora' },
            { en: 'Have you ever recorded an interview?', pt: 'experiência de vida, sem data' },
            { en: "She's lived in four countries.", pt: 'a vida até aqui' },
            { en: "They haven't found the tape yet.", pt: 'ainda não — relevante agora' }
          ],
          note: '<b>A regra que resolve 90% dos erros:</b> data definida mata o present ' +
                'perfect. <i>I have seen her yesterday</i> está errado — é <b>I saw her ' +
                'yesterday</b>. Marcadores: <b>ever · never · already · yet · recently</b>.'
        },
        {
          icon: '⏳', name: 'Present perfect continuous',
          leaves: [
            { en: "I've been waiting for an hour.", pt: 'ênfase na duração' },
            { en: "She's been studying English since March.", pt: 'contínuo até agora' },
            { en: "We've been recording stories all week.", pt: 'atividade recente, ainda quente' }
          ],
          note: 'Enfatiza <b>quanto tempo</b>, não o resultado. Compare: <i>I\'ve read the ' +
                'file</i> (terminei) × <i>I\'ve been reading the file</i> (ainda estou nela).'
        },
        {
          icon: '📏', name: 'for × since',
          leaves: [
            { en: 'for six months', pt: 'FOR + duração (quanto tempo)' },
            { en: 'since March', pt: 'SINCE + ponto de partida (desde quando)' },
            { en: 'for almost a decade', pt: 'duração longa' },
            { en: 'since I was a child', pt: 'since + oração no passado' },
            { en: 'How long have you been here?', pt: 'a pergunta que pede for/since' }
          ],
          note: '<b>Armadilha:</b> o português usa "há" para os dois casos ("há seis meses"), ' +
                'e por isso o brasileiro troca. Teste rápido: se o que vem depois é um ' +
                '<b>relógio</b> (duração) → <b>for</b>. Se é uma <b>data</b> (marco) → <b>since</b>.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '⏪',
        title: 'Telling Your Story',
        goal: 'Use the four past forms to talk about memorable life events.',
        comp: 'Você conta um acontecimento marcante escolhendo entre simple past, past ' +
              'continuous, present perfect e present perfect continuous — e justifica a escolha.',
        live: [
          'The unit opener: the photo collage and the three warm-up questions',
          'Vocabulary page: "the world\'s most typical human" + the Word Bank',
          'Grammar page: Review of Past Tenses (the four forms in one chart)',
          'The for / since TIP',
          'Pair work: telling a partner about your own categories'
        ],
        bridge: 'Na aula você viu as quatro formas juntas na tabela e praticou com o texto ' +
                'do livro. Aqui você escolhe o tempo verbal sob pressão, em histórias novas ' +
                'do Memory Bank, ganha 5 palavras que o Word Bank não traz — e no fim conta ' +
                'a SUA história.',
        nextLive: 'Semana 2 · Listening + Pronunciation — entonação ascendente e descendente, ' +
                  'e o vídeo do projeto genético.',
        ican: [
          'I can choose between the four past forms and explain why.',
          'I can ask and answer How long…? questions with for and since.',
          'I can describe what I was doing when something happened.',
          'I can use the unit vocabulary to describe people and studies.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u1w1:cards:core',
                title: '📇 The eight words of the unit',
                sub: 'Definições e exemplos do Memory Bank — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u1w1:cards:extra',
                title: '➕ Five the Word Bank does not give you',
                sub: 'Vêm do Language Summary da unidade.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'wordform', icon: '🔤', name: 'Word forms and collocations', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u1w1:wf:1',
                title: '🔤 Complete the sentence:',
                main: 'The archive was founded by an ___ team of six volunteers.',
                options: DF.shuffle([
                  { label: 'ambitious', correct: true }, { label: 'ambition' },
                  { label: 'ambitiously' }, { label: 'ambitiousness' }
                ]),
                expl: 'Antes de substantivo entra o ADJETIVO: an ambitious team. ' +
                      'ambition = substantivo · ambitiously = advérbio.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u1w1:wf:2',
                title: '🔤 Which one is correct?',
                main: 'The statistics ___ that most people begin with a childhood memory.',
                options: DF.shuffle([
                  { label: 'show', correct: true }, { label: 'shows' },
                  { label: 'is showing' }, { label: 'has shown' }
                ]),
                expl: 'statistics é PLURAL em inglês — the statistics show. O brasileiro ' +
                      'erra porque em português "a estatística mostra" é singular.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u1w1:wf:3',
                title: '🔤 Choose the natural collocation:',
                main: 'After three months, they finally ___ a name for the project.',
                options: DF.shuffle([
                  { label: 'came up with', correct: true }, { label: 'came up' },
                  { label: 'set out with' }, { label: 'came out with' }
                ]),
                expl: 'come up with = ter/apresentar uma ideia. O phrasal verb precisa das ' +
                      'TRÊS partes — "came up a name" não existe.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u1w1:wf:4',
                title: '🔤 Complete:',
                main: 'She ___ to record every fisherman in the village — and she did.',
                options: DF.shuffle([
                  { label: 'set out', correct: true }, { label: 'came up with' },
                  { label: 'determined' }, { label: 'set up' }
                ]),
                expl: 'set out (to do something) = propor-se a começar algo. ' +
                      'set up = montar/instalar — outra coisa.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u1w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['trait', 'a characteristic a person has'],
                  ['determine', 'to find out or confirm information'],
                  ['generation', 'about thirty years, parents to children'],
                  ['preserve', 'to protect something for the future'],
                  ['identical', 'exactly the same']
                ] }
            ]
          },

          {
            id: 'stress', icon: '🥁', name: 'Where the stress falls', tag: 'pronúncia',
            items: [
              { ui: 'stress', cat: 'pro', srsId: 'wc1u1w1:str:amb', word: 'ambitious',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'am-BI-tious' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u1w1:str:sta', word: 'statistics',
                pattern: 'oOoo', decoys: ['Oooo', 'ooOo'], syl: 'sta-TIS-tics' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u1w1:str:det', word: 'determine',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'de-TER-mine',
                expl: 'Atenção: determine termina com som de "min", não "main".' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u1w1:str:typ', word: 'typical',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'TY-pi-cal' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u1w1:str:gen', word: 'generation',
                pattern: 'ooOo', decoys: ['Oooo', 'oOoo'], syl: 'ge-ne-RA-tion',
                expl: 'Toda palavra terminada em -tion puxa a força pra sílaba ANTERIOR ao -tion.' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u1w1:str:ide', word: 'identical',
                pattern: 'oOoo', decoys: ['Oooo', 'ooOo'], syl: 'i-DEN-ti-cal' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u1w1:str:arc', word: 'archaeologist',
                pattern: 'ooOoo', decoys: ['Ooooo', 'oooOo'], syl: 'ar-chae-O-lo-gist' }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Past tenses at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u1w1:read:glance',
                title: '🔍 The four forms, one decision',
                textTitle: 'Which past do I use?',
                readAloud: false,
                text:
                  'SIMPLE PAST — the action is finished and you can say WHEN.\n\n' +
                  'She recorded forty interviews in 2019.\n' +
                  'Markers: yesterday, last week, in 2019, two years ago.\n\n' +
                  'PAST CONTINUOUS — the scene, not the fact. Something was in progress.\n\n' +
                  'I was editing the tape when the power went out.\n' +
                  'It sets the background; the simple past interrupts it.\n\n' +
                  'PRESENT PERFECT — it started in the past and still matters now, ' +
                  'or it is life experience with no date.\n\n' +
                  'She has worked at the archive for three years. (still there)\n' +
                  'Have you ever recorded a stranger? (experience, no date)\n\n' +
                  'PRESENT PERFECT CONTINUOUS — same bridge to now, but the point is ' +
                  'HOW LONG it has been going on.\n\n' +
                  'We have been recording stories all week. (and we are tired)\n\n' +
                  'A ARMADILHA DO BRASILEIRO: em português "eu trabalho aqui ha tres anos" ' +
                  'usa o presente. Em ingles isso e present perfect: I HAVE WORKED here for ' +
                  'three years. Dizer "I work here for three years" e o erro numero um deste ' +
                  'nivel.',
                nextLabel: 'Got it ▸' }
            ]
          },

          {
            id: 'pick', icon: '🎯', name: 'Pick the right past', tag: 'gramática',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w1:pk:1',
                title: '🎯 Choose the correct form:',
                main: 'The archive ___ its first interview in 2014.',
                options: DF.shuffle([
                  { label: 'recorded', correct: true }, { label: 'has recorded' },
                  { label: 'was recording' }, { label: 'has been recording' }
                ]),
                expl: '"in 2014" é data definida → simple past. Data fechada nunca aceita ' +
                      'present perfect.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w1:pk:2',
                title: '🎯 Choose the correct form:',
                main: 'Nadia ___ at the archive since she finished university.',
                options: DF.shuffle([
                  { label: 'has worked', correct: true }, { label: 'worked' },
                  { label: 'was working' }, { label: 'works' }
                ]),
                expl: 'since + começou no passado e continua → present perfect. ' +
                      'Aqui é onde o brasileiro escreve "works" e erra.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w1:pk:3',
                title: '🎯 Choose the correct form:',
                main: 'I ___ the tape when the interviewee suddenly stopped talking.',
                options: DF.shuffle([
                  { label: 'was recording', correct: true }, { label: 'recorded' },
                  { label: 'have recorded' }, { label: 'had recorded' }
                ]),
                expl: 'Ação em curso interrompida por outra → past continuous + simple past.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w1:pk:4',
                title: '🎯 Choose the correct form:',
                main: '"You look exhausted." — "I ___ interviews all morning."',
                options: DF.shuffle([
                  { label: "have been doing", correct: true }, { label: 'have done' },
                  { label: 'did' }, { label: 'was doing' }
                ]),
                expl: 'A ênfase é na DURAÇÃO que explica o cansaço agora → present perfect ' +
                      'continuous.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w1:pk:5',
                title: '🎯 Which sentence is WRONG?',
                main: 'Only one of these is impossible in English.',
                options: DF.shuffle([
                  { label: 'I have met her last Tuesday.', correct: true },
                  { label: 'I met her last Tuesday.' },
                  { label: 'I have met her before.' },
                  { label: 'I had met her before she moved.' }
                ]),
                expl: 'Present perfect + data fechada (last Tuesday) é proibido. ' +
                      'Ou tira a data, ou usa simple past.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w1:pk:6',
                title: '🎯 for or since?',
                main: 'They have been collecting stories ___ almost a decade.',
                options: DF.shuffle([
                  { label: 'for', correct: true }, { label: 'since' },
                  { label: 'ago' }, { label: 'during' }
                ]),
                expl: '"almost a decade" é DURAÇÃO (relógio) → for. Se fosse "2015" (marco) ' +
                      '→ since.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w1:pk:7',
                title: '🎯 for or since?',
                main: 'He has not spoken about the war ___ he left the country.',
                options: DF.shuffle([
                  { label: 'since', correct: true }, { label: 'for' },
                  { label: 'from' }, { label: 'when' }
                ]),
                expl: 'since aceita uma ORAÇÃO no passado ("he left"), não só uma data.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u1w1:tf:1',
                title: '🔀 Past tense transformation',
                rounds: [
                  { base: 'She recorded the interview.', cmd: 'Question',
                    answers: ['Did she record the interview?'] },
                  { base: 'They have found the tape.', cmd: 'Negative',
                    answers: ["They haven't found the tape.", 'They have not found the tape.'] },
                  { base: 'He was living in Recife.', cmd: 'Question',
                    answers: ['Was he living in Recife?'] },
                  { base: 'I have been waiting for an hour.', cmd: 'Negative',
                    answers: ["I haven't been waiting for an hour.",
                              'I have not been waiting for an hour.'] },
                  { base: 'Have you ever recorded a stranger?', cmd: 'Short answer',
                    answers: ['Yes, I have.', 'No, I have not.', "No, I haven't."] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u1w1:drl:hl', unit: 1, waSec: 'Drill · past tenses',
                title: '🔁 Drill 1 — the period changes', focus: 'for / since',
                frame: "I've been living here ___.", ptHint: 'Moro aqui ___.',
                slots: ['for six months', 'since 2019', 'for almost a decade',
                        'since I was a child', 'for three years', 'since last winter'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u1w1:drl:when', unit: 1, waSec: 'Drill · past tenses',
                title: '🔁 Drill 2 — the event changes', focus: 'simple past',
                frame: 'Last year I ___.', ptHint: 'No ano passado eu ___.',
                slots: ['changed careers', 'moved abroad', 'learned to drive',
                        'started university', 'ran a marathon'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u1w1:drl:ing', unit: 1, waSec: 'Drill · past tenses',
                title: '🔁 Drill 3 — the background changes', focus: 'past continuous',
                frame: 'I was ___ when she called.', ptHint: 'Eu estava ___ quando ela ligou.',
                slots: ['working', 'driving home', 'having dinner',
                        'recording an interview', 'getting ready to leave'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u1w1:drl:trait', unit: 1, waSec: 'Drill · vocabulary',
                title: '🔁 Drill 4 — the trait changes', focus: 'vocabulário',
                frame: 'The most useful trait for this job is being ___.',
                ptHint: 'O traço mais útil para este trabalho é ser ___.',
                slots: ['patient', 'curious', 'ambitious', 'practical', 'reserved'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u1w1:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 The How long answer', ptHint: 'Trabalho no arquivo há quase três anos.',
                chain: ['three years', 'for almost three years',
                        'at the archive for almost three years',
                        "I've been working at the archive for almost three years."] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u1w1:bc:2', unit: 1, waSec: 'Backchain',
                title: '🧱 The interrupted scene', ptHint: 'Eu estava editando a fita quando a luz caiu.',
                chain: ['went out', 'the power went out', 'when the power went out',
                        'editing the tape when the power went out',
                        'I was editing the tape when the power went out.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u1w1:bc:3', unit: 1, waSec: 'Backchain',
                title: '🧱 The life-experience question', ptHint: 'Você já entrevistou um desconhecido?',
                chain: ['a stranger', 'interviewed a stranger', 'ever interviewed a stranger',
                        'Have you ever interviewed a stranger?'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u1w1:dlg:1',
                title: '🎧 First day at the Memory Bank',
                sub: 'Situação nova — não é o diálogo da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Nadia', en: 'So, how long have you been volunteering here?' },
                  { who: 'Elias', en: "Since March. I've recorded about thirty interviews." },
                  { who: 'Nadia', en: 'Thirty! What were you doing before this?' },
                  { who: 'Elias', en: 'I was teaching history. I left last year.' }
                ],
                question: 'When did Elias stop teaching?',
                options: DF.shuffle([
                  { label: 'Last year', correct: true }, { label: 'In March' },
                  { label: 'He has not stopped' }, { label: 'Thirty years ago' }
                ]),
                expl: '"I left last year" — simple past com data fechada. ' +
                      '"Since March" é quando ele COMEÇOU aqui, não quando parou de ensinar.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u1w1:dlg:2',
                title: '🎧 A difficult recording',
                sub: 'Repare em como ela corrige o tempo verbal do colega.',
                lines: [
                  { who: 'Tomás', en: 'I have finished the Ramos interview yesterday.' },
                  { who: 'Priya', en: 'You finished it yesterday. No "have" with yesterday.' },
                  { who: 'Tomás', en: 'Right. I finished it yesterday. It took four hours.' },
                  { who: 'Priya', en: "Four hours! You've been working too hard." }
                ],
                question: 'Why was Tomás corrected?',
                options: DF.shuffle([
                  { label: 'A finished time word cannot take present perfect', correct: true },
                  { label: 'He used the wrong verb' },
                  { label: 'The interview took three hours, not four' },
                  { label: 'He should have used the past continuous' }
                ]),
                expl: 'yesterday / last week / in 2019 fecham o tempo — e tempo fechado ' +
                      'expulsa o present perfect.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u1w1:dlg:3',
                title: '🎧 Three volunteers, no text on screen',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Amara', en: "I've been collecting stories since 2018." },
                  { who: 'Kenji', en: 'I started last month, so I am still learning.' },
                  { who: 'Larissa', en: 'I worked here for two years and then I moved abroad.' }
                ],
                question: 'Who does NOT work at the archive anymore?',
                options: DF.shuffle([
                  { label: 'Larissa', correct: true }, { label: 'Amara' },
                  { label: 'Kenji' }, { label: 'All three still work there' }
                ]),
                expl: '"I worked here for two years" — simple past = acabou. As outras duas ' +
                      'usam formas que fazem ponte com o presente.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w1:bld:me1', unit: 1, waSec: 'Sua vez',
                title: '🗣️ How long?',
                prompt: 'Say how long you have been studying English. Use for or since.',
                example: "I've been studying English for about four years.",
                mustUse: ['studying'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a escolha do tempo verbal e a pronúncia.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w1:bld:me2', unit: 1, waSec: 'Sua vez',
                title: '🗣️ A memorable event',
                prompt: 'Tell one thing that happened to you when you were a child. ' +
                        'Say WHEN it happened.',
                example: 'When I was eight, I moved to another city and lost all my friends.',
                mustUse: ['when'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w1:bld:me3', unit: 1, waSec: 'Sua vez',
                title: '🗣️ The interrupted scene',
                prompt: 'What were you doing this time yesterday? Then say what interrupted it.',
                example: 'I was answering emails when my daughter called me.',
                mustUse: ['was'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w1:bld:me4', unit: 1, waSec: 'Sua vez',
                title: '🗣️ Describe yourself with the unit words',
                prompt: 'Describe one trait of yours using at least two words from this unit.',
                example: 'I would say my main trait is being ambitious — I always set out ' +
                         'to finish what I start.',
                mustUse: ['trait'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w1+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Sixty seconds about your life',
                prompt: 'Talk for one minute about your life so far. Use at least three ' +
                        'different past forms.',
                example: 'I grew up in Macaé. I have been working offshore since 2016, and ' +
                         'last year I was studying for a promotion when my schedule changed.',
                expl: 'É exatamente o que a aula ao vivo vai cobrar. Grave e mande.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w1+:b2', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Correct the sentence out loud',
                prompt: 'This sentence is wrong: "I have seen her yesterday." Say it correctly ' +
                        'and explain why in English.',
                example: 'I saw her yesterday — because yesterday is a finished time, ' +
                         'so it cannot take the present perfect.',
                mustUse: ['saw'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de past tenses', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I've been living here ___.", pool: 'period', focus: 'for / since',
                  ptHint: 'Moro aqui ___.', n: 5 },
                { frame: 'Last year I ___.', pool: 'lifeEvent', focus: 'simple past',
                  ptHint: 'No ano passado eu ___.', n: 5 },
                { frame: 'The trait I value most is being ___.', pool: 'trait',
                  focus: 'vocabulário', ptHint: 'O traço que mais valorizo é ser ___.', n: 5 }
              ],
              backchain: [
                { text: "I've been working here {period}.", ptHint: 'Trabalho aqui…' },
                { text: 'When I was younger I {lifeEvent}.', ptHint: 'Quando eu era mais novo…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'What the Study Found',
        goal: 'Summarize the key outcomes of a study, and hear the difference between ' +
              'a question and a statement.',
        comp: 'Você ouve uma reportagem sobre um estudo, resume o que ele descobriu, e ' +
              'controla a entonação para que a sua pergunta soe como pergunta.',
        live: [
          'Listening: the New Family Tree website advertisement',
          'The TIP on repeated information (repetition = importance)',
          'Pronunciation: rising and falling intonation (p.144)',
          'Video: the human family tree — the DNA study',
          'Pair work: what would you learn about your own heritage?'
        ],
        bridge: 'Na aula você ouviu o anúncio do livro e viu o vídeo. Aqui você treina o ' +
                'ouvido em gravações NOVAS do Memory Bank, e a entonação vira exercício ' +
                'de decisão: subiu ou desceu?',
        nextLive: 'Semana 3 · Reading + Connections — ler sobre o passado distante e ' +
                  'preencher a ficha de candidatura.',
        ican: [
          'I can summarize what a study set out to do and what it found.',
          'I can hear whether a speaker is asking or telling.',
          'I can use rising intonation on yes/no questions and falling on wh- questions.',
          'I can take notes on the key numbers in a report.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'intonation', icon: '📈', name: 'Rising or falling?', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'wc1u1w2:read:int',
                title: '📈 The rule in one screen',
                textTitle: 'Rising and falling intonation',
                readAloud: false,
                text:
                  'RISING — the pitch goes UP at the end.\n\n' +
                  'Yes/no questions: Have you recorded it yet? ↗\n' +
                  'Lists, before the last item: We record voices, songs, ↗ and letters. ↘\n\n' +
                  'FALLING — the pitch goes DOWN at the end.\n\n' +
                  'Statements: The archive is closed. ↘\n' +
                  'Wh- questions: Where did you find the tape? ↘\n\n' +
                  'A ARMADILHA DO BRASILEIRO: em portugues a pergunta com QUE/ONDE/QUANDO ' +
                  'costuma subir no fim. Em ingles ela DESCE. Perguntar "Where are you from?" ' +
                  'com entonacao subindo soa inseguro ou impaciente para o ouvido nativo — ' +
                  'e um dos motivos de brasileiro fluente ainda soar estrangeiro.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u1w2:int:1',
                title: '📈 Rising or falling?', main: 'Are you still hungry after all that pizza?',
                tts: 'Are you still hungry after all that pizza?',
                options: DF.shuffle([
                  { label: 'Rising ↗', correct: true }, { label: 'Falling ↘' }
                ]),
                expl: 'Pergunta de sim/não → sobe.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u1w2:int:2',
                title: '📈 Rising or falling?', main: 'Where are the car keys?',
                tts: 'Where are the car keys?',
                options: DF.shuffle([
                  { label: 'Falling ↘', correct: true }, { label: 'Rising ↗' }
                ]),
                expl: 'Pergunta com wh- (where) → desce. É o oposto do português.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u1w2:int:3',
                title: '📈 Rising or falling?', main: 'The recording starts at noon.',
                tts: 'The recording starts at noon.',
                options: DF.shuffle([
                  { label: 'Falling ↘', correct: true }, { label: 'Rising ↗' }
                ]),
                expl: 'Afirmação → desce.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u1w2:int:4',
                title: '📈 Rising or falling?', main: 'Do we have anything left in the archive?',
                tts: 'Do we have anything left in the archive?',
                options: DF.shuffle([
                  { label: 'Rising ↗', correct: true }, { label: 'Falling ↘' }
                ]),
                expl: 'Começa com auxiliar (Do) → é sim/não → sobe.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u1w2:int:5',
                title: '📈 Same words, two meanings. Which is the QUESTION?',
                main: 'She has already sent the file',
                options: DF.shuffle([
                  { label: 'The one that rises at the end ↗', correct: true },
                  { label: 'The one that falls at the end ↘' },
                  { label: 'Both sound the same' },
                  { label: 'Neither — you need "did"' }
                ]),
                expl: 'Sem inverter a ordem, a ENTONAÇÃO é a única coisa que transforma a ' +
                      'afirmação em pergunta. É por isso que ela importa.' }
            ]
          },

          {
            id: 'say-int', icon: '🎤', name: 'Say it with the right pitch', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u1w2:rep:1', unit: 1, waSec: 'Intonation',
                title: '🎤 Rising — let it go up:', target: 'Have you ever recorded an interview?',
                ptHint: 'Você já gravou uma entrevista?' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u1w2:rep:2', unit: 1, waSec: 'Intonation',
                title: '🎤 Falling — let it drop:', target: 'Where did you find that photograph?',
                ptHint: 'Onde você achou aquela fotografia?' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u1w2:rep:3', unit: 1, waSec: 'Intonation',
                title: '🎤 A list — up, up, then down:',
                target: 'We collect voices, letters, and photographs.',
                ptHint: 'Coletamos vozes, cartas e fotografias.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u1w2:rep:4', unit: 1, waSec: 'Intonation',
                title: '🎤 The two in a row:',
                target: 'Are you free on Thursday? What time works for you?',
                ptHint: 'Você está livre na quinta? Que horas funciona pra você?' }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'Listen and take notes', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u1w2:dlg:ad',
                title: '👂 A radio spot for the Memory Bank',
                sub: 'Sem texto na tela. O que se repete é o que importa.',
                hideText: true,
                lines: [
                  { who: 'Announcer', en: 'Do you have a story nobody has written down?' },
                  { who: 'Announcer', en: 'The Memory Bank records it, preserves it, and ' +
                                          'gives your family a copy. Free, forever.' },
                  { who: 'Announcer', en: 'We have already preserved eleven thousand voices ' +
                                          'in nineteen countries.' },
                  { who: 'Announcer', en: 'Bring your story. We will keep it safe.' }
                ],
                question: 'What is repeated, and therefore the main promise?',
                options: DF.shuffle([
                  { label: 'That the story will be preserved and kept safe', correct: true },
                  { label: 'That the service costs nineteen euros' },
                  { label: 'That only families in nineteen countries can join' },
                  { label: 'That you must write the story down first' }
                ]),
                expl: 'preserves it / keep it safe — a repetição marca a ideia central. ' +
                      'É a TIP da aula aplicada a um áudio novo.'
              },
              { ui: 'type', cat: 'fun', srsId: 'wc1u1w2:type:num1',
                title: '👂 How many voices have been preserved?',
                sub: 'Escreva só o número, em algarismos.',
                tts: 'We have already preserved eleven thousand voices in nineteen countries.',
                answers: ['11000', '11.000', '11,000'], exact: true,
                expl: 'eleven thousand = 11,000. Número em listening é onde mais se perde ponto.' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u1w2:dlg:study',
                title: '👂 The researcher explains the study',
                sub: 'Ouça procurando três coisas: o objetivo, o método, o resultado.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'What did your team set out to find?' },
                  { who: 'Dr. Vale', en: 'We wanted to determine what people talk about ' +
                                         'first when nobody interrupts them.' },
                  { who: 'Host', en: 'And how did you do it?' },
                  { who: 'Dr. Vale', en: 'We analysed four thousand recordings and coded ' +
                                          'the first two minutes of each one.' },
                  { who: 'Host', en: 'What did the statistics show?' },
                  { who: 'Dr. Vale', en: 'Seventy per cent began with a childhood memory. ' +
                                          'Almost nobody began with work.' }
                ],
                question: 'What did the study find?',
                options: DF.shuffle([
                  { label: 'Most people start with a childhood memory', correct: true },
                  { label: 'Most people start by talking about their job' },
                  { label: 'Four thousand people refused to be recorded' },
                  { label: 'Interruptions make people talk longer' }
                ]),
                expl: 'objetivo (determine what people talk about first) · método (4,000 ' +
                      'recordings) · resultado (70% childhood). Essa é a estrutura de todo ' +
                      'resumo de estudo.'
              },
              { ui: 'type', cat: 'fun', srsId: 'wc1u1w2:type:num2',
                title: '👂 How many recordings did they analyse?',
                sub: 'Só o número.',
                tts: 'We analysed four thousand recordings.',
                answers: ['4000', '4.000', '4,000'], exact: true,
                expl: 'four thousand = 4,000.' },
              { ui: 'order', cat: 'fun', srsId: 'wc1u1w2:ord:summary',
                title: '🧩 Put a study summary in the right order:',
                answer: 'The team set out to determine what people say first they analysed ' +
                        'four thousand recordings and found that most people begin with ' +
                        'a childhood memory',
                expl: 'Objetivo → método → resultado. É a ordem que a banca (e o professor) ' +
                      'espera ouvir.' }
            ]
          },

          {
            id: 'summarize', icon: '🧾', name: 'Summarize the study', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'fun', srsId: 'wc1u1w2:bc:1', unit: 1, waSec: 'Backchain',
                title: '🧱 The objective sentence',
                ptHint: 'A equipe se propôs a descobrir o que as pessoas falam primeiro.',
                chain: ['say first', 'what people say first',
                        'to determine what people say first',
                        'The team set out to determine what people say first.'] },
              { ui: 'backchain', cat: 'fun', srsId: 'wc1u1w2:bc:2', unit: 1, waSec: 'Backchain',
                title: '🧱 The result sentence',
                ptHint: 'As estatísticas mostram que setenta por cento começaram com uma ' +
                        'lembrança de infância.',
                chain: ['a childhood memory', 'began with a childhood memory',
                        'that seventy per cent began with a childhood memory',
                        'The statistics show that seventy per cent began with a childhood memory.'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w2:bld:sum', unit: 1, waSec: 'Sua vez',
                title: '🧾 Summarize it yourself',
                prompt: 'In three sentences, summarize the study you just heard: what they ' +
                        'set out to do, how they did it, and what they found.',
                example: 'The team set out to determine what people talk about first. They ' +
                         'analysed four thousand recordings. They found that seventy per cent ' +
                         'began with a childhood memory.',
                mustUse: ['set out'],
                expl: 'Este é o outcome 2 da unidade — "summarize the key outcomes of a study". ' +
                      'Mande o áudio; o professor pontua de 1 a 5.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w2:bld:own', unit: 1, waSec: 'Sua vez',
                title: '🗣️ And you?',
                prompt: 'If someone recorded YOUR life story, what would you talk about first? ' +
                        'Answer and say why.',
                example: 'I would probably start with my grandfather, because he was the one ' +
                         'who taught me to work.',
                mustUse: ['because'] }
            ]
          },

          {
            id: 'practice-w2', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u1w2:wr:1',
                title: '📝 Complete:', main: 'The researchers could not ___ where the tape came from.',
                options: DF.shuffle([
                  { label: 'determine', correct: true }, { label: 'preserve' },
                  { label: 'persuade' }, { label: 'adapt' }
                ]),
                expl: 'determine = apurar/confirmar uma informação.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w2:wr:2',
                title: '📝 Complete:', main: 'They ___ four thousand recordings before publishing.',
                options: DF.shuffle([
                  { label: 'analysed', correct: true }, { label: 'have analysed yesterday' },
                  { label: 'were analyse' }, { label: 'has analysed' }
                ]),
                expl: 'Ação concluída do estudo → simple past.' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u1w2:match:parts',
                title: '🔗 Match each phrase to the part of a study it belongs to:',
                pairs: [
                  ['We set out to…', 'the objective'],
                  ['We analysed 4,000…', 'the method'],
                  ['The statistics show…', 'the result'],
                  ['This suggests that…', 'the conclusion']
                ] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w2+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Summarize in ONE sentence',
                prompt: 'Now compress the whole study into a single sentence with a comma.',
                example: 'After analysing four thousand recordings, the team found that most ' +
                         'people begin their life story with a childhood memory.',
                expl: 'Comprimir sem perder o essencial é o que separa B1 de B2.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w2+:b2', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Ask five questions in a row',
                prompt: 'Interview the researcher: ask three yes/no questions (rising) and ' +
                        'two wh- questions (falling), one after the other.',
                example: 'Did you expect that result? Have you published it yet? Are you ' +
                         'repeating the study? What surprised you most? Where will you go next?',
                expl: 'O professor vai ouvir SÓ a entonação: as três primeiras sobem, as ' +
                      'duas últimas descem.' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de entonação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Have you ever ___?', pool: 'lifeEvent', focus: 'rising ↗',
                  ptHint: 'Você já ___?', n: 5 },
                { frame: 'How long have you been here — ___?', pool: 'period',
                  focus: 'for / since', ptHint: 'Há quanto tempo…', n: 5 }
              ],
              backchain: [
                { text: 'The team set out to determine what people say first.',
                  ptHint: 'A equipe se propôs a…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'Reading Between the Lines',
        goal: 'Tell the difference between what a text proves, suggests, and denies — ' +
              'and present your own qualifications.',
        comp: 'Você lê um texto sobre o passado e classifica cada afirmação em ' +
              'definitely true / possible / definitely false, e depois explica por que ' +
              'você seria bom em alguma coisa.',
        live: [
          'Reading: the search for the last queen of Egypt',
          'The T / P / F exercise (definitely true, possible, definitely false)',
          'Dates and numbers that matter to the search',
          'Connections: the cultural ambassador advertisement',
          'Filling in Sections 1–4 of the application form'
        ],
        bridge: 'Na aula você fez o T/P/F com o texto do livro. Aqui a mesma habilidade ' +
                'vai para um texto NOVO — e a ficha de candidatura vira a sua, com a sua ' +
                'formação e a sua experiência reais.',
        nextLive: 'Semana 4 · Writing + Speaking — a carta de apresentação e a entrevista.',
        ican: [
          'I can separate what a text states from what it only suggests.',
          'I can find the evidence in the text that supports my answer.',
          'I can present my education and experience clearly.',
          'I can explain why I would be good at something.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: The Tape in the Wall', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u1w3:read:text',
                title: '📖 A new text, the same skill',
                textTitle: 'The Tape in the Wall',
                text:
                  'In 2011, builders working on an old post office in Porto found a metal box ' +
                  'sealed inside a wall. Inside there were nine reels of tape and a single ' +
                  'sheet of paper with eleven names on it.\n\n' +
                  'The tapes were badly damaged, but archivists managed to recover about forty ' +
                  'minutes of sound. On them, eleven people describe leaving their villages ' +
                  'between 1938 and 1951. Nobody says why they were recorded, and no date ' +
                  'appears anywhere on the box.\n\n' +
                  'Ana Sardinha, the archivist who led the recovery, believes a post office ' +
                  'clerk made the recordings privately. "The equipment was expensive," she ' +
                  'says. "Whoever did this was not doing it for fun." Others disagree. A ' +
                  'second team argues the voices were collected for a government survey that ' +
                  'was cancelled, though no record of such a survey has been found.\n\n' +
                  'Of the eleven names on the paper, seven have been matched to people who ' +
                  'lived in the north of the country. Two of them were still alive when the ' +
                  'box was opened. Neither remembered being recorded.',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w3:tpf:1',
                title: '📖 T · P · F — decide:',
                main: '"The tapes were recorded by a post office clerk."',
                options: DF.shuffle([
                  { label: 'P — possible, but not 100% certain', correct: true },
                  { label: 'T — definitely true' },
                  { label: 'F — definitely false' }
                ]),
                expl: 'O texto diz "Ana Sardinha BELIEVES". Crença de uma especialista não é ' +
                      'prova — é P. Repare no verbo: believes / argues / suggests = P.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w3:tpf:2',
                title: '📖 T · P · F — decide:',
                main: '"Eleven names were written on the sheet of paper."',
                options: DF.shuffle([
                  { label: 'T — definitely true', correct: true },
                  { label: 'P — possible, but not 100% certain' },
                  { label: 'F — definitely false' }
                ]),
                expl: 'Está escrito literalmente: "a single sheet of paper with eleven names ' +
                      'on it". Fato declarado = T.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w3:tpf:3',
                title: '📖 T · P · F — decide:',
                main: '"The box had the date written on the outside."',
                options: DF.shuffle([
                  { label: 'F — definitely false', correct: true },
                  { label: 'P — possible, but not 100% certain' },
                  { label: 'T — definitely true' }
                ]),
                expl: '"no date appears anywhere on the box" — o texto NEGA. Negação ' +
                      'explícita = F.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w3:tpf:4',
                title: '📖 T · P · F — decide:',
                main: '"A government survey collected the voices."',
                options: DF.shuffle([
                  { label: 'P — possible, but not 100% certain', correct: true },
                  { label: 'T — definitely true' },
                  { label: 'F — definitely false' }
                ]),
                expl: 'Uma equipe "argues" isso, mas "no record of such a survey has been ' +
                      'found". Defendido sem prova = P, não F.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w3:tpf:5',
                title: '📖 T · P · F — decide:',
                main: '"All eleven people have been identified."',
                options: DF.shuffle([
                  { label: 'F — definitely false', correct: true },
                  { label: 'T — definitely true' },
                  { label: 'P — possible, but not 100% certain' }
                ]),
                expl: 'Sete de onze foram identificados — o texto dá o número exato, e sete ' +
                      'não é todos.' },
              { ui: 'type', cat: 'fun', srsId: 'wc1u1w3:num:1',
                title: '📖 How many minutes of sound were recovered?',
                sub: 'Só o número.',
                answers: ['40'], exact: true,
                expl: '"about forty minutes of sound".' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w3:inf:1',
                title: '📖 Why does Ana Sardinha think it was not done for fun?',
                main: 'Find her reason in the text.',
                options: DF.shuffle([
                  { label: 'Because the equipment was expensive', correct: true },
                  { label: 'Because the tapes were hidden in a wall' },
                  { label: 'Because eleven people were involved' },
                  { label: 'Because the recordings lasted forty minutes' }
                ]),
                expl: 'Ela dá a razão em discurso direto: "The equipment was expensive."' }
            ]
          },

          {
            id: 'hedging', icon: '⚖️', name: 'The language of maybe', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u1w3:read:hedge',
                title: '⚖️ How writers signal certainty',
                textTitle: 'Certain, possible, denied',
                readAloud: false,
                text:
                  'CERTAIN (→ T): the text states it. was, were, found, shows, proves.\n' +
                  'Seven names have been matched.\n\n' +
                  'POSSIBLE (→ P): the text hedges. believes, argues, suggests, may, ' +
                  'might, is thought to, probably, appears to.\n' +
                  'A clerk may have made the recordings.\n\n' +
                  'DENIED (→ F): the text contradicts it. no, none, never, nobody, ' +
                  'nothing, did not, failed to.\n' +
                  'No date appears anywhere on the box.\n\n' +
                  'A ARMADILHA: a questao T/P/F nao pergunta se a frase e verdade no mundo. ' +
                  'Pergunta o que ESTE TEXTO garante. Se voce sabe de fora que algo e ' +
                  'verdade, mas o texto so sugere, a resposta continua sendo P.',
                nextLabel: 'Got it ▸' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u1w3:match:hedge',
                title: '🔗 Match the verb to what it signals:',
                pairs: [
                  ['The records show…', 'certain'],
                  ['Researchers believe…', 'possible'],
                  ['No evidence was found…', 'denied'],
                  ['It appears to be…', 'possible'],
                  ['Nobody remembered…', 'denied']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w3:hedge:1',
                title: '⚖️ Which sentence is the LEAST certain?',
                main: 'All four are about the same tape.',
                options: DF.shuffle([
                  { label: 'The tape might have been made in 1949.', correct: true },
                  { label: 'The tape was made in 1949.' },
                  { label: 'Records show the tape was made in 1949.' },
                  { label: 'The tape was definitely made in 1949.' }
                ]),
                expl: 'might have + particípio é a forma mais cautelosa de todas.' }
            ]
          },

          {
            id: 'application', icon: '📋', name: 'The volunteer application', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u1w3:read:ad',
                title: '📋 The advertisement',
                textTitle: 'Become a story collector — Memory Bank',
                text:
                  'The Memory Bank is looking for volunteer story collectors. Collectors visit ' +
                  'people in their own homes, record their life stories, and prepare a short ' +
                  'written summary for the family archive.\n\n' +
                  'You do not need a degree. You do need patience, a steady schedule, and the ' +
                  'ability to listen without interrupting. Training is provided over four ' +
                  'weekends. Collectors commit to two recordings a month for one year.\n\n' +
                  'Applications ask about your education, your languages, your travel ' +
                  'experience, the activities you take part in, and — in the last section — ' +
                  'why you would be good at this.',
                nextLabel: 'Next ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w3:app:1',
                title: '📋 What does the advertisement actually require?',
                main: 'Read carefully — this is a detail question.',
                options: DF.shuffle([
                  { label: 'Two recordings a month for one year', correct: true },
                  { label: 'A university degree in history' },
                  { label: 'Four recordings a month for four weekends' },
                  { label: 'Experience as a professional interviewer' }
                ]),
                expl: '"commit to two recordings a month for one year". O degree é ' +
                      'explicitamente dispensado.' },
              { ui: 'match', cat: 'fun', srsId: 'wc1u1w3:app:match',
                title: '🔗 Which section of a form does each item go in?',
                pairs: [
                  ['School, dates attended, major', 'Education'],
                  ['Languages you speak, years studied', 'Languages'],
                  ['Sport, music, volunteering', 'Activities'],
                  ['Why you would be good at this', 'Personal statement']
                ] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w3:app:b1', unit: 1, waSec: 'Application',
                title: '📋 Section 2 — your education',
                prompt: 'Say where you studied, when, and what you studied. Full sentences.',
                example: 'I studied mechanical engineering at UFF, and I finished in 2015.',
                mustUse: ['studied'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w3:app:b2', unit: 1, waSec: 'Application',
                title: '📋 Section 3 — languages and travel',
                prompt: 'Say which languages you speak, how long you have studied them, and ' +
                        'where you have travelled.',
                example: "I speak Portuguese and English. I've been studying English for four " +
                         "years, and I've travelled to Argentina and Angola for work.",
                mustUse: ['speak'],
                expl: 'Repare: "have been studying" (duração) + "have travelled" (experiência ' +
                      'de vida, sem data). A semana 1 volta aqui.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w3:app:b3', unit: 1, waSec: 'Application',
                title: '📋 Section 4 — your activities',
                prompt: 'Name one activity you take part in, how long you have done it, and ' +
                        'how many hours a week.',
                example: "I've been playing football every Saturday for about six years — " +
                         'roughly three hours a week.',
                mustUse: ['hours'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w3:app:b4', unit: 1, waSec: 'Application',
                title: '⭐ Section 5 — why you',
                prompt: 'Give three reasons why you would be a good story collector. ' +
                        'Use at least one word from this unit.',
                example: 'I would be a good collector because I am patient, because people ' +
                         'trust me easily, and because I have always been curious about other ' +
                         "people's lives. Listening is probably my strongest trait.",
                mustUse: ['because'],
                expl: 'Este é o outcome 3 — "explain and evaluate qualifications". É também ' +
                      'o rascunho falado do texto que você vai escrever na semana 4.' }
            ]
          },

          {
            id: 'practice-w3', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'gra', srsId: 'wc1u1w3:ord:1',
                title: '🧩 Build the sentence:',
                answer: 'I would be good at this because I have always been a patient listener',
                expl: 'would be good at + because + present perfect (a vida até aqui).' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w3:wr:1',
                title: '📝 Complete:', main: "I ___ interested in family history since I was a teenager.",
                options: DF.shuffle([
                  { label: 'have been', correct: true }, { label: 'am' },
                  { label: 'was' }, { label: 'have being' }
                ]),
                expl: 'since + começou no passado e continua → have been. "I am… since" é o ' +
                      'erro clássico do brasileiro.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u1w3:wr:2',
                title: '📝 Complete:', main: 'It took her a year to ___ him to talk about the war.',
                options: DF.shuffle([
                  { label: 'persuade', correct: true }, { label: 'determine' },
                  { label: 'preserve' }, { label: 'come up with' }
                ]),
                expl: 'persuade someone to do something = convencer alguém a fazer algo.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w3+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Argue the other side',
                prompt: 'Someone says the tapes were definitely made for a government survey. ' +
                        'Disagree, and say what the text actually proves.',
                example: 'I would not say definitely. A second team argues that, but no record ' +
                         'of the survey has been found, so it is only possible.',
                mustUse: ['possible'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w3+:b2', unit: 1, waSec: 'Praticar mais',
                title: '🔥 The whole application in one go',
                prompt: 'Present yourself as a candidate: education, languages, activities, ' +
                        'and why you. One take, no notes.',
                example: '(90 segundos, sem parar)',
                expl: 'É o ensaio da entrevista da semana 4.' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I would be good at this because I am ___.', pool: 'trait',
                  focus: 'qualificações', ptHint: 'Eu seria bom nisso porque sou ___.', n: 5 },
                { frame: "I've been interested in this ___.", pool: 'period',
                  focus: 'for / since', ptHint: 'Me interesso por isso ___.', n: 5 }
              ],
              backchain: [
                { text: "I've been studying English {period}.", ptHint: 'Estudo inglês…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Facing the Hard Question',
        goal: 'Handle a challenging question without freezing, and write a personal statement.',
        comp: 'Você responde a uma pergunta difícil de entrevista usando uma estratégia de ' +
              'ganho de tempo — e escreve um texto explicando por que você é qualificado.',
        live: [
          'Writing: the personal statement and the Writing Strategy',
          'Analysing the model statement — what each paragraph does',
          'Speaking: interviewing a candidate (six extra questions of your own)',
          'The Speaking Strategy: responding to difficult questions',
          'Expanding Your Fluency: the board game + Check What You Know'
        ],
        bridge: 'Na aula você escreveu a sua declaração e entrevistou um colega. Aqui você ' +
                'treina o momento exato em que trava: a pergunta que você não esperava. ' +
                'As três estratégias viram drill, não teoria.',
        nextLive: 'Unidade 2 · The World Awaits — infinitivos e gerúndios, e a lista do que ' +
                  'você quer fazer na vida.',
        ican: [
          'I can buy myself time in English without sounding lost.',
          'I can answer a difficult question with a complete, structured answer.',
          'I can write a personal statement with a clear opening and closing.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'strategy', icon: '⏱️', name: 'Buying time in English', tag: 'speaking',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u1w4:read:strat',
                title: '⏱️ Three ways to not freeze',
                textTitle: 'Responding to a difficult question',
                readAloud: false,
                text:
                  'COMPLIMENT THE QUESTION — buys two seconds and sounds confident.\n' +
                  "That's a good question. / I'm glad you asked me that.\n\n" +
                  'SHOW YOUR EXPERIENCE WITH IT — buys more, and frames your answer.\n' +
                  "Actually, I've been asked that several times. / I've never been asked " +
                  'that before.\n\n' +
                  'REPEAT THE QUESTION — buys the most time of all, and makes sure you ' +
                  'answer the right thing.\n' +
                  'Have I ever worked abroad? Well, no, I have not, but…\n\n' +
                  'A ARMADILHA: nao use as tres na mesma resposta. Uma so, e ja emenda o ' +
                  'conteudo. Encadear as tres soa ensaiado e o entrevistador percebe. ' +
                  'E o silencio de dois segundos, em ingles, e MENOS grave do que encher ' +
                  'de "ahn" — quem escuta le hesitacao, nao falta de vocabulario.',
                nextLabel: 'Got it ▸' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u1w4:rep:1', unit: 1, waSec: 'Speaking strategy',
                title: '🎤 Compliment the question:', target: "That's a great question.",
                ptHint: 'Essa é uma ótima pergunta.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u1w4:rep:2', unit: 1, waSec: 'Speaking strategy',
                title: '🎤 Show experience:', target: "Actually, I've been asked that several times.",
                ptHint: 'Na verdade, já me perguntaram isso várias vezes.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u1w4:rep:3', unit: 1, waSec: 'Speaking strategy',
                title: '🎤 Show the opposite:', target: "I've never been asked that before.",
                ptHint: 'Nunca me perguntaram isso antes.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u1w4:rep:4', unit: 1, waSec: 'Speaking strategy',
                title: '🎤 Repeat the question — note the word order:',
                target: 'Have I ever worked abroad? Well, no, I have not.',
                ptHint: 'Se eu já trabalhei fora? Bem, não, não trabalhei.',
                expl: 'Ao repetir, a pergunta vira ECO — mas mantém a ordem de pergunta. ' +
                      'Não vire "Did I ever worked".' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w4:st:1',
                title: '⏱️ Which reply buys time WITHOUT sounding rehearsed?',
                main: 'The interviewer asks something unexpected.',
                options: DF.shuffle([
                  { label: "That's a good question — I've never thought about it that way.",
                    correct: true },
                  { label: "That's a great question. I'm glad you asked. Actually, I've been " +
                           'asked that several times. Have I ever thought about it?' },
                  { label: 'Ahn… ahn… wait… ahn…' },
                  { label: 'Next question, please.' }
                ]),
                expl: 'Uma estratégia só, e já emenda. Empilhar as três é o erro que o livro ' +
                      'avisa: "just don\'t overuse them".' }
            ]
          },

          {
            id: 'interview', icon: '🎙️', name: 'The selection interview', tag: 'speaking', sp: true,
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u1w4:dlg:1',
                title: '🎙️ A candidate handles a hard one',
                sub: 'Repare exatamente onde ela ganha tempo.',
                lines: [
                  { who: 'Interviewer', en: 'Why should we choose you and not someone with ' +
                                            'more experience?' },
                  { who: 'Sofia', en: "That's a fair question. I've never been asked it so " +
                                      'directly.' },
                  { who: 'Sofia', en: 'I have less experience, but I have been listening to ' +
                                      'people professionally for six years as a nurse.' },
                  { who: 'Interviewer', en: 'And when things get emotional?' },
                  { who: 'Sofia', en: 'I stay. That is the whole job, isn\'t it?' }
                ],
                question: 'Which strategy did Sofia use?',
                options: DF.shuffle([
                  { label: 'She complimented the question and showed her experience with it',
                    correct: true },
                  { label: 'She repeated the question word for word' },
                  { label: 'She refused to answer' },
                  { label: 'She changed the subject to nursing immediately' }
                ]),
                expl: '"That\'s a fair question" (elogio) + "I\'ve never been asked it so ' +
                      'directly" (experiência com a pergunta) — e só então o conteúdo.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:iv:1', unit: 1, waSec: 'Interview',
                title: '🎙️ Question 1 of 5 — the opener',
                prompt: 'Tell me a little about yourself. Where are you from? Have you ever ' +
                        'lived anywhere else?',
                example: "I'm from Macaé, and I've lived here all my life — though I've been " +
                         'working offshore since 2016, so I am away half the month.',
                mustUse: ["I'm"] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:iv:2', unit: 1, waSec: 'Interview',
                title: '🎙️ Question 2 of 5 — the hobby',
                prompt: 'What are your hobbies? How long have you been doing that? Why did ' +
                        'you decide to do it?',
                example: "I've been running for about three years. I started because I needed " +
                         'something that was mine, not the company\'s.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:iv:3', unit: 1, waSec: 'Interview',
                title: '🎙️ Question 3 of 5 — the challenge',
                prompt: 'Tell me about a time something went wrong. What were you doing, and ' +
                        'what did you do about it?',
                example: 'I was leading a shift when a pump failed. I stopped the line, called ' +
                         'the supervisor, and we fixed it in two hours.',
                mustUse: ['was'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:iv:4', unit: 1, waSec: 'Interview',
                title: '🎙️ Question 4 of 5 — the unexpected one',
                prompt: 'What is something about you that would surprise us? ' +
                        'Use a time-buying strategy FIRST, then answer.',
                example: "That's a good question — nobody usually asks that. I think it would " +
                         'surprise people that I write poetry.',
                mustUse: ['question'],
                expl: 'Esta é a que treina o outcome 4. A estratégia tem que aparecer na ' +
                      'gravação antes do conteúdo.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:iv:5', unit: 1, waSec: 'Interview',
                title: '🎙️ Question 5 of 5 — the closer',
                prompt: 'Why should we choose you? Give three qualifications.',
                example: 'Because I am patient, because I have been dealing with difficult ' +
                         'people for a decade, and because I finish what I set out to do.',
                mustUse: ['because'],
                expl: 'Mande os 5 áudios juntos — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          },

          {
            id: 'writing', icon: '✍️', name: 'The personal statement', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u1w4:read:model',
                title: '✍️ What each paragraph has to do',
                textTitle: 'The shape of a personal statement',
                readAloud: false,
                text:
                  'FIRST PARAGRAPH — say why you are applying. One sentence, no warm-up.\n' +
                  'I am applying to be a story collector because I have spent ten years ' +
                  'listening to people for a living.\n\n' +
                  'MIDDLE PARAGRAPHS — the evidence. One qualification per paragraph, each ' +
                  'with a concrete example. Define anything the reader will not know.\n' +
                  'For six years I worked night shifts as a nurse, where the whole job is ' +
                  'letting someone finish a sentence.\n\n' +
                  'LAST PARAGRAPH — restate your interest and close.\n' +
                  'I am ready to give a year to this, and I hope you will consider me.\n\n' +
                  'A ARMADILHA: nao encha de adjetivos sobre voce mesmo. "I am very dedicated ' +
                  'and hardworking" nao prova nada. Uma frase concreta sobre o que voce FEZ ' +
                  'vale mais do que cinco adjetivos.',
                nextLabel: 'Got it ▸' },
              { ui: 'order', cat: 'fun', srsId: 'wc1u1w4:ord:para',
                title: '🧩 Put the statement in order:',
                answer: 'I am applying because I have always listened to people for a living ' +
                        'for six years I worked as a nurse on night shifts I hope you will ' +
                        'consider my application',
                expl: 'Por que → a prova → o fecho. Sempre nessa ordem.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u1w4:wr:1',
                title: '✍️ Which opening is stronger?',
                main: 'Both are grammatically correct.',
                options: DF.shuffle([
                  { label: 'I am applying because I have spent ten years listening to people ' +
                           'for a living.', correct: true },
                  { label: 'I am a very dedicated, hardworking and motivated person who loves ' +
                           'people very much.' },
                  { label: 'Hello, my name is on the form above.' },
                  { label: 'I saw your advertisement and decided to write this letter to you.' }
                ]),
                expl: 'A primeira dá um FATO verificável. As outras dão adjetivos ou enchem ' +
                      'linguiça.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:wr:b1', unit: 1, waSec: 'Writing',
                title: '✍️ Write your opening sentence',
                prompt: 'One sentence: why you are applying to be a story collector. ' +
                        'Give a fact, not an adjective.',
                example: 'I am applying because I have been recording my grandmother stories ' +
                         'on my phone for years, and I want to learn to do it properly.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:wr:b2', unit: 1, waSec: 'Writing',
                title: '✍️ Write your evidence paragraph',
                prompt: 'One qualification, with a concrete example of when you used it.',
                example: 'I have been working with the public since 2014. In my job I listen ' +
                         'to complaints all day, and people calm down because I let them finish.',
                mustUse: ['have'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:wr:b3', unit: 1, waSec: 'Writing',
                title: '✍️ Write your closing sentence',
                prompt: 'Restate your interest and close politely.',
                example: 'I am ready to commit a year to this, and I hope you will consider ' +
                         'my application.',
                mustUse: ['hope'],
                expl: 'Mande o texto inteiro por escrito — este é o único passo da unidade ' +
                      'que o professor corrige lendo, não ouvindo.' }
            ]
          },

          {
            id: 'boardgame', icon: '🎲', name: 'The fluency board — solo version', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:bg:1', unit: 1, waSec: 'Fluency board',
                title: '🎲 Square 1', prompt: 'When was the last time you ate something you ' +
                       'did not like? Answer in full.',
                example: 'The last time was last month, at a work dinner. I ate it anyway.',
                mustUse: ['last'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:bg:2', unit: 1, waSec: 'Fluency board',
                title: '🎲 Square 2', prompt: 'Have you ever visited relatives in another city? ' +
                       'Answer, then add one detail.',
                example: "Yes, I have. I've visited my cousins in Belém twice, and both times " +
                         'I got lost.',
                mustUse: ['have'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:bg:3', unit: 1, waSec: 'Fluency board',
                title: '🎲 Square 3', prompt: 'How long have you been studying English? ' +
                       'Say for or since correctly.',
                example: "I've been studying English since 2021 — so about five years.",
                mustUse: ['English'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:bg:4', unit: 1, waSec: 'Fluency board',
                title: '🎲 Square 4', prompt: 'What were you doing between 6 and 8 p.m. ' +
                       'last night?',
                example: 'I was cooking and watching the news at the same time.',
                mustUse: ['was'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4:bg:5', unit: 1, waSec: 'Fluency board',
                title: '🎲 Square 5 — the bluff round',
                prompt: 'Have you ever met a famous person? Tell it as if it were TRUE, ' +
                        'even if you invent it. Make it believable.',
                example: 'Yes, I have. I met a footballer at an airport in 2019 — he was ' +
                         'queuing like everyone else.',
                mustUse: ['met'],
                expl: 'É a mecânica do jogo do livro: mentira convincente força vocabulário ' +
                      'e tempo verbal corretos sob pressão.' }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u1w4:chk:1', unit: 1, idx: 0,
                statement: 'I can use past tenses to ask and answer questions about ' +
                           'memorable life events.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u1w4:chk:2', unit: 1, idx: 1,
                statement: 'I can summarize the key outcomes of a study.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u1w4:chk:3', unit: 1, idx: 2,
                statement: 'I can explain and evaluate qualifications.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u1w4:chk:4', unit: 1, idx: 3,
                statement: 'I can handle challenging questions.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w4:pt:1',
                title: '📝 Choose the correct form:',
                main: 'She ___ at the archive since she left university.',
                options: DF.shuffle([
                  { label: 'has worked', correct: true }, { label: 'works' },
                  { label: 'worked' }, { label: 'is working' }
                ]),
                expl: 'since + continua até agora → present perfect.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w4:pt:2',
                title: '📝 Choose the correct form:',
                main: 'We ___ the tapes when the archivist arrived.',
                options: DF.shuffle([
                  { label: 'were cleaning', correct: true }, { label: 'cleaned' },
                  { label: 'have cleaned' }, { label: 'clean' }
                ]),
                expl: 'Ação em curso interrompida → past continuous.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u1w4:pt:3',
                title: '📝 Which one is impossible?',
                main: 'Only one breaks a rule of this unit.',
                options: DF.shuffle([
                  { label: 'I have finished it yesterday.', correct: true },
                  { label: 'I finished it yesterday.' },
                  { label: 'I have finished it.' },
                  { label: 'I had finished it before she arrived.' }
                ]),
                expl: 'Present perfect + yesterday nunca.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u1w4:pt:4',
                title: '📝 Rising or falling?', main: 'When did they open the box?',
                options: DF.shuffle([
                  { label: 'Falling ↘', correct: true }, { label: 'Rising ↗' }
                ]),
                expl: 'Wh- question → desce.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u1w4:pt:5',
                title: '📝 Complete:', main: 'The team ___ to record every survivor in the town.',
                options: DF.shuffle([
                  { label: 'set out', correct: true }, { label: 'came up' },
                  { label: 'determined with' }, { label: 'preserved' }
                ]),
                expl: 'set out to + verbo = propor-se a.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u1w4:pt:6',
                title: '🔗 Match the halves:',
                pairs: [
                  ["I've been waiting", 'for two hours.'],
                  ['I was editing', 'when the power went out.'],
                  ['She recorded it', 'in 2019.'],
                  ["Have you ever", 'interviewed a stranger?'],
                  ["I haven't found it", 'yet.']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u1w4:pt:7',
                title: '🧩 Put the answer in order:',
                answer: "That's a good question I've never been asked that before",
                expl: 'Elogio → experiência com a pergunta → (e aí vem o conteúdo).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full interview, no stops', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4+:b1', unit: 1, waSec: 'Praticar mais',
                title: '🔥 Five questions, one recording',
                prompt: 'Record all five interview answers in a single take, without stopping ' +
                        'and without notes.',
                example: '(2 a 3 minutos)',
                expl: 'É o formato exato do speaking test da unidade. Mande pro professor ' +
                      'pontuar de 1 a 5 em vocabulário, gramática, pronúncia e competência.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u1w4+:b2', unit: 1, waSec: 'Praticar mais',
                title: '🔥 The question you fear',
                prompt: 'Think of the interview question you would least like to be asked in ' +
                        'English. Ask it out loud, then answer it.',
                expl: 'Ninguém treina isso. É exatamente por isso que trava.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de entrevista', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Have you ever ___?', pool: 'lifeEvent', focus: 'perguntas',
                  ptHint: 'Você já ___?', n: 5 },
                { frame: 'You should choose me because I am ___.', pool: 'trait',
                  focus: 'qualificações', ptHint: 'Devem me escolher porque sou ___.', n: 5 }
              ],
              backchain: [
                { text: "That's a good question. I've never been asked that before.",
                  ptHint: 'Boa pergunta. Nunca me perguntaram isso.' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
