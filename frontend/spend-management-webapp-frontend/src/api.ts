import axios from 'axios';

const api = axios.create({
    baseURL: __APP_API_URL__,
    withCredentials: true,
    headers: {
        'Api-Key': import.meta.env.VITE_API_KEY
    }
});
export default api;