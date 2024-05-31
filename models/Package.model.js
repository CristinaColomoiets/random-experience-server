const { Schema, model } = require("mongoose");

const PackageSchema = new Schema({
    s: {
        type: String,
    },

    price: {
        type: String
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