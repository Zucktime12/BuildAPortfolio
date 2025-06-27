<!-- modal.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    export let isOpen: boolean;
    export let project: { id: number; title: string; image: string; desc: string; tags: string[]; havLink: boolean; link: string; tag: string; buttontext: string } | null;
  
    $: console.log('[Modal] Reactive: isOpen=', isOpen, 'project=', project?.title);
  
    onMount(() => {
      console.log('[Modal] Mounted: isOpen=', isOpen, 'project=', project?.title);
      return () => {
        console.log('[Modal] Unmounted');
      };
    });
  
    function closeModal() {
      console.log('[Modal] closeModal called: project=', project?.title);
      isOpen = false;
      dispatchEvent(new CustomEvent('close'));
    }
  </script>
  
  {#if isOpen && project}
    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">{project.title}</h2>
          <button class="modal-close" on:click={closeModal} aria-label="Close modal">×</button>
        </div>
        <div class="modal-body">
          <img class="modal-image" src={project.image} alt={project.title} on:error={(e) => e.target.src = '/fallback.png'} />
          <div class="project-tags">
            {#each project.tags as tag}
              <span class="project-tag-inner">{tag}</span>
            {/each}
          </div>
          <p class="modal-desc">{project.desc}</p>
        </div>
        <div class="modal-footer">
          {#if project.havLink}
            <a href={project.link} class="modal-button modal-button-primary" target="_blank" rel="noopener">{project.buttontext}</a>
          {/if}
          <button class="modal-button modal-button-secondary-svelte" on:click={closeModal}>Close</button>
        </div>
      </div>
    </div>
  {:else}
    <!-- <div>[Modal] Not rendered: isOpen={isOpen}, project={project?.title}</div> -->
  {/if}
  
  <style>
    .project-tag-inner {
      display: inline-block;
      background: linear-gradient(45deg, #FFD700, #FF6F61, #1E90FF, #FFD700);
      background-size: 400%;
      color: #0a0c1b;
      padding: 4px 8px;
      margin: 4px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      animation: gradientRotate 3s linear infinite;
    }
    @keyframes gradientRotate {
      0% { background-position: 0% 50%; }
      100% { background-position: 400% 50%; }
    }
  </style>