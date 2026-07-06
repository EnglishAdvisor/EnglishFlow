# 🐊 A Maldição da Cuca

**Um RPG de inglês contra as lendas do folclore brasileiro.**
A Cuca enfeitiçou todas as palavras em inglês do Brasil. Sete lendas guardam as sete
letras do contra-feitiço — **E·N·G·L·I·S·H** — e cada uma domina uma dificuldade
clássica do brasileiro com o inglês:

| Lenda | Desafio |
|---|---|
| 🌪️ Saci-Pererê | Falsos amigos (*pretend ≠ pretender*) |
| 🔥 Curupira | Ordem das palavras (montar frases) |
| 🧜 Iara | Listening (ouça e escreva) |
| 🐬 Boto Encantado | Phrasal verbs |
| 🐴 Mula-sem-cabeça | Preposições (in/on/at) |
| 🐺 Lobisomem | Verbos irregulares e o som do -ED |
| 🐊 CUCA | Tudo ao mesmo tempo |

## ▶️ Como jogar

Dê **dois cliques em `JOGAR.bat`** (ou abra `index.html` no navegador).
Funciona 100% offline, sem instalação, sem cadastro. Melhor no **Edge ou Chrome**
(voz em inglês e microfone nativos). Funciona também no celular.

## 🎮 O que tem dentro

- **28 batalhas** em 7 regiões, com chefes de fases e mecânicas próprias
  (a Cuca canta pra acelerar seu tempo; o Saci embaralha suas opções).
- **Repetição espaçada**: palavras que você erra viram **Assombrações** 👻
  que voltam para te caçar até você dominá-las. Tudo fica registrado no **Grimório**.
- **Crítico de velocidade** e **combos**: responder rápido e em sequência causa mais dano.
- **Itens brasileiros**: Cafezinho ☕, Pão de Queijo 🧀, Chinelo da Vó 🩴, Patuá 🧿...
- **Desafio Diário**: 10 perguntas iguais para todo mundo, com resultado
  compartilhável em emojis (tipo Wordle) e sequência de dias 🔥.
- **Voz**: os desafios de listening falam de verdade (voz do sistema) e, se você
  ligar o microfone nos Ajustes, aparecem desafios de **pronúncia falada**.
- **Modo Pesadelo** (Novo Jogo+) depois de zerar.

## 🎓 Modo Mentor (professor ↔ aluno, sem servidor)

Tudo viaja por **códigos compactados** que cabem numa mensagem de WhatsApp:

1. **Mentor** cria uma missão (tipos de desafio, dificuldade, até vocabulário e
   frases próprias) → gera um código `CUCA1...` e envia aos alunos.
2. **Aluno** cola o código em *Missões*, joga (as perguntas são idênticas para a
   turma inteira) e recebe um código de comprovação `PROVA1...` **assinado**.
3. **Mentor** cola a comprovação em *Resultados*: o jogo verifica a assinatura
   (✔ autêntico / ⚠ adulterado) e monta o **ranking da turma**.
4. O aluno também pode gerar um **Boletim** (`BOLETIM1...`) em Ajustes, mostrando
   a precisão dele por categoria — o mentor vê onde reforçar.

## 🛠️ Tecnicamente

Zero dependências, zero build, zero rede. HTML + CSS + JavaScript puros:

- **Monstros procedurais**: cada inimigo é desenhado por código em canvas a partir
  de uma semente (corpo, olhos, chifres, tentáculos); cada chefe tem desenho e
  animações próprias (fases da lua do Lobisomem, caldeirão da Cuca...).
- **Áudio 100% sintetizado** com Web Audio: efeitos e trilha sonora em
  sequenciador de 16 passos, que muda por região e acelera nos chefes.
- **Web Speech API** para voz (TTS) e reconhecimento de fala (opcional).
- **SRS** (SM-2 simplificado) medido em batalhas, não em dias.
- **Códigos** com compressão deflate (`CompressionStream`) + base64url +
  assinatura FNV dupla.
- ~500 itens de conteúdo autorais focados nas dores do falante de português.

Feito com 💜 por Claude.
