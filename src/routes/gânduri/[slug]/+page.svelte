<!-- src/routes/gânduri/[slug]/+page.svelte -->
<script>
    export let data;
</script>

<div class="post-background" 
     style="--bg-image: url('{data.meta.backgroundImage}'); 
            --accent-color: {data.meta.themeColor || '#3b82f6'};">
    <article class="post-content">
        <h1>{data.meta.title}</h1>
        <div class="divider"></div>
        <div class="post-text">
            <svelte:component this={data.content} />
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
        min-height: 100dvh;
        box-sizing: border-box;
        padding: 100px 1.5rem 4rem;
    }

    .post-content {
        max-width: 800px;
        width: 100%;
        background: rgba(10, 10, 15, 0.65);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.06);
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
        width: 300px;
        margin: 0 auto 2.5rem auto;
        background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
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
        text-indent: 1em;
        margin-bottom: 1em;
        letter-spacing: -0.04em;
    }

    :global(.post-text h1) {
        font-size: 1.8rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #fff;
        letter-spacing: 0.01em;
    }

    :global(.post-text p.fara-alineat) {
        text-indent: 0 !important;
    }

    /* --- DATA CREĂRII OPTIMIZATĂ --- */
    :global(.post-text .data-creare) {
        display: block;
        text-align: right;
        margin-top: 4rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        font-family: 'Merriweather', serif;
        font-style: italic;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.4);
        text-indent: 0 !important; /* Fix pentru centrarea pe mobil */
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); /* Animație mai fluidă */
        cursor: default;
    }

    :global(.post-text .data-creare::before) {
        content: '◈';
        margin-right: 8px;
        font-style: normal;
        opacity: 0.6;
        color: var(--accent-color); /* Am legat culoarea simbolului de temă */
        transition: all 0.4s ease;
    }

    :global(.post-text .data-creare:hover) {
        color: var(--accent-color);
        opacity: 1;
        text-shadow: 0 0 15px var(--accent-color);
        transform: translateX(-5px); /* Mică mișcare fluidă la hover */
    }

    :global(.post-text .data-creare:hover::before) {
        opacity: 1;
        text-shadow: 0 0 10px var(--accent-color);
    }

     :global(.term-tooltip) {
        position: relative;
        display: inline-flex;
        align-items: center;
        color: var(--accent-color); /* Cuvântul va avea culoarea temei */
        opacity: 0.8;
        text-decoration: underline 1.3px dashed var(--accent-color);
        cursor: help;
        text-indent: 0 !important; /* Previne indentarea dacă e la început de rând */
        transition: opacity 0.3s ease;
    }

    :global(.info-icon) {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 14px;
        height: 14px;
        margin-left: 4px;
        margin-right: 4px;
        background-color: var(--accent-color);
        color: #fff;
        opacity: 0.6;
        border-radius: 50%;
        font-size: 10px;
        font-family: serif;
        font-weight: bold;
        font-style: normal;
        vertical-align: middle;
        box-shadow: 0 0 5px var(--accent-color);
        transition: opacity 0.3s ease;
    }

    :global(.tooltip-bubble) {
        visibility: hidden;
        width: 220px;
        background: rgba(20, 20, 25, 0.95);
        color: #fff;
        text-align: center;
        border: 1.6px solid var(--accent-color);
        border-radius: 8px;
        padding: 10px;
        position: absolute;
        z-index: 100;
        bottom: 150%; /* Apare deasupra */
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: all 0.3s ease;
        font-family: 'Roboto', sans-serif;
        font-size: 0.85rem;
        line-height: 1.4;
        font-style: normal;
        text-shadow: none;
        box-shadow: 0 5px 20px rgba(0,0,0,0.5);
        pointer-events: none;
    }

    /* Săgeata bulei */
    :global(.tooltip-bubble::after) {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: var(--accent-color) transparent transparent transparent;
    }

    /* Aceasta este o singură regulă care țintește ambele elemente când grupul primește hover */
    :global(.term-tooltip:hover), 
    :global(.term-tooltip:hover .info-icon) {
       opacity: 1 !important;
    }

    /* Hover effect */
    :global(.term-tooltip:hover .tooltip-bubble) {
        visibility: visible;
        opacity: 1;
        bottom: 130%;
    }

    /* --- RESPONSIVITATE --- */
    @media (max-width: 767px) {
        .post-background {
            background-attachment: scroll !important; /* Scroll mult mai fluid pe mobil */
            padding-top: 80px;
            padding-left: 1rem;
            padding-right: 1rem;
            align-items: flex-start;
        }
        
        .post-content {
            padding: 2.5rem 1.5rem;
        }
        
        h1 {
            font-size: 1.9rem;
        }
        
        :global(.post-text p) {
            font-size: 1rem;
            text-align: left;
            text-indent: 1.5em;
        }

        :global(.post-text .data-creare) {
            text-align: center !important; /* Centrare reală pe mobil */
            margin-top: 3rem;
            font-size: 0.85rem;
            transform: none !important; /* Evităm mișcarea laterală pe touch */
        }

        :global(.tooltip-bubble) {
            width: 160px;
            font-size: 0.8rem;
        }
    }
</style>