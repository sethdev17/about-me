// Calea: src/lib/stores.js
import { writable } from 'svelte/store';

export const language = writable('ro');

export const currentSection = writable('about');
