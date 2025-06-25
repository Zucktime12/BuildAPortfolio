<script lang="ts">
  import Hero from '$lib/components/hero.svelte';
  import About from '$lib/components/about.svelte';
  import Projects from '$lib/components/projects.svelte';
  import Contact from '$lib/components/contact.svelte';
  import Footer from '$lib/components/footer.svelte';
</script>

<main>
  <section id="home">
    <Hero />
  </section>
  <section id="about">
    <About />
  </section>
  <section id="projects">
    <Projects />
  </section>
  <section id="contact">
    <Contact />
  </section>
  <Footer />
</main>