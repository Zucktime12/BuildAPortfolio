// src/lib/declarations.d.ts

// Existing declaration for PNGs
declare module '*.png' {
  const src: string;
  export default src;
}

// New declarations for SVGs (for both direct imports and imports with ?url)
declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}