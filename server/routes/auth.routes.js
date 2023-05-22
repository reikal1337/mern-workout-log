const express = require("express")
const { login, register, changePassword } = require("../controllers/auth.controllers")
const authenticateToken = require("../middleware/auth")

const authRouter =  express.Router()

authRouter.post("/login", login)
.post('/register', register)
.patch("/changepassword", authenticateToken , changePassword)

module.exports = { authRouter }