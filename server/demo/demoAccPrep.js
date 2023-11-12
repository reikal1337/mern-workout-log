const { User } = require("../models/User.model")
const { GlobalExercise } = require("../models/GlobalExercise.model")
const { Exercise } = require("../models/Exercise.model")
const { WorkoutLog } = require("../models/WorkoutLog.model")
const { Workout } = require("../models/Workout.model")


//Not finished!!
const deleteDemoAccData = async (userId) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: userId},{
            exercises: [],
            workouts: [],
            workoutLogs: [],
        })

    const delGlobalExe = GlobalExercise.deleteMany({ createdBy: "DemoAcc"})
    const delExerciseExe = Exercise.deleteMany({ createdBy: "DemoAcc"})
    const delWorkout = Workout.deleteMany({ _id: {$in: user.workouts}})
    const delWorkoutLog = WorkoutLog.deleteMany({ _id: {$in: user.workouts}})

    await Promise.all([delGlobalExe, delExerciseExe, delWorkout, delWorkoutLog]) 
    return user

    } catch (error) {
        console.log(error)
        return null
    }
    
}

const refreshDemoAccData = async (userId) => {
    try {
    

    await Promise.all([delGlobalExe, delExerciseExe, delWorkout, delWorkoutLog]) 
    return user

    } catch (error) {
        console.log(error)
        return null
    }
    
}


const createExerciese = async (userId, username) => {
    const newExerciese = await Exercise.create({
        createdBy: username,
        name: "Diamond PushUp",
        description: "Diamond push-ups, also known as triangle push-ups, are a more advanced variation of the classic push-up. Practice diamond push-ups by bringing your hands close together to form a diamond or triangle shape below your chest. Keep your back and legs in a straight line and push yourself off the ground.",
        bodyParts: ["chest","arms"]
    })

    await User.updateOne({_id: userId}, {$push: {exercises: newEx._id}})
}

const savePublishedExerciese = async (userId) => {
    const exeToSave = ["646b6d1eea1ba43d84acbc20", "646b6befea1ba43d84acbbbf", "646b6bf1ea1ba43d84acbbcd"]
    await User.updateOne({_id: userId}, {$push: {exercises: exerciseId}})

    const createWorkout = await Workout.create({
        name: "Push day",
    
    })
    
}



