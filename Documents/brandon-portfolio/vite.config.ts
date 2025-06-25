import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    sveltekit(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'lib/assets/*.jpg',
        'lib/assets/icons/*.svg',
        'lib/assets/projects/*.png',
        'lib/assets/projects/*.jpg'
      ],
      manifest: {
        name: 'Brandon Portfolio',
        short_name: 'Portfolio',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '$lib': path.resolve('./src/lib')
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg']
});