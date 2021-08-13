import axios from 'axios'

const api = axios.create({
    baseURL: 'https://despachando.herokuapp.com'
})



export default { api};