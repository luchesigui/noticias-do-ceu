// ============================================================================
// ENGINE PROCEDURAL DO JORNAL — "Notícias do Céu"
// ----------------------------------------------------------------------------
// Gera, de forma DETERMINÍSTICA, a edição diária do jornal a partir dos dados
// reais do pet + do número do dia da jornada. Mesmo (pet, dia) => mesma edição
// (estável em reloads e compartilhável), graças ao RNG semeado por `pet.seed`.
//
// Princípios (pedidos do produto):
//  - Interpolar SOMENTE campos reais do pet (name, breed, gender, nicknames,
//    favoritePlace, favoriteObject, personalities, photos).
//  - Concordância de gênero (ele/ela, -o/-a) a partir de `pet.gender`.
//  - Frases GENÉRICAS: nunca casar um placeholder com um substantivo específico
//    (ex.: evitar "almofadas inspiradas no {lugar}"). Usar construções neutras
//    como "com o cheirinho de {lugar}" / "parecido com {objeto}" / "do seu jeito {traco}".
//  - História em FASES longas (cobre 365+ dias) com CRÔNICAS-filler espalhadas.
// ============================================================================

// ─── RNG determinístico (xmur3 -> mulberry32) ──────────────────────────────
function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeRng(seedStr) {
  const seedFn = xmur3(String(seedStr));
  const next = mulberry32(seedFn());
  return {
    next,
    pick(arr) {
      if (!arr || arr.length === 0) return undefined;
      return arr[Math.floor(next() * arr.length)];
    },
    chance(p) {
      return next() < p;
    },
  };
}

// ─── Gênero: resolve tokens de concordância a partir de pet.gender ──────────
function genderTokens(pet) {
  const fem = (pet.gender || '').toLowerCase().startsWith('f');
  return fem
    ? {
        art: 'a', ele: 'ela', dele: 'dela', querido: 'querida', pequeno: 'pequena',
        amigo: 'amiga', companheiro: 'companheira', travesso: 'travessa', abencoado: 'abençoada',
        sortudo: 'sortuda', heroi: 'heroína', lindo: 'linda', menino: 'menina', novo: 'nova',
        sozinho: 'sozinha', curioso: 'curiosa', valente: 'valente', estrela: 'a estrela',
      }
    : {
        art: 'o', ele: 'ele', dele: 'dele', querido: 'querido', pequeno: 'pequeno',
        amigo: 'amigo', companheiro: 'companheiro', travesso: 'travesso', abencoado: 'abençoado',
        sortudo: 'sortudo', heroi: 'herói', lindo: 'lindo', menino: 'menino', novo: 'novo',
        sozinho: 'sozinho', curioso: 'curioso', valente: 'valente', estrela: 'o astro',
      };
}

// ─── Contexto de interpolação (com fallbacks genéricos que cabem em tudo) ───
function buildContext(pet, rng) {
  const nicknames = Array.isArray(pet.nicknames) ? pet.nicknames.filter(Boolean) : [];
  const personalities = Array.isArray(pet.personalities) ? pet.personalities.filter(Boolean) : [];
  const lugar = (pet.favoritePlace || '').trim();
  const objeto = (pet.favoriteObject || '').trim();

  return {
    ...genderTokens(pet),
    nome: pet.name || 'nosso anjo',
    apelido: rng.pick(nicknames) || pet.name || 'nosso anjo',
    raca: pet.breed || 'pet',
    // Fallbacks pensados para encaixar nos padrões "de {lugar}", "com {objeto}",
    // "do seu jeito {traco}" sem soarem estranhos:
    lugar: lugar || 'casa',
    objeto: objeto || 'seu brinquedo de sempre',
    traco: rng.pick(personalities) || 'especial',
  };
}

// ─── Interpolação + capitular (drop cap) ────────────────────────────────────
function interpolate(template, ctx) {
  return template.replace(/\{([a-zA-Z]+)\}/g, (m, key) => {
    const v = ctx[key];
    return v !== undefined && v !== null ? v : m;
  });
}

