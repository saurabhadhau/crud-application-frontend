import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.39.223.100/',
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default api;
