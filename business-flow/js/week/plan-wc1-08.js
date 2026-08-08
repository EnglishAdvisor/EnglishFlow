/* ENGLISH FLOW — week/plan-wc1-08.js
   WORLD CLASS ONE · UNIT 8 "Think Twice" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: Micah Green suspenso por postar online, o
                    Titanic/SS Morro Castle/Costa Concordia, o vídeo
                    "Protecting Reputations Online".
     APP          → THE AFTER REPORT, equipe fictícia que investiga
                    incidentes — online e do mundo real — e escreve
                    relatórios usando modais no passado pra avaliar o que
                    aconteceu sem apontar culpa antes de entender os fatos.
                    100% autoral (item 20).

   Por que este cenário: a unidade cobra modais no passado (possibilidade,
   descrença, conclusão lógica, arrependimento), comparar ações a
   consequências, reconhecer dificuldade e expressar solidariedade, e
   reagir a uma notícia com opinião própria. Uma equipe que escreve
   relatórios de incidente hospeda os quatro outcomes sem tocar no Titanic
   nem no caso do Micah Green do livro.

     outcome 1 (past modals)              → avaliar o que pode ter acontecido
     outcome 2 (actions to consequences)  → o relatório de causa e efeito
     outcome 3 (hardship + sympathy)      → a carta pra quem foi afetado
     outcome 4 (respond to a news story)  → a opinião sobre o caso real

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026).

   ═══ ESTRUTURA ═══
     Semana 1 · Overview + Vocabulary + Grammar (Past Modals)
     Semana 2 · Listening + Connections + Pronunciation (should've reduction)
     Semana 3 · Reading (duas) + Video
     Semana 4 · Writing + Speaking + Expanding Your Fluency + Outcomes

   O apêndice de gramática do livro nesta unidade (Units 27-32: will/might/
   can/could/must/should) é referência geral de modais, não específica de
   Think Twice — não foi incorporado aqui porque o foco da unidade é modais
   NO PASSADO (could have/might have/must have/should have), que é onde a
   tabela principal da página 87 realmente aponta. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.incidentAct = ['posted something without asking', 'shared a private photo',
                                 'broke a safety rule', 'ignored the warning sign',
                                 'left the door unlocked', 'texted during the meeting'];
    DF.WGEN.POOLS.pastModalCause = ['forgot the rule', 'was in a hurry', 'did not think it ' +
                                    'through', 'was trying to help', 'panicked'];
    DF.WGEN.POOLS.consequence = ['got suspended for a week', 'had to apologize publicly',
                                 'lost access to the account', 'was asked to leave',
                                 'had to pay a fine'];
  }

  const WORDS = [
    { en: 'consequences', pt: 'consequências',
      def: 'the results or effects of an action',
      ex: 'She understood the consequences only after the post had already spread.' },
    { en: 'criticize', pt: 'criticar',
      def: 'to express disapproval by saying what is wrong with something',
      ex: 'He criticized the policy publicly, which is exactly what got him suspended.' },
    { en: 'discipline', pt: 'disciplina',
      def: 'self-control, or action taken to correct inappropriate behavior',
      ex: 'The report recommends discipline, not punishment — there is a difference.' },
    { en: 'disruptive', pt: 'perturbador',
      def: 'causing trouble and stopping something from continuing as usual',
      ex: 'The post was disruptive enough that classes were affected for two days.' },
    { en: 'get away with', pt: 'sair impune / se safar',
      def: 'to do something wrong without being caught or punished',
      ex: 'He thought he could get away with it because the account was anonymous.' },
    { en: 'get into trouble', pt: 'se meter em confusão',
      def: 'to be in a position where you will be punished for something',
      ex: 'She got into trouble for something she thought was harmless.' },
    { en: 'punish', pt: 'punir',
      def: 'to take action against someone for inappropriate behavior',
      ex: 'The board decided not to punish him, only to require an apology.' },
    { en: 'regulation', pt: 'regulamento',
      def: 'an official rule made by a government or institution',
      ex: 'There was no clear regulation covering what he did, which made the case harder.' },
    { en: 'respectful', pt: 'respeitoso',
      def: 'polite and well-behaved toward someone in authority',
      ex: 'The letter was respectful even while it disagreed completely with the decision.' },
    { en: 'restriction', pt: 'restrição',
      def: 'a limit on something',
      ex: 'The new restriction bans phones during any safety briefing.' }
  ];

  const EXTRA_WORDS = [
    { en: 'anonymous ·+', pt: 'anônimo',
      def: 'made or done by a person whose name is not known',
      ex: 'The report was posted anonymously, which made it harder to verify.' },
    { en: 'big deal ·+', pt: 'grande coisa / problemão',
      def: 'something important',
      ex: 'To him it wasn\'t a big deal. To everyone affected, it clearly was.' },
    { en: 'get suspended ·+', pt: 'ser suspenso',
      def: 'temporarily not allowed to attend because you did something wrong',
      ex: 'He got suspended for five days over a single post.' },
    { en: 'invasion of privacy ·+', pt: 'invasão de privacidade',
      def: 'when your private life is disturbed in an unpleasant way',
      ex: 'She called it an invasion of privacy, and the committee agreed.' },
    { en: 'private ·+', pt: 'privado',
      def: 'for one person or group only, not for everyone',
      ex: 'He assumed the message was private. It was not.' },
    { en: 'responsibility ·+', pt: 'responsabilidade',
      def: 'something that is your job or duty to deal with',
      ex: 'Taking responsibility for what you post is the whole point of the report.' },
    { en: 'surveillance ·+', pt: 'vigilância',
      def: 'the careful watching of someone, especially by authorities',
      ex: 'The building has more surveillance than most people realize.' },
    { en: 'sympathetic ·+', pt: 'compreensivo / solidário',
      def: 'showing that you understand and care about someone\'s suffering',
      ex: 'The report was sympathetic to the family without excusing what happened.' }
  ];

  DF.PLAN.wc1[8] = {
    unit: 8,
    title: 'Think Twice',
    subtitle: 'Seu oitavo mês',
    icon: '🔎',

    mindmap: {
      center: 'Think Twice',
      sub: 'Avaliar o passado, comparar ações a consequências, e reagir com opinião própria',
      branches: [
        {
          icon: '⚠️', name: 'Consequences vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>discipline</b> não é sinônimo de "punishment" — é sobre correção e ' +
                'autocontrole, não castigo.'
        },
        {
          icon: '❌', name: 'couldn\'t have — disbelief/impossibility',
          leaves: [
            { en: "She couldn't have been texting. She lost her phone recently.", pt: 'não é possível que…' },
            { en: "He couldn't have known about the rule — nobody told him.", pt: 'descrença justificada' }
          ],
          note: '<b>couldn\'t have + particípio</b> = "não é possível que isso tenha ' +
                'acontecido", baseado em algo que você SABE ser verdade.'
        },
        {
          icon: '🤔', name: 'might have / may have — possibility',
          leaves: [
            { en: 'He might have borrowed a friend\'s phone to do it.', pt: 'é possível que…' },
            { en: 'She may have forgotten the rule entirely.', pt: 'mesma ideia, mais formal' }
          ],
          note: '<b>might have</b> e <b>may have</b> são quase intercambiáveis aqui — ambos ' +
                'expressam possibilidade sem certeza, olhando pra trás.'
        },
        {
          icon: '🧩', name: 'must have — logical conclusion',
          leaves: [
            { en: 'It must have been something important. She never texts in class.', pt: 'conclusão lógica forte' },
            { en: 'Someone must have told the principal.', pt: 'a única explicação que faz sentido' }
          ],
          note: '<b>must have</b> é a conclusão mais FORTE das quatro — você está quase ' +
                'certo, baseado em evidência, não só possibilidade.'
        },
        {
          icon: '😔', name: 'should have / shouldn\'t have — regret',
          leaves: [
            { en: 'She should have waited until after class to send a text.', pt: 'arrependimento — o que era certo fazer' },
            { en: "He shouldn't have disrupted the class.", pt: 'arrependimento — o que era errado fazer' }
          ],
          note: '<b>Armadilha do brasileiro:</b> na fala, "should have" vira <b>should\'ve</b> ' +
                '(soa como "shudda"), e "shouldn\'t have" vira <b>shouldn\'t\'ve</b>. Escrever ' +
                'por extenso é certo; na fala, a forma reduzida é o padrão real.'
        },
        {
          icon: '💬', name: 'Comparing actions to consequences',
          leaves: [
            { en: 'As a result of the fire, new regulations were made.', pt: 'ação → consequência' },
            { en: 'What could have prevented this from happening?', pt: 'pergunta retrospectiva' },
            { en: 'What should the captain have done differently?', pt: 'avaliação de decisão' }
          ],
          note: 'Comparar ação e consequência não é buscar culpado — é entender a CADEIA: ' +
                'o que aconteceu, o que poderia ter mudado o resultado.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🔎',
        title: 'Overview · Vocabulary · Grammar',
        goal: 'Use past modals to consider possibilities, express disbelief and regret, and draw conclusions.',
        comp: 'Você avalia uma situação passada escolhendo entre couldn\'t have, might have, ' +
              'must have e should have — cada um comunicando uma certeza diferente.',
        live: [
          'The unit opener: the blurred crowd photo and warm-up questions',
          'Vocabulary: rules at a movie theater',
          'Grammar: Past Modals — disbelief, possibility, logical conclusion, regret',
          'Reading about Stella texting in class and discussing who said what',
          'Pair work: what happened in five situations, using past modals'
        ],
        bridge: 'Na aula você viu a tabela dos quatro modais e discutiu o caso da Stella. Aqui ' +
                'a escolha entre eles vira decisão sob pressão, em casos novos do After ' +
                'Report, e você ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Connections — o caso do Micah Green e o escândalo do ' +
                  'ingresso do show.',
        ican: [
          'I can use couldn\'t have to express disbelief about the past.',
          'I can use might have and must have to express possibility and logical conclusion.',
          'I can use should have and shouldn\'t have to express regret.',
          'I can use the unit vocabulary to describe rules and consequences.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u8w1:cards:core',
                title: '📇 Ten words about rules and consequences',
                sub: 'Exemplos do After Report — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u8w1:cards:extra',
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
              { ui: 'choice', cat: 'voc', srsId: 'wc1u8w1:wf:1',
                title: '🔤 Which word fits?',
                main: 'He thought he could ___ it because the account was anonymous.',
                options: DF.shuffle([
                  { label: 'get away with', correct: true }, { label: 'get into trouble' },
                  { label: 'discipline' }, { label: 'criticize' }
                ]),
                expl: 'get away with = fazer algo errado sem ser pego.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u8w1:wf:2',
                title: '🔤 Which word fits?',
                main: 'The post was ___ enough that classes were affected for two days.',
                options: DF.shuffle([
                  { label: 'disruptive', correct: true }, { label: 'respectful' },
                  { label: 'anonymous' }, { label: 'private' }
                ]),
                expl: 'disruptive = que causa transtorno, interrompe o normal.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u8w1:wf:3',
                title: '🔤 Complete:',
                main: 'She called it an ___ of privacy.',
                options: DF.shuffle([
                  { label: 'invasion', correct: true }, { label: 'restriction' },
                  { label: 'regulation' }, { label: 'consequence' }
                ]),
                expl: 'invasion of privacy = expressão fixa.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u8w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['discipline', 'self-control or correction'],
                  ['regulation', 'an official rule'],
                  ['sympathetic', 'understanding and caring'],
                  ['surveillance', 'careful watching by authorities'],
                  ['responsibility', 'your job or duty']
                ] }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Past modals at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u8w1:read:glance',
                title: '🔍 Four modals, four levels of certainty',
                textTitle: 'Past modals',
                readAloud: false,
                text:
                  'DISBELIEF / IMPOSSIBILITY — you are SURE it did not happen\n' +
                  "She couldn't have been texting. She lost her phone recently.\n\n" +
                  'POSSIBILITY — you are NOT sure, just guessing\n' +
                  "He might have borrowed a friend's phone to do it.\n\n" +
                  'LOGICAL CONCLUSION — you are ALMOST sure, based on evidence\n' +
                  'It must have been something important. She never texts in class.\n\n' +
                  'REGRET (over an action that did or did not happen)\n' +
                  'She should have waited until after class to send a text. (she didn\'t)\n' +
                  "He shouldn't have disrupted the class. (he did)\n\n" +
                  'ALL FOUR USE: modal + HAVE + past participle.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: escrever "should of" em vez de "should have" — ' +
                  'e um erro comum ate entre falantes nativos, porque na fala "should have" ' +
                  'soa exatamente como "should of". Na escrita, e sempre HAVE.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w1:pm:1',
                title: '🎯 Which past modal fits?',
                main: 'Jen ___ texting. She lost her phone recently.',
                options: DF.shuffle([
                  { label: "couldn't have been", correct: true }, { label: 'might have been' },
                  { label: 'should have been' }, { label: 'must have been' }
                ]),
                expl: 'Você TEM CERTEZA que é impossível (ela perdeu o celular) → couldn\'t have.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w1:pm:2',
                title: '🎯 Which past modal fits?',
                main: 'Tom ___ borrowed a friend\'s phone to do it.',
                options: DF.shuffle([
                  { label: 'might have', correct: true }, { label: "couldn't have" },
                  { label: 'must have', correct: false }, { label: 'shouldn\'t have' }
                ]),
                expl: 'É só uma possibilidade, sem certeza → might have.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w1:pm:3',
                title: '🎯 Which past modal fits?',
                main: 'Amy heard she was texting her mother. It ___ been something important.',
                options: DF.shuffle([
                  { label: 'must have', correct: true }, { label: 'might have' },
                  { label: "couldn't have" }, { label: 'should have' }
                ]),
                expl: 'Conclusão lógica forte baseada em evidência → must have.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w1:pm:4',
                title: '🎯 Which past modal fits?',
                main: 'Ed even so, she ___ waited until after class to send a text.',
                options: DF.shuffle([
                  { label: 'should have', correct: true }, { label: 'must have' },
                  { label: "couldn't have" }, { label: 'might have' }
                ]),
                expl: 'Arrependimento sobre o que ela deveria ter feito → should have.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w1:pm:5',
                title: '🎯 Which is the correct written form?',
                main: '',
                options: DF.shuffle([
                  { label: 'He should have told me.', correct: true },
                  { label: 'He should of told me.' },
                  { label: 'He should had told me.' },
                  { label: 'He should have tell me.' }
                ]),
                expl: 'A forma escrita correta é sempre "should HAVE", nunca "should of".' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u8w1:pm:6',
                title: '🧩 Build the sentence:',
                answer: 'He must have forgotten the rule because nobody warned him',
                expl: 'must have (conclusão lógica) + because + razão.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u8w1:tf:1',
                title: '🔀 Past modal transformation',
                rounds: [
                  { base: 'He might have forgotten the rule.', cmd: 'Question',
                    answers: ['Might he have forgotten the rule?',
                              'Could he have forgotten the rule?'] },
                  { base: 'She should have asked first.', cmd: 'Negative',
                    answers: ["She shouldn't have asked first.",
                              'She should not have asked first.'] },
                  { base: 'It must have been a mistake.', cmd: 'Negative',
                    answers: ["It can't have been a mistake.",
                              "It couldn't have been a mistake."] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u8w1:drl:might', unit: 8, waSec: 'Drill · possibilidade',
                title: '🔁 Drill 1 — the reason changes', focus: 'might have',
                frame: 'He might have ___ it.', ptHint: 'Ele pode ter ___ isso.',
                slots: ['posted', 'shared', 'deleted', 'forgotten', 'reported'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u8w1:drl:should', unit: 8, waSec: 'Drill · arrependimento',
                title: '🔁 Drill 2 — the action changes', focus: 'should have',
                frame: 'She shouldn\'t have ___.', ptHint: 'Ela não deveria ter ___.',
                slots: ['posted something without asking', 'shared a private photo',
                        'broken a safety rule', 'ignored the warning sign',
                        'texted during the meeting'] },
              { ui: 'drill', cat: 'voc', srsId: 'wc1u8w1:drl:conseq', unit: 8, waSec: 'Drill · consequência',
                title: '🔁 Drill 3 — the consequence changes', focus: 'vocabulário',
                frame: 'As a result, she ___.', ptHint: 'Como resultado, ela ___.',
                slots: ['got suspended for a week', 'had to apologize publicly',
                        'lost access to the account', 'was asked to leave',
                        'had to pay a fine'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u8w1:bc:1', unit: 8, waSec: 'Backchain',
                title: '🧱 The regret sentence',
                ptHint: 'Ela não deveria ter perturbado a aula daquela forma.',
                chain: ['that way', 'disrupted the class that way',
                        "She shouldn't have disrupted the class that way."] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u8w1:bc:2', unit: 8, waSec: 'Backchain',
                title: '🧱 The conclusion sentence',
                ptHint: 'Deve ter sido algo importante, porque ela nunca manda mensagem em aula.',
                chain: ['in class', 'she never texts in class',
                        'important, because she never texts in class',
                        'It must have been something important, because she never texts in class.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u8w1:dlg:1',
                title: '🎧 The After Report team discusses a case',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'He couldn\'t have known the post was public — the ' +
                                      'setting was hidden by default.' },
                  { who: 'Elias', en: 'True, but he must have seen the warning icon at least ' +
                                      'once.' },
                  { who: 'Nadia', en: 'Maybe. He might have ignored it without reading it.' },
                  { who: 'Elias', en: 'Either way, he should have double-checked before posting ' +
                                      'anything about a coworker.' }
                ],
                question: 'What do Nadia and Elias agree on by the end?',
                options: DF.shuffle([
                  { label: 'He should have double-checked before posting', correct: true },
                  { label: 'He definitely knew the post was public' },
                  { label: 'The setting was never hidden' },
                  { label: 'No mistake was made at all' }
                ]),
                expl: '"he should have double-checked" — o consenso final, mesmo com dúvidas ' +
                      'sobre os detalhes.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u8w1:dlg:2',
                title: '🎧 A correction between colleagues',
                sub: 'Repare o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'He should of told someone immediately.' },
                  { who: 'Tomás', en: '"Should have," not "should of" — it just sounds the same.' },
                  { who: 'Priya', en: 'Right, should have told someone immediately.' },
                  { who: 'Tomás', en: 'Exactly. Easy mistake, even for native speakers.' }
                ],
                question: 'What is the correction about?',
                options: DF.shuffle([
                  { label: '"Should of" is a common mishearing of "should have"', correct: true },
                  { label: 'The verb tense was wrong' },
                  { label: 'The sentence needed a question mark' },
                  { label: '"Immediately" was in the wrong place' }
                ]),
                expl: 'should have soa como "should of" na fala, mas por escrito é sempre have.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w1:bld:1', unit: 8, waSec: 'Sua vez',
                title: '🗣️ Something you regret',
                prompt: 'Say one thing you should have done differently recently.',
                example: 'I should have backed up my files before the computer crashed.',
                mustUse: ['should have'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w1:bld:2', unit: 8, waSec: 'Sua vez',
                title: '🗣️ A guess about someone else',
                prompt: 'Think of something that happened and someone\'s reason for it. Guess ' +
                        'the reason using might have.',
                example: 'My coworker was late today. She might have missed the bus.',
                mustUse: ['might have'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w1:bld:3', unit: 8, waSec: 'Sua vez',
                title: '🗣️ A logical conclusion',
                prompt: 'Describe evidence you saw and the conclusion you drew, using must have.',
                example: 'The lights were on and the door was open. Someone must have left in ' +
                         'a hurry.',
                mustUse: ['must have'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w1+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Four past modals in sixty seconds',
                prompt: 'Talk for one minute about a real or invented situation, using all ' +
                        'four past modals.',
                example: '(1 minuto)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w1+:b2', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Fix it out loud',
                prompt: 'This is wrong: "He should of called." Say it correctly and explain ' +
                        'why in English.',
                example: 'He should have called — "should of" is just how "should have" ' +
                         'sounds, not the correct written form.',
                mustUse: ['should have'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de modais no passado', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'She shouldn\'t have ___.', pool: 'incidentAct',
                  focus: 'should have', ptHint: 'Ela não deveria ter ___.', n: 5 },
                { frame: 'As a result, she ___.', pool: 'consequence',
                  focus: 'consequência', ptHint: 'Como resultado, ela ___.', n: 5 }
              ],
              backchain: [
                { text: 'She shouldn\'t have {incidentAct}.', ptHint: 'Ela não deveria ter…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'Listening · Connections · Pronunciation',
        goal: 'Follow a story of a rule broken, and hear how should\'ve is reduced in speech.',
        comp: 'Você acompanha um caso de regra quebrada e sua consequência, e reconhece a ' +
              'redução de "should\'ve" na fala natural.',
        live: [
          'Listening: Micah Green got suspended for posting online',
          'Determining a speaker\'s attitude from set expressions',
          'Connections: the free concert ticket contest and Mary\'s decision',
          'Pronunciation: how should\'ve sounds in connected speech',
          'Practice: three-syllable word stress patterns'
        ],
        bridge: 'Na aula você ouviu o caso do Micah Green e discutiu o dilema da Mary. Aqui o ' +
                'caso é novo, do After Report, e a redução "should\'ve" vira treino de ouvido ' +
                'de verdade.',
        nextLive: 'Semana 3 · Reading + Video — "Nowhere to Hide" e a proteção de reputação ' +
                  'online.',
        ican: [
          'I can determine a speaker\'s attitude from set expressions.',
          'I can follow a story about a rule that was broken and its result.',
          'I can hear should\'ve, shouldn\'t\'ve and must\'ve in fast speech.',
          'I can react to a moral dilemma with my own opinion.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'listen', icon: '👂', name: 'An After Report case', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u8w2:dlg:1',
                title: '👂 A case gets reported',
                sub: 'Sem texto na tela. Ouça a atitude de cada pessoa.',
                hideText: true,
                lines: [
                  { who: 'Carly', en: 'Did you hear? He got suspended for posting something ' +
                                      'online.' },
                  { who: 'Mark', en: "You're kidding!" },
                  { who: 'Carly', en: 'No, I\'m not. He criticized a manager by name.' },
                  { who: 'Mark', en: 'Wow. I mean, he\'s usually careful, but that\'s a big deal.' }
                ],
                question: 'What is Mark\'s reaction?',
                options: DF.shuffle([
                  { label: 'Surprise', correct: true }, { label: 'Sympathy' },
                  { label: 'Agreement' }, { label: 'Anger' }
                ]),
                expl: '"You\'re kidding!" é uma expressão de surpresa.'
              },
              { ui: 'match', cat: 'fun', srsId: 'wc1u8w2:match:attitude',
                title: '🔗 Match the expression to the attitude it signals:',
                pairs: [
                  ["You're kidding!", 'surprise'],
                  ["I'm so sorry to hear that.", 'sympathy'],
                  ['I know! Tell me about it.', 'agreement'],
                  ["That's too bad.", 'sympathy']
                ] },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u8w2:dlg:2',
                title: '👂 What should he have done?',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Carly', en: 'He should\'ve kept it private, honestly.' },
                  { who: 'Mark', en: 'I agree. He must\'ve known someone would see it eventually.' },
                  { who: 'Carly', en: 'Maybe he just didn\'t think it through.' },
                  { who: 'Mark', en: 'Either way, he shouldn\'t\'ve used the manager\'s name.' }
                ],
                question: 'What do both agree he did wrong?',
                options: DF.shuffle([
                  { label: 'Using the manager\'s name', correct: true },
                  { label: 'Posting at all, on any topic' },
                  { label: 'Talking to Carly about it' },
                  { label: 'Nothing — they disagree completely' }
                ]),
                expl: '"he shouldn\'t\'ve used the manager\'s name" — o ponto específico do ' +
                      'erro, não o ato de postar em si.'
              }
            ]
          },

          {
            id: 'pron', icon: '🥁', name: 'How should\'ve actually sounds', tag: 'pronúncia',
            items: [
              { ui: 'read', cat: 'pro', srsId: 'wc1u8w2:read:pron',
                title: '🥁 The reduced forms of past modals',
                textTitle: 'should\'ve, must\'ve, shouldn\'t\'ve',
                readAloud: false,
                text:
                  'In fast, natural speech, "have" after a past modal loses its full sound and ' +
                  'reduces to something closer to "of" or "uh".\n\n' +
                  'should have -> should\'ve -> sounds like "SHUD-uv"\n' +
                  'must have -> must\'ve -> sounds like "MUST-uv"\n' +
                  'shouldn\'t have -> shouldn\'t\'ve -> sounds like "SHUD-nt-uv"\n\n' +
                  'This is WHY native speakers sometimes write "should of" by mistake — the ' +
                  'reduced sound genuinely resembles "of". In writing, it is always "have".\n\n' +
                  'A ARMADILHA: se voce so aprendeu a forma escrita completa "should have", ' +
                  'pode nao reconhecer "should\'ve" no ouvido — e exatamente o motivo desta ' +
                  'unidade treinar o reconhecimento auditivo separado da escrita.',
                nextLabel: 'Got it ▸' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u8w2:rep:1', unit: 8, waSec: 'Reduction',
                title: '🎤 Say it reduced:', target: "He should've kept it private.",
                ptHint: 'Ele devia ter mantido em privado.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u8w2:rep:2', unit: 8, waSec: 'Reduction',
                title: '🎤 Say it reduced:', target: "It must've been a mistake.",
                ptHint: 'Deve ter sido um erro.' },
              { ui: 'repeat', cat: 'pro', srsId: 'wc1u8w2:rep:3', unit: 8, waSec: 'Reduction',
                title: '🎤 The negative, reduced:', target: "He shouldn't've used her name.",
                ptHint: 'Ele não devia ter usado o nome dela.' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u8w2:str:1', word: 'consequence',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'CON-se-quence' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u8w2:str:2', word: 'anonymous',
                pattern: 'oOoo', decoys: ['Oooo', 'ooOo'], syl: 'a-NO-ny-mous' },
              { ui: 'stress', cat: 'pro', srsId: 'wc1u8w2:str:3', word: 'regulation',
                pattern: 'ooOo', decoys: ['Oooo', 'oOoo'], syl: 're-gu-LA-tion' }
            ]
          },

          {
            id: 'dilemma', icon: '⚖️', name: 'The ticket dilemma', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u8w2:read:dil',
                title: '⚖️ A moral dilemma',
                textTitle: 'The Contest',
                text:
                  'Sara entered a contest to win a free ticket to her favorite band\'s show. To ' +
                  'improve her odds, she also entered her friend Tia\'s name — Tia knew and ' +
                  'agreed. Tia\'s name was chosen. Sara expected Tia to give her the ticket, ' +
                  'since she knew the band better and had signed up for the contest first. Tia ' +
                  'sold the ticket to someone else instead. Now they are not speaking.',
                nextLabel: 'Next ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u8w2:dl:1',
                title: '⚖️ Which past modal fits this reaction?',
                main: 'Tia ___ known Sara would be upset.',
                options: DF.shuffle([
                  { label: 'must have', correct: true }, { label: "couldn't have" },
                  { label: 'should have', correct: false }, { label: 'might not have' }
                ]),
                expl: 'Conclusão lógica — é razoável concluir que ela sabia.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w2:dl:2', unit: 8, waSec: 'Dilemma',
                title: '⚖️ Give your opinion',
                prompt: 'Who do you think was more wrong, Sara or Tia? Use a past modal to ' +
                        'support your opinion.',
                example: 'I think Tia was more wrong. She shouldn\'t have sold the ticket ' +
                         'without talking to Sara first.',
                mustUse: ["shouldn't have"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder listening work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w2+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Say five reduced forms in a row',
                prompt: 'Say these five phrases with the reduced "\'ve" sound: should\'ve, ' +
                        'shouldn\'t\'ve, must\'ve, might\'ve, couldn\'t\'ve.',
                example: '(30 segundos)' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de reação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'As a result, she ___.', pool: 'consequence',
                  focus: 'consequência', ptHint: 'Como resultado, ela ___.', n: 5 }
              ],
              backchain: [
                { text: "He shouldn't've {incidentAct}.", ptHint: 'Ele não devia ter…' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'reading', icon: '📖',
        title: 'Reading · Video',
        goal: 'Read about privacy in the internet age, and watch advice for protecting your reputation.',
        comp: 'Você lê sobre privacidade na era da internet e assiste a um vídeo com conselhos ' +
              'pra proteger a reputação online.',
        live: [
          'Reading: Nowhere to Hide — privacy in the internet age',
          'Finding opposite words and comparing two cases',
          'Reading: Cruise Ship Disasters That Changed Travel',
          'Writing what happened as a result of each action',
          'Video: Protecting Reputations Online'
        ],
        bridge: 'Na aula você leu os dois textos do livro. Aqui as leituras são novas — um ' +
                'caso de privacidade online e um relatório de incidente marítimo — mas a ' +
                'régua continua sendo comparar ação e consequência.',
        nextLive: 'Semana 4 · Writing + Speaking — a carta de solidariedade e o debate sobre ' +
                  'vigilância.',
        ican: [
          'I can identify the main point of a text about privacy.',
          'I can compare a professional\'s and a student\'s situation using a chart.',
          'I can identify what could have prevented a disaster.',
          'I can follow video advice about protecting an online reputation.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: The Post That Didn\'t Disappear', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u8w3:read:text',
                title: '📖 A new case, the same skill',
                textTitle: 'The Post That Didn\'t Disappear',
                text:
                  'Dara deleted the post within four minutes. By then, it had already been ' +
                  'saved, screenshotted, and shared eleven times.\n\n' +
                  'She had written it after a frustrating shift, venting about a coworker ' +
                  'without naming them. Anyone who worked with her could tell who she meant. ' +
                  'Someone forwarded it to the person in question the same night.\n\n' +
                  'The company had no specific rule against posting about work frustrations. ' +
                  'It did have a general policy about "respectful conduct," which the incident ' +
                  'was judged to have violated. Dara was not suspended, but she was required to ' +
                  'attend a meeting with HR and issue a private apology.\n\n' +
                  '"I deleted it almost immediately," she said afterward. "I didn\'t think ' +
                  'anyone outside my friend list would even see it. I definitely should have ' +
                  'thought about screenshots before I hit post."\n\n' +
                  'The coworker she had written about accepted the apology but admitted the ' +
                  'incident had changed how she felt at work. "I know we\'re supposed to move ' +
                  'on," she said. "I\'m trying."',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u8w3:q:1',
                title: '📖 Did deleting the post solve the problem?',
                main: '',
                options: DF.shuffle([
                  { label: 'No — it had already been shared eleven times', correct: true },
                  { label: 'Yes — nobody saw it after deletion' },
                  { label: 'Yes — the coworker never found out' },
                  { label: 'The text does not say' }
                ]),
                expl: '"it had already been saved, screenshotted, and shared eleven times."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u8w3:q:2',
                title: '📖 What rule did Dara actually break?',
                main: '',
                options: DF.shuffle([
                  { label: 'A general policy about respectful conduct', correct: true },
                  { label: 'A specific rule against posting about work' },
                  { label: 'No rule — it was purely a personal disagreement' },
                  { label: 'A rule about screenshots specifically' }
                ]),
                expl: '"a general policy about \'respectful conduct,\' which the incident was ' +
                      'judged to have violated."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u8w3:q:3',
                title: '📖 What is Dara\'s own regret, in her words?',
                main: '',
                options: DF.shuffle([
                  { label: 'Not thinking about screenshots before posting', correct: true },
                  { label: 'Writing about work at all' },
                  { label: 'Deleting the post too quickly' },
                  { label: 'Apologizing to HR' }
                ]),
                expl: '"I definitely should have thought about screenshots before I hit post."' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u8w3:word:1',
                title: '🔗 Find the word in the text that means...',
                pairs: [
                  ['expressing frustration', 'venting'],
                  ['broken (a rule)', 'violated'],
                  ['a rule about how to behave', 'policy'],
                  ['accepted, agreed to', 'admitted'],
                  ['the matter being discussed', 'question']
                ] }
            ]
          },

          {
            id: 'compare', icon: '⚖️', name: 'Compare two cases', tag: 'gramática',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w3:cp:1',
                title: '⚖️ Which past modal fits?',
                main: 'Dara ___ known screenshots could be taken so fast.',
                options: DF.shuffle([
                  { label: 'should have', correct: true }, { label: "couldn't have" },
                  { label: 'must have' }, { label: "shouldn't have" }
                ]),
                expl: 'Arrependimento sobre o que ela deveria ter previsto → should have.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w3:cp:2', unit: 8, waSec: 'Compare',
                title: '⚖️ Compare the two After Report cases',
                prompt: 'Compare Dara\'s case (venting at work) to Micah\'s case from the book ' +
                        '(criticizing a teacher). What is similar, what is different?',
                example: 'Both thought their posts were private. But Micah\'s was public from ' +
                         'the start, while Dara\'s was shared by someone else afterward.',
                mustUse: ['both'] }
            ]
          },

          {
            id: 'video', icon: '🎬', name: 'Protecting a reputation', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u8w3:dlg:1',
                title: '🎬 Advice from the After Report team',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Coach', en: 'Search engines scan everything you post, even if you ' +
                                      'delete it later.' },
                  { who: 'Coach', en: 'So before you click post, think: would you want your ' +
                                      'grandfather to see this?' },
                  { who: 'Coach', en: 'And if something is already out there, contact the person ' +
                                      'who posted it and ask them to remove it.' }
                ],
                question: 'What does the coach suggest as a mental test before posting?',
                options: DF.shuffle([
                  { label: 'Would your grandfather want to see this?', correct: true },
                  { label: 'Is this funny enough?' },
                  { label: 'Will this get many likes?' },
                  { label: 'Is this completely anonymous?' }
                ]),
                expl: '"would you want your grandfather to see this?" — o teste prático da ' +
                      'unidade.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w3:vd:1', unit: 8, waSec: 'Video',
                title: '🗣️ Apply the advice to yourself',
                prompt: 'Think of something you posted recently. Would it pass the ' +
                        '"grandfather test"? Explain.',
                example: 'Honestly, most of it would pass — I mostly post about my dog.',
                mustUse: ['would'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w3+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Argue Dara\'s defense',
                prompt: 'Defend Dara without excusing what happened — argue she was treated ' +
                        'fairly by HR.',
                example: 'I think the response was fair. She wasn\'t suspended, and the ' +
                         'apology addressed the actual harm.',
                mustUse: ['fair'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de avaliação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'She might have ___ because she ___.', pool: 'incidentAct',
                  focus: 'possibilidade + causa', ptHint: 'Ela pode ter…porque…', n: 5 }
              ],
              backchain: [
                { text: 'As a result, she {consequence}.', ptHint: 'Como resultado, ela…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Writing · Speaking · Expanding Your Fluency · Outcomes',
        goal: 'Write with sympathy about a hardship, and debate surveillance with facts.',
        comp: 'Você escreve reconhecendo uma dificuldade e expressando solidariedade, e ' +
              'debate vigilância defendendo sua posição.',
        live: [
          'Writing: a journal expressing regret, disbelief, and sympathy about a disaster',
          'Comparing actions to consequences in a chart',
          'Speaking: surveillance practices and how disruptive they are',
          'Discussing which practices the class supports most and least',
          'Expanding Your Fluency: role-playing a situation + Check What You Know'
        ],
        bridge: 'Na aula você escreveu o diário e debateu vigilância com a turma. Aqui o caso ' +
                'é novo, do After Report, e a solidariedade vira carta de verdade — pra ' +
                'alguém afetado por um incidente.',
        nextLive: 'Unidade 9 fecha o bloco 7-9 — revisão acumulada antes de continuar.',
        ican: [
          'I can write expressing regret, disbelief, and sympathy about a hardship.',
          'I can compare actions to their consequences in writing.',
          'I can discuss surveillance practices and state which I support.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'journal', icon: '📓', name: 'Writing with sympathy', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u8w4:read:journal',
                title: '📓 Regret, disbelief, and sympathy — in one voice',
                textTitle: 'Writing about hardship',
                readAloud: false,
                text:
                  'A good response to hardship uses past modals for THREE different feelings, ' +
                  'not just one.\n\n' +
                  'REGRET (about your own actions)\n' +
                  'I should have checked on him more often.\n\n' +
                  'DISBELIEF (about what happened)\n' +
                  'I still can\'t believe it went that far. It shouldn\'t have escalated like ' +
                  'that.\n\n' +
                  'SYMPATHY (for the people affected)\n' +
                  'I am so sorry for what your family has been through.\n\n' +
                  'A ARMADILHA: misturar as tres numa frase so costuma soar confuso. E melhor ' +
                  'dar uma frase pra cada sentimento — o leitor sente a diferenca entre ' +
                  '"eu deveria ter feito diferente" e "sinto muito pelo que voces passaram".',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u8w4:jn:1',
                title: '📓 Which sentence expresses SYMPATHY, not regret?',
                main: '',
                options: DF.shuffle([
                  { label: 'I am so sorry for everything your family has gone through.',
                    correct: true },
                  { label: 'I should have checked on him more often.' },
                  { label: 'I shouldn\'t have left when I did.' },
                  { label: 'I could have prevented this.' }
                ]),
                expl: 'As outras três são sobre A PRÓPRIA ação. Só a primeira é sobre o ' +
                      'sofrimento do outro.' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w4:jn:2', unit: 8, waSec: 'Journal',
                title: '📓 Sentence 1 — regret',
                prompt: 'Write one sentence expressing regret about an incident (real or ' +
                        'invented), using should have or shouldn\'t have.',
                example: 'I should have double-checked the equipment before the shift started.',
                mustUse: ['should'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w4:jn:3', unit: 8, waSec: 'Journal',
                title: '📓 Sentence 2 — disbelief',
                prompt: 'Write one sentence expressing disbelief about what happened.',
                example: 'I still can\'t believe it escalated as fast as it did.',
                mustUse: ["can't believe"] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w4:jn:4', unit: 8, waSec: 'Journal',
                title: '📓 Sentence 3 — sympathy',
                prompt: 'Write one sentence expressing sympathy for someone affected.',
                example: 'I am truly sorry for what everyone involved has had to go through.',
                mustUse: ['sorry'],
                expl: 'Mande as três frases juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'surveillance', icon: '📹', name: 'The surveillance debate', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u8w4:read:surv',
                title: '📹 Four kinds of surveillance',
                textTitle: 'Surveillance practices',
                text:
                  'Companies monitor employee computer use. Cities install cameras in public ' +
                  'spaces. Airports scan every passenger and every bag. Some workplaces track ' +
                  'internet browsing hour by hour.\n\n' +
                  'Which of these feels most invasive to you? Which feels most reasonable, and ' +
                  'why?',
                nextLabel: 'Next ▸' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w4:sv:1', unit: 8, waSec: 'Surveillance',
                title: '📹 State your position',
                prompt: 'Say which surveillance practice you find most invasive, and why.',
                example: 'I think tracking browsing hour by hour is the most invasive — it goes ' +
                         'far beyond what\'s needed to do the job.',
                mustUse: ['invasive'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w4:sv:2', unit: 8, waSec: 'Surveillance',
                title: '📹 Defend the opposite view',
                prompt: 'Now argue the opposite side for thirty seconds.',
                example: '(30 segundos)' }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u8w4:chk:1', unit: 8, idx: 0,
                statement: 'I can use past modals to consider possibilities, express ' +
                           'disbelief and regret, and make logical conclusions.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u8w4:chk:2', unit: 8, idx: 1,
                statement: 'I can compare actions to their consequences.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u8w4:chk:3', unit: 8, idx: 2,
                statement: 'I can recognize hardship and express sympathy.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u8w4:chk:4', unit: 8, idx: 3,
                statement: 'I can respond to a news story with my own opinion.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w4:pt:1',
                title: '📝 Complete:', main: 'She ___ been texting. She lost her phone last week.',
                options: DF.shuffle([
                  { label: "couldn't have", correct: true }, { label: 'might have' },
                  { label: 'must have' }, { label: 'should have' }
                ]),
                expl: 'Impossibilidade → couldn\'t have.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w4:pt:2',
                title: '📝 Complete:', main: 'It ___ been important. She never interrupts class.',
                options: DF.shuffle([
                  { label: 'must have', correct: true }, { label: "couldn't have" },
                  { label: 'should have' }, { label: 'might not have' }
                ]),
                expl: 'Conclusão lógica forte → must have.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u8w4:pt:3',
                title: '📝 Which is the correct WRITTEN form?',
                main: '',
                options: DF.shuffle([
                  { label: 'He should have called.', correct: true },
                  { label: 'He should of called.' },
                  { label: 'He should had called.' },
                  { label: 'He should calling.' }
                ]),
                expl: 'Sempre "should have" por escrito, nunca "should of".' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u8w4:pt:4',
                title: '📝 Complete:', main: 'He thought he could ___ it because nobody was ' +
                       'watching.',
                options: DF.shuffle([
                  { label: 'get away with', correct: true }, { label: 'get into trouble' },
                  { label: 'discipline' }, { label: 'criticize' }
                ]),
                expl: 'get away with = fazer algo errado sem consequência.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u8w4:pt:5',
                title: '🔗 Match each modal to its job:',
                pairs: [
                  ["couldn't have", 'disbelief / impossibility'],
                  ['might have', 'possibility'],
                  ['must have', 'logical conclusion'],
                  ['should have', 'regret']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u8w4:pt:6',
                title: '🧩 Build the sentence:',
                answer: 'I am so sorry for what your family has been through',
                expl: 'Frase de solidariedade, sem modal — puramente empática.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full journal, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u8w4+:b1', unit: 8, waSec: 'Praticar mais',
                title: '🔥 Regret, disbelief and sympathy, one take',
                prompt: 'Record all three sentences (regret, disbelief, sympathy) about a real ' +
                        'or invented situation, in one continuous take.',
                example: '(45 a 60 segundos)' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de reflexão', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'She might have ___ because she was in a hurry.', pool: 'incidentAct',
                  focus: 'possibilidade', ptHint: 'Ela pode ter…porque estava com pressa.', n: 5 }
              ],
              backchain: [
                { text: 'I am so sorry for what your family has been through.',
                  ptHint: 'Sinto muito pelo que sua família passou.' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
