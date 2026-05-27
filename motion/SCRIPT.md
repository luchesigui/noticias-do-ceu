# SCRIPT.md — Roteiro Detalhado do Vídeo

## Informações Gerais

- Duração total: ~35 segundos
- Formato: 1080x1920 (9:16)
- Estilo: Emocional, poético, delicado
- Narração: Opcional (legenda sempre presente)

---

## Cena 1 — HOOK (0s a 4s)

**Texto na tela:**
> "E se a saudade virasse notícia no céu?"

**Timing:**
- 0.0s–1.0s: Fade in do fundo creme, nuvens sutis flutuando
- 1.0s–3.0s: Texto aparece letra por letra (typewriter), centralizado
- 3.0s–4.0s: Pequena patinha aparece no canto inferior, fade in suave

**Animação:**
- Nuvens: translateX lento, loop infinito, opacity 0.3
- Texto: typewriter com GSAP, easing: power1.inOut
- Patinha: scale de 0→1 + fadeIn, delay de 3s

**Emoção:** Curiosidade, leve toque de esperança

---

## Cena 2 — DOR + PROMESSA (4s a 9s)

**Texto na tela:**
> "Seu pet partiu,
> mas a história dele continua."

**Timing:**
- 4.0s–5.0s: Transição suave (fade cruzado) da cena anterior
- 5.0s–6.5s: Foto do pet surge em moldura de jornal, com luz dourada
- 6.5s–8.0s: Texto aparece (fadeIn up), linha por linha
- 8.0s–9.0s: Luz dourada percorre a borda da foto (swipe animation)

**Animação:**
- Foto: translateY(20px)→0 + fadeIn, ease: power2.out
- Moldura: drawSVG da borda do jornal
- Texto: stagger de 0.5s entre linhas
- Luz: gradient animado na borda, loop de 1s

**Emoção:** Acolhimento, carinho, validação da dor

---

## Cena 3 — PRODUTO (9s a 17s)

**Texto na tela:**
> "Uma página exclusiva
> em formato de jornal celestial."

**Timing:**
- 9.0s–10.5s: Jornal da landing surge completo (scale + fadeIn)
- 10.5s–12.0s: Manchete "NOTÍCIAS DO CÉU" destaque com underline dourado
- 12.0s–14.0s: Texto explicativo aparece abaixo
- 14.0s–17.0s: Cards do jornal (Obituário, Horóscopo Pet, Chegada ao Portal Dourado) surgem com stagger

**Animação:**
- Jornal: scale(0.8→1) + rotateX(-5→0), ease: back.out(1.2)
- Manchete: GSAP drawSVG no underline
- Cards: stagger 0.3s, translateX(opacity→visible)
- Zoom sutil no jornal inteiro (scale 1→1.02) ao longo da cena

**Emoção:** Encantamento, mostrar o produto real

---

## Cena 4 — DIFERENCIAL (17s a 25s)

**Texto na tela:**
> "Todos os dias,
> uma nova notícia,
> uma aventura, uma lembrança."

**Timing:**
- 17.0s–19.0s: Jornal gira suavemente (rotateY), revela nova página "Dia 2"
- 19.0s–21.0s: Transição para "Dia 3", manchetes diferentes aparecem
- 21.0s–23.0s: Texto aparece em overlay sobre o jornal
- 23.0s–25.0s: Estrelas e nuvens aparecem ao redor do jornal flutuando

**Animação:**
- Página virando: rotateY 0→90→0 (3D transform), ease: power2.inOut
- Manchetes: typewriter rápido (0.05s por caractere)
- Texto overlay: fadeIn up, stagger 0.4s entre linhas
- Estrelas: scatter animation, opacity 0→1→0, loop

**Emoção:** Magia, continuidade, infinito

---

## Cena 5 — CARTAS PARA O CÉU (25s a 31s)

**Texto na tela:**
> "E você ainda pode
> escrever cartas para ele."

**Timing:**
- 25.0s–27.0s: Zoom no jornal diminui, carta/envelope surge do centro
- 27.0s–28.5s: Texto aparece (fadeIn)
- 28.5s–30.0s: Envelope sobe suavemente em direção ao topo da tela
- 30.0s–31.0s: Selo "Céu Postal" gira e carimba na envelope

**Animação:**
- Carta: scale(0→1) com bounce leve (elastic.out)
- Texto: fadeIn up, delay 0.5s
- Envelope subindo: translateY(0→-200px), ease: power1.in
- Selo: rotate(-15→0) + scale(1.2→1), bounce, ease: back.out

**Emoção:** Conexão, ritual de afeto, infinito

---

## Cena 6 — CTA (31s a 37s)

**Texto na tela:**
> "Eternize o amor do seu pet."

**Subtexto/CTA:**
> "Crie uma homenagem em"
> "noticias-do-ceu.com"

**Timing:**
- 31.0s–32.5s: Todas as cenas anteriores fazem fade out
- 32.5s–34.0s: Logo do "NOTÍCIAS DO CÉU" aparece com patinha dourada
- 34.0s–35.5s: Frase CTA aparece (fadeIn up)
- 35.5s–37.0s: URL e botão animado final

**Animação:**
- Logo: drawSVG do texto + patinha dourada (scale + rotate)
- CTA: fadeIn up, texto centralizado
- Botão: pulse sutil (scale 1→1.05→1), loop 3x
- Partículas douradas sutis ao redor do logo

**Emoção:** Esperança, chamada para ação, fechamento emocional

---

## Som / Trilha (referência)

- Piano leve em escala maior (Dó ou Sol)
- Som de papel sendo aberto (cenas 2, 3)
- Carimbo suave (cena 5)
- Brilho/ding delicado (destaques)
- Sem bateria agressiva
- Volume: -12dB a -6dB, mixado sob narração se houver

## Notas de Produção

- Todos os textos devem ter contraste mínimo 4.5:1 com o fundo
- Fonte principal: serifada (Peco-style)
- Fonte secundária: sem-serifa para UI elements
- Animações respeitam prefers-reduced-motion
- GSAP timeline deve ser deterministic (data-start e data-duration em tudo)
