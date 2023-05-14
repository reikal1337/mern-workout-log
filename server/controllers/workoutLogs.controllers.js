const { WorkoutLog } = require("../models/WorkoutLog.model")
const { Workout } = require("../models/Workout.model")
const { User } = require("../models/User.model")


const getWorkoutLogs = async(req, res) => {
    const userId = req.user.id
    try {
        const workoutLogs = await getAllWorkoutLogs(userId)
        if(workoutLogs.length === 0) {
            return res.status(404).json({message: "No workouts exist!"})
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
        const workoutExists = User.findOne({_id: userId, workouts: {$in: [workoutId]}})
        if(!workoutExists){
            return res.status(404).json({message: "Unable to find this workout!"})
        }
        const newWorkoutLog = new WorkoutLog({workout: workoutId})
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

        const workoutLogsIDs = workoutLogsObjIds.workoutLogs.map(id => id.toString())
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