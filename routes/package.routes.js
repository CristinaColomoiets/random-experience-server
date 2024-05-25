const router = require("express").Router()

const Package = require("../models/Package.model")


router.post('/addPackage', (req, res) => {

    const { prices, description, experience } = req.body

    Package
        .create({ prices, description, experience })
        .then(newPackage => res.json(newPackage))
        .catch(err => res.json({ code: 500, errDetails: err }))

})

router.get('/allPackages', (req, res) => {
    res.send('Funciona el get')
})


module.exports = router