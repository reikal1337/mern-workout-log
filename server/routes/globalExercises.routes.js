const express = require("express")
const {getGlobalExercises, postGlobalExercise, serachGlobalExercieses, saveGlobalExercise} = require("../controllers/globalExercises.controllers")


const globalRouter = express.Router()

globalRouter
.get("/", getGlobalExercises)
.get("/search", serachGlobalExercieses)
.post("/add", postGlobalExercise)
.post("/save/:id", saveGlobalExercise)

module.exports = { globalRouter }
