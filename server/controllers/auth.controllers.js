const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User } = require("../models/User.model")

const login = async (req,res) => {
    try{
        const{username, password} = req.body
        const user = await User.findOne({username: username})
        if(!user) return res.status(403).json({message: "User does not exist!"})

        const correctPassword = await bcrypt.compare(password, user.password)
        if(!correctPassword) return res.status(403).json({message: "Wrong password!"})

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: "10s"})
        
        res.status(200).json({
            username,
            exercisesNr: user.exercises.length,
            workoutsNr: user.workouts.length,
            workoutLogsNr: user.workoutLogs.length,
            token})
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: err.message})
    }
}

const register = async(req, res) => {
    try {
        const{
            username,
            password,
            exercises,
            workouts,
            workoutLogs

        } = req.body
        console.log(req.body)
        if(!username || !password){
            
            return res.status(406).json({message: "Please fill all fields"})
        }

        const user = await User.findOne({username: username})
        if(user) return res.status(406).json({message: "User already exists!"})
        
        
        
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            password: passwordHash,
            exercises,
            workouts,
            workoutLogs
        })
        const savedUser = await newUser.save()
        // delete savedUser.password
        res.status(201).json({message: "User succesfully registered"})
    } catch (err) {
        res.status(406).json({ error: err.message})
    }
}

const changePassword = async (req,res) => {
    try{
        const userId = req.user.id
        const { oldPassword, newPassword} = req.body
        const user = await User.findOne({_id: userId})

        const correctPassword = await bcrypt.compare(oldPassword, user.password)
        if(!correctPassword) return res.status(403).json({message: "Wrong password!"})
        
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(newPassword, salt)

        await User.findByIdAndUpdate({_id: userId}, {password: passwordHash})

        res.status(200).json({message: "Password has been changed!"})
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: err.message})
    }
}

const getUserData = async (req,res) => {
    try {
        const userId = req.user.id
        const user = await User.findOne({_id: userId})
        if(!user) return res.status(403).json({message: "User does not exist!"})

        res.status(200).json({
            exercisesNr: user.exercises.length,
            workoutsNr: user.workouts.length,
            workoutLogsNr: user.workoutLogs.length})

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message})
    }
}



module.exports = {login, register, changePassword, getUserData}