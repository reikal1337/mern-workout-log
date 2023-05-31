import axios from "axios";
import { logout, reset } from "../features/auth/authSlice";

let store

const setStore = (propStore) => {
    store = propStore
} 

const api = axios.create({
    baseURL: "http://localhost:5000",
   
})

const apiAuth = (token) => {
    const api = axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    api.interceptors.response.use( (response) => response,(error) => {
        if(error.response && error.response.status === 401) {
            store.dispatch(logout())
            store.dispatch(reset())
            
        }
    }
    )

    return api
}

export {
    api as axios,
    apiAuth as axiosAuth,
    setStore
    }