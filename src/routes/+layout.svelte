<!-- Calea: src/routes/+layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { language } from '$lib/stores.js';
    import { translations, initLanguage } from '$lib/i18n.js';
    import { onMount } from 'svelte';
    
    export let data;
    
    let currentLang = 'ro';
    let t = translations.ro;

    // Subscribe to language changes
    language.subscribe(newLang => {
      currentLang = newLang;
      t = translations[newLang] || translations.ro;
    });

    onMount(() => {
      initLanguage();
    });
</script>

<svelte:head>
    <link rel="icon" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="page-wrapper">
    <!-- Pasăm fiecare prop explicit. Asta rezolvă problema! -->
    <Header 
      t={t}
      currentSection={data.currentSection} 
      scrollToSection={data.scrollToSection}
    />
    
    <main>
        <slot />
    </main>
    
    <!-- La fel și aici, pasăm props explicit. -->
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