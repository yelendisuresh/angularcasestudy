import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';


@NgModule({
  declarations: [
    Route3Component
  ],
  imports: [
    CommonModule,
    Route3RoutingModule
  ]
})
export class Route3Module { }
