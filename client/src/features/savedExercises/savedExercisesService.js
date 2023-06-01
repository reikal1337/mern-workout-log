import { axiosAuth } from "../apiService"

const API_URL = "/savedexercises"

const getExercieses = async(token) => {
    const response = await axiosAuth(token).get(API_URL + "/all")
    return response.data
}

const postExerciese = async(formData,token) => {
    const response = await axiosAuth(token).post(API_URL + `/add`,formData)
    console.log(response)
    return response.data
}

const publishExerciese = async(id,token) => {
    const response = await axiosAuth(token).post(API_URL + `/publish/${id}`)
    return response.data
}

const deleteExerciese = async(id,token) => {
    const response = await axiosAuth(token).delete(API_URL + `/delete/${id}`)
    return response.data
}

const removeExerciese = async(id,token) => {
    const response = await axiosAuth(token).delete(API_URL + `/remove/${id}`)
    return response.data
}




const savedExercisesService = {
    getExercieses,
    postExerciese,
    publishExerciese,
    deleteExerciese,
    removeExerciese
}

export default savedExercisesService