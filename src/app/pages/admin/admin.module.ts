// Angular
import { NgModule } from "@angular/core";
// Routing Module
import { AdminRoutingModule } from "./admin-routing.module";
// Modules
import { SharedModule } from "@shared/shared.module";
// Components
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule {}
