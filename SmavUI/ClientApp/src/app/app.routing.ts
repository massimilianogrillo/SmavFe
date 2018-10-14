import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { AuthGuard } from './auth/auth.guard';

export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,canActivate:[AuthGuard],
    children:
  [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: './session/session.module#SessionModule'
  }]
 },
{
  path: '**',
  redirectTo: 'session/404'
}];
