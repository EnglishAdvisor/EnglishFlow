/* BUSINESS FLOW — units/starter/unit01.js
   UNIT 1 — You (1º andar) · Business Starter · CONTEÚDO COMPLETO
   Rastreabilidade: competências e temas do Business Result 2nd Ed. Starter
   Unit 1 "You" (Working with Words: introducing yourself + jobs;
   Language at Work: I'm/you're/Are you...?; Practically Speaking: spelling;
   Business Communication: meeting people) — só objetivos, nada copiado.
   Personagens e diálogos 100% autorais: escritório fictício "Marcom Global". */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.starter;

  // ---------- KEYWORDS oficiais do andar (glossário) ----------
  const GLOSSARY = [
    { en: 'IT technician', pt: 'técnico de TI', def: 'a person who fixes computers and networks.' },
    { en: 'finance director', pt: 'diretor(a) financeiro(a)', def: 'the person who manages the company\'s money.' },
    { en: 'office assistant', pt: 'assistente administrativo', def: 'a person who helps with everyday office tasks.' },
    { en: 'sales representative', pt: 'representante de vendas', def: 'a person who sells the company\'s products.' },
    { en: 'engineer', pt: 'engenheiro(a)', def: 'a person who designs or builds things.' },
    { en: 'human resources manager', pt: 'gerente de RH', def: 'the person who manages the company\'s people.' },
    { en: 'colleague', pt: 'colega de trabalho', def: 'a person you work with.' },
    { en: 'meeting', pt: 'reunião', def: 'when people come together to talk about work.' },
    { en: 'business card', pt: 'cartão de visita', def: 'a small card with your name and job title.' },
    { en: 'name badge', pt: 'crachá', def: 'a card with your name that you wear at work.' },
    { en: 'department', pt: 'departamento', def: 'a part of a company, like Sales or Finance.' },
    { en: 'company', pt: 'empresa', def: 'a business organization.' }
  ];

  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE AT WORK: I'm / you're / Are you...? ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'bs-u1:g:be1',
      title: '🔧 Complete:', main: 'I ___ from Rio de Janeiro.',
      options: opts("'m (am)", ["'s (is)", "'re (are)", 'be']),
      expl: 'I am / I\'m — primeira pessoa.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'bs-u1:g:be2',
      title: '🔧 Complete:', main: 'You ___ the new IT technician.',
      options: opts("'re (are)", ["'m (am)", "'s (is)", 'be']),
      expl: 'you → ARE / you\'re.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'bs-u1:g:be3',
      title: '🔧 Monte a pergunta:', main: '___ you Marina, from Sales?',
      options: opts('Are', ['Is', 'Am', 'Be']),
      expl: 'Pergunta com "you" → ARE you…?'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'bs-u1:g:be4',
      title: '🔧 Resposta curta positiva:', main: 'Are you the finance director? — Yes, I ___.',
      options: opts('am', ['is', 'are', 'do']),
      expl: 'Yes, I am. / No, I\'m not.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'bs-u1:g:be5',
      title: '🔧 Negativa:', main: "I ___ from the Sales department. I'm from IT.",
      options: opts("'m not", ["isn't", "aren't", "don't"]),
      expl: 'I\'m not = I am not.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'bs-u1:g:be6',
      title: '🔧 Complete o diálogo:', main: 'A: Hi, ___ you Paulo? B: Yes, that\'s right.',
      options: opts('are', ['is', 'am', 'do']),
      expl: 'Are you Paulo? — pergunta de identificação.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'bs-u1:g:ord1',
      title: '🔧 Monte a frase:', answer: 'I am the new sales representative',
      expl: 'I am + artigo + cargo.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'bs-u1:g:ord2',
      title: '🔧 Monte a pergunta:', answer: 'Are you from the finance department',
      expl: 'Are you from + departamento?'
    }
  ];

  // ---------- BUSINESS COMMUNICATION: Meeting people ----------
  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'bs-u1:f:hello1',
      title: '🤝 Você conhece alguém pela primeira vez. Você diz:', main: null,
      options: opts('Nice to meet you.', ['How is you?', 'Meet nice you.', 'I am meet you.']),
      expl: '"Nice to meet you." — a resposta clássica: "Nice to meet you, too."',
      feedbackTts: 'Nice to meet you.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'bs-u1:f:intro1',
      title: '🤝 Para apresentar um colega, você diz:', main: null,
      options: opts('This is my colleague, Marina.', ['Here is Marina, my colleague.', 'Marina is here my colleague.', 'This my colleague is Marina.']),
      expl: '"This is + nome" é o jeito mais comum de apresentar alguém.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'bs-u1:f:bye1',
      title: '🤝 No final de uma reunião de trabalho, você diz:', main: null,
      options: opts('It was nice meeting you.', ['Was nice meet you.', 'Goodbye for now for you.', 'I go now.']),
      expl: '"It was nice meeting you." — despedida educada em contexto profissional.',
      feedbackTts: 'It was nice meeting you.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'bs-u1:f:hello2',
      title: '🤝 Complete a saudação de manhã cedo:', main: 'Good ___, everyone.',
      options: opts('morning', ['night', 'evening', 'day']),
      expl: 'Good morning (manhã) · Good afternoon (tarde) · Good evening (noite, chegando).'
    }
  ];

  // ---------- PRACTICALLY SPEAKING: Spelling ----------
  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'bs-u1:s:name1',
      title: '🔤 Qual nome está soletrado?', main: 'M - A - R - I - N - A',
      options: opts('Marina', ['Marino', 'Marian', 'Mariana']),
      expl: 'M-A-R-I-N-A = Marina.', feedbackTts: 'Marina'
    },
    {
      ui: 'type', cat: 'spl', srsId: 'bs-u1:s:name2',
      title: '🔤 Ouça a soletração e escreva o sobrenome:',
      tts: 'T. A. V. A. R. E. S.', ttsLabel: '🔊 Ouvir a soletração',
      showIfNoTTS: 'T - A - V - A - R - E - S',
      answers: ['Tavares', 'tavares'], expl: 'T-A-V-A-R-E-S = Tavares.', feedbackTts: 'Tavares'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'bs-u1:s:ask1',
      title: '🔤 Para pedir a soletração de um nome, você pergunta:', main: null,
      options: opts('How do you spell that?', ['How do you write that?', 'What is the letters?', 'Spell to me.']),
      expl: '"How do you spell that?" — a pessoa soletra letra por letra.',
      feedbackTts: 'How do you spell that?'
    }
  ];

  // ---------- WORKING WITH WORDS: jobs + a/an ----------
  const READ1 = [
    {
      ui: 'choice', cat: 'voc', srsId: 'bs-u1:v:job1',
      title: '💼 A pessoa que conserta computadores é:', main: null,
      options: opts('an IT technician', ['a finance director', 'an office assistant', 'a sales representative']),
      expl: 'IT technician começa com som de vogal → AN IT technician.'
    },
    {
      ui: 'choice', cat: 'voc', srsId: 'bs-u1:v:job2',
      title: '💼 A pessoa que gerencia o dinheiro da empresa é:', main: null,
      options: opts('a finance director', ['an IT technician', 'a sales representative', 'an engineer']),
      expl: 'finance director começa com som de consoante → A finance director.'
    },
    {
      ui: 'choice', cat: 'voc', srsId: 'bs-u1:v:job3',
      title: '💼 A pessoa que vende os produtos da empresa é:', main: null,
      options: opts('a sales representative', ['a human resources manager', 'an engineer', 'an office assistant']),
      expl: 'sales representative = representante de vendas.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'bs-u1:g:art1',
      title: '🔧 Complete com a / an:', main: 'She is ___ engineer.',
      options: opts('an', ['a']),
      expl: 'engineer começa com som de vogal → AN engineer.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'bs-u1:g:art2',
      title: '🔧 Complete com a / an:', main: 'He is ___ human resources manager.',
      options: opts('a', ['an']),
      expl: 'human começa com som de consoante (h aspirado) → A human resources manager.'
    }
  ];

  // ---------- MISSÕES (7 seções: cover · words · grammar · speaking · comm · talk · check) ----------
  const MISSIONS = {

    // 1 ▸ COVER — apresentação da unidade
    cover: {
      brief: 'Bem-vindo(a) ao 1º andar da torre. Nesta unidade: como se apresentar, falar sobre cargos e conhecer colegas em inglês — o primeiro dia na Marcom Global.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — palavras para começar:',
          cards: [
            { en: 'colleague', pt: 'colega de trabalho', def: 'The people you work with every day.' },
            { en: 'meeting', pt: 'reunião', def: 'Meetings are a big part of business life.' },
            { en: 'department', pt: 'departamento', def: 'Sales, Finance, IT — different departments.' },
            { en: 'business card', pt: 'cartão de visita', def: 'You exchange business cards when you meet someone new.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🏢 Bem-vindo à Marcom Global',
          textTitle: 'Your first day',
          text: "Marcom Global is an international company. There are people from many countries in the office.\n\nOn your first day, you meet new colleagues. You say your name, your job, and where you're from — all in English.\n\nIt's simple: a smile, a handshake, and \"Nice to meet you.\""
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'bs-u1:v:colleague',
          sp: { g: 'venpt', en: 'colleague', u: 1 },
          title: '📦 “Colleague” significa:', main: null,
          options: opts('colega de trabalho', ['chefe', 'cliente', 'concorrente']),
          expl: 'colleague = colega de trabalho.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Cover',
        brief: 'Grave um áudio dizendo: "Hello. My name is… I\'m from… Nice to meet you."',
        waText: 'Registro de áudio: apresentação pessoal (Unit 1 — You).'
      }
    },

    // 2 ▸ WORKING WITH WORDS — jobs + a/an
    words: {
      brief: 'Cargos comuns no escritório e a diferença entre A e AN. Conheça a equipe da Marcom Global.',
      items: READ1,
      task: {
        type: 'writing',
        title: '💬 Sua vez',
        brief: 'Escreva uma frase sobre seu próprio trabalho (real ou imaginado), usando "I am a/an…":',
        btn: '💬 Enviar frase',
        fields: [{ label: 'My job', ph: 'ex.: I am an English teacher.' }]
      }
    },

    // 3 ▸ LANGUAGE AT WORK — I'm / you're / Are you...?
    grammar: {
      brief: 'A gramática do primeiro dia: I\'m, you\'re e Are you…? — afirmativa, negativa e pergunta.',
      items: LANG1
    },

    // 4 ▸ PRACTICALLY SPEAKING — spelling
    speaking: {
      brief: 'Soletrar nomes em voz alta — uma habilidade que você vai usar toda semana ao telefone e em reuniões.',
      items: SPELL.concat([
        {
          ui: 'speak', cat: 'pro', srsId: 'bs-u1:sp:speak1', unit: 1, waSec: 'Practically Speaking',
          title: '🎤 Fale a pergunta:',
          target: 'How do you spell that?',
          ptHint: 'Como se soletra isso?'
        }
      ]),
      task: {
        type: 'audio',
        title: '🎙️ Soletre seu nome',
        brief: 'Grave um áudio soletrando seu nome completo, letra por letra, em inglês.',
        waText: 'Registro: soletração do meu nome completo.'
      }
    },

    // 5 ▸ BUSINESS COMMUNICATION — meeting people
    comm: {
      brief: 'As expressões-chave para conhecer pessoas em contexto profissional: cumprimentar, apresentar e se despedir.',
      items: PHRASES
    },

    // 6 ▸ TALKING POINT — fluência / jogo
    talk: {
      brief: 'Hora de praticar sem medo de errar: apresente-se para 3 "colegas" imaginários da Marcom Global, cada um com um cargo diferente.',
      items: [
        {
          ui: 'speak', cat: 'pro', srsId: 'bs-u1:sp:talk1', unit: 1, waSec: 'Talking Point',
          title: '🎤 Apresente-se para o novo colega de TI:',
          target: "Hi, I'm [your name]. Nice to meet you.",
          ptHint: 'Oi, eu sou [seu nome]. Prazer em conhecer você.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'bs-u1:sp:talk2', unit: 1, waSec: 'Talking Point',
          title: '🎤 Pergunte o cargo de alguém:',
          target: 'What do you do here?',
          ptHint: 'O que você faz aqui?'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Talking Point',
        brief: 'Grave um diálogo curto (você nos dois papéis) se apresentando para um novo colega.',
        waText: 'Registro: diálogo de apresentação (Talking Point Unit 1).'
      }
    },

    // 7 ▸ OUTCOMES — autoavaliação
    check: {
      brief: 'O que você já consegue fazer em inglês depois deste andar? Sua resposta vai para o Data Book.',
      checklist: true
    }
  };

  const CHECKLIST = [
    'I can introduce myself in English.',
    'I can talk about jobs using a/an correctly.',
    "I can use I'm / you're / Are you...?",
    'I can spell my name aloud.',
    'I can greet people and say goodbye politely.'
  ];

  UD[1] = {
    glossary: GLOSSARY,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1,
    listenPool: [],
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'phone'], max: 99 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
