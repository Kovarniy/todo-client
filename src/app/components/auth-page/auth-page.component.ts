import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiButton, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiPassword} from '@taiga-ui/kit';
import {map, shareReplay} from 'rxjs';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    FormsModule, TuiPassword, TuiTextfield, TuiIcon, TuiButton, AsyncPipe
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {
  private route = inject(ActivatedRoute);
  isLoginPage$ = this.route.url.pipe(map((url) =>
    url[0].path === `login`
  ), shareReplay(),);
  title$ = this.isLoginPage$.pipe(map((isLoginPage) => isLoginPage ? 'Вход' : 'Регистрация'));

  userData = {
    password: '',
    username: '',
  }

  login() {

  }

  signup() {

  }
}
