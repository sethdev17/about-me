<script>
  import { onMount } from 'svelte';
  
  export let t;
  export let isTouchDevice;
  export let myEmail;
  export let copyEmail;
  export let emailCopied;

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
    animationTimeout = setTimeout(animationSequence, 3000);
    return () => clearTimeout(animationTimeout);
  });
</script>

<main id="about" class="profile-card">
  <div class="main-content">
    <div class="pfp-container">
      <img
        src="/images/profil.jpg"
        alt="Poza mea de profil"
        class="profile-picture"
        class:slide-left={animationState !== 0}
      />
      <div class="animated-content-wrapper">
        <div class="animated-text" class:visible={animationState === 1} data-text="SethDev">
          SethDev
        </div>
        <div class="animated-text" class:visible={animationState === 2} data-text={t.ageText}>
          {t.ageText}
        </div>
        <div class="fire-trail" class:active={animationState !== 0}></div>
      </div>
    </div>
    <div class="text-block">
      {@html t.bio}
    </div>
  </div>

  <div class="social-links">
    <a href="https://github.com/sethdev17" target="_blank" rel="noopener noreferrer" aria-label="Profilul meu de GitHub">
      <img src="/images/github.svg" alt="GitHub Icon" />
    </a>
    <a href="https://discord.com/users/602431963688730624" target="_blank" rel="noopener noreferrer" aria-label="Contacteaza-ma pe Discord">
      <img src="/images/discord.svg" alt="Discord Icon" />
    </a>

    {#if isTouchDevice}
      <a href="mailto:{myEmail}" aria-label="Trimite un email">
        <img src="/images/email.svg" alt="Email Icon" />
      </a>
    {:else}
      <button on:click={copyEmail} aria-label="Copiaza adresa de email">
        {#if emailCopied}
          <span>✓ Copiat!</span>
        {:else}
          <img src="/images/email.svg" alt="Email Icon" />
        {/if}
      </button>
    {/if}

    <a href="https://www.instagram.com/19.decembrie_" target="_blank" rel="noopener noreferrer" aria-label="Profilul meu de Instagram">
      <img src="/images/instagram.svg" alt="Instagram Icon" />
    </a>
  </div>
</main>

<style>
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
    background-clip: text;
    color: transparent;
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
    background-clip: text;
    color: transparent;
    filter: blur(10px);
    animation: gradientShift 3s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
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
    from { transform-origin: left; transform: scaleX(0); opacity: 0; }
    to { transform-origin: left; transform: scaleX(1); opacity: 1; }
  }

  .text-block {
    background-color: rgba(25, 25, 30, 0.5);
    padding: 1.2rem 1.5rem;
    border-radius: 16px;
    width: 750px;
    max-width: 1000px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  :global(.text-block p) {
    margin: 0 0 1rem 0;
    line-height: 1.7;
    font-size: 0.95rem;
    text-align: left;
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
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: transparent;
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
    background: radial-gradient(circle at 30% 30%, rgba(150, 200, 255, 0.3) 0, rgba(29, 78, 216, 0.2) 50%, transparent 70%);
    box-shadow:
      0 0 15px rgba(29, 78, 216, 0.5),
      inset 0 0 10px rgba(255, 255, 255, 0.2);
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
    border: 1px solid rgba(150, 200, 255, 0.3);
    animation: ripple 2s ease-out infinite;
    opacity: 0;
    z-index: -2;
  }

  .social-links a img,
  .social-links button img {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
    transition: filter 0.3s ease-out, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .social-links button span {
    color: #a7c8ff;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
  }

  @keyframes water-bubble {
    0%, 100% { transform: scale(1) translateY(0); opacity: 0.8; }
    50% { transform: scale(1.05) translateY(-2px); opacity: 1; }
  }

  @keyframes ripple {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  @media (max-width: 767px) {
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

    .text-block {
      width: auto;
      max-width: 380px;
      margin-left: 0;
      margin-right: 0;
    }

    :global(.text-block p) {
      font-size: 0.875rem;
      line-height: 1.6;
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
  }
</style>
