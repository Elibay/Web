import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';
import { setClassMetadata, element } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Schedule, Hall } from 'src/app/models/models';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private provider: ScheduleService) { }

  public reserved:boolean[] = []
  public columns = [1,2,3,4,5,6,7,8,9]
  public rows = [0,1,2,3,4,5,6,7,8]
  public time_selected = false;
  public id = 0
  public schedules: Array<Schedule> = []
  public dates:number[] = []
  last = "";
  public hall: Array<Hall> = [];
  public toReserv: Array<number> = [];
  ngOnInit() {
    Statics.onInit();
    const schedule = document.getElementById('schedule');
    schedule.classList.add('active');

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.getScheduleById(this.id);
    this.getId();
  }

  activate(id: string) {
    const item = document.getElementById(id);
    item.classList.add('active');
  }

  printTitle(title: string) {
    if (this.last === title){
      return false;
    }
    this.last = title;
    return true;
  }
  date_click(id:number) {
    this.getId()
    this.dates.forEach( element => {
      const t = document.getElementById("she" + element.toString())
      t.classList.remove('date_coming_selected');
      t.classList.add('date_coming');
    })

    const item = document.getElementById("she" + id.toString());
    item.classList.add('date_coming_selected');

    this.getHall(id);
    this.time_selected = true;
  }

  t_click(id:number) {
    const index: number = this.toReserv.indexOf(id);
    const item = document.getElementById(id.toString());
    console.log(item)
    if (index !== -1) {
      this.toReserv.splice(index, 1);
      item.classList.remove('reserved');
    }
    else {
      this.toReserv.push(id);
      item.classList.add('reserved');
    }
  }


  buy(){
    console.log('buy')
  }

  getHall(id:number) {
    this.provider.getHall(id).then( res => {
      this.hall = res;
      this.hall.forEach( element => {
        this.reserved.push(element.is_reserved)
      })
      console.log(this.reserved)
    })
  }

  getScheduleById(id:number) {
    console.log(123);
    this.provider.getScheduleById(id).then(res => {
      this.schedules = res
    });
  }

  getId() {
    this.schedules.forEach(element => {
      this.dates.push(element.id)
    })
    
  }
  
  
  
}
