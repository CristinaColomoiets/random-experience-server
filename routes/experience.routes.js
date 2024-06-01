const router = require("express").Router()
const Experience = require("../models/Experience.model")


router.post('/', (req, res, next) => {
    const { country, places, hotel, package, imageUrl, imageLinks, location } = req.body

    Experience
        .create({ country, places, hotel, package, imageUrl, imageLinks, location })  // Asegurarse de incluir imageLinks aquí
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
    const { country, places, hotel, package, imageUrl, imageLinks, location } = req.body

    Experience
        .findByIdAndUpdate(experienceId, { country, places, hotel, package, imageUrl, imageLinks, location }, { new: true })  // Asegurarse de incluir imageLinks aquí también
        .then(updatedExperience => res.json(updatedExperience))
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
