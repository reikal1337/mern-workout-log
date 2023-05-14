import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import workoutLogsService from "./workoutLogsService"


const initialState = {
    workoutLogs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const getExercieses = createAsyncThunk(//Not used yet
    "workoutLogs/all",
    async(_,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await savedExercisesService.getExercieses(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const postExerciese = createAsyncThunk(
    "workoutLogs/add",
    async(formData,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await workoutLogsService.postExerciese(formData,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const publishExerciese = createAsyncThunk(//Not used yet
    "workoutLogs/publish",
    async(id,thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await savedExercisesService.publishExerciese(id,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteExerciese = createAsyncThunk(//Not used yet
    "workoutLogs/delete",
    async(id,thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await savedExercisesService.deleteExerciese(id,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const removeExerciese = createAsyncThunk(//Not used yets
    "workoutLogs/remove",
    async(id,thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await savedExercisesService.removeExerciese(id,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

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
        .addCase(getExercieses.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.savedExercises = action.payload.savedExercises
        })
        .addMatcher(
            isAnyOf(
                getExercieses.pending,
                postExerciese.pending,
                publishExerciese.pending,
                deleteExerciese.pending,
                removeExerciese.pending,
                 ),
             (state) => {
                state.isLoading = true
                }
            )
        .addMatcher(
            isAnyOf(
                getExercieses.rejected,
                postExerciese.rejected,
                publishExerciese.rejected,
                deleteExerciese.rejected,
                removeExerciese.rejected,
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
                postExerciese.fulfilled,
                publishExerciese.fulfilled,
                deleteExerciese.fulfilled,
                removeExerciese.fulfilled,
                    ),
                (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.savedExercises = action.payload.savedExercises
                    state.message = action.payload.message
                }
            )
    }
})

export const { reset } = workoutLogs.actions
export default workoutLogs.reducer

