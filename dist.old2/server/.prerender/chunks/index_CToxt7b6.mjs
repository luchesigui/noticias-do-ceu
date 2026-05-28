import { c as createComponent, a as $$Layout, b as $$Navbar, $ as $$Footer } from './Footer_Cf8VPvjs.mjs';
import 'piccolore';
import { h as renderTemplate, e as maybeRenderHead, r as renderComponent } from './prerender_Cpn8qJMn.mjs';
import { r as renderScript } from './script_CqMBQyn5.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$WaitingListModal = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Modal Wrapper -->", `<div id="waiting-list-modal" class="fixed inset-0 z-50 items-center justify-center hidden"> <!-- Semi-transparent Backdrop with blur --> <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" id="waiting-list-modal-backdrop"></div> <!-- Dialog Paper Card --> <div class="relative z-10 w-full max-w-lg mx-4 newspaper-container border-double-thick p-8 text-ink shadow-2xl"> <!-- Close Button --> <button id="waiting-list-modal-close" class="absolute top-4 right-4 text-ink/60 hover:text-ink text-xl cursor-pointer" aria-label="Fechar"> <i class="fa-solid fa-xmark"></i> </button> <!-- Header --> <div class="text-center border-b-2 border-ink pb-4 mb-6"> <p class="text-xs font-bold uppercase tracking-widest mb-1">Edição Especial de Lançamento</p> <h1 class="font-serif text-3xl font-black uppercase tracking-tighter text-ink">Notícias do Céu</h1> </div> <!-- Active Form View Block --> <div class="text-center mb-6" id="waiting-list-form-header"> <h3 class="font-serif text-2xl font-semibold mb-3 text-ink">Estamos aquecendo as impressoras celestiais! ☁️</h3> <p class="text-sm font-body leading-relaxed text-ink/80">
A procura pelo <strong>Notícias do Céu</strong> superou nossas expectativas. Estamos liberando o criador de memoriais em lotes semanais para garantir que cada pet receba uma edição de jornal diária impecável.
</p> <p class="text-sm font-body leading-relaxed text-ink/80 mt-2">
Insira seu e-mail abaixo para garantir sua vaga na lista de espera prioritária e ser avisado assim que liberarmos o acesso do seu lote.
</p> </div> <!-- Form --> <form id="waiting-list-form" class="space-y-5"> <input type="hidden" id="waiting-list-plan" name="plan" value="lifetime"> <div> <label for="waiting-list-email" class="block text-xs font-bold uppercase tracking-wider mb-2">Seu melhor e-mail</label> <input type="email" id="waiting-list-email" required placeholder="seu@email.com" class="w-full text-center font-body text-lg py-3.5 border-2 border-ink bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-xl"> </div> <div id="waiting-list-error" class="hidden text-red-700 bg-red-50 border border-red-200 px-4 py-2.5 rounded-xl text-sm text-center font-medium"></div> <button type="submit" class="w-full bg-accent text-white py-4 rounded-xl font-serif font-bold text-lg hover:bg-ink transition-colors shadow-lg flex justify-center items-center gap-2 cursor-pointer"> <span>Entrar na Fila</span> <i class="fa-solid fa-paper-plane"></i> </button> </form> <!-- Success Block (Initially Hidden) --> <div id="waiting-list-success" class="hidden text-center py-6"> <div class="inline-flex items-center justify-center w-16 h-16 bg-green-50 text-green-600 rounded-full border-2 border-green-200 mb-4 shadow-sm"> <i class="fa-solid fa-check text-3xl"></i> </div> <h3 class="font-serif text-2xl font-semibold mb-2 text-ink">Inscrição Confirmada!</h3> <p class="text-sm font-body leading-relaxed text-ink/80 max-w-sm mx-auto mb-6">
Seu e-mail foi adicionado com sucesso à nossa lista de espera prioritária. Avisaremos assim que seu acesso for liberado!
</p> <button type="button" onclick="closeWaitingListModal()" class="bg-ink text-paper px-8 py-3 rounded-full font-serif font-semibold hover:bg-accent transition-colors shadow-md cursor-pointer">
Entendido
</button> </div> <!-- Loading Overlay (Initially Hidden) --> <div id="waiting-list-loading" class="hidden absolute inset-0 bg-[#F4EADD]/80 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center z-20"> <div class="spinner mb-4"></div> <p class="font-serif font-bold text-ink">Registrando sua inscrição...</p> </div> </div> </div> <script>
  function openWaitingListModal(planName) {
    const modal = document.getElementById('waiting-list-modal');
    const planInput = document.getElementById('waiting-list-plan');
    const emailInput = document.getElementById('waiting-list-email');
    const errorEl = document.getElementById('waiting-list-error');
    const formBlock = document.getElementById('waiting-list-form');
    const formHeader = document.getElementById('waiting-list-form-header');
    const successBlock = document.getElementById('waiting-list-success');

    if (modal && planInput) {
      planInput.value = planName || 'lifetime';
      emailInput.value = '';
      if (errorEl) errorEl.classList.add('hidden');
      if (formBlock) formBlock.classList.remove('hidden');
      if (formHeader) formHeader.classList.remove('hidden');
      if (successBlock) successBlock.classList.add('hidden');
      
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden'; // prevent scrolling background
    }
  }

  function closeWaitingListModal() {
    const modal = document.getElementById('waiting-list-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = ''; // restore scrolling
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('waiting-list-modal-close');
    const backdrop = document.getElementById('waiting-list-modal-backdrop');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', closeWaitingListModal);
    }
    if (backdrop) {
      backdrop.addEventListener('click', closeWaitingListModal);
    }

    const form = document.getElementById('waiting-list-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('waiting-list-email').value.trim();
        const plan = document.getElementById('waiting-list-plan').value;
        const errorEl = document.getElementById('waiting-list-error');
        const loadingEl = document.getElementById('waiting-list-loading');
        const formBlock = document.getElementById('waiting-list-form');
        const formHeader = document.getElementById('waiting-list-form-header');
        const successBlock = document.getElementById('waiting-list-success');

        if (errorEl) errorEl.classList.add('hidden');
        if (loadingEl) loadingEl.classList.remove('hidden');

        try {
          const response = await fetch('/api/waiting-list', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, plan })
          });

          const data = await response.json();
          if (loadingEl) loadingEl.classList.add('hidden');

          if (response.ok) {
            if (formBlock) formBlock.classList.add('hidden');
            if (formHeader) formHeader.classList.add('hidden');
            if (successBlock) successBlock.classList.remove('hidden');
          } else {
            if (errorEl) {
              errorEl.textContent = data.error || 'Ocorreu um erro ao registrar sua inscrição. Tente novamente.';
              errorEl.classList.remove('hidden');
            }
          }
        } catch (err) {
          if (loadingEl) loadingEl.classList.add('hidden');
          if (errorEl) {
            errorEl.textContent = 'Erro de conexão com o servidor. Por favor, tente novamente.';
            errorEl.classList.remove('hidden');
          }
        }
      });
    }
  });

  // Make functions available globally
  window.openWaitingListModal = openWaitingListModal;
  window.closeWaitingListModal = closeWaitingListModal;
