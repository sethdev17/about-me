<!-- Calea: src/routes/+layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { language, currentSection } from '$lib/stores.js';
    import { translations, initLanguage } from '$lib/i18n.js';
    import { scrollToSection } from '$lib/utils.js';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    
    let currentLang = 'ro';
    let t = translations.ro;

    language.subscribe(newLang => {
      currentLang = newLang;
      t = translations[newLang] || translations.ro;
      if (browser && document.documentElement) {
        document.documentElement.setAttribute('lang', newLang);
      }
    });

    onMount(() => {
      initLanguage();
    });
</script>

<svelte:head>
    <link rel="icon" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" media="print" onload={(e) => (e.currentTarget.media = 'all')}>
</svelte:head>

<div class="page-wrapper">
    <Header 
      t={t}
      currentSection={$currentSection} 
      scrollToSection={scrollToSection}
    />
    
    <main>
        <slot />
    </main>
    
    <Footer 
      t={t}
      currentLang={currentLang}
    />
</div>

<style>
    .page-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    main {
        flex-grow: 1;
    }
</style>