import { axios, axiosAuth } from "../apiService"

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
    const response = await axiosAuth(token).patch("/changepassword", userData)
    console.log(response.data)
    return response.data
}

const getUserData = async (token) => {
    const response = await axiosAuth(token).get("/profile")
    console.log(response.data)
    return response.data
}

const logout = () => {
    console.log("Servide log out")
    localStorage.removeItem("user")
}

const authService ={
    register,
    login,
    logout,
    changePassword,
    getUserData
}

export default authService