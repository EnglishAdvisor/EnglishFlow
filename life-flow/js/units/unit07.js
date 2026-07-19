/* LIFE FLOW — units/unit07.js
   UNIT 7 — On the Move (parada 7) · World Class 1 · COMPLETO
   WC1 U7: Vocabulary (transport & cities), Grammar (first conditional: if +
   present, will), Video, Reading, Speaking, Writing. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'commute', pt: 'deslocamento (casa-trabalho)', def: 'the regular journey to work.' },
    { en: 'public transport', pt: 'transporte público', def: 'buses, trains and metros.' },
    { en: 'traffic jam', pt: 'engarrafamento', def: 'a long line of slow cars.' },
    { en: 'rush hour', pt: 'horário de pico', def: 'the busiest travel time.' },
    { en: 'fare', pt: 'tarifa/passagem', def: 'the money you pay to travel.' },
    { en: 'route', pt: 'rota/trajeto', def: 'the way from one place to another.' },
    { en: 'delay', pt: 'atraso', def: 'when transport is late.' },
    { en: 'cycle', pt: 'pedalar', def: 'to ride a bicycle.' },
    { en: 'pedestrian', pt: 'pedestre', def: 'a person walking in the street.' },
    { en: 'crowded', pt: 'lotado(a)', def: 'full of people.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u7:g:c1', title: '🔧 First conditional:', main: 'If it rains, I ___ take the bus.', options: opts("'ll", ['would', 'take', 'am']), expl: 'If + presente, ... will + verbo.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u7:g:c2', title: '🔧 Na parte do "if" usa-se:', main: 'If we ___ now, we\'ll avoid the traffic.', options: opts('leave', ['will leave', 'left', 'leaving']), expl: 'if + present simple (leave).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u7:g:c3', title: '🔧 Resultado:', main: 'If you take the metro, you ___ arrive faster.', options: opts('will', ['would', 'are', 'do']), expl: 'resultado → will + verbo.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u7:g:c4', title: '🔧 Negativa (if):', main: "If we don't hurry, we ___ miss the train.", options: opts("'ll", ['would', 'miss', 'are']), expl: "resultado com will ('ll)." },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u7:g:c5', title: '🔧 unless (= if not):', main: '___ you leave early, you\'ll be late.', options: opts('Unless', ['If', 'When', 'Because']), expl: 'unless = a menos que (se não).' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u7:g:ord1', title: '🔧 Monte a frase:', answer: 'If you cycle to work you will save money', expl: 'If + presente, will + verbo.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u7:g:ord2', title: '🔧 Monte a frase:', answer: 'We will miss the bus if we do not leave now', expl: 'will + verbo + if + presente.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u7:v:comm', title: '📦 "Commute" é:', main: null, options: opts('deslocamento casa-trabalho', ['férias', 'passagem aérea', 'estacionamento']), expl: 'commute = trajeto diário.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u7:v:rush', title: '📦 "Rush hour" é:', main: null, options: opts('horário de pico', ['madrugada', 'feriado', 'hora do almoço']), expl: 'rush hour = horário de pico.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u7:r:crowd', title: '📖 "The metro is crowded" significa que está:', main: null, options: opts('lotado', ['vazio', 'atrasado', 'fechado']), expl: 'crowded = lotado.' }
  ];

  const SCRIPT = 'Video: Cities on the move\n\nNarrator: If a city has good public transport, fewer people drive.\nIf fewer people drive, there is less pollution.\nExperts say: if we cycle more, our cities will be healthier.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u7:l:v1', title: '🎧 O que acontece com bom transporte público?', tts: dlg(['If a city has good public transport, fewer people drive.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'If a city has good public transport, fewer people drive.', options: opts('Fewer people drive', ['More people drive', 'More pollution', 'More traffic']), expl: 'fewer people drive.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u7:l:v2', title: '🎧 O que torna as cidades mais saudáveis?', tts: dlg(['If we cycle more, our cities will be healthier.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'If we cycle more, our cities will be healthier.', options: opts('Cycling more', ['Driving more', 'Flying more', 'Walking less']), expl: 'if we cycle more.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 7: Em movimento. Transporte, cidades e o primeiro condicional (if + presente, will).', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'public transport', pt: 'transporte público', def: 'I use public transport every day.' },
        { en: 'traffic jam', pt: 'engarrafamento', def: 'We were stuck in a traffic jam.' },
        { en: 'route', pt: 'trajeto', def: 'This is the fastest route.' },
        { en: 'cycle', pt: 'pedalar', def: 'I cycle to work.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u7:v:fare', sp: { g: 'venpt', en: 'fare', u: 7 }, title: '📦 "Fare" é:', main: null, options: opts('tarifa/passagem', ['rota', 'atraso', 'pedestre']), expl: 'fare = tarifa.' } ],
      task: { type: 'audio', title: '🎙️ Seu trajeto', brief: 'Grave: "If I leave early, I\'ll… If it rains, I\'ll…"', waText: 'Registro: primeiro condicional (Unit 7).' } },
    vocab: { brief: 'Transporte e vida na cidade.', items: READ1 },
    grammar: { brief: 'First conditional: if + present simple, ... will. Também unless.', items: LANG1 },
    listen: { brief: 'Cidades em movimento.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre transporte na cidade.', items: READ1 },
    speak: { brief: 'Fale de planos condicionais.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u7:sp:s1', unit: 7, waSec: 'Speaking', title: '🎤 Fale um condicional:', target: "If I take the metro, I'll arrive on time.", ptHint: 'Se eu pegar o metrô, chegarei na hora.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 frases com first conditional sobre seu trajeto.', waText: 'Registro: condicional (Unit 7).' } },
    write: { brief: 'Escreva um plano condicional para amanhã.', items: READ1, task: { type: 'writing', title: '✍️ Meu plano', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'If it rains tomorrow...', ph: "ex.: I'll take a taxi." },
      { label: 'If the traffic is bad...', ph: "ex.: I'll leave earlier." } ] } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about transport and getting around.',
    'I can use the first conditional.',
    'I can use unless.',
    'I can make conditional plans.',
    'I can describe my daily commute.'
  ];

  DF.UNIT_DATA[7] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
