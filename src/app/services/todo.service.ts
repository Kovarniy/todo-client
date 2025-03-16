import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '@app/models';
import {Endpoints} from '@app/services/endpoints';
import {AuthService} from '@app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private auth = inject(AuthService);

  constructor(private http: HttpClient) {}

  getTodos(userId: string) {
    const url = Endpoints.todo.todos({userId});
    return this.http.get<Todo[]>(url);
  }

  add(userId: string, todo: Todo) {
    const url = Endpoints.todo.todos({userId});
    return this.http.post<Todo[]>(url, {todo});
  }

  update(todo: Todo) {
    const url = Endpoints.todo.todo();
    return this.http.patch<Todo[]>(url, {todo});
  }

  remove(todo: Todo) {
    const url = Endpoints.todo.deleteTodo({id: todo.id});
    return this.http.delete<Todo[]>(url);
  }
}
