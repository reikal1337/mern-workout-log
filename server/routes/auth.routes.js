const express = require("express")
const { login, register } = require("../controllers/auth.controllers")

const router =  express.Router()

router.post('/register', register).post("/login", login)

module.exports = { router }