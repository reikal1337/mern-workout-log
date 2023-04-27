const express = require("express")
const {getExercises, postExercise, serachExercieses} = require("../controllers/savedExercises.controllers")


const savedExRouter = express.Router()

savedExRouter.get("/all", getExercises)
.get("/save", serachExercieses)
.post("/add", postExercise)

module.exports = { savedExRouter }
