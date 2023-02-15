import './App.css'
import { useStore } from './store/context'
import { Card, TodoList } from './ui'

function App() {
  const {store} = useStore()

  return (
    <div className="App">
      <Card>
        <h1>Todo list</h1>
        <TodoList  todoList={store}/>
      </Card>
    </div>
  )
}

export default App
