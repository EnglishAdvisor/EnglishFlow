/* FIRST OIL — data2.js
   Conteúdo técnico, parte 2: siglas, falsos amigos profissionais, phrasal verbs
   operacionais, verbos irregulares, -ED, preposições e alfabeto fonético NATO. */
(function (root) {
  const G = root.G = root.G || {};
  const D = G.DATA = G.DATA || {};

  // ---------------- SIGLAS (a língua franca do O&G) ----------------
  D.ABBR = [
    { a: 'BOP', full: 'Blowout Preventer', pt: 'preventor de erupção' },
    { a: 'FPSO', full: 'Floating Production Storage and Offloading', pt: 'unidade flutuante de produção, armazenamento e transferência' },
    { a: 'HSE', full: 'Health, Safety and Environment', pt: 'saúde, segurança e meio ambiente' },
    { a: 'PPE', full: 'Personal Protective Equipment', pt: 'EPI — equipamento de proteção individual' },
    { a: 'PTW', full: 'Permit To Work', pt: 'permissão de trabalho' },
    { a: 'LOTO', full: 'Lockout Tagout', pt: 'bloqueio e etiquetagem' },
    { a: 'ESD', full: 'Emergency Shutdown', pt: 'parada de emergência' },
    { a: 'PSV', full: 'Pressure Safety Valve', pt: 'válvula de segurança de pressão' },
    { a: 'LEL', full: 'Lower Explosive Limit', pt: 'limite inferior de explosividade' },
    { a: 'H2S', full: 'Hydrogen Sulfide', pt: 'gás sulfídrico (ácido sulfídrico)' },
    { a: 'JSA', full: 'Job Safety Analysis', pt: 'análise de segurança da tarefa' },
    { a: 'NPT', full: 'Non-Productive Time', pt: 'tempo não produtivo' },
    { a: 'ROP', full: 'Rate Of Penetration', pt: 'taxa de penetração' },
    { a: 'WOB', full: 'Weight On Bit', pt: 'peso sobre a broca' },
    { a: 'TVD', full: 'True Vertical Depth', pt: 'profundidade vertical verdadeira' },
    { a: 'MD', full: 'Measured Depth', pt: 'profundidade medida' },
    { a: 'ROV', full: 'Remotely Operated Vehicle', pt: 'veículo operado remotamente' },
    { a: 'DP', full: 'Dynamic Positioning', pt: 'posicionamento dinâmico' },
    { a: 'MODU', full: 'Mobile Offshore Drilling Unit', pt: 'unidade móvel de perfuração offshore' },
    { a: 'OIM', full: 'Offshore Installation Manager', pt: 'gerente da instalação offshore' },
    { a: 'POB', full: 'Personnel On Board', pt: 'pessoal a bordo' },
    { a: 'ETA', full: 'Estimated Time of Arrival', pt: 'horário estimado de chegada' },
    { a: 'FEED', full: 'Front End Engineering Design', pt: 'projeto básico de engenharia' },
    { a: 'EPC', full: 'Engineering, Procurement and Construction', pt: 'engenharia, suprimentos e construção' },
    { a: 'LNG', full: 'Liquefied Natural Gas', pt: 'gás natural liquefeito (GNL)' },
    { a: 'LPG', full: 'Liquefied Petroleum Gas', pt: 'gás liquefeito de petróleo (GLP)' },
    { a: 'API', full: 'American Petroleum Institute', pt: 'instituto americano de petróleo (grau API)' },
    { a: 'BSW', full: 'Basic Sediment and Water', pt: 'sedimentos básicos e água (corte de água)' },
    { a: 'GOR', full: 'Gas-Oil Ratio', pt: 'razão gás-óleo' },
    { a: 'EOR', full: 'Enhanced Oil Recovery', pt: 'recuperação avançada de petróleo' },
    { a: 'P&ID', full: 'Piping and Instrumentation Diagram', pt: 'diagrama de tubulação e instrumentação' },
    { a: 'PFD', full: 'Process Flow Diagram', pt: 'fluxograma de processo' },
    { a: 'HAZOP', full: 'Hazard and Operability Study', pt: 'estudo de perigos e operabilidade' },
    { a: 'HAZID', full: 'Hazard Identification', pt: 'identificação de perigos' },
    { a: 'SIL', full: 'Safety Integrity Level', pt: 'nível de integridade de segurança' },
    { a: 'F&G', full: 'Fire and Gas', pt: 'sistema de fogo e gás' },
    { a: 'NDT', full: 'Non-Destructive Testing', pt: 'ensaio não destrutivo' },
    { a: 'CUI', full: 'Corrosion Under Insulation', pt: 'corrosão sob isolamento' },
    { a: 'MOC', full: 'Management Of Change', pt: 'gestão de mudanças' },
    { a: 'SIMOPS', full: 'Simultaneous Operations', pt: 'operações simultâneas' },
    { a: 'DSV', full: 'Diving Support Vessel', pt: 'embarcação de apoio a mergulho' },
    { a: 'PLEM', full: 'Pipeline End Manifold', pt: 'manifold de fim de duto' },
    { a: 'SPM', full: 'Single Point Mooring', pt: 'monoboia (amarração em ponto único)' },
    { a: 'VLCC', full: 'Very Large Crude Carrier', pt: 'superpetroleiro' },
    { a: 'CDU', full: 'Crude Distillation Unit', pt: 'unidade de destilação de cru' },
    { a: 'FCC', full: 'Fluid Catalytic Cracking', pt: 'craqueamento catalítico fluido' },
    { a: 'RON', full: 'Research Octane Number', pt: 'número de octanagem (pesquisa)' },
    { a: 'KPI', full: 'Key Performance Indicator', pt: 'indicador-chave de desempenho' },
    { a: 'SOW', full: 'Scope Of Work', pt: 'escopo de trabalho' },
    { a: 'MOM', full: 'Minutes Of Meeting', pt: 'ata de reunião' },
    { a: 'ASAP', full: 'As Soon As Possible', pt: 'o mais rápido possível' },
    { a: 'FYI', full: 'For Your Information', pt: 'para sua informação' }
  ];
  D.abbrByA = function (a) {
    for (let i = 0; i < D.ABBR.length; i++) if (D.ABBR[i].a === a) return D.ABBR[i];
    return null;
  };

  // ---------------- FALSOS AMIGOS PROFISSIONAIS ----------------
  D.FF = [
    { w: 'actually', trap: 'atualmente', real: 'na verdade', ex: 'The pump is actually fine; the gauge was broken.', note: '"Atualmente" é "currently". Em reunião, esse erro muda o sentido da frase inteira.' },
    { w: 'eventually', trap: 'eventualmente', real: 'no fim / mais cedo ou tarde', ex: 'The seal will eventually fail if we ignore the vibration.', note: '"Eventualmente" (às vezes) é "occasionally". Em análise de falha, a diferença é crítica.' },
    { w: 'facility', trap: 'facilidade', real: 'instalação (industrial)', ex: 'The new facility will process gas from three fields.', note: '"Facilidade" é "ease". "Facilities" = instalações.' },
    { w: 'casualty', trap: 'casualidade', real: 'vítima (acidentado)', ex: 'The drill was completed with zero casualties.', note: '"Casualidade" é "coincidence". Em HSE, "casualty" é gente ferida.' },
    { w: 'comprehensive', trap: 'compreensivo', real: 'abrangente / completo', ex: 'We need a comprehensive inspection report.', note: '"Compreensivo" é "understanding".' },
    { w: 'compromise', trap: 'compromisso', real: 'acordo / comprometer (integridade)', ex: 'Corrosion can compromise the pipeline integrity.', note: '"Compromisso" (agenda) é "appointment"; (obrigação) é "commitment".' },
    { w: 'injury', trap: 'injúria', real: 'lesão / ferimento', ex: 'Report every injury, even a small cut.', note: '"Injúria" (ofensa) é "insult". LTI = Lost Time Injury.' },
    { w: 'prejudice', trap: 'prejuízo', real: 'preconceito', ex: 'Decisions must be made without prejudice.', note: '"Prejuízo" é "loss" ou "damage".' },
    { w: 'resume', trap: 'resumir', real: 'retomar', ex: 'Operations will resume after the inspection.', note: '"Resumir" é "to summarize". "Resume operations" = retomar a operação.' },
    { w: 'attend', trap: 'atender', real: 'comparecer a', ex: 'All supervisors must attend the HAZOP meeting.', note: '"Atender (telefone)" é "to answer"; (cliente) é "to assist".' },
    { w: 'assist', trap: 'assistir', real: 'ajudar / auxiliar', ex: 'The ROV will assist the diving team.', note: '"Assistir (ver)" é "to watch".' },
    { w: 'support', trap: 'suportar', real: 'apoiar / sustentar', ex: 'The beams support the main deck.', note: '"Suportar (aguentar)" é "to withstand" ou "to put up with".' },
    { w: 'sensible', trap: 'sensível', real: 'sensato', ex: 'Shutting down was the sensible decision.', note: '"Sensível" (instrumento) é "sensitive".' },
    { w: 'notice', trap: 'notícia', real: 'aviso / perceber', ex: 'Did you notice the pressure drop at 3 a.m.?', note: '"Notícia" é "news". "Notice period" = aviso prévio.' },
    { w: 'policy', trap: 'polícia', real: 'política (diretriz)', ex: 'The company policy requires two barriers.', note: '"Polícia" é "police". "HSE policy" = política de SMS.' },
    { w: 'record', trap: 'recordar', real: 'registro / registrar', ex: 'Keep a record of every calibration.', note: '"Recordar" é "to remember". "Track record" = histórico.' },
    { w: 'requirement', trap: 'requerimento', real: 'requisito', ex: 'Gas testing is a requirement for confined space entry.', note: '"Requerimento" (pedido formal) é "request".' },
    { w: 'lecture', trap: 'leitura', real: 'palestra / aula', ex: 'The specialist gave a lecture on well control.', note: '"Leitura" é "reading". "Take a reading" = fazer uma leitura (de instrumento).' },
    { w: 'fabric', trap: 'fábrica', real: 'tecido', ex: 'The coverall fabric is flame resistant.', note: '"Fábrica" é "factory" ou "plant". "Fabrication" = fabricação/caldeiraria.' },
    { w: 'large', trap: 'largo', real: 'grande', ex: 'The FPSO has a large storage capacity.', note: '"Largo" é "wide". "2-inch wide" = 2 polegadas de largura.' },
    { w: 'costume', trap: 'costume', real: 'fantasia', ex: 'That is a costume, not proper PPE.', note: '"Costume" (hábito) é "habit" ou "practice". "Custom" = personalizado.' },
    { w: 'pretend', trap: 'pretender', real: 'fingir', ex: 'Do not pretend you checked the valve.', note: '"Pretender" é "to intend". "We intend to drill in June."' },
    { w: 'push', trap: 'puxar', real: 'empurrar', ex: 'PUSH the door to exit.', note: 'Em rota de fuga, confundir PUSH (empurre) com puxar custa segundos preciosos.' },
    { w: 'exquisite', trap: 'esquisito', real: 'requintado / refinado', ex: 'The weld quality was exquisite.', note: '"Esquisito" é "weird" ou "odd".' },
    { w: 'expert', trap: 'esperto', real: 'especialista', ex: 'An expert in cathodic protection reviewed the design.', note: '"Esperto" é "smart" ou "clever".' },
    { w: 'educated', trap: 'educado', real: 'instruído / qualificado', ex: 'She is a highly educated engineer.', note: '"Educado" (gentil) é "polite".' },
    { w: 'deception', trap: 'decepção', real: 'engano / fraude', ex: 'The report was pure deception.', note: '"Decepção" é "disappointment".' },
    { w: 'tax', trap: 'táxi', real: 'imposto', ex: 'Import tax raised the equipment cost by 30%.', note: '"Táxi" é "taxi" ou "cab".' },
    { w: 'terrific', trap: 'terrível', real: 'excelente', ex: 'The team did a terrific job during the turnaround.', note: '"Terrível" é "terrible". Elogio, não bronca.' },
    { w: 'data', trap: 'data', real: 'dados', ex: 'The well data confirms the reservoir model.', note: '"Data" (dia) é "date". "Data book" = livro de dados do projeto.' }
  ];
  D.ffByWord = function (w) {
    for (let i = 0; i < D.FF.length; i++) if (D.FF[i].w === w) return D.FF[i];
    return null;
  };

  // ---------------- PHRASAL VERBS OPERACIONAIS ----------------
  D.PHRASAL = [
    { v: 'shut down', gap: 'We had to shut ___ the compressor for maintenance.', part: 'down', pt: 'desligar / parar (equipamento)' },
    { v: 'start up', gap: 'The plant will start ___ after the inspection.', part: 'up', pt: 'partir / colocar em operação' },
    { v: 'ramp up', gap: 'Production will ramp ___ to full capacity next month.', part: 'up', pt: 'aumentar gradualmente' },
    { v: 'hook up', gap: 'The crew will hook ___ the new module this week.', part: 'up', pt: 'interligar / conectar' },
    { v: 'bleed off', gap: 'Bleed ___ the pressure before opening the flange.', part: 'off', pt: 'aliviar (pressão) lentamente' },
    { v: 'flare off', gap: 'Excess gas is flared ___ during upsets.', part: 'off', pt: 'queimar no flare' },
    { v: 'blow out', gap: 'Without a BOP, the well could blow ___.', part: 'out', pt: 'entrar em erupção' },
    { v: 'break down', gap: 'The mud pump broke ___ during the night shift.', part: 'down', pt: 'quebrar / falhar' },
    { v: 'carry out', gap: 'We will carry ___ the inspection tomorrow.', part: 'out', pt: 'executar / realizar' },
    { v: 'fill out', gap: 'Fill ___ the permit before starting the job.', part: 'out', pt: 'preencher (formulário)' },
    { v: 'find out', gap: 'We need to find ___ the root cause of the failure.', part: 'out', pt: 'descobrir' },
    { v: 'figure out', gap: 'The engineer figured ___ why the pump was cavitating.', part: 'out', pt: 'entender / resolver' },
    { v: 'follow up', gap: 'Please follow ___ on the open action items.', part: 'up', pt: 'acompanhar / dar seguimento' },
    { v: 'set up', gap: 'They set ___ the scaffold near the tower.', part: 'up', pt: 'montar / instalar' },
    { v: 'take over', gap: 'The day shift takes ___ at six in the morning.', part: 'over', pt: 'assumir (o turno)' },
    { v: 'hand over', gap: 'Hand ___ the logbook to the next operator.', part: 'over', pt: 'passar (turno / entregar)' },
    { v: 'stand by', gap: 'The rescue team is standing ___ near the tower.', part: 'by', pt: 'ficar de prontidão' },
    { v: 'watch out', gap: 'Watch ___ for slippery surfaces on deck.', part: 'out', pt: 'tomar cuidado' },
    { v: 'run out of', gap: 'The warehouse ran ___ of spare gaskets.', part: 'out', pt: 'ficar sem (estoque)' },
    { v: 'back up', gap: 'Always back ___ the control system data.', part: 'up', pt: 'fazer backup / dar ré' },
    { v: 'scale up', gap: 'The pilot plant results allowed us to scale ___.', part: 'up', pt: 'ampliar a escala' },
    { v: 'phase out', gap: 'The company will phase ___ the old valves.', part: 'out', pt: 'descontinuar gradualmente' },
    { v: 'sign off', gap: 'The supervisor must sign ___ on the permit.', part: 'off', pt: 'aprovar / assinar' },
    { v: 'lock out', gap: 'Lock ___ the breaker before touching the motor.', part: 'out', pt: 'bloquear (energia)' },
    { v: 'line up', gap: 'Line ___ the valves for the transfer.', part: 'up', pt: 'alinhar (válvulas / sistema)' },
    { v: 'top up', gap: 'Top ___ the lube oil before starting the engine.', part: 'up', pt: 'completar (nível)' },
    { v: 'warm up', gap: 'Let the turbine warm ___ for ten minutes.', part: 'up', pt: 'aquecer (equipamento)' },
    { v: 'cool down', gap: 'The furnace needs six hours to cool ___.', part: 'down', pt: 'resfriar' },
    { v: 'plug in', gap: 'Plug ___ the gas detector charger overnight.', part: 'in', pt: 'conectar (na tomada)' },
    { v: 'check in', gap: 'All visitors must check ___ at the gate.', part: 'in', pt: 'registrar entrada' },
    { v: 'look into', gap: 'Quality will look ___ the weld failures.', part: 'into', pt: 'investigar' },
    { v: 'point out', gap: 'The auditor pointed ___ two missing records.', part: 'out', pt: 'apontar / destacar' },
    { v: 'put off', gap: 'Never put ___ a safety repair.', part: 'off', pt: 'adiar' },
    { v: 'call off', gap: 'They called ___ the lift because of the wind.', part: 'off', pt: 'cancelar' },
    { v: 'go ahead', gap: 'You have the green light — go ___.', part: 'ahead', pt: 'prosseguir' },
    { v: 'step in', gap: 'The supervisor stepped ___ to stop the unsafe act.', part: 'in', pt: 'intervir' }
  ];
  D.PARTICLES = ['up', 'down', 'on', 'off', 'out', 'in', 'over', 'by', 'into', 'away', 'back', 'ahead', 'of', 'for', 'after', 'with'];
  D.phByV = function (v) {
    for (let i = 0; i < D.PHRASAL.length; i++) if (D.PHRASAL[i].v === v) return D.PHRASAL[i];
    return null;
  };

  // ---------------- VERBOS IRREGULARES (os que aparecem em relatório) ----------------
  D.IRREG = [
    { b: 'be', p: 'was/were', pp: 'been', pt: 'ser / estar' },
    { b: 'begin', p: 'began', pp: 'begun', pt: 'começar' },
    { b: 'break', p: 'broke', pp: 'broken', pt: 'quebrar' },
    { b: 'bring', p: 'brought', pp: 'brought', pt: 'trazer' },
    { b: 'build', p: 'built', pp: 'built', pt: 'construir' },
    { b: 'buy', p: 'bought', pp: 'bought', pt: 'comprar' },
    { b: 'catch', p: 'caught', pp: 'caught', pt: 'capturar / pegar' },
    { b: 'choose', p: 'chose', pp: 'chosen', pt: 'escolher' },
    { b: 'come', p: 'came', pp: 'come', pt: 'vir' },
    { b: 'cost', p: 'cost', pp: 'cost', pt: 'custar' },
    { b: 'cut', p: 'cut', pp: 'cut', pt: 'cortar' },
    { b: 'do', p: 'did', pp: 'done', pt: 'fazer' },
    { b: 'drive', p: 'drove', pp: 'driven', pt: 'dirigir / acionar' },
    { b: 'fall', p: 'fell', pp: 'fallen', pt: 'cair' },
    { b: 'feel', p: 'felt', pp: 'felt', pt: 'sentir' },
    { b: 'find', p: 'found', pp: 'found', pt: 'encontrar' },
    { b: 'get', p: 'got', pp: 'gotten/got', pt: 'obter / conseguir' },
    { b: 'give', p: 'gave', pp: 'given', pt: 'dar' },
    { b: 'go', p: 'went', pp: 'gone', pt: 'ir' },
    { b: 'have', p: 'had', pp: 'had', pt: 'ter' },
    { b: 'hear', p: 'heard', pp: 'heard', pt: 'ouvir' },
    { b: 'hold', p: 'held', pp: 'held', pt: 'segurar / realizar (reunião)' },
    { b: 'keep', p: 'kept', pp: 'kept', pt: 'manter' },
    { b: 'know', p: 'knew', pp: 'known', pt: 'saber / conhecer' },
    { b: 'lead', p: 'led', pp: 'led', pt: 'liderar / conduzir' },
    { b: 'leave', p: 'left', pp: 'left', pt: 'sair / deixar' },
    { b: 'lose', p: 'lost', pp: 'lost', pt: 'perder' },
    { b: 'make', p: 'made', pp: 'made', pt: 'fazer / fabricar' },
    { b: 'meet', p: 'met', pp: 'met', pt: 'reunir-se / atender (requisito)' },
    { b: 'pay', p: 'paid', pp: 'paid', pt: 'pagar' },
    { b: 'put', p: 'put', pp: 'put', pt: 'colocar' },
    { b: 'read', p: 'read', pp: 'read', pt: 'ler' },
    { b: 'run', p: 'ran', pp: 'run', pt: 'operar / correr' },
    { b: 'say', p: 'said', pp: 'said', pt: 'dizer' },
    { b: 'see', p: 'saw', pp: 'seen', pt: 'ver' },
    { b: 'send', p: 'sent', pp: 'sent', pt: 'enviar' },
    { b: 'set', p: 'set', pp: 'set', pt: 'ajustar / definir' },
    { b: 'shut', p: 'shut', pp: 'shut', pt: 'fechar / desligar' },
    { b: 'speak', p: 'spoke', pp: 'spoken', pt: 'falar' },
    { b: 'take', p: 'took', pp: 'taken', pt: 'pegar / levar' },
    { b: 'tell', p: 'told', pp: 'told', pt: 'contar / informar' },
    { b: 'think', p: 'thought', pp: 'thought', pt: 'pensar' },
    { b: 'understand', p: 'understood', pp: 'understood', pt: 'entender' },
    { b: 'write', p: 'wrote', pp: 'written', pt: 'escrever / redigir' }
  ];
  D.irByB = function (b) {
    for (let i = 0; i < D.IRREG.length; i++) if (D.IRREG[i].b === b) return D.IRREG[i];
    return null;
  };

  // ---------------- PRONÚNCIA DO -ED (verbos de relatório) ----------------
  D.ED = [
    { w: 'inspected', s: 'id', pt: 'inspecionou' }, { w: 'checked', s: 't', pt: 'verificou' },
    { w: 'tested', s: 'id', pt: 'testou' }, { w: 'stopped', s: 't', pt: 'parou' },
    { w: 'calibrated', s: 'id', pt: 'calibrou' }, { w: 'cleaned', s: 'd', pt: 'limpou' },
    { w: 'isolated', s: 'id', pt: 'isolou' }, { w: 'flushed', s: 't', pt: 'lavou (com fluxo)' },
    { w: 'drained', s: 'd', pt: 'drenou' }, { w: 'vented', s: 'id', pt: 'aliviou (respiro)' },
    { w: 'purged', s: 'd', pt: 'purgou (inertizou)' }, { w: 'torqued', s: 't', pt: 'apertou com torque' },
    { w: 'welded', s: 'id', pt: 'soldou' }, { w: 'aligned', s: 'd', pt: 'alinhou' },
    { w: 'painted', s: 'id', pt: 'pintou' }, { w: 'capped', s: 't', pt: 'tamponou' },
    { w: 'plugged', s: 'd', pt: 'plugou (obturou)' }, { w: 'cemented', s: 'id', pt: 'cimentou' },
    { w: 'logged', s: 'd', pt: 'registrou (log)' }, { w: 'tripped', s: 't', pt: 'desarmou / manobrou' },
    { w: 'started', s: 'id', pt: 'partiu (iniciou)' }, { w: 'killed', s: 'd', pt: 'amorteceu (o poço)' },
    { w: 'launched', s: 't', pt: 'lançou (o pig)' }, { w: 'repaired', s: 'd', pt: 'reparou' }
  ];
  D.edByW = function (w) {
    for (let i = 0; i < D.ED.length; i++) if (D.ED[i].w === w) return D.ED[i];
    return null;
  };

  // ---------------- PREPOSIÇÕES IN / ON / AT (contexto industrial) ----------------
  D.PREP = [
    { s: '___ the platform', a: 'on', pt: 'na plataforma' },
    { s: '___ the control room', a: 'in', pt: 'na sala de controle' },
    { s: '___ the rig floor', a: 'on', pt: 'na plataforma da sonda' },
    { s: '___ duty', a: 'on', pt: 'de serviço (em turno)' },
    { s: '___ standby', a: 'on', pt: 'de prontidão' },
    { s: '___ the muster point', a: 'at', pt: 'no ponto de encontro' },
    { s: '___ the warehouse', a: 'in', pt: 'no almoxarifado' },
    { s: '___ deck', a: 'on', pt: 'no convés' },
    { s: '___ the pipeline', a: 'in', pt: 'dentro do duto' },
    { s: '___ the terminal', a: 'at', pt: 'no terminal' },
    { s: '___ night shift', a: 'on', pt: 'no turno da noite' },
    { s: '___ the morning meeting', a: 'at', pt: 'na reunião da manhã' },
    { s: '___ Monday', a: 'on', pt: 'na segunda-feira' },
    { s: '___ 2026', a: 'in', pt: 'em 2026' },
    { s: '___ six o\'clock', a: 'at', pt: 'às seis horas' },
    { s: '___ July', a: 'in', pt: 'em julho' },
    { s: '___ the weekend shift', a: 'on', pt: 'no turno de fim de semana' },
    { s: '___ midnight', a: 'at', pt: 'à meia-noite' },
    { s: '___ the tank', a: 'in', pt: 'dentro do tanque' },
    { s: '___ the third deck', a: 'on', pt: 'no terceiro convés' },
    { s: '___ the helideck', a: 'on', pt: 'no heliponto' },
    { s: '___ the gate', a: 'at', pt: 'na portaria' },
    { s: '___ Brazil', a: 'in', pt: 'no Brasil' },
    { s: '___ the P&ID', a: 'on', pt: 'no P&ID (diagrama)' },
    { s: '___ the checklist', a: 'on', pt: 'no checklist' },
    { s: '___ the report', a: 'in', pt: 'no relatório' },
    { s: '___ work', a: 'at', pt: 'no trabalho' },
    { s: '___ the lifeboat', a: 'in', pt: 'dentro da baleeira' }
  ];

  // ---------------- ALFABETO FONÉTICO NATO (comunicação por rádio) ----------------
  D.NATO = {
    A: 'Alpha', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', F: 'Foxtrot',
    G: 'Golf', H: 'Hotel', I: 'India', J: 'Juliett', K: 'Kilo', L: 'Lima',
    M: 'Mike', N: 'November', O: 'Oscar', P: 'Papa', Q: 'Quebec', R: 'Romeo',
    S: 'Sierra', T: 'Tango', U: 'Uniform', V: 'Victor', W: 'Whiskey',
    X: 'X-ray', Y: 'Yankee', Z: 'Zulu'
  };
  D.NATO_LETTERS = Object.keys(D.NATO);
})(typeof window !== 'undefined' ? window : globalThis);
