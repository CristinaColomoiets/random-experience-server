const router = require("express").Router()

const Experience = require("../models/Experience.model")

router.post('/', (req, res, next) => {
    const { country, places, hotel, package, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]

    }
    Experience
        .create({ country, places, hotel, package, location })
        .then(newExperience => res.status(201).json(newExperience))
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {
    Experience
        .find()
        .then(allExperiences => res.json(allExperiences))
        .catch(err => next(err))

})

router.get('/:experienceId', (req, res, next) => {
    const { experienceId } = req.params

    Experience
        .findById(experienceId)
        .then(experience => res.json(experience))
        .catch(err => next(err))

})

router.put('/:experienceId', (req, res, next) => {

    const { experienceId } = req.params
    const { country, places, hotel, package, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]

    }

    Experience
        .findByIdAndUpdate(experienceId, { country, places, hotel, package, location })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))

})

router.delete('/:experienceId', (req, res, next) => {
    const { experienceId } = req.params

    Experience
        .findByIdAndDelete(experienceId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))


})
module.exports = router