<script lang="ts">
    import { gsap } from 'gsap';
    import { onMount, createEventDispatcher } from 'svelte';
  
    interface ProjectDetails {
      id: number;
      name: string;
      image: string;
      desc: string;
      havLink: boolean;
      link: string;
      tag: string;
      buttontext: string;
    }
  
    export let details: ProjectDetails;
    const dispatch = createEventDispatcher<{ openModal: ProjectDetails }>();
  
    let imageSrc: string = details.image;
    console.log(`Image path for ${details.name}:`, imageSrc);
  
    onMount(() => {
      gsap.from(`.project-${details.id}`, { scale: 0.9, opacity: 0, duration: 0.5 });
      return () => {};
    });
  
    function handleOpenModal() {
      console.log('Dispatching openModal:', details);
      dispatch('openModal', details);
    }
  
    function handleImageError() {
      console.error(`Image failed to render: ${imageSrc} for project ${details.name}`);
      imageSrc = '/fallback.png';
    }
  </script>
  
  <li class="project project-{details.id}">
    <button
      type="button"
      class="relative overflow-hidden rounded-lg shadow-lg w-full focus:ring-2 ring-blue-500"
      on:click={handleOpenModal}
      on:keydown={(e) => ['Enter', 'Space'].includes(e.code) && handleOpenModal()}
      aria-label={`View details for ${details.name}`}
    >
      <img
        class="w-full h-48 object-cover rounded-lg"
        src={imageSrc}
        alt={details.name}
        on:error={handleImageError}
      />
      <div class="project-overlay">
        <p class="text-white text-lg font-semibold">{details.name}</p>
      </div>
    </button>
    <div class="mt-2 text-center">
      <p class="text-sm text-gray-600">{details.tag}</p>
    </div>
  </li>