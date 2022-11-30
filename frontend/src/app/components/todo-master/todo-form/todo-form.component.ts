import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, take } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.type';

import { User } from 'src/app/models/user'
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  form = this.formBuilder.group({
    id: 0,
    description: ['', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(100)]],
    userid: 0
  })

  public users$: Observable<User[]>;
  durationInSeconds: number = 5;
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private userService: UserService,
    private todoService: TodoService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog,
    //public dialogRef: MatDialogRef<TodoFormComponent>,
    // @Inject(MAT_DIALOG_DATA) public todo: Todo,
  ) { }


  ngOnInit(): void {
    const todo: Todo = this.route.snapshot.data['todo'];
    this.form.setValue({
      id: todo.id,
      description: todo.description,
      userid: todo.userId
    });
  }

onCancel() {
  this.location.back()
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

onSubmit() {
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
