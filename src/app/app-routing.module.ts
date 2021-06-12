// Angular
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
// Guards
import { PublicGuard } from "@core/guards/public/public.guard";
import { AuthGuard } from "@core/guards/auth/auth.guard";
import { MainLayoutComponent } from "@shared/layout/main-layout/main-layout.component";
import { AuthLayoutComponent } from "@shared/layout/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: "account",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule), //
      },
      {
        path: "products",
        loadChildren: () =>
          import("./pages/products/products.module").then(
            (m) => m.ProductsModule
          ),
      },
    ],
  },
  {
    path: "**",
    loadChildren: () =>
      import("./pages/not-found-page/not-found-page.module").then(
        (m) => m.NotFoundPageModule
      ),
  },
];

// //canActivate: [ AuthGuard ]
//canActivate: [ PublicGuard ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
