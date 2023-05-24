const { WorkoutLog } = require("../models/WorkoutLog.model")
const { Workout } = require("../models/Workout.model")
const { User } = require("../models/User.model")


const getWorkoutLogs = async(req, res) => {
    const userId = req.user.id
    try {
        const workoutLogs = await getAllWorkoutLogs(userId)
        if(workoutLogs.length === 0) {
            return res.status(404).json({message: "No workout logs exist!"})
        }
        return res.status(200).json({workoutLogs})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}

const postWorkoutLog = async(req, res) => {
    
    console.log("Works?")
    try {
        const userId = req.user.id
        const workoutId = req.params.id

        const workoutIsUsers = await User.findOne({_id: userId, workouts: {$in: [workoutId]}}).lean()
        if(!workoutIsUsers){
            return res.status(404).json({message: "Unable to find this workout!"})
        }
        const workout = await Workout.findOne({_id: workoutId},)
        

        var exercisesLog = []
        workout.exercises.forEach((object,index) => {
            const {name, bodyParts, sets, reps} = object
            exercisesLog.push({name,bodyParts})
            var newSets = []
            for (let i = 1; i <= sets; i++) {
                newSets.push({weight: 0,reps})
            }
            Object.assign(exercisesLog[index],{sets: newSets})
        })

        const newWorkoutLog = new WorkoutLog({
            name: workout.name,
            exercises: exercisesLog,
        })
        
        const newWorkoutLogSave =  await newWorkoutLog.save()

        await User.updateOne({_id: userId}, {$push: {workoutLogs: newWorkoutLogSave._id}})

        const workoutLogs = await getAllWorkoutLogs(userId)

        return res.status(201).json({message: "Workout log added!", workoutLogs})
    } catch (err) {
        console.log(err)
        res.status(406).json({ error: err.message})
    }
}

const deleteWorkoutLog = async(req, res) => {
    const userId = req.user.id
    const workouLogId = req.params.id
    try {
        const deleteWorkoutLog = await User.findByIdAndUpdate({_id: userId}, {$pull: {workoutLogs: workouLogId}}, {new: true})
        if(deleteWorkoutLog){
            await WorkoutLog.deleteOne({_id: workouLogId})
        }else{
            return res.status(404).json({message: "Unable to find this workout log!"})
        }

        const workoutLogs = await getAllWorkoutLogs(userId)
        res.status(200).json({message: "Workout log deleted!", workoutLogs})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}

const submitWorkoutLog = async(req, res) => {
    const userId = req.user.id
    const workoutLogId = req.params.id
    const newExercises = req.body.exercises
    const date = req.body.startDate
    const duration = req.body.duration
    try {
        const workoutLogExists = await User.findOne({_id: userId, workoutLogs: {$in: [workoutLogId]}})
        if(!workoutLogExists){
            return res.status(404).json({message: "Unable to find this workout log!"})
        }
        
        const workoutLog = await WorkoutLog.find({_id: workoutLogId})
        console.log(workoutLog[0].submited)
        if(workoutLog[0].submited === true){
            return res.status(404).json({message: "This workout log is already submited!"})
        }
        
         await WorkoutLog.updateOne({_id: workoutLogId}, {exercises: newExercises, submited: true, startDate: date, duration: duration})

         const workoutLogs = await getAllWorkoutLogs(userId)

        return res.status(200).json({message: "Workout log Submited!", workoutLogs})
} catch (err) {
        console.log(err)
        res.status(406).json({ error: err.message})
    }
}




const getAllWorkoutLogs = async(userId) => {
    try {
        const workoutLogsObjIds = await User.findOne(
            {_id: userId},
            {workoutLogs: 1 , _id: 0})
            
        const workoutLogsIDs = workoutLogsObjIds.workoutLogs.map(id => id.toString())// Need to rework this
        const workoutLogs = await WorkoutLog.find({_id: {$in: workoutLogsIDs}},
            {createdAt: 0, updatedAt: 0, __v: 0}).collation({ locale: "en" }).sort({submited: 1, startDate: -1 }) //Maybe also add sort by name when it is not submited.
            

        return workoutLogs
    } catch (error) {
        console.log(error)
        return error
    }
}



module.exports = { 
    getWorkoutLogs,
    postWorkoutLog,
    deleteWorkoutLog,
    submitWorkoutLog
}