const mongoose = require("mongoose")

const ExerciseSchema = new mongoose.Schema(
    {
        createdBy: {
            type: ObjectId,
            required: true,
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
            maxLength: 252,
        },
        bodyParts: {
            type: Array,
            default: [],
        },
        workouts: {
            type: Array,
            default: [],
        },
        sets: {
            type: Array,
            default: [],
        },
        public: {
            type: Boolean,
            required: true,
            default: false
        }
        
    },
    { timestamps: true, collection : 'exercises' }
)

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = { Exercise }