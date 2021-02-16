const router = require('express').Router()
const ClientController = require('../controllers/clientController')
const client = new ClientController()

router.post('/register',(req,res)=>{

    client.getUserByEmail(req.body.email).then(user =>{
        if(user){
            res.status(409).json({message: 'User already exists', data: null})
        }else{
            client.addUser(req.body).then(user =>{
                res.status(201).json(user)
            }).catch(err =>{
                res.status(500).json(err)
            })
        }
    }).catch(err =>{
        res.status(500).json({message: 'An error occurred', data: err})
    })
    
})

router.post('/login',(req, res) =>{
    const {email, password} = req.body
    client.login(email, password).then(user =>{
        if(user){
            res.status(200).json({message: 'Success', data: user})
        }else{
            res.status(404).json({message: 'Incorrect credentials', data: null})
        }
    }).catch(err =>{
        res.status(500).json({message:'An error occurred', data: err})
    })
})

module.exports = router