/* BUSINESS FLOW — units/elementary/unit06.js
   UNIT 6 — Networking (6º andar · topo) · Business Elementary · COMPLETO
   Business Result Elementary U6: Working with Words (socializing), Language at
   Work (past simple: irregular verbs · time expressions), Practically Speaking
   (describing a trip), Business Communication (making conversation).
   Última unidade → Final Test. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.elementary;

  const GLOSSARY = [
    { en: 'networking', pt: 'networking', def: 'building useful work contacts.' },
    { en: 'conference', pt: 'conferência / congresso', def: 'a big professional event.' },
    { en: 'small talk', pt: 'conversa informal', def: 'light, friendly conversation.' },
    { en: 'introduce', pt: 'apresentar', def: 'to present one person to another.' },
    { en: 'in common', pt: 'em comum', def: 'shared between people.' },
    { en: 'keep in touch', pt: 'manter contato', def: 'to stay in communication.' },
    { en: 'trade fair', pt: 'feira de negócios', def: 'an event where companies show products.' },
    { en: 'guest', pt: 'convidado(a)', def: 'a person invited to an event.' },
    { en: 'host', pt: 'anfitrião(ã)', def: 'the person who receives guests.' },
    { en: 'business partner', pt: 'sócio / parceiro de negócios', def: 'someone you do business with.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'be-u6:g:ir1', title: '🔧 Passado irregular de "go":', main: 'I ___ to a conference last month.', options: opts('went', ['goed', 'gone', 'did go']), expl: 'go → went.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u6:g:ir2', title: '🔧 Passado irregular de "meet":', main: 'We ___ several new partners.', options: opts('met', ['meeted', 'meet', 'was meet']), expl: 'meet → met.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u6:g:ir3', title: '🔧 Passado irregular de "have":', main: 'They ___ a great time at the fair.', options: opts('had', ['haved', 'has', 'did had']), expl: 'have → had.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u6:g:ir4', title: '🔧 Passado irregular de "make":', main: 'She ___ a lot of new contacts.', options: opts('made', ['maked', 'make', 'did made']), expl: 'make → made.' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u6:g:te1', title: '🔧 Expressão de tempo:', main: 'I met him ___ 2019.', options: opts('in', ['on', 'at', 'since']), expl: 'in + ano (in 2019).' },
    { ui: 'choice', cat: 'gra', srsId: 'be-u6:g:te2', title: '🔧 Expressão de tempo:', main: 'The event was ___ Monday.', options: opts('on', ['in', 'at', 'since']), expl: 'on + dia (on Monday).' },
    { ui: 'order', cat: 'gra', srsId: 'be-u6:g:ord1', title: '🔧 Monte a frase:', answer: 'We met our partners at the trade fair', expl: 'meet → met + lugar.' },
    { ui: 'order', cat: 'gra', srsId: 'be-u6:g:ord2', title: '🔧 Monte a frase:', answer: 'I went to Berlin last year', expl: 'go → went + tempo.' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'be-u6:f:st1', title: '💬 Para começar um small talk:', main: null, options: opts('Is this your first time at this event?', ['You here first?', 'First time you have?', 'Event first for you is?']), expl: 'Uma pergunta aberta e leve inicia bem a conversa.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u6:f:st2', title: '💬 Para manter contato:', main: null, options: opts("Let's keep in touch. Here's my card.", ['Give me contact you.', 'We talk after maybe.', 'My card take, contact.']), expl: '"keep in touch" + cartão é o padrão de networking.' },
    { ui: 'choice', cat: 'fun', srsId: 'be-u6:f:st3', title: '💬 Para encerrar com simpatia:', main: null, options: opts('It was great talking to you.', ['Talk was ok bye.', 'Good talk end now.', 'You talk nice, finish.']), expl: '"It was great talking to you." fecha bem.' }
  ];

  const MISSIONS = {
    cover: { brief: 'Bem-vindo(a) ao 6º andar — o topo! Networking, past simple (verbos irregulares), expressões de tempo e puxar conversa. Depois: Final Test.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'networking', pt: 'networking', def: 'Conferences are great for networking.' },
        { en: 'small talk', pt: 'conversa informal', def: 'Small talk breaks the ice.' },
        { en: 'keep in touch', pt: 'manter contato', def: "Let's keep in touch." },
        { en: 'trade fair', pt: 'feira de negócios', def: 'We met them at a trade fair.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'be-u6:v:host', sp: { g: 'venpt', en: 'host', u: 6 }, title: '📦 "Host" é:', main: null, options: opts('anfitrião', ['convidado', 'sócio', 'cliente']), expl: 'host = anfitrião; guest = convidado.' } ],
      task: { type: 'audio', title: '🎙️ Conte um evento', brief: 'Grave: "Last year I went to… I met… We had…"', waText: 'Registro: um evento (Unit 6).' } },
    words: { brief: 'Vocabulário de socializar e eventos.', items: [
      { ui: 'match', cat: 'voc', srsId: 'be-u6:v:m1', title: '📦 Ligue:', pairs: [['guest', 'convidado'], ['host', 'anfitrião'], ['conference', 'congresso'], ['introduce', 'apresentar']], expl: 'guest, host, conference, introduce.' },
      { ui: 'choice', cat: 'voc', srsId: 'be-u6:v:common', title: '📦 "We have a lot in common" significa:', main: null, options: opts('temos muito em comum', ['discordamos muito', 'somos concorrentes', 'não nos conhecemos']), expl: 'in common = em comum.' } ] },
    grammar: { brief: 'Past simple irregular (went, met, had, made) + expressões de tempo (in/on/at).', items: LANG1 },
    speaking: { brief: 'Descrever uma viagem ou evento: onde foi, o que aconteceu.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'be-u6:sp:sp1', unit: 6, waSec: 'Practically Speaking', title: '🎤 Descreva sua viagem:', target: 'I went to São Paulo and met some new clients.', ptHint: 'Fui a São Paulo e conheci alguns clientes novos.' } ],
      task: { type: 'audio', title: '🎙️ Descreva uma viagem', brief: 'Grave uma descrição curta de uma viagem de trabalho passada.', waText: 'Registro: descrever viagem (Unit 6).' } },
    comm: { brief: 'Fazer conversa (small talk): iniciar, manter contato, encerrar.', items: PHRASES },
    talk: { brief: 'Simule um networking em um evento.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'be-u6:sp:talk1', unit: 6, waSec: 'Talking Point', title: '🎤 Puxe conversa:', target: 'Is this your first time at this conference?', ptHint: 'É a sua primeira vez nesta conferência?' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave um small talk de networking (dois papéis).', waText: 'Registro: networking (Unit 6).' } },
    check: { brief: 'Você chegou ao topo da torre! Depois desta unidade: o Final Test da trilha.', checklist: true }
  };

  const CHECKLIST = [
    'I can make small talk and network.',
    'I can use past simple irregular verbs.',
    'I can use time expressions (in/on/at).',
    'I can describe a past trip or event.',
    'I can start, hold and end a conversation.'
  ];

  UD[6] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int'], max: 99 } };
})(typeof window !== 'undefined' ? window : globalThis);
