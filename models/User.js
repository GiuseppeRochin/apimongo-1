const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String },
    username: { type: String },
    password: { type: String },
    correoElectronico: { type: String },
    telefono: { type: Number }
})

module.exports = User = mongoose.model('persons', UserSchema)