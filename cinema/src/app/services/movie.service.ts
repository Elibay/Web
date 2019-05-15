import {EventEmitter, Injectable} from '@angular/core';
import {Main} from './main.service';
import {HttpClient} from '@angular/common/http';
import { patchComponentDefWithScope } from '@angular/core/src/render3/jit/module';
import { Movie } from '../models/models';
import { Statics } from '../static/Statics';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }

  getMovie(soon: string): Promise<Movie[]> {
    return this.get(Statics.API_URL, {'soon': soon});
  }
  getMovieDetail(id: number): Promise<Movie> {
    return this.get(Statics.API_URL + '/movie/' + id, {});
  }
}
