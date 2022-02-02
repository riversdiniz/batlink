import axios from 'axios';

export const key = "aa905a0e7b45cbc0cbb7460b1ed73d42bd51ed22";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
