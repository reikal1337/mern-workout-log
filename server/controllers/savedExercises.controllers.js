// const { token } = require("morgan")
const { Exercise } = require("../models/Exercise.model")
const { User } = require("../models/User.model")


const getExercises = async(req, res) => {
    
    const id = req.user.id
    try {
        const exercises = await Exercise.find(
            {createdBy: createdBy},
            {createdBy:1, name: 1, description: 1, _id: 0})
        console.log(exercises)
        if(!exercises) return res.status(404).json({message: "No saved exercises exist!"})

        exercises.forEach( exercise => {
            
            delete exercise.createdAt
            delete exercise.updatedAt
            delete exercise.__v
        })
        res.status(200).json({exercises})
        
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

const postExercise = async(req, res) => {
    const userId = req.user.id
    try {
        const createdBy = (await User.findOne({_id: userId}).distinct("username")).toString()
        const{
            name,
            description,
            bodyParts,
        } = req.body
        if(!createdBy || !name || !description || !bodyParts){
            return res.status(406).json({message: "Missing data!"})
        }
        const newExercise = new Exercise({
            createdBy,
            name,
            description,
            bodyParts,
        })
        
         const newEx =  await newExercise.save()
         await User.updateOne({_id: userId}, {$push: {exercises: newEx._id}})

        const result = await getAllSavedExercieses(userId)

        res.status(201).json({message: "Exercise added!", result})


    } catch (err) {
        res.status(406).json({ error: err.message})
    }
}

const serachExercieses = async(req,res) =>{
    const queryName = new RegExp(req.query.name, "i")
    const queryBodyPart = new RegExp(req.query.bodypart, "i")
    if(queryName !== "" || queryBodyPart !== ""){
        try {
            let query = {}
            if(queryName !== ""){
                Object.assign(query,{name: queryName});
            }
            if(queryBodyPart != "/all/i"){
                Object.assign(query,{bodyParts: {$all: [queryBodyPart]}});
            }
            console.log(query)
            const exercises = await Exercise.find(query)
            console.log(exercises)
            res.status(200).json(exercises)
        } catch (err) {
            console.log(err)
            res.status(404).json({ error: "Not found!"})
        }
    }
} 

const getAllSavedExercieses = async(userId) => {

    try {
        const exercisesObjIds = await User.findOne(
            {_id: userId},
            {exercises: 1 ,_id: 0}).lean()
    
        const exercisesIDs = exercisesObjIds.exercises.map(id => id.toString());
        const exercises = await Exercise.find({_id: {$in: exercisesIDs}},
            {_id: 0,createdAt: 0, updatedAt: 0, __v: 0});
        return exercises
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = {getExercises, postExercise, serachExercieses}