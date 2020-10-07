import productsApi from './productsApi';

async function showProducts () {
    const response = await productsApi.get("/products")

    return response;
}

export default showProducts;