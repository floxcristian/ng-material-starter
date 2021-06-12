// Angular
import { NgModule } from "@angular/core";
// Routing Module
import { AuthRoutingModule } from "./auth-routing.module";
// Components
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
// Modals
import { LoginErrorModalComponent } from "./pages/login-error-modal/login-error-modal.component";
import { SharedModule } from "@shared/shared.module";
// Directives
import { TooltipPasswordDirective } from "./shared/directives/tooltip-password/tooltip-password.directive";
import { AuthSliderComponent } from "./shared/components/auth-slider/auth-slider.component";

@NgModule({
  declarations: [
    LoginComponent,
    LoginErrorModalComponent,
    SignupComponent,
    TooltipPasswordDirective,
    AuthSliderComponent,
  ],
  entryComponents: [LoginErrorModalComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
