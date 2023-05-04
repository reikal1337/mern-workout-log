const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authenticateToken = async(req , res, next) => {
    try {
        let token = req.header("Authorization")
        // console.log("Auth")
        // console.log(token)
        if(!token){
            // console.log("Lol")
            return res.status(403).send("Accses Denied!") //change to json so front end can use
            
        }
        if(token.startsWith("Bearer ")){
            token= token.slice(7,token.length).trimLeft()
        }

        const authenticated = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: "10m"})
        req.user = authenticated
        next()

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message}) //find better status
    }
}

module.exports = authenticateToken