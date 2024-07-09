import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
      targetDate: ['', Validators.required],
      done: [false],
    });
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value).then(() => {
        this.router.navigate(['/todos']);
      });
    }
  }
}
