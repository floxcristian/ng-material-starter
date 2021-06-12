// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// UI Module
import { MaterialModule } from "./material.module";
// Translate Module
import { TranslateModule } from "@ngx-translate/core";
// Angular FlexLayout
import { FlexLayoutModule } from "@angular/flex-layout";
// Layout
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { ClpCurrencyPipe } from "./pipes/clp-currency/clp-currency.pipe";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { AsideSliderComponent } from "./layout/aside-slider/aside-slider.component";

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  TranslateModule,
  FlexLayoutModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  MainLayoutComponent,
  AuthLayoutComponent,
  AsideSliderComponent,
];

const PIPES = [ClpCurrencyPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
