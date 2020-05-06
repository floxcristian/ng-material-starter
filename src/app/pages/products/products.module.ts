// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
