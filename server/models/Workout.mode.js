const mongoose = require("mongoose")

const WorkoutSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 50,
        },
        exercises: {
            type: Array,
            default: [],
        }
        
    },
    { timestamps: true, collection : 'workouts' }
)

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = { Workout }