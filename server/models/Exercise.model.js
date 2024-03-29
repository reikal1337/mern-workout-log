const mongoose = require("mongoose")

const ExerciseSchema = new mongoose.Schema(
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
            default: "",
        },
        bodyParts: {
            type: Array,
            default: [],
        },
        published: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    { timestamps: true, collection : 'exercises' }
)

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = { Exercise }