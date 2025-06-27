<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  onMount(() => {
    console.log('Header mounted');

    // Title animation
    gsap.from('.header-logo', {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
      onStart: () => console.log('Title animation started'),
      onComplete: () => console.log('Title animation completed'),
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

    return () => {
      console.log('Header unmounted');
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });
</script>

<header class="header">
  <div class="header-container">
    <div class="header-home">
      <a href="#home" class="header-logo">
        <h1>Brandon Zucker: Full Stack Developer</h1>
      </a>
    </div>
    <nav class="header-navigation">
      {#each navLinks as link}
        <a href={link.href} class="nav-link">{link.name}</a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .header-logo {
    @apply text-white text-[24px] font-bold no-underline;
  }
  .header-navigation {
    @apply flex items-center justify-center gap-2;
  }
  .nav-link {
    @apply text-white text-[16px] font-semibold px-3 py-2 no-underline relative z-10;
  }
</style>

<svelte:head>
  <style>
    @media (prefers-reduced-motion: reduce) {
      .header-logo, .nav-link {
        animation: none !important;
        transition: none !important;
      }
    }
  </style>
</svelte:head>