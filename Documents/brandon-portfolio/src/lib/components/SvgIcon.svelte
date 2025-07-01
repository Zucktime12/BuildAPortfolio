<script lang="ts">
    export let src: string;
    export let size: string = 'w-10 h-10';
    export let alt: string = 'icon';
  
    let svgContent: string | null = null;
    let loadingError: boolean = false;
  
    import { onMount } from 'svelte';
  
    onMount(async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        svgContent = await response.text();
      } catch (error) {
        console.error(`Error loading SVG from ${src}:`, error);
        loadingError = true;
        svgContent = null;
      }
    });
  </script>
  
  {#if svgContent}
    <div class="svg-container {size}" aria-label={alt}>
      {@html svgContent}
    </div>
  {:else if loadingError}
    <span class="text-red-500">Error loading icon</span>
  {:else}
    <div class="{size} flex items-center justify-center text-gray-400">Loading...</div>
  {/if}
  
  <style>
    .svg-container :global(svg) {
      width: 100%;
      height: 100%;
      fill: currentColor !important; /* THIS IS THE KEY FOR FILL */
      transition: fill 0.5s ease;
    }
  </style>