import axios from "axios";
import { logout, reset } from "./auth/authSlice";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
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
            console.log("Logout")
            const dispatch = useDispatch()
            const navigate = useNavigate()

            dispatch(logout())
            dispatch(reset())
            navigate("/login")
        }
    }
    )
    return api
}

export {api as axios, apiAuth as axiosAuth}