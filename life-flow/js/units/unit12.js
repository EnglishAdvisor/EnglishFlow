/* LIFE FLOW — units/unit12.js
   UNIT 12 — What's Your Game? (parada 12 · topo → Final Test) · WC1 · COMPLETO
   WC1 U12: Vocabulary (sport, games & free time), Grammar (review of tenses:
   present/past/future/perfect), Video, Reading, Speaking, Writing. */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.UNIT_DATA = DF.UNIT_DATA || {};

  const GLOSSARY = [
    { en: 'hobby', pt: 'passatempo', def: 'an activity you do for fun.' },
    { en: 'compete', pt: 'competir', def: 'to try to win against others.' },
    { en: 'team', pt: 'time/equipe', def: 'a group that plays together.' },
    { en: 'score', pt: 'placar/marcar', def: 'the points in a game.' },
    { en: 'coach', pt: 'treinador(a)', def: 'the person who trains a team.' },
    { en: 'fit', pt: 'em forma', def: 'healthy and strong.' },
    { en: 'championship', pt: 'campeonato', def: 'a competition to find the best.' },
    { en: 'opponent', pt: 'adversário(a)', def: 'the person you play against.' },
    { en: 'training', pt: 'treino', def: 'practice to improve.' },
    { en: 'leisure', pt: 'lazer', def: 'free time for enjoyment.' }
  ];
  const POOL = GLOSSARY;
  function opts(correct, wrongs, trap) { const o = [{ label: correct, correct: true }]; if (trap) o.push({ label: trap, trap: true }); wrongs.forEach(function (w) { if (o.length < 4) o.push({ label: w }); }); return DF.shuffle(o); }

  const LANG1 = [
    { ui: 'choice', cat: 'gra', srsId: 'lf-u12:g:rev1', title: '🔧 Present simple (rotina):', main: 'I ___ football every weekend.', options: opts('play', ['am playing', 'played', 'will play']), expl: 'Rotina → present simple.' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u12:g:rev2', title: '🔧 Past simple:', main: 'We ___ the championship last year.', options: opts('won', ['win', 'have won', 'will win']), expl: 'Tempo passado definido → past simple (won).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u12:g:rev3', title: '🔧 Present perfect:', main: 'She ___ played for the team since 2020.', options: opts('has', ['is', 'did', 'was']), expl: 'since + present perfect (has played).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u12:g:rev4', title: '🔧 Present continuous (agora):', main: 'Look! They ___ training right now.', options: opts('are', ['do', 'have', 'will']), expl: 'Agora → present continuous (are training).' },
    { ui: 'choice', cat: 'gra', srsId: 'lf-u12:g:rev5', title: '🔧 Future (will):', main: 'I think our team ___ win tonight.', options: opts('will', ['is winning', 'won', 'wins always']), expl: 'Previsão → will.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u12:g:ord1', title: '🔧 Monte a frase (past):', answer: 'We played against a strong team yesterday', expl: 'past simple + tempo passado.' },
    { ui: 'order', cat: 'gra', srsId: 'lf-u12:g:ord2', title: '🔧 Monte a frase (present perfect):', answer: 'I have played this game for years', expl: 'have played for + período.' }
  ];

  const READ1 = [
    { ui: 'choice', cat: 'voc', srsId: 'lf-u12:v:coach', title: '📦 "Coach" é:', main: null, options: opts('treinador', ['adversário', 'jogador', 'juiz']), expl: 'coach = treinador.' },
    { ui: 'choice', cat: 'voc', srsId: 'lf-u12:v:opp', title: '📦 "Opponent" é:', main: null, options: opts('adversário', ['companheiro', 'torcedor', 'técnico']), expl: 'opponent = adversário.' },
    { ui: 'choice', cat: 'rea', srsId: 'lf-u12:r:fit', title: '📖 "To keep fit" é:', main: null, options: opts('manter-se em forma', ['ganhar dinheiro', 'perder um jogo', 'treinar outros']), expl: 'fit = em forma.' }
  ];

  const SCRIPT = 'Video: What\'s your game?\n\nAthlete: I have played volleyball since I was ten.\nLast year, our team won the regional championship.\nRight now, we are training for the nationals.\nI think we will do well — sport is my whole life.';
  function dlg(lines) { return lines.map(function (t) { return { t: t, pause: 420 }; }); }
  const LISTEN1 = [
    { ui: 'choice', cat: 'lis', srsId: 'lf-u12:l:v1', title: '🎧 Desde quando ela joga vôlei?', tts: dlg(['I have played volleyball since I was ten.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'I have played volleyball since I was ten.', options: opts('Since she was ten', ['Since last year', 'For two weeks', 'Since yesterday']), expl: 'since I was ten.' },
    { ui: 'choice', cat: 'lis', srsId: 'lf-u12:l:v2', title: '🎧 O que o time faz agora?', tts: dlg(['Right now, we are training for the nationals.']), ttsLabel: '🔊 Ouvir', showIfNoTTS: 'We are training for the nationals.', options: opts('Training for the nationals', ['Playing a final', 'Resting', 'Celebrating']), expl: 'are training for the nationals.' }
  ];

  const MISSIONS = {
    kickoff: { brief: 'Parada 12: Qual é o seu jogo? — o topo do bairro! Esporte, lazer e revisão de todos os tempos verbais. Depois: Final Test.', items: [
      { ui: 'cards', cat: 'voc', title: '🧭 Palavras da unidade:', cards: [
        { en: 'hobby', pt: 'passatempo', def: "What's your hobby?" },
        { en: 'team', pt: 'time', def: 'I play for a local team.' },
        { en: 'championship', pt: 'campeonato', def: 'We won the championship.' },
        { en: 'training', pt: 'treino', def: 'Training is at 6 p.m.' } ] },
      { ui: 'choice', cat: 'voc', srsId: 'lf-u12:v:compete', sp: { g: 'venpt', en: 'compete', u: 12 }, title: '📦 "Compete" é:', main: null, options: opts('competir', ['desistir', 'assistir', 'treinar']), expl: 'compete = competir.' } ],
      task: { type: 'audio', title: '🎙️ Seu esporte/hobby', brief: 'Grave usando 3 tempos: "I play… I have played… Last year I…"', waText: 'Registro: revisão de tempos (Unit 12).' } },
    vocab: { brief: 'Esporte, jogos e tempo livre.', items: READ1 },
    grammar: { brief: 'Revisão de todos os tempos: present, past, future e perfect.', items: LANG1 },
    listen: { brief: 'Uma atleta conta a sua história.', items: LISTEN1, script: SCRIPT },
    read: { brief: 'Ler sobre esporte e vida ativa.', items: READ1 },
    speak: { brief: 'Fale do seu esporte ou passatempo, misturando tempos.', items: [
      { ui: 'speak', cat: 'pro', srsId: 'lf-u12:sp:s1', unit: 12, waSec: 'Speaking', title: '🎤 Fale de você:', target: "I have played this sport for years and I love it.", ptHint: 'Eu jogo este esporte há anos e adoro.' } ],
      task: { type: 'audio', title: '🎙️ Speaking', brief: 'Grave um resumo do seu hobby usando 3 tempos verbais diferentes.', waText: 'Registro: hobby (Unit 12 — Speaking).' } },
    write: { brief: 'Escreva sobre seu passatempo favorito, misturando tempos.', items: READ1, task: { type: 'writing', title: '✍️ Meu passatempo', brief: 'Complete:', btn: '✍️ Enviar', fields: [
      { label: 'What you do now (present)', ph: 'ex.: I play tennis every week.' },
      { label: 'A past experience + a future plan', ph: 'ex.: Last year I joined a club, and next year I will...', rows: 2 } ] } },
    check: { brief: 'Você chegou ao fim do bairro! Depois desta unidade: o Final Test de World Class 1.', checklist: true }
  };

  const CHECKLIST = [
    'I can talk about sport and free time.',
    'I can use present, past and future tenses.',
    'I can use the present perfect naturally.',
    'I can tell a story mixing tenses.',
    'I can describe my hobbies and goals.'
  ];

  DF.UNIT_DATA[12] = { glossary: GLOSSARY, missions: MISSIONS, checklist: CHECKLIST, grammarPool: LANG1, listenPool: LISTEN1, readPool: READ1, phrasePool: [], spellPool: [], numbers: { types: ['int'], max: 199 } };
})(typeof window !== 'undefined' ? window : globalThis);
