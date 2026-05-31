// src/data/procedural-stories.js

// Dynamic foods list selected based on day
const celestialFoods = [
  "bifinhos de nuvem sabor carne",
  "biscoitinhos dourados e crocantes",
  "petiscos especiais de frango celestial",
  "sachês com molho de estrelas",
  "pãezinhos de queijo celestes bem quentinhos"
];

function convertAdjective(adj, toGender) {
  if (!adj) return "";
  const lowerAdj = adj.trim().toLowerCase();
  
  const mapToFem = {
    "carinhoso": "carinhosa",
    "brincalhão": "brincalhona",
    "dorminhoco": "dorminhoca",
    "protetor": "protetora",
    "guloso": "gulosa",
    "preguiçoso": "preguiçosa",
    "carismático": "carismática",
    "teimoso": "teimosa",
    "espevitado": "espevitada"
  };

  const mapToMasc = {
    "carinhosa": "carinhoso",
    "brincalhona": "brincalhão",
    "dorminhoca": "dorminhoco",
    "protetora": "protetor",
    "gulosa": "guloso",
    "preguiçosa": "preguiçoso",
    "carismática": "carismático",
    "teimosa": "teimoso",
    "espevitada": "espevitado"
  };
  
  if (toGender === 'Fêmea') {
    if (mapToFem[lowerAdj]) {
      const target = mapToFem[lowerAdj];
      if (adj[0] === adj[0].toUpperCase()) {
        return target.charAt(0).toUpperCase() + target.slice(1);
      }
      return target;
    }
    if (adj.endsWith('o')) {
      return adj.slice(0, -1) + 'a';
    }
    if (adj.endsWith('ão')) {
      return adj.slice(0, -2) + 'ona';
    }
  } else {
    if (mapToMasc[lowerAdj]) {
      const target = mapToMasc[lowerAdj];
      if (adj[0] === adj[0].toUpperCase()) {
        return target.charAt(0).toUpperCase() + target.slice(1);
      }
      return target;
    }
    if (adj.endsWith('a')) {
      return adj.slice(0, -1) + 'o';
    }
    if (adj.endsWith('ona')) {
      return adj.slice(0, -3) + 'ão';
    }
  }
  return adj;
}

function convertAdjectivephrase(phrase, toGender) {
  if (!phrase) return "";
  return phrase.split(/\s+/).map(word => {
    if (word.toLowerCase() === "e" || word.toLowerCase() === "ou" || word.toLowerCase() === "mas") {
      return word;
    }
    return convertAdjective(word, toGender);
  }).join(" ");
}

// Helper to get variables mapping for the templates
export function getPetVars(pet, journeyDay) {
  const gender = pet.gender || "Macho";
  const isFemale = gender === "Fêmea";
  
  const nome = pet.name;
  
  // Pick nickname deterministically
  let apelido = nome;
  if (pet.nicknames && pet.nicknames.length > 0) {
    apelido = pet.nicknames[journeyDay % pet.nicknames.length];
  }
  
  // Pick personality deterministically
  let personalidadeBase = isFemale ? "brincalhona e dócil" : "brincalhão e dócil";
  if (pet.personalities && pet.personalities.length > 0) {
    personalidadeBase = pet.personalities[(journeyDay + 2) % pet.personalities.length];
  }

  const personalidade = convertAdjectivephrase(personalidadeBase, isFemale ? "Fêmea" : "Macho").toLowerCase();
  const personalidadeMasc = convertAdjectivephrase(personalidadeBase, "Macho").toLowerCase();
  const personalidadeFem = convertAdjectivephrase(personalidadeBase, "Fêmea").toLowerCase();

  // Fallbacks for place and object
  const lugar = pet.favoritePlace ? pet.favoritePlace.trim() : (isFemale ? "sua nuvenzinha macia" : "seu cantinho quentinho");
  const brinquedo = pet.favoriteObject ? pet.favoriteObject.trim() : (isFemale ? "sua bolinha invisível" : "seu brinquedo de vento");
  
  const raca = pet.breed || "Cãozinho";
  const comida = celestialFoods[journeyDay % celestialFoods.length];

  return {
    nome,
    apelido,
    raca,
    genero: gender,
    personalidade,
    personalidadeMasc,
    personalidadeFem,
    lugar,
    brinquedo,
    comida,
    artigo: isFemale ? "a" : "o",
    artigoCapital: isFemale ? "A" : "O",
    pronome: isFemale ? "ela" : "ele",
    pronomeCapital: isFemale ? "Ela" : "Ele",
    artigoObjeto: isFemale ? "uma" : "um",
    artigoObjetoCapital: isFemale ? "Uma" : "Um"
  };
}

// Substitui os placeholders {variavel} no template de string
export function interpolate(template, vars) {
  // Tratamento especial para iniciais capitulares (drop caps) que envolvem chaves
  let rendered = template.replace(/<span([^>]*)\s*>\s*\{\s*<\/span\s*>\s*([a-zA-Z0-9_]+)\s*\}/g, (match, attrs, key) => {
    const val = vars[key.trim()];
    if (val !== undefined && val.length > 0) {
      const firstChar = val.charAt(0).toUpperCase();
      const rest = val.slice(1);
      return `<span${attrs}>${firstChar}</span>${rest}`;
    }
    return match;
  });

  return rendered.replace(/\{([^}]+)\}/g, (match, key) => {
    return vars[key.trim()] !== undefined ? vars[key.trim()] : match;
  });
}

