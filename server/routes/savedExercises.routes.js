const express = require("express")
const {getExercises, postExercise, serachExercieses, publishExercise, removeExercise} = require("../controllers/savedExercises.controllers")


const savedExRouter = express.Router()

savedExRouter.get("/all", getExercises)
.get("/save", serachExercieses)
.post("/add", postExercise)
.post("/publish/:id", publishExercise)
.delete("/delete/:id", removeExercise)

module.exports = { savedExRouter }
