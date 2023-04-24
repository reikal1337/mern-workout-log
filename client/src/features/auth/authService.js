import axios from "../http"

const register = async (userData) => {
    const response = await axios.post("/register", userData)
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

const login = async (userData) => {
    // console.log(userData)
    const response = await axios.post("/login", userData)
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService ={
    register,
    login,
    logout
}

export default authService