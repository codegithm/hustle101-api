const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    name: {},
    surname: {},
    cellnumber: {},
    email:{},
    password:{},
    picture:{},
})

module.exports = mongoose.model('Client', ClientSchema)