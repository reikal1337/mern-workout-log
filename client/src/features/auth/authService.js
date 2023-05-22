import { axios, axiosAuth } from "../http"

const login = async (userData) => {
    // console.log(userData)
    const response = await axios.post("/login", userData)
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

const register = async (userData) => {
    const response = await axios.post("/register", userData)
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

const changePassword = async (token,userData) => {
    // console.log(userData)
    const response = await axiosAuth(token).patch("/changepassword", userData)
    return response.data
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService ={
    register,
    login,
    logout,
    changePassword
}

export default authService