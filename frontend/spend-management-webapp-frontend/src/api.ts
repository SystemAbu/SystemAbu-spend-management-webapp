import axios from 'axios';

const api = axios.create({
    baseURL: __APP_API_URL__,
    withCredentials: true
});
export default api;