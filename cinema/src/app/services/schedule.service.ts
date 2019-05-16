import {EventEmitter, Injectable} from '@angular/core';
import {Main} from './main.service';
import {HttpClient} from '@angular/common/http';
import { patchComponentDefWithScope } from '@angular/core/src/render3/jit/module';
import { Movie, Schedule, Hall } from '../models/models';
import { Statics } from '../static/Statics';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }

  getScheduleById(id:number) :Promise<Schedule[]> { 
    return this.get(Statics.API_URL + "/schedule/", {'id': id});
  }

  getHall(id:number) :Promise<Hall[]> {
    return this.get(Statics.API_URL + "/hall/", {'id': id});
  }

  postReserved(reserve: Array<Hall>) {
    console.log('elibay 4ert')
    return this.post(Statics.API_URL + "/hall/", { reserve });
  }
  
}