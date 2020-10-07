import ordersApi from './ordersApi';

async function createNewOrder ({ products, token }) {
    const response = await ordersApi.post("/orders", {
        products
    }, {
        headers: {
            "Authorization": token
        }
    })

    return response;
}

export default createNewOrder;