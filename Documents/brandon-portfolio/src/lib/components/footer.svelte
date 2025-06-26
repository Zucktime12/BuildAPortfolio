<script lang="ts">
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';
  
    const year = new Date().getFullYear();
  
    onMount(() => {
      console.log('Footer mounted, initializing animations');
      gsap.from('.footer', { opacity: 0, duration: 0.5 });
      return () => {
        console.log('Footer unmounted');
      };
    });
  </script>
  
  <footer class="footer bg-gray-800 text-white py-4">
    <div class="container mx-auto text-center">
      <a href="/" class="hover:text-gray-300">Brandon | {year}</a>
    </div>
  </footer>