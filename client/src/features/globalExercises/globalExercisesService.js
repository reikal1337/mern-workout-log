import axios from "../http"

const API_URL = "/global/exercises"

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

const saveExercies = async(exerciseId,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const data ={}
    const response = await axios.post(API_URL + `/save/${exerciseId}`,data,config)
    console.log(response.data)
    return response.data
}




const globalExercisesService = {
    getExercieses,
    serachExercieses,
    saveExercies
}

export default globalExercisesService