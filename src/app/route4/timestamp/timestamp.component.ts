import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {

  timeStamp: Array<any> = []
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.clicks.subscribe((clickData)=>{
      this.timeStamp.push(clickData);
    })
  }
}
