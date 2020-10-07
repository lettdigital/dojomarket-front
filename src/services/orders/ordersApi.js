import axios from 'axios';

const ordersApi = axios.create({
    baseURL: "http://localhost:3333"
});

export default ordersApi;