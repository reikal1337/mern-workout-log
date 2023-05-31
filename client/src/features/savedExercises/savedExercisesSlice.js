import { createSlice, createAsyncThunk, isAnyOf} from "@reduxjs/toolkit"

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

export const publishExerciese = createAsyncThunk(
    "savedexercises/publish",
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

export const deleteExerciese = createAsyncThunk(
    "savedexercises/delete",
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

export const removeExerciese = createAsyncThunk(
    "savedexercises/remove",
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

export const { reset } = savedExerciesesSlice.actions
export default savedExerciesesSlice.reducer

