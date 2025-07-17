<script lang="ts">
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';
  import Header from '$lib/components/header.svelte';
  import '../app.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';

  onMount(() => {
    const canvas = document.getElementById('starfield') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: { x: number; y: number; radius: number; alpha: number; vx: number; vy: number; targetX: number; targetY: number }[] = [];
    const numStars = 150;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        targetX: 0,
        targetY: 0
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
    });

    const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
    const lerpFactor = 0.05;

    const drawStars = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x += canvas.width;
        if (star.x > canvas.width) star.x -= canvas.width;
        if (star.y < 0) star.y += canvas.height;
        if (star.y > canvas.height) star.y -= canvas.height;

        star.targetX = mouseX * star.alpha;
        star.targetY = mouseY * star.alpha;

        star.x = lerp(star.x, star.x + star.targetX, lerpFactor);
        star.y = lerp(star.y, star.y + star.targetY, lerpFactor);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.globalAlpha = star.alpha;
        ctx.fill();
      });
      requestAnimationFrame(drawStars);
    };
    drawStars();

    stars.forEach(star => {
      gsap.to(star, {
        alpha: Math.random() * 0.7 + 0.3,
        radius: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    return () => {
      console.log('Starfield unmounted');
      window.removeEventListener('resize', resizeCanvas);
      gsap.killTweensOf(stars);
    };
  });
</script>

<canvas id="starfield" class="starfield"></canvas>
<Header />
<main class="content">
  <slot />
</main>

<style>
  .starfield {
    @apply fixed top-0 left-0 w-full h-full z-[-1];
  }
  .content {
    @apply relative z-10;
  }
</style>