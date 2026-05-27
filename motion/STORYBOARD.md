# STORYBOARD.md — Motion Graphics Notícias do Céu

Layout: 1080x1920 (9:16 vertical).

---

## Cena 1 (0s–4s): HOOK

```
┌──────────────────────────────┐
│                              │
│   ☁️ ─────────────── ☁️       │  nuvens bg
│                              │
│                              │
│    "E se a saudade           │
│     virasse notícia          │  texto central
│     no céu?"                 │
│                              │
│                              │
│                         🐾   │  patinha canto inf.
└──────────────────────────────┘
```

---
## Cena 2 (4s–9s): DOR + PROMESSA

```
┌──────────────────────────────┐
│                              │
│   ┌──────────────────────┐   │
│   │                      │   │
│   │    📸 Foto do pet    │   │  moldura jornal
│   │                      │   │
│   │   ✦ luz dourada ✦    │   │
│   └──────────────────────┘   │
│                              │
│   "Seu pet partiu,           │
│    mas a história            │  texto inferior
│    dele continua."           │
│                              │
└──────────────────────────────┘
```

---
## Cena 3 (9s–17s): PRODUTO

```
┌──────────────────────────────┐
│   NOTÍCIAS DO CÉU            │  manchete jornal
│   ══════════════════════     │
│   ┌─────────┬──────────┐    │
│   │ OBITUÁRIO │ HORÓSCOPO│   │  cards lado a lado
│   │           │ PET      │   │
│   └─────────┴──────────┘    │
│   ┌────────────────────┐    │
│   │ Chegada ao Portal  │    │  card destaque
│   │      Dourado       │    │
│   └────────────────────┘    │
│                              │
│   "Uma página exclusiva      │
│    em formato de jornal      │  texto inferior
│    celestial."               │
└──────────────────────────────┘
```

---
## Cena 4 (17s–25s): DIFERENCIAL

```
┌──────────────────────────────┐
│   ✦  ·  ✦  ·  ✦  ·  ✦  ·  ✦ │  estrelas scatter
│       ┌──────────────┐       │
│       │  DIA 2       │       │
│       │ "Flokinho    │       │  jornal virando
│       │  brinca co.. │       │
│       └──────────────┘       │
│              ↓ gira           │
│       ┌──────────────┐       │
│       │  DIA 3       │       │
│       │ "Novo amigo  │       │
│       │  celestial.."│       │
│       └──────────────┘       │
│                              │
│   "Todos os dias,            │
│    uma nova notícia,         │  texto overlay
│    uma aventura..."          │
└──────────────────────────────┘
```

---
## Cena 5 (25s–31s): CARTAS

```
┌──────────────────────────────┐
│                     ☁️       │
│                  ✉️ ↑        │  envelope subindo
│               ☁️    ↑        │
│            ☁️       ↑       │
│         ☁️      ┌────┐      │
│   ☁️            │CÉU│      │  selo "Céu Postal"
│                │POST│      │
│                └────┘      │
│                              │
│   "E você ainda pode         │
│    escrever cartas           │  texto inferior
│    para ele."               │
└──────────────────────────────┘
```

---
## Cena 6 (31s–37s): CTA

```
┌──────────────────────────────┐
│                              │
│         ☁️ ─── ☁️             │
│                              │
│      NOTÍCIAS DO CÉU         │  logo central
│          🐾                   │  patinha dourada
│                              │
│   "Eternize o amor           │
│    do seu pet."              │
│                              │
│   ┌─────────────────────┐   │
│   │ CRIE UMA HOMENAGEM  │   │  botão CTA
│   └─────────────────────┘   │
│    noticias-do-ceu.com       │
│                              │
└──────────────────────────────┘
```

---

## Layer Composition por Cena

### Cena 1
| Layer | Elemento | Z-Index |
|-------|----------|---------|
| 0 | Background creme | 0 |
| 1 | Nuvens decorativas | 1 |
| 2 | Texto principal (hook) | 2 |
| 3 | Patinha canto inferior | 3 |

### Cena 2
| Layer | Elemento | Z-Index |
|-------|----------|---------|
| 0 | Background creme | 0 |
| 1 | Moldura do jornal | 1 |
| 2 | Foto do pet | 2 |
| 3 | Luz dourada (gradient animado) | 3 |
| 4 | Texto inferior | 4 |

### Cena 3
| Layer | Elemento | Z-Index |
|-------|----------|---------|
| 0 | Background bege | 0 |
| 1 | Recipiente do jornal (card) | 1 |
| 2 | Manchete principal | 2 |
| 3 | Cards internos (stagger) | 3 |
| 4 | Texto explicativo inferior | 4 |

### Cena 4
| Layer | Elemento | Z-Index |
|-------|----------|---------|
| 0 | Background creme | 0 |
| 1 | Estrelas (scatter) | 1 |
| 2 | Jornal (flip 3D) | 2 |
| 3 | Manchetes animadas | 3 |
| 4 | Overlay texto | 4 |

### Cena 5
| Layer | Elemento | Z-Index |
|-------|----------|---------|
| 0 | Background com nuvens | 0 |
| 1 | Envelope subindo | 1 |
| 2 | Selo "Céu Postal" | 2 |
| 3 | Texto inferior | 3 |

### Cena 6
| Layer | Elemento | Z-Index |
|-------|----------|---------|
| 0 | Background creme | 0 |
| 1 | Nuvens bg | 1 |
| 2 | Logo (drawSVG) | 2 |
| 3 | CTA text | 3 |
| 4 | Botão CTA | 4 |
| 5 | URL | 5 |

---

## GSAP Timeline Map

```
0s    4s    9s    17s   25s   31s   37s
│     │     │     │     │     │     │
├─C1──┤     │     │     │     │     │
│     ├──C2─┤     │     │     │     │
│     │     ├────C3────┤     │     │
│     │     │     ├────C4────┤     │
│     │     │     │     ├──C5─┤     │
│     │     │     │     │     ├─C6──┤
```
