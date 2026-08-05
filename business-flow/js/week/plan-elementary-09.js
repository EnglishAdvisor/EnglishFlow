/* ENGLISH FLOW — week/plan-elementary-09.js
   BUSINESS ELEMENTARY · UNIT 9 "Competition"

   Numeração corrida do Felipe: Unit 9 = semanas 33–36.
     semana 33 = U9 W1 · Working with words (competition & business qualities)
     semana 34 = U9 W2 · Language at work (comparatives)
     semana 35 = U9 W3 · Practically speaking (saying prices) + Business
                 communication (comparing and choosing)
     semana 36 = U9 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Adjetivos de competição e
   gramática são conhecimento geral, mas as empresas e cotações são
   autorais — universo Marcom Global, nunca Aldi/Lidl/Weblines do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const COMPADJ = [
    { en: 'up-to-date', pt: 'atualizado', comp: 'more up-to-date' },
    { en: 'cheap', pt: 'barato', comp: 'cheaper' },
    { en: 'expensive', pt: 'caro', comp: 'more expensive' },
    { en: 'fast', pt: 'rápido', comp: 'faster' },
    { en: 'wide', pt: 'amplo (escolha)', comp: 'wider' },
    { en: 'friendly', pt: 'atencioso', comp: 'friendlier' },
    { en: 'good', pt: 'bom', comp: 'better' },
    { en: 'bad', pt: 'ruim', comp: 'worse' }
  ];
  const CURRENCY = [
    { sym: '€', en: 'euros' }, { sym: '$', en: 'dollars' },
    { sym: '¥', en: 'yen' }, { sym: '£', en: 'pounds' }
  ];
  const COMPARE_EXPR = [
    "What's the difference?", 'How do they compare?', "They're similar to...",
    'The advantage is... / The disadvantage is...', "I prefer...", "Let's choose..."
  ];

  DF.PLAN.elementary[9] = {
    unit: 9,
    title: 'Competition',
    subtitle: 'Comparar preços e empresas, e escolher a melhor opção',
    icon: '⚖️',

    mindmap: {
      center: 'Competition',
      sub: 'Comparar empresas, produtos e preços, e escolher',
      branches: [
        {
          icon: '⚖️', name: 'Competitive adjectives',
          leaves: COMPADJ.map(function (a) { return { en: a.en, pt: a.pt }; }),
          note: 'São os adjetivos usados pra comparar empresas — preço, velocidade, ' +
                'qualidade, atendimento.'
        },
        {
          icon: '📊', name: 'Comparatives',
          leaves: [
            { en: 'cheap → cheaper', pt: 'curto (1 sílaba) → +er' },
            { en: 'expensive → more expensive', pt: 'longo (2+ sílabas) → more + adjetivo' },
            { en: 'friendly → friendlier', pt: 'termina em -y → -ier' },
            { en: 'good → better / bad → worse', pt: 'irregulares' }
          ],
          note: 'Sempre com "than" pra comparar dois: "cheaper <b>than</b>", "more ' +
                'expensive <b>than</b>".'
        },
        {
          icon: '💰', name: 'Saying prices',
          leaves: CURRENCY.map(function (c) { return { en: c.sym + ' = ' + c.en, pt: '' }; }),
          note: 'Fala o número primeiro, depois a moeda: "twenty euros", não "euros twenty".'
        },
        {
          icon: '🆚', name: 'Comparing and choosing',
          leaves: COMPARE_EXPR.map(function (e) { return { en: e, pt: '' }; }),
          note: '"similar to" pede "to" — nunca "similar than" (erro comum).'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 33" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '⚖️',
        title: 'Working with words',
        goal: 'Descrever o que torna uma empresa competitiva.',
        comp: 'Você usa adjetivos como cheap, fast, wide e friendly pra descrever preço, ' +
              'velocidade, variedade e atendimento de uma empresa.',
        live: ['Competition vocabulary', 'Describing companies', 'What makes a company competitive'],
        nextLive: 'Semana 2 · Language at work — comparatives.',
        bridge: 'Na aula vocês viram os adjetivos de competição com o exemplo de hotel do ' +
                'livro. Aqui a empresa é outra — mas os adjetivos são os mesmos.',
        ican: [
          'I can use adjectives to describe a competitive company.',
          'I can talk about price, quality, choice and service.',
          "I can say what makes a company competitive."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — competitive adjectives', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o adjetivo', tag: 'listening',
            items: COMPADJ.slice(0, 4).map(function (a) {
              var others = DF.shuffle(COMPADJ.filter(function (o) { return o.en !== a.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be9w1:radar:' + a.en,
                title: '⚖️ Que adjetivo você ouviu?',
                tts: a.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: a.en,
                options: DF.shuffle([{ label: a.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: a.en + ' = ' + a.pt, feedbackTts: a.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: descrevendo a concorrência', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be9w1:drl:1', unit: 9, waSec: 'Drill · Competitive',
                title: '🔁 Drill — o que a empresa oferece', focus: 'adjetivo',
                frame: 'Our prices are ___.', ptHint: 'Nossos preços são ___.',
                slots: ['cheap', 'competitive', 'high', 'reasonable'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'O que torna competitivo', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be9w1:dlg:1',
                title: '🎧 Elena explica a vantagem da Aurora Systems',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Noah', en: 'Why do customers choose Aurora Systems?' },
                  { who: 'Elena', en: 'Our technology is up-to-date and our delivery is fast.' },
                  { who: 'Noah', en: 'What about price?' },
                  { who: 'Elena', en: "We're not the cheapest, but our quality is high." }
                ],
                question: 'A Aurora Systems é a mais barata do mercado?',
                options: DF.shuffle([
                  { label: 'Não, mas tem alta qualidade', correct: true },
                  { label: 'Sim' }, { label: 'Não disse' }, { label: 'É a mais cara' }
                ]),
                expl: "\"We're not the cheapest, but our quality is high.\""
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be9w1:dlg:2',
                title: '🎧 O atendimento ao cliente',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: 'Is your customer service good?' },
                  { who: 'Marco', en: "Yes, our staff are very friendly and helpful." },
                  { who: 'Priya', en: 'Do you offer a wide range of products?' },
                  { who: 'Marco', en: 'Yes, a very wide choice.' }
                ],
                question: 'Como é o atendimento da empresa do Marco?',
                options: DF.shuffle([
                  { label: 'Muito amigável e prestativo', correct: true },
                  { label: 'Lento' }, { label: 'Não disse' }, { label: 'Formal' }
                ]),
                expl: '"Our staff are very friendly and helpful."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be9w1:bc:1', unit: 9, waSec: 'Backchain',
                title: '🧱 A vantagem da empresa', ptHint: 'Nossa tecnologia é atualizada e nossa entrega é rápida.',
                chain: ['fast', 'delivery is fast', 'up-to-date and our delivery is fast',
                        'Our technology is up-to-date and our delivery is fast.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be9w1:c1', title: '⚖️ Qual adjetivo?',
                main: 'Costing little money.',
                options: DF.shuffle([{ label: 'cheap', correct: true }, { label: 'expensive' }]),
                expl: 'cheap = barato.' },
              { ui: 'type', cat: 'voc', srsId: 'be9w1:t1', title: '🔧 Complete a palavra:',
                main: 'u_-t_-d_te (bem moderno)', answers: ['up-to-date'], expl: 'up-to-date.' },
              { ui: 'order', cat: 'fun', srsId: 'be9w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'Our prices are very competitive',
                expl: 'Our prices are very competitive.' },
              { ui: 'match', cat: 'fun', srsId: 'be9w1:match:1', title: '🔗 Ligue à tradução:',
                pairs: COMPADJ.slice(0, 4).map(function (a) { return [a.en, a.pt]; }) }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale da vantagem da sua empresa', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w1:build:1', unit: 9, waSec: 'Sua vez',
                title: '🗣️ Diga o que torna sua empresa competitiva',
                prompt: 'Use dois adjetivos de competição.',
                example: 'Our service is fast and our staff are friendly.', mustUse: ['fast'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A vantagem completa', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w1+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Descreva três vantagens da sua empresa',
                prompt: 'Grave três frases, uma por vantagem.',
                example: 'Our prices are competitive. Our delivery is fast. Our staff are friendly.',
                mustUse: ['competitive'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de vantagens', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Our prices are ___.', pool: ['cheap', 'competitive', 'high', 'reasonable'],
                  focus: 'adjetivo', ptHint: 'Nossos preços são ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 34" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '📊',
        title: 'Language at work',
        goal: 'Comparar duas empresas ou produtos — comparatives.',
        comp: 'Você forma comparativos corretamente (cheaper, more expensive, friendlier, ' +
              'better/worse) e usa "than" pra comparar duas coisas.',
        live: ['Comparatives — short adjectives (+er)', 'Comparatives — long adjectives (more + adj)', 'Irregular comparatives'],
        nextLive: 'Semana 3 · Practically speaking — saying prices, e Business ' +
                   'communication — comparing and choosing.',
        bridge: 'Na aula vocês praticaram comparativos com hotéis do livro. Aqui a comparação ' +
                'é outra — mas as regras de -er/more não mudam.',
        ican: [
          'I can form comparative adjectives correctly.',
          'I can use "than" to compare two things.',
          'I can use irregular comparatives (better, worse).'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — comparatives', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: comparando', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be9w2:drl:1', unit: 9, waSec: 'Drill · Comparatives',
                title: '🔁 Drill — mais barato/rápido/etc.', focus: 'comparativo',
                frame: 'Our product is ___ than theirs.', ptHint: 'Nosso produto é ___ que o deles.',
                slots: COMPADJ.map(function (a) { return a.comp; }) }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Comparando fornecedores', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be9w2:dlg:1',
                title: '🎧 Kenji compara dois fornecedores',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Kenji', en: 'Is Vertex Logistics cheaper than Nova Energy?' },
                  { who: 'Elena', en: 'Yes, it is. But their delivery is slower.' },
                  { who: 'Kenji', en: 'Which is better for us?' },
                  { who: 'Elena', en: "I think Nova Energy is better. It's faster and more reliable." }
                ],
                question: 'Qual é a desvantagem da Vertex Logistics?',
                options: DF.shuffle([
                  { label: 'A entrega é mais lenta', correct: true },
                  { label: 'É mais cara' }, { label: 'A qualidade é ruim' }, { label: 'Não disse' }
                ]),
                expl: '"Yes, it is. But their delivery is slower."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be9w2:dlg:2',
                title: '🎧 O hotel mais caro',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: 'Is this hotel more expensive than the other one?' },
                  { who: 'Marco', en: "Yes, but it's better located." },
                  { who: 'Priya', en: 'Is it worth it?' },
                  { who: 'Marco', en: 'I think so, it\'s much more comfortable.' }
                ],
                question: 'Por que o hotel é mais caro, segundo o Marco?',
                options: DF.shuffle([
                  { label: 'Localização melhor e mais confortável', correct: true },
                  { label: 'É maior' }, { label: 'Tem piscina' }, { label: 'Não disse' }
                ]),
                expl: "\"It's better located... much more comfortable.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be9w2:bc:1', unit: 9, waSec: 'Backchain',
                title: '🧱 A comparação', ptHint: 'Nossos preços são mais baratos que os deles.',
                chain: ['theirs', 'than theirs', 'cheaper than theirs',
                        'Our prices are cheaper than theirs.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'gra', srsId: 'be9w2:t1', title: '🔧 Comparativo:',
                main: 'cheap → ___', answers: ['cheaper'], expl: 'curto → +er.', feedbackTts: 'cheaper' },
              { ui: 'type', cat: 'gra', srsId: 'be9w2:t2', title: '🔧 Comparativo:',
                main: 'expensive → ___', answers: ['more expensive'], expl: 'longo → more + adjetivo.' },
              { ui: 'type', cat: 'gra', srsId: 'be9w2:t3', title: '🔧 Comparativo irregular:',
                main: 'good → ___', answers: ['better'], expl: 'good → better (irregular).' },
              { ui: 'choice', cat: 'gra', srsId: 'be9w2:c1', title: '🔧 -y → -ier:',
                main: 'friendly → ___',
                options: DF.shuffle([{ label: 'friendlier', correct: true }, { label: 'more friendly' }]),
                expl: 'termina em -y → troca por -ier.' },
              { ui: 'order', cat: 'fun', srsId: 'be9w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'Our service is better than theirs',
                expl: 'Our service is better than theirs.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Compare duas empresas de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w2:build:1', unit: 9, waSec: 'Sua vez',
                title: '🗣️ Compare seu produto/serviço com o de um concorrente',
                prompt: 'Use um comparativo com "than".',
                example: 'Our delivery is faster than our competitor\'s.', mustUse: ['than'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Bateria de comparativos', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w2+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Compare três coisas diferentes',
                prompt: 'Grave três comparações usando adjetivos diferentes.',
                example: 'Our prices are cheaper than theirs. Our staff are friendlier. Our ' +
                         'quality is better.',
                mustUse: ['than'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de comparativos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Our product is ___ than theirs.',
                  pool: COMPADJ.map(function (a) { return a.comp; }),
                  focus: 'comparativo', ptHint: 'Nosso produto é ___ que o deles.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 35" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '💰',
        title: 'Practically speaking',
        goal: 'Dizer preços em voz alta, e comparar duas opções pra escolher uma.',
        comp: 'Você diz preços em moedas diferentes e conduz uma comparação — pergunta a ' +
              'diferença, fala vantagens/desvantagens, e escolhe.',
        live: [
          'Saying prices — currencies',
          "Business communication: comparing and choosing",
          'Key expressions: asking about differences, choosing'
        ],
        bridge: 'Na aula vocês praticaram preços e a comparação de fornecedores do livro. ' +
                'Aqui a cotação é outra — mas "What\'s the difference?" é a mesma expressão.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 9.',
        ican: [
          'I can say prices in different currencies.',
          'I can ask about the difference between two options.',
          'I can talk about advantages and disadvantages.',
          "I can choose between two options and say why."
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — prices & comparing', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e escreva o preço', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'be9w3:p:1', exact: true,
                title: '💰 Ouça e escreva:', tts: 'twenty-five euros', ttsLabel: '🔊 Ouvir',
                autoPlay: true, showIfNoTTS: 'twenty-five euros', answers: ['€25', '25'],
                expl: '€25 = twenty-five euros.', feedbackTts: 'twenty-five euros' },
              { ui: 'type', cat: 'spl', srsId: 'be9w3:p:2', exact: true,
                title: '💰 E este:', tts: 'seventy dollars fifty', ttsLabel: '🔊 Ouvir',
                autoPlay: true, showIfNoTTS: 'seventy dollars fifty', answers: ['$70.50', '70.50'],
                expl: '$70.50 = seventy dollars fifty.', feedbackTts: 'seventy dollars fifty' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: comparando e escolhendo', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be9w3:drl:1', unit: 9, waSec: 'Drill · Comparing',
                title: '🔁 Drill — perguntando a diferença', focus: 'comparação',
                frame: '___', ptHint: '___',
                slots: ["What's the difference?", 'How do they compare?', "They're similar to...",
                        "The advantage is..."] },
              { ui: 'drill', cat: 'pro', srsId: 'be9w3:drl:2', unit: 9, waSec: 'Drill · Choosing',
                title: '🔁 Drill — escolhendo', focus: 'escolha',
                frame: "I prefer ___.", ptHint: 'Eu prefiro ___.',
                slots: ['the first option', 'this supplier', 'the cheaper one', 'this quote'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Escolhendo o fornecedor', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be9w3:dlg:1',
                title: '🎧 Sara compara duas cotações',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Sara', en: "What's the difference between the two quotes?" },
                  { who: 'Noah', en: 'This one is cheaper, but delivery is slower.' },
                  { who: 'Sara', en: "What's the advantage of the other one?" },
                  { who: 'Noah', en: "It's more expensive, but faster and more reliable." }
                ],
                question: 'Qual é a desvantagem da cotação mais barata?',
                options: DF.shuffle([
                  { label: 'Entrega mais lenta', correct: true },
                  { label: 'Qualidade ruim' }, { label: 'Sem garantia' }, { label: 'Não disse' }
                ]),
                expl: '"This one is cheaper, but delivery is slower."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be9w3:dlg:2',
                title: '🎧 A decisão final',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'Which one do you prefer?' },
                  { who: 'Priya', en: "I prefer the faster one. Let's choose that." },
                  { who: 'Kenji', en: 'OK, even though it\'s more expensive.' },
                  { who: 'Priya', en: "Yes, but it's worth it." }
                ],
                question: 'Qual opção a Priya prefere?',
                options: DF.shuffle([
                  { label: 'A mais rápida', correct: true }, { label: 'A mais barata' },
                  { label: 'Nenhuma' }, { label: 'Não disse' }
                ]),
                expl: '"I prefer the faster one."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be9w3:bc:1', unit: 9, waSec: 'Backchain',
                title: '🧱 Perguntando a diferença', ptHint: 'Qual é a diferença entre as duas cotações?',
                chain: ['quotes', 'the two quotes', 'between the two quotes',
                        "What's the difference between the two quotes?"] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'be9w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'What is the difference between them',
                expl: "What's the difference between them?" },
              { ui: 'order', cat: 'fun', srsId: 'be9w3:ord:2',
                title: '🧩 Monte a frase:', answer: 'Let us choose the cheaper one',
                expl: "Let's choose the cheaper one." },
              { ui: 'match', cat: 'fun', srsId: 'be9w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["What's the difference?", "This one is cheaper."],
                  ['Which do you prefer?', 'I prefer the faster one.'],
                  ["What's the advantage?", "It's more reliable."]
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'be9w3:c1', title: '🆚 Preposição certa:',
                main: 'This company is similar ___ ours.',
                options: DF.shuffle([{ label: 'to', correct: true }, { label: 'than' }]),
                expl: 'similar TO, não "similar than".' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Compare e escolha de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w3:build:1', unit: 9, waSec: 'Sua vez',
                title: '🗣️ Compare duas opções e escolha uma',
                prompt: 'Grave: pergunte a diferença, fale uma vantagem de cada, e escolha.',
                example: "What's the difference? This one is cheaper, but that one is faster. " +
                         "I prefer the faster one.",
                mustUse: ['I prefer'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A comparação completa, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w3+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Compare duas cotações e feche a decisão',
                prompt: 'Grave: diferença, vantagem de cada uma, e a escolha final com motivo.',
                example: "What's the difference? This one is cheaper, but slower. That one is " +
                         "more expensive, but faster. Let's choose the faster one — it's worth it.",
                mustUse: ["Let's choose"] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de comparação', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I prefer ___.',
                  pool: ['the first option', 'this supplier', 'the cheaper one', 'this quote'],
                  focus: 'escolha', ptHint: 'Eu prefiro ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 36" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: apresentar uma empresa, comparar com um concorrente, e escolher.',
        comp: 'Você apresenta uma empresa, compara com outra, fala das diferenças, e chega a ' +
              'uma decisão em conjunto — os itens do speaking test.',
        live: [
          'Talking point: supermarket competition — Aldi e Lidl',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (comparar e escolher um fornecedor)'
        ],
        bridge: 'Na aula vocês discutiram a competição de supermercados e o professor ' +
                'aplicou o teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — ' +
                'apresentar, comparar e escolher — numa situação nova.',
        nextLive: 'Próxima unidade. Começa na segunda-feira seguinte.',
        ican: [
          'I can present a company and what it offers.',
          'I can ask about differences between two companies.',
          'I can talk about similarities.',
          'I can choose and agree on one company.',
          'I can complete the Unit 9 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'Compare dois negócios', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w4:g:1', unit: 9, waSec: 'Talking Point',
                title: '🎲 Compare dois supermercados ou lojas',
                prompt: 'Diga uma diferença entre dois lugares que você conhece.',
                example: 'This shop is cheaper, but that one has a wider choice.', mustUse: ['than'] },
              { ui: 'build', cat: 'fun', srsId: 'be9w4:g:2', unit: 9, waSec: 'Talking Point',
                title: '🎲 Escolha e diga por quê',
                prompt: 'Diga qual você prefere e o motivo.',
                example: 'I prefer this one because it\'s more reliable.', mustUse: ['I prefer'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be9w4:pt:1', title: '⚖️ Qual adjetivo?',
                main: 'Including a large number of different things.',
                options: DF.shuffle([{ label: 'wide', correct: true }, { label: 'cheap' }]),
                expl: 'wide choice = ampla escolha.' },
              { ui: 'choice', cat: 'gra', srsId: 'be9w4:pt:2', title: '🔧 Comparativo:',
                main: 'This one is ___ (cheap) than that one.',
                options: DF.shuffle([{ label: 'cheaper', correct: true }, { label: 'more cheap' }]),
                expl: 'cheap → cheaper.' },
              { ui: 'choice', cat: 'gra', srsId: 'be9w4:pt:3', title: '🔧 Irregular:',
                main: 'Their service is ___ (bad) than ours.',
                options: DF.shuffle([{ label: 'worse', correct: true }, { label: 'more bad' }]),
                expl: 'bad → worse.' },
              { ui: 'order', cat: 'fun', srsId: 'be9w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'What is the difference',
                expl: "What's the difference?" },
              { ui: 'match', cat: 'fun', srsId: 'be9w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ["What's the difference?", 'This one is faster.'],
                  ['Which do you prefer?', 'I prefer this one.'],
                  ["Let's choose this one.", "OK, that's fine."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w4:st:1', unit: 9, waSec: 'Speaking Test',
                title: '🏆 Item 1 — present the company',
                prompt: 'Apresente a empresa e o que ela oferece.',
                example: 'This company offers fast delivery and good prices.', mustUse: ['offers'] },
              { ui: 'build', cat: 'fun', srsId: 'be9w4:st:2', unit: 9, waSec: 'Speaking Test',
                title: '🏆 Item 2 — ask about differences',
                prompt: 'Pergunte a diferença entre as duas opções.',
                example: "What's the difference between them?", mustUse: ['difference'] },
              { ui: 'build', cat: 'fun', srsId: 'be9w4:st:3', unit: 9, waSec: 'Speaking Test',
                title: '🏆 Item 3 — talk about similarities',
                prompt: 'Diga uma semelhança entre as duas.',
                example: "They're similar in price.", mustUse: ['similar'] },
              { ui: 'build', cat: 'fun', srsId: 'be9w4:st:4', unit: 9, waSec: 'Speaking Test',
                title: '🏆 Item 4 — choose and agree',
                prompt: 'Escolha uma opção e confirme.',
                example: "Let's choose this one. It's the best value.", mustUse: ["Let's choose"],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A comparação completa numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be9w4+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave tudo: apresente, pergunte a diferença, fale de semelhanças, e escolha.',
                example: "This company offers fast delivery. What's the difference between them? " +
                         "They're similar in price. Let's choose this one.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 9', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Our product is ___ than theirs.',
                  pool: COMPADJ.map(function (a) { return a.comp; }),
                  focus: 'comparativo', ptHint: 'Nosso produto é ___ que o deles.', n: 3 },
                { frame: 'I prefer ___.',
                  pool: ['the first option', 'this supplier', 'the cheaper one', 'this quote'],
                  focus: 'escolha', ptHint: 'Eu prefiro ___.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
