import {Routes} from '@angular/router';
import {AboutPageComponent} from '@app/components';
import {haveAccessGuard, isAuthGuard, isNotAuthGuard} from '@app/guards';

export const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
  {
    path: 'todo/:id',
    canActivate: [isAuthGuard, haveAccessGuard], // TODO добавить гвард для проверки userId/роли
    // (В презе можно сказать про два уровня защиты, что мы защищаем UI при момощи гварда + добавляем токен при помощи интерцептора)
    loadComponent: () =>
      import('./components/todo-page').then((comp) => comp.TodoPageComponent),
  },
  {
    path: 'login',
    canActivate: [isNotAuthGuard],
    loadComponent: () =>
      import('./components/auth-page').then((comp) => comp.AuthPageComponent),
  },
  {
    path: 'signup',
    canActivate: [isNotAuthGuard],
    loadComponent: () =>
      import('./components/auth-page').then((comp) => comp.AuthPageComponent),
  },
];
