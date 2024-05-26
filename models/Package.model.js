const { Schema, model } = require("mongoose");

const PackageSchema = new Schema({

    price: {
        type: String
    },

    image: {
        type: String
    },

    description: {
        type: String
    },

    experience: {
        type: Schema.ObjectId,
        ref: 'Experience'
    }

},
    {
        timestamps: true
    })
const Package = model("Package", PackageSchema)
module.exports = Package