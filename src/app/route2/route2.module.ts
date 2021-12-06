import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { Route2RoutingModule } from './route2-routing.module';
import { Route2Component } from './route2.component';


@NgModule({
  declarations: [
    Route2Component,
  ],
  imports: [
    CommonModule,
    Route2RoutingModule,
    HttpClientModule
  ]
})
export class Route2Module { }
