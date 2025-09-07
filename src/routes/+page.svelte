<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  // =============== SECȚIUNEA PENTRU TRADUCERE ===============
  const translations = {
    ro: {
      title: 'Profilul Meu',
      bio: `Salut! Sunt un dezvoltator la început de drum în vârstă de 19 ani, captivat de procesul de a transforma idei creative și unice la realitate prin intermediul liniilor de cod. Când nu sunt prins în lumea programării, administrez o comunitate mică pentru fanii de anime pe <a href="LINKUL_TAU_DE_INVITATIE_AICI" target="_blank" rel="noopener noreferrer" class="discord-link">Discord</a>.`,
      learningTitle: 'Limbajele pe care le învăț în prezent:',
      animeBio: `Că tot am menționat de anime-uri, am vizionat și încă vizionez destul de multe. Îmi plac mai mult decât filmele normale deoarece îmi transmit mult mai multe sentimente și experiențe. Ele mă pot face foarte ușor să râd, să plâng sau să mă facă să spun "wow, ce poveste nemaipomenită a avut această serie". Dacă sunteți interesați, puteți să-mi vizitați lista pe <a href="https://myanimelist.net/profile/Felix17" target="_blank" rel="noopener noreferrer" aria-label="Profilul meu MyAnimeList"><img src="/images/mal-icon.svg" alt="MyAnimeList Icon" class="mal-icon"></a>.`,
      topAnimeTitle: 'Top anime-uri preferate:',
      showMore: 'Vezi mai mult >>',
      showLess: '<< Vezi mai puțin'
    },
    en: {
      title: 'My Profile',
      bio: `Hey there! I'm a 19-year-old developer at the start of my journey, captivated by the process of turning creative and unique ideas into reality through lines of code. When I'm not lost in the world of code, I manage a small community for anime fans on <a href="LINKUL_TAU_DE_INVITATIE_AICI" target="_blank" rel="noopener noreferrer" class="discord-link">Discord</a>.`,
      learningTitle: 'Languages I\'m currently learning:',
      animeBio: `Since I mentioned anime, I've watched and still watch quite a few. I like them more than regular movies because they convey so much more emotion and experience. They can easily make me laugh, cry, or say "wow, what an amazing story this series had." If you're interested, you can visit my list on <a href="https://myanimelist.net/profile/Felix17" target="_blank" rel="noopener noreferrer" aria-label="My MyAnimeList Profile"><img src="/images/mal-icon.svg" alt="MyAnimeList Icon" class="mal-icon"></a>.`,
      topAnimeTitle: 'Top favorite anime:',
      showMore: 'Show more >>',
      showLess: '<< Show less'
    }
  };

  let lang = 'ro';
  let t = translations[lang];

  onMount(() => {
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      lang = browserLang;
      t = translations[lang];
    }
  });

  const languages = [
    { name: 'JavaScript', color: '#f1e05a', icon: '⚡', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'CSS', color: '#1572b6', icon: '🎨', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'HTML', color: '#e34f26', icon: '📄', docUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML' }
  ];

  const topAnime = [
    { title: 'Steins;Gate', url: 'https://myanimelist.net/anime/9253/Steins_Gate' },
    { title: 'Date A Live', url: 'https://myanimelist.net/anime/15583/Date_A_Live' },
    { title: 'Satsuriku no Tenshi', url: 'https://myanimelist.net/anime/35994/Satsuriku_no_Tenshi' },
    { title: 'Initial D First Stage', url: 'https://myanimelist.net/anime/185/Initial_D_First_Stage' },
    { title: 'The Promised Neverland', url: 'https://myanimelist.net/anime/37779/Yakusoku_no_Neverland' },
    { title: 'Code Geass: Lelouch of the Rebellion', url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch' },
    { title: 'Hunter x Hunter (2011)', url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011' },
    { title: 'Hellsing Ultimate', url: 'https://myanimelist.net/anime/777/Hellsing_Ultimate' },
    { title: 'Darling in the FranXX', url: 'https://myanimelist.net/anime/35849/Darling_in_the_FranXX' },
    { title: 'K-On!', url: 'https://myanimelist.net/anime/5680/K-On' },
    { title: 'Chuunibyou demo Koi ga Shitai!', url: 'https://myanimelist.net/anime/14741/Chuunibyou_demo_Koi_ga_Shitai' },
    { title: 'Grand Blue', url: 'https://myanimelist.net/anime/37105/Grand_Blue' },
    { title: 'Toradora!', url: 'https://myanimelist.net/anime/4224/Toradora' },
    { title: 'Rascal Does Not Dream of Bunny Girl Senpai', url: 'https://myanimelist.net/anime/37450/Seishun_Buta_Yarou_wa_Bunny_Girl_Senpai_no_Yume_wo_Minai' },
    { title: 'Fate/stay night', url: 'https://myanimelist.net/anime/356/Fate_stay_night' },
    { title: 'Fate/Apocrypha', url: 'https://myanimelist.net/anime/34662/Fate_Apocrypha' },
    { title: 'Fate/Zero', url: 'https://myanimelist.net/anime/10087/Fate_Zero' },
    { title: 'KonoSuba', url: 'https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo' },
    { title: 'Classroom of the Elite', url: 'https://myanimelist.net/anime/35507/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e' },
    { title: 'Angel Beats!', url: 'https://myanimelist.net/anime/6547/Angel_Beats' },
    { title: 'Golden Time', url: 'https://myanimelist.net/anime/17895/Golden_Time' },
    { title: 'Food Wars! Shokugeki no Soma', url: 'https://myanimelist.net/anime/28171/Shokugeki_no_Souma' },
    { title: 'Erased', url: 'https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi' },
    { title: 'Bungou Stray Dogs', url: 'https://myanimelist.net/anime/31478/Bungou_Stray_Dogs' },
    { title: 'Another', url: 'https://myanimelist.net/anime/11111/Another' },
    { title: 'Sword Art Online', url: 'https://myanimelist.net/anime/11757/Sword_Art_Online' },
    { title: 'My Teen Romantic Comedy SNAFU', url: 'https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru' },
    { title: 'Parasyte -the maxim-', url: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu' },
    { title: 'Plastic Memories', url: 'https://myanimelist.net/anime/27775/Plastic_Memories' },
    { title: 'One-Punch Man', url: 'https://myanimelist.net/anime/30276/One_Punch_Man' },
    { title: 'Violet Evergarden', url: 'https://myanimelist.net/anime/33352/Violet_Evergarden' },
    { title: 'Re:ZERO -Starting Life in Another World-', url: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu' },
    { title: 'Dororo', url: 'https://myanimelist.net/anime/37520/Dororo' },
    { title: 'Kaguya-sama: Love is War', url: 'https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen' },
    { title: 'The Tunnel to Summer, the Exit of Goodbyes', url: 'https://myanimelist.net/anime/50593/Natsu_e_no_Tunnel_Sayonara_no_Deguchi' },
    { title: 'The Ancient Magus\' Bride', url: 'https://myanimelist.net/anime/35062/Mahoutsukai_no_Yome' },
    { title: 'Berserk (1997)', url: 'https://myanimelist.net/anime/33/Kenpuu_Denki_Berserk' },
    { title: 'Dusk Maiden of Amnesia', url: 'https://myanimelist.net/anime/12445/Tasogare_Otome_x_Amnesia' },
    { title: 'Nisekoi', url: 'https://myanimelist.net/anime/18897/Nisekoi' },
    { title: 'Charlotte', url: 'https://myanimelist.net/anime/28999/Charlotte' },
    { title: 'Noragami', url: 'https://myanimelist.net/anime/20507/Noragami' },
    { title: 'TONIKAWA: Over The Moon For You', url: 'https://myanimelist.net/anime/41389/Tonikaku_Kawaii' },
    { title: '86 EIGHTY-SIX', url: 'https://myanimelist.net/anime/41457/86' }
  ];

  // Logică pentru a afișa/ascunde lista de anime-uri
  let showAllAnime = false;
  const initialVisibleCount = 5;
</script>

<svelte:head>
  <title>{t.title}</title>
</svelte:head>

<div class="container">
  <div class="background-effects"></div>

  <main class="profile-card">
    <div class="main-content">
      <img src="/images/profil.jpg" alt="Poza mea de profil" class="profile-picture">
      <div class="text-block">
        <p>{@html t.bio}</p>
      </div>
    </div>

    <div class="social-links">
      <a href="https://github.com/sethdev17" target="_blank" rel="noopener noreferrer" aria-label="Profilul meu de GitHub"><img src="/images/github.svg" alt="GitHub Icon"></a>
      <a href="https://discord.com/users/602431963688730624" target="_blank" rel="noopener noreferrer" aria-label="Contacteaza-ma pe Discord"><img src="/images/discord.svg" alt="Discord Icon"></a>
    </div>

    <div class="languages-section">
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

    <div class="anime-section">
      <p>{@html t.animeBio}</p>
    </div>

    <div class="top-anime-section">
      <h2>{t.topAnimeTitle}</h2>
      <ol class="top-anime-list">
        {#each topAnime.slice(0, initialVisibleCount) as anime}
          <li><a href={anime.url} target="_blank" rel="noopener noreferrer">{anime.title}</a></li>
        {/each}
        
        {#if showAllAnime}
          {#each topAnime.slice(initialVisibleCount) as anime (anime.title)}
            <li transition:slide|local><a href={anime.url} target="_blank" rel="noopener noreferrer">{anime.title}</a></li>
          {/each}
        {/if}
      </ol>
      
      <button class="toggle-list-button" on:click={() => showAllAnime = !showAllAnime}>
        {showAllAnime ? t.showLess : t.showMore}
      </button>
    </div>
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #f0f0f0;
    background-color: #000000;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 4rem 1rem;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
  }
  
  /* EFECT DE FUNDAL - DOAR NUCLEUL ANIMAT */
  .container::before {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    width: 900px;
    height: 900px;
    background-image: radial-gradient(circle, rgba(29, 78, 216, 0.25) 0%, rgba(0, 0, 0, 0) 55%);
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
    box-shadow: 0 0 15px 4px #a7c8ff, 0 0 25px 10px #60a5fa, 0 0 50px 20px rgba(29, 78, 216, 0.5);
    animation: core-pulse 4s infinite ease-in-out;
  }

  @keyframes core-pulse {
    0%, 100% { transform: scale(0.9); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
  }
  
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
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }

  .profile-picture {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .text-block {
    background-color: rgba(25, 25, 30, 0.5);
    padding: 1.2rem 1.5rem;
    border-radius: 16px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  
  .text-block p {
    margin: 0;
    line-height: 1.7;
    font-size: 0.95rem;
  }

  :global(.discord-link) {
    color: #7289DA;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid transparent;
  }

  :global(.discord-link:hover) {
    color: #99aab5;
    border-bottom-color: #99aab5;
  }

  .social-links {
    display: flex;
    gap: 2.5rem;
  }
  .social-links a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in-out;
  }
  .social-links a::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: conic-gradient(
      from 90deg,
      transparent 0%,
      #60a5fa 10%,
      #3b82f6 20%,
      transparent 30%
    );
    -webkit-mask: radial-gradient(transparent 21px, white 22px);
            mask: radial-gradient(transparent 21px, white 22px);
    animation: spin-animation 4s linear infinite;
  }
  .social-links a img {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
  }
  .social-links a:hover {
    transform: scale(1.15);
  }
  @keyframes spin-animation {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* SECȚIUNEA LIMBAJE */
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
    justify-content: flex-start;
  }
  .language-link {
    text-decoration: none;
    color: inherit;
  }
  .language-card {
    background-color: rgba(20, 20, 20, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.2rem 1rem;
    transition: all 0.3s ease-in-out;
    backdrop-filter: blur(10px);
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
    height: 70%;
    background: linear-gradient(to top, hsla(from var(--glow-color) h s l / 0.4), transparent);
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
    0%, 100% { transform: translateY(0px); }
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

  /* SECȚIUNILE ANIME */
  .anime-section, .top-anime-section {
    width: 100%;
    max-width: 600px;
    background-color: rgba(25, 25, 30, 0.5);
    padding: 1.2rem 1.8rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  .anime-section p {
    margin: 0;
    line-height: 1.7;
    text-align: left;
    font-size: 0.95rem;
  }
  :global(.mal-icon) {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin: 0 4px;
    transition: transform 0.2s ease-out;
    filter: brightness(0) invert(1);
  }
  :global(.mal-icon:hover) {
    transform: scale(1.2);
  }
  .top-anime-section h2 {
    text-align: left;
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem;
    color: #f0f0f0;
  }
  .top-anime-list {
    list-style: decimal;
    margin: 0;
    padding-left: 2.5rem; /* Creștem padding-ul pentru a acomoda numere cu două cifre */
    overflow: visible; /* Asigurăm că numerele nu sunt tăiate */
  }
  .top-anime-list li {
    margin-bottom: 0.8rem;
    font-size: 0.95rem;
    padding-left: 0.5rem; /* Adăugăm un mic padding pentru a separa textul de număr */
  }
  .top-anime-list li:last-child {
    margin-bottom: 0;
  }
  .top-anime-list a {
    color: #c7c7c7;
    text-decoration: none;
    transition: color 0.2s ease-out;
  }
  .top-anime-list a:hover {
    color: #ffffff;
  }
  .toggle-list-button {
    background: none;
    border: none;
    color: #60a5fa;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0;
    margin-top: 1rem;
    transition: color 0.2s ease-out;
  }
  .toggle-list-button:hover {
    color: #a7c8ff;
  }

  /* Responsive Design */
  @media (max-width: 600px) {
    .container {
      padding: 2.5rem 1rem;
    }
    .main-content {
      flex-direction: column;
      gap: 1.5rem;
    }
    .profile-picture {
      width: 100px;
      height: 100px;
    }
    .text-block p, .anime-section p {
      text-align: center;
      font-size: 0.9rem;
    }
    .languages-section h2, .top-anime-section h2 {
      text-align: center;
      font-size: 1.3rem;
    }
    .languages-grid {
      justify-content: center;
      gap: 1rem;
    }
    .language-card {
      min-width: 120px;
      padding: 1rem 0.8rem;
    }
    .language-icon {
      font-size: 1.8rem;
      margin-bottom: 0.6rem;
    }
    .language-info h3 {
      font-size: 1rem;
    }
    .language-dot {
      width: 10px;
      height: 10px;
    }
    .language-name-row {
      gap: 0.5rem;
    }
    .top-anime-list {
      padding-left: 2rem; /* Ajustăm padding-ul pentru mobil */
    }
    .top-anime-list li {
      font-size: 0.9rem;
    }
  }
</style>