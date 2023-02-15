import './App.css'
import { createTodoStore } from './todo-store'
import { initialTodos } from './todos'
import { Card, TodoList } from './ui'



function App() {


  const store = createTodoStore(initialTodos)

  return (
    <div className="App">
      <Card>
        <h1>Today activity list</h1>
        <TodoList todoList={store}/>
      </Card>
    </div>
  )
}

export default App
