import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';
import {MovieService} from 'src/app/services/movie.service';
import {Movie} from 'src/app/models/models';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.css']
})
export class SoonComponent implements OnInit {

  constructor(private provider: MovieService) { }

  public movies:Array<Movie> = []

  ngOnInit() {
    Statics.onInit();
    const soon = document.getElementById('soon');
    soon.classList.add('active');
    this.getMovies();
  }


  getMovies() {
    this.provider.getMovie("True").then(res => {
      this.movies = res;
    });
  }
}
