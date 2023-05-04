import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import savedExercisesService from "./savedExercisesService"


const initialState = {
    savedExercises: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const getExercieses = createAsyncThunk(
    "savedexercises/all",
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

export const serachExercieses = createAsyncThunk(
    "savedexercises/serach",
    async(serachQuery,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await savedExercisesService.serachExercieses(serachQuery,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const postExerciese = createAsyncThunk(
    "savedexercises/add",
    async(formData,thunkAPI) =>{
        try {
            const token = thunkAPI.getState().auth.user.token
            return await savedExercisesService.postExerciese(formData,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)


export const savedExerciesesSlice = createSlice({
    name: "savedExercises",
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
                state.savedExercises = action.payload.savedExercises
            })
            .addCase(getExercieses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(serachExercieses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(serachExercieses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.savedExercises = action.payloadsaved.Exercises
            })
            .addCase(serachExercieses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(postExerciese.pending, (state) => {
                state.isLoading = true
            })
            .addCase(postExerciese.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.savedExercises = action.payload.savedExercises
                state.message = action.payload.message
            })
            .addCase(postExerciese.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            })
    }
})

export const { reset } = savedExerciesesSlice.actions
export default savedExerciesesSlice.reducer

