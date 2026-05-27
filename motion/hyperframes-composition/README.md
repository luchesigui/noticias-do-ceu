# Notícias do Céu — Motion Graphics (HyperFrames)

Projeto de vídeo de motion graphics para o Notícias do Céu, usando HyperFrames como engine de renderização.

## Stack

- **HyperFrames** — HTML-to-video rendering
- **GSAP** — Animações seekable e frame-accurate
- **Tailwind v4** — Runtime CSS
- **ffmpeg** — Encode de vídeo

## Pré-requisitos

```bash
# Node.js >= 22
node --version

# ffmpeg
ffmpeg -version

# HyperFrames CLI
npm install -g hyperframes
```

## Instalação

```bash
# A partir da pasta motion/
cd motion

# Inicializar projeto HyperFrames
npx hyperframes init hyperframes-composition
cd hyperframes-composition

# Instalar dependências
npm install
```

## Comandos

```bash
# Preview no browser (live reload)
npx hyperframes preview

# Render para MP4
npx hyperframes render

# Render com qualidade específica
npx hyperframes render --quality high

# Lint da composição
npx hyperframes lint

# Adicionar bloco do catálogo
npx hyperframes add <nome-do-bloco>
```

## Estrutura

```
hyperframes-composition/
  index.html              # Composição principal (entry point)
  package.json
  assets/                 # Imagens, vídeos, áudio
    logo.svg
    newspaper-mockup.png
    pet-photo.jpg
    cloud.svg
    paw.svg
    envelope.svg
    seal-ceu-postal.svg
    paper-texture.png
  src/
    scenes/
      scene-01-hook.html
      scene-02-promise.html
      scene-03-product.html
      scene-04-differential.html
      scene-05-letters.html
      scene-06-cta.html
    components/
      newspaper.html
      cloud-layer.html
      letter-to-heaven.html
      cta-button.html
    animations/
      timeline.js       # GSAP master timeline
      scene-01.js
      scene-02.js
      scene-03.js
      scene-04.js
      scene-05.js
      scene-06.js
```

## Especificações do Vídeo

| Propriedade | Valor |
|-------------|-------|
| Formato | 9:16 (vertical) |
| Resolução | 1080x1920 |
| FPS | 30 |
| Duração | ~35 segundos |
| Safe area topo | 250px |
| Safe area base | 250px |

## Assets Necessários

Antes do render final, substitua os placeholders pelos assets reais:

| Asset | Arquivo | Status |
|-------|---------|--------|
| Logo Notícias do Céu | `assets/logo.svg` | ⬜ Placeholder |
| Mockup do jornal | `assets/newspaper-mockup.png` | ⬜ Placeholder |
| Foto de pet exemplo | `assets/pet-photo.jpg` | ⬜ Placeholder |
| Ícone nuvem | `assets/cloud.svg` | ⬜ Placeholder |
| Ícone patinha | `assets/paw.svg` | ⬜ Placeholder |
| Envelope/carta | `assets/envelope.svg` | ⬜ Placeholder |
| Selo "Céu Postal" | `assets/seal-ceu-postal.svg` | ⬜ Placeholder |
| Textura de papel | `assets/paper-texture.png` | ⬜ Placeholder |
| Trilha sonora | `assets/music.mp3` | ⬜ Opcional |

## Cenas

| Cena | Nome | Duração | Descrição |
|------|------|---------|-----------|
| 1 | Hook | 0s–4s | "E se a saudade virasse notícia no céu?" |
| 2 | Promise | 4s–9s | Foto do pet + "A história dele continua" |
| 3 | Product | 9s–17s | Mockup do jornal celestial |
| 4 | Differential | 17s–25s | Páginas virando, notícias diárias |
| 5 | Letters | 25s–31s | Cartas para o Céu, envelope subindo |
| 6 | CTA | 31s–37s | Logo + "Eternize o amor do seu pet" |

## Paleta de Cores

```css
--cream: #F7F1E8;        /* Background papel */
--brown-dark: #3A2416;   /* Títulos, textos principais */
--caramel: #B9854D;      /* Botões, destaques */
--gold-soft: #D6A75E;    /* Brilhos, selos, linhas */
--off-white: #FFFDF8;    /* Background base */
--gray-text: #6E6258;    /* Textos secundários */
```

## Regras GSAP (Obrigatório)

```javascript
// SEMPRE registre no timeline global
window.__hfTimeline = window.__hfTimeline || gsap.timeline({paused: true});

// Animações no timeline
window.__hfTimeline.from("#elemento", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power2.out"
}, 0); // offset em segundos

// NÃO use gsap.to() solto
// NÃO use setInterval/setTimeout para animações
// NÃO use requestAnimationFrame manual
```

## Critérios de Qualidade

- [ ] Renderiza sem erro
- [ ] Duração: 30-45 segundos
- [ ] Formato 1080x1920
- [ ] Texto legível em celular
- [ ] Emoção antes da explicação
- [ ] CTA claro nos últimos 6s
- [ ] Visual consistente com a landing
- [ ] Não parece template genérico
- [ ] Jornal é protagonista
- [ ] GSAP timeline é deterministic

## Referências

- Landing page: https://luchesigui.github.io/noticias-do-ceu/
- HyperFrames docs: https://hyperframes.heygen.com/introduction
- HyperFrames GitHub: https://github.com/heygen-com/hyperframes
- GSAP docs: https://gsap.com/docs/v3/
- Catálogo de blocos: https://hyperframes.heygen.com/catalog
- Remotion → HyperFrames migration: https://hyperframes.heygen.com/guides/remotion-to-hyperframes
