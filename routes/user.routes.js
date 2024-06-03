const router = require("express").Router()
const { isAuthenticated } = require('../middleware/verify')
const User = require("../models/User.model")

router.get('/balance', isAuthenticated, (req, res, next) => {

    const { _id: userId } = req.payload

    User.findById(userId)
        .select({ balance: 1 })
        .then(user => res.json(user))
        .catch(error => next(error))

})

router.post('/balance/add', isAuthenticated, (req, res, next) => {

    const { amount } = req.body
    const { _id: userId } = req.payload

    User.findByIdAndUpdate(userId, { $inc: { balance: amount } }, { new: true, select: 'balance' })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))

})

router.put('/balance/spend', isAuthenticated, (req, res, next) => {

    const { amount } = req.body
    const { _id: userId } = req.payload

    User.findById(userId)
        .then(user => {
            if (user.balance >= amount) {
                return User.findByIdAndUpdate(userId, { $inc: { balance: -amount } }, { new: true, select: 'balance' })
            } else {
                res.sendStatus(400)
            }
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => next(err))
})

module.exports = router