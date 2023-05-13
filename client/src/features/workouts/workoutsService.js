import axios from "../http"

const API_URL = "/workouts"

const getWorkouts= async(token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + "/all", config)
    return response.data
}

const postWorkout = async(formData,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.post(API_URL + `/add`, formData, config)
    console.log(response.data)
    return response.data
}

const deleteWorkout = async(id,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.delete(API_URL + `/delete` + `/${id}`, config)
    console.log(response.data)
    return response.data
}
const updateWorkout = async(id,data,token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.patch(API_URL + `/update` + `/${id}`,data, config)
    console.log(response.data)
    return response.data
}

// const publishExerciese = async(id,token) => {
//     const config ={
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//     }
//     const data = {}
//     const response = await axios.post(API_URL + `/publish` + `/${id}`,data,config)
//     console.log(response.data)
//     return response.data
// }



// const removeExerciese = async(id,token) => {
//     const config ={
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//     }
//     const response = await axios.delete(API_URL + `/remove` + `/${id}`,config)
//     console.log(response.data)
//     return response.data
// }




const workoutsService = {
    getWorkouts,
    postWorkout,
    deleteWorkout,
    updateWorkout
}

export default workoutsService