/* ENGLISH FLOW — week/plan-wc1-04.js
   WORLD CLASS ONE · UNIT 4 "The World's a Stage" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: Esmee Denters, o interview do Carlos (salsa),
                    Assane N'Diaye (hip-hop no Senegal), Grupo Fantasma,
                    Iarla Ó Lionáird, o contrato da GRC.
     APP          → STAGE DOOR TALENT, uma agência fictícia que descobre
                    artistas desconhecidos e negocia contratos. 100% autoral
                    (item 20).

   Por que este cenário: a unidade cobra complementos de infinitivo (persuadir/
   convencer alguém a fazer algo), prós e contras de uma decisão, ordenar
   eventos de vida com expressões de tempo, e parafrasear fontes. Uma agência
   de talentos negociando contratos com artistas desconhecidos hospeda os
   quatro outcomes sem tocar no contrato da GRC nem nos artistas do livro.

     outcome 1 (infinitive complements) → convencer o artista a assinar
     outcome 2 (pros and cons)          → assinar ou não o contrato
     outcome 3 (time expressions)       → a linha do tempo da carreira
     outcome 4 (paraphrase sources)     → o perfil que a agência publica

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026 — ver ESFERA-PEDAGOGIA e memória de projeto).

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (Infinitive Complements)
     Semana 2 · Listening + Video
     Semana 3 · Reading (duas: hip-hop + Grammy band) + Connections
     Semana 4 · Writing + Speaking + Outcomes + Expanding Your Fluency

   Nota: o livro não traz página de Pronunciation nesta unidade (confirmado
   nas fotos) — a semana 2 fica só Listening + Video, sem pular nada. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.talentVerb = ['sing', 'act', 'dance', 'perform live', 'write songs',
                                'play the guitar', 'produce music'];
    DF.WGEN.POOLS.contractTerm = ['a five-year contract', 'a three-album deal',
                                  'a worldwide tour', 'full creative control',
                                  'a new stage name', 'a monthly salary'];
    DF.WGEN.POOLS.lifeEventTalent = ['formed a band', 'quit a stable job',
                                     'moved to a bigger city', 'recorded a demo',
                                     'got rejected by three labels', 'went viral online'];
  }

  const WORDS = [
    { en: 'audience', pt: 'plateia / público',
      def: 'a group of people watching a performance',
      ex: 'The audience stayed until the last song, which never happens on a Tuesday.' },
    { en: 'audition', pt: 'audição / teste',
      def: 'a short performance given to demonstrate suitability for a show',
      ex: 'She got the audition because someone forwarded a video without asking her.' },
    { en: 'commercial', pt: 'comercial (adj.) / anúncio',
      def: 'related to the buying and selling of goods and services',
      ex: 'The label wanted something more commercial, and he refused.' },
    { en: 'convince', pt: 'convencer',
      def: 'to persuade someone to do something',
      ex: 'It took three meetings to convince him the contract was fair.' },
    { en: 'emerge', pt: 'surgir / despontar',
      def: 'to come out and be recognized or noticed',
      ex: 'New acts emerge from that neighbourhood every couple of years.' },
    { en: 'enthusiasm', pt: 'entusiasmo',
      def: 'a feeling of energetic interest in something',
      ex: 'His enthusiasm did not survive the first bad review.' },
    { en: 'hardcore', pt: 'fanático / hardcore',
      def: 'very committed to something',
      ex: 'The hardcore fans knew every unreleased track by heart.' },
    { en: 'inspire', pt: 'inspirar',
      def: 'to encourage or motivate',
      ex: 'She says the neighbourhood inspired the whole album, not any other musician.' },
    { en: 'launch', pt: 'lançar / lançamento',
      def: 'to start',
      ex: 'They launched the channel with almost no equipment and no plan.' },
    { en: 'mainstream', pt: 'mainstream / convencional',
      def: 'most typical or conventional',
      ex: 'Mainstream radio ignored them for two years before it changed its mind.' },
    { en: 'performance', pt: 'apresentação / atuação',
      def: 'singing, dancing, or acting for an audience',
      ex: 'The performance ran forty minutes over, and nobody left early.' },
    { en: 'promote', pt: 'promover / divulgar',
      def: 'to encourage the popularity or sales of something',
      ex: 'They promote every show themselves — no publicist, no budget.' }
  ];

  const EXTRA_WORDS = [
    { en: 'appearance ·+', pt: 'aparição pública',
      def: 'the act of coming out in public',
      ex: 'Her first public appearance since the accident sold out in nine minutes.' },
    { en: 'benefit ·+', pt: 'evento beneficente',
      def: 'a social event to raise funds for a person or cause',
      ex: 'The benefit raised more in one night than the tour did in a month.' },
    { en: 'charity ·+', pt: 'instituição de caridade',
      def: 'an organization that helps people in need',
      ex: 'Half the ticket price goes straight to the charity, with no cut for the venue.' },
    { en: 'demo ·+', pt: 'demo / gravação amadora',
      def: 'a brief recording illustrating the abilities of a musician',
      ex: 'The demo was recorded in a garage, on a phone, in one take.' },
    { en: 'encounter ·+', pt: 'encontro (inesperado)',
      def: 'to meet, often unexpectedly',
      ex: 'A chance encounter backstage changed the whole direction of the album.' },
    { en: 'fund-raising ·+', pt: 'arrecadação de fundos',
      def: 'a way for organizations to raise money for a cause',
      ex: 'Fund-raising for the tour started with a single online post.' },
    { en: 'logo ·+', pt: 'logotipo',
      def: 'a special design used by a company or group',
      ex: 'The logo cost more than the first three shows combined.' },
    { en: 'realize ·+', pt: 'perceber / dar-se conta',
      def: 'to understand something, sometimes suddenly',
      ex: 'He realized halfway through the tour that he missed his old job.' }
  ];

  DF.PLAN.wc1[4] = {
    unit: 4,
    title: "The World's a Stage",
    subtitle: 'Seu quarto mês',
    icon: '🎤',

    mindmap: {
      center: "The World's a Stage",
      sub: 'Persuadir, decidir, ordenar uma carreira e contar a história de outra pessoa',
      branches: [
        {
          icon: '🎭', name: 'Performance vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>realize</b> em inglês é neutro (perceber algo qualquer); em português ' +
                '"realizar" costuma significar "concretizar" — não confunda "I realized the ' +
                'show was cancelled" com "eu realizei o show".'
        },
        {
          icon: '🎯', name: 'Persuade-type: verb + object + infinitive',
          leaves: [
            { en: 'She advised me to take the job.', pt: 'advise + obj + to' },
            { en: 'We expect him to apply.', pt: 'expect + obj + to' },
            { en: 'I consider him to be the best singer.', pt: 'consider + obj + to be' },
            { en: 'They arranged for me to have an interview.', pt: 'arrange FOR + obj + to' }
          ],
          note: 'Verbos do grupo <b>persuade</b> (advise, cause, convince) e <b>want</b> ' +
                '(expect, need, would like) seguem <b>verbo + objeto + infinitivo</b>. Só o ' +
                'grupo <b>arrange</b> precisa de <b>for</b> antes do objeto: <i>arrange FOR ' +
                'me to go</i>, nunca <i>arrange me to go</i>.'
        },
        {
          icon: '🔓', name: 'Let, make, have: infinitive WITHOUT to',
          leaves: [
            { en: 'His teacher made him practise every day.', pt: 'make + obj + verbo puro' },
            { en: "Let's let her make the decision.", pt: 'let + obj + verbo puro' },
            { en: "His music makes me feel happy.", pt: 'make + obj + verbo puro (feel)' }
          ],
          note: 'Só estes três verbos (<b>let, make, have</b> no sentido causativo) dispensam ' +
                'o <b>to</b>. É a exceção mais provável de aparecer na prova — todo o resto do ' +
                'grupo persuade/want mantém o <b>to</b>.'
        },
        {
          icon: '🔄', name: 'to... vs -ing after certain verbs',
          leaves: [
            { en: "I hope to see you again.", pt: 'want/hope/decide/promise + to' },
            { en: "I don't mind getting up early.", pt: 'enjoy/mind/suggest/finish + -ing' },
            { en: 'I like getting up early. / I like to get up early.', pt: 'like/love/hate + qualquer um' },
            { en: "I'd like to go to Australia.", pt: 'would like + to (sempre, nunca -ing)' }
          ],
          note: '<b>Armadilha do brasileiro:</b> "I would like going" está errado — ' +
                '<b>would like</b> SEMPRE pede <b>to</b>, mesmo que o verbo "like" sozinho ' +
                'aceite os dois. São regras diferentes disfarçadas da mesma palavra.'
        },
        {
          icon: '📅', name: 'Time expressions to order life events',
          leaves: [
            { en: 'From an early age, she loved to sing.', pt: 'início' },
            { en: 'In those days, nobody knew her name.', pt: 'período passado' },
            { en: 'Up to that point, he had never performed live.', pt: 'até um marco' },
            { en: 'As an adult, she finally recorded an album.', pt: 'fase da vida' },
            { en: 'Today, she tours the world.', pt: 'presente, fecha a história' }
          ],
          note: 'São os "degraus" que transformam uma lista de fatos numa história com ' +
                'direção. Sem eles, uma timeline vira uma lista solta.'
        },
        {
          icon: '🔁', name: 'Paraphrasing',
          leaves: [
            { en: '"We were blown away." → They were shocked and very impressed.', pt: '' },
            { en: '"It has a universal feel." → Anyone, anywhere, can relate to it.', pt: '' }
          ],
          note: '<b>4 passos:</b> 1) entenda a informação · 2) reescreva com suas próprias ' +
                'palavras · 3) releia o original pra garantir que o sentido não mudou · ' +
                '4) frases copiadas direto entram entre aspas. Copiar sem aspas não é ' +
                'paráfrase — é cópia.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🎤',
        title: 'Overview · Vocabulary · Grammar',
        goal: 'Talk about persuading someone using the right infinitive pattern.',
        comp: 'Você fala sobre convencer alguém a fazer algo, escolhendo entre verbo+objeto+to, ' +
              'arrange for + objeto + to, e a exceção sem to de let/make/have.',
        live: [
          'The unit opener: the mariachi band photo and the three warm-up questions',
          "Vocabulary: Esmee Denters' story and the Word Bank",
          'Grammar: Infinitive Complements — the four verb groups',
          'The Bree Just Actin or the Real Thing text with errors to correct',
          'Pair work: guessing a singer from clues'
        ],
        bridge: 'Na aula você viu os quatro grupos na tabela e corrigiu o texto da Bree. Aqui ' +
                'a escolha do padrão certo vira decisão sob pressão, em casos novos da Stage ' +
                'Door Talent, e você ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Video — a entrevista sobre salsa e a história do ' +
                  'cantor irlandês.',
        ican: [
          'I can use verb + object + infinitive to talk about persuading someone.',
          'I can use let, make and have without the infinitive to.',
          'I can tell would like apart from like when choosing to or -ing.',
          'I can use the unit vocabulary to describe a performer\'s career.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u4w1:cards:core',
                title: '📇 Twelve words for the world of performers',
                sub: 'Exemplos da Stage Door Talent — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u4w1:cards:extra',
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
              { ui: 'choice', cat: 'voc', srsId: 'wc1u4w1:wf:1',
                title: '🔤 Which word fits?',
                main: 'A new singer can ___ from any neighbourhood, with no warning.',
                options: DF.shuffle([
                  { label: 'emerge', correct: true }, { label: 'convince' },
                  { label: 'promote', }, { label: 'realize' }
                ]),
                expl: 'emerge = surgir/aparecer de repente, sem aviso.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u4w1:wf:2',
                title: '🔤 Which word fits?',
                main: 'It took three meetings to ___ him the contract was fair.',
                options: DF.shuffle([
                  { label: 'convince', correct: true }, { label: 'inspire' },
                  { label: 'launch' }, { label: 'promote' }
                ]),
                expl: 'convince = persuadir com argumentos.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u4w1:wf:3',
                title: '🔤 Which is the noun form?',
                main: 'His music translates well because of the ___ of his background.',
                options: DF.shuffle([
                  { label: 'appearance', correct: true }, { label: 'appear' },
                  { label: 'appearing' }, { label: 'appeared' }
                ]),
                expl: 'appearance = substantivo. Attention: aqui é usado como "aparência/' +
                      'característica visível" — mesmo substantivo, sentido diferente do ' +
                      '"aparição pública".' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u4w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['audition', 'a performance to test suitability'],
                  ['hardcore', 'very committed to something'],
                  ['mainstream', 'most typical or conventional'],
                  ['enthusiasm', 'energetic interest in something'],
                  ['demo', 'a brief recording of a musician\'s ability']
                ] }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Infinitive complements at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u4w1:read:glance',
                title: '🔍 Four groups, one skeleton',
                textTitle: 'Verb + object + infinitive',
                readAloud: false,
                text:
                  'GROUP 1 — persuade-type (advise, cause, convince, persuade, teach)\n' +
                  'verb + object + infinitive\n' +
                  'The agent advised her to sign.\n\n' +
                  'GROUP 2 — want-type (expect, need, want, would like, believe)\n' +
                  'verb + (object) + infinitive — the object is OPTIONAL\n' +
                  'She wanted to leave. / She wanted him to leave.\n\n' +
                  'GROUP 3 — arrange-type (arrange, ask, plan)\n' +
                  'verb + for + object + infinitive — needs FOR before the object\n' +
                  'They arranged for her to meet the producer.\n\n' +
                  'GROUP 4 — let / make / have\n' +
                  'verb + object + BASE FORM (no to)\n' +
                  'The label made him change the album title.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: esquecer o FOR do grupo 3. "They arranged her to ' +
                  'meet" esta errado — precisa de "arranged FOR her to meet". E o oposto: usar ' +
                  '"to" com let/make/have — "made him TO change" tambem esta errado.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w1:ic:1',
                title: '🎯 Choose the correct form:',
                main: 'His manager convinced him ___ the contract.',
                options: DF.shuffle([
                  { label: 'to sign', correct: true }, { label: 'sign' },
                  { label: 'signing' }, { label: 'for sign' }
                ]),
                expl: 'convince é grupo persuade → verbo + objeto + to.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w1:ic:2',
                title: '🎯 Choose the correct form:',
                main: 'They arranged ___ him to meet the producer.',
                options: DF.shuffle([
                  { label: 'for', correct: true }, { label: '(nothing)' },
                  { label: 'to' }, { label: 'with' }
                ]),
                expl: 'arrange é grupo especial → precisa do FOR antes do objeto.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w1:ic:3',
                title: '🎯 Choose the correct form:',
                main: 'The label made him ___ the album title.',
                options: DF.shuffle([
                  { label: 'change', correct: true }, { label: 'to change' },
                  { label: 'changing' }, { label: 'changed' }
                ]),
                expl: 'make + objeto + verbo puro, sem to.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w1:ic:4',
                title: '🎯 Choose the correct form:',
                main: 'She wanted ___ before the tour started.',
                options: DF.shuffle([
                  { label: 'to rest', correct: true }, { label: 'rest' },
                  { label: 'resting' }, { label: 'for rest' }
                ]),
                expl: 'want é grupo want-type, objeto opcional → "wanted to rest" sem objeto.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w1:ic:5',
                title: '🎯 Which one is WRONG?',
                main: 'Only one breaks the pattern of its own verb group.',
                options: DF.shuffle([
                  { label: 'They arranged him to see the manager.', correct: true },
                  { label: 'They arranged for him to see the manager.' },
                  { label: 'His teacher made him practise every day.' },
                  { label: 'The agent advised her to wait.' }
                ]),
                expl: 'arrange sem "for" antes do objeto está errado.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w1:ic:6',
                title: '🎯 to or -ing? Choose:',
                main: "I'd like ___ the new demo before we decide.",
                options: DF.shuffle([
                  { label: 'to hear', correct: true }, { label: 'hearing' },
                  { label: 'hear' }, { label: 'for hear' }
                ]),
                expl: 'would like SEMPRE pede to, mesmo que "like" sozinho aceite -ing também.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w1:ic:7',
                title: '🎯 to or -ing? Choose:',
                main: "I don't mind ___ up early for rehearsals.",
                options: DF.shuffle([
                  { label: 'getting', correct: true }, { label: 'to get' },
                  { label: 'get' }, { label: 'for getting' }
                ]),
                expl: 'mind pede -ing, sempre.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u4w1:tf:1',
                title: '🔀 Infinitive complement transformation',
                rounds: [
                  { base: 'His manager advised him to sign.', cmd: 'Question',
                    answers: ['Did his manager advise him to sign?'] },
                  { base: 'They arranged for her to meet the label.', cmd: 'Negative',
                    answers: ["They didn't arrange for her to meet the label.",
                              'They did not arrange for her to meet the label.'] },
                  { base: 'The teacher made him practise daily.', cmd: 'Question',
                    answers: ['Did the teacher make him practise daily?'] },
                  { base: "She wants to launch the album in June.", cmd: 'Negative',
                    answers: ["She doesn't want to launch the album in June.",
                              'She does not want to launch the album in June.'] },
                  { base: 'Would you like to hear the demo?', cmd: 'Short answer',
                    answers: ['Yes, I would.', 'No, I would not.', "No, I wouldn't."] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u4w1:drl:convince', unit: 4, waSec: 'Drill · gramática',
                title: '🔁 Drill 1 — the contract term changes', focus: 'convince + objeto + to',
                frame: 'We convinced her to accept ___.', ptHint: 'Nós a convencemos a aceitar ___.',
                slots: ['a five-year contract', 'a three-album deal', 'a worldwide tour',
                        'a new stage name', 'a monthly salary'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u4w1:drl:skill', unit: 4, waSec: 'Drill · gramática',
                title: '🔁 Drill 2 — the skill changes', focus: 'want + objeto + to',
                frame: 'We want him to ___ on the album.', ptHint: 'Queremos que ele ___ no álbum.',
                slots: ['sing', 'play the guitar', 'write songs', 'produce music', 'perform live'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u4w1:drl:make', unit: 4, waSec: 'Drill · gramática',
                title: '🔁 Drill 3 — the demand changes', focus: 'make + verbo puro',
                frame: 'His manager made him ___.', ptHint: 'O empresário o fez ___.',
                slots: ['sign', 'record a demo', 'move to a bigger city', 'quit a stable job',
                        'form a band'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u4w1:drl:career', unit: 4, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 4 — the milestone changes', focus: 'vocabulário',
                frame: 'Early in her career, she ___.', ptHint: 'No início da carreira, ela ___.',
                slots: ['formed a band', 'recorded a demo', 'got rejected by three labels',
                        'went viral online', 'moved to a bigger city'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u4w1:bc:1', unit: 4, waSec: 'Backchain',
                title: '🧱 The full contract sentence',
                ptHint: 'Nós o convencemos a assinar um contrato de cinco anos.',
                chain: ['a five-year contract', 'to sign a five-year contract',
                        'him to sign a five-year contract',
                        'We convinced him to sign a five-year contract.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u4w1:bc:2', unit: 4, waSec: 'Backchain',
                title: '🧱 The arrange sentence',
                ptHint: 'Eles arranjaram para ela conhecer o produtor antes do show.',
                chain: ['before the show', 'to meet the producer before the show',
                        'for her to meet the producer before the show',
                        'They arranged for her to meet the producer before the show.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u4w1:bc:3', unit: 4, waSec: 'Backchain',
                title: '🧱 The make sentence',
                ptHint: 'O empresário o fez praticar todos os dias antes da turnê.',
                chain: ['before the tour', 'practise every day before the tour',
                        'him practise every day before the tour',
                        'His manager made him practise every day before the tour.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u4w1:dlg:1',
                title: '🎧 A Stage Door scout makes a call',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: "We'd like to sign him. Can you convince him to meet us?" },
                  { who: 'Elias', en: "I'll try. He doesn't want to leave his hometown." },
                  { who: 'Nadia', en: "Arrange for him to visit the studio first. No pressure." },
                  { who: 'Elias', en: 'Good idea. That might work better than a phone call.' }
                ],
                question: 'What does Nadia suggest, exactly?',
                options: DF.shuffle([
                  { label: 'Arranging for him to visit the studio first', correct: true },
                  { label: 'Signing the contract by phone' },
                  { label: 'Convincing him to move immediately' },
                  { label: 'Waiting until he calls them' }
                ]),
                expl: '"Arrange for him to visit" — grupo arrange, com FOR antes do objeto.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u4w1:dlg:2',
                title: '🎧 A correction in the office',
                sub: 'Repare o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'We made her to sign a new contract.' },
                  { who: 'Tomás', en: 'Made her sign — no "to" after make.' },
                  { who: 'Priya', en: 'Right. We made her sign a new contract.' },
                  { who: 'Tomás', en: 'Exactly. Make, let and have never take "to".' }
                ],
                question: 'Which verbs never take "to" before the next verb?',
                options: DF.shuffle([
                  { label: 'Make, let and have', correct: true },
                  { label: 'Want, need and expect' },
                  { label: 'Arrange and ask' },
                  { label: 'Convince and advise' }
                ]),
                expl: 'É a mesma regra da tela do glance, agora ouvida numa conversa.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u4w1:dlg:3',
                title: '🎧 Three scouts, no text on screen',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Amara', en: 'I want to find someone with real hardcore fans, not fake ones.' },
                  { who: 'Kenji', en: "I'd rather convince someone unknown to try — less risk." },
                  { who: 'Larissa', en: 'We arranged for three artists to audition next week.' }
                ],
                question: 'Who already scheduled something concrete?',
                options: DF.shuffle([
                  { label: 'Larissa', correct: true }, { label: 'Amara' },
                  { label: 'Kenji' }, { label: 'None of them' }
                ]),
                expl: '"We arranged for three artists to audition" já é compromisso marcado.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w1:bld:1', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Convince someone',
                prompt: 'Think of something you convinced someone to do recently. Say it using ' +
                        'convince + object + to.',
                example: 'I convinced my brother to apply for the job — he almost didn\'t send ' +
                         'the email.',
                mustUse: ['convinced'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w1:bld:2', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Someone made you do something',
                prompt: 'Say one thing someone made you do — no "to".',
                example: 'My old boss made me redo the whole report twice.',
                mustUse: ['made'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w1:bld:3', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Something you arranged',
                prompt: 'Say something you arranged for someone else. Watch the "for".',
                example: 'I arranged for my mother to see a specialist next week.',
                mustUse: ['arranged for'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w1+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Four verb groups in sixty seconds',
                prompt: 'Talk for one minute about a decision someone talked you into or out ' +
                        'of. Use at least three of the four patterns.',
                example: '(1 minuto)',
                expl: 'O professor ouve se as estruturas aparecem certas.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w1+:b2', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Fix it out loud',
                prompt: 'This is wrong: "They arranged him to visit." Correct it and explain ' +
                        'why in English.',
                example: 'They arranged for him to visit — arrange needs "for" before the object.',
                mustUse: ['for'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de complementos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'We convinced her to accept ___.', pool: 'contractTerm',
                  focus: 'convince + to', ptHint: 'Nós a convencemos a aceitar ___.', n: 5 },
                { frame: 'We want him to ___.', pool: 'talentVerb',
                  focus: 'want + to', ptHint: 'Queremos que ele ___.', n: 5 }
              ],
              backchain: [
                { text: 'We convinced her to accept {contractTerm}.',
                  ptHint: 'Nós a convencemos a aceitar…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'Listening · Video',
        goal: 'Follow someone telling their own career story, in order.',
        comp: 'Você ouve alguém contando a própria trajetória artística, ordena os eventos, e ' +
              'resume a história em suas próprias palavras.',
        live: [
          'Listening: the interview with Carlos about salsa music',
          'Choosing the correct answers and putting events in order',
          'Video: the story of Iarla Ó Lionáird, a singer from Ireland',
          'Watching with the sound off first, then checking',
          'Pair work: summarizing Carlos story'
        ],
        bridge: 'Na aula você ouviu o Carlos e viu o vídeo do Iarla. Aqui a história é outra — ' +
                'um artista da Stage Door Talent — e ordenar os eventos vira exercício de ' +
                'decisão, não só de memória.',
        nextLive: 'Semana 3 · Reading + Connections — duas leituras sobre artistas e o evento ' +
                  'beneficente.',
        ican: [
          'I can follow a spoken career story and put the events in order.',
          'I can identify what changed a performer\'s direction.',
          'I can summarize a spoken interview in my own words.',
          'I can take notes while someone talks about their past.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'listen', icon: '👂', name: 'A Stage Door artist tells the story', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u4w2:dlg:1',
                title: '👂 How did you get into this?',
                sub: 'Sem texto na tela. Ouça procurando o que mudou o rumo dele.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'How did you get into producing music?' },
                  { who: 'Mateus', en: "I wasn't into it at first. I was more into drumming — " +
                                       'it\'s funny to think about now.' },
                  { who: 'Host', en: 'What changed?' },
                  { who: 'Mateus', en: 'A friend needed someone to finish a track for a contest. ' +
                                       'I finished it, and I got into producing after that.' }
                ],
                question: 'What actually changed his direction?',
                options: DF.shuffle([
                  { label: 'Finishing a friend\'s track for a contest', correct: true },
                  { label: 'Winning a drumming competition' },
                  { label: 'Meeting a famous producer' },
                  { label: 'Losing interest in music' }
                ]),
                expl: '"I finished it, and I got into producing after that" — o gatilho ' +
                      'específico, não uma decisão vaga.'
              },
              { ui: 'order', cat: 'fun', srsId: 'wc1u4w2:ord:1',
                title: '🧩 Put the events in order:',
                answer: 'He was into drumming a friend needed help with a track he finished it ' +
                        'he got into producing',
                expl: 'A ordem em que os fatos aparecem no relato importa — não é a ordem em ' +
                      'que você lembra deles.' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u4w2:dlg:2',
                title: '👂 The scout asks about the sound',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'Your sound is different from the rest of the scene. Why?' },
                  { who: 'Mateus', en: 'It has to do with where I grew up. My neighbourhood ' +
                                       'mixed a lot of styles, so I never picked just one.' },
                  { who: 'Host', en: 'Do you think that translates to different audiences?' },
                  { who: 'Mateus', en: 'I hope so. Even if the lyrics are in Portuguese, people ' +
                                       'who don\'t speak it still connect with the beat.' }
                ],
                question: 'Why does his sound appeal to different audiences, according to him?',
                options: DF.shuffle([
                  { label: 'The mix of styles from his neighbourhood', correct: true },
                  { label: 'He sings only in English' },
                  { label: 'He copies a famous producer' },
                  { label: 'He avoids using lyrics' }
                ]),
                expl: '"My neighbourhood mixed a lot of styles" — a explicação vem da origem, ' +
                      'não da estratégia.'
              },
              { ui: 'type', cat: 'fun', srsId: 'wc1u4w2:type:1',
                title: '👂 Complete: "I was more ___ drumming."',
                sub: 'Só a palavra.',
                tts: "I wasn't into it at first. I was more into drumming.",
                answers: ['into'],
                expl: 'be into = ter interesse em, casual.' }
            ]
          },

          {
            id: 'video', icon: '🎬', name: 'A career from a distance', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u4w2:dlg:3',
                title: '🎬 A narrator tells another artist\'s story',
                sub: 'Sem texto na tela. Ouça a ordem dos eventos.',
                hideText: true,
                lines: [
                  { who: 'Narrator', en: 'She started singing in church, as a child.' },
                  { who: 'Narrator', en: 'By the time she was a teenager, she felt embarrassed ' +
                                         'by the old style — it seemed out of date.' },
                  { who: 'Narrator', en: 'Up to that point, nobody outside her town had ever ' +
                                         'heard her.' },
                  { who: 'Narrator', en: 'Today, she performs the same old songs to audiences ' +
                                         'of thousands, and she says she finally understands ' +
                                         'why they mattered.' }
                ],
                question: 'What changed between her teenage years and today?',
                options: DF.shuffle([
                  { label: 'She went from embarrassed to understanding the value of the old songs',
                    correct: true },
                  { label: 'She stopped performing in public' },
                  { label: 'She moved away from music entirely' },
                  { label: 'Nothing changed — the text does not say' }
                ]),
                expl: '"Today, she... finally understands why they mattered" — o arco completo ' +
                      'da história.'
              },
              { ui: 'match', cat: 'gra', srsId: 'wc1u4w2:match:time',
                title: '🔗 Match the time expression to what it signals:',
                pairs: [
                  ['as a child,', 'the beginning'],
                  ['by the time she was a teenager,', 'a later stage'],
                  ['up to that point,', 'everything before a marker'],
                  ['today,', 'the present, closing the story']
                ] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w2:bld:1', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Summarize the story',
                prompt: 'In three sentences, summarize the singer\'s story using time ' +
                        'expressions: start, a turning point, and today.',
                example: 'As a child, she sang in church. By her teenage years she felt ' +
                         'embarrassed by it. Today, she performs those same songs to huge ' +
                         'audiences.',
                mustUse: ['today'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w2:bld:2', unit: 4, waSec: 'Sua vez',
                title: '🗣️ Your own turning point',
                prompt: 'Describe one moment that changed the direction of something in your ' +
                        'own life — work, a hobby, anything.',
                example: 'Up to that point I had never worked with my hands. A broken pump on ' +
                         'my first week changed everything.',
                mustUse: ['point'] }
            ]
          },

          {
            id: 'practice-w2', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'wc1u4w2:wr:1',
                title: '📝 Complete:', main: 'The band ___ from an ordinary bar scene into ' +
                       'something nobody expected.',
                options: DF.shuffle([
                  { label: 'emerged', correct: true }, { label: 'convinced' },
                  { label: 'promoted' }, { label: 'inspired' }
                ]),
                expl: 'emerge = surgir, despontar de um contexto comum.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u4w2:ord:2',
                title: '🧩 Build the sentence:',
                answer: 'From an early age he wanted to perform in front of people',
                expl: 'From an early age + want + to + infinitivo.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w2+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 The full career, four time markers',
                prompt: 'Tell a story about anyone (real or invented) using From an early age, ' +
                        'In those days, Up to that point, and Today.',
                example: '(60 a 90 segundos)' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de trajetória', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Early in her career, she ___.', pool: 'lifeEventTalent',
                  focus: 'trajetória', ptHint: 'No início da carreira, ela ___.', n: 5 }
              ],
              backchain: [
                { text: 'Up to that point, she had never {talentVerb}.',
                  ptHint: 'Até aquele ponto, ela nunca tinha…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'Reading · Connections',
        goal: 'Read two artist profiles for the story behind the success, and plan a fundraiser.',
        comp: 'Você lê dois perfis de artistas e identifica o que realmente causou o sucesso ' +
              '(não a versão simplificada), e planeja um evento beneficente.',
        live: [
          'Reading: Hip-Hop Goes Home — Assane N\'Diaye in Senegal',
          'Reading: Grupo Fantasma Brings Home the Grammy Gold',
          'Filling in the timeline with information from the reading',
          'Connections: planning a fundraising benefit event',
          'Voting on which fundraising plan is most likely to succeed'
        ],
        bridge: 'Na aula você leu os dois perfis do livro e planejou um evento em dupla. Aqui ' +
                'os perfis são de artistas da Stage Door Talent, e o evento beneficente é o ' +
                'seu — com prós e contras de verdade.',
        nextLive: 'Semana 4 · Writing + Speaking — o perfil escrito e o contrato negociado.',
        ican: [
          'I can identify the real cause behind a success story, not the simple version.',
          'I can build a timeline from information spread across a text.',
          'I can paraphrase a quote without changing its meaning.',
          'I can plan an event and defend the choices behind it.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: The Garage Tape', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u4w3:read:text',
                title: '📖 A new profile, the same skill',
                textTitle: 'The Garage Tape',
                text:
                  'Deise Farias, 24, makes music in the same garage where she used to fix cars ' +
                  'with her father. Before Stage Door Talent found her, she had never played ' +
                  'outside her own street.\n\n' +
                  'It started almost by accident. A cousin filmed her singing while fixing a ' +
                  'motorcycle and posted it without asking. The video reached places her ' +
                  'father\'s workshop never had — a few thousand views became a few hundred ' +
                  'thousand within a month.\n\n' +
                  '"People think I planned it," she says. "I didn\'t plan anything. I was just ' +
                  'singing because the radio in the garage was broken, so I had to make my own ' +
                  'noise."\n\n' +
                  'A scout from Stage Door Talent found the video and drove six hours to meet ' +
                  'her in person — something she still finds hard to believe. "I thought it ' +
                  'was a joke. Who drives six hours for a mechanic who sings?"\n\n' +
                  'The label wanted to change almost everything: her name, her sound, even the ' +
                  'garage setting for her first video. She refused all three. "If people liked ' +
                  'it because it was real, making it fake defeats the whole point."\n\n' +
                  'Her first single, recorded in the same garage with the same broken radio in ' +
                  'the background, became the label\'s best-selling release of the year — not ' +
                  'because of a marketing plan, but despite the label wanting a different one.',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u4w3:q:1',
                title: '📖 What actually started her career?',
                main: '',
                options: DF.shuffle([
                  { label: 'A video her cousin posted without asking', correct: true },
                  { label: 'A planned marketing campaign' },
                  { label: 'An audition she applied for' },
                  { label: 'A contract she signed first, then recorded later' }
                ]),
                expl: '"A cousin filmed her... and posted it without asking." Nada foi ' +
                      'planejado.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u4w3:q:2',
                title: '📖 What did she refuse to change?',
                main: '',
                options: DF.shuffle([
                  { label: 'Her name, her sound, and the garage setting', correct: true },
                  { label: 'Only the song lyrics' },
                  { label: 'Nothing — she accepted every change' },
                  { label: 'The length of the contract' }
                ]),
                expl: '"She refused all three": name, sound, garage setting.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u4w3:q:3',
                title: '📖 Why did her first single succeed, according to the text?',
                main: '',
                options: DF.shuffle([
                  { label: 'Despite the label wanting a different approach', correct: true },
                  { label: 'Because of the label\'s original marketing plan' },
                  { label: 'Because she changed her name' },
                  { label: 'The text does not explain why' }
                ]),
                expl: '"not because of a marketing plan, but despite the label wanting a ' +
                      'different one" — o texto contradiz a versão fácil.' },
              { ui: 'type', cat: 'fun', srsId: 'wc1u4w3:num:1',
                title: '📖 Her cousin\'s video reached how many views within a month?',
                sub: 'Só o número, sem "thousand" — escreva por extenso o valor final.',
                answers: ['a few hundred thousand', 'hundred thousand'],
                expl: '"a few thousand views became a few hundred thousand within a month".' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u4w3:word:1',
                title: '🔗 Find the word in the text that means...',
                pairs: [
                  ['not planned, happening by chance', 'accident'],
                  ['a person who watches or discovers talent', 'scout'],
                  ['to say no to something offered', 'refuse'],
                  ['to ruin the purpose of something', 'defeat the point'],
                  ['a single song released on its own', 'single']
                ] }
            ]
          },

          {
            id: 'timeline', icon: '📅', name: 'Build the timeline', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'gra', srsId: 'wc1u4w3:ord:1',
                title: '🧩 Put Deise\'s story in order:',
                answer: 'Her cousin filmed her singing in the garage the video became popular ' +
                        'a scout drove six hours to meet her she refused to change her sound ' +
                        'her first single became the best selling release',
                expl: 'gatilho → resultado → decisão → consequência.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w3:tl:1', unit: 4, waSec: 'Timeline',
                title: '📅 Retell it with time expressions',
                prompt: 'Retell Deise\'s story in three sentences using From an early age, ' +
                        'Up to that point, and Today.',
                example: 'From an early age she sang while fixing cars. Up to that point ' +
                         'nobody outside her street had heard her. Today her music is the ' +
                         'label\'s best-selling release.',
                mustUse: ['today'] }
            ]
          },

          {
            id: 'fundraiser', icon: '🎉', name: 'Plan a benefit event', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u4w3:read:fund',
                title: '🎉 The five decisions of any fundraiser',
                textTitle: 'Planning a benefit',
                readAloud: false,
                text:
                  'EVENT TYPE — a concert, a screening, a dinner, a raffle.\n' +
                  'ENTERTAINMENT — who performs, and what they need in return.\n' +
                  'VENUE — where, and who arranges access.\n' +
                  'PUBLICITY — how people find out about it.\n' +
                  'GOALS — how many people, how much money.\n\n' +
                  'A frase mais util aqui e a que ja voce treinou: "We are going to arrange ' +
                  'for a local band to play." — arrange FOR + objeto + to, exatamente o padrao ' +
                  'da semana 1, agora aplicado a um evento real.',
                nextLabel: 'Got it ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w3:fnd:1', unit: 4, waSec: 'Fundraiser',
                title: '🎉 Design your benefit — event type and cause',
                prompt: 'Choose a cause and an event type. Say what you are going to have.',
                example: 'We are going to have a benefit concert for the local animal shelter.',
                mustUse: ['going to'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w3:fnd:2', unit: 4, waSec: 'Fundraiser',
                title: '🎉 Arrange the entertainment',
                prompt: 'Say what you will arrange, using arrange for + object + to.',
                example: 'We will arrange for two local bands to play for free.',
                mustUse: ['arrange for'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w3:fnd:3', unit: 4, waSec: 'Fundraiser',
                title: '🎉 Set a goal and defend it',
                prompt: 'Say how much you expect to raise, and why that number is realistic.',
                example: 'We expect to raise about two thousand reais, because last year\'s ' +
                         'similar event raised close to that with half the publicity.',
                mustUse: ['expect'] }
            ]
          },

          {
            id: 'practice-w3', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w3:wr:1',
                title: '📝 Complete:', main: 'We are going to arrange ___ a local charity to ' +
                       'receive the money.',
                options: DF.shuffle([
                  { label: 'for', correct: true }, { label: 'to' },
                  { label: '(nothing)' }, { label: 'with' }
                ]),
                expl: 'arrange for + objeto.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u4w3:wr:2',
                title: '📝 Complete:', main: 'Half the ticket money goes straight to the ___.',
                options: DF.shuffle([
                  { label: 'charity', correct: true }, { label: 'audience' },
                  { label: 'appearance' }, { label: 'logo' }
                ]),
                expl: 'charity = a instituição beneficiada.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w3+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Defend the label\'s side',
                prompt: 'You work for Stage Door Talent. Argue why Deise SHOULD have changed ' +
                        'her sound, without dismissing her reasons.',
                example: 'You are right that it felt real. What I would say is a bigger ' +
                         'audience might never have found that realness in the first place.',
                mustUse: ['right'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de perfil', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'From an early age, she ___.', pool: 'lifeEventTalent',
                  focus: 'perfil', ptHint: 'Desde cedo, ela ___.', n: 5 }
              ],
              backchain: [
                { text: 'We are going to arrange for a local band to play.',
                  ptHint: 'Vamos arranjar para uma banda local tocar.' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Writing · Speaking · Outcomes',
        goal: 'Write a paraphrased profile, and negotiate a contract out loud.',
        comp: 'Você escreve um perfil parafraseando informações de fontes, e negocia um ' +
              'contrato listando prós e contras de verdade.',
        live: [
          'Writing: a profile, using time expressions and paraphrasing',
          'The Writing Strategy: paraphrase in four steps',
          'Speaking: role-playing the GRC contract negotiation',
          'The Speaking Strategy: giving pros (on the one hand) and cons (on the other hand)',
          'Expanding Your Fluency: the mingling activity + Check What You Know'
        ],
        bridge: 'Na aula você escreveu o perfil e negociou o contrato com um colega. Aqui a ' +
                'paráfrase vira exercício de decisão frase a frase, e a negociação ganha um ' +
                'contrato novo pra defender.',
        nextLive: 'Unidade 5 · No Need to Panic — orações adverbiais e como manter a calma sob ' +
                  'pressão.',
        ican: [
          'I can write a profile that orders events with time expressions.',
          'I can paraphrase a quote without changing its meaning or copying it.',
          'I can present the pros and cons of a contract using the right phrases.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'paraphrase', icon: '🔁', name: 'Paraphrasing in four steps', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u4w4:read:para',
                title: '🔁 Say it again, without stealing it',
                textTitle: 'Paraphrasing',
                readAloud: false,
                text:
                  '1. READ the information and make sure you understand it.\n' +
                  '2. REWRITE the main idea using your own words.\n' +
                  '3. REREAD the original to check you did not change the meaning.\n' +
                  '4. QUOTE any phrase you take directly, in quotation marks.\n\n' +
                  'ORIGINAL: "We were completely blown away. Even when we got nominated we ' +
                  'were pretty surprised."\n' +
                  'PARAPHRASE: The band said they were shocked by the nomination, and even ' +
                  'more shocked to win.\n\n' +
                  'A ARMADILHA: trocar uma ou duas palavras nao e parafrasear, e plagio ' +
                  'disfarcado. "We were totally blown away" viraria "We were completely blown ' +
                  'away" — isso NAO conta. A frase inteira precisa ser reconstruida com a sua ' +
                  'propria estrutura.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u4w4:pf:1',
                title: '🔁 Which one is an actual paraphrase?',
                main: 'Original: "It has a universal feel."',
                options: DF.shuffle([
                  { label: 'She says the music connects with people everywhere, regardless ' +
                           'of language.', correct: true },
                  { label: 'It has a global feel.' },
                  { label: 'It has a universal feeling.' },
                  { label: 'It has a worldwide feel.' }
                ]),
                expl: 'As outras três só trocam uma palavra — isso não é paráfrase.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u4w4:pf:2',
                title: '🔁 What should happen to a phrase you copy word for word?',
                main: '',
                options: DF.shuffle([
                  { label: 'It goes in quotation marks', correct: true },
                  { label: 'It gets deleted' },
                  { label: 'It stays exactly as it is, no marks needed' },
                  { label: 'It becomes the title' }
                ]),
                expl: 'Passo 4: cite entre aspas o que for cópia direta.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:pf:3', unit: 4, waSec: 'Paraphrase',
                title: '🔁 Paraphrase this quote',
                prompt: 'Paraphrase: "The best way to listen to us is to see us live." ' +
                        'Use your own structure, not just synonyms.',
                example: 'The band believes recorded music does not fully capture what they do ' +
                         '— you have to see them perform to understand it.',
                mustUse: ['believes'] }
            ]
          },

          {
            id: 'writing', icon: '✍️', name: 'Write the profile', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:wr:1', unit: 4, waSec: 'Writing',
                title: '✍️ Sentence 1 — the beginning',
                prompt: 'Choose a performer (real or invented). One sentence: how it started, ' +
                        'using From an early age or As a child.',
                example: 'From an early age, she sang along to the radio while she worked.',
                mustUse: ['from'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:wr:2', unit: 4, waSec: 'Writing',
                title: '✍️ Sentence 2 — the turning point',
                prompt: 'One sentence: the moment that changed direction. Use Up to that point.',
                example: 'Up to that point, nobody outside her street had heard her sing.',
                mustUse: ['up to that point'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:wr:3', unit: 4, waSec: 'Writing',
                title: '✍️ Sentence 3 — a paraphrased quote',
                prompt: 'Include one paraphrased idea from an imaginary interview — not a ' +
                        'direct quote.',
                example: 'She has said that success without the original sound would feel ' +
                         'meaningless to her.',
                mustUse: ['has said'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:wr:4', unit: 4, waSec: 'Writing',
                title: '✍️ Sentence 4 — the present',
                prompt: 'Close with where the person is now. Use Today.',
                example: 'Today, she still records in the same garage, and she has never ' +
                         'changed her sound.',
                mustUse: ['today'],
                expl: 'Mande as quatro frases juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'negotiate', icon: '🤝', name: 'Negotiate the contract', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u4w4:read:strat',
                title: '🤝 Giving pros and cons',
                textTitle: 'The pros-and-cons phrases',
                readAloud: false,
                text:
                  'PROS\n' +
                  'On the one hand, … · One major benefit of signing is … · ' +
                  'The best part is …\n\n' +
                  'CONS\n' +
                  'On the other hand, … · One big drawback of signing is … · ' +
                  'The worst part is …\n\n' +
                  'BOTH IN ONE BREATH\n' +
                  'On the one hand, the exposure would be huge. On the other hand, we would ' +
                  'lose control of the sound.\n\n' +
                  'A ARMADILHA: dizer so os pros ou so os contras nao e negociar, e vender ou ' +
                  'reclamar. Uma negociacao de verdade sempre reconhece os dois lados antes de ' +
                  'decidir — exatamente como o "However" fez na unidade 3.',
                nextLabel: 'Got it ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u4w4:dlg:1',
                title: '🤝 A contract gets negotiated',
                sub: 'Repare como os dois lados aparecem.',
                lines: [
                  { who: 'Scout', en: 'We are offering a five-year contract and full production ' +
                                      'support.' },
                  { who: 'Deise', en: 'On the one hand, that support is exactly what I need. On ' +
                                      'the other hand, five years is a long time to give up ' +
                                      'control.' },
                  { who: 'Scout', en: 'We could arrange for a three-year contract instead, with ' +
                                      'a renewal option.' },
                  { who: 'Deise', en: 'That changes things. The best part of that is I keep more ' +
                                      'freedom sooner.' }
                ],
                question: 'How does the negotiation move forward?',
                options: DF.shuffle([
                  { label: 'She names her concern, and they adjust the offer', correct: true },
                  { label: 'She refuses everything without explanation' },
                  { label: 'She accepts the first offer immediately' },
                  { label: 'They end the conversation with no agreement' }
                ]),
                expl: 'Nomear o problema específico ("five years is a long time") é o que ' +
                      'permite a outra parte ajustar.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:neg:1', unit: 4, waSec: 'Negotiate',
                title: '🤝 State your pro and con',
                prompt: 'Imagine you are the artist. State one pro and one con of a five-year ' +
                        'contract, using On the one hand / On the other hand.',
                example: 'On the one hand, the exposure would be enormous. On the other hand, ' +
                         'I would lose the right to release music on my own.',
                mustUse: ['on the one hand'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:neg:2', unit: 4, waSec: 'Negotiate',
                title: '🤝 Propose a change',
                prompt: 'Propose one change to the contract, using arrange for.',
                example: 'Could we arrange for the contract to be three years instead of five?',
                mustUse: ['arrange for'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:neg:3', unit: 4, waSec: 'Negotiate',
                title: '🤝 The full negotiation — one take',
                prompt: 'Role-play both sides alone: the scout offers, the artist gives one ' +
                        'pro and one con, and proposes a change.',
                example: '(60 a 90 segundos)',
                mustUse: ['on the other hand'],
                expl: 'Este é o outcome 2 e o entregável falado. Mande o áudio pro professor.' }
            ]
          },

          {
            id: 'mingling', icon: '🎪', name: 'The party mingle', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u4w4:rep:1', unit: 4, waSec: 'Mingle',
                title: '🎤 A conversation starter about music:',
                target: 'I saw the first show, but not the last one. How was it?',
                ptHint: 'Vi o primeiro show, mas não o último. Como foi?' },
              { ui: 'repeat', cat: 'fun', srsId: 'wc1u4w4:rep:2', unit: 4, waSec: 'Mingle',
                title: '🎤 Commenting on something:',
                target: 'I love the sound of that new single. Where did you hear it?',
                ptHint: 'Adoro o som daquele novo single. Onde você ouviu?' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:ming:1', unit: 4, waSec: 'Mingle',
                title: '🎪 Start a conversation at the party',
                prompt: 'You are at a party full of performers. Start a conversation with one ' +
                        'of the strategies: shared experience, recent news, or a comment.',
                example: 'That was a great performance today. What exactly do you play?',
                mustUse: ['great'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4:ming:2', unit: 4, waSec: 'Mingle',
                title: '🎪 End it politely',
                prompt: 'End the conversation politely, using a phrase you could reuse anywhere.',
                example: "It's been nice talking to you. Good luck with the tour.",
                mustUse: ['nice talking'] }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u4w4:chk:1', unit: 4, idx: 0,
                statement: 'I can use infinitives to complement certain types of verbs.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u4w4:chk:2', unit: 4, idx: 1,
                statement: 'I can state the pros and cons of making a decision.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u4w4:chk:3', unit: 4, idx: 2,
                statement: 'I can use time expressions to order life events.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u4w4:chk:4', unit: 4, idx: 3,
                statement: 'I can paraphrase information from other sources.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w4:pt:1',
                title: '📝 Complete:', main: 'His agent convinced him ___ the deal.',
                options: DF.shuffle([
                  { label: 'to accept', correct: true }, { label: 'accept' },
                  { label: 'accepting' }, { label: 'for accept' }
                ]),
                expl: 'convince = grupo persuade → verbo + objeto + to.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w4:pt:2',
                title: '📝 Complete:', main: 'They arranged ___ him to audition on Friday.',
                options: DF.shuffle([
                  { label: 'for', correct: true }, { label: 'to' },
                  { label: '(nothing)' }, { label: 'that' }
                ]),
                expl: 'arrange precisa de for antes do objeto.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u4w4:pt:3',
                title: '📝 Which is WRONG?',
                main: '',
                options: DF.shuffle([
                  { label: 'They made him to sign.', correct: true },
                  { label: 'They made him sign.' },
                  { label: 'They convinced him to sign.' },
                  { label: 'They arranged for him to sign.' }
                ]),
                expl: 'make nunca leva to.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u4w4:pt:4',
                title: '📝 Which phrase gives a CON?',
                main: '',
                options: DF.shuffle([
                  { label: 'On the other hand, we would lose creative control.', correct: true },
                  { label: 'One major benefit of signing is the exposure.' },
                  { label: 'The best part is the salary.' },
                  { label: 'On the one hand, the tour would be huge.' }
                ]),
                expl: 'On the other hand introduz o lado contrário.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u4w4:pt:5',
                title: '📝 Complete:', main: 'A random video ___ from a small town to a global ' +
                       'audience within weeks.',
                options: DF.shuffle([
                  { label: 'emerged', correct: true }, { label: 'convinced' },
                  { label: 'arranged' }, { label: 'realized' }
                ]),
                expl: 'emerge = surgir, despontar.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u4w4:pt:6',
                title: '🔗 Match the pattern to its verb group:',
                pairs: [
                  ['convince him to sign', 'persuade-type'],
                  ['want (him) to leave', 'want-type, objeto opcional'],
                  ['arrange for her to meet', 'arrange-type, precisa de FOR'],
                  ['made him practise', 'let/make/have, sem TO']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u4w4:pt:7',
                title: '🧩 Build the sentence:',
                answer: 'From an early age she was convinced to perform in public',
                expl: 'From an early age + convince (na passiva) + to + infinitivo.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full negotiation, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4+:b1', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Sixty seconds, both sides, no script',
                prompt: 'Play both roles of the negotiation yourself, back to back, no notes.',
                example: '(60 a 90 segundos)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u4w4+:b2', unit: 4, waSec: 'Praticar mais',
                title: '🔥 Paraphrase under pressure',
                prompt: 'Someone tells you: "I never expected any of this, honestly." ' +
                        'Paraphrase it out loud immediately.',
                example: 'They say none of it was something they had planned or anticipated.',
                mustUse: ['they say'] }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de negociação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'On the one hand, ___ would be great.', pool: 'contractTerm',
                  focus: 'pros', ptHint: 'Por um lado, … seria ótimo.', n: 5 },
                { frame: 'We could arrange for ___.', pool: 'contractTerm',
                  focus: 'arrange for', ptHint: 'Poderíamos arranjar…', n: 5 }
              ],
              backchain: [
                { text: 'We could arrange for {contractTerm}.',
                  ptHint: 'Poderíamos arranjar…' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
