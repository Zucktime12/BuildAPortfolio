<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  let isMenuOpen = false;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const titleText = "Brandon Zucker: Full Stack Developer";

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  onMount(() => {
    console.log('Header mounted');

    // Comet-like title animation
    gsap.from('.header-title .title-char', {
      opacity: 0,
      x: () => gsap.utils.random(-50, 50),
      y: () => gsap.utils.random(-100, -50),
      rotation: () => gsap.utils.random(-45, 45),
      duration: 1,
      stagger: 0.05,
      ease: 'power4.out',
      onStart: () => console.log('Header title comet animation started'),
      onComplete: () => console.log('Header title comet animation completed'),
    });

    // Nav links animation
    gsap.from('.nav-link', {
      opacity: 0,
      x: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      onStart: () => console.log('Nav links animation started'),
      onComplete: () => console.log('Nav links animation completed'),
    });

    // Nav link click handling
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          console.log('Navigating to:', targetId);
          const target = document.getElementById(targetId);
          if (target) {
            gsap.to(window, {
              scrollTo: { y: target, offsetY: 85 },
              duration: 0.8,
              ease: 'power4.out',
            });
          } else {
            console.warn(`Target section #${targetId} not found`);
            window.scrollTo({
              top: document.querySelector(`#${targetId}`)?.getBoundingClientRect().top + window.scrollY - 85,
              behavior: 'smooth',
            });
          }
        }
        isMenuOpen = false; // Close menu on link click
      });
    });

    // Scroll-triggered header background
    ScrollTrigger.create({
      start: 'top 100px',
      onEnter: () => {
        console.log('Header scroll triggered: opaque');
        gsap.to('.header', { backgroundColor: 'rgba(8, 8, 28, 0.9)', duration: 0.3 });
      },
      onLeaveBack: () => {
        console.log('Header scroll triggered: transparent');
        gsap.to('.header', { backgroundColor: 'rgba(8, 8, 28, 0.7)', duration: 0.3 });
      },
    });

    // Close menu on resize to tablet/desktop
    const handleResize = () => {
      if (window.innerWidth >= 480 && isMenuOpen) {
        isMenuOpen = false;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      console.log('Header unmounted');
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<header class="header bg-[rgba(8,8,28,0.7)] text-white py-4 px-4 sm:px-6 fixed top-0 w-full z-50">
  <div class="header-container max-w-7xl sm:max-w-4xl mx-auto flex items-center justify-between">
    <div class="header-home">
      <a href="#home" class="header-logo">
        <h1 class="header-title text-center sm:text-left text-xl sm:text-2xl font-bold">
          {#each titleText.split('') as char}
            <span class="title-char">{char}</span>
          {/each}
        </h1>
      </a>
    </div>
    <button
      class="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
      on:click={toggleMenu}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      <span class="w-8 h-1 bg-white mb-1 transition-transform duration-300 {isMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
      <span class="w-8 h-1 bg-white mb-1 transition-opacity duration-300 {isMenuOpen ? 'opacity-0' : ''}"></span>
      <span class="w-8 h-1 bg-white transition-transform duration-300 {isMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
    </button>
    <nav class="header-navigation hidden sm:flex items-center justify-center gap-2">
      {#each navLinks as link}
        <a href={link.href} class="nav-link text-base font-semibold px-4 py-3 no-underline hover:text-accent transition-colors">{link.name}</a>
      {/each}
    </nav>
    {#if isMenuOpen}
      <nav class="nav-mobile absolute top-full left-0 w-full bg-[rgba(8,8,28,0.95)] flex flex-col items-center py-4 sm:hidden">
        {#each navLinks as link}
          <a href={link.href} class="nav-link text-base font-semibold py-3 hover:text-accent transition-colors">{link.name}</a>
        {/each}
      </nav>
    {/if}
  </div>
</header>

<style>
  .header {
    @apply fixed top-0 w-full z-50;
  }
  .header-container {
    @apply max-w-7xl sm:max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between;
  }
  .header-logo {
    @apply text-white text-[24px] font-bold no-underline;
  }
  .header-title {
    @apply flex flex-wrap text-center sm:text-left;
  }
  .title-char {
    @apply inline-block text-white;
    white-space: pre;
  }
  .header-navigation {
    @apply hidden sm:flex items-center justify-center gap-2;
  }
  .nav-link {
    @apply text-white text-base font-semibold px-4 py-3 no-underline relative z-10;
  }
  .nav-mobile {
    @apply absolute top-full left-0 w-full bg-[rgba(8,8,28,0.95)] flex flex-col items-center py-4;
  }
</style>

<svelte:head>
  <style>
    @media (prefers-reduced-motion: reduce) {
      .header-title, .nav-link {
        animation: none !important;
        transition: none !important;
      }
    }
  </style>
</svelte:head>