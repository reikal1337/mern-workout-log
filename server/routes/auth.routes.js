const express = require("express")
const { login, register } = require("../controllers/auth.controllers")

const authRouter =  express.Router()

authRouter.post('/register', register).post("/login", login)

module.exports = { authRouter }