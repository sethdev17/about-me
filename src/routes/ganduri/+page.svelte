<script>
    export let data; // Aici SvelteKit ne livrează datele din +page.js
</script>

<div class="ganduri-container">
    <h1>Gândurile mele</h1>
    <p class="intro">
        Această secțiune este un sanctuar personal, un colț digital unde îmi aștern ideile, teoriile și reflecțiile. Este locul în care explorez concepte care mă fascinează și împărtășesc perspectivele ce se conturează din propriile mele experiențe, fără filtre. Bine ai venit în mintea mea.
    </p>

    <div class="lista-ganduri">
        <h2>Arhiva</h2>
        <ul>
            {#each data.summaries as post}
                <li>
                    <a href="/ganduri/{post.slug}">{post.title}</a>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .ganduri-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
    }
    h1 {
        font-size: 2.5rem;
        color: #ffaf40; /* O culoare accent, o poți schimba */
        text-align: center;
    }
    .intro {
        font-size: 1.1rem;
        line-height: 1.7;
        text-align: center;
        opacity: 0.9;
        margin-bottom: 3rem;
    }
    .lista-ganduri h2 {
        border-bottom: 2px solid #ffaf40;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
    }
    .lista-ganduri ul {
        list-style: none;
        padding: 0;
    }
    .lista-ganduri li a {
        display: block;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 5px;
        text-decoration: none;
        color: #f0f0f0;
        margin-bottom: 0.5rem;
        transition: all 0.2s ease;
    }
    .lista-ganduri li a:hover {
        background: rgba(255, 175, 64, 0.2);
        transform: translateX(5px);
    }
</style>