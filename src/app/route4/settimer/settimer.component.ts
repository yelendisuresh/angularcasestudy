import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-settimer',
  templateUrl: './settimer.component.html',
  styleUrls: ['./settimer.component.scss']
})
export class SettimerComponent implements OnInit {
  currentTime: any;
  toggle: boolean = false;
  bundledValue: any;
  start: number = 0;
  paused: number = 0;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.currentTimeDuration.subscribe((data: any)=> {
        this.currentTime = data
        console.log(this.currentTime)
        if(this.currentTime <= 0){
          console.log("Hello", data)  

          this.toggle = false;
        }
        
        })
  }

  onSubmit(){
    if(isNaN(this.currentTime)){
      alert("Please Enter Numeric Values")
      return;
    }else if(this.currentTime <= 0){
      alert("Please Enter Value Greater Than 0")
      return;
    }

    this.toggle = !this.toggle;
    if(this.toggle){
      let date = new Date()
  
      this.start+=1;
      this.timerService.emitClicks({started: this.start, paused: this.paused, date: 'Started at ' + date.toString(), reset: false});
    }else{
      let date = new Date()
      this.paused+=1;
      this.timerService.emitClicks({started: this.start, paused: this.paused, date: 'Paused at ' + date.toString(), reset: false});
    }
    this.timerService.emitTimeDuration({duration: this.currentTime, toggle: this.toggle, reset: false});
  }
  reset(){
      this.toggle = false;
      let date = new Date()
      this.timerService.emitClicks({started: this.start, paused: this.paused, date: 'Reset at ' + date.toString(), resetDate: date});
      this.timerService.emitTimeDuration({duration: 0, toggle: false, reset: true});

  }


}
