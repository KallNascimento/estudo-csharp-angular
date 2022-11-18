import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = `${environment.mainUrlAPI}user`;

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  post(user: User) {
    return this.http.post(this.baseURL, User);
  }

  put(user: User) {
    return this.http.put(`${this.baseURL}/${user.id}`, User);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }


}