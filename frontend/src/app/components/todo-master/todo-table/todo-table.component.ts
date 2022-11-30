import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.type';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {

  @Input() todos: Todo[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns: string[] = ['#', 'Description', 'Actions'];

  constructor() { }

  ngOnInit(): void {

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
