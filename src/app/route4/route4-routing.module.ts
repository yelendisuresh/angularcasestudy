import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route4Component } from './route4.component';

const routes: Routes = [{ path: '', component: Route4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route4RoutingModule { }
