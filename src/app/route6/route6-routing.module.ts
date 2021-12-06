import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route6Component } from './route6.component';

const routes: Routes = [{ path: '', component: Route6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route6RoutingModule { }
