const express = require("express")
const { getWorkouts, postWorkout, deleteWorkout, updateWorkout } = require("../controllers/workouts.controllers")


const workoutsRouter = express.Router()

workoutsRouter.get("/all", getWorkouts)
.post("/add", postWorkout)
.delete("/delete/:id", deleteWorkout)
.patch("/update/:id", updateWorkout)

module.exports = { workoutsRouter }
