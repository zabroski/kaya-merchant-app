import axios from 'axios'

const BASE_URL = process.env.API_URL || 'http://localhost:3001/'

const JWT_TOKEN = localStorage.GETITEM('TOKEN')
const axiosClient = axios.creare({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `bearer ${JWT_TOKEN}`
    }
})


export const signUp = async (data) => {
    try{
        const response = await axiosClient.post('/auth/signup', data)
        const { token,merchant } = response.data

    } catch(e) {
        throw e

    }
}