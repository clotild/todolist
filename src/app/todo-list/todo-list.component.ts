import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../todo.service';
import { AxiosResponse } from 'axios';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().then((value: AxiosResponse<Todo[], any>) => {
      this.todos = value.data;
    });
  }

  delete(id: number): void {
    this.todoService.deleteTodo(id).then(() => {
      this.loadTodos();
    });
  }
}
