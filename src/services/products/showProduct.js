import productsApi from './productsApi';

async function showProduct (id) {
    const response = await productsApi.get(`/products/${id}`)

    return response;
}

export default showProduct;