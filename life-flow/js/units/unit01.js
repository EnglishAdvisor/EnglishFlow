/* LIFE FLOW — units/unit01.js
   UNIT 1 — Who We Are (parada 1) · World Class 1 · CONTEÚDO COMPLETO
   Rastreabilidade: competências e temas do World Class 1 (National Geographic
   Learning) Unit 1 "Who We Are" (Vocabulary and Grammar: personality/traits +
   mixed past tenses for memorable life events; Video: DNA/ancestry studies;
   Writing: job application + interview) — só objetivos, nada copiado.
   Personagem autoral: Alyssa M. Davis, candidata a emprego fictícia. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  // ---------- KEYWORDS oficiais da parada (glossário) ----------
  const GLOSSARY = [
    { en: 'determine', pt: 'determinar', def: 'to find out or decide something exactly.' },
    { en: 'ambitious', pt: 'ambicioso(a)', def: 'having a strong wish to succeed.' },
    { en: 'statistics', pt: 'estatísticas', def: 'numbers that describe facts about a group of people.' },
    { en: 'traits', pt: 'traços de personalidade', def: 'the qualities that make up someone\'s character.' },
    { en: 'typical', pt: 'típico(a)', def: 'having the usual features of a group.' },
    { en: 'average', pt: 'médio(a)', def: 'the normal or usual amount.' },
    { en: 'come up with', pt: 'criar / apresentar (uma ideia)', def: 'to think of a plan or idea.' },
    { en: 'set out', pt: 'partir / começar (uma jornada)', def: 'to start a journey or a project.' },
    { en: 'notice', pt: 'notar / perceber', def: 'to see or become aware of something.' },
    { en: 'hardworking', pt: 'esforçado(a)', def: 'someone who works with a lot of effort.' },
    { en: 'motivated', pt: 'motivado(a)', def: 'having a strong reason to do something well.' },
    { en: 'qualified', pt: 'qualificado(a)', def: 'having the skills or education for a job.' },
    { en: 'coordinate', pt: 'coordenar', def: 'to organize people or things to work together.' },
    { en: 'problem-solve', pt: 'resolver problemas', def: 'to find solutions to difficult situations.' }
  ];

  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- GRAMMAR: mixed past tenses (memorable life events) ----------
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'lf-u1:g:past1',
      title: '🔧 Complete (simple past):', main: 'I ___ (move) to a new city when I was ten.',
      options: opts('moved', ['was moving', 'have moved', 'move']),
      expl: 'Evento pontual e concluído no passado → simple past: moved.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'lf-u1:g:past2',
      title: '🔧 Complete (past continuous):', main: 'I ___ (walk) home when I saw an old friend.',
      options: opts('was walking', ['walked', 'have walked', 'walk']),
      expl: 'Ação em andamento interrompida por outra → past continuous: was walking.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'lf-u1:g:past3',
      title: '🔧 Complete (present perfect):', main: "I ___ (never/be) to Japan.",
      options: opts("have never been", ['never was', 'never am', 'never went']),
      expl: 'Experiência de vida, sem tempo específico → present perfect: have never been.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'lf-u1:g:past4',
      title: '🔧 Escolha o tempo certo:', main: 'By the time I finished university, I ___ (already/change) my career plans twice.',
      options: opts('had already changed', ['already changed', 'have already changed', 'was already changing']),
      expl: 'Ação concluída antes de outro ponto no passado → past perfect: had already changed.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'lf-u1:g:past5',
      title: '🔧 Complete:', main: 'While I ___ (study) abroad, I met my best friend.',
      options: opts('was studying', ['studied', 'have studied', 'study']),
      expl: 'Contexto contínuo no passado (while + past continuous).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'lf-u1:g:past6',
      title: '🔧 Complete:', main: 'She ___ (win) three awards so far in her career.',
      options: opts('has won', ['won', 'was winning', 'wins']),
      expl: '"so far" pede present perfect: has won.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'lf-u1:g:ord1',
      title: '🔧 Monte a frase:', answer: 'I had never travelled alone before that trip',
      expl: 'had never + particípio + before + evento.'
    }
  ];

  // ---------- VOCABULARY: personality traits ----------
  const READ1 = [
    {
      ui: 'choice', cat: 'voc', srsId: 'lf-u1:v:amb',
      title: '📦 Uma pessoa "ambitious" é alguém que:', main: null,
      options: opts('quer muito ter sucesso', ['evita desafios', 'não se importa com o futuro', 'trabalha pouco']),
      expl: 'ambitious = ambicioso(a).'
    },
    {
      ui: 'choice', cat: 'voc', srsId: 'lf-u1:v:hw',
      title: '📦 "Hardworking" descreve alguém que:', main: null,
      options: opts('se esforça muito no trabalho', ['trabalha o mínimo possível', 'é preguiçoso(a)', 'trabalha sozinho(a)']),
      expl: 'hardworking = esforçado(a).'
    },
    {
      ui: 'choice', cat: 'voc', srsId: 'lf-u1:v:qual',
      title: '📦 Uma pessoa "qualified" para um cargo:', main: null,
      options: opts('tem as habilidades necessárias', ['acabou de começar', 'não tem experiência', 'está desempregada']),
      expl: 'qualified = qualificado(a).'
    },
    {
      ui: 'choice', cat: 'voc', srsId: 'lf-u1:v:traits',
      title: '📦 "Traits" são:', main: null,
      options: opts('traços de personalidade', ['erros graves', 'números estatísticos', 'documentos oficiais']),
      expl: 'traits = características que formam o caráter de alguém.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'lf-u1:r:comeup',
      title: '📦 "Come up with an idea" significa:', main: null,
      options: opts('criar/apresentar uma ideia', ['esquecer uma ideia', 'copiar uma ideia', 'recusar uma ideia']),
      expl: 'come up with = criar, apresentar (uma ideia, um plano).'
    }
  ];

  // ---------- VIDEO/LISTENING: DNA & ancestry ----------
  const SCRIPT =
    'Video: The Genographic Project\n\n' +
    'Narrator: Where do we really come from? Geneticist Spencer Wells set out to answer this question.\n' +
    'He studied DNA samples from people all over the world.\n' +
    'His team determined that all humans share a common ancestor from Africa.\n' +
    'The statistics were surprising: our ancestors travelled much further than most people believed.\n' +
    'Scientists noticed similar genetic markers in groups thousands of kilometres apart.';

  function dlg(lines) {
    return lines.map(function (t) { return { t: t, pause: 420 }; });
  }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'lf-u1:l:video1',
      title: '🎧 O que Spencer Wells estudou?',
      tts: dlg(['Geneticist Spencer Wells set out to answer this question.', 'He studied DNA samples from people all over the world.']),
      ttsLabel: '🔊 Ouvir',
      showIfNoTTS: 'Geneticist Spencer Wells studied DNA samples from people all over the world.',
      options: opts('DNA samples from around the world', ['Ancient languages', 'Old maps', 'Traditional food'], 'Old maps'),
      expl: 'Ele estudou amostras de DNA de pessoas do mundo todo.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'lf-u1:l:video2',
      title: '🎧 O que a equipe dele determinou?',
      tts: dlg(['His team determined that all humans share a common ancestor from Africa.']),
      ttsLabel: '🔊 Ouvir',
      showIfNoTTS: 'His team determined that all humans share a common ancestor from Africa.',
      options: opts('Humans share a common ancestor from Africa', ['Humans came from many planets', 'DNA does not change', 'Ancestry cannot be studied']),
      expl: 'A equipe determinou um ancestral comum africano.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'lf-u1:l:video3',
      title: '🎧 Complete a frase que você ouve:',
      tts: dlg(['The statistics were surprising: our ancestors travelled much further than most people believed.']),
      ttsLabel: '🔊 Ouvir',
      showIfNoTTS: 'The statistics were surprising: our ancestors travelled much further than most people believed.',
      answers: ['surprising'],
      placeholder: 'uma palavra',
      expl: '"The statistics were surprising" — os dados surpreenderam os cientistas.'
    }
  ];

  // ---------- WRITING: job application letter + interview ----------
  const LETTER_TEXT =
    'Dear Hiring Manager,\n\n' +
    'I am writing to apply for the Marketing Coordinator position at your company.\n\n' +
    'I am a hardworking and motivated professional with three years of experience coordinating small teams. I am qualified in digital marketing and I enjoy solving problems under pressure.\n\n' +
    'I have attached my resume for your consideration. I would welcome the opportunity to discuss my qualifications in an interview.\n\n' +
    'Sincerely,\nAlyssa M. Davis';

  const WRITE1 = [
    {
      ui: 'read', cat: 'rea', info: true,
      title: '✍️ Carta de candidatura — modelo',
      textTitle: 'Alyssa M. Davis applies for a job',
      text: LETTER_TEXT
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'lf-u1:r:letter1',
      title: '✍️ Qual cargo Alyssa está pleiteando?', main: null,
      options: opts('Marketing Coordinator', ['HR Manager', 'Sales Director', 'Receptionist']),
      expl: '"I am writing to apply for the Marketing Coordinator position."'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'lf-u1:r:letter2',
      title: '✍️ Como Alyssa descreve a si mesma?', main: null,
      options: opts('Hardworking, motivated and qualified', ['Shy and inexperienced', 'New to the industry', 'Looking for a break']),
      expl: '"I am a hardworking and motivated professional... I am qualified..."'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'lf-u1:g:letter3',
      title: '✍️ Complete a frase de fechamento:', main: 'I would welcome the opportunity to ___ my qualifications.',
      options: opts('discuss', ['discussing', 'discussed', 'discuss about']),
      expl: '"would welcome the opportunity to + verbo no infinitivo".'
    }
  ];

  // ---------- MISSÕES (8 seções: kickoff · vocab · grammar · listen · read · speak · write · check) ----------
  const MISSIONS = {

    kickoff: {
      brief: 'Bem-vindo(a) à parada 1 do bairro: Who We Are. Nesta unidade: personalidade, tempos verbais no passado, DNA e ancestralidade, e uma carta de candidatura a emprego.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — palavras para começar:',
          cards: [
            { en: 'traits', pt: 'traços de personalidade', def: 'What traits describe you best?' },
            { en: 'ambitious', pt: 'ambicioso(a)', def: 'Many successful people are ambitious.' },
            { en: 'determine', pt: 'determinar', def: 'Scientists determine facts through research.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧑‍🤝‍🧑 Who We Are',
          textTitle: 'What makes you, you?',
          text: "Every person has a unique story: where they come from, what they've done, and who they've become.\n\nIn this unit, you'll talk about your own life story — memorable events, personality traits, and your professional qualifications.\n\nYou'll also discover how scientists use DNA to trace where we all came from."
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Kick Off',
        brief: 'Grave um áudio dizendo 3 traços de personalidade que descrevem você. Modelo: "I am hardworking. I am ambitious. I am motivated."',
        waText: 'Registro de áudio: 3 personality traits sobre mim (Unit 1).'
      }
    },

    vocab: {
      brief: 'Traços de personalidade e expressões de trabalho — o vocabulário que abre a Unit 1.',
      items: READ1,
      task: {
        type: 'writing',
        title: '💬 Sua vez',
        brief: 'Escreva uma frase sobre um traço de personalidade seu, usando uma das keywords desta unidade:',
        btn: '💬 Enviar frase',
        fields: [{ label: 'My trait', ph: 'ex.: I am a hardworking person.' }]
      }
    },

    grammar: {
      brief: 'Tempos verbais misturados no passado — simple past, past continuous e present perfect — para contar eventos marcantes da vida.',
      items: LANG1
    },

    listen: {
      brief: 'O vídeo sobre o Projeto Genográfico: como o DNA revela de onde viemos.',
      items: LISTEN1,
      script: SCRIPT
    },

    read: {
      brief: 'A carta de candidatura de Alyssa M. Davis — um modelo real de como se apresentar profissionalmente por escrito.',
      items: WRITE1.slice(0, 3)
    },

    speak: {
      brief: 'Fale sobre você: personalidade, experiência e um evento marcante da sua vida.',
      items: [
        {
          ui: 'speak', cat: 'pro', srsId: 'lf-u1:sp:speak1', unit: 1, waSec: 'Speaking',
          title: '🎤 Fale sobre um traço seu:',
          target: 'I am a hardworking and motivated person.',
          ptHint: 'Eu sou uma pessoa esforçada e motivada.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'lf-u1:sp:speak2', unit: 1, waSec: 'Speaking',
          title: '🎤 Conte um evento marcante:',
          target: 'I had never travelled alone before that trip.',
          ptHint: 'Eu nunca tinha viajado sozinho(a) antes daquela viagem.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave um áudio contando um evento marcante da sua vida, usando pelo menos dois tempos verbais diferentes no passado.',
        waText: 'Registro: um evento marcante da minha vida (Unit 1 — Speaking).'
      }
    },

    write: {
      brief: 'Escreva sua própria versão simplificada de uma carta de candidatura, com base no modelo de Alyssa.',
      items: WRITE1,
      task: {
        type: 'writing',
        title: '✍️ Minha carta de candidatura',
        brief: 'Complete os campos abaixo no estilo da carta-modelo:',
        btn: '✍️ Preencher e enviar',
        fields: [
          { label: 'Position you are applying for', ph: 'ex.: Marketing Coordinator' },
          { label: 'Three traits that describe you', ph: 'ex.: hardworking, motivated, qualified' },
          { label: 'One sentence about your experience', ph: 'ex.: I have three years of experience in…', rows: 2 }
        ]
      }
    },

    check: {
      brief: 'O que você já consegue fazer em inglês depois desta parada? Sua resposta vai para o Data Book.',
      checklist: true
    }
  };

  const CHECKLIST = [
    'I can use past tenses to talk about memorable life events.',
    'I can describe personality traits.',
    'I can understand a short video about a real topic.',
    'I can write a simple job application letter.',
    'I can talk about my own qualifications.'
  ];

  DF.UNIT_DATA[1] = {
    glossary: GLOSSARY,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1,
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: [],
    spellPool: [],
    numbers: { types: ['int'], max: 199 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
