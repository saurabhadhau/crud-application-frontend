import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.78.6.9/',
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default api;
