<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  export let t = {};
  export let currentLang = 'ro';

  let currentYear = new Date().getFullYear();
  $: formattedCopyright = t?.footerRights 
    ? t.footerRights.replace('{year}', currentYear)
    : `© 2025-${currentYear} SethDev. Toate drepturile rezervate.`;

  let isTouchDevice = false;
  let emailCopied = false;
  const myEmail = 'gg079331@gmail.com';

  function copyEmail() {
    navigator.clipboard.writeText(myEmail).then(() => {
      emailCopied = true;
      setTimeout(() => { emailCopied = false; }, 2500);
    });
  }

  onMount(() => {
    isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });
</script>

<footer class="main-footer" id="contact">
  <div class="footer-content">
    
    <!-- COLOANA 1: LOGO -->
    <div class="footer-section footer-logo-section">
      <a href="/" class="footer-logo">
        <span class="logo-text">SethDev</span>
      </a>
      {#if $page.url.pathname.startsWith('/gânduri')}
        <a href="/" class="footer-page-link">
          <span class="arrow">←</span> {t?.footerHome || 'Acasă'}
        </a>
      {:else}
        <a href="/gânduri" class="footer-page-link">
          {t?.footerThoughts || 'Gândurile mele'} <span class="arrow">→</span>
        </a>
      {/if}
    </div>

    <!-- COLOANA 2: CONTACT -->
    <div class="footer-section footer-contact-section">
      <h3>{t?.footerFollow || 'Contact'}</h3>
      <div class="social-links-footer">
        <a href="https://github.com/sethdev17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/images/github.svg" alt="GitHub" />
        </a>
        <a href="https://discord.com/users/602431963688730624" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <img src="/images/discord.svg" alt="Discord" />
        </a>

        {#if isTouchDevice}
          <a href="mailto:{myEmail}" aria-label="{t?.footerEmailSend || 'Trimite un email'}">
            <img src="/images/email.svg" alt="Email Icon" />
          </a>
        {:else}
          <button class="copy-email-button" on:click={copyEmail} type="button">
            {#if emailCopied}
              <span class="copied-text">✓ {t?.footerCopied || 'Copiat!'}</span>
            {:else}
              <img src="/images/email.svg" alt="Email Icon" />
            {/if}
          </button>
        {/if}

        <a href="https://www.instagram.com/19.decembrie_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/images/instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>

    <!-- COLOANA 3: COPYRIGHT -->
    <div class="footer-section footer-bottom">
      <p class="footer-rights">
        {formattedCopyright}
      </p>
    </div>

  </div>
</footer>

<style>
  /* FIX PENTRU SPAȚII ALBE (OVERFLOW) */
  :global(html), :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Împiedică scroll-ul orizontal și spațiile albe */
    width: 100%;
    background-color: #000; /* Fundal negru de siguranță */
  }

  .main-footer {
    background: rgba(8, 8, 12, 0.98);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 4rem 2rem;
    margin-top: auto;
    width: 100%;
    box-sizing: border-box; /* Include padding în lățime */
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .footer-logo-section {
    display: flex;
    flex-direction: column; /* Pune link-ul SUB logo */
    align-items: flex-start; /* Aliniere la stânga pe desktop */
    gap: 0.4rem; /* Spațiu mic între ele */
  }

  /* FIX UNDERLINE LOGO */
  .footer-logo {
    text-decoration: none !important; /* Elimină orice linie sub logo */
    outline: none;
    border: none;
  }

  .logo-text {
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(90deg, #ffffff 0%, #60a5fa 50%, #ffffff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 4s linear infinite;
    text-decoration: none; /* Siguranță extra */
    display: inline-block;
  }

  @keyframes shine {
    to { background-position: 200% center; }
  }

  /* FIX ALINIERE SĂGEATĂ */
  .footer-page-link {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
    display: inline-flex;
    align-items: center; /* Centrează vertical textul cu săgeata */
    gap: 8px;
    transition: all 0.3s ease;
  }

  .arrow {
    font-size: 1.1rem;
    line-height: 0;
    display: inline-block;
    margin-top: -2px; /* Ajustare fină pentru săgeată */
  }

  .footer-page-link:hover {
    color: #60a5fa;
    transform: translateX(5px);
  }

  /* CONTACT SECTION */
  .footer-contact-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  .footer-contact-section h3 {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 0;
  }

  .social-links-footer {
    display: flex;
    gap: 1rem;
  }

  .social-links-footer a, .copy-email-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .social-links-footer a:hover, .copy-email-button:hover {
    background: rgba(96, 165, 250, 0.1);
    border-color: rgba(96, 165, 250, 0.3);
    transform: translateY(-5px) scale(1.1);
  }

  .social-links-footer img {
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(0.8);
  }

  /* FIX COPYRIGHT DESKTOP */
  .footer-bottom {
    justify-self: end;
  }

  .footer-rights {
    color: rgba(255, 255, 255, 0.25);
    font-size: 0.8rem;
    text-align: right;
    white-space: nowrap; /* Împiedică tăierea/împărțirea pe două rânduri */
    margin: 0;
  }

  @media (max-width: 1024px) {
    .footer-rights {
      white-space: normal; /* Pe tablete/ecrane mici îl lăsăm să curgă */
      max-width: 200px;
    }
  }

  /* RESPONSIVITATE MOBIL */
  @media (max-width: 767px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 3rem;
      justify-items: center;
    }

    .footer-section {
      justify-self: center;
      text-align: center;
    }

    .footer-logo-section {
      align-items: center;
    }

    .footer-rights {
      text-align: center;
      white-space: normal;
      max-width: none;
    }

    .footer-bottom {
      justify-self: center;
    }
    
  }
</style>