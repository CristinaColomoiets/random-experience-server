const router = require("express").Router()
const { isAuthenticated } = require('../middleware/verify')
const Experience = require("../models/Experience.model")

const Purchase = require("../models/Purchase.model")

router.post('/', isAuthenticated, (req, res, next) => {

    const { package } = req.body;
    const { _id: user } = req.payload;

    Experience
        .countDocuments()
        .then(totalExp => {
            const randomExpNumber = Math.floor(Math.random() * totalExp)
            return Experience.findOne().skip(randomExpNumber)
        })
        .then(randomExperience => {
            return Purchase.create({ package, user, experience: randomExperience._id });
        })
        .then(newPurchase => {
            return Purchase.findById(newPurchase._id).populate('package').populate('experience');
        })
        .then(purchase => res.json(purchase))
        .catch(err => next(err));
});



module.exports = router