const { Workout } = require("../models/Workout.mode")
const { User } = require("../models/User.model")


const getWorkouts = async(req, res) => {
    
    const userId = req.user.id
    try {
        const workouts = await getAllWorkouts(userId)
        
        if(workouts.length === 0) return res.status(404).json({message: "No workouts exist!"})

        return res.status(200).json({workouts})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message})
    }
}

const getAllWorkouts = async(userId) => {
    try {
        const workoutsObjIds = await User.findOne(
            {_id: userId},
            {workouts: 1 , _id: 0}).lean()

        const workoutsIDs = workoutsObjIds.workouts.map(id => id.toString())
        const workouts = await Workout.find({_id: {$in: workoutsIDs}},
            {createdAt: 0, updatedAt: 0, __v: 0})

        

        return workouts
    } catch (error) {
        console.log(error)
        return error
    }
}



module.exports = {getWorkouts}