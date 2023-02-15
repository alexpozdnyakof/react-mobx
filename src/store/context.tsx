import { createContext, ReactNode, useContext } from 'react'
import { TodoListStore, TodoStore } from './store'

type TodoListContextState = {
  store: TodoListStore
}

const TodoListContext = createContext({} as TodoListContextState)


type TodoListProviderProps = {
  children: ReactNode
  todos: Array<TodoStore>
}


export function TodoListProvider({children, todos}: TodoListProviderProps) {
  const store = new TodoListStore(todos)

  return (
    <TodoListContext.Provider value={{store}}>
      {children}
    </TodoListContext.Provider>
  )
}


export const useStore = () => useContext(TodoListContext)
