<script lang="ts">
    import { gsap } from 'gsap';
    import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
    import { onMount } from 'svelte';
  
    gsap.registerPlugin(ScrollToPlugin);
  
    onMount(() => {
      console.log('Hero mounted, initializing DotLottie player');
  
      gsap.from('.hero-title .title-char', {
        opacity: 0,
        scale: 0.7,
        rotation: 10,
        duration: 0.7,
        stagger: 0.03,
        ease: 'back.out(1.7)',
        onStart: () => console.log('Title animation started'),
      });
  
      gsap.from('.hero-description', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.3,
        ease: 'power4.out',
      });
  
      gsap.from('.scroll-down', {
        opacity: 0,
        y: 20,
        scale: 0.8,
        duration: 0.6,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
  
      function scrollToAbout() {
        console.log('scrollToAbout called');
        const about = document.querySelector('#about');
        if (about) {
          gsap.to(window, {
            scrollTo: { y: about, offsetY: 85 },
            duration: 0.8,
            ease: 'power4.out',
          });
        } else {
          console.warn('About section not found');
        }
      }
  
      return () => {
        console.log('Hero unmounted');
      };
    });
  
    export let scrollToAbout: () => void;
  </script>
  
  <section class="hero">
    <div class="hero-container">
      <div class="hero-text">
        <h1 class="hero-title text-4xl md:text-5xl font-bold text-white mb-4">
          {#each "Crafting Digital Excellence".split('') as char}
            <span class="title-char">{char}</span>
          {/each}
        </h1>
        <p class="hero-description text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
          Building innovative web solutions that drive business success with expertise in custom websites and Shopify integrations.
        </p>
      </div>
      <div class="lottie-container">
        <dotlottie-player
          src="https://lottie.host/d167671e-dea1-48b7-b1f3-1ace8679f99d/Y7ZlU5GCHj.lottie"
          background="transparent"
          speed="1"
          style="width: 500px; height: 500px; margin: 0 auto;"
          loop
          autoplay
          on:error={(e) => console.error('DotLottiePlayer error:', e.detail)}
        ></dotlottie-player>
      </div>
      <button
        class="scroll-down mt-6 text-white text-lg flex items-center mx-auto"
        on:click={scrollToAbout}
        aria-label="Scroll to About section"
      >
        <span>Discover More</span>
        <i class="fas fa-chevron-down ml-2"></i>
      </button>
    </div>
  </section>
  
  <style>
    .hero {
      @apply z-20 relative;
    }
    .hero-container {
      @apply flex flex-col items-center justify-center min-h-screen text-center z-10 relative pt-20;
    }
    .hero-text {
      @apply mb-[-4rem];
    }
    .hero-title {
      @apply flex flex-wrap justify-center;
    }
    .title-char {
      @apply inline-block;
      white-space: pre;
    }
    .lottie-container {
      @apply mt-2;
    }
    @media (max-width: 640px) {
      .lottie-container {
        width: 300px !important;
        height: 300px !important;
      }
      .hero-title {
        @apply text-3xl;
      }
      .hero-description {
        @apply text-base max-w-xs;
      }
      .hero-container {
        @apply pt-16;
      }
    }
  </style>
  
  <svelte:head>
    <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
    <style>
      @media (prefers-reduced-motion: reduce) {
        .hero-title, .hero-description, .scroll-down {
          animation: none !important;
          transition: none !important;
        }
      }
    </style>
  </svelte:head>