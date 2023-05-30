const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authenticateToken = async(req , res, next) => {
    try {
        let token = req.header("Authorization")
        // console.log("Auth")
        // console.log(token)
        if(!token){
            // console.log("Lol")
            return res.status(401).json({message: "Accses Denied!"})
            
        }
        if(token.startsWith("Bearer ")){
            token= token.slice(7,token.length).trimLeft()
        }

        const authenticated = jwt.verify(token, process.env.JWT_SECRET)
        req.user = authenticated
        next()

    } catch (err) {
        console.log(err)
        res.status(401).json({ error: err.message}) 
    }
}

module.exports = authenticateToken