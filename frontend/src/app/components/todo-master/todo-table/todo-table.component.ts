import { Component } from '@angular/core';
import { catchError, Observable, take } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {
  displayedColumns: string[] = ['#', 'Description'];
  todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
  ) {
    this.todos$ = this.todoService.getAll();
  }

  ngOnInit(): void {
    // this.loadTodos();
  }

  // private loadTodos() {
  //   this.todos$ = this.todoService.getAll()
  //     .pipe(
  //       catchError((error) => {
  //         console.log(error);
  //         throw error;
  //       }),
  //       take(1)
  //     );
  // }
}
