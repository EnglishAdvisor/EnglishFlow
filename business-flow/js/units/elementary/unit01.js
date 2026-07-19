/* BUSINESS FLOW — units/elementary/unit01.js
   UNIT 1 — Jobs (1º andar) · Business Elementary · CONTEÚDO COMPLETO
   Rastreabilidade: competências e temas do Business Result 2nd Ed. Elementary
   Unit 1 "Jobs" (Working with Words: nationalities + job titles; Language
   at Work: verb be + possessives; Practically Speaking: how to spell;
   Business Communication: saying hello and goodbye) — só objetivos, nada
   copiado. Cenário autoral: empresa fictícia "Marcegaglia Steel do Brasil".*/
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.elementary;

  // ---------- KEYWORDS oficiais do andar (glossário) ----------
  const GLOSSARY = [
    { en: 'sales representative', pt: 'representante de vendas', def: 'a person who sells products for a company.' },
    { en: 'financial director', pt: 'diretor(a) financeiro(a)', def: 'the person who manages company finances.' },
    { en: 'CEO', pt: 'diretor(a)-executivo(a)', def: 'chief executive officer — the top manager of a company.' },
    { en: 'personal assistant', pt: 'assistente pessoal', def: 'a person who helps a manager with daily tasks.' },
    { en: 'technician', pt: 'técnico(a)', def: 'a person who works with equipment and machines.' },
    { en: 'HR manager', pt: 'gerente de RH', def: 'human resources manager — manages the company\'s people.' },
    { en: 'receptionist', pt: 'recepcionista', def: 'a person who welcomes visitors at the front desk.' },
    { en: 'team leader', pt: 'líder de equipe', def: 'a person who leads a small group of workers.' },
    { en: 'nationality', pt: 'nacionalidade', def: 'the country a person is legally from.' },
    { en: 'headquarters', pt: 'sede', def: 'the main office of a company.' }
  ];

  const NATIONALITIES = [
    { en: 'Indian', pt: 'indiano(a)' }, { en: 'British', pt: 'britânico(a)' },
    { en: 'Japanese', pt: 'japonês/japonesa' }, { en: 'Polish', pt: 'polonês/polonesa' },
    { en: 'Brazilian', pt: 'brasileiro(a)' }, { en: 'American', pt: 'americano(a)' },
    { en: 'Italian', pt: 'italiano(a)' }, { en: 'South African', pt: 'sul-africano(a)' }
  ];

  const POOL = GLOSSARY.concat(NATIONALITIES);
  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE AT WORK: verb be + possessives ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'be-u1:g:be1',
      title: '🔧 Complete:', main: 'Marcegaglia ___ an Italian company.',
      options: opts('is', ['are', 'am', 'be']),
      expl: 'A empresa (it) → IS.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'be-u1:g:be2',
      title: '🔧 Complete:', main: 'We ___ from the São Paulo office.',
      options: opts('are', ['is', 'am', 'be']),
      expl: 'we → ARE.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'be-u1:g:be3',
      title: '🔧 Monte a pergunta:', main: '___ they Brazilian or Italian?',
      options: opts('Are', ['Is', 'Am', 'Do']),
      expl: 'they → ARE they…?'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'be-u1:g:poss1',
      title: '🔧 Complete com o possessivo:', main: 'This is Carla. ___ job is Sales Manager.',
      options: opts('Her', ['His', 'Their', 'Its']),
      expl: 'Carla (mulher) → HER job.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'be-u1:g:poss2',
      title: '🔧 Complete com o possessivo:', main: 'This is Marco. ___ department is Finance.',
      options: opts('His', ['Her', 'Their', 'Our']),
      expl: 'Marco (homem) → HIS department.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'be-u1:g:poss3',
      title: '🔧 Complete com o possessivo:', main: 'We are a team. ___ leader is Ana.',
      options: opts('Our', ['My', 'Your', 'Its']),
      expl: 'we (nós) → OUR leader.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'be-u1:g:poss4',
      title: '🔧 Complete com o possessivo:', main: 'The company is big. ___ headquarters is in Milan.',
      options: opts('Its', ['His', 'Her', 'Their']),
      expl: 'A empresa (coisa) → ITS headquarters.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'be-u1:g:ord1',
      title: '🔧 Monte a frase:', answer: 'His name is Marco and he is Italian',
      expl: 'His name is + nome + and he is + nacionalidade.'
    }
  ];

  // ---------- WORKING WITH WORDS: countries/nationalities + job titles ----------
  const READ1 = [
    {
      ui: 'match', cat: 'voc', srsId: 'be-u1:v:nat1',
      title: '🌍 Ligue o país à nacionalidade:',
      pairs: [['India', 'Indian'], ['the UK', 'British'], ['Japan', 'Japanese'], ['Poland', 'Polish']],
      expl: 'India→Indian, the UK→British, Japan→Japanese, Poland→Polish.'
    },
    {
      ui: 'match', cat: 'voc', srsId: 'be-u1:v:nat2',
      title: '🌍 Mais nacionalidades:',
      pairs: [['Brazil', 'Brazilian'], ['the USA', 'American'], ['Italy', 'Italian'], ['South Africa', 'South African']],
      expl: 'Brazil→Brazilian, the USA→American, Italy→Italian, South Africa→South African.'
    },
    {
      ui: 'choice', cat: 'voc', srsId: 'be-u1:v:job1',
      title: '💼 A pessoa que ajuda o diretor no dia a dia é:', main: null,
      options: opts('a personal assistant', ['a receptionist', 'a team leader', 'a technician']),
      expl: 'personal assistant = assistente pessoal.'
    },
    {
      ui: 'choice', cat: 'voc', srsId: 'be-u1:v:job2',
      title: '💼 A pessoa que recebe os visitantes na recepção é:', main: null,
      options: opts('a receptionist', ['an HR manager', 'a CEO', 'a sales representative']),
      expl: 'receptionist = recepcionista.'
    },
    {
      ui: 'choice', cat: 'voc', srsId: 'be-u1:v:job3',
      title: '💼 O maior cargo executivo da empresa é:', main: null,
      options: opts('CEO', ['team leader', 'technician', 'personal assistant']),
      expl: 'CEO = chief executive officer.'
    }
  ];

  // ---------- PRACTICALLY SPEAKING: how to spell ----------
  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'be-u1:s:name1',
      title: '🔤 Qual nome está soletrado?', main: 'C - A - R - L - A',
      options: opts('Carla', ['Carlos', 'Carola', 'Clara']),
      expl: 'C-A-R-L-A = Carla.', feedbackTts: 'Carla'
    },
    {
      ui: 'type', cat: 'spl', srsId: 'be-u1:s:name2',
      title: '🔤 Ouça a soletração e escreva o sobrenome:',
      tts: 'M. A. R. C. O.', ttsLabel: '🔊 Ouvir a soletração',
      showIfNoTTS: 'M - A - R - C - O',
      answers: ['Marco', 'marco'], expl: 'M-A-R-C-O = Marco.', feedbackTts: 'Marco'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'be-u1:s:group1',
      title: '🔤 Estas letras têm o mesmo som de "E": B, C, D...', main: 'Qual falta no grupo?',
      options: opts('G', ['H', 'F', 'I']),
      expl: 'Grupo do "i" (som de E): B C D E G P T V.'
    }
  ];

  // ---------- BUSINESS COMMUNICATION: saying hello and goodbye ----------
  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'be-u1:f:hello1',
      title: '🤝 Ao conhecer alguém pela primeira vez, você diz:', main: null,
      options: opts('Pleased to meet you.', ['Pleasure to know you.', 'I am pleasure meet you.', 'Meet pleased.']),
      expl: '"Pleased to meet you." — formal, comum em primeiro contato profissional.',
      feedbackTts: 'Pleased to meet you.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'be-u1:f:howareyou',
      title: '🤝 Complete a resposta:', main: 'A: How are you? B: I\'m fine, ___.',
      options: opts('thanks', ['please', 'sorry', 'welcome']),
      expl: '"I\'m fine, thanks. And you?" é a resposta padrão.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'be-u1:f:bye1',
      title: '🤝 Para se despedir formalmente no fim do dia, você diz:', main: null,
      options: opts('Goodbye, see you tomorrow.', ['Bye-bye forever.', 'I go now, goodbye.', 'See you, bye for now, thanks.']),
      expl: '"Goodbye, see you tomorrow." — despedida clara e educada.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'be-u1:f:intro1',
      title: '🤝 Para apresentar um colega a um visitante:', main: null,
      options: opts('This is Marco, our team leader.', ['Marco this is our team leader.', 'Here Marco, team leader.', 'Our team leader here is Marco.']),
      expl: '"This is + nome + , + cargo."'
    }
  ];

  // ---------- MISSÕES (7 seções) ----------
  const MISSIONS = {

    cover: {
      brief: 'Bem-vindo(a) ao 1º andar. Nesta unidade: nacionalidades, cargos e como cumprimentar pessoas — o primeiro dia na Marcegaglia Steel do Brasil.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — palavras para começar:',
          cards: [
            { en: 'nationality', pt: 'nacionalidade', def: 'Marcegaglia has staff of many nationalities.' },
            { en: 'headquarters', pt: 'sede', def: 'The headquarters is in Milan, Italy.' },
            { en: 'CEO', pt: 'diretor-executivo', def: 'The CEO leads the whole company.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🏭 Bem-vindo à Marcegaglia',
          textTitle: 'An international company',
          text: "Marcegaglia is an Italian company, but it has offices around the world — including Brazil.\n\nThe staff is international: Brazilian, Italian, Indian, and more. In meetings, they use English.\n\nOn your first day, you learn names, nationalities, and jobs — and you say hello to everyone!"
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Cover',
        brief: 'Grave um áudio dizendo: "Hello, I\'m… I\'m Brazilian. I\'m a/an…"',
        waText: 'Registro de áudio: apresentação pessoal (Unit 1 — Jobs).'
      }
    },

    words: {
      brief: 'Nacionalidades e cargos comuns numa empresa internacional.',
      items: READ1,
      task: {
        type: 'writing',
        title: '💬 Sua vez',
        brief: 'Escreva sobre você: nacionalidade + profissão (real ou imaginada).',
        btn: '💬 Enviar frase',
        fields: [{ label: 'My nationality and job', ph: 'ex.: I am Brazilian. I am a sales representative.' }]
      }
    },

    grammar: {
      brief: 'O verbo be (afirmativa/pergunta) e os possessivos his/her/its/our/their — a base para falar de qualquer colega.',
      items: LANG1
    },

    speaking: {
      brief: 'Soletrar nomes e sobrenomes — essencial ao telefone e em cadastros.',
      items: SPELL.concat([
        {
          ui: 'speak', cat: 'pro', srsId: 'be-u1:sp:speak1', unit: 1, waSec: 'Practically Speaking',
          title: '🎤 Fale a pergunta:',
          target: 'Could you spell your name, please?',
          ptHint: 'Você pode soletrar seu nome, por favor?'
        }
      ]),
      task: {
        type: 'audio',
        title: '🎙️ Soletre seu nome',
        brief: 'Grave um áudio soletrando seu nome completo em inglês.',
        waText: 'Registro: soletração do meu nome (Unit 1 — Jobs).'
      }
    },

    comm: {
      brief: 'As expressões-chave para cumprimentar e se despedir num ambiente de trabalho internacional.',
      items: PHRASES
    },

    talk: {
      brief: 'Pratique sem medo: cumprimente 3 "colegas" da Marcegaglia, cada um de uma nacionalidade diferente.',
      items: [
        {
          ui: 'speak', cat: 'pro', srsId: 'be-u1:sp:talk1', unit: 1, waSec: 'Talking Point',
          title: '🎤 Cumprimente um colega novo:',
          target: "Hello, I'm [your name]. Pleased to meet you.",
          ptHint: 'Olá, eu sou [seu nome]. Prazer em conhecê-lo(a).'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'be-u1:sp:talk2', unit: 1, waSec: 'Talking Point',
          title: '🎤 Pergunte a nacionalidade de alguém:',
          target: 'Where are you from?',
          ptHint: 'De onde você é?'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Talking Point',
        brief: 'Grave um pequeno diálogo se apresentando e perguntando de onde a outra pessoa é.',
        waText: 'Registro: diálogo de apresentação (Talking Point Unit 1).'
      }
    },

    check: {
      brief: 'O que você já consegue fazer em inglês depois deste andar? Sua resposta vai para o Data Book.',
      checklist: true
    }
  };

  const CHECKLIST = [
    'I can talk about nationalities.',
    'I can name common job titles.',
    'I can use the verb be and possessive adjectives.',
    'I can spell names aloud.',
    'I can greet people and say goodbye politely.'
  ];

  UD[1] = {
    glossary: GLOSSARY,
    extraVocab: NATIONALITIES,
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
