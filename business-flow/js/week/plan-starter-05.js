/* ENGLISH FLOW — week/plan-starter-05.js
   BUSINESS STARTER · UNIT 5 "Products"

   Numeração corrida do Felipe: Unit 5 = semanas 17–20.
     semana 17 = U5 W1 · Working with words (tipo de empresa + 9 verbos + nacionalidade)
     semana 18 = U5 W2 · Language at work (present simple: he/she/it)
     semana 19 = U5 W3 · Practically speaking (big numbers) + Business comm (ordering)
     semana 20 = U5 W4 · Talking point + teste

   Mesma regra de sempre: O APP NÃO REPETE A AULA. As empresas do livro
   (Embraer, Uniqlo, Auchan, LG, Gazprom, Carrefour, Boeing, Tata Motors,
   Shell, Sony, IKEA, Zara, Fiat, Walmart, American Apparel, Dassault, Aldi,
   Toyota, Samsung) são REAIS — usadas como conhecimento geral no livro, não
   como personagem autoral. Por isso o app usa OUTRAS empresas reais nos
   drills de vocabulário (Nike, Airbus, Ford, BP, Panasonic — conhecimento
   geral, sem colidir com os exemplos exatos do livro) e empresas fictícias
   novas (Solara Motors, Falcon Aerospace, Trendline) só nos diálogos/textos
   autorais, seguindo o universo Whiterock Consultancy já estabelecido. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const TYPES = [
    { en: 'retail', pt: 'varejo', ex: 'Nike' },
    { en: 'aeronautical', pt: 'aeronáutica', ex: 'Airbus' },
    { en: 'automobile', pt: 'automobilística', ex: 'Ford' },
    { en: 'energy', pt: 'energia', ex: 'BP' },
    { en: 'electronics', pt: 'eletrônicos', ex: 'Panasonic' }
  ];
  const EXTRA_TYPES = [
    { en: 'food', pt: 'alimentícia', ex: 'Nestlé' },
    { en: 'fashion', pt: 'moda', ex: 'Adidas' },
    { en: 'pharmaceutical', pt: 'farmacêutica', ex: 'Pfizer' }
  ];
  const VERBS = [
    { en: 'make', pt: 'fabricar' }, { en: 'sell', pt: 'vender' },
    { en: 'have', pt: 'ter' }, { en: 'build', pt: 'construir' },
    { en: 'design', pt: 'projetar' }, { en: 'export', pt: 'exportar' },
    { en: 'buy', pt: 'comprar' }, { en: 'order', pt: 'encomendar' },
    { en: 'deliver', pt: 'entregar' }
  ];
  const NATIONS = [
    { c: 'the UK', n: 'British' }, { c: 'Brazil', n: 'Brazilian' },
    { c: 'Italy', n: 'Italian' }, { c: 'India', n: 'Indian' },
    { c: 'Mexico', n: 'Mexican' }, { c: 'Japan', n: 'Japanese' },
    { c: 'the USA', n: 'American' }, { c: 'China', n: 'Chinese' }
  ];

  function radarType(t, pool) {
    const others = DF.shuffle(pool.filter(function (x) { return x.en !== t.en; })).slice(0, 3);
    return {
      ui: 'choice', cat: 'pro', srsId: 'bs5w1:radar:' + t.en,
      title: '🏭 Que tipo de empresa você ouviu?',
      tts: t.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: t.en,
      options: DF.shuffle([{ label: t.en, correct: true }].concat(
        others.map(function (o) { return { label: o.en }; }))),
      expl: t.en + ' = ' + t.pt + ' (ex.: ' + t.ex + ')', feedbackTts: t.en
    };
  }

  DF.PLAN.starter[5] = {
    unit: 5,
    title: 'Products',
    subtitle: 'O que a empresa e as parceiras fazem',
    icon: '📦',

    mindmap: {
      center: 'Products',
      sub: 'O tipo de empresa e o que ela faz com o produto',
      branches: [
        {
          icon: '🏭', name: 'Company types',
          leaves: TYPES.map(function (t) { return { en: 'a/an ' + t.en + ' company', pt: t.pt + ' (' + t.ex + ')' }; })
            .concat(EXTRA_TYPES.map(function (t) { return { en: 'a/an ' + t.en + ' company ·+', pt: t.pt + ' (' + t.ex + ')' }; })),
          note: '<b>an</b> aeronautical, <b>an</b> automobile, <b>an</b> electronics ' +
                '— todas começam com som de vogal. As outras levam <b>a</b>.'
        },
        {
          icon: '⚙️', name: 'Os 9 verbos do produto',
          leaves: VERBS.map(function (v) { return { en: v.en, pt: v.pt }; }),
          note: '<b>make</b> (fabricar do zero) ≠ <b>build</b> (construir, mais físico/grande) ' +
                '≠ <b>design</b> (projetar, antes de fabricar). Os três parecem sinônimos em ' +
                'português, mas têm ordem: primeiro design, depois make/build.'
        },
        {
          icon: '🌍', name: 'Country → Nationality',
          leaves: NATIONS.map(function (x) { return { en: x.c + ' → ' + x.n, pt: '' } }),
          note: 'Três famílias: <b>-an</b> (Brazil→Brazili<b>an</b>, Mexico→Mexic<b>an</b>), ' +
                '<b>-ese</b> (Japan→Japan<b>ese</b>, China→Chin<b>ese</b>), e as que não seguem ' +
                'regra nenhuma: <b>the UK → British</b>, <b>the USA → American</b>. Decore essas duas.'
        },
        {
          icon: '👤', name: 'He / She / It — o verbo muda',
          leaves: [
            { en: 'I sell cars.', pt: 'eu — forma normal' },
            { en: 'She sells cars.', pt: 'ela — +s' },
            { en: 'He designs products.', pt: 'ele — +s (design termina em consoante)' },
            { en: 'It exports food.', pt: 'a empresa (it) — +s' },
            { en: 'We have a website.', pt: 'nós — forma normal' },
            { en: 'It has a website.', pt: 'a empresa — irregular: have → has' }
          ],
          note: '<b>Armadilha nº1 desta unidade:</b> "He make products" ❌ — falta o <b>s</b>. ' +
                'Em português o verbo não muda pra "ele"; em inglês, no presente, muda sempre.'
        },
        {
          icon: '🔤', name: 'Spelling do -s / -es',
          leaves: [
            { en: 'sell → sells', pt: 'a maioria: só +s' },
            { en: 'design → designs', pt: 'a maioria: só +s' },
            { en: 'export → exports', pt: 'a maioria: só +s' },
            { en: 'do → does', pt: 'termina em -o → +es' },
            { en: 'have → has', pt: '⚠️ irregular — não é "haves"' }
          ],
          note: 'É a MESMA regra do plural de substantivo (company→compan<b>ies</b>, ' +
                'box→box<b>es</b>) — só que agora no verbo, e com "have→has" no lugar ' +
                'de "person→people".'
        },
        {
          icon: '❓', name: 'Does — a pergunta',
          leaves: [
            { en: 'Does it make products?', pt: 'A empresa fabrica produtos?' },
            { en: 'Yes, it does. / No, it doesn\'t.', pt: 'resposta curta' },
            { en: 'What does it make?', pt: 'O que ela fabrica?' },
            { en: 'Where does she work?', pt: 'Onde ela trabalha?' }
          ],
          note: 'Igual ao "do/don\'t" da Unit 4, mas pra he/she/it entra o ' +
                '<b>does/doesn\'t</b> — e aí o verbo principal VOLTA pra forma sem -s: ' +
                '"Does it sell**s**?" ❌ → "Does it sell?" ✅'
        },
        {
          icon: '🔢', name: 'Big numbers',
          leaves: [
            { en: 'a hundred / a thousand / a million', pt: 'cem / mil / um milhão' },
            { en: '1,340 = one thousand, three hundred and forty', pt: 'vírgula separa milhar' },
            { en: '812 = eight hundred and twelve', pt: 'o "and" vem antes das dezenas' },
            { en: '54,000 = fifty-four thousand', pt: 'cinquenta e quatro mil' }
          ],
          note: 'O <b>and</b> só aparece depois de "hundred": eight hundred <b>and</b> ' +
                'twelve. Em milhar redondo não tem and: fifty-four thousand (sem "and cem").'
        },
        {
          icon: '📦', name: 'Ordering — key expressions',
          leaves: [
            { en: "I'd like to order...", pt: 'Eu gostaria de encomendar…' },
            { en: 'How many would you like?', pt: 'Quantos você gostaria?' },
            { en: "What's the price?", pt: 'Qual é o preço?' },
            { en: 'Does that include delivery?', pt: 'Isso inclui entrega?' },
            { en: 'Can you confirm my order by email?', pt: 'Pode confirmar meu pedido por e-mail?' }
          ],
          note: '<b>I\'d like</b> (pedido educado) ≠ <b>I want</b> (direto demais pra negócios). ' +
                'Em compras/pedidos, sempre "I\'d like".'
        }
      ]
    },

    weeks: [

      // ══════════════════ SEMANA 1 (a "semana 17" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🏭',
        title: 'Working with words',
        goal: 'Dizer o tipo de empresa, o que ela faz e a nacionalidade dela.',
        comp: 'Você descreve uma empresa com tipo + verbos + nacionalidade: ' +
              '"[Nome] is a [nacionalidade] [tipo] company. We [verbo] and [verbo] [produto]."',
        live: [
          'Match companies to pictures — os 5 tipos de empresa',
          'Listen and read — dois textos de empresas reais (tipo, o que fazem)',
          'Match verbs to pictures — os 9 verbos',
          'Underline the correct verb',
          'Tip: countries and nationalities',
          'Choose 5 verbs, write sentences about your company'
        ],
        bridge: 'Na aula você combinou empresas reais aos tipos e leu os textos do livro. ' +
                'Aqui você treina os <b>9 verbos</b> até decidir sozinho qual cabe onde ' +
                '(make ≠ build ≠ design), pega nacionalidades que o livro não cobre, e ' +
                'descreve uma empresa fictícia nova.',
        nextLive: 'Semana 2 · Language at work — present simple para he/she/it: o verbo ' +
                  'que muda quando você fala de outra pessoa ou da empresa.',
        ican: [
          'I can say what type of company something is.',
          'I can use make, sell, build, design and export correctly.',
          'I can say a country\'s nationality (Brazilian, Japanese, British...).',
          'I can describe a company like the book examples do.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '👂', name: 'Tipos de empresa — só de ouvido', tag: 'listening',
            items: TYPES.map(function (t) { return radarType(t, TYPES.concat(EXTRA_TYPES)); })
          },

          {
            id: 'radar2', icon: '➕', name: '3 tipos que o livro não traz', tag: 'listening',
            items: EXTRA_TYPES.map(function (t) { return radarType(t, TYPES.concat(EXTRA_TYPES)); })
          },

          {
            id: 'stress', icon: '🥁', name: 'A força da palavra', tag: 'pronúncia',
            items: [
              { ui: 'stress', cat: 'pro', srsId: 'bs5w1:str:aero', word: 'aeronautical',
                pattern: 'oooOoo', decoys: ['Oooooo', 'ooOooo'], syl: 'ae-ro-NAU-ti-cal' },
              { ui: 'stress', cat: 'pro', srsId: 'bs5w1:str:auto', word: 'automobile',
                pattern: 'Oooo', decoys: ['oOoo', 'ooOo'], syl: 'AU-to-mo-bile' },
              { ui: 'stress', cat: 'pro', srsId: 'bs5w1:str:elec', word: 'electronics',
                pattern: 'ooOo', decoys: ['Oooo', 'oOoo'], syl: 'e-lec-TRON-ics' },
              { ui: 'stress', cat: 'pro', srsId: 'bs5w1:str:exp', word: 'export',
                pattern: 'Oo', decoys: ['oO'], syl: 'EX-port',
                expl: 'Como verbo aqui é EX-port. (Como substantivo às vezes muda — não neste uso.)' },
              { ui: 'stress', cat: 'pro', srsId: 'bs5w1:str:del', word: 'deliver',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'de-LI-ver' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de vocabulário', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs5w1:drl:type', unit: 5, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 1 — o tipo troca', focus: 'tipo de empresa',
                frame: "It's ___.", ptHint: 'É uma empresa ___.',
                slots: ['a retail company', 'an automobile company', 'an energy company',
                        'an electronics company', 'a food company'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs5w1:drl:verb', unit: 5, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 2 — o verbo troca', focus: 'ação',
                frame: 'We ___ the products.', ptHint: 'Nós ___ os produtos.',
                slots: ['make', 'sell', 'design', 'export', 'deliver'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs5w1:drl:nat', unit: 5, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 3 — a nacionalidade troca', focus: 'nacionalidade',
                frame: "It's a ___ company.", ptHint: 'É uma empresa ___.',
                slots: ['Brazilian', 'Japanese', 'British', 'American', 'Mexican'] }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs5w1:bc:1', unit: 5, waSec: 'Backchain',
                title: '🧱 A empresa completa', ptHint: 'Nós fabricamos e vendemos aviões.',
                chain: ['aeroplanes', 'sell aeroplanes', 'and sell aeroplanes',
                        'make and sell aeroplanes', 'We make and sell aeroplanes.'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs5w1:bc:2', unit: 5, waSec: 'Backchain',
                title: '🧱 O tipo + nacionalidade', ptHint: 'É uma empresa automobilística brasileira.',
                chain: ['company', 'automobile company', 'a Brazilian automobile company',
                        "It's a Brazilian automobile company."] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Ouça e repita', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs5w1:rep:1', unit: 5, waSec: 'Working with words', reps: 3,
                title: '🎤 O verbo mais confundido — 3x:', target: "We design new products.",
                ptHint: 'Nós projetamos produtos novos.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs5w1:rep:2', unit: 5, waSec: 'Working with words',
                title: '🎤 A pergunta do dia a dia:', target: 'What type of company is it?',
                ptHint: 'Que tipo de empresa é essa?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs5w1:rep:3', unit: 5, waSec: 'Working with words',
                title: '🎤 A nacionalidade:', target: "It's a Japanese electronics company.",
                ptHint: 'É uma empresa eletrônica japonesa.' }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Situações novas', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs5w1:dlg:1',
                title: '🎧 Apresentando uma parceira nova',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Beatriz', en: 'Solara Motors is a Brazilian automobile company.' },
                  { who: 'Hendrik', en: 'What do they make?' },
                  { who: 'Beatriz', en: 'They design and build electric cars. They export to Europe.' },
                  { who: 'Hendrik', en: 'Interesting! Do they have factories here?' }
                ],
                question: 'O que a Solara Motors faz?',
                options: DF.shuffle([
                  { label: 'Projeta e constrói carros elétricos', correct: true },
                  { label: 'Vende eletrônicos' }, { label: 'Só importa carros' },
                  { label: 'É uma empresa de energia' }
                ]),
                expl: '"They design and build electric cars."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs5w1:dlg:2',
                title: '🎧 A empresa aeronáutica',
                lines: [
                  { who: 'Tom', en: 'Falcon Aerospace is a British aeronautical company.' },
                  { who: 'Camila', en: 'Do they sell to other countries?' },
                  { who: 'Tom', en: "Yes, they export aeroplane parts to the USA and China." },
                  { who: 'Camila', en: "That's a big market." }
                ],
                question: 'Para onde a Falcon Aerospace exporta?',
                options: DF.shuffle([
                  { label: 'Estados Unidos e China', correct: true },
                  { label: 'Só Brasil' }, { label: 'Japão e Índia' }, { label: 'Não exporta' }
                ]),
                expl: '"They export aeroplane parts to the USA and China."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs5w1:dlg:3',
                title: '🎧 Três empresas, três tipos',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Aisha', en: "Nova Energy is an energy company. It's Kuwaiti." },
                  { who: 'Yuki', en: "Aurora Systems is Japanese. It's an electronics company." },
                  { who: 'Tom', en: "And Trendline is a British fashion company." }
                ],
                question: 'Qual empresa é de energia?',
                options: DF.shuffle([
                  { label: 'Nova Energy', correct: true }, { label: 'Aurora Systems' },
                  { label: 'Trendline' }, { label: 'nenhuma' }
                ]),
                expl: '"Nova Energy is an energy company."'
              }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'match', cat: 'voc', srsId: 'bs5w1:match:type',
                title: '🔗 Ligue a empresa ao tipo:',
                pairs: [
                  ['Nike', 'retail company'], ['Airbus', 'aeronautical company'],
                  ['Ford', 'automobile company'], ['BP', 'energy company'],
                  ['Panasonic', 'electronics company']
                ] },
              { ui: 'match', cat: 'voc', srsId: 'bs5w1:match:nat',
                title: '🔗 Ligue o país à nacionalidade:',
                pairs: [
                  ['Brazil', 'Brazilian'], ['Japan', 'Japanese'],
                  ['the UK', 'British'], ['the USA', 'American']
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w1:c:1',
                title: '🔤 Complete com a / an:', main: 'It\'s ___ automobile company.',
                options: DF.shuffle([{ label: 'an', correct: true }, { label: 'a' }]),
                expl: 'automobile começa com som de vogal → an automobile company.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w1:c:2',
                title: '⚠️ Qual verbo NÃO cabe aqui?', main: 'We ___ new products before we make them.',
                options: DF.shuffle([
                  { label: 'design', correct: true }, { label: 'sell', trap: true },
                  { label: 'export' }, { label: 'deliver' }
                ]),
                trapNote: 'sell/export/deliver acontecem DEPOIS de fabricar — design vem antes.',
                expl: 'design = projetar, antes de fabricar.' },
              { ui: 'order', cat: 'gra', srsId: 'bs5w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'We make and sell aeroplanes',
                expl: 'sujeito + verbo1 + and + verbo2 + objeto.' },
              { ui: 'order', cat: 'gra', srsId: 'bs5w1:ord:2',
                title: '🧩 Monte a frase:', answer: 'It is a Japanese electronics company',
                expl: 'It is + a/an + nacionalidade + tipo + company.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua empresa de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs5w1:build:me', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Descreva sua empresa (ou uma que você conhece)',
                prompt: 'Diga o tipo, a nacionalidade e o que ela faz — como o exemplo do livro.',
                example: "EnglishFlow is a Brazilian company. We teach English online.",
                mustUse: ['company'],
                expl: 'Mande o áudio — o professor confere a/an e o verbo certo.' },
              { ui: 'build', cat: 'fun', srsId: 'bs5w1:build:choose', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Escolha 5 verbos, monte frases',
                prompt: 'Como no livro: escolha verbos diferentes e diga o que sua empresa faz com cada um.',
                example: 'We make software. We sell online courses. We deliver certificates.',
                mustUse: ['we'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Empresa completa sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs5w1+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Os 4 elementos numa fala só',
                prompt: 'Nome da empresa + nacionalidade + tipo + 2 verbos, tudo junto.',
                example: "Solara Motors is a Brazilian automobile company. We design and build electric cars.",
                mustUse: ['company', 'and'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de empresas', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "It's ___.", pool: 'companyType', focus: 'tipo', ptHint: 'É uma empresa ___.', n: 5 },
                { frame: 'We ___ the products.', pool: 'bizverb', focus: 'verbo', ptHint: 'Nós ___ os produtos.', n: 5 }
              ],
              transform: {
                title: '🔀 País → nacionalidade, sempre novo',
                templates: ['Brazil', 'Japan', 'the UK', 'the USA', 'China', 'Mexico', 'Italy', 'India'],
                cmds: ['Nationality'],
                n: 6
              }
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 18" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '👤',
        title: 'Language at work',
        goal: 'Present simple para he/she/it: o verbo leva -s quando é sobre outra pessoa ou empresa.',
        comp: 'Você fala do trabalho de outra pessoa ou do que uma empresa faz, com o ' +
              '-s certo no verbo, e pergunta com Does…?',
        live: [
          'Listen and read — duas empresas reais e o que cada uma faz',
          'Underline the verbs in the texts',
          'Language point: positivo (-s), negativo (doesn\'t), pergunta (Does…?), resposta curta',
          'Tip: have → has',
          'Put the words in the right order — perguntas com Does',
          'Complete the question words — What/Where/Who + does'
        ],
        bridge: 'Na aula vocês montaram a tabela do he/she/it e praticaram com os textos ' +
                'do livro. Aqui você drilla o <b>-s que some</b> quando é pergunta ou ' +
                'negativa — essa é a armadilha nº1 da unidade — até sair automático.',
        nextLive: 'Semana 3 · Practically speaking — números grandes — e Business ' +
                  'communication: fazer um pedido.',
        ican: [
          "I can say what he, she or it does, with the right -s.",
          "I can use doesn't to say what someone or something does NOT do.",
          'I can ask "Does…?" questions about a person or a company.',
          'I can answer: Yes, it does. / No, it doesn\'t.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — he/she/it', tag: 'estudo', mindmap: true },

          {
            id: 'point', icon: '📐', name: 'A regra num relance', tag: 'estudo',
            items: [
              {
                ui: 'read', cat: 'gra', info: true,
                title: '📐 Present simple — he / she / it',
                textTitle: 'O verbo muda de forma',
                text: 'POSITIVO — o verbo leva -s/-es\nHe makes products.\nShe designs clothes.\n' +
                      'It has factories in 20 countries.\n\n' +
                      'NEGATIVO — entra doesn\'t, o verbo volta ao normal\n' +
                      "He doesn't sell online.\nIt doesn't make food.\n\n" +
                      'PERGUNTA — entra Does, o verbo volta ao normal\n' +
                      'Does she work in the head office?\nDoes it export products?\n\n' +
                      'RESPOSTA CURTA\nYes, he does. / No, it doesn\'t.',
                readAloud: false
              },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w2:g:trap1',
                title: '⚠️ A armadilha nº1 desta unidade:', main: 'A empresa fabrica carros.',
                options: DF.shuffle([
                  { label: 'It makes cars.', correct: true },
                  { label: 'It make cars.', trap: true },
                  { label: 'It making cars.' }, { label: 'It do make cars.' }
                ]),
                trapNote: 'Em português o verbo não muda pra "ela" — em inglês, no presente, ' +
                          'sempre muda: make → make<b>s</b>.',
                expl: 'he/she/it → verbo + s.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w2:g:trap2',
                title: '⚠️ E na negativa, o -s some:', main: 'A empresa não vende online.',
                options: DF.shuffle([
                  { label: "It doesn't sell online.", correct: true },
                  { label: "It doesn't sells online.", trap: true },
                  { label: "It don't sell online." }
                ]),
                trapNote: 'O -s "muda de lugar": vai pro doesn\'t, e some do verbo principal.',
                expl: "doesn't + verbo SEM -s." },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w2:g:has',
                title: '⚠️ have → has (não "haves"):', main: 'A empresa tem uma loja online.',
                options: DF.shuffle([
                  { label: 'It has an online store.', correct: true },
                  { label: 'It haves an online store.', trap: true },
                  { label: 'It have an online store.' }
                ]),
                trapNote: 'have é irregular — vira has, nunca "haves".',
                expl: 'have → has (a mesma irregularidade de person→people, só que em verbo).' },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w2:g:q',
                title: '❓ Complete a pergunta:', main: '___ the company export to China?',
                options: DF.shuffle([
                  { label: 'Does', correct: true }, { label: 'Do' }, { label: 'Is' }
                ]),
                expl: 'the company = it → Does…?' }
            ]
          },

          {
            id: 'dlg', icon: '🎧', name: 'O que cada empresa faz', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs5w2:dlg:1',
                title: '🎧 Perguntando sobre a Trendline',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Camila', en: 'Does Trendline make clothes?' },
                  { who: 'Beatriz', en: "No, it doesn't. It sells clothes — it doesn't make them." },
                  { who: 'Camila', en: 'Where does it sell them?' },
                  { who: 'Beatriz', en: 'It has stores in 15 countries and an online store too.' }
                ],
                question: 'A Trendline fabrica roupas?',
                options: DF.shuffle([
                  { label: 'Não — só vende', correct: true },
                  { label: 'Sim, fabrica e vende' }, { label: 'Só fabrica' },
                  { label: 'Não disseram' }
                ]),
                expl: '"No, it doesn\'t. It sells clothes — it doesn\'t make them."'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs5w2:dlg:2',
                title: '🎧 O gerente da Solara Motors',
                lines: [
                  { who: 'Hendrik', en: 'What does Marco do at Solara Motors?' },
                  { who: 'Aisha', en: 'He designs the cars. He doesn\'t build them himself.' },
                  { who: 'Hendrik', en: 'Does he work in the factory?' },
                  { who: 'Aisha', en: "No, he doesn't. He works in the design department." }
                ],
                question: 'O que o Marco faz?',
                options: DF.shuffle([
                  { label: 'Projeta os carros', correct: true }, { label: 'Constrói os carros' },
                  { label: 'Vende os carros' }, { label: 'Exporta os carros' }
                ]),
                expl: '"He designs the cars." — trabalha no design, não na fábrica.'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs5w2:dlg:3',
                title: '🎧 Confirmando exportação',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Tom', en: 'Does Falcon Aerospace export to Brazil?' },
                  { who: 'Camila', en: "No, it doesn't. It exports to the USA and China." },
                  { who: 'Tom', en: 'And does it have a factory here?' },
                  { who: 'Camila', en: 'Yes, it does. In Bristol.' }
                ],
                question: 'A Falcon Aerospace exporta para o Brasil?',
                options: DF.shuffle([
                  { label: 'Não — exporta pra EUA e China', correct: true },
                  { label: 'Sim' }, { label: 'Só importa' }, { label: 'Não exporta' }
                ]),
                expl: '"No, it doesn\'t. It exports to the USA and China."'
              }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Drill de transformação', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs5w2:tf:1', unit: 5, waSec: 'Drill · transformação',
                title: "🔀 Negative — o -s vai pro doesn't",
                rounds: [
                  { base: 'It makes cars.', cmd: 'Negative', answer: "It doesn't make cars." },
                  { base: 'She sells clothes.', cmd: 'Negative', answer: "She doesn't sell clothes." },
                  { base: 'He designs products.', cmd: 'Negative', answer: "He doesn't design products." },
                  { base: 'It exports food.', cmd: 'Negative', answer: "It doesn't export food." },
                  { base: 'It has an online store.', cmd: 'Negative', answer: "It doesn't have an online store." }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs5w2:tf:2', unit: 5, waSec: 'Drill · transformação',
                title: '🔀 Question — o -s some, entra Does',
                rounds: [
                  { base: 'It makes cars.', cmd: 'Question', answer: 'Does it make cars?' },
                  { base: 'She works here.', cmd: 'Question', answer: 'Does she work here?' },
                  { base: 'He exports products.', cmd: 'Question', answer: 'Does he export products?' },
                  { base: 'It has factories in Brazil.', cmd: 'Question', answer: 'Does it have factories in Brazil?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs5w2:tf:3', unit: 5, waSec: 'Drill · transformação',
                title: '🔀 A resposta curta',
                rounds: [
                  { base: 'Does it make food?', cmd: 'Short answer', answer: 'Yes, it does.' },
                  { base: 'Does she work in the factory?', cmd: 'Short answer', answer: "No, she doesn't." },
                  { base: 'Does the company export to China?', cmd: 'Short answer', answer: 'Yes, it does.' }
                ] }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de substituição', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'bs5w2:drl:s', unit: 5, waSec: 'Drill · gramática',
                title: '🔁 Drill 1 — o verbo com -s troca', focus: 'verbo conjugado',
                frame: 'It ___ products.', ptHint: 'Ela ___ produtos.',
                slots: ['makes', 'sells', 'designs', 'exports', 'delivers'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs5w2:drl:q', unit: 5, waSec: 'Drill · gramática',
                title: '🔁 Drill 2 — a pergunta se repete', focus: 'verbo base',
                frame: 'Does it ___?', ptHint: 'Ela ___?',
                slots: ['make cars', 'sell online', 'have a website', 'export to Europe'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs5w2:drl:neg', unit: 5, waSec: 'Drill · gramática',
                title: '🔁 Drill 3 — a negativa', focus: 'verbo base',
                frame: "No, it doesn't. It ___.", ptHint: 'Não. Ela ___.',
                slots: ['sells clothes', 'imports the parts', 'has an online store', 'delivers by post'] }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs5w2:bc:1', unit: 5, waSec: 'Backchain',
                title: '🧱 A pergunta completa', ptHint: 'Ela exporta pra outros países?',
                chain: ['countries', 'other countries', 'to other countries',
                        'export to other countries', 'Does it export to other countries?'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs5w2:bc:2', unit: 5, waSec: 'Backchain',
                title: '🧱 A negativa com correção', ptHint: 'Não, não fabrica. Ela vende roupas.',
                chain: ['clothes', 'sell clothes', 'It sells clothes',
                        "No, it doesn't. It sells clothes."] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Até sair automático', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs5w2:rep:1', unit: 5, waSec: 'Language at work', reps: 3,
                title: '🎤 O -s que sempre esquece — 3x:', target: 'It makes and sells cars.',
                ptHint: 'Ela fabrica e vende carros.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs5w2:rep:2', unit: 5, waSec: 'Language at work',
                title: '🎤 A pergunta:', target: 'Does it export to Europe?',
                ptHint: 'Ela exporta pra Europa?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs5w2:rep:3', unit: 5, waSec: 'Language at work',
                title: '🎤 have → has:', target: 'It has factories in three countries.',
                ptHint: 'Ela tem fábricas em três países.' },
              { ui: 'build', cat: 'gra', srsId: 'bs5w2:build:1', unit: 5, waSec: 'Language at work',
                title: '🗣️ Descreva o que uma empresa NÃO faz',
                prompt: 'Escolha uma empresa (real ou da Whiterock Consultancy) e diga o que ela não faz.',
                example: "It doesn't make food. It sells software.",
                mustUse: ["doesn't"] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'bs5w2:v:1',
                title: '🔤 Conjugue pra he/she/it:', main: 'sell',
                answers: ['sells'], expl: 'sell → sells.', feedbackTts: 'sells' },
              { ui: 'type', cat: 'gra', srsId: 'bs5w2:v:2',
                title: '🔤 Conjugue pra he/she/it:', main: 'have',
                answers: ['has'], expl: '⚠️ irregular: have → has.', feedbackTts: 'has' },
              { ui: 'type', cat: 'gra', srsId: 'bs5w2:v:3',
                title: '🔤 Conjugue pra he/she/it:', main: 'do',
                answers: ['does'], expl: 'termina em -o → does.', feedbackTts: 'does' },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w2:p:1',
                title: '🔧 Escolha a certa:', main: 'The company ___ (not/import) cars.',
                options: DF.shuffle([
                  { label: "doesn't import", correct: true }, { label: "don't import" },
                  { label: "not imports" }, { label: "doesn't imports" }
                ]),
                expl: "doesn't + verbo sem -s." },
              { ui: 'order', cat: 'gra', srsId: 'bs5w2:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Does the company sell abroad',
                expl: 'Does + the company (it) + verbo + resto?' },
              { ui: 'order', cat: 'gra', srsId: 'bs5w2:ord:2',
                title: '🧩 Monte a frase:', answer: 'It has stores in ten countries',
                expl: 'have → has com he/she/it.' },
              { ui: 'match', cat: 'gra', srsId: 'bs5w2:match:qa',
                title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Does it make products?', 'Yes, it does.'],
                  ["Does she work in the head office?", "No, she doesn't."],
                  ['What does it export?', 'Cars and car parts.'],
                  ['Where does he work?', 'In the R&D Department.']
                ] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Perguntas em sequência', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'gra', srsId: 'bs5w2+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Entreviste sobre uma empresa',
                prompt: 'Pergunte o que a empresa faz, se exporta e se tem loja online — tudo com Does.',
                example: "Does it make products? Does it export? Does it have an online store?",
                mustUse: ['does'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de gramática', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 3ª pessoa — palavras novas a cada rodada',
                templates: ['sell', 'design', 'export', 'make', 'build', 'deliver', 'order', 'buy'],
                cmds: ['Third person'],
                n: 6
              },
              drills: [
                { frame: 'Does it ___?', pool: ['make cars', 'sell online', 'have a website', 'export to Europe'],
                  focus: 'pergunta', ptHint: 'Ela ___?', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 19" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '🔢',
        title: 'Practically speaking',
        goal: 'Dizer números grandes e conduzir um pedido do início ao fim.',
        comp: 'Você lê números grandes em voz alta e conduz um pedido: o que quer, ' +
              'quanto, o preço, se inclui entrega, e confirma.',
        live: [
          'Listen and repeat — números de 10 a 1,000',
          'Say the numbers — pratique em dupla',
          'Listen and write the numbers — números grandes',
          'Business communication: o formulário de pedido de uma empresa real',
          'Listen — a ligação completa de pedido',
          'Key expressions: ordering, asking about price, confirming'
        ],
        bridge: 'Na aula vocês praticaram números em dupla e ouviram a ligação de ' +
                'pedido do livro. Aqui você treina o <b>and</b> depois de "hundred" — ' +
                'a armadilha dos números grandes — e conduz um pedido novo, com outra ' +
                'empresa e outros preços.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 5.',
        ican: [
          'I can say and write big numbers in English.',
          "I can order a product, saying the quantity I'd like.",
          'I can ask about price and if it includes delivery.',
          'I can confirm an order.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — números e pedidos', tag: 'estudo', mindmap: true },

          {
            id: 'numbers', icon: '🔢', name: 'Ouça e escreva o número', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'bs5w3:n:1', exact: true,
                title: '🔢 Ouça e escreva:', tts: '812', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'eight hundred and twelve',
                answers: ['812'], expl: '812 = eight hundred and twelve.', feedbackTts: '812' },
              { ui: 'type', cat: 'spl', srsId: 'bs5w3:n:2', exact: true,
                title: '🔢 Agora um com milhar:', tts: '1,340', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'one thousand, three hundred and forty',
                answers: ['1340', '1,340'], expl: '1,340 = one thousand, three hundred and forty.',
                feedbackTts: '1,340' },
              { ui: 'type', cat: 'spl', srsId: 'bs5w3:n:3', exact: true,
                title: '🔢 Sem "and" — repare:', tts: '54,000', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'fifty-four thousand',
                answers: ['54000', '54,000'], expl: 'Milhar redondo não leva "and": fifty-four thousand.',
                feedbackTts: '54,000' },
              { ui: 'type', cat: 'spl', srsId: 'bs5w3:n:4', exact: true,
                title: '🔢 O mais difícil — milhão:', tts: '2,500,000', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: 'two million, five hundred thousand',
                answers: ['2500000', '2,500,000'], expl: 'two million, five hundred thousand.',
                feedbackTts: '2,500,000' }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Diga o número em voz alta', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs5w3:rep:1', unit: 5, waSec: 'Practically Speaking',
                title: '🎤 O "and" no lugar certo:', target: 'Eight hundred and twelve.',
                ptHint: '812' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs5w3:rep:2', unit: 5, waSec: 'Practically Speaking', reps: 3,
                title: '🎤 Sem "and" — 3x:', target: 'Fifty-four thousand.',
                ptHint: '54.000' },
              { ui: 'build', cat: 'spl', srsId: 'bs5w3:build:num', unit: 5, waSec: 'Practically Speaking',
                title: '🗣️ Diga um número grande de verdade',
                prompt: 'Diga a população da sua cidade, ou um número grande que você usa no trabalho.',
                example: 'The population of my city is about two hundred thousand.',
                expl: 'Mande o áudio — o professor confere o "and" e a ordem das palavras.' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill de pedido', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs5w3:drl:order', unit: 5, waSec: 'Drill · pedido',
                title: '🔁 Drill 1 — o que você pede', focus: 'produto',
                frame: "I'd like to order ___.", ptHint: 'Eu gostaria de encomendar ___.',
                slots: ['500 small boxes', '1,200 medium boxes', '2,000 large boxes',
                        'the item number SW-410', 'a new catalogue'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs5w3:drl:price', unit: 5, waSec: 'Drill · pedido',
                title: '🔁 Drill 2 — perguntando o preço', focus: 'pergunta',
                frame: '___', ptHint: '___',
                slots: ["What's the price?", 'Does that include delivery?',
                        "How many would you like?", "Can you confirm my order by email?"] },
              { ui: 'drill', cat: 'pro', srsId: 'bs5w3:drl:confirm', unit: 5, waSec: 'Drill · pedido',
                title: '🔁 Drill 3 — confirmando', focus: 'confirmação',
                frame: "OK, that's ___.", ptHint: 'Ok, então é ___.',
                slots: ['1,200 boxes', 'confirmed', 'three hundred and twenty dollars', 'all correct'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'A ligação de pedido', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs5w3:dlg:1',
                title: '🎧 Beatriz liga pra fornecedora de embalagens',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Grace', en: 'BoxNest, good morning. Can I help you?' },
                  { who: 'Beatriz', en: "Hi, I'd like to order some shipping boxes." },
                  { who: 'Grace', en: 'How many would you like?' },
                  { who: 'Beatriz', en: "1,200 medium boxes, please. What's the price?" },
                  { who: 'Grace', en: "That's twelve cents per box. Does that include delivery?" }
                ],
                question: 'Quantas caixas a Beatriz quer?',
                options: DF.shuffle([
                  { label: '1,200 médias', correct: true }, { label: '500 pequenas' },
                  { label: '2,000 grandes' }, { label: 'ela não disse' }
                ]),
                expl: '"1,200 medium boxes, please."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs5w3:dlg:2',
                title: '🎧 Confirmando o pedido',
                lines: [
                  { who: 'Grace', en: 'The total price is one hundred and forty-four dollars.' },
                  { who: 'Beatriz', en: 'Great. Can you confirm my order by email?' },
                  { who: 'Grace', en: "Yes, of course. What's your email?" },
                  { who: 'Beatriz', en: "It's beatriz@whiterockconsultancy.com." }
                ],
                question: 'O que a Beatriz pede no final?',
                options: DF.shuffle([
                  { label: 'Confirmação por e-mail', correct: true },
                  { label: 'Um desconto' }, { label: 'Entrega grátis' }, { label: 'Mais caixas' }
                ]),
                expl: '"Can you confirm my order by email?"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs5w3:dlg:3',
                title: '🎧 Outro cliente, outro pedido',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Tom', en: "I'd like to order 3,400 large boxes." },
                  { who: 'Grace', en: "That's twenty-two cents per box. Does that include delivery?" },
                  { who: 'Tom', en: 'No, it doesn\'t. How much is delivery?' },
                  { who: 'Grace', en: "Delivery is thirty dollars." }
                ],
                question: 'A entrega está inclusa no preço?',
                options: DF.shuffle([
                  { label: 'Não — custa 30 dólares à parte', correct: true },
                  { label: 'Sim, está inclusa' }, { label: 'É grátis' }, { label: 'Não disseram' }
                ]),
                expl: '"No, it doesn\'t. Delivery is thirty dollars."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs5w3:bc:1', unit: 5, waSec: 'Backchain',
                title: '🧱 O pedido completo', ptHint: 'Eu gostaria de encomendar 500 caixas pequenas.',
                chain: ['boxes', 'small boxes', '500 small boxes', 'order 500 small boxes',
                        "I'd like to order 500 small boxes."] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs5w3:bc:2', unit: 5, waSec: 'Backchain',
                title: '🧱 A pergunta sobre entrega', ptHint: 'Isso inclui entrega?',
                chain: ['delivery', 'include delivery', 'that include delivery',
                        'Does that include delivery?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'bs5w3:ord:1',
                title: '🧩 Monte o pedido:', answer: "I'd like to order 500 boxes",
                expl: "I'd like to order + quantidade + produto." },
              { ui: 'order', cat: 'fun', srsId: 'bs5w3:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'Does that include delivery',
                expl: 'Does that include delivery?' },
              { ui: 'order', cat: 'fun', srsId: 'bs5w3:ord:3',
                title: '🧩 Monte a pergunta:', answer: 'Can you confirm my order by email',
                expl: 'Can you confirm my order by email?' },
              { ui: 'match', cat: 'fun', srsId: 'bs5w3:match:order',
                title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["I'd like to order some boxes.", 'How many would you like?'],
                  ["What's the price?", "It's twelve cents per box."],
                  ['Does that include delivery?', "No, it doesn't."],
                  ['Can you confirm by email?', "Yes, of course."]
                ] },
              { ui: 'type', cat: 'spl', srsId: 'bs5w3:pt:1', exact: true,
                title: '🔢 Complete o total (dígitos):', main: 'The total is one hundred and forty-four dollars. → $',
                answers: ['144'], expl: '$144.', feedbackTts: 'one hundred and forty-four' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Faça seu próprio pedido', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs5w3:build:order', unit: 5, waSec: 'Sua vez',
                title: '🗣️ Peça algo do início ao fim',
                prompt: 'Diga o que quer, a quantidade, pergunte o preço e peça confirmação por e-mail.',
                example: "I'd like to order 2,000 medium boxes. What's the price? Can you confirm by email?",
                mustUse: ["I'd like"] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'O pedido inteiro, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs5w3+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis do pedido',
                prompt: 'Grave a ligação completa: quem atende pergunta como pode ajudar, ' +
                        'quem liga pede, pergunta preço e entrega, e confirma.',
                example: "BoxNest, good morning. — I'd like to order 4,800 large boxes. " +
                         "What's the price? — Does that include delivery? — Can you confirm by email?",
                mustUse: ["I'd like"] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Ditado infinito de números', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              numbers: [
                { digits: 4, label: '🔢 Código de 4 dígitos:' },
                { digits: 6, label: '🔢 Um número maior:' }
              ],
              drills: [
                { frame: "I'd like to order ___.", pool: 'boxSize', focus: 'produto',
                  ptHint: 'Eu gostaria de encomendar ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 20" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: falar de você, do trabalho e de uma empresa; conduzir ' +
              'um pedido de telefone do início ao fim.',
        comp: 'Você conduz uma ligação de pedido inteira — inicia, faz o pedido, fala do ' +
              'preço, confirma e encerra — os 5 itens do speaking test.',
        live: [
          'Talking point: the question game — três rodadas (Você / Trabalho / Uma empresa)',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (pedido de caixas por telefone)'
        ],
        bridge: 'Na aula vocês jogaram o question game e o professor aplicou o teste. ' +
                'Aqui você ensaia os <b>5 itens exatos do speaking test</b> — começar, ' +
                'pedir, falar do preço, confirmar e encerrar — numa ligação nova.',
        nextLive: 'Unit 6 — Entertaining. Começa na segunda-feira seguinte.',
        ican: [
          'I can answer questions about myself, my work and a company.',
          'I can start a call and place an order.',
          'I can talk about the price.',
          'I can confirm an order and end the call.',
          'I can complete the Unit 5 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'O jogo das perguntas', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs5w4:g:1', unit: 5, waSec: 'Talking Point',
                title: '🎲 Sobre você',
                prompt: 'Responda: qual é o seu país e o seu cargo?',
                example: "I'm from Brazil. I'm a sales representative.", mustUse: ["I'm"] },
              { ui: 'build', cat: 'fun', srsId: 'bs5w4:g:2', unit: 5, waSec: 'Talking Point',
                title: '🎲 Sobre o trabalho',
                prompt: 'Responda: onde fica o seu escritório e o que você faz lá?',
                example: 'My office is in Rio. I meet customers and sell products.',
                mustUse: ['office'] },
              { ui: 'build', cat: 'fun', srsId: 'bs5w4:g:3', unit: 5, waSec: 'Talking Point',
                title: '🎲 Sobre uma empresa',
                prompt: 'Escolha uma empresa e diga o tipo e o que ela exporta.',
                example: "It's a Brazilian automobile company. It exports to Europe.",
                mustUse: ['company'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'bs5w4:pt:1',
                title: '🏭 Complete o tipo de empresa:', main: 'We sell clothes. We\'re a ___ company.',
                options: DF.shuffle([{ label: 'retail', correct: true }, { label: 'energy' }]),
                expl: 'retail = varejo.' },
              { ui: 'choice', cat: 'voc', srsId: 'bs5w4:pt:2',
                title: '🏭 Complete o tipo de empresa:', main: 'They build aeroplanes. They\'re ___ company.',
                options: DF.shuffle([{ label: 'an aeronautical', correct: true }, { label: 'a retail' }]),
                expl: 'aeronautical = aeronáutica.' },
              { ui: 'type', cat: 'gra', srsId: 'bs5w4:pt:3',
                title: '🔧 Conjugue:', main: 'Amazon (deliver) products to customers.',
                answers: ['delivers'], expl: 'it → delivers.', feedbackTts: 'delivers' },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w4:pt:4',
                title: '🔧 do ou does?', main: '___ your company export to China?',
                options: DF.shuffle([{ label: 'Does', correct: true }, { label: 'Do' }]),
                expl: 'your company = it → Does.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs5w4:pt:5',
                title: '🔧 Complete a resposta:', main: 'Does it export its products? — Yes, it ___.',
                options: DF.shuffle([{ label: 'does', correct: true }, { label: 'do' }, { label: 'is' }]),
                expl: 'Yes, it does.' },
              { ui: 'order', cat: 'fun', srsId: 'bs5w4:pt:6',
                title: '🧩 Ponha em ordem:', answer: 'What price is the item',
                expl: "What's the price of the item?" },
              { ui: 'order', cat: 'fun', srsId: 'bs5w4:pt:7',
                title: '🧩 Ponha em ordem:', answer: 'Do you have an item number',
                expl: 'Do you have an item number?' },
              { ui: 'match', cat: 'fun', srsId: 'bs5w4:pt:8',
                title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Can I help you?', "I'd like to order small boxes."],
                  ['How many would you like?', 'Five hundred, please.'],
                  ["What's the price?", "That's thirty cents per box."],
                  ['Does that include delivery?', 'Yes, it does.']
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs5w4:st:1', unit: 5, waSec: 'Speaking Test',
                title: '🏆 Item 1 de 5 — start the call',
                prompt: 'Você liga pra uma empresa de embalagens. Cumprimente e diga quem é.',
                example: "Hello, this is Felipe from EnglishFlow.", mustUse: ['this is'] },
              { ui: 'build', cat: 'fun', srsId: 'bs5w4:st:2', unit: 5, waSec: 'Speaking Test',
                title: '🏆 Item 2 de 5 — place an order',
                prompt: 'Peça 2,000 caixas médias.',
                example: "I'd like to order 2,000 medium boxes.", mustUse: ['order'] },
              { ui: 'build', cat: 'fun', srsId: 'bs5w4:st:3', unit: 5, waSec: 'Speaking Test',
                title: '🏆 Item 3 de 5 — talk about the price',
                prompt: 'Pergunte o preço e se inclui entrega.',
                example: "What's the price? Does that include delivery?", mustUse: ['price'] },
              { ui: 'build', cat: 'fun', srsId: 'bs5w4:st:4', unit: 5, waSec: 'Speaking Test',
                title: '🏆 Item 4 de 5 — confirm the order',
                prompt: 'Peça confirmação por e-mail.',
                example: 'Can you confirm my order by email?', mustUse: ['confirm'] },
              { ui: 'build', cat: 'fun', srsId: 'bs5w4:st:5', unit: 5, waSec: 'Speaking Test',
                title: '🏆 Item 5 de 5 — end the call',
                prompt: 'Agradeça e encerre.',
                example: "Thank you. Goodbye.", mustUse: ['thank'],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'O pedido de telefone inteiro', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs5w4+:b1', unit: 5, waSec: 'Praticar mais',
                title: '🔥 Os 5 itens numa gravação só',
                prompt: 'Grave a ligação inteira: comece, peça, fale do preço, confirme e encerre.',
                example: "Hello, this is Felipe. I'd like to order 2,000 medium boxes. " +
                         "What's the price? Does that include delivery? Can you confirm by email? Thank you. Goodbye.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 5', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 Nacionalidade e 3ª pessoa, misturados',
                templates: ['Brazil', 'Japan', 'the UK', 'sell', 'design', 'export'],
                cmds: ['Nationality', 'Third person'],
                n: 6
              },
              drills: [
                { frame: "It's ___.", pool: 'companyType', focus: 'tipo', ptHint: 'É uma empresa ___.', n: 4 },
                { frame: "I'd like to order ___.", pool: 'boxSize', focus: 'produto',
                  ptHint: 'Eu gostaria de encomendar ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
