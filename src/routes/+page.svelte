<script>
  import { onMount, onDestroy } from 'svelte';
  import { slide, fade } from 'svelte/transition';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  export let data;

  // ===================================================================
  // CONFIGURARE SIMPLIFICATĂ
  // ===================================================================
  const siteUrl = "https://sethdev.pages.dev";
  const socialImage = `${siteUrl}/social-preview.png`;
  // ===================================================================

  // ===================================================================
  // NAVIGARE ȘI UI STATE
  // ===================================================================
  let isMenuOpen = false;
  let isScrolled = false;
  let currentSection = 'about';
  let showScrollTop = false;
  let observer;

  // Funcții pentru navigare
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  }

  // handleScroll gestionează EXTREMELE (sus și jos)
  function handleScroll() {
    isScrolled = window.scrollY > 50;
    showScrollTop = window.scrollY > 300;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const pageHeight = document.body.offsetHeight;

    // Condiția 1: Suntem la finalul paginii. Forțăm 'contact'.
    if (windowHeight + scrollPosition >= pageHeight - 50) {
      if (currentSection !== 'contact') currentSection = 'contact';
    } 
    // Condiția 2: Suntem la începutul paginii. Forțăm 'about'.
    else if (scrollPosition < 250) {
      if (currentSection !== 'about') currentSection = 'about';
    }
    // Pentru orice alt caz, încercăm să ghidăm selecția pe baza poziției
    // elementelor în viewport (centru). Acest fallback previne saltul
    // peste secțiunea 'anime' când urcăm rapid din footer.
    else {
      updateCurrentSectionByViewportCenter();
    }
  }

  // Fallback robust: alege secțiunea al cărei centru este cel mai aproape de
  // centrul viewport-ului. Include toate secțiunile principale pentru a evita
  // salturile când IntersectionObserver nu a încă actualizat starea.
  function updateCurrentSectionByViewportCenter() {
    try {
      const sections = ['about', 'projects', 'anime', 'contact'];
      const viewportCenter = window.innerHeight / 2;
      let best = { id: currentSection, dist: Infinity };

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);
        if (dist < best.dist) best = { id, dist };
      });

      if (best.id && best.id !== currentSection) {
        currentSection = best.id;
      }
    } catch (e) {
      // Non-fatal: if anything goes wrong, leave currentSection as-is.
      console.warn('updateCurrentSectionByViewportCenter error', e);
    }
  }

  // Scroll to top function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // IntersectionObserver gestionează secțiunile din MIJLOC
  function setupIntersectionObserver() {
    const sectionsToObserve = ['projects', 'anime'];

    const options = {
      // MODIFICAREA CHEIE: O zonă de activare mult mai mare.
      // Se activează când o secțiune intră în zona vizibilă dintre 150px de sus și 25% de jos.
      // Asta elimină "zonele moarte" la scroll invers.
      rootMargin: '-150px 0px -25% 0px',
      threshold: 0
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Activăm secțiunea DOAR dacă intră în zona de vizibilitate
        if (entry.isIntersecting) {
          // Verificăm să nu suprascriem regulile din handleScroll
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const pageHeight = document.body.offsetHeight;
          if (scrollPosition >= 250 && windowHeight + scrollPosition < pageHeight - 50) {
             currentSection = entry.target.id;
          }
        }
      });
    }, options);

    sectionsToObserve.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
  }

  // Close menu when clicking outside
  function handleClickOutside(event) {
    if (isMenuOpen && !event.target.closest('.mobile-menu-btn') && !event.target.closest('.mobile-nav')) {
      closeMenu();
    }
  }

  const translations = {
    ro: {
      title: 'SethDev | Despre Mine',
      metaDescription: 'Află atât despre mine cât și despre portofoliul meu.',
      ageText: '19 Ani',
      bio: `
        <p>Salut! Sunt un dezvoltator la început de drum în vârstă de 19 ani, captivat de procesul de a transforma idei creative și unice la realitate prin intermediul liniilor de cod. Poate te întrebi, oare ce m-a făcut să mă captiveze acest domeniu?</p>
        <p>Păi totul a început anul trecut, în 2024, pe Discord, când am început să mă intereseze cum sunt făcuți boții de pe această platformă. După ce am aflat prin ce mod sunt făcuți, cum funcționează și cum îi aduci la viață, m-am apucat și eu să-mi fac unul, numit <span style="color: #fff88b">Saber</span>, care a împlinit deja mai mult de un an.</p>
        <p>Voiam să experimentez cât mai multe lucruri și să văd dacă pot să-i introduc multiple comenzi diferite, și a funcționat. După ce nu am mai avut idei de comenzi, m-am apucat să îi inventez minigame-uri să văd dacă chiar va ieși ceva interesant și chiar mi-a plăcut rezultatul.</p>
        <p>Într-adevăr, la început nu prea înțelegeam multe lucruri și nu știam să înțeleg și să citesc erorile, dar prin repetiție, m-am obișnuit. După aproximativ 10 luni de lucrat numai cu botul, m-am gândit că ar trebui să mă interesez și de alte lucruri cum ar fi web-development, deci de prin aprilie 2025, tot încerc să învăț și să înțeleg cât mai bine JavaScript, CSS și HTML.</p>
        <p>Deci doar simpla idee că pot crea orice îmi trece prin minte, gratis doar prin acumularea de experiență și cunoștințe m-a făcut să mă pasioneze acest domeniu. E adevărat că uneori toate aceste lucruri pot devenii obositoare la un moment dat, dar asta numai dacă nu-ți impui limite sănătoase să te poți relaxa, dacă ceva chiar îți place cu adevărat, nu renunți așa ușor, chiar de este greu. Renunți numai dacă ști clar că acel lucru nu este pentru tine.</p>
        <p>De asemenea pe lângă toate aceste lucruri, când nu sunt prins în lumea programării, administrez o comunitate mică pentru fanii de anime pe <a href="https://discord.com/invite/7bkkg9a5ee" target="_blank" rel="noopener noreferrer" class="discord-link">Discord</a>.</p>
      `,
      learningTitle: 'Limbajele pe care le învăț în prezent:',
      projectsTitle: 'Proiectele mele:',
      animeBio: `Că tot am menționat de anime-uri, am vizionat și încă vizionez destul de multe. Îmi plac mai mult decât filmele normale deoarece îmi transmit mult mai multe sentimente și experiențe. Ele mă pot face foarte ușor să râd, să plâng sau să măască să spun "wow, ce poveste nemaipomenită a avut această serie". Dacă sunteți interesați, puteți să-mi vizitați lista pe <a href="https://myanimelist.net/profile/Felix17" target="_blank" rel="noopener noreferrer" aria-label="Profilul meu MyAnimeList"><img src="/images/mal-icon.svg" alt="MyAnimeList Icon" class="mal-icon"></a>.`,
      topAnimeTitle: 'Top anime-uri preferate:',
      showMore: 'Vezi mai mult >>',
      showLess: '<< Vezi mai puțin',
      navAbout: 'Despre Mine',
      navProjects: 'Proiecte',
      navAnime: 'Lista Anime',
      navContact: 'Contact',
      footerRights: '© 2025 SethDev. Toate drepturile rezervate.',
      footerFollow: 'Contact'
    },
    en: {
      title: 'SethDev | About Me',
      metaDescription: 'Find out about both me and my portfolio.',
      ageText: '19 Years',
      bio: `
        <p>Hey! I'm a 19-year-old developer at the start of my journey, captivated by the process of turning creative and unique ideas into reality through lines of code. You might wonder, what made this field captivate me?</p>
        <p>Well, it all started last year, in 2024, on Discord, when I became interested in how bots on this platform are made. After finding out how they are created, how they work, and how to bring them to life, I started making my own, named <span style="color: #fff88b">Saber</span>, which has already been more than a year old.</p>
        <p>I wanted to experiment with as many things as possible and see if I could introduce multiple different commands to it, and it worked. After I no longer had ideas for commands, I started inventing minigames for it to see if something interesting would really come out, and I really liked the result.</p>
        <p>Indeed, at the beginning I didn't understand many things and didn't know how to understand and read errors, but through repetition, I got used to it. After about 10 months of working only with the bot, I thought I should get interested in other things like web development, so since April 2025, I'm still trying to learn and understand JavaScript, CSS, and HTML as best as possible.</p>
        <p>So just the simple idea that I can create anything that comes to my mind, for free just by accumulating experience and knowledge, made me passionate about this field. It's true that sometimes all these things can become tiring at some point, but only if you don't impose healthy limits to relax; if you really like something, you don't give up so easily, even if it's hard. You only give up if you know clearly that that thing is not for you.</p>
        <p>Also, besides all these things, when I'm not caught up in the world of programming, I manage a small community for anime fans on <a href="https://discord.com/invite/7bkkg9a5ee" target="_blank" rel="noopener noreferrer" class="discord-link">Discord</a>.</p>
      `,
      learningTitle: 'Languages I am currently learning:',
      projectsTitle: 'My Projects:',
      animeBio: `Since I mentioned anime, I've watched and still watch quite a few. I like them more than regular movies because they convey much more feelings and experiences to me. They can easily make me laugh, cry, or make me say "wow, what an amazing story this series had." If you're interested, you can visit my list on <a href="https://myanimelist.net/profile/Felix17" target="_blank" rel="noopener noreferrer" aria-label="MyAnimeList Profile"><img src="/images/mal-icon.svg" alt="MyAnimeList Icon" class="mal-icon"></a>.`,
      topAnimeTitle: 'Top favorite anime:',
      showMore: 'Show more >>',
      showLess: '<< Show less',
      navAbout: 'About Me',
      navProjects: 'Projects',
      navAnime: 'Anime List',
      navContact: 'Contact',
      footerRights: '© 2025 SethDev. All rights reserved.',
      footerFollow: 'Contact'
    }
  };

  let lang = 'ro';
  let t = translations[lang];
  let isTouchDevice = false;

  function setLanguage(newLang) {
    if (translations[newLang]) {
      lang = newLang;
      t = translations[lang];
    }
  }

  const languages = [
    { name: 'JavaScript', color: '#f1e05a', icon: '⚡', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'CSS', color: '#1572b6', icon: '🎨', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'HTML', color: '#e34f26', icon: '📄', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML' }
  ];

  let showAllAnime = false;
  const initialVisibleCount = 15;

  let emailCopied = false;
  const myEmail = 'gg079331@gmail.com';

  function copyEmail() {
    navigator.clipboard.writeText(myEmail).then(() => {
      emailCopied = true;
      setTimeout(() => { emailCopied = false; }, 2500);
    });
  }

  let animationState = 0;
  let animationTimeout;

  const animationSequence = () => {
    animationState = 1;
    animationTimeout = setTimeout(() => {
      animationState = 0;
      animationTimeout = setTimeout(() => {
        animationState = 2;
        animationTimeout = setTimeout(() => {
          animationState = 0;
          animationTimeout = setTimeout(animationSequence, 2500);
        }, 2000);
      }, 2500);
    }, 2000);
  };

  onMount(() => {
    const browserLang = navigator.language.split('-')[0];
    setLanguage(browserLang);
    isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    animationTimeout = setTimeout(animationSequence, 3000);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    
    setTimeout(() => {
        handleScroll();
        setupIntersectionObserver();
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      if (observer) observer.disconnect();
    };
  });

  onDestroy(() => {
    clearTimeout(animationTimeout);
    if (observer) observer.disconnect();
  });
</script>

<svelte:head>
  <title>{t.title}</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  
  <meta name="description" content={t.metaDescription}>
  <meta name="author" content="SethDev">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href={siteUrl}>

  <meta property="og:title" content={t.title}>
  <meta property="og:description" content={t.metaDescription}>
  <meta property="og:type" content="website">
  <meta property="og:url" content={siteUrl}>
  
  <meta property="og:image" content={socialImage}>
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Portofoliu SethDev">
  
  <meta name="theme-color" content="#1d4ed8">
</svelte:head>

<!-- HEADER -->
<header class="main-header" class:scrolled={isScrolled}>
  <div class="header-content">
    <div class="logo">
      <span class="logo-text">SethDev</span>
    </div>
    
    <nav class="desktop-nav">
      <a href="#about" class="nav-link" class:active={currentSection === 'about'} on:click|preventDefault={() => scrollToSection('about')}>
        {t.navAbout}
      </a>
      <a href="#projects" class="nav-link" class:active={currentSection === 'projects'} on:click|preventDefault={() => scrollToSection('projects')}>
        {t.navProjects}
      </a>
      <a href="#anime" class="nav-link" class:active={currentSection === 'anime'} on:click|preventDefault={() => scrollToSection('anime')}>
        {t.navAnime}
      </a>
      <a href="#contact" class="nav-link" class:active={currentSection === 'contact'} on:click|preventDefault={() => scrollToSection('contact')}>
        {t.navContact}
      </a>
    </nav>

    <button class="mobile-menu-btn" on:click={toggleMenu} aria-label="Toggle menu">
      <span class="hamburger" class:active={isMenuOpen}></span>
      <span class="hamburger" class:active={isMenuOpen}></span>
      <span class="hamburger" class:active={isMenuOpen}></span>
    </button>
  </div>

  <nav class="mobile-nav" class:open={isMenuOpen} transition:slide={{ duration: 300 }}>
    <a href="#about" class="mobile-nav-link" on:click={() => scrollToSection('about')}>
      {t.navAbout}
    </a>
    <a href="#projects" class="mobile-nav-link" on:click={() => scrollToSection('projects')}>
      {t.navProjects}
    </a>
    <a href="#anime" class="mobile-nav-link" on:click={() => scrollToSection('anime')}>
      {t.navAnime}
    </a>
    <a href="#contact" class="mobile-nav-link" on:click={() => scrollToSection('contact')}>
      {t.navContact}
    </a>
  </nav>
</header>

<div class="container">
  <div class="background-effects"></div>

  <main id="about" class="profile-card">
    <div class="main-content">
      <div class="pfp-container">
        <img
          src="/images/profil.jpg"
          alt="Poza mea de profil"
          class="profile-picture"
          class:slide-left={animationState !== 0}
        >
        <div class="animated-content-wrapper">
          <div class="animated-text" class:visible={animationState === 1} data-text="SethDev">
            SethDev
          </div>
          <div class="animated-text" class:visible={animationState === 2} data-text={t.ageText}>
            {t.ageText}
          </div>
          <div class="fire-trail" class:active={animationState !== 0} key={animationState}></div>
        </div>
      </div>
      <div class="text-block">
        {@html t.bio}
      </div>
    </div>

    <div class="social-links">
      <a href="https://github.com/sethdev17" target="_blank" rel="noopener noreferrer" aria-label="Profilul meu de GitHub">
        <img src="/images/github.svg" alt="GitHub Icon">
      </a>
      <a href="https://discord.com/users/602431963688730624" target="_blank" rel="noopener noreferrer" aria-label="Contacteaza-ma pe Discord">
        <img src="/images/discord.svg" alt="Discord Icon">
      </a>
      {#if isTouchDevice}
        <a href="mailto:{myEmail}" aria-label="Trimite un email">
          <img src="/images/email.svg" alt="Email Icon">
        </a>
      {:else}
        <button on:click={copyEmail} aria-label="Copiaza adresa de email">
          {#if emailCopied}
            <span>✓ Copiat!</span>
          {:else}
            <img src="/images/email.svg" alt="Email Icon">
          {/if}
        </button>
      {/if}
      <a href="https://www.instagram.com/19.decembrie_" target="_blank" rel="noopener noreferrer" aria-label="Profilul meu de Instagram">
        <img src="/images/instagram.svg" alt="Instagram Icon">
      </a>
    </div>

    <div id="skills" class="languages-section">
      <h2>{t.learningTitle}</h2>
      <div class="languages-grid">
        {#each languages as language}
          <a href={language.docUrl} target="_blank" rel="noopener noreferrer" class="language-link">
            <div class="language-card" style="--glow-color: {language.color}">
              <div class="language-icon">{language.icon}</div>
              <div class="language-info">
                <div class="language-name-row">
                  <div class="language-dot" style="background-color: {language.color}"></div>
                  <h3>{language.name}</h3>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>

    {#if data.projects && data.projects.length > 0}
      <div id="projects" class="projects-section">
        <h2>{t.projectsTitle}</h2>
        <div class="projects-grid">
          {#each data.projects as project (project.id)}
            <ProjectCard {project} {lang} />
          {/each}
        </div>
      </div>
    {/if}

    <div class="anime-section">
      <p>{@html t.animeBio}</p>
    </div>

    <div id="anime" class="top-anime-section">
      <h2>{t.topAnimeTitle}</h2>
      <ol class="top-anime-list">
        {#each data.anime.slice(0, initialVisibleCount) as anime}
          <li>
            <a href={anime.url} target="_blank" rel="noopener noreferrer">
              {anime.title}
              {#if anime.imageUrl && !isTouchDevice}
                <img src={anime.imageUrl} alt="Coperta {anime.title}" class="anime-thumbnail" />
              {/if}
            </a>
          </li>
        {/each}

        {#if data.anime.length > initialVisibleCount}
          {#if showAllAnime}
            {#each data.anime.slice(initialVisibleCount) as anime (anime.title)}
              <li transition:slide|local>
                <a href={anime.url} target="_blank" rel="noopener noreferrer">
                  {anime.title}
                  {#if anime.imageUrl && !isTouchDevice}
                    <img src={anime.imageUrl} alt="Coperta {anime.title}" class="anime-thumbnail" />
                  {/if}
                </a>
              </li>
            {/each}
          {/if}

          <button class="toggle-list-button" on:click={() => showAllAnime = !showAllAnime}>
            {showAllAnime ? t.showLess : t.showMore}
          </button>
        {/if}
      </ol>
    </div>
  </main>
</div>

<!-- FOOTER -->
<footer id="contact" class="main-footer">
  <div class="footer-content">
    <div class="footer-section footer-logo">
      <div class="logo">
        <span class="logo-text">SethDev</span>
      </div>
    </div>
    
    <div class="footer-section">
      <h3>{t.footerFollow}</h3>
      <div class="social-links-footer">
        <a href="https://github.com/sethdev17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/images/github.svg" alt="GitHub">
        </a>
        <a href="https://discord.com/users/602431963688730624" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <img src="/images/discord.svg" alt="Discord">
        </a>
        <a href="mailto:gg079331@gmail.com" aria-label="Email">
          <img src="/images/email.svg" alt="Email">
        </a>
        <a href="https://www.instagram.com/19.decembrie_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/images/instagram.svg" alt="Instagram">
        </a>
        <a href="https://myanimelist.net/profile/Felix17" target="_blank" rel="noopener noreferrer" aria-label="MyAnimeList">
          <img src="/images/mal-icon.svg" alt="MyAnimeList">
        </a>
      </div>
    </div>
    
    <div class="footer-section footer-bottom">
      <div class="footer-bottom-content">
        <p class="footer-rights">{t.footerRights}</p>
        <div class="language-switcher">
          <button class="lang-btn" class:active={lang === 'ro'} on:click={() => setLanguage('ro')}>RO</button>
          <button class="lang-btn" class:active={lang === 'en'} on:click={() => setLanguage('en')}>EN</button>
        </div>
      </div>
    </div>
  </div>
</footer>

<!-- Scroll to Top Button -->
<button class="scroll-to-top" class:visible={showScrollTop} on:click={scrollToTop} aria-label="Scroll to top">
  ↑
</button>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #f0f0f0;
    background-color: #000;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  .main-header.scrolled {
    background: rgba(0, 0, 0, 0.95);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  .header-content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    padding: 1rem 2rem 1rem 0.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .logo-text {
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ffffff 0%, #a7c8ff 50%, #dbeafe 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease-in-out infinite;
  }
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  .desktop-nav {
    display: flex;
    gap: 2rem;
    justify-self: center;
  }
  .nav-link {
    color: #c7c7c7;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
  }
  .nav-link:hover {
    color: #ffffff;
  }
  .nav-link.active {
    color: #60a5fa;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #60a5fa, #a7c8ff);
    transition: width 0.3s ease;
  }
  .nav-link:hover::after,
  .nav-link.active::after {
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
    justify-self: end;
  }
  .hamburger {
    width: 25px;
    height: 3px;
    background: #ffffff;
    transition: all 0.3s ease;
    border-radius: 2px;
  }
  .hamburger.active:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  .hamburger.active:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
  .mobile-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: none;
    flex-direction: column;
    padding: 1rem 2rem;
  }
  .mobile-nav.open {
    display: flex;
  }
  .mobile-nav-link {
    color: #c7c7c7;
    text-decoration: none;
    font-weight: 500;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: color 0.3s ease;
  }
  .mobile-nav-link:hover {
    color: #60a5fa;
  }
  .mobile-nav-link:last-child {
    border-bottom: none;
  }
  .main-footer {
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem 0 1rem;
    margin-top: 2rem;
    position: relative;
    z-index: 100;
  }
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2rem;
    align-items: center;
    position: relative;
    z-index: 10;
  }
  .footer-section h3 {
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .social-links-footer {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .social-links-footer a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s ease;
    opacity: 0.7;
    pointer-events: auto;
    z-index: 10;
    position: relative;
    text-decoration: none;
  }
  .social-links-footer a:hover {
    background: rgba(96, 165, 250, 0.2);
    opacity: 1;
    transform: translateY(-2px);
  }
  .social-links-footer img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(1);
  }
  .footer-logo {
    display: flex;
    justify-content: flex-start;
  }
  .footer-logo .logo-text {
    font-size: 1.8rem;
    background: linear-gradient(90deg, #ffffff 0%, #a7c8ff 50%, #dbeafe 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease-in-out infinite;
  }
  .footer-bottom {
    display: flex;
    justify-content: flex-end;
  }
  .footer-bottom-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
    text-align: right;
  }
  .footer-rights {
    color: #9a9a9a;
    font-size: 0.9rem;
    margin: 0;
  }
  .language-switcher {
    display: flex;
    gap: 0.5rem;
  }
  .lang-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #c7c7c7;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    pointer-events: auto;
    z-index: 10;
    position: relative;
  }
  .lang-btn:hover {
    background: rgba(96, 165, 250, 0.2);
    color: #ffffff;
  }
  .lang-btn.active {
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    color: #ffffff;
    border-color: transparent;
  }
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }
  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .scroll-to-top:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 6rem 1rem 4rem;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
  }
  .container::before {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 900px;
    background-image: radial-gradient(circle, rgba(29, 78, 216, .25) 0, rgba(0, 0, 0, 0) 55%);
    transform: translate(-50%, -50%);
    z-index: -2;
  }
  .background-effects {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  .background-effects::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #e0eaff;
    border-radius: 50%;
    box-shadow: 0 0 15px 4px #a7c8ff, 0 0 25px 10px #60a5fa, 0 0 50px 20px rgba(29, 78, 216, .5);
    animation: core-pulse 4s infinite ease-in-out;
  }
  @keyframes core-pulse {
    0%, 100% {
      transform: scale(.9);
      opacity: .8;
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
  .profile-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    max-width: 600px;
    width: 100%;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }
  .pfp-container {
    position: relative;
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile-picture {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 10;
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .profile-picture.slide-left {
    transform: translateX(-160px);
  }
  .animated-content-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .animated-text {
    position: absolute;
    font-size: 1.8rem;
    font-weight: bold;
    white-space: nowrap;
    color: transparent;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  }
  .animated-text.visible {
    opacity: 1;
    transform: translateY(0);
    background: linear-gradient(90deg, #ffffff 0%, #a7c8ff 50%, #dbeafe 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease-in-out infinite;
  }
  .animated-text::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: linear-gradient(90deg, #dbeafe 0%, #3b82f6 50%, #a7c8ff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: blur(10px);
    animation: gradientShift 3s ease-in-out infinite;
  }
  .fire-trail {
    position: absolute;
    bottom: 25%;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #dbeafe, #60a5fa, #dbeafe, transparent);
    box-shadow: 0 0 8px 1px #a7c8ff, 0 0 15px 2px #3b82f6;
    border-radius: 2px;
    transform: scaleX(0);
    opacity: 0;
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .fire-trail.active {
    animation: draw-in 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }
  @keyframes draw-in {
    from {
      transform-origin: left;
      transform: scaleX(0);
      opacity: 0;
    }
    to {
      transform-origin: left;
      transform: scaleX(1);
      opacity: 1;
    }
  }
  .text-block {
    background-color: rgba(25, 25, 30, .5);
    padding: 1.2rem 1.5rem;
    border-radius: 16px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, .15);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .3);
  }
  :global(.text-block p) {
    margin: 0 0 1rem;
    line-height: 1.7;
    font-size: .95rem;
    text-align: left;
  }
  :global(.text-block p:last-child) {
    margin-bottom: 0;
  }
  :global(.discord-link) {
    color: #7289DA;
    font-weight: 600;
    text-decoration: none;
    transition: all .2s ease-in-out;
    border-bottom: 2px solid transparent;
  }
  :global(.discord-link:hover) {
    color: #99aab5;
    border-bottom-color: #99aab5;
  }
  .social-links {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
  }
  .social-links a,
  .social-links button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    transition: transform .3s cubic-bezier(.4, 0, .2, 1);
    background: 0 0;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    border-radius: 50%;
  }
  .social-links a::before,
  .social-links button::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(150, 200, 255, .3) 0, rgba(29, 78, 216, .2) 50%, transparent 70%);
    box-shadow: 0 0 15px rgba(29, 78, 216, .5), inset 0 0 10px rgba(255, 255, 255, .2);
    animation: water-bubble 3s ease-in-out infinite;
    z-index: -1;
  }
  .social-links a::after,
  .social-links button::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid rgba(150, 200, 255, .3);
    animation: ripple 2s ease-out infinite;
    opacity: 0;
    z-index: -2;
  }
  .social-links a img,
  .social-links button img {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
    transition: filter .3s ease-out, transform .3s cubic-bezier(.4, 0, .2, 1);
  }
  .social-links a:hover,
  .social-links button:hover {
    transform: translateY(-3px) scale(1.1);
  }
  .social-links a:hover::before,
  .social-links button:hover::before {
    animation: water-bubble-hover 1.5s cubic-bezier(.4, 0, .2, 1) infinite;
  }
  .social-links a:hover::after,
  .social-links button:hover::after {
    animation: ripple-hover 1.5s ease-out infinite;
    opacity: .5;
  }
  .social-links a:hover img,
  .social-links button:hover img {
    filter: brightness(0) invert(1) drop-shadow(0 0 6px hsla(0, 0%, 100%, .9));
  }
  .social-links button span {
    color: #a7c8ff;
    font-size: .75rem;
    font-weight: 600;
    white-space: nowrap;
  }
  @keyframes water-bubble {
    0%, 100% {
      transform: scale(1) translateY(0);
      opacity: .8;
    }
    50% {
      transform: scale(1.05) translateY(-2px);
      opacity: 1;
    }
  }
  @keyframes water-bubble-hover {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: .9;
    }
  }
  @keyframes ripple {
    0%, 100% {
      transform: scale(1);
      opacity: .3;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  @keyframes ripple-hover {
    0%, 100% {
      transform: scale(1);
      opacity: .5;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
  .languages-section {
    width: 100%;
    max-width: 600px;
  }
  .languages-section h2 {
    text-align: left;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: #f0f0f0;
  }
  .languages-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    justify-content: center;
  }
  .language-link {
    text-decoration: none;
    color: inherit;
  }
  .language-card {
    background-color: rgba(25, 25, 30, .5);
    border: 1px solid rgba(255, 255, 255, .15);
    border-radius: 16px;
    padding: 1.2rem 1rem;
    transition: all .3s ease-in-out;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 140px;
    position: relative;
    overflow: hidden;
  }
  .language-card::after {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 120%, hsla(from var(--glow-color) h s l / .35) 0, transparent 60%);
    opacity: 0;
    transition: opacity .4s ease-out;
  }
  .language-icon,
  .language-info {
    position: relative;
    z-index: 1;
  }
  .language-card:hover {
    transform: translateY(-5px);
    border-color: hsla(from var(--glow-color) h s l / .5);
  }
  .language-card:hover::after {
    opacity: 1;
  }
  .language-icon {
    font-size: 2.2rem;
    margin-bottom: .8rem;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, .2));
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }
  .language-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .language-name-row {
    display: flex;
    align-items: center;
    gap: .6rem;
  }
  .language-info h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #f0f0f0;
    font-weight: 600;
  }
  .language-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, .3);
  }
  .projects-section {
    width: 100%;
    max-width: 600px;
  }
  .projects-section h2 {
    text-align: left;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: #f0f0f0;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .anime-section,
  .top-anime-section {
    width: 100%;
    max-width: 600px;
    background-color: rgba(25, 25, 30, .5);
    padding: 1.2rem 1.8rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, .15);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .3);
  }
  .anime-section p {
    margin: 0;
    line-height: 1.7;
    text-align: left;
    font-size: .95rem;
  }
  :global(.mal-icon) {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin: 0 4px;
    transition: transform .2s ease-out;
    filter: brightness(0) invert(1);
  }
  :global(.mal-icon:hover) {
    transform: scale(1.2);
  }
  .top-anime-section h2 {
    text-align: left;
    margin: 0 0 1.5rem;
    font-size: 1.2rem;
    color: #f0f0f0;
  }
  .top-anime-list {
    list-style: decimal;
    margin: 0;
    padding-left: 1.8rem;
    overflow: visible;
  }
  .top-anime-list li {
    position: relative;
    margin-bottom: .8rem;
    padding-left: .5rem;
  }
  .top-anime-list a {
    color: #c7c7c7;
    text-decoration: none;
    transition: color .2s ease-out;
    font-size: .95rem;
    display: block;
  }
  .top-anime-list a:hover {
    color: #fff;
  }
  .anime-thumbnail {
    position: absolute;
    right: 105%;
    top: 50%;
    transform: translateY(-50%) scale(.8);
    margin-right: 2.4rem;
    width: 120px;
    height: 170px;
    object-fit: cover;
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, .3);
    box-shadow: 0 5px 20px rgba(0, 0, 0, .5);
    opacity: 0;
    visibility: hidden;
    transition: opacity .2s ease-out, transform .2s ease-out, visibility .2s;
    pointer-events: none;
    z-index: 10;
  }
  .top-anime-list li:hover .anime-thumbnail {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) scale(1);
  }
  .toggle-list-button {
    background: 0 0;
    border: none;
    color: #60a5fa;
    cursor: pointer;
    font-size: .9rem;
    font-weight: 600;
    padding: 0;
    margin-top: 1rem;
    transition: color .2s ease-out;
    margin-left: -40px;
  }
  .toggle-list-button:hover {
    color: #a7c8ff;
  }
  @media (max-width: 767px) {
    .header-content {
      padding: 1rem;
      grid-template-columns: auto 1fr auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .desktop-nav {
      display: none;
    }
    .mobile-menu-btn {
      display: flex;
    }
    .mobile-nav {
      display: none;
    }
    .mobile-nav.open {
      display: flex;
    }
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 1.5rem;
    }
    .footer-logo {
      justify-content: center;
    }
    .footer-bottom {
      justify-content: center;
    }
    .footer-bottom-content {
      align-items: center;
      text-align: center;
    }
    .social-links-footer {
      justify-content: center;
    }
    .scroll-to-top {
      bottom: 1rem;
      right: 1rem;
      width: 45px;
      height: 45px;
      font-size: 1.3rem;
    }
    .container {
      padding: 5rem 1.5rem 2.5rem;
    }
    .profile-card {
      gap: 1.8rem;
      max-width: 100%;
    }
    .main-content {
      gap: 1rem;
    }
    .pfp-container {
      width: 80px;
      height: 80px;
    }
    .profile-picture.slide-left {
      transform: translateX(-110px);
    }
    .animated-content-wrapper {
      width: 140px;
    }
    .animated-text {
      font-size: 1.3rem;
    }
    .animated-text::after {
      filter: blur(8px);
    }
    .text-block,
    .anime-section,
    .top-anime-section {
      padding: 1.2rem;
      border-radius: 14px;
    }
    :global(.text-block p),
    :global(.anime-section p) {
      font-size: .875rem;
      line-height: 1.6;
    }
    .top-anime-list li,
    .top-anime-list a {
      font-size: .875rem;
    }
    .top-anime-list li {
      padding-left: .2rem;
      margin-bottom: .5rem;
    }
    .top-anime-list {
      padding-left: 1.4rem;
    }
    .social-links {
      gap: 1.8rem;
    }
    .social-links a,
    .social-links button {
      width: 40px;
      height: 40px;
    }
    .social-links a img,
    .social-links button img {
      width: 22px;
      height: 22px;
    }
    .social-links a::after,
    .social-links button::after {
      width: 50px;
      height: 50px;
    }
    .languages-section h2,
    .top-anime-section h2,
    .projects-section h2 {
      font-size: 1.05rem;
      margin-bottom: 1.2rem;
      text-align: center;
    }
    .languages-grid {
      gap: .8rem;
      justify-content: center;
    }
    .language-card {
      min-width: 100px;
      max-width: 120px;
      padding: .8rem;
    }
    .language-icon {
      font-size: 1.7rem;
    }
    .language-info h3 {
      font-size: .9rem;
    }
    .language-dot {
      width: 8px;
      height: 8px;
    }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .toggle-list-button {
      font-size: .8rem;
      margin-top: .8rem;
      margin-left: -20px;
    }
    .container::before {
      width: 350px;
      height: 350px;
      background-image: radial-gradient(circle, rgba(29, 78, 216, .2) 0, rgba(0, 0, 0, 0) 65%);
    }
    .background-effects::before {
      width: 4px;
      height: 4px;
      box-shadow: 0 0 8px 2px #a7c8ff, 0 0 15px 6px #60a5fa;
    }
    .anime-thumbnail {
      display: none;
    }
  }
</style>