import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of, take } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {
  durationInSeconds = 5; //Snackbar timer

  displayedColumns: string[] = ['#', 'Description'];
  todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private _snackBar: MatSnackBar
  ) {
    this.todos$ = this.todoService.getAll()
      .pipe(
        catchError((error) => {
          this.onError('Oops! Não consegui carregar os dados.')
          return of([])
        })
      );
  }
  onError(errorMsg: string) {
    this._snackBar.openFromComponent(ErrorSnackComponent, {
      duration: this.durationInSeconds * 1000,
      data: errorMsg,
    });
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
