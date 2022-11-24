import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/interfaces/todo.type';

@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css']
})
export class TodoMasterComponent implements OnInit {
  todoForm!: FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    console.log("Formulario enviado");

  }
}
