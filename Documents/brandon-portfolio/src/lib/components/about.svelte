<!-- src/lib/components/about.svelte -->
<script lang="ts">
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';
  
    // Import images from src/lib/assets/icons/
    import jsIcon from '$lib/assets/icons/javascript.png';
    import htmlIcon from '$lib/assets/icons/html5.png';
    import cssIcon from '$lib/assets/icons/css3.png';
    import wordpressIcon from '$lib/assets/icons/wordpress.png';
    import gitIcon from '$lib/assets/icons/git.png';
    import sassIcon from '$lib/assets/icons/sass.png';
    import jqueryIcon from '$lib/assets/icons/jquery.png';
    import phpIcon from '$lib/assets/icons/php.png';
    import reactIcon from '$lib/assets/icons/react.png';
  
    // Define the icon type
    interface Icon {
      src: string;
      alt: string;
    }
  
    const techIcons: Icon[] = [
      { src: jsIcon, alt: 'JavaScript' },
      { src: htmlIcon, alt: 'HTML5' },
      { src: cssIcon, alt: 'CSS3' },
      { src: wordpressIcon, alt: 'WordPress' },
      { src: gitIcon, alt: 'Git' },
      { src: sassIcon, alt: 'SASS' },
      { src: jqueryIcon, alt: 'JQuery' },
      { src: phpIcon, alt: 'PHP' }
    ];
  
    const learningIcons: Icon[] = [{ src: reactIcon, alt: 'React' }];
  
    onMount(() => {
      gsap.from('.about', { opacity: 0, y: 20, duration: 0.5 });
      return () => {};
    });
  </script>
  
  <section id="about" class="about bg-gradient-to-b from-gray-100 to-gray-200 py-12">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">About</h2>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1">
          <p class="mb-4">
            After obtaining my bachelor's degree in Accounting in 2013 and working in the industry for three years, I decided to turn my passion for web development into a career.
          </p>
          <p class="mb-4">
            Furthering my knowledge through online courses, literature, and personal projects. Eventually landing several different jobs to hone my skills.
          </p>
          <p>
            Being a developer that is continuing to learn at every opportunity, I have always enjoyed the problem solving aspect of development. I love being able to find multiple solutions for a problem or even multiple ways to build a website from scratch. I hope you will let me prove to you my passion for this career.
          </p>
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-semibold mb-4">Experienced in:</h3>
          <div class="grid grid-cols-4 gap-4 mb-8">
            {#each techIcons as { src, alt }}
              <img {src} {alt} class="w-12 h-12" />
            {/each}
          </div>
          <h3 class="text-xl font-semibold mb-4">Learning:</h3>
          <div class="grid grid-cols-4 gap-4">
            {#each learningIcons as { src, alt }}
              <img {src} {alt} class="w-12 h-12" />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>