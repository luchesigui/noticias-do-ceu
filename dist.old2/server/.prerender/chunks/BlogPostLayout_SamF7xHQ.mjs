import { c as createComponent, a as $$Layout, b as $$Navbar, $ as $$Footer } from './Footer_Cf8VPvjs.mjs';
import 'piccolore';
import { r as renderComponent, h as renderTemplate, e as maybeRenderHead, a as addAttribute, g as renderSlot } from './prerender_Cpn8qJMn.mjs';

const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter } = Astro2.props;
  const pubDateFormatted = new Date(frontmatter.pubDate).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | Blog Notícias do Céu`, "description": frontmatter.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "showCreateMemorial": false })} ${maybeRenderHead()}<main class="pt-32 pb-20 bg-gradient-to-b from-paper/30 to-white min-h-screen"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Article Header --> <article class="newspaper-container border-double-thick p-6 sm:p-12 text-ink relative"> <header class="text-center border-b-2 border-ink pb-6 mb-8"> <div class="flex justify-between items-center border-y-newspaper py-2 mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider"> <span>Categoria: ${frontmatter.category || "Luto Pet"}</span> <span>${pubDateFormatted}</span> </div> <h1 class="font-serif text-4xl font-black uppercase tracking-tight leading-tight mb-4 text-balance text-ink"> ${frontmatter.title} </h1> <p class="font-serif italic text-lg text-ink/75 max-w-2xl mx-auto leading-relaxed"> ${frontmatter.description} </p> <div class="mt-4 text-xs font-bold text-accent uppercase tracking-widest">
Por: ${frontmatter.author || "Redação Notícias do Céu"} </div> </header> <!-- Main Image if provided --> ${frontmatter.image && renderTemplate`<div class="mb-10 max-w-2xl mx-auto shadow-md border-4 border-white transform rotate-[-0.5deg]"> <img${addAttribute(frontmatter.image, "src")}${addAttribute(frontmatter.title, "alt")} class="w-full h-auto max-h-[400px] object-cover"> ${frontmatter.imageCaption && renderTemplate`<div class="bg-black/60 text-white text-xs p-2 text-center font-serif"> ${frontmatter.imageCaption} </div>`} </div>`} <!-- Content Slot --> <div class="article-content font-body text-base sm:text-lg leading-relaxed text-left md:text-justify max-w-2xl mx-auto"> ${renderSlot($$result2, $$slots["default"])} </div> <div class="separator-line my-12"></div> <!-- CTA Box (Vintage style) --> <div class="max-w-2xl mx-auto bg-white/60 border-2 border-accent/40 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-sm"> <h3 class="font-serif text-2xl font-semibold text-ink mb-3 mt-2">
Transforme a saudade em uma notícia do céu ☁️
</h3> <p class="text-sm text-gray-700 leading-relaxed max-w-md mx-auto mb-6">
Diferente de um quadro estático, nosso algoritmo gera uma nova edição do jornal do seu pet todos os dias, trazendo histórias de suas peripécias celestes e alívio para a dor da ausência.
</p> <div class="flex flex-col sm:flex-row gap-3 justify-center items-center"> <a href="/#planos" class="bg-accent text-white px-6 py-3 rounded-full font-serif font-semibold hover:bg-ink transition-colors shadow-md text-sm text-center w-full sm:w-auto">
Criar Memorial do Seu Pet
</a> <a href="/gift-card" class="bg-white text-ink border border-ink px-6 py-3 rounded-full font-serif font-semibold hover:bg-gray-50 transition-colors text-sm text-center w-full sm:w-auto">
Presentear um Amigo
</a> </div> </div> </article> <!-- Back to Blog Link --> <div class="mt-8 text-center"> <a href="/blog" class="inline-flex items-center gap-2 text-ink hover:text-accent font-semibold transition-colors font-serif"> <i class="fa-solid fa-arrow-left-long"></i> Voltar ao Blog
</a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/layouts/BlogPostLayout.astro", void 0);

export { $$BlogPostLayout as $ };
