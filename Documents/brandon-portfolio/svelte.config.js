import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html', // SPA mode
            precompress: true,
        }),
        paths: {
            base: '',
        },
        prerender: {
            entries: ['*'],
        },
        alias: {
            '$lib': 'src/lib',
            '$components': 'src/components',
            '$utils': 'src/utils',
            '$assets': 'src/assets'
        }
    }
};

export default config;