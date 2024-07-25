import axios from 'axios'

const BASE_URL = process.env.API_URL ;

const JWT_TOKEN = localStorage.getItem('token')
const axiosClient = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //     'Authorization': `Bearer ${JWT_TOKEN}`

    // }
})


export const signUp = async (data) => {

    try {
        console.log('RIGHT HERERRE',data)
        const response = await axiosClient.post('/auth/signup', data)
       
        const { token,  merchant } = response.data
       
        localStorage.setItem('token', token)
        return  merchant
      

    } catch(e) {
        throw e
    }
};


export const login = async (data) => {
    try {
        const response = await axiosClient.post('/auth/login', data)
        const { token, merchant } = response.data

        await localStorage.setItem('token', token)
        return merchant

    } catch(e) {
        throw e
    }
}


export const createDelivery = async (delivererId) => {
    try {
        const response = await axiosClient.post(`create-delivery/${delivererId}`);
        return response.data

    }catch(e) {
        throw e
    }
}