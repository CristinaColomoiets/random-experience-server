const { Schema, model } = require("mongoose");

const PackageSchema = new Schema({

    prices: {
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