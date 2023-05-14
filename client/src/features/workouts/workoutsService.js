import { axios, axiosAuth } from "../http"

const API_URL = "/workouts"

const getWorkouts= async(token) => {
    const response = await axiosAuth(token).get(API_URL + "/all")
    return response.data
}

const postWorkout = async(formData,token) => {
    const response = await axiosAuth(token).post(API_URL + `/add`, formData)
    return response.data
}

const deleteWorkout = async(id,token) => {
    const response = await axiosAuth(token).delete(API_URL + `/delete` + `/${id}`)
    console.log(response.data)
    return response.data
}

const updateWorkout = async(id,data,token) => {
    const response = await axiosAuth(token).patch(API_URL + `/update` + `/${id}`,data)
    return response.data
}

const workoutsService = {
    getWorkouts,
    postWorkout,
    deleteWorkout,
    updateWorkout
}

export default workoutsService