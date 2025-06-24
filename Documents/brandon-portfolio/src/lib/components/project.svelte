<!-- src/lib/components/project.svelte -->
<script>
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
  
    export let details;
    const dispatch = createEventDispatcher();
  
    onMount(() => {
      gsap.from(`.project-${details.id}`, { scale: 0.9, opacity: 0, duration: 0.5 });
    });
  
    function handleOpenModal() {
      dispatch('openModal', details);
    }
  </script>
  
  <li class="project project-{details.id}">
    <div
      class="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
      on:click={handleOpenModal}
      role="button"
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && handleOpenModal()}
    >
      <img
        class="w-full h-48 object-cover"
        src="lib/assets/projects/{details.image}"
        alt={details.name}
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <p class="text-white text-lg font-semibold">{details.name}</p>
      </div>
    </div>
    <div class="mt-2 text-center">
      <p class="text-sm text-gray-600">{details.tag}</p>
    </div>
  </li>