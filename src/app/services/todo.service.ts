import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '@app/models';
import {Endpoints} from '@app/services/endpoints';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(userId: string) {
    console.log(userId);
    const url = Endpoints.todo.todos({userId});
    console.log(url);
    return this.http.get<Todo[]>(url);
  }
}
