/* LIFE FLOW — units/unit09.js
   UNIT 9 — In the Wild (parada 9 · último antes do Review 7-9) · WC1 · COMPLETO
   WC1 U9: Vocabulary (nature & animals), Grammar (relative clauses: who/which/
   that/where), Video (National Geographic wildlife), Reading, Speaking, Writing.*/
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'wildlife', pt: 'vida selvagem', def: 'wild animals and plants.' },
    { en: 'species', pt: 'espécie', def: 'a type of animal or plant.' },
    { en: 'habitat', pt: 'habitat', def: 'the natural home of an animal.' },
    { en: 'endangered', pt: 'em extinção', def: 'at risk of disappearing.' },
    { en: 'predator', pt: 'predador', def: 'an animal that hunts others.' },
    { en: 'survive', pt: 'sobreviver', def: 'to stay alive.' },
    { en: 'rainforest', pt: 'floresta tropical', def: 'a hot, wet forest.' },
    { en: 'protect', pt: 'proteger', def: 'to keep safe from harm.' },
    { en: 'wild', pt: 'selvagem', def: 'living in nature, not tame.' },
    { en: 'conservation', pt: 'conservação', def: 'protecting nature.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u9:g:r1', title: '🔧 Pessoa → who:', main: 'A ranger is a person ___ protects wildlife.', options: opts('who', ['which', 'where', 'what']), expl: 'who = para pessoas.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u9:g:r2', title: '🔧 Coisa/animal → which:', main: 'The tiger, ___ is endangered, lives in Asia.', options: opts('which', ['who', 'where', 'whose']), expl: 'which = para coisas/animais.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u9:g:r3', title: '🔧 Lugar → where:', main: 'This is the forest ___ they filmed the documentary.', options: opts('where', ['which', 'who', 'when']), expl: 'where = para lugares.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u9:g:r4', title: '🔧 that (pessoas ou coisas):', main: 'It\'s an animal ___ hunts at night.', options: opts('that', ['who is', 'where', 'whose']), expl: 'that pode substituir who/which.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u9:g:r5', title: '🔧 Escolha o correto:', main: 'A habitat is a place ___ animals live.', options: opts('where', ['which', 'who', 'that is']), expl: 'lugar → where.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u9:g:ord1', title: '🔧 Monte a frase:', answer: 'A predator is an animal which hunts other animals', expl: 'animal + which + verbo.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u9:g:ord2', title: '🔧 Monte a frase:', answer: 'This is the reserve where the lions live', expl: 'lugar + where + oração.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u9:v:end', title: '📦 "Endangered" species são:', main: null, options: opts('espécies em extinção', ['espécies novas', 'animais domésticos', 'plantas comuns']), expl: 'endangered = em extinção.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u9:v:hab', title: '📦 "Habitat" é:', main: null, options: opts('o lar natural de um animal', ['um tipo de comida', 'um predador', 'um zoológico']), expl: 'habitat = lar natural.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u9:r:cons', title: '📖 "Conservation" trabalha para:', main: null, options: opts('proteger a natureza', ['caçar animais', 'construir cidades', 'vender madeira']), expl: 'conservation = conservação.' }
  ];

  const SCRIPT = 'Video: In the wild\n\nNarrator: The jaguar is an animal which lives in the rainforest.\nThis is a place where many endangered species survive.\nThe people who protect them work hard every day.\nConservation is the key to their future.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u9:l:v1', title: '🎧 Onde vive a onça (jaguar)?', tts: dlg(['The jaguar is an animal which lives in the rainforest.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'The jaguar lives in the rainforest.', options: opts('In the rainforest', ['In the desert', 'In the city', 'In the ocean']), expl: 'lives in the rainforest.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u9:l:v2', title: '🎧 O que é a chave para o futuro deles?', tts: dlg(['Conservation is the key to their future.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'Conservation is the key to their future.', options: opts('Conservation', ['Hunting', 'Tourism', 'Farming']), expl: 'conservation.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 9: Na natureza — o último antes do Review 7-9. Vida selvagem e orações relativas (who/which/where).', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'wildlife', pt: 'vida selvagem', def: 'The park protects wildlife.' },
        { en: 'endangered', pt: 'em extinção', def: 'The panda is endangered.' },
        { en: 'habitat', pt: 'habitat', def: 'The forest is their habitat.' },
        { en: 'protect', pt: 'proteger', def: 'We must protect nature.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u9:v:pred', sp: { g: 'venpt', en: 'predator', u: 9 }, title: '📦 "Predator" é:', main: null, options: opts('predador', ['presa', 'planta', 'filhote']), expl: 'predator = predador.' } ],
      task: { type: 'audio', title: '🎙️ Descreva um animal', brief: 'Grave: "A ... is an animal which..."', waText: 'Registro: relativas (Unit 9).' } },
    vocab: { brief: 'Natureza, animais e conservação.', items: READ1 },
    grammar: { brief: 'Orações relativas: who (pessoas), which/that (coisas), where (lugares).', items: LANG1 },
    listen: { brief: 'Documentário: na natureza selvagem.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre conservação.', items: READ1 },
    speak: { brief: 'Defina coisas com orações relativas.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u9:sp:s1', unit: 9, waSec: 'Speaking', title: '🎤 Defina:', target: 'A vet is a person who takes care of animals.', ptHint: 'Um veterinário é uma pessoa que cuida de animais.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 definições usando who/which/where.', waText: 'Registro: relativas (Unit 9).' } },
    write: { brief: 'Escreva sobre um animal usando orações relativas.', items: READ1, task: { type: 'writing', title: '✍️ Meu animal', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'Animal', ph: 'ex.: the sea turtle' },
      { label: 'Definition (which/where)', ph: 'ex.: It is an animal which lives in the ocean, where...', rows: 2 } ] } },
    check: { brief: 'Depois desta unidade vem o Review 7-9! O que você já consegue fazer?', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about nature and wildlife.',
    'I can use relative clauses (who/which/that).',
    'I can use where in relative clauses.',
    'I can define people, things and places.',
    'I can talk about conservation.'
  ];

  DF.UNIT_DATA[9] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
