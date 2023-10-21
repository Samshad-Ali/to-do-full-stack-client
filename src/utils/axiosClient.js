
import axios from 'axios'
export const axiosClient = axios.create({
    withCredentials:true,
    baseURL:'http://localhost:4200/api/v1'
})