import { useContext } from 'react'
import { TodoItemsContext } from '../store/TodoItemsContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { todoItemToClientModel } from '../utils/ModelUtil'

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((items) => {
        const newItems = items.map(todoItemToClientModel)
        addAllTodoItems(newItems)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {isLoading && (
        <div className="mb-8 flex flex-col items-center justify-center gap-4 py-16 sm:py-20">
          <div
            className="h-12 w-12 animate-spin rounded-full border-2 border-slate-600 border-t-emerald-400"
            role="status"
            aria-label="Loading"
          />
          <p className="text-sm text-slate-500">Loading your tasks…</p>
        </div>
      )}
      {!isLoading && todoItems.length === 0 && (
        <div className="mb-8 rounded-2xl border border-dashed border-slate-700/50 bg-slate-800/20 py-12 text-center sm:py-16">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-700/30">
            <svg
              className="h-8 w-8 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-slate-400">No tasks yet</p>
          <p className="mt-2 text-sm text-slate-600">Add one above to get started</p>
        </div>
      )}
    </>
  )
}

export default LoadItems
