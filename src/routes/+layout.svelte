<!-- Calea: src/routes/+layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { language } from '$lib/stores.js';
    
    export let data;

    // Translation object - same as in +page.svelte
    const translations = {
      ro: {
        navAbout: 'Despre Mine',
        navProjects: 'Proiecte',
        navAnime: 'Lista Anime',
        navContact: 'Contact',
        footerRights: '© 2025 SethDev. Toate drepturile rezervate.',
        footerFollow: 'Contact',
        footerHome: 'Acasă',
        footerThoughts: 'Gândurile mele',
        footerCopied: 'Copiat!',
        footerEmailSend: 'Trimite un email',
        footerEmailCopy: 'Copiaza adresa de email'
      },
      en: {
        navAbout: 'About Me',
        navProjects: 'Projects',
        navAnime: 'Anime List',
        navContact: 'Contact',
        footerRights: '© 2025 SethDev. All rights reserved.',
        footerFollow: 'Contact',
        footerHome: 'Home',
        footerThoughts: 'My Thoughts',
        footerCopied: 'Copied!',
        footerEmailSend: 'Send an email',
        footerEmailCopy: 'Copy email address'
      }
    };

    let currentLang = 'ro';
    let t = translations.ro;

    // Subscribe to language changes
    language.subscribe(newLang => {
      currentLang = newLang;
      t = translations[newLang] || translations.ro;
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