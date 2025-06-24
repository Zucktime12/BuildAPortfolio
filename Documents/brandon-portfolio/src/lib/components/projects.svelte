<!-- src/lib/components/projects.svelte -->
<script>
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';
    import Project from './project.svelte';
    import myProjects from '$lib/data/myProjects';
  
    let projects = {};
    let selectedProject = null;
    let isModalOpen = false;
  
    onMount(() => {
      projects = myProjects;
      gsap.from('.project', { opacity: 0, y: 20, stagger: 0.2, duration: 0.5 });
    });
  
    function openModal(event) {
      selectedProject = event.detail;
      isModalOpen = true;
    }
  
    function closeModal() {
      isModalOpen = false;
      selectedProject = null;
    }
  </script>
  
  <section id="projects" class="projects bg-gradient-to-b from-gray-200 to-gray-300 py-12">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">My Work!</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each Object.keys(projects) as key}
          <Project details={projects[key]} on:openModal={openModal} />
        {/each}
      </ul>
    </div>
  </section>