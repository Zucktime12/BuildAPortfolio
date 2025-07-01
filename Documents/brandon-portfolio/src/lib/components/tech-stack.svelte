<script lang="ts">
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { onMount, tick } from 'svelte';
  
    gsap.registerPlugin(ScrollTrigger);
  
    // Import SVGs using Vite's static asset handling
    const icons = import.meta.glob('../assets/icons/*.svg', { as: 'url', eager: true });
  
    interface TechItem {
      name: string;
      icon: string;
      color: string;
      colorDark: string;
    }
  
    const techStack: TechItem[] = [
      { name: 'JavaScript', icon: icons['../assets/icons/javascript.svg'] || '', color: '#21543f', colorDark: '#1A3B2B' },
      { name: 'HTML', icon: icons['../assets/icons/html5.svg'] || '', color: '#E34F26', colorDark: '#CC4622' },
      { name: 'Tailwind', icon: icons['../assets/icons/tailwindcss.svg'] || '', color: '#06B6D4', colorDark: '#0E7490' },
      { name: 'PHP', icon: icons['../assets/icons/php.svg'] || '', color: '#777BB4', colorDark: '#6A6E9F' },
      { name: 'WordPress', icon: icons['../assets/icons/wordpress.svg'] || '', color: '#21759B', colorDark: '#1D6688' },
      { name: 'GitHub', icon: icons['../assets/icons/github.svg'] || '', color: '#181717', colorDark: '#121212' },
      { name: 'Sass', icon: icons['../assets/icons/sass.svg'] || '', color: '#CC6699', colorDark: '#B85C8A' },
      { name: 'jQuery', icon: icons['../assets/icons/jquery.svg'] || '', color: '#0769AD', colorDark: '#065C99' },
      { name: 'React', icon: icons['../assets/icons/react.svg'] || '', color: '#61DAFB', colorDark: '#55C4E3' },
      { name: 'TypeScript', icon: icons['../assets/icons/typescript.svg'] || '', color: '#3178C6', colorDark: '#2B6BB0' },
      { name: 'Svelte', icon: icons['../assets/icons/svelte.svg'] || '', color: '#FF3E00', colorDark: '#E63600' },
      { name: 'Shopify', icon: icons['../assets/icons/shopify.svg'] || '', color: '#95BF47', colorDark: '#7BAF2E' },
    ];
  
    const topRow = techStack.slice(0, 6);
    const bottomRow = techStack.slice(6, 12);
  
    onMount(async () => {
      console.log('Tech Stack section mounted');
      await tick();

      const chars = document.querySelectorAll('.tech-heading .char');
      if (chars.length === 0) {
        console.warn('No .char elements found in tech-heading');
      } else {
        console.log(`Found ${chars.length} .char elements in tech-heading`);
        gsap.fromTo(
          chars,
          { opacity: 0, y: 100, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.tech-heading',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            onStart: () => console.log('Tech heading animation started'),
            onComplete: () => console.log('Tech heading animation completed'),
          }
        );
      }
  
      const techItems = document.querySelectorAll('.tech-item');
      if (techItems.length === 0) {
        console.warn('No .tech-item elements found');
      } else {
        console.log(`Found ${techItems.length} .tech-item elements`);
        gsap.from(techItems, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.tech-stack',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
  
        techItems.forEach((item, index) => {
          const tech = techStack[index];
          if (!tech) {
            console.warn(`No tech data found for item at index ${index}`);
            return;
          }
          const techButton = item.querySelector('.tech-button');
          const techIcon = item.querySelector('.tech-icon');
          const techLabel = item.querySelector('.tech-label');
          const techSide = item.querySelector('.tech-side');
          const techBottom = item.querySelector('.tech-bottom');
  
          if (!techButton || !techIcon || !techLabel || !techSide || !techBottom) {
            console.warn(`Missing elements for tech item: ${tech.name}`);
            return;
          }
  
          item.addEventListener('mouseenter', () => {
            gsap.to(techButton, { background: tech.color, duration: 0.5 });
            gsap.to(techIcon, { filter: 'invert(100%)', duration: 0.5 });
            gsap.to(techLabel, { color: '#fff', duration: 0.5 });
            gsap.to(techSide, { background: tech.colorDark, duration: 0.5 });
            gsap.to(techBottom, { background: tech.color, duration: 0.5 });
          });
          item.addEventListener('mouseleave', () => {
            gsap.to(techButton, { background: '#fff', duration: 0.5 });
            gsap.to(techIcon, { filter: 'invert(0%)', duration: 0.5 });
            gsap.to(techLabel, { color: '#262626', duration: 0.5 });
            gsap.to(techSide, { background: '#b1b1b1', duration: 0.5 });
            gsap.to(techBottom, { background: '#b1b1b1', duration: 0.5 });
          });
        });
      }
  
      return () => {
        console.log('Tech Stack unmounted, cleaning up ScrollTrigger');
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });
  </script>
  
  <svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet" />
  </svelte:head>
  
  <section class="tech-stack min-h-screen flex items-center justify-center">
    <div class="tech-stack-container max-w-7xl mx-auto">
        <div class="flex justify-center">
            <h3 class="tech-heading section-title font-bold text-white text-center mb-20">
                {#each 'Tech Stack'.split('') as char}
                <span class="inline-block char" style={char === ' ' ? 'width: 10px;' : ''}>{char}</span>
                {/each}
            </h3>
        </div>
      <div class="tech-grid flex flex-col gap-16">
        <ul class="tech-list top-row grid grid-cols-6 gap-2 justify-center">
          {#each topRow as tech}
            <li class="tech-item list-none m-0" style="transform: rotate(-30deg);">
              <div class="tech-button flex items-center w-[210px] h-[80px] bg-white text-left pl-5 no-underline transform skew-x-[25deg] transition-all duration-500 shadow-[-20px_20px_10px_rgba(0,0,0,0.5)] relative hover:translate-x-5 hover:-translate-y-[15px] hover:shadow-[-50px_50px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={tech.icon}
                  class="tech-icon w-10 h-10 transition-[filter] duration-500"
                  alt={tech.name}
                  style="filter: invert(0%);"
                  on:error={() => console.error(`Failed to load ${tech.icon}`)}
                />
                <span class="tech-label text-base ml-4 text-[#262626] tracking-[4px] transition-colors duration-500"> - {tech.name}</span>
                <div class="tech-side absolute top-[10px] -left-5 h-full w-5 bg-[#b1b1b1] transform skew-y-[-45deg] transition-colors duration-500"></div>
                <div class="tech-bottom absolute -bottom-5 -left-[10px] h-5 w-full bg-[#b1b1b1] transform skew-x-[-45deg] transition-colors duration-500"></div>
              </div>
            </li>
          {/each}
        </ul>
        <ul class="tech-list bottom-row grid grid-cols-6 gap-2 justify-center">
          {#each bottomRow as tech}
            <li class="tech-item list-none m-0" style="transform: rotate(-30deg);">
              <div class="tech-button flex items-center w-[210px] h-[80px] bg-white text-left pl-5 no-underline transform skew-x-[25deg] transition-all duration-500 shadow-[-20px_20px_10px_rgba(0,0,0,0.5)] relative hover:translate-x-5 hover:-translate-y-[15px] hover:shadow-[-50px_50px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={tech.icon}
                  class="tech-icon w-10 h-10 transition-[filter] duration-500"
                  alt={tech.name}
                  style="filter: invert(0%);"
                  on:error={() => console.error(`Failed to load ${tech.icon}`)}
                />
                <span class="tech-label text-base ml-4 text-[#262626] tracking-[4px] transition-colors duration-500"> - {tech.name}</span>
                <div class="tech-side absolute top-[10px] -left-5 h-full w-5 bg-[#b1b1b1] transform skew-y-[-45deg] transition-colors duration-500"></div>
                <div class="tech-bottom absolute -bottom-5 -left-[10px] h-5 w-full bg-[#b1b1b1] transform skew-x-[-45deg] transition-colors duration-500"></div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
  
  <style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  
    .tech-item {
      transform: rotate(-30deg);
    }
    .tech-button {
      transform: skewX(25deg);
    }
    .tech-side {
      transform: skewY(-45deg);
    }
    .tech-bottom {
      transform: skewX(-45deg);
    }
  </style>