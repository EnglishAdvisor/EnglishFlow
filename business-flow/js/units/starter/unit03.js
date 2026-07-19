/* BUSINESS FLOW — units/starter/unit03.js
   UNIT 3 — Workplace (3º andar) · Business Starter · CONTEÚDO COMPLETO
   Business Result Starter U3 "Workplace": Working with Words (office & things),
   Language at Work (we/they are · Wh- questions), Practically Speaking (email &
   website addresses), Business Communication (sending email requests). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.starter;

  const GLOSSARY = [
    { en: 'desk', pt: 'mesa de trabalho', def: 'the table where you work.' },
    { en: 'meeting room', pt: 'sala de reunião', def: 'a room for meetings.' },
    { en: 'printer', pt: 'impressora', def: 'a machine that prints documents.' },
    { en: 'photocopier', pt: 'copiadora', def: 'a machine that makes copies.' },
    { en: 'reception', pt: 'recepção', def: 'the front area where visitors arrive.' },
    { en: 'canteen', pt: 'refeitório', def: 'where staff eat at work.' },
    { en: 'colleague', pt: 'colega', def: 'a person you work with.' },
    { en: 'open space', pt: 'escritório aberto', def: 'a large office with no walls between desks.' },
    { en: 'floor', pt: 'andar', def: 'a level of a building.' },
    { en: 'car park', pt: 'estacionamento', def: 'where you leave your car.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'bs-u3:g:we1', title: '🔧 Complete:', main: 'We ___ on the third floor.', options: opts('are', ['is', 'am', 'be']), expl: 'we → ARE.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u3:g:they1', title: '🔧 Complete:', main: 'They ___ in the meeting room now.', options: opts('are', ['is', 'am', 'be']), expl: 'they → ARE.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u3:g:wh1', title: '🔧 Pergunta Wh-:', main: '___ is the printer?', options: opts('Where', ['Who', 'What', 'When']), expl: 'Where = onde (lugar).' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u3:g:wh2', title: '🔧 Pergunta Wh-:', main: '___ are your colleagues?', options: opts('Who', ['Where', 'What', 'Why']), expl: 'Who = quem (pessoas).' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u3:g:wh3', title: '🔧 Pergunta Wh-:', main: '___ floor is the canteen on?', options: opts('Which', ['Who', 'Why', 'When']), expl: 'Which floor = qual andar.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u3:g:ord1', title: '🔧 Monte a pergunta:', answer: 'Where are the meeting rooms', expl: 'Where + are + sujeito plural?' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u3:g:ord2', title: '🔧 Monte a frase:', answer: 'We are on the second floor', expl: 'We are + lugar.' }
  ];

  const SPELL = [
    { ui: 'choice', cat: 'spl', srsId: 'bs-u3:s:at', title: '📧 Num e-mail, o símbolo @ é lido como:', main: null, options: opts('at', ['and', 'a', 'add']), expl: 'ana@marcom.com → "ana AT marcom DOT com".' },
    { ui: 'choice', cat: 'spl', srsId: 'bs-u3:s:dot', title: '📧 O ponto (.) em endereços é lido como:', main: null, options: opts('dot', ['point', 'spot', 'comma']), expl: '.com = "dot com".' },
    { ui: 'type', cat: 'spl', srsId: 'bs-u3:s:web', title: '📧 Ouça e escreva o endereço (sem espaços):', tts: 'w w w dot marcom dot com', ttsLabel: '🔊 Ouvir', showIfNoTTS: 'www dot marcom dot com', answers: ['www.marcom.com'], placeholder: 'www.exemplo.com', expl: '"dot" = ponto.' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'bs-u3:f:req1', title: '✉️ Início educado de um e-mail de pedido:', main: null, options: opts('Could you send me the report, please?', ['Send the report now.', 'I need report you send.', 'Report, please, quick.']), expl: '"Could you… please?" torna o pedido educado.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u3:f:req2', title: '✉️ Para fechar o e-mail:', main: null, options: opts('Best regards,', ['Bye now,', 'The end,', 'Ok thanks bye,']), expl: '"Best regards," é o fecho profissional padrão.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u3:f:req3', title: '✉️ Para agradecer antecipadamente:', main: null, options: opts('Thank you in advance.', ['Thanks before.', 'Thank you after.', 'Advance my thanks.']), expl: '"Thank you in advance." = "desde já, obrigado".' }
  ];

  const MISSIONS = {
    cover: {
      brief: 'Bem-vindo(a) ao 3º andar. Nesta unidade: o escritório e suas coisas, we/they are, perguntas com Wh-, endereços de e-mail e pedidos por e-mail.',
      items: [
        { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
          { en: 'meeting room', pt: 'sala de reunião', def: 'The meeting room is on the 2nd floor.' },
          { en: 'reception', pt: 'recepção', def: 'Visitors wait at reception.' },
          { en: 'printer', pt: 'impressora', def: 'The printer is next to my desk.' },
          { en: 'canteen', pt: 'refeitório', def: 'We have lunch in the canteen.' } ] },
        { ui: 'choice', cat: 'voc', srsId: 'bs-u3:v:desk', sp: { g: 'venpt', en: 'desk', u: 3 }, title: '📦 "Desk" é:', main: null, options: opts('mesa de trabalho', ['sala', 'andar', 'cadeira']), expl: 'desk = mesa de trabalho.' } ],
      task: { type: 'audio', title: '🎙️ Descreva seu local', brief: 'Grave: "My desk is on the… floor. The meeting room is…"', waText: 'Registro: meu local de trabalho (Unit 3).' }
    },
    words: { brief: 'As coisas do escritório e onde ficam.', items: [
      { ui: 'match', cat: 'voc', srsId: 'bs-u3:v:m1', title: '📦 Ligue:', pairs: [['printer', 'impressora'], ['canteen', 'refeitório'], ['car park', 'estacionamento'], ['floor', 'andar']], expl: 'printer, canteen, car park, floor.' },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u3:v:photo', title: '📦 A máquina que faz cópias é:', main: null, options: opts('photocopier', ['printer', 'canteen', 'reception']), expl: 'photocopier = copiadora; printer = impressora.' } ] },
    grammar: { brief: 'We/they are e perguntas com Where, Who, What, Which para se localizar no escritório.', items: LANG1 },
    speaking: { brief: 'Ler e ditar endereços de e-mail e sites: @ = "at", . = "dot".', items: SPELL, task: { type: 'audio', title: '🎙️ Dite seu e-mail', brief: 'Grave seu e-mail de trabalho em inglês (use "at" e "dot").', waText: 'Registro: meu e-mail em inglês.' } },
    comm: { brief: 'Escrever um pedido educado por e-mail: abrir, pedir, agradecer e fechar.', items: PHRASES },
    talk: { brief: 'Monte um mini e-mail de pedido.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'bs-u3:sp:talk1', unit: 3, waSec: 'Talking Point', title: '🎤 Faça um pedido educado:', target: 'Could you send me the file, please?', ptHint: 'Você poderia me enviar o arquivo, por favor?' } ],
      task: { type: 'writing', title: '✍️ Escreva o e-mail', brief: 'Preencha um pedido curto:', btn: '✍️ Enviar', fields: [
        { label: 'O que você pede', ph: 'ex.: the sales report' },
        { label: 'Para quando', ph: 'ex.: by Friday' } ] } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book.', checklist: true }
  };

  const CHECKLIST = [
    'I can name things in the office.',
    'I can use we/they are and Wh- questions.',
    'I can say email and website addresses.',
    'I can write a short, polite email request.',
    'I can ask where things and people are.'
  ];

  UD[3] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: SPELL, numbers: { types: ['int'], max: 99 } };
})(typeof window !== 'undefined' ? window : globalThis);
