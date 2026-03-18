const mongoose = require('mongoose');
const todoItemsSchema =  new mongoose.Schema({
  task:{type:String,required:true},
  data:{type:Date, required:true},
  completed:{type:Boolean, default:false},
  createAt:{type:Date, default:Date.now}
});

module.exports = mongoose.model('TodoItem',todoItemsSchema);
