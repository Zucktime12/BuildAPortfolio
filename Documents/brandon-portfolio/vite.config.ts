import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		devtoolsJson(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
			  name: 'Brandon Portfolio',
			  short_name: 'Portfolio',
			  theme_color: '#ffffff',
			  icons: [
				{
				  src: '/icon-192.png',
				  sizes: '192x192',
				  type: 'image/png'
				}
			  ]
			}
		  })
	]
});
