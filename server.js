const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Personitas = require('./api/users')

const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use('/api/personitas', Personitas)

mongoose.connect(
    "mongodb://localhost/personitas",
    { useNewUrlParser: true },
    (err, res) => {
        err && console.log('Error de conexión al servidor')

        app.listen(4000, () => {
            console.log('Servidor corriendo exitosamente')
        })
    }
)