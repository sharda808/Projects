const mongoose = require('mongoose');
const userSchema = new mongoose. Schema({
  name:{type:String, required: true},
  email: {type: String, requred: true},
  password:{type: String, required: true},
  userType:{type:String, required: true, enum:['buyer', 'seller']},
});
module.exports = mongoose.model("User", userSchema);