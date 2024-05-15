import { writable } from 'svelte/store';
export const isScrolled = writable(false);

export function handleScroll() {
  isScrolled.set(window.scrollY > 15);
}