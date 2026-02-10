<script>
  /** @type {any} */
  export let project;

  // Harta de culori rămâne aceeași
  const languageColors = {
    JavaScript: '#f1e05a', HTML: '#e34c26', CSS: '#1572B6',
    TypeScript: '#3178c6', Python: '#3572A5', Java: '#b07219',
    Shell: '#89e051', Svelte: '#ff3e00', Vue: '#41b883',
    C: '#555555', 'C++': '#f34b7d', 'C#': '#178600',
    PHP: '#4F5D95', Go: '#00ADD8', EJS: '#a91e50'
  };

  // =============== LOGICĂ NOUĂ PENTRU PROCENTAJE ===============
  let languageStats = [];
  
  // Calculăm procentajele o singură dată, când componenta se încarcă
  $: {
    const totalBytes = Object.values(project.languages).reduce((sum, bytes) => sum + bytes, 0);
    if (totalBytes > 0) {
      languageStats = Object.entries(project.languages)
        // Transformăm în obiecte cu nume, procentaj și culoare
        .map(([name, bytes]) => ({
          name,
          percentage: ((bytes / totalBytes) * 100).toFixed(1),
          color: languageColors[name] || '#ccc'
        }))
        // Sortăm după procentaj, descrescător
        .sort((a, b) => b.percentage - a.percentage);
    }
  }
</script>

<a href={project.html_url} target="_blank" rel="noopener noreferrer" class="project-card">
  <div class="project-header">
    <span class="repo-icon">
      <svg xmlns="http://www.w.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    </span>
    <h3>{project.name}</h3>
    <div class="project-stats">
      <span>{project.stargazers_count}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </div>
  </div>

  <p class="project-description">{project.description}</p>

  <!-- =============== SECȚIUNEA FOOTER MODIFICATĂ =============== -->
  <div class="project-footer">
    <!-- Bara de progres colorată -->
    <div class="language-bar">
      {#each languageStats as lang}
        <div 
          class="language-segment" 
          style="width: {lang.percentage}%; background-color: {lang.color};"
          title="{lang.name}: {lang.percentage}%"
        ></div>
      {/each}
    </div>
    
    <!-- Legenda cu limbaje și procentaje -->
    <div class="languages-legend">
      {#each languageStats as lang}
        <div class="language-info">
          <span class="language-dot" style="background-color: {lang.color}"></span>
          <span>{lang.name}</span>
          <span class="percentage">{lang.percentage}%</span>
        </div>
      {/each}
    </div>
  </div>
</a>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background-color: rgba(25, 25, 30, 0.5);
    padding: 1.2rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease-in-out;
  }
  .project-card:hover {
    transform: translateY(-5px);
    border-color: rgba(150, 200, 255, 0.5);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
  .project-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .repo-icon {
    color: #c7c7c7;
  }
  .project-header h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #f0f0f0;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .project-stats {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    color: #c7c7c7;
    flex-shrink: 0;
  }
  .project-stats svg {
    color: #fff88b;
  }
  .project-description {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #c7c7c7;
    margin: 0;
    flex-grow: 1;
  }
  .project-footer {
    margin-top: auto;
    padding-top: 0.75rem;
  }
  
  /* STILURI NOI PENTRU BARA DE PROGRES ȘI LEGENDĂ */
  .language-bar {
    display: flex;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }
  .language-segment {
    height: 100%;
  }
  .languages-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem; /* Spațiu între elementele din legendă */
  }
  .language-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: #c7c7c7;
  }
  .language-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .percentage {
    color: #9a9a9a; /* O culoare mai subtilă pentru procentaj */
  }
</style>