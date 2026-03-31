<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  export let data;

  // --- STATE ---
  let isSortMenuOpen = false;
  let currentSort = 'default';

  // --- PAGINATION STATE ---
  let itemsPerPage = 10;
  let currentPage = 1;

  // --- STATE LIPITOARE (MENU) ---
  let leechStyle = { top: 0, left: 0, width: 0, height: 0, opacity: 0 };

  // --- HELPERS ---
  const luni = { 'Ianuarie': 0, 'Februarie': 1, 'Martie': 2, 'Aprilie': 3, 'Mai': 4, 'Iunie': 5, 'Iulie': 6, 'August': 7, 'Septembrie': 8, 'Octombrie': 9, 'Noiembrie': 10, 'Decembrie': 11 };
  
  function parseDate(d) {
    if (!d) return 0;
    const p = d.split(' ');
    return new Date(p[2], luni[p[1]] || 0, p[0]).getTime();
  }

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '96, 165, 250';
  }

  // --- LOGICĂ SORTARE ȘI PAGINARE ---
  $: allSortedPosts = [...data.summaries].sort((a, b) => {
    if (currentSort === 'newest') return parseDate(b.date) - parseDate(a.date);
    if (currentSort === 'oldest') return parseDate(a.date) - parseDate(b.date);
    if (currentSort === 'az') return a.title.localeCompare(b.title);
    return 0;
  });

  $: totalPages = Math.ceil(allSortedPosts.length / itemsPerPage);
  $: displayedPosts = allSortedPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  $: if (itemsPerPage) currentPage = 1;

  // --- HANDLERS ---
  function handleOutsideClick() {
    isSortMenuOpen = false;
    leechStyle.opacity = 0;
  }

  function moveLeech(e) {
    const btn = e.currentTarget;
    leechStyle = {
      top: btn.offsetTop,
      left: btn.offsetLeft,
      width: btn.offsetWidth,
      height: btn.offsetHeight,
      opacity: 1
    };
  }

  function changePage(p) {
    if (p >= 1 && p <= totalPages) {
      currentPage = p;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
</script>


<svelte:head>
  <!-- Titlul paginii în tab-ul browserului -->
  <title>Gândurile mele | Arhivă Personală</title>

  <!-- Descrierea standard pentru Google -->
  <meta name="description" content="Această secțiune este un sanctuar personal, un colț digital unde îmi aștern ideile, teoriile și reflecțiile. Bun venit în mintea mea." />

  <!-- Open Graph (Facebook, WhatsApp, LinkedIn, Discord etc.) -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Gândurile mele | Arhivă Personală" />
  <meta property="og:description" content="Un colț digital unde îmi aștern ideile, teoriile și reflecțiile. Explorează arhiva mea de gânduri." />
  
  <!-- Imaginea care apare în preview (trebuie să pui o imagine în folderul "static" al proiectului, de ex. "static/og-ganduri.jpg") -->
  <meta property="og:image" content="https://sethdev.pages.dev/og-ganduri.png" />
  <meta property="og:url" content="https://sethdev.pages.dev/gânduri" />

  <!-- Twitter Cards (Pentru previzualizări pe X/Twitter) -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Gândurile mele | Arhivă Personală" />
  <meta name="twitter:description" content="Un colț digital unde îmi aștern ideile, teoriile și reflecțiile." />
  <meta name="twitter:image" content="https://sethdev.pages.dev/og-ganduri.png" />
</svelte:head>



<svelte:window on:click={handleOutsideClick} />

<div class="ganduri-page-wrapper">
  <div class="ganduri-background-effects">
    <div class="wave"></div><div class="wave"></div>
  </div>

  <div class="ganduri-content">
    <h1 class="neon-title">Gândurile mele</h1>
    <p class="intro">
      Această secțiune este un sanctuar personal, un colț digital unde îmi aștern ideile, teoriile și reflecțiile. Este locul în care explorez concepte care mă fascinează. Bine ai venit în mintea mea.
    </p>

    <div class="lista-ganduri">
      <div class="header-arhivă">
        <h2>Arhivă <span class="post-count">({allSortedPosts.length} articole)</span></h2>
        
        <div class="sort-container">
          <button class="sort-trigger" on:click|stopPropagation={() => isSortMenuOpen = !isSortMenuOpen} class:active={isSortMenuOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
            <span>Sortează</span>
          </button>

          {#if isSortMenuOpen}
            <div class="dual-menu" transition:fly={{ y: 10, duration: 300, easing: cubicOut }} on:click|stopPropagation on:mouseleave={() => leechStyle.opacity = 0}>
                <!-- Lipitoarea reparată -->
                <div class="leech-indicator" style="top: {leechStyle.top}px; left: {leechStyle.left}px; width: {leechStyle.width}px; height: {leechStyle.height}px; opacity: {leechStyle.opacity};"></div>
                
                <div class="menu-column">
                    <span class="label">Ordine</span>
                    <button on:mouseenter={moveLeech} on:click={() => {currentSort = 'default'; isSortMenuOpen = false}} class:selected={currentSort === 'default'}><span class="dot"></span> Default</button>
                    <button on:mouseenter={moveLeech} on:click={() => {currentSort = 'newest'; isSortMenuOpen = false}} class:selected={currentSort === 'newest'}><span class="dot"></span> Cele mai noi</button>
                    <button on:mouseenter={moveLeech} on:click={() => {currentSort = 'oldest'; isSortMenuOpen = false}} class:selected={currentSort === 'oldest'}><span class="dot"></span> Cele mai vechi</button>
                    <button on:mouseenter={moveLeech} on:click={() => {currentSort = 'az'; isSortMenuOpen = false}} class:selected={currentSort === 'az'}><span class="dot"></span>De la A-Z</button>
                </div>

                <div class="divider"></div>

                <div class="menu-column">
                    <span class="label">Afișează</span>
                    <button on:mouseenter={moveLeech} on:click={() => {itemsPerPage = 10; isSortMenuOpen = false}} class:selected={itemsPerPage === 10}><span class="dot"></span> 10 articole</button>
                    <button on:mouseenter={moveLeech} on:click={() => {itemsPerPage = 20; isSortMenuOpen = false}} class:selected={itemsPerPage === 20}><span class="dot"></span> 20 articole</button>
                    <button on:mouseenter={moveLeech} on:click={() => {itemsPerPage = 30; isSortMenuOpen = false}} class:selected={itemsPerPage === 30}><span class="dot"></span> 30 articole</button>
                </div>
            </div>
          {/if}
        </div>
      </div>

      <ul>
        {#each displayedPosts as post (post.slug)}
          <li class="gand-item" style="--accent-post: {post.themeColor}; --accent-post-rgb: {hexToRgb(post.themeColor)}">
            <div class="item-wrapper">
              <a href={"/gânduri/" + post.slug} class="post-link">
                <span class="post-title">{post.title}</span>
              </a>

              <div class="date-controls">
                <span class="date-discreet">
                  {post.date || 'Martie 2026'}
                </span>
              </div>
            </div>
          </li>
        {/each}
      </ul>

      {#if totalPages > 1}
        <div class="pagination">
            <button class="p-btn prev" on:click={() => changePage(currentPage - 1)} disabled={currentPage === 1} aria-label="Înapoi">
                <!-- Săgeată mai fină (stroke-width 1.5) -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            {#each Array(totalPages) as _, i}
                <button class="p-num" class:active={currentPage === i + 1} on:click={() => changePage(i + 1)}>{i+1}</button>
            {/each}
            
            <button class="p-btn next" on:click={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Înainte">
                <!-- Săgeată mai fină (stroke-width 1.5) -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* FIX FONT GLOBALS */
  :global(*) { 
    -webkit-tap-highlight-color: transparent; 
    box-sizing: border-box; 
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* WRAPPER & BACKGROUND */
  .ganduri-page-wrapper {
    position: relative; background: #000; display: flex; flex-direction: column; align-items: center;
    min-height: 85vh; padding: 8rem 2rem 6rem; box-sizing: border-box; 
  }

  .ganduri-background-effects { 
    position: absolute; inset: 0; pointer-events: none; z-index: 0; 
    overflow: hidden;
  }
  
  .wave { position: absolute; border-radius: 50%; background: radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 70%); width: 1000px; height: 1000px; opacity: 0.2; }
  .wave:nth-child(1) { top: -20%; left: -10%; } 
  .wave:nth-child(2) { bottom: -20%; right: -10%; }

  .neon-title {
    font-family: 'Merriweather', serif; font-size: 3rem; text-align: center; margin-bottom: 1.25rem;
    color: #eaf6ff; background: linear-gradient(90deg, #ffffff, #60a5fa, #ffffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    text-shadow: 0 0 15px rgba(96, 165, 250, 0.5);
  }

  .intro { text-align: center; max-width: 640px; margin: 0 auto 3.5rem; color: #888; font-size: 1rem; line-height: 1.6; }

  /* --- HEADER & SORT --- */
  .header-arhivă { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 2rem; width: 100%; max-width: 800px; }
  .header-arhivă h2 { color: #fff; font-size: 1.2rem; margin: 0; padding-bottom: 0.5rem; display: flex; align-items: baseline; gap: 8px;}
  
  .post-count {
    font-size: 0.85rem;
    color: #888;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  .sort-container { position: relative; font-family: inherit; }
  .sort-trigger { background: transparent; border: none; color: #60a5fa; cursor: pointer; display: flex; align-items: center; gap: 8px; font-weight: 600; padding: 8px; transition: 0.3s; font-family: inherit; font-size: 0.95rem; }

  .dual-menu {
    position: absolute; top: 120%; right: 0; display: flex; background: #0a0a0f; border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; padding: 8px; z-index: 1000; box-shadow: 0 20px 50px rgba(0,0,0,0.9);
  }

  .menu-column { width: 150px; display: flex; flex-direction: column; gap: 4px; padding: 4px; }
  .menu-column .label { font-size: 0.6rem; text-transform: uppercase; color: #444; margin: 8px 12px; letter-spacing: 1px; font-weight: 800; font-family: inherit; }
  
  .menu-column button { 
    position: relative; background: transparent; border: none; color: #888; text-align: left; padding: 10px 12px; 
    cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 10px; font-size: 0.85rem; z-index: 1; transition: 0.2s; font-family: inherit;
  }
  
  .menu-column button.selected { color: #60a5fa; font-weight: 600; }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.1); transition: 0.3s; }
  .selected .dot { background: #60a5fa; box-shadow: 0 0 8px #60a5fa; }

  .divider { width: 1px; background: rgba(255,255,255,0.05); margin: 10px 8px; }

  .leech-indicator {
    position: absolute; background: rgba(96, 165, 250, 0.1); border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1); pointer-events: none; z-index: 0;
  }

  /* --- LIST ITEMS --- */
  ul { list-style: none; padding: 0; width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 0.8rem; }
  
  .item-wrapper {
    position: relative; display: flex; align-items: center; background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; overflow: visible;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .item-wrapper:hover {
    transform: translateY(-3px); border-color: var(--accent-post);
    background: radial-gradient(circle at left, rgba(var(--accent-post-rgb), 0.1) 0%, transparent 100%);
    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5), 0 0 15px -5px var(--accent-post);
  }

  /* TITLU */
  .post-link { 
    flex: 1; 
    min-width: 0; 
    padding: 1.2rem 1rem 1.2rem 2.5rem; 
    text-decoration: none; color: #ccc; 
    font-weight: 600; font-family: inherit; font-size: 1.05rem; 
    transition: 0.3s; 
    display: flex;
    align-items: center;
  }
  
  .item-wrapper:hover .post-link { color: #fff; }
  
  .post-title { 
    display: block; 
    /* Permite trecerea pe rândul 2 fără să se suprapună cu data */
    white-space: normal; 
    word-break: break-word;
    line-height: 1.4; 
  }

  .item-wrapper::before {
    content: ''; position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%);
    width: 4px; height: 40%; background: var(--accent-post); border-radius: 4px; transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .item-wrapper:hover::before { height: 70%; box-shadow: 0 0 15px var(--accent-post); }

  /* --- DATA --- */
  .date-controls { 
    /* Îi garantăm spațiul, nu este strivit de titluri lungi */
    flex-shrink: 0; 
    padding-right: 1.5rem; 
    text-align: right; 
  }
  
  .date-discreet {
    font-family: 'Merriweather', serif;
    font-size: 0.85rem;
    color: #666;
    font-style: italic;
    transition: color 0.3s;
  }
  .item-wrapper:hover .date-discreet {
    color: #999;
  }

  /* --- PAGINATION (ALB NEGRU & SĂGEȚI FINE) --- */
  .pagination { display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 4rem; font-family: inherit; }
  
  /* Butoane Săgeți (Fine, discrete, transparente) */
  .p-btn { 
    background: transparent; border: none; color: #777; 
    width: 44px; height: 44px; cursor: pointer; transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    display: flex; align-items: center; justify-content: center;
  }
  .p-btn:disabled { opacity: 0.2; cursor: not-allowed; }
  .p-btn:not(:disabled):hover { color: #fff; }
  .p-btn.prev:not(:disabled):hover { transform: translateX(-4px); }
  .p-btn.next:not(:disabled):hover { transform: translateX(4px); }

  /* Numere Pagini (Alb / Negru) */
  .p-num { 
    background: transparent; border: 1px solid rgba(255, 255, 255, 0.15); color: #ccc; 
    width: 40px; height: 40px; border-radius: 8px; cursor: pointer; transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    display: flex; align-items: center; justify-content: center; font-family: inherit; font-weight: 500; font-size: 0.95rem;
  }
  
  .p-num:not(.active):hover { 
    background: rgba(255, 255, 255, 0.08); 
    border-color: rgba(255, 255, 255, 0.3); 
    color: #fff; 
  }
  
  .p-num.active { 
    background: #fff; 
    color: #000; 
    border-color: #fff; 
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2); 
    transform: scale(1.05); 
    font-weight: 700;
  }

  /* --- MOBIL FIX --- */
  @media (max-width: 767px) {
    .ganduri-page-wrapper { padding: 6rem 1.25rem 4rem; min-height: auto; }
    .neon-title { font-size: 2.3rem; }
    
    .header-arhivă h2 { font-size: 1.1rem; flex-wrap: wrap; }
    
    .dual-menu { flex-direction: column; width: 175px; }
    .divider { height: 1px; width: 85%; margin: 4px auto; }
    
    .post-link { 
      padding: 1rem 0.5rem 1rem 1.8rem; 
      font-size: 1rem; 
      font-weight: 500;
    }
    
    .date-controls { padding-right: 1.2rem; }
    .date-discreet { font-size: 0.75rem; }
    
    .leech-indicator { display: none !important; }
    .p-btn { width: 38px; height: 38px; }
    .p-num { width: 36px; height: 36px; font-size: 0.85rem; }
  }
</style>