import { writable } from 'svelte/store';

export const showModal = writable(false);
export const selectedProject = writable(null);