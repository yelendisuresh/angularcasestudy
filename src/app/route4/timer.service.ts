import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  clicks: Subject<any> = new Subject();
  timeDuration: Subject<any> = new Subject();
  currentTimeDuration: Subject<any> = new Subject();;


  constructor() {

  }

  emitClicks(clickData: any): void {
    this.clicks.next(clickData);
  }

  emitTimeDuration(timeDurationData: any): void {
    this.timeDuration.next(timeDurationData);
  }

  currentTime(time: number): void {
    this.currentTimeDuration.next(time);
  }

}
