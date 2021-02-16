const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
    description: {},
    budget: {},
    duration: {},
    status: {},
    client_id: {},
    user_id: {}
})

module.exports = mongoose.model('Request', RequestSchema)