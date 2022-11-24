import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, Subject, take, takeUntil } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service';
import { Util } from 'src/app/util/utils';
//import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit, OnDestroy {

  public title = 'Usuários';
  //public selectedUser: User;
  public users$: Observable<User[]>; //Usa-se $ no final das variaveis para saber que é um stream

  constructor(

    private router: Router,
    private userService: UserService,
  ) { }

  ngOnDestroy(): void {

  }

  ngOnInit() {
    this.loadUsers();
  }

  todoConcat(todos: Todo[]) {
    return Util.nameConcat(todos);
  }

  public getIsLoading(): Observable<boolean> {
    return this.userService.isLoading.asObservable();
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
}

