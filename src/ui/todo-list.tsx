import { flowResult } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import { Todo, TodosStore } from '../todo-store'
import styles from './todo-list.module.css'

const TodoForm = ({onCreate}: {onCreate: (title: string) => void}) => {
  const ref = useRef<HTMLInputElement>(null)
  const create = () => {
    if(ref.current && ref.current.value.length > 0){
      onCreate(ref.current.value)
      ref.current.value = ''
    }
  }
  return (
    <div>
      <input type="text" className={styles.todoInput} ref={ref}/>
      <button onClick={create}>Add task</button>
    </div>
    )
}

const TodoList = observer(({todoList}: {
  todoList: TodosStore
}) => {
  useEffect(() => {
    flowResult(todoList.load())
  }, [])
  return (
  <div>
    <TodoForm onCreate={(title: string) => todoList.add(title)}/>
    <ul className={styles.list}>
      {todoList.todos.map((todo: Todo) => (
        <li className={styles.listItem} key={todo.id}>
          <input
            className={styles.todoToggle}
            type="checkbox"
            checked={todo.done}
            onChange={() => todoList.toggle(todo.id)}
          />
          <span className={styles.todoTitle} onDoubleClick={() => todoList.edit(todo.id, prompt('Change title', todo.title))}>{todo.title}</span>
          <div style={{flexGrow: 1}}/>
          <button  className={styles.todoDelete} onClick={() => todoList.remove(todo.id)}>✕</button>
        </li>
      ))}
    </ul>
    <span>Tasks left: {todoList.unfinishedTodoCount}</span>
  </div>
)})

export default TodoList