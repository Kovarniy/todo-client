import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, of, tap} from 'rxjs';
import {Endpoints} from './endpoints';
import {User} from '../models';
import {Router} from '@angular/router';
import {storage, STORAGE_KEY} from '@app/utils';
import {TuiAlertService} from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _user$ = new BehaviorSubject<User | null>(null);
  public user$ = this._user$.asObservable();
  private readonly router = inject(Router);
  private readonly alerts = inject(TuiAlertService);

  public get userValue(): User | null {
    return this._user$?.value;
  }

  constructor(private http: HttpClient) {
    const user = storage.get(STORAGE_KEY.USER) as User;
    this._user$.next(user);
  }

  logout() {
    storage.remove(STORAGE_KEY.USER);
    this._user$.next(null);
    this.router.navigate(['']);
  }

  signup(user: User) {
    const signup = Endpoints.auth.signup();
    return this.http.post<User>(signup, user).pipe(
      tap((user) => this.saveUser(user)),
      catchError((err) => {
        this.alerts
          .open('Ошибка регистрации', {
            appearance: 'negative',
          })
          .subscribe();
        return of(null);
      }),
    );
  }

  login(user: User) {
    const loginUrl = Endpoints.auth.login();
    return this.http.post<User>(loginUrl, user).pipe(
      tap((user) => this.saveUser(user)),
      catchError((err) => {
        this.alerts
          .open('Неверный пароль или email', {
            appearance: 'negative',
          })
          .subscribe();
        return of(null);
      }),
    );
  }

  /* PRIVATE DOMAIN */

  private saveUser(user: User) {
    storage.set(STORAGE_KEY.USER, user);
    this.router.navigate(['todo']);
    this._user$.next(user);
  }
}
