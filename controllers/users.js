const mongoose = require('mongoose')
const UserModel = require('../models/User')

const findAllUsers = (req, res) => {
    UserModel.find((err, users) => {
        err && res.status(500).send(err.message)

        res.status(200).json(users)
    })
}

const findById = (req, res) => {
    UserModel.findById(req.body.id, (err, user) => {
        err && res.status(500).send(err.message)

        res.status(200).json(user)
    })
}

const findByCorreoAndPass = (req, res) => {
    UserModel.find({
        correoElectronico: req.body.correoElectronico,
        password: req.body.password
    }, (err, user) => {
        err && res.status(500).send(err.message)

        res.status(200).json(user)
    })
}

const addUser = (req, res) => {
    let user = new UserModel({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        correoElectronico: req.body.correoElectronico,
        telefono: req.body.telefono
    })

    user.save((err, usr) => {
        err && res.status(500).send(err.message)

        res.status(200).json({"IsTrue": true})
    })
}

const deleteOneUser = (req, res) => {
    UserModel.findByIdAndDelete(req.body.id, (err, user) => {
        err && res.status(500).send(err.message)

        res.status(200).json(`Usuario con id ${req.body.id} eliminado correctamente.`)
    })
}

module.exports = { findAllUsers, findById, findByCorreoAndPass, addUser, deleteOneUser }