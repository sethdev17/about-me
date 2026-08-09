// src/routes/+page.server.js
import { env } from '$env/dynamic/private';
import { browser } from '$app/environment';
import animeData from '$lib/data/anime.json';

export const prerender = false;

const GITHUB_USERNAME = 'sethdev17';

function getGitHubToken() {
  try {
    if (typeof process !== 'undefined' && process.env && process.env.GITHUB_TOKEN) {
      return process.env.GITHUB_TOKEN;
    }
  } catch { /* ignore */ }
  return env.GITHUB_TOKEN ?? '';
}

/** @param {typeof fetch} fetchFunc */
async function getGithubProjects(fetchFunc) {
  try {
    if (browser) return [];
    const GITHUB_TOKEN = getGitHubToken();
    if (!GITHUB_TOKEN || GITHUB_TOKEN === 'ghp_YOUR_TOKEN_HERE' || !GITHUB_TOKEN.startsWith('ghp_')) {
      console.warn('⚠️ GITHUB_TOKEN nu a fost configurat.');
      return [];
    }

    const headers = {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'User-Agent': 'SvelteKit-Portfolio-App'
    };

    const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30`;
    const reposRes = await fetchFunc(apiUrl, { headers });

    if (reposRes.status === 403 || reposRes.status === 429) {
      console.warn('⚠️ GitHub API rate limit atins.');
      return [];
    }

    if (!reposRes.ok) {
      throw new Error(`GitHub API error: ${reposRes.status}`);
    }

    const allRepos = await reposRes.json();
    const filteredRepos = allRepos
      .filter((repo) => !repo.fork && repo.description)
      .slice(0, 8);

    const langResults = await Promise.allSettled(
      filteredRepos.map(async (repo) => {
        if (!repo.languages_url) return { ...repo, languages: {} };
        const langRes = await fetchFunc(repo.languages_url, { headers });
        const languagesData = langRes.ok ? await langRes.json() : {};
        return { ...repo, languages: languagesData };
      })
    );

    return langResults
      .map((r) => (r.status === 'fulfilled' ? r.value : null))
      .filter(Boolean);
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
