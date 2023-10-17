
import axios from 'axios'
export const axiosClient = axios.create({
    withCredentials:true,
    baseURL:process.env.SERVER_BASE_URL
})