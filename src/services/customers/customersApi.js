import axios from 'axios';

const customersApi = axios.create("localhost:3000");

export default customersApi;