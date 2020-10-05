import { writable } from 'svelte/store';

function createOrders() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        fetch: () => set([
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "01"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "02"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "03"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "04"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "05"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "06"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "07"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "08"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "09"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "10"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "11"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "12"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "13"
            },
            {
                customerName: "Pedro Lages",
                numberOfProducts: 7,
                total: "1000.00",
                id: "14"
            },

        ])
    }
}

export const orders = createOrders();