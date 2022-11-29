import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, take } from 'rxjs';

import { User } from 'src/app/models/user'
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent {
  form: FormGroup;

  public users$: Observable<User[]>;
  durationInSeconds: number = 5;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private todoService: TodoService,
    private _snackBar: MatSnackBar,
  ) {
    this.form =
      this.formBuilder.group({
        id:Number,
        name: [null],
      })
  }
  ngOnInit(): void {
    this.loadUsers();
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
    //console.log(this.form.value);
    this.userService.save(this.form.value)
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
