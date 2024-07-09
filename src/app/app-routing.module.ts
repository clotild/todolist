import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
  { path: 'update/:id', component: TodoUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
