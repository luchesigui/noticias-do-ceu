# PLAN.md — Vídeo Motion Graphics Notícias do Céu (HyperFrames)

## Objetivo

Criar um vídeo de motion graphics_vertical 9:16 para Reels/TikTok/Shorts (30-45s), apresentando o Notícias do Céu como uma homenagem viva e emocional para pets que partiram.

## Stack

- **HyperFrames** (HTML-to-video, agent-native)
- **GSAP** (animações seekable)
- **Tailwind v4** (runtime CSS)
- **Claude Code + skill hyperframes** (agent-driven authoring)
- **ffmpeg** (encode final)

## Público

Tutores de pets que perderam um animal recentemente, ou pessoas que querem presentear alguém em luto.

## Mensagem Central

> "O amor não morre, ele vira notícia no céu."

## Tom

Emocional, acolhedor, poético, delicado, esperancoso. Não mórbido.

## Narrativa (35 segundos)

### Cena 1 — Hook (0s a 4s)
- Frase: "E se a saudade virasse notícia no céu?"
- Visual: fundo creme, nuvens lentas, manchete de jornal sendo impressa letra por letra.

### Cena 2 — Dor + Promessa (4s a 9s)
- Frase: "Seu pet partiu, mas a história dele continua."
- Visual: foto de pet em moldura de jornal, luz dourada suave, papel se abrindo.

### Cena 3 — Produto (9s a 17s)
- Frase: "Uma página exclusiva em formato de jornal celestial."
- Visual: mockup jornal "NOTÍCIAS DO CÉU", manchete "Flokinho faz novos amigos nas nuvens", cards surgindo.

### Cena 4 — Diferencial (17s a 25s)
- Frase: "Todos os dias, uma nova notícia, uma aventura, uma lembrança."
- Visual: páginas virando (Dia 1, 2, 3), nuvens, estrelas, trechos de manchetes.

### Cena 5 — Cartas para o Céu (25s a 31s)
- Frase: "E você ainda pode escrever cartas para ele."
- Visual: carta sendo escrita, envelope subindo pelas nuvens, resposta com selo "Céu Postal".

### Cena 6 — CTA (31s a 37s)
- Frase: "Eternize o amor do seu pet."
- CTA: "Crie uma homenagem em Notícias do Céu"
- Visual: logo, URL, jornal fechado com patinha dourada.

## Assets Necessários

- Logo Notícias do Céu (SVG ou PNG)
- Mockup do jornal (screenshot da landing)
- Foto exemplo de pet (da landing ou placeholder)
- Ícone de nuvem (SVG)
- Ícone de patinha (SVG)
- Textura leve de papel (PNG/CSS)
- Envelope/carta (SVG)
- Selo "Céu Postal" (SVG)
- Print da hero da landing

## Especificações Técnicas

- Formato: 1080x1920 (9:16)
- FPS: 30
- Duração: ~35s
- Safe area para Reels: topo 250px, base 250px
- Sem áudio na renderização base (adicionar depois)

## Paleta de Cores

| Papel | Código | Uso |
|-------|--------|-----|
| Creme | `#F7F1E8` | Background papel |
| Marrom escuro | `#3A2416` | Títulos, textos principais |
| Caramelo | `#B9854D` | Botões, destaques |
| Dourado suave | `#D6A75E` | Brilhos, selos, linhas |
| Off-white | `#FFFDF8` | Background base |
| Cinza texto | `#6E6258` | Textos secundários |

## Critérios de Qualidade

- [ ] Renderiza sem erro no HyperFrames
- [ ] Duração entre 30 e 45 segundos
- [ ] Formato 9:16 legível em celular
- [ ] Texto legível (mínimo 24px equivalente)
- [ ] Emoção vem antes da explicação
- [ ] CTA aparece claramente nos últimos 6s
- [ ] Visual consistente com a landing Notícias do Céu
- [ ] Não parece template genérico
- [ ] Jornal é protagonista visual
- [ ] Tema de perda tratado com delicadeza
- [ ] Existe pausa emocional após frases-chave

## Próximos Passos

1. Criar CLAUDE.md com skill do HyperFrames
2. Criar script.md detalhado
3. Criar storyboard.md
4. Inicializar projeto HyperFrames
5. Implementar cena por cena
6. Render de preview em baixa qualidade (480p)
7. Ajustar timing e transições
8. Render final em 720p
9. Validar contra critérios
