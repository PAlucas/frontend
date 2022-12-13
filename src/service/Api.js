import axios from 'axios';

const api = axios.create({
    baseURL: 'https://treina-ai.azurewebsites.net/'
});
 
export default api;