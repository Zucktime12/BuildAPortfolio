<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { onMount, tick } from 'svelte';

  gsap.registerPlugin(ScrollTrigger);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/your-profile',
      icon: 'linkedin',
      bgColor: '#0A66C2',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/your-profile',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-icon"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.641.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.482C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z"/></svg>',
      bgColor: '#800080',
    },
  ];

  onMount(async () => {
    console.log('Contact section mounted');
    await tick();

    const chars = document.querySelectorAll('.contact-heading .char');
    if (chars.length === 0) {
      console.warn('No .char elements found in contact-heading');
    } else {
      console.log('Found ${chars.length} .char elements in contact-heading');
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
            trigger: '.contact-heading',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    gsap.from('.contact-button', {
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-buttons',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    const socialIcons = document.querySelectorAll('.contact-social a');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.2, rotation: 10, duration: 0.3, ease: 'power2.out' });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
      });
    });

    return () => {
      console.log('Contact unmounted');
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });
</script>

<section class="contact" id="contactbas">
  <div class="contact-container max-w-7xl mx-auto px-4">
    <h5 class="contact-heading section-title font-bold text-white text-center mb-6">
      {#each 'Contact Me'.split('') as char}
      <span class="inline-block char" style={char === ' ' ? 'width: 10px;' : ''}>{char}</span>
      {/each}
    </h5>
    <p class="contact-text text-lg text-white max-w-md mx-auto">
      Ready to bring your project to life? Reach out to discuss your vision or connect with me on social media.
    </p>
    <div class="contact-buttons flex justify-center gap-4 mb-6">
      <a href="mailto:your.email@example.com" class="contact-button px-6 py-3 text-white text-base font-semibold rounded-full bg-[var(--accent)] hover:scale-105 transition-transform duration-300">Email Me</a>
      <a href="tel:+1234567890" class="contact-button px-6 py-3 text-white text-base font-semibold rounded-full bg-[var(--accent)] hover:scale-105 transition-transform duration-300">Call Me</a>
    </div>
    <div class="contact-social flex justify-center gap-6">
      {#each socialLinks as link}
        <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} style="background: {link.bgColor};" class="w-12 h-12 flex items-center justify-center rounded-full transition-transform duration-300">
          {#if link.name === 'LinkedIn'}
            <i class="fab fa-{link.icon} text-2xl text-white"></i>
          {:else}
            {@html link.icon}
          {/if}
        </a>
      {/each}
    </div>
  </div>
</section>

<svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
</svelte:head>

<style>
  .contact-heading .char {
    @apply inline-block;
  }
  .contact-button {
    @apply px-6 py-3 text-white text-base font-semibold rounded-full;
  }
  .contact-social a {
    @apply w-12 h-12 flex items-center justify-center rounded-full;
  }
  .contact-social .svg-icon {
    @apply w-8 h-8 fill-white;
  }
  .contact-social i {
    @apply text-white;
  }
</style>