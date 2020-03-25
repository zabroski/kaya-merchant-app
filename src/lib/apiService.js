import axios from 'axios'

const BASE_URL = process.env.API_URL || "http://localhost:3001";

const JWT_TOKEN = localStorage.getItem('token')
const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`

    }
})


export const signUp = async (data) => {

    try {
        console.log('RIGHT HERERRE',data)
        const response = await axiosClient.post('/auth/signup', data)
       
        const { token, deliverer } = response.data
       
        localStorage.setItem('token', token)
        return deliverer
      

    } catch(e) {
        throw e
    }
};