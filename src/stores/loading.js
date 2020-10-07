import { writable } from 'svelte/store';

function createLoading() {
    const { subscribe, set, update } = writable(true);

    return {
        subscribe,
        toggle: () => { update(state => !state) }
    }
}

export const cart = createLoading();