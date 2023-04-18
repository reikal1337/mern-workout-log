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




const globalExercisesService = {
    getExercieses,
    serachExercieses
}

export default globalExercisesService