/* ENGLISH FLOW — week/plan-elementary-07.js
   BUSINESS ELEMENTARY · UNIT 7 "Departments"

   Numeração corrida do Felipe: Unit 7 = semanas 25–28.
     semana 25 = U7 W1 · Working with words (departments & responsibilities)
     semana 26 = U7 W2 · Language at work (prepositions of place & movement)
     semana 27 = U7 W3 · Practically speaking (this/that/these/those) +
                 Business communication (leaving phone messages)
     semana 28 = U7 W4 · Talking point + teste (fecha a unidade)

   Mesma regra de sempre: O APP NÃO REPETE A AULA. Departamentos e
   preposições são conhecimento geral, mas o escritório, o mapa e as
   ligações são autorais — universo Whiterock Consultancy, nunca Komancom/Jim/
   Olivia do livro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  const DEPT = [
    { en: 'Logistics', pt: 'logística', does: 'organizes deliveries' },
    { en: 'Finance', pt: 'financeiro', does: 'deals with accounts' },
    { en: 'Sales', pt: 'vendas', does: 'contacts customers' },
    { en: 'IT', pt: 'tecnologia da informação', does: 'checks computers' },
    { en: 'R&D', pt: 'pesquisa e desenvolvimento', does: 'develops new products' },
    { en: 'HR', pt: 'recursos humanos', does: 'supports employees' },
    { en: 'Marketing', pt: 'marketing', does: "promotes the company's products" },
    { en: 'Customer Services', pt: 'atendimento ao cliente', does: "deals with customers' questions" }
  ];
  const DEPTVERB = [
    { en: 'be in charge of', pt: 'ser responsável/chefiar' },
    { en: 'be responsible for', pt: 'ser responsável por (uma tarefa)' },
    { en: 'deal with', pt: 'lidar com/tratar de' },
    { en: 'develop', pt: 'desenvolver' },
    { en: 'check', pt: 'verificar' },
    { en: 'organize', pt: 'organizar' },
    { en: 'contact', pt: 'contatar' },
    { en: 'promote', pt: 'promover' },
    { en: 'support', pt: 'apoiar/dar suporte' }
  ];
  const PREPPLACE = ['above', 'below', 'behind', 'in front of', 'next to', 'between', 'opposite'];
  const PREPMOVE = ['into', 'out of', 'along', 'past', 'up', 'down'];

  DF.PLAN.elementary[7] = {
    unit: 7,
    title: 'Departments',
    subtitle: 'Quem faz o quê, e onde fica cada departamento',
    icon: '🏢',

    mindmap: {
      center: 'Departments',
      sub: 'Falar dos departamentos e da localização deles no escritório',
      branches: [
        {
          icon: '🏢', name: 'Departments',
          leaves: DEPT.map(function (d) { return { en: d.en, pt: d.pt + ' — ' + d.does }; }),
          note: 'Cada departamento tem um verbo típico: Sales <b>contacts</b>, Finance ' +
                '<b>deals with</b>, R&D <b>develops</b>.'
        },
        {
          icon: '📋', name: 'Responsibility verbs',
          leaves: DEPTVERB.map(function (v) { return { en: v.en, pt: v.pt }; }),
          note: '"be responsible for" e "be in charge of" são quase sinônimos — o segundo ' +
                'soa um pouco mais de comando/chefia.'
        },
        {
          icon: '📍', name: 'Prepositions of place',
          leaves: PREPPLACE.map(function (p) { return { en: p, pt: '' }; }),
          note: '"in front of" = na frente de. "opposite" = do lado oposto, se olhando um ' +
                'pro outro.'
        },
        {
          icon: '🧭', name: 'Prepositions of movement',
          leaves: PREPMOVE.map(function (p) { return { en: p, pt: '' }; }),
          note: 'Direção usa o imperativo: "Go along this road" — sem sujeito, é uma instrução.'
        },
        {
          icon: '📞', name: 'Leaving phone messages',
          leaves: [
            { en: 'Could I speak to...?', pt: 'pedir pra falar com alguém' },
            { en: 'Could I leave a message?', pt: 'pedir pra deixar recado' },
            { en: 'Can she call me back?', pt: 'pedir retorno' },
            { en: 'Can I have a contact number?', pt: 'pedir telefone de contato' },
            { en: "I'll give him your message.", pt: 'confirmar que vai entregar o recado' }
          ],
          note: 'Depois de receber o recado, quem atende sempre confirma repetindo (nome, ' +
                'número) — "So that\'s... Is that right?"'
        }
      ]
    },

    weeks: [
      // ══════════════════ SEMANA 1 (a "semana 25" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🏢',
        title: 'Working with words',
        goal: 'Nomear os departamentos e dizer do que cada um é responsável.',
        comp: 'Você nomeia os departamentos comuns de uma empresa e diz o que cada um faz, ' +
              'usando o verbo certo (deal with, develop, promote, support).',
        live: ['Departments and responsibilities', 'Responsibility verbs', 'Career profiles'],
        nextLive: 'Semana 2 · Language at work — prepositions of place and movement.',
        bridge: 'Na aula vocês viram os departamentos com o exemplo de empresa do livro. ' +
                'Aqui a empresa é outra — mas os departamentos são os mesmos.',
        ican: [
          'I can name common company departments.',
          'I can say what a department is responsible for.',
          'I can use verbs like deal with, develop, promote and support.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — departments', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '🎧', name: 'Ouça e identifique o departamento', tag: 'listening',
            items: DEPT.slice(0, 4).map(function (d) {
              var others = DF.shuffle(DEPT.filter(function (o) { return o.en !== d.en; })).slice(0, 3);
              return {
                ui: 'choice', cat: 'pro', srsId: 'be7w1:radar:' + d.en,
                title: '🏢 Que departamento você ouviu?',
                tts: d.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: d.en,
                options: DF.shuffle([{ label: d.en, correct: true }].concat(
                  others.map(function (o) { return { label: o.en }; }))),
                expl: d.en + ' = ' + d.pt, feedbackTts: d.en
              };
            })
          },

          {
            id: 'drill', icon: '🔁', name: 'Drill: o que cada departamento faz', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be7w1:drl:1', unit: 7, waSec: 'Drill · Departments',
                title: '🔁 Drill 1 — o departamento', focus: 'departamento',
                frame: 'I work in ___.', ptHint: 'Eu trabalho em ___.',
                slots: DEPT.map(function (d) { return d.en; }) },
              { ui: 'drill', cat: 'pro', srsId: 'be7w1:drl:2', unit: 7, waSec: 'Drill · Responsibility',
                title: '🔁 Drill 2 — a responsabilidade', focus: 'responsabilidade',
                frame: 'My department is responsible for ___.', ptHint: 'Meu departamento é responsável por ___.',
                slots: ['customer questions', 'new products', 'deliveries', 'the accounts', 'the computers'] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Quem faz o quê', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be7w1:dlg:1',
                title: '🎧 Elena explica seu departamento',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Noah', en: 'What department do you work in?' },
                  { who: 'Elena', en: "I'm in HR. I support the employees." },
                  { who: 'Noah', en: 'And who deals with new products?' },
                  { who: 'Elena', en: 'That\'s R&D. They develop everything new.' }
                ],
                question: 'Qual departamento lida com produtos novos?',
                options: DF.shuffle([
                  { label: 'R&D', correct: true }, { label: 'HR' },
                  { label: 'Sales' }, { label: 'Não disse' }
                ]),
                expl: "\"That's R&D. They develop everything new.\""
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be7w1:dlg:2',
                title: '🎧 O departamento de Logística',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Priya', en: 'Is Logistics responsible for deliveries?' },
                  { who: 'Marco', en: 'Yes, they organize all our deliveries.' },
                  { who: 'Priya', en: 'And who checks the invoices?' },
                  { who: 'Marco', en: 'Finance deals with that.' }
                ],
                question: 'Quem verifica as faturas?',
                options: DF.shuffle([
                  { label: 'Finance', correct: true }, { label: 'Logistics' },
                  { label: 'Sales' }, { label: 'Não disse' }
                ]),
                expl: '"Finance deals with that."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be7w1:bc:1', unit: 7, waSec: 'Backchain',
                title: '🧱 A responsabilidade do departamento', ptHint: 'Meu departamento é responsável pelas novas contratações.',
                chain: ['staff', 'new staff', 'for new staff', 'responsible for new staff',
                        'My department is responsible for new staff.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be7w1:c1', title: '🏢 Qual departamento?',
                main: 'Deals with customer questions and problems.',
                options: DF.shuffle([{ label: 'Customer Services', correct: true }, { label: 'Marketing' }]),
                expl: 'Customer Services = atendimento ao cliente.' },
              { ui: 'type', cat: 'voc', srsId: 'be7w1:t1', title: '🔧 Complete a palavra:',
                main: 'm_rk_t_ng (promove os produtos da empresa)', answers: ['marketing'], expl: 'marketing.' },
              { ui: 'order', cat: 'fun', srsId: 'be7w1:ord:1',
                title: '🧩 Monte a frase:', answer: 'Finance deals with the accounts',
                expl: 'Finance deals with the accounts.' },
              { ui: 'match', cat: 'fun', srsId: 'be7w1:match:1', title: '🔗 Ligue o departamento à função:',
                pairs: DEPT.slice(0, 4).map(function (d) { return [d.en, d.does]; }) }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Fale do seu departamento', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w1:build:1', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Diga em que departamento você trabalha e o que faz',
                prompt: 'Use "I work in..." e "I\'m responsible for...".',
                example: "I work in Sales. I'm responsible for contacting new customers.",
                mustUse: ['I work in'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'A empresa inteira, departamento a departamento', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w1+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Descreva três departamentos e o que fazem',
                prompt: 'Grave três frases, uma por departamento.',
                example: 'Sales contacts customers. Finance deals with the accounts. IT checks the computers.',
                mustUse: ['deals with'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Drill infinito de departamentos', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I work in ___.', pool: DEPT.map(function (d) { return d.en; }),
                  focus: 'departamento', ptHint: 'Eu trabalho em ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 2 (a "semana 26" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '📍',
        title: 'Language at work',
        goal: 'Dizer onde fica um lugar e dar direções pra chegar lá.',
        comp: 'Você usa preposições de lugar (above, behind, next to, between) pra dizer ' +
              'onde algo fica, e preposições de movimento (into, along, past) pra dar direções.',
        live: ['Prepositions of place', 'Prepositions of movement', 'Giving directions'],
        nextLive: 'Semana 3 · Practically speaking — this/that/these/those, e Business ' +
                   'communication — leaving phone messages.',
        bridge: 'Na aula vocês praticaram preposições com o mapa do escritório do livro. ' +
                'Aqui o escritório é outro — mas "next to", "behind" e "along" são as mesmas.',
        ican: [
          'I can say where a place is using prepositions of place.',
          'I can give directions using prepositions of movement.',
          'I can understand simple directions.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — prepositions', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: onde fica e como chegar', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'be7w2:drl:place', unit: 7, waSec: 'Drill · Place',
                title: '🔁 Drill 1 — onde fica', focus: 'lugar',
                frame: 'Finance is ___ Reception.', ptHint: 'O financeiro fica ___ a recepção.',
                slots: PREPPLACE },
              { ui: 'drill', cat: 'gra', srsId: 'be7w2:drl:move', unit: 7, waSec: 'Drill · Movement',
                title: '🔁 Drill 2 — como chegar', focus: 'direção',
                frame: 'Go ___ the corridor.', ptHint: '___ o corredor.',
                slots: PREPMOVE }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Encontrando o escritório', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be7w2:dlg:1',
                title: '🎧 Kenji pergunta o caminho pro IT',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Kenji', en: "Excuse me, where is the IT department?" },
                  { who: 'Sara', en: "It's on the second floor, next to Marketing." },
                  { who: 'Kenji', en: 'How do I get there?' },
                  { who: 'Sara', en: 'Go along this corridor and take the lift up.' }
                ],
                question: 'Onde fica o departamento de TI?',
                options: DF.shuffle([
                  { label: 'No segundo andar, do lado do Marketing', correct: true },
                  { label: 'No térreo' }, { label: 'Do lado da recepção' }, { label: 'Não disse' }
                ]),
                expl: '"It\'s on the second floor, next to Marketing."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be7w2:dlg:2',
                title: '🎧 A sala de reunião',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Elena', en: "Where's the meeting room?" },
                  { who: 'Priya', en: "It's between HR and Finance, behind Reception." },
                  { who: 'Elena', en: 'Thanks. Is it in front of the lift?' },
                  { who: 'Priya', en: 'No, it\'s opposite the cafeteria.' }
                ],
                question: 'Onde fica a sala de reunião?',
                options: DF.shuffle([
                  { label: 'Entre RH e Financeiro, atrás da recepção', correct: true },
                  { label: 'Do lado do elevador' }, { label: 'No térreo' }, { label: 'Não disse' }
                ]),
                expl: "\"It's between HR and Finance, behind Reception.\""
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be7w2:bc:1', unit: 7, waSec: 'Backchain',
                title: '🧱 Dando direção', ptHint: 'Siga por este corredor e vire à esquerda.',
                chain: ['left', 'turn left', 'and turn left', 'this corridor and turn left',
                        'Go along this corridor and turn left.'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'be7w2:c1', title: '📍 Preposição certa:',
                main: 'The car park is ___ the building. (embaixo)',
                options: DF.shuffle([{ label: 'below', correct: true }, { label: 'above' }]),
                expl: 'below = embaixo.' },
              { ui: 'choice', cat: 'gra', srsId: 'be7w2:c2', title: '🧭 Preposição certa:',
                main: 'Walk ___ the door and turn right. (através/por)',
                options: DF.shuffle([{ label: 'through', correct: true }, { label: 'above' }]),
                expl: 'through = através de/por dentro.' },
              { ui: 'type', cat: 'gra', srsId: 'be7w2:t1', title: '🔧 Complete:',
                main: 'HR is ___ Sales and Finance. (entre)', answers: ['between'],
                expl: 'between = entre (dois).' },
              { ui: 'order', cat: 'fun', srsId: 'be7w2:ord:1',
                title: '🧩 Ponha em ordem:', answer: 'Where is the meeting room',
                expl: 'Where is the meeting room?' },
              { ui: 'match', cat: 'fun', srsId: 'be7w2:match:1', title: '🔗 Ligue à tradução:',
                pairs: [['next to', 'do lado de'], ['behind', 'atrás de'],
                        ['in front of', 'na frente de'], ['opposite', 'em frente/oposto']] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Dê direções de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w2:build:1', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Explique como chegar num lugar do seu escritório ou casa',
                prompt: 'Use pelo menos duas preposições de movimento.',
                example: 'Go along the corridor, then go up the stairs.', mustUse: ['along'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'O mapa completo do escritório', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w2+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Descreva a localização de 3 departamentos',
                prompt: 'Grave: onde fica cada departamento, usando 3 preposições diferentes.',
                example: 'HR is next to Finance. IT is above Marketing. Reception is in front of the lift.',
                mustUse: ['next to'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Drill infinito de preposições', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Finance is ___ Reception.', pool: PREPPLACE,
                  focus: 'lugar', ptHint: 'O financeiro fica ___ a recepção.', n: 4 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 3 (a "semana 27" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '📞',
        title: 'Practically speaking',
        goal: 'Apontar objetos (this/that/these/those), e deixar um recado por telefone.',
        comp: 'Você usa this/that/these/those corretamente, e conduz uma ligação — pede pra ' +
              'falar com alguém, deixa um recado, e confirma os dados.',
        live: [
          'this / that / these / those',
          "Business communication: leaving phone messages",
          'Key expressions: asking to speak to someone, checking details'
        ],
        bridge: 'Na aula vocês praticaram this/that e as ligações do livro. Aqui a ligação é ' +
                'outra — mas "Could I leave a message?" é a mesma expressão.',
        nextLive: 'Semana 4 · Talking point e o teste que fecha a Unit 7.',
        ican: [
          'I can use this/that/these/those correctly.',
          'I can ask to speak to someone on the phone.',
          'I can leave a message with my contact number.',
          'I can check and confirm details.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — this/that + phone messages', tag: 'estudo', mindmap: true },

          {
            id: 'drill', icon: '🔁', name: 'Drill: recado por telefone', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'be7w3:drl:speak', unit: 7, waSec: 'Drill · Speaking to',
                title: '🔁 Drill 1 — pedindo pra falar com alguém', focus: 'pedido',
                frame: 'Could I speak to ___, please?', ptHint: 'Eu poderia falar com ___, por favor?',
                slots: ['Elena', 'the manager', 'someone in Sales', 'Mr. Silva'] },
              { ui: 'drill', cat: 'pro', srsId: 'be7w3:drl:message', unit: 7, waSec: 'Drill · Message',
                title: '🔁 Drill 2 — deixando o recado', focus: 'recado',
                frame: '___', ptHint: '___',
                slots: ['Could I leave a message?', 'Can she call me back?',
                        'Can I have a contact number?', "I'll give him your message."] }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Deixando um recado', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be7w3:dlg:1',
                title: '🎧 Marco liga pra falar com a Priya',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Marco', en: 'Could I speak to Priya, please?' },
                  { who: 'Receptionist', en: "I'm sorry, she isn't available. Could I leave a message?" },
                  { who: 'Marco', en: "Yes, please. Can she call me back? My number is 0778 456365." },
                  { who: 'Receptionist', en: "So that's 0778 456365. Is that right?" }
                ],
                question: 'O que a recepcionista confirma no final?',
                options: DF.shuffle([
                  { label: 'O número de telefone', correct: true },
                  { label: 'O nome' }, { label: 'A empresa' }, { label: 'Nada' }
                ]),
                expl: '"So that\'s 0778 456365. Is that right?"'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'be7w3:dlg:2',
                title: '🎧 O objeto da mesa',
                sub: 'Sem texto na tela.',
                hideText: true,
                lines: [
                  { who: 'Kenji', en: 'What is this?' },
                  { who: 'Elena', en: "That's my new laptop." },
                  { who: 'Kenji', en: 'And those, on the desk?' },
                  { who: 'Elena', en: 'These are the new product samples.' }
                ],
                question: 'O que está na mesa?',
                options: DF.shuffle([
                  { label: 'Amostras de produtos novos', correct: true },
                  { label: 'Um laptop novo' }, { label: 'Documentos' }, { label: 'Nada' }
                ]),
                expl: '"These are the new product samples."'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'be7w3:bc:1', unit: 7, waSec: 'Backchain',
                title: '🧱 Deixando o recado', ptHint: 'Você pode dizer pra ela me ligar de volta?',
                chain: ['back', 'me back', 'call me back', 'her to call me back',
                        'Can you ask her to call me back?'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'be7w3:c1', title: '👉 Certo:',
                main: '___ is your visitor pass. (o crachá na sua mão, singular)',
                options: DF.shuffle([{ label: 'This', correct: true }, { label: 'These' }]),
                expl: 'Perto e singular = this.' },
              { ui: 'choice', cat: 'gra', srsId: 'be7w3:c2', title: '👉 Certo:',
                main: '___ are two of my colleagues. (apontando pra pessoas perto, plural)',
                options: DF.shuffle([{ label: 'These', correct: true }, { label: 'This' }]),
                expl: 'Perto e plural = these.' },
              { ui: 'order', cat: 'fun', srsId: 'be7w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Could I leave a message',
                expl: 'Could I leave a message?' },
              { ui: 'match', cat: 'fun', srsId: 'be7w3:match:1', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Could I speak to Priya?', "I'm sorry, she isn't available."],
                  ['Can she call me back?', "Sure, what's your number?"],
                  ['Is that right?', "Yes, that's right."]
                ] }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Deixe um recado de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w3:build:1', unit: 7, waSec: 'Sua vez',
                title: '🗣️ Peça pra falar com alguém e deixe seu recado',
                prompt: 'Grave: peça pra falar com alguém, deixe o recado e o telefone.',
                example: "Could I speak to Elena, please? Could I leave a message? Can she call me back?",
                mustUse: ['Could I speak to'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'A ligação inteira, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w3+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis da ligação',
                prompt: 'Grave os dois lados: quem liga pede por alguém e deixa recado; quem ' +
                        'atende confirma os dados.',
                example: "Could I speak to Elena, please? I'm sorry, she isn't available. Could " +
                         "I leave a message? Can she call me back? My number is 0778 456365. So " +
                         "that's 0778 456365. Is that right?",
                mustUse: ['Could I speak to'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Drill infinito de recados', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'Could I speak to ___, please?',
                  pool: ['Elena', 'the manager', 'someone in Sales', 'Mr. Silva'],
                  focus: 'pedido', ptHint: 'Eu poderia falar com ___, por favor?', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 28" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: apresentar seu departamento, o escritório, e outros departamentos.',
        comp: 'Você apresenta seu cargo e departamento, descreve onde fica o escritório com ' +
              'direções, e apresenta os outros departamentos — os itens do speaking test.',
        live: [
          'Talking point: designing the perfect workspace',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (apresentação sobre seu trabalho)'
        ],
        bridge: 'Na aula vocês discutiram o design do escritório ideal e o professor aplicou ' +
                'o teste. Aqui você ensaia os <b>itens exatos do speaking test</b> — apresentar ' +
                'seu cargo, seu departamento e a localização do escritório.',
        nextLive: 'Próxima unidade. Começa na segunda-feira seguinte.',
        ican: [
          'I can introduce myself and my job title.',
          "I can explain what my department does.",
          'I can describe where my office is, with directions.',
          "I can present other departments and their responsibilities.",
          'I can complete the Unit 7 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'O escritório perfeito', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w4:g:1', unit: 7, waSec: 'Talking Point',
                title: '🎲 Descreva um escritório ideal',
                prompt: 'Diga onde ficam dois departamentos e por quê.',
                example: 'IT is next to Marketing, so they can work together easily.',
                mustUse: ['next to'] },
              { ui: 'build', cat: 'fun', srsId: 'be7w4:g:2', unit: 7, waSec: 'Talking Point',
                title: '🎲 Diga em que departamento você trabalha',
                prompt: 'Diga o departamento e o que ele faz.',
                example: "I work in Marketing. We promote the company's products.",
                mustUse: ['I work in'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'voc', srsId: 'be7w4:pt:1', title: '🏢 Qual departamento?',
                main: 'Develops new ideas from the planning stage through to testing.',
                options: DF.shuffle([{ label: 'R&D', correct: true }, { label: 'Sales' }]),
                expl: 'R&D = pesquisa e desenvolvimento.' },
              { ui: 'choice', cat: 'gra', srsId: 'be7w4:pt:2', title: '📍 Preposição certa:',
                main: 'The lift is ___ Reception. (na frente de)',
                options: DF.shuffle([{ label: 'in front of', correct: true }, { label: 'behind' }]),
                expl: 'in front of = na frente de.' },
              { ui: 'choice', cat: 'gra', srsId: 'be7w4:pt:3', title: '👉 Certo:',
                main: '___ is my visitor pass.',
                options: DF.shuffle([{ label: 'This', correct: true }, { label: 'These' }]),
                expl: 'Singular e perto = this.' },
              { ui: 'order', cat: 'fun', srsId: 'be7w4:pt:4',
                title: '🧩 Ponha em ordem:', answer: 'Could I speak to the manager',
                expl: 'Could I speak to the manager?' },
              { ui: 'match', cat: 'fun', srsId: 'be7w4:pt:5', title: '🔗 Ligue a fala à resposta:',
                pairs: [
                  ['Could I leave a message?', 'Yes, of course.'],
                  ['Can she call me back?', "Sure, what's your number?"],
                  ['Is that right?', "Yes, that's right."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w4:st:1', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 1 — introduce yourself',
                prompt: 'Diga seu nome, cargo e departamento.',
                example: "My name is Ana. I'm a Sales Rep in the Sales Department.",
                mustUse: ["I'm a"] },
              { ui: 'build', cat: 'fun', srsId: 'be7w4:st:2', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 2 — explain what your department does',
                prompt: 'Explique o que seu departamento faz.',
                example: 'We contact new customers and manage orders.', mustUse: ['We'] },
              { ui: 'build', cat: 'fun', srsId: 'be7w4:st:3', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 3 — describe where your office is',
                prompt: 'Descreva onde fica seu escritório, com uma preposição.',
                example: "My office is next to the meeting room.", mustUse: ['next to'] },
              { ui: 'build', cat: 'fun', srsId: 'be7w4:st:4', unit: 7, waSec: 'Speaking Test',
                title: '🏆 Item 4 — present another department',
                prompt: 'Apresente outro departamento e sua responsabilidade.',
                example: 'IT is responsible for the computer network.', mustUse: ['responsible for'],
                expl: 'Mande o áudio dos 4 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A apresentação completa numa gravação só', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'be7w4+:b1', unit: 7, waSec: 'Praticar mais',
                title: '🔥 Os 4 itens numa gravação só',
                prompt: 'Grave tudo: apresente-se, explique seu departamento, descreva o ' +
                        'escritório e apresente outro departamento.',
                example: "My name is Ana. I'm a Sales Rep. We contact new customers. My office " +
                         "is next to the meeting room. IT is responsible for the computer network.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 7', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'I work in ___.', pool: DEPT.map(function (d) { return d.en; }),
                  focus: 'departamento', ptHint: 'Eu trabalho em ___.', n: 3 },
                { frame: 'Finance is ___ Reception.', pool: PREPPLACE,
                  focus: 'lugar', ptHint: 'O financeiro fica ___ a recepção.', n: 3 }
              ]
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
