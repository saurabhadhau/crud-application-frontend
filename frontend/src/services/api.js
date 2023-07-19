import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.35.238.17/',
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default api;
