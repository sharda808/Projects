const mongoose = require('mongoose');
const todoItemsSchema =  new mongoose.Schema({
  task:{type:String,required:true},
  date:{type:Date, required:true},
  completed:{type:Boolean, default:false},
  createAt:{type:Date, default:Date.now}
});

module.exports = mongoose.model('TodoItem',todoItemsSchema);
