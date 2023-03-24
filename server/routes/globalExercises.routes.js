const { Router } = require("express")
const express = require("express")
const {getGlobalExercises, postGlobalExercise} = require("../controllers/globalExercises.controllers")


const globalRouter = express.Router()

globalRouter.get("/exercises/all", getGlobalExercises).post("/exercises/add", postGlobalExercise)

module.exports = { globalRouter }
