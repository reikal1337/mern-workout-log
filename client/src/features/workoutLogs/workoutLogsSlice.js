import {createSlice, createAsyncThunk, isAnyOf} from "@reduxjs/toolkit"

import workoutLogsService from "./workoutLogsService"


const initialState = {
    workoutLogs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const getWorkoutLogs = createAsyncThunk(//Not used yet
    "workoutLogs/all",
    async(_,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await workoutLogsService.getWorkoutLogs(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const postWorkoutLog = createAsyncThunk(
    "workoutLogs/add",
    async(id,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await workoutLogsService.postWorkoutLog(id,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

// export const publishExerciese = createAsyncThunk(//Not used yet
//     "workoutLogs/publish",
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

// export const deleteExerciese = createAsyncThunk(//Not used yet
//     "workoutLogs/delete",
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

// export const removeExerciese = createAsyncThunk(//Not used yets
//     "workoutLogs/remove",
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

export const workoutLogsSlice = createSlice({
    name: "workoutLogs",
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
        .addCase(getWorkoutLogs.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.workoutLogs = action.payload.workoutLogs
        })
        .addMatcher(
            isAnyOf(
                postWorkoutLog.pending,
                getWorkoutLogs.pending,
                 ),
             (state) => {
                state.isLoading = true
                }
            )
        .addMatcher(
            isAnyOf(
                postWorkoutLog.rejected,
                getWorkoutLogs.rejected,
                    ),
                (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.isSuccess = false
                    state.message = action.payload
                }
            )
        .addMatcher(
            isAnyOf(
                postWorkoutLog.fulfilled,
                    ),
                (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.workoutLogs = action.payload.workoutLogs
                    state.message = action.payload.message
                }
            )
    }
})

export const { reset } = workoutLogsSlice.actions
export default workoutLogsSlice.reducer

