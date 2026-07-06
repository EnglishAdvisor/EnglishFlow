/* A Maldição da Cuca — data.js
   Bancos de conteúdo, parte 1: vocabulário por tema, frases graduadas, pares mínimos. */
(function (root) {
  const G = root.G = root.G || {};
  const D = G.DATA = G.DATA || {};

  // ---------------- VOCABULÁRIO POR TEMA (en, pt) ----------------
  D.THEMES = {
    comida: { pt: 'Comida', words: [
      ['apple', 'maçã'], ['chicken', 'frango'], ['rice', 'arroz'], ['beans', 'feijão'],
      ['bread', 'pão'], ['cheese', 'queijo'], ['egg', 'ovo'], ['milk', 'leite'],
      ['juice', 'suco'], ['meat', 'carne'], ['fish', 'peixe'], ['salt', 'sal'],
      ['sugar', 'açúcar'], ['cake', 'bolo'], ['soup', 'sopa'], ['grape', 'uva']
    ]},
    animais: { pt: 'Animais', words: [
      ['monkey', 'macaco'], ['snake', 'cobra'], ['spider', 'aranha'], ['turtle', 'tartaruga'],
      ['wolf', 'lobo'], ['fox', 'raposa'], ['bear', 'urso'], ['owl', 'coruja'],
      ['duck', 'pato'], ['rabbit', 'coelho'], ['sheep', 'ovelha'], ['mouse', 'rato'],
      ['whale', 'baleia'], ['shark', 'tubarão'], ['ant', 'formiga'], ['bee', 'abelha']
    ]},
    viagem: { pt: 'Viagem', words: [
      ['flight', 'voo'], ['ticket', 'passagem'], ['luggage', 'bagagem'], ['passport', 'passaporte'],
      ['trip', 'viagem'], ['map', 'mapa'], ['train', 'trem'], ['road', 'estrada'],
      ['beach', 'praia'], ['island', 'ilha'], ['backpack', 'mochila'], ['arrival', 'chegada'],
      ['departure', 'partida'], ['seat', 'assento'], ['customs', 'alfândega'], ['abroad', 'no exterior']
    ]},
    casa: { pt: 'Casa', words: [
      ['kitchen', 'cozinha'], ['bedroom', 'quarto'], ['bathroom', 'banheiro'], ['roof', 'telhado'],
      ['wall', 'parede'], ['floor', 'chão'], ['window', 'janela'], ['door', 'porta'],
      ['key', 'chave'], ['couch', 'sofá'], ['stove', 'fogão'], ['fridge', 'geladeira'],
      ['mirror', 'espelho'], ['stairs', 'escada'], ['towel', 'toalha'], ['pillow', 'travesseiro']
    ]},
    trabalho: { pt: 'Trabalho', words: [
      ['job', 'emprego'], ['meeting', 'reunião'], ['boss', 'chefe'], ['salary', 'salário'],
      ['skill', 'habilidade'], ['task', 'tarefa'], ['deadline', 'prazo'], ['hire', 'contratar'],
      ['coworker', 'colega de trabalho'], ['office', 'escritório'], ['schedule', 'agenda'],
      ['raise', 'aumento'], ['interview', 'entrevista'], ['career', 'carreira'],
      ['customer', 'cliente'], ['wage', 'remuneração']
    ]},
    corpo: { pt: 'Corpo', words: [
      ['head', 'cabeça'], ['eye', 'olho'], ['mouth', 'boca'], ['tooth', 'dente'],
      ['hand', 'mão'], ['foot', 'pé'], ['knee', 'joelho'], ['shoulder', 'ombro'],
      ['elbow', 'cotovelo'], ['hair', 'cabelo'], ['heart', 'coração'], ['skin', 'pele'],
      ['bone', 'osso'], ['blood', 'sangue'], ['finger', 'dedo'], ['neck', 'pescoço']
    ]},
    roupas: { pt: 'Roupas', words: [
      ['shirt', 'camisa'], ['pants', 'calça'], ['shoes', 'sapatos'], ['dress', 'vestido'],
      ['skirt', 'saia'], ['coat', 'casaco'], ['hat', 'chapéu'], ['socks', 'meias'],
      ['belt', 'cinto'], ['gloves', 'luvas'], ['scarf', 'cachecol'], ['tie', 'gravata'],
      ['underwear', 'roupa íntima'], ['sleeve', 'manga'], ['pocket', 'bolso'], ['button', 'botão']
    ]},
    natureza: { pt: 'Natureza', words: [
      ['tree', 'árvore'], ['leaf', 'folha'], ['river', 'rio'], ['mountain', 'montanha'],
      ['sky', 'céu'], ['star', 'estrela'], ['moon', 'lua'], ['sun', 'sol'],
      ['rain', 'chuva'], ['wind', 'vento'], ['seed', 'semente'], ['flower', 'flor'],
      ['forest', 'floresta'], ['waterfall', 'cachoeira'], ['lightning', 'relâmpago'], ['rainbow', 'arco-íris']
    ]},
    cidade: { pt: 'Cidade', words: [
      ['street', 'rua'], ['sidewalk', 'calçada'], ['building', 'prédio'], ['bridge', 'ponte'],
      ['corner', 'esquina'], ['traffic', 'trânsito'], ['crosswalk', 'faixa de pedestres'],
      ['subway', 'metrô'], ['mall', 'shopping'], ['bakery', 'padaria'], ['butcher shop', 'açougue'],
      ['city hall', 'prefeitura'], ['neighborhood', 'bairro'], ['downtown', 'centro da cidade'],
      ['crowd', 'multidão'], ['bus stop', 'ponto de ônibus']
    ]},
    clima: { pt: 'Clima', words: [
      ['weather', 'tempo (clima)'], ['cloud', 'nuvem'], ['fog', 'neblina'], ['storm', 'tempestade'],
      ['snow', 'neve'], ['ice', 'gelo'], ['heat', 'calor'], ['cold', 'frio'],
      ['dry', 'seco'], ['wet', 'molhado'], ['warm', 'morno'], ['cool', 'fresco'],
      ['sunrise', 'nascer do sol'], ['sunset', 'pôr do sol'], ['season', 'estação do ano'], ['drought', 'seca']
    ]},
    familia: { pt: 'Família', words: [
      ['mother', 'mãe'], ['father', 'pai'], ['son', 'filho'], ['daughter', 'filha'],
      ['brother', 'irmão'], ['sister', 'irmã'], ['grandmother', 'avó'], ['grandfather', 'avô'],
      ['uncle', 'tio'], ['aunt', 'tia'], ['cousin', 'primo(a)'], ['nephew', 'sobrinho'],
      ['niece', 'sobrinha'], ['wife', 'esposa'], ['husband', 'marido'], ['twins', 'gêmeos']
    ]}
  };

  // lista achatada [en, pt, tema] para sorteios rápidos
  D.VOCAB_ALL = [];
  Object.keys(D.THEMES).forEach(function (t) {
    D.THEMES[t].words.forEach(function (w) { D.VOCAB_ALL.push([w[0], w[1], t]); });
  });
  D.vocabByEn = function (en) {
    for (let i = 0; i < D.VOCAB_ALL.length; i++) if (D.VOCAB_ALL[i][0] === en) return D.VOCAB_ALL[i];
    return null;
  };

  // ---------------- FRASES (montar / ouvir e escrever) ----------------
  // lv 1 = curtas, 2 = médias, 3 = longas
  D.SENTENCES = [
    { en: 'I wake up early', pt: 'Eu acordo cedo', lv: 1 },
    { en: 'She has two dogs', pt: 'Ela tem dois cachorros', lv: 1 },
    { en: 'We are from Brazil', pt: 'Nós somos do Brasil', lv: 1 },
    { en: 'He works at night', pt: 'Ele trabalha à noite', lv: 1 },
    { en: 'The cat is sleeping', pt: 'O gato está dormindo', lv: 1 },
    { en: 'I love this song', pt: 'Eu amo esta música', lv: 1 },
    { en: 'The water is very cold', pt: 'A água está muito gelada', lv: 1 },
    { en: 'My house is small', pt: 'Minha casa é pequena', lv: 1 },
    { en: 'You speak English well', pt: 'Você fala inglês bem', lv: 1 },
    { en: 'Open the door, please', pt: 'Abra a porta, por favor', lv: 1 },
    { en: 'The moon is beautiful tonight', pt: 'A lua está linda esta noite', lv: 1 },
    { en: 'I need a new phone', pt: 'Eu preciso de um celular novo', lv: 1 },
    { en: 'Where is the bathroom?', pt: 'Onde fica o banheiro?', lv: 1 },
    { en: 'How much is this?', pt: 'Quanto custa isto?', lv: 1 },
    { en: 'They play soccer on Sundays', pt: 'Eles jogam futebol aos domingos', lv: 1 },
    { en: 'My brother likes horror movies', pt: 'Meu irmão gosta de filmes de terror', lv: 1 },

    { en: 'She does not like horror movies', pt: 'Ela não gosta de filmes de terror', lv: 2 },
    { en: 'We went to the beach yesterday', pt: 'Nós fomos à praia ontem', lv: 2 },
    { en: 'Can you help me find my keys?', pt: 'Você pode me ajudar a achar minhas chaves?', lv: 2 },
    { en: 'He always forgets his umbrella at home', pt: 'Ele sempre esquece o guarda-chuva em casa', lv: 2 },
    { en: 'I would like a coffee with milk, please', pt: 'Eu gostaria de um café com leite, por favor', lv: 2 },
    { en: 'The meeting starts at nine tomorrow', pt: 'A reunião começa às nove amanhã', lv: 2 },
    { en: 'There is a spider in my shoe', pt: 'Tem uma aranha no meu sapato', lv: 2 },
    { en: 'Turn off the lights before you leave', pt: 'Apague as luzes antes de sair', lv: 2 },
    { en: 'I ran out of money last week', pt: 'Fiquei sem dinheiro semana passada', lv: 2 },
    { en: 'My grandmother makes the best cake in town', pt: 'Minha avó faz o melhor bolo da cidade', lv: 2 },
    { en: 'What time does the last train leave?', pt: 'A que horas sai o último trem?', lv: 2 },
    { en: 'I have never seen snow in my life', pt: 'Eu nunca vi neve na minha vida', lv: 2 },
    { en: 'Could you speak a little slower, please?', pt: 'Você poderia falar um pouco mais devagar, por favor?', lv: 2 },
    { en: 'The forest gets dark very quickly', pt: 'A floresta escurece muito rápido', lv: 2 },

    { en: 'If I had studied harder, I would have passed the test', pt: 'Se eu tivesse estudado mais, teria passado na prova', lv: 3 },
    { en: 'She told me she would call when she arrived', pt: 'Ela me disse que ligaria quando chegasse', lv: 3 },
    { en: 'I have never seen a monster as ugly as this one', pt: 'Eu nunca vi um monstro tão feio quanto este', lv: 3 },
    { en: 'The legend says the Cuca never sleeps at night', pt: 'A lenda diz que a Cuca nunca dorme à noite', lv: 3 },
    { en: 'Even though it was raining, we decided to walk home', pt: 'Mesmo chovendo, decidimos ir andando para casa', lv: 3 },
    { en: 'By the time you read this, I will have escaped', pt: 'Quando você ler isto, eu já terei escapado', lv: 3 },
    { en: 'He has been studying English for almost two years', pt: 'Ele estuda inglês há quase dois anos', lv: 3 },
    { en: 'Nobody knows exactly where the mermaid hides her treasure', pt: 'Ninguém sabe exatamente onde a sereia esconde seu tesouro', lv: 3 },
    { en: 'You should have listened to your grandmother about the woods', pt: 'Você devia ter dado ouvidos à sua avó sobre a mata', lv: 3 },
    { en: 'The faster you answer, the stronger your spell becomes', pt: 'Quanto mais rápido você responde, mais forte fica seu feitiço', lv: 3 }
  ];

  // ---------------- PARES MÍNIMOS (pronúncia / listening) ----------------
  D.MINPAIRS = [
    { a: 'ship', apt: 'navio', b: 'sheep', bpt: 'ovelha' },
    { a: 'hit', apt: 'bater', b: 'heat', bpt: 'calor' },
    { a: 'sit', apt: 'sentar', b: 'seat', bpt: 'assento' },
    { a: 'fill', apt: 'encher', b: 'feel', bpt: 'sentir' },
    { a: 'live', apt: 'viver', b: 'leave', bpt: 'partir' },
    { a: 'chip', apt: 'lasca / batatinha', b: 'cheap', bpt: 'barato' },
    { a: 'slip', apt: 'escorregar', b: 'sleep', bpt: 'dormir' },
    { a: 'three', apt: 'três', b: 'tree', bpt: 'árvore' },
    { a: 'think', apt: 'pensar', b: 'sink', bpt: 'pia / afundar' },
    { a: 'thick', apt: 'grosso', b: 'sick', bpt: 'doente' },
    { a: 'bat', apt: 'morcego', b: 'bet', bpt: 'aposta' },
    { a: 'man', apt: 'homem', b: 'men', bpt: 'homens' },
    { a: 'fun', apt: 'diversão', b: 'fan', bpt: 'ventilador / fã' },
    { a: 'hat', apt: 'chapéu', b: 'hut', bpt: 'cabana' },
    { a: 'hurt', apt: 'machucar', b: 'heart', bpt: 'coração' },
    { a: 'walk', apt: 'andar', b: 'work', bpt: 'trabalhar' },
    { a: 'law', apt: 'lei', b: 'low', bpt: 'baixo' },
    { a: 'coast', apt: 'costa', b: 'cost', bpt: 'custo' },
    { a: 'full', apt: 'cheio', b: 'fool', bpt: 'tolo' },
    { a: 'pull', apt: 'puxar', b: 'pool', bpt: 'piscina' },
    { a: 'hair', apt: 'cabelo', b: 'air', bpt: 'ar' },
    { a: 'eat', apt: 'comer', b: 'heat', bpt: 'calor' },
    { a: 'hold', apt: 'segurar', b: 'old', bpt: 'velho' },
    { a: 'hear', apt: 'ouvir', b: 'ear', bpt: 'orelha' },
    { a: 'snack', apt: 'lanche', b: 'snake', bpt: 'cobra' },
    { a: 'angry', apt: 'bravo', b: 'hungry', bpt: 'com fome' }
  ];
  D.mpByWord = function (w) {
    for (let i = 0; i < D.MINPAIRS.length; i++) if (D.MINPAIRS[i].a === w) return D.MINPAIRS[i];
    return null;
  };
})(typeof window !== 'undefined' ? window : globalThis);
