const { Schema, model } = require("mongoose");

const purchaseSchema = new Schema({

    experience: {
        type: Schema.ObjectId,
        ref: 'Experience'
    },

    package: {
        type: Schema.ObjectId,
        ref: 'Package'
    },

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }

},
    {
        timestamps: true
    }
)


const Purchase = model("Purchase", purchaseSchema)

module.exports = Purchase