const { Schema, model } = require("mongoose");

const userSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: [true, "The user's email address is mandatory"],
        minlength: [5, "The email needs a minimum of 5 characters"]
    },

    password: {
        type: String,
        required: [true, 'The user password is mandatory'],
    },

    username: {
        type: String,
        required: [true, 'Username is mandatory'],
        minlength: [3, 'The user needs at least 3 characters']
    },

    image: {
        type: String,
        default: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-No-Background.png"
    }
},

    {
        timestamps: true
    }
)

const User = model("User", userSchema)

module.exports = User
