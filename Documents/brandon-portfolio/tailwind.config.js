/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#1a202c', // Adjust to match your design
        accent: '#ed64a6',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to bottom, #1a202c, #2d3748)',
      },
      transitionDuration: {
        200: '200ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1000: '1000ms'
      },
      transitionTimingFunction: {
        out: 'ease-out',
      },
    },
  },
  plugins: [],
};