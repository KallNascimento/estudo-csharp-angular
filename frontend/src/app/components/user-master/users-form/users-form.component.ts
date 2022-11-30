import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, take } from 'rxjs';
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent {

  form = this.formBuilder.group({
    id: 0,
    name: ['', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)]],
  

  })

  public users$: Observable<User[]>;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog,
    //public dialogRef: MatDialogRef<TodoFormComponent>,
    // @Inject(MAT_DIALOG_DATA) public todo: Todo,
  ) { }


  ngOnInit(): void {
    const user: User = this.route.snapshot.data['user'];
    this.form.setValue({
      id: user.id,
      name: user.name,

    });
  }

  onCancel() {
    this.location.back()
  }
  onSubmit() {
    this.userService.save(this.form.value)
      .subscribe(result => this.onSuccess('Dados salvos com sucesso!'), error =>
        this.onError('Erro ao salvar a usuário.'));
  }

  private onError(errorMsg: string) {
    this._snackBar.openFromComponent(ErrorSnackComponent, {
      duration: 5000,
      data: errorMsg,
    });
  }

  private onSuccess(errorMsg: string) {
    this._snackBar.openFromComponent(ErrorSnackComponent, {
      duration: 5000,
      data: errorMsg,
    });
  }
}
