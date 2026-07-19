/* LIFE FLOW — units/unit06.js
   UNIT 6 — In Style (parada 6 · último antes do Review 4-6) · WC1 · COMPLETO
   WC1 U6: Vocabulary (fashion, design & materials), Grammar (passive voice:
   present & past simple passive), Video, Reading, Speaking, Writing. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'fashion', pt: 'moda', def: 'popular styles of clothes.' },
    { en: 'design', pt: 'design / projetar', def: 'the way something is made or planned.' },
    { en: 'brand', pt: 'marca', def: 'a company name for products.' },
    { en: 'fabric', pt: 'tecido', def: 'cloth used to make clothes.' },
    { en: 'cotton', pt: 'algodão', def: 'a natural fabric from a plant.' },
    { en: 'leather', pt: 'couro', def: 'material made from animal skin.' },
    { en: 'produce', pt: 'produzir', def: 'to make something.' },
    { en: 'trend', pt: 'tendência', def: 'a general direction fashion is going.' },
    { en: 'handmade', pt: 'feito à mão', def: 'made by hand, not by machine.' },
    { en: 'affordable', pt: 'acessível', def: 'not too expensive.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u6:g:pa1', title: '🔧 Passiva (presente):', main: 'These shoes ___ in Italy.', options: opts('are made', ['make', 'are making', 'is made']), expl: 'Passiva: be + particípio (are made).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u6:g:pa2', title: '🔧 Passiva (presente, singular):', main: 'The fabric ___ from cotton.', options: opts('is made', ['makes', 'are made', 'is making']), expl: 'Singular → is made.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u6:g:pa3', title: '🔧 Passiva (passado):', main: 'The dress ___ by a famous designer.', options: opts('was designed', ['designed', 'is designed', 'were designed']), expl: 'Passado passivo: was/were + particípio.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u6:g:pa4', title: '🔧 Passiva com "by":', main: 'The collection was created ___ a young artist.', options: opts('by', ['from', 'with', 'of']), expl: 'by + agente (quem fez).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u6:g:pa5', title: '🔧 Passiva (plural, passado):', main: 'The clothes ___ by hand.', options: opts('were made', ['was made', 'are make', 'made']), expl: 'Plural passado → were made.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u6:g:ord1', title: '🔧 Monte a frase (passiva):', answer: 'These bags are made from leather', expl: 'be + particípio + from + material.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u6:g:ord2', title: '🔧 Monte a frase (passiva passado):', answer: 'The building was designed by a Brazilian architect', expl: 'was designed by + agente.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u6:v:fabric', title: '📦 "Fabric" é:', main: null, options: opts('tecido', ['marca', 'loja', 'preço']), expl: 'fabric = tecido.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u6:v:hand', title: '📦 "Handmade" significa:', main: null, options: opts('feito à mão', ['feito por máquina', 'importado', 'barato']), expl: 'handmade = feito à mão.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u6:r:trend', title: '📖 "A new trend" é:', main: null, options: opts('uma nova tendência', ['uma loja antiga', 'um material', 'um desconto']), expl: 'trend = tendência.' }
  ];

  const SCRIPT = 'Video: Made by hand\n\nNarrator: In this small workshop, every bag is made by hand.\nThe leather is chosen carefully.\nEach piece was designed by a local artist.\nNothing is produced by machines here.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u6:l:v1', title: '🎧 Como as bolsas são feitas?', tts: dlg(['In this small workshop, every bag is made by hand.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Every bag is made by hand.', options: opts('By hand', ['By machine', 'Abroad', 'Very fast']), expl: 'made by hand.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u6:l:v2', title: '🎧 Quem projetou cada peça?', tts: dlg(['Each piece was designed by a local artist.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Each piece was designed by a local artist.', options: opts('A local artist', ['A big factory', 'A machine', 'A famous brand']), expl: 'designed by a local artist.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 6: No estilo — o último antes do Review 4-6. Moda, design e a voz passiva.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'fashion', pt: 'moda', def: 'Fashion changes every season.' },
        { en: 'fabric', pt: 'tecido', def: 'This fabric is very soft.' },
        { en: 'handmade', pt: 'feito à mão', def: 'These shoes are handmade.' },
        { en: 'trend', pt: 'tendência', def: 'Green is the new trend.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u6:v:leather', sp: { g: 'venpt', en: 'leather', u: 6 }, title: '📦 "Leather" é:', main: null, options: opts('couro', ['algodão', 'lã', 'seda']), expl: 'leather = couro.' } ],
      task: { type: 'audio', title: '🎙️ Descreva um produto', brief: 'Grave: "This is made from… It was designed by…"', waText: 'Registro: passiva (Unit 6).' } },
    vocab: { brief: 'Moda, materiais e design.', items: READ1 },
    grammar: { brief: 'Voz passiva: presente (is/are made) e passado (was/were made) + by.', items: LANG1 },
    listen: { brief: 'A oficina onde tudo é feito à mão.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre uma tendência de moda.', items: READ1 },
    speak: { brief: 'Descreva como as coisas são feitas.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u6:sp:s1', unit: 6, waSec: 'Speaking', title: '🎤 Descreva (passiva):', target: 'These bags are made from leather in Brazil.', ptHint: 'Estas bolsas são feitas de couro no Brasil.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 frases na passiva sobre produtos.', waText: 'Registro: passiva (Unit 6).' } },
    write: { brief: 'Escreva sobre como um produto é feito.', items: READ1, task: { type: 'writing', title: '✍️ Como é feito', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'Product', ph: 'ex.: A coffee mug' },
      { label: 'How is it made? (passive)', ph: 'ex.: It is made from clay and it was designed by...', rows: 2 } ] } },
    check: { brief: 'Depois desta unidade vem o Review 4-6! O que você já consegue fazer?', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about fashion, design and materials.',
    'I can use the present simple passive.',
    'I can use the past simple passive.',
    'I can say who made something (by).',
    'I can describe how a product is made.'
  ];

  DF.UNIT_DATA[6] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
