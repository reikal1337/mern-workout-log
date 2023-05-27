const express = require("express")
const { login, register, changePassword, getUserData } = require("../controllers/auth.controllers")
const authenticateToken = require("../middleware/auth")

const authRouter =  express.Router()

authRouter.get("/profile", authenticateToken , getUserData)
.post("/login", login)
.post('/register', register)
.patch("/changepassword", authenticateToken , changePassword)

module.exports = { authRouter }