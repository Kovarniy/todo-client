import { Component } from '@angular/core';
import {TuiHeaderComponent} from '@taiga-ui/layout';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    TuiHeaderComponent
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {
}
