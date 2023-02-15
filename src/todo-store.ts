import { action, computed, makeObservable, observable } from 'mobx'
import { nanoid } from 'nanoid'



export type Todo = {
  id: string
  done: boolean
  title: string
}

export function createTodoStore(todos: Array<Todo>){

  const store = {
    todos,
    get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.done).length
    },
    toggle(id: string){
      const todo = this.todos.find(todo => todo.id === id)
      if(todo){todo.done = !todo?.done}
    },
    add(title: string){
      this.todos.push({id: nanoid(), title, done: false})
    },
    remove(id: string){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    edit(id: string, newTitle: string | null){
      if(!newTitle) return;
      const todo = this.todos.find(todo => todo.id === id)
      if(todo){todo.title = newTitle}
    }
  }

  makeObservable(store, {
    todos: observable,
    unfinishedTodoCount: computed,
    add: action,
    toggle: action,
    remove: action
  })

  return store
}

export type TodosStore = ReturnType<typeof createTodoStore>


