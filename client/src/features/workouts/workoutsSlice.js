import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import workoutsService from "./workoutsService"


const initialState = {
    workouts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const getWorkouts = createAsyncThunk(
    "workouts/all",
    async(_,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await workoutsService.getExercieses(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

// export const postExerciese = createAsyncThunk(
//     "savedexercises/add",
//     async(formData,thunkAPI) =>{
//         try {
//             const token = thunkAPI.getState().auth.user.token
//             return await savedExercisesService.postExerciese(formData,token)
//         } catch (error) {
//             const message = (error.response && error.response.data && error.response.data.message) 
//         || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

// export const publishExerciese = createAsyncThunk(
//     "savedexercises/publish",
//     async(id,thunkAPI) => {
//         try {
//             const token = thunkAPI.getState().auth.user.token
//             return await savedExercisesService.publishExerciese(id,token)
//         } catch (error) {
//             const message = (error.response && error.response.data && error.response.data.message) 
//         || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

// export const deleteExerciese = createAsyncThunk(
//     "savedexercises/delete",
//     async(id,thunkAPI) => {
//         try {
//             const token = thunkAPI.getState().auth.user.token
//             return await savedExercisesService.deleteExerciese(id,token)
//         } catch (error) {
//             const message = (error.response && error.response.data && error.response.data.message) 
//         || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

// export const removeExerciese = createAsyncThunk(
//     "savedexercises/remove",
//     async(id,thunkAPI) => {
//         try {
//             const token = thunkAPI.getState().auth.user.token
//             return await savedExercisesService.removeExerciese(id,token)
//         } catch (error) {
//             const message = (error.response && error.response.data && error.response.data.message) 
//         || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

export const workoutsSlice = createSlice({
    name: "workouts",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess= false
            state.isLoading = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWorkouts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWorkouts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.workouts = action.payload.workouts
                state.message = action.payload.message
            })
            .addCase(getWorkouts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            })
    }
})

export const { reset } = savedExerciesesSlice.actions
export default savedExerciesesSlice.reducer
