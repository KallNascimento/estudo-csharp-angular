import { Component, OnInit } from '@angular/core';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.type';
import { ErrorSnackComponent } from 'src/app/shared/components/error-snack/error-snack.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css']
})

export class TodoMasterComponent implements OnInit {
  todos$: Observable<Todo[]> | null = null;
  durationInSeconds = 5; //Snackbar timer
  constructor(
    private todoService: TodoService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.refresh();
  }
  ngOnInit(): void {
  }

  refresh() {
    this.todos$ = this.todoService.list()
      .pipe(
        catchError((error) => {
          this.onError('Oops! Não consegui carregar os dados.')
          return of([])
        })
      );
  }

  onAdd() {
    this.router.navigate(['new-todo'], { relativeTo: this.route });
  }

  onEdit(todo: Todo) {
    this.router.navigate(['edit-todo', todo.id], { relativeTo: this.route });
  }

  onRemove(todo: Todo) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse registro?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.todoService.delete(todo.id).subscribe(
          () => {
            this.refresh();
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



  openFormDialog(): void {
    this.dialog.open(TodoFormComponent, { width: '400px' })
  }
  onError(errorMsg: string) {
    this._snackBar.openFromComponent(ErrorSnackComponent, {
      duration: this.durationInSeconds * 1000,
      data: errorMsg,
    });
  }
}