// 23 Canon Milestones of the celestial dog space
export const canonStories = {
  1: {
    isCanon: true,
    headline: "O GRANDE PORTAL SE ABRE: INAUGURADO O NOVO ESPAÇO DOS PETS NO CÉU",
    subheadline: "Um reino mágico projetado para a alegria infinita dos cães começa a funcionar hoje.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">{artigoCapital}</span> valente {nome} fez sua estreia oficial hoje no novíssimo Espaço Celestial dos Cães. O grande portal dourado abriu suas portas logo ao amanhecer, recebendo centenas de patinhas felizes em uma festa com grama fofa e vento morno.</p>
    <p class="mb-3">Sem coleiras, cercas ou limites, os cães correram livres para explorar os campos infinitos. {nome} foi visto(a) logo na frente, liderando a exploração e mostrando que seu espírito {personalidadeMasc} continua contagiando a todos. Os anjos anunciaram que este espaço foi criado com muito amor para celebrar a presença alegre de cada companheiro terrestre.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A inauguração de um lar de paz, onde o amor verdadeiro nunca termina."</p>`,
    caption: "{nome} entrando com passos leves no portal do novo parque."
  },
  2: {
    isCanon: true,
    headline: "DORMITÓRIOS DE ALGODÃO SÃO INAUGURADOS NO ESPAÇO CELESTE",
    subheadline: "Os novos espaços de repouso recriam o conforto dos cantinhos prediletos dos cães.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> descanso dos cãezinhos ganhou um toque mágico hoje com a abertura oficial dos Dormitórios de Algodão. O destaque do dia foi {nome}, que encontrou um cantinho acolhedante especialmente preparado que recria com perfeição a paz de seu lugar favorito na Terra: {lugar}.</p>
    <p class="mb-3">De acordo com relatos do Querubim do Sono, {nome} deu três voltinhas, suspirou aliviado(a) e deitou-se para tirar uma soneca tranquila. {pronomeCapital} provou ser especialista em encontrar o melhor ponto para relaxar, servindo de exemplo de conforto para todos os novos moradores do setor de repouso.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"O sono é leve e calmo quando se está cercado por memórias de carinho."</p>`,
    caption: "{nome} aproveitando seu novo cantinho de repouso."
  },
  3: {
    isCanon: true,
    headline: "O REFEITÓRIO CELESTIAL ABRE COM BANQUETE EM HONRA A {apelido}",
    subheadline: "Quitutes frescos e petiscos deliciosos são servidos sem restrições a todos os pets.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">{artigoCapital}</span> novo refeitório das patinhas foi inaugurado hoje com um banquete espetacular. {nome} foi o(a) convidado(a) de honra e pôde se deliciar com pratos celestes deliciosos, incluindo {comida}.</p>
    <p class="mb-3">Mostrando todo o seu lado {personalidadeMasc}, {nome} conquistou os cozinheiros com aquela carinha fofa de quem quer mais, garantindo porções extras sob aplausos dos outros pets da mesa. Os querubins chefs garantiram que o refeitório funcionará todos os dias, servindo receitas que aquecem a alma.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"No banquete celeste, a barriguinha está sempre cheia e o coração feliz."</p>`,
    caption: "{nome} deliciando-se no grande banquete de boas-vindas."
  },
  4: {
    isCanon: true,
    headline: "ABERTO O BOSQUE DOS BRINQUEDOS E ITENS PERDIDOS",
    subheadline: "{nome} reencontra seu item favorito em uma versão mágica e cintilante.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> Bosque Encantado dos Brinquedos abriu suas trilhas hoje. Para a surpresa geral, os pets descobriram que o bosque reúne réplicas luminosas de suas coisas terrestres preferidas. {nome} foi correndo encontrar o seu item inseparável: {brinquedo}.</p>
    <p class="mb-3">A versão celestial do objeto flutua levemente e faz cócegas nas patinhas quando é alcançado. Com seu jeito {personalidadeMasc}, {nome} brincou de buscar por horas seguidas, dividindo a diversão com os anjos e provando que a alegria de brincar permanece intacta nas colinas do céu.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Os pequenos tesouros da Terra continuam trazendo sorrisos aqui em cima."</p>`,
    caption: "{nome} orgulhoso(a) com seu brinquedo mágico."
  },
  5: {
    isCanon: true,
    headline: "PRIMEIRA GRANDE EXPEDIÇÃO DE MATILHAS CELESTES",
    subheadline: "Pets da raça {raca} correm juntos pelas pradarias do sol eterno.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">{artigoCapital}</span> manhã de hoje foi marcada pela primeira corrida coletiva organizada no parque. Um grupo animado de cãezinhos da raça {raca} saiu em patrulha de diversão. {nome} correu à frente, aproveitando o fôlego infinito do corpo de luz.</p>
    <p class="mb-3">Companheiros de matilha elogiaram o temperamento {personalidadeMasc} de {nome}, que ajudou os cães mais novos a subirem as rampas de nuvens. Ao final da expedição, todos deitaram na grama dourada para descansar e sentir a brisa suave que separa o céu e a Terra.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Correr livre e sem cansaço é a melodia das patinhas celestes."</p>`,
    caption: "{nome} liderando a divertida corrida de cães nas pradarias."
  },
  6: {
    isCanon: true,
    headline: "CACHOEIRA MÁGICA SURPREENDE OS NOVOS MORADORES",
    subheadline: "Uma queda d'água brilhante refresca os pets sem precisar de banho ou xampu.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">U</span>m dos pontos mais bonitos do parque começou a funcionar hoje: a Cachoeira de Cristal Seco. Conhecido(a) por ser {personalidade}, {nome} hesitou no início por medo de se molhar, mas acabou pulando no meio da névoa brilhante.</p>
    <p class="mb-3">A surpresa foi geral: a cachoeira do céu refresca instantaneamente, mas deixa o pelo seco, fofo e perfumado de flores silvestres. {nome} sacudiu-se alegremente, espalhando gotículas de luz e fazendo todos os querubins rirem com suas brincadeiras na névoa.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A água que não molha é a melhor vitória para os pets aventureiros!"</p>`,
    caption: "{nome} divertindo-se na névoa perfumada da cachoeira."
  },
  7: {
    isCanon: true,
    headline: "MIRANTE DA SAUDADE ABRE PORTAL DE CONEXÃO COM A TERRA",
    subheadline: "{nome} observa o lar e envia uma estrela cadente de carinho e paz.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> Mirante das Lembranças foi aberto hoje no ponto mais alto das colinas celestes. Ao entardecer, {nome} sentou-se na beira da nuvem principal ao lado do Querubim da Guarda para espiar o seu antigo lar terrestre.</p>
    <p class="mb-3">Com olhar calmo e rabo balançando devagar, {nome} soprou um raiozinho de sol que viajou pelo espaço para levar um abraço quentinho para sua família. {pronomeCapital} quer que todos saibam que está muito feliz no novo espaço, e que o amor que unia vocês continua brilhando mais forte do que nunca.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"O amor que viaja no vento conforta e protege quem ficou na Terra."</p>`,
    caption: "{nome} olhando as estrelas e enviando carinho do mirante."
  },
  14: {
    isCanon: true,
    headline: "BIBLIOTECA DOS LATIDOS DE OURO É INAUGURADA NO ESPAÇO CELESTIAL",
    subheadline: "O grande salão guarda livros mágicos com as memórias felizes de cada cão.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">A</span> grande biblioteca do parque abriu suas portas douradas hoje. {nome} foi correndo conhecer o acervo e encontrou seu próprio livro de ouro, cujas páginas descrevem como {pronome} amava o/a {lugar} e guardava com afeto o seu item predileto: {brinquedo}.</p>
    <p class="mb-3">Com seu espírito {personalidadeMasc}, {nome} latiu de orgulho ao ver suas fotos terrestres registradas com letras douradas. Os anjos explicam que esses livros servem para inspirar novas brincadeiras e eternizar cada carinho trocado na Terra.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A biografia mais nobre é escrita com patas, lambidas e amor sincero."</p>`,
    caption: "{nome} orgulhoso(a) ao lado de seu livro de memórias celestes."
  },
  21: {
    isCanon: true,
    headline: "O MEMORIAL DO ARCO-ÍRIS ABRE SEUS JARDINS FLORIDOS",
    subheadline: "Um bosque de cores vibrantes celebra a transição serena dos pets para o céu.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">{artigoCapital}</span> | inauguração dos Jardins do Arco-Íris coloriu o firmamento hoje. {nome} foi visto(a) correndo de flor em flor, descobrindo que as pétalas brilham nas cores exatas do afeto de sua família. Com seu temperamento {personalidadeMasc}, {pronome} divertiu a todos pulando pelas nuvens coloridas.</p>
    <p class="mb-3">O memorial oferece um ponto de encontro pacífico para os cães dividirem histórias e descansarem sob a brisa suave. {nome} deitou-se na beira do gramado azul e suspirou feliz, sabendo que cumpriu sua linda missão de espalhar alegria.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A transição deixa de ser dor e vira arco-íris de recordações felizes."</p>`,
    caption: "{nome} brincando sob as cores do arco-íris celestial."
  },
  30: {
    isCanon: true,
    headline: "OS JOGOS CELESTIAIS DO CASTELO DE NUVENS COMEÇAM HOJE",
    subheadline: "Cães competem de forma amigável em rampas de vento e piscinas de bolinhas.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> grande Castelo de Nuvens sediou hoje a rodada de abertura dos Jogos de Patinhas. {nome} se destacou na prova de corrida de vento, usando sua agilidade characteristic de cãozinho da raça {raca} para descer as rampas em velocidade recorde.</p>
    <p class="mb-3">Mostrando todo o seu lado {personalidadeMasc}, {nome} fez questão de empurrar as bolinhas coloridas para os outros participantes brincarem, garantindo a medalha de simpatia do dia. A premiação no final do evento contou com uma porção generosa de {comida} para todos os participantes.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A única competição no céu é para ver quem abana o rabo com mais alegria."</p>`,
    caption: "{nome} se divertindo nas piscinas de bolinhas do castelo."
  },
  45: {
    isCanon: true,
    headline: "CONCERTO DAS FLORES CANTANTES ATRAI MULTIDÕES NO VALE",
    subheadline: "As flores gigantes emitem notas musicais suaves conforme o toque do focinho dos pets.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">U</span>ma sinfonia mágica preencheu o Vale das Margaridas hoje. {nome} foi um(a) dos solistas convidados para a abertura do Concerto das Flores. Cada flor gigante emite uma melodia harmoniosa quando {nome} passa seu focinho de forma {personalidadeFem}.</p>
    <p class="mb-3">Com a ajuda do Canarinho guia, {nome} compôs uma música alegre e reconfortante dedicada à sua família. Os anjos recolheram a harmonia e a enviaram em forma de brisa calma para consolar o coração de quem ficou na Terra.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A música do céu é feita das notas puras do amor incondicional dos animais."</p>`,
    caption: "{nome} cheirando as flores musicais do vale celeste."
  },
  60: {
    isCanon: true,
    headline: "PIQUENIQUE SOB A CHUVA DE ESTRELAS DOURADAS",
    subheadline: "Pets deitam nas colinas sob um espetáculo de luzes brilhantes no firmamento.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">H</span>oje à noite, os pets se reuniram para o Piquenique das Luzes. Sentado(a) no seu cantinho especial que recria a paz de seu lugar favorito na Terra, o/a {lugar}, {nome} saboreou porções especiais de {comida} enquanto observava o espetáculo estelar.</p>
    <p class="mb-3">As estrelas cadentes riscam o céu em silêncio, deixando trilhas brilhantes de luz morna. Com seu jeito {personalidadeMasc}, {nome} tentou pegar os raios brilhantes com as patinhas, divertindo todos os querubins que passavam para dar carinho na barriga.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A luz que brilha no céu é o reflexo da alegria infinita das almas puras."</p>`,
    caption: "{nome} deitado(a) sob o céu estrelado de outono."
  },
  75: {
    isCanon: true,
    headline: "CONCURSO DE CULINÁRIA CELESTIAL AGITA O GRANDE VALE",
    subheadline: "Pets participam como jurados oficiais na escolha do melhor biscoito do paraíso.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> Concurso Anual de Quitutes Celestiais abriu hoje. {nome} atuou como jurado de honra no júri dos cães. A prova envolveu escolher o melhor petisco, e {nome} provou ser especialista ao saborear com alegria cada amostra de {comida}.</p>
    <p class="mb-3">Com seu espírito {personalidadeMasc}, {pronome} abanou o rabo vigorosamente para todos os concorrentes, decidindo que todos mereciam o prêmio máximo. Os anjos chefs parabenizaram {nome} pela bondade e o presentearam com uma caixa dourada cheia de petiscos saborosos.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Saborear a bondade sem pressa é a receita do banquete eterno."</p>`,
    caption: "{nome} testando quitutes como jurado do concurso."
  },
  90: {
    isCanon: true,
    headline: "EXPEDIÇÃO AO RIO DE CRISTAL REFRESCANTE",
    subheadline: "Pets descobrem que a correnteza mágica flutua sem arrastar as patinhas.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">{artigoCapital}</span> margem do Rio de Cristal foi o destino da grande expedição de hoje. {nome} e outros cães da raça {raca} foram explorar as águas brilhantes, que refrescam suavemente sem deixar o pelo molhado ou pesado.</p>
    <p class="mb-3">Com seu jeito {personalidadeMasc}, {nome} pulou nas pequenas ondas de luz, correndo atrás de peixinhos coloridos feitos de vento e dividindo a diversão com seu amado item: {brinquedo}. O passeio foi considerado um sucesso absoluto de alegria e companheirismo.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"As correntes do céu trazem apenas frescor e diversão sem fim."</p>`,
    caption: "{nome} correndo alegremente nas margens do rio celestial."
  },
  120: {
    isCanon: true,
    headline: "AULA DE ESCULTURA EM NUVENS DIVERTE OS PETS NO CASTELO",
    subheadline: "Cães aprendem a moldar nuvens fofas no formato de suas memórias felizes.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> Palácio das Artes celestes sediou hoje a oficina de moldar nuvens. {nome} participou com muita animação, usando as patinhas para dar forma a uma nuvem especial que recriou a paz de seu lugar favorito: {lugar}.</p>
    <p class="mb-3">A escultura flutuou no ar brilhando suavemente. Com sua energia {personalidadeFem}, {nome} latiu alegremente ao ver o resultado final. O Querubim da Guarda elogiou o talento artístico de {nome} e fixou a escultura no céu do vale para todos admirarem.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Moldar sonhos com algodão é a brincadeira mais doce do paraíso."</p>`,
    caption: "{nome} criando esculturas fofas nas nuvens."
  },
  150: {
    isCanon: true,
    headline: "A GRANDE CAÇA AO BRINQUEDO DOURADO NO BOSQUE",
    subheadline: "Pets usam o olfato afinado para encontrar itens brilhantes escondidos nas nuvens.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> Bosque Encantado foi palco de uma divertida caça ao tesouro hoje. Os anjos esconderam pequenos objetos reluzentes. {nome} usou todo o seu faro e agilidade de {raca} para procurar, encontrando rapidamente uma réplica dourada de {brinquedo}.</p>
    <p class="mb-3">Com seu espírito {personalidadeMasc}, {nome} não apenas comemorou a descoberta, como também ajudou seus amigos peludos que ainda estavam procurando. Todos os participantes ganharam um prêmio especial de {comida} no final da tarde.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Brincar juntos e ajudar os amigos é o maior troféu celestial."</p>`,
    caption: "{nome} correndo com seu brinquedo reluzente no bosque."
  },
  180: {
    isCanon: true,
    headline: "FESTIVAL DAS LUZES DO ARCO-ÍRIS ILUMINA A NOITE CELESTE",
    subheadline: "O céu inteiro ganha faixas brilhantes de cores em homenagem à fidelidade dos pets.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">U</span>m espetáculo inesquecível de cores e luzes cobriu o firmamento hoje. O Festival das Cores foi dedicado ao espírito fiel de {nome}. Faixas de luz lilás e azul riscaram o céu, brilhando intensamente refletindo sua personalidade {personalidadeFem}.</p>
    <p class="mb-3">{nome} assistiu a tudo deitado(a) no seu cantinho especial que lembra o/a {lugar}, cercado(a) por amigos peludos e sentindo uma onda de amor quentinha vinda diretamente das lembranças de sua família na Terra.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Quem ama com pureza brilha como um farol eterno no firmamento celestial."</p>`,
    caption: "{nome} admirando o céu iluminado pelas luzes coloridas."
  },
  210: {
    isCanon: true,
    headline: "CONSELHO DA GRANDE ÁRVORE REÚNE PETS PARA CONTAR HISTÓRIAS",
    subheadline: "Pets deitam sob a sombra da árvore sagrada para compartilhar memórias felizes.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">S</span>ob a copa imensa da Árvore da Sabedoria, {nome} foi um(a) dos palestrantes do conselho de hoje. {pronomeCapital} contou como adorava deitar no/a {lugar} e correr atrás de seu amado brinquedo: {brinquedo}.</p>
    <p class="mb-3">A plateia de anjos e pets ouviu com carinho as crônicas do amor puro de {nome}. Com seu temperamento {personalidadeMasc}, {pronome} fez com que todos sorrissem, confirmando que a lembrança do amor terrestre é o maior tesouro celestial.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"As histórias de afeto contadas pelos pets enchem o céu de perfume de flor."</p>`,
    caption: "{nome} deitado(a) sob a copa da grande árvore sagrada."
  },
  240: {
    isCanon: true,
    headline: "CORRIDA MÁGICA DA AURORA BOREAL DE PATINHAS",
    subheadline: "Pets correm por trilhas de luz colorida que dançam no horizonte.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">{artigoCapital}</span> trilha brilhante da Aurora Boreal foi liberada para corridas hoje. {nome} correu a toda velocidade sobre as faixas de luz verde e rosa, sentindo-se leve como o vento. A velocidade e alegria de {nome} impressionou todos os querubins do setor norte.</p>
    <p class="mb-3">Sempre muito {personalidade}, {nome} deu piruetas no ar e brincou com seu objeto predileto: {brinquedo}. A corrida terminou com um lanchinho especial composto de {comida} frescas oferecidas pelos guias do local.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A aurora brilha mais forte quando reflete a corrida livre de um pet feliz."</p>`,
    caption: "{nome} correndo sobre as luzes da aurora boreal."
  },
  270: {
    isCanon: true,
    headline: "DEDICAÇÃO DO JARDIM ETERNO DO AMOR INCONDICIONAL",
    subheadline: "Um novo espaço florido é inaugurado para celebrar a conexão entre tutores e pets.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> Jardim Eterno foi oficialmente inaugurado hoje no coração do parque. {nome} plantou uma sementinha de dente-de-leão dourada que brotou instantaneamente em uma flor de luz dedicada à sua família. {pronomeCapital} provou ser extremamente {personalidade} ao guiar os outros cãezinhos no plantio.</p>
    <p class="mb-3">Os anjos garantem que cada flor deste jardim representa uma oração de carinho e uma lembrança doce vinda da Terra. {nome} deitou-se ao lado de sua flor, descansando feliz sob a brisa morna do fim de tarde.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"A flor do amor verdadeiro nunca murcha, pois é regada com memórias ternas."</p>`,
    caption: "{nome} ao lado de sua flor luminosa no jardim sagrado."
  },
  300: {
    isCanon: true,
    headline: "ABERTO O PORTAL DO APANHADOR DE SONHOS CELESTIAL",
    subheadline: "Pets podem visitar os sonhos felizes de seus familiares terrestres.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">U</span>ma ponte de conexão mágica foi ativada hoje: o Portal dos Sonhos. {nome} foi convidado(a) a passar pelo portal de luz suave, permitindo-lhe levar um sopro de paz e consolo direto para o sono de sua família.</p>
    <p class="mb-3">Com seu temperamento {personalidadeMasc}, {nome} apareceu em um sonho lindo correndo livre no/a {lugar} e trazendo um sorriso ao rosto de quem sente tanto sua falta. Os querubins afirmam que esse portal conecta os corações mesmo durante a noite.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Nos sonhos mais doces, a distância desaparece e o carinho se faz presente."</p>`,
    caption: "{nome} deitando-se para conectar-se aos sonhos da família."
  },
  330: {
    isCanon: true,
    headline: "GRANDE CORRIDA DAS CONSTELAÇÕES DE PATINHAS",
    subheadline: "Pets correm desenhando novas formas luminosas no céu de veludo.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">O</span> céu de veludo escuro foi a pista de corrida de hoje. {nome} e seus companheiros de matelha da raça {raca} participaram da Corrida das Estrelas, correndo de estrela em estrela e desenhando no firmamento a forma de seu brinquedo predileto: {brinquedo}.</p>
    <p class="mb-3">Com seu jeito {personalidadeMasc}, {nome} pulou de constelação em constelação com leveza. O Querubim da Guarda assistiu a tudo com orgulho, distribuindo pratos de {comida} saborosos para repor as energias de todos os corredores celestes.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Desenhar luzes no céu é o uivo de felicidade dos cães do paraíso."</p>`,
    caption: "{nome} saltando entre constelações brilhantes no céu."
  },
  365: {
    isCanon: true,
    headline: "ANIVERSÁRIO DE 1 ANO DO ESPAÇO CELESTIAL PARA CÃES",
    subheadline: "O parque celebra 365 dias de pura alegria, amizade e memórias inestimáveis.",
    text: `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">{artigoCapital}</span> grande festa de aniversário de 1 ano do parque celestial aconteceu hoje. {nome} foi coroado(a) como o(a) morador(a) mais simpático(a) do setor das nuvens douradas. {pronomeCapital} desfilou com orgulho sob aplausos de anjos, querubins e todos os seus amigos peludos.</p>
    <p class="mb-3">Com seu coração {personalidadeMasc}, {nome} celebrou correndo no seu cantinho preferido que lembra o/a {lugar} e brincando com o seu brinquedo predileto: {brinquedo}. Os anjos confirmaram que esse primeiro ano foi repleto de luz, e que a história de amor eterno de vocês continuará brilhando por toda a eternidade.</p>
    <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"Um ano de paz, brincadeiras e a certeza absoluta de que o amor nunca termina."</p>`,
    caption: "{nome} comemorando com sua coroa de dentes-de-leão o aniversário do parque."
  }
};

