// === SEÇÃO: DADOS DO PET ===
const petData = {
    nome: "Flokinho",
    apelido: "Floquinho de Neve",
    raca: "Shih Tzu",
    amor: "dormir no pé da cama",
    odio: "banho",
    brinquedo: "bolinha azul",
    comida: "bifinho de carne",
    dono: "seu humano",
    familia: "a família Luchesi",
    lugar: "sofá da sala"
};

// === SEÇÃO: NOTÍCIAS DIÁRIAS (312 DIAS) ===
const newsData = [
    {
        "headline": "CHEGADA AO PORTAL DOURADO",
        "subheadline": "Flokinho entra no céu saltando sobre nuvens macias.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje, o destemido {nome} cruzou o Portal de Algodão Celestial. Sem coleiras ou limites, ele correu pela grama dourada e descobriu que ali não existem portões. Um querubim informou que ele é o hóspede de honra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Chegada ao Portal Dourado - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cão feliz correndo",
        "caption": "Flokinho explorando os portais celestes.",
        "category": "aventura",
        "week": 1,
        "day": 1
    },
    {
        "headline": "O CHEIRO DE BISCOITO INFINITO",
        "subheadline": "Um aroma delicioso vindo da brisa celestial agita o focinho de Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o acordar, {nome} sentiu um cheiro irresistível. Seguindo a brisa, encontrou uma árvore frutífera que, em vez de frutas, produz bifinhos de carne fresquinhos. Ele comeu até saciar e tirou uma soneca.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Cheiro de Biscoito Infinito - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "árvore bonita no campo",
        "caption": "Flokinho farejando petiscos na árvore.",
        "category": "comida",
        "week": 1,
        "day": 2
    },
    {
        "headline": "ENCONTRO COM O CANARINHO GUIA",
        "subheadline": "Um passarinho brilhante apresenta-se como o guia oficial do céu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> pequeno Canarinho, com asas que brilham como ouro, pousou no focinho de {nome}. Eles conversaram sobre os melhores pontos de sol para deitar. O guia prometeu mostrar as colinas mais macias.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Encontro com o Canarinho Guia - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pássaro cantando no galho",
        "caption": "Canarinho ensinando os caminhos do céu para Flokinho.",
        "category": "amizade",
        "week": 1,
        "day": 3
    },
    {
        "headline": "AS NUVENS ALMOFADAS",
        "subheadline": "Flokinho descobre que as nuvens mudam de formato conforme seu desejo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>urante a tarde, {nome} percebeu que ao pisar em uma nuvem, ela se moldava como o {lugar}. Ele passou horas testando diferentes formatos, decidindo que a nuvem em formato de rosquinha é a melhor.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"As Nuvens Almofadas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "nuvens fofas no céu azul",
        "caption": "Flokinho relaxando em uma nuvem ultra-macia.",
        "category": "reflexao",
        "week": 1,
        "day": 4
    },
    {
        "headline": "O REFEITÓRIO DOS ANJOS PETS",
        "subheadline": "Uma recepção calorosa com todos os tipos de comidas terrestres.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>o refeitório celeste, {nome} foi recebido com festa. Havia potes dourados com {comida} e fontes de água de coco. Ele foi o centro das atenções, ganhando carinho na orelha de três anjos diferentes.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Refeitório dos Anjos Pets - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pote de ração dourado",
        "caption": "Flokinho sendo mimado no banquete celestial.",
        "category": "comida",
        "week": 1,
        "day": 5
    },
    {
        "headline": "O PRIMEIRO SONO SEM DOR",
        "subheadline": "Flokinho deita-se para um descanso profundo nas nuvens douradas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} deitou-se sabendo que nenhuma dor ou cansaço o tocaria novamente. Ele dormiu sentindo o calor do sol celestial, sonhando com as carícias de {familia}. Uma noite de paz absoluta.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Primeiro Sono Sem Dor - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pôr do sol dourado",
        "caption": "Flokinho dormindo tranquilo nas nuvens do amanhecer.",
        "category": "saudade",
        "week": 1,
        "day": 6
    },
    {
        "headline": "CORRIDA SEM CANSAR",
        "subheadline": "Flokinho descobre que suas patinhas estão mais rápidas do que nunca.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} correu de uma ponta a outra do vale de grama esmeralda. Ele percebeu que seu fôlego era infinito e que podia dar saltos incríveis no ar, latindo de pura alegria.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Corrida Sem Cansar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro correndo rápido no campo",
        "caption": "Flokinho correndo livre e sem cansaço.",
        "category": "aventura",
        "week": 2,
        "day": 1
    },
    {
        "headline": "A ÁGUA QUE NÃO MOLHA",
        "subheadline": "A fonte de cristal refresca sem precisar de banho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} aproximou-se de uma cachoeira brilhante. Com medo do seu terrível inimigo, o {odio}, ele hesitou. Ao tocar a água, descobriu que ela refresca, mas não molha o pelo! Uma delícia pura.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Água que Não Molha - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachoeira de cristal brilhante",
        "caption": "Flokinho bebendo água fresca na cachoeira celeste.",
        "category": "aventura",
        "week": 2,
        "day": 2
    },
    {
        "headline": "O MISTÉRIO DO GRAVETO FLUTUANTE",
        "subheadline": "Um graveto que volta sozinho para a boca do pet.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>rincando no Bosque Celestial, {nome} encontrou um graveto brilhante. Ao soltá-lo, o graveto flutuou de volta para ele. Canarinho explicou que no céu, os brinquedos também adoram brincar.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Mistério do Graveto Flutuante - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "graveto de madeira na grama",
        "caption": "Flokinho brincando com o graveto mágico.",
        "category": "humor",
        "week": 2,
        "day": 3
    },
    {
        "headline": "PIQUE-ESCONDE NA NÉVOA DE BAUNILHA",
        "subheadline": "Brincadeiras divertidas com as nuvens perfumadas do fim da tarde.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>ma névoa com aroma de baunilha cobriu o jardim. {nome} brincou de esconde-esconde com os anjos, aparecendo de repente com um latido alegre e ganhando muitos afagos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Pique-Esconde na Névoa de Baunilha - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "névoa suave e colorida no parque",
        "caption": "Flokinho brincando de se esconder na névoa de baunilha.",
        "category": "amizade",
        "week": 2,
        "day": 4
    },
    {
        "headline": "O ENCONTRO COM OUTROS SHIH TZUS",
        "subheadline": "Uma matilha de cãezinhos fofos saúda o novo morador.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} encontrou um grupo de Shih Tzus que faziam acrobacias aéreas nas nuvens. Eles o convidaram para o grupo e ensinaram a técnica de planar usando as orelhas como asas.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com Outros Shih Tzus - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "grupo de cachorrinhos Shih Tzu",
        "caption": "Flokinho fazendo pose com seus novos amigos de raça.",
        "category": "amizade",
        "week": 2,
        "day": 5
    },
    {
        "headline": "O MIRANTE DAS ESTRELAS CADENTES",
        "subheadline": "Um lugar calmo para observar o universo de cima.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">À</span> noite, {nome} subiu até o mirante celestial. Sentado com Canarinho, ele viu estrelas cadentes riscarem o céu de veludo, sentindo uma conexão profunda com o seu lar na Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Mirante das Estrelas Cadentes - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "céu estrelado lindo de noite",
        "caption": "Flokinho olhando as estrelas do mirante sagrado.",
        "category": "reflexao",
        "week": 2,
        "day": 6
    },
    {
        "headline": "O BOSQUE DAS CORES",
        "subheadline": "Flokinho entra em uma floresta onde as flores mudam de cor conforme a música.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>onduzido por Canarinho, {nome} explorou o Bosque das Flores Sonoras. Cada flor cantava uma nota musical quando ele passava o focinho. O bosque inteiro virou uma sinfonia de latidos e notas.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Bosque das Cores - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "bosque com flores coloridas brilhantes",
        "caption": "Flokinho cheirando flores musicais no bosque.",
        "category": "aventura",
        "week": 3,
        "day": 1
    },
    {
        "headline": "BORBOLETAS QUE FAZEM CÓCEGAS",
        "subheadline": "Borboletas brilhantes pousam no nariz de Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>entenas de borboletas douradas cercaram {nome}. Elas pousavam delicadamente em seu focinho, fazendo-o espirrar e rolar na grama de tanta risada. Uma brincadeira leve e mágica.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Borboletas que Fazem Cócegas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "borboleta brilhante pousando",
        "caption": "Flokinho brincando com as borboletas de luz.",
        "category": "humor",
        "week": 3,
        "day": 2
    },
    {
        "headline": "A COLINA DO SOL ETERNO",
        "subheadline": "Um lugar onde a tarde morna dura o tempo que o pet quiser.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} descobriu uma colina onde o sol nunca se põe totalmente, mantendo aquela temperatura perfeita de fim de tarde. Ideal para tirar aquele cochilo prolongado na grama macia.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Colina do Sol Eterno - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1477884213980-b778400c9045?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "colina ensolarada com grama verde",
        "caption": "Flokinho aproveitando o sol da tarde na colina.",
        "category": "reflexao",
        "week": 3,
        "day": 3
    },
    {
        "headline": "O ENCONTRO COM O QUERUBIM DA GUARDA",
        "subheadline": "Um anjo especial apresenta-se e oferece um carinho na barriga.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m querubim de asas azuis sentou-se ao lado de {nome}. Com muita paciência, o anjo fez aquela massagem na barriga que ele tanto amava receber na Terra. {nome} quase dormiu de tanto relaxamento.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com o Querubim da Guarda - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "anjo de asas azuis acariciando",
        "caption": "Flokinho ganhando massagem na barriga do anjo.",
        "category": "amizade",
        "week": 3,
        "day": 4
    },
    {
        "headline": "O JARDIM DOS BRINQUEDOS PERDIDOS",
        "subheadline": "Flokinho encontra uma réplica perfeita de sua bolinha azul.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>o centro do bosque, {nome} avistou algo familiar: a sua amada {brinquedo}! Ela estava brilhando, pronta para ser mordida. Ele correu e a pegou, sentindo-se o cão mais sortudo do mundo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Jardim dos Brinquedos Perdidos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "bolinha azul de borracha",
        "caption": "Flokinho correndo orgulhoso com sua bolinha azul.",
        "category": "aventura",
        "week": 3,
        "day": 5
    },
    {
        "headline": "O PÔR DO SOL DE MARGARIDAS",
        "subheadline": "O dia termina com o céu pintado de pétalas coloridas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> céu cobriu-se de nuvens que pareciam pétalas de margarida. {nome} deitou-se na beira da nuvem e adormeceu assistindo ao espetáculo de cores que se formava no horizonte celestial.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Pôr do Sol de Margaridas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pôr do sol lindo com nuvens rosa",
        "caption": "Flokinho dormindo sob o céu de pétalas.",
        "category": "reflexao",
        "week": 3,
        "day": 6
    },
    {
        "headline": "O PALÁCIO FLUTUANTE",
        "subheadline": "Flokinho encontra um imenso castelo feito inteiramente de nuvens brancas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} viajou até o Palácio de Algodão. O castelo flutua suavemente e tem rampas de vento por onde ele pode deslizar. Ele passou a manhã inteira subindo e descendo as rampas.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Palácio Flutuante - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "castelo de nuvens brancas no céu",
        "caption": "Flokinho explorando o palácio flutuante de algodão.",
        "category": "aventura",
        "week": 4,
        "day": 1
    },
    {
        "headline": "A SALA DOS ESPELHOS DE SONHOS",
        "subheadline": "Espelhos mostram os sonhos mais felizes do pet.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>entro do palácio, {nome} entrou em uma sala mágica. Os espelhos refletiam suas lembranças felizes, como o dia em que dormia no {lugar} ao lado de {dono}. Ele abanou o rabo de alegria ao ver.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Sala dos Espelhos de Sonhos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "sala espelhada com reflexos de luz",
        "caption": "Flokinho olhando suas lembranças no espelho de sonhos.",
        "category": "reflexao",
        "week": 4,
        "day": 2
    },
    {
        "headline": "O BANQUETE REAL DOS PETS",
        "subheadline": "Pratos refinados preparados especialmente para os cães.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> chef celestial preparou um banquete. O prato principal foi o preferido de {nome}: {comida} grelhado com molho de nuvens. Ele comeu com tanta vontade que os anjos aplaudiram sua disposição.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Banquete Real dos Pets - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "prato de comida apetitoso",
        "caption": "Flokinho deliciando-se no banquete real do palácio.",
        "category": "comida",
        "week": 4,
        "day": 3
    },
    {
        "headline": "A BIBLIOTECA DOS LATIDOS HISTÓRICOS",
        "subheadline": "Livros que registram as grandes peripécias de todos os cães.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates, o gato filósofo, mostrou a {nome} o livro de sua vida. Cada página tinha uma foto dele fazendo travessuras na Terra. Ele ficou orgulhoso de ver suas pegadas registradas ali.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Biblioteca dos Latidos Históricos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "livro antigo aberto com ilustrações",
        "caption": "Flokinho olhando o livro de sua história no céu.",
        "category": "amizade",
        "week": 4,
        "day": 4
    },
    {
        "headline": "O SALÃO DE JOGOS DAS PATINHAS",
        "subheadline": "Uma arena cheia de obstáculos divertidos e piscinas de bolinhas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} brincou na arena do palácio. Havia túneis de vento, rampas de grama fofa e uma piscina gigante de bolinhas azuis. Ele pulou de cabeça e se divertiu como nunca.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Salão de Jogos das Patinhas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "piscina de bolinhas coloridas",
        "caption": "Flokinho mergulhando na piscina de bolinhas.",
        "category": "humor",
        "week": 4,
        "day": 5
    },
    {
        "headline": "O DESCANSO NO TRONO DE NUVENS",
        "subheadline": "Flokinho coroa-se o rei do conforto celestial.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>pós tanta brincadeira, {nome} subiu no trono de nuvem dourada do palácio. Ele se enrolou bem no meio das almofadas e adormeceu, coroado como o rei da preguiça e do amor.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso no Trono de Nuvens - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "trono real decorado com ouro",
        "caption": "Flokinho dormindo como um rei no trono celestial.",
        "category": "reflexao",
        "week": 4,
        "day": 6
    },
    {
        "headline": "O VENTO FRIO DA LEMBRANÇA",
        "subheadline": "Flokinho sente saudades do aconchego do seu lar terrestre.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>ma brisa leve soprou do sul, trazendo o cheiro do lar de {familia}. {nome} deitou-se na beira da nuvem, sentindo falta daquele cantinho quentinho onde costumava {amor}. O céu ficou um pouco mais cinza.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Vento Frio da Lembrança - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1499346030926-f872da17868a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "nuvem cinza solitária no céu",
        "caption": "Flokinho com olhar pensativo na beira da nuvem.",
        "category": "saudade",
        "week": 5,
        "day": 1
    },
    {
        "headline": "O TELESCÓPIO DE NUVENS",
        "subheadline": "Um instrumento que permite espiar a Terra com nitidez.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">Q</span>uerubim trouxe um telescópio feito de vento. {nome} olhou e viu {dono} na sala. Ele latiu baixinho, desejando poder pular no colo dele e dar um lambeijo reconfortante.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Telescópio de Nuvens - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "telescópio antigo apontado para o céu",
        "caption": "Flokinho olhando pelo telescópio de nuvens.",
        "category": "reflexao",
        "week": 5,
        "day": 2
    },
    {
        "headline": "A LÁGRIMA DE ESTRELA",
        "subheadline": "Flokinho chora baixinho e sua lágrima brilha como uma pequena luz.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>ma lágrima correu pelo focinho de {nome}. Ao cair na nuvem, ela se transformou em uma pequena estrela brilhante. Canarinho pousou ao seu lado, cantando uma melodia doce para confortá-lo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Lágrima de Estrela - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "estrela brilhando intensamente",
        "caption": "Flokinho sendo confortado pelo Canarinho.",
        "category": "saudade",
        "week": 5,
        "day": 3
    },
    {
        "headline": "O ABRAÇO DO ANJO",
        "subheadline": "Querubim envolve Flokinho em suas asas macias.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">P</span>ercebendo a tristeza de {nome}, o Querubim o envolveu em um abraço caloroso com suas asas. Ele explicou que o amor que sentem por ele na Terra é o que o mantém brilhando no céu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Abraço do Anjo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "asas de anjo brancas e macias",
        "caption": "Flokinho recebendo o abraço do Querubim da Guarda.",
        "category": "amizade",
        "week": 5,
        "day": 4
    },
    {
        "headline": "A CARTA ESCRITA NO VENTO",
        "subheadline": "Flokinho envia uma mensagem de amor através da brisa.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} latiu uma mensagem cheia de carinho. O Querubim recolheu os latidos e os transformou em um sopro de vento morno que viajou direto para a janela de {familia} na Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Carta Escrita no Vento - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "folhas voando com o vento suave",
        "caption": "Flokinho enviando sua mensagem pelo vento.",
        "category": "mensagem",
        "week": 5,
        "day": 5
    },
    {
        "headline": "O CONFORTO DO SONO COMPARTILHADO",
        "subheadline": "Flokinho dorme sabendo que seus humanos sonham com ele.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om o coração mais leve, {nome} deitou-se. Ele adormeceu com a certeza de que a distância é apenas temporária e de que seu amor continua bem guardado no coração de {dono}.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Conforto do Sono Compartilhado - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto aconchegante com luz suave",
        "caption": "Flokinho dormindo em paz na nuvem quentinha.",
        "category": "saudade",
        "week": 5,
        "day": 6
    },
    {
        "headline": "O GRANDE SUSTO DO CHUVEIRO",
        "subheadline": "Flokinho confunde uma chuva de flores com o seu temido banho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} viu nuvens cinzas se aproximando e ouviu um barulho de água. Pensando que seria o terrível {odio}, ele correu e se escondeu debaixo de uma mesa de nuvem dourada, trêmulo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Grande Susto do Chuveiro - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1472214222541-d510753a4907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "nuvem de chuva escura no horizonte",
        "caption": "Flokinho escondido com medo da chuva.",
        "category": "humor",
        "week": 6,
        "day": 1
    },
    {
        "headline": "A EXPLICAÇÃO DE SÓCRATES",
        "subheadline": "O gato filósofo explica que no céu nada suja ou incomoda.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates encontrou {nome} escondido. Com passos lentos, o gato explicou que no céu a água não molha o pelo de forma desagradável, mas sim limpa a alma e traz leveza espiritual.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Explicação de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato cinza olhando com sabedoria",
        "caption": "Sócrates conversando com Flokinho sob a mesa.",
        "category": "amizade",
        "week": 6,
        "day": 2
    },
    {
        "headline": "O TESTE DA GOTINHA MÁGICA",
        "subheadline": "Flokinho arrisca tocar uma única gota da chuva celeste.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om muita desconfiança, {nome} esticou a patinha para tocar uma gota que caía da nuvem. Para sua surpresa, a gota tinha cheiro de {comida} e fez seu pelo brilhar instantaneamente.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Teste da Gotinha Mágica - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gota de água brilhando na folha",
        "caption": "Flokinho testando a água mágica com a pata.",
        "category": "aventura",
        "week": 6,
        "day": 3
    },
    {
        "headline": "A CORRIDA SOB O ARCO-ÍRIS SECO",
        "subheadline": "Brincando no meio da chuva de luz sem se molhar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">P</span>ercebendo que a água celeste era maravilhosa, {nome} saiu do esconderijo e correu sob a chuva de luz. Ele sacudiu o pelo, que ficou ainda mais fofo e perfumado de lavanda.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Corrida Sob o Arco-Íris Seco - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "arco-íris brilhante sobre o campo",
        "caption": "Flokinho correndo alegremente sob a chuva de luz.",
        "category": "humor",
        "week": 6,
        "day": 4
    },
    {
        "headline": "O PERFUME DE ESTRELAS",
        "subheadline": "Flokinho descobre que está cheiroso sem precisar de xampu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>pós a chuva de luz, {nome} percebeu que seu pelo estava livre de qualquer sujeira e exalava um perfume suave de jasmim. Ele latiu de vitória: banho sem água é o melhor!</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Perfume de Estrelas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "flores de jasmim brancas no jardim",
        "caption": "Flokinho exibindo seu pelo brilhante e cheiroso.",
        "category": "humor",
        "week": 6,
        "day": 5
    },
    {
        "headline": "O COCHILO SECO E PERFUMADO",
        "subheadline": "Flokinho dorme com o pelo super macio no pé da cama celestial.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">T</span>otalmente limpo e cheiroso, {nome} deitou-se na beira da nuvem. Ele dormiu feliz, sabendo que tinha superado o medo do banho graças à mágica do paraíso dos pets.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Cochilo Seco e Perfumado - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama fofa com lençóis brancos",
        "caption": "Flokinho dormindo profundamente após seu banho seco.",
        "category": "reflexao",
        "week": 6,
        "day": 6
    },
    {
        "headline": "A NEBLINA DA SAUDADE",
        "subheadline": "O céu reflete o sentimento de saudade da família Luchesi.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje, a névoa cobriu os campos celestiais. {nome} sentiu que {familia} estava lembrando dele com lágrimas. Ele sentou-se quietinho, olhando para baixo com as orelhas caídas.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Neblina da Saudade - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "névoa densa cobrindo as montanhas",
        "caption": "Flokinho pensativo em meio à neblina celestial.",
        "category": "saudade",
        "week": 7,
        "day": 1
    },
    {
        "headline": "O CHÁ DE NUVENS DE BAIACU",
        "subheadline": "O vira-lata bartender prepara uma bebida morna para acalmar o coração.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu convidou {nome} para seu balcão e serviu um chá especial de camomila celestial com um toque de mel. A bebida morna aqueceu a barriguinha de {nome} e acalmou seu peito.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Chá de Nuvens de Baiacu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1505533338688-f59cd91f0415?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "xícara de chá fumegante na mesa",
        "caption": "Flokinho bebendo chá de camomila com Baiacu.",
        "category": "amizade",
        "week": 7,
        "day": 2
    },
    {
        "headline": "A MELODIA DO CANARINHO",
        "subheadline": "Uma canção doce que traz paz e esperança.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>anarinho pousou no galho mais próximo e cantou uma música antiga sobre reencontros. A voz do passarinho acalmou a mente de {nome}, que começou a abanar o rabo lentamente.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Melodia do Canarinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pássaro colorido cantando na árvore",
        "caption": "Canarinho cantando sua doce melodia para Flokinho.",
        "category": "amizade",
        "week": 7,
        "day": 3
    },
    {
        "headline": "A LEMBRANÇA DO SOFÁ",
        "subheadline": "Flokinho recorda os momentos felizes de preguiça na Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} lembrou de como era bom deitar no {lugar} nas tardes de domingo, recebendo carinho de toda a família. A lembrança, em vez de dor, trouxe um sorriso ao seu focinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Lembrança do Sofá - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "sofá antigo confortável na sala",
        "caption": "Flokinho sorrindo ao lembrar do sofá de casa.",
        "category": "reflexao",
        "week": 7,
        "day": 4
    },
    {
        "headline": "O SINAL DE LUZ ENVIADO",
        "subheadline": "Flokinho envia uma piscadela de luz para consolar seus donos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a ajuda do Querubim, {nome} concentrou seu amor em um raio de sol que atravessou as nuvens e clareou o dia cinza na Terra, iluminando a foto dele na estante.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sinal de Luz Enviado - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "raio de sol atravessando as nuvens",
        "caption": "Flokinho enviando seu sinal de luz para a Terra.",
        "category": "mensagem",
        "week": 7,
        "day": 5
    },
    {
        "headline": "O PÔR DO SOL VIOLETA",
        "subheadline": "O céu pinta-se de cores suaves para acalmar os corações.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> dia terminou com um pôr do sol violeta e dourado. {nome} deitou-se na sua nuvem macia, sabendo que o amor da família Luchesi é eterno e que a saudade é apenas a prova desse elo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Pôr do Sol Violeta - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1529429617329-84dab8eb7729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pôr do sol violeta no horizonte",
        "caption": "Flokinho dormindo sob o manto violeta do céu.",
        "category": "saudade",
        "week": 7,
        "day": 6
    },
    {
        "headline": "O DESAFIO DO VENTO FORTE",
        "subheadline": "Um vento forte tenta afastar Flokinho de suas nuvens favoritas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m vento soprou forte hoje no setor norte. {nome} firmou suas patinhas curtas na nuvem e latiu com coragem contra o vento, mostrando que nenhum Shih Tzu é pequeno demais para o céu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Desafio do Vento Forte - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "vento forte agitando as árvores",
        "caption": "Flokinho resistindo bravamente ao vento forte.",
        "category": "aventura",
        "week": 8,
        "day": 1
    },
    {
        "headline": "O RESGATE DA BOLINHA AZUL PERDIDA",
        "subheadline": "Flokinho arrisca-se em um penhasco de nuvens para salvar seu brinquedo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> {brinquedo} caiu em um vale profundo entre duas nuvens flutuantes. Sem hesitar, {nome} usou suas asas virtuais de vento e planou até o fundo para recuperar seu tesouro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Resgate da Bolinha Azul Perdida - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "penhasco de pedras sob o céu",
        "caption": "Flokinho planando para resgatar sua bolinha azul.",
        "category": "aventura",
        "week": 8,
        "day": 2
    },
    {
        "headline": "O ENCONTRO COM O GRANDE CÃO GUARDIÃO",
        "subheadline": "Um cão enorme e bondoso ensina Flokinho a ser forte.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m enorme cão de raça São Bernardo apareceu para parabenizar {nome} por sua coragem. Ele deu conselhos valiosos sobre como proteger os pequenos amigos do céu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com o Grande Cão Guardião - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro São Bernardo grande e peludo",
        "caption": "Flokinho conversando com o grande São Bernardo.",
        "category": "amizade",
        "week": 8,
        "day": 3
    },
    {
        "headline": "A TRAVESSIA DA PONTE INVISÍVEL",
        "subheadline": "Flokinho confia no seu instinto para cruzar um abismo celestial.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">P</span>ara chegar ao Jardim Secreto, {nome} precisou cruzar uma ponte que só aparecia quando ele dava o passo. Ele respirou fundo, confiou e atravessou sem hesitar.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Travessia da Ponte Invisível - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "ponte de corda suspensa na névoa",
        "caption": "Flokinho cruzando a ponte invisível com coragem.",
        "category": "aventura",
        "week": 8,
        "day": 4
    },
    {
        "headline": "A VITÓRIA CONTRA O MEDO DE TROVÃO",
        "subheadline": "Flokinho aprende que os trovões no céu são apenas tambores de festa.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m barulho forte ecoou. Em vez de tremer como fazia na Terra, {nome} subiu na nuvem mais alta e latiu acompanhando o ritmo dos tambores celestes. O medo tinha sumido.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Vitória Contra o Medo de Trovão - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "raio brilhando no céu nublado",
        "caption": "Flokinho latindo no ritmo da música celestial.",
        "category": "humor",
        "week": 8,
        "day": 5
    },
    {
        "headline": "O DESCANSO DO PEQUENO GUERREIRO",
        "subheadline": "Flokinho dorme com a certeza de sua força interna.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>epois de demonstrar tanta coragem, {nome} deitou-se no seu lugar favorito. Ele dormiu um sono profundo e tranquilo, sabendo que é o guardião de suas próprias memórias.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso do Pequeno Guerreiro - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1511275539165-cc46b1ee8960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama aconchegante com travesseiros",
        "caption": "Flokinho descansando após suas provações de coragem.",
        "category": "reflexao",
        "week": 8,
        "day": 6
    },
    {
        "headline": "O ENCONTRO COM SÓCRATES",
        "subheadline": "Flokinho conhece um gato filósofo muito peculiar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} passeava quando viu Sócrates, um gato cinza de olhos profundos, meditando sobre uma nuvem. O gato apenas abriu um olho e disse: 'Seja bem-vindo, jovem pensador de quatro patas'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1520119862149-6e4b1ad93475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato cinza de olhos verdes",
        "caption": "Flokinho conhecendo Sócrates no jardim celestial.",
        "category": "amizade",
        "week": 9,
        "day": 1
    },
    {
        "headline": "O DEBATE SOBRE OS HUMANOS",
        "subheadline": "Uma conversa filosófica sobre o comportamento dos donos na Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} e Sócrates debateram por horas por que os humanos insistem em recolher a sujeira deles em saquinhos. Sócrates concluiu que é um ritual de adoração aos pets.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Debate Sobre os Humanos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "caderno antigo com anotações",
        "caption": "Flokinho e Sócrates em debate filosófico.",
        "category": "reflexao",
        "week": 9,
        "day": 2
    },
    {
        "headline": "A ARTE DE CAÇAR BORBOLETAS VIRTUAIS",
        "subheadline": "Sócrates ensina Flokinho a brincar de caça sem machucar a natureza.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates mostrou como criar borboletas feitas de poeira estelar. {nome} correu atrás delas por todo o salão, tentando pegá-las com patadas leves que desfaziam a luz.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Arte de Caçar Borboletas Virtuais - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "borboleta amarela no jardim",
        "caption": "Flokinho caçando borboletas de poeira estelar.",
        "category": "humor",
        "week": 9,
        "day": 3
    },
    {
        "headline": "O COMPARTILHAMENTO DO SOL",
        "subheadline": "Cão e gato dividem o mesmo espaço quentinho de sol.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">E</span>les encontraram um feixe de sol perfeito. Em vez de brigarem, {nome} deitou no pé de Sócrates, e o gato ronronou baixinho, selando a paz entre as espécies.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Compartilhamento do Sol - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "raio de sol iluminando o chão",
        "caption": "Flokinho e Sócrates dividindo o feixe de sol.",
        "category": "amizade",
        "week": 9,
        "day": 4
    },
    {
        "headline": "O CONSELHO DE SÓCRATES",
        "subheadline": "O gato ensina Flokinho a lidar com a saudade terrena.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates explicou que a saudade é apenas o amor que se recusa a morrer. Ele disse que {dono} sente a presença dele sempre que lembra das manias engraçadas do pet.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Conselho de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "livro aberto com páginas amareladas",
        "caption": "Sócrates consolando Flokinho com suas palavras sábias.",
        "category": "reflexao",
        "week": 9,
        "day": 5
    },
    {
        "headline": "O SONO DA TRÉGUA",
        "subheadline": "Flokinho e Sócrates dormem lado a lado nas nuvens macias.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span>s dois novos amigos deitaram-se juntos na nuvem mais fofa. O ronrom do gato e a respiração calma do cão criaram uma melodia de paz que ecoou pelo céu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono da Trégua - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato e cachorro dormindo juntos",
        "caption": "Flokinho e Sócrates dormindo lado a lado.",
        "category": "amizade",
        "week": 9,
        "day": 6
    },
    {
        "headline": "A DESCOBERTA DA TAVERNA PET",
        "subheadline": "Flokinho encontra o bar mais famoso do céu dos animais.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} seguiu o som de latidos alegres e encontrou a Taverna de Baiacu, um vira-lata simpático com um lenço vermelho no pescoço. O bar serve água fresca de todos os sabores.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Descoberta da Taverna Pet - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "bar clássico com garrafas coloridas",
        "caption": "Flokinho chegando à taverna de Baiacu.",
        "category": "aventura",
        "week": 10,
        "day": 1
    },
    {
        "headline": "O DRINK DE ÁGUA DE COCO E CARNE",
        "subheadline": "Baiacu prepara um coquetel especial para o novo cliente.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu preparou o 'Glória Canina': água de coco gelada com essência de {comida}. {nome} bebeu tudo em um segundo e pediu chorando por mais um copo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Drink de Água de Coco e Carne - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "copo de coquetel com canudo",
        "caption": "Flokinho provando o coquetel de Baiacu.",
        "category": "comida",
        "week": 10,
        "day": 2
    },
    {
        "headline": "AS HISTÓRIAS DE VIRA-LATA",
        "subheadline": "Baiacu diverte a todos com relatos de suas aventuras na Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu contou como escapou de três carrocinhas na Terra antes de virar o bartender oficial do céu. Todos os pets riram com as peripécias do amigo de quatro patas.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"As Histórias de Vira-Lata - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro vira-lata sorrindo",
        "caption": "Baiacu contando suas histórias para a taverna.",
        "category": "humor",
        "week": 10,
        "day": 3
    },
    {
        "headline": "O CORAL DOS UIVADORES",
        "subheadline": "Uma noite de cantoria animada com todos os clientes do bar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o anoitecer, Baiacu puxou o coro de uivos dedicados à lua celestial. {nome} afinou a voz e latiu junto, fazendo todo mundo aplaudir seu talento vocal.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Coral dos Uivadores - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "lua cheia brilhando no céu escuro",
        "caption": "Flokinho participando do coral noturno na taverna.",
        "category": "amizade",
        "week": 10,
        "day": 4
    },
    {
        "headline": "O PETISCO CORTESIA DA CASA",
        "subheadline": "Baiacu oferece um osso especial para Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>omo boas-vindas, Baiacu deu a {nome} um osso defumado que nunca acaba. {nome} passou a noite roendo o osso no canto do bar, sentindo-se em casa.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Petisco Cortesia da Casa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "osso de brinquedo na grama",
        "caption": "Flokinho roendo seu osso de cortesia.",
        "category": "comida",
        "week": 10,
        "day": 5
    },
    {
        "headline": "O DESCANSO NO BALCÃO",
        "subheadline": "Flokinho adormece sob o som dos uivos suaves do bar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>ansado de tanta cantoria e petiscos, {nome} deitou-se nos pés do balcão de Baiacu. Ele dormiu ouvindo o som dos copos e os latidos amigos que enchiam o ambiente de alegria.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso no Balcão - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "balcão de bar de madeira rústica",
        "caption": "Flokinho dormindo tranquilo na taverna de Baiacu.",
        "category": "amizade",
        "week": 10,
        "day": 6
    },
    {
        "headline": "O PLANEJAMENTO DA EXPEDIÇÃO",
        "subheadline": "Flokinho, Sócrates e Baiacu decidem explorar as terras distantes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span>s três amigos reuniram-se na taverna. Canarinho trouxe um mapa desenhado em uma folha seca. Eles decidiram viajar até a Colina dos Brinquedos Gigantes no dia seguinte.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Planejamento da Expedição - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "mapa antigo estendido na mesa",
        "caption": "Flokinho estudando o mapa da expedição.",
        "category": "aventura",
        "week": 11,
        "day": 1
    },
    {
        "headline": "A PARTIDA PELA MANHÃ",
        "subheadline": "O grupo inicia a caminhada sob a névoa dourada do amanhecer.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om mochilas cheias de bifinhos de carne, o grupo partiu. {nome} liderou a fila com passos decididos e o rabinho erguido, sentindo a emoção da aventura.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Partida Pela Manhã - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "amanhecer com névoa dourada no campo",
        "caption": "Flokinho liderando seus amigos na caminhada.",
        "category": "aventura",
        "week": 11,
        "day": 2
    },
    {
        "headline": "A TRAVESSIA DO RIO DE BOLHAS",
        "subheadline": "Eles precisam cruzar um rio feito de bolhas de sabão gigantes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> rio era composto por bolhas flutuantes. Baiacu saltou primeiro, seguido por {nome}. Sócrates preferiu ir nas costas de um cisne de vento para não arriscar a elegância.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Travessia do Rio de Bolhas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "bolhas de sabão gigantes flutuando",
        "caption": "Flokinho pulando entre as bolhas do rio celestial.",
        "category": "aventura",
        "week": 11,
        "day": 3
    },
    {
        "headline": "O PIQUENIQUE NO CAMINHO",
        "subheadline": "Uma pausa para repor as energias com comidinhas gostosas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">E</span>les pararam sob a sombra de uma nuvem de algodão-doce. Dividiram os bifinhos de carne e trocaram histórias sobre suas travessuras favoritas na Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Piquenique no Caminho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "toalha de piquenique com comidas",
        "caption": "Flokinho e seus amigos descansando no piquenique.",
        "category": "comida",
        "week": 11,
        "day": 4
    },
    {
        "headline": "A COLINA DOS BRINQUEDOS GIGANTES",
        "subheadline": "Chegada ao destino repleto de brinquedos enormes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">E</span>les chegaram à colina e encontraram uma {brinquedo} do tamanho de uma casa! {nome} correu e pulou em cima dela, rolando de alegria com os amigos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Colina dos Brinquedos Gigantes - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "bola gigante colorida na colina",
        "caption": "Flokinho brincando na colina dos brinquedos gigantes.",
        "category": "aventura",
        "week": 11,
        "day": 5
    },
    {
        "headline": "O RETORNO TRIUNFAL",
        "subheadline": "Os aventureiros voltam cansados e felizes para casa.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> grupo retornou ao entardecer. {nome} deitou-se na beira da nuvem ao lado de Sócrates e Baiacu, sabendo que tinha os melhores amigos do universo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Retorno Triunfal - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pôr do sol com cores quentes no horizonte",
        "caption": "Flokinho dormindo cercado por seus amigos de aventura.",
        "category": "amizade",
        "week": 11,
        "day": 6
    },
    {
        "headline": "A ABERTURA DO FESTIVAL",
        "subheadline": "Flokinho participa do desfile de abertura do festival dos animais.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje começou o Festival Anual dos Pets. {nome} desfilou com uma coroa de margaridas na cabeça, abanando o rabo para a plateia de anjos que aplaudia sua fofura.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Abertura do Festival - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "desfile de cães com enfeites floridos",
        "caption": "Flokinho desfilando orgulhoso com sua coroa de flores.",
        "category": "evento",
        "week": 12,
        "day": 1
    },
    {
        "headline": "O CONCURSO DO UIVO MAIS BONITO",
        "subheadline": "Flokinho compete com outros cãezinhos cantores.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} subiu ao palco e soltou um uivo que terminou com um latido fofo. A plateia adorou e ele ganhou o prêmio de 'Latido Mais Carismático' do festival.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Concurso do Uivo Mais Bonito - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "palco de teatro iluminado",
        "caption": "Flokinho recebendo o troféu de latido carismático.",
        "category": "evento",
        "week": 12,
        "day": 2
    },
    {
        "headline": "A DANÇA DAS PATINHAS",
        "subheadline": "Flokinho ensina os amigos a dançarem sua coreografia favorita.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} inventou a dança de rodar três vezes antes de deitar. Logo, todos os cachorros e até o Sócrates estavam rodando juntos na pista de dança de nuvem.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Dança das Patinhas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1477884213980-b778400c9045?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pista de dança colorida e iluminada",
        "caption": "Flokinho ensinando os cães a dançarem na pista.",
        "category": "humor",
        "week": 12,
        "day": 3
    },
    {
        "headline": "A BARRACA DE BIFINHOS DE BAIACU",
        "subheadline": "Baiacu prepara petiscos especiais para os visitantes do festival.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu montou uma barraca que servia espetinhos de {comida} celestial. {nome} ajudou a distribuir os petiscos para os filhotinhos menores que estavam na fila.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Barraca de Bifinhos de Baiacu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "barraca de comida de rua iluminada",
        "caption": "Flokinho ajudando Baiacu na barraca de petiscos.",
        "category": "comida",
        "week": 12,
        "day": 4
    },
    {
        "headline": "O SHOW DE FOGOS DE LUZ FRIA",
        "subheadline": "Explosões de luz colorida que divertem os animais sem assustar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">À</span> noite, o céu encheu-se de fogos de luz fria que faziam formatos de patinhas e ossos. {nome} assistiu deitado ao lado de Sócrates, fascinado pelas cores.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Show de Fogos de Luz Fria - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "fogos de artifício coloridos no céu noturno",
        "caption": "Flokinho admirando os fogos de artifício celestes.",
        "category": "evento",
        "week": 12,
        "day": 5
    },
    {
        "headline": "O SONO PÓS-FESTA",
        "subheadline": "Flokinho dorme exausto após um dia repleto de celebrações.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om as pernas cansadas de tanto dançar, {nome} deitou no seu cantinho quentinho. Ele dormiu feliz, sonhando com as cores e os sons do festival dos pets.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono Pós-Festa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto de dormir aconchegante",
        "caption": "Flokinho dormindo profundamente após o festival.",
        "category": "evento",
        "week": 12,
        "day": 6
    },
    {
        "headline": "O CONVITE DO ARCO-ÍRIS",
        "subheadline": "Flokinho recebe permissão para caminhar na ponte das cores.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje o Canarinho trouxe uma autorização especial: {nome} foi convidado para passear pela famosa Ponte do Arco-Íris, o caminho que conecta o céu a todos os corações da Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Convite do Arco-Íris - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "arco-íris perfeito sobre o vale verde",
        "caption": "Flokinho admirando a base do arco-íris.",
        "category": "aventura",
        "week": 13,
        "day": 1
    },
    {
        "headline": "A ESCALA DO FEIXE VERMELHO",
        "subheadline": "Flokinho descobre que a cor vermelha tem cheiro de morango.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>ando seus primeiros passos na ponte, {nome} pisou no feixe vermelho e sentiu um aroma doce de morangos silvestres. Ele correu de um lado para o outro na cor colorida.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Escala do Feixe Vermelho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "campo de morangos vermelhos brilhantes",
        "caption": "Flokinho brincando na faixa vermelha do arco-íris.",
        "category": "aventura",
        "week": 13,
        "day": 2
    },
    {
        "headline": "O SALTO NO FEIXE AMARELO",
        "subheadline": "A cor amarela traz uma sensação de alegria e energia pura.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o pular para a faixa amarela, {nome} sentiu seu pelo brilhar como ouro. Ele latiu de emoção ao perceber que cada cor transmitia um sentimento bom diferente.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Salto no Feixe Amarelo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "luz amarela brilhante e quente",
        "caption": "Flokinho saltando na faixa amarela da ponte.",
        "category": "aventura",
        "week": 13,
        "day": 3
    },
    {
        "headline": "O ENCONTRO COM OUTROS VIAJANTES",
        "subheadline": "Flokinho conversa com pets que estão enviando amor para a Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a metade da ponte, {nome} encontrou outros cãezinhos que estavam olhando para baixo e enviando pensamentos positivos para seus donos. Eles compartilharam dicas de sinais.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com Outros Viajantes - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "grupo de cachorrinhos felizes brincando",
        "caption": "Flokinho conversando com outros cães na ponte.",
        "category": "amizade",
        "week": 13,
        "day": 4
    },
    {
        "headline": "O MIRANTE DO ARCO-ÍRIS",
        "subheadline": "O ponto mais alto da ponte, de onde se vê a Terra inteira.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} sentou-se no topo da ponte. Dali ele conseguiu ver a casa de {familia}. Ele latiu três vezes bem alto, sabendo que seu amor viajava naquelas cores.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Mirante do Arco-Íris - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "vista panorâmica da Terra do espaço",
        "caption": "Flokinho olhando para a Terra do topo da ponte.",
        "category": "reflexao",
        "week": 13,
        "day": 5
    },
    {
        "headline": "O RETORNO COM PATAS COLORIDAS",
        "subheadline": "Flokinho volta do passeio com as patinhas brilhando em tons pastéis.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o descer da ponte, as patinhas de {nome} continuaram brilhando com as cores do arco-íris por horas. Ele dormiu feliz, deixando marcas coloridas na nuvem.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Retorno com Patas Coloridas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pés de cachorro fofos na grama",
        "caption": "Flokinho descansando com suas patinhas coloridas.",
        "category": "humor",
        "week": 13,
        "day": 6
    },
    {
        "headline": "A DESCOBERTA DO VALE DOCE",
        "subheadline": "Flokinho encontra um rio de iogurte natural geladinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} e Canarinho voaram até o Vale Doce. Lá eles encontraram fontes que jorravam iogurte sabor morango e banana. {nome} lambeu as bordas da fonte com alegria.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Descoberta do Vale Doce - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1499346030926-f872da17868a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "fonte de pedra com água cristalina",
        "caption": "Flokinho deliciando-se com o iogurte celeste.",
        "category": "comida",
        "week": 14,
        "day": 1
    },
    {
        "headline": "A BATALHA DE IOGURTE COM BAIACU",
        "subheadline": "Uma brincadeira divertida que deixa todo mundo sujo e feliz.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu apareceu e jogou uma patada de iogurte em {nome}. Começou uma batalha divertida onde todos terminaram brancos e cheirosos de baunilha.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Batalha de Iogurte com Baiacu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "respingos de líquido branco no ar",
        "caption": "Flokinho brincando de batalha de iogurte com Baiacu.",
        "category": "humor",
        "week": 14,
        "day": 2
    },
    {
        "headline": "A LIMPEZA AUTOMÁTICA DO PELO",
        "subheadline": "As nuvens secadoras limpam os pets instantaneamente.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">P</span>reocupado em ter que tomar o {odio}, {nome} correu para a nuvem secadora. Em segundos, ela sugou todo o iogurte e o deixou com o pelo escovado e brilhante.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Limpeza Automática do Pelo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "nuvem branca e macia soprando vento",
        "caption": "Flokinho saindo macio e limpo da nuvem secadora.",
        "category": "humor",
        "week": 14,
        "day": 3
    },
    {
        "headline": "A ÁRVORE DOS BISCOITOS DE MEL",
        "subheadline": "Biscoitos crocantes que nascem nos galhos baixos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} encontrou árvores com biscoitinhos em formato de coração pendurados. Ele pulou e pegou um biscoito com sabor de mel, dividindo o resto com o Canarinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Árvore dos Biscoitos de Mel - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "biscoitos caseiros decorados na mesa",
        "caption": "Flokinho pegando biscoitos na árvore de mel.",
        "category": "comida",
        "week": 14,
        "day": 4
    },
    {
        "headline": "O PIQUENIQUE DO VALE",
        "subheadline": "Os três amigos aproveitam a tarde ensolarada com lanchinhos doces.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>entados na grama que cheira a hortelã, {nome}, Sócrates e Baiacu saborearam os biscoitos e o iogurte, conversando sobre as melhores comidas da Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Piquenique do Vale - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "toalha de piquenique com doces coloridos",
        "caption": "Flokinho e amigos aproveitando o banquete doce.",
        "category": "amizade",
        "week": 14,
        "day": 5
    },
    {
        "headline": "O SONO DOCE E PROFUNDO",
        "subheadline": "Flokinho dorme com sabor de mel no focinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a barriga cheia de doces e o coração transbordando de alegria, {nome} deitou-se na sua nuvem. Ele dormiu um sono profundo, embalado pela brisa morna do vale.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono Doce e Profundo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto aconchegante com tons pastéis",
        "caption": "Flokinho dormindo com um sorriso doce no focinho.",
        "category": "reflexao",
        "week": 14,
        "day": 6
    },
    {
        "headline": "A ENTRADA NA FLORESTA MÁGICA",
        "subheadline": "Flokinho caminha por um bosque onde as folhas contam piadas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>onduzido por Sócrates, {nome} entrou na Floresta dos Murmúrios. O vento passava pelas folhas fazendo barulhos que pareciam risadinhas e piadas de cachorros.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Entrada na Floresta Mágica - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1472214222541-d510753a4907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "floresta misteriosa com luz solar",
        "caption": "Flokinho explorando os caminhos da floresta.",
        "category": "aventura",
        "week": 15,
        "day": 1
    },
    {
        "headline": "O MISTÉRIO DA SOMBRA BRINCALHONA",
        "subheadline": "A própria sombra de Flokinho brinca de correr atrás dele.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} percebeu que sua sombra estava se movendo de forma independente, imitando suas manias de Shih Tzu. Eles correram em círculos no gramado, rindo muito.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Mistério da Sombra Brincalhona - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "sombra de cachorro na grama ensolarada",
        "caption": "Flokinho brincando de correr com sua própria sombra.",
        "category": "humor",
        "week": 15,
        "day": 2
    },
    {
        "headline": "O RIACHO DAS PALAVRAS DOCES",
        "subheadline": "As águas do riacho repetem os elogios recebidos na Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o beber água no riacho, {nome} ouviu vozes suaves dizendo: 'Bom garoto', 'Lindo do papai' e 'Floquinho de Neve'. Ele latiu de alegria ao reconhecer o carinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Riacho das Palavras Doces - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "riacho de águas límpidas na floresta",
        "caption": "Flokinho ouvindo as vozes carinhosas no riacho.",
        "category": "mensagem",
        "week": 15,
        "day": 3
    },
    {
        "headline": "O ENCONTRO COM A CORUJA SÁBIA",
        "subheadline": "A coruja conselheira do bosque oferece palavras de conforto.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>ma coruja branca de óculos dourados pousou perto de {nome}. Ela explicou que todas as palavras de amor ditas para ele na Terra continuam gravadas na floresta.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com a Coruja Sábia - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "coruja branca de olhos grandes no galho",
        "caption": "Flokinho conversando com a coruja sábia da floresta.",
        "category": "reflexao",
        "week": 15,
        "day": 4
    },
    {
        "headline": "A COLHEITA DOS GRAVETOS DE LUZ",
        "subheadline": "Flokinho colhe gravetos que brilham no escuro para brincar à noite.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} encontrou galhos caídos que emitiam uma luz azulada. Ele recolheu três deles para usar como brinquedos luminosos nas brincadeiras com Baiacu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Colheita dos Gravetos de Luz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "galhos de árvores secos na floresta",
        "caption": "Flokinho orgulhoso com seus gravetos luminosos.",
        "category": "aventura",
        "week": 15,
        "day": 5
    },
    {
        "headline": "O SONO SOB AS FOLHAS DE PRATA",
        "subheadline": "Flokinho dorme sob o teto de folhas brilhantes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span>s amigos deitaram-se sob uma árvore cujas folhas brilhavam como prata. {nome} dormiu sentindo-se seguro e abraçado pela energia acolhedora da floresta.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono sob as Folhas de Prata - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "folhas brilhantes contra o céu noturno",
        "caption": "Flokinho adormecendo sob o brilho das folhas de prata.",
        "category": "amizade",
        "week": 15,
        "day": 6
    },
    {
        "headline": "A CHEGADA AO DESFILADEIRO",
        "subheadline": "Flokinho e seus amigos visitam o lugar onde nascem as brisas da Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} viajou com Baiacu até o Desfiladeiro dos Ventos. O local é repleto de correntes de ar mornas que sobem e descem, perfeitas para planar e dar cambalhotas.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Chegada ao Desfiladeiro - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "vale profundo com vento forte nas nuvens",
        "caption": "Flokinho admirando o desfiladeiro dos ventos.",
        "category": "aventura",
        "week": 16,
        "day": 1
    },
    {
        "headline": "O VOO DE ORELHAS",
        "subheadline": "Flokinho usa o vento para planar com suas orelhas fofas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>orrendo em direção à borda, {nome} saltou e abriu suas orelhas. O vento o ergueu suavemente, fazendo-o planar como uma pequena pipa de Shih Tzu sob aplausos de todos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Voo de Orelhas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1505533338688-f59cd91f0415?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pequeno avião de papel voando no céu",
        "caption": "Flokinho planando alegremente com a brisa celestial.",
        "category": "humor",
        "week": 16,
        "day": 2
    },
    {
        "headline": "A CAÇA AOS REDEMOINHOS DE ALGODÃO",
        "subheadline": "Pequenos tornados de nuvens que fazem cócegas nas patinhas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">P</span>equenos redemoinhos de nuvens fofas corriam pelo desfiladeiro. {nome} correu atrás deles, deixando-se rodopiar no ar e pousando com um latido feliz na grama fofa.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Caça aos Redemoinhos de Algodão - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "redemoinho de vento suave com folhas",
        "caption": "Flokinho brincando de rodopiar com os redemoinhos.",
        "category": "humor",
        "week": 16,
        "day": 3
    },
    {
        "headline": "O PIQUENIQUE DO VENTO",
        "subheadline": "Bifinhos que flutuam na altura exata do focinho do pet.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>o desfiladeiro, Baiacu soltou os bifinhos de carne que flutuavam no ar. {nome} precisava dar pequenos saltos para pegá-los, transformando o almoço em brincadeira.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Piquenique do Vento - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "comida deliciosa flutuando no ar",
        "caption": "Flokinho pegando bifinhos flutuantes com saltos ágeis.",
        "category": "comida",
        "week": 16,
        "day": 4
    },
    {
        "headline": "A MENSAGEM SOPRADA AO SUL",
        "subheadline": "Flokinho usa o vento forte para enviar um abraço à sua família Luchesi.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} latiu bem forte na direção do vento sul. O vento carregou o latido morno, prometendo entregá-lo como um suspiro de conforto para a casa de seus humanos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Mensagem Soprada ao Sul - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "vento soprando folhas douradas no parque",
        "caption": "Flokinho enviando seus latidos de amor pelo vento sul.",
        "category": "mensagem",
        "week": 16,
        "day": 5
    },
    {
        "headline": "O SONO NA NUVEM REDE",
        "subheadline": "Flokinho dorme em uma nuvem que balança com o vento.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> brisa do desfiladeiro moldou uma nuvem em formato de rede suspensa. {nome} deitou-se nela e adormeceu, embalado pelo balanço suave do vento celestial.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono na Nuvem Rede - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1529429617329-84dab8eb7729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "rede de descanso balançando entre árvores",
        "caption": "Flokinho dormindo na nuvem rede que balança devagar.",
        "category": "reflexao",
        "week": 16,
        "day": 6
    },
    {
        "headline": "A FUGA DA NUVEM DE SABÃO",
        "subheadline": "Flokinho vê uma nuvem cor-de-rosa com cheiro de xampu e corre.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} avistou uma nuvem perfumada que soltava bolhas de sabão. Suspeitando ser o terrível {odio}, ele correu a toda velocidade e se escondeu atrás de uma estátua dourada.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Fuga da Nuvem de Sabão - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "nuvem rosa suave com espuma",
        "caption": "Flokinho fugindo da nuvem com bolhas de sabão.",
        "category": "humor",
        "week": 17,
        "day": 1
    },
    {
        "headline": "A NEGOCIAÇÃO DO QUERUBIM",
        "subheadline": "O anjo tenta convencer Flokinho de que o banho no céu é divertido.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim ajoelhou-se e explicou a {nome} que a água celestial cura e massageia o corpo. Ele ofereceu um pedaço de {comida} como suborno para ele dar o primeiro passo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Negociação do Querubim - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "anjo de asas brancas sorrindo",
        "caption": "Flokinho ouvindo a proposta do Querubim da Guarda.",
        "category": "amizade",
        "week": 17,
        "day": 2
    },
    {
        "headline": "A INTERVENÇÃO DE SÓCRATES",
        "subheadline": "O gato ensina a técnica de se limpar com a luz do sol.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates explicou que os animais de elite usam banho de sol e vento. Ele mostrou a {nome} como rolar na grama dourada para tirar toda a poeira cósmica do pelo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Intervenção de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato deitando sob a luz do sol",
        "caption": "Sócrates ensinando Flokinho a tomar banho de sol.",
        "category": "humor",
        "week": 17,
        "day": 3
    },
    {
        "headline": "O TESTE COM A BOLINHA AZUL",
        "subheadline": "Flokinho entra na nuvem de banho para salvar seu brinquedo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim jogou a {brinquedo} dentro da nuvem de espuma. Esquecendo o medo, {nome} pulou lá dentro e descobriu que a espuma faz cócegas e não arde os olhos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Teste com a Bolinha Azul - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "bolinha azul em meio à espuma branca",
        "caption": "Flokinho pulando na nuvem de espuma para pegar o brinquedo.",
        "category": "aventura",
        "week": 17,
        "day": 4
    },
    {
        "headline": "A SACUDIDA CELESTIAL",
        "subheadline": "Flokinho espalha água brilhante por todo o jardim celeste.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o sair da nuvem, {nome} sacudiu o pelo com toda força. Gotículas brilhantes voaram como pequenas estrelas, atingindo Sócrates, que apenas suspirou de resignação.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Sacudida Celestial - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gotas de água brilhando no ar ensolarado",
        "caption": "Flokinho sacudindo o pelo após o banho com os amigos.",
        "category": "humor",
        "week": 17,
        "day": 5
    },
    {
        "headline": "O PELO MAIS FOFO DO UNIVERSO",
        "subheadline": "Flokinho dorme exibindo seu pelo brilhante e macio.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om o pelo escovado, branquinho e cheiroso como flores do paraíso, {nome} enrolou-se na nuvem do {lugar} celestial e dormiu, orgulhoso de sua beleza.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Pelo Mais Fofo do Universo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1511275539165-cc46b1ee8960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "travesseiro branco macio no quarto",
        "caption": "Flokinho dormindo macio e cheiroso após o banho.",
        "category": "reflexao",
        "week": 17,
        "day": 6
    },
    {
        "headline": "A CONQUISTA DA NUVEM QUENTE",
        "subheadline": "Flokinho decide que a nuvem do Querubim é o seu novo lar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} encontrou a nuvem de dormir do Querubim da Guarda. Ele subiu silenciosamente e deitou-se bem no cantinho inferior, exatamente como fazia com seu {amor} na Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Conquista da Nuvem Quente - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1520119862149-6e4b1ad93475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama com colchas brancas e macias",
        "caption": "Flokinho deitado no pé da cama do anjo.",
        "category": "humor",
        "week": 18,
        "day": 1
    },
    {
        "headline": "A TENTATIVA DE RETIRADA",
        "subheadline": "O anjo tenta mover Flokinho, que finge estar muito pesado.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim tentou pegar {nome} no colo para colocá-lo em sua própria nuvem. {nome} fez-se de estátua de Shih Tzu pesada e soltou um gemido preguiçoso para não sair dali.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Tentativa de Retirada - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "anjo tentando levantar algo leve",
        "caption": "Flokinho fazendo pose de preguiçoso na cama.",
        "category": "humor",
        "week": 18,
        "day": 2
    },
    {
        "headline": "O APOIO MORAL DE SÓCRATES",
        "subheadline": "O gato incentiva Flokinho a manter a tradição de deitar no pé da cama.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates passou pelo quarto e disse: 'Nunca ceda seu território. O pé da cama é um direito sagrado dos pets'. {nome} latiu em concordância e continuou firme.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Apoio Moral de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato olhando de soslaio na porta",
        "caption": "Sócrates aconselhando Flokinho a manter sua posição.",
        "category": "amizade",
        "week": 18,
        "day": 3
    },
    {
        "headline": "A NEGOCIAÇÃO DA ALMOFADA",
        "subheadline": "O Querubim cede e traz uma almofada extra de carne para o pet.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>esistindo de tirar {nome}, o anjo colocou uma almofada perfumada com cheiro de {comida} no pé da cama. {nome} aceitou a almofada e deitou-se com o focinho nela.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Negociação da Almofada - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "almofada aconchegante de algodão",
        "caption": "Flokinho descansando na almofada especial no pé da cama.",
        "category": "comida",
        "week": 18,
        "day": 4
    },
    {
        "headline": "O RONCO CELESTIAL",
        "subheadline": "Flokinho dorme tão profundamente que seu ronco vira música para o céu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>ormindo no seu cantinho conquistado, {nome} começou a roncar baixinho. Os anjos acharam o som tão fofo que usaram o ritmo para afinar as harpas celestes.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Ronco Celestial - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "harpa de ouro brilhando na sala",
        "caption": "Flokinho roncando baixinho na cama do anjo.",
        "category": "humor",
        "week": 18,
        "day": 5
    },
    {
        "headline": "A VITÓRIA DO PREGUIÇOSO",
        "subheadline": "Flokinho passa a noite toda no pé da cama e acorda feliz.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> amanhecer chegou e {nome} continuava no mesmo lugar. Ele abriu os olhos, deu um lambeijo no Querubim e soube que tinha vencido a batalha pelo pé da cama.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Vitória do Preguiçoso - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "janela ensolarada de manhã",
        "caption": "Flokinho acordando feliz no seu lugar conquistado.",
        "category": "reflexao",
        "week": 18,
        "day": 6
    },
    {
        "headline": "O SUMIÇO DA BOLINHA",
        "subheadline": "Flokinho não encontra seu brinquedo favorito e inicia as buscas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} acordou querendo brincar, mas a {brinquedo} não estava no seu cantinho. Ele começou a farejar cada nuvem e a cavar buracos imaginários no tapete celeste.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sumiço da Bolinha - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "carpete felpudo de cor bege",
        "caption": "Flokinho farejando à procura da sua bolinha azul.",
        "category": "aventura",
        "week": 19,
        "day": 1
    },
    {
        "headline": "A PISTA DE CANARINHO",
        "subheadline": "O passarinho guia viu a bolinha perto da taverna de Baiacu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>anarinho pousou no nariz de {nome} e informou que viu a bolinha azul rolando na direção do bar de Baiacu. {nome} partiu correndo em disparada.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Pista de Canarinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pássaro azul voando no céu limpo",
        "caption": "Canarinho apontando o caminho para Flokinho.",
        "category": "amizade",
        "week": 19,
        "day": 2
    },
    {
        "headline": "A INVESTIGAÇÃO NO BAR",
        "subheadline": "Flokinho questiona Baiacu sobre o paradeiro do brinquedo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>hegando ao bar, {nome} latiu apontando para o chão. Baiacu riu e disse que viu a bolinha rolar para debaixo do barril de suco de carne, mas que estava muito escuro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Investigação no Bar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "barril de madeira rústica na taverna",
        "caption": "Flokinho procurando debaixo do barril de Baiacu.",
        "category": "humor",
        "week": 19,
        "day": 3
    },
    {
        "headline": "O RESGATE COOPERATIVO",
        "subheadline": "Cão, gato e passarinho unem forças para recuperar o objeto.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates usou a pata para empurrar, Canarinho iluminou com as asas e {nome} puxou com a boca. Juntos, conseguiram tirar a amada {brinquedo} de debaixo do barril.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Resgate Cooperativo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "grupo de animais olhando para baixo",
        "caption": "Flokinho e seus amigos comemorando o resgate do brinquedo.",
        "category": "amizade",
        "week": 19,
        "day": 4
    },
    {
        "headline": "A MASTIGAÇÃO DA VITÓRIA",
        "subheadline": "Flokinho passa a tarde roendo sua bolinha no sofá da sala celestial.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} deitou-se no seu sofá de nuvem e passou a tarde mordendo a bolinha, fazendo aquele barulhinho chato de borracha que todo mundo no céu adorava ouvir.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Mastigação da Vitória - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "bolinha de cachorro mordida",
        "caption": "Flokinho roendo sua bolinha azul no sofá celestial.",
        "category": "comida",
        "week": 19,
        "day": 5
    },
    {
        "headline": "O SONO COM O BRINQUEDO NA BOCA",
        "subheadline": "Flokinho adormece sem soltar a bolinha azul para não perder novamente.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om medo de perder seu brinquedo, {nome} adormeceu segurando a bolinha firme entre as patinhas. Ele dormiu sabendo que seu tesouro estava seguro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono com o Brinquedo na Boca - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorrinho dormindo abraçado com bola",
        "caption": "Flokinho dormindo agarrado com sua bolinha azul.",
        "category": "reflexao",
        "week": 19,
        "day": 6
    },
    {
        "headline": "A CARINHA DE COITADO",
        "subheadline": "Flokinho usa sua melhor técnica de sedução para ganhar comida extra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} sentou-se na cozinha do refeitório celeste. Ele abaixou a cabeça, arregalou os olhos e soltou um gemido triste, a famosa carinha de coitado que ninguém resiste.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Carinha de Coitado - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "olhos de cachorro expressivos olhando",
        "caption": "Flokinho fazendo carinha de coitado para o cozinheiro.",
        "category": "humor",
        "week": 20,
        "day": 1
    },
    {
        "headline": "O SUBORNO DO CHEF COZINHEIRO",
        "subheadline": "O anjo cozinheiro dá um bifinho extra escondido dos outros.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">R</span>endido pelos olhos de {nome}, o anjo da cozinha olhou para os lados e jogou um pedaço suculento de {comida} debaixo da mesa. {nome} engoliu em um segundo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Suborno do Chef Cozinheiro - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pedaço de carne grelhada apetitoso",
        "caption": "Flokinho ganhando bifinho de carne do cozinheiro.",
        "category": "comida",
        "week": 20,
        "day": 2
    },
    {
        "headline": "A PARTILHA COM SÓCRATES",
        "subheadline": "Flokinho decide dividir uma lasca do petisco com o gato.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates apareceu com cara de desdém. {nome}, comovido, empurrou uma lasquinha do bifinho com o focinho. O gato agradeceu com uma lambida elegante na pata.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Partilha com Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato e cachorro perto do pote",
        "caption": "Flokinho dividindo seu petisco com Sócrates.",
        "category": "amizade",
        "week": 20,
        "day": 3
    },
    {
        "headline": "O ROUBO DO GRAVETO DE BIFINHO",
        "subheadline": "Flokinho rouba um graveto com aroma de carne da horta celestial.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} correu até a horta dos anjos e pegou um graveto que cheirava a carne defumada. Ele correu pelo gramado com o prêmio na boca, perseguido pelo Canarinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Roubo do Graveto de Bifinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "horta bonita com plantas brilhantes",
        "caption": "Flokinho correndo com o graveto com cheiro de bifinho.",
        "category": "aventura",
        "week": 20,
        "day": 4
    },
    {
        "headline": "O CORAL DA DIGESTÃO",
        "subheadline": "Uivos de satisfação após um banquete de carne.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o anoitecer na taverna de Baiacu, {nome} e os outros cães soltaram uivos de gratidão pela barriguinha cheia. Baiacu acompanhou batendo tampas de pote no balcão.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Coral da Digestão - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorros uivando felizes",
        "caption": "Flokinho uivando de barriga cheia no bar de Baiacu.",
        "category": "humor",
        "week": 20,
        "day": 5
    },
    {
        "headline": "A SONECA PESADA",
        "subheadline": "Flokinho dorme o sono dos justos após comer muito bifinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a barriga redonda de tanto comer {comida}, {nome} deitou-se na beira da nuvem. Ele dormiu pesado, sonhando com novos banquetes celestiais de carne.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Soneca Pesada - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto confortável com luz quente",
        "caption": "Flokinho dormindo o sono pesado da digestão.",
        "category": "reflexao",
        "week": 20,
        "day": 6
    },
    {
        "headline": "A INSPIRAÇÃO DA MANHÃ",
        "subheadline": "Flokinho sente que é hora de mandar uma mensagem especial para a Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} acordou com o rabinho abanando de forma diferente. Ele olhou para baixo e latiu na direção do quintal de {familia}, desejando enviar um recado reconfortante.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Inspiração da Manhã - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "jardim ensolarado de manhã",
        "caption": "Flokinho olhando com carinho para a Terra.",
        "category": "mensagem",
        "week": 21,
        "day": 1
    },
    {
        "headline": "A AJUDA DO QUERUBIM ESCRITOR",
        "subheadline": "O anjo traz papel de nuvem e caneta de luz para redigir a carta.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">Q</span>uerubim sentou ao lado de {nome} e disse: 'Dite com seus latidos, eu traduzo para o coração humano'. {nome} começou a latir frases ritmadas de puro amor.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Ajuda do Querubim Escritor - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "caneta de luz escrevendo no papel de nuvem",
        "caption": "Flokinho ditando sua carta para o Querubim.",
        "category": "mensagem",
        "week": 21,
        "day": 2
    },
    {
        "headline": "A TRADUÇÃO DOS LAMBEIJOS",
        "subheadline": "O texto da carta explica que o pet está feliz e livre de dores.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> carta dizia: 'Mãe, pai, estou feliz aqui. Corro sem cansar, durmo no pé de camas de nuvens e como {comida} todo dia. Não chorem, pois meu amor por vocês não tem fim'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Tradução dos Lambeijos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1477884213980-b778400c9045?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "texto manuscrito bonito e elegante",
        "caption": "Flokinho olhando a mensagem escrita pelo anjo.",
        "category": "mensagem",
        "week": 21,
        "day": 3
    },
    {
        "headline": "O SELO DE PATINHA",
        "subheadline": "Flokinho carimba a carta com sua patinha pintada de poeira estelar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} molhou a patinha direita na poeira de uma estrela azul e carimbou o final do papel de nuvem, deixando sua marca registrada de Shih Tzu eterno.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Selo de Patinha - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pegada de cachorro na poeira colorida",
        "caption": "Flokinho carimbando a carta com poeira estelar.",
        "category": "humor",
        "week": 21,
        "day": 4
    },
    {
        "headline": "O LANÇAMENTO PELO VENTO NORTE",
        "subheadline": "A carta é soprada em direção ao céu noturno da Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim dobrou a carta em formato de avião de papel e a lançou na corrente de vento norte. {nome} correu até a beira para assistir à mensagem descer.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Lançamento Pelo Vento Norte - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "avião de papel voando alto nas nuvens",
        "caption": "Flokinho assistindo à carta viajar pelo vento norte.",
        "category": "aventura",
        "week": 21,
        "day": 5
    },
    {
        "headline": "A CONFIRMAÇÃO DO ENVIO",
        "subheadline": "Flokinho dorme em paz sabendo que sua mensagem acalmará a saudade.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a certeza de que a carta chegaria ao coração de {dono}, {nome} deitou na sua nuvem favorita do {lugar} celestial e dormiu um sono profundo e tranquilo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Confirmação do Envio - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama macia de hotel luxuoso",
        "caption": "Flokinho dormindo tranquilo após enviar sua carta.",
        "category": "reflexao",
        "week": 21,
        "day": 6
    },
    {
        "headline": "A TRISTEZA NO QUINTAL",
        "subheadline": "Flokinho vê seus donos olhando para a casinha vazia na Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span>lhando pelo espelho de nuvem, {nome} viu {familia} limpando o quintal com expressões tristes. Ele latiu forte, querendo enviar um sinal de sua presença.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Tristeza no Quintal - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "casinha de cachorro vazia no quintal",
        "caption": "Flokinho olhando triste para sua casinha na Terra.",
        "category": "saudade",
        "week": 22,
        "day": 1
    },
    {
        "headline": "A BUSCA PELO VENTO DE SABOR",
        "subheadline": "Flokinho escolhe a brisa com cheiro de mato molhado.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} pediu ao Canarinho para ajudá-lo a encontrar a corrente de ar que leva aromas para a Terra. Ele queria enviar o cheirinho de terra molhada que ele tanto amava.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Busca Pelo Vento de Sabor - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "grama verde com gotas de chuva e sol",
        "caption": "Flokinho procurando o vento de aromas com Canarinho.",
        "category": "aventura",
        "week": 22,
        "day": 2
    },
    {
        "headline": "O SOPRO MÁGICO",
        "subheadline": "Flokinho sopra com toda força na corrente de ar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om as bochechas cheias de vento celeste, {nome} soprou na direção do quintal da família Luchesi. O vento ganhou velocidade e desceu em direção ao solo terrestre.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sopro Mágico - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "folhas secas voando no jardim ensolarado",
        "caption": "Flokinho soprando a brisa de aromas para a Terra.",
        "category": "mensagem",
        "week": 22,
        "day": 3
    },
    {
        "headline": "O ARREPIO DO AMOR",
        "subheadline": "A família Luchesi sente a brisa quente e lembra do pet com um sorriso.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, {dono} sentiu um vento morno bater no rosto com cheiro de jasmim e carinho. Imediatamente, ele lembrou das tardes em que {nome} corria no jardim, sorrindo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Arrepio do Amor - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pessoa sorrindo no parque com vento no rosto",
        "caption": "O dono de Flokinho sentindo o calor do vento amigo.",
        "category": "mensagem",
        "week": 22,
        "day": 4
    },
    {
        "headline": "A COMEMORAÇÃO DOS PETS",
        "subheadline": "Flokinho pula de alegria ao ver que o sinal funcionou.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o ver seu humano sorrir através do espelho de nuvens, {nome} começou a dar pulinhos e a correr em círculos, sendo parabenizado por Sócrates e Baiacu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Comemoração dos Pets - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorrinho dando pulos de alegria na grama",
        "caption": "Flokinho comemorando a entrega do sinal de vento.",
        "category": "amizade",
        "week": 22,
        "day": 5
    },
    {
        "headline": "O SONO COMPARTILHADO NO CORAÇÃO",
        "subheadline": "Flokinho dorme sabendo que o laço continua forte.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} adormeceu na sua nuvem macia. Ele sentiu que a tristeza de seus humanos tinha diminuído e que o amor que sentiam por ele continuava a brilhar como sol.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono Compartilhado no Coração - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto calmo com iluminação azul suave",
        "caption": "Flokinho dormindo tranquilo no seu cantinho celestial.",
        "category": "reflexao",
        "week": 22,
        "day": 6
    },
    {
        "headline": "A ESCOLHA DA ESTRELA",
        "subheadline": "Flokinho procura a estrela mais brilhante para enviar um sinal luminoso.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje {nome} subiu até a torre de luz das estrelas. Ele queria encontrar uma estrela bem dourada para piscar no céu noturno acima da casa de {familia}.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Escolha da Estrela - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1499346030926-f872da17868a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "céu estrelado de montanha de noite",
        "caption": "Flokinho escolhendo sua estrela na torre de luz.",
        "category": "aventura",
        "week": 23,
        "day": 1
    },
    {
        "headline": "A ESCRITA DA MENSAGEM LUMINOSA",
        "subheadline": "Flokinho escreve com a patinha na superfície brilhante da estrela.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} usou sua patinha para desenhar o formato de um osso e de um coração na estrela selecionada. O Querubim ajudou a carregar a energia do amor na mensagem.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Escrita da Mensagem Luminosa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pintura com luz dourada no fundo escuro",
        "caption": "Flokinho desenhando na estrela com poeira estelar.",
        "category": "mensagem",
        "week": 23,
        "day": 2
    },
    {
        "headline": "O ALINHAMENTO CELESTIAL",
        "subheadline": "Canarinho ajuda a posicionar a estrela na órbita correta.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>anarinho voou alto e sinalizou para {nome} o momento exato em que a Terra estaria alinhada com o setor de visualização da família Luchesi. Tudo estava pronto.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Alinhamento Celestial - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "mapa estelar antigo com constelações",
        "caption": "Canarinho guiando o posicionamento da estrela.",
        "category": "amizade",
        "week": 23,
        "day": 3
    },
    {
        "headline": "O BRILHO NO CÉU DA TERRA",
        "subheadline": "A estrela pisca de forma diferente e atrai a atenção dos humanos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, a família Luchesi olhou para o céu e viu uma estrela piscar três vezes seguidas de forma brilhante. Sentiram uma certeza inexplicável de que era {nome}.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Brilho no Céu da Terra - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "estrela cadente brilhando sobre a cidade",
        "caption": "A estrela de Flokinho brilhando no céu noturno da Terra.",
        "category": "mensagem",
        "week": 23,
        "day": 4
    },
    {
        "headline": "A MENSAGEM RECEBIDA",
        "subheadline": "O coração do dono enche-se de paz ao olhar para o céu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>dono} sorriu olhando a estrela, sentindo que {nome} estava bem e mandando notícias. A saudade apertou, mas com um calor de paz e esperança no peito.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Mensagem Recebida - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pessoa olhando para o céu noturno sorrindo",
        "caption": "O dono de Flokinho sentindo o abraço da luz estelar.",
        "category": "reflexao",
        "week": 23,
        "day": 5
    },
    {
        "headline": "O DESCANSO DO MENSAGEIRO DA LUZ",
        "subheadline": "Flokinho dorme sabendo que sua estrela vigia seus donos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a missão cumprida, {nome} deitou-se na nuvem do {lugar}. Ele adormeceu vendo o brilho de sua estrela refletido no horizonte celestial, vigiando seu lar.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso do Mensageiro da Luz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama de nuvens brancas iluminada por estrelas",
        "caption": "Flokinho dormindo em paz sob a luz de sua estrela.",
        "category": "reflexao",
        "week": 23,
        "day": 6
    },
    {
        "headline": "O ENSAIO DOS LATIDOS DE HARPA",
        "subheadline": "Flokinho treina uivar no tom das harpas celestes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} ensaiou com o Coral Canino hoje. Ele aprendeu a uivar no mesmo tom das harpas celestes, criando uma música suave que acalma qualquer coração aflito.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Ensaio dos Latidos de Harpa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1472214222541-d510753a4907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "harpa clássica de ouro no palco",
        "caption": "Flokinho ensaiando seus uivos musicais com os anjos.",
        "category": "evento",
        "week": 24,
        "day": 1
    },
    {
        "headline": "A MELODIA DA BRISA DE SÓCRATES",
        "subheadline": "Sócrates compõe um poema sobre a eternidade da amizade.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates recitou um poema sobre a conexão eterna dos pets com seus donos. A melodia inspirou {nome} a uivar com ainda mais sentimento e carinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Melodia da Brisa de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pergaminho antigo com escrita elegante",
        "caption": "Sócrates recitando seu poema filosófico na taverna.",
        "category": "reflexao",
        "week": 24,
        "day": 2
    },
    {
        "headline": "A TRANSMISSÃO DO SOM CELESTIAL",
        "subheadline": "O som viaja através do vento e chega à Terra como um zumbido doce.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> música uivada por {nome} viajou pelo canal de vento. Na Terra, soou como o barulho de folhas balançando e um zumbido doce no ouvido de {familia}.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Transmissão do Som Celestial - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "folhas verdes balançando com vento de tarde",
        "caption": "Flokinho transmitindo sua melodia através do vento norte.",
        "category": "mensagem",
        "week": 24,
        "day": 3
    },
    {
        "headline": "O CONSOLO NA SALA DE ESTAR",
        "subheadline": "A família Luchesi escuta o vento e lembra do pet com alegria.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>entados no {lugar}, a família Luchesi ouviu o sussurro do vento. Lembraram do uivo engraçado de {nome} quando queria atenção e riram juntos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Consolo na Sala de Estar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "sala de estar aconchegante com lareira",
        "caption": "A família lembrando com carinho das brincadeiras do pet.",
        "category": "reflexao",
        "week": 24,
        "day": 4
    },
    {
        "headline": "A CELEBRAÇÃO DO SUCESSO MUSICAL",
        "subheadline": "Flokinho ganha petiscos de Baiacu pela bela melodia.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>e volta à taverna, Baiacu serviu uma rodada de suco de carne para todos os cantores. {nome} ganhou um osso gigante como prêmio pela afinação.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Celebração do Sucesso Musical - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "copo de suco de fruta decorado na mesa",
        "caption": "Flokinho comemorando com Baiacu e Sócrates no bar.",
        "category": "comida",
        "week": 24,
        "day": 5
    },
    {
        "headline": "O SONO HARMONIOSO",
        "subheadline": "Flokinho dorme ouvindo o eco de sua própria música de amor.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a barriga cheia e o coração feliz, {nome} adormeceu. A música que uivou continuou ecoando suavemente nas nuvens, garantindo uma noite de sonhos lindos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono Harmonioso - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama confortável de nuvens douradas",
        "caption": "Flokinho dormindo sob a sinfonia das estrelas silenciosas.",
        "category": "reflexao",
        "week": 24,
        "day": 6
    },
    {
        "headline": "A CHEGADA DA NUVEM ESCURA",
        "subheadline": "Uma tempestade celestial de vento forte aproxima-se dos jardins.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>ma nuvem escura de tempestade cobriu o setor leste do céu. O vento forte começou a arrastar as nuvens de dormir. {nome} firmou as patas e latiu com força.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Chegada da Nuvem Escura - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "tempestade com nuvens escuras no céu",
        "caption": "Flokinho enfrentando os ventos da tempestade celestial.",
        "category": "aventura",
        "week": 25,
        "day": 1
    },
    {
        "headline": "O SUMIÇO DE CANARINHO",
        "subheadline": "O passarinho guia é levado pela corrente de ar forte.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m redemoinho carregou o pequeno Canarinho para dentro da nuvem cinza. {nome} ouviu o pio assustado do amigo e decidiu entrar na névoa para ajudá-lo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sumiço de Canarinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1505533338688-f59cd91f0415?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "névoa escura com vento forte na floresta",
        "caption": "Flokinho correndo para salvar seu amigo Canarinho.",
        "category": "aventura",
        "week": 25,
        "day": 2
    },
    {
        "headline": "A BUSCA OLFATIVA NA NÉVOA",
        "subheadline": "Flokinho usa seu olfato aguçado para encontrar o amigo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">M</span>esmo sem enxergar nada na névoa, {nome} farejou o cheiro de flores do Canarinho. Ele seguiu o rastro, desviando de raios de luz fria que caíam das nuvens.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Busca Olfativa na Névoa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "floresta escura com raios de luz",
        "caption": "Flokinho farejando o rastro de Canarinho na névoa.",
        "category": "aventura",
        "week": 25,
        "day": 3
    },
    {
        "headline": "O RESGATE DO PASSARINHO",
        "subheadline": "Flokinho encontra Canarinho e o protege sob seu pelo macio.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} encontrou Canarinho preso em um galho de nuvem. Ele o pegou com cuidado e o protegeu sob seu pelo longo e macio de Shih Tzu, garantindo que ficasse aquecido.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Resgate do Passarinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pequeno pássaro aninhado na mão fofa",
        "caption": "Flokinho protegendo o Canarinho sob seu pelo macio.",
        "category": "amizade",
        "week": 25,
        "day": 4
    },
    {
        "headline": "A VOLTA COM SEGURANÇA",
        "subheadline": "Flokinho traz o amigo de volta sob os aplausos dos anjos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>sando sua coragem, {nome} saiu da nuvem de tempestade carregando Canarinho. Os anjos e Baiacu o receberam com festa e muitos afagos de parabéns.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Volta com Segurança - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "grupo de pessoas aplaudindo felizes no parque",
        "caption": "Flokinho sendo ovacionado por sua bravura.",
        "category": "amizade",
        "week": 25,
        "day": 5
    },
    {
        "headline": "O SONO DOS BRAVOS",
        "subheadline": "Flokinho dorme cansado ao lado do amigo salvo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om Canarinho seguro e dormindo no seu ombro, {nome} deitou-se na nuvem do {lugar} celestial. Ele adormeceu orgulhoso de sua coragem e amizade.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono dos Bravos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1529429617329-84dab8eb7729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama fofa com lençóis brancos de linho",
        "caption": "Flokinho e Canarinho dormindo juntos em segurança.",
        "category": "reflexao",
        "week": 25,
        "day": 6
    },
    {
        "headline": "O DESAFIO DA PONTE ESTREITA",
        "subheadline": "Flokinho precisa cruzar uma ponte feita de luz de estrelas que balança.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">P</span>ara chegar ao vale dos novos petiscos, o grupo precisou cruzar uma ponte estreita que flutuava sobre o vácuo celeste. {nome} olhou para baixo e hesitou.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Desafio da Ponte Estreita - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "ponte pênsil estreita sob abismo nas nuvens",
        "caption": "Flokinho olhando a ponte flutuante com desconfiança.",
        "category": "aventura",
        "week": 26,
        "day": 1
    },
    {
        "headline": "A DEMONSTRAÇÃO DE CORAGEM DE BAIACU",
        "subheadline": "O vira-lata atravessa a ponte correndo e mostra que é segura.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu latiu alegremente, correu pela ponte de luz e deu um salto do outro lado. Ele incentivou {nome} a fazer o mesmo, abanando o rabo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Demonstração de Coragem de Baiacu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro pulando feliz na grama verde",
        "caption": "Baiacu incentivando Flokinho a cruzar a ponte.",
        "category": "amizade",
        "week": 26,
        "day": 2
    },
    {
        "headline": "O PRIMEIRO PASSO DE FLOKINHO",
        "subheadline": "Flokinho coloca a patinha na ponte e sente o calor da luz das estrelas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om passos cuidadosos de Shih Tzu corajoso, {nome} deu o primeiro passo. A ponte era quente e firme como o chão de madeira do {lugar} da Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Primeiro Passo de Flokinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pé de cachorro na tábua de madeira ensolarada",
        "caption": "Flokinho dando o primeiro passo na ponte de luz.",
        "category": "aventura",
        "week": 26,
        "day": 3
    },
    {
        "headline": "A AJUDA DE SÓCRATES",
        "subheadline": "O gato dá conselhos sobre como manter o equilíbrio nas alturas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates caminhou ao lado de {nome}, sussurrando conselhos sobre postura e equilíbrio. 'Mantenha o focinho erguido e confie na sua leveza celestial', disse o gato.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Ajuda de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato elegante caminhando na borda do muro",
        "caption": "Sócrates caminhando ao lado de Flokinho na ponte.",
        "category": "amizade",
        "week": 26,
        "day": 4
    },
    {
        "headline": "A CHEGADA AO VALE DOS BIFINHOS",
        "subheadline": "O grupo cruza a ponte com sucesso e descobre um campo cheio de comida.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">T</span>odos cruzaram a ponte! Do outro lado, encontraram um vale repleto de arbustos que produziam {comida} fresquinhos. Eles comeram e comemoraram a travessia.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Chegada ao Vale dos Bifinhos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "campo verde com flores brilhantes sob sol",
        "caption": "Flokinho e amigos saboreando os bifinhos do novo vale.",
        "category": "comida",
        "week": 26,
        "day": 5
    },
    {
        "headline": "O SONO DA CONQUISTA",
        "subheadline": "Flokinho dorme com a medalha de bravura que ganhou do Querubim.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim deu a {nome} uma medalha brilhante com o formato de sua {brinquedo}. Ele adormeceu com ela no peito, sabendo que nenhum obstáculo é grande demais.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono da Conquista - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1511275539165-cc46b1ee8960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "medalha dourada bonita com fita",
        "caption": "Flokinho dormindo orgulhoso com sua medalha de bravura.",
        "category": "reflexao",
        "week": 26,
        "day": 6
    },
    {
        "headline": "A ENTRADA NO LABIRINTO",
        "subheadline": "Flokinho entra em um jardim de arbustos altos que mudam de lugar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} decidiu explorar o Labirinto Verde. Os caminhos mudavam conforme ele pensava em suas lembranças terrestres. Ele seguiu confiando no seu faro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Entrada no Labirinto - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1520119862149-6e4b1ad93475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "labirinto de arbustos verdes sob sol",
        "caption": "Flokinho entrando no labirinto de arbustos celestes.",
        "category": "aventura",
        "week": 27,
        "day": 1
    },
    {
        "headline": "O CAMINHO DA INFÂNCIA",
        "subheadline": "Flokinho encontra imagens de quando era um filhotinho fofo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">E</span>m uma das curvas do labirinto, {nome} viu uma projeção de quando chegou à casa de {familia}. Ele latiu alegremente ao ver seu tamanho minúsculo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Caminho da Infância - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "filhote de cachorro Shih Tzu fofo na grama",
        "caption": "Flokinho olhando suas fotos de filhote no labirinto.",
        "category": "reflexao",
        "week": 27,
        "day": 2
    },
    {
        "headline": "O ENCONTRO COM A SOMBRA DO DONO",
        "subheadline": "Flokinho vê uma projeção de carinho do seu humano.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>o centro do labirinto, {nome} encontrou uma estátua de luz de {dono}. Ao encostar o focinho, a estátua emitiu um calor idêntico ao do abraço de seu dono.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com a Sombra do Dono - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "mãos de pessoa fazendo carinho em cachorro",
        "caption": "Flokinho sentindo o calor da projeção de seu dono.",
        "category": "mensagem",
        "week": 27,
        "day": 3
    },
    {
        "headline": "A SAÍDA GUIADA POR CANARINHO",
        "subheadline": "O passarinho guia ajuda Flokinho a encontrar o caminho de volta.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>anarinho voou acima dos arbustos e cantou indicando as direções corretas. {nome} seguiu o canto e saiu do labirinto com facilidade e alegria.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Saída Guiada por Canarinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pássaro brilhante voando acima das árvores",
        "caption": "Canarinho guiando Flokinho para fora do labirinto.",
        "category": "amizade",
        "week": 27,
        "day": 4
    },
    {
        "headline": "O COMPARTILHAMENTO DAS HISTÓRIAS",
        "subheadline": "Flokinho conta sobre as lembranças aos seus amigos no bar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a taverna de Baiacu, {nome} contou tudo o que viu no labirinto. Sócrates explicou que o labirinto ajuda a manter as lembranças vivas e brilhantes.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Compartilhamento das Histórias - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "copo de suco com frutas na mesa de madeira",
        "caption": "Flokinho conversando com seus amigos sobre o labirinto.",
        "category": "amizade",
        "week": 27,
        "day": 5
    },
    {
        "headline": "O SONO ACOLHEDOR",
        "subheadline": "Flokinho dorme sonhando com os dias felizes do passado.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om as lembranças aquecendo seu peito, {nome} deitou-se na sua nuvem favorita do {lugar}. Ele adormeceu sabendo que seu lar na Terra está sempre perto.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono Acolhedor - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto de dormir aconchegante com tons quentes",
        "caption": "Flokinho dormindo tranquilo e em paz com seu passado.",
        "category": "saudade",
        "week": 27,
        "day": 6
    },
    {
        "headline": "O DESAFIO DA NUVEM SOLITÁRIA",
        "subheadline": "Flokinho precisa dar um grande salto para alcançar a nuvem de piquenique.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> piquenique dos anjos estava montado em uma nuvem isolada no céu. Para chegar lá, {nome} precisava dar um salto de fé sobre o vácuo de vento.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Desafio da Nuvem Solitária - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "nuvem branca isolada no céu azul brilhante",
        "caption": "Flokinho calculando o salto para a nuvem vizinha.",
        "category": "aventura",
        "week": 28,
        "day": 1
    },
    {
        "headline": "O INCENTIVO DO QUERUBIM DA GUARDA",
        "subheadline": "O anjo garante que o vento segurará o pet se ele pular.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim abriu os braços do outro lado e disse: 'Pule com confiança, {nome}! O vento celestial sustenta todos os que amam'. {nome} respirou fundo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Incentivo do Querubim da Guarda - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "anjo de asas brancas com braços abertos",
        "caption": "O anjo incentivando Flokinho a realizar o salto.",
        "category": "amizade",
        "week": 28,
        "day": 2
    },
    {
        "headline": "O SALTO DE FLOKINHO",
        "subheadline": "Flokinho salta e sente as correntes de vento o erguerem no ar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} correu e saltou! Por um segundo ele flutuou no ar, sentindo o vento acariciar suas orelhas fofas de Shih Tzu, antes de pousar suavemente na nuvem.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Salto de Flokinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pipa colorida voando alto no céu azul",
        "caption": "Flokinho flutuando no ar durante seu salto de fé.",
        "category": "aventura",
        "week": 28,
        "day": 3
    },
    {
        "headline": "A CELEBRAÇÃO DO SUCESSO",
        "subheadline": "Os amigos abraçam Flokinho e comemoram sua chegada ao piquenique.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu e Sócrates o receberam com festa. Ele ganhou uma porção extra de {comida} celestial e muitos beijos na cabeça do Querubim da Guarda.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Celebração do Sucesso - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "mesa de piquenique cheia de comidas e doces",
        "caption": "Flokinho sendo parabenizado por seus amigos após o salto.",
        "category": "comida",
        "week": 28,
        "day": 4
    },
    {
        "headline": "A BRINCADEIRA DE DESLIZAR",
        "subheadline": "Flokinho descobre que deslizar nas nuvens é muito divertido.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>epois do piquenique, {nome} passou a tarde deslizando pelas encostas da nuvem, rolando na grama celeste e latindo de pura felicidade com os amigos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Brincadeira de Deslizar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "crianças escorregando na colina de grama",
        "caption": "Flokinho escorregando e rolando na nuvem fofa.",
        "category": "humor",
        "week": 28,
        "day": 5
    },
    {
        "headline": "O DESCANSO DO PEQUENO CAMPEÃO",
        "subheadline": "Flokinho dorme com a medalha dourada no peito.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om o coração cheio de orgulho por sua bravura, {nome} deitou-se na sua nuvem. Ele adormeceu com a certeza de que é capaz de superar qualquer limite.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso do Pequeno Campeão - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama macia com lençol azul e travesseiros",
        "caption": "Flokinho dormindo em paz após provar sua bravura.",
        "category": "reflexao",
        "week": 28,
        "day": 6
    },
    {
        "headline": "O BARULHO ASSUSTADOR",
        "subheadline": "Um som familiar e terrível ecoa pelas nuvens douradas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje um som ensurdecedor invadiu o céu dos pets: o monstro do aspirador de pó! {nome} latiu assustado e correu para debaixo da mesa mais próxima, trêmulo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Barulho Assustador - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "aspirador de pó moderno na sala de estar",
        "caption": "Flokinho escondido com medo do barulho do aspirador.",
        "category": "humor",
        "week": 29,
        "day": 1
    },
    {
        "headline": "A REUNIÃO DE EMERGÊNCIA NO BAR",
        "subheadline": "Os cães debatem estratégias para combater o invasor barulhento.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} correu até o bar de Baiacu, onde vários cãezinhos debatiam com medo. Baiacu sugeriu criar uma barreira de ossos de borracha para conter o monstro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Reunião de Emergência no Bar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorros reunidos conversando no parque",
        "caption": "Flokinho e amigos debatendo estratégias na taverna.",
        "category": "amizade",
        "week": 29,
        "day": 2
    },
    {
        "headline": "O PLANO DE SÓCRATES",
        "subheadline": "O gato sugere investigar o barulho com inteligência.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates apareceu calmo e explicou: 'Os humanos temiam o aspirador, mas no céu nada pode nos ferir. Vamos investigar o que é isso de verdade'. {nome} aceitou ajudar.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Plano de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato cinza olhando com seriedade na sala",
        "caption": "Sócrates explicando seu plano investigativo para Flokinho.",
        "category": "reflexao",
        "week": 29,
        "day": 3
    },
    {
        "headline": "A APROXIMAÇÃO CORAJOSA",
        "subheadline": "Flokinho e Sócrates andam na direção do barulho assustador.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om passos lentos, {nome} e Sócrates aproximaram-se do local de onde vinha o som. {nome} segurava sua {brinquedo} na boca para se sentir mais seguro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Aproximação Corajosa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "estrada de terra com névoa no final",
        "caption": "Flokinho avançando com coragem em direção ao som.",
        "category": "aventura",
        "week": 29,
        "day": 4
    },
    {
        "headline": "A REVELAÇÃO DIVERTIDA",
        "subheadline": "O monstro é na verdade um anjo brincalhão limpando as folhas com vento.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>escobriram que o 'monstro' era um querubim usando um soprador de vento macio para recolher as folhas secas de margarida. O barulho era apenas o vento cantando alto.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Revelação Divertida - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "anjo soprando folhas de outono no jardim",
        "caption": "Flokinho rindo ao ver que o monstro era apenas um anjo.",
        "category": "humor",
        "week": 29,
        "day": 5
    },
    {
        "headline": "A VITÓRIA SOBRE O MEDO ANTIGO",
        "subheadline": "Flokinho dorme sem medo de barulhos chatos do passado.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>abendo que o aspirador celestial é apenas um amigo do vento, {nome} deitou-se na nuvem do seu {lugar} e dormiu em paz, livre de seus medos antigos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Vitória Sobre o Medo Antigo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto iluminado de forma suave com velas",
        "caption": "Flokinho dormindo tranquilo sem medo de barulhos.",
        "category": "reflexao",
        "week": 29,
        "day": 6
    },
    {
        "headline": "A AMEAÇA DA CHUVA DE SABÃO",
        "subheadline": "Uma grande nuvem cinza perfumada aproxima-se dos jardins.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> temida Nuvem de Banho surgiu no horizonte, soltando gotas perfumadas de lavanda. {nome}, inimigo jurado do {odio}, correu para se esconder no bosque.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Ameaça da Chuva de Sabão - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "nuvem de chuva cinza e escura no horizonte",
        "caption": "Flokinho fugindo da nuvem de banho no céu.",
        "category": "humor",
        "week": 30,
        "day": 1
    },
    {
        "headline": "A BUSCA DE CANARINHO",
        "subheadline": "O passarinho guia tenta convencer Flokinho a sair do esconderijo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>anarinho pousou no galho onde {nome} estava escondido. O guia explicou que a chuva celestial não molha de verdade, apenas deixa o pelo macio e brilhante.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Busca de Canarinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pássaro azul cantando perto das folhas",
        "caption": "Canarinho tentando convencer Flokinho a sair do bosque.",
        "category": "amizade",
        "week": 30,
        "day": 2
    },
    {
        "headline": "O TESTE COM A PATINHA",
        "subheadline": "Flokinho arrisca tocar uma gota de sabão e vê que faz cócegas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om muita desconfiança, {nome} esticou a patinha direita para tocar uma gota que caía da nuvem. Ela estourou com cheiro de {comida} e fez cócegas na patinha.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Teste com a Patinha - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1477884213980-b778400c9045?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gotas de orvalho brilhando na folha verde",
        "caption": "Flokinho testando as gotas da nuvem de banho.",
        "category": "humor",
        "week": 30,
        "day": 3
    },
    {
        "headline": "A CORRIDA SOB A CHUVA PERFUMADA",
        "subheadline": "Flokinho descobre que brincar na chuva celestial é maravilhoso.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">P</span>ercebendo que a água era morna e divertida, {nome} saiu do bosque e correu sob as gotas de luz. Ele brincou de escorregar no sabão celeste com Baiacu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Corrida sob a Chuva Perfumada - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "arco-íris bonito surgindo após a chuva",
        "caption": "Flokinho correndo alegremente sob a chuva celestial.",
        "category": "aventura",
        "week": 30,
        "day": 4
    },
    {
        "headline": "O PELO MAIS BRILHANTE DO CÉU",
        "subheadline": "Flokinho exibe seu pelo fofo e perfumado para Sócrates.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>pós a chuva, o pelo de {nome} estava branquinho, perfumado de flores e super escovado. Sócrates olhou e disse: 'Você está elegante para um Shih Tzu'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Pelo Mais Brilhante do Céu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "flores brancas de jasmim no jardim ensolarado",
        "caption": "Flokinho exibindo seu visual pós-chuva para Sócrates.",
        "category": "humor",
        "week": 30,
        "day": 5
    },
    {
        "headline": "O SONO DO PELO CHEIROSO",
        "subheadline": "Flokinho dorme quentinho e limpo na cama de nuvens.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">T</span>otalmente limpo e cheiroso, {nome} deitou-se no pé da cama do Querubim. Ele adormeceu sentindo-se o cão mais limpo e amado de todo o paraíso dos pets.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono do Pelo Cheiroso - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto de dormir calmo com lençóis brancos",
        "caption": "Flokinho dormindo profundamente após seu banho seco.",
        "category": "reflexao",
        "week": 30,
        "day": 6
    },
    {
        "headline": "O ENCONTRO COM O GATO PERSA",
        "subheadline": "Um gato persa recém-chegado tenta dominar a nuvem favorita de Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m gato persa branco e orgulhoso deitou-se bem no meio da nuvem do {lugar} de {nome}. {nome} latiu de leve para defender seu espaço quentinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com o Gato Persa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato persa branco peludo deitado",
        "caption": "Flokinho reivindicando sua nuvem favorita do gato persa.",
        "category": "humor",
        "week": 31,
        "day": 1
    },
    {
        "headline": "A DISPUTA TERRITORIAL",
        "subheadline": "Cão e gato fazem disputas de olhares para ver quem cede a nuvem.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">E</span>les passaram a manhã inteira olhando um para o outro sem sair do lugar. O gato persa miava alto e {nome} respondia com pequenos uivos de protesto.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Disputa Territorial - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato e cachorro se olhando com atenção",
        "caption": "Flokinho e o gato persa em disputa de olhares.",
        "category": "humor",
        "week": 31,
        "day": 2
    },
    {
        "headline": "O CONSELHO DE SÓCRATES",
        "subheadline": "Sócrates atua como mediador e propõe uma divisão justa da nuvem.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates interveio e disse: 'A nuvem é grande o suficiente para o calor de ambos. Dividam a metade'. Ele propôs que dividissem os horários de cochilo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Conselho de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato cinza elegante deitado sob a mesa",
        "caption": "Sócrates propondo o acordo de paz para os dois animais.",
        "category": "amizade",
        "week": 31,
        "day": 3
    },
    {
        "headline": "A TRÉGUA DO BIFINHO",
        "subheadline": "Flokinho oferece um pedaço de petisco para selar a amizade com o gato.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} empurrou um pedaço de {comida} para o gato persa. O felino cheirou, aceitou o suborno e deu espaço para {nome} deitar ao seu lado com carinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Trégua do Bifinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "prato de petiscos saborosos na mesa",
        "caption": "Flokinho dividindo seu bifinho para selar a trégua.",
        "category": "amizade",
        "week": 31,
        "day": 4
    },
    {
        "headline": "O COCHILO COMPARTILHADO",
        "subheadline": "Cão e gato dormem juntos e descobrem que a convivência é boa.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span>s dois animais acabaram dormindo enrolados um no outro. O calor do pelo do gato persa deixou o cochilo de {nome} ainda mais aconchegante e quentinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Cochilo Compartilhado - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato e cachorro deitados juntos dormindo",
        "caption": "Flokinho e o gato persa dividindo o mesmo espaço de sono.",
        "category": "amizade",
        "week": 31,
        "day": 5
    },
    {
        "headline": "A NOVA PARCERIA CELESTE",
        "subheadline": "Flokinho ganha mais um amigo para suas brincadeiras diárias.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o acordar, {nome} latiu alegremente ao ver o gato persa brincar com a sua {brinquedo}. Ele percebeu que no céu há espaço para todas as amizades.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Nova Parceria Celeste - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro e gato correndo juntos no campo",
        "caption": "Flokinho e o gato persa brincando no jardim celeste.",
        "category": "amizade",
        "week": 31,
        "day": 6
    },
    {
        "headline": "A INVASÃO DAS BORBOLETAS",
        "subheadline": "Um grupo de borboletas gigantes pousa na taverna de Baiacu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje o bar de Baiacu foi invadido por borboletas coloridas que bebiam o suco de carne dos potes. {nome} latiu para tentar espantá-las do balcão.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Invasão das Borboletas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1499346030926-f872da17868a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "borboleta gigante colorida na flor",
        "caption": "Flokinho tentando espantar as borboletas da taverna.",
        "category": "humor",
        "week": 32,
        "day": 1
    },
    {
        "headline": "O DESAFIO DA BORBOLETA LÍDER",
        "subheadline": "Uma borboleta amarela teima em pousar na testa de Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> líder das borboletas, muito travessa, ficava voando em círculos e pousando bem no focinho de {nome}. Ele espirrava e dava patadas leves no ar.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Desafio da Borboleta Líder - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "borboleta amarela pousando no nariz de cachorro",
        "caption": "Flokinho tentando pegar a borboleta travessa com a pata.",
        "category": "humor",
        "week": 32,
        "day": 2
    },
    {
        "headline": "A CORRIDA PELO BOSQUE DAS FLORES",
        "subheadline": "Flokinho persegue a borboleta por todo o bosque de margaridas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} correu atrás da borboleta amarela pelo jardim celestial, pulando nuvens e desviando de arbustos, latiendo de pura diversão no caminho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Corrida Pelo Bosque das Flores - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "campo de flores amarelas sob o sol forte",
        "caption": "Flokinho correndo alegremente atrás da borboleta no campo.",
        "category": "aventura",
        "week": 32,
        "day": 3
    },
    {
        "headline": "A TRÉGUA NA COLINA DO SOL",
        "subheadline": "Flokinho e a borboleta descansam juntos sob a luz da tarde.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>ansado de correr, {nome} deitou-se na colina. A borboleta pousou delicadamente em sua patinha, piscando suas asas de luz em sinal de amizade.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Trégua na Colina do Sol - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "borboleta colorida na mão sob o sol",
        "caption": "Flokinho descansando com a borboleta na patinha.",
        "category": "amizade",
        "week": 32,
        "day": 4
    },
    {
        "headline": "O SHOW DE LUZES AÉREO",
        "subheadline": "As borboletas fazem desenhos luminosos no céu noturno para os pets.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">À</span> noite, todas as borboletas voaram alto e fizeram desenhos de patinhas brilhantes no céu. {nome} assistiu ao lado de Sócrates, abanando o rabo de felicidade.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Show de Luzes Aéreo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "fogos de artifício no céu noturno da cidade",
        "caption": "Flokinho admirando o show de luzes das borboletas.",
        "category": "evento",
        "week": 32,
        "day": 5
    },
    {
        "headline": "O SONO DO CAÇADOR FELIZ",
        "subheadline": "Flokinho adormece sonhando com asas coloridas e voos suaves.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om os olhos cansados de assistir às cores, {nome} enrolou-se na nuvem do {lugar} e dormiu, sonhando com as borboletas travessas do paraíso.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono do Caçador Feliz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto aconchegante com iluminação suave colorida",
        "caption": "Flokinho dormindo tranquilo após suas caçadas divertidas.",
        "category": "reflexao",
        "week": 32,
        "day": 6
    },
    {
        "headline": "A CHEGADA DO NOVO SOFÁ",
        "subheadline": "Um imenso e macio sofá de veludo é colocado no centro do jardim.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m sofá idêntico ao {lugar} da Terra apareceu no centro dos gramados celestes. Todos os animais correram para garantir um lugar nas almofadas macias.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Chegada do Novo Sofá - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1472214222541-d510753a4907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "sofá de veludo confortável na sala de estar",
        "caption": "Flokinho e seus amigos correndo para ver o novo sofá.",
        "category": "aventura",
        "week": 33,
        "day": 1
    },
    {
        "headline": "A TENTATIVA DE DOMÍNIO DOS GATOS",
        "subheadline": "Um grupo de gatos tenta monopolizar as almofadas mais quentes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m grupo de felinos liderados pelo gato persa ocupou o centro do sofá. {nome} e Baiacu decidiram formar uma aliança para defender o direito dos cães.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Tentativa de Domínio dos Gatos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "grupo de gatos persas deitados no sofá",
        "caption": "Flokinho negociando o espaço do sofá com os gatos.",
        "category": "humor",
        "week": 33,
        "day": 2
    },
    {
        "headline": "A PROPOSTA DE TRATADO DE SÓCRATES",
        "subheadline": "O gato filósofo sugere dividir o sofá de forma pacífica.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates interveio e sugeriu um tratado: 'Metade das almofadas para os uivadores, metade para os ronronadores'. Todos os animais concordaram com a divisão.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Proposta de Tratado de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato e cachorro deitados juntos no sofá confortável",
        "caption": "Sócrates mostrando a divisão pacífica do sofá.",
        "category": "amizade",
        "week": 33,
        "day": 3
    },
    {
        "headline": "A DEFESA CONTRA OS INVASORES DE VENTO",
        "subheadline": "Uma corrente de ar frio tenta empurrar as almofadas do sofá.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m vento forte soprou, ameaçando derrubar as almofadas. {nome} deitou-se em cima da almofada do canto e Baiacu segurou a outra com as patinhas, protegendo o sofá.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Defesa Contra os Invasores de Vento - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "vento forte agitando cortinas da janela",
        "caption": "Flokinho e Baiacu segurando as almofadas contra o vento.",
        "category": "aventura",
        "week": 33,
        "day": 4
    },
    {
        "headline": "A VITÓRIA DA UNIÃO PET",
        "subheadline": "Cães e gatos dividem o sofá e dormem aquecidos juntos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> tratado foi um sucesso! Todos os animais deitaram-se juntos. O calor combinado de cães e gatos deixou o sofá ainda mais quente e confortável para o sono.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Vitória da União Pet - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro e gato deitados juntos dormindo felizes",
        "caption": "Todos os pets dormindo juntos no sofá celestial.",
        "category": "amizade",
        "week": 33,
        "day": 5
    },
    {
        "headline": "O DESCANSO ETERNO NO VELUDO",
        "subheadline": "Flokinho dorme profundamente no meio de seus amigos pets.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a aliança consolidada, {nome} dormiu uma soneca pesada no meio de Sócrates e Baiacu. Ele latiu baixinho no sono, sonhando com seu lar terrestre.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso Eterno no Veludo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto de dormir aconchegante com lençóis brancos",
        "caption": "Flokinho dormindo cercado por seus amigos no sofá.",
        "category": "reflexao",
        "week": 33,
        "day": 6
    },
    {
        "headline": "O ENCONTRO DO MAPA ANTIGO",
        "subheadline": "Flokinho e Baiacu encontram um mapa que mostra a localização do Graveto de Ouro.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu desenterrou uma garrafa pet com um rolo de papel dentro na horta celestial. O mapa indicava o caminho para o lendário Graveto de Ouro do paraíso.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro do Mapa Antigo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "mapa do tesouro desenhado no papel antigo",
        "caption": "Flokinho e Baiacu analisando o mapa do tesouro.",
        "category": "aventura",
        "week": 34,
        "day": 1
    },
    {
        "headline": "A PREPARAÇÃO DA MOCHILA DE LANCHES",
        "subheadline": "Flokinho junta bifinhos e bolinhas para a expedição.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} organizou a comida de viagem: potes cheios de {comida} e sua inseparável {brinquedo}. Canarinho foi convocado como o navegador aéreo oficial do grupo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Preparação da Mochila de Lanches - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1505533338688-f59cd91f0415?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "lanches rápidos saudáveis na mesa",
        "caption": "Flokinho preparando seus pertences para a jornada.",
        "category": "comida",
        "week": 34,
        "day": 2
    },
    {
        "headline": "A TRAVESSIA DO PÂNTANO DE NUVENS SECAS",
        "subheadline": "Eles precisam passar por uma névoa densa que faz espirrar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> grupo atravessou um setor de nuvens que soltava poeira de lavanda. {nome} deu três espirros seguidos, mas continuou liderando a fila com coragem.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Travessia do Pântano de Nuvens Secas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "névoa densa branca no meio da floresta",
        "caption": "Flokinho liderando seus amigos através da névoa de lavanda.",
        "category": "aventura",
        "week": 34,
        "day": 3
    },
    {
        "headline": "O ENCONTRO COM O GUARDIÃO DO VALE",
        "subheadline": "Um grande pastor alemão pede uma senha em formato de latido.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m pastor alemão guardava a entrada do vale. {nome} deu seu uivo mais doce e amigável. O guardião sorriu e disse: 'Pode passar, pequeno herói'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com o Guardião do Vale - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro pastor alemão imponente na grama",
        "caption": "Flokinho dando sua senha de uivo para o guardião.",
        "category": "amizade",
        "week": 34,
        "day": 4
    },
    {
        "headline": "A DESCOBERTA DO GRAVETO LENDÁRIO",
        "subheadline": "Flokinho encontra o graveto que brilha e faz carinho automático.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>o centro do vale, {nome} avistou o Graveto de Ouro. Ele brilhava intensamente. Ao pegá-lo com a boca, sentiu uma vibração morna que massageava suas gengivas.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Descoberta do Graveto Lendário - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "graveto dourado brilhante no centro do jardim",
        "caption": "Flokinho correndo orgulhoso com o Graveto de Ouro.",
        "category": "aventura",
        "week": 34,
        "day": 5
    },
    {
        "headline": "O RETORNO DOS EXPLORADORES",
        "subheadline": "Os amigos voltam ao bar de Baiacu para celebrar a conquista.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>e volta à taverna, o Graveto de Ouro foi exposto na parede acima do balcão. {nome} deitou-se na beira da nuvem, cansado e feliz de sua grande conquista.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Retorno dos Exploradores - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1529429617329-84dab8eb7729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "balcão de taverna rústica com luz quente",
        "caption": "Flokinho dormindo sob o brilho do Graveto de Ouro.",
        "category": "amizade",
        "week": 34,
        "day": 6
    },
    {
        "headline": "O GRITO DE SOCORRO NAS ÁRVORES",
        "subheadline": "Canarinho avisa que um filhotinho caiu do ninho celestial.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>anarinho chegou voando rápido e avisou que um filhotinho de pardal celeste tinha caído de um galho alto da árvore de biscoitos. {nome} partiu para ajudar.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Grito de Socorro nas Árvores - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "ninho de passarinho no galho da árvore",
        "caption": "Flokinho e Canarinho correndo em direção à árvore.",
        "category": "aventura",
        "week": 35,
        "day": 1
    },
    {
        "headline": "O PLANO DE RESGATE DE SÓCRATES",
        "subheadline": "O gato usa sua agilidade para subir no galho e ajudar o filhote.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates subiu com passos ágeis pelo tronco da árvore. Enquanto isso, {nome} e Baiacu seguravam uma nuvem fofa embaixo do galho para servir de rede de segurança.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Plano de Resgate de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato subindo no tronco da árvore sob sol",
        "caption": "Sócrates subindo na árvore enquanto Flokinho prepara a rede.",
        "category": "amizade",
        "week": 35,
        "day": 2
    },
    {
        "headline": "A QUEDA SUAVE NA NUVEM",
        "subheadline": "O filhote cai na nuvem estendida por Flokinho sem se machucar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> filhote escorregou do galho e caiu exatamente no meio da nuvem segurada por {nome} e Baiacu. Ele piou alegremente, são e salvo de qualquer perigo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Queda Suave na Nuvem - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pequeno passarinho amarelo na mão fofa",
        "caption": "O filhote caindo em segurança na nuvem dos pets.",
        "category": "amizade",
        "week": 35,
        "day": 3
    },
    {
        "headline": "A DEVOLUÇÃO AO NINHO",
        "subheadline": "Sócrates coloca o passarinho de volta no ninho da mãe.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om muito cuidado, Sócrates usou a boca para levar o filhote de volta ao ninho. A mãe passarinho cantou uma canção linda em agradecimento ao grupo de resgate.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Devolução ao Ninho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "dois passarinhos cantando juntos no ninho",
        "caption": "O filhote de volta ao ninho com sua mãe.",
        "category": "amizade",
        "week": 35,
        "day": 4
    },
    {
        "headline": "O BANQUETE DE COMEMORAÇÃO",
        "subheadline": "Flokinho ganha biscoitos de mel da mãe do passarinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> mãe passarinho jogou três biscoitos de mel gigantes para os heróis. {nome} comeu metade do seu biscoito e guardou a outra metade para comer depois com carinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Banquete de Comemoração - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "biscoitos caseiros decorados na mesa de piquenique",
        "caption": "Flokinho saboreando seu biscoito de comemoração.",
        "category": "comida",
        "week": 35,
        "day": 5
    },
    {
        "headline": "O SONO DO DEVER CUMPRIDO",
        "subheadline": "Flokinho dorme ouvindo a canção de ninar dos passarinhos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om o coração cheio de alegria por ter salvado o filhotinho, {nome} deitou-se na nuvem do {lugar}. Ele adormeceu ouvindo a canção de ninar cantada no ninho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono do Dever Cumprido - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1511275539165-cc46b1ee8960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama aconchegante iluminada pela lua cheia",
        "caption": "Flokinho dormindo sob o som da canção dos passarinhos.",
        "category": "reflexao",
        "week": 35,
        "day": 6
    },
    {
        "headline": "A ABERTURA DOS JOGOS",
        "subheadline": "Flokinho é o porta-bandeira da delegação dos Shih Tzus.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje começaram as Olimpíadas dos Pets. {nome} desfilou segurando uma bandeira com o formato de um osso dourado, abanando o rabo sob aplausos de toda a torcida.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Abertura dos Jogos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1520119862149-6e4b1ad93475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "desfile de cachorros com bandeiras decoradas",
        "caption": "Flokinho desfilando na abertura dos jogos olímpicos.",
        "category": "evento",
        "week": 36,
        "day": 1
    },
    {
        "headline": "A CORRIDA DE OBSTÁCULOS DE NUVENS",
        "subheadline": "Flokinho compete na corrida de velocidade e agilidade.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} correu como um raio, pulando barreiras de nuvens e correndo por dentro de túneis de vento. Ele cruzou a linha de chegada em primeiro lugar com folga.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Corrida de Obstáculos de Nuvens - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorrinho correndo rápido em pista de obstáculos",
        "caption": "Flokinho pulando obstáculos na corrida celestial.",
        "category": "aventura",
        "week": 36,
        "day": 2
    },
    {
        "headline": "O SALTO EM ALTURA DE ORELHAS",
        "subheadline": "Flokinho usa suas orelhas fofas para saltar mais alto.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>sando a técnica de planar, {nome} saltou sobre uma barra de vento de dois metros de altura, vencendo o concurso de salto sob os olhares maravilhados de Sócrates.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Salto em Altura de Orelhas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro saltando alto na grama verde",
        "caption": "Flokinho realizando seu salto em altura celestial.",
        "category": "humor",
        "week": 36,
        "day": 3
    },
    {
        "headline": "O CAMPEONATO DE CAÇA À BOLINHA",
        "subheadline": "Flokinho disputa a caça à bolinha azul com outros cães rápidos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>o campeonato de caça, o anjo jogou dez bolinhas ao mesmo tempo. {nome} correu e conseguiu pegar três de uma vez na boca, garantindo a medalha de bronze.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Campeonato de Caça à Bolinha - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "várias bolinhas coloridas na grama",
        "caption": "Flokinho orgulhoso com suas bolinhas na boca.",
        "category": "comida",
        "week": 36,
        "day": 4
    },
    {
        "headline": "A ENTREGA DAS MEDALHAS DE OURO",
        "subheadline": "Flokinho recebe a medalha de ouro de campeão geral.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim da Guarda entregou a {nome} a medalha de ouro de 'Pet Mais Ágil do Céu'. Ele latiu orgulhoso e deixou que todos os seus amigos cheirassem seu troféu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Entrega das Medalhas de Ouro - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "medalha de ouro reluzente com fita vermelha",
        "caption": "Flokinho com sua medalha de ouro no pódio celestial.",
        "category": "evento",
        "week": 36,
        "day": 5
    },
    {
        "headline": "O SONO DO GRANDE CAMPEÃO",
        "subheadline": "Flokinho dorme com sua medalha brilhante na nuvem quente.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">E</span>xausto de tantas provas físicas, {nome} deitou-se no pé da cama do Querubim. Ele adormeceu segurando a medalha dourada entre as patinhas, muito feliz.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono do Grande Campeão - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "travesseiro branco macio iluminado por luz dourada",
        "caption": "Flokinho dormindo profundamente após suas vitórias olímpicas.",
        "category": "reflexao",
        "week": 36,
        "day": 6
    },
    {
        "headline": "A AULA COM O QUERUBIM DA GUARDA",
        "subheadline": "O anjo explica a Flokinho que todos os pets são guardiões da Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">Q</span>uerubim sentou-se ao lado de {nome} e revelou que os cães continuam protegendo seus donos lá de cima, enviando paz através de bons sentimentos cotidianos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Aula com o Querubim da Guarda - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "anjo de asas azuis lendo livro antigo",
        "caption": "Flokinho ouvindo com atenção a revelação do anjo.",
        "category": "reflexao",
        "week": 37,
        "day": 1
    },
    {
        "headline": "A ESCRITA DOS NOMES DOS DONOS",
        "subheadline": "Flokinho desenha o nome de sua família nas estrelas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} usou sua patinha para desenhar o nome de {familia} em uma estrela de luz. O anjo explicou que isso cria um elo permanente que nunca se quebra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Escrita dos Nomes dos Donos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "nome escrito com faixas de luz dourada",
        "caption": "Flokinho desenhando o nome da família na estrela.",
        "category": "mensagem",
        "week": 37,
        "day": 2
    },
    {
        "headline": "O CANAL DE ENERGIA DE LUZ",
        "subheadline": "Flokinho aprende a direcionar pensamentos positivos para a Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} sentou na beira de sua nuvem e concentrou seu amor. Ele enviou um feixe de luz dourada direto para a sala de estar da casa de seu dono.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Canal de Energia de Luz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "feixe de luz solar brilhando na sala",
        "caption": "Flokinho direcionando seu raio de amor para a Terra.",
        "category": "mensagem",
        "week": 37,
        "day": 3
    },
    {
        "headline": "A RESPOSTA NA TERRA",
        "subheadline": "O dono sente uma sensação inexplicável de paz ao lembrar do pet.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, {dono} sentiu um calor repentino no peito e sorriu lembrando de uma travessura de {nome}. A tristeza deu lugar a uma saudade gostosa e leve.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Resposta na Terra - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "homem sorrindo com olhar pensativo na janela",
        "caption": "O dono de Flokinho sentindo o calor do elo espiritual.",
        "category": "reflexao",
        "week": 37,
        "day": 4
    },
    {
        "headline": "A ALEGRIA DO GUARDIÃO DO CÉU",
        "subheadline": "Flokinho pula de alegria ao ver que o elo de amor funciona.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o ver seu dono feliz, {nome} correu em círculos abanando o rabo. Baiacu e Sócrates o parabenizaram pela bela conexão estabelecida entre as dimensões.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Alegria do Guardião do Céu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorrinho pulando alegre na grama sob sol",
        "caption": "Flokinho comemorando a eficácia do seu elo de luz.",
        "category": "amizade",
        "week": 37,
        "day": 5
    },
    {
        "headline": "O DESCANSO NO ELO DE LUZ",
        "subheadline": "Flokinho dorme sabendo que vigia sua família com amor.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om o coração cheio de paz, {nome} deitou-se na nuvem do {lugar}. Ele adormeceu sob o brilho de sua estrela de elo, vigiando o sono de seus humanos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso no Elo de Luz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama de nuvens iluminada por constelação de cachorro",
        "caption": "Flokinho dormindo tranquilo sabendo que protege seus donos.",
        "category": "reflexao",
        "week": 37,
        "day": 6
    },
    {
        "headline": "A DESCOBERTA DO SOPRADOR DE VENTO",
        "subheadline": "Flokinho aprende a usar a máquina celestial que envia brisas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">Q</span>uerubim mostrou a {nome} o grande soprador de brisas. Ele latiu dentro do tubo para enviar uma mensagem em forma de som suave para o quintal de casa.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Descoberta do Soprador de Vento - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "tubo dourado esculpido de forma clássica",
        "caption": "Flokinho latiendo dentro do soprador celestial.",
        "category": "aventura",
        "week": 38,
        "day": 1
    },
    {
        "headline": "O TREINO DO TOM SUAVE",
        "subheadline": "Flokinho ensaia uivar baixinho para soar como folhas balançando.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} treinou com Sócrates para que seu latido de Shih Tzu soasse como o balanço suave de folhas de jasmim ao vento. Uma técnica musical refinada.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Treino do Tom Suave - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "folhas de árvore balançando no outono",
        "caption": "Flokinho treinando seu uivo de brisa com Sócrates.",
        "category": "humor",
        "week": 38,
        "day": 2
    },
    {
        "headline": "A TRANSMISSÃO DO SINAL DE BRISA",
        "subheadline": "O latido viaja pelas correntes de ar e desce para a Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> som viajou pela atmosfera e chegou ao quintal da família Luchesi como um redemoinho morno que fez as folhas secas dançarem em círculos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Transmissão do Sinal de Brisa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "redemoinho de folhas secas no quintal",
        "caption": "Flokinho observando o sinal de brisa descer para a Terra.",
        "category": "mensagem",
        "week": 38,
        "day": 3
    },
    {
        "headline": "O SORRISO NO QUINTAL",
        "subheadline": "O dono ouve o balanço do vento e lembra das brincadeiras de Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>eu dono ouviu o barulho do vento e lembrou da mania de {nome} de correr atrás das folhas secas no quintal. Ele sorriu, sentindo a presença do amigo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sorriso no Quintal - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "homem sorrindo no quintal sob o vento",
        "caption": "O dono de Flokinho lembrando com carinho do pet.",
        "category": "reflexao",
        "week": 38,
        "day": 4
    },
    {
        "headline": "A COMEMORAÇÃO DOS MENSAGEIROS",
        "subheadline": "Flokinho e seus amigos bebem suco de carne para festejar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a taverna de Baiacu, todos celebraram o sucesso do sinal de brisa. {nome} ganhou um pote dourado com pedaços suculentos de {comida} do barman.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Comemoração dos Mensageiros - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "copo de suco de carne decorado na mesa",
        "caption": "Flokinho comemorando com Baiacu e Sócrates no bar.",
        "category": "comida",
        "week": 38,
        "day": 5
    },
    {
        "headline": "O SONO NA NUVEM DE JASMIM",
        "subheadline": "Flokinho adormece com o cheiro morno das flores do jardim.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a barriga cheia e a mente tranquila, {nome} deitou-se na sua nuvem de dormir. Ele adormeceu embalado pelo aroma suave de jasmim e amor.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono na Nuvem de Jasmim - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "almofada aconchegante cercada de flores brancas",
        "caption": "Flokinho dormindo na nuvem perfumada de jasmim.",
        "category": "reflexao",
        "week": 38,
        "day": 6
    },
    {
        "headline": "A DESCOBERTA DA FONTE DAS MEMÓRIAS",
        "subheadline": "Flokinho encontra um espelho d'água que mostra momentos felizes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} e Canarinho voaram até a Fonte da Memória. O espelho d'água refletia momentos felizes de sua vida terrestre na casa de {familia}.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Descoberta da Fonte das Memórias - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "fonte de pedra antiga com água calma",
        "caption": "Flokinho admirando as projeções na água da fonte.",
        "category": "aventura",
        "week": 39,
        "day": 1
    },
    {
        "headline": "A LEMBRANÇA DO PRIMEIRO BIFINHO",
        "subheadline": "O espelho mostra Flokinho ganhando comida de seu dono.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a água, {nome} viu a si mesmo filhote, ganhando um suculento pedaço de {comida} de seu dono pela primeira vez. Ele abanou o rabo de alegria.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Lembrança do Primeiro Bifinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pedaço de bifinho grelhado sendo servido",
        "caption": "Flokinho sorrindo ao ver a projeção do bifinho de infância.",
        "category": "comida",
        "week": 39,
        "day": 2
    },
    {
        "headline": "O COCHILO COLETIVO NO SOFÁ",
        "subheadline": "A imagem de Flokinho dormindo no pé da cama com a família.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> espelho mostrou {nome} deitado no pé da cama, aninhado entre as pernas de {dono} em uma noite de inverno. O calor da lembrança aqueceu o peito.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Cochilo Coletivo no Sofá - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1477884213980-b778400c9045?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto aconchegante com iluminação de inverno",
        "caption": "Flokinho revivendo as sonecas quentinhas de inverno.",
        "category": "reflexao",
        "week": 39,
        "day": 3
    },
    {
        "headline": "O CONSELHO SÁBIO DA CORUJA",
        "subheadline": "A coruja conselheira explica que as memórias são eternas.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> coruja sábia pousou perto de {nome} e disse: 'O tempo na Terra passa rápido, mas no céu o amor de suas memórias dura para sempre'. {nome} compreendeu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Conselho Sábio da Coruja - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "coruja de olhos grandes no galho sob a lua",
        "caption": "Flokinho ouvindo a coruja sábia no bosque sagrado.",
        "category": "reflexao",
        "week": 39,
        "day": 4
    },
    {
        "headline": "A PINTURA NO ESPELHO",
        "subheadline": "Flokinho deixa a marca de sua patinha na água brilhante.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} tocou a água com a pata direita, criando ondas coloridas que se transformaram em flores de luz na superfície da fonte das memórias.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Pintura no Espelho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pegada de cachorro na água límpida",
        "caption": "Flokinho deixando sua pegada de luz na fonte.",
        "category": "humor",
        "week": 39,
        "day": 5
    },
    {
        "headline": "O SONO DA GRATIDÃO PROFUNDA",
        "subheadline": "Flokinho dorme sabendo que viveu a melhor vida terrestre.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om o peito cheio de gratidão pela vida linda que teve na Terra, {nome} adormeceu na nuvem do {lugar}. Ele dormiu um sono profundo e calmo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono da Gratidão profunda - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama de nuvens macias sob a luz das estrelas",
        "caption": "Flokinho dormindo tranquilo e feliz com seu passado.",
        "category": "saudade",
        "week": 39,
        "day": 6
    },
    {
        "headline": "O DEBATE SOBRE O TEMPO",
        "subheadline": "Flokinho e Sócrates conversam sobre como o tempo passa diferente no céu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} e Sócrates sentaram na beira da nuvem de observação. Sócrates explicou que um dia terrestre é apenas um piscar de olhos no paraíso.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Debate Sobre o Tempo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "relógio de sol antigo esculpido na rocha",
        "caption": "Flokinho e Sócrates em debate sobre a eternidade.",
        "category": "reflexao",
        "week": 40,
        "day": 1
    },
    {
        "headline": "A FILOSOFIA DO LAMBEIJO",
        "subheadline": "Sócrates explica que os lambeijos são a forma mais pura de energia espiritual.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> gato explicou a {nome} que os humanos entendem os lambeijos como beijos de amor, que curam e acalmam a mente estressada. {nome} latiu em concordância.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Filosofia do Lambeijo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorrinho lambendo a bochecha de pessoa",
        "caption": "Sócrates ensinando a filosofia dos lambeijos.",
        "category": "reflexao",
        "week": 40,
        "day": 2
    },
    {
        "headline": "A TÉCNICA DO COCHILO PROFUNDO",
        "subheadline": "Sócrates ensina como sonhar com a Terra de forma lúcida.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates mostrou como focar a mente no {lugar} da Terra antes de dormir para visitar a família Luchesi em sonhos reais de amor.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Técnica do Cochilo Profundo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "almofada confortável com bordados elegantes",
        "caption": "Sócrates demonstrando a técnica do sono lúcido.",
        "category": "humor",
        "week": 40,
        "day": 3
    },
    {
        "headline": "O SONHO LÚCIDO DE FLOKINHO",
        "subheadline": "Flokinho visita seu dono durante o sono terrestre.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>ormindo na nuvem, {nome} sonhou que estava na sala correndo atrás da {brinquedo} com seu dono. O sonho foi tão nítido que ele sentiu o cheiro da sala.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sonho Lúcido de Flokinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "sala de estar aconchegante com tapete macio",
        "caption": "Flokinho correndo feliz com seu dono em sonho.",
        "category": "mensagem",
        "week": 40,
        "day": 4
    },
    {
        "headline": "O SORRISO DO DONO DE MANHÃ",
        "subheadline": "O dono acorda feliz por ter sonhado com o pet.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, {dono} acordou com o coração leve e um sorriso largo, sentindo que tinha passado a noite inteira correndo com {nome} no quintal.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sorriso do Dono de Manhã - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "homem sorrindo ao acordar no quarto ensolarado",
        "caption": "O dono de Flokinho acordando com energia positiva pós-sonho.",
        "category": "reflexao",
        "week": 40,
        "day": 5
    },
    {
        "headline": "A VITÓRIA DO AMOR ESPIRITUAL",
        "subheadline": "Flokinho acorda feliz ao ver o sorriso de seu dono.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} acordou abanando o rabo forte. Ele latiu alegremente ao ver seu dono feliz, sabendo que os sonhos são pontes reais que conectam os dois.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Vitória do Amor Espiritual - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorrinho Shih Tzu feliz correndo no jardim",
        "caption": "Flokinho celebrando o sucesso da visita em sonho.",
        "category": "amizade",
        "week": 40,
        "day": 6
    },
    {
        "headline": "A VISITA DO BEIJA-FLOR MÁGICO",
        "subheadline": "Um beija-flor de asas douradas visita Flokinho no jardim celestial.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje um beija-flor pousou no focinho de {nome}. O pássaro disse que faria uma viagem à Terra e perguntou se ele queria enviar um sinal de luz.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Visita do Beija-Flor Mágico - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1499346030926-f872da17868a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "beija-flor colorido voando perto de flores",
        "caption": "Flokinho conversando com o beija-flor mágico.",
        "category": "aventura",
        "week": 41,
        "day": 1
    },
    {
        "headline": "O ENVIO DO BEIJO DE LUZ",
        "subheadline": "Flokinho assopra poeira estelar nas asas do beija-flor.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} soprou uma pitada de poeira de estrela dourada sobre o pássaro. 'Leve este beijo de conforto para meu dono', latiu com carinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Envio do Beijo de Luz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "poeira brilhante dourada voando no ar",
        "caption": "Flokinho decorando as asas do beija-flor com poeira estelar.",
        "category": "mensagem",
        "week": 41,
        "day": 2
    },
    {
        "headline": "A VIAGEM DO BEIJA-FLOR",
        "subheadline": "O passarinho cruza o portal e desce em direção ao jardim terrestre.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> beija-flor cruzou a ponte de luz e viajou veloz. Ele desceu em direção ao jardim da casa de {familia}, brilhando sob a luz do sol.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Viagem do Beija-Flor - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "beija-flor voando rápido no jardim ensolarado",
        "caption": "O beija-flor descendo em direção à casa de Flokinho.",
        "category": "aventura",
        "week": 41,
        "day": 3
    },
    {
        "headline": "O ENCONTRO NO JARDIM DA TERRA",
        "subheadline": "O beija-flor pousa perto de seu dono e brilha de forma incomum.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, o beija-flor pousou em uma flor de jasmim bem em frente a {dono}. O pássaro brilhou com uma cor dourada que fez o dono sorrir na hora.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro no Jardim da Terra - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "beija-flor pousado em flor branca de jasmim",
        "caption": "O dono de Flokinho admirando o brilho do beija-flor.",
        "category": "mensagem",
        "week": 41,
        "day": 4
    },
    {
        "headline": "O CALOR NO PEITO DA FAMÍLIA",
        "subheadline": "A família sente a presença sutil de Flokinho no beija-flor.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> família Luchesi olhou para o pássaro e sentiu uma onda de carinho e paz. Lembraram do amor de {nome} e souberam que ele mandou o mensageiro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Calor no Peito da Família - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "família sorrindo unida no jardim ensolarado",
        "caption": "A família sentindo o abraço espiritual do mensageiro.",
        "category": "reflexao",
        "week": 41,
        "day": 5
    },
    {
        "headline": "O SONO DO MENSAGEIRO FELIZ",
        "subheadline": "Flokinho dorme na sua nuvem sabendo que seu abraço chegou.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a confirmação da entrega do sinal, {nome} deitou-se na sua nuvem de dormir. Ele adormeceu tranquilo sob a brisa fresca do céu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono do Mensageiro Feliz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto aconchegante de hotel com lençóis brancos",
        "caption": "Flokinho dormindo em paz após o retorno do beija-flor.",
        "category": "reflexao",
        "week": 41,
        "day": 6
    },
    {
        "headline": "A PARCERIA COM A BORBOLETA AMARELA",
        "subheadline": "Flokinho treina uma linda borboleta para fazer desenhos aéreos na Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje {nome} brincou com uma borboleta amarela no jardim celeste. Ele pediu para ela levar uma mensagem de esperança para seu dono na Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Parceria com a Borboleta amarela - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1472214222541-d510753a4907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "borboleta amarela voando perto das flores",
        "caption": "Flokinho treinando a borboleta no jardim das nuvens.",
        "category": "amizade",
        "week": 42,
        "day": 1
    },
    {
        "headline": "A MENSAGEM GRAVADA NAS ASAS",
        "subheadline": "Flokinho deixa a marca de sua patinha na ponta da asa da borboleta.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} encostou delicadamente a patinha na asa da borboleta, deixando um desenho sutil de osso de luz que brilha suavemente ao sol.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Mensagem Gravada nas Asas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "asa de borboleta colorida em zoom",
        "caption": "Flokinho deixando sua marca na asa da borboleta.",
        "category": "mensagem",
        "week": 42,
        "day": 2
    },
    {
        "headline": "O VOO ATRAVÉS DAS DIMENSÕES",
        "subheadline": "A borboleta cruza as nuvens em direção ao mundo terrestre.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> borboleta amarela viajou pelas correntes de ar, descendo lentamente até a janela do quarto onde {nome} costumava dormir no pé da cama.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Voo Através das Dimensões - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "borboleta amarela voando perto da janela",
        "caption": "A borboleta cruzando a janela do lar terrestre de Flokinho.",
        "category": "aventura",
        "week": 42,
        "day": 3
    },
    {
        "headline": "O POUSO NA JANELA DA TERRA",
        "subheadline": "A borboleta pousa no vidro e pisca suas asas sob os olhos do dono.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, {dono} viu a borboleta amarela pousar no vidro da janela. O desenho de patinha brilhou sob a luz do sol, chamando sua atenção.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Pouso na Janela da Terra - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "borboleta amarela pousada no vidro da janela",
        "caption": "O dono de Flokinho observando a borboleta na janela.",
        "category": "mensagem",
        "week": 42,
        "day": 4
    },
    {
        "headline": "A CERTEZA DO AMOR QUE CUIDA",
        "subheadline": "O dono sente que Flokinho está vigiando seus passos de perto.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> coração de seu dono encheu-se de conforto. Ele sussurrou: 'Obrigado por mandar notícias, Floquinho de Neve'. A saudade virou amor quentinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Certeza do Amor que Cuida - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "homem sorrindo com a mão no peito na janela",
        "caption": "O dono sentindo a paz trazida pelo sinal da borboleta.",
        "category": "reflexao",
        "week": 42,
        "day": 5
    },
    {
        "headline": "O DESCANSO NA NUVEM DE FLORES",
        "subheadline": "Flokinho dorme feliz sabendo que sua presença foi sentida.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} deitou-se na nuvem do {lugar} celestial. Ele adormeceu sob o cheiro morno das flores, sabendo que seu elo continua mais forte do que nunca.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso na Nuvem de Flores - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "almofada confortável cercada de rosas coloridas",
        "caption": "Flokinho adormecendo tranquilo cercado de flores.",
        "category": "reflexao",
        "week": 42,
        "day": 6
    },
    {
        "headline": "O ENCONTRO COM A JOANINHA",
        "subheadline": "Flokinho encontra uma joaninha de pintinhas brilhantes no bosque.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje {nome} avistou uma joaninha que brilhava como uma pequena estrela de rubi. Ela disse que levaria seus desejos de felicidade para a Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com a Joaninha - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "joaninha vermelha brilhante na folha verde",
        "caption": "Flokinho conversando com a joaninha dos desejos.",
        "category": "aventura",
        "week": 43,
        "day": 1
    },
    {
        "headline": "A ESCRITA DOS DESEJOS DE ALEGRIA",
        "subheadline": "Flokinho pede ao Querubim para gravar votos de paz na joaninha.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} pediu para gravar três desejos: 'Risadas em casa', 'Luz no coração' e 'Fim das lágrimas'. O anjo gravou os votos nas asas do inseto.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Escrita dos Desejos de Alegria - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1505533338688-f59cd91f0415?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "joaninha vermelha bonita sob luz solar",
        "caption": "Flokinho ditando seus desejos de paz para o inseto.",
        "category": "mensagem",
        "week": 43,
        "day": 2
    },
    {
        "headline": "A DESCIDA DO MENSAGEIRO VERMELHO",
        "subheadline": "A joaninha viaja veloz pelo vento quente de primavera.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> pequeno inseto voou pelas correntes de ar morno, descendo em direção à sala onde a família Luchesi costumava se reunir para dar carinho no pet.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Descida do Mensageiro Vermelho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "joaninha voando perto de plantas do quintal",
        "caption": "A joaninha vermelha descendo para a Terra.",
        "category": "aventura",
        "week": 43,
        "day": 3
    },
    {
        "headline": "O ENCONTRO COM A FAMÍLIA NA TERRA",
        "subheadline": "A joaninha pousa no colo de seu dono enquanto ele descansa.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, a joaninha pousou delicadamente na mão de {dono}. Ele sentiu um formigamento de paz e lembrou das brincadeiras de {nome}.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com a Família na Terra - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "joaninha pousada no dedo indicador de pessoa",
        "caption": "O dono de Flokinho sorrindo para a joaninha no seu dedo.",
        "category": "mensagem",
        "week": 43,
        "day": 4
    },
    {
        "headline": "A PAZ QUE INUNDA A CASA",
        "subheadline": "A família sente uma leveza inexplicável nos corações.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> família Luchesi sentiu o ambiente da casa ficar mais alegre e tranquilo. Sabiam que {nome} continuava cuidando da felicidade deles de cima.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Paz que Inunda a Casa - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "sala de estar decorada com flores e luz solar",
        "caption": "A família sentindo a harmonia no ambiente da sala.",
        "category": "reflexao",
        "week": 43,
        "day": 5
    },
    {
        "headline": "O SONO DA JOANINHA E DE FLOKINHO",
        "subheadline": "Flokinho dorme sabendo que seus desejos foram realizados.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} deitou-se na nuvem de veludo e adormeceu. Ele dormiu sabendo que seus humanos estavam sorrindo de novo e que a paz tinha voltado ao seu lar.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono da Joaninha e de Flokinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1529429617329-84dab8eb7729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto de dormir calmo com lençóis brancos",
        "caption": "Flokinho dormindo tranquilo sob o manto da lua.",
        "category": "reflexao",
        "week": 43,
        "day": 6
    },
    {
        "headline": "A PREPARAÇÃO DO SONHO",
        "subheadline": "Flokinho planeja uma visita especial no sono de seu dono.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} reuniu-se com Sócrates para planejar uma visita por sonho. Eles criaram um cenário com o {lugar} da Terra e a inseparável {brinquedo}.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Preparação do Sonho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto com cama arrumada e luz suave",
        "caption": "Flokinho montando o cenário do sonho com o anjo.",
        "category": "mensagem",
        "week": 44,
        "day": 1
    },
    {
        "headline": "A ESCRITA DO ROTEIRO DO SONHO",
        "subheadline": "Flokinho dita as brincadeiras preferidas para o Querubim desenhar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> sonho seria assim: correr sem coleira pela grama, dar lambeijos gelados no rosto e deitar de barriga para cima recebendo aquela massagem especial.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Escrita do Roteiro do Sonho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "caderno com desenhos coloridos infantis",
        "caption": "Flokinho planejando as brincadeiras da visita por sonho.",
        "category": "humor",
        "week": 44,
        "day": 2
    },
    {
        "headline": "A TRANSMISSÃO DO SINAL DO SONHO",
        "subheadline": "Flokinho entra no sono de seu dono durante a madrugada.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">À</span> meia-noite terrestre, {nome} deitou na nuvem de sonhos e concentrou-se. Ele entrou silenciosamente no sono de {dono}, que dormia cansado na Terra.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Transmissão do Sinal do Sonho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pessoa dormindo tranquila na cama sob luar",
        "caption": "Flokinho transmitindo sua presença para o sono do dono.",
        "category": "mensagem",
        "week": 44,
        "day": 3
    },
    {
        "headline": "O REENCONTRO NO SONHO DA TERRA",
        "subheadline": "O dono sonha que está correndo e brincando com o pet de novo.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>o sonho, o dono viu {nome} correndo em sua direção. Eles se abraçaram forte e {nome} latiu com o mesmo tom alegre de sempre, abanando o rabo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Reencontro no Sonho da Terra - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "homem correndo com cachorro pequeno na praia",
        "caption": "O reencontro emocionante de Flokinho e seu dono em sonho.",
        "category": "mensagem",
        "week": 44,
        "day": 4
    },
    {
        "headline": "O SORRISO AO DESPERTAR",
        "subheadline": "O dono acorda com o peito leve e a certeza da presença de Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>o acordar de manhã, {dono} sentiu uma paz indescritível e um sorriso sincero no rosto. Ele soube que de alguma forma esteve com seu amigo querido.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sorriso ao Despertar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "homem sorrindo ao acordar de manhã no quarto",
        "caption": "O dono acordando com o coração cheio de alegria pós-sonho.",
        "category": "reflexao",
        "week": 44,
        "day": 5
    },
    {
        "headline": "A COMEMORAÇÃO NO CÉU DOS PETS",
        "subheadline": "Flokinho acorda pulando de alegria pelo sucesso da visita.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} acordou dando pulinhos na taverna de Baiacu. Ele contou a todos como foi o abraço no sonho, sendo parabenizado por Sócrates e Baiacu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Comemoração no Céu dos Pets - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1511275539165-cc46b1ee8960?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorrinho Shih Tzu feliz correndo no jardim",
        "caption": "Flokinho celebrando a visita de amor realizada com sucesso.",
        "category": "amizade",
        "week": 44,
        "day": 6
    },
    {
        "headline": "A DECORAÇÃO DO JARDIM CELESTE",
        "subheadline": "Flokinho ajuda a decorar as nuvens com flores de luz para a festa.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje começou a preparação para as festividades celestes. {nome} ajudou os anjos a espalhar margaridas de luz pelo gramado do setor sul, abanando o rabo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Decoração do Jardim Celeste - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1520119862149-6e4b1ad93475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gramado bonito decorado com luzes brilhantes",
        "caption": "Flokinho espalhando flores de luz no jardim celeste.",
        "category": "evento",
        "week": 45,
        "day": 1
    },
    {
        "headline": "O ENSAIO DOS CANTORES CELESTIAIS",
        "subheadline": "Flokinho treina uivar canções alegres para a comemoração.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Coral Canino ensaiou sob a regência de Sócrates. {nome} treinou uivar em sintonia com as harpas, criando uma música que traz paz aos corações terrestres.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Ensaio dos Cantores Celestiais - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "coral de cachorros no palco sob luz suave",
        "caption": "Flokinho ensaiando as canções alegres de final de ano.",
        "category": "evento",
        "week": 45,
        "day": 2
    },
    {
        "headline": "A PADARIA DOS BISCOITOS MÁGICOS",
        "subheadline": "Flokinho ajuda a preparar biscoitos em formato de osso e coração.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} correu até a cozinha dos anjos. Eles assaram biscoitos que cheiram a {comida} e mel. Ele ajudou a provar os primeiros biscoitos que saíram do forno.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Padaria dos Biscoitos Mágicos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "biscoitos caseiros decorados em formato de coração",
        "caption": "Flokinho ajudando a testar os biscoitos mágicos.",
        "category": "comida",
        "week": 45,
        "day": 3
    },
    {
        "headline": "A MONTAGEM DA ÁRVORE DE GRAVETOS",
        "subheadline": "Flokinho constrói uma árvore com seus gravetos luminosos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a ajuda de Baiacu, {nome} reuniu os gravetos brilhantes que colheu e montou uma árvore iluminada na praça do bar, sob aplausos do Canarinho.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Montagem da Árvore de Gravetos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "árvore decorada com gravetos luminosos e enfeites",
        "caption": "Flokinho decorando sua árvore de gravetos luminosos.",
        "category": "evento",
        "week": 45,
        "day": 4
    },
    {
        "headline": "A ENTREGA DOS PRESENTES CELESTIAIS",
        "subheadline": "Flokinho ganha uma nova bolinha azul que brilha no escuro.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>omo agradecimento por sua ajuda, o Querubim deu a {nome} uma versão melhorada de sua {brinquedo}, que emite luzes coloridas quando bate nas nuvens.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Entrega dos Presentes Celestiais - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "bolinha de cachorro que acende luzes coloridas",
        "caption": "Flokinho correndo orgulhoso com sua nova bolinha.",
        "category": "humor",
        "week": 45,
        "day": 5
    },
    {
        "headline": "O SONO FELIZ PÓS-PREPARATIVOS",
        "subheadline": "Flokinho adormece sonhando com a alegria das comemorações.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om as nuvens prontas e o peito cheio de empolgação festiva, {nome} deitou no seu cantinho quentinho do {lugar} celestial e dormiu um sono profundo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono Feliz Pós-Preparativos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "quarto de dormir calmo com lençóis brancos",
        "caption": "Flokinho dormindo tranquilo e sonhando com festas.",
        "category": "reflexao",
        "week": 45,
        "day": 6
    },
    {
        "headline": "A ABERTURA DO FESTIVAL DE LUZ",
        "subheadline": "Flokinho lidera a caminhada das lanternas de desejos nas nuvens.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje começou o Festival dos Desejos. {nome} desfilou com uma lanterna dourada no focinho, guiando os cãezinhos menores pelas rampas de nuvens macias.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Abertura do Festival de Luz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "lanternas flutuando alto no céu noturno",
        "caption": "Flokinho liderando o desfile das lanternas de desejos.",
        "category": "evento",
        "week": 46,
        "day": 1
    },
    {
        "headline": "O DESEJO DE SORRISOS NA TERRA",
        "subheadline": "Flokinho pede ao vento para soprar alegria sobre sua família.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">F</span>lokinho escreveu na sua lanterna de nuvem: 'Que meu dono ria hoje'. Ele soprou a lanterna que subiu alto no céu celestial, brilhando como ouro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Desejo de Sorrisos na Terra - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "lanterna de papel brilhante subindo nas nuvens",
        "caption": "Flokinho soprando sua lanterna de desejos para o alto.",
        "category": "mensagem",
        "week": 46,
        "day": 2
    },
    {
        "headline": "A CASCATA DE ESTRELAS CADENTES",
        "subheadline": "O céu celeste envia uma chuva de meteoros brilhantes para a Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">E</span>m resposta aos desejos dos pets, uma chuva de estrelas cadentes clareou a noite terrestre. {nome} assistiu ao lado de Sócrates, abanando o rabo.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Cascata de Estrelas Cadentes - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "chuva de estrelas cadentes riscando o céu escuro",
        "caption": "Flokinho admirando as estrelas cadentes celestes.",
        "category": "evento",
        "week": 46,
        "day": 3
    },
    {
        "headline": "A SENSAÇÃO DE PAZ NO LAR",
        "subheadline": "A família Luchesi sente o ambiente mais leve ao olhar o céu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, a família Luchesi olhou para o céu estrelado e sentiu um conforto inexplicável. Lembraram do amor de {nome} e sentiram saudades sem choro.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Sensação de Paz no Lar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "família unida olhando para o céu noturno sorrindo",
        "caption": "A família Luchesi sentindo a paz trazida pelo festival.",
        "category": "reflexao",
        "week": 46,
        "day": 4
    },
    {
        "headline": "A RODADA DE COMIDAS DE BAIACU",
        "subheadline": "Baiacu serve pratos festivos de carne para comemorar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a taverna, Baiacu serviu porções generosas de {comida} grelhada com molho de nuvens. {nome} comeu com vontade e dividiu um pedaço com o gatinho Sócrates.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Rodada de Comidas de Baiacu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "prato de carne apetitoso servido na mesa",
        "caption": "Flokinho saboreando os pratos festivos na taverna.",
        "category": "comida",
        "week": 46,
        "day": 5
    },
    {
        "headline": "O SONO TRANQUILO DO MENSAGEIRO",
        "subheadline": "Flokinho adormece sob o manto das lanternas de desejos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a certeza de que seus desejos de alegria foram recebidos, {nome} deitou-se na sua nuvem macia do {lugar}. Ele adormeceu em paz e harmonia.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono Tranquilo do Mensageiro - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama de nuvens brancas iluminada por estrelas cadentes",
        "caption": "Flokinho dormindo sob o brilho do festival dos desejos.",
        "category": "reflexao",
        "week": 46,
        "day": 6
    },
    {
        "headline": "A GRANDE ASSEMBLEIA",
        "subheadline": "Animais de todas as colinas reúnem-se para comemorar a união.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje começou a Reunião Anual de todos os animais celestes. {nome} foi o representante dos cãezinhos de pequeno porte no grande auditório de nuvens.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Grande Assembleia - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "grande auditório de madeira ao ar livre sob sol",
        "caption": "Flokinho representando os Shih Tzus na assembleia.",
        "category": "evento",
        "week": 47,
        "day": 1
    },
    {
        "headline": "O DISCURSO DO UIVO DE PAZ",
        "subheadline": "Flokinho faz um uivo que traz sentimentos de amor a todos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} subiu ao púlpito de nuvem e soltou um uivo que soou como harmonia celestial. Todos os animais e anjos aplaudiram seu carisma e fofura.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Discurso do Uivo de Paz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "púlpito de madeira clássico iluminado por sol",
        "caption": "Flokinho uivando sob aplausos na assembleia celestial.",
        "category": "evento",
        "week": 47,
        "day": 2
    },
    {
        "headline": "O ABRAÇO DOS AMIGOS NO BAR",
        "subheadline": "Sócrates e Baiacu brindam com suco de carne à amizade.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>e volta ao bar, os três amigos comemoraram a união com uma rodada de suco sabor {comida}. Sócrates deitou no colo de {nome} em sinal de amizade profunda.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Abraço dos Amigos no Bar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "copo de suco saboroso na taverna de madeira",
        "caption": "Flokinho comemorando a amizade com Sócrates e Baiacu.",
        "category": "amizade",
        "week": 47,
        "day": 3
    },
    {
        "headline": "A HORTA DE BISCOITOS FESTIVOS",
        "subheadline": "Flokinho ajuda a distribuir lanchinhos para os filhotes menores.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} passou a tarde ajudando a colher biscoitos em formato de osso na horta dos anjos e a entregá-los para os filhotinhos de cães recém-chegados.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Horta de Biscoitos Festivos - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "horta bonita com plantas brilhantes sob sol",
        "caption": "Flokinho distribuindo biscoitos de osso no festival.",
        "category": "comida",
        "week": 47,
        "day": 4
    },
    {
        "headline": "A DANÇA DAS PATINHAS COLORIDAS",
        "subheadline": "Flokinho ensina todos a dançarem sua coreografia favorita.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} subiu na mesa de nuvem e dançou a coreografia de rodar três vezes antes de deitar. Logo todos os cães e anjos dançavam juntos com alegria.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Dança das Patinhas Coloridas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pista de dança colorida com luzes brilhantes",
        "caption": "Flokinho ensinando os cães a dançarem no festival.",
        "category": "humor",
        "week": 47,
        "day": 5
    },
    {
        "headline": "O SONO NA TRÉGUA GERAL",
        "subheadline": "Flokinho dorme com a certeza de que é amado por todos.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>ansado de tanta comemoração, {nome} enrolou-se na nuvem do {lugar} ao lado de Sócrates. Ele dormiu sabendo que tem a melhor vida celestial.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono na Trégua Geral - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato e cachorro deitados juntos dormindo tranquilos",
        "caption": "Flokinho dormindo em paz ao lado de Sócrates.",
        "category": "amizade",
        "week": 47,
        "day": 6
    },
    {
        "headline": "A LANTERNA DE AGRADECIMENTO",
        "subheadline": "Flokinho escreve um recado de gratidão na sua lanterna de luz.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} acendeu uma lanterna vermelha e escreveu com a patinha: 'Obrigado por me amar'. Ele soltou a lanterna no vento sul, com o rabinho abanando.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Lanterna de Agradecimento - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "lanterna vermelha brilhante subindo nas nuvens",
        "caption": "Flokinho soltando sua lanterna de agradecimento.",
        "category": "mensagem",
        "week": 48,
        "day": 1
    },
    {
        "headline": "A PISCADELA DO CÉU",
        "subheadline": "A estrela de Flokinho brilha de forma brilhante no céu terrestre.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, a família Luchesi viu a estrela de {nome} brilhar intensamente. Sentiram o calor do agradecimento do pet e sorriram felizes.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Piscadela do Céu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "estrela brilhando forte sobre o horizonte da cidade",
        "caption": "A estrela de Flokinho brilhando no céu da Terra.",
        "category": "mensagem",
        "week": 48,
        "day": 2
    },
    {
        "headline": "O CORAL DE DESPEDIDA DAS FESTAS",
        "subheadline": "Flokinho participa do uivo final de encerramento do festival.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Coral Canino uivou a melodia da despedida sob o luar de primavera. {nome} latiu no tom das harpas celestes, criando uma música de pura harmonia.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Coral de Despedida das Festas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1477884213980-b778400c9045?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "harpa clássica no palco sob luar brilhante",
        "caption": "Flokinho participando do uivo final do festival.",
        "category": "evento",
        "week": 48,
        "day": 3
    },
    {
        "headline": "A RODADA DE BIFINHOS DE CORTESIA",
        "subheadline": "Baiacu distribui petiscos para todos os clientes do bar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">B</span>aiacu distribuiu bifinhos de carne celestiais para comemorar o sucesso das festividades. {nome} ganhou uma porção extra e comeu com vontade.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Rodada de Bifinhos de Cortesia - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pote de comida de cachorro cheio de carne",
        "caption": "Flokinho saboreando seus bifinhos festivos no bar.",
        "category": "comida",
        "week": 48,
        "day": 4
    },
    {
        "headline": "O ABRAÇO DOS GUARDIÕES",
        "subheadline": "Flokinho e seus amigos reafirmam o elo de amizade eterna.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates, Baiacu, Canarinho e Querubim se reuniram para um abraço coletivo. Prometeram continuar cuidando de todos os pets e donos terrestres.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Abraço dos Guardiões - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cachorro e gato correndo juntos no campo verde",
        "caption": "Flokinho e seus amigos em momento afetuoso de união.",
        "category": "amizade",
        "week": 48,
        "day": 5
    },
    {
        "headline": "O SONO DO INÍCIO DO NOVO CICLO",
        "subheadline": "Flokinho adormece com o peito cheio de paz e amor eterno.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} deitou no seu cantinho quentinho do {lugar}. Ele adormeceu sabendo que o amor é a única coisa que realmente dura para sempre.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono do Início do Novo Ciclo - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama aconchegante de nuvens iluminada por estrelas",
        "caption": "Flokinho dormindo em paz sob a luz de sua estrela.",
        "category": "reflexao",
        "week": 48,
        "day": 6
    },
    {
        "headline": "A RETROSPECTIVA NAS NUVENS",
        "subheadline": "Flokinho olha para trás e vê tudo o que conquistou no céu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje {nome} subiu à Colina da Memória e viu a linha de sua jornada. Lembrou do medo que sentiu ao chegar e sorriu ao ver quantos amigos fez no céu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Retrospectiva nas Nuvens - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "caminho de pedras sob o céu dourado do amanhecer",
        "caption": "Flokinho contemplando seu caminho na Colina da Memória.",
        "category": "reflexao",
        "week": 49,
        "day": 1
    },
    {
        "headline": "O BRINDE NA TAVERNA DE BAIACU",
        "subheadline": "Os amigos brindam à saúde e às aventuras de Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a taverna, Baiacu preparou um coquetel especial de coco com essência de {comida}. Sócrates discursou: 'A Flokinho, o Shih Tzu mais sábio das nuvens'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Brinde na Taverna de Baiacu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "copo de coquetel na mesa de madeira do bar",
        "caption": "Flokinho brindando com seus amigos na taverna.",
        "category": "amizade",
        "week": 49,
        "day": 2
    },
    {
        "headline": "A ESCRITA DA CRÔNICA DE FLOKINHO",
        "subheadline": "Sócrates dita e Flokinho carimba a história com sua patinha.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">S</span>ócrates escreveu a crônica das peripécias de {nome}. Ele carimbou com sua patinha pintada de poeira estelar azul, deixando o registro eterno.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Escrita da Crônica de Flokinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pergaminho com escrita antiga e marca de pata",
        "caption": "Flokinho olhando orgulhoso a história registrada.",
        "category": "mensagem",
        "week": 49,
        "day": 3
    },
    {
        "headline": "A CANÇÃO DE NINAR DO CANARINHO",
        "subheadline": "O passarinho guia canta para Flokinho dormir nas nuvens.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>anarinho pousou no topo do {lugar} celestial e cantou a melodia mais doce de sua vida. {nome} ouviu a canção e sentiu seu peito inundar de paz.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Canção de Ninar do Canarinho - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pássaro azul cantando na janela ensolarada",
        "caption": "Canarinho cantando a canção de ninar para Flokinho.",
        "category": "amizade",
        "week": 49,
        "day": 4
    },
    {
        "headline": "O ABRAÇO DO QUERUBIM DA GUARDA",
        "subheadline": "O anjo agradece Flokinho por espalhar tanta alegria no céu.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim abraçou {nome} com carinho, dizendo: 'Sua presença trouxe luz nova para o céu. Obrigado por ser tão amável e brincalhão'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Abraço do Querubim da Guarda - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "anjo de asas brancas acariciando cachorro pequeno",
        "caption": "Flokinho recebendo carinho do Querubim da Guarda.",
        "category": "amizade",
        "week": 49,
        "day": 5
    },
    {
        "headline": "O SONO DA PLENITUDE",
        "subheadline": "Flokinho dorme sabendo que sua vida celeste é perfeita.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om o coração transbordando de felicidade e gratidão, {nome} deitou-se na sua nuvem macia. Ele adormeceu sonhando com novas peripécias no paraíso.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono da Plenitude - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama de nuvens brancas iluminada por estrelas cadentes",
        "caption": "Flokinho dormindo profundamente na colina dourada.",
        "category": "reflexao",
        "week": 49,
        "day": 6
    },
    {
        "headline": "A MENSAGEM NA ESTRELA CADENTE",
        "subheadline": "Flokinho escreve um recado luminoso para sua família Luchesi.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} escolheu a estrela mais brilhante e escreveu: 'Eu te amo, mãe. Eu te amo, pai. Estou sempre com vocês'. Ele a soltou na órbita terrestre.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Mensagem na Estrela Cadente - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1499346030926-f872da17868a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "estrela cadente cruzando o céu noturno azul",
        "caption": "Flokinho soltando sua estrela cadente de amor.",
        "category": "mensagem",
        "week": 50,
        "day": 1
    },
    {
        "headline": "A VISUALIZAÇÃO DO SINAL NA TERRA",
        "subheadline": "O dono vê a estrela e sente um arrepio gostoso de presença.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, a família Luchesi viu a estrela riscar o céu e sentiu uma onda de carinho imediata. Sorriram lembrando das travessuras do pet.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Visualização do Sinal na Terra - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "homem sorrindo sob o céu estrelado de noite",
        "caption": "O dono de Flokinho admirando a estrela cadente no céu.",
        "category": "mensagem",
        "week": 50,
        "day": 2
    },
    {
        "headline": "A DESCOBERTA DA HORTA DE BOLINHAS",
        "subheadline": "Flokinho encontra um campo cheio de bolinhas azuis brilhantes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} passeava quando viu um campo onde as flores pareciam sua {brinquedo}! Ele correu e pulou no meio delas, rolando de pura alegria com Baiacu.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Descoberta da Horta de Bolinhas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "campo cheio de bolinhas coloridas na colina",
        "caption": "Flokinho brincando na horta de bolinhas azuis.",
        "category": "humor",
        "week": 50,
        "day": 3
    },
    {
        "headline": "O CONSELHO FILOSÓFICO DE SÓCRATES",
        "subheadline": "Sócrates ensina que a amizade verdadeira atravessa dimensões.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> gato explicou a {nome} que a distância física não separa corações. 'A amizade que vocês construíram na Terra continua vibrando aqui', disse.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Conselho Filosófico de Sócrates - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "gato elegante de olhos verdes no jardim",
        "caption": "Sócrates conversando sobre amizade com Flokinho.",
        "category": "reflexao",
        "week": 50,
        "day": 4
    },
    {
        "headline": "A RODADA DE BIFINHOS DO BARMAN",
        "subheadline": "Baiacu serve bifinhos de carne grelhados para comemorar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a taverna, Baiacu distribuiu pratos de {comida} suculentos. {nome} comeu com apetite e latiu em agradecimento ao bartender da taverna.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Rodada de Bifinhos do Barman - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "pote dourado com comida de cachorro apetitosa",
        "caption": "Flokinho saboreando seus bifinhos com os amigos do bar.",
        "category": "comida",
        "week": 50,
        "day": 5
    },
    {
        "headline": "O SONO SOB A ÁRVORE DAS MARGARIDAS",
        "subheadline": "Flokinho adormece sob o cheiro morno das flores celestes.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a barriga cheia e a mente em paz, {nome} deitou-se sob o teto de margaridas celestes. Ele adormeceu tranquilo e em perfeita harmonia.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono sob a Árvore das Margaridas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "almofada confortável cercada de flores brancas fofas",
        "caption": "Flokinho adormecendo tranquilo sob a árvore de margaridas.",
        "category": "reflexao",
        "week": 50,
        "day": 6
    },
    {
        "headline": "O CANAL DE LUZ PERMANENTE",
        "subheadline": "Flokinho descobre que o amor de seus donos o mantém brilhando.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">Q</span>uerubim explicou que o brilho de seu pelo vem da energia do amor que {familia} continua enviando através das memórias felizes.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Canal de Luz Permanente - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1472214222541-d510753a4907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "feixe de luz dourada atravessando o vidro",
        "caption": "Flokinho brilhando com o elo de luz espiritual.",
        "category": "reflexao",
        "week": 51,
        "day": 1
    },
    {
        "headline": "A ESCRITA DA CARTA DE LUZ",
        "subheadline": "Flokinho dita um poema de gratidão ao anjo escritor.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} latiu ritmado e o anjo escreveu: 'Obrigado por cada passeio, cada carinho no pé da cama e cada bifinho de carne. Estarei sempre aqui cuidando'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Escrita da Carta de Luz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "texto elegante escrito em papel envelhecido",
        "caption": "Flokinho olhando a mensagem de gratidão escrita pelo anjo.",
        "category": "mensagem",
        "week": 51,
        "day": 2
    },
    {
        "headline": "A JOANINHA DOS DESEJOS DO DONO",
        "subheadline": "Flokinho pede ao inseto para levar um beijo de luz para a sala.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">J</span>oaninha de rubi pousou na pata de {nome}. Ele soprou de leve, enviando um beijo de conforto que pousará na bochecha de seu dono na sala de estar.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Joaninha dos Desejos do Dono - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "joaninha vermelha brilhante na flor branca",
        "caption": "Flokinho enviando o beijo de luz com a joaninha.",
        "category": "mensagem",
        "week": 51,
        "day": 3
    },
    {
        "headline": "O ARREPIO QUENTE NA SALA",
        "subheadline": "O dono sente um beijo morno de brisa na bochecha e sorri.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">N</span>a Terra, {dono} sentiu um vento quente encostar no seu rosto com perfume de lavanda. Ele sorriu e lembrou do focinho úmido de {nome} de imediato.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Arrepio Quente na Sala - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "homem sorrindo com a mão na bochecha na sala",
        "caption": "O dono sentindo a paz trazida pelo sinal de joaninha.",
        "category": "mensagem",
        "week": 51,
        "day": 4
    },
    {
        "headline": "A COMEMORAÇÃO COM SÓCRATES NO BAR",
        "subheadline": "Flokinho e seus amigos uivam de felicidade pelo amor eterno.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span>s três uivadores celebraram o sucesso do sinal. {nome} ganhou um osso gigante defumado sabor {comida} do barman Baiacu na taverna celeste.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Comemoração com Sócrates no Bar - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "osso grande na mesa de taverna de madeira",
        "caption": "Flokinho comemorando com Baiacu e Sócrates no bar.",
        "category": "comida",
        "week": 51,
        "day": 5
    },
    {
        "headline": "O SONO NA NUVEM REDE",
        "subheadline": "Flokinho adormece embalado pelo vento de primavera celestial.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">C</span>om a barriga cheia e a alma leve, {nome} deitou-se na nuvem rede. Ele adormeceu sonhando com o reencontro feliz no final dos tempos.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Sono na Nuvem Rede - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "rede de descanso de linho balançando sob árvores",
        "caption": "Flokinho dormindo na nuvem rede sob as estrelas.",
        "category": "reflexao",
        "week": 51,
        "day": 6
    },
    {
        "headline": "O ENCONTRO COM A FAMÍLIA DO CÉU",
        "subheadline": "Todos os animais celebram a jornada completa de Flokinho.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje todos os pets do céu se reuniram na Colina dourada para aplaudir {nome} pela conclusão do primeiro ciclo de sua Jornada do Herói.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro com a Família do Céu - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "grupo de cachorrinhos felizes correndo sob o sol",
        "caption": "Todos os animais homenageando Flokinho no final da jornada.",
        "category": "evento",
        "week": 52,
        "day": 1
    },
    {
        "headline": "O TROFÉU DO PELO DE OURO",
        "subheadline": "Flokinho recebe a medalha do pet mais amado e brincalhão.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Querubim entregou a {nome} uma medalha com o formato de sua amada {brinquedo}, representando o amor que nunca se apaga nas estrelas.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Troféu do Pelo de Ouro - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1505533338688-f59cd91f0415?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "troféu dourado bonito com fita de cetim vermelha",
        "caption": "Flokinho posando com seu troféu dourado no pódio.",
        "category": "evento",
        "week": 52,
        "day": 2
    },
    {
        "headline": "A MENSAGEM GRAVADA NAS ESTRELAS",
        "subheadline": "Flokinho escreve um recado eterno no céu noturno para a Terra.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} usou sua pata brilhante para desenhar a marca de Shih Tzu no céu. A constelação brilhará eternamente vigiando o lar de seu dono.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Mensagem Gravada nas Estrelas - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "constelação de estrelas brilhantes no céu escuro",
        "caption": "A constelação de Flokinho brilhando no céu noturno terrestre.",
        "category": "mensagem",
        "week": 52,
        "day": 3
    },
    {
        "headline": "O ENCONTRO COLETIVO NA TAVERNA",
        "subheadline": "Sócrates, Baiacu e Canarinho brindam à eternidade da amizade.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">D</span>e volta à taverna, os amigos brindaram com suco sabor {comida}. Sócrates declarou: 'Ao amor verdadeiro, que não tem fim nem barreira'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Encontro Coletivo na Taverna - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "copo de coquetel saboroso na mesa de taverna",
        "caption": "Flokinho comemorando o final da jornada com seus amigos.",
        "category": "amizade",
        "week": 52,
        "day": 4
    },
    {
        "headline": "A CERTEZA DO REENCONTRO FELIZ",
        "subheadline": "Flokinho envia um suspiro de vento quente prometendo esperar.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">{</span>nome} latiu bem forte na corrente de vento sul, sussurrando: 'Eu estarei sempre no sofá celestial esperando você. Coma muito bifinho por mim'.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"A Certeza do Reencontro Feliz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "vento suave soprando folhas verdes sob o sol",
        "caption": "Flokinho enviando seu recado final de amor para a Terra.",
        "category": "mensagem",
        "week": 52,
        "day": 5
    },
    {
        "headline": "O DESCANSO NA ETERNIDADE DE LUZ",
        "subheadline": "Flokinho adormece sabendo que seu legado de amor é infinito.",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span>ninhado na nuvem mais fofa do {lugar} celestial, {nome} fechou os olhos com o rabinho abanando. Ele dormiu o sono eterno dos justos, muito feliz.</p>\n<p class=\"mb-3\">Segundo correspondentes do paraíso, o nosso anjo de quatro patas continua mostrando que as pequenas alegrias da Terra viram festas eternas aqui em cima. O seu guia Canarinho e o Querubim da Guarda acompanham cada travessura bem de perto.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"O Descanso na Eternidade de Luz - Uma história de puro amor que aquece o peito.\"</p>",
        "image": "https://images.unsplash.com/photo-1529429617329-84dab8eb7729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "cama de nuvens douradas sob a luz do luar brilhante",
        "caption": "Flokinho adormecendo sob a luz da eternidade em paz.",
        "category": "reflexao",
        "week": 52,
        "day": 6
    }
];

