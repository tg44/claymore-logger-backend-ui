import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [
        AuthGuard,
        AuthService,
    ],
})
export class SharedModule {}
