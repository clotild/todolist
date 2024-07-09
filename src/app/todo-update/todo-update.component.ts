import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService, Todo } from '../todo.service';
import { AxiosResponse } from 'axios';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css'],
})
export class TodoUpdateComponent implements OnInit {
  todoForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
      targetDate: ['', Validators.required],
      done: [false],
    });
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.todoService.getTodoById(this.id).then((value: AxiosResponse<Todo, any>) => {
      this.todoForm.patchValue(value.data);
    });
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      this.todoService
        .updateTodo(this.id, this.todoForm.value)
        .then(() => {
          this.router.navigate(['/todos']);
        });
    }
  }
}
