const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 15,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 100,
        },
        exercises: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "exercises",
            default: [],
        }],
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