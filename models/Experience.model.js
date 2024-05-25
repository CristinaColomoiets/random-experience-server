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
<<<<<<< HEAD
        type: [String]

=======
        type: [String],
        required: true
>>>>>>> 494c4a98fc2300c9834ec608d60ea6303f363ee0
    },

},
    {
        timestamps: true
    }
)


const Experience = model("Experience", experienceSchema)

module.exports = Experience