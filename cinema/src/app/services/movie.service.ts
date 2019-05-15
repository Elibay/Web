import {EventEmitter, Injectable} from '@angular/core';
import {Main} from './main.service';
import {HttpClient} from '@angular/common/http';
import { patchComponentDefWithScope } from '@angular/core/src/render3/jit/module';
import { Movie } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends Main {


  constructor(http: HttpClient) {
    super(http);
  }

  getMovie(soon: string): Promise<Movie[]> {
    return this.get('http://192.168.1.10:8000/api/', {"soon": soon});
  }
  getMovieDetail(id: number): Promise<Movie> {
    return this.get('http://192.168.1.10:8000/api/movie/' + id, {});
  }  
}
