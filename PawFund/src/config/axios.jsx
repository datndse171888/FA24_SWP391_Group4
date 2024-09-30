import axios from 'axios';

const baseURL = 'https://reqres.in/';

const api = axios.create({
    baseURL: baseURL
});

export default api;