/* BUSINESS FLOW — units/starter/unit06.js
   UNIT 6 — Entertaining (6º andar) · Business Starter · CONTEÚDO COMPLETO
   Business Result Starter U6 "Entertaining": Working with Words (food, drink &
   socializing), Language at Work (can / can't), Practically Speaking (days &
   times), Business Communication (inviting, accepting, declining). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.starter;

  const GLOSSARY = [
    { en: 'invite', pt: 'convidar', def: 'to ask someone to come to an event.' },
    { en: 'restaurant', pt: 'restaurante', def: 'a place to eat out.' },
    { en: 'starter', pt: 'entrada (prato)', def: 'the first, small dish of a meal.' },
    { en: 'main course', pt: 'prato principal', def: 'the biggest dish of a meal.' },
    { en: 'dessert', pt: 'sobremesa', def: 'the sweet dish at the end.' },
    { en: 'bill', pt: 'conta', def: 'the paper that shows how much to pay.' },
    { en: 'book a table', pt: 'reservar uma mesa', def: 'to reserve a table at a restaurant.' },
    { en: 'menu', pt: 'cardápio', def: 'the list of food and drinks.' },
    { en: 'available', pt: 'disponível', def: 'free to meet or do something.' },
    { en: 'appointment', pt: 'compromisso / hora marcada', def: 'a fixed time to meet.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'bs-u6:g:can1', title: '🔧 Complete:', main: '___ you come to dinner on Friday?', options: opts('Can', ['Do', 'Are', 'Is']), expl: 'Convite/habilidade → Can you…?' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u6:g:can2', title: '🔧 Resposta positiva:', main: 'Yes, I ___.', options: opts('can', ['do', 'am', 'will can']), expl: 'Yes, I can.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u6:g:can3', title: '🔧 Negativa:', main: "I'm sorry, I ___ come on Thursday.", options: opts("can't", ["don't", "amn't", 'not can']), expl: "can't = cannot." },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u6:g:can4', title: '🔧 Habilidade:', main: 'She ___ speak three languages.', options: opts('can', ['cans', 'is can', 'does can']), expl: 'can é igual para todos: she can (sem -s).' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u6:g:can5', title: '🔧 Pergunta educada:', main: '___ I take your coat?', options: opts('Can', ['Do', 'Am', 'Is']), expl: 'Can I…? = oferta educada.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u6:g:ord1', title: '🔧 Monte o convite:', answer: 'Can you join us for lunch tomorrow', expl: 'Can you join us…?' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u6:g:ord2', title: '🔧 Monte a recusa educada:', answer: 'I am sorry I cannot make it on Monday', expl: 'I\'m sorry, I can\'t make it…' }
  ];

  const SPELL = [
    { ui: 'choice', cat: 'spl', srsId: 'bs-u6:t:time1', title: '🕐 "2:30" fala-se:', main: null, options: opts('half past two', ['two half', 'thirty two', 'half to two']), expl: 'half past two = 2:30.' },
    { ui: 'choice', cat: 'spl', srsId: 'bs-u6:t:time2', title: '🕐 "10:45" fala-se:', main: null, options: opts('a quarter to eleven', ['eleven quarter', 'quarter past ten', 'ten forty-five past']), expl: 'quarter to eleven = 10:45.' },
    { ui: 'choice', cat: 'spl', srsId: 'bs-u6:t:day1', title: '📅 O dia depois de Wednesday é:', main: null, options: opts('Thursday', ['Tuesday', 'Friday', 'Sunday']), expl: 'Wed → Thursday.' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'bs-u6:f:inv1', title: '🍽️ Para convidar:', main: null, options: opts('Would you like to have dinner with us?', ['You eat dinner us?', 'Dinner want you?', 'Come dinner now.']), expl: '"Would you like to…?" é o convite educado.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u6:f:inv2', title: '🍽️ Para aceitar:', main: null, options: opts("That's very kind. Thank you, I'd love to.", ['Yes ok fine.', 'Maybe I go.', 'If I can maybe.']), expl: '"I\'d love to." aceita com simpatia.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u6:f:inv3', title: '🍽️ Para recusar com educação:', main: null, options: opts("That's very kind, but I'm afraid I can't.", ['No I busy.', 'Not want, sorry.', 'Impossible for me now.']), expl: '"I\'m afraid I can\'t." recusa educadamente.' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 6º andar. Recepcionar clientes: comida, can/can\'t, dias e horas, convidar e responder a convites.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'invite', pt: 'convidar', def: 'Let me invite you to dinner.' },
        { en: 'book a table', pt: 'reservar mesa', def: 'I\'ll book a table for four.' },
        { en: 'main course', pt: 'prato principal', def: 'What would you like as a main course?' },
        { en: 'bill', pt: 'conta', def: 'Could we have the bill, please?' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u6:v:avail', sp: { g: 'venpt', en: 'available', u: 6 }, title: '📦 "Available" significa:', main: null, options: opts('disponível', ['ocupado', 'atrasado', 'ausente']), expl: 'available = disponível.' } ],
      task: { type: 'audio', title: '🎙️ Faça um convite', brief: 'Grave: "Would you like to have lunch with us on…?"', waText: 'Registro: convite (Unit 6).' } },
    words: { brief: 'Comida, restaurante e socializar com clientes.', items: [
      { ui: 'match', cat: 'voc', srsId: 'bs-u6:v:m1', title: '📦 Ligue:', pairs: [['starter', 'entrada'], ['main course', 'prato principal'], ['dessert', 'sobremesa'], ['bill', 'conta']], expl: 'starter, main course, dessert, bill.' },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u6:v:menu', title: '📦 "Menu" é:', main: null, options: opts('cardápio', ['conta', 'garçom', 'reserva']), expl: 'menu = cardápio.' } ] },
    grammar: { brief: 'Can / can\'t: convites, ofertas, habilidades e recusas.', items: LANG1 },
    speaking: { brief: 'Dias da semana e horas — para marcar encontros e refeições.', items: SPELL, task: { type: 'audio', title: '🎙️ Diga dias e horas', brief: 'Grave 3 compromissos: "on Monday at half past nine…"', waText: 'Registro: dias e horas (Unit 6).' } },
    comm: { brief: 'Convidar, aceitar e recusar com educação.', items: PHRASES },
    talk: { brief: 'Simule um convite e a resposta.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'bs-u6:sp:talk1', unit: 6, waSec: 'Talking Point', title: '🎤 Convide um cliente:', target: 'Would you like to join us for dinner?', ptHint: 'Você gostaria de jantar conosco?' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave um convite + resposta (dois papéis).', waText: 'Registro: convite e resposta (Unit 6).' } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about food and eating out.',
    "I can use can / can't.",
    'I can say days and times.',
    'I can invite, accept and decline politely.',
    'I can book a table.'
  ];

  UD[6] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1.concat(SPELL), listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int'], max: 60 } };
})(typeof window !== 'undefined' ? window : globalThis);
