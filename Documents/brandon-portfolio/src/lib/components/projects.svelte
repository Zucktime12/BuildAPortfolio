<script lang="ts">
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { writable } from 'svelte/store';
    import { onMount, tick } from 'svelte';
    import Modal from './modal.svelte';
    import myProjects from '$lib/data/myProjects.ts';
  
    gsap.registerPlugin(ScrollTrigger);
  
    // Convert myProjects to array
    const projects = Object.values(myProjects).map(project => ({
      id: project.id,
      title: project.name,
      image: project.image,
      desc: project.desc,
      tags: project.tag.split(', '),
      havLink: project.havLink,
      link: project.link,
      tag: project.tag,
      buttontext: project.buttontext,
    }));
  
    onMount(() => {
      console.log('Projects loaded:', projects.map(p => ({ id: p.id, title: p.title, image: p.image })));
      const projectItems = document.querySelectorAll('.project-item');
      console.log('Project items found:', projectItems.length);
      if (projectItems.length === 0) {
        console.warn('No project items found');
        return;
      }
  
      gsap.set(projectItems, { opacity: 0, y: 50 });
      gsap.to(projectItems, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-list',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
  
      // Escape key handler
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && $selectedProject !== null) {
          closeModal();
        }
      };
      window.addEventListener('keydown', handleKeydown);
  
      return () => {
        console.log('Projects unmounted, cleaning up ScrollTrigger');
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        window.removeEventListener('keydown', handleKeydown);
      };
    });
  
    const selectedProject = writable<{
      id: number;
      title: string;
      image: string;
      desc: string;
      tags: string[];
      havLink: boolean;
      link: string;
      tag: string;
      buttontext: string;
    } | null>(null);
  
    $: console.log('projects.svelte reactive: selectedProject=', $selectedProject?.title);
  
    async function openModal(project) {
      console.log('openModal called, project:', project.title, 'selectedProject before:', $selectedProject?.title);
      $selectedProject = project;
      console.log('Modal opened, selectedProject after:', $selectedProject?.title);
      await tick();
      const modal = document.querySelector('.modal-content');
      if (modal) modal.focus();
    }
  
    async function closeModal() {
      console.log('closeModal called, selectedProject before:', $selectedProject?.title);
      $selectedProject = null;
      await tick();
      console.log('Modal closed, selectedProject after:', $selectedProject);
    }
  
    function handleImageError(event: Event, projectTitle: string) {
      console.error(`Failed to load image for ${projectTitle}: ${event.target.src}`);
      event.target.src = '/fallback.png';
    }
</script>

<section class="projects">
  <div class="projects-container">
    <h2 class="section-title">My Projects</h2>
    <div class="projects-list">
      {#each projects as project}
        <div class="project-item">
          <button
            type="button"
            class="project-button relative rounded-lg shadow-lg w-full h-64 cursor-pointer focus:ring-2 ring-blue-600 transition-all duration-200"
            on:click={() => openModal(project)}
            on:keydown={(e) => ['Enter', 'Space'].includes(e.key) && openModal(project)}
            aria-label="View details for {project.title}"
          >
            <img
              class="project-image"
              src={project.image}
              alt={project.title}
              loading="lazy"
              on:error={(e) => handleImageError(e, project.title)}
            />
            <div class="project-overlay">
              <p class="truncate">{project.title}</p>
            </div>
            <div class="project-tag">
              <p>{project.tag}</p>
            </div>
            <div class="shine-effect"></div>
          </button>
        </div>
      {/each}
    </div>
  </div>

  <Modal isOpen={$selectedProject !== null} project={$selectedProject} on:close={closeModal} />
</section>

<style>
  
</style>