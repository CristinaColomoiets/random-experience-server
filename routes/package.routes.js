const router = require("express").Router()

const Package = require("../models/Package.model")


router.post('/addPackage', (req, res) => {
    const { prices, description, experience } = req.body

    Package
        .create({ prices, description, experience })
        .then(newPackage => res.json(newPackage))
        .catch(err => res.json({ code: 500, errDetails: err }))

    Package
        .create({ prices, description, experience })
        .then(newPackage => res.json(newPackage))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.get('/allPackages', (req, res) => {
    Package
        .find()
        .then(allPackages => res.json(allPackages))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.get('/:packageId', (req, res) => {
    const { packageId } = req.params
    Package
        .findById(packageId)
        .then(onePackage => res.json(onePackage))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.put('/:packageId', (req, res) => {
    const { packageId } = req.params
    const { price, description, experience } = req.body
    Package
        .findByIdAndUpdate(packageId, { price, description, experience })
        .then(packageUpdate => res.sendStatus(204))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.delete('/:packageId', (req, res) => {
    const { packageId } = req.params
    Package
        .findByIdAndDelete(packageId)
        .then(() => res.json())
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.get('/:packageId', (req, res) => {
    const {packageId} = req.params
    Package
        .findById(packageId)
        .then(onePackage => res.json(onePackage))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.put('/:packageId', (req, res) => {
    const {packageId} = req.params
    const {price, desceiprtion, experience} = req.body

    Package
        .findByIdAndUpdate(packageId, {price, desceiprtion, experience})
        .then(packageUpdate => res.sendStatus(204))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.delete('/:packageId', (req, res) => {
    const {packageId} = req.params
    Package
        .findByIdAndDelete(packageId)
        .then(() => res.json())
        .catch(err => res.json({ code: 500, errDetails: err }))
})

// router.get('/package/random/experience', (req, res) => {

//     Package
//         .findbyIdAnd
// })


module.exports = router
