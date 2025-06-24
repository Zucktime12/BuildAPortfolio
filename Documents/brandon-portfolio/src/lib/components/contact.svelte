<!-- src/lib/components/contact.svelte -->
<script>
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';
  
    onMount(() => {
      gsap.from('.contact', { opacity: 0, y: 20, duration: 0.5 });
    });
  </script>
  
  <section id="contact" class="contact bg-gray-100 py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">Contact</h2>
      <div class="text-lg mb-4">
        Send me an <a href="mailto:bwzuck12@gmail.com" class="text-blue-500 hover:underline">email</a>, I'd love to hear from you!
      </div>
      <div>
        <p class="text-gray-600">Resume is Available Upon Request</p>
      </div>
    </div>
  </section>