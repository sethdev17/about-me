// src/routes/+page.server.js

import { GITHUB_TOKEN } from '$env/static/private';

const GITHUB_USERNAME = 'sethdev17';

const topAnime = [
    { title: 'Steins;Gate', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974l.jpg', manualUrl: 'https://myanimelist.net/anime/9253/Steins_Gate' },
    { title: 'Date A Live', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/12/60779l.jpg', manualUrl: 'https://myanimelist.net/anime/15583/Date_A_Live' },
    { title: 'Satsuriku no Tenshi', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1958/93440l.jpg', manualUrl: 'https://myanimelist.net/anime/35994/Satsuriku_no_Tenshi' },
    { title: 'Initial D First Stage', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1384/127972l.jpg', manualUrl: 'https://myanimelist.net/anime/185/Initial_D_First_Stage' },
    { title: 'The Promised Neverland', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1830/118780l.jpg', manualUrl: 'https://myanimelist.net/anime/37779/Yakusoku_no_Neverland' },
    { title: 'Code Geass: Lelouch of the Rebellion', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1032/135088l.jpg', manualUrl: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch' },
    { title: 'Hunter x Hunter (2011)', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg', manualUrl: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011' },
    { title: 'Hellsing Ultimate', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1012/143965l.jpg', manualUrl: 'https://myanimelist.net/anime/777/Hellsing_Ultimate' },
    { title: 'Darling in the FranXX', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1614/90408l.jpg', manualUrl: 'https://myanimelist.net/anime/35849/Darling_in_the_FranXX' },
    { title: 'K-On!', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/10/76120l.jpg', manualUrl: 'https://myanimelist.net/anime/5680/K-On' },
    { title: 'Chuunibyou demo Koi ga Shitai!', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1905/142840l.jpg', manualUrl: 'https://myanimelist.net/anime/14741/Chuunibyou_demo_Koi_ga_Shitai' },
    { title: 'Grand Blue', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1302/94882l.jpg', manualUrl: 'https://myanimelist.net/anime/37105/Grand_Blue' },
    { title: 'Toradora!', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1356/94686l.jpg', manualUrl: 'https://myanimelist.net/anime/4224/Toradora' },
    { title: 'Rascal Does Not Dream of Bunny Girl Senpai', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1301/93586l.jpg', manualUrl: 'https://myanimelist.net/anime/37450/Seishun_Buta_Yarou_wa_Bunny_Girl_Senpai_no_Yume_wo_Minai' },
    { title: 'Fate/stay night', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/4/30327l.jpg', manualUrl: 'https://myanimelist.net/anime/356/Fate_stay_night' },
    { title: 'Fate/Apocrypha', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/9/86573l.jpg', manualUrl: 'https://myanimelist.net/anime/34662/Fate_Apocrypha' },
    { title: 'Fate/Zero', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1887/117644l.jpg', manualUrl: 'https://myanimelist.net/anime/10087/Fate_Zero' },
    { title: 'KonoSuba', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/8/77831l.jpg', manualUrl: 'https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo' },
    { title: 'Classroom of the Elite', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/7/86829.jpg', manualUrl: 'https://myanimelist.net/anime/35507/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e' },
    { title: 'Angel Beats!', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1244/111115l.jpg', manualUrl: 'https://myanimelist.net/anime/6547/Angel_Beats' },
    { title: 'Golden Time', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1600/111770l.jpg', manualUrl: 'https://myanimelist.net/anime/17895/Golden_Time' },
    { title: 'Food Wars! Shokugeki no Soma', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/11/68293l.jpg', manualUrl: 'https://myanimelist.net/anime/28171/Shokugeki_no_Souma' },
    { title: 'Erased', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/10/77957l.jpg', manualUrl: 'https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi' },
    { title: 'Bungou Stray Dogs', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1044/132831l.jpg', manualUrl: 'https://myanimelist.net/anime/31478/Bungou_Stray_Dogs' },
    { title: 'Another', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/4/75509l.jpg', manualUrl: 'https://myanimelist.net/anime/11111/Another' },
    { title: 'Sword Art Online', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/11/39717l.jpg', manualUrl: 'https://myanimelist.net/anime/11757/Sword_Art_Online' },
    { title: 'My Teen Romantic Comedy SNAFU', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1786/120117l.jpg', manualUrl: 'https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru' },
    { title: 'Parasyte -the maxim-', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/5/73085l.jpg', manualUrl: 'https://myanimelist.net/anime/22535/Kiseijuu__Sei_no_Kakuritsu' },
    { title: 'Plastic Memories', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/2/68297l.jpg', manualUrl: 'https://myanimelist.net/anime/27775/Plastic_Memories' },
    { title: 'One-Punch Man', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg', manualUrl: 'https://myanimelist.net/anime/30276/One_Punch_Man' },
    { title: 'Violet Evergarden', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1035/145305l.jpg', manualUrl: 'https://myanimelist.net/anime/33352/Violet_Evergarden' },
    { title: 'Re:ZERO -Starting Life in Another World-', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/11/79410l.jpg', manualUrl: 'https://myanimelist.net/anime/31240/Re_Zero_kara_Hajimeru_Isekai_Seikatsu' },
    { title: 'Dororo', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1879/100467l.jpg', manualUrl: 'https://myanimelist.net/anime/37520/Dororo' },
    { title: 'Kaguya-sama: Love is War', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1295/106551l.jpg', manualUrl: 'https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen' },
    { title: 'The Tunnel to Summer, the Exit of Goodbyes', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1924/123297l.jpg', manualUrl: 'https://myanimelist.net/anime/50593/Natsu_e_no_Tunnel_Sayonara_no_Deguchi' },
    { title: 'The Ancient Magus\' Bride', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/3/88476l.jpg', manualUrl: 'https://myanimelist.net/anime/35062/Mahoutsukai_no_Yome' },
    { title: 'Berserk (1997)', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/10/79352l.jpg', manualUrl: 'https://myanimelist.net/anime/33/Kenpuu_Denki_Berserk' },
    { title: 'Dusk Maiden of Amnesia', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/12/64435l.jpg', manualUrl: 'https://myanimelist.net/anime/12445/Tasogare_Otome_x_Amnesia' },
    { title: 'Nisekoi', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/13/75587l.jpg', manualUrl: 'https://myanimelist.net/anime/18897/Nisekoi' },
    { title: 'Charlotte', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1826/147276l.jpg', manualUrl: 'https://myanimelist.net/anime/28999/Charlotte' },
    { title: 'Noragami', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1886/128266l.jpg', manualUrl: 'https://myanimelist.net/anime/20507/Noragami' },
    { title: 'TONIKAWA: Over The Moon For You', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1613/108722l.jpg', manualUrl: 'https://myanimelist.net/anime/41389/Tonikaku_Kawaii' },
    { title: '86 EIGHTY-SIX', manualImageUrl: 'https://cdn.myanimelist.net/images/anime/1987/117507l.jpg', manualUrl: 'https://myanimelist.net/anime/41457/86' }
];

/** @param {typeof fetch} fetchFunc */
async function getGithubProjects(fetchFunc) {
  try {
    const headers = {
      'Authorization': `token ${GITHUB_TOKEN}`
    };
    
    const reposRes = await fetchFunc(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`, { headers });
    
    if (!reposRes.ok) {
        throw new Error(`GitHub API returned status ${reposRes.status}`);
    }

    const allRepos = await reposRes.json();
    
    const filteredRepos = allRepos
      .filter(repo => !repo.fork && repo.description)
      .slice(0, 8); // Luăm doar primele 8 cele mai recente proiecte

    // =============== MODIFICAREA CHEIE ESTE AICI ===============
    // Reactivăm Promise.all pentru a prelua limbajele pentru fiecare repo
    const reposWithLanguages = await Promise.all(
      filteredRepos.map(async (repo) => {
        const langRes = await fetchFunc(repo.languages_url, { headers });
        const languagesData = langRes.ok ? await langRes.json() : {};
        // Acum adăugăm proprietatea `languages` la obiectul repo
        return { ...repo, languages: languagesData }; 
      })
    );
    
    return reposWithLanguages;
    // =========================================================

  } catch (error) {
    console.error('Eroare la preluarea proiectelor GitHub:', error);
    return [];
  }
}

async function getAnimeData() {
  return topAnime.map(anime => ({
    title: anime.title,
    imageUrl: anime.manualImageUrl,
    url: anime.manualUrl || '#'
  }));
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
  const [projects, anime] = await Promise.all([
    getGithubProjects(fetch),
    getAnimeData()
  ]);

  // Acum obiectul `projects` va conține datele despre limbaje de care `ProjectCard` are nevoie
  return { projects, anime };
}