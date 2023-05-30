import {createSlice, createAsyncThunk, isAnyOf} from "@reduxjs/toolkit"
import authService from "./authService"

//Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const login = createAsyncThunk('/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const changePassword = createAsyncThunk('/changepassword', async (userData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.changePassword(token,userData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getUserData = createAsyncThunk('/profile', async (_,thunkAPI) => {
    console.log("slice")
    try {
        const token = thunkAPI.getState().auth.user.token
        return await authService.getUserData(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const register = createAsyncThunk('/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const logout = createAsyncThunk("/logout", async () => {
       authService.logout()
    
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.user.exercisesNr = action.payload.exercisesNr
                state.user.workoutsNr = action.payload.workoutsNr
                state.user.workoutLogsNr =  action.payload.workoutLogsNr
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(logout.pending, (state) => {
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(logout.rejected, (state) => {
                state.user = null
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = action.payload.message
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            })
            .addMatcher(
                isAnyOf(
                    getUserData.pending,
                    login.pending,
                    changePassword.pending,
                    register.pending,
                    
                    ),
                (state) => {
                    state.isLoading = true
                    }
                )
            .addMatcher(
                isAnyOf(
                    login.fulfilled,
                    register.fulfilled,
                    
                        ),
                    (state, action) => {
                        state.isLoading = false
                        state.isSuccess = true
                        state.user = action.payload
                    }
                )
            .addMatcher(
                isAnyOf(
                    login.rejected,
                    register.rejected,
                        ),
                    (state, action) => {
                        state.isLoading = false
                        state.isError = true
                        state.message = action.payload
                        state.user = null
                    }
                )
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer