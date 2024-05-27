const router = require("express").Router()

const Package = require("../models/Package.model")


router.post('/addPackage', (req, res) => {
    const { prices, description, image, experience } = req.body

    Package
        .create({ prices, description, experience, image })
        .then(newPackage => res.json(newPackage))
        .catch(err => res.json({ code: 500, errDetails: err }))
})

router.get('/allPackages', (req, res) => {
    Package
        .find()
        .populate('experience')
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
    const { price, desceiprtion, experience, image } = req.body

    Package
        .findByIdAndUpdate(packageId, { price, desceiprtion, experience, image })
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

// router.get('/package/random/experience', (req, res) => {

//     Package
//         .findbyIdAnd
// })


module.exports = router
