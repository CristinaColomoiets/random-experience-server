const router = require("express").Router()

const Package = require("../models/Package.model")


router.post('/', (req, res, next) => {

    const { title, price, sortDescription, extendedDescription, image, experience } = req.body

    Package
        .create({ title, price, sortDescription, extendedDescription, image, experience })
        .then(newPackage => res.sendStatus(201).json(newPackage))
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {

    Package
        .find()
        // .select( { title, price, sortDescription,extendedDescription, image, experience })
        .then(allPackages => res.json(allPackages))
        .catch(err => next(err))
})

router.get('/:packageId', (req, res, next) => {

    const { packageId } = req.params

    Package
        .findById(packageId)
        .then(onePackage => res.json(onePackage))
        .catch(err => next(err))
})

router.put('/:packageId', (req, res, next) => {

    const { packageId } = req.params
    const { title, price, sortDescription, extendedDescription, image, experience } = req.body

    Package
        .findByIdAndUpdate(packageId, { title, price, sortDescription, extendedDescription, image, experience })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

router.delete('/:packageId', (req, res, next) => {

    const { packageId } = req.params

    Package
        .findByIdAndDelete(packageId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})


module.exports = router
