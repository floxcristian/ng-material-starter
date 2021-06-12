// Angular
import { NgModule } from "@angular/core";
// Routing Module
import { ProductsRoutingModule } from "./products-routing.module";
// Modules
import { SharedModule } from "@shared/shared.module";
// Components
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductsPageComponent } from "./containers/products-page/products-page.component";

@NgModule({
  declarations: [ProductCardComponent, ProductsPageComponent],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
