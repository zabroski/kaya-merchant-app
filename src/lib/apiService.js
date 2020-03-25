import axios from 'axios'

const BASE_URL = process.env.API_URL || 'http://localhost:3001/'

const JWT_TOKEN = localStorage.GETITEM('TOKEN')
const axiosClient = axios.creare({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `bearer ${JWT_TOKEN}`
    }
})