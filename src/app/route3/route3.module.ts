import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { TimerComponent } from './timer/timer.component';
import { SettimerComponent } from './settimer/settimer.component';
import { TimsestampsComponent } from './timsestamps/timsestamps.component';
import { LogsComponent } from './logs/logs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Route3Component,
    TimerComponent,
    SettimerComponent,
    TimsestampsComponent,
    LogsComponent
  ],
  imports: [
    CommonModule,
    Route3RoutingModule,
    FormsModule
  ]
})
export class Route3Module { }
