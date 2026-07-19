/* BUSINESS FLOW — numbers.js
   Number Talk procedural: números, telefones, códigos de pedido, quantidades
   e unidades de negócio (%, $, units, kg, km, min) por listening. Treino infinito.
   Motor reaproveitado do DEEP FLOW, adaptado ao contexto corporativo. */
(function (root) {
  const DF = root.DF = root.DF || {};
  const N = DF.NUM = {};

  const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // por extenso (inglês britânico, com "and")
  N.words = function (n) {
    n = Math.floor(Math.abs(n));
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : '');
    if (n < 1000) {
      const h = Math.floor(n / 100), r = n % 100;
      return ONES[h] + ' hundred' + (r ? ' and ' + N.words(r) : '');
    }
    if (n < 1000000) {
      const t = Math.floor(n / 1000), r = n % 1000;
      return N.words(t) + ' thousand' + (r ? (r < 100 ? ' and ' : ' ') + N.words(r) : '');
    }
    if (n < 1e9) {
      const m = Math.floor(n / 1e6), r = n % 1e6;
      return N.words(m) + ' million' + (r ? ' ' + N.words(r) : '');
    }
    const b = Math.floor(n / 1e9), r2 = n % 1e9;
    return N.words(b) + ' billion' + (r2 ? ' ' + N.words(r2) : '');
  };

  // dígito a dígito (telefones, registros): 0 = "oh"
  N.digits = function (s) {
    return String(s).split('').map(function (c) {
      if (c === '0') return 'oh';
      if (/\d/.test(c)) return ONES[+c];
      if (c === '-') return 'dash';
      return c;
    }).join(', ');
  };

  const NATO = {
    A: 'Alpha', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', F: 'Foxtrot', G: 'Golf',
    H: 'Hotel', I: 'India', J: 'Juliett', K: 'Kilo', L: 'Lima', M: 'Mike', N: 'November',
    O: 'Oscar', P: 'Papa', Q: 'Quebec', R: 'Romeo', S: 'Sierra', T: 'Tango', U: 'Uniform',
    V: 'Victor', W: 'Whiskey', X: 'X-ray', Y: 'Yankee', Z: 'Zulu'
  };
  N.NATO = NATO;
  N.nato = function (s) {
    return String(s).toUpperCase().split('').map(function (c) {
      if (NATO[c]) return NATO[c];
      if (/\d/.test(c)) return c === '0' ? 'zero' : ONES[+c];
      if (c === '-') return 'dash';
      return c;
    }).join(', ');
  };

  // part number: letras + dígitos (falado letra a letra)
  N.spellPart = function (s) {
    return String(s).toUpperCase().split('').map(function (c) {
      if (/[A-Z]/.test(c)) return c + '.';
      if (c === '0') return 'oh,';
      if (/\d/.test(c)) return ONES[+c] + ',';
      if (c === '-') return 'dash,';
      return c;
    }).join(' ').replace(/,\s*$/, '');
  };

  const UNITS_TALK = [
    { u: '%', say: 'percent', pt: 'por cento' },
    { u: '$', say: 'dollars', pt: 'dólares' },
    { u: 'units', say: 'units', pt: 'unidades' },
    { u: 'kg', say: 'kilograms', pt: 'quilogramas' },
    { u: 'km', say: 'kilometres', pt: 'quilômetros' },
    { u: 'min', say: 'minutes', pt: 'minutos' },
    { u: 'pcs', say: 'pieces', pt: 'peças' },
    { u: 'people', say: 'people', pt: 'pessoas' }
  ];

  const PART_PREFIX = ['PO', 'INV', 'REF', 'ACC', 'REQ', 'ORD', 'DOC', 'EXT'];

  // gera um item de Number Talk
  // conf: { types:['int','phone','part','qty'], max, rnd, diff }
  N.genItem = function (conf) {
    conf = conf || {};
    const rnd = conf.rnd || Math.random;
    const types = conf.types || ['int', 'phone', 'part'];
    const type = DF.pick(types, rnd);
    const max = conf.max || 199;

    if (type === 'int') {
      const n = 1 + Math.floor(rnd() * max);
      return {
        ui: 'type', cat: 'num', srsId: null, // procedural: sem SRS por item
        title: '🔢 Escreva o número que você ouvir (em algarismos):',
        main: null, tts: N.words(n), ttsLabel: '🔊 Ouvir o número',
        showIfNoTTS: '“' + N.words(n) + '”',
        answers: [String(n)], expl: n + ' = ' + N.words(n),
        time: 22
      };
    }
    if (type === 'phone') {
      let ph = '';
      const len = 6 + Math.floor(rnd() * 3);
      for (let i = 0; i < len; i++) ph += Math.floor(rnd() * 10);
      return {
        ui: 'type', cat: 'num', srsId: null,
        title: '📞 Anote o telefone/ramal que você ouvir:',
        main: null, tts: N.digits(ph), ttsLabel: '🔊 Ouvir o número',
        showIfNoTTS: '“' + N.digits(ph) + '”',
        answers: [ph], expl: ph + ' → ' + N.digits(ph),
        time: 26
      };
    }
    if (type === 'part') {
      const pre = DF.pick(PART_PREFIX, rnd);
      let num = '';
      for (let i = 0; i < 3 + Math.floor(rnd() * 2); i++) num += Math.floor(rnd() * 10);
      const pn = pre + '-' + num;
      const useNato = (conf.diff || 1) >= 2 && rnd() < 0.5;
      return {
        ui: 'type', cat: 'num', srsId: null,
        title: '🏷️ Anote o código de referência que você ouvir:',
        main: null, tts: useNato ? N.nato(pn) : N.spellPart(pn),
        ttsLabel: '🔊 Ouvir o código',
        showIfNoTTS: '“' + (useNato ? N.nato(pn) : N.spellPart(pn)) + '”',
        answers: [pn, pn.replace('-', '')], expl: pn,
        time: 30
      };
    }
    // qty: número + unidade de engenharia
    const un = DF.pick(UNITS_TALK, rnd);
    const base = [15, 25, 40, 60, 75, 100, 120, 150, 200, 250, 300, 450, 500, 750, 800, 1200, 1500, 2000, 3000, 5000];
    const q = DF.pick(base, rnd) + (rnd() < 0.4 ? Math.floor(rnd() * 9) : 0);
    return {
      ui: 'type', cat: 'num', srsId: null,
      title: '⚙️ Anote o valor que você ouvir (só o número):',
      sub: 'Unidade: ' + un.u + ' (' + un.pt + ')',
      main: null, tts: N.words(q) + ' ' + un.say, ttsLabel: '🔊 Ouvir a medição',
      showIfNoTTS: '“' + N.words(q) + ' ' + un.say + '”',
      answers: [String(q)], expl: q + ' ' + un.u + ' = ' + N.words(q) + ' ' + un.say,
      time: 26
    };
  };
})(typeof window !== 'undefined' ? window : globalThis);
