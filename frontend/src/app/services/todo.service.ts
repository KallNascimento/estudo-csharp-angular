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

  list(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseURL).pipe(
    );
  }
  listById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseURL}/${id}`);
  }

  save(record: Partial<Todo>): Observable<Todo> {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.baseURL, record);
  }

  private update(record: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseURL}/${record.id}`, record);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
