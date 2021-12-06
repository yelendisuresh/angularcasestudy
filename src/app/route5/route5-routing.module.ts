import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route5Component } from './route5.component';

const routes: Routes = [{ path: '', component: Route5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route5RoutingModule { }
