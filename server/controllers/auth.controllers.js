const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User } = require("../models/User.model")

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
        res.status(201).json({message: "User succesfully registered"})// Should not send password
    } catch (err) {
        res.status(406).json({ error: err.message})
    }
}

const login = async (req,res) => {
    try{
        const{username, password} = req.body
        const user = await User.findOne({username: username})
        if(!user) return res.status(403).json({message: "User does not exist!"})

        const correctPassword = await bcrypt.compare(password, user.password)
        if(!correctPassword) return res.status(403).json({message: "Wrong password!"})
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        // delete user.password
        res.status(200).json({username, token})
    } catch(err) {
        res.status(500).json({ error: err.message})
    }
}

module.exports = { register, login}