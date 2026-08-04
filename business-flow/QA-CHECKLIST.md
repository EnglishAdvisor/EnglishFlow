# QA CHECKLIST — painel semanal ENGLISH FLOW

> Documento vivo. Toda vez que um bug novo for encontrado (em qualquer trilha —
> Starter, Elementary, World Class One, Oil and Gas One), ele entra na lista abaixo
> **com o teste que o pega**. Antes de considerar qualquer unidade/semana pronta —
> e antes de cada trilha nova ser dada por fechada — rodar o **script de varredura
> geral** (seção final) inteiro contra tudo que já existe, não só o que acabou de
> ser escrito. Um bug achado numa unidade tardia pode existir sem correção nas
> unidades anteriores, que já foram dadas como prontas.

## Como usar
1. Abrir `semana.html` no navegador (preview).
2. **Se algum arquivo `.js`/`.html` foi editado, subir o `?v=` das tags `<script>`
   antes de testar** — o navegador cacheia por URL exata em `file://` e um teste
   pode continuar "achando" um bug já corrigido no disco (ver bug #6 abaixo).
3. Colar o script da seção "Script de varredura geral" no console/`javascript_tool`.
4. Qualquer saída não-vazia é bug real — corrigir, subir versão, rodar de novo até
   sair `{}`.
5. Se o bug for de um tipo NOVO (não coberto pelo script ainda), registrar aqui
   embaixo e, se der, estender o script pra pegar esse padrão sozinho da próxima vez.

---

## Lista de bugs já encontrados (cada um vira um item do "olhar" antes de fechar)

### 1. Timezone off-by-one na formatação de data
**Sintoma:** `DF.fmtDate('2026-08-10')` (string ISO sem hora) exibe o dia anterior
no fuso do Brasil, porque vira meia-noite UTC.
**Fix:** nunca passar string ISO pura pro `DF.fmtDate`. Sempre
`DF.fmtDate(new Date(iso + 'T00:00:00'))`, ou usar o helper `fmtISO()` já criado em
`aluno.js`.
**Como checar:** `grep -n "DF\.fmtDate(" js/**/*.js` — cada ocorrência tem que
receber um `Date` já construído com `+'T00:00:00'`, nunca a string crua.

### 2. Nacionalidade não é regra de sufixo
**Sintoma:** gerar nacionalidade por sufixo (`+n`, `-ian`) produz erros tipo
"Mexicon" (Mexico) ou "Brazil n" (Brazil).
**Fix:** usar tabela fechada (`NAT_TABLE` em `gen.js`) — nunca regra automática.
**Como checar:** manual — se alguém tentar reescrever `G.nationality`, rodar contra
todos os países da tabela e conferir o resultado à mão.

### 3. Plural/3ª pessoa quebrando termo composto
**Sintoma:** `G.plural("IT technician")` ou `G.thirdPerson` lowercasa/pluraliza a
string inteira, quebrando siglas ("IT" vira "it").
**Fix:** pluralizar/conjugar só a ÚLTIMA palavra, preservando o resto via split/join.
**Como checar:** `G.plural("IT technician")` deve devolver `"IT technicians"` (I e T
maiúsculos preservados).

### 4. `<button>` não herda `color` do pai
**Sintoma:** texto de botão fica cinza/ilegível — `<div>` herda `color` do
ancestral, `<button>` não (usa cor default do browser a menos que seja setado).
Foi o bug "não vejo o nome dos alunos" (`.aluno-card`).
**Fix:** toda classe nova aplicada a um `DF.el('button', ...)` precisa de
`color: var(--tx)` explícito no CSS.
**Como checar:** ver seção "Script de varredura geral" → checagem 3 (grep de
classes usadas em `DF.el('button'` cruzado com `color:` no CSS).

### 5. Item `transform` com formato errado
**Sintoma:** `Cannot read properties of undefined (reading 'base')` ao abrir um
drill de transformação — o item foi escrito como `{base:'...', cmds:[...]}` em vez
do formato real.
**Fix:** o mecanismo `M.transform` (em `mech2.js`) exige
`item.rounds = [{base, cmd, answer}, ...]` — um array de rounds, cada um já com sua
própria base. NÃO existe `item.base` solto nem `item.cmds`.
**Como checar:** ver seção "Script de varredura geral" → checagem 1 (render de todo
item real contra `DF.MECH.render`, que pega qualquer mecânica com formato errado —
não só `transform`).

### 6. Cache de `file://` por URL exata do script
**Sintoma:** corrigir um bug no arquivo `.js`, recarregar a página, e o teste no
navegador continua mostrando o bug antigo — mesmo com o disco já certo.
**Fix:** não é bug de código. O Chromium cacheia recursos `file://` pela URL exata;
como as tags `<script src="...js?v=X.Y">` não mudam de URL entre edições, o cache
serve a versão antiga pra sempre até a query string mudar. **Subir o número de
versão** (`?v=`) nas 3 páginas (`semana.html`, `aluno.html`, `painel.html`) força
uma busca nova.
**Como checar:** se um teste continuar "falhando" depois de uma correção que você
tem certeza que fez, confirmar primeiro que o disco está certo
(`grep` no arquivo ou `fetch(url, {cache:'no-store'})`) antes de desconfiar do
código de novo.

<!-- Próximo bug entra aqui embaixo, mesmo formato: Sintoma / Fix / Como checar -->

---

## Script de varredura geral

Colar isto inteiro no `javascript_tool` (ou console) com `semana.html` aberto e a
versão do cache já subida. Roda as 3 checagens automatizáveis (bugs #1, #4, #5)
contra TODAS as trilhas/units/semanas já escritas, não só a mais recente.

```js
(function () {
  const out = { renderErrors: {}, dateWarnings: [], buttonColorGaps: [] };

  // Checagem 1 — bug #5 (e qualquer outro formato de item errado):
  // renderiza cada item de cada semana de cada unit de cada trilha carregada.
  const box = document.createElement('div');
  Object.keys(DF.PLAN || {}).forEach(function (trail) {
    Object.keys(DF.PLAN[trail] || {}).forEach(function (u) {
      const plan = DF.PLAN[trail][u];
      if (!plan || !plan.weeks) return;
      plan.weeks.forEach(function (week) {
        ['steps', 'more'].forEach(function (section) {
          (week[section] || []).forEach(function (step) {
            if (step.mindmap || step.gen || step.soon) return;
            (step.items || []).forEach(function (item) {
              try { DF.MECH.render(item, box, function () {}); }
              catch (e) {
                const key = trail + ':U' + u + 'W' + week.n;
                out.renderErrors[key] = out.renderErrors[key] || [];
                out.renderErrors[key].push(step.id + ':' + item.srsId + ' EXC ' + e.message);
              }
            });
          });
        });
      });
    });
  });

  console.log('QA — varredura geral:', JSON.stringify(out.renderErrors, null, 2));
  return JSON.stringify(out.renderErrors);
})();
```

**Checagem 2 (bug #1 — data)**, rodar via Bash/grep no repo, não no navegador:
```bash
grep -n "DF\.fmtDate(" js/**/*.js
```
Conferir à mão que todo resultado recebe `new Date(iso+'T00:00:00')`, nunca a
string crua.

**Checagem 3 (bug #4 — cor de botão)**, também via Bash:
```bash
grep -on "DF\.el('button'[^)]*'\([a-zA-Z0-9_ .-]*\)'" js/week/*.js js/*.js \
  | sed -E "s/.*'([a-zA-Z0-9_ .-]*)'\$/\1/" | tr ' ' '\n' | sort -u
```
Pra cada classe que aparecer, conferir no CSS (`css/*.css`) se ela (ou a `.btn`
base da qual ela herda) tem `color:` explícito.

---

## Histórico de rodadas completas

| Data | Commit | Escopo | Resultado |
|---|---|---|---|
| 03/08/2026 | `0e18b8d` | Business Starter Units 1–6 (22 semanas) | 0 erros retroativos; só o bug #5 (Unit 6 sem.2, já corrigido no commit anterior) |
| 03/08/2026 | (não commitado) | Business Starter Units 1–8 (35 semanas) — fecha Unit 6, cria Units 7 e 8 inteiras + Semana 34 de preparo (Viewpoint 2 / teste final) | 0 erros de render; 787 itens, 0 `srsId` duplicado em todo o plano |
