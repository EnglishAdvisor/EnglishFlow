/* BUSINESS FLOW — units/starter/unit04.js
   UNIT 4 — Departments (4º andar) · Business Starter · CONTEÚDO COMPLETO
   Business Result Starter U4 "Departments": Working with Words (departments &
   activities), Language at Work (present simple I/you/we/they), Practically
   Speaking (there is / there are), Business Communication (taking & leaving a
   message). É a última unidade antes do Viewpoint 1. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.TRAIL_DATA = DF.TRAIL_DATA || { starter: {}, elementary: {} };
  const UD = DF.TRAIL_DATA.starter;

  const GLOSSARY = [
    { en: 'Sales', pt: 'Vendas', def: 'the department that sells the products.' },
    { en: 'Marketing', pt: 'Marketing', def: 'the department that promotes the products.' },
    { en: 'Finance', pt: 'Financeiro', def: 'the department that manages the money.' },
    { en: 'Human Resources', pt: 'Recursos Humanos', def: 'the department for the company\'s people (HR).' },
    { en: 'Production', pt: 'Produção', def: 'the department that makes the products.' },
    { en: 'Logistics', pt: 'Logística', def: 'the department that moves and delivers goods.' },
    { en: 'Purchasing', pt: 'Compras', def: 'the department that buys what the company needs.' },
    { en: 'Customer Service', pt: 'Atendimento ao Cliente', def: 'the department that helps customers.' },
    { en: 'IT', pt: 'TI', def: 'the department for computers and systems.' },
    { en: 'Legal', pt: 'Jurídico', def: 'the department for contracts and law.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'bs-u4:g:ps1', title: '🔧 Present simple:', main: 'I ___ in the Sales department.', options: opts('work', ['works', 'working', 'am work']), expl: 'I/you/we/they → work (sem -s).' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u4:g:ps2', title: '🔧 Complete:', main: 'We ___ products to Europe.', options: opts('sell', ['sells', 'selling', 'to sell']), expl: 'we → sell.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u4:g:ps3', title: '🔧 Negativa:', main: 'They ___ work on Saturdays.', options: opts("don't", ["doesn't", "aren't", 'not']), expl: 'they → don\'t work.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u4:g:ps4', title: '🔧 Pergunta:', main: '___ you work in Marketing?', options: opts('Do', ['Does', 'Are', 'Is']), expl: 'you → Do you…?' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u4:g:ps5', title: '🔧 Resposta curta:', main: 'Do you work in Finance? — Yes, I ___.', options: opts('do', ['am', 'does', 'work']), expl: 'Yes, I do. / No, I don\'t.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u4:g:ord1', title: '🔧 Monte a frase:', answer: 'We work in the Logistics department', expl: 'We work in + departamento.' },
    { ui: 'order', cat: 'gra', srsId: 'bs-u4:g:ord2', title: '🔧 Monte a pergunta:', answer: 'Do they work in Customer Service', expl: 'Do + they + verbo + lugar?' }
  ];

  const SPELL = [
    { ui: 'choice', cat: 'gra', srsId: 'bs-u4:t:there1', title: '🏢 There is ou There are?', main: 'There ___ a Finance department.', options: opts('is', ['are', 'am', 'be']), expl: 'Singular (a department) → THERE IS.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u4:t:there2', title: '🏢 There is ou There are?', main: 'There ___ ten people in Sales.', options: opts('are', ['is', 'am', 'be']), expl: 'Plural (ten people) → THERE ARE.' },
    { ui: 'choice', cat: 'gra', srsId: 'bs-u4:t:there3', title: '🏢 Pergunta:', main: '___ there a canteen on this floor?', options: opts('Is', ['Are', 'Do', 'Have']), expl: 'Singular → Is there…?' }
  ];

  const PHRASES = [
    { ui: 'choice', cat: 'fun', srsId: 'bs-u4:f:msg1', title: '📞 A pessoa não está. Você diz:', main: null, options: opts("I'm sorry, she's not available. Can I take a message?", ['She is not here bye.', 'Call after.', 'No, she gone.']), expl: '"Can I take a message?" = "Posso anotar um recado?"' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u4:f:msg2', title: '📞 Para deixar recado:', main: null, options: opts('Could you ask her to call me back?', ['Tell her call me.', 'She call me back now.', 'Say to her the call.']), expl: '"call me back" = retornar a ligação.' },
    { ui: 'choice', cat: 'fun', srsId: 'bs-u4:f:msg3', title: '📞 Para confirmar o recado:', main: null, options: opts("I'll make sure she gets the message.", ['Ok maybe.', 'She will see, who knows.', 'Message is difficult.']), expl: 'Confirmar dá profissionalismo ao atendimento.' }
  ];

  const MISSIONS = {
    cover: {
      brief: 'Bem-vindo(a) ao 4º andar — o último antes do Viewpoint 1. Departamentos, present simple, there is/are e anotar recados.',
      items: [
        { ui: 'cards', cat: 'voc', title: '🧭 Os departamentos:', cards: [
          { en: 'Sales', pt: 'Vendas', def: 'Sales sells the products.' },
          { en: 'Finance', pt: 'Financeiro', def: 'Finance manages the money.' },
          { en: 'Human Resources', pt: 'RH', def: 'HR takes care of the people.' },
          { en: 'Logistics', pt: 'Logística', def: 'Logistics delivers the goods.' } ] },
        { ui: 'choice', cat: 'voc', srsId: 'bs-u4:v:hr', sp: { g: 'venpt', en: 'Human Resources', u: 4 }, title: '📦 "Human Resources" cuida de:', main: null, options: opts('as pessoas da empresa', ['o dinheiro', 'as vendas', 'os produtos']), expl: 'HR = Recursos Humanos.' } ],
      task: { type: 'audio', title: '🎙️ Seu departamento', brief: 'Grave: "I work in… We…"', waText: 'Registro: meu departamento (Unit 4).' }
    },
    words: { brief: 'Os departamentos e o que cada um faz.', items: [
      { ui: 'match', cat: 'voc', srsId: 'bs-u4:v:m1', title: '📦 Ligue o departamento à função:', pairs: [['Sales', 'vende'], ['Finance', 'cuida do dinheiro'], ['Production', 'faz os produtos'], ['IT', 'cuida dos sistemas']], expl: 'Sales, Finance, Production, IT.' },
      { ui: 'choice', cat: 'voc', srsId: 'bs-u4:v:purch', title: '📦 "Purchasing" é o departamento de:', main: null, options: opts('Compras', ['Vendas', 'Jurídico', 'Marketing']), expl: 'purchasing = compras.' } ] },
    grammar: { brief: 'Present simple para I/you/we/they: rotina e funções dos departamentos.', items: LANG1 },
    speaking: { brief: 'There is / there are para dizer o que existe no escritório.', items: SPELL, task: { type: 'audio', title: '🎙️ O que há no seu andar?', brief: 'Grave 3 frases com there is / there are sobre seu andar.', waText: 'Registro: there is/are (Unit 4).' } },
    comm: { brief: 'Atender e anotar um recado ao telefone quando a pessoa não está.', items: PHRASES },
    talk: { brief: 'Pratique anotar um recado, dos dois lados.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'bs-u4:sp:talk1', unit: 4, waSec: 'Talking Point', title: '🎤 Ofereça anotar um recado:', target: 'Can I take a message?', ptHint: 'Posso anotar um recado?' } ],
      task: { type: 'audio', title: '🎙️ Talking Point', brief: 'Grave um diálogo de recado (dois papéis).', waText: 'Registro: recado ao telefone (Unit 4).' } },
    check: { brief: 'O que você já consegue fazer? Sua resposta vai para o Data Book. Depois desta unidade vem o Viewpoint 1!', checklist: true }
  };

  const CHECKLIST = [
    'I can name the main company departments.',
    'I can use present simple (I/you/we/they).',
    'I can use there is / there are.',
    'I can take and leave a phone message.',
    'I can say what each department does.'
  ];

  UD[4] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1.concat(SPELL), listenPool: [], readPool: [], phrasePool: PHRASES, spellPool: [], numbers: { types: ['int'], max: 99 } };
})(typeof window !== 'undefined' ? window : globalThis);
