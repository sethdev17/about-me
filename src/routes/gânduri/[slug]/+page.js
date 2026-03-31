// src/routes/gânduri/[slug]/+page.js
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await import(`../../../lib/posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata,
      themeColor: post.metadata.themeColor || '#60a5fa' 
    };
  } catch (e) {
    throw error(404, 'Gândul nu a fost găsit');
  }
}