<\/script>`])), maybeRenderHead());
}, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/components/WaitingListModal.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Notícias do Céu | O Jornal Diário do Seu Pet" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "showCreateMemorial": true })}  ${maybeRenderHead()}<section class="relative pt-32 pb-16 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-paper/30 to-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Text Content --> <div class="text-center lg:text-left z-10"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20"> <i class="fa-solid fa-paw"></i> Uma homenagem viva e eterna
</div> <h1 class="text-4xl font-serif font-black leading-tight mb-6 text-ink">
O amor não morre, <br> <span class="italic text-accent">ele vira notícia no céu.</span> </h1> <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
Esqueça os quadros empoeirados. Transforme a saudade do seu pet em
            uma <strong>página web exclusiva e interativa</strong>. Todos os
            dias, uma nova capa de jornal contando as peripécias e mandando
            recados do seu melhor amigo direto do paraíso.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> <a href="#planos" class="bg-accent text-white px-8 py-4 rounded-full font-serif font-bold text-lg hover:bg-ink transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex justify-center items-center gap-2">
Começar Homenagem <i class="fa-solid fa-arrow-right"></i> </a> <a href="#demonstracao" class="bg-white text-ink border-2 border-ink px-8 py-4 rounded-full font-serif font-bold text-lg hover:bg-gray-50 transition-all flex justify-center items-center gap-2">
Ver Exemplo <i class="fa-regular fa-eye"></i> </a> </div> </div> <!-- Hero Graphic (Floating Newspaper Concept) --> <div class="relative mx-auto w-full max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500"> <div class="absolute inset-0 bg-accent/20 blur-2xl rounded-full"></div> <div class="newspaper-container border-double-thick p-6 relative z-10 rotate-[-2deg]"> <div class="text-center border-b-2 border-ink pb-4 mb-4"> <p class="text-xs font-bold uppercase tracking-widest mb-1">
Edição Especial do Amor Que Nunca Termina
</p> <h1 class="font-serif text-3xl font-black uppercase tracking-tighter text-ink">
Notícias do Céu
</h1> </div> <div class="text-center"> <h3 class="font-serif text-2xl font-semibold mb-2">
FLOKINHO FAZ NOVOS AMIGOS NAS NUVENS
</h3> <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cachorro feliz" class="w-full h-48 object-cover rounded filter grayscale contrast-125 mb-4 border border-ink/30"> <p class="text-sm text-left md:text-justify font-body">
"Hoje nosso amado anjinho de quatro patas foi visto correndo
                pelo imenso campo de grama verde esmeralda. Ele manda avisar
                que os petiscos aqui são infinitos..."
</p> </div> <!-- Decorative elements --> <i class="fa-solid fa-dove absolute -top-4 -left-4 text-3xl text-gray-400 bg-white rounded-full p-2 shadow-sm"></i> <i class="fa-solid fa-paw absolute -bottom-4 -right-4 text-3xl text-accent bg-white rounded-full p-2 shadow-sm"></i> </div> </div> </div> </div> </section>  <section id="como-funciona" class="newspaper-container py-16 md:py-24"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-8 md:mb-16"> <div class="font-serif italic text-accent text-base mb-3">
— Como Funciona —
</div> <h2 class="text-3xl font-serif font-bold uppercase tracking-tight text-ink" style="text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.05)">
Apenas 3 Passos
</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Step 1 --> <div class="bg-white/60 backdrop-blur-sm border border-vintage/50 rounded-2xl p-8 relative flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"> <div class="font-serif font-black text-7xl leading-none text-ink">
01
</div> <div class="flex items-center justify-center gap-4 my-4 w-full"> <div class="h-px flex-1 max-w-[60px] bg-ink/30"></div> <i class="fa-solid fa-camera-retro text-accent text-sm"></i> <div class="h-px flex-1 max-w-[60px] bg-ink/30"></div> </div> <h3 class="text-2xl font-serif font-semibold uppercase tracking-wide text-ink mb-3">
Conte a História
</h3> <p class="font-body text-[15px] leading-relaxed text-ink/80 text-balance">
Você nos envia a foto mais linda, o nome, os apelidos carinhosos e
            as <em>manias inesquecíveis</em> do seu pet.
</p> </div> <!-- Step 2 --> <div class="bg-white/60 backdrop-blur-sm border border-vintage/50 rounded-2xl p-8 relative flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"> <div class="font-serif font-black text-7xl leading-none text-ink">
02
</div> <div class="flex items-center justify-center gap-4 my-4 w-full"> <div class="h-px flex-1 max-w-[60px] bg-ink/30"></div> <i class="fa-solid fa-feather-pointed text-accent text-sm"></i> <div class="h-px flex-1 max-w-[60px] bg-ink/30"></div> </div> <h3 class="text-2xl font-serif font-semibold uppercase tracking-wide text-ink mb-3">
Página Exclusiva
</h3> <p class="font-body text-[15px] leading-relaxed text-ink/80 text-balance">
Em poucos minutos, montamos uma página web única — estilizada como
            um jornal clássico, só para o seu pet.
</p> </div> <!-- Step 3 --> <div class="bg-white/60 backdrop-blur-sm border border-vintage/50 rounded-2xl p-8 relative flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"> <div class="font-serif font-black text-7xl leading-none text-ink">
03
</div> <div class="flex items-center justify-center gap-4 my-4 w-full"> <div class="h-px flex-1 max-w-[60px] bg-ink/30"></div> <i class="fa-regular fa-calendar-check text-accent text-sm"></i> <div class="h-px flex-1 max-w-[60px] bg-ink/30"></div> </div> <h3 class="text-2xl font-serif font-semibold uppercase tracking-wide text-ink mb-3">
Notícias Diárias
</h3> <p class="font-body text-[15px] leading-relaxed text-ink/80 text-balance"> <strong>O grande diferencial:</strong> todo dia, ao abrir o link,
            uma <em>nova edição</em> com aventuras e recados do céu.
</p> </div> </div> </div> </section>  <section id="demonstracao" class="py-16 md:py-24 bg-gray-50 overflow-hidden relative"> <!-- Background decorations --> <i class="fa-solid fa-cloud text-gray-200 text-9xl absolute top-10 left-10 opacity-50 animate-cloud-slow-1"></i> <i class="fa-solid fa-cloud text-gray-200 text-9xl absolute bottom-10 right-10 opacity-50 animate-cloud-slow-2"></i> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="text-center mb-8 md:mb-16"> <h2 class="text-3xl font-serif font-bold text-ink mb-4">
Experimente a Homenagem
</h2> <p class="text-gray-600 max-w-2xl mx-auto mb-6">
Veja como a página do seu pet vai funcionar. Use os botões abaixo
          para simular os dias da jornada ou resetar a demonstração.
</p> <div class="flex flex-wrap gap-4 justify-center"> <button onclick="simulateNextDay()" class="bg-ink text-white px-6 py-3 rounded-full font-serif font-bold hover:bg-accent transition-colors shadow-lg flex items-center gap-2 cursor-pointer"> <i class="fa-solid fa-forward-step"></i> Avançar para Próximo Dia
            (Demo)
</button> <button onclick="resetDemo()" class="bg-white text-ink border-2 border-ink px-6 py-3 rounded-full font-serif font-bold hover:bg-gray-100 transition-colors shadow-md flex items-center gap-2 cursor-pointer"> <i class="fa-solid fa-rotate-left"></i> Reset Demo
</button> </div> <p class="text-sm text-gray-500 mt-4 font-serif italic">
Atualmente exibindo:
<span id="day-counter" class="font-bold text-accent">Dia 1 da Jornada</span> </p> </div> <!-- THE NEWSPAPER PREVIEW (The Core Feature) --> <div class="newspaper-container border-double-thick p-4 sm:p-8 max-w-4xl mx-auto transform transition-all duration-500" id="newspaper-paper"> <!-- Newspaper Header --> <header class="text-center mb-6"> <div class="flex justify-between items-center border-y-newspaper py-2 mb-4"> <div class="text-xs sm:text-sm font-bold uppercase w-1/3 text-left"> <i class="fa-solid fa-cloud text-accent"></i> Edição Diária
</div> <div class="text-xs sm:text-sm font-bold uppercase w-1/3 text-center tracking-widest text-accent">
Amor Eterno
</div> <div class="text-xs sm:text-sm font-bold uppercase w-1/3 text-right" id="newspaper-date">
25 de Maio, 2026
</div> </div> <h1 class="font-serif text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-2 text-ink" style="text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1)">
Notícias do Céu
</h1> <p class="font-serif text-sm sm:text-base italic mb-4">
O JORNAL DAS BOAS NOTÍCIAS E DAS HISTÓRIAS QUE AQUECEM O CORAÇÃO
</p> <div class="border-y-newspaper py-1 mb-6 text-xs font-bold uppercase tracking-widest">
DIRETAMENTE DO PARAÍSO PARA A TERRA • DISTRIBUIÇÃO EXCLUSIVA
</div> </header> <!-- Main Content Grid --> <div class="grid grid-cols-1 md:grid-cols-12 gap-6"> <!-- Left Column: Two Rotating Sidebar Sections --> <div class="md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-ink/30 pb-6 md:pb-0 md:pr-6"> <div class="text-center mb-4" id="sidebar-rotativa-top"> <h5 class="font-serif font-bold text-lg uppercase mb-2 flex items-center justify-center gap-2"> <i class="fa-solid fa-cloud text-accent" id="sidebar-top-icon"></i> <span id="sidebar-top-title">Mensagem do Céu</span> </h5> <div class="text-sm italic font-body text-left md:text-justify" id="sidebar-top-content">
"Não chore por mim. Estou feliz, livre e em paz. Espere-me um
                dia... vamos correr juntos de novo."
</div> </div> <div class="separator-line"></div> <div class="text-center mt-4" id="sidebar-rotativa-bottom"> <h5 class="font-serif font-bold text-lg uppercase mb-2 flex items-center justify-center gap-2"> <i class="fa-solid fa-cloud text-accent" id="sidebar-bottom-icon"></i> <span id="sidebar-bottom-title">Mensagem do Céu</span> </h5> <div class="text-sm italic font-body text-left md:text-justify" id="sidebar-bottom-content">
"Não chore por mim. Estou feliz, livre e em paz. Espere-me um
                dia... vamos correr juntos de novo."
</div> </div> </div> <!-- Center Column: Dynamic Daily News --> <div class="md:col-span-9" id="dynamic-news-content"> <!-- Special Date Badge --> <div id="special-badge" class="hidden justify-center mb-4"> <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-700 border border-yellow-500/30 text-xs font-bold uppercase tracking-wider"> <i class="fa-solid fa-certificate text-yellow-500"></i> Edição Especial
</span> </div> <!-- Sunday Rest Banner --> <div id="sunday-banner" class="hidden bg-accent/10 border border-accent/30 rounded-xl p-4 mb-6 text-center text-accent font-serif text-base italic"> <i class="fa-solid fa-moon mr-2"></i> Domingo é dia de descanso.
              O Flokinho está dormindo nas nuvens. Volte amanhã para uma nova
              edição.
</div> <!-- Content injected via JS --> <div class="text-center mb-6"> <h2 class="font-serif font-bold text-3xl uppercase leading-none mb-3" id="news-headline">
FLOKINHO ENCONTRA O ESTOQUE INFINITO DE PETISCOS
</h2> <h4 class="font-serif text-xl font-medium italic text-gray-700 mb-4" id="news-subheadline">
Uma tarde inteira de brincadeiras sem fim e a barriguinha cheia.
</h4> </div> <div class="flex flex-col sm:flex-row gap-6 items-start"> <!-- Pet Image --> <div id="news-image-container" class="w-full sm:w-1/2 relative"> <div class="absolute -top-3 -left-3 text-4xl text-accent/80"> <i class="fa-solid fa-quote-left"></i> </div> <div class="border-4 border-white shadow-md transform -rotate-2 relative z-10"> <img id="news-image" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Flokinho no céu" class="w-full h-auto object-cover filter grayscale contrast-[1.1]"> <div id="news-image-caption" class="absolute bottom-0 w-full bg-black/60 text-white text-xs p-1 text-center font-serif">
Flokinho aproveitando a vista das nuvens.
</div> </div> </div> <!-- Article Text --> <div class="w-full sm:w-1/2 text-left md:text-justify font-body text-sm sm:text-base columns-1" id="news-text"> <p class="mb-3"> <span class="float-left text-5xl font-serif font-black leading-none pr-2 pt-1">H</span>oje, nossos correspondentes celestiais avistaram Flokinho correndo a toda velocidade pelo gramado sagrado. O motivo? Ele finalmente descobriu onde os anjos guardam os bifinhos de carne.
</p> <p class="mb-3">
Segundo relatos, ele fez aquela carinha de coitado que ninguém resiste, e acabou ganhando petiscos em dobro. "Ele é muito esperto", disse um querubim local. "Ele sabe exatamente como pedir carinho na barriga."
</p> <p class="font-bold font-serif text-center mt-4 text-accent border-t border-ink/20 pt-4">
"A saudade é grande, mas a alegria dele aqui é maior ainda!"
</p> </div> </div> </div> </div> <!-- Footer of the newspaper --> <footer class="mt-8 pt-4 border-t-2 border-ink text-center"> <p class="font-serif text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-4"> <i class="fa-solid fa-star text-accent"></i>
Porque o amor verdadeiro não tem fim
<i class="fa-solid fa-star text-accent"></i> </p> </footer> </div> </div> </section>  <section class="py-16 md:py-24 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> <div> <img src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pessoa sorrindo olhando o celular" class="rounded-2xl shadow-2xl"> </div> <div> <h2 class="text-3xl font-serif font-bold text-ink mb-6">
Transforme a dor em um sorriso diário.
</h2> <div class="space-y-6"> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent"> <i class="fa-solid fa-mobile-screen-button text-lg"></i> </div> <div> <h4 class="text-xl font-serif font-semibold text-ink">Acesse de Qualquer Lugar</h4> <p class="text-gray-600 font-body">
Um link exclusivo do seu pet, protegido e seguro. Acesse pelo celular, tablet ou computador sempre que a saudade bater.
</p> </div> </div> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent"> <i class="fa-solid fa-share-nodes text-lg"></i> </div> <div> <h4 class="text-xl font-serif font-semibold text-ink">Compartilhe com a Família</h4> <p class="text-gray-600 font-body">
Envie o link para todos que amavam seu cãopanheiro. Todos podem se emocionar com as Notícias Diárias.
</p> </div> </div> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent"> <i class="fa-solid fa-infinity text-lg"></i> </div> <div> <h4 class="text-xl font-serif font-semibold text-ink">Uma Lembrança Viva</h4> <p class="text-gray-600 font-body">
Diferente de um quadro estático, nosso algoritmo gerador de histórias garante que todo dia haja uma nova mensagem carinhosa.
</p> </div> </div> </div> </div> </div> </div> </section>  <section id="cartas-para-o-ceu" class="py-16 md:py-24 bg-[#EFE6DB] relative overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="text-center mb-8 md:mb-16"> <span class="font-serif italic text-accent text-lg">Correio do Coração</span> <h2 class="text-3xl font-serif font-bold uppercase tracking-tight text-ink mt-2">
Cartas para o Céu
</h2> <p class="text-gray-700 text-lg max-w-2xl mx-auto mt-4 font-body">
Escreva suas palavras de amor e receba o carinho de volta em forma de carta.
</p> <div class="w-24 h-1 bg-accent mx-auto mt-8"></div> </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> <!-- Left Column: Vintage Postcard/Letter representation & Cost Card --> <div class="lg:col-span-5 flex flex-col items-center gap-6"> <div class="bg-white border-double-thick p-8 max-w-sm rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl relative text-ink"> <!-- Postage Stamp Mark --> <div class="absolute top-4 right-4 w-16 h-16 border-2 border-dashed border-accent/40 rounded-sm flex items-center justify-center rotate-12"> <span class="text-[10px] font-serif uppercase text-accent/60 font-bold text-center leading-none">CÉU<br>POSTAL</span> </div> <div class="font-serif italic text-accent border-b border-ink/20 pb-2 mb-4">
Correspondência
</div> <p class="font-body text-sm text-left md:text-justify italic leading-relaxed text-ink/80">
"Querido amigo, hoje vi um passarinho na janela e lembrei de como você tentava caçá-los. A casa está silenciosa, mas meu coração ainda guarda o som da sua patinha correndo no corredor. Sinto tanta saudade..."
</p> <div class="separator-line white-bg"></div> <p class="font-serif text-right text-xs text-accent mt-4">
Com amor, seu tutor
</p> </div> <!-- Cost Card --> <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/40 flex justify-between items-center flex-wrap gap-4 w-full max-w-sm"> <div> <h5 class="text-lg font-serif font-semibold text-ink">Custo de Envio Simples</h5> <p class="text-gray-600 font-body text-xs">Sem assinaturas extras ou complicação.</p> </div> <div class="text-right"> <span class="text-2xl font-serif font-black text-accent">R$ 2,99</span> <span class="text-xs text-gray-500 font-bold block">por carta</span> </div> </div> </div> <!-- Right Column: Explanatory Content --> <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch"> <!-- Point 1 --> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-vintage/50 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"> <div class="bg-accent/15 text-accent p-3 rounded-xl w-fit"> <i class="fa-solid fa-pen-nib text-xl"></i> </div> <div> <h4 class="text-xl font-serif font-semibold text-ink mb-2">Escreva para o seu pet</h4> <p class="text-gray-700 font-body text-sm leading-relaxed">
O tutor escreve uma carta (desabafo, saudade, novidades) expressando todo o seu sentimento para o seu companheiro querido.
</p> </div> </div> <!-- Point 2 --> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-vintage/50 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"> <div class="bg-accent/15 text-accent p-3 rounded-xl w-fit"> <i class="fa-solid fa-clock-rotate-left text-xl"></i> </div> <div> <h4 class="text-xl font-serif font-semibold text-ink mb-2">Publicação Garantida</h4> <p class="text-gray-700 font-body text-sm leading-relaxed">
É garantido que a carta será publicada na <strong class="text-ink">PRÓXIMA edição</strong> do jornal do tutor, com todo o destaque que merece.
</p> </div> </div> <!-- Point 3 --> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-vintage/50 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"> <div class="bg-accent/15 text-accent p-3 rounded-xl w-fit"> <i class="fa-solid fa-earth-americas text-xl"></i> </div> <div> <h4 class="text-xl font-serif font-semibold text-ink mb-2">Opção de Tornar a Carta PÚBLICA</h4> <p class="text-gray-700 font-body text-sm leading-relaxed">
Caso opte por tornar a carta pública, ela pode ser publicada aleatoriamente em outros jornais, permitindo que outros pets e tutores também a vejam.
</p> </div> </div> <!-- Point 4 --> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-vintage/50 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"> <div class="bg-accent/15 text-accent p-3 rounded-xl w-fit"> <i class="fa-solid fa-reply text-xl"></i> </div> <div> <h4 class="text-xl font-serif font-semibold text-ink mb-2">A Resposta do Pet</h4> <p class="text-gray-700 font-body text-sm leading-relaxed">
Uma edição DEPOIS da carta ser publicada, o pet responde com uma carta de volta, visível <strong class="text-ink">APENAS na edição do tutor</strong> que enviou (uma carta pessoal e íntima do pet).
</p> </div> </div> </div> </div> </div> </section>  <section class="py-16 md:py-24 bg-[#EFE6DB] relative overflow-hidden border-t border-ink/10"> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="mb-10 text-center md:text-left"> <span class="font-sans font-bold text-accent text-xs uppercase tracking-[0.2em] block mb-2">Depoimentos</span> <h2 class="text-3xl font-serif font-bold text-ink">
Cartas escritas no vento.
</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"> <!-- Card 1 --> <div class="bg-[#FAF6EE]/90 border border-ink/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"> <p class="font-body text-base italic text-ink/90 leading-relaxed mb-6">
"A primeira manhã sem ele foi mais leve. Tinha uma notícia esperando na caixa de entrada."
</p> <span class="font-sans text-xs text-ink/75 font-semibold mt-auto block">
— Marina, sobre o Theo
</span> </div> <!-- Card 2 --> <div class="bg-[#FAF6EE]/90 border border-ink/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"> <p class="font-body text-base italic text-ink/90 leading-relaxed mb-6">
"Imprimi o jornal e dei de presente para a minha mãe. Ela chorou. Depois sorriu."
</p> <span class="font-sans text-xs text-ink/75 font-semibold mt-auto block">
— Ricardo, sobre a Lola
</span> </div> <!-- Card 3 --> <div class="bg-[#FAF6EE]/90 border border-ink/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"> <p class="font-body text-base italic text-ink/90 leading-relaxed mb-6">
"Não acreditava que ia gostar. Hoje espero a notícia do dia como quem espera um abraço."
</p> <span class="font-sans text-xs text-ink/75 font-semibold mt-auto block">
— Aline, sobre o Pingo
</span> </div> </div> </div> </section>  <section id="planos" class="py-16 md:py-24 bg-gray-50 relative overflow-hidden"> <!-- Background decorations --> <i class="fa-solid fa-cloud text-gray-200 text-9xl absolute top-10 left-10 opacity-50 pointer-events-none animate-cloud-slow-1"></i> <i class="fa-solid fa-cloud text-gray-200 text-9xl absolute bottom-10 right-10 opacity-50 pointer-events-none animate-cloud-slow-2"></i> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> <div class="font-serif italic text-accent text-base mb-3">— Planos —</div> <h2 class="text-3xl font-serif font-bold uppercase tracking-tight text-ink mb-4" style="text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.05)">
Eternize o Seu Amor
</h2> <p class="font-serif italic text-ink/70 text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-16">
Escolha o plano ideal para guardar a memória do seu pet em uma edição diária do céu.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch text-ink text-left"> <!-- PLANO ANUAL --> <div class="bg-white rounded-2xl p-8 flex flex-col justify-between border border-ink/15 shadow-md hover:shadow-lg transition-shadow"> <div> <div class="text-center pb-6 border-b border-ink/15"> <p class="font-serif italic text-accent text-sm mb-2">Acesso por um ano</p> <h3 class="text-2xl font-serif font-semibold uppercase tracking-[0.18em] text-ink mb-5">Plano Anual</h3> <div class="flex items-baseline justify-center gap-1"> <span class="font-serif text-sm text-ink/60 self-start mt-2">R$</span> <span class="font-serif font-black text-6xl leading-none">90</span> <span class="font-serif text-2xl text-ink/70">,00</span> </div> <p class="font-body text-xs text-ink/55 mt-2">por ano</p> </div> <ul class="space-y-4 mt-6 mb-8 text-[14.5px]"> <li class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-ink/85 leading-relaxed">Acesso ao webapp por 1 ano (edição do dia atual)</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-ink/85 leading-relaxed">Compartilhamento simples — link mostra a edição do momento</span> </li> </ul> </div> <div> <button onclick="openWaitingListModal('annual')" class="block w-full text-center bg-transparent text-ink border-2 border-ink py-3.5 rounded-full font-serif font-bold text-base hover:bg-ink hover:text-paper transition-colors cursor-pointer">
Escolher Plano Anual
</button> <p class="text-center text-xs text-ink/55 mt-4"><i class="fa-solid fa-lock"></i> Pagamento 100% seguro</p> </div> </div> <!-- PLANO VITALÍCIO --> <div class="bg-white rounded-2xl p-8 flex flex-col justify-between border-double-gold shadow-lg hover:shadow-xl transition-shadow relative"> <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-ink font-sans font-bold text-[10px] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
Mais escolhido
</div> <div> <div class="text-center pb-6 border-b border-ink/15"> <p class="font-serif italic text-accent text-sm mb-2 mt-2">Acesso para sempre</p> <h3 class="text-2xl font-serif font-semibold uppercase tracking-[0.18em] text-accent mb-5">Plano Vitalício</h3> <div class="flex items-baseline justify-center gap-1 text-accent"> <span class="font-serif text-sm self-start mt-2 text-accent/80">R$</span> <span class="font-serif font-black text-6xl leading-none">9</span> <span class="font-serif text-2xl text-accent/80">,90</span> </div> <p class="font-body text-xs text-ink/55 mt-2">pagamento único</p> </div> <ul class="space-y-4 mt-6 mb-8 text-[14.5px]"> <li class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-ink/85 leading-relaxed"><strong class="text-ink">Acesso perpétuo</strong>, sem renovação</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-ink/85 leading-relaxed"><strong class="text-ink">Arquivo do Jornal</strong> — releia qualquer edição passada</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-ink/85 leading-relaxed"><strong class="text-ink">Compartilhamento avançado</strong> — links públicos por edição</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-ink/85 leading-relaxed"><strong class="text-ink">Compilado em PDF</strong> — livro digital com todas as edições</span> </li> <li class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-ink/85 leading-relaxed">1 Carta para o Céu grátis por mês</span> </li> </ul> </div> <div> <button onclick="openWaitingListModal('lifetime')" class="block w-full text-center bg-accent text-white py-3.5 rounded-full font-serif font-bold text-base hover:bg-ink transition-colors shadow-md cursor-pointer">
Escolher Plano Vitalício
</button> <p class="text-center text-xs text-ink/55 mt-4"><i class="fa-solid fa-lock"></i> Pagamento 100% seguro</p> </div> </div> </div> <!-- Donation Notice --> <div class="mt-8 md:mt-16 max-w-2xl mx-auto flex items-center gap-4 px-6 py-4 rounded-2xl border border-ink/15 bg-white text-left shadow-sm"> <div class="flex-shrink-0 w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-paw text-accent text-lg"></i> </div> <p class="font-body text-[14.5px] leading-relaxed text-ink"> <span class="font-serif font-bold text-accent uppercase tracking-[0.15em] text-[11px] block mb-0.5">Com amor aos animais</span>
Parte da nossa receita é destinada para <strong>ONGs de apoio e proteção a pets</strong>.
</p> </div> </div> </section>  <section id="presentear" class="py-16 md:py-24 bg-white relative overflow-hidden"> <i class="fa-solid fa-cloud text-gray-200 text-9xl absolute -top-10 -right-10 opacity-30 pointer-events-none animate-cloud-slow-1"></i> <i class="fa-solid fa-cloud text-gray-200 text-9xl absolute -bottom-10 -left-10 opacity-30 pointer-events-none animate-cloud-slow-2"></i> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> <!-- Left Column: Content --> <div class="lg:col-span-7 space-y-6 text-center lg:text-left"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm border border-accent/20"> <i class="fa-solid fa-gift"></i> Presente de Acolhimento
</div> <h2 class="text-3xl font-serif font-bold uppercase tracking-tight text-ink leading-tight">
Apoie um amigo no momento da perda
</h2> <p class="text-gray-700 text-lg font-body leading-relaxed max-w-2xl mx-auto lg:mx-0">
Demonstrar carinho a quem perdeu um pet é um gesto inestimável. Em vez de flores que murcham, presenteie com uma homenagem viva. Envie um <strong>Gift Card do Notícias do Céu</strong> e dê ao seu amigo um espaço especial para celebrar a história do seu melhor companheiro.
</p> <!-- Interactive Selector Toggle --> <div class="py-2"> <p class="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Selecione o plano do presente:</p> <div class="inline-flex p-1 bg-paper/60 rounded-full border border-ink/10 flex-wrap"> <button id="toggle-gift-lifetime" onclick="selectGiftHomePlan('lifetime')" class="px-5 py-2.5 rounded-full font-serif font-bold text-xs md:text-sm border-2 border-accent bg-accent text-white transition-all shadow-sm cursor-pointer">
Plano Vitalício (Recomendado) - R$ 9,90
</button> <button id="toggle-gift-annual" onclick="selectGiftHomePlan('annual')" class="px-5 py-2.5 rounded-full font-serif font-bold text-xs md:text-sm border-2 border-transparent text-ink hover:text-accent transition-all cursor-pointer">
Plano Anual - R$ 90,00/ano
</button> </div> </div> <div class="space-y-4 max-w-xl mx-auto lg:mx-0 text-left"> <div class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-gray-700 text-sm font-body"><strong>Entrega Digital Imediata:</strong> Nós enviamos o código de resgate e a sua mensagem direto para o e-mail do seu amigo.</span> </div> <div class="flex items-start gap-3"> <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center"> <i class="fa-solid fa-check text-accent text-[10px]"></i> </span> <span class="text-gray-700 text-sm font-body"><strong>Opção para Imprimir:</strong> Se preferir, imprima um lindo cartão com o código para entregar em mãos.</span> </div> </div> <div class="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> <a id="gift-home-cta" href="/gift-card?plan=lifetime" class="bg-accent text-white px-8 py-4 rounded-full font-serif font-bold text-lg hover:bg-ink transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex justify-center items-center gap-2">
Presentear um Amigo <i class="fa-solid fa-gift"></i> </a> </div> </div> <!-- Right Column: Visual Gift Card Representation --> <div class="lg:col-span-5 flex flex-col items-center justify-center"> <div class="gift-card-preview border-double-gold p-8 max-w-sm rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl relative text-ink bg-gradient-to-br from-paper to-vintage rounded-2xl w-full"> <!-- Stamp --> <div class="absolute top-4 right-4 w-16 h-16 border-2 border-dashed border-accent/40 rounded-sm flex items-center justify-center rotate-12"> <span class="text-[9px] font-serif uppercase text-accent/60 font-bold text-center leading-none">PRESENTE<br>CELESTIAL</span> </div> <!-- Content --> <div class="mb-4"> <i class="fa-solid fa-cloud text-accent text-3xl"></i> </div> <h5 id="gift-home-title" class="font-serif font-semibold text-lg text-ink mb-1">Plano Vitalício</h5> <p class="text-xs text-gray-600 font-body mb-4">Notícias do Céu</p> <div class="separator-line"></div> <p class="text-sm font-body italic text-ink/70 mb-4 text-center">
"Sei o quanto o seu companheiro era especial. Espero que este espaço traga um pouco de acalento para o seu coração."
</p> <div class="bg-white/50 border border-ink/10 rounded-lg py-2.5 px-4 mb-4 text-center font-mono font-bold tracking-widest text-ink text-sm">
XXXX-XXXX-XXXX
</div> <p class="text-xs text-accent font-serif text-center">— Com carinho, seu amigo</p> </div> <!-- Dynamic Features Subtext --> <div id="gift-home-features" class="text-xs text-gray-500 mt-4 text-center font-serif uppercase tracking-wider font-semibold">
Acesso vitalício • arquivo completo • 1 carta/mês inclusa
</div> </div> </div> </div> </section>  <section class="py-16 md:py-24 bg-gray-50 border-t border-ink/10 relative overflow-hidden"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="mb-12 text-center"> <span class="font-sans font-bold text-accent text-xs uppercase tracking-[0.2em] block mb-2">FAQ</span> <h2 class="text-3xl font-serif font-bold text-ink">
Perguntas Frequentes
</h2> <p class="text-gray-600 font-body text-sm mt-3 max-w-md mx-auto">
Tudo o que você precisa saber sobre o funcionamento das impressoras celestiais e o diário do seu pet.
</p> </div> <div class="space-y-4"> <!-- FAQ 1 --> <details class="group border border-ink/10 rounded-2xl bg-white p-5 font-sans" name="faq-accordion"> <summary class="flex justify-between items-center font-serif font-bold text-lg md:text-xl text-ink cursor-pointer list-none focus:outline-none select-none"> <span>Como as histórias são geradas diariamente?</span> <span class="transition-transform duration-300 group-open:rotate-180 text-accent"> <i class="fa-solid fa-chevron-down text-sm"></i> </span> </summary> <div class="mt-4 text-gray-750 font-body text-[15px] leading-relaxed text-left md:text-justify border-t border-ink/5 pt-4">
Utilizamos um algoritmo inteligente combinado com as informações fornecidas sobre o seu pet (como nome, apelidos, brinquedos e manias) para gerar crônicas diárias exclusivas e ilustradas, celebrando a memória dele de forma leve e alegre.
</div> </details> <!-- FAQ 2 --> <details class="group border border-ink/10 rounded-2xl bg-white p-5 font-sans" name="faq-accordion"> <summary class="flex justify-between items-center font-serif font-bold text-lg md:text-xl text-ink cursor-pointer list-none focus:outline-none select-none"> <span>Posso alterar a foto ou os dados do pet depois de criado?</span> <span class="transition-transform duration-300 group-open:rotate-180 text-accent"> <i class="fa-solid fa-chevron-down text-sm"></i> </span> </summary> <div class="mt-4 text-gray-750 font-body text-[15px] leading-relaxed text-left md:text-justify border-t border-ink/5 pt-4">
Sim, com certeza! Na sua área do tutor, você pode atualizar a foto de perfil do pet, alterar apelidos, adicionar novas manias ou atualizar os dados de envio a qualquer momento. As próximas edições refletirão as novas informações de forma orgânica.
</div> </details> <!-- FAQ 3 --> <details class="group border border-ink/10 rounded-2xl bg-white p-5 font-sans" name="faq-accordion"> <summary class="flex justify-between items-center font-serif font-bold text-lg md:text-xl text-ink cursor-pointer list-none focus:outline-none select-none"> <span>Como funciona o envio de "Cartas para o Céu"?</span> <span class="transition-transform duration-300 group-open:rotate-180 text-accent"> <i class="fa-solid fa-chevron-down text-sm"></i> </span> </summary> <div class="mt-4 text-gray-750 font-body text-[15px] leading-relaxed text-left md:text-justify border-t border-ink/5 pt-4">
Você pode escrever uma mensagem contando sobre a sua saudade, novidades do dia ou um desabafo de amor. Ela será publicada na edição do dia seguinte do seu jornal. Na edição subsequente, o seu pet responderá com uma carta carinhosa e exclusiva.
</div> </details> <!-- FAQ 4 --> <details class="group border border-ink/10 rounded-2xl bg-white p-5 font-sans" name="faq-accordion"> <summary class="flex justify-between items-center font-serif font-bold text-lg md:text-xl text-ink cursor-pointer list-none focus:outline-none select-none"> <span>O que acontece após o término do Plano Anual?</span> <span class="transition-transform duration-300 group-open:rotate-180 text-accent"> <i class="fa-solid fa-chevron-down text-sm"></i> </span> </summary> <div class="mt-4 text-gray-750 font-body text-[15px] leading-relaxed text-left md:text-justify border-t border-ink/5 pt-4">
Ao final de um ano, você poderá renovar a assinatura ou migrar para o Plano Vitalício. Caso opte por não renovar, a página do memorial ficará congelada na última edição gerada, mantendo todo o histórico seguro e disponível para leitura.
</div> </details> <!-- FAQ 5 --> <details class="group border border-ink/10 rounded-2xl bg-white p-5 font-sans" name="faq-accordion"> <summary class="flex justify-between items-center font-serif font-bold text-lg md:text-xl text-ink cursor-pointer list-none focus:outline-none select-none"> <span>O site é seguro e os dados são privados?</span> <span class="transition-transform duration-300 group-open:rotate-180 text-accent"> <i class="fa-solid fa-chevron-down text-sm"></i> </span> </summary> <div class="mt-4 text-gray-750 font-body text-[15px] leading-relaxed text-left md:text-justify border-t border-ink/5 pt-4">
Sim. A privacidade da sua família é prioridade. Você pode configurar o jornal do seu pet para ser totalmente privado (acessível apenas por link direto compartilhado por você) ou público, caso queira que outras pessoas leiam e se emocionem com as crônicas celestes.
</div> </details> <!-- FAQ 6 --> <details class="group border border-ink/10 rounded-2xl bg-white p-5 font-sans" name="faq-accordion"> <summary class="flex justify-between items-center font-serif font-bold text-lg md:text-xl text-ink cursor-pointer list-none focus:outline-none select-none"> <span>Como funciona o Gift Card do Notícias do Céu?</span> <span class="transition-transform duration-300 group-open:rotate-180 text-accent"> <i class="fa-solid fa-chevron-down text-sm"></i> </span> </summary> <div class="mt-4 text-gray-750 font-body text-[15px] leading-relaxed text-left md:text-justify border-t border-ink/5 pt-4">
O Gift Card é um gesto inestimável de acolhimento para apoiar um amigo que perdeu um pet. Ao comprar, você recebe um código de ativação exclusivo (e nós também enviamos por e-mail para seu amigo, se desejar). Ele poderá ativar o plano correspondente sem custos e criar o memorial.
</div> </details> </div> </div> </section> ${renderComponent($$result2, "WaitingListModal", $$WaitingListModal, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/pages/index.astro", void 0);

const $$file = "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