// Capitaliza a 1ª letra de cada sentença (corrige artigos de gênero no início,
// ex.: "{art} {nome}" -> "O Flokinho" / "A Mel").
function capitalizeSentences(text) {
  if (!text) return text;
  let out = text.replace(/^(\s*["'“]?\s*)(\p{L})/u, (m, pre, ch) => pre + ch.toUpperCase());
  out = out.replace(/([.!?]\s+["'“]?)(\p{L})/gu, (m, sep, ch) => sep + ch.toUpperCase());
  return out;
}

// Interpola e já normaliza a capitalização das sentenças.
function proc(template, ctx) {
  return capitalizeSentences(interpolate(template, ctx));
}

// Capitaliza a 1ª letra do parágrafo e a envolve numa capitular (igual ao demo).
function withDropCap(text) {
  const t = text.replace(/^\s+/, '');
  if (!t) return '';
  const first = t.charAt(0).toUpperCase();
  const rest = t.slice(1);
  return `<span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">${first}</span>${rest}`;
}

// ============================================================================
// CONTEÚDO
// ============================================================================

// ─── Desenvolvimentos (2º parágrafo) — genéricos, servem a qualquer fase ────
const DEVELOPMENTS = [
  'Segundo correspondentes do paraíso, {art} {nome} segue mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. Cada latido é recebido com aplausos das nuvens.',
  'Os anjos de plantão contam que {ele} fez aquela carinha que ninguém resiste e ganhou afago em dobro. "É {pequeno} demais para tanto charme", riu um querubim.',
  'Por aqui, dizem que {ele} carrega o mesmo brilho de sempre, do seu jeito {traco}, espalhando aconchego por onde passa.',
  'A redação celeste registrou que {ele} encontrou um cantinho com o cheirinho de {lugar} e por ali ficou, de rabo abanando, sentindo-se em casa.',
  'Testemunhas relatam que {ele} apareceu com algo parecido com {objeto} na boca, convidando todo mundo para brincar. Ninguém disse não.',
  'Entre uma soneca e outra, {ele} mandou um recado: nenhuma dor chega mais até aqui, só o calorzinho bom de quem foi muito amado.',
  'Os guardiões das nuvens garantem que {ele} dormiu em paz, sonhando com as carícias de quem ficou na Terra. Lá, a saudade também é feita de amor.',
  '"{nome} ilumina este lugar", contou {art} guia local. Do seu jeito {traco}, {ele} virou figurinha carimbada nas melhores aventuras do dia.',
  'Correspondentes flagraram {ele} correndo sem cansaço pelos campos dourados, leve como nunca, livre de coleiras e de limites.',
  'No fim da tarde, {ele} se aninhou num lugar com o cheirinho de {lugar}, fechou os olhos e suspirou fundo. Felicidade, no céu, tem cheiro de lar.',
  'A notícia se espalhou pelas nuvens: {ele} continua {sortudo} de monte, cercado de amigos novos e de muito carinho.',
  'Um anjo de quatro patas confirmou: {ele} segue {valente} e {curioso}, sempre o primeiro a topar qualquer brincadeira.',
  'Dizem que {ele} guardou um pedacinho de brincadeira para quem ainda vai chegar. Aqui, ninguém fica {sozinho}.',
  'Entre nuvens macias, {ele} recebeu um carinho atrás da orelha e abanou o rabo com tanta força que fez o vento mudar de direção.',
  'A manchete correu solta: do seu jeito {traco}, {ele} transformou um dia comum num dia inesquecível — como sempre soube fazer.',
  'Os repórteres celestiais juram: o sorriso {dele} hoje estava do tamanho do céu. E olha que o céu é bem grande.',
];

// ─── Pull quotes (fecho destacado) ──────────────────────────────────────────
const PULL_QUOTES = [
  '"A saudade é grande, mas a alegria {dele} aqui é ainda maior."',
  '"Porque o amor verdadeiro não conhece despedidas."',
  '"Espere-me um dia... vamos correr juntos de novo."',
  '"Enquanto houver memória, haverá reencontro."',
  '"{nome} não partiu: apenas foi na frente preparar o melhor lugar."',
  '"O céu ficou mais quentinho no dia em que {ele} chegou."',
  '"Cada estrela é um latido de boa noite que {ele} manda para você."',
  '"Amar é eterno; a distância é só um detalhe."',
  '"Aqui em cima, {ele} guarda um cantinho com o seu nome."',
  '"O que se ama de verdade nunca vira passado."',
  '"{nome} corre livre, e parte desse vento chega até você."',
  '"A casa do céu tem sempre uma janelinha virada para você."',
  '"Foi {abencoado} quem teve {art} {nome} por perto — dos dois lados do céu."',
  '"Boas notícias do paraíso: por aqui, o amor não tem fim."',
  '"Um dia a gente se reencontra, e será como se nunca tivéssemos nos despedido."',
  '"{nome} mandou dizer: obrigado por cada carinho. Levei todos comigo."',
];

// ─── Fases do arco principal ────────────────────────────────────────────────
// Cada fase: headlines[], subheadlines[], leads[] (1º parágrafo), captions[].
const PHASES = {
  inauguracao: {
    icon: 'fa-dove',
    headlines: [
      'INAUGURADO O RECANTO CELESTIAL DOS CÃES',
      'ABRE HOJE O PARAÍSO EXCLUSIVO DOS CÃES',
      'GRANDE ABERTURA: UM CÉU SÓ PARA OS CÃES',
      'PORTÕES DOURADOS SE ABREM PARA OS CÃES',
    ],
    subheadlines: [
      'Um espaço feito de nuvens e amor recebe {art} {nome} de patas abertas.',
      'A fita celestial é cortada e {art} {nome} é {art} convidad{art} de honra.',
      'Hoje começa um lugar onde nenhum cão jamais se sente {sozinho}.',
    ],
    leads: [
      'Hoje, o tão esperado Recanto Celestial dos Cães abriu suas porteiras, e {art} {nome} foi recebid{art} com festa. Não há coleiras, não há grades — só campos dourados que se estendem até onde a saudade alcança.',
      'É dia de inauguração no céu! {art} {nome} cruzou o Portal de Algodão e descobriu um lugar inteirinho pensado para os cães, com o cheirinho bom de {lugar} pairando no ar.',
      'Com direito a fogos de luz e coro de querubins, abriu hoje o espaço exclusivo dos cães. {art} {nome} entrou {curioso}, do seu jeito {traco}, e logo se sentiu em casa.',
    ],
    captions: [
      '{nome} na grande inauguração do Recanto Celestial.',
      '{nome} cruzando os portões dourados, enfim.',
      'O primeiro dia de {nome} no paraíso dos cães.',
    ],
  },
  chegada: {
    icon: 'fa-cloud',
    headlines: [
      'PRIMEIROS PASSOS NO JARDIM ETERNO', 'A CHEGADA QUE VIROU FESTA',
      'BOAS-VINDAS NAS NUVENS MACIAS', 'O ACOLHIMENTO DOS ANJOS PETS',
      'O PRIMEIRO SONO SEM NENHUMA DOR',
    ],
    subheadlines: [
      'Tudo é novo, tudo é macio, e {art} {nome} explora cada cantinho.',
      'Os anjos disputam quem faz mais carinho em {art} {nome}.',
      '{art} {nome} descobre que aqui o descanso é leve e sem fim.',
    ],
    leads: [
      'Nos primeiros dias por aqui, {art} {nome} foi conhecendo o paraíso devagarinho. Encontrou um lugar com o cheirinho de {lugar} e decidiu que ali seria o seu posto de observação predileto.',
      'Recém-chegad{art}, {art} {nome} ganhou um comitê de boas-vindas só para {ele}. Entre lambidas e abanos de rabo, percebeu que ninguém ali sente medo, frio ou cansaço.',
      'A redação acompanhou {art} {nome} no seu primeiro descanso de verdade. {ele} deitou-se sobre uma nuvem, do seu jeito {traco}, e dormiu como há muito não dormia.',
    ],
    captions: [
      '{nome} conhecendo o novo lar nas alturas.',
      '{nome} recebendo o carinho dos anjos de plantão.',
      '{nome} no primeiro descanso tranquilo do paraíso.',
    ],
  },
  descobertas: {
    icon: 'fa-star',
    headlines: [
      'AS NUVENS QUE MUDAM DE FORMATO', 'A ÁGUA QUE REFRESCA E NÃO MOLHA',
      'O POMAR DOS PETISCOS INFINITOS', 'O MISTÉRIO DO BRINQUEDO QUE VOLTA SOZINHO',
      'O CHEIRO BOM QUE GUIA OS PASSOS',
    ],
    subheadlines: [
      '{art} {nome} faz uma descoberta nova a cada esquina do céu.',
      'Cada surpresa arranca um latido de pura alegria.',
      'O paraíso reserva maravilhas do tamanho da curiosidade {dele}.',
    ],
    leads: [
      'Hoje {art} {nome} descobriu que as nuvens se moldam ao gosto de quem pisa nelas. {ele} testou mil formatos até achar o mais confortável, com o aconchego de {lugar}.',
      'Farejando o ar, {art} {nome} seguiu um cheirinho irresistível e encontrou um pomar onde brotam petiscos fresquinhos. {curioso} como sempre, provou um de cada.',
      'No bosque celeste, {art} {nome} encontrou algo parecido com {objeto}. Ao soltá-lo, o brinquedo flutuou de volta sozinho — aqui, até os brinquedos adoram brincar.',
    ],
    captions: [
      '{nome} desvendando os segredos das nuvens.',
      '{nome} farejando as novidades do paraíso.',
      '{nome} brincando com uma de suas descobertas.',
    ],
  },
  amizades: {
    icon: 'fa-paw',
    headlines: [
      'NOVOS AMIGOS DE QUATRO PATAS', 'O CLUBE DOS CÃES DAS NUVENS',
      'UM PASSARINHO VIRA GUIA OFICIAL', 'A TURMA QUE RECEBE OS QUE CHEGAM',
      'AMIZADE À PRIMEIRA FAREJADA',
    ],
    subheadlines: [
      '{art} {nome} já tem uma turma inteira para chamar de {amigo}.',
      'No céu, ninguém brinca {sozinho} — e {art} {nome} sabe disso.',
      'As amizades aqui nascem rápido e duram para sempre.',
    ],
    leads: [
      'Do seu jeito {traco}, {art} {nome} fez amizade com meia dúzia de novos companheiros hoje. Juntos, formaram a turma mais animada dos campos dourados.',
      'Um passarinho de asas douradas pousou no focinho {dele} e se apresentou como guia. {art} {nome} ganhou {art} amig{art} para mostrar os melhores cantos do paraíso.',
      '{art} {nome} foi recebid{art} pelo comitê dos cães mais antigos, que ensinam aos recém-chegados onde ficam as melhores sombras e os carinhos garantidos.',
    ],
    captions: [
      '{nome} e a nova turma do paraíso.',
      '{nome} ao lado de seu guia de asas douradas.',
      '{nome} fazendo amizades que duram a eternidade.',
    ],
  },
  aventuras: {
    icon: 'fa-mountain-sun',
    headlines: [
      'EXPEDIÇÃO ÀS COLINAS DOURADAS', 'A GRANDE CORRIDA SOBRE AS NUVENS',
      'O VALE ESCONDIDO DOS CÃES VALENTES', 'TRAVESSIA DO ARCO-ÍRIS',
      'O DIA EM QUE O CÉU VIROU PARQUE',
    ],
    subheadlines: [
      '{art} {nome} encara a aventura do dia com fôlego de sobra.',
      'Nada de cansaço: aqui {art} {nome} corre o quanto quiser.',
      'O paraíso é grande, e {art} {nome} quer conhecer cada pedaço.',
    ],
    leads: [
      'Hoje {art} {nome} partiu numa expedição pelas colinas douradas. {valente} e {sortudo}, descobriu mirantes de onde dá para ver a Terra inteira — e quem {ele} ama.',
      'Houve uma grande corrida sobre as nuvens, e {art} {nome} cruzou a linha de chegada de rabo abanando. Fôlego infinito, patinhas leves, alegria sem fim.',
      '{art} {nome} atravessou a Ponte do Arco-Íris e voltou contando vantagem. Do seu jeito {traco}, transformou o passeio na aventura mais comentada do dia.',
    ],
    captions: [
      '{nome} explorando as colinas do paraíso.',
      '{nome} cruzando a linha de chegada, leve como o vento.',
      '{nome} de volta da aventura do dia.',
    ],
  },
  travessuras: {
    icon: 'fa-bone',
    headlines: [
      'A TRAVESSURA QUE VIROU LENDA', 'CAÇADA AO BRINQUEDO MISTERIOSO',
      'PIQUE-ESCONDE NA NÉVOA DOURADA', 'O ROUBO (INOCENTE) DE PETISCOS',
      'A BAGUNÇA MAIS FOFA DO PARAÍSO',
    ],
    subheadlines: [
      '{travesso} como sempre, {art} {nome} apronta das boas.',
      'Os anjos riem: ninguém fica bravo com tanta fofura.',
      'A maior arte do dia tem nome, sobrenome e quatro patas.',
    ],
    leads: [
      'Do seu jeito {traco}, {art} {nome} aprontou uma travessura que já virou história nas nuvens. Escondeu algo parecido com {objeto} e saiu correndo, convidando todos para a brincadeira.',
      '{art} {nome} liderou um pique-esconde na névoa dourada e apareceu de surpresa com um latido alegre, ganhando uma chuva de afagos como prêmio.',
      'Houve um "roubo" inocente de petiscos hoje, e o principal suspeito tem orelhas macias e olhar de quem não fez nada. {travesso}, {art} {nome} foi perdoad{art} na hora.',
    ],
    captions: [
      '{nome}, o artista das travessuras celestiais.',
      '{nome} aparecendo de surpresa na brincadeira.',
      '{nome} flagrad{art} em mais uma fofura.',
    ],
  },
  rotina: {
    icon: 'fa-sun',
    headlines: [
      'A ROTINA FELIZ DAS NUVENS', 'O POSTO DE SOL PREDILETO',
      'MESTRE DOS COCHILOS DOURADOS', 'O DIA PERFEITO, DE NOVO',
      'PEQUENAS ALEGRIAS, GRANDES FESTAS',
    ],
    subheadlines: [
      '{art} {nome} já conhece o céu como a palma da patinha.',
      'A felicidade aqui virou rotina — e que rotina boa.',
      'Cada dia comum, para {art} {nome}, é motivo de festa.',
    ],
    leads: [
      'A vida de {art} {nome} no paraíso entrou num ritmo gostoso. De manhã, um lugar com o cheirinho de {lugar}; à tarde, brincadeiras; à noite, o sono mais tranquilo do mundo.',
      'Já {art} veterano das nuvens, {art} {nome} tem seu posto de sol predileto, onde se estica do seu jeito {traco} e recebe visitas de todos os amigos.',
      'Hoje foi mais um daqueles dias perfeitos: comida boa, carinho de sobra e uma soneca que durou o quanto {ele} quis. No céu, o bom se repete sem cansar.',
    ],
    captions: [
      '{nome} no seu posto de sol favorito.',
      '{nome} curtindo a rotina feliz das nuvens.',
      '{nome} em mais um dia perfeito no paraíso.',
    ],
  },
  estacoes: {
    icon: 'fa-snowflake',
    headlines: [
      'AS ESTAÇÕES MÁGICAS DO CÉU', 'CHUVA DE PÉTALAS NO JARDIM ETERNO',
      'O INVERNO QUENTINHO DAS NUVENS', 'FESTIVAL DAS LUZES CELESTES',
      'A PRIMAVERA QUE NUNCA ACABA',
    ],
    subheadlines: [
      'O paraíso muda de cor, e {art} {nome} comemora cada estação.',
      'Cada estação traz uma alegria nova para {art} {nome}.',
      'No céu, até o clima é feito de carinho.',
    ],
    leads: [
      'O Recanto Celestial trocou de roupa hoje, e {art} {nome} foi o primeiro a aproveitar. Uma chuvinha suave de pétalas caiu, e {ele} correu no meio dela, {curioso} como sempre.',
      'Chegou o "inverno" das nuvens — aquele que aquece em vez de gelar. {art} {nome} se enroscou num cantinho com o aconchego de {lugar} e ronronou de felicidade.',
      'Houve festival de luzes no céu, e {art} {nome}, do seu jeito {traco}, ficou hipnotizad{art} pelas cores. Cada brilho, dizem, é um carinho enviado da Terra.',
    ],
    captions: [
      '{nome} aproveitando a nova estação do céu.',
      '{nome} no meio da chuva de pétalas.',
      '{nome} encantad{art} com as luzes celestes.',
    ],
  },
  vinculos: {
    icon: 'fa-heart',
    headlines: [
      'O FIO INVISÍVEL QUE LIGA OS CORAÇÕES', 'RECADOS QUE ATRAVESSAM O CÉU',
      'A JANELA VIRADA PARA A TERRA', 'QUANDO O AMOR MANDA NOTÍCIA',
      'O REENCONTRO QUE UM DIA VIRÁ',
    ],
    subheadlines: [
      '{art} {nome} encontrou um jeito de mandar carinho para você.',
      'A distância é só aparência: o vínculo segue inteiro.',
      'Há sempre uma janelinha do céu virada para quem {ele} ama.',
    ],
    leads: [
      'Os correspondentes descobriram o segredo de {art} {nome}: toda noite {ele} se senta numa janelinha do céu virada para a Terra e manda um latido de boa noite para quem ficou.',
      'Hoje {art} {nome} pediu para registrar um recado: o amor não se perdeu no caminho. {ele} guarda cada carinho recebido, do seu jeito {traco}, num cantinho do coração.',
      '{art} {nome} contou aos anjos sobre a sua gente querida. Falou tanto, e com tanto amor, que o céu inteiro agora também sente saudade junto com você.',
    ],
    captions: [
      '{nome} na janelinha virada para a Terra.',
      '{nome} mandando recado para quem ama.',
      '{nome} guardando cada carinho no coração.',
    ],
  },
  reflexoes: {
    icon: 'fa-dove',
    headlines: [
      'A SERENIDADE DOS CAMPOS DOURADOS', 'GRATIDÃO NA NUVEM MAIS ALTA',
      'O AMOR QUE PERMANECE', 'CARTA DO CÉU PARA O CORAÇÃO',
      'ENQUANTO HOUVER MEMÓRIA, HAVERÁ REENCONTRO',
    ],
    subheadlines: [
      '{art} {nome} vive em paz, e essa paz é também um presente para você.',
      'A saudade serena vira gratidão por tudo que foi vivido.',
      'No fim do dia, o que fica é o amor — e ele é eterno.',
    ],
    leads: [
      'Num fim de tarde sereno, {art} {nome} contemplou os campos dourados em silêncio. {abencoado} por ter sido tão amad{art}, mandou para a Terra uma onda quentinha de gratidão.',
      'Hoje {art} {nome} parou para agradecer: por cada passeio, cada colo, cada "bom dia". Do seu jeito {traco}, {ele} guarda essas lembranças como tesouros.',
      'A redação celeste fez uma pausa para lembrar: {art} {nome} não partiu de verdade. {ele} mora agora na memória, nas fotos e em cada batida do coração de quem {art} amou.',
    ],
    captions: [
      '{nome} em paz, nos campos dourados.',
      '{nome} mandando gratidão para a Terra.',
      '{nome} eterniz{art} no amor de quem ficou.',
    ],
  },
};

// ─── Crônicas-filler (episódios autocontidos espalhados pelo arco) ──────────
const CHRONICLES = [
  {
    icon: 'fa-cloud-sun-rain',
    headline: 'CRÔNICA: O DIA EM QUE CHOVEU PETISCO',
    subheadline: 'Uma nuvem distraída deixou cair uma chuva inesperada.',
    lead: 'Numa crônica à parte, contam que uma nuvem distraída deixou cair uma chuva de petiscos sobre os campos. {art} {nome}, {sortudo} de plantão, estava bem no lugar certo e aproveitou cada gotinha.',
    caption: '{nome} sob a famosa chuva de petiscos.',
  },
  {
    icon: 'fa-moon',
    headline: 'CRÔNICA: A NOITE DAS MIL ESTRELAS',
    subheadline: 'O céu se encheu de luzes só para os cães olharem.',
    lead: 'A crônica da noite ficou famosa: o céu se encheu de mil estrelas, e {art} {nome} ficou horas observando, do seu jeito {traco}. Cada estrela, juraram os anjos, era um carinho que chegava da Terra.',
    caption: '{nome} contemplando a noite estrelada.',
  },
  {
    icon: 'fa-music',
    headline: 'CRÔNICA: O CORAL DOS LATIDOS FELIZES',
    subheadline: 'Os cães do paraíso fizeram a serenata do ano.',
    lead: 'Numa pausa da história principal, os cães organizaram um coral de latidos felizes. {art} {nome} foi {art} solista — desafinad{art}, mas o mais aplaudid{art} de todos.',
    caption: '{nome} brilhando no coral do paraíso.',
  },
  {
    icon: 'fa-feather',
    headline: 'CRÔNICA: A PENA QUE VIROU BRINQUEDO',
    subheadline: 'Uma pena de anjo rendeu a brincadeira do dia.',
    lead: 'Conta a crônica que uma pena de anjo caiu flutuando e {art} {nome} passou a tarde toda atrás dela. Parecia algo tão divertido quanto {objeto}, e o resultado foi pura alegria.',
    caption: '{nome} perseguindo a pena travessa.',
  },
  {
    icon: 'fa-ice-cream',
    headline: 'CRÔNICA: O SORVETE QUE NÃO DERRETE',
    subheadline: 'A novidade gelada agitou os campos dourados.',
    lead: 'A crônica gelada do dia: surgiu nas nuvens um sorvete que nunca derrete. {curioso}, {art} {nome} foi {art} primeir{art} a experimentar e lambeu até o último floquinho.',
    caption: '{nome} saboreando o sorvete eterno.',
  },
  {
    icon: 'fa-kite',
    headline: 'CRÔNICA: A PIPA DAS NUVENS BAIXAS',
    subheadline: 'O vento bom rendeu a maior brincadeira da semana.',
    lead: 'Numa crônica leve, o vento bom trouxe uma pipa que dançava entre as nuvens. {art} {nome} correu atrás dela do seu jeito {traco}, com o entusiasmo de quem tem o dia inteiro pela frente.',
    caption: '{nome} brincando com a pipa do céu.',
  },
  {
    icon: 'fa-seedling',
    headline: 'CRÔNICA: O JARDIM QUE NASCEU DE UM CARINHO',
    subheadline: 'Onde um afago cai, brota uma flor no paraíso.',
    lead: 'Descobriu-se que, no Recanto Celestial, cada carinho que chega da Terra faz nascer uma flor. O jardim de {art} {nome} já é dos mais floridos — não é à toa que {ele} foi tão amad{art}.',
    caption: 'O jardim florido de {nome}.',
  },
  {
    icon: 'fa-puzzle-piece',
    headline: 'CRÔNICA: A CAÇA AO TESOURO ESCONDIDO',
    subheadline: 'Os cães vararam o dia atrás de uma surpresa.',
    lead: 'A crônica da semana foi uma caça ao tesouro pelas colinas. {art} {nome}, com faro {valente}, encontrou a surpresa final: um cantinho com o cheirinho de {lugar}, feito sob medida para {ele}.',
    caption: '{nome} comemorando o tesouro encontrado.',
  },
  {
    icon: 'fa-rainbow',
    headline: 'CRÔNICA: ESCORREGADOR DE ARCO-ÍRIS',
    subheadline: 'A atração mais disputada do paraíso abriu hoje.',
    lead: 'Inaugurou um escorregador feito de arco-íris, e a fila era enorme. {art} {nome} desceu tantas vezes que os anjos perderam a conta — e a cada descida, um latido de pura felicidade.',
    caption: '{nome} no escorregador de arco-íris.',
  },
  {
    icon: 'fa-mug-hot',
    headline: 'CRÔNICA: A TARDE PREGUIÇOSA PERFEITA',
    subheadline: 'Nem toda notícia precisa de aventura.',
    lead: 'A crônica de hoje é de pura preguiça boa: {art} {nome} achou um raio de sol, esticou-se do seu jeito {traco} e não fez absolutamente nada — a não ser ser feliz.',
    caption: '{nome} na tarde preguiçosa perfeita.',
  },
  {
    icon: 'fa-camera-retro',
    headline: 'CRÔNICA: O RETRATO QUE SORRIU SOZINHO',
    subheadline: 'Um instante eternizado nas nuvens.',
    lead: 'Os anjos tiraram um retrato de {art} {nome} hoje, e juram que a foto sorriu sozinha. Não é de espantar: felicidade desse tamanho não cabe num quadro só.',
    caption: 'O retrato sorridente de {nome}.',
  },
  {
    icon: 'fa-bell',
    headline: 'CRÔNICA: O SININHO DOS BONS SONHOS',
    subheadline: 'Toda noite, um sino chama os cães para sonhar.',
    lead: 'Conta a crônica que, ao anoitecer, um sininho convida os cães para os bons sonhos. {art} {nome} é sempre {art} primeir{art} a atender, e adormece sonhando com quem ama.',
    caption: '{nome} atendendo ao sino dos bons sonhos.',
  },
];

// ─── Sidebar: mensagens, poemas e reflexões ─────────────────────────────────
const SIDEBAR_MESSAGES = [
  '"Não chore por mim. Estou {abencoado}, livre e em paz. Espere-me um dia... vamos correr juntos de novo."',
  '"Aqui não há dor nem medo. Só o calorzinho bom de ter sido tão amad{art}. Obrigad{art} por tudo."',
  '"Guardei cada carinho que você me deu. São eles que iluminam o meu cantinho no céu."',
  '"Toda noite eu me sento numa janelinha e mando um latido de boa noite. Você sente? É amor."',
  '"Quando bater a saudade, lembre: eu corro feliz por aqui, e parte desse vento chega até você."',
];

const SIDEBAR_POEMS = [
  '<p class="text-sm italic font-body text-left md:text-justify">Nas nuvens macias eu vou descansar,<br/>do seu jeitinho aprendi a amar.<br/>Não diga adeus, diga "até já":<br/>no céu tem sempre lugar pra ficar.</p>',
  '<p class="text-sm italic font-body text-left md:text-justify">Corri pela vida ao seu lado fiel,<br/>agora corro nos campos do céu.<br/>O amor que plantamos não se desfez:<br/>virou estrela, virou aquarela.</p>',
  '<p class="text-sm italic font-body text-left md:text-justify">Se a saudade pesar no seu coração,<br/>olhe pro alto e sinta a canção:<br/>é o meu latido, é o meu abanar,<br/>dizendo baixinho que vou te esperar.</p>',
];

const SIDEBAR_REFLECTIONS = [
  '"O amor que dedicamos a um animal nunca se perde. Ele apenas muda de endereço — e passa a morar para sempre na memória."',
  '"Quem foi muito amado nunca vai embora de verdade. Fica nas fotos, nos cheiros, nos cantos preferidos da casa."',
  '"A despedida dói, mas é a prova de que valeu a pena. Só se sente tanta saudade de quem trouxe tanta alegria."',
];

// ============================================================================
// SELEÇÃO DE FASE E GERAÇÃO
// ============================================================================

// Mapeia o dia (1..365, com ciclo anual) para a fase do arco.
function phaseKeyForDay(dayNumber) {
  const d = ((dayNumber - 1) % 365) + 1; // ciclo anual gracioso para 365+
  if (d === 1) return 'inauguracao';
  if (d <= 25) return 'chegada';
  if (d <= 60) return 'descobertas';
  if (d <= 100) return 'amizades';
  if (d <= 150) return 'aventuras';
  if (d <= 200) return 'travessuras';
  if (d <= 250) return 'rotina';
  if (d <= 300) return 'estacoes';
  if (d <= 340) return 'vinculos';
  return 'reflexoes';
}

// Um dia é crônica-filler? (determinístico por pet+dia; nunca nos dias 1-2)
function isChronicleDay(pet, dayNumber) {
  if (dayNumber < 3) return false;
  const r = makeRng((pet.seed || pet.id || 'seed') + ':filler:' + dayNumber);
  return r.chance(0.22); // ~1 a cada 4-5 dias
}

// Sorteia uma foto do pet de forma determinística (ou null se não houver).
function pickPhoto(pet, rng) {
  const photos = Array.isArray(pet.photos) ? pet.photos.filter(Boolean) : [];
  if (photos.length === 0) return null;
  return rng.pick(photos);
}

/**
 * Gera a edição do dia para um pet.
 * @param {object} pet  Pet já parseado (arrays, não JSON strings).
 * @param {number} dayNumber  Dia da jornada (>= 1).
 * @returns {object} edição pronta para renderização.
 */
export function generateEdition(pet, dayNumber) {
  const day = Math.max(1, Number(dayNumber) || 1);
  const rng = makeRng((pet.seed || pet.id || pet.slug || 'seed') + ':' + day);
  const ctx = buildContext(pet, rng);

  const filler = isChronicleDay(pet, day);
  let headline, subheadline, lead, caption, icon;

  if (filler) {
    const c = rng.pick(CHRONICLES);
    icon = c.icon;
    headline = c.headline;
    subheadline = c.subheadline;
    lead = c.lead;
    caption = c.caption;
  } else {
    const phase = PHASES[phaseKeyForDay(day)];
    icon = phase.icon;
    headline = rng.pick(phase.headlines);
    subheadline = rng.pick(phase.subheadlines);
    lead = rng.pick(phase.leads);
    caption = rng.pick(phase.captions);
  }

  const development = rng.pick(DEVELOPMENTS);
  const pullQuote = rng.pick(PULL_QUOTES);

  const paragraphsHtml = [
    `<p class="mb-3">${withDropCap(proc(lead, ctx))}</p>`,
    `<p class="mb-3">${proc(development, ctx)}</p>`,
  ];

  // Sidebars (também determinísticas, mas em "trilha" própria para variar do corpo)
  const sideRng = makeRng((pet.seed || pet.id || 'seed') + ':side:' + day);
  const sidebarTop = {
    icon: 'fa-cloud',
    title: 'Mensagem do Céu',
    contentHtml: `<p class="text-sm italic font-body text-left md:text-justify">${proc(sideRng.pick(SIDEBAR_MESSAGES), ctx)}</p>`,
  };
  const sidebarBottom = sideRng.chance(0.5)
    ? { icon: 'fa-heart', title: 'Poema do Pet', contentHtml: sideRng.pick(SIDEBAR_POEMS) }
    : { icon: 'fa-dove', title: 'Reflexão', contentHtml: `<p class="text-sm italic font-body text-left md:text-justify">${proc(sideRng.pick(SIDEBAR_REFLECTIONS), ctx)}</p>` };

  return {
    day,
    isChronicle: filler,
    icon,
    headline: interpolate(headline, ctx),
    subheadline: proc(subheadline, ctx),
    paragraphsHtml,
    pullQuote: proc(pullQuote, ctx),
    image: pickPhoto(pet, rng),
    imageAlt: `Foto de ${ctx.nome} no paraíso`,
    caption: proc(caption, ctx),
    sidebarTop,
    sidebarBottom,
  };
}
