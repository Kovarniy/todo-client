import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '@app/models';
import {Endpoints} from '@app/services/endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) {}

  getTodos(userId: string): Observable<Todo[]> {
    const url = Endpoints.todo.todos({userId});
    return this.http.get<Todo[]>(url);
  }

  add(userId: string, todo: Todo): Observable<Todo[]> {
    const url = Endpoints.todo.todos({userId});
    return this.http.post<Todo[]>(url, {todo});
  }

  update(todo: Todo): Observable<Todo[]> {
    const url = Endpoints.todo.todo();
    return this.http.patch<Todo[]>(url, {todo});
  }

  remove(todo: Todo): Observable<Todo[]> {
    const url = Endpoints.todo.deleteTodo({id: todo.id});
    return this.http.delete<Todo[]>(url);
  }
}
