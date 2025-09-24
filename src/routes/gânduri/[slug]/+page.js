// Calea: src/routes/ganduri/[slug]/+page.js
import { error } from '@sveltejs/kit';
import { ganduri } from '$lib/posts/ganduri.js';

export function load({ params }) {
    const post = ganduri.find(p => p.slug === params.slug);
    if (!post) {
        throw error(404, 'Gândul nu a fost găsit');
    }
    return { post };
}