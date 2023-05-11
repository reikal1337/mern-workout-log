const express = require("express")
const { getWorkouts, postWorkout, deleteWorkout } = require("../controllers/workouts.controllers")


const workoutsRouter = express.Router()

workoutsRouter.get("/all", getWorkouts)
.post("/add", postWorkout)
.delete("/delete/:id", deleteWorkout)

module.exports = { workoutsRouter }
