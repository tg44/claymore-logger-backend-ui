import { Routes, RouterModule } from '@angular/router';

import { Login } from './login.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginCallback } from 'app/pages/login/login-callback.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [

  {
    path: ':uid',
    component: LoginCallback,
  },
  {
    path: '',
    component: Login,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
