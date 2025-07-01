<script lang="ts">
  import Hero from '$lib/components/hero.svelte';
  import About from '$lib/components/about.svelte';
  import TechStack from '$lib/components/tech-stack.svelte';
  import Projects from '$lib/components/projects.svelte';
  import Contact from '$lib/components/contact.svelte';
  import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
  <title>Brandon Zucker - Full Stack Developer</title>
  <meta name="description" content="Brandon Zucker, Full Stack Developer specializing in custom websites, Shopify integrations, and SEO optimization.">
  <meta name="keywords" content="full stack developer, web development, Shopify, SEO, SvelteKit, React, WordPress">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet">
</svelte:head>

<main>
  <section id="home">
    <Hero />
  </section>
  <section id="about">
    <About />
  </section>
  <section id="tech-stack">
    <TechStack />
  </section>
  <section id="projects">
    <Projects />
  </section>
  <section id="contact">
    <Contact />
  </section>
  <Footer />
</main>