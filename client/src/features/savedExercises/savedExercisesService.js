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

const serachExercieses = async(serachQuery,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.get(API_URL + `?name=${serachQuery.name}&bodypart=${serachQuery.bodypart}`,config)
    return response.data
}

const postExerciese = async(formData,token) => {
    console.log(formData);
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: formData
    }
    console.log(config)
    const response = await axios.post(API_URL + `/add`,config)
    console.log(response.data)
    return response.data
}




const savedExercisesService = {
    getExercieses,
    serachExercieses,
    postExerciese
}

export default savedExercisesService