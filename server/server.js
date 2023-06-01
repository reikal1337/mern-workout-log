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
const { workoutsRouter } = require("./routes/workouts.routes")
const { workoutLogsRouter } = require("./routes/workoutLogs.routes")


//Config
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

const allowedOrigins = ["https://workoutlog-zth5.onrender.com"]


app.use(cors({
    origin: allowedOrigins
}))

app.use("/", authRouter)

app.use(authenticateToken)


app.use("/global/exercises", globalRouter)
app.use("/savedexercises", savedExRouter)
app.use("/workouts", workoutsRouter)
app.use("/workoutlogs", workoutLogsRouter)



//Db

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () =>{
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
}).catch( (err) => console.log(`Unable to connect to port: ${PORT}\n${err}`))


