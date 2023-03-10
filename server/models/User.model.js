const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 5,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 75,
        },
        name: {
            type: String,
            required: true,
            max: 50,
        },
        exercises: {
            type: Array,
            default: [],
        },
        workouts: {
            type: Array,
            default: [],
        },
        workoutLogs: {
            type: Array,
            default: [],
        },
        
    },
    { timestamps: true, collection : 'users' }
)

const User = mongoose.model("User", UserSchema)

module.exports = { User }