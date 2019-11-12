import axios from 'axios'

const authInstance = axios.create({
    baseURL: 'http://some-auth-path.com/auth'
})

export default authInstance