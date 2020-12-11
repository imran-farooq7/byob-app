import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://byob-app-3145d-default-rtdb.firebaseio.com/'
})

export default instance