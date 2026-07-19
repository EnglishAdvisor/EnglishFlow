/* BUSINESS FLOW — units/starter/unit02.js
   UNIT 2 — Company (2º andar) · Business Starter · CONTEÚDO COMPLETO
   Estrutura oficial Business Result Starter U2 "Company": Working with Words
   (companies & sectors), Language at Work (is / isn't), Practically Speaking
   (numbers 0-9), Business Communication (starting a phone call).
   Cenário autoral: empresa fictícia "Marcom Global". */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.starter;

  const GLOSSARY = [
    { en: 'company', pt: 'empresa', def: 'a business organization.' },
    { en: 'head office', pt: 'matriz / sede', def: 'the main office of a company.' },
    { en: 'branch', pt: 'filial', def: 'a smaller office in another place.' },
    { en: 'product', pt: 'produto', def: 'something a company makes to sell.' },
    { en: 'service', pt: 'serviço', def: 'work a company does for its customers.' },
    { en: 'customer', pt: 'cliente', def: 'a person who buys from the company.' },
    { en: 'industry', pt: 'setor / indústria', def: 'a type of business, like banking or oil.' },
    { en: 'supplier', pt: 'fornecedor', def: 'a company that sells things to another company.' },
    { en: 'competitor', pt: 'concorrente', def: 'another company in the same market.' },
    { en: 'employee', pt: 'funcionário(a)', def: 'a person who works for a company.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'bs-u2:g:is1', title: '🔧 Complete:', main: 'Marcom Global ___ a big company.', options: opts('is', ["isn't", 'are', 'am']), expl: 'Empresa (it) na afirmativa → IS.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u2:g:is2', title: '🔧 Negativa:', main: 'It ___ a small company. It has 500 employees.', options: opts("isn't", ['is', "aren't", 'not']), expl: "isn't = is not." },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u2:g:is3', title: '🔧 Complete:', main: 'The head office ___ in São Paulo.', options: opts('is', ["isn't", 'are', 'am']), expl: 'Singular (head office) → IS.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u2:g:is4', title: '🔧 Pergunta:', main: '___ it a Brazilian company?', options: opts('Is', ['Are', 'Am', 'Do']), expl: 'Pergunta com it → IS it…?' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u2:g:is5', title: '🔧 Resposta curta negativa:', main: 'Is it a bank? — No, it ___.', options: opts("isn't", ["aren't", 'not', "don't"]), expl: "No, it isn't." },
    { ui: 'order', cat: 'gra', srsId: 'bs-u2:g:ord1', title: '🔧 Monte a frase:', answer: 'Our head office is in Rio de Janeiro', expl: 'Sujeito + is + lugar.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u2:g:ord2', title: '🔧 Monte a negativa:', answer: 'It is not a service company', expl: 'It is not (isn\'t) + artigo + substantivo.' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'bs-u2:f:phone1', title: '📞 Você atende o telefone da empresa:', main: null, options: opts('Good morning, Marcom Global. How can I help you?', ['Hello, who is?', 'Yes, talk.', 'Marcom, what you want?']), expl: 'Atendimento profissional: nome da empresa + oferta de ajuda.', feedbackTts: 'Good morning, Marcom Global. How can I help you?' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u2:f:phone2', title: '📞 Para dizer quem você é ao telefone:', main: null, options: opts("This is Marina speaking.", ['Here Marina.', 'I am the Marina.', 'Marina is talking now.']), expl: '"This is + nome + speaking." é o padrão.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u2:f:phone3', title: '📞 Para pedir para falar com alguém:', main: null, options: opts('Could I speak to Mr Costa, please?', ['I want Mr Costa.', 'Give me Mr Costa.', 'Where is Mr Costa now?']), expl: '"Could I speak to…, please?" é educado e comum.' }
  ];

  const NUM_BUILD = function (rnd) {
    const items = [
      { ui: 'choice', cat: 'num', srsId: 'bs-u2:n:trap1', title: '🔢 Pegadinha — o que você ouviu?', tts: 'oh', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“oh”', options: opts('0', ['4', '1', '8']), expl: 'Ao ler números um a um, 0 costuma ser dito "oh".' }
    ];
    for (let i = 0; i < 8; i++) items.push(DF.NUM.genItem({ types: ['int', 'phone'], max: 9, rnd: rnd, diff: 1 }));
    return items;
  };

  const MISSIONS = {
    cover: {
      brief: 'Bem-vindo(a) ao 2º andar. Nesta unidade: falar sobre a empresa, usar is / isn\'t, números de 0 a 9 e começar uma ligação em inglês.',
      items: [
        { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
          { en: 'company', pt: 'empresa', def: 'What company do you work for?' },
          { en: 'head office', pt: 'matriz', def: 'Our head office is in São Paulo.' },
          { en: 'customer', pt: 'cliente', def: 'The customer is always important.' },
          { en: 'supplier', pt: 'fornecedor', def: 'A good supplier delivers on time.' } ] },
        { ui: 'read', cat: 'rea', info: true, title: '🏢 A Marcom Global', textTitle: 'One company, many places', text: 'Marcom Global is an international company. The head office is in São Paulo, and there are branches in Rio and Recife.\n\nIt isn\'t a small company — there are more than 500 employees. It makes products and offers services for other businesses.' },
        { ui: 'choice', cat: 'voc', srsId: 'bs-u2:v:branch', sp: { g: 'venpt', en: 'branch', u: 2 }, title: '📦 "Branch" significa:', main: null, options: opts('filial', ['matriz', 'cliente', 'produto']), expl: 'branch = filial · head office = matriz.' } ],
      task: { type: 'audio', title: '🎙️ Fale da sua empresa', brief: 'Grave: "I work for… It is a… company. The head office is in…"', waText: 'Registro: descrição da minha empresa (Unit 2).' }
    },
    words: {
      brief: 'Vocabulário de empresa: matriz, filial, cliente, fornecedor, concorrente.',
      items: [
        { ui: 'match', cat: 'voc', srsId: 'bs-u2:v:m1', title: '📦 Ligue as palavras:', pairs: [['customer', 'cliente'], ['supplier', 'fornecedor'], ['competitor', 'concorrente'], ['employee', 'funcionário']], expl: 'customer, supplier, competitor, employee.' },
        { ui: 'choice', cat: 'voc', srsId: 'bs-u2:v:svc', title: '📦 O contrário de "product" (produto) é:', main: null, options: opts('service', ['supplier', 'customer', 'branch']), expl: 'Empresas vendem products (produtos) ou services (serviços).' },
        { ui: 'choice', cat: 'voc', srsId: 'bs-u2:v:comp', title: '📦 "Competitor" é:', main: null, options: opts('concorrente', ['cliente', 'colega', 'chefe']), expl: 'competitor = concorrente.' } ]
    },
    grammar: { brief: 'O verbo is / isn\'t para descrever a empresa: afirmativa, negativa, pergunta e resposta curta.', items: LANG1 },
    speaking: {
      brief: 'Números de 0 a 9 — a base de telefones, ramais e códigos. Treino de ouvido infinito.',
      build: NUM_BUILD,
      task: { type: 'audio', title: '🎙️ Leia números', brief: 'Grave-se lendo o telefone da sua empresa, dígito por dígito, em inglês.', waText: 'Registro: telefone da empresa em inglês.' }
    },
    comm: { brief: 'Como começar uma ligação profissional: atender, se identificar e pedir para falar com alguém.', items: PHRASES },
    talk: {
      brief: 'Pratique uma abertura de ligação completa, dos dois lados.',
      items: [
        { ui: 'speak', cat: 'pro', srsId: 'bs-u2:sp:talk1', unit: 2, waSec: 'Talking Point', title: '🎤 Atenda o telefone da sua empresa:', target: 'Good morning, Marcom Global. How can I help you?', ptHint: 'Bom dia, Marcom Global. Como posso ajudar?' },
        { ui: 'speak', cat: 'pro', srsId: 'bs-u2:sp:talk2', unit: 2, waSec: 'Talking Point', title: '🎤 Peça para falar com alguém:', target: 'Could I speak to the sales manager, please?', ptHint: 'Eu poderia falar com o gerente de vendas, por favor?' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave uma abertura de ligação (você nos dois papéis).', waText: 'Registro: abertura de ligação (Unit 2).' }
    },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can describe my company (size, location, sector).',
    "I can use is / isn't correctly.",
    'I can say and understand numbers 0-9.',
    'I can start a phone call politely.',
    'I can ask to speak to someone.'
  ];

  UD[2] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int', 'phone'], max: 9 } };
})(typeof window !== 'undefined' ? window : globalThis);
