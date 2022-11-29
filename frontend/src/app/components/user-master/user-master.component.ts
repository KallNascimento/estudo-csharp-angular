import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersFormComponent } from './users-form/users-form.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit, OnDestroy {
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnDestroy(): void {

  }

  ngOnInit() {

  }


  openFormDialog(): void {
    const dialogRef = this.dialog.open(UsersFormComponent, { width: '400px' })
  }
}

