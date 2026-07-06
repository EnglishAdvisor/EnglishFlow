/* A Maldição da Cuca — data2.js
   Bancos de conteúdo, parte 2: falsos amigos, phrasal verbs, verbos irregulares,
   -ED, preposições — e as regiões, chefes, itens e textos do jogo. */
(function (root) {
  const G = root.G = root.G || {};
  const D = G.DATA = G.DATA || {};

  // ---------------- FALSOS AMIGOS (arma favorita do Saci) ----------------
  // w: palavra em inglês | trap: o que o brasileiro ACHA que é | real: o que É
  D.FF = [
    { w: 'actually', trap: 'atualmente', real: 'na verdade', ex: 'She looks young, but actually she is seventy.', note: '"Atualmente" é "currently".' },
    { w: 'pretend', trap: 'pretender', real: 'fingir', ex: 'The Saci likes to pretend he is asleep.', note: '"Pretender" é "to intend".' },
    { w: 'push', trap: 'puxar', real: 'empurrar', ex: 'Push the door to open it.', note: 'PUSH na porta = EMPURRE. Clássico!' },
    { w: 'library', trap: 'livraria', real: 'biblioteca', ex: 'I study at the library every week.', note: '"Livraria" é "bookstore".' },
    { w: 'parents', trap: 'parentes', real: 'pais', ex: 'My parents live in Salvador.', note: '"Parentes" é "relatives".' },
    { w: 'college', trap: 'colégio', real: 'faculdade', ex: 'She studies biology in college.', note: '"Colégio" é "school".' },
    { w: 'costume', trap: 'costume', real: 'fantasia', ex: 'He wore a monster costume to the party.', note: '"Costume" (hábito) é "habit" ou "custom".' },
    { w: 'fabric', trap: 'fábrica', real: 'tecido', ex: 'This dress is made of soft fabric.', note: '"Fábrica" é "factory".' },
    { w: 'lecture', trap: 'leitura', real: 'palestra', ex: 'The professor gave a lecture about legends.', note: '"Leitura" é "reading".' },
    { w: 'exquisite', trap: 'esquisito', real: 'requintado', ex: 'The dinner was exquisite.', note: '"Esquisito" é "weird".' },
    { w: 'intend', trap: 'entender', real: 'pretender', ex: 'I intend to travel next year.', note: '"Entender" é "to understand".' },
    { w: 'attend', trap: 'atender', real: 'comparecer a', ex: 'I will attend the meeting tomorrow.', note: '"Atender (telefone)" é "to answer".' },
    { w: 'assist', trap: 'assistir', real: 'ajudar', ex: 'The nurse assists the doctor.', note: '"Assistir TV" é "to watch TV".' },
    { w: 'resume', trap: 'resumir', real: 'retomar', ex: 'Let us resume the class after lunch.', note: '"Resumir" é "to summarize".' },
    { w: 'data', trap: 'data', real: 'dados', ex: 'The scientist collected a lot of data.', note: '"Data" (dia) é "date".' },
    { w: 'novel', trap: 'novela', real: 'romance (livro)', ex: 'She wrote a novel about the Amazon.', note: '"Novela" é "soap opera".' },
    { w: 'realize', trap: 'realizar', real: 'perceber', ex: 'I did not realize it was so late.', note: '"Realizar (sonho)" é "to fulfill" ou "achieve".' },
    { w: 'support', trap: 'suportar', real: 'apoiar', ex: 'My family supports my decisions.', note: '"Suportar (aguentar)" é "to stand" / "put up with".' },
    { w: 'sensible', trap: 'sensível', real: 'sensato', ex: 'Going home early was a sensible decision.', note: '"Sensível" é "sensitive".' },
    { w: 'notice', trap: 'notícia', real: 'perceber / aviso', ex: 'Did you notice her new haircut?', note: '"Notícia" é "news".' },
    { w: 'injury', trap: 'injúria', real: 'lesão', ex: 'He suffered a knee injury playing soccer.', note: '"Injúria" é "insult".' },
    { w: 'prejudice', trap: 'prejuízo', real: 'preconceito', ex: 'We must fight against prejudice.', note: '"Prejuízo" é "loss" ou "damage".' },
    { w: 'pasta', trap: 'pasta', real: 'massa / macarrão', ex: 'Italian pasta is delicious.', note: '"Pasta (de arquivos)" é "folder".' },
    { w: 'cigar', trap: 'cigarro', real: 'charuto', ex: 'The old man smoked a cigar.', note: '"Cigarro" é "cigarette".' },
    { w: 'mayor', trap: 'maior', real: 'prefeito', ex: 'The mayor opened the new hospital.', note: '"Maior" é "bigger" ou "larger".' },
    { w: 'legend', trap: 'legenda', real: 'lenda', ex: 'The Curupira is a famous Brazilian legend.', note: '"Legenda (de filme)" é "subtitles".' },
    { w: 'comprehensive', trap: 'compreensivo', real: 'abrangente', ex: 'The book gives a comprehensive view of history.', note: '"Compreensivo" é "understanding".' },
    { w: 'eventually', trap: 'eventualmente', real: 'no fim / finalmente', ex: 'Eventually, the hero found the witch.', note: '"Eventualmente" é "occasionally".' },
    { w: 'argument', trap: 'argumento', real: 'discussão / briga', ex: 'They had an argument about money.', note: '"Argumento (razão)" também existe, mas "argument" sozinho costuma ser briga.' },
    { w: 'balcony', trap: 'balcão', real: 'sacada / varanda', ex: 'She waved from the balcony.', note: '"Balcão" é "counter".' },
    { w: 'beef', trap: 'bife', real: 'carne bovina', ex: 'This beef is very tender.', note: '"Bife" é "steak".' },
    { w: 'cafeteria', trap: 'cafeteria', real: 'refeitório', ex: 'We had lunch at the school cafeteria.', note: '"Cafeteria" é "coffee shop".' },
    { w: 'collar', trap: 'colar', real: 'colarinho / coleira', ex: 'The dog has a red collar.', note: '"Colar (joia)" é "necklace".' },
    { w: 'compromise', trap: 'compromisso', real: 'acordo / concessão', ex: 'They reached a compromise after hours of talk.', note: '"Compromisso" é "appointment" ou "commitment".' },
    { w: 'deception', trap: 'decepção', real: 'engano / fraude', ex: 'The magician is a master of deception.', note: '"Decepção" é "disappointment".' },
    { w: 'educated', trap: 'educado', real: 'instruído', ex: 'She is a highly educated scientist.', note: '"Educado (gentil)" é "polite".' },
    { w: 'enroll', trap: 'enrolar', real: 'matricular-se', ex: 'I want to enroll in the English course.', note: '"Enrolar (embromar)" é "to stall".' },
    { w: 'expert', trap: 'esperto', real: 'especialista', ex: 'He is an expert in Brazilian folklore.', note: '"Esperto" é "smart" ou "clever".' },
    { w: 'grip', trap: 'gripe', real: 'aperto / segurar firme', ex: 'Keep a firm grip on the rope.', note: '"Gripe" é "flu".' },
    { w: 'ingenious', trap: 'ingênuo', real: 'engenhoso', ex: 'What an ingenious invention!', note: '"Ingênuo" é "naive".' },
    { w: 'journal', trap: 'jornal', real: 'revista científica / diário', ex: 'Her study was published in a famous journal.', note: '"Jornal" é "newspaper".' },
    { w: 'large', trap: 'largo', real: 'grande', ex: 'They live in a large house.', note: '"Largo" é "wide".' },
    { w: 'lunch', trap: 'lanche', real: 'almoço', ex: 'We have lunch at noon.', note: '"Lanche" é "snack".' },
    { w: 'office', trap: 'oficina', real: 'escritório', ex: 'She works in an office downtown.', note: '"Oficina" é "workshop" ou "garage".' },
    { w: 'physician', trap: 'físico', real: 'médico', ex: 'The physician examined the patient.', note: '"Físico (cientista)" é "physicist".' },
    { w: 'policy', trap: 'polícia', real: 'política (diretriz)', ex: 'The company has a strict privacy policy.', note: '"Polícia" é "police".' },
    { w: 'record', trap: 'recordar', real: 'gravar / registro', ex: 'They will record a new song today.', note: '"Recordar" é "to remember".' },
    { w: 'requirement', trap: 'requerimento', real: 'requisito', ex: 'English is a requirement for this job.', note: '"Requerimento" é "request" ou "application".' },
    { w: 'retired', trap: 'retirado', real: 'aposentado', ex: 'My grandfather is retired now.', note: '"Retirado (removido)" é "removed".' },
    { w: 'scholar', trap: 'escolar', real: 'estudioso / acadêmico', ex: 'A famous scholar wrote about the Boto.', note: '"Escolar" é "school" (adjetivo).' },
    { w: 'sort', trap: 'sorte', real: 'tipo / ordenar', ex: 'What sort of music do you like?', note: '"Sorte" é "luck".' },
    { w: 'tax', trap: 'táxi', real: 'imposto', ex: 'We pay tax on everything we buy.', note: '"Táxi" é "taxi" ou "cab".' },
    { w: 'terrific', trap: 'terrível', real: 'ótimo / incrível', ex: 'The show was terrific, congratulations!', note: '"Terrível" é "terrible". Pegadinha cruel!' }
  ];
  D.ffByWord = function (w) {
    for (let i = 0; i < D.FF.length; i++) if (D.FF[i].w === w) return D.FF[i];
    return null;
  };

  // ---------------- PHRASAL VERBS (o baile do Boto) ----------------
  // gap: frase com ___ no lugar da partícula | part: partícula correta
  D.PHRASAL = [
    { v: 'get up', gap: 'I get ___ at six every morning.', part: 'up', pt: 'levantar-se' },
    { v: 'get over', gap: 'It took me months to get ___ the flu.', part: 'over', pt: 'superar / sarar' },
    { v: 'get along', gap: 'My sister and I get ___ really well.', part: 'along', pt: 'se dar bem' },
    { v: 'get back', gap: 'What time did you get ___ from work?', part: 'back', pt: 'voltar' },
    { v: 'get by', gap: 'My English is basic, but I get ___.', part: 'by', pt: 'se virar' },
    { v: 'give up', gap: 'Never give ___ on your dreams.', part: 'up', pt: 'desistir' },
    { v: 'give back', gap: 'Can you give ___ my pen, please?', part: 'back', pt: 'devolver' },
    { v: 'give away', gap: 'She decided to give ___ her old clothes.', part: 'away', pt: 'doar' },
    { v: 'take off', gap: 'The plane will take ___ in ten minutes.', part: 'off', pt: 'decolar / tirar (roupa)' },
    { v: 'take after', gap: 'He really takes ___ his father.', part: 'after', pt: 'puxar a (parecer com)' },
    { v: 'take care of', gap: 'Who will take care ___ the kids tonight?', part: 'of', pt: 'cuidar de' },
    { v: 'turn on', gap: 'Turn ___ the TV, the game is starting!', part: 'on', pt: 'ligar' },
    { v: 'turn off', gap: 'Please turn ___ the lights when you leave.', part: 'off', pt: 'desligar / apagar' },
    { v: 'turn down', gap: 'They turned ___ my proposal.', part: 'down', pt: 'recusar / abaixar' },
    { v: 'turn into', gap: 'At night, the Boto turns ___ a handsome man.', part: 'into', pt: 'transformar-se em' },
    { v: 'look for', gap: 'I am looking ___ my glasses.', part: 'for', pt: 'procurar' },
    { v: 'look after', gap: 'She looks ___ her little brother.', part: 'after', pt: 'cuidar de' },
    { v: 'look up', gap: 'You can look ___ this word in the dictionary.', part: 'up', pt: 'pesquisar (palavra)' },
    { v: 'look forward to', gap: 'I look ___ to meeting you.', part: 'forward', pt: 'aguardar ansiosamente' },
    { v: 'put on', gap: 'Put ___ your coat, it is cold outside.', part: 'on', pt: 'vestir / colocar' },
    { v: 'put off', gap: 'Do not put ___ until tomorrow what you can do today.', part: 'off', pt: 'adiar' },
    { v: 'put up with', gap: 'I cannot put ___ with this noise anymore.', part: 'up', pt: 'aguentar / tolerar' },
    { v: 'run out of', gap: 'We ran ___ of coffee this morning.', part: 'out', pt: 'ficar sem' },
    { v: 'run into', gap: 'I ran ___ an old friend at the mall.', part: 'into', pt: 'encontrar por acaso' },
    { v: 'run away', gap: 'The Saci ran ___ laughing.', part: 'away', pt: 'fugir' },
    { v: 'break up', gap: 'They broke ___ after five years together.', part: 'up', pt: 'terminar (namoro)' },
    { v: 'break down', gap: 'My car broke ___ on the highway.', part: 'down', pt: 'quebrar / pifar' },
    { v: 'come back', gap: 'Please come ___ soon, we miss you.', part: 'back', pt: 'voltar' },
    { v: 'come up with', gap: 'She came ___ with a brilliant idea.', part: 'up', pt: 'ter uma ideia / inventar' },
    { v: 'go on', gap: 'The show must go ___.', part: 'on', pt: 'continuar' },
    { v: 'go out', gap: 'Let us go ___ for dinner tonight.', part: 'out', pt: 'sair (para se divertir)' },
    { v: 'find out', gap: 'I need to find ___ the truth about the curse.', part: 'out', pt: 'descobrir' },
    { v: 'figure out', gap: 'I cannot figure ___ this puzzle.', part: 'out', pt: 'entender / resolver' },
    { v: 'work out', gap: 'I work ___ at the gym three times a week.', part: 'out', pt: 'malhar / dar certo' },
    { v: 'show up', gap: 'He did not show ___ to the meeting.', part: 'up', pt: 'aparecer / comparecer' },
    { v: 'hang out', gap: 'We used to hang ___ after school.', part: 'out', pt: 'passar tempo juntos' },
    { v: 'pick up', gap: 'Can you pick ___ the kids at school?', part: 'up', pt: 'pegar / buscar' },
    { v: 'throw away', gap: 'Do not throw ___ that old box.', part: 'away', pt: 'jogar fora' },
    { v: 'try on', gap: 'Can I try ___ these shoes?', part: 'on', pt: 'experimentar (roupa)' },
    { v: 'wake up', gap: 'I wake ___ before sunrise.', part: 'up', pt: 'acordar' },
    { v: 'calm down', gap: 'Calm ___, it is just a game.', part: 'down', pt: 'acalmar-se' },
    { v: 'cheer up', gap: 'Cheer ___! You almost won.', part: 'up', pt: 'animar-se' },
    { v: 'hold on', gap: 'Hold ___, I will be right back.', part: 'on', pt: 'esperar / aguardar' },
    { v: 'check out', gap: 'Check ___ this new song, it is great.', part: 'out', pt: 'dar uma olhada' }
  ];
  D.PARTICLES = ['up', 'down', 'on', 'off', 'out', 'in', 'over', 'after', 'for', 'into', 'away', 'back', 'with', 'forward', 'by', 'along', 'of', 'to'];
  D.phByV = function (v) {
    for (let i = 0; i < D.PHRASAL.length; i++) if (D.PHRASAL[i].v === v) return D.PHRASAL[i];
    return null;
  };

  // ---------------- VERBOS IRREGULARES (a lua do Lobisomem) ----------------
  D.IRREG = [
    { b: 'be', p: 'was/were', pp: 'been', pt: 'ser / estar' },
    { b: 'begin', p: 'began', pp: 'begun', pt: 'começar' },
    { b: 'break', p: 'broke', pp: 'broken', pt: 'quebrar' },
    { b: 'bring', p: 'brought', pp: 'brought', pt: 'trazer' },
    { b: 'build', p: 'built', pp: 'built', pt: 'construir' },
    { b: 'buy', p: 'bought', pp: 'bought', pt: 'comprar' },
    { b: 'catch', p: 'caught', pp: 'caught', pt: 'pegar / capturar' },
    { b: 'choose', p: 'chose', pp: 'chosen', pt: 'escolher' },
    { b: 'come', p: 'came', pp: 'come', pt: 'vir' },
    { b: 'do', p: 'did', pp: 'done', pt: 'fazer' },
    { b: 'drink', p: 'drank', pp: 'drunk', pt: 'beber' },
    { b: 'drive', p: 'drove', pp: 'driven', pt: 'dirigir' },
    { b: 'eat', p: 'ate', pp: 'eaten', pt: 'comer' },
    { b: 'fall', p: 'fell', pp: 'fallen', pt: 'cair' },
    { b: 'feel', p: 'felt', pp: 'felt', pt: 'sentir' },
    { b: 'fight', p: 'fought', pp: 'fought', pt: 'lutar' },
    { b: 'find', p: 'found', pp: 'found', pt: 'encontrar' },
    { b: 'fly', p: 'flew', pp: 'flown', pt: 'voar' },
    { b: 'forget', p: 'forgot', pp: 'forgotten', pt: 'esquecer' },
    { b: 'get', p: 'got', pp: 'gotten/got', pt: 'conseguir / obter' },
    { b: 'give', p: 'gave', pp: 'given', pt: 'dar' },
    { b: 'go', p: 'went', pp: 'gone', pt: 'ir' },
    { b: 'grow', p: 'grew', pp: 'grown', pt: 'crescer' },
    { b: 'have', p: 'had', pp: 'had', pt: 'ter' },
    { b: 'hear', p: 'heard', pp: 'heard', pt: 'ouvir' },
    { b: 'hide', p: 'hid', pp: 'hidden', pt: 'esconder' },
    { b: 'keep', p: 'kept', pp: 'kept', pt: 'manter / guardar' },
    { b: 'know', p: 'knew', pp: 'known', pt: 'saber / conhecer' },
    { b: 'leave', p: 'left', pp: 'left', pt: 'partir / deixar' },
    { b: 'lose', p: 'lost', pp: 'lost', pt: 'perder' },
    { b: 'make', p: 'made', pp: 'made', pt: 'fazer / criar' },
    { b: 'meet', p: 'met', pp: 'met', pt: 'conhecer / encontrar' },
    { b: 'pay', p: 'paid', pp: 'paid', pt: 'pagar' },
    { b: 'put', p: 'put', pp: 'put', pt: 'colocar' },
    { b: 'read', p: 'read', pp: 'read', pt: 'ler' },
    { b: 'ride', p: 'rode', pp: 'ridden', pt: 'andar de / cavalgar' },
    { b: 'run', p: 'ran', pp: 'run', pt: 'correr' },
    { b: 'say', p: 'said', pp: 'said', pt: 'dizer' },
    { b: 'see', p: 'saw', pp: 'seen', pt: 'ver' },
    { b: 'sell', p: 'sold', pp: 'sold', pt: 'vender' },
    { b: 'send', p: 'sent', pp: 'sent', pt: 'enviar' },
    { b: 'sing', p: 'sang', pp: 'sung', pt: 'cantar' },
    { b: 'sleep', p: 'slept', pp: 'slept', pt: 'dormir' },
    { b: 'speak', p: 'spoke', pp: 'spoken', pt: 'falar' },
    { b: 'steal', p: 'stole', pp: 'stolen', pt: 'roubar' },
    { b: 'swim', p: 'swam', pp: 'swum', pt: 'nadar' },
    { b: 'take', p: 'took', pp: 'taken', pt: 'pegar / levar' },
    { b: 'teach', p: 'taught', pp: 'taught', pt: 'ensinar' },
    { b: 'tell', p: 'told', pp: 'told', pt: 'contar / dizer' },
    { b: 'think', p: 'thought', pp: 'thought', pt: 'pensar' },
    { b: 'throw', p: 'threw', pp: 'thrown', pt: 'jogar / lançar' },
    { b: 'understand', p: 'understood', pp: 'understood', pt: 'entender' },
    { b: 'wear', p: 'wore', pp: 'worn', pt: 'vestir / usar (roupa)' },
    { b: 'win', p: 'won', pp: 'won', pt: 'vencer' },
    { b: 'write', p: 'wrote', pp: 'written', pt: 'escrever' }
  ];
  D.irByB = function (b) {
    for (let i = 0; i < D.IRREG.length; i++) if (D.IRREG[i].b === b) return D.IRREG[i];
    return null;
  };

  // ---------------- PRONÚNCIA DO -ED ----------------
  // s: 't' | 'd' | 'id'
  D.ED = [
    { w: 'worked', s: 't', pt: 'trabalhou' }, { w: 'played', s: 'd', pt: 'jogou / brincou' },
    { w: 'wanted', s: 'id', pt: 'quis' }, { w: 'needed', s: 'id', pt: 'precisou' },
    { w: 'watched', s: 't', pt: 'assistiu' }, { w: 'lived', s: 'd', pt: 'viveu / morou' },
    { w: 'decided', s: 'id', pt: 'decidiu' }, { w: 'stopped', s: 't', pt: 'parou' },
    { w: 'planned', s: 'd', pt: 'planejou' }, { w: 'visited', s: 'id', pt: 'visitou' },
    { w: 'washed', s: 't', pt: 'lavou' }, { w: 'called', s: 'd', pt: 'chamou / ligou' },
    { w: 'started', s: 'id', pt: 'começou' }, { w: 'helped', s: 't', pt: 'ajudou' },
    { w: 'loved', s: 'd', pt: 'amou' }, { w: 'hated', s: 'id', pt: 'odiou' },
    { w: 'kissed', s: 't', pt: 'beijou' }, { w: 'cleaned', s: 'd', pt: 'limpou' },
    { w: 'ended', s: 'id', pt: 'terminou' }, { w: 'laughed', s: 't', pt: 'riu' },
    { w: 'stayed', s: 'd', pt: 'ficou' }, { w: 'waited', s: 'id', pt: 'esperou' },
    { w: 'cooked', s: 't', pt: 'cozinhou' }, { w: 'opened', s: 'd', pt: 'abriu' },
    { w: 'invited', s: 'id', pt: 'convidou' }, { w: 'danced', s: 't', pt: 'dançou' },
    { w: 'closed', s: 'd', pt: 'fechou' }, { w: 'counted', s: 'id', pt: 'contou (números)' },
    { w: 'missed', s: 't', pt: 'sentiu falta / perdeu' }, { w: 'studied', s: 'd', pt: 'estudou' },
    { w: 'painted', s: 'id', pt: 'pintou' }, { w: 'talked', s: 't', pt: 'conversou' },
    { w: 'listened', s: 'd', pt: 'escutou' }, { w: 'repeated', s: 'id', pt: 'repetiu' },
    { w: 'fixed', s: 't', pt: 'consertou' }, { w: 'enjoyed', s: 'd', pt: 'curtiu / aproveitou' }
  ];
  D.edByW = function (w) {
    for (let i = 0; i < D.ED.length; i++) if (D.ED[i].w === w) return D.ED[i];
    return null;
  };

  // ---------------- PREPOSIÇÕES IN / ON / AT (as lacunas da Mula) ----------------
  D.PREP = [
    { s: '___ Monday', a: 'on', pt: 'na segunda-feira' },
    { s: '___ 1998', a: 'in', pt: 'em 1998' },
    { s: '___ night', a: 'at', pt: 'à noite' },
    { s: '___ the morning', a: 'in', pt: 'de manhã' },
    { s: '___ noon', a: 'at', pt: 'ao meio-dia' },
    { s: '___ July', a: 'in', pt: 'em julho' },
    { s: '___ Christmas Day', a: 'on', pt: 'no dia de Natal' },
    { s: '___ my birthday', a: 'on', pt: 'no meu aniversário' },
    { s: '___ seven o\'clock', a: 'at', pt: 'às sete horas' },
    { s: '___ the afternoon', a: 'in', pt: 'à tarde' },
    { s: '___ midnight', a: 'at', pt: 'à meia-noite' },
    { s: '___ Fridays', a: 'on', pt: 'às sextas-feiras' },
    { s: '___ winter', a: 'in', pt: 'no inverno' },
    { s: '___ the 21st century', a: 'in', pt: 'no século 21' },
    { s: '___ sunrise', a: 'at', pt: 'ao nascer do sol' },
    { s: '___ the bus', a: 'on', pt: 'no ônibus' },
    { s: '___ a taxi', a: 'in', pt: 'num táxi' },
    { s: '___ home', a: 'at', pt: 'em casa' },
    { s: '___ school', a: 'at', pt: 'na escola' },
    { s: '___ Brazil', a: 'in', pt: 'no Brasil' },
    { s: '___ São Paulo', a: 'in', pt: 'em São Paulo' },
    { s: '___ the airport', a: 'at', pt: 'no aeroporto' },
    { s: '___ the third floor', a: 'on', pt: 'no terceiro andar' },
    { s: '___ the kitchen', a: 'in', pt: 'na cozinha' },
    { s: '___ the wall', a: 'on', pt: 'na parede' },
    { s: '___ the table', a: 'on', pt: 'na mesa (em cima)' },
    { s: '___ the box', a: 'in', pt: 'na caixa (dentro)' },
    { s: '___ the door', a: 'at', pt: 'à porta' },
    { s: '___ the beach', a: 'on', pt: 'na praia' },
    { s: '___ the sky', a: 'in', pt: 'no céu' },
    { s: '___ work', a: 'at', pt: 'no trabalho' },
    { s: '___ TV', a: 'on', pt: 'na TV' },
    { s: '___ the internet', a: 'on', pt: 'na internet' },
    { s: '___ the newspaper', a: 'in', pt: 'no jornal' },
    { s: '___ the party', a: 'at', pt: 'na festa' },
    { s: '___ line', a: 'in', pt: 'na fila' }
  ];

  // ---------------- REGIÕES E CHEFES ----------------
  // kinds: tipos de desafio da região | boss.kinds: assinatura do chefe
  D.REGIONS = [
    {
      key: 'saci', name: 'Trilha do Saci', letter: 'E',
      desc: 'Poeira, redemoinhos e risadinhas na trilha.',
      pal: { a: '#241040', b: '#c65a1e', glow: '#ffb35c', deco: 'motes' },
      kinds: ['venpt', 'vpten', 'ff'],
      minions: ['Sacizinho', 'Capetinha do Mato', 'Redemoinho Faminto', 'Perereca Zombeteira', 'Moleque do Vento'],
      boss: {
        key: 'saci', name: 'Saci-Pererê', title: 'O Trapaceiro do Redemoinho',
        kinds: ['ff'], mech: 'saci',
        intro: [
          'Hihihi! Perdeu a hora ou perdeu o rumo, {name}?',
          'Eu adoro trocar as palavras de lugar. Sabia que "pretend" não é "pretender"? Hihi... ou será que é? 😈',
          'Se cair nas minhas pegadinhas, o tombo dói em DOBRO!'
        ],
        phase: ['REDEMOINHO! Olha tudo girando! Hihihi!'],
        defeat: 'Ai, minha perna única! Tá bom, tá bom... toma a letra E. Mas se liga: as outras lendas não brincam como eu.'
      }
    },
    {
      key: 'curupira', name: 'Mata do Curupira', letter: 'N',
      desc: 'A mata fecha. Os passos apontam para trás.',
      pal: { a: '#04241f', b: '#0d5c3f', glow: '#67ff9e', deco: 'motes' },
      kinds: ['venpt', 'build', 'odd'],
      minions: ['Espírito da Mata', 'Tatu Encantado', 'Cipó Vivo', 'Jaguatirica Sombria', 'Guardião da Trilha'],
      boss: {
        key: 'curupira', name: 'Curupira', title: 'O Guardião dos Passos Invertidos',
        kinds: ['build'], mech: null,
        intro: [
          'Meus pés apontam para trás... e as frases dos invasores também!',
          '!sarvalap sa rahnilaseD :oifaseD',
          'Se você entendeu a linha de cima de trás pra frente, talvez tenha chance. Monte as frases na ordem certa!'
        ],
        phase: ['Agora a mata inteira vai girar com você dentro!'],
        defeat: 'Você... colocou meus pensamentos em ordem. A letra N é sua. Siga o canto do rio — mas não escute demais.'
      }
    },
    {
      key: 'iara', name: 'Rio da Iara', letter: 'G',
      desc: 'O rio canta. Não escute demais.',
      pal: { a: '#032433', b: '#0a6d80', glow: '#5ce8ff', deco: 'bubbles' },
      kinds: ['ltype', 'lpair', 'venpt'],
      minions: ['Peixe Encantado', 'Uirapuru Sombrio', 'Piranha Poliglota', 'Espírito do Rio', 'Vitória-Régia Viva'],
      boss: {
        key: 'iara', name: 'Iara', title: 'A Voz que Afoga',
        kinds: ['ltype', 'lpair'], mech: 'iara',
        intro: [
          'Shhh... escute. 🎶',
          'Minha voz já afogou marinheiro que jurava saber listening.',
          'Escreva o que ouvir... se conseguir resistir ao meu canto.'
        ],
        phase: ['Que bonitinho. Agora vou cantar MAIS RÁPIDO, meu bem. 🎶'],
        defeat: 'Que ouvido afiado... Leve a letra G. O Boto te espera rio abaixo — e ele é cheio de conversa.'
      }
    },
    {
      key: 'boto', name: 'Baile do Boto', letter: 'L',
      desc: 'À noite, o rio ganha um cavalheiro de chapéu branco.',
      pal: { a: '#160a2e', b: '#7a2a63', glow: '#ff8ad4', deco: 'bubbles' },
      kinds: ['phg', 'phm', 'vpten'],
      minions: ['Golfinho Malandro', 'Camaleão de Chapéu', 'Ilusão Cor-de-Rosa', 'Marujo Encantado', 'Caranguejo Falastrão'],
      boss: {
        key: 'boto', name: 'Boto Encantado', title: 'O Cavalheiro das Mil Palavras',
        kinds: ['phg', 'phm'], mech: null,
        intro: [
          'Boa noite! Chapéu novo, sorriso no rosto... e um bolso cheio de phrasal verbs.',
          'GET UP, GET OVER, GET ALONG... uma palavrinha e mil sentidos. Consegue acompanhar o baile?',
          'Uma partícula errada e você dança comigo até o fundo do rio.'
        ],
        phase: ['Agora o baile acelera! Segura o chapéu!'],
        defeat: 'Você dança bem, hein! A letra L é sua, com elegância. Cuidado no vale — lá nem todo mundo tem cabeça.'
      }
    },
    {
      key: 'mula', name: 'Vale da Mula', letter: 'I',
      desc: 'Cinzas, brasas e um galope sem rosto.',
      pal: { a: '#1c0f0d', b: '#68210f', glow: '#ff7a3c', deco: 'embers' },
      kinds: ['prep', 'venpt', 'odd'],
      minions: ['Chama Errante', 'Corvo de Brasa', 'Ferradura Voadora', 'Espírito do Vale', 'Fantasma Sem Rosto'],
      boss: {
        key: 'mula', name: 'Mula-sem-cabeça', title: 'A Fúria das Lacunas',
        kinds: ['prep'], mech: null,
        intro: [
          '*RIIINCH!* 🔥 (legenda: "Complete as lacunas... se puder!")',
          '*bufa fogo* (legenda: "IN? ON? AT? Foi assim que eu perdi a cabeça!")',
          '*bate o casco* (legenda: "Errou a preposição, levou coice.")'
        ],
        phase: ['*RINCHO FURIOSO* (legenda: "AGORA EU VOU DE GALOPE!")'],
        defeat: '*rincho manso* (legenda: "Obrigada... era isso que faltava na minha cabeça: a letra I.")'
      }
    },
    {
      key: 'lobisomem', name: 'Serra do Lobisomem', letter: 'S',
      desc: 'A serra uiva quando a lua engorda.',
      pal: { a: '#0a1030', b: '#26346b', glow: '#aebfff', deco: 'moon' },
      kinds: ['irr', 'ed', 'vpten'],
      minions: ['Lobinho', 'Morcego da Serra', 'Sombra Uivante', 'Coruja do Breu', 'Espinho Noturno'],
      boss: {
        key: 'lobisomem', name: 'Lobisomem', title: 'O Verbo que Vira Fera',
        kinds: ['irr', 'ed'], mech: null,
        intro: [
          'AUUUUU! Sente a lua? Ela muda de forma... como os verbos irregulares!',
          'GO virou WENT. Eu viro lobo. Todo mundo carrega um passado.',
          'Mostre que domina as transformações — ou vire meu lanche. Aliás, "lunch" é almoço. AUUU!'
        ],
        phase: ['LUA CHEIA! SINTA O PARTICÍPIO PASSADO!'],
        defeat: 'Grrr... você domou o meu passado. Leve a letra S. Agora só resta... ELA. Boa sorte. Você vai precisar.'
      }
    },
    {
      key: 'cuca', name: 'Caldeirão da Cuca', letter: 'H',
      desc: 'O caldeirão ferve. A insônia tem dona.',
      pal: { a: '#170826', b: '#3f1057', glow: '#9dff7a', deco: 'bubbles' },
      kinds: ['venpt', 'vpten', 'ff', 'build', 'ltype', 'phg', 'prep', 'irr', 'ed', 'odd', 'lpair'],
      minions: ['Cria da Cuca', 'Jacaré do Caldeirão', 'Pesadelo Menor', 'Sombra Borbulhante', 'Feitiço Ambulante'],
      boss: {
        key: 'cuca', name: 'CUCA', title: 'A Dona do Pesadelo',
        kinds: ['ff', 'build', 'ltype', 'phg', 'prep', 'irr', 'venpt', 'vpten'], mech: 'cuca',
        intro: [
          'Então foi VOCÊ que acordou este jacaré velho... Eu ia dormir mais cem anos.',
          'Seis lendas caíram? Que pena. Eu sou o pesadelo ORIGINAL.',
          'Nana neném... que a Cuca vem pegar... o seu inglês! 🎶'
        ],
        phase: [
          'Que soninho, não? NANA NENÉM! (o tempo corre mais rápido!)',
          'CHEGA! Caldeirão, ferva TUDO! (mais rápido ainda!)'
        ],
        defeat: 'Impossível... derrotada... por um estudante?! ... Toma. A letra H. O feitiço... se desfaz. Vá. E nunca mais me acorde. 💜'
      }
    }
  ];

  // ---------------- ITENS DA VENDINHA ----------------
  D.ITEMS = {
    cafezinho: { name: 'Cafezinho', e: '☕', desc: 'Recupera 35 de HP no meio da batalha.', price: 25 },
    paodequeijo: { name: 'Pão de Queijo', e: '🧀', desc: 'Recupera 18 de HP. Quentinho.', price: 12 },
    dicionario: { name: 'Dicionário Velho', e: '📖', desc: 'Dá uma dica: elimina opções erradas ou revela parte da resposta.', price: 30 },
    chinelo: { name: 'Chinelo da Vó', e: '🩴', desc: 'Seu próximo acerto vira um CRÍTICO devastador (x2).', price: 35 },
    ampulheta: { name: 'Ampulheta Torta', e: '⏳', desc: 'Devolve 8 segundos ao tempo da pergunta atual.', price: 30 },
    patua: { name: 'Patuá', e: '🧿', desc: 'Proteção: se você cair, levanta uma vez com metade do HP.', price: 60 }
  };
  D.ITEM_ORDER = ['cafezinho', 'paodequeijo', 'dicionario', 'chinelo', 'ampulheta', 'patua'];

  // ---------------- TEXTOS ----------------
  D.STORY = [
    'Era uma noite comum no Brasil... até a CUCA lançar seu feitiço.',
    'Todas as palavras em inglês do país foram enfeitiçadas. Letreiros, músicas, legendas — tudo virou grunhido de monstro.',
    'Sete lendas guardam as sete letras do contra-feitiço: E-N-G-L-I-S-H.',
    'Armado com o Grimório, alguém precisa desencantar o inglês. Esse alguém... é você.'
  ];

  D.SHOPLINES = [
    'Bem-vindo à vendinha do brejo! 🐸',
    'Cafezinho tá saindo mais que água de chuva.',
    'O patuá é caro, mas ninguém reclamou depois de usar.',
    'Volte sempre! E cuidado com a Mula, ela anda nervosa.',
    'Aceito moedas, não aceito desaforo. Croac.'
  ];

  D.MINION_TAUNTS = [
    '*grunhidos enfeitiçados*',
    'Grrr... cheiro de estudante!',
    '*rosna em inglês embaralhado*',
    'A Cuca mandou lembranças!',
    '*bufa e mostra os dentes*',
    'Ninguém passa da minha trilha!'
  ];

  D.GHOST_INTRO = [
    'Uuuuh... lembra de mim? Você me errou uma vez...',
    'As palavras esquecidas voltam para assombrar!',
    'Uuuuh... me acerte duas vezes e eu descanso em paz.'
  ];

  // rótulos e emojis por tipo de desafio
  D.KIND_INFO = {
    venpt: { label: 'Tradução EN→PT', e: '🇺🇸' },
    vpten: { label: 'Tradução PT→EN', e: '🇧🇷' },
    ff: { label: 'Falsos Amigos', e: '🎭' },
    odd: { label: 'Caça-Intruso', e: '🕵️' },
    build: { label: 'Montar Frases', e: '🧩' },
    ltype: { label: 'Ouvir e Escrever', e: '🎧' },
    lpair: { label: 'Pares de Som', e: '👂' },
    speak: { label: 'Pronúncia', e: '🎤' },
    ed: { label: 'Som do -ED', e: '🔚' },
    irr: { label: 'Verbos Irregulares', e: '🌕' },
    prep: { label: 'Preposições', e: '📍' },
    phg: { label: 'Phrasal Verbs', e: '🐬' },
    phm: { label: 'Phrasal: Sentido', e: '💬' }
  };
})(typeof window !== 'undefined' ? window : globalThis);
