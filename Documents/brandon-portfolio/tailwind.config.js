// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif']
        },
        colors: {
          primary: '#5c5c5c',
          accent: 'rgba(255,35,98,1)',
          gradient: 'rgba(27,151,212,1)'
        }
      }
    },
    plugins: []
  };