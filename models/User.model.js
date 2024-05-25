const { Schema, model } = require("mongoose");

const userSchema = new Schema({

<<<<<<< HEAD
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
    default: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-No-Background.png'
  }
},

  {
    timestamps: true
  }
=======
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
        default: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-No-Background.png'
    }
},

    {
        timestamps: true
    }
>>>>>>> 494c4a98fc2300c9834ec608d60ea6303f363ee0
)

const User = model("User", userSchema)

module.exports = User
