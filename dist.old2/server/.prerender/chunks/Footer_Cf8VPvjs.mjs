import 'piccolore';
import { A as AstroError, I as InvalidComponentArgs, a as addAttribute, f as renderHead, g as renderSlot, h as renderTemplate, r as renderComponent, F as Fragment, e as maybeRenderHead } from './prerender_Cpn8qJMn.mjs';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Notícias do Céu | O Jornal Diário do Seu Pet",
    description = "Esqueça os quadros empoeirados. Transforme a saudade do seu pet em uma página web exclusiva e interativa."
  } = Astro2.props;
  return renderTemplate`<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet"><!-- FontAwesome for Icons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous">${renderHead()}</head> <body class="font-body text-ink antialiased selection:bg-accent selection:text-white"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const { showCreateMemorial = true } = Astro2.props;
  const user = Astro2.locals.user;
  return renderTemplate(_a || (_a = __template(["", '<nav class="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 transition-all duration-300"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-20 items-center"> <a href="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer"> <i class="fa-solid fa-cloud text-accent text-2xl"></i> <span class="font-serif font-bold text-2xl tracking-wider uppercase text-ink">Notícias do Céu</span> </a> <!-- Desktop Navigation Menu --> <div class="hidden md:flex space-x-6 items-center font-sans"> <a href="/#como-funciona" class="text-gray-600 hover:text-accent text-sm font-medium transition-colors">Como Funciona</a> <a href="/#demonstracao" class="text-gray-600 hover:text-accent text-sm font-medium transition-colors">Demonstração</a> <a href="/blog" class="text-gray-600 hover:text-accent text-sm font-medium transition-colors">Blog</a> ', ' </div> <!-- Hamburger Menu Button (Mobile) --> <div class="flex items-center md:hidden"> <button id="mobile-menu-toggle" type="button" class="text-ink hover:text-accent p-2 rounded-md focus:outline-none cursor-pointer" aria-label="Menu principal"> <i class="fa-solid fa-bars text-2xl"></i> </button> </div> </div> </div> <!-- Mobile Menu Drawer (Dropdown) --> <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-6 space-y-4 shadow-lg"> <a href="/#como-funciona" class="block text-gray-600 hover:text-accent font-medium transition-colors py-2 font-sans mobile-link">Como Funciona</a> <a href="/#demonstracao" class="block text-gray-600 hover:text-accent font-medium transition-colors py-2 font-sans mobile-link">Demonstração</a> <a href="/blog" class="block text-gray-600 hover:text-accent font-medium transition-colors py-2 font-sans mobile-link">Blog</a> ', " </div> </nav> <script>\n  async function handleNavbarLogout() {\n    try {\n      const res = await fetch('/api/auth/logout', { method: 'POST' });\n      if (res.ok) {\n        window.location.href = '/login';\n      }\n    } catch (e) {\n      console.error('Erro ao fazer logout:', e);\n    }\n  }\n  window.handleNavbarLogout = handleNavbarLogout;\n\n  function setupMobileMenu() {\n    const toggleBtn = document.getElementById('mobile-menu-toggle');\n    const mobileMenu = document.getElementById('mobile-menu');\n    \n    if (toggleBtn && mobileMenu) {\n      // Toggle menu on button click\n      toggleBtn.addEventListener('click', (e) => {\n        e.stopPropagation();\n        mobileMenu.classList.toggle('hidden');\n        const icon = toggleBtn.querySelector('i');\n        if (icon) {\n          icon.classList.toggle('fa-bars');\n          icon.classList.toggle('fa-xmark');\n        }\n      });\n\n      // Close menu when clicking on a link\n      const links = mobileMenu.querySelectorAll('.mobile-link');\n      links.forEach(link => {\n        link.addEventListener('click', () => {\n          mobileMenu.classList.add('hidden');\n          const icon = toggleBtn.querySelector('i');\n          if (icon) {\n            icon.classList.add('fa-bars');\n            icon.classList.remove('fa-xmark');\n          }\n        });\n      });\n\n      // Close menu when clicking outside\n      document.addEventListener('click', (e) => {\n        if (!mobileMenu.contains(e.target) && !toggleBtn.contains(e.target)) {\n          mobileMenu.classList.add('hidden');\n          const icon = toggleBtn.querySelector('i');\n          if (icon) {\n            icon.classList.add('fa-bars');\n            icon.classList.remove('fa-xmark');\n          }\n        }\n      });\n    }\n  }\n\n  // Initialize\n  document.addEventListener('DOMContentLoaded', setupMobileMenu);\n  if (document.readyState === 'interactive' || document.readyState === 'complete') {\n    setupMobileMenu();\n  }\n<\/script>"])), maybeRenderHead(), user ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <a href="/dashboard" class="text-gray-600 hover:text-accent text-sm font-medium transition-colors">Meu Painel</a> <button onclick="handleNavbarLogout()" class="text-gray-600 hover:text-red-600 text-sm font-medium transition-colors cursor-pointer bg-transparent border-0 p-0">Sair</button> <span class="text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-full font-semibold"> <i class="fa-solid fa-user text-[10px] mr-1"></i> ${user.name.split(" ")[0]} </span> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <a href="/login" class="text-gray-600 hover:text-accent text-sm font-medium transition-colors">Entrar</a> ${showCreateMemorial ? renderTemplate`<a href="/#planos" class="bg-ink text-paper px-6 py-2 rounded-full font-semibold hover:bg-accent transition-colors shadow-md text-sm">
