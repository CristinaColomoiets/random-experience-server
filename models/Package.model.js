const { Schema, model } = require("mongoose");

const PackageSchema = new Schema({

    price: {
        type: String,
        required: true

    },

    description: {
        type: String,
        required: true

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