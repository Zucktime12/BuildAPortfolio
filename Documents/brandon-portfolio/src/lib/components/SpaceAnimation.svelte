<!-- <script lang="ts">
    import { gsap } from 'gsap';
    import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';
    import { onMount } from 'svelte';
  
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
  
    let isMobile = window.innerWidth <= 600;
  
    onMount(() => {
      console.log('SpaceAnimation mounted');
      if (!isMobile) {
        const spaceship = document.querySelector('.spaceship');
        if (spaceship) {
          gsap.set(spaceship, { opacity: 0, scale: 0.5 });
  
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.hero',
              start: 'top 80%',
              toggleActions: 'play none none reset',
            },
          });
  
          tl.to(spaceship, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          })
            .to(
              spaceship,
              {
                motionPath: {
                  path: [
                    { x: 0, y: 0 },
                    { x: 100, y: 50 },
                    { x: 0, y: 200 },
                  ],
                  curviness: 1.5,
                },
                duration: 2,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
              },
              '-=0.3'
            )
            .to(
              '.scroll-prompt',
              {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
              },
              '-=1.5'
            );
        } else {
          console.warn('Spaceship element not found');
        }
      } else {
        const prompt = document.querySelector('.scroll-prompt-mobile');
        if (prompt) {
          gsap.to(prompt, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'power2.out',
          });
        }
      }
  
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });
  </script>
  
  <div class="space-animation absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
    {#if !isMobile}
      <svg class="spaceship" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 10L40 40H10L25 10Z" fill="#FFD700" stroke="#FFFFFF" stroke-width="2" />
        <circle cx="25" cy="40" r="5" fill="#FF4500" />
      </svg>
      <div class="scroll-prompt opacity-0 text-white text-center mt-4">
        <p>Explore My Work</p>
        <a href="#projects" class="text-accent underline">Scroll Down</a>
      </div>
    {:else}
      <svg class="scroll-prompt-mobile opacity-0" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L25 15H5L15 5Z" fill="#FFFFFF" />
      </svg>
    {/if}
  </div>
  
  <style>
    .space-animation {
      pointer-events: none;
    }
    .scroll-prompt a {
      pointer-events: auto;
    }
  </style> -->