// Filler story components for procedural generation
const fillerHeadlines = [
  "DESCOBERTA DIVERTIDA DE {apelido} NAS NUVENS CELESTES",
  "MANHÃ DE BRINCADEIRAS E LATIDOS DE AMOR NO BOSQUE",
  "DIA DE SOL ETERNO NAS COLINAS DAS PATINHAS",
  "FESTA DE PETISCOS SURPREENDE O ANJINHO {nome}",
  "EXPEDIÇÃO SURPRESA AO VALE DAS BORBOLETAS DE LUZ",
  "TRAQUINAGEM DIVERTIDA NO PALÁCIO DE ALGODÃO",
  "DIA DE DESCANSO QUENTINHO NO GRAMADO DO SOL",
  "CORRIDA LIVRE E SEM CERCAS AGITA O SETOR DE LUZ",
  "MENSAGEM NA BRISA ENVIADA PELO VALENTE {nome}",
  "BRINCADEIRA DE BUSCAR AGITA A TADE DO ANJO {apelido}",
  "COLO CELESTIAL E CARINHO EXTRA NA ORELHA DE {nome}",
  "ENCONTRO MÁGICO COM OS QUERUBINS DA GUARDA NO BOSQUE",
  "DIA DE CONFORTO ABSOLUTO E PREGUIÇA GOSTOSA NAS NUVENS",
  "AVENTURA NO VALE DO ARCO-ÍRIS COM O PET {nome}",
  "O ANJINHO {apelido} ESPALHA ALEGRIA PELO PARQUE CELESTE"
];

