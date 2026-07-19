/* BUSINESS FLOW — units/elementary/unit04.js
   UNIT 4 — Technology (4º andar) · Business Elementary · COMPLETO
   Business Result Elementary U4: Working with Words (technology & verbs),
   Language at Work (adverbs of frequency · questions), Practically Speaking
   (sequencing words), Business Communication (asking for & offering help). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.elementary;

  const GLOSSARY = [
    { en: 'device', pt: 'dispositivo', def: 'a piece of electronic equipment.' },
    { en: 'software', pt: 'software', def: 'programs that run on a computer.' },
    { en: 'network', pt: 'rede', def: 'computers connected together.' },
    { en: 'install', pt: 'instalar', def: 'to put software onto a device.' },
    { en: 'download', pt: 'baixar', def: 'to copy files from the internet.' },
    { en: 'back up', pt: 'fazer backup', def: 'to save a copy of your data.' },
    { en: 'crash', pt: 'travar', def: 'when a device or program stops working.' },
    { en: 'log in', pt: 'entrar (login)', def: 'to access an account.' },
    { en: 'settings', pt: 'configurações', def: 'options you can change on a device.' },
    { en: 'upgrade', pt: 'atualizar/melhorar', def: 'to move to a better version.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'be-u4:g:af1', title: '🔧 Advérbio de frequência (posição):', main: 'I ___ back up my files.', options: opts('always', ['back up always', 'am always', 'do always']), expl: 'Advérbio vem antes do verbo principal: I always back up.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u4:g:af2', title: '🔧 Com o verbo be, a posição muda:', main: 'The system ___ slow in the morning.', options: opts('is often', ['often is', 'is often be', 'does often']), expl: 'Com be: is + advérbio (is often).' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u4:g:af3', title: '🔧 Frequência:', main: 'How ___ do you upgrade the software?', options: opts('often', ['many', 'much', 'long']), expl: 'How often = com que frequência.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u4:g:q1', title: '🔧 Pergunta:', main: '___ do you save your files?', options: opts('Where', ['Who', 'How much', 'Which']), expl: 'Where = onde.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u4:g:q2', title: '🔧 Pergunta:', main: '___ often does it crash?', options: opts('How', ['What', 'Who', 'Where']), expl: 'How often…?' },
    { ui: 'order', cat: 'gra', srsId: 'be-u4:g:ord1', title: '🔧 Monte a frase:', answer: 'We usually back up our data every day', expl: 'usually antes do verbo principal.' },
    { ui: 'order', cat: 'gra', srsId: 'be-u4:g:ord2', title: '🔧 Monte a pergunta:', answer: 'How often do you update the system', expl: 'How often do you…?' }
  ];

  const SEQ = [
    { ui: 'choice', cat: 'fun', srsId: 'be-u4:s:seq1', title: '🔢 Primeiro passo — palavra de sequência:', main: null, options: opts('First,', ['End,', 'Also,', 'But,']), expl: 'First = primeiro.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u4:s:seq2', title: '🔢 Passo do meio:', main: null, options: opts('Next,', ['Finally,', 'First,', 'Because,']), expl: 'Next / Then = a seguir.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u4:s:seq3', title: '🔢 Último passo:', main: null, options: opts('Finally,', ['First,', 'Next,', 'Also,']), expl: 'Finally = por fim.' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'be-u4:f:help1', title: '🆘 Para pedir ajuda:', main: null, options: opts('Could you help me with this, please?', ['Help me this now.', 'You do help me?', 'I need help you give.']), expl: '"Could you help me…, please?" pede ajuda com educação.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u4:f:help2', title: '🆘 Para oferecer ajuda:', main: null, options: opts('Do you need a hand?', ['You want I help?', 'Help you I can?', 'I make help you?']), expl: '"Do you need a hand?" = precisa de ajuda?' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u4:f:help3', title: '🆘 Para agradecer a ajuda:', main: null, options: opts("Thanks, that's really helpful.", ['Ok thanks help.', 'Help good thanks.', 'You helped, end.']), expl: 'Agradecer fecha bem a interação.' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 4º andar. Tecnologia, advérbios de frequência, palavras de sequência e pedir/oferecer ajuda.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'install', pt: 'instalar', def: 'I need to install the update.' },
        { en: 'back up', pt: 'fazer backup', def: 'Back up your files every day.' },
        { en: 'crash', pt: 'travar', def: 'The system crashed this morning.' },
        { en: 'settings', pt: 'configurações', def: 'Change it in the settings.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'be-u4:v:network', sp: { g: 'venpt', en: 'network', u: 4 }, title: '📦 "Network" é:', main: null, options: opts('rede', ['tela', 'senha', 'arquivo']), expl: 'network = rede.' } ],
      task: { type: 'audio', title: '🎙️ Sua rotina de tecnologia', brief: 'Grave: "I usually… I always back up…"', waText: 'Registro: rotina de tecnologia (Unit 4).' } },
    words: { brief: 'Verbos e substantivos de tecnologia.', items: [
      { ui: 'match', cat: 'voc', srsId: 'be-u4:v:m1', title: '📦 Ligue:', pairs: [['install', 'instalar'], ['download', 'baixar'], ['log in', 'entrar'], ['upgrade', 'atualizar']], expl: 'install, download, log in, upgrade.' },
      { ui: 'choice', cat: 'voc', srsId: 'be-u4:v:backup', title: '📦 Salvar uma cópia dos seus dados é fazer:', main: null, options: opts('back up', ['crash', 'log in', 'download']), expl: 'back up = fazer backup.' } ] },
    grammar: { brief: 'Advérbios de frequência (always, usually, often, sometimes, never) e perguntas.', items: LANG1 },
    speaking: { brief: 'Palavras de sequência para explicar um processo: First, Next, Then, Finally.', items: SEQ, task: { type: 'audio', title: '🎙️ Explique um processo', brief: 'Grave como fazer login, usando First… Next… Finally…', waText: 'Registro: sequência (Unit 4).' } },
    comm: { brief: 'Pedir e oferecer ajuda com naturalidade.', items: PHRASES },
    talk: { brief: 'Simule pedir e oferecer ajuda.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'be-u4:sp:talk1', unit: 4, waSec: 'Talking Point', title: '🎤 Ofereça ajuda:', target: 'Do you need a hand with that?', ptHint: 'Você precisa de uma ajuda com isso?' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave um diálogo de pedir/oferecer ajuda (dois papéis).', waText: 'Registro: ajuda (Unit 4).' } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about technology at work.',
    'I can use adverbs of frequency correctly.',
    'I can ask and answer questions about routines.',
    'I can explain a process with sequencing words.',
    'I can ask for and offer help.'
  ];

  UD[4] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: [], readPool: [], phrasePool: PHRASES.concat(SEQ), spellPool: [], numbers: { types: ['int'], max: 99 } };
})(typeof window !== 'undefined' ? window : globalThis);
