const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 12,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 75,
        },
        name: {
            type: String,
            required: true,
            maxLength: 50,
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