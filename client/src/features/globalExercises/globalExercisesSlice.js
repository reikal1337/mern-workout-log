import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import globalExercisesService from "./globalExercisesService"

const initialState = {
    exercises: [],
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

export const exercisesSlice = createSlice({
    name: "globalExercises",
    initialState,
    reducers: {
        reset: (state) => initialState
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
    }
})

export const { reset } = exercisesSlice.actions
export default exercisesSlice.reducer

