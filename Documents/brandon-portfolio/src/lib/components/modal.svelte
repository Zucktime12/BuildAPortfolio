<script lang="ts">
    export let isOpen: boolean;
    export let project: {
      id: number;
      title: string;
      image: string;
      desc: string;
      tags: string[];
      havLink: boolean;
      link: string;
      tag: string;
      buttontext: string;
    } | null;
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function close() {
      dispatch('close');
    }
  
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        close();
      }
    }
  </script>
  
  {#if isOpen && project}
    <div class="modal" role="dialog" aria-labelledby="modal-title" on:keydown={handleKeydown}>
      <div class="modal-content">
        <button class="close-button" on:click={close} aria-label="Close modal">×</button>
        <h2 id="modal-title">{project.title}</h2>
        <img src={project.image} alt={project.title} class="modal-image" />
        <p>{project.desc}</p>
        <div class="tags">
          {#each project.tags as tag}
            <span>{tag}</span>
          {/each}
        </div>
        {#if project.havLink}
          <a href={project.link} target="_blank" rel="noopener noreferrer">{project.buttontext}</a>
        {/if}
      </div>
    </div>
  {/if}
  
  <style>
    .modal {
      @apply fixed inset-0 bg-black/50 flex items-center justify-center z-50;
    }
    .modal-content {
      @apply bg-[rgba(8,8,28,0.9)] p-6 rounded-lg max-w-lg w-full mx-4;
    }
    .close-button {
      @apply absolute top-2 right-2 text-white text-xl cursor-pointer bg-transparent border-none;
    }
    .modal-image {
      @apply w-full h-auto rounded-md mt-4;
    }
    .tags {
      @apply flex flex-wrap gap-2 mt-4;
    }
    .tags span {
      @apply bg-gray-700 text-white px-2 py-1 rounded text-sm;
    }
    a {
      @apply mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
    }
  </style>