const fillerSubheadlines = [
  "Com seu temperamento {personalidadeMasc}, o pet da raça {raca} fez a festa no paraíso.",
  "Quitutes celestes e correria sem limites agitam as colinas douradas hoje.",
  "O pet reencontrou brinquedos terrestres em uma version feita de vento e luz.",
  "Uma tarde repleta de sonecas, afeto e carinho extra dos anjos da guarda.",
  "Latidos de saudade viram brisa morna para abraçar a família na Terra.",
  "O anjinho de quatro patas lidera a patrulha da simpatia no novo espaço.",
  "Brincadeiras divertidas com as nuvens de vento morno animam a tarde.",
  "Uma dose extra de {comida} e carinho na barriguinha agitam o dia.",
  "O pelo macio fica ainda mais fofo após diversão nas cachoeiras secas.",
  "Cãezinhos se reúnem para correr sob a brisa perfumada de lavanda celestial.",
  "Um espetáculo de estrelas cadentes inspira as brincadeiras de {nome}.",
  "Com passos leves, o pet mostra como o amor verdadeiro viaja nas nuvens.",
  "A brincadeira de correr na velocidade do pensamento anima o dia do anjo.",
  "Uma soneca tranquila com cheiro de flores silvestres encerra a tarde.",
  "O pet se diverte recriando as manias mais engraçadas de seu lar na Terra."
];

