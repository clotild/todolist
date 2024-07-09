import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoService } from './todo.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
