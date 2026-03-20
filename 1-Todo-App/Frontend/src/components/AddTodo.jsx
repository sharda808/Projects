import { useRef } from 'react'
import Button from './Button'
import { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoItemsContext'
import { todoItemToClientModel } from '../utils/ModelUtil'

const AddTodo = () => {
  const todoTextInput = useRef()
  const todoDateInput = useRef()
  const { addTodoItem } = useContext(TodoItemsContext)

  const addHandler = () => {
    const todoText = todoTextInput.current.value
    const todoDate = todoDateInput.current.value
    todoTextInput.current.value = ''
    todoDateInput.current.value = ''
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: todoText,
        date: todoDate,
      }),
    })
      .then((res) => res.json())
      .then((serverItem) => {
        const { id, todoText, todoDate } = todoItemToClientModel(serverItem)
        addTodoItem(id, todoText, todoDate)
      })
  }

  return (
    <section className="mb-6 rounded-2xl border border-slate-700/40 bg-slate-800/30 p-4 shadow-xl backdrop-blur-sm sm:mb-8 sm:p-6 md:rounded-3xl">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm">
        Add new task
      </h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4">
        <div className="min-w-0 flex-1">
          <label htmlFor="todo-text" className="sr-only">
            Task description
          </label>
          <input
            id="todo-text"
            type="text"
            className="w-full rounded-xl border border-slate-600/80 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/25 sm:py-3.5"
            placeholder="What needs to be done?"
            ref={todoTextInput}
          />
        </div>
        <div className="flex min-w-0 gap-3 sm:w-auto sm:flex-shrink-0 sm:gap-4">
          <div className="min-w-0 flex-1 sm:w-44">
            <label htmlFor="todo-date" className="sr-only">
              Due date
            </label>
            <input
              id="todo-date"
              type="date"
              className="h-full w-full min-h-[44px] rounded-xl border border-slate-600/80 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none transition-all duration-200 focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/25 [color-scheme:dark] sm:min-h-0"
              ref={todoDateInput}
            />
          </div>
          <div className="flex-shrink-0">
            <Button btntype="success" btnText="Add" handler={addHandler} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AddTodo
