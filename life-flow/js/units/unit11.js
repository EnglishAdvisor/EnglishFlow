/* LIFE FLOW — units/unit11.js
   UNIT 11 — Rain or Shine (parada 11) · World Class 1 · COMPLETO
   WC1 U11: Vocabulary (weather & climate), Grammar (future forms review: will /
   going to / present continuous / might), Video, Reading, Speaking, Writing. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'forecast', pt: 'previsão do tempo', def: 'a report of future weather.' },
    { en: 'temperature', pt: 'temperatura', def: 'how hot or cold it is.' },
    { en: 'storm', pt: 'tempestade', def: 'strong wind and rain.' },
    { en: 'humid', pt: 'úmido', def: 'with a lot of moisture in the air.' },
    { en: 'freezing', pt: 'congelante', def: 'extremely cold.' },
    { en: 'heatwave', pt: 'onda de calor', def: 'a period of very hot weather.' },
    { en: 'flood', pt: 'enchente', def: 'too much water covering the land.' },
    { en: 'drought', pt: 'seca', def: 'a long period with no rain.' },
    { en: 'mild', pt: 'ameno', def: 'not too hot and not too cold.' },
    { en: 'clear sky', pt: 'céu limpo', def: 'a sky with no clouds.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u11:g:f1', title: '🔧 Previsão (will):', main: 'The forecast says it ___ rain tomorrow.', options: opts('will', ['is going', 'goes', 'rains']), expl: 'Previsão baseada em opinião/dado → will.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u11:g:f2', title: '🔧 Evidência clara (going to):', main: 'Look at those clouds! It\'s ___ rain.', options: opts('going to', ['will', 'goes to', 'go to']), expl: 'Evidência visível → be going to.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u11:g:f3', title: '🔧 Arranjo (present continuous):', main: 'We ___ having a barbecue on Saturday.', options: opts('are', ['will', 'go', 'are going to be']), expl: 'Arranjo com data → present continuous.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u11:g:f4', title: '🔧 Possibilidade (might):', main: 'It ___ snow later, but I\'m not sure.', options: opts('might', ['will definitely', 'is going to', 'must']), expl: 'Incerteza → might.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u11:g:f5', title: '🔧 Escolha a previsão correta:', main: 'The temperature ___ drop tonight.', options: opts('will', ['is dropping now', 'drops always', 'dropped']), expl: 'previsão → will drop.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u11:g:ord1', title: '🔧 Monte a frase:', answer: 'It is going to be a hot day', expl: 'be going to + adjetivo.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u11:g:ord2', title: '🔧 Monte a frase:', answer: 'I think it will be cold tomorrow', expl: 'I think + will.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u11:v:fore', title: '📦 "Forecast" é:', main: null, options: opts('previsão do tempo', ['tempestade', 'temperatura', 'enchente']), expl: 'forecast = previsão.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u11:v:drought', title: '📦 "Drought" é:', main: null, options: opts('seca', ['enchente', 'neve', 'vento']), expl: 'drought = seca.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u11:r:mild', title: '📖 "Mild weather" é:', main: null, options: opts('tempo ameno', ['tempo extremo', 'tempo congelante', 'tempo seco']), expl: 'mild = ameno.' }
  ];

  const SCRIPT = 'Video: Rain or shine\n\nWeather reporter: Tomorrow will be cloudy in the morning.\nIn the afternoon, it\'s going to rain heavily.\nTemperatures might drop to five degrees at night.\nSo take an umbrella — rain or shine!';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u11:l:v1', title: '🎧 Como será a manhã?', tts: dlg(['Tomorrow will be cloudy in the morning.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Tomorrow will be cloudy in the morning.', options: opts('Cloudy', ['Sunny', 'Snowy', 'Windy']), expl: 'cloudy in the morning.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u11:l:v2', title: '🎧 A quanto a temperatura pode cair?', tts: dlg(['Temperatures might drop to five degrees at night.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Temperatures might drop to five degrees.', options: opts('5 degrees', ['15 degrees', '50 degrees', '25 degrees']), expl: 'five degrees.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 11: Faça chuva ou sol. Clima e revisão das formas de futuro.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'forecast', pt: 'previsão', def: "What's the forecast?" },
        { en: 'storm', pt: 'tempestade', def: 'A storm is coming.' },
        { en: 'heatwave', pt: 'onda de calor', def: 'There\'s a heatwave this week.' },
        { en: 'mild', pt: 'ameno', def: 'The weather is mild today.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u11:v:humid', sp: { g: 'venpt', en: 'humid', u: 11 }, title: '📦 "Humid" é:', main: null, options: opts('úmido', ['seco', 'frio', 'ventoso']), expl: 'humid = úmido.' } ],
      task: { type: 'audio', title: '🎙️ Sua previsão', brief: 'Grave: "Tomorrow will be… It\'s going to…"', waText: 'Registro: previsão do tempo (Unit 11).' } },
    vocab: { brief: 'Tempo e clima.', items: READ1 },
    grammar: { brief: 'Revisão das formas de futuro: will, going to, present continuous, might.', items: LANG1 },
    listen: { brief: 'A previsão do tempo: faça chuva ou sol.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre o clima.', items: READ1 },
    speak: { brief: 'Faça a previsão do tempo.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u11:sp:s1', unit: 11, waSec: 'Speaking', title: '🎤 Faça a previsão:', target: "Tomorrow it's going to be sunny and warm.", ptHint: 'Amanhã vai fazer sol e calor.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave a previsão do tempo para 3 dias.', waText: 'Registro: previsão (Unit 11).' } },
    write: { brief: 'Escreva a previsão do tempo da sua cidade.', items: READ1, task: { type: 'writing', title: '✍️ Minha previsão', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'Today', ph: 'ex.: Today it will be sunny.' },
      { label: 'Tomorrow', ph: "ex.: Tomorrow it's going to rain." } ] } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about weather and climate.',
    'I can choose the right future form.',
    'I can make predictions with will and going to.',
    'I can talk about arrangements and possibilities.',
    'I can give a weather forecast.'
  ];

  DF.UNIT_DATA[11] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
