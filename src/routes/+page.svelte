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
      showScrollTop = window.scrollY > 300;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.offsetHeight;
      if (windowHeight + scrollPosition >= pageHeight - 50) {
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

    setTimeout(() => {
      handleScroll();
      setupIntersectionObserver();
    }, 100);

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
  <meta property="og:title" content={t.title}>
  <meta property="og:description" content={t.metaDescription}>
  <meta property="og:type" content="website">
  <meta property="og:url" content={siteUrl}>
  <meta property="og:image" content={socialImage}>
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Portofoliu SethDev">
  <meta name="theme-color" content="#1d4ed8">

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-2CZ9SFQ8JK"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2CZ9SFQ8JK');
  </script>
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
  <span class="arrow"></span>
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

  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 8rem 1rem 4rem;
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
    background-image: radial-gradient(circle, rgba(29, 78, 216, 0.25) 0, rgba(0, 0, 0, 0) 55%);
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
    box-shadow:
      0 0 15px 4px #a7c8ff,
      0 0 25px 10px #60a5fa,
      0 0 50px 20px rgba(29, 78, 216, 0.5);
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

  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 45px;
    height: 45px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scroll-to-top .arrow {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    transform: rotate(45deg);
    transition: all 250ms ease-in-out;
    top: 5px;
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

  .scroll-to-top:hover .arrow {
    border-color: #f0f0f0;
    border-width: 4px;
  }

  @media (max-width: 767px) {
    .scroll-to-top {
      bottom: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
    }

    .container {
      padding: 5rem 1.5rem 2.5rem;
    }

    .projects-section h2 {
      font-size: 1.05rem;
      margin-bottom: 1.2rem;
      text-align: center;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .container::before {
      width: 350px;
      height: 350px;
    }
  }
</style>