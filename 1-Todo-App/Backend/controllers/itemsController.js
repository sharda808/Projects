const TodoItem = require("../model/TodoItem")
exports.postTodoItem = async(req,res,next) => {
try {
const todoItem = new TodoItem(req.body);
const item = await todoItem.save();
res.json(item);
}catch(err){
res.status(500).json({message:err});
}
}
exports.getTodoItems = async(req,res,next) => {
  try {
    const items = await TodoItem.find();
    res.json(items);
  }catch(err){
    res.status(500).json({message:err});
  }
}
exports.deleteTodoItem = async(req,res,next) => {
try{
const id = req.params.id;
const deleteItem  = await TodoItem.findByIdAndDelete(id);
console.log(deleteItem);
res.json(deleteItem);
}
catch(err){
res.status(500).json({message:err});
}
}