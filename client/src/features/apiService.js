import axios from "axios";
import { logout, reset } from "../features/auth/authSlice";

let store

const setStore = (propStore) => {
    store = propStore
} 

const api = axios.create({
    baseURL: "https://workoutlog-api-onrx.onrender.com",
   
})

const apiAuth = (token) => {
    const api = axios.create({
        baseURL: "https://workoutlog-api-onrx.onrender.com",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    api.interceptors.response.use((response) => {
        return response
    }
    ,(error) => {
        if(error.response && error.response.status === 401) {
            store.dispatch(logout())
            store.dispatch(reset())
            
        }
        throw error
    }
    )

    return api
}

export {
    api as axios,
    apiAuth as axiosAuth,
    setStore
    }