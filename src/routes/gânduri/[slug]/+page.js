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
    const post = await import(`../../../lib/posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata,
      themeColor: post.metadata.themeColor || '#60a5fa',
      themeColors: post.metadata.themeColors,
      description: post.metadata.description
    };
  } catch (e) {
    throw error(404, 'Gândul nu a fost găsit');
  }
}
