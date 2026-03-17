import { useContext, useEffect, useState } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";


 const LoadItems = () => {
 const{todoItems,addAllTodoItems} = useContext(TodoItemsContext);
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  setIsLoading(true);
 fetch('http://localhost:5000/todos')
.then(res => res.json())
.then(items =>{
 
  const newItems = items.map(item => 
    ({id:item.id,
       todoText:item.task, 
        todoDate: item.date
      })
    );
  addAllTodoItems(newItems);
})
.finally(() => {
setIsLoading(false);
})
 },[]);

 return (
  <>
{isLoading && <div className="text-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>} 
 {!isLoading && todoItems.length === 0 && <p>Enjoy Your day</p>}
  </>
 )
}
export default LoadItems;