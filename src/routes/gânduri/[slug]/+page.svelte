<!-- src/routes/gânduri/[slug]/+page.svelte -->
<script>
    export let data;
</script>

<div class="post-container" style="--accent-color: {data.meta.themeColor || '#3b82f6'};">
    <div class="post-banner" style="--bg-image: url('{data.meta.backgroundImage}');"></div>

    <!-- Articolul sub imagine -->
    <article class="post-content">
        <h1>{data.meta.title}</h1>
        <div class="divider"></div>
        <div class="post-text">
            <svelte:component this={data.content} />
        </div>
    </article>
</div>

<style>
    .post-container {
        width: 100%;
        max-width: 850px;
        margin: 0 auto;
        padding: 40px 1.5rem;
        box-sizing: border-box;
    }

    .post-container :global(::selection) {
        background-color: var(--accent-color);
        color: #ffffff;
    }

    /* BANNERUL */
    .post-banner {
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), var(--bg-image);
        background-size: cover;
        background-position: center;
        
        /* Dimensiuni */
        width: 100%;
        height: 350px;
        border: 2px solid rgb(0, 0, 0);
        border-radius: 16px;
        
        margin-bottom: 2.5rem; /* Spațiul dintre banner și titlu */
        margin-top: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    /* TEXTUL */
    .post-content {
        width: 100%;
        background: color-mix(in srgb, var(--accent-color) 4%, #010108);
        border: 1px solid color-mix(in srgb, var(--accent-color) 15%, transparent);
        border-radius: 16px;
        padding: 3.5rem 4rem;
        box-sizing: border-box;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 
                0 0 50px color-mix(in srgb, var(--accent-color) 3%, transparent);
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

    /* --- DATA CREĂRII --- */
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
        text-indent: 0 !important;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        cursor: default;
    }

    :global(.post-text .data-creare::before) {
        content: '◈';
        margin-right: 8px;
        font-style: normal;
        opacity: 0.6;
        color: var(--accent-color);
        transition: all 0.4s ease;
    }

    :global(.post-text .data-creare:hover) {
        color: var(--accent-color);
        opacity: 1;
        text-shadow: 0 0 15px var(--accent-color);
        transform: translateX(-5px);
    }

    :global(.post-text .data-creare:hover::before) {
        opacity: 1;
        text-shadow: 0 0 10px var(--accent-color);
    }

     :global(.term-tooltip) {
        position: relative;
        display: inline-flex;
        align-items: center;
        color: var(--accent-color);
        opacity: 0.8;
        text-decoration: underline 1.3px dashed var(--accent-color);
        cursor: help;
        text-indent: 0 !important;
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
        .post-container {
            padding: 15px 0.5rem; /* Spațiu mai mic pe marginile ecranului telefonului */
        }

        .post-banner {
            height: 200px;
            border-radius: 12px;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
        }
        
        .post-content {
            padding: 2rem 1.2rem;
            border-radius: 12px;
        }
        
        h1 {
            font-size: 1.8rem;
        }
        
        :global(.post-text p) {
            font-size: 1rem;
            text-align: left;
            text-indent: 1.2em;
        }

        :global(.post-text .data-creare) {
            text-align: center !important; 
            margin-top: 3rem;
            font-size: 0.85rem;
            transform: none !important; 
        }

        :global(.tooltip-bubble) {
            width: 160px;
            font-size: 0.8rem;
        }
    }
</style>