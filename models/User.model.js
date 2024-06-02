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
    minlength: [4, "The password needs a minimum of 4 characters"]
  },

  username: {
    type: String,
    required: [true, 'Username is mandatory'],
    minlength: [3, 'The user needs at least 3 characters']
  },
  image: {
    type: String,
    default: 'https://res.cloudinary.com/drpdy7tju/image/upload/v1717319567/default-avatar-icon-of-social-media-user-vector_m5rgeb.jpg'
  },

  balance: {
    type: Number,
    default: 0
  },

  role: {
    type: String,
    default: 'USER'
  }


},

  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User
