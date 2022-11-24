import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';
import { catchError, Observable, take } from 'rxjs';

@Component({
  selector: 'app-todo-master',
  templateUrl: './todo-master.component.html',
  styleUrls: ['./todo-master.component.css']
})
export class TodoMasterComponent implements OnInit {
  todoForm!: FormGroup
  public todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
  ) { }

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


  submit() {
    console.log("Formulario enviado");
  }
}
