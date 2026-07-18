/* DEEP FLOW — units/unit04.js
   UNIT 4 — Safety First (600 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U4 (p.22-27) — objetivos, nada
   copiado; gramática WB-1 (EGU Units 30-31 can · 33 must), adaptada; PT técnico:
   OFFSHORE2. Personagem autoral: Cadu Ramos (rigger). Toolbox talk autoral. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  // fonte: keywords SB-1 U4; definições autorais
  const GLOSSARY = [
    { en: 'safety', pt: 'segurança', def: 'protection from danger — the first word offshore.' },
    { en: 'hazard', pt: 'perigo / risco', def: 'a possible danger: electricity, gas, noise, falling objects.' },
    { en: 'slippery', pt: 'escorregadio', def: 'a slippery surface can make you fall.' },
    { en: 'emergency', pt: 'emergência', def: 'a dangerous situation — act now!' },
    { en: 'crane', pt: 'guindaste', def: 'it lifts and moves heavy loads.' },
    { en: 'rigger', pt: 'amarrador de carga', def: 'the professional who prepares loads for the crane.' },
    { en: 'fumes', pt: 'fumaça / vapores tóxicos', def: 'dangerous gases in the air — wear a mask.' },
    { en: 'shock', pt: 'choque (elétrico)', def: 'electricity can give you a dangerous shock.' },
    { en: 'sign', pt: 'placa', def: 'a safety sign gives a visual message.' },
    { en: 'signal', pt: 'sinal', def: 'a hand signal or sound that communicates.' },
    { en: 'rule', pt: 'regra', def: 'safety rules save lives.' },
    { en: 'protect', pt: 'proteger', def: 'PPE protects your body.' },
    { en: 'warn', pt: 'avisar / alertar', def: 'signs warn us about hazards.' },
    { en: 'injure', pt: 'ferir / machucar', def: 'hazards can injure people.' },
    { en: 'damage', pt: 'danificar', def: 'hazards can damage equipment (things, not people).' }
  ];

  const TOOLS = [
    { en: 'hard hat', pt: 'capacete' },
    { en: 'goggles', pt: 'óculos de proteção' },
    { en: 'gloves', pt: 'luvas' },
    { en: 'ear defenders', pt: 'protetores auriculares' },
    { en: 'safety boots', pt: 'botas de segurança' },
    { en: 'safety harness', pt: 'cinto de segurança (trava-quedas)' },
    { en: 'mask', pt: 'máscara' },
    { en: 'face guard', pt: 'protetor facial' },
    { en: 'load', pt: 'carga' },
    { en: 'sling', pt: 'linga / cinta de içamento' },
    { en: 'toolbox talk', pt: 'DDS (diálogo diário de segurança)' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: can ----------
  // fonte: objetivo SB-1 U4; formatos WB-1 (EGU Units 30-31), adaptados
  const LANG1 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:can1',
      title: '🔧 Capacidade:', main: 'The crane ___ lift 20 tonnes, but it ___ lift 25.',
      options: opts("can · can't", ["can't · can", 'can · can', "can't · can't"]),
      expl: 'can = consegue · can\'t = não consegue. Limite é limite!'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:can2',
      title: '🔧 Monte a pergunta:', main: '___ the tank hold 600 litres?',
      options: opts('Can', ['Does can', 'Is', 'Do']),
      expl: 'Can + sujeito + verbo base. Resposta: Yes, it can. / No, it can\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:can3',
      title: '🔧 Pedindo permissão (você está com calor):', main: null,
      options: opts('Can I take off my ear defenders?', ['I take off now!', 'You take off me?', 'Off defenders I can?']),
      expl: 'Can I…? = posso…? Sempre pergunte ao supervisor antes de tirar EPI.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:can4',
      title: '🔧 Pedindo ajuda (o tubo é pesado):', main: null,
      options: opts('Can you help me with this pipe?', ['You help pipe I?', 'Help to me the pipe can?', 'I can you help?']),
      expl: 'Can you…? = você pode…? — pedido de ajuda educado.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:can5',
      title: '🔧 Resposta curta:', main: 'Can the helicopter lift 7,000 kilos? — No, it ___.',
      options: opts("can't", ["doesn't", "isn't", 'no can']),
      expl: 'No, it can\'t. (curta e direta)'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:can6',
      title: '🔧 Escolha a frase correta:', main: null,
      options: opts('She can lift 20 kilos.', ['She cans lift 20 kilos.', 'She can lifts 20 kilos.', 'She can to lift 20 kilos.']),
      expl: 'can nunca ganha -s, e o verbo vem na base (sem to).'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u4:g:ord1',
      title: '🔧 Monte o pedido:', answer: 'Can you show me the safety harness',
      expl: 'Can you + verbo + objeto.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: must / mustn't ----------
  // fonte: EGU Unit 33 formatos, adaptados
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:must1',
      title: '🔧 A placa diz “Do not smoke here”. Você explica:', main: null,
      options: opts("You mustn't smoke here.", ['You must smoke here.', "You don't can smoke.", 'Smoke is possible here.']),
      expl: 'mustn\'t = proibido. Placa vermelha e branca = proibição.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:must2',
      title: '🔧 A placa diz “Wear safety boots”. Você explica:', main: null,
      options: opts('You must wear safety boots.', ["You mustn't wear boots.", 'You can wear boots if you like.', 'Boots are optional.']),
      expl: 'must = obrigatório. Placa azul e branca = faça isso.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:must3',
      title: '🔧 Complete a regra do guindaste:', main: 'You ___ stand under the load. Never!',
      options: opts("mustn't", ['must', 'can', "don't must"]),
      expl: 'NUNCA fique embaixo da carga → mustn\'t.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:must4',
      title: '🔧 Complete:', main: 'Visitors ___ wear hard hats in this area.',
      options: opts('must', ["mustn't", "don't", 'can be']),
      expl: 'Obrigação para todos — inclusive visitantes.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:must5',
      title: '🔧 must ou mustn\'t?', main: 'We ___ block the fire exit with boxes.',
      options: opts("mustn't", ['must', 'can', 'should yes']),
      expl: 'Saída de emergência livre SEMPRE → mustn\'t block.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u4:g:ord2',
      title: '🔧 Monte a regra:', answer: 'You must always have radio contact',
      expl: 'must + advérbio + verbo.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u4:g:must6',
      title: '🔧 Escolha a frase correta:', main: null,
      options: opts('He must wear goggles.', ['He musts wear goggles.', 'He must to wear goggles.', 'He must wearing goggles.']),
      expl: 'must nunca ganha -s nem to.'
    }
  ];

  // ---------- LISTENING: toolbox talk (autoral) ----------
  const SCRIPT =
    'Toolbox talk — crane safety (supervisor to trainees)\n\n' +
    'Good morning, team. Four rules for today\'s lift.\n' +
    'Rule one: never stand under the load. Never.\n' +
    'Rule two: never use your hands to stop a swinging load. Use a tag line.\n' +
    'Rule three: always watch where you put your hands.\n' +
    'Rule four: the rigger must always have radio contact with the crane operator.\n' +
    'One more thing: the hand signal for emergency stop is two arms up, crossed. Questions? OK — work safe.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u4:l:tb1',
      title: '🎧 DDS do guindaste — regra nº 1:',
      tts: dlg(['Rule one: never stand under the load. Never.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Rule one: never stand under the load. Never.”',
      options: opts('Nunca fique embaixo da carga', ['Nunca olhe para a carga', 'Fique sempre perto da carga', 'Empurre a carga com o corpo']),
      expl: 'Never stand under the load.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u4:l:tb2',
      title: '🎧 Como parar uma carga balançando?',
      tts: dlg(['Never use your hands to stop a swinging load. Use a tag line.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Never use your hands to stop a swinging load. Use a tag line.”',
      options: opts('Com o cabo-guia (tag line), nunca com as mãos', ['Com as duas mãos firmes', 'Com o capacete', 'Gritando para ela parar']),
      expl: 'Mão em carga balançando = acidente. Use a tag line.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u4:l:tb3',
      title: '🎧 Qual é o sinal de mão para EMERGENCY STOP?',
      tts: dlg(['The hand signal for emergency stop is two arms up, crossed.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The hand signal for emergency stop is two arms up, crossed.”',
      options: opts('Dois braços para cima, cruzados', ['Um polegar para cima', 'Acenar tchau', 'Apontar para o chão']),
      expl: 'Two arms up, crossed = pare tudo AGORA.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u4:l:tb4',
      title: '🎧 Quem deve manter contato de rádio com o operador do guindaste?',
      tts: dlg(['The rigger must always have radio contact with the crane operator.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The rigger must always have radio contact with the crane operator.”',
      options: opts('The rigger', ['The cook', 'The geologist', 'Nobody']),
      expl: 'Rigger ↔ crane operator: rádio sempre.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u4:f:warn1',
      title: '🧰 A carga está caindo! O grito de alerta é…', main: null,
      options: opts("Look out! The load's falling!", ['Attention please, kindly observe.', 'Oh no, so bad.', 'The load is going down now, friends.']),
      expl: '“Look out!” = cuidado! — alerta imediato.',
      feedbackTts: "Look out! The load's falling!"
    }
  ];

  // ---------- READING: placas de segurança (autoral) ----------
  const READ_TEXT =
    'Safety signs: colours and shapes\n\n' +
    'The industry has many hazards, so signs talk to us in colours and shapes.\n\n' +
    'Black and yellow triangles WARN us: Danger! High voltage. Overhead crane.\n\n' +
    'Red and white circles PROHIBIT: do not smoke, do not enter.\n\n' +
    'Blue and white circles say YOU MUST: wear goggles, wear a hard hat.\n\n' +
    'Green and white squares INFORM about safety: emergency exit this way, first-aid kit here.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u4:r:sg1',
      title: '📖 Um triângulo preto e amarelo…', main: null,
      options: opts('avisa sobre um perigo (warning)', ['proíbe uma ação', 'obriga a usar EPI', 'mostra a saída de emergência']),
      expl: 'Black and yellow triangle = warning.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u4:r:sg2',
      title: '📖 Um círculo vermelho e branco…', main: null,
      options: opts('proíbe (do not…)', ['informa a rota de fuga', 'pede para correr', 'decora a parede']),
      expl: 'Red and white circle = prohibition.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u4:r:sg3',
      title: '📖 “Wear goggles” aparece numa placa…', main: null,
      options: opts('azul e branca (must do)', ['verde e branca', 'preta e amarela', 'vermelha e branca']),
      expl: 'Blue and white circle = você DEVE fazer.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u4:r:sg4',
      title: '📖 Onde fica o kit de primeiros socorros? A placa é…', main: null,
      options: opts('verde e branca (safety information)', ['vermelha e branca', 'preta e amarela', 'azul-marinho']),
      expl: 'Green and white = informação de segurança.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u4:r:sg5',
      title: '📖 “Electricity can give you a dangerous ___.”', main: null,
      options: opts('shock', ['sock', 'stock', 'shot']),
      expl: 'shock = choque. Cuidado com os falsos parecidos!'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u4:f:mean1',
      title: '🧰 Para perguntar o significado de uma placa:', main: null,
      options: opts('What does the blue sign mean?', ['What means the sign blue?', 'Blue sign is what?', 'Why sign?']),
      expl: '“What does … mean?” — o abre-portas do vocabulário.',
      feedbackTts: 'What does the blue sign mean?'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u4:f:mean2',
      title: '🧰 Resposta:', main: '“That means ‘Read the instructions before you use the machine.’”\nQuem responde está…',
      options: opts('explicando o significado da placa', ['dando uma ordem militar', 'pedindo desculpas', 'recusando ajuda']),
      expl: '“That means…” = isso significa…'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u4:f:advice1',
      title: '🧰 Conselho de segurança educado:', main: null,
      options: opts('You must wear your hard hat in this area.', ['Hat! Now!', 'Why no hat, man?', 'Hat is good idea maybe.']),
      expl: 'must + EPI + área: aviso claro e profissional.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u4:s:v1',
      title: '🔤 Complete as vogais: pr_t_ct', main: null,
      options: opts('o, e → protect', ['a, a → pratact', 'e, o → pretoct', 'i, i → pritict']),
      expl: 'prOtEct = proteger.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u4:s:v2',
      title: '🔤 Qual está escrita corretamente?', main: null,
      options: opts('emergency', ['emergancy', 'imergency', 'emergensy']),
      expl: 'emergency — com E, E, E.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u4:s:nato1',
      title: '📻 Rádio NATO: “Papa · Papa · Echo” soletra a sigla…', main: null,
      options: opts('PPE', ['APP', 'EPP', 'PEP']),
      expl: 'PPE = personal protective equipment (EPI).'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '600 m — e a regra que vale em qualquer profundidade: segurança primeiro. EPI, placas e a linguagem que evita acidentes.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — as palavras da estação:',
          cards: [
            { en: 'safety', pt: 'segurança', def: 'The first word of every shift.' },
            { en: 'hazard', pt: 'perigo / risco', def: 'Electricity, gas, noise, falling objects…' },
            { en: 'PPE', pt: 'EPI', def: 'Personal Protective Equipment: your armour.', tts: 'P P E. personal protective equipment' },
            { en: 'warn', pt: 'avisar', def: 'Signs warn us about hazards.' },
            { en: 'injure / damage', pt: 'ferir / danificar', def: 'Injure = people. Damage = things.', tts: 'injure. damage.' },
            { en: 'emergency', pt: 'emergência', def: 'When it happens, language must be fast.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '⛑️ Por que esta estação existe',
          textTitle: 'Safety first — always',
          text: 'The oil and gas industry has many hazards: electricity, chemicals, hot equipment, gas, machines, noise, falling objects, and slippery surfaces.\n\nGood teams control hazards with three tools: PPE on the body, signs on the walls, and clear communication — in English — between people.\n\nThis station gives you the words for all three.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u4:v:hazard',
          sp: { g: 'venpt', en: 'hazard', u: 4 },
          title: '📦 “Hazard” é…', main: null,
          options: opts('um perigo possível', ['um tipo de capacete', 'um documento', 'um cargo de chefia']),
          expl: 'hazard = possible danger.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u4:v:injdam',
          title: '📦 Escolha certo:', main: 'Falling objects can ___ people and ___ equipment.',
          options: opts('injure · damage', ['damage · injure', 'warn · protect', 'protect · warn']),
          expl: 'injure = machucar GENTE · damage = danificar COISAS.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u4:v:slippery',
          sp: { g: 'venpt', en: 'slippery', u: 4 },
          title: '📦 “Slippery surface” é…', main: null,
          options: opts('superfície escorregadia', ['superfície aquecida', 'piso novo', 'área de descanso']),
          expl: 'slippery = escorregadio. Placa clássica de convés molhado.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases de segurança. Modelo: "Safety comes first. Gas is a hazard. PPE protects my body."',
        waText: 'Registro: 3 safety sentences.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: EPI, placas e avisos, pesos e medidas, toolbox talk, can e must. Primeiro: vista seu EPI — em inglês.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '⛑️ Seu EPI, peça a peça:',
          cards: [
            { en: 'hard hat', pt: 'capacete', def: 'It protects your head.' },
            { en: 'goggles', pt: 'óculos de proteção', def: 'They protect your eyes.' },
            { en: 'gloves', pt: 'luvas', def: 'They protect your hands.' },
            { en: 'ear defenders', pt: 'protetores auriculares', def: 'They protect your ears from noise.' },
            { en: 'safety boots', pt: 'botas de segurança', def: 'They protect your feet.' },
            { en: 'safety harness', pt: 'trava-quedas', def: 'It protects you from a fall.' }
          ]
        },
        {
          ui: 'match', cat: 'voc', srsId: 'u4:v:ppe1',
          title: '⛑️ Ligue o EPI à parte do corpo:',
          pairs: [['hard hat', 'head'], ['goggles', 'eyes'], ['safety boots', 'feet'], ['ear defenders', 'ears']],
          expl: 'EPI ↔ corpo.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u4:v:ppe2',
          title: '⛑️ Complete:', main: '___ protect your hands.',
          options: opts('Gloves', ['Goggles', 'Boots', 'Masks']),
          expl: 'Gloves = luvas.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u4:v:ppe3',
          title: '⛑️ O que te protege de FUMES (vapores)?', main: null,
          options: opts('A mask', ['Ear defenders', 'A hard hat', 'Gloves']),
          expl: 'mask = máscara — contra fumaça e vapores.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u4:v:ppe4',
          title: '⛑️ Trabalho em altura pede…', main: null,
          options: opts('a safety harness', ['a bigger hat', 'two masks', 'sunglasses']),
          expl: 'safety harness = trava-quedas. Protege de queda.'
        }
      ]
    },

    read1: {
      brief: 'As placas falam por cores e formas: triângulo avisa, vermelho proíbe, azul obriga, verde informa. Decifre todas.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia o guia:',
          textTitle: 'Safety signs',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    speak: {
      brief: '"What does it mean?" — o jogo de decifrar placas em dupla, agora no seu rádio.',
      items: [
        {
          ui: 'choice', cat: 'fun', srsId: 'u4:f:spk1',
          title: '💬 Você aponta uma placa e pergunta:', main: null,
          options: opts('What does that sign mean?', ['What sign means?', 'Sign is what saying?', 'Mean the sign what?']),
          expl: 'What does + sujeito + mean?',
          feedbackTts: 'What does that sign mean?'
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u4:f:spk2',
          title: '💬 Placa azul com um livro. A resposta certa:', main: null,
          options: opts("That means 'Read the instructions before you use the machine.'", ['That means the library is here.', 'That means blue is nice.', 'That means stop reading.']),
          expl: 'Azul = obrigação: leia as instruções antes.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u4:sp:speak1', unit: 4, waSec: 'Speaking',
          title: '🎤 Pergunte o significado:',
          target: 'What does the yellow sign mean?',
          ptHint: 'O que significa a placa amarela?'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u4:sp:speak2', unit: 4, waSec: 'Speaking',
          title: '🎤 Responda como veterano:',
          target: "That means 'Danger — overhead crane'.",
          ptHint: 'Significa: perigo, guindaste em operação acima.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave um diálogo (2 papéis): pergunte o significado de 2 placas e responda com "That means…".',
        waText: 'Registro: diálogo What does it mean? (2 placas).'
      }
    },

    job: {
      brief: "It's my job: Cadu Ramos amarra cargas para o guindaste — o rigger. Altura, peso e decisão.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Cadu Ramos — rigger',
          text: "I'm Cadu Ramos, a rigger. I prepare loads for the crane: pipes, containers, equipment.\n\nI often work in high places, so I always wear my safety harness. Before every lift I estimate the weight and the size of the load, and I decide the right sling for it.\n\nThe crane operator can't see everything, so I guide him by radio and hand signals. There are hazards every day — that's why we have a toolbox talk every morning. Safety is my real job."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u4:r:job1',
          title: '👷 What does Cadu prepare?', main: null,
          options: opts('Loads for the crane', ['Meals for the crew', 'Reports for HR', 'Maps for geologists']),
          expl: 'Rigger prepara cargas para içamento.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u4:r:job2',
          title: '👷 Why does he always wear a safety harness?', main: null,
          options: opts('Because he often works in high places', ['Because it is fashionable', 'Because it is cold', 'Because the boss likes it']),
          expl: 'Altura → trava-quedas sempre.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u4:r:job3',
          title: '👷 What does he estimate before every lift?', main: null,
          options: opts('The weight and the size of the load', ['The price of the load', 'The colour of the crane', 'The weather next week']),
          expl: 'estimate = calcular aproximadamente. Peso + tamanho → linga certa.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u4:r:job4',
          title: '👷 How does he guide the crane operator?', main: null,
          options: opts('By radio and hand signals', ['By email', 'By shouting only', 'He doesn\'t guide him']),
          expl: 'Rádio + sinais de mão = a dupla clássica.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: você usaria o EPI do Cadu? Diga 3 itens de EPI que o rigger usa e por quê. ("He wears a … because …")',
        waText: 'Registro: 3 itens de EPI do rigger + porquê.'
      }
    },

    num: {
      brief: 'Pesos e medidas: kg, tonnes, metros — e as perguntas How long? How heavy? que definem cada içamento.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 Medidas do içamento:',
            cards: [
              { en: '1 tonne = 1,000 kg', pt: 'tonelada métrica', def: 'The crane can lift 20 tonnes.', tts: 'one tonne is one thousand kilos' },
              { en: 'length → long · width → wide', pt: 'comprimento · largura', def: "How long is the pipe? It's 2.5 metres long.", tts: 'How long is the pipe?' },
              { en: 'height → high · weight → heavy', pt: 'altura · peso', def: 'How heavy is the load? About 300 kilos.', tts: 'How heavy is the load?' }
            ]
          },
          {
            ui: 'match', cat: 'num', srsId: 'u4:n:abbr1',
            title: '🔢 Ligue a abreviação à palavra:',
            pairs: [['kg', 'kilos'], ['t', 'tonnes'], ['mm', 'millimetres'], ['km', 'kilometres']],
            expl: 'Abreviações de medidas.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u4:n:q1',
            title: '🔢 Para saber o PESO você pergunta…', main: null,
            options: opts('How heavy is it?', ['How high is it?', 'How long is it?', 'How wide is it?']),
            expl: 'weight (peso) → heavy. How heavy…?'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u4:n:q2',
            title: '🔢 “How deep is the well?” pergunta sobre…', main: null,
            options: opts('a profundidade', ['a largura', 'o peso', 'a idade']),
            expl: 'depth → deep = profundidade. Nossa palavra favorita!'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u4:n:q3',
            title: '🔢 A placa diz “Maximum speed 20 kph”. Isso significa…', main: null,
            options: opts('velocidade máxima: 20 km/h', ['peso máximo: 20 kg', 'altura máxima: 20 m', 'mínimo de 20 km/h']),
            expl: 'kph = kilometres per hour.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 9999, rnd: rnd, diff: 1 }));
        }
        return items;
      }
    },

    vocab1: {
      brief: 'Que tipo de palavra é? Noun, verb ou adjective — a pergunta que organiza seu vocabulário para sempre.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Famílias de palavras:',
            cards: [
              { en: 'safety (n) → safe (adj)', pt: 'segurança → seguro', def: 'Safety first. / This machine is safe.', tts: 'safety. safe.' },
              { en: 'hazard (n) → hazardous (adj)', pt: 'perigo → perigoso', def: 'There are hazards. / It is hazardous.', tts: 'hazard. hazardous.' },
              { en: 'protect (v) → protection (n)', pt: 'proteger → proteção', def: 'PPE protects you. / Eye protection.', tts: 'protect. protection.' },
              { en: 'width (n) → wide (adj)', pt: 'largura → largo', def: "What's the width? / How wide is it?", tts: 'width. wide.' }
            ]
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u4:v:kind1',
            title: '📦 Escolha a palavra certa:', main: 'This old machine isn\'t ___ .',
            options: opts('safe', ['safety', 'safely machine', 'safeness']),
            expl: 'Depois de be → adjetivo: safe.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u4:v:kind2',
            title: '📦 Escolha a palavra certa:', main: 'There are ___ in my job.',
            options: opts('hazards', ['hazardous', 'hazardly', 'hazarding']),
            expl: 'There are + substantivo plural: hazards.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u4:v:kind3',
            title: '📦 Escolha a palavra certa:', main: 'Can I use your ___ , please?',
            options: opts('calculator', ['calculate', 'calculation yes', 'calculating']),
            expl: 'Objeto físico → calculator (substantivo).'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u4:v:kind4',
            title: '📦 “operate” é…', main: null,
            options: opts('um verbo (operar)', ['um substantivo', 'um adjetivo', 'uma preposição']),
            expl: 'operate (v) → operator (n) → operational (adj).'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u4:v:kind5',
            title: '📦 Complete a família: drill (v) → ___ (n, a pessoa)', main: null,
            options: opts('driller', ['drilling machine man', 'drillist', 'drilled']),
            expl: 'driller = quem perfura. -er transforma verbo em profissional.'
          }
        ];
        DF.pickN(TOOLS.slice(0, 8), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 4));
        });
        return items;
      }
    },

    listen1: {
      brief: 'O DDS (toolbox talk) do içamento: 4 regras + 1 sinal de emergência. Ouça como se sua mão dependesse disso — porque depende.',
      items: LISTEN1,
      script: SCRIPT
    },

    lang1: { brief: 'CAN: capacidade, limite e permissão — o modal que define o que o guindaste (e você) pode fazer.\n\n(Formatos: Essential Grammar in Use, Units 30-31 — adaptados.)', items: LANG1 },

    write: {
      brief: 'Avisos curtos que salvam: 3 a 5 palavras, letras garrafais, zero dúvida.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ A arte do aviso curto',
          textTitle: 'Safety notices',
          text: 'Um bom aviso tem 3 a 5 palavras e começa com o perigo ou com a ordem:\n\nDANGER! SLIPPERY SURFACE\nDO NOT USE THIS MACHINE\nKEEP FIRE EXIT CLEAR\nVISITORS MUST WEAR HARD HATS\n\nSem frases longas. Sem "por favor". Clareza é gentileza.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u4:r:not1',
          title: '✍️ O piso está escorregadio. O melhor aviso:', main: null,
          options: opts('DANGER! SLIPPERY SURFACE', ['THE FLOOR HAS A LOT OF WATER TODAY MY FRIENDS', 'BE CAREFUL MAYBE', 'WET']),
          expl: 'Curto, claro, com o perigo nomeado.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u4:r:not2',
          title: '✍️ Caixas bloqueando a saída de incêndio. O aviso:', main: null,
          options: opts('KEEP FIRE EXIT CLEAR', ['BOXES ARE HERE', 'FIRE IS DANGEROUS', 'EXIT MAYBE BLOCKED SORRY']),
          expl: 'A ordem direta: mantenha a saída livre.'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u4:sp:not3',
          title: '🔤 Complete as vogais: s_rf_ce', main: null,
          options: opts('u, a → surface', ['o, i → sorfice', 'a, u → sarfuce', 'e, e → serfece']),
          expl: 'sUrfAce = superfície.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Writing — 2 avisos de segurança',
        brief: 'Escreva 2 avisos curtos (3-5 palavras, MAIÚSCULAS): 1) máquina fora de uso; 2) visitantes devem usar capacete.',
        btn: '✍️ Escrever e enviar',
        fields: [
          { label: 'Notice 1 — máquina insegura', ph: 'ex.: DO NOT USE…' },
          { label: 'Notice 2 — visitantes e capacete', ph: 'ex.: VISITORS MUST…' }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Safety First.', checklist: true },

    lang2: { brief: 'MUST e MUSTN\'T: a gramática das placas — obrigação e proibição sem meio-termo.\n\n(Formatos: EGU Unit 33 — adaptados.)', items: LANG2 },

    keywords: {
      brief: 'As 15 keywords da Unit 4 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 4:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u4:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 4 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 4));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I know key words for safety, hazards, and PPE.',
    'I can understand and explain safety signs.',
    'I can talk about weights and measures.',
    'I can understand a toolbox talk.',
    'I can use can for ability and permission.',
    'I can use must and mustn\'t correctly.',
    'I can write short safety notices.'
  ];

  DF.UNIT_DATA[4] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'qty'], max: 9999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
