import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';
import { setClassMetadata } from '@angular/core/src/render3';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  public seats = [1,2,3,4,5,6,7,8,9,10]
  public rows = [0,1,2,3,4,5,6,7]
  ngOnInit() {
    Statics.onInit();
    const schedule = document.getElementById('schedule');
    schedule.classList.add('active');

  }

  activate(id: string) {
    const item = document.getElementById(id);
    item.classList.add('active');
  }
}
