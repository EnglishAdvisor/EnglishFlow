/* LIFE FLOW — units/unit08.js
   UNIT 8 — Think Twice (parada 8) · World Class 1 · COMPLETO
   WC1 U8: Vocabulary (decisions & thinking), Grammar (modals of possibility:
   might / may / could / can't for guessing), Video, Reading, Speaking, Writing.*/
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'decision', pt: 'decisão', def: 'a choice you make.' },
    { en: 'choice', pt: 'escolha', def: 'an option you can take.' },
    { en: 'doubt', pt: 'dúvida', def: 'a feeling of uncertainty.' },
    { en: 'guess', pt: 'adivinhar/palpite', def: 'to give an answer you are not sure of.' },
    { en: 'certain', pt: 'certo(a)/seguro(a)', def: 'completely sure.' },
    { en: 'likely', pt: 'provável', def: 'probably going to happen.' },
    { en: 'option', pt: 'opção', def: 'one thing you can choose.' },
    { en: 'consider', pt: 'considerar', def: 'to think about carefully.' },
    { en: 'regret', pt: 'arrepender-se', def: 'to feel sorry about a choice.' },
    { en: 'wonder', pt: 'perguntar-se', def: 'to think about and want to know.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u8:g:p1', title: '🔧 Possibilidade (might):', main: 'I\'m not sure. I ___ take the job.', options: opts('might', ['will', 'must', 'can']), expl: 'might + verbo base = talvez.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u8:g:p2', title: '🔧 Possibilidade (may):', main: 'She ___ be at home now.', options: opts('may', ['mays', 'is may', 'may to']), expl: 'may + verbo base.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u8:g:p3', title: '🔧 Palpite (could):', main: 'That ___ be the answer, but I\'m not sure.', options: opts('could', ['can', 'must', 'should']), expl: 'could = possibilidade.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u8:g:p4', title: "🔧 Certeza negativa (can't):", main: "He can't be at work; it's Sunday.", options: opts("can't (é impossível)", ["mustn't (é proibido)", "shouldn't (não deveria)", "won't (não vai)"]), expl: "can't = tenho certeza que NÃO." },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u8:g:p5', title: '🔧 Certeza positiva (must):', main: "The lights are on. Someone ___ be home.", options: opts('must', ['might not', "can't", 'may not']), expl: 'must = tenho certeza que SIM (dedução).' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u8:g:ord1', title: '🔧 Monte a frase:', answer: 'She might change her mind later', expl: 'might + verbo base.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u8:g:ord2', title: '🔧 Monte a frase:', answer: 'It could be a good decision', expl: 'could + be + adjetivo.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u8:v:doubt', title: '📦 "Doubt" é:', main: null, options: opts('dúvida', ['certeza', 'escolha', 'decisão']), expl: 'doubt = dúvida.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u8:v:likely', title: '📦 "Likely" significa:', main: null, options: opts('provável', ['impossível', 'proibido', 'lento']), expl: 'likely = provável.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u8:r:regret', title: '📖 "To regret a decision" é:', main: null, options: opts('arrepender-se de uma decisão', ['gostar da decisão', 'adiar a decisão', 'repetir a decisão']), expl: 'regret = arrepender-se.' }
  ];

  const SCRIPT = 'Video: Think twice\n\nNarrator: When we make big decisions, we often act too fast.\nThe answer might not be obvious.\nSometimes the best choice could be the one we didn\'t consider.\nSo before you decide, think twice.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u8:l:v1', title: '🎧 Como agimos com decisões grandes?', tts: dlg(['When we make big decisions, we often act too fast.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'We often act too fast.', options: opts('Too fast', ['Too slow', 'Never', 'Carefully']), expl: 'we act too fast.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u8:l:v2', title: '🎧 Qual pode ser a melhor escolha?', tts: dlg(["Sometimes the best choice could be the one we didn't consider."]), ttsLabel: '🔊 Ouvir', showIfNoTTS: "The one we didn't consider.", options: opts("The one we didn't consider", ['The first one', 'The fastest one', 'The cheapest one']), expl: 'a que não consideramos.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 8: Pense duas vezes. Decisões e modais de possibilidade (might, may, could).', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'decision', pt: 'decisão', def: "It's a hard decision." },
        { en: 'option', pt: 'opção', def: 'You have two options.' },
        { en: 'consider', pt: 'considerar', def: 'Consider all the facts.' },
        { en: 'certain', pt: 'certo', def: "I'm not certain." } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u8:v:guess', sp: { g: 'venpt', en: 'guess', u: 8 }, title: '📦 "Guess" é:', main: null, options: opts('adivinhar/palpite', ['decidir', 'certeza', 'lembrar']), expl: 'guess = palpite/adivinhar.' } ],
      task: { type: 'audio', title: '🎙️ Um palpite', brief: 'Grave um palpite: "It might be… It could be…"', waText: 'Registro: possibilidade (Unit 8).' } },
    vocab: { brief: 'Decisões, escolhas e incerteza.', items: READ1 },
    grammar: { brief: 'Modais de possibilidade e dedução: might, may, could, must, can\'t.', items: LANG1 },
    listen: { brief: 'O vídeo: pense duas vezes.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre tomar decisões.', items: READ1 },
    speak: { brief: 'Faça palpites sobre situações.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u8:sp:s1', unit: 8, waSec: 'Speaking', title: '🎤 Faça um palpite:', target: "He might be stuck in traffic.", ptHint: 'Ele pode estar preso no trânsito.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 palpites com might/may/could.', waText: 'Registro: palpites (Unit 8).' } },
    write: { brief: 'Escreva sobre uma decisão difícil e as opções.', items: READ1, task: { type: 'writing', title: '✍️ Minha decisão', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'The decision', ph: 'ex.: choosing a new job' },
      { label: 'Option A might... / Option B could...', ph: 'ex.: Option A might be safer, but option B could be...', rows: 2 } ] } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about decisions and choices.',
    'I can use might, may and could for possibility.',
    "I can use must and can't for deduction.",
    'I can make guesses about situations.',
    'I can weigh up options.'
  ];

  DF.UNIT_DATA[8] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
