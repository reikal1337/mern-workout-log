import { axios, axiosAuth } from "../http"

const API_URL = "/global/exercises"

const getExercieses = async(query,token) => {
    var response
    if(query === undefined){
        response = await axiosAuth(token).get(API_URL)
        
    }else{
        response = await axiosAuth(token).get(API_URL + `?page=${query.page}&limit=${query.limit}`)
    }
    return response.data
    
}

const serachExercieses = async(serachQuery,token) => {
    const response = await axiosAuth(token).get(API_URL + `/search?name=${serachQuery.name}&bodypart=${serachQuery.bodypart}`)
    console.log(response.data)
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