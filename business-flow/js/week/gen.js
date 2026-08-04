/* ENGLISH FLOW — week/gen.js
   GERADOR DE EXERCÍCIOS PARALELOS.

   A ideia: a fonte de cada semana (as frases-base do livro) é pequena, mas as
   TÉCNICAS de drill são poucas e mecânicas. Combinando as duas coisas dá pra
   gerar muitos exercícios — trocando nome, cargo, lugar e detalhe — sem
   escrever cada um à mão.

   Ganhos:
     · quem refaz o passo pega variações diferentes (não decora a ordem)
     · o "praticar mais" nunca acaba
     · uma unidade nova custa pools, não centenas de linhas de exercício

   Tudo é semeável (DF.mulberry): com a mesma semente, o mesmo exercício —
   é o que permite o professor mandar um drill específico por código. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const G = DF.WGEN = {};

  // Semente automática: relógio + contador. O contador é essencial — duas
  // chamadas no mesmo milissegundo pegariam a mesma semente e o "treino
  // infinito" devolveria exatamente o mesmo exercício.
  let tick = 0;
  G.autoSeed = function () { return ((Date.now() & 0xffffff) + (++tick) * 7919) >>> 0; };

  // ── pools de substituição (o "detalhe pequeno" que troca) ──
  G.POOLS = {
    name: ['Beatriz', 'Tom', 'Aisha', 'Hendrik', 'Camila', 'Yuki', 'Marco', 'Ana',
           'Jorge', 'Roberto', 'Marta', 'Luca', 'Sofia', 'Diego'],
    surname: ['Lima', 'Okafor', 'Rahman', 'Vos', 'Reis', 'Tanaka', 'Gjerde', 'Moreau'],
    job: ['an engineer', 'an accountant', 'a receptionist', 'an IT technician',
          'a marketing manager', 'a project coordinator', 'a sales representative',
          'an office assistant', 'the finance director'],
    jobBare: ['engineer', 'accountant', 'receptionist', 'IT technician',
              'marketing manager', 'project coordinator', 'sales representative'],
    place: ['an office', 'a factory', 'the head office', 'a hotel', 'a bank', 'a warehouse'],
    dept: ['Sales', 'Finance', 'IT', 'Marketing', 'Human Resources', 'Logistics'],
    daypart: ['morning', 'afternoon', 'evening'],
    person: ['colleague', 'assistant', 'manager', 'client'],
    // Unit 2 — Company (Italy/India/the UK entraram na Unit 5, pro par nacionalidade)
    country: ['Brazil', 'Japan', 'China', 'Germany', 'Spain', 'Kuwait',
              'Nigeria', 'Portugal', 'Mexico', 'the USA', 'Italy', 'India', 'the UK'],
    city: ['Rio de Janeiro', 'Tokyo', 'Lagos', 'Amsterdam', 'Lisbon',
           'Dublin', 'Munich', 'Singapore'],
    // empresas fictícias do universo Marcom Global — nada do livro, nada de marca real
    company: ['Marcom Global', 'Aurora Systems', 'Delta Foods',
              'Nova Energy', 'Vertex Logistics', 'Orion Bank'],
    // Unit 3 — Workplace
    place: ['the warehouse', 'the factory', 'the cafeteria', 'reception',
            'the office', 'the car park'],
    placeBare: ['warehouse', 'factory', 'cafeteria', 'reception', 'office', 'car park'],
    adj: ['new', 'old', 'big', 'small', 'good', 'bad'],
    // Unit 4 — Departments
    dept: ['Sales', 'Finance', 'IT', 'Logistics', 'Production', 'Human Resources'],
    verb: ['work', 'live', 'make', 'manage', 'meet', 'sell'],
    // substantivos que viram plural — cobrem as três regras (-s, -ies, irregular)
    noun: ['company', 'customer', 'person', 'office', 'department',
           'country', 'employee', 'factory', 'product', 'technician'],
    // Unit 5 — Products
    companyType: ['a retail company', 'an aeronautical company', 'an automobile company',
                  'an energy company', 'an electronics company', 'a food company', 'a fashion company'],
    bizverb: ['make', 'sell', 'have', 'build', 'design', 'export', 'buy', 'order', 'deliver'],
    product: ['aeroplanes', 'cars', 'clothes', 'televisions', 'mobile phones', 'food', 'houses'],
    boxSize: ['small boxes', 'medium boxes', 'large boxes'],
    orderQty: ['500', '1,200', '2,000', '3,400', '4,800']
  };

  // preenche {slot} a partir dos pools, sem repetir dentro da mesma rodada
  G.fill = function (tpl, rnd, used) {
    used = used || {};
    return tpl.replace(/\{(\w+)\}/g, function (_, key) {
      const pool = G.POOLS[key] || [key];
      const seen = used[key] = used[key] || [];
      const free = pool.filter(function (x) { return seen.indexOf(x) < 0; });
      const pick = DF.pick(free.length ? free : pool, rnd);
      seen.push(pick);
      return pick;
    });
  };

  // ══════════════════════════════════════════════════════════
  // BACKCHAIN AUTOMÁTICO
  // Dada uma frase, acha os pontos de quebra gramaticais e monta a escada
  // de trás pra frente. "She works in an office." vira:
  //   office → an office → in an office → works in an office → She works…
  // ══════════════════════════════════════════════════════════
  const DET = 'a an the my your his her our their this that some'.split(' ');
  const PREP = 'in at on to from with for of about into onto'.split(' ');
  // conjunções são quebra natural: em "X and Y", o pedaço "and Y" é o degrau
  // que o aluno precisa dominar antes de emendar a frase inteira
  const CONJ = 'and but or so because'.split(' ');
  const SUBJ = 'i you he she it we they there'.split(' ');
  const VERB = ('am is are was were be can could do does did have has work works ' +
    'spell say meet know need want live come go get make take see')
    .split(' ');

  function bare(w) { return String(w).toLowerCase().replace(/[.,!?;:'"]/g, ''); }

  // tira a pontuação de fim de frase: só o último degrau (a frase inteira) a mantém
  function trimEnd(s) { return s.replace(/[?.!]+$/, '').replace(/,$/, ''); }

  // modais/auxiliares que abrem pergunta — não se quebra entre eles e o sujeito
  const AUXQ = 'can could do does did are is am was were will would should have has'.split(' ');

  G.backchain = function (sentence, opts) {
    opts = opts || {};
    const full = String(sentence || '').trim();
    if (!full) return ['(frase vazia)'];

    // texto com mais de uma frase: a escada monta só a ÚLTIMA (a que o aluno
    // precisa encaixar); o texto inteiro entra como degrau final.
    const parts = full.match(/[^.!?]+[.!?]*/g) || [full];
    const clean = parts.map(function (s) { return s.trim(); }).filter(Boolean);
    if (clean.length > 1) {
      const inner = G.backchain(clean[clean.length - 1], opts);
      if (inner[inner.length - 1] !== full) inner.push(full);
      return inner;
    }

    const toks = full.split(/\s+/);
    if (toks.length < 3) return [full];

    // um token é PONTO DE QUEBRA preferido se for determinante, preposição,
    // verbo (inclui gerúndio/particípio) ou sujeito
    function isBreak(w, i) {
      if (i === 0) return true;
      // "Can you…" / "Are you…": o sujeito gruda no auxiliar, não abre pedaço
      if (SUBJ.indexOf(w) >= 0 && i > 0 && AUXQ.indexOf(bare(toks[i - 1])) >= 0) return false;
      return DET.indexOf(w) >= 0 || PREP.indexOf(w) >= 0 || CONJ.indexOf(w) >= 0 ||
             VERB.indexOf(w) >= 0 || SUBJ.indexOf(w) >= 0 ||
             /ing$/.test(w) || /ed$/.test(w);
    }

    // candidatos = todos os sufixos, do mais curto ao mais longo
    const cand = [];
    for (let i = toks.length - 1; i >= 0; i--) {
      cand.push({ i: i, text: toks.slice(i).join(' '), pref: isBreak(bare(toks[i]), i) });
    }

    const max = opts.max || 6;
    const min = Math.min(4, toks.length);

    // 1ª passada: só os pontos de quebra preferidos
    let picked = cand.filter(function (c, k) { return k === 0 || c.pref; });
    // 2ª passada: escada curta demais → completa com sufixos intermediários
    if (picked.length < min) {
      const have = {};
      picked.forEach(function (c) { have[c.i] = 1; });
      for (let k = 0; k < cand.length && picked.length < min; k++) {
        if (!have[cand[k].i]) { picked.push(cand[k]); have[cand[k].i] = 1; }
      }
      picked.sort(function (a, b) { return b.i - a.i; });
    }
    // escada longa demais → mantém as pontas e distribui o meio
    if (picked.length > max) {
      const out = [picked[0]];
      const step = (picked.length - 2) / (max - 2);
      for (let k = 1; k < max - 1; k++) out.push(picked[Math.round(k * step)]);
      out.push(picked[picked.length - 1]);
      picked = out;
    }

    const chain = [];
    picked.forEach(function (c, k) {
      const isLast = k === picked.length - 1 && c.i === 0;
      const t = isLast ? full : trimEnd(c.text);
      if (t && chain.indexOf(t) < 0) chain.push(t);
    });
    if (chain[chain.length - 1] !== full) chain.push(full);
    return chain;
  };

  G.backchainItem = function (sentence, o) {
    o = o || {};
    return {
      ui: 'backchain', cat: 'pro', unit: o.unit || 1, waSec: o.waSec || 'Backchain',
      srsId: o.srsId || ('gen:bc:' + DF.fnv(sentence).toString(36)),
      title: o.title || '🧱 Monte de trás pra frente',
      ptHint: o.ptHint || '', chain: G.backchain(sentence, o)
    };
  };

  // ══════════════════════════════════════════════════════════
  // TRANSFORMATION / CONTRACTION — gera as deixas a partir das bases
  // ══════════════════════════════════════════════════════════
  // As regras de `be` vêm PRIMEIRO; as de present simple só pegam o que sobrou
  // (o lookahead evita transformar "I am" em "I don't am").
  const NEG = [
    [/^I am /, 'I am not '], [/^You are /, 'You are not '],
    [/^He is /, 'He is not '], [/^She is /, 'She is not '], [/^It is /, 'It is not '],
    // present simple: I/you/we/they → don't
    [/^(I|You|We|They) (?!am\b|are\b|is\b)(.+)$/,
      function (_, s, rest) { return s + " don't " + rest; }]
  ];
  const QUE = [
    [/^I am (.+?)\.?$/, 'Am I $1?'], [/^You are (.+?)\.?$/, 'Are you $1?'],
    [/^He is (.+?)\.?$/, 'Is he $1?'], [/^She is (.+?)\.?$/, 'Is she $1?'],
    // present simple: Do + sujeito (em minúscula, exceto I) + verbo
    [/^(I|You|We|They) (?!am\b|are\b|is\b)(.+?)\.?$/,
      function (_, s, rest) {
        return 'Do ' + (s === 'I' ? 'I' : s.toLowerCase()) + ' ' + rest + '?';
      }]
  ];
  const CON = [
    [/^I am not /, "I'm not "], [/^You are not /, "You aren't "],
    [/^He is not /, "He isn't "], [/^She is not /, "She isn't "],
    [/^I am /, "I'm "], [/^You are /, "You're "],
    [/^He is /, "He's "], [/^She is /, "She's "]
  ];

  function apply(rules, s) {
    for (let i = 0; i < rules.length; i++) {
      if (rules[i][0].test(s)) return s.replace(rules[i][0], rules[i][1]);
    }
    return null;
  }

  // "The office is new." → "It's a new office."
  // A inversão adjetivo+substantivo é a diferença estrutural nº1 do português
  // ("um escritório novo" → "a new office"). Vale como comando de drill.
  G.adjNoun = function (base) {
    const m = String(base).match(/^The ([\w\s]+?) is (\w+)\.?$/i);
    if (!m) return null;
    const noun = m[1], adj = m[2];
    const art = /^[aeiou]/i.test(adj) ? 'an' : 'a';
    return "It's " + art + ' ' + adj + ' ' + noun + '.';
  };

  // informal → formal (Unit 3, Business communication).
  // O par é fixo e pequeno; é o que o aluno precisa saber escolher ao escrever.
  const FORMAL = [
    [/^Hi (.+)$/i, 'Dear $1'], [/^Hello (.+)$/i, 'Dear $1'],
    [/^Thanks for your email\.?$/i, 'Thank you for your email.'],
    // (.+?) preguiçoso + \.? fora do grupo: sem isso o ponto final entra na
    // captura e sai "a map.?" / "a map.."
    [/^Please send me (.+?)\.?$/i, 'Can you please send me $1?'],
    [/^Here is (.+?)\.?$/i, 'Please find attached $1.'],
    [/^All the best$/i, 'Best wishes'], [/^Best$/i, 'Kind regards']
  ];

  // Plural (Unit 4). Regras do livro + as irregulares que aparecem no trabalho.
  const PLURAL_IRR = {
    person: 'people', child: 'children', man: 'men', woman: 'women',
    foot: 'feet', tooth: 'teeth'
  };
  // Pluraliza só a ÚLTIMA palavra e preserva o resto — assim "IT technician"
  // vira "IT technicians" (e não "it technicians", perdendo a sigla).
  G.plural = function (word) {
    const s = String(word || '').trim();
    if (!s) return null;
    const parts = s.split(/\s+/);
    const last = parts[parts.length - 1];
    const w = last.toLowerCase();
    let pl;
    if (PLURAL_IRR[w]) pl = PLURAL_IRR[w];
    // consoante + y → -ies (company → companies) · vogal + y → -s (day → days)
    else if (/[^aeiou]y$/.test(w)) pl = last.slice(0, -1) + 'ies';
    // s, x, z, ch, sh → -es (box → boxes)
    else if (/(s|x|z|ch|sh)$/.test(w)) pl = last + 'es';
    else pl = last + 's';
    parts[parts.length - 1] = pl;
    return parts.join(' ');
  };

  // "There's a manager." → "There are two managers."
  G.thereAre = function (base) {
    const m = String(base).match(/^There(?:'s| is) (?:a|an|one) (.+?)\.?$/i);
    if (!m) return null;
    return 'There are two ' + G.plural(m[1]) + '.';
  };

  // Present simple, 3ª pessoa (he/she/it). Mesma família de regra do plural
  // (-s / -es após s,x,z,ch,sh,o / consoante+y → ies), com as irregulares do
  // verbo — have→has é a que mais engana (parece exceção de plural, é verbo).
  const VERB3_IRR = { have: 'has', go: 'goes', do: 'does' };
  G.thirdPerson = function (verb) {
    const w = String(verb).trim().toLowerCase();
    if (!w) return null;
    if (VERB3_IRR[w]) return VERB3_IRR[w];
    if (/[^aeiou]y$/.test(w)) return w.slice(0, -1) + 'ies';
    if (/(s|x|z|ch|sh|o)$/.test(w)) return w + 'es';
    return w + 's';
  };

  // País → nacionalidade. NÃO é regra de sufixo limpa (Brazil→Brazilian mas
  // Mexico→Mexican mas India→Indian mas Japan→Japanese mas UK→British) —
  // é vocabulário fechado. Tabela, não heurística. Cobre a Tip do livro
  // (Unit 5) + países que já aparecem nas unidades anteriores.
  const NAT_TABLE = {
    uk: 'British', brazil: 'Brazilian', italy: 'Italian', india: 'Indian',
    mexico: 'Mexican', japan: 'Japanese', usa: 'American', china: 'Chinese',
    germany: 'German', spain: 'Spanish', france: 'French', portugal: 'Portuguese',
    nigeria: 'Nigerian', kuwait: 'Kuwaiti', 'south korea': 'South Korean',
    'saudi arabia': 'Saudi', ireland: 'Irish', netherlands: 'Dutch'
  };
  G.nationality = function (country) {
    const w = String(country).trim().toLowerCase().replace(/^the\s+/, '');
    return NAT_TABLE[w] || null;
  };

  G.transformOf = function (base, cmd) {
    if (cmd === 'Plural') return G.plural(base);
    if (cmd === 'There are') return G.thereAre(base);
    if (cmd === 'Third person') return G.thirdPerson(base);
    if (cmd === 'Nationality') return G.nationality(base);
    if (cmd === 'Negative') return apply(NEG, base);
    if (cmd === 'Question') return apply(QUE, base);
    if (cmd === 'Contraction') return apply(CON, base);
    if (cmd === 'Adjective + noun') return G.adjNoun(base);
    if (cmd === 'Formal') return apply(FORMAL, base);
    return null;
  };

  // gera um item `transform` a partir de templates + pools
  //   templates: ['I am {name}.', 'You are {job}.', …]
  //   cmds: ['Negative','Question','Contraction']
  G.transformItem = function (templates, cmds, o) {
    o = o || {};
    const rnd = DF.mulberry(o.seed || G.autoSeed());
    const rounds = [];
    const used = {};
    const n = o.n || 6;
    let guard = 0;
    while (rounds.length < n && guard++ < n * 8) {
      const base = G.fill(DF.pick(templates, rnd), rnd, used);
      const cmd = DF.pick(cmds, rnd);
      const answer = G.transformOf(base, cmd);
      if (!answer) continue;
      if (rounds.some(function (r) { return r.base === base && r.cmd === cmd; })) continue;
      rounds.push({ base: base, cmd: cmd, answer: answer });
    }
    // nenhum template combinou com nenhuma regra (ex.: frase fora de I am/You
    // are/He is/She is) — 0 rounds travaria a mecânica transform na primeira
    // tela. Cai pra 1 rodada avisando, em vez de quebrar o passo pro aluno.
    if (!rounds.length) {
      console.warn('WGEN.transformItem: nenhum template combinou com Negative/Question/Contraction.');
      rounds.push({ base: '(sem frases compatíveis nesta bateria)', cmd: 'Negative', answer: '—' });
    }
    return {
      ui: 'transform', cat: 'gra', unit: o.unit || 1, waSec: o.waSec || 'Drill · transformação',
      srsId: o.srsId || 'gen:tf:' + (o.seed || 0),
      title: o.title || '🔀 Drill de transformação', rounds: rounds
    };
  };

  // ══════════════════════════════════════════════════════════
  // SUBSTITUTION DRILL — a frase fica, o slot troca
  // ══════════════════════════════════════════════════════════
  G.drillItem = function (frame, poolKey, o) {
    o = o || {};
    const rnd = DF.mulberry(o.seed || G.autoSeed());
    // aceita nome de pool (string) ou array literal. Nome de pool inexistente
    // não pode virar exceção crua no meio do render — vira pool de 1 item
    // visível ("erro: pool 'x'"), fácil de notar e corrigir na hora de escrever
    // a unidade, sem derrubar o passo inteiro pro aluno.
    let pool;
    if (Array.isArray(poolKey)) pool = poolKey;
    else if (G.POOLS[poolKey]) pool = G.POOLS[poolKey];
    else { console.warn('WGEN.drillItem: pool desconhecida "' + poolKey + '"'); pool = ["(erro: pool '" + poolKey + "' não existe)"]; }
    return {
      ui: 'drill', cat: 'pro', unit: o.unit || 1, waSec: o.waSec || 'Drill',
      srsId: o.srsId || ('gen:dr:' + DF.fnv(frame).toString(36)),
      title: o.title || '🔁 Drill de substituição',
      focus: o.focus || poolKey, frame: frame, ptHint: o.ptHint || '',
      slots: DF.pickN(pool, o.n || 5, rnd)
    };
  };

  // ══════════════════════════════════════════════════════════
  // NÚMEROS — ditado de dígitos, infinitamente gerável
  //   O TTS lê dígito a dígito quando separados por ponto ("0. 7. 7.").
  //   opts: { digits, oh (usa "oh" no lugar de "zero"), label, seed }
  //   Sempre `exact: true` — número com dígito errado está errado.
  // ══════════════════════════════════════════════════════════
  G.numberItem = function (o) {
    o = o || {};
    const rnd = DF.mulberry(o.seed || G.autoSeed());
    const n = o.digits || 6;
    let d = '';
    for (let i = 0; i < n; i++) d += Math.floor(rnd() * 10);
    // "oh" é como se lê 0 em número de telefone no inglês britânico
    const spoken = d.split('').map(function (x) {
      return (x === '0' && o.oh) ? 'oh' : x;
    }).join('. ') + '.';
    return {
      ui: 'type', cat: 'spl', exact: true,
      srsId: o.srsId || ('gen:num:' + d),
      title: o.label || '🔢 Ouça e escreva o número:',
      tts: spoken, ttsLabel: '🔊 Ouvir o número', autoPlay: true,
      showIfNoTTS: d.split('').join(' - '),
      answers: [d],
      expl: 'O número é ' + d.split('').join('-') + '.',
      feedbackTts: spoken
    };
  };

  // ══════════════════════════════════════════════════════════
  // SESSÃO DE PRÁTICA INFINITA — o "praticar mais" nunca repete igual
  // Monta uma bateria nova a cada chamada, com semente do relógio.
  // ══════════════════════════════════════════════════════════
  G.session = function (cfg) {
    cfg = cfg || {};
    const seed = cfg.seed || G.autoSeed();
    const rnd = DF.mulberry(seed);
    const out = [];

    (cfg.drills || []).forEach(function (d, i) {
      out.push(G.drillItem(d.frame, d.pool, {
        seed: seed + i * 7, focus: d.focus, ptHint: d.ptHint,
        unit: cfg.unit, waSec: cfg.waSec, n: d.n || 5,
        srsId: 'gen:dr:' + seed + ':' + i
      }));
    });

    if (cfg.transform) {
      out.push(G.transformItem(cfg.transform.templates, cfg.transform.cmds, {
        seed: seed + 101, unit: cfg.unit, waSec: cfg.waSec,
        n: cfg.transform.n || 6, title: cfg.transform.title,
        srsId: 'gen:tf:' + seed
      }));
    }

    (cfg.numbers || []).forEach(function (nb, i) {
      out.push(G.numberItem({
        seed: seed + 211 + i * 13, digits: nb.digits, oh: nb.oh, label: nb.label,
        srsId: 'gen:num:' + seed + ':' + i
      }));
    });

    (cfg.backchain || []).forEach(function (s, i) {
      const sent = G.fill(s.text || s, rnd, {});
      out.push(G.backchainItem(sent, {
        unit: cfg.unit, waSec: cfg.waSec, ptHint: s.ptHint,
        title: s.title, srsId: 'gen:bc:' + seed + ':' + i
      }));
    });

    return DF.shuffle(out, rnd);
  };
})(typeof window !== 'undefined' ? window : globalThis);
