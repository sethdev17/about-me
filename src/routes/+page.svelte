<script>
  import { onMount } from 'svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import Profile from '$lib/components/Profile.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Anime from '$lib/components/Anime.svelte';
  import { language } from '$lib/stores.js';
  import { translations } from '$lib/i18n.js';

  export let data;
  let lang = 'ro';
  let t = translations[lang];

  language.subscribe(newLangValue => {
    if (translations[newLangValue]) {
      lang = newLangValue;
      t = translations[lang];
    }
  });

  let showScrollTop = false;
  let observer;
  const siteUrl = "https://sethdev.pages.dev";
  const socialImage = `${siteUrl}/social-preview.png`;
  let isTouchDevice = false;
  let emailCopied = false;
  const myEmail = 'gg079331@gmail.com';
  let currentSection = 'about';

  function copyEmail() {
    navigator.clipboard.writeText(myEmail).then(() => {
      emailCopied = true;
      setTimeout(() => emailCopied = false, 2500);
    });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    function handleScroll() {
      showScrollTop = window.scrollY > 400;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.offsetHeight;
      
      if (windowHeight + scrollPosition >= pageHeight - 100) {
        if (currentSection !== 'contact') currentSection = 'contact';
      } else if (scrollPosition < 250) {
        if (currentSection !== 'about') currentSection = 'about';
      }
    }

    function setupIntersectionObserver() {
      const sectionsToObserve = ['projects', 'anime'];
      const options = { rootMargin: '-40% 0px -50% 0px' };
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) currentSection = entry.target.id;
        });
      }, options);
      sectionsToObserve.forEach(id => document.getElementById(id) && observer.observe(document.getElementById(id)));
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    setupIntersectionObserver();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
    };
  });
</script>

<svelte:head>
  <title>{t.title}</title>
  <meta name="description" content={t.metaDescription}>
  <link rel="canonical" href={siteUrl}>
</svelte:head>

<div class="container">
  <div class="background-effects"></div>
  <div class="profile-card-container">
    <Profile {t} {isTouchDevice} {myEmail} {copyEmail} {emailCopied} />
    
    <Skills {t} />

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

    <Anime {t} {data} {isTouchDevice} />
  </div>
</div>

<button
  class="scroll-to-top"
  class:visible={showScrollTop}
  on:click={scrollToTop}
  aria-label="Scroll to top"
>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
</button>

<style>
  :global(html) {
    background-color: #000 !important;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #f0f0f0;
    background-color: #000;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  /* Forțează numărul să stea sus la anime */
  :global(.anime-item) {
    display: flex !important;
    align-items: flex-start !important; 
    padding: 10px 0;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 8rem 1rem 4rem;
    position: relative;
    z-index: 1;
    width: 100%;
    box-sizing: border-box;
  }

  .container::before {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 900px;
    background-image: radial-gradient(circle, rgba(29, 78, 216, 0.2) 0, rgba(0, 0, 0, 0) 60%);
    transform: translate(-50%, -50%);
    z-index: -2;
    pointer-events: none;
  }

  .background-effects {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;
  }

  .background-effects::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #e0eaff;
    border-radius: 50%;
    box-shadow: 0 0 15px 4px #a7c8ff, 0 0 25px 10px #60a5fa, 0 0 50px 20px rgba(29, 78, 216, 0.4);
    animation: core-pulse 4s infinite ease-in-out;
  }

  @keyframes core-pulse {
    0%, 100% { transform: scale(0.9); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
  }

  .profile-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    max-width: 600px;
    width: 100%;
  }

  .projects-section { width: 100%; }
  .projects-section h2 { margin-bottom: 2rem; font-size: 1.2rem; color: #f0f0f0; }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2.5rem;
    width: 48px;
    height: 48px;
    background: rgba(20, 20, 25, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #60a5fa;
    border-radius: 14px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  }

  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .scroll-to-top:hover {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(96, 165, 250, 0.4);
    color: #fff;
    transform: translateY(-5px);
  }

  /* --- OPTIMIZĂRI TEXT MOBIL --- */
  @media (max-width: 767px) {
    .container { padding: 4rem 1.25rem 2rem; }
    .profile-card-container { gap: 2rem; }
    .projects-grid { grid-template-columns: 1fr; gap: 1.25rem; }
    
    .scroll-to-top {
      bottom: 1.5rem;
      right: 1.5rem;
      width: 42px;
      height: 42px;
    }

    .container::before { width: 400px; height: 400px; }

    /* MĂRIRE TEXT GLOBALĂ PE MOBIL */
    :global(body) {
      font-size: 17px; /* Crește baza de la 16px */
    }

    .projects-section h2 {
      font-size: 1.3rem; /* Titlu secțiune mai mare */
      text-align: center;
    }
  }
</style>