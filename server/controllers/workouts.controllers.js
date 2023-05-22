const { Workout } = require("../models/Workout.model")
const { User } = require("../models/User.model")


const getWorkouts = async(req, res) => {
    
    const userId = req.user.id
    
    try {
        const workouts = await getAllWorkouts(userId)
        if(workouts.length === 0) {
            return res.status(404).json({message: "No workouts exist!"})
        }
        return res.status(200).json({workouts})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}

const postWorkout = async(req, res) => {
    const userId = req.user.id
    try {
        const { name } = req.body
        if(!name){
            return res.status(406).json({message: "Missing data!"})
        }
        const newWorkout = new Workout({name})
        
         const newWorkoutSave =  await newWorkout.save()
         await User.updateOne({_id: userId}, {$push: {workouts: newWorkoutSave._id}})

        const workouts = await getAllWorkouts(userId)

        return res.status(201).json({message: "Workout added!", workouts})
    } catch (err) {
        res.status(406).json({ error: err.message})
    }
}

const deleteWorkout = async(req, res) => {
    const userId = req.user.id
    const workoutId = req.params.id
    try {
        const deleteWorkout = await User.findByIdAndUpdate({_id: userId}, {$pull: {workouts: workoutId}}, {new: true})
        if(deleteWorkout){
            await Workout.deleteOne({_id: workoutId})
        }else{
            return res.status(404).json({message: "Unable to find this workout!"})
        }

        const workouts = await getAllWorkouts(userId)
        res.status(200).json({message: "Workout deleted!", workouts})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}

const updateWorkout = async(req, res) => {
    const userId = req.user.id
    const workoutId = req.params.id
    const newExercises = req.body
    try {
        const workoutExists = await User.findOne({_id: userId, workouts: {$in: [workoutId]}})
        if(!workoutExists){
            return res.status(404).json({message: "Unable to find this workout!"})
        }
        
         await Workout.updateOne({_id: workoutId}, {exercises: newExercises})

        const workouts = await getAllWorkouts(userId)

        return res.status(200).json({message: "Workout Updated!", workouts})
    } catch (err) {
        res.status(406).json({ error: err.message})
    }
}

const getAllWorkouts = async(userId) => {
    try {
        const workoutsObjIds = await User.findOne(
            {_id: userId},
            {workouts: 1 , _id: 0}).lean()

        const workoutsIDs = workoutsObjIds.workouts.map(id => id.toString())
        const workouts = await Workout.find({_id: {$in: workoutsIDs}},
            {createdAt: 0, updatedAt: 0, __v: 0}).sort({names: 1})

        return workouts
    } catch (error) {
        console.log(error)
        return error
    }
}



module.exports = { getWorkouts, postWorkout, deleteWorkout, updateWorkout}