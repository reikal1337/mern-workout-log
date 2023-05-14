import { axios, axiosAuth } from "../http"

const API_URL = "/global/exercises"

const getExercieses = async(token) => {
    
    const response = await axiosAuth(token).get(API_URL + "/all")
    return response.data
    //action.payload.data.exercises
}

const serachExercieses = async(serachQuery,token) => {
    const response = await axiosAuth(token).get(API_URL + `?name=${serachQuery.name}&bodypart=${serachQuery.bodypart}`)
    return response.data
}

const saveExercies = async(exerciseId,token) => {
    const response = await axiosAuth(token).post(API_URL + `/save/${exerciseId}`)
    return response.data
}




const globalExercisesService = {
    getExercieses,
    serachExercieses,
    saveExercies
}

export default globalExercisesService