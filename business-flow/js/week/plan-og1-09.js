/* ENGLISH FLOW — week/plan-og1-09.js
   OIL & GAS 1 · UNIT 9 "Natural Gas" — o plano de 4 semanas.

   ═══ REGRA QUE GOVERNA ESTE ARQUIVO ═══
   O APP NÃO REPETE A AULA. Mesma competência, conteúdo diferente.

     AULA AO VIVO  →  o livro (Oxford English for Careers: Oil and Gas, ou
                      equivalente). Personagens, textos, gráficos e o pair
                      work do livro nunca aparecem aqui.
     APP           →  o que a aula não consegue: repetição infinita, situações
                      NOVAS com a mesma competência, feedback imediato 24/7.

   Universo: NORTH STAR RIG + North Star Downstream Plant, a mesma tripulação
   das unidades anteriores — Erik (Norwegian), Fatima (Kuwaiti, engineer),
   Priya (Indian, agora Downstream Plant operator — ela já existia desde a
   Unit 1, aqui ganha essa função porque a unidade é sobre gás e planta),
   Tomás (Brazilian welder), Sofia (Mexican geologist), Kwame (Ghanaian
   driller), Amara Chukwu (Nigerian safety officer, estabelecida na Unit 4).
   Nenhum personagem novo foi necessário.

   ═══ PEDAGOGIA DESTA UNIDADE — SPEAKING em primeiro lugar ═══
   Prioridade do cliente para o dia-off: 1) SPEAKING, 2) LISTENING, 3) leitura/
   escrita por último. Gramática e vocabulário são meio, não fim: o critério
   de sucesso é o aluno CONSEGUIR FAZER a tarefa real (dar um handover de
   turno falado, descrever equipamento, reportar números de produção), não
   só acertar uma questão de gramática.

   O padrão de escrita "SHIFT HANDOVER LOG" da aula ao vivo (trabalho
   concluído / trabalho pendente, formato job-card) é a deixa perfeita: no
   O&G real (operação 24h por turnos) todo fim de turno exige um handover
   verbal + escrito claro. A Semana 2 é a semana-bandeira da unidade: o
   aluno recebe um job-card resumido do turno e precisa ENTREGAR ESSE
   HANDOVER FALADO para o próximo turno — é o exercício mais desenvolvido
   do mês.

   ═══ ESTRUTURA — day-on (aula) × day-off (app), já com a divisão do cliente ═══
     Semana 1 · Gas production process ... vocabulário verbo/processo/substância,
                leitura de gráfico de barras NOVO, missão falada: orientar um
                trainee no processo + reportar um número de gráfico
     Semana 2 · Past Simple "be" (was/were) ... arco completo (afirmativa/
                negativa/pergunta/resposta curta) — SEMANA-BANDEIRA: handover
                de turno falado, o exercício mais rico do mês
     Semana 3 · Reading (LNG/biogas) + Describing equipment SOLO ... leitura
                nova, gráfico novo, missão falada: descrever equipamento por
                forma/orientação/localização/capacidade
     Semana 4 · Review + Key Words ... was/were + vocabulário + gráficos,
                self-check, missão falada de fechamento: reportar tendência
                de um gráfico de produção/consumo a um supervisor (ecoa a
                Semana 2)

   Campos de cada semana:
     goal / comp — a COMPETÊNCIA que o aluno sai sabendo fazer
     live        — o que o professor cobre na aula (o app só exibe)
     bridge      — "na aula X · aqui Y": deixa a complementaridade visível
     steps       — o que o aluno faz sozinho depois que o professor destrava
     ican        — o debrief, aparece quando a semana fecha
     more        — aprofundamento paralelo: nunca destrava nem trava nada */
