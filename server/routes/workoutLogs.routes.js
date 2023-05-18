const express = require("express")
const { getWorkoutLogs, postWorkoutLog, deleteWorkoutLog } = require("../controllers/workoutLogs.controllers")


const workoutLogsRouter = express.Router()

workoutLogsRouter.get("/all", getWorkoutLogs)
.post("/add/:id", postWorkoutLog)
.delete("/delete/:id", deleteWorkoutLog)

module.exports = { workoutLogsRouter }
