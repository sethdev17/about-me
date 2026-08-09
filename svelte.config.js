import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';

const useDocker = process.env.USE_DOCKER === '1' || process.env.ADAPTER === 'node';

const adapter = useDocker
	? adapterNode({
			out: 'build-node'
		})
	: adapterCloudflare({
			routes: {
				include: ['/*'],
				exclude: ['<build>', '<files>', '<prerendered>']
			}
		});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],
	kit: {
		adapter
	}
};

export default config;
