const mongoose = require("mongoose")

const setSchema = new mongoose.Schema({
    weight: Number,
    reps: Number,

})

const logExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bodyParts: {
        type: String,
        required: true
    },
    sets: [setSchema]
})


const WorkoutLogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        exercises: {
            type: [logExerciseSchema],
            required: true,
        },
        submited: {
            type: Boolean,
            require: true,
            default: false,
        },
        startDate: {
            type: Date,
        },
        duration: {
            type: Number,
        },
        
    },
    { timestamps: true, collection : 'workoutLogs' }
)

const WorkoutLog = mongoose.model("WorkoutLog", WorkoutLogSchema)

module.exports = { WorkoutLog }