import { axiosAuth } from "../apiService"

const API_URL = "/workoutlogs"

const getWorkoutLogs= async(token) => {
    const response = await axiosAuth(token).get(API_URL + "/all")
    return response.data
}

const postWorkoutLog = async(id,token) => {
    const response = await axiosAuth(token).post(API_URL + `/add/${id}`)
    return response.data
}

const deleteWorkoutLog = async(id,token) => {
    const response = await axiosAuth(token).delete(API_URL + `/delete` + `/${id}`)
    return response.data
}

const submitWorkoutLog = async(id,data,token) => {
    const response = await axiosAuth(token).patch(API_URL + `/submit` + `/${id}`, data)
    return response.data
}

const workoutLogsService = {
    getWorkoutLogs,
    postWorkoutLog,
    deleteWorkoutLog,
    submitWorkoutLog
}

export default workoutLogsService