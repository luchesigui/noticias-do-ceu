# CLAUDE.md — Projeto de Motion Graphics Notícias do Céu

## Contexto do Projeto

Este é um projeto de motion graphics para o **Notícias do Céu** (https://luchesigui.github.io/noticias-do-ceu/), um memorial digital para pets que partiram.

O objetivo é criar vídeos curtos (30-45s) para Reels/TikTok/Shorts usando **HyperFrames** como engine de renderização.

## Stack Obrigatória

- **HyperFrames** (HTML-to-video) — NÃO use Remotion
- **GSAP** para animações (seekable, frame-accurate)
- **Tailwind v4** (runtime, não build)
- **HTML puro** com atributos `data-*` do HyperFrames
- **ffmpeg** para encode

## Regras de Autoria HyperFrames

### Composição Base

Toda composição HyperFrames segue este padrão:

```html
<div id="stage"
     data-composition-id="nome-do-video"
     data-start="0"
     data-width="1080"
     data-height="1920">
  <!-- elementos de mídia aqui -->
</div>
```

### Atributos de Elementos

```html
<!-- Vídeo -->
<video data-start="0" data-duration="5" data-track-index="0"
       src="clip.mp4" muted playsinline></video>

<!-- Imagem -->
<img data-start="2" data-duration="3" data-track-index="1"
     src="foto.png" />

<!-- Áudio -->
<audio data-start="0" data-duration="9" data-track-index="2"
       data-volume="0.5" src="musica.wav"></audio>

<!-- Texto animado -->
<div data-start="1" data-duration="4" data-track-index="3"
     class="animate-fade-in">
  Texto aqui
</div>
```

### Regras GSAP para HyperFrames

**SEMPRE** registre animações GSAP no `window.__hfTimeline` para seek determinístico:

```javascript
// Registro obrigatório para seek
window.__hfTimeline = window.__hfTimeline || gsap.timeline({paused: true});

// Animações devem usar o timeline global
window.__hfTimeline.from("#elemento", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power2.out"
}, 0); // offset em segundos

// NÃO use gsap.to() solto — sempre no timeline
```

### Animações Proibidas

- `setInterval` / `setTimeout` para animações (não são seekable)
- `requestAnimationFrame` manual
- CSS animations com `animation-iteration-count: infinite` (não são deterministicamente seekable)
- Qualquer coisa que dependa de wall-clock time

### Animações Permitidas

- GSAP timeline (sempre registrada em `window.__hfTimeline`)
- CSS transitions (são seekable pelo HyperFrames)
- `element.animate()` (WAAPI) — registrada via adapter
- Lottie — via `window.__hfLottie`
- Three.js — via `window.__hfThreeTime`

## Paleta de Cores (Obrigatória)

```css
:root {
  --cream: #F7F1E8;
  --brown-dark: #3A2416;
  --caramel: #B9854D;
  --gold-soft: #D6A75E;
  --off-white: #FFFDF8;
  --gray-text: #6E6258;
}
```

**Background padrão:** `--cream` ou `--off-white`
**Textos principais:** `--brown-dark`
**Destaques/CTAs:** `--caramel` ou `--gold-soft`
**Textos secundários:** `--gray-text`

## Tipografia

- **Títulos:** Fonte serifada (Peco-style ou similar), bold, 48-72px
- **Corpo:** Fonte serifada, regular, 24-36px
- **Labels/UI:** Monospace (Menlo), 14-18px
- **Mínimo para mobile:** 24px equivalente

## Diretrizes de Motion

### Timing
- Fade in/out: 0.5s ease
- Texto aparecendo: 0.8s ease
- Transições de cena: 0.3s crossfade
- Pausa emocional após frase-chave: 1.5s-2s
- "Aha moment" reveal: 2.5s + 3s pausa

### Easing
- Entrada: `power2.out`
- Saída: `power2.in`
- Elementos delicados: `power1.inOut`
- Bounce sutil: `back.out(1.2)` (usar com moderação)

### Movimento
- Nuvens: translateX lento, loop, opacity 0.3
- Elementos subindo: translateY negativo, ease power1.in
- Zoom sutil: scale 1→1.02 ao longo da cena
- Rotação suave: rotateY para flip de página (3D)

### Proibições
- Nada de neon, futurista ou infantil
- Nada de animações rápidas demais
- Nada de excesso de texto na tela
- Nada de estética fúrbida ou pesada
- Nada de template genérico de Canva

## Comandos do Projeto

```bash
# Inicializar projeto HyperFrames
npx hyperframes init hyperframes-composition

# Preview no browser (live reload)
npx hyperframes preview

# Render para MP4
npx hyperframes render

# Lint da composição
npx hyperframes lint

# Adicionar bloco do catálogo
npx hyperframes add flash-through-white
npx hyperframes add instagram-follow
npx hyperframes add data-chart
```

## Estrutura de Pastas

```
motion/
  PLAN.md              # Este plano
  SCRIPT.md            # Roteiro detalhado
  STORYBOARD.md        # Storyboard visual
  CLAUDE.md            # Este arquivo
  hyperframes-composition/
    index.html         # Composição principal
    assets/            # Imagens, vídeos, áudio
    src/
      scenes/          # Cenas individuais
      components/      # Componentes reutilizáveis
      animations/      # GSAP timelines
    package.json
    README.md
```

## Critérios de Verificação

Antes de considerar qualquer versão pronta:

1. [ ] `npx hyperframes render` executa sem erro
2. [ ] Duração entre 30 e 45 segundos
3. [ ] Formato 1080x1920 (9:16)
4. [ ] Texto legível em tela de celular (teste: visualize em 375px de largura)
5. [ ] Emoção vem antes da explicação
6. [ ] CTA aparece claramente nos últimos 6 segundos
7. [ ] Visual consistente com a landing Notícias do Céu
8. [ ] Não parece template genérico
9. [ ] Jornal é protagonista visual
10. [ ] Tema de perda tratado com delicadeza
11. [ ] Existe pausa emocional após frases-chave
12. [ ] GSAP timeline é deterministic (testar seek manual)

## Referências

- Landing page: https://luchesigui.github.io/noticias-do-ceu/
- HyperFrames docs: https://hyperframes.heygen.com/introduction
- HyperFrames GitHub: https://github.com/heygen-com/hyperframes
- GSAP docs: https://gsap.com/docs/v3/
- Catálogo de blocos: https://hyperframes.heygen.com/catalog
