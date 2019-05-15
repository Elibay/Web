import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';
import { setClassMetadata, element } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public seats = [1,2,3,4,5,6,7,8,9]
  public rows = [0,1,2,3,4,5,6,7]
  public time_selected = false;
  public dates = ["18:40", "19:20"];
  public id = 0

  ngOnInit() {
    Statics.onInit();
    const schedule = document.getElementById('schedule');
    schedule.classList.add('active');

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  activate(id: string) {
    const item = document.getElementById(id);
    item.classList.add('active');
  }

  date_click(id:string) {
    console.log('date_click')
    
    this.dates.forEach( element => {
      const t = document.getElementById(element)
      t.classList.remove('date_coming_selected');
    })
    const item = document.getElementById(id);
    item.classList.add('date_coming_selected');
    this.time_selected = true;
  }

  buy(){
    console.log('buy')
  }
}
