import { action, computed, makeObservable, observable } from 'mobx'
import { nanoid } from 'nanoid'

export class TodoStore {
    id = nanoid()
    finished = false

    constructor(public title: string){
      makeObservable(this, {
        title: observable,
        finished: observable,
        toggle: action
      })
    }

    toggle(){
      this.finished = !this.finished
    }
}

type Todo = {
  id: string
  done: boolean
  title: string
}


export class TodoListStore {
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  constructor(public todos: Array<TodoStore>){
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      add: action,
      toggle: action,
      remove: action
    })
  }

  toggle(id: string){
    const todo = this.todos.find(todo => todo.id === id)
    if(todo){todo.finished = !todo?.finished}
  }
  add(title: string){
    this.todos.push(new TodoStore(title))
  }
  remove(id: string){
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
  edit(id: string, newTitle: string | null){
    if(!newTitle) return;
    const todo = this.todos.find(todo => todo.id === id)
    if(todo){todo.title = newTitle}
  }

}


