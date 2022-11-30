import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.type';
import { TodoService } from 'src/app/services/todo.service';

import { TodoFormComponent } from '../todo-form/todo-form.component';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {

  @Input() todos:Todo[]=[];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);



  
  readonly displayedColumns: string[] = ['#', 'Description', 'Actions'];

  constructor(
    private todoService: TodoService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {
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
    });
    console.log(todo);

  }

  // onEdit(todo: Todo) {
  //   console.log(
  //     this.todoService.update(todo)
  //   );

  //   //this.openDialog(todo);
  // }

  // onDelete(id: number) {
  //   this.todoService.getById(id)
  // }


  ngOnInit(): void {
    // this.loadTodos();
  }


  onAdd() {
    this.add.emit(true);
  }

  onEdit(todo: Todo) {
    this.edit.emit(todo);
  }

  onDelete(todo: Todo) {
    this.remove.emit(todo);
  }
}
