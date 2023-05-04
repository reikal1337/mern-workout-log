import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import exercisesReducer from "./features/globalExercises/globalExercisesSlice"
import savedExercisesReducer from "./features/savedExercises/savedExercisesSlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        globalExerciese: exercisesReducer,
        savedExercieses: savedExercisesReducer,

    },
})