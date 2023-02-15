import './App.css'
import { createTodoStore } from './todo-store'
import { initialTodos } from './todos'
import { Card, TodoList } from './ui'
import { createServer} from 'miragejs'

createServer({
  routes() {
    this.get("/api/todos", () => initialTodos)
  },
})


function App() {


  const store = createTodoStore([])

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
