import { Component, OnInit } from '@angular/core';
import {Statics} from '../../static/Statics';
import { Movie } from 'src/app/models/models';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private provider: MovieService) { }

  public movies:Array<Movie> = []

  ngOnInit() {
    Statics.onInit();
    const index = document.getElementById('index');
    index.classList.add('active');
    

    this.getMovies()
    // let avenger:Movie = {
    //   id: 1,
    //   title: "Мстители",
    //   country: "США",
    //   poster: "",
    //   genre: "triller",
    //   premiere:  "13123",
    //   duration: "1212",
    //   age: 18,
    //   description: "asdk;AVJBSERHV[S EOIRPAIEORGNHAIOUERHV;sdvhapufbvaerhgfjpa ergviuaergvoyewugf",
    //   comments: [
    //     {
    //       author: "dasd",
    //       text: "asdasdsa",
    //       date: "asdasd"
    //     }
    //   ]
    // }

    // let hulk:Movie = {
    //   id: 1,
    //   title: "Hulk",
    //   country: "aafad",
    //   poster: "",
    //   genre: "triller",
    //   premiere:  "13123",
    //   duration: "1212",
    //   age: 18,
    //   description: "asdk;AVJBSERHV[S EOIRPAIEORGNHAIOUERHV;sdvhapufbvaerhgfjpa ergviuaergvoyewugf",
    //   comments: [
    //     {
    //       author: "dasd",
    //       text: "asdasdsa",
    //       date: "asdasd"
    //     }
    //   ]
    // }
    // this.movies.push(avenger)
    // this.movies.push(hulk)
  }

  getMovies() {
    this.provider.getMovie().then(res => {
      this.movies = res;
    });
  }
}
