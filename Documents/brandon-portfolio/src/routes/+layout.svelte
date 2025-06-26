<script lang="ts">
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';
  import Header from '$lib/components/header.svelte';
  import '../app.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';

  onMount(() => {
    console.log('Layout mounted');
    const canvas = document.getElementById('starfield') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Starfield canvas not found');
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas resized:', canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Starfield setup
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
        targetY: 0,
      });
    }

    // Mouse position for parallax
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
    });

    // Linear interpolation
    const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
    const lerpFactor = 0.05;

    // Draw and animate stars
    let animationFrameId: number;
    const drawStars = () => {
      if (!ctx) {
        console.error('Canvas context lost');
        return;
      }
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
      animationFrameId = requestAnimationFrame(drawStars);
    };
    console.log('Starting starfield animation');
    drawStars();

    // GSAP twinkling
    stars.forEach(star => {
      gsap.to(star, {
        alpha: Math.random() * 0.7 + 0.3,
        radius: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => {
      console.log('Layout unmounted');
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      gsap.killTweensOf(stars);
    };
  });
</script>

<svelte:head>
  <title>Brandon Zucker: Full Stack Developer</title>
  <meta name="description" content="Portfolio of Brandon Zucker, Full Stack Developer specializing in custom websites and Shopify solutions" />
  <link rel="icon" href="/favicon.ico" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js"></script>
</svelte:head>

<canvas id="starfield" class="starfield"></canvas>
<Header />
<main class="content">
  <slot />
</main>

<style>
  .starfield {
    @apply fixed top-0 left-0 w-full h-full z-[-1] bg-[rgb(8,8,28)];
  }
  .content {
    @apply relative z-10;
  }
</style>