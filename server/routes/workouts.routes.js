const express = require("express")
const { getWorkouts, postWorkout } = require("../controllers/workouts.controllers")


const workoutsRouter = express.Router()

workoutsRouter.get("/all", getWorkouts)
.post("/add", postWorkout)

module.exports = { workoutsRouter }
