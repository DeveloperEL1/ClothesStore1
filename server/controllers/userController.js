const express = require("express")
const router = express.Router()
const { generateUserMethods } = require('../services/index')
const User = require("../Models/userModel")
const userMethods = generateUserMethods(User)
const bcrypt = require("bcrypt")
const salt = 10
router.post("/signup", async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const users = await userMethods.getAll()
        const existingUser = users.find(user => user.email === email)
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' })
        }
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await userMethods.create({ name, email, password: hashedPassword })
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
})
