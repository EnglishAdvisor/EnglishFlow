/* DEEP FLOW — units/unit06.js
   UNIT 6 — Drilling (1000 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U6 (p.34-39) — objetivos, nada
   copiado; gramática = comparativos/superlativos e formas de adjetivo (EGU
   Units 87-90), adaptada; enriquecimento operacional inspirado no OFFSHORE1
   (frases de sonda: winch, flowline, tighten — reescritas). Personagem autoral:
   Téo Barreto (roughneck). PT técnico: OFFSHORE2. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'derrick', pt: 'torre da sonda', def: 'the tall tower that supports the drill string.' },
    { en: 'derrickman', pt: 'torrista', def: 'the crew member who works high up on the monkey board.' },
    { en: 'drill bit', pt: 'broca', def: 'the cutting tool at the bottom of the drill string.' },
    { en: 'drill string', pt: 'coluna de perfuração', def: 'the connected pipes from the surface to the bit.' },
    { en: 'mud', pt: 'fluido de perfuração (lama)', def: 'a mixture that cools the bit and carries cuttings up.' },
    { en: 'pump', pt: 'bomba', def: 'it pushes mud down the drill string.' },
    { en: 'motor', pt: 'motor', def: 'the driller uses it to lift the drill pipes.' },
    { en: 'roustabout', pt: 'auxiliar de plataforma', def: 'often the youngest — cleans and moves equipment.' },
    { en: 'roughneck', pt: 'plataformista', def: 'works on the drilling floor, connects the pipes.' },
    { en: 'toolpusher', pt: 'encarregado de sonda', def: 'the most senior person in the drilling crew.' },
    { en: 'thick', pt: 'grosso / viscoso', def: 'the mud must not be too thick.' },
    { en: 'thin', pt: 'fino / ralo', def: 'the mud must not be too thin either.' },
    { en: 'connect', pt: 'conectar', def: 'connect the heavy drill pipes.' },
    { en: 'tighten', pt: 'apertar', def: 'tighten that loose bolt.' },
    { en: 'guide', pt: 'guiar', def: 'guide the pipe into position.' }
  ];

  const TOOLS = [
    { en: 'monkey board', pt: 'plataforma do torrista' },
    { en: 'drilling floor', pt: 'piso de perfuração' },
    { en: 'rotary table', pt: 'mesa rotativa' },
    { en: 'cuttings', pt: 'cascalho (fragmentos de rocha)' },
    { en: 'clay', pt: 'argila' },
    { en: 'winch', pt: 'guincho' },
    { en: 'clamp', pt: 'braçadeira / grampo' },
    { en: 'disconnect', pt: 'desconectar' },
    { en: 'lubricate', pt: 'lubrificar' },
    { en: 'stack', pt: 'empilhar' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: adjetivos e comparativos ----------
  const LANG1 = [
    {
      ui: 'match', cat: 'gra', srsId: 'u6:g:opp1',
      title: '🔧 Ligue os opostos:',
      pairs: [['thick', 'thin'], ['long', 'short'], ['heavy', 'light'], ['deep', 'shallow']],
      expl: 'Opostos de adjetivos comuns na sonda.'
    },
    {
      ui: 'match', cat: 'gra', srsId: 'u6:g:opp2',
      title: '🔧 Mais opostos:',
      pairs: [['strong', 'weak'], ['difficult', 'easy'], ['dangerous', 'safe'], ['noisy', 'quiet']],
      expl: 'Vocabulário de qualidade e risco.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:comp1',
      title: '🔧 Comparativo — curto (-er) ou longo (more)?', main: 'The mud is too thin. Make it ___ .',
      options: opts('thicker', ['more thick', 'thickest', 'thick more']),
      expl: 'Adjetivo curto: thick → thicker.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:comp2',
      title: '🔧 Comparativo:', main: 'This mud isn\'t viscous enough. Make it ___ .',
      options: opts('more viscous', ['viscouser', 'most viscous', 'viscous more']),
      expl: 'Adjetivo longo: viscous → more viscous.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:comp3',
      title: '🔧 Complete:', main: 'Which is ___: safety or speed?',
      options: opts('more important', ['importanter', 'most important', 'more importanter']),
      expl: 'important (longo) → more important.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:comp4',
      title: '🔧 Resolva o problema:', main: 'A: The wrench is too small.\nB: We need a ___ one.',
      options: opts('bigger', ['more big', 'biggest', 'big more']),
      expl: 'big → bigger (dobra o G).'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u6:g:ord1',
      title: '🔧 Monte a frase:', answer: 'This job is more dangerous',
      expl: 'more + adjetivo longo.'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: superlativos ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:sup1',
      title: '🔧 Superlativo:', main: 'Roustabouts are the ___ people on the rig.',
      options: opts('youngest', ['younger', 'most young', 'more young']),
      expl: 'young → the youngest (nº 1 de muitos).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:sup2',
      title: '🔧 Superlativo:', main: 'The toolpusher is the ___ person in the crew.',
      options: opts('most experienced', ['experiencedest', 'more experienced', 'experienced most']),
      expl: 'experienced (longo) → the most experienced.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:sup3',
      title: '🔧 Comparar 2 (comparativo) ou muitos (superlativo)?', main: 'Who is ___, Jack or Hamid?',
      options: opts('older (compara 2)', ['the oldest', 'most old', 'more oldest']),
      expl: 'Só dois → comparativo: older.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:sup4',
      title: '🔧 Complete:', main: 'The mud pump is one of the ___ parts of the rig.',
      options: opts('heaviest', ['heavier', 'most heavy', 'heavyest']),
      expl: 'heavy → the heaviest (Y vira I).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:sup5',
      title: '🔧 Superlativo irregular:', main: 'This is the ___ rig I have ever worked on. (good)',
      options: opts('best', ['goodest', 'most good', 'better']),
      expl: 'good → better → the best (irregular).'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u6:g:ord2',
      title: '🔧 Monte a frase:', answer: 'He is the most senior person here',
      expl: 'the most + adjetivo longo.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u6:g:sup6',
      title: '🔧 Escolha certo:', main: 'Which is ___: a kilometre or a mile? (long)',
      options: opts('longer', ['longest', 'more long', 'the longer']),
      expl: 'Comparando 2 → longer.'
    }
  ];

  // ---------- LISTENING: problemas e soluções (autoral) ----------
  const SCRIPT =
    'Problems and solutions at the rig\n\n' +
    'Problem 1\n' +
    'A: The cuttings aren\'t coming up to the surface.\n' +
    'B: The mud is too thin. Make it thicker — add two kilos of clay.\n\n' +
    'Problem 2\n' +
    'A: The pump is very noisy.\n' +
    'B: The mud is too thick. Make it thinner — add five litres of water.\n\n' +
    'Problem 3\n' +
    'A: The drilling floor isn\'t clean. There\'s a lot of mud.\n' +
    'B: Wash the floor with water.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u6:l:ps1',
      title: '🎧 Problema 1 — por que o cascalho não sobe?',
      tts: dlg(["The cuttings aren't coming up to the surface.", 'The mud is too thin. Make it thicker.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The cuttings aren\'t coming up. The mud is too thin. Make it thicker.”',
      options: opts('A lama está fina demais', ['A lama está grossa demais', 'A broca quebrou', 'A bomba desligou']),
      expl: 'Mud too thin → não carrega o cascalho. Solução: engrossar.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u6:l:ps2',
      title: '🎧 Quantos kg de argila adicionar? (só o número)',
      tts: dlg(['Make it thicker — add two kilos of clay.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Add two kilos of clay.”',
      answers: ['2', 'two'], placeholder: 'número',
      expl: 'two kilos = 2 kg de argila.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u6:l:ps3',
      title: '🎧 Problema 2 — a bomba está barulhenta. Por quê?',
      tts: dlg(['The pump is very noisy.', 'The mud is too thick. Make it thinner.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The pump is very noisy. The mud is too thick. Make it thinner.”',
      options: opts('A lama está grossa demais', ['A lama está fina demais', 'Falta água na bomba', 'O motor está frio']),
      expl: 'Mud too thick → bomba sofre. Solução: afinar com água.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u6:l:ps4',
      title: '🎧 Problema 3 — como limpar o piso de perfuração?',
      tts: dlg(["The drilling floor isn't clean. There's a lot of mud.", 'Wash the floor with water.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“The floor isn\'t clean. Wash the floor with water.”',
      options: opts('Lavar com água', ['Varrer com uma broca', 'Deixar secar sozinho', 'Chamar o toolpusher']),
      expl: 'Wash the floor with water.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u6:f:winch',
      title: '📻 No rádio da sonda (enriquecimento OFFSHORE1): “Slack off with the winch” significa…', main: null,
      options: opts('afrouxar com o guincho', ['apertar o guincho', 'ligar a bomba', 'subir na torre']),
      expl: 'slack off = afrouxar/dar folga; winch = guincho. (Adaptado do banco OFFSHORE1.)',
      feedbackTts: 'Slack off with the winch.'
    }
  ];

  // ---------- READING: a equipe de perfuração (autoral) ----------
  const READ_TEXT =
    'Who\'s who in a drilling crew\n\n' +
    'Roustabouts are often the youngest. They clean, move equipment, and help everybody. They work hard and learn fast because they want better jobs.\n\n' +
    'Roughnecks are more skilled. They work on the drilling floor, connecting the heavy drill pipes and putting them into the hole.\n\n' +
    'The derrickman works high up on the monkey board, about 25 metres above the floor. He guides the top of the pipe and helps the mud engineer — the mud must not be too thick or too thin.\n\n' +
    'The driller supervises and trains the crew and controls the drilling. The toolpusher is the most senior and most experienced person, responsible for equipment, safety, and paperwork.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u6:r:crew1',
      title: '📖 Who is usually the youngest?', main: null,
      options: opts('The roustabout', ['The toolpusher', 'The driller', 'The derrickman']),
      expl: 'Roustabouts — os mais novos, começam por baixo.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u6:r:crew2',
      title: '📖 Who is not afraid of high places?', main: null,
      options: opts('The derrickman', ['The roustabout', 'The toolpusher', 'The cook']),
      expl: 'Derrickman trabalha a 25 m de altura.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u6:r:crew3',
      title: '📖 Who is the most senior?', main: null,
      options: opts('The toolpusher', ['The roughneck', 'The roustabout', 'The derrickman']),
      expl: 'Toolpusher = o mais experiente e responsável.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u6:r:crew4',
      title: '📖 What do roughnecks do on the floor?', main: null,
      options: opts('Connect the drill pipes', ['Cook the meals', 'Fly the helicopter', 'Sell the oil']),
      expl: 'Roughnecks conectam/desconectam as colunas.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u6:r:crew5',
      title: '📖 Why must the driller control the drill speed?', main: null,
      options: opts('It must not be too fast or too slow', ['To save fuel only', 'To make noise', 'Because he is bored']),
      expl: 'Velocidade errada danifica broca e poço.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u6:f:instr1',
      title: '🧰 Instrução: “You need to tighten that loose bolt.” O que fazer?', main: null,
      options: opts('apertar o parafuso solto', ['remover o parafuso', 'pintar o parafuso', 'ignorar']),
      expl: 'tighten = apertar · loose = solto.',
      feedbackTts: 'You need to tighten that loose bolt.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u6:f:instr2',
      title: '🧰 “Stack them on the rack” pede para você…', main: null,
      options: opts('empilhar no suporte', ['jogar no chão', 'pintar', 'contar em voz alta']),
      expl: 'stack = empilhar · rack = suporte/estante.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u6:f:advice',
      title: '🧰 Conselho de segurança ao novato:', main: null,
      options: opts("You shouldn't wear loose clothes because machines might catch them.", ['Loose clothes are cool, wear them.', 'No talk, only work.', 'Clothes catch machines always yes.']),
      expl: 'shouldn\'t + razão (because) = conselho profissional.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u6:s:r1',
      title: '🗣️ O R é PRONUNCIADO ou MUDO em “drill”?', main: 'd-r-i-ll',
      options: opts('pronunciado (r + vogal)', ['mudo', 'vira L', 'vira W']),
      expl: 'r antes de vogal → pronunciado: dRill.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u6:s:r2',
      title: '🗣️ E em “older” (BrE)?', main: 'ol-d-e-r',
      options: opts('mudo (r no fim)', ['bem forte', 'vira A', 'dobra']),
      expl: 'No inglês britânico, r no fim é quase mudo: “oldə”.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u6:s:dbl',
      title: '🔤 Complete com uma ou duas letras (g): bi__er', main: null,
      options: opts('gg → bigger', ['g → biger', 'ck → bicker', 'j → bijer']),
      expl: 'big → bigger (dobra o G).'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u6:s:nato1',
      title: '📻 Rádio NATO: “Mike · Uniform · Delta” soletra…', main: null,
      options: opts('MUD', ['MAD', 'MOD', 'MUG']),
      expl: 'M-U-D = mud (lama).'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '1.000 m. Agora a máquina que faz o buraco: a sonda. Torre, broca, coluna e a lama que circula sem parar.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — a anatomia da sonda:',
          cards: [
            { en: 'derrick', pt: 'torre', def: 'The tall tower — higher than a 20-storey building.' },
            { en: 'drill string', pt: 'coluna de perfuração', def: 'The pipes from the surface to the bit.' },
            { en: 'drill bit', pt: 'broca', def: 'It rotates and cuts through the rock.' },
            { en: 'mud', pt: 'lama de perfuração', def: 'Cools the bit and carries cuttings up.' },
            { en: 'pump', pt: 'bomba', def: 'Pushes mud down the drill string.' },
            { en: 'cuttings', pt: 'cascalho', def: 'Bits of rock that come up with the mud.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🌀 O ciclo da lama',
          textTitle: 'How drilling mud works',
          text: 'Drilling mud is a mixture of water, clay, and other materials.\n\nThe pump pushes mud down inside the drill string to the bit. There, the mud cools and cleans the bit. Then it flows up the hole and carries the rock cuttings up with it.\n\nA screen separates the cuttings from the mud, and the clean mud goes back to the tank. The cycle never stops.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u6:v:mud',
          sp: { g: 'venpt', en: 'mud', u: 6 },
          title: '📦 A lama de perfuração serve para…', main: null,
          options: opts('resfriar a broca e trazer o cascalho', ['pintar a torre', 'alimentar a equipe', 'iluminar o poço']),
          expl: 'Mud: cool + clean + carry cuttings up.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u6:r:bg1',
          title: '🌀 O que empurra a lama para baixo?', main: null,
          options: opts('a bomba (pump)', ['a broca', 'a torre', 'o vento']),
          expl: 'The pump pushes the mud down.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u6:v:bit',
          sp: { g: 'venpt', en: 'drill bit', u: 6 },
          title: '📦 “Drill bit” é…', main: null,
          options: opts('a broca (corta a rocha)', ['a torre', 'a bomba', 'o motor']),
          expl: 'bit = broca, na ponta da coluna.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases sobre a sonda: derrick, mud, pump. Modelo: "The derrick is very tall. The pump pushes the mud. The mud carries the cuttings up."',
        waText: 'Registro: 3 sentences — the rig.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: vocabulário de perfuração, problemas e soluções, formas de adjetivo, o som do R, instruções e conselhos de segurança.',
      items: [
        {
          ui: 'choice', cat: 'voc', srsId: 'u6:v:ko1',
          title: '🌀 Qual parte GIRA e perfura a rocha?', main: null,
          options: opts('the drill bit', ['the derrick', 'the mud tank', 'the monkey board']),
          expl: 'A broca (bit) gira e corta.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u6:v:ko2',
          title: '🌀 O que SUSTENTA o equipamento de içamento e a coluna?', main: null,
          options: opts('the derrick', ['the pump', 'the bit', 'the clay']),
          expl: 'A torre (derrick) sustenta tudo.'
        },
        {
          ui: 'match', cat: 'voc', srsId: 'u6:v:ko3',
          title: '🌀 Ligue a parte à função:',
          pairs: [['pump', 'pushes mud'], ['bit', 'cuts rock'], ['derrick', 'supports the string'], ['screen', 'separates cuttings']],
          expl: 'Cada peça, seu papel.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u6:v:ko4',
          title: '🌀 Para poços profundos, a torre deve ser muito…', main: null,
          options: opts('strong (forte)', ['thin', 'quiet', 'cheap']),
          expl: 'Poço fundo = coluna pesada = torre forte.'
        }
      ]
    },

    read1: {
      brief: 'Quem é quem na sonda: do roustabout ao toolpusher. Leia e conheça a hierarquia.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia com atenção:',
          textTitle: 'A drilling crew',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    listen1: {
      brief: 'Problemas e soluções na sonda: lama fina, lama grossa, piso sujo. Ouça o diagnóstico e a solução.',
      items: LISTEN1,
      script: SCRIPT
    },

    lang1: { brief: 'Formas de adjetivo e comparativos: -er para curtos, more para longos. Grosso, fino, mais pesado.\n\n(Formatos: EGU Units 87-90 — adaptados.)', items: LANG1 },

    pron: {
      brief: 'O som do R: pronunciado antes de vogal, quase mudo no fim (BrE). O detalhe que muda seu sotaque.',
      items: [
        {
          ui: 'cards', cat: 'pro',
          title: '🗣️ O R pronunciado × mudo:',
          cards: [
            { en: 'drill · strong · crew', pt: 'R + vogal = PRONUNCIADO', def: 'You hear the r clearly.', tts: 'drill. strong. crew.' },
            { en: 'older · bigger · worker', pt: 'R no fim (BrE) = quase MUDO', def: 'The r almost disappears.', tts: 'older. bigger. worker.' },
            { en: 'hard · works', pt: 'R + consoante = fraco (BrE)', def: 'Soft or silent in British English.', tts: 'hard. works.' }
          ]
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u6:p:r1',
          title: '🗣️ Em qual palavra o R é mais forte?', main: null,
          options: opts('strong', ['older', 'worker', 'bigger']),
          expl: 'strong: r + vogal → forte.'
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u6:p:r2',
          title: '🗣️ Em qual o R é quase mudo (BrE)?', main: null,
          options: opts('deeper', ['crew', 'drill', 'rig']),
          expl: 'deeper: r no fim → quase mudo no britânico.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u6:sp:pron1', unit: 6, waSec: 'Pronunciation',
          title: '🎤 Fale a frase da sonda:',
          target: 'The driller controls the drill string.',
          ptHint: 'R forte em driller e drill.'
        }
      ]
    },

    write: {
      brief: 'Letras dobradas: drill, bigger, hottest. A regra que arruma metade dos seus erros de escrita.',
      items: [
        {
          ui: 'choice', cat: 'spl', srsId: 'u6:sp:w1',
          title: '🔤 Complete (g): big · bi__er · bi__est', main: null,
          options: opts('bigger · biggest (dobra)', ['biger · bigest', 'biggerr · biggestt', 'bigar · bigast']),
          expl: 'Vogal curta + consoante final → dobra: bigger, biggest.'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u6:sp:w2',
          title: '🔤 Complete (t): ho__ · ho__er · ho__est', main: null,
          options: opts('hot · hotter · hottest', ['hott · hoter · hotest', 'hot · hoter · hottest', 'hot · hotter · hotest']),
          expl: 'hot → hotter → hottest (dobra o T).'
        },
        {
          ui: 'type', cat: 'spl', srsId: 'u6:sp:w3',
          title: '🔤 Escreva o comparativo de “deep”:', main: 'deep → ?',
          answers: ['deeper'], placeholder: 'comparativo',
          expl: 'deep → deeper (não dobra: já tem 2 vogais).', feedbackTts: 'deeper'
        },
        {
          ui: 'choice', cat: 'spl', srsId: 'u6:sp:w4',
          title: '🔤 Qual está correta?', main: null,
          options: opts('drilling', ['driling', 'drillling', 'drilingg']),
          expl: 'drill + ing = drilling (mantém o LL).'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Writing — comparações da sonda',
        brief: 'Escreva 3 comparações usando comparativos/superlativos: profundidade, peso e segurança na perfuração.',
        btn: '✍️ Escrever e enviar',
        fields: [
          { label: 'Comparação 1 (deep/deeper)', ph: 'ex.: This well is deeper than…', rows: 2 },
          { label: 'Comparação 2 (heavy/heaviest)', ph: 'ex.: The pump is the heaviest part…', rows: 2 },
          { label: 'Comparação 3 (important/safe)', ph: 'ex.: Safety is more important than speed.', rows: 2 }
        ]
      }
    },

    lang2: { brief: 'Superlativos: o mais alto, o mais experiente, o melhor. O nº 1 entre muitos.\n\n(Formatos: EGU Units 88-90 — adaptados.)', items: LANG2 },

    speak: {
      brief: 'Dando conselhos de segurança: você cuida de um novato na sonda. Aponte o risco e explique.',
      items: [
        {
          ui: 'choice', cat: 'fun', srsId: 'u6:f:spk1',
          title: '💬 O novato usa roupa larga perto da máquina. Você avisa:', main: null,
          options: opts("You shouldn't wear loose clothes because machines might catch them.", ['Clothes loose no good, man.', 'Wear what you want.', 'Machines are safe always.']),
          expl: 'shouldn\'t + because + might = conselho completo.',
          feedbackTts: "You shouldn't wear loose clothes."
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u6:f:spk2',
          title: '💬 Ele está embaixo de uma carga. Você diz:', main: null,
          options: opts("You mustn't stand under the load — it's dangerous.", ['Stay there is fine.', 'Load is nice up there.', 'Under is best place.']),
          expl: 'mustn\'t para proibição de segurança séria.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u6:sp:speak1', unit: 6, waSec: 'Speaking',
          title: '🎤 Dê o conselho:',
          target: "You should always wear your safety harness.",
          ptHint: 'Você deve sempre usar o cinto de segurança.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u6:sp:speak2', unit: 6, waSec: 'Speaking',
          title: '🎤 Explique o risco:',
          target: "Machines might catch loose clothes and injure you.",
          ptHint: 'Máquinas podem prender roupas largas e feri-lo.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave 3 conselhos de segurança para um novato na sonda ("You shouldn\'t… because…").',
        waText: 'Registro: 3 conselhos de segurança na sonda.'
      }
    },

    vocab1: {
      brief: 'Entendendo instruções: os verbos que dizem o que fazer — clean, tighten, connect, guide, stack.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 Verbos de instrução:',
            cards: [
              { en: 'connect / disconnect', pt: 'conectar / desconectar', def: 'Connect the drill pipes.', tts: 'connect. disconnect.' },
              { en: 'tighten', pt: 'apertar', def: 'Tighten that loose bolt.' },
              { en: 'guide', pt: 'guiar', def: 'Guide the pipe into position.' },
              { en: 'stack', pt: 'empilhar', def: 'Stack the pipes on the rack.' },
              { en: 'lubricate', pt: 'lubrificar', def: 'Lubricate the moving parts.' },
              { en: 'inspect', pt: 'inspecionar', def: 'Inspect the bit carefully.' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u6:v:instr1',
            title: '📦 Ligue o verbo à ação:',
            pairs: [['tighten', 'a loose bolt'], ['connect', 'the pipes'], ['guide', 'into position'], ['stack', 'on the rack']],
            expl: 'Instrução + objeto.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u6:v:instr2',
            title: '📦 “Pour this chemical into the pipe.” — pour é…', main: null,
            options: opts('despejar / verter', ['fechar', 'medir', 'empilhar']),
            expl: 'pour = despejar (líquido).'
          }
        ];
        DF.pickN(GLOSSARY.slice(0, 10), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 6));
        });
        DF.pickN(TOOLS.slice(5), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 6));
        });
        return items;
      }
    },

    project: {
      brief: 'Missão de reflexão: perfuração é o trabalho para você? Responda ao questionário e some seus pontos.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🧪 Project — Is drilling the job for you?',
          textTitle: 'Sua missão',
          text: 'Responda em inglês (3 = Yes, 2 = Maybe, 1 = No) e some:\n\n1. Do you like working outside?\n2. Can you work in very hot or very cold weather?\n3. Are you good at operating machines?\n4. Are you strong?\n5. Is shift work OK for you?\n6. Can you live away from family and friends?\n\nMáximo: 18 pontos. Depois escreva uma frase: "Drilling is / isn\'t the job for me because…"',
          nextLabel: 'Preencher a entrega ▸'
        }
      ],
      task: {
        type: 'project',
        title: '🧪 Entrega do Project',
        brief: 'Preencha e envie ao mentor:',
        btn: '🧪 Preencher e enviar no WhatsApp',
        fields: [
          { label: 'Meu total (de 18)', ph: 'ex.: 14' },
          { label: 'Conclusão em inglês', ph: 'ex.: Drilling is the job for me because…', rows: 3 }
        ]
      }
    },

    check: { brief: 'Autoavaliação da estação Drilling.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 6 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 6:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u6:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 6 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 6));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I know key vocabulary for drilling.',
    'I can follow conversations about problems and solutions.',
    'I can use adjective forms (comparatives and superlatives).',
    'I know when r is pronounced or silent.',
    'I can understand instructions.',
    'I can give and explain safety advice.'
  ];

  DF.UNIT_DATA[6] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'qty'], max: 99999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
