import axios from "../http"

const API_URL = "/savedexercises"

const getExercieses = async(token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + "/all",config)
    return response.data
    //action.payload.data.exercises
}

const postExerciese = async(formData,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.post(API_URL + `/add`,formData,config)
    console.log(response.data)
    return response.data
}

const publishExerciese = async(id,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const data = {}
    const response = await axios.post(API_URL + `/publish` + `/${id}`,data,config)
    console.log(response.data)
    return response.data
}

const deleteExerciese = async(id,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.delete(API_URL + `/delete` + `/${id}`,config)
    console.log(response.data)
    return response.data
}

const removeExerciese = async(id,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.delete(API_URL + `/remove` + `/${id}`,config)
    console.log(response.data)
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