const fillerIntroductions = [
  "Durante a manhã de hoje, o clima no Espaço Celestial estava perfeito para travessuras.",
  "Com um latido alegre logo ao amanhecer, {nome} iniciou mais um dia incrível no parque.",
  "A tarde ensolarada trouxe uma brisa suave que fez o pelo de {nome} brilhar intensamente.",
  "Sob a luz dourada do céu, os pets se reuniram para uma brincadeira diferente.",
  "O guia Canarinho chamou {nome} logo cedo para uma visita ao jardim de nuvens.",
  "Um aroma delicioso de {comida} vindo do vale agitou o focinho de {nome}.",
  "Com passos leves e muito entusiasmo, {nome} foi o destaque da patrulha matinal.",
  "Uma neblina suave com cheiro de lavanda cobriu o bosque, convidando os pets para correr.",
  "O dia começou com {nome} explorando novas trilhas de algodão nas colinas do norte.",
  "Os querubins prepararam uma recepção especial para os pets no gramado sagrado hoje.",
  "Após um descanso profundo na nuvem de repouso, {nome} acordou cheio(a) de energia.",
  "A brisa morna do paraíso trouxe lembranças doces e fez {nome} abanar o rabo de felicidade.",
  "Ao lado de novos amigos da raça {raca}, {nome} passou a manhã correndo sem se cansar.",
  "Um raio de sol quentinho se posicionou exatamente acima de {nome}, convidando para brincar.",
  "O Querubim da Guarda trouxe novidades divertidas para agitar a tarde de {nome}."
];

