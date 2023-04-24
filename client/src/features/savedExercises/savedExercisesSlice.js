import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import globalExercisesService from "./savedExercisesService"


const initialState = {
    savedExercises: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getExercieses = createAsyncThunk(
    "exercises/all",
    async(_,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await globalExercisesService.getExercieses(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const serachExercieses = createAsyncThunk(
    "exercises/serach",
    async(serachQuery,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await globalExercisesService.serachExercieses(serachQuery,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)


export const exercisesSlice = createSlice({
    name: "globalExercises",
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
            .addCase(getExercieses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getExercieses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.exercises = action.payload.exercises
            })
            .addCase(getExercieses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.Exercises = action.payload.exercises
            })
            .addCase(serachExercieses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(serachExercieses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.exercises = action.payload
            })
            .addCase(serachExercieses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.Exercises = action.payload.exercises
            })
    }
})

export const { reset } = exercisesSlice.actions
export default exercisesSlice.reducer

