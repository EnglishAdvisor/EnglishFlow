/* BUSINESS FLOW — units/starter/unit07.js
   UNIT 7 — Technology (7º andar) · Business Starter · CONTEÚDO COMPLETO
   Business Result Starter U7 "Technology": Working with Words (devices &
   actions), Language at Work (possessive adjectives), Practically Speaking
   (this/that/these/those), Business Communication (giving instructions). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.starter;

  const GLOSSARY = [
    { en: 'laptop', pt: 'notebook', def: 'a small computer you can carry.' },
    { en: 'screen', pt: 'tela', def: 'the part of a device you look at.' },
    { en: 'keyboard', pt: 'teclado', def: 'the keys you type on.' },
    { en: 'password', pt: 'senha', def: 'a secret word to log in.' },
    { en: 'file', pt: 'arquivo', def: 'a document on a computer.' },
    { en: 'folder', pt: 'pasta', def: 'where you keep files.' },
    { en: 'button', pt: 'botão', def: 'you press it to do something.' },
    { en: 'charger', pt: 'carregador', def: 'it gives power to a device.' },
    { en: 'headset', pt: 'fone com microfone', def: 'for calls and online meetings.' },
    { en: 'update', pt: 'atualização', def: 'a new, better version of software.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'bs-u7:g:pa1', title: '🔧 Possessivo:', main: 'This is ___ laptop (de mim).', options: opts('my', ['mine', 'me', 'I']), expl: 'my + substantivo.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u7:g:pa2', title: '🔧 Possessivo:', main: "That's ___ desk (de você).", options: opts('your', ['you', 'yours', 'yor']), expl: 'your + substantivo.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u7:g:pa3', title: '🔧 Possessivo:', main: 'She forgot ___ password.', options: opts('her', ['his', 'she', 'hers']), expl: 'she → her.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u7:g:pa4', title: '🔧 Possessivo:', main: 'The team has ___ own meeting room.', options: opts('its', ['their', "it's", 'his']), expl: 'the team (it) → its. Cuidado: its ≠ it\'s.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u7:g:pa5', title: '🔧 Possessivo:', main: 'We use ___ headsets for calls.', options: opts('our', ['us', 'ours', 'we']), expl: 'we → our.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u7:g:ord1', title: '🔧 Monte a frase:', answer: 'This is my charger and that is your laptop', expl: 'my + coisa · your + coisa.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u7:g:ord2', title: '🔧 Monte a frase:', answer: 'They keep their files in this folder', expl: 'their + coisa.' }
  ];

  const SPELL = [
    { ui: 'choice', cat: 'spl', srsId: 'bs-u7:d:dem1', title: '👉 Perto e singular: você diz…', main: 'Aponta para o objeto na sua mão.', options: opts('this', ['that', 'these', 'those']), expl: 'this = perto + singular.' },
    { ui: 'choice', cat: 'spl', srsId: 'bs-u7:d:dem2', title: '👉 Longe e plural: você diz…', main: 'Aponta para caixas do outro lado da sala.', options: opts('those', ['these', 'this', 'that']), expl: 'those = longe + plural.' },
    { ui: 'choice', cat: 'spl', srsId: 'bs-u7:d:dem3', title: '👉 Complete:', main: '___ headsets here are new. (perto + plural)', options: opts('These', ['This', 'That', 'Those']), expl: 'these = perto + plural.' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'bs-u7:f:ins1', title: '🛠️ Dar instrução (passo 1):', main: null, options: opts('First, turn on your laptop.', ['One, laptop turn.', 'Turn laptop the first.', 'You do laptop on.']), expl: '"First, …" ordena os passos.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u7:f:ins2', title: '🛠️ Instrução (passo seguinte):', main: null, options: opts('Then, enter your password.', ['After you password.', 'Second the password put.', 'Password now you do.']), expl: '"Then, …" liga os passos.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u7:f:ins3', title: '🛠️ Para confirmar que entenderam:', main: null, options: opts('Is that clear?', ['You understand me right?', 'Clear it is?', 'Do clear you?']), expl: '"Is that clear?" checa o entendimento.' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 7º andar. Tecnologia: aparelhos, possessivos, this/that/these/those e dar instruções.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'laptop', pt: 'notebook', def: 'My laptop is slow today.' },
        { en: 'password', pt: 'senha', def: 'Enter your password to log in.' },
        { en: 'file', pt: 'arquivo', def: 'Save the file in this folder.' },
        { en: 'update', pt: 'atualização', def: 'There\'s a new update.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u7:v:charger', sp: { g: 'venpt', en: 'charger', u: 7 }, title: '📦 "Charger" é:', main: null, options: opts('carregador', ['teclado', 'tela', 'senha']), expl: 'charger = carregador.' } ],
      task: { type: 'audio', title: '🎙️ Fale do seu equipamento', brief: 'Grave: "This is my laptop. That is my charger…"', waText: 'Registro: meu equipamento (Unit 7).' } },
    words: { brief: 'Aparelhos e suas partes.', items: [
      { ui: 'match', cat: 'voc', srsId: 'bs-u7:v:m1', title: '📦 Ligue:', pairs: [['screen', 'tela'], ['keyboard', 'teclado'], ['folder', 'pasta'], ['button', 'botão']], expl: 'screen, keyboard, folder, button.' },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u7:v:headset', title: '📦 Para reuniões online, você usa um:', main: null, options: opts('headset', ['charger', 'folder', 'password']), expl: 'headset = fone com microfone.' } ] },
    grammar: { brief: 'Adjetivos possessivos: my, your, his, her, its, our, their.', items: LANG1 },
    speaking: { brief: 'this / that / these / those — perto/longe e singular/plural.', items: SPELL, task: { type: 'audio', title: '🎙️ Aponte e diga', brief: 'Grave 3 frases usando this/that/these/those com objetos ao seu redor.', waText: 'Registro: demonstrativos (Unit 7).' } },
    comm: { brief: 'Dar instruções passo a passo: First… Then… Is that clear?', items: PHRASES },
    talk: { brief: 'Explique um procedimento simples.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'bs-u7:sp:talk1', unit: 7, waSec: 'Talking Point', title: '🎤 Dê o primeiro passo:', target: 'First, turn on your computer.', ptHint: 'Primeiro, ligue seu computador.' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave instruções (3 passos) para acessar o e-mail.', waText: 'Registro: dar instruções (Unit 7).' } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can name devices and their parts.',
    'I can use possessive adjectives.',
    'I can use this / that / these / those.',
    'I can give simple step-by-step instructions.',
    'I can check that people understand.'
  ];

  UD[7] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1.concat(SPELL), listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int'], max: 99 } };
})(typeof window !== 'undefined' ? window : globalThis);
