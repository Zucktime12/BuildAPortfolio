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
  
      gsap.from('.about-text', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
  
      gsap.from('.about-icon', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-icons',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
  
      const icons = document.querySelectorAll('.about-icon');
      icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });
  
      return () => {
        console.log('About unmounted, cleaning up ScrollTrigger');
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });
  </script>
  
  <section class="about py-8 sm:py-12" id="about">
    <div class="about-container max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="section-title font-bold text-white text-center mb-8 text-2xl sm:text-3xl lg:text-4xl">About Me</h2>
      <p class="about-text text-center max-w-full sm:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-300">
        I'm Brandon Zucker, a Full Stack Developer with over 8 years of experience transforming ideas into high-performing digital solutions. Specializing in <strong>custom websites</strong>, <strong>Shopify e-commerce</strong>, <strong>API integrations</strong>, <strong>site migrations</strong>, and <strong>SEO optimization</strong>, I deliver results that drive conversions and elevate brands. From startups to established businesses, I’ve helped clients achieve success with tailored, scalable websites. Let’s collaborate to build a solution that grows your business and captivates your audience.
      </p>
      <div class="about-icons grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {#each services as service}
          <div class="about-icon p-6 sm:p-8 text-center rounded-lg relative min-h-[44px]" title={service.name} role="button" tabindex="0" aria-label={`Learn more about ${service.name}`}>
            <i class="fas fa-{service.icon} text-3xl sm:text-4xl text-accent mb-3 sm:mb-4"></i>
            <h3 class="text-base sm:text-lg font-semibold text-white">{service.name}</h3>
            <p class="text-xs sm:text-sm text-gray-300">{service.description}</p>
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
    .about-icon {
      @apply p-6 sm:p-8 text-center rounded-lg relative;
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
  </style>