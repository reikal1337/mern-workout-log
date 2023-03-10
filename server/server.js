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

//Config
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

app.use("/", router)



//Db

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () =>{
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
}).catch( (err) => console.log(`Unable to connect to port: ${PORT}\n${err}`))


