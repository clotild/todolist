import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios, { Axios, AxiosResponse } from 'axios';

export interface Todo {
  id: number;
  description: string;
  targetDate: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:8080';

  constructor() {}
  getTodos(): Promise<AxiosResponse<Todo[], any>> {
    return axios.get<Todo[]>(this.apiUrl);
  }
  addTodo(todo: Todo): Promise<AxiosResponse<Todo, any>> {
    return axios.post<Todo>(this.apiUrl, todo);
  }
  updateTodo(id: number, todo: Todo): Promise<AxiosResponse<Todo, any>> {
    return axios.put<Todo>(`${this.apiUrl}/${id}`, todo);
  }
  deleteTodo(id: number): Promise<AxiosResponse<void, any>> {
    return axios.delete<void>(`${this.apiUrl}/${id}`);
  }
  getTodoById(id: number): Promise<AxiosResponse<Todo, any>> {
    return axios.get<Todo>(`${this.apiUrl}/${id}`);
  }
}
