<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollToPlugin, ScrambleTextPlugin } from 'gsap/all';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollToPlugin, ScrambleTextPlugin);

  onMount(() => {
    console.log('Hero mounted, initializing DotLottie player');

    gsap.to('.hero-title', {
      duration: 2,
      scrambleText: {
        text: 'Crafting Digital Excellence',
        chars: 'abcdefghijklmnopqrstuvwxyz0123456789',
        speed: 0.3,
        revealDelay: 0.5,
      },
      ease: 'none',
      onStart: () => console.log('Hero title scramble animation started'),
      onComplete: () => console.log('Hero title scramble animation completed'),
    });

    const description = document.querySelector('.hero-description');
    if (description) {
      const words = description.textContent?.split(' ') || [];
      description.innerHTML = words.map(word => `<span class="desc-word">${word}</span>`).join(' ');
      gsap.to('.desc-word', {
        duration: 1.5,
        scrambleText: {
          text: (i, el) => el.textContent || '',
          chars: 'abcdefghijklmnopqrstuvwxyz',
          speed: 0.2,
          revealDelay: 0.8,
        },
        stagger: 0.1,
        ease: 'none',
        delay: 1,
        onStart: () => console.log('Hero description scramble animation started'),
        onComplete: () => console.log('Hero description scramble animation completed'),
      });
    }

    gsap.from('.scroll-down', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 2,
      ease: 'elastic.out(1, 0.5)',
    });
    gsap.to('.scroll-arrow', {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: 'power2.inOut',
    });
    gsap.to('.scroll-down', {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'power1.inOut',
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
      <h1 class="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center sm:text-left mb-4">
        Crafting Digital Excellence
      </h1>
      <p class="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-xs sm:max-w-md lg:max-w-lg mx-auto sm:mx-0">
        Building innovative web solutions that drive business success with expertise in custom websites and Shopify integrations.
      </p>
    </div>
    <div class="lottie-container">
      <dotlottie-player
        src="https://lottie.host/d167671e-dea1-48b7-b1f3-1ace8679f99d/Y7ZlU5GCHj.lottie"
        background="transparent"
        speed="1"
        class="w-full max-w-[90vw] h-auto lg:h-[500px]"
        loop
        autoplay
        on:error={(e) => console.error('DotLottiePlayer error:', e.detail)}
      ></dotlottie-player>
    </div>
    <button
      class="scroll-down mt-4 sm:mt-6 text-white text-base sm:text-lg flex items-center mx-auto px-8 py-4 sm:px-6 sm:py-3"
      on:click={scrollToAbout}
      aria-label="Scroll to About section"
    >
      Discover More
      <svg class="scroll-arrow ml-2 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </button>
  </div>
</section>

<style>
  .hero {
    @apply z-20 relative;
  }
  .hero-container {
    @apply flex flex-col items-center justify-center min-h-screen text-center z-10 relative pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12;
  }
  .hero-text {
    @apply mb-[-4rem] sm:mb-[-6rem] lg:mb-[-7rem] z-20;
  }
  .hero-title, .hero-description {
    @apply text-white;
  }
  .desc-word {
    @apply inline-block mr-1;
  }
  .lottie-container {
    @apply mt-2 z-10;
  }
  .scroll-down {
    @apply relative rounded-full font-semibold bg-[rgba(8,8,28,0.8)];
  }
  .scroll-arrow {
    @apply text-white;
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-title, .hero-description, .scroll-down, .scroll-arrow {
      animation: none !important;
      transition: none !important;
    }
  }
</style>

<svelte:head>
  <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
</svelte:head>