import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settimer',
  templateUrl: './settimer.component.html',
  styleUrls: ['./settimer.component.scss']
})
export class SettimerComponent implements OnInit {

  @Output() timeDuration = new EventEmitter();
  @Output() clickDetails = new EventEmitter();
  @Input() currentTime: any;
  toggle: boolean = false;
  bundledValue: any;
  start: number = 0;
  paused: number = 0;
  timestampArray:string[] =[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(isNaN(this.currentTime)){
      alert("Please Enter Valid Number")
      return;
    }else if(this.currentTime <= 0){
      this.toggle = false;
      alert("Please Enter Value more Than 0")
      return;
    }

    this.toggle = !this.toggle;
    if(this.toggle){
      let date = new Date()
  
      this.start+=1;
      this.clickDetails.emit({started: this.start, paused: this.paused, date: 'Started at ' + date.toString(), reset: false});
      this.timestampArray.push("started at"+ this.currentTime);
    }else{
      let date = new Date()
      this.paused+=1;
      this.clickDetails.emit({started: this.start, paused: this.paused, date: 'Paused at ' + date.toString(), reset: false});
      this.timestampArray.push("paused at"+ this.currentTime);

    }
    this.timeDuration.emit({duration: this.currentTime, toggle: this.toggle, reset: false});
  }
  reset(){
      this.toggle = false;
      let date = new Date()
      this.clickDetails.emit({started: this.start, paused: this.paused, date: 'Reset at ' + date.toString(), resetDate: date});
      this.timeDuration.emit({duration: 0, toggle: false, reset: true});
      this.timestampArray.push("reset at"+ this.currentTime);
  }

}
