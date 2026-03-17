import { useRef } from "react";
import Button from "./Button";
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import { todoItemClientModel } from "../utils/ModelUtil";

const AddTodo = () => {
  const todoTextInput = useRef();
  const todoDateInput = useRef();
const {addTodoItem} = useContext(TodoItemsContext);
  const addHandler = ()  => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoTextInput.current.value = '';
    todoDateInput.current.value = '';
    fetch("http://localhost:5000/todos",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        task:todoText,
        date:todoDate
      })
    }).then(res => res.json())
    .then(serverItem => {
      const { id,todoText,todoDate} = todoItemClientModel(serverItem);
    
   addTodoItem(id,todoText,todoDate)
    })

  }
  return (
<div className="container ">
  <div className="row kg-row">
  
    <div className="col-5">
      <input type="text"
       className="form-control" 
       placeholder="Enter Todo Here" 
       ref = {todoTextInput}
        />
    </div>
    <div className="col-3">
      <input type="date"
       className="form-control"
       ref = {todoDateInput}
        />
        </div>
     <div className="col-2">
<Button btntype='success'  btnText='Add' handler={addHandler} />
</div>
  </div>
</div>
  )
}
export default AddTodo;