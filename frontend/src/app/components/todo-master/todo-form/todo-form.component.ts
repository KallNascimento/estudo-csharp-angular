import { Component, Inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, take } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.type';

import { User } from 'src/app/models/user'
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  form = this.formBuilder.group({
    id: 0,
    description: [''],
    userid: 0
  })

  public users$: Observable<User[]>;
  durationInSeconds: number = 5;
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private userService: UserService,
    private todoService: TodoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<TodoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo,
  ) { }


  ngOnInit(): void {
    this.loadUsers();
  }
  onCancel() {
    const dialogRef = this.dialog.closeAll();
  }
  private loadUsers() {
    this.users$ = this.userService.getAll()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        }),
        take(1)
      );
  }



  openDialog(todo: Todo | null): void {
    const dialogRef = this.dialog.open(TodoFormComponent, {
      width: '400px',
      data: todo != null ?
        todo : {
          id: '',
          description: '',
          userid: '',
        }
    })
  }

  onSubmit() {
    //console.log(this.form.value);
    this.todoService.save(this.form.value)
      .subscribe(result => this.onSuccess('Dados salvos com sucesso!'), error =>
        this.onError('Erro ao salvar a tarefa.'));
  }

  private onError(errorMsg: string) {
    this._snackBar.openFromComponent(ErrorSnackComponent, {
      duration: this.durationInSeconds * 1000,
      data: errorMsg,
    });
  }

  private onSuccess(errorMsg: string) {
    this._snackBar.openFromComponent(ErrorSnackComponent, {
      duration: this.durationInSeconds * 1000,
      data: errorMsg,
    });
  }
}
