import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route6-routing.module';
import { Route6Component } from './route6.component';


@NgModule({
  declarations: [
    Route6Component
  ],
  imports: [
    CommonModule,
    Route6RoutingModule
  ]
})
export class Route6Module { }
