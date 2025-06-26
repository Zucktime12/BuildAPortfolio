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
    const title = document.querySelector('.header-logo');
    if (title) {
      const chars = title.textContent?.split('') || [];
      title.innerHTML = chars.map((char, i) => `<span class="title-char" style="--index: ${i}">${char}</span>`).join('');
      gsap.from('.title-char', {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -50 : 50),
        rotation: (i) => (i % 2 === 0 ? -10 : 10),
        scale: 0.8,
        duration: 0.6,
        stagger: 0.03,
        ease: 'power4.out',
        onStart: () => console.log('Title entrance started'),
        onComplete: () => console.log('Title entrance completed'),
      });

      // Gradient outline animation
      const titleGradient = gsap.timeline({ repeat: -1, repeatDelay: 10 });
      titleGradient
        .to('.title-char', {
          textShadow: '0 0 5px #FF4500, 0 0 10px #4B0082',
          duration: 0.5,
          ease: 'power2.in',
        })
        .to('.title-char', {
          textShadow: 'none',
          duration: 0.5,
          ease: 'power2.out',
        }, 1);
    } else {
      console.warn('Header title not found');
    }

    // Nav links animation
    gsap.from('.nav-link', {
      opacity: 0,
      x: (i) => (i % 2 === 0 ? 50 : -50),
      rotation: (i) => (i % 2 === 0 ? 10 : -10),
      scale: 0.8,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power4.out',
      onStart: () => console.log('Nav links entrance started'),
      onComplete: () => console.log('Nav links entrance completed'),
    });

    // Gradient outline for nav links
    const navGradient = gsap.timeline({ repeat: -1, repeatDelay: 10 });
    navGradient
      .to('.nav-link', {
        textShadow: '0 0 5px #FF4500, 0 0 10px #4B0082',
        duration: 0.5,
        ease: 'power2.in',
      })
      .to('.nav-link', {
        textShadow: 'none',
        duration: 0.5,
        ease: 'power2.out',
      }, 1);

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
  .nav-link {
    color: #FFFFFF;
    @apply text-[16px] font-semibold px-3 py-2 no-underline transition-colors duration-150;
  }
</style>

<svelte:head>
  <style>
    @media (prefers-reduced-motion: reduce) {
      .nav-link {
        animation: none !important;
        transition: none !important;
        text-shadow: none !important;
      }
    }
  </style>
</svelte:head>