// === SEÇÃO: TEMPLATES DA SIDEBAR ===
const sidebarData = [
    {
        "title": "Mensagem do Céu",
        "icon": "fa-cloud",
        "content": "<p class=\"text-sm italic font-body text-justify\">\"Olá, {dono}! Hoje eu vi você olhando para as minhas fotos e abanei o rabinho forte aqui de cima. Estou muito feliz, correndo pelas nuvens. Continue sorrindo por mim!\"</p>"
    },
    {
        "title": "Horóscopo Pet",
        "icon": "fa-star",
        "content": "<p class=\"text-sm font-body text-justify\"><strong>Signo de Shih Tzu:</strong> O alinhamento das estrelas de ossos indica que hoje é um dia excelente para tirar três sonecas prolongadas no {lugar} celestial e fugir de qualquer nuvem que pareça com o {odio}. Cor número da sorte: Azul-Bolinha.</p>"
    },
    {
        "title": "Classificado Celestial",
        "icon": "fa-tag",
        "content": "<p class=\"text-sm font-body text-justify\"><strong>PROCURA-SE:</strong> Parceiro de corrida para disputar quem chega primeiro ao topo da nuvem de bifinhos. Requisitos: Gostar de {comida} e não se importar com orelhas abanando no vento. Tratar com Baiacu na taverna.</p>"
    },
    {
        "title": "Bastidores do Paraíso",
        "icon": "fa-compass",
        "content": "<p class=\"text-sm font-body text-justify\">Você sabia? A horta celestial dos pets tem árvores que dão biscoitos de carne que nunca acabam. O {nome} passou a tarde testando três sabores diferentes e aprovou todos com louvor!</p>"
    },
    {
        "title": "Carta ao Dono",
        "icon": "fa-envelope",
        "content": "<p class=\"text-sm italic font-body text-justify\">\"Querida família Luchesi, o amor que recebi de vocês na Terra me mantém brilhando como a estrela mais linda daqui. Sinto saudades de deitar para {amor}, mas sei que estamos conectados. Amo vocês!\"</p>"
    },
    {
        "title": "Charge Pet",
        "icon": "fa-paw",
        "content": "<div class=\"text-center font-body\"><p class=\"text-sm italic\">\"Sócrates tenta explicar teoria da relatividade cósmica.\"</p><p class=\"text-xs font-bold text-accent mt-2\">{nome}: 'Mas Sócrates, isso ajuda a farejar onde esconderam a {brinquedo}?'</p></div>"
    }
];

