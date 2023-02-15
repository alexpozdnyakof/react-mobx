import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoListProvider } from './store'
import { TodoStore } from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <TodoListProvider
        todos={[new TodoStore("Get Coffee"), new TodoStore("Smoke Weed"), new TodoStore("Write MobX Todolist")]}
      >
        <App />
      </TodoListProvider>

  </React.StrictMode>,
)
