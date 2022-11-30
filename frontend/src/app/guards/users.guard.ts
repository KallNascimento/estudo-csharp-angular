import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user.type';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements Resolve<User> {
  constructor(private service: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }
    return of({ id: 0, name: '' });
  }
}

