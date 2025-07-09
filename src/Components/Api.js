import axios from "axios";

export const BASE_URL = 'https://webeasebackend-production.up.railway.app'
// export const BASE_URL = 'http://127.0.0.1:8000'

const api = axios.create({
    baseURL: 'https://webeasebackend-production.up.railway.app'
    // baseURL: 'http://127.0.0.1:8000'
})

export default api