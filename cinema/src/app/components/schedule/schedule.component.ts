import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Statics.onInit();
    const schedule = document.getElementById('schedule');
    schedule.classList.add('active');
  }

}
