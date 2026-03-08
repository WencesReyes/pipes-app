import { Routes } from '@angular/router';
import { PipesLayout } from './layouts/pipes-layout/pipes-layout';

const routes: Routes = [
  {
    path: '',
    component: PipesLayout,
    children: [
      {
        path: 'basic',
        loadComponent: () => import('./pages/basic-page/basic-page'),
        title: 'Pipes básicos',
      },
      {
        path: 'number',
        loadComponent: () => import('./pages/number-page/number-page'),
        title: 'Pipes de números',
      },
      {
        path: 'custom',
        loadComponent: () => import('./pages/custom-page/custom-page'),
        title: 'Pipes personalizados',
      },
      {
        path: 'uncommon',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
        title: 'Pipes no comunes',
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];

export default routes;
