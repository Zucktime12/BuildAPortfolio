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
      const icons = document.querySelectorAll('.about-icon');
      console.log(`Found ${icons.length} .about-icon elements`);
      if (icons.length === 0) {
        console.warn('No .about-icon elements found');
        return;
      }
  
      gsap.set(icons, { opacity: 0 });
  
      gsap.to(icons, {
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        onStart: () => console.log('About animation started'),
        onComplete: () => console.log('About animation completed')
      });
  
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });
</script>
  
<section class="about">
    <div class="about-container">
      <h2 class="about-heading">About Me</h2>
      <p class="text-center max-w-2xl mx-auto mb-8">
        With 8+ years of experience as a web developer, I specialize in crafting <strong>custom websites</strong>, 
        providing <strong>Shopify support</strong>, integrating <strong>APIs and CRMs</strong>, 
        executing seamless <strong>site migrations</strong>, and optimizing for <strong>SEO</strong>. 
        Let’s build a website that drives conversions and grows your business.
      </p>
      <div class="about-icons">
        {#each services as service}
          <div class="about-icon" title={service.name}>
            <i class="fas fa-{service.icon} text-4xl text-accent mb-4"></i>
            <h3 class="text-lg font-semibold text-white">{service.name}</h3>
            <p class="text-sm text-gray-300">{service.description}</p>
          </div>
        {/each}
      </div>
      <a href="#contact" class="button mt-8">Get Started Today</a>
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
          "name": "Your Name",
          "description": "Experienced web developer offering custom website development, Shopify support, web integrations, site migrations, and SEO optimization."
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
      position: relative;
      overflow: hidden;
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
    @keyframes border-glow {
      0% { border-image-source: linear-gradient(45deg, #FFD700, #FF4500, #FFD700); }
      50% { border-image-source: linear-gradient(45deg, #FF4500, #FFD700, #FF4500); }
      100% { border-image-source: linear-gradient(45deg, #FFD700, #FF4500, #FFD700); }
    }
</style>