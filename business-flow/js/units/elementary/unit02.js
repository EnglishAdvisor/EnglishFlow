/* BUSINESS FLOW — units/elementary/unit02.js
   UNIT 2 — Products & Services (2º andar) · Business Elementary · COMPLETO
   Business Result Elementary U2: Working with Words (products/services adjs),
   Language at Work (present simple), Practically Speaking (how to say numbers),
   Business Communication (making phone calls). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.elementary;

  const GLOSSARY = [
    { en: 'reliable', pt: 'confiável', def: 'you can trust it to work well.' },
    { en: 'affordable', pt: 'acessível (preço)', def: 'not too expensive.' },
    { en: 'high-quality', pt: 'de alta qualidade', def: 'very well made.' },
    { en: 'range', pt: 'linha / variedade', def: 'the set of products a company offers.' },
    { en: 'launch', pt: 'lançar', def: 'to put a new product on the market.' },
    { en: 'provide', pt: 'fornecer / oferecer', def: 'to give a product or service.' },
    { en: 'guarantee', pt: 'garantia', def: 'a promise about a product.' },
    { en: 'maintenance', pt: 'manutenção', def: 'keeping equipment working well.' },
    { en: 'support', pt: 'suporte', def: 'help for customers after they buy.' },
    { en: 'demand', pt: 'demanda / procura', def: 'how much customers want a product.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'be-u2:g:ps1', title: '🔧 Present simple:', main: 'We ___ software for hospitals.', options: opts('provide', ['provides', 'providing', 'are provide']), expl: 'we → provide.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u2:g:ps2', title: '🔧 he/she/it + s:', main: 'The company ___ new products every year.', options: opts('launches', ['launch', 'launchs', 'launching']), expl: 'launch → launches (-ch + es).' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u2:g:ps3', title: '🔧 Negativa:', main: 'We ___ sell to individuals, only to businesses.', options: opts("don't", ["doesn't", "aren't", 'not']), expl: 'we → don\'t.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u2:g:ps4', title: '🔧 Pergunta:', main: '___ your company provide support?', options: opts('Does', ['Do', 'Is', 'Are']), expl: 'your company (it) → Does…?' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u2:g:ps5', title: '🔧 Frequência:', main: 'They ___ deliver on time.', options: opts('always', ['is always', 'always are', 'do always be']), expl: 'always vem antes do verbo principal.' },
    { ui: 'order', cat: 'gra', srsId: 'be-u2:g:ord1', title: '🔧 Monte a frase:', answer: 'Our company provides high-quality maintenance', expl: 'it → provides (com -s).' },
    { ui: 'order', cat: 'gra', srsId: 'be-u2:g:ord2', title: '🔧 Monte a pergunta:', answer: 'Do you offer a guarantee', expl: 'Do you + verbo…?' }
  ];

  const NUM_BUILD = function (rnd) {
    const items = [
      { ui: 'choice', cat: 'num', srsId: 'be-u2:n:trap1', title: '🔢 O que você ouviu?', tts: 'sixty', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“sixty”', options: opts('60', ['16', '66', '6']), expl: 'SIXty (60) ≠ sixTEEN (16).' }
    ];
    for (let i = 0; i < 8; i++) items.push(DF.NUM.genItem({ types: ['int', 'phone', 'qty'], max: 999, rnd: rnd, diff: 2 }));
    return items;
  };

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'be-u2:f:ph1', title: '📞 Você liga e se identifica:', main: null, options: opts("Hello, this is Ana Costa from Marcom.", ['Hello I Ana of Marcom.', 'Ana Costa is calling here.', 'It me Ana Marcom.']), expl: '"This is … from …" identifica você e a empresa.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u2:f:ph2', title: '📞 A linha está ruim. Você diz:', main: null, options: opts("Sorry, could you speak up? The line is bad.", ['Speak strong please.', 'I no hear you good.', 'More loud you talk.']), expl: '"speak up" = falar mais alto.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u2:f:ph3', title: '📞 Para encerrar:', main: null, options: opts("Thanks for calling. Have a good day.", ['Ok bye finish.', 'Talk end now.', 'Goodbye the call.']), expl: 'Encerramento cordial de ligação.' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 2º andar. Produtos e serviços, present simple, dizer números e fazer ligações.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'reliable', pt: 'confiável', def: 'Our products are reliable.' },
        { en: 'range', pt: 'linha', def: 'We have a wide range of services.' },
        { en: 'support', pt: 'suporte', def: 'We provide 24-hour support.' },
        { en: 'launch', pt: 'lançar', def: 'We launch new products every year.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'be-u2:v:aff', sp: { g: 'venpt', en: 'affordable', u: 2 }, title: '📦 "Affordable" significa:', main: null, options: opts('acessível (preço)', ['caro', 'confiável', 'grande']), expl: 'affordable = com preço acessível.' } ],
      task: { type: 'audio', title: '🎙️ Descreva o que sua empresa oferece', brief: 'Grave: "We provide… Our products are…"', waText: 'Registro: produtos e serviços (Unit 2).' } },
    words: { brief: 'Adjetivos e verbos para descrever produtos e serviços.', items: [
      { ui: 'match', cat: 'voc', srsId: 'be-u2:v:m1', title: '📦 Ligue:', pairs: [['reliable', 'confiável'], ['maintenance', 'manutenção'], ['support', 'suporte'], ['demand', 'procura']], expl: 'reliable, maintenance, support, demand.' },
      { ui: 'choice', cat: 'voc', srsId: 'be-u2:v:prov', title: '📦 "Provide" é:', main: null, options: opts('fornecer/oferecer', ['comprar', 'atrasar', 'lançar']), expl: 'provide = fornecer.' } ] },
    grammar: { brief: 'Present simple para rotinas e fatos da empresa (com e sem -s).', items: LANG1 },
    speaking: { brief: 'Como dizer números com clareza — a armadilha teen/ty.', build: NUM_BUILD, task: { type: 'audio', title: '🎙️ Leia números', brief: 'Grave 5 números (misture dezenas e "teens").', waText: 'Registro: dizer números (Unit 2).' } },
    comm: { brief: 'Fazer uma ligação profissional: identificar-se, lidar com ruído, encerrar.', items: PHRASES },
    talk: { brief: 'Simule uma ligação curta.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'be-u2:sp:talk1', unit: 2, waSec: 'Talking Point', title: '🎤 Identifique-se ao ligar:', target: "Hello, this is Ana from Marcom Global.", ptHint: 'Olá, aqui é a Ana, da Marcom Global.' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave uma ligação curta (dois papéis).', waText: 'Registro: ligação (Unit 2).' } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can describe products and services.',
    'I can use present simple for facts and routines.',
    'I can say numbers clearly.',
    'I can make and handle a phone call.',
    'I can identify myself and my company on the phone.'
  ];

  UD[2] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int', 'phone', 'qty'], max: 999 } };
})(typeof window !== 'undefined' ? window : globalThis);
