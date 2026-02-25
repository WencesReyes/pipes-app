import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    loadComponent: () => import('./pipes/pages/basic-page/basic-page'),
    title: 'Pipes básicos',
  },
  {
    path: 'number',
    loadComponent: () => import('./pipes/pages/number-page/number-page'),
    title: 'Pipes de números',
  },
  {
    path: 'custom',
    loadComponent: () => import('./pipes/pages/custom-page/custom-page'),
    title: 'Pipes personalizados',
  },
  {
    path: 'uncommon',
    loadComponent: () => import('./pipes/pages/uncommon-page/uncommon-page'),
    title: 'Pipes no comunes',
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
