const { Schema, model } = require("mongoose");

const experienceSchema = new Schema({

    country: {
        type: String,
        required: true
    },

    hotel: {
        type: String,
        required: true,

    },

    places: {
        type: [String],
        required: true
    },

    package: {
        type: Schema.ObjectId,
        ref: 'Package'
    },

    location: {
        type: {
            type: String
        },
        coordinates: {
            type: [Number]
        }
    }

},
    {
        timestamps: true
    }
)

experienceSchema.index({ location: '2dsphere' })

const Experience = model("Experience", experienceSchema)

module.exports = Experience