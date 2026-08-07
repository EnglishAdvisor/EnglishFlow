/* ENGLISH FLOW — week/plan-wc1-05.js
   WORLD CLASS ONE · UNIT 5 "No Need to Panic" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Ver plan-wc1-01.js e a régua de fatiamento
   day-on / day-off na ESFERA-PEDAGOGIA item 6.1.

     AULA AO VIVO → o livro: o life coach Greg Ravetti, o desastre no Everest,
                    a aterrissagem no rio Hudson, o ataque de tubarão.
     APP          → THE CALM PROTOCOL, uma empresa fictícia de treinamento de
                    crise que publica guias de sobrevivência passo a passo e
                    treina clientes a negociar planos sob pressão. 100%
                    autoral (item 20).

   Por que este cenário: a unidade cobra oração adverbial pra falar de
   situações difíceis, chegar a um acordo, explicar passos de um processo, e
   seguir passos pra atravessar uma situação difícil. Uma empresa de
   treinamento de crise hospeda os quatro outcomes sem tocar no Everest nem
   no Hudson do livro.

     outcome 1 (adverbial clauses)      → contar a situação de risco
     outcome 2 (reach a compromise)     → dois clientes discordam do plano
     outcome 3 (explain steps)          → o guia passo a passo publicado
     outcome 4 (follow steps under pressure) → o simulado cronometrado

   ═══ NÍVEL ═══
   B2: instruções em inglês, PT-BR só na armadilha e no `expl` (aprovado
   com o Felipe 08/08/2026).

   ═══ ESTRUTURA ═══
   O livro não tem página de Speaking dedicada nesta unidade (confirmado nas
   fotos) — a prática de fala fica em Connections (role-play de compromisso)
   e Expanding Your Fluency (negociar um plano de fuga). Por isso a semana 2
   funde Listening+Connections, e a semana 4 funde Writing+Expanding+Outcomes:

     Semana 1 · Overview + Vocabulary + Grammar (Adverbial Clauses)
     Semana 2 · Listening + Connections
     Semana 3 · Reading (duas: Everest + avião) + Video
     Semana 4 · Writing + Expanding Your Fluency + Outcomes */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.wc1 = DF.PLAN.wc1 || {};

  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.crisisSit = ['a plane loses an engine', 'the power goes out during a storm',
                               'someone gets trapped in an elevator', 'a hiking group gets lost',
                               'a fire alarm goes off at night', 'a boat starts taking on water'];
    DF.WGEN.POOLS.calmStep = ['breathe slowly for a minute', 'make a simple plan',
                              'follow the plan step by step', 'check the exits first',
                              'stay where you are and wait for help', 'call for help immediately'];
    DF.WGEN.POOLS.riskAct = ['jump out of a plane', 'climb without a guide',
                             'swim in open water at night', 'drive through a storm',
                             'hike alone in an unfamiliar area'];
  }

  const WORDS = [
    { en: 'collapse', pt: 'desabar / entrar em colapso',
      def: 'to fall down suddenly',
      ex: 'The tent collapsed in the wind, and nobody heard it happen.' },
    { en: 'encourage', pt: 'encorajar',
      def: 'to give someone confidence or hope',
      ex: 'The instructor kept the group encouraged even after the second wrong turn.' },
    { en: 'handle', pt: 'lidar com / administrar',
      def: 'to deal with a problem or situation successfully',
      ex: 'She handled the blackout better than anyone in the room, including the guide.' },
    { en: 'injure', pt: 'ferir / machucar',
      def: 'to damage a part of a person\'s body',
      ex: 'Nobody was seriously injured, though two people needed stitches.' },
    { en: 'intense', pt: 'intenso',
      def: 'very great or extreme',
      ex: 'The heat inside the stalled elevator became intense within minutes.' },
    { en: 'ordeal', pt: 'provação / experiência difícil',
      def: 'a very difficult, stressful situation',
      ex: 'The four-hour wait for rescue was the longest ordeal of her life.' },
    { en: 'panic', pt: 'entrar em pânico',
      def: 'to feel very anxious or afraid all of a sudden',
      ex: 'The moment the lights went out, half the group started to panic.' },
    { en: 'rescue', pt: 'resgatar / resgate',
      def: 'to save someone from a dangerous situation',
      ex: 'The rescue took eleven minutes, which felt like an hour to everyone waiting.' },
    { en: 'trapped', pt: 'preso / encurralado',
      def: 'unable to escape from a place or situation',
      ex: 'They were trapped for two hours before anyone answered the radio.' }
  ];

  const EXTRA_WORDS = [
    { en: 'altitude ·+', pt: 'altitude',
      def: 'height off the ground',
      ex: 'At that altitude, thinking clearly gets harder by the hour.' },
    { en: 'catch off guard ·+', pt: 'pegar desprevenido',
      def: 'to surprise someone unexpectedly',
      ex: 'The second storm caught the whole team off guard.' },
    { en: 'disorientation ·+', pt: 'desorientação',
      def: 'confusion',
      ex: 'Low oxygen causes disorientation before it causes anything else.' },
    { en: 'freak out ·+', pt: 'surtar / entrar em desespero',
      def: 'to lose control and behave in an extremely emotional way',
      ex: 'I freaked out for about ten seconds, and then I remembered the plan.' },
    { en: 'freeze ·+', pt: 'travar / congelar (de medo)',
      def: 'to be unable to move or think',
      ex: 'She froze completely during her first storm — everyone does, the first time.' },
    { en: 'monitor ·+', pt: 'monitorar',
      def: 'to follow or check something regularly',
      ex: 'We monitor the weather every twenty minutes once a client is on the mountain.' },
    { en: 'risk-taker ·+', pt: 'pessoa arriscada',
      def: 'an adventurous person, unafraid of taking chances',
      ex: 'He is a genuine risk-taker, but even he checks the forecast first.' },
    { en: 'set off ·+', pt: 'partir (para uma viagem)',
      def: 'to start a trip',
      ex: 'The team set off before daybreak to avoid the afternoon storms.' }
  ];

  DF.PLAN.wc1[5] = {
    unit: 5,
    title: 'No Need to Panic',
    subtitle: 'Seu quinto mês',
    icon: '🧯',

    mindmap: {
      center: 'No Need to Panic',
      sub: 'Falar de situações difíceis, negociar e seguir um plano sob pressão',
      branches: [
        {
          icon: '🚨', name: 'Crisis vocabulary',
          leaves: WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'As marcadas <b>·+</b> vêm do Language Summary. <b>Armadilha:</b> ' +
                '<b>panic</b> é substantivo E verbo (to panic); <b>freeze</b> no passado é ' +
                '<b>froze</b>, irregular — "freezed" não existe.'
        },
        {
          icon: '⏱️', name: 'Adverbial clauses — TIME',
          leaves: [
            { en: 'After the mine collapsed, the men were trapped.', pt: 'after' },
            { en: 'The men were trapped after the mine collapsed.', pt: 'ordem invertida' },
            { en: 'Whenever you get anxious, breathe slowly.', pt: 'whenever' },
            { en: 'As soon as you are out of the water, report it.', pt: 'as soon as' }
          ],
          note: 'Se a oração adverbial vem PRIMEIRO, leva vírgula depois. Se vem DEPOIS, não ' +
                'leva. É o mesmo significado, pontuação diferente.'
        },
        {
          icon: '💡', name: 'Adverbial clauses — REASON & PURPOSE',
          leaves: [
            { en: 'Because the mine collapsed, the men were trapped.', pt: 'reason: because' },
            { en: 'They closed the mine so (that) an accident doesn\'t happen again.', pt: 'purpose: so that' },
            { en: 'Since you already have a plan, follow it.', pt: 'reason: since' }
          ],
          note: '<b>Armadilha:</b> "since" tem dois sentidos — tempo (desde quando, ' +
                'unidade 1) e razão (porque, aqui). O contexto decide qual é qual.'
        },
        {
          icon: '⚖️', name: 'Adverbial clauses — CONTRAST',
          leaves: [
            { en: 'Even though it was hard, they survived for weeks.', pt: 'even though' },
            { en: 'Although the plan was simple, it worked.', pt: 'although' }
          ],
          note: 'although / even though introduzem algo que CONTRARIA a expectativa da ' +
                'outra parte da frase. "Even though" é um pouco mais enfático que "although".'
        },
        {
          icon: '📋', name: 'Explaining steps in a process',
          leaves: [
            { en: 'The first thing you should do is stay calm.', pt: 'passo 1' },
            { en: 'The next thing you should do is get out of the water.', pt: 'passo 2' },
            { en: 'The only thing you can do is fight back.', pt: 'passo final' },
            { en: 'As soon as you\'re safe, report it.', pt: 'depois de tudo' }
          ],
          note: 'A estrutura "The [ordinal] thing you should do is + verbo" é o esqueleto de ' +
                'qualquer instrução passo a passo — e reaparece na cápsula de writing.'
        },
        {
          icon: '🤝', name: 'Reaching a compromise',
          leaves: [
            { en: 'One option is to hike to the other side.', pt: 'propor' },
            { en: 'The problem is that I injured my leg.', pt: 'o obstáculo' },
            { en: 'Before we do that, we need to…', pt: 'condição prévia' }
          ],
          note: 'Compromisso não é ceder — é nomear o problema de um lado e a opção do outro ' +
                'até os dois caberem na mesma frase.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'grammar', icon: '🧯',
        title: 'Overview · Vocabulary · Grammar',
        goal: 'Talk about a challenging situation using the right adverbial clause.',
        comp: 'Você conta uma situação difícil escolhendo entre tempo, razão, propósito e ' +
              'contraste — e usa a vírgula certa dependendo da ordem da frase.',
        live: [
          'The unit opener: the amusement park ride photo and warm-up questions',
          'Vocabulary: the plane crash and the trapped miners stories',
          'Grammar: Adverbial Clauses — time, reason, contrast, purpose',
          'Combining sentences with the correct connecting word',
          'Pair work: how much of a risk-taker are you?'
        ],
        bridge: 'Na aula você combinou frases do livro com a tabela de conectores. Aqui a ' +
                'escolha vira decisão sob pressão, em casos novos da Calm Protocol, e você ' +
                'ganha 8 palavras que o Word Bank não traz.',
        nextLive: 'Semana 2 · Listening + Connections — o life coach e a negociação de ' +
                  'compromisso.',
        ican: [
          'I can use time, reason, contrast and purpose clauses correctly.',
          'I can punctuate an adverbial clause depending on its position.',
          'I can tell since (time) apart from since (reason).',
          'I can use the unit vocabulary to describe a stressful situation.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'wc1u5w1:cards:core',
                title: '📇 Nine words for a crisis',
                sub: 'Exemplos da Calm Protocol — não são os do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'wc1u5w1:cards:extra',
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
              { ui: 'choice', cat: 'voc', srsId: 'wc1u5w1:wf:1',
                title: '🔤 Which word fits?',
                main: 'She stayed calm, but two people in the group started to ___.',
                options: DF.shuffle([
                  { label: 'panic', correct: true }, { label: 'monitor' },
                  { label: 'encourage' }, { label: 'handle' }
                ]),
                expl: 'panic = entrar em pânico, perder o controle de repente.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u5w1:wf:2',
                title: '🔤 Which word fits?',
                main: 'The sudden storm ___ the whole team ___ guard.',
                options: DF.shuffle([
                  { label: 'caught / off', correct: true }, { label: 'took / off' },
                  { label: 'caught / out' }, { label: 'made / off' }
                ]),
                expl: 'catch (someone) off guard = pegar desprevenido — phrasal fixo.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u5w1:wf:3',
                title: '🔤 Complete:',
                main: 'They were ___ for two hours before help arrived.',
                options: DF.shuffle([
                  { label: 'trapped', correct: true }, { label: 'injured' },
                  { label: 'collapsed' }, { label: 'rescued' }
                ]),
                expl: 'trapped = preso, sem conseguir escapar. rescued seria depois, não durante.' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u5w1:match:def',
                title: '🔗 Match the word to its definition:',
                pairs: [
                  ['ordeal', 'a very difficult, stressful situation'],
                  ['disorientation', 'confusion'],
                  ['risk-taker', 'an adventurous person'],
                  ['freeze', 'to be unable to move or think'],
                  ['handle', 'to deal with a problem successfully']
                ] }
            ]
          },

          {
            id: 'glance', icon: '🔍', name: 'Adverbial clauses at a glance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'wc1u5w1:read:glance',
                title: '🔍 Four jobs, one comma rule',
                textTitle: 'Adverbial clauses',
                readAloud: false,
                text:
                  'TIME — after, since, whenever, as soon as, until, while, before, when\n' +
                  'After the storm passed, we left the shelter.\n\n' +
                  'REASON — because, since\n' +
                  'Because the radio failed, they had no warning.\n\n' +
                  'CONTRAST — although, even though\n' +
                  'Even though it was risky, they finished the climb.\n\n' +
                  'PURPOSE — so (that)\n' +
                  'They checked the gear twice so that nothing would fail.\n\n' +
                  'THE COMMA RULE: se a oracao adverbial vem PRIMEIRO na frase, coloque uma ' +
                  'virgula depois dela. Se vem DEPOIS da oracao principal, normalmente nao ' +
                  'precisa de virgula.\n' +
                  'Because the radio failed, they had no warning. (virgula)\n' +
                  'They had no warning because the radio failed. (sem virgula)\n\n' +
                  'A ARMADILHA: since tem DOIS significados — "desde" (tempo, unidade 1: since ' +
                  '2019) e "porque" (razao, aqui: since you already have a plan, follow it). O ' +
                  'contexto decide, nao a palavra sozinha.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w1:ac:1',
                title: '🎯 Which connector fits?',
                main: '___ the elevator stopped, three people were inside.',
                options: DF.shuffle([
                  { label: 'When', correct: true }, { label: 'So that' },
                  { label: 'Although', correct: false }, { label: 'Because of' }
                ]),
                expl: 'when introduz o momento exato do evento.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w1:ac:2',
                title: '🎯 Which connector fits?',
                main: 'They checked the exits twice ___ nothing would go wrong.',
                options: DF.shuffle([
                  { label: 'so that', correct: true }, { label: 'because' },
                  { label: 'although' }, { label: 'as soon as' }
                ]),
                expl: 'so that introduz o PROPÓSITO — o objetivo da ação.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w1:ac:3',
                title: '🎯 Which connector fits?',
                main: '___ she was terrified, she kept giving instructions.',
                options: DF.shuffle([
                  { label: 'Even though', correct: true }, { label: 'Because' },
                  { label: 'So that' }, { label: 'Since' }
                ]),
                expl: 'even though introduz o contraste — apesar do medo, ela agiu.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w1:ac:4',
                title: '🎯 Time or Reason? "Since" here means:',
                main: 'Since you already have a plan, follow it step by step.',
                options: DF.shuffle([
                  { label: 'Reason (because)', correct: true }, { label: 'Time (desde quando)' }
                ]),
                expl: 'Não há marcador de data — "since" aqui é razão, não tempo.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w1:ac:5',
                title: '🎯 Which sentence needs the comma?',
                main: '',
                options: DF.shuffle([
                  { label: 'Because the radio failed_ they had no warning.', correct: true },
                  { label: 'They had no warning because the radio failed.' },
                  { label: 'They left after the storm passed.' },
                  { label: 'They stayed calm although it was dangerous.' }
                ]),
                expl: 'A oração adverbial no INÍCIO da frase pede vírgula depois dela.' },
              { ui: 'order', cat: 'gra', srsId: 'wc1u5w1:ac:6',
                title: '🧩 Build the sentence:',
                answer: 'Even though the plan was risky the team followed it step by step',
                expl: 'Even though + contraste, vírgula, e a frase principal.' }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'wc1u5w1:tf:1',
                title: '🔀 Adverbial clause transformation',
                rounds: [
                  { base: 'They stayed calm because they had a plan.', cmd: 'Question',
                    answers: ['Did they stay calm because they had a plan?'] },
                  { base: 'She panicked when the lights went out.', cmd: 'Negative',
                    answers: ["She didn't panic when the lights went out.",
                              'She did not panic when the lights went out.'] },
                  { base: 'Even though it was risky, they finished the climb.', cmd: 'Question',
                    answers: ['Did they finish the climb even though it was risky?'] },
                  { base: 'They checked the gear so that nothing would fail.', cmd: 'Negative',
                    answers: ["They didn't check the gear so that nothing would fail.",
                              'They did not check the gear so that nothing would fail.'] }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'wc1u5w1:drl:crisis', unit: 5, waSec: 'Drill · situação',
                title: '🔁 Drill 1 — the crisis changes', focus: 'vocabulário de crise',
                frame: 'Stay calm even when ___.', ptHint: 'Fique calmo mesmo quando ___.',
                slots: ['a plane loses an engine', 'the power goes out during a storm',
                        'someone gets trapped in an elevator', 'a hiking group gets lost',
                        'a fire alarm goes off at night'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u5w1:drl:calm', unit: 5, waSec: 'Drill · passos',
                title: '🔁 Drill 2 — the step changes', focus: 'ordenar passos',
                frame: 'The first thing you should do is ___.',
                ptHint: 'A primeira coisa que você deve fazer é ___.',
                slots: ['breathe slowly for a minute', 'make a simple plan',
                        'check the exits first', 'stay where you are and wait for help',
                        'call for help immediately'] },
              { ui: 'drill', cat: 'gra', srsId: 'wc1u5w1:drl:reason', unit: 5, waSec: 'Drill · razão',
                title: '🔁 Drill 3 — the reason changes', focus: 'because',
                frame: 'They panicked because ___.', ptHint: 'Eles entraram em pânico porque ___.',
                slots: ['the radio failed', 'the storm arrived early', 'the guide got lost',
                        'the water was rising', 'nobody had a plan'] }
            ]
          },

          {
            id: 'backchain', icon: '🧱', name: 'Build the long ones', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u5w1:bc:1', unit: 5, waSec: 'Backchain',
                title: '🧱 The purpose sentence',
                ptHint: 'Eles verificaram o equipamento duas vezes para que nada falhasse.',
                chain: ['would fail', 'so that nothing would fail',
                        'the gear twice so that nothing would fail',
                        'They checked the gear twice so that nothing would fail.'] },
              { ui: 'backchain', cat: 'gra', srsId: 'wc1u5w1:bc:2', unit: 5, waSec: 'Backchain',
                title: '🧱 The contrast sentence',
                ptHint: 'Mesmo estando aterrorizada, ela continuou dando instruções.',
                chain: ['giving instructions', 'she kept giving instructions',
                        'she was terrified, she kept giving instructions',
                        'Even though she was terrified, she kept giving instructions.'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'New situations', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u5w1:dlg:1',
                title: '🎧 A trainer explains a rule',
                sub: 'Situação nova — não é o diálogo da aula.',
                lines: [
                  { who: 'Nadia', en: 'Why do we always check the exits first?' },
                  { who: 'Elias', en: 'Because panic gets worse when people don\'t know where ' +
                                      'to go.' },
                  { who: 'Nadia', en: 'So the exit check is really about calm, not speed?' },
                  { who: 'Elias', en: 'Exactly. Even though it feels slow, it saves time later.' }
                ],
                question: 'Why does Elias say the exit check matters?',
                options: DF.shuffle([
                  { label: 'It reduces panic by giving people direction', correct: true },
                  { label: 'It makes the process faster' },
                  { label: 'It is required by law' },
                  { label: 'It has nothing to do with calm' }
                ]),
                expl: '"panic gets worse when people don\'t know where to go" — a razão vem ' +
                      'com because.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u5w1:dlg:2',
                title: '🎧 A correction during training',
                sub: 'Repare o que é corrigido.',
                lines: [
                  { who: 'Priya', en: 'Since two thousand nineteen we train people to stay calm.' },
                  { who: 'Tomás', en: 'You mean since 2019, not "since" as a reason here?' },
                  { who: 'Priya', en: 'Right — since 2019, meaning from that year to now.' },
                  { who: 'Tomás', en: 'Got it. Same word, two different jobs.' }
                ],
                question: 'What does "since" mean in this dialogue?',
                options: DF.shuffle([
                  { label: 'Time — from 2019 until now', correct: true },
                  { label: 'Reason — because of 2019' },
                  { label: 'Both meanings equally' },
                  { label: 'Neither — it is a mistake' }
                ]),
                expl: 'Data específica (2019) → since de tempo, não de razão.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u5w1:dlg:3',
                title: '🎧 Three trainees, no text on screen',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Amara', en: 'I freeze completely whenever something goes wrong fast.' },
                  { who: 'Kenji', en: 'I panic first and calm down after, which is backwards.' },
                  { who: 'Larissa', en: 'Even though I train for this, my hands still shake ' +
                                        'every time.' }
                ],
                question: 'Who admits the training does NOT remove the physical reaction?',
                options: DF.shuffle([
                  { label: 'Larissa', correct: true }, { label: 'Amara' },
                  { label: 'Kenji' }, { label: 'None of them' }
                ]),
                expl: '"Even though I train for this, my hands still shake" — contraste ' +
                      'explícito entre preparo e reação física.'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Your turn — for real', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w1:bld:1', unit: 5, waSec: 'Sua vez',
                title: '🗣️ A time you stayed calm',
                prompt: 'Describe one moment you stayed calm in a difficult situation. Use a ' +
                        'time clause.',
                example: 'As soon as I realized the car wasn\'t stopping, I just steered into ' +
                         'the empty lane.',
                mustUse: ['as soon as'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w1:bld:2', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Something you did, and why',
                prompt: 'Say one thing you did in a stressful situation and give the reason, ' +
                        'using because.',
                example: 'I turned off the stove first, because that was the actual danger, ' +
                         'not the noise.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w1:bld:3', unit: 5, waSec: 'Sua vez',
                title: '🗣️ A contrast in your own life',
                prompt: 'Say something you did even though it was scary.',
                example: 'Even though I was terrified of the water, I learned to swim at ' +
                         'thirty.',
                mustUse: ['even though'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'No model on screen', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w1+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Four clause types in sixty seconds',
                prompt: 'Talk for one minute about a stressful situation using time, reason, ' +
                        'contrast, and purpose clauses.',
                example: '(1 minuto)' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w1+:b2', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Fix it out loud',
                prompt: 'This is wrong: "Since 2019 we panicked" as a reason clause. Say a ' +
                        'correct version using since as REASON, not time.',
                example: 'Since the plan was already written, we did not panic — we just ' +
                         'followed it.',
                mustUse: ['since'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de oração adverbial', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Stay calm even when ___.', pool: 'crisisSit',
                  focus: 'contraste', ptHint: 'Fique calmo mesmo quando ___.', n: 5 },
                { frame: 'The first thing you should do is ___.', pool: 'calmStep',
                  focus: 'passos', ptHint: 'A primeira coisa a fazer é ___.', n: 5 }
              ],
              backchain: [
                { text: 'Even though it was risky, they {calmStep}.',
                  ptHint: 'Mesmo sendo arriscado, eles…' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'listening', icon: '👂',
        title: 'Listening · Connections',
        goal: 'Follow advice on staying calm, and reach a compromise under pressure.',
        comp: 'Você ouve conselhos de um life coach sobre lidar com pânico, e negocia um ' +
              'compromisso quando duas pessoas discordam sob estresse.',
        live: [
          'Listening: an interview with life coach Greg Ravetti',
          'Correcting false statements about his advice',
          'The three-step plan: breathe, make a plan, follow the plan',
          'Connections: Fatima\'s stressed phone call and reaching a compromise',
          'Role-play: creating your own compromise dialogue'
        ],
        bridge: 'Na aula você ouviu o Greg Ravetti e o telefonema da Fatima. Aqui o conselho é ' +
                'de um coach da Calm Protocol, e o compromisso vira negociação de verdade — ' +
                'com um problema específico de cada lado.',
        nextLive: 'Semana 3 · Reading + Video — o desastre do Everest e a sobrevivência num ' +
                  'acidente aéreo.',
        ican: [
          'I can follow spoken advice and correct false statements about it.',
          'I can name the steps of a plan someone describes.',
          'I can state my problem and someone else\'s option to reach a compromise.',
          'I can role-play a negotiation under stress.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'listen', icon: '👂', name: 'A Calm Protocol coach explains', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u5w2:dlg:1',
                title: '👂 The three-step method',
                sub: 'Sem texto na tela. Ouça os três passos, nessa ordem.',
                hideText: true,
                lines: [
                  { who: 'Host', en: 'So, coach, what is the first thing someone should do?' },
                  { who: 'Coach', en: 'Breathe slowly for a minute. It sounds too simple, but ' +
                                      'it works, because panic and slow breathing cannot ' +
                                      'happen at the same time.' },
                  { who: 'Host', en: 'And after that?' },
                  { who: 'Coach', en: 'Make a simple plan — three steps, no more. And then, ' +
                                      'follow the plan exactly, one step at a time.' }
                ],
                question: 'Why does breathing slowly work, according to the coach?',
                options: DF.shuffle([
                  { label: 'Panic and slow breathing cannot happen together', correct: true },
                  { label: 'It takes exactly one minute to calm down' },
                  { label: 'It replaces the need for a plan' },
                  { label: 'The coach does not explain why' }
                ]),
                expl: '"panic and slow breathing cannot happen at the same time" — a razão ' +
                      'física, não só a instrução.'
              },
              { ui: 'order', cat: 'fun', srsId: 'wc1u5w2:ord:1',
                title: '🧩 Put the three steps in order:',
                answer: 'Breathe slowly for a minute make a simple plan follow the plan exactly',
                expl: 'A ordem importa — pular direto pro plano sem respirar primeiro é o ' +
                      'erro mais comum, segundo o coach.' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u5w2:dlg:2',
                title: '👂 A client who panics under a deadline',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Coach', en: 'You said the report is due tomorrow and you have not ' +
                                      'started. What do you feel right now?' },
                  { who: 'Client', en: 'Honestly? I want to freeze completely.' },
                  { who: 'Coach', en: 'Okay. Even though you have not started, you have time to ' +
                                      'plan. What is one thing you could do right now?' },
                  { who: 'Client', en: 'I could make an outline. That would take ten minutes.' }
                ],
                question: 'What does the coach ask the client to do first?',
                options: DF.shuffle([
                  { label: 'Name one small action they could do right now', correct: true },
                  { label: 'Finish the whole report immediately' },
                  { label: 'Stop feeling anxious completely' },
                  { label: 'Ask for an extension' }
                ]),
                expl: '"What is one thing you could do right now?" — o método reduz o pânico a ' +
                      'um passo pequeno e concreto.'
              }
            ]
          },

          {
            id: 'compromise', icon: '🤝', name: 'Reaching a compromise', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u5w2:read:comp',
                title: '🤝 The shape of a compromise',
                textTitle: 'Reaching a compromise',
                readAloud: false,
                text:
                  'STATE THE PROBLEM (your side)\n' +
                  'The problem is that I injured my leg and can\'t walk very well.\n\n' +
                  'OFFER AN OPTION (the other side)\n' +
                  'One option is to hike to the other side and see what\'s there.\n\n' +
                  'ADD A CONDITION\n' +
                  'Before we do that, we need to check how far it is.\n\n' +
                  'AGREE ON ONE PLAN\n' +
                  'So even though it will be slow, let\'s try the shorter route first.\n\n' +
                  'A ARMADILHA: compromisso nao e ceder tudo nem manter tudo — e encaixar o ' +
                  'PROBLEMA de um lado com a OPCAO do outro na MESMA frase, geralmente com um ' +
                  'even though ou although no meio.',
                nextLabel: 'Got it ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u5w2:dlg:3',
                title: '🤝 Two clients disagree',
                sub: 'Repare como o compromisso é construído.',
                lines: [
                  { who: 'Sofia', en: 'The problem is that I get seasick, so a boat is a bad idea.' },
                  { who: 'Marco', en: 'One option is to fly instead, even though it costs more.' },
                  { who: 'Sofia', en: 'Before we book that, can we check if there is a middle ' +
                                      'option?' },
                  { who: 'Marco', en: 'There is a train. Slower, but nobody gets sick.' },
                  { who: 'Sofia', en: 'Even though it takes longer, let\'s take the train.' }
                ],
                question: 'How do they reach agreement?',
                options: DF.shuffle([
                  { label: 'They keep proposing options until one works for both', correct: true },
                  { label: 'Sofia simply accepts whatever Marco wants' },
                  { label: 'Marco gives up and books the boat anyway' },
                  { label: 'They never actually agree' }
                ]),
                expl: 'problema → opção → condição → opção nova → acordo. Nenhum dos dois ' +
                      'cede tudo de uma vez.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w2:cmp:1', unit: 5, waSec: 'Compromise',
                title: '🤝 State your problem',
                prompt: 'Imagine you and a partner disagree on a plan. State your problem.',
                example: 'The problem is that I am afraid of heights, so climbing is not an ' +
                         'option for me.',
                mustUse: ['the problem is'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w2:cmp:2', unit: 5, waSec: 'Compromise',
                title: '🤝 Offer an option',
                prompt: 'Offer one option that addresses their side, using even though.',
                example: 'One option is to take the lower trail, even though it is longer.',
                mustUse: ['even though'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w2:cmp:3', unit: 5, waSec: 'Compromise',
                title: '🤝 The full negotiation, alone',
                prompt: 'Play both sides: state a problem, offer an option, add a condition, ' +
                        'and close with an agreement.',
                example: '(45 a 60 segundos)',
                mustUse: ['one option'],
                expl: 'Este é o outcome 2 e o entregável falado. Mande o áudio pro professor.' }
            ]
          },

          {
            id: 'practice-w2', icon: '📄', name: 'Written check', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w2:wr:1',
                title: '📝 Complete:', main: '___ the plan was slower, it kept everyone calm.',
                options: DF.shuffle([
                  { label: 'Even though', correct: true }, { label: 'Because' },
                  { label: 'So that' }, { label: 'As soon as' }
                ]),
                expl: 'even though = contraste, apesar de.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u5w2:wr:2',
                title: '📝 Complete:', main: 'The coach helped him ___ the deadline pressure.',
                options: DF.shuffle([
                  { label: 'handle', correct: true }, { label: 'collapse' },
                  { label: 'freeze' }, { label: 'trap' }
                ]),
                expl: 'handle = lidar com, administrar com sucesso.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Harder negotiation work', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w2+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 A three-way disagreement',
                prompt: 'Imagine THREE people disagree on a plan, not two. Voice all three ' +
                        'and reach one agreement.',
                example: '(90 segundos)' }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de compromisso', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The first thing you should do is ___.', pool: 'calmStep',
                  focus: 'passos', ptHint: 'A primeira coisa a fazer é ___.', n: 5 }
              ],
              backchain: [
                { text: 'One option is to {calmStep}, even though it takes longer.',
                  ptHint: 'Uma opção é…, mesmo que demore mais.' }
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
        goal: 'Read two survival accounts for the decisions that mattered, and follow a video timeline.',
        comp: 'Você lê dois relatos de sobrevivência e identifica QUAL decisão importou de ' +
              'verdade, e acompanha uma expedição em ordem cronológica.',
        live: [
          'Reading: Mount Everest\'s Deadliest Day',
          'Reading: How to Survive a Plane Crash',
          'True/False questions and correcting the false statements',
          'Video: Team Canada\'s Everest expedition',
          'Matching events to reasons using signal words'
        ],
        bridge: 'Na aula você leu os dois textos do livro. Aqui os relatos são de clientes da ' +
                'Calm Protocol, e a pergunta muda: não é só "o que aconteceu", é "qual decisão ' +
                'foi o ponto de virada".',
        nextLive: 'Semana 4 · Writing + Expanding Your Fluency — o guia passo a passo e o ' +
                  'plano de fuga negociado.',
        ican: [
          'I can identify the single decision that changed the outcome of a story.',
          'I can correct a false statement using evidence from the text.',
          'I can follow a sequence of events in a video and put them in order.',
          'I can explain a chain of cause and effect using adverbial clauses.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'text', icon: '📖', name: 'Read: The Rule They Broke', tag: 'reading',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u5w3:read:text',
                title: '📖 A new account, the same skill',
                textTitle: 'The Rule They Broke',
                text:
                  'Every guide trained by the Calm Protocol learns the same rule before any ' +
                  'other: whatever the situation, you turn back at the agreed time, even if ' +
                  'the summit — or the goal — is close.\n\n' +
                  'In 2019, two groups on the same mountain broke that rule on the same ' +
                  'afternoon. Both were within two hours of the top. Both had agreed, that ' +
                  'morning, to turn back at two o\'clock no matter what.\n\n' +
                  'At two o\'clock, neither group turned back. Each guide later gave the same ' +
                  'reason: they believed the other group would reach the top first, and ' +
                  'neither wanted to lose the race. So they kept climbing, together, past the ' +
                  'agreed time.\n\n' +
                  'The storm that afternoon was not unusually severe. What made it dangerous ' +
                  'was timing — both groups were now descending in the dark, exhausted, an ' +
                  'hour later than planned. Even though every climber survived, three needed ' +
                  'rescue, and one lost several fingers to frostbite.\n\n' +
                  '"The mountain didn\'t change that day," the lead guide said afterward. "We ' +
                  'changed. The rule existed because we knew, in a calm moment, what we would ' +
                  'be tempted to ignore in an urgent one. And that is exactly what happened."\n\n' +
                  'Since that day, the Calm Protocol assigns an independent timekeeper to every ' +
                  'group — someone with no goal of reaching the top, whose only job is to say ' +
                  'when it is time to turn around.',
                nextLabel: 'Ready for the questions ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u5w3:q:1',
                title: '📖 What actually caused the danger that day?',
                main: '',
                options: DF.shuffle([
                  { label: 'Both groups ignored the agreed turnaround time', correct: true },
                  { label: 'The storm was unusually severe' },
                  { label: 'The mountain was more dangerous than usual' },
                  { label: 'They had the wrong equipment' }
                ]),
                expl: '"The storm... was not unusually severe. What made it dangerous was ' +
                      'timing" — o texto nega a causa óbvia.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u5w3:q:2',
                title: '📖 Why did neither group turn back at two o\'clock?',
                main: '',
                options: DF.shuffle([
                  { label: 'Neither wanted to lose an informal race to the other', correct: true },
                  { label: 'They did not know the rule existed' },
                  { label: 'The weather was too dangerous to descend' },
                  { label: 'They had already reached the summit' }
                ]),
                expl: '"they believed the other group would reach the top first, and neither ' +
                      'wanted to lose the race."' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u5w3:q:3',
                title: '📖 What changed after that day?',
                main: '',
                options: DF.shuffle([
                  { label: 'An independent timekeeper joins every group', correct: true },
                  { label: 'The company stopped organizing climbs' },
                  { label: 'The turnaround rule was removed' },
                  { label: 'Groups are no longer allowed to climb together' }
                ]),
                expl: '"the Calm Protocol assigns an independent timekeeper to every group".' },
              { ui: 'type', cat: 'fun', srsId: 'wc1u5w3:num:1',
                title: '📖 How many climbers needed rescue?',
                sub: 'Só o número.',
                answers: ['3', 'three'], exact: false,
                expl: '"three needed rescue".' },
              { ui: 'match', cat: 'voc', srsId: 'wc1u5w3:word:1',
                title: '🔗 Find the word in the text that means...',
                pairs: [
                  ['going down a mountain', 'descending'],
                  ['very tired', 'exhausted'],
                  ['damage from extreme cold', 'frostbite'],
                  ['a person who watches time on behalf of others', 'timekeeper'],
                  ['no matter the circumstances', 'no matter what']
                ] }
            ]
          },

          {
            id: 'decision', icon: '🎯', name: 'The decision that mattered', tag: 'gramática',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w3:dc:1',
                title: '🎯 Complete with the correct connector:',
                main: '___ every climber survived, three needed rescue.',
                options: DF.shuffle([
                  { label: 'Even though', correct: true }, { label: 'Because' },
                  { label: 'So that' }, { label: 'Since' }
                ]),
                expl: 'Contraste: sobreviveram, MAS mesmo assim precisaram de resgate.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w3:dc:2',
                title: '🎯 Complete with the correct connector:',
                main: '___ that day, the company assigns an independent timekeeper.',
                options: DF.shuffle([
                  { label: 'Since', correct: true }, { label: 'Because' },
                  { label: 'Even though' }, { label: 'So that' }
                ]),
                expl: 'Since + marco de tempo (that day) = "desde aquele dia".' },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w3:dc:3', unit: 5, waSec: 'Sua vez',
                title: '🎯 Name the real cause',
                prompt: 'In the story you just read, what was the SINGLE decision that caused ' +
                        'the danger? Explain using because.',
                example: 'The real danger happened because both guides ignored the two ' +
                         'o\'clock rule to avoid losing an informal race.',
                mustUse: ['because'] }
            ]
          },

          {
            id: 'video', icon: '🎬', name: 'Follow the expedition', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u5w3:dlg:1',
                title: '🎬 A trainer narrates a simulated climb',
                sub: 'Sem texto na tela. Ouça a ordem dos eventos.',
                hideText: true,
                lines: [
                  { who: 'Narrator', en: 'The team sets out on foot to adjust to the altitude.' },
                  { who: 'Narrator', en: 'A week later, they reach base camp, more than five ' +
                                        'thousand metres up.' },
                  { who: 'Narrator', en: 'As soon as the weather clears, the final push to the ' +
                                        'summit begins.' },
                  { who: 'Narrator', en: 'By the time they reach the top, the timekeeper has ' +
                                        'already called for the descent.' }
                ],
                question: 'What happens right before the final push to the summit?',
                options: DF.shuffle([
                  { label: 'The weather clears', correct: true },
                  { label: 'They reach base camp' },
                  { label: 'The timekeeper calls for descent' },
                  { label: 'They set out on foot' }
                ]),
                expl: '"As soon as the weather clears, the final push... begins" — o gatilho ' +
                      'específico do próximo passo.'
              },
              { ui: 'order', cat: 'fun', srsId: 'wc1u5w3:ord:1',
                title: '🧩 Put the expedition in order:',
                answer: 'The team sets out on foot they reach base camp a week later the weather ' +
                        'clears and the final push begins the timekeeper calls for descent',
                expl: 'início → marco intermediário → gatilho → decisão final.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Push it further', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w3+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Argue the guides\' side',
                prompt: 'Defend the guides who broke the rule — without saying it was the ' +
                        'right choice.',
                example: 'You are right that the rule exists for a reason. What I would say ' +
                         'is the pressure of an informal race is very hard to resist in the ' +
                         'moment.',
                mustUse: ['right'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de causa e efeito', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'They panicked because ___.', pool: 'crisisSit',
                  focus: 'causa', ptHint: 'Eles entraram em pânico porque ___.', n: 5 }
              ],
              backchain: [
                { text: 'Even though it was risky, they {riskAct}.',
                  ptHint: 'Mesmo sendo arriscado, eles…' }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'talk', icon: '🎯',
        title: 'Writing · Expanding Your Fluency · Outcomes',
        goal: 'Write a step-by-step guide, and follow steps to get through a simulated crisis.',
        comp: 'Você escreve um guia passo a passo pra uma situação de risco, e negocia um ' +
              'plano de fuga sob pressão simulada.',
        live: [
          'Writing: A Set of Instructions — surviving a shark attack',
          'The Writing Strategy: identifying and explaining steps in a process',
          'Writing a blog post based on your own chart of steps',
          'Expanding Your Fluency: the island escape-plan negotiation',
          'Check What You Know + voting on the best plan'
        ],
        bridge: 'Na aula você escreveu as instruções e negociou o plano da ilha com um colega. ' +
                'Aqui o guia é pra uma situação nova da Calm Protocol, e o plano de fuga ganha ' +
                'cronômetro — igual um simulado de verdade.',
        nextLive: 'Unidade 6 · In Style — orações adjetivas com pronome relativo, e moda.',
        ican: [
          'I can write clear, ordered instructions for a risky situation.',
          'I can explain why each step in a process matters, not just list it.',
          'I can negotiate an escape plan under simulated time pressure.',
          'I can rate my own progress against the four unit outcomes.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'process', icon: '📋', name: 'Explaining steps in a process', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u5w4:read:proc',
                title: '📋 A step is not a fact — it is a fact WITH a reason',
                textTitle: 'Explaining steps',
                readAloud: false,
                text:
                  'A WEAK STEP just states the action.\n' +
                  'Stay still.\n\n' +
                  'A STRONG STEP explains WHY the action matters.\n' +
                  'The first thing you should do is stay very still, because movement is ' +
                  'what attracts attention in the first place.\n\n' +
                  'THE SIGNAL WORDS THAT ORDER A PROCESS\n' +
                  'first · the next thing you should do · while · as soon as · finally\n\n' +
                  'A PROCESS PARAGRAPH\n' +
                  '1) name the situation\n' +
                  '2) list the steps in order, with signal words\n' +
                  '3) explain why at least one step matters\n' +
                  '4) close with what to do once the danger has passed\n\n' +
                  'A ARMADILHA: listar passos sem explicar nenhum deles vira uma lista de ' +
                  'compras, nao um guia. Pelo menos um passo precisa do "porque" — e o leitor ' +
                  'aprende MUITO mais com um bom porque do que com cinco passos secos.',
                nextLabel: 'Got it ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u5w4:pr:1',
                title: '📋 Which version explains the step, not just states it?',
                main: '',
                options: DF.shuffle([
                  { label: 'Check the exits first, because panic gets worse without direction.',
                    correct: true },
                  { label: 'Check the exits first.' },
                  { label: 'Exits: check them.' },
                  { label: 'Step one: exits.' }
                ]),
                expl: 'Só a primeira tem o "porque" — as outras são lista, não guia.' },
              { ui: 'order', cat: 'fun', srsId: 'wc1u5w4:pr:2',
                title: '🧩 Put the process in order:',
                answer: 'The first thing you should do is stay calm the next thing you should ' +
                        'do is check the exits finally wait for instructions',
                expl: 'first → the next thing you should do → finally.' }
            ]
          },

          {
            id: 'writing', icon: '✍️', name: 'Write the guide', tag: 'escrita',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w4:wr:1', unit: 5, waSec: 'Writing',
                title: '✍️ Sentence 1 — name the situation',
                prompt: 'Choose a risky situation (real or invented). Name it in one sentence.',
                example: 'If your car starts to slide on ice, here is what to do.',
                mustUse: ['if'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w4:wr:2', unit: 5, waSec: 'Writing',
                title: '✍️ Sentence 2 — step one, with a reason',
                prompt: 'Write the first step, and explain why it matters.',
                example: 'The first thing you should do is take your foot off the brake, ' +
                         'because braking hard makes the slide worse.',
                mustUse: ['because'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w4:wr:3', unit: 5, waSec: 'Writing',
                title: '✍️ Sentence 3 — step two',
                prompt: 'Write the second step, using The next thing you should do.',
                example: 'The next thing you should do is steer gently in the direction you ' +
                         'want to go.',
                mustUse: ['the next thing'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w4:wr:4', unit: 5, waSec: 'Writing',
                title: '✍️ Sentence 4 — after the danger passes',
                prompt: 'Close with what to do once the situation is over. Use as soon as.',
                example: 'As soon as the car stops, pull over safely and check that everyone ' +
                         'is okay.',
                mustUse: ['as soon as'],
                expl: 'Mande as quatro frases juntas por escrito — o professor corrige lendo.' }
            ]
          },

          {
            id: 'escape', icon: '🏝️', name: 'The escape-plan negotiation', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'wc1u5w4:read:sit',
                title: '🏝️ The scenario',
                textTitle: 'Stranded',
                text:
                  'You and a partner were on a training exercise for the Calm Protocol when ' +
                  'the boat sank in a storm. You both swam to a small island. You saved a ' +
                  'waterproof backpack — inside are matches, a first-aid kit, a knife, a ' +
                  'spoon, and a GPS device with a dead battery. Your phone works, but there is ' +
                  'no reception where you are standing. One of you can walk; the other injured ' +
                  'a leg in the storm and can only walk slowly, with pain.\n\n' +
                  'You need to agree on a plan before it gets dark.',
                nextLabel: 'Next ▸' },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'wc1u5w4:dlg:1',
                title: '🏝️ Two trainees negotiate the plan',
                sub: 'Repare como o problema de cada um entra na conversa.',
                lines: [
                  { who: 'Nadia', en: 'One option is to hike to the other side and look for ' +
                                      'reception.' },
                  { who: 'Elias', en: 'The problem is that I injured my leg, so I can\'t walk ' +
                                      'well.' },
                  { who: 'Nadia', en: 'Before we split up, let\'s check if there\'s a higher ' +
                                      'point nearby for reception.' },
                  { who: 'Elias', en: 'Good idea. Even though it\'s close, the climb might ' +
                                      'still hurt — but it beats splitting up in the dark.' }
                ],
                question: 'What do they decide, and why?',
                options: DF.shuffle([
                  { label: 'Check a nearby high point together instead of splitting up',
                    correct: true },
                  { label: 'Split up immediately to cover more ground' },
                  { label: 'Wait exactly where they are, doing nothing' },
                  { label: 'Argue without reaching any decision' }
                ]),
                expl: 'Eles combinam a opção de Nadia com o limite do Elias — um plano que ' +
                      'nenhum dos dois teria sozinho.'
              },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w4:esc:1', unit: 5, waSec: 'Escape plan',
                title: '🏝️ Propose your first move',
                prompt: 'Propose the first thing you should do in this situation, and why.',
                example: 'The first thing we should do is build a fire, because it keeps us ' +
                         'warm and might be seen from far away.',
                mustUse: ['the first thing'] },
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w4:esc:2', unit: 5, waSec: 'Escape plan',
                title: '🏝️ Handle the disagreement',
                prompt: 'Your partner disagrees. State the problem, offer an option, and reach ' +
                        'a compromise — alone, playing both sides.',
                example: '(60 segundos)',
                mustUse: ['one option'],
                expl: 'Este é o simulado cronometrado — o outcome 4. Mande o áudio pro ' +
                      'professor.' }
            ]
          },

          {
            id: 'outcomes', icon: '☑️', name: 'Check what you know', tag: 'autoavaliação',
            items: [
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u5w4:chk:1', unit: 5, idx: 0,
                statement: 'I can use adverbial clauses to talk about challenging situations.',
                ptHint: 'Outcome 1 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u5w4:chk:2', unit: 5, idx: 1,
                statement: 'I can reach a compromise.',
                ptHint: 'Outcome 2 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u5w4:chk:3', unit: 5, idx: 2,
                statement: 'I can explain steps in a process.',
                ptHint: 'Outcome 3 da unidade.' },
              { ui: 'selfcheck', cat: 'fun', srsId: 'wc1u5w4:chk:4', unit: 5, idx: 3,
                statement: 'I can follow steps to get through a difficult situation.',
                ptHint: 'Outcome 4 da unidade.' }
            ]
          },

          {
            id: 'progress', icon: '📝', name: 'Progress check', tag: 'teste',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w4:pt:1',
                title: '📝 Complete:', main: '___ the storm passed, they left the shelter.',
                options: DF.shuffle([
                  { label: 'After', correct: true }, { label: 'So that' },
                  { label: 'Even though' }, { label: 'Because of' }
                ]),
                expl: 'After = tempo, sequência.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w4:pt:2',
                title: '📝 Complete:', main: 'They checked the gear twice ___ nothing would fail.',
                options: DF.shuffle([
                  { label: 'so that', correct: true }, { label: 'because' },
                  { label: 'since' }, { label: 'although' }
                ]),
                expl: 'so that = propósito.' },
              { ui: 'choice', cat: 'gra', srsId: 'wc1u5w4:pt:3',
                title: '📝 Which needs the comma?',
                main: '',
                options: DF.shuffle([
                  { label: 'Because the plan was ready_ they stayed calm.', correct: true },
                  { label: 'They stayed calm because the plan was ready.' },
                  { label: 'They left after the storm passed.' },
                  { label: 'They followed the plan although it was hard.' }
                ]),
                expl: 'Oração adverbial no início pede vírgula.' },
              { ui: 'choice', cat: 'voc', srsId: 'wc1u5w4:pt:4',
                title: '📝 Complete:', main: 'The sudden noise ___ everyone ___ guard.',
                options: DF.shuffle([
                  { label: 'caught / off', correct: true }, { label: 'took / off' },
                  { label: 'made / out' }, { label: 'put / off' }
                ]),
                expl: 'catch off guard, phrasal fixo.' },
              { ui: 'choice', cat: 'fun', srsId: 'wc1u5w4:pt:5',
                title: '📝 Which one states a problem, not an option?',
                main: '',
                options: DF.shuffle([
                  { label: 'The problem is that I injured my leg.', correct: true },
                  { label: 'One option is to hike to the other side.' },
                  { label: 'Before we do that, let\'s check the map.' },
                  { label: 'So let\'s try the shorter route.' }
                ]),
                expl: '"The problem is that" nomeia o obstáculo.' },
              { ui: 'match', cat: 'gra', srsId: 'wc1u5w4:pt:6',
                title: '🔗 Match the connector to its job:',
                pairs: [
                  ['after / when / while', 'time'],
                  ['because / since', 'reason'],
                  ['although / even though', 'contrast'],
                  ['so that', 'purpose']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'wc1u5w4:pt:7',
                title: '🧩 Build the sentence:',
                answer: 'The first thing you should do is stay calm because panic makes ' +
                        'everything worse',
                expl: 'passo + because + razão, tudo numa frase só.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'The full simulation, no notes', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'wc1u5w4+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Ninety seconds, timed',
                prompt: 'Give a full step-by-step guide for a crisis of your choice, in ninety ' +
                        'seconds, with at least two explained steps.',
                example: '(90 segundos)',
                expl: 'É o formato exato do outcome 3 e 4 juntos. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Treino infinito de guia', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The next thing you should do is ___.', pool: 'calmStep',
                  focus: 'passos', ptHint: 'A próxima coisa a fazer é ___.', n: 5 }
              ],
              backchain: [
                { text: 'The first thing you should do is {calmStep}.',
                  ptHint: 'A primeira coisa a fazer é…' }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
