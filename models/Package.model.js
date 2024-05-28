const { Schema, model } = require("mongoose");

const PackageSchema = new Schema({
    title: {
        type: String,
    },

    price: {
        type: String
    },

    image: {
        type: String
    },

    description: {
        type: String
    }

},
    {
        timestamps: true
    })
const Package = model("Package", PackageSchema)
module.exports = Package