import { nanoid } from 'nanoid';
import { Todo } from './todo-store';

export const initialTodos: Array<Todo> = [
  {
    id: nanoid(),
    title:"Get Coffee",
    done: false
  },
  {
    id: nanoid(),
    title:"Smoke Weed",
    done: false
  },
  {
    id: nanoid(),
    title:"Write MobX Todolist",
    done: false
  },
]