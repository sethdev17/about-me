<script>
    import { onMount, onDestroy } from 'svelte';
    import { page } from '$app/stores';
    import { slide } from 'svelte/transition';
    import { language } from '$lib/stores.js';
    import { goto } from '$app/navigation';

    export let t = {};
    export let scrollToSection = (id) => { window.location.href = `/#${id}` };
    export let currentSection = '';

    $: onHomePage = $page.url.pathname === '/';
    $: onThoughtsPage = $page.url.pathname.startsWith('/gânduri');

    let isMenuOpen = false;
    let isScrolled = false;
    let mobileNav;
    let menuBtn;
    let currentLang = 'ro';

    language.subscribe(lang => {
      currentLang = lang;
    });

    function toggleLanguage() {
      language.set(currentLang === 'ro' ? 'en' : 'ro');
    }

    function handleClickOutside(e) {
      if (mobileNav && !mobileNav.contains(e.target) && menuBtn && !menuBtn.contains(e.target)) {
        isMenuOpen = false;
      }
    }
    
    const _scrollToSection = scrollToSection;
    scrollToSection = (sectionId) => {
        _scrollToSection(sectionId);
        isMenuOpen = false;
    };

    function goToThoughts() {
      isMenuOpen = false;
      goto('/gânduri');
    }
    
    function handleGlobalScroll() {
        isScrolled = window.scrollY > 50;
    }
    
    onMount(() => {
        window.addEventListener('scroll', handleGlobalScroll, { passive: true });
        document.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleGlobalScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    });
</script>

