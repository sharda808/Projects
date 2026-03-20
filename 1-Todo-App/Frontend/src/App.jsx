import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import { TodoItemsProvider } from './store/TodoItemsContext'
import LoadItems from './components/LoadItems'

function App() {
  return (
    <TodoItemsProvider>
      <div className="min-h-screen bg-[#0c0e12] text-slate-100">
        {/* Ambient gradient orbs */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute left-1/2 top-0 h-60 w-96 -translate-x-1/2 rounded-full bg-violet-500/5 blur-[80px]" />
        </div>

        <div className="relative mx-auto min-h-screen max-w-2xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
          <AppName />
          <AddTodo />
          <LoadItems />
          <TodoItems />
        </div>
      </div>
    </TodoItemsProvider>
  )
}

export default App
