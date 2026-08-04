/* ENGLISH FLOW — week/plan-starter-03.js
   BUSINESS STARTER · UNIT 3 "Workplace"

   Numeração corrida do Felipe: Unit 3 = semanas 9–12.
     semana  9 = U3 W1 · Working with words (lugares + adjetivos)
     semana 10 = U3 W2 · Language at work (We/They are + Wh- questions)
     semana 11 = U3 W3 · Practically speaking + Business communication
     semana 12 = U3 W4 · Talking point + teste

   Mesma regra das unidades anteriores: O APP NÃO REPETE A AULA.
   Universo autoral Marcom Global — nenhum nome, empresa ou diálogo do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const PLACES = [
    { en: 'a warehouse', say: 'warehouse', pt: 'um galpão / almoxarifado' },
    { en: 'a factory', say: 'factory', pt: 'uma fábrica' },
    { en: 'a cafeteria', say: 'cafeteria', pt: 'um refeitório' },
    { en: 'a reception', say: 'reception', pt: 'uma recepção' },
    { en: 'an office', say: 'office', pt: 'um escritório' },
    { en: 'a car park', say: 'car park', pt: 'um estacionamento' }
  ];
  const EXTRA_PLACES = [
    { en: 'a meeting room', say: 'meeting room', pt: 'uma sala de reunião' },
    { en: 'a lab', say: 'lab', pt: 'um laboratório' },
    { en: 'a storeroom', say: 'storeroom', pt: 'um depósito' }
  ];

  function radar(p, pool) {
    const others = DF.shuffle(pool.filter(function (x) { return x.say !== p.say; })).slice(0, 3);
    return {
      ui: 'choice', cat: 'pro', srsId: 'bs3w1:radar:' + p.say,
      title: '🏭 Que lugar você ouviu?',
      tts: p.say, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: p.say,
      options: DF.shuffle([{ label: p.say, correct: true }].concat(
        others.map(function (o) { return { label: o.say }; }))),
      expl: p.say + ' = ' + p.pt, feedbackTts: p.say
    };
  }

  DF.PLAN.starter[3] = {
    unit: 3,
    title: 'Workplace',
    subtitle: 'Por dentro da empresa',
    icon: '🏭',

    mindmap: {
      center: 'Workplace',
      sub: 'Os lugares do trabalho e quem está onde',
      branches: [
        {
          icon: '🏭', name: 'Places at work',
          leaves: PLACES.map(function (p) { return { en: p.en, pt: p.pt }; })
            .concat(EXTRA_PLACES.map(function (p) { return { en: p.en + ' ·+', pt: p.pt }; })),
          note: '<b>reception</b> normalmente vem sem artigo quando é o lugar: ' +
                '"He\'s in <b>reception</b>." Já os outros levam artigo: "in <b>the</b> warehouse".'
        },
        {
          icon: '🎨', name: 'Adjectives — os opostos',
          leaves: [
            { en: 'new ↔ old', pt: 'novo ↔ velho' },
            { en: 'big ↔ small', pt: 'grande ↔ pequeno' },
            { en: 'good ↔ bad', pt: 'bom ↔ ruim' }
          ],
          note: 'São seis palavras que abrem centenas de frases. Aprenda em pares — ' +
                'o cérebro guarda opostos melhor do que palavras soltas.'
        },
        {
          icon: '⚠️', name: 'Adjective + noun — A ARMADILHA',
          leaves: [
            { en: 'The office is new.', pt: 'O escritório é novo.' },
            { en: "It's a new office. ✅", pt: 'É um escritório novo.' },
            { en: "It's an office new. ❌", pt: 'errado — ordem do português' },
            { en: 'a big warehouse', pt: 'um galpão grande' },
            { en: 'an old factory', pt: 'uma fábrica velha' }
          ],
          note: 'Em português o adjetivo vem <b>depois</b> ("escritório novo"); em inglês ' +
                'vem <b>antes</b> ("<b>new</b> office"). É a diferença estrutural que mais ' +
                'trava brasileiro. Repita até soar natural.'
        },
        {
          icon: '👥', name: 'We / They are',
          leaves: [
            { en: "We're in the warehouse.", pt: 'afirmativa' },
            { en: "They aren't in the factory.", pt: 'negativa' },
            { en: 'Are they in reception?', pt: 'pergunta' },
            { en: 'Yes, we are. / No, they aren\'t.', pt: 'respostas curtas' }
          ],
          note: '<b>Cuidado:</b> "Yes, we are." ✅ · "Yes, we\'re." ❌ — a resposta curta ' +
                'positiva nunca contrai. É a mesma regra de I am e he is.'
        },
        {
          icon: '❓', name: 'Wh- questions',
          leaves: [
            { en: 'What = a thing', pt: "What's your job? → Engineer." },
            { en: 'Where = a place', pt: "Where's the factory? → In Poznań." },
            { en: 'Who = a person', pt: 'Who are they? → The sales reps.' },
            { en: "What's / Where's / Who's", pt: 'singular → \'s (is)' },
            { en: 'What are / Where are / Who are', pt: 'plural → are' }
          ],
          note: '<b>Who</b> pergunta pessoa <b>ou cargo</b>: "Who are they?" pode ser ' +
                '"Tom and Camila" ou "The sales reps" — as duas respostas servem.'
        }
      ]
    },

    weeks: [

      // ══════════════════ SEMANA 1 (a "semana 9" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🏭',
        title: 'Working with words',
        goal: 'Descrever os lugares da sua empresa usando adjetivos.',
        comp: 'Você diz que lugares existem na sua empresa e descreve cada um ' +
              'com o adjetivo na ordem certa do inglês (a new office).',
        live: [
          'Listen and read — o mapa da empresa e suas unidades',
          'Match the words to the pictures — os 6 lugares',
          'Listen and repeat — a sílaba tônica de cada lugar',
          'Os adjetivos: new/old, big/small, good/bad',
          'Tip: Adjective + noun',
          'Work in pairs: falar dos lugares do seu próprio trabalho'
        ],
        bridge: 'Na aula você viu os 6 lugares e os adjetivos, e praticou em dupla. ' +
                'Aqui você treina a <b>inversão</b> adjetivo+substantivo até ela sair ' +
                'automática — é a diferença estrutural que mais trava brasileiro — ' +
                'e ganha 3 lugares que o livro não traz.',
        nextLive: 'Semana 2 · Language at work — We / They are e as perguntas ' +
                  'com What, Where e Who.',
        ican: [
          'I can name the places in my company.',
          'I can describe a place with an adjective.',
          'I can put the adjective before the noun, like English does.',
          'I can say what is new, old, big, small, good or bad at work.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '👂', name: 'Lugares — só de ouvido', tag: 'listening',
            items: PLACES.map(function (p) { return radar(p, PLACES.concat(EXTRA_PLACES)); })
          },

          {
            id: 'radar2', icon: '➕', name: '3 lugares que o livro não traz', tag: 'listening',
            items: EXTRA_PLACES.map(function (p) { return radar(p, PLACES.concat(EXTRA_PLACES)); })
          },

          {
            id: 'stress', icon: '🥁', name: 'A força da palavra', tag: 'pronúncia',
            items: [
              { ui: 'stress', cat: 'pro', srsId: 'bs3w1:str:ware', word: 'warehouse',
                pattern: 'Oo', decoys: ['oO'], syl: 'WARE-house' },
              { ui: 'stress', cat: 'pro', srsId: 'bs3w1:str:fact', word: 'factory',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'FAC-to-ry' },
              { ui: 'stress', cat: 'pro', srsId: 'bs3w1:str:rec', word: 'reception',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 're-CEP-tion' },
              { ui: 'stress', cat: 'pro', srsId: 'bs3w1:str:off', word: 'office',
                pattern: 'Oo', decoys: ['oO'], syl: 'OF-fice',
                expl: 'Nunca "o-FFI-ce" — a força vai no OF.' },
              { ui: 'stress', cat: 'pro', srsId: 'bs3w1:str:caf', word: 'cafeteria',
                pattern: 'ooOoo', decoys: ['oOooo', 'Ooooo'], syl: 'ca-fe-TE-ri-a',
                expl: 'Cinco sílabas, força na quarta de trás pra frente: ca-fe-TE-ri-a.' }
            ]
          },

          // TRANSFORMATION DRILL — a inversão adjetivo+substantivo
          {
            id: 'transform', icon: '🔀', name: 'Drill da inversão', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs3w1:tf:1', unit: 3, waSec: 'Drill · inversão',
                title: '🔀 O adjetivo pula pra frente',
                rounds: [
                  { base: 'The office is new.', cmd: 'Adjective + noun', answer: "It's a new office." },
                  { base: 'The factory is old.', cmd: 'Adjective + noun', answer: "It's an old factory." },
                  { base: 'The cafeteria is good.', cmd: 'Adjective + noun', answer: "It's a good cafeteria." },
                  { base: 'The car park is big.', cmd: 'Adjective + noun', answer: "It's a big car park." },
                  { base: 'The warehouse is small.', cmd: 'Adjective + noun', answer: "It's a small warehouse." },
                  { base: 'The reception is new.', cmd: 'Adjective + noun', answer: "It's a new reception." }
                ] }
            ]
          },

          // DRILL de vocabulário (o foco da coluna Working with words)
          {
            id: 'drill', icon: '🔁', name: 'Drill de vocabulário', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs3w1:drl:there', unit: 3, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 1 — o lugar troca', focus: 'lugar',
                frame: "We have ___ here.", ptHint: 'Temos ___ aqui.',
                slots: ['a warehouse', 'a factory', 'a cafeteria', 'an office', 'a car park', 'a meeting room'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs3w1:drl:adj', unit: 3, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 2 — o adjetivo troca', focus: 'adjetivo',
                frame: "It's a ___ office.", ptHint: 'É um escritório ___.',
                slots: ['new', 'big', 'small', 'good'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs3w1:drl:my', unit: 3, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 3 — descrevendo o lugar', focus: 'lugar',
                frame: 'The ___ is very big.', ptHint: 'O(A) ___ é muito grande.',
                slots: ['warehouse', 'factory', 'cafeteria', 'car park', 'office'] }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs3w1:bc:1', unit: 3, waSec: 'Backchain',
                title: '🧱 A fábrica completa', ptHint: 'É uma fábrica com um galpão grande.',
                chain: ['warehouse', 'a big warehouse', 'with a big warehouse',
                        'a factory with a big warehouse', "It's a factory with a big warehouse."] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs3w1:bc:2', unit: 3, waSec: 'Backchain',
                title: '🧱 A lista de lugares', ptHint: 'Temos escritórios novos, um estacionamento e um bom refeitório.',
                chain: ['cafeteria', 'a good cafeteria', 'and a good cafeteria',
                        'a car park and a good cafeteria',
                        'We have new offices, a car park and a good cafeteria.'] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Ouça e repita', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w1:rep:1', unit: 3, waSec: 'Working with words', reps: 3,
                title: '🎤 A ordem certa — 3x:', target: "It's a new office.", ptHint: 'É um escritório novo.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w1:rep:2', unit: 3, waSec: 'Working with words',
                title: '🎤 Agora com "an":', target: "It's an old factory.", ptHint: 'É uma fábrica velha.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w1:rep:3', unit: 3, waSec: 'Working with words',
                title: '🎤 Perguntando:', target: 'Is the cafeteria good or bad?', ptHint: 'O refeitório é bom ou ruim?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w1:rep:4', unit: 3, waSec: 'Working with words',
                title: '🎤 A palavra mais longa:', target: 'The cafeteria is very good.', ptHint: 'O refeitório é muito bom.' }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Situações novas', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs3w1:dlg:1',
                title: '🎧 Mostrando a unidade nova',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Beatriz', en: 'This is our new factory in Lagos.' },
                  { who: 'Hendrik', en: 'It looks big. Is the warehouse new too?' },
                  { who: 'Beatriz', en: "No, the warehouse is old, but it's very big." },
                  { who: 'Hendrik', en: 'And the cafeteria?' },
                  { who: 'Beatriz', en: "It's small, but the food is good." }
                ],
                question: 'Como é o galpão (warehouse)?',
                options: DF.shuffle([
                  { label: 'Velho, mas muito grande', correct: true },
                  { label: 'Novo e grande' }, { label: 'Pequeno e novo' },
                  { label: 'Ela não falou' }
                ]),
                expl: '"the warehouse is old, but it\'s very big."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs3w1:dlg:2',
                title: '🎧 Reclamando do estacionamento',
                lines: [
                  { who: 'Tom', en: 'How is the new office in Dublin?' },
                  { who: 'Camila', en: "The office is good, but the car park is small." },
                  { who: 'Tom', en: 'Is there a cafeteria?' },
                  { who: 'Camila', en: "Yes, and it's a very good cafeteria." }
                ],
                question: 'Qual é o problema em Dublin?',
                options: DF.shuffle([
                  { label: 'O estacionamento é pequeno', correct: true },
                  { label: 'O escritório é velho' }, { label: 'Não tem refeitório' },
                  { label: 'A comida é ruim' }
                ]),
                expl: '"the car park is small" — o resto é elogio.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs3w1:dlg:3',
                title: '🎧 Três unidades, três descrições',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Yuki', en: 'In Tokyo we have a small office and a good cafeteria.' },
                  { who: 'Aisha', en: 'In Kuwait we have a big warehouse, but the office is old.' },
                  { who: 'Tom', en: 'And in Lagos we have a new factory and a big car park.' }
                ],
                question: 'Onde fica a fábrica nova?',
                options: DF.shuffle([
                  { label: 'Lagos', correct: true }, { label: 'Tokyo' },
                  { label: 'Kuwait' }, { label: 'Dublin' }
                ]),
                expl: '"in Lagos we have a new factory and a big car park."'
              }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'bs3w1:match:opp',
                title: '🔗 Ligue os adjetivos opostos:',
                pairs: [['new', 'old'], ['big', 'small'], ['good', 'bad']] },
              { ui: 'match', cat: 'voc', srsId: 'bs3w1:match:place',
                title: '🔗 Ligue o lugar ao que acontece nele:',
                pairs: [
                  ['warehouse', 'we keep the products'],
                  ['cafeteria', 'we have lunch'],
                  ['reception', 'visitors arrive'],
                  ['car park', 'we leave the car']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w1:c:1',
                title: '⚠️ Qual está certa?', main: 'O escritório é novo.',
                options: DF.shuffle([
                  { label: "It's a new office.", correct: true },
                  { label: "It's an office new.", trap: true },
                  { label: "It's a office new." }, { label: "It's new a office." }
                ]),
                trapNote: 'Essa é a ordem do português. Em inglês o adjetivo vem ANTES.',
                expl: 'adjetivo + substantivo: a <b>new</b> office.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w1:c:2',
                title: '🔤 Complete com a / an:', main: "It's ___ old factory.",
                options: DF.shuffle([{ label: 'an', correct: true }, { label: 'a' }]),
                expl: 'O artigo concorda com o som seguinte — aqui é "old" → an old factory.' },
              { ui: 'order', cat: 'gra', srsId: 'bs3w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'It is a big warehouse',
                expl: 'It is + artigo + adjetivo + substantivo.' },
              { ui: 'order', cat: 'gra', srsId: 'bs3w1:ord:2',
                title: '🧩 Monte a frase:', answer: 'We have a good cafeteria here',
                expl: 'adjetivo antes do substantivo: a good cafeteria.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Seu trabalho de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs3w1:build:me', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Como é o SEU escritório',
                prompt: 'Descreva o lugar onde você trabalha usando um adjetivo.',
                example: "My office is small, but it's good.",
                mustUse: ['my'],
                expl: 'Mande o áudio — o professor confere a ordem adjetivo+substantivo.' },
              { ui: 'build', cat: 'fun', srsId: 'bs3w1:build:list', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Os lugares da sua empresa',
                prompt: 'Diga dois ou três lugares que existem no seu trabalho.',
                example: 'We have a car park, a cafeteria and a big warehouse.',
                mustUse: ['have'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Descreva sem pensar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs3w1+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Três lugares, três adjetivos',
                prompt: 'Descreva três lugares do seu trabalho, cada um com um adjetivo diferente.',
                example: 'We have a new office, a big car park and a small cafeteria.',
                mustUse: ['and'] },
              { ui: 'build', cat: 'fun', srsId: 'bs3w1+:b2', unit: 3, waSec: 'Praticar mais',
                title: '🔥 O elogio com ressalva',
                prompt: 'Diga algo bom e algo ruim do seu trabalho, ligando com "but".',
                example: "The office is new, but the car park is small.",
                mustUse: ['but'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de lugares', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 A inversão — frases novas a cada rodada',
                templates: ['The office is {adj}.', 'The factory is {adj}.',
                            'The warehouse is {adj}.', 'The cafeteria is {adj}.',
                            'The car park is {adj}.'],
                cmds: ['Adjective + noun'],
                n: 6
              },
              drills: [
                { frame: 'We have ___ here.', pool: 'place', focus: 'lugar',
                  ptHint: 'Temos ___ aqui.', n: 5 },
                { frame: "It's a ___ office.", pool: 'adj', focus: 'adjetivo',
                  ptHint: 'É um escritório ___.', n: 4 }
              ],
              backchain: [
                { text: "It's a {adj} {placeBare}.", ptHint: 'É um(a)… …' }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 10" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '👥',
        title: 'Language at work',
        goal: 'Falar de duas ou mais pessoas (We/They are) e perguntar com What, Where e Who.',
        comp: 'Você diz onde um grupo está, responde "Yes, we are / No, they aren\'t" ' +
              'e escolhe a palavra certa da pergunta: What, Where ou Who.',
        live: [
          'Look at the pictures — quem está onde',
          'Language point 1: We/They are · aren\'t · Are…?',
          'Ask and answer em dupla sobre as pessoas das fotos',
          'Listen — três conversas, onde estão as pessoas',
          'Language point 2: What = coisa · Where = lugar · Who = pessoa',
          'Tip: Who…? pergunta pessoa ou cargo'
        ],
        bridge: 'Na aula vocês montaram a tabela e perguntaram um pro outro sobre as ' +
                'fotos. Aqui você trava a terceira versão da mesma armadilha ' +
                '("Yes, we are" ✅ / "Yes, we\'re" ❌) e treina escolher entre ' +
                'What, Where e Who sem pensar.',
        nextLive: 'Semana 3 · Practically speaking — endereços de e-mail e site — ' +
                  'e Business communication: pedidos por e-mail.',
        ican: [
          "I can say where we or they are.",
          "I can use aren't to say where people are not.",
          'I can answer: Yes, we are. / No, they aren\'t.',
          'I can choose between What, Where and Who.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — We/They e Wh-', tag: 'estudo', mindmap: true },

          {
            id: 'point', icon: '📐', name: 'A regra num relance', tag: 'estudo',
            items: [
              {
                ui: 'read', cat: 'gra', info: true,
                title: '📐 To be — we / they',
                textTitle: 'As quatro formas',
                text: 'POSITIVO\nWe are → We\'re in the warehouse.\nThey are → They\'re in the factory.\n\n' +
                      'NEGATIVO\nWe are not → We aren\'t in reception.\nThey are not → They aren\'t here.\n\n' +
                      'PERGUNTA\nAre we/they…? → Are they in the car park?\n\n' +
                      'RESPOSTA CURTA\nYes, we are. (nunca "Yes, we\'re.")\nNo, they aren\'t.',
                readAloud: false
              },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:g:short',
                title: '⚠️ A armadilha, agora no plural:', main: 'Are you in the factory?',
                options: DF.shuffle([
                  { label: 'Yes, we are.', correct: true }, { label: "Yes, we're.", trap: true },
                  { label: 'Yes, we do.' }, { label: 'Yes, are we.' }
                ]),
                trapNote: 'Terceira vez que essa armadilha aparece: I am, he is, we are — ' +
                          'a positiva curta NUNCA contrai.',
                expl: 'Yes, we are.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:g:neg',
                title: '🔧 Complete a negativa:', main: "The engineers ___ in reception. They're in the factory.",
                options: DF.shuffle([
                  { label: "aren't", correct: true }, { label: "isn't" },
                  { label: "not" }, { label: "don't" }
                ]),
                expl: 'plural → aren\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:g:wh1',
                title: '❓ Qual palavra pergunta LUGAR?',
                options: DF.shuffle([
                  { label: 'Where', correct: true }, { label: 'What' },
                  { label: 'Who' }, { label: 'When' }
                ]),
                expl: 'Where = lugar · What = coisa · Who = pessoa.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:g:wh2',
                title: '❓ Qual pergunta cabe aqui?', main: '___ are they? — The sales reps.',
                options: DF.shuffle([
                  { label: 'Who', correct: true }, { label: 'Where' },
                  { label: 'What' }, { label: 'How' }
                ]),
                expl: 'A resposta é pessoa/cargo → Who are they?' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:g:wh3',
                title: "❓ Singular ou plural?", main: "Where ___ the warehouses?",
                options: DF.shuffle([
                  { label: 'are', correct: true }, { label: "'s" },
                  { label: 'is' }, { label: 'am' }
                ]),
                expl: 'warehouses é plural → Where ARE the warehouses?' }
            ]
          },

          {
            id: 'dlg', icon: '🎧', name: 'Quem está onde', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs3w2:dlg:1',
                title: '🎧 Procurando a equipe',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Hendrik', en: 'Are Tom and Camila in the office?' },
                  { who: 'Beatriz', en: "No, they aren't. They're in the warehouse." },
                  { who: 'Hendrik', en: 'And the engineers?' },
                  { who: 'Beatriz', en: "They're in the factory. We're all very busy today." }
                ],
                question: 'Onde estão o Tom e a Camila?',
                options: DF.shuffle([
                  { label: 'No galpão (warehouse)', correct: true },
                  { label: 'No escritório' }, { label: 'Na fábrica' },
                  { label: 'Na recepção' }
                ]),
                expl: '"No, they aren\'t. They\'re in the warehouse."'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs3w2:dlg:2',
                title: '🎧 As três perguntas Wh-',
                lines: [
                  { who: 'Visitante', en: "What's your company?" },
                  { who: 'Yuki', en: "It's Aurora Systems." },
                  { who: 'Visitante', en: 'Who are they?' },
                  { who: 'Yuki', en: 'Tom and Camila. They\'re the sales reps.' },
                  { who: 'Visitante', en: "And where's the cafeteria?" },
                  { who: 'Yuki', en: "It's next to reception." }
                ],
                question: 'Qual pergunta trouxe o nome de duas PESSOAS?',
                options: DF.shuffle([
                  { label: 'Who are they?', correct: true },
                  { label: "What's your company?" }, { label: "Where's the cafeteria?" },
                  { label: 'nenhuma' }
                ]),
                expl: 'Who = pessoa. What = coisa. Where = lugar.'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs3w2:dlg:3',
                title: '🎧 No rádio da fábrica',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Aisha', en: 'Are you in the car park?' },
                  { who: 'Tom', en: "No, we aren't. We're in the storeroom." },
                  { who: 'Aisha', en: 'Are the boxes there too?' },
                  { who: 'Tom', en: 'Yes, they are.' }
                ],
                question: 'Onde o Tom está?',
                options: DF.shuffle([
                  { label: 'No depósito (storeroom)', correct: true },
                  { label: 'No estacionamento' }, { label: 'Na fábrica' },
                  { label: 'No escritório' }
                ]),
                expl: '"No, we aren\'t. We\'re in the storeroom."'
              }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Drill de transformação', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs3w2:tf:1', unit: 3, waSec: 'Drill · transformação',
                title: '🔀 Negative e Question — we / they',
                rounds: [
                  { base: 'They are in the factory.', cmd: 'Negative', answer: 'They are not in the factory.' },
                  { base: 'They are in the factory.', cmd: 'Question', answer: 'Are they in the factory?' },
                  { base: 'We are in reception.', cmd: 'Negative', answer: 'We are not in reception.' },
                  { base: 'We are in reception.', cmd: 'Question', answer: 'Are we in reception?' },
                  { base: 'They are the sales reps.', cmd: 'Question', answer: 'Are they the sales reps?' },
                  { base: 'We are in the car park.', cmd: 'Negative', answer: 'We are not in the car park.' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs3w2:tf:2', unit: 3, waSec: 'Drill · transformação',
                title: '🔀 A resposta curta',
                rounds: [
                  { base: 'Are they in the warehouse?', cmd: 'Short answer', answer: 'Yes, they are.' },
                  { base: 'Are you in the factory?', cmd: 'Short answer', answer: "No, we aren't." },
                  { base: 'Are the engineers in reception?', cmd: 'Short answer', answer: "No, they aren't." },
                  { base: 'Are we in the right office?', cmd: 'Short answer', answer: 'Yes, we are.' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs3w2:ct:1', unit: 3, waSec: 'Drill · contração',
                title: "✂️ Contraia — como se fala de verdade",
                rounds: [
                  { base: 'They are in the office.', cmd: 'Contraction', answer: "They're in the office." },
                  { base: 'We are in the cafeteria.', cmd: 'Contraction', answer: "We're in the cafeteria." },
                  { base: 'They are not in the factory.', cmd: 'Contraction', answer: "They aren't in the factory." },
                  { base: 'We are not in reception.', cmd: 'Contraction', answer: "We aren't in reception." }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de substituição', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'bs3w2:drl:q', unit: 3, waSec: 'Drill · gramática',
                title: '🔁 Drill 1 — a pergunta se repete', focus: 'lugar',
                frame: 'Are they in ___?', ptHint: 'Eles estão em ___?',
                slots: ['the warehouse', 'the factory', 'the cafeteria', 'reception', 'the car park'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs3w2:drl:neg', unit: 3, waSec: 'Drill · gramática',
                title: '🔁 Drill 2 — a correção', focus: 'lugar',
                frame: "No, they aren't. They're in ___.", ptHint: 'Não. Eles estão em ___.',
                slots: ['the office', 'the factory', 'the storeroom', 'the meeting room'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs3w2:drl:wh', unit: 3, waSec: 'Drill · gramática',
                title: '🔁 Drill 3 — Where are…?', focus: 'lugar/coisa',
                frame: 'Where are the ___?', ptHint: 'Onde estão os/as ___?',
                slots: ['warehouses', 'offices', 'factories', 'engineers', 'sales reps'] }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs3w2:bc:1', unit: 3, waSec: 'Backchain',
                title: '🧱 A correção completa', ptHint: 'Não, não estamos. Estamos no estacionamento.',
                chain: ['park', 'the car park', 'in the car park', "We're in the car park",
                        "No, we aren't. We're in the car park."] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs3w2:bc:2', unit: 3, waSec: 'Backchain',
                title: '🧱 Perguntando onde estão', ptHint: 'Onde estão os novos escritórios?',
                chain: ['offices', 'the new offices', 'are the new offices',
                        'Where are the new offices?'] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Até sair automático', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w2:rep:q', unit: 3, waSec: 'Language at work',
                title: '🎤 A pergunta:', target: 'Are they in the warehouse?', ptHint: 'Eles estão no galpão?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w2:rep:a1', unit: 3, waSec: 'Language at work', reps: 3,
                title: '🎤 A positiva — 3x, sem contrair:', target: 'Yes, we are.', ptHint: 'Sim, estamos.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w2:rep:a2', unit: 3, waSec: 'Language at work',
                title: '🎤 A negativa com correção:', target: "No, they aren't. They're in the factory.",
                ptHint: 'Não, não estão. Estão na fábrica.' },
              { ui: 'build', cat: 'gra', srsId: 'bs3w2:build:1', unit: 3, waSec: 'Language at work',
                title: '🗣️ Diga onde vocês NÃO estão',
                prompt: 'Alguém procurou vocês no lugar errado. Corrija usando "we aren\'t".',
                example: "No, we aren't in the office. We're in the meeting room.",
                mustUse: ["aren't"] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:p:1',
                title: "🔧 Complete com 're, are ou aren't:", main: "They're in the warehouse. They ___ in the factory.",
                options: DF.shuffle([{ label: "aren't", correct: true }, { label: "'re" }, { label: 'are' }]),
                expl: 'Estão no galpão, então NÃO estão na fábrica.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:p:2',
                title: '🔍 Corrija o verbo:', main: 'Are the offices new? — No, they ___.',
                options: DF.shuffle([
                  { label: "aren't", correct: true }, { label: "isn't", trap: true },
                  { label: "amn't" }, { label: "not" }
                ]),
                trapNote: 'offices é plural → aren\'t, não isn\'t.',
                expl: "plural → aren't." },
              { ui: 'match', cat: 'gra', srsId: 'bs3w2:match:wh',
                title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ["What's your job?", 'Sales assistant.'],
                  ['Where are you from?', 'Canada.'],
                  ['Who is he?', 'My manager.'],
                  ['Where are the new offices?', 'In Toronto.']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:p:3',
                title: '❓ Complete a pergunta:', main: "___ your surname? — Jones.",
                options: DF.shuffle([
                  { label: "What's", correct: true }, { label: "Where's" },
                  { label: "Who's" }, { label: 'What are' }
                ]),
                expl: 'sobrenome é uma coisa → What\'s.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w2:p:4',
                title: '❓ Complete a pergunta:', main: '___ the factories? — In Singapore and Hong Kong.',
                options: DF.shuffle([
                  { label: 'Where are', correct: true }, { label: "Where's" },
                  { label: 'What are' }, { label: 'Who are' }
                ]),
                expl: 'lugar + plural → Where are.' },
              { ui: 'order', cat: 'gra', srsId: 'bs3w2:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Are they in the car park',
                expl: 'Are + they + lugar?' },
              { ui: 'order', cat: 'gra', srsId: 'bs3w2:ord:2',
                title: '🧩 Monte a negativa:', answer: "We aren't in the warehouse",
                expl: "We + aren't + lugar." }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Três perguntas Wh- seguidas', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'gra', srsId: 'bs3w2+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 What, Where e Who numa fala só',
                prompt: 'Faça as três perguntas seguidas para alguém que você acabou de conhecer.',
                example: "What's your company? Where's your head office? Who's your manager?",
                mustUse: ['what', 'where', 'who'] },
              { ui: 'build', cat: 'gra', srsId: 'bs3w2+:b2', unit: 3, waSec: 'Praticar mais',
                title: '🔥 Corrija duas informações',
                prompt: 'Disseram que vocês estão na fábrica e que os engenheiros estão na recepção. Corrija as duas.',
                example: "No, we aren't in the factory — we're in the office. And the engineers aren't in reception.",
                mustUse: ["aren't"] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de gramática', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 Transforme — deixas novas a cada rodada',
                templates: ['They are in {place}.', 'We are in {place}.',
                            'He is in {place}.', 'She is in {place}.'],
                cmds: ['Negative', 'Question', 'Contraction'],
                n: 8
              },
              drills: [
                { frame: 'Are they in ___?', pool: 'place', focus: 'lugar',
                  ptHint: 'Eles estão em ___?', n: 5 },
                { frame: "No, we aren't. We're in ___.", pool: 'place', focus: 'lugar',
                  ptHint: 'Não. Estamos em ___.', n: 5 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANAS 3–4 (destravam nas próximas lives) ══════════════════
      // ══════════════════ SEMANA 3 (a "semana 11" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📧',
        title: 'Practically speaking',
        goal: 'Dizer endereços de e-mail e site, e escrever um pedido por e-mail.',
        comp: 'Você passa seu e-mail por telefone sem erro de símbolo e escreve ' +
              'um pedido por e-mail, escolhendo entre formal e informal.',
        live: [
          'Listen and repeat — endereços de site e e-mail',
          'Os símbolos: dot · dash · at · underscore',
          '"Can you repeat that?"',
          'Business communication: os quatro e-mails do livro',
          'Key expressions — abertura, pedido, anexo, encerramento',
          'Work in pairs: trocar endereços e completar a tabela'
        ],
        bridge: 'Na aula você ouviu os endereços e viu os e-mails do livro. ' +
                'Aqui você treina os <b>símbolos de ouvido</b> (dot vs dash é onde ' +
                'todo mundo erra) e drilla a virada <b>informal → formal</b>, que é ' +
                'a decisão que você toma toda vez que escreve.',
        nextLive: 'Semana 4 · Talking point — what\'s the answer? — e o teste que ' +
                  'fecha a Unit 3.',
        ican: [
          'I can say my email address out loud.',
          'I can say dot, dash, at and underscore correctly.',
          'I can ask someone to repeat an address.',
          'I can write a short email request.',
          'I can choose between formal and informal.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — símbolos e e-mail', tag: 'estudo', mindmap: true },

          {
            id: 'symbols', icon: '👂', name: 'Os símbolos — só de ouvido', tag: 'listening',
            items: [
              { ui: 'choice', cat: 'pro', srsId: 'bs3w3:sym:at',
                title: '👂 Que símbolo você ouviu?',
                tts: 'at', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'at',
                options: DF.shuffle([
                  { label: '@', correct: true }, { label: '.' }, { label: '-' }, { label: '_' }
                ]),
                expl: 'at = @', feedbackTts: 'at' },
              { ui: 'choice', cat: 'pro', srsId: 'bs3w3:sym:dot',
                title: '👂 Que símbolo você ouviu?',
                tts: 'dot', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'dot',
                options: DF.shuffle([
                  { label: '.', correct: true }, { label: '-' }, { label: '@' }, { label: '_' }
                ]),
                expl: 'dot = ponto (.)', feedbackTts: 'dot' },
              { ui: 'choice', cat: 'pro', srsId: 'bs3w3:sym:dash',
                title: '👂 Cuidado — dot ou dash?',
                tts: 'dash', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'dash',
                options: DF.shuffle([
                  { label: '- (hífen)', correct: true }, { label: '. (ponto)', trap: true },
                  { label: '_' }, { label: '@' }
                ]),
                trapNote: 'dot e dash soam parecido — é o par que mais gera endereço errado.',
                expl: 'dash = hífen (-) · dot = ponto (.)', feedbackTts: 'dash' },
              { ui: 'choice', cat: 'pro', srsId: 'bs3w3:sym:under',
                title: '👂 Que símbolo você ouviu?',
                tts: 'underscore', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'underscore',
                options: DF.shuffle([
                  { label: '_', correct: true }, { label: '-' }, { label: '.' }, { label: '@' }
                ]),
                expl: 'underscore = _ (o tracinho embaixo)', feedbackTts: 'underscore' },
              { ui: 'choice', cat: 'pro', srsId: 'bs3w3:sym:slash',
                title: '👂 Um extra que o livro não traz:',
                tts: 'slash', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'slash',
                options: DF.shuffle([
                  { label: '/', correct: true }, { label: '\\' }, { label: '-' }, { label: '_' }
                ]),
                expl: 'slash = / — aparece em endereço de site.', feedbackTts: 'slash' }
            ]
          },

          {
            id: 'address', icon: '📧', name: 'Qual endereço você ouviu?', tag: 'listening',
            items: [
              { ui: 'choice', cat: 'spl', srsId: 'bs3w3:ad:1',
                title: '📧 Ouça e marque o endereço certo:',
                tts: 'www dot marcom dash global dot com', ttsLabel: '🔊 Ouvir',
                autoPlay: true, showIfNoTTS: 'www dot marcom dash global dot com',
                options: DF.shuffle([
                  { label: 'www.marcom-global.com', correct: true },
                  { label: 'www.marcom.global.com', trap: true },
                  { label: 'www.marcomglobal.com' }
                ]),
                trapNote: 'Você trocou dash (-) por dot (.).',
                expl: 'dash = hífen → marcom-global.' },
              { ui: 'choice', cat: 'spl', srsId: 'bs3w3:ad:2',
                title: '📧 Ouça e marque o endereço certo:',
                tts: 'b dot lima at aurora dot com dot br', ttsLabel: '🔊 Ouvir',
                autoPlay: true, showIfNoTTS: 'b dot lima at aurora dot com dot br',
                options: DF.shuffle([
                  { label: 'b.lima@aurora.com.br', correct: true },
                  { label: 'b_lima@aurora.com.br' },
                  { label: 'b-lima@aurora.com.br' }
                ]),
                expl: 'dot = ponto → b.lima' },
              { ui: 'choice', cat: 'spl', srsId: 'bs3w3:ad:3',
                title: '📧 Agora com underscore:',
                tts: 'tom underscore okafor at vertex dot co dot uk', ttsLabel: '🔊 Ouvir',
                autoPlay: true, showIfNoTTS: 'tom underscore okafor at vertex dot co dot uk',
                options: DF.shuffle([
                  { label: 'tom_okafor@vertex.co.uk', correct: true },
                  { label: 'tom.okafor@vertex.co.uk' },
                  { label: 'tom-okafor@vertex.co.uk' }
                ]),
                expl: 'underscore = _ → tom_okafor' }
            ]
          },

          {
            id: 'sayaddr', icon: '🎤', name: 'Diga o endereço', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w3:rep:1', unit: 3, waSec: 'Practically Speaking',
                title: '🎤 Um site:', target: 'www dot marcom dash global dot com',
                ptHint: 'www.marcom-global.com' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w3:rep:2', unit: 3, waSec: 'Practically Speaking',
                title: '🎤 Um e-mail:', target: 'b dot lima at aurora dot com',
                ptHint: 'b.lima@aurora.com' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs3w3:rep:3', unit: 3, waSec: 'Practically Speaking', reps: 3,
                title: '🎤 A frase que te salva — 3x:', target: 'Can you repeat that, please?',
                ptHint: 'Pode repetir, por favor?' }
            ]
          },

          // TRANSFORMATION DRILL — a virada informal → formal
          {
            id: 'transform', icon: '🔀', name: 'Drill informal → formal', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'fun', srsId: 'bs3w3:tf:1', unit: 3, waSec: 'Drill · formal',
                title: '🔀 Deixe o e-mail formal',
                rounds: [
                  { base: 'Hi Maria', cmd: 'Formal', answer: 'Dear Maria' },
                  { base: 'Thanks for your email.', cmd: 'Formal', answer: 'Thank you for your email.' },
                  { base: 'Please send me a map.', cmd: 'Formal', answer: 'Can you please send me a map?' },
                  { base: 'Here is a map.', cmd: 'Formal', answer: 'Please find attached a map.' },
                  { base: 'All the best', cmd: 'Formal', answer: 'Best wishes' },
                  { base: 'Best', cmd: 'Formal', answer: 'Kind regards' }
                ] }
            ]
          },

          // DRILL de expressões (foco da coluna Business communication)
          {
            id: 'drill', icon: '🔁', name: 'Drill de expressões', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs3w3:drl:open', unit: 3, waSec: 'Drill · expressões',
                title: '🔁 Drill 1 — a abertura', focus: 'destinatário',
                frame: 'Dear ___,', ptHint: 'Prezado(a) ___,',
                slots: ['Mr Okafor', 'Ms Lima', 'Mrs Tanaka', 'Mr Vos'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs3w3:drl:req', unit: 3, waSec: 'Drill · expressões',
                title: '🔁 Drill 2 — o pedido', focus: 'o que você pede',
                frame: 'Can you please send me ___?', ptHint: 'Pode me enviar ___?',
                slots: ['a map', 'the address', 'the details', 'your phone number', 'the document'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs3w3:drl:close', unit: 3, waSec: 'Drill · expressões',
                title: '🔁 Drill 3 — o encerramento', focus: 'fecho',
                frame: '___, Beatriz', ptHint: '___, Beatriz',
                slots: ['Best wishes', 'Kind regards', 'All the best', 'Best'] }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs3w3:bc:1', unit: 3, waSec: 'Backchain',
                title: '🧱 O pedido formal', ptHint: 'Pode me enviar um mapa, por favor?',
                chain: ['map', 'a map', 'send me a map', 'please send me a map',
                        'Can you please send me a map?'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs3w3:bc:2', unit: 3, waSec: 'Backchain',
                title: '🧱 O motivo do e-mail', ptHint: 'Estou escrevendo sobre minha visita à sua nova fábrica.',
                chain: ['factory', 'your new factory', 'to your new factory',
                        'about my visit to your new factory',
                        "I'm writing about my visit to your new factory."] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Trocando endereços', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs3w3:dlg:1',
                title: '🎧 Passando o e-mail por telefone',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Hendrik', en: "What's your email address?" },
                  { who: 'Beatriz', en: 'It\'s b dot lima at aurora dot com.' },
                  { who: 'Hendrik', en: 'Sorry, can you repeat that?' },
                  { who: 'Beatriz', en: 'B dot lima. B - D-O-T - L-I-M-A.' }
                ],
                question: 'O que o Hendrik fez quando não entendeu?',
                options: DF.shuffle([
                  { label: 'Pediu para repetir', correct: true },
                  { label: 'Desligou' }, { label: 'Chutou o endereço' },
                  { label: 'Pediu por escrito' }
                ]),
                expl: '"Sorry, can you repeat that?" — a frase que te salva.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs3w3:dlg:2',
                title: '🎧 Confirmando o símbolo',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Yuki', en: 'The website is marcom dash global dot com.' },
                  { who: 'Camila', en: 'Marcom dot global?' },
                  { who: 'Yuki', en: 'No, dash. Marcom dash global.' },
                  { who: 'Camila', en: 'Ah, with a dash. Thanks.' }
                ],
                question: 'Qual símbolo está no endereço?',
                options: DF.shuffle([
                  { label: 'dash (-)', correct: true }, { label: 'dot (.)' },
                  { label: 'underscore (_)' }, { label: 'at (@)' }
                ]),
                expl: '"No, dash." — ela corrigiu porque dot e dash soam parecido.'
              }
            ]
          },

          {
            id: 'email', icon: '✉️', name: 'Monte o e-mail', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'bs3w3:ord:1',
                title: '🧩 Monte o pedido formal:', answer: 'Can you please send me a map',
                expl: 'Can you please send me + o que você quer?' },
              { ui: 'order', cat: 'fun', srsId: 'bs3w3:ord:2',
                title: '🧩 Monte o motivo:', answer: 'I am writing about my visit',
                expl: "I'm writing about + assunto." },
              { ui: 'match', cat: 'fun', srsId: 'bs3w3:match:formal',
                title: '🔗 Ligue o informal ao formal:',
                pairs: [
                  ['Hi Maria', 'Dear Maria'],
                  ['Thanks for your email', 'Thank you for your email'],
                  ['Here is a map', 'Please find attached a map'],
                  ['All the best', 'Best wishes']
                ] },
              { ui: 'match', cat: 'fun', srsId: 'bs3w3:match:parts',
                title: '🔗 Ligue as metades:',
                pairs: [
                  ['Thank you', 'for your email.'],
                  ["I'm writing", 'about my visit.'],
                  ['Please find', 'attached a map.'],
                  ['Kind', 'regards']
                ] },
              { ui: 'choice', cat: 'fun', srsId: 'bs3w3:c:1',
                title: '✉️ Este e-mail é para um cliente que você não conhece. Qual abertura?',
                options: DF.shuffle([
                  { label: 'Dear Mr Okafor', correct: true }, { label: 'Hi Tom', trap: true },
                  { label: 'Hello!' }, { label: 'Hey' }
                ]),
                trapNote: 'Primeiro contato com cliente pede formal.',
                expl: 'Dear + Mr/Mrs/Ms + sobrenome = formal.' },
              { ui: 'choice', cat: 'fun', srsId: 'bs3w3:c:2',
                title: '✉️ E o fecho de um e-mail formal?',
                options: DF.shuffle([
                  { label: 'Kind regards', correct: true }, { label: 'Best' },
                  { label: 'All the best' }, { label: 'Bye' }
                ]),
                expl: 'Kind regards / Best wishes = formal. Best / All the best = informal.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Seu e-mail de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'spl', srsId: 'bs3w3:build:me', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Diga o SEU e-mail em voz alta',
                prompt: 'Fale seu endereço de e-mail em inglês, símbolo por símbolo.',
                example: 'It\'s felipe dot tavares at gmail dot com.',
                mustUse: ['at'],
                expl: 'Mande o áudio — o professor confere se os símbolos saíram certos.' },
              { ui: 'build', cat: 'fun', srsId: 'bs3w3:build:req', unit: 3, waSec: 'Sua vez',
                title: '🗣️ Peça alguma coisa por e-mail',
                prompt: 'Diga em voz alta um pedido formal, como se estivesse escrevendo.',
                example: 'Dear Mr Okafor. Can you please send me the address? Kind regards.',
                mustUse: ['please'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'E-mail inteiro sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs3w3+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 O e-mail formal completo',
                prompt: 'Fale um e-mail inteiro: abertura, motivo, pedido e fecho.',
                example: "Dear Ms Tanaka. I'm writing about my visit to your office. " +
                         'Can you please send me a map? Kind regards, Felipe.',
                mustUse: ['dear', 'please'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de e-mail', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 Informal → formal, sempre novo',
                templates: ['Hi {name}', 'Thanks for your email.', 'Please send me a map.',
                            'Here is a map.', 'All the best', 'Best'],
                cmds: ['Formal'],
                n: 6
              },
              drills: [
                { frame: 'Can you please send me ___?', pool: ['a map', 'the address', 'the details', 'the document', 'your number'],
                  focus: 'pedido', ptHint: 'Pode me enviar ___?', n: 5 },
                { frame: 'Dear ___,', pool: 'name', focus: 'destinatário', ptHint: 'Prezado(a) ___,', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 12" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: perguntar e responder sobre um local de trabalho.',
        comp: 'Você faz cinco perguntas sobre o trabalho de alguém usando ' +
              'What, Are, Is, Where e Who — os 5 itens do speaking test.',
        live: [
          'Talking point: what\'s the answer? — perguntas e respostas em duplas ou times',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (entrevista sobre o local de trabalho)'
        ],
        bridge: 'Na aula você jogou o "what\'s the answer?" e o professor aplicou o teste. ' +
                'Aqui você ensaia as <b>5 palavras interrogativas</b> do speaking test ' +
                'entrevistando alguém sobre o trabalho — situação diferente, mesma competência.',
        nextLive: 'Unit 4 — Departments. Começa na segunda-feira seguinte.',
        ican: [
          'I can ask about a workplace with What…?',
          'I can ask with Are…? and Is…?',
          'I can ask with Where…? and Who…?',
          'I can answer questions about my own company.',
          'I can complete the Unit 3 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'Pergunta e resposta', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:g:1', unit: 3, waSec: 'Talking Point',
                title: '🎲 A resposta é "Yes, she is."',
                prompt: 'Invente a pergunta que leva a essa resposta.',
                example: 'Is Camila in the office?', mustUse: ['is'] },
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:g:2', unit: 3, waSec: 'Talking Point',
                title: '🎲 A resposta é "They\'re in Lisbon."',
                prompt: 'Invente a pergunta.',
                example: 'Where are the offices?', mustUse: ['where'] },
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:g:3', unit: 3, waSec: 'Talking Point',
                title: '🎲 A resposta é "He\'s in the cafeteria."',
                prompt: 'Invente a pergunta.',
                example: "Where's Tom?", mustUse: ['where'] },
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:g:4', unit: 3, waSec: 'Talking Point',
                title: '🎲 A resposta é "No, they\'re in the car park."',
                prompt: 'Invente a pergunta.',
                example: 'Are they in reception?', mustUse: ['are'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'voc', srsId: 'bs3w4:pt:1',
                title: '📝 Complete o lugar (faltam as vogais):', main: 'w _ r _ h _ _ s _',
                answers: ['warehouse'], expl: 'warehouse.', feedbackTts: 'warehouse' },
              { ui: 'type', cat: 'voc', srsId: 'bs3w4:pt:2',
                title: '📝 Complete o lugar:', main: 'c _ f _ t _ r _ _',
                answers: ['cafeteria'], expl: 'cafeteria.', feedbackTts: 'cafeteria' },
              { ui: 'type', cat: 'voc', srsId: 'bs3w4:pt:3',
                title: '📝 Complete o lugar:', main: 'r _ c _ pt _ _ n',
                answers: ['reception'], expl: 'reception.', feedbackTts: 'reception' },
              { ui: 'order', cat: 'gra', srsId: 'bs3w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'The office is small',
                expl: 'sujeito + is + adjetivo.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w4:pt:5',
                title: '📝 Escolha o verbo certo:', main: '___ you managers?',
                options: DF.shuffle([{ label: 'Are', correct: true }, { label: "'re" }]),
                expl: 'Pergunta começa com o verbo: Are you…?' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w4:pt:6',
                title: '📝 Escolha o verbo certo:', main: "No, we ___. We're sales representatives.",
                options: DF.shuffle([{ label: "aren't", correct: true }, { label: 'are' }]),
                expl: 'A negativa curta: No, we aren\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w4:pt:7',
                title: '❓ Complete com what, where ou who:', main: "___'s your company? — It's Aurora Systems.",
                options: DF.shuffle([{ label: 'What', correct: true }, { label: 'Where' }, { label: 'Who' }]),
                expl: 'nome da empresa = coisa → What.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w4:pt:8',
                title: '❓ Complete com what, where ou who:', main: '___ is he? — He\'s Tom. He\'s my manager.',
                options: DF.shuffle([{ label: 'Who', correct: true }, { label: 'What' }, { label: 'Where' }]),
                expl: 'pessoa/cargo → Who.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs3w4:pt:9',
                title: '❓ Complete com what, where ou who:', main: "___'s your factory? — In Lagos.",
                options: DF.shuffle([{ label: 'Where', correct: true }, { label: 'What' }, { label: 'Who' }]),
                expl: 'lugar → Where.' },
              { ui: 'order', cat: 'fun', srsId: 'bs3w4:pt:10',
                title: '🧩 Ponha o e-mail em ordem:', answer: 'Dear Mr Okafor I am writing about my visit',
                expl: 'Abertura → motivo.' },
              { ui: 'type', cat: 'fun', srsId: 'bs3w4:pt:11',
                title: '✉️ Complete o e-mail:', main: 'T_____ for your email.',
                answers: ['Thanks', 'thanks'], expl: 'Thanks for your email.' }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:st:1', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 1 de 5 — What…?',
                prompt: 'Pergunte algo sobre a empresa da pessoa, começando com What.',
                example: "What's your company?", mustUse: ['what'] },
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:st:2', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 2 de 5 — Are…?',
                prompt: 'Pergunte se as pessoas estão em algum lugar, começando com Are.',
                example: 'Are the engineers in the factory?', mustUse: ['are'] },
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:st:3', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 3 de 5 — Is…?',
                prompt: 'Pergunte sobre um lugar, começando com Is.',
                example: 'Is your office big?', mustUse: ['is'] },
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:st:4', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 4 de 5 — Where…?',
                prompt: 'Pergunte onde fica alguma coisa, começando com Where.',
                example: "Where's your head office?", mustUse: ['where'] },
              { ui: 'build', cat: 'fun', srsId: 'bs3w4:st:5', unit: 3, waSec: 'Speaking Test',
                title: '🏆 Item 5 de 5 — Who…?',
                prompt: 'Pergunte sobre uma pessoa, começando com Who.',
                example: "Who's your manager?", mustUse: ['who'],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A entrevista inteira', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs3w4+:b1', unit: 3, waSec: 'Praticar mais',
                title: '🔥 As 5 perguntas seguidas',
                prompt: 'Entreviste alguém sobre o trabalho dela: What, Are, Is, Where e Who, tudo numa gravação.',
                example: "What's your company? Are you in the head office? Is your office big? " +
                         "Where's the factory? Who's your manager?",
                mustUse: ['what', 'where', 'who'],
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 3', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 Transforme',
                templates: ['The office is {adj}.', 'The factory is {adj}.', 'The warehouse is {adj}.'],
                cmds: ['Adjective + noun'],
                n: 5
              },
              drills: [
                { frame: 'Are they in ___?', pool: 'place', focus: 'lugar', ptHint: 'Eles estão em ___?', n: 4 },
                { frame: "It's a ___ office.", pool: 'adj', focus: 'adjetivo', ptHint: 'É um escritório ___.', n: 4 },
                { frame: 'Can you please send me ___?',
                  pool: ['a map', 'the address', 'the details', 'the document'],
                  focus: 'pedido', ptHint: 'Pode me enviar ___?', n: 4 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
