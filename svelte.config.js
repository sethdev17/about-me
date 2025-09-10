import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare'; // <-- 1. Importă adaptorul

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // 2. Folosește adaptorul în configurație
    adapter: adapter({
      // Vezi https://kit.svelte.dev/docs/adapter-cloudflare pentru opțiuni
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    })
  },
  preprocess: vitePreprocess()
};

export default config;