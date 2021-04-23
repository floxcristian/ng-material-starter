// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Modules
import { ProductsRoutingModule } from "./products-routing.module";
import { SharedModule } from "@shared/shared.module";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductsPageComponent } from "./containers/products-page/products-page.component";

@NgModule({
  declarations: [ProductCardComponent, ProductsPageComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
