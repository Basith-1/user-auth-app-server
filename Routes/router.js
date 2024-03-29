const express = require('express')
const router = new express.Router()
const userController = require('../controllers/userController')

// register
router.post('/user/register',userController.register)

// login
router.post('/user/login',userController.login)

module.exports = router