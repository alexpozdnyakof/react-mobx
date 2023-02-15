import { action, computed, makeObservable, observable } from 'mobx'

export class TodoStore {
    id = Math.random()
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


export class TodoListStore {
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  constructor(public todos: Array<TodoStore>){
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed
    })
  }
}


