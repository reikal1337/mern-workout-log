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
            required: true,
            maxLength: 500,
        },
        bodyParts: {
            type: Array,
            default: [],
        }
        
    },
    { timestamps: true, collection : 'globalexercises' }
)

const GlobalExercise = mongoose.model("GlobalExercise", GlobalExerciseSchema)

module.exports = { GlobalExercise }