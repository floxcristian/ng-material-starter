// Angular
import { NgModule } from "@angular/core";
// Routing Module
import { HomeRoutingModule } from "./home-routing.module";
// Root Component
import { HomePageComponent } from "./pages/home-page/home-page.component";
// Modules
import { SharedModule } from "@shared/shared.module";
// Components
import { EditProductPageComponent } from "./pages/edit-product-page/edit-product-page.component";
import { BannerComponent } from "./components/banner/banner.component";

@NgModule({
  declarations: [HomePageComponent, EditProductPageComponent, BannerComponent],
  imports: [HomeRoutingModule, SharedModule],
  entryComponents: [EditProductPageComponent],
})
export class HomeModule {}
