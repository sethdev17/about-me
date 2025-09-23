// src/routes/ganduri/[slug]/+page.js
import { error } from '@sveltejs/kit';
import { ganduri } from '$lib/posts/ganduri.js';

export function load({ params }) {
    // Găsim postul în "baza de date" care are slug-ul din URL
    const post = ganduri.find(post => post.slug === params.slug);

    // Dacă nu găsim niciun post, afișăm o eroare 404 Not Found
    if (!post) {
        throw error(404, 'Acest gând nu a fost găsit.');
    }

    // Returnăm postul găsit
    return { post };
}