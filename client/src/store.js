import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import exercisesReducer from "./features/globalExercises/globalExercisesSlice"
import savedExercisesReducer from "./features/savedExercises/savedExercisesSlice";
import workoutsReducer from "./features/workouts/workoutsSlice"
import workoutLogsReducer from "./features/workoutLogs/workoutLogsSlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        globalExerciese: exercisesReducer,
        savedExercises: savedExercisesReducer,
        workouts: workoutsReducer,
        workoutLogs: workoutLogsReducer,

    },
})