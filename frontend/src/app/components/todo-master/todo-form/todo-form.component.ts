import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, Observable, take } from 'rxjs';

import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    description : new FormControl()
   });

   public users$: Observable<User[]>; 

   constructor(
    private userService: UserService,
   ){}
    ngOnInit():void{
      this.loadUsers();
    }


  private loadUsers() {
    this.users$ = this.userService.getAll()
      .pipe(
        catchError((error) => {
          console.log(error);
          throw error;
        }),
        take(1)
      );
  }

  submit(){
    console.log("Clicou");
  }



}
