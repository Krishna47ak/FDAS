import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fdas-vn6e.onrender.com/'
})

export default instance;