<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  export let t = {};

  $: onHomePage = $page.url.pathname === '/';

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
    <div class="footer-section footer-logo-section">
      <a href="/" class="footer-logo">
        <span class="logo-text">SethDev</span>
      </a>
      {#if $page.url.pathname.startsWith('/gânduri')}
        <a href="/" class="footer-page-link">{t?.footerHome || 'Acasă'}</a>
      {:else}
        <a href="/gânduri" class="footer-page-link">{t?.footerThoughts || 'Gândurile mele'}</a>
      {/if}
    </div>

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
          <button class="copy-email-button" on:click={copyEmail} aria-label="{t?.footerEmailCopy || 'Copiaza adresa de email'}" type="button">
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

    <div class="footer-section footer-bottom">
      <div class="footer-bottom-content">
        <p class="footer-rights">{t?.footerRights || `© ${new Date().getFullYear()} SethDev. Toate drepturile rezervate.`}</p>
      </div>
    </div>
  </div>
</footer>

<style>
  :global(body) {
    margin: 0;
    font-family: system-ui, sans-serif;
  }

  .main-footer {
    background: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem 1rem 2rem;
    margin-top: auto;
    position: relative;
    z-index: 100;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
    align-items: flex-start;
  }

  .footer-section h3 {
    color: #fff;
    font-size: 1.25rem;
    margin: 0 0 1.5rem 0;
    font-weight: 600;
  }

  .footer-logo-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-logo {
    text-decoration: none;
  }

  .logo-text {
    font-size: 1.8rem;
    background: linear-gradient(90deg, #ffffff 0%, #a7c8ff 50%, #dbeafe 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .footer-page-link {
    color: #888;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .footer-page-link:hover {
    color: #fff;
  }

  .footer-contact-section {
    text-align: center;
  }

  .social-links-footer {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;
  }

  .social-links-footer a,
  .social-links-footer button.copy-email-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: background-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
    font-family: inherit;
  }

  .social-links-footer a:hover,
  .social-links-footer button.copy-email-button:hover {
    background: rgba(96, 165, 250, 0.2);
    opacity: 1;
    transform: translateY(-2px);
  }

  .social-links-footer img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(1);
  }

  .copy-email-button .copied-text {
    color: #a7c8ff;
    font-size: 0.6rem;
    font-weight: 700;
    white-space: nowrap;
    animation: fadeIn 0.3s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .footer-bottom {
    justify-self: end;
  }

  .footer-bottom-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
  }

  .footer-rights {
    color: #9a9a9a;
    font-size: 0.9rem;
    margin: 0 1rem;
    text-align: right;
    white-space: nowrap;
  }



  @media (max-width: 767px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2.5rem;
      padding: 0 1rem;
    }

    .footer-logo-section,
    .footer-contact-section,
    .footer-bottom,
    .footer-bottom-content {
      align-items: center;
      justify-self: center;
    }

    .footer-rights {
      text-align: center;
    }

    .footer-contact-section {
      grid-row: 2;
    }
  }
</style>