// === SEÇÃO: DATAS ESPECIAIS ===
const specialDates = [
    {
        "month": 1,
        "day": 1,
        "year": null,
        "title": "EDIÇÃO ESPECIAL: ANO NOVO CELESTIAL",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Ano Novo chegou ao paraíso dos pets com uma explosão de cores e uivos de alegria! {nome} latiu forte na contagem regressiva e liderou o abraço coletivo com Sócrates, Baiacu e os anjos.</p>\n<p class=\"mb-3\">Ele manda avisar para a família Luchesi que o ano que começa na Terra está cheio de luz e que ele continuará soprando ventos quentes de amor e proteção sobre todos.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Feliz Ano Novo! Que a lembrança do amor ilumine seus dias.\"</p>",
        "image": "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "Fogos de artifício no céu",
        "caption": "Flokinho comemorando a chegada do novo ciclo."
    },
    {
        "month": 12,
        "day": 25,
        "year": null,
        "title": "EDIÇÃO ESPECIAL: NATAL NAS NUVENS",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">O</span> Natal de {nome} no céu foi repleto de luzes e biscoitos de mel! Ele ajudou a decorar o grande pinheiro celestial com gravetos de ouro e sua amada {brinquedo} brilhando no topo.</p>\n<p class=\"mb-3\">O Querubim distribuiu porções gigantes de {comida} grelhada para todos. {nome} deitou-se na beira da nuvem e olhou para a árvore da família Luchesi, enviando uma piscadela de estrela.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Feliz Natal! O amor é o maior presente que permanece para sempre.\"</p>",
        "image": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "Árvore de natal brilhando",
        "caption": "Flokinho com seu presente natalino celestial."
    },
    {
        "month": 10,
        "day": 4,
        "year": null,
        "title": "EDIÇÃO ESPECIAL: DIA DOS ANIMAIS",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">H</span>oje é o Dia de São Francisco de Assis e o Dia Mundial dos Animais! {nome} foi visto correndo lado a lado com o próprio santo padroeiro pelos gramados floridos do paraíso.</p>\n<p class=\"mb-3\">Ele ganhou uma coroa de margaridas e foi coroado como o cãozinho mais simpático do setor norte. Ele latiu de alegria para celebrar a união de todas as patinhas terrestres e celestes.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Dia de celebrar o amor incondicional que os pets nos trazem!\"</p>",
        "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "Cachorro com coroa de margaridas",
        "caption": "Flokinho com sua coroa de flores no Dia dos Animais."
    },
    {
        "month": 5,
        "day": null,
        "year": null,
        "isNthSunday": [
            5,
            2
        ],
        "title": "EDIÇÃO ESPECIAL: DIA DAS MÃES",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>ma mensagem cheia de amor para a mãe mais linda do mundo! Hoje {nome} deitou-se na beira da nuvem e soprou um milhão de sementes de dente-de-leão douradas com carinhos.</p>\n<p class=\"mb-3\">Ele quer dizer: 'Mãe, obrigado por cuidar tão bem de mim e por cada carinho que me deu. Meu coração continua aninhado no seu colo quentinho'.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Feliz Dia das Mães! O amor de mãe e filho é eterno.\"</p>",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "Campo de dentes-de-leão",
        "caption": "Flokinho mandando flores de luz para sua mãe."
    },
    {
        "month": 8,
        "day": null,
        "year": null,
        "isNthSunday": [
            8,
            2
        ],
        "title": "EDIÇÃO ESPECIAL: DIA DOS PAIS",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">U</span>m uivo especial de gratidão dedicado ao melhor pai! {nome} vestiu uma gravatinha borboleta azul feita de brisa e latiu forte para comemorar o Dia dos Pais.</p>\n<p class=\"mb-3\">Ele manda dizer: 'Pai, lembro com carinho de cada caminhada, de cada pedaço de {comida} dividido escondido e de dormir no pé da cama. Estou bem aqui em cima!'.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Feliz Dia dos Pais! O elo entre pai e pet permanece inquebrável.\"</p>",
        "image": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "Cachorro olhando com carinho",
        "caption": "Flokinho mandando uivos de parabéns para seu pai."
    },
    {
        "month": null,
        "day": null,
        "year": null,
        "isEaster": true,
        "title": "EDIÇÃO ESPECIAL: PÁSCOA CELESTIAL",
        "text": "<p class=\"mb-3\"><span class=\"float-left text-5xl font-serif font-black leading-none pr-2 pt-1\">A</span> Páscoa chegou com muita doçura nas colinas de nuvens! {nome} ajudou o Canarinho e o coelhinho celestial a esconder ovinhos sabor cenoura e carne pelos jardins do setor leste.</p>\n<p class=\"mb-3\">Ele correu com o rabinho abanando de felicidade, dividindo as guloseimas com Sócrates e Baiacu. Ele envia desejos de renovação, paz e esperança para toda a família Luchesi.</p>\n<p class=\"font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4\">\"Feliz Páscoa! Que a esperança da renovação aqueça seu coração hoje.\"</p>",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "imageAlt": "Ovos de páscoa decorados no ninho",
        "caption": "Flokinho comemorando a doçura da Páscoa celestial."
    }
];

