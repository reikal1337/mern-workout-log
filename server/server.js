const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const path = require("path")
const hemlmet = require("helmet")
const { default: helmet } = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

const { router } = require("./routes/auth.routes")
const authenticateToken = require("./middleware/auth")

//Config
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

app.use("/", router)

app.use(authenticateToken)

app.get("/auth/home", (req, res) => {
    res.status(200).send("works")
})



//Db

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () =>{
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
}).catch( (err) => console.log(`Unable to connect to port: ${PORT}\n${err}`))


