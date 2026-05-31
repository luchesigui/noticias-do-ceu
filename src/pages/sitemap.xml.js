import { db } from '../db/index.js';
import { pets as petsTable } from '../db/schema.js';

export const prerender = false;

export async function GET() {
  // Fetch all active pets from database to generate dynamic URLs
  let allPets = [];
  try {
    allPets = await db.select({ slug: petsTable.slug, createdAt: petsTable.createdAt }).from(petsTable);
  } catch (err) {
    console.error("Error fetching pets for sitemap:", err);
  }

  // Define static pages
  const staticPages = ['', 'gift-card', 'blog', 'cadastro', 'login'];

  // Fetch all blog markdown posts to get their URL slugs
  const posts = import.meta.glob('./blog/*.md', { eager: true });
  const blogSlugs = Object.keys(posts).map(key => key.replace('./', 'blog/').replace('.md', ''));

  const urls = [
    ...staticPages.map(page => ({
      loc: `https://noticias-do-ceu.com/${page}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: page === '' ? '1.0' : '0.8'
    })),
    ...blogSlugs.map(slug => ({
      loc: `https://noticias-do-ceu.com/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.7'
    })),
    ...allPets.map(pet => ({
      loc: `https://noticias-do-ceu.com/m/${pet.slug}`,
      lastmod: pet.createdAt,
      changefreq: 'daily',
      priority: '0.6'
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date(url.lastmod).toISOString()}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('').trim()}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
