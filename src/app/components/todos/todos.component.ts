import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      console.log('calling from getTodos', todos);
      this.todos = todos;
    }); // subscribe is similar to ".then"
  }

  deleteTodo(todo: Todo) {
    console.log('delete me');

    //Deleting todos from UI
    // returns all todos where id does not match the passed todo
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    // delete from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    console.log('adding new todo: ', todo);
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}
