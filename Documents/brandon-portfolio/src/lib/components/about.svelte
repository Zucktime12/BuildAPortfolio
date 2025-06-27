<script lang="ts">
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { onMount, tick } from 'svelte';
  
    gsap.registerPlugin(ScrollTrigger);
  
    const services = [
      {
        name: 'Website Development',
        icon: 'code',
        description: 'Custom websites built with WordPress, SvelteKit, or React, tailored to your brand.',
        keywords: 'custom website development, WordPress themes, SvelteKit portfolio'
      },
      {
        name: 'Shopify Support',
        icon: 'cart-shopping',
        description: 'Expert Shopify setup, theme customization, and app integrations for e-commerce success.',
        keywords: 'Shopify migration, Shopify development, e-commerce solutions'
      },
      {
        name: 'Web Integrations',
        icon: 'plug',
        description: 'Seamless API, CRM, and payment gateway integrations to streamline your business.',
        keywords: 'web integration services, API development, payment gateway integration'
      },
      {
        name: 'Site Migration',
        icon: 'arrows-rotate',
        description: 'Smooth migrations from Magento, WooCommerce, or others to Shopify with zero downtime.',
        keywords: 'website migration, Shopify migration experts, 301 redirects'
      },
      {
        name: 'SEO Optimization',
        icon: 'magnifying-glass-chart',
        description: 'Boost rankings with SEO audits, keyword strategies, and performance optimization.',
        keywords: 'SEO optimization, Google Search Console, website performance'
      }
    ];
  
    onMount(async () => {
      console.log('About section mounted');
      await tick();
      
      // Heading animation (matches hero)
      gsap.from('.about-heading', {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onStart: () => console.log('About heading animation started'),
        onComplete: () => console.log('About heading animation completed'),
      });

      // Paragraph animation
      gsap.from('.about-text', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Icon animation
      const icons = document.querySelectorAll('.about-icon');
      if (icons.length === 0) {
        console.warn('No .about-icon elements found');
      } else {
        console.log(`Found ${icons.length} .about-icon elements`);
        gsap.fromTo(
          icons,
          { opacity: 0, rotation: -10, y: 20 },
          {
            opacity: 1,
            rotation: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.about',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            onStart: () => console.log('Icon animation started'),
            onComplete: () => console.log('Icon animation completed'),
          }
        );
        // Hover effect
        icons.forEach(icon => {
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
          });
          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
          });
        });
      }
  
      return () => {
        console.log('About unmounted, cleaning up ScrollTrigger');
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });
</script>

<section class="about">
  <div class="about-container">
    <h1 class="about-heading">About Me</h1>
    <p class="about-text text-center max-w-2xl mx-auto">
      I’m Brandon Zucker, a Full Stack Developer with over 8 years of experience transforming ideas into high-performing digital solutions. Specializing in <strong>custom websites</strong>, <strong>Shopify e-commerce</strong>, <strong>API integrations</strong>, <strong>site migrations</strong>, and <strong>SEO optimization</strong>, I deliver results that drive conversions and elevate brands. From startups to established businesses, I’ve helped clients achieve success with tailored, scalable websites. Let’s collaborate to build a solution that grows your business and captivates your audience.
    </p>
    <div class="about-icons">
      {#each services as service}
        <div class="about-icon" title={service.name} role="button" tabindex="0" aria-label={`Learn more about ${service.name}`}>
          <i class="fas fa-{service.icon} text-4xl text-accent mb-4"></i>
          <h3 class="text-lg font-semibold text-white">{service.name}</h3>
          <p class="text-sm text-gray-300">{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "Person",
        "name": "Brandon Zucker",
        "description": "Experienced Full Stack Developer offering custom website development, Shopify support, web integrations, site migrations, and SEO optimization."
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Custom Website Development",
          "description": "Building tailored websites using WordPress, SvelteKit, or React."
        },
        {
          "@type": "Offer",
          "name": "Shopify Support",
          "description": "Expert Shopify setup, theme customization, and app integrations."
        },
        {
          "@type": "Offer",
          "name": "Web Integrations",
          "description": "Seamless API, CRM, and payment gateway integrations."
        },
        {
          "@type": "Offer",
          "name": "Site Migration",
          "description": "Smooth migrations to Shopify with 301 redirects and zero downtime."
        },
        {
          "@type": "Offer",
          "name": "SEO Optimization",
          "description": "SEO audits, keyword strategies, and performance optimization."
        }
      ]
    }
  </script>
</svelte:head>

<style>
  .about-heading {
    @apply text-white font-bold mb-12;
    font-size: clamp(32px, 6vw, 48px);
  }
  .about-icon {
    @apply p-4 w-[18%] text-center rounded-lg relative;
    transition: transform 0.3s ease;
  }
  .about-icon::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, #FFD700, #FF4500, #FFD700) 1;
    animation: border-glow 2s linear infinite;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .about-icon:hover::before {
    opacity: 1;
  }
  .about-icon:focus {
    @apply outline-none ring-2 ring-accent;
  }
  @keyframes border-glow {
    0% { border-image-source: linear-gradient(45deg, #FFD700, #FF4500, #FFD700); }
    50% { border-image-source: linear-gradient(45deg, #FF4500, #FFD700, #FF4500); }
    100% { border-image-source: linear-gradient(45deg, #FFD700, #FF4500, #FFD700); }
  }
  @media (max-width: 640px) {
    .about-icon {
      @apply w-[45%] my-4;
    }
  }
  @media (max-width: 480px) {
    .about-icon {
      @apply w-full my-6;
    }
  }
</style>