const fillerActions = [
  "Os anjos contam que {pronome} usou todo o seu jeito {personalidadeMasc} para organizar uma gincana de corrida livre, brincando alegremente e se divertindo com o seu brinquedo ou objeto predileto: {brinquedo}.",
  "Mostrando ser muito {personalidade}, {pronome} chamou a atenção de todos ao fazer acrobacias aéreas no meio das nuvens fofas, segurando com carinho seu companheiro inseparável: {brinquedo}.",
  "Durante a tarde, {pronome} encontrou um cantinho aconchegante que recria a paz do seu lugar favorito na Terra, o/a {lugar}, e passou horas deitado(a) ali, relaxando com seu amado {brinquedo}.",
  "Sempre muito {personalidade}, {nome} decidiu ajudar a decorar as árvores de biscoito do parque, usando seu item favorito, o/a {brinquedo}, para alcançar os galhos mais altos e distribuir guloseimas celestes.",
  "Com seu espírito {personalidadeMasc}, {pronome} fez amizade com três cãezinhos recém-chegados, convidando-os para correr até o bosque e dividindo com eles seu amado item: {brinquedo}.",
  "O grande evento do dia foi quando {nome} fez aquela famosa carinha de pidão para o Querubim da Guarda, ganhando uma porção extra de {comida} e carinho especial na orelha.",
  "{pronomeCapital} passou a tarde testando diferentes formatos de nuvens, criando uma réplica divertida que recria a sensação de paz do seu lugar favorito: {lugar}.",
  "No refeitório, {nome} mostrou seu lado {personalidadeMasc} ao guiar a matilha até a mesa de doces, onde todos ganharam porções generosas de {comida} sob o olhar carinhoso dos anjos.",
  "Com muita diversão, {pronome} correu atrás de borboletas de luz pelo bosque, pulando de nuvem em nuvem junto com seu companheiro inseparável: {brinquedo}.",
  "Aproveitando o fôlego infinito do céu, {nome} deu saltos incríveis sobre o gramado de luz, mostrando toda a sua energia {personalidadeFem} e brincando with seu brinquedo ou objeto predileto: {brinquedo}.",
  "Os correspondentes celestes relatam que {nome} organized uma patrulha divertida de farejar rastros de arco-íris, liderando os outros pets com seu jeito {personalidadeMasc} e alegre.",
  "Para comemorar o dia ensolarado, {nome} levou seu brinquedo predileto, o/a {brinquedo}, para as colinas de vento e brincou de correr na velocidade da luz.",
  "{pronomeCapital} passou horas no Bosque dos Sons, fazendo com que cada flor emitisse uma nota alegre ao ser tocada por seu companheiro inseparável: {brinquedo}.",
  "{nome} deitou-se de barriga para cima sob o sol celestial no/a {lugar}, ganhando massagem na orelha de dois querubins e mostrando seu lado {personalidadeMasc} e mimado.",
  "Com seu temperamento {personalidadeMasc}, {nome} ajudou os querubins a recolher folhas douradas no bosque, ganhando como recompensa uma tigela dourada cheia de {comida}."
];

