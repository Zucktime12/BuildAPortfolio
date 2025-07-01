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
        // Update these paths to reflect their actual location in src/
        // Vite will hash them and put them in a build directory,
        // so you reference them by their source path here for precaching.
        'src/lib/assets/*.jpg',
        'src/lib/assets/icons/*.svg', // <-- IMPORTANT: Update this line
        'src/lib/assets/projects/*.png',
        'src/lib/assets/projects/*.jpg'
      ],
      manifest: {
        name: 'Brandon Portfolio',
        short_name: 'Portfolio',
        icons: [
          {
            src: '/android-chrome-192x192.png', // Assuming these are in `static`
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png', // Assuming these are in `static`
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
  // This is good and tells Vite to treat SVGs as assets when imported.
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg']
});