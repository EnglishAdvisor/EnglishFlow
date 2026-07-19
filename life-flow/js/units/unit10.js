/* LIFE FLOW — units/unit10.js
   UNIT 10 — Decisions, Decisions (parada 10) · World Class 1 · COMPLETO
   WC1 U10: Vocabulary (shopping & money), Grammar (reported speech: say/tell,
   backshift), Video, Reading, Speaking, Writing. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'bargain', pt: 'pechincha', def: 'something bought cheaply.' },
    { en: 'refund', pt: 'reembolso', def: 'money returned to you.' },
    { en: 'receipt', pt: 'recibo/nota', def: 'proof that you paid.' },
    { en: 'afford', pt: 'ter condições de pagar', def: 'to have enough money for.' },
    { en: 'save up', pt: 'juntar dinheiro', def: 'to keep money for the future.' },
    { en: 'spend', pt: 'gastar', def: 'to use money to buy things.' },
    { en: 'value', pt: 'valor', def: 'how much something is worth.' },
    { en: 'exchange', pt: 'trocar', def: 'to give one thing and get another.' },
    { en: 'expensive', pt: 'caro(a)', def: 'costing a lot of money.' },
    { en: 'worth it', pt: 'que vale a pena', def: 'good value for the money.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u10:g:rs1', title: '🔧 Reported speech (say):', main: 'Direto: "I want a refund." → She said she ___ a refund.', options: opts('wanted', ['wants', 'want', 'is wanting']), expl: 'present → past (want → wanted).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u10:g:rs2', title: '🔧 say ou tell?', main: 'He ___ me the shop was closed.', options: opts('told', ['said', 'says', 'said to']), expl: 'tell + pessoa (told me). say não leva objeto direto.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u10:g:rs3', title: '🔧 Backshift (can → could):', main: 'Direto: "I can pay now." → She said she ___ pay.', options: opts('could', ['can', 'cans', 'will can']), expl: 'can → could no discurso indireto.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u10:g:rs4', title: '🔧 will → would:', main: 'Direto: "I will buy it." → He said he ___ buy it.', options: opts('would', ['will', 'wills', 'would to']), expl: 'will → would.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u10:g:rs5', title: '🔧 Reported (this → that):', main: 'Direto: "This is expensive." → She said ___ was expensive.', options: opts('that', ['this', 'these', 'it this']), expl: 'this → that no discurso indireto.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u10:g:ord1', title: '🔧 Monte a frase (reported):', answer: 'She said she wanted a refund', expl: 'said + (that) + sujeito + verbo no passado.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u10:g:ord2', title: '🔧 Monte a frase (reported):', answer: 'He told me the shop was closed', expl: 'told + me + oração no passado.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u10:v:barg', title: '📦 "A bargain" é:', main: null, options: opts('uma pechincha', ['um recibo', 'um reembolso', 'um imposto']), expl: 'bargain = pechincha.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u10:v:afford', title: '📦 "I can\'t afford it" significa:', main: null, options: opts('não tenho dinheiro para isso', ['não quero isso', 'já paguei isso', 'não gosto disso']), expl: 'afford = ter condições de pagar.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u10:r:worth', title: '📖 "It\'s worth it" significa:', main: null, options: opts('vale a pena', ['é muito caro', 'está quebrado', 'é grátis']), expl: 'worth it = vale a pena.' }
  ];

  const SCRIPT = 'Video: Smart shopping\n\nCustomer: I asked for a refund.\nThe assistant said they couldn\'t give me my money back.\nShe told me I could exchange the item instead.\nIn the end, I decided it was worth it.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u10:l:v1', title: '🎧 O que o cliente pediu?', tts: dlg(['I asked for a refund.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'I asked for a refund.', options: opts('A refund', ['A discount', 'A receipt', 'A bargain']), expl: 'asked for a refund.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u10:l:v2', title: '🎧 O que a atendente ofereceu?', tts: dlg(['She told me I could exchange the item instead.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'She told me I could exchange the item.', options: opts('An exchange', ['Money back', 'A free gift', 'Nothing']), expl: 'could exchange the item.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 10: Decisões, decisões. Compras, dinheiro e o discurso indireto (reported speech).', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'refund', pt: 'reembolso', def: 'I asked for a refund.' },
        { en: 'receipt', pt: 'recibo', def: 'Keep your receipt.' },
        { en: 'afford', pt: 'poder pagar', def: "I can't afford it." },
        { en: 'bargain', pt: 'pechincha', def: 'What a bargain!' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u10:v:save', sp: { g: 'venpt', en: 'save up', u: 10 }, title: '📦 "Save up" é:', main: null, options: opts('juntar dinheiro', ['gastar tudo', 'devolver', 'trocar']), expl: 'save up = juntar dinheiro.' } ],
      task: { type: 'audio', title: '🎙️ Relate uma conversa', brief: 'Grave: "She said… He told me…"', waText: 'Registro: reported speech (Unit 10).' } },
    vocab: { brief: 'Compras, dinheiro e valor.', items: READ1 },
    grammar: { brief: 'Reported speech: say/tell e o backshift (present→past, will→would, can→could).', items: LANG1 },
    listen: { brief: 'Compras inteligentes.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre decisões de compra.', items: READ1 },
    speak: { brief: 'Relate o que alguém disse.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u10:sp:s1', unit: 10, waSec: 'Speaking', title: '🎤 Relate:', target: 'She said the shop was closed.', ptHint: 'Ela disse que a loja estava fechada.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave 3 frases relatando o que alguém disse.', waText: 'Registro: reported speech (Unit 10).' } },
    write: { brief: 'Escreva o relato de uma conversa numa loja.', items: READ1, task: { type: 'writing', title: '✍️ O relato', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'What you said', ph: 'ex.: I said I wanted a refund.' },
      { label: 'What they told you', ph: 'ex.: They told me I could exchange it.', rows: 2 } ] } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about shopping and money.',
    'I can use reported speech (say/tell).',
    'I can apply the backshift of tenses.',
    'I can report what people said.',
    'I can handle a refund or exchange.'
  ];

  DF.UNIT_DATA[10] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int', 'qty'], max: 999 } };
})(typeof window !== 'undefined' ? window : globalThis);
