const mongoose = require('mongoose');

const blogSchema = new mongoose.Sechema({
  title:{type:String, required:true},
  content:{type:String , required:true},
  author:{type:String, required: true},
  createdAt:{type:Date, default: Date.now},
  likes:{type:Number, default:0},
  commets:[{
    username:{type: String, required:true},
    content: {type:String, required: true},
    CreatedAt: {type: Date, default: Date.now},
  }]
});
module.exports = mongoose.model("Blog", blogSchema)