(function (root) {
  const DF = root.DF = root.DF || {};
  DF.PLAN = DF.PLAN || { starter: {}, elementary: {} };
  DF.PLAN.og1 = DF.PLAN.og1 || {};

  // ── pools do universo North Star Rig / Downstream Plant ──
  if (DF.WGEN && DF.WGEN.POOLS) {
    DF.WGEN.POOLS.og1GasVerb = ['vaporize', 'liquefy', 'produce', 'consume',
      'transport', 'store'];
    DF.WGEN.POOLS.og1GasProcess = ['vaporization', 'liquefaction', 'production',
      'consumption', 'transportation', 'storage'];
    DF.WGEN.POOLS.og1ShiftDone = ['checked the compressor', 'inspected the storage tanks',
      'repaired the flow meter', 'tested the gas detector', 'replaced the valve seal',
      'cleaned the mud screen'];
    DF.WGEN.POOLS.og1ShiftOutstanding = ['check the LNG pump', 'inspect the pipeline',
      'calibrate the flow meter', 'test the backup generator', 'clean the storage tank',
      'replace the safety valve'];
    DF.WGEN.POOLS.og1EquipDesc = ['a vertical cylinder, above ground',
      'a horizontal cylinder, above ground', 'a sphere, above ground',
      'a vertical cylinder, underground', 'a cube, above ground'];
  }

  // ═══ VOCABULÁRIO-ALVO DA UNIDADE ═══
  // As palavras são o tema do livro (processo de gás: vaporizar/liquefazer/
  // produzir/consumir/transportar/armazenar); as definições e TODOS os
  // exemplos abaixo são autorais, escritos no universo North Star Rig.
  const WORDS = [
    { en: 'liquefy', pt: 'liquefazer (verbo)',
      def: 'to turn a gas into a liquid, usually by cooling it',
      ex: 'The plant liquefies natural gas so it takes up less space.' },
    { en: 'liquefaction', pt: 'liquefação (o processo)',
      def: 'the process of turning a gas into a liquid',
      ex: 'Liquefaction happens at a very low temperature, around minus 160°C.' },
    { en: 'vaporize', pt: 'vaporizar (verbo)',
      def: 'to turn a liquid into a gas, usually by heating it',
      ex: 'Before it enters the pipeline, the LNG vaporizes back into gas.' },
    { en: 'vaporization', pt: 'vaporização (o processo)',
      def: 'the process of turning a liquid into a gas',
      ex: 'Vaporization is the last step before the gas reaches the customer.' },
    { en: 'consumption', pt: 'consumo (substantivo)',
      def: 'the amount of something that is used',
      ex: "World gas consumption is higher every year, Priya's chart shows." },
    { en: 'transportation', pt: 'transporte (substantivo)',
      def: 'the process of carrying something from one place to another',
      ex: 'LNG transportation by ship is safer than transportation by pipeline in some routes.' },
    { en: 'storage', pt: 'armazenamento (substantivo)',
      def: 'the process or place of keeping something for later use',
      ex: 'The plant has four storage tanks for liquefied gas.' },
    { en: 'LNG', pt: 'GNL (gás natural liquefeito)',
      def: 'liquefied natural gas — natural gas cooled into a liquid for transport and storage',
      ex: 'LNG takes up about six hundred times less space than natural gas.' }
  ];

  // Palavras extras que a aula não cobre — o app amplia em vez de repetir.
  const EXTRA_WORDS = [
    { en: 'biogas ·+', pt: 'biogás',
      def: 'a gas produced from organic waste, used as a renewable fuel',
      ex: 'A village near the plant now makes its own biogas from farm waste.' },
    { en: 'shipment ·+', pt: 'carregamento / remessa',
      def: 'a load of goods sent from one place to another, often by ship',
      ex: 'The next LNG shipment leaves the terminal on Friday.' },
    { en: 'capacity ·+', pt: 'capacidade',
      def: 'the maximum amount something can hold or produce',
      ex: 'Tank C has a capacity of five hundred thousand litres.' },
    { en: 'trend ·+', pt: 'tendência',
      def: 'the general direction something is changing over time',
      ex: 'The trend in the chart is clear: consumption goes up every year.' },
    { en: 'handover ·+', pt: 'passagem de turno',
      def: 'the act of giving information or responsibility to the next shift',
      ex: 'Erik always writes down three points for the handover.' }
  ];

  DF.PLAN.og1[9] = {
    unit: 9,
    title: 'Natural Gas',
    subtitle: 'Do poço ao pátio de tanques',
    icon: '🔥',

    mindmap: {
      center: 'Natural Gas',
      sub: 'Vaporizar, liquefazer, produzir, consumir, transportar, armazenar',
      branches: [
        {
          icon: '🔄', name: 'Verb → process → substance',
          leaves: WORDS.filter(function (w) { return ['liquefy', 'liquefaction', 'vaporize', 'vaporization'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; }),
          note: 'Cada família tem três formas: <b>verbo</b> (liquefy), <b>processo</b> ' +
                '(liquefaction) e <b>substância</b> (liquid / vapour). Trocar a forma errada ' +
                'na frase é o erro mais comum desta unidade.'
        },
        {
          icon: '📦', name: 'Production & logistics',
          leaves: WORDS.filter(function (w) { return ['consumption', 'transportation', 'storage', 'LNG'].indexOf(w.en) >= 0; })
            .map(function (w) { return { en: w.en, pt: w.pt }; })
            .concat(EXTRA_WORDS.filter(function (w) { return w.en.indexOf('shipment') >= 0 || w.en.indexOf('capacity') >= 0; })
              .map(function (w) { return { en: w.en, pt: w.pt }; })),
          note: 'O GNL (<b>LNG</b>) existe justamente para reduzir o custo de <b>storage</b> e ' +
                '<b>transportation</b> — o gás liquefeito ocupa muito menos espaço.'
        },
        {
          icon: '⏳', name: 'Past Simple — was/were',
          leaves: [
            { en: 'I was on the night shift.', pt: 'afirmativa' },
            { en: 'They were not ready.', pt: 'negativa' },
            { en: 'Was the compressor working?', pt: 'pergunta' },
            { en: 'Yes, it was. / No, it wasn\'t.', pt: 'respostas curtas' }
          ],
          note: '<b>was</b> = I/he/she/it · <b>were</b> = you/we/they. É a mesma divisão do ' +
                'verb to be no presente, só que no passado.'
        },
        {
          icon: '📋', name: 'Shift handover',
          leaves: [
            { en: "We've checked the compressor.", pt: 'trabalho concluído' },
            { en: "We haven't finished the pipeline inspection.", pt: 'trabalho pendente' },
            { en: 'One more thing —', pt: 'chamar atenção pra um ponto extra' },
            { en: 'Job Card #245', pt: 'formato da ficha de turno' }
          ],
          note: 'O handover mistura <b>was/were</b> (o que aconteceu durante o turno) com ' +
                '<b>present perfect</b> (o status agora, pro próximo turno).'
        },
        {
          icon: '📐', name: 'Describing equipment',
          leaves: [
            { en: 'a cylinder / a sphere / a cube', pt: 'forma' },
            { en: 'vertical / horizontal', pt: 'orientação' },
            { en: 'above ground / underground', pt: 'localização' },
            { en: 'a capacity of 500,000 litres', pt: 'capacidade' }
          ],
          note: 'Uma boa descrição de equipamento sempre segue a mesma ordem: forma → ' +
                'orientação → localização → capacidade.'
        },
        {
          icon: '📊', name: 'Reading a chart',
          leaves: [
            { en: 'The highest year was...', pt: 'o pico' },
            { en: 'The lowest year was...', pt: 'o vale' },
            { en: 'went up / went down', pt: 'subiu / caiu' },
            { en: 'the difference between X and Y', pt: 'a diferença entre dois valores' }
          ],
          note: 'Ler um gráfico em voz alta pra alguém é uma habilidade tão real quanto ' +
                'falar — é o que Erik faz toda vez que reporta produção pro escritório.'
        }
      ]
    },

    weeks: [

      // ══════════════════════ SEMANA 1 ══════════════════════
      {
        n: 1, key: 'process', icon: '🔥',
        title: 'From Well to World',
        goal: 'Usar as três formas de cada família de palavras do processo do gás (verbo, ' +
              'processo, substância), ler um gráfico de barras, e orientar alguém no processo ' +
              'de produção e distribuição de gás.',
        comp: 'Você escolhe a forma certa (verbo/processo/substância) na frase certa, lê um ' +
              'gráfico de barras novo em voz alta, e explica o processo de gás passo a passo ' +
              'pra um colega novo, fechando com um número do gráfico pro supervisor.',
        live: [
          'Kick-off sobre os usos do gás natural',
          'Vocabulário do processo de produção/distribuição de gás (verbo/processo/substância)',
          'Leitura de um gráfico de barras: consumo mundial de gás ao longo dos anos',
          'Background sobre LNG e o Sakhalin II Project'
        ],
        bridge: 'Na aula vocês viram o gráfico do livro e o background do Sakhalin II. Aqui o ' +
                'vocabulário de processo é NOVO (famílias de palavras completas — verbo, ' +
                'processo e substância), o gráfico de barras tem dados NOVOS, e no fim você ' +
                'faz a missão falada: você é um(a) operador(a) da North Star Downstream ' +
                'Plant e precisa orientar um trainee no processo inteiro, depois passa um ' +
                'número do gráfico pro supervisor.',
        nextLive: 'Semana 2 · Past Simple "be" — was/were completo, um listening de passado ' +
                  'vs. presente, e o padrão de escrita do shift handover log.',
        ican: [
          'I can use the verb, process and substance forms of the gas vocabulary correctly.',
          'I can read a bar chart out loud and describe a trend.',
          'I can explain the gas production process in order to a new colleague.',
          'I can report a number from a chart to a supervisor.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'vocab', icon: '📇', name: 'Target vocabulary', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u9w1:cards:core',
                title: '📇 As oito palavras da unidade',
                sub: 'Definições e exemplos da North Star Rig — não são do livro.',
                cards: WORDS.map(function (w) {
                  return { en: w.en, pt: w.pt, def: w.def + ' — ' + w.ex, tts: w.en };
                }) },
              { ui: 'cards', cat: 'voc', srsId: 'og1u9w1:cards:extra',
                title: '➕ Cinco palavras que a aula não traz',
                sub: 'Vocabulário extra do app.',
                cards: EXTRA_WORDS.map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'families', icon: '🔄', name: 'Verbo, processo ou substância?', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u9w1:read:fam',
                title: '🔄 Uma palavra, três formas',
                textTitle: 'Verb → process → substance',
                readAloud: false,
                text:
                  'VERBO — a ação: to liquefy, to vaporize, to produce, to consume, to ' +
                  'transport, to store.\n\n' +
                  'PROCESSO (substantivo) — o nome da ação: liquefaction, vaporization, ' +
                  'production, consumption, transportation, storage.\n\n' +
                  'SUBSTÂNCIA (só liquefy/vaporize) — o resultado físico: liquid, vapour.\n\n' +
                  'A ARMADILHA DO BRASILEIRO: usar o verbo onde precisa do processo — "The ' +
                  'liquefy happens at low temperature" está errado. O certo é "Liquefaction ' +
                  'happens at low temperature."',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w1:fam:1',
                title: '🔄 Verbo ou substantivo?', main: 'The plant needs to ___ the gas before it can be shipped.',
                options: DF.shuffle([
                  { label: 'liquefy', correct: true }, { label: 'liquefaction' },
                  { label: 'liquid' }, { label: 'liquefied' }
                ]),
                expl: 'Depois de "needs to", vem o verbo no infinitivo — liquefy.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w1:fam:2',
                title: '🔄 Verbo ou substantivo?', main: '___ happens at a very low temperature.',
                options: DF.shuffle([
                  { label: 'Liquefaction', correct: true }, { label: 'Liquefy' },
                  { label: 'Liquid' }, { label: 'Liquefying' }
                ]),
                expl: 'Sujeito da frase = o nome do processo, não o verbo — Liquefaction.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w1:fam:3',
                title: '🔄 Complete:', main: 'Before it reaches your house, the LNG ___ back into gas.',
                options: DF.shuffle([
                  { label: 'vaporizes', correct: true }, { label: 'vaporization' },
                  { label: 'vapour' }, { label: 'vaporizing' }
                ]),
                expl: 'Sujeito "the LNG" + verbo conjugado — vaporizes.' },
              { ui: 'match', cat: 'gra', srsId: 'og1u9w1:match:fam',
                title: '🔗 Ligue o verbo ao processo:',
                pairs: [
                  ['vaporize', 'vaporization'], ['liquefy', 'liquefaction'],
                  ['produce', 'production'], ['consume', 'consumption'],
                  ['transport', 'transportation'], ['store', 'storage']
                ] },
              { ui: 'type', cat: 'voc', srsId: 'og1u9w1:type:lng',
                title: '⌨️ Escreva a sigla:', main: 'Liquefied natural gas → ___',
                answers: ['LNG', 'lng'], expl: 'LNG = Liquefied Natural Gas.' }
            ]
          },

          {
            id: 'chart', icon: '📊', name: 'Lendo um gráfico de barras', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u9w1:read:chart',
                title: '📊 World gas consumption',
                textTitle: 'Billion cubic metres per year',
                text:
                  '2020: 3,800 · 2021: 3,950 · 2022: 4,150 · 2023: 4,300 · 2024: 4,500.\n\n' +
                  'A tendência é clara: o consumo mundial de gás sobe todo ano nesta série. ' +
                  'Compare os números antes de responder — qual ano é o mais alto, qual é o ' +
                  'mais baixo, e qual a diferença entre o primeiro e o último ano.',
                nextLabel: 'Pronto para comparar ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u9w1:chart:q1',
                title: '📊 Which year had the highest consumption?',
                options: DF.shuffle([
                  { label: '2024', correct: true }, { label: '2020' },
                  { label: '2022' }, { label: '2021' }
                ]),
                expl: '2024 tem o maior número: 4,500 billion cubic metres.' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u9w1:chart:q2',
                title: '📊 What is the trend from 2020 to 2024?',
                options: DF.shuffle([
                  { label: 'Consumption goes up every year', correct: true },
                  { label: 'Consumption goes down every year' },
                  { label: 'Consumption stays the same' },
                  { label: 'The chart doesn\'t show a trend' }
                ]),
                expl: 'Cada ano é maior que o anterior — a tendência é de alta.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u9w1:chart:diff',
                title: '📊 What is the difference between 2020 and 2024, in billion cubic metres?',
                sub: 'Só o número.',
                answers: ['700'], exact: true,
                expl: '4,500 − 3,800 = 700.' }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'Na Downstream Plant', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u9w1:dlg:trainee',
                title: '👂 Priya explica o processo pra um trainee',
                sub: 'Situação nova — não é o listening da aula. Ouça antes de ler.',
                lines: [
                  { who: 'Trainee', en: 'Priya, how does the gas get from the well to a house?' },
                  { who: 'Priya', en: 'First, we produce it at the well. Then we transport it to the plant.' },
                  { who: 'Priya', en: 'Next, we liquefy it for storage and shipping — that\'s LNG.' },
                  { who: 'Trainee', en: 'And then it vaporizes again before people use it?' },
                  { who: 'Priya', en: 'Exactly. Vaporization is the last step before consumption.' }
                ],
                question: 'Qual é o último passo antes do consumo?',
                options: DF.shuffle([
                  { label: 'Vaporization', correct: true }, { label: 'Liquefaction' },
                  { label: 'Transportation' }, { label: 'Production' }
                ]),
                expl: '"Vaporization is the last step before consumption."'
              }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Sua vez — de verdade', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u9w1:build:process', unit: 9, waSec: 'Sua vez',
                title: '🗣️ Missão: oriente o trainee',
                prompt: 'Você é um(a) operador(a) da North Star Downstream Plant. Explique o ' +
                        'processo do gás pro trainee, do poço até o consumo, usando first/' +
                        'next/then/finally.',
                example: 'First, we produce the gas at the well. Next, we transport it to the ' +
                         'plant. Then, we liquefy it into LNG for storage. Finally, it ' +
                         'vaporizes before consumption.',
                mustUse: ['first'],
                expl: 'O app não sabe a sua resposta — mande o áudio e o professor confere ' +
                      'a pronúncia.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u9w1:build:report', unit: 9, waSec: 'Sua vez',
                title: '🗣️ Missão: reporte pro supervisor',
                prompt: 'Feche a missão: reporte em voz alta um número do gráfico de consumo ' +
                        'mundial pro seu supervisor.',
                example: 'World gas consumption in 2024 was four thousand five hundred ' +
                         'billion cubic metres — the highest year in the chart.',
                mustUse: ['billion'],
                expl: 'É exatamente o tipo de leitura de número que acontece num relatório ' +
                      'real de plataforma.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w1', icon: '🔥', name: 'Sem o modelo na tela', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u9w1+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Explique LNG pra quem não sabe nada do setor',
                prompt: 'Explique o que é LNG e por que a indústria liquefaz o gás, com suas ' +
                        'próprias palavras.',
                example: 'LNG is liquefied natural gas. We liquefy it because it takes up ' +
                         'much less space for storage and transportation.',
                mustUse: ['liquefied'] }
            ]
          },
          {
            id: 'gen-w1', icon: '♾️', name: 'Treino infinito de famílias de palavras', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The plant needs to ___ the gas.', pool: 'og1GasVerb', focus: 'verbo',
                  ptHint: 'A planta precisa de ___ o gás.', n: 5 },
                { frame: '___ is the first step of the process.', pool: 'og1GasProcess',
                  focus: 'processo', ptHint: '___ é o primeiro passo do processo.', n: 5 }
              ]
            }
          },
          { id: 'more-video-1', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 2 ══════════════════════
      {
        n: 2, key: 'handover', icon: '📋',
        title: 'Handing Over the Shift',
        goal: 'Usar was/were em todas as formas (afirmativa, negativa, pergunta, resposta ' +
              'curta), e entregar um handover de turno falado completo, no padrão job-card.',
        comp: 'Você usa was/were sem travar em qualquer forma, e entrega um handover de ' +
              'turno falado — trabalho concluído e trabalho pendente — pro próximo turno, no ' +
              'padrão real da indústria.',
        live: [
          'Past Simple "be" — was/were: explicação e prática completa',
          'Listening contrastando presente e passado (is/are vs. was/were)',
          'Banco de frases do SHIFT HANDOVER LOG: work completed / work outstanding, ' +
          'formato job-card, "We\'ve installed...", "We need to check..."'
        ],
        bridge: 'Na aula vocês viram was/were e o banco de frases do handover log — escrito, ' +
                'em dupla. Aqui é diferente: was/were em profundidade com drills e ' +
                'transformação, e a MISSÃO CENTRAL do mês — você recebe um job-card com o ' +
                'que aconteceu no SEU turno (o que foi concluído, o que ficou pendente) e ' +
                'precisa ENTREGAR ESSE HANDOVER FALADO pro próximo turno, do jeito que se faz ' +
                'de verdade numa plataforma 24 horas.',
        nextLive: 'Semana 3 · Sakhalin II/biogás + Describing equipment — leitura e o pair ' +
                  'work de forma/capacidade de equipamento.',
        ican: [
          'I can use was/were in the positive, negative, question and short answer forms.',
          'I can contrast what is happening now with what happened before.',
          'I can write a short shift handover log with completed and outstanding tasks.',
          'I can deliver a full spoken shift handover to the next shift.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'point', icon: '⏳', name: 'Was / were — a regra num relance', tag: 'gramática',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u9w2:read:wwr',
                title: '⏳ Past Simple "be"',
                textTitle: 'As quatro formas',
                readAloud: false,
                text:
                  'POSITIVO\nI/He/She/It was → The compressor was fine at eight o\'clock.\n' +
                  'You/We/They were → We were ready for the handover.\n\n' +
                  'NEGATIVO\nI/He/She/It was not → The pump wasn\'t working this morning.\n' +
                  'You/We/They were not → They weren\'t on the platform yesterday.\n\n' +
                  'PERGUNTA\nWas the pipeline inspected? · Were the tanks full?\n\n' +
                  'RESPOSTA CURTA\nYes, it was. / No, it wasn\'t.\nYes, they were. / No, they weren\'t.',
                nextLabel: 'Entendi ▸' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w2:ww:1',
                title: '⏳ Complete:', main: 'The compressor ___ fine when I started my shift.',
                options: DF.shuffle([{ label: 'was', correct: true }, { label: 'were' }, { label: 'is' }, { label: 'are' }]),
                expl: 'the compressor → it → was.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w2:ww:2',
                title: '⏳ Complete:', main: 'The storage tanks ___ almost full yesterday.',
                options: DF.shuffle([{ label: 'were', correct: true }, { label: 'was' }, { label: 'are' }, { label: 'is' }]),
                expl: 'the tanks → they → were.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w2:ww:3',
                title: '⏳ Negue:', main: 'The valve ___ leaking during the morning shift.',
                options: DF.shuffle([{ label: "wasn't", correct: true }, { label: "weren't" }, { label: "isn't" }, { label: "don't" }]),
                expl: 'the valve → it → wasn\'t.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w2:ww:q',
                title: '⏳ A pergunta certa:', main: '___ the LNG pump working at the start of the shift?',
                options: DF.shuffle([{ label: 'Was', correct: true }, { label: 'Were' }, { label: 'Is' }, { label: 'Did' }]),
                trapNote: 'the pump = it → Was, nunca Were.',
                expl: 'the pump → it → Was.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w2:ww:short',
                title: '⚠️ Resposta curta:', main: 'Were the technicians ready for the inspection?',
                options: DF.shuffle([
                  { label: 'Yes, they were.', correct: true }, { label: "Yes, they're.", trap: true },
                  { label: 'Yes, they was.' }, { label: 'Yes, was they.' }
                ]),
                trapNote: 'A resposta curta afirmativa nunca contrai — "Yes, they\'re" não existe aqui.',
                expl: 'Yes, they were. A negativa contrai: No, they weren\'t.' }
            ]
          },

          {
            id: 'drill', icon: '🔁', name: 'Fluency drills — was/were', tag: 'drill', sp: true,
            items: [
              { ui: 'drill', cat: 'gra', srsId: 'og1u9w2:drl:was', unit: 9, waSec: 'Drill · was/were',
                title: '🔁 Drill 1 — o item troca', focus: 'was',
                frame: 'The ___ was fine at the start of the shift.', ptHint: 'O(a) ___ estava bem no início do turno.',
                slots: ['compressor', 'flow meter', 'valve', 'generator', 'pipeline'] },
              { ui: 'drill', cat: 'gra', srsId: 'og1u9w2:drl:were', unit: 9, waSec: 'Drill · was/were',
                title: '🔁 Drill 2 — negativa', focus: 'were not',
                frame: "The storage tanks weren't ___.", ptHint: 'Os tanques de armazenamento não estavam ___.',
                slots: ['full', 'ready', 'checked', 'clean', 'safe'] }
            ]
          },

          {
            id: 'transform', icon: '🔀', name: 'Say it another way', tag: 'gramática', sp: true,
            items: [
              { ui: 'transform', cat: 'gra', srsId: 'og1u9w2:tf:1',
                title: '🔀 Transformação com was/were',
                rounds: [
                  { base: 'The pump was working.', cmd: 'Negative',
                    answers: ["The pump wasn't working.", 'The pump was not working.'] },
                  { base: 'The pump was working.', cmd: 'Question',
                    answers: ['Was the pump working?'] },
                  { base: 'The tanks were full.', cmd: 'Negative',
                    answers: ["The tanks weren't full.", 'The tanks were not full.'] },
                  { base: 'The technicians were ready.', cmd: 'Question',
                    answers: ['Were the technicians ready?'] },
                  { base: 'Was the valve leaking?', cmd: 'Short answer',
                    answers: ['Yes, it was.', 'No, it was not.', "No, it wasn't."] }
                ] }
            ]
          },

          {
            id: 'listen', icon: '👂', name: 'Ontem e agora', tag: 'listening',
            items: [
              {
                ui: 'dialogue', cat: 'fun', srsId: 'og1u9w2:dlg:nowthen',
                title: '👂 Fatima compara ontem e hoje',
                sub: 'Sem texto na tela. Preste atenção no tempo verbal.',
                hideText: true,
                lines: [
                  { who: 'Erik', en: 'How is the compressor today?' },
                  { who: 'Fatima', en: "It's working fine now. But it wasn't working yesterday." },
                  { who: 'Erik', en: 'Were the storage tanks full yesterday?' },
                  { who: 'Fatima', en: "No, they weren't. They're almost full now." }
                ],
                question: 'Como estava o compressor ONTEM?',
                options: DF.shuffle([
                  { label: 'It wasn\'t working', correct: true }, { label: 'It was working fine' },
                  { label: 'It was full' }, { label: 'The text doesn\'t say' }
                ]),
                expl: '"It wasn\'t working yesterday." — hoje está bem, ontem não estava.'
              }
            ]
          },

          {
            id: 'log', icon: '📝', name: 'O shift handover log — versão escrita', tag: 'escrita',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u9w2:read:log',
                title: '📝 O padrão do handover log',
                textTitle: 'Work completed / work outstanding',
                readAloud: false,
                text:
                  'CONCLUÍDO — present perfect: "We\'ve checked the compressor." "We\'ve ' +
                  'repaired the flow meter."\n\n' +
                  'PENDENTE — present perfect negativo ou "still need to": "We haven\'t ' +
                  'finished the pipeline inspection." "We still need to check the LNG pump."\n\n' +
                  'É a mesma estrutura de um job card real: uma lista curta, sem enrolação.',
                nextLabel: 'Entendi ▸' },
              { ui: 'build', cat: 'fun', srsId: 'og1u9w2:build:log', unit: 9, waSec: 'Handover log',
                title: '🗣️ Escreva/fale duas linhas do log',
                prompt: 'Diga uma tarefa concluída e uma pendente, no padrão do handover log.',
                example: "We've installed the new gauge. We need to check the pressure tomorrow.",
                mustUse: ['we need to check'],
                expl: 'Esta é a versão curta — a missão completa vem no próximo passo.' }
            ]
          },

          {
            id: 'flagship', icon: '🏆', name: 'Missão: Shift Handover Report', tag: 'speaking', sp: true,
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u9w2:read:jobcard',
                title: '📋 Job Card #245 — seu turno terminou',
                textTitle: 'North Star Downstream Plant — Shift Handover',
                text:
                  'COMPLETED:\n— Checked the compressor at 08:00. It was fine.\n— Inspected ' +
                  'the storage tanks at 10:30. They were almost full.\n— Repaired the flow ' +
                  'meter at 13:00.\n\n' +
                  'OUTSTANDING:\n— Check the LNG pump.\n— Clean Storage Tank 2 before the ' +
                  'next shipment.\n\n' +
                  'Leia o job card com atenção — você vai entregar esse handover em voz alta, ' +
                  'como se o próximo turno estivesse na sua frente.',
                nextLabel: 'Pronto pra entregar o handover ▸' },
              { ui: 'build', cat: 'fun', srsId: 'og1u9w2:build:flagship', unit: 9, waSec: 'Shift Handover Report',
                title: '🏆 Entregue o handover completo',
                prompt: 'Usando o Job Card #245, entregue o handover de turno em voz alta: o ' +
                        'que estava acontecendo/como estava cada item (was/were), o que foi ' +
                        'concluído, e o que fica pendente — termine com "One more thing" pro ' +
                        'ponto mais importante.',
                example: "Hi, this is the shift handover. I checked the compressor at eight " +
                         "o'clock — it was fine. The storage tanks were almost full when I " +
                         "inspected them. I've repaired the flow meter. We haven't finished " +
                         "checking the LNG pump yet. One more thing — please clean Storage " +
                         "Tank 2 before the next shipment.",
                mustUse: ['one more thing'],
                expl: 'Esta é a entrega completa — mande o áudio, é o exercício mais ' +
                      'importante do mês. O professor confere was/were, present perfect, e a ' +
                      'clareza da entrega.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w2', icon: '🔥', name: 'Handover sem o job card', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u9w2+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Invente o seu próprio turno',
                prompt: 'Invente um turno inteiro (três tarefas concluídas, duas pendentes) e ' +
                        'entregue o handover completo, sem olhar um modelo.',
                example: "I've checked the generator and it was working well. I've tested the " +
                         "gas detector. We still need to inspect the pipeline and calibrate " +
                         "the flow meter. One more thing — the valve was leaking this morning.",
                mustUse: ['one more thing'] }
            ]
          },
          {
            id: 'gen-w2', icon: '♾️', name: 'Treino infinito de was/were', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: 'The ___ was checked before the shift.', pool: 'og1ShiftDone',
                  focus: 'was/were', ptHint: 'O(a) ___ foi verificado antes do turno.', n: 4 }
              ],
              backchain: [
                { text: 'We still need to check the LNG pump before the next shift.',
                  ptHint: 'Ainda precisamos verificar a bomba de GNL antes do próximo turno.' }
              ]
            }
          },
          { id: 'more-video-2', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 3 ══════════════════════
      {
        n: 3, key: 'equipment', icon: '📐',
        title: 'What Am I Describing?',
        goal: 'Ler um texto novo sobre LNG/biogás, ler um gráfico de pizza novo, e descrever ' +
              'equipamento por forma, orientação, localização e capacidade.',
        comp: 'Você lê um texto sobre um projeto de gás e responde perguntas de compreensão, ' +
              'lê um gráfico novo, e descreve um equipamento (forma/orientação/localização/' +
              'capacidade) claro o bastante pra alguém achar ele sozinho num diagrama.',
        live: [
          'Leitura sobre o Sakhalin II Project e uma história de biogás',
          'Pair work "Describing equipment": um aluno descreve, o outro acha no diagrama ' +
          '— info-gap com forma, orientação, localização e capacidade'
        ],
        bridge: 'Na aula vocês leram sobre Sakhalin II/biogás e fizeram o "Describing ' +
                'equipment" em DUPLA. Aqui é um texto NOVO sobre um projeto de biogás perto ' +
                'da North Star Downstream Plant, um gráfico de pizza NOVO, e a versão SOLO do ' +
                '"Describing equipment" — você descreve um tanque específico claro o ' +
                'bastante pra um colega achar ele sozinho, sem apontar.',
        nextLive: 'Semana 4 · Revisão + Key Words — checklist, teste misturando presente e ' +
                  'passado, e o "Communication" de comparação de gráficos.',
        ican: [
          'I can read a text about LNG or biogas and answer comprehension questions.',
          'I can read a pie chart and describe percentages.',
          'I can describe equipment by shape, orientation, location and capacity.',
          'I can describe equipment clearly enough for someone to find it on a diagram.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Mapa mental da unidade', tag: 'estudo', mindmap: true },

          {
            id: 'reading', icon: '📖', name: 'Biogás perto da planta', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u9w3:read:biogas',
                title: '📖 A small biogas project',
                textTitle: 'Near the North Star Downstream Plant',
                text:
                  'A small village near the North Star Downstream Plant now produces its own ' +
                  'biogas from farm waste. Priya visited the project last month.\n\n' +
                  'The village collects animal waste every day. Then, a simple tank turns the ' +
                  'waste into biogas through a natural process — no need for a big LNG ' +
                  'facility, and no liquefaction is required.\n\n' +
                  'The biogas is enough to cook meals for about thirty families and to power ' +
                  'a small generator. It is not enough for the whole village yet, but the ' +
                  'trend is growing: production went up by twenty percent this year.\n\n' +
                  'Priya says the project shows that gas doesn\'t always need a big platform ' +
                  'or a big pipeline — sometimes a small, local solution works too.',
                nextLabel: 'Li o texto ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u9w3:read:q1',
                title: '📖 What do they use to make biogas?',
                options: DF.shuffle([
                  { label: 'Animal waste', correct: true }, { label: 'Crude oil' },
                  { label: 'Natural gas from a well' }, { label: 'Seawater' }
                ]),
                expl: '"The village collects animal waste every day."' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u9w3:read:q2',
                title: '📖 How many families does the biogas cook meals for?',
                options: DF.shuffle([
                  { label: 'About thirty', correct: true }, { label: 'About three hundred' },
                  { label: 'The whole village' }, { label: 'The text doesn\'t say' }
                ]),
                expl: '"Enough to cook meals for about thirty families."' },
              { ui: 'type', cat: 'fun', srsId: 'og1u9w3:read:q3',
                title: '📖 Production went up by how much this year?',
                sub: 'Só o número, sem o símbolo %.',
                answers: ['20'], exact: true,
                expl: '"Production went up by twenty percent this year."' }
            ]
          },

          {
            id: 'pie', icon: '📊', name: 'Um gráfico de pizza novo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u9w3:read:pie',
                title: '📊 How the world uses natural gas',
                textTitle: 'Percentage of total use',
                text:
                  'Electricity: 38% · Heating: 30% · Industry: 22% · Transport: 10%.\n\n' +
                  'Compare os quatro números antes de responder.',
                nextLabel: 'Pronto para comparar ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u9w3:pie:q1',
                title: '📊 What is the biggest use of natural gas?',
                options: DF.shuffle([
                  { label: 'Electricity', correct: true }, { label: 'Heating' },
                  { label: 'Industry' }, { label: 'Transport' }
                ]),
                expl: '38% é o maior número — Electricity.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u9w3:pie:diff',
                title: '📊 What is the difference between Electricity and Transport, in percentage points?',
                sub: 'Só o número.',
                answers: ['28'], exact: true, expl: '38 − 10 = 28.' }
            ]
          },

          {
            id: 'equip', icon: '📐', name: 'Forma, orientação, local, capacidade', tag: 'vocabulário',
            items: [
              { ui: 'read', cat: 'gra', srsId: 'og1u9w3:read:equip',
                title: '📐 Como descrever um equipamento',
                textTitle: 'Shape → orientation → location → capacity',
                readAloud: false,
                text:
                  'FORMA — a cylinder / a sphere / a cube.\n\n' +
                  'ORIENTAÇÃO (só faz sentido pra cilindro) — vertical / horizontal.\n\n' +
                  'LOCALIZAÇÃO — above ground / underground.\n\n' +
                  'CAPACIDADE — a capacity of 500,000 litres.\n\n' +
                  'Exemplo completo: "It\'s a vertical cylinder, above ground, with a capacity ' +
                  'of five hundred thousand litres."',
                nextLabel: 'Entendi ▸' },
              { ui: 'match', cat: 'voc', srsId: 'og1u9w3:match:equip',
                title: '🔗 Ligue a categoria ao exemplo:',
                pairs: [
                  ['shape', 'a sphere'], ['orientation', 'horizontal'],
                  ['location', 'underground'], ['capacity', 'a capacity of 200,000 litres']
                ] },
              { ui: 'read', cat: 'fun', srsId: 'og1u9w3:read:tanks',
                title: '📐 North Star Downstream Plant — storage yard',
                textTitle: 'Four tanks',
                text:
                  'Tank A: a horizontal cylinder, above ground, with a capacity of 200,000 ' +
                  'litres.\n\n' +
                  'Tank B: a sphere, above ground, with a capacity of 150,000 litres.\n\n' +
                  'Tank C: a vertical cylinder, underground, with a capacity of 500,000 litres.\n\n' +
                  'Tank D: a cube, above ground, with a capacity of 80,000 litres.',
                nextLabel: 'Memorizei o pátio ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u9w3:equip:id',
                title: '📐 Which tank is this?', main: '"It\'s a horizontal cylinder, above ground, with a capacity of two hundred thousand litres."',
                options: DF.shuffle([
                  { label: 'Tank A', correct: true }, { label: 'Tank B' },
                  { label: 'Tank C' }, { label: 'Tank D' }
                ]),
                expl: 'Horizontal cylinder, above ground, 200,000 litres — só o Tank A bate.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Missão: descreva o Tank C', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u9w3:build:equip', unit: 9, waSec: 'Describing equipment',
                title: '🗣️ Descreva o Tank C sem dizer o nome',
                prompt: 'Um colega novo está olhando o diagrama do pátio de tanques, mas não ' +
                        'sabe qual é qual. Descreva o Tank C (forma, orientação, localização, ' +
                        'capacidade) claro o bastante pra ele achar sozinho — sem dizer ' +
                        '"Tank C".',
                example: "It's a vertical cylinder. It's underground, not above ground. It " +
                         "has a capacity of five hundred thousand litres — the biggest tank " +
                         "in the yard.",
                mustUse: ['cylinder'],
                expl: 'Esta é a versão SOLO do "Describing equipment" da aula — lá é em dupla ' +
                      'com info-gap, aqui você descreve sozinho pra alguém imaginário achar.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w3', icon: '🔥', name: 'Descreva sem o texto de apoio', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u9w3+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Invente um equipamento e descreva',
                prompt: 'Invente um tanque ou equipamento novo (forma, orientação, ' +
                        'localização, capacidade) e descreva ele por completo, sem modelo.',
                example: "It's a sphere. It's above ground, next to Tank B. It has a capacity " +
                         "of ninety thousand litres.",
                mustUse: ['capacity'] }
            ]
          },
          {
            id: 'gen-w3', icon: '♾️', name: 'Treino infinito de descrição', tag: 'gerado',
            gen: {
              waSec: 'Treino infinito',
              drills: [
                { frame: "It's ___.", pool: 'og1EquipDesc', focus: 'forma/local',
                  ptHint: 'É ___.', n: 5 }
              ]
            }
          },
          { id: 'more-video-3', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      },

      // ══════════════════════ SEMANA 4 ══════════════════════
      {
        n: 4, key: 'review', icon: '🏁',
        title: 'Ready for the Next Shift',
        goal: 'Revisar was/were, vocabulário de gás e leitura de gráficos, e se autoavaliar ' +
              'com um checklist.',
        comp: 'Numa revisão geral, você mistura was/were, presente e passado, vocabulário de ' +
              'gás e leitura de gráfico sem errar, e diz com sinceridade o que já consegue ' +
              'fazer sozinho — fechando com um reporte de tendência falado pro supervisor.',
        live: [
          'Checklist de autoavaliação e Key Words',
          '"Language test" misturando presente e passado',
          'Communication — pair work comparando gráficos de produção e consumo de óleo e gás'
        ],
        bridge: 'Na aula vocês fizeram o "Communication" em dupla, comparando gráficos de ' +
                'produção e consumo. Aqui é uma revisão SOLO no espírito de teste — frases ' +
                'novas, não as da aula — mais o flashcard das Key Words, um checklist "eu ' +
                'consigo…", e a missão de FECHAMENTO: você recebe um gráfico de produção/' +
                'consumo e reporta a tendência principal em voz alta pro supervisor — o ' +
                'mesmo tipo de entrega falada da Semana 2, agora com números em vez de tarefas.',
        nextLive: 'Unit 10 — começa na segunda-feira seguinte.',
        ican: [
          'I can use was/were and the present tense together without stopping to think.',
          'I can use the gas production vocabulary (verb, process and substance forms).',
          'I can read a chart and report its main trend out loud.',
          'I can honestly say what I can and cannot do yet.'
        ],

        steps: [
          { id: 'mindmap', icon: '🗺️', name: 'Revisão: o mapa mental inteiro', tag: 'estudo', mindmap: true },

          {
            id: 'keywords', icon: '🔑', name: 'Key Words da unidade', tag: 'vocabulário',
            items: [
              { ui: 'cards', cat: 'voc', srsId: 'og1u9w4:cards:review',
                title: '🔑 Revisão — as treze palavras do mês',
                sub: 'Flashcard de revisão: as oito principais + as cinco extras.',
                cards: WORDS.concat(EXTRA_WORDS).map(function (w) {
                  return { en: w.en.replace(' ·+', ''), pt: w.pt, def: w.def + ' — ' + w.ex,
                           tts: w.en.replace(' ·+', '') };
                }) }
            ]
          },

          {
            id: 'mix', icon: '📝', name: 'Revisão geral', tag: 'escrita',
            items: [
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w4:mix:1',
                title: '📝 Complete:', main: 'The pump ___ working now, but it ___ broken yesterday.',
                options: DF.shuffle([
                  { label: "is / was", correct: true }, { label: "was / is" },
                  { label: "is / were" }, { label: "are / was" }
                ]),
                expl: 'presente (is) para agora, was para ontem — the pump = it.' },
              { ui: 'choice', cat: 'gra', srsId: 'og1u9w4:mix:2',
                title: '📝 Complete:', main: '___ the tanks full at the start of your shift?',
                options: DF.shuffle([
                  { label: 'Were', correct: true }, { label: 'Was' },
                  { label: 'Are' }, { label: 'Did' }
                ]),
                expl: 'the tanks → they → Were.' },
              { ui: 'type', cat: 'spl', srsId: 'og1u9w4:mix:num',
                title: '🔢 Ouça e escreva o número (bilhões de metros cúbicos):',
                tts: 'Four thousand one hundred.', showIfNoTTS: 'four thousand one hundred',
                answers: ['4100', '4,100'], exact: true, expl: 'four thousand one hundred = 4100.' },
              { ui: 'choice', cat: 'voc', srsId: 'og1u9w4:mix:fam',
                title: '📝 Complete:', main: '___ is the process of turning gas into a liquid.',
                options: DF.shuffle([
                  { label: 'Liquefaction', correct: true }, { label: 'Liquefy' },
                  { label: 'Liquid' }, { label: 'Vaporization' }
                ]),
                expl: 'Liquefaction = o processo (substantivo).' },
              { ui: 'match', cat: 'fun', srsId: 'og1u9w4:match:review',
                title: '🔗 Ligue cada palavra ao significado:',
                pairs: [
                  ['consumption', 'the amount of something that is used'],
                  ['storage', 'keeping something for later use'],
                  ['transportation', 'carrying something from one place to another'],
                  ['LNG', 'liquefied natural gas']
                ] },
              { ui: 'order', cat: 'gra', srsId: 'og1u9w4:ord:1',
                title: '🧩 Monte a frase:', answer: 'We were not ready for the inspection',
                expl: 'sujeito + were not + complemento.' }
            ]
          },

          {
            id: 'chart', icon: '📊', name: 'Communication — versão solo', tag: 'listening',
            items: [
              { ui: 'read', cat: 'fun', srsId: 'og1u9w4:read:compare',
                title: '📊 Oil vs. gas production',
                textTitle: 'North Star Rig — 2023',
                text:
                  'Oil production: 2,800 barrels a day. Gas production: 4,200 cubic metres a ' +
                  'day. Gas consumption on site: 3,900 cubic metres a day.\n\n' +
                  'Compare os três números antes de responder.',
                nextLabel: 'Pronto para comparar ▸' },
              { ui: 'choice', cat: 'fun', srsId: 'og1u9w4:chart:q1',
                title: '📊 Is gas production higher or lower than gas consumption?',
                options: DF.shuffle([
                  { label: 'Higher — production is 4,200, consumption is 3,900', correct: true },
                  { label: 'Lower' }, { label: 'The same' }, { label: 'The text doesn\'t say' }
                ]),
                expl: '4,200 > 3,900 — a produção é maior que o consumo no local.' },
              { ui: 'build', cat: 'fun', srsId: 'og1u9w4:build:report', unit: 9, waSec: 'Communication',
                title: '🏆 Missão de fechamento: reporte a tendência',
                prompt: 'Reporte em voz alta pro supervisor: qual número é maior — produção ' +
                        'ou consumo de gás — e qual é a diferença entre eles.',
                example: 'Gas production was higher than gas consumption. The difference was ' +
                         'three hundred cubic metres a day.',
                mustUse: ['difference'],
                expl: 'É a mesma habilidade do handover da Semana 2 — só que com números de ' +
                      'produção em vez de tarefas. Mande o áudio.' }
            ]
          },

          {
            id: 'selfcheck', icon: '✅', name: 'Eu consigo…', tag: 'estudo',
            items: [
              { ui: 'selfcheck', cat: 'fun', unit: 9, idx: 0,
                statement: 'I can use the verb, process and substance forms of the gas vocabulary.',
                ptHint: 'Eu consigo usar as formas de verbo, processo e substância do vocabulário de gás.' },
              { ui: 'selfcheck', cat: 'fun', unit: 9, idx: 1,
                statement: 'I can use was/were correctly, in positive, negative and question.',
                ptHint: 'Eu consigo usar was/were certo, no afirmativo, negativo e pergunta.' },
              { ui: 'selfcheck', cat: 'fun', unit: 9, idx: 2,
                statement: 'I can deliver a full spoken shift handover.',
                ptHint: 'Eu consigo entregar um handover de turno falado completo.' },
              { ui: 'selfcheck', cat: 'fun', unit: 9, idx: 3,
                statement: 'I can describe equipment by shape, orientation, location and capacity.',
                ptHint: 'Eu consigo descrever um equipamento por forma, orientação, local e capacidade.' },
              { ui: 'selfcheck', cat: 'fun', unit: 9, idx: 4,
                statement: 'I can read a chart out loud and report its main trend.',
                ptHint: 'Eu consigo ler um gráfico em voz alta e reportar a tendência principal.' }
            ]
          },

          {
            id: 'you', icon: '🗣️', name: 'Ensaio de fala — tudo junto', tag: 'speaking', sp: true,
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u9w4:st:1', unit: 9, waSec: 'Revisão',
                title: '🏆 O resumo completo',
                prompt: 'Fale por um minuto: descreva o processo do gás, o que aconteceu no ' +
                        'seu turno (was/were), e a tendência de um número que você escolher.',
                example: "First, we produce the gas, then we liquefy it into LNG. The " +
                         "compressor was working fine all shift. Gas consumption is going up " +
                         "every year — the trend is clear.",
                mustUse: ['first'],
                expl: 'Mande o áudio — o professor confere pronúncia e as formas gramaticais ' +
                      'do mês inteiro.' }
            ]
          }
        ],

        more: [
          {
            id: 'more-w4', icon: '🔥', name: 'Revisão sem modelo', tag: 'difícil',
            items: [
              { ui: 'build', cat: 'fun', srsId: 'og1u9w4+:b1', unit: 9, waSec: 'Praticar mais',
                title: '🔥 Fale por um minuto',
                prompt: 'Fale por um minuto sobre um turno inteiro na North Star Downstream ' +
                        'Plant: o que estava acontecendo, o que foi concluído, o que ficou ' +
                        'pendente, e um número de produção pra fechar.',
                example: "The plant was busy all shift. We've checked the compressor and " +
                         "repaired the flow meter. We still need to inspect the pipeline. " +
                         "Production was four thousand cubic metres — a good day.",
                expl: 'É o resumo falado de tudo que a unidade ensinou.' }
            ]
          },
          { id: 'more-video-4', icon: '📺', name: 'Vídeo-aula do tópico', tag: 'em breve', soon: true }
        ]
      }
    ]
  };
})(typeof window !== 'undefined' ? window : globalThis);
