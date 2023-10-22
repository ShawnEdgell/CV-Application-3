// sectionStore.js
import { writable } from 'svelte/store';

// Initialize the open section state with 'generalInfo'
export const openSection = writable('generalInfo');
