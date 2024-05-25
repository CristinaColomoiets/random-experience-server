const router = require("express").Router()

const Package = require("../models/Package.model")


router.post('/addPackages', (req, res) => {

    res.send('FUNCIONA EL POST DE PACKAGE')

})

router.get('/allPackages', (req, res) => {
    res.send('Funciona el get')
})


module.exports = router