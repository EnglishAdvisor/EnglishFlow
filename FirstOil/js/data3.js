/* FIRST OIL — data3.js
   Conteúdo, parte 3: sequências de processo, leitura técnica, as 7 unidades da
   cadeia com suas crises, itens, textos e progressão de carreira. */
(function (root) {
  const G = root.G = root.G || {};
  const D = G.DATA = G.DATA || {};

  // ---------------- SEQUÊNCIAS DE PROCESSO (coloque em ordem) ----------------
  D.ORDER = [
    { ctx: 'A cadeia de valor do petróleo, do início ao fim', steps: ['Exploration', 'Drilling', 'Production', 'Processing', 'Transportation', 'Refining', 'Distribution'] },
    { ctx: 'Construção de poço (simplificada)', steps: ['Spud the well', 'Drill the surface section', 'Run the casing', 'Cement the casing', 'Install the BOP'] },
    { ctx: 'Partida de uma bomba centrífuga', steps: ['Open the suction valve', 'Prime the pump', 'Start the motor', 'Open the discharge valve slowly', 'Check for leaks'] },
    { ctx: 'Emissão de permissão de trabalho (PTW)', steps: ['Describe the job', 'Identify the hazards', 'Define the safety measures', 'Sign the permit', 'Start the work'] },
    { ctx: 'Resposta ao alarme de abandono (muster)', steps: ['Stop your task', 'Make the area safe', 'Take the escape route', 'Report to the muster point', 'Wait for instructions'] },
    { ctx: 'Lançamento de PIG no duto', steps: ['Load the pig into the launcher', 'Close and secure the door', 'Pressurize the launcher', 'Open the kicker valve', 'Track the pig to the receiver'] },
    { ctx: 'Entrada em espaço confinado', steps: ['Isolate and drain the vessel', 'Ventilate the space', 'Test the atmosphere', 'Issue the entry permit', 'Enter with a standby man'] },
    { ctx: 'Do cru à gasolina', steps: ['Receive the crude oil', 'Heat it in the furnace', 'Distill it in the tower', 'Treat the naphtha', 'Blend the gasoline'] },
    { ctx: 'Bloqueio de energia (LOTO)', steps: ['Identify the energy sources', 'Shut down the equipment', 'Lock and tag the isolation points', 'Verify zero energy', 'Start the job'] },
    { ctx: 'Passagem de turno', steps: ['Review the shift events', 'Complete the logbook', 'Brief the incoming operator', 'Transfer the radio', 'Leave the unit'] },
    { ctx: 'Resposta inicial a um incidente', steps: ['Sound the alarm', 'Make the area safe', 'Report to your supervisor', 'Preserve the scene', 'Write the report'] },
    { ctx: 'Offloading para navio aliviador', steps: ['Moor the shuttle tanker', 'Connect the hose', 'Test the communications', 'Start the transfer', 'Monitor the operation'] },
    { ctx: 'Controle de poço após um kick', steps: ['Detect the kick', 'Shut in the well', 'Read the pressures', 'Calculate the kill mud weight', 'Circulate the kick out'] }
  ];

  // ---------------- LEITURA TÉCNICA (procedimentos, e-mails, relatórios) ----------------
  D.READ = [
    { txt: 'Prior to starting pump P-101, ensure the suction valve is fully open and the discharge valve is closed. After start-up, open the discharge valve gradually while monitoring the pressure.',
      q: 'When should the discharge valve be opened?', ci: 1,
      opts: ['Before starting the pump', 'Gradually, after start-up', 'Only if the pressure drops', 'It must remain closed'],
      pt: 'A descarga abre gradualmente após a partida, monitorando a pressão.' },
    { txt: 'This permit is valid for one shift only. If the job is not completed, a new permit must be issued by the area supervisor before work resumes.',
      q: 'What happens if the job continues into the next shift?', ci: 2,
      opts: ['The permit renews automatically', 'The job must stop permanently', 'A new permit is required', 'Only the OIM can extend it'],
      pt: 'PTW vale um turno: continuou o serviço, emite-se nova permissão.' },
    { txt: 'H2S is a colorless gas with a rotten egg smell at low concentrations. At high concentrations it paralyzes the sense of smell. Never rely on smell to detect H2S; always use a personal gas detector.',
      q: 'Why can you NOT rely on smell to detect H2S?', ci: 1,
      opts: ['Because H2S has no smell at all', 'Because high concentrations disable your sense of smell', 'Because detectors smell it first', 'Because the smell is pleasant'],
      pt: 'Em alta concentração o H2S paralisa o olfato — por isso o detector pessoal.' },
    { txt: 'Night shift replaced the mechanical seal on pump P-203. The pump was tested and returned to service at 04:30. Vibration levels are normal, but keep monitoring during the first 24 hours.',
      q: 'What should the day shift do?', ci: 2,
      opts: ['Replace the seal again', 'Keep the pump stopped', 'Monitor vibration for 24 hours', 'Test the pump at 04:30'],
      pt: 'Passagem de turno clássica: acompanhar a vibração nas primeiras 24h.' },
    { txt: 'Please be informed that the supply boat ETA has changed to 14:00 due to weather. All lifting operations shall be rescheduled accordingly. Confirm receipt of this message.',
      q: 'What must the reader do?', ci: 0,
      opts: ['Confirm that they received the message', 'Cancel all lifts permanently', 'Change the weather forecast', 'Board the supply boat'],
      pt: '"Confirm receipt" = confirmar o recebimento. E reprogramar os içamentos.' },
    { txt: 'At 02:15 the driller observed a pit gain of 8 barrels. The well was shut in and pressures were recorded. Kill operations commenced at 03:00 using the driller\'s method.',
      q: 'What indicated the kick?', ci: 0,
      opts: ['A pit gain of 8 barrels', 'The driller\'s method', 'The 03:00 report', 'A drop in temperature'],
      pt: '"Pit gain" (ganho no tanque de lama) é o sinal clássico de influxo.' },
    { txt: 'The high-level alarm on tank TK-301 is set at 90%. If the level reaches 95%, the inlet valve closes automatically and the transfer pump trips.',
      q: 'What happens when the level reaches 95%?', ci: 1,
      opts: ['Only an alarm sounds', 'The inlet valve closes and the pump trips', 'The tank drains automatically', 'The setpoint changes to 90%'],
      pt: '90% = alarme; 95% = intertravamento (fecha entrada e desarma bomba).' },
    { txt: 'Hearing protection is mandatory in areas where noise exceeds 85 decibels. Double protection (plugs and muffs) is required above 100 decibels.',
      q: 'What is required at 102 decibels?', ci: 2,
      opts: ['Plugs only', 'Muffs only', 'Both plugs and muffs', 'No protection is needed'],
      pt: 'Acima de 100 dB: proteção dupla (plugue + concha).' },
    { txt: 'The contractor shall provide all lifting equipment with valid certification. Equipment without certificates shall be removed from site at the contractor\'s expense.',
      q: 'Who pays to remove uncertified equipment?', ci: 1,
      opts: ['The operator', 'The contractor', 'The certification body', 'The insurance company'],
      pt: '"At the contractor\'s expense" = às custas da contratada.' },
    { txt: 'Any change to the process design, even temporary, requires a Management of Change review. Replacement in kind — using an identical spare part — does not require MOC.',
      q: 'Which case does NOT require an MOC?', ci: 2,
      opts: ['A temporary bypass', 'A different valve model', 'Replacement in kind', 'A new setpoint'],
      pt: '"Replacement in kind" (troca por item idêntico) dispensa MOC.' },
    { txt: 'Crane operations must stop when wind speed exceeds 20 knots. Personnel transfer by basket is not permitted above 15 knots or at night.',
      q: 'At 17 knots during the day, what is allowed?', ci: 1,
      opts: ['Basket transfer only', 'Crane operations only', 'Both operations', 'Neither operation'],
      pt: '17 nós: guindaste ainda opera (<20), mas cesta de transferência não (>15).' },
    { txt: 'The crude distillation unit separates crude oil by boiling point. Lighter fractions such as LPG and naphtha leave at the top; heavier products such as fuel oil leave at the bottom.',
      q: 'Where does naphtha leave the tower?', ci: 1,
      opts: ['At the bottom', 'At the top', 'In the furnace', 'With the fuel oil'],
      pt: 'Frações leves (GLP, nafta) saem no topo; pesadas, no fundo.' },
    { txt: 'The investigation concluded that the direct cause was a worn gasket, but the root cause was the lack of a preventive maintenance plan for the unit.',
      q: 'What was the ROOT cause?', ci: 1,
      opts: ['The worn gasket', 'The lack of a preventive maintenance plan', 'The unit itself', 'The investigation team'],
      pt: 'Causa direta ≠ causa raiz. A raiz era a ausência de plano preventivo.' },
    { txt: 'When using the radio, identify yourself and the station you are calling. Keep messages short and confirm critical information by reading it back.',
      q: 'How should you confirm critical information?', ci: 0,
      opts: ['By reading it back', 'By sending an e-mail later', 'By speaking louder', 'By ending the call quickly'],
      pt: '"Read back" = repetir a informação de volta para confirmar.' }
  ];

  // ---------------- AS 7 UNIDADES DA CADEIA ----------------
  D.UNITS = [
    {
      key: 'explor', name: 'Bloco Exploratório', stage: 'UPSTREAM',
      desc: 'Onde tudo começa: ondas sonoras e bilhões em jogo.',
      pal: { a: '#0a1a33', b: '#14507a', glow: '#57c7ff', deco: 'sea' },
      kinds: ['venpt', 'vpten', 'abbr', 'read'], themes: ['geologia', 'contratos'],
      tasks: ['Levantamento Sísmico 3D', 'Interpretação de Horizontes', 'Modelagem do Reservatório', 'Análise de Risco Geológico', 'Poço Estratigráfico'],
      boss: {
        name: 'Comitê Exploratório', title: 'A Decisão do Poço Pioneiro',
        kinds: ['read', 'abbr', 'venpt'], mech: null,
        intro: [
          'Sala de decisão, 14º andar. O bloco custou 2 bilhões de dólares e a sísmica está na mesa.',
          'Cada termo técnico mal interpretado aqui custa mais que o seu salário anual. Sem pressão.',
          'Convença o comitê de que o prospecto é viável — no idioma do relatório: inglês.'
        ],
        phase: ['O diretor financeiro entrou na sala. Respostas mais rápidas, por favor.'],
        defeat: 'Aprovado. O poço pioneiro será perfurado. "Good call", disse o diretor — anote essa no caderno.'
      }
    },
    {
      key: 'drill', name: 'Sonda NS-42', stage: 'UPSTREAM',
      desc: 'Três mil metros de coluna, zero margem para erro.',
      pal: { a: '#050d1f', b: '#0e2c4a', glow: '#ffc400', deco: 'sea' },
      kinds: ['venpt', 'abbr', 'num'], themes: ['perfuracao', 'cargos'],
      tasks: ['Conexão de Coluna', 'Teste de BOP', 'Corrida de Revestimento', 'Cimentação da Sapata', 'Troca de Broca'],
      boss: {
        name: 'Poço AUR-1', title: 'KICK — Controle de Poço',
        kinds: ['num', 'venpt', 'abbr'], mech: 'kick',
        intro: [
          '*ALARME* Ganho de 8 barris no tanque de lama. O poço está fluindo.',
          'Influxo a 3.200 metros. A cada erro seu, a pressão no choke sobe.',
          'Feche o poço, leia as pressões, circule. E fale a língua da sonda: inglês.'
        ],
        phase: ['SHUT IN THE WELL! A pressão está subindo — o tempo de resposta caiu.'],
        defeat: 'Poço amortecido, controle recuperado. O company man mandou dizer "good job". Ele nunca diz isso.'
      }
    },
    {
      key: 'fpso', name: 'FPSO Aurora', stage: 'UPSTREAM',
      desc: 'Produção 24/7 no meio do Atlântico.',
      pal: { a: '#241335', b: '#a34a1e', glow: '#ff9d5c', deco: 'sea' },
      kinds: ['ltype', 'radio', 'venpt', 'lpair'], themes: ['producao', 'offshore', 'seguranca'],
      tasks: ['Rondas de Produção', 'Teste de Poço', 'Permissão de Trabalho', 'Inspeção de Riser', 'Offloading Programado'],
      boss: {
        name: 'Alarme Geral', title: 'Simulado de Abandono (Muster Drill)',
        kinds: ['ltype', 'radio', 'lpair'], mech: 'muster',
        intro: [
          '*sete apitos curtos, um longo* Simulado de abandono. Todos aos pontos de encontro.',
          'No mar, quem não entende o anúncio em inglês vira estatística. O OIM está cronometrando.',
          'Escute. Escreva. Responda no rádio. Sobreviva.'
        ],
        phase: ['O OIM elevou o nível: anúncios em velocidade real de emergência.'],
        defeat: 'POB completo no ponto de encontro em 4 minutos. O OIM assinou seu certificado — e olhou no relógio, impressionado.'
      }
    },
    {
      key: 'plant', name: 'Planta de Processo', stage: 'UPSTREAM',
      desc: 'Separar óleo, gás e água — na ordem certa.',
      pal: { a: '#10141f', b: '#2c3a4a', glow: '#9adcff', deco: 'plant' },
      kinds: ['order', 'prep', 'venpt', 'odd'], themes: ['processo', 'manutencao'],
      tasks: ['Alinhamento da Bomba P-101', 'Ajuste do Separador', 'Calibração de PSV', 'Troca de Filtros', 'Leitura de P&ID'],
      boss: {
        name: 'A Planta Fria', title: 'Partida da Planta (Start-up)',
        kinds: ['order', 'prep', 'venpt'], mech: null,
        intro: [
          'A planta está fria. O manual de start-up tem 400 páginas — em inglês, naturalmente.',
          'Uma sequência fora de ordem e o PSV canta. Ninguém quer ouvir o PSV cantar.',
          'Passo a passo, válvula por válvula. Vamos partir essa planta.'
        ],
        phase: ['Pressão subindo no header. A janela de partida está fechando.'],
        defeat: 'Planta estável, óleo dentro da especificação. O supervisor anotou seu nome no relatório — no bom sentido.'
      }
    },
    {
      key: 'mid', name: 'Dutos & Terminal', stage: 'MIDSTREAM',
      desc: 'Do campo ao mercado, batelada por batelada.',
      pal: { a: '#0d1a14', b: '#1e4a38', glow: '#6bffb0', deco: 'plant' },
      kinds: ['phg', 'num', 'vpten'], themes: ['midstream'],
      tasks: ['Lançamento de PIG', 'Medição Fiscal', 'Amarração do Navio', 'Inventário de Tancagem', 'Drenagem de Linha'],
      boss: {
        name: 'Mr. Grant, Cargo Surveyor', title: 'Fiscalização da Custódia',
        kinds: ['num', 'phg', 'vpten'], mech: null,
        intro: [
          'Mr. Grant não sorri. Mr. Grant confere números.',
          '"Shall we begin? I don\'t have all day." (tradução: comece agora)',
          'Um decimal errado na medição fiscal e o navio não zarpa. E a multa é por hora.'
        ],
        phase: ['"Interesting. Let\'s verify the figures again — faster this time."'],
        defeat: '"All figures correct. Documents signed." Mr. Grant quase sorriu. Quase.'
      }
    },
    {
      key: 'refino', name: 'Refinaria Costa Azul', stage: 'DOWNSTREAM',
      desc: 'Cada prato da torre é um produto diferente.',
      pal: { a: '#14090f', b: '#4a1e10', glow: '#ff7a1a', deco: 'plant' },
      kinds: ['ff', 'ed', 'irr', 'venpt'], themes: ['refino'],
      tasks: ['Ajuste da Torre', 'Otimização do Craqueamento', 'Blending de Diesel', 'Inspeção da Fornalha', 'Análise de Laboratório'],
      boss: {
        name: 'Unidade de Destilação', title: 'Parada Não Programada (ESD)',
        kinds: ['ff', 'irr', 'ed'], mech: null,
        intro: [
          '*ESD NÍVEL 1* Trip geral na torre. O flare está engolindo a produção.',
          'Cada minuto parado custa 40 mil dólares. O turno inteiro olhando para você.',
          'Diagnóstico, procedimento, partida — em inglês, porque o manual é da licenciadora.'
        ],
        phase: ['A torre esfriou demais. Agora é contra o relógio.'],
        defeat: 'Unidade normalizada, flare apagando. O gerente de refino te deve um café. Ele sabe disso.'
      }
    },
    {
      key: 'cert', name: 'Certificação Internacional', stage: 'DOWNSTREAM',
      desc: 'Catorze países. Nove reprovações. Sua vez.',
      pal: { a: '#0a0f1e', b: '#1a2a4a', glow: '#ffd75c', deco: 'plant' },
      kinds: ['venpt', 'vpten', 'abbr', 'ff', 'order', 'ltype', 'num', 'radio', 'irr', 'prep', 'phg', 'read'],
      themes: [],
      tasks: ['Revisão Documental', 'Gap Assessment', 'Prova Escrita', 'Painel Técnico', 'Entrevista Final'],
      boss: {
        name: 'Ms. Sterling', title: 'Auditoria Internacional',
        kinds: ['read', 'ff', 'abbr', 'num', 'order', 'ltype', 'phg', 'irr'], mech: 'audit',
        intro: [
          'Ms. Sterling audita operações em catorze países. Reprovou nove.',
          '"Your credentials say you are ready. Prove it." — ela não repete perguntas.',
          'Tudo o que você aprendeu, da sísmica ao posto de combustível. Uma chance.'
        ],
        phase: [
          '"Adequate. Let\'s raise the bar." (as alternativas vão embaralhar no meio da pergunta)',
          '"Final section. Impress me."'
        ],
        defeat: '"Certification granted. Outstanding, actually." Ela usou "actually" — e você sabe exatamente o que isso significa.'
      }
    }
  ];

  // ---------------- ITENS DO ALMOXARIFADO ----------------
  D.ITEMS = {
    cafe: { name: 'Café de Sonda', e: '☕', desc: 'Recupera 35 de Integridade. Forte o bastante para tirar tinta de parede.', price: 25 },
    marmita: { name: 'Marmita do Turno', e: '🍱', desc: 'Recupera 18 de Integridade. Feita com carinho pelo pessoal da cozinha.', price: 12 },
    dicionario: { name: 'Dicionário Técnico', e: '📖', desc: 'Dá uma dica: elimina alternativas erradas ou revela parte da resposta.', price: 30 },
    impacto: { name: 'Chave de Impacto', e: '🔧', desc: 'Seu próximo acerto vale DOBRO. Devolver ao almoxarifado depois (ninguém devolve).', price: 35 },
    prorrogacao: { name: 'Prorrogação', e: '⏳', desc: 'Adiciona 8 segundos ao tempo da pergunta atual.', price: 30 },
    redundante: { name: 'Sistema Redundante', e: '🛟', desc: 'Se sua Integridade zerar, o sistema reserva te devolve com metade.', price: 60 }
  };
  D.ITEM_ORDER = ['cafe', 'marmita', 'dicionario', 'impacto', 'prorrogacao', 'redundante'];

  // ---------------- TEXTOS ----------------
  D.STORY = [
    'Bacia de Santos, 2026. A Atlântica Energia acaba de arrematar o Bloco Aurora.',
    'Você foi contratado(a) para a equipe que vai levar o campo do primeiro tiro sísmico até a bomba do posto.',
    'Detalhe: a operação é internacional. Contratos, rádio, manuais, auditorias — tudo em inglês.',
    'Sete etapas. Uma cadeia completa. No fim, a Auditoria Internacional decide se você assume a operação. Bem-vindo(a) a bordo.'
  ];

  D.SHOPLINES = [
    'Sem requisição assinada, sem material. Regra é regra.',
    'Café de sonda: tira tinta de parede e sono de turno.',
    'Devolve a chave de impacto depois. Todo mundo diz isso. Ninguém devolve.',
    'EPI não é enfeite, viu?',
    'Tô fechando o balanço do mês, capricha no troco.'
  ];

  D.TASK_INTROS = [
    '*a rádio chia* "Control room to field: pode iniciar a tarefa."',
    'O supervisor deixou o checklist na bancada. Em inglês, claro.',
    'A ordem de serviço está aprovada. Execução impecável, por favor.',
    'Tempo bom, mar calmo. Ótimo dia para não errar.',
    '*o turno inteiro observa* É contigo.'
  ];

  D.NC_INTRO = [
    '⚠ NC em aberto: um termo que você errou voltou para auditoria interna.',
    'Pendência antiga na sua fila. Hora de fechar essa NC.',
    'O sistema de qualidade não esquece. Você também não deveria.'
  ];

  // Momentos de segurança do DDS Diário (bilíngues)
  D.TIPS = [
    { en: 'If in doubt, stop the job.', pt: 'Na dúvida, pare a tarefa.' },
    { en: 'Take five before the task.', pt: 'Pare cinco minutos e avalie os riscos antes de começar.' },
    { en: 'Hold the handrail.', pt: 'Segure o corrimão — queda em escada é o acidente mais comum a bordo.' },
    { en: 'Stay out of the line of fire.', pt: 'Fique fora da "linha de fogo": o caminho da energia (pressão, carga, tensão).' },
    { en: 'Report every near miss.', pt: 'Reporte todo quase acidente — ele é o aviso que sai de graça.' },
    { en: 'Your PPE only works if you wear it.', pt: 'EPI só funciona no corpo, não no armário.' },
    { en: 'Never bypass a safety device.', pt: 'Nunca inibia um dispositivo de segurança sem MOC aprovado.' },
    { en: 'Three points of contact on ladders.', pt: 'Três pontos de contato ao subir e descer escadas.' },
    { en: 'Test the atmosphere before entry.', pt: 'Teste a atmosfera antes de entrar em espaço confinado.' },
    { en: 'Stop work authority belongs to everyone.', pt: 'Autoridade para parar o trabalho é de todos — do trainee ao OIM.' },
    { en: 'Read back critical instructions.', pt: 'Repita de volta ("read back") toda instrução crítica no rádio.' },
    { en: 'Housekeeping is safety.', pt: 'Organização e limpeza da área também são segurança.' }
  ];

  D.KIND_INFO = {
    venpt: { label: 'Vocabulário EN→PT', e: '🛢️' },
    vpten: { label: 'Vocabulário PT→EN', e: '🇧🇷' },
    abbr: { label: 'Siglas & Acrônimos', e: '🔤' },
    ff: { label: 'Falsos Amigos', e: '🚩' },
    odd: { label: 'Caça-Intruso', e: '🕵️' },
    build: { label: 'Montar Frases', e: '✍️' },
    order: { label: 'Sequência de Processo', e: '🔢' },
    ltype: { label: 'Ouvir e Escrever', e: '🎧' },
    lpair: { label: 'Pares de Som', e: '👂' },
    num: { label: 'Números & Unidades', e: '🔊' },
    radio: { label: 'Rádio / Alfabeto NATO', e: '📻' },
    speak: { label: 'Pronúncia', e: '🎤' },
    ed: { label: 'Som do -ED', e: '🔚' },
    irr: { label: 'Verbos Irregulares', e: '📝' },
    prep: { label: 'Preposições', e: '📍' },
    phg: { label: 'Phrasal Verbs', e: '⚙️' },
    read: { label: 'Leitura Técnica', e: '📄' }
  };

  // progressão de carreira
  D.RANKS = ['Trainee', 'Técnico Jr', 'Técnico', 'Técnico Sr', 'Operador', 'Operador Sr',
    'Engenheiro Jr', 'Engenheiro', 'Engenheiro Sr', 'Supervisor', 'Coordenador', 'Gerente de Ativo', 'OIM'];
  D.rank = function (lvl) { return D.RANKS[Math.min(lvl - 1, D.RANKS.length - 1)]; };
})(typeof window !== 'undefined' ? window : globalThis);
