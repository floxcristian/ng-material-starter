// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // luego debe ser importado en cada lazy module
// UI module
import { MaterialModule } from './material/material.module';
// Core module
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Feature modules
import { HeaderComponent } from './components/header/header.component';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';

import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';

import { LoginErrorModalComponent } from './pages/login-error-modal/login-error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundPageComponent,
    HomePageComponent,
    ArticlesPageComponent,
    ProductsPageComponent,
    EditProductPageComponent,
    LoginErrorModalComponent
  ],
  entryComponents: [
    EditProductPageComponent,
    LoginErrorModalComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // UI Modules
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
