import { observer } from 'mobx-react-lite'
import { TodoListStore, TodoStore } from '../store'
import Todo from './todo'

type TodoListProps = {
  todoList: TodoListStore
}

const TodoList = observer(({todoList}: TodoListProps) => (
  <div>
    <ul>
      {todoList.todos.map((todo: TodoStore) => (
       <li><Todo todo={todo}/></li>
      ))}
    </ul>
    <span>Tasks left: {todoList.unfinishedTodoCount}</span>
  </div>
))

export default TodoList