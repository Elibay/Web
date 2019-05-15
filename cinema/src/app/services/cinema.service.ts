import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Main } from './main.service';
import {Movie, Cinema} from '../models/models';
import { Statics } from '../static/Statics';

@Injectable({
  providedIn: 'root'
})
export class CinemaService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }

  getCinemas(): Promise<Cinema[]> {
    return this.get(Statics.API_URL + '/cinemas/', {});
  }
}
