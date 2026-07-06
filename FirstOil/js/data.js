/* FIRST OIL — data.js
   Conteúdo técnico, parte 1: vocabulário O&G por disciplina, frases operacionais,
   pares mínimos e o gerador procedural de números com unidades. */
(function (root) {
  const G = root.G = root.G || {};
  const D = G.DATA = G.DATA || {};

  // ---------------- VOCABULÁRIO TÉCNICO POR DISCIPLINA (en, pt) ----------------
  D.THEMES = {
    geologia: { pt: 'Geologia & Exploração', words: [
      ['reservoir', 'reservatório'], ['seal', 'rocha selante'], ['source rock', 'rocha geradora'],
      ['trap', 'trapa (armadilha geológica)'], ['basin', 'bacia sedimentar'], ['seismic survey', 'levantamento sísmico'],
      ['wildcat well', 'poço pioneiro'], ['sandstone', 'arenito'], ['shale', 'folhelho'],
      ['porosity', 'porosidade'], ['outcrop', 'afloramento'], ['depth', 'profundidade'],
      ['prospect', 'prospecto exploratório'], ['field', 'campo (de petróleo)']
    ]},
    perfuracao: { pt: 'Perfuração', words: [
      ['drill bit', 'broca'], ['drilling rig', 'sonda de perfuração'], ['derrick', 'torre da sonda'],
      ['casing', 'revestimento'], ['drilling mud', 'fluido de perfuração (lama)'], ['wellbore', 'poço (furo)'],
      ['blowout', 'erupção descontrolada'], ['drill pipe', 'tubo de perfuração'], ['cuttings', 'cascalhos'],
      ['kick', 'influxo (kick)'], ['stuck pipe', 'coluna presa'], ['rig floor', 'plataforma da sonda'],
      ['mud pump', 'bomba de lama'], ['cementing', 'cimentação']
    ]},
    producao: { pt: 'Produção', words: [
      ['wellhead', 'cabeça de poço'], ['christmas tree', 'árvore de natal (de poço)'], ['riser', 'riser (duto vertical)'],
      ['flowline', 'linha de produção'], ['water cut', 'BSW (corte de água)'], ['gas lift', 'elevação por gás'],
      ['flow rate', 'vazão'], ['shutdown', 'parada (desligamento)'], ['downtime', 'tempo parado'],
      ['artificial lift', 'elevação artificial'], ['choke', 'choke (restritor de vazão)'], ['well test', 'teste de poço'],
      ['decline', 'declínio (de produção)'], ['manifold', 'manifold (coletor)']
    ]},
    processo: { pt: 'Planta de Processo', words: [
      ['separator', 'separador'], ['heat exchanger', 'trocador de calor'], ['valve', 'válvula'],
      ['gauge', 'manômetro (medidor)'], ['vessel', 'vaso de pressão'], ['flare', 'tocha (flare)'],
      ['flow meter', 'medidor de vazão'], ['cooling water', 'água de resfriamento'], ['steam', 'vapor'],
      ['piping', 'tubulação'], ['drain', 'dreno'], ['vent', 'respiro (alívio)'],
      ['setpoint', 'ponto de ajuste'], ['pump', 'bomba']
    ]},
    seguranca: { pt: 'Segurança (HSE)', words: [
      ['hard hat', 'capacete'], ['safety glasses', 'óculos de segurança'], ['gloves', 'luvas'],
      ['harness', 'cinto de segurança (talabarte)'], ['earplugs', 'protetor auricular'], ['muster point', 'ponto de encontro'],
      ['lifeboat', 'baleeira'], ['fire extinguisher', 'extintor'], ['first aid', 'primeiros socorros'],
      ['hazard', 'perigo (fonte de risco)'], ['leak', 'vazamento'], ['spill', 'derramamento'],
      ['near miss', 'quase acidente'], ['escape route', 'rota de fuga']
    ]},
    midstream: { pt: 'Midstream & Terminais', words: [
      ['pipeline', 'duto (oleoduto/gasoduto)'], ['pig', 'pig (raspador de duto)'], ['tanker', 'navio-tanque'],
      ['storage tank', 'tanque de armazenamento'], ['berth', 'berço de atracação'], ['mooring', 'amarração'],
      ['loading arm', 'braço de carregamento'], ['custody transfer', 'transferência de custódia'],
      ['pumping station', 'estação de bombeio'], ['batch', 'batelada'], ['hose', 'mangote'],
      ['jetty', 'píer'], ['cargo', 'carga'], ['draft', 'calado (do navio)']
    ]},
    refino: { pt: 'Refino', words: [
      ['crude oil', 'petróleo cru'], ['furnace', 'forno'], ['tray', 'prato (da torre)'],
      ['yield', 'rendimento'], ['blending', 'mistura (blend)'], ['naphtha', 'nafta'],
      ['feedstock', 'carga (matéria-prima)'], ['overhead', 'topo (da torre)'], ['bottoms', 'fundo (da torre)'],
      ['boiling point', 'ponto de ebulição'], ['sulfur', 'enxofre'], ['turnaround', 'parada programada'],
      ['fractionating tower', 'torre de fracionamento'], ['jet fuel', 'querosene de aviação (QAV)']
    ]},
    contratos: { pt: 'Contratos & Comercial', words: [
      ['agreement', 'acordo (contrato)'], ['breach', 'quebra de contrato'], ['liability', 'responsabilidade civil'],
      ['warranty', 'garantia'], ['scope', 'escopo'], ['milestone', 'marco (do projeto)'],
      ['amendment', 'aditivo contratual'], ['penalty', 'multa'], ['stakeholder', 'parte interessada'],
      ['procurement', 'suprimentos (compras)'], ['bid', 'proposta (licitação)'], ['deadline', 'prazo final'],
      ['invoice', 'fatura'], ['quotation', 'cotação']
    ]},
    manutencao: { pt: 'Manutenção', words: [
      ['wrench', 'chave (ferramenta)'], ['bolt', 'parafuso'], ['nut', 'porca'],
      ['gasket', 'junta (de vedação)'], ['bearing', 'rolamento'], ['coupling', 'acoplamento'],
      ['rust', 'ferrugem'], ['weld', 'solda'], ['grease', 'graxa'],
      ['spare parts', 'peças sobressalentes'], ['overhaul', 'revisão geral'], ['breakdown', 'quebra (falha)'],
      ['wear', 'desgaste'], ['scaffold', 'andaime']
    ]},
    offshore: { pt: 'Vida Offshore', words: [
      ['hull', 'casco'], ['deck', 'convés'], ['gangway', 'passarela de embarque'],
      ['anchor', 'âncora'], ['bow', 'proa'], ['stern', 'popa'],
      ['crane', 'guindaste'], ['supply boat', 'barco de apoio'], ['crew', 'tripulação'],
      ['shift', 'turno'], ['swell', 'ondulação (mar)'], ['cabin', 'camarote'],
      ['galley', 'cozinha de bordo'], ['bunk', 'beliche']
    ]},
    cargos: { pt: 'Cargos & Funções', words: [
      ['driller', 'sondador'], ['toolpusher', 'encarregado de sonda'], ['company man', 'fiscal da operadora'],
      ['roughneck', 'plataformista'], ['mud engineer', 'engenheiro de fluidos'], ['rig manager', 'gerente da sonda'],
      ['crane operator', 'operador de guindaste'], ['medic', 'enfermeiro de bordo'], ['welder', 'soldador'],
      ['rigger', 'rigger (movimentação de carga)'], ['scaffolder', 'montador de andaime'], ['fitter', 'montador mecânico'],
      ['helper', 'ajudante'], ['painter', 'pintor industrial']
    ]},
    campo: { pt: 'Dia a Dia de Campo', words: [
      ['warehouse', 'almoxarifado'], ['toolbox talk', 'DDS (diálogo de segurança)'], ['handover', 'passagem de turno'],
      ['logbook', 'livro de registro'], ['badge', 'crachá'], ['locker room', 'vestiário'],
      ['canteen', 'refeitório'], ['timesheet', 'folha de ponto'], ['overtime', 'hora extra'],
      ['payroll', 'folha de pagamento'], ['briefing', 'briefing (instrução)'], ['walkway', 'passarela'],
      ['forklift', 'empilhadeira'], ['stairs', 'escada']
    ]}
  };

  D.VOCAB_ALL = [];
  Object.keys(D.THEMES).forEach(function (t) {
    D.THEMES[t].words.forEach(function (w) { D.VOCAB_ALL.push([w[0], w[1], t]); });
  });
  D.vocabByEn = function (en) {
    for (let i = 0; i < D.VOCAB_ALL.length; i++) if (D.VOCAB_ALL[i][0] === en) return D.VOCAB_ALL[i];
    return null;
  };
  D.vocabByThemes = function (themes) {
    if (!themes || !themes.length) return D.VOCAB_ALL;
    const out = D.VOCAB_ALL.filter(function (w) { return themes.indexOf(w[2]) >= 0; });
    return out.length ? out : D.VOCAB_ALL;
  };

  // ---------------- FRASES OPERACIONAIS (montar / ouvir e escrever) ----------------
  D.SENTENCES = [
    { en: 'Close the valve slowly', pt: 'Feche a válvula devagar', lv: 1 },
    { en: 'The pump is running', pt: 'A bomba está operando', lv: 1 },
    { en: 'Wear your safety glasses', pt: 'Use seus óculos de segurança', lv: 1 },
    { en: 'The tank is almost full', pt: 'O tanque está quase cheio', lv: 1 },
    { en: 'Check the oil level', pt: 'Verifique o nível de óleo', lv: 1 },
    { en: 'Do not touch this valve', pt: 'Não toque nesta válvula', lv: 1 },
    { en: 'The crane is out of service', pt: 'O guindaste está fora de operação', lv: 1 },
    { en: 'Call the control room', pt: 'Chame a sala de controle', lv: 1 },
    { en: 'The pressure is too high', pt: 'A pressão está alta demais', lv: 1 },
    { en: 'Keep the area clean', pt: 'Mantenha a área limpa', lv: 1 },
    { en: 'The vessel arrives tomorrow', pt: 'A embarcação chega amanhã', lv: 1 },
    { en: 'The night shift starts at six', pt: 'O turno da noite começa às seis', lv: 1 },

    { en: 'Report any leak to your supervisor immediately', pt: 'Reporte qualquer vazamento ao seu supervisor imediatamente', lv: 2 },
    { en: 'The night shift replaced the gasket on the pump', pt: 'O turno da noite trocou a junta da bomba', lv: 2 },
    { en: 'We need a permit to work before starting', pt: 'Precisamos de uma permissão de trabalho antes de começar', lv: 2 },
    { en: 'The compressor shut down twice during the night', pt: 'O compressor desarmou duas vezes durante a noite', lv: 2 },
    { en: 'The helicopter is delayed because of the fog', pt: 'O helicóptero está atrasado por causa da neblina', lv: 2 },
    { en: 'Isolate the line before removing the flange', pt: 'Isole a linha antes de remover o flange', lv: 2 },
    { en: 'The safety drill will start at three o\'clock', pt: 'O simulado de segurança vai começar às três horas', lv: 2 },
    { en: 'How many barrels did we produce yesterday?', pt: 'Quantos barris produzimos ontem?', lv: 2 },
    { en: 'Never stand under a suspended load', pt: 'Nunca fique sob uma carga suspensa', lv: 2 },
    { en: 'The tanker will berth at the terminal tonight', pt: 'O navio-tanque vai atracar no terminal hoje à noite', lv: 2 },
    { en: 'The new operator needs training on this system', pt: 'O novo operador precisa de treinamento neste sistema', lv: 2 },
    { en: 'Please confirm the reading on the pressure gauge', pt: 'Por favor, confirme a leitura no manômetro', lv: 2 },

    { en: 'If the pressure rises above the set point, the relief valve will open automatically', pt: 'Se a pressão passar do ponto de ajuste, a válvula de alívio abrirá automaticamente', lv: 3 },
    { en: 'Before entering a confined space, you must test the atmosphere for gas', pt: 'Antes de entrar em espaço confinado, você deve testar a atmosfera para gás', lv: 3 },
    { en: 'The refinery processes two hundred thousand barrels of crude oil per day', pt: 'A refinaria processa duzentos mil barris de petróleo cru por dia', lv: 3 },
    { en: 'All personnel must proceed to their muster stations when the alarm sounds', pt: 'Todo o pessoal deve seguir para seus pontos de encontro quando o alarme soar', lv: 3 },
    { en: 'The audit found three non-conformities in the maintenance records', pt: 'A auditoria encontrou três não conformidades nos registros de manutenção', lv: 3 },
    { en: 'The well has been producing for ten years without a major workover', pt: 'O poço produz há dez anos sem uma intervenção de grande porte', lv: 3 },
    { en: 'Despite the bad weather, the offloading operation was completed safely', pt: 'Apesar do mau tempo, a operação de offloading foi concluída com segurança', lv: 3 },
    { en: 'The contractor shall submit the final documentation within thirty days', pt: 'A contratada deverá entregar a documentação final em até trinta dias', lv: 3 },
    { en: 'Had we followed the checklist, the incident would not have happened', pt: 'Se tivéssemos seguido o checklist, o incidente não teria acontecido', lv: 3 },
    { en: 'By the time the pig reaches the terminal, the batch will have been sampled', pt: 'Quando o pig chegar ao terminal, a batelada já terá sido amostrada', lv: 3 }
  ];

  // ---------------- PARES MÍNIMOS (pronúncia crítica em operação) ----------------
  D.MINPAIRS = [
    { a: 'ship', apt: 'navio', b: 'sheep', bpt: 'ovelha' },
    { a: 'walk', apt: 'andar', b: 'work', bpt: 'trabalhar' },
    { a: 'hit', apt: 'bater', b: 'heat', bpt: 'calor' },
    { a: 'sit', apt: 'sentar', b: 'seat', bpt: 'assento' },
    { a: 'fill', apt: 'encher', b: 'feel', bpt: 'sentir' },
    { a: 'live', apt: 'viver / ao vivo', b: 'leave', bpt: 'sair / partir' },
    { a: 'pull', apt: 'puxar', b: 'pool', bpt: 'piscina / reservatório' },
    { a: 'full', apt: 'cheio', b: 'fool', bpt: 'tolo' },
    { a: 'hurt', apt: 'machucar', b: 'heart', bpt: 'coração' },
    { a: 'law', apt: 'lei', b: 'low', bpt: 'baixo' },
    { a: 'coast', apt: 'costa', b: 'cost', bpt: 'custo' },
    { a: 'hold', apt: 'segurar / porão', b: 'old', bpt: 'velho' },
    { a: 'hear', apt: 'ouvir', b: 'ear', bpt: 'orelha' },
    { a: 'three', apt: 'três', b: 'tree', bpt: 'árvore' },
    { a: 'think', apt: 'pensar', b: 'sink', bpt: 'afundar / pia' },
    { a: 'thick', apt: 'espesso', b: 'sick', bpt: 'doente' },
    { a: 'snack', apt: 'lanche', b: 'snake', bpt: 'cobra' },
    { a: 'angry', apt: 'bravo', b: 'hungry', bpt: 'com fome' }
  ];
  D.mpByWord = function (w) {
    for (let i = 0; i < D.MINPAIRS.length; i++) if (D.MINPAIRS[i].a === w) return D.MINPAIRS[i];
    return null;
  };

  // ---------------- NÚMEROS & UNIDADES (procedural — listening) ----------------
  // say: como o TTS pronuncia a unidade | ctx: pergunta em PT
  D.NUMU = [
    { u: 'psi', say: 'P S I', min: 100, max: 9900, steps: [50, 100, 250], ctx: 'Qual a pressão informada (psi)?' },
    { u: 'bar', say: 'bar', min: 2, max: 400, steps: [2, 5, 10], ctx: 'Qual a pressão informada (bar)?' },
    { u: 'm', say: 'meters', min: 100, max: 6500, steps: [10, 50, 100], ctx: 'Qual a profundidade informada (metros)?' },
    { u: 'bpd', say: 'barrels per day', min: 500, max: 250000, steps: [500, 1000, 5000], ctx: 'Qual a vazão informada (barris/dia)?' },
    { u: '°C', say: 'degrees Celsius', min: 30, max: 420, steps: [5, 10], ctx: 'Qual a temperatura informada (°C)?' },
    { u: 'ppm', say: 'P P M', min: 5, max: 950, steps: [5, 10, 25], ctx: 'Qual a concentração informada (ppm)?' },
    { u: 'rpm', say: 'R P M', min: 60, max: 3600, steps: [10, 60], ctx: 'Qual a rotação informada (rpm)?' },
    { u: '%', say: 'percent', min: 1, max: 99, steps: [1], ctx: 'Qual o percentual informado (%)?' }
  ];
  D.genNumber = function (rnd) {
    const r = rnd || Math.random;
    const t = D.NUMU[Math.floor(r() * D.NUMU.length)];
    const step = t.steps[Math.floor(r() * t.steps.length)];
    const nSteps = Math.floor((t.max - t.min) / step);
    const val = t.min + step * Math.floor(r() * (nSteps + 1));
    return { val: val, unit: t.u, say: val.toLocaleString('en-US') + ' ' + t.say, ctx: t.ctx };
  };
})(typeof window !== 'undefined' ? window : globalThis);
