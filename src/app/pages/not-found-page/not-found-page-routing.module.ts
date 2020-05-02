import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '', 
    component: NotFoundPageComponent, 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundPageRoutingModule { }
