import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Login } from 'app/pages/login/login.component';
import { routing } from 'app/pages/login/login.routing';
import { LoginCallback } from 'app/pages/login/login-callback.component';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Login,
    LoginCallback,
  ],
})
export class LoginModule {}
