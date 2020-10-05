import { writable } from 'svelte/store';

function createProducts() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        fetch: () => set([
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "01"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "02"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "03"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "04"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "05"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "06"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "07"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "08"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "09"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "10"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "11"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "12"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "13"
            },
            {
                name: "Camisa",
                description: "A blue t-shirt",
                price: "14,90",
                id: "14"
            },

        ])
    }
}

export const products = createProducts();