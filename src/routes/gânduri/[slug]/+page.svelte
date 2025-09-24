<!-- Calea: src/routes/ganduri/[slug]/+page.svelte -->
<script>
    export let data;
</script>

<div class="post-background" style="--bg-image: url('{data.post.backgroundImage}')">
    <article class="post-content">
        <h1>{data.post.title}</h1>
        <div class="divider"></div>
        <div class="post-text">
            {@html data.post.content}
        </div>
    </article>
</div>

<style>
    .post-background {
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), var(--bg-image);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        box-sizing: border-box;
        padding-top: 100px;
        padding-bottom: 4rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .post-content {
        max-width: 800px;
        width: 100%;
        background: rgba(10, 10, 15, 0.65);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 3rem 4rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    }

    h1 {
        font-family: 'Merriweather', serif;
        font-style: italic;
        font-weight: 400;
        font-size: 2.5rem;
        color: #fff;
        text-align: center;
        margin-top: 0;
        margin-bottom: 1.5rem;
        line-height: 1.3;
        text-shadow: 0 2px 10px rgba(0,0,0,0.5);
    }

    .divider {
        height: 1px;
        width: 100px;
        margin: 0 auto 2.5rem auto;
        background: linear-gradient(90deg, transparent, #3b82f6, transparent);
    }

    .post-text {
        color: #e0e0e0;
        text-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
    }

    :global(.post-text p) {
        font-family: 'Roboto', sans-serif;
        font-size: 1.05rem;
        line-height: 1.8;
        text-align: justify;
        text-indent: 2em;
        -webkit-hyphens: auto;
        hyphens: auto;
        margin-top: 0; 
        margin-bottom: 1.2em; 

        /* ======== MODIFICAREA CHEIE PENTRU PC ======== */
        /* Valori negative foarte mici pentru a strânge textul. */
        /* Acest lucru ajută algoritmul de 'justify' să găsească soluții mai bune. */
        letter-spacing: -0.1px; 
        word-spacing: -0.2px;
        /* ============================================== */
    }

    :global(.post-text p:last-child) {
        margin-bottom: 0;
    }
    :global(.post-text p.fara-alineat) {
        text-indent: 0;
    }
    
    /* Responsive Design */
    @media (max-width: 767px) {
        .post-background {
            background-attachment: scroll;
            padding-top: 80px;
            padding-left: 1rem;
            padding-right: 1rem;
            align-items: flex-start;
        }
        
        .post-content {
            padding: 2rem 1.5rem;
        }
        
        h1 {
            font-size: 1.9rem;
        }
        
        :global(.post-text p) {
            font-size: 1rem;
            line-height: 1.75;
            text-align: left;
            -webkit-hyphens: none;
            hyphens: none;
            text-indent: 1.5em;
            
            /* Resetăm valorile la normal pe mobil, unde nu sunt necesare */
            letter-spacing: normal; 
            word-spacing: normal;
        }
    }
</style>