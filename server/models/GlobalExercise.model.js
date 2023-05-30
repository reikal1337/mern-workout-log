const mongoose = require("mongoose")

const GlobalExerciseSchema = new mongoose.Schema(
    {
        createdBy: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 15,
        },
        name: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 50,
        },
        description: {
            type: String,
            maxLength: 500,
            default: ""
        },
        bodyParts: {
            type: Array,
            default: [],
        },
        global: {
            type: Boolean,
            required: true,
            default: true
        }
        
    },
    { timestamps: true, collection : 'globalexercises' }
)

const GlobalExercise = mongoose.model("GlobalExercise", GlobalExerciseSchema)

module.exports = { GlobalExercise }