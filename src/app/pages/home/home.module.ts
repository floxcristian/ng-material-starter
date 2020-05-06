// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { HomeRoutingModule } from './home-routing.module';
// Root component
import { HomePageComponent } from './pages/home-page/home-page.component';
// Modules
import { SharedModule } from '@shared/shared.module';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    EditProductPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  entryComponents: [
    EditProductPageComponent
  ]
})
export class HomeModule { }
