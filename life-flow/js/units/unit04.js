/* LIFE FLOW — units/unit04.js
   UNIT 4 — The World's a Stage (parada 4) · World Class 1 · COMPLETO
   WC1 U4: Vocabulary (arts & performance), Grammar (present perfect: ever/never,
   already/yet, for/since), Video (culture/theatre), Reading, Speaking, Writing.*/
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'performance', pt: 'apresentação/espetáculo', def: 'a show for an audience.' },
    { en: 'audience', pt: 'plateia', def: 'the people watching a show.' },
    { en: 'stage', pt: 'palco', def: 'where actors perform.' },
    { en: 'rehearse', pt: 'ensaiar', def: 'to practise for a performance.' },
    { en: 'talent', pt: 'talento', def: 'a natural ability to do something well.' },
    { en: 'director', pt: 'diretor(a)', def: 'the person who leads a play or film.' },
    { en: 'review', pt: 'crítica/resenha', def: 'an opinion about a show or film.' },
    { en: 'applause', pt: 'aplausos', def: 'clapping to show you liked it.' },
    { en: 'exhibition', pt: 'exposição', def: 'a public show of art.' },
    { en: 'masterpiece', pt: 'obra-prima', def: 'a work of outstanding quality.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u4:g:pp1', title: '🔧 Present perfect (experiência):', main: 'I ___ seen that play twice.', options: opts('have', ['has', 'am', 'did']), expl: 'I/you/we/they → have + particípio.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u4:g:pp2', title: '🔧 ever (pergunta):', main: 'Have you ___ been to the theatre?', options: opts('ever', ['never', 'yet', 'already']), expl: 'ever em perguntas de experiência.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u4:g:pp3', title: '🔧 already / yet:', main: "The show hasn't started ___.", options: opts('yet', ['already', 'ever', 'since']), expl: 'yet em negativas/perguntas (ainda).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u4:g:pp4', title: '🔧 for / since:', main: "She has acted ___ 2015.", options: opts('since', ['for', 'ago', 'from']), expl: 'since + ponto no tempo (2015).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u4:g:pp5', title: '🔧 for / since:', main: 'They have rehearsed ___ three hours.', options: opts('for', ['since', 'ago', 'from']), expl: 'for + período (three hours).' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u4:g:ord1', title: '🔧 Monte a frase:', answer: 'I have never seen a live performance', expl: 'have never + particípio.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u4:g:ord2', title: '🔧 Monte a pergunta:', answer: 'Have you ever been to an exhibition', expl: 'Have you ever + particípio…?' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u4:v:aud', title: '📦 "Audience" é:', main: null, options: opts('plateia', ['palco', 'ator', 'crítica']), expl: 'audience = plateia.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u4:v:reh', title: '📦 "Rehearse" é:', main: null, options: opts('ensaiar', ['aplaudir', 'assistir', 'dirigir']), expl: 'rehearse = ensaiar.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u4:r:master', title: '📖 Uma "masterpiece" é uma obra:', main: null, options: opts('de qualidade excepcional', ['ruim', 'inacabada', 'barata']), expl: 'masterpiece = obra-prima.' }
  ];

  const SCRIPT = 'Video: A night at the theatre\n\nNarrator: The actors have rehearsed for weeks.\nTonight, the audience has already taken their seats.\nThe lights go down. The performance begins.\nHave you ever felt the energy of a live show?';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u4:l:v1', title: '🎧 Por quanto tempo os atores ensaiaram?', tts: dlg(['The actors have rehearsed for weeks.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'The actors have rehearsed for weeks.', options: opts('For weeks', ['For an hour', 'Since Monday', 'Never']), expl: 'have rehearsed for weeks.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u4:l:v2', title: '🎧 O que a plateia já fez?', tts: dlg(['The audience has already taken their seats.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'The audience has already taken their seats.', options: opts('Taken their seats', ['Left the theatre', 'Started clapping', 'Gone home']), expl: 'has already taken their seats.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 4: O mundo é um palco. Artes, espetáculos e o present perfect.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'performance', pt: 'espetáculo', def: 'The performance was amazing.' },
        { en: 'stage', pt: 'palco', def: 'The actor walked onto the stage.' },
        { en: 'review', pt: 'crítica', def: 'The film got great reviews.' },
        { en: 'talent', pt: 'talento', def: 'She has real talent.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u4:v:appl', sp: { g: 'venpt', en: 'applause', u: 4 }, title: '📦 "Applause" é:', main: null, options: opts('aplausos', ['silêncio', 'vaia', 'música']), expl: 'applause = aplausos.' } ],
      task: { type: 'audio', title: '🎙️ Sua experiência', brief: 'Grave: "I have seen… I have never…"', waText: 'Registro: experiências culturais (Unit 4).' } },
    vocab: { brief: 'Artes, teatro e performance.', items: READ1 },
    grammar: { brief: 'Present perfect: ever/never, already/yet, for/since.', items: LANG1 },
    listen: { brief: 'Uma noite no teatro.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre uma obra-prima.', items: READ1 },
    speak: { brief: 'Fale de experiências culturais.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u4:sp:s1', unit: 4, waSec: 'Speaking', title: '🎤 Fale uma experiência:', target: "I have never been to the opera.", ptHint: 'Eu nunca fui à ópera.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 experiências com present perfect (ever/never).', waText: 'Registro: present perfect (Unit 4).' } },
    write: { brief: 'Escreva uma mini-crítica de um filme ou show.', items: READ1, task: { type: 'writing', title: '✍️ Minha crítica', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'Film or show', ph: 'ex.: The last concert I saw' },
      { label: 'Your opinion', ph: 'ex.: I have never seen such a great...', rows: 2 } ] } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about the arts and performances.',
    'I can use the present perfect (ever/never).',
    'I can use already/yet and for/since.',
    'I can talk about my life experiences.',
    'I can write a short review.'
  ];

  DF.UNIT_DATA[4] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
