const router = require("express").Router()

const Experience = require("../models/Experience.model")

router.post('/', (req, res) => {
    res.send("?POPOPPOOPPPPP")
    // Experience
    //     .find()
    //     .then(res => res.json(res))
    //     .catch(err => console.log(err))
})

module.exports = router