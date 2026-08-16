/* ENGLISH FLOW — week/plan-starter-02.js
   BUSINESS STARTER · UNIT 2 "Company"

   Numeração: o Felipe conta as semanas de forma corrida no ano
   (Unit 1 = semanas 1–4 · Unit 2 = semanas 5–8). Dentro do app a semana é
   numerada por unidade (1–4) e o que o aluno vê é o NOME do tópico, não o
   número — número vira contagem, contagem vira "faltam quatro".
   Então: "semana 5" do Felipe = Unit 2, semana 1 = Working with words.

   Vale aqui a mesma regra da Unit 1: O APP NÃO REPETE A AULA.
   Nenhum personagem, empresa ou diálogo do livro aparece — o universo é o
   escritório fictício "Whiterock Consultancy" e suas filiais. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };

  // países do livro + extras que o app acrescenta (marcados ·+ no mapa)
  const COUNTRIES = [
    { en: 'Brazil', pt: 'Brasil' },
    { en: 'Japan', pt: 'Japão' },
    { en: 'China', pt: 'China' },
    { en: 'Germany', pt: 'Alemanha' },
    { en: 'Spain', pt: 'Espanha' },
    { en: 'Kuwait', pt: 'Kuwait' },
    { en: 'South Korea', pt: 'Coreia do Sul' },
    { en: 'Saudi Arabia', pt: 'Arábia Saudita' },
    { en: 'the USA', pt: 'os Estados Unidos' }
  ];
  const EXTRA_COUNTRIES = [
    { en: 'Nigeria', pt: 'Nigéria' },
    { en: 'Portugal', pt: 'Portugal' },
    { en: 'the Netherlands', pt: 'a Holanda' },
    { en: 'Mexico', pt: 'México' }
  ];

  function radar(c, pool) {
    const others = DF.shuffle(pool.filter(function (x) { return x.en !== c.en; })).slice(0, 3);
    return {
      ui: 'choice', cat: 'pro', srsId: 'bs2w1:radar:' + c.en,
      title: '🌍 Que país você ouviu?',
      tts: c.en, ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: c.en,
      options: DF.shuffle([{ label: c.en, correct: true }].concat(
        others.map(function (o) { return { label: o.en }; }))),
      expl: c.en + ' = ' + c.pt, feedbackTts: c.en
    };
  }

  DF.PLAN.starter[2] = {
    unit: 2,
    title: 'Company',
    subtitle: 'A empresa tem filial no mundo todo',
    icon: '🏢',

    mindmap: {
      center: 'Company',
      sub: 'De onde eu sou e onde fica a minha empresa',
      branches: [
        {
          icon: '🌍', name: 'Countries — países',
          leaves: COUNTRIES.map(function (c) { return { en: c.en, pt: c.pt }; })
            .concat(EXTRA_COUNTRIES.map(function (c) { return { en: c.en + ' ·+', pt: c.pt }; })),
          note: 'Alguns países levam <b>the</b>: <b>the</b> USA, <b>the</b> Netherlands, ' +
                '<b>the</b> UK. A maioria não: Brazil, Japan, Germany. ' +
                'Marcados <b>·+</b> são extras do app, fora do livro.'
        },
        {
          icon: '❓', name: 'As três perguntas',
          leaves: [
            { en: 'Where are you from?', pt: 'De onde você é?' },
            { en: "What's your company?", pt: 'Qual é a sua empresa?' },
            { en: "Where's your head office?", pt: 'Onde fica a matriz?' },
            { en: 'Who do you work for?', pt: 'Para quem você trabalha?' }
          ],
          note: '<b>Armadilha:</b> "Where are you from?" pergunta o <b>país/cidade</b>. ' +
                'Para a empresa é "What\'s your company?" — nunca "Where is your company?" ' +
                'se você quer o <i>nome</i> dela.'
        },
        {
          icon: '💬', name: 'As respostas',
          leaves: [
            { en: "I'm from Brazil.", pt: 'Sou do Brasil.' },
            { en: 'I work for Aurora Systems.', pt: 'Trabalho na Aurora Systems.' },
            { en: 'My company is Aurora Systems.', pt: 'Minha empresa é a Aurora Systems.' },
            { en: "Our head office is in Dublin.", pt: 'Nossa matriz fica em Dublin.' },
            { en: "It's in Dublin.", pt: 'Fica em Dublin.' }
          ],
          note: '<b>work for</b> + empresa (nunca "work in" para empresa). ' +
                '<b>in</b> + cidade/país: our head office is <b>in</b> Dublin.'
        },
        {
          icon: '🔗', name: 'and — juntando as duas',
          leaves: [
            { en: 'My company is Aurora Systems.', pt: 'frase 1' },
            { en: 'Our head office is in Dublin.', pt: 'frase 2' },
            { en: 'My company is Aurora Systems and our head office is in Dublin.', pt: 'as duas juntas' }
          ],
          note: 'Com <b>and</b> você para de falar por frases soltas e começa a soar ' +
                'natural. É o primeiro conectivo do curso.'
        },
        {
          icon: '🔢', name: 'Numbers 0–9',
          leaves: [
            { en: 'oh / zero', pt: '0 — "oh" em telefone, "zero" em código' },
            { en: 'one · two · three', pt: '1 · 2 · 3 — o "th" de three' },
            { en: 'four · five · six', pt: '4 · 5 · 6' },
            { en: 'seven · eight · nine', pt: '7 · 8 · 9 — o "gh" de eight é mudo' }
          ],
          note: 'Número de telefone e código se lê <b>dígito por dígito</b>: 2424 = ' +
                '"two four two four", nunca "twenty-four twenty-four".'
        },
        {
          icon: '📞', name: 'Ao telefone',
          leaves: [
            { en: 'Good morning, Whiterock Consultancy.', pt: 'atendendo (empresa)' },
            { en: 'Beatriz speaking.', pt: 'atendendo (nome)' },
            { en: 'Can I speak to Camila, please?', pt: 'pedindo por alguém' },
            { en: 'Is Tom there?', pt: 'a forma curta' },
            { en: 'Yes, of course. One moment.', pt: 'dizendo sim' },
            { en: "I'm sorry, she's out.", pt: 'dizendo não' },
            { en: 'OK. Thanks. Goodbye.', pt: 'encerrando' }
          ],
          note: '<b>speak</b> depois de "can" (Can I <b>speak</b> to…?). ' +
                '<b>speaking</b> só ao atender: "Beatriz <b>speaking</b>."'
        },
        {
          icon: '🥁', name: 'A força nos países',
          leaves: [
            { en: 'ja-PAN', pt: 'Japan — força no fim' },
            { en: 'CHI-na', pt: 'China — força no começo' },
            { en: 'bra-ZIL', pt: 'Brazil — força no fim' },
            { en: 'GER-ma-ny', pt: 'Germany — força no começo' },
            { en: 'ko-RE-a', pt: 'Korea — força no meio' }
          ],
          note: '<b>Brazil</b> é a que o brasileiro mais erra: em inglês a força vai ' +
                'no <b>ZIL</b>, não no "BRA".'
        }
      ]
    },

    weeks: [

      // ══════════════════ SEMANA 1 (a "semana 5" do ano) ══════════════════
      {
        n: 1, key: 'words', icon: '🌍',
        title: 'Working with words',
        goal: 'Dizer de onde você é, para quem trabalha e onde fica a matriz.',
        comp: 'Você responde as três perguntas de um cartão de visita — país, ' +
              'empresa e matriz — e junta duas delas numa frase só com "and".',
        live: [
          'Listen and read — a troca de cartões de visita',
          'Os cartões: nome, cargo, empresa, país',
          'Tip: and (juntar duas frases)',
          'O mapa e os países + listen and repeat',
          'Listen and complete: a tabela de quem é de onde',
          'Work in pairs: as três perguntas, um pro outro'
        ],
        bridge: 'Na aula você viu o mapa, os cartões do livro e praticou em dupla. ' +
                'Aqui você treina o ouvido em país solto (sem ver escrito), pega 4 países ' +
                'que o livro não traz, e monta o SEU cartão de visita real.',
        nextLive: 'Semana 2 · Language at work — is / isn\'t: falar da empresa ' +
                  'na terceira pessoa.',
        ican: [
          'I can say what country I am from.',
          'I can say the company I work for.',
          'I can say where our head office is.',
          'I can join two facts with "and".'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'radar', icon: '👂', name: 'Países — só de ouvido', tag: 'listening',
            items: COUNTRIES.map(function (c) { return radar(c, COUNTRIES.concat(EXTRA_COUNTRIES)); })
          },

          {
            id: 'radar2', icon: '➕', name: '4 países que o livro não traz', tag: 'listening',
            items: EXTRA_COUNTRIES.map(function (c) { return radar(c, COUNTRIES.concat(EXTRA_COUNTRIES)); })
          },

          {
            id: 'stress', icon: '🥁', name: 'A força nos países', tag: 'pronúncia',
            items: [
              { ui: 'stress', cat: 'pro', srsId: 'bs2w1:str:brazil', word: 'Brazil',
                pattern: 'oO', decoys: ['Oo'], syl: 'bra-ZIL',
                expl: 'A que o brasileiro mais erra — em inglês a força vai no ZIL.' },
              { ui: 'stress', cat: 'pro', srsId: 'bs2w1:str:japan', word: 'Japan',
                pattern: 'oO', decoys: ['Oo'], syl: 'ja-PAN' },
              { ui: 'stress', cat: 'pro', srsId: 'bs2w1:str:china', word: 'China',
                pattern: 'Oo', decoys: ['oO'], syl: 'CHI-na' },
              { ui: 'stress', cat: 'pro', srsId: 'bs2w1:str:germany', word: 'Germany',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'GER-ma-ny' },
              { ui: 'stress', cat: 'pro', srsId: 'bs2w1:str:korea', word: 'Korea',
                pattern: 'oOo', decoys: ['Ooo', 'ooO'], syl: 'ko-RE-a' },
              { ui: 'stress', cat: 'pro', srsId: 'bs2w1:str:nigeria', word: 'Nigeria',
                pattern: 'oOoo', decoys: ['Oooo', 'ooOo'], syl: 'ni-GE-ri-a' },
              { ui: 'stress', cat: 'pro', srsId: 'bs2w1:str:portugal', word: 'Portugal',
                pattern: 'Ooo', decoys: ['oOo', 'ooO'], syl: 'POR-tu-gal',
                expl: 'Em inglês a força vai no POR — diferente do português.' }
            ]
          },

          // DRILL de Working with words → foco em VOCABULÁRIO
          {
            id: 'drill', icon: '🔁', name: 'Drill de vocabulário', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs2w1:drl:from', unit: 2, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 1 — o país troca', focus: 'país',
                frame: "I'm from ___.", ptHint: 'Eu sou do/da ___.',
                slots: ['Brazil', 'Japan', 'Germany', 'Nigeria', 'Portugal', 'the USA'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs2w1:drl:work', unit: 2, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 2 — a empresa troca', focus: 'empresa',
                frame: 'I work for ___.', ptHint: 'Eu trabalho na ___.',
                slots: ['Whiterock Consultancy', 'Aurora Systems', 'Delta Foods',
                        'Nova Energy', 'Vertex Logistics'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs2w1:drl:office', unit: 2, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 3 — a cidade da matriz troca', focus: 'cidade',
                frame: 'Our head office is in ___.', ptHint: 'Nossa matriz fica em ___.',
                slots: ['Rio de Janeiro', 'Tokyo', 'Lagos', 'Amsterdam', 'Lisbon', 'Dublin'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs2w1:drl:my', unit: 2, waSec: 'Drill · vocabulário',
                title: '🔁 Drill 4 — "My company is…"', focus: 'empresa',
                frame: 'My company is ___.', ptHint: 'Minha empresa é a ___.',
                slots: ['Orion Bank', 'Aurora Systems', 'Delta Foods', 'Whiterock Consultancy'] }
            ]
          },

          // BACKCHAIN: as frases longas da semana, com "and"
          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs2w1:bc:1', unit: 2, waSec: 'Backchain',
                title: '🧱 Onde fica a matriz', ptHint: 'Nossa matriz fica no Rio de Janeiro.',
                chain: ['Janeiro', 'Rio de Janeiro', 'in Rio de Janeiro',
                        'is in Rio de Janeiro', 'Our head office is in Rio de Janeiro.'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs2w1:bc:2', unit: 2, waSec: 'Backchain',
                title: '🧱 As duas coisas com "and"',
                ptHint: 'Sou do Brasil e trabalho na Whiterock Consultancy.',
                chain: ['Whiterock Consultancy', 'for Whiterock Consultancy', 'work for Whiterock Consultancy',
                        'and I work for Whiterock Consultancy',
                        "I'm from Brazil and I work for Whiterock Consultancy."] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs2w1:bc:3', unit: 2, waSec: 'Backchain',
                title: '🧱 A frase completa do cartão',
                ptHint: 'Minha empresa é a Aurora Systems e nossa matriz fica em Dublin.',
                chain: ['Dublin', 'in Dublin', 'is in Dublin',
                        'our head office is in Dublin',
                        'My company is Aurora Systems and our head office is in Dublin.'] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'As três perguntas', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w1:rep:q1', unit: 2, waSec: 'Working with words',
                title: '🎤 Pergunta 1:', target: 'Where are you from?', ptHint: 'De onde você é?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w1:rep:q2', unit: 2, waSec: 'Working with words',
                title: '🎤 Pergunta 2:', target: "What's your company?", ptHint: 'Qual é a sua empresa?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w1:rep:q3', unit: 2, waSec: 'Working with words',
                title: '🎤 Pergunta 3:', target: "Where's your head office?", ptHint: 'Onde fica a matriz?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w1:rep:a1', unit: 2, waSec: 'Working with words',
                title: '🎤 A resposta com "and":',
                target: "I'm from Portugal and I work for Delta Foods.",
                ptHint: 'Sou de Portugal e trabalho na Delta Foods.' }
            ]
          },

          {
            id: 'dialogue', icon: '🎧', name: 'Situações novas', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs2w1:dlg:1',
                title: '🎧 Trocando cartões numa feira',
                sub: 'Situação nova — não é o diálogo da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Yuki', en: "Hello. I'm Yuki Tanaka. Here's my card." },
                  { who: 'Camila', en: "Thank you. I'm Camila Reis. What's your company?" },
                  { who: 'Yuki', en: "My company is Aurora Systems and our head office is in Tokyo." },
                  { who: 'Camila', en: "Oh, nice. I work for Delta Foods. I'm from Portugal." }
                ],
                question: 'Onde fica a matriz da empresa da Yuki?',
                options: DF.shuffle([
                  { label: 'Tokyo', correct: true }, { label: 'Lisbon' },
                  { label: 'Dublin', correct: false }, { label: 'Lagos' }
                ]),
                expl: '"My company is Aurora Systems and our head office is in Tokyo."'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs2w1:dlg:2',
                title: '🎧 Numa chamada internacional',
                sub: 'Repare: aqui a pessoa é de um país e a matriz fica em outro.',
                lines: [
                  { who: 'Tom', en: "Hi, I'm Tom Okafor. I'm from Nigeria." },
                  { who: 'Hendrik', en: 'Nice to meet you, Tom. Where is your head office?' },
                  { who: 'Tom', en: "It's in Dublin, but I work in the Lagos office." },
                  { who: 'Hendrik', en: "I see. I'm Hendrik, from the Netherlands." }
                ],
                question: 'O Tom é da Nigéria. E a matriz da empresa dele?',
                options: DF.shuffle([
                  { label: 'Fica em Dublin', correct: true },
                  { label: 'Fica em Lagos' }, { label: 'Fica na Holanda' },
                  { label: 'Ele não disse' }
                ]),
                expl: 'De onde a PESSOA é ≠ onde a MATRIZ fica. Ele é da Nigéria, ' +
                      'trabalha em Lagos, mas a matriz é em Dublin.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs2w1:dlg:3',
                title: '🎧 Três pessoas, três países',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Beatriz', en: "I'm Beatriz. I'm from Brazil and I work for Whiterock Consultancy." },
                  { who: 'Aisha', en: "I'm Aisha. My company is Nova Energy. Our head office is in Kuwait." },
                  { who: 'Yuki', en: "And I'm Yuki, from Japan. I work for Aurora Systems." }
                ],
                question: 'Quem mencionou a MATRIZ da empresa?',
                options: DF.shuffle([
                  { label: 'Aisha', correct: true }, { label: 'Beatriz' },
                  { label: 'Yuki' }, { label: 'as três' }
                ]),
                expl: 'Só a Aisha disse "Our head office is in Kuwait". As outras ' +
                      'disseram só o país delas e a empresa.'
              }
            ]
          },

          {
            id: 'cards', icon: '🪪', name: 'Cartões da Whiterock Consultancy', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs2w1:card:1', unit: 2, waSec: 'Cartões',
                title: '🪪 Beatriz Lima · Whiterock Consultancy · Brazil · matriz: Rio de Janeiro',
                prompt: 'Você é a Beatriz. Diga seu país, sua empresa e a matriz — use "and".',
                example: "I'm from Brazil and I work for Whiterock Consultancy. Our head office is in Rio de Janeiro.",
                mustUse: ['brazil', 'and'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w1:card:2', unit: 2, waSec: 'Cartões',
                title: '🪪 Tom Okafor · Vertex Logistics · Nigeria · matriz: Dublin',
                prompt: 'Agora você é o Tom. Cuidado: o país dele e a matriz são diferentes.',
                example: "I'm from Nigeria and my company is Vertex Logistics. Our head office is in Dublin.",
                mustUse: ['nigeria', 'dublin'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w1:card:3', unit: 2, waSec: 'Cartões',
                title: '🪪 Yuki Tanaka · Aurora Systems · Japan · matriz: Tokyo',
                prompt: 'Apresente a Yuki e depois pergunte a mesma coisa pra outra pessoa.',
                example: "I'm from Japan and I work for Aurora Systems. Where are you from?",
                mustUse: ['japan', 'where'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'voc', srsId: 'bs2w1:sp:1',
                title: '🔤 Complete o país (faltam as vogais):', main: 'B r _ z _ l',
                answers: ['Brazil', 'brazil'], expl: 'Brazil.', feedbackTts: 'Brazil' },
              { ui: 'type', cat: 'voc', srsId: 'bs2w1:sp:2',
                title: '🔤 Complete o país:', main: 'G _ r m _ n y',
                answers: ['Germany', 'germany'], expl: 'Germany.', feedbackTts: 'Germany' },
              { ui: 'type', cat: 'voc', srsId: 'bs2w1:sp:3',
                title: '🔤 Complete o país:', main: 'K _ w _ _ t',
                answers: ['Kuwait', 'kuwait'], expl: 'Kuwait.', feedbackTts: 'Kuwait' },
              { ui: 'order', cat: 'gra', srsId: 'bs2w1:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Where are you from',
                expl: 'Where + are + you + from?' },
              { ui: 'order', cat: 'gra', srsId: 'bs2w1:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'Where is your head office',
                expl: 'Where + is + your head office?' },
              { ui: 'order', cat: 'gra', srsId: 'bs2w1:ord:3',
                title: '🧩 Monte a pergunta:', answer: 'What is your company',
                expl: 'What + is + your company?' },
              { ui: 'match', cat: 'fun', srsId: 'bs2w1:match:qa',
                title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Where are you from?', "I'm from Brazil."],
                  ["What's your company?", 'My company is Orion Bank.'],
                  ["Where's your head office?", "It's in Dublin."]
                ] },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w1:prep:1',
                title: '🔧 Escolha a preposição:', main: 'I work ___ Delta Foods.',
                options: DF.shuffle([
                  { label: 'for', correct: true }, { label: 'in', trap: true },
                  { label: 'at' }, { label: 'to' }
                ]),
                trapNote: '"work in" é para o LUGAR (I work in Lagos), não para a empresa.',
                expl: 'work FOR + empresa · work IN + cidade/setor.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w1:and:1',
                title: '🔗 Junte as duas frases com "and":',
                main: "I'm from Japan. + I work for Aurora Systems.",
                options: DF.shuffle([
                  { label: "I'm from Japan and I work for Aurora Systems.", correct: true },
                  { label: "I'm from Japan and work I for Aurora Systems." },
                  { label: "I'm from Japan, and, I work for Aurora Systems." },
                  { label: "And I'm from Japan I work for Aurora Systems." }
                ]),
                expl: 'frase 1 + and + frase 2 completa.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Seu cartão de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs2w1:build:me', unit: 2, waSec: 'Sua vez',
                title: '🗣️ De onde VOCÊ é',
                prompt: 'Diga seu país e a cidade onde você trabalha.',
                example: "I'm from Brazil and I work in Macaé.",
                mustUse: ['from'],
                expl: 'O app não sabe seu país — mande o áudio e o professor confere.' },
              { ui: 'build', cat: 'fun', srsId: 'bs2w1:build:me2', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Sua empresa de verdade',
                prompt: 'Diga para quem você trabalha e onde fica a matriz (ou a sede).',
                example: 'I work for EnglishFlow and our head office is in Macaé.',
                mustUse: ['work for'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w1:build:ask', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Agora pergunte as três',
                prompt: 'Faça as três perguntas seguidas, como numa feira de negócios.',
                example: "Where are you from? What's your company? Where's your head office?",
                mustUse: ['where', 'company'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-speak', icon: '🔥', name: 'Fale sem o modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs2w1+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 O cartão inteiro numa fala',
                prompt: 'Nome, cargo, empresa, país e matriz — tudo numa apresentação só.',
                example: "Hello, I'm Camila Reis. I'm a sales representative. " +
                         "I'm from Portugal and I work for Delta Foods. Our head office is in Lisbon.",
                mustUse: ['and'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w1+:b2', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Corrija a confusão',
                prompt: 'Alguém achou que a matriz fica no seu país. Explique que não.',
                example: "No, our head office isn't in Brazil. It's in Dublin.",
                mustUse: ['head office'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de países', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "I'm from ___.", pool: 'country', focus: 'país', ptHint: 'Eu sou do/da ___.', n: 5 },
                { frame: 'I work for ___.', pool: 'company', focus: 'empresa', ptHint: 'Trabalho na ___.', n: 5 },
                { frame: 'Our head office is in ___.', pool: 'city', focus: 'cidade',
                  ptHint: 'Nossa matriz fica em ___.', n: 5 }
              ],
              backchain: [
                { text: 'Our head office is in {city}.', ptHint: 'Nossa matriz fica em…' },
                { text: "I'm from {country} and I work for {company}.", ptHint: 'Sou de… e trabalho na…' }
              ]
            }
          },
          { id: 'more-video', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANAS 2–4 (destravam nas próximas lives) ══════════════════
      // ══════════════════ SEMANA 2 (a "semana 6" do ano) ══════════════════
      {
        n: 2, key: 'grammar', icon: '🔧',
        title: 'Language at work',
        goal: "Falar de outra pessoa e da empresa: is / isn't.",
        comp: 'Você pergunta onde alguém está, responde com resposta curta ' +
              '(Yes, he is. / No, she isn\'t.) e corrige uma informação errada.',
        live: [
          'Read the emails — is / isn\'t no contexto',
          'Language point: positivo, negativo, pergunta e resposta curta',
          "Tip: 's ou is? (He's = He is)",
          'Listen and check — a conversa sobre matriz',
          'Work in pairs: o mapa, perguntando onde cada colega está'
        ],
        bridge: 'Na aula o professor montou a tabela do is/isn\'t com você e vocês ' +
                'perguntaram sobre as pessoas do mapa. Aqui você trava a resposta curta ' +
                'até sair sozinha, e treina o pulo do gato: <b>corrigir</b> quem errou.',
        nextLive: 'Semana 3 · Practically speaking — números 0–9 — e Business ' +
                  'communication: começar uma ligação de trabalho.',
        ican: [
          "I can say where a person or a company is, using is / isn't.",
          'I can ask "Is he/she/it…?" questions.',
          "I can answer: Yes, he is. / No, she isn't.",
          'I can correct wrong information about someone.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — abra "is / isn\'t"', tag: 'estudo', mindmap: true },

          {
            id: 'point', icon: '📐', name: 'A regra num relance', tag: 'estudo',
            items: [
              {
                ui: 'read', cat: 'gra', info: true,
                title: '📐 To be — he / she / it',
                textTitle: 'As quatro formas',
                text: 'POSITIVO\nHe is → He\'s in the head office.\nShe is → She\'s in Lisbon.\n' +
                      'It is → It\'s in Dublin.\n\n' +
                      'NEGATIVO\nHe is not → He isn\'t in Brazil.\nIt is not → It isn\'t in Spain.\n\n' +
                      'PERGUNTA\nIs he/she/it…? → Is she in the Tokyo office?\n\n' +
                      'RESPOSTA CURTA\nYes, he is. (nunca "Yes, he\'s.")\nNo, she isn\'t.',
                readAloud: false
              },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w2:g:short1',
                title: '⚠️ A armadilha — qual está certa?', main: 'Is she in the head office?',
                options: DF.shuffle([
                  { label: 'Yes, she is.', correct: true }, { label: "Yes, she's.", trap: true },
                  { label: 'Yes, she does.' }, { label: 'Yes, is she.' }
                ]),
                trapNote: 'A mesma armadilha do "Yes, I am" — a positiva curta NUNCA contrai.',
                expl: 'Yes, she is. — sem contração. A negativa sim: No, she isn\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w2:g:neg1',
                title: '🔧 Complete a negativa:', main: "The head office ___ in Lagos. It's in Dublin.",
                options: DF.shuffle([
                  { label: "isn't", correct: true }, { label: "aren't" },
                  { label: "not" }, { label: "doesn't" }
                ]),
                expl: "it → isn't." },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w2:g:q1',
                title: '🔧 Monte a pergunta:', main: '___ Camila in the Lisbon office?',
                options: DF.shuffle([
                  { label: 'Is', correct: true }, { label: 'Are' },
                  { label: 'Am' }, { label: 'Does' }
                ]),
                expl: 'Camila = she → Is she…? / Is Camila…?' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w2:g:contr',
                title: "🔧 Qual contração está certa?", main: 'Camila is in Lisbon.',
                options: DF.shuffle([
                  { label: "Camila's in Lisbon.", correct: true },
                  { label: "Camilas in Lisbon." }, { label: "Camila're in Lisbon." },
                  { label: "Camila is'nt in Lisbon." }
                ]),
                expl: "Nome + 's = nome + is. Na fala é sempre assim." }
            ]
          },

          {
            id: 'dlg', icon: '🎧', name: 'Onde está cada um', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs2w2:dlg:1',
                title: '🎧 Procurando uma colega',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Hendrik', en: 'Good morning. Is Camila in the Lisbon office?' },
                  { who: 'Beatriz', en: "No, she isn't. She's in the head office in Dublin." },
                  { who: 'Hendrik', en: 'Is she there all week?' },
                  { who: 'Beatriz', en: "No, she isn't. She's on holiday on Friday." }
                ],
                question: 'Onde a Camila está?',
                options: DF.shuffle([
                  { label: 'Na matriz, em Dublin', correct: true },
                  { label: 'No escritório de Lisboa' }, { label: 'De férias, hoje' },
                  { label: 'Ninguém sabe' }
                ]),
                expl: '"No, she isn\'t. She\'s in the head office in Dublin."'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs2w2:dlg:2',
                title: '🎧 Confirmando a matriz',
                lines: [
                  { who: 'Aisha', en: 'I work for Nova Energy. Is your head office in São Paulo?' },
                  { who: 'Tom', en: "No, it isn't. It's in Dublin." },
                  { who: 'Aisha', en: 'Is Dublin in Ireland?' },
                  { who: 'Tom', en: 'Yes, it is.' }
                ],
                question: 'Quantas respostas curtas o Tom deu?',
                options: DF.shuffle([
                  { label: '2 — uma negativa e uma positiva', correct: true },
                  { label: '1' }, { label: '3' }, { label: 'nenhuma' }
                ]),
                expl: '"No, it isn\'t." e "Yes, it is." — as duas formas na mesma conversa.'
              },
              {
                ui: 'dialogue', cat: 'gra', srsId: 'bs2w2:dlg:3',
                title: '🎧 Três colegas, três lugares',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Yuki', en: 'Is Tom in the Lagos office?' },
                  { who: 'Camila', en: "No, he isn't. He's in Dublin this week." },
                  { who: 'Yuki', en: 'And Beatriz? Is she in Rio?' },
                  { who: 'Camila', en: "Yes, she is. She's in the Rio office." }
                ],
                question: 'Quem está no Rio?',
                options: DF.shuffle([
                  { label: 'Beatriz', correct: true }, { label: 'Tom' },
                  { label: 'Yuki' }, { label: 'Camila' }
                ]),
                expl: '"And Beatriz? Is she in Rio?" — "Yes, she is."'
              }
            ]
          },

          // TRANSFORMATION DRILL → o ponto gramatical da unidade
          {
            id: 'transform', icon: '🔀', name: 'Drill de transformação', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs2w2:tf:1', unit: 2, waSec: 'Drill · transformação',
                title: '🔀 Negative e Question — he / she / it',
                rounds: [
                  { base: 'He is in Dublin.', cmd: 'Negative', answer: 'He is not in Dublin.' },
                  { base: 'He is in Dublin.', cmd: 'Question', answer: 'Is he in Dublin?' },
                  { base: 'She is in the head office.', cmd: 'Negative', answer: 'She is not in the head office.' },
                  { base: 'She is in the head office.', cmd: 'Question', answer: 'Is she in the head office?' },
                  { base: 'It is in Brazil.', cmd: 'Negative', answer: 'It is not in Brazil.' },
                  { base: 'It is in Brazil.', cmd: 'Question', answer: 'Is it in Brazil?' }
                ] },
              { ui: 'transform', cat: 'gra', srsId: 'bs2w2:tf:2', unit: 2, waSec: 'Drill · transformação',
                title: '🔀 A resposta curta',
                rounds: [
                  { base: 'Is he in the Lagos office?', cmd: 'Short answer', answer: 'Yes, he is.' },
                  { base: 'Is she in Lisbon?', cmd: 'Short answer', answer: "No, she isn't." },
                  { base: 'Is it in Dublin?', cmd: 'Short answer', answer: 'Yes, it is.' },
                  { base: 'Is Tom in Brazil?', cmd: 'Short answer', answer: "No, he isn't." }
                ] }
            ]
          },

          // CONTRACTION DRILL — a Tip do livro ('s = is)
          {
            id: 'contract', icon: '✂️', name: 'Drill de contração', tag: 'drill', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'bs2w2:ct:1', unit: 2, waSec: 'Drill · contração',
                title: "✂️ 's = is — como se fala de verdade",
                rounds: [
                  { base: 'He is in Tokyo.', cmd: 'Contraction', answer: "He's in Tokyo." },
                  { base: 'She is in Lisbon.', cmd: 'Contraction', answer: "She's in Lisbon." },
                  { base: 'It is in Dublin.', cmd: 'Contraction', answer: "It's in Dublin." },
                  { base: 'He is not in Brazil.', cmd: 'Contraction', answer: "He isn't in Brazil." },
                  { base: 'She is not in the office.', cmd: 'Contraction', answer: "She isn't in the office." }
                ] }
            ]
          },

          // SUBSTITUTION DRILL — o padrão gramatical com o lugar trocando
          {
            id: 'drill', icon: '🔁', name: 'Drill de substituição', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'bs2w2:drl:q', unit: 2, waSec: 'Drill · gramática',
                title: '🔁 Drill 1 — a pergunta se repete', focus: 'lugar',
                frame: 'Is she in ___?', ptHint: 'Ela está em ___?',
                slots: ['Dublin', 'Tokyo', 'Lisbon', 'Lagos', 'Amsterdam'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs2w2:drl:neg', unit: 2, waSec: 'Drill · gramática',
                title: '🔁 Drill 2 — a correção', focus: 'cidade',
                frame: "No, he isn't. He's in ___.", ptHint: 'Não, não está. Ele está em ___.',
                slots: ['Rio de Janeiro', 'Dublin', 'Munich', 'Singapore', 'Tokyo'] },
              { ui: 'drill', cat: 'gra', srsId: 'bs2w2:drl:it', unit: 2, waSec: 'Drill · gramática',
                title: '🔁 Drill 3 — a empresa (it)', focus: 'país',
                frame: "Our head office isn't in ___.", ptHint: 'Nossa matriz não fica em ___.',
                slots: ['Brazil', 'Japan', 'Germany', 'Spain', 'Portugal'] }
            ]
          },

          // BACKCHAIN — a frase de correção completa
          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs2w2:bc:1', unit: 2, waSec: 'Backchain',
                title: '🧱 A correção completa', ptHint: 'Não, não está. Ela está na matriz, em Dublin.',
                chain: ['Dublin', 'in Dublin', 'in the head office in Dublin',
                        "She's in the head office in Dublin",
                        "No, she isn't. She's in the head office in Dublin."] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs2w2:bc:2', unit: 2, waSec: 'Backchain',
                title: '🧱 Perguntando pelo escritório', ptHint: 'O Tom está no escritório de Lagos?',
                chain: ['office', 'the Lagos office', 'in the Lagos office',
                        'Is Tom in the Lagos office?'] }
            ]
          },

          {
            id: 'say', icon: '🎤', name: 'Até sair automático', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w2:rep:q', unit: 2, waSec: 'Language at work',
                title: '🎤 A pergunta:', target: 'Is she in the head office?', ptHint: 'Ela está na matriz?' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w2:rep:a1', unit: 2, waSec: 'Language at work', reps: 3,
                title: '🎤 A positiva — 3x, sem contrair:', target: 'Yes, she is.', ptHint: 'Sim, está.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w2:rep:a2', unit: 2, waSec: 'Language at work',
                title: '🎤 A negativa com correção:', target: "No, he isn't. He's in Dublin.",
                ptHint: 'Não, não está. Ele está em Dublin.' },
              { ui: 'build', cat: 'gra', srsId: 'bs2w2:build:1', unit: 2, waSec: 'Language at work',
                title: '🗣️ Corrija a informação errada',
                prompt: 'Alguém disse que a sua matriz fica no Japão. Negue e diga onde é de verdade.',
                example: "No, it isn't. Our head office is in Rio de Janeiro.",
                mustUse: ["isn't"] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'bs2w2:p:1',
                title: "🔧 Complete com is ('s) ou isn't:", main: "Tom's in Nigeria. He ___ in Japan.",
                options: DF.shuffle([{ label: "isn't", correct: true }, { label: "'s" }]),
                expl: 'Ele está na Nigéria, então NÃO está no Japão.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w2:p:2',
                title: "🔧 Complete com is ('s) ou isn't:", main: "Camila isn't in Germany. She ___ in Portugal.",
                options: DF.shuffle([{ label: "'s", correct: true }, { label: "isn't" }]),
                expl: 'Não está na Alemanha → está em Portugal.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w2:p:3',
                title: '🔍 Qual frase está certa?',
                options: DF.shuffle([
                  { label: "He isn't in Kuwait.", correct: true },
                  { label: 'He not in Kuwait.' }, { label: "He is'nt in Kuwait." },
                  { label: 'He no is in Kuwait.' }
                ]),
                expl: "isn't = is not. O apóstrofo vai antes do t." },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w2:p:4',
                title: '🔍 Qual frase está certa?',
                options: DF.shuffle([
                  { label: 'Yes, it is.', correct: true }, { label: "Yes, it's.", trap: true },
                  { label: 'Yes, its.' }, { label: 'Yes, is it.' }
                ]),
                trapNote: 'Resposta curta positiva não contrai — nunca "Yes, it\'s."',
                expl: 'Yes, it is.' },
              { ui: 'order', cat: 'gra', srsId: 'bs2w2:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Is the head office in Dublin',
                expl: 'Is + sujeito + lugar?' },
              { ui: 'order', cat: 'gra', srsId: 'bs2w2:ord:2',
                title: '🧩 Monte a negativa:', answer: "She isn't in the Lisbon office",
                expl: "Sujeito + isn't + lugar." },
              { ui: 'match', cat: 'gra', srsId: 'bs2w2:match:qa',
                title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Is Tom in China?', "Yes, he is. He's in Beijing."],
                  ['Is Camila in the Rome office?', "No, she isn't. She's in Lisbon."],
                  ['Is your company Orion Bank?', "No, it isn't. It's Nova Energy."]
                ] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Corrigir na hora', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'gra', srsId: 'bs2w2+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Duas correções seguidas',
                prompt: 'Alguém errou o país da pessoa E a cidade da matriz. Corrija os dois.',
                example: "No, he isn't in Japan. He's in Nigeria. And our head office isn't in Tokyo — it's in Dublin.",
                mustUse: ["isn't"] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de gramática', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              transform: {
                title: '🔀 Transforme — deixas novas a cada rodada',
                templates: ['He is in {city}.', 'She is in {city}.', 'It is in {country}.',
                            'He is {job}.', 'She is {job}.'],
                cmds: ['Negative', 'Question', 'Contraction'],
                n: 8
              },
              drills: [
                { frame: 'Is she in ___?', pool: 'city', focus: 'cidade', ptHint: 'Ela está em ___?', n: 5 },
                { frame: "No, he isn't. He's in ___.", pool: 'city', focus: 'cidade',
                  ptHint: 'Não. Ele está em ___.', n: 5 }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },
      // ══════════════════ SEMANA 3 (a "semana 7" do ano) ══════════════════
      {
        n: 3, key: 'speaking', icon: '🔢',
        title: 'Practically speaking',
        goal: 'Dizer e entender números 0–9 e começar uma ligação de trabalho.',
        comp: 'Você passa e anota um número por telefone sem errar dígito, ' +
              'atende dizendo o nome da empresa e pede para falar com alguém.',
        live: [
          'Tip: saying numbers (0 = oh / zero)',
          'Listen and repeat os números',
          'Listen and complete: passcode, voo, código de segurança',
          'Business communication: listen to a phone call',
          'Key expressions: atender, pedir por alguém, dizer sim/não, encerrar',
          'Work in pairs: seus números e uma ligação simulada'
        ],
        bridge: 'Na aula você ouviu os números e praticou a ligação em dupla. ' +
                'Aqui o ditado é <b>sem tolerância</b> (dígito errado é erro, como na ' +
                'vida real) e você treina o "th" de <b>three</b> — o som que mais ' +
                'derruba brasileiro ao passar número.',
        nextLive: 'Semana 4 · Talking point — the company game — e o teste que ' +
                  'fecha a Unit 2.',
        ican: [
          'I can say numbers 0–9 clearly.',
          'I can write down a number I hear, without mistakes.',
          'I can answer a call with my company name.',
          'I can ask to speak to someone.',
          'I can say the person is not in the office.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental — números e telefone', tag: 'estudo', mindmap: true },

          {
            id: 'digits', icon: '👂', name: 'Dígito por dígito', tag: 'listening',
            items: [
              { ui: 'choice', cat: 'pro', srsId: 'bs2w3:d:3',
                title: '👂 Que número você ouviu?',
                tts: 'three', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'three',
                options: DF.shuffle([
                  { label: '3', correct: true }, { label: '13' }, { label: '0' }, { label: '8' }
                ]),
                expl: '⚠️ three tem o "th" — a língua entre os dentes. Sem isso vira "free".',
                feedbackTts: 'three' },
              { ui: 'choice', cat: 'pro', srsId: 'bs2w3:d:0a',
                title: '👂 Como se lê o 0 aqui?',
                tts: 'oh', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'oh',
                options: DF.shuffle([
                  { label: '0 (zero)', correct: true }, { label: '4' }, { label: '8' }, { label: 'o (letra)' }
                ]),
                expl: 'Em número de telefone o 0 vira "oh". Em código e valor, "zero".',
                feedbackTts: 'oh' },
              { ui: 'choice', cat: 'pro', srsId: 'bs2w3:d:5',
                title: '👂 Que número você ouviu?',
                tts: 'five', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'five',
                options: DF.shuffle([
                  { label: '5', correct: true }, { label: '9' }, { label: '4' }, { label: '1' }
                ]),
                expl: 'five — o "f" e o "v" são diferentes: FI-ve.', feedbackTts: 'five' },
              { ui: 'choice', cat: 'pro', srsId: 'bs2w3:d:8',
                title: '👂 Que número você ouviu?',
                tts: 'eight', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'eight',
                options: DF.shuffle([
                  { label: '8', correct: true }, { label: '1' }, { label: '3' }, { label: '0' }
                ]),
                expl: 'eight soa como "êit" — o "gh" é mudo.', feedbackTts: 'eight' },
              { ui: 'choice', cat: 'pro', srsId: 'bs2w3:d:9',
                title: '👂 Que número você ouviu?',
                tts: 'nine', ttsLabel: '🔊 Ouvir de novo', autoPlay: true, showIfNoTTS: 'nine',
                options: DF.shuffle([
                  { label: '9', correct: true }, { label: '5' }, { label: '1' }, { label: '4' }
                ]),
                expl: 'nine — dois sons de "ai": NAI-ne.', feedbackTts: 'nine' }
            ]
          },

          {
            id: 'dictation', icon: '🔢', name: 'Ditado de números', tag: 'listening',
            items: [
              { ui: 'type', cat: 'spl', srsId: 'bs2w3:n:1', exact: true,
                title: '🔢 Código de segurança — ouça e escreva:',
                tts: '2. 4. 2. 4.', ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: '2 - 4 - 2 - 4',
                answers: ['2424'], expl: 'two four two four = 2424.', feedbackTts: '2. 4. 2. 4.' },
              { ui: 'type', cat: 'spl', srsId: 'bs2w3:n:2', exact: true,
                title: '🔢 Número do voo — ouça e escreva só os dígitos:',
                tts: '3. 1. 0.', ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: '3 - 1 - 0',
                answers: ['310'], expl: 'Flight 310.', feedbackTts: '3. 1. 0.' },
              { ui: 'type', cat: 'spl', srsId: 'bs2w3:n:3', exact: true,
                title: '🔢 Ramal — ouça e escreva:',
                tts: '4. 0. 7. 2.', ttsLabel: '🔊 Ouvir', autoPlay: true, showIfNoTTS: '4 - 0 - 7 - 2',
                answers: ['4072'], expl: 'Extension 4072.', feedbackTts: '4. 0. 7. 2.' },
              { ui: 'type', cat: 'spl', srsId: 'bs2w3:n:4', exact: true,
                title: '🔢 Celular — agora com "oh" no lugar de zero:',
                tts: 'oh. 7. 7. oh. oh. 8. 1. 9.', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: '0 - 7 - 7 - 0 - 0 - 8 - 1 - 9',
                answers: ['07700819'],
                expl: 'Cada "oh" é um 0 → 07700819.', feedbackTts: 'oh. 7. 7. oh. oh. 8. 1. 9.' },
              { ui: 'type', cat: 'spl', srsId: 'bs2w3:n:5', exact: true,
                title: '🔢 O mais difícil — 9 dígitos:',
                tts: '0. 1. 7. 3. 1. 7. 5. 8. 9.', ttsLabel: '🔊 Ouvir', autoPlay: true,
                showIfNoTTS: '0 - 1 - 7 - 3 - 1 - 7 - 5 - 8 - 9',
                answers: ['017317589'],
                expl: 'Passaporte 017317589. Um dígito errado já invalida.',
                feedbackTts: '0. 1. 7. 3. 1. 7. 5. 8. 9.' }
            ]
          },

          {
            id: 'saynum', icon: '🎤', name: 'Números em voz alta', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w3:rep:3', unit: 2, waSec: 'Practically Speaking', reps: 3,
                title: '🎤 O "th" de three — 3x:', target: 'three', ptHint: 'Língua entre os dentes.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w3:rep:num1', unit: 2, waSec: 'Practically Speaking',
                title: '🎤 Um ramal:', target: 'My extension number is four oh seven two.',
                ptHint: 'Meu ramal é 4072.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w3:rep:num2', unit: 2, waSec: 'Practically Speaking',
                title: '🎤 Pedindo para repetir:', target: 'Sorry, can you repeat that?',
                ptHint: 'Desculpe, pode repetir?' }
            ]
          },

          // DRILL de Practically speaking / Business comm → foco em EXPRESSÕES ÚTEIS
          {
            id: 'drill', icon: '🔁', name: 'Drill de expressões', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'pro', srsId: 'bs2w3:drl:answer', unit: 2, waSec: 'Drill · expressões',
                title: '🔁 Drill 1 — atendendo a ligação', focus: 'empresa',
                frame: 'Good morning, ___.', ptHint: 'Bom dia, ___.',
                slots: ['Whiterock Consultancy', 'Aurora Systems', 'Delta Foods', 'Orion Bank', 'Nova Energy'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs2w3:drl:ask', unit: 2, waSec: 'Drill · expressões',
                title: '🔁 Drill 2 — pedindo por alguém', focus: 'pessoa',
                frame: 'Can I speak to ___, please?', ptHint: 'Posso falar com ___, por favor?',
                slots: ['Camila', 'Tom', 'Aisha', 'Hendrik', 'Yuki'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs2w3:drl:there', unit: 2, waSec: 'Drill · expressões',
                title: '🔁 Drill 3 — a outra forma de pedir', focus: 'pessoa',
                frame: 'Hello. Is ___ there?', ptHint: 'Olá. O(A) ___ está?',
                slots: ['Beatriz', 'Camila', 'Tom', 'Yuki'] },
              { ui: 'drill', cat: 'pro', srsId: 'bs2w3:drl:no', unit: 2, waSec: 'Drill · expressões',
                title: '🔁 Drill 4 — dizendo não', focus: 'motivo',
                frame: "I'm sorry, ___.", ptHint: 'Sinto muito, ___.',
                slots: ["she's out", "he's not in the office", "she's in a meeting", "he's on holiday"] }
            ]
          },

          {
            id: 'calls', icon: '🎧', name: 'Ligações de verdade', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs2w3:dlg:1',
                title: '🎧 Ligação 1 — a pessoa está',
                sub: 'Situação nova. Ouça antes de ler.',
                lines: [
                  { who: 'Beatriz', en: 'Good morning. Whiterock Consultancy.' },
                  { who: 'Hendrik', en: 'Good morning. Can I speak to Camila, please?' },
                  { who: 'Beatriz', en: 'Yes, of course. One moment.' },
                  { who: 'Hendrik', en: 'Thanks.' }
                ],
                question: 'A Camila está disponível?',
                options: DF.shuffle([
                  { label: 'Sim — "One moment"', correct: true },
                  { label: 'Não, saiu' }, { label: 'Não, está em reunião' },
                  { label: 'A recepcionista não sabe' }
                ]),
                expl: '"Yes, of course. One moment." = ela vai passar a ligação.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs2w3:dlg:2',
                title: '🎧 Ligação 2 — a pessoa não está',
                lines: [
                  { who: 'Tom', en: 'Hello. Is Yuki there?' },
                  { who: 'Aisha', en: "No, I'm sorry, she's out." },
                  { who: 'Tom', en: 'Is Camila in the office?' },
                  { who: 'Aisha', en: 'Yes, sure. One moment.' }
                ],
                question: 'Com quem o Tom vai falar?',
                options: DF.shuffle([
                  { label: 'Camila', correct: true }, { label: 'Yuki' },
                  { label: 'Aisha' }, { label: 'ninguém' }
                ]),
                expl: 'Yuki está fora ("she\'s out"), então ele pede pela Camila.'
              },
              {
                ui: 'dialogue', cat: 'fun', srsId: 'bs2w3:dlg:3',
                title: '🎧 Ligação 3 — número trocado',
                sub: 'Sem texto na tela. Ouça quantas vezes quiser.',
                hideText: true,
                lines: [
                  { who: 'Camila', en: 'Hi. Is that Beatriz?' },
                  { who: 'Yuki', en: "No, it isn't. It's Yuki." },
                  { who: 'Camila', en: 'Oh, sorry! Is Beatriz in the office?' },
                  { who: 'Yuki', en: "No, I'm sorry, she's not in the office today." }
                ],
                question: 'Quem atendeu a ligação?',
                options: DF.shuffle([
                  { label: 'Yuki', correct: true }, { label: 'Beatriz' },
                  { label: 'Camila' }, { label: 'ninguém atendeu' }
                ]),
                expl: '"No, it isn\'t. It\'s Yuki." — quando não é a pessoa esperada.'
              }
            ]
          },

          {
            id: 'bc', icon: '🧱', name: 'De trás pra frente', tag: 'speaking', sp: true,
            items: [
              { ui: 'backchain', cat: 'pro', srsId: 'bs2w3:bc:1', unit: 2, waSec: 'Backchain',
                title: '🧱 Pedindo por alguém', ptHint: 'Posso falar com a Camila, por favor?',
                chain: ['please', 'to Camila, please', 'speak to Camila, please',
                        'Can I speak to Camila, please?'] },
              { ui: 'backchain', cat: 'pro', srsId: 'bs2w3:bc:2', unit: 2, waSec: 'Backchain',
                title: '🧱 Dizendo que a pessoa não está',
                ptHint: 'Sinto muito, ela não está no escritório hoje.',
                chain: ['today', 'the office today', 'in the office today',
                        "she's not in the office today",
                        "I'm sorry, she's not in the office today."] }
            ]
          },

          {
            id: 'expr', icon: '💬', name: 'Key expressions', tag: 'speaking', sp: true,
            items: [
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w3:rep:ans', unit: 2, waSec: 'Business Communication',
                title: '🎤 Atendendo:', target: 'Good morning, Whiterock Consultancy. Beatriz speaking.',
                ptHint: 'Bom dia, Whiterock Consultancy. Beatriz falando.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w3:rep:yes', unit: 2, waSec: 'Business Communication',
                title: '🎤 Dizendo sim:', target: 'Yes, of course. One moment.',
                ptHint: 'Sim, claro. Um momento.' },
              { ui: 'repeat', cat: 'pro', srsId: 'bs2w3:rep:end', unit: 2, waSec: 'Business Communication',
                title: '🎤 Encerrando:', target: 'OK. Thanks. Goodbye.',
                ptHint: 'Ok. Obrigado. Tchau.' },
              { ui: 'build', cat: 'fun', srsId: 'bs2w3:build:ans', unit: 2, waSec: 'Business Communication',
                title: '📞 Atenda a ligação',
                prompt: 'Você é o recepcionista da Whiterock Consultancy. Atenda dizendo bom dia e o nome da empresa.',
                example: 'Good morning, Whiterock Consultancy.',
                mustUse: ['good', 'whiterock'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w3:build:no', unit: 2, waSec: 'Business Communication',
                title: '📞 Diga que a pessoa não está',
                prompt: 'Perguntaram pela Yuki, mas ela saiu. Responda educadamente.',
                example: "I'm sorry, she's out.",
                mustUse: ['sorry'] }
            ]
          },

          {
            id: 'practice', icon: '📄', name: 'Fixação escrita', tag: 'escrita',
            items: [
              { ui: 'order', cat: 'fun', srsId: 'bs2w3:ord:1',
                title: '🧩 Monte a pergunta:', answer: 'Can I speak to Marco please',
                expl: 'Can I speak to + nome + please?' },
              { ui: 'order', cat: 'fun', srsId: 'bs2w3:ord:2',
                title: '🧩 Monte a pergunta:', answer: 'Hello is Fred there',
                expl: 'Hello. Is + nome + there?' },
              { ui: 'order', cat: 'fun', srsId: 'bs2w3:ord:3',
                title: '🧩 Monte a resposta:', answer: "No I'm sorry he is not in the office",
                expl: 'A forma educada de dizer que a pessoa não está.' },
              { ui: 'match', cat: 'fun', srsId: 'bs2w3:match:call',
                title: '🔗 Ligue a pergunta à resposta:',
                pairs: [
                  ['Is that Beatriz?', "No, it isn't. It's Yuki."],
                  ['Is Camila there?', 'Yes, sure. One moment.'],
                  ['Is Tom in the office?', "No, I'm sorry, he's out."]
                ] },
              { ui: 'choice', cat: 'fun', srsId: 'bs2w3:c:1',
                title: '🔧 Escolha a palavra certa:', main: 'Can I ___ to Hendrik, please?',
                options: DF.shuffle([
                  { label: 'speak', correct: true }, { label: 'speaking', trap: true },
                  { label: 'talk to' }, { label: 'say' }
                ]),
                trapNote: '"speaking" só aparece em "Maria speaking" (ao atender).',
                expl: 'Can I speak to…? — verbo no infinitivo depois de "can".' },
              { ui: 'choice', cat: 'voc', srsId: 'bs2w3:c:2',
                title: '🔢 Como se lê 2424 num código?',
                options: DF.shuffle([
                  { label: 'two four two four', correct: true },
                  { label: 'twenty-four twenty-four' }, { label: 'two thousand four hundred' },
                  { label: 'twenty-four hundred' }
                ]),
                expl: 'Código e telefone: dígito por dígito.',
                feedbackTts: 'two four two four' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Seus números de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'spl', srsId: 'bs2w3:build:me', unit: 2, waSec: 'Sua vez',
                title: '🗣️ Seu celular, dígito por dígito',
                prompt: 'Diga seu número de celular em inglês, dígito por dígito.',
                example: 'My mobile number is nine nine seven three five...',
                expl: 'Mande o áudio — o professor confere se cada dígito saiu claro.' },
              { ui: 'build', cat: 'fun', srsId: 'bs2w3:build:call', unit: 2, waSec: 'Sua vez',
                title: '📞 A ligação inteira',
                prompt: 'Ligue para uma empresa e peça para falar com alguém. Fale as duas falas.',
                example: 'Good morning. Can I speak to Camila, please? Thanks.',
                mustUse: ['speak'] }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Ligação sem roteiro', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs2w3+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Você atende e a pessoa não está',
                prompt: 'Atenda com o nome da empresa, diga que a pessoa saiu e ofereça anotar o número.',
                example: "Good afternoon, Whiterock Consultancy. I'm sorry, she's out. Can I take your number?",
                mustUse: ['sorry'] },
              { ui: 'build', cat: 'spl', srsId: 'bs2w3+:b2', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Passe um número longo',
                prompt: 'Diga um número de 9 dígitos, devagar e claro, como ao telefone.',
                example: 'Zero one seven three one seven five eight nine.' }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Ditado infinito de números', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              numbers: [
                { digits: 4, label: '🔢 Código de 4 dígitos:' },
                { digits: 6, label: '🔢 Ramal de 6 dígitos:' },
                { digits: 8, oh: true, label: '🔢 Celular (com "oh"):' },
                { digits: 9, label: '🔢 O mais difícil — 9 dígitos:' }
              ],
              drills: [
                { frame: 'Can I speak to ___, please?', pool: 'name', focus: 'pessoa',
                  ptHint: 'Posso falar com ___?', n: 5 },
                { frame: 'Good morning, ___.', pool: 'company', focus: 'empresa',
                  ptHint: 'Bom dia, ___.', n: 4 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════ SEMANA 4 (a "semana 8" do ano) ══════════════════
      {
        n: 4, key: 'talk', icon: '🏁',
        title: 'Talking point + teste',
        goal: 'Fechar a unidade: a ligação completa, o teste escrito e o oral.',
        comp: 'Você conduz uma ligação inteira — atende, se apresenta, pede por ' +
              'alguém, diz sim e diz não — os 5 itens do speaking test.',
        live: [
          'Talking point: the company game, em dupla',
          'Cinco conversas montadas no tabuleiro',
          'Progress test — 30 pontos',
          'Speaking test — 10 pontos (role-play de telefone)'
        ],
        bridge: 'Na aula você jogou o company game e o professor aplicou o teste. ' +
                'Aqui você ensaia os mesmos 5 itens do speaking test numa situação ' +
                'DIFERENTE — atendendo o telefone da sua própria empresa.',
        nextLive: 'Unit 3 — Workplace. Começa na segunda-feira seguinte.',
        ican: [
          'I can answer a work call.',
          'I can start a call and ask for someone.',
          'I can say yes and pass the call.',
          'I can say no politely.',
          'I can complete the Unit 2 progress test.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'game', icon: '🎲', name: 'O jogo da conversa', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:g:1', unit: 2, waSec: 'Talking Point',
                title: '🎲 Rodada 1 — identificação',
                prompt: 'Alguém pergunta "Hello, are you Hendrik?" mas você não é. Responda e diga quem é.',
                example: "No, it isn't. It's Tom.", mustUse: ['no'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:g:2', unit: 2, waSec: 'Talking Point',
                title: '🎲 Rodada 2 — empresa e matriz',
                prompt: 'Perguntaram sua empresa e onde fica a matriz. Responda as duas com "and".',
                example: "My company is Aurora Systems and our head office is in Tokyo.",
                mustUse: ['and'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:g:3', unit: 2, waSec: 'Talking Point',
                title: '🎲 Rodada 3 — a ligação',
                prompt: 'Ligue e peça para falar com a Camila. A recepcionista diz que ela saiu. Encerre educadamente.',
                example: "Can I speak to Camila, please? ... OK. Thanks. Goodbye.",
                mustUse: ['speak', 'thanks'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:g:4', unit: 2, waSec: 'Talking Point',
                title: '🎲 Rodada 4 — de onde você é',
                prompt: 'Perguntaram de onde você é e você responde, depois devolve a pergunta.',
                example: "I'm from Japan. And you? Where are you from?",
                mustUse: ['from'] }
            ]
          },

          {
            id: 'ptest', icon: '📝', name: 'Ensaio do progress test', tag: 'escrita',
            items: [
              { ui: 'type', cat: 'voc', srsId: 'bs2w4:pt:1',
                title: '📝 Complete o país (4 letras):', main: 'My head office is in Madrid, in S____.',
                answers: ['Spain', 'spain'], expl: 'Madrid → Spain.', feedbackTts: 'Spain' },
              { ui: 'type', cat: 'voc', srsId: 'bs2w4:pt:2',
                title: '📝 Complete o país (5 letras):', main: 'I work in Tokyo, in J____.',
                answers: ['Japan', 'japan'], expl: 'Tokyo → Japan.', feedbackTts: 'Japan' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w4:pt:3',
                title: '📝 Escolha a palavra certa:', main: '___ are you from?',
                options: DF.shuffle([{ label: 'Where', correct: true }, { label: 'What' }]),
                expl: 'Where = lugar. What = coisa/nome.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w4:pt:4',
                title: '📝 Escolha a preposição:', main: 'I work ___ Nova Energy.',
                options: DF.shuffle([{ label: 'for', correct: true }, { label: 'from' }]),
                expl: 'work FOR + empresa.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w4:pt:5',
                title: '📝 Marque a resposta certa:', main: 'Is Jane a manager?',
                options: DF.shuffle([
                  { label: 'Yes, she is.', correct: true }, { label: "Yes, she's.", trap: true }
                ]),
                trapNote: 'A resposta curta positiva não contrai.',
                expl: 'Yes, she is.' },
              { ui: 'choice', cat: 'gra', srsId: 'bs2w4:pt:6',
                title: '📝 Marque a resposta certa:', main: 'Is Lagos in Mexico?',
                options: DF.shuffle([
                  { label: "No, it isn't.", correct: true }, { label: "No, it's.", trap: true }
                ]),
                trapNote: '"No, it\'s." não existe como resposta curta.',
                expl: "No, it isn't." },
              { ui: 'order', cat: 'fun', srsId: 'bs2w4:pt:7',
                title: '🧩 Ponha em ordem:', answer: 'Hello is Fred there',
                expl: 'Hello. Is Fred there?' },
              { ui: 'order', cat: 'fun', srsId: 'bs2w4:pt:8',
                title: '🧩 Ponha em ordem:', answer: 'Can I speak to Marco please',
                expl: 'Can I speak to Marco, please?' },
              { ui: 'match', cat: 'fun', srsId: 'bs2w4:pt:9',
                title: '🔗 Ligue as metades da ligação:',
                pairs: [
                  ['Good morning,', 'Whiterock Consultancy.'],
                  ['Can I speak', 'to Camila, please?'],
                  ['Yes, of course.', 'One moment.'],
                  ["I'm sorry,", "she's out."]
                ] }
            ]
          },

          {
            id: 'stest', icon: '🏆', name: 'Ensaio do speaking test', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:st:1', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 1 de 5 — answer a call',
                prompt: 'O telefone toca na sua empresa. Atenda.',
                example: 'Good morning, Whiterock Consultancy.', mustUse: ['good'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:st:2', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 2 de 5 — start a call',
                prompt: 'Agora você liga. Cumprimente e diga quem é.',
                example: "Hello. This is Felipe from EnglishFlow.", mustUse: ['hello'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:st:3', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 3 de 5 — ask for someone',
                prompt: 'Peça para falar com o Bill.',
                example: 'Can I speak to Bill, please?', mustUse: ['speak'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:st:4', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 4 de 5 — say yes',
                prompt: 'Você é a recepcionista. A pessoa está. Diga sim e peça um momento.',
                example: 'Yes, of course. One moment.', mustUse: ['moment'] },
              { ui: 'build', cat: 'fun', srsId: 'bs2w4:st:5', unit: 2, waSec: 'Speaking Test',
                title: '🏆 Item 5 de 5 — say no',
                prompt: 'Agora a pessoa não está. Diga que não, educadamente.',
                example: "No, I'm sorry, he's not in the office.", mustUse: ['sorry'],
                expl: 'Mande o áudio dos 5 itens — o professor pontua cada um de 0 a 2 (total /10).' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'A ligação inteira, sem parar', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'bs2w4+:b1', unit: 2, waSec: 'Praticar mais',
                title: '🔥 Os dois papéis de uma vez',
                prompt: 'Grave a ligação completa fazendo os dois papéis: quem atende e quem liga.',
                example: "Good morning, Whiterock Consultancy. — Hello. Can I speak to Camila, please? " +
                         "— I'm sorry, she's out. — OK. Thanks. Goodbye.",
                expl: 'É o formato exato do speaking test. Mande pro professor pontuar.' }
            ]
          },
          {
            id: 'gen-w4', icon: '♾️', name: 'Revisão infinita da Unit 2', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              numbers: [
                { digits: 6, label: '🔢 Ouça e escreva:' },
                { digits: 8, oh: true, label: '🔢 Celular (com "oh"):' }
              ],
              drills: [
                { frame: "I'm from ___.", pool: 'country', focus: 'país', ptHint: 'Sou do/da ___.', n: 4 },
                { frame: 'Can I speak to ___, please?', pool: 'name', focus: 'pessoa',
                  ptHint: 'Posso falar com ___?', n: 4 },
                { frame: 'Our head office is in ___.', pool: 'city', focus: 'cidade',
                  ptHint: 'Nossa matriz fica em ___.', n: 4 }
              ],
              transform: {
                title: '🔀 Transforme',
                templates: ['He is in {city}.', 'She is in {city}.', 'It is in {country}.'],
                cmds: ['Negative', 'Question', 'Contraction'],
                n: 6
              }
            }
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