const fillerConclusions = [
  "O dia terminou com {nome} sonhando com sua família e enviando uivos de amor através da brisa.",
  "Com o coração quentinho e cheio de paz, {nome} deitou-se na beira da nuvem para descansar sob o olhar dos anjos.",
  "A noite chegou trazendo estrelas brilhantes, e {nome} adormeceu sabendo que o amor de seus humanos continua protegendo seu sono.",
  "Sorrindo de orelha a orelha, o cãozinho provou que a felicidade no céu é infinita, mas que as lembranças da Terra são sempre os maiores tesouros.",
  "Os querubins enviaram uma brisa morna com o carinho de {nome} diretamente para a janela de sua família na Terra.",
  "Com o pelo limpo e perfumado após tantas corridas, {nome} tirou uma soneca prolongada sentindo-se o cão mais sortudo do mundo.",
  "A noite no parque celestial é tranquila e cheia de paz, exatamente como {nome} merece após um dia repleto de brincadeiras.",
  "Abanando o rabo mesmo quase dormindo, {nome} provou que o elo com seus humanos na Terra permanece inquebrável e brilhante.",
  "O anjo da guarda envolveu {nome} em suas asas macias, garantindo uma noite de sono profundo e sem dores.",
  "Enquanto as estrelas riscam o céu de veludo, {nome} repousa feliz, aguardando as novas aventuras que o amanhã trará no parque.",
  "Os latidos de alegria de {nome} viraram raios de lua que agora iluminam o sono de quem {pronome} tanto ama na Terra.",
  "Com a certeza de que foi extremamente amado(a), {nome} dorme em paz, deixando um rastro de luz e amor por onde passa.",
  "O sono dos pets é protegido pela grande sinfonia do céu, garantindo que {nome} descanse com conforto absoluto.",
  "Sentindo o calor do sol celestial que nunca apaga totalmente, {nome} sonha com os abraços quentinhos de sua família na Terra.",
  "O dia de hoje foi mais uma prova de que o amor verdadeiro não tem fim, apenas ganha novas páginas e cores no paraíso."
];

