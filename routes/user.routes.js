const router = require('express').Router()
const User = require('../models/User.model')

router.get('/:userId', (req, res, next) => {

    const { userId } = req.params

    User
        .findById(userId)
        .then(oneUser => res.json(oneUser))
        .catch(error => next(error))
})


router.put('/:userId', (req, res, next) => {

    const { userId } = req.params
    const { image, username, balance } = req.body

    User
        .findByIdAndUpdate(userId, { image, username, balance })
        .then(() => res.sendStatus(204))
        .catch(error => next(error))
})

router.get('/:userId?purchaseId=/:purchaseId')



router.delete('/:userId', (req, res) => {

    const { userId } = req.params

    User
        .findByIdAndDelete(userId)
        .then(() => res.sendStatus(204))
        .catch(error => next(error))

})

module.exports = router