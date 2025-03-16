import {ActivatedRoute, Router} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiButton, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiPassword} from '@taiga-ui/kit';
import {map, shareReplay, take} from 'rxjs';
import {AuthService} from '@app/services';
import {User} from '@app/models';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    FormsModule,
    TuiPassword,
    TuiTextfield,
    TuiIcon,
    TuiButton,
    AsyncPipe,
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  isLoginPage$ = this.route.url.pipe(
    map((url) => url[0].path === `login`),
    shareReplay(),
  );
  user: User = {
    password: '',
    name: '',
  };

  get isFormCompleted() {
    return this.user.name && this.user.password;
  }

  constructor(private auth: AuthService) {}

  login() {
    this.auth
      .login(this.user)
      .pipe(take(1))
      .subscribe((user) => this.openTodo(user));
  }

  signup() {
    this.auth
      .signup(this.user)
      .pipe(take(1))
      .subscribe((user) => this.openTodo(user));
  }

  private openTodo(user: User | null) {
    if (!user) return;
    this.router.navigate(['todo', user.id]);
  }
}
