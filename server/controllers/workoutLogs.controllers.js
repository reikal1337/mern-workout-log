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
    const userId = req.user.id
    const workoutId = req.params.id
    try {

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


const getAllWorkoutLogs = async(userId) => {
    try {
        const workoutLogsObjIds = await User.findOne(
            {_id: userId},
            {workoutLogs: 1 , _id: 0}).lean()
            
        const workoutLogsIDs = workoutLogsObjIds.workoutLogs.map(id => id.toString())// Need to rework this
        const workoutLogs = await WorkoutLog.find({_id: {$in: workoutLogsIDs}},
            {createdAt: 0, updatedAt: 0, __v: 0})

        return workoutLogs
    } catch (error) {
        console.log(error)
        return error
    }
}



module.exports = { 
    getWorkoutLogs,
    postWorkoutLog,
}