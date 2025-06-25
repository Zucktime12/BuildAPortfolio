<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
  import { onMount } from 'svelte';

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  onMount(() => {
    console.log('Header mounted');

    // Staggered link animation
    gsap.from('.nav-link', {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Hover effects
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        console.log('Mouseenter:', link.textContent);
        gsap.to(link, {
          scale: 1.1,
          color: '#ff6f61',
          opacity: 1,
          display: 'inline-block',
          duration: 0.2
        });
      });
      link.addEventListener('mouseleave', () => {
        console.log('Mouseleave:', link.textContent);
        gsap.to(link, {
          scale: 1,
          color: '#ffffff',
          opacity: 1,
          display: 'inline-block',
          duration: 0.2
        });
      });
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (targetId) {
          console.log('Navigating to:', targetId);
          const target = document.getElementById(targetId);
          if (target) {
            gsap.to(window, {
              scrollTo: { y: target, offsetY: 85 },
              duration: 1,
              ease: 'power2.out'
            });
          } else {
            console.warn(`Target section #${targetId} not found`);
            // Fallback: Native scroll
            window.scrollTo({
              top: document.querySelector(`#${targetId}`)?.getBoundingClientRect().top + window.scrollY - 85,
              behavior: 'smooth'
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
        gsap.to('.header', { backgroundColor: 'rgba(10, 10, 35, 0.9)', duration: 0.3 });
        gsap.to('.nav-link', {
          color: '#ffffff',
          opacity: 1,
          display: 'inline-block',
          duration: 0.3
        });
      },
      onLeaveBack: () => {
        console.log('Header scroll triggered: transparent');
        gsap.to('.header', { backgroundColor: 'rgba(10, 10, 35, 0.5)', duration: 0.3 });
        gsap.to('.nav-link', {
          color: '#ffffff',
          opacity: 1,
          display: 'inline-block',
          duration: 0.3
        });
      }
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
        <h1>My Portfolio</h1>
      </a>
    </div>
    <nav class="header-navigation">
      {#each navLinks as link}
        <a href={link.href} class="nav-link">{link.name}</a>
      {/each}
    </nav>
  </div>
</header>