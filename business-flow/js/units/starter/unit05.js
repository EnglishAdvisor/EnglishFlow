/* BUSINESS FLOW — units/starter/unit05.js
   UNIT 5 — Products (5º andar) · Business Starter · CONTEÚDO COMPLETO
   Business Result Starter U5 "Products": Working with Words (products &
   descriptions), Language at Work (present simple he/she/it), Practically
   Speaking (big numbers), Business Communication (ordering). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.starter;

  const GLOSSARY = [
    { en: 'price', pt: 'preço', def: 'how much a product costs.' },
    { en: 'discount', pt: 'desconto', def: 'money off the normal price.' },
    { en: 'quality', pt: 'qualidade', def: 'how good a product is.' },
    { en: 'delivery', pt: 'entrega', def: 'bringing the product to the customer.' },
    { en: 'order', pt: 'pedido', def: 'a request to buy products.' },
    { en: 'stock', pt: 'estoque', def: 'products the company has ready to sell.' },
    { en: 'brand', pt: 'marca', def: 'the name of a product or company.' },
    { en: 'sample', pt: 'amostra', def: 'a small example of a product.' },
    { en: 'catalogue', pt: 'catálogo', def: 'a book of products for sale.' },
    { en: 'warranty', pt: 'garantia', def: 'a promise to repair a product if it breaks.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'bs-u5:g:s1', title: '🔧 Present simple (he/she/it):', main: 'The company ___ products to Asia.', options: opts('sells', ['sell', 'selling', 'sells to']), expl: 'it (company) → sell + S = sells.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u5:g:s2', title: '🔧 Complete:', main: 'She ___ in the Sales team.', options: opts('works', ['work', 'working', 'is work']), expl: 'she → works.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u5:g:s3', title: '🔧 -es depois de o/s/x/ch:', main: 'He ___ the catalogue every year.', options: opts('watches', ['watchs', 'watch', 'watching']), expl: 'watch → watches (verbos em -ch levam -es).' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u5:g:s4', title: '🔧 Negativa:', main: 'It ___ come with a warranty.', options: opts("doesn't", ["don't", "isn't", 'not']), expl: 'he/she/it → doesn\'t.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u5:g:s5', title: '🔧 Pergunta:', main: '___ she work in Marketing?', options: opts('Does', ['Do', 'Is', 'Are']), expl: 'she → Does she…?' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u5:g:ord1', title: '🔧 Monte a frase:', answer: 'The product comes with a warranty', expl: 'It comes with… (he/she/it + verbo -s).' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u5:g:ord2', title: '🔧 Monte a pergunta:', answer: 'Does the price include delivery', expl: 'Does + sujeito + verbo base…?' }
  ];

  const NUM_BUILD = function (rnd) {
    const items = [
      { ui: 'choice', cat: 'num', srsId: 'bs-u5:n:trap1', title: '🔢 Grandes números — o que você ouviu?', tts: 'one thousand five hundred', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“one thousand five hundred”', options: opts('1500', ['1050', '15000', '150']), expl: 'one thousand five hundred = 1500.' }
    ];
    for (let i = 0; i < 8; i++) items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 9999, rnd: rnd, diff: 2 }));
    return items;
  };

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'bs-u5:f:ord1', title: '🛒 Para fazer um pedido:', main: null, options: opts("I'd like to order 200 units, please.", ['I want order 200.', 'Give 200 for me.', 'Order is 200 you send.']), expl: '"I\'d like to order…" é educado e claro.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u5:f:ord2', title: '🛒 Para perguntar o preço:', main: null, options: opts('How much is it?', ['How many price?', 'What cost it?', 'How is the money?']), expl: '"How much is it?" = quanto custa?' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u5:f:ord3', title: '🛒 Para perguntar sobre a entrega:', main: null, options: opts("When can you deliver?", ['When comes it?', 'Delivery when is?', 'You bring what day?']), expl: '"When can you deliver?" = quando você entrega?' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 5º andar. Produtos, present simple (he/she/it), grandes números e fazer pedidos.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'price', pt: 'preço', def: 'What is the price?' },
        { en: 'discount', pt: 'desconto', def: 'Is there a discount for 500 units?' },
        { en: 'delivery', pt: 'entrega', def: 'Delivery takes 5 days.' },
        { en: 'order', pt: 'pedido', def: 'I\'d like to place an order.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u5:v:stock', sp: { g: 'venpt', en: 'stock', u: 5 }, title: '📦 "In stock" significa:', main: null, options: opts('disponível em estoque', ['esgotado', 'com desconto', 'em promoção']), expl: 'in stock = em estoque; out of stock = esgotado.' } ],
      task: { type: 'audio', title: '🎙️ Descreva um produto', brief: 'Grave: "This product is… It costs… It comes with…"', waText: 'Registro: descrição de produto (Unit 5).' } },
    words: { brief: 'Preço, desconto, entrega, estoque, garantia.', items: [
      { ui: 'match', cat: 'voc', srsId: 'bs-u5:v:m1', title: '📦 Ligue:', pairs: [['price', 'preço'], ['discount', 'desconto'], ['delivery', 'entrega'], ['warranty', 'garantia']], expl: 'price, discount, delivery, warranty.' },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u5:v:sample', title: '📦 "Sample" é:', main: null, options: opts('amostra', ['catálogo', 'marca', 'estoque']), expl: 'sample = amostra.' } ] },
    grammar: { brief: 'Present simple para he/she/it — atenção ao -s e -es.', items: LANG1 },
    speaking: { brief: 'Grandes números: centenas, milhares e valores. Treino de ouvido.', build: NUM_BUILD, task: { type: 'audio', title: '🎙️ Leia valores', brief: 'Grave 3 preços grandes em inglês (ex.: 2,500).', waText: 'Registro: grandes números (Unit 5).' } },
    comm: { brief: 'Fazer um pedido: quantidade, preço e entrega.', items: PHRASES },
    talk: { brief: 'Simule um pedido, dos dois lados.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'bs-u5:sp:talk1', unit: 5, waSec: 'Talking Point', title: '🎤 Faça um pedido:', target: "I'd like to order fifty units, please.", ptHint: 'Eu gostaria de pedir cinquenta unidades, por favor.' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave um diálogo de pedido (dois papéis).', waText: 'Registro: fazer um pedido (Unit 5).' } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can describe products (price, quality, delivery).',
    'I can use present simple (he/she/it) correctly.',
    'I can say and understand big numbers.',
    'I can place an order on the phone.',
    'I can ask about price and delivery.'
  ];

  UD[5] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int', 'qty'], max: 9999 } };
})(typeof window !== 'undefined' ? window : globalThis);
