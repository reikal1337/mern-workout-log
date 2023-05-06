const mongoose = require("mongoose")

const WorkoutExerciseSchema = new mongoose.Schema(
    {
        exerciseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "exercises",
            required: true
        },
        workoutId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "workouts",
            required: true
        },
        sets: {
            type: Array,
            default: [],
        } //[{"1" : "8,55"}]
    },
    { timestamps: true, collection : 'workoutExercises' }
)

const WorkoutExercise = mongoose.model("WorkoutExercise", WorkoutExerciseSchema)

module.exports = { WorkoutExercise }