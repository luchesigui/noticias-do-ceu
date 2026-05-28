import { c as createComponent, a as $$Layout, b as $$Navbar, $ as $$Footer } from './Footer_Cf8VPvjs.mjs';
import 'piccolore';
import { r as renderComponent, h as renderTemplate, e as maybeRenderHead } from './prerender_Cpn8qJMn.mjs';
import { r as renderScript } from './script_CqMBQyn5.mjs';

const $$RedeemSuccess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resgate Concluído | Notícias do Céu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "showCreateMemorial": false })}  ${maybeRenderHead()}<main class="flex-grow pt-32 pb-20 px-4 flex items-center justify-center bg-gradient-to-b from-paper/30 to-white relative overflow-hidden min-h-[70vh]"> <!-- Background decorations --> <i class="fa-solid fa-cloud text-gray-200 text-9xl absolute -top-10 -left-10 opacity-30 pointer-events-none animate-cloud-slow-1"></i> <i class="fa-solid fa-cloud text-gray-200 text-9xl absolute -bottom-10 -right-10 opacity-30 pointer-events-none animate-cloud-slow-2"></i> <div class="w-full max-w-2xl relative z-10"> <div class="newspaper-container border-double-thick p-8 fade-in text-ink text-center"> <!-- Success icon --> <div class="inline-flex items-center justify-center w-20 h-20 bg-green-50 text-green-600 rounded-full border-2 border-green-200 mb-6 shadow-md"> <i class="fa-solid fa-check text-4xl"></i> </div> <!-- Plan Badge --> <div class="mb-4"> <span id="plan-type-badge" class="inline-block bg-accent/10 text-accent font-serif font-semibold text-sm px-4 py-1.5 rounded-full border border-accent/25">
Plano Ativado
</span> </div> <!-- Info Notice for Idempotent loads --> <div id="already-redeemed-notice" class="hidden mb-6 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl px-4 py-3 text-sm text-left"> <div class="flex items-start gap-2"> <i class="fa-solid fa-circle-info text-amber-600 mt-0.5"></i> <p>Você já havia resgatado este cartão anteriormente. O seu acesso permanece ativo e garantido.</p> </div> </div> <h2 id="recipient-greeting" class="font-serif text-3xl font-bold text-ink mb-3">Tudo pronto!</h2> <p id="redemption-summary" class="text-gray-700 leading-relaxed font-body max-w-md mx-auto mb-6">
Seu cartão de presente foi resgatado com sucesso.
</p> <div class="separator-line"></div> <p class="text-sm text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
Sabemos que a saudade de um grande amigo de quatro patas é infinita. A partir de agora, você terá uma edição de jornal diária repleta de amor e boas notícias do paraíso dos pets.
</p> <!-- Primary CTA --> <div class="space-y-4"> <a href="/dashboard" class="block w-full bg-ink text-paper py-4 rounded-xl font-serif font-bold text-lg hover:bg-accent transition-colors shadow-lg flex justify-center items-center gap-2"> <span>Ir para o Meu Painel</span> <i class="fa-solid fa-paw"></i> </a> </div> <!-- Lifetime Bonus Info (only visible if Lifetime Plan was redeemed) --> <div id="lifetime-bonus-info" class="hidden mt-8 bg-amber-50/50 p-6 rounded-xl border border-amber-200/60 text-left"> <h5 class="text-lg font-serif font-semibold text-amber-900 mb-2 flex items-center gap-2"> <i class="fa-solid fa-award text-amber-700"></i> Benefícios Vitalícios Inclusos:
</h5> <ul class="text-xs text-amber-800 space-y-2 list-disc list-inside"> <li>Acesso permanente à página sem renovações.</li> <li>Navegação pelo arquivo histórico de todas as edições diárias.</li> <li>Possibilidade de exportar todas as histórias geradas como um lindo livro digital em PDF.</li> <li>1 Carta para o Céu grátis inclusa por mês.</li> </ul> </div> <!-- Optional Upgrade Section (only visible if Annual Plan was redeemed) --> <div id="upgrade-section" class="hidden mt-8 bg-amber-50/50 p-6 rounded-xl border border-amber-200/60 text-left"> <h5 class="text-lg font-serif font-semibold text-amber-900 mb-2 flex items-center gap-2"> <i class="fa-solid fa-circle-chevron-up text-amber-700"></i> Deseja migrar para o Vitalício?
</h5> <p class="text-xs text-amber-800 leading-relaxed mb-4">
O plano anual dá acesso à edição atual por um ano. Com o upgrade único para o plano Vitalício, você garante o arquivo perpétuo do jornal, a exportação de PDF completa, além de cartas mensais para o céu, sem cobranças futuras.
</p> <a href="/#planos" class="inline-flex items-center gap-2 bg-[#C5A059] text-ink text-xs font-sans font-bold px-4 py-2.5 rounded-lg hover:bg-ink hover:text-paper transition-colors shadow-md"> <span>Ver Benefícios do Vitalício</span> <i class="fa-solid fa-star"></i> </a> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/pages/redeem-success.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/pages/redeem-success.astro", void 0);

const $$file = "/Users/guilhermeluchesi/Dev/noticias-do-ceu/src/pages/redeem-success.astro";
const $$url = "/redeem-success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RedeemSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
