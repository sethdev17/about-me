// Use guarded/dynamic imports so the editor or npm installs that skip optional native
// dependencies (like on Windows) don't crash when loading this config.
let vitePreprocess;
let adapter;

try {
  const mod = await import('@sveltejs/vite-plugin-svelte');
  vitePreprocess = mod.vitePreprocess;
} catch (e) {
  // Fallback noop preprocess to keep tooling happy in environments where the plugin
  // can't be loaded (e.g., missing native optional deps during install).
  vitePreprocess = () => [];
}

try {
  const mod = await import('@sveltejs/adapter-cloudflare');
  adapter = mod.default;
} catch (e) {
  // Provide a lightweight adapter stub so svelte-kit won't fail when the real
  // adapter package isn't available in the current environment. CI/deploy should
  // still install the correct adapter binary.
  adapter = () => ({
    name: 'stub-adapter'
  });
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    })
  },
  preprocess: vitePreprocess()
};

export default config;