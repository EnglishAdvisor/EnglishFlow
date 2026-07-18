/* DEEP FLOW — units/unit05.js
   UNIT 5 — Finding Oil and Gas (800 m) · CONTEÚDO COMPLETO
   Rastreabilidade: competências/keywords do SB-1 U5 (p.28-33) — objetivos, nada
   copiado; gramática = ordem de palavras / pronomes objeto (EGU Units 59-60,
   estrutura de frase), adaptada; PT técnico: OFFSHORE2. Personagem autoral:
   Diego Moraes (geotécnico em equipe de sísmica). */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'seismic', pt: 'sísmico', def: 'seismic waves are sound waves that travel through rock.' },
    { en: 'wave', pt: 'onda', def: 'a vibration that carries energy through rock or water.' },
    { en: 'vibration', pt: 'vibração', def: 'vibrator trucks make vibrations on the surface.' },
    { en: 'layer', pt: 'camada', def: 'rocks are in layers below the surface.' },
    { en: 'geophone', pt: 'geofone', def: 'a device that converts waves into electrical signals (like a microphone).' },
    { en: 'signal', pt: 'sinal', def: 'an electrical message sent to the recording truck.' },
    { en: 'reflect', pt: 'refletir', def: 'each rock layer reflects some of the waves.' },
    { en: 'convert', pt: 'converter', def: 'geophones convert waves into signals.' },
    { en: 'record', pt: 'gravar / registrar', def: 'a machine in the truck records the signals.' },
    { en: 'truck', pt: 'caminhão', def: 'vibrator trucks and the recording truck.' },
    { en: 'position', pt: 'posição', def: 'GPS tells you your exact position on Earth.' },
    { en: 'coordinates', pt: 'coordenadas', def: 'latitude and longitude — your exact place.' },
    { en: 'bearing', pt: 'rumo / azimute', def: 'the direction to a target, in degrees.' },
    { en: 'heading', pt: 'proa / direção atual', def: 'the direction you are moving now.' },
    { en: 'waypoint', pt: 'ponto de referência (GPS)', def: 'a saved position to navigate to.' }
  ];

  const TOOLS = [
    { en: 'geologist', pt: 'geólogo(a)' },
    { en: 'geophysicist', pt: 'geofísico(a)' },
    { en: 'oil trap', pt: 'armadilha de óleo (trapa)' },
    { en: 'reservoir rock', pt: 'rocha-reservatório' },
    { en: 'porous rock', pt: 'rocha porosa' },
    { en: 'GPS unit', pt: 'aparelho de GPS' },
    { en: 'satellite', pt: 'satélite' },
    { en: 'latitude', pt: 'latitude' },
    { en: 'longitude', pt: 'longitude' },
    { en: 'survey crew', pt: 'equipe de levantamento' }
  ];
  const POOL = GLOSSARY.concat(TOOLS);

  function opts(correct, wrongs, trap) {
    const o = [{ label: correct, correct: true }];
    if (trap) o.push({ label: trap, trap: true });
    wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); });
    return DF.shuffle(o);
  }

  // ---------- LANGUAGE SPOT A-B: ordem das palavras ----------
  const LANG1 = [
    {
      ui: 'order', cat: 'gra', srsId: 'u5:g:wo1',
      title: '🔧 Monte a frase (sujeito + verbo + objeto):', answer: 'Diego reads the data carefully',
      expl: 'Sujeito antes do verbo; advérbio nunca entre verbo e objeto.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:wo2',
      title: '🔧 Onde entra o advérbio?', main: 'He works outside ___ .',
      options: opts('every day (no fim)', ['every day works', 'he every day', 'outside every he']),
      expl: 'Tempo/lugar geralmente vão no FIM da frase.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:wo3',
      title: '🔧 Escolha a frase correta:', main: null,
      options: opts('Black things reflect light waves badly.', ['Black things reflect badly light waves.', 'Badly black things reflect light waves.', 'Black things badly reflect light waves badly.']),
      expl: 'Advérbio NÃO fica entre o verbo (reflect) e o objeto (light waves).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:wo4',
      title: '🔧 Onde fica o adjetivo?', main: 'We find oil in ___ rocks.',
      options: opts('porous (antes do substantivo)', ['rocks porous', 'porous badly', 'porously']),
      expl: 'Adjetivo vem antes do substantivo: porous rocks.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:wo5',
      title: '🔧 Que tipo de frase é “Don\'t forget your GPS.”?', main: null,
      options: opts('Imperativa (ordem/instrução)', ['Pergunta', 'Afirmação', 'Exclamação sem verbo']),
      expl: 'Imperativa: começa com o verbo, sem sujeito.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:wo6',
      title: '🔧 Corrija: “Faisal he likes his job.”', main: null,
      options: opts('Faisal likes his job.', ['He Faisal likes his job.', 'Faisal he like his job.', 'Likes Faisal his job.']),
      expl: 'Não repita o sujeito (nome + pronome). Escolha um só.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u5:g:wo7',
      title: '🔧 Monte a pergunta:', answer: 'Can you help me',
      expl: 'Can + você + verbo + objeto (me).'
    }
  ];

  // ---------- LANGUAGE SPOT C-D: pronomes objeto ----------
  const LANG2 = [
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:pr1',
      title: '🔧 Troque pelo pronome: “Faisal is helping Ali and Hamid.”', main: 'Faisal is helping ___ .',
      options: opts('them', ['they', 'him', 'us']),
      expl: 'Ali and Hamid (objeto, plural) → them.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:pr2',
      title: '🔧 Troque: “Mr Ali has a message for me and all the technicians.”', main: 'He has a message for ___ .',
      options: opts('us', ['we', 'them', 'me']),
      expl: 'me + os técnicos = nós (objeto) → us.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:pr3',
      title: '🔧 Sujeito ou objeto?', main: '___ don\'t like hot weather. (My friends and I)',
      options: opts('We (sujeito)', ['Us', 'Them', 'They us']),
      expl: 'No início/sujeito → We. (Us é objeto.)'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:pr4',
      title: '🔧 Complete:', main: 'The drivers can talk to the man by radio. → They can talk to ___ .',
      options: opts('him', ['he', 'them', 'his']),
      expl: 'the man (objeto) → him.'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:pr5',
      title: '🔧 Escolha certo:', main: 'The woman in HR has the forms. Ask ___ .',
      options: opts('her', ['she', 'them', 'hers']),
      expl: 'the woman (objeto) → her.'
    },
    {
      ui: 'order', cat: 'gra', srsId: 'u5:g:pr6',
      title: '🔧 Monte a frase:', answer: 'The geologist is talking to him',
      expl: 'sujeito + verbo + to + pronome objeto (him).'
    },
    {
      ui: 'choice', cat: 'gra', srsId: 'u5:g:pr7',
      title: '🔧 Escolha a frase correta:', main: null,
      options: opts('Read the seismic data carefully.', ['Read carefully the seismic data.', 'Carefully read data the seismic.', 'The seismic data read carefully you.']),
      expl: 'Imperativa: verbo + objeto + advérbio no fim.'
    }
  ];

  // ---------- LISTENING: como usar GPS (autoral) ----------
  const SCRIPT =
    'How to use GPS — trainer to trainee\n\n' +
    'GPS means Global Positioning System. It has two uses: to find your exact position on Earth, and to navigate to other positions — waypoints.\n\n' +
    'Before the trip, enter and save the coordinates of all your waypoints.\n' +
    'At the start: turn on the GPS. Wait until it receives signals from three satellites. Then it shows the coordinates of your position.\n' +
    'Select the first waypoint, then select GOTO, and follow the bearing.';

  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }

  const LISTEN1 = [
    {
      ui: 'choice', cat: 'lis', srsId: 'u5:l:gps1',
      title: '🎧 Quais são os DOIS usos do GPS?',
      tts: dlg(['GPS has two uses: to find your exact position on Earth, and to navigate to other positions — waypoints.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“GPS has two uses: to find your exact position, and to navigate to waypoints.”',
      options: opts('achar a posição e navegar até waypoints', ['medir o peso e a altura', 'ligar e desligar a sonda', 'falar e ouvir no rádio']),
      expl: 'Position + navigation to waypoints.'
    },
    {
      ui: 'type', cat: 'lis', srsId: 'u5:l:gps2',
      title: '🎧 De quantos satélites o GPS precisa antes de mostrar a posição? (só o número)',
      tts: dlg(['Wait until it receives signals from three satellites.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Wait until it receives signals from three satellites.”',
      answers: ['3', 'three'], placeholder: 'número',
      expl: 'three satellites = 3.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u5:l:gps3',
      title: '🎧 O que você faz ANTES da viagem?',
      tts: dlg(['Before the trip, enter and save the coordinates of all your waypoints.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Before the trip, enter and save the coordinates of all your waypoints.”',
      options: opts('salvar as coordenadas dos waypoints', ['desligar o rádio', 'trocar a bateria do caminhão', 'ligar para o gerente']),
      expl: 'Enter and save the coordinates.'
    },
    {
      ui: 'choice', cat: 'lis', srsId: 'u5:l:gps4',
      title: '🎧 Depois de selecionar o waypoint e GOTO, você…',
      tts: dlg(['Select the first waypoint, then select GOTO, and follow the bearing.']),
      ttsLabel: '🔊 Ouvir', showIfNoTTS: '“Select the waypoint, select GOTO, and follow the bearing.”',
      options: opts('segue o bearing (rumo)', ['espera o gerente', 'desliga o GPS', 'volta ao caminhão']),
      expl: 'Follow the bearing — o rumo em graus.'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u5:f:gps5',
      title: '📻 No rádio: “What are your coordinates?” pede…', main: null,
      options: opts('latitude e longitude', ['a hora', 'o nome do chefe', 'a velocidade do vento']),
      expl: 'coordinates = latitude + longitude.',
      feedbackTts: 'What are your coordinates?'
    }
  ];

  // ---------- READING: exploração sísmica (autoral) ----------
  const READ_TEXT =
    'How to find oil traps\n\n' +
    'Drilling is expensive, so companies plan carefully before they drill. First they make 3D maps of the rocks below the surface, then they look for possible oil traps.\n\n' +
    'How do they see below the surface? The answer is seismic waves — sound waves that travel through rock layers.\n\n' +
    'Vibrator trucks make vibrations on the surface, and the vibrations send waves down. Each rock layer reflects some of the waves. The reflected waves travel back up to geophones, which convert them into electrical signals. A machine in the recording truck records the signals, and computers convert them into 3D maps.\n\n' +
    'At sea, the crew uses hydrophones and an underwater gun instead.';

  const READ1 = [
    {
      ui: 'choice', cat: 'rea', srsId: 'u5:r:se1',
      title: '📖 Why do companies plan before drilling?', main: null,
      options: opts('Because drilling is expensive', ['Because it is illegal', 'Because they are slow', 'Because rocks are heavy']),
      expl: 'Perfurar custa caro → planejar primeiro.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u5:r:se2',
      title: '📖 What makes the seismic waves on land?', main: null,
      options: opts('Vibrator trucks', ['Helicopters', 'Geologists singing', 'The sun']),
      expl: 'Vibrator trucks fazem as vibrações.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u5:r:se3',
      title: '📖 What do geophones do?', main: null,
      options: opts('Convert waves into electrical signals', ['Drill the well', 'Sell the oil', 'Cook for the crew']),
      expl: 'Geophones são como microfones: onda → sinal elétrico.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u5:r:se4',
      title: '📖 True or false?', main: '“Seismic waves can\'t travel through rock.”',
      options: opts('False', ['True']),
      expl: 'Falso: ondas sísmicas ATRAVESSAM as camadas de rocha.'
    },
    {
      ui: 'choice', cat: 'rea', srsId: 'u5:r:se5',
      title: '📖 What do crews use at sea instead of geophones?', main: null,
      options: opts('Hydrophones', ['Telephones', 'Megaphones', 'Headphones']),
      expl: 'No mar: hydrophones + canhão de ar submarino.'
    }
  ];

  const PHRASES = [
    {
      ui: 'choice', cat: 'fun', srsId: 'u5:f:spec1',
      title: '🧰 Para perguntar as dimensões de um equipamento:', main: null,
      options: opts('What are the dimensions?', ['What size has it made?', 'How big it is the measure?', 'Which dimension it?']),
      expl: '“What are the dimensions?” — 54 by 140 by 25 mm.',
      feedbackTts: 'What are the dimensions?'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u5:f:spec2',
      title: '🧰 “How many channels does it have?” pergunta sobre uma…', main: null,
      options: opts('especificação (specs) do rádio', ['refeição', 'placa de segurança', 'nacionalidade']),
      expl: 'Perguntas de spec: channels, weight, range, battery life…'
    },
    {
      ui: 'choice', cat: 'fun', srsId: 'u5:f:spec3',
      title: '🧰 “1 m by 2 m by 4 m” lê-se…', main: null,
      options: opts('one metre by two metres by four metres', ['one two four metres', 'one metre and two and four', 'metre one for metre two']),
      expl: 'Dimensões: use “by” entre os números.'
    }
  ];

  const SPELL = [
    {
      ui: 'choice', cat: 'spl', srsId: 'u5:s:st1',
      title: '🗣️ Sentence stress — qual palavra é mais forte?', main: 'That\'s very IMPORTANT.',
      options: opts('important (a mais informativa)', ['that', 'very only', 'apostrophe s']),
      expl: 'Stress cai na palavra mais importante para o sentido.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u5:s:st2',
      title: '🔤 Qual está escrita corretamente?', main: null,
      options: opts('coordinates', ['coordenates', 'cordinates', 'coordinats']),
      expl: 'coordinates — dois O, um I.'
    },
    {
      ui: 'choice', cat: 'spl', srsId: 'u5:s:nato1',
      title: '📻 Rádio NATO: “Whiskey · Alpha · Victor · Echo” soletra…', main: null,
      options: opts('WAVE', ['WAKE', 'WIFE', 'WAVY']),
      expl: 'W-A-V-E = wave (onda).'
    }
  ];

  // ---------- MISSÕES ----------
  const MISSIONS = {
    background: {
      brief: '800 m. Antes de perfurar, é preciso ENXERGAR a rocha — sem cavar. Bem-vindo à ciência da exploração: sísmica, geologia e GPS.',
      items: [
        {
          ui: 'cards', cat: 'voc',
          title: '🧭 Briefing — as palavras da estação:',
          cards: [
            { en: 'seismic waves', pt: 'ondas sísmicas', def: 'Sound waves that travel through rock.', tts: 'seismic waves' },
            { en: 'layer', pt: 'camada', def: 'Rocks live in layers below the surface.' },
            { en: 'oil trap', pt: 'trapa de óleo', def: 'A rock structure that holds oil and gas.' },
            { en: 'geophone', pt: 'geofone', def: 'It hears the reflected waves.' },
            { en: 'GPS', pt: 'posicionamento global', def: 'Your exact position — and the way to the next point.', tts: 'G P S' },
            { en: 'coordinates', pt: 'coordenadas', def: 'Latitude and longitude.' }
          ]
        },
        {
          ui: 'read', cat: 'rea', info: true,
          title: '🔍 Ver sem cavar',
          textTitle: 'Finding oil and gas',
          text: 'You can\'t see oil and gas — they hide deep in the rock. So exploration teams use science.\n\nSeismic waves show the shape of the rock layers. GPS puts every measurement in the exact right place. Geologists and geophysicists read the 3D maps and look for oil traps.\n\nOnly then does the company decide where to drill. Science first, drilling second.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u5:v:seismic',
          sp: { g: 'venpt', en: 'seismic', u: 5 },
          title: '📦 “Seismic waves” são…', main: null,
          options: opts('ondas de som que atravessam a rocha', ['ondas do mar', 'ondas de rádio', 'ondas de calor']),
          expl: 'Seismic = sísmico: som que viaja pela rocha.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u5:r:bg1',
          title: '🔍 O que vem PRIMEIRO?', main: null,
          options: opts('a exploração (ciência)', ['a perfuração', 'a produção', 'a venda']),
          expl: 'Science first: explorar antes de perfurar.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u5:v:trap',
          sp: { g: 'venpt', en: 'oil trap', u: 5 },
          title: '📦 Um “oil trap” é…', main: null,
          options: opts('uma estrutura de rocha que segura óleo e gás', ['uma armadilha para ladrões', 'um tipo de válvula', 'um caminhão']),
          expl: 'trap = armadilha/trapa geológica.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Background',
        brief: 'Grave 3 frases: como as empresas encontram petróleo. Modelo: "Companies use seismic waves. Geophones hear the waves. GPS gives the position."',
        waText: 'Registro: 3 sentences — finding oil.'
      }
    },

    kickoff: {
      brief: 'Nesta unidade: ciência da exploração, sentence stress, ordem das palavras, ouvir instruções e discutir especificações. Primeiro: quem estuda o quê?',
      items: [
        {
          ui: 'match', cat: 'voc', srsId: 'u5:v:ko1',
          title: '🔍 Ligue o cientista ao objeto de estudo:',
          pairs: [['geologist', 'rocks'], ['physicist', 'physics'], ['geophysicist', 'rocks + physics'], ['survey crew', 'measurements']],
          expl: 'geo = terra/rocha · physics = física.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u5:v:ko2',
          title: '🔍 Qual rocha pode SEGURAR óleo, água e gás?', main: null,
          options: opts('porous rock (rocha porosa)', ['hard solid rock', 'glass', 'plastic']),
          expl: 'Rocha porosa tem espaços — segura os fluidos.'
        },
        {
          ui: 'choice', cat: 'voc', srsId: 'u5:v:ko3',
          title: '🔍 Por que o gás fica ACIMA do óleo na trapa?', main: null,
          options: opts('porque o gás é mais leve', ['porque o gás é mais pesado', 'porque o óleo empurra para baixo', 'por acaso']),
          expl: 'Gás (leve) sobe, óleo no meio, água (pesada) embaixo.'
        },
        {
          ui: 'order', cat: 'gra', srsId: 'u5:g:ko4',
          title: '🔧 Monte a frase:', answer: 'Seismic waves travel through rock',
          expl: 'sujeito + verbo + complemento.'
        }
      ]
    },

    vocab1: {
      brief: 'A ciência em cartões: ondas, camadas, reflexão — e os verbos convert, reflect, record.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'voc',
            title: '📦 A ciência da sísmica:',
            cards: [
              { en: 'vibration', pt: 'vibração', def: 'Trucks make vibrations on the surface.' },
              { en: 'wave', pt: 'onda', def: 'Vibrations become waves that go down.' },
              { en: 'reflect', pt: 'refletir', def: 'Each layer reflects some waves back up.' },
              { en: 'convert', pt: 'converter', def: 'Geophones convert waves into signals.' },
              { en: 'signal', pt: 'sinal', def: 'An electrical message to the truck.' },
              { en: 'record', pt: 'gravar', def: 'The truck records the signals.' }
            ]
          },
          {
            ui: 'match', cat: 'voc', srsId: 'u5:v:sci1',
            title: '📦 Ligue o verbo ao objeto:',
            pairs: [['reflect', 'the waves'], ['convert', 'waves into signals'], ['record', 'the data'], ['make', 'vibrations']],
            expl: 'Os verbos da cadeia sísmica.'
          },
          {
            ui: 'choice', cat: 'voc', srsId: 'u5:v:sci2',
            title: '📦 O geofone funciona como um…', main: null,
            options: opts('microfone', ['alto-falante', 'motor', 'freio']),
            expl: 'Geophone converte onda em sinal, como um microfone.'
          }
        ];
        DF.pickN(GLOSSARY.slice(0, 10), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vradar(v, POOL, rnd, 5));
        });
        DF.pickN(GLOSSARY.slice(6, 10), 2, rnd).forEach(function (v) {
          items.push(DF.MECH.GEN.vtype(v, POOL, rnd, 5));
        });
        return items;
      }
    },

    read1: {
      brief: 'O processo da sísmica, passo a passo: do caminhão vibrador aos mapas 3D. Leia e explique.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '📖 Leia com atenção:',
          textTitle: 'Seismic exploration',
          text: READ_TEXT
        }
      ].concat(READ1)
    },

    job: {
      brief: "It's my job: Diego Moraes carrega geofones e um GPS pelo campo — o geotécnico da equipe de sísmica.",
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: "👷 It's my job",
          textTitle: 'Diego Moraes — geotechnician',
          text: "I'm Diego Moraes, a geotechnician in a seismic survey crew. On my back I carry geophones, and in my hand I hold a GPS unit.\n\nI use the GPS to put every geophone in exactly the right place — if the position is wrong, the map is wrong. The different crews communicate by radio.\n\nThis job is hard work: I walk a lot and carry heavy things, so I must be fit. But I love it — being outside, seeing different places, and working in a team. And the money's good too."
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u5:r:job1',
          title: '👷 What does Diego carry on his back?', main: null,
          options: opts('Geophones', ['A crane', 'A tanker', 'Boxes of fuel']),
          expl: 'Geofones nas costas, GPS na mão.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u5:r:job2',
          title: '👷 Why must the position be exact?', main: null,
          options: opts('Because a wrong position makes a wrong map', ['Because the GPS is heavy', 'Because the boss is watching', 'It doesn\'t matter']),
          expl: 'Posição errada → mapa errado. Precisão é tudo.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u5:r:job3',
          title: '👷 How do the crews communicate?', main: null,
          options: opts('By radio', ['By letters', 'By smoke', 'They don\'t']),
          expl: 'As equipes se falam por rádio.'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u5:r:job4',
          title: '👷 Why must he be fit?', main: null,
          options: opts('He walks a lot and carries heavy things', ['He runs marathons', 'He lifts weights at the gym', 'He swims to work']),
          expl: 'Trabalho de campo pesado → precisa de preparo físico.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio',
        brief: 'Grave: você gostaria do trabalho do Diego? Diga 2 coisas boas e 1 difícil. ("I like it because… but…")',
        waText: 'Registro: opinião sobre o trabalho do geotécnico.'
      }
    },

    pron: {
      brief: 'Sentence stress: em inglês, marcamos com força as palavras que carregam a informação. Ouça e sinta o ritmo.',
      items: [
        {
          ui: 'cards', cat: 'pro',
          title: '🗣️ As palavras fortes da frase:',
          cards: [
            { en: "We must put the GEOPHONES in the right PLACE.", pt: 'força em geophones e place', def: 'Palavras de conteúdo recebem stress.', tts: 'We must put the geophones in the right place.' },
            { en: "The GPS tells you your exact POSITION.", pt: 'força em GPS e position', def: 'Substantivos e verbos principais: fortes.', tts: 'The GPS tells you your exact position.' },
            { en: "That's very imPORtant.", pt: 'força em important', def: 'A palavra mais informativa domina.', tts: "That's very important." }
          ]
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u5:p:ss1',
          title: '🗣️ Ouça: qual palavra recebe MAIS força?',
          tts: 'We read the data carefully.', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“We read the DATA carefully.”',
          options: opts('data', ['we', 'the', 'ly']),
          expl: 'data = a informação central da frase.', feedbackTts: 'We read the data carefully.'
        },
        {
          ui: 'choice', cat: 'pro', srsId: 'u5:p:ss2',
          title: '🗣️ Ouça: qual recebe força?',
          tts: 'So we all have a GPS unit.', ttsLabel: '🔊 Ouvir', showIfNoTTS: '“So we all have a GPS unit.”',
          options: opts('GPS', ['so', 'we', 'a']),
          expl: 'GPS carrega a informação nova.', feedbackTts: 'So we all have a GPS unit.'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u5:sp:pron1', unit: 5, waSec: 'Pronunciation',
          title: '🎤 Fale marcando as palavras fortes:',
          target: 'The GPS tells you your exact position.',
          ptHint: 'Força em GPS e position.'
        }
      ]
    },

    lang1: { brief: 'A ordem das palavras: sujeito, verbo, objeto — e onde o advérbio pode (e não pode) entrar.\n\n(Formatos: estrutura de frase do EGU — adaptados ao campo.)', items: LANG1 },

    write: {
      brief: 'Frases de verdade: maiúscula no início, ponto no fim, e maiúscula nos nomes. O básico que separa amador de profissional.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '✍️ As regras da frase escrita',
          textTitle: 'Writing sentences',
          text: 'Sentences always begin with a capital letter.\nStatements end with a full stop (.).\nQuestions end with a question mark (?).\nImperatives end with a full stop or an exclamation mark (!).\n\nNames of people and places always have capital letters too: Diego, Brazil, Santos Basin.\n\nBrE "full stop" = AmE "period".'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u5:g:wr1',
          title: '✍️ Qual frase está pontuada corretamente?', main: null,
          options: opts('What are your coordinates?', ['what are your coordinates.', 'What are your coordinates', 'what are your coordinates?']),
          expl: 'Pergunta: maiúscula no início + ponto de interrogação.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u5:g:wr2',
          title: '✍️ Qual está correta?', main: null,
          options: opts('Diego works in Brazil.', ['diego works in brazil.', 'Diego works in brazil', 'diego Works In Brazil.']),
          expl: 'Nomes de pessoa e país com maiúscula; ponto no fim.'
        },
        {
          ui: 'choice', cat: 'gra', srsId: 'u5:g:wr3',
          title: '✍️ Qual termina uma imperativa?', main: 'Follow the bearing___',
          options: opts('. ou ! ', ['?', 'nenhum sinal', 'vírgula sempre']),
          expl: 'Imperativa: ponto final ou exclamação.'
        }
      ],
      task: {
        type: 'writing',
        title: '✍️ Writing — 3 frases pontuadas',
        brief: 'Escreva 1 afirmação, 1 pergunta e 1 imperativa sobre exploração — com a pontuação certa.',
        btn: '✍️ Escrever e enviar',
        fields: [
          { label: 'Statement (.)', ph: 'ex.: Companies make 3D maps.', rows: 2 },
          { label: 'Question (?)', ph: 'ex.: What are your coordinates?', rows: 2 },
          { label: 'Imperative (. ou !)', ph: 'ex.: Follow the bearing!', rows: 2 }
        ]
      }
    },

    num: {
      brief: 'Posicionamento global: latitude, longitude, bearing e heading — os números que dizem onde você está e para onde vai.',
      build: function (rnd) {
        const items = [
          {
            ui: 'cards', cat: 'num',
            title: '🔢 A tela do GPS:',
            cards: [
              { en: 'latitude / longitude', pt: 'latitude / longitude', def: '18.5415° by 54.9220° — your coordinates.', tts: 'latitude and longitude' },
              { en: 'heading', pt: 'proa (para onde vai agora)', def: 'The direction you are moving now.', tts: 'heading' },
              { en: 'bearing', pt: 'rumo (para o alvo)', def: 'The correct direction to the target.', tts: 'bearing' },
              { en: 'waypoint', pt: 'ponto de referência', def: 'Distance to next waypoint: 46 metres.', tts: 'waypoint' }
            ]
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u5:n:gps1',
            title: '🔢 Heading 347°, correct bearing 322°. Você precisa virar…', main: null,
            options: opts('24 graus à esquerda', ['24 graus à direita', '347 graus', 'nada, está certo']),
            expl: '347 − 322 = 25 (o texto arredonda para 24): vá à esquerda.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u5:n:gps2',
            title: '🔢 “Distance to next: 0046 m” significa…', main: null,
            options: opts('46 metros até o próximo ponto', ['46 km', '4600 m', '0.46 m']),
            expl: '0046 m = 46 metros.'
          },
          {
            ui: 'choice', cat: 'num', srsId: 'u5:n:gps3',
            title: '🔢 “322 degrees” lê-se…', main: null,
            options: opts('three hundred and twenty-two degrees', ['thirty-two two degrees', 'three two two degree', 'triple two degrees']),
            expl: 'Graus como número normal: 322 = three hundred and twenty-two.'
          }
        ];
        for (let i = 0; i < 4; i++) {
          items.push(DF.NUM.genItem({ types: ['int', 'qty'], max: 999, rnd: rnd, diff: 1 }));
        }
        return items;
      }
    },

    lang2: { brief: 'Pronomes: sujeito (I, he, they) × objeto (me, him, them) — e nunca repita nome + pronome.\n\n(Formatos: EGU Units 59-60 — adaptados.)', items: LANG2 },

    listen1: {
      brief: 'Instruções de GPS: um trainee aprendendo a navegar. Ouça e complete as notas.',
      items: LISTEN1,
      script: SCRIPT
    },

    speak: {
      brief: 'Discutindo especificações: escolher o rádio certo para o campo, comparando specs.',
      items: [
        {
          ui: 'read', cat: 'rea', info: true,
          title: '💬 A ficha técnica (specs)',
          textTitle: 'The T60 two-way radio',
          text: 'channels: 6\ndimensions: 54 × 140 × 25 mm\nweight: 190 g\nmaximum range: 18 km\nbattery life: 36 hours\nwater resistant: no\nshock resistant: yes\ndust resistant: yes'
        },
        {
          ui: 'choice', cat: 'rea', srsId: 'u5:r:spk1',
          title: '💬 Sandro trabalha 36h fora da base, na chuva. Este rádio serve?', main: null,
          options: opts('Não totalmente — não é water resistant', ['Sim, perfeito em tudo', 'Não — a bateria só dura 1h', 'Não — não tem canais']),
          expl: 'Bateria (36h) e choque OK, mas não resiste à água (chuva).'
        },
        {
          ui: 'choice', cat: 'fun', srsId: 'u5:f:spk2',
          title: '💬 Para perguntar a autonomia da bateria:', main: null,
          options: opts("What's the battery life?", ['How the battery lives?', 'When battery die?', 'Battery is how much life?']),
          expl: 'battery life = autonomia.',
          feedbackTts: "What's the battery life?"
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u5:sp:speak1', unit: 5, waSec: 'Speaking',
          title: '🎤 Pergunte uma spec:',
          target: 'How many channels does it have?',
          ptHint: 'Quantos canais ele tem?'
        },
        {
          ui: 'speak', cat: 'pro', srsId: 'u5:sp:speak2', unit: 5, waSec: 'Speaking',
          title: '🎤 Diga as dimensões:',
          target: "It's fifty-four by one hundred and forty by twenty-five millimetres.",
          ptHint: '54 by 140 by 25 mm.'
        }
      ],
      task: {
        type: 'audio',
        title: '🎙️ Registro de Áudio — Speaking',
        brief: 'Grave: escolha um rádio para alguém que trabalha na chuva e explique por quê ("It is shock resistant, but it is not water resistant, so…").',
        waText: 'Registro: escolha de rádio + specs.'
      }
    },

    check: { brief: 'Autoavaliação da estação Finding Oil and Gas.', checklist: true },

    keywords: {
      brief: 'As 15 keywords da Unit 5 entram para o Glossário.',
      build: function (rnd) {
        const items = [{
          ui: 'cards', cat: 'voc',
          title: '🗝️ Keywords da Unit 5:',
          cards: GLOSSARY.map(function (g2) { return { en: g2.en, pt: g2.pt, def: g2.def }; })
        }];
        DF.pickN(GLOSSARY, 4, rnd).forEach(function (g2) {
          const decoys = DF.pickN(GLOSSARY.filter(function (x) { return x.en !== g2.en; }), 3, rnd)
            .map(function (x) { return x.en; });
          items.push({
            ui: 'choice', cat: 'voc', srsId: 'u5:v:' + g2.en,
            sp: { g: 'venpt', en: g2.en, u: 5 },
            title: '🗝️ Qual keyword corresponde à definição:',
            main: g2.def,
            options: DF.MECH.mkOpts(g2.en, decoys, rnd),
            expl: g2.en + ' = ' + g2.pt, feedbackTts: g2.en
          });
        });
        DF.pickN(GLOSSARY, 2, rnd).forEach(function (g2) {
          items.push(DF.MECH.GEN.vpten(g2, POOL, rnd, 5));
        });
        return items;
      }
    }
  };

  const CHECKLIST = [
    'I know key words in geology, physics, and exploration technology.',
    'I can use sentence stress.',
    'I know some rules about sentence structure and word order.',
    'I can use subject and object pronouns.',
    'I can talk about GPS, positioning, and navigation.',
    'I can understand spoken instructions.',
    'I can discuss specifications.'
  ];

  DF.UNIT_DATA[5] = {
    glossary: GLOSSARY,
    extraVocab: TOOLS,
    missions: MISSIONS,
    checklist: CHECKLIST,
    grammarPool: LANG1.concat(LANG2),
    listenPool: LISTEN1,
    readPool: READ1,
    phrasePool: PHRASES,
    spellPool: SPELL,
    numbers: { types: ['int', 'qty'], max: 999 }
  };
})(typeof window !== 'undefined' ? window : globalThis);
