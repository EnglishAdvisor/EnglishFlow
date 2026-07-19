/* BUSINESS FLOW — units/starter/unit08.js
   UNIT 8 — Travel (8º andar · topo) · Business Starter · CONTEÚDO COMPLETO
   Business Result Starter U8 "Travel": Working with Words (travel & hotels),
   Language at Work (was / were), Practically Speaking (months & dates),
   Business Communication (arranging a meeting). Última unidade → Final Test. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.starter;

  const GLOSSARY = [
    { en: 'flight', pt: 'voo', def: 'a journey by plane.' },
    { en: 'business trip', pt: 'viagem de negócios', def: 'travel for work.' },
    { en: 'check in', pt: 'fazer check-in', def: 'to register at an airport or hotel.' },
    { en: 'boarding pass', pt: 'cartão de embarque', def: 'the ticket to get on the plane.' },
    { en: 'luggage', pt: 'bagagem', def: 'the bags you travel with.' },
    { en: 'hotel', pt: 'hotel', def: 'where you stay when travelling.' },
    { en: 'booking', pt: 'reserva', def: 'a reservation for a flight or hotel.' },
    { en: 'delay', pt: 'atraso', def: 'when something is late.' },
    { en: 'gate', pt: 'portão de embarque', def: 'where you board the plane.' },
    { en: 'schedule', pt: 'agenda / horário', def: 'a plan of times and dates.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'bs-u8:g:was1', title: '🔧 Passado do verbo be:', main: 'I ___ in London last week.', options: opts('was', ['were', 'am', 'is']), expl: 'I/he/she/it → WAS.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u8:g:was2', title: '🔧 Complete:', main: 'They ___ at the airport at 6 a.m.', options: opts('were', ['was', 'are', 'is']), expl: 'we/you/they → WERE.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u8:g:was3', title: '🔧 Negativa:', main: 'The flight ___ on time.', options: opts("wasn't", ["weren't", "isn't", 'not was']), expl: 'The flight (it) → wasn\'t.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u8:g:was4', title: '🔧 Pergunta:', main: '___ you at the meeting yesterday?', options: opts('Were', ['Was', 'Did', 'Are']), expl: 'you → Were you…?' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u8:g:was5', title: '🔧 Resposta curta:', main: 'Was the hotel good? — Yes, it ___.', options: opts('was', ['were', 'is', 'did']), expl: 'Yes, it was.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u8:g:ord1', title: '🔧 Monte a frase:', answer: 'The flight was late because of the weather', expl: 'was + adjetivo + causa.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u8:g:ord2', title: '🔧 Monte a pergunta:', answer: 'Were they at the conference last year', expl: 'Were + they + lugar + tempo?' }
  ];

  const SPELL = [
    { ui: 'choice', cat: 'spl', srsId: 'bs-u8:d:date1', title: '📅 "15/03" (dia 15 de março) fala-se:', main: null, options: opts('the fifteenth of March', ['March the fifteen', 'fifteen March day', 'the fifteen of March']), expl: 'the fifteenth of March (ordinal + of + mês).' },
    { ui: 'choice', cat: 'spl', srsId: 'bs-u8:d:date2', title: '📅 O mês depois de June é:', main: null, options: opts('July', ['January', 'August', 'May']), expl: 'June → July.' },
    { ui: 'choice', cat: 'spl', srsId: 'bs-u8:d:date3', title: '📅 "1st" lê-se:', main: null, options: opts('first', ['oneth', 'onest', 'first of']), expl: '1st = first (ordinal).' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'bs-u8:f:mtg1', title: '📆 Para propor um horário:', main: null, options: opts('Are you free on Tuesday morning?', ['You free Tuesday?', 'Tuesday can meeting?', 'When free Tuesday you are?']), expl: '"Are you free on…?" propõe um horário.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u8:f:mtg2', title: '📆 Para confirmar:', main: null, options: opts('Great, let\'s meet at 10 on Tuesday.', ['Ok Tuesday ten maybe.', 'Ten Tuesday we see.', 'I go Tuesday perhaps.']), expl: 'Confirmar com dia + hora fecha o combinado.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u8:f:mtg3', title: '📆 Para remarcar:', main: null, options: opts('Could we reschedule to Thursday?', ['Change to Thursday you can?', 'Thursday better is?', 'Move meeting Thursday.']), expl: '"reschedule" = remarcar.' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 8º andar — o topo da torre! Viagens, was/were, meses e datas, marcar reuniões. Depois: Final Test.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'flight', pt: 'voo', def: 'My flight is at 8 a.m.' },
        { en: 'business trip', pt: 'viagem de negócios', def: 'I\'m on a business trip.' },
        { en: 'booking', pt: 'reserva', def: 'I have a hotel booking.' },
        { en: 'delay', pt: 'atraso', def: 'There was a two-hour delay.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u8:v:luggage', sp: { g: 'venpt', en: 'luggage', u: 8 }, title: '📦 "Luggage" é:', main: null, options: opts('bagagem', ['voo', 'reserva', 'portão']), expl: 'luggage = bagagem.' } ],
      task: { type: 'audio', title: '🎙️ Sua última viagem', brief: 'Grave: "Last month I was in… The flight was…"', waText: 'Registro: minha última viagem (Unit 8).' } },
    words: { brief: 'Aeroporto, hotel e viagem de negócios.', items: [
      { ui: 'match', cat: 'voc', srsId: 'bs-u8:v:m1', title: '📦 Ligue:', pairs: [['flight', 'voo'], ['boarding pass', 'cartão de embarque'], ['gate', 'portão'], ['booking', 'reserva']], expl: 'flight, boarding pass, gate, booking.' },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u8:v:checkin', title: '📦 No hotel/aeroporto você faz o:', main: null, options: opts('check in', ['delay', 'schedule', 'gate']), expl: 'check in = registrar-se.' } ] },
    grammar: { brief: 'Was / were: falar do que aconteceu em viagens passadas.', items: LANG1 },
    speaking: { brief: 'Meses e datas com ordinais (1st, 2nd, 3rd…).', items: SPELL, task: { type: 'audio', title: '🎙️ Diga datas', brief: 'Grave 3 datas em inglês (ex.: the 3rd of May).', waText: 'Registro: meses e datas (Unit 8).' } },
    comm: { brief: 'Marcar, confirmar e remarcar reuniões.', items: PHRASES },
    talk: { brief: 'Simule o combinado de uma reunião.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'bs-u8:sp:talk1', unit: 8, waSec: 'Talking Point', title: '🎤 Proponha um horário:', target: 'Are you free on Wednesday afternoon?', ptHint: 'Você está livre na quarta à tarde?' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave um diálogo marcando uma reunião (dois papéis).', waText: 'Registro: marcar reunião (Unit 8).' } },
    check: { brief: 'Você chegou ao topo da torre! O que já consegue fazer? Depois desta unidade: o Final Test da trilha.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about travel and hotels.',
    'I can use was / were.',
    'I can say months and dates.',
    'I can arrange, confirm and reschedule a meeting.',
    'I can talk about a past business trip.'
  ];

  UD[8] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1.concat(SPELL), listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int'], max: 31 } };
})(typeof window !== 'undefined' ? window : globalThis);
