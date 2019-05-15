import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Main } from './main.service';
import {Movie} from '../models/models';
import { Statics } from '../static/Statics';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }
  getMovies(): Promise<Movie> {
    return this.get(Statics.API_URL + 'movies/', {});
  }
}
