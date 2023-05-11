const express = require("express")
const { getWorkouts } = require("../controllers/workouts.controllers")


const workoutsRouter = express.Router()

workoutsRouter.get("/all", getWorkouts)

module.exports = { workoutsRouter }
