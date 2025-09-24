// Calea: src/routes/gânduri/+page.js

import { ganduri } from '$lib/posts/ganduri.js';

export function load() {
    return {
        summaries: ganduri.map(post => ({
            title: post.title,
            slug: post.slug
        }))
    };
}