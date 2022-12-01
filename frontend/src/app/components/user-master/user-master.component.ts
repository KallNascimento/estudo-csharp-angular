import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user.type';
@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit, OnDestroy {
  users$: Observable<User[]> | null = null;
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.refresh();
  }
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
  }

  refresh() {
    this.users$ = this.userService.list()
      .pipe(
        catchError((error) => {
          this.onError('Oops! Não consegui carregar os dados.')
          return of([])
        })
      );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onView(user: User) {
    console.log("Click");
    this.router.navigate(['view', user.id], { relativeTo: this.route });
    
  }
  onEdit(user: User) {
    this.router.navigate(['edit', user.id], { relativeTo: this.route });
  }

  onRemove(user: User) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse registro?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.refresh();
        this.userService.delete(user.id).subscribe(
          () => {
            this._snackBar.open('Registro removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover registro.')
        );
      }
    });
  }
  onError(errorMsg: string) {
    this._snackBar.openFromComponent(ErrorSnackComponent, {
      duration: 5000,
      data: errorMsg,
    });
  }
}
