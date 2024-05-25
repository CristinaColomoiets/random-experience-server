const router = require("express").Router()

const Experience = require("../models/Experience.model")

router.post('/addExperience', (req, res) => {
    const { country, places, hotels } = req.body

    Experience
        .create({ country, places, hotels })
        .then(newExperience => res.json(newExperience))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.get('/allExperiences', (req, res) => {
    Experience
        .find()
        .then(allExperiences => res.json(allExperiences))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.get('/:experienceId', (req, res) => {
    const { experienceId } = req.params

    Experience
        .findById(experienceId)
        .then(experience => res.json(experience))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.put('/:experienceId', (req, res) => {

    const { experienceId } = req.params
    const { country, places, hotels } = req.body

    Experience
        .findByIdAndUpdate(experienceId, { country, places, hotels })
        .then(experienceUpdate => res.sendStatus(204))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.delete('/:experienceId', (req, res) => {
    const { experienceId } = req.params

    Experience
        .findByIdAndDelete(experienceId)
        .then(() => res.json())
        .catch(err => res.json({ code: 500, errDetails: err }))

})
module.exports = router