import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductDetailPageComponent } from "./containers/product-detail-page/product-detail-page.component";
import { ProductsPageComponent } from "./containers/products-page/products-page.component";

const routes: Routes = [
  {
    path: "",
    component: ProductsPageComponent,
  },
  {
    path: ":id",
    component: ProductDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
