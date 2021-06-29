const UserController = require('../controllers/users')
const express = require('express')

const router = express.Router()

router.get('/all', UserController.findAllUsers)

router.post('/id', UserController.findById)

router.post('/findOne', UserController.findByCorreoAndPass)

router.post('/add', UserController.addUser)

router.post('/deleteOneUser', UserController.deleteOneUser)


module.exports = router