const mongoose = require('mongoose');
const productSchema = new mongoose.Schema ({
  name:{type:String, rqeuired: true},
  brand:{type:String, required: true},
  price :{type: Number, rqeuired: true},
  description:{type:String, required: true},
  imageUrl: {type: String, required: true},
  category:{type: String, required: true},
  rating :{type:Date, required: true},
  createAt:{type: Date, default: Date.now()},
  // seller :{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref:'User',
  // }
});
module.exports = mongoose.model ("Product", productSchema);