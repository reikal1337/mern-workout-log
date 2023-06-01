const { GlobalExercise } = require("../models/GlobalExercise.model")
const { User } = require("../models/User.model")

const getGlobalExercises = async(req, res) => {
    try {
        const qLimit = parseInt(req.query.limit, 10)
        const qPage = parseInt(req.query.page, 10)

        var page = qPage || 1
        const limit = qLimit > 10 && qLimit <= 100  ? qLimit : 10

        const count = await GlobalExercise.estimatedDocumentCount({})
        const pageMax = Math.ceil(count / limit)

        page = page <= pageMax ? page : 1
        const skip = (page - 1 ) * limit
        
        const exercises = await GlobalExercise.find({},{createdAt: 0, updatedAt: 0, __v: 0})
        .collation({ locale: "en" }).sort({name: 1}).limit(limit).skip(skip)

        if(!exercises) return res.status(404).json({message: "No global exercises exist!"})
        
        res.status(200).json({
            exercises,
            page,
            pageMax
        })
        
    } catch (err) {
        console.log(err)
        res.status(500).json()
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
            global: true
        })
        await newGlobalExercise.save()
        res.status(201).json({message: "Exercise added!"})


    } catch (err) {
        console.log(err)
        res.status(406).json()
    }
}

const serachGlobalExercieses = async(req,res) =>{
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
            const exercises = await GlobalExercise.find(query,{createdAt: 0, updatedAt: 0, __v: 0}).collation({ locale: "en" }).sort({name: 1})
            if(!exercises) return res.status(404).json({message: "No searched exercises exist!"})
            
            res.status(200).json(exercises)
        } catch (err) {
            console.log(err)
            res.status(404).json({ message: "Not found!"})
        }
    }
} 

const saveGlobalExercise = async(req, res) => {
    const userId = req.user.id
    const exerciseId = req.params.id
    try {
        const savedGlobalExercise = await GlobalExercise.findOne({_id: exerciseId})

        if(savedGlobalExercise){
            const checkIfSaved = await User.findOne({_id: userId, exercises: { $in: [exerciseId]}})
            
            if(checkIfSaved){ 
                console.log("Lol can't")
                return res.status(406).json({message: "Exercies already saved!"})
            }

            await User.updateOne({_id: userId}, {$push: {exercises: exerciseId}}) 
            return res.status(200).json({message: "Exercies saved!"})
        }
        return res.status(404).json({message: "Exercies doesn't exist!"})  
    } catch (err) {
        console.log(err)
        res.status(500).json()
    }
}


module.exports = {getGlobalExercises, postGlobalExercise, serachGlobalExercieses, saveGlobalExercise}