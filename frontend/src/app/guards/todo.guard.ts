import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from '../types/todo.type';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoGuard implements Resolve<Todo> {
  constructor(private service: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo> {
    if (route.params && route.params['id']) {
      return this.service.listById(route.params['id']);
    }
    return of({ id: 0, description: '', userId: 0 });
  }
}
