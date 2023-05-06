// const { token } = require("morgan")
const { Exercise } = require("../models/Exercise.model")
const { User } = require("../models/User.model")
const { GlobalExercise } = require("../models/GlobalExercise.model")


const getExercises = async(req, res) => {
    const userId = req.user.id
    try {
        const savedExercises = await getAllSavedExercieses(userId)
        if(!savedExercises) return res.status(404).json({message: "No saved exercises exist!"})
        return res.status(200).json({savedExercises})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
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

        const savedExercises = await getAllSavedExercieses(userId)

        return res.status(201).json({message: "Exercise added!", savedExercises})


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

const publishExercise = async(req, res) => {
    
    const userId = req.user.id
    const userName = (await User.findOne({_id: userId}).distinct("username")).toString()
    const exerciseId = req.params.id
    try {
        const publishedExerciese = await Exercise.findByIdAndUpdate({_id: exerciseId}, { published: true })
        
        const{
            createdBy,
            name,
            description,
            bodyParts,
        } = publishedExerciese

        if(userName != createdBy){
            return res.status(403).json({message: "You are forbiden to publish this exerciese!"})
        }
        const newGlobalExercise = new GlobalExercise({
            createdBy,
            name,
            description,
            bodyParts,
        })

        await newGlobalExercise.save()
        const savedExercises = await getAllSavedExercieses(userId)
        res.status(200).json({message: "Exercise published!", savedExercises})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}

const deleteExercise = async(req, res) => {
    const userId = req.user.id
    const exerciseId = req.params.id
    try {
        const deleteExerciese = await User.findByIdAndUpdate({_id: userId}, {$pull: {exercises: exerciseId}}, {new: true})
        if(deleteExerciese){
            await Exercise.deleteOne({_id: exerciseId})
        }else{
            return res.status(404).json({message: "Unable to find this exercise!"})
        }

        const savedExercises = await getAllSavedExercieses(userId)
        res.status(200).json({message: "Exercise deleted!", savedExercises})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}

const removeExercise = async(req, res) => {
    const userId = req.user.id
    const exerciseId = req.params.id
    try {
        const removeExerciese = await User.findByIdAndUpdate({_id: userId}, {$pull: {exercises: exerciseId}}, {new: true})
        if(removeExerciese){
            const savedExercises = await getAllSavedExercieses(userId)
            return res.status(200).json({message: "Exercise removed!", savedExercises})
        }else{
            return res.status(404).json({message: "Unable to find this exercise!"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}



const getAllSavedExercieses = async(userId) => {
    try {
        const exercisesObjIds = await User.findOne(
            {_id: userId},
            {exercises: 1 , _id: 0}).lean()

        const exercisesIDs = exercisesObjIds.exercises.map(id => id.toString())
        const exercisesSaved = await Exercise.find({_id: {$in: exercisesIDs}},
            {createdAt: 0, updatedAt: 0, __v: 0})

        const exercisesGlobal = await GlobalExercise.find({_id: {$in: exercisesIDs}},
            {createdAt: 0, updatedAt: 0, __v: 0})

        const exercises = exercisesSaved.concat(exercisesGlobal)

        return exercises
    } catch (error) {
        console.log(error)
        return error
    }
}



module.exports = {
    getExercises, 
    postExercise, 
    serachExercieses, 
    publishExercise, 
    deleteExercise,
    removeExercise
}