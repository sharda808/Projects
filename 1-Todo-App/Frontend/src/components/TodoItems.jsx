import { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoItemsContext } from '../store/TodoItemsContext'

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext)

  if (todoItems.length === 0) return null

  return (
    <section className="animate-fade-slide-up">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:mb-5 sm:text-sm">
        Your tasks <span className="ml-2 font-normal text-slate-600">({todoItems.length})</span>
      </h2>
      <div className="flex flex-col gap-3 sm:gap-4">
        {todoItems.map((item, index) => (
          <div
            key={item.id}
            className="animate-fade-slide-up"
            style={{ animationDelay: `${Math.min(index * 50, 300)}ms` }}
          >
            <TodoItem
              id={item.id}
              todoText={item.todoText}
              todoDate={item.todoDate}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TodoItems