<header class="main-header" class:scrolled={isScrolled}>
    <div class="header-content">
        <a href="/" class="logo">
            <span class="logo-text">SethDev</span>
        </a>

        {#if onHomePage}
            <nav class="desktop-nav">
                <button class="nav-link lang-switcher" on:click={toggleLanguage} aria-label="Change language">
                    <span class="lang-text">{currentLang.toUpperCase()}</span>
                </button>
                <button class="nav-link" class:active={currentSection === 'about'} on:click={() => scrollToSection('about')}>{t.navAbout || 'Despre'}</button>
                <button class="nav-link" class:active={currentSection === 'projects'} on:click={() => scrollToSection('projects')}>{t.navProjects || 'Proiecte'}</button>
                <button class="nav-link" class:active={currentSection === 'anime'} on:click={() => scrollToSection('anime')}>{t.navAnime || 'Anime'}</button>
                <button class="nav-link thoughts-link" on:click={goToThoughts}>
                    {t.navThoughts || 'Gândurile mele'} <span class="external-arrow">↗</span>
                </button>
                <button class="nav-link" class:active={currentSection === 'contact'} on:click={() => scrollToSection('contact')}>{t.navContact || 'Contact'}</button>
            </nav>
        {:else if onThoughtsPage}
            <nav class="desktop-nav">
                <button class="nav-link lang-switcher" on:click={toggleLanguage} aria-label="Change language">
                    <span class="lang-text">{currentLang.toUpperCase()}</span>
                </button>
                <a href="/" class="nav-link thoughts-link">
                    <span class="external-arrow">←</span> {t.footerHome || 'Acasă'}
                </a>
            </nav>
        {/if}

        {#if onHomePage || onThoughtsPage}
            <div class="header-right-group">
                {#if onHomePage}
                    <button class="mobile-lang-switcher" on:click={toggleLanguage} aria-label="Change language">
                        <span class="lang-text">{currentLang.toUpperCase()}</span>
                    </button>
                {/if}
                {#if onHomePage}
                    <button bind:this={menuBtn} class="mobile-menu-btn" on:click={() => isMenuOpen = !isMenuOpen} aria-label="Toggle Menu">
                    <div class="hamburger" class:active={isMenuOpen}></div>
                    <div class="hamburger" class:active={isMenuOpen}></div>
                    <div class="hamburger" class:active={isMenuOpen}></div>
                </button>
                {/if}
            </div>
        {/if}
    </div>

    {#if isMenuOpen && onHomePage}
        <nav bind:this={mobileNav} class="mobile-nav" transition:slide={{ duration: 200 }}>
            <button class="mobile-nav-link mobile-lang-row" on:click|stopPropagation={toggleLanguage}>
                <span>🌐</span> {currentLang === 'ro' ? 'Română' : 'English'} <span class="hint">{currentLang === 'ro' ? '(click pentru EN)' : '(click for RO)'}</span>
            </button>
            <button class="mobile-nav-link" on:click={() => scrollToSection('about')}>{t.navAbout || 'Despre'}</button>
            <button class="mobile-nav-link" on:click={() => scrollToSection('projects')}>{t.navProjects || 'Proiecte'}</button>
            <button class="mobile-nav-link" on:click={() => scrollToSection('anime')}>{t.navAnime || 'Anime'}</button>
            <button class="mobile-nav-link thoughts-link-mobile" on:click={goToThoughts}>
                {t.navThoughts || 'Gândurile mele'} <span class="external-arrow">↗</span>
            </button>
            <button class="mobile-nav-link" on:click={() => scrollToSection('contact')}>{t.navContact || 'Contact'}</button>
        </nav>
    {/if}
</header>

<style>
  .main-header { 
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    z-index: 1000; 
    background: rgba(0, 0, 0, 0.8); 
    backdrop-filter: blur(20px); 
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
    transition: background 0.3s ease, box-shadow 0.3s ease; 
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
  }
  .main-header.scrolled { 
    background: rgba(0, 0, 0, 0.95); 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); 
  }
  .header-content { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 1rem 2rem; 
    max-width: auto; 
    margin: 0 auto; 
  }
  .logo { 
    display: flex; 
    align-items: center; 
    text-decoration: none;
  }
  .logo-text { 
    font-size: 1.5rem; 
    font-weight: bold; 
    background: linear-gradient(90deg, #ffffff 0%, #a7c8ff 50%, #dbeafe 100%); 
    background-size: 200% 100%; 
    -webkit-background-clip: text; 
    background-clip: text;
    color: transparent;
    animation: gradientShift 3s ease-in-out infinite; 
  }
  @keyframes gradientShift { 
    0%, 100% { background-position: 0% 50%; } 
    50% { background-position: 100% 50%; } 
  }
  .desktop-nav { 
    display: flex; 
    gap: 1.5rem;
    align-items: center;
  }
  .desktop-nav .nav-link, .mobile-nav .mobile-nav-link {
    background: none;
    border: none;
    font-family: inherit;
    color: #c7c7c7;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    font-size: 1rem;
    cursor: pointer;
  }
  .desktop-nav .nav-link {
    position: relative; 
    padding: 0.5rem 0; 
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .desktop-nav .nav-link:hover, .mobile-nav .mobile-nav-link:hover { 
    color: #ffffff; 
  }
  .desktop-nav .nav-link.active { 
    color: #60a5fa; 
  }
  .desktop-nav .nav-link::after { 
    content: ''; 
    position: absolute; 
    bottom: 0; 
    left: 0; 
    width: 0; 
    height: 2px; 
    background: linear-gradient(90deg, #60a5fa, #a7c8ff); 
    transition: width 0.3s ease; 
  }
  .desktop-nav .nav-link:hover::after, .desktop-nav .nav-link.active::after { 
    width: 100%; 
  }
  .desktop-nav .lang-switcher:hover::after,
  .desktop-nav .thoughts-link::after {
    background: linear-gradient(90deg, #a78bfa, #60a5fa);
  }

  .lang-switcher {
    min-width: 48px;
    justify-content: center;
    background: rgba(255,255,255,0.03) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 10px;
    padding: 0.35rem 0.65rem !important;
    transition: all 0.3s ease !important;
  }
  .lang-switcher:hover {
    background: rgba(96, 165, 250, 0.1) !important;
    border-color: rgba(96, 165, 250, 0.3) !important;
    transform: translateY(-2px);
  }
  .lang-switcher::after { display: none !important; }
  .lang-text {
    font-weight: 800;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #a7c8ff;
  }
  .lang-switcher:hover .lang-text {
    color: #fff;
  }

  .external-arrow {
    font-size: 0.75rem;
    opacity: 0.6;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .thoughts-link:hover .external-arrow {
    opacity: 1;
    transform: translate(2px, -2px);
  }

  .header-right-group {
    display: none;
    align-items: center;
    gap: 0.75rem;
  }
  .mobile-lang-switcher {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 0.35rem 0.65rem;
    cursor: pointer;
    font-weight: 800;
    font-size: 0.75rem;
    letter-spacing: 1px;
    color: #a7c8ff;
    font-family: inherit;
    transition: all 0.3s ease;
  }
  .mobile-lang-switcher:hover {
    background: rgba(96, 165, 250, 0.1);
    border-color: rgba(96, 165, 250, 0.3);
    color: #fff;
  }

  .mobile-menu-btn { 
    display: none; 
    flex-direction: column; 
    gap: 4px; 
    background: none; 
    border: none; 
    cursor: pointer; 
    padding: 0.5rem; 
  }
  .hamburger { 
    width: 25px; 
    height: 3px; 
    background: #ffffff; 
    transition: all 0.3s ease; 
    border-radius: 2px; 
  }
  .hamburger.active:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
  .hamburger.active:nth-child(2) { opacity: 0; }
  .hamburger.active:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
  .mobile-nav { 
    position: absolute; 
    top: 100%; 
    left: 0; 
    right: 0; 
    background: rgba(0, 0, 0, 0.95); 
    backdrop-filter: blur(20px); 
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
    display: flex; 
    flex-direction: column; 
    padding: 0 2rem; 
  }
  .mobile-nav .mobile-nav-link {
    padding: 1rem 0; 
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    text-align: left;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .mobile-nav .mobile-nav-link:last-child { border-bottom: none; }

  .mobile-lang-row {
    justify-content: space-between !important;
    background: rgba(96, 165, 250, 0.05);
    margin: 0.75rem -0.5rem;
    padding: 1rem 0.5rem !important;
    border-radius: 10px;
    border: 1px solid rgba(96, 165, 250, 0.15) !important;
    font-weight: 600;
    color: #a7c8ff !important;
  }
  .mobile-lang-row .hint {
    font-size: 0.75rem;
    opacity: 0.5;
    font-weight: 400;
    margin-left: auto;
  }

  .thoughts-link-mobile {
    color: #c4b5fd !important;
    font-style: italic;
  }
  .thoughts-link-mobile:hover {
    color: #ddd6fe !important;
  }
  
  @media (max-width: 767px) { 
    .header-content {
      padding-left: 1.5rem; 
      padding-right: 1.5rem;
    } 
    .desktop-nav { 
      display: none; 
    }
    .header-right-group {
      display: flex;
    }
    .mobile-menu-btn { 
      display: flex; 
    } 
  }
</style>
