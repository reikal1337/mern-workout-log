import { axiosAuth } from "../http"

const API_URL = "/workoutlogs"

const getWorkouts= async(token) => {//notUsed
    const response = await axiosAuth(token).get(API_URL + "/all")
    return response.data
}

const postWorkoutLog = async(id,token) => {
    const response = await axiosAuth(token).post(API_URL + `/add/${id}`)
    return response.data
}

const deleteWorkout = async(id,token) => {//notUsed
    const response = await axiosAuth(token).delete(API_URL + `/delete` + `/${id}`)
    console.log(response.data)
    return response.data
}

const updateWorkout = async(id,data,token) => {//notUsed
    const response = await axiosAuth(token).patch(API_URL + `/update` + `/${id}`,data)
    return response.data
}

const workoutLogsService = {
    getWorkouts,
    postWorkoutLog,
    deleteWorkout,
    updateWorkout
}

export default workoutLogsService