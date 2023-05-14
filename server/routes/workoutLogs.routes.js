const express = require("express")
const { getWorkoutLogs, postWorkoutLog, } = require("../controllers/workoutLogs.controllers")


const workoutLogsRouter = express.Router()

workoutLogsRouter.get("/all", getWorkoutLogs)
.post("/add/:id", postWorkoutLog)

module.exports = { workoutLogsRouter }
