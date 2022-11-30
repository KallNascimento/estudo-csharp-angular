import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user.type';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

  @Input() users: User[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns: string[] = ['#', 'Name', 'Actions'];
  constructor() { }
  
  ngOnInit(): void {
  }
  onAdd() {
    this.add.emit(true);
  }

  onEdit(user: User) {
    this.edit.emit(user);
  }

  onDelete(user: User) {
    this.remove.emit(user);
  }

}
