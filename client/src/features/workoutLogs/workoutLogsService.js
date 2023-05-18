import { axiosAuth } from "../http"

const API_URL = "/workoutlogs"

const getWorkoutLogs= async(token) => {
    const response = await axiosAuth(token).get(API_URL + "/all")
    console.log(response.data)
    return response.data
}

const postWorkoutLog = async(id,token) => {
    const response = await axiosAuth(token).post(API_URL + `/add/${id}`)
    console.log(response.data)
    return response.data
}

const deleteWorkoutLog = async(id,token) => {
    console.log("Del service")
    const response = await axiosAuth(token).delete(API_URL + `/delete` + `/${id}`)
    console.log(response.data)
    return response.data
}

const updateWorkout = async(id,data,token) => {//notUsed
    const response = await axiosAuth(token).patch(API_URL + `/update` + `/${id}`,data)
    return response.data
}

const workoutLogsService = {
    getWorkoutLogs,
    postWorkoutLog,
    deleteWorkoutLog,
    updateWorkout
}

export default workoutLogsService