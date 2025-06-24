<!-- src/lib/components/modal.svelte -->
<script>
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
  
    export let isOpen = false;
    export let project = null;
    export let onClose;
  
    onMount(() => {
      if (isOpen) {
        gsap.from('.modal', { scale: 0.8, opacity: 0, duration: 0.3 });
      }
    });
  </script>
  
  {#if isOpen}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      transition:fade
      on:click={onClose}
    >
      <div
        class="modal bg-white rounded-lg p-6 max-w-lg w-full"
        on:click|stopPropagation
      >
        {#if project}
          <div class="modal-header">
            <h3 class="text-xl font-bold">{project.name}</h3>
          </div>
          <div class="modal-body">
            <img
              class="w-full h-48 object-cover mb-4"
              src="/projects/{project.image}"
              alt={project.name}
            />
            <p class="text-gray-700">{project.desc}</p>
          </div>
          <div class="modal-footer mt-4 flex justify-end gap-2">
            {#if project.havLink}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Click for {project.buttontext}
              </a>
            {/if}
            <button
              on:click={onClose}
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        {/if}
      </div>
    </div>
  {/if}