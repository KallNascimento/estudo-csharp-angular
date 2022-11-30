import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private readonly baseURL = `${environment.mainUrlAPI}user`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  save(record: User):Observable<User> {
    return this.http.post<User>(this.baseURL, record);
  }

  update(record: User):Observable<User> {
    return this.http.put<User>(`${this.baseURL}/${record.id}`, record);
  }

  delete(id:number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }


}