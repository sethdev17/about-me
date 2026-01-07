<script>
  export let data;
</script>

<div class="ganduri-page-wrapper">
  <div class="ganduri-background-effects">
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </div>

  <div class="ganduri-content">
    <h1 class="neon-title">Gândurile mele</h1>
    <p class="intro">
      Această secțiune este un sanctuar personal, un colț digital unde îmi aștern ideile, teoriile și reflecțiile. Este locul în care explorez concepte care mă fascinează. Bine ai venit în mintea mea.
    </p>

    <div class="lista-ganduri">
      <h2>Arhivă</h2>
      <ul>
        {#each data.summaries as post (post.slug)}
          <li>
            <a href={"/gânduri/" + post.slug}>
              
              {post.title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  /* STRUCTURA NOUĂ PENTRU A ȚINE FOOTER-UL JOS */
  .ganduri-page-wrapper {
    position: relative; /* Container pentru efectele de fundal */
    overflow: hidden;   /* Ascunde ce depășește */
    background: #000;

    display: flex; /* Centrare */
    justify-content: center;

    /* LINIA CHEIE: se va întinde pe tot ecranul dacă conținutul e scurt */
    min-height: calc(100vh - 72px); /* 100% din ecran minus înălțimea header-ului (aprox) */

    /* Paddingul se mută aici */
    padding: 8rem 2rem 4rem;
    box-sizing: border-box;
  }

  .ganduri-background-effects {
    position: absolute;
    inset: 0;
    z-index: 0; /* Este în spatele conținutului */
    pointer-events: none; /* Nu interceptează click-uri */
  }

  .ganduri-content {
    max-width: 800px;
    width: 100%;
    position: relative; /* Stă deasupra fundalului */
    z-index: 1;
  }

  .wave {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(29, 78, 216, 0.30) 0%, transparent 70%);
  }
  .wave:nth-child(1) {
    width: 1200px;
    height: 1200px;
    top: 20%;
    left: 10%;
    opacity: 0.24;
  }
  .wave:nth-child(2) {
    width: 1000px;
    height: 1000px;
    top: 65%;
    left: 72%;
    opacity: 0.18;
  }
  .wave:nth-child(3) {
    width: 800px;
    height: 800px;
    top: 48%;
    left: 48%;
    opacity: 0.22;
  }

  .neon-title {
    font-family: 'Merriweather', serif;
    font-size: 3rem;
    line-height: 1.05;
    text-align: center;
    display: block;
    margin: 0 auto 1.25rem;
    position: relative;
    color: #eaf6ff;
    letter-spacing: 0.3px;
    background: linear-gradient(90deg, #ffffff 0%, #a7c8ff 35%, #60a5fa 65%, #dbeafe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.95),
                 0 0 16px rgba(96, 165, 250, 0.95),
                 0 0 36px rgba(59, 130, 246, 0.75);
    filter: drop-shadow(0 8px 26px rgba(59, 130, 246, 0.18));
    animation: neon-pulse 5s ease-in-out infinite;
  }
  .neon-title::after {
    content: '';
    position: absolute;
    left: 50%;
    top: calc(50% - 0.25rem);
    transform: translate(-50%, -50%);
    width: 200%;
    height: 110%;
    pointer-events: none;
    border-radius: 40%;
    background: radial-gradient(
      ellipse at center,
      rgba(96, 165, 250, 0.28) 0%,
      rgba(59, 130, 246, 0.12) 22%,
      rgba(59, 130, 246, 0.06) 38%,
      transparent 60%
    );
    filter: blur(22px);
    opacity: 0.92;
    z-index: -1;
    mix-blend-mode: screen;
    animation: halo-breathe 5s ease-in-out infinite;
  }

  @keyframes neon-pulse {
    0% {
      text-shadow: 0 0 6px rgba(255, 255, 255, 0.95),
                   0 0 14px rgba(96, 165, 250, 0.85),
                   0 0 28px rgba(59, 130, 246, 0.6);
    }
    50% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 1),
                   0 0 24px rgba(96, 165, 250, 1),
                   0 0 48px rgba(59, 130, 246, 0.85),
                   0 0 100px rgba(167, 200, 255, 0.28);
    }
    100% {
      text-shadow: 0 0 6px rgba(255, 255, 255, 0.95),
                   0 0 14px rgba(96, 165, 250, 0.85),
                   0 0 28px rgba(59, 130, 246, 0.6);
    }
  }
  @keyframes halo-breathe {
    0% { opacity: 0.88; }
    50% { opacity: 0.98; }
    100% { opacity: 0.88; }
  }

  .intro {
    text-align: center;
    max-width: 640px;
    margin: 0.6rem auto 2.5rem;
    color: #cfcfcf;
    line-height: 1.6;
    font-size: 1rem;
  }

  .lista-ganduri h2 {
    color: #e6f0ff;
    border-bottom: 1px solid rgba(96, 165, 250, 0.12);
    padding: 0.5rem 0 0.6rem;
    margin-bottom: 0.9rem;
    font-size: 1.15rem;
    font-weight: 700;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.35);
    letter-spacing: 0.2px;
  }

  .lista-ganduri ul {
    list-style: none;
    padding: 0;
    margin-top: 1.25rem;
    display: grid;
    gap: 0.75rem;
  }

  .lista-ganduri li a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #e6eefc;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 12px;
    transition:
      background-color 200ms ease,
      color 200ms ease,
      box-shadow 200ms ease,
      transform 160ms ease;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(59, 130, 246, 0.015) 100%);
    border: 1px solid rgba(96, 165, 250, 0.08);
    box-shadow: 0 6px 18px rgba(10, 20, 40, 0.25);
    font-weight: 600;
  }

  .lista-ganduri li a::before {
    content: '';
    position: absolute;
    left: 0.45rem;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 60%;
    background: linear-gradient(180deg, #60a5fa, #3b82f6);
    border-radius: 4px;
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.5);
    opacity: 1;
  }

  .lista-ganduri li a:hover {
    background-color: rgba(78, 143, 249, 0.08);
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(28, 113, 250, 0.12);
  }

  .lista-ganduri li a:hover .glow-dot {
    transform: scale(1.45);
    box-shadow: 0 0 18px rgba(96, 165, 250, 0.95);
  }

  /* Responsivitate pentru telefon */
   @media (max-width: 767px) {
  .ganduri-page-wrapper {
    padding: 6rem 1.25rem 3rem;
  }
  
  .neon-title {
    font-size: 2.1rem;
    margin-bottom: 0.9rem;
    /* EFECTE SLABE dar VIZIBIL */
    color: #eaf6ff; /* Culoare solidă de bază */
    background: linear-gradient(90deg, #ffffff 0%, #a7c8ff 35%, #60a5fa 65%, #dbeafe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* Umbre MINIME pentru vizibilitate */
    text-shadow: 
      0 0 4px rgba(255, 255, 255, 0.6),
      0 0 8px rgba(96, 165, 250, 0.4);
    filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.15));
    animation: none; /* Fără puls */
  }
  
  /* Halo SIMPLIFICAT pe mobil - mai mic și slab */
  .neon-title::after {
    content: '';
    position: absolute;
    left: 50%;
    top: calc(50% - 0.2rem);
    transform: translate(-50%, -50%);
    width: 140%; /* Redus de la 200% */
    height: 90%;
    border-radius: 30%;
    background: radial-gradient(
      ellipse at center,
      rgba(96, 165, 250, 0.15) 0%,  /* Mult mai slab */
      rgba(59, 130, 246, 0.06) 30%,
      transparent 50%
    );
    filter: blur(12px); /* Blur mai mic */
    opacity: 0.6; /* Vizibil dar slab */
    z-index: -1;
  }

  /* Waves reduse dar prezente */
  .wave {
    opacity: 0.06 !important; /* Foarte slab */
  }
  .wave:nth-child(1) { width: 500px; height: 500px; top: 10%; left: 0%; }
  .wave:nth-child(2) { width: 400px; height: 400px; top: 60%; left: 60%; }
  .wave:nth-child(3) { width: 300px; height: 300px; top: 45%; left: 45%; }

  /* Restul optimizărilor rămân */
  .lista-ganduri li a {
    padding: 0.9rem 1.5rem;
    transition: background-color 150ms ease, transform 120ms ease;
    transform: none;
  }
  
  .lista-ganduri li a:hover {
    background-color: rgba(78, 143, 249, 0.06);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(28, 113, 250, 0.08);
  }
    
    .lista-ganduri li a::before {
      width: 4px;
      box-shadow: 0 0 6px rgba(59, 130, 246, 0.3);
    }

    .intro {
      font-size: 0.95rem;
      max-width: 92%;
    }
    
    .lista-ganduri ul {
      gap: 0.6rem;
    }
  }

  /* FORȚEAZĂ REDUCED MOTION PENTRU MOBILE WEAK */
  @media (max-width: 767px) and (prefers-reduced-motion: no-preference) {
    .neon-title,
    .neon-title::after,
    .lista-ganduri li a {
      transition-duration: 100ms !important;
    }
  }
</style>