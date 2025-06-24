<script>
    import { gsap } from 'gsap';
    import { onMount, onDestroy } from 'svelte';
    import { page } from '$app/stores';

    let scrollingLock = false;

    function handleScroll() {
      scrollingLock = window.scrollY > 100;
    }

    function smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }

    onMount(() => {
      window.addEventListener('scroll', handleScroll);
      gsap.from('header', { y: -50, opacity: 0, duration: 0.5 });
      return () => window.removeEventListener('scroll', handleScroll);
    });
  </script>

  <header
    class="{scrollingLock ? 'bg-gray-800 shadow-lg' : 'bg-transparent'} text-white p-4 fixed w-full top-0 z-10 transition-all duration-300"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex flex-col">
        <a href="/" on:click|preventDefault={() => smoothScroll('#home')}>
          <h1 class="text-xl font-bold">Brandon Zucker</h1>
          <h2 class="text-sm">Front-End Developer</h2>
        </a>
      </div>
      <nav class="flex space-x-4">
        {#each [{href: '#about', label: 'About'}, {href: '#projects', label: 'Projects'}, {href: '#contact', label: 'Contact'}] as {href, label}}
          <a
            href={href}
            class="hover:text-gray-300"
            class:active={$page.url.hash === href}
            on:click|preventDefault={() => smoothScroll(href)}
          >
            {label}
          </a>
        {/each}
      </nav>
    </div>
  </header>

  <style>
    .active {
      @apply text-yellow-400;
    }
  </style>