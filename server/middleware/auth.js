const jwt = require("jsonwebtoken")

const authenticateToken = async(req , res, next) => {
    try {
        let token = req.header("Authorization")
        if(!token){
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
        res.status(401).json({message: "Accses Denied!"}) 
    }
}

module.exports = authenticateToken