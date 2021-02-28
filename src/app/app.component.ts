import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';
  todos = [];
  todoItem: string;
  insertNewTodo() {
    if (this.todoItem && !this.todos.some(items => items === this.todoItem)) {
      this.todos.push(this.todoItem);

    } else { alert('please check new todo is not exist or not empty'); }

    this.todoItem = '';
  }
  delete(idx) {
    this.todos.splice(idx, 1);
  }
}
