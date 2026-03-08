import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.routes'),
  },
  {
    path: '**',
    redirectTo: 'pipes',
  },
];
