import { writable } from 'svelte/store';
import { products } from './products.js'
import { customers } from './customers.js'
function createCart() {
    const { subscribe, set, update } = writable({
        customer: undefined,
        products: []
    });

    return {
        subscribe,
        fetch: () => {
            products.fetch();
            customers.fetch();
        },
        changeCustomer: (customer) => {
            update(cart => ({...cart, customer}))
        },
        toggleProduct: (product) => {
            update(cart => {
                const indexOfProductInCart = cart.products.map(p => p.id).indexOf(product.id);
                if(indexOfProductInCart === -1)
                    return ({
                            customer: cart.customer,
                            products: [...cart.products, product]
                    })
                cart.products.splice(indexOfProductInCart, 1)
                return cart;
            })
        },
        resetCart: () => set({
            customer: undefined,
            products: []
        })
    }
}

export const cart = createCart();