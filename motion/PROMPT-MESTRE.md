# PROMPT-MESTRE.md — Colar no Claude Code

Copie o prompt abaixo e cole em uma sessão do Claude Code dentro do repositório.

---

## PROMPT MESTRE

```
Você é um motion graphics designer e desenvolvedor HyperFrames especializado em vídeos emocionais para produtos digitais.

Contexto do Projeto:
O Notícias do Céu (https://luchesigui.github.io/noticias-do-ceu/) é um memorial digital para pets que partiram. A proposta é transformar a saudade em uma homenagem viva, em formato de jornal celestial, com notícias diárias, memórias, cartas para o céu e compartilhamento com a família.

Mensagem central: "O amor não morre, ele vira notícia no céu."

Objetivo:
Criar um vídeo de motion graphics vertical 9:16 para Reels/TikTok/Shorts, com 30 a 45 segundos, apresentando o produto de forma emocional, clara e comercial.

Tom: Emocional, acolhedor, poético, delicado e esperançoso. NÃO deve ser mórbido.

Stack OBRIGATÓRIA:
- HyperFrames (HTML-to-video) — NÃO use Remotion
- GSAP para animações (sempre registrada em window.__hfTimeline para seek determinístico)
- Tailwind v4 runtime
- HTML puro com atributos data-* do HyperFrames

Direção visual:
Editorial vintage + memorial afetivo + universo celestial.
Use jornal antigo, papel creme, manchetes serifadas, nuvens, patinhas, cartas, selos, dourado suave, marrom escuro e animações lentas.

Paleta:
- Creme #F7F1E8 (background)
- Marrom escuro #3A2416 (textos)
- Caramelo #B9854D (destaques)
- Dourado suave #D6A75E (brilhos, selos)
- Off-white #FFFDF8 (base)
- Cinza #6E6258 (secundários)

TAREFA:

1. LEIA motion/PLAN.md, motion/SCRIPT.md, motion/STORYBOARD.md e motion/CLAUDE.md
2. NÃO pule a leitura dos arquivos — eles contêm o contexto completo
3. Inicialize o projeto HyperFrames em motion/hyperframes-composition/
4. Crie a composição HTML seguindo o storyboard de 6 cenas
5. Implemente as animações com GSAP (sempre no window.__hfTimeline)
6. Use os assets da landing como referência visual
7. Garanta que a composição renderiza sem erro com `npx hyperframes render`
8. Duração final: entre 30 e 45 segundos
9. Crie README.md dentro de hyperframes-composition/ com comandos de uso

Regras:
- NÃO use setInterval/setTimeout para animações
- NÃO use requestAnimationFrame manual
- NÃO use CSS animations infinitas
- SEMPRE registre GSAP no window.__hfTimeline
- Texto mínimo: 24px equivalente para mobile
- Safe area: respeite 250px topo e base para UI do Reels
- CTA deve aparecer claramente nos últimos 6 segundos

Critérios de verificação (execute antes de finalizar):
- npx hyperframes render executa sem erro
- Duração entre 30 e 45 segundos
- Formato 1080x1920
- Texto legível em 375px de largura
- Emoção vem antes da explicação
- CTA claro nos últimos 6s
- Visual consistente com a landing
- Não parece template genérico
- Jornal é protagonista
- GSAP timeline é deterministic

Se encontrar problemas durante a implementação, corrija antes de finalizar.
Se precisar de assets que não existem, crie placeholders SVGs funcionais e documente no README quais assets reais precisam ser substituídos.
```
