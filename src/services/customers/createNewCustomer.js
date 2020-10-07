import customersApi from './customersApi';

async function createNewCustomer ({ nome, email }) {
    const response = await customersApi.post("/clients", {
        nome,
        email
    })

    return response;
}

export default createNewCustomer;