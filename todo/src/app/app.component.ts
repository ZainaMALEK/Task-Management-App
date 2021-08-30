
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { Store } from '@ngrx/store';
import { State } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos$: Observable<Todo[]> = this.todoService.todos$;
  public message: string;

  constructor(private todoService: TodoService,
    private store: Store<State>) {}

  public addTodo() {
    this.todoService.addTodo({ message: this.message, done: false });
  }

  public toggleTodo(index: number) {
    this.todoService.toggleTodo(index);
  }

  public deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }

}
