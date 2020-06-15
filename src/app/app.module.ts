// Angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
// Root component
import { AppComponent } from "./app.component";
// Modules
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { GlobalErrorService } from "@core/services/error/global-error/global-error.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
