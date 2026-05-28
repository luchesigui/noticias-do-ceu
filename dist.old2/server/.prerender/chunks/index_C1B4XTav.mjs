import { _ as __vite_glob_0_0 } from './como-confortar-amigo-perda-pet_BRY5XBzm.mjs';
import { _ as __vite_glob_0_1 } from './como-explicar-morte-pet-para-criancas_DFbhUC-y.mjs';
import { _ as __vite_glob_0_2 } from './como-lidar-luto-pet_DJSWEyT1.mjs';
import { _ as __vite_glob_0_3 } from './frases-homenagem-pet-faleceu_Q2FIH6xP.mjs';
import { _ as __vite_glob_0_4 } from './lenda-ponte-arco-iris-pet_DZ-AGSJJ.mjs';
import { _ as __vite_glob_0_5 } from './rituais-despedida-homenagem-pet_BkNP-n0D.mjs';
import { c as createComponent, a as $$Layout, b as $$Navbar, $ as $$Footer } from './Footer_Cf8VPvjs.mjs';
import 'piccolore';
import { r as renderComponent, h as renderTemplate, e as maybeRenderHead, a as addAttribute } from './prerender_Cpn8qJMn.mjs';

const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const posts = /* #__PURE__ */ Object.assign({"./como-confortar-amigo-perda-pet.md": __vite_glob_0_0,"./como-explicar-morte-pet-para-criancas.md": __vite_glob_0_1,"./como-lidar-luto-pet.md": __vite_glob_0_2,"./frases-homenagem-pet-faleceu.md": __vite_glob_0_3,"./lenda-ponte-arco-iris-pet.md": __vite_glob_0_4,"./rituais-despedida-homenagem-pet.md": __vite_glob_0_5});
  const sortedPosts = Object.values(posts).filter((post) => post.frontmatter?.pubDate).sort((a, b) => new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "O Diário do Luto Pet | Blog Notícias do Céu", "description": "Conselhos, reflexões e homenagens para te ajudar a lidar com a dor da perda e a saudade do seu cão ou gato querido. Aqui, o amor vira lembrança viva." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "showCreateMemorial": false })} ${maybeRenderHead()}<main class="pt-32 pb-20 bg-gradient-to-b from-paper/30 to-white min-h-screen"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Blog Intro Header --> <div class="text-center max-w-3xl mx-auto mb-16 relative"> <i class="fa-solid fa-cloud text-accent/5 text-9xl absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none"></i> <span class="font-serif italic text-accent text-lg block mb-2 relative z-10">— Acervo de Memórias —</span> <h1 class="text-4xl font-serif font-black uppercase tracking-tight text-ink mb-4 relative z-10 leading-tight">
Diário do Luto Pet
</h1> <div class="w-20 h-1 bg-accent mx-auto mb-6"></div> <p class="text-gray-700 font-body text-base sm:text-lg leading-relaxed">
Um espaço seguro e acolhedor repleto de palavras de apoio, conselhos práticos e reflexões sobre a saudade do seu melhor amigo de quatro patas. Aqui, a dor se transforma em amor e lembrança viva.
</p> </div> <!-- Posts Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${sortedPosts.map((post) => {
    const dateFormatted = new Date(post.frontmatter.pubDate).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return renderTemplate`<article class="bg-white/70 hover:bg-white border-2 border-vintage rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between duration-300 relative group overflow-hidden"> ${post.frontmatter.category && renderTemplate`<div class="absolute top-0 right-0 bg-accent/15 text-accent font-serif font-bold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-bl-xl rounded-tr-lg"> ${post.frontmatter.category} </div>`} <div class="flex-grow"> <!-- Meta --> <time class="text-xs text-gray-500 font-body block mb-3">${dateFormatted}</time> <!-- Title --> <h4 class="text-xl font-serif font-semibold text-ink mb-3 group-hover:text-accent transition-colors leading-tight"> <a${addAttribute(post.url, "href")}> ${post.frontmatter.title} </a> </h4> <!-- Excerpt --> <p class="text-gray-600 font-body text-sm leading-relaxed mb-6 line-clamp-3"> ${post.frontmatter.description} </p> </div> <div class="border-t border-vintage/40 pt-4 flex justify-between items-center"> <span class="text-xs font-bold text-ink/60 uppercase tracking-widest">
Por ${post.frontmatter.author || "Redação"} </span> <a${addAttribute(post.url, "href")} class="inline-flex items-center gap-1.5 text-accent hover:text-ink font-serif font-bold text-xs uppercase tracking-wider transition-colors">
Ler Artigo <i class="fa-solid fa-arrow-right-long text-[10px] transform group-hover:translate-x-1 transition-transform"></i> </a> </div> </article>`;
  })} </div> <!-- Optional Empty State --> ${sortedPosts.length === 0 && renderTemplate`<div class="text-center py-20 bg-white/40 rounded-2xl border-2 border-dashed border-vintage"> <i class="fa-solid fa-newspaper text-accent/30 text-5xl mb-4"></i> <h4 class="font-serif text-xl font-semibold text-ink mb-1">Nenhum artigo encontrado</h4> <p class="text-gray-500 text-sm font-body">Estamos preparando novos conteúdos de acolhimento para você.</p> </div>`} <!-- CTA Footer Banner (Vintage style) --> <div class="newspaper-container border-double-thick p-8 sm:p-12 mt-20 text-center text-ink max-w-4xl mx-auto shadow-xl"> <h2 class="font-serif text-3xl font-bold uppercase mb-4 tracking-tight">
O amor não morre, ele vira notícia no céu.
</h2> <p class="font-body text-sm sm:text-base leading-relaxed text-ink/80 max-w-xl mx-auto mb-8">
Quer eternizar as memórias do seu melhor amigo de quatro patas em uma página exclusiva de jornal com atualizações diárias direto do paraíso?
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/#planos" class="bg-accent text-white px-8 py-3.5 rounded-full font-serif font-bold text-base hover:bg-ink transition-colors shadow-md text-center w-full sm:w-auto">
Começar Homenagem
</a> <a href="/gift-card" class="bg-white text-ink border-2 border-ink px-8 py-3.5 rounded-full font-serif font-bold text-base hover:bg-gray-50 transition-colors text-center w-full sm:w-auto">
Presentear um Amigo
</a> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/pages/blog/index.astro", void 0);

const $$file = "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
