import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiCheckbox} from '@taiga-ui/kit';
import {AuthService, TodoService} from '@app/services';
import {AsyncPipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [FormsModule, TuiCheckbox, AsyncPipe],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  private todoService = inject(TodoService);
  private route = inject(ActivatedRoute);

  // TODO страница с другим userId должна быть защищина при помощи guard
  todos$ = this.route.url.pipe(
    switchMap((url) => {
      console.log(url);
      return this.todoService.getTodos(url[1].path);
    }),
  );
}
