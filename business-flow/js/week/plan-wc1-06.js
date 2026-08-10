/* ENGLISH FLOW — week/plan-wc1-06.js
   WORLD CLASS ONE · UNIT 6 "In Style" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: o Dubai Shopping Festival, o flea market, "Every
                    Shoe Tells a Story", o vídeo de como identificar uma Louis
                    Vuitton falsa.
     APP          → TRUETAG AUTHENTICATION, startup fictícia que verifica se
                    peças de grife revendidas são autênticas ou falsificadas.
                    100% autoral (item 20).

   Por que este cenário: a unidade cobra orações adjetivas (descrever pessoas
   e coisas), reagir a outros pontos de vista, e apresentar/defender um
   argumento. Uma empresa de autenticação — que precisa DESCREVER o item com
   precisão e DEFENDER o veredito quando o cliente discorda — hospeda os
   quatro outcomes sem tocar na Louis Vuitton do livro.

     outcome 1 (shopping habits/preferences) → o perfil de cada cliente
     outcome 2 (adjective clauses)           → descrever a peça avaliada
     outcome 3 (react to other viewpoints)   → o cliente discorda do veredito
     outcome 4 (present and defend argument) → por que é falso ou autêntico

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026).

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (Adjective Clauses) + Linking Sounds
     Semana 2 · Listening + Connections
     Semana 3 · Reading (duas) + Video
     Semana 4 · Writing + Speaking + Expanding Your Fluency + Outcomes

   ═══ NOTA PRO PROFESSOR ═══
   O livro faz um review a cada bloco de 3 unidades — "4-6 Review" e "Review
   Puzzle Units 4-6" aparecem no fim desta unidade, confirmando o padrão já
   visto em "Units 1-3" (ver plan-wc1-03.js). Replicado aqui como o step
   "block-review-2", mesma opção B (função mantida, formato com as mecânicas
   que já existem — sem mecânica de grade nova). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.itemType = ['a handbag', 'a pair of sneakers', 'a watch', 'a leather jacket',
                              'a wallet', 'a scarf'];
    DF.WGEN.POOLS.fakeTell = ['the stitching is uneven', 'the logo is slightly crooked',
                              'the material feels too light', 'the serial number is missing',
                              'the price was far too low', 'the seller refused a receipt'];
    DF.WGEN.POOLS.shopperTrait = ['practical', 'daring', 'self-confident', 'sophisticated',
                                  'outgoing', 'fashion-conscious'];
  }

  const WORDS = [
    { en: 'affordable', pt: 'acessível (preço)',
      def: 'reasonably priced, inexpensive',
      ex: 'The verification service is affordable compared to losing money on a fake.' },
    { en: 'bargain', pt: 'pechinchar / barganha',
      def: 'to talk with someone to try to get a lower price',
      ex: 'She bargained for ten minutes before the seller agreed to forty.' },
    { en: 'brand', pt: 'marca',
      def: 'a type of product made by a particular company',
      ex: 'The brand name alone tells you nothing about whether the item is genuine.' },
    { en: 'browse', pt: 'dar uma olhada / navegar (loja)',
      def: 'to look around casually',
      ex: 'He was just browsing when he found the bag with the crooked logo.' },
    { en: 'deal', pt: 'oferta boa / negócio',
      def: 'something good you buy, usually for a low price',
      ex: 'A designer bag for eighty dollars is not a deal — it is a warning.' },
    { en: 'discount', pt: 'desconto',
      def: 'a reduction in the usual price of something',
      ex: 'A ninety per cent discount on a luxury brand is the first red flag.' },
    { en: 'goods', pt: 'mercadorias',
      def: 'products you buy',
      ex: 'Counterfeit goods cost the fashion industry billions every year.' },
    { en: 'purchase', pt: 'comprar / compra',
      def: 'to buy something',
      ex: 'Always verify a luxury purchase before you pay, not after.' },
    { en: 'quality', pt: 'qualidade',
      def: 'how good or bad something is',
      ex: 'The quality of the stitching is usually the first thing that gives it away.' },
    { en: 'recommend', pt: 'recomendar',
      def: 'to suggest that a thing or person would be good or useful',
      ex: 'We recommend a full check before any resale over two hundred dollars.' }
  ];

  const EXTRA_WORDS = [
    { en: 'authentic ·+', pt: 'autêntico',
      def: 'real, genuine',
      ex: 'Everything about the bag looked authentic except the zipper pull.' },
    { en: 'crooked ·+', pt: 'torto',
      def: 'not straight; bent or curved',
      ex: 'A crooked logo is one of the fastest tells on a fake.' },
    { en: 'dealer ·+', pt: 'revendedor',
      def: 'someone who sells something',
      ex: 'A trusted dealer will always let you verify before you buy.' },
    { en: 'fake ·+', pt: 'falso',
      def: 'not real',
      ex: 'It took our team ninety seconds to confirm the watch was fake.' },
    { en: 'imitator ·+', pt: 'imitador',
      def: 'someone who copies what someone else does',
      ex: 'The imitator got the color right but the weight completely wrong.' },
    { en: 'instinct ·+', pt: 'instinto',
      def: 'your feeling about something',
      ex: 'Trust your instinct — if the deal feels wrong, it usually is.' },
    { en: 'self-confident ·+', pt: 'autoconfiante',
      def: 'someone who trusts in their own abilities',
      ex: 'She was self-confident enough to argue with our first verdict — and she was right.' },
    { en: 'sophisticated ·+', pt: 'sofisticado',
      def: 'cultivated and elegant',
      ex: 'The fakes today are sophisticated enough to fool most buyers.' }
  ];

  DF.PLAN.wc1[6] = {
    unit: 6,
    title: 'In Style',
    subtitle: 'Seu sexto mês',
    icon: '🛍️',

    mindmap: {
      center: 'In Style',
      sub: 'Descrever com precisão, reagir a opiniões, e defender um veredito',
      branches: [
        {
          icon: '👜', name: 'Shopping vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>deal</b> pode ser substantivo (uma pechincha) ou verbo (lidar com — deal ' +
                'with); não confunda com "bargain", que é sempre sobre negociar preço.'
        },
        {
          icon: '👤', name: 'who / that — for people',
          leaves: [
            { en: 'I met a woman who can speak six languages.', pt: 'who = pessoa' },
            { en: 'The dealer that sold it to me disappeared.', pt: 'that também serve p/ pessoa' },
            { en: 'Anybody who buys without checking takes a risk.', pt: 'who' }
          ],
          note: '<b>who</b> é só para pessoas. <b>that</b> serve para pessoas OU coisas, mas ' +
                '<b>who</b> é mais comum/natural quando se fala de gente.'
        },
        {
          icon: '📦', name: 'which / that — for things',
          leaves: [
            { en: 'The bag which she bought was fake.', pt: 'which = coisa' },
            { en: 'The bag that she bought was fake.', pt: 'that = coisa (mais comum)' }
          ],
          note: '<b>which</b> é só para coisas — nunca use which para pessoas ' +
                '("the woman which..." está errado). <b>that</b> é a escolha mais natural no ' +
                'dia a dia.'
        },
        {
          icon: '✂️', name: 'Omitting the pronoun (object clauses)',
          leaves: [
            { en: 'The bag (that) he is carrying is fake.', pt: 'that opcional — objeto' },
            { en: 'The money (that) Kate won is gone.', pt: 'that opcional — objeto' },
            { en: "The people (who) we met were friendly.", pt: 'who opcional — objeto' }
          ],
          note: 'Quando o pronome é o OBJETO da oração (não o sujeito), ele pode sumir sem ' +
                'problema. Teste: se "he is carrying" já tem sujeito (he) e verbo, o "that" é ' +
                'dispensável.'
        },
        {
          icon: '💬', name: 'Defining vs. extra information',
          leaves: [
            { en: 'The shopkeeper who sells such beautiful goods will make a lot of money.', pt: 'define QUAL — sem vírgula' },
            { en: 'The shopkeeper, who sells such beautiful goods, will make a lot of money.', pt: 'informação EXTRA — com vírgulas' }
          ],
          note: 'Sem vírgula, a oração DEFINE de quem se fala (informação necessária). Com ' +
                'vírgulas, é só um comentário a mais — a frase continua fazendo sentido sem ' +
                'ela. A entonação muda junto: extra-info soa como um parêntese falado.'
        },
        {
          icon: '⚖️', name: 'Reacting to a viewpoint',
          leaves: [
            { en: "I couldn't agree with you more.", pt: 'concordância forte' },
            { en: "I'm not so sure about that.", pt: 'discordância suave' },
            { en: 'I see what you\'re saying, but…', pt: 'questionar' },
            { en: 'I completely disagree.', pt: 'discordância forte' },
            { en: 'No way! (informal)', pt: 'discordância forte, informal — só com quem você conhece bem' }
          ],
          note: 'Discordância forte demais ("No way!") soa rude com desconhecidos. A régua da ' +
                'unidade: combine o tom da resposta com a proximidade da relação.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🛍️',
        title: 'Describing Precisely',
        goal: 'Describe a person or thing precisely using an adjective clause.',
        comp: 'Você descreve pessoas e coisas usando who/which/that, decide quando a vírgula ' +
              'entra, e sabe quando o pronome relativo pode sumir da frase.',
        live: [
          'The unit opener: the Tokyo market street photo and warm-up questions',
          'Vocabulary: shopping habits and the Dubai Shopping Festival',
          'Grammar: Adjective Clauses with Subject Relative Pronouns',
          'Correcting mistakes and identifying necessary vs. extra information',
          'Linking Sounds (pronunciation): how consonants link across words'
        ],
        bridge: 'Na aula você viu a tabela who/which/that e corrigiu frases do livro. Aqui a ' +
                'escolha vira decisão sob pressão, em avaliações novas da TrueTag, e você ' +
                'ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Connections — os diálogos de compra em Vancouver e a ' +
                  'negociação no flea market.',
        ican: [
          'I can use who, which and that to describe people and things.',
          'I can decide when an adjective clause needs commas and when it does not.',
          'I can omit the relative pronoun when it is the object of the clause.',
          'I can use the unit vocabulary to describe shopping habits.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u6w1:cards:core',
                title: '📇 Ten words for shopping and authentication',
                sub: 'Exemplos da TrueTag — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u6w1:cards:extra',
                title: '➕ Eight the Word Bank does not give you',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'wordform', icon: '🔤', name: 'Precision, not synonyms', tag: 'vocabulário',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u6w1:wf:1',
                title: '🔤 Which word fits?',
                main: 'The zipper felt too light, which was our first ___ that it was fake.',
                options: DF.shuffle([
                  { label: 'instinct', correct: true }, { label: 'discount' },
                  { label: 'purchase' }, { label: 'brand' }
                ]),
                expl: 'instinct = a sensação/palpite que aponta pra algo.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u6w1:wf:2',
                title: '🔤 Which word fits?',
                main: 'A ninety per cent ___ on a luxury brand should worry any buyer.',
                options: DF.shuffle([
                  { label: 'discount', correct: true }, { label: 'quality' },
                  { label: 'dealer' }, { label: 'goods' }
                ]),
                expl: 'discount = redução no preço; um desconto grande demais é sinal de alerta.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u6w1:wf:3',
                title: '🔤 Which is the noun form?',
                main: 'The ___ of the stitching is usually the first thing that gives a fake away.',
                options: DF.shuffle([
                  { label: 'quality', correct: true }, { label: 'qualify' },
                  { label: 'qualified' }, { label: 'qualifying' }
                ]),
                expl: 'quality = substantivo.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u6w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['authentic', 'real, genuine'],
                  ['crooked', 'not straight, bent'],
                  ['imitator', 'someone who copies someone else'],
                  ['self-confident', 'trusting your own abilities'],
                  ['sophisticated', 'cultivated and elegant']
                ] }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Adjective clauses at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u6w1:read:glance',
                title: '🔍 Who, which, that — and when the comma matters',
                textTitle: 'Adjective clauses',
                readAloud: false,
                text:
                  'WHO — for people\n' +
                  'A dealer who sells fakes will eventually get caught.\n\n' +
                  'WHICH — for things (never for people)\n' +
                  'The bag which she bought turned out to be fake.\n\n' +
                  'THAT — for people OR things (very common, informal)\n' +
                  'The item that we checked was authentic.\n\n' +
                  'OMITTING THE PRONOUN — only when it is the OBJECT of the clause\n' +
                  'The bag (that) he was carrying was fake. -> "he is carrying" already has a ' +
                  'subject, so "that" can disappear.\n' +
                  'The dealer who sold it disappeared. -> "who" is the SUBJECT here (who sold ' +
                  'it), so it CANNOT disappear.\n\n' +
                  'DEFINING vs. EXTRA INFORMATION\n' +
                  'No comma = necessary, defines which one: The shopkeeper who sells fakes will ' +
                  'be reported.\n' +
                  'Commas = extra, not necessary: The shopkeeper, who has worked here for ' +
                  'twenty years, will be reported.\n\n' +
                  'A ARMADILHA: nunca use "which" para pessoas ("the woman which...") — sempre ' +
                  '"who" ou "that". E cuidado: sem a virgula, a frase muda de sentido, nao so ' +
                  'de pontuacao — ela passa a dizer que so ALGUNS lojistas vendem falsificacoes, ' +
                  'nao todos.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u6w1:ac:1',
                title: '🎯 Choose the correct pronoun:',
                main: 'The dealer ___ sold us the watch disappeared the next day.',
                options: DF.shuffle([
                  { label: 'who', correct: true }, { label: 'which' },
                  { label: 'what' }, { label: 'whom' }
                ]),
                expl: 'who = pessoa, sujeito da oração.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u6w1:ac:2',
                title: '🎯 Choose the correct pronoun:',
                main: 'The bag ___ she bought at the market was a fake.',
                options: DF.shuffle([
                  { label: 'which', correct: true }, { label: 'who' },
                  { label: 'whose' }, { label: 'whom' }
                ]),
                expl: 'which = coisa, nunca pessoa.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u6w1:ac:3',
                title: '🎯 Can the pronoun be omitted here?',
                main: 'The item (that) we checked yesterday turned out to be real.',
                options: DF.shuffle([
                  { label: 'Yes — "that" is the object of the clause', correct: true },
                  { label: 'No — "that" is the subject of the clause' }
                ]),
                expl: '"we checked" já tem sujeito (we) — that é objeto, opcional.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u6w1:ac:4',
                title: '🎯 Can the pronoun be omitted here?',
                main: 'The dealer who sold it disappeared.',
                options: DF.shuffle([
                  { label: 'No — "who" is the subject of the clause', correct: true },
                  { label: 'Yes — it can be removed with no problem' }
                ]),
                expl: '"who sold it" — who É o sujeito da oração adjetiva; não pode sumir.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u6w1:ac:5',
                title: '🎯 Which version means only SOME dealers sell fakes?',
                main: 'Compare the two versions.',
                options: DF.shuffle([
                  { label: 'Dealers who sell fakes get reported. (no comma)', correct: true },
                  { label: 'Dealers, who sell fakes, get reported. (with commas)' }
                ]),
                expl: 'Sem vírgula = define UM SUBGRUPO ("os que vendem falsificações"). Com ' +
                      'vírgula, soaria como se TODOS os dealers vendessem falsificações.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u6w1:ac:6',
                title: '🧩 Build the sentence:',
                answer: 'The item that she purchased online was not authentic',
                expl: 'that (objeto, opcional mas incluído aqui) + oração adjetiva.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u6w1:tf:1',
                title: '🔀 Adjective clause transformation',
                rounds: [
                  { base: 'The dealer who sold it disappeared.', cmd: 'Question',
                    answers: ['Did the dealer who sold it disappear?'] },
                  { base: 'The item that we checked was authentic.', cmd: 'Negative',
                    answers: ["The item that we checked wasn't authentic.",
                              'The item that we checked was not authentic.'] },
                  { base: 'The buyer who complained got a refund.', cmd: 'Question',
                    answers: ['Did the buyer who complained get a refund?'] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u6w1:drl:item', unit: 6, waSec: 'Drill · gramática',
                title: '🔁 Drill 1 — the item changes', focus: 'which/that para coisas',
                frame: 'The item that we checked was ___.', ptHint: 'O item que verificamos era ___.',
                slots: ['a handbag', 'a pair of sneakers', 'a watch', 'a leather jacket',
                        'a wallet'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u6w1:drl:tell', unit: 6, waSec: 'Drill · gramática',
                title: '🔁 Drill 2 — the red flag changes', focus: 'because',
                frame: 'We flagged it because ___.', ptHint: 'Marcamos como suspeito porque ___.',
                slots: ['the stitching is uneven', 'the logo is slightly crooked',
                        'the serial number is missing', 'the price was far too low',
                        'the seller refused a receipt'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u6w1:drl:trait', unit: 6, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 3 — the shopper trait changes', focus: 'vocabulário',
                frame: 'Our typical client is quite ___.', ptHint: 'Nosso cliente típico é bem ___.',
                slots: ['practical', 'daring', 'self-confident', 'sophisticated', 'outgoing'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u6w1:bc:1', unit: 6, waSec: 'Backchain',
                title: '🧱 The defining clause, spoken',
                ptHint: 'O revendedor que nos vendeu o relógio desapareceu no dia seguinte.',
                chain: ['the next day', 'disappeared the next day',
                        'who sold us the watch disappeared the next day',
                        'The dealer who sold us the watch disappeared the next day.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u6w1:bc:2', unit: 6, waSec: 'Backchain',
                title: '🧱 The object clause, spoken',
                ptHint: 'O item que verificamos ontem acabou sendo verdadeiro.',
                chain: ['to be real', 'turned out to be real',
                        'that we checked yesterday turned out to be real',
                        'The item that we checked yesterday turned out to be real.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u6w1:dlg:1',
                title: '🎧 A verification call',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'Is this the bag that you wanted us to check?' },
                  { who: 'Elias', en: 'Yes, the one with the crooked logo.' },
                  { who: 'Nadia', en: "The stitching that's holding the handle looks uneven too." },
                  { who: 'Elias', en: 'That confirms it. It\'s a fake.' }
                ],
                question: 'What two clues do they mention?',
                options: DF.shuffle([
                  { label: 'The crooked logo and the uneven stitching', correct: true },
                  { label: 'The price and the seller\'s name' },
                  { label: 'The color and the size' },
                  { label: 'Only the logo' }
                ]),
                expl: '"the crooked logo" + "the stitching... looks uneven".'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u6w1:dlg:2',
                title: '🎧 A correction at work',
                sub: 'Repare o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'The woman which bought it wants a refund.' },
                  { who: 'Tomás', en: 'Who, not which — she\'s a person.' },
                  { who: 'Priya', en: 'Right. The woman who bought it wants a refund.' },
                  { who: 'Tomás', en: 'Exactly. Which is only for things.' }
                ],
                question: 'Why was Priya corrected?',
                options: DF.shuffle([
                  { label: '"Which" is never used for people', correct: true },
                  { label: 'The verb was in the wrong tense' },
                  { label: 'The sentence needed a comma' },
                  { label: '"Who" was unnecessary here' }
                ]),
                expl: 'which = só coisas. who = pessoas.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w1:bld:1', unit: 6, waSec: 'Sua vez',
                title: '🗣️ Describe your shopping habits',
                prompt: 'Describe yourself as a shopper using an adjective clause.',
                example: "I'm someone who always checks reviews before buying anything online.",
                mustUse: ['who'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w1:bld:2', unit: 6, waSec: 'Sua vez',
                title: '🗣️ Describe something you own',
                prompt: 'Describe an item you own using a defining adjective clause with that ' +
                        'or which.',
                example: 'This is the watch that my father gave me when I finished school.',
                mustUse: ['that'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w1+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Describe three people with adjective clauses',
                prompt: 'Describe three people you know, each with a different adjective ' +
                        'clause, in under a minute.',
                example: '(1 minuto)' }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de orações adjetivas', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The item that we checked was ___.', pool: 'itemType',
                  focus: 'that + coisa', ptHint: 'O item verificado era ___.', n: 5 },
                { frame: 'We flagged it because ___.', pool: 'fakeTell',
                  focus: 'razão', ptHint: 'Marcamos como suspeito porque ___.', n: 5 }
              ],
              backchain: [
                { text: 'The item that we checked was {itemType}.',
                  ptHint: 'O item que verificamos era…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'Naming Your Price',
        goal: 'Follow a bargaining conversation, and negotiate a price yourself.',
        comp: 'Você acompanha uma negociação de preço, identifica quando alguém acha que ' +
              'está sendo enganado, e negocia um preço de verdade.',
        live: [
          'Listening: three conversations in a shopping district',
          'Deciding whether each shopper buys, and at what price',
          'Understanding "rip-off" and "it\'s worth it"',
          'Connections: bargaining at a flea market',
          'Role-play: selling and buying at your own flea market'
        ],
        bridge: 'Na aula você ouviu as três conversas do livro e negociou no flea market. Aqui ' +
                'o cenário é a verificação da TrueTag — e a negociação vira sobre PREÇO DE ' +
                'AUTENTICAÇÃO, não de mercadoria.',
        nextLive: 'Semana 3 · Reading + Video — o que os sapatos revelam e como identificar uma ' +
                  'bolsa falsa.',
        ican: [
          'I can follow a bargaining conversation and identify the outcome.',
          'I can use expressions like "what a rip-off" and "it\'s worth it" naturally.',
          'I can negotiate a price using real bargaining language.',
          'I can react when I think a deal sounds too good to be true.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'listen', icon: '👂', name: 'A TrueTag negotiation', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u6w2:dlg:1',
                title: '👂 The client wants a discount on the check',
                sub: 'Sem texto na tela. Ouça pelo preço final.',
                hideText: true,
                lines: [
                  { who: 'Client', en: 'Sixty dollars for a check? That\'s a rip-off.' },
                  { who: 'Agent', en: 'It includes a written report and photos. It\'s worth it, ' +
                                      'honestly.' },
                  { who: 'Client', en: 'Could you do it for forty?' },
                  { who: 'Agent', en: 'I can do fifty, with the report. That\'s my best price.' }
                ],
                question: 'What is the final agreed price?',
                options: DF.shuffle([
                  { label: 'Fifty dollars', correct: true }, { label: 'Sixty dollars' },
                  { label: 'Forty dollars' }, { label: 'They did not agree' }
                ]),
                expl: '"I can do fifty" — a última oferta antes do fim da conversa.'
              },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u6w2:ch:1',
                title: '👂 What does "That\'s a rip-off" mean?',
                main: '',
                options: DF.shuffle([
                  { label: 'That is too expensive', correct: true },
                  { label: 'That is a great price' },
                  { label: 'That is a fake product' },
                  { label: 'That is unclear' }
                ]),
                expl: 'rip-off = preço abusivo, "roubo".' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u6w2:dlg:2',
                title: '👂 Deciding whether it\'s worth it',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Client', en: 'Is it really worth paying for a full report?' },
                  { who: 'Agent', en: 'If you\'re reselling it, yes — buyers pay more for a ' +
                                      'verified item.' },
                  { who: 'Client', en: 'How much more, usually?' },
                  { who: 'Agent', en: 'Often twenty to thirty per cent more, depending on the ' +
                                      'brand.' }
                ],
                question: 'Why might the report be worth the extra cost?',
                options: DF.shuffle([
                  { label: 'Verified items resell for more', correct: true },
                  { label: 'It makes the item authentic even if it is not' },
                  { label: 'It is required by law' },
                  { label: 'The report is free either way' }
                ]),
                expl: '"buyers pay more for a verified item... twenty to thirty per cent more."'
              }
            ]
          },

          {
            id: 'negotiate', icon: '🤝', name: 'Bargain like a local', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u6w2:rep:1', unit: 6, waSec: 'Bargaining',
                title: '🎤 Opening the negotiation:',
                target: 'How much do you want for it?',
                ptHint: 'Quanto você quer por isso?' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u6w2:rep:2', unit: 6, waSec: 'Bargaining',
                target: "That's all I can afford.",
                title: '🎤 Making a final offer:',
                ptHint: 'É tudo que eu posso pagar.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u6w2:rep:3', unit: 6, waSec: 'Bargaining',
                title: '🎤 Sealing the deal:',
                target: "Ten is a great deal. — Six it is!",
                ptHint: 'Dez é uma ótima oferta. — Fechado em seis!' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w2:neg:1', unit: 6, waSec: 'Bargaining',
                title: '🤝 Open a negotiation',
                prompt: 'You want to buy something at a flea market. Open the negotiation.',
                example: 'This looks interesting. How much do you want for it?',
                mustUse: ['how much'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w2:neg:2', unit: 6, waSec: 'Bargaining',
                title: '🤝 Close the deal',
                prompt: 'Negotiate to a final price and close the deal out loud, playing both ' +
                        'sides.',
                example: '(45 segundos)',
                mustUse: ['deal'],
                expl: 'Mande o áudio pro professor pontuar a fluência.' }
            ]
          },

          {
            id: 'practice-w2', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u6w2:wr:1',
                title: '📝 Complete:', main: 'The bag was on sale, but sixty dollars still felt ' +
                       'like a ___.',
                options: DF.shuffle([
                  { label: 'rip-off', correct: true }, { label: 'discount' },
                  { label: 'deal' }, { label: 'purchase' }
                ]),
                expl: 'rip-off = preço injusto, caro demais.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u6w2:ord:1',
                title: '🧩 Build the sentence:',
                answer: 'The seller who gave the discount was very friendly',
                expl: 'who (pessoa) + oração adjetiva sem vírgula (define qual vendedor).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder negotiation work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w2+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 A negotiation that almost fails',
                prompt: 'Negotiate a price where the first three offers get rejected before ' +
                        'you finally agree.',
                example: '(60 a 90 segundos)' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de negociação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'We flagged it because ___.', pool: 'fakeTell',
                  focus: 'razão', ptHint: 'Marcamos como suspeito porque ___.', n: 5 }
              ],
              backchain: [
                { text: "That's all I can afford.", ptHint: 'É tudo que eu posso pagar.' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'What the Object Reveals',
        goal: 'Read for what an object reveals about its owner, and watch an authentication process.',
        comp: 'Você lê o que um objeto revela sobre quem o usa, e acompanha um vídeo de ' +
              'verificação de autenticidade passo a passo.',
        live: [
          'Reading: Every Shoe Tells a Story',
          'Reading: cool products from a MOMA design exhibit',
          'Completing a chart with information from the text',
          'Video: How to Spot a Fake Louis Vuitton Bag, five steps',
          'Pair work: what fake goods have you seen sold?'
        ],
        bridge: 'Na aula você leu sobre o que os sapatos revelam e viu o vídeo dos passos da ' +
                'Louis Vuitton. Aqui a leitura é sobre um objeto novo, e os passos do vídeo ' +
                'viram checklist da TrueTag.',
        nextLive: 'Semana 4 · Writing + Speaking — defender um argumento e reagir a opiniões.',
        ican: [
          'I can identify what an object reveals about a person, according to a text.',
          'I can follow a five-step verification process in order.',
          'I can complete a chart using information spread across a reading.',
          'I can discuss counterfeit goods and give my opinion.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: What the Watch Says', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u6w3:read:text',
                title: '📖 A new object, the same skill',
                textTitle: 'What the Watch Says',
                text:
                  'Humans have worn watches for over a century, long after phones made them ' +
                  'unnecessary for telling time. If your watch could talk, what would it say ' +
                  'about you?\n\n' +
                  'A large, heavy watch with visible mechanical parts usually signals someone ' +
                  'who values craftsmanship over convenience — someone willing to wind a watch ' +
                  'by hand rather than replace a battery. A thin, minimal watch with no visible ' +
                  'branding often belongs to someone who prefers to be understated, even when ' +
                  'the watch itself is expensive.\n\n' +
                  'For hundreds of years, watches also told others about a person\'s wealth and ' +
                  'position. A pocket watch on a gold chain, in the nineteenth century, said ' +
                  'more about status than almost anything else a man could wear.\n\n' +
                  'Today, the message is more complicated. A person wearing an obviously fake ' +
                  'luxury watch is, in a strange way, still communicating something — usually ' +
                  'that appearance matters more to them than authenticity. Meanwhile, a person ' +
                  'wearing a genuinely expensive watch that looks plain and ordinary is often ' +
                  'signaling the opposite: they do not need anyone to notice.\n\n' +
                  'What does your watch — or the fact that you don\'t wear one — say about you?',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u6w3:q:1',
                title: '📖 What does a large, mechanical watch usually signal?',
                main: '',
                options: DF.shuffle([
                  { label: 'Valuing craftsmanship over convenience', correct: true },
                  { label: 'A lack of interest in fashion' },
                  { label: 'Financial difficulty' },
                  { label: 'A preference for digital technology' }
                ]),
                expl: '"someone who values craftsmanship over convenience".' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u6w3:q:2',
                title: '📖 What does the text say about someone wearing an obvious fake?',
                main: '',
                options: DF.shuffle([
                  { label: 'Appearance matters more to them than authenticity', correct: true },
                  { label: 'They are trying to save money responsibly' },
                  { label: 'They do not care about watches at all' },
                  { label: 'The text gives no opinion' }
                ]),
                expl: '"appearance matters more to them than authenticity" — julgamento ' +
                      'explícito do texto.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u6w3:word:1',
                title: '🔗 Find the word in the text that means...',
                pairs: [
                  ['skill in making something well', 'craftsmanship'],
                  ['not obviously showing off', 'understated'],
                  ['social or financial standing', 'status'],
                  ['plain, without decoration', 'minimal'],
                  ['ordinary, not special-looking', 'plain']
                ] }
            ]
          },

          {
            id: 'verify', icon: '🔎', name: 'The verification steps', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u6w3:dlg:1',
                title: '🔎 A five-step check, explained',
                sub: 'Sem texto na tela. Ouça a ordem dos cinco passos.',
                hideText: true,
                lines: [
                  { who: 'Trainer', en: 'Step one: check the price. If it\'s far below retail, ' +
                                        'that alone is a warning.' },
                  { who: 'Trainer', en: 'Step two: check the stitching. It should be even, with ' +
                                        'no loose threads.' },
                  { who: 'Trainer', en: 'Step three: check the serial number against the ' +
                                        'brand\'s database.' },
                  { who: 'Trainer', en: 'Step four: check the weight — real leather and metal ' +
                                        'feel heavier than most people expect.' },
                  { who: 'Trainer', en: 'Step five: trust your instinct. If something still ' +
                                        'feels wrong, walk away.' }
                ],
                question: 'What is the final step in the process?',
                options: DF.shuffle([
                  { label: 'Trusting your instinct if something still feels wrong', correct: true },
                  { label: 'Checking the price again' },
                  { label: 'Asking for a refund' },
                  { label: 'Checking the serial number' }
                ]),
                expl: '"trust your instinct... walk away" fecha os cinco passos.'
              },
              { ui: 'order', cat: 'fun', srsId: 'wc1u6w3:ord:1',
                title: '🧩 Put the five steps in order:',
                answer: 'Check the price check the stitching check the serial number check the ' +
                        'weight trust your instinct',
                expl: 'preço → costura → número de série → peso → instinto.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w3+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Explain your own object',
                prompt: 'Choose something you own and explain what it might say about you, ' +
                        'using the reading as a model.',
                example: 'My old watch is scratched and plain, which probably says I care more ' +
                         'about it working than looking new.',
                mustUse: ['which'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de verificação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The item that we checked was ___.', pool: 'itemType',
                  focus: 'that + coisa', ptHint: 'O item verificado era ___.', n: 5 }
              ],
              backchain: [
                { text: 'We flagged it because {fakeTell}.',
                  ptHint: 'Marcamos como suspeito porque…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Defending Your Argument',
        goal: 'Present and defend an argument, and react to viewpoints you disagree with.',
        comp: 'Você apresenta e defende um argumento por escrito, e reage a opiniões — ' +
              'concordando, discordando e questionando com o tom certo.',
        live: [
          'Writing: Present and Defend an Argument, with opposite opinions',
          'The Writing Strategy: stating your opinion and countering the opposite view',
          'Speaking: reacting to statements about shopping and fashion',
          'The Speaking Strategy: expressing agreement and disagreement',
          'Expanding Your Fluency: the free store concept + Check What You Know'
        ],
        bridge: 'Na aula você escreveu o argumento e reagiu às opiniões da turma. Aqui o ' +
                'argumento é sobre um veredito da TrueTag que o cliente contesta — e reagir ' +
                'vira negociação de tom, não só de conteúdo.',
        nextLive: 'Bloco 4-6 fecha aqui — revisão acumulada antes da Unidade 7.',
        ican: [
          'I can state my opinion clearly and support it with two reasons.',
          'I can acknowledge an opposite opinion before arguing against it.',
          'I can react to a viewpoint with the right level of agreement or disagreement.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'argument', icon: '⚖️', name: 'Present and defend an argument', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u6w4:read:arg',
                title: '⚖️ A successful argument',
                textTitle: 'Making a successful argument',
                readAloud: false,
                text:
                  'STATE YOUR OPINION CLEARLY — are you for or against something?\n' +
                  'I believe selling counterfeit goods should carry a real penalty.\n\n' +
                  'GIVE TWO REASONS\n' +
                  'First, buyers rarely know they are being deceived. Second, the money ' +
                  'supports operations that pay no taxes and follow no safety standards.\n\n' +
                  'ACKNOWLEDGE THE OPPOSITE VIEW — then counter it\n' +
                  'Some people argue that buyers get what they pay for. While that may be ' +
                  'true, it ignores the sellers who lie about what they are selling.\n\n' +
                  'A ARMADILHA: pular direto pro seu argumento sem reconhecer o outro lado ' +
                  'deixa o texto fraco, nao forte. "While that may be true" mostra que voce ' +
                  'entendeu a objecao antes de responder a ela — e e exatamente isso que torna ' +
                  'um argumento dificil de rebater.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u6w4:ar:1',
                title: '⚖️ Which sentence acknowledges an opposite view?',
                main: '',
                options: DF.shuffle([
                  { label: 'While some buyers say they can\'t afford the real thing, that ' +
                           'doesn\'t make the purchase fair to the original designer.',
                    correct: true },
                  { label: 'Buying fakes is completely wrong, no exceptions.' },
                  { label: 'Anyone who buys a fake doesn\'t understand fashion.' },
                  { label: 'I believe fakes should never be sold, period.' }
                ]),
                expl: 'Só a primeira reconhece o argumento contrário ANTES de responder a ele.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w4:ar:2', unit: 6, waSec: 'Argument',
                title: '⚖️ State your opinion',
                prompt: 'State your opinion about buying counterfeit goods, for or against.',
                example: 'I believe buying counterfeit goods is a form of stealing from the ' +
                         'original designer.',
                mustUse: ['believe'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w4:ar:3', unit: 6, waSec: 'Argument',
                title: '⚖️ Acknowledge the other side',
                prompt: 'Acknowledge the opposite opinion, then counter it.',
                example: 'While some people say it\'s a victimless choice, that ignores the ' +
                         'workers who lose income because of it.',
                mustUse: ['while'],
                expl: 'Mande as duas frases juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'react', icon: '💬', name: 'Reacting to viewpoints', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u6w4:rep:1', unit: 6, waSec: 'Reacting',
                title: '🎤 Strong agreement:',
                target: "I couldn't agree with you more.",
                ptHint: 'Eu concordo plenamente com você.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u6w4:rep:2', unit: 6, waSec: 'Reacting',
                title: '🎤 Soft disagreement:',
                target: "I'm not so sure about that.",
                ptHint: 'Não tenho tanta certeza disso.' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u6w4:rep:3', unit: 6, waSec: 'Reacting',
                title: '🎤 Strong disagreement — formal enough for anyone:',
                target: 'I completely disagree.',
                ptHint: 'Eu discordo completamente.' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u6w4:dlg:1',
                title: '💬 A client disputes the verdict',
                sub: 'Repare no tom de cada reação.',
                lines: [
                  { who: 'Agent', en: 'Based on the stitching and the logo, we believe this is ' +
                                      'not authentic.' },
                  { who: 'Client', en: "I'm not so sure about that. I bought it directly from " +
                                       'the brand\'s own store.' },
                  { who: 'Agent', en: 'I see what you\'re saying, but even authorized stores ' +
                                      'have sold counterfeit stock by mistake before.' },
                  { who: 'Client', en: "Okay, that's fair. Can you show me exactly what you found?" }
                ],
                question: 'How does the client react at first?',
                options: DF.shuffle([
                  { label: 'With soft disagreement, giving a reason', correct: true },
                  { label: 'With strong, angry disagreement' },
                  { label: 'By immediately agreeing' },
                  { label: 'By refusing to discuss it further' }
                ]),
                expl: '"I\'m not so sure about that" — discordância suave, não confronto.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w4:re:1', unit: 6, waSec: 'Reacting',
                title: '💬 React to a strong claim',
                prompt: 'Someone says: "Nobody should ever buy secondhand designer goods." ' +
                        'React with soft disagreement and a reason.',
                example: "I'm not so sure about that — a lot of secondhand items are verified " +
                         'and perfectly genuine.',
                mustUse: ["not so sure"] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w4:re:2', unit: 6, waSec: 'Reacting',
                title: '💬 Question a viewpoint',
                prompt: 'Someone gives an opinion you partly agree with. Question one part of ' +
                        'it, using I see what you\'re saying, but…',
                example: "I see what you're saying, but that doesn't explain why the price was " +
                         'so much lower than everywhere else.',
                mustUse: ["I see what you're saying"] }
            ]
          },

          {
            id: 'freestore', icon: '🆓', name: 'The free store concept', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u6w4:read:free',
                title: '🆓 A store where nothing costs money',
                textTitle: 'The Free Store',
                text:
                  'A free store lets people bring goods they don\'t want and take goods they ' +
                  'do, at no cost. The goal isn\'t charity for people who can\'t afford things ' +
                  '— it\'s encouraging everyone to reuse instead of throwing things away.',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w4:fs:1', unit: 6, waSec: 'Free store',
                title: '🆓 Would it work in your neighbourhood?',
                prompt: 'Give your opinion on whether a free store would work where you live, ' +
                        'and one reason.',
                example: 'I think a free store would work here because people already give ' +
                         'away used furniture on local groups all the time.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w4:fs:2', unit: 6, waSec: 'Free store',
                title: '🆓 Should everyone be allowed to shop there?',
                prompt: 'Give your opinion on whether a free store should have any restrictions.',
                example: 'I think everyone should be allowed to shop there, because limiting it ' +
                         'defeats the purpose of reducing waste.',
                mustUse: ['should'] }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u6w4:chk:1', unit: 6, idx: 0,
                statement: 'I can describe shopping habits and fashion preferences.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u6w4:chk:2', unit: 6, idx: 1,
                statement: 'I can use adjective clauses to explain and define people and things.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u6w4:chk:3', unit: 6, idx: 2,
                statement: 'I can react to other points of view.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u6w4:chk:4', unit: 6, idx: 3,
                statement: 'I can present and defend an argument.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u6w4:pt:1',
                title: '📝 Complete:', main: 'The dealer ___ sold it disappeared.',
                options: DF.shuffle([
                  { label: 'who', correct: true }, { label: 'which' },
                  { label: 'what' }, { label: '(nothing — omit)' }
                ]),
                expl: 'who é o sujeito da oração — não pode sumir.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u6w4:pt:2',
                title: '📝 Complete:', main: 'The bag ___ she bought was fake.',
                options: DF.shuffle([
                  { label: 'which', correct: true }, { label: 'who' },
                  { label: 'whom' }, { label: 'whose' }
                ]),
                expl: 'which = coisa.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u6w4:pt:3',
                title: '📝 Which sentence needs commas?',
                main: '',
                options: DF.shuffle([
                  { label: 'My father_ who taught me everything about watches_ passed away ' +
                           'last year.', correct: true },
                  { label: 'The dealer who sold it disappeared.' },
                  { label: 'The item that we checked was authentic.' },
                  { label: 'Anybody who buys without checking takes a risk.' }
                ]),
                expl: 'Informação extra (não define QUAL pai — só há um) → vírgulas.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u6w4:pt:4',
                title: '📝 Which is soft disagreement?',
                main: '',
                options: DF.shuffle([
                  { label: "I'm not so sure about that.", correct: true },
                  { label: 'I completely disagree.' },
                  { label: 'No way!' },
                  { label: "I couldn't agree with you more." }
                ]),
                expl: 'Discordância suave, mantém a conversa aberta.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u6w4:pt:5',
                title: '🔗 Match the pronoun to its use:',
                pairs: [
                  ['who', 'for people'],
                  ['which', 'for things only'],
                  ['that', 'for people or things'],
                  ['no comma', 'defining, necessary'],
                  ['with commas', 'extra information']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u6w4:pt:6',
                title: '🧩 Build the sentence:',
                answer: 'While some people disagree the evidence supports our verdict',
                expl: 'While + concessão, sem vírgula obrigatória aqui, seguido do argumento.' }
            ]
          }
        ],

        more: [
          // ═══ REVIEW PUZZLE — Units 4-6 (fechamento de bloco) ═══
          // Mesma decisão da unidade 3 (block-review-1, ver plan-wc1-03.js):
          // manter a FUNÇÃO do Review Puzzle do livro (revisão acumulada,
          // misturando as unidades do bloco), trocar o FORMATO pelas
          // mecânicas que já existem — opção B, aprovada com o Felipe
          // 08/08/2026. Confirma o padrão: o livro revisa a cada 3 unidades.
          {
            id: 'block-review-2', icon: '🧩', name: 'Review Puzzle — Units 4–6', tag: 'revisão',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'wc1blk2:m1',
                title: '🧩 Unit 4 — match the word to its meaning:',
                pairs: [
                  ['convince', 'to persuade someone'],
                  ['emerge', 'to come out and be noticed'],
                  ['audition', 'a performance to test suitability'],
                  ['mainstream', 'most typical or conventional'],
                  ['launch', 'to start something']
                ] },
              { ui: 'match', cat: 'voc', srsId: 'wc1blk2:m2',
                title: '🧩 Unit 5 — match the word to its meaning:',
                pairs: [
                  ['ordeal', 'a very difficult, stressful situation'],
                  ['handle', 'to deal with a problem successfully'],
                  ['trapped', 'unable to escape'],
                  ['rescue', 'to save someone from danger'],
                  ['freeze', 'to be unable to move or think']
                ] },
              { ui: 'match', cat: 'voc', srsId: 'wc1blk2:m3',
                title: '🧩 Unit 6 — match the word to its meaning:',
                pairs: [
                  ['authentic', 'real, genuine'],
                  ['bargain', 'to negotiate a lower price'],
                  ['crooked', 'not straight, bent'],
                  ['discount', 'a reduction in price'],
                  ['instinct', 'a feeling about something']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk2:g1',
                title: '🧩 Unit 4 grammar — choose the correct form:',
                main: 'They arranged ___ him to audition on Friday.',
                options: DF.shuffle([
                  { label: 'for', correct: true }, { label: 'to' },
                  { label: '(nothing)' }, { label: 'that' }
                ]),
                expl: 'arrange precisa de FOR antes do objeto.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk2:g2',
                title: '🧩 Unit 5 grammar — choose the correct form:',
                main: '___ the plan was ready, they stayed calm.',
                options: DF.shuffle([
                  { label: 'Because', correct: true }, { label: 'So that' },
                  { label: 'Even though' }, { label: 'Which' }
                ]),
                expl: 'Because introduz a razão.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1blk2:g3',
                title: '🧩 Unit 6 grammar — choose the correct form:',
                main: 'The bag ___ she bought turned out to be fake.',
                options: DF.shuffle([
                  { label: 'which', correct: true }, { label: 'who' },
                  { label: 'whom' }, { label: 'because' }
                ]),
                expl: 'which = coisa, nunca pessoa.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk2:t1',
                title: '✍️ Unit 4 — complete with ONE word:',
                main: 'They arranged ___ him to audition again.',
                answers: ['for'],
                expl: 'arrange FOR + objeto + to.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk2:t2',
                title: '✍️ Unit 5 — complete with ONE word:',
                main: 'The sudden noise caught everyone ___ guard.',
                answers: ['off'],
                expl: 'catch off guard, phrasal fixo.' },
              { ui: 'type', cat: 'voc', srsId: 'wc1blk2:t3',
                title: '✍️ Unit 6 — complete with ONE word:',
                main: 'I completely ___ with that opinion.',
                answers: ['disagree'],
                expl: 'completely disagree = discordância forte.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk2:o1',
                title: '🧩 Build the sentence (Unit 4 grammar):',
                answer: 'They convinced him to accept the contract',
                expl: 'convince + objeto + to.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk2:o2',
                title: '🧩 Build the sentence (Unit 5 grammar):',
                answer: 'The first thing you should do is stay calm',
                expl: 'estrutura fixa de passo a passo.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1blk2:o3',
                title: '🧩 Build the sentence (Unit 6 grammar):',
                answer: 'The dealer who sold it disappeared the next day',
                expl: 'who = sujeito, não pode sumir.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk2:cross1',
                title: '🧩 Which unit does this word belong to?',
                main: 'ordeal',
                options: DF.shuffle([
                  { label: 'Unit 5 — No Need to Panic', correct: true },
                  { label: 'Unit 4 — The World\'s a Stage' },
                  { label: 'Unit 6 — In Style' }
                ]) },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk2:cross2',
                title: '🧩 Which unit does this word belong to?',
                main: 'mainstream',
                options: DF.shuffle([
                  { label: 'Unit 4 — The World\'s a Stage', correct: true },
                  { label: 'Unit 5 — No Need to Panic' },
                  { label: 'Unit 6 — In Style' }
                ]) },
              { ui: 'choice', cat: 'voc', srsId: 'wc1blk2:cross3',
                title: '🧩 Which unit does this word belong to?',
                main: 'authentic',
                options: DF.shuffle([
                  { label: 'Unit 6 — In Style', correct: true },
                  { label: 'Unit 4 — The World\'s a Stage' },
                  { label: 'Unit 5 — No Need to Panic' }
                ]) },
              { ui: 'build', cat: 'fun', srsId: 'wc1blk2:build', unit: 6, waSec: 'Review Puzzle',
                title: '🗣️ Close the block in one breath',
                prompt: 'In one minute, use one word from each unit (4, 5, and 6) in three ' +
                        'different sentences about your own life.',
                example: 'I try to convince my kids to read more. Even though it was scary, ' +
                         'I learned to swim. I always check if a deal is authentic before I buy.',
                mustUse: ['convince', 'even though', 'authentic'] }
            ]
          },
          {
            id: 'more-w4', icon: '🔥', name: 'The full argument, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u6w4+:b1', unit: 6, waSec: 'Praticar mais',
                title: '🔥 Sixty seconds, both sides',
                prompt: 'Argue one side of the counterfeit-goods debate for thirty seconds, ' +
                        'then argue the other side for thirty more.',
                example: '(60 segundos)' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de argumento', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Our typical client is quite ___.', pool: 'shopperTrait',
                  focus: 'vocabulário', ptHint: 'Nosso cliente típico é bem ___.', n: 5 }
              ],
              backchain: [
                { text: "I'm not so sure about that.", ptHint: 'Não tenho tanta certeza disso.' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
