import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { TimerComponent } from './timer/timer.component';
import { SettimerComponent } from './settimer/settimer.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { LogsComponent } from './logs/logs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Route4Component,
    TimerComponent,
    SettimerComponent,
    TimestampComponent,
    LogsComponent
    ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    FormsModule
  ]
})
export class Route4Module { }
