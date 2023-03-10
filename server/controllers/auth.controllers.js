const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User } = require("../models/User.model")

const register = async(req, res) => {
    try {
        const{
            username,
            password,
            name,
            exercises,
            workouts,
            workoutLogs

        } = req.body

        const user = await User.findOne({username: username})
        if(user) return res.status(406).json({msg: "User already exists!"})
        

        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            password: passwordHash,
            name,
            exercises,
            workouts,
            workoutLogs
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)// Should not send password
    } catch (err) {
        res.status(406).json({ error: err.message})
    }
}

const login = async (req,res) => {
    try{
        const{username, password} = req.body
        const user = await User.findOne({username: username})
        if(!user) return res.status(403).json({msg: "User does not exist!"})

        const correctPassword = await bcrypt.compare(password, user.password)
        if(!correctPassword) return res.status(403).json({msg: "Wrong password!"})

        delete user.password
        res.status(200).json({user})
    } catch(err) {
        res.status(500).json({ error: err.message})
    }
}

module.exports = { register, login}