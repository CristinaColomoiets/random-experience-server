const { Schema, model } = require("mongoose");

const experienceSchema = new Schema({

    country: {
        type: String,
        required: true
    },

    hotel: {
        type: String,
        required: true
    },
    places: {
        type: [String],
        required: true
    },

},
    {
        timestamps: true
    }
)


const Experience = model("Experience", experienceSchema)

module.exports = Experience