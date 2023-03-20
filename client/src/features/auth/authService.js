import axios from "../http"

const API_URL = '/register'

//Register user

const register  = async (userData) => {
    console.log(JSON.stringify(userData))
    const response = await axios.post(JSON.stringify(userData))
    if(response.data){
        localStorage.setItem("user", response.data)
    }

    return response.data
}

const authService ={
    register
}

export default authService