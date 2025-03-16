import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService, TodoService} from '@app/services';
import {AsyncPipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, switchMap, take} from 'rxjs';
import {
  TuiButton,
  TuiDialog,
  TuiTextfieldComponent,
  TuiTextfieldDirective,
} from '@taiga-ui/core';
import {TodoCardComponent} from '@app/components';
import {Todo} from '@app/models';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    TuiButton,
    ReactiveFormsModule,
    TuiDialog,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TodoCardComponent,
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent {
  private todoService = inject(TodoService);
  private route = inject(ActivatedRoute);
  protected isOpenModal = false;
  public editTodo: Todo = {
    title: '',
  };
  public action!: 'add' | 'update';

  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private auth: AuthService) {
    this.route.url
      .pipe(
        switchMap((url) => {
          return this.todoService.getTodos(url[1].path);
        }),
        take(1),
      )
      .subscribe((todos) => this.todos$.next(todos));
  }

  openModal(todo?: Todo) {
    if (todo) {
      this.action = 'update';
      this.editTodo = todo;
    } else {
      this.action = 'add';
      this.editTodo.title = '';
    }
    this.isOpenModal = true;
  }

  onEdit() {
    this.isOpenModal = false;
    if (this.action === 'add') {
      this.todoService
        .add(this.auth.userValue?.id as string, this.editTodo)
        .pipe(take(1))
        .subscribe((todos) => this.todos$.next(todos));
      return;
    }
    this.todoService
      .update(this.editTodo)
      .pipe(take(1))
      .subscribe((todos) => this.todos$.next(todos));
  }

  onRemove(todo: Todo) {
    this.todoService
      .remove(todo)
      .pipe(take(1))
      .subscribe((todos) => this.todos$.next(todos));
  }

  onStatusChange(status: boolean, todo: Todo) {
    todo.completed = status;
    this.todoService
      .update(todo)
      .pipe(take(1))
      .subscribe((todos) => this.todos$.next(todos));
  }
}
