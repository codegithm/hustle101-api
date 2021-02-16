const Client = require('../models/Client')


class ClientController{

    addUser(body) {
        const client = new Client(body)
        console.log(body)
        return client.save()
    }

    getUsers(){
        return Client.find()
    }

    getUserById(id){
        return Client.findById(id)
    }

    getUserByEmail(email){
        return Client.findOne({ email: email})
    }

    login(email, password){
        return Client.findOne({ email: email, password: password })
    }

}

module.exports = ClientController