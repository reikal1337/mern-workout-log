const mongoose = require("mongoose")

const WorkoutLogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 50,
        },
        workout: {
            type: Array,
            required: true,
            default: [],
        },
        date: {
            type: Date,
            required: true,
        }
        
    },
    { timestamps: true, collection : 'workoutLogs' }
)

const WorkoutLog = mongoose.model("WorkoutLog", WorkoutLogSchema)

module.exports = { WorkoutLog }