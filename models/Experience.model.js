const { Schema, model } = require("mongoose");

const experienceSchema = new Schema({

    country: {
        type: String,
        required: true
    },

    hotels: {
        type: String,
        required: true
    },
    places: {
        type: String

    },

},
    {
        timestamps: true
    }
)


const Experience = model("Experience", experienceSchema)

module.exports = Experience