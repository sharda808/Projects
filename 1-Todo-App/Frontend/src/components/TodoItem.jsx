import { useContext, useState } from 'react'
import Button from './Button'
import { TodoItemsContext } from '../store/TodoItemsContext'
import { todoItemToClientModel } from '../utils/ModelUtil'

const TodoItem = ({ id, todoText, todoDate }) => {
  const { deleteTodoItem } = useContext(TodoItemsContext)
  const[isComplete,setIsComplete] = useState(false);
  console.log('isComplete', isComplete);
  const formattedDate = new Date(todoDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
const toggleCompleted = () => {
  setIsChecked(!isChecked);
}
  const deleteHandler = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
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
    <input type="checkbox" 
    checked = {isComplete}
    onChange={setIsComplete}
    className='w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500'
    />
      <p className="min-w-0 flex-1 truncate 
      text-slate-100 leading-relaxed">{todoText}</p>
      <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-4">
        <span className="inline-flex items-center rounded-lg bg-slate-700/50 px-2.5 py-1 text-xs font-medium text-slate-400">
          {formattedDate}
        </span>
        <div className="flex-shrink-0 sm:ml-auto">
          <Button btntype="danger" btnText="Delete" handler={deleteHandler} />
        </div>
      </div>
    </article>
  )
}
export default TodoItem
