// Calea: src/lib/stores.js
import { writable } from 'svelte/store';

// Starea globală pentru limba selectată.
// Orice componentă se poate abona la schimbările ei.
export const language = writable('ro');