import productsApi from './productsApi';

async function createNewProduct ({ nome, descricao, preco }) {
    const response = await productsApi.post("/products", {
        nome,
        descricao,
        preco
    })

    return response;
}

export default createNewProduct;