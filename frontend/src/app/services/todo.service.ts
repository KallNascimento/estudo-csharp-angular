import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly baseURL = `${environment.mainUrlAPI}todo`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseURL).pipe(
      //delay(5000), //Para testar o spinner
      tap(todos => console.log(todos)));

  }

  save(record: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseURL, record);
  }
}
