const mongoose = require("mongoose")

const WorkoutLogSchema = new mongoose.Schema(
    {
        workout: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "workouts",
            required: true
        },
        sets: {
            type: Array ,//idk yet
            default: []
        },
        startDate: {
            type: Date,
            
        },
        endDate: {
            type: Date,
            
        },
        duration:{
            type: Number,

        }
        
    },
    { timestamps: true, collection : 'workoutLogs' }
)

const WorkoutLog = mongoose.model("WorkoutLog", WorkoutLogSchema)

module.exports = { WorkoutLog }