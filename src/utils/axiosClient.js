
import axios from 'axios'
export const axiosClient = axios.create({
    withCredentials:true,
    baseURL:'https://to-do-server-5ht3.onrender.com/api/v1'
})