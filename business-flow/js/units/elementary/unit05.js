/* BUSINESS FLOW — units/elementary/unit05.js
   UNIT 5 — Communication (5º andar) · Business Elementary · COMPLETO
   Business Result Elementary U5: Working with Words (communication verbs),
   Language at Work (past simple: be + regular verbs), Practically Speaking
   (how to apologize), Business Communication (solving problems). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.elementary;

  const GLOSSARY = [
    { en: 'message', pt: 'mensagem', def: 'information you send to someone.' },
    { en: 'reply', pt: 'resposta / responder', def: 'to answer a message.' },
    { en: 'attach', pt: 'anexar', def: 'to add a file to an email.' },
    { en: 'forward', pt: 'encaminhar', def: 'to send a message on to someone else.' },
    { en: 'contact', pt: 'contatar / contato', def: 'to communicate with someone.' },
    { en: 'arrange', pt: 'combinar / organizar', def: 'to plan something with someone.' },
    { en: 'confirm', pt: 'confirmar', def: 'to say something is definite.' },
    { en: 'apologize', pt: 'pedir desculpas', def: 'to say sorry.' },
    { en: 'complaint', pt: 'reclamação', def: 'when a customer says something is wrong.' },
    { en: 'deadline', pt: 'prazo final', def: 'the last day/time to finish something.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'be-u5:g:pw1', title: '🔧 Past simple (be):', main: 'The meeting ___ very useful.', options: opts('was', ['were', 'is', 'did']), expl: 'Singular → WAS.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u5:g:pw2', title: '🔧 Past simple (be):', main: 'They ___ late for the call.', options: opts('were', ['was', 'are', 'did']), expl: 'they → WERE.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u5:g:pw3', title: '🔧 Verbo regular no passado:', main: 'I ___ the email yesterday.', options: opts('replied', ['replyed', 'reply', 'am replied']), expl: 'reply → replied (y vira i + ed).' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u5:g:pw4', title: '🔧 Past simple:', main: 'We ___ the file to the message.', options: opts('attached', ['attach', 'attachs', 'attaching']), expl: 'attach → attached.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u5:g:pw5', title: '🔧 Negativa no passado:', main: "She ___ confirm the order.", options: opts("didn't", ["doesn't", "wasn't", "don't"]), expl: 'Passado negativo → didn\'t + verbo base.' },
    { ui: 'order', cat: 'gra', srsId: 'be-u5:g:ord1', title: '🔧 Monte a frase:', answer: 'I contacted the supplier last week', expl: 'contact → contacted + tempo.' },
    { ui: 'order', cat: 'gra', srsId: 'be-u5:g:ord2', title: '🔧 Monte a pergunta:', answer: 'Did you reply to the message', expl: 'Did you + verbo base…?' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'be-u5:f:ap1', title: '🙏 Para pedir desculpas por um erro:', main: null, options: opts("I'm very sorry about the delay.", ['Sorry the delay ok.', 'I make you sorry.', 'Delay sorry is.']), expl: '"I\'m very sorry about…" pede desculpas de forma profissional.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u5:f:ap2', title: '🛠️ Para propor uma solução:', main: null, options: opts("We'll send a replacement today.", ['Maybe we send after.', 'Replacement who knows.', 'You wait more time.']), expl: 'Oferecer solução clara acalma o cliente.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u5:f:ap3', title: '🛠️ Para reassegurar o cliente:', main: null, options: opts("It won't happen again.", ['Maybe happen again.', 'Again is possible.', 'We try not repeat.']), expl: '"It won\'t happen again." = não vai acontecer de novo.' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 5º andar. Comunicação, past simple (be + verbos regulares), pedir desculpas e resolver problemas.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'reply', pt: 'responder', def: 'Please reply by Friday.' },
        { en: 'attach', pt: 'anexar', def: 'I attached the report.' },
        { en: 'complaint', pt: 'reclamação', def: 'We received a complaint.' },
        { en: 'deadline', pt: 'prazo', def: 'The deadline is Monday.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'be-u5:v:forward', sp: { g: 'venpt', en: 'forward', u: 5 }, title: '📦 "Forward an email" é:', main: null, options: opts('encaminhar', ['responder', 'apagar', 'anexar']), expl: 'forward = encaminhar.' } ],
      task: { type: 'audio', title: '🎙️ Conte um problema resolvido', brief: 'Grave: "Last week there was a problem. I contacted… and we…"', waText: 'Registro: problema resolvido (Unit 5).' } },
    words: { brief: 'Verbos de comunicação: reply, attach, forward, confirm.', items: [
      { ui: 'match', cat: 'voc', srsId: 'be-u5:v:m1', title: '📦 Ligue:', pairs: [['reply', 'responder'], ['attach', 'anexar'], ['confirm', 'confirmar'], ['arrange', 'combinar']], expl: 'reply, attach, confirm, arrange.' },
      { ui: 'choice', cat: 'voc', srsId: 'be-u5:v:apol', title: '📦 "Apologize" é:', main: null, options: opts('pedir desculpas', ['reclamar', 'confirmar', 'combinar']), expl: 'apologize = pedir desculpas.' } ] },
    grammar: { brief: 'Past simple: was/were e verbos regulares (-ed) para relatar o que aconteceu.', items: LANG1 },
    speaking: { brief: 'Como pedir desculpas de forma profissional.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'be-u5:sp:sp1', unit: 5, waSec: 'Practically Speaking', title: '🎤 Peça desculpas:', target: "I'm very sorry about the mistake.", ptHint: 'Sinto muito pelo erro.' },
      PHRASES[0] ],
      task: { type: 'audio', title: '🎙️ Um pedido de desculpas', brief: 'Grave um pedido de desculpas por um atraso, com uma solução.', waText: 'Registro: pedido de desculpas (Unit 5).' } },
    comm: { brief: 'Resolver problemas: desculpar-se, propor solução, reassegurar.', items: PHRASES },
    talk: { brief: 'Simule resolver uma reclamação.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'be-u5:sp:talk1', unit: 5, waSec: 'Talking Point', title: '🎤 Ofereça uma solução:', target: "We'll send a replacement today.", ptHint: 'Nós enviaremos um substituto hoje.' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave um diálogo resolvendo uma reclamação (dois papéis).', waText: 'Registro: resolver problema (Unit 5).' } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about communication at work.',
    'I can use past simple (be and regular verbs).',
    'I can apologize professionally.',
    'I can handle a complaint and offer a solution.',
    'I can report what happened.'
  ];

  UD[5] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int'], max: 99 } };
})(typeof window !== 'undefined' ? window : globalThis);
