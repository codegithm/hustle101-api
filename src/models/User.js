const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {},
    surname: {},
    cellnumber: {},
    gender: {},
    email:{},
    password:{},
    profession:{},
    idnumber: {},
    picture:{},
    city:{},
    country: {}
})

module.exports = mongoose.model('User', UserSchema)