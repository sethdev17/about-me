<script>
  import { slide } from 'svelte/transition';
  
  export let t;
  export let data;
  export let isTouchDevice;

  let showAllAnime = false;
  const initialVisibleCount = 15;
</script>

<div class="anime-section">
  <p>{@html t.animeBio}</p>
</div>

<div id="anime" class="top-anime-section">
  <h2>{t.topAnimeTitle}</h2>
  <ol class="top-anime-list">
    {#each data.anime.slice(0, initialVisibleCount) as anime}
      <li>
        <a href={anime.url} target="_blank" rel="noopener noreferrer">
          {anime.title}
          {#if anime.imageUrl && !isTouchDevice}
            <img src={anime.imageUrl} alt="Coperta {anime.title}" class="anime-thumbnail" />
          {/if}
        </a>
      </li>
    {/each}
    {#if data.anime.length > initialVisibleCount}
      {#if showAllAnime}
        {#each data.anime.slice(initialVisibleCount) as anime (anime.title)}
          <li transition:slide|local>
            <a href={anime.url} target="_blank" rel="noopener noreferrer">
              {anime.title}
              {#if anime.imageUrl && !isTouchDevice}
                <img src={anime.imageUrl} alt="Coperta {anime.title}" class="anime-thumbnail" />
              {/if}
            </a>
          </li>
        {/each}
      {/if}
      <button class="toggle-list-button" on:click={() => showAllAnime = !showAllAnime}>
        {showAllAnime ? t.showLess : t.showMore}
      </button>
    {/if}
  </ol>
</div>

<style>
  .anime-section,
  .top-anime-section {
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
    padding-left: 1.8rem;
    overflow: visible;
  }

  .top-anime-list li {
    position: relative;
    margin-bottom: 0.8rem;
    padding-left: 0.5rem;
  }

  .top-anime-list a {
    color: #c7c7c7;
    text-decoration: none;
    transition: color 0.2s ease-out;
    font-size: 0.95rem;
    display: block;
  }

  .top-anime-list a:hover {
    color: #fff;
  }

  .anime-thumbnail {
    position: absolute;
    right: 105%;
    top: 50%;
    transform: translateY(-50%) scale(0.8);
    margin-right: 2.4rem;
    width: 120px;
    height: 170px;
    object-fit: cover;
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0.2s;
    pointer-events: none;
    z-index: 10;
  }

  .top-anime-list li:hover .anime-thumbnail {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) scale(1);
  }

  .toggle-list-button {
    background: transparent;
    border: none;
    color: #60a5fa;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0;
    margin-top: 1rem;
    margin-left: -40px;
    transition: color 0.2s ease-out;
  }

  .toggle-list-button:hover {
    color: #a7c8ff;
  }

  @media (max-width: 767px) {
    .anime-section,
    .top-anime-section {
      width: auto;
      max-width: 600px;
      margin-left: 0;
      margin-right: 0;
    }

    :global(.anime-section p) {
      font-size: 0.875rem;
      line-height: 1.6;
    }

    .top-anime-list li,
    .top-anime-list a {
      font-size: 0.875rem;
    }

    .top-anime-list li {
      padding-left: 0.2rem;
      margin-bottom: 0.5rem;
    }

    .top-anime-list {
      padding-left: 1.4rem;
    }

    .top-anime-section h2 {
      font-size: 1.05rem;
      margin-bottom: 1.2rem;
      text-align: center;
    }

    .toggle-list-button {
      font-size: 0.8rem;
      margin-top: 0.8rem;
      margin-left: -20px;
    }

    .anime-thumbnail {
      display: none;
    }
  }
</style>
