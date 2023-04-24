const express = require("express")
const {getGlobalExercises, postGlobalExercise, serachGlobalExercieses} = require("../controllers/globalExercises.controllers")


const globalRouter = express.Router()

globalRouter.get("/exercises/all", getGlobalExercises)
.get("/exercises",serachGlobalExercieses)
.post("/exercises/add", postGlobalExercise)

module.exports = { globalRouter }
