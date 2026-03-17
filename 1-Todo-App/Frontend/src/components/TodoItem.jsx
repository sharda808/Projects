import { useContext } from "react";
import Button from "./Button";
import { TodoItemsContext } from "../store/TodoItemsContext";

const TodoItem = ({id,todoText, todoDate,}) => {
 const {deleteTodoItem} = useContext(TodoItemsContext);
 const deleteHandler = () => {
  console.log("Deleting item",id);
  fetch(`http://localhost:5000/todos/${id}`, {
    method:'DELETE'

  })
  .then(res => res.json())
  .then(data => {
   deleteTodoItem(data.id);
  })
  .catch(err => {
    console.log(err);
  })
  // deleteTodoItem(id);
 }
return (
  <div className="container ">
  <div className="row kg-row">
      <div className="col-5 text-truncate">
       {todoText}
  </div>
        <div className="col-3">
{todoDate}
    </div>
     <div className="col-2">
<Button btntype='danger' btnText='Delete' handler={deleteHandler} />
</div>
  </div>
 </div>
)
}
export default TodoItem;