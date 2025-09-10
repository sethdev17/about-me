// src/routes/sitemap.xml/+server.js

// Aici specifici URL-ul de bază al site-ului tău.
const siteUrl = 'https://sethdev.pages.dev';

/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch }) {
  // Lista paginilor statice de pe site-ul tău.
  // În cazul tău, este doar pagina principală.
  const staticPages = [`/`]; 
  
  // (Opțional) Dacă vei adăuga un blog sau alte pagini dinamice, 
  // vei prelua URL-urile lor aici, similar cu cum preluăm proiectele.

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${staticPages.map(path => `
        <url>
          <loc>${siteUrl}${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      `).join('')}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': `public, max-age=${60 * 60 * 24}` // Cache pentru 24 de ore
    }
  });
}