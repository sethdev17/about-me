// src/routes/sitemap.xml/+server.js
import { SITE_URL } from '$lib/utils.js';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const posts = import.meta.glob('$lib/posts/*.md', { eager: true });
	const postSlugs = Object.keys(posts).map((path) => {
		const slug = path.split('/').pop().replace('.md', '');
		return `/gânduri/${slug}`;
	});

	const pages = [
		{ path: '/', priority: '1.0', freq: 'weekly' },
		{ path: '/gânduri', priority: '0.9', freq: 'weekly' },
		...postSlugs.map((s) => ({ path: s, priority: '0.8', freq: 'monthly' }))
	];

	const lastmod = new Date().toISOString();

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `public, max-age=${60 * 60 * 24}`
		}
	});
}