import { observer } from 'mobx-react-lite';
import { TodoStore } from '../store';
import styles from './todo.module.css'

const Todo = observer(({todo}: {todo: TodoStore}) => (
  <div className={styles['todo']}>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.toggle()}
    />
    <span>{todo.title}</span>
  </div>
))


export default Todo