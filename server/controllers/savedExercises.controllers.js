const { Exercise } = require("../models/Exercise.model")

const getExercises = async(req, res) => {
    try {
        const exercises = await Exercise.find().lean()
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

const postExercise = async(req, res) => {
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

        const newExercise = new Exercise({
            createdBy,
            name,
            description,
            bodyParts,
        })
        await newExercise.save()

        // const exercises = await GlobalExercise.find({_id: 0})
        // if(!exercises) return res.status(404).json({message: "No global exercises exist!"})
        // res.status(201).json({exercises})
        res.status(201).json({message: "Exercise added!"})


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
            const exercises = await GlobalExercise.find(query)
            console.log(exercises)
            res.status(200).json(exercises)
        } catch (err) {
            console.log(err)
            res.status(404).json({ error: "Not found!"})
        }
    }
} 

module.exports = {getExercises, postExercise, serachExercieses}