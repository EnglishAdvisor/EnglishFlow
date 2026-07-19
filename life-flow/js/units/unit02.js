/* LIFE FLOW — units/unit02.js
   UNIT 2 — The World Awaits (parada 2) · World Class 1 · COMPLETO
   Estrutura oficial WC1 U2: Vocabulary (travel & plans), Grammar (future plans:
   going to / present continuous / will), Video/Listening (travel stories),
   Reading, Speaking, Writing. Tema: viagem e planos de futuro. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'destination', pt: 'destino', def: 'the place you are travelling to.' },
    { en: 'journey', pt: 'jornada / trajeto', def: 'the act of travelling from one place to another.' },
    { en: 'abroad', pt: 'no exterior', def: 'in or to a foreign country.' },
    { en: 'backpack', pt: 'mochila / mochilar', def: 'to travel cheaply with a backpack.' },
    { en: 'explore', pt: 'explorar', def: 'to travel to discover new places.' },
    { en: 'culture', pt: 'cultura', def: 'the way of life of a group of people.' },
    { en: 'landmark', pt: 'ponto turístico', def: 'a famous building or place.' },
    { en: 'budget', pt: 'orçamento', def: 'the money you plan to spend.' },
    { en: 'book', pt: 'reservar', def: 'to arrange a trip in advance.' },
    { en: 'adventure', pt: 'aventura', def: 'an exciting, unusual experience.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u2:g:f1', title: '🔧 Plano (going to):', main: "I'm ___ travel to Peru next year.", options: opts('going to', ['will to', 'go to', 'going']), expl: 'Plano/intenção → be going to + verbo.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u2:g:f2', title: '🔧 Arranjo marcado (present continuous):', main: "We ___ flying to Lisbon on Friday.", options: opts('are', ['will', 'go', 'are going to be']), expl: 'Arranjo com data → present continuous (are flying).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u2:g:f3', title: '🔧 Decisão na hora (will):', main: '"The bag is heavy." — "I ___ help you."', options: opts("'ll", ['am going to', 'going to', 'am']), expl: 'Decisão espontânea → will.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u2:g:f4', title: '🔧 Previsão (will):', main: 'I think the trip ___ be amazing.', options: opts('will', ['is going', 'goes', 'am']), expl: 'Previsão/opinião → will.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u2:g:f5', title: '🔧 Negativa (going to):', main: "We ___ visit the museum; there's no time.", options: opts("aren't going to", ["won't going to", "don't going", "isn't going to"]), expl: 'aren\'t going to + verbo.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u2:g:ord1', title: '🔧 Monte a frase:', answer: 'I am going to explore the old town tomorrow', expl: 'be going to + verbo + tempo.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u2:g:ord2', title: '🔧 Monte a frase:', answer: 'We are flying to Rome next week', expl: 'present continuous para arranjo futuro.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u2:v:abroad', title: '📦 "Abroad" significa:', main: null, options: opts('no exterior', ['em casa', 'na cidade', 'no trabalho']), expl: 'abroad = no exterior.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u2:v:land', title: '📦 Um "landmark" é:', main: null, options: opts('um ponto turístico famoso', ['uma mochila', 'um orçamento', 'um voo']), expl: 'landmark = ponto turístico.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u2:r:budget', title: '📖 "On a tight budget" significa viajar com:', main: null, options: opts('pouco dinheiro', ['muito luxo', 'muita bagagem', 'muitos amigos']), expl: 'tight budget = orçamento apertado.' }
  ];

  const SCRIPT = 'Video: One backpack, ten countries\n\nNarrator: Maya set out to explore the world with just one backpack.\nShe is going to visit ten countries in six months.\nNext week, she is flying to Thailand to start her journey.\n"I think it will change my life," she says.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u2:l:v1', title: '🎧 Quantos países Maya vai visitar?', tts: dlg(['She is going to visit ten countries in six months.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'She is going to visit ten countries in six months.', options: opts('Ten', ['Six', 'Two', 'Twenty']), expl: 'ten countries in six months.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u2:l:v2', title: '🎧 Para onde ela viaja primeiro?', tts: dlg(['Next week, she is flying to Thailand to start her journey.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Next week, she is flying to Thailand.', options: opts('Thailand', ['Peru', 'Italy', 'Japan']), expl: 'flying to Thailand.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 2: O mundo espera. Viagens e planos de futuro (going to, present continuous, will).', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'destination', pt: 'destino', def: "What's your dream destination?" },
        { en: 'explore', pt: 'explorar', def: 'I want to explore South America.' },
        { en: 'abroad', pt: 'no exterior', def: 'She works abroad.' },
        { en: 'adventure', pt: 'aventura', def: 'Travel is an adventure.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u2:v:journey', sp: { g: 'venpt', en: 'journey', u: 2 }, title: '📦 "Journey" é:', main: null, options: opts('jornada/trajeto', ['destino', 'bagagem', 'cultura']), expl: 'journey = trajeto/jornada.' } ],
      task: { type: 'audio', title: '🎙️ Seus planos', brief: 'Grave: "Next year I\'m going to… I think it will be…"', waText: 'Registro: planos de viagem (Unit 2).' } },
    vocab: { brief: 'Vocabulário de viagem e descoberta.', items: READ1 },
    grammar: { brief: 'Formas de futuro: be going to (plano), present continuous (arranjo), will (decisão/previsão).', items: LANG1 },
    listen: { brief: 'O vídeo de Maya: uma mochila, dez países.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre viajar com pouco dinheiro.', items: READ1 },
    speak: { brief: 'Fale dos seus planos de viagem.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u2:sp:s1', unit: 2, waSec: 'Speaking', title: '🎤 Fale um plano:', target: "Next year I'm going to travel abroad.", ptHint: 'Ano que vem eu vou viajar para o exterior.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 planos de futuro usando going to / will.', waText: 'Registro: planos (Unit 2 — Speaking).' } },
    write: { brief: 'Escreva um pequeno itinerário de viagem.', items: READ1, task: { type: 'writing', title: '✍️ Meu itinerário', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'Destination', ph: 'ex.: Portugal' },
      { label: 'What are you going to do there?', ph: 'ex.: I\'m going to explore Lisbon...', rows: 2 } ] } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about travel and destinations.',
    'I can use going to for plans.',
    'I can use present continuous for arrangements.',
    'I can use will for decisions and predictions.',
    'I can describe a future trip.'
  ];

  DF.UNIT_DATA[2] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
