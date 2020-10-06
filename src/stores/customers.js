import { writable } from 'svelte/store';

function createCustomers() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        fetch: () => set([
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "01"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "02"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "03"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "04"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "05"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "06"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "07"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "08"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "09"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "10"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "11"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "12"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "13"
            },
            {
                name: "Pedro",
                email: "pedrolages@mail.com",
                id: "14"
            },
        ])
    }
}

export const customers = createCustomers();