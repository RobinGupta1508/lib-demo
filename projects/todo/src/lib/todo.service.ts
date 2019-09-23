import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

export class TodoService {

  todoList: Todo[] = [];
  constructor() { }

  public addTodo(todo: Todo){
    const index = this.todoList.findIndex(item => item.title == todo.title);
    if(index == -1){
      todo.id = this.todoList.length+1;
      this.todoList.push(todo);
    }
    
  }

  public getTodoList(): Todo[]{
    this.todoList = this.todoList.map((todo: any) => {todo.selected = false; return todo})
    return this.todoList;
  }

  public changeTodoStatus(selectedTodo, status){
    this.todoList = this.todoList.map(todo => {
      if(selectedTodo.findIndex(item => item.id == todo.id) > -1){
        todo.status = status;
      }
      return todo; 
    });
  }
}
