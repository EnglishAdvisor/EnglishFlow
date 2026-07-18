/* DEEP FLOW — units/unit01.js
   UNIT 1 — An International Industry (0 m · superfície)
   Conteúdo 100% AUTORAL, alinhado às competências do currículo de referência.
   Rastreabilidade de fontes (regra da seção 5 do prompt mestre):
   — Competências e temas: SB-1 Unit 1 (p.4-9) — só objetivos, nada copiado.
   — Formatos de gramática: WB-1 (Essential Grammar in Use) Units 1-2, 37, 65/68 — adaptados.
   — Traduções/PT técnico: OFFSHORE2 (Glossário Técnico Offshore) — consulta.
   — Especificação curricular: unit-01-spec.md (EnglishFlow, método spec-first).
   Cenários: FPSO fictícia "Boa Vista", Bacia de Campos; empresas fictícias
   "Atlântico Óleo" e "Deepblue Services". Nomes e diálogos inventados. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  // ---------- KEYWORDS oficiais da estação (glossário) ----------
  // fonte: lista de keywords SB-1 U1; definições e exemplos AUTORAIS.
  const GLOSSARY = [
    { en: 'foreign', pt: 'estrangeiro(a)', def: 'from another country. "She works for a foreign company."' },
    { en: 'international', pt: 'internacional', def: 'connecting many countries. "English is the international language of the industry."' },
    { en: 'offshore', pt: 'no mar (offshore)', def: 'out at sea, away from land. "He works on an offshore platform."' },
    { en: 'onshore', pt: 'em terra (onshore)', def: 'on land, not at sea. "There are onshore fields in the northeast."' },
    { en: 'control room', pt: 'sala de controle', def: 'the room where operators watch and control the plant.' },
    { en: 'drilling company', pt: 'empresa de perfuração', def: 'a company that drills wells.' },
    { en: 'oilfield', pt: 'campo de petróleo', def: 'an area with oil under the ground or under the sea.' },
    { en: 'oil well', pt: 'poço de petróleo', def: 'a deep hole that brings oil up from the rock.' },
    { en: 'operating company', pt: 'empresa operadora', def: 'a company that operates wells and plants.' },
    { en: 'plant', pt: 'planta industrial / unidade', def: 'a place with industrial equipment, for example a gas plant.' },
    { en: 'service company', pt: 'empresa de serviços', def: 'a company that supplies equipment and technical services.' },
    { en: 'team', pt: 'equipe', def: 'a group of people who work together.' },
    { en: 'technician', pt: 'técnico(a)', def: 'a person who works with equipment and instruments.' },
    { en: 'operate', pt: 'operar', def: 'to make a machine, well, or plant work.' },
    { en: 'supply', pt: 'fornecer', def: 'to give or sell things that a company needs.' }
  ];

  // ---------- vocabulário extra (ferramentas & almoxarifado) ----------
  // fonte: tema SB-1 U1 Vocabulary (tools and hardware); PT conferido no OFFSHORE2.
  const TOOLS = [
    { en: 'screwdriver', pt: 'chave de fenda' },
    { en: 'spanner', pt: 'chave de boca (BrE)', alt: ['wrench'] },
    { en: 'adjustable wrench', pt: 'chave inglesa (ajustável)' },
    { en: 'electric drill', pt: 'furadeira elétrica' },
    { en: 'bolts', pt: 'parafusos sextavados' },
    { en: 'screws', pt: 'parafusos (de fenda)' },
    { en: 'nuts', pt: 'porcas' },
    { en: 'washers', pt: 'arruelas' },
    { en: 'store room', pt: 'almoxarifado', alt: ['stock room', 'store'] },
    { en: 'part number', pt: 'número da peça (P/N)' },
    { en: 'employee number', pt: 'número de registro do funcionário' }
  ];

  const POOL = GLOSSARY.concat(TOOLS);
  const G = function () { return DF.MECH.GEN; };

  // opções embaralhadas para item fixo
  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: a / an / the ----------
  // fonte: objetivo SB-1 U1 Language spot; formatos WB-1 (EGU 65/68/69) adaptados.
  // Cenário autoral: staff list da fictícia Atlântico Óleo.
  const STAFF_LIST = 'Atlântico Óleo — Technical Department\n' +
    'Manager: Paulo Lima (Brazil)\n' +
    'Technicians: Erik Hansen (Norway) · Grace Obi (Nigeria) · John Carter (US)';

  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art1',
      title: '🔧 Complete com a / an / the:', main: 'Atlântico Óleo is ___ operating company.',
      options: opts('an', ['a', 'the', '— (nada)']),
      expl: 'Antes de som de vogal (o-pe-ra-ting), use AN.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art2',
      title: '🔧 Complete com a / an / the:', main: 'Paulo is ___ manager of the Technical Department.',
      options: opts('the', ['a', 'an', '— (nada)']),
      expl: 'Ele é O gerente (único, específico) → THE.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art3',
      title: '🔧 Complete com a / an / the:', main: 'Erik is ___ technician in the department.',
      options: opts('a', ['an', 'the', '— (nada)']),
      expl: 'Um técnico entre vários → A technician (som de consoante).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art4',
      title: '🔧 Complete com a / an / the:', main: 'Grace is ___ excellent technician.',
      options: opts('an', ['a', 'the', '— (nada)']),
      expl: 'EXcellent começa com som de vogal → AN excellent technician.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art5',
      title: '🔧 Complete com a / an / the:', main: 'John is from ___ US.',
      options: opts('the', ['a', 'an', '— (nada)']),
      expl: 'Países com sigla ou nome composto levam THE: the US, the UK, the UAE.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art6',
      title: '🔧 Complete com a / an / the:', main: 'Erik is from ___ Norway.',
      options: opts('— (nada)', ['a', 'an', 'the']),
      expl: 'A maioria dos países NÃO leva artigo: Norway, Brazil, France.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art7',
      title: '🔧 Complete com a / an / the:', main: 'Marina works in ___ control room today.',
      options: opts('the', ['a', 'an', '— (nada)']),
      expl: 'A sala de controle específica da unidade → THE control room.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art8',
      title: '🔧 Complete com a / an / the:', main: 'I need ___ adjustable wrench, please.',
      options: opts('an', ['a', 'the', '— (nada)']),
      expl: 'Adjustable começa com som de vogal → AN.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art9',
      title: '🔧 Complete com a / an / the:', main: "There's ___ man in the store room.",
      options: opts('a', ['an', 'the', '— (nada)']),
      expl: 'Um homem (não específico) → A man.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:art10',
      title: '🔧 Qual nome de país leva THE?', main: null,
      options: opts('the UK', ['Brazil', 'Norway', 'Angola']),
      expl: 'the UK, the US, the UAE — siglas e nomes compostos levam THE.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: verb be + there is/are ----------
  // fonte: objetivo SB-1 U1; formatos WB-1 (EGU Units 1-2 e 37) adaptados.
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:be1',
      title: '🔧 Complete com o verbo be:', main: 'I ___ from Macaé.',
      options: opts("'m (am)", ["'s (is)", "'re (are)", 'be']),
      expl: 'I am / I\'m — primeira pessoa.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:be2',
      title: '🔧 Complete com o verbo be:', main: 'She ___ a technician on an FPSO.',
      options: opts('is', ['am', 'are', 'be']),
      expl: 'he / she / it → IS.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:be3',
      title: '🔧 Complete com o verbo be:', main: 'They ___ from Norway.',
      options: opts('are', ['is', 'am', 'be']),
      expl: 'we / you / they → ARE.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:be4',
      title: '🔧 Monte a pergunta:', main: '___ Atlântico Óleo a service company?',
      options: opts('Is', ['Are', 'Am', 'Be']),
      expl: 'Pergunta com empresa (it) → IS. Resposta: No, it isn\'t. It\'s an operating company.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:be5',
      title: '🔧 Monte a pergunta:', main: '___ Erik and Grace technicians?',
      options: opts('Are', ['Is', 'Am', 'Be']),
      expl: 'Duas pessoas (they) → ARE.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:be6',
      title: '🔧 Resposta curta negativa:', main: 'Is BP a Brazilian company? — No, it ___.',
      options: opts("isn't", ["aren't", "not is", "don't"]),
      expl: 'No, it isn\'t. (BP é britânica.)'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:th1',
      title: '🔧 There is ou There are?', main: 'There ___ a helicopter on the helideck.',
      options: opts('is', ['are', 'am', 'be']),
      expl: 'Uma coisa só (a helicopter) → THERE IS.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:th2',
      title: '🔧 There is ou There are?', main: 'There ___ five technicians in my team.',
      options: opts('are', ['is', 'am', 'be']),
      expl: 'Plural (five technicians) → THERE ARE.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:th3',
      title: '🔧 Monte a pergunta:', main: '___ there a first-aid kit in the workshop?',
      options: opts('Is', ['Are', 'Am', 'Have']),
      expl: 'Singular (a first-aid kit) → IS THERE…?'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u1:g:th4',
      title: '🔧 Complete:', main: 'How many wells ___ there in this field?',
      options: opts('are', ['is', 'am', 'be']),
      expl: 'How many + plural → ARE THERE.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u1:g:ord1',
      title: '🔧 Monte a frase:', answer: 'There are two cranes on the platform',
      expl: 'There are + plural + lugar.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u1:g:ord2',
      title: '🔧 Monte a pergunta:', answer: 'Is there a phone in the store room',
      expl: 'Is there + singular + lugar?'
    }
  ];

  // ---------- LISTENING: 4 conversas de almoxarifado (autorais) ----------
  // fonte: objetivo SB-1 U1 Listening (conversas de store); diálogos 100% autorais.
  const SCRIPT =
    'Conversation 1\n' +
    'A: Excuse me, where is the store room?\n' +
    'B: It\'s on deck two, in room fifteen.\n' +
    'A: Room fifty?\n' +
    'B: No, fifteen. One-five.\n\n' +
    'Conversation 2\n' +
    'A: Good morning. I need some bolts, please.\n' +
    'B: How many do you need?\n' +
    'A: Forty, please.\n' +
    'B: Forty bolts. OK.\n\n' +
    'Conversation 3\n' +
    'A: What\'s the part number?\n' +
    'B: It\'s VLV-2041.\n' +
    'A: Sorry? Could you say that again, please?\n' +
    'B: V-L-V, two-oh-four-one.\n\n' +
    'Conversation 4\n' +
    'A: And your employee number, please?\n' +
    'B: It\'s eight-oh-three-five-two.\n' +
    'A: 80352. Thank you. The store phone number is two-two-nine-nine.';

  function dlg(lines) {
    return lines.map(function (t) { return { t: t, pause: 420 }; });
  }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u1:l:store1',
      title: '🎧 Conversa 1 — Onde fica o almoxarifado?',
      tts: dlg(['Excuse me, where is the store room?', "It's on deck two, in room fifteen.", 'Room fifty?', 'No, fifteen. One, five.']),
      ttsLabel: '🔊 Ouvir a conversa',
      showIfNoTTS: 'A: Excuse me, where is the store room? — B: It\'s on deck two, in room fifteen. — A: Room fifty? — B: No, fifteen. One-five.',
      options: opts('Deck 2, room 15', ['Deck 2, room 50', 'Deck 5, room 12', 'Deck 15, room 2'], 'Deck 2, room 50'),
      expl: 'fifteen (15) ≠ fifty (50) — pegadinha clássica de listening!',
      trapNote: 'fifteen (15) ≠ fifty (50) — o som muda no final: fifTEEN vs FIFty.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u1:l:store2',
      title: '🎧 Conversa 2 — O pedido',
      tts: dlg(['Good morning. I need some bolts, please.', 'How many do you need?', 'Forty, please.', 'Forty bolts. OK.']),
      ttsLabel: '🔊 Ouvir a conversa',
      showIfNoTTS: 'A: I need some bolts, please. — B: How many do you need? — A: Forty, please. — B: Forty bolts. OK.',
      options: opts('40 bolts', ['14 bolts', '40 nuts', '4 bolts'], '14 bolts'),
      expl: 'forty (40) ≠ fourteen (14).',
      trapNote: 'forty (40) ≠ fourteen (14) — atenção ao final da palavra!'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u1:l:store3',
      title: '🎧 Conversa 3 — Anote o part number:',
      tts: dlg(["What's the part number?", "It's V L V, dash, two oh four one.", 'Sorry? Could you say that again, please?', 'V. L. V. two, oh, four, one.']),
      ttsLabel: '🔊 Ouvir a conversa',
      showIfNoTTS: 'A: What\'s the part number? — B: It\'s V-L-V, two-oh-four-one.',
      answers: ['VLV-2041', 'VLV2041'],
      placeholder: 'ex.: ABC-1234',
      expl: 'VLV-2041 — “oh” = zero. Pedir repetição: “Could you say that again, please?”'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u1:l:store4',
      title: '🎧 Conversa 4 — Anote o número de registro (employee number):',
      tts: dlg(['And your employee number, please?', "It's eight, oh, three, five, two.", 'Thank you.']),
      ttsLabel: '🔊 Ouvir a conversa',
      showIfNoTTS: 'B: It\'s eight-oh-three-five-two.',
      answers: ['80352'],
      placeholder: 'só números',
      expl: '8-0-3-5-2 → 80352 (“oh” = 0).'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u1:l:store5',
      title: '🎧 Ainda na conversa 4 — o telefone do almoxarifado:',
      tts: dlg(['The store phone number is two, two, nine, nine.']),
      ttsLabel: '🔊 Ouvir de novo',
      showIfNoTTS: 'The store phone number is two-two-nine-nine.',
      answers: ['2299'],
      placeholder: 'só números',
      expl: 'two-two-nine-nine → 2299.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u1:f:rep1',
      title: '🧰 Não entendeu? Qual frase pede repetição com educação?', main: null,
      options: opts('Could you say that again, please?', ['What do you want?', 'Speak, please!', 'Again!']),
      expl: 'Também vale: “Sorry?” e “What\'s that again?”', feedbackTts: 'Could you say that again, please?'
    }
  ];

  // ---------- READING: empregadores no Brasil (texto autoral) ----------
  // fonte: conceitos NOC/IOC/drilling/service do SB-1 U1 Reading; texto novo sobre o Brasil.
  const READ_TEXT =
    'Who can you work for in Brazil?\n\n' +
    'Brazil has a national oil company (NOC): Petrobras. It operates many fields, onshore and offshore.\n\n' +
    'There are also international oil companies (IOCs) in Brazil. They operate some fields too.\n\n' +
    'Drilling companies drill the wells for the operating companies. Service companies supply equipment and technical services — for example, underwater work.\n\n' +
    'Big and small, Brazilian and foreign: the industry needs them all. You can find jobs on company websites and on the internet.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u1:r:emp1',
      title: '📖 What is Petrobras?', main: null,
      options: opts("Brazil's national oil company (NOC)", ['A drilling company', 'A foreign service company', 'A small onshore company']),
      expl: 'NOC = national oil company: a operadora nacional do país.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u1:r:emp2',
      title: '📖 Who drills wells for the operating companies?', main: null,
      options: opts('Drilling companies', ['Service companies', 'The control room', 'IOCs only']),
      expl: 'As operadoras contratam empresas de perfuração para os poços.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u1:r:emp3',
      title: '📖 What do service companies do?', main: null,
      options: opts('They supply equipment and technical services', ['They operate all the fields', 'They buy the oil', 'They write the news']),
      expl: 'supply = fornecer. Ex.: trabalhos submarinos, equipamentos.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u1:r:emp4',
      title: '📖 True or false?', main: '“There are no foreign companies in Brazil.”',
      options: opts('False', ['True']),
      expl: 'Falso: há IOCs e empresas de serviço estrangeiras no Brasil.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u1:r:emp5',
      title: '📖 An IOC is…', main: null,
      options: opts('an international oil company', ['an internal oil crew', 'an office of independent contractors', 'an onshore installation']),
      expl: 'IOC = international oil company.'
    }
  ];

  // ---------- frases úteis (pool para testes) ----------
  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u1:f:this',
      title: '🧰 Você aponta uma ferramenta e pergunta:', main: null,
      options: opts("What's this in English?", ['How is this name?', 'What calls this?', 'Which is the this?']),
      expl: '“What\'s this in English?” — pergunta de sobrevivência nº 1.',
      feedbackTts: "What's this in English?"
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u1:f:spell',
      title: '🧰 Para pedir a escrita de um nome:', main: null,
      options: opts('How do you spell that?', ['How do you write the letters of that?', 'What is the ortography?', 'Spell me!']),
      expl: '“How do you spell that?” → a pessoa soletra letra por letra.',
      feedbackTts: 'How do you spell that?'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u1:f:rep2',
      title: '🧰 “Sorry?” significa que a pessoa…', main: null,
      options: opts('não entendeu e quer que você repita', ['está pedindo desculpas por um erro grave', 'quer encerrar a conversa', 'está brava com você']),
      expl: 'Com entonação de pergunta, “Sorry?” = “pode repetir?”.'
    }
  ];

  // ---------- soletração (pool para provas — não depende de TTS) ----------
  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u1:s:team',
      title: '🔤 Qual palavra está soletrada?', main: 'T - E - A - M',
      options: opts('team', ['time', 'tame', 'them']),
      expl: 'T-E-A-M = team (equipe).', feedbackTts: 'team'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u1:s:nato1',
      title: '📻 Rádio (alfabeto NATO): que palavra foi soletrada?', main: 'Papa · Uniform · Mike · Papa',
      options: opts('PUMP', ['PIPE', 'PLAN', 'PUMA']),
      expl: 'P (Papa), U (Uniform), M (Mike), P (Papa) → PUMP.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u1:s:nato2',
      title: '📻 Rádio (alfabeto NATO): que palavra foi soletrada?', main: 'Victor · Alpha · Lima · Victor · Echo',
      options: opts('VALVE', ['VESSEL', 'LEVEL', 'VAPOR']),
      expl: 'V-A-L-V-E → valve (válvula).'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u1:s:zed',
      title: '🔤 A letra Z em inglês britânico é…', main: null,
      options: opts('zed', ['zee', 'zeta', 'izzard']),
      expl: 'BrE: zed · AmE: zee. Nas plataformas você ouve os dois!'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {

    // 1 ▸ BACKGROUND — briefing da estação
    background: {
      brief: 'Bem-vindo(a) à superfície da descida. Antes de embarcar: um panorama da indústria que fala inglês em todos os fusos — e onde o Brasil entra nela.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — palavras para começar:',
          cards: [
            { en: 'international', pt: 'internacional', def: 'The oil and gas industry connects many countries.' },
            { en: 'offshore', pt: 'no mar', def: 'Platforms and FPSOs work offshore — out at sea.' },
            { en: 'onshore', pt: 'em terra', def: 'Some fields and plants are onshore — on land.' },
            { en: 'oilfield', pt: 'campo de petróleo', def: 'Brazil has big offshore oilfields (pré-sal).' },
            { en: 'team', pt: 'equipe', def: 'Multinational teams work together — in English.' },
            { en: 'technician', pt: 'técnico(a)', def: 'Technicians operate and check the equipment.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🌍 A indústria internacional',
          textTitle: 'One industry, many countries',
          text: 'Oil and gas come from many regions: the Middle East, Africa, Asia, Europe, and the Americas.\n\nBrazil is a big producer. There are large offshore fields in the pré-sal, and there are onshore fields too.\n\nThe teams are international: Brazilian, Norwegian, American, Angolan… At work, they all speak one language: English.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u1:v:offshore',
          sp: { g: 'venpt', en: 'offshore', u: 1 },
          title: '📦 “Offshore” significa:', main: null,
          options: opts('no mar, longe da terra', ['em terra', 'no escritório', 'no exterior']),
          expl: 'offshore = no mar · onshore = em terra.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:bg1',
          title: '🌍 Complete:', main: 'Oil companies work in many ___ .',
          options: opts('countries', ['kitchens', 'colours', 'songs']),
          expl: 'countries = países. A indústria é internacional.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u1:g:bgthere',
          title: '🌍 Complete:', main: 'There ___ big offshore oilfields in Brazil.',
          options: opts('are', ['is', 'am', 'be']),
          expl: 'Plural (oilfields) → THERE ARE.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u1:v:team',
          sp: { g: 'venpt', en: 'team', u: 1 },
          title: '📦 O que significa:', main: 'team',
          tts: 'team',
          options: opts('equipe', ['turno', 'chefe', 'tempo']),
          expl: 'team = equipe. “There are five people in my team.”'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave um áudio dizendo 3 frases em inglês sobre a indústria no Brasil. Modelo: "There is a big oil industry in Brazil. There are offshore fields. The teams are international."',
        waText: 'Registro de áudio: 3 sentences about the oil industry in Brazil.'
      }
    },

    // 2 ▸ KICK OFF — países, regiões e nacionalidades
    kickoff: {
      brief: 'Nesta unidade: países produtores, nacionalidades, a/an/the, verbo be, soletração, números e ferramentas. Primeiro contato: quem produz óleo e gás no mundo?',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u1:v:nat1',
          title: '🌍 Ligue o país à nacionalidade:',
          pairs: [['Brazil', 'Brazilian'], ['Norway', 'Norwegian'], ['the UK', 'British'], ['the USA', 'American']],
          expl: 'País → nacionalidade: Brazil → Brazilian.'
        },
        {
          ui: 'match', cat: 'voc', srsId: 'u1:v:nat2',
          title: '🌍 Mais nacionalidades:',
          pairs: [['Angola', 'Angolan'], ['France', 'French'], ['Canada', 'Canadian'], ['China', 'Chinese']],
          expl: 'Angolan, French, Canadian, Chinese.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u1:v:nat3',
          title: '🌍 Complete:', main: 'an ___ worker (from Algeria)',
          options: opts('Algerian', ['Algerish', 'Algeric', 'Algerese']),
          expl: 'Algeria → Algerian (por isso “AN Algerian worker”).'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u1:v:nat4',
          title: '🌍 Complete:', main: 'a ___ oil company (from Brazil)',
          options: opts('Brazilian', ['Brazilish', 'Brazilese', 'Brazilic']),
          expl: 'Brazil → Brazilian.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:region',
          title: '🗺️ Qual destas opções é uma REGIÃO (não um país)?', main: null,
          options: opts('the Middle East', ['Malaysia', 'Kazakhstan', 'the UAE']),
          expl: 'the Middle East = Oriente Médio (região com vários países).'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u1:g:ordbr1',
          title: '🔧 Monte a frase sobre o Brasil:',
          answer: 'There is a big oil and gas industry in Brazil',
          expl: 'There is + singular (a big industry).'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u1:g:kothere',
          title: '🔧 Complete:', main: 'There ___ many offshore wells in Brazil.',
          options: opts('are', ['is', 'be', 'am']),
          expl: 'many wells (plural) → THERE ARE.'
        }
      ]
    },

    // 3 ▸ IT'S MY JOB — perfil autoral (Marina Costa, FPSO Boa Vista)
    job: {
      brief: 'Conheça uma profissional fictícia da nossa FPSO Boa Vista e responda sobre a rotina dela — o formato clássico de "It\'s my job".',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Marina Costa — instrument technician',
          text: "My name is Marina Costa. I'm from Salvador, Brazil. I'm an instrument technician on an FPSO in the Campos Basin — the Boa Vista.\n\nAn FPSO is a big production ship. There are ninety people on board. My team has five technicians. They are from Brazil, Norway, and Angola.\n\nToday I'm outside, near the plant. I talk to the control room by radio — in English! I like my job because every day is different."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:job1',
          title: '👷 Where is Marina from?', main: null,
          options: opts('Salvador, Brazil', ['Oslo, Norway', 'Luanda, Angola', 'Macaé, Brazil']),
          expl: '"I\'m from Salvador, Brazil."'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:job2',
          title: '👷 Is she inside or outside today?', main: null,
          options: opts('Outside, near the plant', ['Inside the control room', 'In the store room', 'On the helideck']),
          expl: '"Today I\'m outside, near the plant."'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:job3',
          title: '👷 How many technicians are in her team?', main: null,
          options: opts('Five', ['Ninety', 'Three', 'Fifteen']),
          expl: '"My team has five technicians." (90 é o total a bordo.)'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:job4',
          title: '👷 How does she talk to the control room?', main: null,
          options: opts('By radio, in English', ['By email, in Portuguese', 'By phone, in Norwegian', 'Face to face']),
          expl: '"I talk to the control room by radio — in English!"'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:job5',
          title: '👷 Why does she like the job?', main: null,
          options: opts('Because every day is different', ['Because the money is good', 'Because she works alone', 'Because it is easy']),
          expl: '"I like my job because every day is different."'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Fale de você',
        brief: 'Agora é sua vez, no modelo da Marina: "Hello. My name\'s… I\'m from… I like working inside / outside. I like working in a big / small team."',
        waText: 'Registro: apresentação pessoal no modelo do It\'s My Job.'
      }
    },

    // 4 ▸ LANGUAGE SPOT A-B — a / an / the
    lang1: {
      brief: 'A gramática que aparece no crachá: a / an / the (e quando NÃO usar artigo). Cenário: a staff list da Atlântico Óleo.\n\n' + STAFF_LIST,
      items: LANG1
    },

    // 5 ▸ PRONUNCIATION — alfabeto + soletração + rádio NATO
    pron: {
      brief: 'O alfabeto em grupos de som, soletração em voz alta e o upgrade EnglishFlow: o alfabeto fonético NATO usado no rádio offshore.',
      items: [
        {
          ui: 'cards', cat: 'pro',
          title: '🗣️ Grupos de som do alfabeto:',
          cards: [
            { en: 'A · H · J · K', pt: 'som de "êi"', def: 'A (ei), H (eitch), J (jei), K (kei)', tts: 'A. H. J. K.' },
            { en: 'B · C · D · E · G · P · T · V', pt: 'som de "i"', def: 'bee, cee, dee, ee, gee, pee, tee, vee', tts: 'B. C. D. E. G. P. T. V.' },
            { en: 'F · L · M · N · S · X · Z', pt: 'som de "é"', def: 'ef, el, em, en, es, ex, zed', tts: 'F. L. M. N. S. X. Z.' },
            { en: 'I · Y', pt: 'som de "ai"', def: 'I (ai), Y (uai)', tts: 'I. Y.' },
            { en: 'O / U · Q · W / R', pt: 'sons próprios', def: 'O (ou) · U (iu), Q (kiu), W (dâbliu) · R (ar)', tts: 'O. U. Q. W. R.' }
          ]
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u1:p:grpA',
          title: '🗣️ Quais letras têm o MESMO som de A?', main: null,
          options: opts('H · J · K', ['B · C · D', 'F · L · M', 'I · Y']),
          expl: 'A, H, J, K — todas com som de “êi”.'
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u1:p:grpB',
          title: '🗣️ Quais letras têm o MESMO som de B?', main: null,
          options: opts('C · D · E · G · P · T · V', ['H · J · K', 'F · L · M · N', 'O · Q · U']),
          expl: 'Grupo do “i”: B C D E G P T V.'
        },
        {
          ui: 'type', cat: 'spl', srsId: 'u1:sp:team',
          title: '🔤 Ouça a soletração e escreva a palavra:',
          tts: 'T. E. A. M.', ttsLabel: '🔊 Ouvir a soletração',
          showIfNoTTS: 'T - E - A - M',
          answers: ['team'], expl: 'T-E-A-M = team.', feedbackTts: 'team'
        },
        {
          ui: 'type', cat: 'spl', srsId: 'u1:sp:plant',
          title: '🔤 Ouça a soletração e escreva a palavra:',
          tts: 'P. L. A. N. T.', ttsLabel: '🔊 Ouvir a soletração',
          showIfNoTTS: 'P - L - A - N - T',
          answers: ['plant'], expl: 'P-L-A-N-T = plant.', feedbackTts: 'plant'
        },
        {
          ui: 'type', cat: 'spl', srsId: 'u1:sp:well',
          title: '🔤 Ouça a soletração e escreva a palavra:',
          tts: 'W. E. L. L.', ttsLabel: '🔊 Ouvir a soletração',
          showIfNoTTS: 'W - E - L - L',
          answers: ['well'], expl: 'W-E-L-L = well (poço).', feedbackTts: 'well'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u1:s:zed2',
          title: '🔤 No rádio com um colega britânico, a letra Z é…', main: null,
          options: opts('zed', ['zee', 'zeta', 'zi']),
          expl: 'BrE: zed · AmE: zee.'
        },
        {
          ui: 'cards', cat: 'pro',
          title: '📻 Upgrade EnglishFlow — alfabeto NATO (rádio):',
          cards: [
            { en: 'Alpha · Bravo · Charlie', pt: 'A · B · C', def: 'No rádio, cada letra vira uma palavra para não haver erro.', tts: 'Alpha. Bravo. Charlie.' },
            { en: 'Delta · Echo · Foxtrot', pt: 'D · E · F', def: 'Ex.: “D de Delta”.', tts: 'Delta. Echo. Foxtrot.' },
            { en: 'Victor · Lima · Papa', pt: 'V · L · P', def: 'VLV = Victor, Lima, Victor.', tts: 'Victor. Lima. Papa.' }
          ]
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u1:s:nato3',
          title: '📻 “Bravo · Oscar · Lima · Tango” soletra…', main: null,
          options: opts('BOLT', ['BELT', 'BOAT', 'BOLD']),
          expl: 'B-O-L-T = bolt (parafuso).'
        },
        {
          ui: 'type', cat: 'spl', srsId: 'u1:s:nato4',
          title: '📻 Ouça o rádio e escreva a palavra soletrada:',
          tts: 'Sierra. Alpha. Foxtrot. Echo.', ttsLabel: '🔊 Ouvir o rádio',
          showIfNoTTS: 'Sierra - Alpha - Foxtrot - Echo',
          answers: ['safe', 'SAFE'], expl: 'S-A-F-E = safe.', feedbackTts: 'safe'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Soletre no rádio',
        brief: 'Grave um áudio soletrando seu nome completo duas vezes: 1ª com as letras normais, 2ª no alfabeto NATO (ex.: Felipe = Foxtrot, Echo, Lima…).',
        waText: 'Registro: soletração do meu nome (normal + NATO).'
      }
    },

    // 6 ▸ NUMBER TALK — 1-199 (motor procedural)
    num: {
      brief: 'Números 1-199, telefones e part numbers — o calcanhar de aquiles das reuniões. O gerador é infinito: repita a missão sempre que quiser.',
      build: function (rnd) {
        const items = [
          {
            ui: 'choice', cat: 'num', srsId: 'u1:n:trap1',
            title: '🔢 Pegadinha clássica — o que você ouviu?',
            tts: 'thirty', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“thirty”',
            options: opts('30', ['13', '33', '3']),
            expl: 'thirTEEN (13) tem força no fim; THIRty (30) no começo.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u1:n:trap2',
            title: '🔢 E agora — o que você ouviu?',
            tts: 'fifteen', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“fifteen”',
            options: opts('15', ['50', '55', '5']),
            expl: 'fifTEEN = 15 · FIFty = 50.'
          }
        ];
        for (let i = 0; i < 8; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'int', 'phone', 'part'], max: 199, rnd: rnd, diff: 1 }));
        }
        return items;
      }
    },

    // 7 ▸ LISTENING — 4 conversas de almoxarifado
    listen1: {
      brief: 'Quatro conversas curtas no almoxarifado de bordo da Boa Vista. Ouça quantas vezes quiser (tem botão devagar 🐢) e responda.',
      items: LISTEN1,
      script: SCRIPT
    },

    // 8 ▸ VOCABULARY — tools & hardware
    vocab1: {
      brief: 'A caixa de ferramentas em inglês — com as diferenças British × American que você vai ouvir na plataforma.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Ferramentas de mão:',
            cards: [
              { en: 'screwdriver', pt: 'chave de fenda', def: 'For screws.' },
              { en: 'spanner (BrE) / wrench (AmE)', pt: 'chave de boca', def: 'For nuts and bolts.', tts: 'spanner. wrench.' },
              { en: 'adjustable wrench', pt: 'chave inglesa', def: 'One tool, many sizes.' },
              { en: 'electric drill', pt: 'furadeira elétrica', def: 'It makes holes.' },
              { en: 'bolts and nuts', pt: 'parafusos e porcas', def: 'They work together.', tts: 'bolts and nuts' },
              { en: 'screws and washers', pt: 'parafusos e arruelas', def: 'Small but important.', tts: 'screws and washers' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u1:v:tools1',
            title: '📦 Ligue a ferramenta à tradução:',
            pairs: [['screwdriver', 'chave de fenda'], ['spanner', 'chave de boca'], ['nuts', 'porcas'], ['washers', 'arruelas']],
            expl: 'screwdriver, spanner, nuts, washers.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u1:v:bram1',
            title: '🇬🇧×🇺🇸 “Spanner” (BrE) nos EUA é…', main: null,
            options: opts('wrench', ['spinner', 'screwer', 'plier']),
            expl: 'BrE spanner = AmE wrench.', feedbackTts: 'wrench'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u1:v:bram2',
            title: '🇬🇧×🇺🇸 “Store room” também aparece como…', main: null,
            options: opts('stock room', ['storage kitchen', 'shop floor', 'stock exchange']),
            expl: 'store room / stock room = almoxarifado.'
          }
        ];
        // radar de pronúncia + digitação (gerados a partir do pool de ferramentas)
        const radarPool = TOOLS.filter(function (t) { return ['screwdriver', 'spanner', 'bolts', 'nuts', 'washers', 'electric drill'].indexOf(t.en) >= 0; });
        DF.pickN(radarPool, 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 1));
        });
        DF.pickN(radarPool, 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 1));
        });
        items.push({
          ui: 'choice', cat: 'fun', srsId: 'u1:f:this2',
          title: '🧰 Você não sabe o nome de uma peça. Pergunta:', main: null,
          options: opts("What's this in English?", ['Who is this?', 'Where is the English?', 'What name has it?']),
          expl: 'Aponta e pergunta: “What\'s this in English?” — “It\'s a washer.”',
          feedbackTts: "What's this in English? It's a washer."
        });
        return items;
      }
    },

    // 9 ▸ SPEAKING — checando a caixa contra a lista
    speak: {
      brief: 'Simulação: a caixa chegou do almoxarifado e você confere contra a lista da ordem de serviço. Encontre os erros — e fale as frases do checking.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '💬 O diálogo-modelo do checking',
          textTitle: 'Checking a box',
          text: 'A: What\'s in the box?\nB: There are some bolts.\nA: How many?\nB: Twenty.\nA: Good. What\'s the part number?\nB: PD790.\nA: The list says PD798. They\'re the wrong bolts.',
          readAloud: true
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:chk1',
          title: '🔎 Confira:', main: 'LIST: 40 bolts · part no. PD798\nBOX: 40 bolts · part no. PD790\n\nWhat\'s wrong?',
          options: opts('The part number is wrong', ['The quantity is wrong', 'Nothing is wrong', 'The box is empty']),
          expl: 'PD798 ≠ PD790 → “They\'re the wrong bolts.”'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u1:r:chk2',
          title: '🔎 Confira:', main: 'LIST: 20 nuts · part no. N3521\nBOX: 12 nuts · part no. N3521\n\nWhat\'s wrong?',
          options: opts('The quantity is wrong', ['The part number is wrong', 'Nothing is wrong', 'They are washers, not nuts']),
          expl: '20 na lista, 12 na caixa → quantidade errada. “There are only twelve.”'
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u1:f:box1',
          title: '💬 Para perguntar o que tem na caixa:', main: null,
          options: opts("What's in the box?", ['What has the box?', 'How is the box?', 'Where is in the box?']),
          expl: '“What\'s in the box?” — “There are some washers.”',
          feedbackTts: "What's in the box?"
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u1:sp:speak1', unit: 1, waSec: 'Speaking',
          title: '🎤 Fale a pergunta do conferente:',
          target: "What's the part number?",
          ptHint: 'Qual é o número da peça?'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u1:sp:speak2', unit: 1, waSec: 'Speaking',
          title: '🎤 Reporte o erro:',
          target: "They're the wrong bolts.",
          ptHint: 'São os parafusos errados.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave o diálogo completo do checking (os dois papéis, A e B), com um erro de part number no final. Capriche na diferença entre os números!',
        waText: 'Registro: diálogo de checking (A e B) com erro de part number.'
      }
    },

    // 10 ▸ READING — empregadores no Brasil
    read1: {
      brief: 'NOC, IOC, drilling e service company: quem é quem no mercado brasileiro — e onde procurar vaga.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia com calma:',
          textTitle: 'Who can you work for in Brazil?',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    // 11 ▸ PROJECT — empregadores da sua região
    project: {
      brief: 'Missão de pesquisa: descubra 2 empregadores de óleo & gás que atuam na sua região (operadora, perfuração ou serviços) e registre em inglês simples.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧪 Project — Employers near me',
          textTitle: 'Sua missão',
          text: 'Pesquise na internet (pode ser em português) e escolha DUAS empresas da cadeia de óleo & gás que atuam na sua região ou estado.\n\nPara cada uma, anote em inglês simples:\n1. Company name\n2. Type: NOC / IOC / drilling company / service company\n3. One sentence: what does it do?\n\nExemplo: "Deepblue Services is a service company. It supplies underwater services."',
          nextLabel: 'Preencher a entrega ▸'
        }
      ],
      task: {
        type: 'project',
        title: '🧪 Entrega do Project',
        brief: 'Preencha e envie para o mentor:',
        btn: '🧪 Preencher e enviar no WhatsApp',
        fields: [
          { label: 'Company 1 — name + type', ph: 'ex.: Atlântico Óleo — operating company' },
          { label: 'Company 1 — what does it do?', ph: 'ex.: It operates offshore fields in…', rows: 2 },
          { label: 'Company 2 — name + type', ph: 'ex.: Deepblue Services — service company' },
          { label: 'Company 2 — what does it do?', ph: 'ex.: It supplies…', rows: 2 }
        ]
      }
    },

    // 12 ▸ LANGUAGE SPOT C-D — verb be + there is/are
    lang2: {
      brief: 'O verbo be em afirmativa, negativa e pergunta + there is / there are: a dupla que resolve 80% das frases do primeiro dia.',
      items: LANG2
    },

    // 13 ▸ WRITING — ficha de integração
    write: {
      brief: 'Todo embarque começa com formulário. Aprenda datas no padrão dd/mm/yyyy, maiúsculas em nomes — e preencha sua ficha de integração.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ Regras de ouro do formulário',
          textTitle: 'Dates and capital letters',
          text: 'Datas em formulário: 14/06/2026 (dd/mm/yyyy).\n\nInglês americano inverte: 06/14/2026 (mm/dd/yyyy). Cuidado com formulários de empresas americanas!\n\nNomes, cargos e nacionalidades começam com letra MAIÚSCULA: Marina Costa · Fire Officer · Brazilian.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u1:g:date1',
          title: '✍️ 14 de junho de 2026 num formulário dd/mm/yyyy:', main: null,
          options: opts('14/06/2026', ['06/14/2026', '2026/14/06', '14/6/26 de junho']),
          expl: 'dd/mm/yyyy: dia 14, mês 06, ano 2026.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u1:g:date2',
          title: '✍️ Num formulário AMERICANO, 03/09/2026 é…', main: null,
          options: opts('March 9, 2026', ['September 3, 2026', 'September 2026, day 3', '9 de março de 1926']),
          expl: 'AmE = mm/dd/yyyy → 03 é o mês (March).'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u1:g:caps1',
          title: '✍️ Qual está correto para um formulário?', main: null,
          options: opts('Marina Costa — Brazilian', ['marina costa — brazilian', 'MARINA costa — BraZilian', 'marina Costa — brazilian']),
          expl: 'Nomes e nacionalidades com inicial maiúscula.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u1:v:dob',
          title: '✍️ No formulário, “Date of birth” é…', main: null,
          options: opts('data de nascimento', ['data de embarque', 'data do batismo do navio', 'validade do crachá']),
          expl: 'date of birth (DOB) = data de nascimento.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Ficha de integração — Boa Vista',
        brief: 'Preencha sua ficha de embarque em inglês (dados reais ou de treino):',
        btn: '✍️ Preencher a ficha e enviar',
        fields: [
          { label: 'First name', ph: 'ex.: Felipe' },
          { label: 'Family name', ph: 'ex.: Tavares' },
          { label: 'Job title', ph: 'ex.: Instrument Technician' },
          { label: 'Department', ph: 'ex.: Maintenance' },
          { label: 'Nationality', ph: 'ex.: Brazilian' },
          { label: 'Date of birth (dd/mm/yyyy)', ph: 'ex.: 14/06/1990' },
          { label: 'Emergency phone', ph: 'ex.: 22 99999-0000' }
        ]
      }
    },

    // 14 ▸ CHECKLIST — autoavaliação can-do
    check: {
      brief: 'Hora de olhar no espelho: o que você já consegue fazer em inglês depois desta estação? Sua resposta vai para o Data Book (e o mentor vê no relatório).',
      checklist: true
    },

    // 15 ▸ KEY WORDS — o glossário da estação
    keywords: {
      brief: 'As 15 keywords oficiais da Unit 1 entram para o seu Glossário. Revise os cartões e prove que domina as definições.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 1:',
          cards: GLOSSARY.map(function (g2) {
            return { en: g2.en, pt: g2.pt, def: g2.def };
          })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u1:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 1 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def.split('"')[0].trim(),
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 1));
        });
        return items;
      }
    }
  };

  // ---------- Checklist can-do (competências do unit-01-spec.md) ----------
  const CHECKLIST = [
    'I know words for countries, nationalities, and hand tools.',
    'I can talk about the oil industry in Brazil.',
    'I can use a / an / the correctly.',
    'I can use the verb be and there is / there are.',
    'I can spell names and words aloud (radio too).',
    'I can say numbers 1-199, phone and part numbers.',
    'I can check equipment against a list and report an error.',
    'I can complete a form with my personal information.'
  ];

  DF.UNIT_DATA[1] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'phone', 'part'], max: 199 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
