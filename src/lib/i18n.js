// src/lib/i18n.js
import { language } from './stores.js';
import { browser } from '$app/environment';

export const translations = {
  ro: {
    title: 'SethDev | Despre Mine',
    metaDescription: 'Află atât despre mine cât și despre portofoliul meu.',
    ageText: '19 Ani',
    bio: `
      <p>Salut! Sunt un dezvoltator la început de drum în vârstă de 19 ani, captivat de procesul de a transforma idei creative și unice la realitate prin intermediul liniilor de cod. Poate te întrebi, oare ce m-a făcut să mă captiveze acest domeniu?</p>
      <p>Păi totul a început anul trecut, în 2024, pe Discord, când am început să mă intereseze cum sunt făcuți boții de pe această platformă. După ce am aflat prin ce mod sunt făcuți, cum funcționează și cum îi aduci la viață, m-am apucat și eu să-mi fac unul, numit <span style="color: #fff88b">Saber</span>, care a împlinit deja mai mult de un an.</p>
      <p>Voiam să experimentez cât mai multe lucruri și să văd dacă pot să-i introduc multiple comenzi diferite, și a funcționat. După ce nu am mai avut idei de comenzi, m-am apucat să îi inventez minigame-uri să văd dacă chiar va ieși ceva interesant și chiar mi-a plăcut rezultatul.</p>
      <p>Într-adevăr, la început nu prea înțelegeam multe lucruri și nu știam să înțeleg și să citesc erorile, dar prin repetiție, m-am obișnuit. După aproximativ 10 luni de lucrat numai cu botul, m-am gândit că ar trebui să mă interesez și de alte lucruri cum ar fi web-development, deci de prin aprilie 2025, tot încerc să învăț și să înțeleg cât mai bine JavaScript, CSS și HTML.</p>
      <p>Deci doar simpla idee că pot crea orice îmi trece prin minte, gratis doar prin acumularea de experiență și cunoștințe m-a făcut să mă pasioneze acest domeniu. E adevărat că uneori toate aceste lucruri pot devenii obositoare la un moment dat, dar asta numai dacă nu-ți impui limite sănătoase să te poți relaxa, dacă ceva chiar îți place cu adevărat, nu renunți așa ușor, chiar de este greu. Renunți numai dacă ști clar că acel lucru nu este pentru tine.</p>
      <p>De asemenea pe lângă toate aceste lucruri, când nu sunt prins în lumea programării, administrez o comunitate mică pentru fanii de anime pe <a href="https://discord.com/invite/7bkkg9a5ee" target="_blank" rel="noopener noreferrer" class="discord-link">Discord</a>.</p>
    `,
    learningTitle: 'Limbajele pe care le învăț în prezent:',
    projectsTitle: 'Proiectele mele:',
    animeBio: `Că tot am menționat de anime-uri, am vizionat și încă vizionez destul de multe. Îmi plac mai mult decât filmele normale deoarece îmi transmit mult mai multe sentimente și experiențe. Ele mă pot face foarte ușor să râd, să plâng sau să spun "wow, ce poveste nemaipomenită a avut această serie". Dacă sunteți interesați, puteți să-mi vizitați lista pe <a href="https://myanimelist.net/profile/Felix17" target="_blank" rel="noopener noreferrer" aria-label="Profilul meu MyAnimeList"><img src="/images/mal-icon.svg" alt="MyAnimeList Icon" class="mal-icon"></a>.`,
    topAnimeTitle: 'Top anime-uri preferate:',
    showMore: 'Vezi mai mult >>',
    showLess: '<< Vezi mai puțin',
    navAbout: 'Despre Mine',
    navProjects: 'Proiecte',
    navAnime: 'Lista Anime',
    navContact: 'Contact',
    footerRights: '© 2025-{year} SethDev. Toate drepturile rezervate.',
    footerFollow: 'Contact',
    footerHome: 'Acasă',
    footerThoughts: 'Gândurile mele',
    footerCopied: 'Copiat!',
    footerEmailSend: 'Trimite un email',
    footerEmailCopy: 'Copiaza adresa de email'
  },
  en: {
    title: 'SethDev | About Me',
    metaDescription: 'Find out about both me and my portfolio.',
    ageText: '19 Years',
    bio: `
      <p>Hey! I'm a 19-year-old developer at the start of my journey, captivated by the process of turning creative and unique ideas into reality through lines of code. You might wonder, what made this field captivate me?</p>
      <p>Well, it all started last year, in 2024, on Discord, when I became interested in how bots on this platform are made. After finding out how they are created, how they work, and how to bring them to life, I started making my own, named <span style="color: #fff88b">Saber</span>, which has already been more than a year old.</p>
      <p>I wanted to experiment with as many things as possible and see if I could introduce multiple different commands to it, and it worked. After I no longer had ideas for commands, I started inventing minigames for it to see if something interesting would really come out, and I really liked the result.</p>
      <p>Indeed, at the beginning I didn't understand many things and didn't know how to understand and read errors, but through repetition, I got used to it. After about 10 months of working only with the bot, I thought I should get interested in other things like web development, so since April 2025, I'm still trying to learn and understand JavaScript, CSS, and HTML as best as possible.</p>
      <p>So just the simple idea that I can create anything that comes to my mind, for free just by accumulating experience and knowledge, made me passionate about this field. It's true that sometimes all these things can become tiring at some point, but only if you don't impose healthy limits to relax; if you really like something, you don't give up so easily, even if it's hard. You only give up if you know clearly that that thing is not for you.</p>
      <p>Also, besides all these things, when I'm not caught up in the world of programming, I manage a small community for anime fans on <a href="https://discord.com/invite/7bkkg9a5ee" target="_blank" rel="noopener noreferrer" class="discord-link">Discord</a>.</p>
    `,
    learningTitle: 'Languages I am currently learning:',
    projectsTitle: 'My Projects:',
    animeBio: `Since I mentioned anime, I've watched and still watch quite a few. I like them more than regular movies because they convey much more feelings and experiences to me. They can easily make me laugh, cry, or make me say "wow, what an amazing story this series had." If you're interested, you can visit my list on <a href="https://myanimelist.net/profile/Felix17" target="_blank" rel="noopener noreferrer" aria-label="MyAnimeList Profile"><img src="/images/mal-icon.svg" alt="MyAnimeList Icon" class="mal-icon"></a>.`,
    topAnimeTitle: 'Top favorite anime:',
    showMore: 'Show more >>',
    showLess: '<< Show less',
    navAbout: 'About Me',
    navProjects: 'Projects',
    navAnime: 'Anime List',
    navContact: 'Contact',
    footerRights: '© 2025-{year} SethDev. All rights reserved.',
    footerFollow: 'Contact',
    footerHome: 'Home',
    footerThoughts: 'My Thoughts',
    footerCopied: 'Copied!',
    footerEmailSend: 'Send an email',
    footerEmailCopy: 'Copy email address'
  }
};

export function initLanguage() {
  if (!browser) return;
  
  const savedLang = localStorage.getItem('language');
  if (savedLang && translations[savedLang]) {
    language.set(savedLang);
  } else {
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      language.set(browserLang);
    }
  }
  
  language.subscribe(val => {
    localStorage.setItem('language', val);
  });
}
