import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Main } from './main.service';
import {Movie} from '../models/models';
const API_URL = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }
  getMovies(): Promise<Movie> {
    return this.get(API_URL + 'movies/', {});
  }
}
