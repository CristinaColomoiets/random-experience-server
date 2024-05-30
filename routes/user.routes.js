const router = require('express').Router()
const User = require('../models/User.model')
const { route } = require('./package.routes')

router.get('/:userId', (req, res, next)=>{

    const{userId} = req.params

    User
        .findById(userId)
        .then(oneUser => res.json(oneUser))
        .catch(error => next(error))
})


route.put('/:userId', (req, res, next)=>{
    
    const {userId} = req.params
    const {image, username} = req.body

    User
        .findByIdAndUpdate(userId, {image, username})
        .then(()=>res.sendStatus(204))
        .catch(error => next(error))
})


router.delete('/:userId', (req, res)=>{

    const {userId} = req.params

    User
        .findByIdAndDelete(userId)
        .then(()=> res.sendStatus(204))
        .catch(error => next(error))

})

module.exports = router