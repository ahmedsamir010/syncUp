import { Routes } from '@angular/router';
import { DashboardComponent } from './Layouts/dashboard/dashboard.component';
import { authGuard } from './Core/guards/auth.guard';
import { redirectGuard } from './Core/guards/redirect.guard';
import { UserComponent } from './Layouts/user/user.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    canActivate: [redirectGuard],
    component: UserComponent,
    loadChildren: () =>
      import('./Layouts/user/user.routes').then((m) => m.routes),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: DashboardComponent,
    loadChildren: () =>
      import('./Layouts/dashboard/dashboard.routes').then((m) => m.routes),
  },

  { path: '**', redirectTo: '' },
];
