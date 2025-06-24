<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<script>
//   import { gsap } from 'gsap';
//   import { onMount } from 'svelte';

//   onMount(() => {
//     gsap.to('.box', { x: 100, duration: 1 });
//     return () => gsap.killTweensOf('.box'); // Cleanup
//   });


  import Hero from '$lib/components/hero.svelte';
  import About from '$lib/components/about.svelte';
  import Projects from '$lib/components/projects.svelte';
  import Contact from '$lib/components/contact.svelte';
  import Footer from '$lib/components/footer.svelte';
</script>

<main>
  <Hero />
  <About />
  <Projects />
  <Contact />
  <Footer />
</main>

<!-- <div class="box" style="width: 50px; height: 50px; background: blue;"></div> -->