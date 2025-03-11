import {Routes} from '@angular/router';
import {isAuthGuard, isNotAuthGuard} from '@app/guards';

export const routes: Routes = [
  {
    path: 'todo/:id',
    canActivate: [isAuthGuard], // TODO добавить гвард для проверки userId/роли
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
