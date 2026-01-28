// src/routes/+page.server.js
import { GITHUB_TOKEN } from '$env/static/private';
import animeData from '$lib/data/anime.json';

export const prerender = false;

const GITHUB_USERNAME = 'sethdev17';

/** @param {typeof fetch} fetchFunc */
async function getGithubProjects(fetchFunc) {
  try {
    if (!GITHUB_TOKEN || GITHUB_TOKEN === 'ghp_YOUR_TOKEN_HERE' || !GITHUB_TOKEN.startsWith('ghp_')) {
      console.warn('⚠️ GITHUB_TOKEN nu a fost configurat.');
      return [];
    }

    const headers = {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'User-Agent': 'SvelteKit-Portfolio-App'
    };
    
    // We only need a few repos, but we filter them. Let's fetch 30 to be safe and then slice to 8.
    const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30`;
    const reposRes = await fetchFunc(apiUrl, { headers });
    
    if (!reposRes.ok) {
        throw new Error(`GitHub API error: ${reposRes.status}`);
    }

    const allRepos = await reposRes.json();
    const filteredRepos = allRepos
      .filter(repo => !repo.fork && repo.description)
      .slice(0, 8);
      
    return await Promise.all(
      filteredRepos.map(async (repo) => {
        if (!repo.languages_url) return { ...repo, languages: {} };
        const langRes = await fetchFunc(repo.languages_url, { headers });
        const languagesData = langRes.ok ? await langRes.json() : {};
        return { ...repo, languages: languagesData }; 
      })
    );

  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const projects = await getGithubProjects(fetch);
  return { 
    projects, 
    anime: animeData 
  };
}
