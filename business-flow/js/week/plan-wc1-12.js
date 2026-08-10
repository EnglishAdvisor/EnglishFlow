/* ENGLISH FLOW — week/plan-wc1-12.js
   WORLD CLASS ONE · UNIT 12 "What's Your Game?" — o plano de 4 semanas.
   ÚLTIMA UNIDADE DO LIVRO.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: o Derek e a Ana, o Jason Jennings na China, o Hu
                    Zhengsheng e o kung fu, o Jamie Mitchell no paddleboard, o
                    Alain Robert escalando prédios.
     APP          → THE LOCKER ROOM, podcast fictícia de esporte que entrevista
                    atletas e depois REPORTA o que eles disseram — que é
                    exatamente a gramática da unidade. 100% autoral (item 20).

   Por que este cenário: a unidade cobra discurso indireto, avaliar a relação
   entre atividade e qualidade pessoal, escrever ensaio cronometrado e
   apresentar a partir de um outline. Uma podcast que entrevista e reporta faz
   as quatro coisas por profissão, sem tocar no Jason Jennings nem no Hu
   Zhengsheng do livro.

     outcome 1 (reported speech)         → reportar o que o atleta disse
     outcome 2 (activity x qualities)    → o que o esporte revela da pessoa
     outcome 3 (pace a timed essay)      → o perfil escrito com cronômetro
     outcome 4 (outline for a talk)      → o episódio apresentado

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026).

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (Reported Speech) + Pronunciation
     Semana 2 · Listening + Connections
     Semana 3 · Reading (duas) + Video
     Semana 4 · Writing + Speaking + Outcomes + Review Puzzle do bloco 10-12

   ═══ NOTA PRO PROFESSOR ═══
   Última unidade do World Class 1. O quarto checkpoint de bloco (Units 10-12)
   fecha aqui, mesma opção B dos blocos 1-3, 4-6 e 7-9. Depois desta unidade a
   trilha WC1 está completa — o próximo passo do aluno é o World Class 2, que
   ainda não existe no companion. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.sportActivity = ['rugby', 'kickboxing', 'long-distance swimming',
                                   'rock climbing', 'chess', 'competitive cycling'];
    DF.WGEN.POOLS.personalQuality = ['commitment to hard work', 'self-discipline', 'patience',
                                     'quick thinking', 'courage', 'determination'];
    DF.WGEN.POOLS.reportVerb = ['said', 'explained', 'suggested', 'insisted', 'admitted',
                                'promised'];
  }

  const WORDS = [
    { en: 'achieve', pt: 'alcançar / conquistar',
      def: 'to succeed in doing something after a lot of effort',
      ex: 'He achieved more in one season than most players do in five.' },
    { en: 'beat', pt: 'vencer / derrotar',
      def: 'to win against someone and defeat them in a competition',
      ex: 'They beat a team that had not lost at home in four years.' },
    { en: 'championship', pt: 'campeonato',
      def: 'a competition to find the best player or team in a sport',
      ex: 'The championship was decided in the last ninety seconds.' },
    { en: 'coach', pt: 'treinador',
      def: 'a person who trains others to play a sport',
      ex: 'Her first coach told her she was too small, and she still thanks him for it.' },
    { en: 'commitment', pt: 'comprometimento',
      def: 'dedication to doing something',
      ex: 'Talent gets you into the room. Commitment is what keeps you there.' },
    { en: 'defend', pt: 'defender',
      def: 'to protect from harm or injury',
      ex: 'He learned to defend himself before he ever learned to attack.' },
    { en: 'get used to', pt: 'acostumar-se com',
      def: 'to become accustomed to something',
      ex: 'It took him a year to get used to training at five in the morning.' },
    { en: 'in shape', pt: 'em forma',
      def: 'fit, healthy',
      ex: 'Staying in shape during the off-season is harder than the season itself.' },
    { en: 'motivation', pt: 'motivação',
      def: 'a strong desire or willingness to do something',
      ex: 'His motivation was never the money — the money came much later.' },
    { en: 'obsessed', pt: 'obcecado',
      def: 'constantly thinking about something',
      ex: 'She was obsessed with the sport from the first time she watched it.' },
    { en: 'opponent', pt: 'adversário',
      def: 'a rival, especially in a game',
      ex: 'A good opponent teaches you more than an easy win ever will.' }
  ];

  const EXTRA_WORDS = [
    { en: 'adjustment ·+', pt: 'adaptação',
      def: 'a change',
      ex: 'Moving abroad was a bigger adjustment than he expected.' },
    { en: 'interpreter ·+', pt: 'intérprete',
      def: 'a person who translates what someone is saying into another language',
      ex: 'He relied on an interpreter for almost every conversation off the court.' },
    { en: 'recruit ·+', pt: 'recrutar',
      def: 'to choose and try to persuade someone to work for your organization',
      ex: 'She was recruited at sixteen, before she had finished school.' },
    { en: 'role model ·+', pt: 'exemplo / referência',
      def: 'someone you admire and try to imitate',
      ex: 'Being a role model was never something he asked for.' },
    { en: 'self-discipline ·+', pt: 'autodisciplina',
      def: 'the ability to control your own behavior',
      ex: 'Self-discipline is what you do on the days nobody is watching.' },
    { en: 'self-confidence ·+', pt: 'autoconfiança',
      def: 'belief in your own abilities',
      ex: 'Her self-confidence came from preparation, not from personality.' },
    { en: 'pride ·+', pt: 'orgulho',
      def: 'a feeling that you are better or more important than others',
      ex: 'Pride defeats man, his teacher used to say, and he only understood it at thirty.' },
    { en: 'violence ·+', pt: 'violência',
      def: 'an act that hurts, injures, or kills people',
      ex: 'He argues that films focus on the violence and ignore the discipline.' }
  ];

  DF.PLAN.wc1[12] = {
    unit: 12,
    title: "What's Your Game?",
    subtitle: 'Seu décimo segundo mês — o último',
    icon: '🏆',

    mindmap: {
      center: "What's Your Game?",
      sub: 'Reportar o que disseram, e ler a pessoa pela atividade que ela escolhe',
      branches: [
        {
          icon: '⚽', name: 'Sports vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>beat</b> é irregular e o particípio é <b>beaten</b> — "we have beaten ' +
                'them", nunca "we have beated". E <b>self-</b> combina com quase tudo: ' +
                'self-confident, self-centered, self-employed, self-defense.'
        },
        {
          icon: '🗣️', name: 'Reported speech — pattern 1',
          leaves: [
            { en: 'Ana said (that) she was taking a kickboxing class.', pt: 'verbo + (that) + oração' },
            { en: 'He explained that the food was different.', pt: 'explain, insist, say' },
            { en: '"I am tired." → She said she WAS tired.', pt: 'o verbo recua um tempo' }
          ],
          note: 'Verbos deste grupo: <b>explain, insist, say</b>. O <b>that</b> é opcional na ' +
                'fala. O verbo geralmente <b>recua um tempo</b>: am → was, will → would, ' +
                'can → could.'
        },
        {
          icon: '👤', name: 'Reported speech — pattern 2',
          leaves: [
            { en: 'Derek told me (that) he played rugby.', pt: 'verbo + PRONOME + (that) + oração' },
            { en: 'She convinced me that it was worth it.', pt: 'convince, promise, remind, tell' },
            { en: 'He promised her he would come back.', pt: '' }
          ],
          note: 'Verbos deste grupo precisam de um <b>objeto</b> antes da oração: ' +
                '<b>convince, promise, remind, tell</b>. <b>Armadilha:</b> "He told that..." ' +
                'está errado — <b>tell</b> SEMPRE precisa de alguém: "he told ME that".'
        },
        {
          icon: '➡️', name: 'Reported speech — pattern 3',
          leaves: [
            { en: 'Derek encouraged his team to practice more.', pt: 'verbo + pronome + INFINITIVO' },
            { en: 'She begged her mother to let her go.', pt: 'beg, convince, encourage' },
            { en: 'The coach invited her to train in Rio.', pt: 'invite, remind, tell' }
          ],
          note: 'Este padrão é usado para <b>pedidos e instruções</b> — não pra relatar um ' +
                'fato, mas pra relatar o que alguém <b>queria que outro fizesse</b>. Repare ' +
                'que é o mesmo "verbo + objeto + infinitivo" da unidade 4.'
        },
        {
          icon: '🕐', name: 'What shifts when you report',
          leaves: [
            { en: 'am/is → was · are → were', pt: 'presente recua' },
            { en: 'will → would · can → could', pt: 'modal recua' },
            { en: 'now → then · today → that day', pt: 'tempo muda' },
            { en: 'I → he/she · my → his/her', pt: 'pronome muda' }
          ],
          note: '<b>Armadilha do brasileiro:</b> esquecer de mudar o PRONOME. ' +
                '"He said that I was tired" muda completamente o sentido — quem estava ' +
                'cansado era ELE. Sempre cheque quem é quem depois de reportar.'
        },
        {
          icon: '⏱️', name: 'Pacing a timed essay',
          leaves: [
            { en: '~5 min — organizing and outlining', pt: 'o outline primeiro' },
            { en: '~35 min — writing', pt: 'escrever sem parar' },
            { en: '~5 min — checking your work', pt: 'revisar SEMPRE' }
          ],
          note: 'Numa prova de 45 minutos: <b>5 de outline, 35 escrevendo, 5 revisando</b>. ' +
                'Quem pula o outline escreve mais e diz menos. Quem pula a revisão perde ' +
                'ponto em erro que sabia corrigir.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🏆',
        title: 'He Said, She Said',
        goal: 'Report what someone said, using the right pattern for the right verb.',
        comp: 'Você reporta o que alguém disse escolhendo entre os três padrões, ajustando ' +
              'tempo verbal e pronome — e reconhece modais perfeitos reduzidos na fala.',
        live: [
          'The unit opener: the cycling race photo and warm-up questions',
          'Vocabulary: Derek on rugby and Ana on kickboxing',
          'Grammar: Reported Speech — the three patterns',
          'Reporting the statements about Marta\'s career',
          'Pronunciation: reduction in perfect modals (must have → "mustuh")'
        ],
        bridge: 'Na aula você viu os três padrões e reportou a história da Marta. Aqui a ' +
                'escolha do padrão vira decisão sob pressão, nas entrevistas do Locker Room, ' +
                'e você ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Connections — a entrevista do jogador no exterior.',
        ican: [
          'I can choose the right reported speech pattern for each verb.',
          'I can shift tenses and pronouns correctly when reporting.',
          'I can use tell with an object and say without one.',
          'I can hear must have, should have and would have reduced in speech.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u12w1:cards:core',
                title: '📇 Eleven words for sport and character',
                sub: 'Exemplos do Locker Room — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u12w1:cards:extra',
                title: '➕ Eight the Word Bank does not give you',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'selfwords', icon: '🔤', name: 'The self- family', tag: 'vocabulário',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'wc1u12w1:match:self',
                title: '🔗 Match each self- word to its meaning:',
                pairs: [
                  ['self-discipline', 'controlling your own behavior'],
                  ['self-confidence', 'belief in your own abilities'],
                  ['self-defense', 'protecting yourself from attack'],
                  ['self-employed', 'working for yourself'],
                  ['self-centered', 'thinking only about yourself']
                ] },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u12w1:sf:1',
                title: '🔤 Which word fits?',
                main: '___ is what you do on the days nobody is watching.',
                options: DF.shuffle([
                  { label: 'Self-discipline', correct: true }, { label: 'Self-defense' },
                  { label: 'Self-employed' }, { label: 'Self-centered' }
                ]),
                expl: 'self-discipline = controlar o próprio comportamento sem supervisão.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u12w1:sf:2',
                title: '🔤 Which is the correct past participle?',
                main: 'They have ___ that team three times this year.',
                options: DF.shuffle([
                  { label: 'beaten', correct: true }, { label: 'beated' },
                  { label: 'beat' }, { label: 'beating' }
                ]),
                expl: 'beat → beat → <b>beaten</b>. Verbo irregular clássico.' }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Reported speech at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u12w1:read:glance',
                title: '🔍 Three patterns, decided by the verb',
                textTitle: 'Reported speech',
                readAloud: false,
                text:
                  'PATTERN 1 — verb + (that) + clause\n' +
                  'Use with: explain, insist, say\n' +
                  'Ana said (that) she was taking a kickboxing class.\n\n' +
                  'PATTERN 2 — verb + PRONOUN + (that) + clause\n' +
                  'Use with: convince, promise, remind, tell\n' +
                  'Derek told me (that) he played rugby.\n\n' +
                  'PATTERN 3 — verb + PRONOUN + INFINITIVE\n' +
                  'Use with: beg, convince, encourage, invite, remind, tell\n' +
                  'Derek encouraged his team to practice more.\n' +
                  '(This one is for requests and instructions, not plain facts.)\n\n' +
                  'WHAT SHIFTS WHEN YOU REPORT\n' +
                  'am / is -> was      are -> were      will -> would      can -> could\n' +
                  'now -> then      today -> that day      I -> he/she      my -> his/her\n\n' +
                  'A ARMADILHA NUMERO UM: SAY nao leva objeto, TELL leva sempre.\n' +
                  '"He said me that..." esta errado. "He told me that..." esta certo.\n' +
                  '"He said that..." esta certo. "He told that..." esta errado.\n\n' +
                  'A ARMADILHA NUMERO DOIS: esquecer de mudar o pronome. Se Ana disse "I am ' +
                  'tired", voce reporta "She said SHE was tired" — nao "she said I was tired", ' +
                  'que colocaria voce como o cansado.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w1:rs:1',
                title: '🎯 Which pattern does "tell" need?',
                main: 'Derek ___ he played rugby.',
                options: DF.shuffle([
                  { label: 'told me that', correct: true }, { label: 'told that' },
                  { label: 'said me that' }, { label: 'told to me that' }
                ]),
                expl: 'tell exige objeto: told ME that.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w1:rs:2',
                title: '🎯 Which is correct?',
                main: 'Ana ___ she was taking a kickboxing class.',
                options: DF.shuffle([
                  { label: 'said (that)', correct: true }, { label: 'said me that' },
                  { label: 'told that' }, { label: 'said to that' }
                ]),
                expl: 'say NÃO leva objeto direto. "said me" está errado.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w1:rs:3',
                title: '🎯 Report this request:',
                main: '"Please let me go," she begged her mother.',
                options: DF.shuffle([
                  { label: 'She begged her mother to let her go.', correct: true },
                  { label: 'She begged that her mother let her go.' },
                  { label: 'She begged to her mother let her go.' },
                  { label: 'She begged her mother that to let her go.' }
                ]),
                expl: 'Pedido → padrão 3: verbo + pronome + infinitivo.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w1:rs:4',
                title: '🎯 What happens to the verb?',
                main: '"I am tired," he said. → He said he ___ tired.',
                options: DF.shuffle([
                  { label: 'was', correct: true }, { label: 'is' },
                  { label: 'will be' }, { label: 'has been' }
                ]),
                expl: 'am recua para was.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w1:rs:5',
                title: '🎯 What happens to the modal?',
                main: '"I will come back," she promised. → She promised she ___ come back.',
                options: DF.shuffle([
                  { label: 'would', correct: true }, { label: 'will' },
                  { label: 'can' }, { label: 'must' }
                ]),
                expl: 'will recua para would.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w1:rs:6',
                title: '🎯 Which sentence is WRONG?',
                main: 'Only one breaks the say/tell rule.',
                options: DF.shuffle([
                  { label: 'He said me that he was leaving.', correct: true },
                  { label: 'He told me that he was leaving.' },
                  { label: 'He said that he was leaving.' },
                  { label: 'He explained that he was leaving.' }
                ]),
                expl: 'say nunca leva objeto direto.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u12w1:rs:7',
                title: '🧩 Build the reported sentence:',
                answer: 'The coach encouraged her mother to enrol her in a professional camp',
                expl: 'Padrão 3: encourage + objeto + infinitivo.' }
            ]
          },

          {
            id: 'reduction', icon: '🥁', name: 'Reduced perfect modals', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'wc1u12w1:read:red',
                title: '🥁 must have → "mustuh"',
                textTitle: 'Reduction in perfect modals',
                readAloud: false,
                text:
                  'In spoken English, the H in HAVE is usually dropped and the vowel reduces ' +
                  'to a schwa.\n\n' +
                  'must have    -> sounds like "MUS-tuh"\n' +
                  'should have  -> sounds like "SHOOD-uh"\n' +
                  'could have   -> sounds like "COOD-uh"\n' +
                  'would have   -> sounds like "WOOD-uh"\n\n' +
                  'In very informal speech it reduces even further: musteh, woulddeh, ' +
                  'coulddeh, shouldeh.\n\n' +
                  'IMPORTANT EXCEPTION: when "must have" is NOT followed by a past participle, ' +
                  'it does not reduce.\n' +
                  'Bella said that she MUST HAVE a new dress. (full pronunciation — here ' +
                  '"have" means possess, not the perfect)\n\n' +
                  'POR QUE ISSO IMPORTA: e a mesma reducao da unidade 8, agora com todos os ' +
                  'quatro modais. Se voce so treinou a forma escrita completa, seu ouvido nao ' +
                  'reconhece nenhum deles em velocidade normal — e a conversa inteira passa.',
                nextLabel: 'Got it ▸' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u12w1:rep:1', unit: 12, waSec: 'Reduction',
                title: '🎤 Say it reduced:', target: 'It must have snowed two feet last night.',
                ptHint: 'Deve ter nevado sessenta centímetros ontem à noite.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u12w1:rep:2', unit: 12, waSec: 'Reduction',
                title: '🎤 Say it reduced:',
                target: 'I could have ordered pizza, but I had a salad instead.',
                ptHint: 'Eu poderia ter pedido pizza, mas comi salada.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u12w1:rep:3', unit: 12, waSec: 'Reduction',
                title: '🎤 Say it reduced:',
                target: "I'm so sorry — I should have remembered your birthday.",
                ptHint: 'Me desculpe, eu devia ter lembrado do seu aniversário.' },
              { ui: 'choice', cat: 'pro', srsId: 'wc1u12w1:rd:1',
                title: '🥁 Does "must have" reduce here?',
                main: 'She said she must have a new uniform before Friday.',
                options: DF.shuffle([
                  { label: 'No — "have" means possess, not the perfect', correct: true },
                  { label: 'Yes — it always reduces' }
                ]),
                expl: 'Sem particípio depois, "have" é o verbo ter — pronúncia completa.' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u12w1:drl:report', unit: 12, waSec: 'Drill · reported',
                title: '🔁 Drill 1 — the reporting verb changes', focus: 'discurso indireto',
                frame: 'She ___ that the training was harder than she expected.',
                ptHint: 'Ela ___ que o treino era mais duro do que esperava.',
                slots: ['said', 'explained', 'insisted', 'admitted', 'promised'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u12w1:drl:sport', unit: 12, waSec: 'Drill · esporte',
                title: '🔁 Drill 2 — the sport changes', focus: 'vocabulário',
                frame: 'He told me he had been obsessed with ___ since he was a child.',
                ptHint: 'Ele me disse que era obcecado por ___ desde criança.',
                slots: ['rugby', 'kickboxing', 'rock climbing', 'chess',
                        'competitive cycling'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u12w1:drl:qual', unit: 12, waSec: 'Drill · qualidades',
                title: '🔁 Drill 3 — the quality changes', focus: 'qualidades pessoais',
                frame: 'The quality that matters most is ___.',
                ptHint: 'A qualidade que mais importa é ___.',
                slots: ['commitment to hard work', 'self-discipline', 'patience',
                        'quick thinking', 'determination'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u12w1:bc:1', unit: 12, waSec: 'Backchain',
                title: '🧱 The full reported sentence',
                ptHint: 'O treinador incentivou a mãe dela a inscrevê-la num acampamento ' +
                        'profissional.',
                chain: ['a professional camp', 'to enrol her in a professional camp',
                        'encouraged her mother to enrol her in a professional camp',
                        'The coach encouraged her mother to enrol her in a professional camp.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u12w1:bc:2', unit: 12, waSec: 'Backchain',
                title: '🧱 The tell + object pattern',
                ptHint: 'Ele me disse que tinha sido a maior adaptação da vida dele.',
                chain: ['of his life', 'the biggest adjustment of his life',
                        'told me it had been the biggest adjustment of his life',
                        'He told me it had been the biggest adjustment of his life.'] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w1:bld:1', unit: 12, waSec: 'Sua vez',
                title: '🗣️ Report something someone told you',
                prompt: 'Report something a friend or colleague told you this week. Use "told ' +
                        'me" correctly.',
                example: 'My brother told me that he was thinking about going back to college.',
                mustUse: ['told me'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w1:bld:2', unit: 12, waSec: 'Sua vez',
                title: '🗣️ Report a request',
                prompt: 'Report something someone asked you to do, using pattern 3.',
                example: 'My boss encouraged me to apply for the position in Macaé.',
                mustUse: ['to'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w1:bld:3', unit: 12, waSec: 'Sua vez',
                title: '🗣️ Your own activity and what it says about you',
                prompt: 'Name an activity you do and one personal quality it developed in you.',
                example: 'I have played football since I was eight, and it taught me that being ' +
                         'reliable matters more than being the best player.',
                mustUse: ['taught me'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w1+:b1', unit: 12, waSec: 'Praticar mais',
                title: '🔥 Report a whole conversation',
                prompt: 'Think of a real conversation you had this week. Report it for one ' +
                        'minute, using all three patterns.',
                example: '(1 minuto)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w1+:b2', unit: 12, waSec: 'Praticar mais',
                title: '🔥 Fix it out loud',
                prompt: 'This is wrong: "He said me that he would come." Correct it two ways — ' +
                        'once with say, once with tell.',
                example: 'He said that he would come. He told me that he would come.',
                mustUse: ['told me'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de discurso indireto', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'She ___ that the training was harder than she expected.',
                  pool: 'reportVerb', focus: 'discurso indireto',
                  ptHint: 'Ela ___ que o treino era mais duro.', n: 5 },
                { frame: 'The quality that matters most is ___.', pool: 'personalQuality',
                  focus: 'qualidades', ptHint: 'A qualidade que mais importa é ___.', n: 5 }
              ],
              backchain: [
                { text: 'He told me he had been obsessed with {sportActivity}.',
                  ptHint: 'Ele me disse que era obcecado por…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'On the Record',
        goal: 'Report what an interviewee said, and survey people about sport and character.',
        comp: 'Você ouve uma entrevista e reporta o que o entrevistado disse sem distorcer, e ' +
              'conduz uma pequena pesquisa reportando as respostas.',
        live: [
          'Listening: the interview with the basketball player abroad',
          'Marking the challenges he struggled with',
          'Using reported speech to explain what he said',
          'Connections: the survey on getting in shape and sports questions',
          'Reporting your findings with say, tell, suggest, insist, explain'
        ],
        bridge: 'Na aula você ouviu o Jason Jennings e fez a pesquisa com colegas. Aqui o ' +
                'entrevistado é do Locker Room, e reportar fielmente vira exercício de ' +
                'decisão: ele disse isso mesmo ou você mudou o sentido?',
        nextLive: 'Semana 3 · Reading + Video — o kung fu e o escalador de prédios.',
        ican: [
          'I can report what an interviewee said without changing the meaning.',
          'I can identify the specific difficulties someone describes.',
          'I can run a small survey and report the answers.',
          'I can use suggest with a gerund or a that-clause.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'listen', icon: '👂', name: 'The Locker Room interview', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u12w2:dlg:1',
                title: '👂 An athlete abroad',
                sub: 'Sem texto na tela. Ouça o que foi difícil — e o que NÃO foi.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'A lot of people were surprised by your decision to leave ' +
                                     'after only one season. Why now?' },
                  { who: 'Player', en: 'I completed my contract. I feel like I achieved what I ' +
                                       'wanted to here, and now it is time to move on.' },
                  { who: 'Host', en: 'Last time we spoke, you mentioned some difficulty getting ' +
                                     'used to life there.' },
                  { who: 'Player', en: 'Everyone told me the move would be fairly easy, but it ' +
                                       'has definitely been a bigger adjustment than I thought ' +
                                       'it was going to be.' }
                ],
                question: 'What does he say about the difficulty of the move?',
                options: DF.shuffle([
                  { label: 'It was a bigger adjustment than he expected', correct: true },
                  { label: 'It was exactly as easy as everyone promised' },
                  { label: 'He had no difficulty at all' },
                  { label: 'He regrets the whole decision' }
                ]),
                expl: '"a bigger adjustment than I thought it was going to be" — repare que ele ' +
                      'contrasta com o que os outros DISSERAM, que já é discurso indireto.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u12w2:dlg:2',
                title: '👂 What was actually hard',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'In what way was it hard?' },
                  { who: 'Player', en: 'I do not speak the language, so I rely on interpreters ' +
                                       'for most things. Not speaking the language makes it ' +
                                       'difficult to socialize outside the game.' },
                  { who: 'Player', en: 'The constant media attention has made it hard to go out ' +
                                       'in public too. Reporters follow me. I have no privacy.' },
                  { who: 'Host', en: 'And the food?' },
                  { who: 'Player', en: 'The food is great. There are times when I miss things ' +
                                       'from back home, but that happens to everyone who lives ' +
                                       'abroad.' }
                ],
                question: 'Which was NOT one of his main difficulties?',
                options: DF.shuffle([
                  { label: 'The food', correct: true },
                  { label: 'Not speaking the language' },
                  { label: 'Lack of privacy' },
                  { label: 'Socializing outside the game' }
                ]),
                expl: '"The food is great" — ele minimiza. É a única coisa que ele não trata ' +
                      'como problema real.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w2:rp:1', unit: 12, waSec: 'Report',
                title: '🗣️ Report what he said — faithfully',
                prompt: 'Report three things the player said, using three different reporting ' +
                        'verbs. Do not overstate anything.',
                example: 'He said he had completed his contract. He explained that not speaking ' +
                         'the language made socializing difficult. He admitted that he missed ' +
                         'some food from home, but he insisted the food there was great.',
                mustUse: ['explained'] },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u12w2:rp:2',
                title: '🗣️ Which report DISTORTS what he said?',
                main: 'He said: "The food is great, but sometimes I miss things from home."',
                options: DF.shuffle([
                  { label: 'He complained that the food was bad.', correct: true },
                  { label: 'He said the food was great.' },
                  { label: 'He admitted he sometimes missed food from home.' },
                  { label: 'He explained that missing food happens to everyone abroad.' }
                ]),
                expl: '"complained... was bad" inverte o que ele disse. Reportar mal é a forma ' +
                      'mais fácil de mentir sem inventar nada.' }
            ]
          },

          {
            id: 'survey', icon: '📋', name: 'Run the survey', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u12w2:read:sug',
                title: '📋 Suggest — two ways',
                textTitle: 'How to report a suggestion',
                readAloud: false,
                text:
                  'SUGGEST can be followed by a GERUND or a THAT-CLAUSE. Both are correct.\n\n' +
                  'Carla suggested DOING yoga to get in shape.\n' +
                  'Carla suggested THAT the best way to get in shape was to do yoga.\n\n' +
                  'A ARMADILHA: "suggest" NAO segue o padrao 3 (verbo + objeto + infinitivo). ' +
                  '"She suggested me to do yoga" esta ERRADO — e um dos erros mais comuns de ' +
                  'brasileiro, porque em portugues "sugeriu que eu fizesse" pede objeto. Em ' +
                  'ingles: "She suggested that I do yoga" ou "She suggested doing yoga".',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w2:sg:1',
                title: '📋 Which is WRONG?',
                main: '',
                options: DF.shuffle([
                  { label: 'She suggested me to do yoga.', correct: true },
                  { label: 'She suggested doing yoga.' },
                  { label: 'She suggested that I do yoga.' },
                  { label: 'She suggested yoga.' }
                ]),
                expl: 'suggest nunca leva objeto + infinitivo.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w2:sv:1', unit: 12, waSec: 'Survey',
                title: '📋 Ask and report — question 1',
                prompt: 'Ask three people (real or imagined): what is the best way to get in ' +
                        'shape? Report two answers using different verbs.',
                example: 'My brother said that walking every day was enough. My neighbour ' +
                         'suggested joining a gym, because she never goes if she has a choice.',
                mustUse: ['suggested'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w2:sv:2', unit: 12, waSec: 'Survey',
                title: '📋 Ask and report — question 2',
                prompt: 'Ask: do professional athletes make good role models? Report one answer ' +
                        'you agreed with and one you did not.',
                example: 'One person insisted that athletes are role models whether they want ' +
                         'to be or not. Another explained that we should not expect character ' +
                         'from someone we only know through television.',
                mustUse: ['insisted'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w2:sv:3', unit: 12, waSec: 'Survey',
                title: '📋 Summarize your findings',
                prompt: 'Summarize what most people said, and note the one answer that was ' +
                        'different.',
                example: 'We asked whether athletes make good role models. Most people said ' +
                         'yes, but one person disagreed completely — he suggested that the ' +
                         'question itself was unfair.',
                mustUse: ['most people said'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder reporting work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w2+:b1', unit: 12, waSec: 'Praticar mais',
                title: '🔥 The chain game, alone',
                prompt: 'Say a sentence about sport. Then report it. Then report the report. ' +
                        'Keep going for four levels without losing the meaning.',
                example: 'I play chess. → Ana said she played chess. → Bruno said that Ana had ' +
                         'said she played chess. → …',
                mustUse: ['said'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de reported speech', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'She ___ that the training was harder than she expected.',
                  pool: 'reportVerb', focus: 'discurso indireto',
                  ptHint: 'Ela ___ que o treino era mais duro.', n: 5 }
              ],
              backchain: [
                { text: 'He told me he had been obsessed with {sportActivity}.',
                  ptHint: 'Ele me disse que era obcecado por…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'More Than the Game',
        goal: 'Read what a discipline teaches beyond technique, and judge a risk-taker.',
        comp: 'Você lê sobre o que uma prática ensina além da técnica, e avalia alguém que ' +
              'arrisca a vida pelo que faz.',
        live: [
          'Reading: A Battle for the Soul of Kung Fu — Hu Zhengsheng',
          'Deciding whether Hu would agree with each statement',
          'Reading: Paddleboard Racing — Jamie Mitchell and the hardest water sport',
          'Video: the urban climber and the question of admiration',
          'Discussing what qualities the activity requires'
        ],
        bridge: 'Na aula você leu sobre o kung fu e o paddleboard. Aqui o texto é do Locker ' +
                'Room, e a pergunta é a mesma que atravessa a unidade: o que a atividade ' +
                'revela sobre a pessoa?',
        nextLive: 'Semana 4 · Writing + Speaking — o ensaio cronometrado e a apresentação com ' +
                  'outline. Fim do livro.',
        ican: [
          'I can decide whether a person in a text would agree with a statement.',
          'I can find the line in the text that supports my decision.',
          'I can discuss whether admiration is the right response to extreme risk.',
          'I can connect an activity to the qualities it requires.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: What the Rope Teaches', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u12w3:read:text',
                title: '📖 A new text, the same skill',
                textTitle: 'What the Rope Teaches',
                text:
                  'Marisa Quintão has taught climbing for nineteen years in a converted ' +
                  'warehouse outside Belo Horizonte. She has trained four national competitors. ' +
                  'She says this is not the part of the job she cares about.\n\n' +
                  '"Everyone arrives wanting to climb harder," she says. "They watch videos of ' +
                  'people doing impossible things and they think the sport is about strength. ' +
                  'Then they discover it is mostly about being honest with yourself, which is ' +
                  'much less fun."\n\n' +
                  'Her beginners spend the first two months learning to fall. Not to climb — to ' +
                  'fall, safely and without panicking. Some leave during this period. She does ' +
                  'not try to keep them.\n\n' +
                  '"A climber who cannot fall will lie to themselves about what they can do," ' +
                  'she explains. "And a climber who lies to themselves will eventually get ' +
                  'someone else hurt, because in this sport you hold the rope for another ' +
                  'person."\n\n' +
                  'She is dismissive of the idea that climbing builds courage. "It does not ' +
                  'build courage. It reveals whether you have judgement. Those are completely ' +
                  'different things, and the films always confuse them."\n\n' +
                  'When asked about the four competitors she trained, she said the one she ' +
                  'remembers is a student who never competed at all — a woman who came at ' +
                  'forty-two, terrified, and stayed nine years. "She was never going to be ' +
                  'good," Marisa said. "She just kept showing up. That is the whole thing. ' +
                  'People think I am being modest when I say that. I am not."',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u12w3:q:1',
                title: '📖 Would Marisa agree: "Climbing is mainly about physical strength"?',
                main: '',
                options: DF.shuffle([
                  { label: 'No — she says it is mostly about being honest with yourself',
                    correct: true },
                  { label: 'Yes — that is why she trains competitors' },
                  { label: 'She does not express an opinion' },
                  { label: 'Yes, but only for beginners' }
                ]),
                expl: '"they think the sport is about strength. Then they discover it is mostly ' +
                      'about being honest with yourself."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u12w3:q:2',
                title: '📖 Why do beginners spend two months learning to fall?',
                main: '',
                options: DF.shuffle([
                  { label: 'Because a climber who cannot fall will lie about their limits',
                    correct: true },
                  { label: 'Because falling is the goal of the sport' },
                  { label: 'To reduce the cost of equipment' },
                  { label: 'Because competitions require it' }
                ]),
                expl: '"A climber who cannot fall will lie to themselves about what they can ' +
                      'do" — e a consequência é outra pessoa se machucar.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u12w3:q:3',
                title: '📖 Would Marisa agree: "Climbing builds courage"?',
                main: '',
                options: DF.shuffle([
                  { label: 'No — she says it reveals judgement, which is different',
                    correct: true },
                  { label: 'Yes — she says courage is the main benefit' },
                  { label: 'She says courage and judgement are the same thing' },
                  { label: 'The text does not address it' }
                ]),
                expl: '"It does not build courage. It reveals whether you have judgement."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u12w3:q:4',
                title: '📖 Which student does she remember most?',
                main: '',
                options: DF.shuffle([
                  { label: 'One who never competed and simply kept showing up', correct: true },
                  { label: 'The best of the four national competitors' },
                  { label: 'The one who left during the falling period' },
                  { label: 'She says she does not remember any of them' }
                ]),
                expl: '"She just kept showing up. That is the whole thing." E ela antecipa que ' +
                      'as pessoas vão achar isso modéstia — não é.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w3:q:5', unit: 12, waSec: 'Reading',
                title: '🗣️ Report Marisa in your own words',
                prompt: 'Report three of Marisa\'s opinions using three different reporting ' +
                        'verbs. Do not overstate her.',
                example: 'She explained that beginners spend two months learning to fall. She ' +
                         'insisted that climbing reveals judgement rather than building ' +
                         'courage. She said the student she remembers never competed at all.',
                mustUse: ['insisted'] }
            ]
          },

          {
            id: 'video', icon: '🎬', name: 'The one who climbs buildings', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u12w3:dlg:1',
                title: '🎬 An urban climber, in his own words',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Narrator', en: 'He has climbed more than a hundred buildings around ' +
                                         'the world, normally using no special equipment.' },
                  { who: 'Narrator', en: 'He has been arrested many times. He says that does ' +
                                         'not change anything.' },
                  { who: 'Climber', en: 'Each building is a kind of test. My goal is to ' +
                                        'overcome the fear, not to ignore it. People who ' +
                                        'ignore fear fall.' },
                  { who: 'Narrator', en: 'He broke a world record, and he continues to climb.' }
                ],
                question: 'What does he say his goal is?',
                options: DF.shuffle([
                  { label: 'To overcome fear, not ignore it', correct: true },
                  { label: 'To break as many records as possible' },
                  { label: 'To avoid being arrested' },
                  { label: 'To use special equipment safely' }
                ]),
                expl: '"My goal is to overcome the fear, not to ignore it." Repare que ele faz a ' +
                      'mesma distinção da Marisa: coragem não é ausência de medo.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w3:vd:1', unit: 12, waSec: 'Video',
                title: '🗣️ Do you admire him?',
                prompt: 'Say whether you admire the climber, and give your real reason. There ' +
                        'is no right answer here.',
                example: 'I admire the discipline, but not the choice, because he also risks ' +
                         'the lives of the people who would have to rescue him.',
                mustUse: ['because', 'but'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w3+:b1', unit: 12, waSec: 'Praticar mais',
                title: '🔥 Argue with Marisa',
                prompt: 'Marisa says climbing does not build courage, only reveals judgement. ' +
                        'Argue against her, using an example.',
                example: '(45 segundos)' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de qualidades', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The quality that matters most is ___.', pool: 'personalQuality',
                  focus: 'qualidades', ptHint: 'A qualidade que mais importa é ___.', n: 5 }
              ],
              backchain: [
                { text: 'She explained that {sportActivity} requires patience above all.',
                  ptHint: 'Ela explicou que… exige paciência acima de tudo.' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Under the Clock',
        goal: 'Write a timed essay with proper pacing, and present from an outline.',
        comp: 'Você escreve um ensaio com cronômetro dividindo o tempo corretamente, e ' +
              'apresenta a partir de um outline sem ler.',
        live: [
          'Writing: Explain Important Qualities — what it takes to be good at an activity',
          'The Writing Strategy: pacing yourself in a timed essay',
          'Writing the 45-minute essay with the Writing Checklist',
          'Speaking: the one-to-two minute presentation from your outline',
          'The Speaking Strategy: speaking from an outline. Check What You Know'
        ],
        bridge: 'Na aula você escreveu o ensaio cronometrado e apresentou pra turma. Aqui o ' +
                'cronômetro é seu, a divisão do tempo vira regra explícita, e a apresentação ' +
                'ganha as três partes (abertura, transições, fechamento).',
        nextLive: 'Fim do World Class 1. O próximo passo é o World Class 2 — que ainda não ' +
                  'existe no app.',
        ican: [
          'I can divide my time correctly in a timed writing task.',
          'I can build an outline and speak from it without reading.',
          'I can explain what an activity requires and why.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'pacing', icon: '⏱️', name: 'Pacing a timed essay', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u12w4:read:pace',
                title: '⏱️ The clock is part of the task',
                textTitle: 'Pacing yourself',
                readAloud: false,
                text:
                  'FOR A 45-MINUTE ESSAY\n' +
                  '~5 minutes   organizing and outlining\n' +
                  '~35 minutes  writing\n' +
                  '~5 minutes   checking your work\n\n' +
                  'WHY THE OUTLINE IS NOT OPTIONAL\n' +
                  'Without it you write more and say less. You discover your real argument in ' +
                  'the last paragraph, when there is no time to rebuild the essay around it.\n\n' +
                  'WHY THE FINAL FIVE MINUTES MATTER MORE THAN THEY LOOK\n' +
                  'You are not rewriting. You are catching the errors you already know how to ' +
                  'fix: a missing S on a third-person verb, "should of", a pronoun that shifted ' +
                  'and now points at the wrong person.\n\n' +
                  'THE CHECKLIST FOR THIS ESSAY\n' +
                  '- Does it identify the activity clearly?\n' +
                  '- Does it explain what you have to do to be good at it?\n' +
                  '- Does it identify which qualities are necessary?\n\n' +
                  'A ARMADILHA: escrever ate o ultimo segundo. Um paragrafo a mais vale menos ' +
                  'do que cinco minutos de revisao — porque o paragrafo extra adiciona uma ' +
                  'ideia, e a revisao remove tres erros que custam ponto.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u12w4:pc:1',
                title: '⏱️ You have 45 minutes. What do you do in the last five?',
                main: '',
                options: DF.shuffle([
                  { label: 'Check for errors you already know how to fix', correct: true },
                  { label: 'Write one more paragraph' },
                  { label: 'Rewrite the introduction' },
                  { label: 'Add a new argument' }
                ]),
                expl: 'Revisão vale mais que volume. É a regra da unidade.' },
              { ui: 'order', cat: 'fun', srsId: 'wc1u12w4:pc:2',
                title: '🧩 Put the essay process in order:',
                answer: 'Organize and outline for five minutes write for thirty five minutes ' +
                        'check your work for five minutes',
                expl: '5 / 35 / 5.' }
            ]
          },

          {
            id: 'essay', icon: '✍️', name: 'The timed essay', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w4:es:1', unit: 12, waSec: 'Essay',
                title: '✍️ Step 1 — the outline (5 minutes)',
                prompt: 'Choose an activity you enjoy or used to do. Write the three main ideas ' +
                        'of your essay: intro, body, conclusion. One line each.',
                example: 'Intro: football taught me more about people than about sport. Body: ' +
                         'you have to show up when you do not feel like it. Conclusion: the ' +
                         'quality it requires is reliability, not talent.',
                mustUse: ['intro'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w4:es:2', unit: 12, waSec: 'Essay',
                title: '✍️ Step 2 — what you have to do to be good at it',
                prompt: 'Write the body: what does someone actually have to DO to be good at ' +
                        'this activity? Be concrete.',
                example: 'You have to train when the weather is bad and nobody is watching. You ' +
                         'have to accept being the worst player in the room for the first year.',
                mustUse: ['have to'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w4:es:3', unit: 12, waSec: 'Essay',
                title: '✍️ Step 3 — the qualities it requires',
                prompt: 'Name two qualities the activity requires, and explain WHY each one.',
                example: 'It requires self-discipline, because nobody checks whether you ' +
                         'trained. And it requires patience, because you improve in months, ' +
                         'not in weeks.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w4:es:4', unit: 12, waSec: 'Essay',
                title: '✍️ Step 4 — the check (5 minutes)',
                prompt: 'Read your three parts back. Name one error you found and fixed.',
                example: 'I wrote "he don\'t train" and changed it to "he doesn\'t train". I ' +
                         'also had a pronoun pointing at the wrong person in the second ' +
                         'sentence.',
                mustUse: ['changed'],
                expl: 'Mande o ensaio inteiro por escrito — o professor corrige lendo, e ' +
                      'cronometra se você respeitou os 45 minutos.' }
            ]
          },

          {
            id: 'presentation', icon: '🎤', name: 'Speaking from an outline', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u12w4:read:pres',
                title: '🎤 Three parts of a short presentation',
                textTitle: 'Speaking from an outline',
                readAloud: false,
                text:
                  'GETTING STARTED — preview the topic\n' +
                  "I'm on the debate team at my school, and today I'd like to talk about what " +
                  'it takes to be a good debater.\n\n' +
                  'DURING THE PRESENTATION\n' +
                  '- use transition words so the audience can follow you\n' +
                  '- do NOT read from your outline; look up periodically\n' +
                  '- pace yourself: you only have two minutes\n\n' +
                  'CLOSING — summarize and open for questions\n' +
                  'So, in conclusion, I think you have to do three important things to be a ' +
                  'good debater. Thanks for your attention. Any questions?\n\n' +
                  'A ARMADILHA: ler o outline em voz alta. O outline existe pra voce NAO ' +
                  'precisar ler — sao palavras-chave, nao frases prontas. Se voce escreveu ' +
                  'frases completas no outline, voce escreveu um texto, e vai le-lo.',
                nextLabel: 'Got it ▸' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u12w4:rep:1', unit: 12, waSec: 'Presentation',
                title: '🎤 The opening line:',
                target: "Today I'd like to talk about what it takes to be good at this.",
                ptHint: 'Hoje eu queria falar sobre o que é preciso pra ser bom nisso.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u12w4:rep:2', unit: 12, waSec: 'Presentation',
                title: '🎤 The closing line:',
                target: 'So, in conclusion, those are the three things. Any questions?',
                ptHint: 'Então, concluindo, são essas três coisas. Alguma pergunta?' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w4:pr:1', unit: 12, waSec: 'Presentation',
                title: '🎤 Your opening',
                prompt: 'Open your presentation: say who you are in relation to the activity ' +
                        'and what you will talk about.',
                example: "I've played football since I was eight, and today I'd like to talk " +
                         'about what it actually takes to stay in a team.',
                mustUse: ["I'd like to talk about"] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w4:pr:2', unit: 12, waSec: 'Presentation',
                title: '🎤 The full presentation — two minutes, from the outline',
                prompt: 'Give the whole presentation from your outline: opening, three points ' +
                        'with transitions, and a closing. Do not read a script.',
                example: '(2 minutos)',
                mustUse: ['in conclusion'],
                expl: 'É o entregável falado da unidade E do livro. Mande o áudio — o professor ' +
                      'pontua de 1 a 5 em vocabulário, gramática, pronúncia e competência.' }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u12w4:chk:1', unit: 12, idx: 0,
                statement: 'I can use reported speech to explain what someone else said.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u12w4:chk:2', unit: 12, idx: 1,
                statement: 'I can evaluate the relationship between activities and personal ' +
                           'qualities.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u12w4:chk:3', unit: 12, idx: 2,
                statement: 'I can pace myself as I write a timed essay.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u12w4:chk:4', unit: 12, idx: 3,
                statement: 'I can use an outline to support a presentation or essay.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w4:pt:1',
                title: '📝 Which is correct?', main: 'He ___ that he was leaving.',
                options: DF.shuffle([
                  { label: 'told me', correct: true }, { label: 'said me' },
                  { label: 'told', correct: false }, { label: 'said to' }
                ]),
                expl: 'tell precisa de objeto; say não aceita.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w4:pt:2',
                title: '📝 Report this:', main: '"I will come back," she promised.',
                options: DF.shuffle([
                  { label: 'She promised she would come back.', correct: true },
                  { label: 'She promised she will come back.' },
                  { label: 'She promised to she come back.' },
                  { label: 'She promised that come back.' }
                ]),
                expl: 'will recua para would.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u12w4:pt:3',
                title: '📝 Which is WRONG?',
                main: '',
                options: DF.shuffle([
                  { label: 'She suggested me to do yoga.', correct: true },
                  { label: 'She suggested doing yoga.' },
                  { label: 'She suggested that I do yoga.' },
                  { label: 'She encouraged me to do yoga.' }
                ]),
                expl: 'suggest não segue o padrão objeto + infinitivo.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u12w4:pt:4',
                title: '📝 Which is the correct participle?',
                main: 'They have ___ that team three times.',
                options: DF.shuffle([
                  { label: 'beaten', correct: true }, { label: 'beated' },
                  { label: 'beat' }, { label: 'beating' }
                ]),
                expl: 'beat → beat → beaten.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u12w4:pt:5',
                title: '📝 In a 45-minute essay, how long should you outline?',
                main: '',
                options: DF.shuffle([
                  { label: 'About five minutes', correct: true },
                  { label: 'About twenty minutes' },
                  { label: 'You should not outline at all' },
                  { label: 'The whole time' }
                ]),
                expl: '5 outline / 35 escrita / 5 revisão.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u12w4:pt:6',
                title: '🔗 Match each verb to its pattern:',
                pairs: [
                  ['say / explain / insist', 'verb + (that) + clause'],
                  ['tell / promise / remind', 'verb + object + (that) + clause'],
                  ['encourage / beg / invite', 'verb + object + infinitive'],
                  ['suggest', 'verb + gerund OR that-clause']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u12w4:pt:7',
                title: '🧩 Build the reported sentence:',
                answer: 'He told me that it had been the biggest adjustment of his life',
                expl: 'tell + objeto + that + oração, com o verbo recuado.' }
            ]
          }
        ],

        more: [
          // ═══ REVIEW PUZZLE — Units 10-12 (fechamento do último bloco) ═══
          // Quarto e último checkpoint, mesma opção B dos blocos 1-3, 4-6 e
          // 7-9 (ver block-review-1/2/3 nos planos 03, 06 e 09). Fecha o
          // World Class 1 inteiro.
          {
            id: 'block-review-4', icon: '🧩', name: 'Review Puzzle — Units 10–12', tag: 'revisão',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'wc1blk4:m1',
                title: '🧩 Unit 10 — match the word to its meaning:',
                pairs: [
                  ['hesitate', 'to pause because you are uncertain'],
                  ['rational', 'logical, reasonable'],
                  ['intuition', 'a feeling with no proof'],
                  ['regret', 'to feel sorry about an outcome'],
                  ['peer', 'someone your own age']
                ] },
              { ui: 'match', cat: 'voc', srsId: 'wc1blk4:m2',
                title: '🧩 Unit 11 — match the word to its meaning:',
                pairs: [
                  ['tolerate', 'to accept something you may not like'],
                  ['postpone', 'to delay an event'],
                  ['mild', 'moderately warm'],
                  ['die down', 'to become less'],
                  ['hold off', 'to be delayed, not happen yet']
                ] },
              { ui: 'match', cat: 'voc', srsId: 'wc1blk4:m3',
                title: '🧩 Unit 12 — match the word to its meaning:',
                pairs: [
                  ['achieve', 'to succeed after a lot of effort'],
                  ['commitment', 'dedication to doing something'],
                  ['opponent', 'a rival in a game'],
                  ['obsessed', 'constantly thinking about something'],
                  ['adjustment', 'a change']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk4:g1',
                title: '🧩 Unit 10 grammar — choose the correct form:',
                main: 'If I ___ you, I would wait until Monday.',
                options: DF.shuffle([
                  { label: 'were', correct: true }, { label: 'was' },
                  { label: 'am' }, { label: 'will be' }
                ]),
                expl: 'Condicional irreal → were pra todos os sujeitos.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk4:g2',
                title: '🧩 Unit 11 grammar — choose the correct form:',
                main: 'They cancelled the match, so they ___.',
                options: DF.shuffle([
                  { label: 'called it off', correct: true }, { label: 'called off it' },
                  { label: 'called off' }, { label: 'it called off' }
                ]),
                expl: 'Pronome com phrasal separável fica no meio.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk4:g3',
                title: '🧩 Unit 12 grammar — choose the correct form:',
                main: 'He ___ that he was leaving.',
                options: DF.shuffle([
                  { label: 'told me', correct: true }, { label: 'said me' },
                  { label: 'told' }, { label: 'said to me that' }
                ]),
                expl: 'tell precisa de objeto.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk4:t1',
                title: '✍️ Unit 10 — complete with ONE word:',
                main: 'A lack of sleep ___ your ability to concentrate.',
                answers: ['affects'],
                expl: 'affect = verbo.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk4:t2',
                title: '✍️ Unit 11 — complete with ONE word:',
                main: 'How much longer do we have to put up ___ this rain?',
                answers: ['with'],
                expl: 'put up with — phrasal de três palavras.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk4:t3',
                title: '✍️ Unit 12 — complete with ONE word:',
                main: 'They have ___ that team three times this year.',
                answers: ['beaten'],
                expl: 'beat → beat → beaten.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk4:o1',
                title: '🧩 Build the sentence (Unit 10 grammar):',
                answer: 'If I had more free time I would learn another language',
                expl: 'if + past → would + verbo.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk4:o2',
                title: '🧩 Build the sentence (Unit 11 grammar):',
                answer: 'If the rain holds off until six the event can still happen',
                expl: 'hold off, sem objeto.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk4:o3',
                title: '🧩 Build the sentence (Unit 12 grammar):',
                answer: 'She promised she would come back before the season ended',
                expl: 'will recua para would no discurso indireto.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk4:cross1',
                title: '🧩 Which unit does this word belong to?',
                main: 'intuition',
                options: DF.shuffle([
                  { label: 'Unit 10 — Decisions, Decisions', correct: true },
                  { label: 'Unit 11 — Rain or Shine' },
                  { label: 'Unit 12 — What\'s Your Game?' }
                ]) },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk4:cross2',
                title: '🧩 Which unit does this word belong to?',
                main: 'postpone',
                options: DF.shuffle([
                  { label: 'Unit 11 — Rain or Shine', correct: true },
                  { label: 'Unit 10 — Decisions, Decisions' },
                  { label: 'Unit 12 — What\'s Your Game?' }
                ]) },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk4:cross3',
                title: '🧩 Which unit does this word belong to?',
                main: 'commitment',
                options: DF.shuffle([
                  { label: 'Unit 12 — What\'s Your Game?', correct: true },
                  { label: 'Unit 10 — Decisions, Decisions' },
                  { label: 'Unit 11 — Rain or Shine' }
                ]) },
              { ui: 'build', cat: 'fun', srsId: 'wc1blk4:build', unit: 12, waSec: 'Review Puzzle',
                title: '🗣️ Close the block in one breath',
                prompt: 'In one minute, use one word from each unit (10, 11, and 12) in three ' +
                        'different sentences about your own life.',
                example: 'I always hesitate before big decisions. Last winter I had to postpone ' +
                         'a trip because of the rain. My commitment to studying English is the ' +
                         'thing I am most proud of this year.',
                mustUse: ['hesitate', 'postpone', 'commitment'] }
            ]
          },
          {
            id: 'finish', icon: '🏁', name: 'You finished World Class 1', tag: 'fechamento',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u12w4:read:end',
                title: '🏁 Twelve units, twelve months',
                textTitle: 'What you can do now that you could not in Unit 1',
                readAloud: false,
                text:
                  'Look back at where this started.\n\n' +
                  'UNIT 1 you learned to talk about your own past with four tenses.\n' +
                  'UNIT 12 you can report what someone ELSE said about THEIR past, shifting ' +
                  'every tense and pronoun correctly while you speak.\n\n' +
                  'THE GRAMMAR YOU NOW CARRY\n' +
                  'past tenses · gerunds and infinitives · future forms · infinitive ' +
                  'complements · adverbial clauses · adjective clauses · comparatives · past ' +
                  'modals · the passive · the conditional · phrasal verbs · reported speech\n\n' +
                  'THE THING THAT MATTERS MORE\n' +
                  'In Unit 1 you needed a model sentence on screen before you could speak. By ' +
                  'now you have recorded yourself answering questions with no model, arguing ' +
                  'sides you disagree with, and presenting for two minutes from an outline.\n\n' +
                  'That is the actual difference. The grammar list is just what made it ' +
                  'possible.\n\n' +
                  'O QUE VEM DEPOIS: o World Class 2 continua daqui. Ele ainda nao existe no ' +
                  'app — quando existir, comeca exatamente onde voce parou.',
                nextLabel: 'Terminar ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w4:end:1', unit: 12, waSec: 'Fechamento',
                title: '🏁 The last recording of the book',
                prompt: 'Talk for ninety seconds about what changed in your English over these ' +
                        'twelve units. Use at least three different grammar points from the ' +
                        'list above, without planning which.',
                example: '(90 segundos)',
                expl: 'Sem modelo, sem roteiro. É a última gravação do World Class 1 — o ' +
                      'professor compara com a primeira, da unidade 1.' }
            ]
          },
          {
            id: 'more-w4', icon: '🔥', name: 'The full presentation, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u12w4+:b1', unit: 12, waSec: 'Praticar mais',
                title: '🔥 Two minutes, no outline at all',
                prompt: 'Give the same presentation again, but this time without looking at ' +
                        'the outline once.',
                example: '(2 minutos)' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de apresentação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The quality that matters most is ___.', pool: 'personalQuality',
                  focus: 'qualidades', ptHint: 'A qualidade que mais importa é ___.', n: 5 },
                { frame: 'She ___ that the training was harder than expected.',
                  pool: 'reportVerb', focus: 'discurso indireto',
                  ptHint: 'Ela ___ que o treino era mais duro.', n: 5 }
              ],
              backchain: [
                { text: 'He told me he had been obsessed with {sportActivity}.',
                  ptHint: 'Ele me disse que era obcecado por…' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
