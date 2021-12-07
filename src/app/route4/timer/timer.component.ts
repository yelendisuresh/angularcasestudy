import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  currentTime: number = 0;
  timeInterval: any;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.timeDuration.subscribe((data) => { this.getTimeDuration(data) })
  }

  getTimeDuration(time: any) {

    if (time.toggle) {
      this.currentTime = time.duration;
      this.timeInterval = setInterval(() => {
        this.currentTime = this.currentTime - 1;
        if (this.currentTime <= 0) {
          this.currentTime = 0;
          this.timerService.currentTime(0);
          clearInterval(this.timeInterval)
        }
      }, 1000)

    }
    else if (time.reset) {
      this.currentTime = 0;
      this.timerService.currentTime(time.duration);
      clearInterval(this.timeInterval)
    }
    else {
      this.timerService.currentTime(this.currentTime);
      clearInterval(this.timeInterval)
    }

  }


}
