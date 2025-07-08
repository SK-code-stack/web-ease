import axios from "axios";

export const BASE_URL = 'https://webeasebackend-production.up.railway.app'

const api = axios.create({
    baseURL: 'https://webeasebackend-production.up.railway.app'
})

export default api