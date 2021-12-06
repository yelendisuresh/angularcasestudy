import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {

  currentTime: any;
  timeInterval: any;
  clickData: any;
  timeStamp: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

  getTimeDuration(time: any) {

    if (time.toggle) {
      this.currentTime = time.duration;
      this.timeInterval = setInterval(() => {

        this.currentTime = this.currentTime - 1
        if (this.currentTime <= 0) {
          this.currentTime = 0;
          clearInterval(this.timeInterval)
        }
      }  , 1000)
    }
    else if (time.reset) {
      this.currentTime = 0;
      clearInterval(this.timeInterval)
    }
    else {
      clearInterval(this.timeInterval)
    }

  }

  getclickDetails(clickData: any) {
    this.clickData = clickData;
    this.timeStamp.push(clickData)
  }

}
