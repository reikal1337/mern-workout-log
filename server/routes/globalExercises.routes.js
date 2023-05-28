const express = require("express")
const {getGlobalExercises, postGlobalExercise, serachGlobalExercieses, saveGlobalExercise} = require("../controllers/globalExercises.controllers")


const globalRouter = express.Router()

globalRouter.get("/exercises/all", getGlobalExercises)
.get("/exercises", getGlobalExercises)
.get("/exercises/search", serachGlobalExercieses)
.post("/exercises/add", postGlobalExercise)
.post("/exercises/save/:id", saveGlobalExercise)

module.exports = { globalRouter }
