import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/models';
import {MovieService} from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  constructor(private provider: MovieService, private route: ActivatedRoute) { }
  movie: Movie;
  id: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.provider.getMovieDetail(this.id).then(res => {
      console.log(this.id);
      this.movie = res;
      console.log(res);
    });
  }

}
