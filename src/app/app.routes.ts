import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo',
    loadComponent: () => import('./components/todo-page').then((comp) => comp.TodoPageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/auth-page').then((comp) => comp.AuthPageComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./components/auth-page').then((comp) => comp.AuthPageComponent)
  }
];
