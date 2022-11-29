import { Component, OnInit } from '@angular/core';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { MatDialog } from '@angular/material/dialog';
import { TodoTableComponent } from './todo-table/todo-table.component';
@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css']
})

export class TodoMasterComponent implements OnInit {
 
  constructor(

    public dialog: MatDialog
    ) {
      // this.todos$ =  this.todoService.getAll();
    }   
    ngOnInit(): void {

  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(TodoFormComponent, { width: '400px' })
  }
}
