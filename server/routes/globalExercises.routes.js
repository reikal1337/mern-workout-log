const express = require("express")
const {getGlobalExercises, postGlobalExercise, serachGlobalExercieses, saveGlobalExercise} = require("../controllers/globalExercises.controllers")


const globalRouter = express.Router()

globalRouter
// .get("/all", getGlobalExercises)
.get("/", getGlobalExercises)
.get("/search", serachGlobalExercieses)
.post("/add", postGlobalExercise)
.post("/save/:id", saveGlobalExercise)

module.exports = { globalRouter }
