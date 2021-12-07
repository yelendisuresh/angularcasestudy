import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  clickData: any;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.clicks.subscribe(data =>{
        this.clickData = data
    })
  }
}
