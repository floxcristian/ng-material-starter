// Angular
import { NgModule } from '@angular/core';
// Router
import { AuthRoutingModule } from './auth-routing.module';
// Pages
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
// Modals
import { LoginErrorModalComponent } from './pages/login-error-modal/login-error-modal.component';
import { SharedModule } from '@shared/shared.module';
// Directives
import { TooltipPasswordDirective } from './shared/tooltip-password/tooltip-password.directive';

@NgModule({
  declarations: [
    LoginComponent,
    LoginErrorModalComponent,
    SignupComponent,
    TooltipPasswordDirective,
  ],
  entryComponents: [
    LoginErrorModalComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
