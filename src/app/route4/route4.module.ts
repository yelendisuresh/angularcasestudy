import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';


@NgModule({
  declarations: [
    Route4Component
  ],
  imports: [
    CommonModule,
    Route4RoutingModule
  ]
})
export class Route4Module { }
