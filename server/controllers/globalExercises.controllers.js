const { GlobalExercise } = require("../models/GlobalExercise.model")

const getGlobalExercises = async(req, res) => {
    try {
        const exercises = await GlobalExercise.find().lean()
        if(!exercises) return res.status(404).json({message: "No global exercises exist!"})

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

const postGlobalExercise = async(req, res) => {
    try {
        const{
            createdBy,
            name,
            description,
            bodyParts,
        } = req.body

        if(!createdBy || !name || !description || !bodyParts){
            return res.status(406).json({message: "Missing data!"})
        }

        const newGlobalExercise = new GlobalExercise({
            createdBy,
            name,
            description,
            bodyParts,
        })
        await newGlobalExercise.save()

        // const exercises = await GlobalExercise.find({_id: 0})
        // if(!exercises) return res.status(404).json({message: "No global exercises exist!"})
        // res.status(201).json({exercises})
        res.status(201).json({message: "Exercise added!"})


    } catch (err) {
        res.status(406).json({ error: err.message})
    }
}

const serachGlobalExercieses = async(req,res) =>{
    const queryName = new RegExp(req.query.name, "i")
    const queryBodyPart = new new RegExp(req.query.bodypart, "i")
    if(queryName !== ""){
        try {
            console.log(queryName)
            const results = await GlobalExercise.find({name: queryName})
            
            res.status(200).json(results)
            

        } catch (err) {
            console.log(err)
            res.status(404).json({ error: "Not found!"})
        }
    }
} 

module.exports = {getGlobalExercises, postGlobalExercise, serachGlobalExercieses}