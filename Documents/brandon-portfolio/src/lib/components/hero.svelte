<!-- src/lib/components/hero.svelte -->
<script>
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';
//   import SpaceAnimation from './SpaceAnimation.svelte';

  onMount(() => {
    gsap.from('.hero', { opacity: 0, duration: 1 });
  });
</script>
<section id="home" class="hero bg-gray-100 h-screen flex items-center justify-center">
  <div class="container mx-auto text-center">
    <h1 class="text-5xl font-bold text-gray-800">Welcome to My Portfolio</h1>
    <p class="text-lg text-gray-600 mt-4">Explore my work below</p>
    <!-- <SpaceAnimation /> -->
  </div>
</section>