import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.27.107:33333'
});

export default api;