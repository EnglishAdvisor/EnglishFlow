/* LIFE FLOW — units/unit05.js
   UNIT 5 — No Need to Panic (parada 5) · World Class 1 · COMPLETO
   WC1 U5: Vocabulary (stress, health & wellbeing), Grammar (modals of advice:
   should / shouldn't / ought to / had better), Video/Listening, Reading,
   Speaking, Writing. (Base real: capsule-44-listening-wc1.html.) */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'stress', pt: 'estresse', def: 'mental or physical tension.' },
    { en: 'relax', pt: 'relaxar', def: 'to rest and become calm.' },
    { en: 'deal with', pt: 'lidar com', def: 'to handle a problem or situation.' },
    { en: 'deep breath', pt: 'respiração profunda', def: 'a slow, full breath to calm down.' },
    { en: 'overwhelmed', pt: 'sobrecarregado(a)', def: 'having too much to handle.' },
    { en: 'balance', pt: 'equilíbrio', def: 'a healthy mix of work and rest.' },
    { en: 'wellbeing', pt: 'bem-estar', def: 'the state of being healthy and happy.' },
    { en: 'calm down', pt: 'acalmar-se', def: 'to become less anxious.' },
    { en: 'support', pt: 'apoio', def: 'help from other people.' },
    { en: 'routine', pt: 'rotina', def: 'the regular way you do things.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u5:g:m1', title: '🔧 Conselho (should):', main: 'You ___ take a break.', options: opts('should', ['shoulds', 'are should', 'should to']), expl: 'should + verbo base (sem to).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u5:g:m2', title: '🔧 Conselho negativo:', main: "You ___ work so many hours.", options: opts("shouldn't", ["don't should", "shouldn't to", "not should"]), expl: "shouldn't + verbo base." },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u5:g:m3', title: '🔧 ought to (= should):', main: 'You ___ get more sleep.', options: opts('ought to', ['ought', 'ought that', 'oughts to']), expl: 'ought to + verbo.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u5:g:m4', title: '🔧 had better (aviso forte):', main: "You ___ see a doctor about that.", options: opts("'d better", ['better', 'had to better', 'have better']), expl: "had better ('d better) + verbo base." },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u5:g:m5', title: '🔧 Sugestão (Why don\'t you…?):', main: '___ you try meditation?', options: opts("Why don't", ['Why not', 'Why no', 'Why isn\'t']), expl: "Why don't you + verbo…? = por que não…?" },
    { ui: 'order', cat: 'gra', srsId: 'lf-u5:g:ord1', title: '🔧 Monte o conselho:', answer: 'You should take a deep breath and relax', expl: 'should + verbo base.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u5:g:ord2', title: '🔧 Monte o conselho negativo:', answer: 'You should not skip your lunch break', expl: "shouldn't + verbo base." }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u5:v:over', title: '📦 "Overwhelmed" significa:', main: null, options: opts('sobrecarregado(a)', ['relaxado(a)', 'feliz', 'entediado(a)']), expl: 'overwhelmed = sobrecarregado.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u5:v:deal', title: '📦 "Deal with a problem" é:', main: null, options: opts('lidar com um problema', ['ignorar um problema', 'criar um problema', 'esconder um problema']), expl: 'deal with = lidar com.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u5:r:bal', title: '📖 "Work-life balance" é o equilíbrio entre:', main: null, options: opts('trabalho e vida pessoal', ['dois trabalhos', 'salário e horas', 'chefe e colega']), expl: 'balance = equilíbrio.' }
  ];

  const SCRIPT = 'Video: No need to panic\n\nExpert: When you feel overwhelmed, take a deep breath.\nYou should focus on one thing at a time.\nYou shouldn\'t try to do everything at once.\nAnd remember: it\'s okay to ask for support.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u5:l:v1', title: '🎧 O que fazer quando você se sente sobrecarregado?', tts: dlg(['When you feel overwhelmed, take a deep breath.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'When you feel overwhelmed, take a deep breath.', options: opts('Take a deep breath', ['Work faster', 'Skip lunch', 'Panic']), expl: 'take a deep breath.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u5:l:v2', title: '🎧 O que você NÃO deve tentar fazer?', tts: dlg(["You shouldn't try to do everything at once."]), ttsLabel: '🔊 Ouvir', showIfNoTTS: "You shouldn't try to do everything at once.", options: opts('Everything at once', ['One thing at a time', 'Ask for help', 'Rest']), expl: "shouldn't do everything at once." }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 5: Sem motivo para pânico. Estresse, bem-estar e modais de conselho (should, ought to).', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'stress', pt: 'estresse', def: 'Too much stress is bad for you.' },
        { en: 'relax', pt: 'relaxar', def: 'You should relax more.' },
        { en: 'balance', pt: 'equilíbrio', def: 'Find a good work-life balance.' },
        { en: 'wellbeing', pt: 'bem-estar', def: 'Your wellbeing matters.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u5:v:calm', sp: { g: 'venpt', en: 'calm down', u: 5 }, title: '📦 "Calm down" é:', main: null, options: opts('acalmar-se', ['irritar-se', 'apressar-se', 'esquecer']), expl: 'calm down = acalmar-se.' } ],
      task: { type: 'audio', title: '🎙️ Um conselho', brief: 'Grave um conselho: "You should… You shouldn\'t…"', waText: 'Registro: conselhos (Unit 5).' } },
    vocab: { brief: 'Estresse, saúde e bem-estar.', items: READ1 },
    grammar: { brief: 'Modais de conselho: should, shouldn\'t, ought to, had better.', items: LANG1 },
    listen: { brief: 'O especialista: sem motivo para pânico.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre equilíbrio entre trabalho e vida.', items: READ1 },
    speak: { brief: 'Dê conselhos a alguém estressado.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u5:sp:s1', unit: 5, waSec: 'Speaking', title: '🎤 Dê um conselho:', target: "You should take a break and relax.", ptHint: 'Você deveria fazer uma pausa e relaxar.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 conselhos para um amigo estressado.', waText: 'Registro: conselhos (Unit 5).' } },
    write: { brief: 'Escreva 3 conselhos de bem-estar.', items: READ1, task: { type: 'writing', title: '✍️ Meus conselhos', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'Advice 1', ph: 'ex.: You should get enough sleep.' },
      { label: 'Advice 2', ph: "ex.: You shouldn't skip meals." },
      { label: 'Advice 3', ph: 'ex.: You ought to exercise.' } ] } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about stress and wellbeing.',
    'I can give advice with should / shouldn\'t.',
    'I can use ought to and had better.',
    'I can make suggestions.',
    'I can write wellbeing tips.'
  ];

  DF.UNIT_DATA[5] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
