const express = require("express")
const {getExercises, postExercise, serachExercieses, publishExercise} = require("../controllers/savedExercises.controllers")


const savedExRouter = express.Router()

savedExRouter.get("/all", getExercises)
.get("/save", serachExercieses)
.post("/add", postExercise)
.post("/publish/:id", publishExercise)

module.exports = { savedExRouter }
