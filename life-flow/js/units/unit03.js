/* LIFE FLOW — units/unit03.js
   UNIT 3 — The Great Energy Challenge (parada 3 · último antes do Review 1-3)
   World Class 1 U3: Vocabulary (energy & environment), Grammar (comparatives &
   superlatives), Video (National Geographic energy), Reading, Speaking, Writing.*/
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'renewable', pt: 'renovável', def: 'energy that never runs out, like sun or wind.' },
    { en: 'fossil fuel', pt: 'combustível fóssil', def: 'coal, oil or gas.' },
    { en: 'solar power', pt: 'energia solar', def: 'energy from the sun.' },
    { en: 'wind power', pt: 'energia eólica', def: 'energy from the wind.' },
    { en: 'pollution', pt: 'poluição', def: 'dirty air, water or land.' },
    { en: 'climate', pt: 'clima', def: 'the usual weather of a region.' },
    { en: 'waste', pt: 'desperdício / desperdiçar', def: 'to use something badly or throw it away.' },
    { en: 'save energy', pt: 'economizar energia', def: 'to use less energy.' },
    { en: 'greenhouse gas', pt: 'gás de efeito estufa', def: 'gas that warms the planet.' },
    { en: 'sustainable', pt: 'sustentável', def: 'able to continue without harming the planet.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u3:g:c1', title: '🔧 Comparativo (curto):', main: 'Solar power is ___ than coal.', options: opts('cleaner', ['more clean', 'cleanest', 'clean']), expl: 'Adjetivo curto → -er (cleaner).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u3:g:c2', title: '🔧 Comparativo (longo):', main: 'Wind power is ___ than oil.', options: opts('more sustainable', ['sustainabler', 'most sustainable', 'sustainable more']), expl: 'Adjetivo longo → more + adjetivo.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u3:g:c3', title: '🔧 Superlativo:', main: 'Solar is one of ___ sources of energy.', options: opts('the cleanest', ['the most clean', 'cleaner', 'clean']), expl: 'Superlativo curto → the + -est.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u3:g:c4', title: '🔧 Irregular:', main: 'Public transport is ___ for the planet than cars.', options: opts('better', ['gooder', 'more good', 'best']), expl: 'good → better (irregular).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u3:g:c5', title: '🔧 (not) as … as:', main: 'Coal is not ___ clean ___ solar power.', options: opts('as / as', ['more / than', 'so / that', 'as / than']), expl: 'not as + adjetivo + as.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u3:g:ord1', title: '🔧 Monte a frase:', answer: 'Wind power is cleaner than fossil fuels', expl: 'comparativo + than.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u3:g:ord2', title: '🔧 Monte a frase:', answer: 'Solar energy is the most sustainable option', expl: 'the most + adjetivo longo.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u3:v:ren', title: '📦 "Renewable" energy:', main: null, options: opts('nunca acaba (sol, vento)', ['acaba rápido', 'polui muito', 'é cara sempre']), expl: 'renewable = renovável.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u3:v:sust', title: '📦 "Sustainable" significa:', main: null, options: opts('sustentável', ['barato', 'rápido', 'antigo']), expl: 'sustainable = sustentável.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u3:r:save', title: '📖 "To save energy" você deve:', main: null, options: opts('usar menos energia', ['usar mais energia', 'desperdiçar', 'poluir mais']), expl: 'save energy = economizar energia.' }
  ];

  const SCRIPT = 'Video: The power of the sun\n\nNarrator: The world needs cleaner energy.\nSolar power is cheaper than ever before.\nExperts say it is one of the most sustainable solutions for our planet.\nSmall changes at home can also save a lot of energy.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u3:l:v1', title: '🎧 O que ficou mais barato?', tts: dlg(['Solar power is cheaper than ever before.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Solar power is cheaper than ever before.', options: opts('Solar power', ['Coal', 'Oil', 'Gas']), expl: 'solar power is cheaper.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u3:l:v2', title: '🎧 O que também economiza energia?', tts: dlg(['Small changes at home can also save a lot of energy.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Small changes at home can save energy.', options: opts('Small changes at home', ['Bigger cars', 'More flights', 'Nothing']), expl: 'mudanças pequenas em casa.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 3: O grande desafio da energia — o último antes do Review 1-3. Energia, meio ambiente e comparações.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'renewable', pt: 'renovável', def: 'Solar is renewable energy.' },
        { en: 'pollution', pt: 'poluição', def: 'Cars cause pollution.' },
        { en: 'save energy', pt: 'economizar energia', def: 'Turn off the lights to save energy.' },
        { en: 'sustainable', pt: 'sustentável', def: 'We need sustainable solutions.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u3:v:foss', sp: { g: 'venpt', en: 'fossil fuel', u: 3 }, title: '📦 "Fossil fuel" inclui:', main: null, options: opts('carvão, petróleo e gás', ['sol e vento', 'água da chuva', 'energia nuclear apenas']), expl: 'fossil fuel = combustível fóssil.' } ],
      task: { type: 'audio', title: '🎙️ Sua opinião', brief: 'Grave: "Solar power is better than… because…"', waText: 'Registro: energia (Unit 3).' } },
    vocab: { brief: 'Energia e meio ambiente.', items: READ1 },
    grammar: { brief: 'Comparativos e superlativos: -er/-est, more/most, better, (not) as…as.', items: LANG1 },
    listen: { brief: 'O vídeo National Geographic sobre energia solar.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre economizar energia.', items: READ1 },
    speak: { brief: 'Compare fontes de energia.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u3:sp:s1', unit: 3, waSec: 'Speaking', title: '🎤 Compare:', target: 'Solar power is cleaner than fossil fuels.', ptHint: 'A energia solar é mais limpa que os combustíveis fósseis.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 comparações sobre energia ou transporte.', waText: 'Registro: comparações (Unit 3).' } },
    write: { brief: 'Escreva 3 dicas para economizar energia.', items: READ1, task: { type: 'writing', title: '✍️ Minhas dicas', brief: 'Complete com 3 dicas:', btn: '✍️ Enviar', fields: [
      { label: 'Tip 1', ph: 'ex.: Turn off the lights.' },
      { label: 'Tip 2', ph: 'ex.: Use public transport.' },
      { label: 'Tip 3', ph: 'ex.: Recycle more.' } ] } },
    check: { brief: 'Depois desta unidade vem o Review 1-3! O que você já consegue fazer?', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about energy and the environment.',
    'I can use comparatives and superlatives.',
    'I can compare different options.',
    'I can understand a short documentary.',
    'I can give tips to save energy.'
  ];

  DF.UNIT_DATA[3] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
