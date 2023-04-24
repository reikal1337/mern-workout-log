const express = require("express")
const {getExercises, postExercise, serachExercieses} = require("../controllers/savedExercises.controllers")


const savedExRouter = express.Router()

savedExRouter.get("/savedexercises/all", getExercises)
.get("/savedexercises",postExercise)
.post("/savedexercises/add", serachExercieses)

module.exports = { savedExRouter }
