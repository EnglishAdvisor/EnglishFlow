/* BUSINESS FLOW — units/elementary/unit03.js
   UNIT 3 — Location (3º andar · último antes do Viewpoint) · Elementary · COMPLETO
   Business Result Elementary U3: Working with Words (places & directions),
   Language at Work (there is/are · some/any), Practically Speaking (email &
   postal addresses), Business Communication (ordering by phone). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.elementary;

  const GLOSSARY = [
    { en: 'headquarters', pt: 'sede', def: 'the main office of a company.' },
    { en: 'warehouse', pt: 'depósito / armazém', def: 'a big building for storing goods.' },
    { en: 'factory', pt: 'fábrica', def: 'where products are made.' },
    { en: 'floor', pt: 'andar', def: 'a level of a building.' },
    { en: 'opposite', pt: 'em frente a', def: 'on the other side, facing.' },
    { en: 'next to', pt: 'ao lado de', def: 'right beside something.' },
    { en: 'corner', pt: 'esquina / canto', def: 'where two walls or streets meet.' },
    { en: 'entrance', pt: 'entrada', def: 'where you go into a building.' },
    { en: 'region', pt: 'região', def: 'an area of a country.' },
    { en: 'site', pt: 'local / unidade', def: 'a place where a company operates.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'be-u3:g:th1', title: '🔧 There is / there are:', main: 'There ___ a warehouse near the factory.', options: opts('is', ['are', 'am', 'be']), expl: 'Singular → THERE IS.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u3:g:th2', title: '🔧 Complete:', main: 'There ___ three sites in this region.', options: opts('are', ['is', 'am', 'be']), expl: 'Plural → THERE ARE.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u3:g:some1', title: '🔧 some / any (afirmativa):', main: 'There are ___ meeting rooms on this floor.', options: opts('some', ['any', 'a', 'much']), expl: 'Afirmativa → SOME.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u3:g:any1', title: '🔧 some / any (negativa):', main: "There aren't ___ parking spaces left.", options: opts('any', ['some', 'a', 'no']), expl: 'Negativa → ANY.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u3:g:any2', title: '🔧 some / any (pergunta):', main: 'Are there ___ restaurants near the office?', options: opts('any', ['some', 'much', 'a']), expl: 'Pergunta → ANY.' },
    { ui: 'order', cat: 'gra', srsId: 'be-u3:g:ord1', title: '🔧 Monte a frase:', answer: 'There is a car park next to the entrance', expl: 'There is + a + lugar.' },
    { ui: 'order', cat: 'gra', srsId: 'be-u3:g:ord2', title: '🔧 Monte a pergunta:', answer: 'Are there any hotels near the office', expl: 'Are there any…?' }
  ];

  const SPELL = [
    { ui: 'choice', cat: 'spl', srsId: 'be-u3:s:zip', title: '📮 O CEP em inglês (EUA) chama-se:', main: null, options: opts('zip code', ['post box', 'address line', 'street code']), expl: 'zip code (US) / postcode (UK).' },
    { ui: 'type', cat: 'spl', srsId: 'be-u3:s:email', title: '📧 Ouça e escreva o e-mail (sem espaços):', tts: 'ana dot costa at marcom dot com', ttsLabel: '🔊 Ouvir', showIfNoTTS: 'ana dot costa at marcom dot com', answers: ['ana.costa@marcom.com'], placeholder: 'nome@empresa.com', expl: '"at" = @ · "dot" = .' },
    { ui: 'choice', cat: 'spl', srsId: 'be-u3:s:addr', title: '📮 "Rua 25, 3º andar" em inglês:', main: null, options: opts('25 ... Street, 3rd floor', ['Street 25 floor 3', '3 floor 25 street', 'Floor 3rd of 25']), expl: 'número + rua + andar (ordinal).' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'be-u3:f:ord1', title: '📞 Pedido por telefone:', main: null, options: opts("I'd like to place an order, please.", ['I make order now.', 'Order I want do.', 'Give me the order.']), expl: '"place an order" = fazer um pedido.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u3:f:ord2', title: '📞 Confirmar endereço de entrega:', main: null, options: opts("Could you confirm the delivery address?", ['Where I send it?', 'Address you say now.', 'Delivery is where question.']), expl: 'Confirmar o endereço evita erros.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u3:f:ord3', title: '📞 Perguntar o prazo:', main: null, options: opts("How long does delivery take?", ['When it comes?', 'Delivery long is?', 'How days for come?']), expl: '"How long does it take?" = quanto tempo leva.' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 3º andar — último antes do Viewpoint. Localização, there is/are, some/any, endereços e pedidos por telefone.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'headquarters', pt: 'sede', def: 'Our headquarters is in Milan.' },
        { en: 'warehouse', pt: 'depósito', def: 'The warehouse is near the port.' },
        { en: 'next to', pt: 'ao lado de', def: 'The café is next to reception.' },
        { en: 'opposite', pt: 'em frente a', def: 'The bank is opposite the office.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'be-u3:v:factory', sp: { g: 'venpt', en: 'factory', u: 3 }, title: '📦 "Factory" é:', main: null, options: opts('fábrica', ['escritório', 'depósito', 'loja']), expl: 'factory = fábrica.' } ],
      task: { type: 'audio', title: '🎙️ Onde fica sua empresa', brief: 'Grave: "Our office is in… It is next to…"', waText: 'Registro: localização (Unit 3).' } },
    words: { brief: 'Lugares e como descrever posição.', items: [
      { ui: 'match', cat: 'voc', srsId: 'be-u3:v:m1', title: '📦 Ligue:', pairs: [['warehouse', 'depósito'], ['entrance', 'entrada'], ['corner', 'esquina'], ['site', 'unidade']], expl: 'warehouse, entrance, corner, site.' },
      { ui: 'choice', cat: 'voc', srsId: 'be-u3:v:opp', title: '📦 "Opposite the bank" significa:', main: null, options: opts('em frente ao banco', ['ao lado do banco', 'atrás do banco', 'dentro do banco']), expl: 'opposite = em frente.' } ] },
    grammar: { brief: 'There is/are + some/any para descrever o que existe (e não existe).', items: LANG1 },
    speaking: { brief: 'Dizer endereços de e-mail e endereços postais.', items: SPELL, task: { type: 'audio', title: '🎙️ Dite seu endereço', brief: 'Grave seu e-mail e um endereço postal em inglês.', waText: 'Registro: endereços (Unit 3).' } },
    comm: { brief: 'Fazer um pedido por telefone: pedir, confirmar endereço e prazo.', items: PHRASES },
    talk: { brief: 'Simule um pedido por telefone.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'be-u3:sp:talk1', unit: 3, waSec: 'Talking Point', title: '🎤 Faça um pedido:', target: "I'd like to place an order, please.", ptHint: 'Eu gostaria de fazer um pedido, por favor.' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave um pedido por telefone (dois papéis).', waText: 'Registro: pedido por telefone (Unit 3).' } },
    check: { brief: 'O que você já consegue fazer? Depois desta unidade vem o Viewpoint 1!', checklist: true }
  };

  const CHECKLIST = [
    'I can describe where places are.',
    'I can use there is/are and some/any.',
    'I can say email and postal addresses.',
    'I can place an order by phone.',
    'I can confirm a delivery address.'
  ];

  UD[3] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: SPELL, numbers: { types: ['int'], max: 999 } };
})(typeof window !== 'undefined' ? window : globalThis);