const fillerCaptions = [
  "{nome} brincando alegremente no Espaço Celestial.",
  "O valente {nome} tirando proveito do fôlego eterno.",
  "{nome} farejando novidades nas colinas de algodão.",
  "Nosso amado anjinho correndo sem coleiras ou limites.",
  "{nome} relaxando sob a brisa suave do paraíso.",
  "{nome} orgulhoso(a) com seu brinquedo de nuvens.",
  "{nome} aproveitando o sol morno de fim de tarde.",
  "O cãozinho {nome} explorando o Bosque Encantado.",
  "{nome} em momento de pura simpatia com os anjos.",
  "{nome} deitado(a) na nuvem fofa das memórias.",
  "{nome} saltando sobre nuvens de vento no palácio.",
  "Mais um dia feliz no diário do cãozinho {nome}.",
  "{nome} mandando uivos carinhosos para a Terra.",
  "{nome} deliciando-se no gramado macio do paraíso.",
  "O sorridente {nome} abanando o rabo nas alturas."
];

// Sidebar content structures (rotating by day of week or day number)
const sidebarOptions = [
  {
    icon: "fa-dove",
    title: "Mensagem do Céu",
    content: "Não chore ao olhar para baixo. Estou livre, feliz e correndo muito rápido. Espere-me com paciência, vamos correr juntos novamente."
  },
  {
    icon: "fa-paw",
    title: "Manias Celestiais",
    content: "Os anjos contam que a mania favorita dos pets aqui é dar três voltinhas nas nuvens de algodão antes de tirar um cochilo prolongado."
  },
  {
    icon: "fa-certificate",
    title: "Decreto dos Anjos",
    content: "Fica decretado por São Francisco de Assis que, a partir de hoje, todos os bifinhos celestes são livres de calorias e infinitamente saborosos."
  },
  {
    icon: "fa-cloud-sun",
    title: "Previsão do Tempo",
    content: "Céu aberto com brisa morna vinda do sul. Temperatura perfeita de 24°C eternos, excelente para correr na grama ou tirar uma soneca."
  },
  {
    icon: "fa-heart",
    title: "Poema do Anjo",
    content: "Se pelas nuvens eu correr, e de repente sumir, olhe para o céu ao anoitecer. Em cada estrela a brilhar, estarei sempre a te cuidar."
  },
  {
    icon: "fa-tree",
    title: "Curiosidade Celestial",
    content: "Os gravetos no Bosque dos Brinquedos flutuam de volta para a boca dos pets sozinhos, pois adoram brincar de buscar tanto quanto eles."
  },
  {
    icon: "fa-star",
    title: "Pequeno Recado",
    content: "Eu lembro com carinho de cada caminhada, de cada pedacinho de comida dividido escondido e de dormir no seu pé. Estou bem aqui."
  },
  {
    icon: "fa-shield-heart",
    title: "Guarda Celeste",
    content: "O Querubim da Guarda informa que a barreira de amor que une vocês protege o seu lar na Terra e mantém o pelo do pet brilhando."
  }
];

// Main function to generate the daily edition
export function generateProceduralEdition(pet, journeyDay) {
  const vars = getPetVars(pet, journeyDay);
  
  // 1. Check if it is a Canon Day
  if (canonStories[journeyDay]) {
    const canon = canonStories[journeyDay];
    return {
      isCanon: true,
      headline: interpolate(canon.headline, vars),
      subheadline: interpolate(canon.subheadline, vars),
      text: interpolate(canon.text, vars),
      caption: interpolate(canon.caption, vars),
      sidebars: getSidebarNews(journeyDay, vars)
    };
  }

  // 2. Otherwise generate procedural Filler Day
  // Coprime coefficients for distributed selection
  const headlineIdx = (journeyDay * 3) % fillerHeadlines.length;
  const subheadlineIdx = (journeyDay * 11) % fillerSubheadlines.length;
  const introIdx = (journeyDay * 7) % fillerIntroductions.length;
  const actionIdx = (journeyDay * 13) % fillerActions.length;
  const conclusionIdx = (journeyDay * 19) % fillerConclusions.length;
  const captionIdx = (journeyDay * 5) % fillerCaptions.length;

  const headline = interpolate(fillerHeadlines[headlineIdx], vars);
  const subheadline = interpolate(fillerSubheadlines[subheadlineIdx], vars);
  
  const rawText = `<p class="mb-3"><span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">{artigoCapital}</span> ${fillerIntroductions[introIdx]}</p>
  <p class="mb-3">${fillerActions[actionIdx]}</p>
  <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">"${fillerConclusions[conclusionIdx]}"</p>`;
  
  const text = interpolate(rawText, vars);
  const caption = interpolate(fillerCaptions[captionIdx], vars);

  return {
    isCanon: false,
    headline,
    subheadline,
    text,
    caption,
    sidebars: getSidebarNews(journeyDay, vars)
  };
}

// Select two distinct sidebars deterministically based on day
function getSidebarNews(journeyDay, vars) {
  const idx1 = (journeyDay + 1) % sidebarOptions.length;
  const idx2 = (journeyDay + 4) % sidebarOptions.length;
  
  const side1 = sidebarOptions[idx1];
  const side2 = sidebarOptions[idx2];

  return [
    {
      icon: side1.icon,
      title: interpolate(side1.title, vars),
      content: interpolate(side1.content, vars)
    },
    {
      icon: side2.icon,
      title: interpolate(side2.title, vars),
      content: interpolate(side2.content, vars)
    }
  ];
}
