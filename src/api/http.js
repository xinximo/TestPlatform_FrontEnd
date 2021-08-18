import axios from 'axios'
const instance = axios.create({
    // headers: {
    //     'Content-Type':'application/json'
    // },
    // baseURL:"http://stuq.ceshiren.com:8089/",
    baseURL:"http://localhost:5000/",
    timeout: 3000,
})
export default instance