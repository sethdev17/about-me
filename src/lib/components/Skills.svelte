<script>
  export let t;

  const JS_SVG = `
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path fill="#F0DB4F" d="M0 0h24v24H0V0z"/>
      <path fill="#323330" d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  `;

  const NODE_SVG = `
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.114.577.645 1.13 1.255 1.13h5.754c.354 0 .692-.286.94-.527.285-.272.39-.619.355-.964-.738-7.295-5.314-15.832-22.687-15.832-12.645 0-20.17 5.334-20.17 14.315 0 9.72 7.547 12.471 19.703 13.546 14.551 1.3 15.607 3.485 15.607 6.399 0 5.042-3.978 7.066-12.961 7.066z"/>
    </svg>
  `;

  const SVELTE_SVG = `
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <defs>
        <linearGradient id="svelteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF3E00"/>
          <stop offset="100%" stop-color="#F86A2B"/>
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="23" height="23" rx="6" fill="url(#svelteGrad)"/>
      <path fill="#ffffff" d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/>
    </svg>
  `;

  const CSS_SVG = `
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path fill="#1572B6" d="M18.814 114.123L8.762 1.352h110.476l-10.064 112.754-45.625 12.48z"/>
      <path fill="#33A9DC" d="M64.000 117.062l37.049-10.086 8.595-96.228H64.000z"/>
      <path fill="#fff" d="M64.000 51.429h18.302l1.264-14.163H64.000V23.102h33.696l-.332 3.711-3.4 38.114H64.000z"/>
      <path fill="#EBEBEB" d="M64.128 87.349l-17.227-4.657-1.091-12.235H34.01l2.162 24.285 27.956 7.768zm-.128-54.247v14.163h-31.31l-.739-8.271-.858-9.591z"/>
      <path fill="#fff" d="M81.127 64.435l-1.769 19.827-15.358 4.147v13.978l27.957-7.768.365-4.107 2.35-26.488-.835.004H81.127z"/>
      <path fill="#EBEBEB" d="M64.045 23.102v14.163H33.051l-.258-2.884-.571-6.428-.241-2.713.002-.002.001-.001.001-.001.001-.001.001-.001.001-.001.001-.001.001-.001.001-.001h31.932zm-.045 28.327v14.163H49.832l-.739-8.271-.857-9.591z"/>
    </svg>
  `;

  const HTML_SVG = `
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.243 12.48z"/>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
      <path fill="#EBEBEB" d="M64.000 51.429h18.302l1.264-14.163H64.000V23.102h33.696l-.332 3.711-3.4 38.114H64.000zm0 35.916l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#fff" d="M63.952 51.429v14.164h16.947l-1.597 17.943-15.351 4.143v14.519l28.215-7.82.207-2.325 3.234-36.353.335-3.710.001-.018h-3.376zm.048-28.327v14.163H97.67l.205-2.29.534-6.002.575-6.451-.002-.003v-.001l-.001-.001v-.001l-.001-.001v-.002l-.001-.001v-.001l-.001-.001h-.001l-.001-.001H64.000z"/>
    </svg>
  `;

  const KOTLIN_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 16 19" width="48" height="48">
      <defs>
        <linearGradient id="kRealA" x1="2.039" y1="11.659" x2="9.95" y2="3.748" gradientUnits="userSpaceOnUse">
          <stop offset=".108" stop-color="#c757bc"/>
          <stop offset=".173" stop-color="#cd5ca9"/>
          <stop offset=".492" stop-color="#e8744f"/>
          <stop offset=".716" stop-color="#f88316"/>
          <stop offset=".823" stop-color="#ff8900"/>
        </linearGradient>
        <linearGradient id="kRealB" x1="3.369" y1="6.189" x2="6.073" y2="3.484" gradientUnits="userSpaceOnUse">
          <stop offset=".296" stop-color="#00afff"/>
          <stop offset=".694" stop-color="#5282ff"/>
          <stop offset="1" stop-color="#945dff"/>
        </linearGradient>
        <linearGradient id="kRealD" x1="6.184" y1="13.878" x2="10.04" y2="10.022" gradientUnits="userSpaceOnUse">
          <stop offset=".296" stop-color="#00afff"/>
          <stop offset=".694" stop-color="#5282ff"/>
          <stop offset="1" stop-color="#945dff"/>
        </linearGradient>
      </defs>
      <path d="M7.74 3.843L3.47 8.33v4.013l4.262-4.27 4.24-4.232z" fill="url(#kRealA)"/>
      <path d="M3.47 12.344l4.262-4.27 4.24 4.27z" fill="url(#kRealD)"/>
      <path d="M3.47 3.843H7.74L3.47 8.33z" fill="url(#kRealB)"/>
    </svg>
  `;

  
  const DOCKER_SVG = `
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path fill="#2496ED" d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
    </svg>
  `;

  const languages = [
    { name: 'JavaScript', color: '#F0DB4F',  icon: JS_SVG,     docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', percentage: 20 },
    { name: 'HTML5',      color: '#E44D26',  icon: HTML_SVG,   docUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',          percentage: 40 },
    { name: 'CSS3',       color: '#1572B6',  icon: CSS_SVG,    docUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',           percentage: 40 },
    { name: 'Node.js',    color: '#83CD29',  icon: NODE_SVG,   docUrl: 'https://nodejs.org/docs/latest/api/',                       percentage: 20 },
    { name: 'SvelteKit',  color: '#FF3E00',  icon: SVELTE_SVG, docUrl: 'https://kit.svelte.dev/docs/introduction',                  percentage: 10 },
    { name: 'Kotlin',     color: '#7F52FF',  icon: KOTLIN_SVG, docUrl: 'https://kotlinlang.org/docs/home.html',                      percentage: 10 },
    { name: 'Docker',     color: '#2496ED',  icon: DOCKER_SVG, docUrl: 'https://docs.docker.com/',                                   percentage: 10 },
  ];

  const CARD_W = 172;
  const CARD_H = 208;
  const CARD_R = 16;
  const INSET = 4;
  const STROKE_W = 3;

  const rectW = CARD_W - INSET * 2;
  const rectH = CARD_H - INSET * 2;
  const rectR = CARD_R - 2;

  const perimeter = 2 * (rectW + rectH) - 8 * rectR + 2 * Math.PI * rectR;

  function dashOffset(p) {
    const dec = Math.max(0, Math.min(100, p)) / 100;
    return (perimeter * (1 - dec)).toFixed(1);
  }

  function progressClass(p) {
    if (p >= 80) return 'level-expert';
    if (p >= 60) return 'level-good';
    if (p >= 40) return 'level-medium';
    return 'level-beginner';
  }
</script>

<div id="skills" class="languages-section">
  <h2>{t.learningTitle}</h2>
  <div class="languages-grid">
    {#each languages as language, i}
      <a href={language.docUrl} target="_blank" rel="noopener noreferrer" class="language-link">
        <div
          class="language-card {progressClass(language.percentage)}"
          style="
            --glow-color: {language.color};
            --float-delay: {(i * 0.25).toFixed(2)}s;
            --progress-color: {language.color};
          "
        >
          <svg
            class="progress-border"
            viewBox="0 0 {CARD_W} {CARD_H}"
            aria-hidden="true"
          >
            <defs>
              <filter id="glow-{i}" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect
              class="progress-track"
              x={INSET}
              y={INSET}
              width={rectW}
              height={rectH}
              rx={rectR}
              ry={rectR}
              stroke-width={STROKE_W}
              fill="none"
            />
            <rect
              class="progress-fill"
              x={INSET}
              y={INSET}
              width={rectW}
              height={rectH}
              rx={rectR}
              ry={rectR}
              stroke-width={STROKE_W}
              stroke-dasharray={perimeter.toFixed(1)}
              stroke-dashoffset={dashOffset(language.percentage)}
              stroke-linecap="round"
              stroke={language.color}
              fill="none"
              filter="url(#glow-{i})"
              style="--perimeter: {perimeter.toFixed(1)};"
            />
          </svg>

          <div class="card-inner">
            <div class="language-icon">{@html language.icon}</div>
            <div class="language-info">
              <div class="language-name-row">
                <div class="language-dot" style="background-color: {language.color}"></div>
                <h3>{language.name}</h3>
              </div>
              <div class="percentage-row">
                <span class="percentage-text">
                  {t.percentagePrefix || 'Cunoștințe'} {language.name}: <strong>{language.percentage}%</strong>
                </span>
              </div>
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
    max-width: 900px;
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
    border-radius: 16px;
    transition:
      box-shadow 0.32s cubic-bezier(0.33, 1, 0.68, 1),
      opacity 0.3s ease-out;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 172px;
    min-height: 208px;
    position: relative;
    overflow: hidden;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    animation: float 6s ease-in-out infinite;
    animation-delay: var(--float-delay, 0s);
  }

  .language-card:hover {
    animation-play-state: paused;
    transform: translate3d(0, -7px, 0) scale(1.025);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  }

  .progress-border {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    overflow: visible;
  }

  .progress-track {
    stroke: rgba(255, 255, 255, 0.1);
  }

  .progress-fill {
    transition:
      stroke-dashoffset 1.6s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.3s ease-out,
      stroke 0.3s ease-out;
  }

  .language-card:hover .progress-fill {
    filter: url(#glow) drop-shadow(0 0 10px var(--progress-color));
    stroke-opacity: 0.95;
  }

  .language-card::after {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 120%, rgba(96, 165, 250, 0.35) 0, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  @supports (color: hsl(from red h s l)) {
    .language-card::after {
      background: radial-gradient(circle at 50% 120%, hsla(from var(--glow-color) h s l / 0.35) 0, transparent 60%);
    }
  }

  .card-inner {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.4rem 1rem;
    width: 100%;
    height: 100%;
    gap: 0.4rem;
  }

  .language-card:hover::after {
    opacity: 1;
  }

  .language-icon {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.8rem;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
  }

  .language-icon svg {
    display: block;
  }

  @keyframes float {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0, -8px, 0);
    }
  }

  .language-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.35rem;
  }

  .language-name-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .language-info h3 {
    margin: 0;
    font-size: 1.05rem;
    color: #f0f0f0;
    font-weight: 600;
  }

  .language-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .percentage-row {
    margin-top: 2px;
    padding: 0.3rem 0.5rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    width: 100%;
  }

  .percentage-text {
    font-size: 0.72rem;
    color: #c7c7c7;
    line-height: 1.3;
  }

  .percentage-text strong {
    color: var(--progress-color);
    font-weight: 800;
    font-size: 0.78rem;
    margin-left: 2px;
  }

  .level-expert .percentage-text strong   { text-shadow: 0 0 8px var(--progress-color); }
  .level-good .percentage-text strong     { text-shadow: 0 0 6px var(--progress-color); }

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
      width: 130px;
      min-height: 170px;
      padding: 0.9rem 0.6rem;
    }

    .language-icon {
      height: 34px;
    }

    .language-icon svg {
      width: 30px;
      height: 30px;
    }

    .language-info h3 {
      font-size: 0.85rem;
    }

    .language-dot {
      width: 8px;
      height: 8px;
    }

    .percentage-row {
      padding: 0.22rem 0.4rem;
    }

    .percentage-text {
      font-size: 0.62rem;
    }

    .percentage-text strong {
      font-size: 0.68rem;
    }
  }
</style>
