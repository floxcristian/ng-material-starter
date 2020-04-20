// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// Guards
import { PublicGuard } from './core/guards/public/public.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';
// Modules
import { AuthModule } from './features/auth/auth.module';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  /*
  {
    path: 'login', component: 
    , 
    pathMatch: 'full', 
    canActivate: [ PublicGuard ]
  },*/
  {
    path: 'home', component: HomePageComponent, data: { name: 'Home' }, canActivate: [ AuthGuard ]
  },
  {
    path: '**', component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
