<script lang="ts">
    import { DotLottiePlayer } from '@lottiefiles/dotlottie-svelte';
    export let player: any;
  </script>
  
  <DotLottiePlayer
    src="/SpaceDev-Animation.lottie"
    autoplay={false}
    loop={true}
    bind:player
    style="width: 350px; height: 350px;"
  />