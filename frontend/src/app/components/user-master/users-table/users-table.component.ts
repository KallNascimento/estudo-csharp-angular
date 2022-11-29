import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of, take } from 'rxjs';
import { User } from 'src/app/interfaces/user.type';
import { UserService } from 'src/app/services/user.service';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  durationInSeconds = 5; //Snackbar timer

  displayedColumns: string[] = ['#', 'Name'];
  users$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {
    this.users$ = this.userService.getAll()
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
