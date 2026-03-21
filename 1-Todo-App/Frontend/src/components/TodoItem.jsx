import { useContext, useState } from 'react'
 import Button from './Button' 
import { TodoItemsContext } from '../store/TodoItemsContext'

 import { todoItemToClientModel } from '../utils/ModelUtil'
 const TodoItem = ({ id, todoText, todoDate,completed }) => {
  const { deleteTodoItem } = useContext(TodoItemsContext)
  const [isComplete, setIsComplete] = useState(completed)

  const formattedDate = new Date(todoDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const toggleCompleted = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({completed: !isComplete})
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        console.log('updatedItem', updatedItem);
        const clientupdatedItem = todoItemToClientModel(updatedItem)
         setIsComplete(clientupdatedItem.completed);
       
      })
      .catch((err) => {
        console.log(err)
      })
     }
  const deleteHandler = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deleteItem) => {
        const clientDeletedItem = todoItemToClientModel(deleteItem)
        deleteTodoItem(clientDeletedItem.id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <article className="group flex flex-col gap-3 rounded-xl border border-slate-700/40 bg-slate-800/30 p-4 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-slate-600/50 hover:bg-slate-800/50 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
      
      <input
        type="checkbox"
        checked={isComplete}
        onChange={toggleCompleted}
        className="w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
      />

      <div
        className={`flex-1 ${
          isComplete ? "line-through text-gray-500" : "text-slate-100"
        }`}
      >
        <p className="min-w-0 truncate leading-relaxed">
          {todoText}
        </p>

        <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-4">
          <span className="inline-flex items-center rounded-lg bg-slate-700/50 px-2.5 py-1 text-xs font-medium text-slate-400">
            {formattedDate}
          </span>
        </div>
      </div>

      <div className="flex-shrink-0 sm:ml-auto">
        <Button btntype="danger" btnText="Delete" handler={deleteHandler} />
      </div>
    </article>
  )
}
export default TodoItem