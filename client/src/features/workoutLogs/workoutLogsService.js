import { axios,axiosAuth } from "../http"

const API_URL = "/workoutlogs"

const getExercieses = async(token) => {//Not used yet
    const response = await axiosAuth(token).get(API_URL + "/all")
    return response.data
}

const postExerciese = async(formData,token) => {//Not used yet
    const response = await axiosAuth(token).post(API_URL + `/add`,formData)
    return response.data
}

const publishExerciese = async(id,token) => {//Not used yet
    const response = await axiosAuth(token).post(API_URL + `/publish` + `/${id}`)
    return response.data
}

const deleteExerciese = async(id,token) => {//Not used yet
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.delete(API_URL + `/delete` + `/${id}`,config)
    return response.data
}

const removeExerciese = async(id,token) => {//Not used yet
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.delete(API_URL + `/remove` + `/${id}`,config)
    return response.data
}




const workoutLogsService = {
    getExercieses,
    postExerciese,
    publishExerciese,
    deleteExerciese,
    removeExerciese
}

export default workoutLogsService