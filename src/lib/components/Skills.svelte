<script>
  export let t;
  
  const languages = [
    { name: 'JavaScript', color: '#f1e05a', icon: '⚡', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'CSS', color: '#1572b6', icon: '🎨', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'HTML', color: '#e34f26', icon: '📄', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML' }
  ];
</script>

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

<style>
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
    background-color: rgba(25, 25, 30, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    padding: 1.2rem 1rem;
    transition: all 0.3s ease-in-out;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
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
    background: radial-gradient(circle at 50% 120%, hsla(from var(--glow-color) h s l / 0.35) 0, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  .language-icon,
  .language-info {
    position: relative;
    z-index: 1;
  }

  .language-card:hover {
    transform: translateY(-5px);
    border-color: hsla(from var(--glow-color) h s l / 0.5);
  }

  .language-card:hover::after {
    opacity: 1;
  }

  .language-icon {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
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
    gap: 0.6rem;
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
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 767px) {
    .languages-section h2 {
      font-size: 1.05rem;
      margin-bottom: 1.2rem;
      text-align: center;
    }

    .languages-grid {
      gap: 0.8rem;
      justify-content: center;
    }

    .language-card {
      min-width: 100px;
      max-width: 120px;
      padding: 0.8rem;
    }

    .language-icon {
      font-size: 1.7rem;
    }

    .language-info h3 {
      font-size: 0.9rem;
    }

    .language-dot {
      width: 8px;
      height: 8px;
    }
  }
</style>
