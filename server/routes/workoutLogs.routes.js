const express = require("express")
const { getWorkoutLogs, postWorkoutLog, deleteWorkoutLog, submitWorkoutLog } = require("../controllers/workoutLogs.controllers")


const workoutLogsRouter = express.Router()

workoutLogsRouter.get("/all", getWorkoutLogs)
.post("/add/:id", postWorkoutLog)
.delete("/delete/:id", deleteWorkoutLog)
.patch("/submit/:id", submitWorkoutLog)

module.exports = { workoutLogsRouter }
