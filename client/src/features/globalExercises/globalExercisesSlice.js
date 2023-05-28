import {createSlice, createAsyncThunk, isAnyOf} from "@reduxjs/toolkit"

import globalExercisesService from "./globalExercisesService"


const initialState = {
    exercises: [],
    page: null,
    pageMax: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getExercieses = createAsyncThunk(
    "exercises/all",
    async(query,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await globalExercisesService.getExercieses(query,token)
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

export const saveExercies = createAsyncThunk(
    "exercises/save",
    async(exerciseId,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await globalExercisesService.saveExercies(exerciseId,token)
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
            .addCase(getExercieses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.page = action.payload.page
                state.pageMax = action.payload.pageMax
                state.exercises = action.payload.exercises
            })

            .addCase(serachExercieses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.exercises = action.payload
            })

            .addCase(saveExercies.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
            })
            
            .addMatcher(
                isAnyOf(
                    getExercieses.pending,
                    serachExercieses.pending,
                    saveExercies.pending,
                    ),
                    (state) => {
                        state.isLoading = true
                    }
                )

                .addMatcher(
                    isAnyOf(
                        getExercieses.rejected,
                        serachExercieses.rejected,
                        saveExercies.rejected,
                        ),
                    (state, action) => {
                        state.isLoading = false
                        state.isError = true
                        state.message = action.payload
        
                    }
                )
    }
})

export const { reset } = exercisesSlice.actions
export default exercisesSlice.reducer

