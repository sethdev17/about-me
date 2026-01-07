<!-- Calea: src/lib/components/Header.svelte -->
<script>
    import { onMount, onDestroy } from 'svelte';
    import { page } from '$app/stores';
    import { slide } from 'svelte/transition';

    export let t = {};
    export let scrollToSection = (id) => { window.location.href = `/#${id}` };
    export let currentSection = '';

    $: onHomePage = $page.url.pathname === '/';

    let isMenuOpen = false;
    let isScrolled = false;
    let mobileNav;
    let menuBtn;

    function handleClickOutside(e) {
      if (mobileNav && !mobileNav.contains(e.target) && menuBtn && !menuBtn.contains(e.target)) {
        isMenuOpen = false;
      }
    }
    
    // Suprascriem funcția `scrollToSection` pentru a include închiderea meniului
    const _scrollToSection = scrollToSection; // Salvăm funcția originală primită ca prop
    scrollToSection = (sectionId) => {
        _scrollToSection(sectionId); // Apelăm funcția originală
        isMenuOpen = false; // **MODIFICAREA CHEIE: închidem meniul**
    };
    
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
                <button class="nav-link" class:active={currentSection === 'about'} on:click={() => scrollToSection('about')}>{t.navAbout || 'Despre'}</button>
                <button class="nav-link" class:active={currentSection === 'projects'} on:click={() => scrollToSection('projects')}>{t.navProjects || 'Proiecte'}</button>
                <button class="nav-link" class:active={currentSection === 'anime'} on:click={() => scrollToSection('anime')}>{t.navAnime || 'Anime'}</button>
                <button class="nav-link" class:active={currentSection === 'contact'} on:click={() => scrollToSection('contact')}>{t.navContact || 'Contact'}</button>
            </nav>
                <button bind:this={menuBtn} class="mobile-menu-btn" on:click={() => isMenuOpen = !isMenuOpen} aria-label="Toggle Menu">
                <div class="hamburger" class:active={isMenuOpen}></div>
                <div class="hamburger" class:active={isMenuOpen}></div>
                <div class="hamburger" class:active={isMenuOpen}></div>
            </button>
        {/if}
    </div>

    {#if isMenuOpen && onHomePage}
        <nav bind:this={mobileNav} class="mobile-nav" transition:slide={{ duration: 200 }}>
            <button class="mobile-nav-link" on:click={() => scrollToSection('about')}>{t.navAbout || 'Despre'}</button>
            <button class="mobile-nav-link" on:click={() => scrollToSection('projects')}>{t.navProjects || 'Proiecte'}</button>
            <button class="mobile-nav-link" on:click={() => scrollToSection('anime')}>{t.navAnime || 'Anime'}</button>
            <button class="mobile-nav-link" on:click={() => scrollToSection('contact')}>{t.navContact || 'Contact'}</button>
        </nav>
    {/if}
</header>

<style>
  /* Am reformatizat pentru claritate și am grupat regulile */
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
    color: transparent; /* A fost înlocuit -webkit-text-fill-color */
    animation: gradientShift 3s ease-in-out infinite; 
  }
  @keyframes gradientShift { 
    0%, 100% { background-position: 0% 50%; } 
    50% { background-position: 100% 50%; } 
  }
  .desktop-nav { 
    display: flex; 
    gap: 2rem; 
  }
  .desktop-nav .nav-link, .mobile-nav .mobile-nav-link { /* Regulă comună */
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
  }
  .mobile-nav .mobile-nav-link:last-child { border-bottom: none; }
  
  @media (max-width: 767px) { 
    .header-content {
      padding-left: 1.5rem; 
      padding-right: 1.5rem;
    } 
    .desktop-nav { 
      display: none; 
    } 
    .mobile-menu-btn { 
      display: flex; 
    } 
  }
</style>