// === SEÇÃO: FUNÇÕES DO SISTEMA ===

// Algoritmo de Gauss para calcular o dia da Páscoa de um ano
function getEaster(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
}

// Retorna o n-ésimo domingo de um mês/ano (ex: 2º domingo de maio)
function getNthSunday(year, month, n) {
    // month is 0-indexed (e.g. May is 4)
    let sundays = [];
    let date = new Date(year, month, 1);
    while (date.getMonth() === month) {
        if (date.getDay() === 0) {
            sundays.push(new Date(date));
        }
        date.setDate(date.getDate() + 1);
    }
    return sundays[n - 1];
}

// Retorna a notícia correspondente ao dia absoluto da jornada
function getNews(dayIndex) {
    const idx = dayIndex % newsData.length;
    return newsData[idx];
}

// Retorna a sidebar correspondente ao dia da semana (segunda a sábado: 0-5)
function getSidebar(dayOfWeek) {
    // dayOfWeek is 0 (seg) to 5 (sáb)
    const idx = dayOfWeek % sidebarData.length;
    return sidebarData[idx];
}

// Substitui os placeholders {variavel} no template de string
function renderTemplate(template, vars = petData) {
    return template.replace(/\{([^}]+)\}/g, (match, key) => {
        return vars[key.trim()] !== undefined ? vars[key.trim()] : match;
    });
}

// Verifica se hoje é domingo
function isSunday(date = new Date()) {
    return date.getDay() === 0;
}

// Verifica se a data atual corresponde a alguma das datas especiais
function getSpecialDate(date = new Date()) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // 1-indexed
    const year = date.getFullYear();

    for (const spec of specialDates) {
        // Caso A: Dia e mês fixos
        if (spec.day !== null && spec.month !== null && spec.day === day && spec.month === month) {
            return spec;
        }
        
        // Caso B: Páscoa (móvel)
        if (spec.isEaster) {
            const easter = getEaster(year);
            if (easter.getDate() === day && (easter.getMonth() + 1) === month) {
                return spec;
            }
        }

        // Caso C: N-ésimo domingo (ex: Dia das Mães, Dia dos Pais)
        if (spec.isNthSunday) {
            const [m, n] = spec.isNthSunday;
            const nthSunday = getNthSunday(year, m - 1, n);
            if (nthSunday && nthSunday.getDate() === day && (nthSunday.getMonth() + 1) === month) {
                return spec;
            }
        }
    }
    return null;
}
