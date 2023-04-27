const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { default: helmet } = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const authenticateToken = require("./middleware/auth")

const { authRouter } = require("./routes/auth.routes")
const { globalRouter } = require("./routes/globalExercises.routes")
const { savedExRouter } = require("./routes/savedExercises.routes")


//Config
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

app.use("/", authRouter)

app.use(authenticateToken)

app.use("/global", globalRouter)
app.use("/savedexercises", savedExRouter)


//Db

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () =>{
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
}).catch( (err) => console.log(`Unable to connect to port: ${PORT}\n${err}`))


