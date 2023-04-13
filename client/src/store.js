import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import exercisesReducer from "./features/globalExercises/globalExercisesSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        globalExerciese: exercisesReducer
    },
})