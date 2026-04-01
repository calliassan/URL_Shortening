const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 100,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 100,
  },
});
const usermodel = mongoose.model("newusermodel", userSchema);
module.exports = usermodel;
