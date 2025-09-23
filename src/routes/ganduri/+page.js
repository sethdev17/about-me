// src/routes/ganduri/+page.js
import { ganduri } from '$lib/posts/ganduri.js';

export function load() {
    // Returnăm o listă simplificată, doar cu titlurile și slug-urile,
    // pentru a fi afișată pe pagina principală a blogului.
    return {
        summaries: ganduri.map(post => ({
            title: post.title,
            slug: post.slug
        }))
    };
}