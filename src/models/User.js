const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  country: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  region: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  zipCode: {
    type: Number,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
