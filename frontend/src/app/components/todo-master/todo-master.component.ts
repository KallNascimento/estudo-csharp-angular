import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';
import { catchError, Observable, take } from 'rxjs';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css']
})



export class TodoMasterComponent implements OnInit {
  displayedColumns: string[] = ['#', 'Description'];
  todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog
    ) {
      this.todos$ =  this.todoService.getAll();
    }
    
    
    
    ngOnInit(): void {
      this.loadTodos();

  }

  private loadTodos() {
    this.todos$ = this.todoService.getAll()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        }),
        take(1)
      );
  }


  openFormDialog(): void {
    const dialogRef = this.dialog.open(TodoFormComponent, { width: '400px' })
  }
}
