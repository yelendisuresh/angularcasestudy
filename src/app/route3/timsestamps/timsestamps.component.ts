import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timsestamps',
  templateUrl: './timsestamps.component.html',
  styleUrls: ['./timsestamps.component.scss']
})
export class TimsestampsComponent implements OnInit {
  @Input() timeStamp: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