Criar Memorial
</a>` : renderTemplate`<a href="/gift-card" class="bg-ink text-paper px-6 py-2 rounded-full font-semibold hover:bg-accent transition-colors shadow-md text-sm">
Presenteie um Amigo
</a>`}` })}`, user ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <a href="/dashboard" class="block text-gray-600 hover:text-accent font-medium transition-colors py-2 font-sans mobile-link">Meu Painel</a> <button onclick="handleNavbarLogout()" class="block w-full text-left text-gray-600 hover:text-red-600 font-medium transition-colors py-2 font-sans cursor-pointer bg-transparent border-0 p-0">Sair</button> <div class="text-xs text-accent font-semibold pt-2 border-t border-gray-100">
Logado como ${user.name} </div> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <a href="/login" class="block text-gray-600 hover:text-accent font-medium transition-colors py-2 font-sans mobile-link">Entrar</a> ${showCreateMemorial ? renderTemplate`<a href="/#planos" class="block text-center bg-ink text-paper px-6 py-3 rounded-full font-sans font-semibold hover:bg-accent transition-colors shadow-md mobile-link">
Criar Memorial
</a>` : renderTemplate`<a href="/gift-card" class="block text-center bg-ink text-paper px-6 py-3 rounded-full font-sans font-semibold hover:bg-accent transition-colors shadow-md mobile-link">
Presenteie um Amigo
</a>`}` })}`);
}, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-ink text-paper relative overflow-hidden"> <!-- Subtle warm-noise texture so the footer feels like paper printed in dark ink --> <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\'/%3E%3C/svg%3E');"></div> <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"> <!-- Link columns --> <div class="grid grid-cols-2 md:grid-cols-4 gap-10 pt-16 pb-12"> <div class="col-span-2 md:col-span-1"> <h4 class="font-serif font-semibold text-xl uppercase tracking-wider text-paper/80 mb-3">A Redação</h4> <p class="font-body text-[14px] text-paper/75 leading-relaxed max-w-xs">
Ajudamos famílias a transformar a saudade em uma memória diária de amor e alegria — um anjo de quatro patas por vez.
</p> </div> <div> <h4 class="font-serif font-semibold text-xl uppercase tracking-wider text-paper/80 mb-3">Conheça</h4> <ul class="space-y-2 font-body text-[14px] text-paper/80"> <li><a href="/#como-funciona" class="hover:text-accent transition-colors">Como Funciona</a></li> <li><a href="/#demonstracao" class="hover:text-accent transition-colors">Demonstração</a></li> <li><a href="/#cartas-para-o-ceu" class="hover:text-accent transition-colors">Cartas para o Céu</a></li> <li><a href="/#planos" class="hover:text-accent transition-colors">Planos</a></li> <li><a href="/blog" class="hover:text-accent transition-colors">Blog</a></li> </ul> </div> <div> <h4 class="font-serif font-semibold text-xl uppercase tracking-wider text-paper/80 mb-3">Suporte</h4> <ul class="space-y-2 font-body text-[14px] text-paper/80"> <li><a href="#" class="hover:text-accent transition-colors">Perguntas Frequentes</a></li> <li><a href="#" class="hover:text-accent transition-colors">Falar com a Redação</a></li> <li><a href="#" class="hover:text-accent transition-colors">Termos de Uso</a></li> <li><a href="#" class="hover:text-accent transition-colors">Política de Privacidade</a></li> </ul> </div> <div> <h4 class="font-serif font-semibold text-xl uppercase tracking-wider text-paper/80 mb-3">Encontre-nos</h4> <ul class="space-y-2 font-body text-[14px] text-paper/80"> <li class="flex items-center gap-3 pt-1"> <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-full border border-paper/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"> <i class="fa-brands fa-instagram"></i> </a> <a href="#" aria-label="Facebook" class="w-9 h-9 rounded-full border border-paper/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"> <i class="fa-brands fa-facebook"></i> </a> </li> </ul> </div> </div> <!-- Bottom strip --> <div class="border-t border-paper/15 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-paper/55"> <p>© 2026 Notícias do Céu Digital · Todos os direitos reservados.</p> <p class="flex items-center gap-1.5">
Feito com <i class="fa-solid fa-heart text-accent"></i> para todos os anjos de quatro patas.
</p> </div> </div> </footer>`;
}, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/components/Footer.astro", void 0);

export { $$Footer as $, $$Layout as a, $$Navbar as b, createComponent as c };
