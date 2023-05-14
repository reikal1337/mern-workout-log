import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5000",
   
})

const httpAuth = (token) => {
    const http = axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return http
}

export {http as axios, httpAuth as axiosAuth}