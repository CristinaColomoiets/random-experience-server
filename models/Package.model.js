const { Schema, model } = require("mongoose");

const PackageSchema = new Schema({
    title: {
        type: String
    },

    price: {
        type: Number
    },

    image: {
        type: String
    },

    sortDescription: {
        type: String
    },

    extendedDescription: {
        type: String
    },

},
    {
        timestamps: true
    })
const Package = model("Package", PackageSchema)
module.exports = Package