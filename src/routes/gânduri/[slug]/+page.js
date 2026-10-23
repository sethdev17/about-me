// src/routes/gânduri/[slug]/+page.js
import { error } from '@sveltejs/kit';

const VALID_SLUG = /^[a-z0-9ăâîșț_-]+$/i;

export function entries() {
  const posts = import.meta.glob('$lib/posts/*.md');
  return Object.keys(posts).map((path) => {
    const slug = path.split('/').pop().replace('.md', '');
    return { slug };
  });
}

export async function load({ params }) {
  if (!VALID_SLUG.test(params.slug)) {
    throw error(404, 'Gândul nu a fost găsit');
  }

  try {
    // Încercăm să încărcăm versiunea română (default)
    const postRo = await import(`../../../lib/posts/${params.slug}.md`);
    
    // Încercăm să vedem dacă există o versiune engleză manuală
    let postEn = null;
    try {
      postEn = await import(`../../../lib/posts/${params.slug}.en.md`);
    } catch (e) {
      // Nu există versiune engleză manuală, e ok
    }

    return {
      contentRo: postRo.default,
      metaRo: postRo.metadata,
      contentEn: postEn ? postEn.default : null,
      metaEn: postEn ? postEn.metadata : null,
      themeColor: postRo.metadata.themeColor || '#60a5fa',
      themeColors: postRo.metadata.themeColors,
      description: postRo.metadata.description
    };
  } catch (e) {
    throw error(404, 'Gândul nu a fost găsit');
  }
}
